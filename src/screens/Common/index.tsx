import { useEffect, useMemo } from 'react';
import { ScrollView, useWindowDimensions, Vibration } from 'react-native';
import { useToast } from 'react-native-toast-notifications';
import * as ImagePicker from 'expo-image-picker';
import { CSS } from '../../../stitches.config';
import {
  Button,
  Flex,
  FullPageSpinner,
  Image,
  Sub1,
  Sub2,
} from '../../components';
import { useAuth } from '../../context/AuthProvider';
import { useAsync } from '../../hooks';
import { Photo } from '../../interfaces';
import { formatTimestamp } from '../../helpers/date';
import { blob, storage } from '../../services';
import {
  addPhotoAsync,
  getAllPhotosAsync,
  updatePhotoByIdAsync,
} from '../../services/collection/photo';
import { CollectionEnum } from '../../constants';

interface Props {
  kind: CollectionEnum;
}

function Common({ kind }: Props) {
  const { user } = useAuth();
  const { height, width } = useWindowDimensions();
  const {
    error: errorUploadImage,
    isLoading: isLoadingUploadImage,
    isError: isErrorUploadImage,
    run: runUplaodImage,
  } = useAsync();
  const {
    data: photos,
    error: errorGetAllPhotos,
    isIdle: isIdleGetAllPhotos,
    isLoading: isLoadingGetAllPhotos,
    isError: isErrorGetAllPhotos,
    setData: setPhotos,
    setError: setErrorPhotos,
  } = useAsync();
  const toast = useToast();

  useEffect(() => {
    const unsubscribe = getAllPhotosAsync(kind, setPhotos, setErrorPhotos);

    return unsubscribe;
  }, []);

  const css: CSS = useMemo(
    () => ({
      height: height / 3.7,
      width: width / 2 - 4,
      borderRadius: '$m',
    }),
    []
  );

  const cssLikeButton: CSS = useMemo(
    () => ({
      position: 'absolute',
      top: 8,
      right: 8,
      zIndex: 1,
    }),
    []
  );

  const cssContainerImage: CSS = useMemo(
    () => ({
      position: 'relative',
      margin: 2,
    }),
    []
  );

  function openCamera() {
    ImagePicker.launchCameraAsync({
      aspect: [4, 3],
      quality: 0.5,
    }).then(handleImagePicked);
  }

  function handleImagePicked(pickerResult: ImagePicker.ImagePickerResult) {
    if (!pickerResult.cancelled) {
      runUplaodImage(uploadImageAsync(pickerResult.uri));
    }
  }

  async function uploadImageAsync(uri: string) {
    const generatedBlob = await blob.generateFromUri(uri);
    const url = await storage.getDownloadURL(generatedBlob);
    const newPhoto: Photo = {
      author: {
        id: user!.uid,
        email: user!.email!,
      },
      url,
      votes: 0,
    };
    const docRef = await addPhotoAsync(newPhoto, kind);
    await updatePhotoByIdAsync(docRef.id, kind, {
      ...newPhoto,
      id: docRef.id,
    });
  }

  async function onVote(photo: Photo) {
    await updatePhotoByIdAsync(photo.id!, kind, {
      ...photo,
      votes: photo.votes + 1,
    });
  }

  // Image
  if (isLoadingUploadImage) {
    return <FullPageSpinner title='Subiendo imagen...' />;
  }

  if (isErrorUploadImage) {
    Vibration.vibrate(200);
    toast.show(errorUploadImage.message, { type: 'danger' });
  }

  // Photos
  if (isErrorGetAllPhotos) {
    Vibration.vibrate(200);
    toast.show(errorGetAllPhotos.message, { type: 'danger' });
  }

  if (isLoadingGetAllPhotos || isIdleGetAllPhotos) {
    return <FullPageSpinner title='Cargando imágenes' />;
  }

  return (
    <Flex direction='column' css={{ flex: 1 }}>
      {photos.length === 0 ? (
        <Flex
          direction='column'
          justify='center'
          align='center'
          css={{ flex: 1 }}
        >
          <Sub1>No hay imágenes</Sub1>
          <Flex>
            <Sub1>Intenta </Sub1>
            <Sub1 weight='bold'>subir una!</Sub1>
          </Flex>
        </Flex>
      ) : (
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <Flex wrap='wrap'>
            {photos.map((photo: Photo, index: number) => (
              <Flex
                key={index}
                direction='column'
                align='center'
                css={cssContainerImage}
              >
                <Flex css={cssLikeButton}>
                  <Button text='Votar' onPress={() => onVote(photo)} />
                </Flex>
                <Image source={{ uri: photo.url }} {...{ css }} />
                <Sub2>
                  {photo.votes} {photo.votes === 1 ? 'voto' : 'votos'}
                </Sub2>
                <Sub2>{photo.author.email}</Sub2>
                <Sub2>
                  {formatTimestamp(
                    photo.createdAt ? photo.createdAt! : photo.updatedAt!
                  )}
                </Sub2>
              </Flex>
            ))}
          </Flex>
        </ScrollView>
      )}
      <Flex justify='center'>
        <Button
          full
          text='Abrir cámara'
          disabled={isLoadingGetAllPhotos || isIdleGetAllPhotos}
          onPress={openCamera}
        />
      </Flex>
    </Flex>
  );
}

export default Common;
