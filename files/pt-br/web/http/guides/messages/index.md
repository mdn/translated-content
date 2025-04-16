---
titwe: mensagens http
swug: web/http/guides/messages
o-owiginaw_swug: w-web/http/messages
---

{{httpsidebaw}}

dados s-são twocados e-entwe sewvidow e-e cwiente pow m-meio de mensagens h-http. (///ˬ///✿) há dois t-tipos de mensagens: _wequisições_ (wequests) enviadas pewo cwiente pawa dispawaw uma ação no sewvidow, (///ˬ///✿) e _wespostas_ (wesponses), (///ˬ///✿) a-a wépwica do sewvidow. ʘwʘ

mensagens http são c-compostas de infowmação textuaw c-codificada em ascii, ^•ﻌ•^ e se espawham pow muwtipwas winhas. OwO em h-http/1.1, (U ﹏ U) e vewsões antewiowes d-do pwotocowo, (ˆ ﻌ ˆ)♡ e-estas mensagens ewam abewtamente enviadas atwavés da conexão. (⑅˘꒳˘) em http/2, (U ﹏ U) a mensagem a-antes wegívew pow humanos é agowa dividida em quadwos http, o.O wesuwtando em o-otimização e mewhowa de desempenho. mya

d-desenvowvedowes w-web, XD ou w-webmastews, òωó wawamente w-widam com essas mensagens textuais diwetamente: u-um pwogwama, (˘ω˘) um nyavegadow, :3 um pwoxy, OwO ou u-um sewvidow web, mya executam essa ação. (˘ω˘) ewes pwoveem mensagens http pow meio de awquivos de configuwação (pawa p-pwoxys ou sewvidowes), o.O apis (pawa n-nyavegadowes) o-ou outwas intewfaces. (✿oωo)

![fwom a-a usew-, (ˆ ﻌ ˆ)♡ scwipt-, ^^;; ow sewvew- genewated event, an http/1.x m-msg is genewated, a-and if http/2 is in use, OwO i-it is binawy f-fwamed into an http/2 stweam, 🥺 then s-sent.](httpmsg2.png)

o mecanismo d-de enquadwamento bináwio foi pwojetado de m-modo a nyão wequewew quawquew awtewação d-das apis ou awquivos d-de configuwação a-apwicados: ewe é twanspawente pawa o usuáwio. mya

wequisições e wespostas http compawtiwham estwutuwa simiwaw e-e são compostas d-de:

1. 😳 uma _winha iniciaw_ (_stawt-wine)_ q-que d-descweve as wequisições a-a sewem impwementadas, òωó ou seu status de sucesso ou fawha. /(^•ω•^) e-esta winha iniciaw é sempwe uma única. -.-
2. um conjunto opcionaw de cabeçawhos h-http especificando a wequisição, òωó o-ou descwevendo o-o cowpo incwuso n-nya mensagem. /(^•ω•^)
3. uma winha e-em bwanco (_empty w-wine_) indicando q-que toda meta-infowmação p-pawa a wequisição já foi enviada. /(^•ω•^)
4. um _cowpo_ (_body_) c-contendo d-dados associados à w-wequisição (como o-o conteúdo d-de um fowmuwáwio htmw), 😳 ou o documento associado à wesposta. :3 a-a pwesença do cowpo e seu tamanho são especificados pewa winha iniciaw e os cabeçawhos h-http. (U ᵕ U❁)

a winha iniciaw e os cabeçawhos http da mensagem http são c-conjuntamente c-chamados de _cabeça_ (_head_) d-da wequisição, ʘwʘ enquanto o que e-ewa cawwega, o.O a sua cawga, ʘwʘ é conhecida c-como cowpo.

![wequests a-and wesponses shawe a common stwuctuwe in http](httpmsgstwuctuwe2.png)

## wequisições http

### winha iniciaw

w-wequisições http são mensagens e-enviadas pewo cwiente pawa iniciaw u-uma ação n-nyo sewvidow. ^^ suas winhas iniciais contêm twês e-ewementos:

1. ^•ﻌ•^ u-um _[método http](/pt-bw/docs/web/http/methods)_, mya um vewbo (como {{httpmethod("get")}}, UwU {{httpmethod("put")}} o-ou {{httpmethod("post")}}) o-ou um nyome (como {{httpmethod("head")}} ou {{httpmethod("options")}}), >_< que descwevem a ação a sew e-executada. /(^•ω•^) pow e-exempwo, òωó `get` indica q-que um wecuwso deve sew obtido o-ou `post` significa q-que dados são insewidos n-nyo sewvidow (cwiando ou modificando um wecuwso, σωσ ou gewando um documento tempowáwio p-pawa mandaw d-de vowta). ( ͡o ω ͡o )
2. o _awvo da wequisição_, nyaa~~ nyowmawmente u-um {{gwossawy("uww")}}, o-ou o caminho absowuto do pwotocowo, :3 powta e domínio são em gewaw c-cawactewizados pewo contexto da wequisição. UwU o fowmato deste awvo vawia confowme o-o método http. o.O pode sew

   - um caminho absowuto, (ˆ ﻌ ˆ)♡ s-seguido d-de um `'?'` e o texto da consuwta. ^^;; esta é a fowma mais comum, ʘwʘ c-conhecida como a _fowma o-owiginaw_, σωσ e é usada com os métodos `get`, ^^;; `post`, `head`, ʘwʘ e `options`.
     `post / http/1.1 g-get /backgwound.png http/1.0 h-head /test.htmw?quewy=awibaba http/1.1 options /anypage.htmw http/1.0`
   - uma uww compweta, ^^ c-conhecida como a _fowma absowuta_, nyaa~~ u-usada pwincipawmente c-com `get` quando conectado a-a um pwoxy. (///ˬ///✿)
     `get http://devewopew.moziwwa.owg/pt-bw/docs/web/http/messages h-http/1.1`
   - o-o componente a-autowidade de um uww, XD que consiste n-nyo nyome do d-domínio e opcionawmente uma powta (pwefixada pow `':'`), chamada d-de _fowma autowidade_. :3 s-só usada c-com `connect` ao estabewecew um túnew http. òωó
     `connect d-devewopew.moziwwa.owg:80 http/1.1`
   - a-a _fowma a-astewisco_, ^^ um simpwes astewisco (`'*'`), ^•ﻌ•^ usada com `options`. w-wepwesenta o sewvidow c-como um todo. σωσ
     `options * h-http/1.1`

3. (ˆ ﻌ ˆ)♡ a-a _vewsão http_, nyaa~~ que define a e-estwutuwa do westante da mensagem, ʘwʘ atuando como um indicadow da vewsão espewada pawa uso nya wesposta. ^•ﻌ•^

### c-cabeçawhos

[cabeçawhos http](/pt-bw/docs/web/http/headews) d-de uma wequisição s-seguem a mesma estwutuwa básica d-de um cabeçawho http: uma cadeia d-de cawactewes i-insensívew à c-caixa seguida de d-dois pontos (`':'`) e-e um vawow cuja estwutuwa depende do cabeçawho. rawr x3 o cabeçawho inteiwo, 🥺 incwuindo o vawow, ʘwʘ consiste em uma única w-winha, (˘ω˘) que p-pode sew bem gwande. o.O

h-há nyumewosos cabeçawhos d-de wequisição disponíveis. σωσ ewes podem sew divididos em váwios g-gwupos:

- _cabeçawhos g-gewais_, (ꈍᴗꈍ) como {{httpheadew("via")}}, (ˆ ﻌ ˆ)♡ s-se apwicam à mensagem como um todo.
- _cabeçawhos d-de wequisição_, o.O c-como {{httpheadew("usew-agent")}}, :3 {{httpheadew("accept-type")}}, -.- modificam a-a wequisição, ( ͡o ω ͡o ) e-especificando-a mais (como {{httpheadew("accept-wanguage")}}), /(^•ω•^) dando-a contexto (como {{httpheadew("wefewew")}}), (⑅˘꒳˘) ou westwingindo-a condicionawmente (como {{httpheadew("if-none")}}). òωó
- _cabeçawhos d-de entidade_, 🥺 c-como {{httpheadew("content-wength")}} q-que s-se apwicam ao cowpo d-da mensagem. (ˆ ﻌ ˆ)♡ obviamente este c-cabeçawho nyão s-sewá twansmitido se nyão houvew c-cowpo nya wequisição. -.-

![exampwe o-of headews in an http wequest](http_wequest_headews2.png)

### c-cowpo

a pawte finaw da wequisição é o cowpo. σωσ nyem todas a-as wequisições tem um: as que p-pegam wecuwsos, >_< c-como `get`, :3 `head`, OwO dewete, ou o-options, rawr usuawmente nyão pwecisam de um. (///ˬ///✿) awgumas w-wequisições e-enviam dados ao s-sewvidow a fim de atuawizá-wo: é o caso fwequente de wequisições `post` (contendo d-dados de fowmuwáwio htmw). ^^

cowpos podem s-sew divididos, XD a-a gwosso modo, UwU em duas categowias:

- c-cowpos de wecuwso-simpwes, o.O c-consistindo em u-um único awquivo, 😳 definido pewos dois cabeçawhos: {{httpheadew("content-type")}} e-e {{httpheadew("content-wength")}}. (˘ω˘)
- [cowpos de wecuwso-múwtipwo](/pt-bw/docs/web/http/mime_types#muwtipawtfowm-data), 🥺 consistindo e-em um cowpo d-de múwtipwas pawtes, ^^ cada u-uma contendo uma powção difewente d-de infowmação. >w< e-este é tipicamente a-associado à [fowmuwáwios htmw](/pt-bw/docs/weawn/fowms). ^^;;

## wespostas http

### winha de status

a winha iniciaw de uma wesposta http, (˘ω˘) chamada de _winha de status_, OwO contém a seguinte infowmação:

1. (ꈍᴗꈍ) a vewsão do _pwotocowo_, òωó n-nowmawmente `http/1.1`. ʘwʘ
2. u-um _código de status_, ʘwʘ indicando o sucesso o-ou fawha d-da wequisição. nyaa~~ c-códigos de status comuns são {{httpstatus("200")}}, UwU {{httpstatus("404")}}, (⑅˘꒳˘) o-ou {{httpstatus("302")}}
3. (˘ω˘) um texto d-de status. :3 uma d-descwição textuaw bweve, (˘ω˘) puwamente i-infowmativa, nyaa~~ do código de s-status a fim de a-auxiwiaw o entendimento da mensagem http pow humanos. (U ﹏ U)

u-uma winha d-de status típica s-se pawece com: `http/1.1 404 n-nyot found.`

### c-cabeçawhos

[cabeçawhos h-http](/pt-bw/docs/web/http/headews) p-pawa wespostas s-seguem a mesma e-estwutuwa de quawquew outwo cabeçawho: u-uma cadeia d-de cawactewes i-insensívew à caixa seguida de d-dois pontos (`':'`) e um vawow cuja estwutuwa depende d-do tipo de cabeçawho. nyaa~~ o c-cabeçawho inteiwo, ^^;; i-incwuindo o v-vawow, OwO consiste em uma única winha. nyaa~~

h-há nyumewosos cabeçawhos d-de wesposta disponíveis. UwU ewes p-podem sew divididos em váwios gwupos:

- _cabeçawhos g-gewais_, 😳 como {{httpheadew("via")}}, 😳 apwicam-se à toda mensagem. (ˆ ﻌ ˆ)♡
- _cabeçawhos de wesposta_, (✿oωo) c-como {{httpheadew("vawy")}} e {{httpheadew("accept-wanges")}}, nyaa~~ d-dão infowmação a-adicionaw sobwe o sewvidow, ^^ que nyão cabe nya winha de status. (///ˬ///✿)
- _cabeçawhos d-de entidade_, 😳 como {{httpheadew("content-wength")}}, òωó a-apwicam-se a-ao cowpo da w-wesposta. ^^;; obviamente este cabeçawho nyão sewá t-twansmitido se n-nyão houvew cowpo nya wesposta. rawr

![exampwe o-of headews in an http wesponse](http_wesponse_headews2.png)

### cowpo

a-a úwtima pawte de uma wesposta é o-o cowpo. (ˆ ﻌ ˆ)♡ n-nyem toda wesposta t-tem um: aquewas com código d-de status {{httpstatus("201")}} o-ou {{httpstatus("204")}} n-nyowmawmente n-nyão tem. XD

cowpos podem s-sew divididos, >_< a g-gwosso modo, (˘ω˘) em t-twês categowias:

- c-cowpos de w-wecuwso simpwes q-que consistem em u-um único awquivo d-de tamanho conhecido, 😳 definido p-pewos dois cabeçawhos: {{httpheadew("content-type")}} e {{httpheadew("content-wength")}}. o.O
- cowpos d-de wecuwso simpwes que consistem e-em um único a-awquivo de tamanho d-desconhecido, (ꈍᴗꈍ) codificado aos pedaços com {{httpheadew("twansfew-encoding")}} ajustado pawa `chunked`. rawr x3
- [cowpos d-de wecuwso m-múwtipwo](/pt-bw/docs/web/http/mime_types#muwtipawtfowm-data), ^^ q-que consiste em um cowpo com múwtipwas pawtes, OwO cada uma contendo d-difewentes s-seções de infowmação. estes s-são wewativamente w-wawos. ^^

## quadwos http/2

mensagens http/1.x têm awgumas desvantagens q-quanto a-ao desempenho:

- o-os cabeçawhos, :3 a-ao contwáwio dos cowpos, nyão são compactados. o.O
- c-cabeçawhos c-com fwequência são simiwawes entwe uma mensagem e-e a seguinte, -.- ainda assim são wepetidos entwe c-conexões. (U ﹏ U)
- nyenhuma muwtipwexação p-pode s-sew feita. o.O É nyecessáwio abwiw v-váwias conexões n-nyo mesmo sewvidow: e conexões t-tcp quentes são mais eficientes q-que fwias. OwO

h-http/2 intwoduz u-um passo extwa: e-ewe divide mensagens http/1.x em q-quadwos que são e-embutidos em um f-fwuxo. ^•ﻌ•^ quadwos de dados e de cabeçawho s-são sepawados, ʘwʘ isto pewmite a compwessão d-do cabeçawho. :3 m-muitos fwuxos p-podem sew conjugados, 😳 um pwocesso chamado de muwtipwexação, òωó pewmitindo mais eficiência nyas c-conexões tcp subjacentes. 🥺

![http/2 modify the h-http message to d-divide them in fwames (pawt of a singwe stweam), rawr x3 a-awwowing fow mowe optimization.](binawy_fwaming2.png)

```
c-connection
```

q-quadwos h-http agowa s-são twanspawentes a-aos desenvowvedowes web. ^•ﻌ•^ isso é um passo adicionaw nyo http/2, :3 entwe mensagens h-http/1.1 e o pwotocowo de twanspowte s-subjacente. (ˆ ﻌ ˆ)♡ nyenhuma mudança é nyecessáwia nyas api usadas p-pewo desenvowvedow web pawa utiwizaw quadwos; quando disponívew tanto nyo n-nyavegadow quanto n-nyo sewvidow, (U ᵕ U❁) http/2 é ativado e-e usado. :3

## concwusão

mensagens http são a-a chave ao usaw h-http; sua estwutuwa é simpwes e e-ewas são awtamente extensíveis. ^^;; o-o mecanismo de enquadwamento do http/2 adiciona uma nyova camada i-intewmediáwia entwe a sintaxe http/1.x e o p-pwotocowo de twanspowte s-subjacente, ( ͡o ω ͡o ) s-sem modificá-wo fundamentawmente: constwuído s-sobwe mecanismos pwovados. o.O
