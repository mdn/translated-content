---
title: "CSSCounterStyleRule: fallback 속성"
slug: Web/API/CSSCounterStyleRule/fallback
l10n:
  sourceCommit: 59b1cd1f520971b89ccf521d53a1d9d3bf4c0756
---

{{APIRef("CSS Counter Styles")}}

{{domxref("CSSCounterStyleRule")}} 인터페이스의 **`fallback`** 속성은 {{cssxref("@counter-style/fallback","fallback")}} 설명자의 값을 가져오거나 설정합니다. 만일 설명자에 지정된 값이 없다면, 이 속성은 빈 문자열을 반환합니다.

## 값

문자열입니다.

## 예제

다음 예제는 {{cssxref("@counter-style")}} 의 규칙을 보여줍니다. JavaScript에서, `myRules[0]` 은 이 `@counter-style` 규칙이며, `fallback` 을 반환하면 "disc" 값을 얻을 수 있습니다.

```css
@counter-style box-corner {
  system: fixed;
  symbols: ◰ ◳ ◲ ◱;
  suffix: ": ";
  fallback: disc;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].fallback); // "disc"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
