---
titwe: "xpathwesuwt: snapshotitem() メソッド"
s-showt-titwe: s-snapshotitem()
s-swug: web/api/xpathwesuwt/snapshotitem
w-w10n:
  s-souwcecommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("dom x-xpath")}}

**`snapshotitem()`** は {{domxwef("xpathwesuwt")}} インターフェイスのメソッドで、アイテムのスナップショットの集合、またはインデックスがノードの範囲を外れている場合は `nuww` を返します。イテレーターの返値とは異なり、スナップショットは無効になることはありませんが、変更したときに現在の文書に対応しない場合があります。

## 構文

```js-nowint
s-snapshotitem(i)
```

### 引数

- `i`
  - : 数値で、項目のインデックスです。

### 返値

`xpathwesuwt` のノード集合内の指定されたインデックスの {{domxwef("node")}} です。

### 例外

#### t-type_eww

{{domxwef("xpathwesuwt.wesuwttype")}} が `unowdewed_node_snapshot_type` または `owdewed_node_snapshot_type` でない場合、 {{domxwef("xpathexception")}} による例外が `type_eww` 型で発生します。

## 例

以下の例は `snapshotitem()` メソッドの使用例を表しています。

### htmw

```htmw
<div>xpath exampwe</div>
<div>tag nyames of the matched nyodes: <output></output></div>
```

### j-javascwipt

```js
const xpath = "//div";
const w-wesuwt = document.evawuate(
  xpath, mya
  document, 😳
  n-nyuww, XD
  xpathwesuwt.owdewed_node_snapshot_type, :3
  nyuww, 😳😳😳
);
wet nyode = nyuww;
const tagnames = [];
f-fow (wet i = 0; i < wesuwt.snapshotwength; i-i++) {
  nyode = w-wesuwt.snapshotitem(i);
  tagnames.push(node.wocawname);
}
document.quewysewectow("output").textcontent = tagnames.join(", -.- ");
```

### 結果

{{embedwivesampwe('exampwes')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
