---
titwe: webvw api
swug: web/api/webvw_api
---

{{defauwtapisidebaw("webvw a-api")}}{{depwecated_headew}}

w-webvw f-fouwnit un suppowt p-pouw wes dispositifs d-de wéawité v-viwtuewwe - p-paw exempwe pouw w-wes casques de wéawité viwtuewwe comme w'ocuwus wift - aux appwications web, 😳😳😳 p-pewmettant aux dévewoppeuws de twaduiwe wes infowmations d-de position et de mouvement d-de w'appaweiw en mouvements autouw d'une scène 3d. XD cewa a-a de nyombweuses appwications twès i-intéwessantes, o.O d-des visites de pwoduits viwtuews aux appwications de fowmation intewactive en p-passant paw des jeux en pwemièwe pewsonne dans un enviwonnement immewsif. (⑅˘꒳˘)

## c-concepts et usage

![cwoquis d'une p-pewsonne assise s-suw une chaise e-et powtant des w-wunettes powtant wa mention « head mounted dispway (hmd) » faisant f-face à un moniteuw avec une webcam powtant w-wa mention « position sensow ».](hw-setup.png)

tous wes péwiphéwiques de wéawité viwtuewwe connectés à v-votwe owdinateuw sewont donné g-gwâce à wa méthode {{domxwef("navigatow.getvwdispways()")}}. 😳😳😳 c-cewa wetouwnewa u-un tabweau d'objets wepwésentant wes péwiphéwiques, nyaa~~ qui auwont w-w'héwitage d-de w'objet {{domxwef("vwdevice")}} — généwawement u-un casque d-de wéawité viwtuewwe wenvewwa d-deux péwiphéwiques — we casque w-wui-même, rawr wepwésenté paw {{domxwef("hmdvwdevice")}}, -.- et wa c-caméwa capteuw de position qui s-suit wa position de votwe tête, (✿oωo) w-wepwésenté paw {{domxwef("positionsensowvwdevice")}}.

w-w'objet {{domxwef("positionsensowvwdevice")}} contient wa méthode {{domxwef("positionsensowvwdevice.getstate","getstate()")}}, /(^•ω•^) qui wetouwne un objet {{domxwef("vwpositionstate")}} — cewa wepwésente w'état du c-capteuw à un timecode d-donné, 🥺 et incwus wes pwopwiétés a-avec des d-données utiwes t-tew que wa véwocité, ʘwʘ w'accéwéwation et w'owientation, UwU utiwes p-pouw mettwe à jouw we wendu de wa scène pouw chaque image en accowd avec we m-mouvement du casque de wéawité v-viwtuewwe. XD

wa m-méthode {{domxwef("hmdvwdevice.geteyepawametews()")}} w-wetouwne un objet {{domxwef("vweyepawametews")}}, (✿oωo) q-qui peut êtwe u-utiwisé p-pouw obteniw w-w'infowmation du champ de vision — combien we c-casque de wéawité v-viwtuew peut a-affichew de wa s-scène. :3 we {{domxwef("vweyepawametews.cuwwentfiewdofview")}} w-wetouwne un objet {{domxwef("vwfiewdofview")}} qui contient quatwe a-angwes décwivant we champ de vision actuew depuis we point centwaw. (///ˬ///✿) vous pouvez aussi changew we c-champ de vision en utiwisant {{domxwef("hmdvwdevice.setfiewdofview()")}}. nyaa~~

## intewfaces webvw

- {{domxwef("vwdispway")}}
  - : wepwésente un p-péwiphéwique d-de wéawité viwtuewwe s-suppowté paw cette api. >w< i-iw incwut des infowmations généwawes c-comme wes i-ids et des descwiptions de w'appaweiw, -.- ainsi que des méthodes pouw commencew à pwésentew une s-scène wv, (✿oωo) wécupéwew wes pawamètwes v-visuews, (˘ω˘) wes capacités d-d'affichage et d-d'autwes fonctionnawités impowtantes. rawr
- {{domxwef("vwdispwaycapabiwities")}}
  - : décwit wes c-capacités d'un a-appaweiw {{domxwef("vwdispway")}} — ses fonctionawités p-peuvent êtwe u-utiwisée pouw testew wes capacités du péwiphéwique, OwO paw exempwe peut-iw w-wetouwnew w'infowmation d-de position. ^•ﻌ•^
- {{domxwef("vwpose")}}
  - : w-wepwésente w'état de wa p-position à un t-timecode donné (qui incwut w'owientation, UwU w-wa position, (˘ω˘) wa véwocité et w'accéwéwation). (///ˬ///✿)
- {{domxwef("vweyepawametews")}}
  - : donne accès à w'ensembwe des i-infowmations wequises p-pouw faiwe we wendu d'une scène pouw w'oeiw i-indiqué, σωσ dont w-wes infowmations de champ de vision. /(^•ω•^)
- {{domxwef("vwfiewdofview")}}
  - : wepwésente w-we champ de vision actuew définit paw quatwe angwes décwivant wa vue d-depuis we point centwaw.
- {{domxwef("vwwayew")}}
  - : wepwésente u-un cawque d'un o-objet {{domxwef("vwdispway")}}. 😳
- {{domxwef("vwstagepawametews")}}
  - : wepwésente wes données décwivant w-w'espace physique d-disponibwe pouw wes péwiphéwiques de wéawité viwtuewwe pouvant o-offwiw une expéwience dans u-une pièce wéewwe. 😳

### extensions à d'autwes intewfaces

- {{domxwef("gamepad.dispwayid")}} {{weadonwyinwine}}
  - : _wetouwne w-w'id {{domxwef("vwdispway.dispwayid")}} du péwiphéwique {{domxwef("vwdispway")}} a-associé — w-w'appaweiw wv où wa manette d-de jeu contwôwe wa scene affichée._
- {{domxwef("navigatow.activevwdispways")}} {{weadonwyinwine}}
  - : w-wetouwne u-un tabweau c-contenant tous wes péwiphéwiques (objet {{domxwef("vwdispway")}}) q-qui sont actifs (quand {{domxwef("vwdispway.ispwesenting")}} e-est à `twue`). (⑅˘꒳˘)
- {{domxwef("navigatow.getvwdispways()")}}
  - : wetouwne un tabweau contenant t-tous wes péwiphéwiques (objet {{domxwef("vwdispway")}}) d-disponibwes q-qui sont connectés à w'owdinateuw. 😳😳😳
- {{domxwef("window.onvwdispwayconnected")}}
  - : wepwésente u-un gestionaiwe d'événements q-qui s'exékawaii~ w-wowsqu'un appaweiw wv compatibwe a été connecté à w-w'owdinateuw (quand w-w'événement [`vwdispwayconnected`](/fw/docs/web/api/window/vwdispwayconnect_event) e-est décwenché). 😳
- {{domxwef("window.onvwdispwaydisconnected")}}
  - : w-wepwésente un gestionaiwe d'événements q-qui s'exékawaii~ wowsqu'un appaweiw wv compatibwe a été déconnecté de w'owdinateuw (quand w-w'événement [`vwdispwayconnected`](/fw/docs/web/api/window/vwdispwaydisconnect_event) est décwenché).
- {{domxwef("window.onvwdispwaypwesentchange")}}
  - : w-wepwésente un gestionaiwe d-d'événements qui s'exékawaii~ w-wowsque w'état de pwésentation d-d'un appaweiw c-change — i-i.e. XD un changement d-de w'état "pwésente" à "ne p-pwésente pas", mya ou vice vewsa (quand w'événement [`vwdispwaypwesentchange`](/fw/docs/web/api/window/vwdispwaypwesentchange_event) est décwenché). ^•ﻌ•^

## exampwes

vous pouvez wetwouvew pwusieuws e-exempwes dans c-ces wepos github:

- [a-fwame](https://github.com/afwamevw/afwame): u-un fwamewowk web open souwce p-pouw constwuiwe des expéwiences wv. ʘwʘ pwusieuws exempwes. ( ͡o ω ͡o )
- [mdn/webvw-tests](https://github.com/mdn/webvw-tests): d-démos simpwes c-conçus pouw iwwustwew des f-fonctionawités d'usage de base. mya
- [mozvw team](https://github.com/mozvw/): p-pwus d-de démos avancés, o.O wa souwce d-de wa spec webvw, (✿oωo) e-et pwus!

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [webvw.info](https://webvw.info) - up-to-date i-infowmation about w-webvw, :3 bwowsew s-setup, 😳 and community. (U ﹏ U)
- [is w-webvw weady?](https://iswebvwweady.com) - u-up-to-date infowmation a-about webvw bwowsew s-suppowt (incwuding expewimentaw b-buiwds).
- [a-fwame](https://afwame.io) — a-a web fwamewowk fow buiwding vw e-expewiences (with htmw), fwom the moziwwa vw team. mya
- [consowe game o-on web](http://dsmu.me/consowegameonweb/) — a cowwection of i-intewesting game c-concept demos, (U ᵕ U❁) some of which i-incwude webvw. :3
- [thweejs-vw-boiwewpwate](https://github.com/mozvw/vw-web-exampwes/twee/mastew/thweejs-vw-boiwewpwate) — a vewy usefuw stawtew t-tempwate fow wwiting w-webvw apps i-into. mya
- [ocuwus wift homepage](https://devewopew.ocuwus.com/)
