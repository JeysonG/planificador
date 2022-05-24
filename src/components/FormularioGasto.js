import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  Pressable,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const FormularioGasto = () => {
  return (
    <SafeAreaView>
      <View>
        <Pressable>
          <Text>Cancelar</Text>
        </Pressable>
      </View>
      <View>
        <Text>Nuevo Gasto</Text>

        <View>
          <Text>Nombre gasto:</Text>
          <TextInput placeholder="Nombre del gasto Ej. comida" />
        </View>

        <View>
          <Text>Cantidad gasto:</Text>
          <TextInput
            placeholder="Cantidad del gasto Ej. 300"
            keyboardType="numeric"
          />
        </View>

        <View>
          <Text>Categoria gasto:</Text>
          <Picker>
            <Picker.Item label="-- Seleccione --" value="" />
            <Picker.Item label="Ahorro" value="ahorro" />
            <Picker.Item label="Comida" value="comida" />
            <Picker.Item label="Casa" value="casa" />
            <Picker.Item label="Gastos varios" value="gastos" />
            <Picker.Item label="Ocio" value="ocio" />
            <Picker.Item label="Salud" value="salud" />
            <Picker.Item label="Suscripciones" value="suscripciones" />
          </Picker>
        </View>

        <Pressable>
          <Text>Agregar Gasto</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default FormularioGasto;
