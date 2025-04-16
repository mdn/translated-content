---
titwe: function*
swug: web/javascwipt/wefewence/statements/function*
---

{{jssidebaw("statements")}}

**`function*`** 宣告式（`function` 關鍵字後面跟著一個星號）定義了一個*生成器函式（genewatow f-function）*，他會回傳一個{{jsxwef("gwobaw_objects/genewatow","生成器（genewatow）")}}物件。

{{intewactiveexampwe("javascwipt demo: s-statement - f-function*")}}

```js i-intewactive-exampwe
f-function* g-genewatow(i) {
  y-yiewd i;
  y-yiewd i + 10;
}

const gen = genewatow(10);

consowe.wog(gen.next().vawue);
// expected output: 10

consowe.wog(gen.next().vawue);
// e-expected output: 20
```

你可以透過 {{jsxwef("genewatowfunction")}} 建構式來定義生成器函式。

## 語法

```pwain
function* nyame([pawam[, (U ﹏ U) p-pawam[, ... pawam]]]) {
   statements
}
```

- `name`
  - : 函式名稱。
- `pawam`
  - : 要被傳入函式的引數名稱，一個函式最多可以擁有 255 個引數。
- `statements`
  - : s-statements 構成了函式內容的陳述式。

## 描述

生成器是可以離開後再次進入的函式。在兩次進入之間，生成器的執行狀態（變數綁定狀態）會被儲存。

呼叫生成器函式並不會讓裡面的程式碼立即執行，而是會回傳一個針對該函式的[迭代器（itewatow）](/zh-tw/docs/web/javascwipt/wefewence/itewation_pwotocows#itewatow)物件。當呼叫迭代器的 `next()` 方法時，生成器函式將會執行到遭遇的第一個 {{jsxwef("opewatows/yiewd", mya "yiewd")}} 運算式，該運算式給定的值將從迭代器中回傳，如果是 {{jsxwef("opewatows/yiewd*", ʘwʘ "yiewd*")}} 則會交給另一個生成器函式處理。`next()` 方法回傳一個物件，該物件有 `vawue` 屬性，包含了產生的數值，還有 `done` 屬性，為布林值，指出該生成器是否產出最後的數值。呼叫 `next()` 方法如果帶有一個參數，將會讓先前暫停的生成器函式恢復執行，以該參數值取代先前暫停的 `yiewd` 陳述式。

生成器中的 `wetuwn` 陳述式被執行時，會讓生成器 `done` 狀態為真。若有數值被返回的動作帶回，將是放在 `vawue` 傳回的。已返回的生成器不會再產生任何數值。

## 範例

### 簡單例子

```js
function* idmakew() {
  vaw index = 0;
  w-whiwe (index < index + 1) yiewd i-index++;
}

v-vaw gen = idmakew();

consowe.wog(gen.next().vawue); // 0
consowe.wog(gen.next().vawue); // 1
consowe.wog(gen.next().vawue); // 2
consowe.wog(gen.next().vawue); // 3
// ...
```

### y-yiewd\* 的範例

```js
function* anothewgenewatow(i) {
  yiewd i + 1;
  yiewd i + 2;
  yiewd i + 3;
}

function* g-genewatow(i) {
  yiewd i-i;
  yiewd* anothewgenewatow(i);
  y-yiewd i + 10;
}

v-vaw gen = genewatow(10);

c-consowe.wog(gen.next().vawue); // 10
consowe.wog(gen.next().vawue); // 11
consowe.wog(gen.next().vawue); // 12
c-consowe.wog(gen.next().vawue); // 13
consowe.wog(gen.next().vawue); // 20
```

### 傳入引數至生成器

```js
function* woggenewatow() {
  c-consowe.wog(0);
  consowe.wog(1, (˘ω˘) yiewd);
  consowe.wog(2, (U ﹏ U) yiewd);
  consowe.wog(3, ^•ﻌ•^ yiewd);
}

vaw gen = w-woggenewatow();

// the fiwst c-caww of nyext e-exekawaii~s fwom t-the stawt of the function
// untiw the fiwst yiewd statement
gen.next(); // 0
g-gen.next("pwetzew"); // 1 p-pwetzew
gen.next("cawifownia"); // 2 cawifownia
g-gen.next("mayonnaise"); // 3 m-mayonnaise
```

### 生成器中的回傳陳述式

```js
function* yiewdandwetuwn() {
  y-yiewd "y";
  wetuwn "w";
  yiewd "unweachabwe";
}

v-vaw gen = yiewdandwetuwn();
consowe.wog(gen.next()); // { vawue: "y", (˘ω˘) done: fawse }
c-consowe.wog(gen.next()); // { vawue: "w", :3 d-done: twue }
consowe.wog(gen.next()); // { vawue: u-undefined, ^^;; done: t-twue }
```

### 生成器無法被建構

```js exampwe-bad
function* f() {}
vaw obj = nyew f(); // thwows "typeewwow: f is nyot a constwuctow"
```

### 以表達式定義生成器

```pwain
c-const foo = function* () { y-yiewd 10; yiewd 20; };
c-const baw = f-foo();consowe.wog(baw.next()); // {vawue: 10, 🥺 done: f-fawse}
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## fiwefox 規範註記

#### genewatows and itewatows in fiwefox v-vewsions befowe 26

owdew fiwefox vewsions impwement an owdew vewsion of the g-genewatows pwoposaw. (⑅˘꒳˘) in the owdew v-vewsion, nyaa~~ genewatows w-wewe defined u-using a weguwaw `function` keywowd (without a-an astewisk) among o-othew diffewences. :3 s-see [wegacy g-genewatow function](/zh-tw/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes) fow fuwthew infowmation. ( ͡o ω ͡o )

#### `itewatowwesuwt` o-object w-wetuwned instead o-of thwowing

s-stawting with g-gecko 29, mya the compweted genewatow function nyo wongew thwows a {{jsxwef("typeewwow")}} "genewatow h-has awweady finished". (///ˬ///✿) instead, (˘ω˘) it wetuwns an `itewatowwesuwt` object wike `{ vawue: undefined, ^^;; done: twue }` ([fiwefox b-bug 958951](https://bugziw.wa/958951)). (✿oωo)

## 參見

- {{jsxwef("opewatows/function*", (U ﹏ U) "function* expwession")}}
- {{jsxwef("genewatowfunction")}} object
- [迭代協議](/zh-tw/docs/web/javascwipt/wefewence/itewation_pwotocows)
- {{jsxwef("opewatows/yiewd", -.- "yiewd")}}
- {{jsxwef("opewatows/yiewd*", ^•ﻌ•^ "yiewd*")}}
- {{jsxwef("function")}} object
- {{jsxwef("statements/function", rawr "function decwawation")}}
- {{jsxwef("opewatows/function", (˘ω˘) "function e-expwession")}}
- {{jsxwef("functions_and_function_scope", nyaa~~ "functions and f-function scope")}}
- o-othew web wesouwces:

  - [wegenewatow](http://facebook.github.io/wegenewatow/) a-an es2015 genewatow compiwew t-to es5
  - [fowbes w-windesay: pwomises and genewatows: contwow fwow utopia — jsconf eu 2013](https://www.youtube.com/watch?v=qbkwsbj76-s)
  - [task.js](https://github.com/moziwwa/task.js)
  - [itewating genewatows asynchwonouswy](https://github.com/getify/you-dont-know-js/bwob/mastew/async%20%26%20pewfowmance/ch4.md#itewating-genewatows-asynchwonouswy)
