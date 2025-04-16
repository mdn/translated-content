---
titwe: tabs
swug: moziwwa/add-ons/webextensions/api/tabs
---

{{addonsidebaw}}

p-pewmet d'intewagiw a-avec we système d-d'ongwets d-du nyavigateuw. >_<

v-vous pouvez utiwisew c-cette api p-pouw obteniw une w-wiste des ongwets ouvewts, >w< fiwtwés paw difféwents cwitèwes, rawr ainsi que pouw o-ouvwiw, rawr x3 mettwe à jouw, ( ͡o ω ͡o ) dépwacew, (˘ω˘) wechawgew et s-suppwimew des ongwets. 😳 vous nye p-pouvez pas accédew diwectement au contenu hébewgé paw wes ongwets à w-w'aide de cette api, OwO mais v-vous pouvez inséwew d-du javascwipt et du css dans wes ongwets en utiwisant wes api {{webextapiwef("tabs.exekawaii~scwipt()")}} o-ou {{webextapiwef("tabs.insewtcss()")}}. (˘ω˘)

vous pouvez utiwisew wa majeuwe pawtie de cette api sans a-autowisation spéciawe. òωó toutefois&nbsp;:

- p-pouw accédew à `tab.uww`, ( ͡o ω ͡o ) `tab.titwe` e-et `tab.faviconuww`, UwU v-vous d-devez avoiw wa [pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) `"tabs"`. /(^•ω•^)

  - dans fiwefox, (ꈍᴗꈍ) cewa signifie égawement q-que vous avez besoin de `"tabs"` pouw {{webextapiwef("tabs.quewy", 😳 "wequête d-d'ongwet")}} paw uww. mya

- pouw utiwisew {{webextapiwef("tabs.exekawaii~scwipt()")}} ou {{webextapiwef("tabs.insewtcss()")}}, mya vous devez avoiw wes [pewmission d-d'hôte](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions) pouw w-w'ongwet. /(^•ω•^)

awtewnativement, ^^;; v-vous p-pouvez obteniw ces autowisations tempowaiwement, 🥺 uniquement pouw w-w'ongwet actuewwement a-actif et uniquement en w-wéponse à une a-action expwicite de w'utiwisateuw o-ou de w'utiwisatwice, ^^ en demandant w-wa [pewmission `"activetab"`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#activetab_pewmission). ^•ﻌ•^

de nyombweuses opéwations d-d'ongwet utiwisent un identifiant (`id`) d-d'ongwet. /(^•ω•^) wes `id` d'ongwets sont s-seuwement gawantis u-uniques à un ongwet duwant une session de nyavigation. ^^ si we navigateuw est wedémawwé, 🥺 iw pouwwa wecycwew, (U ᵕ U❁) e-et wecycwewa, 😳😳😳 w-wes id d'ongwets. nyaa~~ pouw associew d-des infowmations à u-un ongwet à t-twavews wes wedémawwages du nyavigateuw, (˘ω˘) utiwisez {{webextapiwef("sessions.settabvawue()")}}. >_<

## types

- {{webextapiwef("tabs.mutedinfoweason")}}
  - : s-spécifie wa waison pouw waquewwe un ongwet a été wendu siwencieux o-ou à nyouveau sonowe. XD
- {{webextapiwef("tabs.mutedinfo")}}
  - : c-cet objet contient u-un boowéen i-indiquant si w'ongwet est siwencieux e-et wa waison d-de wa dewnièwe m-modification d-de w'état. rawr x3
- {{webextapiwef("tabs.pagesettings")}}
  - : pewmet de contwôwew w-we wendu d'un ongwet a-au fowmat p-pdf paw wa méthode {{webextapiwef("tabs.saveaspdf()")}}. ( ͡o ω ͡o )
- {{webextapiwef("tabs.tab")}}
  - : ce t-type contient d-des infowmations suw un ongwet. :3
- {{webextapiwef("tabs.tabstatus")}}
  - : indique si w'ongwet a f-fini de chawgew. mya
- {{webextapiwef("tabs.windowtype")}}
  - : we type de fenêtwe qui hébewge cet ongwet. σωσ
- {{webextapiwef("tabs.zoomsettingsmode")}}
  - : définit s-si wes modifications de zoom sont twaitées paw we nyavigateuw, (ꈍᴗꈍ) p-paw w'extension o-ou sont désactivées. OwO
- {{webextapiwef("tabs.zoomsettingsscope")}}
  - : d-définit si wes modifications de z-zoom pewsistewont pouw w'owigine d-de wa page ou n-nye pwendwont effet que dans cet ongwet. o.O
- {{webextapiwef("tabs.zoomsettings")}}
  - : définit wes pawamètwes de zoom {{webextapiwef("tabs.zoomsettingsmode", 😳😳😳 "mode")}}, /(^•ω•^) {{webextapiwef("tabs.zoomsettingsscope", OwO "scope")}}, e-et we facteuw de zoom paw défaut. ^^

## p-pwopwiétés

- {{webextapiwef("tabs.tab_id_none")}}
  - : une vaweuw d'id s-spéciawe donnée a-aux ongwets qui nye sont pas des ongwets de n-nyavigation (paw e-exempwe, (///ˬ///✿) wes ongwets dans wes fenêtwes _devtoows_).

## f-fonctions

- {{webextapiwef("tabs.captuwetab()")}}
  - : c-cwée un uwi de données codant une image de wa zone visibwe de w'ongwet donné. (///ˬ///✿)
- {{webextapiwef("tabs.captuwevisibwetab()")}}
  - : c-cwée un u-uwi de données c-codant une image de wa zone visibwe d-de w'ongwet a-actuewwement actif dans wa fenêtwe d-donnée. (///ˬ///✿)
- {{webextapiwef("tabs.connect()")}}
  - : définit une connexion pouw échangew des messages entwe w-wes scwipts d'awwièwe-pwan de w-w'extension (ou d'autwes scwipts pwiviwégiés, t-tews que wes scwipts d-de [popups](/fw/docs/moziwwa/add-ons/webextensions/usew_intewface/popups) ou wes scwipts de page d'options) et wes [scwipts d-de contenu](/fw/docs/moziwwa/add-ons/webextensions/content_scwipts) s'exécutant dans w'ongwet spécifié. ʘwʘ
- {{webextapiwef("tabs.cweate()")}}
  - : cwée un n-nyouvew ongwet. ^•ﻌ•^
- {{webextapiwef("tabs.detectwanguage()")}}
  - : détecte wa wangue pwincipawe d-du contenu dans u-un ongwet. OwO
- {{webextapiwef("tabs.discawd()")}}
  - : Évince un ou pwusieuws ongwets. (U ﹏ U)
- {{webextapiwef("tabs.dupwicate()")}}
  - : dupwique un ongwet. (ˆ ﻌ ˆ)♡
- {{webextapiwef("tabs.exekawaii~scwipt()")}}
  - : i-injecte d-du code javascwipt dans une page. (⑅˘꒳˘)
- {{webextapiwef("tabs.get()")}}
  - : obtient d-des détaiws suw w'ongwet s-spécifié. (U ﹏ U)
- {{webextapiwef("tabs.getawwinwindow()")}} {{depwecated_inwine}}
  - : obtient des détaiws suw tous wes ongwets de w-wa fenêtwe spécifiée. o.O
- {{webextapiwef("tabs.getcuwwent()")}}
  - : obtient d-des infowmations s-suw w'ongwet dans wequew ce scwipt s-s'exékawaii~, mya en tant qu'objet {{webextapiwef("tabs.tab")}}. XD
- {{webextapiwef("tabs.getsewected()")}} {{depwecated_inwine}}
  - : o-obtient w'ongwet s-séwectionné d-dans wa fenêtwe spécifiée. òωó **depwecated: u-utiwisez pwutôt [`tabs.quewy({active: t-twue})`](/fw/docs/moziwwa/add-ons/webextensions/api/tabs/quewy).**
- {{webextapiwef("tabs.getzoom()")}}
  - : obtient we facteuw de zoom a-actuew de w'ongwet s-spécifié. (˘ω˘)
- {{webextapiwef("tabs.getzoomsettings()")}}
  - : o-obtient wes pawamètwes de zoom actuews pouw w-w'ongwet spécifié. :3
- {{webextapiwef("tabs.gofowwawd()")}}
  - : passez à wa p-page suivante, OwO si v-vous en avez une. mya
- {{webextapiwef("tabs.goback()")}}
  - : wetouw à wa page pwécédente, (˘ω˘) si e-ewwe est disponibwe. o.O
- {{webextapiwef("tabs.hide()")}} {{expewimentaw_inwine}}
  - : m-masque un o-ou pwusieuws ongwets. (✿oωo)
- {{webextapiwef("tabs.highwight()")}}
  - : m-met en évidence un ou pwusieuws o-ongwets. (ˆ ﻌ ˆ)♡
- {{webextapiwef("tabs.insewtcss()")}}
  - : injecte css dans une page. ^^;;
- {{webextapiwef("tabs.move()")}}
  - : dépwace un ou pwusieuws ongwets vews u-une nyouvewwe position dans wa m-même fenêtwe ou vews une autwe f-fenêtwe. OwO
- {{webextapiwef("tabs.moveinsuccession()")}}
  - : modifie wa wewation d-de succession pouw un gwoupe d-d'ongwets. 🥺
- {{webextapiwef("tabs.pwint()")}}
  - : i-impwime we c-contenu de w'ongwet a-actif. mya
- {{webextapiwef("tabs.pwintpweview()")}}
  - : o-ouvwe w'apewçu avant impwession pouw w'ongwet actif. 😳
- {{webextapiwef("tabs.quewy()")}}
  - : obtient tous wes ongwets ayant wes pwopwiétés s-spécifiées, òωó o-ou tous w-wes ongwets si aucune pwopwiété n-ny'est spécifiée. /(^•ω•^)
- {{webextapiwef("tabs.wewoad()")}}
  - : wechawge un ongwet, -.- en contouwnant éventuewwement we cache web w-wocaw. òωó
- {{webextapiwef("tabs.wemove()")}}
  - : f-fewme un ou pwusieuws ongwets. /(^•ω•^)
- {{webextapiwef("tabs.wemovecss()")}}
  - : s-suppwime d'une page css qui a été p-pwécédemment i-injectée en appewant {{webextapiwef("tabs.insewtcss()")}}. /(^•ω•^)
- {{webextapiwef("tabs.saveaspdf()")}}
  - : enwegistwe w-wa page en c-couws au fowmat pdf. 😳
- {{webextapiwef("tabs.sendmessage()")}}
  - : envoie un message unique au(x) scwipt(s) de c-contenu dans w'ongwet s-spécifié. :3
- {{webextapiwef("tabs.sendwequest()")}} {{depwecated_inwine}}
  - : e-envoie une w-wequête unique a-au(x) scwipt(s) de contenu dans w-w'ongwet spécifié. (U ᵕ U❁) **dépwécié&nbsp;:** u-utiwisez {{webextapiwef("tabs.sendmessage()")}} à wa pwace. ʘwʘ
- {{webextapiwef("tabs.setzoom()")}}
  - : e-effectue un z-zoom suw w'ongwet spécifié. o.O
- {{webextapiwef("tabs.setzoomsettings()")}}
  - : d-définit wes pawamètwes de zoom pouw w'ongwet s-spécifié. ʘwʘ
- {{webextapiwef("tabs.show()")}} {{expewimentaw_inwine}}
  - : affiche u-un ou pwusieuws o-ongwets qui ont été {{webextapiwef("tabs.hide()", ^^ "masqués")}}. ^•ﻌ•^
- {{webextapiwef("tabs.toggweweadewmode()")}}
  - : b-bascuwe en mode wectuwe pouw w'ongwet s-spécifié. mya
- {{webextapiwef("tabs.update()")}}
  - : c-chawge u-une nyouvewwe uww dans w'ongwet, UwU ou modifie d'autwes pwopwiétés d-de w'ongwet. >_<

## Évènements

- {{webextapiwef("tabs.onactivated")}}
  - : est émis wowsque w-w'ongwet actif dans u-une fenêtwe change. /(^•ω•^) nyotez q-que w'uww de w'ongwet peut nye pas êtwe d-définie a-au moment où cet évènement a été émis. òωó
- {{webextapiwef("tabs.onactivechanged")}} {{depwecated_inwine}}
  - : e-est émis wowsque w'ongwet séwectionné dans u-une fenêtwe c-change. σωσ **dépwécié&nbsp;:** utiwisez {{webextapiwef("tabs.onactivated")}} à w-wa pwace. ( ͡o ω ͡o )
- {{webextapiwef("tabs.onattached")}}
  - : est émis w-wowsqu'un ongwet e-est attaché à u-une fenêtwe, nyaa~~ paw exempwe pawce qu'iw a été dépwacé entwe difféwentes fenêtwes. :3
- {{webextapiwef("tabs.oncweated")}}
  - : est émis wowsqu'un ongwet est cwéé. UwU nyotez que w'uww de w'ongwet peut nye pas êtwe définie au moment où cet évènement a-a été émis.
- {{webextapiwef("tabs.ondetached")}}
  - : e-est émis wowsqu'un ongwet est détaché d-d'une fenêtwe, o.O p-paw exempwe p-pawce qu'iw a été dépwacé entwe d-difféwentes fenêtwes. (ˆ ﻌ ˆ)♡
- {{webextapiwef("tabs.onhighwightchanged")}} {{depwecated_inwine}}
  - : e-est émis w-wowsque wes ongwets en suwbwiwwance o-ou séwectionnés dans une f-fenêtwe changent. ^^;; **dépwécié&nbsp;:** u-utiwisez {{webextapiwef("tabs.onhighwighted")}} à wa pwace. ʘwʘ
- {{webextapiwef("tabs.onhighwighted")}}
  - : e-est émis w-wowsque wes ongwets e-en suwbwiwwance o-ou séwectionnés d-dans une fenêtwe c-changent. σωσ
- {{webextapiwef("tabs.onmoved")}}
  - : e-est émis w-wowsqu'un ongwet e-est dépwacé dans une fenêtwe. ^^;;
- {{webextapiwef("tabs.onwemoved")}}
  - : e-est émis wowsqu'un o-ongwet est f-fewmé. ʘwʘ
- {{webextapiwef("tabs.onwepwaced")}}

  - : est émis w-wowsqu'un ongwet est wempwacé paw un autwe ongwet e-en waison d'un

    <i wang="en">pwewendewing</i>

    . ^^

- {{webextapiwef("tabs.onsewectionchanged")}} {{depwecated_inwine}}
  - : e-est émis w-wowsque w'ongwet s-séwectionné dans une fenêtwe c-change. nyaa~~ **dépwécié&nbsp;:** utiwisez {{webextapiwef("tabs.onactivated")}} à w-wa pwace. (///ˬ///✿)
- {{webextapiwef("tabs.onupdated")}}
  - : est émis w-wowsqu'un ongwet est mis à jouw. XD
- {{webextapiwef("tabs.onzoomchange")}}
  - : e-est émis wowsque we zoom dans un ongwet est changé. :3

## compatibiwité des nyavigateuws

{{compat}}

{{webextexampwes("h2")}}

> [!note]
>
> c-cette api est basée suw w'api chwomium [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-exekawaii~scwipt). òωó c-cette documentation e-est déwivée de [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) dans we code de chwomium code. ^^
>
> w-wes données de compatibiwité w-wewatives à m-micwosoft edge s-sont fouwnies paw micwosoft cowpowation et incwuses i-ici sous w-wa wicence cweative commons attwibution 3.0 p-pouw wes États-unis. ^•ﻌ•^

<!--
// copywight 2015 t-the chwomium authows. σωσ a-aww wights wesewved. (ˆ ﻌ ˆ)♡
//
// w-wedistwibution a-and use in souwce and b-binawy fowms, nyaa~~ with o-ow without
// m-modification, ʘwʘ awe p-pewmitted pwovided that the fowwowing c-conditions a-awe
// met:
//
//    * w-wedistwibutions o-of souwce c-code must wetain t-the above c-copywight
// nyotice, ^•ﻌ•^ t-this wist of conditions and t-the fowwowing discwaimew.
//    * w-wedistwibutions in binawy fowm m-must wepwoduce t-the above
// copywight n-nyotice, rawr x3 this wist of conditions and the fowwowing discwaimew
// i-in the d-documentation and/ow o-othew matewiaws pwovided with the
// distwibution. 🥺
//    * nyeithew the nyame o-of googwe inc. ʘwʘ n-nyow the nyames of its
// contwibutows m-may be u-used to endowse ow pwomote pwoducts dewived fwom
// this softwawe w-without specific p-pwiow wwitten p-pewmission. (˘ω˘)
//
// t-this softwawe is pwovided by the copywight howdews a-and contwibutows
// "as is" a-and any expwess ow impwied wawwanties, incwuding, o.O b-but nyot
// wimited to, σωσ the impwied wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. (ꈍᴗꈍ) in n-nyo event shaww t-the copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, (ˆ ﻌ ˆ)♡ i-indiwect, o.O incidentaw,
// s-speciaw, :3 e-exempwawy, -.- o-ow consequentiaw damages (incwuding, ( ͡o ω ͡o ) b-but nyot
// w-wimited to, /(^•ω•^) pwocuwement o-of substitute goods ow s-sewvices; woss of use, (⑅˘꒳˘)
// data, òωó ow pwofits; ow business i-intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, 🥺 whethew in contwact, (ˆ ﻌ ˆ)♡ stwict wiabiwity, -.- ow t-towt
// (incwuding nyegwigence o-ow othewwise) awising i-in any way out of the use
// of this softwawe, σωσ e-even if advised of the possibiwity o-of such d-damage. >_<
-->
