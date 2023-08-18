---
title: "Element: outerHTML プロパティ"
short-title: outerHTML
slug: Web/API/Element/outerHTML
l10n:
  sourceCommit: 5b9279d31d51c6ee0478dbe072b994caa7270543
---

{{APIRef("DOM")}}

**`outerHTML`** は {{ domxref("Element") }} DOM インターフェイスの属性で、要素とその子孫を含む部分の HTML がシリアライズされたものを取得します。設定することで、指定された文字列を解釈したノードの要素に置き換えることができます。

要素の内容のみの HTML 表現を取得する場合や、要素の内容を置き換える場合であれば、代わりに {{domxref("Element.innerHTML", "innerHTML")}} プロパティを使用してください。

## 値

`outerHTML` の値を読み取ると、 `element` およびその子孫を HTML にシリアライズしたものを含む文字列が返されます。 `outerHTML` の値を設定すると、その要素とそのすべての子孫を、指定された `htmlString` を解釈して構築された新しい DOM ツリーで置き換えます。

### 例外

- `SyntaxError` {{domxref("DOMException")}}
  - : `outerHTML` に有効ではない HTML の文字列を使用して設定しようとした場合に発生します。
- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : `outerHTML` を {{domxref("Document")}} の直接の子である要素、たとえば {{domxref("Document.documentElement")}} に対して設定しようとした場合。

## 例

### 要素の outerHTML プロパティから値を取得

### HTML

```html
<div id="d">
  <p>Content</p>
  <p>Further Elaborated</p>
</div>
```

### Javascript

```js
const d = document.getElementById("d");
console.log(d.outerHTML);

// 文字列 '<div id="d"><p>Content</p><p>Further Elaborated</p></div>'
// がコンソールウィンドウに書き出されます。
```

### outerHTML プロパティへ設置することでノードを置き換え

### HTML

```html
<div id="container">
  <div id="d">これは div です。</div>
</div>
```

### Javascript

```js
const container = document.getElementById("container");
const d = document.getElementById("d");

console.log(container.firstElementChild.nodeName); // "DIV" と出力

d.outerHTML = "<p>この段落は元の div を置き換えたものです。</p>";

console.log(container.firstElementChild.nodeName); // "P" と出力

// #d の div 要素は文書ツリーの一部ではなくなり、
// 新たな段落に置き換えられました。
```

## メモ

要素が親ノードを持たない場合、その `outerHTML` プロパティに値を設定してもその要素や子孫は変更されません。以下に例を示します。

```js
const div = document.createElement("div");
div.outerHTML = '<div class="test">test</div>';
console.log(div.outerHTML); // output: "<div></div>"
```

また、文書の中で要素が置換された場合も、 `outerHTML` プロパティが設定された変数は、引き続きオリジナルの要素への参照を保持しています。

```js
const p = document.querySelector("p");
console.log(p.nodeName); // shows: "P"
p.outerHTML = "<div>This div replaced a paragraph.</div>";
console.log(p.nodeName); // still "P";
```

返値には HTML エスケープされた属性が入ります。

```js
const anc = document.createElement("a");
anc.href = "https://developer.mozilla.org?a=b&c=d";
console.log(anc.outerHTML); // output: "<a href='https://developer.mozilla.org?a=b&amp;c=d'></a>"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- DOM ツリーを XML 文字列にシリアライズ: {{domxref("XMLSerializer")}}
- XML または HTML を DOM ツリーに解釈: {{domxref("DOMParser")}}
- {{domxref("HTMLElement.outerText")}}
