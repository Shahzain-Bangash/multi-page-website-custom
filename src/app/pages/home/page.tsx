"use client"

import Image from "next/image";

export default function Home() {
  return (
    <div className="page home-page">
      <section className="hero">
        <h1>Welcome to CarHub</h1>
        <p>Discover your dream car with us</p>
        <button className="cta-button">Browse Cars</button>
      </section>

      <section className="featured-cars">
        <h2>Featured Models</h2>
        <div className="car-grid">
          <div className="car-card">
            <Image 
              src="/orange-lamborghini.jpg" 
              alt="Luxury Sports Car" 
              width={400} 
              height={300} 
              className="car-image"
            />
            <div className="des">
            <h3>Luxury Sports</h3>
            <p className="des">Experience unmatched performance and style</p>
            </div>
            <button className="secondary-button bttn">Learn More</button>
          </div>

          <div className="car-card">
            <Image 
              src="/range-rover.jpg" 
              alt="Premium SUV" 
              width={400} 
              height={400} 
              className="car-image car-image2"
            />
            <div className="des">
            <h3>Premium SUVs</h3>
            <p className="">Comfort meets capability</p>
            </div>
            <button className="secondary-button bttn">Learn More</button>
          </div>

          <div className="car-card">
            <Image 
              src="/wrangler.webp" 
              alt="Off-road Vehicle" 
              width={400} 
              height={300} 
              className="car-image"
            />
            <div className="des">
            <h3>Off-road Kings</h3>
            <p className="">Built for adventure</p>
            </div>
            <button className="secondary-button bttn">Learn More</button>
          </div>
        </div>
      </section>
    </div>
  );
}