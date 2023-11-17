---
title: Node.previousSibling
slug: Web/API/Node/previousSibling
---

{{APIRef("DOM")}}

Свойство **`Node.previousSibling`** используется только для чтения, оно возвращает узел предшествующий указанному в родительском элементе {{domxref("Node.childNodes", "childNodes")}}, или `null`, если указанный узел первый в своём родителе.

## Синтаксис

```
previousNode = node.previousSibling;
```

## Пример

```js
// <a><b1 id="b1"/><b2 id="b2"/></a>

alert(document.getElementById("b1").previousSibling); // null
alert(document.getElementById("b2").previousSibling.id); // "b1"
```

## Примечание

Браузеры, основанные на Gecko, вставляют текстовые узлы в документ для представления пробелов в разметке.
Поэтому узел, полученный, например, при использовании [`Node.firstChild`](/ru/docs/Web/API/Node/firstChild) или [`Node.previousSibling`](/ru/docs/Web/API/Node/previousSibling) может относиться к
пробелу, а не к тому элементу, который автор хотел получить.

Смотрите [Пробел в DOM](/ru/docs/Web/Guide/DOM/Whitespace_in_the_DOM) и
[W3C DOM 3 FAQ: Почему некоторые текстовые узлы пустые?](http://www.w3.org/DOM/faq.html#emptytext)
для дополнительной информации.

Для навигации через список дочерних узлов в обратном порядке используйте [Node.nextSibling](/ru/docs/Web/API/Node.nextSibling).

## Спецификация

- [DOM Level 1 Core: previousSibling](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#attribute-previousSibling)
- [DOM Level 2 Core: previousSibling](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-640FB3C8)
- [DOM Level 3 Core: previousSibling](http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-640FB3C8)
