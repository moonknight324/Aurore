import { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
// import UserContext from "../../components/UserContext";
import styles from "../../Styles/UserPost.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function UserPosts() {
  const [data, setData] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  const [filteredUser, setFilteredUser] = useState("All");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUserDetails(JSON.parse(loggedInUser));
    }
  }, []);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const res = await axios.get("https://aurore-latest.onrender.com/posts/getdata", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === 200) {
        setData(res.data);
      } else {
        alert("Error");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      alert("Error fetching user data");
    }
  };

  const handleDelete = async (postId) => {
    try {
      await axios.delete(`https://aurore-latest.onrender.com/posts/delete/${postId}`);
      getUserData();
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Error deleting post");
    }
  };

  const renderImages = (post) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };

    return (
      <Slider {...settings} className={styles.imageCarousel}>
        {post.imgpath.map((img, index) => (
          <div key={index}>
            <img src={img} alt={post.name} className={styles.image} />
          </div>
        ))}
      </Slider>
    );
  };

  const handleChange = (e) => {
    setFilteredUser(e.target.value);
  };

  const filteredPosts = data.filter((post) => {
    if (filteredUser === "All") {
      return true;
    } else {
      return post.email === userDetails.email;
    }
  });

  return (
    <div>
      <div className={styles.userPostsContainer}>
        <div className={styles.leftPart}>
          <select onChange={handleChange} className={styles.filterBtn}>
            <option value="All">All</option>
            <option value="user">User</option>
          </select>
          {/* Placeholder for slider or navigation controls */}
        </div>
        <div className={styles.rightPart}>
          {filteredPosts.map((post) => (
            <div key={post._id} className={styles.postCard}>
              <div className={styles.maindiv}>
                <div className={styles.leftdiv}>
                  <div className={styles.imageBox}>{renderImages(post)}</div>
                </div>
                <div className={styles.rightdiv}>
                  <div className={styles.title}>
                    <h2>{post.name}</h2>
                    <h2>{post.caption}</h2>
                  </div>
                  <div className="desc">
                    <h2>{post.description}</h2>
                  </div>
                  <button
                    onClick={() => handleDelete(post._id)}
                    className={styles.deleteBtn}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

export default UserPosts;
