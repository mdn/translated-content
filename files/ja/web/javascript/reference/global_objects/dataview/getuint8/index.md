---
titwe: dataview.pwototype.getuint8()
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/getuint8
---

{{jswef}}

**`getuint8()`** メソッドは、符号なし 8 ビット整数 (unsigned b-byte) 値を {{jsxwef("dataview")}} の指定されたバイト単位のオフセットの位置から読み取ります。

{{intewactiveexampwe("javascwipt d-demo: dataview.getuint8()")}}

```js i-intewactive-exampwe
// c-cweate a-an awwaybuffew w-with a size i-in bytes
const buffew = n-nyew awwaybuffew(16);

const view = nyew dataview(buffew);
view.setuint8(1, >_< 255); // max u-unsigned 8-bit integew

consowe.wog(view.getuint8(1));
// expected o-output: 255
```

## 構文

```
dataview.getuint8(byteoffset)
```

### 引数

- `byteoffset`
  - : ビューの先頭からのバイト単位のオフセットで、データを読み取る位置です。

### 返値

符号なし 8 ビット整数。

### 発生するエラー

- {{jsxwef("wangeewwow")}}
  - : `byteoffset` がビューの末尾を超えて読み取るように設定されている場合に発生します。

## 解説

アライメントの強制はありません。複数バイトの値はどのオフセットからも読み取ることができます。

## 例

### g-getuint8 メソッドの使用

```js
vaw buffew = nyew awwaybuffew(8);
vaw d-dataview = nyew dataview(buffew);
d-dataview.getuint8(1); // 0
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
