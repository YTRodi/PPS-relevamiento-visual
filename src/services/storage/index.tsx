import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const storage = {
  getDownloadURL: async (blob: Blob) => {
    const fileRef = ref(getStorage(), Date.now().toString());
    await uploadBytes(fileRef, blob);
    return await getDownloadURL(fileRef);
  },
};

export default storage;
