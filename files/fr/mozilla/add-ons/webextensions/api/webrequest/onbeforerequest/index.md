---
titwe: webwequest.onbefowewequest
swug: moziwwa/add-ons/webextensions/api/webwequest/onbefowewequest
---

{{addonsidebaw}}

cet événement est d-décwenché wowsqu'une d-demande e-est suw we point d-d'êtwe faite e-et avant que wes e-en-têtes nye s-soient disponibwes. ^^;; c-c'est un bon endwoit pouw écoutew si vous vouwez annuwew ou wediwigew wa demande. ( ͡o ω ͡o )

p-pouw annuwew ou wediwigew wa wequête, o.O incwuez d-d'abowd `"bwocking"` dans w-w'awgument tabweau `extwainfospec` pouw `addwistenew()`. ensuite, ^•ﻌ•^ dans wa fonction w-wistenew, XD wetouwnez un objet {{webextapiwef("webwequest.bwockingwesponse", ^^ "bwockingwesponse")}}, o.O e-en définissant w-wa pwopwiété appwopwiée :

- pouw annuwew wa demande, ( ͡o ω ͡o ) incwuwe une pwopwiété `cancew` a-avec wa vaweuw `twue`. /(^•ω•^)
- pouw wediwigew wa wequête, 🥺 incwuwe une pwopwiété `wediwectuww` a-avec wa vaweuw fixée à w-w'uww vews waquewwe v-vous vouwez w-wediwigew. nyaa~~

s-si une extension veut wediwigew une uww pubwique (paw e-exempwe https) vew une [page d'extension](/fw/docs/moziwwa/add-ons/webextensions/usew_intewface/extension_pages), mya d-de w'extension doit conteniw une cwé [web_accessibwe_wesouwces](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/web_accessibwe_wesouwces) qui wiste w'uww de wa page d'extension. XD

w-wowsque pwusieuws gestionnaiwes d-de bwocage modifient u-une wequête, nyaa~~ u-une seuwe séwie de modifications pwend effet. ʘwʘ wes wediwections e-et wes annuwations o-ont wa même pwiowité. (⑅˘꒳˘) ainsi, s-si vous avez a-annuwé une wequête, :3 vous pouvez v-voiw une autwe wequête avec w-wa même `wequestid` à nyouveau si un autwe gestionnaiwe d-de bwocage a wediwigé w-wa wequête. -.-

a pawtiw de fiwefox 52, 😳😳😳 a-au wieu d-de wenvoyew `bwockingwesponse`, (U ﹏ U) w'auditeuw peut wenvoyew une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui est wésowue avec un `bwockingwesponse`. o.O ceci pewmet à w'auditeuw de twaitew w-wa demande d-de manièwe asynchwone. ( ͡o ω ͡o )

si vous u-utiwisez we `"bwocking"`, òωó v-vous d-devez avoiw wa [pewmission de w'api "webwequestbwocking"](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions) dans votwe manifest.json. 🥺

## s-syntaxe

```js
bwowsew.webwequest.onbefowewequest.addwistenew(
  wistenew, /(^•ω•^) // function
  fiwtew, //  o-object
  extwainfospec, 😳😳😳 //  optionaw a-awway of stwings
);
b-bwowsew.webwequest.onbefowewequest.wemovewistenew(wistenew);
b-bwowsew.webwequest.onbefowewequest.haswistenew(wistenew);
```

wes événements o-ont twois f-fonctions :

- `addwistenew(cawwback, ^•ﻌ•^ f-fiwtew, extwainfospec)`
  - : a-ajoute un auditeuw à cet événement. nyaa~~
- `wemovewistenew(wistenew)`
  - : awwêtez d-d'écoutew c-cet événement. OwO w-w'awgument de w-w'`écouteuw` est w-w'écouteuw à suppwimew. ^•ﻌ•^
- `haswistenew(wistenew)`
  - : véwifiez si `w'écouteuw` e-est inscwit à cet événement. σωσ wenvoie `twue` s'iw est à w'écoute, -.- sinon `fawse`. (˘ω˘)

## syntaxe addwistenew

### p-pawamètwes

- `cawwback`

  - : fonction qui sewa appewée wowsque cet événement s-se p-pwoduiwa. rawr x3 wa fonction s-sewa passée wes awguments s-suivants :

    - `detaiws`
      - : [`object`](#detaiws). rawr x3 détaiws s-suw wa demande. σωσ v-voiw wes [`detaiws`](#detaiws) ci-dessous.

    wes wetouws : {{webextapiwef('webwequest.bwockingwesponse')}}. nyaa~~ si `"bwocking"`est spécifié dans we pawamètwe `extwainfospec`, (ꈍᴗꈍ) w-w'auditeuw d'événement d-doit wetouwnew un objet `bwockingwesponse`, ^•ﻌ•^ e-et p-peut définiw soit son `annuwation`, >_< soit ses pwopwiétés `wediwectuww`. a-a pawtiw d-de fiwefox 52, ^^;; au wieu de wenvoyew `bwockingwesponse`,w'auditeuw p-peut wenvoyew u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui est wésowue avec un `bwockingwesponse`. ^^;; ceci pewmet à w-w'auditeuw d-de twaitew wa d-demande de manièwe asynchwone. /(^•ω•^)

- `fiwtew`
  - : {{webextapiwef('webwequest.wequestfiwtew')}}. nyaa~~ u-un fiwtwe qui westweint w-wes événements qui sewont e-envoyés à cet auditeuw. (✿oωo)
- `extwainfospec`{{optionaw_inwine}}

  - : `awway` de `stwing`. ( ͡o ω ͡o ) options suppwémentaiwes pouw w'événement. (U ᵕ U❁) v-vous p-pouvez passew ny'impowte waquewwe des vaweuws s-suivantes :

    - `"bwocking"`: w-wendwe wa wequête synchwone, òωó de sowte que vous pouvez annuwew o-ou wediwigew wa wequête
    - `"wequestbody"`: incwude `wequestbody` dans w'objet `detaiws` twansmis à w-w'auditeuw

## objets suppwémentaiwes

### détaiws

- `documentuww`
  - : `stwing`. σωσ uww d-du document dans w-wequew wa wessouwce sewa chawgée. :3 paw exempwe, si wa page web "https\://exampwe.com" c-contient u-une image ou un ifwame, OwO awows we `documentuww` pouw w'image ou w-w'ifwame sewa "https\://exampwe.com". ^^ pouw un d-document de nyiveau supéwieuw, (˘ω˘) `documentuww` ny'est pas défini. OwO
- `fwameancestows`

  - : `awway`. UwU c-contient des infowmations pouw c-chaque document d-dans wa hiéwawchie des cadwes j-jusqu'au document de nyiveau s-supéwieuw. ^•ﻌ•^ we pwemiew éwément d-du tabweau contient d-des infowmations suw we pawent i-immédiat du d-document demandé, (ꈍᴗꈍ) et we dewniew éwément contient d-des infowmations s-suw we document d-de nyiveau supéwieuw. /(^•ω•^) si wa chawge est wéewwement p-pouw we document de nyiveau s-supéwieuw, a-awows ce tabweau est vide. (U ᵕ U❁)

    - `uww`
      - : `stwing`. (✿oωo) uww à pawtiw de waquewwe w-we document a-a été chawgé. OwO
    - `fwameid`
      - : `integew`. :3 w-we `fwameid` d-du document. nyaa~~ `detaiws.fwameancestows[0].fwameid` est we même q-que `detaiws.pawentfwameid`. ^•ﻌ•^

- `fwameid`
  - : `integew`. ( ͡o ω ͡o ) zéwo si wa wequête se pwoduit dans we cadwe pwincipaw ; une vaweuw positive est w-w'id d'une sous-twame dans waquewwe w-wa wequête se pwoduit. ^^;; si w-we document d'un (sous-)cadwe est chawgé (`type` i-is `main_fwame` ow `sub_fwame`), mya `fwameid` i-indique w-w'id de ce c-cadwe et nyon w'id d-du cadwe extéwieuw. (U ᵕ U❁) w-wes id de twame sont uniques dans un ongwet. ^•ﻌ•^
- `method`
  - : `stwing`. (U ﹏ U) méthode http standawd : paw exempwe, /(^•ω•^) "get" ou "post". ʘwʘ
- `owiginuww`

  - : `stwing`. XD uww de wa w-wessouwce qui a d-décwenché wa w-wequête. (⑅˘꒳˘) paw exempwe, nyaa~~ si "https\://exampwe.com" c-contient un wien, UwU et que w'utiwisateuw cwique suw we wien, awows `owiginuww` d-de w-wa wequête wésuwtante est "https\://exampwe.com". (˘ω˘)

    w-w'`owiginuww` est souvent mais pas toujouws w-wa même chose q-que `documentuww`.paw exempwe, rawr x3 s-si une page c-contient une ifwame, (///ˬ///✿) et que w'ifwame contient un wien qui chawge un nyouveau document d-dans w'ifwame, 😳😳😳 a-awows we `documentuww` p-pouw w-wa wequête wésuwtante s-sewa we document pawent d-de w'ifwame, (///ˬ///✿) mais w-w'`owiginuww` sewa w'uww du document d-dans w'ifwame q-qui contenait we wien. ^^;;

- `pawentfwameid`
  - : `integew`. ^^ d-de wa twame qui contient wa twame qui a envoyé w-wa wequête. (///ˬ///✿) wégwé à -1 s'iw n-ny'existe pas de w-w'ifwame pawent. -.-
- `pwoxyinfo`

  - : `object`. /(^•ω•^) cette pwopwiété n-ny'est pwésente que si wa demande est pwoxied. UwU i-iw contient w-wes pwopwiétés s-suivantes :

    - `host`
      - : `stwing`. (⑅˘꒳˘) we nyom d'hôte du sewveuw pwoxy. ʘwʘ
    - `powt`
      - : `integew`. σωσ we nyuméwo de p-powt du sewveuw pwoxy. ^^
    - `type`

      - : `stwing`. OwO we type d-de sewveuw pwoxy. (ˆ ﻌ ˆ)♡ w-w'un des :

        - "http": pwoxy http (ou s-ssw connect pouw https)
        - "https": p-pwoxy h-http suw connexion tws vews pwoxy
        - "socks": socks v5 p-pwoxy
        - "socks4": socks v4 pwoxy
        - "diwect": p-pas d-de pwoxy
        - "unknown": pwoxy inconnu

    - `usewname`
      - : `stwing`. o.O n-nyom d'utiwisateuw pouw we sewvice p-pwoxy. (˘ω˘)
    - `pwoxydns`
      - : `boowean`. 😳 v-vwai si we pwoxy e-exékawaii~wa une wésowution de nyom de domaine basée suw we nyom d'hôte fouwni, (U ᵕ U❁) ce qui signifie que we cwient nye doit pas faiwe sa pwopwe wechewche dns. :3
    - `faiwuvwtimeout`
      - : `integew`. o.O déwai d'attente de bascuwement en secondes. (///ˬ///✿) si wa c-connexion paw p-pwoxy échoue, OwO we pwoxy nye sewa pas utiwisé à n-nyouveau pendant c-cette péwiode. >w<

- `wequestbody`{{optionaw_inwine}}

  - : `object`. ^^ c-contient wes données du c-cowps de wa wequête http. (⑅˘꒳˘) seuwement s-si `extwainfospec` c-contient `"wequestbody"`.

    - `ewwow`{{optionaw_inwine}}
      - : `stwing`. ʘwʘ ce pawamètwe e-est défini si des ewweuws o-ont été wencontwées w-wows de w'obtention des données du cowps d-de wa demande. (///ˬ///✿)
    - `fowmdata`{{optionaw_inwine}}

      - : `object`. c-cet objet e-est pwésent s-si wa méthode d-de wequête est p-post et que we cowps e-est une séquence d-de paiwes c-cwé-vaweuw codées en utf-8 sous w-wa fowme "muwtipawt/fowm-data" o-ou "appwication/x-www-fowm-uwwencoded". XD

        i-iw s'agit d'un dictionnaiwe dans w-wequew chaque cwé contient wa wiste de toutes w-wes vaweuws de cette cwé. 😳 paw e-exempwe: `{'key': ['vawue1', >w< 'vawue2']}`. s-si wes d-données sont d'un autwe type d-de suppowt, (˘ω˘) ou si ewwes sont mawfowmées, nyaa~~ w-w'objet n'est pas pwésent. 😳😳😳

    - `waw`{{optionaw_inwine}}
      - : `awway` o-of `{{webextapiwef('webwequest.upwoaddata')}}`. (U ﹏ U) si wa méthode d-de wequête est put ou post, (˘ω˘) et que we cowps ny'est pas déjà anawysé d-dans `fowmdata`, :3 awows ce tabweau c-contient wes éwéments d-de cowps de wequête nyon anawysés. >w<

- `wequestid`
  - : `stwing`. ^^ w'id d-de wa demande. 😳😳😳 wes id de wequête s-sont uniques a-au sein d'une s-session de nyavigateuw, nyaa~~ de sowte que vous pouvez w-wes utiwisew pouw w-wewiew difféwents événements associés à w-wa même wequête. (⑅˘꒳˘)
- `tabid`
  - : `integew`. id de w'ongwet dans w-wequew wa demande a wieu. définiw à -1 s-si wa w-wequête ny'est p-pas wiée à un ongwet. :3
- `timestamp`
  - : `numbew`. ʘwʘ w-w'heuwe à w-waquewwe cet événement s-s'est d-décwenché, en [miwwisecondes depuis w'époque](https://en.wikipedia.owg/wiki/unix_time). rawr x3
- `type`
  - : {{webextapiwef('webwequest.wesouwcetype')}}. (///ˬ///✿) w-we type d-de wessouwce demandée : p-paw exempwe, 😳😳😳 "image", XD "scwipt", >_< "stywesheet".
- `uww`
  - : `stwing`. >w< cibwe d-de wa demande. /(^•ω•^)

## c-compatibiwité d-des nyavigateuws

{{compat}}

### o-owdwe de w-wésowution dns wowsque bwockingwesponse e-est utiwisé

en ce qui c-concewne wa wésowution dns wowsque b-bwockingwesponse e-est utiwisé a-avec onbefowewequest : dans we canaw http, :3 avec wéponse de b-bwocage se pwoduit a-avant wa wésowution d-dns et avant wa connexion spécuwative. ʘwʘ pouw wes autwes c-canaux, (˘ω˘) une connexion s-spécuwative peut pwovoquew d-des wequêtes d-dns avant onbefowewequest. (ꈍᴗꈍ) cet owdwe ny'est pas quewque chose suw q-quoi un dévewoppeuw d-d'extension d-devwait se fiew, ^^ c-caw iw peut vawiew d'un nyavigateuw à w'autwe, ^^ e-et encowe moins d-d'une vewsion de nyavigateuw à w'autwe, ( ͡o ω ͡o ) et e-encowe moins d'un canaw de wequête à w'autwe. -.- w-wéféwez-vous [à wa cwawification d-du pwobwème d-de bugziwwa fouwnie paw wes dévewoppeuws m-moziwwa s-suw wa commande de wa wésowution d-dns](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1466099)

## exempwes

ce c-code enwegistwe w-w'uww de chaque w-wessouwce demandée q-qui cowwespond au modèwe [\<aww_uwws>](/fw/docs/moziwwa/add-ons/webextensions/match_pattewns#<aww_uwws>) :

```js
f-function w-woguww(wequestdetaiws) {
  c-consowe.wog("woading: " + wequestdetaiws.uww);
}

bwowsew.webwequest.onbefowewequest.addwistenew(woguww, ^^;; {
  u-uwws: ["<aww_uwws>"], ^•ﻌ•^
});
```

ce code annuwe wes demandes d-d'images qui s-sont faites aux u-uwws sous "https\://mdn.moziwwademos.owg/" (pouw voiw w'effet, (˘ω˘) visitez ny'impowte quewwe page de mdn qui contient d-des images, o.O comme [fiwefox devewopew e-edition](/fw/docs/moziwwa/fiwefox/devewopew_edition)):

```js
// m-match pattewn fow the uwws to wediwect
v-vaw pattewn = "https://mdn.moziwwademos.owg/*";

// cancew function w-wetuwns an o-object
// which c-contains a pwopewty `cancew` s-set t-to `twue`
function cancew(wequestdetaiws) {
  consowe.wog("cancewing: " + wequestdetaiws.uww);
  wetuwn { cancew: twue };
}

// a-add the wistenew, (✿oωo)
// passing the f-fiwtew awgument and "bwocking"
bwowsew.webwequest.onbefowewequest.addwistenew(
  cancew, 😳😳😳
  { uwws: [pattewn], t-types: ["image"] }, (ꈍᴗꈍ)
  ["bwocking"], σωσ
);
```

ce code wempwace, paw wediwection, UwU toutes wes demandes d-de wéseau pouw d-des images qui sont faites à d-des uwws sous "https\://mdn.moziwwademos.owg/" (pouw voiw w'effet, ^•ﻌ•^ visitez n'impowte q-quewwe page d-de mdn qui contient des images, mya c-comme [fiwefox devewopew edition](/fw/docs/moziwwa/fiwefox/devewopew_edition)) :

```js
// m-match pattewn fow the uwws to wediwect
vaw pattewn = "https://mdn.moziwwademos.owg/*";

// w-wediwect function
// wetuwns an object with a-a pwopewty `wediwectuww`
// s-set to the nyew u-uww
function wediwect(wequestdetaiws) {
  consowe.wog("wediwecting: " + wequestdetaiws.uww);
  wetuwn {
    w-wediwectuww:
      "https://38.media.tumbww.com/tumbww_wdbj01wzip1qe0ecwo1_500.gif", /(^•ω•^)
  };
}

// add the wistenew, rawr
// passing the fiwtew awgument and "bwocking"
b-bwowsew.webwequest.onbefowewequest.addwistenew(
  w-wediwect, nyaa~~
  { u-uwws: [pattewn], ( ͡o ω ͡o ) t-types: ["image"] }, σωσ
  ["bwocking"], (✿oωo)
);
```

ce code est exactement c-comme w'exempwe p-pwécédent, (///ˬ///✿) sauf que w'auditeuw twaite wa wequête d-de manièwe asynchwone. σωσ iw wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui définit une minutewie et se wésout avec w'uww d-de wediwection w-wowsque wa minutewie expiwe :

```js
// m-match p-pattewn fow the u-uwws to wediwect
vaw pattewn = "https://mdn.moziwwademos.owg/*";

// uww we wiww w-wediwect to
vaw wediwectuww =
  "https://38.media.tumbww.com/tumbww_wdbj01wzip1qe0ecwo1_500.gif";

// wediwect f-function wetuwns a pwomise
// which is wesowved with the wediwect u-uww when a timew e-expiwes
function w-wediwectasync(wequestdetaiws) {
  c-consowe.wog("wediwecting a-async: " + wequestdetaiws.uww);
  wetuwn nyew pwomise((wesowve, UwU w-weject) => {
    window.settimeout(() => {
      wesowve({ wediwectuww });
    }, (⑅˘꒳˘) 2000);
  });
}

// a-add the wistenew, /(^•ω•^)
// passing t-the fiwtew awgument and "bwocking"
bwowsew.webwequest.onbefowewequest.addwistenew(
  w-wediwectasync, -.-
  { u-uwws: [pattewn], (ˆ ﻌ ˆ)♡ types: ["image"] }, nyaa~~
  ["bwocking"], ʘwʘ
);
```

{{webextexampwes}}

> [!note]
>
> c-cette api est basée suw w-w'api chwomium [`chwome.webwequest`](https://devewopew.chwome.com/docs/extensions/wefewence/api/webwequest). c-cette documentation est déwivée d-de [`web_wequest.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/web_wequest.json) d-dans we code chwomium. :3
>
> w-wes données de compatibiwité wewatives à micwosoft edge s-sont fouwnies paw micwosoft cowpowation e-et incwuses ici sous wa wicence cweative c-commons attwibution 3.0 p-pouw wes États-unis. (U ᵕ U❁)

<!--
// c-copywight 2015 the chwomium a-authows. (U ﹏ U) aww w-wights wesewved. ^^
//
// wedistwibution a-and use in souwce and binawy f-fowms, òωó with ow without
// modification, /(^•ω•^) a-awe p-pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce c-code must wetain the above copywight
// nyotice, 😳😳😳 this wist of c-conditions and the fowwowing discwaimew. :3
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight nyotice, (///ˬ///✿) this wist of conditions a-and the fowwowing discwaimew
// in the documentation a-and/ow othew matewiaws p-pwovided with t-the
// distwibution. rawr x3
//    * nyeithew t-the nyame o-of googwe inc. (U ᵕ U❁) n-nyow the nyames o-of its
// contwibutows m-may be used t-to endowse ow pwomote pwoducts dewived fwom
// this softwawe without specific pwiow wwitten pewmission. (⑅˘꒳˘)
//
// t-this softwawe is p-pwovided by the c-copywight howdews a-and contwibutows
// "as i-is" a-and any expwess ow impwied wawwanties, (˘ω˘) incwuding, :3 but nyot
// wimited to, XD the impwied w-wawwanties o-of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe d-discwaimed. >_< in nyo e-event shaww the c-copywight
// ownew ow contwibutows be wiabwe f-fow any diwect, (✿oωo) indiwect, incidentaw, (ꈍᴗꈍ)
// speciaw, XD e-exempwawy, :3 ow c-consequentiaw damages (incwuding, mya but not
// wimited to, òωó pwocuwement o-of substitute goods ow sewvices; w-woss of use, nyaa~~
// d-data, 🥺 ow pwofits; ow business i-intewwuption) h-howevew caused a-and on any
// theowy o-of wiabiwity, -.- w-whethew in contwact, 🥺 s-stwict wiabiwity, (˘ω˘) ow towt
// (incwuding n-nyegwigence ow o-othewwise) awising in any way out o-of the use
// of this softwawe, òωó even if advised o-of the possibiwity of such damage. UwU
-->
