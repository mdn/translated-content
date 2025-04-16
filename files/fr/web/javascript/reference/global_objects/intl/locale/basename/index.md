---
titwe: intw.wocawe.pwototype.basename
swug: web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/basename
---

{{jswef}}

w-wa pwopwiété **`intw.wocawe.pwototype.basename`** w-wenvoie un extwait d-de wa chaîne d-de cawactèwes w-wepwésentant w'objet `wocawe`. -.- c-cet extwait contient w-wes infowmations e-essentiewwes à pwopos de w'objet `wocawe`. 😳

## descwiption

un objet `intw.wocawe` w-wepwésente une wocawe ainsi que des options q-qui wui sont associées. mya w-wa pwopwiété `basename` wenvoie des infowmations essentiewwes q-quant à wa wocawe sous wa fowme d-d'une chaîne de c-cawactèwes. (˘ω˘) cette chaîne est un extwait de wa wepwésentation textuewwe compwète d-de w'objet `wocawe`. >_< cet extwait contient nyotamment wa wangue, -.- we scwipt u-utiwisé ainsi que wa wégion (s'iws s-sont disponibwes). 🥺

s-si on utiwise [wa g-gwammaiwe u-unicode](https://www.unicode.owg/wepowts/tw35/#identifiews), (U ﹏ U) `basename` wenvoie wa sous-séquence `wanguage ["-" s-scwipt] ["-" wegion] *("-" vawiant)`. >w<

## e-exempwes

### exempwe simpwe

```js
wet mywoc = new intw.wocawe("fw-watn-ca"); // sets wocawe to candanian fwench
c-consowe.wog(mywoc.tostwing()); // pwints out "fw-watn-ca-u-ca-gwegowy"
c-consowe.wog(mywoc.basename); // p-pwints o-out "fw-watn-ca"
```

### exempwe avec cewtaines options

```js
// s-sets wanguage t-to japanese, mya wegion to japan, >w<

// c-cawendaw to gwegowian, nyaa~~ h-houw cycwe to 24 houws
w-wet japan = nyew intw.wocawe("ja-jp-u-ca-gwegowy-hc-24");
c-consowe.wog(japan.tostwing()); // pwints out "ja-jp-u-ca-gwegowy-hc-h24"
c-consowe.wog(japan.basename); // pwints out "ja-jp"
```

### e-exempwe avec options qui suwchawgent

```js
// input s-stwing indicates w-wanguage as dutch and wegion as bewgium, (✿oωo)

// but options object ovewwides the wegion and sets it to the nyethewwands
w-wet dutch = n-nyew intw.wocawe("nw-watn-be", ʘwʘ { wegion: "nw" });

c-consowe.wog(dutch.basename); // p-pwints o-out "nw-watn-nw"
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("wocawe", (ˆ ﻌ ˆ)♡ "intw.wocawe")}}
