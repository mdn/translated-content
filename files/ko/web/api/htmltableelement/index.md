---
title: table
slug: Web/API/HTMLTableElement
---

{{ ApiRef() }}

### HTML Table 요소 인터페이스

`table` 개체는 (상속으로 이용할 수 있는 정규 [element](/ko/docs/DOM/element) 개체 인터페이스 외에) HTML 표의 layout과 presentation을 다루는 특수 프로퍼티와 메소드를 제공하는 [`HTMLTableElement`](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-64060425) 인터페이스를 내놓습니다.

### 프로퍼티

- [table.caption](/ko/docs/DOM/table.caption)
  - : **caption**은 표 caption을 반환합니다.
- [table.tHead](/ko/docs/DOM/table.tHead)
  - : **tHead**는 표 head를 반환합니다.
- [table.tFoot](/ko/docs/DOM/table.tFoot)
  - : **tFoot**은 표 footer를 반환합니다.
- [table.rows](/ko/docs/DOM/table.rows)
  - : **rows**는 표의 줄(row)을 반환합니다.
- [table.tBodies](/ko/docs/DOM/table.tBodies)
  - : **tBodies**는 표 body를 반환합니다.

<!---->

- [table.align](/ko/docs/DOM/table.align)
  - : **align**은 표 정렬을 get/set합니다.
- [table.bgColor](/ko/docs/DOM/table.bgColor) {{ Deprecated_inline() }}
  - : **bgColor**는 표의 배경색을 get/set합니다.
- [table.border](/ko/docs/DOM/table.border)
  - : **border**는 표 border를 get/set합니다.
- [table.cellPadding](/ko/docs/DOM/table.cellPadding)
  - : **cellPadding**은 cell padding을 get/set합니다.
- [table.cellSpacing](/ko/docs/DOM/table.cellSpacing)
  - : **cellSpacing**은 표 주변 spacing을 get/set합니다.
- [table.frame](/ko/docs/DOM/table.frame)
  - : **frame**은 표 어느 쪽이 border를 가질 지를 지정합니다.
- [table.rules](/ko/docs/DOM/table.rules)
  - : **rules**는 안쪽 border가 보일 지를 지정합니다.
- [table.summary](/ko/docs/DOM/table.summary)
  - : **summary**는 표 요약을 get/set합니다.
- [table.width](/ko/docs/Web/API/HTMLTableElement/width)
  - : **width**는 표 너비를 get/set합니다.

### 메소드

- [table.createTHead](/ko/docs/DOM/table.createTHead)
  - : **createTHead**는 표 header를 만듭니다.
- [table.deleteTHead](/ko/docs/DOM/table.deleteTHead)
  - : **deleteTHead**는 표 header를 없앱니다.
- [table.createTFoot](/ko/docs/DOM/table.createTFoot)
  - : **createTFoot**은 표 footer를 만듭니다.
- [table.deleteTFoot](/ko/docs/DOM/table.deleteTFoot)
  - : **deleteTFoot**은 표 footer를 없앱니다.
- [table.createCaption](/ko/docs/DOM/table.createCaption)
  - : **createCaption**는 표에 새 caption을 만듭니다.
- [table.deleteCaption](/ko/docs/DOM/table.deleteCaption)
  - : **deleteCaption**은 표 caption을 없앱니다.
- [table.insertRow](/ko/docs/DOM/table.insertRow)
  - : **insertRow**는 새 줄을 삽입합니다.
- [table.deleteRow](/ko/docs/DOM/table.deleteRow)
  - : **deleteRow**는 줄을 없앱니다.
