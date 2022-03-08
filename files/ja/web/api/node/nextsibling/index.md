---
title: Node.nextSibling
slug: Web/API/Node/nextSibling
tags:
  - プロパティ
  - リファレンス
  - 読み取り専用
browser-compat: api.Node.nextSibling
translation_of: Web/API/Node/nextSibling
---
{{APIRef("DOM")}}

**`nextSibling`** は {{domxref("Node")}} インターフェイスの読み取り専用プロパティで、指定されたノードの親の {{domxref("Node.childNodes","childNodes")}} の中で、そのすぐ次のノードを返します。または、指定されたノードが親要素の最後の子要素である場合は `null` を返します。

> **Note:** ブラウザーはソースのマークアップにあるホワイトスペースを表すために、文書に {{domxref("Text")}} ノードを挿入します。
> そのため、例えば [`Node.firstChild`](/ja/docs/Web/API/Node/firstChild) や [`Node.previousSibling`](/ja/docs/Web/API/Node/previousSibling) を使用して得たノードが、取得しようとした実際のノードではなく、ホワイトスペースのテキストノードであることがあります。
>
> [DOM でのホワイトスペース](/ja/docs/Web/API/Document_Object_Model/Whitespace)の記事に、この動作に関する詳しい情報があります。
>
> {{domxref("Element.nextElementSibling")}} を使用すると、ホワイトスペースのノードや要素間のテキスト、コメントなどを飛ばして次の要素を取得することができます。
>
> 子ノードのリストで反対方向に移動する場合は、 [Node.previousSibling](/ja/docs/Web/API/Node/previousSibling) を使用してください。

## 値

現在のノードの次の兄弟ノードを表す {{domxref("Node")}}、または存在しない場合は `null` です。

## 例

```html
<div id="div-1">こちらは div-1 です。</div>
<div id="div-2">こちらは div-2 です。</div>
<br/>
<output><em>計算結果がありません。</em></output>
```

```js
let el = document.getElementById('div-1').nextSibling,
i = 1;

let result = "div-1 の兄弟要素:<br/>";

while (el) {
  result += i + '. ' + el.nodeName+"<br/>";
  el = el.nextSibling;
  i++;
}

const output = document.getElementsByTagName("output")[0];
output.innerHTML = result;
```

{{ EmbedLiveSample("Example", "100%", 500)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.nextElementSibling")}}
- {{domxref("Node.previousSibling")}}
