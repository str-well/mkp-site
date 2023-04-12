import { Image } from "@chakra-ui/react";

interface HomeVideosListProps {
  src: string;
  alt: string;
  borderRadius: string;
  boxSize: string;
}

export function HomeVideosList({
  src,
  alt,
  borderRadius,
  boxSize,
}: HomeVideosListProps) {
  return (
    <Image borderRadius={borderRadius} boxSize={boxSize} src={src} alt={alt} />
  );
}
