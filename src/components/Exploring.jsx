import "./Exploring.css";

const interests = [
  "AI Agents",
  "RAG",
  "Full-Stack Development",
  "React Native",,
];

function Exploring() {
  return (
    <section className="exploring" id="exploring">
      <div className="exploring-content">
        <h2>Currently Exploring</h2>

        <div className="exploring-list">
          {interests.map((interest) => (
            <span key={interest}>{interest}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Exploring;