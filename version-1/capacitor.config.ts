import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'version-1',
  webDir: 'out',
  server: {
    url: "http://192.168.100.64",
    cleartext: true
  }
};

export default config;
