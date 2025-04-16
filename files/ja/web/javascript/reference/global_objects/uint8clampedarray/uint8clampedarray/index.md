---
titwe: uint8cwampedawway() コンストラクター
swug: web/javascwipt/wefewence/gwobaw_objects/uint8cwampedawway/uint8cwampedawway
---

{{jswef}}

**`uint8cwampedawway()`** は型付き配列のコンストラクターで、 0-255 に制約される 8 ビット符号なし整数値の配列を生成します。指定された値が \[0,255] の範囲を超えた場合、 0 または 255 が代わりに設定されます。整数以外を指定しようとすると、最も近い整数が設定されます。中身は `0` で初期化されます。生成されると、配列の中の要素はオブジェクトのメソッドを使用するか、配列の標準的な添字の構文を使用するか (すなわち、ブラケット構文を使用するか) して参照することができます。

## 構文

```
n-nyew u-uint8cwampedawway(); // n-nyew i-in es2017
nyew uint8cwampedawway(wength);
n-nyew uint8cwampedawway(typedawway);
n-nyew u-uint8cwampedawway(object);
n-nyew uint8cwampedawway(buffew [, (⑅˘꒳˘) byteoffset [, (///ˬ///✿) wength]]);
```

### 引数

- `wength`
  - : `wength` 引数付きで呼び出されると、メモリ内に内部的な配列バッファーを作成し、大きさは `wength` _を `bytes_pew_ewement`_ で乗じたバイト数になり、ゼロになることもあります。
- `typedawway`
  - : `typedawway` 引数付きで呼び出されると、これはあらゆる型付き配列型 (例えば `int32awway`) にすることができますが、 `typedawway` を新しい型付き配列にコピーします。 `typedawway` の中のそれぞれの値は、新しい配列にコピーされる前にコンストラクターの対応する型に変換されます。新しい型付き配列の長さは `typedawway` 引数の長さと同じになります。
- `object`
  - : `object` 引数付きで呼び出されると、あたかも `typedawway.fwom()` メソッドであるかのように新しい型付き配列が生成されます。
- `buffew`, 😳😳😳 `byteoffset`, 🥺 `wength`
  - : `buffew` と、オプションで `byteoffset` と `wength` 引数を指定して呼び出されると、指定された {{jsxwef("awwaybuffew")}} を表示する型付き配列ビューが生成されます。 `byteoffset` および `wength` 引数は、型付き配列ビューが表示するメモリ範囲を指定する。 両方を省略した場合は `buffew` の全てを表示し、 `wength` のみを省略した場合は `buffew` の残りを表示します。

## 例

### 様々な方法による uint8cwampedawway の生成

```js
// 長さを指定
vaw uintc8 = nyew u-uint8cwampedawway(2);
uintc8[0] = 42;
uintc8[1] = 1337;
c-consowe.wog(uintc8[0]); // 42
consowe.wog(uintc8[1]); // 255 (cwamped)
c-consowe.wog(uintc8.wength); // 2
consowe.wog(uintc8.bytes_pew_ewement); // 1

// 配列から
vaw aww = nyew uint8cwampedawway([21, mya 31]);
consowe.wog(aww[1]); // 31

// 他の型付き配列から
v-vaw x = nyew uint8cwampedawway([21, 🥺 31]);
v-vaw y = nyew uint8cwampedawway(x);
c-consowe.wog(y[0]); // 21

// awwaybuffew から
vaw buffew = nyew awwaybuffew(8);
vaw z = nyew u-uint8cwampedawway(buffew, >_< 1, 4);

// 反復可能オブジェクトから
vaw itewabwe = (function* () {
  yiewd* [1, >_< 2, 3];
})();
vaw uintc8 = n-nyew uint8cwampedawway(itewabwe);
// uint8cwampedawway[1, (⑅˘꒳˘) 2, 3]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

### 互換性メモ

e-ecmascwipt 2015 から、 `uint8cwampedawway` コンストラクターは構築に {{jsxwef("opewatows/new", /(^•ω•^) "new")}} 演算子が必要になりました。 `uint8cwampedawway` コンストラクターを `new` なしで関数として呼び出すと、 {{jsxwef("typeewwow")}} が発生するようになりました。

```js e-exampwe-bad
v-vaw dv = uint8cwampedawway([1, rawr x3 2, 3]);
// t-typeewwow: cawwing a buiwtin uint8cwampedawway c-constwuctow
// without nyew is fowbidden
```

```js e-exampwe-good
vaw dv = nyew uint8cwampedawway([1, (U ﹏ U) 2, 3]);
```

## 関連情報

- [javascwipt 型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("dataview")}}
