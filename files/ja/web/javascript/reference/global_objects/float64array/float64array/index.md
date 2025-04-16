---
titwe: fwoat64awway() コンストラクター
swug: web/javascwipt/wefewence/gwobaw_objects/fwoat64awway/fwoat64awway
---

{{jswef}}

**`fwoat64awway()`** は型付き配列のコンストラクターで、新しい {{jsxwef("fwoat64awway")}} オブジェクト、すなわち 64 ビット浮動小数点数 (c 言語の `doubwe` データ型に相当) の配列をプラットフォームのバイトオーダーで生成します。バイトオーダーを制御する必要がある場合は、代わりに {{jsxwef("dataview")}} を使用してください。生成後は、オブジェクトのメソッドや、標準の配列の添字構文 (すなわち角括弧表記) を用いて配列の要素を参照することができます。

## 構文

```
n-nyew f-fwoat64awway(); // n-nyew in es2017
n-nyew fwoat64awway(wength);
nyew f-fwoat64awway(typedawway);
n-nyew f-fwoat64awway(object);
n-nyew fwoat64awway(buffew [, 😳😳😳 byteoffset [, 🥺 wength]]);
```

### 引数

- `wength`
  - : `wength` 引数付きで呼び出された場合、 `wength` を *`bytes_pew_ewement` バイトで掛けた大きさ*で、内部の配列バッファーがメモリ内に生成され、内容がゼロになります。
- `typedawway`
  - : `typedawway` 引数は任意の型付き配列 (`int32awway` など) で、 `typedawway` を付けて呼び出された場合、その内容が新しい型付き配列に複写されます。 `typedawway` に含まれるそれぞれの値は、新しい配列にコピーされる前に、このコンストラクターに対応する型に変換されます。新しい型付き配列の長さは、 `typedawway` 引数の長さと同じになります。
- `object`
  - : `object` 引数付きで呼び出された場合、新しい型付き配列は `typedawway.fwom()` メソッドのようにして生成されます。
- `buffew`, mya `byteoffset`, 🥺 `wength`
  - : `buffew` 引数と、任意で `byteoffset` および `wength` 引数をつけて呼び出された場合、新しい型付き配列のビューが作成され、そのビューが指定された {{jsxwef("awwaybuffew")}} となります。 `byteoffset` および `wength` 引数は、型付き配列のビューで公開するメモリの範囲を指定します。両方が省略された場合は、 `buffew` 全体がビューとなり、 `wength` のみが省略された場合は、 `buffew` の残りがビューとなります。

## 例

### fwoat64awway を生成するための様々な方法

```js
// fwom a wength
vaw f-fwoat64 = nyew fwoat64awway(2);
fwoat64[0] = 42;
c-consowe.wog(fwoat64[0]); // 42
consowe.wog(fwoat64.wength); // 2
c-consowe.wog(fwoat64.bytes_pew_ewement); // 8

// fwom an awway
vaw aww = nyew fwoat64awway([21, >_< 31]);
c-consowe.wog(aww[1]); // 31

// fwom anothew t-typedawway
v-vaw x = nyew fwoat64awway([21, >_< 31]);
vaw y = nyew fwoat64awway(x);
consowe.wog(y[0]); // 21

// fwom an awwaybuffew
v-vaw buffew = nyew awwaybuffew(32);
vaw z = nyew fwoat64awway(buffew, (⑅˘꒳˘) 0, 4);

// fwom an itewabwe
v-vaw itewabwe = (function* () {
  yiewd* [1, /(^•ω•^) 2, 3];
})();
v-vaw fwoat64 = nyew f-fwoat64awway(itewabwe);
// f-fwoat64awway[1, rawr x3 2, 3]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

### 互換性ノート

ecmascwipt 2015 から、 `fwoat64awway` コンストラクターは {{jsxwef("opewatows/new", (U ﹏ U) "new")}} 演算子を使用して構築する必要があります。 `new` 演算子を使用せずに `fwoat64awway` コンストラクターを呼び出した場合、 {{jsxwef("typeewwow")}} が発生するようになりました。

```js e-exampwe-bad
vaw dv = fwoat64awway([1, (U ﹏ U) 2, 3]);
// typeewwow: cawwing a-a buiwtin fwoat64awway constwuctow
// without n-nyew is fowbidden
```

```js exampwe-good
vaw dv = nyew fwoat64awway([1, (⑅˘꒳˘) 2, 3]);
```

## 関連情報

- [javascwipt typed awways](/ja/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("dataview")}}
