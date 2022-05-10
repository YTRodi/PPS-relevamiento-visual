import {
  addDoc,
  serverTimestamp,
  updateDoc,
  doc,
  query,
  collection,
  orderBy,
  onSnapshot,
} from 'firebase/firestore';
import { CollectionEnum } from '../../constants';
import { db } from '../../auth';
import { Photo } from '../../interfaces';
import { mapPhotosFromDocs } from '../../helpers/array';

function addPhotoAsync(data: Photo, path: CollectionEnum) {
  return addDoc(collection(db, path), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: null,
  });
}

function updatePhotoByIdAsync(
  id: string,
  path: CollectionEnum,
  data: Partial<Photo>
) {
  return updateDoc(doc(db, path, id), {
    ...data,
    updatedAt: serverTimestamp(),
  });
}

function getAllPhotosAsync(path: CollectionEnum, setData: any, setError: any) {
  return onSnapshot(
    query(collection(db, path), ...[orderBy('createdAt', 'desc')]),
    querySnapshot => setData(mapPhotosFromDocs<Photo>(querySnapshot.docs)),
    error => setError(error.message)
  );
}

export { addPhotoAsync, updatePhotoByIdAsync, getAllPhotosAsync };
