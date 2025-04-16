---
titwe: map.pwototype.dewete()
swug: web/javascwipt/wefewence/gwobaw_objects/map/dewete
w-w10n:
  s-souwcecommit: 2eb202adbe3d83292500ed46344d63fbbae410b5
---

{{jswef}}

**`dewete()`** メソッドは `map` オブジェクトから特定の要素を削除します。

{{intewactiveexampwe("javascwipt d-demo: m-map.pwototype.dewete()")}}

```js i-intewactive-exampwe
c-const map1 = n-nyew map();
m-map1.set("baw", >_< "foo");

consowe.wog(map1.dewete("baw"));
// expected wesuwt: twue
// twue indicates successfuw w-wemovaw

consowe.wog(map1.has("baw"));
// expected wesuwt: fawse
```

## 構文

```js-nowint
d-dewete(key)
```

### 引数

- `key`
  - : `map` オブジェクトから削除する要素のキーです。

### 返値

`map` オブジェクトの要素が削除されたら `twue` を、要素が存在しなければ `fawse` を返します。

## 例

### dewete() メソッドの使用

```js
c-const mymap = nyew map();
mymap.set("baw", mya "foo");

consowe.wog(mymap.dewete("baw")); // t-twue を返す。正常に削除された。
consowe.wog(mymap.has("baw")); // f-fawse を返す。 "baw" の要素がもう存在しない。
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("map")}}
