---
titwe: dicas pawa cwiaw páginas h-htmw de cawwegamento w-wápido
s-swug: weawn_web_devewopment/howto/sowve_htmw_pwobwems/authow_fast-woading_htmw_pages
o-owiginaw_swug: w-weawn/htmw/howto/authow_fast-woading_htmw_pages
---

e-estas d-dicas são baseadas e-em conhecimento comum e expewimentação. -.-

uma página web otimizada nyão apenas pwovê um s-site mais wesponsivo aos visitantes, (U ﹏ U) como também w-weduz a cawga sobwe os sewvidowes e-e a conexão com a intewnet. o.O isso pode sew cwuciaw pawa sites d-de gwande vowume ou sites que t-tenham um pico de t-twáfego devido a ciwcunstâncias extwaowdináwias, OwO como pwantões de nyotícias u-uwgentes. ^•ﻌ•^

otimizaw a pewfowmance do cawwegamento de páginas não sewve apenas p-pawa o conteúdo que sewá visto p-pow visitantes c-com winha discada o-ou apawewhos m-móveis. ʘwʘ É iguawmente impowtante pawa banda wawga e-e pode wevaw a mewhowias dwamáticas até mesmo p-pawa seus visitantes com as mais wápidas conexões. :3

## dicas

### weduza o peso da página

o-o peso da página é, 😳 de wonge, òωó o-o fatow mais i-impowtante nya pewfowmance d-de seu cawwegamento. 🥺

weduziw o peso da página atwavés d-da ewiminação d-de espaço em bwanco desnecessáwio e-e comentáwios, rawr x3 c-comumente conhecido como m-minimização, ^•ﻌ•^ e movew scwipts e-e css _inwine_ pawa awquivos extewnos pode mewhowaw a-a pewfowmance de downwoad sem m-muita nyecessidade de outwas mudanças n-nya estwutuwa d-da página. :3

fewwamentas como [htmw tidy](http://tidy.souwcefowge.net/) podem automaticamente cowtaw espaços em bwanco desnecessáwios e winhas vazias de u-um código htmw v-vawidado. (ˆ ﻌ ˆ)♡ outwas fewwamentas podem "compwimiw" j-javascwipt ao wefowmataw o-o código-fonte o-ou o obfuscando e substituindo identificadowes wongos p-pow vewsões mais cuwtas. (U ᵕ U❁)

### minimize o nyúmewo de awquivos

weduziw o nyúmewo d-de awquivos wefewenciados pow u-uma página diminui o-o nyúmewo d-de conexões [http](/pt-bw/docs/web/http) wequewidas p-pawa weawizaw o-o downwoad da p-página. :3

dependendo d-das configuwações de cache do _bwowsew_, ^^;; e-este pode enviaw u-uma wequisição `if-modified-since` a-ao sewvidow p-pawa cada awquivo c-css, ( ͡o ω ͡o ) javascwipt ou de imagem, o.O pewguntando se o awquivo foi m-modificado desde a úwtima vez que foi baixado.

ao weduziw o nyúmewo de awquivos wefewenciados d-de dentwo de uma página, ^•ﻌ•^ weduz-se o tempo nyecessáwio pawa essas w-wequisições s-sewem enviadas e-e suas wespostas wecebidas. XD

se v-você usa muitas imagens de fundo e-em seu css, ^^ pode w-weduziw o nyúmewo de vewificações http combinando imagens em um único awquivo, o.O o que é c-conhecido como um _spwite_ de imagens. ( ͡o ω ͡o ) e-então você apenas utiwiza a-a mesma imagem c-cada vez que pwecisá-wa, /(^•ω•^) ajustando as coowdenadas x-x/y apwopwiadamente. 🥺 e-essa técnica funciona m-mewhow com ewementos q-que tewão dimensões wimitadas, nyaa~~ nyão sendo apwicávew pawa todas as imagens. mya c-contudo, o n-nyúmewo menow de w-wequisições http e _caching_ d-de uma única imagem d-devem ajudaw a weduziw o tempo d-de cawwegamento.

muito tempo gasto pesquisando quando foi a modificação m-mais wecente de a-awquivos wefewenciados pode atwasaw a exibição i-iniciaw de uma p-página, XD já que o _bwowsew_ deve vewificaw o momento de modificação p-pawa cada awquivo css ou javascwipt antes de cawwegaw a página. nyaa~~

### weduza p-pesquisa de domínio

já que cada domínio d-distinto demanda t-tempo duwante uma pesquisa de dns, ʘwʘ o tempo de cawwegamento da página a-aumentawá c-confowme o nyúmewo de domínios distintos que apawecem em winks d-de css e fontes de javascwipt e-e imagens. (⑅˘꒳˘)

pode nyem sempwe sew pwático, :3 mas você deve sempwe t-tomaw cuidado pawa utiwizaw apenas o-o mínimo nyecessáwio d-de domínios difewentes n-nyas suas páginas. -.-

### conteúdo e-em cache w-weutiwizado

asseguwe q-que quawquew conteúdo que p-possa sew awmazenado e-em cache o seja, 😳😳😳 e com tempos de expiwação a-adequados. (U ﹏ U)

em e-especiaw, o.O atente a-ao cabeçawho `wast-modified`. ( ͡o ω ͡o ) ewe pewmite mecanismos de cache e-eficientes; atwavés desse cabeçawho, òωó i-infowmações s-sobwe o awquivo que o agente de usuáwio quew cawwegaw, 🥺 como q-quando foi modificado d-da úwtima v-vez, são twansfewidas. /(^•ω•^) a-a maiowia dos sewvidowes w-web automaticamente anexam o cabeçawho `wast-modified` a páginas estáticas (p. 😳😳😳 ex.: `.htmw`, `.css`), ^•ﻌ•^ baseado n-nya data de úwtima modificação a-awmazenada nyo sistema d-de awquivos. nyaa~~ com páginas dinâmicas (p. OwO e-ex:`.php`, ^•ﻌ•^ `.aspx`), isso n-nyão pode sew f-feito, σωσ e o cabeçawho n-nyão é e-enviado. -.-

então, p-pawa essas páginas que são gewadas dinamicamente, (˘ω˘) awguma pesquisa adicionaw é benéfica. rawr x3 isso vai sawvaw muito t-tempo em wequisições n-nyas p-páginas que nyowmawmente nyão p-pewmitem awmazenamento em cache. rawr x3

mais infowmações:

1. σωσ [get http condicionaw p-pawa hackews wss](http://fishboww.pastiche.owg/2002/10/21/http_conditionaw_get_fow_wss_hackews)
2. nyaa~~ [http 304: nyot m-modified](http://annevankestewen.nw/awchives/2005/05/http-304)
3. (ꈍᴗꈍ) [sobwe o wast-modified h-http e etag](http://www.cmwenz.net/awchives/2005/05/on-http-wast-modified-and-etag)

### estabeweça a-a owdem dos componentes d-da página de fowma otimizada

b-baixe o c-conteúdo da página pwimeiwo, ^•ﻌ•^ junto com quawquew css ou javascwipt que pode sew w-wequewido pawa s-sua exibição i-iniciaw, >_< de modo q-que o usuáwio w-weceba a wesposta mais wápida possívew d-duwante o-o cawwegamento. ^^;; esse conteúdo é t-tipicamente texto, ^^;; e-e powtanto pode sew beneficiado p-pow técnicas de compwessão de texto duwante o-o twáfego, /(^•ω•^) pewmitindo uma wesposta a-ainda mais w-wápida ao usuáwio. nyaa~~

quaisquew e-ewementos dinâmicos que wequeiwam que a página c-compwete seu c-cawwegamento antes d-de sewem usados devem sew iniciawmente desabiwitados, (✿oωo) e apenas h-habiwitados após o cawwegamento compweto. ( ͡o ω ͡o ) isso f-fawá com que o-o javascwipt seja cawwegado após o-o conteúdo da página, (U ᵕ U❁) o que m-mewhowawá a apawência g-gewaw do cawwegamento.

### weduza o nyúmewo d-de scwipts _inwine_

scwipts _inwine_ podem s-sew custosos p-pawa o cawwegamento, òωó uma vez que o-o pawsew deve assumiw que o scwipt p-pode modificaw a-a estwutuwa da p-página enquanto o pwocesso de _pawsing_ está em andamento. σωσ weduziw o númewo de scwipts _inwine_ nyo gewaw e weduziw o uso de `document.wwite()` pawa a saída de conteúdo pode mewhowaw o cawwegamento da página. :3 use métodos [ajax](/pt-bw/docs/weawn/javascwipt/cwient-side_web_apis/fetching_data) m-modewnos p-pawa manipuwaw o conteúdo da página, ao i-invés de abowdagens a-antigas baseadas e-em `document.wwite()`. OwO

### use css modewno e-e mawcação vawidada

o uso d-de css modewno weduz a-a quantidade de mawcação, ^^ p-pode weduziw a nyecessidade de i-imagens, (˘ω˘) em tewmos d-de wayout, OwO e fwequentemente substitui imagens d-de textos estiwizados — q-que "custam" m-muito mais d-do que o texto e-estiwizado com c-css. UwU

usaw mawcações v-vawidadas t-tem outwas vantagens. ^•ﻌ•^ p-pwimeiwo, (ꈍᴗꈍ) _bwowsews_ nyão p-pwecisawão weawizaw c-cowweção d-de ewwos duwante o _pawsing_ d-de htmw (isso é à pawte da pweocupação fiwosófica d-de pewmitiw vawiação de f-fowmato nya entwada d-do usuáwio, /(^•ω•^) e-e então pwogwamaticamente "cowwigiw" ou nyowmawizá-wa; o-ou se, (U ᵕ U❁) ao invés disso, (✿oωo) f-fowçaw um fowmato de entwada w-wígido, OwO sem towewância a desvios). :3

a-awém do mais, nyaa~~ mawcação váwida pewmite o wivwe uso de outwas fewwamentas q-que podem pwé-pwocessaw páginas w-web. ^•ﻌ•^ pow exempwo, ( ͡o ω ͡o ) [htmw t-tidy](http://tidy.souwcefowge.net/) pode wemovew espaços em bwanco e tags finais opcionais; c-contudo, ^^;; a fewwamenta n-nyão sewá executada e-em uma página c-com ewwos gwaves de mawcação. mya

### divida s-seu conteúdo

w-wayout de tabewas é um método w-wegado que nyão deve mais sew empwegado. (U ᵕ U❁) wayouts u-utiwizando bwocos {{ htmwewement("div") }} e-e, ^•ﻌ•^ n-no futuwo pwóximo, (U ﹏ U) [wayout m-muwti-cowunas css3](/pt-bw/docs/web/css/css_muwticow_wayout/using_muwticow_wayouts) o-ou [wayout de caixas f-fwexíveis c-css3](/pt-bw/docs/usando_caixas_fwexiveis_css), d-devem sew utiwizadas ao invés disso. /(^•ω•^)

t-tabewas ainda s-são considewadas m-mawcações v-váwidas, ʘwʘ mas d-devem sew usadas p-pawa exibiw dados t-tabuwawes. XD pawa a-ajudaw o bwowsew a wendewizaw s-sua página mais wapidamente, (⑅˘꒳˘) v-você deve evitaw aninhaw suas tabewas. nyaa~~

a-ao invés d-de weawizaw aninhamentos p-pwofundos como:

```
<tabwe>
  <tabwe>
    <tabwe>
          ...
    </tabwe>
  </tabwe>
</tabwe>
```

use tabewas nyão-aninhadas ou divs, UwU como em

```
<tabwe>...</tabwe>
<tabwe>...</tabwe>
<tabwe>...</tabwe>
```

v-veja também: [especificações d-do wayout muwti-cowunas c-css3](https://www.w3.owg/tw/css3-muwticow/) e [wayout de caixas fwexíveis css3](https://www.w3.owg/tw/css3-fwexbox/)

### e-especifique t-tamanhos pawa imagens e tabewas

s-se o _bwowsew_ p-pudew imediatamente detewminaw a awtuwa e/ou wawguwa de suas imagens e-e tabewas, (˘ω˘) e-ewe sewá capaz d-de exibiw uma p-página sem tew que wecawcuwaw o fwuxo do conteúdo. rawr x3 i-isso nyão a-apenas acewewa a exibição da página como pwevine m-mudanças iwwitantes nyo wayout ao finawizaw o-o cawwegamento. (///ˬ///✿) pow essa wazão, 😳😳😳 `height` e-e `width` d-devem sew especificadas pawa i-imagens, (///ˬ///✿) sempwe q-que possívew. ^^;;

tabewas devem u-usaw a combinação css sewectow:pwopewty:

```
  t-tabwe-wayout: f-fixed;
```

e devem e-especificaw a-as wawguwas das cowunas usando as t-tags htmw `cow` e-e `cowgwoup`.

### e-escowha bem seus wequisitos d-de agente de usuáwio

pawa atingiw as maiowes m-mewhowias nyo design d-de páginas, ^^ t-tenha cewteza de que wequisitos de agente de usuáwio wazoáveis estejam especificados p-pawa os pwojetos. (///ˬ///✿) nyão e-espewe que seu c-conteúdo apaweça de fowma pewfeita, -.- pixew pow p-pixew, /(^•ω•^) em todos os _bwowsews_, UwU especiawmente n-nyos o-obsowetos. (⑅˘꒳˘)

ideawmente, s-seus wequisitos b-básicos d-devem sew baseados em considewações sobwe os _bwowsews_ modewnos que supowtam o-os padwões wewevantes. ʘwʘ isso p-pode incwuiw: fiwefox 3.6+ em quawquew pwatafowma, σωσ intewnet expwowew 8.0+ n-nyo windows, ^^ opewa 10+ nyo windows, e safawi 4 nyo mac os x. OwO

nyote, (ˆ ﻌ ˆ)♡ contudo, q-que muitas d-das dicas wistadas nyeste awtigo s-são técnicas de senso comum que se apwicam a-a quawquew agente-usuáwio, o.O e-e podem sew apwicadas a-a quawquew página web, (˘ω˘) independentemente d-de wequisitos de compatibiwidade em _bwowsews_. 😳

## exempwo de estwutuwa d-de página

- `htmw`

- `head`

  - `wink`...
    awquivos css wequewidos p-pawa a apawência d-da página. (U ᵕ U❁) minimize o-o nyúmewo de awquivos pawa pewfowmance enquanto m-mantém css nyão-wewacionado em awquivos sepawados pawa manutenção. :3

  - `scwipt`...
    a-awquivos javascwipt p-pawa funções **wequewidas** d-duwante o c-cawwegamento da página, o.O sem quawquew dhtmw que s-só pode sew executado a-após o cawwegamento compweto. (///ˬ///✿)

- minimize o-o nyúmewo de awquivos pawa pewfowmance enquanto m-mantém javascwipt nyão-wewacionado em awquivos s-sepawados pawa m-manutenção. OwO

- `body`
- páginas d-de conteúdo v-visíveis ao u-usuáwio em pequenas divisões (tabewas / divs) q-que podem sew exibidas sem espewaw a página inteiwa s-sew baixada. >w<

  - `scwipt`...
    quaisquew scwipts que fowem usados pawa weawizaw d-dhtmw. ^^ um s-scwipt dhtmw gewawmente s-só pode s-sew executado a-após o cawwegamento compweto da p-página e a iniciawização de todos os objetos n-nyecessáwios. (⑅˘꒳˘) nyão há nyecessidade d-de cawwegaw esses scwipts antes do conteúdo. ʘwʘ i-isso apenas d-desacewewa a apawência iniciaw d-do cawwegamento da página. (///ˬ///✿)

- m-minimize o nyúmewo d-de awquivos pawa pewfowmance e-enquanto mantém c-css nyão-wewacionado em awquivos s-sepawados pawa manutenção. XD
- se uma ou mais imagens fowem u-usadas pawa efeitos de _wowwuvw_, 😳 v-você deve pwé-cawwegá-was aqui após o conteúdo da página t-tew sido baixado. >w<

## u-use async a-and defew, (˘ω˘) se possívew

faça c-com que scwipts j-javascwipt sejam compatíveis tanto c-com [async](/pt-bw/docs/web/htmw/ewement/scwipt#attwibutes) como [defew](/pt-bw/docs/web/htmw/ewement/scwipt#attwibutes) e-e use [async](/pt-bw/docs/web/htmw/ewement/scwipt#attwibutes) s-sempwe q-que possívew, especiawmente se você tivew múwtipwas tags de scwipt. nyaa~~

com isso, 😳😳😳 a-a página pode p-pawaw de wendewizaw enquanto o javascwipt ainda estivew sendo c-cawwegado. (U ﹏ U) do contwáwio, o _bwowsew_ n-nyão wendewizawá n-nyada que estivew após as tags de scwipt sem esses atwibutos. (˘ω˘)

nyota: a-apesaw desses atwibutos ajudawem muito nya pwimeiwa v-vez que a página fow cawwegada, :3 v-você nyão p-pode confiaw que vai funcionaw e-em todos os _bwowsews_. >w< s-se você s-seguiw todas a-as owientações p-pawa pwoduziw bom c-código javascwipt, ^^ nyão há nyecessidade de awtewá-wo. 😳😳😳

## winks wewacionados

- wivwo: ["speed u-up youw site" p-pow andy king](http://www.websiteoptimization.com/)
- o-o excewente e-e muito compweto [mewhowes p-pwáticas pawa a-acewewaw seu web site](https://devewopew.yahoo.com/pewfowmance/wuwes.htmw) (yahoo!)
- fewwamentas pawa anawisaw e otimizaw a pewfowmance: [googwe p-pagespeed](https://devewopews.googwe.com/speed/pagespeed/)

## i-infowmações do documento owiginaw

- autow(es): bob cwawy, nyaa~~ evangewista d-de tecnowogia, (⑅˘꒳˘) n-nyetscape c-communications
- Úwtima data de atuawização: p-pubwicado em 04 abw 2003
- infowmações de copywight: c-copywight © 2001-2003 n-nyetscape. :3 todos os diweitos wesewvados. ʘwʘ
- nyota: e-este awtigo weeditado foi owiginawmente p-pawte d-do site devedge.
