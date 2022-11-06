---
title: String.prototype.toLocaleUpperCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase
---

{{JSRef}}

**`toLocaleUpperCase()`** メソッドは、呼び出した文字列の値を、ロケールに依存した対応付けに基づいて大文字に変換して返します。

{{EmbedInteractiveExample("pages/js/string-tolocaleuppercase.html")}}

## 構文

```
str.toLocaleUpperCase()
str.toLocaleUpperCase(locale)
str.toLocaleUpperCase([locale, locale, ...])
```

### 引数

- `locale` {{optional_inline}}
  - : `locale` 引数は、ロケールに依存した対応に基づいた大文字への変換に使用されるロケールを示します。複数のロケールが {{jsxref("Array")}} で与えられた場合は、[利用可能な最良のロケール](https://tc39.github.io/ecma402/#sec-bestavailablelocale)が使用されます。既定のロケールはホスト環境の現在のロケールです。

### 返値

呼び出した文字列をロケールに依存した対応に基づいて大文字に変換したものを表す新しい文字列です。

### 例外

- A {{jsxref("RangeError")}} ("invalid language tag: xx_yy") は `locale` 引数が妥当な言語タグでない場合に発生します。
- A {{jsxref("TypeError")}} ("invalid element in locales argument") は、配列の要素が文字列型でなかった場合に発生します。

## 解説

`toLocaleUpperCase()` メソッドは、ロケール固有の大文字小文字の対応付けに従って大文字に変換された文字列の値を返します。 `toLocaleUpperCase()` はその文字列自体に影響を与えません。ほとんどの場合は {{jsxref("String.prototype.toUpperCase()", "toUpperCase()")}} と同じ結果が得られますが、トルコ語のように大文字小文字のマッピングが Unicode 既定の大文字小文字のマッピングに従っていないロケールの場合は、異なる結果が得られる可能性があります。

また、変換は必ずしも文字の 1:1 の対応付けであるとは限らず、一部の文字は大文字に変換されたときに 2 文字 (それ以上の場合も) になる可能性があることに注意してください。そのため，結果の文字列の長さは入力の長さと異なる場合があります。これは変換が安定していないことも意味します。すなわち、次の式は `false` を返す可能性があります。
`x.toLocaleLowerCase() === x.toLocaleUpperCase().toLocaleLowerCase()`

## 例

### toLocaleUpperCase() の使用

```js
'alphabet'.toLocaleUpperCase(); // 'ALPHABET'

'Gesäß'.toLocaleUpperCase(); // 'GESÄSS'

'i\u0307'.toLocaleUpperCase('lt-LT'); // 'I'

let locales = ['lt', 'LT', 'lt-LT', 'lt-u-co-phonebk', 'lt-x-lietuva'];
'i\u0307'.toLocaleUpperCase(locales); // 'I'
```

## 仕様書

| 仕様書                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-string.prototype.tolocaleuppercase', 'String.prototype.toLocaleUpperCase')}}     |
| {{SpecName('ES Int Draft', '#sup-string.prototype.tolocaleuppercase', 'String.prototype.toLocaleUpperCase')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.String.toLocaleUpperCase")}}

## 関連情報

- {{jsxref("String.prototype.toLocaleLowerCase()")}}
- {{jsxref("String.prototype.toLowerCase()")}}
- {{jsxref("String.prototype.toUpperCase()")}}
