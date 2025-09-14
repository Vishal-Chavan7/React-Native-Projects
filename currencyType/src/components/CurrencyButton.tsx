import React from 'react'
import { View, Text,StyleSheet} from 'react-native'
import type { PropsWithChildren } from 'react'

type CurrencyButtonProps = PropsWithChildren<{
    name: string,
    flag: string,

}>

const CurrencyButton = (props:CurrencyButtonProps) => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.country}>{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    buttonContainer:{
        alignItems:'center',
        justifyContent:'center'
    },
    flag:{
        fontSize: 28,
        color: "#ffffff",
        marginBottom: 5
    },
    country:{
        fontSize: 14,
        color: "#2d3436"
    },
    
})

export default CurrencyButton