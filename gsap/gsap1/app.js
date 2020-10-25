const tween1 = gsap.timeline({
  delay: 0,
  defaults: {
    duration: 1,
    ease: 'none'
  }
});

tween1
  .from('.pizza-slice1', 4, {
    delay: 0.3,
    x: 60,
    y: -80,
    ease: Power3.easeInOut,
  })
  .from('.pizza-slice2', 4, {
    x: 120,
    y: -40,
    ease: Power3.easeInOut,
  }, "<")
  .from('.pizza-slice3', 4, {
    x: 120,
    y: 40,
    ease: Power3.easeInOut,
  }, "<")
  .from('.pizza-slice4', 4, {
    x: 60,
    y: 80,
    ease: Power3.easeInOut,
  }, "<")

const tween2 = gsap.timeline({
  delay: 0,
  defaults: {
    duration: 1,
    ease: 'none'
  }
});

tween2
  .from('.burger-piece1', 4, {
    y: -250,
    ease: Power3.easeInOut,
  }, '<')
  .from('.burger-piece2', 4, {
    y: -175,
    ease: Power3.easeInOut,
  }, '<')
  .from('.burger-piece3', 4, {
    y: -130,
    ease: Power3.easeInOut,
  }, '<')
  .from('.burger-piece4', 4, {
    y: -80,
    ease: Power3.easeInOut,
  }, '<')
  .from('.burger-piece5', 4, {
    y: -25,
    ease: Power3.easeInOut,
  }, '<')
  .from('.burger-piece6', 4, {
    y: 25,
    ease: Power3.easeInOut,
  }, '<')
  .from('.burger-piece7', 4, {
    y: 75,
    ease: Power3.easeInOut,
  }, '<')
  .from('.burger-piece8', 4, {
    y: 130,
    ease: Power3.easeInOut,
  }, '<')
  .from('.burger-piece9', 4, {
    y: 175,
    ease: Power3.easeInOut,
  }, '<')
  .from('.burger-piece10', 4, {
    y: 250,
    ease: Power3.easeInOut,
  }, '<')

// ScrollMagic
const controller1 = new ScrollMagic.Controller();
const controller2 = new ScrollMagic.Controller();

const scene1 = new ScrollMagic.Scene({
  triggerElement: '.full-pizza',
  duration: 1000,
  triggerHook: 0,
}).setTween(tween1)
  .addIndicators()
  .setPin('.full-pizza')
  .addTo(controller1);

const scene2 = new ScrollMagic.Scene({
  triggerElement: '.burger-exploded',
  duration: 1000,
  triggerHook: 0,
}).setTween(tween2)
  .addIndicators()
  .setPin('.burger-exploded')
  .addTo(controller2);