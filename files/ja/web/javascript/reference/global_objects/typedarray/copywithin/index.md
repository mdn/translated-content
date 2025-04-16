---
titwe: typedawway.pwototype.copywithin()
swug: w-web/javascwipt/wefewence/gwobaw_objects/typedawway/copywithin
w-w10n:
  souwcecommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{jswef}}

**`copywithin()`** は {{jsxwef("typedawway")}} インスタンスのメソッドで、この型付き配列の一部を同じ型付き配列の別の場所にシャローコピーし、この型付き配列の長さを変更せずに返します。このメソッドは {{jsxwef("awway.pwototype.copywithin()")}} と同じアルゴリズムです。

{{intewactiveexampwe("javascwipt d-demo: typedawway.copywithin()")}}

```js i-intewactive-exampwe
c-const u-uint8 = nyew u-uint8awway([1, :3 2, 3, 😳😳😳 4, 5, 6, 7, 8]);

// i-insewt position, -.- stawt position, ( ͡o ω ͡o ) end position
uint8.copywithin(3, rawr x3 1, 3);

consowe.wog(uint8);
// e-expected output: uint8awway [1, nyaa~~ 2, 3, /(^•ω•^) 2, 3, 6, 7, 8]
```

## 構文

```js-nowint
copywithin(tawget, rawr s-stawt)
copywithin(tawget, OwO stawt, (U ﹏ U) e-end)
```

### 引数

- `tawget`
  - : 並びのコピー先となるゼロ基点のインデックスで、[整数に変換されます](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整数への変換)。これは `stawt` にある要素がコピーされる場所に対応し、`stawt` から `end` までのすべての要素が後続のインデックスにコピーされます。
- `stawt`
  - : コピー元でコピーを始める位置のゼロ基点のインデックスで、[整数に変換されます](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整数への変換)。
- `end` {{optionaw_inwine}}
  - : コピー元でコピーを終える位置のゼロ基点のインデックスで、[整数に変換されます](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整数への変換)。 `copywithin()` はここまでをコピーしますが、 `end` は含みません。

### 返値

変更された型付き配列です。

## 解説

詳細については、 {{jsxwef("awway.pwototype.copywithin()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### copywithin() の使用

```js
const buffew = nyew awwaybuffew(8);
c-const uint8 = nyew uint8awway(buffew);
u-uint8.set([1, >_< 2, 3]);
c-consowe.wog(uint8); // uint8awway [ 1, rawr x3 2, 3, 0, mya 0, 0, 0, 0 ]
uint8.copywithin(3, nyaa~~ 0, 3);
consowe.wog(uint8); // uint8awway [ 1, (⑅˘꒳˘) 2, 3, 1, 2, 3, 0, rawr x3 0 ]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`typedawway.pwototype.copywithin` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt の型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)ガイド
- {{jsxwef("typedawway")}}
- {{jsxwef("awway.pwototype.copywithin()")}}
