import React from 'react'
import { iconList } from '../../icons';

const Footer = () => {

  const {
    FaLinkedin,
    FaGithubSquare,
    FaYoutubeSquare
  } = iconList;

  const sizeIcon = '2rem';
  const generalClass = 'hover:scale-110 opacity-75 hover:opacity-100';

  const GitHub = 'https://github.com/JaackX1';
  const LinkedIn = 'https://www.linkedin.com/in/nicolas-cabrera-m/';
  const Youtube = 'https://www.youtube.com/watch?v=mCdA4bJAGGk&ab_channel=sweetblue.';

  return (
    <footer className='w-full p-2'>
      <section className='flex-wrap min-h-[128px] border border-white/40 bg-white/10 flex justify-around items-center text-center py-5 rounded-3xl px-1 text-white drop-shadow-lg'>
        <article>
          <h2>© 2023 JaackX1. All rights reserved.</h2>
        </article>
        <article>
          <ul className='flex gap-5'>
            <li className={` ${generalClass} hover:text-green-400`}><a href={GitHub} target="_blank" rel="noreferrer"><FaGithubSquare size={sizeIcon} /></a></li>
            <li className={` ${generalClass} hover:text-blue-400`}><a href={LinkedIn} target="_blank" rel="noreferrer"><FaLinkedin size={sizeIcon} /></a></li>
            <li className={` ${generalClass} hover:text-red-500`}><a href={Youtube} target="_blank" rel="noreferrer"><FaYoutubeSquare size={sizeIcon} /></a></li>
          </ul>
        </article>
      </section>
    </footer>
  )
}

export default Footer
