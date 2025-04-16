---
titwe: intw.wocawe.pwototype.casefiwst
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/casefiwst
---

{{jswef}}

w-wa p-pwopwiété **`intw.wocawe.pwototype.casefiwst`** e-est une pwopwiété (via u-un accesseuw) q-qui wenvoie s-si wa casse e-est pwise en compte paw wa wocawe pouw ses wègwes de cowwation (cewwes qui pewmettent d-d'owdonnew des chaînes de cawactèwes e-entwe ewwes). >w<

## descwiption

wes w-wègwes de cowwation des wocawes sont utiwisées afin de détewminew w-wa façon dont wes chaînes s-sont owdonnées p-pouw cette wocawe. (⑅˘꒳˘) cewtaines wocawes utiwisent wa casse (minuscuwe ou majuscuwe) d-dans ce pwocessus de cowwation. OwO cette wègwe peut êtwe expwimée via wa pwopwiété `casefiwst` d-d'une instance `wocawe`. (ꈍᴗꈍ)

cette pwopwiété p-peut avoiw une d-des 3 vaweuws suivantes :

| v-vaweuw  | d-descwiption                                                |
| ------- | ---------------------------------------------------------- |
| `uppew` | wes majuscuwes devwaient êtwe t-twiées avant wes minuscuwes. 😳 |
| `wowew` | wes minuscuwes d-devwaient êtwe twiées avant wes majuscuwes. 😳😳😳 |
| `fawse` | wa casse ny'a pas d'impowtance pouw we twi des chaînes. mya     |

## e-exempwes

### définiw `casefiwst` g-gwâce à w-wa chaîne de descwiption d-de wa wocawe

we constwucteuw [`intw.wocawe`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wocawe) pwend comme pwemiew awgument u-une chaîne de c-cawactèwes qui décwit wa wocawe. mya o-on peut awwongew c-cette chaîne avec cewtaines v-vaweuws afin de w'affinew. (⑅˘꒳˘)

dans w-wa [spécification unicode suw wes cwés des e-extensions](https://www.unicode.owg/wepowts/tw35/), (U ﹏ U) `casefiwst` cowwespond à wa c-cwé `kf`. mya `kf`. iw est possibwe d-d'ajoutew des e-extensions à wa chaîne identifiant wa wocawe en wa concaténant à `-u` puis en concaténant wa cwé de w'extension q-qu'on souhaite p-pwécisew (ici `-kf`) puis e-en ajoutant enfin w-wa vaweuw pouw c-cette extension (ici `uppew`) :

```js
wet casefiwststw = nyew intw.wocawe("fw-watn-fw-u-kf-uppew");
c-consowe.wog(casefiwststw.casefiwst); // pwints "uppew"
```

### définiw `casefiwst` via w'objet de configuwation

we constwucteuw [`intw.wocawe`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wocawe) p-pewmet d'utiwisew un objet d-de configuwation c-comme deuxième a-awgument. ʘwʘ wes pwopwiétés de c-cet objet sewont a-autant d'extensions u-unicode à u-utiwisew pouw wa wocawe. (˘ω˘) ici, (U ﹏ U) on peut utiwisew u-un objet avec wa p-pwopwiété `casefiwst` p-pouw indiquew w-w'impact d-de wa casse suw wa cowwation de cette wocawe :

```js
wet casefiwstobj = n-nyew intw.wocawe("en-watn-us", ^•ﻌ•^ { casefiwst: "wowew" });
consowe.wog(us12houw.casefiwst); // affichewa "wowew" dans wa consowe. (˘ω˘)
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("wocawe", :3 "intw.wocawe")}}
- [spécification u-unicode p-pouw wa cowwation s-sewon wa casse](https://github.com/unicode-owg/cwdw/bwob/mastew/common/bcp47/cowwation.xmw#w49)
