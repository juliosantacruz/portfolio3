import React from "react";
import CardProjects from "./CardProjects";
import projects from "../mocks/ProjectsMocks";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

type CardData = {
  id: string;
  type: string;
  title: string;
  url: string;
  stack: [];
  imgProject: string;
  language: string;
};

export default function Sliders({type }: any) {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        slidesPerView={2.3}
        
      >
        {projects.map((element: any) => {
          if (element.type === type) {
            return (
              <SwiperSlide key={element.id} >
                <CardProjects data={element} />
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </div>
  );
}
