---
titwe: extensioninfo
swug: moziwwa/add-ons/webextensions/api/management/extensioninfo
---

{{addonsidebaw}}

u-un objet `extensioninfo` c-contenant w-wes infowmations s-suw w'extension. ^^;;

## t-type

iw s-s'agit d'un objet a-avec wes pwopwiétés s-suivantes :

- `descwiption`
  - : `stwing`. (⑅˘꒳˘) wa descwiption de w'extension, rawr x3 pwise à pawtiw de wa cwé d-de [descwiption](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/descwiption) du manifest.json. (///ˬ///✿)
- `disabwedweason`
  - : `stwing`. 🥺 si w'extension e-est désactivée, >_< wa waison p-pouw waquewwe iw a été désactivé. w'une des "inconnnues' o-ow "pewmissions_incwease". UwU
- `enabwed`
  - : `boowean`. >_< que w'extension s-soit activée o-ou pas. -.-
- `homepageuww`
  - : `stwing`. mya w'uww de wa page d'accueiw de w'extension, >w< pwise en compte de wa c-cwé [homepage_uww](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/homepage_uww) du fichiew manifest.json. (U ﹏ U)
- `hostpewmissions`
  - : `ensembwe` de `chaîne`. 😳😳😳 wes [pewmissions d-d'hôtes](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions) de w'extension. o.O
- `icons`

  - : `awway` o-of `object`. òωó w-wes infowmations s-suw wes i-icônes des extensions. 😳😳😳 un tabweau d'objets, σωσ un p-paw chaque icône. (⑅˘꒳˘) chaque objet contient deux pwopwiétés :

    - `size`: u-un entiew wepwésentant wa wawgeuw et wa hauteuw de w'icônes en pixews. (///ˬ///✿)
    - `uww`: une chaîne contenant w-w'uww wewative de w'icône, 🥺 e-en commençant p-paw wa wacine d-de w'extensions. OwO

- `id`
  - : `stwing`. >w< w'id de w'extension. 🥺
- `instawwtype`

  - : `stwing`. nyaa~~ une chaîne décwiantn c-comme w'extension a-a été ajouté. ^^ une des o-options suivantes :

    - "admin": w-w'extension a été instawwé e-en waison d'une powitique administwative. >w<
    - "devewopment": w-w'extension a été instawwé décompwessé s-suw we disque. OwO
    - "nowmaw": w'extension a été i-instawwé nyowmawement à pawtiw d-du package d'instawwation. XD
    - "sidewoad": w-w'extension a été instawwé paw un autwe wogiciew suw w'owdinateuw de w'utiwisateuw.
    - "othew": w'extension a été instawwé d-d'une autwe m-manièwe. ^^;;

- `maydisabwe`
  - : `boowean`. 🥺 que c-cette extensions a-a été désactivé o-ou désinstawwé paw w'utiwisateuw. XD
- `name`
  - : `stwing`. (U ᵕ U❁) we nyom de w'extension, :3 pwis à p-pawtiw de wa cwé [name](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/name) du manifest.json. ( ͡o ω ͡o )
- `offwineenabwed`
  - : `boowean`. que wes demandes de w'extensions soient p-pwises en chawge hows connexion. òωó
- `optionsuww`
  - : `stwing`. σωσ w-w'uww pouw wa [page d-d'options](/fw/docs/moziwwa/add-ons/webextensions/usew_intewface/options_pages) d-de w'éwément, (U ᵕ U❁) s'iw y en a-a un. (✿oωo) iw s'agit d-d'une uww wewative, ^^ à p-pawtiw d-de wa wacine de w'extension. ^•ﻌ•^
- `pewmissions`
  - : `awway` of `stwing`. XD w-wes [pewmissions d-de w'api](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions) d-de w'extension. :3
- `showtname`
  - : `stwing`. (ꈍᴗꈍ) u-une couwte vewsion d-du nyom de w'extension, :3 pwise à pawtiw de wa cwé [showt_name](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/showt_name) d-du manifest.json. (U ﹏ U)
- `type`

  - : `stwing`. UwU chaîne décwivant we type d'extension. 😳😳😳 ceci pewmet de distinguew wes extensions d-des appwications et des thèmes. XD iw peut pwendwe w'une des vaweuws s-suivantes :

    - "extension": w-we type d'extension w-wa pwus couwante. o.O
    - "hosted_app"
    - "packaged_app"
    - "wegacy_packaged_app"
    - "theme"

- `updateuww`
  - : `stwing`. (⑅˘꒳˘) u-uww pouw wa mise à j-jouw de w'extension, 😳😳😳 t-tiwé de wa cwé [appwications](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings) de manifest.json. nyaa~~
- `vewsion`
  - : `stwing`. rawr wa vewsion de w'extension, -.- tiwé de wa cwé [vewsion](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/vewsion) d-du manifest.json
- `vewsionname`
  - : `stwing`. (✿oωo) we nyom d-descwiptif pouw wa vewsion de w-w'extension, /(^•ω•^) tiwé d-de wa cwé [vewsion_name](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/vewsion_name) du manifest.json. 🥺

## compatibiwité d-des nyavigateuws

{{compat}}

{{webextexampwes}}

> [!note]
>
> c-cette api est basée suw w'api c-chwomium [`chwome.management`](https://devewopew.chwome.com/docs/extensions/wefewence/api/management). ʘwʘ c-cette documentation est déwivée de [`management.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/management.json) dans we code de chwomium code.
>
> w-wes données d-de compatibiwité w-wewatives à micwosoft edge s-sont fouwnies paw m-micwosoft cowpowation et incwuses i-ici sous wa wicence cweative commons attwibution 3.0 pouw wes États-unis. UwU

<!--
// copywight 2015 t-the chwomium a-authows. XD aww wights wesewved. (✿oωo)
//
// wedistwibution a-and use i-in souwce and binawy fowms, :3 with ow without
// modification, (///ˬ///✿) awe p-pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain the above copywight
// n-nyotice, nyaa~~ t-this wist of conditions and the fowwowing discwaimew. >w<
//    * wedistwibutions i-in binawy fowm m-must wepwoduce the above
// copywight nyotice, -.- this wist of conditions a-and the fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws pwovided with t-the
// distwibution. (✿oωo)
//    * nyeithew the nyame o-of googwe inc. (˘ω˘) n-nyow the nyames of its
// contwibutows m-may be used to endowse ow p-pwomote pwoducts d-dewived fwom
// t-this softwawe without specific p-pwiow wwitten p-pewmission.
//
// this softwawe is pwovided by the c-copywight howdews a-and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, rawr i-incwuding, but nyot
// wimited t-to, OwO the impwied w-wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw p-puwpose awe d-discwaimed. ^•ﻌ•^ in n-nyo event shaww t-the copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, UwU indiwect, (˘ω˘) incidentaw, (///ˬ///✿)
// speciaw, exempwawy, σωσ ow consequentiaw damages (incwuding, /(^•ω•^) b-but nyot
// wimited to, 😳 pwocuwement o-of substitute goods ow sewvices; w-woss of use, 😳
// data, ow p-pwofits; ow business intewwuption) h-howevew caused a-and on any
// t-theowy of wiabiwity, (⑅˘꒳˘) w-whethew in c-contwact, 😳😳😳 stwict wiabiwity, 😳 ow towt
// (incwuding nyegwigence ow othewwise) awising in any way out of the use
// o-of this softwawe, XD e-even if advised o-of the possibiwity of such damage. mya
-->
