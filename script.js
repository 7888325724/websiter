function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function () {
  const logoSection = document.querySelector(".logo-s");

  function handleScroll() {
    const sectionPosition = logoSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionPosition < screenHeight - 100) {
      logoSection.style.transition = "opacity 0.4s ease-out, transform 0.4s ease-out";
      logoSection.style.opacity = "1";
      logoSection.style.transform = "translateY(0)";
      window.removeEventListener("scroll", handleScroll);
    }
  }
  logoSection.style.opacity = "0";
  logoSection.style.transform = "translateY(50px)";
  window.addEventListener("scroll", handleScroll);
});
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".content", {
    scrollTrigger: {
      trigger: ".content",
      start: "top 80%",
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
  });

  gsap.from(".image", {
    scrollTrigger: {
      trigger: ".image",
      start: "top 80%",
    },
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
  });

  gsap.from(".new h2", {
    scrollTrigger: {
      trigger: ".new h2",
      start: "top 85%",
    },
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
  });

  gsap.from(".new h1", {
    scrollTrigger: {
      trigger: ".new h1",
      start: "top 85%",
    },
    y: -40,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: "power4.out"
  });

  gsap.from(".box", {
    scrollTrigger: {
      trigger: ".parent",
      start: "top 85%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
  });

  gsap.from(".btn-accent-arrow", {
    scrollTrigger: {
      trigger: ".btn-accent-arrow",
      start: "top 90%",
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });

  gsap.from(".box1", {
    scrollTrigger: {
      trigger: ".parent15",
      start: "top 85%",
    },
    y: 80,
    opacity: 0,
    duration: 1.2,
    stagger: 0.3,
    ease: "power4.out"
  });

  gsap.from(".quote-title", {
    scrollTrigger: {
      trigger: ".quote-title",
      start: "top 85%",
    },
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)"
  });

  gsap.from(".quote-text", {
    scrollTrigger: {
      trigger: ".quote-text",
      start: "top 85%",
    },
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power2.out"
  });

  gsap.from(".quote-author", {
    scrollTrigger: {
      trigger: ".quote-author",
      start: "top 85%",
    },
    y: 20,
    opacity: 0,
    duration: 1,
    delay: 0.6,
    ease: "power2.out"
  });
});




document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".image11", {
    scrollTrigger: {
      trigger: ".parent11",
      start: "top 80%",
    },
    x: -100,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
  });

  gsap.from(".content11", {
    scrollTrigger: {
      trigger: ".parent11",
      start: "top 80%",
    },
    x: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
  });

  gsap.from(".content11 > *", {
    scrollTrigger: {
      trigger: ".parent11",
      start: "top 80%",
    },
    y: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    delay: 0.3,
    ease: "power2.out"
  });
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".parent12 .box", {
    scrollTrigger: {
      trigger: ".parent12",
      start: "top 85%",
      toggleActions: "play none none none"
    },
    rotateY: 90,
    scale: 0.8,
    transformOrigin: "center",
    duration: 0.5,
    stagger: 0.2,
    ease: "back.out(1.7)"
  });
});


document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".parent15 .box1", {
    scrollTrigger: {
      trigger: ".parent15",
      start: "top 85%",
      toggleActions: "play none none none"
    },
    rotateY: 90,
    scale: 0.8,
    transformOrigin: "center",
    duration: 1.2,
    stagger: 0.2,
    ease: "back.out(1.7)"
  });
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".parent16 .box2", {
    scrollTrigger: {
      trigger: ".parent16",
      start: "top 85%",
      toggleActions: "play none none none"
    },
    y: 80,
    opacity: 0,
    rotateX: 15,
    duration: 1.2,
    ease: "power4.out",
    stagger: 0.2
  });
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".heading p", {
    scrollTrigger: {
      trigger: ".heading",
      start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });

  gsap.from(".heading h1", {
    scrollTrigger: {
      trigger: ".heading",
      start: "top 80%",
    },
    y: 80,
    opacity: 0,
    scale: 0.9,
    duration: 1.2,
    delay: 0.2,
    ease: "power3.out"
  });
});




document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".newsletter-text h2, .newsletter-text .underline", {
    scrollTrigger: {
      trigger: ".newsletter-section",
      start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2
  });

  gsap.from(".newsletter-content p", {

    scrollTrigger: {
      trigger: ".newsletter-section",
      start: "top 80%",
    },
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.3,
    ease: "power2.out"
  });

  gsap.from(".newsletter-form input, .newsletter-form button", {
    scrollTrigger: {
      trigger: ".newsletter-section",
      start: "top 80%",
    },
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.2,
    delay: 0.6,
    ease: "power3.out"
  });
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  const boxes = document.querySelectorAll(".box3");

  boxes.forEach((box) => {
    const image = box.querySelector("img");
    const overlay = box.querySelector(".overlay16");

    gsap.fromTo(image,
      { scale: 1.2, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: box,
          start: "top 85%",
        },
      });

    gsap.fromTo(overlay,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: box,
          start: "top 85%",
        },
      });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".send-button", {
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".send-button",
      start: "top 90%",
      toggleActions: "play none none none"
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".app-image img", {
    x: -100,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".app-section",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  gsap.from(".app-content", {
    x: 100,
    opacity: 0,
    duration: 1.2,
    delay: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".app-section",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  gsap.from(".store-buttons img", {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".app-content",
      start: "top 85%"
    }
  });
});
