"use client";
import { IoMdSearch } from "react-icons/io";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/zoom";
import Modal from "../Modal";
import Image from "next/image";
import { CalendarWidget } from "../CalendarWidget";
import { Button } from "../ui/button";
import { register } from "swiper/element/bundle";
register();
import { Pagination, Navigation, Zoom } from "swiper/modules";
import Footer from "../Footer";
import "/app/css/paginationhorizontal.css";
import "/app/css/navigationhorizontal.css";
import Link from "next/link";

const SliderHabSmall = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage("");
    setModalOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="overflow-y-auto">
      <div className="relative w-full h-screen">
        <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
        <Image
          src="/images/habitacionSmall/smallPrincipal.webp"
          alt="Piscina Image"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="items-center justify-center mb-20 text-center flex flex-col gap-3 text-white z-20 absolute inset-0">
          <span className="p-light-16 md:w-1/2 lg:w-2/3 xl:w-2/4 lg:text-center lg:float-center">
            HOTEL HEISS MEDELLÍN
          </span>
          <h2 className="h3">ESTÁNDAR</h2>
          <div className="mt-5">
            <CalendarWidget />
          </div>
        </div>
      </div>
      {/* carrousel 1 */}
      <div className="text-white h-3/4 text-center md:flex items-center w-full hidden md:visible">
        <Swiper
          className="w-full"
          navigation={true}
          cssMode={true}
          loop={true}
          pagination={{
            clickable: true,
            bulletActiveClass: "swiper-pagination-bullet-active",
            bulletClass: "swiper-pagination-bullet",
            modifierClass: "swiper-pagination-horizontal",
          }}
          modules={[Navigation, Pagination]}
        >
          <SwiperSlide style={{ height: "35rem" }}>
            <Image
              src="/images/habitacionSmall/smallcarrousel.webp"
              alt="Piscina Image"
              layout="fill"
              objectFit="cover"
              objectPosition="bottom"
            />
          </SwiperSlide>
          <SwiperSlide style={{ height: "35rem" }}>
            <Image
              src="/images/habitacionSmall/smallcarrousel2.webp"
              alt="Piscina Image"
              layout="fill"
              objectFit="cover"
              objectPosition="bottom"
            />
          </SwiperSlide>
          <SwiperSlide style={{ height: "35rem" }}>
            <Image
              src="/images/habitacionSmall/smallcarrousel3.webp"
              alt="Piscina Image"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* carrousel 2 */}
      <div className="text-white text-center flex items-center flex-col-reverse md:flex-row w-full">
        <Swiper
          className="md:w-[55%] w-full h-[50vh] md:h-screen"
          navigation={true}
          zoom={true}
          loop={true}
          modules={[Navigation, Zoom]}
        >
          <IoMdSearch className="absolute bottom-44 hidden sm:block  md:bottom-10 md:left-[12rem] lg:left-[16rem] xl:left-[25rem] z-50 text-[40px] opacity-9" />
          <SwiperSlide>
            <Image
              src="/images/habitacionSmall/smalldetalles.webp"
              alt="Piscina Image"
              layout="fill"
              objectFit="cover"
              priority
              onClick={() =>
                openModal("/images/habitacionSmall/smalldetalles.webp")
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/habitacionSmall/smalldetalles2.webp"
              alt="Piscina Image"
              layout="fill"
              objectFit="cover"
              priority
              onClick={() =>
                openModal("/images/habitacionSmall/smalldetalles2.webp")
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/habitacionSmall/smalldetalles3.webp"
              alt="Piscina Image"
              layout="fill"
              objectFit="cover"
              priority
              onClick={() =>
                openModal("/images/habitacionSmall/smalldetalles3.webp")
              }
            />
          </SwiperSlide>
          {isMobile && (
            <>
              <SwiperSlide>
                <Image
                  src="/images/habitacionSmall/smallcarrousel.webp"
                  alt="Piscina Image"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="bottom"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/habitacionSmall/smallcarrousel2.webp"
                  alt="Piscina Image"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/habitacionSmall/smallcarrousel3.webp"
                  alt="Piscina Image"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="bottom"
                />
              </SwiperSlide>
            </>
          )}
        </Swiper>
        {modalOpen && (
          <Modal onClose={closeModal}>
            <Swiper
              className="w-full h-full flex flex-col md:flex-row"
              navigation={true}
              zoom={true}
              loop={true}
              pagination={{
                type: "fraction",
              }}
              style={{
                "--swiper-navigation-size": "20px",
                "--swiper-navigation-weight": "500px",
              }}
              modules={[Navigation, Zoom, Pagination]}
            >
              {" "}
              <SwiperSlide>
                <Image
                  src="/images/habitacionSmall/smalldetalles.webp"
                  alt="Piscina Image"
                  layout="fill"
                  objectFit="cover"
                  priority
                  onClick={() =>
                    openModal("/images/habitacionSmall/smalldetalles.webp")
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/habitacionSmall/smalldetalles2.webp"
                  alt="Piscina Image"
                  layout="fill"
                  objectFit="cover"
                  priority
                  onClick={() =>
                    openModal("/images/habitacionSmall/smalldetalles2.webp")
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/habitacionSmall/smalldetalles3.webp"
                  alt="Piscina Image"
                  layout="fill"
                  objectFit="cover"
                  priority
                  onClick={() =>
                    openModal("/images/habitacionSmall/smalldetalles3.webp")
                  }
                />
              </SwiperSlide>
            </Swiper>
          </Modal>
        )}
        <div className="flex flex-col w-3/4 md:w-[45%] gap-10 h-full py-10 lg:pr-20 items-start justify-start md:p-10 md:items-end md:justify-end md:text-right text-left">
          <div className="">
            <h2 className="h5 py-8">ESTÁNDAR</h2>
            <p className="p-light-16 md:pl-12">
              Bienvenido a nuestra acogedora <b>Habitación Estándar</b> de 20
              metros cuadrados, diseñada para ofrecer confort y funcionalidad.
              Ideal para viajeros que buscan una estancia cómoda y conveniente.
              Aunque esta habitación no cuenta con balcón, su diseño inteligente
              y acogedor garantiza una estancia placentera y relajante. <br />
              ¡Reserva ahora y disfruta de una experiencia cómoda y práctica en
              nuestra Habitación Estándar! Está habitación cuenta con:
            </p>
          </div>
          {/* ICONOS */}

          <div className="flex gap-5 md:gap-6 lg:gap-8 xl:gap-10 justify-end">
            <Image
              src="/icons/camas.svg"
              alt="Camas Queen"
              width={40}
              height={29.1}
              className="w-[30px] lg:w-[50px]"
            />
            <Image
              src="/icons/wifi.svg"
              alt="Wifi"
              width={40}
              height={29.1}
              className="w-[30px] lg:w-[50px]"
            />

            <Image
              src="/icons/armario.svg"
              alt="Armario"
              width={40}
              height={29.1}
              className="w-[30px] lg:w-[50px]"
            />

            <Image
              src="/icons/ducha.svg"
              alt="Ducha"
              width={40}
              height={25}
              className="w-[27px] lg:w-[40px]"
            />
          </div>
          <Button as child>
            <Link
              href="https://hotels.cloudbeds.com/es/reservation/lLxxdq"
              target="_blank"
            >
              BOOK NOW
            </Link>
          </Button>
        </div>
      </div>

      {/* Otras habitaciones */}
      <div className="relative flex w-full h-[50vh] mx-auto">
        <div className="w-1/3 h-full relative ">
          <Link href="/habitaciones/habitacionSmall">
            <div className="absolute inset-0 bg-black opacity-80 z-10">
              <Image
                src="/images/habitacionSmall/smallCarrousel.webp"
                layout="fill"
                objectFit="cover"
                alt="Habitación Estándar"
                className="absolute"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <Button variant="destructive" size="lg">
                ESTÁNDAR
              </Button>
            </div>
          </Link>
        </div>
        <div className="w-1/3 h-full relative shadow-2xl shadow-black">
          <Link href="/habitaciones/habitacionLarge">
            <div className="absolute inset-0 bg-black opacity-80 z-10">
              <Image
                src="/images/habitacionLargeCard.webp"
                layout="fill"
                objectFit="cover"
                alt="Habitación Suite"
                className="absolute"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <Button variant="destructive" size="lg">
                SUITE
              </Button>
            </div>
          </Link>
        </div>
        <div className="w-1/3 h-full relative">
          <Link
            href="/habitaciones/habitacionMedium
          "
          >
            <div className="absolute inset-0 bg-black opacity-80 z-10">
              <Image
                src="/images/habitacionMedium/mediumcarrousel2.webp"
                layout="fill"
                objectFit="cover"
                alt="Habitación Superior"
                className="absolute"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <Button variant="destructive" size="lg">
                SUPERIOR
              </Button>
            </div>
          </Link>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default SliderHabSmall;
