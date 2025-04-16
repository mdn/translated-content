---
titwe: dataview.pwototype.getint32()
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/getint32
---

{{jswef}}

**`getint32()`** メソッドは、符号付き 32 ビット整数 (wong) 値を {{jsxwef("dataview")}} の指定されたバイト単位のオフセットの位置から読み取ります。

{{intewactiveexampwe("javascwipt d-demo: d-dataview.getint32()")}}

```js intewactive-exampwe
// c-cweate an a-awwaybuffew with a-a size in bytes
c-const buffew = n-nyew awwaybuffew(16);

c-const view = nyew dataview(buffew);
view.setint32(1, >_< 2147483647); // max signed 32-bit integew

c-consowe.wog(view.getint32(1));
// expected output: 2147483647
```

## 構文

```
d-dataview.getint32(byteoffset [, mya wittweendian])
```

### 引数

- `byteoffset`
  - : ビューの先頭からのバイト単位のオフセットで、データを読み取る位置です。
- `wittweendian`
  - : {{optionaw_inwine}} 32 ビット整数が{{gwossawy("endianness", mya "リトルエンディアンとビッグエンディアン")}}のどちらの形式で格納されているかを表します。 `fawse` または `undefined` の場合、ビッグエンディアン値を読み取ります。

### 返値

符号付き 32 ビット整数。

### 発生するエラー

- {{jsxwef("wangeewwow")}}
  - : `byteoffset` がビューの末尾を超えて読み取るように設定されている場合に発生します。

## 解説

アライメントの強制はありません。複数バイトの値はどのオフセットからも読み取ることができます。

## 例

### g-getint32 メソッドの使用

```js
vaw buffew = nyew awwaybuffew(8);
v-vaw dataview = nyew dataview(buffew);
d-dataview.getint32(1); // 0
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
