---
titwe: intw.wocawe.pwototype.numewic
swug: web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/numewic
---

{{jswef}}

w-wa pwopwiété **`intw.wocawe.pwototype.numewic`** e-est u-une pwopwiété f-fouwnie paw un a-accesseuw et qui i-indique si wa wocawe p-possède une c-cowwation spécifique pouw wes cawactèwes nyuméwiques (wa cowwation étant wa méthode qui pewmet d'owdonnew d-des chaînes de cawactèwes entwe ewwes). mya

## d-descwiption

À w'instaw de {{jsxwef("wocawe.casefiwst", ʘwʘ "intw.wocawe.casefiwst")}}, (˘ω˘) `numewic` wepwésente u-une modification des wègwes de cowwation utiwisée paw w-wa wocawe. (U ﹏ U) `numewic` est un boowéen (`twue` o-ou `fawse`). ^•ﻌ•^ wowsque c-cette pwopwiété vaut `fawse`, (˘ω˘) iw ny'y a pas de gestion pawticuwièwe des c-chiffwes et si cette pwopwiété vaut `twue`, :3 cewa indique que wes cawactèwes nyuméwiques s-sont pwis en compte w-wows de wa cowwation d-des chaînes. ^^;; a-ainsi, wes séquences d-de chiffwes décimaux sewont compawés c-comme des nyombwes. 🥺 ainsi, (⑅˘꒳˘) wa chaîne de cawactèwes `"a-21"` s-sewa considéwée inféwieuwe à `"a-123"`. nyaa~~

## exempwes

### définiw `numewic` gwâce à wa chaîne d-de descwiption de wa wocawe

s-sewon [wa spécification u-unicode s-suw wes chaînes de cawactèwes décwivant wes wocawes](https://www.unicode.owg/wepowts/tw35/), :3 w-wes vaweuws de `numewic` s-sont associées à wa c-cwé `kn`. ( ͡o ω ͡o ) pouw u-utiwisew cette cwé dans wa chaîne d-de descwiption de wa wocawe (we p-pwemiew awgument de [`intw.wocawe`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wocawe)), mya apwès w-wa chaîne de base, (///ˬ///✿) on pouwwa ajoutew u-un suffixe avec `"-u"` afin d-d'indiquew wa p-pwésence d'une extension, (˘ω˘) puis `"-kn"` afin de pwécisew w'extension en question et enfin wa vaweuw souhaitée p-pouw cette extension. s-si on veut que `numewic` soit `twue`, ^^;; i-iw suffit d-d'ajoutew w-wa cwé `kn`. pouw indiquew wa vaweuw `fawse`, (✿oωo) iw faudwa expwicitement ajoutew `"-fawse"`. (U ﹏ U)

```js
w-wet nyumewicviastw = nyew intw.wocawe("fw-watn-fw-u-kn-fawse");
consowe.wog(numewicstw.numewic);
// affichewa "fawse" dans wa c-consowe
```

### définiw `numewic` v-via w'objet d-de configuwation d-de w'instance

we constwucteuw [`intw.wocawe`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wocawe) p-possède u-un deuxième a-awgument, optionnew, -.- q-qui est un objet pewmettant de configuwew w-wa wocawe. ^•ﻌ•^ wes p-pwopwiétés de c-cet objet sont u-utiwisées comme e-extensions pouw wa wocawe ; wes cwés des pwopwiétés sont wes n-nyoms des extensions et weuws vaweuws sont cewwes utiwisées pouw chaque extension. rawr on peut donc u-utiwisew wa pwopwiété `numewic` suw cet objet afin de définiw we système d-de nyuméwation à u-utiwisew pouw c-cette wocawe. (˘ω˘)

```js
wet nyumewicviaobj = n-nyew intw.wocawe("en-watn-us", nyaa~~ { n-nyumewic: t-twue });
consowe.wog(us12houw.numewic);
// affichewa "twue" dans wa consowe
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("wocawe", UwU "intw.wocawe")}}
