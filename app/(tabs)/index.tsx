import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Pet } from '@/components/Pet';
import { ActionButton } from '@/components/ActionButton';
import { StatBar } from '@/components/StatBar';
import { usePetStore } from '@/stores/petStore';
import { Pizza, CirclePlay as PlayCircle, Moon } from 'lucide-react-native';

export default function HomeScreen() {
  const { name, happiness, hunger, energy, feed, play, sleep, decreaseStats } = usePetStore();

  useEffect(() => {
    const interval = setInterval(() => {
      decreaseStats();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Pet />
      
      <View style={styles.stats}>
        <StatBar type="happiness" value={happiness} />
        <StatBar type="energy" value={energy} />
        <StatBar type="hunger" value={hunger} />
      </View>

      <View style={styles.actions}>
        <ActionButton icon={Pizza} label="Feed" onPress={feed} />
        <ActionButton icon={PlayCircle} label="Play" onPress={play} />
        <ActionButton icon={Moon} label="Sleep" onPress={sleep} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FAFC',
    padding: 20,
  },
  name: {
    fontFamily: 'Inter_700Bold',
    fontSize: 32,
    color: '#2D3748',
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 20,
  },
  stats: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
  },
});