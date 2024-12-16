document.addEventListener("DOMContentLoaded", function () {
  const projectsContainer = document.getElementById("projects-container");

  const projects = [
    {
      title: "Stock Management System",
      description:
        "A stock management application developed using C# in Microsoft Visual Studio. The system provides functionalities to manage and track inventory levels, monitor stock movements, and generate reports.",
      technologies: ["C#"],
      link: "https://github.com/youssefescobar/stock-management/tree/master",
      image: "./images/How-to-Change-Email-on-StockX-1280x720.jpg", // Replace with the actual image path or URL
    },
    {
      title: "Cipher Encryption and Decryption Web App",
      description:
        "Built a full stack web application for text encryption and decryption using various cipher algorithms. Ensured reliability and security through thorough testing.",
      technologies: ["HTML", "CSS", "JavaScript", "Flask", "Python"],
      link: "https://github.com/youssefescobar/Crpyto-project",
      image: "./images/what-is-cryptography-scaled.webp", // Replace with the actual image path or URL
    },
    {
      title: "Network Configuration and Troubleshooting Project",
      description:
        "Designed, configured, and troubleshooted a scalable network infrastructure for a mid-sized organization. Implemented VLANs, routing protocols, and network security measures to optimize performance and ensure reliability.",
      technologies: [
        "Cisco Packet Tracer",
        "Switching",
        "Routing",
        "Network Security",
      ],
      link: "https://github.com/youssefescobar/ccna-project",
      image: "./images/DY.png", // Replace with the actual image path or URL
    },
    {
      title: "ELT Pipeline with PostgreSQL and Docker",
      description:
        "Implemented an end-to-end ELT (Extract, Load, Transform) pipeline using Dockerized PostgreSQL databases. Automated data extraction from a source database, transformation, and loading into a destination database with Python scripts and PostgreSQL utilities.",
      technologies: ["Docker", "PostgreSQL", "Python", "pg_dump", "psql"],
      link: "https://github.com/youssefescobar/simple-elt-pipeline", // Replace with your actual GitHub repository link
      image: "./images/0_fs7Vkwo7O47De1E3.png", // Replace with the actual image path or URL
    },
  ];

  projects.forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    projectDiv.innerHTML = `
      <h3>${project.title}</h3>
      <img src="${project.image}" alt="${project.title}" class="project-image">
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank">View Project</a>
    `;

    projectsContainer.appendChild(projectDiv);
  });

  // Add contact form functionality
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };

      try {
        const response = await fetch("/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const result = await response.json();
        document.getElementById("form-response").innerText = result.message;
      } catch (error) {
        document.getElementById("form-response").innerText =
          "Something went wrong. Please try again.";
      }
    });
  }
});
