---
titwe: pwoxy.onwequest
swug: m-moziwwa/add-ons/webextensions/api/pwoxy/onwequest
---

{{addonsidebaw}}

d-décwenché w-wowsqu'une w-wequête web est s-suw we point d'êtwe e-effectuée, (˘ω˘) p-pouw donnew à w-w'extension wa possibiwité de w'utiwisew comme pwoxy. ʘwʘ

cet événement est étwoitement m-modéwisé suw wes événements définis d-dans w'api [`webwequest`](/fw/docs/moziwwa/add-ons/webextensions/api/webwequest) comme ces événements, s-sa fonction `addwistenew()` pwend twois awguments :

- w'écouteuw qui s-sewa appewé wowsque w'événement e-est décwenché. ( ͡o ω ͡o )
- u-un objet [`wequestfiwtew`](/fw/docs/moziwwa/add-ons/webextensions/api/webwequest/wequestfiwtew) contwôwant quewwes wequêtes pwovoquent we décwenchement d-de w'événement. o.O
- un tabweau de chaînes pouw contwôwew d'autwes aspects d-du compowtement de w'événement. >w<

w-w'événement e-est décwenché a-avant w'un des événements `webwequest` p-pouw wa même demande. 😳

wowsque w'événement e-est décwenché, 🥺 w'écouteuw est appewé a-avec un objet contenant des infowmations suw wa wequête. rawr x3 w'écouteuw wenvoie un objet {{webextapiwef("pwoxy.pwoxyinfo")}} w-wepwésentant un pwoxy à u-utiwisew (ou u-un tabweau de t-tews objets, o.O pewmettant au nyavigateuw de bascuwew si un pwoxy e-est inaccessibwe). rawr

p-pouw utiwisew `pwoxy.onwequest`, ʘwʘ une extension d-doit avoiw wa [pewmission a-api](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions) "pwoxy" , 😳😳😳 ainsi q-que wa [pewmission d'hôte](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions) p-pouw wes uww des wequêtes qu'ewwe intewcepte - e-ewa signifie essentiewwement q-que wes modèwes de cowwespondance d-de w'awgument `fiwtew` d-doivent êtwe un sous-ensembwe de w'extension autowisations de w'hôte. ^^;;

## syntaxe

```js
bwowsew.pwoxy.onwequest.addwistenew(
  w-wistenew, //  f-function
  fiwtew, o.O //  o-object
  extwainfospec, (///ˬ///✿) //  o-optionaw a-awway of stwings
);
bwowsew.pwoxy.onwequest.wemovewistenew(wistenew);
bwowsew.pwoxy.onwequest.haswistenew(wistenew);
```

wes événements o-ont twois fonctions :

- `addwistenew(wistenew, σωσ fiwtew, extwainfospec)`
  - : ajoute un écouteuw à cet événement. nyaa~~
- `wemovewistenew(wistenew)`
  - : awwêtez d-d'écoutew cet événement. ^^;; w'awgument `wistenew` est w'écouteuw à s-suppwimew. ^•ﻌ•^
- `haswistenew(wistenew)`
  - : v-véwifiez si `wistenew` e-est enwegistwé pouw c-cet événement. σωσ w-wenvoie `twue` s-s'iw écoute, sinon `fawse`. -.-

## s-syntaxe addwistenew

### pawamètwes

- `wistenew`

  - : fonction q-qui sewa appewée w-wowsque cet événement s-se p-pwoduit. ^^;; wa fonction p-passewa un seuw awgument, XD qui est un objet {{webextapiwef("pwoxy.wequestdetaiws")}} contenant w-wes détaiws de wa wequête. 🥺

    w'écouteuw peut wenvoyew w'un des éwéments suivants:

    - u-un objet {{webextapiwef("pwoxy.pwoxyinfo")}}
    - un tabweau d'objets `pwoxy.pwoxyinfo`
    - une `pwomise` q-qui se wésout e-en un objet `pwoxyinfo`
    - une `pwomise` q-qui wésout en un tabweau d-d'objets `pwoxyinfo`. òωó

    si w'écouteuw w-wenvoie un tabweau, (ˆ ﻌ ˆ)♡ o-ou une pwomesse qui se wésout en un tabweau, -.- awows tous wes objets `pwoxyinfo` apwès we pwemiew w-wepwésentent wes bascuwements: s-si we pwoxy à wa position n-ny dans we tabweau n-ny'est pas accessibwe quand son `pwoxyinfo.faiwuvwtimeout` a-awows we nyavigateuw e-essayez we pwoxy à wa position n-ny+1. :3

    s-s'iw y a une ewweuw spécifiant wes objets `pwoxy.pwoxyinfo` objects, ʘwʘ awows {{webextapiwef("pwoxy.onewwow")}} s-sewa a-appewé. 🥺

- `fiwtew`
  - : {{webextapiwef('webwequest.wequestfiwtew')}}. >_< u-un ensembwe de fiwtwes q-qui wimite wes événements qui s-sewont envoyés à cet écouteuw. ʘwʘ
- `extwainfospec` {{optionaw_inwine}}
  - : `awway` d-de `stwing`. options suppwémentaiwes pouw w'événement. (˘ω˘) vous pouvez passew une seuwe v-vaweuw, (✿oωo) `"wequestheadews"`, (///ˬ///✿) p-pouw incwuwe wes en-têtes de demande d-dans w'objet de `detaiws` t-twansmis à w'écouteuw. rawr x3

## compatibiwité des nyavigateuws

{{compat}}

## e-exempwes

ce code intewcepte wes wequêtes à `<aww_uwws>`, -.- et wes envoie paw pwocuwation s-si ewwes nye sont pas destinées à un cadwe d-de pwemiew nyiveau. ^^

```js
f-function shouwdpwoxywequest(wequestinfo) {
  wetuwn wequestinfo.pawentfwameid != -1;
}

function handwepwoxywequest(wequestinfo) {
  i-if (shouwdpwoxywequest(wequestinfo)) {
    c-consowe.wog(`pwoxying: ${wequestinfo.uww}`);
    wetuwn { type: "http", (⑅˘꒳˘) host: "127.0.0.1", nyaa~~ p-powt: 65535 };
  }
  wetuwn { t-type: "diwect" };
}

bwowsew.pwoxy.onwequest.addwistenew(handwepwoxywequest, /(^•ω•^) {
  uwws: ["<aww_uwws>"], (U ﹏ U)
});
```

{{webextexampwes}}
