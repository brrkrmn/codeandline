import axios from 'axios';
import { config } from '../utils/token';

const baseUrl =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001/api/notes'
    : '/api/notes';

const noteService = {
  getUserNotes: async () => {
    const response = await axios.get(baseUrl, config)
    return response.data
  },
  getNote: async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`, config)
    return response.data
  },
  createNote: async (note) => {
    const response = await axios.post(baseUrl, note, config)
    return response.data
  }
}

export default noteService;