import React from 'react'

import ProfileImage from './../assets/profile-img.jpg'

function Image() {
  return (
    <picture>
      <img
        src={ProfileImage}
        alt="Profile Image"
        className="w-60 rounded sm:w-80 md:w-96"
      />
    </picture>
  )
}

export default Image
