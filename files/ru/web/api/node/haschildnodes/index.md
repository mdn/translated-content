---
title: Node.hasChildNodes()
slug: Web/API/Node/hasChildNodes
---

{{APIRef("DOM")}}

Метод **`Node.hasChildNodes()`** возвращает {{jsxref("Boolean")}} значение показывающее имеет ли текущий {{domxref("Node")}} [дочерние узлы](/ru/docs/Web/API/Node.childNodes) или нет.

## Синтаксис

```
node.hasChildNodes()
```

## Пример

Следующий пример удаляет первый дочерний узел внутри элемента с id `"foo"`, если foo имеет дочерние узлы.

```js
var foo = document.getElementById("foo");

if (foo.hasChildNodes()) {
  foo.removeChild(foo.childNodes[0]);
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("Node.childNodes")}}
- {{domxref("Node.hasAttributes")}}
