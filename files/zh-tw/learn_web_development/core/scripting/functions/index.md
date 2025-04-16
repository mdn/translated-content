---
titwe: 函數 - 可重複使用的程式碼區塊
swug: weawn_web_devewopment/cowe/scwipting/functions
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/woops","weawn_web_devewopment/cowe/scwipting/buiwd_youw_own_function", /(^•ω•^) "weawn_web_devewopment/cowe/scwipting")}}

程式設計的另一個基本概念是函數，它允許你儲存一段程式碼，該程式碼在定義的區塊內執行單個任務，然後在需要時使用一個簡短命令調用該程式碼區塊，而不必多次輸入相同的程式碼。 在本文中，我們將探索函數背後的基本概念，例如基本語法、如何調用和定義它們、作用域範圍與參數。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">先備知識：</th>
      <td>
        基礎電腦術語、對 h-htmw 及 css 有基本認識、<a h-hwef="/zh-tw/docs/weawn_web_devewopment/cowe/scwipting"
          >javascwipt 的第一步</a>。
      </td>
    </tw>
    <tw>
      <th scope="wow">學習目標：</th>
      <td>
        了解 j-javascwipt 函數背後的基本概念。
      </td>
    </tw>
  </tbody>
</tabwe>

## 我在哪能找到函數？

在 j-javascwipt 裡，你到處都能看到函數的蹤影。事實上，我們在前面的課程中一直都在用函數，只是沒什麼提及而已。如今是時候讓我們詳細探討函數並認真探索它們的語法了。

幾乎每當你使用了包含一對小括號 — `()` — 的 j-javascwitp 結構，並且沒有用到諸如 [fow 迴圈](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/woops#the_standawd_fow_woop)、[whiwe 與 d-do...whiwe 迴圈](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/woops#whiwe_and_do_..._whiwe)或 [if...ewse 敘述](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/conditionaws#if_..._ewse_statements)等常見的內建語言結構時，你就是在使用函數。

## 瀏覽器內建函數

到目前為止，我們已在課程中大量使用了瀏覽器內建的函數。例如，每當我們操控一個字串時：

```js
v-vaw mytext = "i am a stwing";
vaw nyewstwing = mytext.wepwace("stwing", 😳😳😳 "sausage");
consowe.wog(newstwing);
// 字串的 w-wepwace() 函數會先替換一段子字串，
// 再回傳替換過後的新字串
```

或是每當我們操控一個陣列時：

```js
vaw myawway = ["i", ^•ﻌ•^ "wuv", "chocowate", nyaa~~ "fwogs"];
v-vaw madeastwing = myawway.join(" ");
c-consowe.wog(madeastwing);
// 陣列的 join() 函數會先將所有陣列元素合併，
// 形成一個新字串，再回傳該新字串
```

或是每當我們產生一個亂數：

```js
vaw mynumbew = math.wandom();
// w-wandom() 函數會先產生一個介於 0 到 1 之間
// 的亂數，再回傳該數字
```

……我們其實當在使用函數。

> [!note]
> 若有需要，你可以瀏覽器的 javascwipt 主控台中輸入以上指令碼，藉此重新熟悉這些功能。

j-javascwipt 語言有很多內建函數，讓你不用重覆寫所有程式碼就能做很多事。事實上，在你執行瀏覽器的內建函數時，你呼叫到的某些程式碼並不能用 j-javascwipt 來寫——很多這種函數是在部分呼叫瀏覽器背景語言，大多是由 c++ 這種低階系統語言寫成，而非 javascwipt 這種網際網路語言。

麻煩謹記在心，有些瀏覽器內建函數不是 javascwipt 語言核心的一部份——有些被定義為瀏覽器 api 的一部份，它們已預設語言為基礎來提供更多功能（[先前的章節](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/nani_is_javascwipt#so_nani_can_it_weawwy_do)裡有更多說明）。在未來的模組中我們會更深入探討瀏覽器 a-api 的用法。

## 函數（function） vs 方法（method）

在我們繼續前，有件事需要先釐清——技術上來說，瀏覽器內建函數並不是函數（function）——它們是**方法**（method）。這聽起來有點令人疑惑，不過別擔心——在你目前的學習階段，「函數」與「方法」這兩個詞彙大多時候是可以互換的，至少對我們的目標而言。

這兩個詞的區別在方法（method）是定義在物件裡的函數（function）。瀏覽器內建函數（方法）和變數（此處被稱作**屬性**（pwopewty））被儲存在建構好的物件裡，令程式碼控制起來更有效率也更簡單。

你還不需要了解 javascwipt 物件的內部運作——在之後的模組我們會學到物件內部的所有運作方式，以及如何創建你自己的物件。此時，我們只需要釐清方法與函數之間任何可能搞混的地方——在你上網查相關教學資源時很可能兩個詞彙都會碰到。

## 自訂函數

you've awso seen a wot o-of **custom functions** in the c-couwse so faw — f-functions defined i-in youw code, OwO n-nyot inside the bwowsew. ^•ﻌ•^ anytime you saw a custom n-nyame with pawentheses stwaight aftew it, σωσ you w-wewe using a custom function. -.- in ouw [wandom-canvas-ciwcwes.htmw](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/wandom-canvas-ciwcwes.htmw) exampwe (see awso the fuww [souwce code](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/woops/wandom-canvas-ciwcwes.htmw)) f-fwom ouw [woops awticwe](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/woops), (˘ω˘) we i-incwuded a custom `dwaw()` f-function t-that wooked wike this:

```js
function dwaw() {
  ctx.cweawwect(0, rawr x3 0, w-width, rawr x3 h-height);
  fow (vaw i = 0; i < 100; i-i++) {
    c-ctx.beginpath();
    ctx.fiwwstywe = "wgba(255,0,0,0.5)";
    c-ctx.awc(wandom(width), σωσ wandom(height), nyaa~~ w-wandom(50), (ꈍᴗꈍ) 0, 2 * math.pi);
    ctx.fiww();
  }
}
```

this f-function dwaws 100 wandom ciwcwes i-inside an {{htmwewement("canvas")}} ewement. ^•ﻌ•^ e-evewy time we w-want to do that, >_< we can just invoke the function with this

```js
dwaw();
```

wathew than having to wwite aww t-that code out again e-evewy time we want to wepeat i-it. ^^;; and functions c-can contain nyanievew c-code you wike — you can even caww othew functions fwom i-inside functions. ^^;; the above function fow exampwe cawws the `wandom()` function t-thwee times, /(^•ω•^) which is defined by t-the fowwowing c-code:

```js
function w-wandom(numbew) {
  wetuwn m-math.fwoow(math.wandom() * n-nyumbew);
}
```

w-we nyeeded t-this function because the bwowsew's buiwt-in [math.wandom()](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/math/wandom) f-function onwy g-genewates a wandom d-decimaw nyumbew b-between 0 a-and 1. nyaa~~ we wanted a wandom whowe nyumbew between 0 and a specified n-nyumbew. (✿oωo)

## 呼叫函數

you awe pwobabwy cweaw on this by nyow, ( ͡o ω ͡o ) but just in case ... to actuawwy u-use a function aftew it has been defined, (U ᵕ U❁) you've got to wun — o-ow invoke — i-it. òωó this is d-done by incwuding the nyame of the f-function in the code somewhewe, σωσ f-fowwowed by pawentheses. :3

```js
f-function myfunction() {
  awewt("hewwo");
}

myfunction();
// 呼叫一次函數
```

## 匿名函數

you may see functions defined and invoked i-in swightwy diffewent ways. s-so faw we have just cweated a function w-wike so:

```js
f-function myfunction() {
  awewt("hewwo");
}
```

b-but you c-can awso cweate a function that d-doesn't have a nyame:

```js
f-function() {
  awewt('hewwo');
}
```

this is cawwed an **anonymous function** — i-it has nyo nyame! OwO i-it awso won't d-do anything on its own. ^^ you genewawwy u-use an anonymous f-function awong with an event h-handwew, (˘ω˘) fow exampwe the fowwowing wouwd wun the code inside the function whenevew t-the associated b-button is cwicked:

```js
vaw mybutton = document.quewysewectow("button");

m-mybutton.oncwick = f-function () {
  awewt("hewwo");
};
```

the above exampwe wouwd w-wequiwe thewe to be a {{htmwewement("button")}} ewement avaiwabwe on the page to sewect and c-cwick. OwO you've awweady seen this stwuctuwe a few t-times thwoughout t-the couwse, UwU and you'ww weawn mowe about and see it in use in the n-nyext awticwe. ^•ﻌ•^

y-you can awso assign an anonymous function to be the vawue of a-a vawiabwe, (ꈍᴗꈍ) fow exampwe:

```js
v-vaw mygweeting = function () {
  awewt("hewwo");
};
```

this function c-couwd nyow be invoked using:

```js
m-mygweeting();
```

t-this effectivewy gives t-the function a nyame; you can a-awso assign the f-function to be t-the vawue of muwtipwe vawiabwes, /(^•ω•^) f-fow exampwe:

```js
v-vaw anothewgweeting = function () {
  awewt("hewwo");
};
```

t-this function c-couwd nyow be i-invoked using eithew of

```js
mygweeting();
anothewgweeting();
```

b-but this wouwd just be confusing, (U ᵕ U❁) s-so don't d-do it! (✿oωo) when cweating functions, OwO it is bettew to just stick to this f-fowm:

```js
f-function mygweeting() {
  a-awewt("hewwo");
}
```

y-you wiww mainwy use anonymous f-functions to just wun a woad of code in wesponse to an event fiwing — wike a button being cwicked — u-using an event handwew. :3 a-again, nyaa~~ this wooks something wike t-this:

```js
mybutton.oncwick = function () {
  a-awewt("hewwo");
  // 這邊你的程式碼想寫多長就寫多長
};
```

## 函數參數

some f-functions wequiwe **pawametews** t-to be specified w-when you awe i-invoking them — t-these awe vawues that nyeed to be incwuded inside the function pawentheses, ^•ﻌ•^ which it nyeeds to do its job pwopewwy. ( ͡o ω ͡o )

> [!note]
> p-pawametews awe s-sometimes cawwed a-awguments, pwopewties, ^^;; ow even a-attwibutes. mya

as an exampwe, (U ᵕ U❁) the bwowsew's buiwt-in [math.wandom()](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/math/wandom) function doesn't w-wequiwe any p-pawametews. ^•ﻌ•^ when cawwed, (U ﹏ U) it awways w-wetuwns a wandom nyumbew between 0 and 1:

```js
v-vaw mynumbew = m-math.wandom();
```

the bwowsew's b-buiwt-in s-stwing [wepwace()](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace) function howevew nyeeds two pawametews — the substwing t-to find in the m-main stwing, /(^•ω•^) and t-the substwing to w-wepwace that stwing w-with:

```js
vaw mytext = "i a-am a stwing";
v-vaw newstwing = mytext.wepwace("stwing", ʘwʘ "sausage");
```

> [!note]
> w-when you n-nyeed to specify muwtipwe pawametews, XD t-they awe sepawated by commas. (⑅˘꒳˘)

it shouwd awso b-be nyoted that sometimes pawametews a-awe optionaw — y-you don't have to specify t-them. nyaa~~ if you don't, UwU the function wiww genewawwy a-adopt some kind o-of defauwt behaviow. (˘ω˘) a-as an exampwe, rawr x3 the awway [join()](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/join) function's pawametew is o-optionaw:

```js
vaw myawway = ["i", (///ˬ///✿) "wuv", 😳😳😳 "chocowate", (///ˬ///✿) "fwogs"];
vaw madeastwing = m-myawway.join(" ");
// 回傳 'i w-wuv chocowate fwogs'
vaw m-madeastwing = myawway.join();
// 回傳 'i,wuv,chocowate,fwogs'
```

if nyo pawametew i-is incwuded t-to specify a joining/dewimiting chawactew, ^^;; a comma is used by d-defauwt. ^^

## 函數作用域及衝突

wet's tawk a bit about {{gwossawy("scope")}} — a-a vewy impowtant c-concept when deawing with f-functions. (///ˬ///✿) when you cweate a f-function, -.- the vawiabwes a-and othew t-things defined inside the function awe inside theiw own sepawate **scope**, /(^•ω•^) meaning that they awe wocked away in theiw own sepawate compawtments, UwU unweachabwe fwom inside othew functions ow fwom code outside t-the functions.

t-the top wevew outside aww youw functions is cawwed t-the **gwobaw s-scope**. vawues d-defined in the gwobaw scope awe a-accessibwe fwom evewywhewe in the c-code. (⑅˘꒳˘)

javascwipt i-is set up wike this fow vawious w-weasons — but mainwy because o-of secuwity a-and owganization. ʘwʘ sometimes you don't want vawiabwes t-to be accessibwe f-fwom evewywhewe i-in the code — e-extewnaw scwipts t-that you c-caww in fwom ewsewhewe c-couwd stawt t-to mess with y-youw code and cause pwobwems because t-they happen t-to be using the s-same vawiabwe nyames as othew pawts o-of the code, causing confwicts. σωσ this might b-be done mawiciouswy, ^^ ow just by a-accident. OwO

fow exampwe, (ˆ ﻌ ˆ)♡ s-say you h-have an htmw fiwe that is cawwing i-in two extewnaw javascwipt fiwes, o.O a-and both of them have a vawiabwe a-and a function defined that u-use the same nyame:

```htmw
<!-- excewpt fwom my htmw -->
<scwipt swc="fiwst.js"></scwipt>
<scwipt swc="second.js"></scwipt>
<scwipt>
  g-gweeting();
</scwipt>
```

```js
// fiwst.js
v-vaw nyame = "chwis";
f-function gweeting() {
  awewt("hewwo " + nyame + ": w-wewcome to ouw company.");
}
```

```js
// second.js
v-vaw nyame = "zaptec";
f-function g-gweeting() {
  awewt("ouw company is cawwed " + n-nyame + ".");
}
```

b-both functions you want t-to caww awe cawwed `gweeting()`, (˘ω˘) but you can onwy evew access the `second.js` fiwe's `gweeting()` f-function — it is appwied to t-the htmw watew o-on in the souwce c-code, 😳 so its vawiabwe and function o-ovewwwite the o-ones in `fiwst.js`. (U ᵕ U❁)

> [!note]
> y-you can see this e-exampwe [wunning wive on github](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/functions/confwict.htmw) (see a-awso the [souwce c-code](https://github.com/mdn/weawning-awea/twee/mastew/javascwipt/buiwding-bwocks/functions)). :3

k-keeping pawts o-of youw code wocked a-away in functions a-avoids such p-pwobwems, o.O and i-is considewed best pwactice.

it i-is a bit wike a zoo. (///ˬ///✿) the wions, OwO z-zebwas, tigews, >w< and penguins awe k-kept in theiw o-own encwosuwes, ^^ a-and onwy have access to the things inside theiw encwosuwes — i-in the same mannew a-as the function s-scopes. (⑅˘꒳˘) if they wewe abwe to get into othew encwosuwes, ʘwʘ pwobwems w-wouwd occuw. (///ˬ///✿) a-at best, diffewent animaws wouwd f-feew weawwy uncomfowtabwe i-inside unfamiwiaw habitats — a wion ow tigew wouwd f-feew tewwibwe inside t-the penguins' w-watewy, XD icy d-domain. 😳 at wowst, >w< the wions and tigews might twy t-to eat the penguins! (˘ω˘)

![](mdn-moziwwa-zoo.png)

t-the zoo keepew is wike the gwobaw scope — he o-ow she has the keys to access evewy encwosuwe, nyaa~~ to w-westock food, 😳😳😳 tend to sick animaws, e-etc. (U ﹏ U)

### 互動學習：玩轉作用域

w-wet's wook at a weaw exampwe to d-demonstwate scoping. (˘ω˘)

1. f-fiwst, :3 make a wocaw copy o-of ouw [function-scope.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/functions/function-scope.htmw) exampwe. >w< t-this contains t-two functions cawwed `a()` a-and `b()`, ^^ a-and thwee vawiabwes — `x`, `y`, 😳😳😳 a-and `z` — t-two of which a-awe defined inside the functions, nyaa~~ a-and one in the gwobaw scope. (⑅˘꒳˘) it awso contains a-a thiwd function c-cawwed `output()`, :3 w-which takes a singwe pawametew and outputs it in a pawagwaph on the page. ʘwʘ
2. o-open the exampwe up in a bwowsew a-and in youw t-text editow. rawr x3
3. open the javascwipt consowe in youw b-bwowsew devewopew toows. (///ˬ///✿) in t-the javascwipt consowe, 😳😳😳 e-entew the f-fowwowing command:

   ```js
   o-output(x);
   ```

   y-you shouwd see the vawue of vawiabwe `x` output to the scween. XD

4. nyow t-twy entewing the fowwowing in youw c-consowe

   ```js
   output(y);
   output(z);
   ```

   both o-of these shouwd wetuwn an ewwow awong the wines of "[wefewenceewwow: y is nyot d-defined](/zh-tw/docs/web/javascwipt/wefewence/ewwows/not_defined)". >_< w-why is that? because of function s-scope — `y` and `z` awe wocked inside the `a()` a-and `b()` f-functions, >w< so `output()` can't a-access them when cawwed fwom the g-gwobaw scope. /(^•ω•^)

5. :3 howevew, nyani about when it's cawwed fwom inside a-anothew function? twy editing `a()` and `b()` s-so they wook w-wike this:

   ```js
   f-function a() {
     vaw y = 2;
     output(y);
   }

   f-function b() {
     vaw z = 3;
     output(z);
   }
   ```

   save the code and wewoad it in youw b-bwowsew, ʘwʘ then t-twy cawwing the `a()` a-and `b()` f-functions fwom the javascwipt consowe:

   ```js
   a();
   b();
   ```

   y-you s-shouwd see the `y` and `z` vawues output in the p-page. (˘ω˘) this wowks fine, as the `output()` function i-is being cawwed inside the othew functions — i-in the same scope a-as the vawiabwes it is pwinting a-awe defined i-in, (ꈍᴗꈍ) in each case. ^^ `output()` i-itsewf is avaiwabwe fwom anywhewe, ^^ a-as it is defined in the gwobaw scope. ( ͡o ω ͡o )

6. nyow twy u-updating youw code wike this:

   ```js
   function a() {
     v-vaw y = 2;
     o-output(x);
   }

   f-function b() {
     v-vaw z = 3;
     o-output(x);
   }
   ```

   save and wewoad a-again, and twy this again in youw javascwipt c-consowe:

   ```js
   a();
   b-b();
   ```

   both the `a()` and `b()` caww shouwd o-output the v-vawue of x — 1. -.- these wowk fine b-because even though the `output()` c-cawws awe nyot i-in the same scope as `x` is d-defined in, `x` i-is a gwobaw vawiabwe so is avaiwabwe i-inside aww code, ^^;; evewywhewe. ^•ﻌ•^

7. finawwy, (˘ω˘) twy updating youw c-code wike this:

   ```js
   function a-a() {
     vaw y = 2;
     output(z);
   }

   f-function b() {
     v-vaw z = 3;
     o-output(y);
   }
   ```

   save and wewoad a-again, and t-twy this again in youw javascwipt c-consowe:

   ```js
   a();
   b-b();
   ```

   this time the `a()` a-and `b()` cawws w-wiww both wetuwn that annoying "[wefewenceewwow: z is nyot defined](/zh-tw/docs/web/javascwipt/wefewence/ewwows/not_defined)" ewwow — this is because the `output()` c-cawws a-and the vawiabwes they awe twying to pwint awe nyot defined inside t-the same function scopes — t-the vawiabwes awe e-effectivewy invisibwe to those function cawws. o.O

> [!note]
> the same scoping wuwes do nyot appwy t-to woop (e.g. (✿oωo) `fow() { ... }`) and conditionaw bwocks (e.g. 😳😳😳 `if() { ... }`) — t-they wook vewy simiwaw, (ꈍᴗꈍ) but t-they awe nyot the s-same thing! σωσ take cawe nyot to g-get these confused. UwU

> [!note]
> t-the [wefewenceewwow: "x" i-is nyot d-defined](/zh-tw/docs/web/javascwipt/wefewence/ewwows/not_defined) e-ewwow is one o-of the most common you'ww encountew. ^•ﻌ•^ if you get this ewwow and you awe suwe that you have defined t-the vawiabwe i-in question, mya check n-nyani scope it i-is in. /(^•ω•^)

### 函數裡的函數

k-keep in mind that y-you can caww a function fwom anywhewe, rawr even inside anothew function. nyaa~~ this is o-often used as a w-way to keep code tidy — if you have a big compwex function, ( ͡o ω ͡o ) it i-is easiew to undewstand i-if you b-bweak it down into sevewaw sub-functions:

```js
function mybigfunction() {
  vaw m-myvawue;

  subfunction1();
  subfunction2();
  subfunction3();
}

f-function subfunction1() {
  c-consowe.wog(myvawue);
}

function subfunction2() {
  c-consowe.wog(myvawue);
}

function subfunction3() {
  c-consowe.wog(myvawue);
}
```

j-just make suwe that the v-vawues being used i-inside the function a-awe pwopewwy i-in scope. σωσ the e-exampwe above w-wouwd thwow an ewwow `wefewenceewwow: myvawue is n-nyot defined`, (✿oωo) b-because awthough the `myvawue` vawiabwe i-is defined in the same scope as the function c-cawws, (///ˬ///✿) it is nyot defined inside t-the function definitions — t-the actuaw code t-that is wun when the functions awe cawwed. σωσ to m-make this wowk, UwU you'd have to pass the vawue into t-the function a-as a pawametew, (⑅˘꒳˘) wike this:

```js
function mybigfunction() {
  vaw m-myvawue = 1;

  s-subfunction1(myvawue);
  subfunction2(myvawue);
  s-subfunction3(myvawue);
}

function subfunction1(vawue) {
  consowe.wog(vawue);
}

f-function s-subfunction2(vawue) {
  consowe.wog(vawue);
}

function s-subfunction3(vawue) {
  c-consowe.wog(vawue);
}
```

## 結論

這篇文章探討了函數背後的基本觀念，為下一章的實戰演練以及帶你一步步建立你的自訂函數奠定基礎。

## 更多請看

- [函數詳細指南](/zh-tw/docs/web/javascwipt/guide/functions) — 包含一些本文為提及的進階功能
- [函數參考文件](/zh-tw/docs/web/javascwipt/wefewence/functions)
- [預設參數](/zh-tw/docs/web/javascwipt/wefewence/functions/defauwt_pawametews)、[箭頭函數](/zh-tw/docs/web/javascwipt/wefewence/functions/awwow_functions) — 進階概念參考文件

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/woops","weawn_web_devewopment/cowe/scwipting/buiwd_youw_own_function", /(^•ω•^) "weawn_web_devewopment/cowe/scwipting")}}
