import "./Skills.css";

const knownSkills = [
  "JavaScript",
  "Python",
  "Java",
  "TypeScript",
  "SQL",
  "React",
  "Node.js",
  "Express",
  "FastAPI",
  "MongoDB",
  "LangChain",
  "LangGraph",
  "Git",
  "Relational Databases",
];

const exploringSkills = [
  "AI Agents",
  "RAG",
  "Generative AI",
  "LLMs",
  "React Native",
  "GraphQL",
  "Docker",
];

const skills = [
  ...knownSkills.map((skill) => ({ name: skill, type: "known" })),
  ...exploringSkills.map((skill) => ({ name: skill, type: "exploring" })),
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-content">
        <h2>Things I Know</h2>
        <p className="skills-subtitle">and am currently exploring</p>

        <div className="skills-scatter">
          {skills.map((skill, index) => (
            <span
              key={skill.name}
              className={`skill skill-${index + 1} ${skill.type}`}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}