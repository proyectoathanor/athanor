import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useEffect, useState } from "react";

export default function Map({children}) {
  const [minScale, setMinScale] = useState(1);
  const MAP_SIZE = 2000;

  useEffect(() => {
    const scaleX = window.innerWidth / MAP_SIZE;
    const scaleY = window.innerHeight / MAP_SIZE;
    setMinScale(Math.min(scaleX, scaleY));
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#333",
      }}
    >
      <TransformWrapper
        initialScale={1}
        minScale={minScale}
        maxScale={3}
        limitToBounds
        centerOnInit
        centerZoomedOut
        doubleClick={{ disabled: true }}
        pinch={{ disabled: false }}
        panning={{ disabled: false }}
        wheel={{ wheelDisabled: false }}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <TransformComponent
            wrapperStyle={{
              width: "100vw",
              height: "100vh",
              overflow: "hidden", 
            }}
          >
            <div
              style={{
                width: MAP_SIZE,
                height: MAP_SIZE,
                position: "relative",
                margin: "auto",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 1000,
                  left: 1000,
                  width: "100px",
                  height: "100px",
                  border: "5px solid rgb(207, 181, 107)",
                  borderRadius: "50%",
                  transform: "translateX(-50%) translateY(-50%)"
                }}
              >
              </div>
            </div>
          </TransformComponent>
        )}
      </TransformWrapper>
    </div>
  );
}
