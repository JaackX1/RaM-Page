import { api } from "../api";

const CharacterServices = {
  getCharacters: async (currentPage, filters = '') => {
    const response = await api.get(`https://rickandmortyapi.com/api/character/?page=${currentPage}${filters}`);
    return response
  }
}

export default CharacterServices;