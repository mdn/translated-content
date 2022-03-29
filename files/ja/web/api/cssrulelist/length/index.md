---
title: CSSRuleList.length
slug: Web/API/CSSRuleList/length
tags:
  - API
  - プロパティ
  - リファレンス
  - length
  - CSSRuleList
browser-compat: api.CSSRuleList.length
translation_of: Web/API/CSSRuleList/length
---
{{ APIRef("CSSOM") }}

**`length`** は {{domxref("CSSRuleList")}} インターフェイスのプロパティで、リスト内の {{domxref("CSSRule")}} オブジェクトの数を返します。

## 構文

```js
let length = CSSRuleList.length;
```

### 値

整数です。

## 例

以下の例では、 `myRules` という名前の {{domxref("CSSRuleList")}} にあるアイテムの数をコンソールに出力します。

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules.length);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
