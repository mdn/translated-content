---
title: CSSScopeRule
slug: Web/API/CSSScopeRule
l10n:
  sourceCommit: 0fe8f4d7e9cd5b1b6a39e9fa047468206d3c3ca2
---

{{ APIRef("CSSOM") }}

**`CSSScopeRule`** は [CSS オブジェクトモデル](/ja/docs/Web/API/CSS_Object_Model)のインターフェイスで、 {{CSSxRef("@scope")}} アットルールを表します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスには親である {{domxref("CSSGroupingRule")}} から継承したプロパティがあります。_

- {{domxref("CSSScopeRule.end", "end")}}
  - : `@scope` アットルールのスコープリミットの値を格納した文字列を返します。
- {{domxref("CSSScopeRule.start", "start")}}
  - : `@scope` アットルールのスコープルートの値を格納した文字列を返します。

## インスタンスメソッド

_このインターフェイスには親である {{domxref("CSSGroupingRule")}} から継承したメソッドがあります。_

## 例

### JavaScript で @scope 情報にアクセス

以下のものが文書に添付されている唯一のスタイルシートであるとします。

```css
@scope (.outer) to (.inner) {
  :scope {
    background: yellow;
  }
}
```

以下の JavaScript を使用することで、内包された `@scope` ブロックの情報にアクセスすることができます。

```js
const scopeBlock = document.styleSheets[0].cssRules[0];

console.log(scopeBlock.start); // ".outer" を返す
console.log(scopeBlock.end); // ".inner" を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("@scope")}}
- {{CSSxRef(":scope")}}
