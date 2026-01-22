import { Stage, Layer, Rect, Circle } from "react-konva";
import { useMemo, useRef, useEffect, useState } from "react";
import { usePartStore } from "../../../stores/part";
import { Flex, Text } from "@mantine/core";

const PartDiagram = () => {
  const { selectedPart } = usePartStore();
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({
    width: 600,
    height: 400,
  });

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerSize({ width: rect.width, height: rect.height });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const { scale, offsetX, offsetY } = useMemo(() => {
    if (!selectedPart?.geometry) {
      return { scale: 1, offsetX: 0, offsetY: 0 };
    }

    const { width: partWidth, height: partHeight } = selectedPart.geometry;
    const padding = 40;
    const availableWidth = containerSize.width - padding * 2;
    const availableHeight = containerSize.height - padding * 2;

    const scaleX = availableWidth / partWidth;
    const scaleY = availableHeight / partHeight;
    const scale = Math.min(scaleX, scaleY, 1);

    const scaledWidth = partWidth * scale;
    const scaledHeight = partHeight * scale;
    const offsetX = (containerSize.width - scaledWidth) / 2;
    const offsetY = (containerSize.height - scaledHeight) / 2;

    return { scale, offsetX, offsetY };
  }, [selectedPart?.geometry, containerSize]);

  if (!selectedPart?.geometry) {
    return (
      <Flex
        ref={containerRef}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Select a part to view diagram</Text>
      </Flex>
    );
  }

  const {
    width: partWidth,
    height: partHeight,
    holes,
  } = selectedPart?.geometry;

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
      <Stage width={containerSize.width} height={containerSize.height}>
        <Layer>
          <Rect
            x={offsetX}
            y={offsetY}
            width={partWidth * scale}
            height={partHeight * scale}
            stroke="#333"
            strokeWidth={2}
            fill="transparent"
          />

          {holes.map((hole, index) => (
            <Circle
              key={index}
              x={offsetX + hole.x * scale}
              y={offsetY + hole.y * scale}
              radius={(hole.diameter / 2) * scale}
              stroke="#666"
              strokeWidth={1}
              fill="#f0f0f0"
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default PartDiagram;
