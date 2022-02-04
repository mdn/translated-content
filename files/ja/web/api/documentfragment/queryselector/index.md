---
title: DocumentFragment.querySelector()
slug: Web/API/DocumentFragment/querySelector
tags:
  - API
  - DOM
  - DocumentFragment
  - メソッド
browser-compat: api.DocumentFragment.querySelector
translation_of: Web/API/DocumentFragment/querySelector
---
{{ApiRef("DOM")}}

**`DocumentFragment.querySelector()`** メソッドは、指定されたセレクター群に一致する {{domxref("DocumentFragment")}} の中の最初の要素を（文書ノードの深さ優先前順走査 (depth-first pre-order traversal) を使用して）返します。一致するものがなければ `null` を返します。

ID に一致するセレクターで、その ID が誤って文書中に複数使用されていた場合は、最初に一致する要素を返します。

引数で指定されたセレクターが無効であった場合、 {{domxref("DOMException")}} が `SYNTAX_ERR` の値で発生します。

## 構文

```js
element = documentfragment.querySelector(selectors);
```

### 引数

- _selectors_
  - : {{domxref("DOMString")}} で、1 つ以上の CSS セレクターをカンマで区切って指定します。

## 例

### 基本的な例

この基本的な例では、 {{domxref("DocumentFragment")}} の中で "`myclass`" クラスが返されます。

```js
var el = documentfragment.querySelector(".myclass");
```

### CSS の構文とメソッドの引数

`querySelector` に CSS の構文に従う必要があります。 CSS の構文に従っていない ID やセレクター（例えばセミコロンや空白が不適切に入っているなど）に一致させるには、適合しない文字をバックスラッシュ 2 つでエスケープする必要があります。

```html
<div id="foo\bar"></div>
<div id="foo:bar"></div>

<script>
document.querySelector('#foo\bar')    // 何にも一致しない
document.querySelector('#foo\\\\bar') // 最初の div に一致する
document.querySelector('#foo:bar')     // 何にも一致しない
document.querySelector('#foo\\:bar')   // 2 つ目の div に一致する
</script>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属する {{domxref("DocumentFragment")}} インターフェイス
