// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from '@nativescript/angular'
import { Application } from '@nativescript/core';
import { AppModule } from './app/app.module'

// A traditional NativeScript application starts by initializing global objects,
// setting up global CSS rules, creating, and navigating to the main page.
// Angular applications need to take care of their own initialization:
// modules, components, directives, routes, DI providers.
// A NativeScript Angular app needs to make both paradigms work together,
// so we provide a wrapper platform object, platformNativeScriptDynamic,
// that sets up a NativeScript application and can bootstrap the Angular framework.
if (global.isIOS) {
    // Custom iOS App Delegate
    @NativeClass()
    class MyDelegate extends UIResponder implements UIApplicationDelegate {
      public static ObjCProtocols = [UIApplicationDelegate];
    //   applicationOpenURLOptions(app: UIApplication, url: NSURL, options: NSDictionary<string, any>) {
    //     return SCSDKLoginClient.applicationOpenURLOptions(app, url, options);
    //   }
      applicationDidRegisterForRemoteNotificationsWithDeviceToken(
        application,
        deviceToken: NSData
      ) {
        const token = deviceToken.debugDescription.replace(/[< >]/g, '');
        const eventData = {
          eventName: 'iosAppDidRegisterForRemoteNotifications',
          object: this,
          data: {
            token
          }
        };
        Application.notify(eventData);
      }
      applicationDidFailToRegisterForRemoteNotificationsWithError() {
        const eventData = {
          eventName: 'iosAppDidFailRegisterForRemoteNotifications',
          object: this
        };
        Application.notify(eventData);
      }
      applicationSupportedInterfaceOrientationsForWindow(application, window) {
        return UIInterfaceOrientationMask.Portrait;
      }
      applicationWillFinishLaunchingWithOptions(
        application: UIApplication,
        launchOptions: NSDictionary<any, any>
      ): boolean {
        const eventData = {
          eventName: 'iosAppWillFinishLaunching',
          object: this,
          data: {
            application,
            launchOptions
          }
        };
        Application.notify(eventData);
        return true;
      }
      applicationDidFinishLaunchingWithOptions(
        application: UIApplication,
        launchOptions: NSDictionary<any, any>
      ): boolean {
        const eventData = {
          eventName: 'iosAppDidFinishLaunching',
          object: this,
          data: {
            application,
            launchOptions
          }
        };
        Application.notify(eventData);
        return true;
      }
      applicationDidBecomeActive(application: UIApplication): void {
        const eventData = {
          eventName: 'iosAppDidBecomeActive',
          object: this,
          data: {
            application
          }
        };
        Application.notify(eventData);
      }
      applicationWillEnterForeground() {
        const eventData = {
          eventName: 'iosAppWillEnterForeground',
          object: this
        };
        Application.notify(eventData);
      }
      applicationDidEnterBackground(application: UIApplication): void {
        const eventData = {
          eventName: 'iosAppDidEnterBackground',
          object: this,
          data: {
            application
          }
        };
        Application.notify(eventData);
        return;
      }
      applicationWillTerminate() {
        const eventData = {
          eventName: 'iosAppWillTerminate',
          object: this
        };
        Application.notify(eventData);
      }
    }
    Application.ios.delegate = MyDelegate;
  }
  platformNativeScriptDynamic().bootstrapModule(AppModule)