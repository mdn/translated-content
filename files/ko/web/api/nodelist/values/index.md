---
title: NodeList.values()
slug: Web/API/NodeList/values
translation_of: Web/API/NodeList/values
---
{{APIRef("DOM")}}

**`NodeList.values()`** 메서드는 이 객체에 포함된 모든 값을 통과할 수 있는 {{jsxref("Iteration_protocols",'iterator')}}를 반환합니다. 값은 {{domxref("Node")}} 객체 입니다.

## Syntax

```js
nodeList.values();
```

### Return value

{{jsxref("Iteration_protocols","iterator")}}를 반환합니다.

## Example

```js
var node = document.createElement("div");
var kid1 = document.createElement("p");
var kid2 = document.createTextNode("hey");
var kid3 = document.createElement("span");

node.appendChild(kid1);
node.appendChild(kid2);
node.appendChild(kid3);

var list = node.childNodes;

// Using for..of
for(var value of list.values()) {
  console.log(value);
}
```

결과는 다음과 같습니다 :

```
<p>
#text "hey"
<span>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Node")}}
- {{domxref("NodeList")}}
