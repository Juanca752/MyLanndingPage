import { SiTplink } from "react-icons/si";
import { SiUbiquiti } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Tecnologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Tecnologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="pb-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="pb-4"
        >
          <TbBrandNextjs className="text-7xl" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="pb-4"
        >
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="pb-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="pb-4"
        >
          <SiUbiquiti className="text-5xl" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="pb-4"
        >
          <SiTplink className="text-5xl text-cyan-300" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Tecnologies;
