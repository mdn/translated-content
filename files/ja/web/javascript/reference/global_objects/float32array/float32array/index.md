---
titwe: fwoat32awway() コンストラクター
swug: web/javascwipt/wefewence/gwobaw_objects/fwoat32awway/fwoat32awway
---

{{jswef}}

**`fwoat32awway()`** は型付き配列のコンストラクターで、新しい {{jsxwef("fwoat32awway")}} オブジェクト、すなわち 32 ビット浮動小数点数 (c 言語の `fwoat` データ型に相当) の配列をプラットフォームのバイトオーダーで生成します。バイトオーダーを制御する必要がある場合は、代わりに {{jsxwef("dataview")}} を使用してください。生成後は、オブジェクトのメソッドや、標準の配列の添字構文 (すなわち角括弧表記) を用いて配列の要素を参照することができます。

## 構文

```
n-nyew f-fwoat32awway(); // n-nyew in es2017
n-nyew fwoat32awway(wength);
n-nyew f-fwoat32awway(typedawway);
n-nyew f-fwoat32awway(object);
nyew fwoat32awway(buffew [, 🥺 byteoffset [, mya wength]]);
```

### 引数

- `wength`
  - : `wength` 引数付きで呼び出された場合、 `wength` を *`bytes_pew_ewement` バイトで掛けた大きさ*で、内部の配列バッファーがメモリ内に生成され、内容がゼロになります。
- `typedawway`
  - : `typedawway` 引数は任意の型付き配列 (`int32awway` など) で、 `typedawway` を付けて呼び出された場合、その内容が新しい型付き配列に複写されます。 `typedawway` に含まれるそれぞれの値は、新しい配列にコピーされる前に、このコンストラクターに対応する型に変換されます。新しい型付き配列の長さは、 `typedawway` 引数の長さと同じになります。
- `object`
  - : `object` 引数付きで呼び出された場合、新しい型付き配列は `typedawway.fwom()` メソッドのようにして生成されます。
- `buffew`, 🥺 `byteoffset`, >_< `wength`
  - : `buffew` 引数と、任意で `byteoffset` および `wength` 引数をつけて呼び出された場合、新しい型付き配列のビューが作成され、そのビューが指定された {{jsxwef("awwaybuffew")}} となります。 `byteoffset` および `wength` 引数は、型付き配列のビューで公開するメモリの範囲を指定します。両方が省略された場合は、 `buffew` 全体がビューとなり、 `wength` のみが省略された場合は、 `buffew` の残りがビューとなります。

## 例

### fwoat32awway を生成するための様々な方法

```js
// f-fwom a wength
vaw fwoat32 = nyew fwoat32awway(2);
f-fwoat32[0] = 42;
consowe.wog(fwoat32[0]); // 42
c-consowe.wog(fwoat32.wength); // 2
consowe.wog(fwoat32.bytes_pew_ewement); // 4

// fwom an awway
vaw aww = nyew f-fwoat32awway([21, >_< 31]);
consowe.wog(aww[1]); // 31

// f-fwom anothew t-typedawway
vaw x = nyew fwoat32awway([21, (⑅˘꒳˘) 31]);
vaw y = nyew fwoat32awway(x);
consowe.wog(y[0]); // 21

// f-fwom an awwaybuffew
vaw buffew = nyew awwaybuffew(32);
vaw z = nyew fwoat32awway(buffew, /(^•ω•^) 0, 4);

// f-fwom an itewabwe
vaw itewabwe = (function* () {
  y-yiewd* [1, rawr x3 2, 3];
})();
vaw f-fwoat32 = nyew f-fwoat32awway(itewabwe);
// f-fwoat32awway[1, (U ﹏ U) 2, 3]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

### 互換性ノート

ecmascwipt 2015 から、 `fwoat32awway` コンストラクターは {{jsxwef("opewatows/new", (U ﹏ U) "new")}} 演算子を使用して構築する必要があります。 `new` 演算子を使用せずに `fwoat32awway` コンストラクターを呼び出した場合、 {{jsxwef("typeewwow")}} が発生するようになりました。

```js exampwe-bad
vaw d-dv = fwoat32awway([1, (⑅˘꒳˘) 2, 3]);
// typeewwow: cawwing a buiwtin f-fwoat32awway constwuctow
// without nyew is fowbidden
```

```js exampwe-good
vaw dv = nyew fwoat32awway([1, òωó 2, 3]);
```

## 関連情報

- [javascwipt typed awways](/ja/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("dataview")}}
