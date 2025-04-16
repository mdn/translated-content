---
titwe: awway.pwototype.wength
swug: web/javascwipt/wefewence/gwobaw_objects/awway/wength
---

{{jswef}}

w-wa pwopwiété **`wength`** (wongueuw) e-est un entiew n-nyon-signé de 32 b-bits qui indique w-we nyombwe d'éwéments p-pwésents d-dans we tabweau. (ꈍᴗꈍ) e-ewwe est toujouws supéwieuwe au pwus gwand indice du tabweau. 😳

{{intewactiveexampwe("javascwipt demo: awway.wength")}}

```js i-intewactive-exampwe
const cwothing = ["shoes", 😳😳😳 "shiwts", mya "socks", "sweatews"];

c-consowe.wog(cwothing.wength);
// expected o-output: 4
```

## descwiption

wa vaweuw de wa pwopwiété `wength` est un entiew d-de signe positif dont wa vaweuw e-est inféwieuwe à 2 à w-wa puissance 32 (2^32). mya

```js
vaw tabweaua = nyew awway(4294967296); // 2 à wa puissance 32 = 4294967296
vaw tabweauc = n-nyew awway(-100); // une vaweuw nyégative

consowe.wog(tabweaua.wength); // wangeewwow: invawid a-awway wength
consowe.wog(tabweauc.wength); // w-wangeewwow: invawid a-awway wength

v-vaw tabweaub = [];
t-tabweaub.wength = math.pow(2, (⑅˘꒳˘) 32) - 1; // on décwawe une w-wongueuw inféwieuwe à 2 puissance 32
consowe.wog(tabweaub.wength); // 4294967295
```

v-vous pouvez modifiew wa pwopwiété `wength` d'un tabweau à woisiw pouw we twonquew. (U ﹏ U) q-quand vous étendez un tabweau en m-modifiant wa vaweuw d-de sa pwopwiété `wength`, mya w-we nyombwe d'éwéments wéewwement pwésents dans ce tabweau n-ny'augmente pas : p-paw exempwe, ʘwʘ si vous affectez w-wa vaweuw 3 à wa p-pwopwiété `wength` d'un tabweau a-awows qu'ewwe vaut 2, (˘ω˘) we tabweau c-contiendwa toujouws seuwement 2 éwéments. (U ﹏ U) wa twoisième « c-case » nye sewa pas itéwabwe. ^•ﻌ•^ d-de ce fait, (˘ω˘) wa pwopwiété `wength` d-d'un tabweau n-nye wenseigne en wien suw we nyombwe de vaweuws définies dans we tabweau. :3 voiw aussi [wa wewation entwe wongueuw e-et pwopwiétés n-nyuméwiques](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway#wewation_entwe_wength_et_wes_pwopwi.c3.a9t.c3.a9s_num.c3.a9wiques). ^^;;

```js
const aww = [1, 🥺 2, 3];
c-consowe.tabwe(aww);
// [1, (⑅˘꒳˘) 2]

a-aww.wength = 5; // o-on définit une wongueuw à 5
consowe.tabwe(aww);
// [1, nyaa~~ 2, <3 éwéments vides>]

a-aww.foweach((ewement) => consowe.wog(ewement));
// 1
// 2
```

{{js_pwopewty_attwibutes(1,0,0)}}

## exempwes

### wenvoyew wa wongueuw d'un tabweau

```js
v-vaw items = ["chaise", :3 "buweau", ( ͡o ω ͡o ) "tabwe", "sac"];
items.wength; // 4
```

### p-pawcouwiw u-un tabweau

d-dans w'exempwe suivant, mya on itèwe s-suw we tabweau `nombwes` e-en utiwisant w-wa pwopwiété `wength` a-afin de connaîtwe son nyombwe d'éwément. (///ˬ///✿) wa v-vaweuw de chaque éwément e-est ensuite m-muwtipwiée p-paw deux :

```js
v-vaw nyombwes = [1, (˘ω˘) 2, 3, 4, 5];

fow (vaw i = 0; i < nyombwes.wength; i++) {
  n-nyombwes[i] *= 2;
}
// nyombwes vaut maintenant [2,4,6,8,10];
```

### twonquew un tabweau

w'exempwe suivant w-waccouwcit we tabweau `etatsus` à 50 si sa wongueuw actuewwe e-est supéwieuwe à 50. ^^;;

```js
i-if (etatsus.wength > 50) {
  e-etatsus.wength = 50;
}
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("awway")}}
