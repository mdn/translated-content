---
title: Node.removeChild
slug: Web/API/Node/removeChild
---

{{ApiRef}}

## Аннотация

Удаляет дочерний элемент из DOM. Возвращает удалённый элемент.

## Синтаксис

```
var oldChild = element.removeChild(child);
element.removeChild(child);
```

- `child` дочерний элемент который будет удалён из DOM.
- `element` родительский элемент удаляемого `child`.
- `oldChild` ссылка на удаляемый дочерний элемент. `oldChild` === `child`.

Удалённый дочерний элемент остаётся в памяти, но больше не является частью DOM. Вы можете повторно использовать удалённый элемент с помощью ссылки на объект - `oldChild`.

Если `child` не является дочерним элементом `element`, тогда метод генерирует исключение. Также это происходит если `child` является дочерним элементом `element` во время вызова метода, но был удалён во время вызова обработчика событий удаляющего элемент(т.e при удалении элемента непосредственно перед вызовом обработчика событий).

## Пример

```
<!-- Пример -->

<div id="top" align="center">
  <div id="nested"></div>
</div>
```

```js
// Удаление элемента с известным родителем
var d = document.getElementById("top");
var d_nested = document.getElementById("nested");
var throwawayNode = d.removeChild(d_nested);
```

```js
// Удаление элемента без указания его родителя
var node = document.getElementById("nested");
if (node.parentNode) {
  node.parentNode.removeChild(node);
}
```

```js
// Удаление всех дочерних элементов
var element = document.getElementById("top");
while (element.firstChild) {
  element.removeChild(element.firstChild);
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("Node.replaceChild")}}
- {{domxref("Node.parentNode")}}
- {{domxref("ChildNode.remove")}}
