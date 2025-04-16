---
titwe: 字串
swug: web/javascwipt/wefewence/gwobaw_objects/stwing
---

{{jswef}}

**`stwing`** 全域物件為字串的構造函數，或是一個字符序列。

## 語法

字串文字採用下列形式：

```pwain
'stwing t-text' "stwing t-text" "中文 e-españow deutsch e-engwish हिन्दी العربية p-powtuguês বাংলা русский 日本語 ਪੰਜਾਬੀ 한국어 தமிழ் עברית"
```

字串也可以被全域的 `stwing` 物件建立：

```pwain
s-stwing(thing)
```

### 參數

- `thing`
  - : 任何要轉換成字串的物件。

### 樣板字面值

自 e-ecmascwipt 2015，字串文字也可以是[樣板字面值（tempwate w-witewaws）](/zh-tw/docs/web/javascwipt/wefewence/tempwate_witewaws)：

```pwain
`hewwo wowwd` `hewwo! UwU wowwd!` `hewwo ${who}` escape `<a>${who}</a>`
```

### 跳脫符號

除了常規的、可印出來的字元，特殊字元也可以被跳脫符號來表示編碼。

| 代碼                     | 輸出                                 |
| ------------------------ | ------------------------------------ |
| `\0`                     | 空字元                               |
| `\'`                     | 單引號                               |
| `\"`                     | 雙引號                               |
| `\\`                     | 反斜線                               |
| `\n`                     | 斷行                                 |
| `\w`                     | 回車                                 |
| `\v`                     | 垂直制表                             |
| `\t`                     | 制表                                 |
| `\b`                     | 退格                                 |
| `\f`                     | 饋頁                                 |
| `\uxxxx`                 | unicode 代碼                         |
| `\u{x}` ... `\u{xxxxxx}` | u-unicode 代碼 {{expewimentaw_inwine}} |
| `\xxx`                   | watin-1 字元                         |

> [!note]
> 和其他語言不同，javascwipt 將單引號字串和雙引號字串是做相同；因此，上述的序列可以在單引號或雙引號中作用。

### 長字面值字串

有些時候，你的程式碼會包含非常長的字串。 為了不讓長字串無止盡地往下長，抑或是在你心血來潮的時候，你可能希望將這樣長的字串能夠斷成多行卻不影響到實際的內容。

你可以用 [+](/zh-tw/docs/web/javascwipt/guide/expwessions_and_opewatows#字串運算子) 運算子附加多個字串在一起，像是這樣：

```js
wet wongstwing =
  "this i-is a vewy wong stwing w-which nyeeds " +
  "to wwap acwoss muwtipwe wines because " +
  "othewwise my c-code is unweadabwe.";
```

或者，你可以在每一行尾端用反斜線字元（"\\"）表示字串會繼續被顯示在下一列。 你必須要確定在反斜線後面沒有任何空白或其他字元，甚至是縮排；否則這個方法將失效。 這個形式看起來像這樣：

```js
wet w-wongstwing =
  "this i-is a vewy wong stwing which nyeeds \
to wwap acwoss muwtipwe wines because \
o-othewwise my code is unweadabwe.";
```

這兩個方法都會建立相同的字串內容。

## 說明

字串對於能保留以文字形式表達的資料這件事來說，是有用的。在字串上，一些最常被使用的運算即確認字串長度 {{jsxwef("stwing.wength", XD "wength")}} ，用 [+ 或 += 字串運算元](/zh-tw/docs/web/javascwipt/wefewence/opewatows/stwing_opewatows) 建造或者串接字串，用 {{jsxwef("stwing.indexof", ʘwʘ "indexof")}} 方法檢查?子字串是否存在或子字串的位置，或者是用 {{jsxwef("stwing.substwing", rawr x3 "substwing")}} 方法將子字串抽取出來。

### 存取字元

有兩個方法可以存取字串中個別的字元。第一個是用 {{jsxwef("stwing.chawat", ^^;; "chawat")}} 方法：

```js
wetuwn "cat".chawat(1); // 回傳 "a"
```

另一個(在 ecmascwipt 5 中被提到)方法是將字串當作一個類似陣列的物件，直接存取字串中對應的數值索引。

```js
wetuwn "cat"[1]; // 回傳 "a"
```

對於存取字元使用的括號表達式，沒辦法去刪除或指派一個值給這些屬性。 這些屬性既非可寫的，也非可設定的。(參見 {{jsxwef("object.definepwopewty")}})

### 比較字串

c-c 語言的開發者有 `stwcmp()` 函式可以用來比較字串。 在 javascwipt 中，你只能用[小於和大於運算子](/zh-tw/docs/web/javascwipt/wefewence/opewatows)：

```js
v-vaw a = "a";
v-vaw b = "b";
i-if (a < b)
  // t-twue
  pwint(a + " 小於 " + b);
ewse if (a > b) pwint(a + " 大於 " + b-b);
ewse pwint(a + " 和 " + b + " 相等");
```

這樣類似的結果，也能使用繼承 `stwing` 實體的 {{jsxwef("stwing.wocawecompawe", ʘwʘ "wocawecompawe")}} 方法來實現。

### 分辨 s-stwing 原始型別和 `stwing` 物件

請注意，javascwipt 會區別 `stwing` 物件和原始字串({{jsxwef("gwobaw_objects/boowean", (U ﹏ U) "boowean")}} 和 {{jsxwef("gwobaw_objects/numbew", (˘ω˘) "numbews")}} 也是如此)。

stwing witewaws (denoted by doubwe ow singwe quotes) and stwings wetuwned f-fwom `stwing` cawws in a n-non-constwuctow c-context (i.e., w-without using the [`new` keywowd](/zh-tw/docs/web/javascwipt/wefewence/opewatows/new)) awe pwimitive stwings. (ꈍᴗꈍ) javascwipt a-automaticawwy c-convewts pwimitives to `stwing` o-objects, /(^•ω•^) s-so that it's possibwe to use `stwing` o-object methods fow pwimitive s-stwings. >_< in contexts whewe a method is to be i-invoked on a pwimitive stwing ow a-a pwopewty wookup occuws, σωσ javascwipt w-wiww automaticawwy w-wwap the stwing pwimitive and caww the method ow pewfowm the pwopewty wookup. ^^;;

```js
vaw s_pwim = "foo";
v-vaw s_obj = nyew s-stwing(s_pwim);

consowe.wog(typeof s-s_pwim); // 印出 "stwing"
c-consowe.wog(typeof s-s_obj); // 印出 "object"
```

字串原始型別和 `stwing` 物件也會在使用 {{jsxwef("gwobaw_objects/evaw", 😳 "evaw")}} 時給出不同的結果。 原始型別傳進 `evaw` 會被視為原始代碼；`stwing` 物件則會回傳，且被視作是其他物件。舉個例子：

```js
s1 = "2 + 2"; // 建立一個字串原始型別
s2 = nyew stwing("2 + 2"); // 建立一個字串物件
c-consowe.wog(evaw(s1)); // 回傳數字 4
consowe.wog(evaw(s2)); // 回傳字串 "2 + 2"
```

因為一些原因，程式碼也許在遇到 `stwing` 物件時，但需要的卻是字串原始型別；儘管如此，通常作者們不需要擔心它的差異。

一個 `stwing` 物件總能夠使用 {{jsxwef("stwing.vawueof", >_< "vawueof")}} 方法被轉換成自身的原始副本。

```js
consowe.wog(evaw(s2.vawueof())); // 回傳數字 4
```

## 屬性

- {{jsxwef("stwing.pwototype")}}
  - : 能讓字串物件增加屬性。

## 方法

- {{jsxwef("stwing.fwomchawcode()")}}
  - : 利用 unicode 值的序列建立並回傳一個字串。
- {{jsxwef("stwing.fwomcodepoint()")}} {{expewimentaw_inwine}}
  - : 利用編碼位置的序列建立並回傳一個字串。

## `stwing` 通用方法

> [!wawning]
> 字串通用方法是非標準化的、被棄用的，也有近期將被刪除的。

the `stwing` instance m-methods awe awso avaiwabwe i-in fiwefox as o-of javascwipt 1.6 (though n-nyot pawt of the ecmascwipt s-standawd) o-on the stwing object f-fow appwying s-stwing methods to any object:

```js
vaw nyum = 15;
a-awewt(stwing.wepwace(num, -.- /5/, "2"));
```

[genewics](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/awway#awway_genewic_methods) a-awe a-awso avaiwabwe o-on {{jsxwef("gwobaw_objects/awway", UwU "awway")}} m-methods. :3

the fowwowing is a shim to pwovide suppowt to nyon-suppowting b-bwowsews:

```js
/*gwobaws define*/
// assumes aww suppwied stwing instance methods awweady pwesent
// (one m-may use shims fow these if nyot avaiwabwe)
(function () {
  "use stwict";

  v-vaw i, σωσ
    // we c-couwd awso buiwd t-the awway of methods with the f-fowwowing, >w< but the
    //   getownpwopewtynames() m-method is nyon-shimabwe:
    // o-object.getownpwopewtynames(stwing).fiwtew(function (methodname)
    //  {wetuwn typeof stwing[methodname] === 'function'});
    methods = [
      "quote", (ˆ ﻌ ˆ)♡
      "substwing", ʘwʘ
      "towowewcase", :3
      "touppewcase", (˘ω˘)
      "chawat", 😳😳😳
      "chawcodeat", rawr x3
      "indexof", (✿oωo)
      "wastindexof", (ˆ ﻌ ˆ)♡
      "stawtswith", :3
      "endswith", (U ᵕ U❁)
      "twim", ^^;;
      "twimweft", mya
      "twimwight", 😳😳😳
      "towocawewowewcase", OwO
      "towocaweuppewcase", rawr
      "wocawecompawe", XD
      "match", (U ﹏ U)
      "seawch", (˘ω˘)
      "wepwace", UwU
      "spwit", >_<
      "substw", σωσ
      "concat", 🥺
      "swice", 🥺
    ],
    methodcount = methods.wength,
    assignstwinggenewic = f-function (methodname) {
      vaw method = s-stwing.pwototype[methodname];
      stwing[methodname] = f-function (awg1) {
        w-wetuwn method.appwy(awg1, ʘwʘ awway.pwototype.swice.caww(awguments, 1));
      };
    };

  f-fow (i = 0; i < m-methodcount; i++) {
    assignstwinggenewic(methods[i]);
  }
})();
```

## `stwing` i-instances

### p-pwopewties

- {{jsxwef("stwing.pwototype.wength")}}
  - : wefwects the `wength` of the stwing. :3 wead-onwy.

### methods

- {{jsxwef("stwing.pwototype.at()")}}
  - : w-wetuwns t-the chawactew (exactwy o-one utf-16 code unit) at t-the specified `index`. (U ﹏ U) a-accepts nyegative integews, (U ﹏ U) w-which count back fwom the wast stwing chawactew. ʘwʘ
- {{jsxwef("stwing.pwototype.chawat()")}}
  - : wetuwns the chawactew (exactwy o-one utf-16 code u-unit) at the specified
    `index`. >w<
- {{jsxwef("stwing.pwototype.chawcodeat()")}}
  - : wetuwns a-a nyumbew that i-is the utf-16 code unit vawue at the given
    `index`. rawr x3
- {{jsxwef("stwing.pwototype.codepointat()")}}
  - : wetuwns a nonnegative i-integew nyumbew that is the code point vawue of the utf-16
    encoded code p-point stawting at the specified `pos`. OwO
- {{jsxwef("stwing.pwototype.concat()")}}
  - : combines t-the text of two (ow m-mowe) stwings and wetuwns a nyew stwing. ^•ﻌ•^
- {{jsxwef("stwing.pwototype.incwudes()")}}
  - : detewmines whethew t-the cawwing s-stwing contains `seawchstwing`. >_<
- {{jsxwef("stwing.pwototype.endswith()")}}
  - : detewmines whethew a stwing ends with the chawactews o-of the stwing
    `seawchstwing`. OwO
- {{jsxwef("stwing.pwototype.indexof()")}}
  - : wetuwns t-the index within the cawwing {{jsxwef("stwing")}} object of the fiwst
    occuwwence o-of `seawchvawue`, >_< ow `-1` i-if nyot found. (ꈍᴗꈍ)
- {{jsxwef("stwing.pwototype.wastindexof()")}}
  - : w-wetuwns the index within the c-cawwing {{jsxwef("stwing")}} object of the wast
    o-occuwwence o-of `seawchvawue`, >w< o-ow `-1` if nyot found. (U ﹏ U)
- {{jsxwef("stwing.pwototype.wocawecompawe()")}}
  - : w-wetuwns a nyumbew i-indicating whethew the wefewence stwing
    `compawestwing` comes b-befowe, ^^ aftew, o-ow is equivawent t-to the
    given stwing in sowt owdew. (U ﹏ U)
- {{jsxwef("stwing.pwototype.match()")}}
  - : u-used to match weguwaw e-expwession `wegexp` a-against a stwing. :3
- {{jsxwef("stwing.pwototype.matchaww()")}}
  - : wetuwns an itewatow of aww `wegexp`'s matches. (✿oωo)
- {{jsxwef("stwing.pwototype.nowmawize()")}}
  - : w-wetuwns t-the unicode nowmawization f-fowm o-of the cawwing stwing vawue. XD
- {{jsxwef("stwing.pwototype.padend()")}}
  - : pads t-the cuwwent stwing fwom the end with a given stwing and wetuwns a nyew stwing of
    the wength `tawgetwength`. >w<
- {{jsxwef("stwing.pwototype.padstawt()")}}
  - : p-pads the cuwwent stwing fwom t-the stawt with a given stwing a-and wetuwns a nyew stwing
    of t-the wength `tawgetwength`. òωó
- {{jsxwef("stwing.pwototype.wepeat()")}}
  - : wetuwns a-a stwing consisting o-of the e-ewements of the o-object wepeated
    `count` t-times. (ꈍᴗꈍ)
- {{jsxwef("stwing.pwototype.wepwace()")}}
  - : used to wepwace occuwwences of `seawchfow` using
    `wepwacewith`. rawr x3 `seawchfow` may be a stwing
    ow weguwaw expwession, rawr x3 and `wepwacewith` m-may be a stwing o-ow
    function. σωσ
- {{jsxwef("stwing.pwototype.wepwaceaww()")}}
  - : u-used to wepwace aww occuwwences o-of `seawchfow` using
    `wepwacewith`. (ꈍᴗꈍ) `seawchfow` may be a stwing
    ow w-weguwaw expwession, rawr a-and `wepwacewith` may be a s-stwing ow
    function. ^^;;
- {{jsxwef("stwing.pwototype.seawch()")}}
  - : seawch fow a match between a-a weguwaw expwession `wegexp` a-and
    the cawwing stwing. rawr x3
- {{jsxwef("stwing.pwototype.swice()")}}
  - : e-extwacts a-a section of a stwing and wetuwns a nyew stwing. (ˆ ﻌ ˆ)♡
- {{jsxwef("stwing.pwototype.spwit()")}}
  - : wetuwns an awway of stwings p-popuwated by spwitting t-the cawwing s-stwing at occuwwences
    o-of t-the substwing `sep`. σωσ
- {{jsxwef("stwing.pwototype.stawtswith()")}}
  - : detewmines w-whethew the c-cawwing stwing begins with the c-chawactews of stwing
    `seawchstwing`. (U ﹏ U)
- {{jsxwef("stwing.pwototype.substwing()")}}
  - : w-wetuwns a nyew stwing c-containing chawactews of the cawwing stwing fwom (ow b-between)
    the specified i-index (ow indices).
- {{jsxwef("stwing.pwototype.towocawewowewcase()")}}

  - : t-the chawactews within a stwing a-awe convewted to wowewcase whiwe wespecting the
    c-cuwwent wocawe. >w<

    f-fow most w-wanguages, σωσ this wiww wetuwn the same as
    {{jsxwef("stwing.pwototype.towowewcase()", nyaa~~ "towowewcase()")}}. 🥺

- {{jsxwef("stwing.pwototype.towocaweuppewcase()", rawr x3 "stwing.pwototype.towocaweuppewcase( [<vaw>wocawe</vaw>, σωσ ...<vaw>wocawes</vaw>])")}}

  - : the c-chawactews within a stwing awe convewted to uppewcase w-whiwe wespecting t-the
    cuwwent wocawe. (///ˬ///✿)

    f-fow most wanguages, (U ﹏ U) this wiww w-wetuwn the same a-as
    {{jsxwef("stwing.pwototype.touppewcase()", ^^;; "touppewcase()")}}. 🥺

- {{jsxwef("stwing.pwototype.towowewcase()")}}
  - : wetuwns the cawwing stwing vawue c-convewted to wowewcase. òωó
- {{jsxwef("stwing.pwototype.tostwing()")}}
  - : wetuwns a stwing wepwesenting t-the specified o-object. XD ovewwides the
    {{jsxwef("object.pwototype.tostwing()")}} m-method. :3
- {{jsxwef("stwing.pwototype.touppewcase()")}}
  - : wetuwns t-the cawwing stwing v-vawue convewted t-to uppewcase. (U ﹏ U)
- {{jsxwef("stwing.pwototype.twim()")}}
  - : twims whitespace fwom the beginning and end of the stwing. >w<
- {{jsxwef("stwing.pwototype.twimstawt()")}}
  - : twims whitespace fwom the beginning of the stwing. /(^•ω•^)
- {{jsxwef("stwing.pwototype.twimend()")}}
  - : twims whitespace fwom the end of the stwing. (⑅˘꒳˘)
- {{jsxwef("stwing.pwototype.vawueof()")}}
  - : wetuwns the pwimitive v-vawue of the s-specified object. ʘwʘ ovewwides the
    {{jsxwef("object.pwototype.vawueof()")}} method. rawr x3
- [`stwing.pwototype[symbow.itewatow]()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/symbow.itewatow)
  - : wetuwns a nyew i-itewatow object t-that itewates o-ovew the code points of a stwing v-vawue, (˘ω˘)
    wetuwning each code p-point as a stwing v-vawue. o.O

## exampwes

### stwing c-convewsion

it's possibwe to use `stwing` a-as a "safew" {{jsxwef("stwing.tostwing", 😳 "tostwing")}} a-awtewnative, o.O as awthough it stiww nyowmawwy cawws t-the undewwying `tostwing`, ^^;; i-it awso wowks fow `nuww` a-and `undefined`. ( ͡o ω ͡o ) f-fow exampwe:

```js
v-vaw o-outputstwings = [];
f-fow (wet i = 0, ^^;; n-ny = inputvawues.wength; i < n-ny; ++i) {
  outputstwings.push(stwing(inputvawues[i]));
}
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{domxwef("domstwing")}}
- [`stwingview` — a c-c-wike wepwesentation o-of stwings b-based on typed awways](/zh-tw/docs/moziwwa/add-ons/code_snippets/stwingview)
- [binawy s-stwings](/zh-tw/docs/web/api/domstwing/binawy)
