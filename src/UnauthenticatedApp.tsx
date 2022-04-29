import * as Yup from 'yup';
import { useEffect } from 'react';
import { Animated } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AppLogo, Body1, Button, Flex, Sub1, TextInput } from './components';

import { useFadeAnimation } from './hooks';

// eslint-disable-next-line no-unused-vars
const AuthSchema = Yup.object().shape({
  email: Yup.string()
    .email('Correo electrónico inválido')
    .required('El correo electrónico es obligatorio'),
  password: Yup.string()
    .min(6, 'La contraseña debe tener al menos 6 dígitos')
    .required('La contraseña es obligatoria'),
});

function UnauthenticatedApp() {
  const { show, style } = useFadeAnimation();
  useEffect(() => {
    // TODO: ejecutar el hide() cuando nos logeamos correctamente
    // TODO: ejecutar el hide() cuando nos logeamos correctamente
    // TODO: ejecutar el hide() cuando nos logeamos correctamente
    show();
  }, []);

  // TODO [IMPORTANTE]: botones blancos ? SI.

  const commonCss = { color: '$whiteA12' };

  return (
    <Animated.View style={{ flex: 1, ...style }}>
      <StatusBar animated style='light' />
      <Flex direction='column' css={{ flex: 1, backgroundColor: '$blackA12' }}>
        <Flex direction='column' css={{ flex: 1, mh: '$16' }}>
          <Flex direction='column' align='center' css={{ mt: 52 }}>
            <Sub1 css={{ ...commonCss }}>Bienvenido a</Sub1>
            <Sub1 css={{ mb: '$16', ...commonCss }}>
              Relevamiento Visual App
            </Sub1>
            <AppLogo />
          </Flex>

          <Flex direction='column' css={{ mt: '$16' }}>
            <Sub1 css={{ ...commonCss, mb: '$8' }}>Credenciales</Sub1>
            <TextInput
              keyboardType='email-address'
              placeholder='Correo electrónico'
              returnKeyType='next'
              autoCompleteType='off'
              css={{ marginBottom: '$8' }}
            />
            <TextInput
              secureTextEntry
              placeholder='Contraseña'
              autoCompleteType='off'
            />
          </Flex>

          <Flex justify='center' css={{ mt: '$16' }}>
            <Button
              text='Ingresar'
              full
              loading={false}
              disabled={!false}
              onPress={() => console.log('hola mundo')}
            />
          </Flex>

          <Flex direction='column' align='center' css={{ mt: '$16' }}>
            <Body1 css={{ ...commonCss }}>Iniciar sesión como</Body1>
            <Flex css={{ pt: '$16' }}>
              <Flex css={{ flex: 1 }}>
                <Button
                  full
                  text='Scott'
                  variant='outlined'
                  onPress={() => {}}
                />
              </Flex>
              <Flex css={{ flex: 1, mh: '$16' }}>
                <Button
                  full
                  text='Maggie'
                  variant='outlined'
                  onPress={() => {}}
                />
              </Flex>
              <Flex css={{ flex: 1 }}>
                <Button
                  full
                  text='Luna'
                  variant='outlined'
                  onPress={() => {}}
                />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Animated.View>
  );

  // return (
  //   <View style={styles.container}>
  //     <Image
  //       source={require('../assets/images/background.png')}
  //       style={styles.backgroundImage}
  //     />

  //     <View style={styles.headerContainer}>{renderHeader()}</View>

  //     <View style={styles.formGroup}>
  //       <TextInput
  //         mode='flat'
  //         keyboardType='email-address'
  //         returnKeyType='next'
  //         autoComplete={false}
  //         autoCapitalize='none'
  //         label='Correo electrónico'
  //         placeholder='Correo electrónico'
  //         value={formValues.email}
  //         onChangeText={handleChange('email')}
  //         onBlur={handleBlur('email')}
  //         left={<TextInput.Icon name='email' color={getInputEmailIconColor} />}
  //         error={Boolean(formErrors.email && touched.email)}
  //       />
  //       {formErrors.email && touched.email && (
  //         <Paragraph style={styles.textError}>{formErrors.email}</Paragraph>
  //       )}
  //     </View>

  //     <View style={styles.formGroup}>
  //       <TextInput
  //         mode='outlined'
  //         secureTextEntry={hidePassword}
  //         autoComplete={false}
  //         autoCapitalize='none'
  //         label='Contraseña'
  //         placeholder='Contraseña'
  //         value={formValues.password}
  //         onChangeText={handleChange('password')}
  //         onBlur={handleBlur('password')}
  //         left={
  //           <TextInput.Icon name='lock' color={getInputPasswordIconColor} />
  //         }
  //         right={
  //           <TextInput.Icon
  //             name={hidePassword ? 'eye' : 'eye-off'}
  //             onPress={toggleHidePassword}
  //             color={getInputPasswordIconColor}
  //           />
  //         }
  //         error={Boolean(formErrors.password && touched.password)}
  //       />
  //       {formErrors.password && touched.password && (
  //         <Paragraph style={styles.textError}>{formErrors.password}</Paragraph>
  //       )}
  //     </View>

  //     <Button
  //       style={styles.button}
  //       mode='contained'
  //       disabled={isLoading || isValidating || !isValid}
  //       loading={isLoading || isValidating}
  //       onPress={handleSubmit}
  //     >
  //       {isLoginScreen ? 'Iniciar sesión' : 'Registrarse'}
  //     </Button>

  //     <View style={styles.captionContainer}>
  //       <Caption>
  //         {isLoginScreen ? '¿No tienes cuenta?' : '¿Ya tienes una cuenta?'}{' '}
  //         <Caption style={styles.captionText} onPress={reset}>
  //           {isLoginScreen ? 'Regístrate!' : 'Inicia sesión!'}
  //         </Caption>
  //       </Caption>
  //     </View>

  //     <HardcodedPersons
  //       onSelectPerson={person =>
  //         setValues({ email: person.email, password: person.password })
  //       }
  //     />
  //   </View>
  // );
}

export default UnauthenticatedApp;
