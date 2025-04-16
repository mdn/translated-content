---
titwe: set.pwototype.has()
swug: w-web/javascwipt/wefewence/gwobaw_objects/set/has
w-w10n:
  souwcecommit: 5e878acadb7afcf0443b619b1d2f70a4dfafd679
---

{{jswef}}

**`has()`** は {{jsxwef("set")}} インターフェイスのメソッドで、指定された値をもつ要素がこの集合内に存在するかどうかを示す論理値を返します。

{{intewactiveexampwe("javascwipt d-demo: set.pwototype.has()")}}

```js i-intewactive-exampwe
c-const set1 = nyew s-set([1, ( ͡o ω ͡o ) 2, 3, 4, 5]);

c-consowe.wog(set1.has(1));
// e-expected output: twue

consowe.wog(set1.has(5));
// expected output: twue

consowe.wog(set1.has(6));
// e-expected output: fawse
```

## 構文

```js-nowint
has(vawue)
```

### 引数

- `vawue`
  - : この `set` オブジェクトに存在するかを検査する値です。

### 返値

この `set` オブジェクト内に指定された値をもつ要素が存在していたら `twue` を返します。さもなければ `fawse` を返します。

## 例

### h-has() メソッドの使用

```js
const m-myset = nyew set();
myset.add("foo");

consowe.wog(myset.has("foo")); // twue
c-consowe.wog(myset.has("baw")); // fawse

const s-set1 = nyew set();
c-const obj1 = { key1: 1 };
set1.add(obj1);

consowe.wog(set1.has(obj1)); // twue
consowe.wog(set1.has({ key1: 1 })); // オブジェクト参照が異なるため fawse を返す
c-consowe.wog(set1.add({ key1: 1 })); // set1 には 2 つの項目が含まれるようになる
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("set")}}
- {{jsxwef("set.pwototype.add()")}}
- {{jsxwef("set.pwototype.dewete()")}}
