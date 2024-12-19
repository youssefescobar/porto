document.addEventListener("DOMContentLoaded", function () {
  const projectsContainer = document.getElementById("projects-container");

  const projects = [
    {
      title: "Stock Management System",
      description:
        "A stock management application developed using C# in Microsoft Visual Studio. The system provides functionalities to manage and track inventory levels, monitor stock movements, and generate reports.",
      technologies: ["C#"],
      link: "https://github.com/youssefescobar/stock-management/tree/master",
      image: "./images/How-to-Change-Email-on-StockX-1280x720.jpg", 
    },
    {
      title: "Cipher Encryption and Decryption Web App",
      description:
        "Built a full stack web application for text encryption and decryption using various cipher algorithms. Ensured reliability and security through thorough testing.",
      technologies: ["HTML", "CSS", "JavaScript", "Flask", "Python"],
      link: "https://github.com/youssefescobar/Crpyto-project",
      image: "./images/what-is-cryptography-scaled.webp", 
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
      image: "./images/DY.png", 
    },
    {
      title: "ELT Pipeline with PostgreSQL and Docker",
      description:
        "Implemented an end-to-end ELT (Extract, Load, Transform) pipeline using Dockerized PostgreSQL databases. Automated data extraction from a source database, transformation, and loading into a destination database with Python scripts and PostgreSQL utilities.",
      technologies: ["Docker", "PostgreSQL", "Python", "pg_dump", "psql"],
      link: "https://github.com/youssefescobar/simple-elt-pipeline",
      image: "./images/0_fs7Vkwo7O47De1E3.png", 
    },
    {
      title: "Lung Cancer Prediction using Machine Learning",
      description:
        "Developed a machine learning pipeline to predict lung cancer based on a health survey dataset. The project involves data preprocessing, feature engineering, model training, and hyperparameter tuning using multiple machine learning algorithms including Random Forest, Decision Trees, and SVM. The best model was selected through cross-validation and hyperparameter tuning, achieving high accuracy in predicting lung cancer presence.",
      technologies: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "Matplotlib",
        "Seaborn",
        "Logistic Regression",
        "Random Forest",
        "SVM",
      ],
      link: "https://github.com/youssefescobar/Lung-Cancer-Detection",
      image: "./images/image.png", 
    },
    {
      title: "Spam Email Classification using NLP",
      description:
        "Built a Natural Language Processing (NLP) pipeline to classify emails as spam or non-spam. The project involves data preprocessing, text cleaning, feature extraction using TF-IDF, and training multiple machine learning models such as Logistic Regression, Naive Bayes, SVM, and Random Forest. Each model was evaluated and compared to identify the best performing classifier for spam detection.",
      technologies: [
        "Python",
        "Pandas",
        "Scikit-learn",
        "NLTK",
        "Matplotlib",
        "Seaborn",
        "WordCloud",
        "Logistic Regression",
        "Naive Bayes",
        "SVM",
        "Random Forest"
      ],
      link: "https://github.com/youssefescobar/Spam_detection",
      image: "./images/image copy.png", 
    }
    
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
let lastScrollTop = 0;
const navbar = document.querySelector('header');

window.addEventListener('scroll', function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
  if (currentScroll > lastScrollTop) {
    navbar.style.top = '-80px'; 
  } else {

    navbar.style.top = '0';
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
});
