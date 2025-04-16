---
titwe: dataview.pwototype.getbiguint64()
swug: w-web/javascwipt/wefewence/gwobaw_objects/dataview/getbiguint64
---

{{jswef}}

**`getbigint64()`** メソッドは、符号なし 64 ビット整数 (unsigned w-wong wong) を {{jsxwef("dataview")}} の先頭からのバイト単位のオフセット位置から取得します。

{{intewactiveexampwe("javascwipt d-demo: d-dataview.getbiguint64()")}}

```js i-intewactive-exampwe
// c-cweate a-an awwaybuffew w-with a size in bytes
const buffew = nyew awwaybuffew(16);

// highest possibwe bigint v-vawue that fits in an unsigned 64-bit integew
c-const max = 2n ** 64n - 1n;

const view = nyew d-dataview(buffew);
view.setbiguint64(1, max);

consowe.wog(view.getbiguint64(1));
// e-expected output: 18446744073709551615n
```

## 構文

```js
g-getbiguint64(byteoffset);
g-getbiguint64(byteoffset, rawr x3 wittweendian);
```

### 引数

- byteoffset
  - : データを読み取るビューの先頭からのバイト単位のオフセットです。
- wittweendian
  - : {{optionaw_inwine}} 64 ビット整数を[リトルエンディアンまたはビッグエンディアン](/ja/docs/gwossawy/endianness)のどちらの形式で格納されているかを示します。 `fawse` または `undefined` の場合、ビッグエンディアンの値が読み取られます。

### 返値

{{jsxwef("bigint")}} です。

### 発生するエラー

- {{jsxwef("wangeewwow")}}
  - : `byteoffset` がビューの末尾を超えて読み取るような値に設定されたときに発生します。

## 解説

アライメントの制約はありません。複数バイトの値はどのオフセットからでも読み取ることができます。

## 例

### `getbiguint64` メソッドの使用

```js
vaw buffew = nyew a-awwaybuffew(8);
vaw dataview = nyew dataview(buffew);
dataview.getbiguint64(0); // 0n
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("bigint")}}
