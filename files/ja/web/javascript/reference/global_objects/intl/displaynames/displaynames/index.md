---
title: Intl.DisplayNames() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/DisplayNames
l10n:
  sourceCommit: 21d44fab158378a975fd89ec37e46ec68a411bf2
---

{{JSRef}}

**`Intl.DisplayNames()`** コンストラクターは、 {{jsxref("Intl.DisplayNames")}} オブジェクトを生成します。

{{InteractiveExample("JavaScript デモ: Intl.DisplayNames")}}

```js interactive-example
const regionNamesInEnglish = new Intl.DisplayNames(["en"], { type: "region" });
const regionNamesInTraditionalChinese = new Intl.DisplayNames(["zh-Hant"], {
  type: "region",
});

console.log(regionNamesInEnglish.of("US"));
// Expected output: "United States"

console.log(regionNamesInTraditionalChinese.of("US"));
// Expected output: "美國"
```

## 構文

```js-nolint
new Intl.DisplayNames(locales, options)
```

> [!NOTE]
> `Intl.DisplayNames()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) を付けてのみ構築できます。 `new` なしで呼び出そうとすると {{jsxref("TypeError")}} が発生します。

### 引数

- `locales`
  - : BCP 47 の言語タグを持つ文字列または {{jsxref("Intl.Locale")}} インスタンス、またはそのようなロケール識別子の配列。 `undefined` が渡された場合や、指定したロケール識別子に対応していない場合は、ランタイムの既定ロケールが使用されます。 `locales` 引数の一般的な形式や 解釈については、 [`Intl` メインページの引数の説明](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_引数)を参照してください。
- `options`
  - : 以下のプロパティの一部またはすべてを持つオブジェクトです。
    - `localeMatcher` {{optional_inline}}
      - : 使用するロケール照合アルゴリズムです。利用可能な値は、 "`lookup`" と "`best fit`" です。既定値は "`best fit`" です。このオプションについての情報は、[ロケール識別子とネゴシエーション](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl#ロケールの識別とネゴシエーション)を参照してください。
    - `style` {{optional_inline}}
      - : 使用する書式化スタイルです。取りうる値は `"narrow"`, `"short"`, `"long"` です。既定値は `"long"` です。
    - `type`
      - : The[`of()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/of) から返すための表示名の種類です。取りうる値は `"language"`, `"region"`, `"script"`, `"currency"`, `"calendar"`, `"dateTimeField"` です。
    - `fallback` {{optional_inline}}
      - : 入力値が構造的には有効だが、一致する表示名がない場合に `of()` から返す値です。取りうる値は次の通りです。
        - `"code"` （既定値）
          - : 入力コード自体を返します。
        - `"none"`
          - : `undefined` を返します。
    - `languageDisplay` {{optional_inline}}
      - : 言語名をどのように表示するかです。 `type: "language"` と共にのみ使用可能です。取りうる値は次の通りです。
        - `"dialect"` （既定値）
          - : 特別な地域の方言を、その名前を使用して表示します。例えば、`"nl-BE"` は `"Flemish"` と表示されます。
        - `"standard"`
          - : 標準形式を使用してすべての言語を表示します。例: `"nl-BE"` は `"Dutch (Belgium)"` と表示されます。

### 例外

- {{jsxref("TypeError")}}
  - : `options.type` が提供されなかった場合に発生します。
- {{jsxref("RangeError")}}
  - : `locales` または `options` の値が不正であった場合に発生します。

## 例

### 基本的な使用法

ロケールを指定しない基本的な使用法では、既定のロケールと既定のオプションで書式化された文字列が返されます。

```js
console.log(new Intl.DisplayNames([], { type: "language" }).of("US"));
// 'us'
```

### `dateTimeField` 型の使用

入力型オプションとして `dateTimeField` を使用する例では、ローカライズされた日付時刻の文字列を返します。

```js
const dn = new Intl.DisplayNames("pt", { type: "dateTimeField" });
console.log(dn.of("era")); // 'era'
console.log(dn.of("year")); // 'ano'
console.log(dn.of("month")); // 'mês'
console.log(dn.of("quarter")); // 'trimestre'
console.log(dn.of("weekOfYear")); // 'semana'
console.log(dn.of("weekday")); // 'dia da semana'
console.log(dn.of("dayPeriod")); // 'AM/PM'
console.log(dn.of("day")); // 'dia'
console.log(dn.of("hour")); // 'hora'
console.log(dn.of("minute")); // 'minuto'
console.log(dn.of("second")); // 'segundo'
```

### `calendar` 型の使用

型オプションとして `calendar` を使用する例では、ローカライズされたカレンダーの名前の文字列を返します。

```js
const dn = new Intl.DisplayNames("en", { type: "calendar" });
console.log(dn.of("roc")); // 'Minguo Calendar'
console.log(dn.of("gregory")); // 'Gregorian Calendar'
console.log(dn.of("chinese")); // 'Chinese Calendar'
```

### `language` 型を `languageDisplay` 付きで使用

`language` を `languageDisplay` オプション付きで使用する例です。

```js
// `dialect` オプションの使用
const dnDialect = new Intl.DisplayNames("en", {
  type: "language",
  languageDisplay: "dialect",
});
console.log(dnDialect.of("en-GB")); // 'British English'

// `standard` オプションの使用
const dnStd = new Intl.DisplayNames("en", {
  type: "language",
  languageDisplay: "standard",
});
console.log(dnStd.of("en-GB")); // 'English (United Kingdom)'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.DisplayNames")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Intl")}}
