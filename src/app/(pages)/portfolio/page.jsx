import portfolio from "@/app/data/portfolio.json";
import AppLayout from "@/app/layouts/AppLayout";

function Portfolio() {
  return (
    <AppLayout
      title="Portfolio"
      description="I like to produce projects that people will benefit from. I develop libraries and projects for this."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {portfolio.portfolio.map((item, index) => (
          <a href={item.url} key={index} target="_blank">
            <div
              className="rounded-lg bg-cover bg-center aspect-video"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div className="bg-gradient-to-l to-black/70 from-black/40 p-10 h-full rounded-lg">
                <h2 className="text-2xl font-bold mb-5">{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </AppLayout>
  );
}

export default Portfolio;
