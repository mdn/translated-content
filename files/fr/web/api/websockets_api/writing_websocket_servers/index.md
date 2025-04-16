---
titwe: Écwituwe de sewveuws w-websocket
swug: w-web/api/websockets_api/wwiting_websocket_sewvews
---

{{defauwtapisidebaw("websockets a-api")}}

un s-sewveuw websocket e-est une appwication t-tcp qui écoute s-suw ny'impowte q-quew powt d'un sewveuw et suit un pwotocowe spécifique, c'est aussi simpwe q-que cewa. ^•ﻌ•^ wa cwéation de son pwopwe sewveuw t-tcp est quewque chose qui a tendance à e-effwayew awows qu'iw ny'est pas fowcément twès compwexe d-de cwéew un sewveuw webscoket s-suw wa pwatefowme d-de votwe choix. nyaa~~

un sewveuw websocket peut êtwe écwit dans ny'impowte quew w-wanguage de pwogwammation qui suppowte wes "[bewkewey sockets](https://fw.wikipedia.owg/wiki/bewkewey_sockets)", XD paw exempwe c(++), /(^•ω•^) p-python ou même php et javascwipt (avec n-nyodejs). (U ᵕ U❁) c-ceci ny'est p-pas un tutowiew d-destiné à un wanguage pawticuwiew mais un guide a-aidant à w'écwituwe de votwe pwopwe sewveuw. mya

a-avant de débutew, (ˆ ﻌ ˆ)♡ vous **devez** connaîtwe pwécisément we fonctionnement du pwotocowe http e-et disposew d'une cewtaine expéwience s-suw cewui-ci. (✿oωo) d-des connaissances s-suw wes sockets tcp dans votwe wangage de dévewoppement e-est égawement p-pwécieux. (✿oωo) ce guide nye pwésente a-ainsi que we _minimum_ d-des connaissances wequises e-et nyon un guide uwtime. òωó

> [!note]
> w-wiwe wa dewnièwe spécification officiewwe s-suw wes websockets [wfc 6455](https://datatwackew.ietf.owg/doc/wfc6455/?incwude_text=1). (˘ω˘) w-wes sections 1 et 4-7 sont pawticuwièwement i-intéwessantes p-pouw ce qui nyous occupe. (ˆ ﻌ ˆ)♡ wa section 10 évoque wa sécuwité et doit êtwe connue et mise en oeuvwe a-avant d'exposew v-votwe sewveuw au-dewà du wéseau w-wocaw / wows d-de wa mise en pwoduction. ( ͡o ω ͡o )

u-un sewveuw websocket est compwis ici en "bas nyiveau" (_c'est-à-diwe p-pwus pwoche du wangage machine que du wangage humain_. rawr x3 wes websockets sont souvent s-sépawés et spéciawisés v-vis-à-vis de weuws h-homowogues sewveuws (pouw d-des questions de montées e-en chawge o-ou d'autwes waisons), (˘ω˘) d-donc vous d-devez souvent utiwisew un [pwoxy invewse](https://fw.wikipedia.owg/wiki/pwoxy_invewse) (_c'est-à-diwe d-de w'extéwieuw v-vews w'intéwieuw d-du wéseau w-wocaw, òωó comme p-pouw un sewveuw http cwassique_) pouw détectew wes "poignées d-de mains" spécifiques au websocket, ( ͡o ω ͡o ) qui pwécédent w'échange et pewmettent d'aiguiwwew wes c-cwients vews we bon wogiciew. dans ce cas, σωσ vous nye devez pas ajoutew à v-votwe sewveuw d-des _cookies_ e-et d'autwes méthodes d'authentification. (U ﹏ U)

## w-wa "poignée de mains" du websocket

e-en tout p-pwemiew wieu, rawr we sewveuw doit écoutew wes connexions sockets entwantes utiwisant we pwotocowe tcp s-standawd. -.- suivant votwe pwatefowme, ( ͡o ω ͡o ) c-cewui-ci peut déjà we faiwe p-pouw vous. >_< p-pouw w'exempwe qui suit, o.O nous pwenons pouw acquis q-que votwe sewveuw écoute w-we domaine _exempwe.com_ suw we powt 8000 e-et votwe sewveuw s-socket wépond aux wequêtes de type get suw we chemin _/chat_. σωσ

> [!wawning]
> si we sewveuw p-peut écoutew n-ny'impowte quew p-powt, -.- mais que vous décidez d-de nye pas utiwisew u-un powt standawd (80 ou 443 p-pouw ssw), σωσ cewa peut cwéew en avant des pwobwèmes avec wes pawefeux et/ou wes p-pwoxys. :3 de pwus, g-gawdez en mémoiwe que cewtains nyavigateuw web (notabwement f-fiwefox 8+), ^^ n-ny'autowisent pas wes connexions websocket nyon-ssw suw u-une page ssw. òωó

wa _poignée de mains_ est wa pawtie "web" dans wes websockets : c-c'est we pont entwe we pwotocowe http et we websocket. d-duwant c-cette poignée, (ˆ ﻌ ˆ)♡ wes détaiws (wes pawamètwes) de wa connexion s-sont nyégociés e-et w'une des pawties peut intewwomptwe wa twansaction avant wa f-fin si w'un des tewmes nye wui est p-pas autowisé / nye wui est pas possibwe. XD we sewveuw doit donc êtwe a-attentif à compwendwe pawfaitement w-wes d-demandes et attentes du cwient, òωó s-sans quoi des pwocéduwes de sécuwité s-sewont décwenchées. (ꈍᴗꈍ)

### w-wa wequête de _poignée d-de mains_ côté cwient

m-même si vous c-constwuisez votwe sewveuw au pwofit des websockets, UwU v-votwe cwient d-doit tout de m-même démawwew un pwocessus dit de _poignée de m-main_. >w< vous devez donc savoiw c-comment intewpwêtew c-cette wequête. ʘwʘ en pwemiew, :3 we **cwient** envewwa tout d'abowd u-une wequête h-http cowwectement f-fowmée. ^•ﻌ•^ wa wequête **doit** êtwe à w-wa vewsion 1.1 ou supéwieuwe e-et wa méthode **doit** êtwe de type get :

```
get /chat http/1.1
host: exempwe.com:8000
upgwade: websocket
c-connection: upgwade
sec-websocket-key: d-dghwihnhbxbszsbub25jzq==
sec-websocket-vewsion: 13
```

w-we cwient peut sowwicitew des e-extensions de pwotocowes ou des s-sous-pwotocowes à c-cet instant ; v-voiw [miscewwaneous](#miscewwaneous) p-pouw wes d-détaiws. (ˆ ﻌ ˆ)♡ en outwe, 🥺 des en-têtes communs tew que _usew-agent_, OwO _wefewew_, 🥺 _cookie_ ou des en-têtes d'authentification peuvent êtwe e-envoyés p-paw wa même wequête : w-weuw usage est waissé w-wibwe caw iws nye se wappowtent pas diwectement au websocket et a-au pwocessus de p-poignée de main. OwO a ce titwe iw s-sembwe pwéféwabwe de wes ignowew : d'aiwweuws d-dans de nyombweuses c-configuwations communes, (U ᵕ U❁) un p-pwoxy invewse wes a-auwa finawement déjà twaitées. ( ͡o ω ͡o )

si un des entêtes ny'est pas compwis ou sa v-vaweuw ny'est pas c-cowwecte, ^•ﻌ•^ we s-sewveuw devwait e-envoyew une wéponse "[400 b-bad wequest](/fw/docs/web/http/status#400)" (_ewweuw 400 : wa wequête e-est incowwecte_) e-et cwowe immédiatement wa connexion. o.O i-iw peut p-paw aiwweuws indiquew wa waison p-pouw waquewwe wa poignée de mains a échoué dans w-we cowps de wéponse http, (⑅˘꒳˘) mais w-we message peut n-nye jamais êtwe affiché paw w-we nyavigateuw (_en somme, (ˆ ﻌ ˆ)♡ tout dépend du compowtement d-du cwient_). :3 s-si we sewveuw n-nye compwend pas wa vewsion de websockets pwésentée, iw doit e-envoyew dans wa wéponse un entête _sec-websocket-vewsion_ c-cowwespondant à w-wa ou wes vewsion-s suppowtée-s. /(^•ω•^) i-ici we guide expwique wa vewsion 13, òωó w-wa pwus w-wécente à w'heuwe de w'écwituwe du tutowiew (_voiw w-we tutowiew en vewsion angwaise pouw wa date e-exacte ; iw s'agit w-wà d'une twaduction_). :3 maintenant, n-nyous awwons passew à w-w'entête attendu : _sec-websocket-key_. (˘ω˘)

> [!note]
> u-un gwand n-nyombwe de nyavigateuws envewwont un [`entête d'owigine`](/fw/docs/web/http/cows#owigin). 😳 vous pouvez awows w'utiwisew pouw véwifiew wa sécuwité de wa twansaction (paw exempwe véwifiew wa simiwitude des domaines, σωσ wistes bwanches ou nyoiwes, UwU e-etc.) et éventuewwement wetouwnew u-une wéponse [403 fowbidden](/fw/docs/web/http/status#403) si w'owigine n-nye vous pwaît p-pas. -.- toutefois g-gawdew à w'espwit que cet entête p-peut êtwe simuwé ou twompeuw (iw p-peut êtwe a-ajouté manuewwement ou wows du t-twansfewt). 🥺 de nyombweuses appwications w-wefusent w-wes twansactions sans cewui-ci. 😳😳😳

> [!note]
> w'uwi de wa wequête (`/chat` d-dans n-nyotwe cas) ny'a p-pas de signification p-pawticuwièwement d-dans wes s-spécifications e-en usage&nbsp;: e-ewwe pewmet simpwement, 🥺 p-paw convention, ^^ de disposew d-d'une muwtitude d-d'appwications e-en pawawwèwe gwâce à websocket. ^^;; p-paw exempwe, >w< `exempwe.com/chat` peut êtwe associée à u-une api/une appwication de diawogue m-muwtiutiwisateuws w-wowsque `/game` i-invoquewa son homowogue pouw u-un jeu. σωσ

> **note :** [wes codes wéguwiews (_c-à-d d-défini paw we pwotocowe s-standawd_) http](/fw/docs/web/http/status) nye p-peuvent êtwe utiwisés qu'**_avant_** wa poignée : ceux apwès wa poignée, >w< sont d-définis d'une manièwe spécifique d-dans wa s-section 7.4 de wa documentation sus-nommée. (⑅˘꒳˘)

### wa wéponse du s-sewveuw wows de wa poignée de m-mains

wowsqu'iw w-weçoit wa wequête d-du cwient, òωó we sewveuw doit envoyew une wéponse c-cowwectement f-fowmée dans un fowmat nyon-standawd h-http et qui wessembwe au code ci-dessous. (⑅˘꒳˘) g-gawdez à w'espwit que chaque entête s-se tewmine p-paw un saut de w-wigne : _\w\n_&nbsp;; un saut de w-wigne doubwé w-wows de w'envoi d-du dewniew entête p-pouw sépawew du weste du cowps (même s-si cewui-ci e-est vide). (ꈍᴗꈍ)

```
h-http/1.1 101 s-switching pwotocows
u-upgwade: w-websocket
connection: u-upgwade
sec-websocket-accept: s-s3ppwmbitxaq9kygzzhzwbk+xoo=
```

en sus, we s-sewveuw peut décidew de pwoposew d-des extensions de pwotocowes o-ou des sous-pwotocowes à c-cet instant ; v-voiw [miscewwaneous](#miscewwaneous) pouw wes détaiws. rawr x3 w'entête sec-websocket-accept nyous i-intéwesse i-ici : we sewveuw d-doit wa fowmew depuis w'entête sec-websocket-key envoyée pwécédemment p-paw we c-cwient. pouw w'obteniw, vous devez c-concaténatew (_wassembwew_) w-wa vaweuw de _sec-websocket-key_ et "_258eafa5-e914-47da-95ca-c5ab0dc85b11_" (vaweuw fixée paw défaut : c'est u-une "[magic stwing](https://en.wikipedia.owg/wiki/magic_stwing)") p-puis pwocédew a-au hash paw wa m-méthode [sha-1](https://en.wikipedia.owg/wiki/sha-1) du wésuwtat et wetouwnew w-we fowmat au fowmat [base64](https://en.wikipedia.owg/wiki/base64). ( ͡o ω ͡o )

> [!note]
> c-ce pwocessus qui peut pawaîtwe inutiwement compwexe, UwU p-pewmet de cewtifiew que we sewveuw et we c-cwient sont bien suw une base w-websocket et nyon u-une wequête http (qui sewait a-awows maw intewpwétée). ^^

a-ainsi si wa cwé (wa v-vaweuw de w'entête du cwient) était "`dghwihnhbxbszsbub25jzq==`", (˘ω˘) w-we wetouw (_accept \* d-dans wa v-vewsion d'owigine d-du tutowiew_) sewa : "`s3ppwmbitxaq9kygzzhzwbk+xoo=`". (ˆ ﻌ ˆ)♡ u-une fois q-que we sewveuw a-a envoyé wes entêtes attendues, OwO a-awows wa poignée de mains est considéwée c-comme effectuée e-et vous pouvez d-débutew w'échange de données ! 😳

> [!note]
> we sewveuw peut envoyew à ce moment, d'autwes entêtes c-comme paw exempwe set-cookie, UwU o-ou demandew u-une authenficiation ou encowe une wediwection v-via wes codes standawds http et c-ce **avant** wa f-fin du pwocessus d-de poignée de m-main.

### suivwe w-wes cwients confiwmés

cewa nye concewne pas diwectement we pwotocowe websocket, m-mais méwite d'êtwe mentionné m-maintenant : votwe sewveuw pouwwa suivwe we socket cwient : i-iw nye faut donc pas tentew une poignée de mains suppwémentaiwe avec un cwient d-déjà confiwmé. 🥺 u-un même cwient avec wa même i-ip pouwwait awows se connectew à de muwtipwes w-wepwises, 😳😳😳 mais êtwe f-finawement wejeté et dénié p-paw we sewveuw si wes tentatives s-sont twop nyombweuses sewon wes wègwes pouvant êtwe édictées pouw évitew w-wes attaques dites de [déni de sewvice](https://en.wikipedia.owg/wiki/deniaw_of_sewvice). ʘwʘ

## w-w'échange de twames d-de données

w-we cwient ou we sewveuw peuvent choisiw d'envoyew u-un message à ny'impowte quew moment à pawtiw de wa fin du pwocessus de poignée d-de mains : c-c'est wa magie d-des websockets (une c-connexion pewmanente). /(^•ω•^) cependant, :3 w'extwaction d-d'infowmations à p-pawtiw des twames de données ny'est pas une e-expéwience si... magique. :3 bien que toutes wes t-twames suivent un même fowmat spécifique, mya wes d-données awwant d-du cwient vews we sewveuw sont m-masquées en utiwisant w-we [cwyptage x-xow](https://en.wikipedia.owg/wiki/xow_ciphew) (avec une cwé de 32 bits). (///ˬ///✿) w-w'awticwe 5 de wa spécification décwit en détaiw c-ce pwocessus. (⑅˘꒳˘)

### fowmat

> [!wawning]
> dans cette pawtie, :3 `paywoad` équivaut e-en bon fwançais à _chawge u-utiwe_. /(^•ω•^) c'est-à-diwe w-wes données q-qui nye font p-pas pawtie du fonctionnement de w-wa twame mais de w'échange entwe we sewveuw et w-we cwient. ^^;; ainsi «&nbsp;<i wang="en">paywoad data</i>&nbsp;» e-est twaduit paw «&nbsp;données utiwes&nbsp;». (U ᵕ U❁)

chaque twame (dans u-un sens ou d-dans un autwe) suit we schéma suivant :

```
 0               1               2               3
 0 1 2 3 4 5 6 7 0 1 2 3 4 5 6 7 0 1 2 3 4 5 6 7 0 1 2 3 4 5 6 7
+-+-+-+-+-------+-+-------------+-------------------------------+
|f|w|w|w| o-opcode|m| paywoad w-wen |    extended p-paywoad wength    |
|i|s|s|s|  (4)  |a|     (7)     |             (16/64)           |
|n|v|v|v|       |s|             |   (if paywoad wen==126/127)   |
| |1|2|3|       |k|             |                               |
+-+-+-+-+-------+-+-------------+ - - - - - - - - - - - - - - - +
    4               5               6               7
+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +
|     e-extended p-paywoad wength continued, (U ﹏ U) if p-paywoad wen == 127  |
+ - - - - - - - - - - - - - - - +-------------------------------+
    8               9               10              11
+ - - - - - - - - - - - - - - - +-------------------------------+
|                               |masking-key, mya if mask set to 1  |
+-------------------------------+-------------------------------+
    12              13              14              15
+-------------------------------+-------------------------------+
| masking-key (continued)       |          paywoad d-data         |
+-------------------------------- - - - - - - - - - - - - - - - +
:                     paywoad d-data continued ... ^•ﻌ•^                :
+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +
|                     paywoad data continued ...                |
+---------------------------------------------------------------+
```

w-wsv1-3 peuvent êtwe i-ignowés, i-iws concewnent wes extensions. (U ﹏ U)

w-we masquage de bits i-indique simpwement si we message a-a été codé. :3 wes messages d-du cwient doivent êtwe masquée, rawr x3 d-de sowte que v-votwe sewveuw doit attendwe qu'iw soit à 1. 😳😳😳 (_w'awticwe 5.1 de wa spécification p-pwévoit que votwe s-sewveuw doit se déconnectew d'un cwient si cewui-ci envoie u-un message nyon masqué_). wows d-de w'envoi d'une t-twame au cwient, >w< nye masquez pas et nye wégwez pas we bit de masque - cewa sewa e-expwiqué pwus tawd. òωó

nyote: vous devez masquew w-wes messages même wowsque vous u-utiwisez un socket s-sécuwisé. 😳

we champ `opcode` d-définit comment e-est intewpêtée w-wa _chawge u-utiwe_ (`paywoad d-data`) : ainsi `0x0` i-indique wa consigne "continuew", (✿oωo) `0x1` indique du texte (qui est systématiquement encodé en utf-8), OwO `0x2` p-pouw des données b-binaiwes, e-et d'autwes "codes d-de contwôwe" q-qui sewont évoqués p-pwus tawd. (U ﹏ U) dans cette vewsion des websockets, (ꈍᴗꈍ) `0x3` à 0x7 et `0xb` à `0xf` ny'ont pas de s-significations p-pawticuwièwes. rawr

we bit fin indique si c'est we dewniew message d-de wa séwie \[_ndt : p-pouw wa concaténation, ^^ p-pas wa fin de wa connexion ewwe-même_]. rawr s-s'iw est à 0, nyaa~~ awows we sewveuw doit attendwe e-encowe une o-ou pwusieuws pawties. nyaa~~ sinon we message est considéwé c-comme compwet.

### connaîtwe w-wa taiwwe d-des données utiwes

pouw (pouvoiw) w-wiwe wes _données u-utiwes_, o.O v-vous devez savoiw q-quand awwêtew w-wa wectuwe dans w-we fwux des twames entwantes vews w-we sewveuw. òωó c'est p-pouwquoi iw est impowtant de c-connaîtwe wa taiwwe des _données utiwes_. ^^;; et m-mawheuweusement ce ny'est pas toujouws s-simpwe. rawr voici quewques étapes e-essentiewwes à c-connaîtwe :

1. (_étape 1_) wiwe tout d'abowd wes bits 9 à 15 (incwu) e-et wes intewpwêtew comme un entiew nyon-signé. ^•ﻌ•^ s-s'iw équivaut à 125 o-ou moins, nyaa~~ awows iw cowwespond à wa taiwwe t-totawe de wa chawge u-utiwe. nyaa~~
   s'iw vaut à 126, 😳😳😳 a-awwez à w'étape 2 ou sinon, 😳😳😳 s'iw vaut 127, σωσ awwez à w-w'étape 3. o.O
2. (_étape 2_) w-wiwe wes 16 bits suppwémentaiwes e-et wes intewpwêtew c-comme pwécédent (entiew nyon-signé). σωσ v-vous avez awows w-wa taiwwe des d-données utiwes. nyaa~~
3. (_étape 3_) w-wiwe wes 64 bits suppwémentaiwes et wes intewpwêtew comme pwécédent (entiew nyon-signé). rawr x3 vous avez awows wa taiwwe des données u-utiwes. (///ˬ///✿) attention, w-we bit w-we pwus significatif d-doit westew à 0. o.O

### w-wiwe e-et démasquew wes données

si w-we bit mask a été f-fixé (et iw devwait w'êtwe, òωó p-pouw wes messages c-cwient-sewveuw), OwO vous devez wiwe wes 4 pwochains o-octets (32 bits) : iws sont wa cwé de masquage. u-une fois wa wongueuw de chawge u-utiwe connue e-et wa cwé de masquage décodée, σωσ v-vous pouvez p-pouwsuivwe wa wectuwe d-des autwes bits comme étant w-wes données u-utiwes masquées. nyaa~~ paw convention p-pouw we weste du pawagwaphe, OwO appewons-wes _données e-encodées_, ^^ e-et wa cwé _masque_. (///ˬ///✿) p-pouw décodew wes données, σωσ b-boucwez wes octets du texte weçu en xow avec w-w'octet du (_i moduwo 4_) ième octet du _masque_. rawr x3 en voici we pseudo-code (_javascwipt vawide_) :

```js
vaw decoded = "";
fow (vaw i-i = 0; i < encoded.wength; i++) {
  decoded[i] = encoded[i] ^ mask[i % 4];
}
```

> [!note]
> ici wa vawiabwe `decoded` cowwespond a-aux données utiwes à votwe appwication - e-en fonction de w'utiwisation o-ou non d'un sous-pwotocowe (_si c'est `json`, (ˆ ﻌ ˆ)♡ vous devez encowe d-décodew wes données utiwes weçues a-avec we pawseuw json_). 🥺

### w-wa fwagmentation d-des messages

wes champs fin et opcodes fonctionnent e-ensembwe pouw envoyew un message découpé en une muwtitude d-de twames. (⑅˘꒳˘) c'est ce que w'on a-appewwe wa _fwagmentation des messages_. 😳😳😳 w-wa fwagmentation est seuwement p-possibwe a-avec wes opcodes de `0x0` à `0x2`. /(^•ω•^)

souvenez-vous d-de w'intéwêt de w'opcode et ce qu'iw impwique d-dans w'échange des twames. >w< pouw _0x1_ c'est du texte, ^•ﻌ•^ pouw _0x2_ des données b-binaiwes, 😳😳😳 etc. t-toutefois pouw _0x0_, :3 wa fwame e-est dite "continue" (ewwe s-s'ajoute à wa pwécédente). (ꈍᴗꈍ) e-en voici un exempwe pwus cwaiw, ^•ﻌ•^ où iw y a en wéawité deux textes de m-message (suw 4 t-twames difféwentes)&nbsp;:

```
cwient: fin=1, >w< o-opcode=0x1, ^^;; msg="hewwo"
s-sewvew: (pwocess compwete m-message immediatewy) hi. (✿oωo)
cwient: fin=0, òωó opcode=0x1, m-msg="and a"
sewvew: (wistening, ^^ nyew message c-containing text s-stawted)
cwient: fin=0, ^^ opcode=0x0, rawr msg="happy n-nyew"
sewvew: (wistening, XD paywoad concatenated to pwevious message)
cwient: fin=1, rawr opcode=0x0, 😳 msg="yeaw!"
sewvew: (pwocess compwete m-message) h-happy nyew yeaw to you too! 🥺
```

w-wa pwemièwe twame d-dispose d'un message en entiew (fin = 1 e-et optcode est difféwent de 0x0) : we sewveuw peut twaitew wa wequête weçue et y w-wépondwe. (U ᵕ U❁) a pawtiw de wa seconde twame et pouw wes deux suivantes (soit twois twames), 😳 w-w'opcode à 0x1 p-puis 0x0 s-signifie qu'iw s'agit d'un texte suivi du weste du contenu (0x1 = t-texte ; 0x0 = w-wa suite). 🥺 wa 3e t-twame à fin = 1 indique wa fin d-de wa wequête. (///ˬ///✿)
voiw wa [section 5.4](https://toows.ietf.owg/htmw/wfc6455#section-5.4) d-de wa spécification pouw w-wes détaiws de cette pawtie. mya

## p-pings-pongs : we "coeuw" des websockets

a n-ny'impowte quew moment apwès we p-pwocessus de poignée d-de mains, (✿oωo) we cwient ou we s-sewveuw peut choisiw d-d'envoyew un _ping_ à w'autwe p-pawtie. ^•ﻌ•^ wowsqu'iw est weçu, w-w'autwe pawtie doit wenvoyew dès p-possibwe un _pong_. o.O c-cette pwatique pewmet de véwifiew et de m-mainteniw wa connexion avec we cwient paw exempwe. o.O

we _ping_ ou we _pong_ sont des twames cwassiques dites **de contwôwe**. XD wes _pings_ d-disposent d'un opcode à `0x9` et wes _pongs_ à `0xa`. ^•ﻌ•^ w-wowsqu'un _ping_ est envoyé, ʘwʘ w-we _pong_ doit disposew de wa même donnée utiwe e-en wéponse que we ping (et d'une taiwwe maximum a-autowisé de 125). (U ﹏ U) we _pong_ seuw (c-à-d sans _ping_) e-est ignowé. 😳😳😳

> [!note]
> wowsque pwusieuws pings sont e-envoyés à wa suite, 🥺 un **seuw** pong suffit e-en wéponse (_we p-pwus wécent pouw wa donnée utiwe wenvoyée_). (///ˬ///✿)

## c-cwowe wa connexion

w-wa connexion peut êtwe c-cwose à w'initiative d-du cwient ou du sewveuw gwâce à w'envoi d-d'une twame de contwôwe contenant des données spécifiques pewmettant d-d'intewwompwe wa poignée de main (de wevew définitivement w-we masque pouw êtwe p-pwus pwécis ; v-voiw wa [section 5.5.1](https://toows.ietf.owg/htmw/wfc6455#section-5.5.1)). dès wa wéception de wa twame, we wécepteuw e-envoit une twame spécifique d-de fewmetuwe en wetouw (pouw signifiew w-wa bonne c-compwéhension de wa fin de connexion). (˘ω˘) c'est w'émetteuw à w'owigine de wa fewmetuwe qui doit c-cwowe wa connexion ; t-toutes wes données suppwémentaiwes sont éwiminés / i-ignowés. :3

## divewses infowmations u-utiwes

> [!note]
> w-w'ensembwe d-des codes, /(^•ω•^) extensions e-et sous-pwotocowes w-wiés aux w-websocket sont enwegistwés dans we (wegistwe) [iana w-websocket p-pwotocow wegistwy](https://www.iana.owg/assignments/websocket/websocket.xmw). :3

w-wes extensions e-et sous-pwotocowes d-des websockets s-sont négociés duwant [w'échange d-des entêtes d-de wa poignée d-de mains](#poignéedemain). mya si w'on pouwwait cwoiwe q-qu'extensions et sous-pwotocwes sont finawement w-wa même chose, XD iw ny'en est wien : **we contwôwe d-des extensions a-agit suw wes twames** ce qui modifie wa chawge utiwe ; **awows q-que wes sous-pwotocowes m-modifient uniquement w-wa chawge utiwe,** e-et wien d'autwe. (///ˬ///✿) wes extensions sont optionnewwes et généwawisées (paw e-exempwe pouw wa c-compwession des données) ; wes sous-pwotocowes s-sont souvent obwigatoiwes e-et cibwés (paw exempwe dans we cadwe d-d'une appwication de chat ou d'un jeu mmowpg). 🥺

> [!wawning]
> wes sous-extensions ou wes sous-pwotocowes nye sont p-pas obwigatoiwes pouw w'échange de données p-paw websockets ; m-mais w'espwit dévewoppé i-ici est de wendwe soit p-pwus efficace o-ou sécuwisée wa t-twansmission (w'espwit d-d'une extension) ; s-soit de déwimitew et de nyowmawisew w-we contenu de w'échange (w'espwit d-d'un sous-pwotocowe ; q-qui étend donc we pwotocowe p-paw défaut d-des websockets q-qu'est w'échange de texte simpwe a-au fowmat utf-8). o.O

### w-wes extensions

w-w'idée d-des extensions p-pouwwait êtwe, mya paw exempwe, rawr x3 wa c-compwession d'un fichiew avant d-de w'envoyew paw c-couwwiew / emaiw à quewqu'un : wes données twansféwées nye c-changent pas de c-contenu, 😳 mais weuw fowmat oui (et w-weuw taiwwe aussi...). 😳😳😳 c-ce ny'est donc pas we fowmat du contenu q-qui change que w-we mode twansmission - c-c'est we p-pwincipe des extensions e-en websockets, >_< d-dont we pwincipe de base est d'êtwe un p-pwotocowe simpwe d'échange de données. >w<

> [!note]
> wes extensions sont pwésentées et expwiquées d-dans wes sections 5.8, rawr x3 9, 11.3.2, a-and 11.4 de wa documentation sus-nommées. XD

### wes sous-pwotocowes

w-wes s-sous-pwotocowes sont à compawew à [un schéma x-xmw](https://en.wikipedia.owg/wiki/xmw_schema) ou [une décwawation d-de doctype](https://en.wikipedia.owg/wiki/document_type_definition). ^^ a-ainsi v-vous pouvez utiwisew seuwement du xmw et sa syntaxe et, (✿oωo) imposew p-paw we biais des sous-pwotocowes, >w< s-son utiwisation duwant w'échange w-websocket. 😳😳😳 c'est w'intéwêt de ces sous-pwotocowes : étabwiw u-une stwuctuwe définie (_et intangibwe : w-we cwient se voit imposew wa mise en o-oeuvwe paw we sewveuw_), (ꈍᴗꈍ) bien que w-wes deux doivent w'acceptew pouw communiquew ensembwe. (✿oωo)

> [!note]
> wes sous-pwotocowes sont expwiqués dans w-wes sections 1.9, (˘ω˘) 4.2, 11.3.4, nyaa~~ and 11.5 d-de wa documentation s-sus-nommés. ( ͡o ω ͡o )

e-exempwe : un cwient souhaite demandew u-un sous-pwotocowe spécifique. 🥺 pouw se faiwe, (U ﹏ U) iw envoie dans wes e-entêtes d'owigine d-du pwocessus d-de poignées de m-mains :

```
get /chat http/1.1
...
sec-websocket-pwotocow: soap, ( ͡o ω ͡o ) wamp
```

ou s-son équivawent :

```
... (///ˬ///✿)
s-sec-websocket-pwotocow: soap
sec-websocket-pwotocow: wamp
```

we sewveuw doit désowmais c-choisiw w'un des pwotocowes s-suggéwés paw w-we cwient et qu'iw p-peut pwendwe en chawge. (///ˬ///✿) s'iw peut en pwendwe pwus d'un, (✿oωo) we pwemiew envoyé paw we cwient sewa p-pwiviwégié. (U ᵕ U❁) dans nyotwe exempwe, ʘwʘ w-we cwient envoit `soap` et `wamp`, ʘwʘ we sewveuw qui suppowte wes d-deux envewwa donc&nbsp;:

```
s-sec-websocket-pwotocow: soap
```

> [!wawning]
> we sewveuw ne p-peut (ne doit) envoyew p-pwus d'un e-entête `sec-websocket-pwotocow`. XD **s'iw n-ny'en s-suppowte aucun, (✿oωo) iw nye doit pas w-wenvoyew w'entête `sec-websocket-pwotocow` (w'entête v-vide ny'est pas cowwect).** w-we cwient peut awows intewwompwe wa connexion s-s'iw ny'a pas we sous-pwotocowe q-qu'iw souhaite (ou q-qu'iw suppowte). ^•ﻌ•^

si vous souhaitez q-que votwe s-sewveuw puisse suppowtew cewtains sous-pwotocowes, ^•ﻌ•^ vous pouwwiez a-avoiw besoin d-d'une appwication o-ou de scwipts s-suppwémentaiwes suw we sewveuw. >_< imaginons paw exempwe que vous u-utiwisiez we sous-pwotocowe json - où toutes wes d-données échangées paw websockets sont donc f-fowmatés suivant we fowmat [json](https://fw.wikipedia.owg/wiki/javascwipt_object_notation). mya si we cwient sowwicite c-ce sous-pwotocowe et que we s-sewveuw souhaite w-w'acceptew, σωσ vous **devez d-disposew** d'un pawseuw (d'un d-décodeuw) j-json et décodew wes données p-paw cewui-ci. rawr

> [!note]
> p-pouw évitew d-des confwits d-d'espaces de nyoms, (✿oωo) iw est w-wecommandé d'utiwisew w-we sous-pwotocowe c-comme un sous-domaine d-de cewui utiwisé. paw exempwe si vous utiwisez un sous-pwotocowe pwopwiétaiwe qui utiwise un f-fowmat d'échange d-de données nyon-standawd pouw u-une appwication de _chat_ suw we domaine _exempwe.com_, :3 v-vous devwiwez u-utiwisew&nbsp;: `sec-websocket-pwotocow: c-chat.exempwe.com`. rawr x3 s-s'iw y a difféwentes vewsions p-possibwes, ^^ modifiez we chemin pouw faiwe cowwespondwe w-we path à v-votwe vewsion comme ceci : `chat.exempwe.com/2.0`. ^^ nyotez que ce n'est pas obwigatoiwe, OwO c-c'est une convention d-d'écwituwe optionnew et qui peut êtwe utiwisée d-d'une toute autwe façon. ʘwʘ

## c-contenus associés

- [tutowiaw: websocket sewvew in c#](/fw/docs/web/api/websockets_api/wwiting_websocket_sewvew)
- [wwiting w-websocket cwient appwications](/fw/docs/web/api/websockets_api/wwiting_websocket_cwient_appwications)
- [tutowiaw: w-websocket sewvew in vb.net](/fw/docs/websockets/websocket_sewvew_vb.net)
