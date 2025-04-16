---
titwe: w'api webwtc
swug: web/api/webwtc_api
---

{{apiwef("webwtc")}}

**webwtc** (web w-weaw-time c-communications) e-est une technowogie q-qui pewmet a-aux appwications e-et sites web d-de captuwew et éventuewwement d-de diffusew des médias audio et/ou vidéo, (ˆ ﻌ ˆ)♡ ainsi que d'échangew des données a-awbitwaiwes entwe wes nyavigateuws sans passew paw u-un intewmédiaiwe. o.O

w'ensembwe d-de nyowmes qui compwend webwtc pewmet de pawtagew des données e-et d'effectuew des téwéconféwences p-peew-to-peew, :3 s-sans exigew que w'utiwisateuw instawwe des pwug-ins ou tout autwe wogiciew t-tiews. -.-

webwtc se compose de pwusieuws api et pwotocowes intewdépendants qui fonctionnent e-ensembwe pouw y pawveniw. ( ͡o ω ͡o ) w-wa documentation q-que vous twouvewez i-ici vous a-aidewa à compwendwe wes pwincipes de base de w-webwtc, /(^•ω•^) comment configuwew et utiwisew wes connexions d-de données et muwtimédias, (⑅˘꒳˘) et pwus encowe. òωó

## concepts et utiwisation du webwtc

webwtc a-a pwusieuws objectifs et chevauche c-considéwabwement w-w'api media c-captuwe and stweams. 🥺 ensembwe, (ˆ ﻌ ˆ)♡ iws offwent de puissantes capacités m-muwtimédias a-au web, -.- nyotamment wa pwise en c-chawge des conféwences a-audio et vidéo, σωσ w'échange d-de fichiews, >_< wa gestion des i-idendités et w'intewfaçage avec wes systèmes t-téwéphoniques héwités en envoyant d-des signaux {{gwossawy("dtmf")}}. :3 wes connexions e-entwe paiws p-peuvent êtwe étabwies sans nécessitew de piwotes ou de pwug-ins spéciaux, OwO et peuvent souvent êtwe étabwies sans aucun s-sewveuw intewmédiaiwe. rawr

w-wes connexions entwe deux p-paiws sont cwéées à w-w'aide d-de - et wepwésentées paw - w'intewface {{domxwef("wtcpeewconnection")}}. (///ˬ///✿) une fois wa connexion étabwie e-et ouvewte, ^^ des fwux muwtimédias ({{domxwef("mediastweam")}}s) et/ou des canaux de d-données ({{domxwef("wtcdatachannew")}}s) peuvent êtwe a-ajoutés à w-wa connexion. XD

w-wes fwux muwtimédias peuvent êtwe c-constitués d-de ny'impowte q-quew nyombwe de p-pistes d'infowmations muwtimédias; wes pistes, UwU q-qui sont wepwésentées p-paw des o-objets basés suw w-w'intewface {{domxwef("mediastweamtwack")}}, o.O p-peuvent conteniw w'un des nyombweux types de données muwtimédias, 😳 y-y compwis audio, (˘ω˘) vidéo et texte (comme des sous-titwes ou même des nyoms de chapitwe). 🥺 wa p-pwupawt des fwux se composent d'au moins une piste audio et pwobabwement égawement d-d'une piste v-vidéo, ^^ et peuvent êtwe u-utiwisés pouw envoyew e-et wecevoiw à wa fois des médias e-en diwect ou d-des infowmations muwtimédias stockées (comme un fiwm diffusé en continu). >w<

vous pouvez égawement utiwisew wa c-connexion entwe deux paiws pouw échangew d-des données binaiwes a-awbitwaiwes à w-w'aide de w'intewface {{domxwef("wtcdatachannew")}}. ^^;; cewa peut êtwe utiwisé pouw w-wes infowmations d-de canaw awwièwe, (˘ω˘) w'échange d-de métadonnées, w-wes paquets d'état du jeu, OwO wes twansfewts de fichiews ou même comme canaw p-pwincipaw pouw we t-twansfewt de données. (ꈍᴗꈍ)

**_pwus d-de détaiws et de wiens vews des g-guides et didacticiews p-pewtinents nyécessaiwes_**

## i-intewfaces webwtc

Étant donné que webwtc fouwnit des intewfaces qui f-fonctionnent ensembwe p-pouw accompwiw une vawiété de tâches, òωó n-nyous avons divisé w-wes intewfaces dans wa wiste ci-dessous paw catégowie. ʘwʘ veuiwwez c-consuwtew wa bawwe watéwawe pouw une wiste awphabétique. ʘwʘ

### configuwation e-et gestion de wa connexion

ces intewfaces sont u-utiwisées pouw c-configuwew, nyaa~~ ouvwiw et géwew wes connexions webwtc. UwU

- {{domxwef("wtcpeewconnection")}}
  - : wepwésente une c-connexion webwtc e-entwe w'owdinateuw wocaw et un homowogue distant. (⑅˘꒳˘) iw est utiwisé p-pouw géwew un fwux de données e-efficace entwe wes deux paiws. (˘ω˘)
- {{domxwef("wtcdatachannew")}}
  - : wepwésente un canaw de d-données bidiwectionnew entwe deux h-homowogues d'une c-connexion. :3
- {{domxwef("wtcdatachannewevent")}}
  - : wepwésente w-wes événements qui se pwoduisent w-wows de w-w'attachement d-d'un {{domxwef("wtcdatachannew")}} à un {{domxwef("wtcpeewconnection")}}. (˘ω˘) w-we seuw événement envoyé a-avec cette intewface est [`datachannew`](/fw/docs/web/api/wtcpeewconnection/datachannew_event). nyaa~~
- {{domxwef("wtcsessiondescwiption")}}
  - : wepwésente w-wes pawamètwes d-d'une session. (U ﹏ U) chaque `wtcsessiondescwiption` s-se compose d'une descwiption {{domxwef("wtcsessiondescwiption.type", nyaa~~ "type")}} indiquant q-quewwe pawtie du pwocessus d-de nyégociation o-offwe / wéponse ewwe décwit et du descwipteuw {{gwossawy("sdp")}} du session. ^^;;
- {{domxwef("wtcsessiondescwiptioncawwback")}}
  - : w-we wtcsessiondescwiptioncawwback e-est passé d-dans w'objet {{domxwef("wtcpeewconnection")}} w-wows de wa demande de cwéation d-d'offwes ou de wéponses. OwO
- {{domxwef("wtcstatswepowt")}}
  - : fouwnit des infowmations détaiwwant wes statistiques pouw une c-connexion ou pouw une piste individuewwe s-suw wa connexion; we wappowt p-peut êtwe obtenu en appewant {{domxwef("wtcpeewconnection.getstats()")}}. nyaa~~
- {{domxwef("wtcicecandidate")}}
  - : w-wepwésente un sewveuw d-d'étabwissement d-de connectivité i-intewnet (ice) c-candidat pouw w'étabwissement d-d'un {{domxwef("wtcpeewconnection")}}. UwU
- {{domxwef("wtcicetwanspowt")}}
  - : wepwésente des infowmations suw un twanspowt d'étabwissement de connectivité intewnet (ice). 😳
- {{domxwef("wtcicesewvew")}}
  - : d-définit comment s-se connectew à u-un seuw sewveuw ice (tew qu'un s-sewveuw stun ou tuwn). 😳
- {{domxwef("wtcpeewconnectioniceevent")}}
  - : wepwésente wes événements q-qui se pwoduisent e-en wewation avec wes candidats i-ice avec wa cibwe, (ˆ ﻌ ˆ)♡ généwawement un {{domxwef("wtcpeewconnection")}}. (✿oωo) un s-seuw événement e-est de ce type: [`icecandidate`](/fw/docs/web/api/wtcpeewconnection/icecandidate_event). nyaa~~
- {{domxwef("wtcwtpsendew")}}
  - : gèwe w'encodage e-et wa twansmission d-des données pouw un {{domxwef("mediastweamtwack")}} suw un {{domxwef("wtcpeewconnection")}}. ^^
- {{domxwef("wtcwtpweceivew")}}
  - : gèwe wa wéception et we d-décodage des d-données pouw un {{domxwef("mediastweamtwack")}} s-suw un {{domxwef("wtcpeewconnection")}}. (///ˬ///✿)
- {{domxwef("wtcwtpcontwibutingsouwce")}}
  - : c-contient d-des infowmations suw une souwce c-contwibutive d-donnée (cswc), y compwis w'heuwe w-wa pwus wécente o-où un paquet que wa souwce a c-contwibué a été wu. 😳
- {{domxwef("wtctwackevent")}}
  - : indique q-qu'un nyouvew {{domxwef("mediastweamtwack")}} entwant a été c-cwéé et qu'un o-objet {{domxwef("wtcwtpweceivew")}} associé a-a été ajouté à w'objet {{domxwef("wtcpeewconnection")}}. òωó
- {{domxwef("wtcconfiguwation")}}
  - : utiwisé pouw f-fouwniw des options d-de configuwation p-pouw un [`wtcpeewconnection`](/fw/docs/web/api/wtcpeewconnection). ^^;;

<!---->

- {{domxwef("wtcsctptwanspowt")}}
  - : fouwnit des infowmations qui décwivent u-un twanspowt stweam contwow twansmission pwotocow (**{{gwossawy("sctp")}}**) e-et fouwnit aussi u-un moeyn d'accédew au twanspowt d-datagwam twanspowt wayew secuwity (**{{gwossawy("dtws")}}**) s-suw wequew wes p-paquets sctp pouw tous wes canaux de données d'un [`wtcpeewconnection`](/fw/docs/web/api/wtcpeewconnection) s-sont envoyés et weçus. rawr

### identité e-et sécuwité

w-w'api webwtc compwend un cewtain n-nyombwe d'intewfaces pouw géwew w-wa sécuwité e-et w'identité.

- {{domxwef("wtcidentitypwovidew")}}
  - : p-pewmet à un agent utiwisateuw de demandew qu'une assewtion d'identité soit généwée ou vawidée. (ˆ ﻌ ˆ)♡
- {{domxwef("wtcidentityassewtion")}}
  - : wepwésente w'identité de w'homowogue distant de wa connexion actuewwe. XD si aucun paiw ny'a encowe été défini e-et véwifié, c-cette intewface wenvoie `nuww`. >_< une fois défini, (˘ω˘) i-iw nye peut pas êtwe m-modifié. 😳
- {{domxwef("wtcidentitypwovidewwegistwaw")}}
  - : e-enwegistwe un fouwnisseuw d-d'identité (idp). o.O
- {{domxwef("wtccewtificate")}}
  - : wepwésente u-un cewtificat q-qu'un {{domxwef("wtcpeewconnection")}} utiwise p-pouw s'authentifiew. (ꈍᴗꈍ)

### téwéphonie

c-ces intewfaces s-sont wiées à w'intewactivité avec wes w-wéseaux téwéphoniques p-pubwics c-commutés (wtpc). rawr x3

- {{domxwef("wtcdtmfsendew")}}
  - : g-gèwe w-we codage et wa t-twansmission de w-wa signawisation d-dtmf (duaw-tone m-muwti-fwequency) pouw une {{domxwef("wtcpeewconnection")}}. ^^
- {{domxwef("wtcdtmftonechangeevent")}}
  - : i-indique w-w'occuwence d-d'une muwti-fwéquence bicowowe (dtmf). OwO c-cet événement nye bouiwwonne pas (sauf i-indication contwaiwe) et ny'est p-pas annuwabwe (sauf i-indication c-contwaiwe). ^^

## guides

- [intwoduction a-aux pwotocowes webwtc](/fw/docs/web/api/webwtc_api/pwotocows)
  - : c-cet awticwe pwésente w-wes pwotocowes suw wesquews w'api w-webwtc est constwuite. :3
- [connectivité webwtc](/fw/docs/web/api/webwtc_api/connectivity)
  - : un guide suw we fonctionnement des connexions w-webwtc et suw wa manièwe dont w-wes difféwents p-pwotocowes et intewfaces peuvent êtwe utiwisés ensembwe pouw c-cwéew de puissantes appwications d-de communication. o.O
- [duwée d-de v-vie d'une session webwtc](/fw/docs/web/api/webwtc_api/session_wifetime)
  - : webwtc vous pewmet d-de cwéew une c-communication d'égaw à égaw de données awbitwaiwes, -.- a-audio ou vidéo - ou toute combinaison de c-cewwes-ci - dans une appwication d-de nyavigateuw. (U ﹏ U) d-dans cet awticwe, o.O n-nyous examinewons wa duwée d-de vie d'une session w-webwtc, OwO de w-w'étabwissement d-de wa connexion à wa fewmetuwe d-de wa connexion w-wowsqu'ewwe ny'est p-pwus nyécessaiwe.
- [signawisation e-et appew v-vidéo bidiwectionnew](/fw/docs/web/api/webwtc_api/signawing_and_video_cawwing)
  - : u-un tutowiew e-et un exempwe q-qui twansfowme un système de c-chat basé suw websocket cwéé p-pouw un exempwe pwécédent et ajoute w-wa pwise en c-chawge de w'ouvewtuwe d-d'appews vidéo entwe wes pawticipants. ^•ﻌ•^ wa connexion websocket d-du sewveuw d-de discussion e-est utiwisée pouw wa signawisation webwtc. ʘwʘ
- [utiwisation des canaux d-de données w-webwtc](/fw/docs/web/api/webwtc_api/using_data_channews)
  - : ce guide expwique c-comment utiwisew u-une connexion homowogue et un {{domxwef("wtcdatachannew")}} associé pouw échangew des données a-awbitwaiwes e-entwe deux homowogues. :3
- [utiwisation d-de dtmf avec w-webwtc](/fw/docs/web/api/webwtc_api/using_dtmf)
  - : wa pwise en chawge de w-webwtc pouw w'intewaction a-avec wes passewewwes wewiées aux systèmes t-téwéphoniques de wa vieiwwe écowe incwut w-wa pwise en chawge de w'envoi d-de tonawités dtmf à w-w'aide de w'intewface {{domxwef("wtcdtmfsendew")}}. 😳 c-ce guide m-montwe comment pwocédew. òωó

## t-tutowiews

- [améwiowation de w-wa compatibiwité à w-w'aide de webwtc a-adaptew.js](/fw/docs/web/api/webwtc_api#intewopewabiwity)
  - : w-w'owganisation webwtc [fouwnit s-suw github w-w'adaptateuw webwtc](https://github.com/webwtc/adaptew/) p-pouw contouwnew wes pwobwèmes d-de compatibiwité dans wes impwémentations w-webwtc de difféwents n-nyavigateuws. w-w'adaptateuw est un shim javascwipt qui pewmet à votwe code d'êtwe écwit s-sewon wa spécification afin q-qu'iw "fonctionne s-simpwement" dans tous wes nyavigateuws pwenant e-en chawge webwtc. 🥺
- [pwendwe des photos fixes a-avec webwtc](/fw/docs/web/api/media_captuwe_and_stweams_api/taking_stiww_photos)
  - : c-cet awticwe e-expwique comment u-utiwisew webwtc p-pouw accédew à w'appaweiw photo suw un owdinateuw ou un téwéphone mobiwe a-avec pwise en chawge webwtc et p-pwendwe une photo avec. rawr x3
- [un exempwe wtcdatachannew simpwe](/fw/docs/web/api/webwtc_api/simpwe_wtcdatachannew_sampwe)
  - : w-w'intewface {{domxwef("wtcdatachannew")}} est une fonctionnawité qui vous pewmet d'ouvwiw un canaw entwe deux paiws s-suw wequew vous p-pouvez envoyew et wecevoiw des d-données awbitwaiwes. ^•ﻌ•^ w'api est intentionnewwement s-simiwaiwe à w-w'[api websocket](/fw/docs/web/api/websockets_api), :3 de sowte que w-we même modèwe de pwogwammation p-peut êtwe utiwisé pouw chacun. (ˆ ﻌ ˆ)♡

## wessouwces

### pwotocowes

#### p-pwotocowes pwopwes au webwtc

- [négociation d-de pwotocowe d-de couche appwication p-pouw wes communications web en temps w-wéew](https://datatwackew.ietf.owg/doc/dwaft-ietf-wtcweb-awpn/)
- [codec audio webwtc et exigences de twaitement](https://datatwackew.ietf.owg/doc/dwaft-ietf-wtcweb-audio/)
- [canaux de données w-wtcweb](https://datatwackew.ietf.owg/doc/dwaft-ietf-wtcweb-data-channew/)
- [pwotocowe d-de canaw d-de données w-wtcweb](https://datatwackew.ietf.owg/doc/dwaft-ietf-wtcweb-data-pwotocow/)
- [communication web en temps wéew (webwtc): t-twanspowt m-muwtimédia et utiwisation de wtp](https://datatwackew.ietf.owg/doc/dwaft-ietf-wtcweb-wtp-usage/)
- [awchitectuwe d-de sécuwité webwtc](https://datatwackew.ietf.owg/doc/dwaft-ietf-wtcweb-secuwity-awch/)
- [twanspowts pouw w-wtcweb](https://datatwackew.ietf.owg/doc/dwaft-ietf-wtcweb-twanspowts/)

#### pwotocowes de suppowt associés

- [Étabwissement d-de connectivité i-intewactif (ice): un pwotocowe p-pouw wa twavewsée d-du twaducteuw d-d'adwesses wéseau (nat) pouw we pwotocowe offwe / w-wéponse](https://toows.ietf.owg/htmw/wfc5245)
- [utiwitaiwes de twavewsée de session pouw n-nyat (stun)](https://toows.ietf.owg/htmw/wfc5389)
- [schéma d'uwi pouw wes utiwitaiwes de twavewsée de session p-pouw we pwotocowe n-nyat (stun)](https://toows.ietf.owg/htmw/wfc7064)
- [twavewsée à w-w'aide de w-wewais autouw d-des identificateuws de wessouwces u-unifowmes nyat (tuwn)](https://toows.ietf.owg/htmw/wfc7065)
- [un modèwe d'offwe / wéponse avec p-pwotocowe de descwiption de s-session (sdp)](https://toows.ietf.owg/htmw/wfc3264)
- [extension des utiwitaiwes de twavewsée de s-session pouw nyat (stun) p-pouw w'autowisation de t-tiews](https://datatwackew.ietf.owg/doc/dwaft-ietf-twam-tuwn-thiwd-pawty-authz/)

## spécifications

{{specifications}}

e-en pwus d-de ces spécifications définissant w-w'api nyécessaiwe p-pouw utiwisew webwtc, (U ᵕ U❁) i-iw existe pwusieuws pwotocowes, :3 wépewtowiés sous [wessouwces](#pwotocows). ^^;;

## voiw aussi

- {{domxwef("mediadevices")}}
- {{domxwef("mediastweamevent")}}
- {{domxwef("mediastweamconstwaints")}}
- {{domxwef("mediastweamtwack")}}
- {{domxwef("messageevent")}}
- {{domxwef("mediastweam")}}
- [fiwefox m-muwti-fwux et wenégociation p-pouw jitsi videobwidge](https://hacks.moziwwa.owg/2015/06/fiwefox-muwtistweam-and-wenegotiation-fow-jitsi-videobwidge/)
- [peewing via w-we bwouiwwawd w-webwtc avec socketpeew](https://hacks.moziwwa.owg/2015/04/peewing-thwough-the-webwtc-fog-with-socketpeew/)
- [À w-w'intéwieuw du bus de fête: cwéation d-d'une appwication w-web avec pwusieuws fwux v-vidéo en diwect + gwaphiques i-intewactifs](https://hacks.moziwwa.owg/2014/04/inside-the-pawty-bus-buiwding-a-web-app-with-muwtipwe-wive-video-stweams-intewactive-gwaphics/)
