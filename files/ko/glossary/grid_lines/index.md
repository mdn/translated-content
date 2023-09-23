---
title: 그리드의 선 (Grid Lines)
slug: Glossary/Grid_Lines
l10n:
  sourceCommit: d267a8cb862c20277f81bbc223221b36b0c613e6
---

{{GlossarySidebar}}

**그리드의 선(Grid Lines)**은 [CSS 그리드 레이아웃](/ko/docs/Web/CSS/CSS_grid_layout)을 사용하여 명시적인 그리드에 {{glossary("Grid tracks", "트랙")}}을 정의하면 생성됩니다.

## 예제

아래 예에는 3개의 열 트랙과 2개의 행 트랙이 있는 그리드가 있습니다. 그러면 4개의 열 그리드 선과 3개의 행 그리드 선이 제공됩니다.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 100px;
}
```

{{ EmbedLiveSample('Example', '500', '250') }}

줄 번호를 사용하여 줄의 주소를 지정할 수 있습니다. 영어와 같이 왼쪽에서 오른쪽으로 읽는 언어에서는 1번 줄 열이 그리드 왼쪽에 있고 1번 줄 행이 맨 위에 있습니다. 줄 번호는 문서의 [쓰기 모드](/ko/docs/Web/CSS/CSS_writing_modes)를 따릅니다. 예를 들어, 오른쪽에서 왼쪽으로 쓰는 언어에서는 1번 줄 열이 그리드 오른쪽에 있습니다. 아래 이미지는 언어가 왼쪽에서 오른쪽이라고 가정할 때 그리드의 줄 번호를 보여줍니다.

![번호가 있는 선이 있는 그리드를 보여주는 다이어그램](1_diagram_numbered_grid_lines.png)

'명시적 그리드' 외부에 위치한 콘텐츠를 유지하기 위해 암시적 트랙이 만들어질 때 '암시적 그리드'에도 줄이 생성되지만, 이러한 줄은 숫자로 처리할 수 없습니다.

## 줄 번호별로 항목을 그리드에 배치

그리드를 생성한 후, 요소를 줄 번호별로 그리드에 배치할 수 있습니다. 아래 예제에서는 요소가 1번 줄 열에서 3번 줄 열까지, 1번 줄 행에서 3번 줄 행까지 배치됩니다.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="item">Item</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 100px;
}
.item {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
}
```

{{ EmbedLiveSample('Placing_items_onto_the_grid_by_line_number', '500', '250') }}

## 이름을 지정하는 줄

'명시적 그리드'에 생성된 라인을 트랙 크기 정보 앞이나 뒤에 대괄호 안에 이름을 추가하여 이름을 지정할 수 있습니다. 요소를 배치할 때, 아래에 설명된 것처럼, 줄 번호 대신 이 이름을 사용할 수 있습니다.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="item">Item</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: [col1-start] 1fr [col2-start] 1fr [col3-start] 1fr [cols-end];
  grid-template-rows: [row1-start] 100px [row2-start] 100px [rows-end];
}
.item {
  grid-column-start: col1-start;
  grid-column-end: col3-start;
  grid-row-start: row1-start;
  grid-row-end: rows-end;
}
```

{{ EmbedLiveSample('Naming_lines', '500', '250') }}

## 같이 보기

### 속성 참고서

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-column-start")}}
- {{cssxref("grid-column-end")}}
- {{cssxref("grid-column")}}
- {{cssxref("grid-row-start")}}
- {{cssxref("grid-row-end")}}
- {{cssxref("grid-row")}}

### 더 읽어보기

- CSS 그리드 레이아웃 안내서:
  - [그리드 레이아웃의 기본 개념](/ko/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
  - [CSS 그리드를 사용한 줄을 기반으로 하는 배치](/ko/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
  - [이름 있는 그리드 선을 사용한 레이아웃](/ko/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)
  - [CSS 그리드, 논리적 값 및 쓰기 모드](/ko/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)
- [CSS 그리드 레이아웃 명세서의 그리드 선 정의](https://drafts.csswg.org/css-grid/#grid-line-concept)
