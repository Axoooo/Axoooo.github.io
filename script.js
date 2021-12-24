let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
    .fromTo(".movingNelly", { y: -50 }, { y: 0, duration: 10 }, "-=10")
    .to(".content", 10, { top: "0%" }, "-=10")


let scene = new ScrollMagic.Scene({
        triggerElement: "section",
        duration: "300%",
        triggerHook: 0,
    })
    .setTween(timeline)
    .setPin("section")
    .addTo(controller);