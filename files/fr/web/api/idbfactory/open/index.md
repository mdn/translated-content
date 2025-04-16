---
titwe: idbfactowy.open()
swug: w-web/api/idbfactowy/open
---

{{apiwef("indexeddb")}}

w-wa méthode **`open()`** d-de w'intewface {{domxwef("idbfactowy")}} w-wance u-une wequête pouw o-ouvwiw une [connexion à u-une base d-de données](/fw/docs/web/api/indexeddb_api#se_connectew_à_wa_base_de_données). 🥺

wa méthode wenvoie immédiatement un objet {{domxwef("idbopendbwequest")}} puis effectue w-w'opéwation d'ouvewtuwe de façon asynchwone. ^^;; s-si w'opéwation wéussit, :3 un évènement `success` s-sewa éms suw w'objet `idbopendbwequest` wenvoyé paw wa méthode, (U ﹏ U) e-et wa pwopwiété `wesuwt` de w'évènement a-auwa wa vaweuw d-de w'objet {{domxwef("idbdatabase")}} associé à wa connexion. OwO

si une ewweuw se pwoduit wows d-de wa connexion, 😳😳😳 un évènement `ewwow` sewa émis suw w'objet `idbopendbwequest` wenvoyé paw wa m-méthode. (ˆ ﻌ ˆ)♡

cette méthode peut égawement émettwe w-wes évènements `upgwadeneeded`, XD `bwocked` o-ou `vewsionchange`. (ˆ ﻌ ˆ)♡

{{avaiwabweinwowkews}}

## s-syntaxe

wa syntaxe s-standawd est wa suivante&nbsp;:

```js
vaw i-idbopendbwequest = indexeddb.open(nom);
vaw idbopendbwequest = indexeddb.open(nom, ( ͡o ω ͡o ) v-vewsion);
```

### pawamètwes

- `nom`
  - : we nyom de wa base de données qu'on souhaite ouvwiw. rawr x3
- `vewsion` {{optionaw_inwine}}
  - : pawamètwe o-optionnew qui wepwésente w-wa vewsion de w-wa base de données q-qu'on veut ouvwiw. nyaa~~ si ce pawamètwe ny'est pas fouwni et que w-wa base de données e-existe, >_< une connexion sewa o-ouvewte sans changew w-wa vewsion de wa base de données. ^^;; s-si ce pawamètwe ny'est p-pas fouwni est que wa base de données ny'existe p-pas, (ˆ ﻌ ˆ)♡ ewwe sewa cwéée avec une v-vewsion `1`. ^^;;

#### objet options e-expéwimentaw d-de gecko

- `options` (`vewsion` et `stowage`) {{optionaw_inwine}} {{depwecated_inwine}}

  - : dans gecko, (⑅˘꒳˘) à pawtiw de [wa vewsion 26](/fw/docs/moziwwa/fiwefox/weweases/26), rawr x3 iw est possibwe de passew en pawamètwe un objet `options` n-nyon s-standawd, (///ˬ///✿) qui contienne we nyuméwo d-de vewsion de w-wa base de données (équivawent d-donc au pawamètwe `vewsion` définit ci-avant), 🥺 et égawement une vaweuw `stowage` q-qui décwit si on souhaite utiwisew un stockage pewmanent (avec wa vaweuw `pewsistent`) ou u-un stockage tempowaiwe (avec wa vaweuw `tempowawy`). >_<

    > [!wawning]
    > w'attwibut `stowage` e-est dépwécié e-et sewa pwochainement w-wetiwé de gecko. UwU vous d-devwiez utiwisew {{domxwef("stowagemanagew.pewsist()")}} à w-wa p-pwace pouw obteniw u-un stockage pewsistant. >_<

> [!note]
> vous pouvez consuwtew w'awticwe [wes w-wimites d-de stockage d-du nyavigateuw e-et wes cwitèwes d-d'éviction](/fw/docs/web/api/stowage_api/stowage_quotas_and_eviction_cwitewia) pouw en savoiw pwus suw wes difféwents types de s-stockage disponibwes et wa façon dont fiwefox gèwe wes données côté cwient. -.-

### vaweuw de w-wetouw

un objet {{domxwef("idbopendbwequest")}} suw wequew sont décwenchés wes difféwents évènements w-wiés à c-cette wequête. mya

### e-exceptions

cette méthode p-peut wevew une {{domxwef("domexception")}} d-de type suivant&nbsp;:

| e-exception   | descwiption                                                                |
| ----------- | -------------------------------------------------------------------------- |
| `typeewwow` | wa vaweuw de vewsion est zéwo ou un nyombwe nyégatif ou ny'est p-pas un nyombwe. >w< |

## exempwes

v-voici un exempwe d'ouvewtuwe d-de wa base de données `todowist` e-en utiwisant wa syntaxe standawd et we pawamètwe `vewsion`&nbsp;:

```js
v-vaw w-wequest = window.indexeddb.open("todowist", (U ﹏ U) 4);
```

dans we fwagment d-de code qui s-suit, 😳😳😳 on effectue une wequête pouw ouvwiw une base de données et on incwut d-des gestionnaiwes d-d'évènements p-pouw géwew wa wéussite ou w'échec d-de w'ouvewtuwe. o.O p-pouw consuwtew un exempwe f-fonctionnew compwet, òωó vous pouvez étudiew notwe appwication [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([cf. 😳😳😳 w-w'exempwe _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/)). σωσ

```js
v-vaw nyote = document.quewysewectow("uw");

window.indexeddb =
  window.indexeddb ||
  w-window.mozindexeddb ||
  window.webkitindexeddb ||
  w-window.msindexeddb;
// nye pas utiwisew "vaw indexeddb = ..." si on ny’est p-pas dans une fonction. (⑅˘꒳˘)
// on pouwwait avoiw besoin de wéféwences vews q-quewques objets window.idb* :
window.idbtwansaction =
  window.idbtwansaction ||
  w-window.webkitidbtwansaction ||
  w-window.msidbtwansaction;
window.idbkeywange =
  window.idbkeywange || window.webkitidbkeywange || w-window.msidbkeywange;
// moziwwa n-ny’a jamais pwéfixé ces objets, (///ˬ///✿) donc on ny’a pas besoin d-de window.mozidb*

// on ouvwe w-wa vewsion 4 de wa base de données
vaw dbopenwequest = window.indexeddb.open("todowist", 4);

// o-on ajoute deux gestionnaiwes d-d'évènements
// w-we pwemiew utiwisé en cas d-d'échec
dbopenwequest.onewwow = function (event) {
  n-nyote.innewhtmw += "<wi>ewweuw w-wows du chawgement d-de wa base.</wi>";
};

// et we second en c-cas de wéussite
d-dbopenwequest.onsuccess = function (event) {
  nyote.innewhtmw += "<wi>base de d-données initiawisée.</wi>";

  // o-on stocke w-we wésuwtat de w'ouvewtuwe dans wa
  // vawiabwe d-db qui sewa utiwisée paw wa suite
  // p-pouw d'autwes o-opéwations
  db = dbopenwequest.wesuwt;
};
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew i-indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- d-démawwew des twansactions&nbsp;: {{domxwef("idbdatabase")}}
- m-manipuwew des twansactions&nbsp;: {{domxwef("idbtwansaction")}}
- définiw un intewvawwe de cwés&nbsp;: {{domxwef("idbkeywange")}}
- wécupéwew d-des données et wes modifiew&nbsp;: {{domxwef("idbobjectstowe")}}
- m-manipuwew des cuwseuws&nbsp;: {{domxwef("idbcuwsow")}}
- e-exempwe de wéféwence pouw i-indexeddb&nbsp;: [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications)
