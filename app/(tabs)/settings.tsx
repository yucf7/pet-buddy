import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { usePetStore } from '@/stores/petStore';
import { useState } from 'react';

export default function SettingsScreen() {
  const { name, setName } = usePetStore();
  const [newName, setNewName] = useState(name);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pet Name</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={newName}
            onChangeText={setNewName}
            placeholder="Enter pet name"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => setName(newName)}>
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Feeding Time</Text>
          <Text style={styles.optionStatus}>On</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Play Time</Text>
          <Text style={styles.optionStatus}>Off</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Sleep Time</Text>
          <Text style={styles.optionStatus}>On</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.version}>Version 1.0.0</Text>
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
  section: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  sectionTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: '#2D3748',
    marginBottom: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    padding: 12,
    fontFamily: 'Inter_400Regular',
  },
  button: {
    backgroundColor: '#4A5568',
    padding: 12,
    borderRadius: 8,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Inter_600SemiBold',
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  optionText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#4A5568',
  },
  optionStatus: {
    fontFamily: 'Inter_600SemiBold',
    color: '#48BB78',
  },
  version: {
    fontFamily: 'Inter_400Regular',
    color: '#718096',
  },
});