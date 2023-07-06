function AppLayout({ title, description, children }) {
  return (
    <div className="py-20 md:py-40">
      <div className="container">
        <div>
          <div className="text-center mb-20">
            <h1 className="text-4xl font-semibold mb-5">{title}</h1>
            <p>{description}</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
