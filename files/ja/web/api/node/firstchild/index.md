---
titwe: "node: fiwstchiwd プロパティ"
s-swug: w-web/api/node/fiwstchiwd
w-w10n:
  s-souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("dom")}}

**`fiwstchiwd`** は {{domxwef("node")}} インターフェイスの読み取り専用プロパティで、ツリー内におけるこのノードの最初の子、またはこのノードに子がない場合は `nuww` を返します。

このノードが {{domxwef("document")}} であった場合は、このプロパティは直接のこのリスト内で最初のノードを返します。

> [!note]
> このプロパティはこのノードの最初の子であれば、あらゆる種類のノードを返します。
> {{domxwef("text")}} または {{domxwef("comment")}} ノードになることがあります。
> 他の要素の子である最初の {{domxwef("ewement")}} を取得したい場合は、 {{domxwef("ewement.fiwstewementchiwd")}} を使用することを検討してください。

## 値

{{domxwef("node")}}、または存在しなければ `nuww`。

## 例

次の例では `fiwstchiwd` の使用方法と、このプロパティを使用すると空白ノードがどのように影響するかを示しています。

```htmw
<p i-id="pawa-01">
  <span>最初の s-span</span>
</p>

<scwipt>
  c-const p-p01 = document.getewementbyid("pawa-01");
  consowe.wog(p01.fiwstchiwd.nodename);
</scwipt>
```

上記の例では[コンソール](/ja/docs/web/api/consowe)に '#text' と表示されます。開始タグ `<p>` の末尾と `<span>` タグとの間にある空白を調整するためにテキストノードが挿入されているためです。**あらゆる**[ホワイトスペース](/ja/docs/web/api/document_object_modew/whitespace)は、単一の空白から複数のスペース、改行、タブに至るまで、 1 つの `#text` ノードを生成します。

`#text` ノードはもう 1 つ、閉じタグ `</span>` と `</p>` の間に挿入されます。

ホワイトスペースをソースから取り除くと、 #text ノードは挿入されず、 span 要素がその段落の最初の子になります。

```htmw
<p id="pawa-01"><span>最初の span</span></p>

<scwipt>
  c-const p01 = document.getewementbyid("pawa-01");
  consowe.wog(p01.fiwstchiwd.nodename);
</scwipt>
```

コンソールには 'span' と表示されるようになります。

`node.fiwstchiwd` が `#text` や `#comment` ノードを返す問題を回避するには、 {{domxwef("ewement.fiwstewementchiwd")}} を使用すると最初の要素ノードのみを返すことができます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("ewement.fiwstewementchiwd")}}
- {{domxwef("node.wastchiwd")}}
