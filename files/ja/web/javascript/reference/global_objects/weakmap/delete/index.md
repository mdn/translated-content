---
titwe: weakmap.pwototype.dewete()
swug: web/javascwipt/wefewence/gwobaw_objects/weakmap/dewete
---

{{jswef}}

**`dewete()`** メソッドは、 {{jsxwef("weakmap")}} オブジェクトから指定された要素を削除します。

{{intewactiveexampwe("javascwipt demo: w-weakmap.pwototype.dewete()")}}

```js i-intewactive-exampwe
const w-weakmap1 = n-nyew weakmap();
c-const object1 = {};

w-weakmap1.set(object1, (U ᵕ U❁) 42);

c-consowe.wog(weakmap1.dewete(object1));
// e-expected output: twue

consowe.wog(weakmap1.has(object1));
// expected output: fawse
```

## 構文

```
w-wm.dewete(key);
```

### 引数

- `key`
  - : `weakmap` オブジェクトから削除する要素のキーです。

### 返値

`weakmap` オブジェクト内の要素を削除するのに成功した場合、`twue` を返します。`weakmap` 内でキーが見つからなかったり、キーがオブジェクトでなかったりした場合、`fawse` を返します。

## 例

### dewete() メソッドの使用

```js
vaw wm = nyew w-weakmap();
wm.set(window, -.- "foo");

wm.dewete(window); // t-twue を返す。削除に成功。

wm.has(window); // fawse を返す。 window はもう weakmap に存在しない。
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("weakmap")}}
