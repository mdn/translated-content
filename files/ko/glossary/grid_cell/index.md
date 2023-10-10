---
title: 그리드 셀 (Grid Cell)
slug: Glossary/Grid_Cell
l10n:
  sourceCommit: 84eac7b54de6366dd67384f4f7d5f082f22fd7f4
---

{{GlossarySidebar}}

[CSS 그리드 레이아웃](/ko/docs/Web/CSS/CSS_grid_layout)에서, **그리드 셀 (Grid Cell)**은 CSS 그리드에 사용할 수 있는 가장 작은 단위입니다. 이는 교차하는 4개의 {{glossary("grid lines", "격자선")}} 사이의 공간이며 개념적으로는 표 셀과 매우 유사합니다.

![그리디의 개별 셀을 보여주는 다이어그램](1_grid_cell.png)

그리드 배치 방법 중 하나를 사용해 항목을 배치하지 않으면, 그리드 컨테이너의 바로 밑 자식 요소는 자동 배치 알고리즘에 의해 각 개별 그리드 셀에 하나씩 배치됩니다. 모든 요소를 담을 수 있는 충분한 셀을 만들기 위해 추가 행 또는 열 {{glossary("grid tracks", "그리드 트랙")}}이 생성됩니다.

## 예제

이 예제에서는 3개의 열 트랙 그리드를 만들었습니다. 5개의 요소는 3개 그리드 셀의 초기 행을 따라 작업하는 그리드 셀에 배치된 다음, 나머지 2개에 대한 새로운 행을 생성합니다.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
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

{{ EmbedLiveSample('Example', '300', '280') }}

## 같이 보기

### 속성 참고서

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-columns")}}

### 더 읽어보기

- CSS 그리드 레이아웃 안내서: [그리드 레이아웃의 기본 개념](/ko/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [CSS 그리드 레이아웃 명세서의 그리드 셀 정의](https://drafts.csswg.org/css-grid/#grid-track-concept)
