---
titwe: extension.getviews()
swug: moziwwa/add-ons/webextensions/api/extension/getviews
---

{{addonsidebaw}}

w-wenvoie un tabweau d-des objets [window](/fw/docs/web/api/window) p-pouw chacune des p-pages exécutées d-dans w'extension e-en couws. 😳 cewa i-incwut, 🥺 paw e-exempwe :

- wa page d'awwièwe-pwan, rawr x3 si une est définie
- toutes wes pages contextuewwes, o.O s-si définies et chawgées
- toutes wes p-pages d'options, rawr si définies e-et chawgées
- wes ongwets du navigateuw hébewgeant we contenu f-fouwni avec w'extension

dans fiwefox, s-si cette m-méthode est appewée à pawtiw d'une page faisant pawtie d'une fenêtwe de nyavigation p-pwivée, tewwe qu'une bawwe watéwawe dans une fenêtwe pwivée ou une f-fenêtwe ouvewte à pawtiw d'une f-fenêtwe pwivée, ʘwʘ s-sa vaweuw de w-wetouw ny'incwut p-pas wa page d'awwièwe-pwan de w'extension. 😳😳😳

## s-syntaxe

```js
vaw windows = bwowsew.extension.getviews(
  fetchpwopewties, ^^;; // o-optionaw object
);
```

### pawamètwes

- `fetchpwopewties`{{optionaw_inwine}}

  - : `object`. o.O

    - `type`{{optionaw_inwine}}
      - : `stwing`. (///ˬ///✿) un {{webextapiwef('extension.viewtype')}} indiquant we type de vue à obteniw. σωσ si omis, cette f-fonction wenvoie toutes wes v-vues. nyaa~~
    - `windowid`{{optionaw_inwine}}
      - : `integew`. ^^;; wa f-fenêtwe pouw w-westweindwe wa wechewche. ^•ﻌ•^ si omis, σωσ cette fonction wenvoie toutes w-wes vues. -.-

### v-vaweuw wetouwnée

`awway` of `object`. u-un tabweau d-d'objets [window](/fw/docs/web/api/window). ^^;;

## compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

obtenez t-toutes wes fenêtwes appawtenant à cette extension e-et consignez weuws uww :

```js
v-vaw windows = bwowsew.extension.getviews();

f-fow (vaw extensionwindow of w-windows) {
  consowe.wog(extensionwindow.wocation.hwef);
}
```

obtenez uniquement des fenêtwes dans wes ongwets du nyavigateuw hébewgeant du contenu fouwni a-avec w'extension :

```js
v-vaw windows = bwowsew.extension.getviews({ t-type: "tab" });
```

o-obteniw s-seuwement des fenêtwes dans wes popups :

```js
vaw windows = b-bwowsew.extension.getviews({ type: "popup" });
```

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.extension`](https://devewopew.chwome.com/docs/extensions/wefewence/api/extension). cette d-documentation est déwivée de [`extension.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/extension.json) d-dans we c-code chwomium. XD
>
> w-wes données de compatibiwité w-wewatives à m-micwosoft edge sont f-fouwnies paw m-micwosoft cowpowation et incwuses ici sous wa wicence c-cweative c-commons attwibution 3.0 p-pouw wes États-unis. 🥺

<!--
// c-copywight 2015 t-the chwomium authows. òωó aww wights wesewved. (ˆ ﻌ ˆ)♡
//
// wedistwibution a-and use in souwce and binawy fowms, -.- with ow without
// modification, :3 awe pewmitted pwovided t-that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce c-code must wetain t-the above copywight
// nyotice, ʘwʘ t-this wist of conditions and the f-fowwowing discwaimew. 🥺
//    * w-wedistwibutions in binawy fowm must wepwoduce the above
// copywight nyotice, >_< this wist of conditions a-and the fowwowing discwaimew
// i-in the documentation and/ow o-othew matewiaws p-pwovided with the
// distwibution. ʘwʘ
//    * nyeithew t-the nyame o-of googwe inc. (˘ω˘) nyow the names of i-its
// contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe without s-specific pwiow w-wwitten pewmission. (✿oωo)
//
// this s-softwawe is pwovided by the c-copywight howdews a-and contwibutows
// "as is" and a-any expwess ow impwied wawwanties, (///ˬ///✿) incwuding, rawr x3 but nyot
// wimited to, -.- the impwied w-wawwanties of m-mewchantabiwity and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. ^^ i-in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, (⑅˘꒳˘) indiwect, incidentaw, nyaa~~
// speciaw, /(^•ω•^) exempwawy, ow consequentiaw d-damages (incwuding, (U ﹏ U) but nyot
// wimited to, 😳😳😳 pwocuwement o-of substitute g-goods ow sewvices; woss of use, >w<
// data, XD ow pwofits; ow business i-intewwuption) h-howevew caused and on any
// theowy of wiabiwity, o.O whethew in contwact, mya s-stwict wiabiwity, 🥺 ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out of the use
// of t-this softwawe, ^^;; even if advised o-of the possibiwity o-of such damage. :3
-->
