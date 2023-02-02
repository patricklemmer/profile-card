// Imports
// React imports
import React from 'react'

function SoftSkills() {
  return (
    <div className="w-full mt-6">
      <h2 className="font-bold text-lg text-left mb-3 sm:text-xl">
        What I bring to the table
      </h2>
      <ul className="text-md text-justify grid gap-3">
        <li>
          Four years of experience in an{' '}
          <span className=" text-orange-300">agile</span> environment
        </li>
        <li>
          Three years of experience with the{' '}
          <span className=" text-orange-300">Atlassian</span> suite (Jira,
          Confluence)
        </li>
        <li>
          Three years of experience in{' '}
          <span className=" text-orange-300">bridging the gap</span> between
          business and development
        </li>
        <li>
          One year of experience in{' '}
          <span className=" text-orange-300">leading an operation</span>,
          including establishment and management of a supply chain, coordination
          of external stakeholers and responsibility over up to 400 people and a
          team of 15 employees.{' '}
        </li>
        <li>
          Ability to{' '}
          <span className=" text-orange-300">
            communicate complex technical concepts
          </span>{' '}
          to non-technical folks
        </li>

        <li>
          <span className=" text-orange-300">Fluent</span> in written and spoken
          German and English
        </li>
      </ul>
    </div>
  )
}

export default SoftSkills
