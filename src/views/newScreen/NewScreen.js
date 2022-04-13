import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useSimpsonsValue} from '../../contexts/SimpsonsContext';

export default function NewScreen() {
  const {addItem} = useSimpsonsValue();
  const nav = useNavigation();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = data => {
    addItem(data);
    nav.goBack();
  };

  return (
    <View>
      <Controller
        control={control}
        name="name"
        rules={{
          required: true,
        }}
        render={({field: {onChange}}) => (
          <TextInput
            label={'Name Surname'}
            mode="outlined"
            style={styles.name}
            theme={styles.textTheme}
            onChangeText={value => onChange(value)}
          />
        )}
      />
      {errors.name && <Text style={styles.errorText}>This is required.</Text>}

      <Controller
        control={control}
        name="job"
        render={({field: {onChange}}) => (
          <TextInput
            label={'Job Title'}
            mode="outlined"
            style={styles.name}
            theme={styles.textTheme}
            onChangeText={value => onChange(value)}
          />
        )}
      />
      <Controller
        control={control}
        name="description"
        render={({field: {onChange}}) => (
          <TextInput
            label={'About Him/Her'}
            mode="outlined"
            multiline={true}
            numberOfLines={3}
            style={styles.name}
            theme={styles.textTheme}
            onChangeText={value => onChange(value)}
          />
        )}
      />
      <Controller
        control={control}
        name="avatar"
        render={({field: {onChange}}) => (
          <TextInput
            label={'Image Link'}
            mode="outlined"
            style={styles.name}
            theme={styles.textTheme}
            onChangeText={value => onChange(value)}
          />
        )}
      />

      <TouchableOpacity
        testID="add-btn"
        style={styles.submitBtn}
        onPress={handleSubmit(onSubmit)}>
        <Text style={styles.submitBtnTitle}>Add Character</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textTheme: {
    colors: {
      text: '#636363',
      primary: 'rgb(33, 151, 186)',
      placeholder: '#636363',
    },
  },
  name: {
    borderRadius: 5,
    margin: 5,
  },
  submitBtn: {
    margin: 5,
    height: 44,
    backgroundColor: '#008cff',
    borderRadius: 10,
    justifyContent: 'center',
  },
  submitBtnTitle: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 20,
  },
  errorText: {marginHorizontal: 5, color: 'red', marginBottom: 5},
});
