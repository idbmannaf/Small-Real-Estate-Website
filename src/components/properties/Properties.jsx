import Property from "./Property";

const Properties = () => {
  const properties = [
    {
      id: 1,
      title: "Beautiful Villa in NY ",
      price: "450,000",
      image:
        "https://photos.zillowstatic.com/fp/fc823bf3ceb476088557605b63d2ad39-cc_ft_960.webp",
      bed: 3,
      bath: 2,
    },
    {
      id: 2,
      title: "83 Hessinger Lare Road",
      price: "259,000",
      image:
        "https://photos.zillowstatic.com/fp/c1561bf5d7b5d961f29fc01695f29ca8-cc_ft_960.webp",
      bed: 5,
      bath: 8,
    },
    {
      id: 3,
      title: "4088 State Route 52",
      price: "310,000",
      image:
        "https://photos.zillowstatic.com/fp/5ef2004d2c625579161aba3192855995-cc_ft_960.webp",
      bed: 3,
      bath: 2,
    },
    {
      id: 4,
      title: "90 Hubert Rd",
      price: "420,000",
      image:
        "https://photos.zillowstatic.com/fp/5733d701ebf6bf89a952bbf21147cd4c-cc_ft_960.webp",
      bed: 2,
      bath: 2,
    },
    {
      id: 5,
      title: "404 Hemmer Road",
      price: "279,000",
      image:
        "https://photos.zillowstatic.com/fp/46a5bb6d294c12ca749d89ec9f3412d3-cc_ft_960.webp",
      bed: 3,
      bath: 1,
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
          <span className="mb-2 block text-lg font-semibold text-primary">
            Properties
          </span>
          <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
            Grab your Dream Property
          </h2>
          <p className="text-base text-body-color dark:text-dark-6">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <Property key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
