$(".scroll-track.is-home_hero").each(function () {
    let triggerElement = $(this);
    let textElement = $(".home-hero-content-wrapper");
    let videoElement = $(".hero-video-wrapper");
    let imageWrapper = $(".home-hero_image-wrapper");
    let imageElements = $(".home-hero_image"); // Targets all images inside the wrapper
    let titleLine1 = $(".title-h_scroll.is-1");
    let titleLine2 = $(".title-h_scroll.is-2");
    let titleLine3 = $(".title-h_scroll.is-3");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "top top",
        end: "bottom 50%",
        scrub: 1,
      },
    });

    // Animate text opacity and blur
    tl.to(textElement, { opacity: 0, duration: 0.25 });

    // Animate title lines in parallel
    tl.to(titleLine1, { x: "-10%", duration: 1 }, "<");
    tl.to(titleLine2, { x: "10%", duration: 1 }, "<");
    tl.to(titleLine3, { x: "-10%", duration: 1 }, "<");

    // Animate video dimensions in sync with previous animations
    tl.to(videoElement, { width: "33.3333333333vh", height: "50vh", duration: 0.75 }, "<");

    // Animate image wrapper dimensions in sync
    tl.to(imageWrapper, { height: "50vh", width: "33.3333333333vh", duration: 0.75 }, "<");
});


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


function animateFourImagesOnScroll() {
    // Select the scroll track and all images
    const scrollTrack = document.querySelector('.scroll-track.is-home_hero');
    const images = document.querySelectorAll('.image-array');

    // Set all images to absolute positioning
    images.forEach((image, index) => {
      gsap.set(image, { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: index === 0 ? 1 : 0 });
    });

    // Animate each of the 4 images to fade in/out at 25% intervals
    images.forEach((image, index) => {
        gsap.to(image, {
            opacity: 1,
            duration: 1, // Transition duration for fade in/out
            scrollTrigger: {
                trigger: scrollTrack,
                start: `${index * 15}% top`,   // Each image starts at a 25% scroll interval
                end: `${(index + 1) * 15}% bottom`, // Ends at the next 25% interval
                scrub: true,
                toggleActions: "play none none reverse",
            }
        });
    });
}

// Call the function to start the animation
animateFourImagesOnScroll();


