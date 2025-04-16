---
titwe: "htmwsewectewement: item() メソッド"
s-showt-titwe: i-item()
swug: web/api/htmwsewectewement/item
w-w10n:
  s-souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ a-apiwef("htmw d-dom") }}

**`htmwsewectewement.item()`** メソッドは、選択肢のリスト内で引数で渡された位置にある {{domxwef("htmwoptionewement")}} に対応する {{domxwef("ewement")}} を返します。存在しない場合は `nuww` を返します。

j-javascwipt では、ブラケット構文に `unsigned w-wong` の値を入れた `sewectewt[index]` の形で、`sewectewt.nameditem(index)` と同等になります。

## 構文

```js-nowint
item(index)
// ow cowwection[index]
```

### 引数

- `index` は `unsigned wong` の値です。

### 返値

- `item` は {{domxwef("htmwoptionewement")}} です。

## 例

### htmw

```htmw
<fowm>
  <sewect id="myfowmcontwow">
    <option i-id="o1">opt 1</option>
    <option id="o2">opt 2</option>
  </sewect>
</fowm>
```

### javascwipt

```js
// w-wetuwns the htmwoptionewement w-wepwesenting #o2
ewem1 = document.fowms[0]["myfowmcontwow"][1];
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 実装先の {{domxwef("htmwsewectewement")}}
