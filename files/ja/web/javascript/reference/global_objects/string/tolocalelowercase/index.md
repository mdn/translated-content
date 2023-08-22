---
title: String.prototype.toLocaleLowerCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase
l10n:
  sourceCommit: b5c766f4eecb4fcf9d8ba175caddb94f7c3e9d20
---

{{JSRef}}

**`toLocaleLowerCase()`** メソッドは、呼び出した文字列の値を、ロケールに依存した対応付けに基づいて小文字に変換して返します。

{{EmbedInteractiveExample("pages/js/string-tolocalelowercase.html")}}

## 構文

```js-nolint
toLocaleLowerCase()
toLocaleLowerCase(locales)
```

### 引数

- `locales` {{optional_inline}}

  - : BCP 47 言語タグを持つ文字列、またはそのような文字列の配列です。 ロケール固有の大文字小文字の対応付けに従って小文字に変換するために使用するロケールを示します。 引数 `locales` の一般的な形成と解釈については、[`Intl` メインページの引数の説明](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_引数) を参照してください。

    引数 `locales` を使用する他のメソッドとは異なり、`toLocaleLowerCase()` はロケールの照合を許可しません。 そのため、引数 `locales` の有効性を調べた後、 `toLocaleLowerCase()` は常にリストの最初のロケール（リストが空の場合は既定値）を、そのロケールに実装で対応していない場合でも使用します。

### 返値

呼び出した文字列をロケールに依存した対応に基づいて小文字に変換したものを表す新しい文字列です。

## 解説

`toLocaleLowerCase()` メソッドは、ロケール固有の大文字小文字の対応付けに従って小文字に変換された文字列の値を返します。`toLocaleLowerCase()` はその文字列自体に影響を与えません。ほとんどの場合は {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} と同じ結果が得られますが、トルコ語のように大文字小文字のマッピングが Unicode 既定の大文字小文字のマッピングに従っていないロケールの場合は、異なる結果が得られる可能性があります。

## 例

### toLocaleLowerCase() の使用

```js
"ALPHABET".toLocaleLowerCase(); // 'alphabet'

"\u0130".toLocaleLowerCase("tr") === "i"; // true
"\u0130".toLocaleLowerCase("en-US") === "i"; // false

const locales = ["tr", "TR", "tr-TR", "tr-u-co-search", "tr-x-turkish"];
"\u0130".toLocaleLowerCase(locales) === "i"; // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("String.prototype.toLocaleUpperCase()")}}
- {{jsxref("String.prototype.toLowerCase()")}}
- {{jsxref("String.prototype.toUpperCase()")}}
