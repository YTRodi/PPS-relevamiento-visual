import { useEffect } from 'react';
import { Animated } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Flex, Image, Touchable } from '../../components';
import { useFadeAnimation } from '../../hooks';

function Home() {
  const { show, style } = useFadeAnimation({ hidden: true });
  const { bottom } = useSafeAreaInsets();

  useEffect(() => {
    show();
  }, []);

  return (
    <Animated.View style={{ ...style, flex: 1, paddingBottom: bottom }}>
      <Flex
        direction='column'
        justify='center'
        align='center'
        css={{ flex: 1 }}
      >
        <Touchable onPress={() => {}} css={{ flex: 1 }}>
          <Image
            source={require('../../../assets/up.jpg')}
            resizeMode='contain'
            css={{ flex: 1 }}
          />
        </Touchable>
        <Touchable onPress={() => {}} css={{ flex: 1 }}>
          <Image
            source={require('../../../assets/down.jpg')}
            resizeMode='contain'
            css={{ flex: 1 }}
          />
        </Touchable>
      </Flex>
    </Animated.View>
  );
}

export default Home;
