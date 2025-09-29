import { motion } from "motion/react";

export default function AnimatedRobot() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-200 via-blue-200 to-green-300 rounded-3xl"></div>

      {/* Animated Robot */}
      <motion.div
        animate={{
          x: [-20, 20, -20],
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10"
      >
        <svg
          width="280"
          height="200"
          viewBox="0 0 280 200"
          className="drop-shadow-lg"
        >
          {/* Robot Body */}
          <g>
            {/* Main body - orange rectangular */}
            <rect
              x="80"
              y="60"
              width="120"
              height="80"
              rx="8"
              fill="#FF6B35"
              stroke="#E55A2B"
              strokeWidth="2"
            />

            {/* Body details - dots pattern */}
            <circle cx="95" cy="75" r="2" fill="#E55A2B" />
            <circle cx="105" cy="75" r="2" fill="#E55A2B" />
            <circle cx="115" cy="75" r="2" fill="#E55A2B" />
            <circle cx="125" cy="75" r="2" fill="#E55A2B" />
            <circle cx="95" cy="85" r="2" fill="#E55A2B" />
            <circle cx="105" cy="85" r="2" fill="#E55A2B" />
            <circle cx="115" cy="85" r="2" fill="#E55A2B" />
            <circle cx="125" cy="85" r="2" fill="#E55A2B" />

            {/* Central circuit board */}
            <rect
              x="130"
              y="70"
              width="35"
              height="25"
              rx="3"
              fill="#4A90E2"
              stroke="#357ABD"
              strokeWidth="1"
            />

            {/* Circuit details */}
            <circle cx="140" cy="78" r="2" fill="#FFD700" />
            <circle cx="150" cy="78" r="2" fill="#FFD700" />
            <circle cx="140" cy="87" r="2" fill="#FFD700" />
            <circle cx="150" cy="87" r="2" fill="#FFD700" />

            {/* Eyes */}
            <circle
              cx="110"
              cy="45"
              r="15"
              fill="white"
              stroke="#333"
              strokeWidth="2"
            />
            <circle
              cx="150"
              cy="45"
              r="15"
              fill="white"
              stroke="#333"
              strokeWidth="2"
            />

            {/* Eye pupils */}
            <circle cx="110" cy="45" r="6" fill="#333" />
            <circle cx="150" cy="45" r="6" fill="#333" />

            {/* Eye shine */}
            <circle cx="113" cy="42" r="2" fill="white" />
            <circle cx="153" cy="42" r="2" fill="white" />

            {/* Mouth */}
            <path
              d="M 120 55 Q 130 60 140 55"
              stroke="#E55A2B"
              strokeWidth="2"
              fill="none"
            />

            {/* Left wheel */}
            <circle cx="100" cy="160" r="25" fill="#333" />
            <circle cx="100" cy="160" r="20" fill="#FFD700" />
            <circle cx="100" cy="160" r="15" fill="#333" />

            {/* Right wheel */}
            <circle cx="160" cy="160" r="25" fill="#333" />
            <circle cx="160" cy="160" r="20" fill="#FFD700" />
            <circle cx="160" cy="160" r="15" fill="#333" />

            {/* Wheel spokes */}
            <g stroke="#FFD700" strokeWidth="2">
              <line x1="85" y1="160" x2="115" y2="160" />
              <line x1="100" y1="145" x2="100" y2="175" />
              <line x1="145" y1="160" x2="175" y2="160" />
              <line x1="160" y1="145" x2="160" y2="175" />
            </g>

            {/* Side supports */}
            <rect x="70" y="145" width="15" height="8" rx="2" fill="#E0E0E0" />
            <rect x="195" y="145" width="15" height="8" rx="2" fill="#E0E0E0" />

            {/* Top components */}
            <rect x="85" y="40" width="8" height="20" rx="2" fill="#666" />
            <rect x="167" y="40" width="8" height="20" rx="2" fill="#666" />

            {/* Top circuit elements */}
            <rect x="120" y="35" width="20" height="15" rx="2" fill="#4A90E2" />
            <circle cx="125" cy="42" r="2" fill="#FFD700" />
            <circle cx="135" cy="42" r="2" fill="#FFD700" />

            {/* Side sensors */}
            <circle cx="75" cy="100" r="4" fill="#4A90E2" />
            <circle cx="185" cy="100" r="4" fill="#4A90E2" />

            {/* Connection wires */}
            <path
              d="M 95 60 Q 90 50 85 45"
              stroke="#FFD700"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M 165 60 Q 170 50 175 45"
              stroke="#FFD700"
              strokeWidth="2"
              fill="none"
            />
          </g>

          {/* Animated elements */}
          <motion.g
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Blinking LED lights */}
            <circle cx="170" cy="75" r="2" fill="#00FF00" />
            <circle cx="175" cy="80" r="2" fill="#FF0000" />
            <circle cx="170" cy="85" r="2" fill="#0000FF" />
          </motion.g>
        </svg>
      </motion.div>

      {/* Floating particles */}
      <motion.div
        animate={{
          y: [-10, 10, -10],
          x: [0, 5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-4 right-8 w-6 h-6 rounded-full bg-yellow-400 opacity-60"
      />

      <motion.div
        animate={{
          y: [10, -10, 10],
          x: [0, -5, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-6 w-4 h-4 rounded-full bg-blue-400 opacity-60"
      />

      <motion.div
        animate={{
          y: [-5, 15, -5],
          x: [0, 8, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-12 left-12 w-3 h-3 rounded-full bg-green-400 opacity-60"
      />
    </div>
  );
}
