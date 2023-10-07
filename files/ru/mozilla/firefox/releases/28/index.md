---
title: Firefox 28 для разработчика
slug: Mozilla/Firefox/Releases/28
---

{{FirefoxSidebar}}

Firefox 28 был выпущен 18 марта 2014 года. Список ключевых изменений в данной статье будет полезен не только веб-разработчикам, но и Firefox-, Gecko-разработчикам и разработчикам дополнений.

Хотите помочь документировать Firefox 28? Просмотрите [список недостатков, которые надо устранить](http://beta.elchi3.de/doctracker/#list=fx&version=28.0) и приступайте!

## Изменения для разработчиков

### Инструменты разработчика

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

Больше деталей [в этой публикации](https://hacks.mozilla.org/2013/12/split-console-pretty-print-minified-js-and-more-firefox-developer-tools-episode-28/).

### CSS

- Support for multi-line [flexbox](/ru/docs/Web/Guide/CSS/Flexible_boxes) has been added ({{bug("939901")}}).
- Longhand East Asian [counter styles](/ru/docs/Web/CSS/list-style-type) have been implemented ({{bug("934072")}}).
- Support for the {{cssxref("background-blend-mode")}} property has been added ({{bug("841601")}}).
- The `none` value has been added to {{cssxref("font-variant-ligatures")}} ({{bug("913264")}}).
- Support for the {{cssxref(":hover")}} user action pseudo-class on pseudo-elements has been implemented ({{bug("922669")}}).

### HTML

- Реализована поддержка `<input type=color>` и `<input type=number>`, отключены по умолчанию.

### JavaScript

- [ECMAScript 6](/ru/docs/Web/JavaScript/ECMAScript_6_support_in_Mozilla) (Harmony) implementation continues:

  - New `Array` methods have been implemented: {{jsxref("Array.prototype.entries()")}} and {{jsxref("Array.prototype.keys()")}} ({{bug("894658")}}).

### Интерфейс/API/DOM

- `HTMLVideoElement.canPlayType('video/webm')` now reports `maybe`. ({{bug("884275")}}).
- The {{domxref("DocumentFragment.getElementById()")}} method has been implemented. E.g. `document.createDocumentFragment().getElementById()` ({{bug("933193")}}).
- The {{domxref("KeyboardEvent.repeat")}} attribute has been implemented ({{bug("600117")}}).
- The {{domxref("File")}} constructor, e.g. `new File(["foo"], "foo.txt")` has been implemented. ({{bug("819900")}}).
- The {{domxref("NavigatorPlugins.plugins", "navigator.plugins")}} is no more enumerable, for privacy reasons ({{bug(757726)}}).
- The two attributes {{domxref("Window.screenX")}} and {{domxref("Window.screenY")}} now return CSS pixels (and no more device pixels) ({{bug(943668)}}).
- The two methods {{domxref("CanvasRenderingContext2D.drawSystemFocusRing()")}} and {{domxref("CanvasRenderingContext2D.drawCustomFocusRing()")}} have been implemented. The preference `canvas.focusring.enabled` must be set to `true` to activate both ({{bug(540456)}}).
- The following attributes have been added to {{domxref("NavigatorID")}}: {{domxref("NavigatorID.appCodeName", "appCodeName")}} and {{domxref("NavigatorID.product", "product")}} ({{bug(925847)}}).

### MathML

- Добавлена поддержка атрибута `mathvariant` ({{bug("114365")}}).

### SVG

_Без изменений._

### Аудио/Видео

- Добавлена поддержка аудиокодека Opus для контента в мультимедиа-контейнерах WebM ({{bug("887978")}}).
- Интегрирована поддержка видео-декодера VP9 ({{bug("833023")}}).

### Сеть

- Удалена поддержка протокола `SPDY/2`.

## Изменения для разработчиков дополнений

- The interface of [DeferredTask.jsm](/ru/docs/Mozilla/JavaScript_code_modules/DeferredTask.jsm) has been changed, and the `isPending()`, `start()`, `flush()`, and `cancel()` methods have been removed ({{bug("940408")}}).

## Безопасность

- CSP was not enforced in sandboxed iframes. This has been fixed ({{bug(886164)}}).
- The CSP 1.1 experimental `script-nonce` directive has been implemented. The preference `security.csp.experimentalEnabled` should be set to `true` to enable this functionality ({{bug(855326)}}).

## Смотрите также

- [Site Compatibility for Firefox 28](/ru/docs/Mozilla/Firefox/Releases/28/Site_Compatibility)

### Предыдущие версии

{{Firefox_for_developers('27')}}
