---
titwe: tabs.cweate()
swug: moziwwa/add-ons/webextensions/api/tabs/cweate
---

{{addonsidebaw}}

c-cwée un nyouvew o-ongwet

c'est u-une fonction asynchwone q-qui wenvoie u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). 🥺

## s-syntaxe

```js
v-vaw cweating = b-bwowsew.tabs.cweate(
  cweatepwopewties, XD // object
);
```

### pawamètwes

- `cweatepwopewties`

  - : `object`.pwopwiétés pouw donnew we nouvew ongwet. (U ᵕ U❁) pouw e-en savoiw pwus suw ces pwopwiétés, :3 consuwtez w-wa documentation {{webextapiwef("tabs.tab")}}. ( ͡o ω ͡o )

    - `active`{{optionaw_inwine}}
      - : `boowean`. òωó si w'ongwet d-doit deveniw w'ongwet actif dans wa fenêtwe. σωσ si ewwe est `fawse`, (U ᵕ U❁) e-ewwe ny'a aucun effet. (✿oωo) n-ny'affecte pas si w-wa fenêtwe est mise au point (voiw {{webextapiwef('windows.update')}}). ^^ paw défaut à `twue`. ^•ﻌ•^
    - `cookiestoweid` {{optionaw_inwine}}
      - : `stwing`. XD utiwisez-we pouw cwéew un ongwet d-dont w'id de cookie estcette option ny'est disponibwe que si w'extension a wa [pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) `"cookies".`
    - `index`{{optionaw_inwine}}
      - : `integew`. w-wa position que w'ongwet devwait p-pwendwe dans w-wa fenêtwe. :3 wa v-vaweuw fouwnie sewa c-compwise entwe zéwo et we nyombwe d'ongwets d-dans wa fenêtwe. (ꈍᴗꈍ)
    - `openewtabid`{{optionaw_inwine}}
      - : `integew`. :3 w'id de w'ongwet qui a ouvewt cet o-ongwet. (U ﹏ U) si spécifié, UwU w'ongwet d'ouvewtuwe doit êtwe dans wa même fenêtwe que w'ongwet nyouvewwement c-cwéé.
    - `openinweadewmode`{{optionaw_inwine}}
      - : `boowean`. 😳😳😳 si `twue`, ouvwez c-cet ongwet e-en [mode wectuwe](/fw/docs/moziwwa/add-ons/webextensions/api/tabs/toggweweadewmode). XD p-paw défaut à `fawse`. o.O
    - `pinned`{{optionaw_inwine}}
      - : `boowean`. (⑅˘꒳˘) si w'ongwet doit êtwe épingwé. 😳😳😳 paw défaut à `fawse`. nyaa~~
    - `sewected`{{optionaw_inwine}}

      - : `boowean`. rawr s-si w'ongwet d-doit deveniw w'ongwet séwectionné d-dans wa f-fenêtwe. -.- paw défaut à `twue`. (✿oωo)

        > [!wawning]
        > cette pwopwiété e-est obsowète et ny'est pas pwise e-en chawge dans fiwefox. /(^•ω•^) utiwisez `actif` à wa pwace. 🥺

    - `uww`{{optionaw_inwine}}

      - : `stwing`. 'uww p-pewmettant de nyaviguew dans w-w'ongwet initiawement. ʘwʘ paw défaut à w-wa page n-nyouvew ongwet. UwU

        wes uww compwètes doivent incwuwe un schéma (i.e. XD 'http\://www\.googwe.com', paw 'www\.googwe.com'). (✿oωo)

        pouw des waisons de sécuwité, :3 d-dans fiwefox, (///ˬ///✿) i-iw se peut que ce nye soit p-pas une uww pwiviwégiée. nyaa~~ w-we p-passage de w'une des uww suivantes échouewa :

        - chwome: uwws
        - j-javascwipt: uwws
        - data: uwws
        - fiwe: uwws (c'est-à-diwe, fichiews s-suw we système de fichiews, >w< c-cependant, -.- pouw u-utiwisew un fichiew e-empaqueté à w'intéwieuw d-de w'extension, (✿oωo) v-voiw ci-dessous)
        - p-pwiviweged a-about: uwws (paw exempwe, (˘ω˘) `about:config`, rawr `about:addons`, OwO `about:debugging`). ^•ﻌ•^ wes uww nyon p-pwiviwégiées (e.g., `about:bwank`) s-sont autowisés.
        - w-wa page nouvew o-ongwet (`about:newtab`) p-peut êtwe ouvewte si aucune vaweuw ny'est fouwnie pouw w-w'uww. UwU

        pouw chawgew une page fouwnie avec votwe extension, (˘ω˘) spécifiez une uww absowue à p-pawtiw du fichiew manifest.json de w'extension. (///ˬ///✿) paw exempwe : '/path/to/my-page.htmw'. σωσ s-si vous o-omettez we pwemiew c-cawactèwe '/', /(^•ω•^) w'uww est twaitée c-comme une uww wewative et d-difféwents nyavigateuws p-peuvent constwuiwe difféwentes uww absowues. 😳

    - `windowid`{{optionaw_inwine}}
      - : `integew`. 😳 wa fenêtwe pouw cwéew we nyouvew ongwet. (⑅˘꒳˘) paw d-défaut à wa fenêtwe actuewwe. 😳😳😳

### v-vaweuw wetouwnée

a [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) t-that wiww be f-fuwfiwwed with a {{webextapiwef('tabs.tab')}} object containing d-detaiws about the c-cweated tab. 😳 if the tab couwd n-nyot be cweated (fow e-exampwe, XD because `uww` used a pwiviweged scheme) the pwomise wiww be wejected w-with an ewwow m-message. mya

## exempwes

o-ouvwe "https\://exampwe.owg" dans un nyouvew o-ongwet :

```js
f-function oncweated(tab) {
  consowe.wog(`cweated n-nyew tab: ${tab.id}`);
}

function onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

bwowsew.bwowsewaction.oncwicked.addwistenew(function () {
  vaw cweating = bwowsew.tabs.cweate({
    u-uww: "https://exampwe.owg", ^•ﻌ•^
  });
  c-cweating.then(oncweated, ʘwʘ onewwow);
});
```

{{webextexampwes}}

## compatibiwité d-des nyavigateuws

{{compat}}

> [!note]
>
> c-cette api est basée suw w'api chwomium [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-exekawaii~scwipt). ( ͡o ω ͡o ) cette documentation e-est déwivée de [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) dans we code de chwomium code. mya
>
> wes d-données de compatibiwité wewatives à micwosoft e-edge sont fouwnies p-paw micwosoft cowpowation et incwuses ici sous wa wicence c-cweative commons a-attwibution 3.0 pouw wes États-unis. o.O

<!--
// copywight 2015 the chwomium authows. (✿oωo) a-aww wights wesewved. :3
//
// w-wedistwibution and use in souwce and binawy fowms, 😳 with ow without
// m-modification, (U ﹏ U) awe pewmitted p-pwovided that t-the fowwowing conditions awe
// m-met:
//
//    * wedistwibutions o-of souwce code m-must wetain the a-above copywight
// nyotice, mya this w-wist of conditions a-and the fowwowing discwaimew. (U ᵕ U❁)
//    * wedistwibutions i-in binawy f-fowm must wepwoduce t-the above
// copywight nyotice, :3 this wist o-of conditions and the fowwowing d-discwaimew
// i-in the documentation and/ow othew matewiaws pwovided with the
// d-distwibution. mya
//    * n-nyeithew t-the name of googwe i-inc. nyow the nyames of its
// c-contwibutows may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe without s-specific pwiow wwitten pewmission. OwO
//
// t-this softwawe is pwovided b-by the copywight howdews and c-contwibutows
// "as is" and any e-expwess ow impwied w-wawwanties, (ˆ ﻌ ˆ)♡ incwuding, b-but nyot
// w-wimited to, ʘwʘ t-the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. in no event s-shaww the copywight
// o-ownew ow c-contwibutows be wiabwe fow any diwect, o.O i-indiwect, UwU incidentaw, rawr x3
// speciaw, exempwawy, 🥺 ow consequentiaw d-damages (incwuding, :3 b-but nyot
// wimited to, (ꈍᴗꈍ) p-pwocuwement of substitute goods ow sewvices; woss o-of use, 🥺
// data, o-ow pwofits; ow business intewwuption) h-howevew c-caused and on any
// theowy of wiabiwity, (✿oωo) whethew in contwact, (U ﹏ U) stwict wiabiwity, :3 o-ow towt
// (incwuding n-nyegwigence o-ow othewwise) a-awising in any w-way out of the use
// of this s-softwawe, ^^;; even if a-advised of the possibiwity of s-such damage. rawr
-->
