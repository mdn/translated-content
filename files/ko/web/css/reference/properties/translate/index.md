---
title: translate
slug: Web/CSS/Reference/Properties/translate
original_slug: Web/CSS/translate
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

**`translate`** [CSS](/ko/docs/Web/CSS) 속성은 {{CSSxRef("transform")}} 속성과 별개로 독립적으로 변환을 지정할 수 있게 합니다. 이는 일반적인 사용자 인터페이스 사용에 더 적합하며, `transform` 값에 지정할 변환 함수의 정확한 순서를 기억할 필요가 없습니다.

{{InteractiveExample("CSS Demo: translate")}}

```css interactive-example-choice
translate: none;
```

```css interactive-example-choice
translate: 40px;
```

```css interactive-example-choice
translate: 50% -40%;
```

```css interactive-example-choice
translate: 20px 4rem;
```

```css interactive-example-choice
translate: 20px 4rem 150px;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <div class="face front">1</div>
    <div class="face back">2</div>
    <div class="face right">3</div>
    <div class="face left">4</div>
    <div class="face top">5</div>
    <div class="face bottom">6</div>
  </div>
</section>
```

```css interactive-example
#default-example {
  background: linear-gradient(skyblue, khaki);
  perspective: 800px;
  perspective-origin: 150% 150%;
}

#example-element {
  width: 100px;
  height: 100px;
  perspective: 550px;
  transform-style: preserve-3d;
}

.face {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: inherit;
  font-size: 60px;
  color: white;
}

.front {
  background: rgba(90, 90, 90, 0.7);
  transform: translateZ(50px);
}

.back {
  background: rgba(0, 210, 0, 0.7);
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgba(210, 0, 0, 0.7);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgba(0, 0, 210, 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgba(210, 210, 0, 0.7);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgba(210, 0, 210, 0.7);
  transform: rotateX(-90deg) translateZ(50px);
}
```

## 구문

```css
/* 키워드 값 */
translate: none;

/* 단일 값 */
translate: 100px;
translate: 50%;

/* 두 개의 값 */
translate: 100px 200px;
translate: 50% 105px;

/* 세 개의 값 */
translate: 50% 105px 5rem;

/* 전역 값 */
translate: inherit;
translate: initial;
translate: revert;
translate: revert-layer;
translate: unset;
```

### 값

- 단일 {{cssxref("&lt;length-percentage&gt;")}} 값
  - : X축 방향의 변환을 지정하는 {{cssxref("&lt;length&gt;")}} 또는 {{cssxref("&lt;percentage&gt;")}}. 단일 값이 지정된 `translate()` (2D 변환) 함수와 동일합니다.
- 두 개의 {{cssxref("&lt;length-percentage&gt;")}} 값
  - : 2D 변환의 X축 및 Y축 변환 값(각각)을 지정하는 두 개의 {{cssxref("&lt;length&gt;")}} 또는 {{cssxref("&lt;percentage&gt;")}}. 두 값이 지정된 `translate()` (2D 변환) 함수와 동일합니다.
- 세 개의 값
  - : 3D 변환의 X, Y, Z축 변환 값(각각)을 지정하는 두 개의 {{cssxref("&lt;length-percentage&gt;")}}와 하나의 {{cssxref("&lt;length&gt;")}} 값. `translate3d()` (3D 변환) 함수와 동일합니다.
- `none`
  - : 변환이 적용되지 않아야 함을 지정합니다.

## 형식 정의

{{CSSInfo}}

## 형식 구문

{{CSSSyntax}}

## 예제

### 호버 시 요소 이동하기

이 예제는 `translate` 속성을 사용하여 요소를 세 개의 축에서 이동하는 방법을 보여줍니다.
첫 번째 박스는 X축을 따라 이동하고 두 번째 박스는 X축과 Y축을 따라 이동합니다.
세 번째 박스는 X, Y, Z축을 따라 이동하며, 부모 요소에 {{cssxref('perspective')}}가 추가되어 관찰자를 향해 이동하는 것처럼 보입니다.

#### HTML

```html
<div class="wrapper">
  <div id="box1">translate X</div>
  <div id="box2">translate X,Y</div>
  <div id="box3">translate X,Y,Z</div>
</div>
```

#### CSS

```css
.wrapper {
  perspective: 100px;
  display: inline-flex;
  gap: 1em;
}
.wrapper > div {
  width: 7em;
  line-height: 7em;
  text-align: center;
  transition: 0.5s ease-in-out;
  border: 3px dotted;
}
#box1:hover {
  translate: 20px;
}

#box2:hover {
  translate: 20px 20px;
}

#box3:hover {
  translate: 5px 5px 30px;
}
```

#### 결과

{{EmbedLiveSample("Translating_an_element_on_hover", "100%", 175)}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{cssxref('scale')}}
- {{cssxref('rotate')}}
- {{cssxref('transform')}}

참고: skew는 독립적인 변환 값이 아닙니다
