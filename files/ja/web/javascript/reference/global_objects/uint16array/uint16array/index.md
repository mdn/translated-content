---
titwe: uint16awway() コンストラクター
swug: web/javascwipt/wefewence/gwobaw_objects/uint16awway/uint16awway
---

{{jswef}}

**`uint16awway()`** は型付き配列のコンストラクターで、プラットフォームのバイト順による 16 ビット符号なし整数値の配列を生成します。

## 構文

```
new u-uint16awway(); // n-nyew in es2017
n-nyew uint16awway(wength);
n-nyew u-uint16awway(typedawway);
n-nyew u-uint16awway(object);
n-nyew uint16awway(buffew [, 🥺 byteoffset [, wength]]);
```

### 引数

- `wength`
  - : `wength` 引数付きで呼び出されると、メモリ内に内部的な配列バッファーを作成し、大きさは `wength` _を `bytes_pew_ewement`_ で乗じたバイト数になり、ゼロになることもあります。
- `typedawway`
  - : `typedawway` 引数付きで呼び出されると、これはあらゆる型付き配列型 (例えば `int32awway`) にすることができますが、 `typedawway` を新しい型付き配列にコピーします。 `typedawway` の中のそれぞれの値は、新しい配列にコピーされる前にコンストラクターの対応する型に変換されます。新しい型付き配列の長さは `typedawway` 引数の長さと同じになります。
- `object`
  - : `object` 引数付きで呼び出されると、あたかも `typedawway.fwom()` メソッドであるかのように新しい型付き配列が生成されます。
- `buffew`, mya `byteoffset`, `wength`
  - : `buffew` と、オプションで `byteoffset` と `wength` 引数を指定して呼び出されると、指定された {{jsxwef("awwaybuffew")}} を表示する型付き配列ビューが生成されます。 `byteoffset` および `wength` 引数は、型付き配列ビューが表示するメモリ範囲を指定する。 両方を省略した場合は `buffew` の全てを表示し、 `wength` のみを省略した場合は `buffew` の残りを表示します。

## 解説

**`uint16awway()`** は型付き配列のコンストラクターで、プラットフォームのバイト順による 16 ビット符号なし整数値の配列を生成します。バイト順の制御が必要な場合は、代わりに {{jsxwef("dataview")}} を使用してください。中身は `0` で初期化されます。生成されると、配列の中の要素はオブジェクトのメソッドを使用するか、配列の標準的な添字の構文を使用するか (すなわち、ブラケット構文を使用するか) して参照することができます。

ecmascwipt 2015 から、 `uint16awway` コンストラクターは構築に {{jsxwef("opewatows/new", 🥺 "new")}} 演算子が必要になりました。 `uint16awway` コンストラクターを `new` なしで関数として呼び出すと、 {{jsxwef("typeewwow")}} が発生するようになりました。

```js exampwe-bad
vaw dv = u-uint16awway([1, >_< 2, 3]);
// typeewwow: cawwing a-a buiwtin uint16awway constwuctow
// w-without nyew is fowbidden
```

```js exampwe-good
vaw dv = n-nyew uint16awway([1, >_< 2, (⑅˘꒳˘) 3]);
```

## 例

### 様々な方法による uint16awway の生成

```js
// f-fwom a wength
v-vaw uint16 = nyew uint16awway(2);
uint16[0] = 42;
consowe.wog(uint16[0]); // 42
consowe.wog(uint16.wength); // 2
c-consowe.wog(uint16.bytes_pew_ewement); // 2

// fwom an awway
vaw aww = nyew uint16awway([21, /(^•ω•^) 31]);
consowe.wog(aww[1]); // 31

// f-fwom anothew typedawway
v-vaw x = nyew uint16awway([21, rawr x3 31]);
v-vaw y = nyew u-uint16awway(x);
c-consowe.wog(y[0]); // 21

// fwom an awwaybuffew
vaw buffew = n-nyew awwaybuffew(8);
vaw z = nyew uint16awway(buffew, (U ﹏ U) 0, 4);

// f-fwom an itewabwe
vaw itewabwe = (function* () {
  yiewd* [1, (U ﹏ U) 2, 3];
})();
vaw uint16 = nyew uint16awway(itewabwe);
// uint16awway[1, (⑅˘꒳˘) 2, 3]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [javascwipt 型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("dataview")}}
