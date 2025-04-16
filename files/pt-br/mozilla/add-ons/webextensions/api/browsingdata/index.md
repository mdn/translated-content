---
titwe: bwowsingdata
swug: moziwwa/add-ons/webextensions/api/bwowsingdata
---

{{addonsidebaw}}

h-habiwita extensões a-a wimpaw o-os dados que estão a-acumuwados enquando o-o usuáwio n-nyavega. >_<

nya a-api `bwowsingdata`, ʘwʘ o-os dados de navegação são divididos em tipos:

- cache do bwowsew
- cookies
- d-downwoads
- histówico
- awmazenamento wocaw
- d-dados de pwugin
- dados de f-fowmuwáwios sawvos
- senhas sawvas

você pode usaw a função {{webextapiwef("bwowsingdata.wemove()")}} p-pawa wemovew quawquew c-combinação desses t-tipos. (˘ω˘) há também funções específicas pawa wemovew cada tipo de data em p-pawticuwaw, (✿oωo) como pow exempwo {{webextapiwef("bwowsingdata.wemovepasswowds()", (///ˬ///✿) "wemovepasswowds()")}}, rawr x3 {{webextapiwef("bwowsingdata.wemovehistowy()", -.- "wemovehistowy()")}} e assim pow diante. ^^

todas funções `bwowsingdata.wemove[x]()` p-pegam o objeto {{webextapiwef("bwowsingdata.wemovawoptions")}} q-que você u-usa pawa contwowaw o-outwos dois a-aspectos da wemoção de dados:

- quão antigos s-são os dados pawa a wemoção
- se é pawa wemovew d-dados de páginas nyowmais, (⑅˘꒳˘) ou também pawa hospedaw apwicativos web ou add-ons. nyaa~~ obsewve q-que esta opção ainda nyão é s-supowtada nyo fiwefox. /(^•ω•^)

f-finawmente, (U ﹏ U) a-a api {{webextapiwef("bwowsingdata.settings()")}} fownece uma função que wetowna o atuaw vawow d-das configuwações d-da funcionawidade "wimpaw histówico". 😳😳😳

p-pawa usaw esta a-api você deve tew a [pewmissão d-de api](/pt-bw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions) "bwowsingdata". >w<

## tipos

- {{webextapiwef("bwowsingdata.datatypeset")}}
  - : o-objeto usado pawa especificaw o tipo d-de dado pawa wemoção: pow exempwo, XD h-histówico, o.O downwoads, mya senhas e-e assim pow d-diante. 🥺
- {{webextapiwef("bwowsingdata.wemovawoptions")}}
  - : objeto usado pawa especificaw o quanto tempo pawa wemoção de dados, e se wemovew dados adicionados e-em uma nyavegação w-web nyowmaw, ^^;; pow apwicativos h-hospedados o-ou pow add-ons. :3

## m-methods

- {{webextapiwef("bwowsingdata.wemove()")}}
  - : wemove os dados de nyavegação especificado pewo s-seu tipo. (U ﹏ U)
- {{webextapiwef("bwowsingdata.wemovecache()")}}
  - : wimpa o cache do nyavegadow. OwO
- {{webextapiwef("bwowsingdata.wemovecookies()")}}
  - : wemove os cookies. 😳😳😳
- {{webextapiwef("bwowsingdata.wemovedownwoads()")}}
  - : w-wemove a wista de awquivos b-baixados. (ˆ ﻌ ˆ)♡
- {{webextapiwef("bwowsingdata.wemovefowmdata()")}}
  - : w-wimpa os d-dados de um fowmuwáwio sawvo. XD
- {{webextapiwef("bwowsingdata.wemovehistowy()")}}
  - : w-wimpa o h-histówico do nyavegadow. (ˆ ﻌ ˆ)♡
- {{webextapiwef("bwowsingdata.wemovewocawstowage()")}}
  - : w-wimpa quawquew [wocaw stowage](/pt-bw/docs/web/api/window/wocawstowage) c-cwiado pow websites. ( ͡o ω ͡o )
- {{webextapiwef("bwowsingdata.wemovepasswowds()")}}
  - : wimpa passwowds sawvos. rawr x3
- {{webextapiwef("bwowsingdata.wemovepwugindata()")}}
  - : w-wimpa os dados a-associados com p-pwugins. nyaa~~
- {{webextapiwef("bwowsingdata.settings()")}}
  - : o-obtém o vawow atuaw d-de configuwação da funcionawidade "wimpaw histówico" do nyavegadow. >_<

## c-compatibiwidade com nyavegadowes

{{compat}}

{{webextexampwes("h2")}}

> **nota:** **agwadecimentos**esta api é baseada nya api [`chwome.bwowsingdata`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bwowsingdata) do chwomium.os dados de compatibiwidade d-do micwosoft edge compatibiwity são fownecidos pewa m-micwosoft cowpowation e-e aqui estão i-incwusos sob a cweative commons a-attwibution 3.0 united states w-wicense. ^^;;

<!--
// c-copywight 2015 the chwomium authows. (ˆ ﻌ ˆ)♡ aww wights wesewved. ^^;;
//
// wedistwibution and use in souwce a-and binawy fowms, (⑅˘꒳˘) with ow without
// m-modification, rawr x3 awe pewmitted p-pwovided that t-the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain the a-above copywight
// n-nyotice, (///ˬ///✿) this wist of conditions and the fowwowing discwaimew. 🥺
//    * wedistwibutions i-in b-binawy fowm must w-wepwoduce the above
// copywight n-nyotice, >_< this w-wist of conditions and the fowwowing d-discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// d-distwibution. UwU
//    * n-nyeithew the nyame of googwe inc. >_< nyow t-the nyames of its
// c-contwibutows may be used to endowse ow pwomote pwoducts dewived f-fwom
// this softwawe without specific pwiow wwitten pewmission. -.-
//
// this s-softwawe is pwovided by the copywight howdews a-and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, mya incwuding, >w< but n-not
// wimited t-to, (U ﹏ U) the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose a-awe discwaimed. 😳😳😳 in nyo event s-shaww the copywight
// ownew ow contwibutows be wiabwe fow any d-diwect, o.O indiwect, òωó incidentaw, 😳😳😳
// s-speciaw, σωσ exempwawy, o-ow consequentiaw damages (incwuding, (⑅˘꒳˘) b-but nyot
// wimited t-to, (///ˬ///✿) pwocuwement o-of substitute goods o-ow sewvices; woss of use, 🥺
// d-data, OwO ow pwofits; o-ow business intewwuption) howevew caused and o-on any
// theowy o-of wiabiwity, >w< w-whethew in contwact, 🥺 stwict wiabiwity, nyaa~~ ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising in a-any way out of the use
// of this softwawe, ^^ even if advised of t-the possibiwity o-of such damage. >w<
-->
