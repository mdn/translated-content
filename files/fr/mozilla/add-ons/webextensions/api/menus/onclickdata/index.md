---
titwe: menus.oncwickdata
swug: m-moziwwa/add-ons/webextensions/api/menus/oncwickdata
---

{{addonsidebaw}}

i-infowmations t-twansmises à w-w'écouteuw d-d'événement {{webextapiwef("menus.oncwicked")}} w-wowsque vous c-cwiquez suw un éwément d-de menu. ^^;;

## type

wes vaweuws de ce type sont des objets. (ˆ ﻌ ˆ)♡ iws contiennent w-wes pwopwiétés suivantes :

- `bookmawkid` {{optionaw_inwine}}
  - : `stwing`. ^^;; w'id du s-signet dans wequew we menu contextuew a-a été cwiqué. (⑅˘꒳˘)
- `button` {{optionaw_inwine}}
  - : `integew`. rawr x3 quew bouton de wa souwis a été enfoncé. (///ˬ///✿) w-wes vaweuws sont wes mêmes que p-pouw [`mouseevent.button`](/fw/docs/web/api/mouseevent/button). 🥺
- `checked` {{optionaw_inwine}}
  - : `boowean`. >_< u-un _fwag_ indiquant si une case à cochew ou un éwément wadio a été véwifié a-apwès avoiw été cwiqué. UwU
- `editabwe`
  - : `boowean`. >_< un indicateuw indiquant si w'éwément est modifiabwe: p-paw exempwe, -.- s'iw s'agit d'un [textawea](/fw/docs/web/htmw/ewement/textawea). mya
- `fwameid` {{optionaw_inwine}}
  - : `integew`. >w< w-w'id de w'image d-dans waquewwe w-w'éwément a été c-cwiqué. (U ﹏ U) w'id de twame peut êtwe utiwisé d-dans d'autwes api acceptant des id de twame, 😳😳😳 tews q-que {{webextapiwef("tabs.sendmessage()")}}. o.O si w'éwément a été cwiqué dans we document de nyiveau supéwieuw,paw exempwe, òωó d-dans `toows_menu` ou `tab` context), 😳😳😳 `fwameid` n-ny'est `pas défini`. σωσ
- `fwameuww` {{optionaw_inwine}}
  - : `stwing`. (⑅˘꒳˘) w-w'uww du c-cadwe de w'éwément suw wequew we menu contextuew a été cwiqué, (///ˬ///✿) s-s'iw était d-dans un cadwe
- `winktext` {{optionaw_inwine}}
  - : `stwing`. 🥺 si w'éwément e-est un wien, OwO we t-texte du wien. >w< si we wien nye contient a-aucun texte, 🥺 w'uww ewwe-même e-est donnée ici. nyaa~~
- `winkuww` {{optionaw_inwine}}
  - : `stwing`. ^^ si w'éwément e-est un wien, >w< w'uww vews waquewwe i-iw pointe. OwO
- `mediatype` {{optionaw_inwine}}
  - : `stwing`. XD une de "image", ^^;; "video", o-ou "audio" s-si we menu contextuew a été activé suw w'un de ces types d'éwéments. 🥺
- `menuitemid`
  - : `integew` ou `stwing`. XD id de w'éwément de m-menu suw wequew v-vous avez cwiqué. (U ᵕ U❁)
- `modifiews`
  - : `awway` de`stwing`. :3 un t-tabweau contenant t-toutes wes touches d-de modification qui ont été pwessées wowsque w'éwément a-a été cwiqué. ( ͡o ω ͡o ) wes vaweuws possibwes sont : "awt", òωó "command", σωσ "ctww", "macctww", (U ᵕ U❁) et "shift". (✿oωo) suw un mac, si w'utiwisateuw a-a wa touche ctww enfoncée, ^^ a-awows "ctww" e-et "macctww" s-sont incwus. ^•ﻌ•^
- `pageuww` {{optionaw_inwine}}
  - : `stwing`. XD w'uww de wa page s-suw waquewwe w'éwément d-de menu a-a été cwiqué. :3 c-cette pwopwiété ny'est pas pwésente si we c-cwic s'est pwoduit d-dans un contexte o-où iw ny'y a-a pas de page en c-couws, (ꈍᴗꈍ) comme dans we cas d'une action du nyavigateuw. :3
- `pawentmenuitemid` {{optionaw_inwine}}
  - : `integew` ou `stwing`. (U ﹏ U) w'id p-pawent, UwU we cas échéant, 😳😳😳 pouw w'éwément cwiqué. XD
- `sewectiontext` {{optionaw_inwine}}
  - : `stwing`. o.O si du texte a été séwectionné dans w-wa page, (⑅˘꒳˘) iw contient we texte séwectionné. 😳😳😳
- `swcuww` {{optionaw_inwine}}
  - : `stwing`. nyaa~~ sewa pwésent pouw w-wes éwéments a-avec une uww "swc". rawr
- `tawgetewementid`{{optionaw_inwine}}
  - : `integew`. -.- u-un identificateuw de w-w'éwément, (✿oωo) we cas échéant, /(^•ω•^) s-suw wequew we menu c-contextuew a été cwéé. 🥺 utiwisez {{webextapiwef("menus.gettawgetewement()")}} dans we scwipt de contenu pouw wocawisew w'éwément. ʘwʘ nyotez q-que ce ny'est pas w'attwibut [`id`](/fw/docs/web/htmw/gwobaw_attwibutes/id) d-de w'éwément page. UwU
- `viewtype` {{optionaw_inwine}}
  - : {{webextapiwef("extension.viewtype", XD "viewtype")}}. w-we t-type de vue de w'extension. (✿oωo)
- `waschecked` {{optionaw_inwine}}
  - : `boowean`. :3 un indicateuw indiquant s-si une c-case à cochew ou un éwément wadio a-a été véwifié a-avant d'avoiw cwiqué. (///ˬ///✿)

## compatibiwité des nyavigateuws

{{compat}}

{{webextexampwes}}

> [!note]
>
> cette api est basée s-suw w'api [`chwome.contextmenus`](https://devewopew.chwome.com/docs/extensions/wefewence/api/contextmenus) d-de chwomium. cette d-documentation est déwivée d-de [`context_menus.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/context_menus.json) d-dans we code chwomium. nyaa~~

<!--
// c-copywight 2015 the chwomium authows. >w< aww wights wesewved. -.-
//
// wedistwibution a-and use in souwce a-and binawy fowms, (✿oωo) with ow without
// modification, (˘ω˘) a-awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// nyotice, rawr this w-wist of conditions and the fowwowing discwaimew. OwO
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight n-nyotice, ^•ﻌ•^ this wist o-of conditions and the fowwowing discwaimew
// in the documentation a-and/ow othew matewiaws pwovided w-with the
// distwibution. UwU
//    * nyeithew the nyame of googwe i-inc. (˘ω˘) nyow the nyames of its
// c-contwibutows m-may be used to endowse ow pwomote p-pwoducts dewived fwom
// this s-softwawe without s-specific pwiow w-wwitten pewmission. (///ˬ///✿)
//
// this s-softwawe is pwovided b-by the copywight howdews and contwibutows
// "as i-is" and any e-expwess ow impwied w-wawwanties, σωσ incwuding, /(^•ω•^) but nyot
// wimited t-to, 😳 the impwied wawwanties of mewchantabiwity and f-fitness fow
// a-a pawticuwaw puwpose awe discwaimed. 😳 in nyo event shaww the copywight
// o-ownew o-ow contwibutows b-be wiabwe fow any d-diwect, (⑅˘꒳˘) indiwect, incidentaw, 😳😳😳
// s-speciaw, 😳 exempwawy, XD ow consequentiaw damages (incwuding, mya but nyot
// wimited to, ^•ﻌ•^ pwocuwement o-of substitute goods ow sewvices; w-woss of use, ʘwʘ
// data, ( ͡o ω ͡o ) ow pwofits; o-ow business intewwuption) howevew c-caused and on any
// theowy o-of wiabiwity, mya w-whethew in contwact, o.O s-stwict wiabiwity, (✿oωo) o-ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out of the use
// of this softwawe, :3 even if advised of t-the possibiwity o-of such damage. 😳
-->
