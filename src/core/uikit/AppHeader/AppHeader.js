import React from 'react';
import {Appbar} from 'react-native-paper';

const AppHeader = ({goBack, title, subtitle, action, headerStyle}) => {
  return (
    <Appbar.Header style={headerStyle}>
      {goBack && <Appbar.BackAction onPress={goBack} />}
      <Appbar.Content title={title} subtitle={subtitle} />
      {action}
    </Appbar.Header>
  );
};

export default AppHeader;
