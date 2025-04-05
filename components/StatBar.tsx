import { StyleSheet, Text, View } from 'react-native';
import { Heart, Battery, Pizza } from 'lucide-react-native';

interface StatBarProps {
  type: 'happiness' | 'energy' | 'hunger';
  value: number;
}

export function StatBar({ type, value }: StatBarProps) {
  const getIcon = () => {
    switch (type) {
      case 'happiness':
        return <Heart size={24} color="#FF6B6B" />;
      case 'energy':
        return <Battery size={24} color="#4299E1" />;
      case 'hunger':
        return <Pizza size={24} color="#48BB78" />;
    }
  };

  return (
    <View style={styles.container}>
      {getIcon()}
      <View style={styles.barContainer}>
        <View style={[styles.bar, { width: `${value}%` }]} />
      </View>
      <Text style={styles.value}>{value}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    gap: 12,
  },
  barContainer: {
    flex: 1,
    height: 12,
    backgroundColor: '#E2E8F0',
    borderRadius: 6,
    overflow: 'hidden',
  },
  bar: {
    height: '100%',
    backgroundColor: '#4A5568',
    borderRadius: 6,
  },
  value: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: '#4A5568',
    minWidth: 45,
  },
});