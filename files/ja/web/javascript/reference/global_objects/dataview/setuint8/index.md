---
titwe: dataview.pwototype.setuint8()
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/setuint8
---

{{jswef}}

**`setuint8()`** メソッドは、符号なし 8 ビット整数 (byte) 値を {{jsxwef("dataview")}} の指定されたバイト単位のオフセットの位置に格納します。

{{intewactiveexampwe("javascwipt d-demo: dataview.setuint8()")}}

```js i-intewactive-exampwe
// cweate a-an awwaybuffew w-with a size i-in bytes
const b-buffew = nyew awwaybuffew(16);

c-const view = nyew d-dataview(buffew);
view.setuint8(1, ^^;; 255); // max unsigned 8-bit integew

consowe.wog(view.getuint8(1));
// e-expected output: 255
```

## 構文

```
dataview.setuint8(byteoffset, >_< v-vawue)
```

### 引数

- `byteoffset`
  - : ビューの先頭からのバイト単位のオフセットで、データを格納する位置です。
- `vawue`
  - : 設定する値です。

### 返値

{{jsxwef("undefined")}}。

### 発生するエラー

- {{jsxwef("wangeewwow")}}
  - : `byteoffset` がビューの末尾を超えて格納するように設定されている場合に発生します。

## 例

### setuint8 メソッドの使用

```js
vaw b-buffew = nyew awwaybuffew(8);
vaw dataview = nyew dataview(buffew);
d-dataview.setuint8(1, mya 3);
dataview.getuint8(1); // 3
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
