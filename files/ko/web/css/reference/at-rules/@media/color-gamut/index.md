---
title: color-gamut
slug: Web/CSS/Reference/At-rules/@media/color-gamut
original_slug: Web/CSS/@media/color-gamut
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

[CSS](/ko/docs/Web/CSS) [미디어 특성](/ko/docs/Web/CSS/@media#media_features)인 **`color-gamut`** 은 {{glossary("user agent", "사용자 에이전트")}} 와 출력 장치가 지원하는 대략적인 {{glossary("gamut", "색역")}} 범위를 기반으로 CSS 스타일을 적용하는 데에 사용됩니다.

## 구문

`color-gamut` 특성은 다음 {{glossary("color space", "색 공간")}} 의 키워드 값에 따라 정해집니다.

- `srgb`
  - : 사용자 에이전트와 출력 장치가 [sRGB](/ko/docs/Glossary/Color_space#srgb) 색역 이상을 지원할 수 있습니다. 대부분의 색상 디스플레이가 여기에 포함됩니다.
- `p3`
  - : 사용자 에이전트와 출력 장치가 [Display P3](https://www.color.org/chardata/rgb/DisplayP3.xalter) 색 공간에 지정된 색역 이상을 지원할 수 있습니다. P3 색역은 sRGB 색역보다 크며 이를 포함합니다.
- `rec2020`
  - : 사용자 에이전트와 출력 장치가 [ITU-R Recommendation BT.2020](https://en.wikipedia.org/wiki/Rec._2020) 색 공간에 지정된 색역 이상을 사용할 수 있습니다. REC. 2020 색역은 P3 색역보다 크며 이를 포함합니다.

## 예제

### HTML

```html
<p>테스트입니다.</p>
```

### CSS

```css
p {
  padding: 10px;
  border: solid;
}

@media (color-gamut: srgb) {
  p {
    background: #f4ae8a;
  }
}
```

### 결과

{{EmbedLiveSample("Examples")}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 색 공간을 지정하는 [`color()`](/ko/docs/Web/CSS/color_value/color) 함수
- [CSS colors](/ko/docs/Web/CSS/CSS_colors) 모듈
- 색역 표현을 지정하는 [`@media`](/ko/docs/Web/CSS/@media) at 규칙
- 미디어 쿼리 사용법 이해를 위한 [미디어 쿼리 사용하기](/ko/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [CSS media queries](/ko/docs/Web/CSS/CSS_media_queries) 모듈
- 위키피디아의 [sRGB](https://en.wikipedia.org/wiki/SRGB)
