import React, { useEffect, useState } from "react";
import Globe from "react-globe.gl";

const FinanceNews = () => {
  const [news, setNews] = useState([]);
  const [globeData, setGlobeData] = useState([]);

  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?category=business&apiKey=6234c5d2d2db4e6d99fd237671d7bdf4")
      .then((response) => response.json())
      .then((data) => {
        const articles = data.articles.map((article, index) => ({
          id: index,
          title: article.title,
          description: article.description,
          source: article.source.name,
          url: article.url,
          lat: Math.random() * 180 - 90, // Placeholder, real lat/lon needed
          lng: Math.random() * 360 - 180,
        }));
        setNews(articles);
        setGlobeData(articles);
      });
  }, []);

  return (
    <div>
      <h1>Finance News</h1>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, overflowY: "scroll", height: "80vh" }}>
          {news.map((article) => (
            <div key={article.id} style={{ marginBottom: "10px" }}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
              <hr />
            </div>
          ))}
        </div>
        <div style={{ flex: 1 }}>
          <Globe
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
            labelsData={globeData}
            labelLat={(d) => d.lat}
            labelLng={(d) => d.lng}
            labelText={(d) => d.title}
            labelSize={() => 1.5}
          />
        </div>
      </div>
    </div>
  );
};

export default FinanceNews;
