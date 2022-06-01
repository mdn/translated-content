---
title: Number.isSafeInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger
tags:
  - ECMAScript 2015
  - JavaScript
  - メソッド
  - Number
  - ポリフィル
browser-compat: javascript.builtins.Number.isSafeInteger
translation_of: Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger
---
{{JSRef}}

**`Number.isSafeInteger()`** メソッドは、指定された値が*安全な整数*であるかどうかを判定します。

{{EmbedInteractiveExample("pages/js/number-issafeinteger.html")}}

安全な整数とは、以下のような整数です。

- 正確に IEEE-754 倍精度数として表現することができる
- その IEEE-754 の表現は、他の整数を IEEE-754 の表現に適合するように、丸めた結果にはならない

例えば、`2^53 - 1` は安全な整数です。正確に表現することができ、他の整数は、どの IEEE-754 丸めモードの下で丸めたものにもなっていません。対照的に、`2^53` は安全な整数では*ありません*。これは IEEE-754 で正確に表現されますが、整数値 `2^53 + 1` が直接 IEEE-754 では表現できず、四捨五入や切り捨ての丸めによって `2^53` になるからです。安全な整数は `-(2^53 - 1)` 以上 `2^53 - 1` 以下の整数値です (± `9007199254740991` または ± 9,007,199,254,740,991 です)。

完全な精度で ~9 兆より大きい値や小さい値を扱うには、[任意精度演算ライブラリー](https://ja.wikipedia.org/wiki/%E4%BB%BB%E6%84%8F%E7%B2%BE%E5%BA%A6%E6%BC%94%E7%AE%97)を使用する必要があります。数値の浮動小数点表現の詳細については、 [What Every Programmer Needs to Know about Floating Point Arithmetic](https://floating-point-gui.de/) を参照してください。s

巨大な整数値については、 {{jsxref("BigInt")}} 型を使用することを検討してください。

## 構文

```js
Number.isSafeInteger(testValue)
```

### 引数

- `testValue`
  - : 安全な整数かどうかをテストする値です。

### 返値

論理値で、与えられた数値が安全な整数であるかどうかを示します。

## ポリフィル

```js
Number.isSafeInteger = Number.isSafeInteger || function (value) {
   return Number.isInteger(value) && Math.abs(value) <= Number.MAX_SAFE_INTEGER;
};
```

## 例

### isSafeInteger の使用

```js
Number.isSafeInteger(3);                    // true
Number.isSafeInteger(Math.pow(2, 53));      // false
Number.isSafeInteger(Math.pow(2, 53) - 1);  // true
Number.isSafeInteger(NaN);                  // false
Number.isSafeInteger(Infinity);             // false
Number.isSafeInteger('3');                  // false
Number.isSafeInteger(3.1);                  // false
Number.isSafeInteger(3.0);                  // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `Number.isSafeInteger` のポリフィルは [`core-js`](https://github.com/zloirock/core-js#ecmascript-number) で利用できます
- このメソッドが所属する {{jsxref("Number")}} オブジェクト
- {{jsxref("Number.MIN_SAFE_INTEGER")}}
- {{jsxref("Number.MAX_SAFE_INTEGER")}}
- {{jsxref("BigInt")}}
