import { useEffect, useState } from "react";

const slides = [
  {
    image: "slide-4.jpg",
    imageAlt: "Woman celebrating business success",
    title: "Welcome to",
    emphasis: "Our Company",
    actions: [
      { label: "Services", href: "#services" },
      { label: "Read More", href: "#offer" },
    ],
  },
  {
    image: "slide-5.jpg",
    imageAlt: "Business colleagues in discussion",
    title: "Business",
    emphasis: "YOUR SATISFACTION",
    actions: [
      { label: "Login", href: "#offer" },
      { label: "Register", href: "#offer" },
    ],
  },
];

const getNextSlide = (currentSlide, direction) =>
  (currentSlide + direction + slides.length) % slides.length;

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slide = slides[activeSlide];

  useEffect(() => {
    if (
      isPaused ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return undefined;
    }

    const timerId = window.setInterval(() => {
      setActiveSlide((currentSlide) => getNextSlide(currentSlide, 1));
    }, 7000);

    return () => window.clearInterval(timerId);
  }, [isPaused]);

  function changeSlide(direction) {
    setActiveSlide((currentSlide) => getNextSlide(currentSlide, direction));
  }

  function handleBlur(event) {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsPaused(false);
    }
  }

  function handleKeyDown(event) {
    if (event.key === "ArrowLeft") changeSlide(-1);
    if (event.key === "ArrowRight") changeSlide(1);
  }

  return (
    <section
      id="home"
      aria-label="Alteco introduction"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    >
      <div id="carousel-example-generic" className="carousel slide">
        <div className="carousel-inner">
          <div className="item active">
            <img src={`/images/bg/${slide.image}`} alt={slide.imageAlt} />
            <div className="header-text">
              <div className="col-md-12">
                <h1>
                  <span>
                    {slide.title} <strong>{slide.emphasis}</strong>
                  </span>
                </h1>
                <br />
                <p className="hero-subtitle">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </p>
                <br />
                <div>
                  {slide.actions.map(({ label, href }) => (
                    <a
                      key={label}
                      className="btn btn-theme btn-sm btn-min-block hidden-xs"
                      href={href}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-indicators">
          {slides.map((item, index) => (
            <button
              key={item.image}
              type="button"
              className={index === activeSlide ? "active" : ""}
              aria-label={`Show slide ${index + 1}`}
              aria-pressed={index === activeSlide}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
        <button
          type="button"
          className="left carousel-control"
          aria-label="Previous slide"
          onClick={() => changeSlide(-1)}
        >
          <span className="glyphicon glyphicon-chevron-left" />
        </button>
        <button
          type="button"
          className="right carousel-control"
          aria-label="Next slide"
          onClick={() => changeSlide(1)}
        >
          <span className="glyphicon glyphicon-chevron-right" />
        </button>
      </div>
    </section>
  );
}
