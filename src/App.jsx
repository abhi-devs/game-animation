import React, { useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'


function App() {

  let [showContent, setShowContent] = useState(false)


  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "power4.inOut",
      transformOrigin: "50% 50%",
    })
    tl.to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "expo.inOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() > 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      }
    })
  })

  useGSAP(() => {

   
    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.5}%`,
      })
      gsap.to(".sky", {
        x: xMove,
      })
      gsap.to(".bg", {
        x: xMove * 1.8,
      })
      gsap.to(".ps5", {
        x: xMove * 1.8,
      })
    })
  }, [showContent]);


  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-[100vh]  overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="vimask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#vimask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full overflow-hidden">
          <div className="landing w-full h-screen bg-black ">
            <div className="Navbar absolute top-0 left-0 py-10 px-10 w-full z-[10] ">
              <div className="logo flex gap-6">
                <div className="lines flex flex-col gap-2">
                  <div className="line w-10 h-1 bg-white"></div>
                  <div className="line w-8 h-1 bg-white"></div>
                  <div className="line w-5 h-1 bg-white"></div>
                </div>
                <h3 className="logo text-2xl items-center leading-none">Rockstar</h3>
              </div>
            </div>

            <div className="imagediv relative overflow-hidden w-full h-screen">
              <img className=" sky scale-[1.2] absolute top-0 left-0 w-full h-full object-cover" src="./sky.png" alt="" />
              <img className="bg scale-[1.2] absolute top-0 left-0 w-full h-full object-cover" src="./bg.png" alt="bg-cover" />
              <div className="text  text-white flex flex-col absolute top-0 left-1/2 -translate-x-3">
                <h1 className="text-[6rem] -ml-70">grand</h1>
                <h1 className="text-[6rem] -ml-[-10]">theft</h1>
                <h1 className="text-[6rem] -ml-100">auto</h1>
              </div>
              <img className="character absolute -bottom-[40%]  left-1/2 -translate-x-1/2 scale-[1.1]" src="./girlbg.png" alt="" />

            </div>
            <div className="btmbar absolute bottom-0 left-0 w-full py-22 px-22 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-4xl ri-arrow-down-line"></i>
                <h3 className="scroll text-xl font-[Helvetica_Now-Display]">Scroll down</h3>
              </div>
              <img className="ps5 scale-[1.2] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="./ps5.png" alt="" />
            </div>
          </div>
          <div className="w-full h-screen flex px-10 items-center justify-center bg-black">
            <div className="cntnr flex text-white  w-full h-[80%]">
              <div className="limg w-1/2 relative h-full ">
                <img className="absolute top-1/2  left-1/2 scale-[1.3] -translate-x-1/2 -translate-y-1/2 " src="./imag.png" alt="" />
              </div>
            </div>
            <div className="rg w-[30%]">
              <h1 className='text-xl'></h1>
              <h1 className="text-xl"></h1>
              <p className="mt-10 font-[helvetica_Now_Display]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati perspiciatis delectus, soluta quis facere libero vel porro repellat explicabo ut commodi beatae magnam at similique distinctio provident sunt? Esse, ea!
              </p>
              <p className="mt-10 text-xl font-[helvetica_Now_Display]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iste eveniet eligendi, porro dolorem doloremque maiores, est quae voluptate saepe magni quos consequuntur quam repellat voluptatem et fuga? Molestiae, tempora.
              </p>
              <button className="bg-yellow-500 px-10 py-10 text-xl text-black ">
                Download Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;