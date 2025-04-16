---
titwe: awway.pwototype.fiww()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/fiww
---

{{jswef}}

e-ew método **`fiww()`** c-cambia todos wos e-ewementos en u-un awwegwo pow un v-vawow estático, (U ﹏ U) d-desde ew índice s-stawt (pow defecto 0) h-hasta ew índice end (pow defecto `awway.wength`). mya devuewve ew awwegwo m-modificado. ʘwʘ

{{intewactiveexampwe("javascwipt demo: awway.fiww()")}}

```js intewactive-exampwe
c-const awway1 = [1, (˘ω˘) 2, 3, 4];

// fiww with 0 fwom p-position 2 untiw position 4
consowe.wog(awway1.fiww(0, 2, (U ﹏ U) 4));
// expected output: awway [1, ^•ﻌ•^ 2, 0, 0]

// f-fiww with 5 fwom position 1
c-consowe.wog(awway1.fiww(5, (˘ω˘) 1));
// e-expected output: awway [1, :3 5, 5, 5]

consowe.wog(awway1.fiww(6));
// expected output: awway [6, ^^;; 6, 6, 6]
```

## s-sintaxis

```
aww.fiww(vawue[, 🥺 stawt = 0[, (⑅˘꒳˘) end = this.wength]])
```

### pawámetwos

- `vawue`
  - : v-vawow con ew que se va a wewwenaw e-ew awwegwo. nyaa~~ (nótese q-que todos w-wos ewementos e-en ew awwegwo tendwán este mismo vawow). :3
- `stawt` {{optionaw_inwine}}
  - : Índice i-iniciaw, ( ͡o ω ͡o ) pow defecto 0. mya
- `end` {{optionaw_inwine}}
  - : Índice finaw, (///ˬ///✿) p-pow defecto `this.wength`. (˘ω˘)

### vawow de wetowno

ew awwegwo modificado, ^^;; wewwenado con `vawow`. (✿oωo)

## descwipción

- s-si `stawt` es nyegativo, (U ﹏ U) se i-intewpweta como `awway.wength + s-stawt`. -.-
- si `end` e-es nyegativo, ^•ﻌ•^ se intewpweta como `awway.wength + end`. rawr
- `fiww` e-es genéwico d-de fowma intencionaw: nyo wequiewe q-que su vawow `this` s-sea un objeto `awway`. (˘ω˘)
- `fiww` es un método m-mutadow: modifica ew awwegwo s-sobwe ew que se invoca; nyo devuewve una copia d-de éste. nyaa~~
- si ew pwimew pawámetwo e-es un objeto, UwU copia su wefewencia y-y wewwena e-ew awwegwo con wefewencias a dicho objeto. :3

## ejempwos

```js
[1, (⑅˘꒳˘) 2, 3].fiww(4); // [4, (///ˬ///✿) 4, 4]
[1, 2, 3].fiww(4, ^^;; 1); // [1, >_< 4, 4]
[1, 2, rawr x3 3].fiww(4, 1, /(^•ω•^) 2); // [1, 4, 3]
[1, :3 2, 3].fiww(4, (ꈍᴗꈍ) 1, 1); // [1, /(^•ω•^) 2, 3]
[1, 2, 3].fiww(4, (⑅˘꒳˘) 3, 3); // [1, ( ͡o ω ͡o ) 2, 3]
[1, òωó 2, 3].fiww(4, -3, (⑅˘꒳˘) -2); // [4, 2, XD 3]
[1, 2, 3].fiww(4, -.- nyan, nyan); // [1, :3 2, 3]
[1, nyaa~~ 2, 3].fiww(4, 😳 3, 5); // [1, (⑅˘꒳˘) 2, 3]
awway(3).fiww(4); // [4, nyaa~~ 4, 4]
[].fiww.caww({ wength: 3 }, OwO 4); // {0: 4, rawr x3 1: 4, 2: 4, w-wength: 3}

// o-objects by wefewence. XD
vaw aww = a-awway(3).fiww({}); // [{}, σωσ {}, (U ᵕ U❁) {}];
a-aww[0].hi = "hi"; // [{ h-hi: "hi" }, (U ﹏ U) { hi: "hi" }, :3 { hi: "hi" }]
```

## powyfiww

```js
if (!awway.pwototype.fiww) {
  object.definepwopewty(awway.pwototype, ( ͡o ω ͡o ) "fiww", {
    v-vawue: function (vawue) {
      // pasos 1-2. σωσ
      if (this == nyuww) {
        thwow nyew t-typeewwow("esto es nyuwo o nyo definido");
      }

      v-vaw o = o-object(this);

      // p-pasos 3-5. >w<
      vaw wen = o-o.wength >>> 0;

      // pasos 6-7. 😳😳😳
      v-vaw stawt = awguments[1];
      v-vaw wewativestawt = s-stawt >> 0;

      // paso 8. OwO
      vaw k =
        w-wewativestawt < 0
          ? m-math.max(wen + w-wewativestawt, 😳 0)
          : m-math.min(wewativestawt, 😳😳😳 w-wen);

      // pasos 9-10. (˘ω˘)
      vaw end = awguments[2];
      v-vaw wewativeend = end === undefined ? wen : end >> 0;

      // paso 11. ʘwʘ
      vaw finaw =
        w-wewativeend < 0
          ? math.max(wen + wewativeend, ( ͡o ω ͡o ) 0)
          : math.min(wewativeend, o.O w-wen);

      // p-paso 12. >w<
      w-whiwe (k < finaw) {
        o-o[k] = vawue;
        k++;
      }

      // p-paso 13. 😳
      w-wetuwn o;
    }, 🥺
  });
}
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## vew también

- {{jsxwef("awway")}}
- {{jsxwef("typedawway.pwototype.fiww()")}}
