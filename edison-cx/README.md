# edison-cx

### Installation

1. Install nodejs

- [nodejs](https://nodejs.org/)

2. Install the project dependencies

```bash
edison-cx $ npm install -g bower gulp
edison-cx $ npm install
```

3. Install Android Studio

- [Android Studio](https://developer.android.com/studio/index.html)

Configure -> SDK Manager -> Appearance & Behaviour -> System Settings -> Android SDK

Ensure that Android API 6.0 (API 23) is checked and installed.

### Start services

```bash
edison-cx $ npm start
```

The Backstage URL is:

- HTTP: http://localhost:8000

### Run tests

```bash
edison-cx $ npm test
```

### Compile Frontend Ux

```bash
edison-cx $ gulp
```

### Deploy Personal Device (Cordova)

Plugin in Nexus 6 phone, then

```bash
edison-ux $ cd ux-personal
ux-personal $ cordova platform add android
ux-personal $ cordova run android --device
```

### Interesting Files

- src: all source files
- spec: all tests
- bower.json: Bower configuration
- package.json: npm configuration
- Gulpfile.js: gulp configuration
- server.js: hapi startup script
- ux-personal: cordova build directory
- www: static assets for service ux


### Environment Variable Reference

api
 - CLOUD_URL: url to cloud experience for CORS origin
 - SSL_KEY_FILE: path to SSL Key file
 - SSL_CERT_FILE: path to SSL Cert file

bot
 - CLOUD_URL: url to cloud experience for CORS origin
 - SSL_KEY_FILE: path to SSL Key file
 - SSL_CERT_FILE: path to SSL Cert file
 - LUIS_MODEL: URL to LUIS model
 - BOT_APP_ID: Bot instance identifier
 - BOT_APP_SECRET: Bot instance "secret" for authentication
 - WALMARTLABS_API_KEY: API Key for WalmartLabs

cloud:
 - API_URL: url to api endpoint to override docker link.
 - BOT_URL: url to bot endpoint to override docker link.
 - SSL_KEY_FILE: path to SSL Key file
 - SSL_CERT_FILE: path to SSL Cert file
 - BOT_APP_ID: Bot instance identifier
 - BOT_APP_SECRET: Bot instance "secret" for authentication
 - OXFORD_SPEECH_API_KEY: API Key for Microsoft speech api


