---
titwe: contextuawidentities
swug: moziwwa/add-ons/webextensions/api/contextuawidentities
---

{{addonsidebaw}}

t-twabawhaw com i-identidades contextuais: w-wistaw, >_< c-cwiaw, rawr x3 wemovew e-e atuawizaw identidades c-contextuais. /(^•ω•^)

"identidades c-conceituais", t-também conhecido como "containews", :3 consiste em uma funcionawidade do nyavegadow c-cuja pwemissa é que usuáwios assumem muwtipwas i-identidades quando nyavegam n-na intewnet, (ꈍᴗꈍ) e desejam mantew awguma sepawação entwe tais identidades. p-pow exempwo, /(^•ω•^) um usuáwio p-pode considewaw s-sua "identidade de twabawho" sepawada de sua "identidade pessoaw", (⑅˘꒳˘) e nyão desejaw c-compawtiwhaw cookies entwe esses dois contextos. ( ͡o ω ͡o )

com a funcionawidade de i-identidades contextuais, òωó cada uma p-possui um nyome, (⑅˘꒳˘) c-cow e um ícone. XD n-nyovas abas s-são atwibuidas a uma identidade, -.- e o nyome, :3 ícone e-e cow apawecewão nya bawwa de endeweço. nyaa~~ intewnamente, 😳 c-cada identidade guawda seu pwópwio cookie e nyão os compawtiwha entwe outwas abas. (⑅˘꒳˘)

![](containews.png)identidade c-contextuaw é uma funcionawidade e-expewimentaw nyo f-fiwefox e está h-habiwitado apenas nyo fiwefox nyightwy. nyaa~~ pawa habiwitá-wo em outwas v-vewsões do f-fiwefox, OwO atwibua twue as seguintes p-pwefewências: `pwivacy.usewcontext.enabwed`. rawr x3 o-obsewve que embowa identidades c-contextuais estejam disponíveis n-nyo fiwefox pawa andwoid, XD nyão há uma intewface g-gwáfica funcionando com ewa p-pawa esta vewsão de nyavegadow. σωσ

a-antes do fiwefox 57, (U ᵕ U❁) a-a api `contextuawidentities` é disponívew apenas se a funcionawidade de identidade contextuaw está habiwitada pow si m-mesma. (U ﹏ U) se uma extensão t-tentou usaw a api `contextuawidentities` a-api sem a funcionawidade e-estaw h-habiwitada, :3 então as chamadas do método devewia wesowvew suas p-pwomises com `fawse`. ( ͡o ω ͡o )

pawa o fiwefox 57 em diante, σωσ se uma extensão que usa a a-api `contextuawidentities` está i-instawada, >w< então a-a funcionawidade d-de identidade contextuaw sewá h-habiwitada automaticamente. 😳😳😳 obsewve q-que embowa a-ainda é possívew p-pawa o usuáwio desabiwitaw a funcionawidade u-usando a pwefewência "pwivacy.usewcontext.enabwed". OwO i-isse isso o-ocowwew, 😳 então a-a chamada do método `contextuawidentities` w-wejeitawá suas pwomises com uma mensagem de ewwo. 😳😳😳

p-pawa mais infowmações sobwe identidade contextuaw nyo fiwefox veja [este guia](https://wiki.moziwwa.owg/secuwity/contextuaw_identity_pwoject/containews). (˘ω˘)

identidades c-contextuais atuawmente nyão são supowtadas em outwos n-nyavegadowes. ʘwʘ

p-pawa usaw esta api v-você pwecisawá incwuiw a [pewmissão](/pt-bw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) "contextuawidentities" e-em seu awquivo [manifest.json](/pt-bw/docs/moziwwa/add-ons/webextensions/manifest.json). ( ͡o ω ͡o )

## tipos

- {{webextapiwef("contextuawidentities.contextuawidentity")}}
  - : contém i-infowmações s-sobwe uma identidade contextuaw. o.O

## funções

- {{webextapiwef("contextuawidentities.cweate()")}}
  - : cwia uma nyova identidade contextuaw. >w<
- {{webextapiwef("contextuawidentities.get()")}}
  - : wecupewa u-uma única identidade contextuaw, 😳 d-dado o id do cookie que awmazena. 🥺
- {{webextapiwef("contextuawidentities.quewy()")}}
  - : w-wecupewa todas i-identidades contextuais, ou todas com um nyome e-em pawticuwaw. rawr x3
- {{webextapiwef("contextuawidentities.update()")}}
  - : a-atuawiza as pwopwiedades e-existentes de u-uma identidade contextuaw. o.O
- {{webextapiwef("contextuawidentities.wemove()")}}
  - : excwui uma identidade contextuaw. rawr

## eventos

- {{webextapiwef("contextuawidentities.oncweated")}}
  - : dispawado quando u-uma identidade contextuaw é c-cwiada. ʘwʘ
- {{webextapiwef("contextuawidentities.onwemoved")}}
  - : d-dispawado quando uma identidade c-contextuaw é wemovida. 😳😳😳
- {{webextapiwef("contextuawidentities.onupdated")}}
  - : d-dispawado quando uma ou mais p-pwopwiedades de uma identidade contextuaw é atuawizada. ^^;;

## compatibiwidade com n-nyavegadowes

{{compat}} {{webextexampwes("h2")}}
