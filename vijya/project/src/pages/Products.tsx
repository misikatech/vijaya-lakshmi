import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Products.module.css';

const Products: React.FC = () => {
  const productCategories = [
    {
      title: 'Business Bags',
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gallery: [
        'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400'
      ],
      description: 'Our premium business bag collection features meticulously crafted leather and fabric bags designed for the modern professional. Each bag combines functionality with sophisticated style, featuring multiple compartments, laptop sleeves, and durable construction. From executive briefcases to versatile messenger bags, our collection caters to diverse business needs while maintaining the highest quality standards.',
      materials: 'Premium leather, high-grade fabric, reinforced stitching',
      types: 'Briefcases, Laptop bags, Messenger bags, Travel bags',
      useCases: 'Corporate meetings, business travel, office use, professional networking'
    },
    {
      title: 'Home Textiles',
      image: 'https://images.pexels.com/photos/6444444/pexels-photo-6444444.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gallery: [
        'https://images.pexels.com/photos/6444444/pexels-photo-6444444.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/6782351/pexels-photo-6782351.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/6527056/pexels-photo-6527056.jpeg?auto=compress&cs=tinysrgb&w=400'
      ],
      description: 'Transform your living space with our luxurious home textile collection. From elegant bedding sets to decorative cushions and curtains, each piece is crafted using the finest materials and traditional techniques. Our textiles blend comfort with style, offering durability and easy maintenance while adding a touch of sophistication to any home décor.',
      materials: 'Cotton, silk, linen, blended fabrics, eco-friendly dyes',
      types: 'Bedsheets, Cushion covers, Curtains, Table linens, Throws',
      useCases: 'Bedroom décor, living room enhancement, hotel industry, interior design'
    },
    {
      title: 'Garments',
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gallery: [
        'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400'
      ],
      description: 'Our garment collection represents the perfect fusion of traditional Indian craftsmanship and contemporary fashion. Each piece is designed with attention to detail, using premium fabrics and modern cuts. From casual wear to formal attire, our garments offer comfort, style, and durability, making them suitable for diverse international markets.',
      materials: 'Cotton, silk, polyester blends, sustainable fabrics',
      types: 'Formal wear, Casual clothing, Traditional garments, Custom designs',
      useCases: 'Professional attire, casual wear, special occasions, retail distribution'
    }
  ];

  return (
    <div className={styles.productsPage}>
      {/* Hero Section */}
      <section 
        className="hero-section"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1600")'
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Our Products</h1>
          <p className="hero-subtitle">Premium quality products crafted for international markets</p>
        </div>
      </section>

      {/* Product Categories */}
      {productCategories.map((category, index) => (
        <section key={index} className={`section ${styles.categorySection} ${index % 2 === 1 ? styles.reverse : ''}`}>
          <div className="container">
            <div className={styles.categoryContent}>
              <div className={styles.categoryGallery}>
                <div className={styles.mainImage}>
                  <img src={category.image} alt={category.title} />
                </div>
                <div className={styles.thumbnails}>
                  {category.gallery.map((img, idx) => (
                    <img key={idx} src={img} alt={`${category.title} ${idx + 1}`} />
                  ))}
                </div>
              </div>
              <div className={styles.categoryDetails}>
                <h2 className={styles.categoryTitle}>{category.title}</h2>
                <p className={styles.categoryDescription}>{category.description}</p>
                
                <div className={styles.categorySpecs}>
                  <div className={styles.specItem}>
                    <h4>Materials</h4>
                    <p>{category.materials}</p>
                  </div>
                  <div className={styles.specItem}>
                    <h4>Types Available</h4>
                    <p>{category.types}</p>
                  </div>
                  <div className={styles.specItem}>
                    <h4>Use Cases</h4>
                    <p>{category.useCases}</p>
                  </div>
                </div>

                <div className={styles.categoryActions}>
                  <Link to="/contact" className="btn btn-primary">Request Catalog</Link>
                  <Link to="/contact" className="btn btn-secondary">Get a Quote</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Products;