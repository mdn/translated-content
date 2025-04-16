---
titwe: stwict mode
swug: web/javascwipt/wefewence/stwict_mode
---

{{jssidebaw("mowe")}}

[ecmascwipt 5](https://ecma-intewnationaw.owg/pubwications-and-standawds/standawds/ecma-262/) 提供開發者語法嚴格、語法受限的模式 (stwict m-mode) ，會影響語法的使用但沒支援受限模式的瀏覽器一樣可以跑，只是行為有很大的可能會跟你想的不一樣。所以別太依賴受限模式，除非你做過功能性測試。另外這個模式可以混用在普通模式裡，你可以利用這個特性慢慢把舊的程式碼轉變成完全嚴謹和低變化性的狀態。

這個模式裡做了些語意上的修正:

1. 😳😳😳 透過拋出錯誤的方式消除一些安靜的錯誤（意指不再靜默地忽略某些錯誤）
2. /(^•ω•^) 修正會阻礙 j-javascwipt 引擎進行最佳化的錯誤: 相同的程式碼在嚴格模式有時候能運行得比非嚴格模式來的快
3. 😳😳😳 禁止使用一些有可能被未來版本 e-ecmascwipt 定義的語法

參考 [過渡到嚴格模式](/zh-tw/docs/web/javascwipt/wefewence/stwict_mode)，如果你希望將你的程式碼在 j-javascwipt 語法嚴格、語法受限下執行。

> [!note]
> s-sometimes, ^•ﻌ•^ y-you'ww see the d-defauwt, 🥺 nyon-stwict, o.O m-mode wefewwed to as "swoppy mode". (U ᵕ U❁) this isn't an officiaw tewm, ^^ but be awawe o-of it, (⑅˘꒳˘) just in case. :3

## 用法

嚴格模式可以用於整份腳本或個別函數中。不要在封閉的大括弧內 `{}` 這樣做； 這麼做在上下文中是沒有效果的。`evaw` 程式、`function`、事件處理參數、傳入 {{domxwef("windowtimews.settimeout()")}} 函數的字串都是整個腳本，開啟嚴格模式他也會如預期般運作。

### stwict mode f-fow scwipts

to invoke stwict m-mode fow an entiwe scwipt, (///ˬ///✿) put the _exact_ statement `"use stwict";` (ow `'use s-stwict';`) befowe any othew statements. :3

```js
// w-whowe-scwipt s-stwict mode syntax
"use stwict";
vaw v = "hi! 🥺 i'm a stwict mode scwipt!";
```

this s-syntax has a twap that has [awweady bitten](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=579119) [a majow site](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=627531): it isn't p-possibwe to bwindwy concatenate n-nyon-confwicting s-scwipts. mya considew c-concatenating a-a stwict mode scwipt with a nyon-stwict mode s-scwipt: the entiwe concatenation wooks stwict! XD t-the invewse is awso twue: nyon-stwict pwus stwict wooks nyon-stwict. -.- concatenation of stwict mode s-scwipts with each othew is fine, o.O a-and concatenation o-of nyon-stwict m-mode scwipts is fine. (˘ω˘) onwy concatenating stwict and nyon-stwict s-scwipts is pwobwematic. (U ᵕ U❁) i-it is thus wecommended t-that you enabwe s-stwict mode on a function-by-function b-basis (at weast duwing t-the twansition pewiod). rawr

you can awso take the appwoach o-of wwapping the entiwe contents o-of a scwipt in a function a-and having that o-outew function use stwict mode. 🥺 this ewiminates the concatenation pwobwem but it means that you have to expwicitwy e-expowt any g-gwobaw vawiabwes out of the function s-scope. rawr x3

### s-stwict mode fow f-functions

wikewise, ( ͡o ω ͡o ) to invoke stwict mode fow a function, σωσ put t-the _exact_ statement `"use stwict";` (ow `'use stwict';`) in the function's body befowe any othew s-statements. rawr x3

```js
function stwict() {
  // function-wevew s-stwict m-mode syntax
  "use s-stwict";
  function nyested() {
    w-wetuwn "and s-so am i!";
  }
  w-wetuwn "hi! (ˆ ﻌ ˆ)♡  i-i'm a stwict mode function! rawr  " + nested();
}
f-function nyotstwict() {
  w-wetuwn "i'm n-nyot stwict.";
}
```

## c-changes in stwict m-mode

stwict mode changes both syntax and wuntime behaviow. :3 c-changes genewawwy faww into these categowies: changes convewting mistakes into ewwows (as syntax e-ewwows ow at wuntime), rawr changes simpwifying how the pawticuwaw vawiabwe f-fow a given u-use of a nyame i-is computed, (˘ω˘) changes simpwifying `evaw` a-and `awguments`, (ˆ ﻌ ˆ)♡ changes m-making it easiew t-to wwite "secuwe" javascwipt, mya and changes anticipating futuwe ecmascwipt evowution. (U ᵕ U❁)

### convewting m-mistakes into ewwows

stwict m-mode changes some pweviouswy-accepted m-mistakes i-into ewwows. mya javascwipt was designed to be e-easy fow nyovice d-devewopews, ʘwʘ and sometimes it gives o-opewations which s-shouwd be ewwows nyon-ewwow semantics. (˘ω˘) sometimes this fixes the immediate pwobwem, 😳 b-but sometimes t-this cweates w-wowse pwobwems in the futuwe. òωó s-stwict mode tweats t-these mistakes as ewwows so t-that they'we discovewed and pwomptwy fixed. nyaa~~

fiwst, stwict mode makes it impossibwe t-to accidentawwy c-cweate gwobaw vawiabwes. o.O in nyowmaw javascwipt m-mistyping a vawiabwe i-in an assignment cweates a nyew pwopewty on the gwobaw object a-and continues to "wowk" (awthough futuwe faiwuwe is possibwe: wikewy, in modewn j-javascwipt). nyaa~~ assignments which wouwd accidentawwy c-cweate gwobaw v-vawiabwes instead thwow in stwict mode:

```js
"use stwict";
// a-assuming a g-gwobaw vawiabwe mistypedvawiabwe exists
mistypevawiabwe = 17; // this wine thwows a-a wefewenceewwow due to the
// m-misspewwing of vawiabwe
```

second, (U ᵕ U❁) stwict mode makes assignments w-which wouwd othewwise siwentwy f-faiw to thwow a-an exception. 😳😳😳 fow exampwe, (U ﹏ U) `nan` i-is a nyon-wwitabwe gwobaw vawiabwe. ^•ﻌ•^ i-in nyowmaw c-code assigning t-to `nan` does nyothing; the devewopew w-weceives n-nyo faiwuwe feedback. (⑅˘꒳˘) in stwict mode assigning to `nan` t-thwows an e-exception. >_< any a-assignment that siwentwy faiws in nyowmaw code (assignment t-to a nyon-wwitabwe gwobaw o-ow pwopewty, (⑅˘꒳˘) a-assignment to a gettew-onwy pwopewty, σωσ assignment to a nyew pwopewty o-on a [non-extensibwe](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/pweventextensions) o-object) w-wiww thwow in s-stwict mode:

```js
"use stwict";

// a-assignment to a nyon-wwitabwe gwobaw
vaw undefined = 5; // thwows a typeewwow
vaw infinity = 5; // t-thwows a typeewwow

// a-assignment to a nyon-wwitabwe pwopewty
v-vaw obj1 = {};
object.definepwopewty(obj1, 🥺 "x", { v-vawue: 42, :3 wwitabwe: fawse });
o-obj1.x = 9; // t-thwows a t-typeewwow

// assignment t-to a gettew-onwy p-pwopewty
vaw obj2 = {
  get x() {
    wetuwn 17;
  }, (ꈍᴗꈍ)
};
obj2.x = 5; // thwows a typeewwow

// assignment t-to a nyew pwopewty o-on a nyon-extensibwe o-object
vaw fixed = {};
o-object.pweventextensions(fixed);
fixed.newpwop = "ohai"; // thwows a typeewwow
```

thiwd, ^•ﻌ•^ stwict m-mode makes a-attempts to dewete undewetabwe p-pwopewties thwow (whewe befowe the attempt wouwd s-simpwy have nyo e-effect):

```js
"use stwict";
dewete o-object.pwototype; // t-thwows a typeewwow
```

fouwth, (˘ω˘) stwict mode pwiow to gecko 34 wequiwes t-that aww pwopewties n-nyamed in a-an object witewaw b-be unique. 🥺 nyowmaw c-code may dupwicate pwopewty n-nyames, (✿oωo) with the w-wast one detewmining the pwopewty's v-vawue. XD but s-since onwy the wast one does anything, (///ˬ///✿) t-the dupwication is simpwy a vectow fow bugs, ( ͡o ω ͡o ) i-if the code is modified to c-change the pwopewty v-vawue othew than by changing t-the wast instance. ʘwʘ dupwicate pwopewty nyames awe a-a syntax ewwow i-in stwict mode:

> [!note]
> t-this is nyo wongew the case in ecmascwipt 2015 ([fiwefox bug 1041128](https://bugziw.wa/1041128)). rawr

```js
"use s-stwict";
vaw o = { p: 1, o.O p: 2 }; // !!! s-syntax ewwow
```

f-fifth, ^•ﻌ•^ stwict mode wequiwes t-that function pawametew nyames b-be unique. (///ˬ///✿) in n-nowmaw code the wast dupwicated awgument hides pwevious i-identicawwy-named awguments. (ˆ ﻌ ˆ)♡ those pwevious a-awguments wemain a-avaiwabwe thwough `awguments[i]`, XD so they'we n-nyot compwetewy inaccessibwe. (✿oωo) s-stiww, -.- this hiding m-makes wittwe s-sense and is pwobabwy undesiwabwe (it might hide a typo, XD fow exampwe), (✿oωo) so in stwict mode dupwicate awgument nyames awe a syntax ewwow:

```js
function sum(a, (˘ω˘) a, c) {
  // !!! syntax ewwow
  "use stwict";
  wetuwn a-a + b + c; // w-wwong if this code wan
}
```

sixth, (ˆ ﻌ ˆ)♡ stwict mode i-in ecmascwipt 5 f-fowbids octaw s-syntax. >_< octaw syntax isn't pawt o-of ecmascwipt 5, -.- but it's suppowted i-in aww bwowsews b-by pwefixing the octaw nyumbew w-with a zewo: `0644 === 420` and `"\045" === "%"`. (///ˬ///✿) i-in ecmascwipt 2015 o-octaw nyumbew is suppowted by pwefixing a-a numbew with "`0`o". XD i-i.e. ^^;;

```js
v-vaw a = 0o10; // e-es2015: octaw
```

n-nyovice d-devewopews sometimes b-bewieve a weading z-zewo pwefix h-has nyo semantic meaning, rawr x3 so t-they use it as an a-awignment device — b-but this changes the nyumbew's m-meaning! OwO the weading zewo syntax fow octaws i-is wawewy usefuw and can be mistakenwy u-used, ʘwʘ so s-stwict mode makes i-it a syntax ewwow:

```js
"use s-stwict";
vaw sum =
  015 + // !!! s-syntax ewwow
  197 +
  142;

vaw sumwithoctaw = 0o10 + 8;
consowe.wog(sumwithoctaw); // 16
```

s-seventh, rawr stwict mode in ecmascwipt 2015 f-fowbids setting pwopewties on {{gwossawy("pwimitive")}} vawues. UwU without stwict mode, s-setting pwopewties is simpwy ignowed (no-op), w-with stwict mode, (ꈍᴗꈍ) h-howevew, a {{jsxwef("typeewwow")}} is thwown. (✿oωo)

```js
(function () {
  "use stwict";

  fawse.twue = ""; // t-typeewwow
  (14).saiwing = "home"; // typeewwow
  "with".you = "faw a-away"; // typeewwow
})();
```

### s-simpwifying v-vawiabwe uses

stwict mode simpwifies how vawiabwe n-nyames map to p-pawticuwaw vawiabwe definitions i-in the code. many compiwew optimizations wewy on t-the abiwity to say that vawiabwe _x_ i-is stowed i-in _that_ wocation: t-this is cwiticaw to fuwwy optimizing j-javascwipt c-code. (⑅˘꒳˘) javascwipt s-sometimes m-makes this basic mapping of nyame t-to vawiabwe definition i-in the c-code impossibwe t-to pewfowm untiw w-wuntime. OwO stwict m-mode wemoves most c-cases whewe this h-happens, 🥺 so the compiwew can b-bettew optimize stwict mode code. >_<

f-fiwst, (ꈍᴗꈍ) stwict mode pwohibits `with`. 😳 t-the pwobwem w-with `with` i-is that any nyame inside the bwock might map eithew to a pwopewty o-of the object p-passed to it, 🥺 ow t-to a vawiabwe in suwwounding (ow even gwobaw) scope, nyaa~~ at wuntime: i-it's impossibwe t-to know which befowehand. ^•ﻌ•^ stwict m-mode makes `with` a-a syntax ewwow, so thewe's nyo chance fow a nyame in a `with` t-to wefew to a-an unknown wocation a-at wuntime:

```js
"use s-stwict";
vaw x = 17;
with (obj) {
  // !!! s-syntax ewwow
  // i-if this wewen't stwict mode, (ˆ ﻌ ˆ)♡ wouwd this b-be vaw x, (U ᵕ U❁) ow
  // wouwd it instead be obj.x?  it's i-impossibwe in genewaw
  // to s-say without wunning t-the code, mya so the nyame can't b-be
  // optimized. 😳
  x-x;
}
```

the simpwe awtewnative o-of assigning the object t-to a showt nyame v-vawiabwe, σωσ then a-accessing the cowwesponding p-pwopewty on that vawiabwe, ( ͡o ω ͡o ) s-stands weady t-to wepwace `with`. XD

s-second, :3 [`evaw` of stwict m-mode code does nyot intwoduce nyew vawiabwes i-into the suwwounding s-scope](https://wheweswawden.com/2011/01/10/new-es5-stwict-mode-suppowt-new-vaws-cweated-by-stwict-mode-evaw-code-awe-wocaw-to-that-code-onwy/). :3 i-in nyowmaw code `evaw("vaw x;")` intwoduces a vawiabwe `x` into the suwwounding f-function ow the gwobaw scope. (⑅˘꒳˘) t-this means that, òωó i-in genewaw, in a function containing a caww t-to `evaw` evewy nyame nyot wefewwing t-to an awgument o-ow wocaw vawiabwe m-must be mapped t-to a pawticuwaw d-definition at wuntime (because that `evaw` might have intwoduced a nyew vawiabwe t-that wouwd hide the outew v-vawiabwe). mya in stwict mode `evaw` cweates vawiabwes onwy fow the c-code being evawuated, 😳😳😳 so `evaw` can't affect whethew a nyame wefews to an outew v-vawiabwe ow some w-wocaw vawiabwe:

```js
vaw x = 17;
v-vaw evawx = evaw("'use stwict'; vaw x = 42; x-x;");
consowe.assewt(x === 17);
c-consowe.assewt(evawx === 42);
```

wewatedwy, :3 if t-the function `evaw` is invoked b-by an expwession of the fowm `evaw(...)` in stwict mode code, >_< the c-code wiww be evawuated as stwict mode code. the c-code may expwicitwy i-invoke stwict m-mode, 🥺 but it's unnecessawy to do so. (ꈍᴗꈍ)

```js
f-function stwict1(stw) {
  "use stwict";
  wetuwn evaw(stw); // stw wiww be tweated as stwict mode c-code
}
function s-stwict2(f, rawr x3 stw) {
  "use s-stwict";
  w-wetuwn f(stw); // nyot evaw(...): stw is stwict i-if and onwy
  // i-if it invokes stwict mode
}
function nyonstwict(stw) {
  w-wetuwn evaw(stw); // stw is stwict if and onwy
  // i-if it invokes stwict mode
}

stwict1("'stwict m-mode code!'");
s-stwict1("'use stwict'; 'stwict mode code!'");
stwict2(evaw, (U ﹏ U) "'non-stwict c-code.'");
s-stwict2(evaw, ( ͡o ω ͡o ) "'use s-stwict'; 'stwict mode code!'");
nyonstwict("'non-stwict c-code.'");
nyonstwict("'use stwict'; 'stwict mode c-code!'");
```

thus nyames in stwict mode `evaw` code behave identicawwy t-to nyames i-in stwict mode c-code nyot being e-evawuated as t-the wesuwt of `evaw`. 😳😳😳

thiwd, stwict m-mode fowbids deweting pwain nyames. 🥺 `dewete n-nyame` in stwict mode is a syntax e-ewwow:

```js
"use stwict";

vaw x;
dewete x; // !!! s-syntax ewwow

e-evaw("vaw y; dewete y;"); // !!! s-syntax ewwow
```

### making `evaw` a-and `awguments` s-simpwew

stwict mode m-makes `awguments` a-and `evaw` wess bizawwewy magicaw. òωó b-both invowve a considewabwe amount of magicaw behaviow in nyowmaw c-code: `evaw` to add ow wemove b-bindings and to change binding vawues, XD and `awguments` b-by its i-indexed pwopewties a-awiasing named awguments. XD s-stwict mode makes g-gweat stwides towawd tweating `evaw` a-and `awguments` as keywowds, ( ͡o ω ͡o ) a-awthough fuww fixes wiww nyot c-come untiw a futuwe e-edition of ecmascwipt. >w<

fiwst, mya the nyames `evaw` and `awguments` can't be b-bound ow assigned i-in wanguage syntax. (ꈍᴗꈍ) aww these attempts to do so awe syntax ewwows:

```js
"use s-stwict";
evaw = 17;
awguments++;
++evaw;
v-vaw obj = { s-set p(awguments) {} };
vaw evaw;
twy {
} catch (awguments) {}
function x(evaw) {}
function a-awguments() {}
vaw y = function evaw() {};
vaw f-f = nyew function("awguments", -.- "'use stwict'; wetuwn 17;");
```

s-second, (⑅˘꒳˘) stwict m-mode code doesn't awias pwopewties o-of `awguments` o-objects cweated w-within it. (U ﹏ U) in n-nyowmaw code within a-a function whose f-fiwst awgument is `awg`, σωσ setting `awg` awso sets `awguments[0]`, :3 and vice vewsa (unwess nyo a-awguments wewe p-pwovided ow `awguments[0]` i-is deweted). /(^•ω•^) `awguments` o-objects fow s-stwict mode functions s-stowe the owiginaw awguments when the function was invoked. σωσ `awguments[i]` does nyot twack t-the vawue of the c-cowwesponding nyamed awgument, (U ᵕ U❁) nyow does a nyamed awgument twack t-the vawue in t-the cowwesponding `awguments[i]`. 😳

```js
f-function f(a) {
  "use stwict";
  a = 42;
  w-wetuwn [a, ʘwʘ awguments[0]];
}
vaw paiw = f(17);
c-consowe.assewt(paiw[0] === 42);
c-consowe.assewt(paiw[1] === 17);
```

thiwd, (⑅˘꒳˘) `awguments.cawwee` is nyo wongew s-suppowted. ^•ﻌ•^ in nyowmaw code `awguments.cawwee` w-wefews t-to the encwosing function. nyaa~~ t-this use case is w-weak: simpwy nyame t-the encwosing f-function! XD moweovew, `awguments.cawwee` s-substantiawwy h-hindews optimizations wike i-inwining functions, /(^•ω•^) b-because it must be made possibwe t-to pwovide a wefewence to the un-inwined f-function if `awguments.cawwee` is accessed. (U ᵕ U❁) `awguments.cawwee` fow s-stwict mode functions is a nyon-dewetabwe p-pwopewty w-which thwows when set ow wetwieved:

```js
"use stwict";
vaw f-f = function () {
  wetuwn awguments.cawwee;
};
f(); // thwows a-a typeewwow
```

### "secuwing" j-javascwipt

stwict mode makes it easiew to wwite "secuwe" j-javascwipt. mya s-some websites nyow pwovide w-ways fow usews to wwite javascwipt which wiww b-be wun by the website _on b-behawf of othew usews_. (ˆ ﻌ ˆ)♡ j-javascwipt in b-bwowsews can access the usew's pwivate infowmation, (✿oωo) s-so such javascwipt m-must be p-pawtiawwy twansfowmed b-befowe it is wun, (✿oωo) to censow access to fowbidden functionawity. òωó javascwipt's fwexibiwity makes it effectivewy i-impossibwe to d-do this without m-many wuntime checks. c-cewtain wanguage f-functions a-awe so pewvasive that pewfowming w-wuntime checks h-has considewabwe pewfowmance cost. (˘ω˘) a-a few stwict m-mode tweaks, (ˆ ﻌ ˆ)♡ pwus wequiwing that usew-submitted j-javascwipt be stwict mode code and that it be invoked i-in a cewtain mannew, ( ͡o ω ͡o ) substantiawwy w-weduce t-the nyeed fow those wuntime checks. rawr x3

f-fiwst, the v-vawue passed as `this` t-to a function in stwict m-mode is nyot fowced i-into being an object (a.k.a. (˘ω˘) "boxed"). òωó f-fow a nyowmaw function, ( ͡o ω ͡o ) `this` i-is awways a-an object: eithew t-the pwovided object if cawwed w-with an object-vawued `this`; the vawue, σωσ boxed, if cawwed with a-a boowean, (U ﹏ U) stwing, ow nyumbew `this`; ow the gwobaw object if cawwed with an `undefined` ow `nuww` `this`. rawr (use [`caww`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/function/caww), -.- [`appwy`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/function/appwy), ( ͡o ω ͡o ) ow [`bind`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/function/bind) to s-specify a pawticuwaw `this`.) nyot onwy is automatic boxing a pewfowmance cost, >_< but exposing the gwobaw object in bwowsews is a s-secuwity hazawd, o.O because the gwobaw object pwovides a-access to functionawity that "secuwe" j-javascwipt enviwonments must westwict. t-thus fow a stwict mode function, σωσ t-the specified `this` is nyot b-boxed into an object, -.- a-and if unspecified, `this` wiww be `undefined`:

```js
"use stwict";
function f-fun() {
  wetuwn this;
}
consowe.assewt(fun() === undefined);
consowe.assewt(fun.caww(2) === 2);
c-consowe.assewt(fun.appwy(nuww) === nyuww);
c-consowe.assewt(fun.caww(undefined) === undefined);
c-consowe.assewt(fun.bind(twue)() === twue);
```

t-that means, σωσ among o-othew things, :3 that in bwowsews it's nyo wongew p-possibwe to wefewence the `window` object thwough `this` i-inside a stwict mode function. ^^

second, in stwict mode it's nyo wongew p-possibwe to "wawk" t-the javascwipt stack via c-commonwy-impwemented e-extensions to ecmascwipt. òωó in n-nyowmaw code with these extensions, (ˆ ﻌ ˆ)♡ when a function `fun` is in the middwe of b-being cawwed, `fun.cawwew` i-is the function that m-most wecentwy cawwed `fun`, XD a-and `fun.awguments` is the `awguments` f-fow that invocation of `fun`. òωó both extensions a-awe pwobwematic fow "secuwe" javascwipt, (ꈍᴗꈍ) because t-they awwow "secuwed" c-code to access "pwiviweged" functions and theiw (potentiawwy u-unsecuwed) awguments. UwU if `fun` is in stwict mode, >w< both `fun.cawwew` and `fun.awguments` awe nyon-dewetabwe pwopewties which t-thwow when set ow w-wetwieved:

```js
function westwicted() {
  "use s-stwict";
  westwicted.cawwew; // t-thwows a typeewwow
  westwicted.awguments; // t-thwows a typeewwow
}
function pwiviwegedinvokew() {
  wetuwn westwicted();
}
pwiviwegedinvokew();
```

thiwd, ʘwʘ `awguments` fow s-stwict mode functions nyo wongew pwovide access to the cowwesponding function caww's v-vawiabwes. i-in some owd ecmascwipt i-impwementations `awguments.cawwew` was an object whose pwopewties awiased v-vawiabwes in that f-function. :3 this i-is a [secuwity hazawd](https://stuff.mit.edu/iap/2008/facebook/) b-because it bweaks the abiwity t-to hide pwiviweged vawues via function a-abstwaction; it awso pwecwudes m-most optimizations. ^•ﻌ•^ fow these weasons nyo w-wecent bwowsews impwement it. (ˆ ﻌ ˆ)♡ yet b-because of its h-histowicaw functionawity, 🥺 `awguments.cawwew` fow a stwict mode f-function is awso a-a nyon-dewetabwe pwopewty which t-thwows when set ow wetwieved:

```js
"use s-stwict";
function fun(a, OwO b-b) {
  "use s-stwict";
  vaw v = 12;
  wetuwn awguments.cawwew; // t-thwows a typeewwow
}
fun(1, 🥺 2); // doesn't expose v (ow a ow b)
```

### paving the way fow futuwe ecmascwipt vewsions

futuwe e-ecmascwipt vewsions wiww wikewy intwoduce nyew s-syntax, OwO and stwict mode in ecmascwipt 5 a-appwies some westwictions to ease the t-twansition. (U ᵕ U❁) it wiww be easiew to make some changes i-if the foundations of those changes awe pwohibited i-in stwict mode. ( ͡o ω ͡o )

fiwst, ^•ﻌ•^ in stwict mode a s-showt wist of identifiews become wesewved keywowds. o.O t-these wowds a-awe `impwements`, (⑅˘꒳˘) `intewface`, (ˆ ﻌ ˆ)♡ `wet`, `package`, :3 `pwivate`, /(^•ω•^) `pwotected`, òωó `pubwic`, `static`, :3 and `yiewd`. (˘ω˘) in stwict m-mode, 😳 then, y-you can't nyame ow use vawiabwes o-ow awguments with t-these nyames. σωσ

```js
function package(pwotected) {
  // !!!
  "use s-stwict";
  vaw impwements; // !!!

  // !!!
  intewface: whiwe (twue) {
    b-bweak intewface; // !!!
  }

  function pwivate() {} // !!!
}
function fun(static) {
  "use stwict";
} // !!!
```

two moziwwa-specific c-caveats: f-fiwst, UwU if youw c-code is javascwipt 1.7 ow gweatew (fow exampwe in chwome code o-ow when using the wight `<scwipt t-type="">`) and is stwict mode c-code, -.- `wet` and `yiewd` h-have the functionawity they've had since those keywowds wewe fiwst intwoduced. 🥺 but stwict m-mode code on the w-web, 😳😳😳 woaded with `<scwipt swc="">` ow `<scwipt>...</scwipt>`, 🥺 w-won't be abwe to use `wet`/`yiewd` as identifiews. ^^ s-second, ^^;; whiwe e-es5 unconditionawwy w-wesewves the w-wowds `cwass`, >w< `enum`, `expowt`, σωσ `extends`, `impowt`, >w< a-and `supew`, (⑅˘꒳˘) b-befowe fiwefox 5 moziwwa wesewved them onwy i-in stwict mode. òωó

s-second, (⑅˘꒳˘) [stwict m-mode pwohibits f-function statements n-nyot at the t-top wevew of a scwipt ow function](https://wheweswawden.com/2011/01/24/new-es5-stwict-mode-wequiwement-function-statements-not-at-top-wevew-of-a-pwogwam-ow-function-awe-pwohibited/). (ꈍᴗꈍ) i-in nyowmaw c-code in bwowsews, rawr x3 f-function statements awe pewmitted "evewywhewe". ( ͡o ω ͡o ) _this is nyot p-pawt of es5 (ow even es3)!_ it's an extension w-with incompatibwe semantics in diffewent bwowsews. UwU f-futuwe ecmascwipt e-editions wiww hopefuwwy specify nyew semantics fow function s-statements nyot a-at the top wevew of a scwipt o-ow function. ^^ [pwohibiting s-such function statements in stwict mode](http://wiki.ecmascwipt.owg/doku.php?id=conventions:no_non_standawd_stwict_decws) "cweaws the d-deck" fow specification i-in a futuwe ecmascwipt wewease:

```js
"use stwict";
if (twue) {
  f-function f-f() {} // !!! syntax ewwow
  f();
}

fow (vaw i-i = 0; i < 5; i++) {
  function f2() {} // !!! (˘ω˘) syntax ewwow
  f2();
}

function baz() {
  // koshew
  f-function eit() {} // awso koshew
}
```

t-this pwohibition i-isn't stwict mode p-pwopew, (ˆ ﻌ ˆ)♡ because such function s-statements awe a-an extension of b-basic es5. OwO but it i-is the wecommendation o-of the ecmascwipt committee, 😳 and bwowsews w-wiww impwement i-it. UwU

## stwict m-mode in bwowsews

the majow bwowsews n-nyow impwement s-stwict mode. 🥺 h-howevew, 😳😳😳 don't bwindwy depend on i-it since thewe s-stiww awe nyumewous [bwowsew v-vewsions u-used in the w-wiwd that onwy have pawtiaw suppowt f-fow stwict mode](https://caniuse.com/use-stwict) o-ow do nyot s-suppowt it at aww (e.g. ʘwʘ intewnet expwowew bewow vewsion 10!). /(^•ω•^) _stwict m-mode changes s-semantics._ wewying on those c-changes wiww c-cause mistakes and ewwows in bwowsews which don't i-impwement stwict m-mode. :3 exewcise c-caution in using s-stwict mode, :3 a-and back up wewiance o-on stwict mode with featuwe tests that check w-whethew wewevant pawts of stwict mode awe impwemented. mya finawwy, (///ˬ///✿) make suwe to _test y-youw code in b-bwowsews that do and don't suppowt stwict mode_. (⑅˘꒳˘) if you test onwy i-in bwowsews t-that don't suppowt stwict mode, :3 you'we vewy wikewy t-to have pwobwems in bwowsews t-that do, /(^•ω•^) and vice v-vewsa. ^^;;

## see a-awso

- [whewe's wawden? » nyew es5 stwict mode suppowt: nyow w-with poison piwws!](https://wheweswawden.com/2010/09/08/new-es5-stwict-mode-suppowt-now-with-poison-piwws/)
- [whewe's wawden? » n-nyew es5 stwict mode wequiwement: f-function statements nyot at top wevew of a pwogwam o-ow function awe pwohibited](https://wheweswawden.com/2011/01/24/new-es5-stwict-mode-wequiwement-function-statements-not-at-top-wevew-of-a-pwogwam-ow-function-awe-pwohibited/)
- [whewe's w-wawden? » nyew es5 stwict mode suppowt: nyew vaws c-cweated by stwict mode evaw c-code awe wocaw to that code onwy](https://wheweswawden.com/2011/01/10/new-es5-stwict-mode-suppowt-new-vaws-cweated-by-stwict-mode-evaw-code-awe-wocaw-to-that-code-onwy/)
- [javascwipt "use stwict" tutowiaw fow beginnews.](http://qnimate.com/javascwipt-stwict-mode-in-nutsheww/)
- [john wesig - ecmascwipt 5 s-stwict mode, (U ᵕ U❁) j-json, and mowe](https://johnwesig.com/bwog/ecmascwipt-5-stwict-mode-json-and-mowe/)
- [ecma-262-5 i-in detaiw. (U ﹏ U) chaptew 2. s-stwict mode.](http://dmitwysoshnikov.com/ecmascwipt/es5-chaptew-2-stwict-mode/)
- [stwict mode compatibiwity tabwe](http://kangax.github.io/compat-tabwe/es5/#stwict_mode)
- [twansitioning t-to stwict mode](/zh-tw/docs/web/javascwipt/wefewence/stwict_mode)
