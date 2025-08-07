import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Code, Coffee } from 'lucide-react';

interface EasterEggProps {
  isActive: boolean;
  onComplete: () => void;
}

const EasterEgg = ({ isActive, onComplete }: EasterEggProps) => {
  const [showMessage, setShowMessage] = useState(false);

  const messages = [
    "🎉 You found the secret!",
    "✨ Konami Code Master!",
    "🚀 Developer Level: Expert",
    "💫 Easter Egg Discovered!",
    "🎯 Achievement Unlocked!"
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  const handleAnimationComplete = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
      onComplete();
    }, 3000);
  };

  if (!isActive) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 pointer-events-none z-[200] flex items-center justify-center"
      >
        {/* Sparkle Animation Background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                opacity: 0, 
                scale: 0,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight
              }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                rotate: 360
              }}
              transition={{
                duration: 2,
                delay: Math.random() * 1,
                repeat: 2
              }}
              className="absolute"
            >
              <Sparkles className="h-6 w-6 text-primary" />
            </motion.div>
          ))}
        </div>

        {/* Central Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: [0, 1.2, 1], rotate: 360 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          onAnimationComplete={handleAnimationComplete}
          className="bg-card border border-primary rounded-full p-8 shadow-glow konami-easter-egg"
        >
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="flex items-center space-x-2"
          >
            <Code className="h-8 w-8 text-primary" />
            <Heart className="h-6 w-6 text-red-500" />
            <Coffee className="h-6 w-6 text-amber-500" />
          </motion.div>
        </motion.div>

        {/* Message */}
        <AnimatePresence>
          {showMessage && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.8 }}
              className="absolute bottom-1/4 bg-card border border-border rounded-2xl px-8 py-4 shadow-2xl pointer-events-auto"
            >
              <div className="text-center">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-2xl font-bold text-gradient mb-2"
                >
                  {randomMessage}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-muted-foreground"
                >
                  Thanks for exploring! 🎮 <br />
                  <span className="text-xs">Built with ❤️ by Emmanuel</span>
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Code Symbols */}
        <div className="absolute inset-0">
          {['{ }', '< />', '( )', '[ ]', '= >', '...'].map((symbol, i) => (
            <motion.div
              key={symbol}
              initial={{ 
                opacity: 0,
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 100
              }}
              animate={{ 
                opacity: [0, 1, 0],
                y: -100,
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 3,
                delay: i * 0.2,
                ease: "easeOut"
              }}
              className="absolute text-2xl font-mono text-primary/30 pointer-events-none"
            >
              {symbol}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default EasterEgg;