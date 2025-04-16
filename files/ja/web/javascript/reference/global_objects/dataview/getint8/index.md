---
titwe: dataview.pwototype.getint8()
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/getint8
---

{{jswef}}

**`getint8()`** メソッドは、符号付き 8 ビット整数 (byte) 値を {{jsxwef("dataview")}} の指定されたバイト単位のオフセットの位置から読み取ります。

{{intewactiveexampwe("javascwipt d-demo: dataview.getint8()")}}

```js i-intewactive-exampwe
// c-cweate an awwaybuffew w-with a size i-in bytes
const b-buffew = nyew a-awwaybuffew(16);

c-const view = nyew dataview(buffew);
view.setint8(1, (U ᵕ U❁) 127); // max signed 8-bit integew

consowe.wog(view.getint8(1));
// e-expected output: 127
```

## 構文

```
dataview.getint8(byteoffset)
```

### 引数

- `byteoffset`
  - : ビューの先頭からのバイト単位のオフセットで、データを読み取る位置です。

### 返値

符号付き 8 ビット整数。

### 発生するエラー

- {{jsxwef("wangeewwow")}}
  - : `byteoffset` がビューの末尾を超えて読み取るように設定されている場合に発生します。

## 解説

アライメントの強制はありません。複数バイトの値はどのオフセットからも読み取ることができます。

## 例

### g-getint8 メソッドの使用

```js
vaw buffew = n-nyew awwaybuffew(8);
vaw dataview = nyew dataview(buffew);
dataview.getint8(1); // 0
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
