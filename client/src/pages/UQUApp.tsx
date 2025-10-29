import { useState, useEffect } from 'react';
import { Link } from 'wouter';

export default function UQUApp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSectionMenuOpen, setIsSectionMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    { id: 'dropwise', name: 'DropWise', path: '/projects/dropwise' },
    { id: 'uqu', name: 'UQU App', path: '/projects/uqu' },
    { id: 'shroomcycle', name: 'ShroomCycle', path: '/projects/shroomcycle' },
    { id: 'accounting-firm', name: 'Accounting Firm', path: '/projects/accounting-firm' }
  ];

  const sections = [
    { id: 'overview', name: 'Overview' },
    { id: 'problem', name: 'Problem Space' },
    { id: 'research', name: 'User Research' },
    { id: 'persona', name: 'User Persona' },
    { id: 'solution', name: 'Proposed Solution' },
    { id: 'ui-design', name: 'UI Design' },
    { id: 'prototyping', name: 'Prototyping' },
    { id: 'testing', name: 'User Testing' },
    { id: 'takeaways', name: 'Key Takeaways' }
  ];

  const currentIndex = 1;
  const prevProject = projects[0];
  const nextProject = projects[2];

  const hifiPrototypes = [
    "https://github.com/CarolineXXY/portfolio-assets/blob/main/images/UQU-app/homepage.png?raw=true",
    "https://github.com/CarolineXXY/portfolio-assets/blob/main/images/UQU-app/event-calendar.png?raw=true",
    "https://github.com/CarolineXXY/portfolio-assets/blob/main/images/UQU-app/event-details.png?raw=true",
    "https://github.com/CarolineXXY/portfolio-assets/blob/main/images/UQU-app/matesrates.png?raw=true",
    "https://github.com/CarolineXXY/portfolio-assets/blob/main/images/UQU-app/vendors.png?raw=true",
    "https://github.com/CarolineXXY/portfolio-assets/blob/main/images/UQU-app/SAS.png?raw=true",
    "https://github.com/CarolineXXY/portfolio-assets/blob/main/images/UQU-app/profile.png?raw=true",
    "https://github.com/CarolineXXY/portfolio-assets/blob/main/images/UQU-app/chats.png?raw=true",
    "https://github.com/CarolineXXY/portfolio-assets/blob/main/images/UQU-app/volunteer.png?raw=true",
    "https://github.com/CarolineXXY/portfolio-assets/blob/main/images/UQU-app/volunteer-rule.png?raw=true"
  ];

  const [currentHifiIndex, setCurrentHifiIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen" style={{ background: '#F8F7F3' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold" style={{ color: '#5D7CA6' }}>
              Caroline
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link href="/#home" className="font-medium transition-colors" style={{ color: '#2B2B2B' }}>Home</Link>
              <Link href="/#about" className="font-medium transition-colors" style={{ color: '#2B2B2B' }}>About</Link>
              <Link href="/#projects" className="font-medium transition-colors" style={{ color: '#2B2B2B' }}>Projects</Link>
              <Link href="/#contact" className="font-medium transition-colors" style={{ color: '#2B2B2B' }}>Contact</Link>
            </div>

            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <Link href="/#home" className="block py-2 font-medium" style={{ color: '#2B2B2B' }}>Home</Link>
              <Link href="/#about" className="block py-2 font-medium" style={{ color: '#2B2B2B' }}>About</Link>
              <Link href="/#projects" className="block py-2 font-medium" style={{ color: '#2B2B2B' }}>Projects</Link>
              <Link href="/#contact" className="block py-2 font-medium" style={{ color: '#2B2B2B' }}>Contact</Link>
            </div>
          )}
        </div>
      </nav>



      {/* Project Content */}
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          
          {/* Title */}
          <h1 className="text-5xl font-bold mb-12" style={{ color: '#2B2B2B', fontFamily: 'Futura, Poppins, sans-serif' }}>
            UQU App: Unifying Student Services
          </h1>

          {/* Full-width Banner */}
          <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] mb-24">
            <img
              src="https://github.com/CarolineXXY/portfolio-assets/blob/main/images/UQU-app/banner.png?raw=true"
              alt="UQU App Banner"
              className="w-full h-auto lg:h-130 xl:h-160 object-cover"
            />
          </div>

          {/* Project Overview */}
          <section id="overview" className="mb-24">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#2B2B2B' }}>Project Overview</h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#5A5A5A' }}>
              The UQ Union App is a centralised mobile platform designed to enhance the accessibility and discoverability of services provided by the University of Queensland Union (UQU). By consolidating events, student services, welfare support, and campus activities into one app, it aims to increase student engagement, ensure better utilisation of resources, and foster a vibrant campus community.
            </p>
            <div className="space-y-3 text-lg" style={{ color: '#5A5A5A' }}>
              <p><strong style={{ color: '#2B2B2B' }}>Role:</strong> UX Researcher, UX/UI Designer</p>
              <p><strong style={{ color: '#2B2B2B' }}>Toolkit:</strong> Figma, Miro, Pencil and Paper</p>
              <div className="flex items-center gap-2 mt-3">
                <strong style={{ color: '#2B2B2B' }}>Tags:</strong>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-sm" style={{ background: '#E8EEF5', color: '#2B2B2B' }}>Service Design</span>
                  <span className="px-3 py-1 rounded-full text-sm" style={{ background: '#E8EEF5', color: '#2B2B2B' }}>User Research</span>
                  <span className="px-3 py-1 rounded-full text-sm" style={{ background: '#E8EEF5', color: '#2B2B2B' }}>Prototyping</span>
                </div>
              </div>
            </div>
          </section>

          {/* Problem Space */}
          <section id="problem" className="mb-24">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#2B2B2B' }}>Problem Space</h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#5A5A5A' }}>
              The UQ Union is a student organisation dedicated to providing services, support, and representation to students at The University of Queensland. It offers a wide range of services, including welfare and support, affordable food options, and facilitation of campus culture through events, activities, clubs, and societies. However, there is no centralised platform for all UQU services, leading to fragmentation across various third-party platforms. According to union statistics, many services and events suffer from low exposure, resulting in underutilisation of valuable resources by students.
            </p>
            <div className="mb-4">
              <p className="text-xl font-semibold mb-6" style={{ color: '#2B2B2B' }}>Key Issues Identified:</p>
              <ul className="list-disc list-inside space-y-4 text-lg" style={{ color: '#5A5A5A' }}>
                <li><strong>Fragmented Services:</strong> Events and services are scattered across different platforms, making them hard to find and access.</li>
                <li><strong>Low Engagement:</strong> Students are not fully aware of or engaging with available resources, leading to missed opportunities for support and participation.</li>
                <li><strong>Lack of Centralisation:</strong> Absence of a unified hub reduces discoverability and accessibility, impacting the overall student experience.</li>
              </ul>
            </div>
          </section>

          {/* User Research */}
          <section id="research" className="mb-24">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#2B2B2B' }}>User Research</h2>
            <p className="text-lg leading-relaxed mb-10" style={{ color: '#5A5A5A' }}>
              To identify student needs and pain points, we conducted a survey with over 60 students. The results were analysed to uncover patterns in awareness and engagement levels.
            </p>
            <img 
              src="https://github.com/CarolineXXY/portfolio-assets/blob/main/images/UQU-app/awareness-and-engagement-chart.jpg?raw=true" 
              alt="Awareness and Engagement Chart"
              className="w-full rounded-xl shadow-lg mb-10"
            />
            <div className="mb-8">
              <p className="text-xl font-semibold mb-6" style={{ color: '#2B2B2B' }}>Key Insights:</p>
              <ul className="list-disc list-inside space-y-4 text-lg" style={{ color: '#5A5A5A' }}>
                <li>Most students are aware of UQU events, but engagement rates remain relatively low.</li>
                <li>Only a small portion of students are aware of and engage with Student Services.</li>
                <li>There is a need for improved discoverability and accessibility to boost participation in events, services, and activities.</li>
                <li>Students expressed interest in a centralised platform that simplifies access to all UQU offerings.</li>
              </ul>
            </div>
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#5A5A5A' }}>
              Based on the insights, we made a feature roadmap to list the core pain points and their priority, such as "hard to find info", "process too complex", "support is hidden", and the key features to solve the pain points.
            </p>
            <img 
              src="https://github.com/CarolineXXY/portfolio-assets/blob/main/images/UQU-app/mapping.png?raw=true" 
              alt="Feature Roadmap"
              className="w-full rounded-xl shadow-lg"
            />
          </section>

          {/* User Persona */}
          <section id="persona" className="mb-24">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#2B2B2B' }}>User Persona: Jamie Lee</h2>
            <div className="rounded-xl p-10 shadow-md mb-8" style={{ background: '#ffffff', border: '1px solid #E2E0D8' }}>
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-xl font-bold mb-6" style={{ color: '#2B2B2B' }}>Background</h3>
                  <ul className="space-y-3 text-lg" style={{ color: '#5A5A5A' }}>
                    <li><strong>Age:</strong> 20</li>
                    <li><strong>Occupation:</strong> Full-time university student, majoring in Engineering</li>
                    <li><strong>Living Situation:</strong> Lives on-campus in university accommodation</li>
                    <li><strong>Lifestyle:</strong> Juggles 20+ hrs of classes, labs, and assignments weekly</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-6" style={{ color: '#2B2B2B' }}>Goals</h3>
                  <ul className="list-disc list-inside space-y-3 text-lg" style={{ color: '#5A5A5A' }}>
                    <li>Easily discover and participate in campus events and activities to build social connections</li>
                    <li>Social pull: join events friends are attending</li>
                    <li>Access student services and welfare support without navigating multiple platforms</li>
                    <li>Stay informed about affordable food options and other UQU perks to manage student life efficiently</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-6" style={{ color: '#2B2B2B' }}>Pain Points</h3>
                <ul className="list-disc list-inside space-y-3 text-lg" style={{ color: '#5A5A5A' }}>
                  <li><strong>Fragmentation:</strong> Difficulty finding all UQU services in one place, leading to missed events and resources</li>
                  <li><strong>Low Awareness:</strong> Unaware of many student services beyond basic events</li>
                  <li><strong>Engagement Barriers:</strong> Low motivation to engage due to scattered information and lack of reminders</li>
                  <li><strong>Time Constraints:</strong> Busy schedule makes it hard to search across platforms</li>
                </ul>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-6" style={{ color: '#2B2B2B' }}>Needs</h3>
                <ul className="list-disc list-inside space-y-3 text-lg" style={{ color: '#5A5A5A' }}>
                  <li>A centralised app for browsing events, services, and clubs</li>
                  <li>Personalised notifications and recommendations to increase engagement</li>
                  <li>Easy-to-use interface for quick access to resources</li>
                  <li>Features to RSVP, join clubs, and access support seamlessly</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Proposed Solution */}
          <section id="solution" className="mb-24">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#2B2B2B' }}>Proposed Solution</h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#5A5A5A' }}>
              <strong style={{ color: '#2B2B2B' }}>Project Goal:</strong> Create a centralised mobile app that integrates all UQU services, events, and resources to improve discoverability, accessibility, and engagement, ensuring students make the most of available support and campus opportunities.
            </p>
            <div className="mb-4">
              <p className="text-xl font-semibold mb-6" style={{ color: '#2B2B2B' }}>Key Features of UQ Union App:</p>
              <ul className="list-disc list-inside space-y-4 text-lg" style={{ color: '#5A5A5A' }}>
                <li><strong>Modular Home Screen:</strong> Easy access to key services like events, student advocacy services, volunteering, deals, news and resources</li>
                <li><strong>Event Calendar:</strong> Searchable calendar with filters, RSVPs, and reminders to boost participation</li>
                <li><strong>MatesRates Barcode:</strong> Always-visible tappable card for instant scan to buy discounted products on campus</li>
                <li><strong>SAS Quick Access:</strong> Quick links to welfare, support, and other resources with in-app navigation</li>
                <li><strong>Notifications and Alerts:</strong> Push notifications for upcoming events, deadlines, and promotions</li>
              </ul>
            </div>
          </section>

          {/* UI Design */}
          <section id="ui-design" className="mb-24">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#2B2B2B' }}>UI Design</h2>
            <div className="space-y-10">
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-bold mb-6" style={{ color: '#2B2B2B' }}>Typography</h3>
                <p className="text-lg mb-3" style={{ color: '#5A5A5A', fontFamily: 'Roboto, sans-serif' }}><strong>Primary Font:</strong> Roboto</p>
                <p className="text-lg" style={{ color: '#5A5A5A', fontFamily: 'Futura, sans-serif' }}><strong>Secondary Font:</strong> Futura</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-bold mb-6" style={{ color: '#2B2B2B' }}>Colour Scheme</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  <div className="text-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl shadow-md mb-3 mx-auto" style={{ background: '#0A0A0A' }}></div>
                    <p className="font-bold" style={{ color: '#2B2B2B' }}>Primary</p>
                    <p className="text-sm" style={{ color: '#5A5A5A' }}>#0A0A0A</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl shadow-md mb-3 mx-auto" style={{ background: '#BAD632' }}></div>
                    <p className="font-bold" style={{ color: '#2B2B2B' }}>Secondary1</p>
                    <p className="text-sm" style={{ color: '#5A5A5A' }}>#BAD632</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl shadow-md mb-3 mx-auto" style={{ background: '#F9A51A' }}></div>
                    <p className="font-bold" style={{ color: '#2B2B2B' }}>Secondary2</p>
                    <p className="text-sm" style={{ color: '#5A5A5A' }}>#F9A51A</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl shadow-md mb-3 mx-auto" style={{ background: '#18BFD3' }}></div>
                    <p className="font-bold" style={{ color: '#2B2B2B' }}>Secondary3</p>
                    <p className="text-sm" style={{ color: '#5A5A5A' }}>#18BFD3</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl shadow-md mb-3 mx-auto" style={{ background: '#FC1A8D' }}></div>
                    <p className="font-bold" style={{ color: '#2B2B2B' }}>Secondary4</p>
                    <p className="text-sm" style={{ color: '#5A5A5A' }}>#FC1A8D</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl shadow-md mb-3 mx-auto border" style={{ background: '#FAFAFA', borderColor: '#E2E0D8' }}></div>
                    <p className="font-bold" style={{ color: '#2B2B2B' }}>Neutral1</p>
                    <p className="text-sm" style={{ color: '#5A5A5A' }}>#FAFAFA</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Prototyping */}
          <section id="prototyping" className="mb-24">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#2B2B2B' }}>Prototyping</h2>
            
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#2B2B2B' }}>Hi-Fi Prototype</h3>
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#5A5A5A' }}>
              High-fidelity designs incorporated the selected typography and colour scheme, with interactive elements for event RSVPs, student services, volunteer registration, and messages.
            </p>
            
            {/* Carousel */}
            <div className="relative p-10">
              <img 
                src={hifiPrototypes[currentHifiIndex]} 
                alt={`Hi-Fi Prototype ${currentHifiIndex + 1}`}
                className="w-full max-h-[500px] object-contain mx-auto"
              />
              <button 
                onClick={() => setCurrentHifiIndex((currentHifiIndex - 1 + hifiPrototypes.length) % hifiPrototypes.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
                style={{ color: '#5D7CA6' }}
              >
                ←
              </button>
              <button 
                onClick={() => setCurrentHifiIndex((currentHifiIndex + 1) % hifiPrototypes.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
                style={{ color: '#5D7CA6' }}
              >
                →
              </button>
              <div className="flex justify-center gap-2 mt-8">
                {hifiPrototypes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentHifiIndex(index)}
                    className="w-3 h-3 rounded-full transition-all"
                    style={{ background: currentHifiIndex === index ? '#5D7CA6' : '#E2E0D8' }}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* User Testing */}
          <section id="testing" className="mb-24">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#2B2B2B' }}>User Testing</h2>
            
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#2B2B2B' }}>Think-Aloud Testing</h3>
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#5A5A5A' }}>
              Users tested the prototype by completing tasks such as finding an event, accessing a service, and setting preferences. Feedback included:
            </p>
            <ul className="list-disc list-inside space-y-3 text-lg mb-12" style={{ color: '#5A5A5A' }}>
              <li><strong>Positive Responses:</strong> Users appreciated the centralised access and easy navigation, noting it would increase their engagement</li>
              <li><strong>Challenges:</strong> Some confusion with filter options and unclear icons; suggestions for more prominent notifications</li>
            </ul>

            <h3 className="text-2xl font-bold mb-6" style={{ color: '#2B2B2B' }}>Iterations</h3>
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#5A5A5A' }}>
              Based on feedback, we refined the UI:
            </p>
            <ul className="list-disc list-inside space-y-3 text-lg mb-6" style={{ color: '#5A5A5A' }}>
              <li>Simplified event filters for better usability</li>
              <li>Enhanced notification settings for personalisation</li>
              <li>Improved icon clarity and added tooltips for guidance</li>
            </ul>
            <p className="text-lg leading-relaxed" style={{ color: '#5A5A5A' }}>
              These changes made the app more intuitive and user-friendly.
            </p>
          </section>

          {/* Key Takeaways */}
          <section id="takeaways" className="mb-24">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#2B2B2B' }}>Key Takeaways</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#5A5A5A' }}>
              This project highlighted the importance of centralisation in improving resource utilisation. Through user research and iterative design, I learned to prioritise discoverability and accessibility in app development. Engaging with stakeholders like the union committee ensured the solution met real needs, reinforcing the value of collaborative, user-centred design in creating impactful student tools.
            </p>
          </section>

        </div>
      </div>

      {/* Project Navigation */}
      <div className="py-12 bg-white border-t" style={{ borderColor: '#E2E0D8' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center max-w-4xl mx-auto">
            <Link href={prevProject.path} className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all hover:-translate-x-1" style={{ color: '#5D7CA6' }}>
              <span>←</span>
              <div>
                <div className="text-sm" style={{ color: '#5A5A5A' }}>Previous</div>
                <div className="font-semibold">{prevProject.name}</div>
              </div>
            </Link>
            <Link href={nextProject.path} className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all hover:translate-x-1" style={{ color: '#5D7CA6' }}>
              <div className="text-right">
                <div className="text-sm" style={{ color: '#5A5A5A' }}>Next</div>
                <div className="font-semibold">{nextProject.name}</div>
              </div>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 text-center" style={{ background: '#2B2B2B', color: '#FFFFFF' }}>
        <div className="container mx-auto px-4">
          <p style={{ color: '#A0A0A0' }}>
            © 2025 Caroline. Designed with passion and purpose.
          </p>
        </div>
      </footer>

      {/* Go to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-40"
          style={{ background: '#5D7CA6', color: '#FFFFFF' }}
          aria-label="Go to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
}

