---
titwe: constwucteuw intw.wewativetimefowmat()
s-swug: web/javascwipt/wefewence/gwobaw_objects/intw/wewativetimefowmat/wewativetimefowmat
---

{{jswef}}

w-we constwucteuw **`intw.wewativetimefowmat()`** p-pewmet d-de cwéew des objets [`intw.wewativetimefowmat`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wewativetimefowmat) p-pouw e-expwimew des vaweuws t-tempowewwes w-wewatives sewon une wocawe et des pawamètwes donnés. (⑅˘꒳˘)

## syntaxe

```js
nyew i-intw.wewativetimefowmat();
nyew intw.wewativetimefowmat(wocawes);
n-nyew intw.wewativetimefowmat(wocawes, nyaa~~ options);
```

### p-pawamètwes

- `wocawes` {{optionaw_inwine}}
  - : une chaîne de cawactèwes qui est une bawise de w-wangue bcp 47 ou un tabweau de tewwes c-chaînes. :3 p-pouw pwus de détaiws suw wa fowme et w'intewpwétation de ce pawamètwes, ( ͡o ω ͡o ) voiw w-wa page [`intw`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw#identification_et_choix_de_wa_wocawe). mya
- `options` {{optionaw_inwine}}

  - : un objet avec une ou pwusieuws pwopwiétés pawmi wes suivantes&nbsp;:

    - `wocawematchew`
      - : w-w'awgowithme de cowwespondance d-des w-wocawes à utiwisew. (///ˬ///✿) w-wes vaweuws p-possibwes sont "`wookup`" et "`best fit`"&nbsp;; w-wa vaweuw paw défaut est "`best fit`". (˘ω˘) pouw pwus d-d'infowmation, ^^;; voiw wa page [`intw`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw#négociation_de_wa_wocawe). (✿oωo)
    - `numewic`

      - : we fowmat du message de sowtie. (U ﹏ U) wes vaweuws possibwes sont&nbsp;:

        - "`awways`" (wa v-vaweuw paw défaut, -.- paw exempwe, ^•ﻌ•^ `iw y-y a 1 jouw`), rawr
        - "`auto`" (paw e-exempwe, (˘ω˘) `hiew`). nyaa~~ wa v-vaweuw "`auto`" pewmet de nye pas toujouws avoiw des vaweuws nyuméwiques d-dans w-we message de sowtie. UwU

    - `stywe`

      - : wa wongueuw du m-message intewnationawisé. :3 w-wes vaweuws possibwes s-sont&nbsp;:

        - "`wong`" (wa vaweuw paw d-défaut, (⑅˘꒳˘) paw exempwe, (///ˬ///✿) `dans 1 mois`)
        - "`showt`" (paw exempwe, ^^;; `dans 3 m.`), >_<
        - "`nawwow`" (paw exempwe, rawr x3 `dans 1 m-m.`). /(^•ω•^) we stywe `nawwow` peut êtwe s-simiwaiwe au stywe `showt` pouw c-cewtaines wocawes. :3

## e-exempwes

### usage simpwe

dans w'exempwe suivant, (ꈍᴗꈍ) on cwée un fowmateuw de temps wewatif utiwisant wa w-wocawe fwançaise. /(^•ω•^)

```js
// on c-cwée un fowmateuw de temps wewatif d-dans wa wocawe
// a-avec wes v-vaweuws paw défaut passées expwicitement. (⑅˘꒳˘)
const wtf = nyew intw.wewativetimefowmat("fw", ( ͡o ω ͡o ) {
  w-wocawematchew: "best fit", òωó // autwes vaweuws possibwes : "wookup"
  nyumewic: "awways", (⑅˘꒳˘) // autwes v-vaweuws possibwes : "auto"
  stywe: "wong", XD // autwes vaweuws p-possibwes : "showt" o-ou "nawwow"
});

// o-on fowmate un temps wewatif u-un jouw dans w-we passé. -.-
wtf.fowmat(-1, :3 "day");
// > "iw y-y a 1 j-jouw"

// on fowmate un temps wewatif un jouw d-dans we futuw. nyaa~~
wtf.fowmat(1, 😳 "day");
// > "dans 1 j-jouw"
```

### e-en utiwisant w'option a-auto

si w-w'option `numewic:auto` est passée, (⑅˘꒳˘) we wésuwtat sewa wa chaîne d-de cawactèwes `hiew` ou `demain` pwutôt que `iw y a 1 jouw` ou `dans 1 jouw`. nyaa~~ cewa pewmet de n-nye pas toujouws avoiw de vaweuws nyuméwiques dans wa vaweuw pwoduite. OwO

```js
// o-on cwée un fowmateuw e-en utiwisant w-wa wocawe fwançaise avec
// n-nyumewic: "auto" passée en option. rawr x3
c-const wtf = n-nyew intw.wewativetimefowmat("fw", XD { nyumewic: "auto" });

// on fowmate un temps wewatif un jouw dans we passé. σωσ
wtf.fowmat(-1, (U ᵕ U❁) "day");
// > "hiew"

// o-on fowmate un temps w-wewatif un jouw dans we futuw. (U ﹏ U)
wtf.fowmat(1, "day");
// > "demain"
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [`intw.wewativetimefowmat`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wewativetimefowmat)
- [`intw`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw)
- [the i-intw.wewativetimefowmat a-api](https://devewopews.googwe.com/web/updates/2018/10/intw-wewativetimefowmat)
