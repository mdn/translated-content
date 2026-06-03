---
title: Intl.NumberFormat() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Intl.NumberFormat()`** コンストラクターは、言語に依存した数値の書式化ができる {{jsxref("Intl.NumberFormat")}} オブジェクトを生成します。

{{InteractiveExample("JavaScript デモ: Intl.NumberFormat() コンストラクター", "taller")}}

```js interactive-example
const number = 123456.789;

console.log(
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
    number,
  ),
);
// 予想される結果: "123.456,79 €"

// 日本円は副単位を使用しない
console.log(
  new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }).format(
    number,
  ),
);
// 予想される結果: "￥123,457"

// 有効桁数を 3 桁に制限
console.log(
  new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
    number,
  ),
);
// 予想される結果: "1,23,000"
```

## 構文

```js-nolint
new Intl.NumberFormat()
new Intl.NumberFormat(locales)
new Intl.NumberFormat(locales, options)

Intl.NumberFormat()
Intl.NumberFormat(locales)
Intl.NumberFormat(locales, options)
```

> [!NOTE]
> `Intl.NumberFormat()` は、[`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) を使用しても、使用しなくても呼び出すことができます。どちらも新しい `Intl.NumberFormat` インスタンスを作成します。ただし、`new` を使用せずに呼び出し、`this` 値が別の `Intl.NumberFormat` インスタンスである場合は、特別な動作があります。[返値](#返値)を参照してください。

### 引数

- `locales` {{optional_inline}}
  - : BCP 47 言語タグの文字列、または {{jsxref("Intl.Locale")}} インスタンス、またはそのようなロケール識別子の配列です。 `undefined` が渡された場合、または指定されたロケール識別子が対応していない場合は、実行時の既定のロケールが使用されます。 `locales` 引数の一般的な形式および解釈については、[`Intl` メインページにある引数の説明](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument)を参照してください。

    次の Unicode 拡張キーが許可されています。
    - `nu`
      - : [`numberingSystem`](#numberingsystem) を参照してください。

    このキーは、以下に掲載されている `options` にも対応しています。両方が設定されている場合、 `options` プロパティが優先されます。

- `options` {{optional_inline}}
  - : オブジェクトです。読みやすさのため、プロパティリストは、[ロケールオプション](#ロケールオプション)、[スタイルオプション](#スタイルオプション)、[桁オプション](#桁オプション)、[その他のオプション](#その他のオプション)など、その目的に応じて領域に分かれています。

#### ロケールオプション

- `localeMatcher`
  - : 使用するロケール照合アルゴリズムです。使用可能な値は `"lookup"` および `"best fit"` です。既定値は `"best fit"` です。
    このオプションについての情報は、[ロケールの識別とネゴシエーション](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl#ロケールの識別とネゴシエーション)を参照してください。

- `numberingSystem`
  - : 数値の書式化に使用する記数法。たとえば、`"arab"`、`"hans"`、`"mathsans"`などが使用されます。対応している記数法の種類の一覧については、 [`Intl.supportedValuesOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#対応している記数法) を参照してください。このオプションは、Unicode 拡張キー `nu` を使用して設定することもできます。両方が指定されている場合、この `options` プロパティが優先されます。

#### スタイルオプション

使用されている `style` によっては、その一部が無視されたり、それ以外のものが要求されたりする場合があります。

- `style`
  - : 使用する書式化スタイルです。
    - `"decimal"` （既定値）
      - : ふつうの数値の書式化に使用します。
    - `"currency"`
      - : 通貨の書式化に使用します。
    - `"percent"`
      - : パーセントの書式化に使用します。
    - `"unit"`
      - : 単位の書式化に使用します。
- `currency`
  - : 通貨の書式で使用するための通貨です。使用可能な値は ISO 4217 通貨コードであり、例えば米ドルは `"USD"`、ユーロは `"EUR"`、日本円には `"JPY"` です。 — [`Intl.supportedValuesOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#対応している通貨識別子) を参照してください。既定値はありません。 `style` が `"currency"` である場合、 `currency` プロパティを提供する必要があります。これは大文字に正規化されます。
- `currencyDisplay`
  - : 通貨の書式で通貨を表示する方法です。
    - `"code"`
      - : ISO 通貨コードを使用します。
    - `"symbol"`
      - : ローカライズされた通貨記号、例えば € などです。
    - `"narrowSymbol"`
      - : 短い形式の記号を使用します（"US$100" ではなく "$100"）。
    - `"name"`
      - : ローカライズされた通貨名、例えば `"dollar"` などです。

- `currencySign`
  - : 多くのロケールでは、会計の書式はマイナス記号を追加する代わりに数値を括弧で囲みます。指定可能な値は `"standard"` と `"accounting"` です。既定値は `"standard"` です。
- `unit`
  - : `unit` の書式化で使用する単位で、使用可能な値は [`Intl.supportedValuesOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#対応している単位識別子) に書かれています。一組の単純な単位を "-per-" で結合し、複合単位を作り出すことができます。既定値はありません。 `style` が `"unit"` である場合、 `unit` プロパティを指定する必要があります。
- `unitDisplay`
  - : `unit` の書式化で使用する単位の書式化スタイルです。利用可能な値は次の通りです。
    - `"short"` （既定値）
      - : 例: `16 l`
    - `"narrow"`
      - : 例: `16l`
    - `"long"`
      - : 例: `16 litres`

#### 桁オプション

次のプロパティは {{jsxref("Intl.PluralRules")}} にも対応しています。

- `minimumIntegerDigits`
  - : 使用する整数の桁数の最小値。この数値よりも整数の桁数が少ない場合は、書式化時に左側に 0 が（指定した長さに）埋め込まれます。使用可能な値は `1` から `21` までで、既定値は `1` です。
- `minimumFractionDigits`
  - : 小数部に使用する最小桁数です。使用可能な値は `0` から `100` までです。既定値は、通常の数値とパーセント形式では `0` であり、通貨形式では [ISO 4217 通貨コードリスト](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list-one.xml)で提供されている副単位の桁数です (このリストで情報が提供されていない場合は 2 です)。この既定値がいつ適用されるかについては、 [SignificantDigits/FractionDigits の既定値](#significantdigitsfractiondigits_の既定値)を参照してください。
- `maximumFractionDigits`
  - : 小数部に使用する最大桁数です。使用可能な値は 0 から 20 までです。既定値は、通常の数値では `minimumFractionDigits` と 3 の大きい方、通貨形式では `minimumFractionDigits` と [ISO 4217 通貨コードリスト](https://www.currency-iso.org/en/home/tables/table-a1.html)で提供されている副単位の桁数です (このリストで情報が提供されていない場合は 2)、パーセント形式の場合は `minimumFractionDigits` と 0 の大きい方です。この既定値がいつ適用されるかについては、 [SignificantDigits/FractionDigits の既定値](#significantdigitsfractiondigits_の既定値)を参照してください。
- `minimumSignificantDigits`
  - : 使用する最小有効桁数です。使用可能な値は 1 から 21 までです。既定値は 1 です。この既定値がいつ適用されるかについては、 [SignificantDigits/FractionDigits の既定値](#significantdigitsfractiondigits_の既定値)を参照してください。
- `maximumSignificantDigits`
  - : 使用する最大有効桁数です。使用可能な値は 1 から 21 までです。既定値は 1 です。この既定値がいつ適用されるかについては、 [SignificantDigits/FractionDigits の既定値](#significantdigitsfractiondigits_の既定値)を参照してください。
- `roundingPriority`
  - : 丸め衝突を解決する方法を指定します。 "FractionDigits" ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) と "SignificantDigits" ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#maximumsignificantdigits)) が両方指定されている場合に使用します。
    使用可能な値は次のとおりです。
    - `"auto"` （既定値）
      - : 有効数字のプロパティの結果が使用されます。
    - `"morePrecision"`
      - : より精度が向上するプロパティの結果が使用されます。
    - `"lessPrecision"`
      - : より精度が低下するプロパティの結果が使用されます。

    値が `"auto"` の場合、 `notation` が `"compact"` であり、 4 つの "FractionDigits"/"SignificantDigits" オプションがいずれも設定されていない場合あ、 `"morePrecision"` に正規化されます。

    なお、値が `auto` 以外の場合、 [`maximumSignificantDigits`](#minimumsignificantdigits) と [`maximumFractionDigits`](#maximumfractiondigits) からより正確な結果が計算されます (最小有効桁数および最小小数点桁数の設定は無視されます)。

- `roundingIncrement`
  - : 丸めを行うべき増加量を、計算された丸め量に対して相対的に示します。使用可能な値は、`1`、`2`、`5`、`10`、`20`、`25`、`50`、`100`、`200`、`250`、`500`、`1000`、`2000`、`2500`、`5000` です。既定値は `1` です。有効桁数丸めや、`auto` 以外の `roundingPriority` の設定と混在することはできません。

- `roundingMode`
  - : 小数点以下の桁数を丸める方法。使用可能な値は次のとおりです。
    - `"ceil"`
      - : +∞ 方向に丸められます。正の値は切り上げます。負の値は「正の値の方」に丸めます。
    - `"floor"`
      - : -∞ 方向に丸められます。正の値は切り捨てます。負の値は「負の値の方」に丸めます。
    - `"expand"`
      - : 0 より離れる方向に丸めます。値の振れ幅は、丸めによって常に拡大します。正の値は切り上げます。負の値は「負の値の方」に丸めます。
    - `"trunc"`
      - : 0 に向かって丸めます。値の振れ幅は、丸めによって常に縮小します。正の値は切り捨てます。負の値は「負の値ではない方」に丸めます。
    - `"halfCeil"`
      - : +∞ に向かって丸めます。増分の半分より大きい値は `"ceil"` のように（+∞ に向かって）丸め、増分の半分未満の値は `"floor"` のように（-∞ に向かって）丸めます。増分の半分では、値は `"ceil"` のように丸めます。
    - `"halfFloor"`
      - : -∞ に向かって丸めます。増分の半分より大きい値は `"ceil"` のように（+∞ に向かって）丸め、増分の半分未満の値は `"floor"` のように（-∞ に向かって）丸めます。増分の半分では、値は `"floor"` のように丸めます。
    - `"halfExpand"` （既定値）
      - : 0 より離れる方向に丸めます。増分の半分より大きい値は `"expand"` のように（0 から遠い方に）丸め、増分の半分未満の値は `"trunc"` のように（0 に向かって）丸めます。増分の半分では、値は `"expand"` のように丸めます。
    - `"halfTrunc"`
      - : 0 に向かって丸めます。増分の半分より大きい値は `"expand"` のように（0 から遠い方に）丸め、増分の半分未満の値は `"trunc"` のように（0 に向かって）丸めます。増分の半分では、値は `"trunc"` のように丸めます。
    - `"halfEven"`
      - : 最も近い偶数に丸めます。増分の半分以上の値は `"expand"` （0 から離れる方向）に、増分の半分未満の値は `"trunc"` （0 に向かう方向）に丸めます。増分の半分値は、最も近い偶数桁に丸めます。

    これらのオプションは、 [ICU ユーザーガイド](https://unicode-org.github.io/icu/userguide/format_parse/numbers/rounding-modes.html)（英語）を反映しており、 "expand" と "trunc" は、それぞれ ICU の "UP" と "DOWN" に割り当てられています。
    下記の[丸めモード](#丸めモード)の例は、それぞれのモードがどのように動作するのかを示しています。

- `trailingZeroDisplay`
  - : 整数の末尾の 0 の表示方法に関する方針です。使用可能な値は次のとおりです。
    - `"auto"` （既定値）
      - : `minimumFractionDigits` と `minimumSignificantDigits` に応じて、末尾のゼロを保持します。
    - `"stripIfInteger"`
      - : 小数部分がすべて 0 の場合、小数部分を削除します。小数部分が 0 以外の場合、これは `"auto"` と同じです。

##### SignificantDigits/FractionDigits の既定値

前述の 4 つのオプション（`FractionDigits` および `SignificantDigits` のオプション）については、その既定値について述べましたが、これらの既定値は無条件に適用されるわけではありません。これらは、プロパティが実際に使用される場合にのみ適用されます。これは、[`roundingPriority`](#roundingpriority) および [`notation`](#notation) の設定によって異なります。仕様上、次のように設定されています。

- `roundingPriority` が `"auto"` 以外の場合、4 つのオプションがすべて適用されます。
- `roundingPriority` が `"auto"` で、少なくとも 1 つの `SignificantDigits` オプションが設定されている場合、 `SignificantDigits` オプションが適用され、 `FractionDigits` オプションは無視されます。
- `roundingPriority` が `"auto"` で、少なくとも 1 つの `FractionDigits` オプションが設定されているか、 `notation` が `"compact"` ではない場合、 `FractionDigits` オプションが適用され、 `SignificantDigits` オプションは無視されます。
- `roundingPriority` が `"auto"`、`notation` が `"compact"`、4 つのオプションがすべて設定されていない場合、これらは `{ minimumFractionDigits: 0, maximumFractionDigits: 0, minimumSignificantDigits: 1, maximumSignificantDigits: 2 }` に設定され、`roundingPriority` は `"morePrecision"` に設定されます。

#### その他のオプション

- `notation`
  - : 数値の表示に使用する書式化です。使用可能な値は次のとおりです。
    - `"standard"` （既定値）
      - : 通常の数値の書式です。
    - `"scientific"`
      - : 書式化された数値の桁数を返します。
    - `"engineering"`
      - : 3 で割ることができる場合に 10 のべき乗を返します。
    - `"compact"`
      - : 指数表記を表す文字列です。既定値は "short" の形式を使用したものです。
- `compactDisplay`
  - : `notation` が `"compact"` の場合のみ使用されます。 `"short"` (既定値) または `"long"` のどちらかを取ります。
- `useGrouping`
  - : 千の桁区切り文字や、千/万/億の桁区切り文字などの、グループ化区切り文字を使用するかどうか。
    - `"always"`
      - : ロケールで推奨されていない場合でも、グループ化区切り文字を表示します。
    - `"auto"`
      - : ロケール環境設定に基づいてグループ区切り文字を表示します。これは通貨にも依存する場合があります。
    - `"min2"`
      - : グループに 2 桁以上の数字がある場合に、グループ区切り文字を表示します。
    - `true`
      - : `"always"` と同じです。
    - `false`
      - : グループ化区切り文字を表示しません。

    `notation` が `"compact"` の場合、既定値は `"min2"` です。それ以外の場合は `"auto"` です。文字列値 `"true"` および `"false"` は受け入れられますが、常に既定値に変換されます。

- `signDisplay`
  - : 数値の符号を表示する場面。使用可能な値は次の通りです。
    - `"auto"` （既定値）
      - : 負のゼロを含め、負の数のみ符号を表示します。
    - `"always"`
      - : 常に符号を表示します。
    - `"exceptZero"`
      - : 正の数と負の数には符号を表示しますが、ゼロには表示しません。
    - `"negative"`
      - : 負の数にのみ符号を表示しますが、ゼロには表示しません。
    - `"never"`
      - : 符号を表示しません。

### 返値

新しい `Intl.NumberFormat` オブジェクトです。

> [!NOTE]
> 以下のテキストは、仕様で「オプション」とマークされている動作について記述しています。すべての環境で動作するとは限りません。[ブラウザーの互換性表](#ブラウザーの互換性)を確認してください。

通常、 `Intl.NumberFormat()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) を使用しても使用しなくても呼び出すことができ、どちらの場合も新しい `Intl.NumberFormat` インスタンスが返されます。ただし、[`this`](/ja/docs/Web/JavaScript/Reference/Operators/this) の値が [`instanceof`](/ja/docs/Web/JavaScript/Reference/Operators/instanceof) `Intl.NumberFormat` であるオブジェクトの場合（必ずしも `new Intl.NumberFormat` によって作成されていることを意味するわけではありません。単にプロトタイプチェーンに `Intl.NumberFormat.prototype` が存在すること）である場合は、代わりに `this` の値が返され、新しく作成された `Intl.NumberFormat` オブジェクトは `[Symbol(IntlLegacyConstructedSymbol)]` プロパティ（インスタンス間で再利用される固有のシンボル）に隠されます。

```js
const formatter = Intl.NumberFormat.call(
  { __proto__: Intl.NumberFormat.prototype },
  "en-US",
  { notation: "scientific" },
);
console.log(Object.getOwnPropertyDescriptors(formatter));
// {
//   [Symbol(IntlLegacyConstructedSymbol)]: {
//     value: NumberFormat [Intl.NumberFormat] {},
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }
// }
```

ここで実際の `Intl.NumberFormat` インスタンスは 1 つだけであることに注意してください。それは `[Symbol(IntlLegacyConstructedSymbol)]` に隠れているものです。`formatter` で [`format()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format) および [`resolvedOptions()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions) メソッドを呼び出すと、そのインスタンスに格納されているオプションが正しく使用されますが、 しかし、それ以外のすべてのメソッド（たとえば、[`formatRange()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange)）を呼び出すと、 "TypeError: formatRange method called on incompatible Object" というエラーが発生します。これは、これらのメソッドが非表示のインスタンスのオプションを参照しないためです。

この動作は `ChainNumberFormat` と呼ばれ、 `Intl.NumberFormat()` が `new` を使用せずに、 `this` が `instanceof Intl.NumberFormat` 以外の何らかの値に設定されて呼び出された場合には現れません。 `Intl.NumberFormat()` として直接呼び出すと、`this` の値は [`Intl`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl) となり、新しい `Intl.NumberFormat` インスタンスが通常どおり作成されます。

### 例外

- {{jsxref("RangeError")}}
  - : 次のいずれかの場合に発生します。
    - 列挙値（`style`、`units`、`currency` といった値）を取るプロパティが、不正な値に設定されている。
    - `maximumFractionDigits` と `minimumFractionDigits` の両方が設定されており、異なる値に設定されている。
      さまざまな書式設定オプションによっては、これらのプロパティに既定値が指定されている場合があることに注意してください。
      したがって、プロパティの 1 つだけを設定した場合でも、このエラーを取得する可能性があります。
- {{jsxref("TypeError")}}
  - : `options.style` プロパティが "unit" または "currency" に設定されており、対応するプロパティ `options.unit` または `options.currency` に値が設定されていない場合に発生します。

## 例

### 基本的な使用

特定のロケールなしで使用すると、既定のロケール、既定のオプションで整形された文字列が返されます。

```js
const amount = 3500;

console.log(new Intl.NumberFormat().format(amount));
// '3,500' （US English ロケールの場合）
```

### 十進数とパーセントの書式化

```js
const amount = 3500;

new Intl.NumberFormat("en-US", {
  style: "decimal",
}).format(amount); // '3,500'
new Intl.NumberFormat("en-US", {
  style: "percent",
}).format(amount); // '350,000%'
```

### 単位の書式化

`style` が `'unit'` である場合、 `unit` プロパティを提供する必要があります。
オプションで、 `unitDisplay` が単位の書式化を制御します。

```js
const amount = 3500;

new Intl.NumberFormat("en-US", {
  style: "unit",
  unit: "liter",
}).format(amount); // '3,500 L'

new Intl.NumberFormat("en-US", {
  style: "unit",
  unit: "liter",
  unitDisplay: "long",
}).format(amount); // '3,500 liters'
```

### 通貨の書式化

`style` が `'currency'` であった場合、 `currency` プロパティを提供する必要があります。オプションで、 `currencyDisplay` および `currencySign` が単位の書式化を制御します。

```js
const amount = -3500;
new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
}).format(amount); // '-$3,500.00'

new Intl.NumberFormat("bn", {
  style: "currency",
  currency: "USD",
  currencyDisplay: "name",
}).format(amount); // '-3,500.00 US dollars'

new Intl.NumberFormat("bn", {
  style: "currency",
  currency: "USD",
  currencySign: "accounting",
}).format(amount); // '($3,500.00)'
```

### 科学、工学、短縮表記

科学の短縮表記は `notation` オプションで表すことができ、以下のようになります。

```js
new Intl.NumberFormat("en-US", {
  notation: "scientific",
}).format(987654321);
// 9.877E8

new Intl.NumberFormat("pt-PT", {
  notation: "scientific",
}).format(987654321);
// 9,877E8

new Intl.NumberFormat("en-GB", {
  notation: "engineering",
}).format(987654321);
// 987.654E6

new Intl.NumberFormat("de", {
  notation: "engineering",
}).format(987654321);
// 987,654E6

new Intl.NumberFormat("zh-CN", {
  notation: "compact",
}).format(987654321);
// 9.9亿

new Intl.NumberFormat("fr", {
  notation: "compact",
  compactDisplay: "long",
}).format(987654321);
// 988 millions

new Intl.NumberFormat("en-GB", {
  notation: "compact",
  compactDisplay: "short",
}).format(987654321);
// 988M
```

### 符号の表示

正の数と負の数に符号を表示し、ゼロには表示しない場合は次のようにします。

```js
new Intl.NumberFormat("en-US", {
  style: "percent",
  signDisplay: "exceptZero",
}).format(0.55);
// '+55%'
```

なお、通貨の符号が "accounting" である場合、負号の代わりに括弧が使用されることがあります。

```js
new Intl.NumberFormat("bn", {
  style: "currency",
  currency: "USD",
  currencySign: "accounting",
  signDisplay: "always",
}).format(-3500);
// '($3,500.00)'
```

### FractionDigits と SignificantDigits と IntegerDigits

数値の書式化時に、小数点以下の桁数、整数桁数、有効桁数を最小値または最大値として指定することができます。

> [!NOTE]
> 有効桁数と小数点以下の桁数の制限が両方指定されている場合、実際の書式化は [`roundingPriority`](#roundingpriority) によって決まります。

#### FractionDigits と IntegerDigits の使用

整数および小数点以下の桁のプロパティは、それぞれ小数点の前後に表示する桁数を示します。
表示する値が指定した整数桁数より少ない場合、期待される数値になるまで左側に 0 が埋められます。
小数点以下の桁数が少ない場合、右側に 0 が埋められます。
どちらの場合も、下記に示します。

```js
// 書式化により、最小の整数および小数点を表示するために 0 が追加される
console.log(
  new Intl.NumberFormat("en", {
    minimumIntegerDigits: 3,
    minimumFractionDigits: 4,
  }).format(4.33),
);
// "004.3300"
```

値が指定された最大数値よりも小数点以下の桁数が多い場合、その値は丸められます。
丸める方法は、[`roundingMode`](#roundingmode) プロパティによって決まります（詳細は[丸めモード](#丸めモード)の章で指定されています）。
下記では、値は 5 桁の小数点以下 (`4.33145`) を 2 桁 (`4.33`) に丸めています。

```js
// 表示値を最大桁数に短縮
console.log(
  new Intl.NumberFormat("en", {
    maximumFractionDigits: 2,
  }).format(4.33145),
);
// "4.33"
```

値にすでに 2 桁以上の小数点以下がある場合、小数点以下の最小桁数は効果はありません。

```js
// 値がより高い精度である場合、小数点以下の最小桁数は効果がありません。
console.log(
  new Intl.NumberFormat("en", {
    minimumFractionDigits: 2,
  }).format(4.33145),
);
// "4.331"
```

> [!WARNING]
> 既定値には注意してください。コードで指定していない場合でも、書式化に影響を与える可能性があるためです。
> 既定の最大桁数は、通常値では `3`、通貨では `2` であり、それ以外にも、あらかじめ定義された型によって異なる値を持つことがあります。

上記の書式化された値は、最大桁数を指定していないにもかかわらず、3 桁に丸められています。
これは、`minimumFractionDigits` を指定すると、`maximumFractionDigits` の既定値が設定されるためです。その逆も同様です。`maximumFractionDigits` および `minimumFractionDigits` の既定値は、それぞれ `3` および `0` です。

フォーマッターを検査するには、[`resolvedOptions()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions) を使用することができます。

```js
console.log(
  new Intl.NumberFormat("en", {
    maximumFractionDigits: 2,
  }).resolvedOptions(),
);
// {
//   …
//   minimumIntegerDigits: 1,
//   minimumFractionDigits: 0,
//   maximumFractionDigits: 2,
//   …
// }

console.log(
  new Intl.NumberFormat("en", {
    minimumFractionDigits: 2,
  }).resolvedOptions(),
);
// {
//   …
//   minimumIntegerDigits: 1,
//   minimumFractionDigits: 2,
//   maximumFractionDigits: 3,
//   …
// }
```

#### SignificantDigits の使用

有効桁数は、整数部分と小数点以下の桁数を含む桁の総数です。
`maximumSignificantDigits` は、元の数値から表示する桁の総数を示すために使用されます。

下記は、これがどのように動作するのかを示す例です。
特に最後のケースに注意してください。最初の桁のみが保持され、それ以外は破棄/ゼロに設定されます。

```js
// 5 桁の有効桁数を表示
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 5,
  }).format(54.33145),
);
// "54.331"

// 最大 2 桁の有効桁数
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 2,
  }).format(54.33145),
);
// "54"

// 最大 1 桁の有効桁数
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 1,
  }).format(54.33145),
);
// "50"
```

`minimumSignificantDigits` は、指定した桁数以上が確実に表示されるようにし、必要に応じて値の末尾に 0 を追加します。

```js
// 最小 10 桁の有効桁数
console.log(
  new Intl.NumberFormat("en", {
    minimumSignificantDigits: 10,
  }).format(54.33145),
);
// "54.33145000"
```

> [!WARNING]
> 書式化に影響を与える可能性があるため、既定値には注意してください。
> 1 つの `SignificantDigits` プロパティのみを使用する場合、その対応するプロパティには、既定値が自動的に適用されます。
> 既定の最大有効桁数と最小有効桁数は、それぞれ 21 と 1 です。

#### 有効桁数と小数点以下の桁数を同時に指定

小数点以下の桁数（[`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)）と有効桁数（[`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#maximumsignificantdigits)）は、どちらも小数点以下の桁数と先頭桁の桁数を書式化する方法を制御する方法です。
両方を同時に使用すると、競合が発生する可能性があります。

これらの競合は、[`roundingPriority`](#roundingpriority) プロパティを使用して解決されます。
既定では、この値は `"auto"` であり、[`minimumSignificantDigits`](#minimumsignificantdigits) または [`maximumSignificantDigits`](#minimumsignificantdigits) のいずれかが指定されている場合、小数点以下の桁数および整数桁のプロパティは無視されることを意味しています。

例えば、以下のコードは、`4.33145` の値を `maximumFractionDigits: 3`、次に `maximumSignificantDigits: 2`、そして最後に両方に対応して書式化します。
両方に対応する値は、`maximumSignificantDigits` で設定された値です。

```js
console.log(
  new Intl.NumberFormat("en", {
    maximumFractionDigits: 3,
  }).format(4.33145),
);
// "4.331"
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 2,
  }).format(4.33145),
);
// "4.3"
console.log(
  new Intl.NumberFormat("en", {
    maximumFractionDigits: 3,
    maximumSignificantDigits: 2,
  }).format(4.33145),
);
// "4.3"
```

[`resolvedOptions()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions) を使用してフォーマッタ－を調べると、`maximumSignificantDigits` または `minimumSignificantDigits` が指定されている場合、返されるオブジェクトには `maximumFractionDigits` は含まれていないことがわかります。

```js
console.log(
  new Intl.NumberFormat("en", {
    maximumFractionDigits: 3,
    maximumSignificantDigits: 2,
  }).resolvedOptions(),
);
// {
//   …
//   minimumIntegerDigits: 1,
//   minimumSignificantDigits: 1,
//   maximumSignificantDigits: 2,
//   …
// }
console.log(
  new Intl.NumberFormat("en", {
    maximumFractionDigits: 3,
    minimumSignificantDigits: 2,
  }).resolvedOptions(),
);
// {
//   …
//   minimumIntegerDigits: 1,
//   minimumSignificantDigits: 2,
//   maximumSignificantDigits: 21,
//   …
// }
```

`auto` の他に、[`roundingPriority`](#roundingpriority) を `morePrecision` または `lessPrecision` として指定することで競合を解決することができます。
フォーマッターは `maximumSignificantDigits` と `maximumFractionDigits` の値を使用して精度を計算します。

以下のコードは、3 つの異なる丸め優先度に対して選択されている書式化を示しています。

```js
const maxFracNF = new Intl.NumberFormat("en", {
  maximumFractionDigits: 3,
});
console.log(`maximumFractionDigits:3 - ${maxFracNF.format(1.23456)}`);
// "maximumFractionDigits:2 - 1.235"

const maxSigNS = new Intl.NumberFormat("en", {
  maximumSignificantDigits: 3,
});
console.log(`maximumSignificantDigits:3 - ${maxSigNS.format(1.23456)}`);
// "maximumSignificantDigits:3 - 1.23"

const bothAuto = new Intl.NumberFormat("en", {
  maximumSignificantDigits: 3,
  maximumFractionDigits: 3,
});
console.log(`auto - ${bothAuto.format(1.23456)}`);
// "auto - 1.23"

const bothLess = new Intl.NumberFormat("en", {
  roundingPriority: "lessPrecision",
  maximumSignificantDigits: 3,
  maximumFractionDigits: 3,
});
console.log(`lessPrecision - ${bothLess.format(1.23456)}`);
// "lessPrecision - 1.23"

const bothMore = new Intl.NumberFormat("en", {
  roundingPriority: "morePrecision",
  maximumSignificantDigits: 3,
  maximumFractionDigits: 3,
});
console.log(`morePrecision - ${bothMore.format(1.23456)}`);
// "morePrecision - 1.235"
```

最大値を指定せずに最小値を指定すると、アルゴリズムが直感に反した動作をする場合があることに注意してください。
以下の例では、`minimumFractionDigits: 2`（`1.00` に書式化）および `minimumSignificantDigits: 2`（`1.0` に書式化）を指定して、値 `1` を書式化しています。
`1.00` は `1.0` よりも桁数が多いため、`morePrecision` を優先すると、結果はこれになるはずですが、実際には逆の結果になります。

```js
const bothLess = new Intl.NumberFormat("en", {
  roundingPriority: "lessPrecision",
  minimumFractionDigits: 2,
  minimumSignificantDigits: 2,
});
console.log(`lessPrecision - ${bothLess.format(1)}`);
// "lessPrecision - 1.00"

const bothMore = new Intl.NumberFormat("en", {
  roundingPriority: "morePrecision",
  minimumFractionDigits: 2,
  minimumSignificantDigits: 2,
});
console.log(`morePrecision - ${bothMore.format(1)}`);
// "morePrecision - 1.0"
```

これは、計算には「最大精度」の値のみが使用され、`maximumSignificantDigits` の既定値が `maximumFractionDigits` よりもはるかに大きいからです。

> [!NOTE]
> 作業部会は、フォーマッターが、指定された小数点以下の桁数と有効桁数を使用して結果を個別に評価する（最小値と最大値の両方を考慮して）ようにアルゴリズムを変更することを提案しました。
> これにより、`morePrecision` が設定されている場合は小数点以下の桁数を多く表示し、`lessPrecision` が設定されている場合は小数点以下の桁数を少なく表示するオプションが選択されます。
> これにより、このケースではより直感的な動作になります。

### 丸めモード

値の小数点以下の桁数がコンストラクターのオプションで指定された数を超える場合、書式化された値を指定された小数点以下の桁数に丸めます。
値を丸める方法は、[`roundingMode`](#roundingmode) プロパティによって決まります。

数値フォーマッターは、既定では `halfExpand` 丸めを使用します。これは、増分の半分ごとに値を「ゼロから離れる方向」に丸めます（言い換えれば、値の振れ幅が切り上げられます）。

正の値の場合、除去される小数点以下の桁が次の増分（またはその半分の点）に近い場合、残りの小数点以下の桁は切り上げられます。それ以外の場合は切り捨てられます。
これを下記に示します。2.23 を 2 桁の有効数字に丸めると、2.23 は増分の半分 2.25 未満であるため、2.2 に切り捨てられます。一方、2.25 以上の値は 2.3 に切り上げられます。

```js
// 増分の半分以下の値：切り捨て。
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 2,
  }).format(2.23),
);
// "2.2"

// 増分の半分以上の値の場合：切り上げ。
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 2,
  }).format(2.25),
);
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 2,
  }).format(2.28),
);
// "2.3"
// "2.3"
```

増分の半分以下の負の数値も、ゼロから丸められます（より負の方向の値になります）。

```js
// 増分の半分未満の場合：切り捨てます。
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 2,
  }).format(-2.23),
);
// "-2.2"

// 増分の半分以上の値の場合：切り上げ。
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 2,
  }).format(-2.25),
);
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 2,
  }).format(-2.28),
);
// "-2.3"
// "-2.3"
```

以下の表は、増分の半分および増分の半分の周辺にある正の値と負の値に対して、さまざまな丸めモードが及ぼす効果を示しています。

| 丸めモード   | 2.23 | 2.25 | 2.28 | -2.23 | -2.25 | -2.28 |
| ------------ | ---- | ---- | ---- | ----- | ----- | ----- |
| `ceil`       | 2.3  | 2.3  | 2.3  | -2.2  | -2.2  | -2.2  |
| `floor`      | 2.2  | 2.2  | 2.2  | -2.3  | -2.3  | -2.3  |
| `expand`     | 2.3  | 2.3  | 2.3  | -2.3  | -2.3  | -2.3  |
| `trunc`      | 2.2  | 2.2  | 2.2  | -2.2  | -2.2  | -2.2  |
| `halfCeil`   | 2.2  | 2.3  | 2.3  | -2.2  | -2.2  | -2.3  |
| `halfFloor`  | 2.2  | 2.2  | 2.3  | -2.2  | -2.3  | -2.3  |
| `halfExpand` | 2.2  | 2.3  | 2.3  | -2.2  | -2.3  | -2.3  |
| `halfTrunc`  | 2.2  | 2.2  | 2.3  | -2.2  | -2.2  | -2.3  |
| `halfEven`   | 2.2  | 2.2  | 2.3  | -2.2  | -2.2  | -2.3  |

`halfEven` を、丸める数値の最後の桁の奇偶（偶数か奇数か）によっても動作が異なります。例えば、上記の表の `halfEven` の動作は、すべての数値の大きさが、より小さい「偶数」の数値 (2.2) とより大きい「奇数」の数値 (2.3) の間にあるため、`halfTrunc` と同じになります。数値が ±2.3 から ±2.4 の間にある場合、`halfEven` は代わりに `halfExpand` と同様に動作します。この動作により、大規模なデータサンプルにおいて、半分の増分が一貫して過小評価または過大評価されるのを避けることができます。

### roundingIncrement の使用

小数点以下の桁を、次の整数以外の増分値に丸めたい場合があります。
例えば、最小の硬貨が 5 セントである通貨では、実際に現金で支払える金額を反映して、値を 5 の増分値に丸めたい場合があります。

この種の丸めは、[`roundingIncrement`](#roundingincrement) プロパティに対応しています。

例えば、`maximumFractionDigits` が 2、`roundingIncrement` が 5 の場合、数値は 0.05 に最も近い数値に丸められます。

```js
const nf = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
  roundingIncrement: 5,
});

console.log(nf.format(11.29)); // "$11.30"
console.log(nf.format(11.25)); // "$11.25"
console.log(nf.format(11.22)); // "$11.20"
```

この特定のパターンは「ニッケル丸め」と呼ばれます。ニッケルは、アメリカ合衆国の 5 セント硬貨の俗称です。
10 セント単位に丸める（「ダイム丸め」）には、`roundingIncrement` を `10` に変更します。

```js
const nf = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
  roundingIncrement: 10,
});

console.log(nf.format(11.29)); // "$11.30"
console.log(nf.format(11.25)); // "$11.30"
console.log(nf.format(11.22)); // "$11.20"
```

丸めアルゴリズムを変更するには、[`roundingMode`](#roundingmode) を使用することもできます。
以下の例は、`halfCeil` 丸めを使用して、半丸め増加量以下の値を「より負の方向の値」に、半丸め増加量以上の値を「より正の方向の値」に丸める方法を示しています。
増加する桁は "0.05" なので、半増分は .025 になります（下記では 11.225 と表示されています）。

```js
const nf = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
  roundingIncrement: 5,
  roundingMode: "halfCeil",
});

console.log(nf.format(11.21)); // "$11.20"
console.log(nf.format(11.22)); // "$11.20"
console.log(nf.format(11.224)); // "$11.20"
console.log(nf.format(11.225)); // "$11.25"
console.log(nf.format(11.23)); // "$11.25"
```

桁数を変更する必要がある場合は、`minimumFractionDigits` と `maximumFractionDigits` を同じ値に設定する必要があることに注意してください。そうしないと、`RangeError` が発生します。

`roundingIncrement` は、有効桁数の丸めや、`auto` 以外の `roundingPriority` の設定と混在させることはできません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Intl")}}
