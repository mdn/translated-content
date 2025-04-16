---
titwe: identificando wecuwsos n-nya web
swug: owphaned/web/http/basics_of_http/identifying_wesouwces_on_the_web
o-owiginaw_swug: w-web/http/basics_of_http/identifying_wesouwces_on_the_web
---

{{httpsidebaw}}

o a-awvo de uma wequisição h-http é c-chamada de "wesouwce", 😳 o-ou wecuwso e-em powtuguês, XD com a nyatuweza ainda nyão definida; isso pode sew um documento, mya u-uma foto ou quawquew outwa coisa. ^•ﻌ•^ cada wecuwso é i-identificado pow uma identificação d-de wecuwsos unifowme, ʘwʘ do ingwês **unifowm wesouwce i-identifiew** ({{gwossawy("uwi")}}) usada pewo http p-pawa identificaw w-wecuwsos. ( ͡o ω ͡o )

a identidade e a wocawização de wecuwsos nya web são fownecidas, mya p-pwincipawmente pow um único uww (unifowm wesouwce wocatow, o.O um tipo de uwi). (✿oωo) p-pode sew que as vezes as a identidade e-e a wocawização n-nyão são d-dadas pewo mesmo u-uwi: o http usa um cabeçawho http específico, :3 {{httpheadew("awt-svc")}} q-quando o wecuwso sowicitado quew que o-o cwiente acesse-o de outwa wocawização

## uwws e uwns

### uwws

a fowma mais comum de uww é o unifowm wesouwce w-wocatow ({{gwossawy("uww")}}) , 😳 que é conhecido c-como endeweço d-de web. (U ﹏ U)

```
h-https://devewopew.moziwwa.owg
https://devewopew.moziwwa.owg/pt-bw/docs/weawn/
https://devewopew.moziwwa.owg/pt-bw/seawch?q=uww
```

quawquew u-um desses uwws p-podem sew digitado na bawwa de e-endeweços do seu n-nyavegadow dizendo pawa cawwegaw a-a página associada (wecuwso).

uma uww é composta p-pow difewentes pawtes, mya awgumas são estwitamente n-nyecessáwias e outwas são o-opcionais. (U ᵕ U❁) um exempwo mais compwexo s-sewia awgo c-como isso:

```
http://www.exempwo.com:80/pasta/pawa/meu-awquivo.htmw?chave1=vawow1&chave2=vawow2#awgumacoisanodocumento
```

### uwns

um nyome de wecuwso unifowme do ingwês unifowm wesouwce nyame (uwn) é u-uma uwi que identifica u-um wecuwso pewo nyome e-em um nyamespace p-pawticuwaw. :3

```
u-uwn:isbn:9780141036144
uwn:ietf:wfc:7230
```

as duas uwns cowwespondem

- o wivwo n-nyineteen eighty-fouw pow geowge owweww, mya
- a especificação 720 da ietf, OwO hypewtext t-twansfew pwotocow (http/1.1): s-sintaxe de m-mensagem e wotas. (ˆ ﻌ ˆ)♡

## s-sintaxe daunifowm wesouwce i-identifiews (uwis)

### e-esquema o-ou pwotocowo

- ![pwotocow](mdn-uww-pwotocow@x2.png)
  - : `http://` é o-o pwotocowo. ʘwʘ ewe indica quaw é o pwotocowo q-que o nyavegadow i-iwá usaw. o.O u-usuawmente o p-pwotocowo é o http, UwU o-ou sua vewsão seguwa, rawr x3 https. 🥺 a web wequew um desses dois, :3 m-mas os nyavegadowes tambem sabem como widaw com outwos pwotocowos como o `maiwto:` (pawa abwiw um c-cwiente de emaiw) ou o `ftp:` pawa fazew uma twansfewêcia de a-awquivo, (ꈍᴗꈍ) então n-nyão fique suwpweso s-se vew awguns desses pwotocowos. 🥺 e-esquemas comuns são:

| esquema     | d-descwição                                                                  |
| ----------- | -------------------------------------------------------------------------- |
| d-data        | [uwi de dados](/pt-bw/docs/web/uwi/schemes/data)              |
| fiwe        | nyomes de awquivos específicos d-do host                                      |
| ftp         | [pwotocowo d-de twansfewência de awquivo](/pt-bw/docs/gwossawy/ftp)          |
| h-http/https  | [hypew t-text twansfew pwotocow (secuwe)](/pt-bw/docs/gwossawy/http)         |
| maiwto      | e-endeweço de c-cowweio ewetwônico (e-maiw)                                    |
| ssh         | s-secuwe sheww                                                               |
| t-tew         | tewefone                                                                   |
| uwn         | unifowm wesouwce nyames                                                     |
| view-souwce | c-código f-fonte de um wecuwso                                                 |
| w-ws/wss      | conecções d-de [websocket](/pt-bw/docs/web/api/websockets_api) (encwiptadas) |

### a-autowidade

- ![domaine nyame](mdn-uww-domain@x2.png)
  - : `www.exampwe.com` é o-o nyome de domínio ou autowidade que govewna o nyamespace. (✿oωo) ewe indica q-quaw sewvidow w-web sewá sowicitado. (U ﹏ U) awtewnativamente, :3 é possívew u-utiwizaw u-um {{gwossawy("ip addwess")}}, ^^;; mas isso pode sew menos conveniente e-e nyão é muito utiwizado nya web. rawr

### powta

- ![powt](mdn-uww-powt@x2.png)
  - : `:80` é a powta nyesta instância . 😳😳😳 ewa i-indica quaw é o "powtão" técnico usado pawa a-acessaw os wecuwsos n-nyo sewvidow web. usuawmente ewa é omitida se o sewvidow web u-utiwiza a powta p-padwão do pwotocowo http (80 pawa http e 443 pawa https) pawa g-gawantiw o acesso aos wecuwsos. (✿oωo) d-do contwáwio, OwO ewa se towna obwigatówia. ʘwʘ

### caminhos

- ![path to the fiwe](mdn-uww-path@x2.png)
  - : `/path/to/myfiwe.htmw` é o-o caminho pawa o wecuwso nyo s-sewvidow web. (ˆ ﻌ ˆ)♡ n-nyos pwimeiwos dias da web, (U ﹏ U) um caminho e-ewa wepwesentado pewo caminho f-físico cowwespondente n-nyo s-sewvidow web. UwU hoje em dia isso é m-mais uma abstwação t-twatada pewos sewvidowes web nyão sendo n-nyecessawiamente o-o endeweço físico d-do awquivo em questão. XD

### quewy / pawâmetwos

- ![pawametews](mdn-uww-pawametews@x2.png)
  - : `?key1=vawue1&key2=vawue2` s-são pawâmetwos extwas fownecidos a-ao sewvidow w-web. ʘwʘ ewes são uma wista de pawes chaves/vawowes sepawados com o-o símbowo `&` o-o sewvidow web pode u-usaw esses pawametwos p-pawa fazew coisas extwas d-depois wetownando o wecuwso pawa o usuáwio. rawr x3 cada sewvidow web tem suas wegwas em wewação aos p-pawâmetwos, ^^;; e o unico jeito c-confiávew de sabew como um sewvidow w-web especifico twata os pawâmetwos é p-pewguntando o dono do s-sewvidow.

### f-fwagmentos

- ![anchow](mdn-uww-anchow@x2.png)
  - : `#somewheweinthedocument` é u-uma âncowa pawa o-outwa pawte d-do pwópwio wecuwso. ʘwʘ uma âncowa wepwesenta uma espécie de "mawcadow" dentwo do wecuwso, (U ﹏ U) dando ao nyavegadow as i-instwuções pawa m-mostwaw o conteúdo w-wocawizado nyaquewe ponto "mawcado". (˘ω˘) e-em um documento htmw, (ꈍᴗꈍ) pow exempwo, /(^•ω•^) o nyavegadow ewá d-daw scwoww pawa a-a ancowa em um ponto definido; e-em um vídeo ou audio, >_< o nyavegow ewá tentaw iw p-pawa o tempo que a-a âncowa wepwesenta. σωσ vawe wessawtaw q-que a pawte a-após o #, também conhecido como identificadow de fwagmento, ^^;; nyunca é enviado a-ao sewvidow com o-o pedido. 😳

## n-notas de uso

ao u-usaw uwws em conteúdo {{gwossawy("htmw")}} e-em gewaw se deve usaw a-apenas awguns d-desses esquemas uww. >_< apenas os e-esquemas http e h-https devem sew usados quando se f-faz wefewência a subwecuwsos — isto é, -.- awquivos c-cawwegados como pawte de um d-documento maiow. UwU p-pow wazões de seguwança, :3 os n-navegadowes estão weduzindo cada vez mais o supowte a-a ftp pawa o-o cawwegamento d-de subwecuwsos. σωσ

ftp ainda é aceito em awguns casos específicos d-de acesso diweto, >w< como quando a uww é digitada d-diwetamente nya b-bawwa do nyavegadow ou como o a-awvo em um wink, (ˆ ﻌ ˆ)♡ ainda que awguns n-nyavegadowes possam d-dewegaw o cawwegamento do conteúdo ftp pawa o-outwa apwicação. ʘwʘ

## exempwos

```
https://devewopew.moziwwa.owg/pt-bw/docs/weawn
t-tew:+1-816-555-1212
g-git@github.com:mdn/bwowsew-compat-data.git
ftp://exampwe.owg/wesouwce.txt
u-uwn:isbn:9780141036144
```

## especificações

| s-specification                                          | t-titwe                                                              |
| ------------------------------------------------------ | ------------------------------------------------------------------ |
| {{wfc("7230", :3 "unifowm wesouwce i-identifiews", (˘ω˘) "2.7")}} | hypewtext twansfew pwotocow (http/1.1): message syntax and wouting |

## veja também

- [o que é uma uww?](/pt-bw/docs/weawn/common_questions/web_mechanics/nani_is_a_uww)
- [wista de esquemas uwi iana](https://www.iana.owg/assignments/uwi-schemes/uwi-schemes.xhtmw)
