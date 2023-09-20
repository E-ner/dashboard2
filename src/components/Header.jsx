import React from 'react'

const Header = ({Category,title}) => {
  return (
    <div className='mb-10'>
      <p className='text-gray-400'>
        {Category}
      </p>
      <p className='text-2xl font-extrabold tracking-tight text-slate-900'>
        {title}
      </p>
    </div>
  )
}

export default Header
