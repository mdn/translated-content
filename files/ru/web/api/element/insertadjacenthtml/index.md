---
title: Element.insertAdjacentHTML()
slug: Web/API/Element/insertAdjacentHTML
---

{{ApiRef("DOM")}}

**`insertAdjacentHTML()`** разбирает указанный текст как HTML или XML и вставляет полученные узлы (nodes) в DOM дерево в указанную позицию. Данная функция не переписывает имеющиеся элементы, что предотвращает дополнительную сериализацию и поэтому работает быстрее, чем манипуляции с {{domxref("Element.innerHTML", "innerHTML")}}.

## Синтаксис

```
targetElement.insertAdjacentHTML(position, text);
```

### Параметры

- `position`

  - : {{domxref("DOMString")}} - определяет позицию добавляемого элемента относительно элемента, вызвавшего метод. Должно соответствовать одному из следующих значений (чувствительно к регистру):

    - `'beforebegin'`: до самого `element` (до открывающего тега).
    - `'afterbegin'`: сразу после открывающего тега `element` (перед первым потомком).
    - `'beforeend'`: сразу перед закрывающим тегом `element` (после последнего потомка).
    - `'afterend'`: после `element` (после закрывающего тега).

- `text`
  - : Строка, которая будет проанализирована как HTML или XML и вставлена в DOM дерево документа.

### Наглядное отображение параметра position

```
<!-- beforebegin -->
<p>
<!-- afterbegin -->
foo
<!-- beforeend -->
</p>
<!-- afterend -->
```

> **Примечание:** позиции `beforebegin` и `afterend` работают только если узел имеет родительский элемент.

## Пример

```js
// <div id="one">one</div>
var d1 = document.getElementById("one");
d1.insertAdjacentHTML("afterend", '<div id="two">two</div>');

// At this point, the new structure is:
// <div id="one">one</div><div id="two">two</div>
```

## Примечания

### Соображения безопасности

Будьте осторожны при использовании вставки HTML на страницу с помощью `insertAdjacentHTML()`, не используете пользовательский ввод, который не был экранирован.

Не рекомендуется использовать `insertAdjacentHTML()`, когда требуется ввести простой текст. Используйте для этого свойство {{domxref("Node.textContent")}} или метод {{domxref("Element.insertAdjacentText()")}}. Они не будут интерпретировать текст как HTML, а вставят необработанный текст.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

[hacks.mozilla.org guest post by Henri Sivonen including benchmark showing that insertAdjacentHTML can be way faster in some cases.](http://hacks.mozilla.org/2011/11/insertadjacenthtml-enables-faster-html-snippet-injection/)
