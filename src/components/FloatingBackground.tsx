import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingBackground({ active }: { active: boolean }) {
  interface FloatingItem {
    id: number;
    top: number;
    left: number;
    size: number;
    delay: number;
    duration: number;
  }
  const [items, setItems] = useState<FloatingItem[]>([]);

  useEffect(() => {
    if (active) {
      const isMobile = window.innerWidth < 1024;
      const count = isMobile ? 30 : 55;
      const newItems = Array.from({ length: count }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        size: 50 + Math.random() * 80,
        left: 100,
        delay: Math.random() * 15,
        duration: 20 + Math.random() * 20,
      }));
      setItems(newItems);


    } else {
      setItems([]);
    }
  }, [active]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed inset-0 overflow-hidden pointer-events-none z-50"
        >
          {items.map((item) => (
            <svg
              key={item.id}
              className="absolute animate-scroll-left"
              style={{
                top: `${item.top}%`,
                left: `${item.left}%`,
                height: `${item.size}px`,
                width: `${item.size}px`,
                animationDelay: `${item.delay}s`,
                animationDuration: `${item.duration}s`,
                fill: "currentColor",
              }}
              viewBox="0 0 93 39"
            >
              <path d="M0 25.2973V35.8378H3.17045V39H7.39773H89.8295V35.8378H93V21.0811H88.7727V17.9189H85.6023V13.7027H82.4318V10.5405H70.8068V14.7568H67.6364V17.9189H64.4659V13.7027H60.2386V7.37838H57.0682V4.21622H48.6136V0H35.9318V4.21622H28.5341V7.37838H24.3068V13.7027H21.1364V21.0811H17.9659V17.9189H6.34091V21.0811H3.17045V25.2973H0Z" />
            </svg>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );


}
