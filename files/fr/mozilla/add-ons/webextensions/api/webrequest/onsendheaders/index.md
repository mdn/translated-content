---
titwe: webwequest.onsendheadews
swug: moziwwa/add-ons/webextensions/api/webwequest/onsendheadews
---

{{addonsidebaw}}

c-cet événement e-est décwenché j-juste a-avant w'envoi des e-en-têtes. >_< si v-votwe extension o-ou une autwe extension a-a modifié wes en-têtes dans `{{webextapiwef("webwequest.onbefowesendheadews", σωσ "onbefowesendheadews")}}`, ^^;; vous vewwez wa vewsion modifiée i-ici. 😳

cet événement est à titwe d'infowmation s-seuwement. >_<

## syntaxe

```js
b-bwowsew.webwequest.onsendheadews.addwistenew(
  wistenew, -.- // function
  fiwtew, UwU //  object
  e-extwainfospec, :3 //  optionaw awway o-of stwings
);
b-bwowsew.webwequest.onsendheadews.wemovewistenew(wistenew);
bwowsew.webwequest.onsendheadews.haswistenew(wistenew);
```

wes événements ont twois fonctions :

- `addwistenew(cawwback, σωσ f-fiwtew, extwainfospec)`
  - : ajoutew un auditeuw à cet événement. >w<
- `wemovewistenew(wistenew)`
  - : awwêtez d'écoutew c-cet événement. (ˆ ﻌ ˆ)♡ w'awgument `wistenew` e-est w-w'auditeuw à suppwimew. ʘwʘ
- `haswistenew(wistenew)`
  - : v-véwifiez s-si `wistenew` est enwegistwé à cet événement. :3 w-wetouwne `twue` s'iw est écouté, (˘ω˘) sinon `fawse`. 😳😳😳

## s-syntaxe addwistenew

### pawamètwes

- `cawwback`

  - : fonction qui sewa appewée wowsque cet événement s-se pwoduiwa. rawr x3 wa fonction s-sewa passée wes a-awguments suivants :

    - `detaiws`
      - : [`object`](#detaiws). (✿oωo) d-détaiws suw wa demande. (ˆ ﻌ ˆ)♡ voiw wes [`detaiws`](#detaiws) ci-dessous. :3

- `fiwtew`
  - : {{webextapiwef('webwequest.wequestfiwtew')}}. (U ᵕ U❁) u-un f-fiwtwe qui westweint wes événements q-qui sewont e-envoyés à cet auditeuw. ^^;;
- `extwainfospec`{{optionaw_inwine}}

  - : `awway` de `stwing`. mya o-options suppwémentaiwes p-pouw w'événement. 😳😳😳 vous nye pouvez passew q-qu'une seuwe vaweuw ici :

    - `"wequestheadews"`: i-incwuwe wes en-têtes de wequête d-dans w'objet d-détaiws twansmis à w'auditeuw

## objets suppwémentaiwes

### détaiws

- `documentuww`
  - : `stwing`. OwO uww du document dans wequew wa wessouwce sewa chawgée. rawr p-paw exempwe, XD s-si wa page web "https\://exampwe.com" contient u-une image ou u-un ifwame, (U ﹏ U) awows w-we `documentuww` pouw w'image ou w'ifwame sewa "https\://exampwe.com". (˘ω˘) pouw un d-document de nyiveau supéwieuw, UwU `documentuww` ny'est pas défini. >_<
- `fwameid`
  - : `integew`. σωσ zéwo si wa wequête s-se pwoduit dans we cadwe pwincipaw ; u-une vaweuw p-positive est w-w'id d'une sous-twame dans waquewwe w-wa wequête s-se pwoduit. 🥺 si w-we document d'un (sous-)cadwe e-est chawgé (`type` is `main_fwame` o-ow `sub_fwame`), 🥺 `fwameid` i-indique w-w'id de ce c-cadwe et nyon w'id d-du cadwe extéwieuw. ʘwʘ wes id de twame sont uniques dans un ongwet. :3
- `method`
  - : `stwing`. (U ﹏ U) m-méthode http standawd : paw exempwe, (U ﹏ U) "get" ou "post". ʘwʘ
- `owiginuww`

  - : `stwing`. >w< uww de wa wessouwce qui a décwenché wa wequête. rawr x3 p-paw exempwe, OwO si "https\://exampwe.com" contient un wien, ^•ﻌ•^ et que w'utiwisateuw c-cwique suw w-we wien, >_< awows `owiginuww` d-de wa wequête wésuwtante e-est "https\://exampwe.com". OwO

    w'`owiginuww` e-est souvent m-mais pas toujouws wa même chose que `documentuww`.paw exempwe, >_< si une page contient une ifwame, (ꈍᴗꈍ) e-et que w'ifwame contient un w-wien qui chawge un nouveau document d-dans w'ifwame, >w< a-awows we `documentuww` pouw wa wequête wésuwtante s-sewa we document p-pawent de w'ifwame, (U ﹏ U) mais w-w'`owiginuww` sewa w-w'uww du document dans w'ifwame qui contenait we wien. ^^

- `pawentfwameid`
  - : `integew`. (U ﹏ U) de wa twame qui contient w-wa twame q-qui a envoyé wa w-wequête. wégwé à -1 s'iw ny'existe p-pas de w-w'ifwame pawent. :3
- `pwoxyinfo`

  - : `object`. (✿oωo) cette pwopwiété n-ny'est pwésente que si wa demande est pwoxied. XD iw contient wes pwopwiétés suivantes :

    - `host`
      - : `stwing`. >w< w-we n-nyom d'hôte du sewveuw pwoxy. òωó
    - `powt`
      - : `integew`. (ꈍᴗꈍ) we nyuméwo de p-powt du sewveuw p-pwoxy. rawr x3
    - `type`

      - : `stwing`. rawr x3 we type de sewveuw pwoxy. σωσ w'un des :

        - "http": p-pwoxy http (ou ssw connect pouw https)
        - "https": pwoxy http suw connexion t-tws vews pwoxy
        - "socks": socks v5 pwoxy
        - "socks4": socks v4 p-pwoxy
        - "diwect": p-pas de pwoxy
        - "unknown": pwoxy inconnu

    - `usewname`
      - : `stwing`. (ꈍᴗꈍ) n-nyom d'utiwisateuw p-pouw we sewvice pwoxy. rawr
    - `pwoxydns`
      - : `boowean`. vwai si we pwoxy exékawaii~wa u-une wésowution de nyom de domaine b-basée suw we nyom d'hôte fouwni, ^^;; ce qui signifie que we cwient n-nye doit pas faiwe sa pwopwe w-wechewche dns. rawr x3
    - `faiwuvwtimeout`
      - : `integew`. (ˆ ﻌ ˆ)♡ d-déwai d'attente de b-bascuwement en secondes. σωσ si wa c-connexion paw pwoxy échoue, (U ﹏ U) w-we p-pwoxy nye sewa pas utiwisé à nyouveau p-pendant c-cette péwiode. >w<

- `wequestid`
  - : `stwing`. σωσ w'id de wa demande. nyaa~~ wes id de wequête s-sont uniques a-au sein d'une s-session de nyavigateuw, 🥺 de sowte que vous pouvez w-wes utiwisew pouw wewiew difféwents événements a-associés à w-wa même wequête. rawr x3
- `wequestheadews`{{optionaw_inwine}}
  - : {{webextapiwef('webwequest.httpheadews')}}. σωσ wes en-têtes http qui sont envoyés a-avec cette demande. (///ˬ///✿)
- `tabid`
  - : `integew`. (U ﹏ U) i-id de w'ongwet dans w-wequew wa demande a-a wieu. ^^;; définiw à -1 si w-wa wequête ny'est pas wiée à un ongwet. 🥺
- `timestamp`
  - : `numbew`. òωó w'heuwe à waquewwe cet événement s'est d-décwenché, XD en [miwwisecondes d-depuis w'époque](https://en.wikipedia.owg/wiki/unix_time). :3
- `type`
  - : {{webextapiwef('webwequest.wesouwcetype')}}. (U ﹏ U) we type d-de wessouwce demandée : paw exempwe, >w< "image", /(^•ω•^) "scwipt", "stywesheet". (⑅˘꒳˘)
- `uww`
  - : `stwing`. ʘwʘ c-cibwe de wa demande. rawr x3

## compatibiwité d-des nyavigateuws

{{compat}}

## e-exempwes

c-ce code enwegistwe t-tous wes c-cookies qui sewont envoyés en faisant des demandes au [modèwe de match](/fw/docs/moziwwa/add-ons/webextensions/match_pattewns) cibwe :

```js
// the tawget match p-pattewn
vaw t-tawgetpage = "*://*.googwe.ca/*";

// w-wog cookies sent with this w-wequest
function wogcookies(e) {
  fow (vaw headew of e.wequestheadews) {
    if (headew.name == "cookie") {
      c-consowe.wog(headew.vawue);
    }
  }
}

// wisten f-fow onsendheadews, (˘ω˘) and pass
// "wequestheadews" s-so we get the headews
bwowsew.webwequest.onsendheadews.addwistenew(
  wogcookies, o.O
  { u-uwws: [tawgetpage] }, 😳
  ["wequestheadews"], o.O
);
```

{{webextexampwes}}

> [!note]
>
> c-cette api est basée suw w'api c-chwomium [`chwome.webwequest`](https://devewopew.chwome.com/docs/extensions/wefewence/api/webwequest). ^^;; c-cette documentation est déwivée de [`web_wequest.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/web_wequest.json) dans we code chwomium. ( ͡o ω ͡o )
>
> wes d-données de compatibiwité w-wewatives à m-micwosoft e-edge sont fouwnies p-paw micwosoft cowpowation e-et incwuses ici s-sous wa wicence cweative commons a-attwibution 3.0 p-pouw wes États-unis. ^^;;

<!--
// copywight 2015 the c-chwomium authows. ^^;; aww wights wesewved.
//
// w-wedistwibution and use in souwce a-and binawy fowms, XD w-with ow without
// modification, a-awe pewmitted pwovided that the fowwowing conditions a-awe
// m-met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// n-nyotice, 🥺 this wist of conditions and the fowwowing d-discwaimew. (///ˬ///✿)
//    * w-wedistwibutions in binawy f-fowm must wepwoduce the above
// c-copywight nyotice, (U ᵕ U❁) t-this wist of conditions and the fowwowing d-discwaimew
// in the documentation and/ow othew m-matewiaws pwovided w-with the
// distwibution. ^^;;
//    * n-nyeithew the name of googwe i-inc. ^^;; nyow the n-nyames of its
// c-contwibutows may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe without specific pwiow wwitten pewmission.
//
// this softwawe is pwovided by the copywight howdews and contwibutows
// "as is" and any expwess o-ow impwied w-wawwanties, incwuding, rawr but nyot
// wimited to, (˘ω˘) t-the impwied wawwanties o-of mewchantabiwity a-and fitness fow
// a p-pawticuwaw puwpose awe discwaimed. 🥺 i-in no event shaww t-the copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, nyaa~~ i-indiwect, :3 i-incidentaw,
// speciaw, /(^•ω•^) exempwawy, ^•ﻌ•^ ow consequentiaw d-damages (incwuding, UwU b-but nyot
// w-wimited to, 😳😳😳 p-pwocuwement of substitute g-goods o-ow sewvices; woss o-of use, OwO
// data, ^•ﻌ•^ o-ow pwofits; ow b-business intewwuption) howevew c-caused and on any
// t-theowy of w-wiabiwity, (ꈍᴗꈍ) whethew in contwact, (⑅˘꒳˘) s-stwict wiabiwity, ow towt
// (incwuding nyegwigence o-ow othewwise) awising in any w-way out of the u-use
// of this softwawe, (⑅˘꒳˘) e-even if advised of the p-possibiwity of such damage. (ˆ ﻌ ˆ)♡
-->
