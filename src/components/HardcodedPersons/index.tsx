import { useMemo } from 'react';
import Button from '../Button';
import { Flex, H6 } from '../Layout';

interface Person {
  // id: number;
  name: string;
  email: string;
  password: string;
  // role: string;
  // gender: string;
}

interface Props {
  onSelectPerson: (person: Person) => void;
}

const HardcodedPersons = ({ onSelectPerson }: Props) => {
  const persons = useMemo<Person[]>(
    () => [
      {
        name: 'Admin',
        email: 'admin@admin.com',
        password: '111111',
      },
      {
        name: 'Invitado',
        email: 'invitado@invitado.com',
        password: '222222',
      },
      {
        name: 'Usuario',
        email: 'usuario@usuario.com',
        password: '333333',
      },
      {
        name: 'Anonimo',
        email: 'anonimo@anonimo.com',
        password: '444444',
      },
      {
        name: 'Tester',
        email: 'tester@tester.com',
        password: '555555',
      },
    ],
    []
  );

  return (
    <Flex direction='column' align='center' css={{ mt: '$32' }}>
      <H6 css={{ color: '$whiteA12' }}>Iniciar sesión como</H6>
      <Flex css={{ pt: '$16' }}>
        {persons.map((person, index) => (
          <Flex key={index} css={{ flex: 1 }}>
            <Button
              full
              text={person.name}
              variant='text'
              onPress={() => onSelectPerson(person)}
            />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default HardcodedPersons;
