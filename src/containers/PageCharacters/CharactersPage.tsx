import React, { useContext, useState, ChangeEvent } from 'react';
import { CharacterContext } from '../../context/CharacterContext'
import CharactersPageView from './CharactersPageView';

interface FilterInterface {
  name: string;
  status: string;
  gender: string;
  species: string;
}

const CharactersPage = () => {
  const { ContextData } = useContext(CharacterContext);
  const {
    characters,
    page,
    setPage,
    totalPages,
    totalItems,
    setFilterProps,
    errorMessage,
    getCharacters,
    handlePageChange
  } = ContextData;

  const [ filter, setFilter] = useState<FilterInterface>({
    name: '',
    status: '',
    gender: '',
    species: '',
  });

  /** Handle Inputs Form */
  const onSelectChange = (ev: ChangeEvent<HTMLSelectElement>) => setFilter({...filter,[ev.target.name]: ev.target.value,});
  const onNameChange = (ev: React.ChangeEvent<HTMLInputElement>) => setFilter({...filter,name: ev.target.value,});

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const createUrl = {
      name:
        filter.name?.length > 0
          ? `&name=${filter?.name}`
          : '',
      status:
        filter.status?.length > 0
          ? `&status=${filter?.status}`
          : '',
      gender:
        filter.gender?.length > 0
          ? `&gender=${filter?.gender}`
          : '',
      species:
        filter.species?.length > 0
          ? `&species=${filter?.species}`
          : '',
    };

    const url = `${createUrl.name}${createUrl.status}${createUrl.gender}${createUrl.species}`;

    try {
      setFilterProps(url);
      setPage(1);
      getCharacters(1,url);
      
    } catch (error) {
      console.log('handleSubmit: ',error)
    }
  }


  const handleReset = () => {
    setFilter({
      name: '',
      status: '',
      gender: '',
      species: '',
    });
    setFilterProps('');
    setPage(1);
    getCharacters(1,'');
  };


  return <CharactersPageView 
    characters={characters}
    totalItems={totalItems}
    filterStatus={filter?.status}
    filterGender={filter?.gender}
    filterSpecies={filter?.species}
    errorMessage={errorMessage}
    onNameChange={onNameChange}
    onSelectChange={onSelectChange}
    page={page}
    totalPages={totalPages}
    handlePageChange={handlePageChange}
    handleReset={handleReset}
    handleSubmit={handleSubmit}
  />
}

export default CharactersPage
