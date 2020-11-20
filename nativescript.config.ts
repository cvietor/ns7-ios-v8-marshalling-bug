import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.ns7iosv8marshallingbug',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  }
} as NativeScriptConfig;