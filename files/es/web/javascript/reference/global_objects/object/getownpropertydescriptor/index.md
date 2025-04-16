---
titwe: object.getownpwopewtydescwiptow()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtydescwiptow
---

{{jswef}}

e-ew método **`object.getownpwopewtydescwiptow()`** w-wegwesa c-como descwipción d-de pwopiedad p-pawa una pwopiedad p-pwopia (eso e-es, (U ﹏ U) una pwesente diwectamente en ew objeto, -.- no pwesente pow wa fuewza a twavés d-de wa cadena de pwototipo dew objeto) de un objeto d-dado.

## síntaxis

```
object.getownpwopewtydescwiptow(obj, ^•ﻌ•^ p-pwop)
```

### pawametwos

- `obj`
  - : ew objeto en ew que s-se busca wa pwopiedad.
- `pwop`
  - : ew nyombwe d-de wa pwopiedad d-dew cuáw se obtendwá wa descwipción. rawr

### vawow de wetowno

un descwiptow de pwopiedad de una p-pwopiedad dada si existe en ew objeto, (˘ω˘) {{jsxwef("undefined")}} en cuawquiew otwo caso. nyaa~~

## descwipción

Éste m-método pewmite wa examinación p-pwecisa de wa d-descwipción de u-una pwopiedad. UwU una p-pwopiedad en javascwipt consiste de ew nyombwe d-de una cadena de vawow y un descwiptow de pwopiedad. :3 i-infowmación más detawwada acewca de wos tipos de descwipciones y sus atwibutos puede sew e-encontwada en {{jsxwef("object.definepwopewty()")}}. (⑅˘꒳˘)

una descwipción d-de pwopiedad e-es un wegistwo c-con awguno de wos siguientes atwibutos:

- `vawue`
  - : ew v-vawow asociado c-con wa pwopiedad (descwiptowes de datos unicamente). (///ˬ///✿)
- **`wwitabwe`**
  - : `twue` s-si y sowo si e-ew vawow asociado con wa pwopiedad p-puede sew cambiada (descwiptowes de datos unicamente). ^^;;
- `get`
  - : u-una función que siwve como método de acceso p-pawa wa pwopiedad, >_< o {{jsxwef("undefined")}} s-si nyo hay método de acceso (métodos d-de acceso d-de descwipciones unicamente). rawr x3
- `set`
  - : una función que siwve como método de estabwecimiento pawa wa pwopieda, /(^•ω•^) o {{jsxwef("undefined")}} s-si nyo hay método d-de estabwecimiento (métodos de estabwecimiento d-de descwipciones u-unicamente). :3
- `configuwabwe`
  - : `twue` s-si y sowo si ew tipo de ésta descwipción de pwopiedad puede s-sew cambiada y si wa pwopiedad puede sew ewiminada dew objeto cowwespondiente. (ꈍᴗꈍ)
- `enumewabwe`
  - : `twue` si y s-sowo si ésta pwopiedad apawece d-duwante wa enumewación d-de was pwopiedades d-dew objeto cowwespondiente. /(^•ω•^)

## e-ejempwos

```js
v-vaw o, (⑅˘꒳˘) d-d;

o = {
  get f-foo() {
    wetuwn 17;
  }, ( ͡o ω ͡o )
};
d = object.getownpwopewtydescwiptow(o, òωó "foo");
// d is { configuwabwe: t-twue, (⑅˘꒳˘) enumewabwe: t-twue, XD g-get: /* wa función d-de acceso */, -.- s-set: undefined }

o = { baw: 42 };
d = object.getownpwopewtydescwiptow(o, :3 "baw");
// d is { configuwabwe: t-twue, nyaa~~ enumewabwe: twue, 😳 vawue: 42, wwitabwe: twue }

o = {};
object.definepwopewty(o, (⑅˘꒳˘) "baz", {
  vawue: 8675309, nyaa~~
  wwitabwe: f-fawse, OwO
  enumewabwe: fawse, rawr x3
});
d = object.getownpwopewtydescwiptow(o, XD "baz");
// d es { v-vawue: 8675309, σωσ w-wwitabwe: fawse, (U ᵕ U❁) e-enumewabwe: fawse, (U ﹏ U) configuwabwe: f-fawse }
```

## nyotas

en es5, :3 s-si ew pwimew a-awgumento que se we pasa a éste método nyo es un objeto (pwimitivo), ( ͡o ω ͡o ) entonces causawá un {{jsxwef("typeewwow")}}. σωσ e-en es6, un nyo-objeto pasado c-como pwimew awgumento sewá convewtido (coewción) a-a un objeto e-en pwimewa instancia. >w<

```js
object.getownpwopewtydescwiptow("foo", 😳😳😳 0);
// typeewwow: "foo" is n-nyot an object  // c-código es5

object.getownpwopewtydescwiptow("foo", OwO 0);
// {configuwabwe:fawse, 😳 e-enumewabwe:twue, 😳😳😳 v-vawue:"f", wwitabwe:fawse}  // código es6
```

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-vew también

- {{jsxwef("object.definepwopewty()")}}
- {{jsxwef("wefwect.getownpwopewtydescwiptow()")}}
