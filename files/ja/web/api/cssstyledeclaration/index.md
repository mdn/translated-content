---
title: CSSStyleDeclaration
slug: Web/API/CSSStyleDeclaration
---

{{APIRef("CSSOM")}}

**`CSSStyleDeclaration`** インターフェースは CSS 宣言ブロックのオブジェクトを表し、スタイル情報や様々なスタイルに関するメソッドやプロパティを提供します。

`CSSStyleDeclaration` オブジェクトは、下記の 3 つの API によって使用されます。

- 単一の要素のインラインスタイルを扱う {{DOMxRef("HTMLElement.style")}} から (例: `<div style="...">`)。
- {{DOMxRef("CSSStyleSheet")}} API から。例えば `document.styleSheets[0].cssRules[0].style` は、その文書の最初のスタイルシートの最初の CSS 規則を `CSSStyleDeclaration` を返します。
- {{DOMxRef("Window.getComputedStyle()")}} で、 `CSSStyleDeclaration` オブジェクトを**読み取り専用**インターフェイスとして返します。

## 属性

- {{DOMxRef("CSSStyleDeclaration.cssText")}}
  - : 宣言ブロックのテキスト表現です。この属性を設定すると、スタイルが変化します。
- {{DOMxRef("CSSStyleDeclaration.length")}}{{ReadOnlyInline}}
  - : プロパティの数を表します。後述の {{DOMxRef("CSSStyleDeclaration.item()", 'item()')}} メソッドを参照のこと。
- {{DOMxRef("CSSStyleDeclaration.parentRule")}}{{ReadOnlyInline}}
  - : 所属する {{DOMxRef("CSSRule")}} を表します。

### CSS プロパティ

- {{DOMxRef("CSSStyleDeclaration.cssFloat", "CSSStyleDeclaration.cssFloat")}}
  - : CSS の {{CSSxRef("float")}} プロパティのエイリアスです。
- {{DOMxRef("CSSStyleDeclaration.named_properties", '<code>CSSStyleDeclaration</code> の名前付きプロパティ', "", 1)}}
  - : 対応するすべての CSS プロパティを、ダッシュおよびキャメルケースにした属性です。

## メソッド

- {{DOMxRef("CSSStyleDeclaration.getPropertyPriority()")}}
  - : オプションの優先度、 "important" を返します。
- {{DOMxRef("CSSStyleDeclaration.getPropertyValue()")}}
  - : 指定されたプロパティ名のプロパティ値を返します。
- {{DOMxRef("CSSStyleDeclaration.item()")}}
  - : 位置から CSS プロパティ名を返します。位置が範囲を超えていた場合は空文字列を返します。
    代替方法は `nodeList[i]` にアクセスすることです (これは `i` が範囲外であった場合は `undefined` を返します)。これは JavaScript 以外の DOM 実装の多くで最も有用です。
- {{DOMxRef("CSSStyleDeclaration.removeProperty()")}}
  - : CSS 宣言ブロックからプロパティを削除します。
- {{DOMxRef("CSSStyleDeclaration.setProperty()")}}
  - : 宣言ブロック内の既存の CSS プロパティを変更するか、新しい CSS プロパティを生成するかします。
- {{DOMxRef("CSSStyleDeclaration.getPropertyCSSValue()")}} {{deprecated_inline}}
  - : **Firefox の getComputedStyle のみ対応** プロパティの値を {{DOMxRef("CSSPrimitiveValue")}} として、または[一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)では `null` を返します。

## 例

```js
var styleObj = document.styleSheets[0].cssRules[0].style;
console.log(styleObj.cssText);

for (var i = styleObj.length; i--;) {
  var nameString = styleObj[i];
  styleObj.removeProperty(nameString);
}

console.log(styleObj.cssText);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS Properties Reference](/ja/docs/Web/CSS/CSS_Properties_Reference)
