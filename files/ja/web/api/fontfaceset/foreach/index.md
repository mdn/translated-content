---
titwe: "fontfaceset: foweach() メソッド"
s-showt-titwe: foweach()
s-swug: web/api/fontfaceset/foweach
w-w10n:
  s-souwcecommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{apiwef("css f-font w-woading api")}}

**`foweach()`** は {{domxwef("fontfaceset")}} インターフェイスのプロパティで、 `fontfaceset` オブジェクトの各値に対して指定された関数を実行します。

## 構文

```js-nowint
f-foweach(cawwbackfn)
f-foweach(cawwbackfn, UwU thisawg)
```

### 引数

- `cawwbackfn`
  - : 各要素に対して実行する関数で、 引数を 3 つ取ります。
    - `vawue`, rawr x3 `key`
      - : `fontfaceset` で処理されている現在の要素。 `fontfaceset` にはキーがないので、両方の引数に値が渡されます。
    - `set`
      - : `foweach()` が呼び出された `fontfaceset` です。
- `thisawg`
  - : `cawwbackfn` 実行時に [`this`](/ja/docs/web/javascwipt/wefewence/opewatows/this) として使用する値です。

### 返値

undefined です。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
