---
title: "HTMLElement: offsetLeft 속성"
slug: Web/API/HTMLElement/offsetLeft
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ APIRef("HTML DOM") }}

**`HTMLElement.offsetLeft`** 읽기 전용 속성은 현재 요소의 왼쪽 상단 모서리가 {{domxref("HTMLElement.offsetParent")}} 노드 내에서 왼쪽으로 얼마나 떨어져 있는지를 픽셀 수로 반환합니다.

블록 레벨 요소의 경우 `offsetTop`, `offsetLeft`, `offsetWidth`, `offsetHeight`는 `offsetParent`를 기준으로 요소의 테두리 상자를 설명합니다.

하지만 **span** 같이 한 줄에서 다음 줄로 감싸질 수 있는 인라인 레벨 요소의 경우 `offsetTop`과 `offsetLeft`는 첫 번째 테두리 상자의 위치를 설명하고 (너비와 높이를 가져오기 위해 {{domxref("Element.getClientRects()")}} 사용), `offsetWidth`와 `offsetHeight`는 경계 테두리 상자의 치수를 설명합니다 (위치를 가져오기 위해 {{domxref("Element.getBoundingClientRect()")}} 사용). 따라서 왼쪽, 위쪽, 너비, 높이가 `offsetLeft`, `offsetTop`, `offsetWidth`, `offsetHeight`인 상자는 텍스트로 감싸진 span의 경계 상자가 되지 않습니다.

## 값

정수입니다.

## 예제

```js
const colorTable = document.getElementById("t1");
const tOLeft = colorTable.offsetLeft;

if (tOLeft > 5) {
  // 큰 왼쪽 오프셋: 여기서 무언가를 하세요.
}
```

이 예제는 파란색 테두리가 있는 div 안에 둘러싸인 'long' 문장과 span의 경계를 설명해야 할 것으로 생각하는 빨간색 상자를 보여줍니다.

![Short span이라고 읽는 문장입니다. 이 텍스트는 완전히 파란색 테두리가 있는 div 안에 있습니다. 이 div 내에서 감싸는 Long span이라고 읽는 문장입니다. "long span that wraps"라는 단어가 빨간색 테두리가 있는 상자 안에 있습니다. "within this div"라는 단어가 파란색 테두리가 있는 div 안에 있습니다.](offsetleft.jpg)

```html
<div
  style="width: 300px; border-color:blue; border-style:solid; border-width:1;">
  <span>Short span. </span>
  <span id="longspan">Long span that wraps within this div.</span>
</div>

<div
  id="box"
  style="position: absolute; border-color: red; border-width: 1; border-style: solid; z-index: 10"></div>

<script>
  const box = document.getElementById("box");
  const longspan = document.getElementById("longspan");
  box.style.left = longspan.offsetLeft + document.body.scrollLeft + "px";
  box.style.top = longspan.offsetTop + document.body.scrollTop + "px";
  box.style.width = longspan.offsetWidth + "px";
  box.style.height = longspan.offsetHeight + "px";
</script>
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("HTMLElement.offsetParent")}}, {{domxref("HTMLElement.offsetTop")}}, {{domxref("HTMLElement.offsetWidth")}}, {{domxref("HTMLElement.offsetHeight")}}
