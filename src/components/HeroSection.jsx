import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import starsbg from "../assets/stars.png";
import shopify from "../assets/shopify.png";

const HeroSection = () => {
  const createRandomStars = () => {
    const stars = [];
    const numberOfStars = 50; // Change this to create more or fewer stars

    for (let i = 0; i < numberOfStars; i++) {
      const size = Math.random() * 3 + 1; // Random size for each star
      const positionX = Math.random() * 100; // Random horizontal position
      const positionY = Math.random() * 100; // Random vertical position
      stars.push(
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: '#b8860b',
            top: `${positionY}%`,
            left: `${positionX}%`,
            opacity: 0.7,
            animation: `randomMovement 15s infinite linear`,
          }}
        ></div>
      );
    }

    return stars;
  };

  return (
    <section
      style={{
        backgroundImage: `url(${starsbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="relative overflow-hidden"
    >
      {/* Add keyframes for random movement */}
      <style>
        {`
          @keyframes randomMovement {
            0% {
              transform: translateX(0px) translateY(0px);
            }
            25% {
              transform: translateX(50px) translateY(50px);
            }
            50% {
              transform: translateX(-50px) translateY(0px);
            }
            75% {
              transform: translateX(30px) translateY(-50px);
            }
            100% {
              transform: translateX(0px) translateY(0px);
            }
          }

          @keyframes revolveStars {
            0% {
              transform: rotate(0deg) translateX(150px) rotate(0deg);
            }
            100% {
              transform: rotate(360deg) translateX(150px) rotate(-360deg);
            }
          }

          @keyframes revolveStarsTwo {
            0% {
              transform: rotate(0deg) translateX(200px) rotate(0deg);
            }
            100% {
              transform: rotate(360deg) translateX(200px) rotate(-360deg);
            }
          }

          @keyframes revolveStarsThree {
            0% {
              transform: rotate(0deg) translateX(250px) rotate(0deg);
            }
            100% {
              transform: rotate(360deg) translateX(250px) rotate(-360deg);
            }
          }

          .animate-revolveStars div {
            animation: revolveStars 20s infinite linear;
          }

          .animate-revolveStarsTwo div {
            animation: revolveStarsTwo 25s infinite linear;
          }

          .animate-revolveStarsThree div {
            animation: revolveStarsThree 30s infinite linear;
          }
        `}
      </style>


<h1 className="text-2xl sm:text-4xl lg:text-5xl text-center tracking-wide" style={{marginTop:"50px"}}>
  Unlock Shopify Stores Data 
  <h1 className="text-2xl sm:text-4xl lg:text-5xl text-center tracking-wide bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text" style={{marginTop:"15px"}}>Worldwide</h1> 
</h1>

  {/* Hidden Duplicate Content */}
  <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide invisible">
    VirtualR build tools
    <span className="bg-gradient-to-r from-[#f7b733] via-[#fcaf45] to-[#ffcc33] text-transparent bg-clip-text">
 
    </span>
  </h1>
      {/* Central glowing ring */}
      <div className="absolute h-64 w-64 rounded-full border border-white/30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(closest-side,_rgba(255,215,0,1),rgba(255,215,0,0.8),rgba(184,134,11,0.8))] shadow-[0_0_30px_rgba(255,215,0,.6),0_0_50px_rgba(255,215,0,.3),0_0_80px_rgba(255,215,0,.2)]">
</div>

      {/* Animating revolving stars on the orbit rings */}
      <div className="absolute h-[344px] w-[344px] border opacity-20 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-dashed animate-revolveStars">
        <div
          className="absolute h-2 w-2 rounded-full"
          style={{
            backgroundColor: '#b8860b', // Dark gold color
            opacity: 0.7, // Transparency level
          }}
        ></div>
      </div>

      <div className="absolute h-[444px] w-[444px] border opacity-20 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-dashed animate-revolveStarsTwo">
        <div
          className="absolute h-2 w-2 rounded-full"
          style={{
            backgroundColor: '#b8860b', // Dark gold color
            opacity: 0.7, // Transparency level
          }}
        ></div>
      </div>

      <div className="absolute h-[544px] w-[544px] border opacity-20 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-dashed animate-revolveStarsThree">
        <div
          className="absolute h-2 w-2 rounded-full"
          style={{
            backgroundColor: '#b8860b', // Dark gold color
            opacity: 0.7, // Transparency level
          }}
        ></div>
      </div>

      {/* Add random stars to the background */}
      <div className="absolute top-0 left-0 w-full h-full">
        {createRandomStars()}
      </div>
  {/* Hidden Duplicate Content */}
  <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide invisible">
    VirtualR build tools
    <span className="bg-gradient-to-r from-[#f7b733] via-[#fcaf45] to-[#ffcc33] text-transparent bg-clip-text">
 
    </span>
  </h1>
  <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl invisible">

   
  </p>
   {/* Content Section */}
<div className="flex flex-col items-center mt-6 lg:mt-20 relative">
  {/* First Block of Content */}



  {/* Hidden Duplicate Content */}
  <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide invisible">
    VirtualR build tools
    <span className="bg-gradient-to-r from-[#f7b733] via-[#fcaf45] to-[#ffcc33] text-transparent bg-clip-text">
 
    </span>
  </h1>
  <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide invisible">
    VirtualR build tools
    <span className="bg-gradient-to-r from-[#f7b733] via-[#fcaf45] to-[#ffcc33] text-transparent bg-clip-text">
 
    </span>
  </h1>
  <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl" >
  Ideal for lead generation, data enrichment, market research and alternative investment data. Shopify Data gives marketing agencies and app developers the information needed to succeed
  </p>
  
  {/* Additional Content or Buttons */}
  <div className="flex justify-center my-10">
    {/* Add buttons or links here */}
  </div>
</div>

    </section>
  );
};

export default HeroSection;