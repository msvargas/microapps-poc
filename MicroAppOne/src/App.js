import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {getMails} from './mailService';
/* import BellIcon from './ico-bell.svg';
 */
export default function App({leftIcon, rightIcon}) {
  const [notifications, setNotifications] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    getMails()
      .then(data => {
        setNotifications(data.mails);
        console.log(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        /*  backgroundColor: 'lightblue',
        borderStyle: 'dashed',
        borderWidth: 5,
        borderColor: 'red', */
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 24,
            lineHeight: 32,
            marginBottom: 32,
            marginTop: 24,
            marginHorizontal: 24,
          }}>
          Notifications
        </Text>
        {isLoading && <ActivityIndicator size="large" />}
        {React.Children.toArray(
          notifications.map(notification => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                paddingVertical: 16,
              }}>
              {leftIcon}
              <View style={{flex: 0.7}}>
                <Text numberOfLines={3}>{notification.subject}</Text>
                <Text style={{color: 'grey'}}>
                  {notification.date?.substring(0, 10)}
                </Text>
              </View>
              {rightIcon}
            </View>
          )),
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
