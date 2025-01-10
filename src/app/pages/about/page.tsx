export default function About() {
  return (
    <div className="page about-page">
      <h1>About CarHub</h1>
      
      <section className="about-content">
        <div className="about-text">
          <h2>Our Story</h2>
          <p className="para">
            Founded in 2020, CarHub has become a leading destination for car enthusiasts 
            and buyers looking for their perfect vehicle. We pride ourselves on offering 
            a curated selection of premium vehicles and exceptional customer service.
          </p>
        </div>

        <div className="about-features">
          <div className="feature">
            <h3>Expert Team</h3>
            <p>Our team of automotive experts is here to guide you through your car buying journey.</p>
          </div>
          
          <div className="feature">
            <h3>Quality Assurance</h3>
            <p>Every vehicle in our inventory undergoes rigorous inspection and certification.</p>
          </div>
          
          <div className="feature">
            <h3>Customer First</h3>
            <p>We prioritize customer satisfaction and provide comprehensive after-sales support.</p>
          </div>
        </div>
      </section>
    </div>
  );
}