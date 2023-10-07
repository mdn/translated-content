---
title: Firefox 29 для разработчика
slug: Mozilla/Firefox/Releases/29
---

{{FirefoxSidebar}}

Firefox 29 был выпущен 29 апреля 2014 года. Список ключевых изменений, предоставленный в данной статье будет полезен не только веб-разработчикам, но и Firefox-, Gecko-разработчикам и разработчикам дополнений.

Хотите помочь документировать Firefox 29? Просмотрите [список недостатков, которые надо устранить](http://beta.elchi3.de/doctracker/#list=fx&version=28.0) и приступайте!

## Изменения для разработчиков

### Инструменты разработчика

Важные изменения:

- Vastly improved web console - Arrays are shown inline without clicking to bring up in the right inspector, window objects show their url, etc.
- Added the [console API](/docs/Web/API/console) to Web Workers ([bug 620935](https://bugzilla.mozilla.org/show_bug.cgi?id=620935)). Now you can log messages to the Web Console from Web Workers.
- The [Network Monitor](/ru/docs/Tools/Network_Monitor) tool now shows performance statistics using pie charts ({{bug(846601)}}).
- On the [Inspector](/ru/docs/Tools/Page_Inspector), preview tooltips of CSS transforms are now available ({{bug(726427)}}).
- DOM elements seen in the debugger and console can be removed or inspected directly, via the new buttons to the right of the variable listing.
- A CSS source map is now supported by the [Style Editor](/ru/docs/Tools/Style_Editor) ({{bug(926014)}}).
- Autocompletion of CSS properties and values has been added to the [Style Editor](/ru/docs/Tools/Style_Editor) ({{bug(717369)}}).

_Больше деталей и изменений смотрите в [блоге Mozilla Hacks](https://hacks.mozilla.org/2014/02/css-source-map-support-network-performance-analysis-more-firefox-developer-tools-episode-29/)._

### CSS

- [CSS variables](/ru/docs/Web/CSS/Using_CSS_variables) have been implemented ({{bug("773296")}}). Mozilla Hacks article can be found [here](https://hacks.mozilla.org/2013/12/css-variables-in-firefox-nightly/). They are enabled by default only for non-release builds (on release builds flip the pref `layout.css.variables.enabled` to `true` if you want to play with them).
- Добавлена поддержка {{cssxref("visibility")}}`: collapse` в
  Flexboxes ({{bug(783470)}}).
- Свойство {{cssxref("box-sizing")}} больше не нуждается в префиксе ({{bug(243412)}}).
- The {{cssxref("will-change")}} property, a hint to that something will animate has been added. The preference `layout.css.will-change.enabled` must be switched to `true` to enable it. ({{bug(940842)}})
- Scientific exponential notation, like `3e1` or `10e+0`, is now supported for {{cssxref("&lt;number&gt;")}} values ({{bug(964529)}}).
- Тип изображения {{cssxref("&lt;gradient&gt;")}} теперь поддерживается в {{cssxref("border-image")}} ({{bug(709587)}}).
- The {{cssxref("touch-action")}} property has been implemented. It is not activated by default; the `layout.css.touch_action.enabled` pref controls it. ({{bug(795567)}})

### HTML

- `<input type=color>` и `<input type=number>` доступны по умолчанию.
- Support for the non standard `<pre cols>` has been removed, as well as the layout effect of `<pre wrap>` . Both effects can, and should, be achieved using CSS. ({{bug("949879")}})

### JavaScript

- Реализованы новые методы строк в ECMAScript 6: {{jsxref("String.prototype.codePointAt()")}} и {{jsxref("String.prototype.fromCodePoint()")}} ({{bug("918879")}}).
- The [ECMAScript Internationalization API (ECMA-402)](http://www.ecma-international.org/ecma-402/1.0/) has been implemented and is now enabled by default in Firefox Desktop ({{bug("853301")}}):

  - New objects in the new {{jsxref("Intl")}} object namespace:

    - {{jsxref("Collator", "Intl.Collator")}}
    - {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}}
    - {{jsxref("NumberFormat", "Intl.NumberFormat")}}

  - The following methods of {{jsxref("String")}}, {{jsxref("Number")}} and {{jsxref("Date")}} have been updated to include the `locales` and `options` arguments per ECMA-402:

    - {{jsxref("String.prototype.localeCompare()")}}
    - {{jsxref("Number.prototype.toLocaleString()")}}
    - {{jsxref("Date.prototype.toLocaleString()")}}
    - {{jsxref("Date.prototype.toLocaleDateString()")}}
    - {{jsxref("Date.prototype.toLocaleTimeString()")}}

- To match the updated ECMAScript6 draft specification, the {{jsxref("Map")}} and {{jsxref("Set")}} objects now treat `-0` and `+0` as the same when checking for key and value equality.
- `Promise` has been enabled by default ({{bug(918806)}}).
- Completed generators now returns an {{jsxref("IteratorResult")}} object instead of throwing ({{bug(958951)}}).
- A malformed JSON string parsed by {{jsxref("JSON.parse()")}} now yields a more detailed error message containing the line and column number that caused the parsing error. This is useful when debugging large JSON data.

### Интерфейс/APIs/DOM

- A new type of workers, {{domxref("SharedWorker")}}, is now available by default ({{bug(924089)}}).
- The {{domxref("URLUtils")}} interface now supports the {{domxref("URLUtils.searchParams", "searchParams")}} property returning a {{domxref("URLSearchParams")}} object, allowing to modify the search params of an URL ({{bug(887836)}}). The {{domxref("URLSearchParams")}} constructor allows easier parsing of query strings.
- The {{domxref("Worker.onLine")}} property is now supported, allowing to know the online/offline status in workers ({{bug(925437)}}).
- As part of the implementation of Web Components, the {{domxref("HTMLShadowElement")}} interface has been implemented behind the `dom.webcomponents.enabled`. Flip it to `true` if you want to use it. ({{bug(887538)}}).
- The read-only property {{domxref("HTMLIFrameElement.sandbox")}} is no longer a {{domxref("string")}} but an {{domxref("HTMLSettableToken")}} ({{bug(845057)}}).
- On {{domxref("HTMLCanvasElement.getContext()")}}, the value `moz-webgl` is no longer supported. Use the standard `webgl` value ({{bug(913597)}}).
- The constructor for {{domxref("ImageData")}} has been added. This interface can be used in a {{domxref("Worker")}}. ({{bug(959958)}})
- The property {{domxref("NavigatorLocation.origin", "location.origin")}} is now available in workers ({{bug(964148)}}).
- The {{domxref("ValidityState.badInput")}} property has been implemented ({{bug(827161)}}).
- The deprecated {{domxref("Window.pkcs11")}} property has been removed; it was returning `null` since Firefox 3.0.14. ({{bug(964964)}})
- The {{domxref("Node.cloneNode()")}} and {{domxref("Document.importNode()")}} methods take the Boolean `deep` argument. Until now, if omitted, these methods acted as if the value of `deep` was `true`. But this behavior has been changed as per the latest spec, and if omitted, the methods will act as if the value was `false`. ({{bug(937461)}})
- {{domxref("Window._content")}} is no longer available to Web content ({{bug(946564)}}).
- {{domxref("URLUtils.port")}} behavior has been slightly changed: set to `''` will set it to the default port associated with the protocol, and `0` to `0.` ({{bug(930450)}})
- {{domxref("Document.referrer")}} is now based on the incumbent script ({{bug(887928)}}).
- [Gamepad API](/ru/docs/Web/Guide/API/Gamepad) включён по умолчанию ({{bug(878828)}}).

### MathML

_Без изменений._

### SVG

_Без изменений._

## Безопасность

- Реализована экспериментальная директива CSP 1.1 `hash-source`. Чтобы воспользоваться этой функцией, настройка `security.csp.experimentalEnabled` должна быть установлена в положение `true` ({{bug(883975)}}).

## Изменения для разработчиков дополнений

- [Совместимость дополнений с Australis](/en-US/Firefox/Australis_add-on_compat) - Это существенное изменение темы Firefox, что влияет на большинство расширений, связанных с пользовательским интерфейсом Firefox.

Об изменениях, не касающихся Austrlis, будет объявлено позднее.

## Смотрите также

- [Совместимость сайтов с Firefox 29](/ru/docs/Mozilla/Firefox/Releases/29/Site_Compatibility)

### Предыдущие версии

{{Firefox_for_developers('28')}}
