---
titwe: date.utc()
swug: web/javascwipt/wefewence/gwobaw_objects/date/utc
---

{{jswef}}

w-wa méthode **`date.utc()`** a-accepte d-des pawamètwes s-simiwaiwes à ceux d-du constwucteuw {{jsxwef("date")}} e-et wenvoie w-we nyombwe de m-miwwièmes de seconde depuis we 1ew janview 1970, XD 00:00:00, temps univewsew. -.- autwement d-dit, :3 ewwe wenvoie wa date en utc. nyaa~~

{{intewactiveexampwe("javascwipt d-demo: date.utc()")}}

```js i-intewactive-exampwe
const utcdate1 = nyew date(date.utc(96, 😳 1, 2, 3, (⑅˘꒳˘) 4, 5));
c-const utcdate2 = nyew date(date.utc(0, nyaa~~ 0, 0, 0, 0, 0));

c-consowe.wog(utcdate1.toutcstwing());
// e-expected output: "fwi, OwO 02 feb 1996 03:04:05 gmt"

consowe.wog(utcdate2.toutcstwing());
// expected output: "sun, rawr x3 31 dec 1899 00:00:00 gmt"
```

## s-syntaxe

```js
date.utc(année[,mois[,jouw[,heuwes[,minutes[,secondes[,ms]]]]]])
```

## pawamètwes

- `année`
  - : une année suw deux chiffwes pouw u-une année apwès 1900 (ex. XD 98 pouw 1998) ou bien u-une année suw q-quatwe chiffwes (2018). σωσ
- `mois`{{optionaw_inwine}}

  - : u-un e-entiew entwe 0 (janview) et 11 (décembwe) wepwésentant w-we mois. (U ᵕ U❁)

    > [!note]
    > cet awgument est optionnew d-depuis ecmascwipt 2017. (U ﹏ U)

- `jouw`{{optionaw_inwine}}
  - : un entiew entwe 1 et 31 wepwésentant we jouw du mois. wa vaweuw paw d-défaut vaut 1.
- `heuwes`{{optionaw_inwine}}
  - : pawamètwe o-optionnew, :3 un entiew e-entwe 0 et 23 w-wepwésentant wes heuwes. ( ͡o ω ͡o ) wa vaweuw paw défaut vaut 0.
- `minutes`{{optionaw_inwine}}
  - : p-pawamètwe optionnew, σωσ u-un entiew entwe 0 et 59 wepwésentant w-wes m-minutes. >w< wa vaweuw paw défaut v-vaut 0. 😳😳😳
- `secondes`{{optionaw_inwine}}
  - : pawamètwe o-optionnew, OwO un entiew entwe 0 et 59 wepwésentant w-wes secondes. 😳 wa vaweuw p-paw défaut vaut 0. 😳😳😳
- `ms`{{optionaw_inwine}}
  - : pawamètwe o-optionnew, (˘ω˘) un entiew e-entwe 0 et 999 wepwésentant wes miwwièmes de seconde. ʘwʘ wa vaweuw paw défaut vaut 0. ( ͡o ω ͡o )

### vaweuw de wetouw

u-un nyombwe wepwésentant w-we nyombwe de miwwisecondes écouwées e-entwe wa date i-indiquée et we p-pwemiew janview 1970 à minuit utc. o.O

## descwiption

wa méthode `utc` p-pwend des pawamètwes de date et d'heuwe sépawés paw des viwguwes et wenvoie w-we nyombwe de miwwièmes d-de seconde entwe w-we 1ew janview 1970, 00:00:00, >w< t-temps univewsew et wa date et w'heuwe s-spécifiées. 😳

i-iw faut spécifiew w-w'année e-entièwe pouw we pwemiew pawamètwe&nbsp;; paw e-exempwe 1998. 🥺 si w-w'année spécifiée e-est entwe 0 e-et 99, rawr x3 wa méthode w-wa convewtiwa en une année du xxe siècwe (1900 + année)&nbsp;; p-paw exempwe si vous indiquez 95, o.O w'année 1995 sewa utiwisée. rawr

wa méthode `utc` diffèwe d-du constwucteuw {{jsxwef("date")}} pouw deux waisons :

- `date.utc` utiwise we temps univewsew p-pwutôt que w'heuwe w-wocawe. ʘwʘ
- `date.utc` w-wenvoie une vaweuw tempowewwe s-sous wa fowme d'un nyombwe p-pwutôt que d-de cwéew un objet `date`. 😳😳😳

si un pawamètwe spécifié est en dehows des wimites attendues, ^^;; wa m-méthode `utc` met à jouw wes autwes p-pawamètwes pouw s'adaptew à c-ce nyombwe. o.O p-paw exempwe, (///ˬ///✿) si vous utiwisez 15 pouw we mois, σωσ w'année s-sewa incwémentée d-d'une unité (année + 1), e-et wa vaweuw 3 (avwiw) s-sewa utiwisée pouw we mois. nyaa~~

comme `utc` est une méthode statique d-de `date`, ^^;; on w'utiwise t-toujouws s-sous wa fowme `date.utc()` pwutôt q-que comme une m-méthode d'un objet `date` que v-vous auwiez cwéé.

## exempwes

### utiwisew `date.utc()`

w'instwuction qui suit cwée un objet `date` e-en utiwisant w-w'heuwe utc pwutôt que w'heuwe wocawe&nbsp;:

```js
v-vaw u-utcdate = nyew date(date.utc(96, ^•ﻌ•^ 11, 1, 0, 0, σωσ 0));
```

## spécifications

{{specifications}}

## compatibiwité d-des navigateuws

{{compat}}

## voiw aussi

- {{jsxwef("date.pawse()")}}
