import React, { useState } from 'react';
import './Home.css'; // Import custom CSS file

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Form submitted:', formData);
    // Reset form (optional)
    setFormData({
      name: '',
      email: '',
      address: '',
      phone: ''
    });
  };

  return (
    <div className="home-container">
      {/* Header with Logo */}
      <header className="header">
        <img src="/Sitaare_logo.png" alt="House of Humanity Logo" className="logo-image" />
        <h1 className="title">Project Sitaare</h1>
        <p className="subtitle">Giving Girls a Home, a Family, a Future</p>
      </header>

      {/* Profile Showcase */}
      <section className="profile-showcase">
        <h2 className="section-title">Adoptable Beneficiaries</h2>
        <div className="profile-grid">
          {['Lotus', 'Lilly', 'Rose'].map((name, index) => (
            <div key={index} className="profile-card">
              <img src={`/assets/profile${index + 1}.jpg`} alt={`Girl ${name}`} className="profile-image" />
              <h3 className="profile-name">{name}</h3>
              <p className="profile-description">Ready to learn, lead, and shine.</p>
              <p className="profile-status">Status: Waiting for adoption</p>
            </div>
          ))}
        </div>
      </section>

      {/* Donation */}
      <section className="donation-section">
        <h2 className="section-title">Support Their Journey</h2>
        <p className="donation-text">Donate ₹11,551/month to virtually adopt a child.</p>
        <a
          href="https://paypal.me/ShreeyashJagtap"
          target="_blank"
          rel="noopener noreferrer"
          className="donate-button"
        >
          Donate via PayPal
        </a>
      </section>

      {/* Chatbot Section */}
      <section className="chatbot-section">
        <h2 className="section-title">Have Questions?</h2>
        <p className="chatbot-text">Ask our chatbot in the bottom-right corner. We’re here to help!</p>
      </section>

      {/* Animation Samples */}
      <section className="animation-section">
        <h2 className="section-title">A Journey of Hope</h2>
        <p className="fade-in">Empowering girls through education, health, and love.</p>
      </section>

      {/* About Project Sitaare */}
      <section className="about-section">
        <h2 className="section-title">About Project Sitaare</h2>
        <p>
          Project Sitaare is a one-of-a-kind orphanage and shelter home for girls aged 6 to 18,
          offering more than just shelter—it’s a place where dreams take flight...
        </p>
        <h3>Why Project Sitaare?</h3>
        <ul>
          <li>Full school support, digital literacy, and career guidance</li>
        </ul>
        <h3>Our Vision</h3>
        <p>
          To create a world where every girl has the opportunity to dream, learn, and succeed—regardless of her past.
        </p>
        <h3>Our Mission</h3>
        <p>
          To empower orphaned girls with the tools they need to become strong, independent women who contribute positively to society.
        </p>
        <h3>The Impact We Aim to Create</h3>
        <ul>
          <li>Provide a safe, loving home for 30+ girls</li>
          <li>Ensure 100% education and career readiness</li>
          <li>Equip girls with lifelong skills for financial independence</li>
          <li>Build a support system that fosters self-belief and success</li>
        </ul>
        <h3>Raising Strong Girls, Building Bright Futures</h3>
        <ul>
          <li>More than a shelter – A nurturing home where girls thrive</li>
          <li>Health & well-being – Nutritious meals, medical care, and emotional wellness programs</li>
          <li>Life skills & self-confidence – Leadership training, vocational skills, sports, and self-defense</li>
        </ul>
      </section>

      {/* Support Required Section */}
      <section className="support-section">
        <h2 className="section-title">Be a Part of Their Journey</h2>
        <p>Your support can change lives. Here’s how you can make a difference:</p>

        <h3>Corporate Partnerships (CSR Opportunities)</h3>
        <ul>
          <li>Support infrastructure, skill-building programs, and digital education</li>
          <li>Sponsor academic and extracurricular activities</li>
          <li>Provide internships, mentorship, and career guidance</li>
        </ul>

        <h3>Philanthropic Contributions (Individual Giving)</h3>
        <ul>
          <li>Sponsor a child’s education, healthcare, or personal development</li>
          <li>Fund meals, books, hygiene kits, and clothing</li>
          <li>Support mental health and wellness programs</li>
        </ul>

        <h3>Volunteer with Us</h3>
        <ul>
          <li>Teach, mentor, or train – Be a role model</li>
          <li>Host workshops – Digital skills, self-defense, leadership training</li>
          <li>Engage in activities – Help girls explore arts, sports, and STEM</li>
        </ul>

        <h3>Virtually Adopt a Girl Child</h3>
        <p>With just ₹11,551 / month, you can provide:</p>
        <ul>
          <li>Education & school supplies</li>
          <li>Daily meals & healthcare</li>
          <li>Life skills training & career development</li>
        </ul>
      </section>

      {/* Quick Registration Section */}
      <section className="registration-section">
        <h2 className="section-title">Quick Registration</h2>
        <p>Please fill out this form to get involved with Project Sitaare.</p>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Your Address"
              value={formData.address}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <button type="submit">Submit</button>
          </form>
          {submitted && <p className="confirmation">Thank you! Your details have been submitted.</p>}
        </div>
      </section>

      {/* Expenditure Section */}
      <section className="expenditure-section">
        <h2 className="section-title">Project Expenditure</h2>
        <div className="expenditure-category">
          <h3>Capital Expenditure (CapEx)</h3>
          <p>Total: ₹37,22,500</p>
          <ul>
            <li>House Lease & Legal Fees – ₹5,00,000</li>
            <li>Construction of Shed – ₹2,00,000</li>
            <li>Grid Solar (8kW) – ₹5,00,000</li>
            <li>Smart Room & Computer Lab – ₹4,60,000</li>
            <li>Bed & Mattress (30 Nos) – ₹4,50,000</li>
            <li>Kitchen Setup – ₹2,00,000</li>
            <li>Wardrobes & Storage – ₹1,50,000</li>
            <li>Art, Music & Creative Zone – ₹1,50,000</li>
          </ul>
        </div>

        <div className="expenditure-category">
          <h3>Operational Expenditure (OpEx)</h3>
          <p>Total Annual Cost: ₹1,02,12,000</p>
          <ul>
            <li>Staff Salaries & Benefits – ₹24,60,000</li>
            <li>Food & Nutrition – ₹13,58,000</li>
            <li>Education & Skill Development – ₹10,80,000</li>
            <li>Healthcare & Well-being – ₹7,80,000</li>
            <li>Rent & Utilities – ₹15,60,000</li>
            <li>Technology & Admin – ₹5,40,000</li>
            <li>Legal & Protection – ₹4,44,000</li>
            <li>Recreation & Transport – ₹7,90,000</li>
          </ul>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-section">
        <h2 className="section-title">Contact Us</h2>
        <p><strong>Address:</strong> Bunglow No. 6, Ashapuri Society, Near Jain Temple, Akota, Vadodara, Gujarat – 390007</p>
        <p><strong>Email:</strong> <a href="mailto:info@houseofhumanity.in">info@houseofhumanity.in</a></p>
        <p><strong>Phone:</strong> <a href="tel:+919512951300">+91 95129 51300</a></p>
        <p><strong>Website:</strong> <a href="https://www.sitaare.org" target="_blank" rel="noopener noreferrer">www.Sitaare.org</a></p>
      </section>
    </div>
  );
}
