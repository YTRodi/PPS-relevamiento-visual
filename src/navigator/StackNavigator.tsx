import { createStackNavigator } from '@react-navigation/stack';
import { useToast } from 'react-native-toast-notifications';
import { useAuth } from '../context/AuthProvider';
import { useAsync } from '../hooks';
import { Button, FullPageSpinner } from '../components';
import { Home } from '../screens';
import { mapAuthError, sleep } from '../helpers';

const Stack = createStackNavigator();

function StackNavigator() {
  const { logout } = useAuth();
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
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerRight: () => (
          <Button
            variant='text'
            text='Salir'
            onPress={() => run(sleep().then(logout))}
          />
        ),
      }}
    >
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
