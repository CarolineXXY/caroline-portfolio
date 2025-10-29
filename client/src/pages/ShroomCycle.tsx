import { Link } from "wouter";
import { useState, useEffect } from "react";

export default function ShroomCycle() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSectionMenuOpen, setIsSectionMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const projects = [
    { id: 'dropwise', name: 'DropWise', path: '/projects/dropwise' },
    { id: 'uqu', name: 'UQU App', path: '/projects/uqu' },
    { id: 'shroomcycle', name: 'ShroomCycle', path: '/projects/shroomcycle' },
    { id: 'accounting-firm', name: 'Accounting Firm', path: '/projects/accounting-firm' }
  ];

  const sections = [
    { id: "overview", name: "Overview" },
    { id: "problem-space", name: "Problem Space" },
    { id: "user-research", name: "User Research" },
    { id: "user-persona", name: "User Persona" },
    { id: "proposed-solution", name: "Proposed Solution" },
    { id: "prototyping", name: "Prototyping" },
    { id: "user-testing", name: "User Testing" },
    { id: "key-takeaways", name: "Key Takeaways" },
  ];

  const currentIndex = 2;
  const prevProject = projects[1];
  const nextProject = projects[3];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" style={{ background: '#F8F7F3' }}>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <span className="text-2xl font-bold cursor-pointer" style={{ color: '#5D7CA6' }}>
                Caroline
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/#home"><span className="font-medium transition-colors cursor-pointer" style={{ color: '#2B2B2B' }}>Home</span></Link>
              <Link href="/#about"><span className="font-medium transition-colors cursor-pointer" style={{ color: '#2B2B2B' }}>About</span></Link>
              <Link href="/#projects"><span className="font-medium transition-colors cursor-pointer" style={{ color: '#2B2B2B' }}>Projects</span></Link>
              <Link href="/#contact"><span className="font-medium transition-colors cursor-pointer" style={{ color: '#2B2B2B' }}>Contact</span></Link>
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
              <Link href="/#home"><span className="block py-2 font-medium cursor-pointer" style={{ color: '#2B2B2B' }}>Home</span></Link>
              <Link href="/#about"><span className="block py-2 font-medium cursor-pointer" style={{ color: '#2B2B2B' }}>About</span></Link>
              <Link href="/#projects"><span className="block py-2 font-medium cursor-pointer" style={{ color: '#2B2B2B' }}>Projects</span></Link>
              <Link href="/#contact"><span className="block py-2 font-medium cursor-pointer" style={{ color: '#2B2B2B' }}>Contact</span></Link>
            </div>
          )}
        </div>
      </nav>

      {/* Project Content */}
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          
          {/* Title */}
          <h1 className="text-5xl font-bold mb-12" style={{ color: '#2B2B2B' }}>
            ShroomCycle
          </h1>

          {/* Full-width Banner */}
          <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] mb-24">
            <img
              src="https://github.com/CarolineXXY/portfolio-assets/blob/main/images/shroomcycle/banner.png?raw=true"
              alt="ShroomCycle Banner"
              className="w-full h-auto lg:h-130 xl:h-160 object-cover"
            />
          </div>

          {/* Project Overview */}
          <section id="overview" className="mb-24">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#2B2B2B' }}>Project Overview</h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#5A5A5A' }}>
              ShroomCycle is a networked lamp system designed to promote healthy sleep habits among university students by fostering group accountability. Each mushroom-shaped lamp features LED lights representing each friend in a group, responding to ambient light changes and phone placement to signal bedtime routines. This encourages consistent sleep schedules and reduces pre-bed screen time.
            </p>
            <div className="space-y-3 text-lg" style={{ color: '#5A5A5A' }}>
              <p><strong style={{ color: '#2B2B2B' }}>Role:</strong> UX Researcher, UX/UI Designer, Prototype Developer</p>
              <p><strong style={{ color: '#2B2B2B' }}>Toolkit:</strong> Miro, Arduino, Pen and Paper, Cardboard</p>
              <div className="flex items-center gap-2 mt-3 mb-10">
                <strong style={{ color: '#2B2B2B' }}>Tags:</strong>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-sm" style={{ background: '#E8EEF5', color: '#2B2B2B' }}>ProductDesign</span>
                  <span className="px-3 py-1 rounded-full text-sm" style={{ background: '#E8EEF5', color: '#2B2B2B' }}>IoT</span>
                  <span className="px-3 py-1 rounded-full text-sm" style={{ background: '#E8EEF5', color: '#2B2B2B' }}>SleepHygiene</span>
                </div>
              </div>
            </div>
            
            {/* Promotional Video */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#2B2B2B' }}>Video</h3>
              <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                <iframe
                  src="https://drive.google.com/file/d/1IocXM9hf5OOcszXdiTAdlhlAWu1WDyQI/preview"
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  allow="autoplay"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* GitHub Link */}
            <a 
              href="https://github.com/LiCHihTseng/ShroomCycle"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all hover:scale-105"
              style={{ background: '#2B2B2B', color: '#FFFFFF' }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="font-medium">View Full Project on GitHub</span>
            </a>
          </section>

          {/* Problem Space */}
          <section id="problem-space" className="mb-24">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#2B2B2B' }}>Problem Space</h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#5A5A5A' }}>
              University students often struggle with poor sleep hygiene due to irregular schedules, academic pressure, and excessive screen time. On average, students get 6.2 hours of sleep compared to the recommended 8-9 hours, leading to reduced focus and well-being. There's a need for a collaborative, accessible solution to encourage better sleep routines.
            </p>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#2B2B2B' }}>Key Issues Identified:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg" style={{ color: '#5A5A5A' }}>
              <li><strong>Irregular Sleep Patterns:</strong> Inconsistent bedtimes disrupt healthy sleep cycles.</li>
              <li><strong>Excessive Screen Time:</strong> Prolonged phone use before bed hinders relaxation.</li>
              <li><strong>Lack of Accountability:</strong> Students struggle to maintain consistent sleep habits without external cues.</li>
            </ul>
          </section>

          {/* User Research */}
          <section id="user-research" className="mb-24">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#2B2B2B' }}>User Research</h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#5A5A5A' }}>
              We conducted interviews with 10 university students and diary studies over a week to understand sleep habits.
            </p>
            <img 
              src="https://github.com/CarolineXXY/portfolio-assets/blob/main/images/shroomcycle/user-research.png?raw=true" 
              alt="Social Media Impact Chart"
              className="w-full rounded-xl shadow-lg mb-12"
            />
            <h3 className="text-xl font-bold mb-4" style={{ color: '#2B2B2B' }}>Key Insights:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg" style={{ color: '#5A5A5A' }}>
              <li><strong>Sleep Shortfall:</strong> Students average 6.2 hours of sleep due to academic and environmental pressures.</li>
              <li><strong>Screen Time Impact:</strong> Phone use before bed disrupts sleep quality.</li>
              <li><strong>Need for Structure:</strong> Consistent schedules and reduced device use could improve sleep hygiene.</li>
            </ul>
          </section>

          {/* User Persona */}
          <section id="user-persona" className="mb-24">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#2B2B2B' }}>User Persona: Emma Tan</h2>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#2B2B2B' }}>Background</h3>
              <ul className="list-disc list-inside space-y-2 mb-6 text-lg" style={{ color: '#5A5A5A' }}>
                <li><strong>Age:</strong> 22</li>
                <li><strong>Occupation:</strong> 3rd-year Psychology student</li>
                <li><strong>Location:</strong> Sydney, Australia</li>
                <li><strong>Tech Proficiency:</strong> Moderate</li>
                <li><strong>Personality:</strong> Organised, empathetic, community-oriented</li>
              </ul>
              
              <h3 className="text-xl font-bold mb-4" style={{ color: '#2B2B2B' }}>Goals</h3>
              <ul className="list-disc list-inside space-y-2 mb-6 text-lg" style={{ color: '#5A5A5A' }}>
                <li>Improve sleep hygiene for better focus and well-being.</li>
                <li>Stay connected with friends during busy study periods.</li>
                <li>Build consistent bedtime routines with group support.</li>
              </ul>

              <h3 className="text-xl font-bold mb-4" style={{ color: '#2B2B2B' }}>Pain Points</h3>
              <ul className="list-disc list-inside space-y-2 mb-6 text-lg" style={{ color: '#5A5A5A' }}>
                <li>Difficulty winding down due to academic stress.</li>
                <li>Lack of accountability for timely bedtimes.</li>
                <li>Feels disconnected from friends during intense study periods.</li>
              </ul>

              <h3 className="text-xl font-bold mb-4" style={{ color: '#2B2B2B' }}>Needs</h3>
              <ul className="list-disc list-inside space-y-2 text-lg" style={{ color: '#5A5A5A' }}>
                <li>A collaborative system to encourage consistent sleep schedules.</li>
                <li>Tools to reduce pre-bed screen time.</li>
                <li>Simple, affordable solution for group accountability.</li>
              </ul>
            </div>
          </section>

          {/* Proposed Solution */}
          <section id="proposed-solution" className="mb-24">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#2B2B2B' }}>Proposed Solution</h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#5A5A5A' }}>
              <strong>Project Goal:</strong> Enhance sleep hygiene among university students through a collaborative lamp system that promotes accountability, reduces screen time, and encourages consistent bedtime routines.
            </p>
            
            <h3 className="text-xl font-bold mb-4" style={{ color: '#2B2B2B' }}>Key Features of ShroomCycle:</h3>
            <ul className="list-disc list-inside space-y-2 mb-8 text-lg" style={{ color: '#5A5A5A' }}>
              <li><strong>Ambient Light Detection:</strong> Lamps activate when room lights dim, signalling bedtime preparation.</li>
              <li><strong>Phone Detection Pad:</strong> Placing a phone on the pad turns off the user's LED, indicating they're ready to sleep.</li>
              <li><strong>Group Accountability:</strong> Each lamp's LEDs reflect the sleep status of friends, fostering shared motivation.</li>
              <li><strong>Mushroom Design:</strong> Aesthetically pleasing, subtle, and functional with hidden wiring.</li>
            </ul>

            <img 
              src="https://github.com/CarolineXXY/portfolio-assets/blob/main/images/shroomcycle/initial-design-draft.png?raw=true" 
              alt="Initial Design Draft"
              className="w-full max-w-2xl mx-auto rounded-xl shadow-lg"
            />
          </section>

          {/* Prototyping */}
          <section id="prototyping" className="mb-24">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#2B2B2B' }}>Prototyping</h2>
            
            <h3 className="text-xl font-bold mb-4" style={{ color: '#2B2B2B' }}>Initial Prototype</h3>
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#5A5A5A' }}>
              Tested basic functionality using pressure sensors and LEDs to confirm phone detection and light control. Feedback from 42 students (30 positive) highlighted concerns about lamps staying active during the day, leading to the addition of an ambient light sensor.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <img 
                src="https://github.com/LiCHihTseng/ShroomCycle/raw/main/source/Initial_Prototype.png" 
                alt="Initial Prototype with Pressure Sensor"
                className="w-full rounded-xl shadow-lg"
              />
              <img 
                src="https://github.com/LiCHihTseng/ShroomCycle/raw/main/source/Initial_prototype2.png" 
                alt="Prototype with Ambient Light Sensor"
                className="w-full rounded-xl shadow-lg"
              />
            </div>

            <h3 className="text-xl font-bold mb-4" style={{ color: '#2B2B2B' }}>Building the Mushroom</h3>
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#5A5A5A' }}>
              The final design concealed wiring within the mushroom stem for a minimalist aesthetic. It integrated pressure sensors, LEDs, and ambient light sensors for functionality and safety.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <img 
                src="https://github.com/CarolineXXY/portfolio-assets/blob/main/images/shroomcycle/wiring.jpg?raw=true" 
                alt="Wiring"
                className="w-full rounded-xl shadow-lg"
              />
              <img 
                src="https://github.com/LiCHihTseng/ShroomCycle/raw/main/source/Make_Shroom.png" 
                alt="Cardboard Mushroom"
                className="w-full rounded-xl shadow-lg"
              />
            </div>

            <h3 className="text-xl font-bold mb-4" style={{ color: '#2B2B2B' }}>Final Prototype</h3>
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#5A5A5A' }}>
              The refined mushroom lamp balanced aesthetics and functionality, effectively promoting group accountability.
            </p>

            <img 
              src="https://github.com/LiCHihTseng/ShroomCycle/raw/main/source/ShroomCycle.png" 
              alt="Final Prototype"
              className="w-1/2 max-w-md mx-auto rounded-xl shadow-lg mb-12"
            />

            <h3 className="text-xl font-bold mb-6" style={{ color: '#2B2B2B' }}>Storyboard</h3>
            <img 
              src="https://github.com/CarolineXXY/portfolio-assets/blob/main/images/shroomcycle/storyboard.jpg?raw=true" 
              alt="Storyboard"
              className="w-full rounded-xl shadow-lg"
            />
          </section>

          {/* User Testing */}
          <section id="user-testing" className="mb-24">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#2B2B2B' }}>User Testing</h2>
            
            <h3 className="text-xl font-bold mb-4" style={{ color: '#2B2B2B' }}>Think-Aloud Testing</h3>
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#5A5A5A' }}>
              Students tested the lamp's usability in promoting sleep habits. Key findings from think-aloud sessions:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-8 text-lg" style={{ color: '#5A5A5A' }}>
              <li><strong>Positive Feedback:</strong> Users found the phone pad intuitive and the lamp motivating.</li>
              <li><strong>Challenges:</strong> The phone pad size was inconvenient for some; suggestions included a blinking light feature and an override button for late-night work.</li>
            </ul>

            <img 
              src="https://github.com/CarolineXXY/portfolio-assets/blob/main/images/shroomcycle/user-testing.jpg?raw=true" 
              alt="User Testing"
              className="w-full max-w-2xl mx-auto rounded-xl shadow-lg"
            />
          </section>

          {/* Key Takeaways */}
          <section id="key-takeaways" className="mb-24">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#2B2B2B' }}>Key Takeaways</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#5A5A5A' }}>
              This project showed the power of collaborative design in addressing complex issues like sleep hygiene. From the user feedback, I learned to balance functionality with simplicity and aesthetics. Designing for group accountability highlighted the importance of subtle, non-intrusive cues to foster lasting habit change.
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

