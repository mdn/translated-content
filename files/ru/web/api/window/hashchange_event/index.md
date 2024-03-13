---
title: "Window: событие hashchange"
slug: Web/API/Window/hashchange_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef}}

Событие **`hashchange`** возникает, когда изменяется «якорь» URL (часть URL, которая начинается с символа `#`).

## Синтаксис

Используйте имя события в таких методах, как {{domxref("EventTarget.addEventListener", "addEventListener()")}}, или устанавливайте свойство обработчика события.

```js
addEventListener("hashchange", (event) => {});
onhashchange = (event) => {};
```

## Тип события

{{domxref("HashChangeEvent")}}. Наследуется от {{domxref("Event")}}.

{{InheritanceDiagram("HashChangeEvent")}}

## Свойства события

- {{domxref("HashChangeEvent.newURL")}} {{ReadOnlyInline}}
  - : Строка, содержащая новый URL, на который происходит перенаправление.
- {{domxref("HashChangeEvent.oldURL")}} {{ReadOnlyInline}}
  - : Строка, содержащая старый URL, с которого происходит перенаправление.

## Псевдонимы обработчика события

В дополнение к интерфейсу `Window`, свойство обработчика события `onhashchange` также доступно на следующих объектах:

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## Примеры

Можно использовать событие `hashchange` с методом {{domxref("EventTarget/addEventListener", "addEventListener")}}:

```js
window.addEventListener(
  "hashchange",
  () => {
    console.log("Якорь был изменён!");
  },
  false,
);
```

Или использовать свойство обработчика события `onhashchange`:

```js
function locationHashChanged() {
  if (location.hash === "#cool-page-part") {
    console.log("Вы перешли к замечательной части страницы!");
  }
}

window.onhashchange = locationHashChanged;
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Событие {{domxref("Window/popstate_event", "popstate")}}
