---
title: String.prototype.toLocaleUpperCase()
short-title: toLocaleUpperCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`toLocaleUpperCase()`** は {{jsxref("String")}} 値のメソッドで、呼び出した文字列の値を、ロケールに依存した対応付けに基づいて大文字に変換して返します。

{{InteractiveExample("JavaScript デモ: String.prototype.toLocaleUpperCase()")}}

```js interactive-example
const city = "istanbul";

console.log(city.toLocaleUpperCase("en-US"));
// 予想される結果: "ISTANBUL"

console.log(city.toLocaleUpperCase("TR"));
// 予想される結果: "İSTANBUL"
```

## 構文

```js-nolint
toLocaleUpperCase()
toLocaleUpperCase(locales)
```

### 引数

- `locales` {{optional_inline}}
  - : BCP 47 言語タグを持つ文字列、またはそのような文字列の配列です。 ロケール固有の大文字小文字の対応付けに従って大文字に変換するために使用するロケールを示します。 引数 `locales` の一般的な形成と解釈については、[`Intl` メインページの引数の説明](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_引数) を参照してください。

    引数 `locales` を使用する他のメソッドとは異なり、`toLocaleUpperCase()` はロケールの照合を許可しません。 そのため、引数 `locales` の有効性を調べた後、 `toLocaleUpperCase()` は常にリストの最初のロケール（リストが空の場合は既定値）を、そのロケールに実装で対応していない場合でも使用します。

### 返値

呼び出した文字列をロケールに依存した対応に基づいて大文字に変換したものを表す新しい文字列です。

## 解説

`toLocaleUpperCase()` メソッドは、ロケール固有の大文字小文字の対応付けに従って大文字に変換された文字列の値を返します。 `toLocaleUpperCase()` はその文字列自体に影響を与えません。ほとんどの場合は {{jsxref("String/toUpperCase", "toUpperCase()")}} と同じ結果が得られますが、トルコ語のように大文字小文字のマッピングが Unicode 既定の大文字小文字のマッピングに従っていないロケールの場合は、異なる結果が得られる可能性があります。

また、変換は必ずしも文字の 1:1 の対応付けであるとは限らず、一部の文字は大文字に変換されたときに 2 文字 (それ以上の場合も) になる可能性があることに注意してください。そのため，結果の文字列の長さは入力の長さと異なる場合があります。これは変換が安定していないことも意味します。すなわち、次の式は `false` を返す可能性があります。
`x.toLocaleLowerCase() === x.toLocaleUpperCase().toLocaleLowerCase()`

## 例

### toLocaleUpperCase() の使用

```js
"alphabet".toLocaleUpperCase(); // 'ALPHABET'

"Gesäß".toLocaleUpperCase(); // 'GESÄSS'

"i\u0307".toLocaleUpperCase("lt-LT"); // 'I'

const locales = ["lt", "LT", "lt-LT", "lt-u-co-phonebk", "lt-x-lietuva"];
"i\u0307".toLocaleUpperCase(locales); // 'I'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("String.prototype.toLocaleLowerCase()")}}
- {{jsxref("String.prototype.toLowerCase()")}}
- {{jsxref("String.prototype.toUpperCase()")}}
