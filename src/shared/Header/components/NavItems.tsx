import React from 'react'
import { useLocation, Link } from 'react-router-dom';

interface NavItemProps {
  data: {
    id: number;
    name: string;
    href: string;
  };
}

interface NavItemMobileProps extends NavItemProps {
  onClickClose: () => void;
}

export const NavItems: React.FC<NavItemProps> = ({ data }) => {
  const { name, href } = data;
  const { pathname } = useLocation();

  const NoActiveClass = 'border-transparent hover:border-white';
  const ActiveClass = 'border-white';

  return (
    <li>
      <Link to={href} className={`${pathname === href ? ActiveClass : NoActiveClass} inline border-b-2 font-semibold px-2 hover:border-b-2`}>
        {name}
      </Link>
    </li>
  )
}

export const NavItemsMobile: React.FC<NavItemMobileProps> = ({ data, onClickClose }) => {
  const { name, href } = data;
  const { pathname } = useLocation();

  return (
    <li className={`${pathname === href ? 'border-white bg-white/20' : ' border-transparent'} flex w-full items-center py-2.5 px-4 font-medium uppercase tracking-wide text-sm rounded-lg text-white drop-shadow-lg border`}>
      <Link to={href} className='w-full'>
        <span onClick={onClickClose} className='block h-full w-full'>{name}</span>
      </Link>
    </li>
  )
}