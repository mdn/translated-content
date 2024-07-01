---
title: Node.nextSibling
slug: Web/API/Node/nextSibling
---

{{APIRef("DOM")}}

읽기 전용 속성인 **`Node.nextSibling`** 은 부모의 {{domxref("Node.childNodes","childNodes")}} 목록에서 지정된 노드 바로 다음에 있는 노드를 반환하거나 지정된 노드가 해당 목록의 마지막 노드이면 `null` 값을 반환합니다.

## Syntax

```js
nextNode = node.nextSibling;
```

## Notes

Gecko 기반 브라우저는 소스 마크업에서 공백을 나타내기 위해 문서 내에 텍스트 노드를 삽입합니다.
그러므로 예를 들어 [`Node.firstChild`](/ko/docs/Web/API/Node/firstChild)나 [`Node.previousSibling`](/ko/docs/Web/API/Node/previousSibling)을 통해서 얻은 노드는 작성자가 얻으려 한 실제 요소와는
달리 공백 텍스트 노드를 참조할 지도 모릅니다.

더 많은 정보는 [Whitespace in the DOM](/ko/docs/Whitespace_in_the_DOM)과
[W3C DOM 3 FAQ: Why are some Text nodes empty?](http://www.w3.org/DOM/faq.html#emptytext)를 보세요.

## Example

```html
<div id="div-01">Here is div-01</div>
<div id="div-02">Here is div-02</div>

<script type="text/javascript">
  var el = document.getElementById("div-01").nextSibling,
    i = 1;

  console.log("Siblings of div-01:");

  while (el) {
    console.log(i + ". " + el.nodeName);
    el = el.nextSibling;
    i++;
  }
</script>

/************************************************** 로드될 때 다음과 같이 콘솔에
기록됩니다. : Siblings of div-01 1. #text 2. DIV 3. #text 4. SCRIPT
**************************************************/
```

위의 예에서 `#text` 노드는 태그 사이의 마크 업 에서 공백이 발생하는 DOM에 삽입되며 ( 즉 요소의 닫기 태그와 다음 태그의 열기 태그 사이에 있습니다 ) `document.write` 구문에 의해 삽입 된 요소간에 공백이 생성되지 않습니다.

`nextSibling` 을 사용하여 DOM을 탐색 할 때, DOM에 텍스트 노드를 포함시킬 수 있어야 합니다. 노트 섹션의 리소스를 참조하세요.

## Specification

- [DOM Level 1 Core: nextSibling](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#attribute-nextSibling)
- [DOM Level 2 Core: nextSibling](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-6AC54C2F)

## See also

- {{domxref("Element.nextElementSibling")}}
