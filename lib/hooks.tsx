import { useActiveSectionContext } from "@/context/Active-Section-Context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function useSectionInView() {
    const { ref, inView } = useInView();
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection, timeOfLastClick]);
}