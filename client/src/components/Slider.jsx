import { useState, useEffect } from "react";
import styles from "../Styles/Slider.module.css";
import MainNav from "../components/MainNav";
import { Link } from "react-router-dom";

// Import images from assets
import img1 from "../assets/sliderImg/img1.jpg";
import img2 from "../assets/sliderImg/img2.jpg";
import img3 from "../assets/sliderImg/img3.jpg";
import img4 from "../assets/sliderImg/img4.jpg";
import img5 from "../assets/sliderImg/img5.jpg";
import img6 from "../assets/sliderImg/img6.jpg";

const Slider = () => {
  const items = [
    {
      img: img1,
      title: "Articles",
      description:
        "hello ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.",
      path: "/articles",
      nameslider: "Articles"
    },
    {
      img: img2,
      title: "Blogs",
      description:
        "aur ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.",
      path: "/blogs",
      nameslider: "Blogs"
    },
    {
      img: img3,
      title: "Marsrover",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.",
      path: "/marsrover",
      nameslider: "Marsrover"
    },
    {
      img: img4,
      title: "ISROLaunches",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.",
      path: "/isro-launches",
      nameslider: "Isro Launches"
    },
    {
      img: img6,
      title: "Posts",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.",
      path: "/my-posts",
      nameslider: "Posts"
    },
  ];

  const [itemActive, setItemActive] = useState(0);

  const countItem = items.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setItemActive((prevItemActive) => (prevItemActive + 1) % countItem);
    }, 5000);
    return () => clearInterval(interval);
  }, [countItem]);

  const showSlider = (index) => {
    setItemActive(index);
  };

  return (
    <>
      <MainNav />
      <div className={styles.slider}>
        <div className={styles.list}>
          {items.map((item, index) => (
            <div
              key={index}
              className={`${styles.item} ${
                itemActive === index ? styles.active : ""
              }`}
            >
              <img src={item.img} alt={`Slide ${index + 1}`} />
              <div className={styles.content}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <Link to={item.path}>
                  <button className={styles.exploreButton}>Explore</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.arrows}>
          <button
            id="prev"
            onClick={() => showSlider((itemActive - 1 + countItem) % countItem)}
          >
            &lt;
          </button>
          <button
            id="next"
            onClick={() => showSlider((itemActive + 1) % countItem)}
          >
            &gt;
          </button>
        </div>
        <div className={styles.thumbnail}>
          {items.map((item, index) => (
            <div
              key={index}
              className={`${styles.thumbnailItem} ${
                itemActive === index ? styles.active : ""
              }`}
              onClick={() => showSlider(index)}
            >
              <img src={item.img} alt={`Thumbnail ${index + 1}`} />
              <div className={styles.content}>{item.nameslider}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;
