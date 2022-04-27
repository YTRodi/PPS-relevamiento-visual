/* eslint-disable no-unused-vars */
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useToast } from 'react-native-toast-notifications';
import { FullPageSpinner } from '../../components';
import { useAsync } from '../../hooks';
import { useAuth } from '../../context/AuthProvider';
import { mapAuthError } from '../../helpers';

function Home() {
  const { bottom } = useSafeAreaInsets();
  const { user, logout } = useAuth();
  const { isLoading, isError, error, run } = useAsync();
  const toast = useToast();

  if (isLoading) {
    return <FullPageSpinner />;
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
        {/* TODO: pending implementation of Button component */}
        {/* <Button
          mode='contained'
          onPress={() => run(logout())}
          disabled={isLoading}
          loading={isLoading}
        >
          Salir
        </Button> */}
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
