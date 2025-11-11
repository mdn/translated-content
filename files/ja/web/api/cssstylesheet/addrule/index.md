---
title: "CSSStyleSheet: addRule() メソッド"
slug: Web/API/CSSStyleSheet/addRule
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("CSSOM")}}{{deprecated_header}}

旧式の {{domxref("CSSStyleSheet")}} インターフェイスの **`addRule()`** は古いメソッドで、新しいルールをスタイルシートに追加します。このメソッドの使用を避け、より標準的な {{domxref("CSSStyleSheet.insertRule", "insertRule()")}} メソッドを使用しましょう。

## 構文

```js-nolint
addRule(selector, styleBlock, index)
```

### 引数

- `selector`
  - : CSS ルールのセレクター部分を指定する文字列です。既定値は文字列 `undefined` です。
- `styleBlock`
  - : `selector` に一致する要素に適用されるスタイルブロックを示す文字列です。既定値は文字列 `undefined` です。
- `index` {{optional_inline}}
  - : オプションで、このスタイルシートの {{domxref("CSSRuleList")}} の中に新しいルールを挿入するための位置を指定します。`index` が指定されなかった場合、現在リストにある最後の項目の次の位置（つまり、 `cssStyleSheet.cssRules.length` の値）が使用されます。

### 返値

常に -1 を返します。

ルールを合法的に挿入できる場所に関するルールがやや難解なため、例外が発生する可能性があることに注意してください。詳細は {{domxref("CSSStyleSheet.insertRule", "insertRule()")}} を参照してください。

## 使用上の注意

このメソッドはブラウザーでは、テンプレートリテラル `` `${selector}{${styleBlock}}` `` を使用して文字列を構築し、それから標準の {{domxref("CSSStyleSheet.insertRule", "insertRule()")}} メソッドを呼び出すように実装されています。

従って、以下のような既存のコードがあった場合、

```js
cssStyleSheet.addRule(selector, styles, 0);
```

次のようにして、もっと標準の `insertRule()` を使用して書き直すことができます。

```js
cssStyleSheet.insertRule(`${selector} {${styles}}`, 0);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS オブジェクトモデル](/ja/docs/Web/API/CSS_Object_Model)
- [動的スタイル情報の利用](/ja/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
