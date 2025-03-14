---
title: Firefox 32 for developers
slug: Mozilla/Firefox/Releases/32
---

{{FirefoxSidebar}}

## 普通 Web 开发者应该注意的变化

### 开发者工具

Highlights:

- [Web Audio Editor](https://firefox-source-docs.mozilla.org/devtools-user/web_audio_editor/index.html)
- [Code completion and inline documentation in Scratchpad](/zh-CN/docs/Tools/Scratchpad#Code_completion_and_inline_documentation)
- [User agent styles in the Inspector's Rules view](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#rules_view)
- [Element picker button has moved](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#firefox_32_onwards_2)
- [Node dimensions added to the Inspector's infobar](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#firefox_32_onwards)
- [Full page screenshot button added](https://firefox-source-docs.mozilla.org/devtools-user/tools_toolbox/index.html#extra_tools)
- HiDPI images added to the tools
- Nodes that have `display:none` are shown differently in the Inspector

[All devtools bugs fixed between Firefox 31 and Firefox 32](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2014-06-09&chfield=resolution&query_format=advanced&chfieldfrom=2014-04-28&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20App%20Manager&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&product=Firefox).

### CSS

- 默认开启 {{cssxref("mix-blend-mode")}} ([Firefox bug 952643](https://bugzil.la/952643))。
- 在正式版本中默认开启 `position:sticky` (之前只在 Nightly 和 Aurora 版本中才会开启) ([Firefox bug 916315](https://bugzil.la/916315))。
- implement box-decoration-break: Left/right part of a box-shadow should only be drawn on the first/last continuation of an inline box ([Firefox bug 613659](https://bugzil.la/613659)).
- 允许 {{cssxref("flex-grow")}} / {{cssxref("flex-shrink")}} 在 0 和非 0 值之间作 transition , like 'flex-grow: 0.6'([Firefox bug 996945](https://bugzil.la/996945)).

### HTML

- Experimentally implemented, behind a pref, {{HTMLElement("img")}} [`srcset`](/zh-CN/docs/Web/HTML/Element/img#srcset) property, To activate it set `dom.image.srcset.enable` to `true` ([Firefox bug 870021](https://bugzil.la/870021)).
- [**id**](/zh-CN/docs/Web/HTML/Global_attributes/id) and [**class**](/zh-CN/docs/Web/HTML/Global_attributes/class) are now true [global attributes](/zh-CN/docs/Web/HTML/Global_attributes) and also apply to XML elements, in a namespace or not ([Firefox bug 741295](https://bugzil.la/741295)).

### JavaScript

- The following new ECMAScript 2015 built-in methods got implemented:
- {{jsxref("Array.from()")}} ([Firefox bug 904723](https://bugzil.la/904723)),
- {{jsxref("Array.prototype.copyWithin()")}} ([Firefox bug 934423](https://bugzil.la/934423)),
- {{jsxref("Number.isSafeInteger()")}} ([Firefox bug 1003764](https://bugzil.la/1003764)).

### Interfaces/APIs/DOM

- 实现了 {{domxref("NavigatorLanguage.languages", "navigator.languages")}} 属性和 [languagechange](/zh-CN/docs/Web/API/Window/languagechange_event) 事件。 ([Firefox bug 889335](https://bugzil.la/889335))。
- The {{domxref("Navigator.vibrate()")}} method behavior has been adapted to the latest specification: too long vibrations are now truncated ([Firefox bug 1014581](https://bugzil.la/1014581)).
- {{domxref("KeyboardEvent.getModifierState")}}() 和 {{domxref("MouseEvent.getModifierState")}}() 支持了 "Accel" 虚拟修饰符 ([Firefox bug 1009388](https://bugzil.la/1009388))。
- 实现了 {{domxref("KeyboardEvent.code")}} 属性，不过目前在正式版本中还是禁用状态 ([Firefox bug 865649](https://bugzil.la/865649))。
- Scoped selectors for {{domxref("Document.querySelector()")}} and {{domxref("Document.querySelectorAll()")}}, for example `querySelector(":scope > li")`have been implemented ([Firefox bug 528456](https://bugzil.la/528456)).
- The experimental implementation of the {{domxref("Document.timeline")}} interface, related to the [Web Animation API](https://dev.w3.org/fxtf/web-animations/), has been added ([Firefox bug 998246](https://bugzil.la/998246)). It is controlled by `layout.web-animations.api.enabled` preference, enabled only on Nightly and Aurora for the moment.
- The [Data Store API](/zh-CN/docs/Web/API/Data_Store_API) has been made available to [Web Workers](/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers) ([Firefox bug 949325](https://bugzil.la/949325)). It still is only activated for certified applications.
- The [ServiceWorker](/zh-CN/docs/Web/API/Service_Worker_API) {{domxref("InstallPhaseEvent")}} and {{domxref("InstallEvent")}} interfaces have been implemented ([Firefox bug 967264](https://bugzil.la/967264)).
- The [MSISDN Verification API](/zh-CN/docs/Web/API/MSISDN_Verification_API), only activated for privileged apps, has been added ([Firefox bug 988469](https://bugzil.la/988469)).
- The [Gamepad API](/zh-CN/docs/Web/API/Gamepad_API) is now supported on Firefox for Android ([Firefox bug 852935](https://bugzil.la/852935)).
- To match the spec and the evolution of the CSS syntax, minor changes have been done to {{domxref("CSS.escape()")}}. The identifier now can begins with `'--'` and the second dash must not be escaped. Also vendor identifier are no more escaped. ([Firefox bug 1008719](https://bugzil.la/1008719))
- To complete our Hit Regions implementation, {{domxref("MouseEvent.region")}} has been implemented ([Firefox bug 979692](https://bugzil.la/979692)).
- The {{domxref("CanvasRenderingContext2D.drawFocusIfNeeded()")}} method is now enabled by default ([Firefox bug 1004579](https://bugzil.la/1004579)).
- The {{domxref("Navigator.doNotTrack")}} properties now returns `'1'` or `'0'`, reflecting the HTTP value, instead of `'yes'` or `'no'` ([Firefox bug 887703](https://bugzil.la/887703)).
- [XMLHttpRequest.responseURL](/zh-CN/docs/Web/API/XMLHttpRequest/responseURL) was implemented ([Firefox bug 998076](https://bugzil.la/998076)).

### MathML

- 实现了 menclose 标记 `phasorangle`。

### SVG

_No change._

### WebRTC

- New constraints for [WebRTC](/zh-CN/docs/Glossary/WebRTC)'s {{domxref("NavigatorUserMedia.getUserMedia", "getUserMedia()")}}, `width`, `height`, and `framerate`, have been added, to limit stream dimensions and frame rate ([Firefox bug 907352](https://bugzil.la/907352)):

  ```js
  {
    mandatory: {
      width: { min: 640 },
      height: { min: 480 }
    },
    optional: [
      { width: 650 },
      { width: { min: 650 }},
      { frameRate: 60 },
      { width: { max: 800 }},
    ]
  }
  ```

- WebRTC methods which previously used callback functions as input parameters are now also available using JavaScript [promises](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise).

### Audio/Video

_No change._

## Security

- [Privileged code now gets Xray vision for JavaScript `Object` and `Array` instances](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html#xray_semantics_for_object_and_array).

## 附加组件 和 Mozilla 开发者应该注意的变化

Xray vision is now applied to JavaScript objects that are not themselves DOM objects: [Xrays for JavaScript objects](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html#xrays_for_javascript_objects).

A `getDataDirectory()` method has been added to [`Addon`](/zh-CN/docs/Mozilla/Add-ons/Add-on_Manager/Addon) instances. This method returns the preferred location, within the current profile, for add-ons to store data.

### Add-on SDK

#### Highlights

- Added [`exclude`](/zh-CN/Add-ons/SDK/High-Level_APIs/page-mod#PageMod%28options%29) option to `PageMod`.
- Added [`anonymous`](/zh-CN/Add-ons/SDK/High-Level_APIs/request#Request%28options%29) option to `Request`.
- [Add-on Debugger](/zh-CN/docs/Mozilla/Add-ons/Add-on_Debugger) now includes a Console and a Scratchpad.

#### Details

[GitHub commits made between Firefox 31 and Firefox 32](https://github.com/mozilla/addon-sdk/compare/firefox31...firefox32). This will not include any uplifts made after this release entered Aurora.

[Bugs fixed between Firefox 31 and Firefox 32](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-06-09&chfield=resolution&query_format=advanced&chfieldfrom=2014-04-28&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&product=Add-on%20SDK&list_id=10493962). This will not include any uplifts made after this release entered Aurora.

### XPCOM

- The `nsIUDPSocket` interface now provides multicast support through the addition of the new `nsIUDPSocket.multicastLoopback`, `nsIUDPSocket.multicastInterface`, and `nsIUDPSocket.multicastInterfaceAddr` attributes, as well as the `nsIUDPSocket.joinMulticast()` and `nsIUDPSocket.leaveMulticast()` methods.

## 参见

- [Site Compatibility for Firefox 32](/zh-CN/docs/Mozilla/Firefox/Releases/32/Site_Compatibility)

### 更早期的版本

{{Firefox_for_developers}}
