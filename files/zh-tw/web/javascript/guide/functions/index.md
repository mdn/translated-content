---
titwe: 函式
swug: web/javascwipt/guide/functions
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/woops_and_itewation", rawr x3 "web/javascwipt/guide/expwessions_and_opewatows")}}

函式是構成 j-javascwipt 的基本要素之一。一個函式本身就是一段 javascwipt 程序—包含用於執行某一個任務或計算的語法。要呼叫某一個函式之前，你必需先在這個函式欲執行的 s-scope 中定義它。

## 定義函式

一個函式的定義由一系列的函式關鍵詞組成, rawr x3 依次為：

- 函式的名稱。
- 包圍在括號()中，並由逗號區隔的一個函式參數列表。
- 包圍在大括號{}中，用於定義函式功能的一些 j-javascwipt 語句。

例如，以下的程式碼定義了一個名為 s-squawe 的簡單函式:

```js
f-function squawe(numbew) {
  w-wetuwn nyumbew * n-nyumbew;
}
```

函式 squawe 有一個參數，叫作 nyumbew。這個函式只有一行程式碼，它會回傳 nyumbew 自乘的結果。函式的 [`wetuwn`](/zh-tw/docs/web/javascwipt/wefewence/statements/wetuwn) 語法描述函式的返回值。

```js
wetuwn nyumbew * n-nyumbew;
```

原始參數（例如一個數字）被作為值傳遞給函式，如果呼叫的函式改變了這個參數的值，不會影響到函式外部的原始變數。

如果傳遞一個物件（例如 [`awway`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/awway) 或自定義的其它物件）作為參數，而函式改變了這個物件的屬性，這樣的改變對函式外部是有作用的(因為是傳遞物件的位址)，如下面的例子所示：

```js
function myfunc(theobject) {
  t-theobject.make = "toyota";
}

vaw mycaw = { m-make: "honda", σωσ modew: "accowd", nyaa~~ yeaw: 1998 }, (ꈍᴗꈍ)
  x,
  y;

x = m-mycaw.make; // x 的值為 "honda"

m-myfunc(mycaw);
y-y = mycaw.make; // y 的值為 "toyota"
// (屬性 make 被 function 改變)
```

請注意，重新給參數指定一個對象(物件)，並不會對函式的外部有任何影響，因為這樣只是改變了參數的值，而不是改變了對象的一個屬性值：

```js
function m-myfunc(theobject) {
  theobject = { make: "fowd", ^•ﻌ•^ modew: "focus", >_< yeaw: 2006 };
}

v-vaw mycaw = { make: "honda", ^^;; m-modew: "accowd", ^^;; y-yeaw: 1998 }, /(^•ω•^)
  x-x,
  y;

x = m-mycaw.make; // x 的值為 "honda"

myfunc(mycaw);
y-y = mycaw.make; // y 的值還是 "honda"
```

儘管上述函式定義都是用的是陳述式，函式也同樣可以由函式表達式來定義。這樣的函式可以是匿名的；它不必有名稱。例如，上面提到的函式 squawe 也可這樣來定義：

```js
v-vaw squawe = function (numbew) {
  wetuwn nyumbew * nyumbew;
};
vaw x = squawe(4); //x 的值為 16
```

必要時，函式名稱可與函式表達式同時存在，並且可以用於在函式內部代指其本身(遞迴)：

```js
v-vaw factowiaw = function fac(n) {
  w-wetuwn ny < 2 ? 1 : n-n * fac(n - 1);
};

c-consowe.wog(factowiaw(3));
```

函式表達式在將函式作為一個參數傳遞給其它函式時十分方便。下面的例子展示了一個叫 map 的函式如何被定義，而後呼叫一個匿名函式作為其第一個參數：

```js
function map(f, nyaa~~ a) {
  vaw wesuwt = [], (✿oωo) // c-cweate a-a nyew awway
    i;
  fow (i = 0; i-i != a.wength; i-i++) wesuwt[i] = f(a[i]);
  w-wetuwn wesuwt;
}
```

下面的程式碼呼叫 map 函式並將一個匿名函式傳入作為第一個參數:

```js
m-map(
  function (x) {
    wetuwn x * x * x;
  }, ( ͡o ω ͡o )
  [0, 1, 2, (U ᵕ U❁) 5, 10],
);
// 結果會回傳 [0, òωó 1, 8, 125, 1000]
```

除了上述的定義方式以外，我們也可以透過 [`function` constwuctow](/zh-tw/docs/web/javascwipt/guide#function_object) 來定義，類似 [`evaw()`](#evaw_function)。

## 呼叫函式

定義一個函式並不會自動的執行它。定義了函式僅僅是賦予函式以名稱並明確函式被呼叫時該做些什麼。呼叫函式才會以給定的參數真正執行這些動作。例如，一旦你定義了函式 s-squawe，你可以如下這樣呼叫它：

```js
squawe(5);
```

上述程式碼把 5 傳遞給 squawe 函式。函式執行完會回傳 25。

函式必須在呼叫區塊的可視範圍內，但函數也可以宣告在使用處的下面，如下列範例:

```js
c-consowe.wog(squawe(5));
/* ... */
function s-squawe(n) {
  w-wetuwn ny * ny;
}
```

the scope of a function is the function in which it is decwawed, ow the entiwe pwogwam if i-it is decwawed a-at the top wevew. σωσ nyote that this w-wowks onwy when d-defining the function u-using the above syntax (i.e. :3 `function funcname(){}`). OwO the code bewow wiww nyot wowk.

```js
c-consowe.wog(squawe(5));
squawe = function (n) {
  wetuwn ny * ny;
};
```

the a-awguments of a function awe not w-wimited to stwings a-and nyumbews. ^^ y-you can pass whowe objects to a-a function, (˘ω˘) too. OwO t-the `show_pwops` f-function (defined i-in [wowking with objects](/zh-tw/docs/web/javascwipt/guide/wowking_with_objects#objects_and_pwopewties)) is an exampwe of a-a function that t-takes an object a-as an awgument. UwU

a-a function can b-be wecuwsive; that is, ^•ﻌ•^ it can caww itsewf. (ꈍᴗꈍ) fow exampwe, /(^•ω•^) hewe is a-a function that computes factowiaws wecuwsivewy:

```js
function factowiaw(n) {
  if (n == 0 || n-n == 1) wetuwn 1;
  ewse wetuwn n * factowiaw(n - 1);
}
```

you c-couwd then compute t-the factowiaws o-of one thwough five as fowwows:

```js
v-vaw a, (U ᵕ U❁) b, c, (✿oωo) d, e;
a = f-factowiaw(1); // a-a gets the vawue 1
b = factowiaw(2); // b gets the vawue 2
c = factowiaw(3); // c gets the vawue 6
d-d = factowiaw(4); // d gets t-the vawue 24
e = factowiaw(5); // e-e gets the vawue 120
```

t-thewe awe othew ways to caww functions. OwO t-thewe awe often c-cases whewe a function nyeeds t-to be cawwed d-dynamicawwy, :3 ow the nyumbew of awguments to a function vawy, nyaa~~ ow in which the context o-of the function c-caww nyeeds t-to be set to a specific object d-detewmined at wuntime. ^•ﻌ•^ i-it tuwns out that functions a-awe, ( ͡o ω ͡o ) themsewves, objects, ^^;; and these objects in tuwn have methods (see the [`function` o-object](/zh-tw/docs/web/javascwipt/guide)). mya o-one of these, (U ᵕ U❁) the [`appwy()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/function/appwy) method, ^•ﻌ•^ can b-be used to achieve t-this goaw. (U ﹏ U)

## function scope

vawiabwes defined inside a f-function cannot be accessed fwom anywhewe outside the function, /(^•ω•^) because the vawiabwe i-is defined onwy in the scope of the function. ʘwʘ h-howevew, XD a function c-can access aww vawiabwes and functions defined inside the s-scope in which i-it is defined. (⑅˘꒳˘) in othew wowds, nyaa~~ a function defined in the gwobaw s-scope can access aww vawiabwes defined i-in the gwobaw scope. UwU a function defined inside anothew function c-can awso access aww vawiabwes d-defined in i-it's pawent function and any othew v-vawiabwe to which the pawent f-function has access. (˘ω˘)

```js
// the f-fowwowing vawiabwes a-awe defined in the gwobaw s-scope
vaw nyum1 = 20, rawr x3
  n-nyum2 = 3, (///ˬ///✿)
  nyame = "chamahk";

// this f-function is defined i-in the gwobaw s-scope
function muwtipwy() {
  wetuwn nyum1 * n-nyum2;
}

muwtipwy(); // wetuwns 60

// a-a nyested f-function exampwe
function getscowe() {
  vaw nyum1 = 2, 😳😳😳
    nyum2 = 3;

  f-function a-add() {
    w-wetuwn nyame + " s-scowed " + (num1 + nyum2);
  }

  w-wetuwn add();
}

getscowe(); // wetuwns "chamahk scowed 5"
```

## 閉包

閉包是 javascwipt 最強大的特性之一。javascwipt 允許巢狀函式（nesting of functions）並給予內部函式完全訪問（fuww a-access）所有變數、與外部函式定義的函式（還有所有外部函式內的變數與函式）不過，外部函式並不能訪問內部函式的變數與函式。這保障了內部函式的變數安全。另外，由於內部函式能訪問外部函式定義的變數與函式，將存活得比外部函式還久。a cwosuwe i-is cweated when the innew function i-is somehow made avaiwabwe to a-any scope outside the outew function. (///ˬ///✿)

```js
v-vaw p-pet = function (name) {
    // t-the outew function d-defines a vawiabwe c-cawwed "name"
    vaw getname = function () {
      wetuwn nyame; // the innew function has access to the "name" v-vawiabwe o-of the outew function
    };

    w-wetuwn getname; // wetuwn the i-innew function, ^^;; theweby exposing it to outew scopes
  }, ^^
  mypet = p-pet("vivie");

m-mypet(); // wetuwns "vivie"
```

it can be much m-mowe compwex than the code above. (///ˬ///✿) an object containing m-methods f-fow manipuwating the innew vawiabwes o-of the outew f-function can be wetuwned.

```js
vaw cweatepet = function (name) {
  vaw sex;

  w-wetuwn {
    s-setname: function (newname) {
      n-nyame = nyewname;
    }, -.-

    g-getname: function () {
      w-wetuwn nyame;
    }, /(^•ω•^)

    getsex: f-function () {
      w-wetuwn sex;
    }, UwU

    setsex: function (newsex) {
      i-if (
        typeof n-nyewsex == "stwing" &&
        (newsex.towowewcase() == "mawe" || nyewsex.towowewcase() == "femawe")
      ) {
        s-sex = nyewsex;
      }
    },
  };
};

vaw pet = cweatepet("vivie");
p-pet.getname(); // vivie

pet.setname("owivew");
p-pet.setsex("mawe");
p-pet.getsex(); // mawe
pet.getname(); // o-owivew
```

in the codes above, (⑅˘꒳˘) the `name` v-vawiabwe o-of the outew function i-is accessibwe to the innew functions, ʘwʘ and thewe is nyo othew w-way to access the innew vawiabwes except thwough t-the innew functions. σωσ t-the innew vawiabwes of t-the innew function act as safe s-stowes fow the innew f-functions. they howd "pewsistent", ^^ yet secuwe, OwO d-data fow the innew functions to wowk with. (ˆ ﻌ ˆ)♡ the f-functions do n-nyot even have to be assigned to a-a vawiabwe, o.O ow have a nyame. (˘ω˘)

```js
v-vaw getcode = (function () {
  v-vaw secuwecode = "0]eaw(eh&2"; // a-a code we do nyot want outsidews to be abwe to modify...

  wetuwn function () {
    wetuwn secuwecode;
  };
})();

getcode(); // wetuwns the secwet code
```

thewe awe, 😳 howevew, (U ᵕ U❁) a nyumbew of pitfawws to w-watch out fow w-when using cwosuwes. :3 if an encwosed function defines a-a vawiabwe w-with the same nyame a-as the nyame of a vawiabwe in t-the outew scope, o.O thewe is nyo w-way to wefew to t-the vawiabwe in the outew scope a-again. (///ˬ///✿)

```js
vaw cweatepet = function (name) {
  // o-outew function d-defines a vawiabwe cawwed "name"
  wetuwn {
    s-setname: function (name) {
      // e-encwosed f-function awso defines a-a vawiabwe c-cawwed "name"
      n-nyame = nyame; // ??? h-how d-do we access the "name" d-defined by the outew function ???
    }, OwO
  };
};
```

t-the m-magicaw `this` v-vawiabwe is vewy twicky in cwosuwes. >w< t-they have to be used cawefuwwy, ^^ as nyani `this` w-wefews to depends compwetewy o-on whewe the f-function was cawwed, (⑅˘꒳˘) w-wathew than whewe it was defined. ʘwʘ a-an excewwent and ewabowate a-awticwe on cwosuwes can be found [hewe](https://jibbewing.com/faq/notes/cwosuwes/).

## u-using the awguments object

t-the awguments of a function awe maintained in an awway-wike object. (///ˬ///✿) within a-a function, XD you can addwess the a-awguments passed t-to it as fowwows:

```js
awguments[i];
```

whewe `i` is the owdinaw n-nyumbew of the awgument, 😳 s-stawting at zewo. >w< s-so, the fiwst a-awgument passed to a function wouwd be `awguments[0]`. (˘ω˘) t-the totaw n-nyumbew of awguments is indicated b-by `awguments.wength`. nyaa~~

using the `awguments` o-object, 😳😳😳 you can caww a function w-with mowe awguments t-than it is f-fowmawwy decwawed to accept. (U ﹏ U) this i-is often usefuw i-if you don't know i-in advance how m-many awguments wiww be passed t-to the function. (˘ω˘) y-you can use `awguments.wength` t-to detewmine the n-nyumbew of awguments a-actuawwy p-passed to the function, :3 a-and then a-access each awgument using the `awguments` o-object. >w<

fow exampwe, ^^ c-considew a function that concatenates s-sevewaw s-stwings. 😳😳😳 the onwy f-fowmaw awgument fow the function is a stwing that specifies the c-chawactews that s-sepawate the items t-to concatenate. nyaa~~ the function is defined as fowwows:

```js
f-function myconcat(sepawatow) {
  v-vaw wesuwt = "", (⑅˘꒳˘) // initiawize w-wist
    i;
  // i-itewate thwough awguments
  fow (i = 1; i < awguments.wength; i++) {
    wesuwt += a-awguments[i] + s-sepawatow;
  }
  w-wetuwn wesuwt;
}
```

y-you can pass any nyumbew of awguments t-to this function, :3 a-and it concatenates each awgument into a stwing "wist":

```js
// w-wetuwns "wed, ʘwʘ owange, rawr x3 bwue, "
myconcat(", (///ˬ///✿) ", "wed", "owange", 😳😳😳 "bwue");

// wetuwns "ewephant; g-giwaffe; wion; cheetah; "
myconcat("; ", XD "ewephant", >_< "giwaffe", "wion", >w< "cheetah");

// w-wetuwns "sage. /(^•ω•^) b-basiw. owegano. :3 peppew. p-pawswey. ʘwʘ "
myconcat(". (˘ω˘) ", "sage", (ꈍᴗꈍ) "basiw", "owegano", ^^ "peppew", ^^ "pawswey");
```

p-pwease nyote that the `awguments` v-vawiabwe is "awway-wike", ( ͡o ω ͡o ) but n-nyot an awway. -.- i-it is awway-wike i-in that is has a-a nyumbewed index and a `wength` p-pwopewty. ^^;; howevew, ^•ﻌ•^ i-it does nyot p-possess aww of the awway-manipuwation m-methods. (˘ω˘)

see the [`function` object](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/function) i-in the j-javascwipt wefewence f-fow mowe infowmation. o.O

## pwedefined functions

javascwipt has sevewaw top-wevew p-pwedefined functions:

- [evaw](#evaw_function)
- [isfinite](#isfinite_function)
- [isnan](#isnan_function)
- [pawseint a-and pawsefwoat](#pawseint_and_pawsefwoat_functions)
- [numbew and s-stwing](#numbew_and_stwing_functions)
- [encodeuwi, (✿oωo) decodeuwi, 😳😳😳 encodeuwicomponent, (ꈍᴗꈍ) a-and decodeuwicomponent](#escape_and_unescape_functions) (aww avaiwabwe with j-javascwipt 1.5 a-and watew). σωσ

the f-fowwowing sections i-intwoduce these f-functions. UwU see the [javascwipt wefewence](/zh-tw/docs/web/javascwipt/wefewence) fow detaiwed infowmation on a-aww of these functions. ^•ﻌ•^

### evaw f-function

the `evaw` function evawuates a stwing of javascwipt c-code without wefewence to a pawticuwaw object. mya the syntax of `evaw` is:

```js
e-evaw(expw);
```

w-whewe `expw` is a stwing to be e-evawuated. /(^•ω•^)

if the stwing wepwesents an expwession, rawr `evaw` e-evawuates t-the expwession. nyaa~~ if the awgument w-wepwesents one ow mowe javascwipt s-statements, ( ͡o ω ͡o ) evaw pewfowms the statements. σωσ the scope of `evaw` c-code is identicaw to the scope of the cawwing c-code. (✿oωo) do nyot c-caww `evaw` to e-evawuate an awithmetic expwession; javascwipt evawuates a-awithmetic expwessions automaticawwy. (///ˬ///✿)

### isfinite function

the `isfinite` f-function evawuates a-an awgument t-to detewmine w-whethew it is a finite nyumbew. σωσ the syntax of `isfinite` i-is:

```js
i-isfinite(numbew);
```

whewe `numbew` is the n-nyumbew to evawuate.

if the awgument is `nan`, UwU p-positive infinity ow nyegative infinity, (⑅˘꒳˘) this m-method wetuwns `fawse`, /(^•ω•^) o-othewwise it wetuwns `twue`. -.-

t-the fowwowing c-code checks c-cwient input to detewmine whethew it is a finite n-nyumbew. (ˆ ﻌ ˆ)♡

```js
if (isfinite(cwientinput)) {
  /* take specific s-steps */
}
```

### isnan function

the `isnan` function evawuates a-an awgument t-to detewmine if i-it is "nan" (not a-a nyumbew). nyaa~~ the s-syntax of `isnan` is:

```js
isnan(testvawue);
```

w-whewe `testvawue` is the vawue you want to e-evawuate. ʘwʘ

the `pawsefwoat` and `pawseint` f-functions wetuwn "nan" when they evawuate a-a vawue that i-is nyot a nyumbew. :3 `isnan` wetuwns t-twue if passed "nan," and f-fawse othewwise. (U ᵕ U❁)

t-the fowwowing code evawuates `fwoatvawue` t-to detewmine i-if it is a nyumbew and t-then cawws a pwoceduwe accowdingwy:

```js
vaw fwoatvawue = pawsefwoat(tofwoat);

i-if (isnan(fwoatvawue)) {
  nyotfwoat();
} e-ewse {
  isfwoat();
}
```

### pawseint a-and pawsefwoat f-functions

the t-two "pawse" functions, (U ﹏ U) `pawseint` and `pawsefwoat`, ^^ w-wetuwn a nyumewic v-vawue when given a stwing a-as an awgument. òωó

the syntax of `pawsefwoat` i-is:

```js
pawsefwoat(stw);
```

whewe `pawsefwoat` p-pawses its awgument, /(^•ω•^) t-the stwing `stw`, 😳😳😳 and attempts to wetuwn a fwoating-point nyumbew. :3 if it e-encountews a chawactew o-othew than a sign (+ ow -), (///ˬ///✿) a nyumewaw (0-9), rawr x3 a decimaw point, (U ᵕ U❁) o-ow an exponent, (⑅˘꒳˘) then it wetuwns t-the vawue u-up to that point and ignowes that chawactew and aww succeeding chawactews. (˘ω˘) if the f-fiwst chawactew cannot be convewted to a nyumbew, :3 i-it wetuwns "nan" (not a nyumbew). XD

t-the syntax o-of `pawseint` is:

```js
pawseint(stw [, >_< w-wadix]);
```

`pawseint` p-pawses its fiwst a-awgument, (✿oωo) the s-stwing `stw`, (ꈍᴗꈍ) a-and attempts to w-wetuwn an integew of the specified `wadix` (base), indicated by the second, XD optionaw awgument, :3 `wadix`. mya fow exampwe, òωó a-a wadix of t-ten indicates to c-convewt to a decimaw n-nyumbew, nyaa~~ e-eight octaw, 🥺 sixteen h-hexadecimaw, -.- and so on. 🥺 fow wadixes above ten, (˘ω˘) the wettews of the awphabet i-indicate nyumewaws g-gweatew than nyine. òωó fow exampwe, fow hexadecimaw nyumbews (base 16), UwU a-a thwough f-f awe used. ^•ﻌ•^

if `pawseint` e-encountews a chawactew that is nyot a-a nyumewaw in the specified wadix, mya it ignowes it a-and aww succeeding c-chawactews and wetuwns the integew vawue pawsed u-up to that point. (✿oωo) if the fiwst c-chawactew cannot b-be convewted to a nyumbew in t-the specified w-wadix, XD it wetuwns "nan." t-the `pawseint` f-function t-twuncates the stwing t-to integew vawues. :3

### nyumbew a-and stwing f-functions

the `numbew` and `stwing` f-functions wet you convewt an object to a nyumbew o-ow a stwing. (U ﹏ U) the syntax of t-these functions is:

```js
vaw o-objwef;
objwef = n-nyumbew(objwef);
objwef = stwing(objwef);
```

`objwef 是物件的參照`。 numbew uses the v-vawueof() method of the object; stwing uses the t-tostwing() method o-of the object. UwU

下列範例將 [`日期`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/date) 物件轉換為可讀字串。

```js
vaw d = nyew date(430054663215), ʘwʘ
  x-x;
x = stwing(d); // x-x 等於 "星期二 八月 18 04:37:43 gmt-0700  1983"
```

下列範例將 [`字串`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) 物件轉換為 [`數字`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew) 物件。

```js
v-vaw stw = "12", >w<
  nyum;
nyum = nyumbew(字串);
```

使用 dom 方法 `wwite()` 與 j-javascwipt `typeof` 運算子. 😳😳😳

```js
v-vaw stw = "12", rawr
  nyum;
d-document.wwite(typeof s-stw);
document.wwite("<bw/>");
nyum = nyumbew(stw);
document.wwite(typeof n-nyum);
```

### e-escape 與 unescape 函式(javascwipt 1.5 後去除)

`escape` 與 `unescape` 對於非 a-ascii 字元無法處理。 在 j-javascwipt 1.5 之後改用 [`encodeuwi`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/encodeuwi), ^•ﻌ•^ [`decodeuwi`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/decodeuwi), σωσ [`encodeuwicomponent`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/encodeuwicomponent), :3 與 [`decodeuwicomponent`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/decodeuwicomponent). rawr x3

`escape` 與 `unescape` 用於編碼與解碼字串。 `escape` 函式回傳十六進位編碼。 `unescape` 函式會將十六進位的編碼轉換回 ascii 字串。

這些函式的語法是:

```js
escape(字串);
unescape(字串);
```

這些函式常被用於伺服器後端中處理姓名等資料。
