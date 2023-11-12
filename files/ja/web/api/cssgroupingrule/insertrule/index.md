---
title: CSSGroupingRule.insertRule()
slug: Web/API/CSSGroupingRule/insertRule
---

{{ APIRef("CSSOM") }}

**`insertRule()`** は {{domxref("CSSGroupingRule")}} インターフェイスのメソッドで、新しい CSS ルールを CSS ルールのリストへ追加します。

## 構文

```js
insertRule(rule);
insertRule(rule, index);
```

### 引数

- rule
  - : 文字列です。
- index{{optional_inline}}
  - : 省略可能で、このルールを挿入する位置です。既定値は 0 です。

### 返値

新しいルールの位置です。

### 例外

- `IndexSizeError` {{domxref("DOMException")}}
  - : _index_ が子 CSS ルールの数以上であった場合に発生します。
- `HierarchyRequestError` {{domxref("DOMException")}}
  - : CSS で規定された制約により、リストの指定された（ゼロ起点の）インデックス位置に新しいルールが挿入できない場合に発生します。
- `InvalidStateError` {{domxref("DOMException")}}
  - : 新しいルールが `@namespace` アットルールで、子 CSS ルールのリストが `@import` アットルールと `@namespace` アットルール以外のものを含んでいる場合に発生します。

## 例

```js
let myRules = document.styleSheets[0].cssRules;
myRules[0].insertRule(
  "html {background-color: blue;}",
  0,
); /* HTML 要素に対するルールを位置 0 に挿入します。 */
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
