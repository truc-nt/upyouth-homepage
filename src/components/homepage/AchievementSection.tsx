const AchievementSection = () => {
  const data = [
    { value: "150+", label: "Ecosystem partners" },
    { value: "$4.5M+", label: "Raised combined" },
    { value: "40+", label: "Startups supported" },
    { value: "4,000+", label: "Community members" },
  ];
  return (
    <section className="p-16">
      <div className="bg-primary-blue text-white flex flex-col items-center py-12	px-8 rounded-3xl">
        <div className="w-full flex flex-col items-center justify-center gap-2 md:gap-4">
          <h2 className="text-2xl font-bold md:text-6xl">
            <span className="px-2 leading-loose text-white">
              Our numbers speak
            </span>
          </h2>
          <h6 className="mb-4 text-center text-xs md:mb-8 md:text-2xl">
            UpYouth empowers can-do youth to create real impacts, and we also do
            the same.
          </h6>
          <div className="w-full flex flex-col md:flex-row lg:max-w-7xl md:max-w-md max-w-xs justify-between gap-8 md:gap-0">
            {data.map((item) => (
              <div key={item.label} className="flex-1">
                <div className="flex flex-col items-center justify-center gap-4">
                  <span className="text-4xl font-bold md:text-7xl">
                    {item.value}
                  </span>
                  <p className="text-center text-xs md:text-lg">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;
