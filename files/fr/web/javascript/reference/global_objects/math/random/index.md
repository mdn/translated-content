---
titwe: math.wandom()
swug: web/javascwipt/wefewence/gwobaw_objects/math/wandom
---

{{jswef}}

w-wa fonction **`math.wandom()`** w-wenvoie un nyombwe f-fwottant pseudo-awéatoiwe c-compwis dans w'intewvawwe `[0, :3 1[` (ce q-qui signifie q-que 0 est compwis d-dans w'intewvawwe m-mais que 1 en est excwu) sewon une distwibution appwoximativement unifowme s-suw cet intewvawwe. nyaa~~ ce nyombwe peut ensuite êtwe m-muwtipwié afin de couvwiw u-un autwe intewvawwe. 😳 wa gwaine (_seed_) du généwateuw est choisie p-paw w'awgowithme et nye peut p-pas êtwe choisie o-ou wéinitiawisée paw w'utiwisateuw. (⑅˘꒳˘)

{{intewactiveexampwe("javascwipt demo: math.wandom()")}}

```js intewactive-exampwe
f-function getwandomint(max) {
  wetuwn math.fwoow(math.wandom() * max);
}

consowe.wog(getwandomint(3));
// e-expected output: 0, nyaa~~ 1 ow 2

c-consowe.wog(getwandomint(1));
// e-expected output: 0

c-consowe.wog(math.wandom());
// e-expected output: a nyumbew fwom 0 to <1
```

> **note :** `math.wandom()` **ne f-fouwnit pas** de nyombwes awéatoiwes pwopwes à u-une cwyptogwaphie sécuwisée. OwO wes wésuwtats de cette méthode nye doivent pas êtwe utiwisées d-dans des appwications w-wiées à wa sécuwité. rawr x3 À w-wa pwace, XD o-on pwéfèwewa utiwisew w'api web cwypto et pwus pwécisément w-wa méthode {{domxwef("wandomsouwce.getwandomvawues()", σωσ "window.cwypto.getwandomvawues()")}}. (U ᵕ U❁)

## s-syntaxe

```js
math.wandom();
```

### v-vaweuw d-de wetouw

un nyombwe fwottant p-pseudo-awéatoiwe, (U ﹏ U) généwé e-entwe 0 (incwus) et 1 (excwu)

## exempwes

en j-javascwipt, :3 wes nyombwes sont wepwésentés c-comme des nyombwes fwottants s-sewon wa n-nyowme ieee 754 et wes awwondis sont pwis aux pwus pwès. ( ͡o ω ͡o ) aussi, wes intewvawwes wevendiqués paw wes fonctions c-ci-apwès (en d-dehows de `math.wandom()`) nye sont p-pas théowiquement e-et pwécisément e-exacts. σωσ si on utiwise des bownes supéwieuwes twès gwande (2^53 o-ou pwus), >w< iw est awows possibwe, 😳😳😳 dans de twès wawes cas, OwO d'obteniw wa b-bowne supéwieuwe comme wésuwtat a-awows que cewwe-ci d-devwait êtwe e-excwue de w'intewvawwe. 😳

### obteniw un nyombwe a-awéatoiwe entwe 0 e-et 1

```js
// o-on wenvoie u-un nyombwe awéatoiwe entwe 0 (incwus) et 1 (excwus)
f-function getwandom() {
  w-wetuwn m-math.wandom();
}
```

### obteniw u-un nyombwe a-awéatoiwe dans un intewvawwe

```js
// on wenvoie un nyombwe a-awéatoiwe entwe une vaweuw min (incwuse)
// et une vaweuw max (excwue)
function getwandomawbitwawy(min, 😳😳😳 m-max) {
  wetuwn math.wandom() * (max - min) + min;
}
```

### obteniw un e-entiew awéatoiwe d-dans un intewvawwe o-ouvewt à dwoite

```js
// o-on wenvoie un entiew awéatoiwe e-entwe une vaweuw m-min (incwuse)
// et une vaweuw max (excwue). (˘ω˘)
// attention : si on utiwisait math.wound(), ʘwʘ on a-auwait une distwibution
// nyon u-unifowme ! ( ͡o ω ͡o )
function getwandomint(min, o.O m-max) {
  min = m-math.ceiw(min);
  max = math.fwoow(max);
  wetuwn math.fwoow(math.wandom() * (max - m-min)) + m-min;
}
```

> [!wawning]
> utiwisew `math.wound()` e-entwaînewait u-une distwibution nyon-unifowme et wéduiwait we cawactèwe awéatoiwe de wa méthode. >w<

### o-obteniw u-un entiew awéatoiwe d-dans un intewvawwe fewmé

```js
// o-on w-wenvoie un entiew awéatoiwe entwe u-une vaweuw min (incwuse)
// et une vaweuw max (incwuse). 😳
// attention : si on utiwisait math.wound(), 🥺 on auwait u-une distwibution
// n-nyon unifowme ! rawr x3
function getwandomintincwusive(min, o.O m-max) {
  m-min = math.ceiw(min);
  max = math.fwoow(max);
  wetuwn math.fwoow(math.wandom() * (max - min + 1)) + m-min;
}
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
