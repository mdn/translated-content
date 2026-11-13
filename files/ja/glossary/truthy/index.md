---
title: Truthy (真値)
slug: Glossary/Truthy
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

{{Glossary("JavaScript")}} において、**真値** (truthy) とは、{{Glossary("Boolean", "論理値")}}のコンテキストに現れた時に `true` とみなされる値のことです。{{Glossary("Falsy", "偽値")}} (falsy) として定義された値（つまり、`false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`, {{domxref("document.all")}}）を除くすべての値は真値です。

{{Glossary("JavaScript")}} は、論理値のコンテキストでは{{Glossary("Type_Coercion", "型変換")}}を用います。

JavaScript における真値の例です（論理値のコンテキストではこれらの値を `true` と評価し、`if` ブロックを実行します）。

```js
if (true);
if ({});
if ([]);
if (42);
if ("0");
if ("false");
if (new Date());
if (-42);
if (12n);
if (3.14);
if (-3.14);
if (Infinity);
if (-Infinity);
```

最初のオペランドが真値である場合、[論理 AND 演算子](/ja/docs/Web/JavaScript/Reference/Operators/Logical_AND)は 2 つ目のオペランドを返します。

```js
true && "dog";
// "dog" を返す

[] && "dog";
// "dog" を返す
```

## 関連情報

- 関連用語:
  - {{Glossary("Falsy", "偽値")}}
  - {{Glossary("Type_Coercion", "型変換")}}
  - {{Glossary("Boolean", "論理型")}}
- [論理型への変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Boolean#論理型への変換)
