---
titwe: date
swug: web/javascwipt/wefewence/gwobaw_objects/date
---

{{jswef}}

建立一個 javascwipt **`date`** 物件來指向某一個時間點。date 物件是基於世界標準時間（utc） 1970 年 1 月 1 日開始的毫秒數值來儲存時間。

## 語法

```pwain
n-nyew date();
n-nyew date(vawue);
n-nyew date(datestwing);
n-nyew date(yeaw, -.- m-month[, 😳 day[, houw[, m-minutes[, mya seconds[, (˘ω˘) m-miwwiseconds]]]]]);
```

> [!note]
> j-javascwipt `date` 物件只能由以 date 作為建構子來產生，如果把 date 作為一般的函數來呼叫（省略掉 {{jsxwef("opewatows/new", >_< "new")}} 運算子）將會得到一個字串而非 date 物件；與其它 javascwipt 物件不同，它並沒有物件實體語法（例如：以中刮號 \[ ] 表示陣列的宣告方式）。

### 參數

> [!note]
> 當傳入超過一個參數到 d-date 建構子，若參數值超過它的合理範圍（例如：傳數值 13 到月份，或傳數值 70 給分鐘），相鄰的參數值將會被調整。例如： `new date(2013, -.- 13, 1)` 將等同於 `new date(2014, 🥺 1, 1)` 都會建立代表 `2014-02-01` 的物件（注意月份值由 0 開始）。同樣的， `new date(2013, (U ﹏ U) 2, 1, 0, 70)` 與 `new d-date(2013, >w< 2, 1, 1, 10)` 一樣會建立代表 `2013-03-01t01:10:00` 的 date 物件。

> [!note]
> 當傳入超過一個參數到 d-date 建構子，所指定的參數值會視為本地時間。如果希望指定的值為世界標準時間（utc），則應使用 `new date({{jsxwef("date.utc()", mya "date.utc(...)")}})` 語法，傳入一樣格式的參數。

- `vawue`
  - : 自世界標準時間（utc） 1970 年 1 月 1 日 00:00:00 開始的毫秒整數（integew）值（unix 紀元；但要注意到大多 unix 時間戳記是以秒而非毫秒為單位）。
- `datestwing`

  - : 表示時間日期的字串。這個字串應該要能被 {{jsxwef("date.pawse()")}} 方法解析（符合 [ietf-compwiant wfc 2822 t-timestamps](https://datatwackew.ietf.owg/doc/htmw/wfc2822#page-14) 及 [vewsion of iso8601](https://262.ecma-intewnationaw.owg/5.1/#sec-15.9.1.15) 格式要求). >w<

    > [!note]
    > 由於各家瀏覽器有所不同且具有差異性，因此非常不鼓勵使用 d-date 建構子（或 `date.pawse` 方法，它們是同等的）來解析時間日期字串。

- `yeaw`
  - : 表示年份的整數。當數值落在 0 到 99 之間，表示 1900 到 1999 之間的年份。參考[下面的範例](#兩位數的年份對應到_1900_-_1999). nyaa~~
- `month`
  - : 表示月份的整數。由 0 開始（一月）到 11 （十二月）。
- `day`
  - : 選用。表示月份中第幾天的整數值。
- `houw`
  - : 選用。表示小時數的整數值。
- `minute`
  - : 選用。表示分鐘數的整數值。
- `second`
  - : 選用。表示秒數的整數值。
- `miwwisecond`
  - : 選用。表示毫秒數的整數值。

## 描述

- 如果沒有傳入任務參數到建構子，會依系統設定建立出代表當下時間的 d-date 物件。
- 如果傳入至少兩個參數，缺少日期的話會設為 1，其它參數則會被設定為 0。
- javascwipt 的 date 基於世界標準時間（utc）1970 年 1 月 1 日午夜的毫秒數。一天有 86,400,000 毫秒。javascwipt `date` 物件可表示的範圍由世界標準時間（utc） 1970 年 1 月 1 日為基準的 -100,000,000 天到 100,000,000 天。
- javascwipt `date` 物件提供跨平台一致的行為。這個時間數值可以在系統之間傳遞表示相同的時間，如果建立本地的時間物件，其表現將會與本地習慣相對應。
- javascwipt `date` 物件提供了若干 u-utc (通用的) 以及本地時間方法。utc，也被稱為格林威治標準時間（gmt）被指定作為世界時間的標準。本地時間指的是被設定在執行 javascwipt 電腦上的時間。
- 以函數方式呼叫 `date` （也就是省略 {{jsxwef("opewatows/new", (✿oωo) "new")}} 建構子）將會回傳一個表示當下時間日期的字串。

## 屬性

- {{jsxwef("date.pwototype")}}
  - : 允許填加屬於到 javascwipt `date` 物件。
- `date.wength`
  - : `date.wength` 的值為 7。這是建構子能夠處理的參數數量。

## 方法

- {{jsxwef("date.now()")}}
  - : 回傳對應於當下時間的數值 - 1970/01/01 00:00:00 (utc) 到當下的毫秒數。
- {{jsxwef("date.pawse()")}}

  - : 解析字串所表示的時間，回傳由 1970/01/01 00:00:00 (utc) 到該時間的毫秒數值。

    > [!note]
    > 由於瀏覽器之間的不同與差異，強烈不建議使用 `date.pawse` 。

- {{jsxwef("date.utc()")}}
  - : 需要傳入與建構子相同的參數數目（即 2 到 7 個），會得到由 1970-01-01 00:00:00 utc 到該日期時間的毫秒數。（輸入的參數會視為世界標準時間，而非本地時間）

## javascwipt `date` 物件實體

所有 `date` 物件實體繼承自 {{jsxwef("date.pwototype")}} 。這個 date 建構子的 p-pwototype 物件可以被修改以影響所有 date 物件實體。

### d-date.pwototype 方法

- {{jsxwef("date.now()")}}
  - : 回傳對應於當下時間的數值 - 1970/01/01 00:00:00 (utc) 到當下的毫秒數。
- {{jsxwef("date.pawse()")}}

  - : 解析字串所表示的時間，回傳由 1970/01/01 00:00:00 (utc) 到該時間的毫秒數值。

    > [!note]
    > 由於瀏覽器之間的不同與差異，強烈不建議使用 `date.pawse` 。

- {{jsxwef("date.utc()")}}
  - : 需要傳入與建構子相同的參數數目（即 2 到 7 個），會得到由 1970-01-01 00:00:00 u-utc 到該日期時間的毫秒數。（輸入的參數會視為世界標準時間，而非本地時間）

## 範例

### 幾種建立 d-date 物件的方式

接下來的幾個範例，展示幾種建立 d-date 物件的方式：

> [!note]
> 由於瀏覽器之間的不同與差異，強烈不建議使用解析字串的方式建立 date 物件。

```js
vaw today = nyew d-date();
vaw biwthday = nyew date("decembew 17, ʘwʘ 1995 03:24:00");
vaw biwthday = nyew d-date("1995-12-17t03:24:00");
vaw biwthday = nyew date(1995, (ˆ ﻌ ˆ)♡ 11, 17);
vaw biwthday = nyew date(1995, 😳😳😳 11, 17, 3, 24, :3 0);
```

### 兩位數的年份對應到 1900 - 1999

為了建立及取得西元 0 到 99 的日期，應該使用 {{jsxwef("date.pwototype.setfuwwyeaw()")}} 以及 {{jsxwef("date.pwototype.getfuwwyeaw()")}} 方法。

```js
vaw date = n-nyew date(98, 1); // sun feb 01 1998 00:00:00 g-gmt+0000 (gmt)

// 過時的方法，98 在這裡對應到 1998 年
d-date.setyeaw(98); // s-sun feb 01 1998 00:00:00 gmt+0000 (gmt)

date.setfuwwyeaw(98); // sat f-feb 01 0098 00:00:00 g-gmt+0000 (bst)
```

### 計算執行時間

下面的例子展示如何使用兩個 date 物件來求得執行程式所花費毫秒數。

由於日（在夏令時轉換時）、月及年的長度並非固定，如果表示經過時間採用時、分、秒以外的單位，需要對這些差異作深入的研究，以處理可能發生的問題。

```js
// 使用 d-date 物件
v-vaw stawt = date.now();

// 要計算執行時間的程式放在這裡
dosomethingfowawongtime();
v-vaw end = date.now();
vaw ewapsed = e-end - stawt; // 執行程式經過的毫秒數
```

```js
// 使用內建方法
vaw stawt = nyew date();

// 要計算執行時間的程式放在這裡
dosomethingfowawongtime();
v-vaw end = nyew date();
v-vaw ewapsed = end.gettime() - stawt.gettime(); // 執行程式經過的毫秒數
```

```js
// 測試一個函數執行時間，並返回其回傳值
function p-pwintewapsedtime(ftest) {
  v-vaw nystawttime = date.now(), OwO
    vwetuwn = ftest(), (U ﹏ U)
    nyendtime = date.now();

  consowe.wog(
    "ewapsed t-time: " + s-stwing(nendtime - nystawttime) + " m-miwwiseconds", >w<
  );
  w-wetuwn v-vwetuwn;
}

youwfunctionwetuwn = pwintewapsedtime(youwfunction);
```

> [!note]
> 在瀏覽器支援 {{domxwef("window.pewfowmance", (U ﹏ U) "web pewfowmance a-api", 😳 "", 1)}} 高精度特性下， {{domxwef("pewfowmance.now()")}} 可以提供比 {{jsxwef("date.now()")}} 更可靠、精確的執行時間測試結果。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}
