import { useEffect, useState } from "react";
import {
  Shield,
  Award,
  Users,
  MapPin,
  Phone,
  Mail,
  Calendar,
  TrendingUp,
  Building2,
  Wrench,
  GraduationCap,
  FireExtinguisher,
  ClipboardCheck,
  Search,
  Download,
  Menu,
  X,
} from "lucide-react";
import "./App.css";
import logo from "./assets/logo.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";
import image5 from "./assets/image5.jpg";
import installationImage from "./assets/installation.jpg";
import verificationImage from "./assets/Vérification Périodique des Matériels.jpg";
import maintenanceImage from "./assets/Maintenance (Recharge, Réparation et Remplacement).jpg";
import formationImage from "./assets/Formation Professionnelle.jpg";
import partenairesImage from "./assets/partenaire.png";
import heroVideo from "./assets/hero-video.mp4";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  useEffect(() => {
    const aboutSection = document.getElementById("about");
    if (!aboutSection) return;

    const revealElements = aboutSection.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { root: null, threshold: 0.2 }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear status message when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create email body with form data
    const subject = encodeURIComponent("Message depuis le site Eurofeu");
    const body = encodeURIComponent(
      `Bonjour,\n\n` +
        `Nom: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Téléphone: ${formData.phone}\n\n` +
        `Message:\n${formData.message}`
    );

    // Create mailto link
    const mailtoLink = `mailto:eurofeuci@gmail.com?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    setSubmitStatus({
      type: "success",
      message: "Votre client email s'ouvre. Veuillez envoyer le message.",
    });

    // Reset form
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setSubmitStatus({ type: null, message: "" });
    }, 3000);
  };

  const services = [
    {
      id: "installation",
      title: "Installation de Matériels de Lutte et de Prévention Incendie",
      icon: <FireExtinguisher className="service-icon" />,
      image: installationImage,
      description: "Installation complète de systèmes de sécurité incendie",
      details: [
        "Extincteurs portatifs et sur roues",
        "Robinet d'incendie armé (RIA)",
        "Poste incendie Additivé (PIA)",
        "Etablissement d'un rapport de conformité N4 – N5 (extincteurs, PIA, RIA)",
        "Colonne sèche",
        "Système de sécurité Incendie (SSI)",
      ],
    },
    {
      id: "verification",
      title: "Vérification Périodique des Matériels",
      icon: <ClipboardCheck className="service-icon" />,
      image: verificationImage,
      description: "Contrôles réguliers et rapports de conformité",
      details: [
        "Extincteurs portatifs et sur roues",
        "Robinet d'incendie armé (RIA)",
        "Poste incendie Additivé (PIA)",
        "Etablissement d'un rapport de conformité Q4 – Q5 (extincteurs, PIA, RIA)",
      ],
    },
    {
      id: "maintenance",
      title: "Maintenance (Recharge, Réparation et Remplacement)",
      icon: <Wrench className="service-icon" />,
      image: maintenanceImage,
      description: "Entretien et réparation de vos équipements",
      details: [
        "Extincteurs portatifs et sur roues",
        "Robinet d'incendie armé (RIA)",
        "Poste incendie Additivé (PIA)",
        "Recharge et remplacement de pièces défectueuses",
      ],
    },
    {
      id: "formation",
      title: "Formation Professionnelle",
      icon: <GraduationCap className="service-icon" />,
      image: formationImage,
      description: "Formations complètes en secourisme et sécurité incendie",
      details: [
        "Secourisme: 1er secours (IGS), BNS, Réanimation, Secourisme routier, Monitoriat",
        "Incendie: Initiation extincteurs, EPI 1 & 2, IGH 1 & 2",
        "Prévention: Initiation à la prévention des risques civils",
      ],
    },
    {
      id: "audit",
      title: "Audit et Contrôle de Sécurité",
      icon: <Search className="service-icon" />,
      image: image5,
      description: "Audits complets et études de sécurité",
      details: [
        "Audit de sécurité incendie",
        "Contrôle des installations incendies",
        "Etude de système de sécurité sur plan",
        "Plan sur autoCAD",
        "Elaboration de POI (Plan d'opération Interne)",
        "Elaboration de PIU (Plan d'Intervention d'urgence)",
      ],
    },
  ];

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="nav-brand">
            <img src={logo} alt="Eurofeu Logo" className="logo-image" />
            <span className="brand-name">EUROFEU</span>
          </div>
          <div className="nav-links">
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>
              À Propos
            </a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>
              Services
            </a>
            <a href="#partenaires" onClick={() => setIsMobileMenuOpen(false)}>
              Partenaires
            </a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </a>
          </div>
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`mobile-menu ${
            isMobileMenuOpen ? "mobile-menu-open" : ""
          }`}
        >
          <div className="mobile-menu-content">
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>
              À Propos
            </a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>
              Services
            </a>
            <a href="#partenaires" onClick={() => setIsMobileMenuOpen(false)}>
              Partenaires
            </a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <video autoPlay muted loop playsInline className="hero-bg-video">
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">Leader de la Sécurité Incendie</h1>
          <p className="hero-subtitle">
            Solutions françaises certifiées depuis 1972
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Nos Solutions</button>
            <button className="btn btn-secondary">Contact</button>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <Calendar className="stat-icon" />
            <span className="stat-number">1972</span>
            <span className="stat-label">Année de création</span>
          </div>
          <div className="stat">
            <Users className="stat-icon" />
            <span className="stat-number">1000+</span>
            <span className="stat-label">Clients en Côte d'Ivoire</span>
          </div>
          <div className="stat">
            <Building2 className="stat-icon" />
            <span className="stat-number">100</span>
            <span className="stat-label">Distributeurs</span>
          </div>
          <div className="stat">
            <TrendingUp className="stat-icon" />
            <span className="stat-number">750M+</span>
            <span className="stat-label">F CFA CA annuel</span>
          </div>
        </div>

        {/* Scroll Indicator */}
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2 className="about-title reveal">À Propos d'Eurofeu</h2>
            <p className="about-subtitle reveal">
              Une expertise reconnue dans la sécurité incendie
            </p>
          </div>

          <div className="about-content">
            <div className="about-text">
              <div className="about-item">
                <div className="about-item-content">
                  <div className="about-text-content">
                    <h3>Groupe Eurofeu - France</h3>
                    <p>
                      Implanté depuis 1972 à Senonches, en Eure-et-Loir, le
                      Groupe Eurofeu est aujourd'hui l'un des leaders du marché
                      de la sécurité incendie en France. Il est également le
                      seul fabricant français labélisé « Origine France Garantie
                      ». Le groupe est aussi membre adhérant et très actif au
                      sein de la fédération française des métiers d'incendie
                      (FFMI).
                    </p>
                  </div>
                  <div className="about-image">
                    <img src={image2} alt="Eurofeu France Facility" />
                  </div>
                </div>
              </div>

              <div className="about-item">
                <div className="about-item-content reverse">
                  <div className="about-image">
                    <img src={image3} alt="Eurofeu Côte d'Ivoire" />
                  </div>
                  <div className="about-text-content">
                    <h3>Eurofeu Côte d'Ivoire</h3>
                    <p>
                      Représentant officiel de Eurofeu groupe en Côte d'Ivoire
                      depuis 2013, Eurofeu Côte d'Ivoire se place parmi les
                      leaders du marché de la sécurité incendie sur le
                      territoire ivoirien avec plus de 1000 clients et environ
                      100 distributeurs et revendeurs à travers le pays.
                      Aujourd'hui, il enregistre un chiffre d'affaires annuel de
                      plus de 750 000 000 de F CFA (2018).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-features">
              <div className="feature">
                <Award className="feature-icon" />
                <h4>Origine France Garantie</h4>
                <p>Seul fabricant français labélisé</p>
              </div>
              <div className="feature">
                <Shield className="feature-icon" />
                <h4>Leader du marché</h4>
                <p>Expertise reconnue depuis 1972</p>
              </div>
              <div className="feature">
                <Users className="feature-icon" />
                <h4>Réseau étendu</h4>
                <p>100+ distributeurs en Côte d'Ivoire</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2>Nos Services Complets</h2>
            <p>L'ensemble des services EUROFEU COTE D'IVOIRE</p>
            <div className="pdf-download">
              <a
                href="/PRESENTATION EUROFEU CI - S.P 2.0.pdf"
                download
                className="pdf-download-btn"
              >
                <Download className="download-icon" />
                <span>Télécharger notre brochure complète</span>
              </a>
            </div>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-image">
                  <div className="service-image-title">
                    <h4>{service.title}</h4>
                  </div>
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-card-content">
                  {service.icon}
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partenaires" className="partenaires">
        <div className="container">
          <div className="section-header">
            <h2>Nos Partenaires</h2>
            <p>Des collaborations de confiance pour votre sécurité</p>
          </div>

          <div className="partenaires-content">
            <div className="partenaires-image">
              <img src={partenairesImage} alt="Nos Partenaires" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Contactez-nous</h2>
            <p>Une question ? Notre équipe vous répond rapidement</p>
          </div>

          <div className="contact-wrapper">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                {submitStatus.message && (
                  <div
                    className={`submit-status ${
                      submitStatus.type === "success" ? "success" : "error"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Nom complet"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Téléphone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Votre message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-brand-content">
              <img
                src={logo}
                alt="Eurofeu Logo"
                className="footer-logo-image"
              />
              <div className="footer-brand-text">
                <div className="footer-brand-name">EUROFEU</div>
                <div className="footer-brand-tagline">
                  Leader de la sécurité incendie depuis 1972
                </div>
              </div>
            </div>
          </div>

          <div className="footer-links">
            <a href="#about">À Propos</a>
            <a href="#services">Services</a>
            <a href="#partenaires">Partenaires</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-contact">
            <div className="footer-contact-item">
              <Phone size={16} />
              <span>21 24 87 81</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={16} />
              <span>info@eurofeu.com</span>
            </div>
            <div className="footer-contact-item">
              <MapPin size={16} />
              <span>Marcory Zone 4, Abidjan</span>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <p>&copy; 2025 Eurofeu. Tous droits réservés by BSL.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
