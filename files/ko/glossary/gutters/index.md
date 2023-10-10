---
title: 거터 (Gutters)
slug: Glossary/Gutters
l10n:
  sourceCommit: d267a8cb862c20277f81bbc223221b36b0c613e6
---

{{GlossarySidebar}}

**거터(Gutters)** 또는 앨리(_alleys_)는 콘텐츠 트랙 사이의 간격입니다. 거터는 {{cssxref("column-gap")}}, {{cssxref("row-gap")}}, 또는 {{cssxref("gap")}} 속성을 사용하여 [CSS 그리드 레이아웃](/ko/docs/Web/CSS/CSS_grid_layout)에서 생성할 수 있습니다.

## 예제

아래 예에는 행과 행, 열과 열 사이의 간격이 20px인 3개의 열과 2개의 행 트랙 그리드가 있습니다.

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
  background-color: #fff8f8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1.2fr);
  grid-auto-rows: 45%;
  column-gap: 20px;
  row-gap: 20px;
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

{{EmbedLiveSample('Example', '300', '280')}}

그리드 크기 측면에서, 간격은 일반 그리드 트랙인 것처럼 작동하지만 간격에 아무것도 배치할 수 없습니다. 간격은 해당 위치의 그리드 선이 추가 크기를 가지게 된 것처럼, 작동하므로 해당 선 뒤에 배치된 모든 그리드 항목은 간격 끝에서 시작됩니다.

`row-gap` 및 `column-gap` 속성은 트랙 공간을 확보할 수 있는 유일한 요소는 아닙니다. 여백, 패딩 또는 [상자 정렬](/ko/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)의 공간 정렬 속성 사용은 모두 눈에 보이는 간격에 간섭할 수 있습니다. 따라서 우리의 디자인이 이러한 방법 중 하나를 사용하여 추가 공간을 도입하지 않았다는 것을 알고 있지 않는 한, `row-gap` 및 `column-gap` 속성은 "거터 크기"와 동일하게 고려되어서는 안 됩니다.

## 같이 보기

### 속성 참고서

- {{cssxref("column-gap")}}
- {{cssxref("row-gap")}}
- {{cssxref("gap")}}

### 더 읽어보기

- CSS 그리드 레이아웃 안내서: [그리드 레이아웃의 기본 개념](/ko/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [CSS 그리드 레이아웃 명세서의 거터 정의](https://drafts.csswg.org/css-grid/#gutters)
