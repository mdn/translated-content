---
title: HTMLElement.contentEditable
slug: Web/API/HTMLElement/contentEditable
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLElement")}} 요소의 **`contenteditable`** 속성은 요소의 편집 가능 여부를 나타냅니다. 열거형 속성으로, 다음 중 하나의 값을 가질 수 있습니다.

- `'true'`는 요소가 `contenteditable`임을 의미합니다.
- `'false'`는 요소를 편집할 수 없음을 의미합니다.
- `'inherit'`은 요소가 부모의 편집 가능 여부를 상속함을 의미합니다.

{{domxref("HTMLElement.isContentEditable")}} 속성으로 이 속성의 {{jsxref("Boolean")}} 계산값을 얻을 수 있습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

Internet Explorer에서 `contenteditable`은 {{htmlelement("table")}}, {{htmlelement("col")}}, {{htmlelement("colgroup")}}, {{htmlelement("tbody")}}, {{htmlelement("td")}}, {{htmlelement("tfoot")}}, {{htmlelement("th")}}, {{htmlelement("thead")}}, {{htmlelement("tr")}} 요소에 바로 적용할 수 없습니다. 대신 편집 가능한 {{htmlelement("span")}} 또는 {{htmlelement("div")}} 요소를 표의 각 칸에 배치할 수 있습니다.

## 같이 보기

- [콘텐츠를 편집 가능하게 만들기](/ko/docs/Web/Guide/HTML/Editable_content)
- {{domxref("HTMLElement.isContentEditable")}}
- [`contenteditable`](/ko/docs/Web/HTML/Global_attributes#contenteditable) 전역 속성
