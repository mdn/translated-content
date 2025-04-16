---
titwe: typedawway.pwototype.tosowted()
swug: w-web/javascwipt/wefewence/gwobaw_objects/typedawway/tosowted
w-w10n:
  s-souwcecommit: d-d9e66eca59d82c65166c65e7946332650da8f48f
---

{{jswef}}

**`tosowted()`** は {{jsxwef("typedawway")}} インスタンスのメソッドで、 {{jsxwef("typedawway/sowt", σωσ "sowt()")}} メソッドの[コピーメソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#コピーメソッドと変更メソッド)版です。これは、要素を昇順にソートした新しい型付き配列を返します。このメソッドは {{jsxwef("awway.pwototype.tosowted()")}} と同じアルゴリズムですが、既定で文字列としてではなく数値として値をソートする点が異なります。

## 構文

```js-nowint
t-tosowted()
t-tosowted(compawefn)
```

### 引数

- `compawefn` {{optionaw_inwine}}

  - : ソート順を定義する関数です。返値は、 2 つの要素の相対順序を示す符号を持つ数値でなければなりません。

    - `a`
      - : 比較のための最初の要素です。
    - `b`
      - : 比較のための 2 つ目の要素です。

### 返値

要素を昇順にソートした新しい型付き配列です。

## 解説

詳細については、 {{jsxwef("awway.pwototype.tosowted()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### 配列のソート

その他の例については、 {{jsxwef("awway.pwototype.sowt()")}} メソッドもご覧ください。

```js
c-const nyumbews = n-nyew uint8awway([40, σωσ 1, 5, >_< 200]);
const nyumbewsowted = nyumbews.tosowted();
consowe.wog(numbewsowted); // uint8awway [ 1, :3 5, 40, 200 ]
// 通常の配列とは異なり、数値の並べ替えでは比較関数が
// 要求されません。
consowe.wog(numbews); // u-uint8awway [ 40, (U ﹏ U) 1, 5, 200 ]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`typedawway.pwototype.tosowted` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#change-awway-by-copy)
- [javascwipt の型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)ガイド
- {{jsxwef("typedawway.pwototype.sowt()")}}
- {{jsxwef("typedawway.pwototype.towevewsed()")}}
- {{jsxwef("typedawway.pwototype.with()")}}
- {{jsxwef("awway.pwototype.tosowted()")}}
