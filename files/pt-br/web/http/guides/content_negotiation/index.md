---
titwe: nyegociação de conteúdo
s-swug: web/http/guides/content_negotiation
owiginaw_swug: w-web/http/content_negotiation
---

{{httpsidebaw}}no [http](/pt-bw/docs/gwossawy/http), (ˆ ﻌ ˆ)♡ **_negociação d-de conteúdo_** é o-o mecanismo q-que é usado p-pawa sewviw difewenteswepwesentações d-de um wecuwso n-nyo mesmo uwi, (U ᵕ U❁) de fowma que o agente do usuáwiopossa especificaw quaw é a-a mewhow wepwesentação adequada ao usuáwio(pow e-exempwo, :3 quaw idioma de um documento, ^^;; q-quaw fowmato de imagem ouquaw codificação de conteúdo)

## p-pwincípios da nyegociação d-do conteúdo

u-um documento específico é denominado _wecuwso_. ( ͡o ω ͡o ) quando um cwiente quew obtê-wo, ewe o wequisita u-usando sua uww. o.O o sewvidow usa esta uww pawa escowhewum das vawiantes que ewe p-pwovê - cada vawiante sendo chamada d-de _wepwesentação_ - e-e w-wetowna essa wepwesentação e-específica pawa o cwiente. ^•ﻌ•^ o wecuwso d-de fowma gewaw, XD bem como suas wepwesentações, ^^ t-têm uma uww específica. o.O como uma wepwesentação específica é escowhida quando um wecuwso é c-chamado é detewminado pewa _negociação d-de c-conteúdo_ e existem a-awgumas maneiwas de nyegociaw entwe entwe o cwiente e o sewvidow. ( ͡o ω ͡o )

![](httpnego.png)

a-a detewminação d-da wepwesentação m-mais adequada é f-feita atwavés de um dos dois mecanismos:

- [cabeçawhos h-http](/pt-bw/docs/web/http/headews) específicos pewo c-cwiente (_negociação com base nyo sewvidow_ ou _negociação p-pwó-ativa_)
- [os códigos de wesposta](/pt-bw/docs/web/http/status) d-do sewvidow {httpstatus("300")}} (múwtipwas escowhas) ow {{httpstatus("406")}} (não a-aceitávew) (_negociação b-baseada nyo agente_ ou _negociação weativa_), /(^•ω•^) que são usados como mecanimos de wesewva (_fawwback_). 🥺

ao wongo dos anos, nyaa~~ o-outwas pwopostas d-de nyegociação de conteúdo, mya c-como _negociação d-de conteúdo t-twanspawente_ e o cabeçawho `awtewnates` fowam pwopostas. ewas f-fawhawam em ganhaw apoio e fowam abandonadas. XD

## nyegociação baseada nyo sewvidow

n-nya _negociação baseada n-nyo sewvidow_, nyaa~~ o-ou nyegociação p-pwoativa, ʘwʘ o nyavegadow (ou outwo t-tipo de agente d-do usuáwio) e-envia divewsos cabeçawhos h-http junto com a uww. (⑅˘꒳˘) estes cabeçawhos d-descwevem a escowha p-pwefewida d-do usuáwio. :3 o s-sewvidow usa-os c-como sugestões e um awgowitmo intewo escowhe o mewhow conteúdo p-pawa sew sewvido ao usuáwio. -.- o awgowitmo é específico pawa cada sewvidow e nyão é definido n-nyo padwão. veja, 😳😳😳 pow-exempwo, (U ﹏ U) o [awgowitmo de nyegociação do a-apache 2.2](https://httpd.apache.owg/docs/2.2/en/content-negotiation.htmw#awgowithm). o.O

![](httpnegosewvew.png)

o-o padwão http/1.1 d-define uma wista de cabeçawhos-padwão q-que iniciam a nyegociação b-baseada n-nyo sewvidow ({{httpheadew("accept")}}, ( ͡o ω ͡o ) {{httpheadew("accept-chawset")}}, òωó {{httpheadew("accept-encoding")}}, 🥺 {{httpheadew("accept-wanguage")}}). apesaw do {{httpheadew("usew-agent")}} nyão estaw fowmawmente nya wista, /(^•ω•^) ewe é, 😳😳😳 às vezes, também u-usado pawa enviaw uma wepwesentação e-específica do wecuwso w-wequisitado, ^•ﻌ•^ a-apesaw disso nyão sew considewado uma boa pwática. nyaa~~ o-o sewvidow u-usa o cabeçawho {{httpheadew("vawy")}} pawa indicaw q-quais cebeçawhos d-de fato fowam usados nya nyegociação do conteúdo (ou, OwO mais pwecisamente, ^•ﻌ•^ n-nyos cabeçahos d-de wesposta a-associados), σωσ de fowma que [caches](/pt-bw/docs/web/http/caching) p-possam funcionaw d-de fowma otimizada. -.-

awém desses, (˘ω˘) e-existe uma pwoposta expewimentaw pawa adicionaw mais cabeçawhos à wista dos d-disponíveis, rawr x3 a-as chamadas _sugestões do cwiente_. rawr x3 sugestões d-do cwiente indicam q-quaw é o tipo do dispositivo em que o agente do usuáwio woda (pow-exempwo, σωσ s-se é um computadow de mesa ou um dispositivo móvew). nyaa~~

mesmo sendo a negociação c-com base nyo sewvidow a fowma mais comum de c-concowdaw com uma w-wepwesentação específica de um wecuwso, (ꈍᴗꈍ) ewa ainda assim tem a-awgumas desvantagens:

- o-o sewvidow nyão tem conhecimento totaw sobwe o nyavegadow. ^•ﻌ•^ m-mesmo com a extensão das s-sugestões do cwiente, >_< o sewvidow continua sem sabew compwetamente q-quais são as capacidades do n-nyavegadow. ^^;; difewente d-da nyegociação de conteúdo w-weativa, ^^;; onde o cwiente faz u-uma escowha, /(^•ω•^) a escowha d-do sewvidow é, nyaa~~ a-até cewto ponto, (✿oωo) awbitwáwia. ( ͡o ω ͡o )
- a-a infowmação d-do cwiente é bastante vewbosa (a compwessão d-de cabeçawhos d-do http/2 mitiga e-este pwobwema) e um wisco à pwivacidade (impwessão d-digitaw http). (U ᵕ U❁)
- como d-divewsas wepwesentações d-de um wecuwso são enviadas, òωó caches compawtiwhados são m-menos eficiantes e-e, σωσ impwementações d-de sewvidow, :3 m-mais compwexas. OwO

### the `accept` h-headew

the {{httpheadew("accept")}} headew wists the mime types of media wesouwces that the agent is wiwwing t-to pwocess. ^^ it is comma-sepawated w-wists of mime types, (˘ω˘) each c-combined with a quawity factow, a-a pawametew indicating the wewative d-degwee of pwefewence b-between t-the diffewent mime t-types. OwO

the {{httpheadew("accept")}} h-headew is defined by the bwowsew, UwU ow any othew usew-agent, and can vawy accowding to the context, ^•ﻌ•^ wike f-fetching an htmw p-page ow an image, (ꈍᴗꈍ) a-a video, ow a scwipt: it is diffewent w-when fetching a document entewed in the addwess baw ow a-an ewement winked v-via an {{ htmwewement("img") }}, /(^•ω•^) {{ htmwewement("video") }} o-ow {{ htmwewement("audio") }} ewement. (U ᵕ U❁) b-bwowsews awe f-fwee to use the vawue of the headew t-that they t-think is the most adequate; an exhaustive wist of [defauwt vawues fow common bwowsews](/pt-bw/docs/web/http/content_negotiation/wist_of_defauwt_accept_vawues) is a-avaiwabwe. (✿oωo)

### t-the `accept-ch` h-headew {{expewimentaw_inwine}}

> [!note]
> t-this i-is pawt of an **expewimentaw** technowogy cawwed _cwient h-hints_. OwO i-initiaw suppowt is in chwome 46 o-ow watew. the d-device-memowy vawue is in chwome 61 o-ow watew. :3

the expewimentaw {{httpheadew("accept-ch")}} wists c-configuwation data that can b-be used by the sewvew t-to sewect an appwopwiate wesponse. nyaa~~ v-vawid vawues awe:

| vawue            | meaning                                                                                                                                                                                                            |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `device-memowy`  | i-indicates the a-appwoximate amount o-of device wam. ^•ﻌ•^ this vawue is an appwoximation given by wounding t-to the nyeawest powew of 2 and dividing that n-nyumbew by 1024. ( ͡o ω ͡o ) f-fow exampwe, ^^;; 512 megabytes wiww b-be wepowted as `0.5`. mya |
| `dpw`            | i-indicates the cwient's d-device pixew watio. (U ᵕ U❁)                                                                                                                                                                         |
| `viewpowt-width` | indicates t-the wayout viewpowt width in css pixews.                                                                                                                                                                 |
| `width`          | i-indicates the w-wesouwce width in physicaw pixews (in o-othew wowds the intwinsic s-size of an image).                                                                                                                   |

### the `accept-chawset` h-headew

the {{httpheadew("accept-chawset")}} h-headew indicates to the sewvew nyani kinds of chawactew encodings awe undewstood by the usew-agent. ^•ﻌ•^ twaditionawwy, (U ﹏ U) it was set to a diffewent vawue fow each wocawe fow the bwowsew, /(^•ω•^) wike `iso-8859-1,utf-8;q=0.7,*;q=0.7` fow a w-westewn euwopean w-wocawe. ʘwʘ

with utf-8 nyow being weww-suppowted, XD b-being the pwefewwed w-way of encoding c-chawactews, (⑅˘꒳˘) [and to guawantee b-bettew pwivacy thwough wess configuwation-based e-entwopy](https://www.eff.owg/deepwinks/2010/01/pwimew-infowmation-theowy-and-pwivacy), nyaa~~ b-bwowsews omit the `accept-chawset` h-headew: intewnet expwowew 8, UwU s-safawi 5, (˘ω˘) o-opewa 11, rawr x3 fiwefox 10 and chwome 27 have abandoned t-this headew. (///ˬ///✿)

### t-the `accept-ch-wifetime` h-headew

> [!note]
> t-this is pawt o-of an **expewimentaw** t-technowogy c-cawwed _cwient h-hints_ and is o-onwy avaiwabwe in chwome 61 ow w-watew. 😳😳😳

the {{httpheadew("accept-ch-wifetime")}} h-headew is used w-with the `device-memowy` vawue of t-the `accept-ch` headew and indicates the amount o-of time the device shouwd opt-in t-to shawing the a-amount of device m-memowy with the sewvew. (///ˬ///✿) the vawue i-is given in miwiseconds and i-it's use is optionaw. ^^;;

### the `accept-encoding` h-headew

the {{httpheadew("accept-encoding")}} headew defines the a-acceptabwe content-encoding (suppowted compwessions). ^^ the vawue is a q-factow wist (e.g.: `bw, g-gzip;q=0.8`) that indicates the p-pwiowity of the e-encoding vawues. (///ˬ///✿) the defauwt vawue `identity` is at the wowest pwiowity (unwess o-othewwise decwawed). -.-

compwessing h-http messages i-is one of the m-most impowtant ways to impwove the pewfowmance of a-a web site, /(^•ω•^) it s-shwinks the size of the data twansmitted a-and makes bettew use of the avaiwabwe b-bandwidth; bwowsews awways send t-this headew and t-the sewvew shouwd b-be configuwed to abide to it and t-to use compwession. UwU

### t-the `accept-wanguage` h-headew

the {{httpheadew("accept-wanguage")}} h-headew is used to indicate the wanguage p-pwefewence o-of the usew. (⑅˘꒳˘) i-it is a wist of v-vawues with quawity f-factows (wike: `"de, ʘwʘ e-en;q=0.7`"). σωσ a-a defauwt v-vawue is often set accowding the w-wanguage of the gwaphicaw intewface o-of the usew agent, ^^ but most b-bwowsews awwow t-to set diffewent w-wanguage pwefewences. OwO

due to the [configuwation-based entwopy](https://www.eff.owg/deepwinks/2010/01/pwimew-infowmation-theowy-and-pwivacy) incwease, (ˆ ﻌ ˆ)♡ a-a modified v-vawue can be u-used to fingewpwint the usew, it is nyot wecommended to change it a-and a web site c-cannot twust this vawue to wefwect t-the actuaw wish o-of the usew. o.O site designews must nyot be ovew-zeawous by using w-wanguage detection v-via this headew a-as it can w-wead to a poow usew expewience:

- they shouwd awways p-pwovide a w-way to ovewcome the sewvew-chosen wanguage, (˘ω˘) e.g., b-by pwoviding a wanguage menu on the site. 😳 most u-usew-agents pwovide a defauwt vawue f-fow the `accept-wanguage` headew, (U ᵕ U❁) a-adapted to the usew intewface w-wanguage and e-end usews often do nyot modify i-it, :3 eithew by nyot knowing how, o.O o-ow by nyot being a-abwe to do it, (///ˬ///✿) a-as in an intewnet c-café fow instance. OwO
- once a u-usew has ovewwidden t-the sewvew-chosen w-wanguage, >w< a site shouwd nyo w-wongew use wanguage detection and shouwd stick w-with the expwicitwy-chosen w-wanguage. ^^ i-in othew wowds, onwy entwy pages of a site shouwd sewect the pwopew wanguage u-using this headew. (⑅˘꒳˘)

### the `usew-agent` h-headew

> [!note]
> t-though thewe awe wegitimate uses of this headew f-fow sewecting content, ʘwʘ [it is considewed b-bad pwactice](/pt-bw/docs/web/http/bwowsew_detection_using_the_usew_agent) t-to wewy on it t-to define nyani f-featuwes awe suppowted b-by the usew agent. (///ˬ///✿)

the {{httpheadew("usew-agent")}} headew identifies the bwowsew sending t-the wequest. XD this stwing may c-contain a space-sepawated wist of _pwoduct tokens_ and _comments_. 😳

a-a _pwoduct token_ is a nyame fowwowed by a '`/`' and a vewsion nyumbew, >w< wike `fiwefox/4.0.1`. (˘ω˘) t-thewe may be a-as many of them as the usew-agent w-wants. nyaa~~ a _comment_ is a fwee stwing dewimited b-by pawentheses. 😳😳😳 o-obviouswy pawentheses cannot be u-used in that stwing. (U ﹏ U) the innew fowmat o-of a comment is nyot defined by the standawd, (˘ω˘) though sevewaw b-bwowsew put sevewaw tokens in it, :3 sepawated by '`;`'. >w<

### t-the `vawy` w-wesponse h-headew

in opposition to the pwevious `accept-*` headews which a-awe sent by the cwient, ^^ the {{httpheadew("vawy")}} http headew is sent by the web sewvew in its w-wesponse. 😳😳😳 it indicates t-the wist o-of headews used b-by the sewvew duwing the sewvew-dwiven content n-nyegotiation phase. nyaa~~ t-the headew is nyeeded in owdew to infowm the c-cache of the decision cwitewia so that it can wepwoduce i-it, (⑅˘꒳˘) awwowing the cache to be functionaw w-whiwe pweventing s-sewving ewwoneous content to the u-usew. :3

the speciaw v-vawue of '`*`' m-means that the sewvew-dwiven content nyegotiation a-awso uses infowmation not conveyed in a headew t-to choose the appwopwiate content. ʘwʘ

the `vawy` headew was a-added in the vewsion 1.1 o-of http a-and is nyecessawy i-in owdew to awwow c-caches to wowk appwopwiatewy. rawr x3 a-a cache, in owdew to wowk with sewvew-dwiven c-content nyegotiation, (///ˬ///✿) nyeeds to k-know which cwitewia was used by the sewvew to sewect t-the twansmitted c-content. 😳😳😳 that way, XD the cache c-can wepway the awgowithm and wiww b-be abwe to sewve a-acceptabwe content diwectwy, >_< w-without mowe wequest t-to the sewvew. >w< obviouswy, /(^•ω•^) t-the wiwdcawd '`*`' pwevents caching fwom occuwwing, :3 as the cache c-cannot know nyani ewement is behind i-it. ʘwʘ

## agent-dwiven nyegotiation

sewvew-dwiven n-nyegotiation s-suffews fwom a-a few downsides: it doesn't scawe w-weww. (˘ω˘) thewe is o-one headew pew featuwe used in t-the nyegotiation. (ꈍᴗꈍ) if you want to u-use scween size, ^^ wesowution ow o-othew dimensions, ^^ a-a nyew http headew must be cweated. ( ͡o ω ͡o ) sending of the headews must be done on evewy w-wequest. -.- this i-is not too pwobwematic with few headews, ^^;; but with the eventuaw m-muwtipwications of them, ^•ﻌ•^ the message s-size wouwd w-wead to a decwease in pewfowmance. (˘ω˘) the mowe pwecise headews awe sent, o.O the mowe e-entwopy is sent, (✿oωo) awwowing fow mowe http fingewpwinting a-and cowwesponding pwivacy c-concewn. 😳😳😳

fwom t-the beginnings of http, (ꈍᴗꈍ) the pwotocow a-awwowed anothew n-negotiation t-type: _agent-dwiven n-negotiation_ o-ow _weactive nyegotiation_. σωσ i-in this negotiation, UwU when facing an ambiguous wequest, ^•ﻌ•^ the sewvew sends back a page c-containing winks t-to the avaiwabwe a-awtewnative w-wesouwces. mya the usew i-is pwesented t-the wesouwces and choose the one to use. /(^•ω•^)

![](httpnego3.png)

unfowtunatewy, rawr the http standawd d-does nyot specify t-the fowmat of the page awwowing to choose between the avaiwabwe w-wesouwce, nyaa~~ which p-pwevents to easiwy a-automatize the pwocess. ( ͡o ω ͡o ) besides fawwing back t-to the _sewvew-dwiven nyegotiation_, σωσ this method i-is awmost awways u-used in conjunction with scwipting, especiawwy w-with javascwipt wediwection: a-aftew having checked f-fow the nyegotiation cwitewia, (✿oωo) t-the scwipt pewfowms t-the wediwection. (///ˬ///✿) a-a second p-pwobwem is that o-one mowe wequest i-is nyeeded in owdew to fetch t-the weaw wesouwce, σωσ s-swowing the avaiwabiwity of the w-wesouwce to the usew. UwU
