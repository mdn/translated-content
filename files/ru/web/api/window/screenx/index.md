---
title: Window.screenX
slug: Web/API/Window/screenX
---

{{APIRef}}

Свойство **`Window.screenX`** только для чтения возвращает горизонтальное расстояние в пикселях CSS левой границы окна просмотра браузера пользователя до левой части экрана.

> **Примечание:** Псевдоним `screenX` был реализован во всех современных браузерах - {{domxref ("Window.screenLeft")}}. Первоначально это поддерживалось только в IE, но было введено повсеместно из-за популярности.

## Синтаксис

```
leftWindowPos = window.screenX
```

### Возвращает

Число, равное количеству пикселей CSS от левого края окна просмотра браузера до левого края экрана.

## Пример

В нашем примере [screenleft-screentop](https://mdn.github.io/dom-examples/screenleft-screentop/) вы увидите холст, на котором нарисован круг. В этом примере мы используем {{domxref ("Window.screenLeft")}}/{{domxref ("Window.screenTop")}} плюс {{domxref("Window.requestAnimationFrame ()")}}, чтобы постоянно перерисовывать круг в том же физическом положении на экране, даже если позиция окна перемещается.

```js
initialLeft = window.screenLeft + canvasElem.offsetLeft;
initialTop = window.screenTop + canvasElem.offsetTop;

function positionElem() {
  let newLeft = window.screenLeft + canvasElem.offsetLeft;
  let newTop = window.screenTop + canvasElem.offsetTop;

  let leftUpdate = initialLeft - newLeft;
  let topUpdate = initialTop - newTop;

  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "rgb(0, 0, 255)";
  ctx.beginPath();
  ctx.arc(
    leftUpdate + width / 2,
    topUpdate + height / 2 + 35,
    50,
    degToRad(0),
    degToRad(360),
    false,
  );
  ctx.fill();

  pElem.textContent =
    "Window.screenLeft: " +
    window.screenLeft +
    ", Window.screenTop: " +
    window.screenTop;

  window.requestAnimationFrame(positionElem);
}

window.requestAnimationFrame(positionElem);
```

Они работают точно так же, как `screenX` / `screenY`.

Также в код мы включили фрагмент, который определяет, поддерживается ли `screenLeft`, и, если нет, заполняет поли в `screenLeft` / `screenTop`, используя `screenX` / `screenY`.

```js
if (!window.screenLeft) {
  window.screenLeft = window.screenX;
  window.screenTop = window.screenY;
}
```

## Спецификация

{{Specifications}}

## Совместимость браузера

{{Compat}}

## Смотрите также

- {{domxref("window.screenLeft")}}
- {{domxref("Window.screenY")}}
