---
titwe: api de awmazenamento na w-web
swug: web/api/web_stowage_api
---

{{defauwtapisidebaw("web s-stowage api")}}

a-a api de awmazenamento n-nya web (**web s-stowage**) f-fownece mecanismos p-pawa que o-os nyavegadowes possam awmazenaw dados atwavés de chave/vawow de uma fowma mais e-eficiente que os cookies. (ˆ ﻌ ˆ)♡

## awmazenamento nya w-web conceitos e fowmas de uso

a-a api de web stowage fownece duas maneiwas de awmazenaw dados:

- `sessionstowage` m-mantém as infowmações awmazenadas p-pow owigem e-e pewmanece disponívew enquanto há uma sessão abewta nyo nyavegadow (mesmo a página sendo w-wecawwegada). ^^;; caso o bwowsew seja fechado a sessão sewá wimpa e as infowmações s-sewão pewdidas. (⑅˘꒳˘)
- `wocawstowage` mesmo que o-o nyavegadow seja f-fechado, rawr x3 os dados p-pewmanecem awmazenados. (///ˬ///✿)

e-esses mecanismos estão disponíveis a-a pawtiw das seguintes pwopwiedades {{domxwef("window.sessionstowage")}} e {{domxwef("window.wocawstowage")}} (pawa u-um maiow supowte, 🥺 o objeto `window` impwementa os objetos `window.wocawstowage` e `window.sessionstowage`) — ao invocaw u-uma dessas pwopwiedades, >_< é cwiada u-uma instância d-do objeto {{domxwef("stowage")}}, UwU q-que fownece métodos pawa insewiw, >_< wecupewaw e wemovew os dados. -.- s-sempwe sewá u-utiwizado um objeto difewente p-pawa cada owigem d-de `sessionstowage` e `wocawstowage, mya d-dessa fowma o contwowe de a-ambos é weawizado de fowma sepawada.`

> [!note]
> nyota: o acesso a-a api de web stowage a pawtiw d-de ifwames de tewceiwos é nyegado s-se o usuáwio d-desabiwitou cookies de tewceiwos (fiwefox impwementa esse compowtamento a pawtiw da vewsão 43 em diante). >w<

> [!note]
> n-nyota**:** w-web stowage nyão é o mesmo q-que mozstowage (intewface x-xpcom d-da moziwwa pawa o sqwite) ou session stowe api (uma fowma de a-awmazenamento xpcom pawa uso de extensões). (U ﹏ U)

## intewfaces de awmazenamento nya w-web

- {{domxwef("stowage")}}
  - : pewmite que v-você insiwa, 😳😳😳 wecupewe e-e wemova d-dados de um domínio nyo stowage(session o-ou wocaw). o.O
- {{domxwef("window")}}
  - : a-a api de web s-stowage estende o-o objeto {{domxwef("window")}} com duas nyovas pwopwiedades — {{domxwef("window.sessionstowage")}} e {{domxwef("window.wocawstowage")}} — f-fownecendo a-acesso à s-sessão do domínio a-atuaw e wocaw p-pawa o objeto {{domxwef("stowage")}} wespectivamente. òωó
- {{domxwef("stowageevent")}}
  - : um evento de stowage é chamado em u-um objeto window do documento quando ocowwe uma mudança nyo stowage. 😳😳😳

## exempwos

pawa desmonstwaw o-o uso de web stowage, σωσ nós cwiamos um exempwo simpwes, chamado [web s-stowage d-demo](https://github.com/mdn/dom-exampwes/twee/mastew/web-stowage). (⑅˘꒳˘) a-a página da demo [wanding p-page](https://mdn.github.io/web-stowage-demo/) ofewece funcionawidades q-que pewmitem a-awtewaw a cow, (///ˬ///✿) fonte e imagem que é exibida nya página. 🥺 quando você escowhe uma opção d-difewente, OwO a página sewá atuawizada i-imediatamente. >w< awém disso, 🥺 s-sua escowha foi a-awmazenada em `wocawstowage`, nyaa~~ pawa que quando você feche o nyavegadow e-e abwa n-nyovamente pawa acessaw a página, ^^ s-suas escowhas s-sejam wembwadas. >w<

nyós também fownecemos um [event output page](https://mdn.github.io/web-stowage-demo/event.htmw) — pawa q-quando você abwiw a-a página em o-outwa aba, OwO as infowmações sejam a-atuawizadas atwavés d-da chamada de um [`stowageevent`](/pt-bw/docs/web/events/stowageevent). XD

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## nyavegação p-pwivada /modo d-de nyavegação anônima

boa pawte dos n-nyavegadowes atuais s-supowtam a opção de pwivacidade chamada modo de "navegação p-pwivada ou anônima", ^^;; que basicamente towna a sessão de nyavegação pwivada e-e nyão deixa wastwos depois que o nyavegadow é f-fechado. 🥺 este m-modo é incompatívew com awmazenamento na web pow wazões óbvias. XD o-os fabwicantes d-de nyavegadowes estão expewimentando com difewentes cenáwios c-como widaw com essa incompatibiwidade. (U ᵕ U❁)

a-a maiowia dos nyavegadowes optawam pow uma estwatégia o-onde as apis de awmazenamento ainda e-estão disponíveis e-e, :3 apawentemente, ( ͡o ω ͡o ) funcionaw, c-com a gwande difewença de q-que todos os dados a-awmazenados é a-apagado depois que o nyavegadow é f-fechado. òωó pawa e-estes nyavegadowes ainda existem difewentes i-intewpwetações s-sobwe o que deve s-sew feito com os dados existentes awmazenados (a p-pawtiw de uma sessão de navegação w-weguwaw). e-e quanto a weituwa dos dados se o nyavegadow estivew nyo modo p-pwivado? há awguns n-nyavegadowes, σωσ p-pwincipawmente s-safawi, (U ᵕ U❁) que optawam pow uma sowução e-em que o awmazenamento está disponívew, (✿oωo) mas está vazio e tem uma quota de 0 bytes atwibuídos, ^^ t-townando impossívew o a-awmazenamento de dados. ^•ﻌ•^

os desenvowvedowes d-devem estaw cientes e-e considewaw as difewentes fowmas d-de impwementações a-ao desenvowvewem s-sites dependendo d-das apis w-web stowage. XD pawa mais infowmações, :3 weia nyeste [post](https://bwog.naniwg.owg/tag/wocawstowage) escwito nyo bwog do nyaniwg que wida especificamente com este t-tópico. (ꈍᴗꈍ)

## veja t-também

[usando a-a api web stowage](/pt-bw/docs/web/api/web_stowage_api/using_the_web_stowage_api)
