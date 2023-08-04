---
title: Navigator
slug: Web/API/Navigator
---

{{ apiref() }}

The **`Navigator`** interface represents the state and the identity of the user agent. It allows scripts to query it and to register themselves to carry on some activities.

A `Navigator` object can be retrieved using the read-only {{domxref("Window.navigator")}} property.

## Properties

_Doesn't inherit any property, but implements those defined in {{domxref("NavigatorID")}}, {{domxref("NavigatorLanguage")}}, {{domxref("NavigatorOnLine")}}, {{domxref("NavigatorGeolocation")}}, {{domxref("NavigatorPlugins")}}, {{domxref("NavigatorUserMedia")}}, and {{domxref("NetworkInformation")}}._

### Standard

- {{domxref("NavigatorID.appCodeName")}} {{readonlyInline}}{{experimental_inline}}
  - : Returns the internal "code" name of the current browser. Do not rely on this property to return the correct value.
- {{domxref("NavigatorID.appName")}} {{readonlyInline}}{{experimental_inline}}
  - : Returns a {{domxref("DOMString")}} with the official name of the browser. Do not rely on this property to return the correct value.
- {{domxref("NavigatorID.appVersion")}} {{readonlyInline}}{{experimental_inline}}
  - : Returns the version of the browser as a {{domxref("DOMString")}}. Do not rely on this property to return the correct value.
- {{domxref("Navigator.battery")}} {{readonlyInline}}
  - : Returns a {{domxref("BatteryManager")}} object you can use to get information about the battery charging status.
- {{domxref("NetworkInformation.connection")}} {{readonlyInline}}{{experimental_inline}}
  - : Provides a {{domxref("Connection")}} with information about the network connection of a device.
- {{domxref("NavigatorGeolocation.geolocation")}} {{readonlyInline}}
  - : Returns a {{domxref("Geolocation")}} object allowing accessing the location of the device.
- {{domxref("NavigatorPlugins.javaEnabled")}} {{readonlyInline}}{{experimental_inline}}
  - : Returns a {{domxref("Boolean")}} flag indicating whether the host browser is Java-enabled or not.
- {{domxref("NavigatorLanguage.language")}} {{readonlyInline}}
  - : Returns a {{domxref("DOMString")}} representing the preferred language of the user, usually the language of the browser UI. The `null` value is returned when this is unknown.
- {{domxref("NavigatorLanguage.languages")}} {{readonlyInline}}
  - : Returns an array of {{domxref("DOMString")}} representing the languages known to the user, by order of preference.
- {{domxref("NavigatorPlugins.mimeTypes")}} {{readonlyInline}}{{experimental_inline}}
  - : Returns an {{domxref("MimeTypeArray")}} listing the MIME types supported by the browser.
- {{domxref("NavigatorOnLine.onLine")}} {{readonlyInline}}
  - : Returns a {{domxref("Boolean")}} indicating whether the browser is working online.
- {{domxref("Navigator.oscpu")}}
  - : Returns a string that represents the current operating system.
- {{domxref("NavigatorID.platform")}} {{readonlyInline}}{{experimental_inline}}
  - : Returns a string representing the platform of the browser. Do not rely on this function to return a significant value.
- {{domxref("NavigatorPlugins.plugins")}} {{readonlyInline}}{{experimental_inline}}
  - : Returns a {{domxref("PluginArray")}} listing the plugins installed in the browser.
- {{domxref("NavigatorID.product")}} {{readonlyInline}} {{experimental_inline}}
  - : Always returns `'Gecko'`, on any browser. This property is kept only for compatibility purpose.
- {{domxref("NavigatorID.userAgent")}} {{readonlyInline}}
  - : Returns the user agent string for the current browser.
- {{domxref("Navigator.serviceWorker")}} {{readonlyInline}}
  - : Returns a {{domxref("ServiceWorkerContainer")}} object, which provides access to registration, removal, upgrade, and communication with the {{domxref("ServiceWorker")}} objects for the [associated document](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window).

### Non-standard

- {{domxref("window.navigator.buildID", "navigator.buildID")}} {{non-standard_inline}}
  - : Returns the build identifier of the browser (e.g., "2006090803").
- {{domxref("Navigator.cookieEnabled")}} {{non-standard_inline}}
  - : Returns a boolean indicating whether cookies are enabled in the browser or not.
- {{domxref("navigator.doNotTrack")}} {{non-standard_inline}}
  - : Reports the value of the user's do-not-track preference. When this value is "yes", your web site or application should not track the user.
- {{domxref("navigator.id")}} {{non-standard_inline}}
  - : Returns the {{domxref("window.navigator.id", "id")}} object which you can use to add support for [BrowserID](/pt-BR/docs/BrowserID) to your web site.
- {{domxref("window.navigator.mozApps", "navigator.mozApps")}} {{non-standard_inline}}
  - : Returns an {{domxref("window.navigator.mozApps", "Apps")}} object you can use to install, manage, and control [Open Web apps](/Open_Web_Apps).
- {{domxref("Navigator.mozAudioChannelManager", "navigator.mozAudioChannelManager")}} {{non-standard_inline}}
  - : The `navigator.mozAudioChannelManager` object provides access to the {{domxref("mozAudioChannelManager")}} interface, which is used to manage your Firefox OS device's audio channels, including setting what channel's volume to affect when the volume buttons are pressed inside a particular app.
- {{domxref("window.navigator.mozNotification","navigator.mozNotification")}} {{deprecated_inline}} {{non-standard_inline}}
  {{domxref("window.navigator.webkitNotification","navigator.webkitNotification")}}
  - : Returns a {{domxref("navigator.mozNotification", "notification")}} object you can use to deliver notifications to the user from your web application.
- {{domxref("navigator.mozSocial")}} {{non-standard_inline}}
  - : The Object, returned by the `navigator.mozSocial` property, is available within the social media provider's panel to provide functionality it may need.
- {{domxref("window.navigator.productSub", "navigator.productSub")}} {{non-standard_inline}}
  - : Returns the build number of the current browser (e.g., "20060909").
- {{domxref("window.navigator.securitypolicy", "navigator.securitypolicy")}} {{non-standard_inline}}
  - : Returns an empty string. In Netscape 4.7x, returns "US & CA domestic policy" or "Export policy".
- {{domxref("window.navigator.standalone", "navigator.standalone")}} {{non-standard_inline}}
  - : Returns a boolean indicating whether the browser is running in standalone mode. Available on Apple's iOS Safari only.
- {{domxref("window.navigator.vendor", "navigator.vendor")}} {{non-standard_inline}}
  - : Returns the vendor name of the current browser (e.g., "Netscape6").
- {{domxref("window.navigator.vendorSub", "navigator.vendorSub")}} {{non-standard_inline}}
  - : Returns the vendor version number (e.g. "6.1").
- [`navigator.webkitPointer`](/pt-BR/docs/API/Pointer_Lock_API) {{non-standard_inline}}
  - : Returns a PointerLock object for the [Mouse Lock API](/pt-BR/docs/API/Pointer_Lock_API).

## Methods

_Doesn't inherit any method, but implements those defined in {{domxref("NavigatorID")}}, {{domxref("NavigatorContentUtils")}}, _{{domxref("NavigatorUserMedia")}},_ and {{domxref("NavigatorStorageUtils")}}._

### Standard

- {{domxref("NavigatorUserMedia.getUserMedia()")}}
  - : After having prompted the user for permission, returns the audio or video stream associated to a camera or microphone on the local computer.
- {{domxref("window.navigator.registerContentHandler", "navigator.registerContentHandler")}}
  - : Allows web sites to register themselves as a possible handler for a given MIME type.
- {{domxref("navigator.registerProtocolHandler", "navigator.registerProtocolHandler")}}
  - : Allows web sites to register themselves as a possible handler for a given protocol.
- {{domxref("NavigatorID.taintEnabled()")}} {{deprecated_inline}} {{experimental_inline}}
  - : Returns `false`. JavaScript taint/untaint functions removed in JavaScript 1.2.
- {{domxref("Navigator.vibrate()")}}
  - : Causes vibration on devices with support for it. Does nothing if vibration support isn't available.

### Non standard

- {{domxref("window.navigator.mozIsLocallyAvailable", "navigator.mozIsLocallyAvailable")}} {{non-standard_inline}}
  - : Lets code check to see if the document at a given URI is available without using the network.
- {{domxref("window.navigator.mozPay", "navigator.mozPay")}} {{non-standard_inline}}
  - : Allows in-app payment.
- {{domxref("window.navigator.preference", "navigator.preference")}} {{non-standard_inline}}
  - : Sets a user preference. This method is [only available to privileged code](http://www.faqts.com/knowledge_base/view.phtml/aid/1608/fid/125/lang/en) and is obsolete; you should use the XPCOM [Preferences API](/pt-BR/docs/Preferences_API) instead.
- {{domxref("window.navigator.requestWakeLock", "navigator.requestWakeLock")}} {{non-standard_inline}}
  - : Request a wake lock for a resource. A wake lock prevents a specific part of a device from being turned off automatically.
