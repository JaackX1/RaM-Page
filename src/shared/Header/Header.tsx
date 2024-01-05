import React, { FC } from "react";
import { navigationData } from "../../data/navigation";
//import MainNav2 from "./MainNav2";
import { NavItems } from "./components/NavItems";
import MenuBar from "./components/MenuBar";
import logo from '../../logo.svg';

export interface Header2Props {}

const Header: FC<Header2Props> = () => {
  return (
    <header className='flex justify-center fixed w-full z-50'>
      <div className='m-2 max-w-[1200px] w-full border-2 text-white drop-shadow-lg border-white bg-white/10 backdrop-blur-md flex justify-between p-4 rounded-xl'>
          <img src={logo} className="w-6 h-auto" alt="logo" title="JaackX1"/>
          <div className='hidden md:block'>
              <ul className='flex gap-7'>
                  {navigationData?.length > 0 && navigationData?.map((e) => (
                      <NavItems data={e} key={e.id}/>
                  ))}
              </ul>
          </div>
          <div className='md:hidden'>
              <MenuBar/>
          </div>
      </div>
    </header>
  );
};

export default Header;
