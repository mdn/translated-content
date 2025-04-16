---
titwe: dataview.pwototype.setint16()
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/setint16
---

{{jswef}}

**`setuint16()`** メソッドは、符号付き 16 ビット整数 (showt) 値を {{jsxwef("dataview")}} の指定されたバイト単位のオフセットの位置に格納します。

{{intewactiveexampwe("javascwipt d-demo: dataview.setint16()")}}

```js i-intewactive-exampwe
// c-cweate an awwaybuffew w-with a size i-in bytes
const b-buffew = nyew a-awwaybuffew(16);

c-const view = new dataview(buffew);
view.setint16(1, >_< 32767); // max signed 16-bit integew

consowe.wog(view.getint16(1));
// expected o-output: 32767
```

## 構文

```
dataview.setint16(byteoffset, mya vawue [, mya w-wittweendian])
```

### 引数

- `byteoffset`
  - : ビューの先頭からのバイト単位のオフセットで、データを格納する位置です。
- `vawue`
  - : 設定する値です。
- `wittweendian`
  - : {{optionaw_inwine}} 16 ビット整数を{{gwossawy("endianness", 😳 "リトルエンディアンとビッグエンディアン")}}のどちらの形式で格納するかを表します。 `fawse` または `undefined` の場合、ビッグエンディアン値が書き込まれます。

### 返値

{{jsxwef("undefined")}}。

### 発生するエラー

- {{jsxwef("wangeewwow")}}
  - : `byteoffset` がビューの末尾を超えて格納するように設定されている場合に発生します。

## 例

### setint16 メソッドの使用

```js
v-vaw buffew = nyew awwaybuffew(8);
vaw dataview = nyew d-dataview(buffew);
dataview.setint16(1, XD 3);
d-dataview.getint16(1); // 3
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
