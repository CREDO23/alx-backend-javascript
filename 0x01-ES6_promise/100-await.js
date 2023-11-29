import { uploadPhoto, createUser } from './utils.js';

async function asyncUploadUser() {
  const photo = await uploadPhoto();
  const user = await createUser();

  return photo && user ? { photo, user } : { photo: null, user: null };
}


export default asyncUploadUser