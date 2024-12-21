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


// Home – Navigation – Hover
// Check if the current page is the homepage
if (window.location.pathname === "/" || window.location.pathname === "/index.html") {
  $(".navigation").hover(
    function () {
      // Add the .is-active class to .navigation and .text-link_line.is-nav on hover
      $(this).addClass("is-white");
      $(".text-link_line.is-nav").addClass("is-blue");
    },
    function () {
      // Remove the .is-active class on hover out only if it wasn't already there due to scroll trigger
      if (!$(this).is(":hover")) {
        let hasScrollTriggered = $(this).data("scroll-triggered") === true;
        if (!hasScrollTriggered) {
          $(this).removeClass("is-white");
          $(".text-link_line.is-nav").removeClass("is-blue");
        }
      }
    }
  );
}


// Home – Navigation
// Manage the scroll-triggered .is-white state
$(".scroll-track.is-home_hero").each(function () {
  let triggerElement = $(this);
  let targetElement = $(".navigation");

  ScrollTrigger.create({
    markers: true,
    trigger: triggerElement,
    start: "50% top",
    end: "50% top",
    scrub: 1,
    onEnter: () => {
      targetElement.addClass("is-white");
      targetElement.data("scroll-triggered", true); // Mark as triggered
      $(".text-link_line.is-nav").addClass("is-blue");
    },
    onLeaveBack: () => {
      targetElement.removeClass("is-white");
      targetElement.data("scroll-triggered", false); // Unmark as triggered
      $(".text-link_line.is-nav").removeClass("is-blue");
    },
  });
});

// Home – Navigation – Footer scroll into view
// Add the .is-green and .is-light_blue classes when .footer scrolls into view
// Check if the current page is the homepage
if (window.location.pathname === "/" || window.location.pathname === "/index.html") {
  let footerElement = $(".section-instagram");
  let navigationElement = $(".navigation");
  let navLineElement = $(".text-link_line.is-nav");

  ScrollTrigger.create({
    trigger: footerElement,
    start: "top bottom",
    end: "top bottom",
    scrub: 1,
    onEnter: () => {
      navigationElement.addClass("is-green");
      navLineElement.removeClass("is-blue");
      navLineElement.addClass("is-light_blue");
    },
    onLeaveBack: () => {
      navigationElement.removeClass("is-green");
      navLineElement.removeClass("is-light_blue");
      navLineElement.addClass("is-blue");
    },
  });
}

// Shop – Navigation – Footer scroll into view
// Add the .is-blue and .is-light_blue classes when .footer scrolls into view
// Check if the current page is the homepage
if (window.location.pathname.includes("shop")) {
  let footerElement = $(".section-instagram");
  let navigationElement = $(".navigation");
  let navLineElement = $(".text-link_line.is-nav");

  ScrollTrigger.create({
    trigger: footerElement,
    start: "top bottom",
    end: "top bottom",
    scrub: 1,
    onEnter: () => {
      
      navLineElement.removeClass("is-blue");
      navigationElement.removeClass("is-blue");
      navigationElement.addClass("is-blue");
      navLineElement.addClass("is-light_blue");
    },
    onLeaveBack: () => {
      navigationElement.removeClass("is-blue");
      navLineElement.removeClass("is-light_blue");
      navigationElement.addClass("is-white");
      navLineElement.addClass("is-blue");
    },
  });
}

// Product Page – Navigation – Footer scroll into view
// Add the .is-green and .is-light_blue classes when .footer scrolls into view
// Check if the current page is the homepage
if (window.location.pathname.includes("product")) {
  let footerElement = $(".section-instagram");
  let navigationElement = $(".navigation");
  let navLineElement = $(".text-link_line.is-nav");

  ScrollTrigger.create({
    trigger: footerElement,
    start: "top bottom",
    end: "top bottom",
    scrub: 1,
    onEnter: () => {
      navigationElement.addClass("is-blue");
      navLineElement.addClass("is-light_blue");
    },
    onLeaveBack: () => {
      navigationElement.removeClass("is-blue");
      navLineElement.removeClass("is-light_blue");
      navigationElement.addClass("is-white");
      navLineElement.addClass("is-blue");
    },
  });
}

// Terms and Conditions – Navigation – Footer scroll into view
// Add the .is-blue and .is-light_blue classes when .footer scrolls into view
// Check if the current page is the homepage
if (window.location.pathname.includes("terms-and-conditions")) {
  let footerElement = $(".section-instagram");
  let navigationElement = $(".navigation");
  let navLineElement = $(".text-link_line.is-nav");

  ScrollTrigger.create({
    trigger: footerElement,
    start: "top bottom",
    end: "top bottom",
    scrub: 1,
    onEnter: () => {
      navigationElement.addClass("is-blue");
      navLineElement.addClass("is-light_blue");
      navigationElement.removeClass("is-blue");
      navLineElement.removeClass("is-blue");
    },
    onLeaveBack: () => {
      navigationElement.removeClass("is-blue");
      navLineElement.removeClass("is-light_blue");
      navigationElement.addClass("is-grey");
      navLineElement.addClass("is-blue");
    },
  });
}

// Privacy Policy – Navigation – Footer scroll into view
// Add the .is-blue and .is-light_blue classes when .footer scrolls into view
// Check if the current page is the homepage
if (window.location.pathname.includes("privacy-policy")) {
  let footerElement = $(".section-instagram");
  let navigationElement = $(".navigation");
  let navLineElement = $(".text-link_line.is-nav");

  ScrollTrigger.create({
    trigger: footerElement,
    start: "top bottom",
    end: "top bottom",
    scrub: 1,
    onEnter: () => {
      navigationElement.addClass("is-blue");
      navLineElement.addClass("is-light_blue");
    },
    onLeaveBack: () => {
      navigationElement.removeClass("is-blue");
      navLineElement.removeClass("is-light_blue");
      navigationElement.addClass("is-grey");
      navLineElement.addClass("is-blue");
    },
  });
}

// Home Navigation – About – Scroll into view
// Add the .is-blue and .is-light_blue classes when .section-about scrolls into view
// Check if the current page is the homepage
if (window.location.pathname === "/" || window.location.pathname === "/index.html") {
  let aboutElement = $(".section-about");
  let navigationElement = $(".navigation");
  let navLineElement = $(".text-link_line.is-nav");

  ScrollTrigger.create({
    trigger: aboutElement,
    start: "top bottom",
    end: "top bottom",
    scrub: 1,
    onEnter: () => {
      navigationElement.addClass("is-blue");
      navLineElement.removeClass("");
      navLineElement.addClass("is-light_blue");
    },
    onLeaveBack: () => {
      navigationElement.removeClass("is-blue");
      navLineElement.removeClass("is-light_blue");
      navLineElement.addClass("");
    },
  });
}



// Home Page – Hero Images Scroll Up
$(".scroll-track.is-home_hero").each(function (index) {
  let triggerElement = $(this);
  let imageLeft = $(".hero-image_left");
  let imageRight = $(".hero-image_right");
  let imageCenter = $(".hero-image_center");
  let heroContent = $(".home-hero-content-wrapper");


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

  // Animate the center image
  tl.to(heroContent, {
    y: "-30vh",
    filter: "blur(5px)",
    duration: 1,
  }, "<"); 
});

// Shop Page Navigation – Hover In/Out 
function ensureShopPageActive() {
  if (window.location.pathname.includes("shop")) {
    // Add 'is-white' class to the navigation
    $(".navigation").addClass("is-white");
    
    // Update background color for each .text-link_line.is-nav
    $(".text-link_line.is-nav").each(function () {
      $(this).addClass("is-blue");
    });

    // Handle hover state for .navigation
    $(".navigation").hover(
      function () {
        // Do nothing on hover out
      },
      function () {
        // Do nothing on hover out
      }
    );
  }
}

// About Page Navigation – Hover In/Out 
function ensureAboutPageActive() {
  if (window.location.pathname.includes("about")) {
    // Add 'is-blue' class to the navigation
    $(".navigation").addClass("is-blue");
    
    // Update background color for each .text-link_line.is-nav
    $(".text-link_line.is-nav").each(function () {
      $(this).addClass("is-light_blue");
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

// Contact Page Navigation – Hover In/Out 
function ensureContactPageActive() {
  if (window.location.pathname.includes("contact")) {
    // Add 'is-blue' class to the navigation
    $(".navigation").addClass("is-green");
    
    // Update background color for each .text-link_line.is-nav
    $(".text-link_line.is-nav").each(function () {
      $(this).addClass("is-light_blue");
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


// Product Page Navigation – Hover In/Out 
function ensureProductPageActive() {
  if (window.location.pathname.includes("product")) {
    // Add 'is-white' class to the navigation
    $(".navigation").addClass("is-white");
    
    // Update background color for each .text-link_line.is-nav
    $(".text-link_line.is-nav").each(function () {
      $(this).addClass("is-blue");
    });

    // Handle hover state for .navigation
    $(".navigation").hover(
      function () {
        $(this).addClass("is-white");
      },
      function () {
        // Do nothing on hover out
      }
    );
  }
}


// Info Page Navigation – Hover In/Out 
function ensureInfoPageActive() {
  if (window.location.pathname.includes("info")) {
    // Add 'is-white' class to the navigation
    $(".navigation").addClass("is-green");
    
    // Update background color for each .text-link_line.is-nav
    $(".text-link_line.is-nav").each(function () {
      $(this).addClass("is-light_blue");
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

// Terms Page Navigation – Hover In/Out 
function ensureTermsPageActive() {
  if (window.location.pathname.includes("terms-and-conditions")) {
    // Add 'is-white' class to the navigation
    $(".navigation").addClass("is-grey");
    
    // Update background color for each .text-link_line.is-nav
    $(".text-link_line.is-nav").each(function () {
      $(this).addClass("is-blue");
    });

    // Handle hover state for .navigation
    $(".navigation").hover(
      function () {
        // Do nothing on hover out
      },
      function () {
        // Do nothing on hover out
      }
    );
  }
}

// Privacy Policy Page Navigation – Hover In/Out 
function ensurePrivacyPageActive() {
  if (window.location.pathname.includes("privacy-policy")) {
    // Add 'is-white' class to the navigation
    $(".navigation").addClass("is-grey");
    
    // Update background color for each .text-link_line.is-nav
    $(".text-link_line.is-nav").each(function () {
      $(this).addClass("is-blue");
    });

    // Handle hover state for .navigation
    $(".navigation").hover(
      function () {
        // Do nothing on hover out
      },
      function () {
        // Do nothing on hover out
      }
    );
  }
}

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
      end: "bottom top", // Animation ends when the top of the element fully leaves the viewport
      toggleActions: "play none none reset", // Reset animation when scrolling back up
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
// Contact Page - Our Brand Text In
const contactSplit = new SplitText(".contact-scroll-text", { type: "chars, words" });

// ScrollTrigger animation
gsap.fromTo(
  contactSplit.chars,
  {
    opacity: 0.3,  // Starting opacity
  },
  {
    opacity: 1,  // Ending opacity
    duration: 2,  // Adjust for smoothness
    stagger: 0.05,  // Delays between character animations
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".contact-scroll-text", // Element to trigger the animation
      start: "top 50%", // Start when top of element hits 80% of viewport
      end: "bottom 15%", // End when bottom of element hits 20% of viewport
      scrub: true, // Smooth scrubbing effect
    },
  }
);

// GSAP Split Text
// All Pages Loader Animation – Page Title
const pageTitleSplitText = gsap.timeline({ paused: true });
const pageTitleSplit = new SplitText("#page-title", { type: "lines" });

pageTitleSplitText.from(pageTitleSplit.lines, {
  duration: 0.5,
  y: "3rem",
  autoAlpha: 0,
  stagger: 0.05,
  ease: "power2.out"
});

// GSAP Split Text
// All Pages Loader Animation – Text Secondary
const pageSecondarySplitText = gsap.timeline({ paused: true });
const pageSecondarySplit = new SplitText("#animate-secondary", { type: "lines" });

pageSecondarySplitText.from(pageSecondarySplit.lines, {
  duration: 0.5,
  y: "1rem",
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
// Function to handle the animations
function handleTextLinkAnimation($element) {
  const $line = $element.find(".text-link_line");

  // Remove existing hover handlers to avoid duplication
  $element.off("mouseenter mouseleave");

  // Check if the element has the .w--current or .is-alternate class
  if ($element.hasClass("w--current") || $element.hasClass("is-alternate")) {
    // Reset x to 0% for the initial state
    gsap.set($line, { x: "0%" });

    // Add hover in and out animations
    $element.hover(
      function () {
        gsap.killTweensOf($line);
        gsap.to($line, { x: "101%", duration: 0.5, ease: "power2.out" });
        gsap.to($line, { x: "-101%", duration: 0.01 }, ">");
        gsap.to($line, { x: "0%", duration: 0.5, ease: "power2.out" }, ">");
      },
      function () {
        // No animation on hover out for .w--current or .is-alternate
      }
    );
  } else {
    // For standard links
    $element.hover(
      function () {
        gsap.killTweensOf($line);
        gsap.to($line, { x: "0%", duration: 0.5, ease: "power2.out" });
        gsap.to($line, { x: "101%", duration: 0.5, ease: "power2.out" }, ">");
        gsap.to($line, { x: "-101%", duration: 0 }, ">");
      },
      function () {
        // No animation on hover out
      }
    );

    // Reset the line to a non-current state
    gsap.set($line, { x: "-101%" });
  }
}

// Initialize animations for existing links
$(".text-link").each(function () {
  handleTextLinkAnimation($(this));
});

// MutationObserver to listen for class changes
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === "attributes" && mutation.attributeName === "class") {
      const target = $(mutation.target);

      // Detect whether .w--current or .is-alternate was added or removed
      const oldClasses = mutation.oldValue || "";
      const hadCurrentOrAlternate =
        oldClasses.includes("w--current") || oldClasses.includes("is-alternate");
      const hasCurrentOrAlternate =
        target.hasClass("w--current") || target.hasClass("is-alternate");

      if (hadCurrentOrAlternate !== hasCurrentOrAlternate) {
        // Log the change for debugging
        console.log(
          `.w--current or .is-alternate ${
            hasCurrentOrAlternate ? "added" : "removed"
          } on element:`,
          mutation.target
        );

        // Reapply the appropriate animation logic
        handleTextLinkAnimation(target);
      }
    }
  });
});

// Start observing the links for class changes
$(".text-link").each(function () {
  observer.observe(this, {
    attributes: true,
    attributeFilter: ["class"],
    attributeOldValue: true, // Include the old class list
  });
});



// Copy To Clipboard
$(".text-link.is-email").on("click", function (e) {
  e.preventDefault(); // Prevent default behavior if it's a link

  // Disable the click temporarily
  const $this = $(this);
  $this.css("pointer-events", "none");

  // Find the .text-link_p within the clicked .text-link
  const textElement = $this.find(".text-link_p");
  const originalText = textElement.text(); // Store the original text

  // Copy the text to the clipboard
  const tempTextarea = $("<textarea>");
  $("body").append(tempTextarea);
  tempTextarea.val(originalText).select();
  document.execCommand("copy");
  tempTextarea.remove(); // Clean up the temporary textarea

  // Update text to "Copied to clipboard"
  textElement.text("email copied 🌞");

  // Revert text and enable clicks after 2 seconds
  setTimeout(function () {
    textElement.text(originalText);
    $this.css("pointer-events", ""); // Re-enable clicks
  }, 2000);
});

// Contact Page – Checkbox Label Colour Change On Selected
// Select all checkboxes with the class '.checkbox'
document.querySelectorAll('.radio_field').forEach(component => {
  // Select the .w-checkbox-input element within each component
  const checkboxInput = component.querySelector('.w-form-formradioinput');
  const textCheckbox = component.querySelector('.radio_label');

  if (checkboxInput && textCheckbox) {
    // Create a MutationObserver to watch for class changes
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.attributeName === 'class') {
          // Check if the class 'w--redirected-checked' is present
          if (checkboxInput.classList.contains('w--redirected-checked')) {
            textCheckbox.style.color = '#475e3d'; // Change color to black
          } else {
            textCheckbox.style.color = ''; // Reset color
          }
        }
      });
    });

    // Observe class attribute changes on the checkbox input
    observer.observe(checkboxInput, { attributes: true });
  }
});

// Contact Page – Auto Select Field General Enquiry
window.onload = function() {
  if (window.location.pathname.includes("contact")) {
      setTimeout(() => {
          const select = document.getElementById("configure-select");
          if (select) {
              select.selectedIndex = 0; // Ensure first option is selected

              // Trigger the change event
              const changeEvent = new Event("change");
              select.dispatchEvent(changeEvent);
          } else {
              console.error("Element with id 'configure-select' not found.");
          }
      }, 1000);
  }
};


// All Pages – Form Submit Button Text Update On Submit
document.addEventListener('DOMContentLoaded', function () {
  // Add an event listener for form submission
  document.querySelectorAll('.form.is-contact').forEach(form => {
    form.addEventListener('submit', function (e) {
      // Find all elements inside the form with the class 'text-button'
      const textButtons = form.querySelectorAll('.text-button');
      
      // Update the text content of each '.text-button' element
      textButtons.forEach(button => {
        button.textContent = 'Please wait...';
      });

      // Optional: Revert the text if submission takes too long
      setTimeout(() => {
        textButtons.forEach(button => {
          button.textContent = 'Submit'; // Adjust text as needed
        });
      }, 5000); // Adjust delay as needed
    });
  });
});

// All Pages – Form Submit Button Text Update On Submit
document.addEventListener('DOMContentLoaded', function () {
  // Add an event listener for form submission
  document.querySelectorAll('.form.is-subscribe').forEach(form => {
    form.addEventListener('submit', function (e) {
      // Find all elements inside the form with the class 'text-button'
      const textButtons = form.querySelectorAll('.text-button');
      
      // Update the text content of each '.text-button' element
      textButtons.forEach(button => {
        button.textContent = 'Subscribing...';
      });

      // Optional: Revert the text if submission takes too long
      setTimeout(() => {
        textButtons.forEach(button => {
          button.textContent = 'Submit'; // Adjust text as needed
        });
      }, 5000); // Adjust delay as needed
    });
  });
});

// Product Page – Add To Cart Button Text Update On Submit
document.addEventListener('DOMContentLoaded', function () {
  // Add an event listener for form submission
  document.querySelectorAll('.w-commerce-commerceaddtocartform').forEach(form => {
    form.addEventListener('submit', function (e) {
      // Find all elements inside the form with the class 'text-button'
      const textButtons = form.querySelectorAll('.text-button');
      
      // Update the text content of each '.text-button' element
      textButtons.forEach(button => {
        button.textContent = 'Adding...';
      });

      // Optional: Revert the text if submission takes too long
      setTimeout(() => {
        textButtons.forEach(button => {
          button.textContent = 'Add to bag'; // Adjust text as needed
        });
      }, 1000); // Adjust delay as needed
    });
  });
});

// GSAP Infinite Marquee
// Main initialization function
const infiniteMarquee = () => {
  // Select the marquee element using the custom attribute 'fs-data="marquee"'
  const marquee = document.querySelector('[fs-data="marquee"]');
  if (!marquee) {
    // Exit if the marquee element is not found
    return;
  }

  // Get the duration attribute from the marquee or default to 20 seconds
  const duration = parseInt(marquee.getAttribute("duration"), 10) || 20;

  // Get the first child of the marquee (assumed to be the marquee content)
  const marqueeContent = marquee.firstChild;
  if (!marqueeContent) {
    // Exit if the marquee content is not found
    return;
  }

  // Clone the marquee content to create the looping effect
  const marqueeContentClone = marqueeContent.cloneNode(true);
  marquee.append(marqueeContentClone); // Append the cloned content to the marquee

  let tween; // Placeholder for the GSAP tween animation

  // Function to initialize and play the marquee animation
  const playMarquee = () => {
    // Skip initialization if the marquee or its parent is hidden
    if (getComputedStyle(marquee).display === 'none') return;

    // If a tween already exists, get its current progress
    let progress = tween ? tween.progress() : 0;

    // Kill the existing tween and reset progress to avoid duplicate animations
    tween && tween.progress(0).kill();

    // Calculate the width of the marquee content
    const width = parseInt(
      getComputedStyle(marqueeContent).getPropertyValue("width"),
      10
    );

    // Calculate the gap between columns (if defined in CSS)
    const gap = parseInt(
      getComputedStyle(marqueeContent).getPropertyValue("column-gap"),
      10
    );

    // Calculate the total distance to translate (negative for leftward scrolling)
    const distanceToTranslate = -1 * (gap + width);

    // Create a GSAP tween animation for the marquee
    tween = gsap.fromTo(
      marquee.children, // Target all children of the marquee (original and clone)
      { x: 0 }, // Start at x: 0 (no translation)
      { x: distanceToTranslate, duration, ease: "none", repeat: -1 } // Translate left with infinite repeat
    );

    // Set the progress of the new tween to match the previous progress
    tween.progress(progress);

    // Log the width of the marquee content for debugging purposes console.log({ width });
  };

  // Utility function to debounce events (like resize) to prevent excessive calls
  function debounce(func) {
    var timer;
    return function (event) {
      if (timer) clearTimeout(timer); // Clear existing timer
      timer = setTimeout(
        () => {
          func(); // Call the debounced function
        },
        500, // Delay in milliseconds
        event
      );
    };
  }

  // Attach a debounced resize event listener to restart the animation on resize
  window.addEventListener("resize", debounce(playMarquee));

  // Watch for changes in visibility of the banner-wrap or its parents
  const bannerWrap = marquee.closest('.banner-wrap');
  const observer = new MutationObserver(() => {
    if (getComputedStyle(bannerWrap).display !== 'none') {
      playMarquee(); // Recalculate and play the marquee when it becomes visible
    }
  });

  // Observe visibility changes on the banner-wrap element
  observer.observe(bannerWrap, { attributes: true, childList: false, subtree: false });
};

// Run the initialization function once the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", infiniteMarquee);


// Info Page – Remove # from sticky nav links
// when the DOM is ready
$(document).ready(function() {
  // get the anchor link buttons
  const menuBtn = $('.text-link.is-info-sticky_nav');
  // when each button is clicked
  menuBtn.click(()=>{	
    // set a short timeout before taking action
    // so as to allow hash to be set
    setTimeout(()=>{
      // call removeHash function after set timeout
      removeHash();
    }, 1); // 5 millisecond timeout in this case
  });

  // removeHash function
  // uses HTML5 history API to manipulate the location bar
  function removeHash(){
    history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
  }
});

// All pages – Footer calc height minus nav height
function updateFooterHeight() {
  const nav = document.querySelector('.navigation'); // Replace '.navigation' with the actual class or ID of your navigation
  if (nav) {
      const navHeight = nav.offsetHeight; // Get the current height of the navigation
      document.documentElement.style.setProperty('--nav-height', `${navHeight}px`);
  }
}

// Observe changes to the navigation size
const nav = document.querySelector('.navigation');
if (nav) {
  const resizeObserver = new ResizeObserver(() => updateFooterHeight());
  resizeObserver.observe(nav);
}

// Run once on page load
window.addEventListener('load', updateFooterHeight);


// Subscribe form custom success message
// when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  // declare constant selectors
  const FORM_SELECTOR = '[fs-subscribe="form"]';
  const NAME_INPUT_SELECTOR = '[fs-subscribe="name-input"]';
  const MESSAGE_SELECTOR = '[fs-subscribe="custom-message"]';
  const form = document.querySelector(FORM_SELECTOR);

  // early return
  if (!form) return;
  const nameInput = form.querySelector(NAME_INPUT_SELECTOR);
  const messageDiv = document.querySelector(MESSAGE_SELECTOR);

  if (!nameInput || !messageDiv) return;

  // when form is submitted
  nameInput.addEventListener('input', function () {
    const nameValue = nameInput.value;

    if (nameValue && nameValue !== '') {
      messageDiv.innerText = `Thanks for subscribing ${nameValue}!`;
    } else {
      messageDiv.innerText = 'Thanks for subscribing!';
    }
  });
});

// Contact form custom success message
// when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  // declare constant selectors
  const FORM_SELECTOR = '[fs-contact="form"]';
  const NAME_INPUT_SELECTOR = '[fs-contact="name-input"]';
  const MESSAGE_SELECTOR = '[fs-contact="custom-message"]';
  const form = document.querySelector(FORM_SELECTOR);

  // early return
  if (!form) return;
  const nameInput = form.querySelector(NAME_INPUT_SELECTOR);
  const messageDiv = document.querySelector(MESSAGE_SELECTOR);

  if (!nameInput || !messageDiv) return;

  // when form is submitted
  nameInput.addEventListener('input', function () {
    const nameValue = nameInput.value;

    if (nameValue && nameValue !== '') {
      messageDiv.innerText = `Thanks ${nameValue}! We will get back to you within 1-2 business days.`;
    } else {
      messageDiv.innerText = 'Thanks, we have received your message and will get back to you.';
    }
  });
});


// Webflow section link – add height to top of screen
  // Disable Webflow's built-in smooth scrolling
  var Webflow = Webflow || [];
  Webflow.push(function() {
    $(function() { 
      $(document).off('click.wf-scroll');
    });
  });

  // Smooth scroll implementation with customizable settings
  (function() {
    // Customizable settings
    const SCROLL_SETTINGS = {
      duration: 1000, // in milliseconds
      easing: 'easeInOutCubic' // 'linear', 'easeInQuad', 'easeOutQuad', 'easeInOutQuad', 'easeInCubic', 'easeOutCubic', 'easeInOutCubic'
    };

    const EASING_FUNCTIONS = {
      linear: t => t,
      easeInQuad: t => t * t,
      easeOutQuad: t => t * (2 - t),
      easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
      easeInCubic: t => t * t * t,
      easeOutCubic: t => (--t) * t * t + 1,
      easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
    };

    function getOffset() {
      const navbar = document.querySelector('.navigation');
      if (!navbar) return 0;
      const navbarHeight = navbar.offsetHeight;
      const customOffset = parseInt(navbar.getAttribute('.navigation') || '64', 10);
      return navbarHeight + customOffset;
    }

    function smoothScroll(target) {
      const startPosition = window.pageYOffset;
      const offset = getOffset();
      const targetPosition = target.getBoundingClientRect().top + startPosition - offset;
      const distance = targetPosition - startPosition;
      let startTime = null;

      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / SCROLL_SETTINGS.duration, 1);
        const easeProgress = EASING_FUNCTIONS[SCROLL_SETTINGS.easing](progress);
        window.scrollTo(0, startPosition + distance * easeProgress);
        if (timeElapsed < SCROLL_SETTINGS.duration) requestAnimationFrame(animation);
      }

      requestAnimationFrame(animation);
    }

    function handleClick(e) {
      const href = e.currentTarget.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.getElementById(href.slice(1));
        if (target) smoothScroll(target);
      }
    }

    function handleHashChange() {
      if (window.location.hash) {
        const target = document.getElementById(window.location.hash.slice(1));
        if (target) {
          setTimeout(() => smoothScroll(target), 0);
        }
      }
    }

    function init() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', handleClick);
      });
      window.addEventListener('hashchange', handleHashChange);
      handleHashChange(); // Handle initial hash on page load
    }

    document.addEventListener('DOMContentLoaded', init);
    window.Webflow && window.Webflow.push(init);
})();




// Cart Open – Observer to check open state and start/stop lenis
// Select the target element to observe
const cartWrapper = document.querySelector('.w-commerce-commercecartwrapper.cart');
const cartContainer = document.querySelector('.cart-container');

// Ensure `lenis` is available globally
if (cartWrapper && cartContainer && typeof lenis !== 'undefined') {
  // Function to update cart animation and lenis behavior
  const updateCartBehavior = () => {
    if (cartWrapper.hasAttribute('data-cart-open')) {
      // If the attribute is present, animate opacity to 100% and stop Lenis
      lenis.stop();
    } else {
      // If the attribute is not present, animate opacity to 0% and start Lenis
      lenis.start();
    }
  };

  // Create a MutationObserver to observe changes to attributes
  const observer = new MutationObserver(() => {
    updateCartBehavior(); // Update behavior on attribute change
  });

  // Observe the target element for attribute changes
  observer.observe(cartWrapper, { attributes: true, attributeFilter: ['data-cart-open'] });

  // Initial check to set the correct state
  updateCartBehavior();
} else {
  console.error('One or more elements are missing, or Lenis is not defined.');
}

// Cart All Pages – Image Hover
const wrapper = document.querySelector('.cart-empty-img-wrap');
const image = wrapper.querySelector('.cart-empty-img');
const hoverTargets = [wrapper, document.querySelector('.text-link.is-alternate.is-serif')];

hoverTargets.forEach(target => {
  // On hover
  target.addEventListener('mouseenter', () => {
    gsap.to(image, { 
      scale: 1, 
      duration: 0.5, 
      ease: "power2.out" // Add a smooth ease
    });
  });

  // On hover out
  target.addEventListener('mouseleave', () => {
    gsap.to(image, { 
      scale: 1.1, 
      duration: 0.5, 
      ease: "power2.out" // Add a smooth ease
    });
  });
});





// Follow us section animation
// Function to animate the third grid
const instagramImages = () => {
  const track = document.querySelector('.scroll-track.is-instagram');
  const instagramImages = document.querySelectorAll('.image-instagram');

  gsap.timeline({
    defaults: {
      ease: 'power3',
    },
    scrollTrigger: {
      trigger: track,
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
    }
  })
  .from(instagramImages, {
    stagger: 0.06,
    y: window.innerHeight,
    rotation: (index) => index % 2 === 0 ? -15 : 15,
    transformOrigin: '50% 0%'
  })
  .fromTo(instagramImages, {
    filter: 'brightness(100%)'
  }, {
    ease: 'none',
    stagger: 0.06,
    filter: pos => pos < instagramImages.length-1 ? 'brightness(20%)' : 'brightness(100%)'
  }, 0)
};

const instagramText = () => {
  const track = document.querySelector('.scroll-track.is-instagram');
  const instagramText = document.querySelectorAll('.instagram-text-wrapper');

  gsap.timeline({
    defaults: {
      ease: 'power1.inOut',
    },
    scrollTrigger: {
      trigger: track,
      start: 'top 75%',
      end: 'bottom 25%',
      scrub: 0.2,
    }
  })
  .from(instagramText, {
    x: '100%'
  })
};

// Home – Product Item Reveal On Scroll
// Select all elements with the class .collection-products-item
const collectionItems = Array.from(document.querySelectorAll(".collection-products-item"));

// Loop through each item and apply the animation
collectionItems.forEach((item, index) => {
  gsap.from(item.querySelector(".product_image-wrapper"), {
    translateY: "50%",
    autoAlpha: 0,
    duration: 1,        
    ease: "power3.out", 
    delay: (index % 3) * 0.1, // Stagger items within each row (adjust the 3 for your row size)
    scrollTrigger: {
      trigger: item,      
      start: "top bottom", 
      end: "bottom top",   
      toggleActions: "play none none reset", 
    },
  });
});

// All Pages – GSAP Split Text – Words
// Select all elements with the `data-split-words` attribute
document.addEventListener("DOMContentLoaded", () => {
  // Delay initialization by 200ms (or any duration you prefer)
  setTimeout(() => {
    // Select all elements with the `data-split-words` attribute
    const elements = document.querySelectorAll("[data-split-words]");

    // Loop through each element and apply SplitText
    elements.forEach(element => {
      // Split the text into words
      const wordSplit = new SplitText(element, { type: "words" });

      // Apply GSAP animation
      gsap.from(wordSplit.words, {
        autoAlpha: 0, // Starting opacity
        translateY: "100%",
        delay: 0.2, // Delay for animation
        duration: 1, // Adjust for smoothness
        stagger: 0.05, // Delays between word animations
        ease: "power2.out",
        scrollTrigger: {
          trigger: element, // Use the current element as the trigger
          start: "top bottom", // Start when the top of the element hits 80% of the viewport
          end: "bottom top", // Animation ends when the top of the element fully leaves the viewport
          toggleActions: "play none none reset", // Reset animation when scrolling back up
        },
      });
    });
  }, 2000); // Adjust delay as needed (200ms in this example)
});

// All Pages – GSAP Split Text – Lines
// Select all elements with the `data-split-words` attribute
document.addEventListener("DOMContentLoaded", () => {
  // Delay initialization by 200ms (or any duration you prefer)
  setTimeout(() => {
    // Select all elements with the `data-split-lines` attribute
    const elements = document.querySelectorAll("[data-split-lines]");

    // Loop through each element and apply SplitText
    elements.forEach(element => {
      // Split the text into words
      const linesSplit = new SplitText(element, { type: "lines" });

      // Apply GSAP animation
      gsap.from(linesSplit.lines, {
        autoAlpha: 0, // Starting opacity
        translateY: "100%",
        delay: 0.2, // Delay for animation
        duration: 1, // Adjust for smoothness
        stagger: 0.2, // Delays between line animations
        ease: "power2.out",
        scrollTrigger: {
          trigger: element, // Use the current element as the trigger
          start: "top bottom", // Start when the top of the element hits 80% of the viewport
          end: "bottom top", // Animation ends when the top of the element fully leaves the viewport
          toggleActions: "play none none reset", // Reset animation when scrolling back up
        },
      });
    });
  }, 2000); // Adjust delay as needed (200ms in this example)
});

// Initialize function
const initialize = () => {
  console.log("Initializing application...");

  // Call all the functions here
  ensureShopPageActive();
  ensurePrivacyPageActive();
  ensureTermsPageActive();
  ensureInfoPageActive();
  ensureProductPageActive();
  ensureContactPageActive();
  ensureAboutPageActive();
  instagramImages();
  instagramText();

  console.log("All functions initialized.");
};

// Call the initialize function
initialize();