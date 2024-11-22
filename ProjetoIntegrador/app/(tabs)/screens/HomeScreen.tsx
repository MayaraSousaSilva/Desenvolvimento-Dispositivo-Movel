import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bem-vindo à Home!</Text>
      <Button title="Ir para Configurações" onPress={() => navigation.navigate('Settings')} />
      <Button title="Ir para Cadastro" onPress={() => navigation.navigate('Cadastro')} />
    </View>
  );
}