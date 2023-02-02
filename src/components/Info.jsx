// Imports
// React imports
import React from 'react'

// Icon imports
import { TbExternalLink } from 'react-icons/tb'

function Info() {
  return (
    <div>
      <h1 className="text-2xl mt-4 sm:text-3xl">Patrick Lemmer</h1>
      <h3 className="text-md sm:text-xl text-orange-300">Frontend Developer</h3>
      <div className="flex items-center justify-center gap-1">
        <a
          href="https://patricklemmer.dev/"
          target="_blank"
          className="text-sm sm:text-base"
        >
          Back to my website
        </a>
        <TbExternalLink />
      </div>
    </div>
  )
}

export default Info
