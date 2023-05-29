---
title: Node.hasChildNodes()
slug: Web/API/Node/hasChildNodes
translation_of: Web/API/Node/hasChildNodes
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

if ( foo.hasChildNodes() ) {
  foo.removeChild( foo.childNodes[0] );
}
```

## Спецификация

- [hasChildNodes](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-810594187)

## Смотрите также

- {{domxref("Node.childNodes")}}
- {{domxref("Node.hasAttributes")}}
