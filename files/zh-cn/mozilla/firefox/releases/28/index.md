---
title: Firefox 28 for developers
slug: Mozilla/Firefox/Releases/28
---

{{FirefoxSidebar}}

Firefox 28 was released on March 18, 2014. This article lists key changes that are useful not only for web developers, but also Firefox and Gecko developers as well as add-on developers.

## Changes for Web developers

### Developer Tools

- The {{domxref("console.exception")}} property has been added ({{bug("922214")}}).
- The {{domxref("console.assert")}} property has been added ({{bug("760193")}}).
- App Manager: a new Manifest Editor was added.
- App Manager: the toolbox used for debugging apps is now embedded in the app manager UI.
- Web Console: added a "split console" mode - press Escape to quickly open the console in any other tool.
- Web Console: added a dark theme for the output.
- Debugger: pretty-print minified JavaScript.
- Debugger: simply hover over any variable or click on it to bring up a pop-up that displays the current value.
- Inspector: added a color picker in rules view and various tooltips.
- Browser Toolbox: allows add-on and platform developers to use almost all of the developer tools while targeting the browser itself.

More details in [this post](https://hacks.mozilla.org/2013/12/split-console-pretty-print-minified-js-and-more-firefox-developer-tools-episode-28/).

### CSS

- Support for multi-line [flexbox](/zh-CN/docs/Web/Guide/CSS/Flexible_boxes) has been added ({{bug("939901")}}).
- Longhand East Asian [counter styles](/zh-CN/docs/Web/CSS/list-style-type) have been implemented ({{bug("934072")}}).
- Experimental support for the {{cssxref("background-blend-mode")}} property has been added, but is disabled by default ({{bug("841601")}}).
- The `none` value has been added to {{cssxref("font-variant-ligatures")}} ({{bug("913264")}}).
- Support for the :hover user action pseudo-class on pseudo-elements({{bug("922669")}}).

### HTML

- `<input type=color>` and `<input type=number>` have been implemented, disabled by default.

### JavaScript

- [ECMAScript 2015](/zh-CN/docs/Web/JavaScript/ECMAScript_6_support_in_Mozilla) implementation continues:

  - New `Array` methods have been implemented: {{jsxref("Array.prototype.entries()")}} and {{jsxref("Array.prototype.keys()")}} ({{bug("894658")}}).

- A bug causing that {{jsxref("Object.getOwnPropertyNames()")}} did not see unresolved properties of {{jsxref("Error")}} objects has been fixed ({{bug("724768")}}).

### Interfaces/APIs/DOM

- `HTMLVideoElement.canPlayType('video/webm')` now reports `maybe`.({{bug("884275")}}).
- The {{domxref("DocumentFragment.getElementById()")}} method has been implemented. E.g. `document.createDocumentFragment().getElementById()`({{bug("933193")}}).
- The {{domxref("KeyboardEvent.repeat")}} attribute has been implemented ({{bug("600117")}}).
- The {{domxref("File")}} constructor, e.g. `new File(["foo"], "foo.txt")` has been implemented. ({{bug("819900")}}).
- The {{domxref("NavigatorPlugins.plugins", "navigator.plugins")}} is no more enumerable, for privacy reasons ([Firefox bug 757726](https://bugzil.la/757726)).
- The two attributes {{domxref("Window.screenX")}} and {{domxref("Window.screenY")}} now return CSS pixels (and no more device pixels) ([Firefox bug 943668](https://bugzil.la/943668)).
- The two methods {{domxref("CanvasRenderingContext2D.drawSystemFocusRing()")}} and {{domxref("CanvasRenderingContext2D.drawCustomFocusRing()")}} have been implemented. The preference `canvas.focusring.enabled` must be set to `true` to activate both ([Firefox bug 540456](https://bugzil.la/540456)).
- The `willReadFrequently` context attribute for "`2d`" canvas contexts has been implemented (see {{domxref("HTMLCanvasElement.getContext()")}}) ([Firefox bug 884226](https://bugzil.la/884226)).
- The following attributes and methods of {{domxref("NavigatorID")}} have been implemented on {{domxref("WorkerNavigator")}} to allow their use in workers: {{domxref("NavigatorID.appCodeName", "appCodeName")}}, {{domxref("NavigatorID.product", "product")}}, and {{domxref("NavigatorID.taintEnabled", "taintEnabled()")}} ([Firefox bug 925847](https://bugzil.la/925847)).
- The {{domxref("NonDocumentTypeChildNode.previousElementSibling" , "previousElementSibling")}} and {domxref("NonDocumentTypeChildNode.nextElementSibling" , "nextElementSibling")}} properties has been removed from {{domxref("DocumentType")}}, because of compatibility problems ([Firefox bug 932501](https://bugzil.la/932501)).

### MathML

- Support of "mathvariant" attribute ({{bug("114365")}}).

### SVG

_No change._

### Audio/Video

- Support Opus in WebM ({{bug("887978")}}).
- Support VP9 video decoder ({{bug("833023")}}).

### Network

- Support of `SPDY/2` has been removed.

## Changes for addon and Mozilla developers

- The interface of [DeferredTask.jsm](/zh-CN/docs/Mozilla/JavaScript_code_modules/DeferredTask.jsm) has been changed, and the `isPending()`, `start()`, `flush()`, and `cancel()` methods have been removed ({{bug("940408")}}).

## Security

- CSP was not enforced in sandboxed iframes. This has been fixed ([Firefox bug 886164](https://bugzil.la/886164)).
- The CSP 1.1 experimental `script-nonce` directive has been implemented. The preference `security.csp.experimentalEnabled` should be set to `true` to enable this functionality ([Firefox bug 855326](https://bugzil.la/855326)).

## See also

- [Site Compatibility for Firefox 28](/zh-CN/docs/Mozilla/Firefox/Releases/28/Site_Compatibility)

### Older versions

{{Firefox_for_developers('27')}}
