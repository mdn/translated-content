---
title: Node.textContent
slug: Web/API/Node/textContent
tags:
  - プロパティ
  - リファレンス
browser-compat: api.Node.textContent
translation_of: Web/API/Node/textContent
---
{{APIRef("DOM")}}

**`textContent`** は {{domxref ("Node")}} のプロパティで、ノードおよびその子孫のテキストの内容を表します。

> **Note:** `textContent` と {{domxref("HTMLElement.innerText")}} は混同しやすいものですが、 2 つのプロパティは[重要な点が異なります](#innertext_との違い)。

## 値

文字列または {{jsxref("null")}} です。値は場面によります。

- ノードが {{domxref("document")}} または {{glossary("doctype")}} である場合、 `textContent` は {{jsxref("null")}} を返します。

  > **Note:** 文書全体の*すべての*テキストと [CDATA データ](/ja/docs/Web/API/CDATASection)を取得するには、 `document.documentElement.textContent` を使用する方法があります。

- ノードが [CDATA セクション](/ja/docs/Web/API/CDATASection)、コメント、[処理命令ノード](/ja/docs/Web/API/ProcessingInstruction)、 [テキストノード](/ja/docs/Web/API/Text)の場合、 `textContent` はそのノードの内側のテキスト、すなわち {{domxref("Node.nodeValue")}} を返します。
- 他のノード型の場合、`textContent` は、コメントと処理命令ノードを除く、すべての子ノードの `textContent` 属性値を連結したものを返します。（ノードが子を持たない場合、これは空文字列になります。）

> **Warning:** ノードの `textContent` を設定すると、そのノードの*すべて*の子が取り除かれて、指定された値を持つ単一のテキストノードに置き換わります。

### innerText との違い

`Node.textContent` と {{domxref("HTMLElement.innerText")}} の間の違いに混乱しないでください。名前は似ているようですが、重要な違いがあります。

- `textContent` は、 {{HTMLElement("script")}} と {{HTMLElement("style")}} 要素を含む、*すべて*の要素の中身を取得します。一方、 `innerText` は「人間が読める」要素のみを示します。
- `textContent` はノード内のすべての要素を返します。一方、 `innerText` はスタイルを反映し、「非表示」の要素のテキストは返しません。

  - もっと言えば、 `innerText` は CSS のスタイルを考慮するので、 `innerText` の値を読み取ると最新の計算されたスタイルを保証するために {{glossary("Reflow", "再フロー")}} を起動します。 (再フローは計算が重いので、可能であれば避けるべきです。)

- `textContent` とは異なり、 `innerText` を Internet Explorer (バージョン 11 まで) で変更すると、要素から子ノードを削除するだけでなく、子孫のテキストノードを*完全に破棄します*。他の要素または同じ要素にノードをもう一度挿入することは不可能です。

### innerHTML との違い

{{domxref("Element.innerHTML")}} は、その名が示すとおり HTML を返します。時に、 `innerHTML` を使用して要素内のテキストを受け取ったり書き込んだりすることがありますが、 `textContent` は値が HTML として解析されないので性能が良くなります。

さらに、`textContent` を使用することで {{glossary("Cross-site_scripting", "XSS 攻撃")}}を防ぐことができます。

## 例

以下のような HTML の断片があります。

```html
<div id="divA">This is <span>some</span> text!</div>
```

... `textContent` を使用して、要素のテキストの内容を取得することができます。

```js
let text = document.getElementById('divA').textContent;
// 変数 text の値は 'This is some text!' となります。
```

... また、要素のテキストを設定します。

```js
document.getElementById('divA').textContent = 'This text is different!';
// divA の HTML は次のようになります。
// <div id="divA">This text is different!</div>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLElement.innerText")}}
- {{domxref("Element.innerHTML")}}
- [More on differences between `innerText` and `textContent`](http://perfectionkills.com/the-poor-misunderstood-innerText/) (ブログ投稿)
