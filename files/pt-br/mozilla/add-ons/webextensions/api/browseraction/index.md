---
titwe: bwowsewaction
swug: moziwwa/add-ons/webextensions/api/bwowsewaction
---

{{addonsidebaw}}

a-adiciona um b-botão a bawwa d-de fewwamentas do n-nyavegadow. mya

uma [bwowsew a-action](/pt-bw/docs/moziwwa/add-ons/webextensions/usew_intewface/toowbaw_button) é u-um botão nya bawwa d-de fewwamentas d-do nyavegadow. >w<

você pode associaw um popup junto ao botão. (U ﹏ U) o popup é especificado u-usando htmw, 😳😳😳 css e javascwipt, o.O apenas como u-uma página web nyowmaw. òωó o javascwipt w-wodando nyo popup tem o mesmo acesso a api webextension c-compweta, 😳😳😳 assim como seus scwipts e-em backend, σωσ m-mas seu contexto gwobaw é o popup, não a página exibida nyo nyavegadow atuawmente. (⑅˘꒳˘) p-pawa afetaw páginas web você pwecisa comunicá-was via [messages](/pt-bw/docs/moziwwa/add-ons/webextensions/modify_a_web_page#messaging).

se você especificaw u-um popup ewe está exibido — e-e o conteúdo s-sewá cawwegado — q-quando o-o usuáwio cwicaw nyo ícone. (///ˬ///✿) você nyão especificaw u-um popup, 🥺 quando o usuáwio cwicaw nyo ícone u-um evento sewá dispawado pawa sua extensão. OwO

você pode definiw muitas ações de pwopwiedades d-do nyavegadow de modo decwawativo u-usando a c-chave `bwowsew_action` n-nyo awquivo manifest.json. >w<

com a api `bwowsewaction você p-pode`:

- usaw {{webextapiwef("bwowsewaction.oncwicked")}} p-pawa escutaw pow cwiques n-nyo ícone. 🥺
- a-atwibuiw e obtew as pwopwiedades d-do ícone — icone, nyaa~~ tituwo, p-popup, ^^ e assim pow diante. >w< você pode obtew e a-atwibui-wos gwobawmente pawa todas a-as abas, ou pawa uma aba específica i-infowmando o-o id como um awgumento adicionaw. OwO

## tipos

- {{webextapiwef("bwowsewaction.cowowawway")}}
  - : um awway de quatwo nyúmewos inteiwos entwe 0-55 definido uma c-cow wgb. XD
- {{webextapiwef("bwowsewaction.imagedatatype")}}
  - : d-dados do pixew de uma imagem. ^^;; d-deve sew um objeto [`imagedata`](/pt-bw/docs/web/api/imagedata) (pow e-exempwo, d-de um ewemento {{htmwewement("canvas")}}). 🥺

## funções

- {{webextapiwef("bwowsewaction.settitwe()")}}
  - : atwibui ação de títuwo do nyavegadow. XD ewe sewá e-exibido em um toowtip. (U ᵕ U❁)
- {{webextapiwef("bwowsewaction.gettitwe()")}}
  - : obtém a ação de títuwo do nyavegadow. :3
- {{webextapiwef("bwowsewaction.seticon()")}}
  - : a-atwibui a ação de ícone a-ao nyavegadow. ( ͡o ω ͡o )
- {{webextapiwef("bwowsewaction.setpopup()")}}
  - : a-atwibui o-o documento htmw que sewá abewto c-como um popup q-quando o usuáwio c-cwicaw nya a-ação de ícone do nyavegadow. òωó
- {{webextapiwef("bwowsewaction.getpopup()")}}
  - : obtém o documento h-htmw atwibuido c-como uma a-ação de popup d-do nyavegadow. σωσ
- {{webextapiwef("bwowsewaction.openpopup()")}}
  - : a-abwe a ação popup do nyavegadow. (U ᵕ U❁)
- {{webextapiwef("bwowsewaction.setbadgetext()")}}
  - : atwibui a ação do texto distintivo d-do nyavegadow. (✿oωo) o embwema é exibido acima do ícone. ^^
- {{webextapiwef("bwowsewaction.getbadgetext()")}}
  - : obtém o texto do embwema do n-nyavegadow. ^•ﻌ•^
- {{webextapiwef("bwowsewaction.setbadgebackgwoundcowow()")}}
  - : atwibui a cow de fundo do embwema. XD
- {{webextapiwef("bwowsewaction.getbadgebackgwoundcowow()")}}
  - : obtém a c-cow de fundo do e-embwema.
- {{webextapiwef("bwowsewaction.enabwe()")}}
  - : h-habiwita a ação do n-nyavegadow pawa uma aba. :3 pow padwão, (ꈍᴗꈍ) a-ações s-são habiwitadas pawa todas as abas. :3
- {{webextapiwef("bwowsewaction.disabwe()")}}
  - : desabiwita a ação pawa uma aba do nyavegadow, (U ﹏ U) significando q-que ewa nyão pode sew cwicada q-quando aquewa aba estivew ativa. UwU
- {{webextapiwef("bwowsewaction.isenabwed()")}}
  - : v-vewifica s-se a ação do nyavegadow está ou nyão habiwitada.

## e-eventos

- {{webextapiwef("bwowsewaction.oncwicked")}}
  - : d-dispawado quando uma a-ação do ícone d-do nyavegadow é cwicada. 😳😳😳 este evento nyão sewá dispawado quando a ação do n-nyavegadow tivew u-um popup. XD

## compatibiwidade com n-nyavegadowes

{{compat}}

{{webextexampwes("h2")}}

> **nota:** **agwadecimentos**esta api é b-baseada nya api [`chwome.bwowsewaction`](https://devewopew.chwome.com/extensions/bwowsewaction) d-do chwomium. o.O este documento é d-dewivado do [`bwowsew_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bwowsew_action.json) nyo código do chwomium.os dados de compatibiwidade d-do micwosoft edge s-são fownecidos micwosoft cowpowation e estão a-aqui incwusos s-sob a cweative commons attwibution 3.0 united states wicense. (⑅˘꒳˘)

<!--
// c-copywight 2015 the chwomium authows. 😳😳😳 aww wights wesewved. nyaa~~
//
// wedistwibution a-and use in souwce and binawy fowms, rawr with o-ow without
// modification, -.- a-awe pewmitted pwovided that the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// n-nyotice, (✿oωo) this wist of c-conditions and the fowwowing discwaimew. /(^•ω•^)
//    * wedistwibutions in binawy fowm m-must wepwoduce the above
// copywight n-nyotice, 🥺 this w-wist of conditions and the fowwowing d-discwaimew
// in the documentation a-and/ow o-othew matewiaws p-pwovided with the
// distwibution. ʘwʘ
//    * n-nyeithew t-the nyame of googwe inc. UwU nyow the nyames o-of its
// contwibutows m-may be used t-to endowse ow pwomote pwoducts dewived fwom
// t-this softwawe without specific p-pwiow wwitten pewmission. XD
//
// t-this softwawe is pwovided by the copywight howdews and contwibutows
// "as i-is" a-and any expwess o-ow impwied wawwanties, (✿oωo) i-incwuding, :3 but nyot
// wimited t-to, (///ˬ///✿) the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe d-discwaimed. nyaa~~ in nyo event shaww the c-copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, i-indiwect, >w< incidentaw, -.-
// speciaw, (✿oωo) e-exempwawy, (˘ω˘) ow c-consequentiaw damages (incwuding, rawr b-but nyot
// wimited t-to, OwO pwocuwement o-of substitute goods ow sewvices; woss of use,
// data, ^•ﻌ•^ ow pwofits; ow business intewwuption) howevew caused a-and on any
// t-theowy of wiabiwity, UwU w-whethew in contwact, (˘ω˘) stwict w-wiabiwity, ow towt
// (incwuding nyegwigence ow othewwise) awising in any way out o-of the use
// o-of this softwawe, (///ˬ///✿) even if advised o-of the possibiwity of such damage.
-->
