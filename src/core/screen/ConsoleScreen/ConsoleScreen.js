import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image, Alert} from 'react-native';
import {Subheading, Switch, TextInput, Button} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PAYLOAD_TYPE = {
  SERVER_KEY: 'SERVER_KEY',
  TARGET: 'TARGET',
  CHANNEL: 'CHANNEL',
  TITLE: 'TITLE',
  SUBTITLE: 'SUBTITLE',
  BODY: 'BODY',
  SOUND: 'SOUND',
  IMAGE_URL: 'IMAGE_URL',
};

const DataPayloadComponent = ({isEnabled}) => {
  if (isEnabled) {
    return (
      <View style={styles.cardBackground}>
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
  notificationImageUrl,
  setValue,
}) => {
  return (
    <View style={styles.payloadComponentContainer}>
      <TextInput
        style={styles.textInputMargin}
        value={channelName}
        mode="outlined"
        label="Android Channel Name"
        onChangeText={text => setValue(PAYLOAD_TYPE.CHANNEL, text)}
      />
      <TextInput
        style={styles.textInputMargin}
        value={notificationTitle}
        mode="outlined"
        label="Title"
        onChangeText={text => setValue(PAYLOAD_TYPE.TITLE, text)}
      />
      <TextInput
        style={styles.textInputMargin}
        value={notificationSubtitle}
        mode="outlined"
        label="Subtitle"
        onChangeText={text => setValue(PAYLOAD_TYPE.SUBTITLE, text)}
      />
      <TextInput
        style={styles.textInputMargin}
        value={notificationBody}
        mode="outlined"
        label="Body"
        onChangeText={text => setValue(PAYLOAD_TYPE.BODY, text)}
      />
      <TextInput
        style={styles.textInputMargin}
        value={notificationImageUrl}
        mode="outlined"
        label="Image URL"
        onChangeText={text => setValue(PAYLOAD_TYPE.IMAGE_URL, text)}
      />
      <TextInput
        style={styles.textInputMargin}
        value={notificationSound}
        mode="outlined"
        label="Sound"
        onChangeText={text => setValue(PAYLOAD_TYPE.SOUND, text)}
      />
    </View>
  );
};

const NotificationComponentViewer = ({notificationPayload}) => {
  return (
    <View style={styles.notificationComponentContainer}>
      <View>
        <View style={styles.notificationComponentHeader}>
          <MaterialCommunityIcons name="image" color={'blue'} size={20} />
          <Text style={styles.notificationAppName}>Application Name </Text>
          <Text style={styles.notificationSubtitle}>
            {'· ' + notificationPayload.subtitle + ' '}
          </Text>
          <Text style={styles.notificationSubtitle}>{'· Now'}</Text>
          <MaterialCommunityIcons
            name="chevron-down"
            color={'blue'}
            size={16}
          />
        </View>
        <Text>{notificationPayload.title}</Text>
        <Text style={styles.notificationSubtitle}>
          {notificationPayload.body}
        </Text>
      </View>
      {notificationPayload.imageUrl !== '' && (
        <Image
          style={styles.notificationImage}
          source={{
            uri: notificationPayload.imageUrl,
          }}
        />
      )}
    </View>
  );
};

const ConsoleScreen = ({}) => {
  const [isUseDataPayload, setUseDataPayload] = React.useState(false);
  const [serverKey, setServerKey] = React.useState('');
  const [channel, setChannel] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [subtitle, setSubtitle] = React.useState('');
  const [body, setBody] = React.useState('');
  const [sound, setSound] = React.useState('default');
  const [target, setTarget] = React.useState('');
  const [imageUrl, setImageUrl] = React.useState('');

  const setNotificationPayloadValue = (type, value) => {
    switch (type) {
      case PAYLOAD_TYPE.SERVER_KEY:
        setServerKey(value);
        break;
      case PAYLOAD_TYPE.TARGET:
        setTarget(value);
        break;
      case PAYLOAD_TYPE.CHANNEL:
        setChannel(value);
        break;
      case PAYLOAD_TYPE.TITLE:
        setTitle(value);
        break;
      case PAYLOAD_TYPE.BODY:
        setBody(value);
        break;
      case PAYLOAD_TYPE.SUBTITLE:
        setSubtitle(value);
        break;
      case PAYLOAD_TYPE.SOUND:
        setSound(value);
        break;
      case PAYLOAD_TYPE.IMAGE_URL:
        setImageUrl(value);
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <NotificationComponentViewer
        notificationPayload={{title, subtitle, body, imageUrl}}
      />
      <ScrollView>
        <View style={styles.cardBackground}>
          <Subheading>{'Firebase Configuration'}</Subheading>
          <TextInput
            mode="outlined"
            label="API Key (Legacy)"
            value={serverKey}
            onChangeText={text =>
              setNotificationPayloadValue(PAYLOAD_TYPE.SERVER_KEY, text)
            }
          />
        </View>
        <View style={styles.cardBackground}>
          <View style={styles.cardHeader}>
            <Subheading>{'Notification Payload'}</Subheading>
            <View style={styles.cardHeaderRightContent}>
              <Switch
                value={isUseDataPayload}
                onValueChange={() => {
                  setUseDataPayload(!isUseDataPayload);
                }}
              />
              <Text>{'Use Data'}</Text>
            </View>
          </View>
          <TextInput
            mode="outlined"
            label="To"
            value={target}
            onChangeText={text =>
              setNotificationPayloadValue(PAYLOAD_TYPE.TARGET, text)
            }
          />
          <NotificationPayloadComponent
            notificationTitle={title}
            notificationBody={body}
            notificationSubtitle={subtitle}
            notificationSound={sound}
            notificationImageUrl={imageUrl}
            setValue={(type, value) => setNotificationPayloadValue(type, value)}
          />
        </View>
        <DataPayloadComponent isEnabled={isUseDataPayload} />
      </ScrollView>
      <View style={styles.footerButtonContainer}>
        <Button
          icon="send"
          mode="contained"
          onPress={() =>
            sendPushNotification({
              serverKey,
              target,
              channel,
              title,
              subtitle,
              body,
              sound,
              imageUrl,
            })
          }>
          {'Send Push Notification'}
        </Button>
      </View>
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
  textInputMargin: {
    marginTop: 8,
  },
  notificationComponentContainer: {
    backgroundColor: '#EEEEEE22',
    borderColor: '#EEE',
    borderWidth: 1,
    margin: 8,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  notificationComponentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  notificationAppName: {
    color: 'blue',
    marginLeft: 4,
  },
  notificationSubtitle: {
    color: 'gray',
  },
  notificationImage: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
  cardBackground: {
    margin: 8,
    padding: 8,
    marginTop: 16,
    backgroundColor: '#EEEEEE55',
    borderRadius: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardHeaderRightContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerButtonContainer: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderTopColor: '#EEEEEE',
    borderTopWidth: 1,
  },
  payloadComponentContainer: {
    marginTop: 8,
  },
});

const sendPushNotification = ({
  serverKey,
  target,
  channel,
  title,
  subtitle,
  body,
  sound,
  imageUrl,
}) => {
  if (serverKey === '') {
    Alert.alert('Ouch!', 'Server Key must be filled');
  } else if (target === '') {
    Alert.alert('Ouch!', 'Token must be filled');
  } else if (title === '') {
    Alert.alert('Ouch!', 'Title must be filled');
  } else if (subtitle === '') {
    Alert.alert('Ouch!', 'Subtitle must be filled');
  } else if (body === '') {
    Alert.alert('Ouch!', 'Body must be filled');
  }

  fetch('https://fcm.googleapis.com/fcm/send', {
    method: 'POST',
    headers: {
      Authorization: 'key=' + serverKey,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      to: target,
      notification: {
        android_channel_id: channel,
        title: title,
        body: body,
        subtitle: subtitle,
        sound: sound,
        image: imageUrl,
      },
      priority: 'high',
    }),
  })
    .then(() => {
      Alert.alert('Notification Sent!');
    })
    .catch(() => {
      Alert.alert('Ouch!', 'Something went wrong');
    });
};

export default ConsoleScreen;
