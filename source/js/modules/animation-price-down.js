import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/all";

const START = 218;
const STEP = 0.1;

// const TR1 = "40px";
const TR2 = '40px';
const TR3 = '80px';
const TR4 = '120px';
const TR5 = '160px';
const TR6 = '190px';


gsap.registerPlugin(ScrollTrigger, CustomEase);

const initAnimationPriceDown = () => {

  const priceDownSection = document.querySelector('.price-down');

  if (!priceDownSection) {
    return;
  }

  const tl = gsap.timeline();


  // tl.to('#rec1', {scaleY: 1, y: TR1});
  tl.to('#rec2', {scaleY: 0.85, y: TR2, duration: 0.35, ease: 'back.out(1.7)' });
  tl.to('#rec3', {scaleY: 0.7, y: TR3, duration: 0.35, ease: 'back.out(1.7)'});
  tl.to('#rec4', {scaleY: 0.55, y: TR4, duration: 0.35, ease: 'back.out(1.7)'});
  tl.to('#rec5', {scaleY: 0.4, y: TR5, duration: 0.35, ease: 'back.out(1.7)'});
  tl.to('#rec6', {scaleY: 0.25, y: TR6, duration: 0.35, ease: 'back.out(1.7)'});
  tl.to('#arrow', {opacity: 1, scale: 1, duration: 0.25, ease: 'back.out(1.7)'});
  tl.to('#content', {opacity: 1, x: 0, duration: 0.5, ease: 'back.out(1.7)'})



  ScrollTrigger.create({
    animation: tl,
    trigger: priceDownSection,
    start: 'top center',
  })

}

export {initAnimationPriceDown };
