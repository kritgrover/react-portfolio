import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Blogs.scss";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);
  const [animationState, setAnimationState] = useState({ opacity: 1 });

  const handleClick = (index) => {
    setAnimationState({ x: -15, opacity: 0 });
    setTimeout(() => {
      setCurrentIndex(index);
      setAnimationState({ x: 0, opacity: 1 });
    }, 800);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text" id="blog-head">
        <span>Brain </span>Dump
      </h2>

      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <motion.div
              animate={animationState}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={urlFor(testimonials[currentIndex].imgurl)}
                alt={testimonials[currentIndex].name}
              />
            </motion.div>

            <div className="app__testimonial-content">
              <motion.div
                animate={animationState}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">
                  <a
                    href={testimonials[currentIndex].company}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Link to Full Article
                  </a>
                </h5>
                <p className="p-text">{testimonials[currentIndex].feedback}</p>
              </motion.div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "blogs",
  "app__primarybg"
);
