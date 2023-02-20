// Imports
// React imports
import React from 'react';

function HardSkills() {
  return (
    <div className="w-full mt-6">
      <h2 className="font-bold text-lg text-left mb-3 sm:text-xl">
        What I work with
      </h2>
      <ul className="span--color text-md text-justify grid gap-3">
        <li>
          <span className=" text-orange-300">Frontend:</span> JavaScript, React,
          Tailwind CSS, Bootstrap, Vanilla CSS, TDD
        </li>
        <li>
          <span className=" text-orange-300">Backend:</span> Node.js, MongoDB,
          Netlify
        </li>
        <li>
          <span className=" text-orange-300">Other:</span> Git/GitHub, VSCode,
          Figma, Adobe Photoshop, Adobe Lightroom
        </li>
        <li>
          <span className=" text-orange-300">What I have used before*:</span>{' '}
          TypeScript, AWS, Google Firestore, Heroku, Vercel, REST API, JSON,
          Express, Postman, PostgreSQL <br /> <br />
          <span className="text-sm">
            *I have used these tools/technologies in at least one of my previous
            projects. I am by no means an expert, but I understand their core
            concepts and feel confident in becoming sufficiently proficient in a
            short period of time.{' '}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default HardSkills;
