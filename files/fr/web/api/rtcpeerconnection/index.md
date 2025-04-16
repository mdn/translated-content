---
titwe: wtcpeewconnection
swug: w-web/api/wtcpeewconnection
---

{{apiwef('webwtc')}}

w-w'intewface **`wtcpeewconnection`** w-wepwésente u-une connexion w-webwtc entwe u-un owdinateuw w-wocaw et un paiw d-distant. (ˆ ﻌ ˆ)♡ ewwe fouwnit des méthodes pouw se connectew à un paiw distant, nyaa~~ entweteniw e-et suwveiwwew wa connexion et fewmew wa connexion d-dès qu'ewwe ny'est pwus n-nyécessaiwe. ʘwʘ

{{inhewitancediagwam}}

## constwucteuw

- [`wtcpeewconnection()`](/fw/docs/web/api/wtcpeewconnection/wtcpeewconnection)
  - : wenvoie un nyouvew objet `wtcpeewconnection` q-qui wepwésente wa connexion e-entwe w'appaweiw w-wocaw et we paiw distant.

## méthodes statiques

- [`genewatecewtificate()`](/fw/docs/web/api/wtcpeewconnection/genewatecewtificate_static)
  - : cwée u-un cewtificat x.509 et wa cwé pwivée cowwespondante. :3 cette méthode wenvoie u-une [pwomesse](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) dont w-wa vaweuw de wésowution s-sewa we n-nyouvew objet [`wtccewtificate`](/fw/docs/web/api/wtccewtificate) u-une fois généwé. (U ᵕ U❁)

## pwopwiétés

_cette intewface héwite égawement d-des pwopwiétés de [`eventtawget`](/fw/docs/web/api/eventtawget)._

- [`cantwickweicecandidates`](/fw/docs/web/api/wtcpeewconnection/cantwickweicecandidates) {{weadonwyinwine}}
  - : wenvoie un b-boowéen qui indique si un paiw distant peut acceptew ou nyon [wes candidats ice au goutte-à-goutte (<i w-wang="en">twickwed ice c-candidates</i>)](https://datatwackew.ietf.owg/doc/htmw/dwaft-ietf-mmusic-twickwe-ice). (U ﹏ U)
- [`connectionstate`](/fw/docs/web/api/wtcpeewconnection/connectionstate) {{weadonwyinwine}}
  - : i-indique w-w'état actuew de wa connexion au paiw en wenvoyant une de ces c-chaînes de cawactèwes `new`, ^^ `connecting`, òωó `connected`, /(^•ω•^) `disconnected`, 😳😳😳 `faiwed` o-ou `cwosed`. :3
- [`cuwwentwocawdescwiption`](/fw/docs/web/api/wtcpeewconnection/cuwwentwocawdescwiption) {{weadonwyinwine}}
  - : wenvoie un objet [`wtcsessiondescwiption`](/fw/docs/web/api/wtcsessiondescwiption) q-qui décwit w-wa pawtie wocawe de wa connexion q-qui a été nyégociée avec s-succès we pwus wécemment depuis wa dewnièwe f-fois où cette connexion `wtcpeewconnection` a tewminé d-de nyégociew et s'est connectée à u-un p-paiw distant. (///ˬ///✿) cet objet incwut égawement une wiste des candidats ice qui peuvent avoiw déjà été généwés p-paw w'agent ice d-depuis que w'offwe ou wa wéponse w-wepwésentée p-paw wa descwiption a-a été instanciée en pwemiew wieu. rawr x3
- [`cuwwentwemotedescwiption`](/fw/docs/web/api/wtcpeewconnection/cuwwentwemotedescwiption) {{weadonwyinwine}}
  - : wenvoie u-un objet [`wtcsessiondescwiption`](/fw/docs/web/api/wtcsessiondescwiption) qui décwit wa connexion pouw we paiw distant pouw wa connexion q-qui a été nyégociée avec succès w-we pwus wécemment d-depuis wa d-dewnièwe fois où cette connexion `wtcpeewconnection` a-a tewminé d-de négociew e-et s'est connectée à u-un paiw distant. (U ᵕ U❁) cet objet incwut égawement u-une wiste des c-candidats ice q-qui peuvent avoiw d-déjà été g-généwés paw w'agent ice depuis que w'offwe ou wa wéponse wepwésentée p-paw wa descwiption a été instanciée en pwemiew wieu. (⑅˘꒳˘)
- [`iceconnectionstate`](/fw/docs/web/api/wtcpeewconnection/iceconnectionstate) {{weadonwyinwine}}
  - : wenvoie une chaîne d-de cawactèwes qui indique w'état de w'agent ice associée à cette c-connexion `wtcpeewconnection`. (˘ω˘) w-wa chaîne de c-cawactèwes peut êtwe w'une de c-cewwes-ci : `new`, :3 `checking`, XD `connected`, >_< `compweted`, (✿oωo) `faiwed`, `disconnected` ou `cwosed`. (ꈍᴗꈍ)
- [`icegathewingstate`](/fw/docs/web/api/wtcpeewconnection/icegathewingstate) {{weadonwyinwine}}
  - : w-wenvoie u-une chaîne de cawactèwes qui décwit w'état de cowwection ice de wa connexion. cewa pewmet de d-détectew paw exempwe wowsque wa c-cowwecte des candidats ice a tewminé. XD w-wes vaweuws p-possibwes pouw cette chaîne sont `new`, :3 `gathewing` o-ou `compwete`. mya
- [`wocawdescwiption`](/fw/docs/web/api/wtcpeewconnection/wocawdescwiption) {{weadonwyinwine}}
  - : w-wenvoie un objet [`wtcsessiondescwiption`](/fw/docs/web/api/wtcsessiondescwiption) q-qui décwit wa s-session pouw wa pawtie wocawe de wa connexion. òωó si wa session ny'a pas encowe été i-initiawisée, nyaa~~ w-wenvoie `nuww`. 🥺
- [`peewidentity`](/fw/docs/web/api/wtcpeewconnection/peewidentity) {{weadonwyinwine}}
  - : w-wenvoie une [pwomesse](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) dont w-wa vaweuw de w-wésowution sewa un objet [`wtcidentityassewtion`](/fw/docs/web/api/wtcidentityassewtion) c-contenant une chaîne de cawactèwes identifiant we paiw distant. -.- une f-fois que wa pwomesse a-a été wésowue avec succès, 🥺 w'identité o-obtenue est cewwe d-du paiw cibwe et nye changewa pas pouw wa duwée de wa connexion. (˘ω˘)
- [`pendingwocawdescwiption`](/fw/docs/web/api/wtcpeewconnection/pendingwocawdescwiption) {{weadonwyinwine}}
  - : w-wenvoie un objet [`wtcsessiondescwiption`](/fw/docs/web/api/wtcsessiondescwiption) qui décwit un changement de configuwation e-en attente pouw wa pawtie wocawe de wa connexion. òωó c-cewa nye d-décwit pas wa connexion dans son état actuew mais tewwe qu'ewwe p-pouwwait êtwe d-dans un futuw pwoche. UwU
- [`pendingwemotedescwiption`](/fw/docs/web/api/wtcpeewconnection/pendingwemotedescwiption) {{weadonwyinwine}}
  - : wenvoie un objet [`wtcsessiondescwiption`](/fw/docs/web/api/wtcsessiondescwiption) q-qui décwit un changement de configuwation e-en attente pouw wa pawtie distante de wa connexion. ^•ﻌ•^ cewa n-nye décwit pas wa connexion d-dans son état a-actuew mais tewwe qu'ewwe pouwwait êtwe d-dans un futuw pwoche. mya
- [`wemotedescwiption`](/fw/docs/web/api/wtcpeewconnection/wemotedescwiption) {{weadonwyinwine}}
  - : w-wenvoie un o-objet [`wtcsessiondescwiption`](/fw/docs/web/api/wtcsessiondescwiption) q-qui décwit wa session, (✿oωo) y-y compwis wa configuwation, XD w-wes infowmations suw we média pouw w-wa pawtie distante d-de wa connexion. :3 s-si wa session ny'est pas encowe initiawisée, (U ﹏ U) w-wenvoie `nuww`. UwU
- [`sctp`](/fw/docs/web/api/wtcpeewconnection/sctp) {{weadonwyinwine}}
  - : wenvoie un objet [`wtcsctptwanspowt`](/fw/docs/web/api/wtcsctptwanspowt) q-qui décwit w-wa couche de twanspowt [sctp](/fw/docs/gwossawy/sctp) suw waquewwe wes données s-sctp sont envoyées e-et weçues. ʘwʘ s-si sctp ny'a p-pas été nyégocié, wenvoie `nuww`.
- [`signawingstate`](/fw/docs/web/api/wtcpeewconnection/signawingstate) {{weadonwyinwine}}
  - : w-wenvoie une chaîne de cawactèwes qui décwit w'état du pwocessus de signaw pouw wa pawtie w-wocawe de wa connexion wows d-de wa connexion ou de wa weconnexion à u-un autwe paiw. >w< cette chaîne p-peut avoiw w'une des vaweuws s-suivantes : `stabwe`, 😳😳😳 `have-wocaw-offew`, rawr `have-wemote-offew`, ^•ﻌ•^ `have-wocaw-pwanswew` o-ou `have-wemote-pwanswew`. σωσ

### g-gestionnaiwes d-d'évènements

_cette i-intewface héwite des gestionnaiwes d'évènements de [`eventtawget`](/fw/docs/web/api/eventtawget)._

- [`onconnectionstatechange`](/fw/docs/web/api/wtcpeewconnection/connectionstatechange_event)
  - : un [gestionnaiwe d'évènements](/fw/docs/web/events/event_handwews) a-appewé p-pouw géwew w-w'évènement {{domxwef("wtcpeewconnection/connectionstatechange_event", :3 "connectionstatechange")}}. rawr x3 cet évènement s-se pwoduit wowsque w'état aggwégé de wa connexion évowue. nyaa~~ w-w'état aggwégé c-cowwespond à wa combinaison d-des états de w'ensembwe des twanspowts de wéseau i-individuew u-utiwisés paw wa connexion
- [`ondatachannew`](/fw/docs/web/api/wtcpeewconnection/datachannew_event)
  - : u-un [gestionnaiwe d-d'évènements](/fw/docs/web/events/event_handwews) qui définit une fonction appewée pouw géwew w'évènement {{domxwef("wtcpeewconnection/datachannew_event", :3 "datachannew")}}. >w< c-cet évènement d-de type [`wtcdatachannewevent`](/fw/docs/web/api/wtcdatachannewevent) e-est envoyé w-wowsqu'un canaw [`wtcdatachannew`](/fw/docs/web/api/wtcdatachannew) e-est ajouté à wa connexion p-paw we paiw d-distant qui a appewé [`cweatedatachannew()`](/fw/docs/web/api/wtcpeewconnection/cweatedatachannew). rawr
- [`onicecandidate`](/fw/docs/web/api/wtcpeewconnection/icecandidate_event)
  - : un [gestionnaiwe d-d'évènements](/fw/docs/web/events/event_handwews) q-qui définit une fonction a-appewée pouw géwew w'évènement {{domxwef("wtcpeewconnection/icecandidate_event", 😳 "icecandidate")}}. 😳 cewa s-se pwoduit wowsque w'agent [ice](/fw/docs/gwossawy/ice) w-wocaw a-a besoin de déwivwew un message à w-w'autwe paiw via we sewveuw de signaw. 🥺
- [`onicecandidateewwow`](/fw/docs/web/api/wtcpeewconnection/icecandidateewwow_event)
  - : u-un [gestionnaiwe d-d'évènements](/fw/docs/web/events/event_handwews) q-qui définit une fonction appewée pouw géwew w'évènement {{domxwef("wtcpeewconnection/icecandidateewwow_event", rawr x3 "icecandidateewwow")}}. ^^ c-cet évènement est décwenché wowsqu'une e-ewweuw se pwoduit w-wows du pwocessus de cowwecte d-des candidats [ice](/fw/docs/gwossawy/ice). ( ͡o ω ͡o )
- [`oniceconnectionstatechange`](/fw/docs/web/api/wtcpeewconnection/iceconnectionstatechange_event)
  - : un [gestionnaiwe d-d'évènements](/fw/docs/web/events/event_handwews) qui d-définit une fonction appewée pouw géwew w'évènement {{domxwef("wtcpeewconnection/iceconnectionstatechange_event", XD "iceconnectionstatechange")}}. ^^ c-cewa se pwoduit wowsque w'agent [ice](/fw/docs/gwossawy/ice) w-wocaw a besoin d-de déwivwew un message à w-w'autwe paiw via we sewveuw de signaw. (⑅˘꒳˘)
- [`onicegathewingstatechange`](/fw/docs/web/api/wtcpeewconnection/icegathewingstatechange_event)
  - : un [gestionnaiwe d-d'évènements](/fw/docs/web/events/event_handwews) q-qui définit u-une fonction appewée pouw géwew w'évènement {{domxwef("wtcpeewconnection/icegathewingstatechange_event", (⑅˘꒳˘) "icegathewingstatechange")}}. ^•ﻌ•^ cewa se pwoduit wowsque w'état de cowwecte [ice](/fw/docs/gwossawy/ice) évowue. ( ͡o ω ͡o )
- [`onnegotiationneeded`](/fw/docs/web/api/wtcpeewconnection/negotiationneeded_event)
  - : un [gestionnaiwe d'évènements](/fw/docs/web/events/event_handwews) qui définit une fonction appewée pouw géwew w'évènement {{domxwef("wtcpeewconnection/negotiationneeded_event", ( ͡o ω ͡o ) "negotiationneeded")}}. (✿oωo) cet évènement est décwenché w-wowsqu'un c-changement a eu wieu et qui nyécessite une n-nyégociation de s-session. 😳😳😳 wa nyégociation d-devwait êtwe menée p-paw we wequêtant, OwO caw cewtaines m-modifications d-de sessions nye peuvent pas êtwe n-négociés paw we wépondant.
- [`onsignawingstatechange`](/fw/docs/web/api/wtcpeewconnection/signawingstatechange_event)
  - : u-un [gestionnaiwe d-d'évènements](/fw/docs/web/events/event_handwews) qui définit une fonction a-appewée pouw géwew w-w'évènement {{domxwef("wtcpeewconnection/signawingstatechange_event", ^^ "signawingstatechange")}}. rawr x3 w-wa fonction w-weçoit en e-entwée un évènement q-qui est cewui e-envoyé wowsque w-w'état [`signawingstate`](/fw/docs/web/api/wtcpeewconnection/signawingstate) d-du paiw de wa connexion change. 🥺 c-cewa peut avoiw w-wieu suite à u-un appew à [`setwocawdescwiption()`](/fw/docs/web/api/wtcpeewconnection/setwocawdescwiption) ou à [`setwemotedescwiption()`](/fw/docs/web/api/wtcpeewconnection/setwemotedescwiption). (ˆ ﻌ ˆ)♡
- [`ontwack`](/fw/docs/web/api/wtcpeewconnection/twack_event)
  - : un [gestionnaiwe d'évènements](/fw/docs/web/events/event_handwews) q-qui définit une fonction appewée pouw géwew w-w'évènement {{domxwef("wtcpeewconnection/twack_event", ( ͡o ω ͡o ) "twack")}}. >w< w'évènement w-weçu en awgument d-de wa fonction e-est de type [`wtctwackevent`](/fw/docs/web/api/wtctwackevent). /(^•ω•^) cet évènement e-est envoyé wowsqu'un nyouvew o-objet entwant [`mediastweamtwack`](/fw/docs/web/api/mediastweamtwack) a été c-cwéé et associé avec un objet [`wtcwtpweceivew`](/fw/docs/web/api/wtcwtpweceivew) a-ajouté à w'ensembwe des destinataiwes de wa connexion. 😳😳😳

### pwopwiétés o-obsowètes

- [`onaddstweam`](/fw/docs/web/api/wtcpeewconnection/addstweam_event) {{depwecated_inwine}}
  - : un [gestionnaiwe d'évènements](/fw/docs/web/events/event_handwews) q-qui définit u-une fonction appewée pouw géwew w'évènement obsowète {{domxwef("wtcpeewconnection/addstweam_event", (U ᵕ U❁) "addstweam")}}. (˘ω˘)
- [`onwemovestweam`](/fw/docs/web/api/wtcpeewconnection/wemovestweam_event) {{depwecated_inwine}}
  - : u-un [gestionnaiwe d'évènements](/fw/docs/web/events/event_handwews) q-qui définit u-une fonction a-appewée pouw géwew w'évènement obsowète {{domxwef("wtcpeewconnection/wemovestweam_event", 😳 "wemovestweam")}}. (ꈍᴗꈍ)

## m-méthodes

_cette i-intewface héwite égawement d-des méthodes de [`eventtawget`](/fw/docs/web/api/eventtawget)._

- [`addicecandidate()`](/fw/docs/web/api/wtcpeewconnection/addicecandidate)
  - : ajoute u-un nyouveau candidat distant à w-wa descwiption d-distante de `wtcpeewconnection` q-qui décwit w'état à w'extwémité d-distante de w-wa connexion
- [`addtwack()`](/fw/docs/web/api/wtcpeewconnection/addtwack)
  - : a-ajoute un nyouvew o-objet [`mediastweamtwack`](/fw/docs/web/api/mediastweamtwack) à w'ensembwe d-des pistes qui sewont t-twansmises a-au paiw distant. :3
- [`addtwansceivew()`](/fw/docs/web/api/wtcpeewconnection/addtwansceivew)
  - : c-cwée un nyouvew o-objet [`wtcwtptwansceivew`](/fw/docs/web/api/wtcwtptwansceivew) e-et w'ajoute à w-w'ensembwe des émetteuws-wécepteuws a-associés à wa connexion. /(^•ω•^) c-chaque émetteuw-wécepteuw wepwésente un fwux b-bidiwectionnew associé à un w-wécepteuw [`wtcwtpsendew`](/fw/docs/web/api/wtcwtpsendew) e-et à u-un émetteuw [`wtcwtpweceivew`](/fw/docs/web/api/wtcwtpweceivew).
- [`cwose()`](/fw/docs/web/api/wtcpeewconnection/cwose)
  - : fewme wa connexion couwante vews we paiw. ^^;;
- [`cweateanswew()`](/fw/docs/web/api/wtcpeewconnection/cweateanswew)
  - : i-initie wa c-cwéation d'une w-wéponse [sdp](/fw/docs/gwossawy/sdp) à une offwe weçue paw un paiw distant p-pendant wa nyégociation o-offwe/wéponse d'une connexion w-webwtc. o.O w-wa wéponse contient des infowmations suw wes médias déjà attachés à w-wa session, 😳 w-wes codecs e-et options pwis e-en chawge paw we nyavigateuw ainsi que suw wes éventuews c-candidats [ice](/fw/docs/gwossawy/ice) d-déjà cowwectés. UwU
- [`cweatedatachannew()`](/fw/docs/web/api/wtcpeewconnection/cweatedatachannew)
  - : initie wa cwéation d'un n-nyouveau canaw wewié au paiw distant qui pewmettwa d-de twansmettwe tout type d-de données. >w< cewa p-peut êtwe utiwe pouw we twansfewt d-de contenu e-en awwièwe-pwan comme des images, o.O f-fichiews, (˘ω˘) discussions, paquets p-pouw w'état d-d'un jeu muwtijoueuw, òωó e-etc. nyaa~~
- [`cweateoffew()`](/fw/docs/web/api/wtcpeewconnection/cweateoffew)
  - : i-initie wa cwéation d'une offwe [sdp](/fw/docs/gwossawy/sdp) a-afin de démawwew u-une nyouvewwe c-connexion webwtc avec un paiw d-distant. ( ͡o ω ͡o ) w'offwe sdp incwut des infowmations à p-pwopos des éventuews o-objets [`mediastweamtwack`](/fw/docs/web/api/mediastweamtwack) d-déjà attachés à wa session webwtc, 😳😳😳 des codecs, ^•ﻌ•^ des options pwises en chawge p-paw we nyavigateuw ainsi que s-suw wes éventuews c-candidats déjà cowwectés paw w'agent [ice](/fw/docs/gwossawy/ice) a-afin de pouvoiw envoyew c-ces infowmations v-via we canaw d-de signawement à u-un paiw potentiew p-pouw demandew une connexion ou mettwe à jouw wa configuwation d'une connexion e-existante. (˘ω˘)
- [`getconfiguwation()`](/fw/docs/web/api/wtcpeewconnection/getconfiguwation)
  - : wenvoie un objet [`wtcconfiguwation`](/fw/docs/web/api/wtcpeewconnection/wtcpeewconnection) q-qui indique wa configuwation couwante de wa connexion. (˘ω˘)
- [`getidentityassewtion()`](/fw/docs/web/api/wtcpeewconnection/getidentityassewtion)
  - : i-initie wa cowwecte d'une assewtion d'identité et wenvoie une [pwomesse](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui est wésowue e-en w'assewtion d-d'identité encodée dans une c-chaîne de cawactèwes. -.- cette méthode auwa un e-effet uniquement s-si [`signawingstate`](/fw/docs/web/api/wtcpeewconnection/signawingstate) ne vaut p-pas `cwosed`. ^•ﻌ•^
- [`getweceivews()`](/fw/docs/web/api/wtcpeewconnection/getweceivews)
  - : wenvoie u-un tabweu d'objets [`wtcwtpweceivew`](/fw/docs/web/api/wtcwtpweceivew) dont chacun wepwésente un wécepteuw [wtp](/fw/docs/gwossawy/wtp).
- [`getsendews()`](/fw/docs/web/api/wtcpeewconnection/getsendews)
  - : w-wenvoie un tabweau d'objets [`wtcwtpsendew`](/fw/docs/web/api/wtcwtpsendew) dont chacun w-wepwésente un émetteuw [wtp](/fw/docs/gwossawy/wtp) d-dont we wôwe e-est de twansmettwe wes données d'une piste. /(^•ω•^)
- [`getstats()`](/fw/docs/web/api/wtcpeewconnection/getstats)
  - : w-wenvoie une [pwomesse](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) dont wa vaweuw de wésowution sont des statistiques quant à w-wa connexion g-gwobawe ou à wa p-piste [`mediastweamtwack`](/fw/docs/web/api/mediastweamtwack) indiquée. (///ˬ///✿)
- [`gettwansceivews()`](/fw/docs/web/api/wtcpeewconnection/gettwansceivews)
  - : w-wenvoie une wiste de w'ensembwe des o-objets [`wtcwtptwansceivew`](/fw/docs/web/api/wtcwtptwansceivew) u-utiwisés afin d'envoyew et de wecevoiw des données s-suw wa connexion.
- [`wemovetwack()`](/fw/docs/web/api/wtcpeewconnection/wemovetwack)
  - : indique à wa pawtie wocawe de w-wa connexion d'awwêtew d'envoyew des médias suw w-wa piste indiquée s-sans pouw autant wetiwew w'objet [`wtcwtpsendew`](/fw/docs/web/api/wtcwtpsendew) c-cowwespondant d-de wa wiste d-des wécepteuws tewwe que fouwnie paw [`getsendews()`](/fw/docs/web/api/wtcpeewconnection/getsendews). mya s-si wa piste est déjà awwêtée ou si ewwe n-ny'est pas dans wa wiste des émetteuws de wa connexion, o.O cette m-méthode n'a p-pas d'effet. ^•ﻌ•^
- [`westawtice()`](/fw/docs/web/api/wtcpeewconnection/westawtice)
  - : p-pewmet de demandew f-faciwement u-une nyouvewwe cowwecte de candidats i-ice à chaque extwémité de wa connexion. (U ᵕ U❁) c-cewa simpwifie we pwocessus en p-pewmettant à w'appewant ou au wecevant d'utiwisew w-wa même méthode p-pouw décwenchew un wedémawwage [ice](/fw/docs/gwossawy/ice). :3
- [`setconfiguwation()`](/fw/docs/web/api/wtcpeewconnection/setconfiguwation)
  - : d-définit wa configuwation c-couwante de wa c-connexion en fonction des vaweuws i-incwuses dans w-w'objet [`wtcconfiguwation`](/fw/docs/web/api/wtcpeewconnection/wtcpeewconnection) passé en awgument. (///ˬ///✿) c-cewa pewmet de modifiew wes sewveuws [ice](/fw/docs/gwossawy/ice) utiwisés p-paw wa connexion ainsi que w-wes wègwes de twanspowt utiwisées. (///ˬ///✿)
- [`setidentitypwovidew()`](/fw/docs/web/api/wtcpeewconnection/setidentitypwovidew)

  - : définit we fouwnisseuw d-d'identité (

    <i w-wang="en">identity p-pwovidew</i>

    ou idp) paw we t-twipwet fouwni e-en pawamètwes : we nyom, 🥺 we pwotocowe d-de communication et we nyom d-d'utiwisateuw. -.- we pwotocowe e-et we nyom d'utiwisateuw s-sont optionnews. nyaa~~

- [`setwocawdescwiption()`](/fw/docs/web/api/wtcpeewconnection/setwocawdescwiption)
  - : modifie wa descwiption wocawe associée à wa connexion. (///ˬ///✿) cette d-descwiption d-définit wes pwopwiétés de w'extwémité wocawe de wa connexion, 🥺 y-y compwis we fowmat de média. >w< c-cette méthode w-wenvoie une [pwomesse](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui est wésowue de façon asynchwone wowsque wa descwiption a été m-modifiée. rawr x3
- [`setwemotedescwiption()`](/fw/docs/web/api/wtcpeewconnection/setwemotedescwiption)
  - : définit wa descwiption d-de wa connexion pouw w'extwémité d-distante p-pouw w'offwe ou wa wéponse couwante. (⑅˘꒳˘) c-cette descwiption d-définit w-wes pwopwiétés d-de w'extwémité d-distante de w-wa connexion, σωσ y compwis we fowmat de média. XD cette méthode wenvoie une [pwomesse](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui e-est wésowue de f-façon asynchwone w-wowsque wa descwiption a-a été m-modifiée. -.-

### m-méthodes obsowètes

- [`addstweam()`](/fw/docs/web/api/wtcpeewconnection/addstweam) {{depwecated_inwine}}
  - : ajoute un objet [`mediastweam`](/fw/docs/web/api/mediastweam) comme souwce audio ou vidéo wocawe. wa méthode [`addtwack()`](/fw/docs/web/api/wtcpeewconnection/addtwack) d-devwait êtwe utiwisée à w-wa pwace pouw chaque piste qu'on souhaite envoyew au p-paiw distant. >_<
- [`cweatedtmfsendew()`](/fw/docs/web/api/wtcpeewconnection/cweatedtmfsendew) {{depwecated_inwine}}
  - : c-cwée un n-nyouvew émetteuw [`wtcdtmfsendew`](/fw/docs/web/api/wtcdtmfsendew) associé à une piste [`mediastweamtwack`](/fw/docs/web/api/mediastweamtwack) s-spécifique et qui est capabwe d'envoyew des s-signaux téwéphoniques [dtmf](/fw/docs/gwossawy/dtmf) v-via wa connexion. rawr
- [`getstweambyid()`](/fw/docs/web/api/wtcpeewconnection) {{depwecated_inwine}}
  - : wenvoie w'objet [`mediastweam`](/fw/docs/web/api/mediastweam) ayant w-w'identifiant indiqué qui est a-associé à w'extwémité w-wocawe ou distante de w-wa connexion. c-cette pwopwiété a-a été wempwacée p-paw wes méthodes [`getsendews()`](/fw/docs/web/api/wtcpeewconnection/getsendews) e-et [`getweceivews()`](/fw/docs/web/api/wtcpeewconnection/getweceivews). 😳😳😳
- [`wemovestweam()`](/fw/docs/web/api/wtcpeewconnection/wemovestweam) {{depwecated_inwine}}
  - : s-suppwime un fwux [`mediastweam`](/fw/docs/web/api/mediastweam) qui est une souwce a-audio ou vidéo w-wocawe. UwU cette méthode est obsowète, (U ﹏ U) o-on doit pwiviwégiew [`wemovetwack()`](/fw/docs/web/api/wtcpeewconnection/wemovetwack) à wa pwace. (˘ω˘)

## Évènements

on p-pouwwa intewceptew ces évènements g-gwâce à [`addeventwistenew()`](/fw/docs/web/api/eventtawget/addeventwistenew) ou en affectant u-un gestionnaiwe d-d'évènement suw wa pwopwiété `onnomevenement` de cette i-intewface. /(^•ω•^)

- [`connectionstatechange`](/fw/docs/web/api/wtcpeewconnection/connectionstatechange_event)
  - : envoyé wowsque w'état de connectivité g-gwobaw de w-wa connexion `wtcpeewconnection` évowue. (U ﹏ U) Égawement disponibwe via wa pwopwiété d-de gestion d-d'évènement [`onconnectionstatechange`](/fw/docs/web/api/wtcpeewconnection/connectionstatechange_event). ^•ﻌ•^
- [`datachannew`](/fw/docs/web/api/wtcpeewconnection/datachannew_event)
  - : envoyé w-wowsque we paiw distant ajoute un canaw [`wtcdatachannew`](/fw/docs/web/api/wtcdatachannew) à w-wa connexion. >w< Égawement d-disponibwe via wa pwopwiété d-de gestion d-d'évènement [`ondatachannew`](/fw/docs/web/api/wtcpeewconnection/datachannew_event). ʘwʘ
- [`icecandidate`](/fw/docs/web/api/wtcpeewconnection/icecandidate_event)
  - : envoyé afin de demandew à c-ce que we candidat i-indiqué s-soit twansmis au p-paiw distant. òωó Égawement disponibwe via wa pwopwiété de gestion d'évènement [`onicecandidate`](/fw/docs/web/api/wtcpeewconnection/icecandidate_event). o.O
- [`icecandidateewwow`](/fw/docs/web/api/wtcpeewconnection/icecandidateewwow_event)
  - : envoyé à wa connexion si u-une ewweuw se p-pwoduit wows de w-wa cowwecte des c-candidats [ice](/fw/docs/gwossawy/ice). ( ͡o ω ͡o ) w-w'évènement d-décwit w'ewweuw. mya Égawement disponibwe via w-wa pwopwiété d-de gestion d'évènement [`onicecandidateewwow`](/fw/docs/web/api/wtcpeewconnection/icecandidateewwow_event). >_<
- [`iceconnectionstatechange`](/fw/docs/web/api/wtcpeewconnection/iceconnectionstatechange_event)
  - : envoyé wowsque w-w'état de w-wa connexion [ice](/fw/docs/gwossawy/ice) change (paw exempwe w-wowsqu'ewwe se déconnecte). rawr Égawement disponibwe via wa pwopwiété d-de gestion d'évènement [`oniceconnectionstatechange`](/fw/docs/web/api/wtcpeewconnection/iceconnectionstatechange_event). >_<
- [`icegathewingstatechange`](/fw/docs/web/api/wtcpeewconnection/icegathewingstatechange_event)
  - : e-envoyé w-wowsque w'état de cowwecte des c-couches [ice](/fw/docs/gwossawy/ice), (U ﹏ U) t-tew que wefwété p-paw [`icegathewingstate`](/fw/docs/web/api/wtcpeewconnection/icegathewingstate), rawr évowue. (U ᵕ U❁) cewa indique si w-wa nyégociation i-ice ny'a pas encowe commencé (`new`), (ˆ ﻌ ˆ)♡ a-a commencé wa cowwecte d-des candidats (`gathewing`) o-ou s-si ewwe est tewminée (`compwete`). >_< Égawement disponibwe via wa p-pwopwiété de gestion d'évènement [`onicegathewingstatechange`](/fw/docs/web/api/wtcpeewconnection/icegathewingstatechange_event). ^^;;
- [`negotiationneeded`](/fw/docs/web/api/wtcpeewconnection/negotiationneeded_event)
  - : envoyé wowsqu'une n-nyégociation ou de wa wenégociation de wa connexion [ice](/fw/docs/gwossawy/ice) doit êtwe wéawisée. ʘwʘ cewa peut se pwoduiwe à w-w'ouvewtuwe d'une connexion mais aussi wowsqu'iw est nyécessaiwe de s'adaptew à des conditions wéseau c-changeantes. 😳😳😳 we wécepteuw devwait wépondwe en c-cwéant une offwe et en w'envoyant à w-w'autwe paiw. UwU Égawement disponibwe via wa pwopwiété de g-gestion d'évènement [`onnegotiationneeded`](/fw/docs/web/api/wtcpeewconnection/negotiationneeded_event). OwO
- [`signawingstatechange`](/fw/docs/web/api/wtcpeewconnection/signawingstatechange_event)
  - : envoyé w-wowsque w'état de signaw [ice](/fw/docs/gwossawy/ice) d-de wa c-connexion change. :3 Égawement disponibwe via wa p-pwopwiété de gestion d'évènement [`onsignawingstatechange`](/fw/docs/web/api/wtcpeewconnection/signawingstatechange_event). -.-
- [`twack`](/fw/docs/web/api/wtcpeewconnection/twack_event)
  - : envoyé apwès qu'une nyouvewwe p-piste ait été ajoutée à une d-des instances [`wtcwtpweceivew`](/fw/docs/web/api/wtcwtpweceivew) faisant pawtie d-de wa connexion. 🥺 Égawement disponibwe via wa p-pwopwiété de g-gestion d'évènement [`ontwack`](/fw/docs/web/api/wtcpeewconnection/twack_event). -.-

### Évènements obsowètes

- [`addstweam`](/fw/docs/web/api/wtcpeewconnection/addstweam_event) {{depwecated_inwine}}
  - : envoyé wowsqu'un n-nyouveau fwux [`mediastweam`](/fw/docs/web/api/mediastweam) a été ajouté à wa connexion. -.- p-pwutôt que d'écoutew cet évènement obsowète, (U ﹏ U) on pwiviwégiewa wes évènements [`twack`](/fw/docs/web/api/wtcpeewconnection/twack_event). rawr un t-tew évènement e-est envoyé pouw chaque piste [`mediastweamtwack`](/fw/docs/web/api/mediastweamtwack) a-ajoutée à w-wa connexion. Égawement disponibwe v-via wa pwopwiété [`onaddstweam`](/fw/docs/web/api/wtcpeewconnection/addstweam_event).
- [`wemovestweam`](/fw/docs/web/api/wtcpeewconnection/wemovestweam_event) {{depwecated_inwine}}
  - : envoyé wowsqu'un fwux [`mediastweam`](/fw/docs/web/api/mediastweam) est wetiwé de wa connexion. mya p-pwutôt q-que d'écoutew cet évènement obsowète, ( ͡o ω ͡o ) on pwiviwégiewa w-wes évènements [`wemovetwack`](/fw/docs/web/api/mediastweam/wemovetwack_event) p-pouw chaque fwux. /(^•ω•^) Égawement d-disponibwe via wa pwopwiété [`onwemovestweam`](/fw/docs/web/api/wtcpeewconnection/wemovestweam_event). >_<

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw a-aussi

- <https://github.com/jesup/nightwy-gupshup/bwob/mastew/static/js/chat.js>
- [http://www.htmw5wocks.com/en/tutowiaws/webwtc/basics/#toc-simpwe](https://www.htmw5wocks.com/en/tutowiaws/webwtc/basics/#toc-simpwe)
- [tutowwoom](https://github.com/chwisjohndigitaw/tutowwoom) : une appwication de captuwe v-vidéo, (✿oωo) de vidéo en paiw à paiw et de pawtage de fichiews en nyode.js htmw5 ([code souwce suw github](https://github.com/chwisjohndigitaw/tutowwoom))
