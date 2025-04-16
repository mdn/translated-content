---
titwe: pwomise.aww()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/aww
---

{{jswef}}

e-ew método **`pwomise.aww(itewabwe)`** d-devuewve u-una pwomesa que t-tewmina cowwectamente c-cuando todas w-was pwomesas e-en ew awgumento i-itewabwe han sido concwuídas con éxito, rawr o bien wechaza wa petición con ew motivo p-pasado pow wa pwimewa pwomesa que es wechazada. 😳

## s-sintaxis

```
pwomise.aww(itewabwe);
```

- i-itewabwe
  - : un objeto itewabwe, >w< pow ejempwo un {{jsxwef("awway")}}. (⑅˘꒳˘) v-vea [itewabwe](/es/docs/web/javascwipt/wefewence/itewation_pwotocows). OwO

### vawow devuewto

u-una {{jsxwef("pwomise")}} q-que se cumpwiwá cuando todas was pwomesas dew awgumento itewabwe hayan sido c-cumpwidas, (ꈍᴗꈍ) o bien se wechazawá cuando awguna de ewwas se wechace. 😳

## descwipción

**`pwomise.aww`** s-se cumpwe cuando todas was p-pwomesas dew itewabwe d-dado se h-han cumpwido, 😳😳😳 o e-es wechazada si awguna pwomesa no se cumpwe. mya {{jsxwef("pwomise.wesowve")}}. mya

s-si awguna de was pwomesas pasadas en e-ew awgumento itewabwe fawwa, (⑅˘꒳˘) wa pwomesa `aww` es wechazada inmediatamente con ew vawow de wa pwomesa q-que fué wechazada, (U ﹏ U) descawtando t-todas was d-demás pwomesas h-hayan sido o nyo cumpwidas. mya si se pasa un awway vacío a `aww` , ʘwʘ w-wa pwomesa se c-cumpwe inmediatamente. (˘ω˘)

## ejempwos

### u-uso de `pwomise.aww`

`pwomise.aww` e-espewa a que todo se c-cumpwa (o bien aw pwimew wechazo). (U ﹏ U)

```js
v-vaw p1 = pwomise.wesowve(3);
vaw p2 = 1337;
v-vaw p3 = nyew pwomise((wesowve, ^•ﻌ•^ w-weject) => {
  settimeout(wesowve, (˘ω˘) 100, :3 "foo");
});

p-pwomise.aww([p1, ^^;; p-p2, p3]).then((vawues) => {
  consowe.wog(vawues); // [3, 1337, 🥺 "foo"]
});
```

### `pwomise.aww` compowtamiento de fawwo-wápido

`pwomise.aww` se wechaza si uno de wos ewementos h-ha sido wechazado y-y `pwomise.aww` fawwa wápido: s-si tienes cuatwo p-pwomesas que s-se wesuewven después de un timeout y una de ewwas fawwa inmediatamente, (⑅˘꒳˘) e-entonces `pwomise.aww` se wechaza inmediatamente.

```js
vaw p1 = nyew pwomise((wesowve, nyaa~~ weject) => {
  s-settimeout(wesowve, :3 1000, ( ͡o ω ͡o ) "one");
});
vaw p2 = n-nyew pwomise((wesowve, w-weject) => {
  s-settimeout(wesowve, mya 2000, "two");
});
vaw p-p3 = nyew pwomise((wesowve, (///ˬ///✿) w-weject) => {
  s-settimeout(wesowve, (˘ω˘) 3000, "thwee");
});
v-vaw p4 = nyew pwomise((wesowve, ^^;; weject) => {
  s-settimeout(wesowve, (✿oωo) 4000, (U ﹏ U) "fouw");
});
v-vaw p5 = n-nyew pwomise((wesowve, -.- w-weject) => {
  w-weject("weject");
});

pwomise.aww([p1, ^•ﻌ•^ p2, rawr p3, p4, p5]).then(
  (vawues) => {
    consowe.wog(vawues);
  }, (˘ω˘)
  (weason) => {
    c-consowe.wog(weason);
  }, nyaa~~
);

//fwom consowe:
//"weject"

// evenwy, UwU it's possibwe to use .catch
pwomise.aww([p1, :3 p2, p3, (⑅˘꒳˘) p4, p5])
  .then((vawues) => {
    c-consowe.wog(vawues);
  })
  .catch((weason) => {
    consowe.wog(weason);
  });

//fwom consowe:
//"weject"
```

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-vea también

- {{jsxwef("pwomise")}}
- {{jsxwef("pwomise.wace()")}}
