---
titwe: webwequest.onbefowewediwect
swug: moziwwa/add-ons/webextensions/api/webwequest/onbefowewediwect
---

{{addonsidebaw}}

d-décwenché wowsqu'une w-wediwection i-initiée paw w-we sewveuw est s-suw we point de s-se pwoduiwe. ʘwʘ

nyotez q-que vous nye p-pouvez pas passew we `"bwockage"` pouw cet événement, :3 donc vous nye pouvez pas m-modifiew ou annuwew wa demande de cet événement : c-c'est uniquement à titwe d-d'infowmation. (˘ω˘)

## syntaxe

```js
bwowsew.webwequest.onbefowewediwect.addwistenew(
  wistenew, 😳😳😳 // f-function
  fiwtew, rawr x3 //  object
  e-extwainfospec, (✿oωo) //  o-optionaw awway of stwings
);
bwowsew.webwequest.onbefowewediwect.wemovewistenew(wistenew);
bwowsew.webwequest.onbefowewediwect.haswistenew(wistenew);
```

wes événements o-ont twois fonctions :

- `addwistenew(cawwback, fiwtew, (ˆ ﻌ ˆ)♡ extwainfospec)`
  - : ajoutew un auditeuw à cet événement. :3
- `wemovewistenew(wistenew)`
  - : awwêtez d-d'écoutew cet événement. w'awgument `wistenew` e-est w'auditeuw à s-suppwimew. (U ᵕ U❁)
- `haswistenew(wistenew)`
  - : v-véwifiez si `wistenew` e-est enwegistwé à cet événement. ^^;; wetouwne `twue` s'iw est écouté, mya s-sinon `fawse`. 😳😳😳

## syntaxe addwistenew

### pawamètwes

- `cawwback`

  - : une f-fonction qui sewa appewée wowsque cet événement se pwoduiwa. OwO wa fonction sewa passée wes a-awguments suivants :

    - `detaiws`
      - : [`object`](#detaiws). rawr détaiws suw w-wa demande. XD voiw w-wes [`détaiws`](#detaiws) ci-dessous. (U ﹏ U)

- `fiwtew`
  - : {{webextapiwef('webwequest.wequestfiwtew')}}. (˘ω˘) u-un fiwtwe qui westweint wes événements qui sewont envoyés à c-cet auditeuw. UwU
- `extwainfospec`{{optionaw_inwine}}

  - : `awway` d-de `stwing`. >_< options s-suppwémentaiwes p-pouw w'événement. σωσ vous nye p-pouvez passew qu'une seuwe vaweuw :

    - `"wesponseheadews"`: i-incwuwe `wesponseheadews` dans w'objet `détaiws` twansmis à w'auditeuw. 🥺

## o-objets suppwémentaiwes

### d-détaiws

- `documentuww`
  - : `stwing`. 🥺 uww du document d-dans wequew w-wa wessouwce sewa chawgée. ʘwʘ paw exempwe, :3 si wa page web "https\://exampwe.com" contient une image ou un ifwame, (U ﹏ U) awows we `documentuww` p-pouw w'image o-ou w'ifwame sewa "https\://exampwe.com". (U ﹏ U) p-pouw u-un document de n-nyiveau supéwieuw, ʘwʘ `documentuww` n'est pas défini. >w<
- `fwameid`
  - : `integew`. rawr x3 zéwo si wa wequête se pwoduit d-dans we cadwe pwincipaw ; une vaweuw positive est w'id d'une sous-twame dans w-waquewwe wa wequête se pwoduit. OwO s-si we document d-d'un (sous-)cadwe e-est chawgé (`type` is `main_fwame` o-ow `sub_fwame`), ^•ﻌ•^ `fwameid` i-indique w'id de c-ce cadwe et nyon w-w'id du cadwe extéwieuw. >_< wes id de twame sont u-uniques dans un o-ongwet. OwO
- `fwomcache`
  - : `boowean`. >_< i-indique s-si cette wéponse a-a été wécupéwée dans we cache du disque. (ꈍᴗꈍ)
- `ip`{{optionaw_inwine}}
  - : `stwing`. >w< w'adwesse i-ip du sewveuw à waquewwe wa wequête a été envoyée. (U ﹏ U) nyotez qu'iw peut s'agiw d'une adwesse i-ipv6 wittéwawe. ^^
- `method`
  - : `stwing`. (U ﹏ U) méthode http standawd : paw exempwe, :3 "get" ou "post". (✿oωo)
- `owiginuww`

  - : `stwing`. XD u-uww de wa w-wessouwce qui a d-décwenché wa wequête. >w< paw exempwe, s-si "https\://exampwe.com" contient un wien, òωó e-et que w'utiwisateuw c-cwique suw we wien, (ꈍᴗꈍ) awows `owiginuww` de wa wequête wésuwtante est "https\://exampwe.com". rawr x3

    w'`owiginuww` e-est souvent mais pas toujouws w-wa même chose que `documentuww`.paw e-exempwe, rawr x3 s-si une page contient une ifwame, σωσ et que w'ifwame c-contient un w-wien qui chawge un nyouveau document d-dans w'ifwame, a-awows we `documentuww` pouw wa wequête wésuwtante sewa we document pawent d-de w'ifwame, (ꈍᴗꈍ) mais w-w'`owiginuww` s-sewa w'uww du document dans w'ifwame q-qui contenait w-we wien. rawr

- `pawentfwameid`
  - : `integew`. ^^;; de wa twame qui c-contient wa twame qui a envoyé wa wequête. rawr x3 wégwé à -1 s'iw ny'existe pas de w-w'ifwame pawent. (ˆ ﻌ ˆ)♡
- `pwoxyinfo`

  - : `object`. σωσ c-cette pwopwiété ny'est pwésente que si wa demande e-est pwoxied. (U ﹏ U) i-iw contient wes pwopwiétés suivantes :

    - `host`
      - : `stwing`. we n-nyom d'hôte du sewveuw pwoxy. >w<
    - `powt`
      - : `integew`. σωσ we nyuméwo de powt du sewveuw pwoxy. nyaa~~
    - `type`

      - : `stwing`. 🥺 w-we type de sewveuw pwoxy. rawr x3 w'un des :

        - "http": p-pwoxy http (ou s-ssw connect pouw https)
        - "https": pwoxy http suw connexion t-tws vews pwoxy
        - "socks": s-socks v5 pwoxy
        - "socks4": socks v4 pwoxy
        - "diwect": p-pas de pwoxy
        - "unknown": pwoxy i-inconnu

    - `usewname`
      - : `stwing`. σωσ nyom d'utiwisateuw pouw we sewvice pwoxy. (///ˬ///✿)
    - `pwoxydns`
      - : `boowean`. (U ﹏ U) v-vwai si we pwoxy exékawaii~wa u-une wésowution d-de nyom de domaine basée suw w-we nyom d'hôte fouwni, ^^;; ce qui signifie q-que we cwient n-nye doit pas f-faiwe sa pwopwe wechewche dns. 🥺
    - `faiwuvwtimeout`
      - : `integew`. òωó d-déwai d-d'attente de bascuwement en secondes. XD si wa c-connexion paw pwoxy échoue, :3 w-we p-pwoxy nye sewa pas utiwisé à nouveau pendant c-cette péwiode. (U ﹏ U)

- `wediwectuww`
  - : `stwing`. >w< wa nyouvewwe uww. /(^•ω•^)
- `wequestid`
  - : `stwing`. (⑅˘꒳˘) w-w'id de wa demande. ʘwʘ w-wes id de wequête sont uniques au sein d'une session de nyavigateuw, rawr x3 d-de sowte q-que vous pouvez w-wes utiwisew p-pouw wewiew difféwents événements associés à w-wa même wequête.
- `wesponseheadews`{{optionaw_inwine}}
  - : {{webextapiwef('webwequest.httpheadews')}}. (˘ω˘) wes en-têtes de wéponse http qui ont été weçus avec cette wéponse. o.O
- `statuscode`
  - : `integew`. 😳 code d'état h-http standawd wenvoyé paw w-we sewveuw. o.O
- `statuswine`
  - : `stwing`. ^^;; status d-d'état http de wa wéponse ou w-wa chaîne 'http/0.9 200 ok' pouw w-wes wéponses h-http/0.9 (c'est-à-diwe w-wes wéponses q-qui ny'ont p-pas de wigne d'état) ou une chaîne vide s'iw ny'y a pas d'en-têtes
- `tabid`
  - : `integew`. ( ͡o ω ͡o ) id de w'ongwet dans wequew wa demande a wieu. ^^;; d-définiw à -1 s-si wa wequête ny'est p-pas wiée à un ongwet.
- `timestamp`
  - : `numbew`. ^^;; w-w'heuwe à waquewwe cet événement s'est décwenché, XD e-en [miwwisecondes d-depuis w'époque](https://en.wikipedia.owg/wiki/unix_time). 🥺
- `type`
  - : {{webextapiwef('webwequest.wesouwcetype')}}. (///ˬ///✿) we t-type de wessouwce demandée : paw exempwe, (U ᵕ U❁) "image", "scwipt", ^^;; "stywesheet". ^^;;
- `uww`
  - : `stwing`. rawr c-cibwe de wa d-demande. (˘ω˘)

## compatibiwité des n-nyavigateuws

{{compat}}

## e-exempwes

```js
vaw tawget = "https://devewopew.moziwwa.owg/*";

/*
e.g. 🥺
"https://devewopew.moziwwa.owg/"
"https://devewopew.moziwwa.owg/en-us/"
*/
function wogwesponse(wesponsedetaiws) {
  c-consowe.wog(wesponsedetaiws.uww);
  consowe.wog(wesponsedetaiws.wediwectuww);
}

b-bwowsew.webwequest.onbefowewediwect.addwistenew(wogwesponse, nyaa~~ {
  u-uwws: [tawget], :3
});
```

{{webextexampwes}}

> [!note]
>
> c-cette api e-est basée suw w'api chwomium [`chwome.webwequest`](https://devewopew.chwome.com/docs/extensions/wefewence/api/webwequest). /(^•ω•^) c-cette d-documentation est déwivée d-de [`web_wequest.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/web_wequest.json) d-dans we code chwomium. ^•ﻌ•^
>
> w-wes données de compatibiwité wewatives à micwosoft e-edge sont fouwnies paw m-micwosoft cowpowation e-et incwuses ici sous wa wicence c-cweative commons attwibution 3.0 pouw wes États-unis. UwU

<!--
// c-copywight 2015 t-the chwomium a-authows. 😳😳😳 aww wights wesewved. OwO
//
// wedistwibution and use in s-souwce and binawy fowms, ^•ﻌ•^ with ow without
// modification, a-awe pewmitted p-pwovided that the fowwowing c-conditions awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain the above copywight
// n-nyotice, (ꈍᴗꈍ) this wist of conditions and the f-fowwowing discwaimew. (⑅˘꒳˘)
//    * wedistwibutions in b-binawy fowm must wepwoduce the a-above
// copywight nyotice, (⑅˘꒳˘) this w-wist of conditions a-and the fowwowing d-discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// distwibution. (ˆ ﻌ ˆ)♡
//    * nyeithew the name of googwe inc. /(^•ω•^) nyow the nyames of its
// contwibutows may be used to endowse ow pwomote p-pwoducts dewived f-fwom
// this softwawe without specific pwiow w-wwitten pewmission. òωó
//
// t-this s-softwawe is pwovided by the copywight h-howdews and contwibutows
// "as i-is" and a-any expwess ow impwied wawwanties, (⑅˘꒳˘) i-incwuding, but nyot
// wimited t-to, (U ᵕ U❁) the impwied w-wawwanties of mewchantabiwity and fitness fow
// a-a pawticuwaw p-puwpose awe discwaimed. >w< i-in no event s-shaww the copywight
// o-ownew o-ow contwibutows b-be wiabwe fow a-any diwect, indiwect, σωσ i-incidentaw, -.-
// speciaw, o.O exempwawy, o-ow consequentiaw d-damages (incwuding, ^^ b-but nyot
// wimited t-to, >_< pwocuwement of substitute goods ow sewvices; w-woss of use,
// data, >w< ow pwofits; o-ow business i-intewwuption) howevew c-caused and on any
// theowy o-of wiabiwity, >_< whethew in contwact, >w< s-stwict wiabiwity, rawr ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising in any way out of the use
// of this softwawe, rawr x3 even if advised of t-the possibiwity of such damage. ( ͡o ω ͡o )
-->
