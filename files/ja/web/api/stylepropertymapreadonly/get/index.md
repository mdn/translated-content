---
title: StylePropertyMapReadOnly.get()
slug: Web/API/StylePropertyMapReadOnly/get
---

{{APIRef("CSS Typed Object Model API")}}{{SeeCompatTable}}

**`get()`** は {{domxref("StylePropertyMapReadOnly")}} インターフェイスのメソッドで、指定されたプロパティの最初の値を {{domxref("CSSStyleValue")}} で返します。

## 構文

```js
var declarationBlock = StylePropertyMapReadOnly.get(property);
```

### 引数

- property
  - : 値を取得するプロパティの名前です。

### 返値

{{domxref("CSSStyleValue")}} オブジェクトです。

## 例

少しだけ、プロパティと値を取得してみましょう。まず、 HTML の段落の中にリンクを作成し、 JavaScript で入力する定義リストを追加しましょう。

```html
<p>
  <a href="https://example.com">リンク</a>
</p>
<dl id="results"></dl>
```

カスタムプロパティや継承可能なプロパティなど、ちょっとした CSS を追加しています。

```css
p {
  font-weight: bold;
}
a {
  --color: red;
  color: var(--color);
}
```

Element インターフェイスの [`computedStyleMap()`](/ja/docs/Web/API/Element/computedStyleMap) を使用して、 _StylePropertyMapReadOnly_ オブジェクトを返します。興味のあるプロパティの配列を作成し、 StylePropertyMapReadOnly の `get()` メソッドを使用してそれらの値のみを取得します。

```js
// 要素を取得
const myElement = document.querySelector("a");

// すべての計算済みスタイルを `computedStyleMap` で受け取る
const styleMap = myElement.computedStyleMap();

// 入力する <dl> を取得
const stylesList = document.querySelector("#results");

// 関心のあるプロパティのリスト
const ofInterest = ["font-weight", "border-left-color", "color", "--color"];

// 関心のあるプロパティを反復処理
for (let i = 0; i < ofInterest.length; i++) {
  // プロパティ
  const cssProperty = document.createElement("dt");
  cssProperty.innerText = ofInterest[i];
  stylesList.appendChild(cssProperty);

  // 値
  const cssValue = document.createElement("dd");
  // use get() to find the value
  cssValue.innerText = styleMap.get(ofInterest[i]);
  stylesList.appendChild(cssValue);
}
```

{{EmbedLiveSample("Examples", 120, 300)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 型付きオブジェクトモデル API](/ja/docs/Web/Houdini/CSS_Typed_OM)
- [Houdini の学習: CSS 型付きオブジェクトモデル](/ja/docs/Web/Houdini/learn/CSS_Typed_OM)
