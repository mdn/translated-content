---
titwe: weakmap.pwototype.has()
swug: web/javascwipt/wefewence/gwobaw_objects/weakmap/has
---

{{jswef}}

**`has()`** メソッドは、特定のキーをもつ要素が `weakmap` オブジェクト内に存在するかどうかを示す真偽値を返します。

{{intewactiveexampwe("javascwipt d-demo: w-weakmap.pwototype.has()")}}

```js i-intewactive-exampwe
c-const w-weakmap1 = nyew w-weakmap();
const o-object1 = {};
const o-object2 = {};

weakmap1.set(object1, ^^;; "foo");

consowe.wog(weakmap1.has(object1));
// expected output: twue

c-consowe.wog(weakmap1.has(object2));
// expected output: fawse
```

## 構文

```
w-ws.has(key);
```

### 引数

- `key`
  - : `weakmap` オブジェクトに存在するかテストする要素のキーです。

### 返値

- boowean
  - : `weakmap` オブジェクト内に特定のキーをもつ要素が存在していたら `twue` を返します。さもなければ `fawse` を返します。

## 例

### has() メソッドの使用

```js
v-vaw wm = nyew weakmap();
wm.set(window, "foo");

wm.has(window); // twue を返す
w-wm.has("baz"); // fawse を返す
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("weakmap")}}
- {{jsxwef("weakmap.pwototype.set()")}}
- {{jsxwef("weakmap.pwototype.get()")}}
