import {View, Text} from 'react-native';
import React, {useRef} from 'react';
import { Animated, Easing } from "react-native";
import LottieView from "lottie-react-native";

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const LottieSample1 = () => {
    const animationProgress = useRef(new Animated.Value(0));
    React.useEffect(() => {
        Animated.timing(animationProgress.current, {
          toValue: 1,
          duration: 5000,
          easing: Easing.linear,
          useNativeDriver: false,
        }).start();
      }, []);
    
  return (
    <AnimatedLottieView
    progress={animationProgress.current}
      source={require('../assets/LottieLego.json')}
      style={{width: '100%', height: '50%'}}
    />
  );
};

export default LottieSample1;
