---
title: Node.lastChild
slug: Web/API/Node/lastChild
---

{{ ApiRef() }}

## Основная информация

**lastChild** возвращает последнего потомка в узле.

## Синтаксис

```
var last_child = element.lastChild
```

## Описание

Возвращаемый элемент `last_child` является узлом. Если его родитель является элементом, то возвращаемый узел является узлом типа Элемент, Текст, или же узлом комментария. Если в опрашиваемом узле нет дочерних элементов, **lastChild** возвращает `null` .

## Пример

```js
var tr = document.getElementById("row1");
var corner_td = tr.lastChild;
```

## Спецификация

- {{Spec("http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-61AD09FB", "DOM Level 2: lastChild", "REC")}}
- {{Spec("http://dom.spec.whatwg.org/#dom-node-lastchild", "DOM Standard: lastChild")}}
