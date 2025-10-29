import { Link } from "wouter";
import { useState, useEffect } from "react";

export default function AccountingFirm() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSectionMenuOpen, setIsSectionMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const sections = [
    { id: "overview", name: "Overview" },
    { id: "problem-space", name: "Problem Space" },
    { id: "user-research", name: "User Research" },
    { id: "proposed-solution", name: "Proposed Solution" },
    { id: "ui-design", name: "UI Design" },
    { id: "prototype", name: "Prototype" },
    { id: "key-takeaways", name: "Key Takeaways" },
  ];
    
  const projects = [
    { id: 'dropwise', name: 'DropWise', path: '/projects/dropwise' },
    { id: 'uqu', name: 'UQU App', path: '/projects/uqu' },
    { id: 'shroomcycle', name: 'ShroomCycle', path: '/projects/shroomcycle' },
    { id: 'accounting-firm', name: 'Accounting Firm', path: '/projects/accounting-firm' }
  ];

  const currentIndex = 3;
  const prevProject = projects[2];
  const nextProject = projects[0];

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
              <span className="text-2xl font-bold" style={{ color: '#5D7CA6' }}>
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
          <h1 className="text-5xl font-bold mb-12" style={{ color: '#2B2B2B', fontFamily: 'Futura, Poppins, sans-serif' }}>
            Apex Ledger Solutions Homepage Redesign
          </h1>

          {/* Full-width Banner */}
          <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] mb-24">
            <img
              src="https://github.com/CarolineXXY/portfolio-assets/blob/main/images/accounting-firm/banner.png?raw=true"
              alt="Apex Ledger Banner"
              className="w-full h-auto lg:h-130 xl:h-160 object-cover"
            />
          </div>

          {/* Project Overview */}
          <section id="overview" className="mb-24">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#2B2B2B' }}>Project Overview</h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#5A5A5A' }}>
              This speculative project reimagines the homepage of a local Brisbane accounting firm to address an outdated and disorganised design. The redesign focuses on modern aesthetics, improved organisation, and user-friendly features to enhance accessibility and communicate professionalism. As a trial, only the homepage was redesigned.
            </p>
            <div className="space-y-3 text-lg" style={{ color: '#5A5A5A' }}>
              <p><strong style={{ color: '#2B2B2B' }}>Role:</strong> UX/UI Designer</p>
              <p><strong style={{ color: '#2B2B2B' }}>Toolkit:</strong> Figma, Pen and Paper</p>
              <div className="flex items-center gap-2 mt-3">
                <strong style={{ color: '#2B2B2B' }}>Tags:</strong>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-sm" style={{ background: '#E8EEF5', color: '#2B2B2B' }}>Web Design</span>
                  <span className="px-3 py-1 rounded-full text-sm" style={{ background: '#E8EEF5', color: '#2B2B2B' }}>Heuristic Evaluation</span>
                  <span className="px-3 py-1 rounded-full text-sm" style={{ background: '#E8EEF5', color: '#2B2B2B' }}>UI Redesign</span>
                </div>
              </div>
            </div>
            <p className="text-sm italic" style={{ color: '#999', marginTop: '24px' }}>
              <strong>Disclaimer:</strong> This is a speculative redesign created for portfolio purposes to demonstrate UX/UI skills. It is not affiliated with or endorsed by any existing company.
            </p>
          </section>

          {/* Problem Space */}
          <section id="problem-space" className="mb-24">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#2B2B2B' }}>Problem Space</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#5A5A5A' }}>
              The original website of a local accounting firm suffered from an outdated design that failed to meet modern user expectations, with poor navigation, lack of clear calls-to-action, and disorganised content, hindering user engagement and trust in the firm's professional services.
            </p>
          </section>

          {/* User Research */}
          <section id="user-research" className="mb-24">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#2B2B2B' }}>User Research</h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#5A5A5A' }}>
              As this was a self-initiated trial project without formal user testing, I conducted a heuristic evaluation based on Nielsen's 10 Usability Heuristics and supplemented it with an informal competitor analysis of modern accounting firm websites to benchmark against industry standards.
            </p>
            
            <h3 className="text-xl font-bold mb-4" style={{ color: '#2B2B2B' }}>Key Findings:</h3>
            <ul className="list-disc list-inside space-y-3 mb-8 text-lg" style={{ color: '#5A5A5A' }}>
              <li><strong>Outdated Overall Design:</strong> The site's aesthetic feels antiquated, violating the Aesthetic-Usability Effect (Nielsen), where visually appealing designs are perceived as more usable and trustworthy.</li>
              <li><strong>No Call-to-Action (CTA) Buttons:</strong> Absence of prominent CTAs contravenes goal-oriented design principles, leading to higher bounce rates.</li>
              <li><strong>Oversized Logo:</strong> The logo dominates the header, disrupting visual hierarchy and making the navbar less visible.</li>
              <li><strong>Lack of Tagline or Brief Intro in Hero Section:</strong> Relying solely on a video without a concise tagline increases cognitive load.</li>
              <li><strong>Text-Heavy and Disorganised Content:</strong> Dense blocks of text violate Gestalt Principles, overwhelming users.</li>
              <li><strong>Insufficient Spacing Between Sections:</strong> Lack of white space creates a cluttered appearance.</li>
              <li><strong>No Footer:</strong> Absence removes a standard secondary navigation area.</li>
              <li><strong>Limited Contact Options:</strong> No obvious buttons or forms for contacting the firm.</li>
              <li><strong>Plain HTML on Other Pages:</strong> Supporting pages lack styling, leading to inconsistent user experience.</li>
            </ul>

            <h3 className="text-xl font-bold mb-4" style={{ color: '#2B2B2B' }}>Key Insights:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg" style={{ color: '#5A5A5A' }}>
              <li>Users in professional services expect trustworthy, easy-to-navigate sites that quickly communicate value.</li>
              <li>Clear visual hierarchies and mobile responsiveness are critical for accessibility and engagement.</li>
              <li>Competitors often use hero sections with taglines, CTAs, and structured content to build trust.</li>
            </ul>
          </section>

          {/* Proposed Solution */}
          <section id="proposed-solution" className="mb-24">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#2B2B2B' }}>Proposed Solution</h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#5A5A5A' }}>
              <strong>Project Goal:</strong> Redesign the homepage to create a modern, organised, and mobile-friendly user experience that enhances trust, improves navigation, and incorporates clear CTAs to drive user engagement.
            </p>
            
            <h3 className="text-xl font-bold mb-4" style={{ color: '#2B2B2B' }}>Key Features:</h3>
            <ul className="list-disc list-inside space-y-2 mb-8 text-lg" style={{ color: '#5A5A5A' }}>
              <li><strong>Hero Section with Tagline and CTA:</strong> A concise introduction and prominent "Get a Quote" button.</li>
              <li><strong>Structured Content Sections:</strong> Organised service highlights with ample spacing for better readability.</li>
              <li><strong>Improved Navigation:</strong> Balanced header with a visible navbar and smaller logo.</li>
              <li><strong>Footer with Contact Form:</strong> Secondary navigation, quick links, and an integrated contact form.</li>
            </ul>

            <h3 className="text-xl font-bold mb-4" style={{ color: '#2B2B2B' }}>Design Considerations:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg" style={{ color: '#5A5A5A' }}>
              <li>Apply visual hierarchy to prioritise key elements.</li>
              <li>Use white space for clarity and reduced cognitive load.</li>
              <li>Ensure consistency across the page for a cohesive experience.</li>
            </ul>
          </section>

          {/* UI Design */}
          <section id="ui-design" className="mb-24">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#2B2B2B' }}>UI Design</h2>
            <div className="space-y-10">
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-bold mb-6" style={{ color: '#2B2B2B' }}>Typography</h3>
                <p className="text-lg mb-3" style={{ color: '#5A5A5A', fontFamily: 'Helvetica Neue, sans-serif' }}><strong>Primary Font:</strong> Helvetica Neue</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-bold mb-6" style={{ color: '#2B2B2B' }}>Colour Scheme</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  <div className="text-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl shadow-md mb-3 mx-auto" style={{ background: '#004990' }}></div>
                    <p className="font-bold" style={{ color: '#2B2B2B' }}>Primary</p>
                    <p className="text-sm" style={{ color: '#5A5A5A' }}>#004990</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl shadow-md mb-3 mx-auto" style={{ background: '#8DC73F' }}></div>
                    <p className="font-bold" style={{ color: '#2B2B2B' }}>Secondary</p>
                    <p className="text-sm" style={{ color: '#5A5A5A' }}>#8DC73F</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl shadow-md mb-3 mx-auto border" style={{ background: '#FAF9F7', borderColor: '#E5D9F2' }}></div>
                    <p className="font-bold" style={{ color: '#2B2B2B' }}>Neutral</p>
                    <p className="text-sm" style={{ color: '#5A5A5A' }}>#FAF9F7</p>
                  </div>
                </div>
              </div>
            </div>

          </section>

          {/* Prototype */}
          <section id="prototype" className="mb-24">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#2B2B2B' }}>Prototype</h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#5A5A5A' }}>
              The redesign maps out a clear visual hierarchy based on the original website's content, prioritising user flow from top to bottom: starting with immediate navigation and value proposition, building credibility through achievements and services, and ending with calls to action.
            </p>

            <h3 className="text-xl font-bold mb-6" style={{ color: '#2B2B2B' }}>Visual Hierarchy</h3>
            <img 
              src="https://github.com/CarolineXXY/portfolio-assets/blob/main/images/accounting-firm/hierarchy.jpg?raw=true" 
              alt="Visual Hierarchy"
              className="w-full rounded-xl shadow-lg mb-12"
            />

            <h3 className="text-xl font-bold mb-6" style={{ color: '#2B2B2B' }}>High-Fidelity Design</h3>
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#5A5A5A' }}>
              Refined visuals with the selected typography and colour scheme. Incorporated feedback from self-review to enhance readability and usability.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div>
                <h4 className="text-lg font-bold mb-4" style={{ color: '#2B2B2B' }}>Before</h4>
                <img 
                  src="https://github.com/CarolineXXY/portfolio-assets/blob/main/images/accounting-firm/original.png?raw=true" 
                  alt="Original Design"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4" style={{ color: '#2B2B2B' }}>After</h4>
                <img 
                  src="https://github.com/CarolineXXY/portfolio-assets/blob/main/images/accounting-firm/demo.gif?raw=true" 
                  alt="Redesigned Demo"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </div>

            <h3 className="text-xl font-bold mb-6" style={{ color: '#2B2B2B' }}>Final Screens</h3>
            <img 
              src="https://github.com/CarolineXXY/portfolio-assets/blob/main/images/accounting-firm/hifi.png?raw=true" 
              alt="High-Fidelity Screens"
              className="w-full rounded-xl shadow-lg mb-8"
            />

            <a 
              href="https://www.figma.com/proto/XvtvFGxaD7Okamszm6677b/Untitled?page-id=0%3A1&node-id=3-2&viewport=28%2C427%2C0.46&t=ZmmtvSD7v0Iuzzvx-1&scaling=min-zoom&content-scaling=fixed"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all hover:scale-105"
              style={{ background: '#2B2B2B', color: '#FFFFFF' }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019 3.019-1.355 3.019-3.019V16.49H8.148zm7.704 0h-.784V24h.784c2.476 0 4.49-2.014 4.49-4.49s-2.014-4.49-4.49-4.49zm0 7.509c-1.665 0-3.019-1.355-3.019-3.019s1.355-3.019 3.019-3.019 3.019 1.355 3.019 3.019-1.354 3.019-3.019 3.019z"/>
              </svg>
              <span className="font-medium">View Figma Prototype</span>
            </a>
          </section>

          {/* Key Takeaways */}
          <section id="key-takeaways" className="mb-24">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#2B2B2B' }}>Key Takeaways</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#5A5A5A' }}>
              This trial redesign reinforced the importance of heuristic evaluations in identifying usability issues without formal testing. By applying design principles like visual hierarchy, white space, and consistency, I transformed an outdated homepage into a more engaging and professional interface. The project highlighted how small changes, such as adding CTAs and taglines, can significantly improve user experience and conversion potential for service-based businesses.
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

