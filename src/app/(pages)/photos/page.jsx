import photos from "@/app/data/photos.json";
import AppLayout from "@/app/layouts/AppLayout";

function Photos() {
  return (
    <AppLayout
      title="Photos"
      description="In addition to coding, I am interested in photography. You can view some of my photos below. You can also follow my Pexels account where I share my photos."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {photos.photos.map((photo) => (
          <div key={photo.id} className="p-2">
            <a href="https://www.pexels.com/@mehmetaliayvaz/" target="_blank">
              <img
                src={`${photo.url}?auto=compress&cs=tinysrgb&w=800`}
                alt={photo.title}
                className="hover:scale-105 transition-all duration-300"
              />
            </a>
          </div>
        ))}
      </div>
    </AppLayout>
  );
}

export default Photos;
