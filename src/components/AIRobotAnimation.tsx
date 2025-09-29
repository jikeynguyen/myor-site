import { useLocale } from "@/i18n/LocaleProvider";
import React from "react";

export default function AIRobotAnimation() {
  const { t } = useLocale();
  return (
    <div className="relative w-full h-full min-h-[500px] bg-gradient-to-br from-purple-100 via-blue-50 to-orange-100 overflow-hidden rounded-3xl">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 grid-rows-8 h-full gap-2 p-4">
          {Array.from({ length: 96 }).map((_, i) => (
            <div
              key={i}
              className="border border-primary/30 rounded animate-pulse"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: "3s",
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Data Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full opacity-60 animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: "2s",
            }}
          />
        ))}
      </div>

      {/* Neural Network Lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 500">
        {/* Animated network lines */}
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff6b35" stopOpacity="0" />
            <stop offset="50%" stopColor="#ff6b35" stopOpacity="1" />
            <stop offset="100%" stopColor="#ff6b35" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Network connections */}
        <g stroke="url(#lineGradient)" strokeWidth="2" fill="none">
          <path d="M100,100 Q200,80 300,120 T500,100" className="animate-pulse">
            <animate
              attributeName="stroke-dasharray"
              values="0,300;150,150;300,0;0,300"
              dur="4s"
              repeatCount="indefinite"
            />
          </path>
          <path
            d="M150,200 Q250,180 350,220 T550,200"
            className="animate-pulse"
          >
            <animate
              attributeName="stroke-dasharray"
              values="100,200;200,100;300,0;100,200"
              dur="3s"
              repeatCount="indefinite"
            />
          </path>
          <path d="M80,300 Q180,280 280,320 T480,300" className="animate-pulse">
            <animate
              attributeName="stroke-dasharray"
              values="50,250;175,125;300,0;50,250"
              dur="5s"
              repeatCount="indefinite"
            />
          </path>
        </g>

        {/* Network nodes */}
        {[
          { x: 100, y: 100 },
          { x: 300, y: 120 },
          { x: 500, y: 100 },
          { x: 150, y: 200 },
          { x: 350, y: 220 },
          { x: 550, y: 200 },
          { x: 80, y: 300 },
          { x: 280, y: 320 },
          { x: 480, y: 300 },
        ].map((node, i) => (
          <circle
            key={i}
            cx={node.x}
            cy={node.y}
            r="8"
            fill="#ff6b35"
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.5}s` }}
          >
            <animate
              attributeName="r"
              values="8;12;8"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </svg>

      {/* Main AI Robot */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          {/* Robot Body */}
          <div className="relative z-10">
            <svg
              width="200"
              height="240"
              viewBox="0 0 200 240"
              className="drop-shadow-2xl"
            >
              {/* Gradients */}
              <defs>
                <radialGradient id="headGlow" cx="50%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Robot Head */}
              <rect
                x="60"
                y="20"
                width="80"
                height="70"
                rx="15"
                fill="#ff6b35"
                stroke="#e55a2b"
                strokeWidth="2"
              />

              {/* Head Glow Effect */}
              <rect
                x="60"
                y="20"
                width="80"
                height="70"
                rx="15"
                fill="url(#headGlow)"
                opacity="0.5"
              />

              {/* Eyes */}
              <circle cx="80" cy="50" r="8" fill="#ffffff" />
              <circle cx="120" cy="50" r="8" fill="#ffffff" />
              <circle
                cx="80"
                cy="50"
                r="5"
                fill="#00ff88"
                className="animate-pulse"
              />
              <circle
                cx="120"
                cy="50"
                r="5"
                fill="#00ff88"
                className="animate-pulse"
              />

              {/* Animated eye pupils */}
              <circle
                cx="80"
                cy="50"
                r="2"
                fill="#0066cc"
                className="animate-bounce"
              />
              <circle
                cx="120"
                cy="50"
                r="2"
                fill="#0066cc"
                className="animate-bounce"
              />

              {/* Smile */}
              <path
                d="M85 65 Q100 75 115 65"
                stroke="#ffffff"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />

              {/* Antennae */}
              <line
                x1="75"
                y1="20"
                x2="75"
                y2="10"
                stroke="#ff6b35"
                strokeWidth="3"
              />
              <line
                x1="125"
                y1="20"
                x2="125"
                y2="10"
                stroke="#ff6b35"
                strokeWidth="3"
              />
              <circle
                cx="75"
                cy="10"
                r="4"
                fill="#00ff88"
                className="animate-ping"
              />
              <circle
                cx="125"
                cy="10"
                r="4"
                fill="#00ff88"
                className="animate-ping"
              />

              {/* Body */}
              <rect
                x="50"
                y="90"
                width="100"
                height="80"
                rx="20"
                fill="#ff6b35"
                stroke="#e55a2b"
                strokeWidth="2"
              />

              {/* Chest Screen */}
              <rect
                x="70"
                y="110"
                width="60"
                height="40"
                rx="5"
                fill="#001122"
              />
              <rect
                x="72"
                y="112"
                width="56"
                height="36"
                rx="3"
                fill="#003366"
              />

              {/* Animated Screen Content - AI Brain */}
              <g className="animate-pulse">
                <circle
                  cx="100"
                  cy="130"
                  r="15"
                  fill="none"
                  stroke="#00ff88"
                  strokeWidth="2"
                />
                <circle
                  cx="100"
                  cy="130"
                  r="10"
                  fill="none"
                  stroke="#00ff88"
                  strokeWidth="1"
                  opacity="0.7"
                />
                <circle
                  cx="100"
                  cy="130"
                  r="5"
                  fill="none"
                  stroke="#00ff88"
                  strokeWidth="1"
                  opacity="0.5"
                />
                <circle cx="100" cy="130" r="2" fill="#00ff88" />
              </g>

              {/* Arms */}
              <rect
                x="20"
                y="100"
                width="30"
                height="15"
                rx="7"
                fill="#ff6b35"
              />
              <rect
                x="150"
                y="100"
                width="30"
                height="15"
                rx="7"
                fill="#ff6b35"
              />

              {/* Animated Hands */}
              <circle
                cx="15"
                cy="107"
                r="8"
                fill="#ff6b35"
                className="animate-bounce"
              />
              <circle
                cx="185"
                cy="107"
                r="8"
                fill="#ff6b35"
                className="animate-bounce"
              />

              {/* Legs */}
              <rect
                x="70"
                y="170"
                width="20"
                height="40"
                rx="10"
                fill="#ff6b35"
              />
              <rect
                x="110"
                y="170"
                width="20"
                height="40"
                rx="10"
                fill="#ff6b35"
              />

              {/* Feet */}
              <ellipse cx="80" cy="220" rx="15" ry="8" fill="#e55a2b" />
              <ellipse cx="120" cy="220" rx="15" ry="8" fill="#e55a2b" />
            </svg>
          </div>

          {/* Floating AI Symbols */}
          <div className="absolute -top-10 -left-10 animate-bounce">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs animate-spin">
              AI
            </div>
          </div>

          <div className="absolute -top-5 -right-15 animate-pulse">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
              🧠
            </div>
          </div>

          <div className="absolute -bottom-5 -left-8 animate-bounce">
            <div className="w-7 h-7 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs">
              ⚡
            </div>
          </div>

          {/* Energy Rings */}
          <div className="absolute inset-0 -m-8">
            <div className="w-full h-full border-2 border-primary/30 rounded-full animate-ping" />
          </div>
          <div className="absolute inset-0 -m-12">
            <div className="w-full h-full border border-blue-400/20 rounded-full animate-ping" />
          </div>
        </div>
      </div>

      {/* Floating Code Snippets */}
      <div className="absolute top-8 left-8 animate-pulse">
        <div className="bg-black/80 text-green-400 p-2 rounded text-xs font-mono whitespace-pre-line">
          {`if (robot.isAI) {
  think();
}`}
        </div>
      </div>

      <div className="absolute top-16 right-8 animate-bounce">
        <div className="bg-black/80 text-blue-400 p-2 rounded text-xs font-mono whitespace-pre-line">
          {`neural_network.train();
robot.learn();`}
        </div>
      </div>

      <div className="absolute bottom-12 left-12 animate-pulse">
        <div className="bg-black/80 text-purple-400 p-2 rounded text-xs font-mono whitespace-pre-line">
          {`while(true) {
  help_humans();
}`}
        </div>
      </div>

      {/* Title and Description */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
        <h3 className="text-2xl mb-2 text-primary animate-pulse">
          {t("home.ai.overlay.title")}
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto text-sm">
          {t("home.ai.overlay.desc")}
        </p>
      </div>
    </div>
  );
}
