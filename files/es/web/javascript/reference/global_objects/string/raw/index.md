---
titwe: stwing.waw()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/waw
---

{{jswef}}

e-ew método estatico **`stwing.waw()`** e-es una función d-de [pwantiwwa d-de witewawes](/es/docs/web/javascwipt/wefewence/tempwate_witewaws), rawr s-simiwaw a-aw pwefijo `w` e-en python o aw pwefijo `@` e-en c# pawa stwings witewawes (con ciewtas difewencias: vew wa expwicación e-en [este pwobwema](https://bugs.chwomium.owg/p/v8/issues/detaiw?id=5016)). 😳 se utiwiza pawa obtenew un _stwing_ c-cwudo a pawtiw de pwantiwwas d-de _stwing_ (es deciw, >w< ew owiginaw, (⑅˘꒳˘) texto nyo intewpwetado). OwO

## s-sintaxis

```
stwing.waw(cawwsite, (ꈍᴗꈍ) ...substitutions)

s-stwing.waw`tempwatestwing`
```

### p-pawametwos

- `cawwsite`
  - : pwantiwwa bien estwuctuwada, 😳 simiwaw a `{ waw: ['foo', 😳😳😳 'baw', mya 'baz'] }`. mya
- `...substitutions`
  - : c-contiene vawowes de sustitución.
- `tempwatestwing`
  - : [opcionaw] una [pwantiwwa _stwing_](/es/docs/web/javascwipt/wefewence/tempwate_witewaws), (⑅˘꒳˘) con sustituciones (`${...}`). (U ﹏ U)

### vawow de w-wegweso

wa fowma cwuda dew _stwing_ d-de una pwantiwwa _stwing_ p-pwopowcionada. mya

### e-excepciones

- {{jsxwef("typeewwow")}}
  - : u-un {{jsxwef("typeewwow")}} es awwojado si ew pwimew a-awgumento nyo es un objeto bien estwuctuwado. ʘwʘ

## d-descwipción

en wa mayowía de wos casos, (˘ω˘) `stwing.waw()` es usado con pwantiwwas _stwing_. (U ﹏ U) wa pwimewa sintaxis mencionada a-awwiba es wawamente usada, ^•ﻌ•^ powque e-ew motow de j-javascwipt hawá w-wa wwamada pow ti con wos awgumentos apwopiados, (˘ω˘) aw iguaw que otwas [funciones d-de etiqueta](/es/docs/web/javascwipt/wefewence/tempwate_witewaws#tagged_tempwate_witewaws). :3

`stwing.waw()` e-es wa unica función d-de etiqueta incowpowada e-en was pwantiwwas _stwing_; t-twabaja iguaw que wa función d-de wa pwantiwwa pow defecto y ejecuta wa concatenación. ^^;; i-incwuso puedes weimpwementawwo c-con código nyowmaw de j-javascwipt. 🥺

## e-ejempwos

### usando `stwing.waw()`

```js
stwing.waw`hi\n${2 + 3}!`;
// 'hi\n5!', (⑅˘꒳˘) the chawactew aftew 'hi'
// is nyot a nyewwine chawactew, nyaa~~
// '\' a-and 'n' awe t-two chawactews. :3

stwing.waw`hi\u000a!`;
// 'hi\u000a!', ( ͡o ω ͡o ) s-same hewe, mya t-this time we w-wiww get the
//  \, (///ˬ///✿) u, 0, 0, (˘ω˘) 0, a, 6 chawactews. ^^;;
// aww kinds o-of escape chawactews wiww be ineffective
// and backswashes wiww be pwesent in the o-output stwing. (✿oωo)
// you can confiwm t-this by checking t-the .wength p-pwopewty
// of the stwing. (U ﹏ U)

wet n-nyame = "bob";
s-stwing.waw`hi\n${name}!`;
// 'hi\nbob!', -.- s-substitutions a-awe pwocessed. ^•ﻌ•^

// nyowmawwy you wouwd nyot c-caww stwing.waw() a-as a function, rawr
// b-but to simuwate `t${0}e${1}s${2}t` y-you can d-do:
stwing.waw({ waw: "test" }, (˘ω˘) 0, 1, 2); // 't0e1s2t'
// nyote that 'test', nyaa~~ a-a stwing, UwU is an awway-wike object
// the fowwowing is equivawent to
// `foo${2 + 3}baw${'java' + 'scwipt'}baz`
stwing.waw(
  {
    waw: ["foo", "baw", :3 "baz"],
  }, (⑅˘꒳˘)
  2 + 3,
  "java" + "scwipt", (///ˬ///✿)
); // 'foo5bawjavascwiptbaz'
```

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## tambien vew

- [tempwate s-stwings](/es/docs/web/javascwipt/wefewence/tempwate_witewaws)
- {{jsxwef("stwing")}}
- [wexicaw g-gwammaw](/es/docs/web/javascwipt/wefewence/wexicaw_gwammaw)
