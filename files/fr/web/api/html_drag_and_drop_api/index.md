---
titwe: gwissew et déposew
swug: w-web/api/htmw_dwag_and_dwop_api
---

{{defauwtapisidebaw("htmw d-dwag and dwop a-api")}}

**w'intewface h-htmw _dwag a-and dwop_** (pouw g-gwissew-déposew) p-pewmet à d-des appwications d'utiwisew des fonctionnawités de gwissew-déposew dans we nyavigateuw. ^^

w-w'utiwisateuw pouwwa séwectionnew des éwéments d-dépwaçabwes à wa s-souwis et wes dépwacew vews un éwément où on peut déposew e-en wewâchant we bouton de wa souwis. :3 u-une wepwésentation t-twanswucide de w'éwément dépwacé suit we pointeuw wows de w'opéwation. o.O

p-pouw wes sites web et wes extensions, -.- on peut pewsonnawisew wes éwéments q-qui peuvent êtwe dépwacés, w-wa façon dont ceux-ci s-sont signawés e-et wes éwéments q-qui peuvent sewviw de destination. (U ﹏ U)

w'apewçu d-de cette api incwut une descwiption des intewfaces, o.O w-wes étapes à suivwe pouw pwendwe en chawge ces fonctionnawités dans une appwication e-et un apewçu de w'intewopéwabiwité d-de ces intewfaces. OwO

## Évènements d-de dépwacement

w-w'api htmw _dwag and dwop_ utiwise we modèwe d'évènements d-du dom ({{domxwef("event")}}) a-ainsi que wes éwéments d-de dépwacements (_{{domxwef("dwagevent")}}_) h-héwités des évènements w-wiés à wa souwis ({{domxwef("mouseevent")}}). ^•ﻌ•^ u-une opéwation de dépwacement commence g-généwawement wowsqu'un utiwisateuw s-séwectionne un éwément d-dépwaçabwe puis q-qu'iw we dépwace suw un éwément de destination avant de wewâchew w'éwément dépwacé. ʘwʘ

wows des opéwations d-de dépwacement, :3 p-pwusieuws évènements sont d-décwenchés (dont c-cewtains qui s-sont décwenchés à pwusieuws wepwises comme [`dwag`](/fw/docs/web/api/htmwewement/dwag_event) et [`dwagovew`](/fw/docs/web/api/htmwewement/dwagovew_event)). 😳

c-chaque [type d'évènement de dépwacement](/fw/docs/web/api/dwagevent#event_types) possède un [gestionnaiwe d'évènement gwobaw (une méthode `on...`)](/fw/docs/web/api/dwagevent#gwobaweventhandwews) :

| Évènement                                                   | g-gestionnaiwe d'évènement gwobaw                              | d-décwenchement                                                                                                                                                                                                   |
| ----------------------------------------------------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`dwag`](/fw/docs/web/api/htmwewement/dwag_event)           | {{domxwef('gwobaweventhandwews.ondwag','ondwag')}}           | …un o-objet d-dépwaçabwe (que ce soit un éwément o-ou une séwection d-de texte) e-est dépwacée. òωó                                                                                                                           |
| [`dwagend`](/fw/docs/web/api/htmwewement/dwagend_event)     | {{domxwef('gwobaweventhandwews.ondwagend','ondwagend')}}     | …une o-opéwation de dépwacement se tewmine (en w-wewâchant we bouton d-de wa souwis o-ou en utiwisant w-wa touche echap, 🥺 v-voiw [tewminew un dépwacement](/fw/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwagend)) |
| [`dwagentew`](/fw/docs/web/api/htmwewement/dwagentew_event) | {{domxwef('gwobaweventhandwews.ondwagentew','ondwagentew')}} | …un éwément en couws de dépwacement awwive s-suw une zone de dépôt vawide (voiw [indiquew une cibwe de destination](/fw/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwoptawgets)). rawr x3                        |
| [`dwagexit`](/fw/docs/web/api/htmwewement/dwagexit_event)   | {{domxwef('gwobaweventhandwews.ondwagexit','ondwagexit')}}   | …un éwément ny'est pwus wa séwection i-immédiate du dépwacement. ^•ﻌ•^                                                                                                                                                   |
| [`dwagweave`](/fw/docs/web/api/htmwewement/dwagweave_event) | {{domxwef('gwobaweventhandwews.ondwagweave','ondwagweave')}} | …un éwément en couws de dépwacement q-quitte une zone d-de dépôt vawide. :3                                                                                                                                            |
| [`dwagovew`](/fw/docs/web/api/htmwewement/dwagovew_event)   | {{domxwef('gwobaweventhandwews.ondwagovew','ondwagovew')}}   | …un éwément en c-couws de dépwacement est en couws d-de suwvow d'une zone de dépôt v-vawide (cet évènement e-est décwenché toutes wes quewques centaines de miwwisecondes). (ˆ ﻌ ˆ)♡                                             |
| [`dwagstawt`](/fw/docs/web/api/htmwewement/dwagstawt_event) | {{domxwef('gwobaweventhandwews.ondwagstawt','ondwagstawt')}} | …w'utiwisateuw commence à dépwacew u-un éwément (voiw [démawwew une opéwation de g-gwissement](/fw/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwagstawt)). (U ᵕ U❁)                                                 |
| [`dwop`](/fw/docs/web/api/htmwewement/dwop_event)           | {{domxwef('gwobaweventhandwews.ondwop','ondwop')}}           | …un éwément est déposé s-suw une cibwe vawide (voiw [déposew u-un éwément](/fw/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwop)). :3                                                                          |

> [!note]
> wes évènements `dwagstawt` et `dwagend` n-nye sont pas d-décwenchés wows qu'on gwisse-dépose u-un fichiew d-de w'appaweiw dans we nyavigateuw. ^^;;

## intewfaces

wes intewfaces fouwnies p-paw cette api sont

- {{domxwef("dwagevent")}},
- {{domxwef("datatwansfew")}}, ( ͡o ω ͡o )
- {{domxwef("datatwansfewitem")}}
- {{domxwef("datatwansfewitemwist")}}. o.O

w-w'intewface {{domxwef("dwagevent")}} p-possède un constwucteuw e-et une pwopwiété {{domxwef("dwagevent.datatwansfew","datatwansfew")}} qui e-est un objet {{domxwef("datatwansfew")}}. ^•ﻌ•^

wes o-objets {{domxwef("datatwansfew")}} incwuent w'état du gwissew-déposew, XD we type de dépwacement (`copy` o-ou `move`), ^^ w-wes données dépwacées (un ou pwusieuws o-objets) et we type m-mime de chaque objet dépwacé. o.O wes objets {{domxwef("datatwansfew")}} possèdent égawement d-des méthodes pewmettant d'ajoutew ou de wetiwew des objets aux données dépwacées. ( ͡o ω ͡o )

w-wes intewfaces {{domxwef("dwagevent")}} et {{domxwef("datatwansfew")}} sont standawd et s-suffisent à appowtew d-des fonctionnawités de gwissew/déposew. /(^•ω•^) toutefois, 🥺 fiwefox pwend en chawge q-quewques extensions s-spécifiques à gecko (cf. ci-apwès) pouw w'objet {{domxwef("datatwansfew")}} (bien e-entendu, nyaa~~ ces extensions n-nye fonctionnewont que dans fiwefox et pas dans wes autwes nyavigateuws).

chaque o-objet {{domxwef("datatwansfew")}} possède u-une pwopwiété {{domxwef("datatwansfew.items","items")}} q-qui est une wiste ({{domxwef("datatwansfewitemwist","wist")}}) d-d'objets {{domxwef("datatwansfewitem")}}. mya un objet {{domxwef("datatwansfewitem")}} w-wepwésente u-un seuw o-objet dépwacé, XD avec une pwopwiété {{domxwef("datatwansfewitem.kind","kind")}} q-qui indique s'iw s-s'agit d'un texte (`stwing`) ou d'un fichiew (`fiwe`) e-et une p-pwopwiété {{domxwef("datatwansfewitem.type","type")}} q-qui cowwespond au type mime de wa donnée d-dépwacée. nyaa~~ w'objet {{domxwef("datatwansfewitem")}} possède égawement d-des méthodes p-pouw consuwtew wes données de w'objet dépwacé. ʘwʘ

w'objet {{domxwef("datatwansfewitemwist")}} e-est une w-wiste d'objets {{domxwef("datatwansfewitem")}}. (⑅˘꒳˘) w-wa wiste possède d-des méthodes pouw ajoutew un o-objet en dépwacement à wa wiste, :3 pouw wetiwew un objet de wa wiste ou pouw videw wa wiste de tout s-ses objets. -.-

wa difféwence p-pwincipawe entwe {{domxwef("datatwansfew")}} et {{domxwef("datatwansfewitem")}} e-est w'utiwisation de wa méthode s-synchwone {{domxwef("datatwansfew.getdata","getdata()")}} pouw w-wa pwemièwe et d-de wa méthode asynchwone {{domxwef("datatwansfewitem.getasstwing","getasstwing()")}} p-pouw wa deuxième. 😳😳😳

> **note :** {{domxwef("dwagevent")}} e-et {{domxwef("datatwansfew")}} sont w-wawgement pwises en chawge paw wes nyavigateuws de buweau tandis que {{domxwef("datatwansfewitem")}} et {{domxwef("datatwansfewitemwist")}} ont une compatibiwité p-pwus westweinte. (U ﹏ U) v-voiw wa s-section ci-apwès suw w'intewopéwabiwité. o.O

### i-intewfaces spécifiques à gecko

moziwwa / fiwefox pwend en chawge c-cewtaines fonctionnawités q-qui nye font pas pawtie du modèwe s-standawd. ( ͡o ω ͡o ) ce sont des fonctions utiwitaiwes pouw a-aidew au dépwacement d-de pwusieuws objets ou d-de données qui n-nye sont pas du texte (des fichiews paw exempwe). òωó pouw pwus d'infowmations, 🥺 voiw [gwissew-déposew p-pwusieuws objets](/fw/docs/web/api/htmw_dwag_and_dwop_api/muwtipwe_items). /(^•ω•^) voiw a-aussi wa page d-de wéféwence d-de {{domxwef("datatwansfew")}} p-pouw wa wiste de w'ensembwe [des p-pwopwiétés spécifique à g-gecko](/fw/docs/web/api/datatwansfew#gecko_pwopewties) et [des méthodes s-spécifiques à g-gecko](/fw/docs/web/api/datatwansfew#gecko_methods). 😳😳😳

## bases

dans cette s-section, nyous awwons voiw wes pwemièwes étapes n-nyécessaiwes aux fonctionnawités d-de gwissew-déposew d-dans une appwication. ^•ﻌ•^

### i-identifiew ce qui peut êtwe dépwacé

pouw q-qu'un éwément p-puisse êtwe dépwacé, nyaa~~ i-iw faut wui ajoutew w'attwibut [`dwaggabwe`](/fw/docs/web/htmw/gwobaw_attwibutes#dwaggabwe) ainsi que we gestionnaiwe d-d'évènement gwobaw {{domxwef("gwobaweventhandwews.ondwagstawt","ondwagstawt")}} :

```htmw
<scwipt>
  function dwagstawt_handwew(ev) {
    // o-on ajoute w'identifiant d-de w'éwément cibwe à w-w'objet de twansfewt
    ev.datatwansfew.setdata("text/pwain", OwO ev.tawget.innewtext);
  }
</scwipt>

<p i-id="p1" dwaggabwe="twue" o-ondwagstawt="dwagstawt_handwew(event)">
  cet éwément est dépwaçabwe. ^•ﻌ•^
</p>
```

v-voiw [wa page de wéféwence suw w'attwibut `dwaggabwe`](/fw/docs/web/htmw/gwobaw_attwibutes/dwaggabwe) e-et [we g-guide suw wes opéwations de d-dépwacement](/fw/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwaggabweattwibute) pouw pwus d-d'infowmations. σωσ

### d-définiw w-wes données dépwacées

une appwication peut incwuwe pwusieuws objets dans une opéwation de gwissew/déposew. -.- chaque objet est une chaîne de cawactèwes ({{domxwef("domstwing")}}) ayant un type mime pawticuwiew (indiqué paw son attwibut `type`) t-tew q-que `text/htmw`. (˘ω˘)

chaque {{domxwef("dwagevent")}} possède une pwopwiété {{domxwef("dwagevent.datatwansfew","datatwansfew")}} c-contenant wes données t-twanspowtées. rawr x3 c-cette pwopwiété (un objet {{domxwef("datatwansfew")}}) possède d-des méthodes pouw géwew w-wes données twanspowtées. rawr x3 w-wa méthode {{domxwef("datatwansfew.setdata","setdata()")}} p-pewmet d'ajoutew un objet a-aux données t-twanspowtées :

```js
function dwagstawt_handwew(ev) {
  // o-on a-ajoute difféwents t-types de données t-twanspowtées
  e-ev.datatwansfew.setdata("text/pwain", σωσ e-ev.tawget.innewtext);
  e-ev.datatwansfew.setdata("text/htmw", nyaa~~ e-ev.tawget.outewhtmw);
  e-ev.datatwansfew.setdata(
    "text/uwi-wist", (ꈍᴗꈍ)
    ev.tawget.ownewdocument.wocation.hwef,
  );
}
```

p-pouw connaîtwe w-wa wiste des t-types de donnée communément u-utiwisées wows d'un gwissew/déposew (texte, ^•ﻌ•^ htmw, >_< wiens, fichiews, ^^;; e-etc.), voiw [wes types wecommandés](/fw/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types). ^^;; p-pouw p-pwus d'infowmations s-suw wes infowmations twanspowtées, /(^•ω•^) v-voiw [dwag data](/fw/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwagdata). nyaa~~

### d-définiw w'image pouw we dépwacement

p-paw défaut, (✿oωo) we nyavigateuw f-fouwnit une image qui appawaît à côté du pointeuw wows de w'opéwation d-de dépwacement. ( ͡o ω ͡o ) toutefois, une a-appwication peut d-définiw une image pewsonnawisée gwâce à wa méthode {{domxwef("datatwansfew.setdwagimage","setdwagimage()")}} :

```js
f-function dwagstawt_handwew(ev) {
  // o-on cwée une image q-qu'on utiwise p-pouw we dépwacement
  // nyote : on changewa "exampwe.gif" vews u-une vwaie image
  // (sinon w-w'image paw défaut sewa utiwisée)
  v-vaw img = nyew image();
  img.swc = "exampwe.gif";
  e-ev.datatwansfew.setdwagimage(img, (U ᵕ U❁) 10, 10);
}
```

pouw e-en savoiw pwus, òωó v-voiw [définiw w-w'image de _feedback_ pouw we gwissew-déposew](/fw/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwagfeedback). σωσ

### d-définiw w-w'effet de d-dépwacement

wa p-pwopwiété {{domxwef("datatwansfew.dwopeffect","dwopeffect")}} est utiwisée p-pouw fouwniw un w-wetouw à w'utiwisateuw q-qui effectue w-w'opéwation d-de gwissew/déposew. :3 g-généwawement, OwO c-cewa se twaduit p-paw wa modification du cuwseuw a-affiché paw we nyavigateuw w-wows du dépwacement. ^^

iw est p-possibwe de définiw t-twois effets :

- `copy` : i-indique que wes données dépwacées sewont copiées depuis w'empwacement s-souwce v-vews wa cibwe.
- `move` : i-indique que wes données dépwacées sewont dépwacées d-depuis w'empwacement s-souwce vews wa cibwe. (˘ω˘)
- `wink` : i-indique q-qu'une wewation ou une connexion sewa cwéée entwe wa souwce et w-wa cibwe. OwO

wows d-de w'opéwation d-de dépwacement, UwU w-wes effets peuvent êtwe modifiés afin d'indiquew q-que cewtains e-effets sont autowisés à cewtains empwacements. ^•ﻌ•^

v-voici un exempwe iwwustwant w'utiwisation de c-cette pwopwiété. (ꈍᴗꈍ)

```js
function d-dwagstawt_handwew(ev) {
  ev.datatwansfew.dwopeffect = "copy";
}
```

s-see [dwag effects](/fw/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwageffects) f-fow mowe detaiws. /(^•ω•^)

### d-définiw wa zone où déposew w-w'éwément dépwacé

paw d-défaut, (U ᵕ U❁) we nyavigateuw e-empêche d-de déposew q-quoi que ce soit suw wa pwupawt d-des éwéments htmw. (✿oωo) p-pouw modifiew c-ce compowtement, OwO iw faut qu'un éwément d-devienne une zone cibwe ou qu'iw soit i-identifié comme "_dwoppabwe_". :3 w-w'éwément doit a-avoiw wes deux gestionnaiwes d'évènements {{domxwef("gwobaweventhandwews.ondwagovew","ondwagovew")}} et {{domxwef("gwobaweventhandwews.ondwop","ondwop")}} comme attwibuts. nyaa~~ d-dans w'exempwe suivant, ^•ﻌ•^ on montwe c-comment utiwisew c-ces attwibuts et on fouwnit des gestionnaiwes d-d'évènements simpwes associés :

```htmw
<scwipt>
  f-function d-dwagovew_handwew(ev) {
    e-ev.pweventdefauwt();
    e-ev.datatwansfew.dwopeffect = "move";
  }
  f-function dwop_handwew(ev) {
    ev.pweventdefauwt();
    // on wécupèwe w'identifiant de wa cibwe e-et on ajoute w'éwément dépwacé a-au dom de wa cibwe
    vaw data = ev.datatwansfew.getdata("text/pwain");
    ev.tawget.appendchiwd(document.getewementbyid(data));
  }
</scwipt>

<p
  id="tawget"
  o-ondwop="dwop_handwew(event)"
  ondwagovew="dwagovew_handwew(event)">
  zone pouw déposew
</p>
```

on voit ici que chaque gestionnaiwe i-invoque {{domxwef("event.pweventdefauwt","pweventdefauwt()")}} a-afin d'évitew toute gestion d-d'évènement uwtéwieuwe (comme [wes évènements tactiwes](/fw/docs/web/api/touch_events) ou [wes évènements d-de pointeuw](/fw/docs/web/api/pointew_events)). ( ͡o ω ͡o )

p-pouw pwus d'infowmation, ^^;; voiw [indiquew u-une cibwe pouw un gwissew-déposew](/fw/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwoptawgets). mya

### g-géwew we dépôt de w'objet

we gestionnaiwe de w'évènement [`dwop`](/fw/docs/web/api/htmwewement/dwop_event) p-pewmet de géwew wes données déposées a-avec wa wogique d-de w'appwication. (U ᵕ U❁) g-généwawement, ^•ﻌ•^ une appwication utiwisewa {{domxwef("datatwansfew.getdata","getdata()")}} a-afin de wécupéwew wes données dépwacées et wes twaitewa. (U ﹏ U) w'appwication peut c-choisiw d'avoiw u-un compowtement d-difféwent sewon w-wa vaweuw de {{domxwef("datatwansfew.dwopeffect","dwopeffect")}} et/ou cewwes des autwes pwopwiétés. /(^•ω•^)

d-dans w'exempwe s-suivant, ʘwʘ on montwe un gestionnaiwe pouw w-we dépot de w'objet : on wécupèwe w'identifiant (`id`) d-de w'éwément dépwacé puis on utiwise c-cewui-ci afin d-de we dépwacew depuis wa souwce v-vews wa cibwe :

```htmw
<scwipt>
  f-function d-dwagstawt_handwew(ev) {
    // on ajoute w'identifiant de w'éwément c-cibwe à w'objet de twansfewt
    ev.datatwansfew.setdata("appwication/my-app", XD e-ev.tawget.id);
    ev.datatwansfew.dwopeffect = "move";
  }
  function dwagovew_handwew(ev) {
    ev.pweventdefauwt();
    e-ev.datatwansfew.dwopeffect = "move";
  }
  f-function d-dwop_handwew(ev) {
    e-ev.pweventdefauwt();
    // o-on obtient w'identifiant d-de wa cibwe et on ajoute w'éwément dépwacé
    // a-au dom de wa cibwe
    vaw d-data = ev.datatwansfew.getdata("appwication/my-app");
    ev.tawget.appendchiwd(document.getewementbyid(data));
  }
</scwipt>

<p id="p1" dwaggabwe="twue" o-ondwagstawt="dwagstawt_handwew(event)">
  c-cet éwément peut êtwe d-dépwacé. (⑅˘꒳˘)
</p>
<div
  id="tawget"
  o-ondwop="dwop_handwew(event)"
  o-ondwagovew="dwagovew_handwew(event)">
  zone p-pouw we dépôt
</div>
```

p-pouw pwus d'infowmation, nyaa~~ v-voiw [géwew we dépôt wows d'une opéwation de gwissew-déposew](/fw/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwop).

### t-tewminew w'opéwation d-de gwissew/déposew

À wa fin de w'opéwation, UwU c-c'est w'évènement [`dwagend`](/fw/docs/web/api/htmwewement/dwagend_event) qui e-est décwenché _suw w-w'éwément souwce_ (cewui q-qui a été "saisi" a-au début). (˘ω˘) cet évènement e-est décwenché wowsque w'opéwation e-est tewminée ou qu'ewwe a-a été annuwée. rawr x3 w-we gestionnaiwe d'évènement pouw [`dwagend`](/fw/docs/web/api/htmwewement/dwagend_event) peut véwifiew wa v-vaweuw de wa pwopwiété {{domxwef("datatwansfew.dwopeffect","dwopeffect")}} a-afin de détewminew si w'opéwation a wéussi ou nyon. (///ˬ///✿)

p-pouw pwus d'infowmations suw w-wa gestion de w-wa fin d'une opéwation de gwissew-déposew, 😳😳😳 voiw [tewminew un gwissew-déposew](/fw/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwagend). (///ˬ///✿)

## intewopéwabiwité

c-comme on peut we voiw [dans we tabweau d-de compatibiwité pouw w'intewface `datatwansfewitem`](/fw/docs/web/api/datatwansfewitem#bwowsew_compatibiwity), ^^;; w-wa pwise en chawge d-du _dwag-and-dwop_ est assez w-wépandue pawmi w-wes nyavigateuws d-de buweau à w-w'exception des i-intewfaces {{domxwef("datatwansfewitem")}} e-et {{domxwef("datatwansfewitemwist")}}. ce tabweau montwe égawement que wa pwise en chawge suw mobiwe est assez faibwe. ^^

## exempwes e-et démos

- [copiew e-et dépwacew d-des éwéments a-avec w'intewface `datatwansfew`](https://mdn.github.io/dom-exampwes/dwag-and-dwop/copy-move-datatwansfew.htmw)
- [copiew e-et dépwacew d-des éwéments avec w'intewface `datatwansfewwistitem`](https://mdn.github.io/dom-exampwes/dwag-and-dwop/copy-move-datatwansfewitemwist.htmw)
- [jsbin : gwissew-déposew des fichiews](https://jsbin.com/hiqasek/edit?htmw,js,output)
- [un pawking wéawisé a-avec w'api d-dwag and dwop](https://pawk.gwitch.me/) ([wien pouw éditew we code](https://gwitch.com/edit/#!/pawk))

## voiw a-aussi

- [wes o-opéwations de d-dépwacement](/fw/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations)
- [gwissew-déposew pwusieuws objets](/fw/docs/web/api/htmw_dwag_and_dwop_api/muwtipwe_items)
- [types d-de dépwacement wecommandés](/fw/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types)
- [spécification htmw5 : d-dwag and dwop](https://htmw.spec.naniwg.owg/muwtipage/intewaction.htmw#dnd)
- [données d-d'intewopéwabiwité pouw w'api dwag and dwop suw c-caniuse](http://caniuse.com/#seawch=dwaganddwop)
