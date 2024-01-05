import React from 'react'

interface ButtonProps {
  title:string;
  href:string;
}

const TransparentButton: React.FC<ButtonProps> = ({title,href}) => {
  return (
    <a href={href} target='_blank' rel="noreferrer" className='inline-block px-5 md:px-7 py-3 transition-all duration-200 hover:bg-white/10'>
      {title}
    </a>
  )
}

export default TransparentButton
