// Page Transition
// GSAP timeline function for click event
function pageTransition(destination) {
  gsap.to(".page-transition", {
      y: "0%",
      duration: 0.5, // Optional duration
      ease: "power2.inOut",
      onComplete: () => {
          window.location = destination;
      },
  });
}

// Page Transition
// Code for click event
  $(document).on("click", "a", function (e) {
    if (
      $(this).prop("hostname") === window.location.host &&
      $(this).attr("href").indexOf("#") === -1 &&
      $(this).attr("target") !== "_blank"
    ) {
      e.preventDefault();
      let destination = $(this).attr("href");

      // Call loaderOnLinkClick when a link is clicked
      pageTransition (destination);
    }
  });

// Page Transition
// On click of the back button
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  }

// Show/hide grid w/ Shift + G
$(document). keydown (function (e) {
	if (e. shiftKey && e. key === "G") {
		$(".grid-wrap").toggleClass("hide");
	}
});

// All Pages – Product List
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

// Home Page – Hero Images Scroll Up
$(".scroll-track.is-home_hero").each(function (index) {
  let triggerElement = $(this);
  let imageLeft = $(".hero-image_left");
  let imageRight = $(".hero-image_right");
  let imageCenter = $(".hero-image_center");

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
    y: "-15vh",
    duration: 1,
  });

  // Animate the right image
  tl.to(imageRight, {
    y: "-15vh",
    duration: 1,
  }, "<");

  // Animate the center image
  tl.to(imageCenter, {
    y: "-15vh",
    duration: 1,
  }, "<"); 
});

// Home Page Navigation – Hover In/Out
$(".navigation").hover(
  function () {
    // Add the class .is-active on hover
    $(this).addClass("is-white");
  },
  function () {
    // Only remove the class .is-active on hover out if it's the homepage
    if (window.location.pathname === "/" || window.location.pathname === "/index.html") {
      let hasScrollTriggered = $(this).data("scroll-triggered") === true;
      if (!hasScrollTriggered) {
        $(this).removeClass("is-white");
      }
    }
  }
);

// Shop Page Navigation – Hover In/Out 
function ensureShopPageActive() {
  if (window.location.pathname.includes("shop")) {
    $(".navigation").addClass("is-white"); // Add .is-active when on the About page
    $(".navigation").hover(
      function () {
        $(this).addClass("is-white"); // Add the class on hover
      },
      function () {
        // Do nothing on hover out for Shop page
      }
    );
  }
}

// Call the function to handle Shop page behavior
ensureShopPageActive();

// About Page Navigation – Hover In/Out 
function ensureAboutPageActive() {
  if (window.location.pathname.includes("about")) {
    // Add 'is-blue' class to the navigation
    $(".navigation").addClass("is-blue");
    
    // Update background color for each .text-link_line.is-nav
    $(".text-link_line.is-nav").each(function () {
      $(this).css("background-color", "#b9d5e6");
    });

    // Handle hover state for .navigation
    $(".navigation").hover(
      function () {
        $(this).addClass("is-blue");
      },
      function () {
        // Do nothing on hover out
      }
    );
  }
}

// Call the function to handle About page behavior
ensureAboutPageActive();

// Contact Page Navigation – Hover In/Out 
function ensureContactPageActive() {
  if (window.location.pathname.includes("contact")) {
    // Add 'is-blue' class to the navigation
    $(".navigation").addClass("is-green");
    
    // Update background color for each .text-link_line.is-nav
    $(".text-link_line.is-nav").each(function () {
      $(this).css("background-color", "#b9d5e6");
    });

    // Handle hover state for .navigation
    $(".navigation").hover(
      function () {
        $(this).addClass("is-green");
      },
      function () {
        // Do nothing on hover out
      }
    );
  }
}

// Call the function to handle About page behavior
ensureContactPageActive();



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
      targetElement.addClass("is-white");
      targetElement.data("scroll-triggered", true); // Mark as triggered
    },
    onLeaveBack: () => {
      targetElement.removeClass("is-white");
      targetElement.data("scroll-triggered", false); // Unmark as triggered
    },
  });
});

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
    delay: 0.2,
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
$(".btn_wrap").each(function (index, btnWrap) {
  // Get child elements of the current button wrapper
  let bgPanel = $(btnWrap).children().eq(0);
  let fgPanel = $(btnWrap).children().eq(1);

  // Create a timeline for this button
  let tl = gsap.timeline({ paused: true, defaults: { duration: 0.1, ease: "none" } });
  tl.set(bgPanel, { opacity: 1 });
  tl.fromTo(fgPanel, { clipPath: "polygon(100% 0%, 100% 100%, 100% 100%, 0% 100%, 0% 0%)" }, { clipPath: "polygon(100% 0%, 100% 0%, 0% 100%, 0% 100%, 0% 0%)" });
  tl.fromTo(bgPanel, { clipPath: "polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%)" }, { clipPath: "polygon(100% 0%, 100% 100%, 0% 100%, 0% 100%, 100% 0%)" }, "<");
  tl.to(fgPanel, { clipPath: "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%)" });
  tl.to(bgPanel, { clipPath: "polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%, 0% 0%)" }, "<");

  // Attach hover events to the current button
  $(btnWrap).on("mouseenter", function () {
    tl.play();
  });

  $(btnWrap).on("mouseleave", function () {
    tl.reverse();
  });
});


// Swiper Slider
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-marquee', {
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
});

// Product Page + - Buttons
$('.input-plus').click(function() {
  var $input = $(this).parents('.quantity-wrap').find('.input-number');
  var val = parseInt($input.val(), 10);
  $input.val(val + 1);
});

$('.input-minus').click(function() {
  var $input = $(this).parents('.quantity-wrap').find('.input-number');
  var val = parseInt($input.val(), 10);
  $input.val(Math.max(val - 1, 1));
})

// GSAP Split Text
// Home Loader Animation – Home Page Hero Text
const splitTextTimeline = gsap.timeline({ paused: true });
const split = new SplitText("#hero", { type: "words" });

splitTextTimeline.from(split.words, {
  duration: 1,
  y: "6rem",
  autoAlpha: 0,
  stagger: 0.05,
  ease: "power2.out"
});

// GSAP Split Text
// All Pages – Footer Logo SplitText
const footerSplitTextTimeline = gsap.timeline({
  paused: true, // Keeps the timeline paused initially
  scrollTrigger: {
    trigger: ".text-footer-logo", // Element to trigger the animation
    start: "top 100%", // When top of element is at 100% of viewport
    toggleActions: "restart none none none", // Restart on enter, do nothing on leave
    onLeave: () => footerSplitTextTimeline.pause(0), // Pause and reset on leave
    onEnter: () => footerSplitTextTimeline.play(0), // Replay from start on re-enter
  },
});

const footerSplit = new SplitText(".text-footer-logo", { type: "chars" });

footerSplitTextTimeline.from(footerSplit.chars, {
  duration: 1,
  y: 100,
  opacity: 0,
  stagger: 0.05,
  ease: "power2.out",
});

// GSAP Split Text
// About Page - About Us Text In
const aboutSplit = new SplitText(".about-scroll-text", { type: "chars, words" });

// ScrollTrigger animation
gsap.fromTo(
  aboutSplit.chars,
  {
    opacity: 0.3,  // Starting opacity
  },
  {
    opacity: 1,  // Ending opacity
    duration: 2,  // Adjust for smoothness
    stagger: 0.05,  // Delays between character animations
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about-scroll-text", // Element to trigger the animation
      start: "top 80%", // Start when top of element hits 80% of viewport
      end: "bottom 20%", // End when bottom of element hits 20% of viewport
      scrub: true, // Smooth scrubbing effect
    },
  }
);

// GSAP Split Text
// About Page - Our Brand Text In
const brandSplit = new SplitText(".brand-scroll-text", { type: "chars, words" });

// ScrollTrigger animation
gsap.fromTo(
  brandSplit.chars,
  {
    opacity: 0.3,  // Starting opacity
  },
  {
    opacity: 1,  // Ending opacity
    duration: 2,  // Adjust for smoothness
    stagger: 0.05,  // Delays between character animations
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".brand-scroll-text", // Element to trigger the animation
      start: "top 80%", // Start when top of element hits 80% of viewport
      end: "bottom 20%", // End when bottom of element hits 20% of viewport
      scrub: true, // Smooth scrubbing effect
    },
  }
);

// GSAP Split Text
// Shop Page Loader Animation – Shop Hero Text
const shopSplitTextTimeline = gsap.timeline({ paused: true });
const shopSplit = new SplitText("#shop-hero", { type: "lines" });

shopSplitTextTimeline.from(shopSplit.lines, {
  duration: 1,
  y: "5rem",
  autoAlpha: 0,
  stagger: 0.05,
  ease: "power2.out"
});

// GSAP Split Text
// Prodcut Page Loader Animation – Description
const productDescriptionSplitText = gsap.timeline({ paused: true });
const productDescriptionSplit = new SplitText(".product-description", { type: "lines" });

productDescriptionSplitText.from(productDescriptionSplit.lines, {
  duration: 0.5,
  y: "1.125rem",
  autoAlpha: 0,
  stagger: 0.05,
  ease: "power2.out"
});

// GSAP Split Text
// Product Page Loader Animation – Title
const productTitleSplitText = gsap.timeline({ paused: true });
const productTitleSplit = new SplitText("#product-title", { type: "chars" });

productTitleSplitText.from(productTitleSplit.chars, {
  duration: 0.5,
  y: "3rem",
  autoAlpha: 0,
  stagger: 0.02,
  ease: "power2.out"
});

// Product Price – Remove Unwanted Spaces
setTimeout(() => {
  document.querySelectorAll('.product-price').forEach(element => {
    element.textContent = element.textContent.replace(/\s/, ''); // Removes the first space only
  });
}, 2000); // Delay of 2 seconds


// Prodcut Page – Footer Scroll In, Bottom Nav Scroll Out
gsap.to(".product-nav-bottom", {
  y: "100%", // Moves it down by 100% of its height
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".footer",
    start: "top bottom", // When the top of .footer hits the bottom of the viewport
    toggleActions: "play reverse play reverse", // Play on enter, reverse on leave
  }
});

// Prodcut Page Loader – Tags
const tags = gsap.utils.toArray(".product-tag-wrap .tag");

const tagAnimation = gsap.timeline({ paused: true });

tagAnimation.fromTo(
  tags,
  { opacity: 0 },
  {
    opacity: 1,
    duration: 0.5,
    stagger: 0.05,
    ease: "power2.out"
  }
);

// Prodcut Page Loader – Tiny Text
const feature = gsap.utils.toArray(".product-feature-wrap .product-feature");

const featureAnimation = gsap.timeline({ paused: true });

featureAnimation.fromTo(
  feature,
  { opacity: 0 },
  {
    opacity: 1,
    duration: 0.5,
    stagger: 0.05,
    ease: "power2.out"
  }
);


// Text Link Underline Animation – Hover In/Out
// Initialize on page load
$(".text-link.w--current .text-link_line").each(function () {
  gsap.set($(this), { x: "0%" });
});

// Text Link – Hover In/Out
$(".text-link").hover(
  function () {
    const $line = $(this).find(".text-link_line");

    // Kill any ongoing animations on hover in
    gsap.killTweensOf($line);

    if ($(this).hasClass("w--current")) {
      // Hover in for .w--current: Move to 101%
      gsap.to($line, { x: "101%", duration: 0.5, ease: "power2.out" });
      gsap.to($line, { x: "-101%", duration: 0.01, }, ">");
      gsap.to($line, { x: "0%", duration: 0.5, ease: "power2.out" }, ">");

    } else {
      // Standard hover in: Reset x to -101%, then animate to 0%
      gsap.to($line, { x: "0%", duration: 0.5, ease: "power2.out" });
      gsap.to($line, { x: "100%", duration: 0.5, ease: "power2.out" }, ">");
      gsap.to($line, { x: "-101%", duration: 0, }, ">");
    }
  },
  function () {
    const $line = $(this).find(".text-link_line");

    if ($(this).hasClass("w--current")) {
      // Hover out for .w--current:
      // No Animation
    } else {
      // Standard hover out: Animate to 101%, then reset to -101%
      // No Animation
    }
  }
);













