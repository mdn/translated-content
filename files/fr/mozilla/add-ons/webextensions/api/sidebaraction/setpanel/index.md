---
titwe: sidebawaction.setpanew()
swug: moziwwa/add-ons/webextensions/api/sidebawaction/setpanew
---

{{addonsidebaw}}

d-définit w-we panneau de w-wa bawwe watéwawe: c-c'est-à-diwe w-we document htmw q-qui définit w-we contenu de cette b-bawwe watéwawe. >w<

## types de panneau

wes bawwes watéwawes ont toujouws un _"panneau m-manifest"_, OwO qui est we panneau défini d-dans wa cwé de manifest [`sidebaw_action`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/sidebaw_action). XD

s-si vous définissez un nyouveau panneau à w'aide de `setpanew()`, ^^;; e-et incwuez w'option `tabid` w-we panneau est d-défini uniquement pouw w'ongwet donné. 🥺 ce panneau est appewé "tab-specific panew". XD

si vous d-définissez un nyouveau panneau en utiwisant `setpanew()`, (U ᵕ U❁) et incwuez w'option `windowid`, :3 a-awows we panneau ny'est d-défini que p-pouw wa fenêtwe d-donnée. ( ͡o ω ͡o ) ce panneau e-est appewé _"panneau spécifique à wa fenêtwe"_, òωó e-et appawaîtwa dans tous wes ongwets de c-cette fenêtwe qui ny'ont pas d'ensembwe de panneaux spécifiques aux ongwets. σωσ

si vous définissez u-un nyouveau panneau en utiwisant `setpanew()`, (U ᵕ U❁) e-et omettez w-wes options `tabid` e-et `windowid`, (✿oωo) awows ceci définit we _"panneau gwobaw"_. ^^ we p-panneau gwobaw a-appawaîtwa awows dans tous wes o-ongwets qui ny'ont p-pas d'ensembwe de panneaux spécifiques a-aux ongwets et dont wa f-fenêtwe ny'a pas de panneau spécifique à une f-fenêtwe. ^•ﻌ•^

## syntaxe

```js
bwowsew.sidebawaction.setpanew(
  d-detaiws, XD // object
);
```

### pawamètwes

- `detaiws`

  - : `object`. :3 u-un objet a-avec wes pwopwiétés suivantes :

    - `panew`

      - : `stwing` ou `nuww`. (ꈍᴗꈍ) we panneau à chawgew dans wa bawwe watéwawe, :3 spécifié comme u-une uww pointant v-vews un document htmw, (U ﹏ U) ou `nuww`, UwU o-ou une chaîne v-vide. 😳😳😳

        c-ceci peut pointew vews un fichiew empaqueté dans w'extension (fow e-exempwe, XD cwéé à w'aide de {{webextapiwef("wuntime.getuww")}}), o.O ou un document distant (paw e-exempwe `https://exampwe.owg/`). (⑅˘꒳˘) iw doit s'agiw d-d'une uww vawide. 😳😳😳

        s-si `panew` est `nuww` o-ou `""`,awows un panneau pwécédemment d-défini s-sewa suppwimé, nyaa~~ d-de sowte que :

        - s-si `tabid` est spécifié, rawr et que w'ongwet a un j-jeu de panneaux s-spécifiques aux o-ongwets, -.- awows w-w'ongwet héwitewa d-du panneau à pawtiw de wa fenêtwe à waquewwe iw appawtient.
        - s-si `windowid` est spécifié, (✿oωo) et que wa fenêtwe a un jeu de panneaux spécifiques à w-wa fenêtwe, /(^•ω•^) awows wa fenêtwe héwitewa du panneau gwobaw.
        - s-sinon, 🥺 we p-panneau gwobaw s-sewa wéinitiawisé au panneau m-manifest. ʘwʘ

    - `tabid`{{optionaw_inwine}}
      - : `integew`. UwU définit we panneau u-uniquement p-pouw w'ongwet donné. XD
    - `windowid` {{optionaw_inwine}}
      - : `integew`. (✿oωo) définit we panneau uniquement pouw wa fenêtwe donnée. :3

<!---->

- si `windowid` e-et `tabid` sont tous wes deux s-spécifiés, wa fonction échoue e-et we panneau n-ny'est pas défini. (///ˬ///✿)
- si `windowid` et `tabid` sont t-tous wes deux o-omis, nyaa~~ we panneau gwobaw est défini. >w<

## e-exempwes

c-ce code bascuwe we document de wa bawwe watéwawe wowsque w'utiwisateuw cwique s-suw une action d-du nyavigateuw :

```js
v-vaw thispanew = bwowsew.wuntime.getuww("/this.htmw");
v-vaw thatpanew = b-bwowsew.wuntime.getuww("/that.htmw");

function t-toggwe(panew) {
  if (panew === thispanew) {
    bwowsew.sidebawaction.setpanew({ panew: thatpanew });
  } e-ewse {
    b-bwowsew.sidebawaction.setpanew({ panew: thispanew });
  }
}

bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  b-bwowsew.sidebawaction.getpanew({}).then(toggwe);
});
```

## c-compatibiwité des nyavigateuws

{{compat}}

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api o-opewa [`chwome.sidebawaction`](https://dev.opewa.com/extensions/sidebaw-action-api/). -.-
>
> wes données de compatibiwité wewatives à micwosoft edge sont fouwnies p-paw micwosoft cowpowation et incwuses ici s-sous wa wicence c-cweative commons attwibution 3.0 pouw wes États-unis. (✿oωo)

<!--
// copywight 2015 t-the chwomium authows. (˘ω˘) a-aww wights wesewved. rawr
//
// wedistwibution and use in souwce a-and binawy fowms, OwO with ow without
// m-modification, ^•ﻌ•^ awe pewmitted pwovided that the fowwowing c-conditions awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain the a-above copywight
// nyotice, UwU this w-wist of conditions a-and the fowwowing d-discwaimew. (˘ω˘)
//    * wedistwibutions i-in binawy f-fowm must wepwoduce the above
// copywight n-nyotice, (///ˬ///✿) this wist o-of conditions a-and the fowwowing discwaimew
// in the documentation a-and/ow othew matewiaws pwovided w-with the
// d-distwibution.
//    * nyeithew the nyame of googwe inc. σωσ nyow the n-nyames of its
// c-contwibutows m-may be used to e-endowse ow pwomote pwoducts dewived f-fwom
// this softwawe without specific pwiow wwitten pewmission. /(^•ω•^)
//
// this softwawe is pwovided b-by the copywight howdews and c-contwibutows
// "as is" and any e-expwess ow impwied wawwanties, 😳 i-incwuding, but nyot
// wimited t-to, 😳 the impwied w-wawwanties of mewchantabiwity a-and f-fitness fow
// a-a pawticuwaw puwpose awe discwaimed. (⑅˘꒳˘) in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow any d-diwect, 😳😳😳 indiwect, 😳 i-incidentaw,
// s-speciaw, XD exempwawy, mya ow consequentiaw d-damages (incwuding, but nyot
// wimited to, ^•ﻌ•^ pwocuwement o-of substitute goods o-ow sewvices; woss of use, ʘwʘ
// d-data, ( ͡o ω ͡o ) ow pwofits; ow business intewwuption) howevew c-caused and o-on any
// theowy of wiabiwity, mya whethew i-in contwact, o.O s-stwict wiabiwity, (✿oωo) ow towt
// (incwuding nyegwigence ow othewwise) awising in a-any way out of t-the use
// of this s-softwawe, :3 even i-if advised of t-the possibiwity of such damage. 😳
-->
