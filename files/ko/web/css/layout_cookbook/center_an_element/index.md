---
title: 요소의 중앙 정렬
slug: Web/CSS/Layout_cookbook/Center_an_element
l10n:
  sourceCommit: 70f49e78d0f6830748fcaa490d98b4ae3e2da161
---

{{CSSRef}}

이 조리법에서는 [flex 박스](#using_flexbox)와 [그리드](#using_grid)를 사용해서 박스를 다른 박스 내부에 중앙 정렬하는 방법을 배울 수 있습니다. 수평과 수직으로 중앙 정렬하는 것은 간단하고 직관적입니다.

![an element centered inside a larger box](cookbook-center.png)

## 요구 사항

박스 내부의 아이템을 수평과 수직 방향으로 중앙 정렬합니다.

## 조리법

{{EmbedGHLiveSample("css-examples/css-cookbook/center.html", '100%', 720)}}

> [!CALLOUT]
>
> [Download this example](https://github.com/mdn/css-examples/blob/main/css-cookbook/center--download.html)

## 플렉스박스 사용하기

박스를 다른 박스 내부에서 중앙 정렬하기 위해서는 먼저 감싸고 있는 박스에 {{cssxref("display")}} 속성을 `flex`로 지정해서 [flex 컨테이너](/ko/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox#the_flex_container) 로 바꿔줍니다. 그 다음에 {{cssxref("align-items")}}를 `center`로 지정하여 수직 방향의 중앙 정렬(블록 축)을 하고, {{cssxref("justify-content")}}를 `center`로 설정하여 수평 방향의 중앙 정렬(인라인 축)을 합니다. 그러면 박스를 다른 박스 내부에서 중앙 정렬하는 데 필요한 모든 작업이 완료됩니다!

### HTML

```html
<div class="container">
  <div class="item">I am centered!</div>
</div>
```

### CSS

```css
div {
  border: solid 3px;
  padding: 1em;
  max-width: 75%;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8em;
}
```

컨테이너의 높이를 지정하면 컨테이너 내부의 아이템이 실제로 수직 방향으로 중앙 정렬된 것을 확인할 수 있습니다.

### 결과

{{ EmbedLiveSample('Using_flexbox', 400, 200) }}

컨테이너에 `align-items: center;`를 적용하는 대신, 내부 아이템에 {{cssxref("align-self")}}를 `center`로 지정해서 내부 아이템 자체를 수직으로 중앙 정렬할 수 있습니다.

## 그리드 사용

박스를 다른 박스 내부에서 중앙 정렬하는 또 다른 방법은 감싸고 있는 박스를 [그리드 컨테이너](/ko/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#grid_container)로 만들고 {{cssxref("place-items")}} 속성을 `center`로 지정해서 내부의 아이템들을 블록과 인라인 축에서 중앙 정렬 하는 것입니다.

### HTML

```html
<div class="container">
  <div class="item">I am centered!</div>
</div>
```

### CSS

```css
div {
  border: solid 3px;
  padding: 1em;
  max-width: 75%;
}
.container {
  display: grid;
  place-items: center;
  height: 8em;
}
```

### 결과

{{ EmbedLiveSample('Using_grid', 400, 200) }}

컨테이너에 `place-items: center;`를 적용하는 대신, 컨테이너에 {{cssxref("place-content", "place-content: center;")}}를 지정하거나 내부 아이템 자체에 {{cssxref("place-self", "place-self: center")}} 또는 {{cssxref("margin", "margin: auto;")}}를 지정하여 동일하게 중앙 정렬을 할 수 있습니다.

## MDN 관련 문서

- [Box alignment in flexbox](/ko/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [CSS box alignment guide](/ko/docs/Web/CSS/CSS_box_alignment)
