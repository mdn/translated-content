---
title: String.prototype.toLocaleLowerCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase
---

{{JSRef}}

**`toLocaleLowerCase()`** メソッドは、呼び出した文字列の値を、ロケールに依存した対応付けに基づいて小文字にに変換して返します。

{{EmbedInteractiveExample("pages/js/string-tolocalelowercase.html")}}

## 構文

```
str.toLocaleLowerCase()
str.toLocaleLowerCase(locale)
str.toLocaleLowerCase([locale, locale, ...])
```

### 引数

- `locale` {{optional_inline}}
  - : `locale` 引数は、ロケールに依存した対応に基づいた小文字への変換に使用されるロケールを示します。複数のロケールが {{jsxref("Array")}} で与えられた場合は、[利用可能な最良のロケール](https://tc39.github.io/ecma402/#sec-bestavailablelocale)が使用されます。既定のロケールはホスト環境の現在のロケールです。

### 返値

呼び出した文字列をロケールに依存した対応に基づいて小文字に変換したものを表す新しい文字列です。

### 例外

- A {{jsxref("RangeError")}} ("invalid language tag: xx_yy") は `locale` 引数が妥当な言語タグでない場合に発生します。
- A {{jsxref("TypeError")}} ("invalid element in locales argument") は、配列の要素が文字列型でなかった場合に発生します。

## 解説

`toLocaleLowerCase()` メソッドは、ロケール固有の大文字小文字の対応付けに従って小文字に変換された文字列の値を返します。 `toLocaleLowerCase()` はその文字列自体に影響を与えません。ほとんどの場合は {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} と同じ結果が得られますが、トルコ語のように大文字小文字のマッピングが Unicode 既定の大文字小文字のマッピングに従っていないロケールの場合は、異なる結果が得られる可能性があります。

## 例

### toLocaleLowerCase() の使用

```js
'ALPHABET'.toLocaleLowerCase(); // 'alphabet'

'\u0130'.toLocaleLowerCase('tr') === 'i';    // true
'\u0130'.toLocaleLowerCase('en-US') === 'i'; // false

let locales = ['tr', 'TR', 'tr-TR', 'tr-u-co-search', 'tr-x-turkish'];
'\u0130'.toLocaleLowerCase(locales) === 'i'; // true
```

## 仕様書

| 仕様書                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-string.prototype.tolocalelowercase', 'String.prototype.toLocaleLowerCase')}}     |
| {{SpecName('ES Int Draft', '#sup-string.prototype.tolocalelowercase', 'String.prototype.toLocaleLowerCase')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.String.toLocaleLowerCase")}}

## 関連情報

- {{jsxref("String.prototype.toLocaleUpperCase()")}}
- {{jsxref("String.prototype.toLowerCase()")}}
- {{jsxref("String.prototype.toUpperCase()")}}
