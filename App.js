import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { useState } from 'react';
import { FileList } from './components/FileList';

export default function App() {
    const [lastFileAdded, setLastFileAdded] = useState(null);

  return (
      <View style={styles.container}>
          <View style={styles.container}>
              <Text style={styles.textStyle}>My Files</Text>
              <button title="Generate new file" onPress={() => { }} />
          </View>
          <View style={styles.container}>
              <FileList
                  directoryUri={FileSystem.documentDirectory}
                  lastFileAdded={lastFileAdded}
              />
        </View>
      <StatusBar style="auto" />
          </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
