---
title: CSSRule
slug: Web/API/CSSRule
l10n:
  sourceCommit: 7eff4df25ad857f65577930903797127ebabf991
---

{{APIRef("CSSOM")}}

**`CSSRule`** 인터페이스는 단일 CSS 규칙을 나타냅니다. 여러가지 유형을 가진 규칙이 `CSSRule` 로부터 상속된 속성입니다.

- {{DOMXRef("CSSGroupingRule")}}
- {{DOMXRef("CSSStyleRule")}}
- {{DOMXRef("CSSImportRule")}}
- {{DOMXRef("CSSMediaRule")}}
- {{DOMXRef("CSSFontFaceRule")}}
- {{DOMXRef("CSSPageRule")}}
- {{DOMXRef("CSSNamespaceRule")}}
- {{DOMXRef("CSSKeyframesRule")}}
- {{DOMXRef("CSSKeyframeRule")}}
- {{DOMXRef("CSSCounterStyleRule")}}
- {{DOMXRef("CSSSupportsRule")}}
- {{DOMXRef("CSSFontFeatureValuesRule")}}
- {{DOMXRef("CSSFontPaletteValuesRule")}}
- {{DOMXRef("CSSLayerBlockRule")}}
- {{DOMXRef("CSSLayerStatementRule")}}
- {{DOMXRef("CSSPropertyRule")}}

## 인스턴스 속성

`CSSRule` 인터페이스는 모든 규칙에 대해 공통적인 속성을 지정하는 반면에, 특정 규칙 유형의 고유한 속성은 해당 규칙 유형에 해당하는 더 전문화된 인터페이스에서 지정됩니다.

- {{domxref("CSSRule.cssText")}}
  - : 규칙의 텍스트 형식의 표현을 나타냅니다. 예를 들어, "`h1,h2 { font-size: 16pt }`" 또는 "`@import 'url'`" 형식입니다. 규칙의 일부에 접근하거나 일부를 변경하려면 (예제에서 "font-size" 의 값) [규칙 유형의 전문화된 인터페이스](#type_constants) 속성을 사용해야 합니다.
- {{domxref("CSSRule.parentRule")}} {{ReadOnlyInline}}
  - : 이 규칙을 포함하는 상위 규칙을 반환하고, 상위 규칙이 없는 경우 `null` 을 반환합니다. 예를 들어, 이 규칙이 {{cssxref("@media")}} 블록 내에 있는 스타일 규칙인 경우, 상위 규칙은 {{domxref("CSSMediaRule")}}입니다.
- {{domxref("CSSRule.parentStyleSheet")}} {{ReadOnlyInline}}
  - : 해당 규칙을 포함하는 스타일 시트의 {{domxref("CSSStyleSheet")}} 객체를 반환합니다.
- {{domxref("CSSRule.type")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Type 상수 중 하나를 반환하여 어떤 유형의 규칙이 표현되는지 결정합니다.

## 예제

`CSSRule` 에 대한 참조는 {{domxref("CSSStyleSheet")}}의 `cssRules` 항목들에 포함되어 있습니다.

```js
let myRules = document.styleSheets[0].cssRules; // CSSRuleList 를 반환합니다.
console.log(myRules);
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [동적 스타일링 정보 사용하기](/ko/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
