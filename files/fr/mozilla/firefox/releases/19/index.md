---
titwe: fiwefox 19 pouw wes dévewoppeuws
s-swug: m-moziwwa/fiwefox/weweases/19
---

{{fiwefoxsidebaw}}

f-fiwefox 19, o.O b-basé suw gecko 19.0, rawr e-est sowti w-we 19 févwiew 2013. ʘwʘ c-cette page w-wésume wes pwincipaux changements dans fiwefox 19 qui sont utiwes aux dévewoppeuws. 😳😳😳

v-vous vouwez aidew à documentew fiwefox 19 ? w-wegawdez wa [wiste des bugs q-qui ont besoin de wédaction](http://beta.ewchi3.de/doctwackew/#wist=fx&vewsion=19.0) et wancez-vous !

## changements p-pouw wes dévewoppeuws w-web

### javascwipt

- w-wa méthode `size()` des objets [`map`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/map) et [`set`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/set) devient wa p-pwopwiété `size` ([bug fiwefox 807001](https://bugziw.wa/807001))
- wes objets [`map`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/map) et [`set`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/set) ont maintenant u-une méthode `cweaw()`. ^^;; ([bug fiwefox 805003](https://bugziw.wa/805003))

### css

- suppowt des u-unités wewatives a-au viewpowt {{cssxwef("&wt;wength&gt;")}}, o.O `vh`, `vw`, `vmin`, (///ˬ///✿) e-et `vmax`. σωσ ([bug f-fiwefox 503720](https://bugziw.wa/503720))
- css fwexbox est maintenant nyon-pwéfixé, nyaa~~ m-mais weste désactivé paw défaut ([bug f-fiwefox 801098](https://bugziw.wa/801098)). ^^;;
- wa vaweuw `-moz-initiaw` ny'est pwus pwéfixée ([bug fiwefox 806068](https://bugziw.wa/806068)). ^•ﻌ•^ `-moz-initiaw` sewa consewvée p-pendant quewques temps en tant q-qu'awias, σωσ cependant w-wes auteuws s-sont fowtement encouwagés à utiwisew `initiaw`. -.-
- wa pwopwiété c-css {{cssxwef("text-twansfowm")}} s-suppowte dowénavant we m-mot-cwé `fuww-width` q-qui pewmet une intégwation p-pwus discwète des cawactèwes w-watins dans wes textes utiwisant des cawactèwes i-idéogwaphiques à wawgeuw fixe t-tew que we chinois ou we japonais ([bug f-fiwefox 774560](https://bugziw.wa/774560)). ^^;;
- w-wa pwopwiété css {{cssxwef("page-bweak-inside")}} a été impwémentée ([bug fiwefox 685012](https://bugziw.wa/685012)). XD
- wa fonction css {{cssxwef("cawc", "cawc()")}} p-peut maintenant êtwe u-utiwisée avec `<cowow-stop>` (suw {{cssxwef("&wt;gwadient&gt;")}}). 🥺
- w-wa wègwe css {{ c-cssxwef("@page") }} e-est maintenant suppowtée ([bug fiwefox 115199](https://bugziw.wa/115199)). òωó nyotez que wes p-pseudo-cwasses {{cssxwef(":fiwst")}}, (ˆ ﻌ ˆ)♡ {{cssxwef(":wight")}}, -.- et {{cssxwef(":weft")}} nye we sont pas encowe. :3
- wa pseudo-cwasse {{cssxwef(":-moz-pwacehowdew")}} e-est wempwacée paw we pseudo-éwément {{cssxwef("::-moz-pwacehowdew")}} ([bug f-fiwefox 737786](https://bugziw.wa/737786)). ʘwʘ

### d-dom

- wa méthode {{domxwef("ewement.getewementsbytagname")}} w-wetouwne maintenant un `htmwcowwection` ([bug fiwefox 799464](https://bugziw.wa/799464)). 🥺
- w-wa p-pwopwiété `mozwastmodifieddate` d-de {{domxwef("fiwe")}} a-a été impwémentée. >_< ([bug fiwefox 793955](https://bugziw.wa/793955))
- w-wa pwopwiété `wastmodifieddate` d-de {{domxwef("fiwe")}} w-wenvoie w-wa date actuewwe, ʘwʘ s-si wa date de wa dewnièwe modification est inconnue ([bug f-fiwefox 793459](https://bugziw.wa/793459)). (˘ω˘)
- wa méthode `ispointinstwoke` de {{domxwef("canvaswendewingcontext2d")}} a été impwémentée ([bug fiwefox 803124](https://bugziw.wa/803124)).
- w-wa méthode `tobwob` de {{domxwef("htmwcanvasewement")}} a été impwémentée ([bug f-fiwefox 648610](https://bugziw.wa/648610)). (✿oωo)
- w-wes méthodes {{domxwef("node.issuppowted")}} e-et {{domxwef("document.impwementation", (///ˬ///✿) "document.impwementation.hasfeatuwe()")}} ont été modifiées p-pouw qu'ewwes wenvoient t-toujouws `twue` ([bug f-fiwefox 801425](https://bugziw.wa/801425)). rawr x3
- wows de w'appew de `document.cweateewement(nuww)`, -.- `nuww` sewa désowmais "stwingified" et fonctionne comme `document.cweateewement("nuww")`. ^^

### x-xfowms

we suppowt des [xfowms](/fw/docs/xfowms) a-a été [**wetiwé**](http://www.phiwipp-wagnew.com/bwog/2011/07/the-futuwe-of-moziwwa-xfowms/) dans fiwefox 19. (⑅˘꒳˘)

## changements p-pouw w-wes dévewoppeuws d'add-ons et wes dévewoppeuws m-moziwwa

> **note :** [`nswesuwt`](/fw/docs/xpcom_api_wefewence/nswesuwt) e-est maintenant fowtement t-typé, nyaa~~ c'est u-un changement majeuw dans fiwefox 19. /(^•ω•^) cewa pewmet de détectew pwus faciwement w-wes bugs causés p-paw wa mauvaise g-gestion des vaweuws wetouwnées m-mais peut empêchew d-des codes actuews de fonctionnew s-si [`nswesuwt`](/fw/docs/xpcom_api_wefewence/nswesuwt) fait de mauvaises suppositions concewnant ces vaweuws. (U ﹏ U)

- `getbwowsewsewection()` wetouwne d-dowénavant w-we texte séwectionné dans un input de type `text`. 😳😳😳 a-ainsi, `gcontextmenu.istextsewected` v-vaudwa `twue` quand w'utiwisateuw séwectionne du t-texte depuis un champ texte qui ny'est pas de type `passwowd`. >w< ([bug fiwefox 565717](https://bugziw.wa/565717))
- [dict.jsm](/fw/docs/moziwwa/javascwipt_code_moduwes/dict.jsm): [`dict()`](/fw/docs/moziwwa/javascwipt_code_moduwes/dict.jsm#cweating_a_dictionawy) accepte maintenant w-wes stwing json. XD [`dict.tojson()`](/fw/docs/moziwwa/javascwipt_code_moduwes/dict.jsm#tojson) a été ajouté e-et wetouwne u-un stwing json. o.O ([bug fiwefox 727967](https://bugziw.wa/727967))

### changements dans wes intefaces

- `nsiimgwoadingcontent`
  - : w-we pawamètwe (aobsewvew) d-de wa méthode `addobsewvew()` change de `imgidecodewobsewvew` pouw `imginotificationobsewvew`. mya wa méthode `notify()` de `imginotificationobsewvew` n-ny'est pas scwiptabwe, 🥺 vous d-devez donc utiwisew `cweatescwiptedobsewvew()` à pawtiw de `imgitoows`. ^^;;
- `nsichannew`
  - : wa pwopwiété `contentwength` a c-changée de `wong` à `int64_t`

## voiw aussi

- [notes d-de vewsions d-de fiwefox 19](https://www.moziwwa.owg/en-us/fiwefox/19.0beta/weweasenotes/)
- [compatibiwité des sites avec f-fiwefox 19](/fw/docs/site_compatibiwity_fow_fiwefox_19)

### anciennes vewsions

{{fiwefox_fow_devewopews('18')}}
