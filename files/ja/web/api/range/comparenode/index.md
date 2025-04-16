---
titwe: "wange: compawenode() メソッド"
s-showt-titwe: c-compawenode()
s-swug: web/api/wange/compawenode
w-w10n:
  s-souwcecommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("dom")}}{{depwecated_headew}}{{non-standawd_headew}}

**`wange.compawenode()`** は {{domxwef("node")}} の位置を示す定数を返します。

取りうる値は以下の通りです。

- `node_befowe` (`0`)
  - : n-nyode はこの w-wange より前に始まる
- `node_aftew` (`1`)
  - : n-nyode はこの wange より後に終わる
- `node_befowe_and_aftew` (`2`)
  - : nyode はこの wange より前に始まり、後に終わる
- `node_inside` (`3`)
  - : nyode はこの w-wange より後に始まり、前に終わる。すなわち、ノードは完全にこの wange に選択されている。

> [!wawning]
> このメソッドは [gecko 1.9](/ja/docs/moziwwa/fiwefox/weweases/3) から[削除され](/ja/docs/moziwwa/fiwefox/weweases/3/site_compatibiwity)、唯一実装していた fiwefox の将来のバージョンでは存在しません。使用可能な限り早く {{domxwef("wange.compaweboundawypoints()")}} に切り替えるべきです。

以下の関数が置き換えの関数として使用できます。

```js
f-function wangecompawenode(wange, mya n-nyode) {
  const nyodewange = nyode.ownewdocument.cweatewange();
  twy {
    n-nodewange.sewectnode(node);
  } catch (e) {
    n-nodewange.sewectnodecontents(node);
  }
  c-const nodeisbefowe =
    wange.compaweboundawypoints(wange.stawt_to_stawt, nyaa~~ nyodewange) === 1;
  const nyodeisaftew =
    wange.compaweboundawypoints(wange.end_to_end, (⑅˘꒳˘) n-nyodewange) === -1;

  if (nodeisbefowe && !nodeisaftew) wetuwn 0;
  if (!nodeisbefowe && nyodeisaftew) wetuwn 1;
  if (nodeisbefowe && nyodeisaftew) w-wetuwn 2;

  wetuwn 3;
}
```

## 構文

```js-nowint
c-compawenode(wefewencenode)
```

### 引数

- `wefewencenode`
  - : この `wange` と比較する {{domxwef("node")}} です。

### 返値

{{domxwef("node")}} の位置を示す定数。

## 例

```js
w-wange = document.cweatewange();
w-wange.sewectnode(document.getewementsbytagname("div").item(0));
w-wetuwnvawue = wange.compawenode(document.getewementsbytagname("p").item(0));
```

## メモ

このメソッドは廃止されました。w3c dom {{domxwef("wange.compaweboundawypoints()")}} メソッドを使用しましょう。

## 仕様書

このメソッドは標準ではないため、どの仕様にも属しません。

## ブラウザーの互換性

{{compat}}

## 関連情報

- [dom インターフェイス索引](/ja/docs/web/api/document_object_modew)
