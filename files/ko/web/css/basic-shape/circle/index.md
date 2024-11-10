---
title: circle()
slug: Web/CSS/basic-shape/circle
l10n:
  sourceCommit: 20315338453f387f8c1f6c20a07766f8f71e8032
---

{{CSSRef}}

**`circle()`** CSS [함수](/ko/docs/Web/CSS/CSS_Functions) 는 둥글기와 위치를 이용하여 원 도형을 정의합니다. {{cssxref("&lt;basic-shape&gt;")}} 데이터 타입 중 하나입니다.

{{EmbedInteractiveExample("pages/css/function-circle.html")}}

## 구문

```css
shape-outside: circle(50%);
clip-path: circle(6rem at 12rem 8rem);
```

### 값

- `<shape-radius>`

  - : {{cssxref("length")}} 나 {{cssxref("percentage")}} 혹은 `closest-side` 와 `farthest-side` 값도 가능합니다.

    - `closest-side`
      - : 도형의 중심에서 기준 박스의 가장 가까운 면까지의 길이를 사용합니다. 원 도형의 경우에는, 모든 차원에서 가장 가까운 면을 사용합니다.
    - `farthest-side`
      - : 도형의 중심에서 기준 박스의 가장 먼 면까지의 길이를 사용합니다. 원 도형의 경우에는, 모든 차원에서 가장 멀리 떨어져 있는 면을 사용합니다.

- `<position>`
  - : 원 도형의 중심을 이동합니다. {{cssxref("length")}}, {{cssxref("percentage")}} 혹은 `left` 와 같은 형태의 값도 사용할 수 있습니다. `<position>` 값이 생략되는 경우 기본값은 중심입니다.

## 형식 구문

{{csssyntax}}

## 예제

### 기본 원 도형

아래 예제에서는 {{cssxref("shape-outside")}} 속성은 주변으로 흐르는 텍스트 위에 띄워진 형태로 `circle(50%)` 값을 가진 원 도형을 정의합니다.

{{EmbedGHLiveSample("css-examples/shapes/overview/circle.html", '100%', 720)}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 이 데이터 타입을 사용하는 속성들: {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [기본 도형 가이드](/ko/docs/Web/CSS/CSS_shapes/Basic_shapes)
