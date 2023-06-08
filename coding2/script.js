// Get the necessary elements
const toggleButton = document.querySelector('.toggle-button');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu li a');

// Add a click event listener to the toggle button
toggleButton.addEventListener('click', () => {
  // Toggle the 'active' class on the menu
  menu.classList.toggle('active');
});

// Add click event listeners to menu links
menuLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // Get the target section ID from the link's href attribute
    const targetId = link.getAttribute('href').substring(1);

    // Scroll to the target section
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth',
    });

    // Hide the menu after clicking a link (optional)
    menu.classList.remove('active');
  });
});
<script type="text/javascript">
    document.addEventListener('contextmenu', event => event.preventDefault());
</script>
