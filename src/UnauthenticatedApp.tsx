import * as Yup from 'yup';
import { Animated } from 'react-native';
import { AppLogo, Body1, Button, Flex, Sub1 } from './components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useFadeAnimation } from './hooks';
import { useEffect } from 'react';

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
  const { top } = useSafeAreaInsets();
  const { show, style } = useFadeAnimation();
  useEffect(() => {
    // TODO: ejecutar el hide() cuando nos logeamos correctamente
    // TODO: ejecutar el hide() cuando nos logeamos correctamente
    // TODO: ejecutar el hide() cuando nos logeamos correctamente
    show();
  }, []);

  // Opción 1:
  // TODO [IMPORTANTE]: fondo gris/negro (quizás agregar color Black en la config de stitches)
  // TODO [IMPORTANTE]: inputs naranjas con letras negras y el caret-color del input en blanco
  // TODO [IMPORTANTE]: botones blancos ? SI.

  const commonCss = { color: '$whiteA12' };

  return (
    <Animated.View style={{ flex: 1, ...style }}>
      <Flex
        direction='column'
        css={{
          flex: 1,
          pt: top,
          backgroundColor: 'black',
        }}
      >
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
            <Sub1
              css={{
                mt: '$26',
                borderWidth: 1,
                backgroundColor: '#F4900C',
                color: '$blackA12',
                p: '$16',
                borderRadius: '$l', // TODO: hacer el input con el mismo border radius que el button

                // TODO: agregarle el caret-color al input con el color blanco!!!! (en el TextInput se llama "selectionColor")
                // https://reactnative.dev/docs/textinput#selectioncolor
                // https://developer.mozilla.org/en-US/docs/Web/CSS/caret-color
              }}
            >
              test@gmail.com
            </Sub1>
            <Sub1
              css={{
                mt: '$4',
                borderWidth: 1,
                backgroundColor: '#F4900C',
                color: '$blackA12',
                p: '$16',
                borderRadius: '$l', // TODO: hacer el input con el mismo border radius que el button
              }}
            >
              Password1
            </Sub1>
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

          <Flex
            direction='column'
            align='center'
            css={{ mt: '$16', borderWidth: 1 }}
          >
            <Body1 css={{ ...commonCss }}>Iniciar sesión como</Body1>
            <Flex css={{ pt: '$16', borderWidth: 1 }}>
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
