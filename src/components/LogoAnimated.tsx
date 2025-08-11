import { motion } from "framer-motion";

interface LogoAnimatedProps {
  size?: number; // Height in px
}

// Modern "EM" monogram logo with subtle micro-animations
const LogoAnimated = ({ size = 28 }: LogoAnimatedProps) => {
  const height = size;
  const width = size * 2.4; // proportion for EM

  return (
    <motion.div
      className="inline-flex items-center select-none cursor-pointer"
      initial={false}
      whileHover="hover"
      aria-label="EM"
    >
      <motion.svg
        width={width}
        height={height}
        viewBox="0 0 120 32"
        className="overflow-visible"
      >
        {/* Soft background pill for focus */}
        <motion.rect
          x={-6}
          y={-4}
          rx={10}
          ry={10}
          height={40}
          width={132}
          className="fill-primary"
          initial={{ opacity: 0 }}
          variants={{ hover: { opacity: 0.06 } }}
        />

        {/* Monogram */}
        <motion.text
          x={0}
          y={22}
          className="font-extrabold fill-foreground"
          style={{ fontSize: 22, letterSpacing: 1.2 }}
          animate={{ scale: [1, 1.02, 1], y: [22, 21.6, 22] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          EM
        </motion.text>

        {/* Accent underline + micro dot that glides on hover */}
        <motion.line
          x1={0}
          y1={26}
          x2={56}
          y2={26}
          className="stroke-primary"
          strokeWidth={2}
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0.9, opacity: 0.9 }}
          variants={{ hover: { pathLength: 1, opacity: 1 } }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        <motion.circle
          cx={0}
          cy={26}
          r={2}
          className="fill-primary"
          initial={{ opacity: 0 }}
          variants={{ hover: { opacity: 1 } }}
          animate={{ x: [0, 56] }}
          transition={{ duration: 1.6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default LogoAnimated;
