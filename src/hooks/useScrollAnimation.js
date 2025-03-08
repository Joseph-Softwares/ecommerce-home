import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = (ref) => {
  useGSAP(() => {
    gsap.from(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1,
        markers: false
      },
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power2.out'
    });
  }, [ref]);
};
