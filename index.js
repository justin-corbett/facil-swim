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


// Home – Navigation
$(".navigation").hover(
  function () {
    // Add the .is-active class to .navigation and .text-link_line.is-nav on hover
    $(this).addClass("is-white");
    $(".text-link_line.is-nav").addClass("is-active");
  },
  function () {
    // Remove the .is-active class on hover out only if it wasn't already there due to scroll trigger
    if (!$(this).is(":hover")) {
      let hasScrollTriggered = $(this).data("scroll-triggered") === true;
      if (!hasScrollTriggered) {
        $(this).removeClass("is-white");
        $(".text-link_line.is-nav").removeClass("is-active");
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
      targetElement.addClass("is-white");
      targetElement.data("scroll-triggered", true); // Mark as triggered
      $(".text-link_line.is-nav").addClass("is-active");
    },
    onLeaveBack: () => {
      targetElement.removeClass("is-white");
      targetElement.data("scroll-triggered", false); // Unmark as triggered
      $(".text-link_line.is-nav").removeClass("is-active");
    },
  });
});


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

// Product Page Navigation – Hover In/Out 
function ensureProductPageActive() {
  if (window.location.pathname.includes("product")) {
    // Add 'is-white' class to the navigation
    $(".navigation").addClass("is-white");
    
    // Update background color for each .text-link_line.is-nav
    $(".text-link_line.is-nav").each(function () {
      $(this).css("background-color", "#3e5c8a");
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

// Call the function to handle About page behavior
ensureProductPageActive();

// Info Page Navigation – Hover In/Out 
function ensureInfoPageActive() {
  if (window.location.pathname.includes("info")) {
    // Add 'is-white' class to the navigation
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
ensureInfoPageActive();

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
  delay: 0.2,
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
  textElement.text("Email copied 🌞");

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

// Contat Page – Auto Select Field General Enquiry
window.onload = function() {
  setTimeout(() => {
    const select = document.getElementById("configure-select");
    select.selectedIndex = 0; // Ensure first option is selected

    // Trigger the change event
    const changeEvent = new Event("change");
    select.dispatchEvent(changeEvent);
  }, 1000);
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


// Cart Open – Stop Lenis scrolling on cart button click
document.querySelector('.cart-button-open').addEventListener('click', () => {
  lenis.stop(); // Stop Lenis scrolling
});

document.querySelector('.cart-button-close').addEventListener('click', () => {
  lenis.start(); // Stop Lenis scrolling
});

document.querySelector('.w-commerce-commercecartcontainerwrapper').addEventListener('click', () => {
  lenis.start(); // Start Lenis scrolling
});

// GSAP Infinite Marquee
// Main initialization function
const init = () => {
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

    // Log the width of the marquee content for debugging purposes
    console.log({ width });
  };

  // Call the function to start the marquee animation
  playMarquee();

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
document.addEventListener("DOMContentLoaded", init);



/*
// Remove # from page URL
document.addEventListener('DOMContentLoaded', function() {
    // Check if there's a hash in the URL
    if (window.location.hash) {
        // Get the target element
        const targetId = window.location.hash.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Scroll to the target element
            targetElement.scrollIntoView({behavior: 'smooth'});

            // Remove the hash after a short delay (to allow scrolling to complete)
            setTimeout(function() {
                history.pushState("", document.title, window.location.pathname + window.location.search);
            }, 100);
        }
    }

    // Add click event listeners to all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({behavior: 'smooth'});

                // Remove the hash after a short delay (to allow scrolling to complete)
                setTimeout(function() {
                    history.pushState("", document.title, window.location.pathname + window.location.search);
                }, 100);
            }
        });
    });
});
*/


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




























