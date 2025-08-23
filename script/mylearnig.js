const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const hamburgerIcon = document.getElementById("hamburgerIcon");
const closeIcon = document.getElementById("closeIcon");

mobileMenuToggle.addEventListener("click", function () {
  const isOpen = !mobileMenu.classList.contains("hidden");

  mobileMenu.classList.toggle("hidden");
  hamburgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

// Close menu when a mobile link is clicked
const mobileLinks = mobileMenu.querySelectorAll("a");
mobileLinks.forEach((link) => {
  link.addEventListener("click", function () {
    mobileMenu.classList.add("hidden");
    hamburgerIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  });
});
// ==================================================
// Dark mode toggle functionality
const darkModeToggle = document.getElementById("darkModeToggle");
const html = document.documentElement;

// Check for saved theme preference or default to system preference
function initializeTheme() {
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
}

// Toggle dark mode
function toggleDarkMode() {
  const isDark = html.classList.contains("dark");

  if (isDark) {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
}

// Event listeners
darkModeToggle.addEventListener("click", toggleDarkMode);

// Listen for system theme changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      if (e.matches) {
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
      }
    }
  });

// Initialize theme on page load
initializeTheme();




















        // Counter animation function
        function animateCounter(element, target, suffix = '', duration = 2000) {
            let start = 0;
            const increment = target / (duration / 16);
            
            function updateCounter() {
                start += increment;
                if (start < target) {
                    element.textContent = Math.floor(start) + suffix;
                    requestAnimationFrame(updateCounter);
                } else {
                    element.textContent = target + suffix;
                }
            }
            updateCounter();
        }

        // Start animations when page loads
        window.addEventListener('load', () => {
            // Animate counters with delays
            setTimeout(() => {
                animateCounter(document.getElementById('courses-completed'), 12);
            }, 800);
            
            setTimeout(() => {
                animateCounter(document.getElementById('active-courses'), 5);
            }, 1000);
            
            setTimeout(() => {
                animateCounter(document.getElementById('overall-progress'), 76, '%');
            }, 1200);
            
            setTimeout(() => {
                animateCounter(document.getElementById('study-time'), 146, 'h');
            }, 1400);
        });

        // Add click effects
        document.querySelectorAll('[class*="card-animate"]').forEach(card => {
            card.addEventListener('click', function() {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
        });

        // Add sparkle effect on hover
        document.querySelectorAll('[class*="glow-"]').forEach(card => {
            card.addEventListener('mouseenter', function() {
                // Create sparkle elements
                for (let i = 0; i < 6; i++) {
                    const sparkle = document.createElement('div');
                    sparkle.innerHTML = '✨';
                    sparkle.style.position = 'absolute';
                    sparkle.style.pointerEvents = 'none';
                    sparkle.style.zIndex = '1000';
                    sparkle.style.fontSize = '12px';
                    sparkle.style.animation = `sparkle 1s ease-out forwards`;
                    
                    const rect = this.getBoundingClientRect();
                    sparkle.style.left = (rect.left + Math.random() * rect.width) + 'px';
                    sparkle.style.top = (rect.top + Math.random() * rect.height) + 'px';
                    
                    document.body.appendChild(sparkle);
                    
                    setTimeout(() => sparkle.remove(), 1000);
                }
            });
        });

        // Add sparkle keyframes
        const sparkleCSS = `
            @keyframes sparkle {
                0% {
                    opacity: 0;
                    transform: scale(0) rotate(0deg);
                }
                50% {
                    opacity: 1;
                    transform: scale(1) rotate(180deg);
                }
                100% {
                    opacity: 0;
                    transform: scale(0) rotate(360deg);
                }
            }
        `;
        const styleSheet = document.createElement('style');
        styleSheet.textContent = sparkleCSS;
        document.head.appendChild(styleSheet);
















        // 
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    
                    // Animate progress bars when course cards come into view
                    if (entry.target.classList.contains('animate-on-scroll')) {
                        const progressBar = entry.target.querySelector('.progress-bar');
                        if (progressBar) {
                            setTimeout(() => {
                                progressBar.classList.add('animate-progress');
                            }, 300);
                        }
                    }
                }
            });
        }, observerOptions);

        // Observe all elements with animation classes
        document.addEventListener('DOMContentLoaded', () => {
            const animateElements = document.querySelectorAll('.animate-on-scroll, .header-animate');
            animateElements.forEach(el => observer.observe(el));
        });

        // Smooth scroll behavior for better experience
        document.documentElement.style.scrollBehavior = 'smooth';

        // Optional: Add parallax effect to images on scroll
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const images = document.querySelectorAll('.course-card img');
            
            // images.forEach((img, index) => {
            //     const speed = 0.05;
            //     const yPos = -(scrolled * speed);
            //     img.style.transform = `translateY(${yPos}px) scale(1.05)`;
            // });
        });

        