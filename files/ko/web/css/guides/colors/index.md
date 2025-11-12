---
title: CSS colors
slug: Web/CSS/Guides/Colors
original_slug: Web/CSS/CSS_colors
l10n:
  sourceCommit: 5f13cbe7517ce96deeb521d4c8e6923266a22913
---

**CSS 색상**은 색상, 색상 유형, 색상 혼합, 투명도 그리고 이러한 색상과 효과를 HTML에 적용하는 방법을 다루는 CSS 모듈입니다.

이 모듈은 {{cssxref("color")}} 와 {{cssxref("opacity")}} 단 두 개의 속성만을 가지고 있지만, 20개가 넘는 CSS 와 SVG 속성들, CSS 이미지, @규칙 그리고 @미디어 규칙들이 이 두 속성에 의존합니다.

### Colors 작용

아래의 색상 구문 변환기는 현재 선택된 색상의 값을 [빨강-초록-파랑](/ko/docs/Web/CSS/color_value/rgb) (RGB), [16진수](/ko/docs/Web/CSS/hex-color) (HEX), [색상, 채도, 명도](/ko/docs/Web/CSS/color_value/hsl) (HSL), 그리고 [색상, 백색, 검은색](/ko/docs/Web/CSS/color_value/hwb) (HWB) CSS 색상 형식으로 표시합니다. 이 모든 RGB, HEX, HSL 그리고 HWB 색상 값들은 다르게 표기되었으나, 동일한 색상 값을 나타냅니다.

{{EmbedGHLiveSample("css-examples/modules/colors.html", '100%', 450)}}

[색상 선택기](/ko/docs/Web/HTML/Element/input/color) 로 색상을 선택하고 [슬라이더](/ko/docs/Web/HTML/Element/input/range) 로 투명도를 선택하면 RGB, HEX, HSL 및 HWB 값들이 업데이트됩니다. 새로운 색상이나 투명도 값을 선택하면, 배경의 색상과 슬라이더의 색상이 각각 {{cssxref("background-color")}} 과 {{cssxref("accent-color")}} CSS 속성을 통해 업데이트됩니다.

이 색상 구문 변환기의 코드를 보려면, [GitHub 에서 소스 보기](https://github.com/mdn/css-examples/blob/main/modules/colors.html) 를 클릭하세요.

## 참고서

### 속성

- {{cssxref("color")}}
- {{cssxref("opacity")}}

### @규칙과 설명자

- {{cssxref("@color-profile")}}
  - [`components`](/ko/docs/Web/CSS/@color-profile#descriptors) descriptor
  - [`rendering-intent`](/ko/docs/Web/CSS/@color-profile#descriptors) descriptor
  - [`src`](/ko/docs/Web/CSS/@color-profile#descriptors) descriptor

### 함수

- 절대 색상 함수:
  - [`rgb()`](/ko/docs/Web/CSS/color_value/rgb) 별칭 `rgba()`
  - [`hsl()`](/ko/docs/Web/CSS/color_value/hsl) 별칭 `hsla()`
  - [`hwb()`](/ko/docs/Web/CSS/color_value/hwb)
  - [`lab()`](/ko/docs/Web/CSS/color_value/lab)
  - [`lch()`](/ko/docs/Web/CSS/color_value/lch)
  - [`oklab()`](/ko/docs/Web/CSS/color_value/oklab)
  - [`oklch()`](/ko/docs/Web/CSS/color_value/oklch)
  - [`color()`](/ko/docs/Web/CSS/color_value/color)
- [`color-contrast()`](/ko/docs/Web/CSS/color_value) {{Experimental_Inline}}
- [`color-mix()`](/ko/docs/Web/CSS/color_value/color-mix)

### 자료형

- {{cssxref("&lt;color&gt;")}}
- [`<color-function>`](#functions)
- {{cssxref("hex-color")}}
- {{cssxref("named-color")}}
- {{cssxref("alpha-value")}}
- {{cssxref("hue")}}
- {{cssxref("system-color")}}
- [`<colorspace-params>`](/ko/docs/Web/CSS/color_value/color#using_predefined_colorspaces_with_color)

### 용어 사전과 키워드

- {{glossary("color space")}}
- [`currentcolor`](/ko/docs/Web/CSS/color_value#currentcolor_keyword)
- [`transparent`](/ko/docs/Web/CSS/named-color#transparent)

### 인터페이스

- `CSSColorProfileRule` {{Experimental_Inline}}

## 안내서

- [CSS를 사용하여 HTML 요소에 색상 적용하기](/ko/docs/Web/CSS/CSS_colors/Applying_color)
  - : CSS를 사용하여 `<color>`를 값으로 허용하는 모든 CSS 속성을 포함하여 다양한 유형의 콘텐츠에 색상을 적용하는 방법에 대한 안내서입니다.
- [CSS 색상 값](/ko/docs/Web/CSS/CSS_colors/Color_values)
  - : CSS에서 사용할 수 있는 색상 공간 및 다양한 `<color>` 기능 표기법에 대한 개요입니다.
- [색상을 현명하게 사용하기](/ko/docs/Web/CSS/CSS_colors/Using_color_wisely)
  - : 색상 이론 및 자료, 접근 가능한 색상 팔레트, 대비 및 색상 인쇄에 적합한 색상을 찾는 방법을 포함합니다.
- [상대적인 색상 사용](/ko/docs/Web/CSS/CSS_colors/Relative_colors)
  - : 이 문서는 상대적인 CSS 색상 구문을 설명하며, 각 옵션의 차이를 보여주고, 몇 가지 예시를 살펴봅니다.
- [색상과 휘도 이해하기](/ko/docs/Web/Accessibility/Understanding_Colors_and_Luminance)
  - : 색상 인식 및 불감증 (색맹) 사용자, 시력 저하 및 전정 또는 기타 신경학적 장애를 가진 사용자를 위해 색상을 인지하고 사용하는 것에 대한 문서입니다.
- [WCAG 1.4.1: 색상 대비](/ko/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)
  - : 가독성을 보장하기 위한 배경과 전경 컨텐츠 간의 대비 요구 사항에 대한 설명입니다.

## 관련 개념

- 다른 명세서의 일부인 CSS 속성들:
  - {{cssxref("accent-color")}}
  - {{cssxref("background-color")}}
  - {{cssxref("background-image")}}
  - {{cssxref("border-color")}}
  - {{cssxref("box-shadow")}}
  - {{cssxref("caret-color")}}
  - {{cssxref("color")}}
  - {{cssxref("color-scheme")}}
  - {{cssxref("column-rule-color")}}
  - {{cssxref("outline-color")}}
  - {{cssxref("scrollbar-color")}}
  - {{cssxref("text-decoration-color")}}
  - {{cssxref("text-emphasis-color")}}
  - {{cssxref("text-shadow")}}
  - {{cssxref("-webkit-tap-highlight-color")}}
- 다른 명세서의 일부인 SVG 색상 속성들:
  - [`fill`](/ko/docs/Web/SVG/Attribute/fill)
  - [`flood-color`](/ko/docs/Web/SVG/Attribute/flood-color)
  - [`lighting-color`](/ko/docs/Web/SVG/Attribute/lighting-color)
  - [`stop-color`](/ko/docs/Web/SVG/Attribute/stop-color)
  - [`stroke`](/ko/docs/Web/SVG/Attribute/stroke)
- SVG [`color`](/ko/docs/Web/SVG/Attribute/color) 속성
- {{glossary("Color wheel")}} 용어 사전
- {{glossary("Interpolation")}} 용어 사전
- [`@font-palette-values`](/ko/docs/Web/CSS/@font-palette-values) @규칙 [`override-colors`](/ko/docs/Web/CSS/@font-palette-values/override-colors) 설명자
- [`@color-profile`](/ko/docs/Web/CSS/@color-profile) @규칙
- [`color-gamut`](/ko/docs/Web/CSS/@media/color-gamut) @미디어 규칙
- [`forced-colors`](/ko/docs/Web/CSS/@media/forced-colors) @미디어 규칙

## 명세서

{{Specifications}}

## 같이 보기

- [CSS 색상 조정](/ko/docs/Web/CSS/CSS_color_adjustment) 모듈과 {{cssxref("print-color-adjust")}} 속성.
- [CSS 이미지](/ko/docs/Web/CSS/CSS_images), CSS [`<gradient>`](/ko/docs/Web/CSS/gradient) 이미지가 정의되어 있는 곳의 모듈
- [`VideoColorSpace`](/ko/docs/Web/API/VideoColorSpace) 인터페이스
- SVG [`<feColorMatrix>`](/ko/docs/Web/SVG/Element/feColorMatrix) 요소
- [Canvas API: 스타일과 색상 적용](/ko/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#colors)
- [색상 선택 도구](/ko/docs/Web/CSS/CSS_colors/Color_format_converter): 이 도구는 사용자 정의 색상을 만들고, 조정하고 실험하는 것을 쉽게 만들어줍니다.
