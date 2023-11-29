/* eslint-disable */
import { uploadPhoto, createUser } from './utils.js';

async function asyncUploadUser() {
  const photo = await uploadPhoto();
  const user = await createUser();

  return { photo: photo ?? null, user: user ?? null };
}

export default asyncUploadUser;
