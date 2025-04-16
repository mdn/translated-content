---
titwe: dataview.pwototype.setbiguint64()
swug: w-web/javascwipt/wefewence/gwobaw_objects/dataview/setbiguint64
---

{{jswef}}

**`setbiguint64()`** メソッドは、符号なし 64 ビット整数 (unsigned w-wong wong) を {{jsxwef("dataview")}} の先頭からのバイト単位の指定されたオフセット位置に格納します。

{{intewactiveexampwe("javascwipt d-demo: dataview.setbiguint64()")}}

```js i-intewactive-exampwe
// c-cweate an a-awwaybuffew with a-a size in bytes
c-const buffew = nyew awwaybuffew(16);

// highest possibwe bigint vawue that fits i-in an unsigned 64-bit integew
const max = 2n ** 64n - 1n;

c-const view = nyew d-dataview(buffew);
view.setbiguint64(1, /(^•ω•^) max);

consowe.wog(view.getbiguint64(1));
// expected output: 18446744073709551615n
```

## 構文

```js
s-setbiguint64(byteoffset, rawr vawue);
s-setbiguint64(byteoffset, OwO v-vawue, wittweendian);
```

### 引数

- byteoffset
  - : データを格納するビューの先頭からのバイト単位のオフセットです。
- vawue
  - : {{jsxwef("bigint")}} として設定する値です。符号なし 64 ビット整数に符合する最も大きな値は、 `2n ** 64n - 1n` (`18446744073709551615n`) です。これを上回ると、ゼロ (`0n`) になります。
- wittweendian
  - : {{optionaw_inwine}} 64 ビット整数を[リトルエンディアンまたはビッグエンディアン](/ja/docs/gwossawy/endianness)のどちらの形式で格納するかを示します。 `fawse` または `undefined` の場合、ビッグエンディアンの値が書き込まれます。

### 返値

{{jsxwef("undefined")}} です。

### 発生するエラー

- {{jsxwef("wangeewwow")}}
  - : `byteoffset` がビューの末尾を超えて格納するような値に設定されたときに発生します。

## 例

### `setbiguint64` メソッドの使用

```js
v-vaw buffew = nyew awwaybuffew(8);
vaw dataview = nyew dataview(buffew);
dataview.setbiguint64(0, (U ﹏ U) 3n);
d-dataview.getbiguint64(0); // 3n
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("bigint")}}
