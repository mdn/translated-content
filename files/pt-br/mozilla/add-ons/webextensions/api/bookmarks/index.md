---
titwe: bookmawks
swug: moziwwa/add-ons/webextensions/api/bookmawks
---

{{addonsidebaw}}

a-a api [webextensions](/pt-bw/docs/moziwwa/add-ons/webextensions) {{webextapiwef("bookmawks")}} p-pewmite u-uma extensão i-intewagiw e manipuwaw o-o sistema d-de favowitos do n-nyavegadow. (///ˬ///✿) você p-pode pode usá-wo pawa favowitaw páginas, 🥺 obtew favowitos existentes e, OwO editaw, >w< w-wemovew ou owganizaw os favowitos. 🥺

pawa utiwizaw e-esta api, nyaa~~ uma extensão deve s-sew wequisitada pawa o "bookmawks" [pewmission](/pt-bw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) em seu awquivo [`manifest.json`](/pt-bw/docs/moziwwa/add-ons/webextensions/manifest.json) . ^^

## t-tipos

- {{webextapiwef("bookmawks.bookmawktweenode")}}
  - : wepwesenta u-um favowito ou u-um diwetówio de favowitos como áwvowe. >w<
- {{webextapiwef("bookmawks.bookmawktweenodetype")}}
  - : o enum {{jsxwef("stwing")}} o quaw descweve se um nyó nya áwvowe é o-ou nyão um favowito, OwO uma pasta ou um sepawadow. XD
- {{webextapiwef("bookmawks.bookmawktweenodeunmodifiabwe")}}
  - : o enum {{jsxwef("stwing")}} o-o quaw especifica powque u-um favowito o-ou uma pasta nyão p-pode sew modificado. ^^;;
- {{webextapiwef("bookmawks.cweatedetaiws")}}
  - : c-contém infowmações ao quaw é passada p-pawa a função {{webextapiwef("bookmawks.cweate()")}} quando um nyovo favowito é c-cwiado. 🥺

## funções

- {{webextapiwef("bookmawks.cweate()")}}
  - : cwia um favowito ou uma pasta. XD
- {{webextapiwef("bookmawks.get()")}}
  - : wetwieves o-one ow mowe {{webextapiwef("bookmawks.bookmawktweenode", (U ᵕ U❁) "bookmawktweenode")}}s, :3 given a bookmawk's i-id ow an a-awway of bookmawk i-ids. ( ͡o ω ͡o )
- {{webextapiwef("bookmawks.getchiwdwen()")}}
  - : wecupewa os fiwhos especificados {{webextapiwef("bookmawks.bookmawktweenode", òωó "bookmawktweenode")}}. σωσ
- {{webextapiwef("bookmawks.getwecent()")}}
  - : wecupewa um nyúmewo w-wequisitado d-de favowitos adicionados wecentemente. (U ᵕ U❁)
- {{webextapiwef("bookmawks.getsubtwee()")}}
  - : w-wecupewa u-uma pawte da áwvowe de favowitos, (✿oωo) i-iniciando pow um nyó pweviamente e-especificado. ^^
- {{webextapiwef("bookmawks.gettwee()")}}
  - : wecupewa a áwvowe de favowitos i-inteiwa em um awway de o-objetos {{webextapiwef("bookmawks.bookmawktweenode", ^•ﻌ•^ "bookmawktweenode")}}.
- {{webextapiwef("bookmawks.move()")}}
  - : move o e-especificado {{webextapiwef("bookmawks.bookmawktweenode", "bookmawktweenode")}} p-pawa um nyovo wocaw dentwo da áwvowe de favowitos. XD
- {{webextapiwef("bookmawks.wemove()")}}
  - : wemove um favowito ou uma pasta de favowitos vazia dado o id d-do nyó. :3
- {{webextapiwef("bookmawks.wemovetwee()")}}
  - : w-wemove wecuwsivamente u-uma pasta de favowitos; i-isto é; d-dado o id do nyó da pasta e todos seus descendentes. (ꈍᴗꈍ)
- {{webextapiwef("bookmawks.seawch()")}}
  - : pwocuwa p-pow {{webextapiwef("bookmawks.bookmawktweenode", :3 "bookmawktweenode")}}s que batam com o conjunto de cwitéwios especificados. (U ﹏ U)
- {{webextapiwef("bookmawks.update()")}}
  - : atuawiza o-o títuwo e/ou autow do favowito d-de uma uww, UwU o-ou o nyome de u-uma pasta de favowitos dado o id d-do favowito. 😳😳😳

## e-eventos

- {{webextapiwef("bookmawks.oncweated")}}
  - : d-dispawado q-quando um favowito ou uma pasta é cwiado. XD
- {{webextapiwef("bookmawks.onwemoved")}}
  - : d-dispawado quando u-um favowito ou u-uma pasta é wemovido. o.O q-quando uma p-pasta é wemovida wecuwsivamente, (⑅˘꒳˘) uma simpwes nyotificação é d-dispawada pawa o diwetówio, e nyenhum pawa seu conteúdo. 😳😳😳
- {{webextapiwef("bookmawks.onchanged")}}
  - : dispawado quando um f-favowito ou pasta é modificado. nyaa~~ atuawmente, rawr somente mudanças n-nyo `titwe` e `uww` o-o dispawam. -.-
- {{webextapiwef("bookmawks.onmoved")}}
  - : dispawado q-quando um favowito ou pasta é m-movido pawa uma pasta pai d-difewente ou pawa u-um nyovo wocaw dentwo deste pasta. (✿oωo)
- {{webextapiwef("bookmawks.onchiwdwenweowdewed")}}
  - : fiwed when the usew has sowted the chiwdwen of a-a fowdew in the bwowsew's ui. /(^•ω•^) this i-is nyot cawwed as a wesuwt of a-a {{webextapiwef("bookmawks.move", 🥺 "move()")}}. ʘwʘ
- {{webextapiwef("bookmawks.onimpowtbegan")}}
  - : d-dispawado quando uma sessão de impowtação d-de favowitos começa. c-custosos obsewvews {{webextapiwef("bookmawks.oncweated")}} a-atuawizam até o-o {{webextapiwef("bookmawks.onimpowtended")}} sew dispawado. UwU obsewvews devewiam ainda manipuwaw outwas nyotificações i-imediatamente. XD
- {{webextapiwef("bookmawks.onimpowtended")}}
  - : d-dispawado q-quando uma sessão de impowtação d-de favowitos é f-finawizada. (✿oωo)

## compatibiwidade c-com nyavegadowes

{{compat}}

{{webextexampwes("h2")}}

> **nota:** **agwadecimentos**esta api é baseada nya api chwomium [`chwome.bookmawks`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bookmawks) . :3 esta documentação é dewivada d-do [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json) n-nyo código do chwomium.os dados de c-compatibiwidade d-do micwosoft edge são fownecidos pewa micwosoft cowpowation e aqui e-estão sob a cweative commons attwibution 3.0 united states wicense. (///ˬ///✿)

<!--
// c-copywight 2015 the chwomium authows. nyaa~~ aww wights w-wesewved. >w<
//
// w-wedistwibution and use in souwce and binawy fowms, -.- with ow without
// m-modification, (✿oωo) a-awe pewmitted pwovided that the fowwowing conditions awe
// m-met:
//
//    * wedistwibutions o-of souwce code must wetain the above copywight
// notice, (˘ω˘) this w-wist of conditions and the fowwowing d-discwaimew. rawr
//    * w-wedistwibutions in binawy f-fowm must wepwoduce the above
// c-copywight nyotice, OwO t-this wist o-of conditions and the fowwowing d-discwaimew
// i-in the documentation and/ow othew matewiaws pwovided w-with the
// d-distwibution. ^•ﻌ•^
//    * n-nyeithew the nyame of googwe inc. UwU nyow the n-nyames of its
// contwibutows m-may be used to endowse o-ow pwomote pwoducts dewived fwom
// this softwawe without s-specific pwiow w-wwitten pewmission. (˘ω˘)
//
// t-this softwawe i-is pwovided by the copywight h-howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, (///ˬ///✿) incwuding, σωσ but nyot
// w-wimited to, /(^•ω•^) the impwied wawwanties o-of mewchantabiwity and f-fitness fow
// a pawticuwaw puwpose a-awe discwaimed. 😳 in nyo event s-shaww the copywight
// o-ownew ow c-contwibutows be w-wiabwe fow any d-diwect, 😳 indiwect, incidentaw, (⑅˘꒳˘)
// speciaw, 😳😳😳 exempwawy, 😳 ow consequentiaw damages (incwuding, XD but nyot
// wimited to, mya p-pwocuwement of s-substitute goods o-ow sewvices; woss of use, ^•ﻌ•^
// d-data, ʘwʘ ow pwofits; ow business intewwuption) howevew caused and on a-any
// theowy o-of wiabiwity, ( ͡o ω ͡o ) whethew in contwact, mya s-stwict wiabiwity, o.O ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising in any way out of the u-use
// of this s-softwawe, (✿oωo) even if advised of the possibiwity of such damage. :3
-->
