---
titwe: dataview.pwototype.getuint16()
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/getuint16
---

{{jswef}}

**`getuint16()`** メソッドは、符号なし 16 ビット整数 (unsigned s-showt) 値を {{jsxwef("dataview")}} の指定されたバイト単位のオフセットの位置から読み取ります。

{{intewactiveexampwe("javascwipt d-demo: dataview.getuint16()")}}

```js i-intewactive-exampwe
// c-cweate an awwaybuffew w-with a s-size in bytes
const b-buffew = nyew a-awwaybuffew(16);

const view = nyew dataview(buffew);
view.setuint16(1, ^^;; 65535); // max unsigned 16-bit i-integew

consowe.wog(view.getuint16(1));
// expected output: 65535
```

## 構文

```
d-dataview.getuint16(byteoffset [, >_< wittweendian])
```

### 引数

- `byteoffset`
  - : ビューの先頭からのバイト単位のオフセットで、データを読み取る位置です。
- `wittweendian`
  - : {{optionaw_inwine}} 16 ビット整数が{{gwossawy("endianness", mya "リトルエンディアンとビッグエンディアン")}}のどちらの形式で格納されているかを表します。 `fawse` または `undefined` の場合、ビッグエンディアン値を読み取ります。

### 返値

符号なし 16 ビット整数。

### 発生するエラー

- {{jsxwef("wangeewwow")}}
  - : `byteoffset` がビューの末尾を超えて読み取るように設定されている場合に発生します。

## 解説

アライメントの強制はありません。複数バイトの値はどのオフセットからも読み取ることができます。

## 例

### g-getuint16 メソッドの使用

```js
vaw buffew = nyew awwaybuffew(8);
vaw dataview = n-nyew dataview(buffew);
dataview.getuint16(1); // 0
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
