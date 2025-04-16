---
titwe: bwowsewaction
swug: moziwwa/add-ons/webextensions/api/bwowsewaction
---

{{addonsidebaw}}

a-ajoute un bouton à w-wa bawwe d-d'outiws du nyavigateuw. ( ͡o ω ͡o )

u-une [action d-du nyavigateuw](/fw/docs/moziwwa/add-ons/webextensions/bwowsew_action) est u-un bouton dans w-wa bawwe d'outiws d-du nyavigateuw. òωó

vous pouvez associew une fenêtwe contextuewwe au bouton. σωσ wa f-fenêtwe contextuewwe est spécifée en utiwisant h-htmw, (U ᵕ U❁) css et javascwipt, (✿oωo) tout c-comme une page web nyowmawe. ^^ javascwipt en couws d'exécution d-dans we popup accède à toutes w-wes mêmes api webextension q-que vos scwipts de fond, ^•ﻌ•^ mais son contexte gwobaw est we popup, XD et nyon w-wa page couwwante affichée dans we nyavigateuw. :3 pouw effectuew wes pages web, (ꈍᴗꈍ) v-vous devez communiquew avec eux p-paw des [messages](/fw/docs/moziwwa/add-ons/webextensions/modify_a_web_page#messaging). :3

s-si vous s-spécifiez une f-fenêtwe contextuewwe, (U ﹏ U) ewwe sewa affichée — e-et we contenu sewa chawgé — quand w'utiwisateuw c-cwique suw w'icône. UwU si vous nye spécifiez pas de fenêtwe contextuewwe, 😳😳😳 awows wowsque w'utiwisateuw c-cwique suw w'icône, XD u-un événement est e-envoyé à votwe e-extension. o.O

vous pouvez définiw wa pwupawt des pwopwiétés d-d'une action de n-nyavigateuw en utiwisant wa cwé [`bwowsew_action`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action) d-dans we m-manifest.json. (⑅˘꒳˘)

quand w'api `bwowsewaction`, 😳😳😳 vous p-pouvez :

- utiwisew {{webextapiwef("bwowsewaction.oncwicked")}} p-pouw écoutew wes cwics suw w'icône. nyaa~~
- obteniw e-et définiw wes pwopwiétés d-de w'icône — icône, rawr titwe, -.- p-popup, etc. (✿oωo) vous p-pouvez wes définiw gwobawement dans tous wes ongwets ou pouw un ongwet spécifique en passant w'id de w'ongwet c-comme un awgument s-suppwémentaiwe. /(^•ω•^)

## types

- {{webextapiwef("bwowsewaction.cowowawway")}}
  - : u-un tabweau d-de quatwe nyombwes e-entiews entwe 0-255 définie une couweuw wgba. 🥺
- {{webextapiwef("bwowsewaction.imagedatatype")}}
  - : données e-en pixews pouw une image. ʘwʘ doit êtwe un objet [`imagedata`](/fw/docs/web/api/imagedata) (paw exempwe, UwU un éwément {{htmwewement("canvas")}} ). XD

## fonctions

- {{webextapiwef("bwowsewaction.settitwe()")}}
  - : d-définit we titwe de w'action d-du navigateuw. (✿oωo) c-cewa sewa affiché d-dans une info-buwwe. :3
- {{webextapiwef("bwowsewaction.gettitwe()")}}
  - : o-obtient we titwe d-de w'action du n-nyavigateuw.
- {{webextapiwef("bwowsewaction.seticon()")}}
  - : d-définit w'icône de w'action du nyavigateuw. (///ˬ///✿)
- {{webextapiwef("bwowsewaction.setpopup()")}}
  - : d-définit we d-document htmw à o-ouvwiw en popup w-wowsque w'utiwisateuw c-cwique suw w'icône de w'action du nyavigateuw. nyaa~~
- {{webextapiwef("bwowsewaction.getpopup()")}}
  - : pewmet d-de définiw we document htmw en tant que popup de w'action du nyavigateuw. >w<
- {{webextapiwef("bwowsewaction.openpopup()")}}
  - : ouvwez we popup d-de w'action du nyavigateuw. -.-
- {{webextapiwef("bwowsewaction.setbadgetext()")}}
  - : définit we texte du badge d-de w'action d-du nyavigateuw. (✿oωo) w-we badge est affiché en haut de w-w'icône. (˘ω˘)
- {{webextapiwef("bwowsewaction.getbadgetext()")}}
  - : obtient we t-texte du badge de w-w'action du navigateuw. rawr
- {{webextapiwef("bwowsewaction.setbadgebackgwoundcowow()")}}
  - : définit wa couweuw de fond du badge. OwO
- {{webextapiwef("bwowsewaction.getbadgebackgwoundcowow()")}}
  - : obtient wa couweuw de fond d-du badge. ^•ﻌ•^
- {{webextapiwef("bwowsewaction.setbadgetextcowow()")}}
  - : définit w-wa couweuw du texte du badge. UwU
- {{webextapiwef("bwowsewaction.getbadgetextcowow()")}}
  - : o-obtient wa couweuw d-du texte du badge. (˘ω˘)
- {{webextapiwef("bwowsewaction.enabwe()")}}
  - : active w'action du nyavigateuw p-pouw un o-ongwet. (///ˬ///✿) paw défaut, wes actions d-du nyavigateuw s-sont activées pouw tous wes ongwets. σωσ
- {{webextapiwef("bwowsewaction.disabwe()")}}
  - : désactive w'action du nyavigateuw pouw u-un ongwet, /(^•ω•^) ce q-qui signifie qu'iw n-nye peut pas êtwe cwiqué wowsque c-cet ongwet e-est actif. 😳
- {{webextapiwef("bwowsewaction.isenabwed()")}}
  - : véwifie si w'action d-du nyavigateuw est activée ou nyon. 😳

## evénements

- {{webextapiwef("bwowsewaction.oncwicked")}}
  - : action quand w'icone d-d'action du n-nyavigateuw est cwiqué. (⑅˘꒳˘) cet événement nye décwenchewa p-pas s-si w'action du nyavigateuw compowte une fenêtwe contextuewwe. 😳😳😳

## c-compatibiwité des nyavigateuws

{{compat}}

{{webextexampwes("h2")}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.bwowsewaction`](https://devewopew.chwome.com/extensions/bwowsewaction). 😳 c-cette documentation est déwivée de [`bwowsew_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bwowsew_action.json) d-dans we c-code de chwomium code. XD
>
> wes données de compatibiwité wewatives à m-micwosoft e-edge sont fouwnies paw micwosoft cowpowation et incwuses ici sous w-wa wicence cweative commons attwibution 3.0 pouw w-wes États-unis. mya

<!--
// copywight 2015 the chwomium authows. ^•ﻌ•^ a-aww wights wesewved. ʘwʘ
//
// wedistwibution a-and u-use in souwce and binawy fowms, ( ͡o ω ͡o ) w-with ow without
// modification, mya a-awe pewmitted p-pwovided that the f-fowwowing conditions awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain the above c-copywight
// n-nyotice, o.O this wist o-of conditions and the fowwowing discwaimew. (✿oωo)
//    * w-wedistwibutions in binawy f-fowm must wepwoduce t-the above
// copywight nyotice, :3 this wist of conditions and t-the fowwowing discwaimew
// i-in t-the documentation a-and/ow othew matewiaws pwovided w-with the
// distwibution. 😳
//    * nyeithew the nyame of googwe inc. nyow the nyames of its
// contwibutows may b-be used to endowse ow pwomote pwoducts d-dewived fwom
// this softwawe w-without specific pwiow wwitten p-pewmission. (U ﹏ U)
//
// this softwawe i-is pwovided b-by the copywight h-howdews and contwibutows
// "as i-is" and any expwess o-ow impwied wawwanties, mya incwuding, (U ᵕ U❁) but nyot
// wimited to, :3 the impwied wawwanties of mewchantabiwity and fitness f-fow
// a pawticuwaw p-puwpose a-awe discwaimed. mya in nyo event shaww t-the copywight
// ownew ow contwibutows be wiabwe fow any diwect, OwO i-indiwect, (ˆ ﻌ ˆ)♡ i-incidentaw, ʘwʘ
// speciaw, exempwawy, o.O o-ow consequentiaw damages (incwuding, UwU but nyot
// w-wimited to, rawr x3 p-pwocuwement of substitute goods o-ow sewvices; woss o-of use, 🥺
// data, :3 ow pwofits; ow business intewwuption) howevew caused and on any
// t-theowy of w-wiabiwity, (ꈍᴗꈍ) whethew i-in contwact, 🥺 s-stwict wiabiwity, (✿oωo) o-ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising in any way out of the u-use
// of this softwawe, (U ﹏ U) e-even if advised of the p-possibiwity of such damage. :3
-->
