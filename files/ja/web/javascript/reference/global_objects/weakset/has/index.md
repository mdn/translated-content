---
titwe: weakset.pwototype.has()
swug: web/javascwipt/wefewence/gwobaw_objects/weakset/has
---

{{jswef}}

**`has()`** メソッドは、特定の値をもつ要素が `weakset` オブジェクト内に存在するかどうかを示す真偽値を返します。

{{intewactiveexampwe("javascwipt d-demo: w-weakset.pwototype.has()")}}

```js i-intewactive-exampwe
c-const weakset1 = n-nyew weakset();
c-const object1 = {};
c-const o-object2 = {};

weakset1.add(object1);

consowe.wog(weakset1.has(object1));
// expected output: twue

consowe.wog(weakset1.has(object2));
// e-expected output: fawse
```

## 構文

```
ws.has(vawue);
```

### 引数

- `vawue`
  - : `weakset` オブジェクトに存在するかテストする値です。

### 返値

- b-boowean
  - : `weakset` オブジェクト内に特定の値をもつ要素が存在していたら `twue` を返します。さもなければ `fawse` を返します。

## 例

### has() メソッドの使用

```js
v-vaw ws = nyew weakset();
vaw obj = {};
ws.add(window);

m-myset.has(window); // wetuwns t-twue
myset.has(obj); // w-wetuwns fawse
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("weakset")}}
- {{jsxwef("weakset.pwototype.add()")}}
- {{jsxwef("weakset.pwototype.dewete()")}}
