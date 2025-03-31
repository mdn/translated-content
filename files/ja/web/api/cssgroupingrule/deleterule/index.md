---
title: "CSSGroupingRule: deleteRule() メソッド"
short-title: deleteRule()
slug: Web/API/CSSGroupingRule/deleteRule
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{ APIRef("CSSOM") }}

**`deleteRule()`** は {{domxref("CSSGroupingRule")}} インターフェイスのメソッドで、子 CSS ルールの一覧からある CSS ルールを取り除きます。

## 構文

```js-nolint
deleteRule(index)
```

### 引数

- `index`
  - : 削除するルールの位置です。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `IndexSizeError` {{domxref("DOMException")}}
  - : _index_ が子 CSS ルールの数以上であった場合に発生します。
- `InvalidStateError` {{domxref("DOMException")}}
  - : 削除しようとしているルールが `@namespace` アットルールであり、子 CSS ルールに `@import` アットルールまたは `@namespace` アットルール以外の者があった場合に発生します。

## 例

```js
let myRules = document.styleSheets[0].cssRules;
myRules[0].deleteRule(2); /* インデックス 2 にあるルールを削除 */
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
