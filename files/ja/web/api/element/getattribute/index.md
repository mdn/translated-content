---
title: "Element: getAttribute() メソッド"
short-title: getAttribute()
slug: Web/API/Element/getAttribute
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef("DOM")}}

**`getAttribute()`** は {{domxref("Element")}} インターフェイスのメソッドで、この要素の指定された属性の値を返します。

指定された属性が存在しない場合、返される値は `null` になります。

{{domxref("Attr")}} ノードのプロパティを調べる場合は、代わりに {{domxref("Element.getAttributeNode()", "getAttributeNode()")}} メソッドを使用してください。

## 構文

```js-nolint
getAttribute(attributeName)
```

### 引数

- `attributeName`
  - : 値を取得したい属性の名前です。

### 返値

`attributeName` の属性が存在すれば、値の入った文字列です。存在しなければ `null` です。

## 例

```html
<!-- HTML 文書内の div の例 -->
<div id="div1">Hi Champ!</div>
```

```js
// コンソールへの出力
const div1 = document.getElementById("div1");
//=> <div id="div1">Hi Champ!</div>

const exampleAttr = div1.getAttribute("id");
//=> "div1"

const align = div1.getAttribute("align");
//=> null
```

## 解説

### 小文字化

HTML 文書とされている DOM の HTML 要素に対して呼び出すと、 `getAttribute()` は処理前に引数を小文字化します。

### ノンス値の受け取り

セキュリティ上の理由で、スクリプト以外、例えば CSS セレクターから来た [CSP](/ja/docs/Web/HTTP/CSP) のノンスと、 `.getAttribute("nonce")` の呼び出しは隠蔽されます。

```js example-bad
let nonce = script.getAttribute("nonce");
// 空文字列が返される
```

コンテンツ属性のノンスをるには、代わりに {{domxref("HTMLElement/nonce", "nonce")}} プロパティを使用してください。

```js
let nonce = script.nonce;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.hasAttribute()")}}
- {{domxref("Element.setAttribute()")}}
- {{domxref("Element.removeAttribute()")}}
- {{domxref("Element.toggleAttribute()")}}
