import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
<div id="Guide" className="mt-20 pt-20">
<h2 className="text-2xl sm:text-3xl lg:text-4xl text-center mt-6 tracking-wide">
        <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text">
          Guide
        </span>
      </h2>

      {/* YouTube Video Section */}
      <div className="mt-8 text-center">
  <a href="https://youtu.be/AtDZu8ijp80" target="_blank" rel="noopener noreferrer">
    <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg border-2 border-[#FFD700]">  {/* Thin golden border */}
      <iframe
        width="100%"
        height="480"  
        src="https://www.youtube.com/embed/AtDZu8ijp80"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </a>
</div>

    </div>
  );
};

export default Workflow;
