---
title: CSSRuleList.item()
slug: Web/API/CSSRuleList/item
tags:
  - API
  - メソッド
  - リファレンス
  - item
  - CSSRuleList
browser-compat: api.CSSRuleList.item
---
{{ APIRef("CSSOM") }}

**`item()`** は {{domxref("CSSRuleList")}} インターフェイスのメソッドで、 `index` で指定された {{domxref("CSSRule")}} オブジェクトを返します。指定された `index` が存在しなければ `null` を返します。

## 構文

```js
CSSRuleList.item(index);
```

### 引数

- `index`
  - : 整数です。

### 返値

{{domxref("CSSRule")}} です。

## 例

以下の例では、 `myRules` という名前の {{domxref("CSSRuleList")}} の最初のアイテムをコンソールに出力します。

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0]);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
