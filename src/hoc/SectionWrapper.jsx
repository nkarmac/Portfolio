import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const useViewport = () => {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return [height,width];
};

const StarWrapper = (Component, idName) =>
  function HOC() {
    const [viewportHeight,viewportWidth] = useViewport();
    const isSmallViewport = viewportHeight < 650 || viewportWidth < 375;

    return (
      <motion.section
        variants={staggerContainer()}
        initial={isSmallViewport ? 'show' : 'hidden'}
        animate={isSmallViewport ? 'show' : undefined}
        whileInView={isSmallViewport ? undefined : 'show'}
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
