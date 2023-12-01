---
title: Intl.DateTimeFormat() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
---

{{JSRef}}

**`Intl.DateTimeFormat()`** コンストラクターは、言語に応じた日付と時刻の書式化を可能にする
{{jsxref("Intl/DateTimeFormat", "Intl.DateTimeFormat")}} オブジェクトを生成します。

{{EmbedInteractiveExample("pages/js/intl-datetimeformat.html", "taller")}}

## 構文

```js
new Intl.DateTimeFormat();
new Intl.DateTimeFormat(locales);
new Intl.DateTimeFormat(locales, options);
```

### 引数

- `locales` {{optional_inline}}

  - : BCP 47 言語タグの文字列、または、そのような文字列の配列です。ブラウザーの既定のロケールを使用するには、空の配列を渡してください。 Unicode 拡張に対応しています (例えば "`en-US-u-ca-buddhist`" など)。 `locales` 引数の一般的な形式と解釈は、 {{jsxref("Global_Objects/Intl", "Intl", "#ロケールの識別とネゴシエーション", 1)}} のページをご覧ください。次の Unicode 拡張キーが利用できます。

    - `nu`
      - : 番号方式。使用できる値は "`arab`", "`arabext`", "`bali`", "`beng`", "`deva`", "`fullwide`", "`gujr`", "`guru`", "`hanidec`", "`khmr`", "`knda`", "`laoo`", "`latn`", "`limb`", "`mlym`", "`mong`", "`mymr`", "`orya`", "`tamldec`", "`telu`", "`thai`", "`tibt`" です。
    - `ca`
      - : カレンダー。使用できる値は "`buddhist`", "`chinese`", "`coptic`", "`ethiopia`", "`ethiopic`", "`gregory`", "`hebrew`", "`indian`", "`islamic`", "`iso8601`", "`japanese`", "`persian`", "`roc`" です。
    - `hc`
      - : 時制。使用できる値は "`h11`", "`h12`", "`h23`", "`h24`" です。

- `options` {{optional_inline}}

  - : 以下のプロパティの一部またはすべてを持つオブジェクトです。

    - `dateStyle`

      - : `format()` が呼び出された際に使用される日付の書式化スタイルです。利用可能な値は以下のとおりです。

        - "`full`"
        - "`long`"
        - "`medium`"
        - "`short`"

        > **メモ:** `dateStyle` は `timeStyle` と一緒に使用することができますが、他のオプション (`weekday`, `hour`, `month`, など) と一緒に使用することはできません。

    - `timeStyle`

      - : `format()` が呼び出された際に使用される時刻の書式化スタイルです。利用可能な値は以下のとおりです。

        - "`full`"
        - "`long`"
        - "`medium`"
        - "`short`"

        > **メモ:** `timeStyle` は `dateStyle` と一緒に使用することができますが、他のオプション (`weekday`, `hour`, `month`, など) と一緒に使用することはできません。

    - `calendar`
      - : 暦です。有効な値は、 "`buddhist`", "`chinese`", " `coptic`", "`ethiopia`", "`ethiopic`", "`gregory`", " `hebrew`", "`indian`", "`islamic`", "`iso8601`", " `japanese`", "`persian`", "`roc`" です。
    - `dayPeriod`

      - : 日単位の期間の表現の仕方です。有効な値は、 "`narrow`", "`short`", " `long`" です。

        > **メモ:**
        >
        > - このオプションは12時間制を使用したときのみ効果があります。
        > - 多くのロケールでは幅の指定を無視して同じ文字列を使用します。

    - `numberingSystem`
      - : 命数法です。有効な値は、 "`arab`", "`arabext`", " `bali`", "`beng`", "`deva`", "`fullwide`", " `gujr`", "`guru`", "`hanidec`", "`khmr`", " `knda`", "`laoo`", "`latn`", "`limb`", "`mlym`", " `mong`", "`mymr`", "`orya`", "`tamldec`", " `telu`", "`thai`", "`tibt`" です。
    - `localeMatcher`
      - : 使用するロケール照合アルゴリズム。利用可能な値は "`lookup`" と "`best fit`" です。既定値は "`best fit`" です。このオプションについての詳細は、 {{jsxref("Global_Objects/Intl", "Intl", "#Locale_negotiation", 1)}} のページをご覧ください。
    - `timeZone`
      - : 使用するタイムゾーン。実装が認識しなければならない唯一の値は "`UTC`" です。既定値は、実行時の既定のタイムゾーンです。実装は、 [IANA タイムゾーンデータベース](https://www.iana.org/time-zones)のタイムゾーン名、例えば "`Asia/Shanghai`", "`Asia/Kolkata`", "`America/New_York`" なども認識できる場合があります。
    - `hour12`
      - : (24 時制に対して) 12 時制を使用するかどうか。可能な値は `true` と `false` です。既定ではロケールに依存します。このオプションは `hc` 言語タグや `hourCycle` オプションと一緒に使用された場合、これらを上書きします。
    - `hourCycle`
      - : 使用する時の周期です。利用可能な値は "`h11`", "`h12`", "`h23`", "`h24`" です。このオプションは `hc` 言語タグと一緒に使用された場合はそれを上書きし、両方のオプションが指定されていた場合は `hour12` オプションが優先されます。
    - `formatMatcher`
      - : 使用する書式一致アルゴリズム。可能な値は "`basic`" と "`best fit`" です。既定値は "`best fit`" です。このプロパティの使用方法については、以下の項を参照してください。

    以下のプロパティは、書式化の出力や、要求された表現で使用する日付や時刻のコンポーネントです。実装は、少なくとも以下のサブセットに対応することが要求されています。

    - `weekday`, `year`, `month`, `day`, `hour`, `minute`, `second`
    - `weekday`, `year`, `month`, `day`
    - `year`, `month`, `day`
    - `year`, `month`
    - `month`, `day`
    - `hour`, `minute`, `second`
    - `hour`, `minute`

    実装は他のサブセットに対応することもでき、要求はすべての利用可能な表現の中から最適なものを見つけるために交渉します。 `formatMatcher` プロパティによるこの交渉や選択には2つのアルゴリズムが利用できます。[完全に定義された "`basic`" アルゴリズム](https://www.ecma-international.org/ecma-402/1.0/#BasicFormatMatcher)と、実装に依存した "`best fit`" アルゴリズムです。

    - `weekday`

      - : 曜日の表現です。利用可能な値は以下の通りです。
        - "`long`" (例 `Thursday`)
        - "`short`" (例 `Thu`)
        - "`narrow`" (例 `T`)。ロケールによっては、 narrow 形式が同じ曜日が2つある場合もあります (例 `Tuesday` の narrow 形式も `T` です)。

    - `era`

      - : 時代の表現です。利用可能な値は以下の通りです。

        - "`long`" (例 `Anno Domini`, 紀元)
        - "`short`" (例 `AD`)
        - "`narrow`" (例 `A`)

    - `year`

      - : 年の表現です。利用可能な値は以下の通りです。

        - "`numeric`" (例 `2012`)
        - "`2-digit`" (例 `12`)

    - `month`

      - : 月の表現です。利用可能な値は以下の通りです。
        - "`numeric`" (例 `2`)
        - "`2-digit`" (例 `02`)
        - "`long`" (例 `March`)
        - "`short`" (例 `Mar`)
        - "`narrow`" (例 `M`)。ロケールによっては、 narrow 形式が同じ月が2つある場合もあります (例 `May` の narrow 形式も `M` です)。

    - `day`

      - : 日の表現です。利用可能な値は以下の通りです。

        - "`numeric`" (例 `1`)
        - "`2-digit`" (例 `01`)

    - `hour`
      - : 時の表現です。利用可能な値は "`numeric`", "`2-digit`" です。
    - `minute`
      - : 分の表現です。利用可能な値は "`numeric`", "`2-digit`" です。
    - `second`
      - : 秒の表現です。利用可能な値は "`numeric`", "`2-digit`" です。
    - `fractionalSecondDigits`

      - : 秒の小数点以下を表すために使用される数字の桁数 (その先の桁は切り捨てられます)。利用可能な値は次の通りです。

        - `0` (小数点以下は切り捨て)
        - `1` (小数点以下は1桁で表される。例えば、 736 は `7` と書式化される。)
        - `2` (小数点以下は2桁で表される。例えば、 736 は `73` と書式化される。)
        - `3` (小数点以下は2桁で表される。例えば、 736 は `736` と書式化される。)

    - `timeZoneName`

      - : タイムゾーン名の表現です。利用可能な値は以下の通りです。

        - "`long`" ローカライズされた長い形式 (例 `Pacific Standard Time`, `Nordamerikanische Westküsten-Normalzeit`)
        - "`short`" ローカライズされた短い形式 (例 `PST`, `GMT-8`)
        - "`shortOffset`" ローカライズされた短い GMT 形式 (例 `GMT-8`)
        - "`longOffset`" ローカライズされた長い GMT 形式 (例 `GMT-0800`)
        - "`shortGeneric`" 一般的な場所を指定しない短い形式 (例 `PT`, `Los Angeles Zeit`).
        - "`longGeneric`" 一般的な場所を指定しない長い形式 (例 `Pacific Time`, `Nordamerikanische Westküstenzeit`)

        > **メモ:** タイムゾーンの表示は、必要な文字列が利用できない場合、別の形式にフォールバックすることがあります。例えば、場所を指定しない形式では、 "Pacific Time" のように特定の国や都市の場所を指定せずにタイムゾーンを表示する必要がありますが、 "Los Angeles Time" のようなタイムゾーンにフォールバックする場合があります。

    それぞれの日付や時刻の部分のプロパティの既定値は {{jsxref("undefined")}} ですが、すべての部分のプロパティが {{jsxref("undefined")}} であった場合、 `year`, `month`, `day` は "`numeric`" であると想定されます。

## 例

### DateTimeFormat の使用

ロケールを指定しない基本的な使用方法では、 `DateTimeFormat` は既定のロケールとオプションを使用します。

```js
let date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// toLocaleString without arguments depends on the implementation,
// the default locale, and the default time zone
console.log(new Intl.DateTimeFormat().format(date));
// → "12/19/2012" if run with en-US locale (language) and time zone America/Los_Angeles (UTC-0800)
```

### timeStyle と dateStyle の使用

```js
let o = new Intl.DateTimeFormat("en", {
  timeStyle: "short",
});
console.log(o.format(Date.now())); // "13:31 AM"

let o = new Intl.DateTimeFormat("en", {
  dateStyle: "short",
});
console.log(o.format(Date.now())); // "07/07/20"

let o = new Intl.DateTimeFormat("en", {
  timeStyle: "medium",
  dateStyle: "short",
});
console.log(o.format(Date.now())); // "07/07/20, 13:31:55 AM"
```

### dayPeriod の使用

`dayPeriod` オプションを使用して、1日の時間帯 (「朝」、「夜」、「正午」など) を表す文字列を出力します。なお、これは 12 時間制の書式でのみ有効であり、 (`hourCycle: 'h12'`)、多くのロケールでは `dayPeriod` の値に関係なく同じ文字列が出力されます。

```js
let date = Date.UTC(2012, 11, 17, 4, 0, 42);

console.log(
  new Intl.DateTimeFormat("en-GB", {
    hour: "numeric",
    hourCycle: "h12",
    dayPeriod: "short",
    timeZone: "UTC",
  }).format(date),
);
// > 4 at night"  (same formatting in en-GB for all dayPeriod values)

console.log(
  new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hourCycle: "h12",
    dayPeriod: "narrow",
    timeZone: "UTC",
  }).format(date),
);
// > "4 mat."  (same output in French for both narrow/short dayPeriod)

console.log(
  new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hourCycle: "h12",
    dayPeriod: "long",
    timeZone: "UTC",
  }).format(date),
);
// > "4 du matin"
```

### timeZoneName の使用

`timeZoneName` を使用して、タイムゾーンの文字列 ("GMT", "Pacific Time", など) を出力します。

```js
var date = Date.UTC(2021, 11, 17, 3, 0, 42);
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
  var formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    timeZoneName: zoneName,
  });
  console.log(zoneName + ": " + formatter.format(date));
}

// expected output:
// > "short: 12/16/2021, PST"
// > "long: 12/16/2021, Pacific Standard Time"
// > "shortOffset: 12/16/2021, GMT-8"
// > "longOffset: 12/16/2021, GMT-08:00"
// > "shortGeneric: 12/16/2021, PT"
// > "longGeneric: 12/16/2021, Pacific Time"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Global_Objects/Intl", "Intl")}}
