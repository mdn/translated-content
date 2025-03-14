---
title: CSS Fonts
slug: Web/CSS/CSS_fonts
---

{{CSSRef}}

**CSS Fonts**은 글꼴 관련 속성과 글꼴 리소스가 로드되는 방식을 정의하는 CSS 모듈입니다. 패밀리, 크기 및 굵기, 행의 높이, 한 문자에 여러 글자를 사용할 수 있을 때 사용하는 자형(glyph) 변형과 같은 글꼴 스타일을 정의할 수 있습니다.

## 기본 예제

다음 예제에서는 기본 글꼴 속성을 사용하여 텍스트 단락의 스타일을 지정하는 간단한 예제를 보여줍니다.

```css
p {
  width: 600px;
  margin: 0 auto;
  font-family: "Helvetica Neue", "Arial", sans-serif;
  font-style: italic;
  font-weight: 100;
  font-variant-ligatures: normal;
  font-size: 2rem;
  letter-spacing: 1px;
}
```

```html
<p>
  Three hundred years ago<br />
  I thought I might get some sleep<br />
  I stretched myself out on an antique bed<br />
  An' my spirit did a midnite creep
</p>
```

결과는 다음과 같습니다.

{{EmbedLiveSample('Basic_example', '100%', '200')}}

## 가변 글꼴 예제들

[v-fonts.com](https://v-fonts.com/) 와 [axis-praxis.org](https://www.axis-praxis.org/)에서 다양한 가변 글꼴 예제를 찾을 수 있습니다. 또한, 자세한 정보와 사용법은 [가변 글꼴 가이드](/ko/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide)를 참조하십시오.

## 참고서

### 속성

- {{cssxref("font")}}
- {{cssxref("font-family")}}
- {{cssxref("font-feature-settings")}}
- {{cssxref("font-kerning")}}
- {{cssxref("font-language-override")}}
- {{cssxref("font-optical-sizing")}}
- {{cssxref("font-size")}}
- {{cssxref("font-size-adjust")}}
- {{cssxref("font-stretch")}}
- {{cssxref("font-style")}}
- {{cssxref("font-synthesis")}}
- {{cssxref("font-variant")}}
- {{cssxref("font-variant-alternates")}}
- {{cssxref("font-variant-caps")}}
- {{cssxref("font-variant-east-asian")}}
- {{cssxref("font-variant-ligatures")}}
- {{cssxref("font-variant-numeric")}}
- {{cssxref("font-variant-position")}}
- {{cssxref("font-variation-settings")}}
- {{cssxref("font-weight")}}
- {{cssxref("line-height")}}

### @-규칙

- {{cssxref("@font-face")}}
- {{cssxref("@font-feature-values")}}

## 가이드

- [기본적인 텍스트 및 글꼴 스타일링](/ko/docs/Learn/CSS/Styling_text/Fundamentals)

  - 초보자를 위한 이 학습 기사에서는 텍스트/글꼴의 스타일링에 있어 기본적인 부분을 상세하게 설명하고 있습니다. 글꼴의 굵기, 패밀리, 스타일링의 설정, 글꼴의 일괄 지정, 텍스트의 배치 등의 효과, 행과 문자의 간격 설정 등을 포함합니다.

- [OpenType 글꼴 특성 가이드](/ko/docs/Web/CSS/CSS_Fonts/OpenType_fonts_guide)

  - 글꼴의 특성 혹은 변형은 OpenType 글꼴에 포함된 다양한 자형(glyphs)이나 문자 스타일을 나타냅니다. 이것에는 합자(ligatures)('fi'나 'ffl'와 같은 특수한 형태의 문자 조합), 커닝(kerning)(특정 글자꼴 쌍 사이의 간격 조정), 분수, 숫자의 스타일, 외에도 다양한 것이 포함됩니다.이러한 기능은 모두 OpenType 특성(OpenType Features)이라고 하며, 특정 속성과 낮은 수준의 제어 속성인 — {{cssxref("font-feature-settings")}}을 통하여 웹에서 사용할 수 있습니다. 이 기사에서는 CSS에서 OpenType 글꼴 특성을 사용하는 것에 있어 알아야 할 모든 것들을 소개합니다.

- [가변 글꼴 가이드](/ko/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide)
  - **가변 글꼴**은 모든 너비, 굵기, 스타일별로 각각의 글꼴 파일을 사용하는 대신 서체의 다양한 변형을 단일 파일로 통합하는 것이 가능해지도록 하는 OpenType 글꼴 사양의 진화입니다. 이 기사에서는 가변 글꼴을 사용하기 위해서 필요한 모든 것을 제공합니다.

## 명세서

{{Specifications}}
