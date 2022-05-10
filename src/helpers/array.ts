import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';

function mapPhotosFromDocs<Type>(docs: QueryDocumentSnapshot<DocumentData>[]) {
  return docs.map(doc => ({
    id: doc.id,
    ...(doc.data() as Type),
  }));
}

export { mapPhotosFromDocs };
