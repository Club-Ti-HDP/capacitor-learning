import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'GoodPeople',
  webDir: 'out',
  bundledWebRuntime: false,
  server: {
    url: "http://192.168.100.64",
    cleartext: true
  }
};

export default config;
