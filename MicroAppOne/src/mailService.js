export const getMails = () => {
  var myHeaders = new Headers();
  myHeaders.append('Accept', 'application/json');
  myHeaders.append('lp-app-version', 'ios/4.182.0/58');
  myHeaders.append(
    'Authorization',
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImJhYTcwZDgyMTAwNTRiMWFiZjg2ZmY0MDRhZDdjYjgxIn0.eyJpc3MiOiIiLCJzdWIiOiJsb3dwYXltZW50QGxlbmRpbmdwb2ludC5jb20iLCJleHAiOjE2MDA0NjQ5NjMuNjE5NzcyLCJpYXQiOjE2MDAzNzg1NjMuNjE5ODU4LCJzY29wZSI6eyJpc0Z1bmRlZCI6MS4wLCJmaXJzdE5hbWUiOiJKb2huIiwibGFzdE5hbWUiOiJTbWl0aCIsImFwcGxpY2F0aW9uSWQiOiIwMDZTMDAwMDAwSFhqbjJJQUQiLCJjb250YWN0SWQiOiIwMDNTMDAwMDAxTmVlV2dJQUoifSwidXVpZCI6ImU3OGE1NTllLTc1NWMtOWMzNC1hMmU3LWVjYWRjZmFkOGQ4ZiJ9.APB8WK55HA6ZlARTtOv-yLayDJxw66yENxjoMUWck2KKHKwNGuOZuBfQG_b83LLeZnYbHgxZAz9XWsbiKpmiV3f8V3JvV5qmw5k1dX7JmPt7QHKcKpr9Nomn82Y972fumTPzUwa4RLRfMGdAotLt4Apl6IXbEqWMajz2q0up1qrIKV9CN2LO5vbTtG-WHTn5G6qWm3wYmwn93xbagn-n_EFlTTE-XuAnzpaxJV3Z5QR7zi17EwVSDF7T9rBcLc2RDiMjhnODi1ZyPMJCUwuL_TnYGJ4iYQ2wSZgJIYC8VdtUvS0FQOhVfAjp4tnGkquZtRx6z4qtQWhC1-tf1w-yUCTacO8-tFS1RRAZczWjfSQfMPAM4gXQUsI_t_7VwM49So5ax8Bjy65jFHOoDfpiy0femjn_9X7-Gnx7cqpP4aJbCqoE7ZB6LVoF0p5ChKw-8tdcuiIqSpmzCIMF9PpgnMImxPr84_YDwYZ3axe82Imyh_e6-lnhqAKA9KXSQhn7Bxtez7N61rL0gehFCSIxpoqnqxuHbqUrgqW7E0icbqJIP4rTaJoSv-csHC4Wf1mcnJ5GGofKEtHe7UJL0gKb82DWm7olINAIoPnM9Hpz2G2ti2IUJjP-7MggiWEAXrsdjYpH670amTCXBp8Oj3xSBiJw34DL83GSZBmmdBMj6H0',
  );
  myHeaders.append('lp-correlation-id', 'CP-hYUCLyvMSiLAyXfsugWdP');
  myHeaders.append('Content-Type', 'application/json');

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  return fetch(
    'https://b0db0f5a-362e-40dd-af17-213ebcac5eb0.mock.pstmn.io/consumer/v1/me/mails',
    requestOptions,
  )
    .then(response => response.json())
    .catch(error => console.log('error', error));
};
