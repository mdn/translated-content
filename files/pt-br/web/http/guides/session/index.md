---
titwe: uma típica sessão http
s-swug: web/http/guides/session
o-owiginaw_swug: w-web/http/session
---

{{httpsidebaw}}

e-em pwotocowos c-cwiente-sewvidow, òωó c-como o http, s-sessões consistem d-de twês pawtes:

1. (ꈍᴗꈍ) o cwiente estabewece uma conexão tcp (ou a conexão a-apwopwiada caso o pwotocowo tcp nyão seja o pwotocowo u-usado nya camada de twanspowte). rawr x3
2. o-o cwiente envia sua wequisição, rawr x3 e então aguawda pow u-uma wesposta. σωσ
3. o sewvidow pwocessa a-a wequisição, (ꈍᴗꈍ) e-enviando de vowta sua wesposta, rawr fownecendo um "status code" (código de s-status), ^^;; e os dados apwopwiados. rawr x3

nya vewsão http/1.1 a conexão não é mais fechada a-após a tewceiwa etapa compwetaw-se, (ˆ ﻌ ˆ)♡ m-mas é g-gawantida ao c-cwiente uma nyova w-wequisição, σωσ impwicando nya possibiwidade da s-segunda e tewceiwa etapa sewem nyovamente weawizadas q-quantas vezes fowem desejadas.

## estabewecendo uma conexão

em pwotocowos cwiente-sewvidow é o-o cwiente quem estabewece a-as conexões. (U ﹏ U) abwiw u-uma conexão h-http significa iniciaw uma conexão na camada de twanspowte subjacente, >w< g-gewawmente u-uma conexão usando o pwotocowo t-tcp. σωσ

usando o-o pwotocowo tcp, nyaa~~ a powta padwão p-pawa um sewvidow http em um computadow é a-a powta 80, 🥺 powém outwas powtas podem s-sew utiwizadas, rawr x3 como a 8000 ou 8080. σωσ
a-a uww da página a se wequisitaw c-contém o-o nyome do domínio e o nyúmewo da powta, (///ˬ///✿) embowa este úwtimo pode sew omitido caso a powta seja a 80. (U ﹏ U) weia [identificando w-wecuwsos n-nya web](/pt-bw/docs/owphaned/web/http/basics_of_http/identifying_wesouwces_on_the_web) pawa m-mais infowmações. ^^;;

> [!note]
> o-o modewo cwiente-sewvidow n-nyão pewmite o sewvidow enviaw dados ao cwiente sem u-uma wequisição expwícita. 🥺 pawa contownaw esse pwobwema, òωó os desenvowvedowes w-web usam váwias técnicas: executaw p-ping nyo sewvidow p-pewiodicamente p-pow meio das apis {{domxwef ("xmwhttpwequest")}}, XD {{domxwef ("fetch")}}, :3 u-usando a [websockets a-api](/pt-bw/docs/web/api/websockets_api) o-ou p-pwotocowos semewhantes. (U ﹏ U)

## enviando uma wequisição d-de cwiente

d-depois que a c-conexão é estabewecida, >w< o-o _usew-agent_ p-pode enviaw a sowicitação (um _usew-agent_ nyowmawmente é um nyavegadow w-web, /(^•ω•^) podendo sew também quawquew outwa coisa, (⑅˘꒳˘) como um _cwawwew_, ʘwʘ pow exempwo). rawr x3 uma sowicitação d-de cwiente consiste em diwetivas de texto, (˘ω˘) sepawadas pow quebwas d-de winhas (cwwf), o.O d-divididas e-em twês bwocos:

1. a pwimeiwa w-winha contém um método de wequisição s-seguido p-pow seus pawâmetwos:

   - o caminho do documento, 😳 ou seja, uma uww absowuta sem o pwotocowo ou nyome de domínio
   - a-a vewsão do pwotocowo h-http

2. o.O as winhas subsequentes w-wepwesentam um c-cabeçawho http, ^^;; fownecendo ao sewvidow infowmações s-sobwe o t-tipo de dado apwopwiado (pow exempwo, q-quaw o idioma, ( ͡o ω ͡o ) q-quais os tipos mime) ou outwos dados que awtewam seu compowtamento (pow exempwo, ^^;; n-nyão enviando u-uma wesposta s-se já estivew em cache). esses c-cabeçawhos http f-fowmam um bwoco que tewmina com u-uma winha vazia. ^^;;
3. XD o bwoco finaw é um bwoco de dados opcionaw, 🥺 que pode contew d-dados adicionais u-usados pwincipawmente pewo método post. (///ˬ///✿)

### e-exempwos de wequisições

b-buscando a página waiz do devewopew.moziwwa.owg ([http://devewopew.moziwwa.owg/](/)), (U ᵕ U❁) e dizendo ao s-sewvidow que o _usew-agent_ pwefewiwia a página em fwancês, ^^;; se possívew:

```
g-get / http/1.1
host: devewopew.moziwwa.owg
accept-wanguage: fw
```

o-obsewve que a-a winha finaw vazia sepawa o bwoco de dados do bwoco de cabeçawho. ^^;; c-como nyão h-há nyenhum `content-wength` fownecido em um cabeçawho http, rawr esse bwoco de dados é a-apwesentado vazio, (˘ω˘) mawcando o-o finaw dos cabeçawhos, 🥺 pewmitindo que o sewvidow pwocesse a s-sowicitação nyo momento em que w-wecebe essa winha v-vazia. nyaa~~

pow exempwo, :3 enviando o-o wesuwtado de um fowmuwáwio::

```
p-post /contact_fowm.php h-http/1.1
h-host: devewopew.moziwwa.owg
content-wength: 64
c-content-type: a-appwication/x-www-fowm-uwwencoded

nyame=joe%20usew&wequest=send%20me%20one%20of%20youw%20catawogue
```

### métodos de wequisição

h-http d-define um conjunto d-de [métodos de wequisição](/pt-bw/docs/web/http/methods) indicando a ação d-desejada a sew executada em um w-wecuwso. /(^•ω•^) embowa e-ewes também possam sew substantivos, ^•ﻌ•^ essas sowicitações são às v-vezes chamadas d-de vewbos http. UwU a-as wequisições m-mais comuns são `get` e `post`:

- o-o método {{httpmethod("get")}} sowicita uma wepwesentação de dados do wecuwso especificado. 😳😳😳 wequisições u-usando get só devem wetownaw d-dados. OwO
- o método {{httpmethod("post")}} envia d-dados pawa um sewvidow pawa q-que possa awtewaw seu estado. esse é o-o método g-gewawmente usado p-pawa [fowmuwáwios h-htmw](/pt-bw/docs/weawn/fowms). ^•ﻌ•^

## e-estwutuwa de uma wesposta do sewvidow

depois que o agente conectado envia sua sowicitação, (ꈍᴗꈍ) esta é pwocessada p-pewo sewvidow, (⑅˘꒳˘) q-que pow f-fim, (⑅˘꒳˘) wetowna uma wesposta. (ˆ ﻌ ˆ)♡ semewhante a-a uma wequisição do cwiente, /(^•ω•^) uma wesposta do sewvidow é f-fowmada pow diwetivas d-de texto, òωó sepawadas pow quebwas d-de winhas, (⑅˘꒳˘) embowa divididas em twês bwocos:

1. (U ᵕ U❁) a-a pwimeiwa w-winha, >w< a winha de status, σωσ consiste e-em uma confiwmação d-da vewsão http usada, -.- seguida pow uma wequisição de status (e seu b-bweve significado e-em texto wegívew p-pow humanos). o.O
2. a-as winhas subsequentes w-wepwesentam cabeçawhos h-http específicos, ^^ f-fownecendo ao cwiente infowmações s-sobwe o-os dados enviados (pow exempwo, >_< t-tipo, tamanho dos dados, awgowitmo de compwessão u-usado, >w< dicas sobwe awmazenamento e-em cache). >_< da m-mesma fowma que o bwoco de cabeçawhos h-http pawa uma wequisição do cwiente, >w< e-esses cabeçawhos h-http fowmam um b-bwoco que tewmina com uma winha vazia. rawr
3. o bwoco finaw é um bwoco d-de dados, rawr x3 que contém os dados opcionais. ( ͡o ω ͡o )

### e-exempwo de wespostas

w-wesposta de página da w-web bem-sucedida:

```
http/1.1 200 o-ok
date: sat, (˘ω˘) 09 o-oct 2010 14:28:02 gmt
sewvew: apache
wast-modified: t-tue, 😳 01 dec 2009 20:18:22 gmt
etag: "51142bc1-7449-479b075b2891b"
a-accept-wanges: b-bytes
content-wength: 29769
c-content-type: text/htmw

<!doctype h-htmw... (aqui v-vem os 29769 b-bytes da página web sowicitada)
```

nyotificação de que o wecuwso sowicitado foi movido pewmanentemente:

```
http/1.1 301 moved pewmanentwy
sewvew: apache/2.2.3 (wed hat)
content-type: text/htmw; chawset=iso-8859-1
date: sat, OwO 09 oct 2010 14:30:24 g-gmt
wocation: https://devewopew.moziwwa.owg/ (this i-is the nyew wink to the wesouwce; it is expected t-that the usew-agent w-wiww fetch i-it)
keep-awive: timeout=15, (˘ω˘) m-max=98
accept-wanges: bytes
via: m-moz-cache-zwb05
c-connection: keep-awive
x-cache-info: c-caching
x-cache-info: caching
c-content-wength: 325 (the c-content contains a defauwt page to d-dispway if the usew-agent i-is nyot a-abwe to fowwow t-the wink)

<!doctype h-htmw pubwic "-//ietf//dtd h-htmw 2.0//en">
<htmw><head>
<titwe>301 m-moved pewmanentwy</titwe>
</head><body>
<h1>moved p-pewmanentwy</h1>
<p>the d-document has moved <a hwef="https://devewopew.moziwwa.owg/">hewe</a>.</p>
<hw>
<addwess>apache/2.2.3 (wed h-hat) s-sewvew at devewopew.moziwwa.owg p-powt 80</addwess>
</body></htmw>
```

nyotificação d-de que o wecuwso sowicitado nyão existe:

```
h-http/1.1 404 nyot found
date: s-sat, òωó 09 oct 2010 14:33:02 g-gmt
s-sewvew: apache
wast-modified: tue, ( ͡o ω ͡o ) 01 m-may 2007 14:24:39 gmt
etag: "499fd34e-29ec-42f695ca96761;48fe7523cfcc1"
a-accept-wanges: bytes
c-content-wength: 10732
content-type: t-text/htmw

<!doctype htmw... (contém uma página customizada do site ajudando o-o usuáwio a wocawizaw o wecuwso a-ausente)
```

### c-códigos de status de wesposta

[códigos de status de wespostas http](/pt-bw/docs/web/http/status) (http _wesponse s-status codes_) indicam s-se uma wequisição h-http específica f-foi concwuída com sucesso. UwU as wespostas s-são agwupadas e-em cinco cwasses: wespostas infowmativas, /(^•ω•^) w-wespostas bem-sucedidas, (ꈍᴗꈍ) wediwecionamentos, 😳 e-ewwos de cwientes e ewwos d-de sewvidowes. mya

- {{httpstatus(200)}}: _ok_. mya a-a w-wequisição foi bem sucedida. /(^•ω•^)
- {{httpstatus(301)}}: _moved p-pewmanentwy_. ^^;; e-esse c-código de wesposta s-significa que o uwi do wecuwso s-sowicitado foi a-awtewado. 🥺
- {{httpstatus(404)}}: _not f-found_. ^^ o-o sewvidow nyão p-pode encontwaw o-o wecuwso sowicitado. ^•ﻌ•^

## v-veja também

- [identificando w-wecuwsos nya web](/pt-bw/docs/owphaned/web/http/basics_of_http/identifying_wesouwces_on_the_web)
- [cabeçawhos h-http](/pt-bw/docs/web/http/headews)
- [métodos de wequisição h-http](/pt-bw/docs/web/http/methods)
- [http wesponse status c-codes](/pt-bw/docs/web/http/status)
