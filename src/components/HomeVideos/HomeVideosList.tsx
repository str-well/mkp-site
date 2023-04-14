import { Image } from "@chakra-ui/react";

interface HomeVideosListProps {
  src: string;
  alt: string;
  borderRadius?: string | number;
  boxSize?: string | number;
  htmlHeight?: string | number;
  htmlWidth?: string | number;
}

export function HomeVideosList({
  src,
  alt,
  borderRadius,
  boxSize,
  htmlHeight,
  htmlWidth,
}: HomeVideosListProps) {
  return (
    <Image
      borderRadius={borderRadius}
      boxSize={boxSize}
      htmlHeight={htmlHeight}
      htmlWidth={htmlWidth}
      src={src}
      alt={alt}
    />
  );
}
