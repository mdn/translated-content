---
title: Date
slug: Web/JavaScript/Reference/Global_Objects/Date
tags:
  - クラス
  - Date
  - 元期
  - JavaScript
  - Time
  - Unix 元期
  - timeStamp
browser-compat: javascript.builtins.Date
translation_of: Web/JavaScript/Reference/Global_Objects/Date
---
{{JSRef}}

JavaScript の **`Date`** オブジェクトは、単一の瞬間の時刻をプラットフォームに依存しない形式で表します。 `Date` オブジェクトは協定世界時 (UTC) の 1970 年 1 月 1 日からの経過ミリ秒数を表す `Number` の値を含んでいます。

> **Note:** TC39 は [Temporal](https://tc39.es/proposal-temporal/docs/index.html) という、新しい日付/時刻の API を開発しています。これについて詳しくは [Igalia のブログ](https://blogs.igalia.com/compilers/2020/06/23/dates-and-times-in-javascript/)を参照してください。まだ正式利用の準備はできていません。

## 解説

### ECMAScript 元期 とタイムスタンプ

JavaScript の日時は、基本的に協定世界時 (UTC) の 1970 年 1 月 1 日深夜 0 時からの経過ミリ秒数で指定されます。この日付と時刻は、コンピューターに記録される日付と時刻の値の主な基準値である **UNIX 元期** (UTC の 1970 年 1 月 1 日深夜 0 時からの経過秒数) とは異なります。

> **Note:** Date オブジェクトの中心となる時間値は UTC ですが、日付と時刻、またはその一部を取得する基本的なメソッドは、すべて地方時 (ホストシステムなど) のタイムゾーンとオフセットで動作することを覚えておくことが重要です。

`Date` の最大値は、確実な整数の最大値 (`Number.MAX_SAFE_INTEGER`、9,007,199,254,740,991) と同じ値ではないことに注意が必要です。代わりに ECMA-262 では、 UTC の 1970 年 1 月 1 日から前後 ±100,000,000 (1 億) 日 (つまり、紀元前 271821 年 4 月 20 日 - 紀元 275760 年 9 月 13 日) を標準の `Date` オブジェクトで表すことができると定義しています。

### 日時形式とタイムゾーンの変換

様々な形式で日時を取得したり、タイムゾーンの変換を行ったりすることができる方法はたくさんあります。特に便利なのは、世界時標準 (World Time Standard) で定義されている世界標準時である協定世界時 (UTC) で日付と時刻を出力する関数です。 (この時間は歴史的に*グリニッジ標準時*として知られており、 UTC はイギリスのロンドンとその近くのグリニッジを含む子午線に沿って位置しています。) ユーザーの端末は現地時間を提供します。

地方時の日付と時刻の個々の部分を読み書きするメソッド ({{jsxref("Date.getDay", "getDay()")}} や {{jsxref("Date.setHours", "setHours()")}} など) に加えて、 UTC を使用して日付と時刻を読み書きする同等のメソッド ({{jsxref("Date.getUTCDay()", "getUTCDay()")}} や {{jsxref("Date.setUTCHours", "setUTCHours()")}} など) もあります。

## コンストラクター

- {{jsxref("Date/Date", "Date()")}}
  - : 関数として呼び出された場合、現在の日付と時刻の文字列表現を返します。 `new Date().toString()` を実行するのと同じです。
- {{jsxref("Date/Date", "new Date()")}}
  - : コンストラクターとして呼び出された場合、新しい `Date` オブジェクトを返します。

## 静的メソッド

- {{jsxref("Date.now()")}}
  - : 現在の時刻に対応する数値、すなわち UTC の 1970 年 1 月 1 日 00:00:00 から経過したミリ秒数を表す数値を返します。うるう秒は無視します。
- {{jsxref("Date.parse()")}}

  - : 日付を表す文字列を解釈して、地方時で 1970 年 1 月 1 日 00:00:00 から経過したミリ秒数を表す数値を返します。うるう秒は無視します。

    > **Note:** ブラウザーごとに動作が異なり一貫性がないため、 `Date.parse` で文字列を解釈しないことを強く推奨します。

- {{jsxref("Date.UTC()")}}
  - : 最も長い形式のコンストラクターと同じ引数（すなわち 2 〜 7）を受け取り、 1970 年 1 月 1 日 00:00:00 （UTC）から経過したミリ秒数を返します。うるう秒は無視します。

## インスタンスメソッド

- {{jsxref("Date.prototype.getDate()")}}
  - : 地方時に基づき、指定された日時の「日」 (`1`–`31`) を返します。
- {{jsxref("Date.prototype.getDay()")}}
  - : 地方時に基づき、指定された日時の「曜日」 (`0`–`6`) を返します。
- {{jsxref("Date.prototype.getFullYear()")}}
  - : 地方時に基づき、指定された日時の「年」 (4 桁の年であれば 4 桁) を返します。
- {{jsxref("Date.prototype.getHours()")}}
  - : 地方時に基づき、指定された日時の「時」 (`0`–`23`) を返します。
- {{jsxref("Date.prototype.getMilliseconds()")}}
  - : 地方時に基づき、指定された日時の「ミリ秒」 (`0`–`999`) を返します。
- {{jsxref("Date.prototype.getMinutes()")}}
  - : 地方時に基づき、指定された日時の「分」 (`0`–`59`) を返します。
- {{jsxref("Date.prototype.getMonth()")}}
  - : 地方時に基づき、指定された日時の「月」 (`0`–`11`) を返します。
- {{jsxref("Date.prototype.getSeconds()")}}
  - : 地方時に基づき、指定された日時の「秒」 (`0`–`59`) を返します。
- {{jsxref("Date.prototype.getTime()")}}
  - : 指定された日時を協定世界時 (UTC) の 1970 年 1 月 1 日 00:00:00 からの経過ミリ秒単位の数値で返します。 (それ以前の時刻では負の数を返します。)
- {{jsxref("Date.prototype.getTimezoneOffset()")}}
  - : 現地の時間帯のオフセットを分で返します。
- {{jsxref("Date.prototype.getUTCDate()")}}
  - : 協定世界時に基づき、指定された日時の「日」 (`1`–`31`) を返します。
- {{jsxref("Date.prototype.getUTCDay()")}}
  - : 協定世界時に基づき、指定された日時の「曜日」 (`0`–`6`) を返します。
- {{jsxref("Date.prototype.getUTCFullYear()")}}
  - : 協定世界時に基づき、指定された日時の「年」 (4 桁の年であれば 4 桁) を返します。
- {{jsxref("Date.prototype.getUTCHours()")}}
  - : 協定世界時に基づき、指定された日時の「時」 (`0`–`23`) を返します。
- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
  - : 協定世界時に基づき、指定された日時の「ミリ秒」 (`0`–`999`) を返します。
- {{jsxref("Date.prototype.getUTCMinutes()")}}
  - : 協定世界時に基づき、指定された日時の「分」 (`0`–`59`) を返します。
- {{jsxref("Date.prototype.getUTCMonth()")}}
  - : 協定世界時に基づき、指定された日時の「月」 (`0`–`11`) を返します。
- {{jsxref("Date.prototype.getUTCSeconds()")}}
  - : 協定世界時に基づき、指定された日時の「秒」 (`0`–`59`) を返します。
- {{jsxref("Date.prototype.getYear()")}}
  - : 地方時に基づき、指定された日時の「年」 (ふつうは 2–3 桁) を返します。代わりに {{jsxref("Date.prototype.getFullYear()", "getFullYear()")}} を使用してください。
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
  - : {{jsxref("Date")}} オブジェクトを協定世界時(UTC) の 1970 年 1 月 1 日 00:00:00 からのミリ秒単位の数で表された時刻に設定します。
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
- {{jsxref("Date.prototype.setYear()")}}
  - : 協定地方時に基づき、指定された日時の「年」 (ふつうは 2–3 桁) を設定します。代わりに {{jsxref("Date.prototype.setFullYear()", "setFullYear()")}} を使用してください。
- {{jsxref("Date.prototype.toDateString()")}}
  - : {{jsxref("Date")}} の「日付」部を、 'Thu Apr 12 2018' のように人間が読みやすい形式の文字列にして返します。
- {{jsxref("Date.prototype.toISOString()")}}
  - : 日付を ISO 8601 Extended Format に準じた文字列に変換します。
- {{jsxref("Date.prototype.toJSON()")}}
  - : {{jsxref("Date.prototype.toISOString()", "toISOString()")}} を使用して {{jsxref("Date")}} を表す文字列を返します。{{jsxref("JSON.stringify()")}} の代わりに使用してください。
- {{jsxref("Date.prototype.toGMTString()")}}
  - : GMT (UTC) タイムゾーンを基準にした {{jsxref("Date")}} を表す文字列を返します。代わりに {{jsxref("Date.prototype.toUTCString()", "toUTCString()")}} を使用してください。
- {{jsxref("Date.prototype.toLocaleDateString()")}}
  - : この日時の日付部分を、システム設定に基づいて地域性を考慮した表現による文字列にして返します。
- {{jsxref("Date.prototype.toLocaleString()")}}
  - : 日付を地域の日付書式に従った文字列に変換して返します。{{jsxref("Object.prototype.toLocaleString()")}} メソッドを上書きします。
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
  - : この日時の時刻部分を、システム設定に基づいて地域性を考慮した表現による文字列にして返します。
- {{jsxref("Date.prototype.toString()")}}
  - : 指定された {{jsxref("Date")}} オブジェクトを表す文字列を返します。 {{jsxref("Object.prototype.toString()")}} メソッドを上書きします。
- {{jsxref("Date.prototype.toTimeString()")}}
  - : {{jsxref("Date")}} の「時刻」部を人間が読みやすい形式の文字列にして返します。
- {{jsxref("Date.prototype.toUTCString()")}}
  - : 日時を UTC タイムゾーンを使用する文字列に変換します。
- {{jsxref("Date.prototype.valueOf()")}}
  - : {{jsxref("Date")}} オブジェクトのプリミティブ値を返します。{{jsxref("Object.prototype.valueOf()")}} メソッドを上書きします。

## 例

### Date オブジェクトを生成するいくつかの方法

以下の例で、 JavaScript の日時を生成するいくつかの方法を示します。

> **Note:** `Date` コンストラクター (または同等の `Date.parse`) で日付文字列を解釈することは、ブラウザーごとに動作が異なり一貫性がないため、避けるように強くすすめます。

```js
let today = new Date()
let birthday = new Date('December 17, 1995 03:24:00')
let birthday = new Date('1995-12-17T03:24:00')
let birthday = new Date(1995, 11, 17)            // 月は 0 起点
let birthday = new Date(1995, 11, 17, 3, 24, 0)
let birthday = new Date(628021800000)            // passing epoch timestamp
```

### 年月日や時刻の取得

```js
const date = new Date();
const [month, day, year]       = [date.getMonth(), date.getDate(), date.getFullYear()];
const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
```

### 2 桁の年の補完

`new Date()` は 2 桁の年の値に対して、古くで望ましくない一貫性のない挙動を示します。具体的には、 `new Date()` の呼び出しに 2 桁の年の値が与えられた場合、その年の値はリテラルの年として扱われず、そのまま使用され、代わりに相対的なオフセットとして解釈されます。 — ある場合には 1900 年からのオフセットとなりますが、またある場合には 2000 年からのオフセットになります。

```js
let date = new Date(98, 1)         // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)
let date = new Date(22, 1)         // Wed Feb 01 1922 00:00:00 GMT+0000 (GMT)
let date = new Date("2/1/22")      // Tue Feb 01 2022 00:00:00 GMT+0000 (GMT)

// 古い方法。常に 2 桁の年の値を 1900 からの相対値として解釈する
date.setYear(98); date.toString()  // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)
date.setYear(22); date.toString()  // Wed Feb 01 1922 00:00:00 GMT+0000 (GMT)
```

西暦 0 年から 99 年までの間の年を生成および取得するには、{{jsxref("Date.prototype.setFullYear()", "setFullYear()")}} メソッドと {{jsxref("Date.prototype.getFullYear()", "getFullYear()")}} メソッドを使用してください。

```js
// 推奨されるメソッドです。どんな値でも相対オフセットではなく、そのまま
// 年として解釈します。
date.setFullYear(98); date.getFullYear()  // 98 (not 1998)
date.setFullYear(22); date.getFullYear()  // 22 (not 1922, not 2022)
```

### 経過時間の計算

以下の例で、2 つの JavaScript の日付の間で経過した時間を計る方法を示します。

日 (夏時間の切り替えによる)、月、年の長さが異なるため、経過時間を時、分、秒以上の単位で表現するには、いくつかの問題に対処する必要がありますので、事前によく調べて使用してください。

```js
// Date オブジェクトを使用
let start = Date.now()

// 時間を計りたいイベントをここに置く
doSomethingForALongTime()
let end = Date.now()
var elapsed = end - start // ミリ秒単位の経過時間
```

```js
// 組み込みメソッドを使用
var start = new Date()

// 時間を計りたいイベントをここに置く
doSomethingForALongTime()
let end = new Date()
let elapsed = end.getTime() - start.getTime() // ミリ秒単位の経過時間
```

```js
// 関数をテストして返値を取得する
function printElapsedTime(fTest) {
  let nStartTime = Date.now(),
      vReturn = fTest(),
      nEndTime = Date.now()

  console.log(`Elapsed time: ${ String(nEndTime - nStartTime) } milliseconds`)
  return vReturn
}

let yourFunctionReturn = printElapsedTime(yourFunction)
```

> **Note:** {{domxref("performance_property", "Web Performance API", "", 1)}} の高精度時刻機能に対応しているブラウザーでは、 {{domxref("Performance.now()")}} で、 {{jsxref("Date.now()")}} よりも高信頼かつ高精度な経過時間の測定が可能です。

### ECMAScript 元期からの経過秒数を取得する

```js
let seconds = Math.floor(Date.now() / 1000)
```

この場合、整数だけを返すことが重要です (単純な除算ではできません)。また、実際に経過した秒数を返すことも重要です (ですから、上の例では {{jsxref("Math.round()")}} ではなく {{jsxref("Math.floor()")}} を使っています)。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date/Date", "Date()")}} コンストラクター
