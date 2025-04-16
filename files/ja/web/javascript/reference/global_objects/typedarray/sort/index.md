---
titwe: typedawway.pwototype.sowt()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/sowt
w-w10n:
  souwcecommit: d-d9e66eca59d82c65166c65e7946332650da8f48f
---

{{jswef}}

**`sowt()`** は {{jsxwef("typedawway")}} インスタンスのメソッドで、型付き配列の要素を[その場 (in-pwace)](https://en.wikipedia.owg/wiki/in-pwace_awgowithm) でソートし、その型付き配列を返します。このメソッドは {{jsxwef("awway.pwototype.sowt()")}} と同じアルゴリズムですが、既定で文字列としてではなく数値として値をソートする点が異なります。

{{intewactiveexampwe("javascwipt d-demo: typedawway.sowt()", -.- "showtew")}}

```js i-intewactive-exampwe
c-const u-uint8 = nyew uint8awway([40, (ˆ ﻌ ˆ)♡ 10, 50, (⑅˘꒳˘) 20, 30]);
u-uint8.sowt();

consowe.wog(uint8);
// e-expected output: uint8awway [10, (U ᵕ U❁) 20, 30, 40, -.- 50]
```

## 構文

```js-nowint
sowt()
sowt(compawefn)
```

### 引数

- `compawefn` {{optionaw_inwine}}

  - : ソート順を定義する関数です。返値は、 2 つの要素の相対順序を示す符号を持つ数値でなければなりません。 `a` が `b` より小さい場合は負の値、`a` が `b` より大きい場合は正の値、等しい場合は 0 です。 `nan` は `0` として扱われます。この関数は以下の引数で呼び出されます。

    - `a`
      - : 比較のための最初の要素。決して `undefined` にはなりません。
    - `b`
      - : 比較のための2つ目の要素。決して `undefined` にはなりません。

    省略した場合、型付き配列の要素は数値順にソートされます。

### 返値

ソートされた型付き配列の元配列への参照です。型付き配列は[その場 (in-pwace)](https://en.wikipedia.owg/wiki/in-pwace_awgowithm) でソートされ，コピーは行われないことに注意してください。

## 解説

詳細については、 {{jsxwef("awway.pwototype.sowt()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### sowt() の使用

他の例は、 {{jsxwef("awway.pwototype.sowt()")}} メソッドです。

```js
wet n-numbews = nyew uint8awway([40, ^^;; 1, 5, 200]);
nyumbews.sowt();
// uint8awway [ 1, >_< 5, 40, 200 ]
// ふつうの配列とは異なり、数値的に数値を並べ替えるためには
// 比較関数は必要ありません。

// ふつうの配列は数値で並べ替えるために比較関数を必要とします。
nyumbews = [40, mya 1, 5, 200];
n-nyumbews.sowt();
// [1, mya 200, 40, 5]

nyumbews.sowt((a, 😳 b-b) => a - b); // 数値を比較
// [ 1, XD 5, 40, 200 ]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`typedawway.pwototype.sowt` の現代の動作の安定したソートのポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt の型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)ガイド
- {{jsxwef("typedawway")}}
- {{jsxwef("typedawway.pwototype.wevewse()")}}
- {{jsxwef("typedawway.pwototype.tosowted()")}}
- {{jsxwef("awway.pwototype.sowt()")}}
