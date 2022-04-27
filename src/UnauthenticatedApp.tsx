import * as Yup from 'yup';
import { Body1, Flex, Sub1 } from './components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

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

  return (
    <Flex direction='column' css={{ flex: 1, pt: top }}>
      <Flex direction='column' align='center' css={{ mt: 52 }}>
        <Sub1 css={{ mb: '$1' }}>Bienvenido a</Sub1>
        <Sub1>Relevamiento Visual App</Sub1>
        <Sub1>ICONO</Sub1>
      </Flex>

      <Flex direction='column' css={{ bc: '$red6', mh: '$4', mt: 56 }}>
        <Sub1 weight='bold'>Log In</Sub1>
        <Sub1 weight='bold' css={{ mt: '$6', borderWidth: 1, height: 48 }}>
          Input 1
        </Sub1>
        <Sub1 weight='bold' css={{ mt: '$2', borderWidth: 1, height: 48 }}>
          Input 2
        </Sub1>
      </Flex>

      <Flex justify='center' css={{ mt: '$6', borderWidth: 1 }}>
        <Sub1 weight='bold' css={{ borderWidth: 1, height: 48 }}>
          Iniciar sesión
        </Sub1>
      </Flex>

      <Flex
        direction='column'
        align='center'
        css={{ flex: 1, mt: 88, bc: '$blue6' }}
      >
        <Body1>Iniciar sesión como</Body1>
        <Flex css={{ borderWidth: 1, borderColor: 'red', mt: '$4' }}>
          <Sub1 css={{ borderWidth: 1, p: 10 }}>Scott</Sub1>
          <Sub1 css={{ borderWidth: 1, p: 10, mh: 16 }}>Maggie</Sub1>
          <Sub1 css={{ borderWidth: 1, p: 10 }}>Luna</Sub1>
        </Flex>
      </Flex>

      {/* <Flex justify='center'>
        <Body1>No tienes cuenta? Regístrate!</Body1>
      </Flex> */}
    </Flex>
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
