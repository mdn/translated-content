---
title: Element.append()
slug: Web/API/Element/append
tags:
  - API
  - DOM
  - Метод
  - Узел
  - Элемент
  - Определение
browser-compat: api.Element.append
translation_of: Web/API/Element/append
---
{{APIRef("DOM")}}

Метод **`Element.append()`** вставляет {{domxref("Node", "узлы")}} или {{domxref("DOMString", "строки с текстом")}} в конец `Element`. {{domxref("DOMString", "Строки с текстом")}} вставляются как {{domxref("Text", "текстовое содержимое")}}.

Отличия от метода {{domxref("Node.appendChild()")}}:

- Метод `Element.append()` позволяет вставлять {{domxref("DOMString", "строки с текстом")}}, в то время как `Node.appendChild()` работает только с {{domxref("Node", "узлами")}}.
- При вызове метод `Element.append()` ничего не возвращает, в то время как `Node.appendChild()` возвращает вставленный {{domxref("Node", "узел")}}.
- С помощью `Element.append()` можно вставить сразу несколько узлов или строк текста, в то время как `Node.appendChild()` умеет вставлять по одной сущности за раз.

## Синтаксис

```js
append(...nodesOrDOMStrings)
```

### Аргументы

- `nodesOrDOMStrings`
  - : Один или несколько {{domxref("Node", "узлов")}} или {{domxref("DOMString", "строк с текстом")}}, которые необходимо вставить.

### Исключения

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Случается, когда узел не может быть вставлен в существующую иерархию элементов.

## Примеры

### Вставка элемента

```js
let div = document.createElement("div")
let p = document.createElement("p")
div.append(p)

console.log(div.childNodes) // NodeList [ <p> ]
```

### Вставка текста

```js
let div = document.createElement("div")
div.append("Какой-то текст")

console.log(div.textContent) // "Какой-то текст"
```

### Вставка и текста, и элемента сразу

```js
let div = document.createElement("div")
let p = document.createElement("p")
div.append("Какой-то текст", p)

console.log(div.childNodes) // NodeList [ #text "Какой-то текст", <p> ]
```

### Область видимости метода нерасширяема

Метод `append()` не работает с оператором `with`. Подробнее читайте в справке по {{jsxref("Symbol.unscopables")}}.

```js
let div = document.createElement("div")

with(div) {
  append("foo")
}
// ReferenceError: append is not defined
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{domxref("Element.prepend()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Element.after()")}}
- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("NodeList")}}
