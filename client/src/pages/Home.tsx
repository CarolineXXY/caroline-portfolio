import { useState, useEffect } from 'react';
import { Link } from 'wouter';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  // Professional Color Scheme - Warm and Elegant
  const colors = {
    background: '#F8F7F3',      // Off-white background
    primary: '#5D7CA6',         // Muted blue - primary accent
    primaryHover: '#4A6489',    // Darker blue for hover
    secondary: '#D8B384',       // Warm tan - secondary accent
    secondaryHover: '#C9A372',  // Darker tan for hover
    text: '#2B2B2B',            // Charcoal text
    textMuted: '#5A5A5A',       // Medium gray for secondary text
    surface: '#FFFFFF',         // White surface
    border: '#E2E0D8'           // Light beige for borders
  };

  const projects = [
    {
      title: "DropWise: Smart Water Tracking App",
      description: "A mobile app designed to help users track their daily water intake with smart reminders and personalized hydration goals.",
      tags: ["MobileApp", "IoT", "Sustainability"],
      thumbnail: "https://github.com/CarolineXXY/portfolio-assets/blob/main/images/DropWise/dropwise-thumbnail.png?raw=true",
      link: "/projects/dropwise"
    },
    {
      title: "UQU App: Unifying Student Services",
      description: "A platform that centralises student services and events to boost engagement at university",
      tags: ["Service Design", "User Research", "Prototyping"],
      thumbnail: "https://github.com/CarolineXXY/portfolio-assets/blob/main/images/UQU-app/uquapp-thumbnail.png?raw=true",
      link: "/projects/uqu"
    },
    {
      title: "ShroomCycle: Social Sleep Accountability Lamp",
      description: "An innovative IoT device that promotes healthy sleep habits through social accountability and ambient lighting.",
      tags: ["ProductDesign", "IoT", "SleepHygiene"],
      thumbnail: "https://github.com/CarolineXXY/portfolio-assets/blob/main/images/shroomcycle/shroomcycle-thumbnail.png?raw=true",
      link: "/projects/shroomcycle"
    },
    {
      title: "Accounting Firm Solutions Homepage Redesign",
      description: "A speculative redesign of an accounting firm's homepage, enhancing readability and aesthetics.",
      tags: ["Web Design", "Heuristic Evaluation", "UI Redesign"],
      thumbnail: "https://github.com/CarolineXXY/portfolio-assets/blob/main/images/accounting-firm/accounting-thumbnail.png?raw=true",
      link: "/projects/accounting-firm"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="text-2xl font-bold" style={{ color: colors.primary }}>
              Caroline
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a 
                href="#home" 
                className="font-medium transition-colors" 
                style={{ color: colors.text }}
                onMouseEnter={(e) => e.currentTarget.style.color = colors.primary}
                onMouseLeave={(e) => e.currentTarget.style.color = colors.text}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="font-medium transition-colors" 
                style={{ color: colors.text }}
                onMouseEnter={(e) => e.currentTarget.style.color = colors.primary}
                onMouseLeave={(e) => e.currentTarget.style.color = colors.text}
              >
                About
              </a>
              <a 
                href="#projects" 
                className="font-medium transition-colors" 
                style={{ color: colors.text }}
                onMouseEnter={(e) => e.currentTarget.style.color = colors.primary}
                onMouseLeave={(e) => e.currentTarget.style.color = colors.text}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="font-medium transition-colors" 
                style={{ color: colors.text }}
                onMouseEnter={(e) => e.currentTarget.style.color = colors.primary}
                onMouseLeave={(e) => e.currentTarget.style.color = colors.text}
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              style={{ color: colors.text }}
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

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t" style={{ borderColor: colors.border }}>
              <a href="#home" className="block py-2 font-medium" style={{ color: colors.text }} onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#about" className="block py-2 font-medium" style={{ color: colors.text }} onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#projects" className="block py-2 font-medium" style={{ color: colors.text }} onClick={() => setIsMenuOpen(false)}>Projects</a>
              <a href="#contact" className="block py-2 font-medium" style={{ color: colors.text }} onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16" style={{ background: colors.background }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-8">
              <img 
                src="https://github.com/CarolineXXY/portfolio-assets/blob/main/images/profile.png?raw=true" 
                alt="Caroline Profile" 
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover shadow-lg animate-[float_3s_ease-in-out_infinite]"
                style={{ boxShadow: `0 10px 30px ${colors.primary}40` }}
              />
            </div>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight" style={{ color: colors.text }}>
                Hey, I'm <span style={{ color: colors.primary }}>Caroline!</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6" style={{ color: colors.textMuted }}>
                UX/UI Designer
              </h2>
              <p className="text-lg sm:text-xl mb-8 leading-relaxed max-w-2xl mx-auto" style={{ color: colors.textMuted }}>
                A recent graduate passionate about user-centred design, I'm ready to bring fresh, creative ideas to solve real-world problems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#projects" 
                  className="px-8 py-3 font-semibold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                  style={{ background: colors.primary, color: '#FFFFFF' }}
                  onMouseEnter={(e) => e.currentTarget.style.background = colors.primaryHover}
                  onMouseLeave={(e) => e.currentTarget.style.background = colors.primary}
                >
                  View My Work
                </a>
                <a 
                  href="#contact" 
                  className="px-8 py-3 font-semibold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                  style={{ background: colors.secondary, color: '#FFFFFF' }}
                  onMouseEnter={(e) => e.currentTarget.style.background = colors.secondaryHover}
                  onMouseLeave={(e) => e.currentTarget.style.background = colors.secondary}
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 lg:py-40" style={{ background: colors.surface }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4 relative inline-block" style={{ color: colors.text }}>
                About Me
                <span className="absolute bottom-0 left-0 w-16 h-1 rounded-full -mb-3" style={{ background: colors.primary }}></span>
              </h2>
              <div className="mt-12 space-y-8 text-lg leading-relaxed" style={{ color: colors.textMuted }}>
                <p>
                  Hi, I'm Caroline! I'm a recent graduate from the University of Queensland, where I earned my Master's in Interaction Design. Before that, I held a Bachelor's degree in Turkish—yes, you read that right! It was a bold transformation, but to me, both paths are about the same thing at their core: connecting with people in intuitive and meaningful ways.
                </p>
                <p>
                  I've always been captivated by design and the magic of combining creativity with technology. To me, UX/UI design is about crafting digital products that not only spark joy but also solve real problems effectively.
                </p>
                <p>
                  I can't wait to collaborate with other designers to create innovative, user-centred solutions that make a lasting impact. Let's make something amazing together!
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img 
                src="https://github.com/CarolineXXY/portfolio-assets/blob/main/images/Avatar.png?raw=true" 
                alt="Caroline" 
                className="rounded-2xl shadow-2xl max-w-sm w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 lg:py-40" style={{ background: colors.background }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4 inline-block relative" style={{ color: colors.text }}>
              Featured Projects
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 rounded-full -mb-3" style={{ background: colors.primary }}></span>
            </h2>
            <p className="text-xl mt-8" style={{ color: colors.textMuted }}>
              A selection of my recent work in UX/UI design
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <Link key={index} href={project.link}>
                <div className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer group hover:-translate-y-1" style={{ background: colors.surface }}>
                  <div className="aspect-video overflow-hidden" style={{ background: colors.background }}>
                    <img 
                      src={project.thumbnail} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4" style={{ color: colors.text }}>
                      {project.title}
                    </h3>
                    <p className="mb-6 leading-relaxed" style={{ color: colors.textMuted }}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="px-4 py-2 rounded-full text-sm font-medium"
                          style={{ 
                            background: tagIndex === 0 ? `${colors.primary}15` : `${colors.secondary}15`,
                            color: tagIndex === 0 ? colors.primary : colors.secondary
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center font-semibold" style={{ color: colors.primary }}>
                      View Case Study
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 lg:py-40" style={{ background: colors.surface }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4 inline-block relative" style={{ color: colors.text }}>
              Get In Touch
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 rounded-full -mb-3" style={{ background: colors.primary }}></span>
            </h2>
            <p className="text-xl mt-12 mb-12 leading-relaxed" style={{ color: colors.textMuted }}>
              I'm currently looking for entry-level UX/UI designer opportunities. Let's connect and create something amazing together!
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center justify-center gap-3">
                <svg className="w-6 h-6" style={{ color: colors.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:carolinexxy0108@gmail.com" className="text-lg hover:underline" style={{ color: colors.textMuted }}>
                  carolinexxy0108@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-3">
                <svg className="w-6 h-6" style={{ color: colors.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-lg" style={{ color: colors.textMuted }}>
                  (+61) 0435 712 282
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:carolinexxy0108@gmail.com"
                className="px-8 py-3 font-semibold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                style={{ background: colors.secondary, color: '#FFFFFF' }}
                onMouseEnter={(e) => e.currentTarget.style.background = colors.secondaryHover}
                onMouseLeave={(e) => e.currentTarget.style.background = colors.secondary}
              >
                Email Me
              </a>
              <a 
                href="https://www.linkedin.com/in/caroline-xiao-yi-yang/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 font-semibold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                style={{ background: colors.primary, color: '#FFFFFF' }}
                onMouseEnter={(e) => e.currentTarget.style.background = colors.primaryHover}
                onMouseLeave={(e) => e.currentTarget.style.background = colors.primary}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8" style={{ background: colors.text, color: '#FFFFFF' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p style={{ color: '#CCCCCC' }}>
            © 2025 Caroline. Designed with passion and purpose.
          </p>
        </div>
      </footer>
    </div>
  );
}

