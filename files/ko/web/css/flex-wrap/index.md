---
title: flex-wrap
slug: Web/CSS/flex-wrap
---

{{ CSSRef}}

[CSS](/ko/docs/CSS) **`flex-wrap`** property는 `flex-item` 요소들이 강제로 한줄에 배치되게 할 것인지, 또는 가능한 영역 내에서 벗어나지 않고 여러행으로 나누어 표현 할 것인지 결정하는 속성입니다. 만약 영역 내에서 벗어나지 못하게 설정한다면, 동시에 요소의 방향 축을 결정할 수 있습니다.

{{EmbedInteractiveExample("pages/css/flex-wrap.html")}}

여기를 참고하면 관련된 더욱 자세한 정보를 얻을 수 있습니다. [Using CSS flexible boxes](/en/CSS/Using_CSS_flexible_boxes)

## Syntax

```css
flex-wrap: nowrap; /* Default value */
flex-wrap: wrap;
flex-wrap: wrap-reverse;

/* Global values */
flex-wrap: inherit;
flex-wrap: initial;
flex-wrap: unset;
```

`flex-wrap` 속성의 값으로, 다음 목록 중 하나의 키워드를 선택할 수 있습니다.

### Values

아래는 사용 가능한 속성값들입니다:

- `nowrap`
  - : 기본 설정값으로, `flex-container` 부모요소 영역을 벗어나더라도 `flex-item` 요소들을 **한 줄**에 배치합니다. 시작점은 {{cssxref("flex-direction")}} 에 의해 결정된 방향으로 적용됩니다.
- `wrap`
  - : `flex-item` 요소들이 내부 로직에 의해 분할되어 여러 행에 걸쳐서 배치됩니다. `nowrap` 속성과 마찬가지로 요소가 배치되는 시작점은 {{cssxref("flex-direction")}} 에 의해 결정됩니다. 일반적으로 위에서 아래로 쌓이는 순서입니다.
- `wrap-reverse`
  - : `wrap` 속성값과 동일하지만, 요소가 나열되는 시작점과 끝점의 기준이 반대로 배치됩니다.

### Formal syntax

{{csssyntax}}

## Examples

### HTML

```html
<h4>This is an example for flex-wrap:wrap</h4>
<div class="content">
  <div class="red">1</div>
  <div class="green">2</div>
  <div class="blue">3</div>
</div>
<h4>This is an example for flex-wrap:nowrap</h4>
<div class="content1">
  <div class="red">1</div>
  <div class="green">2</div>
  <div class="blue">3</div>
</div>
<h4>This is an example for flex-wrap:wrap-reverse</h4>
<div class="content2">
  <div class="red">1</div>
  <div class="green">2</div>
  <div class="blue">3</div>
</div>
```

### CSS

```css
/* Common Styles */
.content,
.content1,
.content2 {
  color: #fff;
  font: 100 24px/100px sans-serif;
  height: 150px;
  text-align: center;
}

.content div,
.content1 div,
.content2 div {
  height: 50%;
  width: 50%;
}
.red {
  background: orangered;
}
.green {
  background: yellowgreen;
}
.blue {
  background: steelblue;
}

/* Flexbox Styles */
.content {
  display: flex;
  flex-wrap: wrap;
}
.content1 {
  display: flex;
  flex-wrap: nowrap;
}
.content2 {
  display: flex;
  flex-wrap: wrap-reverse;
}
```

### Results

{{ EmbedLiveSample('Examples', '700px', '700px', '', 'Web/CSS/flex-wrap') }}

## 명세서

{{Specifications}}

{{cssinfo}}

## 브라우저 호환성

{{Compat}}

## See also

- CSS Flexbox Guide: _[Basic Concepts of Flexbox](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS Flexbox Guide: _[Mastering wrapping of flex items](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items)_
