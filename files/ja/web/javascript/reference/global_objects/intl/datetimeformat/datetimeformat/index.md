---
title: Intl.DateTimeFormat() コンストラクター
short-title: Intl.DateTimeFormat()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

**`Intl.DateTimeFormat()`** コンストラクターは {{jsxref("Intl.DateTimeFormat")}} オブジェクトを生成します。

{{InteractiveExample("JavaScript デモ: Intl.DateTimeFormat() コンストラクター", "taller")}}

```js interactive-example
const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
// 以下の結果は UTC タイムゾーンを想定しています。結果は変わる可能性があります。

// 言語（ロケール）の既定の日付形式を指定
console.log(new Intl.DateTimeFormat("en-US").format(date));
// 予想される結果: "12/20/2020"

// 代替言語（この場合はインドネシア語）を持つ言語の既定の形式を指定する
console.log(new Intl.DateTimeFormat(["ban", "id"]).format(date));
// 予想される結果: "20/12/2020"

// "style" オプションを使用して日付と時刻の形式を指定します（例: full, long, medium, short）
console.log(
  new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "Australia/Sydney",
  }).format(date),
);
// 予想される結果: "Sunday, 20 December 2020 at 14:23:16 GMT+11"
```

## 構文

```js-nolint
new Intl.DateTimeFormat()
new Intl.DateTimeFormat(locales)
new Intl.DateTimeFormat(locales, options)

Intl.DateTimeFormat()
Intl.DateTimeFormat(locales)
Intl.DateTimeFormat(locales, options)
```

> [!NOTE]
> `Intl.DateTimeFormat()` は、`new` があってもなくても呼び出すことが可能であり、どちらの場合も新しい `Intl.DateTimeFormat` インスタンスが作成されます。ただし、`new` なしで呼び出した場合、かつ `this` の値が別の `Intl.DateTimeFormat` インスタンスであるときは特別な動作があります。詳細は[返値](#返値)を参照してください。

### 引数

- `locales` {{optional_inline}}
  - : {{glossary("BCP 47 language tag", "BCP 47 言語タグ")}}の文字列または {{jsxref("Intl.Locale")}} インスタンス、またはそのようなロケール識別子の配列です。`undefined` が渡された場合、または指定されたロケール識別子がどれも使用できない場合、ランタイムの既定ロケールが使用されています。 `locales` 引数の一般的な形と解釈については、[`Intl` メインページにある引数の説明](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_引数)を参照してください。

    以下の Unicode 拡張キーが利用できます。
    - `nu`
      - : [`numberingSystem`](#numberingsystem) を参照してください。
    - `ca`
      - : [`calendar`](#calendar) を参照してください。
    - `hc`
      - : [`hourCycle`](#hourcycle) を参照してください。

    これらのキーは、`options`（以下の一覧）を同時につけて設定することも可能です。両方が設定されている場合、`options` プロパティが優先されます。

- `options` {{optional_inline}}
  - : オブジェクト。読みやすさを考慮し、プロパティリストは目的別に、[ロケールオプション](#ロケールオプション)、[日時成分オプション](#日時成分オプション)、[スタイルショートカット](#スタイルショートカット)に分類されています。

#### ロケールオプション

- `localeMatcher`
  - : 使用するロケール照合アルゴリズム。利用可能な値は `"lookup"` と `"best fit"` です。既定値は `"best fit"` です。このオプションについての詳細は、[ロケールの識別とネゴシエーション](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl#ロケールの識別とネゴシエーション)のページを参照してください。
- `calendar`
  - : 使用する暦、たとえば `"chinese"`, `"gregory"`, `"persian"` などです。対応している暦の種類の一覧については、[`Intl.supportedValuesOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#対応している暦) を参照してください。既定値はロケールに依存します。このオプションは `ca` Unicode 拡張キーを通じて同時に設定することも可能です。両方が指定された場合、この `options` プロパティが優先されます。
- `numberingSystem`
  - : 数値を書式化するのに使用する記数法で、例えば `"arab"`, `"hans"`, `"mathsans"` などです。対応している記数法の種類の一覧については、[`Intl.supportedValuesOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#対応している記数法) を参照してください。既定値はロケールに依存します。このオプションは `nu` Unicode 拡張キーを通じて同時に設定することも可能です。両方が指定された場合、この `options` プロパティが優先されます。
- `hour12`
  - : （24 時制に対して）12 時制を使用するかどうか。使用可能な値は `true` および `false` で、既定値はロケールに依存します。`true` の場合、このオプションはロケールに応じて `hourCycle` を `"h11"` または `"h12"` に設定します。`false` の場合、`hourCycle` を `"h23"` に設定します。`hour12` は、`hc` ロケール拡張タグおよび `hourCycle` オプションのどちらもが存在するかどうかによって判断され、もしどちらもが存在するならば、それらを両方とも上書きします。
- `hourCycle`
  - : 使用する時の周期です。利用可能な値は `"h11"`, `"h12"`, `"h23"`, `"h24"` です。既定値は `hour12` とロケールから推測されます。このオプションは `hc` Unicode 拡張キーで設定することもできます。両方のオプションが指定されていた場合は、この `options` プロパティが優先されます。
- `timeZone`
  - : 使用するタイムゾーン。あらゆる [IANA タイムゾーン名](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets)、例えば名前付き識別子である `"UTC"`, `"America/New_York"`, `"Etc/GMT+8"` や、オフセット識別子である `"+01:00"`, `"-2359"`, `"+23"` などを指定することができます。既定値はランタイムのタイムゾーンであり、 {{jsxref("Date.prototype.toString()")}} で使用されるタイムゾーンと同じです。

#### 日時成分オプション

- `weekday`
  - : 曜日の表現形式です。利用可能な値は次の通りです。
    - `"long"`
      - : 例: `Thursday`
    - `"short"`
      - : 例: `Thu`
    - `"narrow"`
      - : 例: `T`。一部のロケールでは、2 つの曜日が同じ短縮表記になることがあります（例: `Tuesday` の短縮表記も `T` である）。
- `era`
  - : 世紀の表現形式です。利用可能な値は次の通りです。
    - `"long"`
      - : 例: `Anno Domini`
    - `"short"`
      - : 例: `AD`
    - `"narrow"`
      - : 例: `A`
- `year`
  - : 年の表現形式です。利用可能な値は `"numeric"` および `"2-digit"` です。
- `month`
  - : 月の表現形式です。利用可能な値は以下の通りです。
    - `"numeric"`
      - : 例: `3`
    - `"2-digit"`
      - : 例: `03`
    - `"long"`
      - : 例: `March`
    - `"short"`
      - : 例: `Mar`
    - `"narrow"`
      - : 例: `M`。一部のロケールでは、2 つの月が同じ短縮表記になることがあります（例: `May` の短縮表記も `M` である）。
- `day`
  - : 日の表現形式です。利用可能な値は `"numeric"` および `"2-digit"` です。
- `dayPeriod`
  - : 一日の中の区切りの表現で、 "in the morning", "am", "noon", "n" などです。有効な値は、 `"narrow"`, `"short"`, `"long"` です。

    > [!NOTE]
    > このオプションは 12 時間制 (`hourCycle: "h12"` または `hourCycle: "h11"`) を使用したときのみ効果があります。多くのロケールでは幅の指定を無視して同じ文字列を使用します。

- `hour`
  - : 時の表現形式です。利用可能な値は `"numeric"` および `"2-digit"` です。
- `minute`
  - : 分の表現形式です。利用可能な値は `"numeric"` および `"2-digit"` です。
- `second`
  - : 秒の表現形式です。利用可能な値は `"numeric"` および `"2-digit"` です。
- `fractionalSecondDigits`
  - : 秒の小数点以下を表すために使用される数字の桁数 (その先の桁は切り捨てられます)。利用可能な値は `1` から `3` までです。
- `timeZoneName`
  - : タイムゾーン名のローカライズされた表現形式です。利用可能な値は以下の通りです。
    - `"long"`
      - : ローカライズされた長い形式 (例 `Pacific Standard Time`, `Nordamerikanische Westküsten-Normalzeit`)
    - `"short"`
      - : ローカライズされた短い形式 (例 `PST`, `GMT-8`)
    - `"shortOffset"`
      - : ローカライズされた短い GMT 形式 (例 `GMT-8`)
    - `"longOffset"`
      - : ローカライズされた長い GMT 形式 (例 `GMT-0800`)
    - `"shortGeneric"`
      - : 一般的な場所を指定しない短い形式 (例 `PT`, `Los Angeles Zeit`).
    - `"longGeneric"`
      - : 一般的な場所を指定しない長い形式 (例 `Pacific Time`, `Nordamerikanische Westküstenzeit`)

    > [!NOTE]
    > タイムゾーンの表示は、必要な文字列が利用できない場合、別の形式に代替されることがあります。例えば、場所を指定しない形式では、 "Pacific Time" のように特定の国や都市の場所を指定せずにタイムゾーンを表示する必要がありますが、 "Los Angeles Time" のようなタイムゾーンに代替される場合があります。

##### 日時成分の既定値

日時成分のオプションのいずれかが指定されている場合、`dateStyle` および `timeStyle` は `undefined` でなければなりません。すべての日時成分オプションと `dateStyle`/`timeStyle` が `undefined` の場合、日時成分の既定のオプションが設定されます。これらは、書式化メソッドが呼び出されたオブジェクトに依存します。

- {{jsxref("Temporal.PlainDate")}} と {{jsxref("Date")}} の書式化では、`year`, `month`, `day` の既定値は `"numeric"` です。
- {{jsxref("Temporal.PlainTime")}} の書式化では、`hour`, `minute`, `second` の既定値は `"numeric"` です。
- {{jsxref("Temporal.PlainYearMonth")}} の書式化では、`year` と `month` の既定値は `"numeric"` です。
- {{jsxref("Temporal.PlainMonthDay")}} の書式化では、`month` と `day` の既定値は `"numeric"` です。
- {{jsxref("Temporal.PlainDateTime")}} と {{jsxref("Temporal.Instant")}} の書式化では、`year`, `month`, `day`, `hour`, `minute`, `second` の既定値は `"numeric"` です。

##### 書式の照合

実装は、少なくとも以下の日付時刻コンポーネントのサブセットの表示に対応することが求められます。

- `weekday`, `year`, `month`, `day`, `hour`, `minute`, `second`
- `weekday`, `year`, `month`, `day`
- `year`, `month`, `day`
- `year`, `month`
- `month`, `day`
- `hour`, `minute`, `second`
- `hour`, `minute`

要求された日時成分のスタイルは、ロケールが対応している有効な書式に直接対応しない場合があります。そのため、書式マッチャーでは、要求されたスタイルを最も近い対応書式にどのように一致させるかを指定できます。

- `formatMatcher`
  - : 使用する書式照合アルゴリズム。可能な値は `"basic"` と `"best fit"` で、既定は `"best fit"` です。`"best fit"` のアルゴリズムは実装定義であり、`"basic"` は [仕様で定義されています](https://tc39.es/ecma402/#sec-basicformatmatcher)。このオプションは、`dateStyle` と `timeStyle` の両方が `undefined` の場合のみ使用されます（これにより、それぞれの日時成分の書式化が個別にカスタマイズ可能になります）。

#### スタイルショートカット

- `dateStyle`
  - : 使用する[日付書式スタイル](https://cldr.unicode.org/translation/date-time/date-time-patterns#h.aa5zjyepm6vh)。利用できる値は `"full"`、`"long"`、`"medium"`、`"short"` です。これらは `weekday`、`day`、`month`、`year`、`era` のスタイルに展開され、ロケールに応じて値の組み合わせが正確に決定されます。つけられた値は、ロケールごとに異なります。{{jsxref("Temporal.PlainDate")}}、{{jsxref("Temporal.PlainYearMonth")}}、{{jsxref("Temporal.PlainMonthDay")}} などのオブジェクトを書式化する場合、`dateStyle` はそのオブジェクトに関連するフィールドのみに解決されます。
- `timeStyle`
  - : 使用する[時刻書式スタイル](https://cldr.unicode.org/translation/date-time/date-time-patterns#h.588vo3awdscu)。可能な値は `"full"`、`"long"`、`"medium"`、`"short"` です。これらは `hour`、`minute`、`second`、`timeZoneName` のスタイルに展開され、ロケールに応じて値の組み合わせが正確に決定されます。つけられたスタイル設定は、ロケールごとに異なります。

> [!NOTE]
> `dateStyle` と `timeStyle` は互いに使用できますが、その他の日時成分オプション（`weekday`、`hour`、`month` など）にはつけられません。

スタイルショートカットオプションに記載するかどうかによって、異なるオブジェクト型を書式化できます。

- `dateStyle`が指定されている場合、{{jsxref("Temporal.PlainDate")}}、{{jsxref("Temporal.PlainYearMonth")}}、および{{jsxref("Temporal.PlainMonthDay")}}オブジェクトを書式化できます。
- `timeStyle`が指定されている場合、{{jsxref("Temporal.PlainTime")}}オブジェクトを書式化できます。
- `dateStyle` または `timeStyle` のいずれかが指定している場合、{{jsxref("Temporal.PlainDateTime")}} および {{jsxref("Date")}} オブジェクトの書式化が可能です。

### 返値

新しい `Intl.DateTimeFormat` オブジェクトです。

> [!NOTE]
> 下記のテキストは、仕様で「オプション」とマークされている動作について記述しています。すべての環境で動作するとは限りません。[ブラウザーの互換性表](#ブラウザーの互換性)を確認してください。

通常、`Intl.DateTimeFormat()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) の有無にかかわらず呼び出すことが可能で、いずれの場合も新しい `Intl.DateTimeFormat` インスタンスが返されます。ただし、[`this`](/ja/docs/Web/JavaScript/Reference/Operators/this) の値が [`instanceof`](/ja/docs/Web/JavaScript/Reference/Operators/instanceof) `Intl.DateTimeFormat` であるオブジェクト（`new Intl.DateTimeFormat` で作成されたとは限らず、プロトタイプチェーンに `Intl.DateTimeFormat.prototype` が含まれているだけでよい）の場合、代わりに `this` の値が返され、新しく作成された `Intl.DateTimeFormat` オブジェクトは `[Symbol(IntlLegacyConstructedSymbol)]` プロパティ（インスタンス間で再利用される固有のシンボル）に隠されます。

```js
const formatter = Intl.DateTimeFormat.call(
  { __proto__: Intl.DateTimeFormat.prototype },
  "en-US",
  { dateStyle: "full" },
);
console.log(Object.getOwnPropertyDescriptors(formatter));
// {
//   [Symbol(IntlLegacyConstructedSymbol)]: {
//     value: DateTimeFormat [Intl.DateTimeFormat] {},
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }
// }
```

実際の `Intl.DateTimeFormat` インスタンスは、`[Symbol(IntlLegacyConstructedSymbol)]` に隠されている 1 つだけであることに注意してください。`formatter` 上の [`format()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format) および [`resolvedOptions()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions) メソッドを呼び出すと、そのインスタンスに格納されるオプションが正しく使用されますが、その他のすべてのメソッド（[`formatRange()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRange) など）を呼び出すと、"TypeError: formatRange method called on incompatible Object" で失敗します。これは、それらのメソッドが隠されたインスタンスのオプションを参照しないためです。

この動作は `ChainDateTimeFormat` と呼ばれ、`Intl.DateTimeFormat()` を `new` なしで呼び出した場合（ただし `this` が `instanceof Intl.DateTimeFormat` ではない何か他のものに設定されている場合）には現れません。`Intl.DateTimeFormat()` として直接呼び出す場合、`this` の値は [`Intl`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl) となり、新しい `Intl.DateTimeFormat` インスタンスが通常通り作成されます。

### 例外

- {{jsxref("RangeError")}}
  - : `locales` または `options` に不正な値が含まれている場合に発生します。

## 例

### DateTimeFormat の使用

ロケールを指定しない基本的な使用方法では、 `DateTimeFormat` は既定のロケールとオプションを使用します。

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// toLocaleString を引数なしで呼び出すと実装に依存し、
// 既定のロケール、既定のタイムゾーンになる
console.log(new Intl.DateTimeFormat().format(date));
// "12/19/2012" （ロケール（言語）が en-US でタイムゾーンが America/Los_Angeles (UTC-0800) の場合）
```

### timeStyle と dateStyle の使用

`dateStyle` と `timeStyle` は、複数の日時成分オプションを一度に設定するショートカットを提供します。例えば、`en-US`の場合、`dateStyle: "short"` は `year: "2-digit", month: "numeric", day: "numeric"` を設定するのと等しいであり、`timeStyle: "short"` は `hour: "numeric", minute: "numeric"` を設定するのと等しいです。

```js
const shortTime = new Intl.DateTimeFormat("en-US", {
  timeStyle: "short",
});
console.log(shortTime.format(Date.now())); // "1:31 PM"

const shortDate = new Intl.DateTimeFormat("en-US", {
  dateStyle: "short",
});
console.log(shortDate.format(Date.now())); // "7/7/20"

const mediumTime = new Intl.DateTimeFormat("en-US", {
  timeStyle: "medium",
  dateStyle: "short",
});
console.log(mediumTime.format(Date.now())); // "7/7/20, 1:31:55 PM"
```

ただし、それらが解決される正確な（ロケール依存の）成分スタイルは、[解決済みオプション](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions)には含まれていません。これにより、`resolvedOptions()` の結果を `Intl.DateTimeFormat()` のコンストラクターに直接渡せることを保証します（`dateStyle` または `timeStyle` と個別の日時成分スタイルの両方を持つ `options` オブジェクトは無効であるため）。

```js
console.log(shortDate.resolvedOptions().year); // undefined
```

### dayPeriod の使用

`dayPeriod` オプションを使用して、1日の時間帯 (「朝」、「夜」、「正午」など) を表す文字列を出力します。なお、これは 12 時間制の書式でのみ有効であり、（`hourCycle: 'h12'` または `hourCycle: 'h11'`）、多くのロケールでは `dayPeriod` の値に関係なく同じ文字列が出力されます。

```js
const date = Date.UTC(2012, 11, 17, 4, 0, 42);

console.log(
  new Intl.DateTimeFormat("en-GB", {
    hour: "numeric",
    hourCycle: "h12",
    dayPeriod: "short",
    timeZone: "UTC",
  }).format(date),
);
// 4 at night" （すべての dayPeriod 値で en-GB と同じ書式)

console.log(
  new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hourCycle: "h12",
    dayPeriod: "narrow",
    timeZone: "UTC",
  }).format(date),
);
// "4 mat." （すべての narrow/short の dayPeriod 値でフランス語と同じ書式）

console.log(
  new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hourCycle: "h12",
    dayPeriod: "long",
    timeZone: "UTC",
  }).format(date),
);
// "4 du matin"
```

### timeZoneName の使用

`timeZoneName` を使用して、タイムゾーンの文字列（"GMT", "Pacific Time", など）を出力します。

```js
const date = Date.UTC(2021, 11, 17, 3, 0, 42);
const timezoneNames = [
  "short",
  "long",
  "shortOffset",
  "longOffset",
  "shortGeneric",
  "longGeneric",
];

for (const zoneName of timezoneNames) {
  // Do something with currentValue
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    timeZoneName: zoneName,
  });
  console.log(`${zoneName}: ${formatter.format(date)}`);
}

// 予想される結果:
// short: 12/16/2021, PST
// long: 12/16/2021, Pacific Standard Time
// shortOffset: 12/16/2021, GMT-8
// longOffset: 12/16/2021, GMT-08:00
// shortGeneric: 12/16/2021, PT
// longGeneric: 12/16/2021, Pacific Time
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Intl")}}
