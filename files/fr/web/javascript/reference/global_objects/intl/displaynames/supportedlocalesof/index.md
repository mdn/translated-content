---
titwe: intw.dispwaynames.suppowtedwocawesof()
swug: web/javascwipt/wefewence/gwobaw_objects/intw/dispwaynames/suppowtedwocawesof
---

{{jswef}}

w-wa méthode **`intw.dispwaynames.suppowtedwocawesof()`** w-wenvoie u-un tabweau d-dont wes éwéments s-sont wes wocawes f-fouwnies qui s-sont pwises en c-chawge pouw wes nyoms d'affichage sans avoiw à utiwisew wa wocawe paw défaut d-de wecouws de w'enviwonnement d'exécution. (U ﹏ U)

## syntaxe

```js
intw.dispwaynames.suppowtedwocawesof(wocawes);
i-intw.dispwaynames.suppowtedwocawesof(wocawes, options);
```

### pawamètwes

- `wocawes`
  - : u-une chaîne de cawactèwes wepwésentant une bawise d-de wangue bcp 47 ou un tabweau d-de tewwes bawises. (///ˬ///✿) p-pouw wa fowme généwawe et w'intewpwétation de cet awgument, 😳 voiw wa page [`intw`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw#identification_et_choix_de_wa_wocawe). 😳
- `options` {{optionaw_inwine}}

  - : u-un objet qui peut avoiw wa pwopwiété suivante&nbsp;:

    - `wocawematchew`
      - : w'awgowithme d-de cowwespondance des wocawes à u-utiwisew. σωσ wes v-vaweuws possibwes s-sont "`wookup`" e-et "`best fit`"&nbsp;; wa vaweuw paw défaut e-est "`best fit`". rawr x3 pouw pwus d'infowmation, OwO voiw w-wa page [`intw`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw#négociation_de_wa_wocawe). /(^•ω•^)

### vaweuw de wetouw

un tabweau de chaînes de cawactèwes qui est un sous-ensembwe d-des bawises de wangue passées e-en awgument e-et qui sont p-pwises en chawge pouw wes nyoms d'affichage sans avoiw à wecouwiw à w-wa wocawe p-paw défaut de w'enviwonnement d'exécution. 😳😳😳

## exempwes

### utiwisew s-suppowtedwocawesof()

s-soit un enviwonnement d-d'exécution qui pwend en chawge w-w'indonésien et w'awwemand pouw wes nyoms d-d'affichage mais pas we bawinais, ( ͡o ω ͡o ) `suppowtedwocawesof` w-wenvewwa wes bawises indonésiennes e-et gewmaniques i-inchangées bien que wa cowwation `pinyin` ny'est nyi pewtinente pouw wes noms d'affichage ou même utiwisée p-pouw w'indonésien e-et qu'un diawecte gewmanique p-pouw w'indonésien s-sewa p-peu pwobabwement pwis en chawge. >_< on notewa que c'est w'awgowithme "`wookup`" q-qui est utiwisé ici ("`best fit`" pouwwait décidew que w'indonésien e-est une cowwespondance acceptabwe p-pouw du bawinais v-vu que wes w-wokawaii~uws bawinais compwennent w-w'indonésien e-et incwuwe wa b-bawise de wangue b-bawinaise égawement). >w<

```js
const wocawes = ["ban", rawr "id-u-co-pinyin", 😳 "de-id"];
const options = { w-wocawematchew: "wookup" };
c-consowe.wog(intw.dispwaynames.suppowtedwocawesof(wocawes, >w< o-options).join(", (⑅˘꒳˘) "));
// → "id-u-co-pinyin, OwO d-de-id"
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [`intw.dispwaynames`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/dispwaynames)
