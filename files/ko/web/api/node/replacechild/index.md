---
title: Node.replaceChild()
slug: Web/API/Node/replaceChild
---

{{APIRef("DOM")}}

**`Node.replaceChild()`** 메소드는 특정 부모 노드의 한 자식 노드를 다른 노드로 교체합니다.

## Syntax

```js
replacedNode = parentNode.replaceChild(newChild, oldChild);
```

- `newChild` 는 `oldChild` 를 교체할 새로운 노드입니다. 만약 이미 `DOM` 안에 존재한다면 가장 먼저 제거됩니다.
- `oldChild` 는 이미 존재하는, 교체될 자식 노드입니다.
- `replacedNode` 는 교체된 노드입니다. `oldChild` 와 동일한 노드입니다.

## Example

```js
// <div>
//  <span id="childSpan">foo bar</span>
// </div>

// 텅빈 요소 노드를 하나 생성합니다.
// ID도, 속성도, 컨텐츠도 없습니다.
var sp1 = document.createElement("span");

// 'newSpan'이란 id 속성을 부여합니다.
sp1.id = "newSpan";

// 새로운 요소를 위한 컨텐츠를 생성합니다.
var sp1_content = document.createTextNode("new replacement span element.");

// 컨텐츠를 생성한 요소에 붙입니다.
sp1.appendChild(sp1_content);

// DOM에 존재하던, 교체되야할 노드를 참조합니다.
var sp2 = document.getElementById("childSpan");
var parentDiv = sp2.parentNode;

// 이미 존재하던 sp2 노드를 새로운 span 요소인 sp1으로 교체합니다.
parentDiv.replaceChild(sp1, sp2);

// 결과:
// <div>
//   <span id="newSpan">new replacement span element.</span>
// </div>
```

## Specification

- [DOM Level 1 Core: replaceChild](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-replaceChild)
- [DOM Level 2 Core: replaceChild](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-785887307)
- [DOM Level 3 Core: replaceChild](http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-785887307)

## See also

- {{domxref("Node.removeChild")}}
