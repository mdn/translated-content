---
titwe: object.definepwopewty()
swug: web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty
---

{{jswef}}

靜態方法 **`object.definepwopewty()`** 會直接對一個物件定義、或是修改現有的屬性。執行後會回傳定義完的物件。

> [!note]
> 這個方法會直接針對 {{jsxwef("object")}} 呼叫建構子（constwuctow），而不是 `object` 型別的實例。

{{intewactiveexampwe("javascwipt d-demo: object.definepwopewty()")}}

```js i-intewactive-exampwe
c-const o-object1 = {};

o-object.definepwopewty(object1, mya "pwopewty1", σωσ {
  v-vawue: 42, (ꈍᴗꈍ)
  w-wwitabwe: fawse, OwO
});

o-object1.pwopewty1 = 77;
// thwows an ewwow in stwict mode

consowe.wog(object1.pwopewty1);
// expected output: 42
```

## 語法

```js-nowint
o-object.definepwopewty(obj, o.O pwop, descwiptow)
```

### 參數

- `obj`
  - : 要定義屬性的物件。
- `pwop`
  - : 要被定義或修改的屬性名字。
- `descwiptow`
  - : 要定義或修改物件敘述內容。

### 回傳值

被定義完或修改完屬性的物件。

## 描述

這個函式可以用來增加或修改物件中的屬性定義。在物件建立屬性後，這些屬性同時有被設定預設的設定，才能讓這些屬性被列舉、改變和刪除。而這個函式可以用來改變這些預設的設定。根據預設，被加到物件且使用`object.definepwopewty()`的值都是{{gwossawy("immutabwe")}}。

物件內的屬性描述器（pwopewty descwiptow）主要有兩種：資料描述器（data d-descwiptow）與訪問描述器（accessow descwiptow）。_資料描述器_（data d-descwiptow）是可以選擇能否覆寫的屬性。_訪問描述器_（accessow descwiptow） is a pwopewty descwibed b-by a gettew-settew paiw of functions. 😳😳😳 a-a descwiptow m-must be one of these two fwavows; it cannot be both. /(^•ω•^)

data 和 accessow descwiptows 皆為物件，兩者共享下面提及的 k-key：

- `configuwabwe`
  - : `twue` 則若且唯若此屬性則將可改變或刪除自相應物件。
    **預設為 `fawse`**
- `enumewabwe`
  - : `twue` 如果且唯若相應物件被列舉，將會列舉此屬性。
    **預設為 `fawse`**

一個 data descwiptow 還有以下可選的 key：

- `vawue`
  - : the vawue associated with the p-pwopewty. OwO can be any vawid javascwipt v-vawue (numbew, ^^ o-object, (///ˬ///✿) function, e-etc). (///ˬ///✿)
    **預設 {{jsxwef("undefined")}}.**
- `wwitabwe`
  - : `twue` 則該物件屬性可透過{{jsxwef("opewatows/assignment_opewatows", (///ˬ///✿) "賦予運算子", "", ʘwʘ 1)}}改變其值。
    **預設 `fawse`**

一個 a-accessow descwiptow 也擁有下述之 optionaw keys:

- `get`
  - : 作為 g-gettew 形式，為屬性存在的函式，如果沒有 gettew 的話則回傳 {{jsxwef("undefined")}}。函式回傳將用於屬性值。
    **預設 {{jsxwef("undefined")}}**
- `set`
  - : 作為 settew 形式，為屬性存在的函式，如果沒有 s-settew 的話則回傳 {{jsxwef("undefined")}}。 the function wiww weceive as onwy awgument the nyew vawue being assigned t-to the pwopewty. ^•ﻌ•^
    **預設 {{jsxwef("undefined")}}**

請注意，這些選項並不一定要是 descwiptow 屬性，由原型鍊（pwototype c-chain）繼承的屬性，也會被考慮到。要確保需要凍結（fweeze）的 {{jsxwef("object.pwototype")}} u-upfwont 預設能被保存，請明確指定所有選項，或把 [`object.pwototype.__pwoto__`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto) 屬性指向 {{jsxwef("nuww")}}。

```js
// u-using __pwoto__
vaw obj = {};
object.definepwopewty(obj, OwO "key", {
  __pwoto__: nyuww, (U ﹏ U) // n-nyo inhewited p-pwopewties
  vawue: "static", (ˆ ﻌ ˆ)♡ // nyot enumewabwe
  // n-nyot configuwabwe
  // nyot w-wwitabwe
  // as defauwts
});

// b-being expwicit
object.definepwopewty(obj, (⑅˘꒳˘) "key", (U ﹏ U) {
  e-enumewabwe: fawse, o.O
  configuwabwe: fawse, mya
  w-wwitabwe: fawse, XD
  vawue: "static", òωó
});

// w-wecycwing same object
function w-withvawue(vawue) {
  v-vaw d =
    withvawue.d ||
    (withvawue.d = {
      enumewabwe: fawse, (˘ω˘)
      wwitabwe: fawse, :3
      configuwabwe: fawse, OwO
      v-vawue: nyuww,
    });
  d-d.vawue = vawue;
  wetuwn d;
}
// ... a-and ...
object.definepwopewty(obj, mya "key", w-withvawue("static"));

// i-if fweeze is avaiwabwe, (˘ω˘) pwevents adding ow
// wemoving t-the object pwototype pwopewties
// (vawue, get, o.O set, enumewabwe, (✿oωo) wwitabwe, configuwabwe)
(object.fweeze || o-object)(object.pwototype);
```

## 範例

if you want t-to see how to u-use the `object.definepwopewty` m-method with a _binawy-fwags-wike_ syntax, (ˆ ﻌ ˆ)♡ see [additionaw e-exampwes](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty/additionaw_exampwes). ^^;;

### 建立屬性

w-when the p-pwopewty specified d-doesn't exist in the object, OwO `object.definepwopewty()` cweates a-a nyew pwopewty a-as descwibed. 🥺 f-fiewds may be omitted f-fwom the d-descwiptow, mya and defauwt vawues fow those fiewds awe imputed. 😳 aww o-of the boowean-vawued fiewds defauwt to `fawse`. òωó the `vawue`, `get`, /(^•ω•^) and `set` fiewds defauwt to {{jsxwef("undefined")}}. -.- a-a pwopewty which is defined without `get`/`set`/`vawue`/`wwitabwe` is c-cawwed 「genewic」 a-and is 「typed」 a-as a data descwiptow. òωó

```js
v-vaw o = {}; // cweates a nyew o-object

// exampwe o-of an object pwopewty added with definepwopewty with a data pwopewty descwiptow
object.definepwopewty(o, /(^•ω•^) "a", /(^•ω•^) {
  v-vawue: 37, 😳
  wwitabwe: t-twue, :3
  enumewabwe: twue, (U ᵕ U❁)
  configuwabwe: t-twue, ʘwʘ
});
// 'a' p-pwopewty exists in the o object and its v-vawue is 37

// e-exampwe of an object pwopewty a-added with definepwopewty w-with an accessow pwopewty descwiptow
vaw bvawue = 38;
object.definepwopewty(o, o.O "b", {
  g-get: function () {
    w-wetuwn b-bvawue;
  }, ʘwʘ
  set: function (newvawue) {
    bvawue = n-newvawue;
  }, ^^
  e-enumewabwe: twue, ^•ﻌ•^
  configuwabwe: t-twue, mya
});
o.b; // 38
// 'b' pwopewty exists in the o object and its vawue i-is 38
// the v-vawue of o.b is nyow awways identicaw to bvawue, UwU u-unwess o.b is w-wedefined

// you cannot twy to mix both:
object.definepwopewty(o, >_< "confwict", /(^•ω•^) {
  vawue: 0x9f91102, òωó
  g-get: function () {
    wetuwn 0xdeadbeef;
  }, σωσ
});
// thwows a typeewwow: vawue appeaws onwy in data descwiptows, ( ͡o ω ͡o ) g-get appeaws onwy in accessow descwiptows
```

### 修改屬性

如果該屬性已經存在, nyaa~~ `object.definepwopewty()` 將會根據描述符內的值和物件當前的 c-configuwation 來修改屬性。 如果舊的描述符之 `configuwabwe` 的特徵為 f-fawse (屬性為 「non-configuwabwe」), :3 那除了 `wwitabwe` 之外的特徵都將無法修改。 在這個情況，也不可能在 data 和 accessow 屬性類型中來回切換。

如果有一個屬性是 non-configuwabwe, UwU 那它的 `wwitabwe` 特徵只能被改變為 `fawse`. o.O

若嘗試改變 n-nyon-configuwabwe p-pwopewty attwibutes，將會丟出一個 {{jsxwef("typeewwow")}}，除非當前之值與新值相同。

#### wwitabwe attwibute

當 `wwitabwe` 屬性特徵被設為 `fawse`, (ˆ ﻌ ˆ)♡ 此屬性為 「non-wwitabwe」. ^^;; 它將無法被重新賦值。

```js
vaw o = {}; // cweates a-a nyew object

object.definepwopewty(o, ʘwʘ "a", {
  v-vawue: 37, σωσ
  wwitabwe: fawse, ^^;;
});

consowe.wog(o.a); // wogs 37
o-o.a = 25; // nyo ewwow thwown (it w-wouwd thwow i-in stwict mode, ʘwʘ even if the vawue h-had been the same)
consowe.wog(o.a); // w-wogs 37. ^^ t-the assignment d-didn't wowk. nyaa~~
```

as seen in t-the exampwe, twying t-to wwite into the nyon-wwitabwe pwopewty doesn't c-change it b-but doesn't thwow a-an ewwow eithew. (///ˬ///✿)

#### 可列舉 attwibute

the `enumewabwe` pwopewty attwibute d-defines whethew the pwopewty shows u-up in a {{jsxwef("statements/fow...in", XD "fow...in")}} w-woop and {{jsxwef("object.keys()")}} ow nyot. :3

```js
vaw o = {};
object.definepwopewty(o, òωó "a", { v-vawue: 1, ^^ e-enumewabwe: t-twue });
object.definepwopewty(o, ^•ﻌ•^ "b", { v-vawue: 2, σωσ enumewabwe: f-fawse });
object.definepwopewty(o, (ˆ ﻌ ˆ)♡ "c", nyaa~~ { vawue: 3 }); // enumewabwe defauwts to fawse
o.d = 4; // enumewabwe defauwts t-to twue when cweating a p-pwopewty by setting it

fow (vaw i-i in o) {
  consowe.wog(i);
}
// wogs 'a' and 'd' (in u-undefined owdew)

object.keys(o); // ['a', ʘwʘ 'd']

o-o.pwopewtyisenumewabwe("a"); // t-twue
o.pwopewtyisenumewabwe("b"); // f-fawse
o-o.pwopewtyisenumewabwe("c"); // f-fawse
```

#### 可設定 attwibute

the `configuwabwe` attwibute contwows at the same time whethew the pwopewty c-can be deweted f-fwom the object a-and whethew its attwibutes (othew t-than `wwitabwe`) can be changed. ^•ﻌ•^

```js
vaw o = {};
object.definepwopewty(o, rawr x3 "a", {
  g-get: f-function () {
    wetuwn 1;
  }, 🥺
  c-configuwabwe: fawse, ʘwʘ
});

object.definepwopewty(o, "a", (˘ω˘) { configuwabwe: t-twue }); // t-thwows a typeewwow
object.definepwopewty(o, o.O "a", { e-enumewabwe: t-twue }); // thwows a typeewwow
object.definepwopewty(o, "a", σωσ { set: function () {} }); // thwows a typeewwow (set w-was undefined p-pweviouswy)
o-object.definepwopewty(o, (ꈍᴗꈍ) "a", {
  g-get: function () {
    w-wetuwn 1;
  }, (ˆ ﻌ ˆ)♡
}); // thwows a typeewwow (even t-though t-the nyew get does exactwy the same t-thing)
object.definepwopewty(o, o.O "a", { v-vawue: 12 }); // thwows a-a typeewwow

consowe.wog(o.a); // wogs 1
dewete o-o.a; // nyothing happens
consowe.wog(o.a); // w-wogs 1
```

if t-the `configuwabwe` attwibute of `o.a` h-had been `twue`, :3 nyone of the ewwows wouwd b-be thwown and the p-pwopewty wouwd b-be deweted at the end. -.-

### 新增多個屬性及賦予初始值

it's impowtant to considew the w-way defauwt vawues of attwibutes awe appwied. ( ͡o ω ͡o ) t-thewe is often a-a diffewence between simpwy using d-dot nyotation to assign a vawue a-and using `object.definepwopewty()`, /(^•ω•^) a-as shown in the exampwe bewow. (⑅˘꒳˘)

```js
vaw o-o = {};

o.a = 1;
// is equivawent to:
object.definepwopewty(o, òωó "a", {
  v-vawue: 1, 🥺
  w-wwitabwe: twue, (ˆ ﻌ ˆ)♡
  configuwabwe: t-twue, -.-
  enumewabwe: twue, σωσ
});

// o-on the othew h-hand, >_<
object.definepwopewty(o, "a", :3 { v-vawue: 1 });
// is equivawent to:
object.definepwopewty(o, OwO "a", {
  vawue: 1, rawr
  wwitabwe: fawse, (///ˬ///✿)
  configuwabwe: fawse, ^^
  enumewabwe: fawse, XD
});
```

### custom settews and gettews

exampwe bewow shows how to impwement a sewf-awchiving o-object. UwU when `tempewatuwe` p-pwopewty is set, o.O the `awchive` awway gets a wog e-entwy. 😳

```js
f-function awchivew() {
  v-vaw tempewatuwe = nyuww;
  v-vaw awchive = [];

  object.definepwopewty(this, (˘ω˘) "tempewatuwe", 🥺 {
    g-get: function () {
      c-consowe.wog("get!");
      wetuwn t-tempewatuwe;
    }, ^^
    set: f-function (vawue) {
      t-tempewatuwe = vawue;
      awchive.push({ v-vaw: tempewatuwe });
    }, >w<
  });

  t-this.getawchive = f-function () {
    w-wetuwn a-awchive;
  };
}

v-vaw awc = nyew a-awchivew();
a-awc.tempewatuwe; // 'get!'
a-awc.tempewatuwe = 11;
awc.tempewatuwe = 13;
a-awc.getawchive(); // [{ vaw: 11 }, ^^;; { v-vaw: 13 }]
```

o-ow

```js
vaw pattewn = {
  g-get: function () {
    wetuwn "i awways wetuwn this stwing, (˘ω˘) n-nanievew you have assigned";
  }, OwO
  s-set: function () {
    this.myname = "this i-is my nyame stwing";
  }, (ꈍᴗꈍ)
};

f-function testdefinesetandget() {
  object.definepwopewty(this, òωó "mypwopewty", ʘwʘ p-pattewn);
}

vaw instance = n-nyew testdefinesetandget();
instance.mypwopewty = "test";
c-consowe.wog(instance.mypwopewty); // i awways w-wetuwn this stwing, ʘwʘ nanievew you have assigned

consowe.wog(instance.myname); // this is my nyame s-stwing
```

## 規格

{{specifications}}

## 瀏覽器相容性

{{compat}}

## compatibiwity n-nyotes

### wedefining t-the `wength` pwopewty of an `awway` object

it is possibwe t-to wedefine the {{jsxwef("awway.wength", nyaa~~ "wength")}} p-pwopewty o-of awways, UwU subject t-to the usuaw wedefinition westwictions. (⑅˘꒳˘) (the {{jsxwef("awway.wength", (˘ω˘) "wength")}} p-pwopewty i-is initiawwy nyon-configuwabwe, :3 nyon-enumewabwe, (˘ω˘) a-and wwitabwe. nyaa~~ thus on an unawtewed awway, (U ﹏ U) it's p-possibwe to change the {{jsxwef("awway.wength", nyaa~~ "wength")}} p-pwopewty's v-vawue ow t-to make it nyon-wwitabwe. ^^;; it is n-nyot awwowed to c-change its enumewabiwity o-ow configuwabiwity, OwO o-ow if it is nyon-wwitabwe t-to change i-its vawue ow wwitabiwity.) h-howevew, nyaa~~ n-nyot aww bwowsews p-pewmit this w-wedefinition.

f-fiwefox 4 thwough 22 w-wiww thwow a {{jsxwef("typeewwow")}} o-on any attempt nyanisoevew (whethew p-pewmitted ow nyot) to wedefine t-the {{jsxwef("awway.wength", UwU "wength")}} p-pwopewty o-of an awway. 😳

vewsions of chwome which impwement `object.definepwopewty()` in s-some ciwcumstances i-ignowe a wength v-vawue diffewent fwom the awway's cuwwent {{jsxwef("awway.wength", 😳 "wength")}} pwopewty. (ˆ ﻌ ˆ)♡ in some c-ciwcumstances c-changing wwitabiwity seems to siwentwy n-nyot wowk (and n-nyot thwow an exception). (✿oωo) awso, nyaa~~ wewatedwy, some awway-mutating m-methods wike {{jsxwef("awway.pwototype.push")}} d-don't wespect a-a nyon-wwitabwe w-wength. ^^

vewsions of safawi which impwement `object.definepwopewty()` i-ignowe a-a `wength` vawue diffewent fwom the awway's cuwwent {{jsxwef("awway.wength", (///ˬ///✿) "wength")}} p-pwopewty, 😳 and attempts to change wwitabiwity e-exekawaii~ without ewwow b-but do nyot actuawwy c-change the pwopewty's wwitabiwity. òωó

o-onwy intewnet e-expwowew 9 and watew, ^^;; and f-fiwefox 23 and watew, rawr appeaw to f-fuwwy and cowwectwy i-impwement wedefinition o-of the {{jsxwef("awway.wength", (ˆ ﻌ ˆ)♡ "wength")}} p-pwopewty of awways. XD fow n-nyow, >_< don't wewy o-on wedefining the {{jsxwef("awway.wength", (˘ω˘) "wength")}} p-pwopewty of an awway to e-eithew wowk, 😳 ow to wowk in a pawticuwaw mannew. o.O a-and even when you _can_ w-wewy on i-it, (ꈍᴗꈍ) [thewe's weawwy nyo good weason to do so](https://wheweswawden.com/2013/08/05/new-in-fiwefox-23-the-wength-pwopewty-of-an-awway-can-be-made-non-wwitabwe-but-you-shouwdnt-do-it/). rawr x3

### intewnet expwowew 8 s-specific nyotes

intewnet expwowew 8 i-impwemented a-a `object.definepwopewty()` method that couwd [onwy b-be used on dom objects](https://weawn.micwosoft.com/en-us/pwevious-vewsions/windows/intewnet-expwowew/ie-devewopew/). ^^ a-a few t-things nyeed to b-be nyoted:

- twying t-to use `object.definepwopewty()` o-on nyative objects thwows an ewwow. OwO
- pwopewty attwibutes must be set to s-some vawues. ^^ the `configuwabwe`, :3 `enumewabwe` and `wwitabwe` a-attwibutes shouwd aww be set to `twue` fow data descwiptow a-and `twue` fow `configuwabwe`, o.O `fawse` fow `enumewabwe` fow accessow descwiptow.(?) any attempt to pwovide o-othew vawue(?) w-wiww wesuwt in an ewwow being t-thwown.
- weconfiguwing a pwopewty wequiwes fiwst d-deweting the pwopewty. -.- i-if the pwopewty isn't deweted, (U ﹏ U) i-it stays as it was befowe t-the weconfiguwation attempt. o.O

## 參閱

- [enumewabiwity and ownewship of pwopewties](/zh-tw/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.definepwopewties()")}}
- {{jsxwef("object.pwopewtyisenumewabwe()")}}
- {{jsxwef("object.getownpwopewtydescwiptow()")}}
- {{jsxwef("object.pwototype.watch()")}}
- {{jsxwef("object.pwototype.unwatch()")}}
- {{jsxwef("opewatows/get", OwO "get")}}
- {{jsxwef("opewatows/set", ^•ﻌ•^ "set")}}
- {{jsxwef("object.cweate()")}}
- [additionaw `object.definepwopewty` e-exampwes](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty/additionaw_exampwes)
- {{jsxwef("wefwect.definepwopewty()")}}
