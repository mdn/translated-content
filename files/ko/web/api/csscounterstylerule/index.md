---
title: CSSCounterStyleRule
slug: Web/API/CSSCounterStyleRule
l10n:
  sourceCommit: f75fd658f627b5730a14ada901120cfa4ee01bda
---

{{APIRef("CSS Counter Styles")}}

**`CSSCounterStyleRule`** 인터페이스는 {{CSSxRef("@counter-style")}} [at-rule](/ko/docs/Web/CSS/At-rule) 를 나타냅니다.

{{InheritanceDiagram}}

## 인스턴스 속성

_이 인터페이스는 부모 {{DOMxRef("CSSRule")}} 로부터 상속받은 속성들입니다._

- {{DOMxRef("CSSCounterStyleRule.name")}}
  - : 연관성 있는 규칙의 `name` 으로 정의된 {{CSSxRef("&lt;custom-ident&gt;")}} 의 직렬화가 포함된 문자열 객체입니다.
- {{DOMxRef("CSSCounterStyleRule.system")}}
  - : 연관성 있는 규칙에 의해 정의된 {{CSSxRef("@counter-style/system", "system")}} 설명자의 직렬화가 포함된 문자열 객체입니다. 만일 설명자가 연관된 규칙에 특정되지 않았다면, 이 속성은 빈 문자열을 반환합니다.
- {{DOMxRef("CSSCounterStyleRule.symbols")}}
  - : 연관성 있는 규칙에 의해 정의된 {{CSSxRef("@counter-style/symbols", "symbols")}} 설명자의 직렬화가 포함된 문자열 객체입니다. 만일 설명자가 연관된 규칙에 특정되지 않았다면, 이 속성은 빈 문자열을 반환합니다.
- {{DOMxRef("CSSCounterStyleRule.additiveSymbols")}}
  - : 연관성 있는 규칙에 의해 정의된 {{CSSxRef("@counter-style/additive-symbols", "additive-symbols")}} 설명자의 직렬화가 포함된 문자열 객체입니다. 만일 설명자가 연관된 규칙에 특정되지 않았다면, 이 속성은 빈 문자열을 반환합니다.
- {{DOMxRef("CSSCounterStyleRule.negative")}}
  - : 연관성 있는 규칙에 의해 정의된 {{CSSxRef("@counter-style/negative", "negative")}} 설명자의 직렬화가 포함된 문자열 객체입니다. 만일 설명자가 연관된 규칙에 특정되지 않았다면, 이 속성은 빈 문자열을 반환합니다.
- {{DOMxRef("CSSCounterStyleRule.prefix")}}
  - : 연관성 있는 규칙에 의해 정의된 {{CSSxRef("@counter-style/prefix", "prefix")}} 설명자의 직렬화가 포함된 문자열 객체입니다. 만일 설명자가 연관된 규칙에 특정되지 않았다면, 이 속성은 빈 문자열을 반환합니다.
- {{DOMxRef("CSSCounterStyleRule.suffix")}}
  - : 연관성 있는 규칙에 의해 정의된 {{CSSxRef("@counter-style/suffix", "suffix")}} 설명자의 직렬화가 포함된 문자열 객체입니다. 만일 설명자가 연관된 규칙에 특정되지 않았다면, 이 속성은 빈 문자열을 반환합니다.
- {{DOMxRef("CSSCounterStyleRule.range")}}
  - : 연관성 있는 규칙에 의해 정의된 {{CSSxRef("@counter-style/suffix", "suffix")}} 설명자의 직렬화가 포함된 문자열 객체입니다. 만일 설명자가 연관된 규칙에 특정되지 않았다면, 이 속성은 빈 문자열을 반환합니다.
- {{DOMxRef("CSSCounterStyleRule.pad")}}
  - : 연관성 있는 규칙에 의해 정의된 {{CSSxRef("@counter-style/pad", "pad")}} 설명자의 직렬화가 포함된 문자열 객체입니다. 만일 설명자가 연관된 규칙에 특정되지 않았다면, 이 속성은 빈 문자열을 반환합니다.
- {{DOMxRef("CSSCounterStyleRule.speakAs")}}
  - : 연관성 있는 규칙에 의해 정의된 {{CSSxRef("@counter-style/speak-as", "speak-as")}} 설명자의 직렬화가 포함된 문자열 객체입니다. 만일 설명자가 연관된 규칙에 특정되지 않았다면, 이 속성은 빈 문자열을 반환합니다.
- {{DOMxRef("CSSCounterStyleRule.fallback")}}
  - : 연관성 있는 규칙에 의해 정의된 {{CSSxRef("@counter-style/fallback", "fallback")}} 설명자의 직렬화가 포함된 문자열 객체입니다. 만일 설명자가 연관된 규칙에 특정되지 않았다면, 이 속성은 빈 문자열을 반환합니다.

## 인스턴스 메서드

_이 인터페이스는 어떠한 특정한 메서드를 구현하지는 않지만 부모 {{DOMxRef("CSSRule")}} 로부터 메서드를 상속받습니다._

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{CSSxRef("@counter-style")}}
- [CSS counter styles](/ko/docs/Web/CSS/CSS_counter_styles) 모듈
