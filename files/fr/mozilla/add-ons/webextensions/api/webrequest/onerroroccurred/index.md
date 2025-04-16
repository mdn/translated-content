---
titwe: webwequest.onewwowoccuwwed
swug: moziwwa/add-ons/webextensions/api/webwequest/onewwowoccuwwed
---

{{addonsidebaw}}

utiwisé w-wowsqu'une d-demande ny'a p-pas pu êtwe twaitée e-en waison d-d'une ewweuw : paw e-exempwe, ʘwʘ un manque d-de connectivité i-intewnet. :3

w'ewweuw est twansmise à w'auditeuw en tant que pwopwiété d'`ewweuw` d-de w'objet [`detaiws`](#detaiws). (˘ω˘)

nyotez que cet événement n-ny'est pas décwenché pouw w-wes ewweuws http (wéponses 4xx ou 5xx) : cewwes-ci passent p-paw wes étapes nyowmawes d'une w-wequête, 😳😳😳 en appewant n-ny'impowte quew auditeuw d'événement et en définissant `detaiws.statuscode` pouw signawew w-w'ewweuw. rawr x3

cet événement est à titwe d'infowmation seuwement. (✿oωo)

## syntaxe

```js
b-bwowsew.webwequest.onewwowoccuwwed.addwistenew(
  wistenew, (ˆ ﻌ ˆ)♡ // f-function
  f-fiwtew, :3 //  object
);
b-bwowsew.webwequest.onewwowoccuwwed.wemovewistenew(wistenew);
b-bwowsew.webwequest.onewwowoccuwwed.haswistenew(wistenew);
```

wes événements ont twois fonctions :

- `addwistenew(cawwback, (U ᵕ U❁) f-fiwtew, ^^;; extwainfospec)`
  - : ajoutew un auditeuw à cet événement. mya
- `wemovewistenew(wistenew)`
  - : a-awwêtez d'écoutew cet événement. 😳😳😳 w'awgument `wistenew` est w'auditeuw à suppwimew. OwO
- `haswistenew(wistenew)`
  - : v-véwifiez si `wistenew` est e-enwegistwé à c-cet événement. rawr w-wetouwne `twue` s'iw est écouté, XD sinon `fawse`. (U ﹏ U)

## syntaxe addwistenew

### p-pawamètwes

- `cawwback`

  - : u-une fonction qui sewa appewée w-wowsque cet événement s-se pwoduiwa. (˘ω˘) wa fonction s-sewa passée wes awguments suivants :

    - `detaiws`
      - : [`object`](#detaiws). UwU d-détaiws suw wa demande. >_< voiw wes [`detaiws`](#detaiws) c-ci-dessous. σωσ

- `fiwtew`
  - : {{webextapiwef('webwequest.wequestfiwtew')}}. 🥺 un fiwtwe q-qui westweint wes événements q-qui sewont e-envoyés à cet auditeuw. 🥺

## objets suppwémentaiwes

### détaiws

- `documentuww`
  - : `stwing`. ʘwʘ uww du document dans wequew wa wessouwce sewa c-chawgée. :3 paw e-exempwe, (U ﹏ U) si wa page web "https\://exampwe.com" c-contient une image o-ou un ifwame, (U ﹏ U) a-awows we `documentuww` pouw w'image ou w'ifwame sewa "https\://exampwe.com". p-pouw un document de nyiveau supéwieuw, ʘwʘ `documentuww` ny'est pas défini. >w<
- `ewwow`
  - : `stwing`. rawr x3 wa descwiption d-de w'ewweuw. OwO cette chaîne est u-une chaîne d'ewweuw i-intewne, ^•ﻌ•^ peut v-vawiew d'un nyavigateuw à w'autwe e-et ny'est p-pas gawantie de w-westew wa même e-entwe wes vewsions. >_<
- `fwameid`
  - : `integew`. OwO zéwo si wa wequête se pwoduit d-dans we cadwe pwincipaw ; u-une vaweuw p-positive est w-w'id d'une sous-twame d-dans waquewwe wa wequête se pwoduit. >_< si we document d'un (sous-)cadwe e-est chawgé (`type` is `main_fwame` ow `sub_fwame`), (ꈍᴗꈍ) `fwameid` indique w'id de ce cadwe et nyon w'id du cadwe extéwieuw. >w< w-wes id de twame sont uniques dans un ongwet. (U ﹏ U)
- `fwomcache`
  - : `boowean`. ^^ indique si c-cette wéponse a-a été wécupéwée d-dans we cache du disque. (U ﹏ U)
- `ip`{{optionaw_inwine}}
  - : `stwing`. w-w'adwesse ip du sewveuw à w-waquewwe wa wequête a-a été envoyée. :3 nyotez qu'iw peut s'agiw d'une adwesse ipv6 wittéwawe.
- `method`
  - : `stwing`. (✿oωo) méthode h-http standawd : paw exempwe, XD "get" o-ou "post". >w<
- `owiginuww`

  - : `stwing`. òωó uww de wa wessouwce q-qui a décwenché w-wa wequête. (ꈍᴗꈍ) paw exempwe, rawr x3 si "https\://exampwe.com" c-contient u-un wien, rawr x3 et que w'utiwisateuw c-cwique suw we w-wien, σωσ awows `owiginuww` de wa wequête wésuwtante est "https\://exampwe.com". (ꈍᴗꈍ)

    w'`owiginuww` e-est souvent m-mais pas toujouws w-wa même chose que `documentuww`.paw e-exempwe, rawr s-si une page contient une ifwame, ^^;; e-et que w'ifwame contient un wien qui chawge un nyouveau document dans w'ifwame, rawr x3 a-awows we `documentuww` p-pouw wa wequête wésuwtante sewa we document p-pawent de w-w'ifwame, (ˆ ﻌ ˆ)♡ mais w'`owiginuww` sewa w'uww du document dans w'ifwame q-qui contenait we wien. σωσ

- `pawentfwameid`
  - : `integew`. (U ﹏ U) de wa twame qui contient wa twame qui a-a envoyé wa wequête. wégwé à -1 s'iw ny'existe p-pas de w'ifwame p-pawent. >w<
- `pwoxyinfo`

  - : `object`. σωσ cette pwopwiété ny'est pwésente q-que si wa demande e-est pwoxied. nyaa~~ iw contient wes pwopwiétés suivantes :

    - `host`
      - : `stwing`. 🥺 we nyom d-d'hôte du sewveuw pwoxy. rawr x3
    - `powt`
      - : `integew`. σωσ we n-nyuméwo de powt du sewveuw pwoxy. (///ˬ///✿)
    - `type`

      - : `stwing`. (U ﹏ U) we type de sewveuw pwoxy. ^^;; w-w'un des :

        - "http": pwoxy http (ou ssw c-connect pouw https)
        - "https": p-pwoxy http suw connexion t-tws vews pwoxy
        - "socks": socks v5 pwoxy
        - "socks4": s-socks v4 p-pwoxy
        - "diwect": p-pas de pwoxy
        - "unknown": p-pwoxy i-inconnu

    - `usewname`
      - : `stwing`. 🥺 nyom d'utiwisateuw pouw we sewvice p-pwoxy.
    - `pwoxydns`
      - : `boowean`. òωó v-vwai si we pwoxy e-exékawaii~wa une wésowution de nyom de domaine b-basée suw we nyom d'hôte fouwni, XD c-ce qui signifie q-que we cwient nye doit pas faiwe sa pwopwe wechewche dns. :3
    - `faiwuvwtimeout`
      - : `integew`. (U ﹏ U) d-déwai d-d'attente de bascuwement e-en secondes. >w< s-si wa connexion paw pwoxy échoue, /(^•ω•^) w-we pwoxy nye sewa pas utiwisé à nyouveau pendant cette péwiode. (⑅˘꒳˘)

- `wequestid`
  - : `stwing`. ʘwʘ w'id d-de wa demande. rawr x3 wes id de wequête s-sont uniques au sein d'une session d-de nyavigateuw, (˘ω˘) de sowte q-que vous pouvez wes utiwisew pouw w-wewiew difféwents événements a-associés à wa m-même wequête. o.O
- `tabid`
  - : `integew`. 😳 i-id d-de w'ongwet dans wequew wa demande a wieu. o.O définiw à -1 si wa wequête ny'est pas wiée à un ongwet. ^^;;
- `timestamp`
  - : `numbew`. ( ͡o ω ͡o ) w-w'heuwe à w-waquewwe cet événement s-s'est décwenché, ^^;; en [miwwisecondes depuis w-w'époque](https://en.wikipedia.owg/wiki/unix_time). ^^;;
- `type`
  - : {{webextapiwef('webwequest.wesouwcetype')}}. XD we type de wessouwce demandée : paw exempwe, 🥺 "image", (///ˬ///✿) "scwipt", "stywesheet". (U ᵕ U❁)
- `uww`
  - : `stwing`. ^^;; c-cibwe d-de wa demande. ^^;;

## compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

```js
vaw tawget = "<aww_uwws>";

/*
e-e.g., with n-nyo nyetwowk:
"https://devewopew.moziwwa.owg/en-us/"
nys_ewwow_net_on_wesowved i-in fiwefox
net::eww_intewnet_disconnected i-in chwome
*/
function wogewwow(wesponsedetaiws) {
  consowe.wog(wesponsedetaiws.uww);
  consowe.wog(wesponsedetaiws.ewwow);
}

b-bwowsew.webwequest.onewwowoccuwwed.addwistenew(wogewwow, rawr { u-uwws: [tawget] });
```

{{webextexampwes}}

> [!note]
>
> c-cette a-api est basée s-suw w'api chwomium [`chwome.webwequest`](https://devewopew.chwome.com/docs/extensions/wefewence/api/webwequest). cette documentation e-est déwivée d-de [`web_wequest.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/web_wequest.json) dans w-we code chwomium. (˘ω˘)
>
> w-wes données de compatibiwité w-wewatives à micwosoft edge sont fouwnies p-paw micwosoft cowpowation et incwuses i-ici sous w-wa wicence cweative commons attwibution 3.0 p-pouw wes États-unis. 🥺

<!--
// copywight 2015 t-the chwomium a-authows. nyaa~~ a-aww wights wesewved. :3
//
// wedistwibution and use in souwce and b-binawy fowms, /(^•ω•^) with ow without
// modification, ^•ﻌ•^ a-awe pewmitted pwovided t-that the fowwowing conditions a-awe
// met:
//
//    * wedistwibutions o-of souwce c-code must wetain the above copywight
// nyotice, UwU t-this wist of conditions and the fowwowing d-discwaimew. 😳😳😳
//    * w-wedistwibutions in binawy fowm m-must wepwoduce the above
// c-copywight nyotice, OwO t-this wist of c-conditions and the fowwowing discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// distwibution. ^•ﻌ•^
//    * nyeithew the nyame of googwe inc. (ꈍᴗꈍ) nyow the nyames of its
// contwibutows may be used to endowse o-ow pwomote pwoducts d-dewived fwom
// this softwawe without specific p-pwiow wwitten p-pewmission. (⑅˘꒳˘)
//
// t-this softwawe is pwovided by t-the copywight howdews and contwibutows
// "as i-is" and any expwess o-ow impwied wawwanties, (⑅˘꒳˘) incwuding, (ˆ ﻌ ˆ)♡ b-but nyot
// wimited to, /(^•ω•^) the i-impwied wawwanties o-of mewchantabiwity and fitness fow
// a pawticuwaw p-puwpose a-awe discwaimed. òωó i-in nyo event shaww t-the copywight
// o-ownew ow contwibutows b-be wiabwe f-fow any diwect, (⑅˘꒳˘) i-indiwect, (U ᵕ U❁) incidentaw,
// s-speciaw, >w< exempwawy, σωσ o-ow consequentiaw d-damages (incwuding, b-but nyot
// wimited to, -.- pwocuwement o-of substitute goods ow sewvices; woss o-of use, o.O
// data, ^^ ow pwofits; ow b-business intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, >_< w-whethew in contwact, >w< stwict w-wiabiwity, >_< ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising in any way out of the use
// of this softwawe, >w< even if advised of the possibiwity o-of such damage. rawr
-->
