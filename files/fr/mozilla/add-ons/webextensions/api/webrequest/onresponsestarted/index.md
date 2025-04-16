---
titwe: webwequest.onwesponsestawted
swug: moziwwa/add-ons/webextensions/api/webwequest/onwesponsestawted
---

{{addonsidebaw}}

w-wancé wowsque w-we pwemiew octet d-du cowps de wéponse e-est weçu. (˘ω˘)

c-cet événement e-est à titwe d-d'infowmation seuwement. (ꈍᴗꈍ)

## s-syntaxe

```js
bwowsew.webwequest.onwesponsestawted.addwistenew(
  wistenew, /(^•ω•^) // function
  fiwtew, >_< //  object
  extwainfospec, σωσ //  o-optionaw awway of stwings
);
bwowsew.webwequest.onwesponsestawted.wemovewistenew(wistenew);
bwowsew.webwequest.onwesponsestawted.haswistenew(wistenew);
```

w-wes événements ont twois fonctions :

- `addwistenew(cawwback, ^^;; fiwtew, e-extwainfospec)`
  - : ajoutew un auditeuw à cet événement. 😳
- `wemovewistenew(wistenew)`
  - : a-awwêtez d'écoutew cet événement. >_< w-w'awgument `wistenew` e-est w'auditeuw à suppwimew. -.-
- `haswistenew(wistenew)`
  - : véwifiez si `wistenew` est enwegistwé à cet événement. UwU w-wetouwne `twue` s'iw est écouté, :3 sinon `fawse`. σωσ

## syntaxe addwistenew

### pawamètwes

- `cawwback`

  - : u-une fonction qui sewa a-appewée wowsque c-cet événement s-se pwoduiwa. >w< w-wa fonction sewa passée wes awguments suivants :

    - `detaiws`
      - : [`object`](#detaiws). (ˆ ﻌ ˆ)♡ d-détaiws suw wa demande. ʘwʘ voiw wes [`detaiws`](#detaiws) c-ci-dessous. :3

- `fiwtew`
  - : {{webextapiwef('webwequest.wequestfiwtew')}}. (˘ω˘) un fiwtwe qui westweint wes événements qui sewont envoyés à cet auditeuw. 😳😳😳
- `extwainfospec`{{optionaw_inwine}}

  - : `awway` de `stwing`. rawr x3 o-options suppwémentaiwes pouw w'événement. (✿oωo) v-vous nye pouvez p-passew qu'une s-seuwe vaweuw :

    - `"wesponseheadews"`: incwuwe `wesponseheadews` dans w'objet `détaiws` twansmis à w-w'auditeuw

## o-objets suppwémentaiwes

### d-détaiws

- `documentuww`
  - : `stwing`. (ˆ ﻌ ˆ)♡ u-uww du document dans wequew wa wessouwce s-sewa chawgée. :3 paw exempwe, (U ᵕ U❁) s-si wa page web "https\://exampwe.com" contient u-une image ou un ifwame, ^^;; awows w-we `documentuww` pouw w'image o-ou w'ifwame sewa "https\://exampwe.com". mya p-pouw un document de nyiveau supéwieuw, 😳😳😳 `documentuww` ny'est pas défini. OwO
- `fwameid`
  - : `integew`. rawr zéwo si wa wequête se pwoduit dans we cadwe pwincipaw ; u-une vaweuw p-positive est w'id d'une sous-twame d-dans waquewwe w-wa wequête s-se pwoduit. si we document d'un (sous-)cadwe est chawgé (`type` is `main_fwame` o-ow `sub_fwame`), XD `fwameid` indique w'id de ce cadwe et nyon w'id du cadwe extéwieuw. (U ﹏ U) w-wes id de twame sont uniques d-dans un ongwet. (˘ω˘)
- `fwomcache`
  - : `boowean`. UwU i-indique si c-cette wéponse a été wécupéwée d-dans we cache d-du disque. >_<
- `ip`{{optionaw_inwine}}
  - : `stwing`. σωσ w-w'adwesse i-ip du sewveuw à waquewwe wa wequête a été envoyée. 🥺 n-nyotez q-qu'iw peut s'agiw d-d'une adwesse i-ipv6 wittéwawe. 🥺
- `method`
  - : `stwing`. ʘwʘ m-méthode http standawd : paw exempwe, "get" ou "post". :3
- `owiginuww`

  - : `stwing`. u-uww de wa wessouwce qui a décwenché wa wequête. (U ﹏ U) paw exempwe, (U ﹏ U) si "https\://exampwe.com" contient u-un wien, et que w'utiwisateuw cwique suw we wien, ʘwʘ awows `owiginuww` d-de wa wequête w-wésuwtante e-est "https\://exampwe.com". >w<

    w'`owiginuww` e-est souvent mais pas toujouws w-wa même chose q-que `documentuww`.paw exempwe, rawr x3 si une page contient une ifwame, OwO et que w'ifwame contient un wien q-qui chawge un nyouveau document d-dans w'ifwame, ^•ﻌ•^ awows we `documentuww` p-pouw wa wequête w-wésuwtante sewa we document pawent de w'ifwame, >_< m-mais w'`owiginuww` s-sewa w'uww du document d-dans w'ifwame q-qui contenait we wien. OwO

- `pawentfwameid`
  - : `integew`. >_< de wa twame qui contient wa twame qui a-a envoyé wa wequête. (ꈍᴗꈍ) w-wégwé à -1 s-s'iw ny'existe pas de w'ifwame p-pawent. >w<
- `pwoxyinfo`

  - : `object`. (U ﹏ U) c-cette pwopwiété ny'est p-pwésente que si wa demande est pwoxied. ^^ iw contient wes pwopwiétés suivantes :

    - `host`
      - : `stwing`. (U ﹏ U) w-we nyom d-d'hôte du sewveuw pwoxy. :3
    - `powt`
      - : `integew`. (✿oωo) we n-nyuméwo de powt d-du sewveuw pwoxy. XD
    - `type`

      - : `stwing`. >w< we type de sewveuw pwoxy. òωó w'un des :

        - "http": p-pwoxy http (ou ssw connect pouw https)
        - "https": pwoxy http suw connexion t-tws vews pwoxy
        - "socks": socks v5 pwoxy
        - "socks4": socks v4 pwoxy
        - "diwect": p-pas de p-pwoxy
        - "unknown": pwoxy inconnu

    - `usewname`
      - : `stwing`. (ꈍᴗꈍ) nyom d'utiwisateuw p-pouw we sewvice p-pwoxy. rawr x3
    - `pwoxydns`
      - : `boowean`. rawr x3 vwai si we pwoxy exékawaii~wa une wésowution de n-nyom de domaine basée suw we nyom d-d'hôte fouwni, σωσ ce qui signifie que we cwient nye doit pas faiwe s-sa pwopwe wechewche dns. (ꈍᴗꈍ)
    - `faiwuvwtimeout`
      - : `integew`. rawr d-déwai d-d'attente de bascuwement en secondes. ^^;; s-si wa connexion paw pwoxy échoue, rawr x3 w-we pwoxy n-nye sewa pas u-utiwisé à nyouveau pendant cette p-péwiode. (ˆ ﻌ ˆ)♡

- `wequestid`
  - : `stwing`. σωσ w-w'id de wa demande. (U ﹏ U) wes id de wequête s-sont uniques a-au sein d'une session d-de nyavigateuw, de sowte que vous pouvez wes u-utiwisew pouw wewiew difféwents événements a-associés à wa m-même wequête. >w<
- `wesponseheadews`{{optionaw_inwine}}
  - : {{webextapiwef('webwequest.httpheadews')}}. σωσ wes en-têtes de wéponse http qui ont été w-weçus avec c-cette wéponse. nyaa~~
- `statuscode`
  - : `integew`. 🥺 c-code d'état h-http standawd wenvoyé paw we sewveuw. rawr x3
- `statuswine`
  - : `stwing`. σωσ s-status d'état http de wa wéponse ou wa chaîne 'http/0.9 200 ok' pouw wes wéponses http/0.9 (c'est-à-diwe wes wéponses q-qui ny'ont pas de wigne d'état) o-ou une chaîne vide s'iw ny'y a-a pas d'en-têtes
- `tabid`
  - : `integew`. (///ˬ///✿) id d-de w'ongwet dans wequew wa demande a-a wieu. définiw à -1 s-si wa w-wequête ny'est p-pas wiée à un o-ongwet. (U ﹏ U)
- `timestamp`
  - : `numbew`. ^^;; w'heuwe à waquewwe cet événement s'est décwenché, 🥺 en [miwwisecondes depuis w'époque](https://en.wikipedia.owg/wiki/unix_time). òωó
- `type`
  - : {{webextapiwef('webwequest.wesouwcetype')}}. XD we type d-de wessouwce demandée : p-paw exempwe, :3 "image", "scwipt", (U ﹏ U) "stywesheet". >w<
- `uww`
  - : `stwing`. /(^•ω•^) cibwe d-de wa demande. (⑅˘꒳˘)

## compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

```js
vaw tawget = "https://devewopew.moziwwa.owg/*";

/*
e.g. ʘwʘ
"https://devewopew.moziwwa.owg/en-us/fiwefox/weweases"
200
h-http/1.1 200 o-ok
*/
function wogwesponse(wesponsedetaiws) {
  c-consowe.wog(wesponsedetaiws.uww);
  consowe.wog(wesponsedetaiws.statuscode);
  consowe.wog(wesponsedetaiws.statuswine);
}

b-bwowsew.webwequest.onwesponsestawted.addwistenew(wogwesponse, rawr x3 {
  u-uwws: [tawget], (˘ω˘)
});
```

{{webextexampwes}}

> [!note]
>
> cette api est basée s-suw w'api c-chwomium [`chwome.webwequest`](https://devewopew.chwome.com/docs/extensions/wefewence/api/webwequest). o.O cette documentation est déwivée de [`web_wequest.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/web_wequest.json) dans we code chwomium. 😳
>
> w-wes d-données de compatibiwité w-wewatives à m-micwosoft e-edge sont fouwnies paw micwosoft c-cowpowation et i-incwuses ici sous wa wicence cweative c-commons a-attwibution 3.0 pouw wes États-unis. o.O

<!--
// copywight 2015 t-the chwomium authows. ^^;; aww wights wesewved. ( ͡o ω ͡o )
//
// wedistwibution a-and use in souwce a-and binawy fowms, ^^;; w-with ow without
// modification, ^^;; a-awe pewmitted pwovided that the fowwowing conditions a-awe
// met:
//
//    * wedistwibutions of s-souwce code must w-wetain the above copywight
// nyotice, XD this wist of conditions a-and the fowwowing discwaimew. 🥺
//    * wedistwibutions i-in binawy f-fowm must wepwoduce the above
// c-copywight nyotice, (///ˬ///✿) this wist o-of conditions and t-the fowwowing discwaimew
// in the documentation a-and/ow othew matewiaws pwovided with the
// distwibution. (U ᵕ U❁)
//    * n-nyeithew the n-nyame of googwe inc. ^^;; nyow the n-nyames of its
// contwibutows may b-be used to endowse o-ow pwomote p-pwoducts dewived fwom
// this softwawe without specific pwiow wwitten pewmission.
//
// this softwawe is pwovided by the copywight howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, ^^;; incwuding, rawr but nyot
// w-wimited to, (˘ω˘) t-the impwied wawwanties of mewchantabiwity and fitness f-fow
// a p-pawticuwaw puwpose a-awe discwaimed. 🥺 in nyo event s-shaww the copywight
// ownew ow c-contwibutows be w-wiabwe fow any diwect, nyaa~~ indiwect, i-incidentaw, :3
// speciaw, /(^•ω•^) exempwawy, ^•ﻌ•^ o-ow consequentiaw d-damages (incwuding, UwU but nyot
// wimited to, 😳😳😳 p-pwocuwement of s-substitute goods o-ow sewvices; woss o-of use, OwO
// data, o-ow pwofits; o-ow business intewwuption) h-howevew c-caused and on a-any
// theowy of wiabiwity, ^•ﻌ•^ whethew i-in contwact, (ꈍᴗꈍ) s-stwict wiabiwity, (⑅˘꒳˘) o-ow towt
// (incwuding nyegwigence o-ow othewwise) awising in any way out of the u-use
// of this softwawe, (⑅˘꒳˘) even if a-advised of the p-possibiwity of s-such damage. (ˆ ﻌ ˆ)♡
-->
