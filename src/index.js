import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const profileData = {
  name: "Griffin Amaral",
  description: "Aspiring full-stack web developer and self taught student",
  skills: [
    {
      skill: "HTML+CSS",
      level: "Advanced",
      color: "#2662EA",
    },
    {
      skill: "JavaScript",
      level: "Advanced",
      color: "#EFD81D",
    },
    {
      skill: "Web Design",
      level: "Advanced",
      color: "#C3DCAF",
    },
    {
      skill: "Git and Github",
      level: "Intermediate",
      color: "#E84F33",
    },
    {
      skill: "React",
      level: "Intermediate",
      color: "#60DAFB",
    },
    {
      skill: "Python",
      level: "Intermediate",
      color: "#4584B6",
    },
    {
      skill: "Jest",
      level: "Beginner",
      color: "#C63D14",
    },
  ],
};

export const Avatar = () => {
  return <img src="avatar.jpg" alt="My wife and I" className="avatar" />;
};

export const Intro = (props) => {
  return (
    <div className="avatar">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export const SkillList = (props) => {
  const skills = props.skills;

  return (
    <div>
      <ul className="skill-list">
        {skills.map((skillObj) => (
          <li
            key={skillObj.name}
            className="skill"
            style={{ backgroundColor: skillObj.color }}
          >
            {skillObj.skill}{" "}
            {skillObj.level === "Advanced"
              ? "💪"
              : skillObj.level === "Intermediate"
              ? "👍"
              : "🐵"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const App = () => {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro name={profileData.name} description={profileData.description} />
        <SkillList skills={profileData.skills} />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
