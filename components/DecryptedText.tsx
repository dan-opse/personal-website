"use client";

import { useEffect, useState, useRef } from "react";

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: "start" | "end" | "center";
  useOriginalCharsOnly?: boolean;
  className?: string;
  animateOn?: "view" | "hover";
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

export default function DecryptedText({
  text,
  speed = 40,
  maxIterations = 10,
  sequential = false,
  revealDirection = "start",
  useOriginalCharsOnly = false,
  className = "",
  animateOn = "view",
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);
  const hasAnimated = useRef(false);
  const [initialDelayPassed, setInitialDelayPassed] = useState(false);

  const getRandomChar = (originalChar: string) => {
    if (originalChar === " ") return " ";
    if (useOriginalCharsOnly) {
      const uniqueChars = Array.from(new Set(text.replace(/ /g, "")));
      return uniqueChars[Math.floor(Math.random() * uniqueChars.length)];
    }
    return CHARS[Math.floor(Math.random() * CHARS.length)];
  };

  const animate = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const chars = text.split("");
    const iterations = new Array(chars.length).fill(0);
    
    const interval = setInterval(() => {
      setDisplayText(
        chars
          .map((char, index) => {
            if (char === " ") return " ";
            
            if (sequential) {
              // Sequential reveal logic
              let targetIndex = index;
              if (revealDirection === "end") {
                targetIndex = chars.length - 1 - index;
              } else if (revealDirection === "center") {
                const mid = Math.floor(chars.length / 2);
                targetIndex = Math.abs(index - mid);
              }
              
              const adjustedIteration = iterations[targetIndex];
              if (adjustedIteration >= maxIterations) {
                return char;
              }
              iterations[targetIndex]++;
              return getRandomChar(char);
            } else {
              // Non-sequential (random) reveal
              if (iterations[index] >= maxIterations) {
                return char;
              }
              iterations[index]++;
              return getRandomChar(char);
            }
          })
          .join("")
      );

      // Check if all iterations are complete
      if (iterations.every((i) => i >= maxIterations)) {
        clearInterval(interval);
        setDisplayText(text);
        setIsAnimating(false);
      }
    }, speed);
  };

  // Intersection Observer for view animations
  useEffect(() => {
    if (animateOn !== "view") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [animateOn]);

  // Initial 1 second delay on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialDelayPassed(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (animateOn === "view" && isInView && !hasAnimated.current && initialDelayPassed) {
      hasAnimated.current = true;
      animate();
    }
  }, [isInView, animateOn, initialDelayPassed]);

  const handleHover = () => {
    if (animateOn === "hover" && initialDelayPassed) {
      hasAnimated.current = false;
      animate();
    }
  };

  return (
    <span
      ref={ref}
      className={className}
      onMouseEnter={handleHover}
      style={{ display: "inline-block", opacity: initialDelayPassed ? 1 : 0 }}
    >
      {displayText}
    </span>
  );
}
