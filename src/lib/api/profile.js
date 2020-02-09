import axios from '../axios';

export const fetchProfile = (name) => axios.get (`/profile/${name}`);
export const validateName = ({ name }) => axios.get (`/profile/${name}/isValid`);
