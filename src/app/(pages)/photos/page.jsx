import photos from "@/app/data/photos.json";

function Photos() {
  return (
    <div className="py-40">
      <div className="container">
        <div>
          <div className="text-center mb-20">
            <h1 className="text-4xl font-semibold">Photos</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {photos.photos.map((photo) => (
              <div key={photo.id} className="p-2">
                <a
                  href="https://www.pexels.com/@mehmetaliayvaz/"
                  target="_blank"
                >
                  <img
                    src={`${photo.url}?auto=compress&cs=tinysrgb&w=800`}
                    alt={photo.title}
                    className="hover:scale-105 transition-all duration-300"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Photos;
