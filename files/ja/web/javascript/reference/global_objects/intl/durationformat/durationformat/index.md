---
title: Intl.DurationFormat() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat
l10n:
  sourceCommit: 537aeae8ea6f3f080941261af7229dba30f791ac
---

{{JSRef}}

**`Intl.DurationFormat()`** コンストラクターは、 {{jsxref("Intl.DurationFormat")}} オブジェクトを作成します。

## 構文

```js-nolint
new Intl.DurationFormat()
new Intl.DurationFormat(locales)
new Intl.DurationFormat(locales, options)
```

> [!NOTE]
> `Intl.DurationFormat()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) をつけた場合のみ構築できます。 `new` なしで呼び出そうとすると {{jsxref("TypeError")}} が発生します。

### 引数

- `locales` {{optional_inline}}
  - : BCP 47 言語タグまたは {{jsxref("Intl.Locale")}} インスタンスを持つ文字列、あるいはそのようなロケール識別子の配列。 `undefined` が渡された場合、または指定されたロケール識別子がどれも対応していない場合は、ランタイムの既定のロケールが使われます。 `locales` 引数の一般的な形式および解釈については、[Intl メインページの引数の説明](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_引数)を参照してください。

    次の Unicode 拡張キーが使用できます。
    - `nu`
      - : [`numberingSystem`](#numberingsystem) を参照してください。

    このキーは、`options` （以下に掲載）でも設定できます。両方が設定されている場合、 `options` プロパティが優先されます。

- `options` {{optional_inline}}
  - : 次のプロパティを含むオブジェクト（取得順、すべてオプションです）。
    - `localeMatcher`
      - : 使用するロケール照合アルゴリズム。利用可能な値は "`lookup`" と "`best fit`" です。既定値は "`best fit`" です。このオプションについての詳細は、[ロケールの識別とネゴシエーション](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl#ロケールの識別とネゴシエーション)を参照してください。
    - `numberingSystem`
      - : 数値の書式化に使用する記数法。たとえば `"arab"`, `"hans"`, `"mathsans"` などです。 For a list of supported numbering system types, see [`Intl.supportedValuesOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types). このオプションは、`nu` Unicode 拡張キーでも設定できます。両方が指定された場合、この `options` プロパティが優先されます。
    - `style`
      - : 書式化される経過時間のスタイル。この値は、他のすべての単位オプションの既定値として使用され、経過時間単位のリストを連結する場合の {{jsxref("Intl/ListFormat/ListFormat", "Intl.ListFormat()")}} の `style` オプションにも対応します。利用可能な値は次のとおりです。
        - `"long"`
          - : 例: 1 hour and 50 minutes
        - `"short"` (既定値)
          - : 例: 1 hr, 50 min
        - `"narrow"`
          - : 例: 1h 50m
        - `"digital"`
          - : 例: 1:50:00
    - `years`
      - : 書式化される年のスタイル。使用可能な値は `"long"`, `"short"`, `"narrow"`です。既定値は `options.style` ですが、 `"digital"` の場合は `"short"` です。
    - `yearsDisplay`
      - : 年を常に表示するか、 0 以外の場合にのみ表示するか。使用可能な値は `"always"` と `"auto"` です。既定値は、 `years` が指定されていない場合は`"auto"`、指定されている場合は `"always"` です。
    - `months`
      - : 書式化される月のスタイル。使用可能な値は `"long"`, `"short"`, `"narrow"`です。既定値は `options.style` ですが、 `"digital"` の場合は `"short"` です。
    - `monthsDisplay`
      - : 月を常に表示するか、 0 以外の場合にのみ表示するか。使用可能な値は `"always"` と `"auto"` です。既定値は、 `months` が指定されていない場合は`"auto"`、指定されている場合は `"always"` です。
    - `weeks`
      - : 書式化される週のスタイル。使用可能な値は `"long"`, `"short"`, `"narrow"`です。既定値は `options.style` ですが、 `"digital"` の場合は `"short"` です。
    - `weeksDisplay`
      - : 週を常に表示するか、 0 以外の場合にのみ表示するか。使用可能な値は `"always"` と `"auto"` です。既定値は、 `weeks` が指定されていない場合は`"auto"`、指定されている場合は `"always"` です。
    - `days`
      - : 書式化される日のスタイル。使用可能な値は `"long"`, `"short"`, `"narrow"`です。既定値は `options.style` ですが、 `"digital"` の場合は `"short"` です。
    - `daysDisplay`
      - : 日を常に表示するか、 0 以外の場合にのみ表示するか。使用可能な値は `"always"` と `"auto"` です。既定値は、 `days` が指定されていない場合は`"auto"`、指定されている場合は `"always"` です。
    - `hours`
      - : 書式化される時間のスタイル。使用可能な値は `"long"`, `"short"`, `"narrow"`, `"numeric"`, `"2-digit"` です。既定値は `options.style` ですが、 `"digital"` の場合は `"numeric"` です。
    - `hoursDisplay`
      - : 時間を常に表示するか、 0 以外の場合にのみ表示するか。使用可能な値は `"always"` と `"auto"` です。既定値は、 `hours` が指定されておらず、 `options.style` が `"digital"` でない場合は `"auto"`、そうでない場合は `"always"` です。
    - `minutes`
      - : 書式化される分のスタイル。
        - `hours` が `"numeric"` または `"2-digit"` の場合、使用可能な値は `"numeric"` および `"2-digit"` であり、 `"numeric"` は `"2-digit"` に正規化されます。既定は `"numeric"` です。
        - それ以外の場合、使用可能な値は `"long"`, `"short"`, `"narrow"`, `"numeric"`, `"2-digit"` です。既定値は、 `options.style` ですが、 `"digital"` の場合は `"numeric"` です。
    - `minutesDisplay`
      - : 分を常に表示するか、 0 以外の場合にのみ表示するか。使用可能な値は `"always"` と `"auto"` です。既定値は、 `minutes` が指定されておらず、 `options.style` が `"digital"` でない場合は `"auto"`、そうでない場合は `"always"` です。
    - `seconds`
      - : 書式化される秒のスタイル。
        - `minutes` が `"numeric"` または `"2-digit"` の場合、使用可能な値は `"numeric"` および `"2-digit"` であり、 `"numeric"` は `"2-digit"` に正規化されます。既定は `"numeric"` です。
        - それ以外の場合、使用可能な値は `"long"`, `"short"`, `"narrow"`, `"numeric"`, `"2-digit"` です。既定値は、 `options.style` ですが、 `"digital"` の場合は `"numeric"` です。
    - `secondsDisplay`
      - : 秒を常に表示するか、 0 以外の場合にのみ表示するか。使用可能な値は `"always"` と `"auto"` です。既定値は、 `seconds` が指定されておらず、 `options.style` が `"digital"` でない場合は `"auto"`、そうでない場合は `"always"` です。
    - `milliseconds`
      - : 書式化されるミリ秒のスタイル。
        - `seconds` が `"numeric"` または `"2-digit"` の場合、使用可能な値は `"numeric"` のみです。既定は `"numeric"` です。
        - それ以外の場合、使用可能な値は `"long"`, `"short"`, `"narrow"`, `"numeric"` です。既定値は、 `options.style` ですが、 `"digital"` の場合は `"numeric"` です。
    - `millisecondsDisplay`
      - : ミリ秒を常に表示するか、 0 以外の場合にのみ表示するか。
        - `seconds` が `"numeric"` または `"2-digit"` の場合、使用可能な値は `"auto"` のみです。 `milliseconds` が指定されていない場合の既定値は `"auto"` です。
        - それ以外の場合、使用可能な値は `"always"` および `"auto"` です。既定値は、 `milliseconds` が指定されていない場合は `"auto"` であり、そうでなければ `"always"` です。
    - `microseconds`
      - : 書式化されるマイクロ秒のスタイル。
        - `milliseconds` が `"numeric"` の場合、使用可能な値は `"numeric"` のみです。既定は `"numeric"` です。
        - それ以外の場合、使用可能な値は `"long"`, `"short"`, `"narrow"`, `"numeric"` です。既定値は、 `options.style` ですが、 `"digital"` の場合は `"numeric"` です。
    - `microsecondsDisplay`
      - : マイクロ秒を常に表示するか、 0 以外の場合にのみ表示するか。
        - `milliseconds` が `"numeric"` または `"2-digit"` の場合、使用可能な値は `"auto"` のみです。 `microseconds` が指定されていない場合の既定値は `"auto"` です。
        - それ以外の場合、使用可能な値は `"always"` および `"auto"` です。既定値は、 `microseconds` が指定されていない場合は `"auto"` であり、そうでなければ `"always"` です。
    - `nanoseconds`
      - : 書式化されるナノ秒のスタイル。
        - `microseconds` が `"numeric"` の場合、使用可能な値は `"numeric"` のみです。既定は `"numeric"` です。
        - それ以外の場合、使用可能な値は `"long"`, `"short"`, `"narrow"`, `"numeric"` です。既定値は、 `options.style` ですが、 `"digital"` の場合は `"numeric"` です。
    - `nanosecondsDisplay`
      - : ナノ秒を常に表示するか、 0 以外の場合にのみ表示するか。
        - `microseconds` が `"numeric"` または `"2-digit"` の場合、使用可能な値は `"auto"` のみです。 `nanoseconds` が指定されていない場合の既定値は `"auto"` です。
        - それ以外の場合、使用可能な値は `"always"` および `"auto"` です。既定値は、 `nanoseconds` が指定されていない場合は `"auto"` であり、そうでなければ `"always"` です。
    - `fractionalDigits`
      - : 出力に表示する小数点以下の秒の桁の数。使用可能な値は `0` から `9` までで、既定は `undefined` （必要なだけ小数点以下の桁を含める）です。

### 例外

- {{jsxref("RangeError")}}
  - : `locales` または `options` に不正な値が含まれている場合に発生します。

## 解説

それぞれの時間の区分について、 {{jsxref("Intl.NumberFormat")}} オブジェクトが内部で構築されます。このオブジェクトは、次のオプションを使用します（詳細については、 {{jsxref("Intl/NumberFormat/NumberFormat", "Intl.NumberFormat()")}} を参照してください）。

- `numberingSystem`: `options.numberingSystem` の値

`milliseconds`、`microseconds`、または `nanoseconds` が `"numeric"` スタイルを使用する場合、次のオプションも使用されます。

- `minimumFractionDigits`: `options.fractionalDigits` が `undefined` の場合は `0`、それ以外の場合は `options.fractionalDigits` です。
- `maximumFractionDigits`: `options.fractionalDigits` が `undefined` の場合は `9`、それ以外の場合は `options.fractionalDigits` です。
- `roundingMode`: `"trunc"`

時間の区分が `"2-digit"` スタイルを使用している場合、次のオプションも使用されます。

- `minimumIntegerDigits`: `2`

時間区分で `"long"`, `"short"`, `"narrow"` のいずれかのスタイルを使用する場合、次のオプションも使用されます。

- `style`: `"long"`, `"short"`, `"narrow"` のいずれかが指定されている場合は `"unit"`、それ以外の場合は `undefined`
- `unit`: 現在書式化されている単位（`"years"`, `"days"`, `"nanoseconds"`, など）
- `unitDisplay`: 時間区分のスタイルの設定値（`"long"`, `"short"`, `"narrow"` のいずれか）

## 例

### Intl.DurationFormat() コンストラクターの使用

```js
const duration = {
  hours: 2,
  minutes: 20,
  seconds: 35,
};

console.log(new Intl.DurationFormat("pt", { style: "long" }).format(duration));
// "2 horas, 20 minutos e 35 segundos"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.DurationFormat")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Intl")}}
