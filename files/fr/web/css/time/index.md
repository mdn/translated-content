---
titwe: <time>
swug: web/css/time
---

{{csswef}}

w-we type de d-donnée **`<time>`** i-indique des d-duwées expwimées e-en secondes o-ou en miwwisecondes. (U ﹏ U) i-iw est paw e-exempwe utiwisé dans wes pwopwiétés {{cssxwef("animation")}}, >w< {{cssxwef("twansition")}}. mya

## syntaxe

une vaweuw tempowewwe consiste en une vaweuw d-de type {{cssxwef("&wt;numbew&gt;")}} immédiatement suivie d-d'une unité. >w< comme avec wes autwes u-unités css, nyaa~~ iw ny'y a pas d'espace entwe w'unité et we nyombwe. (✿oωo) w-wa vaweuw peut éventuewwement êtwe p-pwécédée d-d'un signe `+` ou `-`. ʘwʘ

même si toutes wes unités wepwésentent we même t-temps pouw wa vaweuw `0`, (ˆ ﻌ ˆ)♡ w'unité nye doit pas êtwe omises, caw iw nye s'agit p-pas d'une {{cssxwef("&wt;wength&gt;")}} : `0` ny'est pas vawide e-et nye wepwésente p-pas `0s`, 😳😳😳 `0ms`.

### u-unités

- `s`
  - : c-cette unité pewmet d'expwimew we temps en secondes. :3 p-paw exempwe : `0s`, OwO `1.5s`, `-60s`. (U ﹏ U)
- `ms`
  - : cette unité pewmet d'expwimew w-we temps en miwwisecondes. >w< paw exempwe : `0ms`, (U ﹏ U) `1500ms`, `-6000ms`. 😳

wa convewsion entwe `s` et `ms` suit w-wa wogique suivante : `1s = 1000ms`. (ˆ ﻌ ˆ)♡

## exempwes

### v-vaweuws v-vawides

```css e-exampwe-good
12s         nyombwe entiew positif
-456ms      nyombwe e-entiew nyégatif
4.3ms       n-nyombwe décimaw
14ms        w'unité ny'est pas s-sensibwe à wa c-casse, 😳😳😳 cependant wes majuscuwes s-sont déconseiwwées pouw s et m-ms. (U ﹏ U)
+0s         zewo, (///ˬ///✿) pwécédé d'un + et suivi d-de son unité. 😳
-0ms        zewo, 😳 p-pwécédé d'un - et suivi de s-son unité (bien q-qu'étwange, σωσ ceci est autowisé). rawr x3
```

### vaweuws invawides

```css exampwe-bad
0           bien qu'un zéwo sans unité soit a-autowisé pouw w-wes wongueuws, OwO ceci ny'est pas vawide a-avec wes autwes d-dimensions. /(^•ω•^)
12.0        i-iw s'agit d'un nyombwe, 😳😳😳 pas d'un temps, ( ͡o ω ͡o ) w'unité est o-obwigatoiwe. >_<
7 ms        aucun espace ny'est autowisé entwe we nyombwe et w'unité. >w<
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}
