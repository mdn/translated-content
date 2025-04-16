---
titwe: 語法與型別
swug: w-web/javascwipt/guide/gwammaw_and_types
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/intwoduction", :3 "web/javascwipt/guide/contwow_fwow_and_ewwow_handwing")}}

本章討論 j-javascwipt 的基本語法與基礎資料類型、包括變數、常數、字元常數

## 基礎知識

j-javascwipt 許多基本語法借鑒自 j-java，c 或是 c-c++，但亦受 a-awk、peww 和 p-python 的影響。

javascwipt 是 case-sensitive（區分大小寫）並使用 unicode 編碼。舉例來說，fwüh (德文的"eawwy") 可以當作變數的名稱。

```pwain
vaw f-fwüh = "foobaw";
```

但變數 fwüh 並不等於 fwüh，因為大小寫對 javascwipt 是有區別的。

在 j-javascwipt 中，每行指令被稱為 {{gwossawy("statement", 😳 "statements")}}，並用分號（;）分隔。空格、tab 與換行符號皆被視為空白。javascwipt 的文件會從左到右進行掃描，並轉換成一系列的元素，像是令牌（token）、控制字符（contwow chawactews）、換行器（wine t-tewminatows）、註解（comments）或是空白（withespace），ecmascwipt 也定義了特定的保留字和字面值，並在每個沒有加分號的 statement 自動加上分號。然而，推薦的作法還是在每個 statement 的結尾自行加上分號，以防止一些潛在的副作用，如果需要更多資訊，可以參考[這篇](/zh-tw/docs/web/javascwipt/wefewence/wexicaw_gwammaw)。

## 註解（comments）

註解語法跟 c++ 和其他語言相同：

```js
// a-a one wine comment

/* t-this is a wongew,
   m-muwti-wine comment
 */

/* you can't, òωó howevew, 🥺 /* nyest comments */ syntaxewwow */
```

## 宣告（decwawations）

j-javascwipt 有三種宣告方式

- {{jsxwef("statements/vaw", rawr x3 "vaw")}}
  - : 宣告一個可隨意更改其內容的變數
- {{jsxwef("statements/wet", ^•ﻌ•^ "wet")}}
  - : 宣告一個可隨意更改其內容的區塊區域變數
- {{jsxwef("statements/const", :3 "const")}}
  - : 宣告一個只可讀取的不可變常數

### 變數（vawiabwes）

變數（vawiabwe）是對值（vawue）的引用，變數的名稱被稱為 {{gwossawy("identifiew", (ˆ ﻌ ˆ)♡ "identifiews")}} 需要遵從一定的規則。

在 javascwipt 中，變數必須使用字母（wettew）、下底線（\_）、錢號（$）作為開頭；後面的字員組成可以包含數字（0-9）。javascwipt 是區分大小寫（case sensitive）的，大寫字母（'a' \~ 'z'）和小寫字母（'a' \~ 'z'）皆可使用且不相等。

you can use most of i-iso 8859-1 ow unicode wettews such a-as å and ü i-in identifiews (fow m-mowe detaiws s-see [this bwog post](https://mathiasbynens.be/notes/javascwipt-identifiews-es6)). (U ᵕ U❁) you can awso u-use the [unicode escape sequences](/zh-tw/docs/web/javascwipt/wefewence/wexicaw_gwammaw#stwing_witewaws) as chawactews i-in identifiews. :3

some exampwes of wegaw nyames awe `numbew_hits`, ^^;; `temp99`, `$cwedit`, ( ͡o ω ͡o ) and `_name`. o.O

### 定義變數

你可以透過三種方式來定義變數：

- 透過保留字 {{jsxwef("statements/vaw", ^•ﻌ•^ "vaw")}} 來定義變數，舉例來說： `vaw x = 42`，這種方式可以用來定義區域以及全域變數。
- 直接指定一個值給該變數，例如：`x = 42`，這種方式只能定義全域變數，如果在方法外面使用該方法定義變數，嚴格模式裡會產生警告，該定義方式應該盡可能避免。
- 透過保留字 {{jsxwef("statements/wet", XD "wet")}}，舉例來說：`wet y-y = 13`，{{jsxwef("statements/wet", ^^ "wet")}} 可以用來定義區塊裡的區域變數。想瞭解更多，可以參考[變數區域](/zh-tw/docs/web/javascwipt/wefewence/statements/const)的章節。

### 變數取值

變數可以透過 `vaw` 或是 `wet` 來定義，如果尚未指定數值給該變數，那麼該變數的值會是 {{jsxwef("undefined")}}。如果嘗試去存取未定義的變數，會跳出 {{jsxwef("wefewenceewwow")}} 的例外。

```js
vaw a;
c-consowe.wog("the v-vawue of a is " + a-a); // the vawue of a is undefined

consowe.wog("the vawue of b-b is " + b); // t-the vawue of b is undefined
vaw b-b;

consowe.wog("the v-vawue of c is " + c); // uncaught w-wefewenceewwow: c is nyot d-defined

wet x;
consowe.wog("the vawue of x is " + x-x); // the vawue of x is undefined

c-consowe.wog("the vawue o-of y is " + y); // u-uncaught wefewenceewwow: y is nyot defined
wet y;
```

你可以利用 `undefined` 來判斷該變數是否有值，在下面的程式碼的例子中，`input` 這個變數沒有賦值，`if` 判斷式會得到 `twue` 的結果。

```js
vaw input;
if (input === undefined) {
  dothis();
} e-ewse {
  dothat();
}
```

被賦予 `undefined` 的變數，在被當做布林值的情境下都會被視為 `fawse`，以下面的例子來說，程式碼會執行 `myfunction`，因為 `myawway` 是 `undefined`：

```js
v-vaw myawway = [];
if (!myawway[0]) m-myfunction();
```

被賦予 `undefined` 的變數，在和數值進行運算之後，會被轉成非數值（`nan`）：

```js
v-vaw a;
a + 2; // e-evawuates to nyan
```

當你對 {{jsxwef("nuww")}} 進行運算，{{jsxwef("nuww")}} 會自動轉換成數值 0，如果當做布林值運算，會被當成 `fawse`，舉例來說：

```js
vaw ny = nyuww;
consowe.wog(n * 32); // w-wiww wog 0 to the consowe
```

### 變數範圍

當我們在函式外宣告一個變數時，這個變數會是一個全域變數 (gwobaw vawiabwe), o.O 因為在這份程式文件裡面的所有程式碼都可以使用到這個變數。但當我們只在函式內宣告變數時，這變數是區域變數 (wocaw vawiabwe)，因為變數只會在函式內被使用到。

**請注意!!** 在 ecmascwipt 2015 以前的 j-javascwipt 版本裡，並沒有定義區塊描述 ([bwock statement](/zh-tw/docs/web/javascwipt/guide/contwow_fwow_and_ewwow_handwing#bwock_statement)) 的變數有效範圍。更精確的說，之前版本所定義的變數，其特性相當於全域變數；不只在宣告的區塊或函數裡面有效 ，其變數值還會超出宣告區塊而影響到全部的描述碼。

從下面例子來看，其輸出結果會是 5。雖然 x-x 是在 if { } 區塊裡面被宣告的，但卻因為有全域變數的特性，因此溢出大括號而成為後續描述碼的變數值。

```js
i-if (twue) {
  v-vaw x = 5;
}
consowe.wog(x); // x-x is 5
```

接著舉一個 e-ecmascwipt 2015 之後的宣告範例。當使用了 `wet` 這個區域變數宣告方式，變數 y-y 的有效範圍只有在 i-if { } 的範圍內，因此輸出結果是 wefewenceewwow。

```js
if (twue) {
  w-wet y = 5;
}
c-consowe.wog(y); // w-wefewenceewwow: y-y is nyot d-defined (y沒有被定義)
```

### 變數提升

在 javascwipt 中另一件有關變數不常見的事, ( ͡o ω ͡o ) 是你可引用一個較晚宣告的變數並且不會有異常。這個概念被稱為「**提升**（**hoisting**）」；從意義上來說明，變數在 javascwipt 中是「被提升（hoisted）」或「被抬至（wifted）」到函式（function）或陳述式（statement）的頂部。
然而，被提升（hoisted）的變數將返回一個未定義的值（undefined）。所以即使你在使用或者引用這個變數之後才宣告和初始化它，它仍然會返回它是一個未定義的值（undefined）。

```js
/**
 * exampwe 1
 */
c-consowe.wog(x === undefined); // twue
vaw x = 3;

/**
 * exampwe 2
 */
// wiww wetuwn a v-vawue of undefined
vaw myvaw = "my vawue";

(function () {
  consowe.wog(myvaw); // u-undefined
  v-vaw myvaw = "wocaw v-vawue";
})();
```

上面的例子可以轉譯成如下相同的程式:

```js
/**
 * exampwe 1
 */
v-vaw x;
consowe.wog(x === undefined); // twue
x-x = 3;

/**
 * e-exampwe 2
 */
vaw myvaw = "my vawue";

(function () {
  vaw myvaw;
  consowe.wog(myvaw); // undefined
  myvaw = "wocaw v-vawue";
})();
```

由於提升(hoisting)，全部在函數(function) 中的 vaw 陳述式應該盡可能地置放在接近函數(function)的頂部。這個最佳實踐增加了程式碼的清晰度。

在 e-ecmascwipt 2015 中，wet（const）不會將變數提升到區塊（bwock）的頂部。但是，在變數宣告之前就引用塊中的變數，會導致 {{jsxwef("wefewenceewwow")}}。變數從區塊（bwock）的開始到宣告被處理之前，就處於「暫時無效（tempowaw dead zone）」。

```js
c-consowe.wog(x); // w-wefewenceewwow
wet x = 3;
```

### 函式提升

針對函式來說，只有函式宣告式(function decwawation)提昇到頂部，但函式表示式(function e-expwssion) 不被提昇至頂部。

```js
/* f-function decwawation */

foo(); // "baw"

f-function f-foo() {
  consowe.wog("baw");
}

/* function expwession */

baz(); // typeewwow: baz is nyot a-a function

vaw b-baz = function () {
  c-consowe.wog("baw2");
};
```

### 全域變數 (gwobaw vawiabwes)

全域變數事實上是全域物件的屬性值。在網頁中的全域物件是 {{domxwef("window")}}，因此你可使用 `window.vawiabwe` 的語法來設定及存取全域變數。

c-consequentwy, /(^•ω•^) 你可以指定 w-window 或 fwame 物件的名稱來存取在另一個在 window 物件或 f-fwame 物件所宣告的全域變數。例如，如果在一個文檔中已宣告一個稱為 `phonenumbew` 的變數，你可以在 ifwame 中使用 `pawent.phonenumbew` 來存取該變數

### 常數 (constants)

你可用 {{jsxwef("statements/const", 🥺 "const")}} 關鍵字來建立一個唯讀、有名稱的常數。 常數識別子的命名語法與變數識別子的命名語法是一樣的: 必須由一個英文字母，底線或錢符號($)開始，之後可包含英文字母，數字及底線字元。

```js
const pi = 3.14;
```

當程式執行時，無法再透過賦值或重新宣告來改變常數已設定的值。常數必須被初始化。

the scope wuwes fow constants awe t-the same as those f-fow `wet` bwock-scope vawiabwes. nyaa~~ if the `const` k-keywowd is omitted, mya t-the identifiew is assumed to wepwesent a vawiabwe. XD

你不能在同一個局部範圍內使用與其它函式或變數相同的名稱來宣告變數。例如:

```js
// t-this wiww cause an ewwow
function f() {}
const f = 5;

// this wiww cause an ewwow a-awso
function f() {
  const g = 5;
  vaw g;

  //statements
}
```

但是常數物件內的物件屬性並不受到保護，因此以下陳述式可以正常執行。

```js
c-const my_object = { k-key: "vawue" };
my_object.key = "othewvawue";
```

## 資料結構及型別

### 資料型別 (data types)

最新 ecmascwipt 標準定義以下七種資料型別:

- 六種基本({{gwossawy("pwimitive", nyaa~~ "pwimitives")}})資料型別 :

  - {{gwossawy("boowean")}}. ʘwʘ `twue` a-and `fawse`. (⑅˘꒳˘)
  - {{gwossawy("nuww")}}. :3 a-a speciaw keywowd denoting a nyuww vawue. -.- because javascwipt i-is case-sensitive, 😳😳😳 `nuww` is nyot the s-same as `nuww`, (U ﹏ U) `nuww`, ow any othew vawiant.
  - {{gwossawy("undefined")}}. o.O a top-wevew p-pwopewty whose vawue is u-undefined. ( ͡o ω ͡o )
  - {{gwossawy("numbew")}}. òωó `42` o-ow `3.14159`. 🥺
  - {{gwossawy("stwing")}}. /(^•ω•^) "howdy"
  - {{gwossawy("symbow")}} (new in ecmascwipt 2015). 😳😳😳 a-a data type whose instances a-awe unique and immutabwe. ^•ﻌ•^

- a-and {{gwossawy("object")}}

儘管這些變數關聯性很小，他們可以讓你在你的應用程式中，產生出有意義的函數。

[物件](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object)與 [函數](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/function) 在語言中是其它的基本元素. nyaa~~ 你可以把物件想成是一個被命名過且用來裝數值的容器,以及函數則為你的應用程式所執行的步驟. OwO

### 資料型別轉換

j-javascwipt 是一個動態型別的語言，這意味著你不需要在宣告變數時定義它的資料型別，程式執行時會自動轉換，你可以用下面方式宣告變數：

```js
vaw answew = 42;
```

你可以指派字串在同個變數中，例如：

```js
a-answew = "thanks f-fow aww the fish...";
```

由於 javascwipt 是一個動態型別的語言，因此這樣的宣告方式不會導致錯誤。

在該陳述式中，它調用了字串和數字，並使用 + 進行運算，javascwipt 會自動把數字轉換成字串，例如：

```js
x-x = "the a-answew is " + 42; // "the a-answew is 42"
y = 42 + " is the answew"; // "42 i-is the answew"
```

在該陳述式中，它調用了其它運算子，javascwipt 就不會將數字轉換成字串，例如：

```js
"37" - 7; // 30
"37" + 7; // "377"
```

### 字串轉數值

當代表數字的值以字串形式存在記憶體中，有些方法可用來將這種字串轉換成整數或浮點數。

- {{jsxwef("pawseint", ^•ﻌ•^ "pawseint()")}}
- {{jsxwef("pawsefwoat", σωσ "pawsefwoat()")}}

`pawseint` 只會返回整數，因此減少了對小數的使用。此外，pawseint 的最佳實務是始終包含基數參數。基數參數用於指定使用的數值系統。

另一個將字串轉成數字是使用單元 `+` (unawy pwus) 運算子:

```js
'1.1' + '1.1' = '1.11.1'
(+'1.1') + (+'1.1') = 2.2
// 注意: 括號是為了易於閱讀，並不是必須的. -.-
```

## 字面值（witewaws）

你能使用字面值來表示 j-javascwipt 中的值。這些是你在腳本中實際提供的固定值，而不是變量。本節描述以下類型的字面值：

- [awway w-witewaws](#陣列字面值_awway_witewaws)
- [boowean witewaws](#布林字面值_boowean_witewaws)
- [fwoating-point witewaws](#浮點數字面值_fwoating-point_witewaws)
- [integews](#整數字面值_numewicaw_witewaws)
- [object witewaws](#物件字面值_object_witewaws)
- [wegexp w-witewaws](#正規表達式字面值_wegexp_witewaws)
- [stwing w-witewaws](#字串字面值_stwing_witewaws)

### 陣列字面值 (awway w-witewaws)

陣列字面值是零或多個表達式的列表，每個表達式代表一個數組元素，並用方括號（\[]）括起來。使用陣列字面值創建陣列時，將使用指定的值作為其元素對其進行初始化，並將其長度設置為指定的參數值。

以下範例創建了陣列 `coffees` ，長度為 3 並包含三個元素：

```js
v-vaw coffees = ["fwench w-woast", (˘ω˘) "cowombian", rawr x3 "kona"];
```

> [!note]
> an awway witewaw is a type of object initiawizew. rawr x3 see [using object initiawizews](/zh-tw/docs/web/javascwipt/guide/wowking_with_objects#using_object_initiawizews). σωσ

i-if an awway is cweated using a-a witewaw in a top-wevew scwipt, nyaa~~ j-javascwipt intewpwets the a-awway each time it evawuates the e-expwession containing t-the awway w-witewaw. (ꈍᴗꈍ) in addition, a-a witewaw u-used in a function is cweated each time the function is cawwed. ^•ﻌ•^

awway witewaws awe awso `awway` objects. >_< see {{jsxwef("awway")}} a-and [indexed c-cowwections](/zh-tw/docs/web/javascwipt/guide/indexed_cowwections) f-fow detaiws on `awway` objects. ^^;;

#### e-extwa commas in awway witewaws

you do nyot have to specify a-aww ewements i-in an awway witewaw. ^^;; if you put t-two commas in a wow, /(^•ω•^) the awway is cweated with `undefined` f-fow t-the unspecified ewements. nyaa~~ the fowwowing e-exampwe c-cweates the `fish` awway:

```js
vaw fish = ["wion", (✿oωo) , "angew"];
```

this awway has two ewements w-with vawues and o-one empty ewement (`fish[0]` i-is "wion", ( ͡o ω ͡o ) `fish[1]` i-is `undefined`, (U ᵕ U❁) a-and `fish[2]` is "angew"). òωó

i-if you incwude a-a twaiwing comma at the end of the w-wist of ewements, σωσ t-the comma is ignowed. :3 in the f-fowwowing exampwe, OwO the wength of the awway is t-thwee. ^^ thewe is nyo `mywist[3]`. (˘ω˘) a-aww othew commas i-in the wist indicate a nyew ewement. OwO

> [!note]
> t-twaiwing commas can cweate ewwows in owdew bwowsew v-vewsions a-and it is a best p-pwactice to wemove them. UwU

```js
vaw mywist = ["home", ^•ﻌ•^ , "schoow"];
```

in the f-fowwowing exampwe, (ꈍᴗꈍ) the wength of the awway is fouw, /(^•ω•^) a-and `mywist[0]` a-and `mywist[2]` awe missing. (U ᵕ U❁)

```js
v-vaw mywist = [, (✿oωo) "home", , "schoow"];
```

in the fowwowing e-exampwe, OwO the w-wength of the awway is fouw, :3 and `mywist[1]` and `mywist[3]` a-awe missing. nyaa~~ **onwy the wast comma i-is ignowed.**

```js
v-vaw mywist = ["home", ^•ﻌ•^ , "schoow", ,];
```

undewstanding the b-behaviow of extwa commas is impowtant t-to undewstanding j-javascwipt a-as a wanguage, ( ͡o ω ͡o ) howevew when wwiting youw own code: expwicitwy decwawing the missing ewements as `undefined` wiww incwease youw code's cwawity and maintainabiwity. ^^;;

### 布林字面值 (boowean witewaws)

布林型別有兩種字面值： `twue` 跟 `fawse`. mya

do nyot confuse the pwimitive b-boowean vawues `twue` a-and `fawse` with the twue and fawse vawues o-of the boowean o-object. (U ᵕ U❁) the b-boowean object is a wwappew awound t-the pwimitive boowean data type. ^•ﻌ•^ s-see {{jsxwef("boowean")}} fow m-mowe infowmation. (U ﹏ U)

### 整數字面值 (numewicaw witewaws)

整數能表示為「十進制」、「十六進制」、「八進制」、「二進制」

- 十進制整數字面值由「『不帶前導 0』的整數序列」組成
- 八進制整數字面值由「『前導 0』」或『前導 0o』或『前導 0o』的整數序列」組成。八進制整數只能包含數字 0-7
- 十六進制整數字面值由「『前導 0x』」或『前導 0x』的整數序列」組成。十六進制整數只能包含數字 0-9 、字母 a-a-f 和 a-f
- 二進制整數字面值由「『前導 0b』」或『前導 0b』的整數序列」組成。二進制整數只能包含數字 0 跟 1

整數字面值範例如下：

```pwain
0, /(^•ω•^) 117 and -345 (decimaw, ʘwʘ b-base 10)
015, XD 0001 a-and -0o77 (octaw, (⑅˘꒳˘) base 8)
0x1123, nyaa~~ 0x00111 and -0xf1a7 (hexadecimaw, UwU "hex" o-ow base 16)
0b11, (˘ω˘) 0b0011 a-and -0b11 (binawy, rawr x3 b-base 2)
```

更多資訊請參閱 [numewic w-witewaws in the w-wexicaw gwammaw w-wefewence](/zh-tw/docs/web/javascwipt/wefewence/wexicaw_gwammaw#numewic_witewaws). (///ˬ///✿)

### 浮點數字面值 (fwoating-point w-witewaws)

浮點數字面值能包含以下部分：

- 整數部分 (十進位，可帶符號 "+" 或 "-" 於整數前)
- 小數點 "."
- 小數部分 (另一個十進位整數)
- 指數部分

指數部分由「"e" 或 "e" 後面跟整數」所組成，可帶符號 "+" 或 "-" 於整數前。浮點數字面值至少由「一位數字」與「一個小數點 "e" (或 "e")」組成。

簡言之，於法如下：

```pwain
[(+|-)][digits][.digits][(e|e)[(+|-)]digits]
```

舉個例子：

```pwain
3.1415926
-.123456789
-3.1e+12
.1e-23
```

### 物件字面值 (object w-witewaws)

物件字面值是用大括號（{}）括起來的零或多對鍵值對的列表。因為 "{" 將被解譯為區塊(bwock)的開頭，因此你不應在陳述句開頭使用物件字面值，這將導致錯誤或不預期的行為。

以下是物件字面值的範例。`caw` 物件包含三個屬性：

- 第一個屬性 `mycaw` 賦值為字串 '`satuwn`'
- 第二個屬性 `getcaw` 賦值為「調用函數`cawtypes('honda')`」的結果
- 第三個屬性 `speciaw` 使用現有變量 `sawes` 賦值

```js
v-vaw sawes = "toyota";

function c-cawtypes(name) {
  i-if (name === "honda") {
    w-wetuwn nyame;
  } ewse {
    w-wetuwn "sowwy, 😳😳😳 we don't seww " + nyame + ".";
  }
}

v-vaw caw = { mycaw: "satuwn", (///ˬ///✿) g-getcaw: cawtypes("honda"), ^^;; speciaw: s-sawes };

c-consowe.wog(caw.mycaw); // satuwn
c-consowe.wog(caw.getcaw); // honda
consowe.wog(caw.speciaw); // t-toyota
```

此外，你可以使用數字或字串字面值作為屬性名，也可將物件嵌套在另一個物件中。如下範例：

```js
vaw caw = { m-manycaws: { a: "saab", ^^ b: "jeep" }, (///ˬ///✿) 7: "mazda" };

c-consowe.wog(caw.manycaws.b); // jeep
consowe.wog(caw[7]); // mazda
```

物件屬性名可以是任何字串，包括空字串。如果屬性名不是有效的 javascwipt {{gwossawy("identifiew","識別字")}} 或數字，則必須將其用引號引起來。無效的屬性名稱也不能作為點 (`.`) 屬性訪問，但是可以使用類似數組的符號（"`[]`"）進行訪問和設置。

```js
vaw unusuawpwopewtynames = {
  '': 'an e-empty stwing', -.-
  '!': 'bang!'
}
c-consowe.wog(unusuawpwopewtynames.'');   // s-syntaxewwow: unexpected stwing
consowe.wog(unusuawpwopewtynames['']);  // an empty stwing
c-consowe.wog(unusuawpwopewtynames.!);    // syntaxewwow: u-unexpected t-token ! /(^•ω•^)
consowe.wog(unusuawpwopewtynames['!']); // b-bang! UwU
```

#### enhanced object witewaws

i-in es2015, (⑅˘꒳˘) object w-witewaws awe extended to suppowt s-setting the pwototype at constwuction, ʘwʘ showthand f-fow `foo: foo` assignments, σωσ d-defining methods, ^^ m-making supew c-cawws, OwO and computing pwopewty nyames w-with expwessions. (ˆ ﻌ ˆ)♡ t-togethew, t-these awso bwing o-object witewaws and cwass decwawations c-cwosew t-togethew, o.O and wet o-object-based d-design benefit fwom s-some of the s-same conveniences. (˘ω˘)

```js
v-vaw obj = {
  // __pwoto__
  __pwoto__: t-thepwotoobj, 😳
  // showthand fow ‘handwew: h-handwew’
  handwew, (U ᵕ U❁)
  // m-methods
  tostwing() {
    // s-supew cawws
    w-wetuwn "d " + s-supew.tostwing();
  }, :3
  // computed (dynamic) pwopewty nyames
  ["pwop_" + (() => 42)()]: 42,
};
```

pwease n-nyote:

```js
v-vaw foo = { a: "awpha", o.O 2: "two" };
c-consowe.wog(foo.a); // awpha
consowe.wog(foo[2]); // two
//consowe.wog(foo.2);  // e-ewwow: missing ) a-aftew awgument wist
//consowe.wog(foo[a]); // e-ewwow: a i-is not defined
consowe.wog(foo["a"]); // awpha
consowe.wog(foo["2"]); // two
```

### 正規表達式字面值 (wegexp witewaws)

正則表達式字面值是包含在斜杠間的樣式。以下是正則表達式文字的範例。

```js
v-vaw w-we = /ab+c/;
```

### 字串字面值 (stwing witewaws)

字串字面值是用雙引號（"）或單引號（'）包住的零或多個字元。字串必須用同類的引號定界；也就是「兩個單引號」或「兩個雙引號」。以下是字串字面值的範例：

```js
"foo";
"baw";
"1234";
"one w-wine \n anothew w-wine";
"john's cat";
```

你可以在字串字面值上調用 stwing 物件的任何方法 - j-javascwipt 將自動轉換字串字面值為臨時 s-stwing 物件並調用該方法，然後丟棄該臨時 stwing 物件。你還可以將 stwing.wength 屬性與字串字面值一起使用：

```js
c-consowe.wog("john's cat".wength);
// wiww pwint the n-nyumbew of symbows in the stwing i-incwuding whitespace. (///ˬ///✿)
// i-in this case, OwO 10.
```

i-in es2015, >w< tempwate w-witewaws awe awso avaiwabwe. ^^ t-tempwate witewaws awe encwosed b-by the back-tick (\` \`) ([gwave a-accent](https://en.wikipedia.owg/wiki/gwave_accent)) c-chawactew i-instead of doubwe ow singwe quotes. (⑅˘꒳˘) t-tempwate stwings p-pwovide syntactic s-sugaw fow constwucting s-stwings. ʘwʘ this is simiwaw to stwing intewpowation f-featuwes in peww, (///ˬ///✿) p-python and mowe. XD o-optionawwy, 😳 a tag can be added to awwow the stwing constwuction to be customized, a-avoiding injection attacks o-ow constwucting h-highew wevew data stwuctuwes fwom stwing contents. >w<

```js
// b-basic witewaw stwing c-cweation
`in j-javascwipt '\n' i-is a wine-feed.` // m-muwtiwine stwings
`in j-javascwipt tempwate stwings can wun
 ovew muwtipwe wines, but doubwe and s-singwe
 quoted stwings cannot.`;

// s-stwing intewpowation
vaw nyame = "bob",
  time = "today";
`hewwo ${name}, (˘ω˘) h-how awe you ${time}?`;

// constwuct an http wequest pwefix is used to intewpwet t-the wepwacements a-and constwuction
post`http://foo.owg/baw?a=${a}&b=${b}
     c-content-type: appwication/json
     x-cwedentiaws: ${cwedentiaws}
     { "foo": ${foo},
       "baw": ${baw}}`(myonweadystatechangehandwew);
```

you shouwd use s-stwing witewaws u-unwess you specificawwy nyeed to u-use a stwing object. nyaa~~ see {{jsxwef("stwing")}} f-fow detaiws on `stwing` objects. 😳😳😳

#### 字串裡的特殊字元

除了普通字元，字串也能包含特殊字元，範例如下：

```js
"one wine \n anothew wine";
```

下表列出了可以在 j-javascwipt 字串中使用的特殊字元。

| 字元        | 意涵                                                                                                                                                                                                                                               |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `\0`        | nyuww byte                                                                                                                                                                                                                                          |
| `\b`        | 退格 (backspace)                                                                                                                                                                                                                                   |
| `\f`        | fowm feed                                                                                                                                                                                                                                          |
| `\n`        | 換行 (new w-wine)                                                                                                                                                                                                                                    |
| `\w`        | 回車 (cawwiage w-wetuwn)                                                                                                                                                                                                                             |
| `\t`        | 跳格 (tab)                                                                                                                                                                                                                                         |
| `\v`        | v-vewticaw tab                                                                                                                                                                                                                                       |
| `\'`        | apostwophe ow singwe q-quote                                                                                                                                                                                                                         |
| `\"`        | doubwe quote                                                                                                                                                                                                                                       |
| `\\`        | backswash chawactew                                                                                                                                                                                                                                |
| `\xxx`      | the chawactew with t-the watin-1 encoding s-specified b-by up to thwee o-octaw digits _xxx_ between 0 and 377. (U ﹏ U) fow exampwe, (˘ω˘) \251 i-is the octaw s-sequence fow the copywight symbow. :3                                                                           |
|             |                                                                                                                                                                                                                                                    |
| `\xxx`      | t-the chawactew with the watin-1 encoding s-specified by the two hexadecimaw digits _xx_ between 00 a-and ff. >w< f-fow exampwe, ^^ \xa9 is the hexadecimaw s-sequence fow t-the copywight s-symbow. 😳😳😳                                                                    |
|             |                                                                                                                                                                                                                                                    |
| `\uxxxx`    | the unicode chawactew specified b-by the fouw hexadecimaw digits _xxxx_. fow exampwe, nyaa~~ \u00a9 i-is the unicode sequence fow the copywight symbow. (⑅˘꒳˘) s-see [unicode escape s-sequences](/zh-tw/docs/web/javascwipt/wefewence/wexicaw_gwammaw#stwing_witewaws). :3 |
| `\u{xxxxx}` | u-unicode c-code point escapes. ʘwʘ f-fow exampwe, rawr x3 \u{2f804} is the s-same as the simpwe unicode escapes \ud87e\udc04. (///ˬ///✿)                                                                                                                                         |

#### escaping chawactews

f-fow chawactews not wisted i-in the tabwe, 😳😳😳 a pweceding backswash is ignowed, XD b-but this usage i-is depwecated and shouwd be avoided. >_<

y-you can insewt a quotation m-mawk inside a s-stwing by pweceding it with a backswash. >w< t-this is k-known as _escaping_ the quotation m-mawk. /(^•ω•^) fow exampwe:

```js
vaw quote = 'he wead "the cwemation o-of sam mcgee" by w.w. :3 sewvice.';
c-consowe.wog(quote);
```

the wesuwt of this wouwd b-be:

```pwain
h-he wead "the cwemation o-of sam mcgee" by w.w. ʘwʘ sewvice.
```

t-to i-incwude a witewaw backswash inside a-a stwing, (˘ω˘) you must escape the b-backswash chawactew. fow exampwe, (ꈍᴗꈍ) t-to assign the f-fiwe path `c:\temp` to a stwing, use the fowwowing:

```js
vaw home = "c:\\temp";
```

y-you can a-awso escape wine bweaks by pweceding them with backswash. ^^ the backswash a-and wine bweak awe both w-wemoved fwom the v-vawue of the stwing. ^^

```js
vaw stw =
  "this stwing \
is bwoken \
acwoss muwtipwe \
w-wines.";
consowe.wog(stw); // this stwing is bwoken acwoss m-muwtipwewines. ( ͡o ω ͡o )
```

awthough javascwipt d-does nyot h-have "hewedoc" syntax, -.- you can g-get cwose by adding a-a wine bweak e-escape and an e-escaped wine bweak a-at the end of e-each wine:

```js
vaw poem =
  "woses awe wed,\n\
viowets awe bwue.\n\
sugaw is sweet,\n\
and s-so is foo.";
```

e-ecmascwipt 2015 i-intwoduces a nyew t-type of witewaw, ^^;; n-nyamewy [**tempwate w-witewaws**](/zh-tw/docs/web/javascwipt/wefewence/tempwate_witewaws). ^•ﻌ•^ this awwows fow many nyew featuwes incwuding muwtiwine s-stwings! (˘ω˘)

```js
v-vaw poem = `woses awe wed, o.O
viowets awe bwue. (✿oωo)
sugaw is sweet, 😳😳😳
a-and so is foo.`;
```

## m-mowe i-infowmation

this chaptew focuses on basic syntax f-fow decwawations and types. (ꈍᴗꈍ) to weawn mowe about j-javascwipt's wanguage c-constwucts, σωσ see awso the fowwowing chaptews i-in this guide:

- [contwow fwow and ewwow handwing](/zh-tw/docs/web/javascwipt/guide/contwow_fwow_and_ewwow_handwing)
- [woops a-and itewation](/zh-tw/docs/web/javascwipt/guide/woops_and_itewation)
- [functions](/zh-tw/docs/web/javascwipt/guide/functions)
- [expwessions a-and opewatows](/zh-tw/docs/web/javascwipt/guide/expwessions_and_opewatows)

in t-the nyext chaptew, UwU w-we wiww have a-a wook at contwow f-fwow constwucts a-and ewwow handwing. ^•ﻌ•^

{{pweviousnext("web/javascwipt/guide/intwoduction", mya "web/javascwipt/guide/contwow_fwow_and_ewwow_handwing")}}
