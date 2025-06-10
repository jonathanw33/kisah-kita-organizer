"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Users, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnimatedGradientBackgroundProps {
  startingGap?: number;
  Breathing?: boolean;
  gradientColors?: string[];
  gradientStops?: number[];
  animationSpeed?: number;
  breathingRange?: number;
  containerStyle?: React.CSSProperties;
  containerClassName?: string;
  topOffset?: number;
}

const AnimatedGradientBackground: React.FC<AnimatedGradientBackgroundProps> = ({
  startingGap = 125,
  Breathing = true,
  gradientColors = [
    "#FFFFFF",
    "#F7F9F5",
    "#EEF2EA",
    "#DDE6D6",
    "#C3D1B7",
    "#9DAF89",
    "#7A8B6F"
  ],
  gradientStops = [35, 50, 60, 70, 80, 90, 100],
  animationSpeed = 0.02,
  breathingRange = 5,
  containerStyle = {},
  topOffset = 0,
  containerClassName = "",
}) => {
  if (gradientColors.length !== gradientStops.length) {
    throw new Error(
      `GradientColors and GradientStops must have the same length.
   Received gradientColors length: ${gradientColors.length},
   gradientStops length: ${gradientStops.length}`
    );
  }

  const containerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    let animationFrame: number;
    let width = startingGap;
    let directionWidth = 1;

    const animateGradient = () => {
      if (width >= startingGap + breathingRange) directionWidth = -1;
      if (width <= startingGap - breathingRange) directionWidth = 1;

      if (!Breathing) directionWidth = 0;
      width += directionWidth * animationSpeed;

      const gradientStopsString = gradientStops
        .map((stop, index) => `${gradientColors[index]} ${stop}%`)
        .join(", ");

      const gradient = `radial-gradient(${width}% ${width + topOffset}% at 50% 20%, ${gradientStopsString})`;

      if (containerRef.current) {
        containerRef.current.style.background = gradient;
      }

      animationFrame = requestAnimationFrame(animateGradient);
    };

    animationFrame = requestAnimationFrame(animateGradient);

    return () => cancelAnimationFrame(animationFrame);
  }, [startingGap, Breathing, gradientColors, gradientStops, animationSpeed, breathingRange, topOffset]);

  return (
    <motion.div
      key="animated-gradient-background"
      initial={{
        opacity: 0,
        scale: 1.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 2,
          ease: [0.25, 0.1, 0.25, 1],
        },
      }}
      className={`absolute inset-0 overflow-hidden ${containerClassName}`}
    >
      <div
        ref={containerRef}
        style={containerStyle}
        className="absolute inset-0 transition-transform"
      />
    </motion.div>
  );
};

interface TextRotateProps {
  texts: string[];
  rotationInterval?: number;
  initial?: any;
  animate?: any;
  exit?: any;
  animatePresenceMode?: "wait" | "sync" | "popLayout";
  animatePresenceInitial?: boolean;
  staggerDuration?: number;
  staggerFrom?: "first" | "last" | "center" | number | "random";
  transition?: any;
  loop?: boolean;
  auto?: boolean;
  splitBy?: "words" | "characters" | "lines" | string;
  onNext?: (index: number) => void;
  mainClassName?: string;
  splitLevelClassName?: string;
  elementLevelClassName?: string;
}

const TextRotate: React.FC<TextRotateProps> = ({
  texts,
  transition = { type: "spring", damping: 25, stiffness: 300 },
  initial = { y: "100%", opacity: 0 },
  animate = { y: 0, opacity: 1 },
  exit = { y: "-120%", opacity: 0 },
  animatePresenceMode = "wait",
  animatePresenceInitial = false,
  rotationInterval = 2000,
  staggerDuration = 0,
  staggerFrom = "first",
  loop = true,
  auto = true,
  splitBy = "characters",
  onNext,
  mainClassName,
  splitLevelClassName,
  elementLevelClassName,
}) => {
  const [currentTextIndex, setCurrentTextIndex] = React.useState(0);

  const splitIntoCharacters = (text: string): string[] => {
    // Simple fallback - just split by characters
    return Array.from(text);
  };

  const elements = React.useMemo(() => {
    const currentText = texts[currentTextIndex];
    if (splitBy === "characters") {
      const text = currentText.split(" ");
      return text.map((word, i) => ({
        characters: splitIntoCharacters(word),
        needsSpace: i !== text.length - 1,
      }));
    }
    return splitBy === "words"
      ? currentText.split(" ")
      : splitBy === "lines"
        ? currentText.split("\n")
        : currentText.split(splitBy);
  }, [texts, currentTextIndex, splitBy]);

  const getStaggerDelay = React.useCallback(
    (index: number, totalChars: number) => {
      const total = totalChars;
      if (staggerFrom === "first") return index * staggerDuration;
      if (staggerFrom === "last") return (total - 1 - index) * staggerDuration;
      if (staggerFrom === "center") {
        const center = Math.floor(total / 2);
        return Math.abs(center - index) * staggerDuration;
      }
      if (staggerFrom === "random") {
        const randomIndex = Math.floor(Math.random() * total);
        return Math.abs(randomIndex - index) * staggerDuration;
      }
      return Math.abs((staggerFrom as number) - index) * staggerDuration;
    },
    [staggerFrom, staggerDuration]
  );

  const handleIndexChange = React.useCallback((newIndex: number) => {
    setCurrentTextIndex(newIndex);
    onNext?.(newIndex);
  }, [onNext]);

  const next = React.useCallback(() => {
    const nextIndex = currentTextIndex === texts.length - 1
      ? (loop ? 0 : currentTextIndex)
      : currentTextIndex + 1;
    
    if (nextIndex !== currentTextIndex) {
      handleIndexChange(nextIndex);
    }
  }, [currentTextIndex, texts.length, loop, handleIndexChange]);

  React.useEffect(() => {
    if (!auto) return;
    const intervalId = setInterval(next, rotationInterval);
    return () => clearInterval(intervalId);
  }, [next, rotationInterval, auto]);

  return (
    <motion.span
      className={cn("flex flex-wrap whitespace-pre-wrap", mainClassName)}
      layout
      transition={transition}
    >
      <span className="sr-only">{texts[currentTextIndex]}</span>

      <motion.div
        key={currentTextIndex}
        className={cn(
          "flex flex-wrap",
          splitBy === "lines" && "flex-col w-full"
        )}
        layout
        aria-hidden="true"
      >
        {(splitBy === "characters"
          ? (elements as any[])
          : (elements as string[]).map((el, i) => ({
              characters: [el],
              needsSpace: i !== elements.length - 1,
            }))
        ).map((wordObj: any, wordIndex: number, array: any[]) => {
          const previousCharsCount = array
            .slice(0, wordIndex)
            .reduce((sum, word) => sum + word.characters.length, 0);

          return (
            <span
              key={wordIndex}
              className={cn("inline-flex", splitLevelClassName)}
            >
              {wordObj.characters.map((char: string, charIndex: number) => (
                <motion.span
                  initial={initial}
                  animate={animate}
                  exit={exit}
                  key={charIndex}
                  transition={{
                    ...transition,
                    delay: getStaggerDelay(
                      previousCharsCount + charIndex,
                      array.reduce(
                        (sum, word) => sum + word.characters.length,
                        0
                      )
                    ),
                  }}
                  className={cn("inline-block", elementLevelClassName)}
                >
                  {char}
                </motion.span>
              ))}
              {wordObj.needsSpace && (
                <span className="whitespace-pre"> </span>
              )}
            </span>
          );
        })}
      </motion.div>
    </motion.span>
  );
};

interface KisahKitaHeroProps {
  className?: string;
}

const KisahKitaHero: React.FC<KisahKitaHeroProps> = ({ className }) => {
  const eventTypes = [
    "Weddings",
    "Birthdays",
    "Corporate Events", 
    "Anniversaries",
    "Graduations",
    "Baby Showers"
  ];

  return (
    <section className={cn("relative min-h-screen flex items-center justify-center overflow-hidden", className)}>
      {/* Animated Gradient Background */}
      <AnimatedGradientBackground
        gradientColors={[
          "#FFFFFF",
          "#F7F9F5",
          "#EEF2EA",
          "#DDE6D6",
          "#C3D1B7",
          "#9DAF89",
          "#7A8B6F"
        ]}
        Breathing={true}
        startingGap={120}
        breathingRange={8}
        topOffset={10}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Badge 
              variant="outline" 
              className="bg-white/80 backdrop-blur-sm border-[#9DAF89]/50 text-gray-700 hover:bg-[#9DAF89]/10 transition-colors"
            >
              <Star className="w-3 h-3 mr-1 text-[#9DAF89]" />
              Professional Event Organizing
              <ArrowRight className="w-3 h-3 ml-1" />
            </Badge>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              <span className="block">Kisah Kita</span>
              <span className="block text-[#9DAF89]">Organizer</span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-medium"
          >
            Organizing the Story of Your Life
          </motion.div>

          {/* Rotating Event Types */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg sm:text-xl text-gray-600 flex items-center gap-2"
          >
            <span>Specializing in</span>
            <TextRotate
              texts={eventTypes}
              mainClassName="text-[#9DAF89] font-semibold min-w-[140px] justify-start"
              rotationInterval={2500}
              staggerDuration={0.02}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl leading-relaxed"
          >
            From intimate gatherings to grand celebrations, we craft unforgettable experiences 
            that tell your unique story. Every detail matters, every moment counts, and every 
            event becomes a cherished memory.
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 pt-8"
          >
            <Button
              size="lg"
              className="bg-[#9DAF89] hover:bg-[#8A9B7A] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Plan Your Event
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-[#9DAF89] text-[#9DAF89] hover:bg-[#9DAF89] hover:text-white backdrop-blur-sm font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                document.getElementById('gallery')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              <Users className="w-5 h-5 mr-2" />
              View Our Work
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="grid grid-cols-3 gap-8 pt-12 text-center"
          >
            <div className="space-y-2">
              <div className="text-2xl sm:text-3xl font-bold text-[#9DAF89]">500+</div>
              <div className="text-sm text-gray-500">Events Organized</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl sm:text-3xl font-bold text-[#9DAF89]">5 Years</div>
              <div className="text-sm text-gray-500">Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl sm:text-3xl font-bold text-[#9DAF89]">100%</div>
              <div className="text-sm text-gray-500">Client Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KisahKitaHero;
