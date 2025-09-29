import { motion } from "motion/react";

export default function CircleTrack() {
  return (
    <div className="relative w-full h-full flex items-end justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-green-100 to-blue-300"></div>

      {/* Background scenery */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Sun */}
        <circle cx="680" cy="80" r="45" fill="#FFD700" opacity="0.9" />
        <circle cx="680" cy="80" r="40" fill="#FFF200" opacity="0.7" />

        {/* Sun rays */}
        <g stroke="#FFD700" strokeWidth="2.5" opacity="0.6">
          <line x1="610" y1="80" x2="590" y2="80" />
          <line x1="750" y1="80" x2="770" y2="80" />
          <line x1="680" y1="10" x2="680" y2="-10" />
          <line x1="680" y1="150" x2="680" y2="170" />
          <line x1="630" y1="30" x2="620" y2="20" />
          <line x1="730" y1="130" x2="740" y2="140" />
          <line x1="730" y1="30" x2="740" y2="20" />
          <line x1="630" y1="130" x2="620" y2="140" />
        </g>

        {/* Ground/grass area - where track sits */}
        <rect
          x="0"
          y="400"
          width="800"
          height="400"
          fill="#7CB342"
          opacity="0.8"
        />
        <rect
          x="0"
          y="420"
          width="800"
          height="180"
          fill="#8BC34A"
          opacity="0.6"
        />

        {/* Trees - positioned around the ground area, not overlapping track */}
        <g>
          {/* Left side trees - closer to edges */}
          <rect x="60" y="380" width="12" height="40" fill="#8B4513" />
          <circle cx="66" cy="375" r="25" fill="#228B22" />
          <circle cx="56" cy="360" r="18" fill="#32CD32" />
          <circle cx="76" cy="368" r="15" fill="#32CD32" />

          <rect x="120" y="390" width="10" height="35" fill="#8B4513" />
          <circle cx="125" cy="385" r="22" fill="#228B22" />
          <circle cx="116" cy="372" r="15" fill="#32CD32" />
          <circle cx="134" cy="378" r="13" fill="#32CD32" />
        </g>

        <g>
          {/* Right side trees - closer to edges */}
          <rect x="660" y="375" width="15" height="45" fill="#8B4513" />
          <circle cx="667.5" cy="370" r="28" fill="#228B22" />
          <circle cx="655" cy="355" r="20" fill="#32CD32" />
          <circle cx="680" cy="362" r="18" fill="#32CD32" />

          <rect x="720" y="385" width="12" height="40" fill="#8B4513" />
          <circle cx="726" cy="380" r="25" fill="#228B22" />
          <circle cx="716" cy="366" r="17" fill="#32CD32" />
          <circle cx="736" cy="372" r="15" fill="#32CD32" />
        </g>

        {/* Small flowers and grass details */}
        <circle cx="40" cy="440" r="8" fill="#FF69B4" opacity="0.7" />
        <circle cx="760" cy="450" r="6" fill="#FF1493" opacity="0.7" />
        <circle cx="20" cy="460" r="5" fill="#FFD700" opacity="0.8" />
        <circle cx="780" cy="435" r="7" fill="#FF6347" opacity="0.7" />

        {/* Clouds */}
        <g fill="white" opacity="0.7">
          <circle cx="150" cy="60" r="18" />
          <circle cx="165" cy="60" r="22" />
          <circle cx="180" cy="60" r="18" />
          <circle cx="165" cy="48" r="15" />

          <circle cx="450" cy="75" r="12" />
          <circle cx="462" cy="75" r="16" />
          <circle cx="474" cy="75" r="12" />
          <circle cx="462" cy="66" r="10" />
        </g>
      </svg>

      {/* Circle Track - positioned lower */}
      <div className="relative w-full h-full max-w-md max-h-md aspect-square self-end mb-8">
        <svg
          className="w-full h-full"
          viewBox="0 0 400 400"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Track outer border */}
          <circle
            cx="200"
            cy="200"
            r="150"
            fill="none"
            stroke="#444444"
            strokeWidth="30"
            opacity="0.8"
          />

          {/* Track surface */}
          <circle
            cx="200"
            cy="200"
            r="150"
            fill="none"
            stroke="#666666"
            strokeWidth="24"
          />

          {/* Inner track border */}
          <circle
            cx="200"
            cy="200"
            r="150"
            fill="none"
            stroke="#888888"
            strokeWidth="18"
          />

          {/* Center dashed line */}
          <circle
            cx="200"
            cy="200"
            r="150"
            fill="none"
            stroke="#FFD700"
            strokeWidth="3"
            strokeDasharray="20,12"
            opacity="0.9"
          />
        </svg>

        {/* Robot moving on circle track */}
        <motion.div
          className="absolute inset-0"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div
            className="absolute"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              className="relative"
              style={{
                transform: "translateX(150px) translateY(0px) scale(0.6)",
              }}
            >
              <motion.div
                animate={{
                  y: [-4, 4, -4],
                  rotate: [-3, 3, -3],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <svg
                  width="160"
                  height="120"
                  viewBox="0 0 160 120"
                  className="drop-shadow-2xl"
                  style={{
                    transform: "rotate(-90deg)",
                  }}
                >
                  <g>
                    <rect
                      x="35"
                      y="40"
                      width="90"
                      height="45"
                      rx="9"
                      fill="#FF6B35"
                      stroke="#E55A2B"
                      strokeWidth="4"
                    />

                    {/* Robot head/eyes - bigger */}
                    <circle
                      cx="56"
                      cy="24"
                      r="13"
                      fill="white"
                      stroke="#333"
                      strokeWidth="3"
                    />
                    <circle
                      cx="104"
                      cy="24"
                      r="13"
                      fill="white"
                      stroke="#333"
                      strokeWidth="3"
                    />
                    <circle cx="56" cy="24" r="8" fill="#333" />
                    <circle cx="104" cy="24" r="8" fill="#333" />

                    {/* Eye shine */}
                    <circle cx="60" cy="20" r="3.5" fill="white" />
                    <circle cx="108" cy="20" r="3.5" fill="white" />

                    {/* Control panel - bigger */}
                    <rect
                      x="45"
                      y="48"
                      width="40"
                      height="20"
                      rx="5"
                      fill="#4A90E2"
                    />
                    <circle cx="58" cy="58" r="3.5" fill="#FFD700" />
                    <circle cx="72" cy="58" r="3.5" fill="#FFD700" />

                    {/* Side vents - bigger */}
                    <rect
                      x="37"
                      y="50"
                      width="9"
                      height="13"
                      rx="2"
                      fill="#E55A2B"
                    />
                    <rect
                      x="114"
                      y="50"
                      width="9"
                      height="13"
                      rx="2"
                      fill="#E55A2B"
                    />

                    {/* Wheels - bigger */}
                    <circle cx="50" cy="96" r="19" fill="#333" />
                    <circle cx="50" cy="96" r="14" fill="#FFD700" />
                    <circle cx="50" cy="96" r="9" fill="#333" />

                    <circle cx="110" cy="96" r="19" fill="#333" />
                    <circle cx="110" cy="96" r="14" fill="#FFD700" />
                    <circle cx="110" cy="96" r="9" fill="#333" />

                    {/* Wheel spokes - bigger */}
                    <g stroke="#FFD700" strokeWidth="3.5">
                      <line x1="41" y1="96" x2="59" y2="96" />
                      <line x1="50" y1="87" x2="50" y2="105" />
                      <line x1="101" y1="96" x2="119" y2="96" />
                      <line x1="110" y1="87" x2="110" y2="105" />
                    </g>

                    {/* Antenna - bigger */}
                    <line
                      x1="80"
                      y1="13"
                      x2="80"
                      y2="40"
                      stroke="#666"
                      strokeWidth="4.5"
                    />
                    <circle cx="80" cy="8" r="5.5" fill="#00FF00" />

                    {/* Status LEDs - bigger */}
                    <motion.circle
                      cx="130"
                      cy="50"
                      r="4"
                      fill="#00FF00"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.2, repeat: Infinity }}
                    />
                    <motion.circle
                      cx="130"
                      cy="62"
                      r="4"
                      fill="#FF0000"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.8, repeat: Infinity }}
                    />
                    <motion.circle
                      cx="130"
                      cy="74"
                      r="4"
                      fill="#0000FF"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    />
                  </g>
                </svg>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
