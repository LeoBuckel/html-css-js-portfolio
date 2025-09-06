function toggleMenu(){
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}



// Attach event listeners to "Learn More" buttons
document.querySelectorAll('.project-btn').forEach((btn, idx) => {
    btn.onclick = () => openProjectDetail(idx);
});