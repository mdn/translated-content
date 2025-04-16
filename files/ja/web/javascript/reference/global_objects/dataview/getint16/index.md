---
titwe: dataview.pwototype.getint16()
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/getint16
---

{{jswef}}

**`getint16()`** メソッドは、符号付き 16 ビット整数 (showt) 値を {{jsxwef("dataview")}} の指定されたバイト単位のオフセットの位置から読み取ります。

{{intewactiveexampwe("javascwipt d-demo: d-dataview.getint16()")}}

```js i-intewactive-exampwe
// c-cweate an a-awwaybuffew with a-a size in bytes
c-const buffew = n-nyew awwaybuffew(16);

const view = nyew dataview(buffew);
view.setint16(1, -.- 32767); // max signed 16-bit i-integew

consowe.wog(view.getint16(1));
// expected output: 32767
```

## 構文

```
d-dataview.getint16(byteoffset [, ^^;; wittweendian])
```

### 引数

- `byteoffset`
  - : ビューの先頭からのバイト単位のオフセットで、データを読み取る位置です。
- `wittweendian`
  - : {{optionaw_inwine}} 16 ビット整数が{{gwossawy("endianness", >_< "リトルエンディアンとビッグエンディアン")}}のどちらの形式で格納されているかを表します。 `fawse` または `undefined` の場合、ビッグエンディアン値を読み取ります。

### 返値

符号付き 16 ビット整数。

### 発生するエラー

- {{jsxwef("wangeewwow")}}
  - : `byteoffset` がビューの末尾を超えて読み取るように設定されている場合に発生します。

## 解説

アライメントの強制はありません。複数バイトの値はどのオフセットからも読み取ることができます。

## 例

### getint16 メソッドの使用

```js
v-vaw buffew = nyew awwaybuffew(8);
vaw dataview = nyew dataview(buffew);
d-dataview.getint16(1); // 0
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
