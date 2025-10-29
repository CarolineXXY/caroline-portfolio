import { useState, useEffect } from 'react';
import { Link } from 'wouter';

export default function DropWise() {
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
    { id: 'physical', name: 'Physical Components' },
    { id: 'prototyping', name: 'Prototyping' },
    { id: 'testing', name: 'User Testing' },
    { id: 'takeaways', name: 'Key Takeaways' }
  ];

  const currentIndex = 0;
  const prevProject = projects[projects.length - 1];
  const nextProject = projects[1];

  const lofiPrototypes = [
    "https://github.com/CarolineXXY/portfolio-assets/blob/main/images/DropWise/Homepage.png?raw=true",
    "https://github.com/CarolineXXY/portfolio-assets/blob/main/images/DropWise/Usage%20Tracker.png?raw=true",
    "https://github.com/CarolineXXY/portfolio-assets/blob/main/images/DropWise/My%20Goals.png?raw=true",
    "https://github.com/CarolineXXY/portfolio-assets/blob/main/images/DropWise/Set%20Goals%20&%20Thresholds.png?raw=true",
    "https://github.com/CarolineXXY/portfolio-assets/blob/main/images/DropWise/Usage%20Analystics%202.png?raw=true"
  ];

  const hifiPrototypes = [
    "https://github.com/CarolineXXY/portfolio-assets/blob/main/images/DropWise/login-hifi.png?raw=true",
    "https://github.com/CarolineXXY/portfolio-assets/blob/main/images/DropWise/homepage-hifi.png?raw=true",
    "https://github.com/CarolineXXY/portfolio-assets/blob/main/images/DropWise/alert-setting-hifi.png?raw=true",
    "https://github.com/CarolineXXY/portfolio-assets/blob/main/images/DropWise/tracker-hifi.png?raw=true",
    "https://github.com/CarolineXXY/portfolio-assets/blob/main/images/DropWise/my-goals-hifi.png?raw=true",
    "https://github.com/CarolineXXY/portfolio-assets/blob/main/images/DropWise/set-goals-hifi.png?raw=true",
    "https://github.com/CarolineXXY/portfolio-assets/blob/main/images/DropWise/my-data-hifi.png?raw=true"
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
            DropWise
          </h1>

          {/* Full-width Banner */}
          <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] mb-24">
            <img
              src="https://github.com/CarolineXXY/portfolio-assets/blob/main/images/DropWise/banner.png?raw=true"
              alt="DropWise Banner"
              className="w-full h-auto lg:h-130 xl:h-160 object-cover"
            />
          </div>

          {/* Project Overview */}
          <section id="overview" className="mb-24">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#2B2B2B' }}>Project Overview</h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#5A5A5A' }}>
              DropWise is a mobile app paired with a physical water flow sensor, designed to help university students monitor, manage, and reduce water usage in shared rental accommodations. By providing real-time feedback, shared goal-setting, and actionable insights, DropWise addresses the financial and environmental challenges of water overuse, enabling students to save on bills and adopt sustainable habits.
            </p>
            <div className="space-y-3 text-lg" style={{ color: '#5A5A5A' }}>
              <p><strong style={{ color: '#2B2B2B' }}>Role:</strong> UX Researcher, UX/UI Designer, Hardware Developer</p>
              <p><strong style={{ color: '#2B2B2B' }}>Tools:</strong> Figma, Miro, Arduino, Pencil and Paper</p>
              <div className="flex items-center gap-2 mt-3">
                <strong style={{ color: '#2B2B2B' }}>Tags:</strong>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-sm" style={{ background: '#E8EEF5', color: '#2B2B2B' }}>MobileApp</span>
                  <span className="px-3 py-1 rounded-full text-sm" style={{ background: '#E8EEF5', color: '#2B2B2B' }}>IoT</span>
                  <span className="px-3 py-1 rounded-full text-sm" style={{ background: '#E8EEF5', color: '#2B2B2B' }}>Sustainability</span>
                </div>
              </div>
            </div>
          </section>

          {/* Problem Space */}
          <section id="problem" className="mb-24">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#2B2B2B' }}>Problem Space</h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#5A5A5A' }}>
              University students face significant financial stress from household bills, with water usage often overlooked due to a lack of awareness and delayed feedback. Most households receive water usage data only through quarterly bills, which arrive too late for residents to adjust habits and avoid high costs. This delay obscures the connection between daily behaviours and expenses, making it challenging for students to budget effectively or adopt sustainable practices.
            </p>
            <div className="mb-4">
              <p className="text-xl font-semibold mb-6" style={{ color: '#2B2B2B' }}>Key Issues Identified:</p>
              <ul className="list-disc list-inside space-y-4 text-lg" style={{ color: '#5A5A5A' }}>
                <li><strong>Unconscious Overuse:</strong> Students are unaware of how daily habits (e.g., long showers, frequent laundry) contribute to high water bills.</li>
                <li><strong>Delayed Feedback:</strong> Quarterly billing cycles prevent timely awareness of consumption patterns.</li>
                <li><strong>Lack of Tools:</strong> Students lack accessible tools to monitor, predict, and manage water usage collaboratively in shared households.</li>
              </ul>
            </div>
          </section>

          {/* User Research */}
          <section id="research" className="mb-24">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#2B2B2B' }}>User Research</h2>
            <p className="text-lg leading-relaxed mb-10" style={{ color: '#5A5A5A' }}>
              To understand the challenges faced by university students, we conducted interviews with eight students and performed an autoethnography. The findings were synthesised into an affinity diagram to identify key themes.
            </p>
            <img 
              src="https://github.com/CarolineXXY/portfolio-assets/blob/main/images/DropWise/user-research?raw=true" 
              alt="User Research"
              className="w-full rounded-xl shadow-lg mb-10"
            />
            <div className="mb-4">
              <p className="text-xl font-semibold mb-6" style={{ color: '#2B2B2B' }}>Key Insights:</p>
              <ul className="list-disc list-inside space-y-4 text-lg" style={{ color: '#5A5A5A' }}>
                <li>Students in rental accommodations <strong>lack awareness</strong> of how daily habits impact water costs.</li>
                <li>The <strong>absence of real-time feedback</strong> hinders efforts to reduce consumption and save money.</li>
                <li>Quarterly bills <strong>disconnect behaviours from expenses</strong>, reducing motivation to conserve water.</li>
                <li>There is a clear need for <strong>timely, accessible feedback</strong> mechanisms to support cost savings and resource conservation.</li>
              </ul>
            </div>
          </section>

          {/* User Persona */}
          <section id="persona" className="mb-24">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#2B2B2B' }}>User Persona: Alex Nguyen</h2>
            <div className="rounded-xl p-10 shadow-md mb-8" style={{ background: '#ffffff', border: '1px solid #E2E0D8' }}>
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-xl font-bold mb-6" style={{ color: '#2B2B2B' }}>Background</h3>
                  <ul className="space-y-3 text-lg" style={{ color: '#5A5A5A' }}>
                    <li><strong>Age:</strong> 21</li>
                    <li><strong>Occupation:</strong> Full-time university student, majoring in Environmental Science</li>
                    <li><strong>Living Situation:</strong> Shares a 3-bedroom rental apartment with two housemates</li>
                    <li><strong>Tech Savviness:</strong> Comfortable with smartphones and occasionally uses budgeting apps</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-6" style={{ color: '#2B2B2B' }}>Goals</h3>
                  <ul className="list-disc list-inside space-y-3 text-lg" style={{ color: '#5A5A5A' }}>
                    <li>Save money on bills to reduce financial stress</li>
                    <li>Adopt sustainable habits aligned with environmental values</li>
                    <li>Maintain harmonious housemate relationships</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-6" style={{ color: '#2B2B2B' }}>Pain Points</h3>
                <ul className="list-disc list-inside space-y-3 text-lg" style={{ color: '#5A5A5A' }}>
                  <li><strong>Lack of Awareness:</strong> Unclear how habits like long showers contribute to high water bills</li>
                  <li><strong>Delayed Feedback:</strong> Quarterly bills make it hard to connect behaviours to costs</li>
                  <li><strong>Budget Constraints:</strong> Unexpected high bills strain a tight budget</li>
                  <li><strong>Housemate Dynamics:</strong> Difficulty coordinating with housemates to reduce water use</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Proposed Solution */}
          <section id="solution" className="mb-24">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#2B2B2B' }}>Proposed Solution</h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#5A5A5A' }}>
              <strong style={{ color: '#2B2B2B' }}>Project Goal:</strong> Empower university students to monitor and reduce water usage through real-time feedback, cost predictions, and collaborative goal-setting, fostering sustainable habits and reducing financial stress.
            </p>
            <img 
              src="https://github.com/CarolineXXY/portfolio-assets/blob/main/images/DropWise/affinity-diagram.png?raw=true" 
              alt="Affinity Diagram"
              className="w-full rounded-xl shadow-lg mb-10"
            />
            <div className="mb-4">
              <p className="text-xl font-semibold mb-6" style={{ color: '#2B2B2B' }}>Key Features of DropWise:</p>
              <ul className="list-disc list-inside space-y-4 text-lg" style={{ color: '#5A5A5A' }}>
                <li><strong>Real-Time Tracking:</strong> A mobile app paired with a water flow sensor provides live data on water usage</li>
                <li><strong>Cost Predictions:</strong> Estimates upcoming water bills based on current usage</li>
                <li><strong>Shared Goals:</strong> Allows housemates to set collective water-saving targets</li>
                <li><strong>Usage Alerts:</strong> Visual notifications signal when usage approaches or exceeds set limits</li>
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
                <p className="text-lg" style={{ color: '#5A5A5A', fontFamily: 'Open Sans, sans-serif' }}><strong>Secondary Font:</strong> Open Sans</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-bold mb-6" style={{ color: '#2B2B2B' }}>Colour Scheme</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  <div className="text-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl shadow-md mb-3 mx-auto" style={{ background: '#16498C' }}></div>
                    <p className="font-bold" style={{ color: '#2B2B2B' }}>Primary</p>
                    <p className="text-sm" style={{ color: '#5A5A5A' }}>#16498C</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl shadow-md mb-3 mx-auto" style={{ background: '#3188BF' }}></div>
                    <p className="font-bold" style={{ color: '#2B2B2B' }}>Secondary</p>
                    <p className="text-sm" style={{ color: '#5A5A5A' }}>#3188BF</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl shadow-md mb-3 mx-auto" style={{ background: '#D2E4EF' }}></div>
                    <p className="font-bold" style={{ color: '#2B2B2B' }}>Secondary2</p>
                    <p className="text-sm" style={{ color: '#5A5A5A' }}>#D2E4EF</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Physical Components */}
          <section id="physical" className="mb-24">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#2B2B2B' }}>Physical Components</h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#5A5A5A' }}>
              DropWise integrates a water flow sensor compatible with household outlets like pipes and showerheads. Connected to an Arduino board, the sensor captures real-time water usage data for accurate monitoring. A light notification system provides intuitive visual feedback:
            </p>
            <ul className="list-disc list-inside space-y-3 text-lg mb-10" style={{ color: '#5A5A5A' }}>
              <li><strong style={{ color: '#16A34A' }}>Green:</strong> Usage is within target</li>
              <li><strong style={{ color: '#EAB308' }}>Yellow:</strong> Usage is nearing the target limit</li>
              <li><strong style={{ color: '#DC2626' }}>Red:</strong> Usage has exceeded the target</li>
            </ul>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <img 
                src="https://github.com/CarolineXXY/portfolio-assets/blob/main/images/DropWise/physical.png?raw=true" 
                alt="Physical Component"
                className="w-full max-w-[280px] mx-auto rounded-xl shadow-lg"
              />
              <img 
                src="https://github.com/CarolineXXY/portfolio-assets/blob/main/images/DropWise/physical-diagram.jpeg?raw=true" 
                alt="Physical Component Diagram"
                className="w-full max-w-xs mx-auto rounded-xl shadow-lg"
              />
            </div>
            <p className="text-lg leading-relaxed" style={{ color: '#5A5A5A' }}>
              This physical feedback complements the app, ensuring users are alerted to overuse without constantly checking their phones.
            </p>
          </section>

          {/* Prototyping */}
          <section id="prototyping" className="mb-24">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#2B2B2B' }}>Prototyping</h2>
            
            <img 
              src="https://github.com/CarolineXXY/portfolio-assets/blob/main/images/DropWise/user-flow.png?raw=true" 
              alt="User Flow"
              className="w-full rounded-xl shadow-lg mb-16"
            />

            <h3 className="text-2xl font-bold mb-6" style={{ color: '#2B2B2B' }}>Lo-Fi Prototype</h3>
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#5A5A5A' }}>
              Initial wireframes focused on core functionalities like usage tracking, goal setting, and alerts. These were used to map user flows and ensure intuitive navigation.
            </p>
            <div className="flex gap-6 overflow-x-auto pb-6 mb-16">
              {lofiPrototypes.map((img, index) => (
                <img 
                  key={index}
                  src={img} 
                  alt={`Lo-Fi Prototype ${index + 1}`}
                  className="h-80 rounded-lg shadow-md flex-shrink-0"
                />
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-6" style={{ color: '#2B2B2B' }}>Hi-Fi Prototype</h3>
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#5A5A5A' }}>
              The high-fidelity prototype refined the visual design, incorporating the chosen typography and colour scheme. It included interactive screens for real-time tracking, goal setting, and data visualisation, ensuring a seamless user experience.
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
                style={{ color: '#C9A372' }}
              >
                ←
              </button>
              <button 
                onClick={() => setCurrentHifiIndex((currentHifiIndex + 1) % hifiPrototypes.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
                style={{ color: '#C9A372' }}
              >
                →
              </button>
              <div className="flex justify-center gap-2 mt-8">
                {hifiPrototypes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentHifiIndex(index)}
                    className="w-3 h-3 rounded-full transition-all"
                    style={{ background: currentHifiIndex === index ? '#C9A372' : '#E2E0D8' }}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* User Testing */}
          <section id="testing" className="mb-24">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#2B2B2B' }}>User Testing</h2>
            
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#2B2B2B' }}>User Enactment</h3>
            <img 
              src="https://github.com/CarolineXXY/portfolio-assets/blob/main/images/DropWise/user-enactment.png?raw=true" 
              alt="User Enactment"
              className="w-full max-w-lg mx-auto rounded-xl shadow-lg mb-8"
            />
            <p className="text-lg leading-relaxed mb-12" style={{ color: '#5A5A5A' }}>
              We simulated a real-world scenario using a cardboard bathroom model with a showerhead, LED lights, and a stick figure to test the physical prototype. Key finding: the showerhead light was not always visible during showering, prompting a design iteration to explore alternative alert placements.
            </p>

            <h3 className="text-2xl font-bold mb-6" style={{ color: '#2B2B2B' }}>Think-Aloud Testing</h3>
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#5A5A5A' }}>
              Users tested the digital prototype by completing two core tasks: tracking water usage and setting goals. Feedback highlighted:
            </p>
            <ul className="list-disc list-inside space-y-3 text-lg mb-12" style={{ color: '#5A5A5A' }}>
              <li><strong>Positive Responses:</strong> Users valued real-time tracking for new insights into habits and found light reminders effective</li>
              <li><strong>Challenges:</strong> Difficulty setting realistic water goals, unclear graph labels, and minor UI design issues</li>
            </ul>

            <h3 className="text-2xl font-bold mb-6" style={{ color: '#2B2B2B' }}>Iterations</h3>
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#5A5A5A' }}>
              Based on feedback, we simplified the app's data visualisation:
            </p>
            <ul className="list-disc list-inside space-y-3 text-lg" style={{ color: '#5A5A5A' }}>
              <li>Replaced the weekly chart with a monthly chart to reduce confusion</li>
              <li>The usage tracker page now shows only daily water usage for simplicity</li>
              <li>The "My Goals" and "My Data" pages display monthly goals and usage data for periodic analysis</li>
            </ul>
          </section>

          {/* Key Takeaways */}
          <section id="takeaways" className="mb-24">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#2B2B2B' }}>Key Takeaways</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#5A5A5A' }}>
              As a designer, I learned the importance of evaluating designs from the user's perspective. Familiarity with the prototype led me to overlook small details, such as unclear chart labels, that confused users. Iterating based on user feedback taught me to prioritise clarity and simplicity, ensuring even minor elements enhance the overall experience. This project reinforced the value of user-centred design in creating effective, impactful solutions.
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

