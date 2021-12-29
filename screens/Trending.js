import React from 'react'
import { View, Text, Button } from 'react-native'

const Trending = ({navigation}) => {
    return (
        <View>
            <Text>Trending screen</Text>
            <Button title='Click' onPress={() => navigation.navigate('Movies')} />
        </View>
    )
}

export default Trending
