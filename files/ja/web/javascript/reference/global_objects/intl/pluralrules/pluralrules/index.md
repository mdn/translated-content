---
title: Intl.PluralRules() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules
---

{{JSRef}}

**`Intl.PluralRules()`** コンストラクターは {{jsxref("Intl/PluralRules", "Intl.PluralRules")}} オブジェクトを作成します。

## 構文

```js
new Intl.PluralRules();
new Intl.PluralRules(locales);
new Intl.PluralRules(locales, options);
```

### 引数

- `locales` {{optional_inline}}
  - : BCP 47 言語タグの文字列、またはそのような文字列の配列です。 `locales` 引数の一般的な形式と解釈ついては、 {{jsxref("Intl", "Intl のページ", "#ロケールの識別とネゴシエーション", 1)}}を参照してください。
- `options` {{optional_inline}}

  - : 以下のプロパティの全部または一部を持つオブジェクトです。

    - `localeMatcher`
      - : 使用するロケールの照合アルゴリズムです。指定可能な値は "`lookup`" および "`best fit`" で、既定値は "`best fit`" です。このオプションの詳細は、 {{jsxref("Intl", "Intl のページ", "#Locale_negotiation", 1)}}を参照してください。
    - `type`

      - : 使用する種別です。指定可能な値は次の通りです。

        - "`cardinal`" は基数です（物の数量を表します）。これが既定値です。
        - "`ordinal`" は序数です（物事の順序や順位を表します。たとえば英語では "1st", "2nd", "3rd" です）。

    以下のプロパティは 2 つのグループに分けられます。
    `minimumIntegerDigits`, `minimumFractionDigits`, `maximumFractionDigits` が 1 つのグループで、
    `minimumSignificantDigits` と `maximumSignificantDigits` がもう一方です。第 2 のグループから 1 つでもプロパティが定義されると、第 1 のグループは無視されます。

    - `minimumIntegerDigits`
      - : 使用する整数部の最小桁数です。取りうる値は 1 から 21 までです。既定値は 1 です。
    - `minimumFractionDigits`
      - : 使用する小数部の最小桁数です。取りうる値は 0 から 20 までです。通常の数とパーセントの形式の既定値は 0 です。通貨形式の既定値は、 [ISO 4217 通貨コードリスト](https://www.currency-iso.org/en/home/tables/table-a1.html)で提供される下位単位の桁数です（リストに情報がない場合は 2 です）。
    - `maximumFractionDigits`
      - : 使用する小数部の最大桁数です。取りうる値は 0 から 20 までです。通常の数の形式では既定値は `minimumFractionDigits` と 3 の大きい方です。通貨形式の既定値は、 `minimumFractionDigits` と [ISO 4217 通貨コードリスト](https://www.currency-iso.org/en/home/tables/table-a1.html)で提供される下位単位の桁数（リストに情報がない場合は 2）の大きい方です。パーセント形式の既定値は、 `minimumFractionDigits` と 0 の大きい方です。
    - `minimumSignificantDigits`
      - : 使用する有効数字の最小桁数です。使用可能な値は 1 から 21 までです。既定値は 1 です。
    - `maximumSignificantDigits`
      - : 使用する有効数字の最大桁数です。使用可能な値は 1 から 21 までです。既定値は 21 です。

## 例

### 基本的な使い方

ロケールを指定しない基本的な使い方では、既定のロケールと既定のオプションで書式化された文字列が返されます。これは、例えば "dog" と "dogs" のように単数形と複数形を区別するのに便利です。

```js
var pr = new Intl.PluralRules();

pr.select(0);
// → 'other' （アメリカ英語のロケールの場合）

pr.select(1);
// → 'one' （アメリカ英語のロケールの場合）

pr.select(2);
// → 'other' （アメリカ英語のロケールの場合）
```

### options の使用

引数 `options` には `type` というプロパティがあり、`ordinal` に設定することで結果をカスタマイズすることができます。これは、例えば "1st", "2nd", "3rd", "4th", "42nd" などのように、序数を把握するのに便利です。

```js
var pr = new Intl.PluralRules("en-US", { type: "ordinal" });

const suffixes = new Map([
  ["one", "st"],
  ["two", "nd"],
  ["few", "rd"],
  ["other", "th"],
]);
const formatOrdinals = (n) => {
  const rule = pr.select(n);
  const suffix = suffixes.get(rule);
  return `${n}${suffix}`;
};

formatOrdinals(0); // '0th'
formatOrdinals(1); // '1st'
formatOrdinals(2); // '2nd'
formatOrdinals(3); // '3rd'
formatOrdinals(4); // '4th'
formatOrdinals(11); // '11th'
formatOrdinals(21); // '21st'
formatOrdinals(42); // '42nd'
formatOrdinals(103); // '103rd'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.PluralRules")}}
- {{jsxref("Global_Objects/Intl", "Intl")}}
