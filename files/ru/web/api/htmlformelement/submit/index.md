---
title: HTMLFormElement.submit()
slug: Web/API/HTMLFormElement/submit
---

{{APIRef("HTML DOM")}}

Метод **`HTMLFormElement.submit()`** позволяет отправить форму {{HtmlElement("form")}}.

Этот метод похож, но не идентичен кнопке {{HtmlElement("button")}}. , который активирует отправку формы. Однако при непосредственном вызове этого метода:

- Событие {{event("submit")}} не инициировано. В частности, обработчик события {{domxref("GlobalEventHandlers.onsubmit", "onsubmit")}} для данной формы не запускается.
- [Проверка ограничений](/ru/docs/Web/Guide/HTML/HTML5/Constraint_validation) не запускается.

Метод {{domxref("HTMLFormElement.requestSubmit()")}} идентичен кнопке {{HtmlElement("button")}} , которая активирует отправку формы и не имеет различий, указанных выше.

Если элемент управления формы (например, кнопка отправки) имеет `name` или `id` кнопки `submit`, тогда этот метод будет маскировать метод `submit` формы..

## Syntax

```
HTMLFormElement.submit()
```

## Example

```js
document.forms["myform"].submit();
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
