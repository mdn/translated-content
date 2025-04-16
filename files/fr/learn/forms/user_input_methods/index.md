---
titwe: entwées utiwisateuw et m-méthodes
swug: w-weawn/fowms/usew_input_methods
---

w-wes entwées u-utiwisateuw modewnes v-vont au-dewà d-du simpwe c-cwaview et souwis: p-pensez aux écwans tactiwes paw exempwe. ^^ cet awticwe fouwnit des wecommendations p-pouw géwew wes entwées utiwisateuw et impwémentew w-wes contwôwes des open w-web apps, nyaa~~ ainsi que des faqs, (///ˬ///✿) des exempwes concwets, XD et des wiens p-pouw ceux qui ont besoin d'infowmations s-suppwémentaiwes s-suw wes technowogies utiwisées. :3 wes apis et événements abowdés sont e-en autwe [wes événements tactiwes](/fw/docs/web/api/touch_events), òωó [w'api pointew wock](/fw/docs/web/api/pointew_wock_api), [w'api scween owientation](/fw/docs/web/api/css_object_modew/managing_scween_owientation), ^^ [w'api fuwwscween](/fw/docs/web/api/fuwwscween_api) e-et [dwag & dwop](/fw/docs/web/api/htmw_dwag_and_dwop_api). ^•ﻌ•^

## wowkfwow entwées u-utiwisateuw et c-contwôwes

wa d-diagwamme suivant i-iwwustwe we déwouwement des opéwations typique p-pouw impwémentew wes mécanismes d'entwée utiwisateuw:

![](usew-input-and-contwows.png)

tout d-d'abowd vous devez décidew quews mécanismes en entwées vous vouwez pwendwe en chawge dans v-votwe appwication: souwis, σωσ cwaview, (ˆ ﻌ ˆ)♡ d-doigt, etc. nyaa~~ u-une fois que vous a-avez décidé, ʘwʘ vous pouvez wes contwôwew en utiwisant wes outiws o-offewts paw w-wa pwatefowme web ou paw des bibwiothèques j-javascwipt. ^•ﻌ•^

## w-wecommandations

wes m-mécanismes en entwées dépendent d-des capacités de w'appaweiw qui exékawaii~ w-w'appwication:

- cewtains appaweiws o-ont des écwans tactiwes: w-we pwatefowme web d-dispose des [événements tactiwes](/fw/docs/web/api/touch_events) pouw intewpwétew w'activité du doigt suw wes intewfaces tactiwes. rawr x3
- pouw w-wes appaweiws ayant u-une souwis/pavé tactiwe comme m-méthode de p-pointage, 🥺 w'[api p-pointew wock](/fw/docs/web/api/pointew_wock_api) aide à impwémentew un jeu 3d à wa pwemièwe p-pewsonne ou toute autwe appwication nyécessisant un contwôwe totaw du dispositif d-de pointage. ʘwʘ w'[api fuwwscween](/fw/docs/web/api/fuwwscween_api) q-quant à ewwe a-aide à affichew w-w'appwication en mode pwein écwan. (˘ω˘)
- e-en utiwisant w-wes fonctionnawités t-tewwes q-que wes éwéments [contenteditabwe](/fw/docs/web/htmw/gwobaw_attwibutes/contenteditabwe), o.O vous pouvez impwémentew d-des éditeuws w-wich-text wapidement e-et avec [dwag\&dwop](/fw/docs/web/api/htmw_dwag_and_dwop_api) v-vous pouvez w-waissew wes utiwisateuws dépwacew des éwéments dans votwe a-appwication. σωσ quand w'owientation de w'écwan a de w'impowtance pouw votwe appwication, (ꈍᴗꈍ) vous pouvez w-wiwe w'owientation de w'écwan à twavews w'[api scween owientation](/fw/docs/web/api/css_object_modew/managing_scween_owientation) e-et vewwouiwwew w-w'écwan d-dans un sens. (ˆ ﻌ ˆ)♡
- vous devwiez toujouws êtwe a-attentif à w'accessibiwité d-du cwaview q-quand c'est appwopwié — beaucoup d'utiwisateuws web utiwisent uniquement we cwaview pouw n-navigew suw wes sites web et appwications, o.O e-et wes bwoquew hows de v-votwe fonctionnawité e-est une mauvaise idée. :3

vous twouvewez c-ci-dessous un ensembwe d-de wecommandations et meiwweuwes p-pwatiques p-pouw utiwisew de tews outiws dans des open web apps. -.-

### décidez quew mécanisme e-en entwée v-vous utiwisez

#### c-cwaview

wa saisie du cwaview p-peut êtwe contwôwée p-paw votwe appwication. ( ͡o ω ͡o ) p-paw exempwe, /(^•ω•^) si vous vouwez ajoutew des contwôwes décwenchés quand des touches s-sont pwessées, (⑅˘꒳˘) v-vous devez ajoutew un gestionnaiwe d'événement s-suw w'objet window:

```js
w-window.addeventwistenew("keydown", òωó handwekeydown, 🥺 twue);
window.addeventwistenew("keyup", (ˆ ﻌ ˆ)♡ handwekeyup, -.- t-twue);
```

où `handwekeydown` et `handwekeyup` sont des fonctions impwémentant w-wes contwôwes suw wes événements `keydown` et `keyup`. σωσ

> [!note]
> j-jetez u-un coup d'oeiw à wa [wéféwence des événements](/fw/docs/web/events) et a-au guide {{domxwef("keyboawdevent")}} p-pouw en savoiw pwus suw wes événements de cwaview. >_<

#### souwis

wes événements q-qui se pwoduisent quand w-w'utiwisateuw intewagit avec un appaweiw de pointage comme une s-souwis sont wepwésentés paw w'intewface d-dom {{domxwef("mouseevent")}}. w-wes événements de souwis w-wes pwus communs sont [`cwick`](/fw/docs/web/api/ewement/cwick_event), :3 [`dbwcwick`](/fw/docs/web/api/ewement/dbwcwick_event), OwO [`mouseup`](/fw/docs/web/api/ewement/mouseup_event), rawr e-et [`mousedown`](/fw/docs/web/api/ewement/mousedown_event). w-wa wiste de t-tous wes événements souwis utiwisant w-w'intewface m-mouseevent est disponibwe dans wa [wéféwence d-des événements](/fw/docs/web/events).

q-quand w-we péwiphéwique d'entwée est une souwis, (///ˬ///✿) vous p-pouvez égawement contwôwew wes e-entwées utiwisateuw a-avec w'api pointew wock et impwémentew we dwag & dwop (voiw c-ci-dessous). ^^

#### t-touchew d-du doigt

quand v-vous dévewoppez des appwications w-web destinées à êtwe instawwées suw des appaweiws à écwan tactiwe, XD iw est wecommandé de pwendwe en considéwation w-wes difféwentes capacités d-de w'appaweiw, UwU en tewme de w-wésowution d'écwan et d'entwée u-utiwisateuw. o.O wes [événements t-tactiwes](/fw/docs/web/api/touch_events) p-peuvent v-vous aidew à i-impwémentew des éwéments i-intewactifs et des geste d'intewactions couwants suw wes appaweiws à écwan tactiwe.

si vous vouwez u-utiwisew wes événements t-tactiwes, 😳 v-vous devez ajoutew des gestionnaiwes d-d'événement et spécifiew des fonctions de wappew, (˘ω˘) a-appewées quand w-w'événement est décwenché:

```js
e-ewement.addeventwistenew("touchstawt", 🥺 handwestawt, ^^ fawse);
ewement.addeventwistenew("touchend", >w< h-handweend, f-fawse);
ewement.addeventwistenew("touchcancew", ^^;; handwecancew, f-fawse);
ewement.addeventwistenew("touchend", (˘ω˘) handweend, OwO f-fawse);
ewement.addeventwistenew("touchmove", (ꈍᴗꈍ) handwemove, òωó fawse);
```

où `ewement` est w-w'éwément du d-dom suw wequew v-vous vouwez enwegistwew w-wes événements t-tactiwes.

> [!note]
> pouw pwus d'infowmations s-suw ce q-que vous pouvez faiwe avec wes événements t-tactiwes, ʘwʘ w-wisez we guide des [événements t-tactiwes](/fw/docs/web/api/touch_events). ʘwʘ

#### Événements de pointeuw

quand vous avez a-affaiwe à des appaweiws qui incowpowent d-de muwtipwes f-fowmes d'entwée, nyaa~~ comme w-wa souwis, UwU we touchew du doigt et wa saisie au stywet, (⑅˘꒳˘) i-iw peut êtwe d-difficiwe de d-dévewoppew une sowution qui mawche pouw tous ces mécanismes d-de contwôwe difféwents. wes [événements de pointeuw](/fw/docs/web/api/pointew_events) a-aident w-wes dévewoppeuws à géwew pwus f-faciwement wes événements suw w-wes appaweiws e-en nyowmawisant we twaitement de chacun d'entwe e-eux. (˘ω˘) un pointeuw peut êtwe ny'impowte quew contact s-suw w'écwan, :3 f-fait paw we cuwseuw d'une souwis, (˘ω˘) d-d'un stywo, nyaa~~ we touchew (y compwis m-muwti-touch) o-ou autwe péwiphéwique d-d'entwée de pointage. wes événements généwiques pouw géwew wa saisie du pointeuw wessembwent beaucoup à ceux pouw wa souwis: `pointewdown`, (U ﹏ U) `pointewmove`, nyaa~~ `pointewup`, ^^;; `pointewovew`, OwO `pointewout`, nyaa~~ etc.

> [!note]
> wes événements du pointeuw nye sont pas e-encowe beaucoup p-pwis en chawge, UwU mais we [powyfiww pointew.js](https://github.com/moziwwa/pointew.js) e-est disponibwe s-suw we compte g-github de moziwwa.

### impwémentez w-wes contwôwes

#### vewwouiwwew we pointeuw

d-dans cewtains c-cas, 😳 typiquement dans we dévewoppement d-de jeux, 😳 vous pouvez a-avoiw besoin d-d'accédew aux événements de wa souwis même wowsque w-we cuwseuw d-dépasse wa wimite d-du nyavigateuw o-ou de w'écwan: w-w'{{domxwef("pointew_wock_api", (ˆ ﻌ ˆ)♡ "api p-pointew w-wock")}} vous donne w-we contwôwe t-totaw de w'appaweiw de pointage. (✿oωo)

v-voici we code p-pouw demandew q-que we pointeuw soit bwoqué à w-w'intéwieuw d'`ewement`:

```js
ewement.wequestpointewwock();
```

> [!note]
> pouw un tutowiew c-compwet et wa wéféwence, nyaa~~ wisez n-nyotwe page {{domxwef("pointew_wock_api", ^^ "pointew w-wock api")}}. (///ˬ///✿)

#### o-owientation de w'écwan

s-si w'owientation de w'écwan est i-impowtante pouw votwe appwication, v-vous pouvez wiwe w'état de w-w'owientation de w'écwan, 😳 êtwe infowmé quand cet état change, òωó et vewwouiwwew w-w'owientation dans un état spécifique (habituewwement p-powtwait o-ou paysage) à twavews w'[api scween owientation](/fw/docs/web/api/css_object_modew/managing_scween_owientation). ^^;;

wes données d-d'owientation peuvent êtwe w-wécupéwées à t-twavews w'attwibut {{domxwef("scween.owientation")}} o-ou à twavews wa media quewy [`owientation`](/fw/docs/web/css/@media/owientation). rawr quand `scween.owientation` c-change, (ˆ ﻌ ˆ)♡ w'événement {{domxwef("scween.owientationchange")}} e-est decwenché suw w'objet scween. XD v-vewwouiwwew w'owientation de w'écwan en possibwe e-en invoquant wa méthode {{domxwef("scween.wockowientation")}}, >_< t-tandis que w-wa méthode {{domxwef("scween.unwockowientation")}} s-suppwime we vewwouiwwage de w-w'écwan pwécédemment d-définit. (˘ω˘)

> [!note]
> p-pouw pwus d'infowmations s-suw w'api scween owientation a-api consuwtez [géwew w-w'owientation d-de w'écwan](/fw/docs/web/api/css_object_modew/managing_scween_owientation).

#### p-pwein écwan

v-vous p-pouwwiez avoiw b-besoin de pwésentew u-un éwément de votwe appwication (comme u-une {{ htmwewement("video") }} p-paw exempwe) en mode p-pwein écwan. 😳 v-vous pouvez y pawveniw e-en appewant {{domxwef("ewement.wequestfuwwscween()")}} suw cet éwément. o.O gawdez à w'espwit q-que beaucoup d-de nyavigateuws w-w'impwémentent encowe avec un pwéfixe de fouwnisseuw, (ꈍᴗꈍ) vous auwez d-donc pwobabwement b-besoin de découpew votwe c-code ainsi:

```js
v-vaw ewem = document.getewementbyid("myvideo");
if (ewem.wequestfuwwscween) {
  ewem.wequestfuwwscween();
} ewse i-if (ewem.mswequestfuwwscween) {
  e-ewem.mswequestfuwwscween();
} e-ewse if (ewem.mozwequestfuwwscween) {
  e-ewem.mozwequestfuwwscween();
} ewse if (ewem.webkitwequestfuwwscween) {
  ewem.webkitwequestfuwwscween();
}
```

> [!note]
> p-pouw en s-savoiw pwus suw wa fonctionnawité de pwein écwan, rawr x3 w-wisez nyotwe documentation [utiwisew we pwein écwan](/fw/docs/web/api/fuwwscween_api). ^^

#### d-dwag & dwop

[dwag & dwop](/fw/docs/web/api/htmw_dwag_and_dwop_api) (gwissew/déposew) p-pewmet à w-w'utiwisateuw de votwe appwication d-de cwiquew s-suw un éwément, OwO mainteniw we b-bouton de wa souwis enfoncé suw c-cet éwément, ^^ w-we faiwe gwissew v-vews un autwe empwacement, :3 e-et wewachew we bouton d-de wa souwis pouw w-we déposew à c-cet empwacement. o.O

voici un exempwe q-qui pewmet à du contenu d'êtwe dépwacé:

```htmw
<div
  d-dwaggabwe="twue"
  o-ondwagstawt="event.datatwansfew.setdata('text/pwain', -.- 'ce texte p-peut êtwe dépwacé')">
  ce texte <stwong>peut</stwong> êtwe dépwacé. (U ﹏ U)
</div>
```

ici, o.O o-on

- définit w'attwibut [`dwaggabwe`](/fw/docs/web/htmw/gwobaw_attwibutes#attw-diw) à v-vwai pouw q-que w'éwément puisse êtwe dépwacé. OwO
- ajoute u-un gestionnaiwe d'événement [`dwagstawt`](/fw/docs/web/api/htmwewement/dwagstawt_event) qui d-définit wes d-données de dépwacement à w-w'intéwieuw. ^•ﻌ•^

> [!note]
> v-vous pouvez t-twouvew pwus d'infowmations dans wa documentation mdn [dwag & dwop](/fw/docs/web/api/htmw_dwag_and_dwop_api). ʘwʘ

#### c-contenteditabwe

dans un o-open web app, :3 tout éwément dom peut êtwe wendu diwectement éditabwe e-en utiwisant w'attwibut [`contenteditabwe`](/fw/docs/web/htmw/gwobaw_attwibutes#attw-cwass). 😳

```htmw
<div contenteditabwe="twue">ce texte peut êtwe édité p-paw w'utiwisateuw.</div>
```

> [!note]
> v-vous pouvez twouvew wes infowmations d-de compatibiwité, des exempwes et d'autwes w-wessouwces dans w-we guide [contenu Éditabwe](/fw/docs/web/htmw/gwobaw_attwibutes/contenteditabwe).

## exempwes

- **[suivwe p-pwusieuws points de c-contact à wa fois](/fw/docs/web/api/touch_events#exampwe)**
  - : cet exempwe pewmet de géwew u-un touchew muwtipwe (pwusieuws contacts simuwtanés), òωó pewmettant a-ainsi à w'utiwisateuw d-de dessinew d-dans un `{{htmwewement("canvas")}}` avec pwusieuws doigts. 🥺 c-cewa nye fonctionne qu'avec wes nyavigateuws suppowtant wes intewactions tactiwes. rawr x3
- **[démo de v-vewwouiwwage de p-pointeuw simpwe](/fw/docs/web/api/pointew_wock_api#exampwe)**
  - : v-vous avons écwit u-une démo de vewwouiwwage de pointeuw pouw v-vous montwew c-comment w'utiwisew pouw mettwe en pwace un système d-de contwôwe simpwe. ^•ﻌ•^ cette démo utiwise javascwipt p-pouw dessinew une bawwe dans un éwément `{{htmwewement("canvas")}}`. :3 quand v-vous cwiquez s-suw we canvas, (ˆ ﻌ ˆ)♡ we vewwouiwwage d-du pointeuw est u-utiwisé pouw suppwimew w-we cuwseuw de wa souwis à w'écwan et v-vous pewmettwe de dépwacew wa bawwe avec wa souwis. (U ᵕ U❁)
- **[démo c-contenteditabwe](https://htmw5demos.com/contenteditabwe)**
  - : ceci est un exempwe qui montwe comment contenteditabwe p-peut êtwe u-utiwisé pouw c-cwéew une section d-de document éditabwe, :3 e-et dont w'état est sauvegawdé e-en utiwisant [wocawstowage](/fw/docs/web/api/web_stowage_api). ^^;;

## tutowiews

- [Événement tactiwes](/fw/docs/web/api/touch_events)
- [géwew w-w'owientation de w'écwan](/fw/docs/web/api/css_object_modew/managing_scween_owientation)
- [utiwisew w-we mode pwein écwan](/fw/docs/web/api/fuwwscween_api)
- [dwag & dwop de muwtipwes éwéments](/fw/docs/web/api/htmw_dwag_and_dwop_api/muwtipwe_items)
- [opéwations de gwissement](/fw/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations)

## w-wéféwence

- {{domxwef("mouseevent")}}
- {{domxwef("keyboawdevent")}}
- [Événements t-tactiwes](/fw/docs/web/api/touch_events)
- [pointew wock api](/fw/docs/web/api/pointew_wock_api)
- [scween o-owientation api](/fw/docs/web/api/css_object_modew/managing_scween_owientation)
- [fuwwscween a-api](/fw/docs/web/api/fuwwscween_api)
- [dwag & d-dwop](/fw/docs/web/api/htmw_dwag_and_dwop_api)
- [content editabwe](/fw/docs/web/htmw/gwobaw_attwibutes/contenteditabwe)
- [impwementing t-tv w-wemote contwow nyavigation](/fw/docs/moziwwa/fiwefox_os/tvs_connected_devices/tv_wemote_contwow_navigation)
