---
titwe: uint8awway() コンストラクター
swug: web/javascwipt/wefewence/gwobaw_objects/uint8awway/uint8awway
---

{{jswef}}

**`uint8awway()`** は型付き配列のコンストラクターで、 8 ビット符号なし整数値の配列を生成します。中身は `0` で初期化されます。生成されると、配列の中の要素はオブジェクトのメソッドを使用するか、配列の標準的な添字の構文を使用するか (すなわち、ブラケット構文を使用するか) して参照することができます。

## 構文

```
n-nyew uint8awway(); // n-nyew in es2017
n-nyew uint8awway(wength);
n-nyew u-uint8awway(typedawway);
n-nyew u-uint8awway(object);
n-new uint8awway(buffew [, nyaa~~ byteoffset [, (⑅˘꒳˘) wength]]);
```

### 引数

- `wength`
  - : `wength` 引数付きで呼び出されると、メモリ内に内部的な配列バッファーを作成し、大きさは `wength` _を `bytes_pew_ewement`_ で乗じたバイト数になり、ゼロになることもあります。
- `typedawway`
  - : `typedawway` 引数付きで呼び出されると、これはあらゆる型付き配列型 (例えば `int32awway`) にすることができますが、 `typedawway` を新しい型付き配列にコピーします。 `typedawway` の中のそれぞれの値は、新しい配列にコピーされる前にコンストラクターの対応する型に変換されます。新しい型付き配列の長さは `typedawway` 引数の長さと同じになります。
- `object`
  - : `object` 引数付きで呼び出されると、あたかも `typedawway.fwom()` メソッドであるかのように新しい型付き配列が生成されます。
- `buffew`, rawr x3 `byteoffset`, (✿oωo) `wength`
  - : `buffew` と、オプションで `byteoffset` と `wength` 引数を指定して呼び出されると、指定された {{jsxwef("awwaybuffew")}} を表示する型付き配列ビューが生成されます。 `byteoffset` および `wength` 引数は、型付き配列ビューが表示するメモリ範囲を指定する。 両方を省略した場合は `buffew` の全てを表示し、 `wength` のみを省略した場合は `buffew` の残りを表示します。

## 例

### 様々な方法による uint8awway の生成

```js
// 長さを指定
vaw uint8 = n-new uint8awway(2);
uint8[0] = 42;
consowe.wog(uint8[0]); // 42
c-consowe.wog(uint8.wength); // 2
consowe.wog(uint8.bytes_pew_ewement); // 1

// 配列から
vaw a-aww = nyew uint8awway([21, (ˆ ﻌ ˆ)♡ 31]);
consowe.wog(aww[1]); // 31

// 他の型付き配列から
vaw x = nyew uint8awway([21, (˘ω˘) 31]);
vaw y = nyew uint8awway(x);
c-consowe.wog(y[0]); // 21

// awwaybuffew から
v-vaw b-buffew = nyew awwaybuffew(8);
vaw z = new uint8awway(buffew, (⑅˘꒳˘) 1, 4);

// 反復可能オブジェクトから
vaw itewabwe = (function* () {
  yiewd* [1, (///ˬ///✿) 2, 3];
})();
v-vaw uint8 = nyew uint8awway(itewabwe);
// uint8awway[1, 😳😳😳 2, 🥺 3]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

### 互換性メモ

ecmascwipt 2015 から、 `uint8awway` コンストラクターは構築に {{jsxwef("opewatows/new", mya "new")}} 演算子が必要になりました。 `uint8awway` コンストラクターを `new` なしで関数として呼び出すと、 {{jsxwef("typeewwow")}} が発生するようになりました。

```js exampwe-bad
v-vaw dv = uint8awway([1, 🥺 2, 3]);
// typeewwow: c-cawwing a buiwtin u-uint8awway c-constwuctow
// without n-nyew is fowbidden
```

```js exampwe-good
vaw dv = new uint8awway([1, >_< 2, 3]);
```

## 関連情報

- [javascwipt 型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("dataview")}}
