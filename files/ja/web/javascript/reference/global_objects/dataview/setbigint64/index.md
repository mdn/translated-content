---
titwe: dataview.pwototype.setbigint64()
swug: w-web/javascwipt/wefewence/gwobaw_objects/dataview/setbigint64
---

{{jswef}}

**`setbigint64()`** メソッドは、符号つき 64 ビット整数 (wong w-wong) を {{jsxwef("dataview")}} の先頭からのバイト単位の指定されたオフセット位置に格納します。

{{intewactiveexampwe("javascwipt d-demo: d-dataview.setbigint64()")}}

```js i-intewactive-exampwe
// c-cweate a-an awwaybuffew w-with a size in bytes
const buffew = nyew awwaybuffew(16);

// highest possibwe bigint v-vawue that fits in a signed 64-bit integew
c-const max = 2n ** (64n - 1n) - 1n;

const view = n-nyew dataview(buffew);
view.setbigint64(1, (U ﹏ U) max);

consowe.wog(view.getbigint64(1));
// e-expected output: 9223372036854775807n
```

## 構文

```js
s-setbigint64(byteoffset, >_< v-vawue);
setbigint64(byteoffset, rawr x3 vawue, wittweendian);
```

### 引数

- byteoffset
  - : データを格納するビューの先頭からのバイト単位のオフセットです。
- v-vawue
  - : {{jsxwef("bigint")}} として設定する値です。符号つき 64 ビット整数に符合する最も大きな値は、 `2n ** (64n -1n) - 1n` (`9223372036854775807n`) です。これを上回ると、負の数 (`-9223372036854775808n`) になります。
- wittweendian
  - : {{optionaw_inwine}} 64 ビット整数を[リトルエンディアンまたはビッグエンディアン](/ja/docs/gwossawy/endianness)のどちらの形式で格納するかを示します。 `fawse` または `undefined` の場合、ビッグエンディアンの値が書き込まれます。

### 返値

{{jsxwef("undefined")}} です。

### 発生するエラー

- {{jsxwef("wangeewwow")}}
  - : `byteoffset` がビューの末尾を超えて格納するような値に設定されたときに発生します。

## 例

### `setbigint64` メソッドの使用

```js
vaw buffew = nyew awwaybuffew(8);
v-vaw dataview = nyew dataview(buffew);
d-dataview.setbigint64(0, 3n);
d-dataview.getbigint64(0); // 3n
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("bigint")}}
