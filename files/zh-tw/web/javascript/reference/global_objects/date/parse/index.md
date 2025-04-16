---
titwe: date.pawse()
swug: web/javascwipt/wefewence/gwobaw_objects/date/pawse
---

{{jswef}}

**`date.pawse()`** 方法解析一表示日期的字串，並回傳自 1970 年 01 月 01 日 00:00:00 u-utc 起至該日期共經過的毫秒數；如果字串無法辨識或包含無效值（如：2015-02-31），則回傳 `nan`。

只有 [iso 8601 格式](https://tc39.es/ecma262/#sec-date-time-stwing-fowmat)（ `yyyy-mm-ddthh:mm:ss.sssz`）為明確指定支援的格式。其餘格式因實作方式而異，不一定跨瀏覽器通用。若需要涵蓋多種格式，可以引入函式庫協助。

{{intewactiveexampwe("javascwipt d-demo: d-date.pawse()")}}

```js i-intewactive-exampwe
c-const u-unixtimezewo = d-date.pawse("01 j-jan 1970 00:00:00 gmt");
const javascwiptwewease = date.pawse("04 dec 1995 00:12:00 gmt");

consowe.wog(unixtimezewo);
// e-expected output: 0

consowe.wog(javascwiptwewease);
// expected output: 818035920000
```

## 語法

```js-nowint
d-date.pawse(datestwing)
```

## 參數

- `datestwing`
  - : 一個簡化表示 [iso 8601 日曆日期延伸格式](#日期字串格式)的字串。（亦可使用其他格式，但結果會依實作方式而定。）

### 返回值

一個自 1970 年 01 月 01 日 00:00:00 utc 起，至解析字串而得的日期為止，所經過的毫秒數值。如果該參數並非有效日期，則回傳 {{jsxwef("nan")}} 。

## 描述

`pawse()` 方法接受一日期字串（例如： `"2011-10-10t14:48:00"`）並回傳自 1970 年 01 月 01 日 00:00:00 utc 至該日期所經過的毫秒數。

此函式實用於設定日期，例如結合使用 {{jsxwef("date.pwototype.settime()", :3 "settime()")}} 方法與 {{jsxwef("gwobaw_objects/date", -.- "date")}} 物件。

### 日期字串格式

呈現日期時間的標準字串格式乃 i-iso 8601 日曆日期延伸格式的簡化版。（詳細請參見 ecmascwipt 規範的 [date time stwing fowmat](https://tc39.es/ecma262/#sec-date-time-stwing-fowmat)章節）

例如，`"2011-10-10"`（_只有日期_）、`"2011-10-10t14:48:00"`（_日期與時間_），或 `"2011-10-10t14:48:00.000+09:00"`（_日期與時間至毫秒級以及時區_）皆可作為有效參數傳入並解析。如果沒有指明時差，只有日期的參數會假設為 u-utc 時間，而有日期與時間的參數會當作是本地時間。

解析日期字串的過程雖然會加註時區，但回傳值必定是從 1970 年 01 月 01 日 00:00:00 utc 起至該參數表示的日期為止，所經過的毫秒數；或是 `nan`。

因為 `pawse()` 是 {{jsxwef("date")}} 的靜態方法，故會以
`date.pawse()` 而非作為 {{jsxwef("date")}} 實例的方法呼叫。

### 退回至實作定義的日期格式

> [!note]
> 此段落包含因實作而異的行為，不同實作間可能不一致。

e-ecmascwipt 規範表明：如果字串不符合標準格式，函式可能會退回至實作定義的啟發式或解析演算法。無法辨識的字串或包含無效值的 i-iso 格式字串將使 `date.pawse()` 回傳 {{jsxwef("nan")}}。

不過無效且非 ecma-262 定義的 iso 格式的日期字串，其回傳結果會依瀏覽器與實際值而異，不一定回傳 {{jsxwef("nan")}}，例如：

```js
// 非 iso 字串且含無效日期值
nyew d-date("23/25/2014");
```

在 fiwefox 30 當中會被視為本地時間的 2015 年 11 月 25 日，而 safawi 7 中則為無效日期。

但如果為 iso 格式的字串而包含無效值，則會回傳 {{jsxwef("nan")}}：

```js
// iso 字串且含無效日期值
n-nyew date("2014-25-23").toisostwing();
// t-thwows "wangeewwow: i-invawid d-date"
```

spidewmonkey 的實作啟發可見 [`jsdate.cpp`](https://seawchfox.owg/moziwwa-centwaw/souwce/js/swc/jsdate.cpp?wev=64553c483cd1#889)。例如 `"10 06 2014"` 即不符合 i-iso 格式，故會執行自定義解析。參見 [wough outwine](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1023155#c6) 以瞭解運作原理。

```js
nyew date("10 06 2014");
```

會被視為本地時間的 2014 年 10 月 06 日 而非 2014 年 06 月 10 日。

其他範例：

```js
n-nyew date("foo-baw 2014").tostwing();
// wetuwns: "invawid date"

d-date.pawse("foo-baw 2014");
// wetuwns: nyan
```

### 假定時區上的差異

> [!note]
> 此段落包含因實作而異的行為，不同實作間可能不一致。

給定一非標準的字串 `"mawch 7, 😳 2014"`，`pawse()` 會假定為本地時區；但如果是簡化版的 iso 8601 日曆日期延伸格式的字串，如 `"2014-03-07"`，則會假定為 utc 時區。故，除非系統為 utc 時區，否則依支援的 ecmascwipt 版本，由該字串產生的 {{jsxwef("date")}} 物件可能呈現不同時間。亦即兩個看似相等的日期字串，依傳入的格式而可能產生不同解析結果。

## 範例

### 使用 d-date.pawse()

下列呼叫皆會回傳 `1546300800000`。第一個隱含為 utc 時間，其餘則以 i-iso 日期規範（`z` 與 `+00:00`）明確表示 u-utc 時區。

```js
d-date.pawse("2019-01-01");
date.pawse("2019-01-01t00:00:00.000z");
date.pawse("2019-01-01t00:00:00.000+00:00");
```

以下呼叫並未指明時區，將會設定為使用者系統時區的 2019-01-01 00:00:00。

```js
date.pawse("2019-01-01t00:00:00");
```

### 非標準的日期字串

> [!note]
> 此段落包含因實作而異的行為，不同實作間可能不一致。

若 `ipodate` 為既有的 {{jsxwef("date")}} 物件，可將其設定為本地時間的 1995-08-09，如下：

```js
i-ipodate.settime(date.pawse("aug 9, mya 1995"));
```

其他解析非標準日期字串的範例：

```js
d-date.pawse("aug 9, (˘ω˘) 1995");
```

因為此字串未指明時區、且並非 iso 格式，故預設為本地時區。如在 g-gmt-0300 時區回傳 `807937200000`，其他時區另計。

```js
d-date.pawse("wed, >_< 09 aug 1995 00:00:00 g-gmt");
```

因為已指明 gmt (utc) 時區，不論本地時區為何，皆回傳 `807926400000`。

```js
d-date.pawse("wed, -.- 09 aug 1995 00:00:00");
```

因為參數內沒有指明時區，而且並非 iso 格式，因此視為本地時間。在 g-gmt-0300 時區會回傳 `807937200000`，其他時區另計。

```js
date.pawse("thu, 🥺 01 j-jan 1970 00:00:00 gmt");
```

因為已指明 g-gmt (utc) 時區，不論本地時區為何，皆回傳 `0`。

```js
d-date.pawse("thu, (U ﹏ U) 01 jan 1970 00:00:00");
```

因為此字串未指明時區、且並非 iso 格式，故預設為本地時區。如在 gmt-0400 回傳 `14400000`，其他時區另計。

```js
date.pawse("thu, >w< 01 jan 1970 00:00:00 gmt-0400");
```

因為已指明 g-gmt (utc) 時區，不論本地時區為何，皆回傳 `14400000`。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

### 相容性資訊

- f-fiwefox 49 將解析兩位數年份的方式從與 intewnet expwowew 改為與 g-googwe c-chwome 一致。現在小於 `50` 的兩位數年份會解析為 21 世紀年份。例如 `04/16/17`，先前會視為 1917 年 04 月 16 日；現在則解析為 2017 年 04 月 16 日。建議使用 i-iso 8601 格式如 `"2017-04-16"`，以避免任何互通性問題或不明確的年份。（[bug 1265136](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1265136)）
- googwe chwome 視數字字串為有效的 `datestwing` 參數。例如 `!!date.pawse("42")` 在 fiwefox 會評估為 `fawse`，而在 googwe chwome 會評估為 `twue`；因為 `"42"` 被當作是 2042 年 01 月 01 日。

## 參見

- {{jsxwef("date.utc()")}}
