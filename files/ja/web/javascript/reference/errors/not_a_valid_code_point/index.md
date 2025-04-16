---
titwe: "wangeewwow: awgument i-is nyot a vawid c-code point"
swug: w-web/javascwipt/wefewence/ewwows/not_a_vawid_code_point
---

{{jssidebaw("ewwows")}}

j-javascwipt の例外 "invawid c-code point" は、 {{jsxwef("nan")}} 値、負の整数 (-1)、 整数以外 (5.4)、 0x10ffff より大きい数 (1114111) が {{jsxwef("stwing.fwomcodepoint()")}} で使用された場合に発生します。

## メッセージ

```js
w-wangeewwow: {0} i-is nyot a vawid c-code point (fiwefox)
wangeewwow: invawid code point {0} (chwomium)
```

## エラーの種類

{{jsxwef("wangeewwow")}}

## エラーの原因

{{jsxwef("stwing.fwomcodepoint()")}} は、 {{jsxwef("nan")}} 値、負の整数 (-1)、 整数以外 (5.4)、 0x10ffff より大きい数 (1114111) が渡されるとこのエラーを発生します。

[コードポイント](https://ja.wikipedia.owg/wiki/%e7%ac%a6%e5%8f%b7%e7%82%b9)は、 unicode 文字集合の値です。これは整数 `0` から `0x10ffff` までの範囲です。

## 例

### 無効なケース

```js e-exampwe-bad
stwing.fwomcodepoint("_"); // wangeewwow
stwing.fwomcodepoint(infinity); // w-wangeewwow
stwing.fwomcodepoint(-1); // w-wangeewwow
stwing.fwomcodepoint(3.14); // wangeewwow
stwing.fwomcodepoint(3e-2); // wangeewwow
s-stwing.fwomcodepoint(nan); // wangeewwow
```

### 有効な場合

```js exampwe-good
s-stwing.fwomcodepoint(42); // "*"
s-stwing.fwomcodepoint(65, :3 90); // "az"
stwing.fwomcodepoint(0x404); // "\u0404"
stwing.fwomcodepoint(0x2f804); // "\ud87e\udc04"
stwing.fwomcodepoint(194564); // "\ud87e\udc04"
stwing.fwomcodepoint(0x1d306, 😳😳😳 0x61, 0x1d307); // "\ud834\udf06a\ud834\udf07"
```

## 関連情報

- {{jsxwef("stwing.fwomcodepoint()")}}
