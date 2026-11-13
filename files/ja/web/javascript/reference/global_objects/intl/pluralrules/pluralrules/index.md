---
title: Intl.PluralRules() コンストラクター
short-title: Intl.PluralRules()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

**`Intl.PluralRules()`** コンストラクターは {{jsxref("Intl.PluralRules")}} オブジェクトを生成します。

## 構文

```js-nolint
new Intl.PluralRules()
new Intl.PluralRules(locales)
new Intl.PluralRules(locales, options)
```

> [!NOTE]
> `Intl.PluralRules()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) 付きでないと構築できません。`new` なしで呼び出そうとすると {{jsxref("TypeError")}} が発生します。

### 引数

- `locales` {{optional_inline}}
  - : {{glossary("BCP 47 language tag", "BCP 47 言語タグ")}}または {{jsxref("Intl.Locale")}} インスタンスを持つ文字列、あるいはそのようなロケール識別子の配列。`undefined` が渡された場合、または指定されたロケール識別子のいずれも対応していない場合は、ランタイムのデフォルトのロケールが使用されます。`locales` 引数の一般的な形と解釈については、[`Intl` メインページの引数の説明](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_引数)を参照してください。
- `options` {{optional_inline}}
  - : 以下のプロパティ（取得順、すべてオプション）が含まれているオブジェクトです。
    - `localeMatcher`
  - : 使用するロケール照合アルゴリズムです。使用可能な値は `"lookup"` および `"best fit"` です。既定値は `"best fit"` です。このオプションについての情報は、[ロケールの識別とネゴシエーション](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl#ロケールの識別とネゴシエーション)を参照してください。
    - `type`
      - : 使用する種別です。指定可能な値は次の通りです。
        - `"cardinal"` （デフォルト）
          - : 数値です（物の数量を表します）。
        - `"ordinal"`
          - : 序数です（物事の順序や順位を表します。たとえば英語では "1st", "2nd", "3rd" です）。

    `Intl.PluralRules` は `Intl.NumberFormat()` の[桁オプション](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#桁オプション)にも対応しています（詳しくは `Intl.NumberFormat()` を参照してください）。
    - `minimumIntegerDigits`
    - `minimumFractionDigits`
    - `maximumFractionDigits`
    - `minimumSignificantDigits`
    - `maximumSignificantDigits`
    - `roundingPriority`
    - `roundingIncrement`
    - `roundingMode`

    これらのオプションは、`Intl.NumberFormat` の `notation` オプションが `"standard"`、`style` が `"decimal"` であるかのように解釈されます。

### 例外

- {{jsxref("RangeError")}}
  - : `locales` または `options` に無効な値が含まれている場合に発生します。

## 例

### 基本的な使い方

ロケールを指定しない基本的な使い方では、既定のロケールと既定のオプションで書式化された文字列が返されます。これは、例えば "dog" と "dogs" のように単数形と複数形を区別するのに便利です。

```js
const pr = new Intl.PluralRules();

pr.select(0); // 'other' （アメリカ英語のロケールの場合）

pr.select(1); // 'one' （アメリカ英語のロケールの場合）

pr.select(2); // 'other' （アメリカ英語のロケールの場合）
```

### options の使用

引数 `options` には `type` というプロパティがあり、`ordinal` に設定することで結果をカスタマイズすることができます。これは、例えば "1st", "2nd", "3rd", "4th", "42nd" などのように、序数を把握するのに便利です。

```js
const pr = new Intl.PluralRules("en-US", { type: "ordinal" });

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
- {{jsxref("Intl")}}
