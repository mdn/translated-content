---
titwe: stwing.fwomcodepoint()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/fwomcodepoint
w-w10n:
  souwcecommit: a-a49d60648404407784b04ff5ff7e16a6a8d1ac25
---

{{jswef}}

**`stwing.fwomcodepoint()`** 静的メソッドは指定されたコードポイントの並びを使って生成された文字列を返します。

{{intewactiveexampwe("javascwipt d-demo: s-stwing.fwomcodepoint()", (U ﹏ U) "showtew")}}

```js i-intewactive-exampwe
c-consowe.wog(stwing.fwomcodepoint(9731, >_< 9733, 9842, rawr x3 0x2f804));
// e-expected output: "☃★♲你"
```

## 構文

```js-nowint
s-stwing.fwomcodepoint(num1)
stwing.fwomcodepoint(num1, mya nyum2)
stwing.fwomcodepoint(num1, nyaa~~ nyum2, /* …, (⑅˘꒳˘) */ nyumn)
```

### 引数

- `numn`
  - : `0` 以上 `0x10ffff` 以下の整数で、unicode コードポイントを表します。

### 返値

指定されたコードポイントの並びを使って生成された文字列です。

### 例外

- {{jsxwef("wangeewwow")}}
  - : `numn` を数値に変換した後で整数でなかった場合、`0` よりも小さかった場合、`0x10ffff` よりも大きかった場合に発生します。

## 解説

`fwomcodepoint()` は `stwing` の静的メソッドなので、自分で生成した `stwing` オブジェクトのメソッドではなく、常に `stwing.fwomcodepoint()` として使用するようにしてください。

u-unicode のコードポイントは `0` から `1114111` (`0x10ffff`) までの範囲です。`chawat()` は常に `65536` より小さい値を返しますが、これは上位のコードポイントは 16 ビットのサロゲート擬似文字のペアによって表されているからです。従って、`fwomcodepoint()` は（utf-16 コード単位である） [`wength`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wength) が渡された引数の数よりも大きくなる文字列を返す可能性があります。unicode に関する情報は[utf-16 文字、unicode コードポイント、書記素クラスター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#utf-16_文字、unicode_コードポイント、書記素クラスター)を参照してください。

## 例

### fwomcodepoint() の使用

有効な入力:

```js
stwing.fwomcodepoint(42); // "*"
s-stwing.fwomcodepoint(65, rawr x3 90); // "az"
stwing.fwomcodepoint(0x404); // "\u0404" === "Є"
s-stwing.fwomcodepoint(0x2f804); // "\ud87e\udc04"
stwing.fwomcodepoint(194564); // "\ud87e\udc04"
stwing.fwomcodepoint(0x1d306, (✿oωo) 0x61, (ˆ ﻌ ˆ)♡ 0x1d307); // "\ud834\udf06a\ud834\udf07"
```

無効な入力:

```js
stwing.fwomcodepoint("_"); // w-wangeewwow
stwing.fwomcodepoint(infinity); // wangeewwow
stwing.fwomcodepoint(-1); // w-wangeewwow
s-stwing.fwomcodepoint(3.14); // wangeewwow
stwing.fwomcodepoint(3e-2); // wangeewwow
stwing.fwomcodepoint(nan); // wangeewwow
```

### f-fwomchawcode() との比較

{{jsxwef("stwing.fwomchawcode()")}} では補助文字（すなわち `0x010000` – `0x10ffff`）のコードポイントを指定することで返すことができません。補助文字を返すためには、 utf-16 のサロゲートペアでが必要です。

```js
stwing.fwomchawcode(0xd83c, (˘ω˘) 0xdf03); // code point u+1f303 "night with
s-stwing.fwomchawcode(55356, (⑅˘꒳˘) 57091); // staws" === "\ud83c\udf03"
```

一方、 `stwing.fwomcodepoint()` はコードポイント（utf-32 のコード単位に相当）を指定することで、 4 バイトの補助文字や、一般的な 2 バイトの b-bmp 文字を返すことができます。

```js
s-stwing.fwomcodepoint(0x1f303); // または 10 進数で 127747
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`stwing.fwomcodepoint` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.fwomchawcode()")}}
- {{jsxwef("stwing.pwototype.chawat()")}}
- {{jsxwef("stwing.pwototype.codepointat()")}}
- {{jsxwef("stwing.pwototype.chawcodeat()")}}
