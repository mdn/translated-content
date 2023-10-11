---
title: 그리드 (Grid)
slug: Glossary/Grid
l10n:
  sourceCommit: d267a8cb862c20277f81bbc223221b36b0c613e6
---

{{GlossarySidebar}}

'CSS 그리드(grid)'는 {{cssxref("display")}} 속성의 `grid` 값을 사용하여 정의됩니다. {{cssxref("grid-template-rows")}} 및 {{cssxref("grid-template-columns")}} 속성을 사용하여 그리드의 열과 행을 정의할 수 있습니다.

이러한 속성을 사용해 정의하는 그리드는 '명시적 그리드'라고 할 수 있습니다.

이 명시적 그리드 외부에 콘텐츠를 배치하거나 자동 배치에 의존하고 그리드 알고리즘이 {{glossary("grid item", "그리드 요소")}}들을 보관하기 위해 추가 행 또는 열 {{glossary("grid tracks", "트랙")}}을 생성해야 하는 경우, 그러면 암시적 그리드에 추가 트랙이 생성됩니다.'암시적 그리드'는 정의된 트랙 외부에 추가되는 콘텐츠로 인해 자동으로 생성되는 그리드입니다.

아래 예제에서는 3개의 열과 2개의 행으로 구성된 '명시적 그리드'를 만들었습니다. 그리드의 '세 번째' 행은 '암시적 그리드' 행 트랙으로, 명시적 트랙을 채우는 6개 항목보다 많기 때문에 형성됩니다.

## 예제

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
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
}
```

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
</div>
```

{{ EmbedLiveSample('Example', '500', '330') }}

## 같이 보기

- [그리드 레이아웃의 기본 개념](/ko/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- 속성 참고서

  - {{cssxref("grid-template-columns")}}
  - {{cssxref("grid-template-rows")}}
  - {{cssxref("grid")}}
  - {{cssxref("grid-template")}}
