---
title: NodeList.item()
slug: Web/API/NodeList/item
---

{{APIRef("DOM")}}

[`NodeList`](/ko/docs/Web/API/NodeList) 의 node를 index로 돌려줍니다. 이 메서드는 인수(arguments)를 제공하는 한 exceptions 을 throw 하지 않습니다. index가 범위를 벗어나면 `null` 값이 반환되고, 인수가 제공되지 않으면 `TypeError` 가 throw 됩니다.

## Syntax

```js
nodeItem = nodeList.item(index);
```

- `nodeList` 는 `NodeList` 입니다. 일반적으로 [childNodes](/ko/docs/Web/API/Node/childNodes) 와 같은 다른 DOM 속성(property) 또는 메서드에서 가져옵니다.
- `index` 는 fetch될 node의 index입니다. index는 0 에서 부터 시작합니다.
- `nodeItem` 은 `item` 메서드가 반환 한 `nodeList` 의 node `index` 입니다.

## Alternate Syntax

자바스크립트는 NodeList 에서 index를 얻기 위한, 배열과 같은 브라켓 문법(\[])을 제공합니다 :

```js
nodeItem = nodeList[index];
```

## Example

```js
var tables = document.getElementsByTagName("table");
var firstTable = tables.item(1); // or simply tables[1] - returns the second table in the DOM
```

## Specification

[DOM Level 1 Core: NodeList.item()](https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-item)

[DOM Level 2 Core: NodeList.item()](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-844377136)

## 브라우저 호환성

{{Compat}}
