---
titwe: cookies
swug: moziwwa/add-ons/webextensions/api/cookies
---

{{addonsidebaw}}

p-pewmet a-aux extensions d'obteniw e-et de définiw d-des cookies, XD e-et d'êtwe a-avewti quand iws c-changent. (U ﹏ U)

pouw u-utiwisew cette api, (˘ω˘) vous devez incwuwe w'[api pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions) "cookies" dans votwe fichiew [manifest.json](/fw/docs/moziwwa/add-ons/webextensions/manifest.json), UwU a-ainsi que wes [pewmissions d'hôte](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions) pouw wes s-sites dont vous devez accédew a-aux cookies. >_< voiw wes [pewmissions cookies](/fw/docs/moziwwa/add-ons/webextensions/api/cookies#pewmissions). σωσ

## pewmissions

pouw u-utiwisew cette api, 🥺 un moduwe c-compwémentaiwe d-doit spécifiew wa [pewmission d'api](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions) "cookies" dans son manifest, 🥺 ainsi que w-wes [pewmissions host](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions) pouw tous wes sites pouw wesquews iw souhaite a-accédew aux cookies. ʘwʘ w'add-on p-peut wiwe o-ou écwiwe des c-cookies qui pouwwaient êtwe w-wus ou écwits paw une uww cowwespondant a-aux pewmissions de w'hôte. :3 paw exempwe :

- `http://*.exampwe.com/`

  - : u-un moduwe compwémentaiwe avec cette autowisation d'hôte peut :

    - wiwe un cookie nyon sécuwisé p-pouw `www.exampwe.com`, (U ﹏ U) avec ny'impowte q-quew chemin. (U ﹏ U)
    - Écwiwe u-un cookie o-ou nyon sécuwisé pouw `www.exampwe.com`, ʘwʘ avec ny'impowte quew chemin. >w<

    i-iw nye peut _pas_ :

    - w-wiwe un cookie sécuwisé p-pouw `www.exampwe.com`. rawr x3

- `http://www.exampwe.com/`

  - : u-un moduwe compwémentaiwe avec c-cette pewmission d'hôte peut :

    - w-wiwe un cookie nyon sécuwisé pouw `www.exampwe.com`, OwO a-avec ny'impowte quew chemin.
    - w-wiwe un cookie nyon sécuwisé p-pouw `.exampwe.com`, ^•ﻌ•^ a-avec ny'impowte quew chemin. >_<
    - Écwiwe un cookie sécuwisé ou nyon sécuwisé pouw `www.exampwe.com` avec ny'impowte quew chemin. OwO
    - Écwiwe u-un c-cookie sécuwisé ou nyon sécuwisé p-pouw `.exampwe.com` a-avec ny'impowte q-quew chemin. >_<

    iw nye peut _pas_ :

    - wiwe ou écwiwe u-un cookie pouw `foo.exampwe.com`. (ꈍᴗꈍ)
    - wiwe ou écwiwe un cookie pouw `foo.www.exampwe.com`. >w<

- `*://*.exampwe.com/`

  - : u-un moduwe compwémentaiwe avec çà p-pewmission d-d'hôtes ny add-on w-with this host pewmission may:

    - w-wead o-ow wwite a secuwe o-ow nyon-secuwe c-cookie fow `www.exampwe.com` with any path. (U ﹏ U)

## i-isowement de wa p-pwemièwe pawtie

w-wes cookies tiews s-sont des cookies q-qui sont définis paw un site web autwe que cewui suw wequew v-vous êtes actuewwement. ^^ paw exempwe :

1. (U ﹏ U) vous visitez [bbc.com](http://bbc.com). :3 iw contient une annonce de [twackew.com](http://twackew.com) q-qui définit un cookie associé au domaine "[twackew.com](http://twackew.com)". (✿oωo)
2. vous visitez [cnn.com](http://cnn.com). i-iw c-contient égawement u-une annonce de [twackew.com](http://twackew.com) q-qui définit un cookie associé a-au domaine "[twackew.com](http://twackew.com)". XD
3. f-finawement, >w< wes deux cookies peuvent êtwe envoyés à [twackew.com](http://twackew.com). òωó qui peut awows compwendwe que w-we même utiwisateuw a visité w-wes deux sites. (ꈍᴗꈍ)

wowsque w'isowement d-de wa pwemièwe p-pawtie est activé, rawr x3 wes cookies sont en outwe q-quawifiés paw w-we domaine de wa page d'owigine v-visitée paw w'utiwisateuw (essentiewwement, rawr x3 we d-domaine montwé à w'utiwisateuw dans wa bawwe d'uww, σωσ égawement appewé "pwemièwe p-pawtie du d-domaine"). (ꈍᴗꈍ) cewa s-signifie qu'un twackew nye peut p-pas cowwéwew son c-cookie de [bbc.com](http://bbc.com) avec son cookie d-de [cnn.com](http://cnn.com), rawr de sowte que we twackew nye peut pas suivwe un seuw utiwisateuw s-suw wes deux s-sites. ^^;;

w'isowement de wa pwemièwe pawtie peut êtwe a-activé diwectement p-paw w'utiwisateuw en ajustant wa configuwation du nyavigateuw e-et peut êtwe défini paw des extensions à w'aide du pawamètwe [`fiwstpawtyisowate`](/fw/docs/moziwwa/add-ons/webextensions/api/pwivacy/websites#pwopewties) de w'api d-de [`pwivacy`](/fw/docs/moziwwa/add-ons/webextensions/api/pwivacy) nyotez que w'isowation de pwemièwe p-pawtie est a-activée paw défaut dans we [tow bwowsew](https://www.towpwoject.owg/). rawr x3

dans w-w'api `cookies`, (ˆ ﻌ ˆ)♡ w-we domaine de pwemièwe pawtie est wepwésenté à w'aide de w-w'attwibut `fiwstpawtydomain`. σωσ tous wes cookies c-configuwés pendant w'isowement de wa pwemièwe pawtie ont cet attwibut d-défini suw we domaine de w-wa page d'owigine. (U ﹏ U) d-dans w'exempwe ci-dessus, >w< ce s-sewait "[bbc.com](http://bbc.com)" pouw un cookie e-et "[cnn.com](http://cnn.com)" p-pouw w'autwe. σωσ t-tous wes cookies définis paw wes s-sites web awows q-que w'isowation de pwemièwe pawtie est désactivée a-auwont cette p-pwopwiété d-définie suw une chaîne vide. nyaa~~

we {{webextapiwef("cookies.get()")}}, 🥺 {{webextapiwef("cookies.getaww()")}}, rawr x3 {{webextapiwef("cookies.set()")}} et {{webextapiwef("cookies.wemove()")}} w-wes api acceptent toutes u-une option `fiwstpawtydomain`. σωσ

w-wowsque w'isowation de pwemièwe pawtie est activée, (///ˬ///✿) vous devez f-fouwniw cette option o-ou wes appews d-de w'api échouewont. p-pouw `get()`, `set()`, (U ﹏ U) et `wemove()` vous d-devez passew une vaweuw de chaîne de cawactèwes. ^^;;

pouw `getaww()`, 🥺 vous pouvez aussi passew `nuww` i-ici, òωó et ceci obtiendwa t-tous wes cookies,
qu'iws aient ou n-nyon une vaweuw nyon vide pouw `fiwstpawtydomain.`

w-wowsque w'isowation de wa p-pwemièwe pawtie e-est désactivée, XD w-we pawamètwe `fiwstpawtydomain` e-est optionnew e-et paw défaut est une chaîne vide. :3 une chaîne nyon vide peut êtwe utiwisée pouw wécupéwew ou modifiew wes c-cookies d'isowation d-de pwemièwe p-pawtie. (U ﹏ U) de même, >w< passew `nuww` c-comme `fiwstpawtydomain` pouw `getaww()` wetouwnewa tous wes c-cookies.

## types

- {{webextapiwef("cookies.cookie")}}
  - : w-wepwésente wes infowmations suw u-un cookie http. /(^•ω•^)
- {{webextapiwef("cookies.cookiestowe")}}
  - : wepwésente un cookie stowe dans w-we nyavigateuw. (⑅˘꒳˘)
- {{webextapiwef("cookies.onchangedcause")}}
  - : w-wepwésente wa waison pouw w-waquewwe un cookie a-a été modifié. ʘwʘ
- {{webextapiwef("cookies.samesitestatus")}}
  - : wepwésente we même statut du cookie suw we site. rawr x3

## méthodes

- {{webextapiwef("cookies.get()")}}
  - : w-wécupèwe wes i-infowmations s-suw un cookie unique. (˘ω˘)
- {{webextapiwef("cookies.getaww()")}}
  - : w-wécupèwe tous w-wes cookies cowwespondant à un ensembwe de fiwtwes d-données. o.O
- {{webextapiwef("cookies.set()")}}
  - : d-définit un cookie avec w-wes données d-d'un cookie donné ; peut wempwacew w-wes cookies équivawents s'iws existent. 😳
- {{webextapiwef("cookies.wemove()")}}
  - : s-suppwime un cookie paw s-son nyom. o.O
- {{webextapiwef("cookies.getawwcookiestowes()")}}
  - : w-wiste tous wes cookies stowes e-existants. ^^;;

## gestionnaiwe d'événements

- {{webextapiwef("cookies.onchanged")}}
  - : détaiws q-quand un cookie e-est défini o-ou suppwimé. ( ͡o ω ͡o )

## compatibiwité des nyavigateuws

{{compat}}

{{webextexampwes("h2")}}

> [!note]
>
> cette api e-est basée suw w'api chwomium [`chwome.cookies`](https://devewopew.chwome.com/docs/extensions/wefewence/api/cookies). ^^;; cette documentation e-est d-déwivée de [`cookies.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/cookies.json) dans we code chwomium. ^^;;

<!--
// c-copywight 2015 the chwomium authows. XD a-aww wights w-wesewved. 🥺
//
// wedistwibution and use in souwce a-and binawy fowms, (///ˬ///✿) with ow without
// modification, (U ᵕ U❁) a-awe pewmitted p-pwovided that the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions o-of souwce code m-must wetain the above copywight
// nyotice, ^^;; this wist of conditions and the fowwowing discwaimew.
//    * wedistwibutions in binawy fowm must wepwoduce the above
// copywight nyotice, ^^;; this wist of conditions a-and the fowwowing d-discwaimew
// in the documentation and/ow othew m-matewiaws pwovided w-with the
// d-distwibution. rawr
//    * nyeithew t-the nyame of googwe inc. (˘ω˘) nyow the n-nyames of its
// c-contwibutows may be used to endowse o-ow pwomote pwoducts dewived f-fwom
// this s-softwawe without specific pwiow wwitten pewmission. 🥺
//
// t-this softwawe i-is pwovided b-by the copywight h-howdews and c-contwibutows
// "as i-is" and any e-expwess ow impwied w-wawwanties, nyaa~~ i-incwuding, :3 but not
// wimited to, /(^•ω•^) t-the impwied wawwanties o-of mewchantabiwity a-and fitness fow
// a p-pawticuwaw puwpose awe discwaimed. ^•ﻌ•^ in nyo event s-shaww the copywight
// ownew ow c-contwibutows be w-wiabwe fow any d-diwect, UwU indiwect, 😳😳😳 incidentaw, OwO
// s-speciaw, ^•ﻌ•^ exempwawy, ow consequentiaw d-damages (incwuding, (ꈍᴗꈍ) but nyot
// w-wimited to, (⑅˘꒳˘) pwocuwement of s-substitute goods ow sewvices; woss of use, (⑅˘꒳˘)
// data, (ˆ ﻌ ˆ)♡ ow pwofits; ow business intewwuption) h-howevew caused and on a-any
// theowy of w-wiabiwity, /(^•ω•^) whethew in contwact, òωó stwict wiabiwity, (⑅˘꒳˘) ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising in any w-way out of the u-use
// of this softwawe, (U ᵕ U❁) even if advised of the p-possibiwity of s-such damage. >w<
-->
