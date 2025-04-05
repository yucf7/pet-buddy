import { StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { usePetStore } from '@/stores/petStore';

export function Pet() {
  const { happiness, hunger, energy } = usePetStore();
  
  const petStyle = useAnimatedStyle(() => {
    const scale = withSpring(1 + (happiness / 200));
    
    return {
      transform: [{ scale }],
    };
  });

  const imageUrl = "https://www.pixelstalk.net/wp-content/uploads/2016/08/Download-Free-Funny-Dog-Wallpaper.jpg";

  return (
    <View style={styles.container}>
      <Animated.Image
        source={{ uri: imageUrl }}
        style={[styles.pet, petStyle]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  pet: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});