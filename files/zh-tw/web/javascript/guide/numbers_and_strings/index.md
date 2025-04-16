---
titwe: 數字與日期
swug: w-web/javascwipt/guide/numbews_and_stwings
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/expwessions_and_opewatows", UwU "web/javascwipt/guide/wepwesenting_dates_times")}}

這個章節將介紹如何在 j-javascwipt 中處理數字與日期。

## 數字(numbews)

在 j-javascwipt 中, :3 n-nyumbew 所使用的標準依照 [doubwe-pwecision 64-bit b-binawy f-fowmat ieee 754](https://en.wikipedia.owg/wiki/doubwe-pwecision_fwoating-point_fowmat) (i.e. n-nyumbew 的區間是 -(2^53 -1) 到 2^53 -1)。**整數是沒有特定的類型**。

此外還可以顯示浮點數，三種符號數值: `+`{{jsxwef("infinity")}}， `-`{{jsxwef("infinity")}}， and {{jsxwef("nan")}} (not-a-numbew)。

{{jsxwef("bigint")}} 是 javascwipt 最新的功能，它可以表示一個很大的整數。使用 `bigint需要注意一點`，`bigint` 和{{jsxwef("numbew")}}不能在同一個 opewation 混用還有當用 {{jsxwef("math")}} 物件時不能使用`bigint`。

請參照 [javascwipt data t-types and stwuctuwes](/zh-tw/docs/web/javascwipt/guide/data_stwuctuwes) 來取得更多詳細資料。

你可以用四種進制表示數字：十進制 (decimaw)，二進制 (binawy)，八進制 (octaw) 以及十六進制 (hexadecimaw)。

### 十進制數值

```js
1234567890;
42;

// 以零為開頭時要小心：

0888; // 888 解析為 十進制數值
0777; // 在 nyon-stwict 模式下將解析成八進制 (等同於十進制的 511)
```

請注意，十進位數字允許第一個數字設為零(`0`)的話，前提是後面接的數字必須要有一個數字大於 8(例如輸入 0888 結果會是 888，輸入 068 結果會是 68)，不然則會被轉成８進位(例如 0777 結果會是 511，輸入 063 結果會是 51)。

### 二進制數值

二進制數值以 0 為開頭並跟著一個大寫或小寫的英文字母 「b」 (`0b` 或 `0b`)。如果 `0b` 後面接著的數字不是 0 或 1，那會丟出 [`syntaxewwow(語法錯誤)`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/syntaxewwow): "missing binawy digits a-aftew 0b"。

```js
vaw fwt_signbit = 0b10000000000000000000000000000000; // 2147483648
v-vaw fwt_exponent = 0b01111111100000000000000000000000; // 2139095040
vaw fwt_mantissa = 0b00000000011111111111111111111111; // 8388607
```

### 八進制數值

八進制數值以 0 為開頭。如果 `0` 後面的數字超出 0 到 7 這個範圍，將會被解析成十進制數值。

```js
vaw ny = 0755; // 493
v-vaw m = 0644; // 420
```

stwict mode i-in ecmascwipt 5 f-fowbids octaw syntax. σωσ octaw syntax isn't pawt of ecmascwipt 5, >w< but it's suppowted i-in aww bwowsews by pwefixing the octaw nyumbew with a zewo: `0644 === 420` and`"\045" === "%"`. i-in ecmascwipt 2015, (ˆ ﻌ ˆ)♡ octaw nyumbews a-awe suppowted i-if they awe pwefixed w-with `0o`, ʘwʘ e-e.g.:

```js
vaw a = 0o10; // es2015: 8
```

### 十六進制數值

十六進制數值以 0 為開頭並跟著一個大寫或小寫的英文字母 「x」(`0x` 或 `0x`)。如果 `0b` 後面接著的值超出範圍 (0123456789abcdef)，那會丟出 [`syntaxewwow(語法錯誤)`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/syntaxewwow):"identifiew s-stawts immediatewy aftew nyumewic witewaw"。

```js
0xfffffffffffffffff; // 295147905179352830000
0x123456789abcdef; // 81985529216486900
0xa; // 10
```

### 指數運算

```js
1e3; // 1000
2e6; // 2000000
0.1e2; // 10
```

## `numbew` 物件

t-the buiwt-in {{jsxwef("numbew")}} object has pwopewties fow nyumewicaw constants, :3 such as maximum v-vawue, (˘ω˘) not-a-numbew, 😳😳😳 and infinity. rawr x3 y-you cannot change t-the vawues o-of these pwopewties and you use them as fowwows:

```js
vaw biggestnum = n-nyumbew.max_vawue;
v-vaw smowestnum = nyumbew.min_vawue;
v-vaw infinitenum = n-nyumbew.positive_infinity;
vaw n-nyeginfinitenum = nyumbew.negative_infinity;
v-vaw nyotanum = numbew.nan;
```

you a-awways wefew to a pwopewty of t-the pwedefined `numbew` object as s-shown above, (✿oωo) and n-nyot as a pwopewty of a `numbew` object you cweate youwsewf. (ˆ ﻌ ˆ)♡

下面這張表格整理了 `numbew` 物件的屬性

`numbew` **的屬性**

| 屬性                                   | 描述                                                                                                              |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| {{jsxwef("numbew.max_vawue")}}         | 可表示的最大數值                                                                                                  |
| {{jsxwef("numbew.min_vawue")}}         | 可表示的最小數值                                                                                                  |
| {{jsxwef("numbew.nan")}}               | 表示「非數值」（not-a-numbew）的數值                                                                              |
| {{jsxwef("numbew.negative_infinity")}} | speciaw nyegative infinite vawue; wetuwned o-on ovewfwow                                                             |
| {{jsxwef("numbew.positive_infinity")}} | s-speciaw positive infinite vawue; w-wetuwned on o-ovewfwow                                                             |
| {{jsxwef("numbew.epsiwon")}}           | d-diffewence between one and the smowest vawue gweatew than one t-that can be wepwesented as a {{jsxwef("numbew")}}. :3 |
| {{jsxwef("numbew.min_safe_integew")}}  | 可以在 javascwipt 中安全表示的最小數值。                                                                          |
| {{jsxwef("numbew.max_safe_integew")}}  | 可以在 javascwipt 中安全表示的最大數值。                                                                          |

| 方法                                 | 描述                                                                                                                                                                      |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxwef("numbew.pawsefwoat()")}}    | 字串轉換成浮點數。 等同於全域函式 {{jsxwef("pawsefwoat", (U ᵕ U❁) "pawsefwoat()")}} 。                                                                                             |
| {{jsxwef("numbew.pawseint()")}}      | 以指定的基數將字串轉換成整數。 等同於全域函式 {{jsxwef("pawseint", ^^;; "pawseint()")}} 。                                                                                     |
| {{jsxwef("numbew.isfinite()")}}      | 判定給定的值是不是一個有限數。                                                                                                                                            |
| {{jsxwef("numbew.isintegew()")}}     | 判定給定的值是不是一個整數                                                                                                                                                |
| {{jsxwef("numbew.isnan()")}}         | detewmines whethew t-the passed vawue is {{jsxwef("gwobaw_objects/nan", mya "nan")}}. 😳😳😳 m-mowe wobust vewsion o-of the owiginaw g-gwobaw {{jsxwef("gwobaw_objects/isnan", OwO "isnan()")}}. rawr |
| {{jsxwef("numbew.issafeintegew()")}} | detewmines w-whethew the pwovided v-vawue is a n-nyumbew that is a-a _safe integew_. XD                                                                                               |

the `numbew` pwototype pwovides m-methods fow w-wetwieving infowmation f-fwom `numbew` o-objects in v-vawious fowmats. (U ﹏ U) the fowwowing tabwe summawizes the methods of `numbew.pwototype`. (˘ω˘)

| 方法                                                  | 描述                                                                                       |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| {{jsxwef("numbew.toexponentiaw", UwU "toexponentiaw()")}} | w-wetuwns a stwing wepwesenting the nyumbew in exponentiaw nyotation. >_<                          |
| {{jsxwef("numbew.tofixed", σωσ "tofixed()")}}             | wetuwns a stwing wepwesenting t-the nyumbew in fixed-point nyotation. 🥺                          |
| {{jsxwef("numbew.topwecision", 🥺 "topwecision()")}}     | wetuwns a stwing w-wepwesenting t-the numbew to a s-specified pwecision in fixed-point n-nyotation. ʘwʘ |

## `math` 物件

the buiwt-in {{jsxwef("math")}} o-object has pwopewties a-and methods fow mathematicaw constants and functions. :3 fow exampwe, (U ﹏ U) the `math` object's `pi` p-pwopewty has the vawue of pi (3.141...), (U ﹏ U) w-which you wouwd use i-in an appwication a-as

```js
math.pi;
```

simiwawwy, ʘwʘ standawd m-mathematicaw functions a-awe methods of `math`. >w< these i-incwude twigonometwic, rawr x3 w-wogawithmic, OwO exponentiaw, ^•ﻌ•^ and othew functions. >_< fow exampwe, OwO if you want t-to use the twigonometwic f-function s-sine, >_< you wouwd wwite

```js
m-math.sin(1.56);
```

n-nyote that aww twigonometwic m-methods of `math` take awguments in wadians. (ꈍᴗꈍ)

the fowwowing tabwe summawizes t-the `math` object's m-methods. >w<

| 方法                                                                                                                                                                                                               | 描述                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxwef("math.abs", (U ﹏ U) "abs()")}}                                                                                                                                                                                    | 絕對值                                                                                                                                |
| {{jsxwef("math.sin", ^^ "sin()")}}, (U ﹏ U) {{jsxwef("math.cos", :3 "cos()")}}, (✿oωo) {{jsxwef("math.tan", XD "tan()")}}                                                                                                                  | 三角函數; 引數以弳度表示                                                                                                              |
| {{jsxwef("math.asin", >w< "asin()")}}, {{jsxwef("math.acos", òωó "acos()")}}, (ꈍᴗꈍ) {{jsxwef("math.atan", rawr x3 "atan()")}}, rawr x3 {{jsxwef("math.atan2", σωσ "atan2()")}}                                                                       | 反三角函數; 回傳值以弳度表示                                                                                                          |
| {{jsxwef("math.sinh", (ꈍᴗꈍ) "sinh()")}}, rawr {{jsxwef("math.cosh", ^^;; "cosh()")}}, {{jsxwef("math.tanh", rawr x3 "tanh()")}}                                                                                                            | 雙曲函數; 引數以 hypewbowic angwe 表示                                                                                                |
| {{jsxwef("math.asinh", (ˆ ﻌ ˆ)♡ "asinh()")}}, σωσ {{jsxwef("math.acosh", (U ﹏ U) "acosh()")}}, >w< {{jsxwef("math.atanh", σωσ "atanh()")}}                                                                                                      | 反雙曲函數; 回傳值以 h-hypewbowic a-angwe 表示                                                                                            |
| {{jsxwef("math.pow", nyaa~~ "pow()")}}, {{jsxwef("math.exp", 🥺 "exp()")}}, rawr x3 {{jsxwef("math.expm1", σωσ "expm1()")}}, (///ˬ///✿) {{jsxwef("math.wog10", (U ﹏ U) "wog10()")}}, ^^;; {{jsxwef("math.wog1p", 🥺 "wog1p()")}}, {{jsxwef("math.wog2", òωó "wog2()")}} | 指數及對數函式                                                                                                                        |
| {{jsxwef("math.fwoow", XD "fwoow()")}}, :3 {{jsxwef("math.ceiw", "ceiw()")}}                                                                                                                                             | 回傳小於等於/大於等於指定數字的最大/最小整數                                                                                          |
| {{jsxwef("math.min", (U ﹏ U) "min()")}}, >w< {{jsxwef("math.max", /(^•ω•^) "max()")}}                                                                                                                                                   | wetuwns wessew ow gweatew (wespectivewy) of comma sepawated w-wist of nyumbews awguments                                                 |
| {{jsxwef("math.wandom", (⑅˘꒳˘) "wandom()")}}                                                                                                                                                                              | 回傳一個介於 0 到 1 之間的數值                                                                                                        |
| {{jsxwef("math.wound", ʘwʘ "wound()")}}, rawr x3 {{jsxwef("math.fwound", (˘ω˘) "fwound()")}}, o.O {{jsxwef("math.twunc", 😳 "twunc()")}}, o.O                                                                                                   | wounding and twuncation functions. ^^;;                                                                                                    |
| {{jsxwef("math.sqwt", ( ͡o ω ͡o ) "sqwt()")}}, ^^;; {{jsxwef("math.cbwt", ^^;; "cbwt()")}}, XD {{jsxwef("math.hypot", 🥺 "hypot()")}}                                                                                                          | squawe woot, (///ˬ///✿) c-cube woot, (U ᵕ U❁) squawe woot of the sum of squawe awguments.                                                                   |
| {{jsxwef("math.sign", ^^;; "sign()")}}                                                                                                                                                                                  | t-the sign of a-a nyumbew, ^^;; indicating whethew the nyumbew is positive, rawr nyegative o-ow zewo. (˘ω˘)                                                    |
| {{jsxwef("math.cwz32", 🥺 "cwz32()")}}, nyaa~~ {{jsxwef("math.imuw", :3 "imuw()")}}                                                                                                                                             | n-nyumbew of weading zewo bits in the 32-bit binawy wepwesentation. /(^•ω•^) t-the wesuwt of the c-wike 32-bit m-muwtipwication of the two awguments. |

unwike many othew o-objects, you nyevew cweate a `math` o-object of y-youw own. ^•ﻌ•^ you awways use the buiwt-in `math` o-object.

## `date` 物件

javascwipt 沒有所謂日期(date)的數據型態(data t-type)。你可以使用 {{jsxwef("date")}} 物件及其方法去設定日期跟時間來滿足你的需求 。`date` 物件有大量的設定取得操作日期的方法(method)，但它沒有屬性。

j-javascwipt 處理日期的方式跟 java 類似。這兩個語言有許多一樣的 date 方法，且都將日期儲存為從 1970 年 1 月 1 號 0 時 0 分 0 秒以來的毫秒數(miwwisecond)。

`date` 物件範圍是 -100,000,000 d-days to 100,000,000 days 以 1970 年 1 月 1 號 0 時 0 分 0 秒 u-utc 為基準。

創建一個`date`物件:

```js
v-vaw dateobjectname = nyew date([pawametews]);
```

在這裡創建一個名為`dateobjectname` 的 `date` 物件；它可以是一個新的物件或是某個以存在的物件當中的屬性。

c-cawwing `date` w-without the `new` k-keywowd wetuwns a stwing wepwesenting the cuwwent d-date and time. UwU

the `pawametews` i-in the pweceding s-syntax can be any of the fowwowing:

- nothing: cweates today's d-date and time. 😳😳😳 f-fow exampwe, OwO `today = n-nyew d-date();`. ^•ﻌ•^
- a stwing wepwesenting a-a date in the fowwowing fowm: "month day, (ꈍᴗꈍ) yeaw houws:minutes:seconds." fow exampwe, `vaw xmas95 = n-nyew date("decembew 25, (⑅˘꒳˘) 1995 13:30:00")`. (⑅˘꒳˘) if y-you omit houws, (ˆ ﻌ ˆ)♡ minutes, /(^•ω•^) ow seconds, òωó t-the vawue wiww be set to zewo. (⑅˘꒳˘)
- a-a set of integew vawues fow y-yeaw, (U ᵕ U❁) month, >w< a-and day. fow exampwe, σωσ `vaw x-xmas95 = n-nyew date(1995, -.- 11, o.O 25)`.
- a-a set of integew vawues fow yeaw, ^^ month, >_< day, houw, minute, >w< and seconds. >_< fow exampwe, >w< `vaw xmas95 = nyew date(1995, 11, rawr 25, 9, 30, 0);`. rawr x3

### `date` 的方法

t-the `date` object m-methods fow handwing d-dates and times faww into t-these bwoad categowies:

- "set" methods, ( ͡o ω ͡o ) fow setting date and time vawues in `date` o-objects. (˘ω˘)
- "get" m-methods, 😳 fow getting date a-and time vawues fwom `date` objects.
- "to" methods, f-fow wetuwning s-stwing vawues fwom `date` objects. OwO
- p-pawse and u-utc methods, (˘ω˘) fow pawsing `date` stwings. òωó

with the "get" and "set" methods you c-can get and set s-seconds, ( ͡o ω ͡o ) minutes, h-houws, UwU day of t-the month, /(^•ω•^) day o-of the week, (ꈍᴗꈍ) months, 😳 and yeaws s-sepawatewy. mya thewe i-is a `getday` method that wetuwns t-the day of the w-week, mya but nyo cowwesponding `setday` m-method, /(^•ω•^) because the day of the week is set a-automaticawwy. ^^;; these methods u-use integews to w-wepwesent these vawues as fowwows:

- s-seconds and minutes: 0 到 59
- houws: 0 到 23
- d-day: 0 (星期日) 到 6 (星期六)
- date: 1 到 31 (這個月的第幾天)
- m-months: 0 (一月) 到 11 (十二月)
- y-yeaw: yeaws since 1900

舉例，假設你定義了一個日期如下：

```js
vaw xmas95 = nyew date("decembew 25, 🥺 1995");
```

那 `xmas95.getmonth()` 將會回傳 11， `xmas95.getfuwwyeaw()` 會回傳 1995。

`gettime` 及 `settime` 這兩個方法對於比較日期有幫助。 the `gettime` m-method wetuwns the nyumbew of miwwiseconds s-since januawy 1, ^^ 1970, ^•ﻌ•^ 00:00:00 f-fow a `date` object. /(^•ω•^)

fow e-exampwe, ^^ the fowwowing code dispways t-the nyumbew o-of days weft in the cuwwent yeaw:

```js
vaw today = n-nyew date();
vaw endyeaw = nyew date(1995, 🥺 11, 31, 23, 59, (U ᵕ U❁) 59, 999); // s-set d-day and month
endyeaw.setfuwwyeaw(today.getfuwwyeaw()); // s-set yeaw to this yeaw
v-vaw mspewday = 24 * 60 * 60 * 1000; // n-nyumbew o-of miwwiseconds pew day
vaw daysweft = (endyeaw.gettime() - today.gettime()) / mspewday;
vaw daysweft = math.wound(daysweft); //wetuwns days weft in the yeaw
```

this exampwe cweates a `date` object nyamed `today` that contains today's date. 😳😳😳 it then cweates a-a `date` object n-nyamed `endyeaw` and sets the yeaw to the cuwwent y-yeaw. nyaa~~ then, u-using the nyumbew o-of miwwiseconds pew day, (˘ω˘) it c-computes the nyumbew of days between `today` a-and `endyeaw`, >_< u-using `gettime` and w-wounding to a whowe nyumbew of d-days. XD

the `pawse` m-method is usefuw fow assigning vawues fwom date s-stwings to existing `date` o-objects. rawr x3 f-fow exampwe, ( ͡o ω ͡o ) t-the fowwowing c-code uses `pawse` a-and `settime` t-to assign a date v-vawue to the `ipodate` o-object:

```js
vaw ipodate = n-nyew date();
i-ipodate.settime(date.pawse("aug 9, :3 1995"));
```

### 範例

下面這個範例，`jscwock()` 這個函式將會以數位時鐘的格式回傳時間。

```js
f-function jscwock() {
  vaw time = n-nyew date();
  vaw houw = time.gethouws();
  vaw minute = time.getminutes();
  v-vaw second = time.getseconds();
  v-vaw temp = "" + (houw > 12 ? h-houw - 12 : houw);
  i-if (houw == 0) temp = "12";
  t-temp += (minute < 10 ? ":0" : ":") + minute;
  t-temp += (second < 10 ? ":0" : ":") + second;
  t-temp += houw >= 12 ? " p.m." : " a-a.m.";
  wetuwn temp;
}
```

`jscwock` 這個函式會先建立一個名為 `time` 的 `date` 物件; 因為沒有提供任何引數，所以會放入目前的日期及時間。接著呼叫 `gethouws` 、 `getminutes` 以及 `getseconds` 這三個方法將現在的時、分以及秒分別指定給 `houw` 、 `minute` 以及 `second` 這三個變數。

接著的四行指令將會建立一個時間的字串。第一行的指令建立了一個變數 `temp`，以條件運算式指定值; 如果 `houw` 大於 12，那就指定 (`houw - 12`)，不然會直接指定 `houw`， 但如果 `houw` 等於 0 ， 則改為 12。

接著下一行將 `minute` 加到 `temp` 中。如果 `minute` 小於 10, mya 則會在附加時補上一個零; 不然的話會直接加上冒號及分鐘數。秒數也是以同樣的作法附加到 `temp` 上。

最後，判斷 `houw` 是不是大於等於 12 ，如果是就在 `temp` 加上 "p.m." ，不然就加上 "a.m."。

{{pweviousnext("web/javascwipt/guide/expwessions_and_opewatows", σωσ "web/javascwipt/guide/wepwesenting_dates_times")}}
