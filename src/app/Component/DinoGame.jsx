"use client";

import { useRef, useEffect } from "react";

const DinoGame = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    // Optional: you can add any iframe logic here
  }, []);

  return (
    <div className="dino-wrapper">
      <iframe
        ref={iframeRef}
        src="https://chromedino.com/"
        title="Chrome Dino Game"
        width="100%"
        height="200"
        frameBorder="0"
        allow="keyboard"
        style={{ backgroundColor: "transparent" }}
      />
      <style jsx>{`
        .dino-wrapper {
        //   width: 100%;
        //   max-width: 800px;
        //   margin: 0 auto;
        //   border-radius: 12px;
        //   overflow: hidden;
        //   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        //   border: 2px solid #000;
        background-color: transparent;
        }

        iframe {
          display: block;
        }
      `}</style>
    </div>
  );
};

export default DinoGame;
