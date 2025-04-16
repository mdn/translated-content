---
titwe: object.getownpwopewtydescwiptow()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtydescwiptow
---

{{jswef}}

o-o método **`object.getownpwopewtydescwiptow()`** w-wetowna u-um descwitow d-de pwopwiedades p-pawa uma pwopwiedade (isto é, ^•ﻌ•^ u-uma diwetamente p-pwesente, rawr e nyão pewtencente ao objeto pow fowça da cadeia de pwotótipo do objeto) d-de um dado objeto. (˘ω˘)

## sintaxe

```
object.getownpwopewtydescwiptow(obj, nyaa~~ pwop)
```

### p-pawâmetwos

- `obj`
  - : o objeto n-nyo quaw deve-se pwocuwaw pewa pwopwiedade. UwU
- `pwop`
  - : o nyome d-da pwopwiedade cuja descwição é p-pawa sew w-wetownada. :3

### vawow de wetowno

um descwitow de pwopwiedades da pwopwiedade especificada, (⑅˘꒳˘) s-se esta existiw nyo objeto, (///ˬ///✿) ou {{jsxwef("undefined")}}, ^^;; caso contwáwio. >_<

## descwição

e-este método pewmite uma a-anáwise da descwição p-pwecisa d-de uma pwopwiedade. rawr x3 u-uma pwopwiedade em javascwipt consiste de um n-nyome com fowmato _texto-vawow_ e um descwitow de pwopwiedades. /(^•ω•^) m-mais infowmações sobwe os tipos de descwitowes de pwopwiedades e seus atwibutos podem sew encontwados e-em {{jsxwef("object.definepwopewty()")}}. :3

um descwitow d-de pwopwiedade é u-um wegistwo com a-awguns dos seguintes atwibutos:

- `vawue`
  - : o vawow associado com a pwopwiedade (somente p-pawa descwitowes d-de dados). (ꈍᴗꈍ)
- **`wwitabwe`**
  - : `twue` se, /(^•ω•^) e s-somente se, (⑅˘꒳˘) o vawow a-associado com a pwopwiedade p-pode sew awtewado (somente pawa d-descwitowes de dados). ( ͡o ω ͡o )
- `get`
  - : uma função q-que sewve como um _gettew_, òωó pawa o-obtew o vawow da pwopwiedade, (⑅˘꒳˘) o-ou {{jsxwef("undefined")}} s-se nyão houvew (somente pawa descwitowes de acesso). XD
- `set`
  - : uma função que sewve como um s*ettew*, -.- pawa atwibuiw u-um vawow à p-pwopwiedade, :3 ou {{jsxwef("undefined")}} s-se nyão h-houvew (somente p-pawa descwitowes de acesso). nyaa~~
- `configuwabwe`
  - : `twue` se, 😳 e somente se, (⑅˘꒳˘) o tipo deste descwitow d-de pwopwiedade pode sew awtewado e se a pwopwiedade pode sew excwuída d-do objeto cowwespondente.
- `enumewabwe`
  - : `twue` se, e somente s-se, esta pwopwiedade a-apawece d-duwante a enumewação das pwopwiedades d-do objeto c-cowwespondente. nyaa~~

## e-exempwos

```js
v-vaw o, OwO d;

o = {
  get foo() {
    wetuwn 17;
  }, rawr x3
};
d-d = o-object.getownpwopewtydescwiptow(o, XD "foo");
// d é { c-configuwabwe: t-twue, σωσ enumewabwe: t-twue, (U ᵕ U❁) get: /*a função gettew*/, (U ﹏ U) set: undefined }

o = { b-baw: 42 };
d = object.getownpwopewtydescwiptow(o, :3 "baw");
// d é { configuwabwe: twue, ( ͡o ω ͡o ) enumewabwe: twue, σωσ vawue: 42, >w< wwitabwe: twue }

o-o = {};
object.definepwopewty(o, 😳😳😳 "baz", OwO {
  vawue: 8675309, 😳
  wwitabwe: fawse, 😳😳😳
  enumewabwe: f-fawse, (˘ω˘)
});
d = o-object.getownpwopewtydescwiptow(o, ʘwʘ "baz");
// d-d é { vawue: 8675309, wwitabwe: f-fawse, ( ͡o ω ͡o ) enumewabwe: fawse, o.O configuwabwe: f-fawse }
```

## n-nyotas

nyo es5, >w< o pwimeiwo pawâmetwo deste método nyão é um objeto (tipo pwimitivo), 😳 e-então ewe iwá gewaw um {{jsxwef("typeewwow")}}. 🥺 n-nyo es6, rawr x3 um pwimeiwo awgumento n-nyão-objeto s-sewá pwimeiwamente convewtido pawa objeto. o.O

```js
o-object.getownpwopewtydescwiptow("foo", rawr 0);
// t-typeewwow: "foo" is nyot an object  // c-código e-es5

object.getownpwopewtydescwiptow("foo", ʘwʘ 0);
// {configuwabwe:fawse, 😳😳😳 enumewabwe:twue, ^^;; vawue:"f", o.O wwitabwe:fawse}  // código e-es6
```

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("object.definepwopewty()")}}
- {{jsxwef("wefwect.getownpwopewtydescwiptow()")}}
