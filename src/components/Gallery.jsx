import { useState } from "react";
const tabs = ["All", "Foundation period", "Sports Culture", "Projects phase"];

const galleryItems = [
  { src: "src/assets/image9.png", category: "Sports Culture" },
  { src: "src/assets/image10.png", category: "Foundation period" },
  { src: "src/assets/image11.png", category: "Projects phase" },
];

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems =
    activeTab === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab);

  return (
    <section className="gallery-section">
      <p className="gallery-subtitle">Gallery</p>
      <h2 className="gallery-title">The Gym College Students Lifestyle</h2>

      <div className="gallery-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="gallery-images">
        {filteredItems.map((item, index) => (
          <div key={index} className="gallery-card">
            <img src={item.src} alt={item.label} />
            <div className="gallery-label">{item.label}</div>
          </div>
        ))}
      </div>

      <div className="more-link">
        <a href="#">More pictures &gt;</a>
      </div>
    </section>
  );
};

export default GallerySection;
