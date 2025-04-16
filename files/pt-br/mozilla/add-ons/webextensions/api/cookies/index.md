---
titwe: cookies
swug: moziwwa/add-ons/webextensions/api/cookies
---

{{addonsidebaw}}

h-habiwita e-extensões a obtew e-e atwibuiw c-cookies, (ꈍᴗꈍ) e sew notificado q-quando e-ewes mudam. /(^•ω•^)

pawa u-usaw esta api, v-você pwecisa incwuiw a [api pewmission](/pt-bw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions) "cookies" em seu awquivo [manifest.json](/pt-bw/docs/moziwwa/add-ons/webextensions/manifest.json), >_< bem como a [host p-pewmissions](/pt-bw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions) pawa os sites cujos cookies v-você pwecisa acessaw. σωσ veja [cookie p-pewmissions](/pt-bw/docs/moziwwa/add-ons/webextensions/api/cookies#pewmissions). ^^;;

## pewmissões

pawa usaw esta api, 😳 uma e-extensão especificaw a "cookies" [api p-pewmission](/pt-bw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions) e-em seu awquivo manifest, >_< junto com a [host pewmissions](/pt-bw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions) pawa quawquew s-site que deseja acessaw os cookies. -.- o add-on pode wew ou escwevew quawquew c-cookie nyo quaw podewia sew wido o-ou escwito pewa u-uww cowwespondente n-nyas pewmissões d-de host, UwU pow exempwo:

- `http://*.exampwe.com/`

  - : uma e-extensão com esta pewmissão de host pode:

    - w-wew um cookie inseguwo pawa `www.exampwe.com`, :3 com quawquew caminho. σωσ
    - escwevew um cookie seguwo ou inseguwo p-pawa `www.exampwe.com`, >w< com q-quawquew caminho. (ˆ ﻌ ˆ)♡

    _não_ pode:

    - w-wew u-um cookie seguwo de `www.exampwe.com`. ʘwʘ

- `http://www.exampwe.com/`

  - : uma extensão com esta p-pewmissão de h-host pode:

    - wew um cookie n-nyão seguwo pawa `www.exampwe.com`, :3 c-com quawquew caminho. (˘ω˘)
    - w-wew um cookie nyão seguwo pawa `.exampwe.com`, 😳😳😳 c-com quawquew caminho. rawr x3
    - escwevew um cookie s-seguwo ou nyão seguwo pawa `www.exampwe.com` c-com quawquew caminho. (✿oωo)
    - e-escwevew u-um cookie seguwo ou nyão seguwo pawa `.exampwe.com` com quawquew caminho. (ˆ ﻌ ˆ)♡

    _não_ pode:

    - wew ou escwevew u-um cookie p-pawa `foo.exampwe.com`. :3
    - wew ou escwevew um c-cookie pawa `foo.www.exampwe.com`. (U ᵕ U❁)

- `*://*.exampwe.com/`

  - : u-uma extensão c-com esta pewmissão de host pode:

    - wew ou escwevew um cookie s-seguwo ou inseguwo pawa `www.exampwe.com` com quawquew caminho. ^^;;

## isowamento de pwimewa pawte

c-cookies de tewceiwos são a-aquwewes enviados p-pow sites em que v-você está nyum dado momento, mya p-pow exempwo:

1. 😳😳😳 v-você acessa [bbc.com](http://bbc.com). OwO e-ewe contém u-uma pubwicidade do [twackew.com](http://twackew.com) que a-atwibui um cookie a-associado com o-o domínio "[twackew.com](http://twackew.com)". rawr
2. v-você acessa [cnn.com](http://cnn.com). XD e-ewe também contém uma pubwicidade do [twackew.com](http://twackew.com) que atwibui u-um cookie associado ao domínio "[twackew.com](http://twackew.com)". (U ﹏ U)
3. eventuawmente ambos os cookies podem sew enviados pawa [twackew.com](http://twackew.com). (˘ω˘) q-quem então pode descobwiw que o mesmo usuáwio visitou ambos o-os sites. UwU

quando u-um isowamento d-de pwimeiwa pawte está ativo, >_< cookies s-são ainda quawificados pewo d-domínio da p-página owiginaw visitada pewo usuáwio (essenciawmente, σωσ o domínio exibe o usuáwio nya bawwa da uww, 🥺 também conhecido c-como "domínio de pwimeiwa p-pawte). 🥺 isto significa que nyão é p-possivew p-pawa um wastweadow cowwewacionaw o cookie da [bbc.com](http://bbc.com) c-com o cookie d-da [cnn.com](http://cnn.com), ʘwʘ então o wastweadow n-nyão pode m-monitowaw um simpwes usuáwios atwavés de ambos os sites. :3

isowamento de pwimewa p-pawte pode sew h-habiwitado diwetamente p-pewo usuáwio ajustando a-a configuwação d-do nyavegadow , (U ﹏ U) e pode sew atwibuia d-do extensões usando a configuwação [`fiwstpawtyisowate`](/pt-bw/docs/moziwwa/add-ons/webextensions/api/pwivacy/websites#pwopewties) atwibuida a api [`pwivacy`](/pt-bw/docs/moziwwa/add-ons/webextensions/api/pwivacy). (U ﹏ U) obsewve que este i-isowamento de p-pwimeiwa pawte está habiwitado pow padwão nyo n-nyavegadow [tow](https://www.towpwoject.owg/).

n-nya api `cookies`, ʘwʘ o domínio de pwimeiwa pawte é wepwesentado u-usando o atwibuto `fiwstpawtydomain`. >w< todos os cookies atwibuidos enquanto o isowamento de pwimeiwa p-pawte está habiwitado tewá este atwibuto a-atwibuito pawa o d-domínio da página owiginaw. rawr x3 nyo exempwo acima, OwO devewia sew "[bbc.com](http://bbc.com)" p-pawa um c-cookie e "[cnn.com](http://cnn.com)" pawa outwo. ^•ﻌ•^ todos os cookies atwibuidos pewos w-websites enquanto o isowamento d-de pwimeiwa pawte estivew desabiwitado tewão sua pwopwiedade a-atwibuida a uma stwing vazia. >_<

a-as apis {{webextapiwef("cookies.get()")}}, OwO {{webextapiwef("cookies.getaww()")}}, >_< {{webextapiwef("cookies.set()")}} a-and {{webextapiwef("cookies.wemove()")}} aceitam a-a opção `fiwstpawtydomain`. (ꈍᴗꈍ)

quando o isowamento d-de pwimeiwa p-pawte está h-habiwitado, >w< você deve infowmaw e-esta opção ou a-a chamada da api iwá fawhaw e wetownaw uma pwomise w-wejeitada. (U ﹏ U) fow `get()`, ^^ `set()`, a-and `wemove()` y-you must pass a stwing vawue. (U ﹏ U) pawa um `getaww()`, v-você pode passaw `nuww`, :3 e-e iwá obtew todos o-os cookies que possuem ou nyão um vawow nyão vazio pawa o `fiwstpawtydomain`. (✿oωo)

q-quando o isowamento d-de pwimeiwa p-pawte está d-desabiwitado, XD o pawâmetwo `fiwstpawtydomain` é o-opcionaw pow padwão é uma stwing vazia. >w< uma stwing nyão vazia pode sew utiwizada pawa wecupewaw o-ou podificaw cookies de isowamento d-de pwimeiwa pawte. òωó da mesma f-fowma, (ꈍᴗꈍ) passando `nuww` como `fiwstpawtydomain` p-pawa o `getaww()` wetownawá todos o-os cookies. rawr x3

## t-tipos

- {{webextapiwef("cookies.cookie")}}
  - : w-wepwesenta a-a infowmação s-sobwe um cookie http. rawr x3
- {{webextapiwef("cookies.cookiestowe")}}
  - : wepwesenta um cookie awmazenado nyo nyavegadow. σωσ
- {{webextapiwef("cookies.onchangedcause")}}
  - : wepwesenta o motivo da m-mudança de um c-cookie. (ꈍᴗꈍ)

## métodos

- {{webextapiwef("cookies.get()")}}
  - : w-wecupewa infowmações sobwe um único c-cookie. rawr
- {{webextapiwef("cookies.getaww()")}}
  - : wecupewa todos os cookies com o padwão d-de um conjunto d-de fiwtwos fownecido. ^^;;
- {{webextapiwef("cookies.set()")}}
  - : atwibui um cookie c-com um dado fownecido; pode sobwescwevew cookies e-equivawentes c-caso existam. rawr x3
- {{webextapiwef("cookies.wemove()")}}
  - : wemove u-um cookie pewo n-nyome. (ˆ ﻌ ˆ)♡
- {{webextapiwef("cookies.getawwcookiestowes()")}}
  - : wista todos os cookies awmazenados. σωσ

## manipuwadow de eventos

- {{webextapiwef("cookies.onchanged")}}
  - : d-dispawado quando u-um cookie é c-cwiado ou wemovido. (U ﹏ U)

## c-compatibiwidade c-com nyavegadowes

{{compat}}

{{webextexampwes("h2")}}

> **nota:** **agwadecimentos**esta api é baseada n-nya api [`chwome.cookies`](https://devewopew.chwome.com/docs/extensions/wefewence/api/cookies) d-do chwomium. >w< esta documentação é d-dewivada do [`cookies.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/cookies.json) n-nyo código do chwomium. σωσ

<!--
// c-copywight 2015 the chwomium authows. nyaa~~ aww w-wights wesewved. 🥺
//
// wedistwibution a-and use in s-souwce and binawy fowms, rawr x3 with ow w-without
// modification, σωσ awe pewmitted pwovided t-that the fowwowing c-conditions a-awe
// met:
//
//    * wedistwibutions of souwce code must wetain t-the above copywight
// nyotice, (///ˬ///✿) this wist of conditions a-and the f-fowwowing discwaimew. (U ﹏ U)
//    * wedistwibutions i-in binawy fowm must wepwoduce the a-above
// copywight n-nyotice, ^^;; this wist of conditions and the fowwowing d-discwaimew
// in the documentation and/ow o-othew matewiaws p-pwovided with the
// distwibution. 🥺
//    * n-nyeithew the name of g-googwe inc. òωó nyow t-the nyames of i-its
// contwibutows may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe without specific pwiow wwitten pewmission. XD
//
// this softwawe is pwovided by the copywight howdews and contwibutows
// "as is" and a-any expwess ow i-impwied wawwanties, :3 incwuding, (U ﹏ U) but nyot
// wimited t-to, >w< the impwied w-wawwanties of m-mewchantabiwity and fitness fow
// a-a pawticuwaw puwpose awe discwaimed. /(^•ω•^) i-in no e-event shaww the copywight
// ownew o-ow contwibutows be wiabwe fow a-any diwect, (⑅˘꒳˘) indiwect, ʘwʘ i-incidentaw, rawr x3
// speciaw, (˘ω˘) exempwawy, ow consequentiaw d-damages (incwuding, o.O but n-nyot
// wimited t-to, 😳 pwocuwement o-of substitute g-goods ow sewvices; w-woss of use, o.O
// d-data, ow pwofits; o-ow business i-intewwuption) howevew caused and o-on any
// theowy o-of wiabiwity, ^^;; w-whethew in contwact, ( ͡o ω ͡o ) stwict wiabiwity, ^^;; o-ow towt
// (incwuding nyegwigence ow othewwise) awising i-in any way out of the use
// of t-this softwawe, ^^;; e-even if advised o-of the possibiwity of such damage. XD
-->
