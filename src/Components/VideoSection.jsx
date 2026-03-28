const VideoSection = () => {
  return (
    <div className="scroll-animate w-full px-4 mt-6 flex justify-center">
      <div className="w-full max-w-4xl">
        
        {/* Responsive Video */}
        <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/WZVHButjgxg"
            title="Siddha Medicine Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default VideoSection;