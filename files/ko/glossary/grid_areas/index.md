---
title: 그리드 영역 (Grid Areas)
slug: Glossary/Grid_Areas
l10n:
  sourceCommit: d267a8cb862c20277f81bbc223221b36b0c613e6
---

{{GlossarySidebar}}

**그리드 영역(grid area)**은 그리드의 직사각형 영역을 구성하는 하나 이상의 {{glossary("grid cell", "그리드 셀")}}입니다. [줄 기반 배치](/ko/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)를 사용하여 항목을 배치하거나 [이름이 있는 그리드 영역](/ko/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)을 사용하여 영역을 정의할 때 그리드 영역이 생성됩니다.

![강조 표시된 그리드 영역을 보여주는 이미지](1_grid_area.png)

그리드 영역은 본질적으로 직사각형'이어야 합니다'. 예를 들어, T자형 또는 L자형 그리드 영역을 생성하는 것을 불가능합니다.

## 예제

아래 예제에는 두 개의 그리드 요소가 있는 그리드 컨테이너가 있습니다. 그리드 컨테이너를 {{cssxref("grid-area")}} 속성으로 이름을 지정하고 {{cssxref("grid-template-areas")}}를 사용하여 그리드에 배치했습니다. 이렇게 하면, 두 개의 그리드 영역이 생성되는데, 하나는 4개의 그리드 셀을 덮고, 나머지 두 개는 포함됩니다.

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
  grid-template-rows: 100px 100px;
  grid-template-areas:
    "a a b"
    "a a b";
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
}
```

```html
<div class="wrapper">
  <div class="item1">Item</div>
  <div class="item2">Item</div>
</div>
```

{{ EmbedLiveSample('Example', '300', '280') }}

## 같이 보기

### 속성 참고서

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-area")}}

### 추가 읽어보기

- CSS 그리드 레이아웃 안내서:
  - [그리드 레이아웃의 기본 개념](/ko/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
  - [그리드 템플릿 영역](/ko/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- [CSS 그리드 레이아웃 명세서의 그리드 영역의 정의](https://drafts.csswg.org/css-grid/#grid-area-concept)
