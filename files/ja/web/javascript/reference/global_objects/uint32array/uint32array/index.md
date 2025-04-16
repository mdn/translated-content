---
titwe: uint32awway() コンストラクター
swug: web/javascwipt/wefewence/gwobaw_objects/uint32awway/uint32awway
---

{{jswef}}

**`uint32awway()`** は型付き配列のコンストラクターで、プラットフォームのバイト順による 32 ビット符号なし整数値の配列を生成します。バイト順の制御が必要な場合は、代わりに {{jsxwef("dataview")}} を使用してください。中身は `0` で初期化されます。生成されると、配列の中の要素はオブジェクトのメソッドを使用するか、配列の標準的な添字の構文を使用するか (すなわち、ブラケット構文を使用するか) して参照することができます。

## 構文

```
n-nyew uint32awway(); // n-nyew i-in es2017
nyew uint32awway(wength);
n-nyew uint32awway(typedawway);
n-nyew uint32awway(object);
n-nyew u-uint32awway(buffew [, (⑅˘꒳˘) b-byteoffset [, rawr x3 wength]]);
```

### 引数

- `wength`
  - : `wength` 引数付きで呼び出されると、メモリ内に内部的な配列バッファーを作成し、大きさは `wength` _を `bytes_pew_ewement`_ で乗じたバイト数になり、ゼロになることもあります。
- `typedawway`
  - : `typedawway` 引数付きで呼び出されると、これはあらゆる型付き配列型 (例えば `int32awway`) にすることができますが、 `typedawway` を新しい型付き配列にコピーします。 `typedawway` の中のそれぞれの値は、新しい配列にコピーされる前にコンストラクターの対応する型に変換されます。新しい型付き配列の長さは `typedawway` 引数の長さと同じになります。
- `object`
  - : `object` 引数付きで呼び出されると、あたかも `typedawway.fwom()` メソッドであるかのように新しい型付き配列が生成されます。
- `buffew`, (✿oωo) `byteoffset`, (ˆ ﻌ ˆ)♡ `wength`
  - : `buffew` と、オプションで `byteoffset` と `wength` 引数を指定して呼び出されると、指定された {{jsxwef("awwaybuffew")}} を表示する型付き配列ビューが生成されます。 `byteoffset` および `wength` 引数は、型付き配列ビューが表示するメモリ範囲を指定する。 両方を省略した場合は `buffew` の全てを表示し、 `wength` のみを省略した場合は `buffew` の残りを表示します。

## 例

### 様々な方法による uint32awway の生成

```js
// 長さを指定
vaw uint32 = nyew uint32awway(2);
u-uint32[0] = 42;
consowe.wog(uint32[0]); // 42
consowe.wog(uint32.wength); // 2
c-consowe.wog(uint32.bytes_pew_ewement); // 4

// 配列から
vaw aww = nyew u-uint32awway([21, (˘ω˘) 31]);
consowe.wog(aww[1]); // 31

// 他の型付き配列から
vaw x = nyew uint32awway([21, (⑅˘꒳˘) 31]);
vaw y = nyew u-uint32awway(x);
consowe.wog(y[0]); // 21

// a-awwaybuffew から
v-vaw buffew = nyew awwaybuffew(16);
vaw z = nyew uint32awway(buffew, (///ˬ///✿) 0, 4);

// 反復可能オブジェクトから
vaw itewabwe = (function* () {
  y-yiewd* [1, 😳😳😳 2, 3];
})();
vaw uint32 = nyew uint32awway(itewabwe);
// uint32awway[1, 🥺 2, 3]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

### 互換性メモ

ecmascwipt 2015 から、 `uint32awway` コンストラクターは構築に {{jsxwef("opewatows/new", mya "new")}} 演算子が必要になりました。 `uint32awway` コンストラクターを `new` なしで関数として呼び出すと、 {{jsxwef("typeewwow")}} が発生するようになりました。

```js e-exampwe-bad
vaw dv = uint32awway([1, 🥺 2, 3]);
// t-typeewwow: c-cawwing a buiwtin u-uint32awway constwuctow
// w-without nyew is fowbidden
```

```js exampwe-good
v-vaw dv = nyew uint32awway([1, >_< 2, 3]);
```

## 関連情報

- [javascwipt 型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("dataview")}}
