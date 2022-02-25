---
title: Firefox 41 pour développeurs
slug: Mozilla/Firefox/Releases/41
tags:
  - Firefox
  - Versions
translation_of: Mozilla/Firefox/Releases/41
original_slug: Mozilla/Firefox/Versions/41
---
{{FirefoxSidebar}}

## Changements pour les développeurs Web

### Outils pour Développeurs

Nouveautés:

- [Take a screenshot of a DOM node](/fr/docs/Tools/Page_Inspector/How_to/Examine_and_edit_HTML#Element_popup_menu)
- [Copy as HAR/save as HAR](/fr/docs/Tools/Network_Monitor#CopySave_All_As_HAR)
- ["Add Rule" button in the Rules view](/fr/docs/Tools/Page_Inspector/How_to/Examine_and_edit_CSS#Add_rules)
- [View source in a tab](/fr/docs/Tools/View_source)
- [More options to copy CSS rules](/fr/docs/Tools/Page_Inspector/How_to/Examine_and_edit_CSS#Copy_rules)
- [Copy image as data: URI in the Rules view](/fr/docs/Tools/Page_Inspector/How_to/View_background_images)

[All devtools bugs fixed between Firefox 40 and Firefox 41](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-06-29&query_format=advanced&chfield=resolution&chfieldfrom=2015-05-11&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12283503): note that many of these bugs, especially those relating to the performance tools, were uplifted to Firefox 40.

### CSS

- Support for laying out vertical scripts has been activated by default ({{bug(1138384)}}). That means that the following CSS properties are now available:

  - Choosing the direction of writing: {{cssxref("writing-mode")}}.
  - Controlling orientation of characters: {{cssxref("text-orientation")}}.
  - Direction-independent equivalents of {{cssxref("width")}} and {{cssxref("height")}}: {{cssxref("block-size")}} and {{cssxref("inline-size")}}.
  - Direction-independent equivalents of {{cssxref("min-width")}} and {{cssxref("min-height")}}: {{cssxref("min-block-size")}} and {{cssxref("min-inline-size")}}.
  - Direction-independent equivalents of {{cssxref("max-width")}} and {{cssxref("max-height")}}: {{cssxref("max-block-size")}} and {{cssxref("max-block-size")}}.
  - Direction-independent equivalents of {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}} and {{cssxref("margin-left")}}: {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}} and {{cssxref("margin-inline-end")}}.
  - Direction-independent equivalents of {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}} and {{cssxref("padding-left")}}: {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}} and {{cssxref("padding-inline-end")}}.
  - Direction-independent equivalents of {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}} and {{cssxref("border-left")}} and their longhands for width, style and color: {{cssxref("border-block-start")}}, {{cssxref("border-block-start-width")}}, {{cssxref("border-block-start-style")}}, {{cssxref("border-block-start-color")}}, {{cssxref("border-block-end")}}, {{cssxref("border-block-end-width")}}, {{cssxref("border-block-end-style")}}, {{cssxref("border-block-end-color")}}, {{cssxref("border-inline-start")}}, {{cssxref("border-inline-start-width")}}, {{cssxref("border-inline-start-style")}}, {{cssxref("border-inline-start-color")}}, {{cssxref("border-inline-end")}}, {{cssxref("border-inline-end-width")}}, {{cssxref("border-inline-end-style")}} and {{cssxref("border-inline-end-color")}}.
  - Direction-independent equivalents of {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} and {{cssxref("left")}}: {{cssxref("offset-block-start")}}, {{cssxref("offset-block-end")}}, {{cssxref("offset-inline-start")}} and {{cssxref("offset-inline-end")}}.

### HTML

- {{HTMLElement("a")}} without an `href` attribute is no longer classified as interactive content. Clicking it inside {{HTMLElement("label")}} will activate labelled content ({{bug(1167816)}}).
- SVG icons are now supported for site icons, that is favicons and shortcut icons ({{bug(366324)}}).
- The {{htmlattrxref('crossorigin', 'link')}} attribute is now supported for [\<link rel='preconnect'>](/fr/docs/Web/HTML/Element/link) ({{bug(1174152)}}).

### JavaScript

- {{jsxref("Date.prototype")}} is now an ordinary object, not a {{jsxref("Date")}} instance anymore ({{bug(861219)}}).
- {{jsxref("Date.prototype.toString")}} is now a generic method ({{bug(861219)}}).
- {{jsxref("Symbol.species")}} has been added ({{bug(1131043)}}).
- {{jsxref("Map.@@species", "Map[@@species]")}} and {{jsxref("Set.@@species", "Set[@@species]")}} getters have been added ({{bug(1131043)}}).
- Non-standard {{jsxref("Statements/let", "let expression", "#let_expressions", 1)}} support has been dropped ({{bug(1023609)}}).
- {{jsxref("Functions/Default_parameters", "Destructured parameters with default value assignment", "#Destructured_parameter_with_default_value_assignment", 1)}} are now supported ({{bug(1018628)}}).
- Per ES6, curly braces are required for [method definitions](/fr/docs/Web/JavaScript/Reference/Functions/Method_definitions). Syntax without them will fail from now on ({{bug(1150855)}}).
- [Method definitions](/fr/docs/Web/JavaScript/Reference/Functions/Method_definitions) (except for generator methods) are not constructable anymore ({{bug(1059908)}} and {{bug(1166950)}}).
- As part of ES6 specification compliance, parenthesized [destructuring](/fr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) patterns, like `([a, b]) = [1, 2]` or `({a, b}) = { a: 1, b: 2 }`, are now considered invalid and will throw a {{jsxref("SyntaxError")}}. See [Jeff Walden's blog post](http://whereswalden.com/2015/06/20/new-changes-to-make-spidermonkeys-and-firefoxs-parsing-of-destructuring-patterns-more-spec-compliant/) for more details.
- The [`new.target`](/fr/docs/Web/JavaScript/Reference/Operators/new.target) syntax has been added ({{bug(1141865)}}).

### Interfaces/APIs/DOM

#### HTML Editing API

- Cut, copy and paste commands handling has been revamped and now allow programmatic copying and cutting from JS for Web content:

  - With the `'paste'` command as argument, {{domxref("Document.queryCommandSupported()")}} now returns `false` if has insufficient privileges to actually perform the action ({{bug(1161721)}}).
  - With the `'cut'` or `'copy'` command as argument, {{domxref("Document.queryCommandSupported()")}} now returns `true` if called within the context of a user-initiated or privileged code ({{bug(1162952)}}).
  - With the `'cut'` or `'copy'` command as argument, {{domxref("Document.execCommand()")}} now works, but only within the context of user-initiated or privileged code ({{bug(1012662)}}).

#### Events

- The non-standard {{domxref("CloseEvent.initCloseEvent()")}} method and the ability to create a {{domxref("CloseEvent")}} using the {{domxref("Event.createEvent", "Event.createEvent('CloseEvent')")}} method has been removed; use the standard constructor, {{domxref("CloseEvent.CloseEvent", "CloseEvent()")}} instead ({{bug(1161950)}}).
- On Desktop, {{domxref("PointerEvent")}} is now activated by default in Nightly; it is not activated in Developer Edition, Beta or Release and won't be for at least some versions ({{bug(1166347)}}).
- The unprefixed version of {{domxref("MouseEvent.movementX")}} and {{domxref("MouseEvent.movementY")}}}} have been added; the prefixed versions are deprecated and will be removed at some point in the future ({{bug(1164981)}}).

#### Web Crypto

- {{domxref("SubtleCrypto.importKey()")}} and {{domxref("SubtleCrypto.exportKey()")}} now supports `ECDH` keys ({{bug(1050175)}}).

#### Canvas API

- {{domxref("HTMLCanvasElement.captureStream()")}} and {{domxref("CanvasCaptureMediaStream")}} have been added and allow to stream the display of a {{HTMLElement("canvas")}} in real-time ({{bug(1032848)}}).
- {{domxref("MediaStream.id")}} now returns the unique id of a stream ({{bug(1089798)}}).
- The initial value of {{domxref("CanvasRenderingContext2D.filter")}} is now correctly set to `none` ({{bug(1163124)}}).

#### Service Workers

- Improvement to our experimental [Service Worker](/fr/docs/Web/API/ServiceWorker_API) implementation:

  - {{domxref("ServiceWorkerGlobalScope.skipWaiting()")}} has been implemented ({{bug(1131352)}}).
  - {{domxref("Clients.claim()")}} has been added ({{bug(1130684)}}).
  - The other functional events of Service Workers have been made to inherit from {{domxref("ExtendableEvent")}}, giving them access to the {{domxref("ExtendableEvent.waitUntil","waitUntil()")}} method ({{bug("1160527")}}).

- The {{domxref("CacheStorage")}} and {{domxref("Cache")}} interfaces are now supported ({{bug("1110144")}}).

#### Miscellaneous

- On OS X and Windows, {{domxref("NavigatorOnLine.onLine", "Navigator.onLine")}} now changes regarding network connectivity (it always returned `true`, , unless "Work offline" mode was selected) before ({{bug(654579)}}).
- {{domxref("MessagePort")}} and {{domxref("MessageChannel")}} now available in [Web workers](/fr/docs/Web/API/Web_Workers_API), and are enabled by default in all contexts ({{bug(952139)}}) and ({{bug(911972)}}).
- The User Timing API is now available in [Web workers](/fr/docs/Web/API/Web_Workers_API) ({{bug(1155761)}}).
- The [Notifications API](/fr/docs/Web/API/Notifications_API) is now available in [Web workers](/fr/docs/Web/API/Web_Workers_API) ({{bug(916893)}}).
- {{domxref("DOMRequest")}} and {{domxref("DOMCursor")}} are now available in [Web workers](/fr/docs/Web/API/Web_Workers_API) ({{bug(1167650)}}).
- The [CSS Font Loading API](/fr/docs/Web/API/CSSFontLoading_API) is now enabled by default ({{bug(1149381)}}).
- Shared workers can no longer be shared between private (i.e. browsing in a private window) and non-private documents (see {{bug(1177621)}}).
- The {{domxref("URLUtilsSearchParams.searchParams")}} property is now read-only ({{bug(1174731)}}).
- The {{domxref('URLUtils.hash')}} property no longer decodes URL fragment ({{bug(1093611)}}).

### MathML

#### New default and fallback font handling

Mathematical formulas require special fonts. So far, these fonts were hard-coded in the `mathml.css` user agent stylesheet (which sets the font-family on {{MathMLElement("math")}} tag) and in the preference option `font.mathfont-family` (which sets the fallback fonts to use for stretchy and large operators). Firefox 41 introduces, an internal `x-math` language that is automatically set on the `<math>` tag as well as corresponding preference options (e.g. `font.name.serif.x-math`). The user agent stylesheet now sets font-family to serif on the `<math>` tag and the preference option `font.mathfont-family` is replaced with `font.name.serif.x-math`.  All platforms now essentially use the same list of fallback fonts, with "Latin Modern Math" as first one. The default/fallback fonts can be configured from the standard per-language font preference menu. For more details, see {{bug(947654)}} and {{bug(1160456)}}.

### SVG

- Site icons (favicons, shortcut icons) now support SVG ({{bug(366324)}}).

### Audio/Video

- The `media.autoplay.enabled` preference now also apply to untrusted {{domxref("HTMLMediaElement.play()")}} invocations too, that is calls from non-users activated scripts ({{bug(659285)}}).

## HTTP

- The `X-Content-Duration` header is no longer supported ({{Bug(1160695)}}).

## Networking

_pas de changement._

## Security

- The [CSP](/fr/docs/Web/Security/CSP) 1.1 `manifest-src` [directive](/fr/docs/Web/Security/CSP/CSP_policy_directives) is now supported ({{bug(1089255)}}).

## Changes for add-on and Mozilla developers

### XUL

_pas de changement._

### JavaScript code modules

_pas de changement._

### XPCOM

### Interfaces

_pas de changement._

### Other

_pas de changement._

## See also

- [Site Compatibility for Firefox 41](/fr/docs/Mozilla/Firefox/Releases/41/Site_Compatibility)

## Older versions

{{Firefox_for_developers('40')}}
