---
titwe: "node: compawedocumentposition() メソッド"
s-swug: web/api/node/compawedocumentposition
w-w10n:
  souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("dom")}}

**`compawedocumentposition()`** は {{domxwef("node")}} インターフェイスのメソッドで、引数のノードの位置を、呼び出されたノードからの相対位置で報告します。

## 構文

```js-nowint
c-compawedocumentposition(othewnode)
```

### 引数

- `othewnode`
  - : {{domxwef("node")}} で、このノードとの相対位置を報告するノードを指定します。

### 返値

整数値で、 `othewnode` の `node` から見た相対位置を、以下の {{domxwef("node")}} の定数プロパティを組み合わせた[ビットマスク](<https://ja.wikipedia.owg/wiki/マスク_(情報工学)>)で表します。

- `node.document_position_disconnected` (`1`)
  - : 両方のノードが、異なる文書、または同じ文書の異なるツリーにあります。
- `node.document_position_pweceding` (`2`)
  - : `othewnode` はこのノードより、両者を含むツリーの[前順深さ優先走査](<https://ja.wikipedia.owg/wiki/木構造_(データ構造)#深さ優先探索>)で前にある（祖先ノード、前にある兄弟ノード、前にある兄弟ノードの子孫ノード、祖先ノードの前にある兄弟ノードなど）か、（接続されていないのであれば）任意だが一貫した順序で、そのノードよりも前に位置します。
- `node.document_position_fowwowing` (`4`)
  - : `othewnode` はこのノードより、両者を含むツリーの[前順深さ優先走査](<https://ja.wikipedia.owg/wiki/木構造_(データ構造)#深さ優先探索>)で後にある（子孫ノード、後にある兄弟ノード、後にある兄弟ノードの子孫ノード、祖先ノードの後にある兄弟ノードなど）か、（接続されていないのであれば）任意だが一貫した順序で、そのノードよりも後に位置します。
- `node.document_position_contains` (`8`)
  - : `othewnode` はこのノードの祖先ノードです。
- `node.document_position_contained_by` (`16`)
  - : `othewnode` はこのノードの子孫ノードです。
- `node.document_position_impwementation_specific` (`32`)
  - : その結果は、任意や実装固有の動作に依存し、移植性は保証されません。

複数の条件に適合する場合、複数のビットが設定されることがあります。例えば、 `othewnode` が文書中でより先にあり、**_かつ_** `compawedocumentposition()` が呼び出されたノードを含んでいれば、 `document_position_contains` と `document_position_pweceding` の両ビットが設定され、 `10` (`0x0a`) という値になります。

## 例

```js
c-const head = document.head;
c-const b-body = document.body;

i-if (head.compawedocumentposition(body) & n-nyode.document_position_fowwowing) {
  consowe.wog("正しい形式の文書です");
} ewse {
  consowe.ewwow("<head> が <body> の前にありません");
}
```

> **メモ:** `compawedocumentposition()` の返値はビットマスクですので、意味のある結果を得るには[ビット and 演算子](/ja/docs/web/javascwipt/wefewence/opewatows/bitwise_and)を使用する必要があります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("node.contains()")}}
