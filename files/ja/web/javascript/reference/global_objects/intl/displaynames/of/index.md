---
title: Intl.DisplayNames.prototype.of()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/of
---

{{JSRef}}

**`Intl.DisplayNames.prototype.of()`** メソッドは、コードを受け取り、Intl.DisplayNames をインスタンス化するときに指定されたロケールとオプションに基づいて文字列を返します。

{{EmbedInteractiveExample("pages/js/intl-displaynames.html")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

## 構文

```js
of(code);
```

### 引数

- `code`

  - : 与える `code` は、 `type` によって変わります。

    - type が "region" である場合、コードは [ISO-3166 地域の 2 文字コード](https://www.iso.org/iso-3166-country-codes.html)または [three digits UN M49 Geographic Regions](https://unstats.un.org/unsd/methodology/m49/) である必要があります。
    - type が "script" である場合、コードは [ISO-15924 文字体系の 4 文字コード](https://unicode.org/iso15924/iso15924-codes.html)である必要があります。
    - type が "language" である場合、コードは _languageCode_ \["-" _scriptCode_] \["-" _regionCode_ ] \*("-" _variant_ ) の形である必要があり、これは [UTS 35's Unicode Language and Locale Identifiers grammar](https://unicode.org/reports/tr35/#Unicode_language_identifier) の unicode\_language\_id の構文です。 _languageCode_ は 2 文字の ISO 639-1 言語コードまたは 3 文字の ISO 639-2 言語コードです。
    - type が "currency" である場合、コードは [3 文字の ISO 4217 通貨コード](https://www.iso.org/iso-4217-currency-codes.html)である必要があります。

### 返値

その言語における書式化された文字列です。

## 例

### of メソッドの使用

```js
let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
regionNames.of("419"); // "Latin America"

let languageNames = new Intl.DisplayNames(["en"], { type: "language" });
languageNames.of("fr"); // "French"

let currencyNames = new Intl.DisplayNames(["en"], { type: "currency" });
currencyNames.of("EUR"); // "Euro"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.DisplayNames")}}
