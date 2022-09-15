---
title: Navigator
slug: Web/API/Navigator
translation_of: Web/API/Navigator
---
<p>{{ apiref() }}</p>

<p>The <code><strong>Navigator</strong></code> interface represents the state and the identity of the user agent. It allows scripts to query it and to register themselves to carry on some activities.</p>

<p>A <code>Navigator</code> object can be retrieved using the read-only {{domxref("Window.navigator")}} property.</p>

<h2 id="Properties">Properties</h2>

<p><em>Doesn't inherit any property, but implements those defined in {{domxref("NavigatorID")}}, {{domxref("NavigatorLanguage")}}, {{domxref("NavigatorOnLine")}}, {{domxref("NavigatorGeolocation")}}, {{domxref("NavigatorPlugins")}}, {{domxref("NavigatorUserMedia")}}, and {{domxref("NetworkInformation")}}.</em></p>

<h3 id="Standard">Standard</h3>

<dl>
 <dt>{{domxref("NavigatorID.appCodeName")}} {{readonlyInline}}{{experimental_inline}}</dt>
 <dd>Returns the internal "code" name of the current browser. Do not rely on this property to return the correct value.</dd>
 <dt>{{domxref("NavigatorID.appName")}} {{readonlyInline}}{{experimental_inline}}</dt>
 <dd>Returns a {{domxref("DOMString")}} with the official name of the browser. Do not rely on this property to return the correct value.</dd>
 <dt>{{domxref("NavigatorID.appVersion")}} {{readonlyInline}}{{experimental_inline}}</dt>
 <dd>Returns the version of the browser as a {{domxref("DOMString")}}. Do not rely on this property to return the correct value.</dd>
 <dt>{{domxref("Navigator.battery")}} {{readonlyInline}}</dt>
 <dd>Returns a {{domxref("BatteryManager")}} object you can use to get information about the battery charging status.</dd>
 <dt>{{domxref("NetworkInformation.connection")}} {{readonlyInline}}{{experimental_inline}}</dt>
 <dd>Provides a {{domxref("Connection")}} with information about the network connection of a device.</dd>
 <dt>{{domxref("NavigatorGeolocation.geolocation")}} {{readonlyInline}}</dt>
 <dd>Returns a {{domxref("Geolocation")}} object allowing accessing the location of the device.</dd>
 <dt>{{domxref("NavigatorPlugins.javaEnabled")}} {{readonlyInline}}{{experimental_inline}}</dt>
 <dd>Returns a {{domxref("Boolean")}} flag indicating whether the host browser is Java-enabled or not.</dd>
 <dt>{{domxref("NavigatorLanguage.language")}} {{readonlyInline}}</dt>
 <dd>Returns a {{domxref("DOMString")}} representing the preferred language of the user, usually the language of the browser UI. The <code>null</code> value is returned when this is unknown.</dd>
 <dt>{{domxref("NavigatorLanguage.languages")}} {{readonlyInline}}</dt>
 <dd>Returns an array of {{domxref("DOMString")}} representing the languages known to the user, by order of preference.</dd>
 <dt>{{domxref("NavigatorPlugins.mimeTypes")}} {{readonlyInline}}{{experimental_inline}}</dt>
 <dd>Returns an {{domxref("MimeTypeArray")}} listing the MIME types supported by the browser.</dd>
 <dt>{{domxref("NavigatorOnLine.onLine")}} {{readonlyInline}}</dt>
 <dd>Returns a {{domxref("Boolean")}} indicating whether the browser is working online.</dd>
 <dt>{{domxref("Navigator.oscpu")}}</dt>
 <dd>Returns a string that represents the current operating system.</dd>
 <dt>{{domxref("NavigatorID.platform")}} {{readonlyInline}}{{experimental_inline}}</dt>
 <dd>Returns a string representing the platform of the browser. Do not rely on this function to return a significant value.</dd>
 <dt>{{domxref("NavigatorPlugins.plugins")}} {{readonlyInline}}{{experimental_inline}}</dt>
 <dd>Returns a {{domxref("PluginArray")}} listing the plugins installed in the browser.</dd>
 <dt>{{domxref("NavigatorID.product")}} {{readonlyInline}} {{experimental_inline}}</dt>
 <dd>Always returns <code>'Gecko'</code>, on any browser. This property is kept only for compatibility purpose.</dd>
 <dt>{{domxref("NavigatorID.userAgent")}} {{readonlyInline}}</dt>
 <dd>Returns the user agent string for the current browser.</dd>
 <dt>{{domxref("Navigator.serviceWorker")}} {{readonlyInline}}</dt>
 <dd>Returns a {{domxref("ServiceWorkerContainer")}} object, which provides access to registration, removal, upgrade, and communication with the {{domxref("ServiceWorker")}} objects for the <a href="https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window">associated document</a>.</dd>
</dl>

<h3 id="Methods" name="Methods">Non-standard</h3>

<dl>
 <dt>{{domxref("window.navigator.buildID", "navigator.buildID")}} {{non-standard_inline}}</dt>
 <dd>Returns the build identifier of the browser (e.g., "2006090803").</dd>
 <dt>{{domxref("Navigator.cookieEnabled")}} {{non-standard_inline}}</dt>
 <dd>Returns a boolean indicating whether cookies are enabled in the browser or not.</dd>
 <dt>{{domxref("navigator.doNotTrack")}} {{non-standard_inline}}</dt>
 <dd>Reports the value of the user's do-not-track preference. When this value is "yes", your web site or application should not track the user.</dd>
 <dt>{{domxref("navigator.id")}} {{non-standard_inline}}</dt>
 <dd>Returns the {{domxref("window.navigator.id", "id")}} object which you can use to add support for <a href="/en-US/docs/BrowserID" title="BrowserID">BrowserID</a> to your web site.</dd>
 <dt>{{domxref("window.navigator.mozApps", "navigator.mozApps")}} {{non-standard_inline}}</dt>
 <dd>Returns an {{domxref("window.navigator.mozApps", "Apps")}} object you can use to install, manage, and control <a href="/Open_Web_Apps" title="Open Web apps">Open Web apps</a>.</dd>
 <dt>{{domxref("Navigator.mozAudioChannelManager", "navigator.mozAudioChannelManager")}} {{non-standard_inline}}</dt>
 <dd>The <code>navigator.mozAudioChannelManager</code> object provides access to the {{domxref("mozAudioChannelManager")}} interface, which is used to manage your Firefox OS device's audio channels, including setting what channel's volume to affect when the volume buttons are pressed inside a particular app.</dd>
 <dt>{{domxref("window.navigator.mozNotification","navigator.mozNotification")}} {{deprecated_inline("22")}} {{non-standard_inline}}<br>
 {{domxref("window.navigator.webkitNotification","navigator.webkitNotification")}}</dt>
 <dd>Returns a {{domxref("navigator.mozNotification", "notification")}} object you can use to deliver notifications to the user from your web application.</dd>
 <dt>{{domxref("navigator.mozSocial")}} {{non-standard_inline}}</dt>
 <dd>The Object, returned by the <code>navigator.mozSocial</code> property, is available within the social media provider's panel to provide functionality it may need.</dd>
 <dt>{{domxref("window.navigator.productSub", "navigator.productSub")}} {{non-standard_inline}}</dt>
 <dd>Returns the build number of the current browser (e.g., "20060909").</dd>
 <dt>{{domxref("window.navigator.securitypolicy", "navigator.securitypolicy")}} {{non-standard_inline}}</dt>
 <dd>Returns an empty string. In Netscape 4.7x, returns "US &amp; CA domestic policy" or "Export policy".</dd>
 <dt>{{domxref("window.navigator.standalone", "navigator.standalone")}} {{non-standard_inline}}</dt>
 <dd>Returns a boolean indicating whether the browser is running in standalone mode. Available on Apple's iOS Safari only.</dd>
 <dt>{{domxref("window.navigator.vendor", "navigator.vendor")}} {{non-standard_inline}}</dt>
 <dd>Returns the vendor name of the current browser (e.g., "Netscape6").</dd>
 <dt>{{domxref("window.navigator.vendorSub", "navigator.vendorSub")}} {{non-standard_inline}}</dt>
 <dd>Returns the vendor version number (e.g. "6.1").</dd>
 <dt><a href="/en-US/docs/API/Pointer_Lock_API" title="Mouse Lock API"><code>navigator.webkitPointer</code></a> {{non-standard_inline}}</dt>
 <dd>Returns a PointerLock object for the <a href="/en-US/docs/API/Pointer_Lock_API" title="Mouse Lock API">Mouse Lock API</a>.</dd>
</dl>

<h2 id="Methods" name="Methods">Methods</h2>

<p><em>Doesn't inherit any method, but implements those defined in {{domxref("NavigatorID")}}, {{domxref("NavigatorContentUtils")}}, <em>{{domxref("NavigatorUserMedia")}}, </em>and {{domxref("NavigatorStorageUtils")}}.</em></p>

<h3 id="Standard_2">Standard</h3>

<dl>
 <dt>{{domxref("NavigatorUserMedia.getUserMedia()")}}</dt>
 <dd>After having prompted the user for permission, returns the audio or video stream associated to a camera or microphone on the local computer.</dd>
 <dt>{{domxref("window.navigator.registerContentHandler", "navigator.registerContentHandler")}}</dt>
 <dd>Allows web sites to register themselves as a possible handler for a given MIME type.</dd>
 <dt>{{domxref("navigator.registerProtocolHandler", "navigator.registerProtocolHandler")}}</dt>
 <dd>Allows web sites to register themselves as a possible handler for a given protocol.</dd>
 <dt>{{domxref("NavigatorID.taintEnabled()")}} {{deprecated_inline("1.7.8")}} {{obsolete_inline("9.0")}} {{experimental_inline}}</dt>
 <dd>Returns <code>false</code>. JavaScript taint/untaint functions removed in JavaScript 1.2.</dd>
 <dt>{{domxref("Navigator.vibrate()")}} {{gecko_minversion_inline("11.0")}}</dt>
 <dd>Causes vibration on devices with support for it. Does nothing if vibration support isn't available.</dd>
</dl>

<h3 id="Specification" name="Specification">Non standard</h3>

<dl>
 <dt>{{domxref("window.navigator.mozIsLocallyAvailable", "navigator.mozIsLocallyAvailable")}} {{non-standard_inline}}</dt>
 <dd>Lets code check to see if the document at a given URI is available without using the network.</dd>
 <dt>{{domxref("window.navigator.mozPay", "navigator.mozPay")}} {{non-standard_inline}}</dt>
 <dd>Allows in-app payment.</dd>
 <dt>{{domxref("window.navigator.preference", "navigator.preference")}} {{obsolete_inline("2.0")}} {{non-standard_inline}}</dt>
 <dd>Sets a user preference. This method is <a class="external" href="http://www.faqts.com/knowledge_base/view.phtml/aid/1608/fid/125/lang/en">only available to privileged code</a> and is obsolete; you should use the XPCOM <a href="/en-US/docs/Preferences_API" title="Preferences_API">Preferences API</a> instead.</dd>
 <dt>{{domxref("window.navigator.requestWakeLock", "navigator.requestWakeLock")}} {{non-standard_inline}}</dt>
 <dd>Request a wake lock for a resource. A wake lock prevents a specific part of a device from being turned off automatically.</dd>
</dl>
