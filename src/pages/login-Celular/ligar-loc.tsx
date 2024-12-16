import React from "react";
import {View, TouchableOpacity, Text } from 'react-native';
import { ligarlocstyles } from './ligar-locstyles';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function ligarloc(){
    return (

        <View style={ligarlocstyles.container}>
<SimpleLineIcons
        name="location-pin"
        size={60}
        color="#7b2cbf"
        style={ligarlocstyles.icon}
      />

      <View style={ligarlocstyles.textContainer}>
              <Text style={ligarlocstyles.text1}>Ligar localização</Text>
              <Text style={ligarlocstyles.text2}>
                É necessário que você ligue a localização para ter a melhor experiência com o Poundsflats. 
              </Text>
            </View>

            <View style={ligarlocstyles.bottomsContainer}>
                    <TouchableOpacity style={ligarlocstyles.bottom}>
                      <Text style={ligarlocstyles.bottomText}>Ligar localização</Text>
                    </TouchableOpacity>
            
                    <TouchableOpacity style={ligarlocstyles.bottom2}>
                      <Text style={ligarlocstyles.bottomText2}>Agora não</Text>
                    </TouchableOpacity>
                  </View>

        </View>

    )
}