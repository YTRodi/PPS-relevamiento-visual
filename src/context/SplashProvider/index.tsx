import React, { useCallback, useEffect, useState } from 'react';
import { Animated, StyleSheet, View, Text } from 'react-native';

import * as SplashScreen from 'expo-splash-screen';
import Constants from 'expo-constants';
import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';

import { useFadeAnimation } from '../../hooks';
import { BASE_FADE_ANIMATION_TIME } from '../../hooks/useFadeAnimation';

const defaultBackgroundColor = '#F4900C';
const defaultResizeMode = 'contain';
const sourceIcon = require('../../../assets/images/icon.png');

SplashScreen.preventAutoHideAsync().catch(console.error);

interface Props {
  children: React.ReactNode;
}

function AnimatedAppLoader(props: Props) {
  const [isSplashReady, setIsSplashReady] = useState(false);

  const startAsync = useCallback(
    () => Asset.fromModule(sourceIcon).downloadAsync(),
    [sourceIcon]
  );

  const onFinish = useCallback(async () => {
    setIsSplashReady(true);
    await SplashScreen.hideAsync();
  }, []);

  if (!isSplashReady) {
    return (
      <AppLoading
        autoHideSplash={false}
        startAsync={startAsync}
        onError={console.error}
        onFinish={onFinish}
      />
    );
  }

  return <AnimatedSplashScreen {...props} />;
}

function AnimatedSplashScreen({ children }: Props) {
  const fadeAnimation = useFadeAnimation();
  const [isAppReady, setAppReady] = useState(false);
  const [isSplashAnimationComplete, setIsSplashAnimationComplete] =
    useState(false);

  useEffect(() => {
    if (isAppReady) {
      setIsSplashAnimationComplete(true);
    }
  }, [isAppReady]);

  const onLoadStart = useCallback(() => fadeAnimation.show(), []);
  const onLoadEnd = useCallback(() => {
    setTimeout(async () => {
      try {
        await SplashScreen.hideAsync();
      } catch (e) {
        console.error(e);
      } finally {
        fadeAnimation.hide(({ finished }) => finished && setAppReady(true));
      }
    }, BASE_FADE_ANIMATION_TIME);
  }, []);

  return (
    <View style={styles.container}>
      {isAppReady && children}
      {!isSplashAnimationComplete && (
        <Animated.View
          style={[StyleSheet.absoluteFill, styles.splashContainer]}
        >
          <Animated.View style={fadeAnimation.style}>
            <Text style={styles.splashText}>Rodi Yago</Text>
          </Animated.View>
          <Animated.Image
            source={sourceIcon}
            onLoadStart={onLoadStart}
            onLoadEnd={onLoadEnd}
            fadeDuration={0}
            style={{ ...styles.splashImage, ...fadeAnimation.style }}
          />
          <Animated.View style={fadeAnimation.style}>
            <Text style={styles.splashText}>División 4B</Text>
          </Animated.View>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  splashContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor:
      Constants.manifest?.splash?.backgroundColor || defaultBackgroundColor,
  },
  splashText: {
    textAlign: 'center',
  },
  splashImage: {
    width: 100,
    height: 100,
    resizeMode: Constants?.manifest?.splash?.resizeMode || defaultResizeMode,
  },
});

export default AnimatedAppLoader;
