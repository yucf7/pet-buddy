import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Video as LucideIcon } from 'lucide-react-native';

interface ActionButtonProps {
  icon: LucideIcon;
  label: string;
  onPress: () => void;
}

export function ActionButton({ icon: Icon, label, onPress }: ActionButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Icon size={24} color="#4A5568" />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    gap: 8,
    flex: 1,
  },
  label: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: '#4A5568',
  },
});