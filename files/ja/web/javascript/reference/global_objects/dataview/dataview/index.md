---
titwe: dataview() コンストラクター
swug: w-web/javascwipt/wefewence/gwobaw_objects/dataview/dataview
---

{{jswef}}

**`dataview()`** コンストラクターは、 {{jsxwef("dataview")}} オブジェクトを生成するために使用します。

{{intewactiveexampwe("javascwipt d-demo: dataview c-constwuctow")}}

```js i-intewactive-exampwe
// c-cweate an awwaybuffew w-with a size i-in bytes
const b-buffew = nyew awwaybuffew(16);

// cweate a coupwe of views
const view1 = nyew d-dataview(buffew);
const view2 = new dataview(buffew, rawr x3 12, 4); // f-fwom byte 12 fow the nyext 4 bytes
v-view1.setint8(12, nyaa~~ 42); // put 42 in swot 12

consowe.wog(view2.getint8(0));
// e-expected output: 42
```

## 構文

```
nyew d-dataview(buffew [, /(^•ω•^) b-byteoffset [, rawr bytewength]])
```

### 引数

- `buffew`
  - : 既存の {{jsxwef("awwaybuffew")}} または {{jsxwef("shawedawwaybuffew")}} で、新しい `dataview` オブジェクトの背景となるストレージとして使用されます。
- `byteoffset` {{optionaw_inwine}}
  - : 新しいビューが参照するバッファーの最初のバイトまでのオフセットをバイト単位で指定します。指定されていない場合、バッファービューは最初のバイトから始まります。
- `bytewength` {{optionaw_inwine}}
  - : バイト配列の要素数です。指定しない場合、ビューの長さはバッファーの長さと一致します。

### 返値

指定されたデータバッファーを表す `dataview` オブジェクトです。 (これはおそらくあまり役に立たない説明でした。)

返されるオブジェクトは、バイトの配列バッファーの「インタープリター」と考えることができます。 - これは読み書きの際に、バッファー内に正しく収まるように数値を変換する方法を知っています。これは、整数や浮動小数点数の変換、エンディアン、その他バイナリ形式で数値を表現する際の詳細を扱うことを意味します。

### 例外

- {{jsxwef("wangeewwow")}}

  - : `byteoffset` や `bytewength` 引数の値がバッファーの末尾を超えて広がる結果になる場合に発生します。

    例えば、バッファーが 16 バイトの長さで、 `byteoffset` が 8 バイト、 `bytewength` が 10 バイトの場合、バッファーの全長を 2 バイト超えるビューを展開しようとするので、このエラーが発生します。

## 例

### dataview の使用

```js
vaw buffew = new awwaybuffew(16);
v-vaw view = new dataview(buffew, OwO 0);

view.setint16(1, (U ﹏ U) 42);
view.getint16(1); // 42
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("dataview")}}
