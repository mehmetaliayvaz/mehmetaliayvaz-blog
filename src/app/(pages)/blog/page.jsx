import data from "@/app/data/blog.json";
import AppLayout from "@/app/layouts/AppLayout";

function Blog() {
  return (
    <AppLayout
      title="Blog"
      description="I like to share the information I have experienced over time with people. You can reach some of the articles I have written below."
    >
      <div className="max-w-3xl mx-auto space-y-16">
        {data.articles.reverse().map((article, index) => {
          return (
            <a
              href={article.url}
              key={index}
              target="_blank"
              className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-96 aspect-video object-cover rounded"
              />
              <div>
                <h2 className="text-xl font-semibold mb-3">{article.title}</h2>
                <p>{article.description}</p>
              </div>
            </a>
          );
        })}
      </div>
    </AppLayout>
  );
}

export default Blog;
