
document.addEventListener('mousemove', (e) => {
    const cursorHighlight = document.querySelector('.cursor-highlight');
    const scrollX = window.scrollX || window.pageXOffset; // Account for horizontal scroll
    const scrollY = window.scrollY || window.pageYOffset; // Account for vertical scroll
  
    if (!cursorHighlight) {
      // Create the cursor highlight element if it doesn't exist
      cursorHighlight = document.createElement('div');
      cursorHighlight.className = 'cursor-highlight';
      document.body.appendChild(cursorHighlight);
    }
  
    // Set the position of the cursor highlight to the mouse position with scroll offsets
    cursorHighlight.style.left = e.clientX + scrollX + 'px';
    cursorHighlight.style.top = e.clientY + scrollY + 'px';
  });
  
  //to implement the nav item hovering when the mouse is on the corresponding section
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll("nav li");
  
  sections.forEach((section, index) => {
    const navItem = navItems[index];
    
    section.addEventListener("mouseenter", function() {
      navItem.classList.add("hover-effect");
    });
  
    section.addEventListener("mouseleave", function() {
      navItem.classList.remove("hover-effect");
    });
  });
  
  //to make the name appear as a typed text
  document.addEventListener('DOMContentLoaded', () => {
    const typedText = document.getElementById('typed-text');
    const textToType = "Onwuli Charles Tobe"; 
    let index = 0;

    function typeText() {
        if (index < textToType.length) {
            typedText.textContent += textToType.charAt(index);
            index++;
            setTimeout(typeText, 200); 
        }
    }

    // Call the typeText function to start the typing animation
    typeText();
});

// JavaScript to toggle the "show" class on an element with a delay
const element = document.querySelector('h4');

setTimeout(() => {
    element.classList.toggle('show');
}, 4000); // Delay the animation start by 4 seconds (4000 milliseconds)

// JavaScript to add the "nav-animation" class after a delay
setTimeout(() => {
  const nav = document.querySelector('nav');
  nav.classList.add('nav-animation');
}, 5000); // 10 seconds delay (5000 milliseconds)

// JavaScript to observe when the elements with class "box" enter the viewport
const textElements = document.querySelectorAll('.box');

// Options for the Intersection Observer
const options = {
  root: null, // Use the viewport as the root
  rootMargin: '0px', // No margin
  threshold: 0.5, // Trigger when 50% of the element is visible
};

// Function to handle the intersection
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add the "appear" class when the element enters the viewport
      entry.target.classList.add('appear');
    } else {
      // Remove the "appear" class when the element exits the viewport
      entry.target.classList.remove('appear');
    }
  });
}

// Create an Intersection Observer for each element
textElements.forEach((element) => {
  const observer = new IntersectionObserver(handleIntersection, options);
  observer.observe(element);
});




















