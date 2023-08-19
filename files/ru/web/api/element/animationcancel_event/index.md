---
title: GlobalEventHandlers.onanimationcancel
slug: Web/API/Element/animationcancel_event
---

{{APIRef("CSS3 Animations")}}

Обработчик события {{event("animationcancel")}} . Это событие вызывается когда CSS Анимация ([CSS Animation](/ru/docs/Web/CSS/CSS_Animations)) неожиданно прерывается (иными словами, в любой момент, когда анимация прекращает воспроизведение, не отправляя событие завершения {{event("animationend")}} ), например, когда изменяется {{cssxref("animation-name")}}, анимация удаляется или когда элемент с анимацией оказывается скрыт (непосредственно сам элемент, или другой элемент, содержащий его) средствами CSS.

## Синтаксис

```
var animCancelHandler = target.onanimationcancel;

target.onanimationcancel = {{jsxref("Function")}}
```

### Значения

Функция {{jsxref("Function")}} вызывается когда {{event("animationcancel")}} происходит событие, указывающее, что CSS-анимация запустилась на объекте _target_, где объект _target_ object это HTML-элемент ({{domxref("HTMLElement")}}), документ ({{domxref("Document")}}), или окно ({{domxref("Window")}}). Эта функция принимает один параметр {{domxref("AnimationEvent")}} - объект, описывающий событие, которое произошло.

## Пример

### HTML content

```html
<div class="main">
  <div id="box" onanimationcancel="handleCancelEvent(event);">
    <div id="text">Box</div>
  </div>
</div>

<div class="button" id="toggleBox">Hide the Box</div>

<pre id="log"></pre>
```

### CSS content

```css hidden
:root {
  --boxwidth: 50px;
}

.main {
  width: 300px;
  height: 300px;
  border: 1px solid black;
}

.button {
  cursor: pointer;
  width: 300px;
  border: 1px solid black;
  font-size: 16px;
  text-align: center;
  margin-top: 0;
  padding-top: 2px;
  padding-bottom: 4px;
  color: white;
  background-color: darkgreen;
  font:
    14px "Open Sans",
    "Arial",
    sans-serif;
}

#text {
  width: 46px;
  padding: 10px;
  position: relative;
  text-align: center;
  align-self: center;
  color: white;
  font:
    bold 1.4em "Lucida Grande",
    "Open Sans",
    sans-serif;
}
```

Опустим некоторые фрагменты CSS, не имеющие значение для нас, и рассмотрим стили для элемента, который мы анимируем. Это блок box со всеми своими свойствами, включая определённую анимацию {{cssxref("animation")}}. Мы продолжим и опишем анимацию прямо здесь, поскольку обычно она должна запускаться непосредственно при загрузке страницы, не зависимо от какого-либо другого события.

```css
#box {
  width: var(--boxwidth);
  height: var(--boxwidth);
  left: 0;
  top: 0;
  border: 1px solid #7788ff;
  margin: 0;
  position: relative;
  background-color: #2233ff;
  display: flex;
  justify-content: center;
  animation: 5s ease-in-out 0s infinite alternate both slideBox;
}
```

Далее описываются ключевые кадры анимации, которые выводят содержимое из верхнего левого угла окна в нижний правый угол.

```css
@keyframes slideBox {
  from {
    left: 0;
    top: 0;
  }
  to {
    left: calc(100% - var(--boxwidth));
    top: calc(100% - var(--boxwidth));
  }
}
```

Поскольку анимация описывается как бесконечное число раз, поочерёдное попеременное направление, поле будет скользить назад и вперёд между двумя углами до тех пор, пока не остановится или страница не будет закрыта.

### JavaScript content

Прежде чем перейти к коду анимации, мы определяем функцию, которая регистрирует информацию в поле на экране пользователя. Мы будем использовать это, чтобы показать информацию о полученных событиях. Обратите внимание на использование {{domxref ("AnimationEvent.animationName")}} и {{domxref ("AnimationEvent.elapsedTime")}}, чтобы получить информацию о произошедшем событии.

```js
function log(msg, event) {
  let logBox = document.getElementById("log");

  logBox.innerHTML += msg;

  if (event) {
    logBox.innerHTML +=
      " <code>" +
      event.animationName +
      "</code> at time " +
      event.elapsedTime.toFixed(2) +
      " seconds.";
  }

  logBox.innerHTML += "\n";
}
```

Затем мы устанавливаем обработчик событий `handleCancelEvent() - функцию`, которая вызывается в ответ на событие {{event("animationcancel")}}. Все, что мы делаем здесь - это выводим информацию в консоль, но вы можете использовать это для запуска новой анимацию или других эффектов, связанных с окончанием некоторой операции.

```js
function handleCancelEvent(event) {
  log("Animation canceled", event);
}
```

Теперь добавим переключение {{cssxref("display")}} между `"flex"` и `"none"` и установим обработчик события щелчка {{event("click")}} на кнопке "Hide/Show":

```js
document.getElementById("toggleBox").addEventListener("click", function () {
  if (box.style.display == "none") {
    box.style.display = "flex";
    document.getElementById("toggleBox").innerHTML = "Hide the box";
  } else {
    box.style.display = "none";
    document.getElementById("toggleBox").innerHTML = "Show the box";
  }
});
```

Таким образом переключение стилей элемента `display: none` приводит к прерыванию анимации. In browsers that support {{event("animationcancel")}}, the event is fired and this handler is called.

> **Примечание:** At this time, no major browser supports `animationcancel`.

### Result

Assembled together, you get this:

{{ EmbedLiveSample('Example', 500, 400) }}

If your browser supports `animationcancel`, hiding the box using the button will cause a message to be displayed about the event.

## Specification

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{event("animationcancel")}} event this event handler is triggered by.
- {{domxref("AnimationEvent")}}
