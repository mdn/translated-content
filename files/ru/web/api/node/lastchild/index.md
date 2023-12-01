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

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
