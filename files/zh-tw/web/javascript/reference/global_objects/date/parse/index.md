---
title: Date.parse()
slug: Web/JavaScript/Reference/Global_Objects/Date/parse
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Date.parse()`** 靜態方法會解析一個日期的字串表示法，並回傳該日期的[時間戳](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date#紀元時間戳與無效日期)。

{{InteractiveExample("JavaScript Demo: Date.parse()")}}

```js interactive-example
// 標準日期時間字串格式
const unixTimeZero = Date.parse("1970-01-01T00:00:00Z");
// 類似 toUTCString() 的非標準格式
const javaScriptRelease = Date.parse("04 Dec 1995 00:12:00 GMT");

console.log(unixTimeZero);
// 預期輸出：0

console.log(javaScriptRelease);
// 預期輸出：818035920000
```

## 語法

```js-nolint
Date.parse(dateString)
```

### 參數

- `dateString`
  - : 一個[日期時間字串格式](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date#日期時間字串格式)的字串。關於使用不同格式的注意事項，請參見連結的參考資料。

### 回傳值

一個數字，表示給定日期的[時間戳](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date#紀元時間戳與無效日期)。如果 `dateString` 無法被解析為一個有效的日期，則回傳 {{jsxref("NaN")}}。

## 描述

此函式對於基於字串值設定日期值很有用，例如與 {{jsxref("Date/setTime", "setTime()")}} 方法結合使用。

`parse()` 可以處理的格式沒有明確指定，但有幾個{{Glossary("invariant", "不變量")}}：

- 必須支援[日期時間字串格式](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date#日期時間字串格式)（由 {{jsxref("Date/toISOString", "toISOString()")}} 產生）。
- 如果 `x` 是任何毫秒數為零的 Date 物件，那麼 `x.valueOf()` 應該等於以下任何一個：`Date.parse(x.toString())`、`Date.parse(x.toUTCString())`、`Date.parse(x.toISOString())`。這意味著由 {{jsxref("Date/toString", "toString()")}} 和 {{jsxref("Date/toUTCString", "toUTCString()")}} 產生的格式也應該被支援。
- 規範*不*要求支援由 {{jsxref("Date/toLocaleString", "toLocaleString()")}} 產生的格式。然而，主要引擎都嘗試支援 `toLocaleString("en-US")` 格式。

其他格式是由實作定義的，可能無法在所有瀏覽器中運作。如果需要容納許多不同的格式，一個函式庫會有所幫助。事實上，`Date.parse()` 的不可靠性是引入 {{jsxref("Temporal")}} API 的動機之一。

因為 `parse()` 是 `Date` 的一個靜態方法，所以你總是將其作為 `Date.parse()` 使用，而不是作為你所建立的 `Date` 物件的一個方法。

## 範例

### 使用 Date.parse()

以下呼叫都會回傳 `1546300800000`。第一個會隱含 UTC 時間，因為它只有日期，而其他的則明確指定了 UTC 時區。

```js
Date.parse("2019-01-01");
Date.parse("2019-01-01T00:00:00.000Z");
Date.parse("2019-01-01T00:00:00.000+00:00");
```

以下呼叫未指定時區，將會被設定為系統本地時區的 2019-01-01 00:00:00，因為它同時有日期和時間。

```js
Date.parse("2019-01-01T00:00:00");
```

### toString() 與 toUTCString() 格式

除了標準的日期時間字串格式外，也支援 {{jsxref("Date/toString", "toString()")}} 和 {{jsxref("Date/toUTCString", "toUTCString()")}} 的格式：

```js
// toString() 格式
Date.parse("Thu Jan 01 1970 00:00:00 GMT-0500 (Eastern Standard Time)");
// 在所有時區的所有實作中皆為 18000000

// toUTCString() 格式
Date.parse("Thu, 01 Jan 1970 00:00:00 GMT");
// 在所有時區的所有實作中皆為 0
```

### 非標準日期字串

> [!NOTE]
> 本節包含實作特定的行為，這些行為在不同瀏覽器或不同版本的瀏覽器之間可能不一致。這並非一個全面的瀏覽器相容性表格，你在程式碼中使用任何格式之前，都應該進行自己的測試。

當日期字串非標準時，實作通常預設為本地時區。為了一致性，我們將假設執行環境使用 UTC 時區，除非另有說明，否則輸出將隨設備的時區而異。[本地時區的日光節約時間（DST）也可能對此產生影響](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset#日光節約時間_dst_地區的不同結果)。

這裡有一些非標準日期字串的更多範例。瀏覽器在解析日期字串時非常寬鬆，可能會丟棄任何它們無法解析的字串部分。出於相容性的原因，瀏覽器通常會互相複製行為，所以這些處理模式傾向於跨瀏覽器傳播。如前所述，以下範例僅供說明，絕非詳盡無遺：

<table>
<thead>
<tr>
<th>描述</th>
<th>範例</th>
<th>Chrome</th>
<th>Firefox</th>
<th>Safari</th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="3">單一數字</td>
<td><code>0</code>（單一位數）</td>
<td colspan="2">946684800000（2000 年 1 月 1 日）；在 Firefox ≤122 中為 NaN</td>
<td>-62167219200000（0000 年 1 月 1 日）</td>
</tr>
<tr>
<td><code>31</code>（兩位數）</td>
<td colspan="2">NaN</td>
<td>-61188912000000（0031 年 1 月 1 日）</td>
</tr>
<tr>
<td><code>999</code>（三／四位數）</td>
<td colspan="3">-30641733102000（0999 年 1 月 1 日）</td>
</tr>
<tr>
<td rowspan="4">使用不同分隔符的日期字串</td>
<td><code>1970-01-01</code>（標準）</td>
<td colspan="3">在所有時區中皆為 0</td>
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
<td>類似 <code>toString()</code> 的字串</td>
<td><code>Thu Jan 01 1970 00:00:00</code><br><code>Thu Jan 01 1970</code><br><code>Jan 01 1970 00:00:00</code><br><code>Jan 01 1970</code></td>
<td colspan="3">0</td>
</tr>
<tr>
<td>類似 <code>toUTCString()</code> 的字串</td>
<td><code>Thu, 01 Jan 1970 00:00:00</code><br><code>Thu, 01 Jan 1970</code><br><code>01 Jan 1970 00:00:00</code><br><code>01 Jan 1970</code></td>
<td colspan="3">0</td>
</tr>
<tr>
<td rowspan="4">日期的第一個部分是兩位數</td>
<td><code>01-02-03</code>（第一部分可以是有效的月份）</td>
<td colspan="2">1041465600000（2003 年 1 月 2 日）</td>
<td>-62132745600000（0001 年 2 月 3 日）<br>注意：Safari 總是假設為 YY-MM-DD，但對於斜線則為 MM/DD/YY。</td>
</tr>
<tr>
<td><code>27-02-03</code>（第一部分可以是有效的日期但不是月份）</td>
<td colspan="2">NaN</td>
<td>-61312291200000（0027 年 2 月 3 日）</td>
</tr>
<tr>
<td><code>49-02-03</code>（第一部分不能是有效的日期且小於 50）</td>
<td colspan="2">2495923200000（2049 年 2 月 3 日）</td>
<td>-60617980800000（0049 年 2 月 3 日）</td>
</tr>
<tr>
<td><code>50-02-03</code>（第一部分不能是有效的日期且大於等於 50）</td>
<td colspan="2">-628300800000（1950 年 2 月 3 日）</td>
<td>-60586444800000（0050 年 2 月 3 日）</td>
</tr>
<tr>
<td rowspan="3">超出範圍的日期部分</td>
<td><code>2014-25-23</code><br><code>Mar 32, 2014</code><br><code>2014/25/23</code></td>
<td colspan="3">NaN</td>
</tr>
<tr>
<td><code>2014-02-30</code></td>
<td colspan="2">1393718400000（2014 年 3 月 2 日）</td>
<td>NaN</td>
</tr>
<tr>
<td><code>02/30/2014</code></td>
<td colspan="3">1393718400000</td>
</tr>
<tr>
<td rowspan="5">月份名稱後的多餘字元</td>
<td><code>04 Dec 1995</code><br><code>04 Decem 1995</code><br><code>04 December 1995</code></td>
<td colspan="3">818031600000</td>
</tr>
<tr>
<td><code>04 DecFoo 1995</code></td>
<td colspan="3">818031600000<br>只讀取前三個字元。<br>Firefox ≤121 會讀取到有效的月份名稱為止，因此當它看到「F」時會回傳 NaN。</td>
</tr>
<tr>
<td><code>04 De 1995</code></td>
<td colspan="3">NaN</td>
</tr>
</tbody>
</table>

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Date.UTC()")}}
