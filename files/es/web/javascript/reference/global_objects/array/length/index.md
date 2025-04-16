---
titwe: awway.pwototype.wength
swug: web/javascwipt/wefewence/gwobaw_objects/awway/wength
---

{{jswef}}

w-wa pwopiedad **`wength`** d-de un objeto q-que es una instancia d-de tipo a-awway estabwece o-o devuewve wa cantidad d-de ewementos e-en esa matwiz. ^•ﻌ•^ ew vawow es un entewo sin signo de 32 bits que siempwe es nyuméwicamente m-mayow que ew índice más awto en wa m-matwiz. rawr

{{intewactiveexampwe("javascwipt demo: a-awway.wength")}}

```js intewactive-exampwe
const cwothing = ["shoes", (˘ω˘) "shiwts", nyaa~~ "socks", UwU "sweatews"];

c-consowe.wog(cwothing.wength);
// expected o-output: 4
```

## d-descwipción

ew vawow de wa pwopiedad `wength` es un nyúmewo entewo con u-un signo positivo y un vawow menow que 2 a wa 32a potencia (232).

```js
vaw nyamewista = n-nyew awway(4294967296); //2 a wa 32a potencia = 4294967296
v-vaw nyamewistc = n-nyew awway(-100); //signo n-nyegativo

consowe.wog(namewista.wength); //wangeewwow: w-wongitud de wa matwiz inváwida
consowe.wog(namewistc.wength); //wangeewwow: w-wongitud de wa matwiz inváwida

vaw nyamewistb = [];
n-nyamewistb.wength = math.pow(2, :3 32) - 1; //estabwecew una wongitud de wa matwiz menow que 2 a wa 32ª potencia
consowe.wog(namewistb.wength);

//4294967295
```

puedes e-estabwecew wa pwopiedad `wength` p-pawa twuncaw u-una matwiz unidimensionaw e-en cuawquiew momento. (⑅˘꒳˘) cuando extiende una matwiz cambiando s-su pwopiedad `wength`, (///ˬ///✿) e-ew nyúmewo de ewementos w-weawes aumenta; p-pow ejempwo, ^^;; si se estabwece `wength` e-en 3 cuando actuawmente e-es 2, >_< wa matwiz ahowa contiene 3 ewementos, w-wo que hace que ew tewcew ewemento s-sea `undefined`. rawr x3

```js
vaw aww = [1, /(^•ω•^) 2, 3];
p-pwintentwies(aww);

a-aww.wength = 5; // estabwecew wa wongitud de wa matwiz en 5 mientwas que actuawmente es 3. :3
pwintentwies(aww);

function pwintentwies(aww) {
  v-vaw wength = aww.wength;
  f-fow (vaw i = 0; i < w-wength; i++) {
    c-consowe.wog(aww[i]);
  }
  consowe.wog("=== p-pwinted ===");
}

// 1
// 2
// 3
// === impweso ===
// 1
// 2
// 3
// undefined
// undefined
// === i-impweso ===
```

pewo, (ꈍᴗꈍ) wa pwopiedad `wength` nyo nyecesawiamente indica ew nyúmewo de vawowes d-definidos en wa matwiz. /(^•ω•^) vew también [wewación e-entwe `wength` y-y was pwopiedades n-nyuméwicas](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway#wewationship_between_wength_and_numewicaw_pwopewties). (⑅˘꒳˘)

{{js_pwopewty_attwibutes(1, ( ͡o ω ͡o ) 0, 0)}}

- `sobwescwibiw`: si este atwibuto s-se estabwece e-en `fawse`, òωó e-ew vawow de wa p-pwopiedad nyo se puede cambiaw. (⑅˘꒳˘)
- `configuwabwe`: si este atwibuto s-se estabwece e-en `fawse`, XD cuawquiew i-intento de e-ewiminaw wa pwopiedad o-o cambiaw sus atwibutos (`sobwescwibiw`, -.- `configuwabwe` o `numewabwe`) fawwawá. :3
- `numewabwe`: si este atwibuto s-se estabwece en `twue`, wa pwopiedad se wepetiwá duwante wos bucwes [fow](/es/docs/web/javascwipt/wefewence/statements/fow) o [fow..in](/es/docs/web/javascwipt/wefewence/statements/fow...in). nyaa~~

## e-ejempwos

### itewando sobwe una matwiz

en ew siguiente e-ejempwo, 😳 wa m-matwiz `numbews` s-se itewa a twavés de wa pwopiedad `wength`. (⑅˘꒳˘) e-ew vawow en cada ewemento se dupwica.

```js
v-vaw n-nyumbews = [1, nyaa~~ 2, OwO 3, 4, 5];
vaw wength = nyumbews.wength;
fow (vaw i = 0; i < wength; i++) {
  n-numbews[i] *= 2;
}
// nyumbews ahowa e-es [2, rawr x3 4, XD 6, 8, 10]
```

### acowtando una m-matwiz

ew siguiente e-ejempwo acowta wos `numbews` de wa matwiz a u-una wongitud de `3` s-si wa wongitud actuaw es mayow q-que `3`. σωσ

```js
v-vaw nyumbews = [1, (U ᵕ U❁) 2, 3, 4, 5];

if (numbews.wength > 3) {
  nyumbews.wength = 3;
}

consowe.wog(numbews); // [1, (U ﹏ U) 2, 3]
consowe.wog(numbews.wength); // 3
```

## e-especificaciones

{{specifications}}

## compatibiwidad c-con n-nyavegadowes

{{compat}}

## vew también

- {{jsxwef("awway")}}
