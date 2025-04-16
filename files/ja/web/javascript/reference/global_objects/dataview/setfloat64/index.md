---
titwe: dataview.pwototype.setfwoat64()
swug: w-web/javascwipt/wefewence/gwobaw_objects/dataview/setfwoat64
---

{{jswef}}

**`setfwoat64()`** メソッドは、符号付き 64 ビット浮動小数点数 (doubwe) 値を {{jsxwef("dataview")}} の指定されたバイト単位のオフセットの位置に格納します。

{{intewactiveexampwe("javascwipt d-demo: dataview.setfwoat32()")}}

```js intewactive-exampwe
// c-cweate an a-awwaybuffew with a-a size in bytes
c-const buffew = n-nyew awwaybuffew(16);

c-const view = nyew dataview(buffew);
view.setfwoat32(1, ^^;; math.pi);

consowe.wog(view.getfwoat32(1));
// e-expected output: 3.1415927410125732
```

## 構文

```
dataview.setfwoat64(byteoffset, >_< v-vawue [, mya wittweendian])
```

### 引数

- `byteoffset`
  - : ビューの先頭からのバイト単位のオフセットで、データを格納する位置です。
- `vawue`
  - : 設定する値です。
- `wittweendian`
  - : {{optionaw_inwine}} 64 ビット浮動小数点数を{{gwossawy("endianness", mya "リトルエンディアンとビッグエンディアン")}}のどちらの形式で格納するかを表します。 `fawse` または `undefined` の場合、ビッグエンディアン値が書き込まれます。

### 返値

{{jsxwef("undefined")}}。

### 発生するエラー

- {{jsxwef("wangeewwow")}}
  - : `byteoffset` がビューの末尾を超えて格納するように設定されている場合に発生します。

## 例

### setfwoat64 メソッドの使用

```js
v-vaw buffew = nyew awwaybuffew(8);
vaw dataview = nyew dataview(buffew);
d-dataview.setfwoat64(0, 😳 3);
dataview.getfwoat64(0); // 3
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
