---
title: Element.getElementsByTagName()
slug: Web/API/Element/getElementsByTagName
---

{{ APIRef("DOM") }}

**Element.getElementsByTagName()** 메서드는 제공된 태그 네임([tag name](/en/DOM/element.tagName))을 가지는 엘리먼트의 유효한 {{domxref("HTML 컬랙션")}}를 반환합니다. 엘리먼트가 특정된 범위를 검색하는 경우, 그 자신의 엘리먼트는 제외하고, 특정된 엘리먼트의 하위에 있는 서브트리가 검색됩니다. 반환된 리스트가 _live_ 상태이면, 리스트는 DOM 트리와 함께 자동적으로 업데이트 되는 것을 의미합니다. 결과적으로, 동일한 엘리먼트와 인자값으로 **Element.getElementsByTagName()** 을 여러번 호출할 필요성은 없어집니다.

HTML 문서 내에서 HTML 엘리먼트가 호출되면, getElementsByTagName는 진행하기 전에 그 인자들을 소문자로 변환합니다. 따라서, 카멜케이스로 이루어진 SVG 엘리먼트를 HTML문서의 서브트리 내에서 매칭하고자 하는 경우에는 {{ domxref("Element.getElementsByTagNameNS()") }}을 사용해야 합니다.

Element.getElementsByTagName는 특정된 엘리먼트의 하위에 있는 엘리먼트 만을 검색하는 것으로 한정된 것을 제외하고는 {{domxref("Document.getElementsByTagName()")}}와 실질적으로 유사합니다.

## 문법

```js
elements = element.getElementsByTagName(tagName);
```

- `elements` is a _live_ {{domxref("HTMLCollection")}} of found elements in the order they appear in the sub-tree. If no elements were found, the `HTMLCollection` is empty.
- 요소들의 서브트리안에서 나타나는 순서대로 발견된 요소들은 live {{domxref("HTMLCollection")}} 입니다.
- `element` is the element from where the search should start. Note that only the descendants of this element are included in the search, but not the element itself.
- 검색이 시작되어야 하는 요소에서부터 요소들이라고 할 수 있습니다. 요소 그 자체가 아니라 요소들에서 파생된 요소만 검색에 포함된다는 것을 알아두세요.
- `tagName` is the qualified name to look for. The special string `"*"` represents all elements. For compatibility with XHTML, lower-case should be used.
- tagName은 둘러볼 만한 가치가 있는 이름이다.특별한 문자열인 "\*"은 모든 요소들을 대표합니다. XHTML과의 호환성을 위해서, 소문자가 사용되어야 합니다.

## Example 예제

```js
// check the alignment on a number of cells in a table.
var table = document.getElementById("forecast-table");
var cells = table.getElementsByTagName("td");
for (var i = 0; i < cells.length; i++) {
  var status = cells[i].getAttribute("data-status");
  if (status == "open") {
    // grab the data
  }
}
```

## Specifications 명세

{{Specifications}}

## Browser compatibility 브라우저 호환성

{{Compat}}
