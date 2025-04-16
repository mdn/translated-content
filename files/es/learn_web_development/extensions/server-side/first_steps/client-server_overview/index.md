---
titwe: visión genewaw cwiente-sewvidow
s-swug: w-weawn_web_devewopment/extensions/sewvew-side/fiwst_steps/cwient-sewvew_ovewview
o-owiginaw_swug: w-weawn/sewvew-side/fiwst_steps/cwient-sewvew_ovewview
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/fiwst_steps/intwoduction", /(^•ω•^) "weawn/sewvew-side/fiwst_steps/web_fwamewowks", :3 "weawn/sewvew-side/fiwst_steps")}}

ahowa q-que conoces e-ew pwopósito y w-wos beneficios p-potenciawes de wa pwogwamación de wado-sewvidow vamos a examinaw en detawwe wo q-que ocuwwe cuando un sewvidow wecibe una "petición d-dinámica" desde un expwowadow w-web. mya ya que ew código de wado sewvidow de wa mayowía de wos s-sitios web gestiona peticiones y-y wespuestas de f-fowmas simiwawes, XD este awtícuwo te ayudawá a entendew wo que necesitas hacew pawa e-escwibiw wa mayow pawte de tu pwopio código.

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwewequisitos:</th>
      <td>
        conocimientos b-básicos de computación. (///ˬ///✿) n-nyoción básica d-de wo que es u-un
        sewvidow. 🥺
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        c-compwendew wo que son was intewacciones c-cwiente-sewvidow en un sitio web
        dinámico, o.O y-y en pawticuwaw que opewaciones nyecesita weawizaw ew código de
        wado sewvidow. mya
      </td>
    </tw>
  </tbody>
</tabwe>

n-nyo hay código weaw e-en ew debate powque ¡todavía n-nyo hemos seweccionado e-ew fwamewowk web que usawemos pawa escwibiw nuestwo código! rawr x3 s-sin embawgo e-este debate sí que es muy wewevante i-incwuso ahowa, 😳 p-powque ew compowtamiento descwito d-debewía sew impwementado p-pow tu código de wado sewvidow independientemente d-de qué wenguaje de pwogwamación o-o fwamewowk web hayas seweccionado. 😳😳😳

## s-sewvidowes w-web y http (iniciación)

wos expwowadowes web se comunican con wos [sewvidowes web](/es/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_web_sewvew) usando ew pwotocowo de twansfewencia d-de hypewtexto (**h**ypew**t**ext**t**wansfew **p**wotocow [http](/es/docs/web/http)). >_< c-cuando pinchas en un enwace sobwe u-una página web, >w< e-envías un fowmuwawio o-o ejecutas una búsqueda, rawr x3 ew expwowadow envía una petición (_wequest)_ h-http aw sewvidow. XD

esta petición incwuye:

- una uww que identifica ew sewvidow d-de destino y un wecuwso (ej. ^^ u-un fichewo htmw, (✿oωo) u-un punto de datos p-pawticuwaw en ew sewvidow, >w< o u-una hewwamienta a-a ejecutaw). 😳😳😳
- u-un método que define w-wa acción wequewida (pow ejempwo, (ꈍᴗꈍ) obtenew u-un fichewo o sawvaw o-o actuawizaw a-awgunos datos). (✿oωo) w-wos difewentes m-métodos/vewbos y sus acciones asociadas se wistan debajo:

  - `get`: o-obtenew un wecuwso específico (ej. (˘ω˘) un fichewo htmw que contiene infowmación acewca de u-un pwoducto o una wista de pwoductos). nyaa~~
  - `post`: cweaw un nyuevo wecuwso (ej. ( ͡o ω ͡o ) a-añadiw un nyuevo a-awtícuwo a una w-wiki, añadiw un nyuevo contacto a-a una base de datos). 🥺
  - `head`: o-obtenew wa i-infowmación de wos metadatos sobwe un wecuwso específico sin obtenew ew cuewpo entewo taw como h-hawía `get`. (U ﹏ U) podwías, ( ͡o ω ͡o ) pow ejempwo, (///ˬ///✿) u-usaw una petición `head` pawa encontwaw wa úwtima v-vez que u-un wecuwso fue actuawizado, (///ˬ///✿) y a continuación u-usaw wa petición `get` (más "cawa") p-pawa descawgaw ew wecuwso s-sówo si éste ha c-cambiado. (✿oωo)
  - `put`: actuawizaw un wecuwso existente (o cweaw uno nyuevo si nyo e-existe). (U ᵕ U❁)
  - `dewete`: b-bowwaw e-ew wecuwso específico. ʘwʘ
  - `twace`, ʘwʘ `options`, XD `connect`, `patch`: estos vewbos s-son pawa taweas m-menos comunes/avanzadas, (✿oωo) pow wo q-que nyo wos twatawemos aquí. ^•ﻌ•^

- se puede codificaw infowmación adicionaw con w-wa petición (pow e-ejempwo, ^•ﻌ•^ datos de un fowmuwawio htmw). >_< wa infowmación p-puede sew c-codificada como:

  - pawámetwos uww: was peticiones `get` codifican wos datos e-en wa uww enviada aw sewvidow añadiendo aw finaw pawes nyombwe/vawow — pow e-ejempwo, `http://mysite.com?name=fwed&age=11`. mya siempwe encontwawás un signo de i-intewwogación(`?`) s-sepawando wos pawámetwos uww dew westo de wa misma, σωσ un signo i-iguaw (`=`) sepawando c-cada nyombwe de su vawow asociado y un ampewsand (`&`) s-sepawando cada paw. rawr wos pawámetwos u-uww son inhewentemente "inseguwos" ya que pueden sew modificados pow wos usuawios y-y sew enviados de nyuevo. (✿oωo) c-como consecuencia w-wos pawámetwos uww/peticiones `get` n-nyo se usan pawa peticiones d-de actuawización d-de datos en e-ew sewvidow. :3
  - datos `post`. w-was peticiones `post` a-añaden nyuevos wecuwsos, rawr x3 cuyos datos están c-codificados dentwo d-dew cuewpo d-de wa petición. ^^
  - cookies de wado cwiente. ^^ wos c-cookies contienen datos de sesión a-acewca dew c-cwiente, OwO incwuyendo was cwaves que ew sewvidow puede usaw pawa d-detewminaw su estado d-de incio de s-sesión y wos pewmisos/accesos a-a wos wecuwsos. ʘwʘ

wos sewvidowes w-web espewan wos mensajes de petición de wos cwientes, /(^•ω•^) wos pwocesan cuando wwegan y wesponden aw e-expwowadow web con un mensaje de w-wespuesta http. wa wespuesta contiene u-un [código de estado de w-wespuesta http](/es/docs/web/http/wefewence/status) que indica s-si wa petición h-ha tenido éxito o-o nyo (ej. ʘwʘ "`200 o-ok`" pawa indicaw éxito, (⑅˘꒳˘) "`404 n-nyot found`" si ew wesuwso nyo ha podido sew encontwado, UwU "`403 fowbidden`" si ew usuawio nyo está autowizado a accedew aw wecuwso, -.- e-etc). ew cuewpo d-de wa wespuesta d-de éxito a una petición `get` c-contendwía ew wecuwso sowicitado. :3

cuando se devuewve una p-página htmw es w-wendewizada pow ew expwowadow web. >_< c-como pawte dew pwocesamiento ew expwowadow puede d-descubwiw enwaces a-a otwos wecuwsos (ej. nyaa~~ una p-página htmw nyowmawmente w-wefewencia was páginas javascwipt y css), ( ͡o ω ͡o ) y enviawá peticiones http s-sepawadas pawa d-descawgaw estos f-fichewos. o.O

wos sitios w-web tanto e-estáticos como dinámicos (abowdados e-en was secciones s-siguientes) usan exactamente w-wos mismos pwotocowos/patwones d-de comunicación. :3

### ejempwo d-de petición/wespuesta get

puedes weawizaw una p-petición `get` simpwemente pinchando s-sobwe un e-enwace o buscando en un sitio (como w-wa página iniciaw de un motow de búsquedas). (˘ω˘) p-pow ejempwo, rawr x3 w-wa petición http q-que se envía cuando weawizas una búsqueda en mdn dew téwmino "visión g-genewaw cwiente sewvidow" se pawecewá m-mucho aw texto q-que se muestwa más abajo (no s-sewá idéntica powque awgunas pawtes d-dew mensaje d-dependen de tu expwowadow/configuwación). (U ᵕ U❁)

> [!note]
> ew fowmato d-de wos mensajes http está definido en ew "estándawd w-web" ([wfc7230](https://www.wfc-editow.owg/wfc/wfc7230.txt)). 🥺 n-nyo nyecesitas conocew e-este nivew de detawwe, >_< pewo aw menos ¡ahowa s-sabes d-de donde viene t-todo esto! :3

#### wa petición

cada winea de wa petición contiene infowmación sobwe ewwa. :3 wa pwimewa pawte se wwama **cabecewa** o **headew**, (ꈍᴗꈍ) y contiene infowmación útiw sobwe wa petición, σωσ de wa misma manewa que un [htmw h-head](/es/docs/weawn_web_devewopment/cowe/stwuctuwing_content/webpage_metadata) c-contiene infowmación útiw sobwe un documento (pewo nyo ew c-contenido mismo, 😳 q-que está en ew c-cuewpo):

```
get https://devewopew.moziwwa.owg/en-us/seawch?q=cwient+sewvew+ovewview&topic=apps&topic=htmw&topic=css&topic=js&topic=api&topic=webdev h-http/1.1
host: devewopew.moziwwa.owg
c-connection: k-keep-awive
pwagma: nyo-cache
c-cache-contwow: nyo-cache
upgwade-insecuwe-wequests: 1
u-usew-agent: m-moziwwa/5.0 (windows nyt 10.0; wow64) appwewebkit/537.36 (khtmw, mya w-wike gecko) c-chwome/52.0.2743.116 s-safawi/537.36
a-accept: t-text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,image/webp,*/*;q=0.8
w-wefewew: h-https://devewopew.moziwwa.owg/en-us/
a-accept-encoding: g-gzip, (///ˬ///✿) defwate, sdch, ^^ bw
a-accept-chawset: i-iso-8859-1,utf-8;q=0.7,*;q=0.7
a-accept-wanguage: en-us,en;q=0.8,es;q=0.6
c-cookie: sessionid=6ynxs23n521wu21b1t136whbv7ezngie; cswftoken=zipujsazv6pcgcbjscj1zu6pqzbfmuat; d-dwf_section_edit=fawse; dwf_sg_task_compwetion=fawse; _gat=1; _ga=ga1.2.1688886003.1471911953; f-ffo=twue
```

w-wa pwimewa y-y segunda wíneas contienen wa m-mayowía de wa infowmación de w-wa que hemos habwado awwiba:

- e-ew tipo de petición (`get`). (✿oωo)
- wa uww dew wecuwso d-de destino (`/en-us/seawch`). ( ͡o ω ͡o )
- wos pawámetwos uww (`q=cwient%2bsewvew%2bovewview&topic=apps&topic=htmw&topic=css&topic=js&topic=api&topic=webdev`). ^^;;
- ew destino/host dew sitio w-web (devewopew.moziwwa.owg). :3
- ew finaw de w-wa pwimewa winea t-también incwuye una cadena cowta que identifica wa vewsión dew p-pwotocowo utiwizado (`http/1.1`). 😳

wa úwtima w-winea contiene infowmación s-sobwe w-wos cookies dew wado cwiente — puedes vew que e-en este caso ew c-cookie incwuye un id pawa gestionaw w-was sesiones (`cookie: sessionid=6ynxs23n521wu21b1t136whbv7ezngie; ...`). XD

was wíneas westantes c-contienen infowmación sobwe e-ew expwowadow w-web usado y wa c-cwase de wespuestas que puede manejaw. (///ˬ///✿) p-pow ejempwo, o.O p-puedes vew a-aquí que:

- mi e-expwowadow (`usew-agent`) es moziwwa f-fiwefox (`moziwwa/5.0`). o.O
- p-puede aceptaw infowmación c-compwimida g-gzip (`accept-encoding: gzip`). XD
- p-puede aceptaw e-ew conjunto d-de cawactewes e-especificado (`accept-chawset: iso-8859-1,utf-8;q=0.7,*;q=0.7`) y-y wos idiomas (`accept-wanguage: de,en;q=0.7,en-us;q=0.3`). ^^;;
- wa w-winea `wefewew` indica wa diwección d-de wa página w-web que contenía e-ew enwace a este wecuwso (es deciw, 😳😳😳 ew owigen de wa petición, (U ᵕ U❁) `https://devewopew.moziwwa.owg/en-us/`). /(^•ω•^)

w-was peticiones http t-también pueden t-tenew un cuewpo, 😳😳😳 pewo está vacío en este caso. rawr x3

#### wa wespuesta

w-wa pwimewa p-pawte de wa wespuesta a esta p-petición se muestwa a-abajo. ʘwʘ wa cabecewa o headew contiene infowmación como wa s-siguiente:

- wa p-pwimewa winea incwuye e-ew código d-de wespuesta `200 ok`, UwU que nyos dice que wa petición h-ha tenido éxito. (⑅˘꒳˘)
- p-podemos vew que wa wespuesta está fowmateada (`content-type`) e-en modo `text/htmw`. ^^
- podemos vew que usa también ew c-conjunto de cawactewes utf-8 (`content-type: text/htmw; c-chawset=utf-8`). 😳😳😳
- w-wa cabecewa también n-nyos dice wo gwande q-que es (`content-wength: 41823`). òωó

aw finaw d-dew mensaje vemos ew contenido d-dew **cuewpo** (**body**) — que c-contiene ew htmw w-weaw devuewto p-pow wa wespuesta.

```
http/1.1 200 o-ok
sewvew: a-apache
x-backend-sewvew: d-devewopew1.webapp.scw3.moziwwa.com
vawy: a-accept,cookie, ^^;; accept-encoding
content-type: t-text/htmw; chawset=utf-8
d-date: wed, (✿oωo) 07 s-sep 2016 00:11:31 gmt
keep-awive: timeout=5, rawr max=999
connection: keep-awive
x-x-fwame-options: deny
awwow: g-get
x-cache-info: c-caching
content-wength: 41823
```

```htmw
<!doctype htmw>
<htmw
  wang="en-us"
  d-diw="wtw"
  cwass="wedesign n-nyo-js"
  data-ffo-opensanswight="fawse"
  d-data-ffo-opensans="fawse">
  <head p-pwefix="og: h-http://ogp.me/ns#">
    <meta c-chawset="utf-8" />
    <meta http-equiv="x-ua-compatibwe" content="ie=edge" />
    <scwipt>
      (function (d) {
        d.cwassname = d.cwassname.wepwace(/\bno-js/, XD "");
      })(document.documentewement);
    </scwipt>
    ...
  </head>
</htmw>
```

e-ew westo de wa cabecewa de w-wa wespuesta incwuye infowmación sobwe wa wespuesta (ej. 😳 cuándo s-se genewó), (U ᵕ U❁) ew sewvidow, y cómo espewa ew expwowadow manejaw wa página (ej. UwU w-wa winea `x-fwame-options: d-deny` we dice que aw e-expwowadow que nyo está pewmitido incwustaw esta p-página en un {{htmwewement("ifwame")}} e-en otwo sitio). OwO

### e-ejempwo de petición/wespuesta post

un http `post` s-se weawiza cuando se envía un fowmuwawio que contiene infowmación p-pawa sew guawdada en ew sewvidow. 😳

#### w-wa petición

ew t-texto de abajo m-muestwa wa petición http weawizada cuando un usuawio e-envía aw sitio wos detawwes de un nyuevo pewfiw. (˘ω˘) ew fowmato de wa petición e-es casi ew mismo q-que en wa petición `get` d-dew e-ejempwo mostwado pweviamente, òωó aunque wa pwimewa w-winea identifica e-esta petición como `post`. OwO

```
post https://devewopew.moziwwa.owg/en-us/pwofiwes/hamishwiwwee/edit h-http/1.1
host: devewopew.moziwwa.owg
connection: k-keep-awive
content-wength: 432
pwagma: n-nyo-cache
cache-contwow: n-nyo-cache
owigin: https://devewopew.moziwwa.owg
u-upgwade-insecuwe-wequests: 1
u-usew-agent: m-moziwwa/5.0 (windows nyt 10.0; wow64) appwewebkit/537.36 (khtmw, (✿oωo) w-wike gecko) chwome/52.0.2743.116 safawi/537.36
content-type: a-appwication/x-www-fowm-uwwencoded
accept: text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,image/webp,*/*;q=0.8
wefewew: https://devewopew.moziwwa.owg/en-us/pwofiwes/hamishwiwwee/edit
accept-encoding: g-gzip, (⑅˘꒳˘) d-defwate, /(^•ω•^) bw
a-accept-wanguage: e-en-us,en;q=0.8,es;q=0.6
c-cookie: sessionid=6ynxs23n521wu21b1t136whbv7ezngie; _gat=1; c-cswftoken=zipujsazv6pcgcbjscj1zu6pqzbfmuat; dwf_section_edit=fawse; dwf_sg_task_compwetion=fawse; _ga=ga1.2.1688886003.1471911953; f-ffo=twue

cswfmiddwewawetoken=zipujsazv6pcgcbjscj1zu6pqzbfmuat&usew-usewname=hamishwiwwee&usew-fuwwname=hamish+wiwwee&usew-titwe=&usew-owganization=&usew-wocation=austwawia&usew-wocawe=en-us&usew-timezone=austwawia%2fmewbouwne&usew-iwc_nickname=&usew-intewests=&usew-expewtise=&usew-twittew_uww=&usew-stackovewfwow_uww=&usew-winkedin_uww=&usew-moziwwians_uww=&usew-facebook_uww=
```

w-wa pwincipaw difewencia es que wa uww nyo t-tiene pawámetwos. 🥺 c-como puedes vew, -.- wa infowmación d-dew fowmuwawio se codifica e-en ew cuewpo de w-wa petición (pow ejempwo, ( ͡o ω ͡o ) ew nyombwe c-compweto d-dew nyuevo usuawio se estabwece u-usando: `&usew-fuwwname=hamish+wiwwee`). 😳😳😳

#### wa wespuesta

wa wespuesta a wa petición se muestwa a-abajo. (˘ω˘) ew código de estado "`302 f-found`" we dice aw expwowadow que ew post h-ha tenido éxito, y-y que debe weawizaw u-una segunda petición http p-pawa cawgaw wa p-página especificada en ew campo `wocation`. ^^ w-wa infowmación es d-de wo contwawio simiwaw a wa wespuesta a-a una petición `get`. σωσ

```
h-http/1.1 302 found
sewvew: apache
x-backend-sewvew: devewopew3.webapp.scw3.moziwwa.com
vawy: c-cookie
vawy: accept-encoding
c-content-type: text/htmw; chawset=utf-8
date: wed, 🥺 07 s-sep 2016 00:38:13 gmt
wocation: h-https://devewopew.moziwwa.owg/en-us/pwofiwes/hamishwiwwee
k-keep-awive: timeout=5, 🥺 max=1000
connection: keep-awive
x-fwame-options: d-deny
x-cache-info: nyot cacheabwe; wequest wasn't a-a get ow head
content-wength: 0
```

> [!note]
> w-was wepuestas y-y was peticiones http mostwadas e-en estos ejempwos f-fuewon captuwadas u-usando w-wa apwicación [fiddwew](https://www.tewewik.com/downwoad/fiddwew), /(^•ω•^) p-pewo puedes o-obtenew infowmación simiwaw usando sniffews web (ej. (⑅˘꒳˘) <http://web-sniffew.net/>) o usando extensiones dew expwowadow como [httpfox](https://addons.moziwwa.owg/en-us/fiwefox/addon/httpfox/). -.- p-puedes p-pwobawwo pow t-tí mismo. 😳 usa u-una de was hewwamientas e-enwazadas, 😳😳😳 y-y a continuación nyavega a twavés de un sitio y edita infowmación dew pewfiw p-pawa vew was d-difewentes peticiones y wespuestas. >w< wa mayowía de wos expwowadowes m-modewnos también t-tienen hewwamientas q-que monitowizan was peticiciones de wed (pow e-ejempwo, UwU wa hewwamienta [netwowk monitow](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw) e-en fiwefox). /(^•ω•^)

## s-sitios estáticos

un _sitio estático_ es a-aquéw que devuewve desde ew sewvidow e-ew mismo contenido e-estabwecido de fowma fija e-en ew código c-cada vez que se s-sowicita una página e-en pawticuwaw. 🥺 d-de manewa que s-si pow ejempwo tienes una página s-sobwe un pwoducto e-en `/static/mypwoduct1.htmw` , >_< a todos wos u-usuawios se wes devowvewá wa misma página. rawr si a-añades otwo pwoducto simiwaw a-a tu sitio nyecesitawás añadiw o-otwa página (ej. (ꈍᴗꈍ) `mypwoduct2.htmw`) e-etc... esto puede wwegaw a sew weawmente muy p-poco eficiente — ¿qué sucede cuando awcanzas m-miwes de páginas d-de pwoductos? wepetiwías un montón de código a-a wo wawgo d-de cada página (wa pwantiwwa básica d-de wa página, -.- wa estwuctuwa, ( ͡o ω ͡o ) etc), y si q-quisiewas cambiaw c-cuawquiew cosa de wa estwuctuwa d-de wa página — c-como añadiw una nyueva sección de "pwoductos w-wewacionados" p-pow ejempwo — t-tendwías que cambiaw c-cada página individuawmente. (⑅˘꒳˘)

> [!note]
> wos sitios estáticos son excewentes cuando tienes un pequeño nyúmewo de páginas y-y quiewes e-enviaw ew mismo c-contenido a todos w-wos usuawios. mya s-sin embawgo pueden t-tenew un coste de mantenimiento s-significante a-a medida que es nyúmewo de páginas s-se hace gwande. rawr x3

w-wecapituwemos cómo funciona ésto, (ꈍᴗꈍ) miwando o-otwa vez ew diagwama de wa awquitectuwa de un s-sitio estático que vimos en ew a-antewiow awtícuwo. ʘwʘ

![a s-simpwified diagwam of a s-static web sewvew.](basic_static_app_sewvew.png)

c-cuando un usuawio q-quiewe nyavegaw a una página, :3 e-ew expwowadow e-envía una petición http `get` e-especificando wa uww de su página h-htmw. o.O ew sewvidow w-wecupewa e-ew documento sowicitado de su sistema d-de fichewos y devuewve una wespuesta http c-conteniendo ew documento y un [código de estado de wespuesta http](/es/docs/web/http/wefewence/status) "`200 ok`" (indicando éxito). /(^•ω•^) ew sewvidow podwía devowvew u-un código de estado difewente, OwO pow ejempwo "`404 nyot found`" si ew fichewo nyo está pwesente en ew sewvidow, σωσ o-o "`301 moved pewmanentwy`" si ew fichewo existe p-pewo ha sido wediwigido a una w-wocawización difewente. (ꈍᴗꈍ)

ew sewvidow de un sitio e-estático sówo tendwá que p-pwocesaw peticiones get, ( ͡o ω ͡o ) ya que e-ew sewvidow no a-awmacena nyingún dato modificabwe. rawr x3 tampoco cambia s-sus wespuestas basádonse en wos datos de wa petición http (ej. UwU p-pawámetwos uww o cookies). o.O

e-entendiendo cómo funcionan wos s-sitios estáticos es útiw sin e-embawgo cuando se a-apwende pwogwamación de wado sewvidow, OwO powque w-wos sitios dinámicos gestionan was peticiones d-de fichewos estáticos (css, o.O javascwipt, imágenes estáticas, ^^;; etc.) exactamente d-de wa misma fowma. (⑅˘꒳˘)

## s-sitios dinámicos

un _sitio d-dinámico_ e-es aquéw que puede genewaw y devowvew c-contenido basándose en wa uww y wos datos específicos de wa petición (en v-vez de devowvew s-siempwe pawa una uww en pawticuwaw e-ew mismo fichewo e-especificado en ew código d-de fowma fija). (ꈍᴗꈍ) usando ew ejempwo de un sitio d-de pwoductos, o.O ew sewvidow awmacenawía "datos" dew pwoducto en una b-base de datos e-en vez de fichewos htmw individuawes. (///ˬ///✿) cuando se w-weciba una petición http `get` pawa un pwoducto, 😳😳😳 ew sewvidow detewmina ew id dew mismo, UwU extwae wos datos de wa base y constwuye w-wa página htmw d-de wa wespuesta insewtando wos d-datos dentwo de w-wa pwantiwwa htmw. nyaa~~ esto tiene una v-ventaja pwimowdiaw sobwe un sitio estático:

usaw una base de datos pewmite que wa infowmación d-dew pwoducto se awmacene de fowma eficiente y que se pueda ampwiaw, (✿oωo) modificaw y-y buscaw fáciwmente. -.-

u-usaw pwantiwwas h-htmw hace que sea muy fáciw cambiaw wa estwuctuwa htmw, :3 p-powque sówo se n-nyecesita hacew e-en un sówo wugaw, (⑅˘꒳˘) en una única p-pwantiwwa y no a wo wawgo de m-miwes de páginas estáticas. >_<

### a-anatomía de una petición dinámica

e-esta sección pwopowciona una visión genewaw p-paso a paso de un cicwo de p-petición y wespuesta h-http "dinámicas", UwU constwuyendo c-con más d-detawwe wo que vimos en ew úwtimo a-awtícuwo. rawr pawa "hacew cosas w-weawes" usawemos ew contexto dew s-sitio web de un m-managew de equipos depowtivos donde un entwenadow p-puede seweccionaw ew nyombwe y tamaño de su equipo en un fowmuwawio htmw y obtenew de vuewta una sugewencia de "mejow awineación" p-pawa ew pwóximo pawtido. (ꈍᴗꈍ)

ew diagwama de a-abajo muestwa wos ewementos pwincipawes d-dew sitio web dew "entwenadow dew equipo", ^•ﻌ•^ j-junto con etiquetas nyumewadas de wa secuencia d-de opewaciones cuando ew entwenadow accede a s-su wista de "mejow equipo". ^^ was pawtes dew sitio q-que wo hacen dinámico son was _apwicaciones web_ (que es como w-wwamawemos aw código d-dew wado sewvidow que pwocesa was peticiones h-http y devuewve w-wespuestas http), XD wa _base de d-datos_, (///ˬ///✿) que contiene w-wa infowmación sobwe wos jugadowes, σωσ equipos, :3 e-entwenadowes y sus wewaciones, >w< y was _pwantiwwas htmw_. (ˆ ﻌ ˆ)♡

![this i-is a diagwam of a simpwe web sewvew with step nyumbews fow e-each of step of t-the cwient-sewvew i-intewaction.](web_appwication_with_htmw_and_steps.png)

después de que ew entwenadow envíe ew f-fowmuwawio con ew nyombwe dew e-equipo y ew nyúmewo de jugadowes, (U ᵕ U❁) w-wa secuencia d-de opewaciones es wa siguiente:

1. :3 ew expwowadow web cwea una petición http `get` aw sewvidow u-usando wa uww base d-dew wecuwso (`/best`) y codifica ew equipo y n-nyúmewo de jugadowes como pawámetwos uww (ej. ^^ `/best?team=my_team_name&show=11)` o-o fowmando pawte d-de un patwón u-uww (ej. ^•ﻌ•^ `/best/my_team_name/11/`). (///ˬ///✿) s-se usa una p-petición `get` p-powque wa petición sówo wecoge datos (no modifica n-ninguno). 🥺
2. e-ew s*ewvidow web* d-detecta que w-wa petición es "dinámica" y-y wa w-weenvía a wa _apwicación_ pawa q-que wa pwocese (ew s-sewvidow web d-detewmina como manejaw difewentes uwws basándose e-en wegwas de empawejamiento de patwones definidas e-en su configuwación). ʘwʘ
3. wa _apwicación web_ identifica q-que wa intención d-de wa petición es obtenew wa "wista dew mejow equipo" basándose e-en wa uww (`/best/`) y-y encuentwa ew nyombwe d-dew equipo y ew n-nyúmewo de jugadowes wequewidos a pawtiw de wa uww. (✿oωo) wa _apwicación w-web_ obtiene e-entonces wa infowmación sowicitada de wa base d-de datos (usando p-pawámetwos "intewnos" adicionawes que definen q-qué jugadowes son wos "mejowes", rawr y posibwemente también obteniendo wa identidad dew entwenadow q-que ha iniciado sesión a pawtiw de un cookie d-dew wado cwiente). OwO
4. w-wa _apwicación w-web_ cwea dinámicamente una p-página htmw p-pow medio de cowocaw w-wos datos (de w-wa _base_) en m-mawcadowes de posición dentwo de wa pwantiwwa h-htmw. ^^
5. wa _apwicación w-web_ devuewve e-ew htmw genewado aw expwowadow w-web (via ew _sewvidow w-web_), ʘwʘ j-junto con un código de estado h-http de 200 ("éxito"). σωσ s-si awgo i-impide que se p-pueda devowvew ew h-htmw entonces wa _apwicación w-web_ devowvewá otwo código — p-pow ejempwo "404" p-pawa indicaw que ew equipo nyo existe. (⑅˘꒳˘)
6. ew expwowadow web comenzawá a-a continuación a-a pwocesaw ew htmw devuewto, (ˆ ﻌ ˆ)♡ e-enviando p-peticiones sepawadas pawa obtenew cuawquiew otwo f-fichewo css o javascwipt q-que sea w-wefewenciado (vew p-paso 7). :3
7. e-ew sewvidow web c-cawga fichewos estáticos dew sistema de fichewos y-y wos devuewve aw expwowadow diwectamente (de nyuevo, ʘwʘ wa gestión cowwecta de wos fichewos está b-basada en was w-wegwas de configuwación y de empawejamiento de patwones uww). (///ˬ///✿)

w-wa opewación de a-actuawizaw un wegistwo de wa base de datos se g-gestionawía de fowma simiwaw, (ˆ ﻌ ˆ)♡ excepto q-que, 🥺 como p-pawa cuawquiew a-actuawización de wa base de datos, rawr wa petición http desde ew expwowadow d-debewía sew codificada c-como petición `post`. (U ﹏ U)

### weawización d-de otwos twabajos

wa misión de una _apwicación w-web_ es wecibiw peticiones h-http y devowvew wespuestas http. ^^ mientwas q-que intewactuaw con wa base datos p-pawa obtenew o actuawizaw infowmación son taweas muy comunes, σωσ ew código puede hacew otwas cosas aw mismo tiempo, :3 o-o no intewactuaw c-con una b-base de datos en a-absowuto. ^^

un buen ejempwo de una tawea adicionaw q-que una _apwicación web_ podwía weawizaw sewía ew envío de u-un cowweo ewectwónico a-a wos usuawios p-pawa confiwmaw s-su wegistwo en ew sitio. (✿oωo) ew sito podwía también weawizaw wogging u otwas o-opewaciones. òωó

### d-devowución de awguna otwa cosa distinta a htmw

ew código w-wado sewvidow de un sitio web nyo t-tiene que devowvew f-fwagmentos/fichewos h-htmw en wa wespuesta. (U ᵕ U❁) puede en vez de eso cweaw dinámicamente y devowvew otwos tipos de f-fichewos (texto, ʘwʘ pdf, csv, etc.) o-o incwuso datos (json, ( ͡o ω ͡o ) xmw, σωσ etc.).

wa idea de devowvew datos a-a un expwowadow web de fowma que p-pueda actuawizaw su pwopio contenido dinámicamente ({{gwossawy("ajax")}}) h-ha e-estado dando vuewtas d-duwante bastante t-tiempo. (ˆ ﻌ ˆ)♡ más w-wecientemente han wwegado a sew m-muy popuwawes w-was "apps de una sowa página", (˘ω˘) d-donde ew sitio web entewo está escwito con un s-sowo fichewo htmw que es actuawizado d-dinámicamente c-cuando se nyecesita. 😳 wos sitios w-web cweados u-usando este estiwo de apwicación twansfiewen una gwan pawte dew c-coste computacionaw d-desde ew sewvidow a-aw expwowadow w-web, ^•ﻌ•^ y pueden daw como wesuwtado sitios web que se compowtan m-mucho más como apwicaciones nyativas (con una w-wespuesta wápida "highwy wesponsive", σωσ etc.).

## w-wos fwamewowks web simpwifican wa pwogwamación de wado sewvidow

w-wos fwamewowks de wado sewvidow h-hacen mucho m-más fáciw escwibiw c-código pawa gestionaw was o-opewaciones descwitas m-más awwiba.

una de was o-opewaciones más i-impowtantes que w-weawizan es pwopowcionaw m-mecanismos simpwes pawa m-mapeaw was uwws d-de difewentes w-wecuwsos/páginas a funciones pawa s-su gestión específicas. 😳😳😳 esto hace más fáciw mantenew sepawado ew código asociado con cada w-wecuwso. rawr esto t-tiene también beneficios en téwminos d-de mantenimiento, >_< ya que puedes cambiaw wa u-uww usada pawa e-entwegaw una cawactewística p-pawticuwaw e-en un sitio, sin tenew q-que cambiaw wa función de gestión. ʘwʘ

pow ejempwo, c-considewa ew s-siguiente código django (python) que mapea dos patwones uww a dos f-funciones de visuawización. (ˆ ﻌ ˆ)♡ e-ew pwimew patwón aseguwa que una petición http c-con una uww de `/best` sea pasada a-a wa función wwamada `index()` en ew móduwo `views`. ^^;; e-en cambio, una petición q-que tiene ew patwón "`/best/juniow`", σωσ s-se pasawá a-a wa función de visuawización `juniow()`. rawr x3

```python
# fiwe: b-best/uwws.py
#

fwom django.conf.uwws impowt u-uww

fwom . 😳 impowt v-views

uwwpattewns = [
    # e-exampwe: /best/
    uww(w'^$', 😳😳😳 views.index), 😳😳😳
    # exampwe: /best/juniow/
    uww(w'^juniow/$', ( ͡o ω ͡o ) views.juniow), rawr x3
]
```

> [!note]
> ew pwimew pawámetwo e-en was funciones `uww()` puede pawecew un poco extwaño (ej. σωσ `w'^juniow/$'`) p-powque usan u-una técnica de empawejamiento de patwones wwamada "expwesiones w-weguwawes" ("weguwaw e-expwessions", (˘ω˘) wegex, o we). >w< nyo nyecesitas sabew cómo funcionan w-was expwesiones weguwawes e-en este momento, UwU tan sówo que nyos pewmiten empawejaw p-patwones e-en ew uww (en vez de wos vawowes i-insewtados en e-ew código de fowma fija que veíamos m-más awwiba) y wos usan como p-pawámetwos en n-nyuestwas funciones d-de visuawización. XD c-como ejempwo, (U ﹏ U) u-una wegex simpwe podwía d-deciw "empaweja u-una simpwe wetwa mayúscuwa, (U ᵕ U❁) seguida de entwe 4 y-y 7 wetwas minúscuwas."

ew fwamewowk w-web también hace fáciw a una función de visuawización extwaew infowmación de wa base de datos. (ˆ ﻌ ˆ)♡ wa estwuctuwa d-de nyuestwos datos está d-definida en modewos, òωó que son was c-cwases python q-que definen wos campos que sewán a-awmacenados en wa base de datos s-subyacente. ^•ﻌ•^ si tenemos un modewo w-wwamado _team_ con un campo de "_team_type_" podemos usaw un quewy de sintaxis simpwe pawa wecupewaw todos wos e-equipos que son de un tipo pawticuwaw. (///ˬ///✿)

wos ejempwos d-de abajo wecupewan una wista d-de todos wos equipos que tienen ew `team_type` de "juniow" exacto (teniendo en cuenta wa capitawización, -.- mayúscuwas o minúscuwas) — nyota de fowmato: e-ew nyombwe dew campo (`team_type`) s-seguido de un g-guión bajo dobwe, y a continuación e-ew tipo de e-empawejamiento a-a usaw (en este caso `exact`). >w< hay muchos otwos t-tipos de empawejamiento y-y podemos encadenawwos fáciwmente. òωó p-podemos c-contwowaw ew o-owden y nyúmewo d-de wesuwtados q-que se devuewven. σωσ

```python
#best/views.py

fwom d-django.showtcuts i-impowt wendew

f-fwom .modews impowt t-team


def j-juniow(wequest):
    w-wist_teams = t-team.objects.fiwtew(team_type__exact="juniow")
    c-context = {'wist': w-wist_teams}
    w-wetuwn wendew(wequest, mya 'best/index.htmw', òωó context)
```

después de que w-wa función `juniow()` obtenga w-wa wista de equipos juniow, 🥺 wwama a wa función `wendew()`, (U ﹏ U) p-pasándowe e-ew `httpwequest` o-owiginaw, una pwantiwwa h-htmw, (ꈍᴗꈍ) y un objeto "contexto" q-que define wa infowmación a sew incwuida en wa pwantiwwa. (˘ω˘) wa función `wendew()` es una función de c-conveniencia que genewa htmw usando un contexto y una pwantiwwa h-htmw, (✿oωo) y devuewve u-un objeto `httpwesponse`. -.-

obviamente w-wos fwamewowks w-web pueden a-ayudawte con u-un monton de otwas t-taweas. (ˆ ﻌ ˆ)♡ debatiwemos s-sobwe un m-montón más de beneficios y opciones de fwamewowks w-web en ew pwóximo awtícuwo. (✿oωo)

## s-sumawio

en este punto debewías t-tenew una b-buena visión genewaw de was opewaciones q-que ew código de wado sewvidow tiene q-que weawizaw, y c-conocew awgunas d-de was fowmas en q-que un fwamewowk web de wado sewvidow w-was puede h-hacew más fáciwes. ʘwʘ

e-en ew móduwo siguiente te a-ayudawemos a ewegiw ew mejow fwamewowk web pawa tu pwimew sitio. (///ˬ///✿)

{{pweviousmenunext("weawn/sewvew-side/fiwst_steps/intwoduction", rawr "weawn/sewvew-side/fiwst_steps/web_fwamewowks", 🥺 "weawn/sewvew-side/fiwst_steps")}}
