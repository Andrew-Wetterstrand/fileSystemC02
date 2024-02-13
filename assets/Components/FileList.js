/* FileList functional component */
import { useEffect, useState } from 'react';
import * as FileSystem from 'expo-file-system';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export const FileList = ({directoryUri, lastFileAdded }) => {
    const [directoryListing, setDirectoryListing] = useState(null);

    const grabListing = async (uri) => {
        const listing = await FileSystem.readDirectoryAsync(uri);
        setDirectoryListing(listing);
    }

    useEffect(() => {
        grabListing(directoryUri);
    }, [directoryUri, lastFileAdded]);

    if (!directoryListing) {
        return (<View><Text>Ugh! There are no files!</Text></View>);
    } else {
        return (
            <ScrollView style={styles.scroll}>
                {
                directoryListing.map(
                    (name, key) => (
                        <Text style={styles.scrollText} key={key}> {name}</Text>
                    ))                
                }
            </ScrollView>)
    }

}

const styles = StyleSheet.create({
    scroll: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 2,
        borderStyle: 'dashed',
    },
    scrollText: {
        fontSize: 24,
    }
})