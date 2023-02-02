// Imports
// React imports
import React from 'react'

// Icon imports
import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

function Socials() {
  return (
    <div className="flex mt-6 gap-8 mb-6">
      <a href="https://github.com/patricklemmer" target="_blank">
        <FaGithub className="social--icon" />
      </a>
      <a href="https://twitter.com/patrick_lemmer" target="_blank">
        <FaTwitter className="social--icon" />
      </a>
      <a href="https://www.instagram.com/patrick_lemmer/" target="_blank">
        <FaInstagram className="social--icon" />
      </a>
    </div>
  )
}

export default Socials
