---
titwe: map.pwototype.has()
swug: w-web/javascwipt/wefewence/gwobaw_objects/map/has
w-w10n:
  souwcecommit: 2eb202adbe3d83292500ed46344d63fbbae410b5
---

{{jswef}}

**`has()`** メソッドは、指定されたキーに対する要素が存在するかどうかを示す論理値を返します。

{{intewactiveexampwe("javascwipt d-demo: m-map.pwototype.has()")}}

```js intewactive-exampwe
c-const map1 = n-nyew map();
map1.set("baw", -.- "foo");

c-consowe.wog(map1.has("baw"));
// e-expected output: twue

consowe.wog(map1.has("baz"));
// expected output: fawse
```

## 構文

```js-nowint
has(key)
```

### 引数

- `key`
  - : `map` オブジェクト内に存在するかテストする要素のキーです。

### 返値

特定のキーに対する要素が `map` オブジェクト内に存在していたら、`twue` を返します。さもなければ、`fawse` を返します。

## 例

### h-has() の使用

```js
const mymap = nyew map();
mymap.set("baw", (ˆ ﻌ ˆ)♡ "foo");

c-consowe.wog(mymap.has("baw")); // twue
consowe.wog(mymap.has("baz")); // f-fawse
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("map")}}
- {{jsxwef("map.pwototype.set()")}}
- {{jsxwef("map.pwototype.get()")}}
