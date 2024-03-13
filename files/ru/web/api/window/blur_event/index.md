---
title: GlobalEventHandlers.onblur
slug: Web/API/Window/blur_event
---

{{ApiRef("HTML DOM")}}

Свойство **`onblur`** из {{domxref("GlobalEventHandlers")}} событий {{event("Event_handlers", "event handler")}} для {{event("blur")}} события. Оно доступно для{{domxref("Element")}}, {{domxref("Document")}} и {{domxref("Window")}}.

Событие `blur` возникает когда элемент теряет фокус.

> **Примечание:** Обратным `onblur` является {{domxref("GlobalEventHandlers.onfocus", "onfocus")}}.

## Syntax

```
target.onblur = functionRef;
```

### Value

`functionRef` - это имя функции или [function expression](/ru/docs/Web/JavaScript/Reference/Operators/function). Функция получает объект {{domxref("FocusEvent")}} в качестве единственного аргумента.

## Example

В этом примере `onblur` и {{domxref("GlobalEventHandlers.onfocus", "onfocus")}} используются для изменения текста в элементе {{HtmlElement("input")}}.

### HTML

```html
<input type="text" value="CLICK HERE" />
```

### JavaScript

```js
let input = document.querySelector("input");

input.onblur = inputBlur;
input.onfocus = inputFocus;

function inputBlur() {
  input.value = "Focus has been lost";
}

function inputFocus() {
  input.value = "Focus is here";
}
```

### Result

Нажимайте внутри и вне поля формы. Содержимое будет изменятся.

{{EmbedLiveSample('Example')}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## See also

- {{event("blur")}} event
- Related event handler: {{domxref("GlobalEventHandlers.onfocus")}}
