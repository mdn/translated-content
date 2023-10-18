---
title: Intl.NumberFormat() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
---

{{JSRef}}

**`Intl.NumberFormat()`** コンストラクターは、言語に依存した数値の整形ができる {{jsxref("NumberFormat", "Intl.NumberFormat")}} オブジェクトを生成します。

{{EmbedInteractiveExample("pages/js/intl-numberformat.html")}}

<!-- このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 https://github.com/mdn/interactive-examples をクローンしてプルリクエストを送信してください。 -->

## 構文

```js
new Intl.NumberFormat([locales[, options]])
```

### 引数

- `locales` {{optional_inline}}

  - : BCP 47 言語タグを持つ文字列、またはそのような文字列の配列。 `locales` 引数の一般的な形式と解釈については、 {{jsxref("Global_Objects/Intl", "Intl",
    "#ロケールの識別とネゴシエーション", 1)}} のページを参照してください。次の Unicode 拡張キーが許可されています。

    - `nu`
      - : 使用される数値システムです。指定可能な値には "`adlm`", "`ahom`", "`arab`", "`arabext`", "`bali`", "`beng`", "`bhks`", "`brah`", "`cakm`", "`cham`", "`deva`", "`diak`", "`fullwide`", "`gong`", "`gonm`", "`gujr`", "`guru`", "`hanidec`", "`hmng`", "`hmnp`", "`java`", "`kali`", "`khmr`", "`knda`", "`lana`", "`lanatham`", "`laoo`", "`latn`", "`lepc`", "`limb`", "`mathbold`", "`mathdbl`", "`mathmono`", "`mathsanb`", "`mathsans`", "`mlym`", "`modi`", "`mong`", "`mroo`", "`mtei`", "`mymr`", "`mymrshan`", "`mymrtlng`", "`newa`", "`nkoo`", "`olck`", "`orya`", "`osma`", "`rohg`", "`saur`", "`segment`", "`shrd`", "`sind`", "`sinh`", "`sora`", "`sund`", "`takr`", "`talu`", "`tamldec`", "`telu`", "`thai`", "`tibt`", "`tirh`", "`vaii`", "`wara`", "`wcho`" があります。 [標準 Unicode 命数法一覧](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem) を参照してください。

- `options` {{optional_inline}}

  - : 以下のプロパティのすべてまたは一部を持つオブジェクトです。

    - `compactDisplay`
      - : `notation` が "`compact`" の場合のみ使用されます。 "`short`" (既定値) または "`long`" のどちらかを取ります。
    - `currency`
      - : 通貨の書式で使用するための通貨です。使用可能な値は ISO 4217 通貨コードであり、例えば米ドルは "`USD`"、ユーロは "`EUR`"、日本円には "`JPY`" です。 — [Current currency & funds code list](http://www.currency-iso.org/en/home/tables/table-a1.html) を参照してください。既定値はありません。 `style` が "`currency`" である場合、 `currency` プロパティを提供する必要があります。
    - `currencyDisplay`

      - : 通貨の書式で通貨を表示する方法です。使用可能な値は次の通りです。

        - "`symbol`" はローカライズされた通貨記号、例えば € などを使用します。これが既定値です。
        - "`narrowSymbol`" は短い形式の記号を使用します ("US$100" ではなく "$100")。
        - "`code`" は ISO 通貨コードを使用します。
        - "`name`" はローカライズされた通貨名、例えば "`dollar`" を使用します。

    - `currencySign`
      - : 多くのロケールでは、会計の書式はマイナス記号を追加する代わりに数値を括弧で囲みます。この形式は `currencySign` オプションを "`accounting`" に設定すると有効になります。既定値は "`standard`" です。
    - `localeMatcher`
      - : 使用するロケール比較アルゴリズムです。使用可能な値は "`lookup`" および "`best fit`" です。既定値は "`best fit`" です。このオプションについての情報は、 {{jsxref("Global_Objects/Intl", "Intl page", "#Locale_negotiation", 1)}} を参照してください。
    - `notation`

      - : 数値を表示するための書式です。既定値は "`standard`" です。

        - "`standard`" は、通常の数値の書式です。
        - "`scientific`" は、整形された数値の次数をを返します。
        - "`engineering`" は、3 で割ることができる場合に 10 のべき乗を返します。
        - "`compact`" は、指数表記を表す文字列で、既定値は "short" の形式を使用したものです。

    - `numberingSystem`
      - : 数値体系です。使用可能な値には、 "`arab`", "`arabext`", " `bali`", "`beng`", "`deva`", "`fullwide`", " `gujr`", "`guru`", "`hanidec`", "`khmr`", " `knda`", "`laoo`", "`latn`", "`limb`", "`mlym`", " `mong`", "`mymr`", "`orya`", "`tamldec`", " `telu`", "`thai`", "`tibt`" があります。
    - `signDisplay`

      - : 数値の符号を表示するときです。既定値は "`auto`" です。

        - "`auto`" は、負の数のみ符号を表示します。
        - "`never`" は、符号を表示しません。
        - "`always`" は、常に符号を表示します。
        - "`exceptZero`" は正の数と負の数には符号を表示しますが、ゼロには表示しません。

    - `style`

      - : 使用する整形スタイルで、既定値は "`decimal`" です。

        - "`decimal`" は、ふつうの数値の整形に使用します。
        - "`currency`" は、通貨の整形に使用します。
        - "`percent`" は、パーセントの整形に使用します。
        - "`unit`" は単位の整形に使用します。

    - `unit`
      - : `unit` の整形で使用する単位で、使用可能な値は [UTS #35, Part 2, Section 6](http://unicode.org/reports/tr35/tr35-general.html#Unit_Elements) で定義されているコア単位識別子です。 [全体リスト](https://github.com/unicode-org/cldr/blob/master/common/validity/unit.xml)から単位の[サブセット](https://tc39.es/proposal-unified-intl-numberformat/section6/locales-currencies-tz_proposed_out.html#sec-issanctionedsimpleunitidentifier)が ECMAScript で使用するために選択されました。一組の単純な単位を "`-per-`" で結合し、複合単位を創ることができます。既定値はありません。 `style` が "`unit`" である場合、 `unit` プロパティを指定する必要があります。
    - `unitDisplay`

      - : `unit` の整形で使用する単位の整形スタイルで、既定値は "`short`" です。

        - "`long`" (例: `16 litres`)
        - "`short`" (例: `16 l`)
        - "`narrow`" (例: `16l`)

    - `useGrouping`
      - : グループ化する区切り記号を使用するかどうかです。例えば、 3 桁区切りや 1000/ラク/クレオールの区切り記号など。設定可能な値は true と false で、既定値は true です。

    以下のプロパティは 2 つのグループに分類できます。 `minimumIntegerDigits`、`minimumFractionDigits`、`maximumFractionDigits` が一方のグループ、 `minimumSignificantDigits` と `maximumSignificantDigits` が他方のグループに属します。 2 つ目のグループから少なくとも 1 つのプロパティが定義されていれば、 1 つ目のグループは無視されます。

    - `minimumIntegerDigits`
      - : 整数部に使用する最小桁数です。使用可能な値は 1 から 21 までです。既定値は 1 です。
    - `minimumFractionDigits`
      - : 小数部に使用する最小桁数です。使用可能な値は 0 から 20 までです。既定値は、通常の数値とパーセント形式では 0 です。通貨形式では [ISO 4217 通貨コードリスト](http://www.currency-iso.org/en/home/tables/table-a1.html)で提供されている副単位の桁数です (このリストで情報が提供されていない場合は 2 です)。
    - `maximumFractionDigits`
      - : 小数部に使用する最大桁数です。使用可能な値は 0 から 20 までです。既定値は、通常の数値では `minimumFractionDigits` と 3 の大きい方、通貨形式では `minimumFractionDigits` と [ISO 4217 通貨コードリスト](http://www.currency-iso.org/en/home/tables/table-a1.html)で提供されている副単位の桁数です (このリストで情報が提供されていない場合は 2)、パーセント形式の場合は `minimumFractionDigits` と 0 の大きい方です。
    - `minimumSignificantDigits`
      - : 使用する最小有効桁数です。使用可能な値は 1 から 21 までです。既定値は 1 です。
    - `maximumSignificantDigits`
      - : 使用する最大有効桁数です。使用可能な値は 1 から 21 までです。既定値は 1 です。

## 例

### 基本的な使用

特定のロケールなしで使用すると、既定のロケール、既定のオプションで整形された文字列が返されます。

```js
let amount = 3500;

console.log(new Intl.NumberFormat().format(amount));
// → '3,500' if in US English locale
```

<h3 id="Decimal_and_percent_formatting" &#x22;="">十進数とパーセントの整形</h3>

```js
let amount = 3500;

new Intl.NumberFormat("en-US", { style: "decimal" }).format(amount);
// → '3,500'
new Intl.NumberFormat("en-US", { style: "percent" }).format(amount);
// → '350,000%'
```

### 単位の整形

`style` が `'unit'` である場合、 `unit` プロパティを提供する必要があります。オプションで、 `unitDisplay` が単位の整形を制御します。

```js
let amount = 3500;

new Intl.NumberFormat("en-US", { style: "unit", unit: "liter" }).format(amount);
// → '3,500 L'

new Intl.NumberFormat("en-US", {
  style: "unit",
  unit: "liter",
  unitDisplay: "long",
}).format(amount);
// → '3,500 liters'
```

### 通貨の整形

`style` が `'currency'` であった場合、 `currency` プロパティを提供する必要があります。オプションで、 `currencyDisplay` および `currencySign` が単位の整形を制御します。

```js
let amount = -3500;
new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
  amount,
);
// → '-$3,500.00'

new Intl.NumberFormat("bn", {
  style: "currency",
  currency: "USD",
  currencyDisplay: "name",
}).format(amount);
// →  '-3,500.00 US dollars'

new Intl.NumberFormat("bn", {
  style: "currency",
  currency: "USD",
  currencySign: "accounting",
}).format(amount);
// →  '($3,500.00)'
```

### 科学、工学、短縮表記

科学の短縮表記は `notation` オプションで表すことができ、以下のようになります。

```js
new Intl.NumberFormat("en-US", { notation: "scientific" }).format(987654321);
// → 9.877E8

new Intl.NumberFormat("pt-PT", { notation: "scientific" }).format(987654321);
// → 9,877E8

new Intl.NumberFormat("en-GB", { notation: "engineering" }).format(987654321);
// → 987.654E6

new Intl.NumberFormat("de", { notation: "engineering" }).format(987654321);
// → 987,654E6

new Intl.NumberFormat("zh-CN", { notation: "compact" }).format(987654321);
// → 9.9亿

new Intl.NumberFormat("fr", {
  notation: "compact",
  compactDisplay: "long",
}).format(987654321);
// → 988 millions

new Intl.NumberFormat("en-GB", {
  notation: "compact",
  compactDisplay: "short",
}).format(987654321);
// → 988M
```

### 符号の表示

正の数と負の数に符号を表示し、ゼロには表示しない場合は次のようにします。

```js
new Intl.NumberFormat("en-US", {
  style: "percent",
  signDisplay: "exceptZero",
}).format(0.55);
// → '+55%'
```

なお、通貨の符号が "accounting" である場合、負号の代わりに括弧が使用されることがあります。

```js
new Intl.NumberFormat("bn", {
  style: "currency",
  currency: "USD",
  currencySign: "accounting",
  signDisplay: "always",
}).format(-3500);

// → '($3,500.00)'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Intl.NumberFormat.NumberFormat")}}

## 関連情報

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Global_Objects/Intl", "Intl")}}
