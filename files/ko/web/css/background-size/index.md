---
title: background-size
slug: Web/CSS/background-size
---
{{CSSRef}}[CSS](/ko/docs/CSS) **`background-size`** 속성은 요소 배경 이미지의 크기를 설정합니다. 그대로 두거나, 늘리고 줄이거나, 공간에 맞출 수 있습니다.{{EmbedInteractiveExample("pages/css/background-size.html")}}

배경 이미지로 덮이지 않은 공간은 {{cssxref("background-color")}} 속성으로 채워지고, 배경 이미지에서 투명하거나 반투명한 부분을 통해서도 배경색이 보입니다.

## 구문

```css
/* 키워드 값 */
background-size: cover;
background-size: contain;

/* 단일 값 구문 */
/* 이미지 너비 (높이는 'auto'가 됨) */
background-size: 50%;
background-size: 3.2em;
background-size: 12px;
background-size: auto;

/* 두 개 값 구문 */
/* 첫 번째 값: 이미지 너비, 두 번째 값: 이미지 높이 */
background-size: 50% auto;
background-size: 3em 25%;
background-size: auto 6px;
background-size: auto auto;

/* 다중 배경 */
background-size: auto, auto; /* `auto auto`와 혼동하지 말 것 */
background-size: 50%, 25%, 25%;
background-size: 6px, auto, contain;

/* 전역 값 */
background-size: inherit;
background-size: initial;
background-size: unset;
```

`background-size` 속성은 다음 방법 중 하나로 지정할 수 있습니다.

- [`contain`](#contain) 또는 [`cover`](#cover) 키워드 값 사용.
- 너비 값만 사용. 높이는 자동으로 [`auto`](#auto)가 됩니다.
- 너비와 높이 값을 모두 사용. 첫 번째 값은 너비로, 두 번째 값은 높이를 설정합니다. 각 값은 {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, [`auto`](#auto)를 사용할 수 있습니다.

여러 배경 이미지의 사이즈를 지정하려면 각각의 값을 쉼표로 구분하세요.

### 값

- `contain`
  - : 이미지가 잘리거나 찌그러지지 않는 한도 내에서 제일 크게 설정.
- `cover`
  - : 이미지가 찌그러지지 않는 한도 내에서 제일 크게 설정. 이미지의 가로세로비가 요소와 다르다면 이미지를 세로 또는 가로방향으로 잘라내어 빈 공간이 생기지 않도록 설정합니다.
- `auto`
  - : 배경 이미지의 원본 크기를 유지.
- {{cssxref("&lt;length&gt;")}}
  - : 원본 크기의 너비/높이를 주어진 값으로 늘리거나 줄임. 음수는 유효하지 않습니다.
- {{cssxref("&lt;percentage&gt;")}}
  - : Stretches the image in the corresponding dimension to the specified percentage of the _background positioning area_. The background positioning area is determined by the value of {{cssxref("background-origin")}} (by default, the padding box). However, if the background's {{cssxref("background-attachment")}} value is `fixed`, the positioning area is instead the entire {{glossary("viewport")}}. Negative values are not allowed.

### 원본 크기와 비율

The computation of values depends on the image's intrinsic dimensions (width and height) and intrinsic proportions (width-to-height ratio). These attributes are as follows:

- A bitmap image (such as JPG) always has intrinsic dimensions and proportions.
- A vector image (such as SVG) does not necessarily have intrinsic dimensions. If it has both horizontal and vertical intrinsic dimensions, it also has intrinsic proportions. If it has no dimensions or only one dimension, it may or may not have proportions.
- CSS {{cssxref("&lt;gradient&gt;")}}s have no intrinsic dimensions or intrinsic proportions.
- Background images created with the {{cssxref("element()")}} function use the intrinsic dimensions and proportions of the generating element.

> **참고:** The behavior of `<gradient>`s changed in Gecko 8.0. Before this, they were treated as images with no intrinsic dimensions, but with intrinsic proportions identical to that of the background positioning area.

> **참고:** In Gecko, background images created using the {{cssxref("element()")}} function are currently treated as images with the dimensions of the element, or of the background positioning area if the element is SVG, with the corresponding intrinsic proportion. This is non-standard behavior.

Based on the intrinsic dimensions and proportions, the rendered size of the background image is computed as follows:

- **If both components of `background-size` are specified and are not `auto`:** The background image is rendered at the specified size.
- **If the `background-size` is `contain` or `cover`:** While preserving its intrinsic proportions, the image is rendered at the largest size contained within, or covering, the background positioning area.
  If the image has no intrinsic proportions, then it's rendered at the size of the background positioning area.
- **If the `background-size` is `auto` or `auto auto`:**

  - If the image has both horizontal and vertical intrinsic dimensions, it's rendered at that size.
  - If the image has no intrinsic dimensions and has no intrinsic proportions, it's rendered at the size of the background positioning area.
  - If the image has no intrinsic dimensions but has intrinsic proportions, it's rendered as if `contain` had been specified instead.
  - If the image has only one intrinsic dimension and has intrinsic proportions, it's rendered at the size corresponding to that one dimension.
    The other dimension is computed using the specified dimension and the intrinsic proportions.
  - If the image has only one intrinsic dimension but has no intrinsic proportions, it's rendered using the specified dimension and the other dimension of the background positioning area.

> **참고:** Background sizing for vector images that lack intrinsic dimensions or proportions is not yet fully implemented in all browsers. Be careful about relying on the behavior described above, and test in multiple browsers to be sure the results are acceptable.

### 형식 구문

{{csssyntax}}

## 예제

Please see [Scaling background images](/ko/docs/Web/CSS/CSS_Backgrounds_and_Borders/Scaling_background_images) for examples.

## 참고

If you use a `<gradient>` as the background and specify a `background-size` to go with it, it's best not to specify a size that uses a single `auto` component, or is specified using only a width value (for example, `background-size: 50%`). Rendering of `<gradient>`s in such cases changed in Firefox 8, and at present is generally inconsistent across browsers, which do not all implement rendering in full accordance with [the CSS3 `background-size` specification](http://www.w3.org/TR/css3-background/#the-background-size) and with [the CSS3 Image Values gradient specification](http://dev.w3.org/csswg/css3-images/#gradients).

```css
.gradient-example {
  width: 50px;
  height: 100px;
  background-image: linear-gradient(blue, red);

  /* Not safe to use */
  background-size: 25px;
  background-size: 50%;
  background-size: auto 50px;
  background-size: auto 50%;

  /* Safe to use */
  background-size: 25px 50px;
  background-size: 50% 50%;
}
```

Note that it's particularly not recommended to use a pixel dimension and an `auto` dimension with a `<gradient>`, because it's impossible to replicate rendering in versions of Firefox prior to 8, and in browsers not implementing Firefox 8's rendering, without knowing the exact size of the element whose background is being specified.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Scaling background images](/ko/docs/CSS/Scaling_background_images)
- [Scaling of SVG backgrounds](/ko/docs/Web/CSS/Scaling_of_SVG_backgrounds)
- {{cssxref("object-fit")}}
