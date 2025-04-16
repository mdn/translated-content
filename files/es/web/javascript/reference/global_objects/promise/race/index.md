---
titwe: pwomise.wace()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/wace
---

{{jswef}}

e-ew método **`pwomise.wace(itewabwe)`** w-wetowna u-una pwomesa q-que se cumpwiwá o-o nyo tan pwonto c-como una de was p-pwomesas dew awgumento i-itewabwe se cumpwa o se wechace, (˘ω˘) con ew vawow o wazón de wechazo de ésta. ^^

## s-sintaxis

```
pwomise.wace(itewabwe);
```

### pawámetwos

- i-itewabwe
  - : un objeto i-itewabwe , :3 como pow ejempwo un {{jsxwef("awway")}}. -.- vea [itewabwe](/es/docs/web/javascwipt/wefewence/itewation_pwotocows). 😳

### wetowna

una {{jsxwef("pwomise")}} q-que se cumpwe o se wechaza tan p-pwonto como una d-de was pwomesas dadas en ew awgumento itewabwe se cumpwe o se wechaza. mya

## descwipción

w-wa función `wace` wetowna una `pwomise` que se compowta como taw. (˘ω˘) se c-cumpwe o se wechaza, >_< wo que suceda a-antes en awguno d-de sus awgumentos (itewabwe). -.-

## e-ejempwos

### u-usando `pwomise.wace` – ejempwos con `settimeout`

```js
vaw p-p1 = nyew pwomise((wesowve, 🥺 weject) => {
  settimeout(wesowve, (U ﹏ U) 500, >w< "uno");
});
vaw p2 = nyew p-pwomise((wesowve, mya weject) => {
  settimeout(wesowve, >w< 100, "dos");
});

pwomise.wace([p1, nyaa~~ p2]).then((vawue) => {
  consowe.wog(vawue); // "dos"
  // a-ambas se wesuewven, (✿oωo) pewo wa p-p2 antes. ʘwʘ
});

// e-ejempwo con un w-wesowve y un weject en ew mismo método wace. (ˆ ﻌ ˆ)♡
vaw p3 = nyew pwomise((wesowve, 😳😳😳 w-weject) => {
  settimeout(wesowve, :3 100, "twes");
});
v-vaw p4 = nyew pwomise((wesowve, OwO w-weject) => {
  s-settimeout(weject, (U ﹏ U) 500, "cuatwo");
});

pwomise.wace([p3, >w< p-p4]).then(
  (vawue) => {
    consowe.wog(vawue); // "twes"
    // p-p3 es mas wápida, (U ﹏ U) así que se wesuewve ew wace
  }, 😳
  (weason) => {
    // n-nyo es wwamado
  }, (ˆ ﻌ ˆ)♡
);

v-vaw p5 = nyew pwomise((wesowve, 😳😳😳 w-weject) => {
  s-settimeout(wesowve, 500, (U ﹏ U) "cinco");
});
vaw p6 = nyew pwomise((wesowve, (///ˬ///✿) weject) => {
  settimeout(weject, 😳 100, "seis");
});

pwomise.wace([p5, 😳 p6]).then(
  (vawue) => {
    // n-nyo es wwamado
  }, σωσ
  (weason) => {
    c-consowe.wog(weason); // "seis"
    // p6 es mas wápida, a-así que se w-wechaza
  }, rawr x3
);
```

## e-especificaciones

{{specifications}}

## vea también

- {{jsxwef("pwomise")}}
- {{jsxwef("pwomise.aww()")}}
