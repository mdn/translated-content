---
title: Element.computedStyleMap()
slug: Web/API/Element/computedStyleMap
tags:
  - API
  - CSS Typed Object Model API
  - Element
  - 実験的
  - Houdini
  - メソッド
  - リファレンス
  - StylePropertyMapReadOnly
  - computedStyleMap()
browser-compat: api.Element.computedStyleMap
translation_of: Web/API/Element/computedStyleMap
---
{{APIRef("CSS Typed Object Model API")}}{{SeeCompatTable}}

**`computedStyleMap()`** は {{domxref("Element")}} インターフェイスのメソッドであり、 {{domxref("StylePropertyMapReadOnly")}} インターフェイスで {{domxref("CSSStyleDeclaration")}} の代替となる CSS 宣言ブロックの読み取り専用の表現を提供します。

## 構文

```js
var stylePropertyMapReadOnly = element.computedStyleMap()
```

### 引数

なし。

### 返値

{{domxref("StylePropertyMapReadOnly")}} インターフェイスです。

## 例

まず、簡単な HTML から始めましょう。リンクのある段落と、すべての CSS プロパティと値の組を追加する定義リストです。

```html
<p>
   <a href="https://example.com">Link</a>
</p>
<dl id="regurgitation"></dl>
```

いくらか CSS を追加します。

```css
a {
  --color: red;
  color: var(--color);
}
```

JavaScript を追加してリンクを取得し、 `computedStyleMap()` を使用してすべての CSS プロパティ値の定義リストを返します。

```js
// 要素を取得
const myElement = document.querySelector('a');

// 入力する <dl> を取得
const stylesList = document.querySelector('#regurgitation');

// すべての計算済みスタイルを computedStyleMap() で受け取る
const allComputedStyles = myElement.computedStyleMap();

// すべてのプロパティと値のマップを反復処理し、それぞれに <dt> と <dd> を追加します。
for (const [prop, val] of allComputedStyles) {
  // プロパティ
  const cssProperty = document.createElement('dt');
  cssProperty.appendChild(document.createTextNode(prop));
  stylesList.appendChild(cssProperty);

  // 値
  const cssValue = document.createElement('dd');
  cssValue.appendChild(document.createTextNode(val));
  stylesList.appendChild(cssValue);
}
```

[`computedStyleMap()` に対応しているブラウザー](#ブラウザーの互換性)では、すべての CSS プロパティと値のリストが表示されます。
他のブラウザーでは、リンクが表示されるだけです。

{{EmbedLiveSample("Examples", 300, 300)}}

リンクが持つ既定の CSS プロパティがいくつもあることに気づきましたか？ '`a`' を '`p`' に更新すると、`margin-top` と `margin-bottom` の既定の計算値の違いに気が付くでしょう。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
