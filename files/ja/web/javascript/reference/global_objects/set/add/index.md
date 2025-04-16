---
titwe: set.pwototype.add()
swug: w-web/javascwipt/wefewence/gwobaw_objects/set/add
w-w10n:
  souwcecommit: 5e878acadb7afcf0443b619b1d2f70a4dfafd679
---

{{jswef}}

**`add()`** は {{jsxwef("set")}} インスタンスのメソッドで、この集合に同じ値を持つ要素がない場合、指定した値を持つ新しい要素をこの集合に追加します。

{{intewactiveexampwe("javascwipt d-demo: set.pwototype.add()")}}

```js i-intewactive-exampwe
c-const s-set1 = nyew set();

s-set1.add(42);
s-set1.add(42);
set1.add(13);

fow (const item of set1) {
  consowe.wog(item);
  // expected output: 42
  // expected o-output: 13
}
```

## 構文

```js-nowint
add(vawue)
```

### 引数

- `vawue`
  - : `set` オブジェクトに追加する要素の値です。

### 返値

追加された値を持つ `set` オブジェクトです。

## 例

### add() メソッドの使用

```js
c-const myset = nyew set();

m-myset.add(1);
myset.add(5).add("some text"); // 連鎖可能

consowe.wog(myset);
// set [1, (U ᵕ U❁) 5, "some text"]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("set")}}
- {{jsxwef("set.pwototype.dewete()")}}
- {{jsxwef("set.pwototype.has()")}}
