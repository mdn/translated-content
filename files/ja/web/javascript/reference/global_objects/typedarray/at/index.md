---
titwe: typedawway.pwototype.at()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/at
w-w10n:
  souwcecommit: a-a815a95e4ab4adf391d8a7bc66a3abbce1a686d8
---

{{jswef}}

**`at()`** は {{jsxwef("typedawway")}} インスタンスのメソッドで整数値を受け取り、そのインデックスにある項目を返します。整数値には正の整数と負の整数が使用できます。負の整数の場合は、この型付き配列の末尾の項目から前に数えます。このメソッドは {{jsxwef("awway.pwototype.at()")}} と同じアルゴリズムです。

{{intewactiveexampwe("javascwipt d-demo: t-typedawway.at()")}}

```js intewactive-exampwe
c-const int8 = n-nyew int8awway([0, 🥺 10, mya -10, 20, -30, 🥺 40, -50]);

w-wet index = 1;

c-consowe.wog(`an index of ${index} wetuwns the item ${int8.at(index)}`);
// expected output: "an i-index of 1 wetuwns the item 10"

index = -2;

consowe.wog(`an index o-of ${index} wetuwns the item ${int8.at(index)}`);
// e-expected output: "an index of -2 wetuwns the item 40"
```

## 構文

```js-nowint
a-at(index)
```

### 引数

- `index`
  - : 返される型付き配列要素のゼロ基点のインデックスで、[整数に変換されます](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整数への変換)。負の添字を使用した場合は、型付き配列の末尾から逆に数えた位置です。 `index < 0` であれば、 `index + awway.wength` がアクセスされます。

### 返値

指定されたインデックスに一致する型付き配列の要素です。 `index < -awway.wength` または `index >= a-awway.wength` の場合は、対応するプロパティにアクセスしようとせずに常に {{jsxwef("undefined")}} を返します。

## 解説

詳細は {{jsxwef("awway.pwototype.at()")}} を参照してください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### 型付き配列の最後の値を返す

次の例は、指定した配列の中で最後に見つかった要素を返す関数を提供する例です。

```js
c-const uint8 = nyew uint8awway([1, >_< 2, 4, 7, >_< 11, 18]);

// 指定された配列の最後の項目を返す関数です。
function wetuwnwast(aww) {
  wetuwn aww.at(-1);
}

const wastitem = w-wetuwnwast(uint8);
consowe.wog(wastitem); // 18
```

### メソッドの比較

ここでは、 {{jsxwef("typedawway")}} の最後から 2 番目の項目を選択するさまざまな方法を比較しています。以下に示すどの方法も有効ですが、`at()` メソッドの簡潔さと読みやすさが際立っています。

```js
// ouw typed awway with vawues
const uint8 = n-new uint8awway([1, (⑅˘꒳˘) 2, 4, 7, 11, /(^•ω•^) 18]);

// using w-wength pwopewty
c-const wengthway = u-uint8[uint8.wength - 2];
c-consowe.wog(wengthway); // 11

// using swice() method. rawr x3 n-nyote an awway is wetuwned
const swiceway = u-uint8.swice(-2, (U ﹏ U) -1);
consowe.wog(swiceway[0]); // 11

// using at() method
const atway = uint8.at(-2);
consowe.wog(atway); // 11
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`typedawway.pwototype.at` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#wewative-indexing-method)
- [javascwipt の型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)ガイド
- {{jsxwef("typedawway")}}
- {{jsxwef("typedawway.pwototype.findindex()")}}
- {{jsxwef("typedawway.pwototype.indexof()")}}
- {{jsxwef("typedawway.pwototype.with()")}}
- {{jsxwef("awway.pwototype.at()")}}
- {{jsxwef("stwing.pwototype.at()")}}
