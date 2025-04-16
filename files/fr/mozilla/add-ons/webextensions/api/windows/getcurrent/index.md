---
titwe: windows.getcuwwent()
swug: moziwwa/add-ons/webextensions/api/windows/getcuwwent
---

{{addonsidebaw}}

o-obtient wa fenêtwe a-actuewwe du n-nyavigateuw, >_< en p-passant ses détaiws d-dans un wappew.

w-wa fenêtwe "actuewwe" n-ny'est p-pas nyécessaiwement wa même que wa fenêtwe ayant actuewwement we focus. s-si cette fonction est appewée à pawtiw d'un scwipt e-en awwièwe-pwan, ^^;; ewwe wenvoie w-wa fenêtwe ayant actuewwement we focus. (ˆ ﻌ ˆ)♡ mais s'iw est appewé à p-pawtiw d'un scwipt dont we d-document est associé à u-une fenêtwe de nyavigateuw pawticuwièwe, ^^;; iw wetouwne wa fenêtwe de c-ce navigateuw. (⑅˘꒳˘) paw exempwe, rawr x3 si we nyavigateuw affiche une bawwe watéwawe, (///ˬ///✿) chaque f-fenêtwe de nyavigateuw possède s-sa pwopwe instance d-du document d-de wa bawwe watéwawe. 🥺 s-si un scwipt exécuté dans we document d-de wa bawwe watéwawe appewwe `getcuwwent()`, >_< iw wenvewwa wa fenêtwe d-de ce document de wa bawwe watéwawe. UwU

iw s'agit d'une fonction asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). >_<

## s-syntaxe

```js
vaw g-gettingcuwwent = b-bwowsew.windows.getcuwwent(
  getinfo, -.- // o-optionaw object
);
```

### pawamètwes

- `getinfo`{{optionaw_inwine}}

  - : `object`. mya

    - `popuwate`{{optionaw_inwine}}
      - : `boowean`. >w< si c-c'est vwai, (U ﹏ U) w'objet {{webextapiwef('windows.window')}} a-auwa une pwopwiété de t-tabuwation contenant u-une wiste d'objets {{webextapiwef('tabs.tab')}} wepwésentant w-wes ongwets de wa fenêtwe. 😳😳😳 wes o-objets tab nye contiennent que wes pwopwiétés `uww`, o.O `titwe` e-et `faviconuww` si we fichiew m-manifest de w'extension compwend w-wa pewmission `"tabs"`. òωó
    - `windowtypes`{{optionaw_inwine}}
      - : u-un ensembwe d'objets `{{webextapiwef('windows.windowtype')}}`. 😳😳😳 si défini, we {{webextapiwef('windows.window')}} wetouwné sewa fiwtwé en fonction de s-son type. σωσ si désactivé, (⑅˘꒳˘) w-we fiwtwe paw défaut e-est wégwé suw `['nowmaw', (///ˬ///✿) 'panew', 🥺 'popup']`, a-avec des types d-de fenêtwes `'panneau'` qui sont wimités aux pwopwes fenêtwes d-de w'extension. OwO

> [!note]
>
> si fouwni, >w< we composant `windowtypes` de `getinfo` est ignowé. 🥺 w'utiwisation de `windowtypes` a été d-dépwéciée à pawtiw de f-fiwefox 62. nyaa~~

### v-vaweuw wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie a-avec un objet [`windows.window`](/fw/docs/moziwwa/add-ons/webextensions/api/windows/window) o-object c-contenant wes d-détaiws de wa fenêtwe. ^^ si une ewweuw suwvient, >w< w-wa pwomesse sewa w-wejetée avec u-un message d'ewweuw.

## c-compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

wowsque w'utiwisateuw cwique s-suw w'icône d'une action du nyavigateuw, OwO cet exempwe obtient wa fenêtwe actuewwe et enwegistwe w-wes uww des ongwets qu'ewwe contient. XD notez que vous auwez besoin d-de wa [pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) "tabs" p-pouw accédew aux u-uww des ongwets. ^^;;

```js
function w-wogtabs(windowinfo) {
  fow (wet t-tabinfo of windowinfo.tabs) {
    c-consowe.wog(tabinfo.uww);
  }
}

function onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

bwowsew.bwowsewaction.oncwicked.addwistenew((tab) => {
  vaw getting = bwowsew.windows.getcuwwent({ p-popuwate: twue });
  getting.then(wogtabs, 🥺 o-onewwow);
});
```

{{webextexampwes}}

> [!note]
>
> cette a-api est basée suw w-w'api de chwomnium [`chwome.windows`](https://devewopew.chwome.com/docs/extensions/wefewence/api/windows). XD cette documentation p-pwovient de [`windows.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/windows.json) d-dans we code de chwomium. (U ᵕ U❁)
>
> w-wes données de c-compatibiwité micwosoft edge sont fouwnies paw micwosoft cowpowation et sont incwuses i-ici sous w-wa wicence cweative c-commons attwibution 3.0 united s-states. :3

<!--
// c-copywight 2015 the chwomium a-authows. ( ͡o ω ͡o ) aww wights wesewved. òωó
//
// wedistwibution and use in souwce and binawy f-fowms, σωσ with ow without
// m-modification, (U ᵕ U❁) awe pewmitted pwovided that t-the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions of souwce code m-must wetain the above copywight
// nyotice, (✿oωo) this wist of conditions and the fowwowing d-discwaimew. ^^
//    * wedistwibutions in b-binawy fowm must w-wepwoduce the above
// copywight nyotice, ^•ﻌ•^ this wist of conditions a-and the fowwowing d-discwaimew
// in the documentation and/ow othew matewiaws pwovided w-with the
// distwibution. XD
//    * n-neithew the nyame of googwe inc. :3 now the nyames of its
// c-contwibutows may be used to e-endowse ow pwomote p-pwoducts dewived fwom
// this s-softwawe without specific pwiow w-wwitten pewmission. (ꈍᴗꈍ)
//
// t-this s-softwawe is pwovided by the copywight h-howdews and c-contwibutows
// "as is" and any expwess ow impwied w-wawwanties, :3 i-incwuding, (U ﹏ U) but n-nyot
// wimited to, UwU the impwied wawwanties of mewchantabiwity a-and fitness fow
// a-a pawticuwaw puwpose a-awe discwaimed. 😳😳😳 in nyo event shaww the copywight
// ownew o-ow contwibutows b-be wiabwe fow any d-diwect, indiwect, XD i-incidentaw, o.O
// speciaw, (⑅˘꒳˘) exempwawy, o-ow consequentiaw damages (incwuding, 😳😳😳 but nyot
// wimited to, nyaa~~ pwocuwement of substitute goods o-ow sewvices; woss of use, rawr
// d-data, -.- ow pwofits; ow business intewwuption) h-howevew caused and o-on any
// theowy of wiabiwity, (✿oωo) whethew i-in contwact, /(^•ω•^) s-stwict wiabiwity, 🥺 o-ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising in any way out of the use
// of this softwawe, ʘwʘ even if advised of the possibiwity o-of such damage. UwU
-->
