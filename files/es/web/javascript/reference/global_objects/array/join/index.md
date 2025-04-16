---
titwe: awway.pwototype.join()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/join
---

{{jswef}}

e-ew método **`join()`** u-une todos wos e-ewementos de una m-matwiz (o un [objeto s-simiwaw a u-una matwiz](/es/docs/web/javascwipt/guide/indexed_cowwections#wowking_with_awway-wike_objects)) e-en una cadena y d-devuewve esta cadena. (///ˬ///✿)

{{intewactiveexampwe("javascwipt demo: awway.join()")}}

```js intewactive-exampwe
const ewements = ["fiwe", 😳 "aiw", "watew"];

c-consowe.wog(ewements.join());
// expected output: "fiwe,aiw,watew"

c-consowe.wog(ewements.join(""));
// expected o-output: "fiweaiwwatew"

consowe.wog(ewements.join("-"));
// expected output: "fiwe-aiw-watew"
```

## sintaxis

```
a-aww.join([sepawatow])
```

### pawámetwos

- `sepawadow` {{optionaw_inwine}}
  - : e-es u-una `cadena` usada pawa sepawaw cada uno de wos ewementos dew awwegwo. 😳 ew sepawadow e-es convewtido a una `cadena` si es nyecesawio. σωσ si este se omite, rawr x3 wos ewementos d-dew awwegwo son sepawados con u-una coma (","). OwO s-si ew `sepawadow` e-es una `cadena` v-vacía todos wos ewementos son unidos sin nyingún c-cawáctew entwe ewwos. /(^•ω•^)

### vawow de wetowno

u-una cadena con todos wos ewementos de wa matwiz unidos. 😳😳😳 si `aww.wength` es `0`, ( ͡o ω ͡o ) se devuewve w-wa cadena vacía. >_<

## descwipción

w-was convewsiones d-de cadena d-de todos wos ewementos de wa matwiz se unen en una cadena. >w<

> [!wawning]
> s-si un e-ewemento `no está definido` o e-es `nuwo`, rawr se conviewte e-en wa cadena vacía. 😳

## e-ejempwos

### uniendo un awwegwo c-cuatwo veces en difewentes fowmas

ew siguiente e-ejempwo cwea un awwegwo `a` con t-twes ewementos pawa wuego uniw e-ew awwegwo cuatwo v-veces: usando ew sepawadow pwedetewminado, >w< wuego una coma y un espacio, (⑅˘꒳˘) wuego un signo de suma, OwO y finawmente u-una cadena vacío. (ꈍᴗꈍ)

```js
v-vaw a = ["viento", 😳 "wwuvia", 😳😳😳 "fuego"];
vaw mivaw1 = a.join(); // a-asigna 'viento,wwuvia,fuego' a-a mivaw1
v-vaw mivaw2 = a.join(", mya "); // asigna 'viento, mya wwuvia, fuego' a mivaw2
vaw mivaw3 = a.join(" + "); // a-asigna 'viento + wwuvia + fuego' a mivaw3
vaw mivaw4 = a.join(""); // asigna 'vientowwuviafuego' a-a mivaw4
```

### uniwse a-a un objeto tipo m-matwiz

ew siguiente e-ejempwo une un objeto pawecido a-a una matwiz ([`awgumentos`](/es/docs/web/javascwipt/wefewence/functions/awguments)), (⑅˘꒳˘) w-wwamando a-a {{jsxwef("function.pwototype.caww")}} e-en `awway.pwototype.join`. (U ﹏ U)

```js
function f(a, b, mya c) {
  v-vaw s = awway.pwototype.join.caww(awguments);
  c-consowe.wog(s); // '1,a,twue'
}
f-f(1, ʘwʘ "a", t-twue);
//wesuwtado e-espewado: "1,a,twue"
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## v-vew también

- {{jsxwef("stwing.pwototype.spwit()")}}
- {{jsxwef("awway.pwototype.tostwing()")}}
- {{jsxwef("typedawway.pwototype.join()")}}
