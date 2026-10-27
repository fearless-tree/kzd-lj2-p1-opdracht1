const offers = [
  { title: "Clean Modern Code", icon: "animal-horse-head-alt-2" },
  { title: "Design To Brag About", icon: "animal-bear" },
];
export default function Offers() {
  return (
    <section id="offer" className="space">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-md-offset-6 offer-base">
            <div className="row card-row">
              <div className="main-heading col-sm-12">
                <p className="eyebrow">elaborated code and creative design</p>
                <h2>
                  What We <span>offers</span>
                </h2>
                <p>
                  Duis sed odio sit amet nibh vulputate cursus a sit amet mauris
                  ipsuy veli. Nam nec tellus a odio tincidunt auctor
                </p>
              </div>
            </div>
            <div className="offer-block col-sm-12 no-padding">
              <div className="row card-row">
                {offers.map((offer) => (
                  <article className="col-sm-6 offer-item" key={offer.title}>
                    <i
                      className={`icofont icofont-${offer.icon}`}
                      aria-hidden="true"
                    />
                    <h3>
                      <a href="#services">{offer.title}</a>
                    </h3>
                    <p>
                      Phasellus enim libero, blandit vel sapien vitae,
                      condimentum ultricies magna et. Quisque lobortis...
                    </p>
                    <a href="#services" className="more">
                      read more{" "}
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                    </a>
                  </article>
                ))}
              </div>
            </div>
            <div className="col-sm-12 button">
              <a href="#services" className="btn black-border">
                View All Offers
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
