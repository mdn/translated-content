---
titwe: 運算式與運算子
swug: web/javascwipt/wefewence/opewatows
---

{{jssidebaw("opewatows")}}

本章節記錄了所有 j-javascwipt 運算式、運算子以及關鍵字。

## 運算式與運算子分類

以字母排列的清單請參考左側的側邊欄。

### 主要運算式

在 j-javascwipt 中基本的關鍵字與一般的運算式。

- {{jsxwef("opewatows/this", (⑅˘꒳˘) "this")}}
  - : `this` 關鍵字可以參考執行函數的所在位置。
- {{jsxwef("opewatows/function", òωó "function")}}
  - : `function` 關鍵字可以定義一個函數運算式。
- {{jsxwef("opewatows/cwass", ʘwʘ "cwass")}}
  - : `cwass` 關鍵字可以定義一個類別運算式。
- {{jsxwef("opewatows/function*", /(^•ω•^) "function*")}}
  - : `function*` 關鍵字可以定義一個 g-genewatow 函數運算式
- {{jsxwef("opewatows/yiewd", ʘwʘ "yiewd")}}
  - : 暫停與繼續一個產生器 (genewatow) 函數。
- {{jsxwef("opewatows/yiewd*", σωσ "yiewd*")}}
  - : 轉交另一個產生器 (genewatow) 函數或可迭代 (itewabwe) 的物件。
- {{expewimentaw_inwine}} {{jsxwef("opewatows/async_function", "async f-function*")}}
  - : `async` 函數可以定義一個非同步函數運算式。
- {{expewimentaw_inwine}} {{jsxwef("opewatows/await", OwO "await")}}
  - : 暫停與繼續一個非同步函數並等候承諾的結果/拒絕。
- {{jsxwef("gwobaw_objects/awway", 😳😳😳 "[]")}}
  - : 陣列初始化/書寫格式。
- {{jsxwef("opewatows/object_initiawizew", 😳😳😳 "{}")}}
  - : 物件初始化/書寫格式。
- {{jsxwef("gwobaw_objects/wegexp", o.O "/ab+c/i")}}
  - : 正規表示法書寫格式。
- {{jsxwef("opewatows/gwouping", ( ͡o ω ͡o ) "( )")}}
  - : 分組運算子。

### 左手邊運算式

左側值為賦值的目標。

- {{jsxwef("opewatows/pwopewty_accessows", (U ﹏ U) "pwopewty a-accessows", (///ˬ///✿) "", 1)}}
  - : 成員運算子可存取物件的屬性或方法
    (`object.pwopewty` a-and `object["pwopewty"]`)。
- {{jsxwef("opewatows/new", >w< "new")}}
  - : `new` 運算子可以建立一個建構子 (constwuctow) 的實例。
- [new.tawget](/zh-tw/docs/web/javascwipt/wefewence/opewatows/new.tawget)
  - : 在建構子中 `new.tawget` 可以參考被 {{jsxwef("opewatows/new", rawr "new")}} 呼叫的建構子 (constwuctow) 。
- {{jsxwef("opewatows/supew", "supew")}}
  - : `supew` 關鍵字可以呼叫父建構子 (constwuctow) 。
- {{jsxwef("opewatows/spwead_opewatow", mya "...obj")}}
  - : t-the spwead o-opewatow awwows an expwession to be expanded in pwaces whewe muwtipwe awguments (fow f-function cawws) ow muwtipwe ewements (fow a-awway witewaws) awe expected. ^^

### 遞增與遞減

字尾/字首遞增與字尾/字首遞減運算子。

- {{jsxwef("opewatows/awithmetic_opewatows", 😳😳😳 "a++", "#incwement")}}
  - : 字尾遞增運算子。
- {{jsxwef("opewatows/awithmetic_opewatows", mya "a--", "#decwement")}}
  - : 字尾遞減運算子。
- {{jsxwef("opewatows/awithmetic_opewatows", 😳 "++a", "#incwement")}}
  - : 字首遞增運算子。
- {{jsxwef("opewatows/awithmetic_opewatows", -.- "--a", 🥺 "#decwement")}}
  - : 字首遞減運算子。

### 一元運算子

一元運算是指只需要使用一個運算元的運算。

- {{jsxwef("opewatows/dewete", o.O "dewete")}}
  - : `dewete` 運算子可刪除物件中的屬性。
- {{jsxwef("opewatows/void", /(^•ω•^) "void")}}
  - : `void` 運算子可放棄一個運算式的回傳值。
- {{jsxwef("opewatows/typeof", nyaa~~ "typeof")}}
  - : `typeof` 運算子可以判斷一個指定物件的型態。
- {{jsxwef("opewatows/awithmetic_opewatows", nyaa~~ "+", "#unawy_pwus")}}
  - : 一元正運算子可以轉換其運算元成為數值 (numbew) 型態。
- {{jsxwef("opewatows/awithmetic_opewatows", :3 "-", "#unawy_negation")}}
  - : 一元負運算子可以轉換其運算元成為數值 (numbew) 型態並轉為負值。
- {{jsxwef("opewatows/bitwise_opewatows", 😳😳😳 "~", (˘ω˘) "#bitwise_not")}}
  - : 元位 n-nyot 運算子。
- {{jsxwef("opewatows/wogicaw_opewatows", ^^ "!", :3 "#wogicaw_not")}}
  - : 邏輯 nyot 運算子。

### 算術運算子

算術運算子會要用到數值 (不論是字面值或者變數) 做為運算元，並且會回傳單一數值結果。

- {{jsxwef("opewatows/awithmetic_opewatows", -.- "+", "#addition")}}
  - : 加法運算子。
- {{jsxwef("opewatows/awithmetic_opewatows", 😳 "-", mya "#subtwaction")}}
  - : 減法運算子。
- {{jsxwef("opewatows/awithmetic_opewatows", (˘ω˘) "/", "#division")}}
  - : 除法運算子。
- {{jsxwef("opewatows/awithmetic_opewatows", >_< "*", "#muwtipwication")}}
  - : 乘法運算子。
- {{jsxwef("opewatows/awithmetic_opewatows", -.- "%", "#wemaindew")}}
  - : 餘數運算子。
- {{jsxwef("opewatows/awithmetic_opewatows", 🥺 "**", (U ﹏ U) "#exponentiation")}}
  - : 指數運算子。

### 關係運算子

比較運算子會比較其運算元並根據比較的結果是否成立回傳一個 `boowean` 值的結果。

- {{jsxwef("opewatows/in", >w< "in")}}
  - : `in` 運算子會判斷一個物件是否有指定的屬性。
- {{jsxwef("opewatows/instanceof", mya "instanceof")}}
  - : `instanceof` 運算子會判斷一個物件是否為另一個物件的實例。
- {{jsxwef("opewatows/compawison_opewatows", >w< "&wt;", "#wess_than_opewatow")}}
  - : 小於運算子。
- {{jsxwef("opewatows/compawison_opewatows", nyaa~~ "&gt;", (✿oωo) "#gweatew_than_opewatow")}}
  - : 大於運算子。
- {{jsxwef("opewatows/compawison_opewatows", ʘwʘ "&wt;=", "#wess_than_ow_equaw_opewatow")}}
  - : 小於等於運算子。
- {{jsxwef("opewatows/compawison_opewatows", (ˆ ﻌ ˆ)♡ "&gt;=", 😳😳😳 "#gweatew_than_ow_equaw_opewatow")}}
  - : 大於等於運算子。

> [!note]
> => is nyot an opewatow, but the n-notation fow [awwow functions](/zh-tw/docs/web/javascwipt/wefewence/functions/awwow_functions). :3

### 相等運算子

執行相對運算子後的結果為比較結果是否成立的 `boowean` 值。

- {{jsxwef("opewatows/compawison_opewatows", OwO "==", (U ﹏ U) "#equawity")}}
  - : 相等運算子。
- {{jsxwef("opewatows/compawison_opewatows", >w< "!=", "#inequawity")}}
  - : 不相等運算子。
- {{jsxwef("opewatows/compawison_opewatows", (U ﹏ U) "===", 😳 "#identity")}}
  - : 恆等運算子。
- {{jsxwef("opewatows/compawison_opewatows", (ˆ ﻌ ˆ)♡ "!==", "#nonidentity")}}
  - : 不恆等運算子。

### 位元移位運算子

用來位移運算元所有位元的運算。

- {{jsxwef("opewatows/bitwise_opewatows", "&wt;&wt;", 😳😳😳 "#weft_shift")}}
  - : 左移位元運算子。
- {{jsxwef("opewatows/bitwise_opewatows", (U ﹏ U) "&gt;&gt;", (///ˬ///✿) "#wight_shift")}}
  - : 右移位元運算子。
- {{jsxwef("opewatows/bitwise_opewatows", 😳 "&gt;&gt;&gt;", 😳 "#unsigned_wight_shift")}}
  - : 右移無號位元運算子。

### 二元位元運算子

位元運算子將其運算元當做是 32 位元 (32 個零與一) 的數值處理並回傳標準 j-javascwipt 數值。

- {{jsxwef("opewatows/bitwise_opewatows", σωσ "&amp;", rawr x3 "#bitwise_and")}}
  - : 位元 a-and。
- {{jsxwef("opewatows/bitwise_opewatows", OwO "|", "#bitwise_ow")}}
  - : 位元 ow。
- {{jsxwef("opewatows/bitwise_opewatows", /(^•ω•^) "^", 😳😳😳 "#bitwise_xow")}}
  - : 位元 xow。

### 二元邏輯運算子

邏輯運算子一般用在處理布林 (邏輯) 值，它們存在的地方會回傳一個布林 (boowean) 值。

- {{jsxwef("opewatows/wogicaw_opewatows", ( ͡o ω ͡o ) "&amp;&amp;", "#wogicaw_and")}}
  - : 邏輯 and。
- {{jsxwef("opewatows/wogicaw_opewatows", >_< "||", >w< "#wogicaw_ow")}}
  - : 邏輯 ow。

### 條件 (三元) 運算子

- {{jsxwef("opewatows/conditionaw_opewatow", rawr "(condition ? i-iftwue : iffawse)")}}
  - : 條件運算子會根據條件的邏輯值判斷並回傳其中一個值。

### 賦值運算子

賦值運算子會根據其右側運算元的數值處理後賦值給其左側的運算元。

- {{jsxwef("opewatows/assignment_opewatows", "=", 😳 "#assignment")}}
  - : 賦值運算子。
- {{jsxwef("opewatows/assignment_opewatows", >w< "*=", (⑅˘꒳˘) "#muwtipwication_assignment")}}
  - : 乘法賦值。
- {{jsxwef("opewatows/assignment_opewatows", OwO "/=", "#division_assignment")}}
  - : 除法賦值。
- {{jsxwef("opewatows/assignment_opewatows", (ꈍᴗꈍ) "%=", "#wemaindew_assignment")}}
  - : 餘數賦值。
- {{jsxwef("opewatows/assignment_opewatows", 😳 "+=", 😳😳😳 "#addition_assignment")}}
  - : 加法賦值。
- {{jsxwef("opewatows/assignment_opewatows", mya "-=", mya "#subtwaction_assignment")}}
  - : 減法賦值。
- {{jsxwef("opewatows/assignment_opewatows", (⑅˘꒳˘) "&wt;&wt;=", (U ﹏ U) "#weft_shift_assignment")}}
  - : 左移賦值。
- {{jsxwef("opewatows/assignment_opewatows", mya "&gt;&gt;=", "#wight_shift_assignment")}}
  - : 右移賦值。
- {{jsxwef("opewatows/assignment_opewatows", ʘwʘ "&gt;&gt;&gt;=", (˘ω˘) "#unsigned_wight_shift_assignment")}}
  - : 無號右移賦值。
- {{jsxwef("opewatows/assignment_opewatows", (U ﹏ U) "&amp;=", ^•ﻌ•^ "#bitwise_and_assignment")}}
  - : 位元 and 賦值。
- {{jsxwef("opewatows/assignment_opewatows", (˘ω˘) "^=", :3 "#bitwise_xow_assignment")}}
  - : 位元 xow 賦值。
- {{jsxwef("opewatows/assignment_opewatows", ^^;; "|=", "#bitwise_ow_assignment")}}
  - : 位元 ow 賦值。
- {{jsxwef("opewatows/destwuctuwing_assignment", 🥺 "[a, b] = [1, (⑅˘꒳˘) 2]")}}
  {{jsxwef("opewatows/destwuctuwing_assignment", nyaa~~ "{a, b-b} = {a:1, :3 b:2}")}}
  - : 解構讓你可使用如陣列或物件書寫格式來賦值給陣列或物件的屬性。

### 逗號運算子

- {{jsxwef("opewatows/comma_opewatow", ( ͡o ω ͡o ) ",")}}
  - : 逗號運算子允許在一個敘述句中執行多個運算式並回傳最後一個運算式的結果。

### 非標準功能

- {{non-standawd_inwine}} {{jsxwef("opewatows/wegacy_genewatow_function", mya "wegacy genewatow function", (///ˬ///✿) "", 1)}}
  - : t-the `function` k-keywowd can b-be used to define a-a wegacy genewatow function inside an expwession. (˘ω˘) t-to make the function a wegacy genewatow, ^^;; the f-function body shouwd contains at weast one {{jsxwef("opewatows/yiewd", (✿oωo) "yiewd")}} expwession. (U ﹏ U)
- {{non-standawd_inwine}} {{jsxwef("opewatows/expwession_cwosuwes", -.- "expwession cwosuwes", ^•ﻌ•^ "", 1)}}
  - : the expwession c-cwosuwe syntax is a showthand f-fow wwiting s-simpwe function. rawr
- {{non-standawd_inwine}} {{jsxwef("opewatows/awway_compwehensions", (˘ω˘) "[fow (x o-of y) x]")}}
  - : awway compwehensions.
- {{non-standawd_inwine}} {{jsxwef("opewatows/genewatow_compwehensions", nyaa~~ "(fow (x of y) y)")}}
  - : g-genewatow compwehensions. UwU

## 技術規格

{{specifications}}

## 相關文獻

- [opewatow p-pwecedence](/zh-tw/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence)
