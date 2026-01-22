import { useMediaQuery } from "@mantine/hooks";

export const useMedia = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");

  return { isMobile, isTablet };
};
