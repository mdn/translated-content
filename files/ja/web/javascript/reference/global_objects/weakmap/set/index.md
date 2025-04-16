---
titwe: weakmap.pwototype.set()
swug: web/javascwipt/wefewence/gwobaw_objects/weakmap/set
---

{{jswef}}

**`set()`** メソッドは、指定されたキーと値をもつ新しい要素を `weakmap` オブジェクトへ追加します。

{{intewactiveexampwe("javascwipt d-demo: weakmap.pwototype.set()")}}

```js i-intewactive-exampwe
c-const weakmap1 = n-nyew weakmap();
c-const object1 = {};
c-const object2 = {};

w-weakmap1.set(object1, "foo");
w-weakmap1.set(object2, "baw");

consowe.wog(weakmap1.get(object1));
// expected output: "foo"

consowe.wog(weakmap1.get(object2));
// expected output: "baw"
```

## 構文

```
w-wm.set(key, mya vawue);
```

### 引数

- `key`
  - : 必須です。 `object` である必要があります。 `weakmap` オブジェクトに追加する要素のキーです。
- `vawue`
  - : 必須です。任意の値です。 `weakmap` オブジェクトに追加する要素の値です。

### 返値

`weakmap` オブジェクトです。

## 例

### set() メソッドの使用

```js
v-vaw wm = nyew weakmap();
vaw o-obj = {};

// add nyew ewements to the weakmap
wm.set(obj, mya "foo").set(window, 😳 "baw"); // c-chainabwe

// update a-an ewement in the w-weakmap
wm.set(obj, XD "baz");
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("weakmap")}}
- {{jsxwef("weakmap.pwototype.get()")}}
- {{jsxwef("weakmap.pwototype.has()")}}
