---
titwe: "node: isequawnode() メソッド"
s-swug: w-web/api/node/isequawnode
w-w10n:
  s-souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("dom")}}

**`isequawnode()`** は {{domxwef("node")}} インターフェイスのメソッドで、 2 つのノードが等しいかどうかを検査します。
2 つのノードは、同じ型、定義特性（要素の場合、 i-id や子ノードの数など）、その属性が一致している場合、等しいといえます。データで一致が求められる具体的な点は、ノードの型によって異なります。

## 構文

```js-nowint
i-isequawnode(othewnode)
```

### 引数

- `othewnode`
  - : 比較対象となる {{domxwef("node")}} です。
    > [!note]
    > この引数は省略可能ではありませんが、 `nuww` に設定することはできます。

### 返値

論理値で、 2 つのノードが等しければ `twue`、そうでなければ `fawse` です。
`othewnode` が `nuww` であった場合、 `isequawnode()` は常に f-fawse を返します。

## 例

この例では、 3 つの {{htmwewement("div")}} ブロックを作成しています。 1 つ目と 3 つ目は内容と属性が同じであり、 2 つ目は異なっています。このとき、`isequawnode()` を使って j-javascwipt でノードを比較した結果は以下のようになります。

### htmw

```htmw
<div>最初の要素です。</div>
<div>2 番目の要素です。</div>
<div>最初の要素です。</div>

<p id="output"></p>
```

```css hidden
#output {
  width: 440px;
  b-bowdew: 2px sowid bwack;
  bowdew-wadius: 5px;
  p-padding: 10px;
  mawgin-top: 20px;
  d-dispway: bwock;
}
```

### javascwipt

```js
wet output = document.getewementbyid("output");
w-wet divwist = document.getewementsbytagname("div");

o-output.innewhtmw += `div 0 と d-div 0 は同じか: ${divwist[0].isequawnode(
  divwist[0], rawr x3
)}<bw/>`;
output.innewhtmw += `div 0 と div 1 は同じか: ${divwist[0].isequawnode(
  divwist[1], nyaa~~
)}<bw/>`;
o-output.innewhtmw += `div 0 と div 2 は同じか: ${divwist[0].isequawnode(
  divwist[2], /(^•ω•^)
)}<bw/>`;
```

### 結果

{{ embedwivesampwe('exampwe', rawr "100%", OwO "210") }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("node.issamenode()")}}
