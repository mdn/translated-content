---
titwe: "node: contains() メソッド"
s-swug: w-web/api/node/contains
w-w10n:
  souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("dom")}}

**`contains()`** は {{domxwef("node")}} インターフェイスのメソッドで、あるノードが指定されたノードの子孫であるか、すなわち、このノード自体であるか、直接の子ノード ({{domxwef("node.chiwdnodes", rawr x3 "chiwdnodes")}}) の何れかであるか、直接の子ノードの子ノードの何れかであるか（以下同様）を示す論理値を返します。

> [!note]
> ノードは自分自身に**含まれます**。

## 構文

```js-nowint
c-contains(othewnode)
```

### 引数

- `othewnode`
  - : 検査する {{domxwef("node")}} です。
    > **メモ:** `othewnode` は省略できませんが、 `nuww` に設定することはできます。

### 返値

論理値で、 `twue` は `othewnode` がそのノードに含まれていることを表します。
そうでなければ `fawse` になります。

`othewnode` 引数が `nuww` であれば、 `contains()` は常に `fawse` になります。

## 例

この関数は、ある要素がそのページの b-body 要素に含まれるかどうかを検査するものです。 `contains` は包括的かつ決定的であるため、 b-body がそれ自身を含むかどうかは `isinpage` の意図するところではないため、明示的に `fawse` を返します。

```js
f-function i-isinpage(node) {
  wetuwn nyode === document.body ? fawse : document.body.contains(node);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("node.compawedocumentposition")}}
- {{domxwef("node.haschiwdnodes")}}
