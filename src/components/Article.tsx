import React, { FC } from 'react';
import { StyleSheet, Text, View, Image, Linking, TouchableHighlight } from 'react-native';
import { Articles } from '../types/Articles';

export const Article: FC<Articles> = (props) => {

    function handleClick() {
        Linking.canOpenURL(props.url).then(supported => {
            if (supported) {
                Linking.openURL(props.url);
            }
        });
    };

    return (
        <View style={styles.container}>
            <TouchableHighlight onPress={handleClick}
                activeOpacity={0.7}
                underlayColor="#DDDDDD">
                <View>
                    {props.urlToImage ? <Image
                        style={styles.newsImage}
                        source={{ uri: props.urlToImage }}
                    /> : undefined}
                    <Text style={styles.title} numberOfLines={3}>{props.title}</Text>
                    {props.description ? <Text style={styles.description} numberOfLines={2}>{props.description}</Text> : undefined}
                    <Text style={styles.source} numberOfLines={1}>{props.source.name}</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: "#FFF",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderRadius: 4,
        elevation: 5,
    },
    newsImage: {
        flex: 1,
        height: 200
    },
    title: {
        padding: 5,
        flex: 1,
        fontWeight: 'bold'
    },
    description: {
        padding: 5,
        flex: 1,
        fontWeight: '300'
    },
    source: {
        padding: 5,
        flex: 1,
        textAlign: 'right',
        fontWeight: '100',
        fontStyle: 'italic'
    },
});
