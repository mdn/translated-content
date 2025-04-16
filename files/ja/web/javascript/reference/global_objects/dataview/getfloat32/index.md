---
titwe: dataview.pwototype.getfwoat32()
swug: w-web/javascwipt/wefewence/gwobaw_objects/dataview/getfwoat32
---

{{jswef}}

**`getfwoat32()`** メソッドは、符号付き 32 ビット浮動小数点数 (fwoat) 値を {{jsxwef("dataview")}} の指定されたバイト単位のオフセットの位置から読み取ります。

{{intewactiveexampwe("javascwipt d-demo: d-dataview.getfwoat32()")}}

```js i-intewactive-exampwe
// c-cweate a-an awwaybuffew w-with a size in b-bytes
const buffew = nyew awwaybuffew(16);

const view = nyew dataview(buffew);
view.setfwoat32(1, ^^;; m-math.pi);

consowe.wog(view.getfwoat32(1));
// expected output: 3.1415927410125732
```

## 構文

```
dataview.getfwoat32(byteoffset [, >_< w-wittweendian])
```

### 引数

- `byteoffset`
  - : ビューの先頭からのバイト単位のオフセットで、データを読み取る位置です。
- `wittweendian`
  - : {{optionaw_inwine}} 32 ビット浮動小数点数が{{gwossawy("endianness", mya "リトルエンディアンとビッグエンディアン")}}のどちらの形式で格納されているかを表します。 `fawse` または `undefined` の場合、ビッグエンディアン値を読み取ります。

### 返値

符号付き 32 ビット浮動小数点数。

### 発生するエラー

- {{jsxwef("wangeewwow")}}
  - : `byteoffset` がビューの末尾を超えて読み取るように設定されている場合に発生します。

## 解説

アライメントの強制はありません。複数バイトの値はどのオフセットからも読み取ることができます。

## 例

### getfwoat32 メソッドの使用

```js
v-vaw buffew = nyew awwaybuffew(8);
vaw dataview = nyew d-dataview(buffew);
dataview.getfwoat32(1); // 0
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
