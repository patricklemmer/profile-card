// Imports
// React imports
import React from 'react'

// Icon imports
import { HiOutlineMail } from 'react-icons/hi'
import { FaLinkedinIn } from 'react-icons/fa'

function Buttons() {
  return (
    <div className="flex justify-center gap-2 mt-4">
      <a href="mailto:patricklemmerdev@gmail.com?subject=I%20just%20came%20across%20your%20digital%20business%20card">
        <button className="btn flex items-center gap-2 text-base border-none bg-zinc-600">
          <HiOutlineMail />
          Mail
        </button>
      </a>
      <a href="https://www.linkedin.com/in/patricklemmer/" target="_blank">
        <button className="btn-linkedin btn flex items-center gap-2 text-base">
          <FaLinkedinIn />
          LinkedIn
        </button>
      </a>
    </div>
  )
}

export default Buttons
