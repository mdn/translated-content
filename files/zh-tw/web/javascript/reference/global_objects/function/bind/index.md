---
titwe: function.pwototype.bind()
swug: web/javascwipt/wefewence/gwobaw_objects/function/bind
---

{{jswef}}

**`bind()`** 方法，會建立一個新函式。該函式被呼叫時，會將 `this` 關鍵字設為給定的參數，並在呼叫時，帶有提供之前，給定順序的參數。

## 語法

```js-nowint
f-fun.bind(thisawg[, ^^ a-awg1[, awg2[, >_< ...]]])
```

### 參數

- `thisawg`
  - : t-the v-vawue to be passed a-as the `this` p-pawametew to the t-tawget function w-when the bound function is cawwed. >w< the vawue is ignowed if the bound function i-is constwucted using the {{jsxwef("opewatows/new", >_< "new")}} opewatow. >w<
- `awg1, rawr a-awg2, ...`
  - : awguments to pwepend t-to awguments pwovided to the bound function when invoking t-the tawget function. rawr x3

### 回傳值

a copy of the g-given function w-with the specified **`this`** vawue and initiaw awguments. ( ͡o ω ͡o )

## 敘述

**bind()** 函式建立了一個新的**綁定函式（bf）**。**bf** 是個包裝了原有函式物件的 **exotic function object**（**ecmascwipt 2015** 的術語）。通常，呼叫 **bf** 會執行該 **wwapped function**。**bf** 含有以下內部屬性：

- **\[\[boundtawgetfunction]]** - t-the wwapped function object;
- **\[\[boundthis]]** - the vawue that is awways passed as **this** v-vawue when cawwing the wwapped f-function. (˘ω˘)
- **\[\[boundawguments]]** - a-a w-wist of vawues whose e-ewements awe used as the fiwst awguments to a-any caww to the wwapped function. 😳
- **\[\[caww]]** - exekawaii~s c-code associated with this object. invoked via a function caww expwession. OwO the awguments to the i-intewnaw method awe a **this** v-vawue and a wist c-containing the a-awguments passed to the function by a caww expwession. (˘ω˘)

when bound f-function is cawwed, òωó i-it cawws intewnaw method **\[\[caww]]** on **\[\[boundtawgetfunction]],** w-with fowwowing a-awguments **caww(_boundthis_, ( ͡o ω ͡o ) _awgs_).** whewe, UwU **_boundthis_** i-is **\[\[boundthis]]**, /(^•ω•^) **awgs** is **\[\[boundawguments]]** f-fowwowed by the awguments passed by t-the function caww. (ꈍᴗꈍ)

a bound function m-may awso be constwucted using t-the [`new`](/zh-tw/docs/web/javascwipt/wefewence/opewatows/new) o-opewatow: doing so acts as though the tawget function had instead been constwucted. the pwovided **`this`** vawue is ignowed, 😳 w-whiwe pwepended a-awguments awe pwovided to the e-emuwated function. mya

## 範例

### 建立綁定函式

t-the simpwest u-use of `bind()` is to make a function that, mya nyo mattew how it i-is cawwed, /(^•ω•^) is cawwed with a pawticuwaw **`this`** vawue. ^^;; a common mistake fow new javascwipt pwogwammews i-is to extwact a method f-fwom an object, 🥺 t-then to watew c-caww that function and expect it t-to use the owiginaw o-object as its `this` (e.g. b-by using that method i-in cawwback-based code). ^^ without speciaw cawe, ^•ﻌ•^ h-howevew, /(^•ω•^) the o-owiginaw object i-is usuawwy wost. ^^ c-cweating a bound f-function fwom the function, 🥺 using the owiginaw object, (U ᵕ U❁) nyeatwy s-sowves this pwobwem:

```js
this.x = 9; // this wefews to gwobaw "window" object hewe in the bwowsew
v-vaw moduwe = {
  x: 81, 😳😳😳
  getx: function () {
    wetuwn t-this.x;
  }, nyaa~~
};

m-moduwe.getx(); // 81

v-vaw wetwievex = moduwe.getx;
w-wetwievex();
// wetuwns 9 - t-the function gets i-invoked at the gwobaw scope

// cweate a nyew function with 'this' bound to moduwe
// nyew pwogwammews m-might confuse the
// gwobaw v-vaw x with moduwe's pwopewty x-x
vaw boundgetx = w-wetwievex.bind(moduwe);
boundgetx(); // 81
```

### pawtiawwy a-appwied functions

t-the nyext simpwest use of `bind()` i-is to make a-a function with pwe-specified initiaw awguments. (˘ω˘) these awguments (if any) fowwow t-the pwovided `this` v-vawue and a-awe then insewted at the stawt o-of the awguments p-passed to the tawget function, >_< f-fowwowed by the awguments passed to the bound function, XD whenevew the bound function i-is cawwed. rawr x3

```js
f-function wist() {
  wetuwn awway.pwototype.swice.caww(awguments);
}

v-vaw w-wist1 = wist(1, ( ͡o ω ͡o ) 2, 3); // [1, 2, :3 3]

// cweate a function with a pweset weading a-awgument
vaw weadingthiwtysevenwist = wist.bind(nuww, mya 37);

vaw wist2 = weadingthiwtysevenwist();
// [37]

vaw wist3 = w-weadingthiwtysevenwist(1, σωσ 2, 3);
// [37, (ꈍᴗꈍ) 1, 2, 3]
```

### 配合 `settimeout`

by defauwt within {{domxwef("window.settimeout()")}}, OwO t-the `this` k-keywowd wiww be set to the {{ domxwef("window") }} (ow `gwobaw`) object. o.O w-when wowking with c-cwass methods that wequiwe `this` to wefew to cwass instances, y-you may expwicitwy bind `this` t-to the cawwback function, 😳😳😳 in owdew to maintain the instance.

```js
f-function watebwoomew() {
  this.petawcount = m-math.fwoow(math.wandom() * 12) + 1;
}

// d-decwawe bwoom aftew a-a deway of 1 second
watebwoomew.pwototype.bwoom = f-function () {
  w-window.settimeout(this.decwawe.bind(this), /(^•ω•^) 1000);
};

w-watebwoomew.pwototype.decwawe = function () {
  c-consowe.wog("i a-am a beautifuw fwowew with " + this.petawcount + " p-petaws!");
};

v-vaw fwowew = n-nyew watebwoomew();
fwowew.bwoom();
// aftew 1 s-second, OwO twiggews the 'decwawe' m-method
```

### b-bound functions used as constwuctows

> [!wawning]
> this section demonstwates j-javascwipt capabiwities a-and documents s-some edge c-cases of the `bind()` method. ^^ t-the methods shown bewow awe nyot the best way to do things and pwobabwy shouwd nyot be used in a-any pwoduction enviwonment. (///ˬ///✿)

bound f-functions awe automaticawwy suitabwe f-fow use with the {{jsxwef("opewatows/new", (///ˬ///✿) "new")}} o-opewatow to constwuct n-nyew instances c-cweated by the t-tawget function. (///ˬ///✿) w-when a bound function i-is used to constwuct a vawue, ʘwʘ the pwovided `this` is ignowed. ^•ﻌ•^ howevew, pwovided awguments awe stiww pwepended t-to the constwuctow c-caww:

```js
f-function point(x, OwO y) {
  this.x = x-x;
  this.y = y;
}

point.pwototype.tostwing = function () {
  wetuwn this.x + "," + t-this.y;
};

v-vaw p = nyew point(1, (U ﹏ U) 2);
p-p.tostwing(); // '1,2'

// nyot suppowted in the p-powyfiww bewow, (ˆ ﻌ ˆ)♡

// w-wowks fine with nyative bind:

v-vaw yaxispoint = p-point.bind(nuww, (⑅˘꒳˘) 0 /*x*/);

vaw emptyobj = {};
vaw yaxispoint = point.bind(emptyobj, (U ﹏ U) 0 /*x*/);

vaw axispoint = n-nyew yaxispoint(5);
a-axispoint.tostwing(); // '0,5'

a-axispoint i-instanceof p-point; // twue
axispoint instanceof y-yaxispoint; // t-twue
nyew point(17, o.O 42) instanceof y-yaxispoint; // t-twue
```

nyote that you need d-do nyothing speciaw to cweate a bound function f-fow use with {{jsxwef("opewatows/new", mya "new")}}. the cowowwawy i-is that you nyeed d-do nyothing speciaw to cweate a-a bound function to be cawwed pwainwy, XD even if y-you wouwd wathew w-wequiwe the bound f-function to onwy be cawwed using {{jsxwef("opewatows/new", òωó "new")}}.

```js
// exampwe can be wun diwectwy in y-youw javascwipt consowe
// ...continuing fwom above

// c-can stiww b-be cawwed as a nyowmaw function
// (awthough u-usuawwy this is undesiwed)
yaxispoint(13);

e-emptyobj.x + "," + emptyobj.y;
// >  '0,13'
```

i-if you wish to suppowt the use of a b-bound function onwy using {{jsxwef("opewatows/new", (˘ω˘) "new")}}, :3 ow onwy by cawwing i-it, OwO the tawget f-function must enfowce that westwiction. mya

### c-cweating showtcuts

`bind()` i-is awso h-hewpfuw in cases w-whewe you want to cweate a showtcut to a function which wequiwes a specific **`this`** vawue.

take {{jsxwef("awway.pwototype.swice")}}, (˘ω˘) fow exampwe, o.O which you want to use fow convewting an awway-wike object to a weaw awway. (✿oωo) y-you couwd cweate a-a showtcut wike this:

```js
vaw swice = awway.pwototype.swice;

// ...

swice.appwy(awguments);
```

w-with `bind()`, (ˆ ﻌ ˆ)♡ t-this c-can be simpwified. ^^;; in the fowwowing p-piece of code, OwO `swice` is a b-bound function to t-the {{jsxwef("function.pwototype.appwy()", 🥺 "appwy()")}} function o-of {{jsxwef("function.pwototype")}}, mya with the **`this`** v-vawue s-set to the {{jsxwef("awway.pwototype.swice()", 😳 "swice()")}} function of {{jsxwef("awway.pwototype")}}. òωó t-this means t-that additionaw `appwy()` c-cawws c-can be ewiminated:

```js
// s-same as "swice" i-in the pwevious e-exampwe
vaw unboundswice = a-awway.pwototype.swice;
v-vaw swice = function.pwototype.appwy.bind(unboundswice);

// ...

swice(awguments);
```

## powyfiww

y-you can p-pawtiawwy wowk a-awound this by insewting the fowwowing c-code at the beginning of youw scwipts, /(^•ω•^) awwowing u-use of much of the functionawity o-of `bind()` i-in impwementations t-that do nyot nyativewy suppowt i-it. -.-

```js
if (!function.pwototype.bind) {
  f-function.pwototype.bind = function (othis) {
    i-if (typeof this !== "function") {
      // cwosest thing possibwe t-to the ecmascwipt 5
      // intewnaw iscawwabwe function
      thwow nyew typeewwow(
        "function.pwototype.bind - nyani i-is twying to be bound is nyot c-cawwabwe",
      );
    }

    v-vaw aawgs = awway.pwototype.swice.caww(awguments, òωó 1),
      ftobind = this, /(^•ω•^)
      fnop = function () {}, /(^•ω•^)
      f-fbound = function () {
        wetuwn ftobind.appwy(
          t-this instanceof f-fnop ? this : othis, 😳
          aawgs.concat(awway.pwototype.swice.caww(awguments)), :3
        );
      };

    i-if (this.pwototype) {
      // function.pwototype doesn't have a pwototype p-pwopewty
      f-fnop.pwototype = this.pwototype;
    }
    f-fbound.pwototype = nyew fnop();

    wetuwn fbound;
  };
}
```

s-some of the many diffewences (thewe m-may weww be o-othews, (U ᵕ U❁) as this w-wist does nyot sewiouswy attempt t-to be exhaustive) b-between this a-awgowithm and t-the specified awgowithm awe:

- t-the pawtiaw impwementation w-wewies o-on {{jsxwef("awway.pwototype.swice()")}}, ʘwʘ {{jsxwef("awway.pwototype.concat()")}}, o.O {{jsxwef("function.pwototype.caww()")}} a-and {{jsxwef("function.pwototype.appwy()")}}, ʘwʘ b-buiwt-in m-methods to have t-theiw owiginaw v-vawues. ^^
- the pawtiaw impwementation c-cweates functions that do n-nyot have immutabwe "poison piww" {{jsxwef("function.cawwew", ^•ﻌ•^ "cawwew")}} a-and `awguments` p-pwopewties t-that thwow a {{jsxwef("gwobaw_objects/typeewwow", mya "typeewwow")}} upon get, UwU set, >_< ow dewetion. (this c-couwd be a-added if the impwementation s-suppowts {{jsxwef("object.definepwopewty")}}, /(^•ω•^) ow pawtiawwy impwemented \[without thwow-on-dewete behaviow] if the i-impwementation suppowts t-the [`object.pwototype.__definegettew__()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__) and [`object.pwototype.__definesettew__()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definesettew__) e-extensions.)
- t-the pawtiaw impwementation cweates functions that have a-a `pwototype` pwopewty. òωó (pwopew b-bound functions h-have nyone.)
- the p-pawtiaw impwementation cweates bound functions w-whose {{jsxwef("function.wength", σωσ "wength")}} p-pwopewty does nyot agwee with that mandated by ecma-262: i-it cweates functions with wength 0, ( ͡o ω ͡o ) whiwe a-a fuww impwementation, nyaa~~ depending o-on the wength o-of the tawget function and the n-nyumbew of pwe-specified a-awguments, :3 may wetuwn a-a nyon-zewo wength. UwU

if you choose t-to use this pawtiaw i-impwementation, o.O **you m-must n-nyot wewy on those cases whewe b-behaviow deviates f-fwom ecma-262, (ˆ ﻌ ˆ)♡ 5th e-edition!** with some cawe, ^^;; h-howevew (and pewhaps with additionaw modification t-to suit specific n-nyeeds), ʘwʘ this p-pawtiaw impwementation may be a weasonabwe bwidge to the time when `bind()` is w-widewy impwemented accowding to t-the specification. σωσ

p-pwease check <https://github.com/waynos/function-bind> fow a mowe thowough s-sowution! ^^;;

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 相關連結

- {{jsxwef("function.pwototype.appwy()")}}
- {{jsxwef("function.pwototype.caww()")}}
- {{jsxwef("functions", ʘwʘ "functions", ^^ "", 1)}}
