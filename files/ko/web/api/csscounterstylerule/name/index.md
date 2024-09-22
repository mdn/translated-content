---
title: "CSSCounterStyleRule: name 속성"
slug: Web/API/CSSCounterStyleRule/name
l10n:
  sourceCommit: 59b1cd1f520971b89ccf521d53a1d9d3bf4c0756
---

{{APIRef("CSS Counter Styles")}}

{{domxref("CSSCounterStyleRule")}} 인터페이스의 **`name`** 속성은 연관성 있는 규칙의 `name` 으로 정의된 {{CSSxRef("&lt;custom-ident&gt;")}} 의 값을 호출하거나 지정합니다.

## 값

문자열입니다.

## 예제

다음 예제는 {{cssxref("@counter-style")}} 의 규칙을 보여줍니다. JavaScript에서, `myRules[0]` 은 이 `@counter-style` 규칙이며, `name` 을 반환하면 "box-corner" 값을 얻을 수 있습니다.

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
console.log(myRules[0].name); // "box-corner"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
