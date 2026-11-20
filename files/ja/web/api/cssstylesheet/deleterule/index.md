---
title: "CSSStyleSheet: deleteRule() メソッド"
short-title: deleteRule()
slug: Web/API/CSSStyleSheet/deleteRule
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{APIRef("CSSOM")}}

**`CSSStyleSheet.deleteRule()`** メソッドは、スタイルルールを現在のスタイルシートオブジェクトから削除します。

## 構文

```js-nolint
deleteRule(index)
```

### 引数

- `index`
  - : このスタイルシートの {{domxref("CSSRuleList")}} で、削除するルールの位置を示します。

### 返値

なし ({{jsxref("undefined")}})。

## 例

この例では、スタイルシート `myStyles` から最初のルールを削除します。

```js
myStyles.deleteRule(0);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS オブジェクトモデル](/ja/docs/Web/API/CSS_Object_Model)
- [Constructable Stylesheets](https://web.dev/articles/constructable-stylesheets) (web.dev)
- [動的スタイル情報の利用](/ja/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- {{domxref("CSSStyleSheet.insertRule", "insertRule()")}}
