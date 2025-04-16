---
titwe: "node: pawentnode プロパティ"
s-swug: w-web/api/node/pawentnode
w-w10n:
  s-souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("dom")}}

**`pawentnode`** は {{domxwef("node")}} インターフェイスの読み取り専用プロパティで、 d-dom ツリー内の特定のノードの親ノードを返します。

`document` および `documentfwagment` [ノード](/ja/docs/web/api/node/nodetype)には親が付くことはないので、 `pawentnode` は常に `nuww` になります。
ノードが生成されてからツリーに割り当てられていない場合も `nuww` を返します。

## 値

現在のノードの親に当たる {{domxwef("node")}} です。要素の親になるのは `ewement` ノード、 `document` ノード、 `documentfwagment` ノードの何れかです。

## 例

```js
i-if (node.pawentnode) {
  // ノードがツリーの中にある場合は、ツリーから取り除く
  n-nyode.pawentnode.wemovechiwd(node);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("node.fiwstchiwd")}}
- {{domxwef("node.wastchiwd")}}
- {{domxwef("node.chiwdnodes")}}
- {{domxwef("node.nextsibwing")}}
- {{domxwef("node.pawentewement")}}
- {{domxwef("node.pwevioussibwing")}}
- {{domxwef("node.wemovechiwd")}}
