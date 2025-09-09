---
title: Date.parse()
slug: Web/JavaScript/Reference/Global_Objects/Date/parse
l10n:
  sourceCommit: e439cd79166dbfd9bbe3a003abaf5898ae165509
---

{{JSRef}}

**`Date.parse()`** は静的メソッドで、日時の文字列表現を解釈し、その日付の[タイムスタンプ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)を返します。

{{InteractiveExample("JavaScript デモ: Date.parse()")}}

```js interactive-example
// 標準の日付時刻文字列の書式
const unixTimeZero = Date.parse("1970-01-01T00:00:00Z");
// UTCString() に似た標準ではない書式化
const javaScriptRelease = Date.parse("04 Dec 1995 00:12:00 GMT");

console.log(unixTimeZero);
// 予想される結果: 0

console.log(javaScriptRelease);
// 予想される結果: 818035920000
```

## 構文

```js-nolint
Date.parse(dateString)
```

### 引数

- `dateString`
  - : 文字列で、[日時文字列形式](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format)です。さまざまな書式を使用する場合の注意事項については、リンク先の参照をご覧ください。

### 返値

指定された日時の[タイムスタンプ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)を表す数値。 `dateString` が有効な日時として解釈できない場合、{{jsxref("NaN")}} が返されます。

## 解説

この関数は、 {{jsxref("Date/setTime", "setTime()")}} メソッドと組み合わせて、文字列値に基づいて日時の値を設定する場合などに便利です。

`parse()` が処理できる書式は明示的に指定されていませんが、いくつかの不変条件があります。

- [日時文字列の書式](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format)（{{jsxref("Date/toISOString", "toISOString()")}} によって生成される）に対応している必要があります。
- `x` がミリ秒の値が 0 の日付である場合、 `x.valueOf()` は、`Date.parse(x.toString())`、`Date.parse(x.toUTCString())`、`Date.parse(x.toISOString())` のいずれかと同じでなければなりません。これは、 {{jsxref("Date/toString", "toString()")}} および {{jsxref("Date/toUTCString", "toUTCString()")}} によって生成される書式も対応している必要があるということです。
- 仕様上は、 {{jsxref("Date/toLocaleString", "toLocaleString()")}} によって生成される書式化に対応することは要求されていません。ただし、主要なエンジンはすべて `toLocaleString("en-US")` による書式化に対応しようとしています。

その他の書式は実装によって定義されており、すべてのブラウザーで動作するとは限りません。さまざまな書式に対応する必要がある場合は、ライブラリーが役立ちます。実際、`Date.parse()` の信頼性の低さが、 {{jsxref("Temporal")}} API が導入された理由のひとつです。

`parse()` は `Date` の静的メソッドであるため、作成した `Date` オブジェクトのメソッドとしてではなく、常に `Date.parse()` として使用します。

## 例

### Date.parse() の使用

以下の呼び出しはすべて `1546300800000` を返します。最初のものは ES5 によれば UTC 時刻を意味し、それ以外は ISO 日付仕様 (`Z` および `+00:00`) に従って UTC をタイムゾーンを指定しています。

```js
Date.parse("2019-01-01");
Date.parse("2019-01-01T00:00:00.000Z");
Date.parse("2019-01-01T00:00:00.000+00:00");
```

以下の呼び出しではタイムゾーンを指定していないので、システムの地方時で 2019-01-01 の 00:00:00 に設定されます。

```js
Date.parse("2019-01-01T00:00:00");
```

### toString() および toUTCString() 形式

標準の日付時刻文字列の書式化とは別に、 {{jsxref("Date/toString", "toString()")}} および {{jsxref("Date/toUTCString", "toUTCString()")}} の書式化にも対応しています。

```js
// toString() 形式
Date.parse("Thu Jan 01 1970 00:00:00 GMT-0500 (Eastern Standard Time)");
// すべての実装で、すべてのタイムゾーンにおける 18000000

// toUTCString() 形式
Date.parse("Thu, 01 Jan 1970 00:00:00 GMT");
// すべての実装で、すべてのタイムゾーンにおける 0
```

### 標準外の日付文字列

> [!NOTE]
> この節には、ブラウザーやブラウザーのバージョンによって不整合が生じる可能性のある、実装固有の動作について記載しています。これは、包括的なブラウザーの互換性表を網羅したものではありません。コードで書式を使用する前に、常に自分自身でテストを行ってください。

実装では通常、日付文字列が標準ではない場合、既定で地方時が使用されます。一貫性を保つため、ここでは、実行時が UTC タイムゾーンを使用すると想定し、特に指定がない限り、出力は端末のタイムゾーンによって異なるものとします。[地方時の夏時間 (DST) も、これに影響を与える可能性があります](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset#varied_results_in_daylight_saving_time_dst_regions)。

標準外の日付文字列の例をいくつか挙げます。ブラウザーは日付文字列の解析にとても寛容で、解析できない文字列の部分は破棄する場合があります。互換性の理由から、ブラウザーは互いの動作をコピーすることが多いため、このような処理パターンはブラウザー間で広まる傾向があります。前述のように、次の例はあくまで説明のためのものであり、決して網羅的なものではありません。

<table>
<thead>
<tr>
<th>説明</th>
<th>例</th>
<th>Chrome</th>
<th>Firefox</th>
<th>Safari</th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="3">単一の数値</td>
<td><code>0</code> （1 桁）</td>
<td colspan="2">946684800000 (Jan 01 2000); NaN (Firefox ≤122)</td>
<td>-62167219200000 (Jan 01 0000)</td>
</tr>
<tr>
<td><code>31</code> （2 桁）</td>
<td colspan="2">NaN</td>
<td>-61188912000000 (Jan 01 0031)</td>
</tr>
<tr>
<td><code>999</code> （3 桁または 4 桁）</td>
<td colspan="3">-30641733102000 (Jan 01 0999)</td>
</tr>
<tr>
<td rowspan="4">さまざまな区切り文字を使用した日時文字列</td>
<td><code>1970-01-01</code> （標準）</td>
<td colspan="3">0 （すべてのタイムゾーン）</td>
</tr>
<tr>
<td><code>1970/01/01</code></td>
<td colspan="3">0</td>
</tr>
<tr>
<td><code>1970,01,01</code></td>
<td colspan="2">0</td>
<td>NaN</td>
</tr>
<tr>
<td><code>1970 01 01</code></td>
<td colspan="2">0</td>
<td>NaN</td>
</tr>
<tr>
<td><code>toString()</code> のような文字列</td>
<td><code>Thu&nbsp;Jan&nbsp;01&nbsp;1970&nbsp;00:00:00</code><br><code>Thu Jan 01 1970</code><br><code>Jan 01 1970 00:00:00</code><br><code>Jan 01 1970</code></td>
<td colspan="3">0</td>
</tr>
<tr>
<td><code>toUTCString()</code> のような文字列</td>
<td><code>Thu, 01 Jan 1970 00:00:00</code><br><code>Thu, 01 Jan 1970</code><br><code>01 Jan 1970 00:00:00</code><br><code>01 Jan 1970</code></td>
<td colspan="3">0</td>
</tr>
<tr>
<td rowspan="4">最初の日付成分が 2 桁の場合</td>
<td><code>01-02-03</code> （最初の部分は有効な月である可能性がある）</td>
<td colspan="2">1041465600000 (Jan 02 2003)</td>
<td>-62132745600000 (Feb 03 0001)<br>メモ: Safari は常に YY-MM-DD と推測し、 MM/DD/YY にはなりません。</td>
</tr>
<tr>
<td><code>27-02-03</code> （最初の部分は有効な日であるが、月ではない）</td>
<td colspan="2">NaN</td>
<td>-61312291200000 (Feb 03 0027)</td>
</tr>
<tr>
<td><code>49-02-03</code> （最初の部分は有効な日ではなく、 &lt;50）</td>
<td colspan="2">2495923200000 (Feb 03 2049)</td>
<td>-60617980800000 (Feb 03 0049)</td>
</tr>
<tr>
<td><code>50-02-03</code> （最初の部分は有効な日ではなく、 ≥50）</td>
<td colspan="2">-628300800000 (Feb 03 1950)</td>
<td>-60586444800000 (Feb 03 0050)</td>
</tr>
<tr>
<td rowspan="3">範囲を外れた日付成分</td>
<td><code>2014-25-23</code><br><code>Mar 32, 2014</code><br><code>2014/25/23</code></td>
<td colspan="3">NaN</td>
</tr>
<tr>
<td><code>2014-02-30</code></td>
<td colspan="2">1393718400000 (Mar 02 2014)</td>
<td>NaN</td>
</tr>
<tr>
<td><code>02/30/2014</code></td>
<td colspan="3">1393718400000</td>
</tr>
<tr>
<td rowspan="5">月名の後の余分な文字</td>
<td><code>04 Dec 1995</code><br><code>04 Decem 1995</code><br><code>04 December 1995</code></td>
<td colspan="3">818031600000</td>
</tr>
<tr>
<td><code>04 DecFoo 1995</code></td>
<td colspan="3">818031600000<br>最初の 3 文字のみが読み込まれます。<br>Firefox ≤121 は、有効な月名までを読み込み、 "F" を見つけると NaN を返します。</td>
</tr>
<tr>
<td><code>04 De 1995</code></td>
<td colspan="3">NaN</td>
</tr>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.UTC()")}}
