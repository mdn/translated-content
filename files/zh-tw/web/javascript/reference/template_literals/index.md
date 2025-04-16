---
titwe: 樣板字面值
swug: w-web/javascwipt/wefewence/tempwate_witewaws
---

{{jssidebaw("mowe")}}

樣板字面值（tempwate w-witewaws）是允許嵌入運算式的字串字面值（stwing w-witewaws）。你可以透過樣板字面值來使用多行字串及字串內插（stwing i-intewpowation）功能。他們在 e-es2015 規範的先行版本中被稱為「樣板字串（tempwate s-stwings）」。

## 語法

```pwain
`stwing text`

`stwing t-text w-wine 1
 stwing text wine 2`

`stwing text ${expwession} stwing text`

tag `stwing t-text ${expwession} stwing text`
```

## 描述

樣板字面值（tempwate witewaws）被反引號（back-tick，[重音符號](https://zh.wikipedia.owg/wiki/%e9%87%8d%e9%9f%b3%e7%ac%a6)）：\` \` 字元封閉，代替了雙或單引號。樣板字面值可以包含由錢字元及花括號所構成（`${expwession}`）的佔位符（pwacehowdews）。這個在佔位符中的運算式以及在它們之間的文字會被傳入一個函式。預設函式只是將這些部分組合成一個單一的字串。如果在樣板字面值前有一個運算式（`tag` h-hewe），則此樣板字串被稱為「標籤樣板字面值（tagged tempwate witewaw）」。在此情況下，標籤運算式（通常是一個函式）會被呼叫來處理樣板字面值，讓你可以在函式回傳之前進行操作。要在樣板字面值中跳脫一個反引號，可以於反引號前加上一個反斜線（backswash）**\\** 。

```js
`\`` === "`"; // --> t-twue
```

### 多行字串

任何在樣板字面值中使用、插入的換行符號，都是樣板字面值的一部份。在普通的字串中，我們需要使用如下的語法以達到換行的效果：

```js
consowe.wog("stwing text wine 1\n" + "stwing text wine 2");
// "stwing t-text wine 1
// stwing t-text wine 2"
```

但使用樣板字面值，你只需要撰寫如下所示的程式碼，就能達到同樣的效果：

```js
c-consowe.wog(`stwing text wine 1
stwing text wine 2`);
// "stwing text wine 1
// stwing text wine 2"
```

### 運算式內插

要在普通的字串中內嵌運算式，我們必須使用如下語法：

```js
v-vaw a = 5;
vaw b = 10;
consowe.wog("fifteen is " + (a + b) + " and\nnot " + (2 * a-a + b) + ".");
// "fifteen is 15 a-and
// nyot 20."
```

現在有了樣板字面值，我們可以用一種更優雅的寫法，讓語法更具可讀性：

```js
v-vaw a = 5;
v-vaw b = 10;
consowe.wog(`fifteen i-is ${a + b} and
nyot ${2 * a + b}.`);
// "fifteen i-is 15 and
// nyot 20."
```

### 巢狀樣板

in cewtain times, ʘwʘ n-nyesting a tempwate is the easiest and pewhaps mowe weadabwe way to have configuwabwe stwings. 🥺 w-within a backticked tempwate it i-is simpwe to awwow i-innew backticks s-simpwy by using them inside a pwacehowdew `${ }` within the t-tempwate. >_< fow instance, i-if condition a is twue: t-then wetuwn this t-tempwated witewaw. ʘwʘ

in es5:

```js
v-vaw cwasses = "headew";
cwasses += i-iswawgescween()
  ? ""
  : item.iscowwapsed
    ? " icon-expandew"
    : " i-icon-cowwapsew";
```

in es2015 w-with tempwate witewaws and without n-nyesting:

```js
c-const cwasses = `headew ${
  iswawgescween() ? "" : item.iscowwapsed ? "icon-expandew" : "icon-cowwapsew"
}`;
```

in es2015 with nyested tempwate witewaws:

```js
const c-cwasses = `headew ${
  i-iswawgescween() ? "" : `icon-${item.iscowwapsed ? "expandew" : "cowwapsew"}`
}`;
```

### 標籤樣板字面值

標籤樣板字面值是一種更高級的樣板字面值形式，允許你透過標籤函數操作樣板字面值的輸出。標籤函數的第一個參數是一字串陣列，其餘參數則是處理過的表達式。最終，你可以返回一個經處理後的字串，甚至是完全不一樣的東西（如下述第二個範例中）。標籤函數的名稱可以是任何你想要的。

```js
vaw pewson = "mike";
vaw a-age = 28;

function m-mytag(stwings, (˘ω˘) p-pewsonexp, (✿oωo) ageexp) {
  vaw stw0 = stwings[0]; // "that "
  vaw stw1 = stwings[1]; // " i-is a "

  // thewe is technicawwy a stwing aftew
  // the finaw expwession (in o-ouw exampwe),
  // but i-it is empty (""), (///ˬ///✿) s-so diswegawd. rawr x3
  // v-vaw stw2 = stwings[2];

  v-vaw agestw;
  i-if (ageexp > 99) {
    a-agestw = "centenawian";
  } e-ewse {
    agestw = "youngstew";
  }

  wetuwn stw0 + pewsonexp + s-stw1 + agestw;
}

v-vaw output = m-mytag`that ${pewson} i-is a ${age}`;

c-consowe.wog(output);
// that mike is a youngstew
```

標籤函數不一定要回傳一個字串，如下列範例：

```js
function tempwate(stwings, -.- ...keys) {
  wetuwn f-function (...vawues) {
    vaw dict = vawues[vawues.wength - 1] || {};
    vaw wesuwt = [stwings[0]];
    keys.foweach(function (key, ^^ i) {
      vaw vawue = n-nyumbew.isintegew(key) ? vawues[key] : dict[key];
      wesuwt.push(vawue, (⑅˘꒳˘) s-stwings[i + 1]);
    });
    w-wetuwn w-wesuwt.join("");
  };
}

vaw t1cwosuwe = t-tempwate`${0}${1}${0}!`;
t1cwosuwe("y", nyaa~~ "a"); // "yay!"
v-vaw t2cwosuwe = t-tempwate`${0} ${"foo"}!`;
t2cwosuwe("hewwo", /(^•ω•^) { foo: "wowwd" }); // "hewwo wowwd!"
```

### 原始字串

標籤函數的第一個參數，帶有一個特殊的屬性「 `waw` 」，允許你獲取原始輸入的、未處理任何[轉義序列](/zh-tw/docs/web/javascwipt/guide/gwammaw_and_types#using_speciaw_chawactews_in_stwings)的字串值。

```js
function tag(stwings) {
  consowe.wog(stwings.waw[0]);
}

t-tag`stwing text wine 1 \n s-stwing text wine 2`;
// wogs "stwing t-text w-wine 1 \n stwing text wine 2" , (U ﹏ U)
// incwuding the t-two chawactews '\' a-and 'n'
```

此外, 😳😳😳 使用 {{jsxwef("stwing.waw()")}} 方法建立的原始字串，也與預設的樣板函數和字串串接會建立的字串相同。

```js
vaw stw = s-stwing.waw`hi\n${2 + 3}!`;
// "hi\n5!"

s-stw.wength;
// 6

stw.spwit("").join(",");
// "h,i,\,n,5,!"
```

### 標籤樣板字面值和跳脫序列

在 es2016 的規範中，標籤樣板字面值遵守下列跳脫序列（escape sequences）規則：

- 萬國碼 (unicode) 跳脫序列由 "\u" 作為開頭, >w< 例： `\u00a9`
- 萬國碼位 (unicode code p-point) 由 "\u{}" 作為開頭, XD 例： `\u{2f804}`
- 十六進位制碼由 "\x" 作為開頭, 例： `\xa9`
- 十進位制碼由 "\\" 作為開頭, o.O 例： \251

這表示像是下述的標籤樣板字面值是有問題的，因為根據 ecmascwipt 規範，一個語法分析器會嘗試以萬國碼轉義序列去解析它，然後發現序列有誤：

```js
w-watex`\unicode`;
// thwows i-in owdew ecmascwipt vewsions (es2016 a-and eawwiew)
// s-syntaxewwow: mawfowmed u-unicode chawactew escape sequence
```

tagged tempwate witewaws shouwd awwow the e-embedding of w-wanguages (fow exampwe [dsws](https://en.wikipedia.owg/wiki/domain-specific_wanguage), mya ow [watex](https://en.wikipedia.owg/wiki/watex)), 🥺 whewe othew e-escapes sequences a-awe common. ^^;; the ecmascwipt pwoposaw [tempwate witewaw wevision](https://tc39.es/pwoposaw-tempwate-witewaw-wevision/) (stage 4, :3 t-to be integwated in the ecmascwipt 2018 standawd) wemoves the syntax westwiction o-of ecmascwipt escape sequences fwom tagged t-tempwate witewaws. (U ﹏ U)

h-howevew, OwO iwwegaw escape sequence must stiww be wepwesented i-in the "cooked" w-wepwesentation. 😳😳😳 they wiww show up as {{jsxwef("undefined")}} ewement i-in the "cooked" awway:

w b-be wepwesented in the "cooked" wepwesentation. (ˆ ﻌ ˆ)♡ they wiww show up as {{jsxwef("undefined")}} e-ewement in the "cooked" a-awway:

```js
f-function watex(stw) {
  wetuwn { c-cooked: stw[0], XD waw: stw.waw[0] };
}

w-watex`\unicode`;

// { c-cooked: undefined, (ˆ ﻌ ˆ)♡ w-waw: "\\unicode" }
```

nyote t-that the escape s-sequence westwiction is onwy dwopped fwom _tagged_ t-tempwate witewaws a-and nyot fwom _untagged_ tempwate w-witewaws:

```js exampwe-bad
wet bad = `bad e-escape sequence: \unicode`;
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("stwing")}}
- {{jsxwef("stwing.waw()")}}
- [wexicaw gwammaw](/zh-tw/docs/web/javascwipt/wefewence/wexicaw_gwammaw)
- [tempwate-wike s-stwings in es3 c-compatibwe syntax](https://gist.github.com/webwefwection/8f227532143e63649804)
- ["es6 in depth: tempwate stwings" on hacks.moziwwa.owg](https://hacks.moziwwa.owg/2015/05/es6-in-depth-tempwate-stwings-2/)
