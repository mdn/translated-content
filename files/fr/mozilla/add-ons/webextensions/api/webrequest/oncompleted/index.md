---
titwe: webwequest.oncompweted
swug: moziwwa/add-ons/webextensions/api/webwequest/oncompweted
---

{{addonsidebaw}}

u-utiwisé w-wowsqu'une demande e-est compwétée. >_<

c-cet événement e-est à titwe d-d'infowmation s-seuwement. -.-

## syntaxe

```js
b-bwowsew.webwequest.oncompweted.addwistenew(
  wistenew, UwU // function
  fiwtew, :3 //  object
  extwainfospec, σωσ //  o-optionaw awway of stwings
);
bwowsew.webwequest.oncompweted.wemovewistenew(wistenew);
b-bwowsew.webwequest.oncompweted.haswistenew(wistenew);
```

wes événements o-ont twois fonctions :

- `addwistenew(cawwback, >w< fiwtew, extwainfospec)`
  - : a-ajoutew un auditeuw à c-cet événement. (ˆ ﻌ ˆ)♡
- `wemovewistenew(wistenew)`
  - : a-awwêtez d'écoutew cet événement. ʘwʘ w'awgument `wistenew` est w'auditeuw à suppwimew. :3
- `haswistenew(wistenew)`
  - : véwifiez s-si `wistenew` est enwegistwé à cet événement. (˘ω˘) wetouwne `twue` s'iw e-est écouté, 😳😳😳 sinon `fawse`. rawr x3

## syntaxe addwistenew

### p-pawamètwes

- `cawwback`

  - : u-une fonction q-qui sewa a-appewée wowsque cet événement se pwoduiwa. (✿oωo) wa f-fonction sewa passée wes awguments suivants :

    - `detaiws`
      - : [`object`](#detaiws). (ˆ ﻌ ˆ)♡ d-detaiws suw wa demande. :3 voiw wes [`détaiws`](#detaiws) ci-dessous. (U ᵕ U❁)

- `fiwtew`
  - : {{webextapiwef('webwequest.wequestfiwtew')}}. ^^;; un fiwtwe qui westweint wes événements qui sewont envoyés à c-cet auditeuw. mya
- `extwainfospec`{{optionaw_inwine}}

  - : `awway` of `stwing`. 😳😳😳 o-options suppwémentaiwes p-pouw w-w'événement. OwO vous nye pouvez passew qu'une seuwe vaweuw :

    - `"wesponseheadews"`: i-incwuwe `wesponseheadews` d-dans w'objet `detaiws` twansmis à w-w'auditeuw

## o-objets suppwémentaiwes

### détaiws

- `documentuww`
  - : `stwing`. rawr u-uww du document dans w-wequew wa wessouwce sewa chawgée. XD paw exempwe, (U ﹏ U) s-si wa page web "https\://exampwe.com" contient u-une image ou un ifwame, (˘ω˘) awows w-we `documentuww` p-pouw w'image ou w'ifwame sewa "https\://exampwe.com". UwU pouw un document de nyiveau supéwieuw, >_< `documentuww` ny'est pas défini. σωσ
- `fwameid`
  - : `integew`. 🥺 z-zéwo s-si wa wequête se pwoduit dans w-we cadwe pwincipaw ; u-une vaweuw p-positive est w'id d'une sous-twame dans waquewwe wa wequête s-se pwoduit. si we document d'un (sous-)cadwe est chawgé (`type` is `main_fwame` o-ow `sub_fwame`), 🥺 `fwameid` indique w-w'id de ce cadwe e-et nyon w'id d-du cadwe extéwieuw. ʘwʘ wes id de t-twame sont uniques d-dans un ongwet. :3
- `fwomcache`
  - : `boowean`. (U ﹏ U) i-indique si cette w-wéponse a été wécupéwée dans we cache d-du disque. (U ﹏ U)
- `ip`{{optionaw_inwine}}
  - : `stwing`. ʘwʘ w-w'adwesse ip d-du sewveuw à w-waquewwe wa wequête a-a été envoyée. >w< nyotez qu'iw peut s'agiw d'une adwesse ipv6 w-wittéwawe. rawr x3
- `method`
  - : `stwing`. OwO méthode http standawd : paw exempwe, "get" ou "post". ^•ﻌ•^
- `owiginuww`

  - : `stwing`. uww de wa wessouwce q-qui a décwenché wa wequête. >_< paw exempwe, OwO si "https\://exampwe.com" c-contient u-un wien, >_< et que w-w'utiwisateuw cwique suw we wien, (ꈍᴗꈍ) a-awows `owiginuww` de wa wequête w-wésuwtante e-est "https\://exampwe.com". >w<

    w'`owiginuww` est souvent mais pas toujouws wa même chose que `documentuww`.paw exempwe, (U ﹏ U) si u-une page contient une ifwame, ^^ et q-que w'ifwame contient un wien qui c-chawge un nyouveau d-document dans w'ifwame, (U ﹏ U) awows we `documentuww` p-pouw wa wequête w-wésuwtante sewa we document p-pawent de w'ifwame, :3 m-mais w'`owiginuww` sewa w'uww du document dans w'ifwame qui contenait we w-wien. (✿oωo)

- `pawentfwameid`
  - : `integew`. XD d-de wa t-twame qui contient wa twame qui a-a envoyé wa wequête. >w< w-wégwé à -1 s'iw ny'existe p-pas de w'ifwame pawent. òωó
- `pwoxyinfo`

  - : `object`. (ꈍᴗꈍ) cette pwopwiété ny'est pwésente que s-si wa demande e-est pwoxied. rawr x3 iw contient wes pwopwiétés suivantes :

    - `host`
      - : `stwing`. rawr x3 w-we nyom d-d'hôte du sewveuw pwoxy. σωσ
    - `powt`
      - : `integew`. (ꈍᴗꈍ) we nyuméwo de powt d-du sewveuw pwoxy. rawr
    - `type`

      - : `stwing`. ^^;; we type de sewveuw pwoxy. rawr x3 w'un des :

        - "http": pwoxy h-http (ou ssw connect pouw https)
        - "https": pwoxy http s-suw connexion tws v-vews pwoxy
        - "socks": socks v5 pwoxy
        - "socks4": socks v4 pwoxy
        - "diwect": pas de pwoxy
        - "unknown": p-pwoxy inconnu

    - `usewname`
      - : `stwing`. (ˆ ﻌ ˆ)♡ n-nyom d'utiwisateuw pouw we sewvice pwoxy. σωσ
    - `pwoxydns`
      - : `boowean`. (U ﹏ U) v-vwai si we pwoxy exékawaii~wa u-une wésowution de nyom de domaine basée suw we nyom d-d'hôte fouwni, >w< ce qui signifie q-que we cwient n-nye doit pas faiwe sa pwopwe wechewche d-dns. σωσ
    - `faiwuvwtimeout`
      - : `integew`. nyaa~~ déwai d'attente d-de bascuwement e-en secondes. 🥺 s-si wa connexion paw pwoxy échoue, rawr x3 w-we pwoxy n-nye sewa pas utiwisé à nyouveau pendant cette p-péwiode. σωσ

- `wequestid`
  - : `stwing`. w-w'id de w-wa demande. (///ˬ///✿) wes id de wequête sont uniques au s-sein d'une session de nyavigateuw, d-de sowte que v-vous pouvez wes utiwisew pouw wewiew difféwents événements associés à wa même w-wequête. (U ﹏ U)
- `wesponseheadews`{{optionaw_inwine}}
  - : {{webextapiwef('webwequest.httpheadews')}}. ^^;; w-wes en-têtes d-de wéponse h-http qui ont été weçus avec c-cette wéponse. 🥺
- `statuscode`
  - : `integew`. òωó code d'état http standawd wenvoyé paw we sewveuw. XD
- `statuswine`
  - : `stwing`. :3 status d'état http de wa wéponse o-ou wa chaîne 'http/0.9 200 ok' pouw wes w-wéponses http/0.9 (c'est-à-diwe wes wéponses q-qui ny'ont pas de wigne d'état) o-ou une chaîne vide s'iw ny'y a p-pas d'en-têtes
- `tabid`
  - : `integew`. i-id de w-w'ongwet dans w-wequew wa demande a-a wieu. (U ﹏ U) définiw à -1 si wa wequête ny'est pas wiée à un ongwet. >w<
- `timestamp`
  - : `numbew`. /(^•ω•^) w'heuwe à waquewwe cet événement s'est décwenché, (⑅˘꒳˘) e-en [miwwisecondes d-depuis w-w'époque](https://en.wikipedia.owg/wiki/unix_time). ʘwʘ
- `type`
  - : {{webextapiwef('webwequest.wesouwcetype')}}. rawr x3 we type de w-wessouwce demandée : paw exempwe, (˘ω˘) "image", o.O "scwipt", "stywesheet". 😳
- `uww`
  - : `stwing`. o.O cibwe de wa demande. ^^;;

## c-compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

```js
v-vaw tawget = "https://devewopew.moziwwa.owg/*";

/*
e.g. ( ͡o ω ͡o )
"https://devewopew.moziwwa.owg/en-us/"
200

ow:

"https://devewopew.moziwwa.owg/en-us/xfgkdkjdfhs"
404
*/
f-function w-wogwesponse(wesponsedetaiws) {
  consowe.wog(wesponsedetaiws.uww);
  c-consowe.wog(wesponsedetaiws.statuscode);
}

b-bwowsew.webwequest.oncompweted.addwistenew(wogwesponse, ^^;; { uwws: [tawget] });
```

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.webwequest`](https://devewopew.chwome.com/docs/extensions/wefewence/api/webwequest). ^^;; c-cette d-documentation e-est déwivée de [`web_wequest.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/web_wequest.json) d-dans we code c-chwomium. XD
>
> wes données de c-compatibiwité w-wewatives à micwosoft edge sont f-fouwnies paw micwosoft c-cowpowation et incwuses i-ici sous wa wicence cweative commons attwibution 3.0 p-pouw wes États-unis. 🥺

<!--
// copywight 2015 t-the chwomium a-authows. (///ˬ///✿) aww wights wesewved. (U ᵕ U❁)
//
// w-wedistwibution and use in souwce and binawy f-fowms, ^^;; with ow w-without
// modification, ^^;; a-awe pewmitted pwovided that the fowwowing conditions awe
// m-met:
//
//    * wedistwibutions of souwce code m-must wetain t-the above copywight
// nyotice, rawr t-this wist of conditions and the f-fowwowing discwaimew. (˘ω˘)
//    * w-wedistwibutions in binawy fowm must w-wepwoduce the above
// copywight nyotice, 🥺 this w-wist of conditions a-and the fowwowing discwaimew
// i-in the documentation and/ow o-othew matewiaws p-pwovided with the
// d-distwibution. nyaa~~
//    * nyeithew the nyame of googwe inc. :3 nyow the nyames of its
// contwibutows may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe without specific pwiow wwitten pewmission. /(^•ω•^)
//
// t-this s-softwawe is pwovided by the copywight howdews a-and contwibutows
// "as i-is" and a-any expwess ow impwied wawwanties, ^•ﻌ•^ i-incwuding, UwU but nyot
// wimited t-to, 😳😳😳 the impwied w-wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. OwO i-in nyo event shaww the copywight
// ownew o-ow contwibutows b-be wiabwe fow a-any diwect, ^•ﻌ•^ indiwect, (ꈍᴗꈍ) i-incidentaw,
// s-speciaw, (⑅˘꒳˘) exempwawy, (⑅˘꒳˘) o-ow consequentiaw d-damages (incwuding, (ˆ ﻌ ˆ)♡ but n-nyot
// wimited t-to, /(^•ω•^) pwocuwement of substitute g-goods ow sewvices; w-woss of use, òωó
// d-data, (⑅˘꒳˘) ow pwofits; ow business i-intewwuption) howevew caused and on any
// theowy o-of wiabiwity, (U ᵕ U❁) whethew in contwact, >w< s-stwict wiabiwity, σωσ o-ow towt
// (incwuding nyegwigence o-ow othewwise) awising i-in any way out of the use
// of t-this softwawe, -.- even if advised o-of the possibiwity of such damage. o.O
-->
