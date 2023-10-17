import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Inputhora = () => {
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (time) => {
    // Formate a hora selecionada (opcional)
    const formattedTime = time.toLocaleTimeString();

    setSelectedTime(formattedTime);
    hideTimePicker();
  };

  return (
    <View>
      <Button title="Selecionar Hora" onPress={showTimePicker} />
      <Text>Hora Selecionada: {selectedTime}</Text>
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
      />
    </View>
  );
};

export default Inputhora;
