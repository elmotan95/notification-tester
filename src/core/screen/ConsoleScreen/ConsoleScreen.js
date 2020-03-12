import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {Subheading, Switch, TextInput} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DataPayloadComponent = ({isEnabled}) => {
  if (isEnabled) {
    return (
      <View
        style={{
          margin: 8,
          padding: 8,
          marginTop: 16,
          backgroundColor: '#EEEEEE55',
          borderRadius: 4,
        }}>
        <Subheading>{'Firebase Configuration'}</Subheading>
        <TextInput mode="outlined" label="API Key (Legacy)" />
      </View>
    );
  }

  return null;
};

const NotificationPayloadComponent = ({
  channelName,
  notificationTitle,
  notificationSubtitle,
  notificationBody,
  notificationSound,
  setValue,
}) => {
  return (
    <View
      style={{
        marginTop: 8,
      }}>
      <TextInput
        style={{marginTop: 8}}
        value={channelName}
        mode="outlined"
        label="Android Channel Name (Optional)"
        onChangeText={text => setValue('CHANNEL', text)}
      />
      <TextInput
        style={{marginTop: 8}}
        value={notificationTitle}
        mode="outlined"
        label="Title"
        onChangeText={text => setValue('TITLE', text)}
      />
      <TextInput
        style={{marginTop: 8}}
        value={notificationSubtitle}
        mode="outlined"
        label="Subtitle"
        onChangeText={text => setValue('SUBTITLE', text)}
      />
      <TextInput
        style={{marginTop: 8}}
        value={notificationBody}
        mode="outlined"
        label="Body"
        onChangeText={text => setValue('BODY', text)}
      />
      <TextInput
        style={{marginTop: 8}}
        value={notificationSound}
        mode="outlined"
        label="Sound"
        onChangeText={text => setValue('SOUND', text)}
      />
      <View
        style={{
          marginTop: 8,
          height: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text>High Priority</Text>
        <Switch />
      </View>
    </View>
  );
};

const ConsoleScreen = ({navigation}) => {
  const [isUseDataPayload, setUseDataPayload] = React.useState(false);
  const [notificationPayload, setNotificationPayload] = React.useState({
    channel: '',
    title: '',
    subtitle: '',
    body: '',
    sound: 'default',
  });

  return (
    <View style={styles.container}>
      <View>
        <View
          style={{
            backgroundColor: '#EEEEEE22',
            borderColor: '#EEE',
            borderWidth: 1,
            margin: 8,
            padding: 14,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 4,
              }}>
              <MaterialCommunityIcons name="image" color={'blue'} size={20} />
              <Text style={{color: 'blue', marginLeft: 4}}>
                Application Name{' '}
              </Text>
              <Text style={{color: 'gray'}}>{'· Subtitle '}</Text>
              <Text style={{color: 'gray'}}>{'· Now'}</Text>
              <MaterialCommunityIcons
                name="chevron-down"
                color={'blue'}
                size={16}
              />
            </View>
            <Text>Title</Text>
            <Text style={{color: 'gray'}}>Notification Title</Text>
          </View>
          <Image
            style={{width: 50, height: 50, alignSelf: 'center'}}
            source={{
              uri:
                'https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg',
            }}
          />
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            margin: 8,
            padding: 8,
            marginTop: 16,
            backgroundColor: '#EEEEEE55',
            borderRadius: 4,
          }}>
          <Subheading>{'Firebase Configuration'}</Subheading>
          <TextInput mode="outlined" label="API Key (Legacy)" />
        </View>
        <View
          style={{
            margin: 8,
            padding: 8,
            marginTop: 16,
            backgroundColor: '#EEEEEE55',
            borderRadius: 4,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Subheading>{'Notification Payload'}</Subheading>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Switch
                value={isUseDataPayload}
                onValueChange={() => {
                  setUseDataPayload(!isUseDataPayload);
                }}
              />
              <Text>{'Use Data'}</Text>
            </View>
          </View>
          <TextInput mode="outlined" label="To" />
          <NotificationPayloadComponent
            notificationTitle={notificationPayload.title}
            notificationBody={notificationPayload.body}
            notificationSubtitle={notificationPayload.subtitle}
            notificationSound={notificationPayload.sound}
          />
        </View>
        <DataPayloadComponent isEnabled={isUseDataPayload} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  textStyle: {
    fontSize: 24,
  },
  inputStyle: {
    color: '#FFF',
    height: 48,
    minWidth: '60%',
    fontSize: 20,
    textAlign: 'center',
    borderBottomColor: '#FFF',
    borderBottomWidth: 1,
  },
  buttonStyle: {
    marginTop: 16,
    height: 40,
    width: '30%',
    borderRadius: 4,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ConsoleScreen;
