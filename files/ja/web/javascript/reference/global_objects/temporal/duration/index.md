---
title: Temporal.Duration
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

**`Temporal.Duration`** オブジェクトは、2 つの時点間の差を表すもので、日付・時刻の演算に使用できます。これは基本的に、年、月、週、日、時間、分、秒、ミリ秒、マイクロ秒、ナノ秒の値の組み合わせとして表現されます。

## 解説

### ISO 8601 期間形式

`Duration` オブジェクトは、[ISO 8601 期間形式](https://en.wikipedia.org/wiki/ISO_8601#Durations)（ECMAScript で規定されたいくつかの拡張機能を含む）を使用してシリアライズおよび構文解析することができます。文字列は次の形式をとります（空白は可読性のためのものであり、実際の文字列には含めないでください）。

```plain
±P nY nM nW nD T nH nM nS
```

- `±` {{optional_inline}}
  - : オプションの符号文字（`+` または `-`）で、正または負の期間を表します。デフォルトは正の期間です。
- `P`
  - : リテラル文字 `P` または `p` で、「期間」(period) を表します。
- `nY`, `nM`, `nW`, `nD`, `nH`, `nM`, `nS`
  - : 数値の後にリテラル文字が続く形式で、それぞれ年 (`Y`)、月 (`M`)、週 (`W`)、日 (`D`)、時間 (`H`)、分 (`M`)、秒 (`S`) を表します。最後の要素を除くすべての要素は整数でなければなりません。最後の成分が時間要素（時間、分、秒）である場合、小数点（ドットまたはカンマ）で始まる 1 桁から 9 桁の小数部分を持つことが可能です。例えば `PT0.0021S` や `PT1.1H` などです。ゼロの要素は省略可能ですが、少なくとも 1 つの要素は存在する必要があります（値がゼロであっても同様です。その場合、期間はゼロとなります）。
- `T`
  - : 日付部分と時刻部分を区切るリテラル文字 `T` または `t` です。この文字は、その後に少なくとも 1 つの要素がある場合にのみ存在する必要があります。

こちらはいくつかの例です。

| ISO 8601           | 意味                                           |
| ------------------ | ---------------------------------------------- |
| `P1Y1M1DT1H1M1.1S` | 1 年 1 ヶ月 1 日 1 時間 1 分 1 秒 100 ミリ秒間 |
| `P40D`             | 40 日間                                        |
| `P1Y1D`            | 1 年と 1 日間                                  |
| `P3DT4H59M`        | 3 日と 4 時間 59 分                            |
| `PT2H30M`          | 2 時間 30 分                                   |
| `P1M`              | 1 ヶ月                                         |
| `PT1M`             | 1 分間                                         |
| `PT0.0021S`        | 2.1 ミリ秒間 (2 ミリ秒と 100 マイクロ秒)       |
| `PT0S`             | ゼロ（標準的な表記）                           |
| `P0D`              | ゼロ                                           |

> [!NOTE]
> ISO 8601-1 標準によると、週単位は他の単位と組み合わせて使用することはできず、期間を表す値は正の値に限られます。この標準の拡張である ISO 8601-2（Temporal が採用している標準）では、文字列の先頭に符号文字を付けることや、週単位を他の単位と組み合わせることができるようになっています。したがって、期間が `P3W1D`、`+P1M`、または `-P1M` のような文字列に変換された場合、他のプログラムでは受け入れられないことがあることにご注意ください。

シリアライズを行う際、出力は格納された成分を可能な限り尊重し、[不均衡な](#duration_balancing)成分も保持します。ただし、1 秒未満の成分は単一の小数点以下の桁数を持つ秒としてシリアライズされるため、不均衡な場合、その正確な値が失われることがあります。正の値については、プラス記号は除外されます。持続時間が0の場合は、常に `PT0S` としてシリアライズされます。

### 暦期間

暦期間 (calendar duration) とは、[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)の単位（週、月、年）のいずれかが含まれている期間のことです。暦以外の期間は移植性があり、暦情報を必要とせずに日付・時間の演算に利用できます。これは、それらが固定された時間を明確に表しているからです。一方、暦期間は移植性がありません。1 ヶ月や 1 年の日数は、暦体系や基準時点によって異なるからです。したがって、暦期間に対して算術演算を行おうとすると、エラーが発生します。期間自体は暦情報を保持していないからです。例えば、グレゴリオ暦の 5 月であれば「1 ヶ月」は「31 日」ですが、4 月であれば「1 ヶ月」は「30 日」になります。暦期間を加算または減算するには、日付に対して行う必要があります。

```js
const dur1 = Temporal.Duration.from({ years: 1 });
const dur2 = Temporal.Duration.from({ months: 1 });

dur1.add(dur2); // RangeError: for calendar duration arithmetic, use date arithmetic relative to a starting point

const startingPoint = Temporal.PlainDate.from("2021-01-01"); // ISO 8601 暦
startingPoint.add(dur1).add(dur2).since(startingPoint); // "P396D"
```

それ以外の演算、`round()`、`total()`、`compare()` では、必要な暦および基準時情報を提供するために `relativeTo` オプションを取ります。このオプションには、{{jsxref("Temporal.PlainDate")}}、{{jsxref("Temporal.PlainDateTime")}}、{{jsxref("Temporal.ZonedDateTime")}}、{{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}（`timeZone` オプションが指定されたか、文字列にタイムゾーン指定が含まれている場合）または {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} を使用して変換可能なオブジェクトや文字列を指定できます。

なお、`days` から `hours` への換算も、夏時間などのオフセットの変更により 1 日の長さが変わることがあるため、技術的には曖昧である点にご注意ください。こうした変更を考慮するには、タイムゾーンを指定した `relativeTo` を提供する必要があります。提供がない場合は、1 日が 24 時間であると仮定されます。

### 期間のバランス

同じ期間を表す方法はたくさんあります。例えば、「1 分 30 秒」と「90 秒」は同じ意味です。しかし、状況によって、どちらの表現がより適切であるかは異なります。そのため、一般的に `Duration` オブジェクトは入力値を可能な限り保持し、書式化した際に期待どおりに表示されるようにしています。

期間の各成分には最適な範囲があります。時間は 0 から 23、分は 0 から 59 といった具合にです。各成分が最適な範囲を超えた場合、その超過分は一つ上の単位に「繰り上げ」られることがあります。繰り上げを行うには、「Y には X がいくつ含まれるか」という問いに答える必要がありますが、これは[暦単位](#暦単位)にとっては複雑な問題であるため、この場合は暦が不可欠となります。また、デフォルトで `days` は直接 `months` に繰り上げられますが、`weeks` 単位への繰り上げは明示的にリクエストされた場合のみ行われる点にも注意してください。可能な限り繰り上げを行うと、最終的にすべての要素が最適な範囲内に収まる状態を「バランスの取れた」期間と呼びます。バランスの取れていない期間は通常、「頭でっかち」な形式をとります。これは、最大の単位が偏っている状態を指します（例：「27 時間 30 分」）。「23 時間 270 分」のような他の形式は、めったに見られません。

{{jsxref("Temporal/Duration/round", "round()")}} メソッドは、`largestUnit` オプションで指定された上限まで、常に期間を「頭でっかち」な形に調整します。`largestUnit` オプションを十分に大きく設定することで、期間のバランスを完全にとることが可能です。同様に、{{jsxref("Temporal/Duration/add", "add()")}} および {{jsxref("Temporal/Duration/subtract", "subtract()")}} メソッドは、結果の期間を、入力された期間のうち最も大きい単位に合わせて調整します。

ISO 8601 の期間形式では、1 秒未満の成分を単一の小数点数で表現するため、デフォルトの書式化を使用してシリアライズする際、バランスの取れていない1秒未満の成分を維持することはできません。例えば、「1000 ミリ秒」は `"PT1S"` としてシリアライズされ、その後「1 秒」としてデシリアライズされます。秒未満の要素の絶対値を保持する必要がある場合は、代わりに手動で JSON オブジェクトとしてシリアライズする必要があります（デフォルトで、{{jsxref("Temporal/Duration/toJSON", "toJSON()")}} メソッドが期間を ISO 8601 書式でシリアライズするためです）。

### 期間の符号

期間とは 2 つの時点の差であるため、正、負、ゼロのいずれかになります。例えば、イベントの時間を相対時間として表示する場合、負の期間は過去のイベントを表し、正の期間は未来のイベントを表すことがあります。時間コンポーネントを組み合わせて表現する場合、符号はそれぞれの要素内に格納されます。つまり、負の期間ではすべての要素が負（またはゼロ）になり、正の期間ではすべての要素が正（またはゼロ）になります。符号が混在する要素で期間を構築することは不正であり、コンストラクターや {{jsxref("Temporal/Duration/with", "with()")}} メソッドでは拒否されます。`add()` および `subtract()` メソッドでは、符号の混在を避けるために結果の期間を調整します。

## コンストラクター

- {{jsxref("Temporal/Duration/Duration", "Temporal.Duration()")}}
  - : 基盤となるデータを直接指定して、新しい `Temporal.Duration` オブジェクトを作成します。

## 静的メソッド

- {{jsxref("Temporal/Duration/compare", "Temporal.Duration.compare()")}}
  - : 最初の期間と 2 つ目の期間を比較し、前者が後者より短い、同じ、または長いことを示す数値（-1、0、1 のいずれか）を返します。
- {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}
  - : 別の `Temporal.Duration` オブジェクト、期間プロパティを持つオブジェクト、または ISO 8601 形式の文字列から、新しい `Temporal.Duration` オブジェクトを作成します。

## インスタンスプロパティ

これらのプロパティは `Temporal.Duration.prototype` に定義されており、すべての `Temporal.Duration` インスタンスで共有されています。

- {{jsxref("Temporal/Duration/blank", "Temporal.Duration.prototype.blank")}}
  - : この再生時間が無期間を表す場合は `true`、それ以外の場合は `false` となる論理値を返します。これは `duration.sign === 0` と同等です。
- {{jsxref("Object/constructor", "Temporal.Duration.prototype.constructor")}}
  - : このインスタンスオブジェクトを作成したコンストラクター関数です。`Temporal.Duration` のインスタンスの場合、初期値は {{jsxref("Temporal/Duration/Duration", "Temporal.Duration()")}} コンストラクターとなります。
- {{jsxref("Temporal/Duration/days", "Temporal.Duration.prototype.days")}}
  - : この期間の日数を表す数値を返します。
- {{jsxref("Temporal/Duration/hours", "Temporal.Duration.prototype.hours")}}
  - : この期間の時間数を表す数値を返します。
- {{jsxref("Temporal/Duration/microseconds", "Temporal.Duration.prototype.microseconds")}}
  - : この期間のマイクロ秒数を表す数値を返します。
- {{jsxref("Temporal/Duration/milliseconds", "Temporal.Duration.prototype.milliseconds")}}
  - : この期間のミリ秒数を表す数値を返します。
- {{jsxref("Temporal/Duration/minutes", "Temporal.Duration.prototype.minutes")}}
  - : この期間の分を表す数値を返します。
- {{jsxref("Temporal/Duration/months", "Temporal.Duration.prototype.months")}}
  - : この期間の月数を表す数値を返します。
- {{jsxref("Temporal/Duration/nanoseconds", "Temporal.Duration.prototype.nanoseconds")}}
  - : この期間のナノ秒数を表す数値を返します。
- {{jsxref("Temporal/Duration/seconds", "Temporal.Duration.prototype.seconds")}}
  - : この期間の秒数を表す数値を返します。
- {{jsxref("Temporal/Duration/sign", "Temporal.Duration.prototype.sign")}}
  - : この期間が正の値の場合は `1`、負の値の場合は `-1`、ゼロの場合は `0` を返します。
- {{jsxref("Temporal/Duration/weeks", "Temporal.Duration.prototype.weeks")}}
  - : この期間の週数を表す数値を返します。
- {{jsxref("Temporal/Duration/years", "Temporal.Duration.prototype.years")}}
  - : この期間の年数を表す数値を返します。
- `Temporal.Duration.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値は文字列 `"Temporal.Duration"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用されます。

## インスタンスメソッド

- {{jsxref("Temporal/Duration/abs", "Temporal.Duration.prototype.abs()")}}
  - : この期間の絶対値を格納した新しい `Temporal.Duration` オブジェクトを返します（すべてのフィールドの絶対値は変わりませんが、符号が正の値になります）。
- {{jsxref("Temporal/Duration/add", "Temporal.Duration.prototype.add()")}}
  - : 新しい `Temporal.Duration` オブジェクトを作成し、この期間と（{{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} で変換可能な形式で）指定された期間の合計を設定して返します。結果は[バランスの取れた](#期間のバランス)状態になります。
- {{jsxref("Temporal/Duration/negated", "Temporal.Duration.prototype.negated()")}}
  - : 新しい `Temporal.Duration` オブジェクトを作成し、この期間の符号を反転させた値を設定して返します（すべてのフィールドの絶対値は変わりませんが、符号が反転します）。
- {{jsxref("Temporal/Duration/round", "Temporal.Duration.prototype.round()")}}
  - : 新しい `Temporal.Duration` オブジェクトを作成し、指定された最小単位に丸め、指定された最大単位に合わせて[均衡化](#期間のバランス)して返します。
- {{jsxref("Temporal/Duration/subtract", "Temporal.Duration.prototype.subtract()")}}
  - : 新しい `Temporal.Duration` オブジェクトを作成し、この期間と（{{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} で変換可能な形式で）指定された期間との差分を設定して返します。これは、それ以外にもある期間の[負の値](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated)を[追加](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/add)することと同等です。
- {{jsxref("Temporal/Duration/toJSON", "Temporal.Duration.prototype.toJSON()")}}
  - : この期間を表す文字列を、{{jsxref("Temporal/Duration/toString", "toString()")}} を呼び出した場合と同じ [ISO 8601 形式](#iso_8601_期間形式)で返します。{{jsxref("JSON.stringify()")}} によって暗黙的に呼び出されることを意図しています。
- {{jsxref("Temporal/Duration/toLocaleString", "Temporal.Duration.prototype.toLocaleString()")}}
  - : この期間を、言語に応じた形式で表した文字列を返します。[`Intl.DurationFormat` API](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat) に対応している実装では、このメソッドは `Intl.DurationFormat` に委譲します。
- {{jsxref("Temporal/Duration/toString", "Temporal.Duration.prototype.toString()")}}
  - : この期間を表す文字列を、[ISO 8601 形式](#iso_8601_期間形式)で返します。
- {{jsxref("Temporal/Duration/total", "Temporal.Duration.prototype.total()")}}
  - : 指定された単位での合計時間を表す数値を返します。
- {{jsxref("Temporal/Duration/valueOf", "Temporal.Duration.prototype.valueOf()")}}
  - : {{jsxref("TypeError")}} が発生します。これにより、算術演算や比較演算で使用される際、`Temporal.Duration` のインスタンスが[プリミティブ型へ暗黙的に変換される](/ja/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion)ことが防止されます。
- {{jsxref("Temporal/Duration/with", "Temporal.Duration.prototype.with()")}}
  - : 一部のフィールドが新しい値に置き換えられた、この期間を表す新しい `Temporal.Duration` オブジェクトを返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Temporal")}}
