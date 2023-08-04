---
title: window.requestAnimationFrame()
slug: Web/API/window/requestAnimationFrame
---

{{APIRef}}

**`window.requestAnimationFrame`** указывает браузеру на то, что вы хотите произвести анимацию, и просит его запланировать перерисовку на следующем кадре анимации. В качестве параметра метод получает функцию, которая будет вызвана перед перерисовкой.

> **Примечание:** Ваш callback метод сам должен вызвать `requestAnimationFrame()` иначе анимация остановится.

Вы должны вызывать этот метод всякий раз, когда готовы обновить анимацию на экране, чтобы запросить планирование анимации. Обычно запросы происходят 60 раз в секунду, но чаще всего совпадают с частотой обновления экрана. В большинстве браузеров в фоновых вкладках или скрытых `<iframe>`, вызовы `requestAnimationFrame()` приостанавливаются, для того, чтобы повысить производительность и время работы батареи.

Callback методу передаётся один аргумент, {{domxref("DOMHighResTimeStamp")}}, который содержит текущее время (количество миллисекунд, прошедших с момента [time origin](/ru/docs/Web/API/DOMHighResTimeStamp#The_time_origin)). Когда колбэки, отправленные в очередь с помощью `requestAnimationFrame()` начинают вызывать несколько колбэков в одном кадре, каждый получает одинаковый timestamp, хотя для вычисления каждого callback было затрачено время. Этот timestamp - десятичное число в миллисекундах, но с минимальной точностью в 1ms (1000 µs).

## Синтаксис

```js
window.requestAnimationFrame(callback);
```

### Параметры

- `callback`
  - : Функция, которая будет вызвана, когда придёт время обновить вашу анимацию на следующей перерисовке.
- `element` {{ optional_inline() }}
  - : Необязательный параметр (не используется в Firefox или IE), определяющий элемент, который визуально содержит всю анимацию. Для canvas'а и WebGL'a им должен быть {{ HTMLElement("canvas") }}. Для других элементов вы можете опустить этот параметр для чуть лучшего пользовательского опыта.

### Возвращаемое значение

`requestID` — длинное целое, являющееся уникальным идентификатором для записи, содержащей callback. Оно не равно нулю, но других предположений о его значении делать не следует. Вы можете передать его в {{ domxref("window.cancelAnimationFrame()") }} для отмены вызова.

## Пример

```js
var start = null;
var element = document.getElementById("SomeElementYouWantToAnimate");

function step(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;
  element.style.transform =
    "translateX(" + Math.min(progress / 10, 200) + "px)";
  if (progress < 2000) {
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{ domxref("window.mozAnimationStartTime") }}
- {{ domxref("window.cancelAnimationFrame()") }}
- [mozRequestAnimationFrame](http://weblogs.mozillazine.org/roc/archives/2010/08/mozrequestanima.html) - Blog post
- [requestAnimationFrame for smart animating](http://paulirish.com/2011/requestanimationframe-for-smart-animating/) - Blog post
- [Animating with javascript: from setInterval to requestAnimationFrame](http://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/) - Blog post
