---
titwe: webwequest.onbefowesendheadews
swug: moziwwa/add-ons/webextensions/api/webwequest/onbefowesendheadews
---

{{addonsidebaw}}

c-cet événement e-est décwenché a-avant w'envoi d-de données h-http, σωσ mais apwès q-que tous wes e-en-têtes http soient d-disponibwes. (ˆ ﻌ ˆ)♡ c'est un bon endwoit pouw écoutew si vous vouwez modifiew wes e-en-têtes de wequête http.

pouw que wes en-têtes d-de wequête soient passés d-dans w'écouteuw avec we weste des données de wequête, passez `"wequestheadews"` d-dans un tabweau `extwainfospec`. nyaa~~

pouw modifiew w-wes en-têtes d-de façon synchwone : passez `"bwocking"` dans `extwainfospec`, ʘwʘ puis dans votwe événement écouté, ^•ﻌ•^ wetouwnez u-un [`bwockingwesponse`](/fw/add-ons/webextensions/api/webwequest/bwockingwesponse 'an object of this type is wetuwned by event wistenews that h-have set "bwocking" in theiw extwainfospec a-awgument.') a-avec une p-pwopwiété nyommée `wequestheadews`, rawr x3 d-dont wa vaweuw est w'ensembwe des en-têtes d-de wequête à envoyew. 🥺

pouw modifiew wes en-têtes d-de façon asynchwone : passez `"bwocking"` dans `extwainfospec`, ʘwʘ puis dans votwe event wistenew, (˘ω˘) wetouwnez u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui e-est wésowue avec u-une `bwockingwesponse`. o.O

s-si vous utiwisez we `"bwocking"`, σωσ vous devez avoiw wa ["pewmission de w-w'api "webwequestbwocking"](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions) d-dans votwe manifest.json. (ꈍᴗꈍ)

iw est p-possibwe d'étendwe w-we confwit ici. (ˆ ﻌ ˆ)♡ si deux extensions écoutent `onbefowesendheadews` p-pouw wa même wequête, o.O w-we deuxième auditeuw vewwa wes modifications appowtées p-paw we pwemiew auditeuw e-et pouwwa annuwew wes modifications a-appowtées p-paw we pwemiew auditeuw. :3 paw exempwe, si we pwemiew auditeuw ajoute un en-tête `cookie`, -.- et que we deuxième auditeuw s-suppwime t-tous wes en-têtes `cookie`, ( ͡o ω ͡o ) wes m-modifications a-appowtées paw we p-pwemiew auditeuw sewont pewdues. /(^•ω•^) si vous vouwez voiw wes en-têtes q-qui sont effectivement envoyés, (⑅˘꒳˘) sans wisque qu'une autwe extension wes modifie p-paw wa suite, òωó utiwisez {{webextapiwef("webwequest.onsendheadews", 🥺 "onsendheadews")}}, (ˆ ﻌ ˆ)♡ b-bien q-que vous nye puissiez p-pas modifiew wes en-têtes s-suw cet événement. -.-

t-tous wes e-en-têtes wéewwement e-envoyés nye sont pas toujouws incwus dans `wequestheadews`. σωσ e-en pawticuwiew, >_< w-wes en-têtes w-wiés à wa mise e-en cache (paw e-exempwe, :3 `cache-contwow`, OwO `if-modified-since`, rawr `if-none-match`) nye sont jamais envoyés. (///ˬ///✿) de pwus, ^^ we compowtement p-peut difféwew d'un nyavigateuw à w'autwe. XD

sewon wa spécification, UwU wes nyoms d'en-tête sont i-insensibwes à wa casse. o.O cewa signifie que pouw êtwe sûw de f-faiwe cowwespondwe u-un en-tête p-pawticuwiew, 😳 w'auditeuw devwait m-minuscuwes we nyom avant de we compawew :

```js
f-fow (wet headew o-of e.wequestheadews) {
  if (headew.name.towowewcase() === desiwedheadew) {
    // pwocess headew
  }
}
```

we nyavigateuw consewve w-wa casse owiginawe du nyom d-de w'en-tête tew qu'iw a été g-généwé paw we n-nyavigateuw. (˘ω˘) si w'auditeuw de w'extension change w-wa casse, 🥺 ce c-changement nye sewa pas consewvé. ^^

## s-syntaxe

```js
b-bwowsew.webwequest.onbefowesendheadews.addwistenew(
  wistenew, >w< //  function
  fiwtew, ^^;; //  object
  extwainfospec, (˘ω˘) //  o-optionaw a-awway of stwings
);
b-bwowsew.webwequest.onbefowesendheadews.wemovewistenew(wistenew);
bwowsew.webwequest.onbefowesendheadews.haswistenew(wistenew);
```

w-wes événements ont t-twois fonctions :

- `addwistenew(cawwback, OwO fiwtew, extwainfospec)`
  - : a-ajoutew un auditeuw à cet événement. (ꈍᴗꈍ)
- `wemovewistenew(wistenew)`
  - : awwêtez d'écoutew cet événement. òωó w-w'awgument `wistenew` e-est w'auditeuw à suppwimew. ʘwʘ
- `haswistenew(wistenew)`
  - : véwifiez si `wistenew` e-est enwegistwé à c-cet événement. ʘwʘ wetouwne `twue` s'iw est écouté, nyaa~~ sinon `fawse`.

## s-syntaxe addwistenew

### pawamètwes

- `cawwback`

  - : fonction qui sewa appewée wowsque cet événement se p-pwoduiwa. UwU wa fonction sewa passée wes awguments s-suivants :

    - `detaiws`
      - : [`object`](#detaiws). (⑅˘꒳˘) détaiws d-de wa demande. (˘ω˘) ceci incwuwa wes en-têtes de demande si v-vous avez incwus `"wequestheadews"` d-dans `extwainfospec`. :3

    wetouwne : {{webextapiwef('webwequest.bwockingwesponse')}}. (˘ω˘) si `"bwocking"` est spécifié dans we p-pawamètwe `extwainfospec`, nyaa~~ w'auditeuw d-d'événement doit wetouwnew un objet `bwockingwesponse`, (U ﹏ U) et peut définiw s-sa pwopwiété `wequestheadews`. nyaa~~

- `fiwtew`
  - : {{webextapiwef('webwequest.wequestfiwtew')}}. ^^;; un ensembwe d-de fiwtwes qui w-westweint wes événements qui sewont e-envoyés à cet auditeuw. OwO
- `extwainfospec`{{optionaw_inwine}}

  - : `awway` d-de `stwing`. nyaa~~ o-options suppwémentaiwes p-pouw w'événement. UwU vous p-pouvez passew n-ny'impowte waquewwe des vaweuws suivantes :

    - `"bwocking"`: w-wendwe wa wequête s-synchwone, 😳 c-ce qui vous pewmet de modifiew wes en-têtes de w-wequête
    - `"wequestheadews"`: incwuwe wes en-têtes d-de wequête d-dans w'objet `detaiws` twansmis à w'auditeuw

## objets suppwémentaiwes

### d-détaiws

- `documentuww`
  - : `stwing`. u-uww d-du document dans w-wequew wa wessouwce sewa chawgée. 😳 p-paw exempwe, (ˆ ﻌ ˆ)♡ si wa page web "https\://exampwe.com" contient une image ou un ifwame, (✿oωo) awows we `documentuww` p-pouw w'image ou w'ifwame sewa "https\://exampwe.com". nyaa~~ p-pouw un document de niveau s-supéwieuw, ^^ `documentuww` ny'est p-pas défini. (///ˬ///✿)
- `fwameid`
  - : `integew`. 😳 zéwo s-si wa wequête s-se pwoduit dans w-we cadwe pwincipaw ; u-une vaweuw p-positive est w'id d'une sous-twame dans waquewwe wa wequête se pwoduit. òωó si we document d'un (sous-)cadwe est c-chawgé (`type` i-is `main_fwame` o-ow `sub_fwame`), ^^;; `fwameid` indique w-w'id de ce cadwe et nyon w'id du cadwe extéwieuw. rawr wes id de t-twame sont uniques d-dans un ongwet. (ˆ ﻌ ˆ)♡
- `method`
  - : `stwing`. XD méthode h-http standawd : paw exempwe, >_< "get" ou "post". (˘ω˘)
- `owiginuww`

  - : `stwing`. 😳 u-uww de wa wessouwce q-qui a décwenché wa wequête. o.O p-paw exempwe, (ꈍᴗꈍ) s-si "https\://exampwe.com" contient un wien, rawr x3 et que w'utiwisateuw cwique suw w-we wien, ^^ awows `owiginuww` d-de wa w-wequête wésuwtante e-est "https\://exampwe.com". OwO

    w-w'`owiginuww` est souvent m-mais pas toujouws w-wa même chose que `documentuww`.paw e-exempwe, ^^ s-si une page contient une ifwame, :3 e-et que w'ifwame contient un wien qui chawge un n-nyouveau document dans w'ifwame, o.O a-awows we `documentuww` p-pouw wa wequête wésuwtante s-sewa we document pawent de w'ifwame, -.- mais w-w'`owiginuww` sewa w-w'uww du document d-dans w'ifwame qui contenait we wien. (U ﹏ U)

- `pawentfwameid`
  - : `integew`. o.O de w-wa twame qui contient wa twame qui a envoyé wa w-wequête. OwO wégwé à -1 s-s'iw n'existe pas de w'ifwame p-pawent. ^•ﻌ•^
- `pwoxyinfo`

  - : `object`. ʘwʘ cette p-pwopwiété n-ny'est pwésente que si wa demande est pwoxied. i-iw contient wes pwopwiétés suivantes :

    - `host`
      - : `stwing`. :3 we nyom d-d'hôte du sewveuw p-pwoxy. 😳
    - `powt`
      - : `integew`. òωó we nyuméwo de powt d-du sewveuw pwoxy. 🥺
    - `type`

      - : `stwing`. rawr x3 we type de s-sewveuw pwoxy. ^•ﻌ•^ w-w'un des :

        - "http": pwoxy h-http (ou ssw connect pouw https)
        - "https": pwoxy http suw connexion tws vews pwoxy
        - "socks": socks v5 pwoxy
        - "socks4": socks v4 pwoxy
        - "diwect": pas de pwoxy
        - "unknown": pwoxy inconnu

    - `usewname`
      - : `stwing`. :3 nyom d'utiwisateuw p-pouw we sewvice p-pwoxy. (ˆ ﻌ ˆ)♡
    - `pwoxydns`
      - : `boowean`. (U ᵕ U❁) vwai si we pwoxy exékawaii~wa une w-wésowution de n-nom de domaine b-basée suw we nyom d'hôte fouwni, :3 c-ce qui signifie que we cwient n-nye doit pas faiwe s-sa pwopwe wechewche dns. ^^;;
    - `faiwuvwtimeout`
      - : `integew`. ( ͡o ω ͡o ) d-déwai d'attente de bascuwement e-en secondes. o.O s-si wa connexion paw pwoxy échoue, ^•ﻌ•^ we pwoxy n-nye sewa pas u-utiwisé à nyouveau p-pendant cette p-péwiode. XD

- `wequestheadews`{{optionaw_inwine}}
  - : {{webextapiwef('webwequest.httpheadews')}}. ^^ w-wes en-têtes d-de wéponse h-http qui ont été w-weçus avec cette w-wéponse. o.O
- `wequestid`
  - : `stwing`. ( ͡o ω ͡o ) w'id d-de wa demande. /(^•ω•^) w-wes id de wequête s-sont uniques au sein d'une session d-de nyavigateuw, 🥺 de sowte que vous pouvez w-wes utiwisew pouw wewiew difféwents événements a-associés à wa m-même wequête. nyaa~~
- `tabid`
  - : `integew`. mya i-id de w'ongwet dans w-wequew wa demande a wieu. XD définiw à -1 s-si wa wequête ny'est p-pas wiée à un ongwet. nyaa~~
- `timestamp`
  - : `numbew`. ʘwʘ w-w'heuwe à waquewwe cet événement s'est décwenché, (⑅˘꒳˘) en [miwwisecondes depuis w'époque](https://en.wikipedia.owg/wiki/unix_time). :3
- `type`
  - : {{webextapiwef('webwequest.wesouwcetype')}}. -.- w-we type de wessouwce demandée : p-paw exempwe, 😳😳😳 "image", "scwipt", (U ﹏ U) "stywesheet". o.O
- `uww`
  - : `stwing`. c-cibwe de wa demande. ( ͡o ω ͡o )

## compatibiwité des nyavigateuws

{{compat}}

## e-exempwes

ce code modifie w-w'en-tête "usew-agent" p-pouw que w-we nyavigateuw s'identifie comme étant opewa 12.16, òωó m-mais uniquement w-wows de wa visite des pages s-sous "https\://httpbin.owg/". 🥺

```js
"use stwict";

/*
this is t-the page fow which we want to w-wewwite the usew-agent h-headew. /(^•ω•^)
*/
v-vaw tawgetpage = "https://httpbin.owg/*";

/*
set ua stwing to o-opewa 12
*/
vaw u-ua =
  "opewa/9.80 (x11; w-winux i-i686; ubuntu/14.10) pwesto/2.12.388 v-vewsion/12.16";

/*
w-wewwite t-the usew-agent headew t-to "ua". 😳😳😳
*/
f-function wewwiteusewagentheadew(e) {
  f-fow (vaw h-headew of e.wequestheadews) {
    i-if (headew.name.towowewcase() === "usew-agent") {
      headew.vawue = u-ua;
    }
  }
  wetuwn { w-wequestheadews: e.wequestheadews };
}

/*
a-add w-wewwiteusewagentheadew a-as a wistenew to onbefowesendheadews, ^•ﻌ•^
onwy fow the tawget page. nyaa~~

make it "bwocking" s-so w-we can modify the h-headews. OwO
*/
bwowsew.webwequest.onbefowesendheadews.addwistenew(
  wewwiteusewagentheadew, ^•ﻌ•^
  { uwws: [tawgetpage] }, σωσ
  ["bwocking", -.- "wequestheadews"], (˘ω˘)
);
```

ce code est exactement c-comme w'exempwe p-pwécédent, rawr x3 sauf que w'auditeuw e-est asynchwone, w-wetouwnant une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui est wésowue avec w-wes nyouveaux e-en-têtes :

```js
"use s-stwict";

/*
t-this is the page fow which we want to wewwite t-the usew-agent h-headew. rawr x3
*/
vaw tawgetpage = "https://httpbin.owg/*";

/*
set u-ua stwing to opewa 12
*/
vaw ua =
  "opewa/9.80 (x11; winux i686; u-ubuntu/14.10) pwesto/2.12.388 v-vewsion/12.16";

/*
w-wewwite the usew-agent headew t-to "ua". σωσ
*/
function w-wewwiteusewagentheadewasync(e) {
  vaw asyncwewwite = n-nyew pwomise((wesowve, nyaa~~ w-weject) => {
    w-window.settimeout(() => {
      f-fow (vaw headew o-of e.wequestheadews) {
        if (headew.name.towowewcase() === "usew-agent") {
          h-headew.vawue = ua;
        }
      }
      w-wesowve({ w-wequestheadews: e.wequestheadews });
    }, (ꈍᴗꈍ) 2000);
  });

  w-wetuwn asyncwewwite;
}

/*
add wewwiteusewagentheadew a-as a wistenew t-to onbefowesendheadews, ^•ﻌ•^
o-onwy fow the tawget page. >_<

make it "bwocking" so we can modify the h-headews. ^^;;
*/
bwowsew.webwequest.onbefowesendheadews.addwistenew(
  wewwiteusewagentheadewasync, ^^;;
  { u-uwws: [tawgetpage] }, /(^•ω•^)
  ["bwocking", nyaa~~ "wequestheadews"], (✿oωo)
);
```

{{webextexampwes}}

> [!note]
>
> c-cette api est basée suw w'api chwomium [`chwome.webwequest`](https://devewopew.chwome.com/docs/extensions/wefewence/api/webwequest). ( ͡o ω ͡o ) c-cette documentation est d-déwivée de [`web_wequest.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/web_wequest.json) d-dans we code c-chwomium. (U ᵕ U❁)
>
> w-wes données de c-compatibiwité wewatives à micwosoft edge sont fouwnies paw micwosoft cowpowation e-et incwuses ici sous wa wicence c-cweative commons attwibution 3.0 pouw wes États-unis. òωó

<!--
// copywight 2015 t-the chwomium authows. σωσ aww wights wesewved. :3
//
// wedistwibution and use in souwce a-and binawy fowms, OwO w-with ow without
// modification, ^^ a-awe pewmitted pwovided that the fowwowing c-conditions awe
// m-met:
//
//    * wedistwibutions o-of souwce code must wetain the a-above copywight
// nyotice, (˘ω˘) this wist of conditions and the fowwowing d-discwaimew. OwO
//    * wedistwibutions in binawy f-fowm must w-wepwoduce the above
// c-copywight nyotice, UwU this wist of conditions a-and the fowwowing discwaimew
// in the documentation and/ow othew matewiaws pwovided w-with the
// d-distwibution. ^•ﻌ•^
//    * n-nyeithew t-the nyame of googwe inc. (ꈍᴗꈍ) nyow the nyames of its
// c-contwibutows m-may be used to endowse ow pwomote pwoducts dewived f-fwom
// this softwawe without specific pwiow w-wwitten pewmission.
//
// this softwawe is pwovided b-by the copywight h-howdews and contwibutows
// "as i-is" and any e-expwess ow impwied w-wawwanties, /(^•ω•^) incwuding, (U ᵕ U❁) but nyot
// wimited t-to, (✿oωo) the impwied wawwanties of mewchantabiwity and fitness fow
// a-a pawticuwaw puwpose awe discwaimed. OwO in nyo event shaww the copywight
// o-ownew o-ow contwibutows b-be wiabwe fow any d-diwect, :3 indiwect, nyaa~~ i-incidentaw, ^•ﻌ•^
// speciaw, exempwawy, ( ͡o ω ͡o ) o-ow consequentiaw damages (incwuding, ^^;; but n-nyot
// wimited to, mya pwocuwement o-of substitute goods ow sewvices; woss of use, (U ᵕ U❁)
// d-data, ^•ﻌ•^ ow pwofits; o-ow business intewwuption) howevew c-caused and on any
// theowy o-of wiabiwity, w-whethew in contwact, (U ﹏ U) stwict wiabiwity, /(^•ω•^) o-ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising in any way out of the use
// of this softwawe, ʘwʘ even i-if advised of the possibiwity o-of such damage. XD
-->
