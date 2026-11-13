---
title: Intl.Locale() コンストラクター
short-title: Intl.Locale()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/Locale
l10n:
  sourceCommit: e509776556a47f12843b91ab5c6e9be6585698c6
---

**`Intl.Locale()`** コンストラクターは {{jsxref("Intl.Locale")}} オブジェクトを生成します。

{{InteractiveExample("JavaScript デモ: Intl.Locale() コンストラクター")}}

```js interactive-example
const korean = new Intl.Locale("ko", {
  script: "Kore",
  region: "KR",
  hourCycle: "h23",
  calendar: "gregory",
});

const japanese = new Intl.Locale("ja-Jpan-JP-u-ca-japanese-hc-h12");

console.log(korean.baseName, japanese.baseName);
// 予想される結果: "ko-Kore-KR" "ja-Jpan-JP"

console.log(korean.hourCycle, japanese.hourCycle);
// 予想される結果: "h23" "h12"
```

## 構文

```js-nolint
new Intl.Locale(tag)
new Intl.Locale(tag, options)
```

> [!NOTE]
> `Intl.Locale()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) 付きでないと構築できません。`new` なしで呼び出そうとすると {{jsxref("TypeError")}} が発生します。

### 引数

- `tag`
  - : Unicode ロケール識別子の文字列です。ロケール識別子文字列の構文については、[Intl メインページ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument)を参照してください。なお、`Intl.Locale` コンストラクターは、他のほとんどの `Intl` コンストラクターとは異なり、ロケールの配列や `undefined` は受け入れません。
- `options`
  - : ロケールの構成を含むオブジェクトです。ここで指定するオプション値は、ロケール識別子内の拡張キーよりも優先されます。可能なプロパティは次の通りです。
    - `language`
      - : [言語](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/language)です。[`unicode_language_subtag`](https://unicode.org/reports/tr35/#unicode_language_subtag) の文法（2～3 文字または 5～8 文字）に準拠している構文的に有効な文字列はすべて受け入れますが、実装では特定の種類のもののみを認識します。
    - `script`
      - : [文字体系](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/script)です。[`unicode_script_subtag`](https://unicode.org/reports/tr35/#unicode_script_subtag) の文法（4 文字）に準拠している構文的に有効な文字列はすべて受け入れますが、実装では特定の種類のもののみを認識します。
    - `region`
      - : [地域](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/region)です。[`unicode_region_subtag`](https://unicode.org/reports/tr35/#unicode_region_subtag) の文法（2 文字または 3 桁）に準拠している構文的に有効な文字列はすべて受け入れますが、実装では特定の種類のもののみを認識します。
    - `variants`
      - : [バリアント](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/variants)です。ダッシュ (`-`) で区切られた一意なバリアントタグのリストであるべきで、それぞれのタグは [`unicode_variant_subtag`](https://unicode.org/reports/tr35/#unicode_variant_subtag) の文法（5～8 桁の英数字、または 1 桁の数字に次の 3 桁の英数字が続く）に準拠している構文的に有効な文字列はすべて受け入れますが、実装では特定の種類のもののみを認識します。
    - `calendar`
      - : [暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar)です。[`type`](https://unicode.org/reports/tr35/#Unicode_locale_identifier) 文法（3～8 桁の英数字セグメントをハイフンで連結した 1 つ以上のセグメント）に準拠している構文的に有効な文字列はすべて受け入れますが、実装では特定の種類のもののみを認識します。これらは [`Intl.supportedValuesOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) で列挙されます。
    - `collation`
      - : [照合順序](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation)です。`type` の文法に準拠する構文的に有効な文字列はすべて受け入れられますが、実装では特定の種類のもののみを認識します。これらは [`Intl.supportedValuesOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_collation_types) で列挙されます。
    - `numberingSystem`
      - : [記数法](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem)です。`type` の文法に準拠する構文的に有効な文字列はすべて受け入れられますが、実装では特定の種類のもののみを認識します。これらは [`Intl.supportedValuesOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types) で列挙されます。
    - `caseFirst`
      - : [大文字小文字優先ソートオプション](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/caseFirst)です。取りうる値は `"upper"`、`"lower"`、`"false"` です。
    - `hourCycle`
      - : [時制](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle)。可能な値は `"h23"`、`"h12"`、`"h11"`、または実質的に使用されない `"h24"` であり、これらは [`Intl.Locale.prototype.getHourCycles`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getHourCycles#supported_hour_cycle_types) で説明されています。
    - `numeric`
      - : [数値ソートオプション](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numeric)です。論理値です。

## 例

### 基本的な使用

もっとも単純なものでは、`Intl.Locale()` コンストラクターはロケール識別子の文字列を引数に取ります。

```js
const us = new Intl.Locale("en-US");
```

### Locale コンストラクターに options オブジェクトを渡して使用

コンストラクターには、オプションで構成オブジェクトの引数を取ることができ、そこに複数の拡張型を指定することができます。たとえば、設定オブジェクトの [`hourCycle`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle) プロパティに任意の時間周期を設定し、それをコンストラクターに渡します。

```js
const locale = new Intl.Locale("en-US", { hourCycle: "h12" });
console.log(locale.hourCycle); // "h12"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.Collator")}}
- [正規の Unicode ロケール識別子](https://www.unicode.org/reports/tr35/#Canonical_Unicode_Locale_Identifiers)
