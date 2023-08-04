---
title: Document.styleSheetSets
slug: Web/API/Document/styleSheetSets
---

{{APIRef("DOM")}}{{deprecated_header}}{{Non-standard_header}}

**`styleSheetSets`**의 읽기 전용 속성은 현재 사용 가능한 모든 스타일 시트 세트의 live 리스트를 반환합니다.

## 문법

```js
var sets = document.styleSheetSets;
```

반환시, `sets`는 사용할 수 있는 스타일 시트 세트의 리스트.

## 예시

ID가 "sheetList"인 {{HTMLElement("ul")}} (list) 요소가 주어지면, 사용 가능한 모든 스타일 시트 세트의 이름으로 아래와 같은 코드로 채울 수 있습니다.

```js
let list = document.getElementById("sheetList");
let sheets = document.styleSheetSets;

list.innerHTML = "";

for (let i = 0; i < sheets.length; i++) {
  let item = document.createElement("li");

  item.innerHTML = sheets[i];
  list.appendChild(item);
}
```

## Notes

사용 가능한 스타일 시트 세트 리스트는 문서에 사용 가능한 모든 스타일 시트를 열거하여 구성되고, {{domxref("document.styleSheets")}} 속성에 나열된 순서대로, 리스트에 제목을 가진 각각의 스타일 시트 `title`을 추가합니다. 중복 항목이 리스트에서 삭제됨. (대소문자 구분 비교 사용).

## 브라우저 호환성

{{Compat}}

## 더보기

- {{domxref("Stylesheet")}}
- {{domxref("document.styleSheets")}}
- {{domxref("document.lastStyleSheetSet")}}
- {{domxref("document.preferredStyleSheetSet")}}
- {{domxref("document.selectedStyleSheetSet")}}
- {{domxref("document.enableStyleSheetsForSet()")}}
