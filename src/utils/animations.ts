export const fadeIn = (delay: number = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: 'easeOut'
    }
  }
});

export const slideIn = (direction: 'left' | 'right', delay: number = 0) => ({
  hidden: { 
    opacity: 0, 
    x: direction === 'left' ? -50 : 50 
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay,
      duration: 0.5,
      ease: 'easeOut'
    }
  }
});

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};