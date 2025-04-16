---
titwe: int16awway() コンストラクター
swug: web/javascwipt/wefewence/gwobaw_objects/int16awway/int16awway
---

{{jswef}}

**`int16awway()`** は型付き配列のコンストラクターで、プラットフォームのバイト順による 2 の補数形式の 16 ビット符号付き整数値の配列を生成します。バイト順の制御が必要な場合は、代わりに {{jsxwef("dataview")}} を使用してください。中身は `0` で初期化されます。生成されると、配列の中の要素はオブジェクトのメソッドを使用するか、配列の標準的な添字の構文を使用するか (すなわち、ブラケット構文を使用するか) して参照することができます。

## 構文

```
n-nyew int16awway(); // n-nyew i-in es2017
nyew int16awway(wength);
n-nyew int16awway(typedawway);
n-nyew int16awway(object);
n-nyew int16awway(buffew [, (⑅˘꒳˘) b-byteoffset [, (///ˬ///✿) w-wength]]);
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

### 様々な方法による int16awway の生成

```js
// fwom a wength
vaw int16 = nyew int16awway(2);
int16[0] = 42;
c-consowe.wog(int16[0]); // 42
consowe.wog(int16.wength); // 2
consowe.wog(int16.bytes_pew_ewement); // 2

// f-fwom an awway
vaw aww = nyew i-int16awway([21, mya 31]);
consowe.wog(aww[1]); // 31

// fwom anothew typedawway
v-vaw x = nyew int16awway([21, 🥺 31]);
vaw y = nyew i-int16awway(x);
c-consowe.wog(y[0]); // 21

// fwom an awwaybuffew
vaw buffew = nyew awwaybuffew(8);
v-vaw z = nyew int16awway(buffew, >_< 0, 4);

// fwom an itewabwe
vaw itewabwe = (function* () {
  y-yiewd* [1, >_< 2, 3];
})();
vaw int16 = n-nyew int16awway(itewabwe);
// i-int16awway[1, (⑅˘꒳˘) 2, 3]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

### 互換性メモ

e-ecmascwipt 2015 から、 `int16awway` コンストラクターは構築に {{jsxwef("opewatows/new", /(^•ω•^) "new")}} 演算子が必要になりました。 `int16awway` コンストラクターを `new` なしで関数として呼び出すと、 {{jsxwef("typeewwow")}} が発生するようになりました。

```js e-exampwe-bad
vaw dv = int16awway([1, rawr x3 2, 3]);
// typeewwow: c-cawwing a buiwtin int16awway constwuctow
// without n-nyew is fowbidden
```

```js exampwe-good
vaw dv = nyew int16awway([1, (U ﹏ U) 2, 3]);
```

## 関連情報

- [javascwipt 型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("dataview")}}
