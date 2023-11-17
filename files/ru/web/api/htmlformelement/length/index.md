---
title: HTMLFormElement.length
slug: Web/API/HTMLFormElement/length
---

{{APIRef("HTML DOM")}}

**`HTMLFormElement.length`** - свойство только для чтения, которое возвращает количество элементов управления в элементе {{HTMLElement("form")}}. Вы можете получить доступ к списку элементов управления формы с помощью свойства {{domxref("HTMLFormElement.elements", "elements")}}.

Это свойство учитывает элементы, которые являются потомками элемента `<form>`, а также элементы, которые были определены как члены этой формы с помощью их свойства `form`.

{{page("/en-US/docs/Web/API/HTMLFormElement", "Элементы, которые считаются управляющими элементами форм")}}

## Синтаксис

```js
numControls = form.length;
```

### Значение

Количество управляющих элементов внутри формы `<form>`. Это то же число, что и число элементов в {{domxref("HTMLFormControlsCollection")}}, возвращаемой свойством {{domxref("HTMLFormElement.elements", "elements")}}.

## Пример

```js
if (document.getElementById("form1").length > 1) {
  // в форме больше одного управляющего элемента
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
