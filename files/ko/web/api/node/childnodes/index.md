---
title: element.childNodes
slug: Web/API/Node/childNodes
---

{{APIRef("DOM")}}

## 요약

**childNodes**는 주어진 요소의 자식 노드 모음(
_collection_
)을 반환합니다.

## 구문과 값

```js
var ndList = elementNodeReference.childNodes;
```

*ndList*는 현재 요소의 자식인 노드 개체의 순서 있는 모음입니다. 요소가 자식이 없으면, *ndList*는 아무 노드도 포함하지 않습니다.

*ndList*는 childNodes의 노드 목록을 저장하는 변수입니다. 그 목록은 [NodeList](http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core.html#ID-536297177) 형입니다. childNodes 속성은 읽기 전용입니다.

## 예시

```js
// parg는 <p> 요소 개체 참조
if (parg.hasChildNodes()) {
  // 그래서, 먼저 개체가 찼는 지(자식 노드가 있는 지) 검사
  var children = parg.childNodes;
  for (var i = 0; i < children.length; i++) {
    // children[i]로 각 자식에 무언가를 함
    // 주의: 목록은 유효해(live), 자식 추가나 제거는 목록을 바꿈
  }
}

// This는 노드에서 모든 자식을 제거하는 한 방법
// box는 자식 있는 요소 개체 참조
while (box.firstChild) {
  //목록은 유효해서(LIVE) 호출마다 재배열(re-index)함
  box.removeChild(box.firstChild);
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("Node.firstChild")}}
- {{domxref("Node.lastChild")}}
- {{domxref("Node.nextSibling")}}
- {{domxref("Node.previousSibling")}}
- {{domxref("Element.children")}}
