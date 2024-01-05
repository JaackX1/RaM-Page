import React, { useState, useEffect } from 'react';
import { CharacterContext } from './CharacterContext';
import CharacterServices from '../services/CharacterServices';

const CharacterProvider = ({children}) => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const [filterProps, setFilterProps] = useState('');

  const [errorMessage, setErrorMenssage] = useState('');

  const getCharacters = async ( currentPage, filters = filterProps) => {
    try {
      const response = await CharacterServices.getCharacters(currentPage,filters);

      setCharacters(response.data.results);
      setTotalPages(response.data.info.pages);
      setTotalItems(response.data.info.count);
      setErrorMenssage('');
      
    } catch (error) {
      if(error.response.data.error){
        setErrorMenssage('Sin resultados');
      }else{
        console.log(error)
      }
      
    }
  }

  const handlePageChange = (newPage) => {
    setCharacters([]);
    setPage(newPage);
  };

  useEffect(() => {
    getCharacters(page);
  }, [page]);


  return (
    <CharacterContext.Provider 
      value={{
        ContextData:{
          characters, setCharacters,
          page, setPage,
          totalPages, setTotalPages,
          totalItems, setTotalItems,
          filterProps, setFilterProps,
          errorMessage, setErrorMenssage,
          getCharacters,
          handlePageChange
        },
      }}
    >
      {children}
    </CharacterContext.Provider>
  )
}

export default CharacterProvider
