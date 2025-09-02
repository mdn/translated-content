---
title: Date
slug: Web/JavaScript/Reference/Global_Objects/Date
l10n:
  sourceCommit: 4a77365ec768047609ef48da746f5954e291430d
---

{{JSRef}}

JavaScript の **`Date`** オブジェクトは、単一の瞬間の時刻をプラットフォームに依存しない形式で表します。`Date` オブジェクトは、1970 年 1 月 1 日午前 0 時 (UTC)（元期）からのミリ秒を表す整数値をカプセル化しています。

> [!NOTE]
> {{jsxref("Temporal")}} API の導入に伴い、Date オブジェクトは古い機能と見なされます。新しいコードには `Temporal` を使用することを検討し、可能であれば既存のコードも移行してください（[ブラウザーの互換性](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#browser_compatibility)を確認してください。使用ガイドは近日中に作成予定です！）。

## 解説

### 元期、タイムスタンプ、無効な日時

JavaScript の日付は基本的に、[元期](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-time-values-and-time-range)として定義される UTC の 1970 年 1 月 1 日午前 0 時（[UNIX 元期](/ja/docs/Glossary/Unix_time)と同じ）から経過したミリ秒単位の時刻を指定します。このタイムスタンプはタイムゾーンに依存せず、歴史の一瞬を固有のものとして定義します。

> [!NOTE]
> Date オブジェクトの中核となる時刻の値は UTC ですが、日時やその部品を取得する基本的なメソッドは、すべてローカル（つまりホストシステム）のタイムゾーンとオフセットで動作します。

`Date` オブジェクトで表現できるタイムスタンプの最大値は、安全な整数の最大値（{{jsxref("Number.MAX_SAFE_INTEGER")}}、9,007,199,254,740,991）よりもわずかに小さくなります。`Date` オブジェクトは、元期に対して最大 ±8,640,000,000,000,000 ミリ秒、つまり±100,000,000（1 億）日を表します。これは紀元前 271821 年 4 月 20 日から西暦 275760 年 9 月 13 日までの範囲です。この範囲外の時刻を表そうとすると、`Date` オブジェクトは [`NaN`](/ja/docs/Web/JavaScript/Reference/Global_Objects/NaN) のタイムスタンプ値を持ち、"Invalid Date" （無効な日時）となります。

```js
console.log(new Date(8.64e15).toString()); // "Sat Sep 13 275760 00:00:00 GMT+0000 (Coordinated Universal Time)"
console.log(new Date(8.64e15 + 1).toString()); // "Invalid Date"
```

`Date` に格納されるタイムスタンプを操作するさまざまなメソッドがあります。

- タイムスタンプ値を直接操作するには、{{jsxref("Date/getTime", "getTime()")}} および {{jsxref("Date/setTime", "setTime()")}} メソッドを使用します。
- {{jsxref("Date/valueOf", "valueOf()")}} および [`[Symbol.toPrimitive]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) メソッド（「数値」を渡したとき）は、[数値変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値変換)において自動的に呼び出されますが、タイムスタンプを返すので、`Date` オブジェクトは数値のコンテキストで使用すると、タイムスタンプのように振る舞います。
- 静的メソッド（{{jsxref("Date.now()")}}、{{jsxref("Date.parse()")}}、{{jsxref("Date.UTC()")}}）はすべて、`Date` オブジェクトではなくタイムスタンプを返します。
- {{jsxref("Date/Date", "Date()")}} コンストラクターは、タイムスタンプのみを引数として呼び出すことができます。

### 日時の成分とタイムゾーン

日付は内部的には単一の数値であるタイムスタンプで表されます。タイムスタンプを操作する際には、タイムスタンプを構造化された日時表現として解釈する必要があります。タイムスタンプを解釈する方法は常に 2 つあります。ローカル時刻として解釈する方法と、世界標準時を定義する協定世界時 (UTC) として解釈する方法です。ローカルタイムゾーンは `Date` オブジェクトには格納されず、ホスト環境（ユーザー端末）によって決定されます。

> [!NOTE]
> UTC を[グリニッジ標準時](https://ja.wikipedia.org/wiki/グリニッジ標準時) (GMT) と混同してはいけません。両者は常に同じではありません。これはリンク先のウィキペディアのページで詳しく説明されています。

例えば、タイムスタンプ 0 は歴史上の一意の瞬間を表しますが、2 つの方法で解釈することができます。

- UTC 時刻としては、1970 年 1 月 1 日午前 0 時 (UTC)。
- 日本標準時 (UTC+9) としては、1970 年 1 月 1 日 9 時 00 分 00 秒です。

{{jsxref("Date/getTimezoneOffset", "getTimezoneOffset()")}} メソッドは、UTC とローカル時刻の差を分単位で返します。タイムゾーンのオフセットは、現在のタイムゾーンに依存するだけでなく、サマータイムや過去には変更があったため、`Date` オブジェクトが表す時刻にも依存することに注意しましょう。要するに、タイムゾーンオフセットは `Date` オブジェクトが表す時刻とホスト環境の場所における UTC 時刻からのオフセットです。

`Date` のメソッドには 2 種類あり、1 つはタイムスタンプをローカル時刻として解釈して様々な日付部品を取得したり設定したりするもの、もう 1 つは UTC を使用するものです。

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2">成分</th>
      <th colspan="2">ローカル</th>
      <th colspan="2">UTC</th>
    </tr>
    <tr>
      <th>取得</th>
      <th>設定</th>
      <th>取得</th>
      <th>設定</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>年</td>
      <td>{{jsxref("Date/getFullYear", "getFullYear()")}}</td>
      <td>{{jsxref("Date/setFullYear", "setFullYear()")}}</td>
      <td>{{jsxref("Date/getUTCFullYear", "getUTCFullYear()")}}</td>
      <td>{{jsxref("Date/setUTCFullYear", "setUTCFullYear()")}}</td>
    </tr>
    <tr>
      <td>月</td>
      <td>{{jsxref("Date/getMonth", "getMonth()")}}</td>
      <td>{{jsxref("Date/setMonth", "setMonth()")}}</td>
      <td>{{jsxref("Date/getUTCMonth", "getUTCMonth()")}}</td>
      <td>{{jsxref("Date/setUTCMonth", "setUTCMonth()")}}</td>
    </tr>
    <tr>
      <td>日</td>
      <td>{{jsxref("Date/getDate", "getDate()")}}</td>
      <td>{{jsxref("Date/setDate", "setDate()")}}</td>
      <td>{{jsxref("Date/getUTCDate", "getUTCDate()")}}</td>
      <td>{{jsxref("Date/setUTCDate", "setUTCDate()")}}</td>
    </tr>
    <tr>
      <td>時</td>
      <td>{{jsxref("Date/getHours", "getHours()")}}</td>
      <td>{{jsxref("Date/setHours", "setHours()")}}</td>
      <td>{{jsxref("Date/getUTCHours", "getUTCHours()")}}</td>
      <td>{{jsxref("Date/setUTCHours", "setUTCHours()")}}</td>
    </tr>
    <tr>
      <td>分</td>
      <td>{{jsxref("Date/getMinutes", "getMinutes()")}}</td>
      <td>{{jsxref("Date/setMinutes", "setMinutes()")}}</td>
      <td>{{jsxref("Date/getUTCMinutes", "getUTCMinutes()")}}</td>
      <td>{{jsxref("Date/setUTCMinutes", "setUTCMinutes()")}}</td>
    </tr>
    <tr>
      <td>秒</td>
      <td>{{jsxref("Date/getSeconds", "getSeconds()")}}</td>
      <td>{{jsxref("Date/setSeconds", "setSeconds()")}}</td>
      <td>{{jsxref("Date/getUTCSeconds", "getUTCSeconds()")}}</td>
      <td>{{jsxref("Date/setUTCSeconds", "setUTCSeconds()")}}</td>
    </tr>
    <tr>
      <td>ミリ秒</td>
      <td>{{jsxref("Date/getMilliseconds", "getMilliseconds()")}}</td>
      <td>{{jsxref("Date/setMilliseconds", "setMilliseconds()")}}</td>
      <td>{{jsxref("Date/getUTCMilliseconds", "getUTCMilliseconds()")}}</td>
      <td>{{jsxref("Date/setUTCMilliseconds", "setUTCMilliseconds()")}}</td>
    </tr>
    <tr>
      <td>曜日</td>
      <td>{{jsxref("Date/getDay", "getDay()")}}</td>
      <td>なし</td>
      <td>{{jsxref("Date/getUTCDay", "getUTCDay()")}}</td>
      <td>なし</td>
    </tr>
  </tbody>
</table>

{{jsxref("Date/Date", "Date()")}} コンストラクターは 2 つ以上の引数を指定して呼び出すことができ、その場合はそれぞれローカル時刻年、月、日、時、分、秒、ミリ秒として解釈されます。{{jsxref("Date.UTC()")}} も同様に動作しますが、こちらは成分を UTC 時刻として解釈し、年を表す単一の引数も受け入れます。

> [!NOTE]
> `Date()` コンストラクターや `Date.UTC()`、そして非推奨の {{jsxref("Date/getYear", "getYear()")}}/{{jsxref("Date/setYear", "setYear()")}} メソッドなど、一部のメソッドは 2 桁の年を 1900 年代の年として解釈します。例えば、`new Date(99, 5, 24)` は 1999 年 6 月 24 日と解釈され、99 年 6 月 24 日とは解釈されません。 詳細は [2 桁の年の解釈](#2_桁の年の解釈) を参照ください。

ある部分が指定範囲を超えたり、下回ったりした場合、通常、その部分は上位の部分に「繰り上げ」されるか、「繰り下げ」されます。例えば、月を 12 に設定すると（月はゼロ基点なので、12 月は 11）、翌年の 1 月になります。日を 0 に設定すると、前月の最終日になります。これは[日時文字列形式](#日時文字列形式)で指定した日付にも適用されます。

### 日時文字列形式

文字列として日付を書式化する方法はたくさんあります。JavaScript 仕様書では、普遍的に対応している書式を 1 つだけ指定しています。ISO 8601 カレンダー日付拡張書式を簡略化した[日付時刻文字列書式](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date-time-string-format)です。書式は以下の通りです。

```plain
YYYY-MM-DDTHH:mm:ss.sssZ
```

- `YYYY` は年で、4 つの数字（`0000` から `9999`）、または `+` または `-` に続く 6 桁の数字です。拡張された年には符号が必要です。`-000000` は明示的に有効な年として不許可となっています。
- `MM` は月で、2 桁（`01` から `12`）です。既定では `01` です。
- `DD` は月の日です。2 桁の数字で指定します（`01` から `31` まで）。既定では `01` です。
- `T` はリテラル文字で、文字列の時刻部分の始まりを示します。`T` は時刻部分を指定する場合は必須です。
- `HH` は 2 桁の数字で時を表します（`00` から `23`）。特殊なケースとして、`24:00:00` を指定することができ、これは翌日の始まりの午前 0 時と解釈されます。既定では `00` です。
- `mm` は分で、2 桁で指定します（`00` から `59` まで）。既定では `00` です。
- `ss` は秒で、2 桁（`00` から `59`）です。既定では `00` です。
- `sss`はミリ秒で 3 桁（`000` から `999`）。既定では `000` 。
- `Z` はタイムゾーンオフセットで、リテラル文字の `Z` (UTC を示す) か、`+` または `-` に続いて `HH:mm` (UTC からの時分のオフセット) を指定します。

さまざまな成分を省略できますので、以下のものはすべて有効です。

- 日付のみの形式: `YYYY`, `YYYY-MM`, `YYYY-MM-DD`
- 日時形式: 上記の日付のみの形式に続いて `T`、それに `HH:mm`, `HH:mm:ss`, `HH:mm:ss.sss` などが続きます。どの組み合わせでも、タイムゾーンオフセットを続けることができます。

例えば、`"2011-10-10"`（日付のみの形式）、`"2011-10-10T14:48:00"`（日時形式）、`"2011-10-10T14:48:00.000+09:00"`（日時形式にミリ秒とタイムゾーンが付いたもの）はすべて有効な日時文字列です。

タイムゾーンオフセットがない場合、**日付のみの形式は UTC 時刻として解釈され、日時形式はローカル時刻として解釈されます。** UTC 時刻として解釈するのは、過去には ISO 8601 に適合しない仕様があったためですが、ウェブの互換性のために変更できませんでした。[Broken Parser - A Web Reality Issue](https://maggiepint.com/2017/04/11/fixing-javascript-date-web-compatibility-and-reality/) を参照してください。

{{jsxref("Date.parse()")}} および {{jsxref("Date/Date", "Date()")}} コンストラクターは、どちらも日時文字列形式の文字列を入力として受け入れます。さらに、入力がこの形式に一致しない場合、実装が他の日付形式にも対応することが許されています。

{{jsxref("Date/toISOString", "toISOString()")}} メソッドは、タイムゾーンのオフセットを常に `Z` (UTC) に設定した状態で、日付の文字列表現を日時文字列形式で返します。

> [!NOTE]
> 他の書式への対応は保証されていませんので、互換性を最大にするために、入力は上記の日時文字列の書式に準拠するようにしてください。しかし、{{rfc(2822)}} 形式のように、主要な実装ですべて対応している書式もあります。常に[ブラウザー横断テスト](/ja/docs/Learn_web_development/Extensions/Testing)を行い、対象とするブラウザーすべてで確実にコードが動作するようにしてください。様々な書式化に対応するには、ライブラリーが役立ちます。

標準外の文字列は、タイムゾーンを含め、実装が望む方法で構文解析できます。ほとんどの実装では既定でローカルのタイムゾーンを使用します。実装は、境界外の日付部品に対して不正な日付を返すことを要求されませんが、通常はそうします。文字列は(上で定義されていません)境界内の日付要素を持つことができますが、実際には日付を表していません(例えば、"2月30日")。この場合、実装上の不整合が発生します。[`Date.parse()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#例) のページでは、このような非標準の例について詳しく説明しています。

### 日付を書式化するその他の方法

- {{jsxref("Date/toISOString", "toISOString()")}} は、`1970-01-01T00:00:00.000Z`（上で紹介した日付時刻の文字列形式で、[ISO 8601](https://ja.wikipedia.org/wiki/ISO_8601) を簡略化したもの）の形式の文字列を返します。{{jsxref("Date/toJSON", "toJSON()")}} は `toISOString()` を呼び出し、その結果を返します。
- {{jsxref("Date/toString", "toString()")}} は `Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)` の形式の文字列を返すのに対し、{{jsxref("Date/toDateString", "toDateString()")}} および {{jsxref("Date/toTimeString", "toTimeString()")}} はそれぞれ日付と時刻の部分の文字列を返します。 [`[Symbol.toPrimitive]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) は（`"string"` または `"default"` を渡したとき） `toString()` を呼び出し、その結果を返します。
- {{jsxref("Date/toUTCString", "toUTCString()")}} は `Thu, 01 Jan 1970 00:00:00 GMT` の形（{{rfc(7231)}} で標準化）の文字列を返します。
- {{jsxref("Date/toLocaleDateString", "toLocaleDateString()")}}、{{jsxref("Date/toLocaleTimeString", "toLocaleTimeString()")}}、{{jsxref("Date/toLocaleString", "toLocaleString()")}} はロケール固有の日付と時刻の書式を使用します。これはふつう [`Intl`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl) API で提供されるものです。

例については[`toString` メソッドの返値の形式](#tostring_メソッドの返値の形式)の節を参照してください。

## コンストラクター

- {{jsxref("Date/Date", "Date()")}}
  - : コンストラクターとして呼び出された場合、新しい `Date` オブジェクトを返します。関数として呼び出された場合、現在の日付と時刻の文字列表現を返します。

## 静的メソッド

- {{jsxref("Date.now()")}}
  - : 現在の時刻に対応する数値、すなわち UTC の 1970 年 1 月 1 日 00:00:00 からのミリ秒数を表す数値を返します。うるう秒は無視します。
- {{jsxref("Date.parse()")}}
  - : 日付を表す文字列を解釈して、UTC の 1970 年 1 月 1 日 00:00:00 からのミリ秒数を表す数値を返します。うるう秒は無視します。
- {{jsxref("Date.UTC()")}}
  - : 最も長い形式のコンストラクターと同じ引数（すなわち 2 〜 7）を受け取り、 1970 年 1 月 1 日 00:00:00 （UTC）からのミリ秒数を返します。うるう秒は無視します。

## インスタンスプロパティ

これらのプロパティは `Date.prototype` で定義されており、すべての `Date` インスタンスで共有されます。

- {{jsxref("Object/constructor", "Date.prototype.constructor")}}
  - : このインスタンスオブジェクトを作成したコンストラクター関数。`Date` インスタンスの場合、初期値は {{jsxref("Date/Date", "Date")}} コンストラクターです。

## インスタンスメソッド

- {{jsxref("Date.prototype.getDate()")}}
  - : 地方時に基づき、指定された日時の「日」 (`1` ～ `31`) を返します。
- {{jsxref("Date.prototype.getDay()")}}
  - : 地方時に基づき、指定された日時の「曜日」 (`0` ～ `6`) を返します。
- {{jsxref("Date.prototype.getFullYear()")}}
  - : 地方時に基づき、指定された日時の「年」 (4 桁の年であれば 4 桁) を返します。
- {{jsxref("Date.prototype.getHours()")}}
  - : 地方時に基づき、指定された日時の「時」 (`0` ～ `23`) を返します。
- {{jsxref("Date.prototype.getMilliseconds()")}}
  - : 地方時に基づき、指定された日時の「ミリ秒」 (`0` ～ `999`) を返します。
- {{jsxref("Date.prototype.getMinutes()")}}
  - : 地方時に基づき、指定された日時の「分」 (`0` ～ `59`) を返します。
- {{jsxref("Date.prototype.getMonth()")}}
  - : 地方時に基づき、指定された日時の「月」 (`0` ～ `11`) を返します。
- {{jsxref("Date.prototype.getSeconds()")}}
  - : 地方時に基づき、指定された日時の「秒」 (`0` ～ `59`) を返します。
- {{jsxref("Date.prototype.getTime()")}}
  - : 指定された日時を協定世界時 (UTC) の 1970 年 1 月 1 日 00:00:00 からの経過ミリ秒単位の数値で返します。 (それ以前の時刻では負の数を返します。)
- {{jsxref("Date.prototype.getTimezoneOffset()")}}
  - : 現地の時間帯のオフセットを分で返します。
- {{jsxref("Date.prototype.getUTCDate()")}}
  - : 協定世界時に基づき、指定された日時の「日」 (`1` ～ `31`) を返します。
- {{jsxref("Date.prototype.getUTCDay()")}}
  - : 協定世界時に基づき、指定された日時の「曜日」 (`0` ～ `6`) を返します。
- {{jsxref("Date.prototype.getUTCFullYear()")}}
  - : 協定世界時に基づき、指定された日時の「年」 (4 桁の年であれば 4 桁) を返します。
- {{jsxref("Date.prototype.getUTCHours()")}}
  - : 協定世界時に基づき、指定された日時の「時」 (`0` ～ `23`) を返します。
- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
  - : 協定世界時に基づき、指定された日時の「ミリ秒」 (`0` ～ `999`) を返します。
- {{jsxref("Date.prototype.getUTCMinutes()")}}
  - : 協定世界時に基づき、指定された日時の「分」 (`0` ～ `59`) を返します。
- {{jsxref("Date.prototype.getUTCMonth()")}}
  - : 協定世界時に基づき、指定された日時の「月」 (`0` ～ `11`) を返します。
- {{jsxref("Date.prototype.getUTCSeconds()")}}
  - : 協定世界時に基づき、指定された日時の「秒」 (`0` ～ `59`) を返します。
- {{jsxref("Date.prototype.getYear()")}} {{Deprecated_Inline}}
  - : 地方時に基づき、指定された日時の「年」 (ふつうは 2 ～ 3 桁) を返します。代わりに {{jsxref("Date/getFullYear", "getFullYear()")}} を使用してください。
- {{jsxref("Date.prototype.setDate()")}}
  - : 地方時に基づき、指定された日時の「日」を設定します。
- {{jsxref("Date.prototype.setFullYear()")}}
  - : 地方時に基づき、指定された日時の「年」を完全な形 (例えば、 4 桁の年であれば 4 桁) で設定します。
- {{jsxref("Date.prototype.setHours()")}}
  - : 地方時に基づき、指定された日時の「時」を設定します。
- {{jsxref("Date.prototype.setMilliseconds()")}}
  - : 地方時に基づき、指定された日時の「ミリ秒」を設定します。
- {{jsxref("Date.prototype.setMinutes()")}}
  - : 地方時に基づき、指定された日時の「分」を設定します。
- {{jsxref("Date.prototype.setMonth()")}}
  - : 地方時に基づき、指定された日時の「月」を設定します。
- {{jsxref("Date.prototype.setSeconds()")}}
  - : 地方時に基づき、指定された日時の「秒」を設定します。
- {{jsxref("Date.prototype.setTime()")}}
  - : `Date` オブジェクトを協定世界時 (UTC) の 1970 年 1 月 1 日 00:00:00 からのミリ秒単位の数で表された時刻に設定します。
- {{jsxref("Date.prototype.setUTCDate()")}}
  - : 協定世界時に基づき、指定された日時の「日」を設定します。
- {{jsxref("Date.prototype.setUTCFullYear()")}}
  - : 協定世界時に基づき、指定された日時の「年」を完全な形で設定します。
- {{jsxref("Date.prototype.setUTCHours()")}}
  - : 協定世界時に基づき、指定された日時の「時」を設定します。
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
  - : 協定世界時に基づき、指定された日時の「ミリ秒」を設定します。
- {{jsxref("Date.prototype.setUTCMinutes()")}}
  - : 協定世界時に基づき、指定された日時の「分」を設定します。
- {{jsxref("Date.prototype.setUTCMonth()")}}
  - : 協定世界時に基づき、指定された日時の「月」を設定します。
- {{jsxref("Date.prototype.setUTCSeconds()")}}
  - : 協定世界時に基づき、指定された日時の「秒」を設定します。
- {{jsxref("Date.prototype.setYear()")}} {{Deprecated_Inline}}
  - : 協定地方時に基づき、指定された日時の「年」 (ふつうは 2 ～ 3 桁) を設定します。代わりに {{jsxref("Date/setFullYear", "setFullYear()")}} を使用してください。
- {{jsxref("Date.prototype.toDateString()")}}
  - : `Date` の「日付」部を、 'Thu Apr 12 2018' のように人間が読みやすい形式の文字列にして返します。
- {{jsxref("Date.prototype.toISOString()")}}
  - : 日付を ISO 8601 Extended Format に準じた文字列に変換します。
- {{jsxref("Date.prototype.toJSON()")}}
  - : `Date` を表す文字列を {{jsxref("Date/toISOString", "toISOString()")}} を使用して返します。{{jsxref("JSON.stringify()")}} から暗黙に呼び出されるものです。
- {{jsxref("Date.prototype.toLocaleDateString()")}}
  - : この日時の日付部分を、システム設定に基づいて地域性を考慮した表現による文字列にして返します。
- {{jsxref("Date.prototype.toLocaleString()")}}
  - : 日付を地域の日付書式に従った文字列に変換して返します。{{jsxref("Object.prototype.toLocaleString()")}} メソッドを上書きします。
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
  - : この日時の時刻部分を、システム設定に基づいて地域性を考慮した表現による文字列にして返します。
- {{jsxref("Date.prototype.toString()")}}
  - : 指定された `Date` オブジェクトを表す文字列を返します。 {{jsxref("Object.prototype.toString()")}} メソッドを上書きします。
- {{jsxref("Date.prototype.toTemporalInstant()")}} {{experimental_inline}}
  - : この日時の[タイムスタンプ](#元期、タイムスタンプ、無効な日時)と同じ {{jsxref("Temporal/Instant/epochMilliseconds", "epochMilliseconds")}} を持つ新しい {{jsxref("Temporal.Instant")}} オブジェクトを返します。
- {{jsxref("Date.prototype.toTimeString()")}}
  - : `Date` の「時刻」部を人間が読みやすい形式の文字列にして返します。
- {{jsxref("Date.prototype.toUTCString()")}}
  - : 日時を UTC タイムゾーンを使用する文字列に変換します。
- {{jsxref("Date.prototype.valueOf()")}}
  - : `Date` オブジェクトのプリミティブ値を返します。{{jsxref("Object.prototype.valueOf()")}} メソッドを上書きします。
- [`Date.prototype[Symbol.toPrimitive]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive)
  - : `Date` オブジェクトをプリミティブ値に変換します。

## 例

### Date オブジェクトを生成するいくつかの方法

以下の例で、 JavaScript の日時を生成するいくつかの方法を示します。

> [!NOTE]
> 文字列から日付を作成するには、動作に一貫性がありません。異なる書式を使用する際の注意点については[日時文字列形式](#日時文字列形式)を参照してください。

```js
const today = new Date();
const birthday = new Date("December 17, 1995 03:24:00"); // 避けてください。すべてのランタイムで動作するとは限りません。
const birthday2 = new Date("1995-12-17T03:24:00"); // これは標準化されており、動作が信頼できます
const birthday3 = new Date(1995, 11, 17); // 月は 0 起点です
const birthday4 = new Date(1995, 11, 17, 3, 24, 0);
const birthday5 = new Date(628021800000); // 元期からのタイムスタンプ
```

### toString メソッドの返値の形式

```js
const date = new Date("2020-05-12T23:50:21.817Z");
date.toString(); // Wed May 13 2020 08:50:21 GMT+0900 (日本標準時)
date.toDateString(); // Wed May 13 2020
date.toTimeString(); // 08:50:21 GMT+0900 (日本標準時)
date[Symbol.toPrimitive]("string"); // Wed May 13 2020 08:50:21 GMT+0900 (日本標準時)

date.toISOString(); // 2020-05-12T23:50:21.817Z
date.toJSON(); // 2020-05-12T23:50:21.817Z

date.toUTCString(); // Tue, 12 May 2020 23:50:21 GMT

date.toLocaleString(); // 2020/5/13 8:50:21
date.toLocaleDateString(); // 2020/5/13
date.toLocaleTimeString(); // 8:50:21
```

### 年月日や時刻の取得

```js
const date = new Date("2000-01-17T16:45:30");
const [month, day, year] = [
  date.getMonth(),
  date.getDate(),
  date.getFullYear(),
];
// [0, 17, 2000] （月は 0 基点であるため）
const [hour, minutes, seconds] = [
  date.getHours(),
  date.getMinutes(),
  date.getSeconds(),
];
// [16, 45, 30]
```

### 2 桁の年の解釈

`new Date()` は 2 桁の年の値に対して、古くで望ましくない一貫性のない挙動を示します。具体的には、 `new Date()` の呼び出しに 2 桁の年の値が与えられた場合、その年の値はリテラルの年として扱われず、そのまま使用され、代わりに相対的なオフセットとして解釈されます。ある場合には 1900 年からのオフセットとなりますが、またある場合には 2000 年からのオフセットになります。

```js
let date = new Date(98, 1); // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)
date = new Date(22, 1); // Wed Feb 01 1922 00:00:00 GMT+0000 (GMT)
date = new Date("2/1/22"); // Tue Feb 01 2022 00:00:00 GMT+0000 (GMT)

// 古い方法。常に 2 桁の年の値を 1900 からの相対値として解釈する
date.setYear(98);
date.toString(); // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)
date.setYear(22);
date.toString(); // Wed Feb 01 1922 00:00:00 GMT+0000 (GMT)
```

西暦 0 年から 99 年までの間の年を生成および取得するには、{{jsxref("Date/setFullYear", "setFullYear()")}} メソッドと {{jsxref("Date/getFullYear", "getFullYear()")}} メソッドを使用してください。

```js
// 推奨されるメソッドです。どんな値でも相対オフセットではなく、そのまま
// 年として解釈します。
date.setFullYear(98);
date.getFullYear(); // 98 (not 1998)
date.setFullYear(22);
date.getFullYear(); // 22 (not 1922, not 2022)
```

### 経過時間の計算

以下の例で、2 つの JavaScript の日付の間で経過した時間を計る方法を示します。

日 (夏時間の切り替えによる)、月、年の長さが異なるため、経過時間を時、分、秒以上の単位で表現するには、いくつかの問題に対処する必要がありますので、事前によく調べて使用してください。

```js
// Date オブジェクトを使用
const start = Date.now();

// 時間を計りたいイベントをここに置く
doSomethingForALongTime();
const end = Date.now();
const elapsed = end - start; // ミリ秒単位の経過時間
```

```js
// 組み込みメソッドを使用
const start = new Date();

// 時間を計りたいイベントをここに置く
doSomethingForALongTime();
const end = new Date();
const elapsed = end.getTime() - start.getTime(); // ミリ秒単位の経過時間
```

```js
// 関数をテストして返値を取得する
function printElapsedTime(testFn) {
  const startTime = Date.now();
  const result = testFn();
  const endTime = Date.now();

  console.log(`Elapsed time: ${String(endTime - startTime)} milliseconds`);
  return result;
}

const yourFunctionReturn = printElapsedTime(yourFunction);
```

> [!NOTE]
> {{domxref("Performance API", "ウェブパフォーマンス API", "", "nocode")}} の高精度時刻機能に対応しているブラウザーでは、 {{domxref("Performance.now()")}} で、 {{jsxref("Date.now()")}} よりも高信頼かつ高精度な経過時間の測定が可能です。

### ECMAScript 元期からの経過秒数を取得する

```js
const seconds = Math.floor(Date.now() / 1000);
```

この場合、整数だけを返すことが重要です（単純な除算ではできません）。また、実際に経過した秒数を返すことも重要です（ですから、上の例では {{jsxref("Math.round()")}} ではなく {{jsxref("Math.floor()")}} を使っています）。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date/Date", "Date()")}}
