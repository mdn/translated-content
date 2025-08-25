---
title: Number.isSafeInteger()
short-title: isSafeInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Number.isSafeInteger()`** は静的メソッドで、指定された値が*安全な整数*であるかどうかを判定します。

{{InteractiveExample("JavaScript デモ: Number.isSafeInteger()")}}

```js interactive-example
function warn(x) {
  if (Number.isSafeInteger(x)) {
    return "Precision safe.";
  }
  return "Precision may be lost!";
}

console.log(warn(Math.pow(2, 53)));
// 予想される結果: "Precision may be lost!"

console.log(warn(Math.pow(2, 53) - 1));
// 予想される結果: "Precision safe."
```

## 構文

```js-nolint
Number.isSafeInteger(testValue)
```

### 引数

- `testValue`
  - : 安全な整数かどうかをテストする値です。

### 返値

論理値で、与えられた数値が安全な整数である数値であれば `true` を返します。そうでなければ `false` です。

## 解説

安全な整数とは、 -(2<sup>53</sup> - 1) から 2<sup>53</sup> - 1 までのすべての整数であり、両端を含みます (±9,007,199,254,740,991)。安全な整数は次のようなものです。

- 正確に IEEE-754 倍精度数として表現することができる
- その IEEE-754 表現は、他の整数を IEEE-754 の表現に適合するように、丸めた結果にはならない

例えば、2<sup>53</sup> - 1 は安全な整数です。正確に表現することができ、他の整数は、どの IEEE-754 丸めモードの下で丸めたものにもなっていません。対照的に、2<sup>53</sup> は安全な整数では*ありません*。これは IEEE-754 で正確に表現できますが、整数値 2<sup>53</sup> + 1 は直接 IEEE-754 では表現できず、四捨五入や切り捨ての丸めによって 2<sup>53</sup> になるからです。

完全な精度で ~9 千兆より大きい値や小さい値を扱うには、[任意精度演算ライブラリー](https://ja.wikipedia.org/wiki/%E4%BB%BB%E6%84%8F%E7%B2%BE%E5%BA%A6%E6%BC%94%E7%AE%97)を使用する必要があります。数値の浮動小数点表現の詳細については、 [What Every Programmer Needs to Know about Floating Point Arithmetic](https://floating-point-gui.de/) を参照してください。s

巨大な整数値については、 {{jsxref("BigInt")}} 型を使用することを検討してください。

## 例

### isSafeInteger() の使用

```js
Number.isSafeInteger(3); // true
Number.isSafeInteger(2 ** 53); // false
Number.isSafeInteger(2 ** 53 - 1); // true
Number.isSafeInteger(NaN); // false
Number.isSafeInteger(Infinity); // false
Number.isSafeInteger("3"); // false
Number.isSafeInteger(3.1); // false
Number.isSafeInteger(3.0); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Number.isSafeInteger` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-number)
- [es-shims による `Number.isSafeInteger` のポリフィル](https://www.npmjs.com/package/number.issafeinteger)
- {{jsxref("Number")}}
- {{jsxref("Number.MIN_SAFE_INTEGER")}}
- {{jsxref("Number.MAX_SAFE_INTEGER")}}
- {{jsxref("BigInt")}}
