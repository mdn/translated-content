---
title: scale
slug: Web/CSS/scale
l10n:
  sourceCommit: 024449e686746a0d036edeb2323bfe21adfa2155
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`scale`** 속성은 {{CSSxRef("transform")}} 속성과는 독립적으로 개별적인 크기 변형을 지정할 수 있게 합니다. 이는 일반적인 사용자 인터페이스 사용에 더 알맞고, `transform` 값을 사용할 때처럼 정확한 순서를 기억해야 할 필요가 없습니다.

{{EmbedInteractiveExample("pages/css/scale.html")}}

## 구문

```css
/* 키워드 값 */
scale: none;

/* 단일 값 */
/* 값이 1 혹은 100% 보다 크면 요소가 확대됩니다. */
scale: 2;
/* 값이 1 혹은 100% 보다 작으면 요소가 수축됩니다. */
scale: 50%;

/* 두 개의 값 */
scale: 2 0.5;

/* 세 개의 값 */
scale: 200% 50% 200%;

/* 전역 값 */
scale: inherit;
scale: initial;
scale: revert;
scale: revert-layer;
scale: unset;
```

### 값

- 단일 값
  - : X축과 Y축 모두에서 동일한 비율의 영향을 받는 요소의 크기 비율을 지정하기 위해 {{cssxref("&lt;number&gt;")}} 혹은 {{cssxref("&lt;percentage&gt;")}} 값을 사용합니다. `scale()` (2D 크기 조정)이 단일 값으로 설정되었을 때와 동일한 동작입니다.
- 두 개의 값
  - : 2D 크기 조정의 X축과 Y축 값을 각각 지정하는 두 개의 {{cssxref("&lt;number&gt;")}} 혹은 {{cssxref("&lt;percentage&gt;")}} 값입니다. `scale()` (2D 크기 조정)이 두 개의 값으로 설정되었을 때와 동일한 동작입니다.
- 세 개의 값
  - : 3D 크기 조정의 X축, Y축, Z축 값을 각각 지정하는 세 개의 {{cssxref("&lt;number&gt;")}} 혹은 {{cssxref("&lt;percentage&gt;")}} 값입니다. `scale3d()` (3D 크기 조정) 함수와 동일한 동작입니다.
- `none`
  - : 어떠한 크기 조정도 지정하지 않습니다.

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 호버 시 요소의 크기 조정하기

아래 예제는 호버 시 요소의 크기를 어떻게 지정하는지를 나타냅니다.
두 개의 박스가 있으며 하나는 단일 `scale` 값을 사용하여 양축으로 크기가 지정됩니다.
두 번째 박스는 두 개의 `scale` 값을 사용하여 X축과 Y축을 독립적으로 조정합니다.

#### HTML

```html
<div class="box" id="box1">단일 값</div>
<div class="box" id="box2">두 개의 값</div>
```

#### CSS

```css
.box {
  float: left;
  margin: 1em;
  width: 7em;
  line-height: 7em;
  text-align: center;
  transition: 0.5s ease-in-out;
  border: 3px dotted;
}

#box1:hover {
  scale: 1.25;
}

#box2:hover {
  scale: 1.25 0.75;
}
```

#### 결과

{{EmbedLiveSample("Scaling_an_element_on_hover", "100%", 150)}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{cssxref('translate')}}
- {{cssxref('rotate')}}
- {{cssxref('transform')}}

Note: skew는 독립적인 변형 값이 아닙니다.
