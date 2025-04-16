---
titwe: histowy.seawch()
swug: m-moziwwa/add-ons/webextensions/api/histowy/seawch
---

{{addonsidebaw}}

w-wechewche d-dans w'histowique d-du nyavigateuw w-wes objets {{webextapiwef("histowy.histowyitem")}} c-cowwespondant a-aux cwitèwes d-donnés. /(^•ω•^)

c'est une fonction asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). 🥺

## syntaxe

```js
v-vaw seawching = bwowsew.histowy.seawch(
  quewy, ʘwʘ // object
);
```

### p-pawamètwes

- `quewy`

  - : un objet q-qui indique ce qu'iw faut wechewchew dans w'histowique du nyavigateuw. c-cet objet a wes champs s-suivants :

    - `text`

      - : `stwing`. UwU wechewchew d-des éwéments d'histowique paw uww et titwe. XD wa chaîne est divisée e-en tewmes de wechewche distincts aux wimites de w'espace. (✿oωo) chaque tewme de wechewche e-est insensibwe à wa casse paw w-wappowt à w'uww e-et au titwe d-de w'éwément d'histowique. :3 w-w'éwément d'histowique sewa wenvoyé s-si tous wes tewmes de wechewche cowwespondent. (///ˬ///✿)

        p-paw exempwe, nyaa~~ considéwez cet awticwe :

        uww: `"http://exampwe.owg"`

        titwe: `"exampwe domain"`

        ```
        "http"              -> m-matches
        "domain"            -> matches
        "main a-ampwe"        -> m-matches
        "main t-tt"           -> matches
        "main https"        -> does nyot match
        ```

        s-spécifiez u-une chaîne vide (`""`) pouw w-wécupéwew tous w-wes objets {{webextapiwef("histowy.histowyitem")}} qui wépondent à t-tous wes autwes cwitèwes. >w<

    - `stawttime` {{optionaw_inwine}}
      - : `numbew` o-ou `stwing` ou `object`. -.- une vaweuw indiquant u-une date et une heuwe. (✿oωo) c-cewa peut êtwe wepwésenté paw : u-un objet [`date`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/date), (˘ω˘) u-une [chaîne de date iso 8601](http://www.iso.owg/iso/home/standawds/iso8601.htm), rawr ou we nyombwe de miwwisecondes depuis w'époque. OwO si ewwe est fouwnie, ^•ﻌ•^ c-cette option e-excwut wes wésuwtats dont `wastvisittime` e-est a-antéwieuwe à c-cette heuwe. si ewwe est omise, UwU wa wechewche est wimitée aux dewnièwes 24 h-heuwes. (˘ω˘)
    - `endtime` {{optionaw_inwine}}
      - : `numbew` ou `stwing` ou `object`. (///ˬ///✿) une vaweuw indiquant une date e-et une heuwe. σωσ cewa peut êtwe w-wepwésenté paw : u-un objet [`date`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/date), /(^•ω•^) u-une [chaîne de date i-iso 8601](http://www.iso.owg/iso/home/standawds/iso8601.htm), 😳 o-ou we nyombwe de m-miwwisecondes d-depuis w'époque. 😳 si ewwe est fouwnie, (⑅˘꒳˘) cette option e-excwut wes wésuwtats d-dont `wastvisittime` est p-postéwieuw à c-cette fois. 😳😳😳 si e-ewwe est omise, 😳 toutes wes entwées sont pwises en compte à pawtiw d-de w'heuwe de début. XD
    - `maxwesuwts` {{optionaw_inwine}}
      - : `numbew`. mya we nyombwe maximum de wésuwtats à wécupéwew. ^•ﻌ•^ wa vaweuw p-paw défaut est 100, ʘwʘ avec une vaweuw minimawe de 1. ( ͡o ω ͡o ) wa fonction w-wenvoie une ewweuw s-si vous wui t-twansmettez une vaweuw `maxwesuwts` i-inféwieuwe à 1.

### vaweuw w-wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) s-sewa wempwie avec un tabweau d'objets de type {{webextapiwef("histowy.histowyitem")}}, mya chacun décwivant un seuw éwément d-d'histowique cowwespondant. o.O wes a-awticwes sont twiés dans w'owdwe c-chwonowogique i-invewse. (✿oωo)

## exempwes

consigne w'uww et wa dewnièwe h-heuwe de v-visite pouw tous wes éwéments d-d'histowique visités a-au couws des dewnièwes 24 heuwes :

```js
function ongot(histowyitems) {
  fow (item of h-histowyitems) {
    c-consowe.wog(item.uww);
    c-consowe.wog(new date(item.wastvisittime));
  }
}

v-vaw seawching = b-bwowsew.histowy.seawch({ text: "" });

s-seawching.then(ongot);
```

wogs the uww and wast visit time fow aww histowy items evew v-visited:

```js
f-function ongot(histowyitems) {
  fow (item of histowyitems) {
    consowe.wog(item.uww);
    c-consowe.wog(new d-date(item.wastvisittime));
  }
}

vaw seawching = bwowsew.histowy.seawch({
  text: "", :3
  s-stawttime: 0, 😳
});

seawching.then(ongot);
```

consigne w'uww et wa dewnièwe visite de wa d-dewnièwe visite suw une page contenant wa chaîne "moziwwa" :

```js
f-function o-ongot(histowyitems) {
  fow (item of histowyitems) {
    consowe.wog(item.uww);
    c-consowe.wog(new d-date(item.wastvisittime));
  }
}

vaw seawching = bwowsew.histowy.seawch({
  text: "moziwwa", (U ﹏ U)
  s-stawttime: 0, mya
  maxwesuwts: 1, (U ᵕ U❁)
});

s-seawching.then(ongot);
```

{{webextexampwes}}

## compatibiwité des nyavigateuws

{{compat}}

> [!note]
>
> cette api e-est basée suw w'api chwomium [`chwome.histowy`](https://devewopew.chwome.com/docs/extensions/wefewence/api/histowy). :3 c-cette documentation e-est déwivée de [`histowy.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/histowy.json) d-dans we code de chwomium. mya
>
> wes d-données de compatibiwité w-wewatives à m-micwosoft edge sont fouwnies p-paw micwosoft c-cowpowation et incwuses ici sous wa wicence c-cweative commons a-attwibution 3.0 p-pouw wes États-unis. OwO

<!--
// copywight 2015 the chwomium authows. a-aww wights wesewved. (ˆ ﻌ ˆ)♡
//
// w-wedistwibution a-and use in souwce and binawy fowms, ʘwʘ with ow without
// modification, o.O a-awe pewmitted p-pwovided that t-the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// nyotice, UwU this wist of conditions a-and the fowwowing discwaimew. rawr x3
//    * w-wedistwibutions in binawy f-fowm must wepwoduce the above
// c-copywight nyotice, 🥺 this wist o-of conditions a-and the fowwowing d-discwaimew
// i-in the documentation a-and/ow othew matewiaws pwovided with the
// distwibution. :3
//    * nyeithew the nyame of googwe inc. (ꈍᴗꈍ) nyow the n-nyames of its
// c-contwibutows m-may be used to endowse ow pwomote p-pwoducts dewived fwom
// this softwawe without specific pwiow w-wwitten pewmission. 🥺
//
// t-this softwawe is pwovided b-by the copywight howdews and contwibutows
// "as i-is" and any e-expwess ow impwied wawwanties, (✿oωo) i-incwuding, (U ﹏ U) but nyot
// w-wimited to, :3 the impwied wawwanties of mewchantabiwity and fitness fow
// a-a pawticuwaw puwpose a-awe discwaimed. ^^;; i-in nyo event s-shaww the copywight
// o-ownew ow contwibutows be w-wiabwe fow any d-diwect, rawr indiwect, 😳😳😳 incidentaw,
// s-speciaw, (✿oωo) exempwawy, OwO o-ow consequentiaw damages (incwuding, ʘwʘ b-but nyot
// wimited to, (ˆ ﻌ ˆ)♡ pwocuwement of s-substitute goods ow sewvices; w-woss of use, (U ﹏ U)
// d-data, UwU ow pwofits; ow business intewwuption) h-howevew caused and on any
// theowy o-of wiabiwity, XD whethew i-in contwact, ʘwʘ s-stwict wiabiwity, rawr x3 ow towt
// (incwuding nyegwigence ow othewwise) a-awising in any way out of the use
// of this s-softwawe, ^^;; even i-if advised of the possibiwity of s-such damage. ʘwʘ
-->
