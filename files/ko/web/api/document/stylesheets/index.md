---
title: DocumentOrShadowRoot.styleSheets
slug: Web/API/Document/styleSheets
---

{{SeeCompatTable}}{{APIRef("Shadow DOM")}}

{{domxref("DocumentOrShadowRoot")}} 인터페이스의 **`styleSheets`** 읽기 전용 속성은 문서에서 명시적으로 링크했거나, 안에 포함된 스타일시트에 대한 {{domxref('CSSStyleSheet')}} 객체의 {{domxref('StyleSheetList')}}를 반환합니다.

## 예제

```js
function getStyleSheet(unique_title) {
  for (var i = 0; i < document.styleSheets.length; i++) {
    var sheet = document.styleSheets[i];
    if (sheet.title == unique_title) {
      return sheet;
    }
  }
}
```

### 참고

반환 된 목록은 다음과 같이 정렬됩니다:

- {{htmlelement("link")}} 헤더에서 검색된 스타일시트가 먼저 배치되고, 헤더 순서로 정렬됩니다.
- DOM에서 검색된 스타일시트는 [tree order](https://dom.spec.whatwg.org/#concept-tree-order)로 정렬되어 배치됩니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
