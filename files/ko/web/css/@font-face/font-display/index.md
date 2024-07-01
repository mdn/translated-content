---
title: font-display
slug: Web/CSS/@font-face/font-display
---

{{CSSRef}}

**`font-display`** 설명자(descriptor)는 font face가 표시되는 방법을 결정합니다. 이는 다운로드 여부와 사용 시기에 따라 다릅니다.

## The font display timeline

font display 시각표는 유저 에이전트가 지정된 다운로드 폰트를 사용하려는 순간 시작하는 타이머를 기반으로 합니다. 시각표는 아래의 세 가지 기간(period)으로 나뉘어져 font face를 사용하는 모든 요소(element)의 렌더링 동작을 나타냅니다.

- 폰트 차단 기간
  - : font face가 로드되지 않은 경우 font face를 사용하려는 요소는 _보이지 않는_ 대체 폰트를 렌더링 합니다. 이 기간 동안 font face가 성공적으로 로드되면 요청된 폰트로 다시 렌더링 됩니다.
- 폰트 교체 기간
  - : font face가 로드되지 않은 경우 font face를 사용하려는 요소는 (텍스트가 표시되는)대체 폰트를 렌더링 합니다. 이 기간 동안 font face가 성공적으로 로드되면 요청된 폰트로 다시 렌더링 됩니다.
- 폰트 실패 기간
  - : font face가 로드되지 않은 경우 유저 에이전트는 로드 실패로 취급하고 정상적인 대체 폰트를 렌더링 합니다.

{{cssinfo}}

## Syntax

```css
/* Keyword values */
font-display: auto;
font-display: block;
font-display: swap;
font-display: fallback;
font-display: optional;
```

### Values

- `auto`
  - : font display 전략은 유저 에이전트에 의해 정의됩니다.
- `block`
  - : font face에 짧은 차단 기간과 무한대의 교체 기간을 부여합니다.
- `swap`
  - : font face에 매우 작은 차단 기간과 무한대의 교체 기간을 부여합니다.
- `fallback`
  - : font face에 매우 작은 차단 기간과 짧은 교체 기간을 부여합니다.
- `optional`
  - : font face에 매우 작은 차단 기간과 교체 기간을 부여합니다.

### Formal syntax

{{csssyntax}}

## Examples

```css
@font-face {
  font-family: ExampleFont;
  src:
    url(/path/to/fonts/examplefont.woff) format("woff"),
    url(/path/to/fonts/examplefont.eot) format("eot");
  font-weight: 400;
  font-style: normal;
  font-display: fallback;
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("@font-face/font-variant", "font-variant")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
