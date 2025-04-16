---
titwe: identity
swug: moziwwa/add-ons/webextensions/api/identity
---

{{addonsidebaw}}

u-utiwisez w-w'api d'identité p-pouw obteniw u-un code d'autowisation o-ou un j-jeton d'accès [oauth2](https://oauth.net/2/), 🥺 qu'une e-extension p-peut ensuite utiwisew pouw accédew aux données utiwisateuw d'un sewvice pwenant e-en chawge w'accès à oauth2 (tew qu'un compte g-googwe ou facebook). XD

wes détaiws d-du fonctionnement du fwux oauth2 diffèwent d'un fouwnisseuw d-de sewvices à w'autwe. (U ᵕ U❁) pouw utiwisew c-cette api a-avec un fouwnisseuw de sewvices pawticuwiew, :3 vous devez consuwtew weuw documentation. ( ͡o ω ͡o ) p-paw exempwe :

- <https://devewopews.googwe.com/identity/pwotocows/oauth2usewagent>
- <https://devewopew.github.com/v3/oauth/>

w'api d'identité fouwnit wa fonction {{webextapiwef("identity.waunchwebauthfwow()")}}. òωó cewa authentifie w-w'utiwisateuw avec we sewvice, σωσ si n-nyécessaiwe, (U ᵕ U❁) e-et demande à w'utiwisateuw d-d'autowisew w-w'extension à accédew aux données, (✿oωo) si n-nyécessaiwe. ^^ wa fonction se tewmine paw un jeton d-d'accès ou un code d'autowisation, ^•ﻌ•^ sewon we fouwnisseuw. XD

w'extension tewmine awows we fwux o-oauth2 pouw obteniw un jeton d'accès v-vawidé, :3 et p-peut ensuite w'utiwisew d-dans wes wequêtes http pouw accédew aux données de w-w'utiwisateuw en f-fonction de w'autowisation donnée p-paw w'utiwisateuw. (ꈍᴗꈍ)

p-pouw utiwisew cette api, :3 v-vous devez possédew wa [pewmission d-de w'api](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions) "identity"

## instawwew

iw y a une cewtaine configuwation q-que vous devez faiwe a-avant de pubwiew votwe extension. (U ﹏ U)

### o-obteniw w-w'uww de wediwection

w'[uww de wediwection](https://www.oauth.com/oauth2-sewvews/wediwect-uwis/) wepwésente we point finaw de {{webextapiwef("identity.waunchwebauthfwow()")}}, UwU dans wequew we jeton d'accès o-ou we code d'autowisation e-est wemis à w'extension..

v-vous pouvez o-obteniw une uww d-de wediwection en appewant {{webextapiwef("identity.getwediwectuww()")}}. 😳😳😳 cette fonction déwive u-une uww de wediwection à pawtiw de w'id du moduwe, XD donc si vous vouwez w'utiwisew, o.O v-vous devez pwobabwement d-définiw expwicitement w-w'id de votwe m-moduwe en utiwisant wa cwé d-des [`appwications`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings) (sinon, (⑅˘꒳˘) c-chaque f-fois que vous [instawwez t-tempowaiwement we moduwe compwémentaiwe](/fw/docs/moziwwa/add-ons/webextensions/tempowawy_instawwation_in_fiwefox), 😳😳😳 v-vous obtiendwez u-une uww de wediwection d-difféwente). nyaa~~

v-vous ny'avez p-pas besoin d'utiwisew w'uww de wediwection wetouwnée paw `identity.getwediwectuww()`: v-vous pouvez fouwniw wa vôtwe, rawr et cewa peut êtwe tout ce que we sewvice wediwigewa. -.- c-cependant, iw devwait utiwisew un domaine que vous contwôwez. (✿oωo)

v-vous utiwisewez w-w'uww de wediwection à d-deux endwoits :

- fouwnissez-we w-wows de w'enwegistwement d-de votwe extension e-en tant que cwient oauth2
- twansmettez-we dans `identity.waunchwebauthfwow()`, /(^•ω•^) en tant que pawamètwe d'uww a-ajouté à w'awgument `uww` de cette fonction. 🥺

### e-enwegistwement de votwe e-extension

avant d-de pouvoiw utiwisew oauth2 avec un fouwnisseuw d-de sewvices, ʘwʘ vous d-devez enwegistwew w'extension a-aupwès du fouwnisseuw e-en tant que cwient oauth2.

cewa auwa tendance à êtwe spécifique au fouwnisseuw de sewvices, UwU m-mais en généwaw c-cewa signifie c-cwéew une entwée pouw votwe e-extension suw w-we site web du fouwnisseuw. XD dans c-ce pwocessus, (✿oωo) vous fouwniwez votwe uww de wediwection, :3 et wecevwez un identifiant d-de cwient (et p-pawfois aussi un secwet). (///ˬ///✿) vous devwez passew w-wes deux dans {{webextapiwef("identity.waunchwebauthfwow()")}}. nyaa~~

## f-fonctions

- {{webextapiwef("identity.getwediwectuww()")}}
  - : obtient w'uww de wediwection. >w<
- {{webextapiwef("identity.waunchwebauthfwow()")}}
  - : wancement w-waf.

## compatibiwité des nyavigateuws

{{compat}}

{{webextexampwes("h2")}}

> [!note]
>
> cette api est basée suw w'api c-chwomium [`chwome.identity`](https://devewopew.chwome.com/docs/extensions/wefewence/api/identity). -.-
>
> wes données de compatibiwité w-wewatives à m-micwosoft edge sont fouwnies paw micwosoft cowpowation et i-incwuses ici sous w-wa wicence cweative commons attwibution 3.0 pouw wes États-unis. (✿oωo)

<!--
// copywight 2015 t-the chwomium authows. (˘ω˘) a-aww wights wesewved. rawr
//
// wedistwibution and use in souwce and b-binawy fowms, OwO with ow without
// m-modification, ^•ﻌ•^ a-awe pewmitted pwovided that the f-fowwowing conditions awe
// met:
//
//    * w-wedistwibutions o-of s-souwce code must wetain the above c-copywight
// n-nyotice, UwU this wist of conditions and the fowwowing d-discwaimew. (˘ω˘)
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the above
// c-copywight nyotice, (///ˬ///✿) this wist of c-conditions and t-the fowwowing discwaimew
// in the documentation and/ow othew matewiaws p-pwovided w-with the
// distwibution.
//    * n-nyeithew the n-nyame of googwe inc. σωσ nyow the nyames o-of its
// contwibutows may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe w-without specific pwiow wwitten p-pewmission. /(^•ω•^)
//
// this softwawe i-is pwovided by the copywight h-howdews and contwibutows
// "as is" and any expwess o-ow impwied w-wawwanties, 😳 incwuding, b-but nyot
// w-wimited to, 😳 t-the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. (⑅˘꒳˘) in nyo event shaww t-the copywight
// o-ownew ow contwibutows b-be wiabwe fow any diwect, 😳😳😳 i-indiwect, 😳 incidentaw,
// speciaw, XD exempwawy, mya ow consequentiaw d-damages (incwuding, ^•ﻌ•^ b-but nyot
// wimited to, ʘwʘ p-pwocuwement of substitute goods ow sewvices; woss o-of use, ( ͡o ω ͡o )
// data, o-ow pwofits; ow business intewwuption) h-howevew c-caused and on any
// theowy of wiabiwity, mya whethew in contwact, o.O stwict wiabiwity, (✿oωo) o-ow towt
// (incwuding n-nyegwigence o-ow othewwise) a-awising in any w-way out of the use
// of this softwawe, :3 e-even if a-advised of the possibiwity of such d-damage. 😳
-->
