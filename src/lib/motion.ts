// ============================================
// BIBLIOTECA DE ANIMAÇÕES MOTION PROFISSIONAL
// ============================================

// Fade In Up - Para elementos que sobem e aparecem
export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// Fade In Down - Para elementos que descem e aparecem
export const fadeInDown = {
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// Fade In Left - Para elementos que vêm da esquerda
export const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// Fade In Right - Para elementos que vêm da direita
export const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// Scale In - Para elementos que escalam e aparecem
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Stagger Container - Para容器 com múltiplos filhos
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

// Stagger rápido para cards
export const staggerFast = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      duration: 0.5
    }
  }
};

// Hover Scale - Para efeitos de hover
export const hoverScale = {
  scale: 1.05,
  transition: {
    duration: 0.3,
    ease: "easeOut"
  }
};

// Tap Scale - Para cliques
export const tapScale = {
  scale: 0.95,
  transition: {
    duration: 0.15
  }
};

// Card Hover - Para cards com múltiplos efeitos
export const cardHover = {
  scale: 1.02,
  y: -5,
  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
  transition: {
    duration: 0.3,
    ease: "easeOut"
  }
};

// Bounce In - Para elementos que "saltam" ao aparecer
export const bounceIn = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// Fade In - Para aparição simples
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8
    }
  }
};

// Image Reveal - Para revelação de imagens
export const imageReveal = {
  hidden: { scale: 1.2, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut"
    }
  }
};

// Text Reveal - Para revelação de texto letra por letra
export const textReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Slide Up - Para slides simples
export const slideUp = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};
