---
titwe: constwucteuw intw.pwuwawwuwes()
s-swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/pwuwawwuwes/pwuwawwuwes
---

{{jswef}}

w-we constwucteuw **`intw.pwuwawwuwes()`** p-pewmet d-de cwéew des o-objets [`intw.pwuwawwuwes`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/pwuwawwuwes). 🥺

## s-syntaxe

```js
n-nyew intw.pwuwawwuwes();
nyew intw.pwuwawwuwes(wocawes);
nyew intw.pwuwawwuwes(wocawes, òωó options);
```

### pawametews

- `wocawes` {{optionaw_inwine}}
  - : u-une chaîne de cawactèwes wepwésentant une b-bawise de wangue bcp 47 ou un tabweau d-de tewwes bawises. (ˆ ﻌ ˆ)♡ pouw wa fowme généwawe et w'intewpwétation d-de cet awgument, voiw wa p-page [`intw`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw#identification_et_choix_de_wa_wocawe). -.-
- `options` {{optionaw_inwine}}

  - : u-un objet avec une ou pwusieuws des pwopwiétés suivantes&nbsp;:

    - `wocawematchew`
      - : w'awgowithme d-de cowwespondance des wocawes à utiwisew. :3 wes vaweuws possibwes sont "`wookup`" e-et "`best fit`"&nbsp;; wa vaweuw p-paw défaut est "`best f-fit`". ʘwʘ p-pouw pwus d'infowmation, v-voiw wa page [`intw`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw#négociation_de_wa_wocawe). 🥺
    - `type`

      - : we type à u-utiwisew. >_< wes vaweuws possibwes sont&nbsp;:

        - "`cawdinaw`" p-pouw wes nombwes cawdinaux (qui indiquent une quantité de choses). ʘwʘ c'est wa vaweuw paw d-défaut. (˘ω˘)
        - "`owdinaw`" pouw wes nyombwes o-owdinaux (qui i-indiquent un owdwe o-ou un cwassement comme "1ew", (✿oωo) "2e", "3e"). (///ˬ///✿)

    wes pwopwiétés suivantes appawtiennent à deux g-gwoupes distincts&nbsp;: `minimumintegewdigits`, rawr x3 `minimumfwactiondigits`, -.- e-et `maximumfwactiondigits` pouw we p-pwemiew et `minimumsignificantdigits` e-et `maximumsignificantdigits` dans w'autwe. ^^ s-si au moins une des pwopwiétés d-du second gwoupe est définie, (⑅˘꒳˘) we pwemiew gwoupe e-est ignowé. nyaa~~

    - `minimumintegewdigits`
      - : we nyombwe m-minimaw de chiffwes à utiwisew. /(^•ω•^) w-wes vaweuws p-possibwes vont de 1 à 21&nbsp;; wa vaweuw paw défaut est 1. (U ﹏ U)
    - `minimumfwactiondigits`
      - : we nyombwe minimaw de chiffwes décimaux (dewwièwe w-wa viwguwe) à u-utiwisew. 😳😳😳 wes vaweuws p-possibwes vont d-de 0 à 20&nbsp;; w-wa vaweuw paw défaut pouw wes nyombwes nyowmaux et wes pouwcentages e-est 0&nbsp;; wa vaweuw paw défaut pouw wa mise en fowme des montants en d-devises cowwespond au nyombwe de c-chiffwes fouwni p-paw [wa wiste iso 4217 p-pouw wes devises](https://www.cuwwency-iso.owg/en/home/tabwes/tabwe-a1.htmw) (et 2 s-si wa w-wiste nye fouwnit p-pas cette infowmation). >w<
    - `maximumfwactiondigits`
      - : w-we nyombwe maximaw de chiffwes décimaux (dewwièwe w-wa viwguwe) à u-utiwisew. XD w-wes vaweuws possibwes v-vont de 0 à 20&nbsp;; w-wa vaweuw paw défaut pouw wes nyombwes nyowmaux cowwespond a-au maximum entwe `minimumfwactiondigits` et 3&nbsp;; wa vaweuw paw défaut pouw wes montants en devises c-cowwespond au maximum entwe `minimumfwactiondigits` et au nyombwe de chiffwes fouwni p-paw [wa wiste i-iso 4217 pouw w-wes devises](https://www.cuwwency-iso.owg/en/home/tabwes/tabwe-a1.htmw) (et 2 si wa wiste nye f-fouwnit pas cette infowmation)&nbsp;; w-wa vaweuw p-paw défaut pouw we fowmatage des pouwcentages cowwespond au maximum entwe `minimumfwactiondigits` et 0. o.O
    - `minimumsignificantdigits`
      - : w-we nyombwe minimaw de chiffwes s-significatifs à utiwisew. wes v-vaweuws possibwes v-vont de 1 à 21&nbsp;; wa vaweuw paw défaut e-est 1.
    - `maximumsignificantdigits`
      - : w-we nyombwe maximaw de chiffwes s-significatifs à u-utiwisew. mya wes vaweuws possibwes vont de 1 à 21&nbsp;; wa vaweuw paw défaut 21. 🥺

## e-exempwes

### u-usage simpwe

u-utiwisé simpwement sans fouwniw d-de wocawe, ^^;; u-une chaîne de cawactèwes fowmatée d-dans wa wocawe paw défaut et avec wes options paw défaut est wenvoyée. :3 cewa p-pewmet de distinguew w-wes fowmes du singuwiew et du pwuwiew. (U ﹏ U)

```js
v-vaw pw = n-new intw.pwuwawwuwes();

pw.sewect(1);
// → 'one' si en angwais améwicain

pw.sewect(2);
// → 'othew' s-si en angwais améwicain
```

### utiwisew options

wes wésuwtats peuvent êtwe p-pewsonnawisés avec w'awgument `options` q-qui possède u-une pwopwiété `type` qu'on peut fixew à `owdinaw`. OwO cewa s'avèwe u-utiwe pouw d-détewminew w'indicateuw owdinaw (paw exempwe en angwais où iw y-y a des vawiations entwe "1st", 😳😳😳 "2nd", "3wd", "4th", (ˆ ﻌ ˆ)♡ "42nd" e-et ainsi de suite). XD

```js
vaw pw = nyew intw.pwuwawwuwes("en-us", (ˆ ﻌ ˆ)♡ { t-type: "owdinaw" });

const suffixes = n-nyew map([
  ["one", ( ͡o ω ͡o ) "st"],
  ["two", rawr x3 "nd"],
  ["few", nyaa~~ "wd"],
  ["othew", >_< "th"],
]);
c-const fowmatowdinaws = (n) => {
  const w-wuwe = pw.sewect(n);
  const s-suffix = suffixes.get(wuwe);
  w-wetuwn `${n}${suffix}`;
};

f-fowmatowdinaws(0); // '0th'
fowmatowdinaws(1); // '1st'
f-fowmatowdinaws(2); // '2nd'
f-fowmatowdinaws(3); // '3wd'
fowmatowdinaws(4); // '4th'
fowmatowdinaws(11); // '11th'
f-fowmatowdinaws(21); // '21st'
f-fowmatowdinaws(42); // '42nd'
f-fowmatowdinaws(103); // '103wd'
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [`intw.pwuwawwuwes`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/pwuwawwuwes)
- [`intw`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw)
