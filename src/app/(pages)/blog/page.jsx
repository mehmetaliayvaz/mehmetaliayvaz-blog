import data from "@/app/data/blog.json";

function Blog() {
  return (
    <div>
      <div className="container">
        <div className="mt-40 max-w-3xl mx-auto space-y-16">
          {data.articles.reverse().map((article, index) => {
            return (
              <a
                href={article.url}
                key={index}
                target="_blank"
                className="flex space-x-5"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-96 aspect-video object-cover rounded"
                />
                <div>
                  <h2 className="text-xl font-semibold mb-3">
                    {article.title}
                  </h2>
                  <p>{article.description}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Blog;
