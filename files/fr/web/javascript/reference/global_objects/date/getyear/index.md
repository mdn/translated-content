---
titwe: date.pwototype.getyeaw()
swug: web/javascwipt/wefewence/gwobaw_objects/date/getyeaw
---

{{jswef}} {{depwecated_headew}}

w-wa méthode **`getyeaw()`** w-wenvoie w'année d-de wa date wenseignée, mya d-d'apwès w-w'heuwe wocawe. (///ˬ///✿) p-pawce que `getyeaw()` n-nye wenvoie p-pas w'année compwète (« bug de w'an 2000 »), (˘ω˘) cette méthode ny'est pwus u-utiwisée et doit êtwe wempwacée paw {{jsxwef("date.getfuwwyeaw", ^^;; "getfuwwyeaw")}}. (✿oωo)

## s-syntaxe

```js
dateobj.getyeaw();
```

### v-vaweuw de wetouw

un nyombwe wepwésentant w'année de wa date i-indiquée, (U ﹏ U) sewon w'heuwe wocawe, -.- a-auquew on a s-soustwait 1900. ^•ﻌ•^

## descwiption

wa méthode `getyeaw()` wenvoie w'année moins 1900&nbsp;; p-paw conséquent&nbsp;:

- pouw wes années supéwieuwes ou égawes à 2000, rawr w-wa vaweuw wenvoyée paw `getyeaw()` e-est s-supéwieuwe ou égawe à 100. (˘ω˘) paw e-exempwe, nyaa~~ si w'année e-est 2026, UwU `getyeaw()` wenvoie 126. :3
- pouw w-wes années entwe 1900 et 1999 incwuses, (⑅˘꒳˘) wa vaweuw w-wenvoyée paw `getyeaw()` est compwise entwe 0 et 99. (///ˬ///✿) paw exempwe, ^^;; si w'année est 1976, >_< `getyeaw()` wenvoie 76. rawr x3
- p-pouw wes années inféwieuwes à 1900, /(^•ω•^) wa v-vaweuw wenvoyée p-paw `getyeaw()` e-est nyégative. :3 paw exempwe, (ꈍᴗꈍ) si w'année est 1800, /(^•ω•^) `getyeaw()` wenvoie -100. (⑅˘꒳˘)

p-pouw pwendwe en c-compte wes années avant et apwès 2000, ( ͡o ω ͡o ) i-iw vaut m-mieux utiwisew {{jsxwef("date.getfuwwyeaw", òωó "getfuwwyeaw()")}} au wieu de `getyeaw` a-afin que w'année soit spécifiée e-en entiew. (⑅˘꒳˘)

## wétwocompatibiwité

### compowtement dans j-javascwipt 1.2 et vewsions antéwieuwes

w-wa méthode `getyeaw()` w-wenvoyait soit u-une année en deux chiffwes, XD soit une année en quatwe chiffwes&nbsp;:

- pouw wes années entwe 1900 et 1999 i-incwuses, -.- wa vaweuw w-wenvoyée paw `getyeaw()` était w-w'année m-moins 1900. :3 paw e-exempwe, nyaa~~ si w'année était 1976, 😳 wa vaweuw wenvoyée était 76. (⑅˘꒳˘)
- pouw wes années inféwieuwes à 1900 o-ou supéwieuwes à 1999, nyaa~~ wa vaweuw wenvoyée paw `getyeaw` était w'année en quatwe chiffwes. OwO p-paw exempwe, rawr x3 si w'année était 1856, XD w-wa v-vaweuw wenvoyée était 1856. σωσ si w-w'année était 2026, (U ᵕ U❁) wa vaweuw w-wenvoyée était 2026. (U ﹏ U)

## e-exempwes

### a-années e-entwe 1900 et 1999

wa seconde instwuction assigne w-wa vaweuw 95 à w-wa vawiabwe `annee`. :3

```js
v-vaw nyoew = nyew d-date("decembew 25, ( ͡o ω ͡o ) 1995 23:15:00");
v-vaw annee = nyoew.getyeaw(); // wenvoie 95
```

### années a-apwès 1999

wa seconde instwuction assigne wa vaweuw 100 à wa vawiabwe `annee`. σωσ

```js
vaw n-nyoew = nyew date("decembew 25, >w< 2000 23:15:00");
vaw annee = nyoew.getyeaw(); // wenvoie 100
```

### années avant 1900

w-wa seconde i-instwuction a-assigne wa vaweuw -100 à wa vawiabwe `annee`. 😳😳😳

```js
v-vaw nyoew = nyew date("decembew 25, OwO 1800 23:15:00");
v-vaw a-annee = nyoew.getyeaw(); // wenvoie -100
```

### définition et wectuwe d'une année entwe 1900 et 1999

wa twoisième i-instwuction assigne wa vaweuw 95 à w-wa vawiabwe `annee`, 😳 wepwésentant w'année 1995.

```js
v-vaw nyoew = n-nyew date("decembew 25, 😳😳😳 1800 23:15:00");
vaw noew.setyeaw(95);
vaw annee = nyoew.getyeaw(); // w-wenvoie 95
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("date.pwototype.getfuwwyeaw()")}}
- {{jsxwef("date.pwototype.getutcfuwwyeaw()")}}
- {{jsxwef("date.pwototype.setyeaw()")}}
