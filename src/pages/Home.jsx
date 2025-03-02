import React from "react";
import Navbar from "../components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";


const styles = `
  .image-container {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
  }
  .swiper-img {
    transition: transform 0.3s ease;
    width: 2000px;
    height: 600px;
    object-fit: cover;
  }
  .image-container:hover .swiper-img {
    transform: scale(1.1);
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .image-container:hover .overlay {
    opacity: 1;
  }
`;

function Home() {
  
  const mainBannerData = [
    {
      imageUrl: "https://wallpaperaccess.com/full/6366.jpg",
      name: "Movie 1"
    },
    {
      imageUrl: "https://wallpaperaccess.com/full/329583.jpg",
      name: "Movie  2"
    },

    {
      imageUrl: "https://wallpaperaccess.com/full/329608.jpg",
      name: "Movie  3"
    }

    
  ];

 
  const kidsData = [
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX8pHzqkrA92XO1vpQkjXEZBvQwuAVxomO3JUN_UE-yAxT4Shd2-pMSSbGFSQRDNgQdL4n",
      name: "Kids Movie 1"
    },
    {
      imageUrl: "https://m.media-amazon.com/images/M/MV5BZGYwMjRjOTEtODY1Ni00MjI3LWI1YWMtNDk1YTBkZDE4MDdhXkEyXkFqcGc@._V1_.jpg",
      name: "Kids Movie 2"
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTMQzsDllYiBSfMLK4QC9wBb19tPLrtw036dOXErOeTKQl-vdVUEbuPBF7utGwROTlh6Y_",
      name: "Kids Movie 3"
    },
    {
      imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTh_Fy7HLki8tAxQS1HGfIcf61PPa0MGDuk7pJoLAjrvixizlOjV8dc7f7wn-3gw5aljJSPWKC0AG2AjFR6jBXIpQQADvJlxLBjbfZKfA",
      name: "Kids Movie 4"
    },
    {
      imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/ca22e2598f60be2efb1884ea2d0fadf1b2d5f9c248fc1a739d54f07fab649d99.jpg",
      name: "Kids Movie 5"
    }
  ];

 
  const actionsData = [
    {
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/75/Chhaava_film_poster.jpg",
      name: "Action Movie 1"
    },
    {
      imageUrl: "https://m.media-amazon.com/images/M/MV5BZTkyMmFiODQtMjc5YS00MzE2LTg4ZDctOTI5MTg5ZTQzZDM2XkEyXkFqcGc@._V1_.jpg",
      name: "Action Movie 2"
    },
    {
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMWQ4YWYxYTAtZTlhNC00Nzc3LWE3OWUtZjY5MThlNWNiYTBiXkEyXkFqcGc@._V1_.jpg",
      name: "Action Movie 3"
    },
    {
      imageUrl: "https://static.toiimg.com/thumb/msid-72058520,width-400,resizemode-4/72058520.jpg",
      name: "Action Movie 4"
    },
    {
      imageUrl: "https://moviesfilmsandflix.com/wp-content/uploads/2023/10/mv5bzwuxztllzgitzjfhys00ndi4ltgwodatyzninzeznjnmmzrkxkeyxkfqcgdeqxvymte0mzqwmjgz._v1_.jpg",
      name: "Action Movie 5"
    }
  ];

  
  const webseriesData = [
    {
      imageUrl: "https://qqcdnpictest.mxplay.com/pic/5a5d9d6ff37416ee75783f81daa2bee9/en/2x3/480x720/test_pic1736832811004_badged_1736917211954.webp",
      name: "Webseries 1"
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Dj4hp5QW1zuxLXXZlKI9yKur5_UwY7WgdQ&s",
      name: "Webseries 2"
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzkEZLRdLjGEUKyElOKOMfqaWo3QXVvCmcjg&s",
      name: "Webseries 3"
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCT8H7Uh0SENh-hVCYMfdywNOy3Pq_SLbA0A&s",
      name: "Webseries 4"
    },
    {
      imageUrl: "https://akamaividz2.zee5.com/image/upload/w_336,h_504,c_scale,f_webp,q_auto:eco/resources/0-6-4z5371966/portrait/gyaarahgyaarahpf1920x77030072024d39a745a7c6c4d8aa69c50b16f310923.jpg",
      name: "Webseries 5"
    }
  ];

  return (
    <>
      <style>{styles}</style>
      <Navbar />
      <div className="px-[100px]">
       
        <Swiper
          navigation={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {mainBannerData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="image-container">
                <img
                  src={item.imageUrl}
                  className="swiper-img"
                  alt={item.name}
                />
                <div className="overlay">{item.name}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      
      <div className="px-[100px] mt-10">
        <h3 className="text-2xl font-bold text-white mb-4">Kids</h3>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {kidsData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="image-container">
                <img
                  src={item.imageUrl}
                  className="w-full h-[200px] object-cover rounded-lg"
                  alt={item.name}
                />
                <div className="overlay">{item.name}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      
      <div className="px-[100px] mt-10">
        <h3 className="text-2xl font-bold text-white mb-4">Actions</h3>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {actionsData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="image-container">
                <img
                  src={item.imageUrl}
                  className="w-full h-[200px] object-cover rounded-lg"
                  alt={item.name}
                />
                <div className="overlay">{item.name}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      
      <div className="px-[100px] mt-10">
        <h3 className="text-2xl font-bold text-white mb-4">Webseries</h3>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {webseriesData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="image-container">
                <img
                  src={item.imageUrl}
                  className="w-full h-[200px] object-cover rounded-lg"
                  alt={item.name}
                />
                <div className="overlay">{item.name}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <br />
      <footer>
    <div class="footer-content">
        {/* About Us Section */}
        <div class="footer-section about">
            <h3>About Us</h3>
            <p>Welcome to Movie Website, your ultimate destination for the latest movies, TV shows, and entertainment news. We bring you the best in cinema, from blockbusters to indie gems.</p>
        </div>

        {/* Quick Links Section */}
        <div class="footer-section links">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">TV Shows</a></li>
                <li><a href="#">Trending</a></li>
                <li><a href="#">Upcoming</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>

        {/* Newsletter Section */}
        <div class="footer-section newsletter">
            <h3>Subscribe to Our Newsletter</h3>
            <p>Get the latest updates on movies, TV shows, and exclusive offers straight to your inbox.</p>
            <form action="#" method="post">
                <input type="email" name="email" placeholder="Enter your email" required />
                <button type="submit">Subscribe</button>
            </form>
        </div>

      
        <div class="footer-section social">
            <h3>Follow Us</h3>
            <div class="social-media">
                <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
    </div>

    <div class="footer-bottom">
        <p>&copy; 2025 Movie Website. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
    </div>
</footer>





    </>
  );
}

export default Home;