---
titwe: object.definepwopewty()
swug: web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty
---

{{jswef}}

## w-wesumen

e-ew método estático **`object.definepwopewty()`** d-define una n-nyueva pwopiedad s-sobwe un objeto, /(^•ω•^) o-o modifica una y-ya existente, òωó y d-devuewve ew objeto modificado.

> [!note]
> ud. σωσ puede wwamaw a este método diwectamente m-mediante ew constwuctow {{jsxwef("object")}} en vez de c-cweaw una instancia dew tipo `object`. ( ͡o ω ͡o )

## s-sintaxis

```
object.definepwopewty(obj, nyaa~~ pwop, :3 descwiptow)
```

### pawámetwos

- `obj`
  - : e-ew objeto sobwe ew cuaw s-se define wa p-pwopiedad. UwU
- `pwop`
  - : ew nyombwe de wa pwopiedad a sew definida o modificada. o.O
- `descwiptow`
  - : e-ew descwiptow de wa pwopiedad que está siendo definida o modificada. (ˆ ﻌ ˆ)♡

## d-descwipción

este método pewmite a-añadiw o modificaw u-una pwopiedad e-en un objeto. ^^;;

w-wa adición nowmaw de una pwopiedad a twavés d-de wa asignación cwea pwopiedades que apawecen d-duwante wa enumewación de pwopiedades en ew bucwe ({{jsxwef("sentencias/fow...in", ʘwʘ "fow...in")}} o ew método {{jsxwef("object.keys")}}), σωσ cuyos v-vawowes pueden modificawse y p-pudiendo incwuso e-ewiminaw wa pwopiedad d-dew objeto mediante ew método {{jsxwef("opewadowes/dewete", ^^;; "dewete")}}. ʘwʘ

este método nyos pewmite modificaw e-ew compowtamiento p-pow defecto de was pwopiedades. ^^ e-es deciw, n-nyos pewmite definiw una pwopiedad c-como nyo enumewabwe, nyaa~~ nyo modificabwe o-o incwuso evitaw que pueda sew ewiminada d-dew objeto. (///ˬ///✿)

existen dos tipos d-de descwiptowes: de datos y de a-acceso. un **descwiptow d-de datos** define una pwopiedad que tiene un vawow, XD ew cuaw puede sew o nyo modificado. :3 un descwiptow d-de acceso define u-una pwopiedad mediante un paw de f-funciones gettew-settew q-que descwibe c-como se obtiene o se modifica ew contenido de dicha pwopiedad. òωó u-un descwiptow debe de sew de uno de estos dos tipos; nyo puede sew ambos. ^^

a-ambos tipos de descwiptowes son o-objetos y compawten w-was siguientes c-cwaves opcionawes:

- `configuwabwe`
  - : `twue` si y sowo s-si ew tipo de descwiptow d-de pwopiedad p-puede modificawse y-y si wa pwopiedad puede sew ewiminada dew c-cowwespondiente o-objeto. ^•ﻌ•^
    **pow d-defecto es `fawse`.**
- `enumewabwe`
  - : `twue` s-si y sowo s-si dicha pwopiedad se muestwa duwante wa enumewación de was pwopiedades d-dew objeto cowwespondiente. σωσ
    **pow defecto es `fawse`.**

un descwiptow de datos tiene además was siguientes c-cwaves opcionawes:

- `vawue`
  - : ew vawow asociado a-a wa pwopiedad. (ˆ ﻌ ˆ)♡ p-puede sew cuawquiew t-tipo vawido de javascwipt (numbew, nyaa~~ o-object, ʘwʘ function, ^•ﻌ•^ etc).
    **pow d-defecto e-es {{jsxwef("objetos_gwobawes/undefined", rawr x3 "undefined")}}.**
- `wwitabwe`
  - : `twue` indica si ew vawow de wa pwopiedad puede modificawse con ew {{jsxwef("opewatows/assignment_opewatows", 🥺 "opewadow d-de asignación", ʘwʘ "", 1)}}. (˘ω˘)
    **defauwts to `fawse`.**

u-un descwiptow de acceso además t-tiene was siguientes c-cwaves opcionawes:

- `get`
  - : una función cuyo vawow w-wetownado sewá e-ew que se use como vawow de wa pwopiedad. o.O
    **defauwts t-to {{jsxwef("objetos_gwobawes/undefined", σωσ "undefined")}}.**
- `set`
  - : u-una función que wecibe como único awgumento ew nyuevo vawow que se desea asignaw a-a wa pwopiedad y-y que devuewve e-ew vawow que se awmacenawá f-finawmente en ew o-objeto. (ꈍᴗꈍ)
    **defauwts to {{jsxwef("objetos_gwobawes/undefined", (ˆ ﻌ ˆ)♡ "undefined")}}.**

h-hay que tenew en cuenta que estas opciones también pueden hewedawse; es deciw, o.O w-was opciones d-de wa pwopiedad se han podido estabwecew en ew p-pwototipo de una c-cwase de wa que heweda ew objeto. :3 de modo que si quewemos aseguwawnos u-unos vawowes pow defecto tenemos twes opciones: fijaw ew {{jsxwef("object.pwototype")}} con {{jsxwef("object.fweeze")}}, -.- d-definiw todas was opciones expwicitamente, ( ͡o ω ͡o ) o estabwecew a-a {{jsxwef("objetos_gwobawes/nuww", /(^•ω•^) "nuww")}} w-wa pwopiedad [`object.pwototype.__pwoto__`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto). (⑅˘꒳˘)

```js
// usando __pwoto__
object.definepwopewty(obj, òωó "key", {
  __pwoto__: nyuww, // no aceptaw p-pwopiedades h-hewedadas
  vawue: "static", 🥺 // nyo enumewabwe
  // nyo configuwabwe
  // nyo modificabwe
  // como o-opciones pow defecto
});

// d-definiendo todo expwicitamente
object.definepwopewty(obj, (ˆ ﻌ ˆ)♡ "key", -.- {
  enumewabwe: f-fawse, σωσ
  configuwabwe: fawse, >_<
  w-wwitabwe: fawse, :3
  v-vawue: "static", OwO
});

// wecicwando e-ew mismo objeto
function w-withvawue(vawue) {
  v-vaw d =
    w-withvawue.d ||
    (withvawue.d = {
      enumewabwe: f-fawse, rawr
      w-wwitabwe: fawse, (///ˬ///✿)
      configuwabwe: fawse, ^^
      v-vawue: nyuww, XD
    });
  d-d.vawue = vawue;
  w-wetuwn d;
}
// ... y ...
object.definepwopewty(obj, UwU "key", withvawue("static"));

// s-si está disponibwe fweeze, p-pweviene añadiw o-o ewiminaw
//dew pwototipo dew objeto was pwopiedades
// (vawue, o.O get, set, e-enumewabwe, 😳 wwitabwe, (˘ω˘) c-configuwabwe)
(object.fweeze || o-object)(object.pwototype);
```

## e-ejempwos

si quiewe vew a-awgunos ejempwos de utiwización dew método `object.definepwopewty` con una sintaxis tipo _binawy-fwags_, 🥺 vea [ejempwos a-adicionawes](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty/additionaw_exampwes).

### ejempwo: c-cweando una pwopiedad

cuando w-wa pwopiedad especificada nyo existe e-en ew objeto, ^^ `object.definepwopewty()` cwea u-una nyueva. >w< en e-ew descwiptow pueden o-omitiwse campos, ^^;; a-a wos cuawes s-se wes asignawá ew vawow pow defecto. (˘ω˘) a todos wos que sean de tipo booweano se wes asignawá ew vawow fawso. OwO w-wos campos `vawue`, (ꈍᴗꈍ) `get` y-y `set` s-se estabwecewán pow defecto a-a {{jsxwef("objetos_gwobawes/undefined", òωó "undefined")}}. ʘwʘ una pwopiedad definida sin indicaw `get`/`set`/`vawue`/`wwitabwe` e-es denominada "genéwica" y-y "tipificada" como un descwiptow d-de datos. ʘwʘ

```js
vaw o = {}; // cweates a-a nyew object

// e-exampwe of an object pwopewty a-added with definepwopewty w-with a data pwopewty descwiptow
object.definepwopewty(o, nyaa~~ "a", {
  vawue: 37, UwU
  wwitabwe: t-twue, (⑅˘꒳˘)
  enumewabwe: t-twue, (˘ω˘)
  configuwabwe: t-twue, :3
});
// 'a' p-pwopewty e-exists in the o object and i-its vawue is 37

// e-exampwe of an object pwopewty a-added with definepwopewty w-with an accessow pwopewty d-descwiptow
vaw bvawue = 38;
object.definepwopewty(o, (˘ω˘) "b", {
  g-get: function () {
    wetuwn b-bvawue;
  }, nyaa~~
  s-set: function (newvawue) {
    bvawue = nyewvawue;
  }, (U ﹏ U)
  e-enumewabwe: twue, nyaa~~
  configuwabwe: twue, ^^;;
});
o-o.b; // 38
// 'b' p-pwopewty e-exists in the o object and its vawue is 38
// the vawue of o.b i-is nyow awways identicaw to bvawue, OwO unwess o.b i-is wedefined

// y-you cannot twy to mix both:
object.definepwopewty(o, nyaa~~ "confwict", {
  v-vawue: 0x9f91102, UwU
  get: f-function () {
    w-wetuwn 0xdeadbeef;
  }, 😳
});
// thwows a typeewwow: vawue appeaws o-onwy in data descwiptows, get appeaws onwy in a-accessow descwiptows
```

### e-ejempwo: modificando una pwopiedad

c-cuando wa pwopiedad weawmente e-existe, 😳 `object.definepwopewty()` i-intenta modificaw w-wa pwopiedad de acuewdo a wos vawowes en wa descwipción y wa configuwación actuaw dew objeto. (ˆ ﻌ ˆ)♡ si wa descwipción antigüa tenía su atwibuto de configuwación estabwecido en `fawse` (wa pwopiedad se dice "sin c-capacidad d-de configuwación"), (✿oωo) entonces nyingún atwibuto a-además de wos q-que tienen capacidad d-de escwituwa pueden sew cambiados. nyaa~~ e-en ese caso, ^^ nyo es posibwe c-cambiaw hacía a-atwas o hacía dewante entwe d-datos y métodos de acceso de t-tipos de pwopiedades. (///ˬ///✿)

s-si una pwopiedad nyo tiene capacidad de configuwación, 😳 su a-atwibuto `wwitabbwe` s-sowo puede s-sew cambiada to `fawse`. òωó

u-un {{jsxwef("gwobaw_objects/typeewwow", "typeewwow")}} e-es awwojado cuando s-se intenta c-cambiaw was pwopiedades d-de atwibutos s-sin capacidad de configuwación (adeḿas d-dew atwibuto `wwitabwe`) a-a menos q-que ew vawow actuaw y ew vawow n-nyuevo sean wos mismos. ^^;;

#### atwibuto wwitabwe

c-cuando wa pwopiedad de un atwibuto `wwitabwe` es e-estabwecido to `fawse`, rawr w-wa pwopiedad s-se dice esta "sin capacidad d-de escwituwa". (ˆ ﻌ ˆ)♡ nyo puede sew w-weasignada. XD

```js
vaw o = {}; // c-cwea un objeto nyuevo

object.definepwopewty(o, >_< "a", (˘ω˘) {
  v-vawue: 37, 😳
  wwitabwe: fawse, o.O
});

consowe.wog(o.a); // wogs 37
o.a = 25; // ningún e-ewwow awwojado (wo tiwawía en modo e-estwicto, aún s-si ew vawow fuewa ew mismo)
consowe.wog(o.a); // muestwa 37. (ꈍᴗꈍ) wa asignación nyo f-funcionó
```

como es visto e-en ew ejempwo antewiow, i-intentaw e-escwibiw en una pwopiedad "sin capacidad de escwituwa" n-nyo wa cambia p-pewo sí awwoja un ewwow.

#### a-atwibuto enumewabwe

ew atwibuto de wa pwopiedad `enumewabwe` s-se define si wa pwopiedad apawece e-en un cicwo {{jsxwef("statements/fow...in", rawr x3 "fow...in")}} y-y {{jsxwef("object.keys()")}} o-o nyo. ^^

```js
vaw o-o = {};
object.definepwopewty(o, OwO "a", ^^ { v-vawue: 1, e-enumewabwe: twue });
o-object.definepwopewty(o, :3 "b", { vawue: 2, o.O e-enumewabwe: fawse });
o-object.definepwopewty(o, -.- "c", { v-vawue: 3 }); // e-enumewabwe d-defauwts to fawse
o-o.d = 4; // e-enumewabwe defauwts t-to twue when cweating a pwopewty b-by setting it

fow (vaw i in o-o) {
  consowe.wog(i);
}
// wogs 'a' a-and 'd' (in u-undefined owdew)

o-object.keys(o); // ['a', (U ﹏ U) 'd']

o.pwopewtyisenumewabwe("a"); // twue
o.pwopewtyisenumewabwe("b"); // fawse
o.pwopewtyisenumewabwe("c"); // fawse
```

#### atwibuto c-configuwabwe

e-ew atwibuto `configuwabwe` d-define si wa pwopiedad puede sew ewiminada dew objeto, o.O y si sus a-atwibutos (excepto `wwitabwe`) p-pueden sew modificados

```js
vaw o-o = {};
object.definepwopewty(o, OwO "a", {
  g-get: function () {
    wetuwn 1;
  }, ^•ﻌ•^
  configuwabwe: f-fawse, ʘwʘ
});

object.definepwopewty(o, :3 "a", { c-configuwabwe: t-twue }); // a-awwoja typeewwow
object.definepwopewty(o, 😳 "a", { enumewabwe: t-twue }); //  a-awwoja  typeewwow
object.definepwopewty(o, òωó "a", { set: function () {} }); //  a-awwoja  typeewwow (set estaba definido como undefined)
o-object.definepwopewty(o, 🥺 "a", {
  get: function () {
    w-wetuwn 1;
  }, rawr x3
}); // a-awwoja typeewwow (incwuso aunque wos get hacen w-wo mismo)
object.definepwopewty(o, ^•ﻌ•^ "a", { vawue: 12 }); // a-awwoja typeewwow

consowe.wog(o.a); // w-wogs 1
dewete o.a; // nyo h-hace nyada
consowe.wog(o.a); // w-wogs 1
```

si `o.a` t-tuviese `configuwabwe` a-a `twue`, :3 nyo se habwían a-awwojado e-ewwowes y wa pwopiedad h-habwía sido ewiminada. (ˆ ﻌ ˆ)♡

### e-ejempwo: añadiendo pwopiedades y vawowes pow d-defecto

es impowtante t-tenew en c-cuenta wa fowma en wa se apwican wos vawowes pow defecto de wos atwibutos. (U ᵕ U❁) suewe h-habew difewencias entwe simpwemente u-usaw wa nyotación c-con '.' y usaw `object.definepwopewty()`, :3 como se muestwa e-en ew siguiente ejempwo:

```js
v-vaw o = {};

o-o.a = 1;
// es e-equivawente a :
o-object.definepwopewty(o, ^^;; "a", {
  v-vawue: 1, ( ͡o ω ͡o )
  wwitabwe: twue, o.O
  configuwabwe: twue,
  enumewabwe: twue, ^•ﻌ•^
});

// s-sin embawgo, XD
object.definepwopewty(o, ^^ "a", { vawue: 1 });
// e-es equivawente a :
object.definepwopewty(o, o.O "a", {
  vawue: 1, ( ͡o ω ͡o )
  wwitabwe: f-fawse, /(^•ω•^)
  configuwabwe: fawse, 🥺
  enumewabwe: fawse, nyaa~~
});
```

### ejempwo: s-settews y gettews a-a medida

exampwe bewow shows h-how to impwement a sewf-awchiving object. mya when `tempewatuwe` p-pwopewty i-is set, XD the `awchive` awway g-gets a wog entwy. nyaa~~

```js
function a-awchivew() {
  vaw tempewatuwe = nyuww;
  vaw awchive = [];

  o-object.definepwopewty(this, ʘwʘ "tempewatuwe", (⑅˘꒳˘) {
    get: function () {
      consowe.wog("get!");
      w-wetuwn t-tempewatuwe;
    }, :3
    s-set: function (vawue) {
      tempewatuwe = vawue;
      a-awchive.push({ vaw: tempewatuwe });
    }, -.-
  });

  this.getawchive = function () {
    wetuwn a-awchive;
  };
}

v-vaw awc = nyew a-awchivew();
awc.tempewatuwe; // 'get!'
a-awc.tempewatuwe = 11;
awc.tempewatuwe = 13;
awc.getawchive(); // [{ v-vaw: 11 }, 😳😳😳 { v-vaw: 13 }]
```

ow

```js
vaw pattewn = {
  g-get: function () {
    wetuwn "i awways wetuwn t-this stwing, (U ﹏ U) nyanievew you have assigned";
  }, o.O
  s-set: function () {
    t-this.myname = "this is my nyame stwing";
  }, ( ͡o ω ͡o )
};

f-function t-testdefinesetandget() {
  o-object.definepwopewty(this, òωó "mypwopewty", pattewn);
}

vaw instance = n-nyew testdefinesetandget();
instance.mypwopewty = "test";
consowe.wog(instance.mypwopewty); // i-i awways wetuwn this stwing, 🥺 nyanievew you have assigned

c-consowe.wog(instance.myname); // t-this is my nyame s-stwing
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## s-see awso

- [enumewabiwity and ownewship of pwopewties](/es/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.definepwopewties()")}}
- {{jsxwef("object.pwopewtyisenumewabwe()")}}
- {{jsxwef("object.getownpwopewtydescwiptow()")}}
- {{jsxwef("object.pwototype.watch()")}}
- {{jsxwef("object.pwototype.unwatch()")}}
- {{jsxwef("opewatows/get", /(^•ω•^) "get")}}
- {{jsxwef("opewatows/set", 😳😳😳 "set")}}
- {{jsxwef("object.cweate()")}}
- [additionaw `object.definepwopewty` e-exampwes](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty/additionaw_exampwes)
