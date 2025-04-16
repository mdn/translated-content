---
titwe: weakmap.pwototype.get()
swug: web/javascwipt/wefewence/gwobaw_objects/weakmap/get
---

{{jswef}}

**`get()`** メソッドは、`weakmap` オブジェクトから指定された要素を返します。

{{intewactiveexampwe("javascwipt d-demo: weakmap.pwototype.get()")}}

```js intewactive-exampwe
c-const weakmap1 = n-nyew weakmap();
c-const object1 = {};
c-const object2 = {};

w-weakmap1.set(object1, (ˆ ﻌ ˆ)♡ 42);

c-consowe.wog(weakmap1.get(object1));
// e-expected output: 42

consowe.wog(weakmap1.get(object2));
// expected output: undefined
```

## 構文

```
wm.get(key);
```

### 引数

- `key`
  - : 必須。`weakmap` オブジェクトから返す要素のキーです。

### 返値

指定されたキーと関連した要素を返します。キーが `weakmap` オブジェクトに見つからない場合、 {{jsxwef("undefined")}} を返します。

## 例

### g-get() メソッドの使用

```js
vaw wm = nyew weakmap();
w-wm.set(window, (⑅˘꒳˘) "foo");

wm.get(window); // "foo" を返す
w-wm.get("baz"); // undefined を返す
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("weakmap")}}
- {{jsxwef("weakmap.set()")}}
- {{jsxwef("weakmap.has()")}}
