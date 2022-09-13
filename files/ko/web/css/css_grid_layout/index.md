---
title: CSS 그리드 레이아웃
slug: Web/CSS/CSS_Grid_Layout
tags:
  - CSS
  - Grid Layout
  - Grids
  - 개요
  - 그리드
  - 그리드 레이아웃
  - 레이아웃
  - 참고
translation_of: Web/CSS/CSS_Grid_Layout
---
**CSS 그리드 레이아웃(Grid Layout)**은 페이지를 여러 주요 영역으로 나누거나, 크기와 위치 및 문서 계층 구조의 관점에서 HTML 기본 요소로 작성된 콘트롤 간의 관계를 정의하는 데 아주 탁월합니다.

테이블과 마찬가지로 그리드 레이아웃은 세로 열과 가로 행을 기준으로 요소를 정렬할 수 있습니다. 하지만, 테이블과 달리 CSS 그리드는 다양한 레이아웃을 훨씬 더 쉽게 구현할 수 있습니다. 예를 들어, 그리드 컨테이너 속 자식 요소를, 마치 CSS로 일일이 위치를 지정해 준 것처럼, 실제로 겹치게 층을 지면서 자리를 잡도록 각 요소의 위치를 지정해 줄 수도 있습니다.

## 기본 예제

아래 예제는 3개의 세로 열 트랙으로 이루어졌으며, 저절로 채워지며 생성되는 가로 행 트랙은 높이가 최소 100픽셀 이상, 콘텐츠 최대치까지 자동으로 늘어나는 구조의 그리드를 보여줍니다. 각 아이템은 그리드 라인을 기준으로 배치되었습니다.

```css hidden
* {box-sizing: border-box;}
.wrapper {
  max-width: 940px;
  margin: 0 auto;
}

.wrapper > div {
  border: 2px solid rgb(233,171,88);
  border-radius: 5px;
  background-color: rgba(233,171,88,.5);
  padding: 1em;
  color: #d9480f;
}
```

### HTML

```html
<div class="wrapper">
  <div class="one">One</div>
  <div class="two">Two</div>
  <div class="three">Three</div>
  <div class="four">Four</div>
  <div class="five">Five</div>
  <div class="six">Six</div>
</div>
```

### CSS

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
.one {
  grid-column: 1 / 3;
  grid-row: 1;
}
.two {
  grid-column: 2 / 4;
  grid-row: 1 / 3;
}
.three {
  grid-column: 1;
  grid-row: 2 / 5;
}
.four {
  grid-column: 3;
  grid-row: 3;
}
.five {
  grid-column: 2;
  grid-row: 4;
}
.six {
  grid-column: 3;
  grid-row: 4;
}
```

{{ EmbedLiveSample('example', '500', '440') }}

## 참고

### CSS 프로퍼티

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-template")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-flow")}}
- {{cssxref("grid")}}
- {{cssxref("grid-row-start")}}
- {{cssxref("grid-column-start")}}
- {{cssxref("grid-row-end")}}
- {{cssxref("grid-column-end")}}
- {{cssxref("grid-row")}}
- {{cssxref("grid-column")}}
- {{cssxref("grid-area")}}
- {{cssxref("grid-row-gap")}}
- {{cssxref("grid-column-gap")}}
- {{cssxref("grid-gap")}}

### CSS 함수

- {{cssxref("repeat", "repeat()")}}
- {{cssxref("minmax", "minmax()")}}
- {{cssxref("fit-content", "fit-content()")}}

### CSS 데이터 타입

- {{cssxref("&lt;flex&gt;")}}

### 용어집 목록

- [Grid](/ko/docs/Glossary/Grid)
- [Grid Lines](/ko/docs/Glossary/Grid_Lines)
- [Grid Tracks](/ko/docs/Glossary/Grid_Tracks)
- [Grid Cell](/ko/docs/Glossary/Grid_Cell)
- [Grid Area](/ko/docs/Glossary/Grid_Areas)
- [Gutters](/ko/docs/Glossary/Gutters)
- [Grid Axis](/ko/docs/Glossary/Grid_Axis)
- [Grid row](/ko/docs/Glossary/Grid_Rows)
- [Grid column](/ko/docs/Glossary/Grid_Column)

## 가이드

- [그리드 레이아웃의 기본 개념](/ko/docs/Web/CSS/CSS_Grid_Layout/그리드_레이아웃의_기본_개념)
- [그리드 레이아웃과 다른 레이아웃 방법과의 관계](/ko/docs/Web/CSS/CSS_Grid_Layout/그리드_레이아웃과_다른_레이아웃_방법과의_관계)
- [라인을 기준으로 한 아이템 배치](/ko/docs/Web/CSS/CSS_Grid_Layout/CSS_그리드의_라인을_기준으로_한_아이템_배치)
- [그리드 템플릿 영역](/ko/docs/Web/CSS/CSS_Grid_Layout/그리드_템플릿_영역)
- [이름이 주어진 그리드 라인을 이용한 레이아웃](/ko/docs/Web/CSS/CSS_Grid_Layout/이름이_주어진_그리드_라인을_이용한_레이아웃)
- [Auto-placement in CSS Grid Layout](/ko/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)
- [Box alignment in CSS Grid Layout](/ko/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)
- [CSS Grid, Logical Values and Writing Modes](/ko/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes)
- [CSS Grid Layout and accessibility](/ko/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)
- [CSS Grid and progressive enhancement](/ko/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
- [Realising common layouts using CSS Grid](/ko/docs/Web/CSS/CSS_Grid_Layout/Realising_common_layouts_using_CSS_Grid_)

## 외부 문서

- [Examples from Jen Simmons](http://labs.jensimmons.com/)
- [Grid by Example - a collection of usage examples and video tutorials](http://gridbyexample.com/)
- [Codrops Grid Reference](https://tympanus.net/codrops/css_reference/grid/)
- [Firefox DevTools CSS Grid Inspector](/ko/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts)
- [CSS Grid Playground](https://mozilladevelopers.github.io/playground/)
- [Grid Garden](http://cssgridgarden.com) - A game for learning CSS grid

## 표준 문서

| Specification                        | Status                           | Comment             |
| ------------------------------------ | -------------------------------- | ------------------- |
| {{ SpecName('CSS3 Grid') }} | {{ Spec2('CSS3 Grid') }} | Initial definition. |

1. [**CSS**](/ko/docs/Web/CSS)
2. [**CSS Reference**](/ko/docs/Web/CSS/Reference)
3. [CSS 그리드 레이아웃](/ko/docs/Web/CSS/CSS_Grid_Layout)
4. **가이드**

    1. [그리드 레이아웃의 기본 개념](/ko/docs/Web/CSS/CSS_Grid_Layout/그리드_레이아웃의_기본_개념)
    2. [다른 레이아웃 방법과의 관계](/ko/docs/Web/CSS/CSS_Grid_Layout/그리드_레이아웃과_다른_레이아웃_방법과의_관계)
    3. [라인을 기준으로 한 아이템 배치](/ko/docs/Web/CSS/CSS_Grid_Layout/CSS_그리드의_라인을_기준으로_한_아이템_배치)
    4. [그리드 템플릿 영역](/ko/docs/Web/CSS/CSS_Grid_Layout/그리드_템플릿_영역)
    5. [이름이 주어진 그리드 라인을 이용한 레이아웃](/ko/docs/Web/CSS/CSS_Grid_Layout/이름이_주어진_그리드_라인을_이용한_레이아웃)
    6. [Auto-placement in grid layout](/ko/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)
    7. [Box alignment in grid layout](/ko/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)
    8. [Grids, logical values and writing modes](/ko/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes)
    9. [CSS Grid Layout and Accessibility](/ko/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)
    10. [CSS Grid Layout and Progressive Enhancement](/ko/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
    11. [Realizing common layouts using grids](/ko/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout)

5. **프로퍼티**

    1. [grid](/ko/docs/Web/CSS/grid)
    2. [grid-area](/ko/docs/Web/CSS/grid-area)
    3. [grid-auto-columns](/ko/docs/Web/CSS/grid-auto-columns)
    4. [grid-auto-flow](/ko/docs/Web/CSS/grid-auto-flow)
    5. [grid-auto-rows](/ko/docs/Web/CSS/grid-auto-rows)
    6. [grid-column](/ko/docs/Web/CSS/grid-column)
    7. [grid-column-end](/ko/docs/Web/CSS/grid-column-end)
    8. [grid-column-gap](/ko/docs/Web/CSS/grid-column-gap)
    9. [grid-column-start](/ko/docs/Web/CSS/grid-column-start)
    10. [grid-gap](/ko/docs/Web/CSS/grid-gap)
    11. [grid-row](/ko/docs/Web/CSS/grid-row)
    12. [grid-row-end](/ko/docs/Web/CSS/grid-row-end)
    13. [grid-row-gap](/ko/docs/Web/CSS/grid-row-gap)
    14. [grid-row-start](/ko/docs/Web/CSS/grid-row-start)
    15. [grid-template](/ko/docs/Web/CSS/grid-template)
    16. [grid-template-areas](/ko/docs/Web/CSS/grid-template-areas)
    17. [grid-template-columns](/ko/docs/Web/CSS/grid-template-columns)
    18. [grid-template-rows](/ko/docs/Web/CSS/grid-template-rows)

6. **용어집**

    1. [Grid](/ko/docs/Glossary/Grid)
    2. [Grid lines](/ko/docs/Glossary/Grid_lines)
    3. [Grid tracks](/ko/docs/Glossary/Grid_tracks)
    4. [Grid cell](/ko/docs/Glossary/Grid_cell)
    5. [Grid areas](/ko/docs/Glossary/Grid_areas)
    6. [Gutters](/ko/docs/Glossary/Gutters)
    7. [Grid Axis](/ko/docs/Glossary/Grid_Axis)
    8. [Grid row](/ko/docs/Glossary/Grid_rows)
    9. [Grid column](/ko/docs/Glossary/Grid_column)
