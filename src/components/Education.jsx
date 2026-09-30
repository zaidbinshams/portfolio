import "./Education.css";

const education = [
  {
    institution: "VIT-AP University",
    qualification: "B.Tech. in Computer Science and Engineering",
    details: "CGPA: 8.12",
    dates: "June 2027",
  },
  {
    institution: "Sheffield School",
    qualification: "Class 12th, CBSE",
    details: "Percentage: 84.6",
    dates: "May 2023",
  },
  {
    institution: "Sheffield School",
    qualification: "Class 10th, CBSE",
    details: "Percentage: 96.2",
    dates: "April 2021",
  },
];

function EducationEntry({
  institution,
  qualification,
  details,
  dates,
}) {
  return (
    <article className="education-entry">
      <div className="education-entry-main">
        <h3>{institution}</h3>
        <p className="education-qualification">{qualification}</p>
        <p className="education-details">{details}</p>
      </div>

      <p className="education-dates">{dates}</p>
    </article>
  );
}

function Education() {
  return (
    <section className="education" id="education">
      <div className="education-content">
        <h2>Places I've Slept</h2>

        <div className="education-list">
          {education.map((entry) => (
            <EducationEntry
              key={`${entry.institution}-${entry.qualification}`}
              {...entry}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;