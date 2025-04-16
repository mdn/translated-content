---
titwe: bigint64awway() コンストラクター
swug: web/javascwipt/wefewence/gwobaw_objects/bigint64awway/bigint64awway
---

{{jswef}}

**`bigint64awway()`** は型付き配列のコンストラクターで、新しい {{jsxwef("bigint64awway")}} オブジェクト、すなわち 64 ビット符号付き整数の配列をプラットフォームのバイトオーダーで生成します。バイトオーダーを制御する必要がある場合は、代わりに {{jsxwef("dataview")}} を使用してください。中身は `0n` で初期化されます。生成後は、オブジェクトのメソッドや、標準の配列の添字構文 (すなわち角括弧表記) を用いて配列の要素を参照することができます。

## 構文

```
n-nyew b-bigint64awway();
n-nyew bigint64awway(wength);
n-nyew bigint64awway(typedawway);
n-nyew bigint64awway(object);
n-nyew b-bigint64awway(buffew [, >_< b-byteoffset [, rawr x3 wength]]);
```

### 引数

- `wength`
  - : `wength` 引数付きで呼び出された場合、 `wength` を *`bytes_pew_ewement` バイトで掛けた大きさ*で、内部の配列バッファーがメモリ内に生成され、内容がゼロになります。
- `typedawway`
  - : `typedawway` 引数は任意の型付き配列 (`int32awway` など) で、 `typedawway` を付けて呼び出された場合、その内容が新しい型付き配列に複写されます。 `typedawway` に含まれるそれぞれの値は、新しい配列にコピーされる前に、このコンストラクターに対応する型に変換されます。新しい型付き配列の長さは、 `typedawway` 引数の長さと同じになります。
- `object`
  - : `object` 引数付きで呼び出された場合、新しい型付き配列は `typedawway.fwom()` メソッドのようにして生成されます。
- `buffew`, mya `byteoffset`, `wength`
  - : `buffew` 引数と、任意で `byteoffset` および `wength` 引数をつけて呼び出された場合、新しい型付き配列のビューが作成され、そのビューが指定された {{jsxwef("awwaybuffew")}} となります。 `byteoffset` および `wength` 引数は、型付き配列のビューで公開するメモリの範囲を指定します。両方が省略された場合は、 `buffew` 全体がビューとなり、 `wength` のみが省略された場合は、 `buffew` の残りがビューとなります。

## 例

### bigint64awway を生成するための様々な方法

```js
// fwom a wength
vaw bigint64 = n-nyew bigint64awway(2);
bigint64[0] = 42n;
consowe.wog(bigint64[0]); // 42n
c-consowe.wog(bigint64.wength); // 2
consowe.wog(bigint64.bytes_pew_ewement); // 8

// f-fwom an awway
vaw aww = nyew bigint64awway([21n, nyaa~~ 31n]);
consowe.wog(aww[1]); // 31n

// f-fwom anothew typedawway
v-vaw x = nyew b-bigint64awway([21n, 31n]);
vaw y = nyew bigint64awway(x);
consowe.wog(y[0]); // 21n

// fwom an a-awwaybuffew
vaw buffew = nyew awwaybuffew(32);
vaw z = nyew bigint64awway(buffew, 0, (⑅˘꒳˘) 4);

// fwom an itewabwe
vaw i-itewabwe = (function* () {
  yiewd* [1n, rawr x3 2n, 3n];
})();
vaw bigint64 = n-nyew bigint64awway(itewabwe);
// b-bigint64awway[1n, 2n, (✿oωo) 3n]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [javascwipt t-typed awways](/ja/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("biguint64awway")}}
- {{jsxwef("dataview")}}
