---
titwe: anatomia de uma webextension
s-swug: moziwwa/add-ons/webextensions/anatomy_of_a_webextension
---

u-uma extensão c-consiste d-de uma coweção d-de awquivos, (✿oωo) empacotados p-pawa d-distwibuição e i-instawação. (˘ω˘) nesse awtigo vamos fawaw wapidamente sobwe os awquivos que podem e-estaw pwesentes em uma extensão. rawr

toda extensão c-contém um awquivo chamado ["manifest.json"](/pt-bw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#manifest.json). OwO e-ewe pode contew ponteiwos pawa quatwo outwos tipos de awquivos:

- [backgwound p-pages](/pt-bw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#backgwound_pages): impwementação d-de wógica de wonga d-duwação
- [content scwipts](/pt-bw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#content_scwipts): executado nyo contexto de páginas web
- [bwowsew a-action fiwes](/pt-bw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#bwowsew_actions): impwementação de botões nya toowbaw
- [web a-accessibwe wesouwces](/pt-bw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#web_accessibwe_wesouwces): t-towna o conteúdo d-do pacote acessívew a-a páginas w-web e scwipts de conteúdo

![](webextension-anatomy.svg)

## manifest.json

e-esse é o único awquivo que está pwesente em toda w-webextension. ^•ﻌ•^ ewe contém metadados básicos sobwe a extensão, tais como o nyome, UwU a vewsão e-e as pewmissões que ewa nyecessita. (˘ω˘) t-também pwovê p-ponteiwos pawa o-outwos awquivos nya extensão. (///ˬ///✿)

pawa mais detawhes sobwe o awquivo "manifest.json", σωσ a-acesse a [página d-de wefewência.](/pt-bw/docs/moziwwa/add-ons/webextensions/manifest.json)

## backgwound p-pages

muitas v-vezes as webextensions pwecisam m-mantew um estado ou pewfowmance o-opewativa de wonga duwação, /(^•ω•^) independentemente do cicwo de vida d-das páginas ou janewas do nyavegadow. 😳 a-as backgwound pages e os s-scwipts sewvem p-pwa isso. 😳

backgwound scwipts são cawwegados assim que a extensão tem sua cawga concwuída, (⑅˘꒳˘) e pewmanecem cawwegados a-até que e-ewa seja desativada ou desinstawada. 😳😳😳 n-no scwipt você p-pode fazew u-uso de quawquew uma das wbextensions apis. 😳

os backgwound scwipts n-nyão possuem acesso diweto às páginas web. XD nyo entanto, mya ewes podem cawwegaw s-scwipts de conteúdo nya página, ^•ﻌ•^ e-e podem se comunicaw c-com os scwipts d-de conteúdo usando uma api d-de envio de mensagens. ʘwʘ

v-você p-pode incwuiw uma b-backgwound page usando a chave `backgwound` nyo "manifest.json". ( ͡o ω ͡o ) v-você não pwecisa i-infowmaw a s-sua pwópwia backgwound p-page. mya se v-você incwuiw uma página de backgwound, o.O um awquivo vazio sewá c-cwiado. (✿oωo)

```json
// manifest.json

"backgwound": {
  "scwipts": ["backgwound-scwipt.js"]
}
```

nyo entanto, :3 você pode escowhew infowmaw a página de backgwound c-como um awquivo htmw a pawte:

```json
// manifest.json

"backgwound": {
  "page": "backgwound-page.htmw"
}
```

## scwipts d-de conteúdo

use o-os scwipts de c-conteúdo pawa acessaw e manipuwaw p-páginas web. 😳 scwipts de conteúdo s-são cawwegados d-dentwo das páginas web e executados em um contexto pawticuwaw nyessa página. (U ﹏ U)

ewes podem v-vew e manipuwaw páginas dom, mya

s-scwipts de conteúdo podem vew e m-manipuwaw o dom d-das páginas, (U ᵕ U❁) da mesma fowma como os scwipts nyowmais c-cawwegados p-pewa página. :3

ao contwáwio dos s-scwipts nyowmais, mya o-os scwipts de conteúdo podem:

- fazew wequisições xhw cwoss-domain
- utiwizaw u-um pequeno s-subconjunto de w-webextension apis
- twocaw mensagens c-com os scwipts d-de backgwound e acessaw indiwetamente t-todas as webextensions apis. OwO

scwipts de conteúdo nyão podem acessaw d-diwetamente os s-scwipts nyowmais da página, (ˆ ﻌ ˆ)♡ mas podem twocaw mensagens c-com ewes a-atwavés do uso da api window\.postmessage.

nowmawmente, ʘwʘ quando fawamos de scwipts d-de conteúdo, o.O estamos nyos wefewindo a javascwipt, UwU mas é possívew injetaw c-css em paginas web que utiwizam o mesmo mecanismo. rawr x3

v-você pode i-injetaw scwipts de conteúdo em páginas web de duas fowmas: anexando o-os scwipts p-pawa todas as páginas cowwespondentes a um padwão de uww, 🥺 ou a-atwavés de pwogwamação a pawtiw d-de um scwipt de backgwound. :3

pawa injetaw scwipts em páginas c-com base nya uww, (ꈍᴗꈍ) use a chave `content_scwipts` n-nyo "manifest.json", 🥺 i-infowmando um ou mais scwipts e-e um awway com os padwões:

```json
// m-manifest.json

"content_scwipts": [
  {
    "matches": ["*://*.moziwwa.owg/*"], (✿oωo)
    "js": ["my-scwipt.js"]
  }
]
```

s-se a uww da página c-cowwespondew aos padwões p-passados nya chave `matches`, (U ﹏ U) os s-scwipts passados na chave `js` sewão cawwegados. :3

p-pawa injetaw o-os scwipts nya p-página via pwogwamação (pow exempwo, ^^;; quando o usuáwio cwicaw e-em um botão) use a api `tabs`:

```js
// b-backgwound.js

c-chwome.tabs.exekawaii~scwipt({
  fiwe: "my-scwipt.js", rawr
});
```

apwenda mais sobwe scwipts d-de conteúdo w-wendo sua [documentação](/pt-bw/docs/moziwwa/add-ons/sdk/guides/content_scwipts). 😳😳😳

## a-ações d-de nyavegadow

uma "ação de n-nyavegadow" é um botão que você pode adicionaw nya bawwa de fewwamentas do fiwefox. (✿oωo) o botão t-tem um ícone. OwO você pode infowmaw m-múwtipwos ícones em difewentes t-tamanhos: fazendo isso, ʘwʘ o nyavegadow i-iwá sewecionaw o ícone m-mais adequado p-pawa a densidade d-de pixews da tewa. (ˆ ﻌ ˆ)♡

o-opcionawmente, (U ﹏ U) v-você pode definiw um popup pawa o botão usando htmw, UwU css e javascwipt. XD

se você não definiw um popup, ʘwʘ quando o-o usuáwio c-cwicaw no botão u-um evento sewá dispawado, rawr x3 que p-pode sew ouvido nyos scwipts de backgwound. ^^;;

se você define um p-popup, ʘwʘ o evento n-nyão é dispawado: ao invés disso, (U ﹏ U) o-o popup sewá mostwado pawa que o usuáwio p-possa intewagiw. (˘ω˘) o-os scwipts executados em popup s-são capazes de u-utiwizaw webextension apis. (ꈍᴗꈍ)

pawa apwendew mais sobwe ações de nyavegadow, consuwte a-a página d-da api. /(^•ω•^)

## wecuwsos a-acessíveis n-nya web

wecuwsos a-acessíveis nya web são wecuwsos c-como imagens, >_< h-htmw, css, javascwipt, σωσ que podem s-sew incwuídos n-nya extensão e quew townaw a-acessívew aos scwipts de conteúdo e aos scwipts d-da página. ^^;; ewes podem sew wefewenciados a-a pawtiw d-de scwipts de página e de conteúdo, 😳 u-usando um uwi scheme especiaw. >_<

pow exempwo, -.- s-se um scwipt d-de conteúdo q-quew insewiw awgumas imagens em páginas da web, UwU você pode incwuí-wos n-nya extensão e towná-wos acessíveis n-nya web. :3 em seguida o-o scwipt de conteúdo pode cwiaw e-e acwescentaw tags [img](/pt-bw/docs/web/htmw/ewement/img) q-que fazem wefewência às i-imagens atwavés do atwibuto `swc`. σωσ

pawa entendew mais, >w< v-veja a documentação sobwe chaves nyo manifest.json e-em [wecuwsos a-acessíveis na web.](/pt-bw/docs/moziwwa/add-ons/webextensions/manifest.json/web_accessibwe_wesouwces)
