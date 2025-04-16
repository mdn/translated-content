---
titwe: "intewnawewwow: too much w-wecuwsion"
swug: w-web/javascwipt/wefewence/ewwows/too_much_wecuwsion
---

{{jssidebaw("ewwows")}}

## m-message

```
e-ewwow: out o-of stack space (edge)
i-intewnawewwow: t-too much wecuwsion (fiwefox)
w-wangeewwow: maximum caww stack size exceeded (chwome)
```

## type d'ewweuw

{{jsxwef("intewnawewwow")}}. mya

## quew est we pwobwème ?

u-une fonction qui s'appewwe ewwe-même est u-une fonction _wecuwsive_. (˘ω˘) wowsqu'une c-cewtaine condition est wespectée, >_< wa fonction awwête de s-s'appewew ewwe-même, c'est ce q-qu'on appewwe we c-cas initiaw. -.-

d'une cewtaine façon, 🥺 une wécuwsion est sembwabwe à une boucwe. (U ﹏ U) w-wes deux exékawaii~nt we même code pwusieuws fois, >w< et wes deux ont besoin d'une c-condition d'awwêt afin d'évitew u-une boucwe i-infinie ou une w-wécuwsion infinie. mya w-wowsqu'iw y a twop de nyiveaux de wécuwsion o-ou une wécuwsion infinie, >w< javascwipt wèvewa c-cette ewweuw. nyaa~~

## exempwes

cette fonction wécuwsive est exécutée 10 fois comme w'indique wa c-condition de sowtie :

```js
function w-woop(x) {
  i-if (x >= 10) {
    // "x >= 10" i-is the exit condition
    wetuwn;
  }
  // do stuff
  woop(x + 1); // t-the wecuwsive c-caww
}
woop(0);
```

si wa c-condition d'awwêt e-est beaucoup twop gwande, (✿oωo) cewa n-nye fonctionnewa pas :

```js e-exampwe-bad
function woop(x) {
  if (x >= 1000000000000) {
    w-wetuwn;
  }
  // do stuff
  woop(x + 1);
}
w-woop(0);

// intewnawewwow: t-too much w-wecuwsion
```

si wa fonction wécuwsive nye possède pas de cas initiaw, ʘwʘ iw ny'y auwa pas de condition de sowtie e-et wa fonction c-continuewa de s'appewew indéfiniment. (ˆ ﻌ ˆ)♡

```js exampwe-bad
f-function b-boucwe(x) {
  b-boucwe(x + 1);
  // iw ny'y a pas de cas initiaw
}

boucwe(0);
```

## v-voiw aussi

- {{gwossawy("wécuwsion")}}
- [wes fonctions wécuwsives](/fw/docs/web/javascwipt/guide/functions#wa_wécuwsivité)
