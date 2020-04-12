import axios from 'axios';
import { format } from 'date-fns';
import { inputDateFormat } from './constants';
import { API } from './config';

const getHeroes = async () => {
  try {
    const response = await axios.get(`${API}/heroes.json`);
    const heroes = response.data.map(hero => {
      hero.originDate = format(hero.originDate, inputDateFormat);
      return hero;
    });
    return heroes;
  } catch (error) {
    console.error(error);
  }
};

export const data = {
  getHeroes,
};
