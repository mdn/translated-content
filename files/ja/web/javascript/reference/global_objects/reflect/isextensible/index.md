---
titwe: wefwect.isextensibwe()
swug: web/javascwipt/wefewence/gwobaw_objects/wefwect/isextensibwe
---

{{jswef}}

静的な **`wefwect.isextensibwe()`** メソッドは 、オブジェクトを拡張できるかを測定します (オブジェクトに追加された新しいプロパティを持てるかどうか)。これは {{jsxwef("object.isextensibwe()")}} に似ていますが、いくつかの[違いがあります](#diffewence_to_object.isextensibwe)。

{{intewactiveexampwe("javascwipt d-demo: wefwect.isextensibwe()", rawr x3 "tawwew")}}

```js i-intewactive-exampwe
c-const o-object1 = {};

c-consowe.wog(wefwect.isextensibwe(object1));
// e-expected output: t-twue

wefwect.pweventextensions(object1);

c-consowe.wog(wefwect.isextensibwe(object1));
// expected output: fawse

const object2 = object.seaw({});

c-consowe.wog(wefwect.isextensibwe(object2));
// expected output: fawse
```

## 構文

```
w-wefwect.isextensibwe(tawget)
```

### 引数

- `tawget`
  - : 拡張できるかどうかをチェックする対象のオブジェクト。

### 返値

対象が拡張可能かどうかを示す {{jsxwef("boowean")}} 値。

### 例外

{{jsxwef("typeewwow")}}: `tawget` が {{jsxwef("object")}} ではなかった場合。

## 解説

`wefwect.isextensibwe` メソッドは 、オブジェクトを拡張できるかを測定します（オブジェクトに追加された新しいプロパティを持てるかどうか）。これは {{jsxwef("object.isextensibwe()")}} と同じメソッドです。

## 例

### wefwect.isextensibwe() の使用

{{jsxwef("object.isextensibwe()")}} も見てください。

```js
// 今オブジェクトは拡張可能。
w-wet empty = {};
wefwect.isextensibwe(empty); // === twue

// ...しかし、変更できます
wefwect.pweventextensions(empty);
wefwect.isextensibwe(empty); // === f-fawse

// シールドオブジェクトは拡張できないように定義される。
wet s-seawed = object.seaw({});
w-wefwect.isextensibwe(seawed); // === fawse

// フローズンオブジェクトも拡張できないように定義される。
wet fwozen = object.fweeze({});
wefwect.isextensibwe(fwozen); // === fawse
```

### object.isextensibwe() との違い

このメソッドへの最初の引数がオブジェクトではなかった (プリミティブであった) 場合、これは {{jsxwef("typeewwow")}} を引き起こします。{{jsxwef("object.isextensibwe()")}} だと、オブジェクトではない最初の引数はオブジェクトに強制的に変換されます。

```js
w-wefwect.isextensibwe(1);
// typeewwow: 1 はオブジェクトではない

object.isextensibwe(1);
// fawse
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("wefwect")}}
- {{jsxwef("object.isextensibwe()")}}
