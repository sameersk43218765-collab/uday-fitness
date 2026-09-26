import { useState } from "react";
import { motion } from "framer-motion";


import {
  Menu,
  X,
  ArrowUpRight,
  Dumbbell,
  HeartPulse,
  Activity,
  Users,
  BriefcaseBusiness,
  Phone,
  MapPin,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const stats = [
    {
      number: "20+",
      title: "Years",
      text: "Fitness Experience",
      icon: <Dumbbell size={22} />,
    },
    {
      number: "8+",
      title: "Years",
      text: "Yoga Experience",
      icon: <HeartPulse size={22} />,
    },
    {
      number: "2,700+",
      title: "People",
      text: "Coached",
      icon: <Users size={22} />,
    },
    {
      number: "250+",
      title: "Yoga",
      text: "Camps",
      icon: <Activity size={22} />,
    },
  ];

  const expertise = [
    {
      icon: <HeartPulse size={25} />,
      title: "Yoga Instruction",
      text: "Yoga instruction, yoga camps and practical wellness programs for different audiences.",
    },
    {
      icon: <Dumbbell size={25} />,
      title: "Personal Fitness",
      text: "Personal fitness coaching designed around individual goals and lifestyle.",
    },
    {
      icon: <BriefcaseBusiness size={25} />,
      title: "Corporate Wellness",
      text: "Wellness workshops and employee wellness engagement programs.",
    },
    {
      icon: <Activity size={25} />,
      title: "Weight-Loss Programs",
      text: "Lifestyle-focused fitness programs supporting healthier daily routines.",
    },
    {
      icon: <Users size={25} />,
      title: "Group Fitness",
      text: "Fitness sessions for groups, organizations and different communities.",
    },
    {
      icon: <HeartPulse size={25} />,
      title: "Breathing & Relaxation",
      text: "Breathing, stretching and relaxation practices for overall wellness.",
    },
  ];

  const experience = [
    {
      year: "2016 — Present",
      role: "Fitness & Yoga Training",
      company: "Parker Communication Pvt. Ltd.",
    },
    {
      year: "Apr 2011 — Sep 2014",
      role: "Yoga Instructor",
      company: "Oracle Finance Services Pvt. Ltd.",
    },
    {
      year: "May 2009 — Mar 2011",
      role: "Fitness Instructor",
      company: "Cricket Club of India, Mumbai",
    },
    {
      year: "Jan 2008 — Dec 2008",
      role: "Yoga Instructor",
      company: "Mesmer Fashion Institute",
    },
    {
      year: "Sep 2006 — Aug 2007",
      role: "Fitness Instructor",
      company: "Fitness First",
    },
    {
      year: "Jun 2005 — Oct 2006",
      role: "Fitness Instructor",
      company: "Total Activation",
    },
    {
      year: "Apr 2004 — Oct 2005",
      role: "Fitness Instructor",
      company: "Planet Health",
    },
    {
      year: "Feb 1998 — May 2005",
      role: "Fitness Instructor",
      company: "Dubai Fitness Center",
    },
  ];

  const workshops = [
    "Infinithems Health Studio",
    "Reliance Industries Ltd.",
    "IBM",
    "Hindustan Organic Chemicals Limited",
    "Rashtriya Chemicals and Fertilizers",
    "Abbott India Limited",
    "Bayer HealthCare Pharmaceuticals",
    "Nirmala Niketan Old Age Home",
    "Mumbai Police A1-Force",
  ];

  const photos = Array.from({ length: 15 }, (_, index) => ({
    id: index + 1,
    src: `/images/photo${index + 1}.jpg`,
  }));

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <div className="site">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="container nav-inner">

         <button
  className="brand-logo"
  onClick={() => scrollToSection("home")}
>
  <img
    src="/images/logo.png"
    alt="Uday Fitness and Yoga"
  />
</button>

          <div className={`nav-links ${menuOpen ? "show" : ""}`}>

            <button onClick={() => scrollToSection("home")}>
              Home
            </button>

            <button onClick={() => scrollToSection("about")}>
              About
            </button>

            <button onClick={() => scrollToSection("expertise")}>
              Expertise
            </button>

            <button onClick={() => scrollToSection("experience")}>
              Experience
            </button>

            <button onClick={() => scrollToSection("gallery")}>
              Gallery
            </button>

            <button onClick={() => scrollToSection("contact")}>
              Contact
            </button>

            <button
              className="nav-cta"
              onClick={() => scrollToSection("contact")}
            >
              Book a Session
              <ArrowUpRight size={17} />
            </button>

          </div>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>

        </div>
      </nav>


      {/* ================= HERO ================= */}

      <section className="hero" id="home">

        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>

        <div className="container hero-grid">

          <motion.div
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >

            <motion.div
              className="eyebrow"
              variants={fadeUp}
            >
              <span></span>
              FITNESS • YOGA • WELLNESS
            </motion.div>

            <motion.h1 variants={fadeUp}>
              Stronger Body.
              <br />
              <span>Calmer Mind.</span>
              <br />
              Better Life.
            </motion.h1>

            <motion.p variants={fadeUp}>
              Professional Fitness & Yoga coaching with more than
              two decades of experience helping people build healthier,
              stronger and more balanced lives.
            </motion.p>

            <motion.div
              className="hero-actions"
              variants={fadeUp}
            >

              <button
                className="primary-button"
                onClick={() => scrollToSection("contact")}
              >
                Start Your Journey
                <ArrowUpRight size={19} />
              </button>

              <button
                className="outline-button"
                onClick={() => scrollToSection("about")}
              >
                Explore More
                <ChevronRight size={18} />
              </button>

            </motion.div>

            <motion.div
              className="hero-mini-stats"
              variants={fadeUp}
            >

              <div>
                <strong>20+</strong>
                <span>Years Experience</span>
              </div>

              <div className="mini-divider"></div>

              <div>
                <strong>2,700+</strong>
                <span>People Coached</span>
              </div>

            </motion.div>

          </motion.div>


          <motion.div
            className="hero-visual"
            initial={{
              opacity: 0,
              scale: 0.85,
              x: 50,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
          >

            <div className="hero-circle"></div>

            <div className="hero-photo">
              <img
                src="/images/photo1.jpg"
                alt="Uday Vishwasrao"
              />
            </div>

            <motion.div
              className="floating-card wellness-card"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >

              <HeartPulse size={21} />

              <div>
                <strong>Wellness</strong>
                <span>Mind + Body</span>
              </div>

            </motion.div>


            <motion.div
              className="floating-card camps-card"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
              }}
            >

              <strong>250+</strong>
              <span>Yoga Camps</span>

            </motion.div>

          </motion.div>

        </div>

      </section>


      {/* ================= STATS ================= */}

      <section className="stats-section">

        <div className="container stats-grid">

          {stats.map((item, index) => (

            <motion.div
              className="stat-box"
              key={item.text}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
              }}
            >

              <div className="stat-icon">
                {item.icon}
              </div>

              <div>
                <strong>{item.number}</strong>
                <small>{item.title}</small>
                <span>{item.text}</span>
              </div>

            </motion.div>

          ))}

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section className="section about-section" id="about">

        <div className="container about-grid">

          <motion.div
            className="about-gallery"
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >

            <div className="about-main-photo">
              <img
                src="/images/photo2.jpg"
                alt="Fitness coaching"
              />
            </div>

            <div className="about-small-photo">
              <img
                src="/images/photo3.jpg"
                alt="Yoga session"
              />
            </div>

            <div className="experience-badge">
              <strong>20+</strong>

              <span>
                Years of
                <br />
                Experience
              </span>
            </div>

          </motion.div>


          <motion.div
            className="about-content"
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >

            <div className="section-label">
              ABOUT UDAY
            </div>

            <h2>
              Fitness is more than
              <span> exercise.</span>
            </h2>

            <p>
              Fitness and wellness are about creating a balanced
              connection between the body, mind and everyday life.
            </p>

            <p>
              With more than 20 years of fitness experience and
              over 8 years of dedicated yoga experience, Uday
              Vishwasrao has worked with individuals, groups and
              corporate teams.
            </p>

            <div className="about-points">

              <div>
                <CheckCircle2 size={18} />
                <span>Personalized Coaching</span>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <span>Practical Wellness Programs</span>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <span>Individual & Group Training</span>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <span>Corporate Wellness Sessions</span>
              </div>

            </div>

          </motion.div>

        </div>

      </section>


      {/* ================= EXPERTISE ================= */}

      <section
        className="section expertise-section"
        id="expertise"
      >

        <div className="container">

          <motion.div
            className="section-heading"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >

            <div className="section-label">
              CORE EXPERTISE
            </div>

            <h2>
              Wellness designed
              <span> around you.</span>
            </h2>

            <p>
              Professional fitness and wellness services for
              individuals, groups and organizations.
            </p>

          </motion.div>


          <div className="expertise-grid">

            {expertise.map((item, index) => (

              <motion.div
                className="expertise-card"
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
              >

                <div className="expertise-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <div className="expertise-arrow">
                  <ArrowUpRight size={18} />
                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= EXPERIENCE ================= */}

      <section
        className="section experience-section"
        id="experience"
      >

        <div className="container">

          <motion.div
            className="section-heading center"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >

            <div className="section-label">
              PROFESSIONAL JOURNEY
            </div>

            <h2>
              Experience that
              <span> speaks.</span>
            </h2>

          </motion.div>


          <div className="timeline">

            {experience.map((item, index) => (

              <motion.div
                className="timeline-item"
                key={`${item.company}-${item.year}`}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -30 : 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
              >

                <div className="timeline-year">
                  {item.year}
                </div>

                <div className="timeline-line">
                  <div className="timeline-dot"></div>
                </div>

                <div className="timeline-content">

                  <h3>{item.role}</h3>

                  <p>{item.company}</p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= WORKSHOPS ================= */}

      <section className="workshops-section">

        <div className="container workshops-grid">

          <motion.div
            className="workshops-content"
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >

            <div className="section-label dark-label">
              CORPORATE WELLNESS
            </div>

            <h2>
              Wellness for
              <span> teams & organizations.</span>
            </h2>

            <p>
              Workshops, yoga camps and specialized wellness
              programs conducted for organizations and diverse
              groups.
            </p>

            <button
              className="dark-button"
              onClick={() => scrollToSection("contact")}
            >
              Discuss a Program
              <ArrowUpRight size={18} />
            </button>

          </motion.div>


          <motion.div
            className="company-list"
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >

            {workshops.map((company, index) => (

              <div
                className="company-row"
                key={company}
              >

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{company}</strong>

                <ArrowUpRight size={17} />

              </div>

            ))}

          </motion.div>

        </div>

      </section>


      {/* ================= GALLERY ================= */}

      <section
        className="section gallery-section"
        id="gallery"
      >

        <div className="container">

          <motion.div
            className="section-heading"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >

            <div className="section-label">
              GALLERY
            </div>

            <h2>
              Moments of
              <span> movement.</span>
            </h2>

            <p>
              A glimpse into fitness sessions, yoga,
              workshops and wellness programs.
            </p>

          </motion.div>


          <div className="gallery-grid">

            {photos.map((photo, index) => (

              <motion.div
                className={`gallery-item gallery-item-${index + 1}`}
                key={photo.id}
                initial={{
                  opacity: 0,
                  scale: 0.92,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: (index % 5) * 0.07,
                }}
                whileHover={{
                  scale: 1.025,
                }}
              >

                <img
                  src={photo.src}
                  alt={`Fitness and Yoga ${index + 1}`}
                />

                <div className="gallery-overlay">

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <ArrowUpRight size={22} />

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="cta-section">

        <div className="cta-circle cta-circle-one"></div>
        <div className="cta-circle cta-circle-two"></div>

        <motion.div
          className="container cta-content"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >

          <div className="section-label">
            START YOUR JOURNEY
          </div>

          <h2>
            Your healthier life
            <br />
            can start <span>today.</span>
          </h2>

          <p>
            Personal coaching, yoga sessions and wellness
            programs designed around your requirements.
          </p>

          <button
            className="primary-button"
            onClick={() => scrollToSection("contact")}
          >
            Get Started
            <ArrowUpRight size={19} />
          </button>

        </motion.div>

      </section>


      {/* ================= CONTACT ================= */}

      <section
        className="section contact-section"
        id="contact"
      >

        <div className="container contact-grid">

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >

            <div className="section-label">
              CONTACT
            </div>

            <h2>
              Let's build a
              <span> healthier future.</span>
            </h2>

            <p>
              Looking for personal fitness coaching,
              yoga sessions or corporate wellness programs?
              Get in touch to discuss your requirements.
            </p>

            <div className="contact-details">

              <a href="tel:8169583260">

                <div className="contact-icon">
                  <Phone size={19} />
                </div>

                <span>
                  <small>CALL</small>
                  8169583260
                </span>

              </a>


              <div>

                <div className="contact-icon">
                  <MapPin size={19} />
                </div>

                <span>
                  <small>LOCATION</small>
                  Mumbai
                </span>

              </div>

            </div>

          </motion.div>


          <motion.div
            className="contact-card"
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >

            <div className="contact-card-top">

              <span>GET STARTED</span>

              <HeartPulse size={28} />

            </div>

            <h3>
              Ready to make
              <br />
              a change?
            </h3>

            <p>
              Reach out for fitness, yoga and wellness
              programs tailored to your requirements.
            </p>

            <a
              className="contact-button"
              href="tel:8169583260"
            >
              Call Now
              <ArrowUpRight size={18} />
            </a>

          </motion.div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <div className="container footer-main">

          <div className="footer-brand">

            <button
              className="footer-logo-button"
              onClick={() => scrollToSection("home")}
            >

              <img
                src="/images/logo.png"
                alt="Uday Fitness and Yoga"
              />

            </button>

            <p>
              Fitness • Yoga • Wellness
            </p>

          </div>


          <div className="footer-links">

            <button onClick={() => scrollToSection("home")}>
              Home
            </button>

            <button onClick={() => scrollToSection("about")}>
              About
            </button>

            <button onClick={() => scrollToSection("expertise")}>
              Expertise
            </button>

            <button onClick={() => scrollToSection("gallery")}>
              Gallery
            </button>

            <button onClick={() => scrollToSection("contact")}>
              Contact
            </button>

          </div>


          <div className="footer-social">

            <a href="tel:8169583260">
              <Phone size={18} />
            </a>

            <a href="#">
              <ArrowUpRight size={18} />
            </a>

          </div>

        </div>


        <div className="container footer-bottom">

          <span>
            © {new Date().getFullYear()} Uday Vishwasrao.
            All rights reserved.
          </span>

        </div>

      </footer>

    </div>
  );
}

export default App;