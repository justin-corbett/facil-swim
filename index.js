// Show/hide grid w/ Shift + G
$(document). keydown (function (e) {
	if (e. shiftKey && e. key === "G") {
		$(".grid-wrap").toggleClass("hide");
	}
});

// Initialize Lenis
const lenis = new Lenis();

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Hover animation using GSAP
gsap.utils.toArray('.product_item-link').forEach(wrapper => {
  // On hover
  wrapper.addEventListener('mouseenter', () => {
    gsap.to(wrapper.querySelector('.product_image'), { 
      opacity: 0, 
      duration: 0.5, 
      ease: ""
    });

    gsap.to(wrapper.querySelector('.product_image-hover'), { 
      scale: 1, 
      duration: 0.5, 
      ease: ""
    });
  });

  // On hover out
  wrapper.addEventListener('mouseleave', () => {
    gsap.to(wrapper.querySelector('.product_image'), { 
      opacity: 1, 
      duration: 0.5, 
      ease: ""
    });

    gsap.to(wrapper.querySelector('.product_image-hover'), { 
      scale: 1.1, 
      duration: 0.5, 
      ease: ""
    });
  });
});

// Home hero fixed images move up
$(".scroll-track.is-home_hero").each(function (index) {
  let triggerElement = $(this);
  let imageLeft = $(".hero-image_left");
  let imageRight = $(".hero-image_right");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top top", // trigger element starts at the top of the viewport
      end: "bottom bottom", // trigger element ends at the bottom of the viewport
      scrub: 1, // smooth scrubbing effect
    },
  });

  // Animate the left image
  tl.to(imageLeft, {
    scale: 1,
    y: "-15vh",
    duration: 1,
  });

  // Animate the right image
  tl.to(imageRight, {
    scale: 1,
    y: "-15vh",
    duration: 1,
  }, "<"); // "<" makes the second animation start at the same time as the first
});

$(".navigation").hover(
  function () {
    // Add the class .is-active on hover
    $(this).addClass("is-active");
  },
  function () {
    // Remove the class .is-active on hover out only if it wasn't already there before hover
    if (!$(this).is(":hover")) {
      let hasScrollTriggered = $(this).data("scroll-triggered") === true;
      if (!hasScrollTriggered) {
        $(this).removeClass("is-active");
      }
    }
  }
);

// Manage the scroll-triggered .is-active state
$(".scroll-track.is-home_hero").each(function () {
  let triggerElement = $(this);
  let targetElement = $(".navigation");

  ScrollTrigger.create({
    trigger: triggerElement,
    start: "25% top",
    end: "25% top",
    scrub: 1,
    onEnter: () => {
      targetElement.addClass("is-active");
      targetElement.data("scroll-triggered", true); // Mark as triggered
    },
    onLeaveBack: () => {
      targetElement.removeClass("is-active");
      targetElement.data("scroll-triggered", false); // Unmark as triggered
    },
  });
});





// Loader And Page Transition Start

// GSAP timeline function for pageload
function loaderOnPageLoad() {
 
  // Create a GSAP timeline
  let tl = gsap.timeline();

   // Stops flicker on homepage
   gsap.set(".section-home-services", { display: "none" });


  // Add animations to the timeline
  tl.to(".logo-loader", {
      y: "0%",
      duration: 0.4,
      delay: 0.2,
      ease: 'power1.out',
      onComplete: () => {
          lenis.scrollTo('#top', {
              onComplete: () => {
                lenis.stop(); // Stops the scroll animation
              }
            });
      }
  }, "<+0.3")
    
    .to(".loader_background-gradient-1", {
      y: "-100%",
      duration: 1.5,
      delay: 0.8,
      ease: 'power2.out',
    })
    .to(".loader_background-gradient-2", {
      y: "-100%",
      duration: 1.5,
      delay: 0,
      ease: 'power2.out',
    }, "<+0.2")
    .to(".loader_background-gradient-3", {
      y: "-100%",
      duration: 1.5,
      delay: 0,
      ease: 'power2.out',
    }, "<+0.2")
    .to(".loader_background-gradient-4", {
      y: "-100%",
      duration: 1.5,
      delay: 0,
      ease: 'power2.out',
    }, "<+0.2")
    .to(".loader_background", {
      y: "-100%",
      duration: 1.5,
      delay: 0,
      ease: 'power2.out',
      onComplete: () => {
          gsap.set(".loader", { display: "none" });
          }
    }, "<+0.3")
    .to(".logo-loader", {
      y: "-100%",
      duration: 0.2,
      delay: 0,
      ease: 'power1.out',
      onComplete: () => {
          lenis.start()
          gsap.set(".section-home-services", { display: "block" });
          }
    }, "<")
    

  // Return the timeline
  return tl;
}

// GSAP timeline function for click event
function loaderOnLinkClick(destination) {
  gsap.set(".loader", { display: "block" });
  gsap.fromTo(
    ".loader_background", {
      y: "100%"
    }, {
      y: "0%",
      duration: 0.5,
      ease: 'power2.out',
      onComplete: () => {
        window.location = destination;
      }
    }
  );
}

// Call loaderOnPageLoad when the page loads
$(document).ready(function () {
  loaderOnPageLoad();

// Code for click event
  $(document).on("click", "a", function (e) {
    if (
      $(this).prop("hostname") === window.location.host &&
      $(this).attr("href").indexOf("#") === -1 &&
      $(this).attr("target") !== "_blank"
    ) {
      e.preventDefault();
      let destination = $(this).attr("href");
      gsap.set(".loader", { display: "block" });

      // Call loaderOnLinkClick when a link is clicked
      loaderOnLinkClick(destination);
    }
  });

// On click of the back button
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  }
});

// Loader And Page Transition End

// Horizontal rule 
$(".horizontal-rule").each(function (index, element) {
  let triggerElement = $(this);
  let targetElement = $(element);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top bottom",
    },
  });
  tl.from(targetElement, {
    width: "0%",
    duration: 1,
    delay: 0.1,
    ease: "power1.out",
  });
});

// Scroll to top on page refresh
document.addEventListener("DOMContentLoaded", function() {
  const scrollTopButton = document.querySelector('.scroll-top');
  
  if (scrollTopButton) {
    const clickEvent = new Event('click');
    scrollTopButton.dispatchEvent(clickEvent);
    
    
  }
});

// Footer back to top botton
document.querySelector('.text-link.is-back_to_top').addEventListener('click', function() {
  lenis.scrollTo('#top');
});


// Page refresh on resize
// Define breakpoints
const breakpoints = [479, 767, 991, 1239, 1439, 1919];

// Store the initial window width
let initialWidth = window.innerWidth;

// Function to check if the width crosses any breakpoints
function shouldRefresh(newWidth) {
  for (let breakpoint of breakpoints) {
    if ((initialWidth <= breakpoint && newWidth > breakpoint) ||
        (initialWidth > breakpoint && newWidth <= breakpoint)) {
      return true;
    }
  }
  return false;
}

// Add event listener for resize
window.addEventListener('resize', function () {
  let newWidth = window.innerWidth;
  if (shouldRefresh(newWidth)) {
    window.location.reload();
  }
});

// Copyright Year Auto-Update
const currentYear = new Date().getFullYear();
$(`[data="year"]`).html(currentYear);

// Button hover
$(".btn_wrap").each(function (index) {
  let bgPanel = $(this).children().eq(0);
  let fgPanel = $(this).children().eq(1);

  let tl = gsap.timeline({ paused: true, defaults: { duration: 0.1, ease: "none" } });
  tl.set(bgPanel, { opacity: 1 });
  tl.fromTo(fgPanel, { clipPath: "polygon(100% 0%, 100% 100%, 100% 100%, 0% 100%, 0% 0%)" }, { clipPath: "polygon(100% 0%, 100% 0%, 0% 100%, 0% 100%, 0% 0%)" });
  tl.fromTo(bgPanel, { clipPath: "polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%)" }, { clipPath: "polygon(100% 0%, 100% 100%, 0% 100%, 0% 100%, 100% 0%)" }, "<");
  tl.to(fgPanel, { clipPath: "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%)" });
  tl.to(bgPanel, { clipPath: "polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%, 0% 0%)" }, "<");

  $(this).on("mouseenter", function () {
    tl.play();
  });
  $(this).on("mouseleave", function () {
    tl.reverse();
  });
});

// Swiper Slider
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const swiper = new Swiper(".swiper-marquee", {
  slidesPerView: 'auto',
  spaceBetween: '1.5rem',
  loop: true,
  speed: 4000,
  allowTouchMove: false,
  autoplay: prefersReducedMotion ? false : {
    delay: 1,
    disableOnInteraction: false,
  },
});
