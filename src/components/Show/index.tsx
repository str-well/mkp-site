import { CSSProperties } from "react";
import { useMediaQuery } from "usehooks-ts";

interface ShowProps {
  children:
    | JSX.Element
    | JSX.Element[]
    | string
    | number
    | boolean
    | null
    | undefined;
  on: "mobile" | "desktop" | "mobile-landscape" | string[];
  style?: CSSProperties;
}

export const Show = (props: ShowProps) => {
  const isMobile = useMediaQuery("(max-width: 426px)");
  const isMobileLandscape = useMediaQuery(
    "(min-width: 427px) and (max-width: 1024px)"
  );
  const isDesktop = useMediaQuery("(min-width: 1025px)");

  const isToShowOnMobile =
    props.on === "mobile" ||
    (Array.isArray(props.on) && props.on.includes("mobile"));
  const isToShowOnDesktop =
    props.on === "desktop" ||
    (Array.isArray(props.on) && props.on.includes("desktop"));
  const isToShowOnMobileLandscape =
    props.on === "mobile-landscape" ||
    (Array.isArray(props.on) && props.on.includes("mobile-landscape"));

  if (isToShowOnMobile && isMobile) {
    return <>{props.children}</>;
  }

  if (isToShowOnDesktop && isDesktop) {
    return <>{props.children}</>;
  }

  if (isToShowOnMobileLandscape && isMobileLandscape) {
    return <>{props.children}</>;
  }

  return <></>;
};

//   return (
//     <>
//       {(props.on === "mobile" && isMobile) ||
//       (props.on === "mobileLandscape" && isMobileLandscape) ||
//       (props.on === "desktop" && !isMobile) ? (
//         <>{props.children}</>
//       ) : (
//         <></>
//       )}
//     </>
//   );
// };
