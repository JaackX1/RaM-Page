import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page } from "./types";

import AboutPage from '../containers/PageAbout/AboutPage';
import CharactersPage from '../containers/PageCharacters/CharactersPage';
import HomePage from '../containers/PageHome/HomePage';

import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';

export const pages: Page[] = [
  { path: "/", exact: true, component: HomePage },
  { path: "/personajes", component: CharactersPage },
  { path: "/info", component: AboutPage },
];

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
      {pages.map(({ component, path, exact }) => {
          return (
            <Route
              key={path}
              Component={component}
              path={path}
            />
          );
        })}
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default MyRoutes
