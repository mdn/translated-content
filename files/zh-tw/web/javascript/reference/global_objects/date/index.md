---
title: Date
slug: Web/JavaScript/Reference/Global_Objects/Date
l10n:
  sourceCommit: b3840f6234d24ade72a43171fd6489dd533aaf15
---

JavaScript 的 **`Date`** 物件以平台獨立的格式表示一個特定的時間點。`Date` 物件封裝了一個整數，代表自 1970 年 1 月 1 日 00:00:00 UTC（_紀元_）以來的毫秒數。

> [!NOTE]
> 隨著 {{jsxref("Temporal")}} API 的引入，`Date` 物件被視為一個遺留功能。建議在新程式碼中使用 `Temporal`，並在可能的情況下將現有程式碼遷移至 `Temporal`（請查看[瀏覽器相容性](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Temporal#瀏覽器相容性)）。我們很快會撰寫一份使用指南！

## 說明

### 紀元、時間戳與無效日期

JavaScript 日期基本上被指定為自[紀元](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-time-values-and-time-range)以來經過的毫秒數，紀元被定義為 1970 年 1 月 1 日 00:00:00 UTC 的午夜（相當於 [UNIX 紀元](/zh-TW/docs/Glossary/Unix_time)）。這個時間戳是*時區無關*的，並唯一地定義了歷史上的一個瞬間。

> [!NOTE]
> 雖然 `Date` 物件核心的時間值是 UTC，但獲取日期和時間或其元件的基本方法都在本地（即主機系統）時區和偏移量下運作。

`Date` 物件可表示的最大時間戳略小於最大安全整數（{{jsxref("Number.MAX_SAFE_INTEGER")}}，即 9,007,199,254,740,991）。`Date` 物件相對於紀元最多可以表示 ±8,640,000,000,000,000 毫秒，或 ±100,000,000（一億）天。這個範圍是從西元前 271821 年 4 月 20 日到西元 275760 年 9 月 13 日。任何試圖表示此範圍之外時間的嘗試，都會導致 `Date` 物件持有一個值為 [`NaN`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/NaN) 的時間戳，這是一個「無效日期」。

```js
console.log(new Date(8.64e15).toString()); // "Sat Sep 13 275760 00:00:00 GMT+0000 (世界協調時間)"
console.log(new Date(8.64e15 + 1).toString()); // "無效日期"
```

有許多方法可以讓你與儲存在日期中的時間戳互動：

- 你可以使用 {{jsxref("Date/getTime", "getTime()")}} 和 {{jsxref("Date/setTime", "setTime()")}} 方法直接與時間戳值互動。
- {{jsxref("Date/valueOf", "valueOf()")}} 和 [`[Symbol.toPrimitive]()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive)（當傳入 `"number"` 時）方法——在[數字強制轉換](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Number#數字強制轉換)中會自動呼叫——會回傳時間戳，這使得 `Date` 物件在數字情境下表現得像它們的時間戳。
- 所有靜態方法（{{jsxref("Date.now()")}}、{{jsxref("Date.parse()")}} 和 {{jsxref("Date.UTC()")}}）都回傳時間戳，而不是 `Date` 物件。
- {{jsxref("Date/Date", "Date()")}} 建構子可以被呼叫，並以一個時間戳作為唯一的引數。

### 日期元件與時區

日期在內部表示為一個單一的數字，即*時間戳*。與其互動時，時間戳需要被解釋為一個結構化的日期和時間表示。總有兩種方式來解釋時間戳：作為本地時間或作為世界協調時間（UTC），這是由世界時間標準定義的全球標準時間。本地時區並未儲存在日期物件中，而是由主機環境（使用者的裝置）決定。

> [!NOTE]
> UTC 不應與[格林威治標準時間](https://en.wikipedia.org/wiki/Greenwich_Mean_Time)（GMT）混淆，因為它們不總是相等的——這在連結的維基百科頁面中有更詳細的解釋。

例如，時間戳 0 代表歷史上的一個獨特瞬間，但它可以被解釋為兩種方式：

- 作為 UTC 時間，它是 1970 年 1 月 1 日 UTC 的午夜，
- 作為紐約（UTC-5）的本地時間，它是 1969 年 12 月 31 日的 19:00:00。

{{jsxref("Date/getTimezoneOffset", "getTimezoneOffset()")}} 方法回傳 UTC 與本地時間之間的差異（以分鐘為單位）。請注意，時區偏移不僅取決於當前的時區，還取決於 `Date` 物件所代表的時間，因為有日光節約時間和歷史變更。本質上，時區偏移是在 `Date` 物件所代表的時間和主機環境所在位置上，相對於 UTC 時間的偏移。

`Date` 方法有兩組：一組透過將時間戳解釋為本地時間來獲取和設定各種日期元件，而另一組則使用 UTC。

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2">元件</th>
      <th colspan="2">本地</th>
      <th colspan="2">UTC</th>
    </tr>
    <tr>
      <th>獲取</th>
      <th>設定</th>
      <th>獲取</th>
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
      <td>日（月份中的日期）</td>
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
      <td>毫秒</td>
      <td>{{jsxref("Date/getMilliseconds", "getMilliseconds()")}}</td>
      <td>{{jsxref("Date/setMilliseconds", "setMilliseconds()")}}</td>
      <td>{{jsxref("Date/getUTCMilliseconds", "getUTCMilliseconds()")}}</td>
      <td>{{jsxref("Date/setUTCMilliseconds", "setUTCMilliseconds()")}}</td>
    </tr>
    <tr>
      <td>星期（週中的日）</td>
      <td>{{jsxref("Date/getDay", "getDay()")}}</td>
      <td>不適用</td>
      <td>{{jsxref("Date/getUTCDay", "getUTCDay()")}}</td>
      <td>不適用</td>
    </tr>
  </tbody>
</table>

{{jsxref("Date/Date", "Date()")}} 建構子可以帶有兩個或更多引數被呼叫，在這種情況下，它們會分別被解釋為本地時間的年、月、日、時、分、秒和毫秒。{{jsxref("Date.UTC()")}} 的工作方式類似，但它將元件解釋為 UTC 時間，並且也接受一個代表年份的單一引數。

> [!NOTE]
> 某些方法，包括 `Date()` 建構子、`Date.UTC()` 以及已棄用的 {{jsxref("Date/getYear", "getYear()")}}/{{jsxref("Date/setYear", "setYear()")}} 方法，會將兩位數的年份解釋為 1900 年代的年份。例如，`new Date(99, 5, 24)` 被解釋為 1999 年 6 月 24 日，而不是 99 年 6 月 24 日。更多資訊請參見[兩位數年份的解釋](#兩位數年份的解釋)。

當一個區段溢位或下溢其預期範圍時，它通常會「進位到」或「從」更高的區段「借位」。例如，如果月份設定為 12（月份是從零開始的，所以 12 月是 11），它會變成下一年的 1 月。如果月份中的日期設定為 0，它會變成前一個月的最後一天。這也適用於使用[日期時間字串格式](#日期時間字串格式)指定的日期。

當試圖將本地時間設定為落在偏移轉換期間（通常是日光節約時間）的時間時，確切的時間是使用與 `Temporal` 的 [`disambiguation: "compatible"`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#從本地時間到_utc_時間的歧義和間隙) 選項相同的行為來推導的。也就是說，如果本地時間對應到兩個瞬間，則選擇較早的一個；如果本地時間不存在（存在一個間隙），我們則向前推進間隙的持續時間。

```js
// 假設本地時區為 America/New_York
// 2024-03-10 02:30 落在春季快轉轉換期間，因此不存在
// 01:59 (UTC-5) 跳到 03:00 (UTC-4)，所以 02:30 向前推進一小時
console.log(new Date(2024, 2, 10, 2, 30).toString());
// Sun Mar 10 2024 03:30:00 GMT-0400 (東部夏令時間)

// 2024-11-03 01:30 落在秋季倒退轉換期間，存在兩次
// 01:59 (UTC-4) 跳到 01:00 (UTC-5)，所以選擇較早的 01:30 (UTC-4)
console.log(new Date(2024, 10, 3, 1, 30).toString());
// Sun Nov 03 2024 01:30:00 GMT-0400 (東部夏令時間)
```

### 日期時間字串格式

將日期格式化為字串的方法有很多種。JavaScript 規範只指定了一種普遍支援的格式：[_日期時間字串格式_](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date-time-string-format)，這是 ISO 8601 日曆日期擴展格式的簡化版。格式如下：

```plain
YYYY-MM-DDTHH:mm:ss.sssZ
```

- `YYYY` 是年份，四位數（`0000` 到 `9999`），或是一個由 `+` 或 `-` 後接六位數的*擴展年份*。擴展年份必須有符號。`-000000` 被明確禁止作為有效年份。
- `MM` 是月份，兩位數（`01` 到 `12`）。預設為 `01`。
- `DD` 是月份中的日期，兩位數（`01` 到 `31`）。預設為 `01`。
- `T` 是一個字面字元，表示字串中*時間*部分的開始。指定時間部分時需要 `T`。
- `HH` 是小時，兩位數（`00` 到 `23`）。作為特例，允許 `24:00:00`，並被解釋為下一天開始的午夜。預設為 `00`。
- `mm` 是分鐘，兩位數（`00` 到 `59`）。預設為 `00`。
- `ss` 是秒，兩位數（`00` 到 `59`）。預設為 `00`。
- `sss` 是毫秒，三位數（`000` 到 `999`）。預設為 `000`。
- `Z` 是時區偏移，可以是字面字元 `Z`（表示 UTC），也可以是 `+` 或 `-` 後接 `HH:mm`，即與 UTC 相差的小時和分鐘數。

可以省略各種元件，因此以下都是有效的：

- 僅日期格式：`YYYY`、`YYYY-MM`、`YYYY-MM-DD`
- 日期時間格式：上述任一僅日期格式，後接 `T`，再後接 `HH:mm`、`HH:mm:ss` 或 `HH:mm:ss.sss`。每種組合都可以後接時區偏移。

例如，`"2011-10-10"`（*僅日期*格式）、`"2011-10-10T14:48:00"`（*日期時間*格式）或 `"2011-10-10T14:48:00.000+09:00"`（帶有毫秒和時區的*日期時間*格式）都是有效的日期時間字串。

當缺少時區偏移時，**僅日期格式被解釋為 UTC 時間，而日期時間格式被解釋為本地時間**。解釋為 UTC 時間是由於一個歷史性的規範錯誤，該錯誤與 ISO 8601 不一致，但由於 web 相容性而無法更改。請參見[解析器損壞——一個現實 Web 問題](https://maggiepint.com/2017/04/11/fixing-javascript-date-web-compatibility-and-reality/)。

{{jsxref("Date.parse()")}} 和 {{jsxref("Date/Date", "Date()")}} 建構子都接受日期時間字串格式的字串作為輸入。此外，當輸入不符合此格式時，實作允許支援其他日期格式。

{{jsxref("Date/toISOString", "toISOString()")}} 方法以日期時間字串格式回傳日期的字串表示，時區偏移總是設定為 `Z`（UTC）。

> [!NOTE]
> 為了最大程度的相容性，我們鼓勵你確保你的輸入符合上述的日期時間字串格式，因為不保證支援其他格式。然而，有些格式在所有主要實作中都受到支援——例如 {{rfc(2822)}} 格式——在這種情況下，使用它們是可以接受的。務必進行[跨瀏覽器測試](/zh-TW/docs/Learn_web_development/Extensions/Testing)以確保你的程式碼在所有目標瀏覽器中都能運作。如果需要適應多種不同格式，函式庫會有所幫助。

非標準字串可以由實作以任何期望的方式進行解析，包括時區——大多數實作預設使用本地時區。實作不需要對超出範圍的日期元件回傳無效日期，儘管它們通常會這樣做。一個字串可能具有在範圍內的日期元件（如上定義的範圍），但實際上並不代表一個日期（例如，「February 30」）。在這種情況下，實作的行為不一致。[`Date.parse()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#範例) 頁面提供了更多關於這些非標準案例的範例。

### 其他格式化日期的方式

- {{jsxref("Date/toISOString", "toISOString()")}} 回傳格式為 `1970-01-01T00:00:00.000Z` 的字串（即上面介紹的日期時間字串格式，是簡化的 [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)）。{{jsxref("Date/toJSON", "toJSON()")}} 呼叫 `toISOString()` 並回傳結果。
- {{jsxref("Date/toString", "toString()")}} 回傳格式為 `Thu Jan 01 1970 00:00:00 GMT+0000 (世界協調時間)` 的字串，而 {{jsxref("Date/toDateString", "toDateString()")}} 和 {{jsxref("Date/toTimeString", "toTimeString()")}} 分別回傳字串的日期和時間部分。[`[Symbol.toPrimitive]()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive)（當傳入 `"string"` 或 `"default"` 時）會呼叫 `toString()` 並回傳結果。
- {{jsxref("Date/toUTCString", "toUTCString()")}} 回傳格式為 `Thu, 01 Jan 1970 00:00:00 GMT` 的字串（廣義的 {{rfc(7231)}}）。
- {{jsxref("Date/toLocaleDateString", "toLocaleDateString()")}}、{{jsxref("Date/toLocaleTimeString", "toLocaleTimeString()")}} 和 {{jsxref("Date/toLocaleString", "toLocaleString()")}} 使用地區特定的日期和時間格式，通常由 [`Intl`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Intl) API 提供。

範例請參見 [toString 方法回傳值的格式](#tostring_方法回傳值的格式)一節。

## 建構子

- {{jsxref("Date/Date", "Date()")}}
  - : 當作為建構子呼叫時，回傳一個新的 `Date` 物件。當作為函式呼叫時，回傳一個表示當前日期和時間的字串。

## 靜態方法

- {{jsxref("Date.now()")}}
  - : 回傳對應於當前時間的數值——自 1970 年 1 月 1 日 00:00:00 UTC 以來的毫秒數，忽略閏秒。
- {{jsxref("Date.parse()")}}
  - : 解析一個日期的字串表示，並回傳自 1970 年 1 月 1 日 00:00:00 UTC 以來的毫秒數，忽略閏秒。
- {{jsxref("Date.UTC()")}}
  - : 接受與建構子最長形式（即 2 到 7 個）相同的參數，並回傳自 1970 年 1 月 1 日 00:00:00 UTC 以來的毫秒數，忽略閏秒。

## 實例屬性

這些屬性定義在 `Date.prototype` 上，並由所有 `Date` 實例共享。

- {{jsxref("Object/constructor", "Date.prototype.constructor")}}
  - : 建立實例物件的建構子函式。對於 `Date` 實例，初始值是 {{jsxref("Date/Date", "Date")}} 建構子。

## 實例方法

- {{jsxref("Date.prototype.getDate()")}}
  - : 根據本地時間，回傳指定日期的月份中的日期（`1` – `31`）。
- {{jsxref("Date.prototype.getDay()")}}
  - : 根據本地時間，回傳指定日期的星期（`0` – `6`）。
- {{jsxref("Date.prototype.getFullYear()")}}
  - : 根據本地時間，回傳指定日期的年份（4 位數年份則為 4 位數）。
- {{jsxref("Date.prototype.getHours()")}}
  - : 根據本地時間，回傳指定日期中的小時（`0` – `23`）。
- {{jsxref("Date.prototype.getMilliseconds()")}}
  - : 根據本地時間，回傳指定日期中的毫秒（`0` – `999`）。
- {{jsxref("Date.prototype.getMinutes()")}}
  - : 根據本地時間，回傳指定日期中的分鐘（`0` – `59`）。
- {{jsxref("Date.prototype.getMonth()")}}
  - : 根據本地時間，回傳指定日期中的月份（`0` – `11`）。
- {{jsxref("Date.prototype.getSeconds()")}}
  - : 根據本地時間，回傳指定日期中的秒數（`0` – `59`）。
- {{jsxref("Date.prototype.getTime()")}}
  - : 回傳指定日期的數值，即自 1970 年 1 月 1 日 00:00:00 UTC 以來的毫秒數。（對於之前的時間，回傳負值。）
- {{jsxref("Date.prototype.getTimezoneOffset()")}}
  - : 回傳當前地區的時區偏移（以分鐘為單位）。
- {{jsxref("Date.prototype.getUTCDate()")}}
  - : 根據世界協調時間，回傳指定日期的月份中的日期（`1` – `31`）。
- {{jsxref("Date.prototype.getUTCDay()")}}
  - : 根據世界協調時間，回傳指定日期的星期（`0` – `6`）。
- {{jsxref("Date.prototype.getUTCFullYear()")}}
  - : 根據世界協調時間，回傳指定日期的年份（4 位數年份則為 4 位數）。
- {{jsxref("Date.prototype.getUTCHours()")}}
  - : 根據世界協調時間，回傳指定日期中的小時（`0` – `23`）。
- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
  - : 根據世界協調時間，回傳指定日期中的毫秒（`0` – `999`）。
- {{jsxref("Date.prototype.getUTCMinutes()")}}
  - : 根據世界協調時間，回傳指定日期中的分鐘（`0` – `59`）。
- {{jsxref("Date.prototype.getUTCMonth()")}}
  - : 根據世界協調時間，回傳指定日期中的月份（`0` – `11`）。
- {{jsxref("Date.prototype.getUTCSeconds()")}}
  - : 根據世界協調時間，回傳指定日期中的秒數（`0` – `59`）。
- {{jsxref("Date.prototype.getYear()")}} {{deprecated_inline}}
  - : 根據本地時間，回傳指定日期的年份（通常為 2-3 位數）。請改用 {{jsxref("Date/getFullYear", "getFullYear()")}}。
- {{jsxref("Date.prototype.setDate()")}}
  - : 根據本地時間，設定指定日期的月份中的日期。
- {{jsxref("Date.prototype.setFullYear()")}}
  - : 根據本地時間，設定指定日期的完整年份（例如，4 位數年份則為 4 位數）。
- {{jsxref("Date.prototype.setHours()")}}
  - : 根據本地時間，設定指定日期的小時。
- {{jsxref("Date.prototype.setMilliseconds()")}}
  - : 根據本地時間，設定指定日期的毫秒。
- {{jsxref("Date.prototype.setMinutes()")}}
  - : 根據本地時間，設定指定日期的分鐘。
- {{jsxref("Date.prototype.setMonth()")}}
  - : 根據本地時間，設定指定日期的月份。
- {{jsxref("Date.prototype.setSeconds()")}}
  - : 根據本地時間，設定指定日期的秒數。
- {{jsxref("Date.prototype.setTime()")}}
  - : 將 `Date` 物件設定為自 1970 年 1 月 1 日 00:00:00 UTC 以來的毫秒數所代表的時間。對於之前的時間，請使用負數。
- {{jsxref("Date.prototype.setUTCDate()")}}
  - : 根據世界協調時間，設定指定日期的月份中的日期。
- {{jsxref("Date.prototype.setUTCFullYear()")}}
  - : 根據世界協調時間，設定指定日期的完整年份（例如，4 位數年份則為 4 位數）。
- {{jsxref("Date.prototype.setUTCHours()")}}
  - : 根據世界協調時間，設定指定日期的小時。
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
  - : 根據世界協調時間，設定指定日期的毫秒。
- {{jsxref("Date.prototype.setUTCMinutes()")}}
  - : 根據世界協調時間，設定指定日期的分鐘。
- {{jsxref("Date.prototype.setUTCMonth()")}}
  - : 根據世界協調時間，設定指定日期的月份。
- {{jsxref("Date.prototype.setUTCSeconds()")}}
  - : 根據世界協調時間，設定指定日期的秒數。
- {{jsxref("Date.prototype.setYear()")}} {{deprecated_inline}}
  - : 根據本地時間，設定指定日期的年份（通常為 2-3 位數）。請改用 {{jsxref("Date/setFullYear", "setFullYear()")}}。
- {{jsxref("Date.prototype.toDateString()")}}
  - : 以人類可讀的字串（如 `'Thu Apr 12 2018'`）回傳 `Date` 的「日期」部分。
- {{jsxref("Date.prototype.toISOString()")}}
  - : 將日期轉換為遵循 ISO 8601 擴展格式的字串。
- {{jsxref("Date.prototype.toJSON()")}}
  - : 使用 {{jsxref("Date/toISOString", "toISOString()")}} 回傳表示 `Date` 的字串。旨在由 {{jsxref("JSON.stringify()")}} 隱式呼叫。
- {{jsxref("Date.prototype.toLocaleDateString()")}}
  - : 根據系統設定，回傳一個帶有此日期之日期部分的地區敏感表示的字串。
- {{jsxref("Date.prototype.toLocaleString()")}}
  - : 回傳一個帶有此日期之地區敏感表示的字串。覆寫 {{jsxref("Object.prototype.toLocaleString()")}} 方法。
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
  - : 根據系統設定，回傳一個帶有此日期之時間部分的地區敏感表示的字串。
- {{jsxref("Date.prototype.toString()")}}
  - : 回傳表示指定 `Date` 物件的字串。覆寫 {{jsxref("Object.prototype.toString()")}} 方法。
- {{jsxref("Date.prototype.toTemporalInstant()")}} {{experimental_inline}}
  - : 回傳一個新的 {{jsxref("Temporal.Instant")}} 物件，其 {{jsxref("Temporal/Instant/epochMilliseconds", "epochMilliseconds")}} 值與此日期的[時間戳](#紀元_時間戳與無效日期)相同。
- {{jsxref("Date.prototype.toTimeString()")}}
  - : 以人類可讀的字串回傳 `Date` 的「時間」部分。
- {{jsxref("Date.prototype.toUTCString()")}}
  - : 使用 UTC 時區將日期轉換為字串。
- {{jsxref("Date.prototype.valueOf()")}}
  - : 回傳 `Date` 物件的原始值。覆寫 {{jsxref("Object.prototype.valueOf()")}} 方法。
- [`Date.prototype[Symbol.toPrimitive]()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive)
  - : 將此 `Date` 物件轉換為原始值。

## 範例

### 建立 Date 物件的幾種方法

以下範例展示了建立 JavaScript 日期的幾種方法：

> [!NOTE]
> 從字串建立日期有許多行為不一致之處。關於使用不同格式的注意事項，請參見[日期時間字串格式](#日期時間字串格式)。

```js
const today = new Date();
const birthday = new Date("December 17, 1995 03:24:00"); // 不建議：可能無法在所有執行環境中運作
const birthday2 = new Date("1995-12-17T03:24:00"); // 這是標準化的，可以可靠地運作
const birthday3 = new Date(1995, 11, 17); // 月份是從 0 開始索引的
const birthday4 = new Date(1995, 11, 17, 3, 24, 0);
const birthday5 = new Date(628021800000); // 傳入紀元時間戳
```

### toString 方法回傳值的格式

```js
const date = new Date("2020-05-12T23:50:21.817Z");
date.toString(); // Tue May 12 2020 18:50:21 GMT-0500 (中部夏令時間)
date.toDateString(); // Tue May 12 2020
date.toTimeString(); // 18:50:21 GMT-0500 (中部夏令時間)
date[Symbol.toPrimitive]("string"); // Tue May 12 2020 18:50:21 GMT-0500 (中部夏令時間)

date.toISOString(); // 2020-05-12T23:50:21.817Z
date.toJSON(); // 2020-05-12T23:50:21.817Z

date.toUTCString(); // Tue, 12 May 2020 23:50:21 GMT

date.toLocaleString(); // 2020/5/12 下午6:50:21
date.toLocaleDateString(); // 2020/5/12
date.toLocaleTimeString(); // 下午6:50:21
```

### 獲取日期、月份、年份或時間

```js
const date = new Date("2000-01-17T16:45:30");
const [month, day, year] = [
  date.getMonth(),
  date.getDate(),
  date.getFullYear(),
];
// 因為月份是從 0 開始索引的
const [hour, minutes, seconds] = [
  date.getHours(),
  date.getMinutes(),
  date.getSeconds(),
];
//
```

### 兩位數年份的解釋

`new Date()` 對於兩位數的年份值表現出遺留的、不理想且不一致的行為；具體來說，當 `new Date()` 呼叫被給予一個兩位數的年份值時，該年份值不會被視為字面上的年份並直接使用，而是被解釋為一個相對偏移量——在某些情況下是相對於 `1900` 年的偏移，但在其他情況下則是相對於 `2000` 年的偏移。

```js
let date = new Date(98, 1); // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)
date = new Date(22, 1); // Wed Feb 01 1922 00:00:00 GMT+0000 (GMT)
date = new Date("2/1/22"); // Tue Feb 01 2022 00:00:00 GMT+0000 (GMT)

// 遺留方法；總是將兩位數的年份值解釋為相對於 1900 年
date.setYear(98);
date.toString(); // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)
date.setYear(22);
date.toString(); // Wed Feb 01 1922 00:00:00 GMT+0000 (GMT)
```

因此，要建立和獲取 `0` 到 `99` 年之間的日期，應改用首選的 {{jsxref("Date/setFullYear", "setFullYear()")}} 和 {{jsxref("Date/getFullYear", "getFullYear()")}} 方法：

```js
// 首選方法；從不將任何值解釋為相對偏移，
// 而是直接使用年份值
date.setFullYear(98);
date.getFullYear(); // 98 (不是 1998)
date.setFullYear(22);
date.getFullYear(); // 22 (不是 1922，也不是 2022)
```

### 計算經過的時間

以下範例展示了如何確定兩個 JavaScript 日期之間經過的時間（以毫秒為單位）。由於天（因日光節約時間轉換）、月和年的長度不同，以大於時、分、秒的單位表示經過的時間需要解決許多問題，在嘗試之前應進行徹底的研究。

```js
// 使用 Date 物件
const start = Date.now();

// 要計時的事件放在這裡：
doSomethingForALongTime();
const end = Date.now();
const elapsed = end - start; // 經過的時間（毫秒）
```

```js
// 使用內建方法
const start = new Date();

// 要計時的事件放在這裡：
doSomethingForALongTime();
const end = new Date();
const elapsed = end.getTime() - start.getTime(); // 經過的時間（毫秒）
```

```js
// 測試一個函式並取回其回傳值
function printElapsedTime(testFn) {
  const startTime = Date.now();
  const result = testFn();
  const endTime = Date.now();

  console.log(`經過時間：${String(endTime - startTime)} 毫秒`);
  return result;
}

const yourFunctionReturn = printElapsedTime(yourFunction);
```

> [!NOTE]
> 在支援 {{domxref("Performance API", "", "", "nocode")}} 高解析度時間功能的瀏覽器中，{{domxref("Performance.now()")}} 可以提供比 {{jsxref("Date.now()")}} 更可靠和精確的經過時間測量。

### 獲取自 ECMAScript 紀元以來的秒數

```js
const seconds = Math.floor(Date.now() / 1000);
```

在這種情況下，只回傳一個整數是很重要的——所以簡單的除法是不行的。只回傳實際經過的秒數也很重要。（這就是為什麼這段程式碼使用 {{jsxref("Math.floor()")}}，而*不是* {{jsxref("Math.round()")}}。）

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Date/Date", "Date()")}}
