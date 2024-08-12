import React from "react";
import "./WorkExperience.css";

import company1Logo from "../../assets/company-logo.jpg";

const WorkExperience = ({ date, title, company, logo, details }) => {
  return (
    // <div className="work-experience">
    //   <div className="experience-item">
    //     <div className="date">
    //       <p>Jan 2023 – To Date</p>
    //     </div>
    //     <div className="content">
    //       <h3>SENIOR FLUTTER MOBILE APPS DEVELOPER</h3>
    //       {/* <img src={company1Logo} alt="Spraxa Solutions Pvt Ltd" /> */}
    //       <h4>Spraxa Solutions Pvt Ltd</h4>
    //       <ul>
    //         <li>Led and significantly contributed to the successful completion of a crucial project, showcasing leadership, problem-solving, and collaboration skills.</li>
    //         <li>Spearheaded the migration of a native app to Flutter, introducing cross-platform efficiency and maintaining a consistent user experience.</li>
    //         <li>Provided guidance and mentorship to junior developers, contributing to team skill enhancement in a collaborative learning environment.</li>
    //         <li>Conducted thorough code reviews to ensure adherence to coding standards and took charge of ongoing maintenance for optimal application performance.</li>
    //       </ul>
    //     </div>
    //   </div>

    //   <div className="experience-item">
    //     <div className="date">
    //       <p>Aug 2023 – Feb 2024</p>
    //     </div>
    //     <div className="content">
    //       <h3>Senior Flutter Mobile Apps Developer || Project Manager</h3>
    //       <img src="company2-logo.png" alt="Weggz Ltd" />
    //       <h4>Weggz Ltd</h4>
    //       <ul>
    //         <li>Led the team in designing Weggz systems, overseeing the development and implementation of innovative solutions.</li>
    //         <li>Designed and developed three mobile apps using Flutter technology, ensuring high-quality, user-friendly applications aligned with company objectives.</li>
    //         <li>Provided guidance and mentorship to junior developers, fostering their professional growth and contributing to team skill enhancement.</li>
    //         <li>Acted as a direct point of contact for the owner, facilitating clear communication and alignment of project goals with company objectives.</li>
    //         <li>Conducted regular project reviews and performance evaluations to identify areas for improvement and implement corrective actions.</li>
    //         <li>Represented the company in meetings and presentations, articulating project progress, challenges, and strategic initiatives to stakeholders.</li>
    //         <li>Implemented agile methodologies and best practices to streamline project management and delivery.</li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>

    <div className="experience-item">
      <div className="date">
        <p>{date}</p>
      </div>
      <div className="content">
        <h3>{title}</h3>
        {logo && <img src={logo} alt={company} />}
        <h4>{company}</h4>
        {details && (
          <ul>
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default WorkExperience;
