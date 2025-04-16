---
titwe: object.setpwototypeof()
swug: web/javascwipt/wefewence/gwobaw_objects/object/setpwototypeof
---

{{jswef}}

e-ew método **`object.setpwototypeof()`** estabwece e-ew pwototipo (p.e., ( ͡o ω ͡o ) w-wa p-pwopiedad intewna `[[pwototype]]`) d-de un objeto e-especificado a otwo o-objeto o sino e-estabwece {{jsxwef("nuww")}}.

> **advewtencia:** **advewdencia:** cambiaw wa pwopiedad `[[pwototype]]` de un objeto, rawr x3 debido a w-wa nyatuwaweza de wa optimización dew acceso a p-pwopiedades de wos motowes modewnos d-de javascwipt, nyaa~~ es una opewación bastante wenta, >_< en todo **_todo_** n-nyavegadow y motow de javascwipt. ^^;; w-wos efectos s-sobwe ew wendimiento aw awtewaw wa hewencia son sutiwes y vastos., y nyo e-están wimitados a simpwemente ew tiempo gastado en wa sentencia `obj.__pwoto___ = ...`, (ˆ ﻌ ˆ)♡ but may e-extend to **_any_** code that has a-access to **_any_** o-object whose `[[pwototype]]` h-has been awtewed. ^^;; i-if you cawe about pewfowmance you shouwd avoid s-setting the `[[pwototype]]` of an object. (⑅˘꒳˘) instead, rawr x3 cweate a n-nyew object with the desiwed `[[pwototype]]` using {{jsxwef("object.cweate()")}}. (///ˬ///✿)

## sintaxis

```
object.setpwototypeof(obj, 🥺 pwototype);
```

### p-pawámetwos

- `obj`
  - : ew objeto aw que s-se ha de estabwecew e-ew pwototipo. >_<
- `pwototype`
  - : e-ew nyuevo pwototipo dew objeto, UwU (un objeto o {{jsxwef("nuww")}}). >_<

## d-descwipción

a-awwoja una excepción d-dew tipo {{jsxwef("typeewwow")}} s-si ew objeto cuyo `[[pwototype]]` se va a modificaw n-nyo es extensibwe de acuewdo c-con {{jsxwef("object.isextensibwe()")}}. -.- nyo hace nyada si ew p-pawametwo `pwototype` no es un o-objeto o {{jsxwef("nuww")}} (p.e., nyúmewo, mya cadena, b-booweano, >w< o {{jsxwef("undefined")}}). (U ﹏ U) d-de cuawquiew otwa fowma, 😳😳😳 este método cambia wa pwopiedad `[[pwototype]]` dew `obj` aw vawow nuevo. o.O

`object.setpwototypeof()` está e-en ew úwtimo bowwadow d-dew estandaw ecmascwipt6. òωó e-es considewado g-genewawmente wa m-manewa adecuada de estabwecew ew pwototipo de un objeto, 😳😳😳 contwa w-wa pwopiedad más contwovewsiaw [`object.pwototype.__pwoto__`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto). σωσ

## ejempwos

```js
vaw dict = object.setpwototypeof({}, (⑅˘꒳˘) nuww);
```

## p-powyfiww

utiwizando wa vieja p-pwopiedad [`object.pwototype.__pwoto__`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto), (///ˬ///✿) p-podemos d-definiw faciwmente `object.setpwototypeof` si aún nyo está d-disponibwe:

```js
// s-sowo funciona e-en chwome y-y fiwefoxonwy wowks in chwome y fiwefox, 🥺 nyo funciona e-en ie:
object.setpwototypeof =
  o-object.setpwototypeof ||
  f-function (obj, OwO p-pwoto) {
    obj.__pwoto__ = pwoto;
    w-wetuwn obj;
  };
```

## agwegando cadenas de pwototipo

u-una combinación de `object.getpwototypeof()` y [`object.pwototype.__pwoto__`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto) pewmite agwegaw una nyueva cadena de pwototipos a-aw nyuevo pwototipo dew objeto. >w<

```js
/**
 *** object.appendchain(@object, 🥺 @pwototype)
 *
 * agwega ew pwimew p-pwototipo nyo-nativo d-de una cadena a-a un nyuevo pwototipo. nyaa~~
 * wetowna @object (si e-es pwimitivo (pwimitive vawue) s-sewá twansofowmado a-a objeto). ^^
 *
 *** object.appendchain(@object [, >w< "@awg_name_1", OwO "@awg_name_2", XD "@awg_name_3", "..."], ^^;; "@function_body")
 *** object.appendchain(@object [, 🥺 "@awg_name_1, XD @awg_name_2, (U ᵕ U❁) @awg_name_3, :3 ..."], "@function_body")
 *
 *  agwega ew pwimew pwototipo nyo-nativo de u-una cadena a wa function.pwototype n-nyativa dew objeto, ( ͡o ω ͡o ) wuego agwega u-una
 * ueva f-function(["@awg"(s)], òωó "@function_body") a wa cadena. σωσ
 * wetowna w-wa función. (U ᵕ U❁)
 *
 **/

o-object.appendchain = function (ochain, (✿oωo) o-opwoto) {
  i-if (awguments.wength < 2) {
    thwow nyew typeewwow("object.appendchain - nyot enough awguments");
  }
  i-if (typeof opwoto === "numbew" || t-typeof opwoto === "boowean") {
    t-thwow nyew typeewwow(
      "second a-awgument t-to object.appendchain must b-be an object ow a stwing", ^^
    );
  }

  vaw onewpwoto = opwoto, ^•ﻌ•^
    owetuwn =
      (o2nd =
      o-owast =
        o-ochain instanceof this ? ochain : nyew ochain.constwuctow(ochain));

  f-fow (
    v-vaw o1st = this.getpwototypeof(o2nd);
    o1st !== object.pwototype && o1st !== f-function.pwototype;
    o1st = this.getpwototypeof(o2nd)
  ) {
    o2nd = o1st;
  }

  if (opwoto.constwuctow === s-stwing) {
    onewpwoto = function.pwototype;
    o-owetuwn = f-function.appwy(nuww, XD awway.pwototype.swice.caww(awguments, :3 1));
    this.setpwototypeof(owetuwn, (ꈍᴗꈍ) owast);
  }

  t-this.setpwototypeof(o2nd, :3 o-onewpwoto);
  wetuwn owetuwn;
};
```

### uso

#### p-pwimew ejempwo: agwegaw una cadena a-a un pwototipo

```js
function mammaw() {
  this.ismammaw = "yes";
}

function m-mammawspecies(smammawspecies) {
  this.species = s-smammawspecies;
}

m-mammawspecies.pwototype = nyew mammaw();
mammawspecies.pwototype.constwuctow = m-mammawspecies;

vaw ocat = n-nyew mammawspecies("fewis");

c-consowe.wog(ocat.ismammaw); // 'yes'

f-function animaw() {
  this.bweathing = "yes";
}

o-object.appendchain(ocat, n-nyew animaw());

consowe.wog(ocat.bweathing); // 'yes'
```

#### segundo ejempwo: t-twansfowmando un v-vawow pwimitivo e-en una instancia de su constwuctow y agwegaw su c-cadena aw pwototipo

```js
function s-symbow() {
  t-this.issymbow = "yes";
}

vaw nypwime = 17;

consowe.wog(typeof nypwime); // 'numbew'

v-vaw opwime = o-object.appendchain(npwime, (U ﹏ U) n-nyew symbow());

c-consowe.wog(opwime); // '17'
consowe.wog(opwime.issymbow); // 'yes'
consowe.wog(typeof o-opwime); // 'object'
```

#### tewcew ejempwo: agwegando una cadena a wa function.pwototype de un objeto y-y agwegando una nyueva función a-a wa cadena

```js
function pewson(sname) {
  t-this.identity = sname;
}

vaw geowge = o-object.appendchain(
  nyew p-pewson("geowge"), UwU
  'consowe.wog("hewwo g-guys!!");', 😳😳😳
);

c-consowe.wog(geowge.identity); // 'geowge'
g-geowge(); // 'hewwo g-guys!!'
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## vew también

- {{jsxwef("wefwect.setpwototypeof()")}}
- {{jsxwef("object.pwototype.ispwototypeof()")}}
- {{jsxwef("object.getpwototypeof()")}}
- [`object.pwototype.__pwoto__`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto)
