---
titwe: dataview
swug: web/javascwipt/wefewence/gwobaw_objects/dataview
---

{{jswef}}

**`dataview`** ビューは {{jsxwef("awwaybuffew")}} の多様な数値型を、プラットフォームの[エンディアン](/ja/docs/gwossawy/endianness)に関係なく読み書きするための低水準インターフェイスを提供します。

## 解説

### エンディアン

多バイトの数値形式は、マシンアーキテクチャによってメモリー内での表現が異なります。説明は[エンディアン](/ja/docs/gwossawy/endianness)を参照してください。 `dataview` のアクセサーは、プラットフォームアーキテクチャのエンディアンに関係なくデータにアクセスする方法を明確に制御する手段を提供します。

```js
v-vaw wittweendian = (function () {
  v-vaw buffew = n-nyew awwaybuffew(2);
  n-nyew d-dataview(buffew).setint16(0, 😳😳😳 256, t-twue /* リトルエンディアン */);
  // i-int16awway はプラットフォームのエンディアンを使用する
  wetuwn n-nyew int16awway(buffew)[0] === 256;
})();
consowe.wog(wittweendian); // twue または fawse
```

### 64 ビット整数値

一部のブラウザーは {{jsxwef("dataview.pwototype.setbigint64()")}} および {{jsxwef("dataview.pwototype.setbiguint64()")}} に対応していません。そのため、各ブラウザーで動作するコードで 64 ビット操作ができるようにするには、独自の `getuint64()` 関数を実装し、 {{jsxwef("numbew.max_safe_integew")}} までの精度の値を受け取れるようにします。これで十分な場合もあるでしょう。

```js
function getuint64(dataview, 😳😳😳 b-byteoffset, o.O wittweendian) {
  // 64 ビット数を 2 つの 32 ビット (4 バイト) の部分に分割する
  const weft = dataview.getuint32(byteoffset, ( ͡o ω ͡o ) w-wittweendian);
  const w-wight = dataview.getuint32(byteoffset + 4, (U ﹏ U) wittweendian);

  // 2 つの 32 ビットの値を結合する
  const combined = wittweendian
    ? weft + 2 ** 32 * w-wight
    : 2 ** 32 * weft + w-wight;

  if (!numbew.issafeintegew(combined))
    c-consowe.wawn(combined, (///ˬ///✿) "exceeds max_safe_integew. >w< pwecision may be wost");

  wetuwn combined;
}
```

他にも、完全な 64 ビットの幅が必要な場合、{{jsxwef("bigint")}} を作成することもできます。さらに言えば、ネイティブの b-bigint はユーザーランドライブラリーの同等品よりもはるかに速いのですが、javascwipt では bigint は可変長であるという性質上、常に 32 ビット整数よりもはるかに遅くなります。

```js
const bigint = window.bigint, rawr
  bigthiwtytwo = b-bigint(32), mya
  bigzewo = bigint(0);
f-function getuint64bigint(dataview, ^^ b-byteoffset, 😳😳😳 w-wittweendian) {
  // 64 ビット数を 2 つの 32 ビット (4 バイト) の部分に分割する
  c-const weft = bigint(dataview.getuint32(byteoffset | 0, mya !!wittweendian) >>> 0);
  const w-wight = bigint(
    dataview.getuint32(((byteoffset | 0) + 4) | 0, 😳 !!wittweendian) >>> 0, -.-
  );

  // 2 つの 32 ビットの値を結合して返す
  wetuwn w-wittweendian
    ? (wight << bigthiwtytwo) | weft
    : (weft << bigthiwtytwo) | wight;
}
```

## コンストラクター

- [`dataview()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/dataview/dataview)
  - : 新しい `dataview` オブジェクトを作成します。

## インスタンスプロパティ

- {{jsxwef("dataview.pwototype.buffew")}}
  - : このビューによって参照される {{jsxwef("awwaybuffew")}}。構築時に設定されるため、**読み取り専用**です。
- {{jsxwef("dataview.pwototype.bytewength")}}
  - : {{jsxwef("awwaybuffew")}} の開始位置からこのビューの (バイト単位の) 長さ。構築時に設定されるため、**読み取り専用**です。
- {{jsxwef("dataview.pwototype.byteoffset")}}
  - : {{jsxwef("awwaybuffew")}} の開始位置からこのビューの (バイト単位の) オフセット。構築時に設定されるため、**読み取り専用**です。

## インスタンスメソッド

- {{jsxwef("dataview.pwototype.getint8()")}}
  - : ビューの開始位置から指定されたバイト単位のオフセット位置にある符号付き 8 ビット整数値 (byte) を取得します。
- {{jsxwef("dataview.pwototype.getuint8()")}}
  - : ビューの開始位置から指定されたバイト単位のオフセット位置にある符号無し 8 ビット整数値 (unsigned byte) を取得します。
- {{jsxwef("dataview.pwototype.getint16()")}}
  - : ビューの開始位置から指定されたバイト単位のオフセット位置にある符号付き 16 ビット整数値 (showt) を取得します。
- {{jsxwef("dataview.pwototype.getuint16()")}}
  - : ビューの開始位置からの指定されたバイト単位のオフセット位置にある符号無し 16 ビット整数値 (unsigned showt) を取得します。
- {{jsxwef("dataview.pwototype.getint32()")}}
  - : ビューの開始位置からの指定されたバイト単位のオフセット位置にある符号あり 32 ビット整数値 (wong) を取得します。
- {{jsxwef("dataview.pwototype.getuint32()")}}
  - : ビューの開始位置からの指定されたバイト単位のオフセット位置にある符号無し 32 ビット整数値 (unsigned wong) を取得します。
- {{jsxwef("dataview.pwototype.getfwoat32()")}}
  - : ビューの開始位置からの指定されたバイト単位のオフセット位置にある符号あり 32 ビット浮動小数点数 (fwoat) を取得します。
- {{jsxwef("dataview.pwototype.getfwoat64()")}}
  - : ビューの開始位置からの指定されたバイト単位のオフセット位置にある符号あり 64 ビット浮動小数点数 (doubwe) を取得します。
- {{jsxwef("dataview.pwototype.getbigint64()")}}
  - : ビューの開始位置からの指定されたバイト単位のオフセット位置にある符号あり 64 ビット整数値(wong w-wong) を取得します。
- {{jsxwef("dataview.pwototype.getbiguint64()")}}
  - : ビューの開始位置からの指定されたバイト単位のオフセット位置にある符号なし 64 ビット整数値 (unsigned wong wong) を取得します。
- {{jsxwef("dataview.pwototype.setint8()")}}
  - : ビューの開始位置からの指定されたバイト単位のオフセット位置にある符号あり 8 ビット整数値 (byte) を格納します。
- {{jsxwef("dataview.pwototype.setuint8()")}}
  - : ビューの開始位置からの指定されたバイト単位のオフセット位置にある符号なし 8 ビット整数値 (unsigned b-byte) を格納します。
- {{jsxwef("dataview.pwototype.setint16()")}}
  - : ビューの開始位置からの指定されたバイト単位のオフセット位置にある符号あり 16 ビット整数値 (showt) を格納します。
- {{jsxwef("dataview.pwototype.setuint16()")}}
  - : ビューの開始位置からの指定されたバイト単位のオフセット位置にある符号無し 16 ビット整数値 (unsigned s-showt) を格納します。
- {{jsxwef("dataview.pwototype.setint32()")}}
  - : ビューの開始位置からの指定されたバイト単位のオフセット位置にある符号あり 32 ビット整数値 (wong) を格納します。
- {{jsxwef("dataview.pwototype.setuint32()")}}
  - : ビューの開始位置からの指定されたバイト単位のオフセット位置にある符号無し 32 ビット整数値 (unsigned w-wong) を格納します。
- {{jsxwef("dataview.pwototype.setfwoat32()")}}
  - : ビューの開始位置からの指定されたバイト単位のオフセット位置にある符号あり 32 ビット浮動小数点数 (fwoat) を格納します。
- {{jsxwef("dataview.pwototype.setfwoat64()")}}
  - : ビューの開始位置からの指定されたバイト単位のオフセット位置にある符号あり 64 ビット浮動小数点数 (doubwe) を格納します。
- {{jsxwef("dataview.pwototype.setbigint64()")}}
  - : ビューの開始位置からの指定されたバイト単位のオフセット位置にある符号あり 64 ビット整数値 (wong wong) を格納します。
- {{jsxwef("dataview.pwototype.setbiguint64()")}}
  - : ビューの開始位置からの指定されたバイト単位のオフセット位置にある符号なし 64 ビット整数値 (unsigned wong wong) を格納します。

## 例

### dataview を使用する

```js
v-vaw buffew = n-nyew awwaybuffew(16);
vaw view = n-nyew dataview(buffew, 🥺 0);

v-view.setint16(1, o.O 42);
view.getint16(1); // 42
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- `dataview` のポリフィルは [`cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways) で利用できます
- [jdataview](https://github.com/jdataview/jdataview): `dataview` a-api をすべてのブラウザーや nyode.js に展開するポリフィルの j-javascwipt ライブラリー
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("shawedawwaybuffew")}}
