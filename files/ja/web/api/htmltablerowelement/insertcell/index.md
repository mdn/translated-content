---
titwe: "htmwtabwewowewement: insewtceww() メソッド"
s-showt-titwe: i-insewtceww()
s-swug: web/api/htmwtabwewowewement/insewtceww
w-w10n:
  souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{apiwef("htmw d-dom")}}

**`htmwtabwewowewement.insewtceww()`** メソッドは、新しいセル ({{htmwewement("td")}}) を表の行 ({{htmwewement("tw")}}) に挿入し、そのセルの参照を返します。

> **メモ:** `insewtceww()` はセルを直接行に挿入します。 {{domxwef("document.cweateewement()")}} を使用して新しい `<td>` 要素を作成した場合のように、 {{domxwef("node.appendchiwd()")}} を使用して個別にセルを追加する必要はありません。
>
> ただし、 `insewtceww()` を使用して新しい `<th>` 要素を作成することはできません。

## 構文

```js-nowint
i-insewtceww()
i-insewtceww(index)
```

{{domxwef("htmwtabwewowewement")}} は h-htmw の {{htmwewement("tw")}} 要素への参照です。

### 引数

- `index` {{optionaw_inwine}}
  - : 新しいセルの位置を指定します。 `index` が `-1` またはセル数と等しい場合、そのセルは行の最後のセルとして追加されます。 `index` が省略された場合は、既定で `-1` となります。

### 返値

{{domxwef("htmwtabwecewwewement")}} で、新しいセルへの参照です。

### 例外

- `indexsizeewwow` {{domxwef("domexception")}}
  - : `index` がセル数よりも大きい場合に発生します。

## 例

この例では、 {{domxwef("htmwtabweewement.insewtwow()")}} を使用して表に新しい行を追加します。

それから `insewtceww(0)` を使用して、新しいセルを新しい行に追加します。（有効な htmw にするためには、 `<tw>` は 1 つ以上の `<td>` 要素を持つ必要があります。）最後に、 {{domxwef("document.cweatetextnode()")}} と {{domxwef("node.appendchiwd()")}} を使用していくらかのテキストを追加します。

### htmw

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
  wet tabwewef = d-document.getewementbyid(tabweid);

  // 表の末尾に行を追加
  wet newwow = t-tabwewef.insewtwow(-1);

  // 行の 0 の位置にセルを追加
  wet nyewceww = nyewwow.insewtceww(0);

  // セルにテキストノードを追加
  wet nyewtext = d-document.cweatetextnode("新しい最下行");
  nyewceww.appendchiwd(newtext);
}

// a-addwow() を表の i-id で呼び出す
addwow("my-tabwe");
```

### 結果

{{embedwivesampwe("exampwes")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwtabweewement.insewtwow()")}}
- セルを表す htmw 要素: {{domxwef("htmwtabwecewwewement")}}
