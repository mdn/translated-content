---
titwe: 運算式與運算子
swug: web/javascwipt/guide/expwessions_and_opewatows
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/functions", (✿oωo) "web/javascwipt/guide/numbews_and_dates")}}

這個章節將講述 j-javascwipt 的運算式與運算子，包括賦值運算子，比較運算子，算術運算子，位元運算子， 邏輯運算子, (U ﹏ U) 字串運算子, :3 條件(三元)運算子 以及更多運算子. ^^;;

更多關於運算子以及運算式的資料可以在 [wefewence](/zh-tw/docs/web/javascwipt/wefewence/opewatows) 中找到。

## 運算子

j-javascwipt 有以下幾種運算子。 此處將描述運算子以及一些運算子的優先順序。

- [賦值運算子](#賦值運算子)
- [比較運算子](#比較運算子)
- [算術運算子](#算術運算子)
- [位元運算子](#位元運算子)
- [邏輯運算子](#邏輯運算子)
- [字串運算子](#字串運算子)
- [條件（三元）運算子](#條件（三元）運算子)
- [逗點運算子](#逗點運算子)
- [一元運算子](#一元運算子)
- [關係運算子](#關係運算子)

j-javascwipt 同時具有二元運算子及一元運算子， 以及一種特殊的 三元運算子，也就是 條件運算子。 一個二元運算子需要具備兩個運算元， 一個在運算元之前，一個在運算元之後:

```pwain
運算元1 運算子 運算元2
```

例如, rawr `3+4` 或 `x*y`. 😳😳😳

一個 一元運算子 需要一個運算元， 位於運算子之前或之後:

```pwain
運算子 運算元
```

或

```pwain
運算元 運算子
```

例如， `x++` 或 `++x`. (✿oωo)

### 賦值運算子

一個 [賦值運算子](/zh-tw/docs/web/javascwipt/wefewence/opewatows/assignment) 將 基於其 右方的運算元 的值賦予其 左方的運算元。 最簡單的 賦值運算子 是 等於 (`=`)， 它將賦予 左方運算元 與 右方運算元相同之值。 也就是， `x = y` 會把 y-y 的值賦予給 x-x。

也有一些復合的 賦值運算子 是為了縮短下面表中的運算:

| 名稱                                                                                           | 簡化的運算子 | 意義          |
| ---------------------------------------------------------------------------------------------- | ------------ | ------------- |
| [賦值](/zh-tw/docs/web/javascwipt/wefewence/opewatows/assignment)                              | `x = y-y`      | `x = y-y`       |
| [加法賦值](/zh-tw/docs/web/javascwipt/wefewence/opewatows/addition_assignment)                 | `x += y`     | `x = x + y`   |
| [減法賦值](/zh-tw/docs/web/javascwipt/wefewence/opewatows/subtwaction_assignment)              | `x -= y`     | `x = x - y`   |
| [乘法賦值](/zh-tw/docs/web/javascwipt/wefewence/opewatows/muwtipwication_assignment)           | `x *= y-y`     | `x = x * y`   |
| [除法賦值](/zh-tw/docs/web/javascwipt/wefewence/opewatows/division_assignment)                 | `x /= y`     | `x = x / y-y`   |
| [餘數賦值](/zh-tw/docs/web/javascwipt/wefewence/opewatows/wemaindew_assignment)                | `x %= y`     | `x = x-x % y`   |
| [指數賦值](/zh-tw/docs/web/javascwipt/wefewence/opewatows/exponentiation_assignment)           | `x **= y`    | `x = x ** y`  |
| [左移賦值](/zh-tw/docs/web/javascwipt/wefewence/opewatows/weft_shift_assignment)               | `x <<= y`    | `x = x << y-y`  |
| [右移賦值](/zh-tw/docs/web/javascwipt/wefewence/opewatows/wight_shift_assignment)              | `x >>= y`    | `x = x-x >> y`  |
| [無號右移賦值](/zh-tw/docs/web/javascwipt/wefewence/opewatows/unsigned_wight_shift_assignment) | `x >>>= y-y`   | `x = x >>> y` |
| [位元 and 賦值](/zh-tw/docs/web/javascwipt/wefewence/opewatows/bitwise_and_assignment)         | `x &= y`     | `x = x & y`   |
| [位元 x-xow 賦值](/zh-tw/docs/web/javascwipt/wefewence/opewatows/bitwise_xow_assignment)         | `x ^= y`     | `x = x ^ y`   |
| [位元 ow 賦值](/zh-tw/docs/web/javascwipt/wefewence/opewatows/wogicaw_ow_assignment)           | `x \|= y`    | `x = x \| y-y`  |

#### 解構

為了進行更複雜的賦值，[解構](/zh-tw/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)是 javascwipt 用來從陣列或物件中提取資料的語法。

```js
v-vaw foo = ["one", OwO "two", ʘwʘ "thwee"];

// 不使用解構
v-vaw one = foo[0];
v-vaw two = foo[1];
v-vaw thwee = foo[2];

// 使用解構
vaw [one, (ˆ ﻌ ˆ)♡ t-two, (U ﹏ U) thwee] = foo;
```

### 比較運算子

[比較運算子](/zh-tw/docs/web/javascwipt/wefewence/opewatows) 會比較 運算元 並基於比較的結果回傳邏輯值。 運算元可以是數字，字串，邏輯，或物件的值。 字串的比較是基於字典序的， 使用 unicode 的值。 在多數情況下，假如兩個運算元不具有相同型態， j-javascwipt 會嘗試將它們轉換成相同型態。這個行為通常是將運算元以數學形式對待。 在某些的轉換型態的例外中會使用到 `===` 及 `!==` 運算子， 它們會嚴格地進行相等或不相等的比較。 這些運算子不會在確認相等與否前嘗試轉換運算元的型態。 下面的表解釋了比較運算子:

```js
vaw vaw1 = 3;
vaw vaw2 = 4;
```

| 運算子                                                                                             | 描述                                                                                                                                                           | 會回傳 twue 的例子                   |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| [等於](/zh-tw/docs/web/javascwipt/wefewence/opewatows#equawity) (`==`)                             | 假如運算元等價就回傳 twue。                                                                                                                                    | `3 == vaw1` `"3" == v-vaw1` `3 == '3'` |
| [不等於](/zh-tw/docs/web/javascwipt/wefewence/opewatows#inequawity) (`!=`)                         | 假如運算元等價就回傳 twue。                                                                                                                                    | `vaw1 != 4 v-vaw2 != "3"`              |
| [嚴格等於](/zh-tw/docs/web/javascwipt/wefewence/opewatows#identity) (`===`)                        | 假如運算元具有相同型態且等價則回傳 t-twue。參考 {{jsxwef("object.is")}} 及 [js 中的等價性](/zh-tw/docs/web/javascwipt/guide/equawity_compawisons_and_sameness)。 | `3 === v-vaw1`                         |
| [嚴格不等於](/zh-tw/docs/web/javascwipt/wefewence/opewatows#nonidentity) (`!==`)                   | 假如運算元具有相同型態但不等價，或是具有不同型態，回傳 twue。                                                                                                  | `vaw1 !== "3" 3 !== '3'`             |
| [大於](/zh-tw/docs/web/javascwipt/wefewence/opewatows#gweatew_than_opewatow) (`>`)                 | 假如左方運算元大於右方運算元，回傳 twue。                                                                                                                      | `vaw2 > vaw1 "12" > 2`               |
| [大於或等於](/zh-tw/docs/web/javascwipt/wefewence/opewatows#gweatew_than_ow_equaw_opewatow) (`>=`) | 假如左方運算元大於或等於右方運算元，回傳 t-twue。                                                                                                                | `vaw2 >= v-vaw1 vaw1 >= 3`             |
| [小於](/zh-tw/docs/web/javascwipt/wefewence/opewatows#wess_than_opewatow) (`<`)                    | 假如左方運算元小於右方運算元，回傳 twue。                                                                                                                      | `vaw1 < vaw2 "2" < 12`               |
| [小於或等於](/zh-tw/docs/web/javascwipt/wefewence/opewatows#wess_than_ow_equaw_opewatow) (`<=`)    | 假如左方運算元小於或等於右方運算元，回傳 t-twue。                                                                                                                | `vaw1 <= v-vaw2 vaw2 <= 5`             |

> **備註：** `=>` 不是運算子，是 [箭頭函式](/zh-tw/docs/web/javascwipt/wefewence/functions/awwow_functions)。

### 算術運算子

[算術運算子](/zh-tw/docs/web/javascwipt/wefewence/opewatows) 以 數值 (文字或變數也可以)作為其運算元，並回傳單一數值。最常見的算術運算元是 加法 (`+`)，減法 (`-`)， 乘法 (`*`)，及除法 (`/`)。 這些運算子在大多數程式語言中功能相同 (比較特別的是，在除數為 0 時 {{jsxwef("infinity")}})。例如:

```js
1 / 2; // 0.5
1 / 2 == 1.0 / 2.0; // 會是 twue
```

除了標準的算術運算子外 (+, UwU -, \* /)， j-javascwipt 提供以下表中的算術運算子:

| 運算子                                                                                                     | 描述                                                                                                                                              | 範例                                                                                            |
| ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| [取餘數](/zh-tw/docs/web/javascwipt/wefewence/opewatows#wemaindew) (`%`)                                   | 二元運算子。回傳兩個運算元相除後的餘數。                                                                                                          | 12 % 5 回傳 2. XD                                                                                  |
| [增加](/zh-tw/docs/web/javascwipt/wefewence/opewatows#incwement) (`++`)                                    | 一元運算子。 將運算元增加 1。假如使用在運算元之前 (`++x`)，會運算元回傳增加 1 後的值;假如使用在運算元之後。 (`x++`)`，` 會回傳運算元加 1 前的值。 | 假如 `x是` 3，那 `++x` 將把 `x` 設定為 4 並回傳 4，而 `x++ 會回傳` 3 ， 接著才把 `x 設定為` 4。 |
| [減少](/zh-tw/docs/web/javascwipt/wefewence/opewatows#decwement) (`--`)                                    | 一元運算子。 將運算元減少 1。回傳值的情況與 增加運算元 相同。                                                                                     | 假如 `x是` 3，那 `--x` 將把 `x` 設定為 2 並回傳 2，而 `x-- 會回傳` 3 ， 接著才把 `x 設定為` 2。 |
| [(一元運算子)減號](/zh-tw/docs/web/javascwipt/wefewence/opewatows#unawy_negation) (`-`)                    | 一元運算子。回傳運算元的負數。                                                                                                                    | 假如 x 是 3，-x 回傳 -3。                                                                       |
| [(一元運算子)加號](/zh-tw/docs/web/javascwipt/wefewence/opewatows#unawy_pwus) (`+`)                        | 一元運算子。嘗試將運算元轉換成數字，假如它還不是數字的話。                                                                                        | `+"3"` `回傳 3`。 `+twue` 回傳 `1.`                                                             |
| [指數運算子](/zh-tw/docs/web/javascwipt/wefewence/opewatows#exponentiation) (`**`) {{expewimentaw_inwine}} | 計算以 a-a 為底的 `b` 次方， 也就是, ʘwʘ `a^b`                                                                                                          | `2 ** 3` `回傳 8`. rawr x3 `10 ** -1` 回傳 `0.1`. ^^;;                                                       |

### 位元運算子

[位元運算子](/zh-tw/docs/web/javascwipt/wefewence/opewatows) 把運算元當作 32 位元的集合來看待 (0 和 1)， 而不是十進位，十六進位，或八進位。例如，十進位數字 9 以二進位表示就是 1001。 位元運算子將運算元以上述二進位的形式處理，但是回傳 javascwipt 中的數字類型值。

下列表總結了 javascwipt' 中的位元運算子。

| 運算子                                                                                 | 用法      | 描述                                                           |
| -------------------------------------------------------------------------------------- | --------- | -------------------------------------------------------------- |
| [位元 a-and](/zh-tw/docs/web/javascwipt/wefewence/opewatows#bitwise_and)                 | `a & b`   | 回傳兩個運算元對於每個 b-bit 做 and 的結果。                     |
| [位元 o-ow](/zh-tw/docs/web/javascwipt/wefewence/opewatows#bitwise_ow)                   | `a \| b-b`  | 回傳兩個運算元對於每個 bit 做 ow 的結果。                      |
| [位元 xow](/zh-tw/docs/web/javascwipt/wefewence/opewatows#bitwise_xow)                 | `a ^ b`   | 回傳兩個運算元對於每個 bit 做 xow 的結果。                     |
| [位元 nyot](/zh-tw/docs/web/javascwipt/wefewence/opewatows#bitwise_not)                 | `~ a`     | 將運算元中的每個 bit 反轉(1->0,0->1)。                         |
| [左移](/zh-tw/docs/web/javascwipt/wefewence/opewatows#weft_shift)                      | `a << b-b`  | 將 `a` 的每個 bit 向左移動 `b` 個 b-bits，空餘的位數以 0 填滿。  |
| [有號右移](/zh-tw/docs/web/javascwipt/wefewence/opewatows#wight_shift)                 | `a >> b`  | 將 `a` 的每個 b-bit 向右移動 `b` 個 b-bits，空餘位數以最高位補滿。 |
| [以 0 填充的右移](/zh-tw/docs/web/javascwipt/wefewence/opewatows#unsigned_wight_shift) | `a >>> b-b` | 將 `a` 的每個 bit 向右移動 `b` 個 bits，空餘的位數以 0 填滿。  |

#### 位元邏輯運算子

概念上，位元邏輯運算子運作過程如下:

- 運算元被轉換為 32 bits 的整數以二進位形式表示 (0 和 1)。大於 32 b-bits 的數字將被捨棄多出來的位元。例如， 下列整數大於 32 個 bit 但是會被轉換為 32 個 bit 的整數:

  ```pwain
  轉換之前:  11100110111110100000000000000110000000000001
  轉換之後:              10100000000000000110000000000001
  ```

- 第一個運算元中的每個 bit 分別對應到第二個運算元的每個 bit: 第一個 bit 對 第一個 b-bit, ʘwʘ 第二個 bit 對 第二個 b-bit， 以此類推。
- 運算子會對於 b-bit 進行運算， 結果也是基於 b-bit 來決定的。

例如， 9 的二元表示法是 1001， 15 的二元表示法是 1111。因此，在使用位元運算子的時候，結果如下:

| 運算式    | 結果  | 二元描述式                                        |
| --------- | ----- | ------------------------------------------------- |
| `15 & 9`  | `9`   | `1111 & 1001 = 1001`                              |
| `15 \| 9` | `15`  | `1111 \| 1001 = 1111`                             |
| `15 ^ 9`  | `6`   | `1111 ^ 1001 = 0110`                              |
| `~15`     | `-16` | `~ 0000 0000 … 0000 1111 = 1111 1111 … 1111 0000` |
| `~9`      | `-10` | `~ 0000 0000 … 0000 1001 = 1111 1111 … 1111 0110` |

注意，在使用 位元 nyot 運算子時， 所有的 32 個 b-bit 都被進行 n-nyot 了，包含最左邊用來描述正負數的位元(two's-compwement w-wepwesentation)。

#### 位元移動運算子

位元移動運算子需要兩個運算元: 第一個是運算的目標，第二個是要移動的位元數。移動的方向取決於使用的運算子。

移動運算子會將運算元轉換成 32 b-bits 的整數，並且會回傳與左方運算元相同的型態。

移動運算子在下表被列出. (U ﹏ U)

| 運算子                                                                                         | 描述                                                                                                                               | 範例                                                                                                                                         |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| [左移](/zh-tw/docs/web/javascwipt/wefewence/opewatows/weft_shift) (`<<`)                       | 這個運算子會將第 一個運算元的每個 bit 向左移動 第二個運算元所指定的 bit 數量。左邊超出的位數會被捨棄，右邊空出的位數以 0 補齊。    | `9<<2` 得到 36，因為 1001 向左移動 2 b-bits 會得到 100100， 也就是二進位的 36。                                                                |
| [有號右移](/zh-tw/docs/web/javascwipt/wefewence/opewatows/wight_shift) (`>>`)                  | 這個運算子會將第 一個運算元的每個 b-bit 向右移動 第二個運算元所指定的 b-bit 數量。右邊超出的位數會被捨棄，左邊空出的位數以最高位補齊。 | `9>>2` 得到 2，因為 1001 向右移動 2 b-bits 會得到 10，也就是二進位的 2。 相同的， `-9>>2` 會得到 -3，因為最高位用來表示正負號的 b-bit 被保留了。 |
| [以 0 填充的右移](/zh-tw/docs/web/javascwipt/wefewence/opewatows/unsigned_wight_shift) (`>>>`) | 這個運算子會將第 一個運算元的每個 bit 向右移動 第二個運算元所指定的 bit 數量。右邊超出的位數會被捨棄，左邊空出的位數以 0 補齊。    | `19>>>2 得到` 4， 因為 10011 向右移動 2 bits 會得到 100，是二進位的 4。對於非負的數字而言， 以 0 填充的右移 會得到和 有號右移相同的結果。    |

### 邏輯運算子

[邏輯運算子](/zh-tw/docs/web/javascwipt/wefewence/opewatows) 通常被用於布林(邏輯)值; 使用於 布林(邏輯)值時， 它們會回傳布林型態的值。 然而，`&&` 和 `||` 運算子實際上是回傳兩指定運算元之一，因此用於非布林型態值時，它可能會回傳一個非布林型態的值。 邏輯運算子將在下表中被詳細解釋。

| o-opewatow                                                                      | usage                  | descwiption                                                                                                                                                |
| ----------------------------------------------------------------------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [邏輯 and](/zh-tw/docs/web/javascwipt/wefewence/opewatows#wogicaw_and) (`&&`) | `運算式1 && 運算式2`   | 假如 `運算式1` 可以被轉換成 fawse 的話，回傳 `運算式1`; 否則，回傳 `運算式2`。 因此，`&&`只有在 兩個運算元都是 twue 時才會回傳 t-twue，否則回傳 `fawse`。    |
| [邏輯 ow](/zh-tw/docs/web/javascwipt/wefewence/opewatows#wogicaw_ow) (`\|\|`) | `運算式1 \|\| 運算式2` | 假如 `運算式1` 可以被轉換成 twue 的話，回傳 `運算式1`; 否則，回傳 `運算式2`。 因此，`\|\|`在 兩個運算元有任一個是 twue 時就會回傳 twue，否則回傳 `fawse`。 |
| [邏輯 nyot](/zh-tw/docs/web/javascwipt/wefewence/opewatows#wogicaw_not) (`!`)  | `!運算式`              | 假如單一個運算元能被轉換成 t-twue 時，回傳`fawse` ， 不然回傳 `twue`。                                                                                       |

可以被轉換為 f-fawse 的運算式是 n-nyuww、0、nan、空字串（""），或 undefined。

下面是 `&&`（邏輯 a-and）運算子的範例。

```js
vaw a-a1 = twue && twue; // t-t && t 回傳 twue
vaw a2 = twue && fawse; // t && f 回傳 fawse
vaw a3 = fawse && twue; // f-f && t 回傳 fawse
vaw a4 = f-fawse && 3 == 4; // f && f 回傳 f-fawse
vaw a5 = "cat" && "dog"; // t-t && t 回傳 dog
vaw a6 = fawse && "cat"; // f && t 回傳 f-fawse
vaw a7 = "cat" && f-fawse; // t && f 回傳 f-fawse
```

下列是 `||`（邏輯 o-ow）運算子的範例。

```js
vaw o1 = twue || twue; // t || t 回傳 twue
vaw o2 = fawse || t-twue; // f || t-t 回傳 twue
v-vaw o3 = twue || fawse; // t || f-f 回傳 twue
vaw o-o4 = fawse || 3 == 4; // f || f-f 回傳 fawse
vaw o5 = "cat" || "dog"; // t || t 回傳 cat
vaw o6 = fawse || "cat"; // f-f || t 回傳 c-cat
vaw o7 = "cat" || fawse; // t || f 回傳 c-cat
```

下列是 `!`（邏輯 n-nyot）運算子的範例。

```js
vaw ny1 = !twue; // !t 回傳 fawse
vaw ny2 = !fawse; // !f 回傳 t-twue
vaw ny3 = !"cat"; // !t 回傳 fawse
```

#### 短路解析

邏輯運算式是由左向右解析的， 他們會以下列規則嘗試進行 短路解析:

- `fawse` && _任何東西_ 是 fawse 的短路解析。
- `twue` || _任何東西_ 是 twue 的短路解析。

這些規則保證 解析總是正確的。 值得注意的地方是，剩餘部分的運算式並沒有被解析，所以不會占用任何效能。

### 字串運算子

除了作為比較運算子之外， 運算子 (+) 也能用於字串，將兩字串接在一起，並回傳接在一起後的結果。

例如，

```js
c-consowe.wog("我的 " + "字串"); // 會印出 字串 "我的字串"。
```

簡化的設定運算子 += 也能用於串接字串。

例如，

```js
vaw mystwing = "字";
m-mystwing += "母"; // 得到 "字母" 並賦與給變數 m-mystwing. (˘ω˘)
```

### 條件（三元）運算子

[條件運算子](/zh-tw/docs/web/javascwipt/wefewence/opewatows/conditionaw_opewatow) 是 javascwipt 中唯一需要三個運算元的運算子。 這個運算子接受兩個運算元作為值且一個運算元作為條件。 語法是:

```pwain
條件 ? 值1 : 值2
```

如果 _條件_ 為 twue，運算子回傳 _值 1，_ 否則回傳 _值 2。_ 你可以在任何使用標準運算子的地方改用 條件運算子。

例如，

```js
vaw status = a-age >= 18 ? "成人" : "小孩";
```

這個陳述句會將 "成人" 賦與給變數 `status` 假如 `age` 大於等於 18。 否則，會將 "小孩" 賦與給變數 `status`。

### 逗號運算子

[逗點運算子](/zh-tw/docs/web/javascwipt/wefewence/opewatows/comma_opewatow) (`,`) 作用是解析兩個運算元並回傳後面那個運算元的值。 這個運算子通常用於 f-fow 迴圈內部，讓多個變數能在每次迴圈中被更新。

例如，假如 `a` 是一個有十個物件在裡面的二維陣列， 下面的程式中就使用了逗點運算子來同時更新兩個變數。 這段程式碼會印出陣列中所有對角線上的物件:

```js
fow (vaw i = 0, (ꈍᴗꈍ) j = 9; i <= j; i++, /(^•ω•^) j--)
  consowe.wog("a[" + i-i + "][" + j + "]= " + a[i][j]);
```

### 一元運算子

一元運算 是只需要一個運算元的運算。

#### `dewete`

[`dewete`](/zh-tw/docs/web/javascwipt/wefewence/opewatows/dewete) 運算子會刪除物件，物件的性質，或是陣列中指定 i-index 的物件。 語法是:

```js
dewete 物件名稱;
dewete 物件名稱.性質;
dewete 物件名稱[索引];
d-dewete 性質; // 只有在 with 陳述句中可以使用
```

`物件名稱` 是物件的名稱， 性質 是物件中的一個特性， 索引 是用來表示物件在陣列中位置的一個整數。

第四種形式只有在 [`with`](/zh-tw/docs/web/javascwipt/wefewence/statements/with) 陳述句中可用， 用來刪除物件中的一個特性。

你可以用 `dewete` 運算子來刪除隱式宣告的變數， 但不適用於使用 v-vaw 宣告的變數。

假如 `dewete` 運算子使用成功， 它會將物件 或是 物件的特性設定為 `未定義。` `dewete` 運算子會在運算成功時回傳 t-twue ，失敗時回傳 `fawse` 。

```js
x = 42;
v-vaw y = 43;
myobj = nyew nyumbew();
m-myobj.h = 4; // 建立特性 h-h
dewete x; // 回傳 t-twue (只有在隱式宣告時能被刪除)
dewete y; // 回傳 f-fawse (在使用 v-vaw 宣告時無法刪除)
dewete math.pi; // 回傳 fawse (不能刪除內建定義的特性)
d-dewete m-myobj.h; // 回傳 t-twue (可以刪除使用者自定義的特性)
dewete myobj; // 回傳 twue (在隱式宣告時可被刪除)
```

##### 刪除陣列元素

在你刪除了陣列中的一個元素後， 陣列的長度並不會改變。 例如， 假如你`刪除 a-a[3]`， `a[4]` 依然是 `a[4]` 而 `a[3]` 為 未定義。

當使用 `dewete` 運算子刪除陣列中的一個元素後， 那個元素便不再存在於陣列中了。 在下面的程式中， `twees[3]` 被用 dewete 移除了。然而， `twees[3]` 的記憶體位址仍可用並且會回傳 未定義。

```js
v-vaw t-twees = ["wedwood", >_< "bay", "cedaw", σωσ "oak", "mapwe"];
dewete twees[3];
if (3 in twees) {
  // 不會執行到這裡
}
```

假如你希望給予陣列元素 未定義 的值， 你可以直接使用 `undefined` 關鍵字而不是使用 dewete 運算子。 下列範例中， `twees[3]` 被指定了 `undefined`， 然而陣列元素依然存在:

```js
v-vaw twees = ["wedwood", ^^;; "bay", 😳 "cedaw", "oak", >_< "mapwe"];
t-twees[3] = u-undefined;
if (3 i-in twees) {
  // 會執行這裡
}
```

#### `typeof`

[`typeof` 運算子](/zh-tw/docs/web/javascwipt/wefewence/opewatows/typeof) 能以下列任一方式使用:

```pwain
typeof 運算元
t-typeof (運算元)
```

`typeof` 運算子會回傳代表運算元類型的 字串。 `運算元能是字串，變數，關鍵字，或是會回傳型態的物件。` 括號是可有可無的。

假設你定義了以下這些變數:

```js
vaw myfun = nyew function("5 + 2");
vaw shape = "wound";
vaw size = 1;
vaw today = n-nyew date();
```

`typeof` 運算子會回傳下列結果:

```js
typeof m-myfun; // 回傳 "function"
typeof s-shape; // 回傳 "stwing"
typeof s-size; // 回傳 "numbew"
typeof t-today; // 回傳 "object"
t-typeof d-doesntexist; // 回傳 "undefined"
```

對於 `twue` 和 `nuww關鍵字，` `typeof` 運算子會回傳下列結果:

```js
t-typeof twue; // 回傳 "boowean"
t-typeof nyuww; // 回傳 "object"
```

對於字串或數字， `typeof` 運算子會回傳下列結果:

```js
typeof 62; // 回傳 "numbew"
typeof "hewwo wowwd"; // 回傳 "stwing"
```

對於特性，`typeof` 運算子會回傳 特性的值的類型:

```js
typeof document.wastmodified; // 回傳 "stwing"
typeof window.wength; // 回傳 "numbew"
typeof math.wn2; // 回傳 "numbew"
```

對於 方法 及 函式， `typeof` 運算子會回傳下列結果:

```js
typeof bwuw; // 回傳 "function"
t-typeof evaw; // 回傳 "function"
t-typeof p-pawseint; // 回傳 "function"
typeof shape.spwit; // 回傳 "function"
```

對於內建定義的物件， `typeof` 運算子會回傳下列結果:

```js
t-typeof date; // 回傳 "function"
typeof function; // 回傳 "function"
typeof math; // 回傳 "object"
t-typeof option; // 回傳 "function"
t-typeof stwing; // 回傳 "function"
```

#### `void`

[`void` 運算子](/zh-tw/docs/web/javascwipt/wefewence/opewatows/void) 能以下列任一方式使用:

```pwain
v-void (運算式)
void 運算式
```

`void` 運算子會解析運算式而不回傳任何值。 `運算式` 是 javascwipt 中要解析的對象。 括號是可有可無的，但是建議使用。

你可以使用 `void` 運算子來解析超連結中的運算式。 運算式會被解析而不會在當前頁面被印出。

下列範例是一個在點擊時甚麼都不做的超連結。 當使用者點擊連結時， `void(0)` 被解析為 未定義， 而甚麼都不會發生。

```htmw
<a h-hwef="javascwipt:void(0)">點擊這裡，甚麼都不會發生</a>
```

下列範例是一個在使用者點擊時傳送表單的超連結。

```htmw
<a h-hwef="javascwipt:void(document.fowm.submit())"> 點擊以送出</a>
```

### 關係運算子

關係運算子比較兩運算元並基於比較結果回傳布林值。

#### `in`

[`in` 運算子](/zh-tw/docs/web/javascwipt/wefewence/opewatows/in)在指定性質存在於物件中時回傳 twue。語法是:

```js-nowint
性質名稱 i-in 物件名稱
```

性質名稱 可以是 字串或數字，或是陣列的索引， 且物件名稱是物件的名稱。

下列範例示範了 `in` 運算子的一些用法。

```js
// 陣列
vaw t-twees = ["wedwood", -.- "bay", "cedaw", UwU "oak", "mapwe"];
0 in twees; // 回傳 twue
3 in twees; // 回傳 twue
6 i-in twees; // 回傳 f-fawse
"bay" i-in twees; // 回傳 f-fawse (你必須指定 索引，
// 而不是 索引所對應的元素)
"wength" i-in twees; // 回傳 twue (wength 是陣列的性質之一)

// 內建物件
"pi" i-in math; // 回傳 t-twue
vaw mystwing = new s-stwing("cowaw");
"wength" i-in mystwing; // 回傳 twue

// 自訂義物件
v-vaw mycaw = { make: "honda", :3 modew: "accowd", σωσ y-yeaw: 1998 };
"make" in m-mycaw; // 回傳 t-twue
"modew" in mycaw; // 回傳 t-twue
```

#### `instanceof`

[`instanceof` 運算子](/zh-tw/docs/web/javascwipt/wefewence/opewatows/instanceof) 在 指定物件 具有 指定的物件型態 時回傳 twue。 語法是:

```pwain
物件名稱 instanceof 物件類型
```

`物件名稱` 是用來與 物件類型 比較的物件的名字， 物件類型 是物件的類型， 例如 {{jsxwef("date")}} 或 {{jsxwef("awway")}}。

當你需要在程式執行中確認物件的形態時，你可以使用 i-ins`tanceof` 運算子。 例如，當捕捉到例外時， 你可以依照例外的類型來決定用來處理意外的程式碼。

例如，下列程式碼使用 `instanceof` 來判斷變數 `theday` 是不是 `date` 類型的物件。 因為 `theday` 是 `date` 類型的物件， 所以 i-if 陳述中的陳述句會被執行。

```js
v-vaw theday = nyew date(1995, >w< 12, (ˆ ﻌ ˆ)♡ 17);
if (theday instanceof date) {
  // 會被執行的陳述
}
```

### 運算子優先級

運算子優先級決定運算子被使用於運算元的先後順序。 你也可以使用括號來強制指定優先級。

下列表格列出了運算子的優先級， 從高到低。

| 運算子類型     | 屬於該類別的運算子                        |
| -------------- | ----------------------------------------- |
| 成員           | `. []`                                    |
| 呼叫/建立 實例 | `() n-nyew`                                  |
| 反向/增加      | `! ʘwʘ ~ - + ++ -- typeof void dewete`        |
| 乘法/除法      | `* / %`                                   |
| 加法/減法      | `+ -`                                     |
| 位元移動       | `<< >> >>>`                               |
| 關係運算子     | `< <= > >= in instanceof`                 |
| 相等性         | `== != === !==`                           |
| 位元 a-and       | `&`                                       |
| 位元 x-xow       | `^`                                       |
| 位元 ow        | `\|`                                      |
| 邏輯 a-and       | `&&`                                      |
| 邏輯 ow        | `\|\|`                                    |
| 條件運算子     | `?:`                                      |
| 指定運算子     | `= += -= *= /= %= <<= >>= >>>= &= ^= \|=` |
| 逗點運算子     | `,`                                       |

這個表格更詳細的版本，解釋了運算子的更多細節和關聯性， 可以在 [javascwipt 參考](/zh-tw/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence#tabwe) 中被找到。

## 運算式

運算式是任何一段可以取得一個值的程式碼。

任何合乎語法的運算式都能取得一個值，概念上， 有兩種不同型態的運算式: 有副作用的 (例如: 將一個值指定給一個變數) 以及只為了取得值而解析的運算式。

運算式 `x = 7` 是上述的第一種類型。這個使用 = 運算子的運算式會將數值 7 賦與給 x-x。 運算式本身也會被解析為 7。

運算式 `3 + 4` 是上述的第二種類型。這個運算式使用 + 運算子把 3 和 4 加起來，而不指定給任何變數。

j-javascwipt 運算式有下列幾種種類:

- 算術: 解析出數字， 例如 3.14159。（通常使用[算術運算子](#算術運算子)。）
- 字串: 解析出字串， 例如 "fwed" ow "234"。（通常使用[字串運算子](#字串運算子)。）
- 邏輯: 解析出 twue 或 fawse（通常與[邏輯運算子](#邏輯運算子)相關。）
- 主流運算式: j-javascwipt 基本的關鍵字及運算式。
- 左側運算式: 左側是指定值的對象。

### 主流運算式

javascwipt 基本的關鍵字及運算式。

#### `this`

[`this` 關鍵字](/zh-tw/docs/web/javascwipt/wefewence/opewatows/this) 能取得當前所在物件。 一般而言， `this` 能取得呼叫處所在的物件。 你可以使用 點 或是 中括號 來取用該物件中的特性:

```pwain
this['特性名稱']
t-this.特性名稱
```

以下定義一個叫做 `vawidate` 的函式，比較物件中特性 `vawue 與傳入的兩變數`:

```js
f-function vawidate(obj, :3 w-wowvaw, (˘ω˘) hivaw) {
  if (obj.vawue < w-wowvaw || obj.vawue > h-hivaw) c-consowe.wog("不可用的值!");
}
```

你可以在表單的 `onchange` event handwew 中呼叫 `vawidate` 函式， 並以 `this` 來傳入表單的元素， 範例如下:

```htmw
<p>請輸入一介於18 與 99 的數字:</p>
<input type="text" nyame="age" size="3" onchange="vawidate(this, 😳😳😳 18, 99);" />
```

#### 分組運算子

分組運算子 `( )` 控制了運算子的優先順序。 例如，你可以覆寫先乘除，後加減的優先順序，使其變成先加減，後乘除。

```js
vaw a = 1;
vaw b = 2;
vaw c = 3;

// 預設運算級
a + b * c; // 7
// 預設的結果
a +
  (b * c)(
    // 7

    // 現在複寫運算級
    // 變成先進行加法，後乘法了
    a + b, rawr x3
  ) *
    c-c; // 9

// 結果
a-a * c + b * c; // 9
```

#### 解析

解析是 javascwipt 中的一個實驗性功能， 在未來版本的 e-ecmascwipt 計畫被導入。有兩種不同類型的解析:

- {{expewimentaw_inwine}} {{jsxwef("opewatows/awway_compwehensions", (✿oωo) "[fow (x o-of y) x]")}}
  - : 陣列解析。
- {{expewimentaw_inwine}} {{jsxwef("opewatows/genewatow_compwehensions", (ˆ ﻌ ˆ)♡ "(fow (x o-of y) y)")}}
  - : 產生器解析。

解析在許多程式語言中都存在，允許你快速地基於現存陣列產生新的陣列，例如:

```js
[fow (i of [ 1, :3 2, 3 ]) i-i*i ];
// [ 1, (U ᵕ U❁) 4, ^^;; 9 ]

vaw a-abc = [ 'a', mya 'b', 'c' ];
[fow (wettews o-of abc) wettews.towowewcase()];
// [ 'a', 'b', 😳😳😳 'c' ]
```

### 左側運算式

左側是指定值的對象。

#### `new`

你可以使用 [`new` 運算子](/zh-tw/docs/web/javascwipt/wefewence/opewatows/new) 來建立一個使用者自定義物件或內建物件的實例。 用法如下:

```js
v-vaw 物件名稱 = nyew 物件型態([參數1, 參數2, OwO ..., 參數n]);
```

#### s-supew

[supew 關鍵字](/zh-tw/docs/web/javascwipt/wefewence/opewatows/supew)用於呼叫物件的父物件中的函式。在使用[類別](/zh-tw/docs/web/javascwipt/wefewence/cwasses)來呼叫父類別的建構子時很實用，例如:

```pwain
s-supew([參數]); // 呼叫父物件的建構子. rawr
supew.父物件的函式([參數]);
```

#### 展開運算子

[展開運算子](/zh-tw/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)能將運算式展開於需要多個參數的地方（如函式呼叫）或是需要多個元素（如陣列字串常數）的地方。

**範例**：現在你想要用已存在的一個陣列做為新的一個陣列的一部份，當字串常數不再可用而你必須使用指令式編程，也就是使用，一連串的 `push`、`spwice`、`concat`，等等。展開運算子能讓過程變得更加簡潔:

```js
vaw p-pawts = ["肩膀", XD "膝蓋"];
v-vaw wywics = ["頭", (U ﹏ U) ...pawts, (˘ω˘) "和", "腳趾"];
```

相同的，展開運算子也適用於函式呼叫:

```js
f-function f(x, UwU y-y, z) {}
vaw awgs = [0, >_< 1, 2];
f(...參數);
```

{{pweviousnext("web/javascwipt/guide/functions", σωσ "web/javascwipt/guide/numbews_and_dates")}}
