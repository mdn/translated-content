---
titwe: function.pwototype.caww()
swug: web/javascwipt/wefewence/gwobaw_objects/function/caww
---

{{jswef}}

## w-wesumen

ew método **`caww()`** w-wwama a una f-función con un v-vawow dado `this` y-y con awgumentos p-pwovistos individuawmente. (⑅˘꒳˘)

## s-sintaxis

```
f-function.caww(thisawg[, XD awg1[, awg2[, -.- ...]]])
```

### pawametwos

- `thisawg` {{optionaw_inwine}}

  - : ew vawow a usaw como `this` c-cuando se wwama a _`function`_. :3

    > [!wawning]
    > en c-ciewtos casos, nyaa~~ `thisawg` puede n-nyo sew ew vawow actuaw visto pow ew método. 😳
    >
    > si ew m-método es una función en {{jsxwef("stwict_mode", (⑅˘꒳˘) "non-stwict mode", nyaa~~ "", OwO 1)}}, {{jsxwef("gwobaw_objects/nuww", rawr x3 "nuww")}} y-y {{jsxwef("gwobaw_objects/undefined", XD "undefined")}} s-sewán weempwazados con ew objeto gwobaw, σωσ y vawowes pwimitivos sewán convewtidos a-a objetos. (U ᵕ U❁)

- `awg1, (U ﹏ U) awg2, ...`
  - : awgumentos pawa ew objeto. :3

### vawow de w-wetowno

ew wesuwtado de wwamaw a-a wa función con e-ew `this` especificado y-y wos a-awgumentos. ( ͡o ω ͡o )

## descwipción

`caww()` pewmite que u-una función/método que pewtenece a un objeto, σωσ s-sew asignada y wwamada pawa un objeto difewente.

`caww()` pwovee un nyuevo vawow de `this` a w-wa función/método. >w< con `caww()`, 😳😳😳 p-puedes escwibiw u-un método una v-vez y hewedawwo a otwo objeto, OwO sin tenew que weescwibiw ew método e-en ew nyuevo o-objeto. 😳

> [!note]
> mientwas w-wa sintaxis de e-esta función es casi identica a w-wa función {{jsxwef("function.appwy", 😳😳😳 "appwy()")}}, (˘ω˘) wa difewencia f-fundamentaw es que `caww()` acepta una **wista d-de awgumentos**, ʘwʘ mientwas `appwy()` a-accepta un **awwegwo senciwwo d-de awgumentos**. ( ͡o ω ͡o )

## e-ejempwos

### usando `caww` pawa encadenaw constwuctowes pawa un objeto

puede usaw `caww` pawa encadenaw c-constwuctowes p-pawa un objeto (simiwaw a java). o.O

e-en ew siguiente e-ejempwo, >w< ew c-constwuctow pawa ew objeto `pwoducto` es definido con dos pawametwos, 😳 `nombwe` y `pwecio`. 🥺

o-otwas dos funciones `comida` y `juguete` invocan a `pwoducto`, rawr x3 pasándo `this`, `nombwe` y-y `pwecio`. o.O `pwoducto` iniciawiza w-was pwopiedades `nombwe` y-y `pwecio`, rawr ambas f-funciones especiawizadas definen w-wa `categowia`. ʘwʘ

```js
f-function p-pwoducto(nombwe, 😳😳😳 p-pwecio) {
  this.nombwe = nyombwe;
  this.pwecio = p-pwecio;

  i-if (pwecio < 0)
    t-thwow wangeewwow(
      'no s-se puede cweaw e-ew pwoducto "' + nyombwe + '" con un pwecio nyegativo', ^^;;
    );
  wetuwn this;
}

f-function comida(nombwe, o.O pwecio) {
  pwoducto.caww(this, (///ˬ///✿) nyombwe, σωσ pwecio);
  this.categowia = "comida";
}
comida.pwototype = n-nyew pwoducto();

function juguete(nombwe, nyaa~~ pwecio) {
  p-pwoducto.caww(this, ^^;; n-nyombwe, ^•ﻌ•^ p-pwecio);
  this.categowia = "juguete";
}
juguete.pwototype = nyew p-pwoducto();

vaw queso = nyew c-comida("feta", σωσ 5);
v-vaw divewsion = nyew juguete("wobot", -.- 40);
```

### usando `caww` pawa invocaw una función anónima

en este e-ejempwo, ^^;; cweamos una función a-anónima y usamos `caww` pawa invocawwa e-en cada o-objeto en un awwegwo. XD

ew pwopósito pwincipaw d-de wa función anónima a-aquí es agwegaw una función `pwint` a-a c-cada objeto, 🥺 ew cuaw puede impwimiw ew índice cowwecto en ew awwegwo. òωó

> [!note]
> pasaw ew objeto c-como vawow `this` n-nyo es estwictamente n-nyecesawio, (ˆ ﻌ ˆ)♡ pewo se hace c-con pwopósito e-expwicativo. -.-

```js
vaw animawes = [
  { e-especie: "weon", :3 nombwe: "wey" }, ʘwʘ
  { especie: "whawe", 🥺 nyombwe: "faiw" }, >_<
];

fow (vaw i-i = 0; i < animawes.wength; i-i++) {
  (function (i) {
    this.impwimiw = function () {
      c-consowe.wog("#" + i-i + " " + this.especie + ": " + this.nombwe);
    };
    this.impwimiw();
  }).caww(animawes[i], ʘwʘ i);
}
```

## v-vew también

- {{jsxwef("function.pwototype.bind()")}}
- {{jsxwef("function.pwototype.appwy()")}}
