import React from 'react';
import { Link } from 'react-router-dom';
import { FaGlobe, FaShieldAlt, FaTruck, FaUsers, FaAward, FaHandshake } from 'react-icons/fa';
import styles from './Home.module.css';

const Home: React.FC = () => {
  const productCategories = [
    {
      title: 'Business Bags',
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Premium quality business bags for professionals worldwide.'
    },
    {
      title: 'Home Textiles',
      image: 'https://images.pexels.com/photos/6444444/pexels-photo-6444444.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Luxurious home textiles crafted with finest materials.'
    },
    {
      title: 'Garments',
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'High-quality garments designed for comfort and style.'
    }
  ];

  const keyStrengths = [
    {
      icon: <FaGlobe />,
      title: 'Global Reach',
      description: 'Serving clients across 25+ countries with reliable international shipping and logistics.',
      stats: '25+ Countries'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Quality Assurance',
      description: 'ISO certified manufacturing processes ensuring consistent quality in every product.',
      stats: 'ISO Certified'
    },
    {
      icon: <FaTruck />,
      title: 'Timely Delivery',
      description: 'Advanced supply chain management with 98% on-time delivery rate worldwide.',
      stats: '98% On-Time'
    },
    {
      icon: <FaUsers />,
      title: 'Expert Team',
      description: 'Over 50 skilled professionals dedicated to manufacturing excellence.',
      stats: '50+ Experts'
    },
    {
      icon: <FaAward />,
      title: 'Industry Experience',
      description: 'Decades of experience in international trade and manufacturing.',
      stats: '15+ Years'
    },
    {
      icon: <FaHandshake />,
      title: 'Trusted Partner',
      description: 'Long-term partnerships with leading brands and distributors globally.',
      stats: '500+ Clients'
    }
  ];

  const testimonials = [
    {
      quote: "Vijaya Lakshmi has been our trusted partner for business bags. Their quality and reliability are unmatched.",
      author: "Sarah Johnson",
      company: "Global Business Solutions, USA",
      rating: 5
    },
    {
      quote: "The home textiles we source from them have consistently exceeded our customers' expectations.",
      author: "Marco Rodriguez",
      company: "European Textiles Ltd, Spain",
      rating: 5
    },
    {
      quote: "Their garment quality and timely delivery have made them our preferred supplier for three years.",
      author: "Chen Wei",
      company: "Asia Fashion Group, Singapore",
      rating: 5
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We understand your requirements and provide detailed product specifications.'
    },
    {
      step: '02',
      title: 'Sampling',
      description: 'Quality samples are prepared and sent for your approval before bulk production.'
    },
    {
      step: '03',
      title: 'Production',
      description: 'Manufacturing begins with strict quality control at every stage of production.'
    },
    {
      step: '04',
      title: 'Quality Check',
      description: 'Comprehensive quality inspection ensures products meet international standards.'
    },
    {
      step: '05',
      title: 'Shipping',
      description: 'Secure packaging and reliable logistics ensure safe delivery to your destination.'
    }
  ];
  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section 
        className="hero-section"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1600")'
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Vijaya Lakshmi</h1>
          <h2 className="hero-subtitle">Exporting Quality from India to the World</h2>
          <p className="hero-tagline">Premium Business Bags | Home Textiles | Garments</p>
          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary">Explore Our Products</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Brief Intro Section */}
      <section className={`section ${styles.introSection}`}>
        <div className="container">
          <div className={styles.introContent}>
            <h2 className="section-title">Trust, Quality & Global Reach</h2>
            <p className={styles.introText}>
              For years, we have been a trusted partner for businesses worldwide, delivering meticulously 
              crafted products that meet international standards. Our commitment to excellence and innovation 
              has made us a preferred choice for premium business bags, home textiles, and garments across the globe.
            </p>
            <div className={styles.statsRow}>
              <div className={styles.statItem}>
                <h3>25+</h3>
                <p>Countries Served</p>
              </div>
              <div className={styles.statItem}>
                <h3>500+</h3>
                <p>Happy Clients</p>
              </div>
              <div className={styles.statItem}>
                <h3>15+</h3>
                <p>Years Experience</p>
              </div>
              <div className={styles.statItem}>
                <h3>98%</h3>
                <p>On-Time Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Strengths Section */}
      <section className={`section ${styles.strengthsSection}`}>
        <div className="container">
          <h2 className="section-title">Why Choose Vijaya Lakshmi</h2>
          <p className="section-subtitle">
            Our key strengths that make us the preferred partner for international businesses
          </p>
          <div className={styles.strengthsGrid}>
            {keyStrengths.map((strength, index) => (
              <div key={index} className={styles.strengthCard}>
                <div className={styles.strengthIcon}>
                  {strength.icon}
                </div>
                <div className={styles.strengthStats}>{strength.stats}</div>
                <h3 className={styles.strengthTitle}>{strength.title}</h3>
                <p className={styles.strengthDescription}>{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Product Categories Preview */}
      <section className={`section ${styles.productsPreview}`}>
        <div className="container">
          <h2 className="section-title">Our Product Categories</h2>
          <p className="section-subtitle">
            Discover our extensive range of premium products crafted for international markets
          </p>
          <div className={styles.productGrid}>
            {productCategories.map((category, index) => (
              <div key={index} className={styles.productCard}>
                <div className={styles.productImage}>
                  <img src={category.image} alt={category.title} />
                  <div className={styles.productOverlay}>
                    <Link to="/products" className={styles.learnMoreBtn}>
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className={styles.productContent}>
                  <h3 className={styles.productTitle}>{category.title}</h3>
                  <p className={styles.productDescription}>{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className={`section ${styles.processSection}`}>
        <div className="container">
          <h2 className="section-title">Our Manufacturing Process</h2>
          <p className="section-subtitle">
            From consultation to delivery, we ensure excellence at every step
          </p>
          <div className={styles.processGrid}>
            {processSteps.map((process, index) => (
              <div key={index} className={styles.processCard}>
                <div className={styles.processStep}>{process.step}</div>
                <h3 className={styles.processTitle}>{process.title}</h3>
                <p className={styles.processDescription}>{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`section ${styles.testimonialsSection}`}>
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Trusted by businesses worldwide for quality and reliability
          </p>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <div className={styles.testimonialRating}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className={styles.star}>★</span>
                  ))}
                </div>
                <p className={styles.testimonialQuote}>"{testimonial.quote}"</p>
                <div className={styles.testimonialAuthor}>
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Partner with Us?</h2>
            <p className={styles.ctaText}>
              Join hundreds of satisfied clients worldwide. Let's discuss how we can meet your 
              manufacturing and export requirements with our premium products and reliable service.
            </p>
            <div className={styles.ctaButtons}>
              <Link to="/contact" className="btn btn-primary">Get a Quote</Link>
              <Link to="/products" className="btn btn-secondary">View Catalog</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;