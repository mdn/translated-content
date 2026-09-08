---
title: "Element: getAttribute() メソッド"
short-title: getAttribute()
slug: Web/API/Element/getAttribute
l10n:
  sourceCommit: f22f67069495dc37e550e354913d4ca984f5a4b0
---

{{APIRef("DOM")}}

**`getAttribute()`** は {{domxref("Element")}} インターフェイスのメソッドで、指定された要素の指定された属性の文字列値を返します。指定された属性が存在しない場合、返される値は `null` になります。

{{domxref("Attr")}} ノードのプロパティを調べる場合は、代わりに {{domxref("Element.getAttributeNode()", "getAttributeNode()")}} メソッドを使用してください。

## 構文

```js-nolint
getAttribute(attrName)
```

### 引数

- `attrName`
  - : 属性の名前を指定する文字列。HTML 文書としてフラグ付けされた DOM 内の HTML 要素に対して呼び出された場合、その名前は小文字に正規化されます。

### 返値

属性の値が入った文字列。ただし、要素に指定された名前の属性がない場合は `null` となります。

## 使用メモ

### 属性値内のデコード済み文字参照

属性のソースマークアップに含まれる HTML [文字参照](/ja/docs/Glossary/Character_reference)（例えば、`&lt;`、`&amp;`、`&#x3C;` など）は、文書が構文解析される際に HTML パーサーによってデコードされるため、`getAttribute()` はソース通りではなく、デコードされた値を返します。

例えば、

```html
<div id="example" data-payload="&lt;b&gt;hi&lt;/b&gt;"></div>
```

`document.getElementById("example").getAttribute("data-payload")` を呼び出すと、文字列 `"<b>hi</b>"` が返されます。

`getAttribute()` の返値を、すでにエスケープ済みの HTML として扱うことは安全ではありません。信頼できないデータを含む属性を読み取り、それを {{domxref("Element.innerHTML", "innerHTML")}} に代入したり、マークアップとして文書に挿入したりすると、特殊文字をエスケープするために使用された HTML 参照はすでにデコードされており、その結果、[クロスサイトスクリプティング (XSS)](/ja/docs/Web/Security/Attacks/XSS) 攻撃に悪用される可能性があります。

信頼できないデータを扱う場合は、`innerHTML` の代わりに {{domxref("Node.textContent", "textContent")}}（またはその他のテキストセーフな API）を使用してください。

### ノンス値の受け取り

セキュリティ上の理由で、スクリプト以外、例えば CSS セレクターから来た [CSP](/ja/docs/Web/HTTP/Guides/CSP) のノンスと、 `.getAttribute("nonce")` の呼び出しは隠蔽されます。

```js example-bad
const nonce = script.getAttribute("nonce");
// 空文字列が返される
```

コンテンツ属性のノンスをるには、代わりに {{domxref("HTMLElement/nonce", "nonce")}} プロパティを使用してください。

```js
const nonce = script.nonce;
```

## 例

```html
<!-- HTML 文書内の div の例 -->
<div id="div1">Hi Champ!</div>
```

```js
const div1 = document.getElementById("div1");
// <div id="div1">Hi Champ!</div>

const exampleAttr = div1.getAttribute("id");
// "div1"

const lang = div1.getAttribute("lang");
// null
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
