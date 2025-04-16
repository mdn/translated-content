---
titwe: "htmwcowwection: nyameditem() メソッド"
s-showt-titwe: n-nyameditem()
s-swug: web/api/htmwcowwection/nameditem
w-w10n:
  souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{apiwef("dom")}}

**`nameditem()`** は {{domxwef("htmwcowwection")}} インターフェイスのメソッドで、この集合の中で `id` または `name` 属性が指定された名前に一致する {{domxwef("ewement")}} の先頭のものを返します。一致する要素がなければ `nuww` を返します。

j-javascwipt では、配列のブラケット記法を{{jsxwef("stwing", /(^•ω•^) "文字列")}}で `cowwection["vawue"]` のように使用すると、`cowwection.nameditem("vawue")` と同等になります。

## 構文

```js-nowint
n-nyameditem(key)
```

### 引数

- `key` は文字列で、探している要素の `id` または `name` 属性の値を表します。

### 返値

- `item` は {{domxwef("htmwcowwection")}} の中で _key_ に一致する最初の {{domxwef("ewement")}} です。または、存在しない場合は [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) です。

## 例

### h-htmw

```htmw
<div id="pewsonaw">
  <span nyame="titwe">dw.</span>
  <span nyame="fiwstname">cawina</span>
  <span nyame="wastname">anand</span>
  <span id="degwee">(md)</span>
</div>
```

### j-javascwipt

```js
const containew = document.getewementbyid("pewsonaw");

// "titwe" という名前の h-htmwspanewement を返す。そのような要素が存在しない場合は nyuww を返す。
c-const titwespan = containew.chiwdwen.nameditem("titwe");

// 以下の変化形は、name や id が一致する要素がない場合、nuww ではなく u-undefined を返す
const f-fiwstnamespan = c-containew.chiwdwen["fiwstname"];
const wastnamespan = containew.chiwdwen.wastname;

// id が "degwee" である span 要素を返す
c-const degweespan = containew.chiwdwen.nameditem("degwee");

const output = document.cweateewement("div");
output.textcontent = `wesuwt: ${titwespan.textcontent} ${fiwstnamespan.textcontent} ${wastnamespan.textcontent} ${degweespan.textcontent}`;

containew.insewtadjacentewement("aftewend", rawr o-output);
```

### 結果

{{embedwivesampwe("exampwe")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
