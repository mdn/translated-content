---
title: Intl.DateTimeFormat.prototype.resolvedOptions()
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

**`resolvedOptions()`** は {{jsxref("Intl.DateTimeFormat")}} のメソッドで、この `DateTimeFormat` オブジェクトの初期化時に計算されたロケールや日時や書式化オプションを反映したプロパティを持つ新しいオブジェクトを返します。

{{InteractiveExample("JavaScript デモ: Intl.DateTimeFormat.prototype.resolvedOptions")}}

```js interactive-example
const region = new Intl.DateTimeFormat("zh-CN", { timeZone: "UTC" });
const options = region.resolvedOptions();

console.log(options.locale);
// 予想される結果: "zh-CN"

console.log(options.calendar);
// 予想される結果: "gregory"

console.log(options.numberingSystem);
// 予想される結果: "latn"
```

## 構文

```js-nolint
resolvedOptions()
```

### 引数

なし。

### 返値

この `DateTimeFormat` オブジェクトの初期化中に計算されたオプションを反映したプロパティを持つ、新しいオブジェクト。このオブジェクトは、以下の一覧の順序でプロパティを持ちます。

- `locale`
  - : 実際に使用されるロケールの{{glossary("BCP 47 language tag", "BCP 47 言語タグ")}}であり、[ロケールネゴシエーション](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl#ロケールの識別とネゴシエーション)プロセスによって決まります。リクエストされた場合、 `ca`, `hc`, `nu` の Unicode 拡張キーのみが出力結果に含まれる可能性があります。
- `calendar`
  - : `options` 引数でこのプロパティに指定された値、または Unicode 拡張キー `"ca"` を使用し、必要に応じて既定値が設定されます。これはこのロケールで対応している[暦の種類](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#対応している暦)です。既定値はロケールに依存します。
- `numberingSystem`
  - : `options` 引数でこのプロパティに指定された値、または Unicode 拡張キー `"nu"` を使用し、必要に応じて既定値が設定されます。これはこのロケールで対応している[記数法](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#対応している記数法)です。既定値はロケールに依存します。
- `timeZone`
  - : `options` 引数でこのプロパティに指定された値、必要に応じて既定値が設定されます。 [IANA タイムゾーン名](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets)です。既定値はランタイムの既定のタイムゾーンです。

    > [!NOTE]
    > `Temporal` の標準化では、ブラウザーは異なる別名への正規化を行わず、当初指定されたのと同じ識別子を使用することが求められます。詳細は[タイムゾーンとオフセット](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets)を参照してください。

- `hourCycle` {{optional_inline}}
  - : `options` 引数でこのプロパティに指定された値、または Unicode 拡張キー `"hc"` を使用し、必要に応じて既定値が設定されます。`hour12` が `options` で提供された場合、他の `hourCycle` の設定を上書きします。これは、解決されたオプションに `hour` または `timeStyle` が含まれる場合にのみ存在します。値は `"h11"`, `"h12"`, `"h23"`, `"h24"` のいずれかです。 既定値はロケールに依存しますが、`"h24"` が既定値となることはありません。
- `hour12` {{optional_inline}}
  - : 解決済みオプションに `hour` または `timeStyle` が含まれる場合にのみ存在します。`hourCycle` が `"h11"` または `"h12"` の場合は `true`、`hourCycle` が `"h23"` または `"h24"` の場合は `false` です。
- `weekday`, `era`, `year`, `month`, `day`, `dayPeriod`, `hour`, `minute`, `second`, `fractionalSecondDigits`, `timeZoneName` {{optional_inline}}
  - : `options` 引数内の対応するプロパティと、選択されたロケールにおける日時の書式設定で利用可能な組み合わせおよび表現との書式照合から得られる値。これらのプロパティの一部は存在しない場合があり、その場合は対応する成分が書式設定された出力に表現されないことを示します。 `weekday`, `era`, `dayPeriod` は `"narrow"`, `"short"`, `"long"` のいずれかです。 `year`, `day`, `hour`, `minute`, `second` は `"numeric"`, `"2-digit"`, `"narrow"` のいずれかです。 `month` は `"numeric"`, `"2-digit"`, `"narrow"`, `"short"`, `"long"` のいずれかです。 `fractionalSecondDigits` は `1`, `2`, `3` のいずれかです。 `timeZoneName` は `"short"`, `"long"`, `"shortOffset"`, `"longOffset"`, `"shortGeneric"`, `"longGeneric"` のいずれかです。

    これらのプロパティが `options` で要求された場合、コンストラクターは `dateStyle` と `timeStyle` の指定を防止するため、下のグループは決して存在しません。

- `dateStyle`, `timeStyle` {{optional_inline}}
  - : `options` 引数でこれらのプロパティに指定される値です。`"full"`, `"long"`, `"medium"`, `"short"`, `"none"` のいずれかです。これらのプロパティの一部が存在しない場合、対応する成分が書式化された出力に表示されないことを示します。

    これらのプロパティが `options` で要求された場合、コンストラクターは個々の日時成分オプションの指定を防止するため、上のグループは決して存在しません。

    > [!NOTE]
    > `dateStyle` および `timeStyle` は個々の日付および時刻成分のスタイルに対するショートカットですが、これらが解決される正確な（ロケール依存の）成分スタイルは、解決済みオプションには含まれません。これにより、確実に `resolvedOptions()` の結果を `Intl.DateTimeFormat()` コンストラクターに直接渡すことできるようになります（`dateStyle` または `timeStyle` と個別の日付・時刻成分のスタイルの両方を含む `options` オブジェクトは有効ではないため）。

## 例

### resolvedOptions メソッドの使用

```js
const germanFakeRegion = new Intl.DateTimeFormat("de-XX", { timeZone: "UTC" });
const usedOptions = germanFakeRegion.resolvedOptions();

usedOptions.locale; // "de" (because "de-XX" does not exist)
usedOptions.calendar; // "gregory"
usedOptions.numberingSystem; // "latn"
usedOptions.timeZone; // "UTC"
usedOptions.month; // "numeric"
```

### ユーザーのタイムゾーンとロケール設定の取得

オプションを指定しない `Intl.DateTimeFormat` コンストラクターは、現在のシステム設定を使用します。`resolvedOptions()` を使用すると、ユーザーの現在のタイムゾーンと、ロケールの推奨される暦と記数法が取得できます。

```js
const systemOptions = new Intl.DateTimeFormat().resolvedOptions();
systemOptions.timeZone; // 例: "Europe/Brussels" または "Asia/Riyadh"
systemOptions.calendar; // 例: "gregory" または "islamic-umalqura"
systemOptions.numberingSystem; // 例: "latn" または "arab"
systemOptions.locale; // 例: "nl-BE" または "ar-SA"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.DateTimeFormat")}}
