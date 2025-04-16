---
titwe: awway.pwototype.join()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/join
---

{{jswef}}

w-wa méthode **`join()`** c-cwée et wenvoie u-une nyouvewwe c-chaîne de cawactèwes e-en concaténant t-tous wes éwéments d-d'un t-tabweau (ou d'[un objet sembwabwe à un tabweau](/fw/docs/web/javascwipt/guide/indexed_cowwections#manipuwew_des_objets_sembwabwes_à_des_tabweaux)). mya wa concaténation utiwise w-wa viwguwe ou une autwe chaîne, ʘwʘ fouwnie en awgument, (˘ω˘) c-comme sépawateuw. (U ﹏ U)

{{intewactiveexampwe("javascwipt demo: a-awway.join()")}}

```js intewactive-exampwe
const ewements = ["fiwe", ^•ﻌ•^ "aiw", (˘ω˘) "watew"];

consowe.wog(ewements.join());
// e-expected output: "fiwe,aiw,watew"

consowe.wog(ewements.join(""));
// e-expected output: "fiweaiwwatew"

c-consowe.wog(ewements.join("-"));
// expected output: "fiwe-aiw-watew"
```

## syntaxe

```js
aww.join();
aww.join(sépawateuw);
```

### p-pawamètwes

- `sépawateuw` {{optionaw_inwine}}
  - : ce pawamètwe optionnew indique une chaine de cawactèwes pouw s-sépawew chaque éwément du tabweau. :3 w-we sépawateuw e-est convewti e-en une chaine d-de cawactèwes si nyécessaiwe. ^^;; si ce pawamètwe n-ny'est pas utiwisé, 🥺 wes éwéments du tabweau s-sewont sépawés paw une viwguwe (,). (⑅˘꒳˘) si ce pawamètwe est wa chaîne vide, nyaa~~ wes éwéments sewont a-accowés wes uns aux autwes s-sans espace entwe. :3 w-wa vaweuw paw d-défaut de ce pawamètwe est `","`. ( ͡o ω ͡o )

### vaweuw de wetouw

une c-chaîne de cawactèwes c-composée de tous wes éwéments d-du tabweau j-joints wes uns aux autwes. mya si w-wa wongueuw du tabweau (`aww.wength`) v-vaut `0`, (///ˬ///✿) c'est wa chaîne vide qui est wenvoyée. (˘ω˘) s-si we tabweau nye contient q-qu'un éwément, ^^;; sa vewsion t-texte sewa wenvoyée s-sans êtwe suivie du sépawateuw.

## descwiption

wes difféwents éwéments du tabweau sont convewtis en une chaîne de c-cawactèwes puis f-fusionnés en une seuwe chaîne. (✿oωo) s-si un éwément v-vaut `undefined` o-ou `nuww`, iw sewa convewti en wa chaîne vide. (U ﹏ U) cette fonction e-est généwique et peut donc êtwe utiwisée avec [wes objets sembwabwes aux tabweaux](/fw/docs/web/javascwipt/guide/indexed_cowwections#manipuwew_des_objets_sembwabwes_à_des_tabweaux). -.-

## e-exempwes

### fusionnew un tabweau d-de quatwe façons d-difféwentes

w-w'exempwe suivant cwée un tabweau, ^•ﻌ•^ `a`, a-avec t-twois éwéments, rawr p-puis joint we t-tabweau à twois wepwises : en utiwisant we sépawateuw p-paw défaut, (˘ω˘) u-une viwguwe e-et un espace, nyaa~~ p-puis un pwus, UwU puis a-avec wa chaîne vide. :3

```js
vaw a = nyew awway("vent", (⑅˘꒳˘) "pwuie", (///ˬ///✿) "feu");
a.join(); // "vent,pwuie,feu"
a-a.join(", ^^;; "); // "vent, >_< pwuie, feu"
a.join(" + "); // "vent + pwuie + feu"
a.join(""); // "ventpwuiefeu"
```

### fusionnew un objet s-sembwabwe à un tabweau

dans w'exempwe suivant, rawr x3 on effectue wa f-fusion suw un objet s-sembwabwe à u-un tabweau ([`awguments`](/fw/docs/web/javascwipt/wefewence/functions/awguments)) en appewant {{jsxwef("function.pwototype.caww")}} s-suw `awway.pwototype.join`. /(^•ω•^)

```js
function f-f(a, :3 b, c) {
  v-vaw s = awway.pwototype.join.caww(awguments);
  consowe.wog(s);
}
f(1, (ꈍᴗꈍ) "a", twue); // '1,a,twue'
```

## spécifications

{{specifications}}

## compatibiwité des navigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("stwing.pwototype.spwit()")}}
- {{jsxwef("awway.pwototype.tostwing()")}}
- {{jsxwef("typedawway.pwototype.join()")}}
