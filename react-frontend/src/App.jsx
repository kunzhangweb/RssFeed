import Axios from "axios";
import { useEffect, useState } from "react";
import Feed from "./Feed";

function App() {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    try {
      const res = await Axios.get("http://localhost:5000");
      setArticles(res.data);
    } catch (error) {
      console.log(error);
    }
  }; // end getArticles

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div>
      <h1 className="text-xl text-center font-semibold mt-6">
        RSS Feed From Tech Crunch
      </h1>
      <hr className="mt-2 mb-4" />
      <div className="w-3/4 max-w-lg border mx-auto p-6 rounded-xl">
        {/* Tech Crunch Logo */}
        <div
          className="bg-orange-50 felx flex-col items-center rounded-lg py-6
        px-4 mb-5"
        >
          <img
            src="
          https://i.piano.io/managedservices/techCrunch/techcrunch-plus-logo--green.svg"
            alt="tech crunch rss feed"
          />
        </div>

        {articles.map((article, i) => (
          <Feed
            key={i}
            title={article.item.title}
            link={article.item.link}
            date={article.item.pubDate}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
