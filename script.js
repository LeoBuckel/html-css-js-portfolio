function toggleMenu(){
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

function openProjectDetail(index) {
    // Example project data
    const projects = [
        {
            title: "3-Way Hifi Speaker",
            images: ["./assets/project-1.png", "./assets/project-1-detail.png"],
            description: "An in-depth look at my custom 3-way HiFi speaker build, including design, woodworking, and electronics."
        },
        {
            title: "Project 1",
            images: ["./assets/project-1.png"],
            description: "Detailed description of Project 1 goes here."
        },
        {
            title: "Project 2",
            images: ["./assets/project-1.png"],
            description: "Detailed description of Project 2 goes here."
        }
    ];

    const project = projects[index];
    document.getElementById('project-detail-title').textContent = project.title;
    document.getElementById('project-detail-description').textContent = project.description;

    const imagesDiv = document.getElementById('project-detail-images');
    imagesDiv.innerHTML = '';
    project.images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        imagesDiv.appendChild(img);
    });

    document.getElementById('project-detail-overlay').style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent background scroll
}

function closeProjectDetail() {
    document.getElementById('project-detail-overlay').style.display = 'none';
    document.body.style.overflow = '';
}

// Attach event listeners to "Learn More" buttons
document.querySelectorAll('.project-btn').forEach((btn, idx) => {
    btn.onclick = () => openProjectDetail(idx);
});