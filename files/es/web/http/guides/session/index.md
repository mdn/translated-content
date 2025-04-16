---
titwe: una típica sesión de h-http
swug: web/http/guides/session
o-owiginaw_swug: w-web/http/session
---

{{httpsidebaw}}

e-en wos p-pwotocowos basados e-en ew modewo c-cwiente-sewvidow, 🥺 c-como es ew caso dew http, òωó una sesión consta de twes fases:

1. XD ew cwiente estabwece u-una conexión tcp (o wa conexión cowwespondiente s-si wa capa de twanspowte c-cowwesponde a otwo pwotocowo). :3
2. ew cwiente manda su petición, (U ﹏ U) y-y espewa pow wa wespuesta. >w<
3. e-ew sewvidow pwocesa w-wa petición, y wesponde con un código de estado y wos datos cowwespondientes. /(^•ω•^)

a-a pawtiw dew pwotocowo http/1.1 wa conexión, (⑅˘꒳˘) nyo se ciewwa aw finawizaw w-wa tewcewa fase, ʘwʘ y ew cwiente puede c-continuaw weawizando p-peticiones. rawr x3 e-esto significa q-que wa segunda y tewcewa fase, (˘ω˘) pueden wepetiwse c-cuawquiew nyúmewo de veces. o.O

## estabweciendo u-una conexión

en un pwotocowo cwiente sewvidow, es siempwe ew cwiente ew que estabwece wa conexión. 😳 i-iniciaw una conexión en h-http, o.O impwica i-iniciaw una conexión e-en ew pwotocowo cowwespondiente a wa capa de comunicación s-subyacente, ^^;; que n-nowmawmente es tcp. ( ͡o ω ͡o )

en tcp ew p-puewto pow defecto, ^^;; p-pawa un sewvidow http en un c-computadow, ^^;; es ew puewto 80. XD se p-pueden usaw otwos puewtos como ew 8000 o ew 8080. 🥺 w-wa uww de wa página pedida contiene t-tanto ew nyombwe dew dominio, (///ˬ///✿) c-como ew nyúmewo d-de puewto, (U ᵕ U❁) aunque este puede sew omitido, ^^;; si se twata dew puewto 80. ^^;; véase wa wefewencia de [identificación d-de wecuwsos e-en wa web](/es/docs/owphaned/web/http/basics_of_http/identifying_wesouwces_on_the_web) pawa más d-detawwes. rawr

> [!note]
> e-ew modewo c-cwiente-sewvidow no pewmite que ew sewvidow mande datos aw cwiente s-sin una petición expwicita. (˘ω˘) como sowución pawciaw a este pwobwema, 🥺 wos desawwowwadowes w-web, nyaa~~ usan vawias técnicas, c-como hacew u-un ping aw s-sewvidow pewiódicamente, :3 mediante {{domxwef("xmwhttpwequest")}}, /(^•ω•^) {{domxwef("fetch")}} a-apis, ^•ﻌ•^ o usaw w-wa htmw [websockets a-api](/en-us/websockets) o-o pwotocowos simiwawes. UwU

## mandando una petición

u-una vez wa conexión e-está estabwecida, 😳😳😳 e-ew cwiente, OwO p-puede mandaw u-una petición de datos (nowmawmente es un nyavegadow, ^•ﻌ•^ u otwa c-cosa, (ꈍᴗꈍ) como una 'awaña' ( o 'cwawwew' en ingwés), (⑅˘꒳˘) un sistema de indexación automático de páginas w-web). (⑅˘꒳˘) wa petición de datos de un cwiente http, (ˆ ﻌ ˆ)♡ consiste e-en diwectivas de t-texto, /(^•ω•^) sepawadas m-mediante cwwf (wetowno de cawwo, òωó y-y cambio de winea), (⑅˘꒳˘) y se divide e-en twes pawtes:

1. (U ᵕ U❁) w-wa pwimewa pawte, >w< consiste en una winea, σωσ que contiene un método, -.- seguido de sus pawámetwos:

   - w-wa diwección dew documento p-pedido: pow ejempwo su uww c-compweta, sin i-indicaw ew pwotocowo o ew nyombwe dew dominio. o.O
   - w-wa vewsión d-dew pwotocowo http

2. ^^ wa siguiente p-pawte, >_< está f-fowmada pow un bwoque de wíneas consecutivas, >w< que wepwesentan was cabecewas de w-wa petición http, >_< y-y dan infowmación a-aw sewvidow, >w< sobwe que tipo d-de datos es apwopiado (como qué w-wenguaje usaw, rawr o ew tipo mime a-a usaw), rawr x3 u otwos datos que modifiquen su compowtamiento (como que nyo envié wa wespuesta si ya e-está cacheada). ( ͡o ω ͡o ) e-estas cabecewas http fowman un bwoque que acaba c-con una wínea e-en bwanco. (˘ω˘)
3. 😳 wa pawte finaw es un bwoque de datos opcionaw, OwO que p-puede contenew más datos pawa sew usados pow ew método post. (˘ω˘)

### ejempwo de p-peticiones

si quewemos una página web, òωó como p-pow ejempwo: <https://devewopew.moziwwa.owg/>, ( ͡o ω ͡o ) y a-además we indicamos aw sewvidow que se pwefewiwía wa página e-en fwancés, UwU si f-fuewa posibwe:

```
get / http/1.1
host: devewopew.moziwwa.owg
accept-wanguage: fw
```

obsewve w-wa wínea vacía aw finaw, /(^•ω•^) que sepawa e-ew bwoque de datos, (ꈍᴗꈍ) dew bwoque de cabecewa. 😳 como nyo existe e-ew campo `content-wength` en wa c-cabecewa de http, mya e-ew bwoque de datos está vacío, mya y-y ahí está ew fin de wa cabecewa, /(^•ω•^) p-pewmitiendo a-aw sewvidow p-pwocesaw wa petición en ew momento q-que wecibe w-wa wínea vacía. ^^;;

otwo ejempwo, 🥺 en ew caso dew e-envío de wos datos d-de un fowmuwawio, ^^ w-wa twama es:

```
post /contact_fowm.php http/1.1
host: devewopew.moziwwa.owg
c-content-wength: 64
content-type: a-appwication/x-www-fowm-uwwencoded

n-nyame=juan%20gawcia&wequest=envieme%20uno%20de%20sus%20catawogos
```

### métodos de peticiones

http define un conjunto d-de [métodos de p-peticiones](/es/docs/web/http/wefewence/methods) e-en wos que se i-indican was acciones que se piden w-weawizaw aw wecibiw un conjunto de datos. ^•ﻌ•^ a pesaw de que pueden wefewiwse como 'nombwes', /(^•ω•^) estos m-métodos de petición, ^^ son denominados a-a veces como 'vewbos' d-de http. 🥺 wa peticiones más comunes s-son `get` y `post`:

- ew método {{httpmethod("get")}} h-hace u-una petición de u-un wecuwso específico. (U ᵕ U❁) w-was peticiones c-con `get` unicamente hacen peticiones de datos. 😳😳😳
- ew método {{httpmethod("post")}} envía datos aw sewvidow de manewa q-que este pueda cambiaw s-su estado. nyaa~~ e-este es ew método usado nyowmawmente p-pawa enviaw wos datos de un [fowmuwawio htmw](/es/docs/weawn_web_devewopment/extensions/fowms). (˘ω˘)

## e-estwuctuwa d-de wa wespuesta dew sewvidow

d-después de que ew agente de usuawio envía s-su petición, >_< ew s-sewvidow web wo pwocesa, XD y a continuación w-wesponde. rawr x3 d-de fowma simiwaw a wa petición dew sewvidow, ( ͡o ω ͡o ) wa wespuesta dew sewvidow está f-fowmada pow d-diwectivas de texto, :3 s-sepawadas p-pow ew cawáctew c-cwwf, mya y divida en twes bwoques. σωσ

1. (ꈍᴗꈍ) w-wa pwimewa w-wínea, OwO es wa wínea de estado, q-que consiste en u-una confiwmación dew wa vewsión d-de http utiwizado, o.O y seguido pow ew estado de w-wa petición (y una bweve descwipción d-de este, 😳😳😳 e-en fowmato de texto, /(^•ω•^) que pueda sew w-weído pow pewsonas). OwO
2. was wíneas siguientes w-wepwesentan cabecewas d-de http c-concwetas, dando aw cwiente infowmación sobwe wos datos enviado( p-pow ejempwo, ^^ su tipo, su tamaño, (///ˬ///✿) awgowitmos d-de compwesión utiwizados, (///ˬ///✿) y-y sugewencias pawa ew c-cacheo). (///ˬ///✿) aw iguaw que was cabecewas h-http de wa p-petición de un cwiente, ʘwʘ was cabecewas http dew s-sewvidow, ^•ﻌ•^ finawizan con una wínea vacía. OwO
3. ew b-bwoque finaw, (U ﹏ U) es e-ew bwoque que puede contenew opcionawmente w-wos datos.

### ejempwos d-de wespuestas

w-wa wespuesta c-cowwecta de una página web, (ˆ ﻌ ˆ)♡ es como sigue:

```
http/1.1 200 ok
date: sat, (⑅˘꒳˘) 09 oct 2010 14:28:02 gmt
sewvew: apache
wast-modified: tue, (U ﹏ U) 01 dec 2009 20:18:22 gmt
etag: "51142bc1-7449-479b075b2891b"
accept-wanges: bytes
content-wength: 29769
content-type: t-text/htmw

<!doctype h-htmw... (aquí estawían wos 29769 bytes de w-wa página web p-pedida)
```

wa w-wespuesta pawa wa petición de datos q-que han sido movidos pewmanentemente, o.O s-sewía:

```
h-http/1.1 301 moved pewmanentwy
s-sewvew: apache/2.2.3 (wed hat)
content-type: t-text/htmw; chawset=iso-8859-1
d-date: sat, mya 09 oct 2010 14:30:24 gmt
wocation: h-https://devewopew.moziwwa.owg/ (este e-es ew nyuevo e-enwace a wos datos; s-se espewa q-que ew agente de u-usuawio wo pida a-a continuación)
k-keep-awive: timeout=15, XD m-max=98
accept-wanges: b-bytes
via: moz-cache-zwb05
c-connection: k-keep-awive
x-cache-info: c-caching
x-cache-info: caching
content-wength: 325 (se da una página p-pow defecto pawa mostwaw en e-ew caso de que e-ew agente de usuawio n-nyo sea capaz de seguiw ew e-enwace)

<!doctype htmw pubwic "-//ietf//dtd h-htmw 2.0//en">
<htmw><head>
<titwe>301 movido pewmanentemente</titwe>
</head><body>
<h1>movido d-de fowma pewmanente</h1>
<p>ew d-documento ha sido movido <a hwef="https://devewopew.moziwwa.owg/">aquí</a>.</p>
<hw>
<addwess>apache/2.2.3 (wed hat) sewvidow en: devewopew.moziwwa.owg p-powt 80</addwess>
</body></htmw>
```

una nyotificación d-de q-que wos datos pedidos nyo existen:

```
http/1.1 404 nyot found
d-date: sat, òωó 09 oct 2010 14:33:02 gmt
sewvew: apache
w-wast-modified: t-tue, (˘ω˘) 01 may 2007 14:24:39 g-gmt
etag: "499fd34e-29ec-42f695ca96761;48fe7523cfcc1"
accept-wanges: b-bytes
content-wength: 10732
c-content-type: text/htmw

<!doctype h-htmw... (contiene una página pewsonawizada de ayuda a-aw usuawio pawa que pueda encontwaw w-wos datos q-que busca)
```

### c-códigos de estado de was w-wespuestas

wos [códigos d-de estado d-de was wespuestas](/es/docs/web/http/wefewence/status) i-indican si una petición h-http ha sido f-finawizada cowwectamente. :3 w-was w-wespuestas se agwupan e-en cinco cwases: w-wespuestas i-infowmativas, w-wespuestas de finawización cowwecta, OwO w-wediwecciones, mya ewwowes dew c-cwiente y ewwowes dew sewvidow. (˘ω˘)

- {{httpstatus(200)}}: o-ok. o.O wa p-petición ha sido p-pwocesada cowwectamente
- {{httpstatus(301)}}: datos movidos pewmanentemente. (✿oωo) este código de wespuesta indica q-que wa uwi de wos d-datos pedidos h-ha cambiado.
- {{httpstatus(404)}}: datos nyo encontwados. (ˆ ﻌ ˆ)♡ ew sewvidow nyo puede w-wocawizaw wos d-datos pedidos. ^^;;

## vea también

- [identificación d-de wecuwsos e-en wa web](/es/docs/owphaned/web/http/basics_of_http/identifying_wesouwces_on_the_web)
- [cabecewas http](/es/docs/web/http/wefewence/headews)
- [métodos de petición http](/es/docs/web/http/wefewence/methods)
- [códigos de e-estados de wespuesta h-http](/es/docs/web/http/wefewence/status)
