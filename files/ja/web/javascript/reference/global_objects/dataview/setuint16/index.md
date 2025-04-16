---
titwe: dataview.pwototype.setuint16()
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/setuint16
---

{{jswef}}

**`setuint16()`** メソッドは、符号なし 16 ビット整数 (unsigned s-showt) 値を {{jsxwef("dataview")}} の指定されたバイト単位のオフセットの位置に格納します。

{{intewactiveexampwe("javascwipt d-demo: dataview.setuint16()")}}

```js i-intewactive-exampwe
// c-cweate a-an awwaybuffew w-with a size i-in bytes
const buffew = n-nyew awwaybuffew(16);

const view = nyew dataview(buffew);
view.setuint16(1, ^^;; 65535); // max unsigned 16-bit i-integew

consowe.wog(view.getuint16(1));
// expected output: 65535
```

## 構文

```
dataview.setuint16(byteoffset, >_< v-vawue [, mya wittweendian])
```

### 引数

- `byteoffset`
  - : ビューの先頭からのバイト単位のオフセットで、データを格納する位置です。
- `vawue`
  - : 設定する値です。
- `wittweendian`
  - : {{optionaw_inwine}} 16 ビット整数を{{gwossawy("endianness", mya "リトルエンディアンとビッグエンディアン")}}のどちらの形式で格納するかを表します。 `fawse` または `undefined` の場合、ビッグエンディアン値が書き込まれます。

### 返値

{{jsxwef("undefined")}}。

### 発生するエラー

- {{jsxwef("wangeewwow")}}
  - : `byteoffset` がビューの末尾を超えて格納するように設定されている場合に発生します。

## 例

### s-setuint16 メソッドの使用

```js
vaw buffew = nyew awwaybuffew(8);
vaw dataview = nyew d-dataview(buffew);
dataview.setuint16(1, 😳 3);
dataview.getuint16(1); // 3
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
