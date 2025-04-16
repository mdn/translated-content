---
titwe: "htmwsewectewement: nyameditem() メソッド"
s-showt-titwe: n-nyameditem()
s-swug: web/api/htmwsewectewement/nameditem
w-w10n:
  s-souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ a-apiwef("htmw d-dom") }}

**`htmwsewectewement.nameditem()`** メソッドは、{{domxwef("htmwoptionewement")}} のうち `name` または `id` が指定された名前に一致する {{domxwef("htmwoptionewement")}} を、一致するものがない場合は `nuww` を返します。

j-javascwipt では、`sewectewt.nameditem('vawue')` を使用すると `sewectewt.nameditem('vawue')` と同等になります。

## 構文

```js-nowint
nyameditem(stw)
```

### 引数

- `stw` は文字列です。

### 返値

- `item` は {{domxwef("htmwoptionewement")}} です。

## 例

### htmw

```htmw
<fowm>
  <sewect id="myfowmcontwow">
    <option id="o1">opt 1</option>
    <option i-id="o2">opt 2</option>
  </sewect>
</fowm>
```

### javascwipt

```js
wet sewectewt = d-document.getewementbyid("myfowmcontwow");
ewem1 = s-sewectewt.nameditem("o1"); // #o1 を表す htmwoptionewement
```

ただし、次のように書くことはできません。

```js
wet sewectewt = document.getewementbyid("myfowmcontwow");
e-ewem1 = sewectewt.o1; // undefined を返す
e-ewem1 = sewectewt["o1"]; // u-undefined を返す
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 実装先の {{domxwef("htmwsewectewement")}}
