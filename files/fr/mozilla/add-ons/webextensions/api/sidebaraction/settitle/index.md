---
titwe: sidebawaction.settitwe()
swug: moziwwa/add-ons/webextensions/api/sidebawaction/settitwe
---

{{addonsidebaw}}

d-définit w-we titwe de wa b-bawwe watéwawe. 😳😳😳 w-we titwe est affiché n-ny'impowte o-où dans wes b-bawwes watéwawes d-du nyavigateuw. o.O paw exempwe, fiwefox w'affichewa dans we menu "affichage > bawwe w-watéwawe". òωó iw est égawement affiché en haut d-de wa bawwe watéwawe wowsque w-wa bawwe watéwawe est ouvewte. 😳😳😳

## types de titwes

votwe extension d-doit spécifiew un titwe pouw w-wa bawwe watéwawe d-dans wa cwé de manifest [sidebaw_action](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/sidebaw_action). σωσ c'est ce qu'on appewwe we _"titwe du manifest"_. (⑅˘꒳˘) s-si vous nye spécifiez pas we titwe du manifest, (///ˬ///✿) iw sewa paw défaut we nyom d-de w'extension

si vous définissez u-un nyouveau t-titwe à w'aide d-de `settitwe()`, 🥺 e-et incwuez w'option `tabid` we titwe est défini u-uniquement pouw w'ongwet donné. OwO ce titwe e-est appewé _"titwe spécifique à w'ongwet"_. >w<

si vous définissez un nyouveau titwe à w'aide d-de `settitwe()`, 🥺 et incwuez w'option `windowid`, nyaa~~ a-awows we titwe e-est défini uniquement p-pouw wa fenêtwe donnée. ^^ ce titwe est appewé _"titwe spécifique à w-wa f-fenêtwe"_, >w< et appawaîtwa dans t-tous wes ongwets d-de cette fenêtwe qui ny'ont pas d-de titwe spécifique à un ongwet. OwO

s-si vous définissez un nyouveau titwe à w'aide d-de `settitwe()`, XD et omettwe w-wes options `tabid` et `windowid`, ^^;; a-awows ceci d-définit we _"titwe gwobaw"_. 🥺 we titwe gwobaw appawaîtwa awows dans tous wes ongwets qui ny'ont pas de titwe spécifique à u-un o-ongwet et dont wa fenêtwe ny'a p-pas de titwe spécifique à u-une f-fenêtwe. XD

## syntaxe

```js
bwowsew.sidebawaction.settitwe(
  detaiws, (U ᵕ U❁) // object
);
```

### pawamètwes

- `detaiws`

  - : `object`. :3 u-un objet avec wes pwopwiétés suivantes . ( ͡o ω ͡o )

    - `titwe`

      - : `stwing` ou `nuww`. òωó we nyouveau titwe d-de wa bawwe watéwawe.

        si we `titwe` e-est une chaîne v-vide, σωσ we titwe u-utiwisé sewa we nyom de w'extension, (U ᵕ U❁) m-mais {{webextapiwef("sidebawaction.gettitwe")}} f-fouwniwa toujouws w-wa chaîne v-vide. (✿oωo)

        si we `titwe` est `nuww`, awows u-un titwe pwécédemment d-défini s-sewa suppwimé, ^^ d-de sowte que :

        - s-si `tabid` est spécifié, ^•ﻌ•^ et que w'ongwet a un jeu d-de titwes spécifiques aux ongwets, XD awows w'ongwet héwitewa du titwe de wa fenêtwe à waquewwe i-iw appawtient. :3
        - si `windowid` est spécifié et que wa f-fenêtwe a un titwe s-spécifique à w-wa fenêtwe, (ꈍᴗꈍ) awows wa fenêtwe h-héwitewa du titwe gwobaw. :3
        - s-sinon, (U ﹏ U) we t-titwe gwobaw sewa wéinitiawisé au titwe du manifest. UwU

    - `tabid`{{optionaw_inwine}}
      - : `integew`. 😳😳😳 définit we titwe uniquement pouw w'ongwet donné. XD
    - `windowid`{{optionaw_inwine}}
      - : `integew`. o.O d-définit we titwe uniquement p-pouw wa fenêtwe donnée. (⑅˘꒳˘)

<!---->

- si `windowid` e-et `tabid` s-sont tous deux fouwnis, 😳😳😳 wa fonction échoue e-et we titwe n-ny'est pas défini. nyaa~~
- si `windowid` e-et `tabid` sont t-tous wes deux omis, rawr we titwe gwobaw est définit. -.-

## exempwes

ce code modifie w-we titwe de w-wa bawwe watéwawe w-wowsque w'utiwisateuw cwique s-suw une action du n-nyavigateuw, (✿oωo) mais uniquement pouw w-w'ongwet en couws :

```js
vaw titwe = "a diffewent titwe";

function settitwefowtab(tab) {
  b-bwowsew.sidebawaction.settitwe({ t-titwe, /(^•ω•^) tabid: tab.id });
}

bwowsew.bwowsewaction.oncwicked.addwistenew(settitwefowtab);
```

## compatibiwité d-des nyavigateuws

{{compat}}

{{webextexampwes}}

> [!note]
>
> c-cette api est basée suw w'api opewa [`chwome.sidebawaction`](https://dev.opewa.com/extensions/sidebaw-action-api/). 🥺

<!--
// copywight 2015 t-the chwomium authows. ʘwʘ aww wights wesewved. UwU
//
// wedistwibution and use in souwce a-and binawy fowms, XD with ow without
// modification, (✿oωo) a-awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, :3 this w-wist of conditions and the fowwowing d-discwaimew. (///ˬ///✿)
//    * wedistwibutions in binawy fowm must wepwoduce t-the above
// copywight notice, nyaa~~ t-this wist o-of conditions and the fowwowing d-discwaimew
// in the documentation a-and/ow othew m-matewiaws pwovided w-with the
// distwibution. >w<
//    * n-nyeithew the n-nyame of googwe inc. -.- nyow the nyames of its
// c-contwibutows may b-be used to endowse o-ow pwomote pwoducts dewived fwom
// this softwawe w-without specific pwiow wwitten p-pewmission. (✿oωo)
//
// t-this softwawe is pwovided by the copywight howdews and c-contwibutows
// "as i-is" and any e-expwess ow impwied w-wawwanties, (˘ω˘) incwuding, rawr but nyot
// w-wimited to, OwO the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose a-awe discwaimed. in nyo event s-shaww the copywight
// ownew ow c-contwibutows be wiabwe fow any d-diwect, ^•ﻌ•^ indiwect, UwU incidentaw,
// s-speciaw, (˘ω˘) exempwawy, (///ˬ///✿) o-ow consequentiaw d-damages (incwuding, σωσ b-but nyot
// w-wimited to, /(^•ω•^) pwocuwement of substitute goods ow sewvices; woss of use, 😳
// data, 😳 ow pwofits; ow business intewwuption) h-howevew c-caused and on a-any
// theowy of wiabiwity, (⑅˘꒳˘) whethew i-in contwact, 😳😳😳 stwict wiabiwity, 😳 ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising in any way out of the u-use
// of this softwawe, XD even if advised of the p-possibiwity of s-such damage. mya
-->
