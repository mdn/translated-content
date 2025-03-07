---
title: 日付と時刻の表現
slug: Web/JavaScript/Guide/Representing_dates_times
l10n:
  sourceCommit: c16a0ee78e5142b3bfcdaf57d595add3ce825f13
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Numbers_and_strings", "Web/JavaScript/Guide/Regular_expressions")}}

## Date オブジェクト

JavaScript には日付のためのデータ型がありません。しかし、アプリケーション内で日付を取り扱うための {{jsxref("Date")}} オブジェクトとそのメソッドが利用できます。 `Date` オブジェクトは日付の設定、取得、操作を行う多数のメソッドを有しています。このオブジェクトはいかなるプロパティも持ちません。

JavaScript は Java と同じように日付を取り扱います。2 つの言語は同様の日付用メソッドを多く持ち、両方の言語とも、Unix タイムスタンプが 1970 年 1 月 1 日 00:00:00 からの秒の数値であるのと同様に、1970 年 1 月 1 日 00:00:00 からのミリ秒の数値で日付を格納しています。
1970 年 1 月 1 日の深夜午前 0 時、UTCは[元期](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)と呼ばれます。

`Date` オブジェクトの設定可能範囲は、元期に対し -100,000,000 日から 100,000,000 日までです。

`Date` オブジェクトは次のように作成します。

```js
const dateObjectName = new Date([parameters]);
```

ここで `dateObjectName` は生成される `Date` オブジェクトの名前です。新しいオブジェクトか、あるいは既存のオブジェクトのプロパティにすることができます。

`new` キーワードなしで `Date` を呼び出すと、単に現在の日付と時間を文字列表現にしたものを返します。

上記構文の `parameters` は以下のいずれかになります。

- 引数なし: 現在の日時を生成します。例えば、`today = new Date();` です。
- 日付を表す文字列で、さまざまな形式があります。対応する正確な形式はエンジンによって異なりますが、 `YYYY-MM-DDTHH:mm:ss.sssZ` という形式はどれもに対応しています。例えば、`xmas95 = new Date("1995-12-25")` です。時、分、秒を省略した場合は、それらの値がゼロに設定されます。
- 年、月、日に対応する整数の集合。例えば、 `xmas95 = new Date(1995, 11, 25)` です。
- 年、月、日、時、分、秒に対応する整数の集合。例えば、 `xmas95 = new Date(1995, 11, 25, 9, 30, 0);` です。

### Date オブジェクトのメソッド

日時を扱う `Date` オブジェクトのメソッドは、下記のカテゴリーに分類されます。

- 「設定」メソッド、`Date` オブジェクト内の日時の値を設定するメソッド。
- 「取得」メソッド、`Date` オブジェクトから日時を取得を行うメソッド。
- 「変換」メソッド、`Date` オブジェクトから文字列値を返すメソッド。
- 解釈と UTC メソッド、`Date` 文字列を解釈するメソッド

「取得」と「設定」メソッドを使用して、秒、分、時、日、曜日、月、年をそれぞれ取得、設定できます。曜日を返す `getDay` メソッドはありますが、対応する `setDay` メソッドはありません。というのも、曜日は自動的に設定されるからです。これらのメソッドはそれぞれの値を表すのに下記の整数値を使用します。

- 秒と分: 0 〜 59
- 時: 0 〜 23
- 曜日: 0 （日曜日） 〜 6 （土曜日）
- 日: 1 〜 31 （日）
- 月: 0 （1 月） 〜 11 （12 月）
- 年: 1900 年以降の年

例えば、次の日付を定義してみます。

```js
const xmas95 = new Date("1995-12-25");
```

すると、`xmas95.getMonth()` は 11 を返し、`xmas95.getFullYear()` は 1995 を返します。

`getTime` と `setTime` メソッドは日時を比較するのに便利です。 `getTime` メソッドは `Date` オブジェクトに対して元期からのミリ秒の数値を返します。

例えば、次のコードでは今年に残された日数を表示します。

```js
const today = new Date();
const endYear = new Date(1995, 11, 31, 23, 59, 59, 999); // 月日を設定
endYear.setFullYear(today.getFullYear()); // 今年の年を設定
const msPerDay = 24 * 60 * 60 * 1000; // 一日をミリ秒に換算
let daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
daysLeft = Math.round(daysLeft); // 今年の残り日数を返す
```

この例では、今日の日時を持つ `today` と名付けられた `Date` オブジェクトを生成します。それから、 `endYear` と名付けられた `Date` オブジェクトを生成し、年を今年に設定します。そして、1 日あたりのミリ秒値を使って、`today` と `endYear` 間の日数を計算する際に `getTime` を使用し、そして日数に丸めます。

`parse` メソッドは日付文字列から既存の `Date` オブジェクトに値を割り当てるのに便利です。例えば、次のコードは `parse` と `setTime` を使用し、日付の値を `ipoDate` オブジェクトに割り当てます。

```js
const ipoDate = new Date();
ipoDate.setTime(Date.parse("Aug 9, 1995"));
```

### 例

次の例では、`JSClock()` 関数がデジタル時計の形式で時刻を返します。

```js
function JSClock() {
  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();
  let temp = String(hour % 12);
  if (temp === "0") {
    temp = "12";
  }
  temp += (minute < 10 ? ":0" : ":") + minute;
  temp += (second < 10 ? ":0" : ":") + second;
  temp += hour >= 12 ? " P.M." : " A.M.";
  return temp;
}
```

`JSClock` 関数は、はじめに `time` という名前の新しい `Date` オブジェクトを生成します。引数が与えられていないため、 time は現在の日付と時刻で生成されます。次に、`getHours` および `getMinutes`、`getSeconds` メソッドを呼び出して、現在の時、分、秒を `hour`、`minute`、`second` に代入します。

続く 4 つの式は、時刻を基にした文字列値を組み立てます。最初の式は `temp` 変数を生成し、それに条件式を用いて値を代入します。`hour` が 12 よりも大きい場合は (`hour - 12`)、そうでない場合は単に hour を代入します。hour が 0 の場合は 12 になります。

次の式は、`minute` 値を `temp` に追加します。`minute` の値が 10 よりも小さい場合、条件式により先行ゼロの文字が追加されます。そうでない場合は区切りのコロン文字を追加します。そして秒の値を同じ方法で `temp` に追加します。

最後の条件式は、`hour` が 12 以上の場合、"P.M." を `temp` に追加します。そうでない場合は "A.M." を `temp` に追加します。

{{PreviousNext("Web/JavaScript/Guide/Numbers_and_strings", "Web/JavaScript/Guide/Regular_expressions")}}
