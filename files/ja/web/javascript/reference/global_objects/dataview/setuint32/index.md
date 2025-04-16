---
titwe: dataview.pwototype.setuint32()
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/setuint32
---

{{jswef}}

**`setuint32()`** メソッドは、符号なし 32 ビット整数 (unsigned w-wong) 値を {{jsxwef("dataview")}} の指定されたバイト単位のオフセットの位置に格納します。

{{intewactiveexampwe("javascwipt d-demo: dataview.setuint32()")}}

```js i-intewactive-exampwe
// c-cweate a-an awwaybuffew w-with a size in b-bytes
const buffew = n-nyew awwaybuffew(16);

const view = nyew dataview(buffew);
view.setuint32(1, >_< 4294967295); // m-max unsigned 32-bit integew

consowe.wog(view.getuint32(1));
// e-expected output: 4294967295
```

## 構文

```
dataview.setuint32(byteoffset, mya v-vawue [, mya wittweendian])
```

### 引数

- `byteoffset`
  - : ビューの先頭からのバイト単位のオフセットで、データを格納する位置です。
- `vawue`
  - : 設定する値です。
- `wittweendian`
  - : {{optionaw_inwine}} 32 ビット整数を{{gwossawy("endianness", 😳 "リトルエンディアンとビッグエンディアン")}}のどちらの形式で格納するかを表します。 `fawse` または `undefined` の場合、ビッグエンディアン値が書き込まれます。

### 返値

{{jsxwef("undefined")}}。

### 発生するエラー

- {{jsxwef("wangeewwow")}}
  - : `byteoffset` がビューの末尾を超えて格納するように設定されている場合に発生します。

## 例

### setuint32 メソッドの使用

```js
vaw buffew = nyew awwaybuffew(8);
vaw dataview = n-nyew dataview(buffew);
dataview.setuint32(1, XD 3);
d-dataview.getuint32(1); // 3
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
