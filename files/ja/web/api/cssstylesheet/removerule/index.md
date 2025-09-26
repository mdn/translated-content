---
title: "CSSStyleSheet: removeRule() メソッド"
slug: Web/API/CSSStyleSheet/removeRule
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("CSSOM")}}{{deprecated_header}}

旧式の {{domxref("CSSStyleSheet")}} の **`removeRule()`** メソッドは、スタイルシートオブジェクトからルールを削除します。これは、標準で推奨されるメソッド {{domxref("CSSStyleSheet.deleteRule", "deleteRule()")}} と機能的に同じです。

> [!NOTE]
> これは古いメソッドであり、標準のメソッド {{domxref("CSSStyleSheet.deleteRule", "deleteRule()")}} によって置き換えられました。代わりにこちらを使用してください。

## 構文

```js-nolint
removeRule(index)
```

### 引数

- `index`
  - : このスタイルシートの {{domxref("CSSRuleList")}} の中の位置で、削除するルールを示します。

### 返値

なし ({{jsxref("undefined")}})。

## 例

この例では、スタイルシート `myStyles` から最初のルールを削除します。

```js
myStyles.removeRule(0);
```

これを標準の `deleteRule()` メソッドを使用するように書き換えるのは、とても簡単です。

```js
myStyles.deleteRule(0);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS オブジェクトモデル](/ja/docs/Web/API/CSS_Object_Model)
- [動的スタイル情報の利用](/ja/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- {{domxref("CSSStyleSheet.insertRule", "insertRule()")}}
