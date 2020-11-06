import axios from 'axios';

export async function  request(url: string) {
  return await axios.get(url)
}