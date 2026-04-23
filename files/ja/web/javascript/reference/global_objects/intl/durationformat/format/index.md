---
title: Intl.DurationFormat.prototype.format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/format
l10n:
  sourceCommit: 415324c4a53612154ec3186c23fc7326676e53b0
---

{{JSRef}}

**`format()`** は {{jsxref("Intl.DurationFormat")}} インスタンスのメソッドで、この {{jsxref("Intl.DurationFormat")}} オブジェクトのロケールおよび書式設定オプションに従って経過時間を書式化します。

## 構文

```js-nolint
format(duration)
```

### 引数

- `duration`
  - : 書式化される経過時間オブジェクト。 `years`, `months`, `weeks`, `days`, `hours`, `minutes`, `seconds`, `milliseconds`, `microseconds`, `nanoseconds` プロパティの一部またはすべてを含める必要があります。各プロパティの値は整数であり、その符号は一致している必要があります。これは {{jsxref("Temporal.Duration")}} オブジェクトであることができます。これらのプロパティの詳細については、 {{jsxref("Temporal.Duration")}} のドキュメントを参照してください。

### 返値

指定された経過時間を、この {{jsxref("Intl.DurationFormat")}} オブジェクトのロケールおよび書式設定オプションに従って書式化した文字列です。

> [!NOTE]
> ほとんどの場合、`format()` が返す書式化は一貫しています。ただし、同じロケールであっても、実装によって出力は異なる場合があります。出力のばらつきは設計によるものであり、仕様で認められています。また、期待した結果とは異なる場合もあります。例えば、文字列に非改行空白が使用されたり、双方向制御文字で囲まれたりする場合があります。`format()` の結果をハードコードされた定数と比較してはいけません。

## 例

### format() の使用

次の例は、英語を使用して経過時間フォーマッターを作成する方法を示しています。

```js
const duration = {
  years: 1,
  months: 2,
  weeks: 3,
  days: 3,
  hours: 4,
  minutes: 5,
  seconds: 6,
  milliseconds: 7,
  microseconds: 8,
  nanoseconds: 9,
};

// オプションを指定しない場合、スタイルは既定の "short" になります。
new Intl.DurationFormat("en").format(duration);
// "1 yr, 2 mths, 3 wks, 3 days, 4 hr, 5 min, 6 sec, 7 ms, 8 μs, 9 ns"

// スタイルを "long" に設定した場合
new Intl.DurationFormat("en", { style: "long" }).format(duration);
// "1 year, 2 months, 3 weeks, 3 days, 4 hours, 5 minutes, 6 seconds, 7 milliseconds, 8 microseconds, 9 nanoseconds"

// スタイルを "narrow" に設定した場合
new Intl.DurationFormat("en", { style: "narrow" }).format(duration);
// "1y 2mo 3w 3d 4h 5m 6s 7ms 8μs 9ns"
```

### format() を様々なロケールとスタイルで使用

```js
const duration = {
  hours: 1,
  minutes: 46,
  seconds: 40,
};

// スタイルを "long" に設定し、ロケールを "fr-FR" に設定
new Intl.DurationFormat("fr-FR", { style: "long" }).format(duration);
// "1 heure, 46 minutes et 40 secondes"

// スタイルを "short" に設定し、ロケールを "en" に設定
new Intl.DurationFormat("en", { style: "short" }).format(duration);
// "1 hr, 46 min and 40 sec"

// スタイルを "short" に設定し、ロケールを "pt" に設定
new Intl.DurationFormat("pt", { style: "narrow" }).format(duration);
// "1h 46min 40s"

// スタイルを "digital" に設定し、ロケールを "en" に設定
new Intl.DurationFormat("en", { style: "digital" }).format(duration);
// "1:46:40"

// スタイルを "digital"、ロケールを "en" に設定し、 hours を "long" に設定
new Intl.DurationFormat("en", { style: "digital", hours: "long" }).format(
  duration,
);
// "1 hour, 46:40"
```

### format() を fractionalDigits オプション付きで使用

```js
const duration = {
  hours: 11,
  minutes: 30,
  seconds: 12,
  milliseconds: 345,
  microseconds: 600,
};

new Intl.DurationFormat("en", { style: "digital" }).format(duration);
// "11:30:12.3456"

new Intl.DurationFormat("en", { style: "digital", fractionalDigits: 5 }).format(
  duration,
);
// "11:30:12.34560"

new Intl.DurationFormat("en", { style: "digital", fractionalDigits: 3 }).format(
  duration,
);
// "11:30:12.346"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.DurationFormat")}}
- {{jsxref("Temporal.Duration")}}
