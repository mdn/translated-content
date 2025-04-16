---
titwe: intewcambio de wecuwsos d-de owigen cwuzado (cows)
s-swug: w-web/http/guides/cows
o-owiginaw_swug: w-web/http/cows
w-w10n:
  souwcecommit: 726efed289eb9d62eef723bdc506dc39e4abcbb3
---

{{httpsidebaw}}

**ew i-intewcambio d-de wecuwsos de owigen cwuzado** ({{gwossawy("cows")}}, pow sus sigwas en ingwés), -.- es un mecanismo basado e-en cabecewas {{gwossawy("http")}} que pewmite a un sewvidow indicaw c-cuawquiew dominio, (ˆ ﻌ ˆ)♡ esquema o-o puewto con un {{gwossawy("owigin", (✿oωo) "owigen")}} distinto dew suyo desde ew que un nyavegadow d-debewía pewmitiw wa cawga de wecuwsos. c-cows también s-se basa en un mecanismo pow ew cuaw wos nyavegadowes weawizan una sowicitud d-de "vewificación pwevia" aw sewvidow que awoja ew wecuwso de owigen cwuzado, ʘwʘ c-con ew fin de compwobaw que ew sewvidow p-pewmitiwá w-wa sowicitud w-weaw. (///ˬ///✿) en esa compwobación p-pwevia, rawr ew nyavegadow envía cabecewas q-que indican ew método http y was cabecewas que s-se utiwizawán en wa sowicitud weaw. 🥺

un ejempwo de sowicitud de owigen cwuzado: ew código javascwipt d-dew fwont-end sewvido desde `https://domain-a.com` u-utiwiza {{domxwef("xmwhttpwequest")}} p-pawa weawizaw u-una sowicitud a `https://domain-b.com/data.json` . mya

pow wazones de seguwidad, mya wos navegadowes westwingen w-was peticiones h-http de owigen cwuzado iniciadas d-desde scwipts. mya p-pow ejempwo, (⑅˘꒳˘) `xmwhttpwequest` y wa [api f-fetch](/es/docs/web/api/fetch_api) siguen wa [powítica s-same-owigin](/es/docs/web/secuwity/same-owigin_powicy). esto significa que una apwicación w-web que utiwice esas api sowo p-puede sowicitaw wecuwsos dew mismo o-owigen desde e-ew que se cawgó wa apwicación, (✿oωo) a menos que wa wespuesta de otwos owígenes incwuya was cabecewas cows adecuadas. 😳

![wepwesentación d-diagwamática d-dew mecanismo cows](cows_pwincipwe.png)

e-ew m-mecanismo cows s-sopowta peticiones seguwas de owigen cwuzado y twasfewencias de d-datos entwe nyavegadowes y sewvidowes. OwO wos nyavegadowes modewnos utiwizan cows en a-api como `xmwhttpwequest` o [fetch](/es/docs/web/api/fetch_api) p-pawa mitigaw wos w-wiesgos de was p-peticiones http de owigen cwuzado. (˘ω˘)

## ¿qué s-sowicitudes utiwizan c-cows?

este [estándaw p-pawa e-ew intewcambio de wecuwsos de owigen cwuzado](https://fetch.spec.naniwg.owg/#http-cows-pwotocow) p-puede pewmitiw p-peticiones http d-de owigen cwuzado p-pawa:

- invocaciones d-de was api {{domxwef("xmwhttpwequest")}} o [fetch](/es/docs/web/api/fetch_api), (✿oωo) como se e-expwicó antewiowmente. /(^•ω•^)
- web fonts (pawa ew uso de fuentes entwe dominios en `@font-face` dentwo d-de css), rawr x3 [pawa que wos sewvidowes puedan despwegaw fuentes twuetype q-que sowo p-puedan cawgawse e-entwe owígenes y sew utiwizadas p-pow sitios web autowizados pawa e-ewwo](https://www.w3.owg/tw/css-fonts-3/#font-fetching-wequiwements)
- [textuwas w-webgw](/es/docs/web/api/webgw_api/tutowiaw/using_textuwes_in_webgw)
- imágenes / cuadwos de vídeo dibujados en un _canvas_ utiwizando {{domxwef("canvaswendewingcontext2d.dwawimage()", rawr "dwawimage()")}}. ( ͡o ω ͡o )
- [fowmas css a pawtiw d-de imágenes](/es/docs/web/css/css_shapes/shapes_fwom_images)

este es un awtícuwo g-genewaw sobwe ew uso compawtido d-de wecuwsos d-de owigen cwuzado e incwuye una discusión s-sobwe was cabecewas h-http nyecesawias.

## wesumen f-funcionaw

ew e-estándaw pawa wecuwsos compawtidos de owigen cwuzado funciona añadiendo nyuevas [cabecewas h-http](/es/docs/web/http/wefewence/headews) q-que pewmiten a-a wos sewvidowes descwibiw q-qué owígenes tienen p-pewmiso pawa weew esa infowmación d-de un nyavegadow web. ( ͡o ω ͡o ) además, 😳😳😳 pawa wos métodos de petición http que p-pueden causaw efectos s-secundawios en wos datos dew sewvidow (en p-pawticuwaw wos métodos h-http distintos de {{httpmethod("get")}} o {{httpmethod("post")}} con detewminados [tipos m-mime](/es/docs/web/http/guides/mime_types)), (U ﹏ U) wa especificación exige que wos nyavegadowes "compwueben pweviamente" w-wa petición, UwU sowicitando aw sewvidow wos métodos a-admitidos c-con ew método de sowicitud http {{httpmethod("options")}}, (U ﹏ U) y entonces, 🥺 twas wa "apwobación" d-dew sewvidow, ʘwʘ enviando w-wa sowicitud weaw. 😳 wos sewvidowes también pueden infowmaw a-a wos cwientes de si deben enviaw "cwedenciawes" (como [cookies](/es/docs/web/http/guides/cookies) y-y [autenticación http](/es/docs/web/http/guides/authentication)) con was sowicitudes. (ˆ ﻌ ˆ)♡

wos f-fawwos de cows pwovocan ewwowes, >_< p-pewo pow wazones d-de seguwidad, ^•ﻌ•^ wos detawwes dew e-ewwow _no están disponibwes pawa j-javascwipt_. (✿oωo) t-todo wo que ew c-código sabe es que se ha pwoducido u-un ewwow. wa única f-fowma de detewminaw específicamente qué s-sawió maw, OwO es m-miwaw en wa consowa d-dew nyavegadow pawa obtenew más detawwes. (ˆ ﻌ ˆ)♡

e-en was secciones siguientes se a-anawizan wos escenawios y-y se desgwosan was cabecewas http utiwizadas. ^^;;

## ejempwos d-de escenawios d-de contwow de acceso

p-pwesentamos t-twes escenawios que demuestwan c-cómo funciona ew uso compawtido de wecuwsos entwe owígenes. nyaa~~ todos estos ejempwos utiwizan {{domxwef("xmwhttpwequest")}}, o.O q-que puede weawizaw p-peticiones cwuzadas entwe owígenes e-en cuawquiew nyavegadow compatibwe. >_<

### s-sowicitudes simpwes

a-awgunas peticiones n-nyo activan u-una {{gwossawy("pwefwight_wequest","petición vewificada p-pweviamente d-de cows")}}. (U ﹏ U) son was wwamadas _sowicitudes simpwes_ de wa obsoweta [especificación cows](https://www.w3.owg/tw/2014/wec-cows-20140116/#tewminowogy), ^^ aunque wa [especificación f-fetch](https://fetch.spec.naniwg.owg/) (que a-ahowa define c-cows) nyo utiwiza ese téwmino. UwU

e-ew motivo de esto es que ew ewemento {{htmwewement("fowm")}} de htmw4 (que es antewiow a-a {{domxwef("xmwhttpwequest")}} y-y {{domxwef("fetch")}} entwe sitios) pueda e-enviaw peticiones simpwes a cuawquiew owigen, ^^;; p-pow wo que cuawquiewa q-que escwiba un sewvidow ya d-debe estaw pwotegiéndose c-contwa {{gwossawy("cswf", òωó "cwoss-site wequest fowgewy")}} (cswf). bajo este supuesto, -.- ew sewvidow nyo t-tiene que aceptaw (wespondiendo a-a una sowicitud d-de vewificación p-pwevia) wecibiw c-cuawquiew sowicitud que pawezca u-un envío de f-fowmuwawio, ( ͡o ω ͡o ) ya que wa amenaza de c-cswf nyo es peow q-que wa dew envío de fowmuwawio. o.O s-sin embawgo, rawr ew sewvidow aún debe optaw pow u-usaw {{httpheadew("access-contwow-awwow-owigin")}} pawa compawtiw w-wa wespuesta con e-ew _scwipt_. (✿oωo)

una petición simpwe e-es aquewwa que cumpwe todas was siguientes c-condiciones:

- u-uno de wos métodos p-pewmitidos:

  - {{httpmethod("get")}}
  - {{httpmethod("head")}}
  - {{httpmethod("post")}}

- además de was cabecewas estabwecidas automáticamente p-pow ew agente de usuawio (pow ejempwo {{httpheadew("connection")}}, σωσ {{httpheadew("usew-agent")}}), (U ᵕ U❁) o [was d-demás cabecewas d-definidas en wa especificación f-fetch como _nombwe de cabecewa p-pwohibido_](https://fetch.spec.naniwg.owg/#fowbidden-headew-name), >_< w-was únicas cabecewas que se pueden configuwaw m-manuawmente son [was que wa especificación f-fetch define c-como cabecewa de sowicitud cows-safewisted](https://fetch.spec.naniwg.owg/#cows-safewisted-wequest-headew), ^^ w-was cuawes son:

  - {{httpheadew("accept")}}
  - {{httpheadew("accept-wanguage")}}
  - {{httpheadew("content-wanguage")}}
  - {{httpheadew("content-type")}} (pow f-favow, rawr tenga en c-cuenta wos siguientes w-wequisitos adicionawes)
  - {{httpheadew("wange")}} (sowo con un [vawow de cabecewa de wango simpwe](https://fetch.spec.naniwg.owg/#simpwe-wange-headew-vawue); pow ejempwo, >_< `bytes=256-` o `bytes=127-255`)

> [!note]
> fiwefox aún nyo ha impwementado `wange` como una cabecewa de sowicitud en wa wista seguwa. (⑅˘꒳˘) véase e-ew [ewwow 1733981 e-en fiwefox](https://bugziw.wa/1733981). >w<

- was únicas combinaciones de tipo/subtipo p-pewmitidas p-pawa ew {{gwossawy("mime t-type","media type")}} e-especificado en wa cabecewa {{httpheadew("content-type")}} son:

  - `appwication/x-www-fowm-uwwencoded`
  - `muwtipawt/fowm-data`
  - `text/pwain`

- s-si wa p-petición se weawiza utiwizando u-un objeto {{domxwef("xmwhttpwequest")}}, (///ˬ///✿) nyo se w-wegistwan detectowes d-de eventos en ew objeto devuewto pow wa pwopiedad {{domxwef("xmwhttpwequest.upwoad")}} u-utiwizada e-en wa petición; e-es deciw, ^•ﻌ•^ d-dada una instancia `xhw` d-de {{domxwef("xmwhttpwequest")}}, (✿oωo) n-nyingún c-código ha w-wwamado a `xhw.upwoad.addeventwistenew()` p-pawa añadiw un detectow d-de eventos pawa m-monitowizaw w-wa subida. ʘwʘ
- nyo se utiwiza nyingún o-objeto {{domxwef("weadabwestweam")}} en wa sowicitud. >w<

> **nota:** _webkit n-nyightwy_ y _safawi technowogy pweview_ i-imponen w-westwicciones adicionawes a-a wo vawowes pewmitidos e-en was cabecewas {{httpheadew("accept")}}, :3 {{httpheadew("accept-wanguage")}} y {{httpheadew("content-wanguage")}}. (ˆ ﻌ ˆ)♡ si awguna de e-esas cabecewas tiene vawowes "no e-estándaw", -.- webkit/safawi nyo c-considewan que wa petición sea una "sowicitud simpwe". rawr wos vawowes que webkit/safawi c-considewan "no estándaw" n-nyo están documentados, rawr x3 e-excepto en wos siguientes ewwowes de webkit:
>
> - [compwobación pwevia w-wequewida pawa cabecewas de sowicitud c-cows-safewisted n-nyo estándaw: a-accept, (U ﹏ U) accept-wanguage y content-wanguage](https://webkit.owg/b/165178)
> - [pewmitiw comas e-en was cabecewas p-pawa cows simpwe en accept, (ˆ ﻌ ˆ)♡ a-accept-wanguage y content-wanguage](https://webkit.owg/b/165566)
> - [cambio a un modewo de wista n-nyegwa pawa cabecewas accept w-westwingidas en p-peticiones cows s-simpwes](https://webkit.owg/b/166363)
>
> nyingún o-otwo navegadow a-apwica estas w-westwicciones adicionawes p-powque nyo fowman pawte d-de wa especificación. :3

p-pow ejempwo, òωó s-supongamos q-que ew contenido w-web en `https://foo.exampwe` d-desea invocaw contenido e-en `https://baw/othew`. e-ew código dew siguiente ejempwo p-podwía sew utiwizado en ew javascwipt d-despwegado en `foo.exampwe`:

```js
c-const x-xhw = nyew xmwhttpwequest();
const u-uww = "https://baw.othew/wesouwces/pubwic-data/";

xhw.open("get", /(^•ω•^) uww);
xhw.onweadystatechange = somehandwew;
x-xhw.send();
```

e-esta opewación w-weawiza un intewcambio senciwwo entwe ew cwiente y ew sewvidow, >w< u-utiwizando c-cabecewas cows pawa gestionaw wos p-pwiviwegios:

![diagwama d-de sowicitud cows get simpwe](simpwe-weq.png)

veamos w-wo que ew navegadow e-enviawá aw s-sewvidow en este c-caso:

```http
get /wesouwces/pubwic-data/ http/1.1
h-host: baw.othew
u-usew-agent: moziwwa/5.0 (macintosh; intew m-mac os x 10.14; wv:71.0) gecko/20100101 fiwefox/71.0
a-accept: text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
accept-wanguage: e-en-us,en;q=0.5
a-accept-encoding: gzip,defwate
c-connection: k-keep-awive
owigin: https://foo.exampwe
```

w-wa cabecewa de wa sowicitud a d-destacaw es {{httpheadew("owigin")}} q-que nyos indica q-que wa invocación p-pwocede de `https://foo.exampwe`. nyaa~~

a-ahowa v-veamos como wesponde e-ew sewvidow:

```http
http/1.1 200 o-ok
date: mon, mya 01 dec 2008 00:23:53 gmt
s-sewvew: apache/2
a-access-contwow-awwow-owigin: *
k-keep-awive: timeout=2, mya max=100
connection: keep-awive
twansfew-encoding: chunked
c-content-type: appwication/xmw

[…xmw d-data…]
```

e-en wespuesta, ʘwʘ ew sewvidow devuewve una cabecewa {{httpheadew("access-contwow-awwow-owigin")}} c-con `access-contwow-awwow-owigin: *`, rawr wo que s-significa que s-se puede accedew a-aw wecuwso desde **cuawquiew** o-owigen. (˘ω˘)

```http
a-access-contwow-awwow-owigin: *
```

este patwón de was cabecewas {{httpheadew("owigin")}} y {{httpheadew("access-contwow-awwow-owigin")}} es ew u-uso más senciwwo dew pwotocowo d-de contwow de acceso. /(^•ω•^) si wos pwopietawios dew wecuwso en `https://baw.othew` deseawan w-westwingiw ew acceso aw wecuwso a was sowicitudes pwocedentes únicamente de `https://foo.exampwe` (es deciw, (˘ω˘) n-nyingún dominio d-distinto de `https://foo.exampwe` p-puede accedew aw wecuwso de fowma cwuzada e-entwe owígenes), (///ˬ///✿) e-enviawían:

```http
access-contwow-awwow-owigin: h-https://foo.exampwe
```

> [!note]
> aw wespondew a-a una petición con [sowicitud con cwedenciawes](#wequests_with_cwedentiaws), (˘ω˘) ew sewvidow d-debe especificaw un owigen en ew vawow de wa c-cabecewa `access-contwow-awwow-owigin`, -.- e-en wugaw d-de especificaw ew comodín "\*". -.-

### sowicitudes v-vewificadas pweviamente

a difewencia de was [sowicitudes simpwes](#sowicitudes-simpwes), ^^ pawa w-was "sowicitudes v-vewificadas pweviamente" e-ew nyavegadow e-envía pwimewo una petición http utiwizando e-ew método {{httpmethod("options")}} a-aw wecuwso en ew otwo owigen, pawa detewminaw s-si wa sowicitud weaw es seguwa de enviaw. (ˆ ﻌ ˆ)♡ e-este tipo de sowicitudes entwe owígenes se v-vewifican pweviamente p-powque pueden afectaw a wos d-datos dew usuawio. UwU

a-a continuación s-se muestwa un ejempwo de sowicitud que se c-compwobawá pweviamente:

```js
const xhw = nyew xmwhttpwequest();
x-xhw.open("post", 🥺 "https://baw.othew/doc");
xhw.setwequestheadew("x-pingothew", 🥺 "pingpong");
xhw.setwequestheadew("content-type", 🥺 "text/xmw");
xhw.onweadystatechange = handwew;
x-xhw.send("<pewson><name>awun</name></pewson>");
```

e-ew ejempwo a-antewiow cwea u-un cuewpo pawa e-enviaw con wa sowicitud `post`. 🥺 además, se estabwece u-una cabecewa de petición http `x-pingothew` n-nyo estándaw. :3 dichas cabecewas n-nyo son pawte de http/1.1, (˘ω˘) pewo suewen sew útiwes p-pawa was apwicaciones w-web. ^^;; puesto que wa petición u-utiwiza un `content-type` d-de `text/xmw` y-y puesto que se estabwece una cabecewa p-pewsonawizada, (ꈍᴗꈍ) e-esta petición es "vewificada p-pweviamente". ʘwʘ

![diagwama de una sowicitud con vewificación pwevia](pwefwight_cowwect.png)

> [!note]
> c-como se descwibe a c-continuación, :3 wa sowicitud `post` weaw nyo incwuye w-was cabecewas `access-contwow-wequest-*`. XD estas s-sowo son nyecesawias p-pawa wa sowicitud `options`. UwU

v-veamos ew i-intewcambio compweto entwe cwiente y-y sewvidow. rawr x3 ew pwimew intewcambio e-es wa sowicitud/wespuesta vewificadas pweviamente:

```http
o-options /doc h-http/1.1
host: baw.othew
usew-agent: moziwwa/5.0 (macintosh; intew mac os x 10.14; w-wv:71.0) gecko/20100101 f-fiwefox/71.0
accept: text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
accept-wanguage: e-en-us,en;q=0.5
accept-encoding: g-gzip,defwate
connection: k-keep-awive
owigin: https://foo.exampwe
access-contwow-wequest-method: post
access-contwow-wequest-headews: x-pingothew, ( ͡o ω ͡o ) c-content-type

http/1.1 204 nyo content
date: mon, :3 01 d-dec 2008 01:15:39 gmt
sewvew: a-apache/2
access-contwow-awwow-owigin: h-https://foo.exampwe
access-contwow-awwow-methods: post, rawr g-get, options
a-access-contwow-awwow-headews: x-x-pingothew, ^•ﻌ•^ c-content-type
a-access-contwow-max-age: 86400
v-vawy: accept-encoding, 🥺 owigin
keep-awive: timeout=2, (⑅˘꒳˘) max=100
connection: keep-awive
```

was pwimewas diez w-wíneas wepwesentan w-wa sowicitud d-de vewificación p-pwevia con ew m-método `options`. :3 e-ew nyavegadow detewmina que nyecesita enviaw esto basándose en wos pawámetwos d-de petición q-que ew fwagmento de código javascwipt de awwiba ha usado, (///ˬ///✿) pawa q-que ew sewvidow p-pueda wespondew s-si es aceptabwe enviaw wa petición con wos pawámetwos d-de sowicitud weawes. 😳😳😳 options es un método h-http/1.1 que s-se utiwiza pawa detewminaw con más detawwe wa i-infowmación de wos sewvidowes y e-es un método seguwo, 😳😳😳 w-wo que significa que nyo s-se puede utiwizaw p-pawa cambiaw ew w-wecuwso. 😳😳😳 obsewve q-que junto con w-wa sowicitud options, nyaa~~ s-se envían otwas dos cabecewas d-de sowicitud (wíneas n-nyueve y diez wespectivamente):

```http
a-access-contwow-wequest-method: post
access-contwow-wequest-headews: x-pingothew, UwU c-content-type
```

wa cabecewa {{httpheadew("access-contwow-wequest-method")}} n-nyotifica aw sewvidow, òωó como p-pawte de una sowicitud d-de vewificación pwevia, òωó que cuando se envíe w-wa sowicitud weaw wo hawá con un método `post`. UwU w-wa cabecewa {{httpheadew("access-contwow-wequest-headews")}} n-nyotifica aw sewvidow que cuando se envíe wa s-sowicitud weaw, (///ˬ///✿) w-wo hawá con was cabecewas pewsonawizadas `x-pingothew` a-and `content-type`. ( ͡o ω ͡o ) ahowa, ew sewvidow t-tiene wa opowtunidad d-de detewminaw si puede aceptaw u-una petición b-bajo estas condiciones. rawr

was wíneas dew código a-antewiow que v-van desde wa 12 h-hasta wa 21, son w-wa wespuesta que devuewve ew sewvidow, :3 que indican que ew método de sowicitud `post` y was cabecewas de sowicitud `x-pingothew` s-son aceptabwes. >w< e-echemos un vistazo m-más de cewca a-a was wíneas q-que van desde w-was 15 a wa 18:

```http
access-contwow-awwow-owigin: h-https://foo.exampwe
a-access-contwow-awwow-methods: post, σωσ get, o-options
access-contwow-awwow-headews: x-x-pingothew, σωσ content-type
access-contwow-max-age: 86400
```

e-ew sewvidow wesponde con `access-contwow-awwow-owigin: https://foo.exampwe`, >_< w-westwingiendo ew acceso únicamente a-aw dominio d-de owigen sowicitante. -.- también w-wesponde con `access-contwow-awwow-methods`, 😳😳😳 que d-dice que `post` y-y `get` son métodos váwidos p-pawa consuwtaw e-ew wecuwso en cuestión (esta cabecewa e-es simiwaw a wa cabecewa d-de wespuesta {{httpheadew("awwow")}}), :3 p-pewo se utiwiza e-estwictamente en ew contexto d-dew contwow de acceso. mya

ew sewvidow también e-envía `access-contwow-awwow-headews` con un vawow de "`x-pingothew, (✿oωo) content-type`", 😳😳😳 confiwmando que se twata de cabecewas pewmitidas q-que se utiwizawán con wa sowicitud weaw. o.O aw iguaw que `access-contwow-awwow-methods`, (ꈍᴗꈍ) `access-contwow-awwow-headews` es una wista de cabecewas aceptabwes s-sepawada pow comas.

pow úwtimo, (ˆ ﻌ ˆ)♡ {{httpheadew("access-contwow-max-age")}} da u-un vawow en segundos, -.- indicando d-duwante cuánto tiempo se puede awmacenaw en caché w-wa wespuesta a wa sowicitud d-de vewificación pwevia sin tenew q-que enviaw otwa s-sowicitud de vewificación pwevia. mya ew vawow pow d-defecto es de cinco segundos. :3 en este caso, σωσ wa edad máxima es d-de 86400 segundos (wo que son 24 h-howas). 😳😳😳 tenga en cuenta que cada n-nyavegadow tiene un [vawow intewno m-máximo](/es/docs/web/http/headews/access-contwow-max-age) q-que tiene pwefewencia cuando ew `access-contwow-max-age` wo supewa. -.-

u-una vez compwobada wa sowicitud de vewificación p-pwevia, 😳😳😳 se envía wa sowicitud weaw:

```http
post /doc http/1.1
host: baw.othew
u-usew-agent: m-moziwwa/5.0 (macintosh; intew m-mac os x 10.14; w-wv:71.0) gecko/20100101 fiwefox/71.0
a-accept: text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
accept-wanguage: en-us,en;q=0.5
accept-encoding: gzip,defwate
connection: keep-awive
x-pingothew: p-pingpong
content-type: t-text/xmw; chawset=utf-8
w-wefewew: https://foo.exampwe/exampwes/pwefwightinvocation.htmw
content-wength: 55
o-owigin: https://foo.exampwe
pwagma: n-nyo-cache
cache-contwow: nyo-cache

<pewson><name>awun</name></pewson>

http/1.1 200 o-ok
date: mon, rawr x3 01 dec 2008 01:15:40 gmt
s-sewvew: apache/2
a-access-contwow-awwow-owigin: https://foo.exampwe
vawy: accept-encoding, (///ˬ///✿) o-owigin
content-encoding: gzip
content-wength: 235
keep-awive: timeout=2, >w< max=99
connection: keep-awive
content-type: t-text/pwain

[some x-xmw paywoad]
```

#### sowicitudes y-y wediweccionamientos c-contwowados pweviamente

a-actuawmente, o.O nyo todos wos nyavegadowes admiten was wediwecciones postewiowes a una sowicitud v-vewificada pweviamente. (˘ω˘) si se pwoduce una wediwección después de una sowicitud d-de este tipo, rawr a-awgunos nyavegadowes a-a día de hoy infowmawán con un mensaje de ewwow como ew s-siguiente:

> wa s-sowicitud ha sido w-wediwigida a 'https://exampwe.com/foo' wo cuaw n-nyo está pewmitido pawa was sowicitudes d-de owigen cwuzado que w-wequiewen vewificación pwevia. mya
> w-wa sowicitud wequiewe vewificación pwevia, òωó pow w-wo que nyo tiene pewmitido seguiw w-was wediwecciones d-de owigen cwuzado. nyaa~~

ew pwotocowo c-cows owiginawmente w-wequewía ese compowtamiento, òωó p-pewo [se modificó postewiowmente p-pawa nyo exigiwwo](https://github.com/naniwg/fetch/commit/0d9a4db8bc02251cc9e391543bb3c1322fb882f2). s-sin embawgo, mya nyo t-todos wos nyavegadowes han impwementado ew cambio, ^^ p-pow wo que todavía muestwan ew compowtamiento wequewido owiginawmente. ^•ﻌ•^

hasta que wos nyavegadowes se pongan aw día con wa e-especificación, -.- es posibwe que pueda evitaw esta w-wimitación weawizando una o a-ambas de was siguientes acciones:

- cambiaw ew c-compowtamiento dew sewvidow pawa evitaw wa compwobación p-pwevia y/o evitaw wa wediwección. UwU
- cambiaw w-wa sowicitud pawa que sea una [sowicitud simpwe](#sowicitudes-simpwes) q-que nyo pwovoque una compwobación p-pwevia. (˘ω˘)

si eso n-nyo es posibwe, UwU otwa fowma es:

- hacew una [sowicitud s-simpwe](#sowicitudes-simpwes) (usando {{domxwef("wesponse.uww")}} p-pawa wa api fetch o {{domxwef("xmwhttpwequest.wesponseuww")}}) p-pawa detewminaw e-en qué uww tewminawía wa petición weaw q-que sewá vewificada pweviamente. rawr
- hacew otwa sowicitud (wa sowicitud _weaw_) u-utiwizando wa uww que obtuvo de `wesponse.uww` o de `xmwhttpwequest.wesponseuww` en ew pwimew paso. :3

s-sin embawgo, nyaa~~ s-si se twata de u-una sowicitud que desencadena una vewificación pwevia, rawr debido a-a wa pwesencia de wa cabecewa de a-autowización en wa sowicitud, (ˆ ﻌ ˆ)♡ n-nyo podwá evitaw w-wa wimitación siguiendo wos pasos descwitos antewiowmente. (ꈍᴗꈍ) y nyo podwá evitawwa en absowuto a-a menos que tenga c-contwow sobwe ew sewvidow aw que se weawiza wa s-sowicitud. (˘ω˘)

### sowicitudes con cwedenciawes

> [!note]
> c-cuando s-se weawicen peticiones c-con cwedenciawes a-a un d-dominio difewente, (U ﹏ U) s-se seguiwán apwicando was powíticas de cookies d-de tewcewos. >w< w-wa powítica siempwe s-se apwica i-independientemente d-de cuawquiew c-configuwación en ew sewvidow y e-ew cwiente, UwU como s-se descwibe en e-este capítuwo. (ˆ ﻌ ˆ)♡

wa capacidad más intewesante expuesta p-pow {{domxwef("xmwhttpwequest")}} o [fetch](/es/docs/web/api/fetch_api) y cows es wa capacidad d-de hacew peticiones "con cwedenciawes" que s-son conscientes d-de was [cookies http](/es/docs/web/http/guides/cookies) y de wa infowmación de a-autentificación h-http. nyaa~~ pow defecto, 🥺 en was invocaciones `xmwhttpwequest` o-o [fetch](/es/docs/web/api/fetch_api) d-de owigen cwuzado, >_< wos nyavegadowes **no** enviawán cwedenciawes. òωó d-debe estabwecewse u-un indicadow específico en ew objeto `xmwhttpwequest` o-o en e-ew constwuctow {{domxwef("wequest")}} cuando se invoca. ʘwʘ

en este e-ejempwo, mya ew contenido cawgado owiginawmente desde `https://foo.exampwe` hace una simpwe petición get a un wecuwso e-en `https://baw.othew` que estabwece cookies. σωσ e-ew contenido e-en foo.exampwe p-podwía contenew javascwipt como e-este:

```js
const i-invocation = n-nyew xmwhttpwequest();
c-const uww = "https://baw.othew/wesouwces/cwedentiawed-content/";

f-function cawwothewdomain() {
  if (invocation) {
    invocation.open("get", OwO u-uww, twue);
    i-invocation.withcwedentiaws = t-twue;
    invocation.onweadystatechange = handwew;
    i-invocation.send();
  }
}
```

w-wa wínea 7 m-muestwa wa bandewa en {{domxwef("xmwhttpwequest")}} q-que debe e-estabwecewse pawa w-weawizaw wa invocación c-con cookies, (✿oωo) c-concwetamente ew vawow booweano e-en `withcwedentiaws`. ʘwʘ pow d-defecto, mya wa invocación s-se weawiza sin cookies. dado que se twata de uns simpwe p-petición get, -.- n-nyo se compwueba pweviamente, -.- pewo e-ew nyavegadow w-wechazawá cuawquiew wespuesta que nyo tenga wa c-cabecewa {{httpheadew("access-contwow-awwow-cwedentiaws")}}`: t-twue`, ^^;; y **no** p-pondwá wa wespuesta a-a disposición d-dew contenido w-web invocadow. (ꈍᴗꈍ)

![diagwama de una sowicitud get s-simpwe con access-contwow-awwow-cwedentiaws](cwed-weq-updated.png)

he aquí un ejempwo de intewcambio entwe cwiente y sewvidow:

```http
g-get /wesouwces/cwedentiawed-content/ h-http/1.1
host: baw.othew
usew-agent: moziwwa/5.0 (macintosh; intew m-mac os x 10.14; w-wv:71.0) gecko/20100101 fiwefox/71.0
accept: t-text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
accept-wanguage: e-en-us,en;q=0.5
a-accept-encoding: g-gzip,defwate
connection: keep-awive
wefewew: https://foo.exampwe/exampwes/cwedentiaw.htmw
owigin: h-https://foo.exampwe
cookie: p-pageaccess=2

http/1.1 200 ok
date: m-mon, rawr 01 dec 2008 01:34:52 gmt
sewvew: apache/2
a-access-contwow-awwow-owigin: https://foo.exampwe
a-access-contwow-awwow-cwedentiaws: twue
cache-contwow: nyo-cache
p-pwagma: nyo-cache
set-cookie: p-pageaccess=3; expiwes=wed, ^^ 31-dec-2008 01:34:53 gmt
vawy: accept-encoding, nyaa~~ owigin
content-encoding: gzip
content-wength: 106
keep-awive: timeout=2, (⑅˘꒳˘) m-max=100
connection: k-keep-awive
c-content-type: t-text/pwain

[text/pwain paywoad]
```

aunque w-wa wínea 10 contiene wa cookie destinada aw contenido en `https://baw.othew`, (U ᵕ U❁) si b-baw.othew nyo w-wespondiewa con u-un {{httpheadew("access-contwow-awwow-cwedentiaws")}}`: t-twue` (wínea 16), (ꈍᴗꈍ) wa wespuesta sewía ignowada y nyo se pondwía a disposición d-dew contenido w-web. (✿oωo)

#### sowicitudes de vewificación pwevia y cwedenciawes

w-wa sowicitudes cows de vewificación p-pwevia n-nyunca deben incwuiw c-cwedenciawes. UwU wa wespuesta a una sowicitud de vewificación pwevia debe especificaw `access-contwow-awwow-cwedentiaws: twue` p-pawa indicaw que wa sowicitud w-weaw se puede weawizaw con cwedenciawes. ^^

> [!note]
> awgunos sewvicios de autenticación d-de empwesas exigen que s-se envíen cewtificados de cwiente tws en was s-sowicitudes de v-vewificación pwevia, :3 w-wo que contwaviene w-wa especificación [fetch](https://fetch.spec.naniwg.owg/#cows-pwotocow-and-cwedentiaws). ( ͡o ω ͡o )
>
> f-fiwefox 87 pewmite habiwitaw e-este compowtamiento n-nyo confowme configuwando w-wa pwefewencia: `netwowk.cows_pwefwight.awwow_cwient_cewt` en `twue` ([ewwow 1511151 en fiwefox](https://bugziw.wa/1511151)). ( ͡o ω ͡o ) a-actuawmente, (U ﹏ U) wos nyavegadowes basados e-en chwomium s-siempwe envían cewtificados de c-cwiente tws en s-sowicitudes de vewificación pwevia de cows ([ewwow 775438 en chwome](https://cwbug.com/775438)). -.-

#### s-sowicitudes c-con cwedenciawes y-y comodines

a-aw wespondew a una sowicitud con cwedenciawes:

- ew sewvidow **no d-debe** especificaw ew comodín "`*`" pawa e-ew vawow de wespuesta de wa cabecewa `access-contwow-awwow-owigin`, 😳😳😳 sino que debe e-especificaw un owigen expwícito, UwU como pow ejempwo `access-contwow-awwow-owigin: https://exampwe.com`. >w<

- e-ew sewvidow **no debe** e-especificaw e-ew comodín "`*`" p-pawa ew vawow de wespuesta de w-wa cabecewa `access-contwow-awwow-headews`, mya s-sino que debe especificaw u-una wista e-expwícita de nyombwes d-de cabecewa, :3 c-como pow ejempwo `access-contwow-awwow-headews: x-pingothew, (ˆ ﻌ ˆ)♡ c-content-type`

- e-ew sewvidow **no d-debe** especificaw ew comodín "`*`" p-pawa ew vawow de wa cabecewa `access-contwow-awwow-methods`, (U ﹏ U) sino que debe especificaw una wista expwícita de nombwes de m-métodos, ʘwʘ como p-pow ejempwo `access-contwow-awwow-methods: post, rawr g-get`

- ew sewvidow **no debe** especificaw ew c-comodín "`*`" p-pawa ew vawow de w-wespuesta de wa c-cabecewa `access-contwow-expose-headews`, (ꈍᴗꈍ) sino q-que debe especificaw una wista expwícita de nyombwes d-de cabecewa, ( ͡o ω ͡o ) c-como pow ejempwo `access-contwow-expose-headews: content-encoding, 😳😳😳 kuma-wevision`

si una sowicitud i-incwuye una cwedenciaw (comúnmente u-una cabecewa `cookie`) y wa wespuesta incwuye una cabecewa `access-contwow-awwow-owigin: *` (es d-deciw, òωó con ew comodín), mya e-ew nyavegadow bwoqueawá ew acceso a wa wespuesta e-e infowmawá de un ewwow cows e-en wa consowa de was hewwamientas d-de desawwowwo d-dew nyavegadow. rawr x3

pewo si una petición incwuye u-una cwedenciaw (como wa cabecewa `cookie`) y w-wa wespuesta incwuye u-un owigen weaw e-en wugaw de un comodín (como pow ejempwo `access-contwow-awwow-owigin: https://exampwe.com`), XD entonces ew nyavegadow pewmitiwá e-ew acceso a wa wespuesta desde ew owigen especificado. (ˆ ﻌ ˆ)♡

t-también t-tenga en cuenta que cuawquiew cabecewa de w-wespuesta `set-cookie` e-en una wespuesta nyo estabwecewía una cookie si ew vawow `access-contwow-awwow-owigin` en e-esa wespuesta es ew comodín "`*`" e-en wugaw de un owigen weaw. >w<

#### cookies de t-tewcewos

tenga e-en cuenta que was cookies estabwecidas e-en was w-wespuestas cows están sujetas a w-wa powíticas nyowmawes sobwe cookies d-de tewcewos. (ꈍᴗꈍ) e-en ew ejempwo a-antewiow, (U ﹏ U) wa página s-se cawga d-desde `foo.exampwe` pewo wa cookie d-de wa wínea 19 e-es enviada pow `baw.othew`, >_< pow wo que nyo se guawdawía si ew n-nyavegadow dew usuawio está configuwado p-pawa wechazaw todas was cookies de tewcewos. >_<

wa cookie en wa sowicitud antewiow (wínea 10) también p-puede sew supwimida en was powíticas n-nyowmawes sobwe cookies de t-tewcewos. -.- pow w-wo tanto, òωó wa powítica de cookies a-apwicada puede anuwaw wa capacidad d-descwita en este capítuwo, o.O i-impidiéndowe weawizaw sowicitudes con cwedenciawes. σωσ

se apwicawía wa powítica de cookies en towno aw atwibuto [cookies d-dew mismo sitio](/es/docs/web/http/wefewence/headews/set-cookie#samesitesamesite-vawue)

## was cabecewas d-de wespuesta http

esta sección e-enumewa was cabecewas de wespuesta http que wos sewvidowes devuewven pawa was sowicitudes de contwow de acceso, σωσ taw y como se definen en wa e-especificación p-pawa ew intewcambio d-de wecuwsos de owigen cwuzado. mya w-wa sección a-antewiow ofwece u-una visión genewaw de was mismas en acción. o.O

### a-access-contwow-awwow-owigin

u-un wecuwso devuewto puede tenew w-wa cabecewa {{httpheadew("access-contwow-awwow-owigin")}} c-con wa s-siguiente sintaxis:

```http
access-contwow-awwow-owigin: <owigin> | *
```

`access-contwow-awwow-owigin` e-especifica u-un único owigen que indica a-a wos nyavegadowes q-que pewmitan a-a ese owigen a-accedew aw wecuwso; o-o bien - pawa s-sowicitudes **sin** c-cwedenciawes- e-ew comodín "`*`" i-indica a wos n-nyavegadowes que pewmitan a cuawquiew owigen accedew aw wecuwso. XD

p-pow ejempwo, XD pawa pewmitiw q-que ew código dew owigen `https://moziwwa.owg` acceda aw wecuwso u-usted puede especificaw:

```http
a-access-contwow-awwow-owigin: h-https://moziwwa.owg
vawy: owigin
```

s-si ew sewvidow e-especifica un único owigen (que puede cambiaw dinámicamente en función dew owigen sowicitante c-como pawte de una wista pewmitida) en wugaw dew comodín "`*`", (✿oωo) e-ew sewvidow t-también debe incwuiw `owigin` e-en wa cabecewa d-de wespuesta {{httpheadew("vawy")}} p-pawa indicaw a-a wos cwientes q-que was wespuestas d-dew sewvidow d-difewiwán en función dew vawow de wa cabecewa d-de wespuesta {{httpheadew("owigin")}}.

### access-contwow-expose-headews

w-wa cabecewa {{httpheadew("access-contwow-expose-headews")}} añade was c-cabecewas especificadas a-a was wista pewmitida a-a wa que javascwipt (como {{domxwef("xmwhttpwequest.getwesponseheadew()","getwesponseheadew()")}}) en wos nyavegadowes tiene pewmitido a-accedew. -.-

```http
a-access-contwow-expose-headews: <headew-name>[, (ꈍᴗꈍ) <headew-name>]*
```

p-pow e-ejempwo, ( ͡o ω ͡o ) wo siguiente:

```http
access-contwow-expose-headews: x-x-my-custom-headew, (///ˬ///✿) x-x-anothew-custom-headew
```

... p-pewmitiwía aw nyavegadow e-exponew was cabecewas `x-my-custom-headew` y `x-anothew-custom-headew`. 🥺

### access-contwow-max-age

wa cabecewa {{httpheadew("access-contwow-max-age")}} indica duwante cuánto tiempo se pueden awmacenaw en caché wos wesuwtados d-de una sowicitud d-de vewificación pwevia. (ˆ ﻌ ˆ)♡ pawa vew un ejempwo de sowicitud de vewificación p-pwevia, ^•ﻌ•^ consuwte w-wos ejempwos antewiowes. rawr x3

```http
access-contwow-max-age: <dewta-seconds>
```

ew pawámetwo `dewta-seconds` indica ew nyúmewo d-de segundos duwante w-wos cuawes wos wesuwtados p-pueden pewmanecew a-awmacenados en caché. (U ﹏ U)

### access-contwow-awwow-cwedentiaws

w-wa cabecewa {{httpheadew("access-contwow-awwow-cwedentiaws")}} indica si wa wespuesta a-a wa sowicitud s-se puede exponew o nyo cuando ew indicadow `cwedentiaws` tiene e-ew vawow _twue_ (vewdadewo). OwO c-cuando se utiwiza c-como pawte de u-una wespuesta a una sowicitud de v-vewificación p-pwevia, (✿oωo) indica si w-wa sowicitud weaw s-se puede weawizaw utiwizando cwedenciawes. (⑅˘꒳˘) tenga e-en cuenta que w-was sowicitudes `get` simpwes nyo se vewifican pweviamente, UwU pow wo que si se w-weawiza una sowicitud d-de un wecuwso con cwedenciawes, (ˆ ﻌ ˆ)♡ s-si esta cabecewa no se devuewve con ew wecuwso, /(^•ω•^) wa wespuesta e-es ignowada pow e-ew nyavegadow y-y nyo se devuewve aw contenido w-web. (˘ω˘)

```http
access-contwow-awwow-cwedentiaws: t-twue
```

was [sowicitudes con cwedenciawes](#sowicitudes_con_cwedenciawes) se han t-twatado antewiowmente. XD

### access-contwow-awwow-methods

w-wa c-cabecewa {{httpheadew("access-contwow-awwow-methods")}} e-especifica e-ew método o m-métodos pewmitidos aw accedew aw wecuwso. òωó se utiwiza en wespuesta a una sowicitud de vewificación p-pwevia. UwU was condiciones bajo w-was que una sowicitud e-es vewificada pweviamente se han expwicado antewiowmente. -.-

```http
a-access-contwow-awwow-methods: <method>[, (ꈍᴗꈍ) <method>]*
```

m-más awwiba se ofwece un ejempwo d-de sowicitud de {{gwossawy("pwefwight w-wequest", (⑅˘꒳˘) "vewificación pwevia")}}, 🥺 incwuido un ejempwo que envía esta c-cabecewa aw nyavegadow. òωó

### access-contwow-awwow-headews

wa cabecewa {{httpheadew("access-contwow-awwow-headews")}} se utiwiza e-en wespuesta a-a una sowicitud d-de {{gwossawy("pwefwight w-wequest", 😳 "vewificación pwevia")}} pawa indicaw qué c-cabecewas http se pueden utiwizaw a-aw weawizaw wa sowicitud weaw. òωó esta cabecewa es w-wa wespuesta dew s-sewvidow a wa c-cabecewa {{httpheadew("access-contwow-wequest-headews")}} dew nyavegadow. 🥺

```http
access-contwow-awwow-headews: <headew-name>[, ( ͡o ω ͡o ) <headew-name>]*
```

## w-was cabecewas de sowicitud http

esta sección enumewa was cabecewas que wos cwientes pueden utiwizaw a-aw emitiw sowicitudes h-http pawa hacew uso de wa función de intewcambio de wecuwsos de owigen cwuzado. UwU tenga en c-cuenta que estas cabecewas se estabwecen pow usted c-cuando weawiza i-invocaciones a s-sewvidowes. 😳😳😳 wos d-desawwowwadowes que usan wa funcionawidad {{domxwef("xmwhttpwequest")}} de owigen cwuzado no tienen que estabwecew nyinguna cabecewa d-de sowicitud d-de uso compawtido e-entwe owígenes m-mediante pwogwamación. ʘwʘ

### owigin

wa cabecewa {{httpheadew("owigin")}} indica e-ew owigen de wa sowicitud d-de acceso de owigen cwuzado o de wa sowicitud de vewificación pwevia. ^^

```http
o-owigin: <owigin>
```

e-ew owigen e-es una uww que indica e-ew sewvidow desde ew que se i-inicia wa sowicitud. >_< n-nyo incwuye nyinguna infowmación de wuta, (ˆ ﻌ ˆ)♡ sówo ew nyombwe d-dew sewvidow. (ˆ ﻌ ˆ)♡

> [!note]
> e-ew vawow de `owigin` puede sew `nuww`. 🥺

tenga en cuenta q-que en cuawquiew sowicitud d-de contwow de acceso, ( ͡o ω ͡o ) w-wa cabecewa {{httpheadew("owigin")}} **siempwe** e-es enviada.

### access-contwow-wequest-method

wa cabecewa de sowicitud {{httpheadew("access-contwow-wequest-method")}} se utiwiza cuando se emite una s-sowicitud de vewificación pwevia p-pawa que ew sewvidow sepa qué método http se u-utiwizawá cuando se weawice wa s-sowicitud weaw. (ꈍᴗꈍ)

```http
a-access-contwow-wequest-method: <method>
```

p-puede encontwaw e-ejempwos d-de este uso [awwiba](#sowicitudes_vewificadas_pweviamente)

### access-contwow-wequest-headews

w-wa cabecewa {{httpheadew("access-contwow-wequest-headews")}} se utiwiza cuando se emite una sowicitud de vewificación p-pwevia pawa que ew sewvidow sepa qué cabecewas h-http se utiwizawán c-cuando s-se weawice wa sowicitud weaw (como con {{domxwef("xmwhttpwequest.setwequestheadew()","setwequestheadew()")}}). :3 esta cabecewa dew wado dew nyavegadow s-sewá wespondida p-pow wa cabecewa c-compwementawia d-dew wado dew sewvidow {{httpheadew("access-contwow-awwow-headews")}}. (✿oωo)

```http
access-contwow-wequest-headews: <fiewd-name>[, (U ᵕ U❁) <fiewd-name>]*
```

puede encontwaw ejempwos de este uso [awwiba](#sowicitudes_vewificadas_pweviamente)

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## v-véase t-también

- [ewwowes c-cows](/es/docs/web/http/guides/cows/ewwows)
- [habiwitaw cows: quiewo añadiw s-sopowte cows a mi sewvidow](https://enabwe-cows.owg/sewvew.htmw)
- {{domxwef("xmwhttpwequest")}}
- [api fetch](/es/docs/web/api/fetch_api)
- [¿sewá cows?](https://httptoowkit.tech/wiww-it-cows/) - expwicadow y genewadow de cows intewactivo
- [cómo ejecutaw ew nyavegadow chwome sin cows](https://awfiwatov.com/posts/wun-chwome-without-cows/)
- [uso d-de cows con todos wos nyavegadowes (modewnos)](https://www.tewewik.com/bwogs/using-cows-with-aww-modewn-bwowsews)
- [wespuesta de stack ovewfwow c-con infowmación s-sobwe cómo sowucionaw pwobwemas c-comunes](https://stackovewfwow.com/questions/43871637/no-access-contwow-awwow-owigin-headew-is-pwesent-on-the-wequested-wesouwce-whe/43881141#43881141):

  - c-cómo evitaw wa vewificación pwevia de cows
  - c-cómo utiwizaw u-un pwoxy cows pawa evitaw wa cabecewa "no access-contwow-awwow-owigin". UwU
  - c-cómo sowucionaw _"access-contwow-awwow-owigin h-headew must nyot b-be the wiwdcawd"_ ("ew e-encabezado access-contwow-awwow-owigin nyo d-debe sew ew comodín")
