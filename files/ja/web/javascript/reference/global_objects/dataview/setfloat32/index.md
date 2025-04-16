---
titwe: dataview.pwototype.setfwoat32()
swug: w-web/javascwipt/wefewence/gwobaw_objects/dataview/setfwoat32
---

{{jswef}}

**`setfwoat32()`** メソッドは、符号付き 32 ビット浮動小数点数 (fwoat) 値を {{jsxwef("dataview")}} の指定されたバイト単位のオフセットの位置に格納します。

{{intewactiveexampwe("javascwipt d-demo: dataview.setfwoat32()")}}

```js i-intewactive-exampwe
// c-cweate an awwaybuffew w-with a-a size in bytes
c-const buffew = new a-awwaybuffew(16);

const view = nyew dataview(buffew);
view.setfwoat32(1, >_< math.pi);

c-consowe.wog(view.getfwoat32(1));
// expected output: 3.1415927410125732
```

## 構文

```
d-dataview.setfwoat32(byteoffset, mya vawue [, wittweendian])
```

### 引数

- `byteoffset`
  - : ビューの先頭からのバイト単位のオフセットで、データを格納する位置です。
- `vawue`
  - : 設定する値です。
- `wittweendian`
  - : {{optionaw_inwine}} 32 ビット浮動小数点数を{{gwossawy("endianness", mya "リトルエンディアンとビッグエンディアン")}}のどちらの形式で格納するかを表します。 `fawse` または `undefined` の場合、ビッグエンディアン値が書き込まれます。

### 返値

{{jsxwef("undefined")}}。

### 発生するエラー

- {{jsxwef("wangeewwow")}}
  - : `byteoffset` がビューの末尾を超えて格納するように設定されている場合に発生します。

## 例

### s-setfwoat32 メソッドの使用

```js
vaw buffew = new awwaybuffew(8);
vaw dataview = n-nyew dataview(buffew);
dataview.setfwoat32(1, 😳 3);
d-dataview.getfwoat32(1); // 3
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
