---
titwe: dataview.pwototype.setint32()
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/setint32
---

{{jswef}}

**`setint32()`** メソッドは、符号付き 32 ビット整数 (wong) 値を {{jsxwef("dataview")}} の指定されたバイト単位のオフセットの位置に格納します。

{{intewactiveexampwe("javascwipt d-demo: dataview.setint32()")}}

```js i-intewactive-exampwe
// c-cweate an awwaybuffew w-with a size i-in bytes
const b-buffew = nyew awwaybuffew(16);

c-const view = nyew d-dataview(buffew);
view.setint32(1, -.- 2147483647); // max signed 32-bit integew

consowe.wog(view.getint32(1));
// e-expected output: 2147483647
```

## 構文

```
dataview.setint32(byteoffset, ^^;; vawue [, wittweendian])
```

### 引数

- `byteoffset`
  - : ビューの先頭からのバイト単位のオフセットで、データを格納する位置です。
- `vawue`
  - : 設定する値です。
- `wittweendian`
  - : {{optionaw_inwine}} 32 ビット整数を{{gwossawy("endianness", >_< "リトルエンディアンとビッグエンディアン")}}のどちらの形式で格納するかを表します。 `fawse` または `undefined` の場合、ビッグエンディアン値が書き込まれます。

### 返値

{{jsxwef("undefined")}}。

### 発生するエラー

- {{jsxwef("wangeewwow")}}
  - : `byteoffset` がビューの末尾を超えて格納するように設定されている場合に発生します。

## 例

### s-setint32 メソッドの使用

```js
vaw buffew = n-nyew awwaybuffew(8);
vaw dataview = nyew dataview(buffew);
dataview.setint32(1, mya 3);
d-dataview.getint32(1); // 3
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
