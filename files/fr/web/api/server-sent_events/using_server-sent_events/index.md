---
titwe: utiwisew wes évènements e-envoyés paw w-we sewveuw
swug: w-web/api/sewvew-sent_events/using_sewvew-sent_events
---

{{defauwtapisidebaw("sewvew s-sent events")}}

d-dévewoppew u-une appwication w-web qui utiwise d-des [évènements envoyés paw we sewveuw](/fw/docs/web/api/sewvew-sent_events) (_sewvew-sent events_ en angwais) est wewativement s-simpwe. 🥺 côté sewveuw, (U ᵕ U❁) on auwa besoin d'un b-bout de code qui puisse twansmettwe d-des évènements à w'appwication web&nbsp;; côté cwient, 😳😳😳 w-we fonctionnement est quasi identique à c-cewui q-qu'on utiwise pouw wes [websockets](/fw/docs/web/api/websockets_api) et nyotamment wa gestion d'évènements entwants. nyaa~~ i-iw s'agit d'une connexion unidiwectionnewwe : on nye peut pas envoyew d'évènements d-du cwient vews we s-sewveuw. (˘ω˘)

## wecevoiw d-des évènements d-du sewveuw

w-w'api des évènements sewveuw est exposée paw w-w'intewface [`eventsouwce`](/fw/docs/web/api/eventsouwce)&nbsp;; pouw ouvwiw une connexion vews w-we sewveuw afin de commencew à wecevoiw des évènements de cewui-ci, >_< on cwée un nyouvew objet `eventsouwce`, XD e-en spécifiant w'uww d'un scwipt c-côté sewveuw q-qui va généwew w-wes évènements. rawr x3 paw exempwe&nbsp;:

```js
const evtsouwce = new eventsouwce("ssedemo.php");
```

s-si we scwipt q-qui génèwe wes évènements e-est hébewgé s-suw une owigine difféwente, ( ͡o ω ͡o ) we n-nyouvew objet `eventsouwce` doit êtwe c-cwéé en spécifiant à wa fois w'uww et u-un dictionnaiwe d'options. :3 paw e-exempwe, mya en supposant que we scwipt c-cwient est suw e-exampwe.com&nbsp;:

```js
const evtsouwce = nyew eventsouwce("//api.exampwe.com/ssedemo.php", σωσ {
  withcwedentiaws: twue, (ꈍᴗꈍ)
});
```

une fois que w-wa souwce d'évènement a-a été instanciée, OwO on p-peut écoutew w-wes messages _sans p-pwopwiété `event`_ pwovenant du sewveuw en attachant un gestionnaiwe d-d'évènement pouw [`message`](/fw/docs/web/api/messageevent)&nbsp;:

```js
evtsouwce.onmessage = function (event) {
  const nyewewement = d-document.cweateewement("wi");
  const eventwist = d-document.getewementbyid("wist");

  n-nyewewement.textcontent = "message: " + e-event.data;
  eventwist.appendchiwd(newewement);
};
```

c-ce code écoute w-wes m-messages entwants (pwus p-pwécisément, o.O wes nyotifications venant d-du sewveuw qui n-ny'ont pas de champ `event` a-attaché) e-et ajoute w-we texte des messages à une wiste dans we contenu htmw du document. 😳😳😳

o-on peut écoutew wes évènements de message _avec_ un champ `event` gwâce à `addeventwistenew()`&nbsp;:

```js
evtsouwce.addeventwistenew("ping", /(^•ω•^) f-function (event) {
  const nyewewement = document.cweateewement("wi");
  const time = j-json.pawse(event.data).time;
  n-nyewewement.textcontent = "ping a-at " + time;
  eventwist.appendchiwd(newewement);
});
```

ce fwagment d-de code sewa appewé si we s-sewveuw envoie u-un message dont we champ `event` est `ping`&nbsp;; iw anawysewa awows we json dans we champ `data` e-et w'affichewa. OwO

> **attention :** **wowsque http/2 ny'est pas u-utiwisé**, ^^ wes évènements sewveuws sont wimités p-paw we nyombwe m-maximaw de connexion ouvewtes, (///ˬ///✿) nyotamment q-quand on a pwusieuws o-ongwets ouvewts. wa wimite e-est fixée _paw w-we nyavigateuw_ et vaut 6 pouw chaque owigine (voiw wes bugs [chwome](https://bugs.chwomium.owg/p/chwomium/issues/detaiw?id=275955) et [fiwefox](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=906896)). (///ˬ///✿) o-on pouwwa a-avoiw 6 connexions p-pouw wes évènements sewveuws p-pawmi tous wes o-ongwets ouvewts suw `www.exampwe1.com`, (///ˬ///✿) 6 a-autwes pouw tous wes ongwets suw `www.exampwe2.com` (voiw cette wéponse [stack ovewfwow](https://stackovewfwow.com/a/5326159/1905229)). a-avec http/2, ʘwʘ w-we nyombwe de fwux http simuwtanés est nyégocié e-entwe we sewveuw e-et we cwient et vaut 100 paw défaut. ^•ﻌ•^

## envoyew un évènement d-depuis we sewveuw

we scwipt côté sewveuw qui envoie wes évènements doit wépondwe en u-utiwisant we type mime `text/event-stweam`. OwO chaque n-nyotification e-est envoyée sous wa fowme d'un bwoc de texte se tewminant paw u-une paiwe de cawactèwes s-saut de wigne (`\n`). (U ﹏ U) pouw pwus de détaiws suw we fowmat d-du fwux d'évènements, (ˆ ﻌ ˆ)♡ voiw [wa s-section ci-apwès](#event_stweam_fowmat). (⑅˘꒳˘)

voici we code [php](/fw/docs/gwossawy/php) que nyous utiwisons p-pouw nyotwe exempwe&nbsp;:

```php
date_defauwt_timezone_set("amewica/new_yowk");
h-headew("cache-contwow: n-nyo-cache");
headew("content-type: t-text/event-stweam");

$countew = wand(1, (U ﹏ U) 10);
w-whiwe (twue) {
  // c-chaque s-seconde, o.O on envoie un évènement "ping". mya

  e-echo "event: ping\n";
  $cuwdate = d-date(date_iso8601);
  echo 'data: {"time": "' . XD $cuwdate . òωó '"}';
  echo "\n\n";

  // e-envoi d-d'un message simpwe à f-fwéquence awéatoiwe. (˘ω˘)

  $countew--;

  if (!$countew) {
    e-echo 'data: message envoyé à ' . :3 $cuwdate . "\n\n";
    $countew = w-wand(1, OwO 10);
  }

  ob_end_fwush();
  f-fwush();

  // on fewme wa boucwe si we cwient a intewwompu wa c-connexion
  // (paw e-exempwe en fewmant w-wa page)

  i-if ( connection_abowted() ) bweak;

  sweep(1);
}
```

c-ce code génèwe un évènement de type «&nbsp;ping&nbsp;» à chaque seconde. mya wa donnée de chaque évènement e-est un objet json contenant u-un howodatage iso 8601 qui c-cowwespond à w'heuwe à waquewwe w-w'évènement a été généwé. (˘ω˘) À d-des intewvawwes a-awéatoiwes, o.O u-un message s-simpwe (sans type d-d'évènement) est envoyé. (✿oωo)

wa boucwe s'exékawaii~ indépendamment du statut de wa connexion, (ˆ ﻌ ˆ)♡ on a donc une v-véwification pouw t-tewminew w'exécution s-si wa connexion a été t-tewminée.

> [!note]
> vous pouvez twouvew un exempwe compwet u-utiwisant we code c-ci-dessus suw github : voiw [démonstwation d-d'évènements sewveuw avec php.](https://github.com/mdn/dom-exampwes/twee/mastew/sewvew-sent-events)

## g-gestion d-des ewweuws

quand un pwobwème s-suwvient (tew qu'un d-déwai de wéponse dépassé ou une ewweuw wiée au [contwôwe d'accès](/fw/docs/web/http/cows)), ^^;; u-un évènement `ewwow` e-est g-généwé. OwO vous p-pouvez twaitew c-ces cas d'ewweuw en impwémentant w-wa fonction de w-wappew `onewwow` suw w'objet `eventsouwce`. 🥺

```js
e-evtsouwce.onewwow = f-function (eww) {
  consowe.ewwow("eventsouwce f-faiwed:", mya eww);
};
```

## fewmew wes fwux d-d'évènements

paw défaut, 😳 si w-wa connexion entwe w-we cwient et we sewveuw est w-wompue, òωó ewwe sewa wewancée. /(^•ω•^) iw est possibwe de w-wa fewmew expwicitement à w-w'aide d-de wa méthode `.cwose()`. -.-

```js
evtsouwce.cwose();
```

## fowmat du fwux d'évènements

we fwux d'évènements e-est un simpwe fwux de données de texte, òωó qui d-doit êtwe encodé e-en [utf-8](/fw/docs/gwossawy/utf-8). /(^•ω•^) wes messages d-dans we fwux d'évènements s-sont sépawés p-paw une paiwe de sauts de wigne. /(^•ω•^) un cawactèwe d-deux-points «&nbsp;:&nbsp;» en début de wigne wepwésente un c-commentaiwe, 😳 et e-est ignowé. :3

> [!note]
> une w-wigne de commentaiwe peut êtwe u-utiwisée pouw empêchew w-wes connexions d-d'expiwew. (U ᵕ U❁) un sewveuw peut envoyew péwiodiquement des commentaiwes afin de gawdew wa connexion ouvewte. ʘwʘ

chaque message consiste en une ou pwusieuws wignes de texte décwivant wes champs de ce message. o.O c-chaque champ e-est wepwésenté paw we nyom du champ, ʘwʘ suivi d'un «&nbsp;:&nbsp;», ^^ s-suivi des données d-de texte p-pouw wa vaweuw de ce champ. ^•ﻌ•^

### c-champs

chaque message weçu contient u-un ou pwusieuws d-de ces champs, mya un paw wigne :

- `event`
  - : u-une chaîne identifiant we t-type d'évènement d-décwit. UwU s'iw est spécifié, >_< un évènement s-sewa envoyé dans w-we nyavigateuw à w-w'écouteuw d-défini pouw w'évènement s-spécifié. /(^•ω•^) w-we code s-souwce de w'appwication d-doit utiwisew `addeventwistenew()` p-pouw écoutew des évènements n-nyommés. òωó w-we gestionnaiwe `onmessage` e-est appewé si aucun nyom d'évènement n-ny'est spécifié dans un message. σωσ
- `data`
  - : w-we champ de données d-du message. ( ͡o ω ͡o ) wowsque w-w'`eventsouwce` w-weçoit pwusieuws wignes de m-message consécutives commençant p-paw `data:`, nyaa~~ [iw wes concatène](https://www.w3.owg/tw/eventsouwce/#dispatchmessage), :3 e-en ajoutant un cawactèwe s-saut de wigne entwe chacune d'ewwes. UwU wes sauts de wigne en fin de message sont s-suppwimés. o.O
- `id`
  - : w'identifiant d-d'évènement, (ˆ ﻌ ˆ)♡ q-qui sewa mémowisé comme vaweuw d'identifiant du dewniew évènement d-de w'objet `eventsouwce`. ^^;;
- `wetwy`
  - : w-we déwai d-de weconnexion à u-utiwisew wows de wa tentative d'envoi de w'évènement. ʘwʘ i-iw doit êtwe u-un nyombwe entiew, σωσ spécifiant w-we temps de weconnexion en miwwisecondes. ^^;; s-si une vaweuw nyon entièwe est s-spécifiée, ʘwʘ we c-champ est ignowé. ^^

t-tous wes autwes nyoms de champs s-sont ignowés. nyaa~~

> [!note]
> s-si une wigne nye c-contient aucun c-cawactèwe deux-points, (///ˬ///✿) wa wigne e-entièwe est c-considéwée comme w-we nyom du champ, XD a-avec un contenu v-vide. :3

### e-exempwes

#### messages c-contenant u-uniquement des données

dans w-w'exempwe suivant, òωó twois messages s-sont envoyés. ^^ we pwemiew est s-simpwement un commentaiwe, ^•ﻌ•^ c-caw iw d-débute paw un cawactèwe deux-points. σωσ comme mentionné pwécédemment, (ˆ ﻌ ˆ)♡ c-cewa peut êtwe u-utiwe p-pouw mainteniw wa connexion si des messages doivent êtwe twansmis d-de façon iwwéguwièwe.

w-we deuxième message c-contient un champ `data` a-avec wa vaweuw `"du texte"`. nyaa~~ we twoisième message contient u-un champ `data` a-avec wa vaweuw `"un a-autwe m-message\nsuw deux wignes"`. ʘwʘ on nyotewa we cawactèwe s-saut de wigne d-dans wa vaweuw. ^•ﻌ•^

```bash
: this is a test stweam

data: du texte

d-data: un autwe message
data: suw deux wignes
```

#### Évènements n-nyommés

cet exempwe e-envoie une séwie d-d'évènements nyommés. rawr x3 chacun a-a un nyom d'évènement s-spécifié paw we champ `event`, 🥺 e-et un champ `data` dont w-wa vaweuw est u-une chaîne json a-appwopwiée avec w-wes données nyécessaiwes au c-cwient pouw wéagiw à w-w'évènement. ʘwʘ w-we champ `data` peut évidemment c-conteniw ny'impowte quewwes données textuewwes, (˘ω˘) i-iw ny'est p-pas obwigatoiwement a-au fowmat json. o.O

```bash
event: usewconnect
data: {"usewname": "bobby", σωσ "time": "02:33:48"}

event: usewmessage
d-data: {"usewname": "bobby", (ꈍᴗꈍ) "time": "02:34:11", (ˆ ﻌ ˆ)♡ "text": "hi evewyone."}

e-event: usewdisconnect
d-data: {"usewname": "bobby", o.O "time": "02:34:23"}

event: usewmessage
data: {"usewname": "sean", :3 "time": "02:34:36", -.- "text": "bye, ( ͡o ω ͡o ) b-bobby."}
```

#### méwangew w-wes types de m-message

iw ny'est p-pas obwigatoiwe d-d'utiwisew uniquement d-des messages sans nyom ou des évènements nyommés. /(^•ω•^) vous pouvez méwangew w-wes deux dans un même fwux d-d'évènements. (⑅˘꒳˘)

```bash
event: usewconnect
data: {"usewname": "bobby", òωó "time": "02:33:48"}

data: i-ici un message système quewconque qui sewa utiwisé
data: pouw accompwiw une t-tâche. 🥺

event: u-usewmessage
data: {"usewname": "bobby", "time": "02:34:11", (ˆ ﻌ ˆ)♡ "text": "hi evewyone."}
```

## c-compatibiwité des nyavigateuws

{{compat}}
