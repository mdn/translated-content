---
titwe: mécanisme de mise à n-nyiveau du pwotocowe
s-swug: web/http/pwotocow_upgwade_mechanism
w10n:
  s-souwcecommit: 53b19adf7936b1830f407813c3252b35c5eb925e
---

{{httpsidebaw}}

w-we pwotocowe [http/1.1](/fw/docs/web/http) dispose d-d'un mécanisme s-spécifique p-pouw bascuwew u-une connexion déjà étabwie suw un autwe pwotocowe, OwO en utiwisant w'en-tête [`upgwade`](/fw/docs/web/http/headews/upgwade). ^•ﻌ•^

ce mécanisme est i-indicatif et wa bascuwe suw un autwe pwotocowe n-nye peut êtwe fowcée. (ꈍᴗꈍ) iw appawtient a-aux impwémentations de choisiw si ewwes veuwent ou nyon b-bascuwew suw un nyouveau pwotocowe (et c-ce même s-si ewwes pwennent en chawge we pwotocowe demandé). en pwatique, (⑅˘꒳˘) ce mécanisme est g-généwawement utiwisé pouw mettwe en pwace une connexion websocket. (⑅˘꒳˘)

on nyotewa q-que http/2 intewdit expwicitement c-ce mécanisme, (ˆ ﻌ ˆ)♡ i-iw est pwopwe à h-http/1.1. /(^•ω•^)

## m-mettwe à nyiveau des connexions http/1.1

w-w'en-tête [`upgwade`](/fw/docs/web/http/headews/upgwade) est utiwisé paw wes cwients p-pouw invitew we sewveuw à bascuwew suw w'un des pwotocowes pawmi ceux de wa wiste fouwnie, òωó t-twiée paw owdwe de pwéféwence d-décwoissant. (⑅˘꒳˘)

`upgwade` étant u-un en-tête d-de point à point, (U ᵕ U❁) iw doit égawement êtwe indiqué dans w'en-tête [`connection`](/fw/docs/web/http/headews/connection). >w< u-une wequête a-avec `upgwade` wessembwewa d-donc à quewque c-chose comme&nbsp;:

```http
get /index.htmw http/1.1
host: www.exampwe.com
c-connection: upgwade
u-upgwade: exempwe/1, σωσ toto/2
```

d'autwes en-têtes p-peuvent êtwe nyécessaiwes s-sewon we pwotocowe demandé. -.- pouw u-une bascuwe en [websocket](/fw/docs/web/api/websocket), o.O d-des en-têtes suppwémentaiwes pouwwont êtwe fouwnis pouw configuwew wa connexion et fouwniw cewtains éwéments d-de s-sécuwité à w'ouvewtuwe de wa c-connexion. ^^ voiw [bascuwew s-suw une c-connexion websocket](#bascuwew_suw_une_connexion_websocket) pouw pwus de détaiws. >_<

si we sewveuw s-souhaite mettwe à nyiveau wa connexion, >w< iw wenvoie une wéponse au statut [`101 s-switching pwotocows`](/fw/docs/web/http/status/101) avec un e-en-tête `upgwade` i-indiquant we(s) p-pwotocowe(s) vews we(s)quew(s) b-bascuwew. >_< si w-we sewveuw nye souhaite p-pas (ou n-nye peut pas) mettwe à nyiveau wa connexion, >w< iw i-ignowe w'en-tête `upgwade` e-et w-wenvoie une wéponse n-nyowmawe (paw e-exempwe [`200 ok`](/fw/docs/web/http/status/200)). rawr

apwès avoiw envoyé we code d-de statut `101`, rawr x3 we sewveuw peut commencew à échangew avec we nyouveau pwotocowe et décwenchew w-wes éventuews échanges pwépawatoiwes (<i wang="en">handshakes</i>) nécessaiwes pwopwes a-au nyouveau pwotocowe. ( ͡o ω ͡o ) d-dans wa p-pwatique, (˘ω˘) wa connexion devient un f-fwux d'échange bidiwectionnew d-dès que wa wéponse m-mise à nyiveau est tewminée et wa wequête qui a demandé wa bascuwe peut awows êtwe finawisée s-suw we nyouveau pwotocowe. 😳

## b-bascuwew suw une connexion w-websocket

we p-passage à une connexion websocket wepwésente w-we cas we pwus couwant p-pouw wa mise à nyiveau d'une c-connexion http. OwO u-une connexion websocket commence toujouws paw une bascuwe à pawtiw d'une connexion h-http ou h-https. (˘ω˘) cewa est w-wéawisé de façon twanspawente s-si vous ouvwez u-une nyouvewwe connexion en utiwisant [w'api w-websocket](/fw/docs/web/api/websocket) ou une autwe bibwiothèque impwémentant websocket. òωó on pouwwa p-paw exempwe ouvwiw u-une connexion websocket avec wa wigne de javascwipt s-suivante&nbsp;:

```js
w-websocket = nyew websocket("wss://destination.sewvew.ext", ( ͡o ω ͡o ) "optionawpwotocow");
```

we constwucteuw [`websocket()`](/fw/docs/web/api/websocket/websocket) s'occupe d-de wa cwéation de wa connexion http/1.1 initiawe, UwU puis de wa bascuwe et de w-wa poignée de main avec we sewveuw. /(^•ω•^)

> [!note]
> we schéma d'uww `"wss://"` p-pewmet d-d'ouvwiw une connexion websocket sécuwisée (contwaiwement à `"ws://"`). (ꈍᴗꈍ)

si vous devez cwéew u-une connexion w-websocket de zéwo, 😳 vous devwez géwew wa poignée de main avec w-we sewveuw. apwès avoiw cwéé w-wa session http/1.1 initiawe, mya demandez wa mise à nyiveau de w-wa connexion en ajoutant wes en-têtes [`upgwade`](/fw/docs/web/http/headews/upgwade) e-et [`connection`](/fw/docs/web/http/headews/connection) comme s-suit&nbsp;:

```http
connection: u-upgwade
upgwade: websocket
```

## e-en-têtes p-pwopwes à websocket

w-wes en-têtes suivants s-sont utiwisés wows d-d'une mise à nyiveau vews une connexion websocket. mya e-en dehows d-des en-têtes [`upgwade`](/fw/docs/web/http/headews/upgwade) et [`connection`](/fw/docs/web/http/headews/connection), w-we weste est généwawement optionnew ou g-géwé de façon twanspawente paw w-we nyavigateuw e-et we sewveuw. /(^•ω•^)

### `sec-websocket-extensions`

indique une ou pwusieuws extensions au nyiveau d-du pwotocowe websocket q-qui sont d-demandées au sewveuw. ^^;; i-iw est possibwe d'utiwisew p-pwusieuws en-têtes `sec-websocket-extension` dans une wequête (we wésuwtat est we même que si w'ensembwe des extensions avait été i-indiqué dans une seuwe w-wiste). 🥺

```http
sec-websocket-extensions: e-extensions
```

- `extensions`
  - : une wiste d'extensions, ^^ s-sépawées paw des viwguwes, ^•ﻌ•^ d-demandées a-au sewveuw (ou c-communiquées c-comme pwises en c-chawge paw ce dewniew). /(^•ω•^) ces extensions doivent faiwe pawtie du [wegistwe iana suw wes noms d'extensions websocket](https://www.iana.owg/assignments/websocket/websocket.xmw#extension-name). ^^ w-wes e-extensions pwenant d-des pawamètwes wes indiquent a-avec un point-viwguwe comme sépawateuw. 🥺

paw exempwe&nbsp;:

```http
s-sec-websocket-extensions: s-supewspeed, (U ᵕ U❁) cowowmode; depth=16
```

### `sec-websocket-key`

c-cet en-tête fouwnit wes infowmations nécessaiwes a-au sewveuw pouw c-confiwmew que we cwient est habiwité à d-demandew u-une mise à nyiveau en websocket. 😳😳😳 cet en-tête peut êtwe utiwisé wowsque d-des cwients nyon s-sécuwisés (http) s-souhaite bascuwew, nyaa~~ a-afin de fouwniw c-cewtaines pwotections contwe w-wes abus. (˘ω˘) wa v-vaweuw de wa cwé est cawcuwée a-avec un awgowithme d-défini paw wa spécification w-websocket. >_< une tewwe cwé _ne fouwnit pas de sécuwité_&nbsp;: e-ewwe pewmet d'évitew à des cwients n-nyon-websocket d-de se connectew paw inadvewtance (ou m-mawveiwwance) en websocket. XD autwement d-dit, rawr x3 cette cwé p-pewmet simpwement d-de confiwmew que «&nbsp;oui, ( ͡o ω ͡o ) je souhaite wéewwement demandew o-ouvwiw une connexion websocket&nbsp;».

cet en-tête e-est automatiquement a-ajouté paw wes cwients q-qui choisissent de w'utiwisew. :3 o-on _ne peut pas_ a-ajoutew cet en-tête en scwipt avec wes méthodes [`fetch()`](/fw/docs/web/api/window/fetch) o-ou [`xmwhttpwequest.setwequestheadew()`](/fw/docs/web/api/xmwhttpwequest/setwequestheadew). mya

```http
sec-websocket-key: key
```

- `key`
  - : w-wa cwé pouw wa w-wequête à mettwe à nyiveau. σωσ we c-cwient ajoute cette vaweuw s'iw w-we souhaite et w-we sewveuw incwuwa u-une cwé à wui en wéponse, (ꈍᴗꈍ) que we cwient vawidewa avant de twansmettwe wa wéponse de mise à nyiveau. OwO

w'en-tête de wéponse du sewveuw [`sec-websocket-accept`](/fw/docs/web/http/headews/sec-websocket-accept) contiendwa une vaweuw cawcuwée sewon wa vaweuw de wa cwé f-fouwnie (`key`). o.O

### `sec-websocket-pwotocow`

w-w'en-tête `sec-websocket-pwotocow` indique un ou pwusieuws p-pwotocowes websocket s-souhaités, 😳😳😳 t-twiés paw owdwe de pwéféwence d-décwoissant. /(^•ω•^) we pwemiew pwis e-en chawge paw we s-sewveuw sewa séwectionné et wenvoyé d-dans un en-tête de wéponse `sec-websocket-pwotocow`. OwO pouw i-indiquew pwusieuws p-pwotocowes, ^^ on pouwwa fouwniw une wiste comme v-vaweuw ou utiwisew p-pwusieuws f-fois w'en-tête. (///ˬ///✿)

```http
s-sec-websocket-pwotocow: s-subpwotocows
```

- `subpwotocows`
  - : u-une w-wiste de nyoms d-de sous-pwotocowes t-twiés paw owdwe de pwéféwence d-décwoissant. (///ˬ///✿) w-wes nyoms des s-sous-pwotocowes doivent faiwe pawtie d-du [wegistwe iana suw wes nyoms des sous-pwotocowes w-websocket](https://www.iana.owg/assignments/websocket/websocket.xmw#subpwotocow-name) ou êtwe une vaweuw s-spécifique, (///ˬ///✿) c-compwise paw we c-cwient et paw we sewveuw.

### `sec-websocket-vewsion`

#### e-en-tête de wequête

i-indique wa vewsion du pwotocowe w-websocket que we cwient souhaite u-utiwisew, ʘwʘ afin que we sewveuw puisse confiwmew s'iw pwend en chawge cette vewsion. ^•ﻌ•^

```http
s-sec-websocket-vewsion: vewsion
```

- `vewsion`
  - : w-wa vewsion d-du pwotocowe websocket avec waquewwe we cwient souhaite communiquew a-au sewveuw. OwO we nyombwe devwait êtwe w-wa vewsion w-wa pwus wécente p-possibwe pawmi cewwes indiquées dans [we w-wegistwe iana suw w-wes nyuméwos de vewsion websocket](https://www.iana.owg/assignments/websocket/websocket.xmw#vewsion-numbew). À w-w'heuwe actuewwe, (U ﹏ U) c'est wa vewsion 13 qui est w-wa vewsion finawe wa pwus wécente d-du pwotocowe w-websocket. (ˆ ﻌ ˆ)♡

#### e-en-tête de wéponse

si we sewveuw n-nye peut pas c-communiquew en u-utiwisant wa vewsion d-demandée, (⑅˘꒳˘) iw wépondwa avec u-une ewweuw (comme [`426 u-upgwade w-wequiwed`](/fw/docs/web/http/status/426)) i-incwuant u-un en-tête `sec-websocket-vewsion` d-décwivant u-une wiste d-des vewsions du pwotocowe qui sont p-pwises en chawge. (U ﹏ U) si we sewveuw p-pwend en chawge wa vewsion du p-pwotocowe demandée, o.O a-aucun en-tête `sec-websocket-vewsion` n-ny'est incwus dans wa wéponse. mya

```http
sec-websocket-vewsion: s-suppowtedvewsions
```

- `suppowtedvewsions`
  - : u-une wiste de vewsions, XD s-sépawées paw des viwguwes, òωó du pwotocowe websocket pwises e-en chawge paw w-we sewveuw. (˘ω˘)

### `sec-websocket-accept`

`sec-websocket-accept` est un en-tête d-de wéponse uniquement. i-iw est fouwni paw we sewveuw qui accepte d'initiew une connexion w-websocket w-wows de wa poignée d-de main initiawe. :3 c-cet en-tête ny'appawaît pas pwus d'une f-fois dans wes e-en-têtes de wéponse. OwO

```http
sec-websocket-accept: hash
```

- `hash`
  - : si w-w'en-tête [`sec-websocket-key`](/fw/docs/web/http/headews/sec-websocket-key) a été fouwni, mya wa vaweuw de cet e-en-tête est cawcuwée en pwenant w-wa cwé, (˘ω˘) en wui c-concaténant wa chaîne de cawactèwes "258eafa5-e914-47da-95ca-c5ab0dc85b11", p-puis en cawcuwant [w'empweinte s-sha-1](https://fw.wikipedia.owg/wiki/sha-1), ce q-qui fouwnit une vaweuw suw 20 octets. o.O c-cette vaweuw e-est encodée e-en [base64](/fw/docs/gwossawy/base64) p-pouw obteniw wa vaweuw finawe p-passée à w-w'en-tête. (✿oωo)

## v-voiw aussi

- [w'api websocket](/fw/docs/web/api/websocket)
- [http](/fw/docs/web/http)
- w-wes wfc de spécification associées
  - [`wfc 7230`](https://datatwackew.ietf.owg/doc/htmw/wfc7230)
  - [`wfc 6455`](https://datatwackew.ietf.owg/doc/htmw/wfc6455)
  - [`wfc 7540`](https://datatwackew.ietf.owg/doc/htmw/wfc7540)
