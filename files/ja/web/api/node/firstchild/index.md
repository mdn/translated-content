---
title: Node.firstChild
slug: Web/API/Node/firstChild
tags:
  - プロパティ
  - リファレンス
browser-compat: api.Node.firstChild
translation_of: Web/API/Node/firstChild
---
{{APIRef("DOM")}}

**`firstChild`** は {{domxref("Node")}} インターフェイスの読み取り専用プロパティで、ツリー内におけるこのノードの最初の子、またはこのノードに子がない場合は `null` を返します。

このノードが {{domxref("Document")}} であった場合は、このプロパティは直接のこのリスト内で最初のノードを返します。

> **Note:** このプロパティはこのノードの最初の子であれば、あらゆる種類のノードを返します。
> {{domxref("Text")}} または {{domxref("Comment")}} ノードになることがあります。
> 他の要素の子である最初の {{domxref("Element")}} を取得したい場合は、 {{domxref("Element.firstElementChild")}} を使用することを検討してください。

## 値

{{domxref("Node")}}、または存在しなければ `null`。

## 例

次の例では `firstChild` の使用方法と、このプロパティを使用すると空白ノードがどのように影響するかを示しています。

```html
<p id="para-01">
  <span>最初の span</span>
</p>

<script>
  const p01 = document.getElementById('para-01');
  console.log(p01.firstChild.nodeName);
</script>
```

上記の例では[コンソール](/ja/docs/Web/API/console)に '#text' と表示されます。開始タグ `<p>` の末尾と `<span>` タグとの間にある空白を調整するためにテキストノードが挿入されているためです。**あらゆる**[ホワイトスペース](/ja/docs/Web/API/Document_Object_Model/Whitespace)は、単一の空白から複数のスペース、改行、タブに至るまで、 1 つの `#text` ノードを生成します。

`#text` ノードはもう 1 つ、閉じタグ `</span>` と `</p>` の間に挿入されます。

ホワイトスペースをソースから取り除くと、 #text ノードは挿入されず、 span 要素がその段落の最初の子になります。

```html
<p id="para-01"><span>最初の span</span></p>

<script>
  const p01 = document.getElementById('para-01');
  console.log(p01.firstChild.nodeName);
</script>
```

コンソールには 'SPAN' と表示されるようになります。

`node.firstChild` が `#text` や `#comment` ノードを返す問題を回避するには、 {{domxref("Element.firstElementChild")}} を使用すると最初の要素ノードのみを返すことができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.firstElementChild")}}
- {{domxref("Node.lastChild")}}
