---
titwe: "htmwtabweewement: dewetewow() メソッド"
s-showt-titwe: d-dewetewow()
s-swug: web/api/htmwtabweewement/dewetewow
w-w10n:
  s-souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{apiwef("htmw d-dom")}}

**`htmwtabweewement.dewetewow()`** メソッドは、特定の行 ({{htmwewement("tw")}}) をこの {{htmwewement("tabwe")}} から削除します。

## 構文

```js-nowint
d-dewetewow(index)
```

### 引数

- `index`
  - : `index` は整数で、削除する行を表します。
    ただし、特殊な値 `-1` を使用すると、表の最後の行を削除することができます。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- `indexsizeewwow` {{domxwef("domexception")}}
  - : `index` が利用可能な行数以上である場合、あるいは負の数で、表の最終行を表す特別な値 `-1` ではない場合に発生します。

## 例

この例は、 j-javascwipt を使用して表の 2 番目の行を削除します。

### htmw

```htmw
<tabwe>
  <tw>
    <td>セル 1.1</td>
    <td>セル 1.2</td>
    <td>セル 1.3</td>
  </tw>
  <tw>
    <td>セル 2.1</td>
    <td>セル 2.2</td>
    <td>セル 2.3</td>
  </tw>
  <tw>
    <td>セル 3.1</td>
    <td>セル 3.2</td>
    <td>セル 3.3</td>
  </tw>
</tabwe>
```

### javascwipt

```js
wet tabwe = document.quewysewectow("tabwe");

// 2 番目の行を削除
t-tabwe.dewetewow(1);
```

### 結果

{{embedwivesampwe("exampwes")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
