import React from 'react'

const Header = ({head, text} : {head: string, text: string}) => {
  return (
    <div className='text-center mb-8 flex max-w-lg w-full flex-col gap-2'>
        <h1 className="md:text-4xl text-3xl font-semibold">{head}</h1>
        <p className='text-white/50'>{text}</p>
    </div>
  )
}

export default Header