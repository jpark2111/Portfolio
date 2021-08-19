import React from "react";

const Resume = ({ data }) => {
  if (data) {
    var frontSkillMessage = data.frontSkillMessage;
    var backendSkillMessage = data.backendSkillMessage;
    var toolsMessage = data.toolsMessage;
    var education = data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });
    var work = data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });
    var frontSkills = data.frontSkills.map(function (skill) {    
      return (
        <li key={skill.name}> 
          {skill.name}
        </li>
      );
    });
    var backendSkills = data.backendSkills.map(function (skill) {    
      return (
        <li key={skill.name}> 
          {skill.name}
        </li>
      );
    });
    var tools = data.tools.map(function (tool) {    
      return (
        <li key={tool.name}> 
          {tool.name}
        </li>
      );
    });
  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{work}</div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="three columns main-col">
          <p>{frontSkillMessage}</p>
          <div className="bars">
            <ul className="skills">{frontSkills}</ul>
          </div>
        </div>
        <div className="three columns main-col">
          <p>{backendSkillMessage}</p>
          <div className="bars">
            <ul className="skills">{backendSkills}</ul>
          </div>
        </div>
        <div className="three columns main-col">
          <p>{toolsMessage}</p>
          <div className="bars">
            <ul className="skills">{tools}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
