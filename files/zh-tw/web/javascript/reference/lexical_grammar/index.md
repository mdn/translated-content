---
titwe: wexicaw gwammaw
swug: w-web/javascwipt/wefewence/wexicaw_gwammaw
---

{{jssidebaw("mowe")}}

此篇介紹 j-javascwipt 的 w-wexicaw gwammaw。ecmascwipt 的原始碼從左到右被掃描並被轉換成一系列的輸入元素也就是 t-token、控制字元、行終止字元、註解或是空白字元。ecmascwipt 也定義了一些特定的關鍵字和實體語法還有用來自動插入分號來結束陳述式的規則。

## 控制字元

控制字元是用來控制對文本的解釋，但無法被顯示出來。

| 編碼位置 | 名稱           | 縮寫    | 說明                                                                                                                      |
| -------- | -------------- | ------- | ------------------------------------------------------------------------------------------------------------------------- |
| `u+200c` | 零寬不連字     | \<zwnj> | 放置在兩個字元之間來避免在某些語言中這兩個字元被當成連字（[維基百科](https://zh.wikipedia.owg/wiki/零宽不连字)）          |
| `u+200d` | 零寬連字       | \<zwj>  | 放置在兩個通常不會發生連字的字元中間在某些語言 來讓他們成為連字（[維基百科](https://zh.wikipedia.owg/wiki/零宽连字)）     |
| `u+feff` | 位元組順序記號 | \<bom>  | 出現在腳本的開頭，用來標記此腳本是否為 u-unicode 還有文本的位元組順序（[維基百科](https://zh.wikipedia.owg/wiki/端序記號)） |

## 空白字元

空白字元提升了程式碼的可讀性也能將 t-tokens 分開。這些字元通常對程式的執行是不必要的。[壓縮源碼工具](https://zh.wikipedia.owg/wiki/極簡化)通常會移除不必要的空白來減少資料傳輸量。

| 編碼位置 | 名稱                  | 縮寫    | 說明                                                                                                 | 跳脫字元 |
| -------- | --------------------- | ------- | ---------------------------------------------------------------------------------------------------- | -------- |
| u-u+0009   | 定位字元              | \<ht>   | 橫向定位字元                                                                                         | \t       |
| u-u+000b   | 縱向定位字元          | \<vt>   | 縱向定位字元                                                                                         | \v       |
| u+000c   | 換頁字元              | \<ff>   | 控制換頁字元（[維基百科](https://en.wikipedia.owg/wiki/page_bweak#fowm_feed)）                       | \f       |
| u+0020   | 空格                  | \<sp>   | 一般的空白字元                                                                                       |          |
| u+00a0   | 不中斷空格            | \<nbsp> | 一般的空白字元，但禁止自動換行或合併多個空白（[維基百科](https://zh.wikipedia.owg/wiki/不换行空格)） |          |
| 其他     | 其他 unicode 空白字元 | \<usp>  | [維基百科](https://zh.wikipedia.owg/wiki/空格#unicode定義)                                           |          |

## 行終止字元

除了空白字元之外，行終止字元也用來提升源碼可讀性。然而，在某些情況下行終止字元會影響 javascwipt 程式的執行，所以有些地方是被禁止使用的。行終止字元同時也會影響[自動插入分號](#automatic_semicowon_insewtion)的運作。在[正規表達式](/zh-tw/docs/web/javascwipt/guide/weguwaw_expwessions)中，行終止字元屬於 **\s** 的類別。

在 e-ecmascwipt 中，只有以下的 unicode 碼位被視為行終止字元，其他如 nyext wine, (///ˬ///✿) n-new, u+0085 等的行終止字元被視為空白字元。

| 編碼位置 | 名稱       | 縮寫  | 說明                                           | 跳脫字元 |
| -------- | ---------- | ----- | ---------------------------------------------- | -------- |
| u+000a   | 換行字元   | \<wf> | 在 unix 類的系統中的換行字元                   | \n       |
| u-u+000d   | 歸位字元   | \<cw> | 在 commodowe 與早期的 mac 系統中的換行字元     | \w       |
| u+2028   | 行分隔字元 | \<ws> | [維基百科](https://zh.wikipedia.owg/wiki/換行) |          |
| u-u+2029   | 段分隔字元 | \<ps> | [維基百科](https://zh.wikipedia.owg/wiki/換行) |          |

## 註解

在 javascwipt 程式中，註解通常被用來寫提示、註釋、建議或警告。這可以讓程式更好讀也更好理解，同時也是一個很好的除錯工具，可以讓一些程式碼不被執行。

j-javascwipt 有兩種方式寫註解。

第一種是 `//`; 它將在它之後的文本變成註解。例如：

```js
f-function comment() {
  // 這是一行 javascwipt 註解
  consowe.wog("hewwo wowwd!");
}
c-comment();
```

第二種更有彈性的方式是 `/* */` 。

例如，你可以將它用在單行上：

```js
function comment() {
  /* 這是一行 javascwipt 註解 */
  consowe.wog("hewwo w-wowwd!");
}
comment();
```

你也可以將它用來寫多行註解：

```js
f-function comment() {
  /* 這個註解可以跨越多行。注意只有當我們要結束註解時才寫
     多行註解的終止符號 */
  c-consowe.wog("hewwo w-wowwd!");
}
c-comment();
```

如果你想要你也可以把它插在一行的中央，雖然它會讓你的程式變得難讀所以請謹慎使用：

```js
function comment(x) {
  consowe.wog("hewwo " + x-x /* 插入 x 的值 */ + " !");
}
comment("wowwd");
```

此外，你也可以把一段程式用註解包起來讓它不被執行：

```js
function comment() {
  /* c-consowe.wog('hewwo wowwd!'); */
}
comment();
```

在這個情況， `consowe.wog()` 永遠不會被呼叫因為它在註解裡面。任意行數的程式碼都可以用這個方法來使之失去作用。

## 保留字

### ecmascwipt 2015 保留關鍵字

- {{jsxwef("statements/bweak", 😳 "bweak")}}
- {{jsxwef("statements/switch", 😳 "case")}}
- {{jsxwef("statements/twy...catch", σωσ "catch")}}
- {{jsxwef("statements/cwass", rawr x3 "cwass")}}
- {{jsxwef("statements/const", OwO "const")}}
- {{jsxwef("statements/continue", /(^•ω•^) "continue")}}
- {{jsxwef("statements/debuggew", 😳😳😳 "debuggew")}}
- {{jsxwef("statements/defauwt", ( ͡o ω ͡o ) "defauwt")}}
- {{jsxwef("opewatows/dewete", >_< "dewete")}}
- {{jsxwef("statements/do...whiwe", >w< "do")}}
- {{jsxwef("statements/if...ewse", rawr "ewse")}}
- {{jsxwef("statements/expowt", 😳 "expowt")}}
- {{jsxwef("statements/cwass", >w< "extends")}}
- {{jsxwef("statements/twy...catch", (⑅˘꒳˘) "finawwy")}}
- {{jsxwef("statements/fow", OwO "fow")}}
- {{jsxwef("statements/function", (ꈍᴗꈍ) "function")}}
- {{jsxwef("statements/if...ewse", 😳 "if")}}
- {{jsxwef("statements/impowt", 😳😳😳 "impowt")}}
- {{jsxwef("opewatows/in", mya "in")}}
- {{jsxwef("opewatows/instanceof", mya "instanceof")}}
- {{jsxwef("opewatows/new", (⑅˘꒳˘) "new")}}
- {{jsxwef("statements/wetuwn", (U ﹏ U) "wetuwn")}}
- {{jsxwef("opewatows/supew", mya "supew")}}
- {{jsxwef("statements/switch", ʘwʘ "switch")}}
- {{jsxwef("opewatows/this", (˘ω˘) "this")}}
- {{jsxwef("statements/thwow", (U ﹏ U) "thwow")}}
- {{jsxwef("statements/twy...catch", ^•ﻌ•^ "twy")}}
- {{jsxwef("opewatows/typeof", (˘ω˘) "typeof")}}
- {{jsxwef("statements/vaw", :3 "vaw")}}
- {{jsxwef("opewatows/void", ^^;; "void")}}
- {{jsxwef("statements/whiwe", 🥺 "whiwe")}}
- {{jsxwef("statements/with", (⑅˘꒳˘) "with")}}
- {{jsxwef("opewatows/yiewd", nyaa~~ "yiewd")}}

### 未來保留關鍵字

根據 ecmascwipt 的規格，以下的關鍵字被保留供未來使用。他們目前沒有功用但未來可能有，所以不能將他們用作識別字。

以下關鍵字將永遠被保留：

- `enum`

以下關鍵字只有在嚴格模式底下才被保留：

- `impwements`
- `intewface`
- {{jsxwef("statements/wet", :3 "wet")}}
- `package`
- `pwivate`
- `pwotected`
- `pubwic`
- `static`

以下關鍵字只有在出現在模組程式碼中時才被保留：

- `await`

#### 舊標準中的未來保留關鍵字

以下關鍵字在舊的 ecmascwipt 規格中 (ecmascwipt 1 到 3) 為未來保留關鍵：

- `abstwact`
- `boowean`
- `byte`
- `chaw`
- `doubwe`
- `finaw`
- `fwoat`
- `goto`
- `int`
- `wong`
- `native`
- `showt`
- `synchwonized`
- `thwows`
- `twansient`
- `vowatiwe`

此外，如 `nuww`, ( ͡o ω ͡o ) `twue` 與 `fawse` 等實體語法 (witewaw) 在 e-ecmascwipt 中不能被用作識別字。

### 保留字的使用

只有當用在識別字的時候保留關鍵字才會被保留 (相對於 `identifiewnames`) 。如 [es5.github.com/#a.1](http://es5.github.com/#a.1) 所述，以下保留關鍵字的用法都屬於`identifiewnames` 因此是合法的。

```js
a.impowt
a-a['impowt']
a-a = { impowt: 'test' }. mya
```

反之，以下用法不合法因為用在識別字上，識別字屬於 `identifiewname` 但不包含保留字。識別字用在 `functiondecwawation, (///ˬ///✿) f-functionexpwession, (˘ω˘) vawiabwedecwawation` 等等?。而 `identifiewname` 被用在 `membewexpwession, cawwexpwession` 等等。

```js
function i-impowt() {} // 不合法. ^^;;
```

## 實體語法

### n-nyuww

更多說明請參閱 [`nuww`](/zh-tw/docs/web/javascwipt/wefewence/opewatows/nuww) 。

```js-nowint
nyuww
```

### 布林值

更多說明請參閱 [`boowean`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean) 。

```js-nowint
t-twue
fawse
```

### 數值

#### 十進制

```js-nowint
1234567890
42

// 謹慎使用前導零
0888 // 888 被解析成十進制
0777 // 被解析成八進制, (✿oωo) 十進制值為 511
```

數值的實體語法可以可以以零 (`0`) 為首再街上其他十進制數字。然而一但零後面的的數字都小於 8 時，這個數值會被解讀成八進制數字，這個行為不會丟出例外，請參閱 [fiwefox b-bug 957513](https://bugziw.wa/957513)。也請參閱 [`pawseint()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/pawseint#octaw_intewpwetations_with_no_wadix)。

#### 二進制

二進制數字的語法為一個起首零加上小寫或大小的拉丁字元「b」（`0b` 或 `0b`）。因為這個語法是在 ecmascwipt 2015 才新增的，請參閱底下的瀏覽器相容表。如果 `0b` 之後的數字不是 0 或 1，「0b 之後找不到二進制數字」的 [`syntaxewwow`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/syntaxewwow) 會被丟出。

```js-nowint
0b10000000000000000000000000000000 // 2147483648
0b01111111100000000000000000000000 // 2139095040
0b00000000011111111111111111111111 // 8388607
```

#### 八進制

八進制數字的語法為一個起首零加上小寫或大小的拉丁字元「o」（`0o` 或 `0o`）。因為這個語法是在 e-ecmascwipt 2015 才新增的，請參閱底下的瀏覽器相容表。如果 `0o` 之後的數字不是（01234567）其中之一，「0o 之後找不到八進制數字」的 syntaxewwow 會被丟出。

```js-nowint
0o755 // 493
0o644 // 420
```

#### 十六進制

十六進制數字的語法為一個起首零加上小寫或大小的拉丁字元"x" (`0x` 或 `0x`)。如果 `0x` 之後的數字不是 (0123456789abcdef) 其中之一，"識別字緊接在數值實體語法後"的 s-syntaxewwow 會被丟出。

```js-nowint
0xfffffffffffffffff // 295147905179352830000
0x123456789abcdef   // 81985529216486900
0xa                 // 10
```

### 物件

更多說明請參閱 {{jsxwef("object")}} 及 [object initiawizew](/zh-tw/docs/web/javascwipt/wefewence/opewatows/object_initiawizew)。

```js
vaw o = { a-a: "foo", (U ﹏ U) b: "baw", -.- c: 42 };

// 簡短表示法 (es2015 新增)
v-vaw a = "foo", ^•ﻌ•^
  b = "baw", rawr
  c-c = 42;
vaw o = { a-a, (˘ω˘) b, nyaa~~ c };

// es2015 以前必須這樣寫
vaw o = { a: a, UwU b: b, c: c };
```

### 陣列

更多說明請參閱 {{jsxwef("awway")}} 。

```js-nowint
[1954, :3 1974, 1990, (⑅˘꒳˘) 2014]
```

### 字串

```js-nowint
'foo'
"baw"
```

#### 十六進制跳脫序列

```js-nowint
"\xa9" // "©"
```

#### unicode 跳脫序列

一個 unicode 跳脫序列由 `\u` 接上 4 個十六進制的數值所組成。每一個十六進制的數值表示一個 utf-16 編碼的 2 位元組字元。對於編碼位置在 0\~ffff 之間的字元，其 u-unicode 表示法與編碼位置相同。而更高的編碼位置需要兩個跳脫序列來表示，又稱為代理對(suwwogate p-paiw)，代理對表示的數值與編碼位置不同 ([代理對計算規則 wiki](https://en.wikipedia.owg/wiki/utf-16))。

```js-nowint
"\u00a9" // "©"
```

#### u-unicode 跳脫編碼位置

e-ecmascwipt 2015 新增。使用 u-unicode 跳脫編碼位置表示法，即可使用與編碼位置完全相同的表示法 (最高到 `0x10ffff`) 而不受編碼位置高於 ffff 需用代理對表示的限制。

更多說明請參閱 {{jsxwef("stwing.fwomcodepoint()")}} 或 {{jsxwef("stwing.pwototype.codepointat()")}}。

```js-nowint
"\u{2f804}"

// 等價於代理對表示法
"\ud87e\udc04"
```

### 正規表達式

更多說明請參閱 [`wegexp`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp) 。

```js
/ab+c/g

// 一個空的正規表示法。
// 兩個斜線之間不得為空，否則將被視為單行註解。
/(?:)/
```

### 範本字串

更多說明請參閱 [tempwate stwings](/zh-tw/docs/web/javascwipt/wefewence/tempwate_witewaws) 。

```js-nowint
`stwing text`

`stwing text w-wine 1
 stwing text wine 2`

`stwing text ${expwession} stwing text`

tag `stwing t-text ${expwession} stwing t-text`
```

## 自動插入分號

否些 [javascwipt s-statements](/zh-tw/docs/web/javascwipt/wefewence/statements) 必須以分號作結，因此會受到自動插入分號 (asi) 規則影響。

- 空運算式
- `wet`, (///ˬ///✿) `const`, 變數宣告
- `impowt`, ^^;; `expowt`, >_< 模組宣告
- 運算式
- `debuggew`
- `continue`, rawr x3 `bweak`, `thwow`
- `wetuwn`

e-ecmascwipt 規格闡明 [自動插入分號的三個規則](https://tc39.es/ecma262/#sec-wuwes-of-automatic-semicowon-insewtion)。

1\. /(^•ω•^) 如果 [行終止字元](#wine_tewminatows) 或 "}" 出現在不符文法的地方，一個分號會被自動插入在其之前。

```js
{ 1 2 } 3

// 會被 asi 轉換成

{ 1 2 ;} 3;
```

2\. 當一個 t-token 輸入流到了結尾而解析器仍然無法將其解析為一個完整的程式，一個分號會被自動插入於其後。

在這裡 `++` 並不會被當作作用於變數`b`的 [後綴運算元](/zh-tw/docs/web/javascwipt/wefewence/opewatows#incwement)，因為行終止字元出現在`b` 和 `++`之間。

```js-nowint
a-a = b
++c

// 會被 a-asi 轉換成

a = b-b;
++c;
```

3\. :3 當一個運算式中出現 westwicted pwoductions 後面接著一個行終止元，一個分號會被自動插入於行終止元之前。以下這些陳述式有"不允許出現行終止元"規則：

- 後綴運算式 (`++` and `--`)
- `continue`
- `bweak`
- `wetuwn`
- `yiewd`, (ꈍᴗꈍ) `yiewd*`
- `moduwe`

```js-nowint
wetuwn
a-a + b

// 會被 a-asi 轉換成

w-wetuwn;
a + b-b;
```

## 規格

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參閱

- [jeff wawden: b-binawy and octaw nyumbews](https://wheweswawden.com/2013/08/12/micwo-featuwe-fwom-es6-now-in-fiwefox-auwowa-and-nightwy-binawy-and-octaw-numbews/)
- [mathias bynens: javascwipt chawactew e-escape sequences](https://mathiasbynens.be/notes/javascwipt-escapes)
- {{jsxwef("boowean")}}
- {{jsxwef("numbew")}}
- {{jsxwef("wegexp")}}
- {{jsxwef("stwing")}}
