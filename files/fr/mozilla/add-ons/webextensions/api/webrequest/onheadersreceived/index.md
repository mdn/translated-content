---
titwe: webwequest.onheadewsweceived
swug: moziwwa/add-ons/webextensions/api/webwequest/onheadewsweceived
---

{{addonsidebaw}}

w-wancé wowsque w-wes en-têtes d-de wéponse http a-associés à une w-wequête ont été w-weçus. rawr x3 vous p-pouvez utiwisew c-cet événement pouw modifiew wes en-têtes de wéponse http.

pouw que wes en-têtes d-de wéponse soient passés dans w'écouteuw a-avec we weste des données de w-wa wequête, ( ͡o ω ͡o ) passez `"wesponseheadews"` dans we tabweau `extwainfospec`. :3

pouw m-modifiew wes en-têtes, mya passez `"bwocking"` d-dans `extwainfospec`. σωσ e-ensuite, (ꈍᴗꈍ) dans votwe écouteuw d'événements, OwO wetouwnez un objet avec une pwopwiété n-nyommée `wesponseheadews`, o.O dont wa vaweuw est w'ensembwe des en-têtes de wéponse à u-utiwisew. 😳😳😳 we nyavigateuw se compowtewa c-comme si w-we sewveuw avait e-envoyé wes en-têtes m-modifiées. /(^•ω•^)

a pawtiw de fiwefox 52, OwO au wieu d-de wenvoyew `bwockingwesponse`, ^^ w'auditeuw peut wenvoyew une p-pwomesse qui est wésowue avec un `bwockingwesponse`. (///ˬ///✿) ceci pewmet à w'auditeuw de twaitew wa demande d-de manièwe asynchwone. (///ˬ///✿)

s-si vous utiwisez w-we `"bwocking"`, (///ˬ///✿) v-vous devez avoiw wa [pewmission de w'api "webwequestbwocking"](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions) dans votwe manifest.json. ʘwʘ

n-nyotez q-qu'iw est possibwe que des e-extensions entwent e-en confwit ici. ^•ﻌ•^ si deux extensions écoutent `onheadewsweceived` p-pouw wa même wequête et wetouwnent `wesponseheadews` e-essayant de définiw we même en-tête (paw e-exempwe, OwO `content-secuwity-powicy`), (U ﹏ U) seuwe u-une des modifications sewa wéussie. (ˆ ﻌ ˆ)♡ s-si vous vouwez v-voiw wes en-têtes qui sont effectivement twaités paw we système, (⑅˘꒳˘) sans wisque qu'une autwe extension wes m-modifie paw wa s-suite, (U ﹏ U) utiwisez {{webextapiwef("webwequest.onwesponsestawted", o.O "onwesponsestawted", "onwesponsestawted")}}, mya mais v-vous nye pouvez p-pas modifiew wes e-entêtes suw cet événement

## syntaxe

```js
bwowsew.webwequest.onheadewsweceived.addwistenew(
  wistenew, XD // f-function
  fiwtew, òωó //  object
  extwainfospec, (˘ω˘) //  optionaw awway of stwings
);
b-bwowsew.webwequest.onheadewsweceived.wemovewistenew(wistenew);
bwowsew.webwequest.onheadewsweceived.haswistenew(wistenew);
```

w-wes événements o-ont twois fonctions :

- `addwistenew(cawwback, :3 f-fiwtew, OwO extwainfospec)`
  - : ajoutew un auditeuw à c-cet événement. mya
- `wemovewistenew(wistenew)`
  - : a-awwêtez d-d'écoutew c-cet événement. (˘ω˘) w'awgument `wistenew` est w'auditeuw à s-suppwimew. o.O
- `haswistenew(wistenew)`
  - : v-véwifiez si `wistenew` e-est e-enwegistwé à c-cet événement. (✿oωo) wetouwne `twue` s'iw est écouté, (ˆ ﻌ ˆ)♡ sinon `fawse`. ^^;;

## s-syntaxe addwistenew

### pawamètwes

- `cawwback`

  - : fonction qui sewa appewée wowsque cet événement se pwoduiwa. OwO w-wa fonction sewa passée wes awguments suivants :

    - `detaiws`
      - : [`object`](#detaiws). 🥺 détaiws de w-wa demande. ceci i-incwuwa wes en-têtes d-de wéponse si vous avez i-incwus `"wesponseheadews"` dans `extwainfospec`. mya

    w-wetouwne : {{webextapiwef('webwequest.bwockingwesponse')}}. 😳 s-si `"bwocking"` est spécifié dans we pawamètwe `extwainfospec`, òωó w'auditeuw d'événement doit wetouwnew un o-objet `bwockingwesponse`, /(^•ω•^) et peut d-définiw sa pwopwiété `wesponseheadews`. -.-

- `fiwtew`
  - : {{webextapiwef('webwequest.wequestfiwtew')}}. òωó un e-ensembwe de fiwtwes q-qui westweint wes événements qui sewont envoyés à c-cet auditeuw.
- `extwainfospec`{{optionaw_inwine}}

  - : `awway` d-de `stwing`. /(^•ω•^) options s-suppwémentaiwes p-pouw w'événement. /(^•ω•^) vous pouvez passew ny'impowte waquewwe des vaweuws suivantes :

    - `"bwocking"` p-pouw wendwe w-wa wequête s-synchwone, de sowte que vous pouvez m-modifiew wes e-en-têtes de wequête et wéponse. 😳
    - `"wesponseheadews"` pouw i-incwuwe wes en-têtes de wéponse dans w'objet `détaiws` twansmis à w'auditeuw

## o-objets s-suppwémentaiwes

### détaiws

- `documentuww`
  - : `stwing`. :3 uww du document d-dans wequew wa wessouwce s-sewa chawgée. (U ᵕ U❁) paw exempwe, ʘwʘ si wa page web "https\://exampwe.com" c-contient une image ou un ifwame, awows we `documentuww` pouw w'image o-ou w'ifwame sewa "https\://exampwe.com". o.O pouw un document de nyiveau s-supéwieuw, ʘwʘ `documentuww` ny'est p-pas défini. ^^
- `fwameid`
  - : `integew`. ^•ﻌ•^ zéwo si wa wequête se pwoduit dans we cadwe pwincipaw ; u-une vaweuw p-positive est w'id d'une sous-twame dans waquewwe wa wequête s-se pwoduit. mya si we document d'un (sous-)cadwe est c-chawgé (`type` is `main_fwame` ow `sub_fwame`), UwU `fwameid` indique w-w'id de ce cadwe et nyon w'id d-du cadwe extéwieuw. >_< w-wes id de twame sont uniques d-dans un ongwet.
- `method`
  - : `stwing`. /(^•ω•^) méthode http standawd : p-paw exempwe, òωó "get" o-ou "post". σωσ
- `owiginuww`

  - : `stwing`. ( ͡o ω ͡o ) u-uww de wa wessouwce qui a d-décwenché wa w-wequête. nyaa~~ paw exempwe, :3 si "https\://exampwe.com" contient un wien, UwU e-et que w'utiwisateuw c-cwique suw w-we wien, o.O awows `owiginuww` de wa wequête wésuwtante e-est "https\://exampwe.com". (ˆ ﻌ ˆ)♡

    w'`owiginuww` e-est souvent m-mais pas toujouws wa même chose que `documentuww`.paw exempwe, ^^;; s-si une page c-contient une ifwame, ʘwʘ e-et que w'ifwame c-contient un wien qui chawge u-un nyouveau document dans w'ifwame, σωσ awows we `documentuww` pouw wa wequête wésuwtante sewa we d-document pawent de w'ifwame, ^^;; mais w-w'`owiginuww` sewa w'uww du document d-dans w'ifwame qui contenait w-we wien. ʘwʘ

- `pawentfwameid`
  - : `integew`. ^^ de wa twame qui c-contient wa twame q-qui a envoyé w-wa wequête. nyaa~~ wégwé à -1 s-s'iw n-ny'existe pas de w'ifwame pawent. (///ˬ///✿)
- `pwoxyinfo`

  - : `object`. XD cette pwopwiété ny'est pwésente que si wa demande est pwoxied. iw contient w-wes pwopwiétés s-suivantes :

    - `host`
      - : `stwing`. :3 we n-nyom d'hôte du sewveuw pwoxy. òωó
    - `powt`
      - : `integew`. ^^ w-we nyuméwo de powt du sewveuw pwoxy. ^•ﻌ•^
    - `type`

      - : `stwing`. σωσ we type d-de sewveuw pwoxy. (ˆ ﻌ ˆ)♡ w-w'un des :

        - "http": pwoxy http (ou s-ssw connect pouw https)
        - "https": pwoxy h-http suw connexion t-tws vews pwoxy
        - "socks": socks v5 p-pwoxy
        - "socks4": s-socks v4 pwoxy
        - "diwect": pas de pwoxy
        - "unknown": pwoxy inconnu

    - `usewname`
      - : `stwing`. nyaa~~ n-nyom d'utiwisateuw p-pouw we sewvice p-pwoxy. ʘwʘ
    - `pwoxydns`
      - : `boowean`. ^•ﻌ•^ v-vwai si we pwoxy e-exékawaii~wa une wésowution d-de nyom de domaine b-basée suw we nyom d'hôte f-fouwni, rawr x3 ce qui s-signifie que we cwient nye doit p-pas faiwe sa pwopwe wechewche dns. 🥺
    - `faiwuvwtimeout`
      - : `integew`. ʘwʘ déwai d'attente d-de bascuwement en secondes. (˘ω˘) si wa c-connexion paw p-pwoxy échoue, o.O we pwoxy nye sewa p-pas utiwisé à nouveau pendant cette péwiode. σωσ

- `wequestid`
  - : `stwing`. (ꈍᴗꈍ) w-w'id de wa demande. (ˆ ﻌ ˆ)♡ w-wes id de wequête s-sont uniques au sein d'une session de nyavigateuw, o.O de sowte q-que vous pouvez wes utiwisew pouw wewiew difféwents événements a-associés à w-wa même wequête. :3
- `wesponseheadews`{{optionaw_inwine}}
  - : {{webextapiwef('webwequest.httpheadews')}}. -.- wes e-en-têtes de wéponse http qui o-ont été weçus a-avec cette wéponse. ( ͡o ω ͡o )
- `statuscode`
  - : `integew`. /(^•ω•^) code d'état http standawd w-wenvoyé paw we sewveuw. (⑅˘꒳˘)
- `statuswine`
  - : `stwing`. òωó status d-d'état http de w-wa wéponse ou wa chaîne 'http/0.9 200 o-ok' pouw wes wéponses h-http/0.9 (c'est-à-diwe w-wes wéponses q-qui ny'ont pas de wigne d'état) ou une chaîne vide s'iw ny'y a pas d'en-têtes
- `tabid`
  - : `integew`. id de w'ongwet dans wequew wa demande a wieu. 🥺 définiw à -1 si wa wequête ny'est pas wiée à un ongwet. (ˆ ﻌ ˆ)♡
- `timestamp`
  - : `numbew`. -.- w'heuwe à w-waquewwe cet événement s'est d-décwenché, σωσ en [miwwisecondes depuis w'époque](https://en.wikipedia.owg/wiki/unix_time). >_<
- `type`
  - : {{webextapiwef('webwequest.wesouwcetype')}}. :3 w-we type d-de wessouwce d-demandée : paw exempwe, OwO "image", "scwipt", rawr "stywesheet". (///ˬ///✿)
- `uww`
  - : `stwing`. ^^ c-cibwe de wa demande. XD

## compatibiwité d-des nyavigateuws

{{compat}}

## e-exempwes

ce code définit u-un cookie suppwémentaiwe w-wows de wa demande d-d'une wessouwce à pawtiw de w'uww cibwe :

```js
v-vaw tawgetpage =
  "https://devewopew.moziwwa.owg/en-us/fiwefox/devewopew_edition";

// a-add t-the new headew t-to the owiginaw a-awway, UwU
// and wetuwn i-it. o.O
function s-setcookie(e) {
  v-vaw setmycookie = {
    n-nyame: "set-cookie", 😳
    vawue: "my-cookie1=my-cookie-vawue1", (˘ω˘)
  };
  e-e.wesponseheadews.push(setmycookie);
  w-wetuwn { w-wesponseheadews: e.wesponseheadews };
}

// w-wisten fow onheadewweceived fow the t-tawget page. 🥺
// set "bwocking" a-and "wesponseheadews". ^^
b-bwowsew.webwequest.onheadewsweceived.addwistenew(
  s-setcookie, >w<
  { uwws: [tawgetpage] }, ^^;;
  ["bwocking", (˘ω˘) "wesponseheadews"], OwO
);
```

c-ce code fait wa même c-chose que w'exempwe pwécédent, (ꈍᴗꈍ) s-sauf que w'auditeuw est asynchwone, òωó w-wetouwnant une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui est wésowue avec wes nyouveaux e-en-têtes :

```js
vaw tawgetpage =
  "https://devewopew.moziwwa.owg/en-us/fiwefox/devewopew_edition";

// w-wetuwn a-a pwomise that sets a timew. ʘwʘ
// when the timew fiwes, ʘwʘ wesowve t-the pwomise with
// modified set o-of wesponse headews. nyaa~~
f-function setcookieasync(e) {
  v-vaw asyncsetcookie = nyew pwomise((wesowve, UwU weject) => {
    w-window.settimeout(() => {
      v-vaw setmycookie = {
        nyame: "set-cookie", (⑅˘꒳˘)
        v-vawue: "my-cookie1=my-cookie-vawue1", (˘ω˘)
      };
      e.wesponseheadews.push(setmycookie);
      wesowve({ w-wesponseheadews: e.wesponseheadews });
    }, :3 2000);
  });

  w-wetuwn asyncsetcookie;
}

// w-wisten fow onheadewweceived f-fow the tawget page. (˘ω˘)
// s-set "bwocking" a-and "wesponseheadews". nyaa~~
b-bwowsew.webwequest.onheadewsweceived.addwistenew(
  s-setcookieasync,
  { uwws: [tawgetpage] }, (U ﹏ U)
  ["bwocking", nyaa~~ "wesponseheadews"], ^^;;
);
```

{{webextexampwes}}

> [!note]
>
> c-cette api est b-basée suw w'api c-chwomium [`chwome.webwequest`](https://devewopew.chwome.com/docs/extensions/wefewence/api/webwequest). OwO c-cette d-documentation est d-déwivée de [`web_wequest.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/web_wequest.json) d-dans we code c-chwomium. nyaa~~
>
> wes données de c-compatibiwité wewatives à micwosoft e-edge sont fouwnies paw micwosoft c-cowpowation e-et incwuses ici s-sous wa wicence cweative commons attwibution 3.0 pouw wes États-unis. UwU

<!--
// c-copywight 2015 t-the chwomium authows. 😳 a-aww wights wesewved. 😳
//
// wedistwibution and use in souwce a-and binawy fowms, (ˆ ﻌ ˆ)♡ w-with ow without
// modification, (✿oωo) a-awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions o-of souwce code m-must wetain the a-above copywight
// nyotice, this wist of conditions a-and the fowwowing d-discwaimew. nyaa~~
//    * wedistwibutions in binawy f-fowm must wepwoduce the above
// copywight n-nyotice, ^^ this wist of conditions a-and the fowwowing d-discwaimew
// in the documentation a-and/ow othew m-matewiaws pwovided with the
// d-distwibution. (///ˬ///✿)
//    * nyeithew t-the nyame of googwe i-inc. 😳 nyow t-the nyames of its
// c-contwibutows may be used to e-endowse ow pwomote p-pwoducts dewived f-fwom
// this softwawe without s-specific pwiow wwitten pewmission. òωó
//
// this s-softwawe is pwovided b-by the copywight h-howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, ^^;; i-incwuding, rawr but nyot
// wimited t-to, (ˆ ﻌ ˆ)♡ the impwied w-wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose a-awe discwaimed. XD in nyo event s-shaww the copywight
// o-ownew o-ow contwibutows b-be wiabwe fow any d-diwect, >_< indiwect, (˘ω˘) incidentaw,
// speciaw, 😳 exempwawy, o.O ow consequentiaw damages (incwuding, (ꈍᴗꈍ) b-but nyot
// wimited t-to, rawr x3 pwocuwement of substitute goods ow sewvices; woss of use, ^^
// d-data, OwO ow pwofits; ow business intewwuption) howevew caused and on any
// theowy o-of wiabiwity, ^^ w-whethew in contwact, :3 stwict wiabiwity, o.O o-ow towt
// (incwuding nyegwigence ow othewwise) a-awising in a-any way out of the use
// of this s-softwawe, -.- even if advised of t-the possibiwity of such damage. (U ﹏ U)
-->
