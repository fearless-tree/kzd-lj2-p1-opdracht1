const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod dolore tempor incididunt ut labore.";
const other = "Non numquam eius modi tempora incidu nt ut labore et dolore magnam aliquam quaerat voluptatem minima.";

const services = [
  { title: "Promotion Agency", icon: "sof-drinks", description: lorem },
  { title: "Constructions Building", icon: "wrench", description: other },
  { title: "Education Online", icon: "education", description: lorem },
  { title: "Fashion Design", icon: "brand-designbump", description: other },
];

export default function Services() {
  return (
    <section id="services" className="service space">
      <div className="container">
        <div className="main-heading col-sm-12 text-center">
          <p className="eyebrow">elaborated code and creative design</p>
          <h2>
            Our <span>Services</span>
          </h2>
          <div className="dot" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <p>
            Non numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          </p>
        </div>
        <div className="row">
          <div className="col-sm-12 service-block no-padding">
            <div className="row card-row">
              {services.map((service) => (
                <article
                  className="col-sm-3 service-item text-center"
                  key={service.title}
                >
                  <div className="icon radius-2x">
                    <i
                      className={`icofont icofont-${service.icon}`}
                      aria-hidden="true"
                    />
                  </div>
                  <p className="eyebrow">Tutorials To Help</p>
                  <h3>
                    <a href="#services">{service.title}</a>
                  </h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
