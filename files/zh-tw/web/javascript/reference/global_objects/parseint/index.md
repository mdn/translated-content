---
title: parseInt()
slug: Web/JavaScript/Reference/Global_Objects/parseInt
---

{{jsSidebar("Objects")}}

**`parseInt()`** 函式能將輸入的字串轉成整數。

{{EmbedInteractiveExample("pages/js/globalprops-parseint.html")}}

## 語法

```js-nolint
parseInt(string, radix);
```

### 參數

- `string`
  - : 待轉成數字的字串。若 `string` 參數類型不是字串的話，會先將其轉成字串（相當於先執行 [`ToString`](http://www.ecma-international.org/ecma-262/6.0/#sec-tostring) 再執行 `parseInt`）空白值會被忽略。
- `radix`
  - : 從 2 到 36，能代表該進位系統的數字。例如說指定 `10` 就等於指定十進位。**一定要定義這個參數**以避免他人的困惑、也好預估函式的行為。如果沒有指定 radix 的話，給出的結果會按照實做不同而異，請注意，通常預設值**不是** 10 進位。

### 回傳值

藉由給定字串作轉換後的數字。若第一個字符無法轉換為數字，則回傳 {{jsxref("NaN")}}。

## 說明

`parseInt` 函式會把第一個參數變成字串、解析它、再回傳整數或是 `NaN`。如果不是 `NaN`，回傳值會把第一個參數，參照指定的 _radix_ 後，以十進位表示。例如，_radix_ 指定為 10 的話，它會以十進位為單位轉換、8 是八進位、16 是十六進位，依此類推。For radices above `10`, the letters of the alphabet indicate numerals greater than `9`. For example, for hexadecimal numbers (base 16), `A` through `F` are used.

如果說 `parseInt` 碰上了無法被 radix 指定的進位制所轉換的字元，它會忽略該字元、以及其後所有字元，並只回傳至該位置為止的解析數值結果。`parseInt` 將數字擷取、轉換成整數數值。 可以接受字串首尾出現空白。

Because some numbers include the `e` character in their string representation (e.g. **`6.022e23`**), using `parseInt` to truncate numeric values will produce unexpected results when used on very large or very small numbers. `parseInt` should not be used as a substitute for {{jsxref("Math.floor()")}}.

如果 _radix_ 是 `undefined` 或 0（或留空）的話，JavaScript 會：

- 如果 `string` 由 "0x" 或 "0X" 開始，_radix_ 會變成代表十六進位的 16，並解析字串的餘數。
- 如果 `string` 由 0 開始，則 _radix_ 會變成代表八進位的 8 或十進位的 10，但到底會變成 8 還是 10 則取決於各實做。ECMAScript 規定用代表十進位的 10，但也不是所有瀏覽器都支持。因此，**使用 `parseInt` 時一定要指定 radix**。
- 如果 `string` 由其他字串開始，radix 就會是十進位的 10。

如果第一個字串無法被解析為任何數字，`parseInt` 會回傳 `NaN`。

For arithmetic purposes, the `NaN` value is not a number in any radix. You can call the {{jsxref("isNaN")}} function to determine if the result of `parseInt` is `NaN`. If `NaN` is passed on to arithmetic operations, the operation results will also be `NaN`.

若想將數字轉成特定的進位制，可使用 `intValue.toString(radix)`。

## 範例

### 使用 `parseInt`

以下的範例，回傳的值均為 **`15`**：

```js
parseInt(" 0xF", 16);
parseInt(" F", 16);
parseInt("17", 8);
parseInt(021, 8);
parseInt("015", 10); // parseInt(015, 10); will return 15
parseInt(15.99, 10);
parseInt("15,123", 10);
parseInt("FXX123", 16);
parseInt("1111", 2);
parseInt("15*3", 10);
parseInt("15e2", 10);
parseInt("15px", 10);
parseInt("12", 13);
```

以下均回傳 **`NaN`**：

```js
parseInt("Hello", 8); // 根本不是數字
parseInt("546", 2); // 在二進位無效
```

以下的範例，回傳的值均為 **`-15`**：

```js
parseInt("-F", 16);
parseInt("-0F", 16);
parseInt("-0XF", 16);
parseInt(-15.1, 10);
parseInt(" -17", 8);
parseInt(" -15", 10);
parseInt("-1111", 2);
parseInt("-15e1", 10);
parseInt("-12", 13);
```

下例會回傳 **`4`**：

```js
parseInt(4.7, 10);
parseInt(4.7 * 1e22, 10); // Very large number becomes 4
parseInt(0.00000000000434, 10); // Very small number becomes 4
```

下例會回傳 **`224`**:

```js
parseInt("0e0", 16);
```

## 無 radix 情況下的八進制

雖說已在 ECMAScript 3 提議並於 ECMAScript 5 禁用，但部分 javascript 編譯器仍會在特殊情況下，將 str 視作八進位數字（當數字以 `0` 開頭時）。以下為可能發生這種問題的情況：（**永遠要宣告 radix 以避開這不可靠的行為**）

```js
parseInt("0e0"); // 0
parseInt("08"); // 0, '8' is not an octal digit.
```

### ECMAScript 5 移除八進位轉譯（octal interpretation）

The ECMAScript 5 specification of the function `parseInt` no longer allows implementations to treat Strings beginning with a `0` character as octal values. ECMAScript 5 states:

The `parseInt` function produces an integer value dictated by interpretation of the contents of the string argument according to the specified radix. Leading white space in string is ignored. If radix is undefined or `0`, it is assumed to be `10` except when the number begins with the character pairs `0x` or `0X`, in which case a radix of 16 is assumed.

This differs from ECMAScript 3, which discouraged but allowed octal interpretation.

Many implementations have not adopted this behavior as of 2013, and because older browsers must be supported, **always specify a radix**.

## 嚴謹的解析 function

有的時候，使用更嚴謹的 code 能夠更精確地轉換整數值。Regular expression 可以幫你：

```js
filterInt = function (value) {
  if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value)) return Number(value);
  return NaN;
};

console.log(filterInt("421")); // 421
console.log(filterInt("-421")); // -421
console.log(filterInt("+421")); // 421
console.log(filterInt("Infinity")); // Infinity
console.log(filterInt("421e+0")); // NaN
console.log(filterInt("421hop")); // NaN
console.log(filterInt("hop1.61803398875")); // NaN
console.log(filterInt("1.61803398875")); // NaN
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Global_Objects/parseFloat", "parseFloat()")}}
- {{jsxref("Number.parseFloat()")}}
- {{jsxref("Number.parseInt()")}}
- {{jsxref("Global_Objects/isNaN", "isNaN()")}}
- {{jsxref("Number.toString()")}}
- {{jsxref("Object.valueOf")}}
