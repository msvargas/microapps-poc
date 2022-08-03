# Module Federation example using Webpack and Re.Pack for React Native

## Installation

```bash
yarn --cwd MicroAppOne && yarn --cwd MicroAppTwo && yarn --cwd Host
```

## Usage

### Running app 1 container

App can be run as a standalone application using:

1. `STANDALONE=1 yarn --cwd MicroAppOne start` (notice the dev server is running on port 9000)
2. `yarn --cwd MicroAppOne ios`/`yarn --cwd MicroAppOne android`

Or as part of a Host application.

### Running app 2 container

App can be run as a standalone application using:

1. `STANDALONE=1 yarn --cwd MicroAppTwo start` (notice the dev server is running on port 9001)
2. `yarn --cwd MicroAppTwo ios`/`yarn --cwd MicroAppTwo android`

Or as part of a Host application.

### Running Host application with app containers

1. Run dev server for app 1 container: `yarn --cwd MicroAppOne start`
2. Run dev server for app 2 container: `yarn --cwd MicroAppTwo start`
3. Run dev server for Host application: `yarn --cwd Host start`
4. Build Host application: `yarn --cwd Host ios`/`yarn --cwd Host android`

### Running Web Host application with app containers

1. Run dev server for app 1 container: `yarn --cwd MicroAppOne start`
2. Run dev server for app 2 container: `yarn --cwd MicroAppTwo start`
3. Run dev server for Host application: `yarn --cwd WebHost start`

### Notes

It might be helpful to open Re.Pack's web dashboard to analyse artifacts:

- http://localhost:9000/dashboard for MicroAppOne container
- http://localhost:9001/dashboard for MicroAppTwo container
- http://localhost:8081/dashboard for Host container

## NOTE: 

For Android, you should to change localhost to 10.0.2.2

https://github.com/msvargas/microapps-poc/issues/2

# React Native Web Support

https://stackblitz.com/edit/github-l3cwda-lqkjpy?file=app1%2Fsrc%2FApp.js
https://github.com/necolas/react-native-web/issues/2273
