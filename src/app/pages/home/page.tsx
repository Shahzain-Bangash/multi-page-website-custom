"use client"

import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="heroSection">
        <div className="heroOverlay"></div>
        <div className="heroContent">
          <h1 className="heroTitle">Welcome to CarHub</h1>
          <p className="h">Discover your dream car with us</p>
          <button className="browseButton">
            Browse Cars
          </button>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="feature">
        <h2 className="sectionTitle">Featured Models</h2>
        <div className="carGrid">
          {/* Car Card 1 */}
          <div className="carCard">
            <div className="imageContainer">
              <Image 
                src="/orange-lamborghini.jpg"
                alt="Luxury Sports Car"
                fill
                className="object-cover"
              />
            </div>
            <div className="cardContent">
              <h3 className="cardTitle">Luxury Sports</h3>
              <p className="cardText">Experience unmatched performance and style</p>
              <button className="learnButton">
                Learn More
              </button>
            </div>
          </div>

          {/* Car Card 2 */}
          <div className="carCard">
            <div className="imageContainer">
              <Image 
                src="/range-rover.jpg"
                alt="Premium SUV"
                fill
                className="object-cover"
              />
            </div>
            <div className="cardContent">
              <h3 className="cardTitle">Premium SUVs</h3>
              <p className="cardText">Comfort meets capability</p>
              <button className="learnButton">
                Learn More
              </button>
            </div>
          </div>

          {/* Car Ca" */}
          <div className="carCard">
            <div className="imageContainer">
              <Image 
                src="/wrangler.webp"
                alt="Off-road Vehicle"
                fill
                className="object-cover"
              />
            </div>
            <div className="cardContent">
              <h3 className="cardTitle">Off-road Kings</h3>
              <p className="cardText">Built for adventure</p>
              <button className="learnButton">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}