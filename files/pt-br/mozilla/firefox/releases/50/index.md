---
title: Firefox 50 for developers
slug: Mozilla/Firefox/Releases/50
translation_of: Mozilla/Firefox/Releases/50
---
{{FirefoxSidebar}}

O Firefox 50 foi lançado em 15 de novembro de 2016. Este artigo lista as principais alterações que são úteis não só para os desenvolvedores Web, mas também para os desenvolvedores do Firefox e Gecko, assim como os desenvolvedores do Add-on.

## Mudanças para desenvolvedores web

### Developer Tools

Nenhuma mudança.

### HTML

- For compatibility purposes, the non-standard {{HTMLattrxref("webkitdirectory", "input")}} attribute of the {{HTMLElement("input")}} element, as well as the property {{domxref("HTMLInputElement.webkitDirectory")}} property, have been implemented ({{bug(1258489)}}).
- The default style of {{HTMLElement("bdo")}} now has a {{cssxref("unicode-bidi")}} with the `isolate-override` value ({{bug(1249497)}}).

### CSS

- Border-radiused corner with dashed and dotted style is now rendered with specified style instead of solid style ({{bug(382721)}}).
- The non-standard {{cssxref(":-moz-full-screen-ancestor")}} pseudo-class selector has been removed ({{bug(1199529)}}).
- The {{cssxref("box-sizing")}}`: padding-box` has been removed, since it’s no longer a part of the spec and Firefox was the only major browser to implement it ({{bug(1166728)}}).
- Our experimental implementation of {{cssxref('mask-position')}} now supports animation of this property ({{bug(1273804)}}). It is still available only on Nightly.
- The three values `isolate`, `isolate-override`, and `plaintext` of the {{cssxref("unicode-bidi")}} have been unprefixed ({{bug(1141895)}}).
- In quirk mode, the bullet of a list now inherit the size of the list, like in standard mode ({{bug(648331)}}).
- Changed behavior of the {{cssxref(":in-range")}} and {{cssxref(":out-of-range")}} pseudo-classes to not match disabled or read-only inputs ({{bug(1264157)}}).
- Unprefixed {{cssxref(":any-link")}} pseudo-class {{bug(843579)}}.
- Implemented `space` value of {{cssxref("border-image-repeat")}} ({{bug(720531)}}).

### JavaScript

- The ES2015 {{jsxref("Symbol.hasInstance")}} property has been implemented ({{bug(1054906)}}).
- The ES2017 {{jsxref("Object.getOwnPropertyDescriptors()")}} method has been implemented ({{bug(1245024)}}).
- The behavior of \W in {{jsxref("RegExp")}} with unicode and ignoreCase flags is changed to match recent draft spec. Now it doesn't match to K, S, k, s, and KELVIN SIGN (U+212A), and LATIN SMALL LETTER LONG S (U+017F) ({{bug(1281739)}}).

### Interfaces/APIs/DOM

#### DOM & HTML DOM

- The {{domxref("HTMLInputElement.webkitdirectory")}} property is now supported ({{bug(1258489)}}).
- Support `once` option for {{domxref("EventTarget.addEventListener()")}} ({{bug(1287706)}}).

#### Canvas

_No change._

#### WebGL

- The {{domxref("EXT_shader_texture_lod")}} WebGL extension has been implemented ({{bug(1111689)}}).

#### IndexedDB

_No change._

#### Service Workers

- The {{domxref("WindowClient.navigate()")}} method has been implemented. This method lets you open a specified URL into a client window which is being controlled by the service worker ({{bug(1218148)}}).

#### WebRTC

- The {{domxref("RTCDataChannel.stream")}} property has been removed. This was replaced with {{domxref("RTCDataChannel.id")}} in [Firefox 24](/pt-BR/docs/Mozilla/Firefox/Releases/24), but was supported for backward compatibility. Please be sure to update your code to use the `id` property if you haven't done so yet.

#### New APIs

_No change._

#### Others

- {{domxref("XMLHttpRequest.getResponseHeader()")}} and {{domxref("XMLHttpRequest.getAllResponseHeaders()")}} now also return empty headers by default. This can be controlled via the preference `network.http.keep_empty_response_headers_as_empty_string` ({{bug(918721)}}).

### MathML

_No change._

### SVG

_No change._

### Audio/Video

_No change._

## HTTP

- The experimental (and deprecated) [SPDY](https://en.wikipedia.org/wiki/SPDY) 3.1 is now disable by default {{bug(1287132)}}.
- Support for {{HTTPHeader("X-Content-Type-Options")}} has been added ({{bug(471020)}}).

## Networking

- The {{htmlattrxref("ping", "a")}} attribute of {{htmlelement("a")}} element is now abiding by the [`connect-src`](/en-US/docs/Web/Security/CSP/CSP_policy_directives#connect-src) [CSP 1.1 policy directive](/pt-BR/docs/Web/Security/CSP/CSP_policy_directives) ({{bug(1100181)}}).
- Support of the [`sandbox`](/en-US/docs/Web/Security/CSP/CSP_policy_directives#sandbox) [CSP](/pt-BR/docs/Web/Security/CSP) directive has been added ({{bug(671389)}}).

## Segurança

Nenhuma mudança.

## Changes for add-on and Mozilla developers

### Interfaces

_No change._

### XUL

_No change._

### JavaScript code modules

_No change._

### XPCOM

_No change._

### Outroas

_No change._

## Versões mais antigas

{{Firefox_for_developers(49)}}
