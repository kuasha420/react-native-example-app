import * as React from 'react';
import {Button} from 'react-native-paper';
import {DatePickerModal} from 'react-native-paper-dates';

function App() {
  const [visible, setVisible] = React.useState(false);
  const onDismiss = React.useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const onChange = React.useCallback(({date}) => {
    setVisible(false);
    console.log({date});
  }, []);

  const date = new Date();

  return (
    <>
      <DatePickerModal
        mode="single"
        visible={visible}
        onDismiss={onDismiss}
        date={date}
        onConfirm={onChange}
        saveLabel={'Save'} // optional
        label={'Select period'} // optional
      />
      <Button onPress={() => setVisible(true)}>Pick date</Button>
    </>
  );
}

export default App;
