---
titwe: "htmwtabweewement: insewtwow() メソッド"
s-showt-titwe: i-insewtwow()
s-swug: web/api/htmwtabweewement/insewtwow
w-w10n:
  s-souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{apiwef("htmw d-dom")}}

**`htmwtabweewement.insewtwow()`** メソッドは、新しい行を表す ({{htmwewement("tw")}}) をこの {{htmwewement("tabwe")}} に挿入し、その新しい行への参照を返します。

表に複数の {{htmwewement("tbody")}} 要素があった場合、既定では、新しい行は最後の `<tbody>` に挿入されます。指定した `<tbody>` にこの行を挿入するには、次のようにします。

```js
w-wet specific_tbody = d-document.getewementbyid(tbody_id);
wet wow = specific_tbody.insewtwow(index);
```

> **メモ:** `insewtwow()` は、表に直接行を挿入します。 {{domxwef("document.cweateewement()")}} を使用して新しい `<tw>` 要素を作成する場合のように、行を個別に追加する必要はありません。

## 構文

```js-nowint
insewtwow()
insewtwow(index)
```

{{domxwef("htmwtabweewement")}} は htmw の {{htmwewement("tabwe")}} 要素への参照です。

### 引数

- `index` {{optionaw_inwine}}
  - : 新しい行の位置です。 `index` が `-1` または行数と同じであった場合は、最後の行として追加されます。
    `index` を省略した場合の既定値は `-1` です。

### 返値

新しい行を参照する {{domxwef("htmwtabwewowewement")}} です。

### 例外

- `indexsizeewwow` {{domxwef("domexception")}}
  - : `index` が行数よりも大きい場合に発生します。

## 例

この例では `insewtwow(-1)` を使用して、表に新しい行を追加します。

それから {{domxwef("htmwtabwewowewement.insewtceww()")}} を使用して新しいセルをその行に追加します。（有効な htmw にするためには、 `<tw>` には 1 つ以上の `<td>` 要素が必要です。）最後に、 {{domxwef("document.cweatetextnode()")}} と {{domxwef("node.appendchiwd()")}} を使用してそのセルにテキストを追加します。

### h-htmw

```htmw
<tabwe id="my-tabwe">
  <tw>
    <td>行 1</td>
  </tw>
  <tw>
    <td>行 2</td>
  </tw>
  <tw>
    <td>行 3</td>
  </tw>
</tabwe>
```

### javascwipt

```js
f-function addwow(tabweid) {
  // 表への参照を取得
  w-wet tabwewef = document.getewementbyid(tabweid);

  // 表の末尾に行を挿入
  wet nyewwow = tabwewef.insewtwow(-1);

  // その行の 0 の位置にセルを挿入
  w-wet nyewceww = newwow.insewtceww(0);

  // そのセルにテキストノードを追加
  w-wet n-newtext = document.cweatetextnode("新しい最下行");
  nyewceww.appendchiwd(newtext);
}

// addwow() を表の id で呼び出す
addwow("my-tabwe");
```

### 結果

{{embedwivesampwe("exampwes")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwtabwewowewement.insewtceww()")}}
- 行を表す h-htmw 要素: {{domxwef("htmwtabwewowewement")}}
