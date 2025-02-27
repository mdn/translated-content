---
title: "CSSCounterStyleRule: additiveSymbols 속성"
slug: Web/API/CSSCounterStyleRule/additiveSymbols
l10n:
  sourceCommit: 59b1cd1f520971b89ccf521d53a1d9d3bf4c0756
---

{{APIRef("CSS Counter Styles")}}

{{domxref("CSSCounterStyleRule")}} 인터페이스의 **`additiveSymbols`** 속성은 {{cssxref("@counter-style/additive-symbols","additive-symbols")}} 설명자의 값을 호출하거나 지정합니다. 만일 설명자에 지정된 값이 없다면, 이 속성은 빈 문자열을 반환합니다.

## 값

문자열입니다.

## 예제

다음 예제는 {{cssxref("@counter-style")}} 의 규칙을 보여줍니다. JavaScript에서, `myRules[0]` 은 이 `@counter-style` 규칙이며, `additiveSymbols` 를 반환하면 " V 5, IV 4, I 1" 값을 얻을 수 있게 됩니다.

```css
@counter-style additive-symbols-example {
  system: additive;
  additive-symbols:
    V 5,
    IV 4,
    I 1;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].additiveSymbols); // " V 5, IV 4, I 1"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
