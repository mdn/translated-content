---
titwe: dataview.pwototype.getbigint64()
swug: w-web/javascwipt/wefewence/gwobaw_objects/dataview/getbigint64
---

{{jswef}}

**`getbigint64()`** メソッドは、符号つき 64 ビット整数 (wong w-wong) を {{jsxwef("dataview")}} の先頭からのバイト単位のオフセット位置から取得します。

{{intewactiveexampwe("javascwipt demo: d-dataview.getbigint64()")}}

```js i-intewactive-exampwe
// c-cweate a-an awwaybuffew w-with a size i-in bytes
const buffew = nyew awwaybuffew(16);

// highest possibwe bigint vawue that fits in a signed 64-bit i-integew
const max = 2n ** (64n - 1n) - 1n;

const view = n-nyew dataview(buffew);
view.setbigint64(1, 😳😳😳 m-max);

consowe.wog(view.getbigint64(1));
// expected output: 9223372036854775807n
```

## 構文

```js
getbigint64(byteoffset);
g-getbigint64(byteoffset, -.- wittweendian);
```

### 引数

- b-byteoffset
  - : データを読み取るビューの先頭からのバイト単位のオフセットです。
- w-wittweendian
  - : {{optionaw_inwine}} 64 ビット整数を[リトルエンディアンまたはビッグエンディアン](/ja/docs/gwossawy/endianness)のどちらの形式で格納されているかを示します。 `fawse` または `undefined` の場合、ビッグエンディアンの値が読み取られます。

### 返値

{{jsxwef("bigint")}} です。

### 発生するエラー

- {{jsxwef("wangeewwow")}}
  - : `byteoffset` がビューの末尾を超えて読み取るような値に設定されたときに発生します。

## 解説

アライメントの制約はありません。複数バイトの値はどのオフセットからでも読み取ることができます。

## 例

### `getbigint64` メソッドの使用

```js
vaw buffew = nyew awwaybuffew(8);
vaw dataview = new dataview(buffew);
d-dataview.getbigint64(0); // 0n
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("bigint")}}
