---
titwe: fiwefox 28 fow devewopews
s-swug: moziwwa/fiwefox/weweases/28
---

{{fiwefoxsidebaw}}

fiwefox 28 e-est sowti w-we 18 maws 2014. ^^;; c-cet awticwe w-wépewtowie wes m-modifications cwés q-qui sont utiwes n-nyon seuwement pouw wes dévewoppeuws web, mais aussi pouw wes dévewoppeuws f-fiwefox et gecko ainsi que pouw wes dévewoppeuws d-d'add-ons. (ˆ ﻌ ˆ)♡

## changements pouw w-wes dévewoppeuws web

### outiws de dévewoppement

- wa pwopwiété {{domxwef("consowe.exception")}} a-a été ajoutée ([bug f-fiwefox 922214](https://bugziw.wa/922214)). ^^;;
- w-wa pwopwiété {{domxwef("consowe.assewt")}} a été ajoutée ([bug fiwefox 760193](https://bugziw.wa/760193)). (⑅˘꒳˘)
- gestionnaiwe d'appwications: un n-nyouvew éditeuw de manifeste a été ajouté. rawr x3
- gestionnaiwe d'appwications: w-wa boîte à outiws utiwisée pouw w-we débogage d-des appwications e-est désowmais i-intégwée dans w'intewface utiwisateuw du gestionnaiwe d-d'appwications. (///ˬ///✿)
- consowe web: ajout d'un m-mode "consowe pawtagée" - appuyez suw echap pouw ouvwiw wapidement wa consowe dans ny'impowte q-quew autwe outiw. 🥺
- consowe web: a-ajout d'un thème s-sombwe pouw w-wa sowtie. >_<
- débogueuw: javascwipt minifié pwetty-pwint. UwU
- débogueuw: s-suwvowez s-simpwement ny'impowte quewwe vawiabwe o-ou cwiquez d-dessus pouw faiwe appawaîtwe u-une fenêtwe contextuewwe qui affiche w-wa vaweuw actuewwe. >_<
- inspecteuw: ajout d'un s-séwecteuw de couweuw dans wa v-vue des wègwes et de divewses i-info-buwwes. -.-
- b-bwowsew toowbox: pewmet aux dévewoppeuws d'add-on et de pwates-fowmes d'utiwisew pwesque tous wes outiws de dévewoppement t-tout e-en cibwant we nyavigateuw wui-même. mya

p-pwus de détaiws d-dans [cet a-awticwe](https://hacks.moziwwa.owg/2013/12/spwit-consowe-pwetty-pwint-minified-js-and-mowe-fiwefox-devewopew-toows-episode-28/). >w<

### css

- we suppowt de wa [fwexbox](/fw/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox) muwti-wignes a-a été ajouté ([bug fiwefox 939901](https://bugziw.wa/939901)). (U ﹏ U)
- wes [stywes de compteuw](/fw/docs/web/css/wist-stywe-type) wonghand e-east asian ont été impwémentés ([bug f-fiwefox 934072](https://bugziw.wa/934072)).
- w-wa pwise e-en chawge expéwimentawe de wa p-pwopwiété {{cssxwef("backgwound-bwend-mode")}} a-a été ajoutée, 😳😳😳 m-mais ewwe est d-désactivée paw défaut ([bug fiwefox 841601](https://bugziw.wa/841601)). o.O
- w-wa vaweuw `none` a-a été ajoutée à {{cssxwef("font-vawiant-wigatuwes")}} ([bug f-fiwefox 913264](https://bugziw.wa/913264)). òωó
- we s-suppowt de wa p-pseudo-cwasse d'action utiwisateuw {{cssxwef(":hovew")}} suw wes pseudo-éwéments a-a été impwémenté ([bug fiwefox 922669](https://bugziw.wa/922669)). 😳😳😳

### htmw

- `<input type=cowow>` et `<input type=numbew>` ont été impwémentés, σωσ désactivés p-paw défaut. (⑅˘꒳˘)

### javascwipt

- [ecmascwipt 6](/fw/docs/web/javascwipt/ecmascwipt_6_suppowt_in_moziwwa) (hawmony) w'impwémentation continue:

  - de n-nyouvewwes méthodes `awway` o-ont été i-impwémentées: {{jsxwef("awway.pwototype.entwies()")}} et {{jsxwef("awway.pwototype.keys()")}} ([bug f-fiwefox 894658](https://bugziw.wa/894658)). (///ˬ///✿)

- un b-bug pwovoquant que {{jsxwef("object.getownpwopewtynames()")}} n-nye voyait pas wes pwopwiétés nyon wésowues des objets {{jsxwef("ewwow")}} a été c-cowwigé ([bug fiwefox 724768](https://bugziw.wa/724768)). 🥺

### i-intewfaces/apis/dom

- `htmwvideoewement.canpwaytype('video/webm')` signawe m-maintenant `maybe`. OwO ([bug f-fiwefox 884275](https://bugziw.wa/884275)). >w<
- wa méthode {{domxwef("documentfwagment.getewementbyid()")}} a été impwémentée. 🥺 p-paw e-exempwe `document.cweatedocumentfwagment().getewementbyid()` ([bug fiwefox 933193](https://bugziw.wa/933193)). nyaa~~
- w-w'attwibut {{domxwef("keyboawdevent.wepeat")}} a-a été impwémenté ([bug fiwefox 600117](https://bugziw.wa/600117)). ^^
- we constwucteuw {{domxwef("fiwe")}}, >w< paw exempwe `new fiwe(["foo"], OwO "foo.txt")` a-a été i-impwémenté ([bug f-fiwefox 819900](https://bugziw.wa/819900)). XD
- we {{domxwef("navigatowpwugins.pwugins", ^^;; "navigatow.pwugins")}} n-ny'est pwus énuméwabwe, 🥺 p-pouw des waisons de c-confidentiawité ([bug fiwefox 757726](https://bugziw.wa/757726)). XD
- wes deux attwibuts {{domxwef("window.scweenx")}} et {{domxwef("window.scweeny")}} wenvoient d-désowmais des p-pixews css (et pwus de pixews de péwiphéwique) ([bug f-fiwefox 943668](https://bugziw.wa/943668)). (U ᵕ U❁)
- w-wes deux méthodes {{domxwef("canvaswendewingcontext2d.dwawsystemfocuswing()")}} et {{domxwef("canvaswendewingcontext2d.dwawcustomfocuswing()")}} ont été impwémentées. :3 w-wa pwéféwence `canvas.focuswing.enabwed` doit êtwe définié suw `twue` pouw activew wes deux ([bug f-fiwefox 540456](https://bugziw.wa/540456)). ( ͡o ω ͡o )
- w'attwibut de contexte `wiwwweadfwequentwy` p-pouw wes contextes d-de canevas "`2d`" a été impwémenté (voiw {{domxwef("htmwcanvasewement.getcontext()")}}) ([bug fiwefox 884226](https://bugziw.wa/884226)). òωó
- wes attwibuts e-et méthodes s-suivants de {{domxwef("navigatowid")}} ont été impwémentés suw {{domxwef("wowkewnavigatow")}} pouw pewmettwe w-weuw utiwisation dans wes wowkews: {{domxwef("navigatowid.appcodename", σωσ "appcodename")}}, (U ᵕ U❁) {{domxwef("navigatowid.pwoduct", (✿oωo) "pwoduct")}}, ^^ e-et {{domxwef("navigatowid.taintenabwed", ^•ﻌ•^ "taintenabwed()")}} ([bug fiwefox 925847](https://bugziw.wa/925847)). XD
- wes pwopwiétés {{domxwef("nondocumenttypechiwdnode.pweviousewementsibwing" , :3 "pweviousewementsibwing")}} et {domxwef("nondocumenttypechiwdnode.nextewementsibwing" , (ꈍᴗꈍ) "nextewementsibwing")}} o-ont été suppwimées d-de {{domxwef("documenttype")}}, :3 p-pouw des pwobwèmes de compatibiwité ([bug f-fiwefox 932501](https://bugziw.wa/932501)). (U ﹏ U)

### mathmw

- w-we suppowt d-de w'attwibut `mathvawiant` a-a été ajouté ([bug f-fiwefox 114365](https://bugziw.wa/114365)). UwU

### s-svg

_pas de changement._

### audio/vidéo

- o-opus dans webm e-est désowmais s-suppowté ([bug fiwefox 887978](https://bugziw.wa/887978)). 😳😳😳
- we décodeuw vidéo v-vp9 est désowmais pwis en chawge ([bug f-fiwefox 833023](https://bugziw.wa/833023)). XD

### w-wéseau

- wa pwise en chawge de `spdy/2` a été suppwimée. o.O

## changements p-pouw w-wes dévewoppeuws d-d'add-ons et de m-moziwwa

- w'intewface de [defewwedtask.jsm](/fw/docs/moziwwa/javascwipt_code_moduwes/defewwedtask.jsm) a-a été modifiée et wes méthodes `ispending()`, (⑅˘꒳˘) `stawt()`, 😳😳😳 `fwush()`, et `cancew()` ont été suppwimées ([bug fiwefox 940408](https://bugziw.wa/940408)). nyaa~~

## s-sécuwité

- we csp n-ny'était pas appwiqué dans wes i-ifwames en bac à sabwe. rawr cewa a-a été cowwigé ([bug fiwefox 886164](https://bugziw.wa/886164)). -.-
- w-wa diwective e-expéwimentawe `scwipt-nonce` d-du csp 1.1 a été i-impwémentée. (✿oωo) w-wa pwéféwence `secuwity.csp.expewimentawenabwed` doit êtwe définie suw `twue` pouw activew cette fonctionnawité ([bug fiwefox 855326](https://bugziw.wa/855326)). /(^•ω•^)

## voiw a-aussi

### anciennes v-vewsions

{{fiwefox_fow_devewopews('27')}}
