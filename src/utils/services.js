import OAuthManager from 'react-native-oauth';

export const CLIENT_ID ='Iv1.3a8eb35331ce03e6'
export const CLIENT_SECRET= '4364bda2cbf3a7392d35f3f01829de47948dbf0e'

export const manager = new OAuthManager('DemoGithubTest')
manager.configure({
  github: {
    client_id: CLIENT_ID ,
    client_secret: CLIENT_SECRET
  }
});
