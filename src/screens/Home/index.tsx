/* eslint-disable no-unused-vars */
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useToast } from 'react-native-toast-notifications';
import { Button, FullPageSpinner } from '../../components';
import { useAsync } from '../../hooks';
import { useAuth } from '../../context/AuthProvider';
import { mapAuthError, sleep } from '../../helpers';

function Home() {
  const { bottom } = useSafeAreaInsets();
  const { user, logout } = useAuth();
  const { isLoading, isError, error, run } = useAsync();
  const toast = useToast();

  if (isLoading) {
    return <FullPageSpinner title='Saliendo' />;
  }

  if (isError) {
    const errorMessage = mapAuthError(error);
    toast.show(errorMessage, { type: 'danger' });
  }

  return (
    <ScrollView style={{ paddingBottom: bottom }}>
      <View style={styles.container}>
        <Text>Información del usuario:</Text>
        <Text>{JSON.stringify(user?.providerData, null, 2)}</Text>
        <Button
          text='Salir'
          loading={isLoading}
          disabled={isLoading}
          onPress={() => run(sleep().then(logout))}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 24,
  },
});

export default Home;
