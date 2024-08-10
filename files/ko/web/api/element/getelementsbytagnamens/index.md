---
title: Element.getElementsByTagNameNS()
slug: Web/API/Element/getElementsByTagNameNS
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM")}}

**`Element.getElementsByTagNameNS()`** 는 지정된 네임스페이스에
속하는 주어진 태그 이름을 가진 요소들의 실시간 {{domxref("HTMLCollection")}} 을 반환합니다.
이는
{{Domxref("Document.getElementsByTagNameNS")}}와 유사하지만,
지정된 요소의
하위 요소들로 검색이 제한됩니다.

## 구문

```js-nolint
getElementsByTagNameNS(namespaceURI, localName)
```

### 매개변수

- `namespaceURI`는 찾고자 하는 요소의 네임스페이스 URI를 나타냅니다(참고: {{domxref("Element.namespaceURI")}} 및 {{domxref("Attr.namespaceURI")}}). 예를 들어, XHTML 요소를 찾고자 한다면 XHTML 네임스페이스 URI인 `http://www.w3.org/1999/xhtml`를 사용해야 합니다.
- `localName`은 찾고자 하는 요소의 로컬 이름(local name)을 나타냅니다. 또는 특수한 값 `"*"`를 사용하여 모든 요소를 선택할 수 있습니다. (참고: {{domxref("Element.localName")}} 및 {{domxref("Attr.localName")}}).

## 반환 값

트리 구조에서 나타나는 순서대로 찾아진 요소들의 실시간 {{domxref("HTMLCollection")}}

## 예제

```js
// XHTML 문서의 테이블 내 여러 셀의 정렬 상태를 확인합니다.
const table = document.getElementById("forecast-table");
const cells = table.getElementsByTagNameNS(
  "http://www.w3.org/1999/xhtml",
  "td",
);

for (const cell of cells) {
  const axis = cell.getAttribute("axis");
  if (axis === "year") {
    // 데이터를 가져옵니다.
  }
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
