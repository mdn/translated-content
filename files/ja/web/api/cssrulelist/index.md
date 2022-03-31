---
title: CSSRuleList
slug: Web/API/CSSRuleList
tags:
  - API
  - CSSOM
  - インターフェイス
  - リファレンス
browser-compat: api.CSSRuleList
translation_of: Web/API/CSSRuleList
---
{{ APIRef("CSSOM") }}

`CSSRuleList` は読み取り専用の {{domxref("CSSRule")}} オブジェクトの順序付きコレクションを表します。

`CSSRuleList` オブジェクトは読み取り専用であり、直接変更することはできませんが、内容が変化していくことがあるので `live` オブジェクトと見なされます。

`CSSRule` オブジェクトが返す基本ルールを編集するには、 {{domxref("CSSStyleSheet")}} のメソッドである {{domxref("CSSStyleSheet.insertRule()")}} と {{domxref("CSSStyleSheet.deleteRule()")}} を使用します。

このインターフェイスにはコンストラクターがありません。 `CSSRuleList` のインスタンスは {{domxref("CSSStyleSheet.cssRules")}} と {{domxref("CSSKeyframesRule.cssRules")}} から返却されます。

## プロパティ

- {{domxref("CSSRuleList.length")}}{{ReadOnlyInline}}
  - : このコレクション内の {{domxref("CSSRule")}} オブジェクトの数を表す整数を返します。

## メソッド

- {{domxref("CSSRuleList.item()")}}
  - : 単一の {{domxref("CSSRule")}} を取得します。

## 例

以下の例には、 3 つのルールがあるスタイルシートがあります。 {{domxref("CSSStyleSheet.cssRules")}} を使用すると `CSSRuleList` を返し、それがコンソールに出力されます。

リスト内のルールの数は、 {{domxref("CSSRuleList.length")}} を使用してコンソールに出力されます。最初の {{domxref("CSSRule")}} は `0` を {{domxref("CSSRuleList.item")}} の引数に指定することで返されます。この例では `body` セレクターのルールセットが返されます。

### CSS

```css
body {
  font-family: system-ui,-apple-system,sans-serif;
  margin: 2em;
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
}

.container > * {
  background-color: #3740ff;
  color: #fff;
}
```

### JavaScript

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules);
console.log(myRules.length);
console.log(myRules[0]);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`CSSRule`](/ja/docs/Web/API/CSSRule)
