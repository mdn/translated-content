---
title: HTMLElement.style
slug: Web/API/HTMLElement/style
tags:
  - API
  - CSSOM
  - HTMLElement
  - プロパティ
  - リファレンス
  - Style
browser-compat: api.HTMLElement.style
translation_of: Web/API/HTMLElement/style
---
{{APIRef("CSSOM")}}

**`style`** プロパティは読み取り専用で、要素のインラインスタイルを {{domxref("CSSStyleDeclaration")}} オブジェクトの形で返します。このオブジェクトには、その要素のインラインの [`style` 属性](/ja/docs/Web/HTML/Global_attributes/style)で定義されている属性に値が割り当てられている、その要素のすべてのスタイルプロパティのリストが入っています。

> **Note:** `style` 経由でアクセス可能な CSS プロパティのリストについては、[CSS プロパティリファレンス](/ja/docs/Web/CSS/CSS_Properties_Reference)を参照してください。`style` プロパティは CSS カスケードで `style` 属性によるインラインスタイル宣言と同じ（かつ最高の）優先順位を持ちます。

## 値

{{domxref("CSSStyleDeclaration")}} オブジェクトで、以下のプロパティがあります。

- computed フラグ
  - : Unset.
- 親の CSS のルール
  - : Null.
- オーナーのノード
  - : `this`

## スタイルの設定

このプロパティは読み取り専用と考えられていますが、 `style` に直接文字列を代入することで、インラインスタイルを設定することができます。この場合、その文字列は {{domxref("CSSStyleDeclaration.cssText")}} に転送されます。この方法で `style` を使用すると、その要素のインラインスタイルをすべて完全に上書きします。

したがって、他のスタイルの値を変更せずに要素の特定のスタイルを追加したい場合は、一般に {{domxref("CSSStyleDeclaration")}} オブジェクトの個別のプロパティを設定したほうがうまく行きます。例えば、 `element.style.backgroundColor = "red"` のようにします。

スタイル宣言は `null` または空文字列を設定することでリセットすることができます。例えば `elt.style.color = null` のようにします。

### スタイル情報の取得

`style` プロパティは、要素に適用されているスタイルを完全に知るためには有用ではありません。これは、要素のインラインの `style` 属性に設定されている CSS 宣言のみを表し、 {{HTMLElement("head")}} セクションのスタイル規則や外部のスタイルシートなど、他の場所のスタイル規則に由来するものを表してはいないからです。要素のすべての CSS プロパティの値を取得するには、代わりに {{domxref("Window.getComputedStyle()")}} を使用する必要があります。

次のコードスニペットは、要素の `style` プロパティで取得した値と、`getComputedStyle()` で取得した値の違いを実演します。

```html
<!DOCTYPE HTML>
<html>
  <body style="font-weight:bold;">
    <div style="color:red" id="myElement">..</div>
  </body>
</html>
```

```js
var element = document.getElementById("myElement");
var out = "";
var elementStyle = element.style;
var computedStyle = window.getComputedStyle(element, null);

for (prop in elementStyle) {
  if (elementStyle.hasOwnProperty(prop)) {
    out += "  " + prop + " = '" + elementStyle[prop] + "' > '" + computedStyle[prop] + "'\n";
  }
}
console.log(out)
```

出力されるコードは次のようなものです。

```
...
fontWeight = '' > 'bold'
color = 'red' > 'rgb(255, 0, 0)'
...
```

`font-weight` のスタイルの計算値に `bold` の値がありますが、要素の `style` プロパティにはないことに注意してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [動的なスタイル情報の利用](/ja/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
