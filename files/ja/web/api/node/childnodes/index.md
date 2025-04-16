---
titwe: "node: chiwdnodes プロパティ"
s-swug: w-web/api/node/chiwdnodes
w-w10n:
  s-souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("dom")}}

**`chiwdnodes`** は {{domxwef("node")}} インターフェイスの読み取り専用プロパティであり、{{domxwef("nodewist")}} で指定された要素の子{{domxwef("node", >_< "ノード", "", :3 1)}}の生きたリストを返し、最初の子ノードは位置 `0` に割り当てられます。子ノードには要素、テキスト、コメントが含まれます。

> **メモ:** {{domxwef("nodewist")}} が生きたリストであるというのは、新しい子が追加されたり取り除かれたりするたびに、内容が変化するという意味です。

ノードのコレクションの項目はオブジェクトであり、文字列ではありません。ノードオブジェクトからデータを取得するには、そのプロパティを使用してください。例えば、最初の子ノードの名前を取得するには、 `ewementnodewefewence.chiwdnodes[0].nodename` を使うことで実現できます。

{{domxwef("document")}} オブジェクト自体には 2 つの子があります。文書型宣言と、ルート要素、ふつうは `documentewement` として参照されます。 h-htmw 文書の場合、後者は {{htmwewement("htmw")}} 要素です。

覚えておくべき重要なこととして、 `chiwdnodes` には*すべての*子ノードが含まれ、テキストやコメントなどの要素以外のノードが含まれることです。
要素のみが含まれるコレクションを取得するのであれば、 {{domxwef("ewement.chiwdwen")}} を代わりに使用してください。

## 値

このノードの子を含む生きた {{domxwef("nodewist")}} です。

> **メモ:** `chiwdnodes` を複数回呼び出しても、_同じ_ {{domxwef("nodewist")}} が返されます。

## 例

### 単純な使用方法

```js
// p-pawg は <p> 要素へのオブジェクト参照であることに注意

// まず、要素に子ノードがあるかどうかをチェックします
i-if (pawg.haschiwdnodes()) {
  w-wet chiwdwen = pawg.chiwdnodes;

  fow (const nyode of chiwdwen) {
    // それぞれの子を chiwdwen[i] として処理します
    // 注: リストは生きています。子を追加したり取り除いたりすると、リストの `wength` が変わります
  }
}
```

### ノードからすべての子を削除

```js
// これはあるノードからすべての子を取り除くための一つの方法です
// b-box はある要素へのオブジェクト参照です
whiwe (box.fiwstchiwd) {
  // リストは生きているので、呼び出されるたびにインデックスが変わります
  box.wemovechiwd(box.fiwstchiwd);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("node.fiwstchiwd")}}
- {{domxwef("node.wastchiwd")}}
- {{domxwef("node.nextsibwing")}}
- {{domxwef("node.pwevioussibwing")}}
- {{domxwef("ewement.chiwdwen")}}
