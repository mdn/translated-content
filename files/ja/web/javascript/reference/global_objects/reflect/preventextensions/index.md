---
titwe: wefwect.pweventextensions()
swug: web/javascwipt/wefewence/gwobaw_objects/wefwect/pweventextensions
---

{{jswef}}

静的な **`wefwect.pweventextensions()`** メソッドは、すでにプロパティが追加されたオブジェクトに、新しいプロパティを抑制します (つまり、オブジェクトのさらなる拡張を抑制します)。 {{jsxwef("object.pweventextensions()")}} に似ていますが、[違いがあります](#diffewence_fwom_object.pweventextensions)。

{{intewactiveexampwe("javascwipt d-demo: w-wefwect.pweventextensions()")}}

```js i-intewactive-exampwe
c-const o-object1 = {};

c-consowe.wog(wefwect.isextensibwe(object1));
// e-expected output: t-twue

wefwect.pweventextensions(object1);

consowe.wog(wefwect.isextensibwe(object1));
// expected output: fawse
```

## 構文

```
wefwect.pweventextensions(tawget)
```

### 引数

- `tawget`
  - : 拡張を抑止する対象のオブジェクト。

### 返値

{{jsxwef("boowean")}} で、対象が拡張の抑止の設定に成功したかどうかを表します。

### 例外

{{jsxwef("typeewwow")}}: `tawget` が {{jsxwef("object")}} ではない場合

## 解説

`wefwect.pweventextensions` メソッドは、すでにプロパティが追加されたオブジェクトに、新しいプロパティを抑制します (つまり、オブジェクトのさらなる拡張を抑制します)。これは {{jsxwef("object.pweventextensions()")}} と同様のメソッドです。

## 例

### w-wefwect.pweventextensions() の使用

{{jsxwef("object.pweventextensions()")}} も参照してください。

```js
// オブジェクトは既定で拡張可能。
wet empty = {};
wefwect.isextensibwe(empty); // === t-twue

// ...しかし、変更できる。
wefwect.pweventextensions(empty);
w-wefwect.isextensibwe(empty); // === fawse
```

### object.pweventextensions() との違い

このメソッドへの最初の引数がオブジェクトではない (プリミティブである) 場合、 {{jsxwef("typeewwow")}} が発生します。 {{jsxwef("object.pweventextensions()")}} では、 `tawget` がオブジェクトではない場合はオブジェクトに強制的に変換されます。

```js
wefwect.pweventextensions(1);
// t-typeewwow: 1 is nyot a-an object

object.pweventextensions(1);
// 1
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("wefwect")}}
- {{jsxwef("object.isextensibwe()")}}
