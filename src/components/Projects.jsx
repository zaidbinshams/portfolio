import "./Projects.css";

const projects = [
  {
    title: "Warranty Tracker",
    description:
      "A web application for keeping track of product warranties and related details.",
    highlight:
      "Can extract product and warranty information from uploaded receipts using Gemini.",
    technologies: ["React", "TypeScript", "Gemini", "Dexie", "Express"],
    github: "https://github.com/zaidbinshams/warranty-tracker",
  },
  {
    title: "AI College Assistant",
    description:
      "An AI assistant that handles common college-related queries using tool calling.",
    highlight:
      "Can handle multiple requests in a single query through specialized tools.",
    technologies: ["Python", "LangChain", "Ollama"],
    github: "https://github.com/zaidbinshams/college-assistant",
  },
  {
    title: "Customer Support Automation",
    description:
      "A multi-agent support system with intelligent routing, RAG, conversation memory, and human approval.",
    highlight:
      "Combines departmental agents, local retrieval, memory, and human-in-the-loop safeguards.",
    technologies: ["LangGraph", "LangChain", "RAG", "FAISS", "Ollama"],
    github:
      "https://github.com/zaidbinshams/customer-support-automation-system",
  },
  {
    title: "Document Summary Assistant",
    description:
      "A web application that extracts text from documents and generates summaries and key points.",
    highlight:
      "Supports PDFs, images, OCR, and different summary lengths.",
    technologies: ["React", "FastAPI", "Gemini", "PyMuPDF", "Tesseract"],
    github: "https://github.com/zaidbinshams/document-summarizer",
    demo: "https://document-summarizer.pages.dev/",
  },
];

function Projects() {
  const openGitHub = (project) => {
    window.open(project.github, "_blank", "noopener,noreferrer");
  };

  const handleCardKeyDown = (event, project) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openGitHub(project);
    }
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-content">
        <h2>Stuff I've Made</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.title}
              role="link"
              tabIndex={0}
              aria-label={`Open ${project.title} on GitHub`}
              onClick={() => openGitHub(project)}
              onKeyDown={(event) =>
                handleCardKeyDown(event, project)
              }
            >
              <div className="project-card-top">
                <h3>{project.title}</h3>

                <div
                  className="project-links"
                  onClick={(event) => event.stopPropagation()}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                  >
                    GitHub
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} live demo`}
                      onClick={(event) => event.stopPropagation()}
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>

              <p className="project-description">
                {project.description}
              </p>

              {project.highlight && (
                <p className="project-highlight">
                  {project.highlight}
                </p>
              )}

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;