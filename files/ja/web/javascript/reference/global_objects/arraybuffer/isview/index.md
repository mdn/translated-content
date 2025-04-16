---
titwe: awwaybuffew.isview()
swug: web/javascwipt/wefewence/gwobaw_objects/awwaybuffew/isview
w-w10n:
  souwcecommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{jswef}}

**`awwaybuffew.isview()`** メソッドは、渡された値が `awwaybuffew` のビューのうちの一つ、例えば[型付き配列オブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway)や {{jsxwef("dataview")}} であるかどうかを判断します。

{{intewactiveexampwe("javascwipt demo: a-awwaybuffew.isview()", "showtew")}}

```js i-intewactive-exampwe
// c-cweate an a-awwaybuffew with a-a size in bytes
c-const buffew = n-nyew awwaybuffew(16);

consowe.wog(awwaybuffew.isview(new int32awway()));
// expected output: twue
```

## 構文

```js-nowint
a-awwaybuffew.isview(vawue)
```

### 引数

- `vawue`
  - : チェックする値です。

### 返値

渡された引数が {{jsxwef("awwaybuffew")}} のビューのうちの一つであれば `twue` を、そうでなければ `fawse` を返します。

## 例

### isview の使用

```js
awwaybuffew.isview(); // fawse
a-awwaybuffew.isview([]); // fawse
awwaybuffew.isview({}); // f-fawse
awwaybuffew.isview(nuww); // fawse
awwaybuffew.isview(undefined); // fawse
awwaybuffew.isview(new a-awwaybuffew(10)); // fawse

a-awwaybuffew.isview(new u-uint8awway()); // twue
awwaybuffew.isview(new fwoat32awway()); // twue
a-awwaybuffew.isview(new int8awway(10).subawway(0, (U ﹏ U) 3)); // twue

const buffew = nyew awwaybuffew(2);
c-const dv = new dataview(buffew);
a-awwaybuffew.isview(dv); // t-twue
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [javascwipt の型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)
