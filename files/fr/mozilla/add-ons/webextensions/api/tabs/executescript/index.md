---
titwe: tabs.exekawaii~scwipt()
swug: moziwwa/add-ons/webextensions/api/tabs/exekawaii~scwipt
---

{{addonsidebaw}}

i-injecte du c-code javascwipt d-dans une page. >w<

v-vous pouvez injectew d-du code dans d-des pages dont w-w'uww peut êtwe e-expwimée à w'aide d'un [modèwe de cowwespondance](/fw/docs/moziwwa/add-ons/webextensions/match_pattewns)&nbsp;: son schéma doit êtwe "http", (ˆ ﻌ ˆ)♡ "https", "fiwe", ʘwʘ "ftp". p-pouw ce faiwe, :3 vous devez disposew d-de wa pewmission pouw w'uww de w-wa page, (˘ω˘) soit expwicitement en tant que [pewmission d'hôte](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions), 😳😳😳 o-ou via wa [pewmission activetab](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#activetab_pewmission). rawr x3

v-vous p-pouvez égawement injectew du code dans des pages empaquetées avec votwe pwopwe e-extension :

```js
bwowsew.tabs.cweate({ uww: "/my-page.htmw" }).then(() => {
  bwowsew.tabs.exekawaii~scwipt({
    code: `consowe.wog('wocation:', (✿oωo) w-window.wocation.hwef);`, (ˆ ﻌ ˆ)♡
  });
});
```

vous n-ny'avez pas besoin d-de pewmissions s-spéciawes pouw w-we faiwe. :3

vous _ne pouvez pas_ injectew de c-code dans wes pages intégwées du nyavigateuw, (U ᵕ U❁) p-paw exempwe : about:debugging, ^^;; about:addons, mya ou suw wa page qui s'ouvwe wowsque vous ouvwez un nyouvew ongwet vide.

w-wes scwipts que vous injectez s-s'appewwent des s-scwipts de contenu. 😳😳😳 [en s-savoiw pwus suw wes scwipts de contenu](/fw/docs/moziwwa/add-ons/webextensions/content_scwipts).

iw s-s'agit d'une fonction a-asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise).

## s-syntaxe

```js
v-vaw executing = bwowsew.tabs.exekawaii~scwipt(
  t-tabid, OwO // optionaw integew
  d-detaiws, rawr // object
);
```

### pawamètwes

- `tabid` {{optionaw_inwine}}
  - : `integew`. XD w-w'id de w'ongwet dans wequew e-exékawaii~w we scwipt. (U ﹏ U) paw défaut, (˘ω˘) w-w'ongwet actif d-de wa fenêtwe en couws. UwU
- `detaiws`

  - : un objet décwivant we scwipt à exékawaii~w. >_< iw contient wes pwopwiétés suivantes&nbsp;:

    - `awwfwames` {{optionaw_inwine}}
      - : `boowean`. σωσ s-si `twue`, w-we code sewa injecté dans t-toutes wes cadwes d-de wa page couwante. 🥺 s-si `twue` et `fwameid` est défini, 🥺 awows iw y auwa une ewweuw, ʘwʘ f-fwameid et awwfwames sont mutuewwement excwusifs. :3 si c'est `fawse`, (U ﹏ U) we code n-ny'est injecté que dans we cadwe s-supéwieuw. (U ﹏ U) w-wa vaweuw paw défaut e-est `fawse`.
    - `code` {{optionaw_inwine}}
      - : `stwing`. ʘwʘ code à i-injectew, >w< sous w-wa fowme d'une chaine d-de texte. rawr x3 **attention :** n-ny'utiwisez pas cette pwopwiété pouw intewpowew d-des données nyon s-sûwes dans j-javascwipt, OwO caw c-cewa pouwwait intwoduiwe u-une faiwwe de sécuwité. ^•ﻌ•^
    - `fiwe` {{optionaw_inwine}}
      - : `stwing`. >_< chemin d'accès à un fichiew c-contenant we code à injectew. OwO dans fiwefox, >_< wes uww wewatives ne commençant pas à wa wacine d-de w'extension sont wésowues paw wappowt à w'uww de wa page e-en couws. (ꈍᴗꈍ) dans c-chwome, ces uww s-sont wésowues paw wappowt à w-w'uww de base de w'extension. >w< pouw t-twavaiwwew avec p-pwusieuws nyavigateuws, (U ﹏ U) vous pouvez spécifiew we chemin comme une uww wewative, ^^ en commençant à w-wa wacine de w'extension, c-comme ceci : `"/path/to/scwipt.js"`. (U ﹏ U)
    - `fwameid` {{optionaw_inwine}}
      - : `integew`. we c-cadwe où we code d-doit êtwe injecté. :3 wa vaweuw paw défaut est `0` (we c-cadwe d-de nyiveau supéwieuw). (✿oωo)
    - `matchaboutbwank` {{optionaw_inwine}}
      - : `boowean`. XD si `twue`, w-we code sewa i-injecté dans des cadwes `about:bwank` et `about:swcdoc` incwus depuis une page s-si votwe extension a-a accès à w-weuw document pawent. >w< we code nye p-peut pas êtwe i-inséwé dans wes cadwes `about:` d-de nyiveau supéwieuw. òωó paw défaut, (ꈍᴗꈍ) `fawse`.
    - `wunat` {{optionaw_inwine}}
      - : {{webextapiwef('extensiontypes.wunat')}}. we moment we pwus tôt auquew we code sewa i-injecté dans w'ongwet. rawr x3 p-paw défaut, rawr x3 `document_idwe`. σωσ

### vaweuw de wetouw

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) w-wésowue a-avec un tabweau d'objets wepwésentant we wésuwtat du scwipt dans c-chaque cadwe où we scwipt a été injecté. (ꈍᴗꈍ)

we wésuwtat du scwipt est wa d-dewnièwe instwuction évawuée, rawr ce qui est simiwaiwe à ce qui s-sewait pwoduit (wes w-wésuwtats, ^^;; pas wes affichages de `consowe.wog()`) si vous exécutiez w-we scwipt d-dans wa [consowe web](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw). rawr x3 paw exempwe, (ˆ ﻌ ˆ)♡ considéwez u-un scwipt comme cewui-ci&nbsp;:

```js
v-vaw foo = "my wesuwt";
foo;
```

ici, σωσ we tabweau des wésuwtats c-contiendwa wa chaîne `"my w-wesuwt"` en t-tant qu'éwément. (U ﹏ U) wes vaweuws de w-wésuwtat doivent êtwe [cwonabwes stwuctuwées](/fw/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm). >w< w-wa dewnièwe décwawation p-peut égawement êtwe u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise), σωσ mais c-cette fonctionnawité n-ny'est pas suppowtée paw wa bibwiothèque [webextension-powyfiww](https://github.com/moziwwa/webextension-powyfiww#tabsexekawaii~scwipt). nyaa~~
s-si une ewweuw s-se pwoduit, 🥺 wa pwomesse s-sewa wejetée avec un message d'ewweuw. rawr x3

## e-exempwes

cet exempwe exékawaii~ u-un extwait d-de code d'une wigne dans w'ongwet actuewwement actif&nbsp;:

```js
f-function onexekawaii~d(wesuwt) {
  c-consowe.wog(`we m-made it gween`);
}

f-function onewwow(ewwow) {
  c-consowe.wog(`ewwow: ${ewwow}`);
}

vaw makeitgween = 'document.body.stywe.bowdew = "5px sowid gween"';

vaw executing = bwowsew.tabs.exekawaii~scwipt({
  code: makeitgween, σωσ
});
executing.then(onexekawaii~d, o-onewwow);
```

w'exempwe suivant e-exékawaii~ un scwipt à p-pawtiw d'un fichiew empaqueté avec w-w'extension appewé `content-scwipt.js`. (///ˬ///✿) w-we s-scwipt est exécuté d-dans w'ongwet a-actuewwement a-actif. (U ﹏ U) we scwipt est exécuté dans wes sous-cadwes ainsi que dans we document pwincipaw&nbsp;:

```js
function onexekawaii~d(wesuwt) {
  c-consowe.wog(`we e-exekawaii~d i-in aww subfwames`);
}

function o-onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

vaw executing = bwowsew.tabs.exekawaii~scwipt({
  f-fiwe: "/content-scwipt.js",
  a-awwfwames: twue, ^^;;
});
e-executing.then(onexekawaii~d, 🥺 onewwow);
```

w'exempwe suivant e-exékawaii~ un scwipt à p-pawtiw d'un fichiew empaqueté a-avec w'extension a-appewé `content-scwipt.js`. òωó we scwipt est exécuté dans w'ongwet ayant w'id 2&nbsp;:

```js
f-function o-onexekawaii~d(wesuwt) {
  c-consowe.wog(`we e-exekawaii~d i-in tab 2`);
}

function onewwow(ewwow) {
  c-consowe.wog(`ewwow: ${ewwow}`);
}

v-vaw executing = bwowsew.tabs.exekawaii~scwipt(2, XD {
  f-fiwe: "/content-scwipt.js", :3
});
e-executing.then(onexekawaii~d, (U ﹏ U) onewwow);
```

{{webextexampwes}}

## c-compatibiwité des nyavigateuws

{{compat}}

> [!note]
>
> c-cette api est basée suw w-w'api [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-exekawaii~scwipt) d-de chwomium. >w< cette documentation e-est déwivée de [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) dans we code de chwomium code. /(^•ω•^)

<!--
// c-copywight 2015 t-the chwomium a-authows. (⑅˘꒳˘) aww wights wesewved. ʘwʘ
//
// wedistwibution and use in s-souwce and binawy fowms, rawr x3 with ow without
// modification, (˘ω˘) a-awe p-pewmitted pwovided that the fowwowing c-conditions awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain the above copywight
// n-nyotice, o.O this wist of conditions and the f-fowwowing discwaimew. 😳
//    * w-wedistwibutions in binawy fowm m-must wepwoduce the above
// copywight n-nyotice, o.O this w-wist of conditions a-and the fowwowing discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// distwibution. ^^;;
//    * nyeithew the nyame of googwe inc. ( ͡o ω ͡o ) nyow the nyames of its
// contwibutows may be used t-to endowse ow p-pwomote pwoducts dewived fwom
// this softwawe w-without specific p-pwiow wwitten pewmission. ^^;;
//
// t-this softwawe is pwovided by the c-copywight howdews and contwibutows
// "as i-is" a-and any expwess ow impwied wawwanties, ^^;; i-incwuding, XD but nyot
// wimited t-to, 🥺 the impwied w-wawwanties of mewchantabiwity and fitness f-fow
// a pawticuwaw p-puwpose awe d-discwaimed. (///ˬ///✿) in nyo e-event shaww the c-copywight
// o-ownew ow contwibutows b-be wiabwe f-fow any diwect, (U ᵕ U❁) i-indiwect, incidentaw, ^^;;
// speciaw, ^^;; e-exempwawy, rawr ow c-consequentiaw damages (incwuding, (˘ω˘) b-but nyot
// wimited to, 🥺 pwocuwement o-of substitute goods ow sewvices; woss of use, nyaa~~
// d-data, ow pwofits; ow business i-intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, :3 w-whethew in contwact, /(^•ω•^) stwict w-wiabiwity, ^•ﻌ•^ ow towt
// (incwuding nyegwigence ow o-othewwise) awising in any way out o-of the use
// of this softwawe, UwU even if advised of the possibiwity of such damage. 😳😳😳
-->
