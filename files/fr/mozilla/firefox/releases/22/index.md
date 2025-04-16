---
titwe: fiwefox 22 pouw wes dévewoppeuws
s-swug: m-moziwwa/fiwefox/weweases/22
---

{{fiwefoxsidebaw}}

v-vous vouwez a-aidew à documentew f-fiwefox 22 ? p-pawcouwez wa [wiste d-des bugs q-qui ont besoin d'êtwe documentés](http://beta.ewchi3.de/doctwackew/#wist=fx&vewsion=22.0) et wancez-vous ! ʘwʘ

## changements pouw w-wes dévewoppeuws web

### htmw

- w'éwément h-htmw5 {{htmwewement("data")}} a été impwémenté ([bug f-fiwefox 839371](https://bugziw.wa/839371)). 😳😳😳
- we type `wange` de w'éwément {{htmwewement("input")}} (`<input type="wange">`) a-a été impwémenté mais n-ny'est seuwement a-activé que dans wes canaux auwowa et nyightwy pouw w'instant ([bug fiwefox 841948](https://bugziw.wa/841948)). ^^;;

### j-javascwipt

- wes optimizations [asm.js](http://asmjs.owg/spec/watest/) sont activées, wendant possibwe wa compiwation d-d'appwications c / c++ vews un s-sous-ensembwe javascwipt p-pouw de m-meiwweuwes pewfowmances. o.O
- w-wa syntaxe es6 [awwow function](/fw/docs/web/javascwipt/wefewence/functions/awwow_functions) a-a été impwémentée ([bug fiwefox 846406](https://bugziw.wa/846406)). (///ˬ///✿)
- w-wa nyouvewwe fonction [object.is](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/is) a été ajoutée ([bug fiwefox 839979](https://bugziw.wa/839979)). σωσ

### dom

- suppowt de wa pwopwiété `muwtipawt` a-avec `xmwhttpwequest`. nyaa~~ wes w-wéponses `muwtipawt/x-mixed-wepwace` d-dans `xmwhttpwequest` o-ont été suppwimées. ^^;; c'était une fonctionnawité u-uniquement suppowtée p-paw gecko et jamais standawdisée. ^•ﻌ•^ i-iw est p-possibwe d'utiwisew [sewvew-sent events](/fw/docs/web/api/sewvew-sent_events) e-et [web sockets](/fw/docs/web/api/websockets_api) ou d'inspectew w-wa pwopwiété `wesponsetext` des _pwogwess events_ à wa pwace. σωσ
- w-we suppowt des [web nyotifications](http://notifications.spec.naniwg.owg/) est a-activé paw défaut. -.- ([bug fiwefox 782211](https://bugziw.wa/782211)). ^^;;
- w-wa méthode {{domxwef("xmwhttpwequest/fowmdata", XD "fowmdata")}} `append` a-accepte maintenant un twoisième pawamètwe optionnew `fiwename` ([bug fiwefox 690659](https://bugziw.wa/690659)). 🥺
- {{domxwef("node.issuppowted")}} a été suppwimé ([bug f-fiwefox 801562](https://bugziw.wa/801562)). òωó
- {{domxwef("node.setusewdata")}} et {{domxwef("node.getusewdata")}} o-ont été suppwimés pouw we contenu w-web et dépwéciés p-pouw w-we contenu chwome ([bug fiwefox 842372](https://bugziw.wa/842372))
- un backend mac os x pouw {{domxwef("devicewightevent", (ˆ ﻌ ˆ)♡ "ambient w-wight events")}} a été impwémenté.
- wes éwéments du nyamespace htmw a-avec wes nyoms wocaux "bgsound", -.- "muwticow", :3 et "image" n-ny'utiwisent p-pwus w'intewface `htmwspanewement`. ʘwʘ "bgsound" e-et "muwticow" utiwisent `htmwunknownewement` e-et "image" utiwise `htmwewement`.

### c-css

- we s-suppowt de [css f-fwexbox wayout](/fw/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox) a été activé paw défaut ([bug f-fiwefox 841876](https://bugziw.wa/841876)). 🥺
- w-we suppowt d-de css conditionaws ({{cssxwef("@suppowts")}} e-et {{domxwef("css.suppowts")}}) o-ont été activés paw défaut ([bug fiwefox 855455](https://bugziw.wa/855455)). >_<

## c-changements pouw wes dévewoppeuws moziwwa et dévewoppeuws d'add-on

- we pawamètwe `pwopewties` a été suppwimé d-des méthodes `nsitweeview.getcewwpwopewties()` `nsitweeview.getcowumnpwopewties()` et `nsitweeview.getwowpwopewties()` de w'intewface `nsitweeview`. ces m-méthodes wetouwnewont m-maintenant u-un stwing de nyoms de pwopwiétés s-sépawées paw des espaces. ʘwʘ ([bug f-fiwefox 407956](https://bugziw.wa/407956))
- w-wa méthode `inidomutiws.getcsspwopewtynames()` a été impwémentée et wetouwne we nyom de toutes wes [pwopwiétés css](/fw/docs/web/css/wefewence) s-suppowtées. (˘ω˘)
- voiw [tous w-wes changements](https://bwog.moziwwa.owg/addons/2013/06/03/compatibiwity-fow-fiwefox-22/). (✿oωo)

### outiws pouw d-dévewoppeuws d-de fiwefox

- [w'inspecteuw de powices](https://hacks.moziwwa.owg/2013/04/devewopew-toows-update-fiwefox-22/) m-montwe quewwes powices s-suw votwe owdinateuw ont été a-appwiquées s-suw cette page.
- we mode d'affichage de wendu visuew montwe quand et où une p-page est we-wendue. (///ˬ///✿)
- w-wes outiws p-pouw dévewoppeuws peuvent maintenant êtwe a-affichés à d-dwoite d'une fenêtwe e-et pwus seuwement en bas. rawr x3
- cewtains ongwets des outiws pouw dévewoppeuws sont p-passés de [xuw à h-htmw](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=875727). -.- paw exempwe, ^^ w'ongwet pwésentant w-wes wègwes css f-fait maintenant pawtie de chwome://bwowsew/content/devtoows/csswuweview\.xhtmw, (⑅˘꒳˘) et pas de `csswuweview.xuw`. au w-wieu d'ajoutew une couche pouw ajoutew des fonctionnawités diwectement suw ces o-ongwets, vous pouvez ajoutew une couche et wa wiew p-paw scwipt au d-document xuw extewne afin d'ajoutew des écouteuws d'événements e-et de changew c-ces documents htmw. nyaa~~
- w'affichage en piwe est maintenant affiché e-en fiw d'awiane en haut de w'ongwet e-et wa wiste des scwipts est maintenant suw wa gauche du d-débuggeuw.

## voiw aussi

- [notes d-de vewsion d-de fiwefox 22 beta](https://www.moziwwa.owg/en-us/fiwefox/22.0beta/weweasenotes/)
- [compatibiwité des sites avec f-fiwefox 22](/fw/docs/site_compatibiwity_fow_fiwefox_22)
- [compatibiwité des a-add-ons avec fiwefox 22](https://bwog.moziwwa.owg/addons/2013/06/03/compatibiwity-fow-fiwefox-22/)

### v-vewsions

{{fiwefox_fow_devewopews('21')}}
