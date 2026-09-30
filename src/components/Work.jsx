import "./Work.css";

const mainWork = [
  {
    role: "Full Stack Developer Intern",
    organisation: "Vectr Technologies Private Limited",
    dates: "May 2025 – July 2025",
    description:
      "Worked across React Native and backend development, building a user search interface, authenticated friend-request workflow, and API handlers.",
  },
];

const alongsideWork = [
  {
    role: "Content Writer / Journalist",
    organisation: "SamInsider",
    dates: "Oct 2024 – Dec 2024",
  },
  {
    role: "Content Writer / Journalist",
    organisation: "DealNTech",
    dates: "Sep 2022 – Present",
  },
  {
    role: "Marketing Co-Lead",
    organisation: "Entrepreneurship Club, VIT-AP",
    dates: "Sep 2024 – Jun 2025",
  },
];

function WorkEntry({ role, organisation, dates, description }) {
  return (
    <article className="work-entry">
      <div className="work-entry-main">
        <h3>{role}</h3>
        <p className="work-organisation">{organisation}</p>
      </div>

      <p className="work-dates">{dates}</p>

      {description && (
        <p className="work-description">{description}</p>
      )}
    </article>
  );
}

function Work() {
  return (
    <section className="work" id="experience">
      <div className="work-content">
        <h2>Work I've Done</h2>

        <div className="work-group">
          <p className="work-label">Main</p>

          <div className="work-list">
            {mainWork.map((work) => (
              <WorkEntry
                key={`${work.role}-${work.organisation}`}
                {...work}
              />
            ))}
          </div>
        </div>

        <div className="work-group">
          <p className="work-label">Alongside</p>

          <div className="work-list">
            {alongsideWork.map((work) => (
              <WorkEntry
                key={`${work.role}-${work.organisation}`}
                {...work}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;