import React from 'react';
import Navbar from '../components/Navbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

function Home() {
  return (
    <>
      <Navbar />
      <div className="px-[100px]">
        {/* Main Banner Slider (Auto Slide Enabled) */}
        <Swiper 
          navigation={true} 
          autoplay={{ delay: 3000, disableOnInteraction: false }} 
          modules={[Navigation, Autoplay]} 
          className="mySwiper"
        >
          <SwiperSlide>
            <img 
              src="https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="swiper-img"
            />
          </SwiperSlide>
          {/* <SwiperSlide>
            <img 
              src="https://i.ytimg.com/vi/KbxB3TDtq7s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDORacs2XqAT9R8p4QYws9t-OqumA"
              className="swiper-img"
            />
          </SwiperSlide> */}
          <SwiperSlide>
            <img 
              src="https://m.media-amazon.com/images/I/71Le5kpaE0L.jpg"
              className="swiper-img"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Kids Section with Auto Slide */}
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
          <SwiperSlide>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX8pHzqkrA92XO1vpQkjXEZBvQwuAVxomO3JUN_UE-yAxT4Shd2-pMSSbGFSQRDNgQdL4n"
              className="w-full h-[200px] object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img 
              src="https://m.media-amazon.com/images/M/MV5BZGYwMjRjOTEtODY1Ni00MjI3LWI1YWMtNDk1YTBkZDE4MDdhXkEyXkFqcGc@._V1_.jpg"
              className="w-full h-[200px] object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTMQzsDllYiBSfMLK4QC9wBb19tPLrtw036dOXErOeTKQl-vdVUEbuPBF7utGwROTlh6Y_"
              className="w-full h-[200px] object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img 
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTh_Fy7HLki8tAxQS1HGfIcf61PPa0MGDuk7pJoLAjrvixizlOjV8dc7f7wn-3gw5aljJSPWKC0AG2AjFR6jBXIpQQADvJlxLBjbfZKfA"
              className="w-full h-[200px] object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img 
              src="https://m.media-amazon.com/images/S/pv-target-images/ca22e2598f60be2efb1884ea2d0fadf1b2d5f9c248fc1a739d54f07fab649d99.jpg"
              className="w-full h-[200px] object-cover rounded-lg"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Actions Section with Auto Slide */}
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
          <SwiperSlide>
            <img 
              src="https://upload.wikimedia.org/wikipedia/en/7/75/Chhaava_film_poster.jpg"
              className="w-full h-[200px] object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img 
              src="https://m.media-amazon.com/images/M/MV5BZTkyMmFiODQtMjc5YS00MzE2LTg4ZDctOTI5MTg5ZTQzZDM2XkEyXkFqcGc@._V1_.jpg"
              className="w-full h-[200px] object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img 
              src="https://m.media-amazon.com/images/M/MV5BMWQ4YWYxYTAtZTlhNC00Nzc3LWE3OWUtZjY5MThlNWNiYTBiXkEyXkFqcGc@._V1_.jpg"
              className="w-full h-[200px] object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img 
              src="https://static.toiimg.com/thumb/msid-72058520,width-400,resizemode-4/72058520.jpg"
              className="w-full h-[200px] object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img 
              src="https://moviesfilmsandflix.com/wp-content/uploads/2023/10/mv5bzwuxztllzgitzjfhys00ndi4ltgwodatyzninzeznjnmmzrkxkeyxkfqcgdeqxvymte0mzqwmjgz._v1_.jpg"
              className="w-full h-[200px] object-cover rounded-lg"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Home;
