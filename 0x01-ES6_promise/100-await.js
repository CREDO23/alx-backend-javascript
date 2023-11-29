/* eslint-disable */
import { uploadPhoto, createUser } from './utils.js';

async function asyncUploadUser() {
  const photo = await uploadPhoto();
  const user = await createUser();

  if (photo && user) {
    return { photo, user };
  } else {
    return {
      photo: null,
      user: null,
    };
  }
}

export default asyncUploadUser;
