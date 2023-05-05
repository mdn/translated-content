---
title: Firefox 62 for developers
slug: Mozilla/Firefox/Releases/62
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 62 that will affect developers. Firefox 62 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta), and will ship on [September 5, 2018](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

## Changes for web developers

### Developer tools

- You now have four options for the location of the Developer Tools. In addition to the default location on the bottom of the window, you can choose to locate the tools on either the left or right sides of the main window or in a separate window.
- You can now split the Rules view out into its own pane, separate from the other tabs on the CSS pane. See [Page inspector 3-pane mode](/zh-CN/docs/Tools/Page_Inspector/3-pane_mode) for more details.
- The Grid inspector has updated features, and all new documentation — see [CSS Grid Inspector: Examine grid layouts](/zh-CN/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts).
- The [Accessibility inspector](/zh-CN/docs/Tools/Accessibility_inspector) has had a couple of minor updates:

  - It no longer exposes the `help` property, which isn't properly implemented in Gecko ([Firefox bug 1467643](https://bugzil.la/1467643)).
  - The `keyboardShortcut` property now correctly exposes any keyboard shortcut available to activate the currently inspected node ([Firefox bug 1467381](https://bugzil.la/1467381)).

### HTML

_没有变化。_

### CSS

- `:-moz-selection` has been unprefixed ([Firefox bug 509958](https://bugzil.la/509958)).
- `x` is now supported as a unit for the [`<resolution>`](/zh-CN/docs/Web/CSS/resolution) type ([Firefox bug 1460655](https://bugzil.la/1460655)).
- [`shape-margin`](/zh-CN/docs/Web/CSS/shape-margin), [`shape-outside`](/zh-CN/docs/Web/CSS/shape-outside), and [`shape-image-threshold`](/zh-CN/docs/Web/CSS/shape-image-threshold) are now enabled by default ([Firefox bug 1457297](https://bugzil.la/1457297)).

### SVG

_No changes._

### JavaScript

- The {{jsxref("Array.prototype.flat()")}} and {{jsxref("Array.prototype.flatMap()")}} methods are now enabled by default ([Firefox bug 1435813](https://bugzil.la/1435813)).
- The [`import.meta`](/zh-CN/docs/Web/JavaScript/Reference/Statements/import.meta) property has been implemented to expose context-specific metadata to a JavaScript module ([Firefox bug 1427610](https://bugzil.la/1427610)).
- JavaScript [string literals](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#String_literals) may now directly contain U+2028 LINE SEPARATOR and U+2029 PARAGRAPH SEPARATOR. As a consequence, {{jsxref("JSON")}} syntax is now a subset of JavaScript literal syntax (see [Firefox bug 1435828](https://bugzil.la/1435828) and the tc39 proposal [json-superset](https://github.com/tc39/proposal-json-superset)).
- For out-of-bounds [typed array](/zh-CN/docs/Web/JavaScript/Typed_arrays) indexes, {{jsxref("Reflect.defineProperty()")}} and {{jsxref("Reflect.set()")}} will now return `false` instead of `true` ([Firefox bug 1308735](https://bugzil.la/1308735)).

### APIs

#### New APIs

- The [Speech Synthesis API (Text-to-Speech)](/zh-CN/docs/Web/API/Web_Speech_API) is now enabled by default on Firefox for Android ([Firefox bug 1463496](https://bugzil.la/1463496)).

#### DOM

- The {{domxref("DOMPointReadOnly")}} interface now supports the static function {{domxref("DOMPointReadOnly.fromPoint()")}}, which creates a new point object from a dictionary that's compatible with {{domxref("DOMPointInit")}}. This function is also available on {{domxref("DOMPoint")}} ([Firefox bug 1186265](https://bugzil.la/1186265)).
- Related to the previous item, the `DOMPoint` and `DOMPointReadOnly` constructors no longer support an input parameter of type `DOMPointInit`; the values of the properties must be specified using the `x`, `y`, `z`, and `w` parameters ([Firefox bug 1186265](https://bugzil.la/1186265)).
- The {{domxref("URL.createObjectURL()")}} method no longer supports creating object URLs to represent a {{domxref("MediaStream")}}. This capability has been obsolete for some time now, since you can simply set {{domxref("HTMLMediaElement.srcObject")}} to the `MediaStream` directly now ([Firefox bug 1454889](https://bugzil.la/1454889)).
- For compatibility purposes, the {{domxref("Event.srcElement")}} property is now supported. It is an alias for {{domxref("Event.target")}} ([Firefox bug 453968](https://bugzil.la/453968)).
- {{domxref("Navigator.registerProtocolHandler()")}} now must only be called from a secure context ([Firefox bug 1460506](https://bugzil.la/1460506)).
- The {{domxref("Navigator.registerContentHandler()")}} method has been disabled by default in preparation for being removed entirely, as it's been obsolete for some time ([Firefox bug 1460481](https://bugzil.la/1460481)).

#### DOM events

_No changes._

#### Service workers

_No changes._

#### Media, Web Audio, and WebRTC

- The `"media.autoplay.enabled"` preference now controls automatic playback of both audio and video media, instead of just video media ([Firefox bug 1413098](https://bugzil.la/1413098)).
- The {{domxref("ChannelSplitterNode")}} has been fixed to correctly default to having 6 channels with the `channelInterpretation` set to `"discrete"` and the `channelCountMode` set to `"explicit"` per the specification ([Firefox bug 1456265](https://bugzil.la/1456265)).

#### Canvas and WebGL

_No changes._

### CSSOM

- Support for [`CSSStyleDeclaration.getPropertyCSSValue()`](/zh-CN/docs/Web/API/CSSStyleDeclaration/getPropertyCSSValue) has been removed ([Firefox bug 1408301](https://bugzil.la/1408301)).
- Support for [`CSSValue`](/zh-CN/docs/Web/API/CSSValue), [`CSSPrimitiveValue`](/zh-CN/docs/Web/API/CSSPrimitiveValue), and [`CSSValueList`](/zh-CN/docs/Web/API/CSSValueList) has been removed ({{bug()}}).
- [`window.getComputedStyle()`](/zh-CN/docs/Web/API/Window/getComputedStyle) no longer returns `null` when called on a `Window` which has no presentation ([Firefox bug 1467722](https://bugzil.la/1467722)).

### HTTP

- The deprecated CSP {{CSP("referrer")}} directive has been removed. Please use the {{HTTPHeader("Referrer-Policy")}} header instead ([Firefox bug 1302449](https://bugzil.la/1302449)).

### Security

_No changes._

### Plugins

_No changes._

### Other

_No changes._

## Removals from the web platform

### HTML

_No changes._

### CSS

_No changes._

### APIs

_No changes._

### SVG

_No changes._

### Other

_No changes._

## Changes for add-on and Mozilla developers

### WebExtensions

#### API changes

- [`webRequest.getSecurityInfo()`](/zh-CN/Add-ons/WebExtensions/API/webRequest/getSecurityInfo) API to examine details of TLS connections ([Firefox bug 1322748](https://bugzil.la/1322748)).
- [`browserSettings.newTabPosition`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/newTabPosition) to customize where new tabs open ([Firefox bug 1344749](https://bugzil.la/1344749)).
- `windowTypes` has been deprecated in [`windows.get()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/windows/get), [`windows.getCurrent()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/windows/getCurrent) and [`windows.getLastFocused()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/windows/getLastFocused) ([Firefox bug 1419132](https://bugzil.la/1419132)).
- It's now possible to modify a browser action on a per-window basis ([Firefox bug 1419893](https://bugzil.la/1419893)).

#### Manifest changes

- New `open_at_install` property of the [`sidebar_action`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) manifest key enables extensions to control whether their sidebars should open automatically on install or not ([Firefox bug 1460910](https://bugzil.la/1460910)).
- Changed to the `browser_style` property of various manifest keys:

  - in [`page_action`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) and [`browser_action`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) it defaults to false
  - in [`sidebar_action`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) and [`options_ui`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) it defaults to true.

#### Theme changes

- New `tab_background_separator` property of the [`theme`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) manifest key enables extensions to change the color of the tab separator.

#### Other changes

- Support for unpacked sideloaded extensions has been removed ([Firefox bug 1385057](https://bugzil.la/1385057)).

## See also

- Site compatibility for Firefox 62

## Older versions

{{Firefox_for_developers(61)}}
