---
title: Firefox 28 для разработчика
slug: Mozilla/Firefox/Releases/28
---

Firefox 28 был выпущен 18 марта 2014 года. Список ключевых изменений в данной статье будет полезен не только веб-разработчикам, но и Firefox-, Gecko-разработчикам и разработчикам дополнений.

Хотите помочь документировать Firefox 28? Просмотрите [список недостатков, которые надо устранить](http://beta.elchi3.de/doctracker/#list=fx&version=28.0) и приступайте!

## Изменения для разработчиков

### Инструменты разработчика

- The {{domxref("console.exception")}} property has been added ([Firefox bug 922214](https://bugzil.la/922214)).
- The {{domxref("console.assert")}} property has been added ([Firefox bug 760193](https://bugzil.la/760193)).
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

- Support for multi-line [flexbox](/ru/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) has been added ([Firefox bug 939901](https://bugzil.la/939901)).
- Longhand East Asian [counter styles](/ru/docs/Web/CSS/list-style-type) have been implemented ([Firefox bug 934072](https://bugzil.la/934072)).
- Support for the {{cssxref("background-blend-mode")}} property has been added ([Firefox bug 841601](https://bugzil.la/841601)).
- The `none` value has been added to {{cssxref("font-variant-ligatures")}} ([Firefox bug 913264](https://bugzil.la/913264)).
- Support for the {{cssxref(":hover")}} user action pseudo-class on pseudo-elements has been implemented ([Firefox bug 922669](https://bugzil.la/922669)).

### HTML

- Реализована поддержка `<input type=color>` и `<input type=number>`, отключены по умолчанию.

### JavaScript

- [ECMAScript 6](/ru/docs/Web/JavaScript/ECMAScript_6_support_in_Mozilla) (Harmony) implementation continues:
  - New `Array` methods have been implemented: {{jsxref("Array.prototype.entries()")}} and {{jsxref("Array.prototype.keys()")}} ([Firefox bug 894658](https://bugzil.la/894658)).

### Интерфейс/API/DOM

- `HTMLVideoElement.canPlayType('video/webm')` now reports `maybe`. ([Firefox bug 884275](https://bugzil.la/884275)).
- The {{domxref("DocumentFragment.getElementById()")}} method has been implemented. E.g. `document.createDocumentFragment().getElementById()` ([Firefox bug 933193](https://bugzil.la/933193)).
- The {{domxref("KeyboardEvent.repeat")}} attribute has been implemented ([Firefox bug 600117](https://bugzil.la/600117)).
- The {{domxref("File")}} constructor, e.g. `new File(["foo"], "foo.txt")` has been implemented. ([Firefox bug 819900](https://bugzil.la/819900)).
- The {{domxref("Navigator.plugins")}} is no more enumerable, for privacy reasons ([Firefox bug 757726](https://bugzil.la/757726)).
- The two attributes {{domxref("Window.screenX")}} and {{domxref("Window.screenY")}} now return CSS pixels (and no more device pixels) ([Firefox bug 943668](https://bugzil.la/943668)).
- The two methods {{domxref("CanvasRenderingContext2D.drawSystemFocusRing()")}} and {{domxref("CanvasRenderingContext2D.drawCustomFocusRing()")}} have been implemented. The preference `canvas.focusring.enabled` must be set to `true` to activate both ([Firefox bug 540456](https://bugzil.la/540456)).
- The following attributes have been added to {{domxref("NavigatorID")}}: {{domxref("NavigatorID.appCodeName", "appCodeName")}} and {{domxref("NavigatorID.product", "product")}} ([Firefox bug 925847](https://bugzil.la/925847)).

### MathML

- Добавлена поддержка атрибута `mathvariant` ([Firefox bug 114365](https://bugzil.la/114365)).

### SVG

_Без изменений._

### Аудио/Видео

- Добавлена поддержка аудиокодека Opus для контента в мультимедиа-контейнерах WebM ([Firefox bug 887978](https://bugzil.la/887978)).
- Интегрирована поддержка видео-декодера VP9 ([Firefox bug 833023](https://bugzil.la/833023)).

### Сеть

- Удалена поддержка протокола `SPDY/2`.

## Изменения для разработчиков дополнений

- The interface of [DeferredTask.jsm](/ru/docs/Mozilla/JavaScript_code_modules/DeferredTask.jsm) has been changed, and the `isPending()`, `start()`, `flush()`, and `cancel()` methods have been removed ([Firefox bug 940408](https://bugzil.la/940408)).

## Безопасность

- CSP was not enforced in sandboxed iframes. This has been fixed ([Firefox bug 886164](https://bugzil.la/886164)).
- The CSP 1.1 experimental `script-nonce` directive has been implemented. The preference `security.csp.experimentalEnabled` should be set to `true` to enable this functionality ([Firefox bug 855326](https://bugzil.la/855326)).

## Смотрите также

- [Site Compatibility for Firefox 28](/ru/docs/Mozilla/Firefox/Releases/28/Site_Compatibility)

### Предыдущие версии

{{Firefox_for_developers('27')}}
