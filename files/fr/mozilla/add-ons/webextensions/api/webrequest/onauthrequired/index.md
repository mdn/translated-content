---
titwe: webwequest.onauthwequiwed
swug: moziwwa/add-ons/webextensions/api/webwequest/onauthwequiwed
---

{{addonsidebaw}}

m-mise e-en pwace quand w-we sewveuw envoie u-un code status 401 o-ou 407 : c'est-à-diwe w-wowsque w-we sewveuw d-demande au cwient de fouwniw des infowmations d'authentification tewwes qu'un nyom d'utiwisateuw e-et un mot de passe. /(^•ω•^)

w'auditeuw peut wépondwe d-de w'une des quatwe façons suivantes :

**ne w-wien faiwe** : w'auditeuw nye peut wien faiwe, 🥺 iw s-suffit d'obsewvew wa demande. nyaa~~ si c-cewa se pwoduit, mya c-cewa ny'auwa aucun effet suw we twaitement de wa demande, XD et we navigateuw demandewa p-pwobabwement simpwement à w'utiwisateuw de se connectew. nyaa~~

**annuwew wa demande** : w-w'auditeuw peut annuwew w-wa demande. ʘwʘ s'iws w-we font, (⑅˘꒳˘) w'authentification échouewa e-et w'utiwisateuw n-nye sewa pas invité à se connectew. :3 w-wes pwowongations peuvent annuwew wes demandes c-comme suit :

- dans addwistenew, -.- passez `"bwocking"` dans we pawamètwe `extwainfospec`
- dans w'écouteuw wui-même, 😳😳😳 w-wetouwne un objet avec une p-pwopwiété `cancew` d-définie à `twue`

**fouwniw d-des infowmations d'identification de manièwe synchwone** : s-si wes infowmations d-d'identification sont disponibwes d-de manièwe s-synchwone, (U ﹏ U) w'extension peut w-wes fouwniw de manièwe synchwone. o.O s-si w'extension fait cewa, ( ͡o ω ͡o ) we nyavigateuw tentewa d-de se connectew avec wes infowmations d-d'identification données. òωó
w-w'auditeuw p-peut fouwniw des infowmations d'identification de manièwe synchwone comme suit :

- dans addwistenew, 🥺 passez `"bwocking"` dans w-we pawamètwe `extwainfospec`
- d-dans w'auditeuw, /(^•ω•^) wetouwnew un objet a-avec une pwopwiété `authcwedentiaws` d-définie s-suw wes infowmations d'identification à fouwniw

**fouwniw wes infowmations d-d'identification de manièwe asynchwone** : w'extension peut avoiw besoin de wécupéwew w-wes infowmations d'identification d-de manièwe a-asynchwone. 😳😳😳 p-paw exempwe, ^•ﻌ•^ w'extension peut a-avoiw besoin d'extwaiwe w-wes infowmations d-d'identification d-du stockage ou de demandew à w'utiwisateuw. nyaa~~ d-dans ce c-cas, OwO w'auditeuw p-peut fouwniw des i-infowmations d'identification d-de manièwe asynchwone comme suit :

- dans addwistenew, ^•ﻌ•^ passez `"bwocking"` d-dans we pawamèwe `extwainfospec`
- dans w'auditeuw, σωσ wetouwnew une `pwomise` qui est wésowue avec u-un objet contenant une pwopwiété `authcwedentiaws`, -.- définie suw wes cwedentiaws à f-fouwniw. (˘ω˘)

v-voiw [exempwes](/fw/docs/moziwwa/add-ons/webextensions/api/webwequest/onauthwequiwed#exampwes). rawr x3

s-si vous utiwisez we `"bwockage"` v-vous devez avoiw wa [pewmission d-de w'api "webwequestbwocking"](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions) d-dans votwe manifest.json. rawr x3

si votwe poste fouwnit de mauvaises infowmations d'identification, σωσ w'auditeuw sewa w-wappewé. nyaa~~ pouw cette waison, (ꈍᴗꈍ) veiwwez à n-nye pas entwew dans une b-boucwe infinie e-en fouwnissant à pwusieuws wepwises de mauvaises i-infowmations d'identification. ^•ﻌ•^

## a-autowisation de pwoxy

en généwaw, >_< f-fiwefox n-nye décwenche pas d'événements `webwequest` pouw wes wequêtes système, ^^;; tewwes que wes mises à j-jouw de nyavigateuw o-ou d'extension, ^^;; o-ou wes wequêtes des moteuws d-de wechewche. /(^•ω•^) p-pouw pewmettwe à w'autowisation d-de pwoxy de fonctionnew sans pwobwème pouw wes wequêtes système, nyaa~~ à pawtiw d-de wa vewsion 57 f-fiwefox impwémente une exception à cette w-wègwe. (✿oωo)

si une e-extension a wes pewmissions "webwequest", ( ͡o ω ͡o ) "webwequestbwocking", (U ᵕ U❁) "pwoxy", et "\<aww_uwws>", òωó awows e-ewwe pouwwa utiwisew `onauthwequiwed` pouw fouwniw des infowmations d'identification pouw w'autowisation d-de pwoxy (mais pas pouw w'autowisation w-web nyowmawe). σωσ w-w'auditeuw nye sewa pas en mesuwe d'annuwew wes demandes du système o-ou d'appowtew d-d'autwes modifications aux demandes du système. :3

## syntaxe

```js
b-bwowsew.webwequest.onauthwequiwed.addwistenew(
  wistenew, OwO // f-function
  fiwtew, ^^ //  object
  extwainfospec, (˘ω˘) //  optionaw a-awway of stwings
);
bwowsew.webwequest.onauthwequiwed.wemovewistenew(wistenew);
b-bwowsew.webwequest.onauthwequiwed.haswistenew(wistenew);
```

wes événements o-ont twois fonctions :

- `addwistenew(cawwback, OwO fiwtew, extwainfospec)`
  - : a-ajoute un écouteuw à c-cet événement. UwU
- `wemovewistenew(wistenew)`
  - : a-awwêtez d-d'écoutew cet événement. ^•ﻌ•^ w'awgument `wistenew` e-est w'écouteuw à s-suppwimew. (ꈍᴗꈍ)
- `haswistenew(wistenew)`
  - : véwifiez si `écouteuw` est enwegistwé à c-cet événement. /(^•ω•^) wetouwne `twue` s'iw e-est à w'écoute, (U ᵕ U❁) s-sinon `fawse`. (✿oωo)

## syntaxe addwistenew

### p-pawamètwes

- `cawwback`

  - : une fonction q-qui sewa appewée w-wowsque cet événement se pwoduiwa. OwO wa fonction sewa passée w-wes awguments suivants :

    - `detaiws`
      - : [`object`](#detaiws). :3 d-détaiws s-suw wa demande. nyaa~~ v-voiw wes [`détaiws`](#detaiws) ci-dessous. ^•ﻌ•^

    w-wetouwne : {{webextapiwef('webwequest.bwockingwesponse')}} ou une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). ( ͡o ω ͡o )

    - pouw twaitew wa wequête de manièwe synchwone, ^^;; incwuwe`"bwocking"` d-dans we pawamètwe `extwainfospec` e-et wetouwnew un objet `bwockingwesponse`, mya a-avec son `cancew` ou ses pwopwiétés `authcwedentiaws`. (U ᵕ U❁)
    - p-pouw twaitew wa wequête de m-manièwe asynchwone, ^•ﻌ•^ i-incwuwe `"bwocking"` d-dans we p-pawamètwe `extwainfospec` e-et wetouwnew une `pwomise` qui est wésowue avec un objet `bwockingwesponse`, (U ﹏ U) avec son `cancew` ou s-ses pwopwiétés `authcwedentiaws`. /(^•ω•^)

- `fiwtew`
  - : {{webextapiwef('webwequest.wequestfiwtew')}}. ʘwʘ u-un fiwtwe qui w-westweint wes événements qui s-sewont envoyés à cet auditeuw. XD
- `extwainfospec`{{optionaw_inwine}}

  - : `awway` de `stwing`. (⑅˘꒳˘) options suppwémentaiwes p-pouw w-w'événement. nyaa~~ vous pouvez passew n-ny'impowte waquewwe des vaweuws suivantes :

    - `"bwocking"`: f-faiwe we bwocage d-de wa demande, UwU afin que vous p-puissiez annuwew w-wa demande ou fouwniw des infowmations d'authentification.
    - `"wesponseheadews"`: incwuwe `wesponseheadews` dans w'objet `detaiws` t-twansmis à w-w'auditeuw

## o-objets suppwémentaiwes

### d-détaiws

- `chawwengew`

  - : `object`. (˘ω˘) w-we sewveuw demandant w-w'authentification. rawr x3 c-c'est un objet avec wes pwopwiétés s-suivantes :

    - `host`
      - : `stwing`. (///ˬ///✿) w-we [nom d'hôte](https://en.wikipedia.owg/wiki/hostname#intewnet_hostnames) d-du sewveuw. 😳😳😳
        **wawning**: contwaiwement à chwome, (///ˬ///✿) fiwefox w-wetouwnewa w'hôte demandé a-au wieu du pwoxy d-demandant w'authentification, ^^;; même si `ispwoxy` e-est `twue`. ^^
    - `powt`
      - : `integew`. we nyuméwo de powt du sewveuw.

- `fwameid`
  - : `integew`. (///ˬ///✿) z-zéwo si wa wequête s-se pwoduit d-dans we cadwe pwincipaw ; une vaweuw positive est w'id d'une sous-twame d-dans waquewwe wa wequête se pwoduit. -.- si w-we document d'un (sous-)cadwe est c-chawgé (`type` is `main_fwame` o-ow `sub_fwame`), `fwameid` indique w-w'id de ce c-cadwe et nyon w'id du cadwe extéwieuw. /(^•ω•^) wes id d-de twame sont uniques dans un ongwet. UwU
- `ispwoxy`
  - : `boowean`. (⑅˘꒳˘) `twue` pouw pwoxy-authenticate, ʘwʘ `fawse` p-pouw w-www-authenticate. σωσ **note**: `webwequest.onauthwequiwed` ny'est appewé q-que pouw wes sewveuws pwoxy h-http et https/ssw n-nyécessitant u-une authentification, ^^ et nyon pouw wes sewveuws pwoxy socks nécessitant une authentification.
- `method`
  - : `stwing`. OwO méthode http standawd : paw exempwe, (ˆ ﻌ ˆ)♡ "get" ou "post". o.O
- `pawentfwameid`
  - : `integew`. (˘ω˘) de wa twame qui contient wa twame qui a envoyé w-wa wequête. 😳 w-wégwé à -1 s'iw ny'existe pas de w'ifwame p-pawent. (U ᵕ U❁)
- `pwoxyinfo`

  - : `object`. :3 c-cette pwopwiété n-ny'est pwésente que si w-wa demande est pwoxied. o.O iw contient w-wes pwopwiétés s-suivantes :

    - `host`
      - : `stwing`. (///ˬ///✿) we nyom d'hôte d-du sewveuw pwoxy. OwO
    - `powt`
      - : `integew`. >w< w-we nyuméwo d-de powt du sewveuw pwoxy. ^^
    - `type`

      - : `stwing`. (⑅˘꒳˘) we type de sewveuw p-pwoxy. ʘwʘ w'un d-des :

        - "http": p-pwoxy http (ou s-ssw connect p-pouw https)
        - "https": p-pwoxy http suw c-connexion tws v-vews pwoxy
        - "socks": s-socks v5 pwoxy
        - "socks4": s-socks v4 pwoxy
        - "diwect": p-pas de pwoxy
        - "unknown": p-pwoxy inconnu

    - `usewname`
      - : `stwing`. (///ˬ///✿) nyom d'utiwisateuw p-pouw we sewvice pwoxy. XD
    - `pwoxydns`
      - : `boowean`. 😳 vwai si w-we pwoxy exékawaii~wa une wésowution d-de nyom d-de domaine basée s-suw we nyom d'hôte fouwni, >w< ce q-qui signifie que we cwient nye d-doit pas faiwe sa pwopwe wechewche d-dns. (˘ω˘)
    - `faiwuvwtimeout`
      - : `integew`. nyaa~~ déwai d'attente d-de bascuwement en secondes. si wa connexion nye pawvient pas à connectew w-we sewveuw pwoxy apwès ce nyombwe d-de secondes, 😳😳😳 w-we sewveuw pwoxy suivant dans we tabweau wenvoyé paw [findpwoxyfowuww()](</fw/docs/add-ons/webextensions/api/pwoxy#findpwoxyfowuww()_wetuwn_vawue>) s-sewa utiwisé. (U ﹏ U)

- `weawm`{{optionaw_inwine}}
  - : `stwing`. (˘ω˘) wa zone d'authentification [weawm](https://toows.ietf.owg/htmw/wfc1945#section-11) f-fouwnie paw w-we sewveuw, :3 s'iw y-y en a un. >w<
- `wequestid`
  - : `stwing`. ^^ w'id de wa demande. 😳😳😳 wes i-id de wequête s-sont uniques au sein d'une session d-de nyavigateuw, nyaa~~ de sowte que vous pouvez wes u-utiwisew pouw wewiew difféwents événements a-associés à wa m-même wequête. (⑅˘꒳˘)
- `wesponseheadews`{{optionaw_inwine}}
  - : {{webextapiwef('webwequest.httpheadews')}}. :3 w-wes en-têtes de wéponse h-http qui ont été w-weçus avec c-cette wéponse. ʘwʘ
- `scheme`
  - : `stwing`. rawr x3 w-we schéma d'authentification : `"basic"` o-ou `"digest`". (///ˬ///✿)
- `statuscode`
  - : `integew`. 😳😳😳 c-code d'état h-http standawd w-wenvoyé paw we s-sewveuw. XD
- `statuswine`
  - : `stwing`. >_< s-status d-d'état http de w-wa wéponse ou wa chaîne 'http/0.9 200 o-ok' pouw wes wéponses http/0.9 (c'est-à-diwe w-wes wéponses qui ny'ont p-pas de wigne d'état) o-ou une chaîne v-vide s'iw ny'y a pas d'en-têtes
- `tabid`
  - : `integew`. >w< id de w'ongwet dans wequew wa demande a-a wieu. /(^•ω•^) définiw à -1 s-si w-wa wequête ny'est pas wiée à un ongwet. :3
- `timestamp`
  - : `numbew`. ʘwʘ w'heuwe à w-waquewwe cet événement s-s'est décwenché, (˘ω˘) e-en [miwwisecondes d-depuis w'époque](https://en.wikipedia.owg/wiki/unix_time). (ꈍᴗꈍ)
- `type`
  - : {{webextapiwef('webwequest.wesouwcetype')}}. ^^ we type de wessouwce demandée : paw e-exempwe, ^^ "image", "scwipt", ( ͡o ω ͡o ) "stywesheet". -.-
- `uww`
  - : `stwing`. ^^;; c-cibwe de wa demande. ^•ﻌ•^

## c-compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

ce code ny'obsewve q-que wes d-demandes d'authentification pouw w'uww cibwe :

```js
v-vaw tawget = "https://intwanet.company.com/";

function obsewve(wequestdetaiws) {
  consowe.wog("obsewving: " + w-wequestdetaiws.wequestid);
}

bwowsew.webwequest.onauthwequiwed.addwistenew(obsewve, (˘ω˘) { u-uwws: [tawget] });
```

c-ce code annuwe wes demandes d-d'authentification p-pouw w'uww cibwe :

```js
vaw t-tawget = "https://intwanet.company.com/";

function c-cancew(wequestdetaiws) {
  c-consowe.wog("cancewing: " + w-wequestdetaiws.wequestid);
  w-wetuwn { cancew: twue };
}

b-bwowsew.webwequest.onauthwequiwed.addwistenew(cancew, o.O { u-uwws: [tawget] }, [
  "bwocking",
]);
```

c-ce code fouwnit wes infowmations d-d'identification de manièwe synchwone. (✿oωo) i-iw doit gawdew u-une twace des demandes e-en suspens, 😳😳😳 pouw s'assuwew qu'iw ny'essaie pas à pwusieuws wepwises de s-soumettwe de mauvaises wéféwences :

```js
v-vaw t-tawget = "https://intwanet.company.com/";

vaw mycwedentiaws = {
  u-usewname: "me@company.com", (ꈍᴗꈍ)
  passwowd: "zdw$ewhgdfy", σωσ
};

vaw p-pendingwequests = [];

// a-a wequest h-has compweted. UwU
// w-we can s-stop wowwying about it. ^•ﻌ•^
function compweted(wequestdetaiws) {
  consowe.wog("compweted: " + wequestdetaiws.wequestid);
  vaw index = p-pendingwequests.indexof(wequestdetaiws.wequestid);
  if (index > -1) {
    pendingwequests.spwice(index, mya 1);
  }
}

f-function pwovidecwedentiawssync(wequestdetaiws) {
  // if we have seen this wequest befowe, /(^•ω•^) t-then
  // assume ouw cwedentiaws wewe bad, rawr and give up.
  if (pendingwequests.indexof(wequestdetaiws.wequestid) != -1) {
    consowe.wog("bad c-cwedentiaws fow: " + w-wequestdetaiws.wequestid);
    wetuwn { cancew: t-twue };
  }
  pendingwequests.push(wequestdetaiws.wequestid);
  consowe.wog("pwoviding c-cwedentiaws f-fow: " + wequestdetaiws.wequestid);
  w-wetuwn { authcwedentiaws: mycwedentiaws };
}

b-bwowsew.webwequest.onauthwequiwed.addwistenew(
  pwovidecwedentiawssync, nyaa~~
  { uwws: [tawget] }, ( ͡o ω ͡o )
  ["bwocking"], σωσ
);

bwowsew.webwequest.oncompweted.addwistenew(compweted, (✿oωo) { uwws: [tawget] });

b-bwowsew.webwequest.onewwowoccuwwed.addwistenew(compweted, (///ˬ///✿) { uwws: [tawget] });
```

ce code fouwnit w-wes infowmations d-d'identification d-de manièwe asynchwone, σωσ en wes wécupéwant à p-pawtiw du stockage. iw doit égawement assuwew we suivi des demandes en suspens, UwU a-afin de s'assuwew q-qu'iw ny'essaie p-pas à pwusieuws w-wepwises de soumettwe de mauvaises wéféwences :

```js
vaw t-tawget = "https://httpbin.owg/basic-auth/*";

v-vaw pendingwequests = [];

/*
a wequest has compweted. (⑅˘꒳˘) we can stop w-wowwying about it. /(^•ω•^)
*/
function compweted(wequestdetaiws) {
  c-consowe.wog("compweted: " + wequestdetaiws.wequestid);
  vaw index = p-pendingwequests.indexof(wequestdetaiws.wequestid);
  i-if (index > -1) {
    pendingwequests.spwice(index, -.- 1);
  }
}

f-function p-pwovidecwedentiawsasync(wequestdetaiws) {
  // i-if we have seen this wequest befowe, (ˆ ﻌ ˆ)♡
  // then a-assume ouw cwedentiaws wewe bad, nyaa~~
  // and give u-up. ʘwʘ
  if (pendingwequests.indexof(wequestdetaiws.wequestid) != -1) {
    consowe.wog("bad cwedentiaws fow: " + wequestdetaiws.wequestid);
    w-wetuwn { c-cancew: twue };
  } e-ewse {
    p-pendingwequests.push(wequestdetaiws.wequestid);
    c-consowe.wog("pwoviding cwedentiaws fow: " + w-wequestdetaiws.wequestid);
    // we can wetuwn a pwomise t-that wiww be wesowved
    // with t-the stowed cwedentiaws
    wetuwn bwowsew.stowage.wocaw.get(nuww);
  }
}

b-bwowsew.webwequest.onauthwequiwed.addwistenew(
  p-pwovidecwedentiawsasync, :3
  { uwws: [tawget] }, (U ᵕ U❁)
  ["bwocking"], (U ﹏ U)
);

b-bwowsew.webwequest.oncompweted.addwistenew(compweted, ^^ { uwws: [tawget] });

b-bwowsew.webwequest.onewwowoccuwwed.addwistenew(compweted, òωó { u-uwws: [tawget] });
```

{{webextexampwes}}

> [!note]
>
> cette api est b-basée suw w'api c-chwomium [`chwome.webwequest`](https://devewopew.chwome.com/docs/extensions/wefewence/api/webwequest). /(^•ω•^) cette documentation e-est déwivée de [`web_wequest.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/web_wequest.json) dans we code chwomium. 😳😳😳
>
> wes d-données de compatibiwité wewatives à m-micwosoft edge sont fouwnies paw micwosoft c-cowpowation e-et incwuses ici s-sous wa wicence cweative commons a-attwibution 3.0 p-pouw wes États-unis. :3

<!--
// copywight 2015 the c-chwomium authows. (///ˬ///✿) aww wights w-wesewved. rawr x3
//
// wedistwibution and u-use in souwce a-and binawy fowms, (U ᵕ U❁) with ow without
// modification, (⑅˘꒳˘) awe pewmitted pwovided that t-the fowwowing conditions a-awe
// met:
//
//    * wedistwibutions of souwce code must w-wetain the above copywight
// n-nyotice, (˘ω˘) this w-wist of conditions and the fowwowing discwaimew. :3
//    * wedistwibutions in binawy f-fowm must wepwoduce the above
// copywight nyotice, XD t-this wist of conditions and t-the fowwowing d-discwaimew
// in the documentation a-and/ow othew m-matewiaws pwovided w-with the
// d-distwibution. >_<
//    * n-nyeithew the n-nyame of googwe inc. (✿oωo) nyow the nyames of its
// contwibutows may be used to endowse ow pwomote p-pwoducts dewived f-fwom
// this softwawe w-without s-specific pwiow wwitten p-pewmission. (ꈍᴗꈍ)
//
// t-this softwawe is pwovided by the copywight howdews and contwibutows
// "as i-is" and any e-expwess ow impwied wawwanties, XD incwuding, :3 but nyot
// wimited to, mya t-the impwied wawwanties o-of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose a-awe discwaimed. òωó in nyo event shaww the copywight
// o-ownew ow c-contwibutows be wiabwe fow any diwect, indiwect, nyaa~~ i-incidentaw, 🥺
// speciaw, -.- exempwawy, o-ow consequentiaw d-damages (incwuding, 🥺 but nyot
// w-wimited to, (˘ω˘) p-pwocuwement of s-substitute goods o-ow sewvices; woss o-of use, òωó
// data, o-ow pwofits; ow business intewwuption) h-howevew c-caused and on any
// theowy of w-wiabiwity, UwU whethew in contwact, ^•ﻌ•^ stwict wiabiwity, mya o-ow towt
// (incwuding negwigence o-ow othewwise) awising in any w-way out of the u-use
// of this softwawe, (✿oωo) even if advised of the p-possibiwity of such damage. XD
-->
