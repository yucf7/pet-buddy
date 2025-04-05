import { StyleSheet, Text, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { usePetStore } from '@/stores/petStore';

export default function StatsScreen() {
  const { happiness, hunger, energy } = usePetStore();

  const data = {
    labels: ['6h ago', '4h ago', '2h ago', 'Now'],
    datasets: [
      {
        data: [80, 85, happiness - 10, happiness],
        color: () => '#FF6B6B',
        strokeWidth: 2,
      },
      {
        data: [90, 85, hunger - 5, hunger],
        color: () => '#48BB78',
        strokeWidth: 2,
      },
      {
        data: [70, 75, energy - 15, energy],
        color: () => '#4299E1',
        strokeWidth: 2,
      },
    ],
    legend: ['Happiness', 'Hunger', 'Energy'],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pet Statistics</Text>
      <View style={styles.chart}>
        <LineChart
          data={data}
          width={350}
          height={220}
          chartConfig={{
            backgroundColor: '#fff',
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(74, 85, 104, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Peak Happiness</Text>
          <Text style={styles.statValue}>100%</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Longest Play Session</Text>
          <Text style={styles.statValue}>45 min</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Times Fed Today</Text>
          <Text style={styles.statValue}>3</Text>
        </View>
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
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 32,
    color: '#2D3748',
    marginTop: 60,
    marginBottom: 20,
  },
  chart: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  statsContainer: {
    marginTop: 20,
    gap: 12,
  },
  statItem: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statLabel: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#4A5568',
  },
  statValue: {
    fontFamily: 'Inter_700Bold',
    fontSize: 18,
    color: '#2D3748',
  },
});