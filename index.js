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

// Navigation BG Gradient Fade In
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



// Navigation BG Gradient Fade In
$(".scroll-track.is-home_hero").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".navigation-bg");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "25% top",
      end: "25% top",
      scrub: 1,
    },
  });
  tl.to(targetElement, {
    opacity: "100%",
    duration: 0.5,
  });
});

//Loader Start
// Add the "hide" class to the cursor dot before the timeline starts
$(".cursor_dot").addClass("hide");

const loaderTimeline = gsap.timeline();

loaderTimeline.fromTo(
  ".loader_text",
  {
    y: "100%"
  },
  {
    y: "0%",
    duration: 0.5,
    ease: 'Sine.easeOut'
  }
);

loaderTimeline.fromTo(
  ".loader_background",
  {
    y: "0vh"
  },
  {
    y: "-100vh",
    duration: 0.6,
    ease: 'Sine.easeOut',
    onComplete: () => {
      gsap.set(".loader", { display: "none" });
      // Remove the "hide" class from the cursor dot when the timeline completes
      $(".cursor_dot").removeClass("hide");
    }
  },
  "+=1"  // Offset the start time to synchronize with the previous animation
);
  
loaderTimeline.to(
  ".loader_text",
  {
    y: "-100%",
    ease: 'Sine.easeOut',
    duration: 0.5,
  },
  "-=0.8"  // Offset the start time to synchronize with the previous animation
);

// Code that runs on pageload
  
loaderTimeline.play();

// Code that runs on click of a link
$(document).ready(function () {
  $("a").on("click", function (e) {
    if (
    	$(this).prop("hostname") === window.location.host &&
      $(this).attr("href").indexOf("#") === -1 &&
      $(this).attr("target") !== "_blank") {
        e.preventDefault();
        let destination = $(this).attr("href");
        gsap.set(".loader", { display: "block" });
        gsap.fromTo(
          ".loader_background",
          {
            y: "100vh"
          },
          {
            y: "0vh",
            duration: 0.6,
            ease: 'Sine.easeOut',
            onComplete: () => {
              window.location = destination;
            }
          }
        );
    }
  });
  
  // On click of the back button
  window.onpageshow = function(event){
  	if (event.persisted) {
    	window.location.reload();
    }
  }
});


