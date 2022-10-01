---
title: CSSStyleDeclaration.parentRule
slug: Web/API/CSSStyleDeclaration/parentRule
---

{{ APIRef("CSSOM") }}

**CSSStyleDeclaration.parentRule** は読み取り専用のプロパティで、このスタイルブロックの親である {{domxref('CSSRule')}} を返します。例えば、 CSS セレクターのスタイルを表す {{domxref('CSSStyleRule')}} です。

## 構文

```js
var rule = styles.parentRule;
```

### 値

この宣言ブロックを含む CSS 規則、またはこの {{domxref('CSSStyleDeclaration')}} が {{domxref('CSSRule')}} に割り当てられていない場合は `null` を返します。

## 例

次の JavaScript コードは、 {{domxref('CSSStyleDeclaration')}} から親の CSS スタイル規則を取得します。

```js
var declaration = document.styleSheets[0].rules[0].style;
var rule = declaration.parentRule;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
