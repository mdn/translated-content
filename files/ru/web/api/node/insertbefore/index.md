---
title: Node.insertBefore()
slug: Web/API/Node/insertBefore
---

{{APIRef("DOM")}}

Метод **`Node.insertBefore()`** добавляет элемент в список дочерних элементов родителя перед указанным элементом.

## Синтаксис

```
var insertedElement = parentElement.insertBefore(newElement, referenceElement);
```

В Mozilla Firefox, если referenceElement не задан или равен null, newElement вставляется в конец списка дочерних элементов. В IE, referenceElement равный undefined, сгенерируется исключение "Invalid argument", в то время как Chrome сгенерирует исключение "Uncaught TypeError", ожидая 2 аргумента.

- `insertedElement` Вставленный элемент.
- `parentElement` Родитель для нового элемента.
- `newElement` Элемент для вставки.
- `referenceElement` Элемент, перед которым будет вставлен `newElement`.

## Пример

```html
<div id="parentElement">
  <span id="childElement">foo bar</span>
</div>

<script>
  // Создаём новый <span>
  var sp1 = document.createElement("span");

  // Получаем ссылку на элемент, перед которым мы хотим вставить sp1
  var sp2 = document.getElementById("childElement");
  //Получаем ссылку на родителя sp2
  var parentDiv = sp2.parentNode;

  // Вставляем sp1 перед sp2
  parentDiv.insertBefore(sp1, sp2);
</script>
```

Однако нет метода insertAfter. Он может быть заменён использованием метода insertBefore в связке с [`nextSibling`](/ru/docs/DOM/Node.nextSibling).

В предыдущем примере sp1 может быть вставлен после sp2 следующим образом:

```
parentDiv.insertBefore(sp1, sp2.nextSibling);
```

Если `sp2` не имеет следующего элемента, то он будет последним дочерним элементом, `sp2.nextSibling` вернёт `null`, а `sp1` вставится в конец дочернего узла (сразу после sp2).

## Пример 2

Вставка элемента перед первым дочерним элементом с помощью [firstChild](/ru/docs/DOM/Node.firstChild).

```js
// Получаем ссылку на элемент в который мы хотим добавить новый элемент
var parentElement = document.getElementById("parentElement");
// Получаем ссылку на первый дочерний элемент
var theFirstChild = parentElement.firstChild;

// Создаём новый элемент, который будем добавлять
var newElement = document.createElement("div");

// Вставляем новый элемент перед первым дочерним элементом
parentElement.insertBefore(newElement, theFirstChild);
```

Когда у родителя нет первого дочернего элемента, `firstChild` вернёт `null`. Новый элемент всё равно будет выставляться после последнего дочернего элемента. Но так как родитель не имеет первого дочернего элемента, то он не будет иметь и последнего. Следовательно, после добавления в него элемента, этот элемент будет единственным дочерним элементом.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
