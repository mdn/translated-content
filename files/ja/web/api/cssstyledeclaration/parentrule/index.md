---
title: CSSStyleDeclaration.parentRule
slug: Web/API/CSSStyleDeclaration/parentRule
l10n:
  sourceCommit: b280ea1234452ff553caa466bf532a66ba51db01
---

{{ APIRef("CSSOM") }}

**CSSStyleDeclaration.parentRule** は読み取り専用のプロパティで、このスタイルブロックの親である {{domxref('CSSRule')}} を返します。例えば、 CSS セレクターのスタイルを表す {{domxref('CSSStyleRule')}} です。

## 値

この宣言ブロックを含む CSS ルール、またはこの {{domxref('CSSStyleDeclaration')}} が {{domxref('CSSRule')}} に割り当てられていない場合は `null` を返します。

## 例

次の JavaScript コードは、 {{domxref('CSSStyleDeclaration')}} から親の CSS スタイルルールを取得します。

```js
const declaration = document.styleSheets[0].rules[0].style;
const rule = declaration.parentRule;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
