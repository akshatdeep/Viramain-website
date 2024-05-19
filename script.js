function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });

  // GSAP PARALLAX - INDIVIDUAL ELEMENTS (while sharing class)

  // get sections
  var parallaxElements = Array.prototype.slice.call(
    document.querySelectorAll("section")
  );
  var self = this;

  // get box or parallax element inside each section
  parallaxElements.forEach(function (self) {
    var boxTop = self.querySelectorAll(".parallaxTop");
    var box = self.querySelectorAll(".parallax");

    // animate boxes at top of page (section already in viewport)
  });

  ////////////////////////////////////

  // get pinned boxes and box width

  // console.log('pin box width', pinBoxWidth);
  // console.log('pin wrap total width', pinWrapWidth);
  // console.log('horizontal scroll', horizontalScrollLength);

  // Pinning and horizontal scrolling

  ////////////////////////////////////

  //other animations

  //timeline test

  // tl.from("#box7", {scale: 0.3, x: "-100%", autoAlpha: 0})
  //   .from("#box8", {autoAlpha: 0, ease: "power2"})
  // .to("#box7", {scale: 1.2, ease: "bounce"})

  //toggle test
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

loco();

// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();

function dom(){
  const icon = document.querySelector(".ri-menu-line");
const menudiv = document.querySelector(".menu-page");
const cross = document.querySelector(".ri-close-large-fill");

icon.addEventListener("click", () => {
  menudiv.style.right = "0%";
});

cross.addEventListener("click", () => {
  menudiv.style.right = "-40%";
});

icon.addEventListener("click", () => {
  icon.style.opacity = "0%";
});

cross.addEventListener("click", () => {
  icon.style.opacity = "100%";
});
}
dom()


function page1animation() {
  const tl1 = gsap.timeline();

  tl1.from(".left p", {
    x: -30,
    opacity: 0,
    duration: 1,
  });

  tl1.from(".left h1", {
    x: -30,
    opacity: 0,
    duration: 1,
  });

  tl1.from(".left button", {
    x: -30,
    opacity: 0,
    duration: 1,
  });
}
page1animation();

function page2animation() {
  const tl2 = gsap.timeline({
    scrollTrigger: {
      scroller: ".main",
      trigger: ".page2",
      // markers:true,
      start: "top 90%",
      end: "top 10%",
      scrub: 2,
    },
  });

  tl2.from(".page2-left .left-img1", {
    y: -40,
    opacity: 0,
    duration: 2,
  });

  tl2.from(".page2-left .left-img2", {
    y: 40,
    opacity: 0,
    duration: 2,
  });

  tl2.from(".page2-right p", {
    y: 40,
    opacity: 0,
    duration: 2,
  });

  tl2.from(".page2-right h1", {
    y: 40,
    opacity: 0,
    duration: 1,
  });

  tl2.from(".page2-right h5", {
    y: 40,
    opacity: 0,
    duration: 1,
  });

  tl2.from(".page2-right h6", {
    y: 40,
    opacity: 0,
    duration: 1,
  });

  tl2.from(".page2-right button", {
    y: 40,
    opacity: 0,
    duration: 1,
  });
}
page2animation();

function page3animation() {
  const tl3 = gsap.timeline({
    scrollTrigger: {
      scroller: ".main",
      trigger: ".page3",
      // markers:true,
      start: "top 50%",
      end: "top 10%",
      scrub: true,
    },
  });

  tl3.from(".page3-top p", {
    x: -40,
    opacity: 0,
    duration: 1,
  });

  tl3.from(".page3-top h1", {
    x: -40,
    opacity: 0,
    duration: 1,
  });

  tl3.from(".page3-bottom .page3card", {
    x: -40,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
  });
}
page3animation();

function page4animation(){
  const tl4 = gsap.timeline({scrollTrigger:{
    scroller:".main",
    trigger:".page4",
    // markers:true,
    start:"top -10%",
    end:"top -40%",
    scrub:true
  }});
  
  tl4.from(".page4img1 h2", {
    y: 50,
    duration: 2,
  });
  
  tl4.from(".page4img2 h2", {
    y: 50,
    duration: 2,
  });
  
  tl4.from(".page4img3 h2", {
    y: 50,
    duration: 2,
  });
  
}
page4animation()
