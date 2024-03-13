---
title: Node.replaceChild
slug: Web/API/Node/replaceChild
---

{{ApiRef}}

## Аннотация

Заменяет дочерний элемент на выбранный. Возвращает заменённый элемент.

## Синтаксис

```
replacedNode = parentNode.replaceChild(newChild, oldChild);
```

- `newChild` элемент на который будет заменён `oldChild`. В случает если он уже есть в DOM, то сначала он будет удалён.
- `oldChild` элемент который будет заменён.
- `replacedNode` заменённый элемент. Тоже самое что и `oldChild`.

## Пример

```js
// <div>
//  <span id="childSpan">foo bar</span>
// </div>

// Создаём новый пустой элемент
// without an ID, any attributes, or any content
var sp1 = document.createElement("span");

// Присваиваем ему id 'newSpan'
sp1.setAttribute("id", "newSpan");

// Создаём строку.
var sp1_content = document.createTextNode("new replacement span element.");

// Добавляем контент в созданный нами узел
sp1.appendChild(sp1_content);

// создаём ссылку на существующий элемент который будем заменять
var sp2 = document.getElementById("childSpan");
var parentDiv = sp2.parentNode;

// заменяем существующий элемент sp2 на созданный нами sp1
parentDiv.replaceChild(sp1, sp2);

// Результат:
// <div>
//   <span id="newSpan">new replacement span element.</span>
// </div>
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("Node.removeChild")}}
