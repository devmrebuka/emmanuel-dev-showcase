import { motion } from "framer-motion";

interface LogoAnimatedProps {
  size?: number;
}

// Animated SVG logo that expands from "EM" to full name on hover
const LogoAnimated = ({ size = 200 }: LogoAnimatedProps) => {
  const collapsedWidth = 56; // approx width for "EM"
  const expandedWidth = size; // full width

  return (
    <motion.div
      className="inline-flex items-center select-none cursor-pointer"
      initial={false}
      whileHover="expanded"
      aria-label="Emmanuel C. Moghalu"
    >
      <motion.svg
        width={collapsedWidth}
        height={28}
        viewBox="0 0 200 28"
        className="overflow-visible"
        variants={{
          expanded: { width: expandedWidth, transition: { type: "spring", stiffness: 220, damping: 24 } },
        }}
        style={{ width: collapsedWidth }}
      >
        <motion.rect
          x={-8}
          y={-6}
          rx={12}
          ry={12}
          height={40}
          width={216}
          className="fill-primary"
          initial={{ opacity: 0 }}
          variants={{ expanded: { opacity: 0.06 } }}
        />

        {/* Initials */}
        <motion.text
          x={0}
          y={22}
          className="font-bold fill-foreground"
          style={{ fontSize: 22, letterSpacing: 1.5 }}
          initial={{ opacity: 1 }}
          variants={{ expanded: { opacity: 0, x: -8 } }}
        >
          EM
        </motion.text>

        {/* Full name - revealed on hover with mask clip */}
        <motion.g initial={{ opacity: 0 }} variants={{ expanded: { opacity: 1 } }}>
          <motion.text
            x={0}
            y={22}
            className="font-bold fill-foreground"
            style={{ fontSize: 18, letterSpacing: 0.4 }}
            variants={{ expanded: { x: 0 } }}
          >
            Emmanuel C. Moghalu
          </motion.text>
        </motion.g>

        {/* Accent underline grows on hover */}
        <motion.line
          x1={0}
          y1={26}
          x2={0}
          y2={26}
          className="stroke-primary"
          strokeWidth={2}
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0 }}
          variants={{ expanded: { x2: 180, pathLength: 1 } }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default LogoAnimated;
