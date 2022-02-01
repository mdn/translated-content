---
title: Truthy (真値)
slug: Glossary/Truthy
tags:
  - CodingScripting
  - 用語集
  - JavaScript
translation_of: Glossary/Truthy
---
{{Glossary("JavaScript")}} において、**真値** (truthy) は{{Glossary("Boolean", "論理値")}}のコンテキストに現れた時に `true` とみなされる値のことです。{{Glossary("Falsy", "偽値 (falsy)")}} として定義された値 (つまり、`false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`) を除くすべての値は真値です。

{{Glossary("JavaScript")}} は、論理値のコンテキストでは{{Glossary("Type_Conversion", "型変換")}}を用います。

JavaScript で _truthy_ な値の例です (論理値のコンテキストではこれらの値を `true` と評価し、`if` ブロックを実行します)。

```js
if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
```

## 関連情報

- {{Glossary("Falsy", "偽値")}}
- {{Glossary("Type_coercion", "型変換")}}
- {{Glossary("Boolean")}}
