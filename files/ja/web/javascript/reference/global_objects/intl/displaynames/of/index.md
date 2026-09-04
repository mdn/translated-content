---
title: Intl.DisplayNames.prototype.of()
short-title: of()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/of
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

**`of()`** は {{jsxref("Intl.DisplayNames")}} インスタンスのメソッドで、コードを受け取り、`Intl.DisplayNames` をインスタンス化するときに指定されたロケールとオプションに基づいて文字列を返します。

{{InteractiveExample("JavaScript デモ: Intl.DisplayNames")}}

```js interactive-example
const regionNamesInEnglish = new Intl.DisplayNames(["en"], { type: "region" });
const regionNamesInTraditionalChinese = new Intl.DisplayNames(["zh-Hant"], {
  type: "region",
});

console.log(regionNamesInEnglish.of("US"));
// 予想される結果: "United States"

console.log(regionNamesInTraditionalChinese.of("US"));
// 予想される結果: "美國"
```

## 構文

```js-nolint
of(code)
```

### 引数

- `code`
  - : 与える `code` は、 `type` によって変わります。
    - type が "region" である場合、`code` は [2 文字の ISO 3166 地域コード](https://www.iso.org/iso-3166-country-codes.html)または [3 桁の M49 地理的領域](https://unstats.un.org/unsd/methodology/m49/)である必要があります。[`unicode_region_subtag`](https://unicode.org/reports/tr35/#unicode_region_subtag) の文法に従う必要があります。小文字のコード（`"us"` など）では、すべての環境で確実に動作しないことがあるため、大文字のコード（`"US"` など）を使用してください。
    - type が "script" である場合、`code` は [ISO-15924 文字体系の 4 文字コード](https://unicode.org/iso15924/iso15924-codes.html)である必要があります。[`unicode_script_subtag`](https://unicode.org/reports/tr35/#unicode_script_subtag) の文法に従う必要があります。
    - type が "language" である場合、`code` は [`unicode_language_id`](https://unicode.org/reports/tr35/#Unicode_language_identifier) の非終端記号と一致する必要があります。
    - type が "currency" である場合、`code` は [3 文字の ISO 4217 通貨コード](https://www.iso.org/iso-4217-currency-codes.html)である必要があります。アルファベットちょうど 3 文字である必要があります。
    - 型が "dateTimeField" の場合、`code` は `"era"`、`"year"`、`"quarter"`、`"month"`、`"weekOfYear"`、`"weekday"`、`"day"`、`"dayPeriod"`、`"hour"`、`"minute"`、`"second"`、`"timeZoneName"` のいずれかである必要があります。
    - 型が "calendar" の場合、`code` は[暦キー](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar)である必要があります。また、[Unicode ロケール識別子](https://unicode.org/reports/tr35/#32-unicode-locale-identifier) の `type` 構文に従う必要があります。

### 返値

言語に応じて書式化された文字列、または、入力データが存在せず、かつ `fallback` が `"none"` の場合は `undefined` となります。

> [!NOTE]
> `fallback` は、`code` が構造的に有効な場合にのみ使用されます。詳細は [fallback の使用](#fallback_の使用)をご覧ください。

### 例外

- {{jsxref("RangeError")}}
  - : 指定された `type` に対して `code` の構造が有効でない場合、例外が発生します。

## 例

### of メソッドの使用

```js
const regionNames = new Intl.DisplayNames("en", { type: "region" });
regionNames.of("419"); // "Latin America"

const languageNames = new Intl.DisplayNames("en", { type: "language" });
languageNames.of("fr"); // "French"

const currencyNames = new Intl.DisplayNames("en", { type: "currency" });
currencyNames.of("EUR"); // "Euro"

const languageNamesStandard = new Intl.DisplayNames("fr", {
  type: "language",
  languageDisplay: "standard",
});
languageNamesStandard.of("fr-CA"); // "français (Canada)"

const languageNamesDialect = new Intl.DisplayNames("fr", {
  type: "language",
  languageDisplay: "dialect",
});
languageNamesDialect.of("fr-CA"); // "français canadien"
```

### fallback の使用

`Intl.DisplayNames` を `fallback: "code"` 付きで生成した場合、入力の構造は有効であるもののデータがない場合、`of()` メソッドは `code` を返します。`fallback` が `"none"` の場合は、`undefined` が返されます。

```js
console.log(
  new Intl.DisplayNames("en", { type: "region", fallback: "code" }).of("ZL"),
); // "ZL"

console.log(
  new Intl.DisplayNames("en", { type: "region", fallback: "none" }).of("ZL"),
); // undefined
```

ただし、これは `code` が構造的に有効な場合にのみ適用されます。例えば、`type` が `"region"` であるにもかかわらず、`code` が `unicode_region_subtag` の文法（2 文字の英字または 3 桁の数字）に従っていない場合、代替されるのではなく、直接 {{jsxref("RangeError")}} が発生します。

```js
console.log(
  new Intl.DisplayNames("en", { type: "region", fallback: "code" }).of("ZLC"),
); // throws RangeError: invalid value "ZLC" for option region
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.DisplayNames")}}
