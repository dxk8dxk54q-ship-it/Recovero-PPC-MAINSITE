import { forwardRef } from 'react';

export const RecoveroLogo = forwardRef<SVGSVGElement, { className?: string }>(
  ({ className = '' }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        className={`bg-transparent ${className}`}
        style={{
          backgroundColor: 'transparent',
        }}
      >
        {/* 
          1. Base Outer Ring 
          Professional light slate background with deep navy, heavy border
        */}
        <circle cx="250" cy="250" r="230" fill="#F1F5F9" stroke="#0F172A" strokeWidth="12" />

        {/* Inner Orange Accent Rings for high contrast depth */}
        <circle cx="250" cy="250" r="212" fill="#FFFFFF" stroke="#EA580C" strokeWidth="6" />

        {/* 
          2. Top Half: Truck Icon 
          Styled as a modern, heavy flatbed wrecker, facing right
        */}
        <g id="heavy-wrecker" transform="translate(72, 30) scale(0.8)">
          {/* Main Chassis Base */}
          <rect x="130" y="195" width="120" height="18" rx="4" fill="#0F172A" />

          {/* Winch/Arm Mount */}
          <path d="M 160 170 L 205 170 L 210 200 L 155 200 Z" fill="#0F172A" />
          <circle cx="185" cy="180" r="6" fill="#F8FAFC" /> {/* Mount Bolt */}

          {/* Crane Boom Extending Up & Back */}
          <path d="M 185 180 L 115 55 L 140 45 L 210 170 Z" fill="#EA580C" stroke="#0F172A" strokeWidth="8" strokeLinejoin="round" />
          
          {/* Boom tip extension & pulley block */}
          <rect x="115" y="49" width="20" height="12" transform="rotate(-58 115 49)" fill="#0F172A" />

          {/* Hook Line dropping straight down */}
          <line x1="105" y1="58" x2="105" y2="120" stroke="#0F172A" strokeWidth="6" />

          {/* Heavy Steel Hook */}
          <path d="M 105 120 C 80 120 75 160 105 165 C 130 165 130 140 115 135" fill="none" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />

          {/* Wrecker Cab */}
          <path d="M 245 125 L 340 125 C 362 125 365 145 370 190 L 370 213 L 245 213 Z" fill="#EA580C" stroke="#0F172A" strokeWidth="8" strokeLinejoin="round" />

          {/* Cab Window & Trim */}
          <path d="M 260 135 L 330 135 C 340 135 345 150 348 170 L 260 170 Z" fill="#F8FAFC" stroke="#0F172A" strokeWidth="6" strokeLinejoin="round" />
          
          {/* Detailed Cab Features */}
          <rect x="258" y="182" width="16" height="5" rx="2" fill="#0F172A" /> {/* Door handle */}
          
          <rect x="260" y="115" width="26" height="10" rx="3" fill="#3B82F6" stroke="#0F172A" strokeWidth="4" /> {/* Orange/Blue Beacon */}
          <rect x="355" y="175" width="14" height="12" rx="2" fill="#FCD34D" stroke="#0F172A" strokeWidth="3" /> {/* Front Headlight */}
          <rect x="240" y="200" width="10" height="6" fill="#EF4444" /> {/* Tail light base */}

          {/* Wheel Fenders/Guards */}
          <path d="M 150 205 A 35 35 0 0 1 228 205" fill="none" stroke="#0F172A" strokeWidth="8" />
          <path d="M 285 205 A 35 35 0 0 1 363 205" fill="none" stroke="#0F172A" strokeWidth="8" />

          {/* Rear Wheel Set */}
          <circle cx="189" cy="210" r="28" fill="#0F172A" />
          <circle cx="189" cy="210" r="14" fill="#E2E8F0" />
          <circle cx="189" cy="210" r="5" fill="#0F172A" />

          {/* Front Wheel Set */}
          <circle cx="324" cy="210" r="28" fill="#0F172A" />
          <circle cx="324" cy="210" r="14" fill="#E2E8F0" />
          <circle cx="324" cy="210" r="5" fill="#0F172A" />
        </g>

        {/* 
          3. Middle Banner (Foreground) 
        */}
        <g id="banner">
          {/* Folded Ribbon Tails */}
          <path d="M 75 235 L 25 245 L 45 265 L 25 285 L 75 295 Z" fill="#EA580C" stroke="#0F172A" strokeWidth="8" strokeLinejoin="round" />
          <path d="M 425 235 L 475 245 L 455 265 L 475 285 L 425 295 Z" fill="#EA580C" stroke="#0F172A" strokeWidth="8" strokeLinejoin="round" />

          {/* 3D Drop Shadow Effect for Banner */}
          <rect x="65" y="240" width="370" height="70" fill="#0F172A" rx="4" />
          
          {/* Main White Banner Surface */}
          <rect x="65" y="230" width="370" height="70" fill="#FFFFFF" stroke="#0F172A" strokeWidth="10" rx="4" strokeLinejoin="round" />

          {/* Banner Text (RECOVERO) */}
          <text 
             x="250" 
             y="278" 
             fontFamily="'Montserrat', system-ui, sans-serif" 
             fontWeight="900" 
             fontSize="52" 
             fill="#0F172A" 
             textAnchor="middle" 
             letterSpacing="5"
          >
            RECOVERO
          </text>
        </g>

        {/* 
          4. Bottom Curved Text
        */}
        <g id="curved-text">
          {/* Invisible Path for Text to Follow */}
          <path id="bottomCurve" d="M 60,250 A 190,190 0 0,0 440,250" fill="none" />
          
          <text 
             fontFamily="'Montserrat', system-ui, sans-serif" 
             fontWeight="800" 
             fontSize="17" 
             fill="#0F172A" 
             letterSpacing="4"
          >
            <textPath href="#bottomCurve" startOffset="50%" textAnchor="middle">
              THE VEHICLE RECOVERY NETWORK
            </textPath>
          </text>
        </g>
      </svg>
    );
  }
);

RecoveroLogo.displayName = 'RecoveroLogo';

export default RecoveroLogo;
