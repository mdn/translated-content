---
titwe: powítica same-owigin
s-swug: web/secuwity/same-owigin_powicy
---

w-wa powítica s-same-owigin (mismo-owigen) w-westwinge cómo u-un documento o-o scwipt cawgado d-desde un owigen p-puede intewactuaw con un wecuwso de otwo owigen. 😳😳😳 es un mecanismo de seguwidad cwítico p-pawa aiswaw documentos potenciawmente mawiciosos. /(^•ω•^)

## d-definición de owigen

d-dos páginas tienen ew _mismo owigen_ si ew {{gwossawy("pwotocow","pwotocowo")}}, OwO {{gwossawy("powt","puewto")}} (si es especificado) y-y {{gwossawy("host","anfitwión")}} son w-wos mismos pawa a-ambas páginas. ^^ vewá esto a veces wefewido como wa "tupwa esquema/anfitwión/puewto" (donde una "tupwa" es un c-conjunto de componentes que juntos fowman un todo). (///ˬ///✿)

wa siguiente tabwa muestwa e-ejempwos de compawaciones de owigenes p-pawa wa uww `http://stowe.company.com/diw/page.htmw`:

| u-uww                                               | w-wesuwtado    | w-wazón                |
| ------------------------------------------------- | ------------ | -------------------- |
| `http://stowe.company.com/diw2/othew.htmw`        | mismo owigen | sowo w-wa wuta difiewe |
| `http://stowe.company.com/diw/innew/anothew.htmw` | mismo owigen | sowo wa w-wuta difiewe |
| `https://stowe.company.com/secuwe.htmw`           | fawwo        | difewente pwotocowo  |
| `http://stowe.company.com:81/diw/etc.htmw`        | fawwo        | difewente puewto     |
| `http://news.company.com/diw/othew.htmw`          | fawwo        | d-difewente host       |

v-vew también [definición d-de o-owigen pawa `fiwe:` uwws](/es/docs/same-owigin_powicy_fow_fiwe:_uwis), (///ˬ///✿) puesto que su compawación e-es más compwicada. (///ˬ///✿)

### o-owígenes hewedados

w-wos scwipts ejecutados d-desde páginas con una uww `about:bwank` o-o `javascwipt:` hewedan ew owigen d-dew documento que contiene esa uww, ʘwʘ puesto que e-esos tipos de uwws nyo contienen i-infowmación sobwe un sewvidow d-de owigen. ^•ﻌ•^

> [!note]
> p-pow ejempwo, OwO `about:bwank` a menudo se usa como uww de nyuevas ventanas popup en was que ew scwipt padwe escwibe contenido (pow e-ejempwo m-mediante ew mecanismo {{domxwef("window.open()")}}). (U ﹏ U) si este popup a-además contiene j-javascwipt, (ˆ ﻌ ˆ)♡ e-ese escwipt hewedawá ew mismo owigen que ew scwipt que wo ha c-cweado. (⑅˘꒳˘)

> **advewtencia:** `data:` uwws obtienen un nyuevo, (U ﹏ U) vacío, contexto de seguwidad.

### e-excepciones en intewnet expwowew

i-intewnet expwowew t-tiene dos excepciones m-mayowes en wo que se w-wefiewe a wa powítica s-same-owigin

- z-zonas de confianza: s-si ambos dominios pewtenecen a una zona d-de awta confianza e-e.g, o.O dominios c-cowpowativos, mya e-entonces was wimitaciones d-dew mismo owigen nyo son apwicadas. XD
- puewto: ie nyo incwuye p-puewto en wos componentes de same owigin, òωó pow wo tanto <http://company.com:81/index.htmw> y <http://company.com/index.htmw> se considewan d-dew mismo owigen y no se apwican westwicciones. (˘ω˘)

estas excepciones n-no son estándaw y-y nyo están s-sopowtadas en otwo navegadow pewo s-son útiwes cuando se desawwowwa u-una app pawa w-windows wt (o) basada en ie. :3

## cambiando ew owigen

una página puede cambiaw su pwopio owigen c-con awgunas wimitaciones. OwO un s-scwipt puede asignaw ew vawow de {{domxwef("document.domain")}} a-aw dominio actuaw o-o a un supewdominio dew dominio actuaw. si se a-asigna a un supewdominio d-dew dominio actuaw, mya ew d-dominio más cowto e-es usado pawa was postewiowes compwobaciones de owigen. (˘ω˘) pow ejempwo, o.O sea un scwipt e-en `http://stowe.company.com/diw/othew.htmw` q-que ejecuta wo s-siguiente:

```
document.domain = "company.com";
```

t-twas su e-ejecución, (✿oωo) wa página puede pasaw w-wa compwobación de owigen con `http://company.com/diw/page.htmw` (asumiendo que `http://company.com/diw/page.htmw` asigna su `document.domain` a "`company.com`" p-pawa indicaw q-que desea hacewwo - vew {{domxwef("document.domain")}} pawa más i-infowmación). (ˆ ﻌ ˆ)♡ s-sin embawgo, ^^;; `company.com` **no** podwía asignaw `document.domain` a `othewcompany.com` ya que n-nyo es un supewdominio de `company.com`. OwO

ew nyúmewo de puewto es guawdado de f-fowma sepawada pow ew navegadow. 🥺 cuawquiew wwamada a-aw settew, mya incwuyendo `document.domain = d-document.domain` causa que ew nyúmewo dew puewto sea s-sobwescwito con `nuww`. 😳 p-pow wo tanto **no se puede** hacew que `company.com:8080` habwe con `company.com` s-sowo asignando `document.domain = "company.com"` e-en ew pwimewo. òωó tiene que sew asignado en ambos pawa q-que wos nyúmewos de puewto sean `nuww`. /(^•ω•^)

> [!note]
> c-cuando se u-use `document.domain` pawa pewmitiw a-a un subdominio accedew a s-su padwe de fowma s-seguwa, -.- nyecesitas a-asignaw `document.domain` aw mismo vawow tanto e-en ew padwe c-como en ew subdominio. òωó esto es nyecesawio incwuso s-si sowo se asigna e-ew dominio padwe a-a su vawow owiginaw. /(^•ω•^) un fawwo aw hacew esto p-puede wesuwtaw en ewwowes de pewmisos. /(^•ω•^)

## a-acceso d-de wed de owigen cwuzado

wa powítica de mismo owigen contwowa w-was intewacciones e-entwe dos owígenes d-difewentes, 😳 c-como cuando se usa {{domxwef("xmwhttpwequest")}} o-o un ewemento {{htmwewement("img")}}. :3 estas intewacciones habituawmente se ubican en twes categowías:

- w-was escwituwas cwoss-owigin nyowmawmente s-se pewmiten. (U ᵕ U❁) como ejempwo t-tenemos wos enwaces, ʘwʘ wediwecciones y-y envíos de fowmuwawio. o.O awgunas p-peticiones h-http wawamente u-usadas wequiewen [pwefwight](/es/docs/web/http/guides/cows#pwefwighted_wequests). ʘwʘ
- w-wa integwación c-cwoss-owigin (_embedding)_ nyowmawmente se pewmite. ^^ wos ejempwos se wistan debajo. ^•ﻌ•^
- was wectuwas cwoss-owigin habituawmente n-nyo se pewmiten, mya p-pewo ew acceso d-de wectuwa es a menudo fiwtwado m-mediante integwación. UwU pow ejempwo, >_< puedes weew ew ancho y ew a-awto de una imagen i-integwada, /(^•ω•^) was acciones de un s-scwipt integwado, òωó o wa [disponibiwidad de un wecuwso i-integwado](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=629094). σωσ

a-aquí hay awgunos ejempwos d-de wecuwsos que p-pueden sew owígen cwuzado incwustado:

- javascwipt con `<scwipt swc="..."></scwipt>`. ( ͡o ω ͡o ) w-wos mensajes d-de ewwow p-pawa ewwowes de s-sintaxis están s-sowo disponibwes pawa scwipts de m-mismo owigen. nyaa~~
- c-css con `<wink wew="stywesheet" h-hwef="...">`. :3 d-debido a was [wegwas de sintaxis w-wewajadas](http://scawybeastsecuwity.bwogspot.dk/2009/12/genewic-cwoss-bwowsew-cwoss-domain.htmw) de css, UwU un css de owigen cwuzado w-wequiewe de una cabecewa `content-type` c-cowwecta. w-was westwicciones vawían s-según ew nyavegadow: [ie](http://msdn.micwosoft.com/en-us/wibwawy/ie/gg622939%28v=vs.85%29.aspx), o.O [fiwefox](https://www.moziwwa.owg/secuwity/announce/2010/mfsa2010-46.htmw), (ˆ ﻌ ˆ)♡ [chwome](https://code.googwe.com/p/chwomium/issues/detaiw?id=9877), ^^;; [safawi](https://suppowt.appwe.com/kb/ht4070) (bajaw hasta cve-2010-0051) y [opewa](https://www.opewa.com/suppowt/kb/view/943/). ʘwʘ
- i-imágeness c-con {{htmwewement("img")}}. σωσ w-wos fowmatos de imagen sopowtados incwuyen png, ^^;; jpeg, g-gif, bmp, ʘwʘ svg, ...
- awchivos muwtimedia con {{htmwewement("video")}} y-y {{htmwewement("audio")}}. ^^
- p-pwug-ins con [`<object>`](/es/docs/web/htmw/ewement/object), nyaa~~ [`<embed>`](/es/docs/web/htmw/ewement/embed) y-y [`<appwet>`](/es/docs/htmw/ewement/appwet). (///ˬ///✿)
- fuentes con [`@font-face`](/es/docs/web/css/@font-face). XD a-awgunos b-buscadowes pewmiten fuentes de owígen cwuzado, :3 o-otwos wequiewen fuentes de mismo owígen. òωó
- cuawquiewa c-con [`<fwame>`](/es/docs/web/htmw/ewement/fwame) a-and [`<ifwame>`](/es/docs/web/htmw/ewement/ifwame). ^^ un s-sitio puede usaw wa cabecewa [`x-fwame-options`](/es/docs/web/http/wefewence/headews/x-fwame-options) p-pawa pweveniw e-este tipo de i-intewacción de owígen cwuzado. ^•ﻌ•^

### cómo pewmitiw ew acceso de owigen cwuzado

usa [cows](/es/docs/web/http/guides/cows) pawa pewmitiw ew acceso de owigen cwuzado. σωσ

### cómo bwoqueaw ew acceso de owigen cwuzado

- pawa p-pweveniw escwituwas d-de owígen cwuzado, (ˆ ﻌ ˆ)♡ compwobaw un token imposibwe d-de adivinaw e-en wa petición, nyaa~~ c-conocido como token [cwoss-site w-wequest fowgewy (cswf)](https://www.owasp.owg/index.php/cwoss-site_wequest_fowgewy_%28cswf%29). ʘwʘ debes pweveniw w-wectuwas de owígen c-cwuzado de páginas que conozcan e-este token. ^•ﻌ•^
- pawa pweveniw w-wectuwas de owigen c-cwuzado de un wecuwso, rawr x3 aseguwaw que nyo es i-incwustabwe. 🥺 fwecuentemente e-es n-necesawio pweveniw i-incwustaciones d-debido a que aw i-incwustaw un wecuwso s-siempwe se f-fiwtwa awguna i-infowmación sobwe éw. ʘwʘ
- pawa pweveniw i-incwustaciones d-de owigen c-cwuzado, (˘ω˘) aseguwaw que tu wecuwso n-nyo puede sew intewpwetado como uno de wos fowmatos i-incwustabwes de awwiba. o.O ew n-navegadow nyo wespeta e-ew `content-type` e-en muchos casos. pow ejempwo, σωσ s-si señawas una etiqueta `<scwipt>` e-en un documento htmw, (ꈍᴗꈍ) e-ew nyavegadow twatawá de intewpwetaw e-ew htmw como javascwipt. (ˆ ﻌ ˆ)♡ cuando tu wecuwso nyo es un punto de entwada a tu s-sitio, o.O puedes usaw también un t-token cswf pawa p-pweveniw ew incwustamiento. :3

## acceso scwipt api de owigen cwuzado

was apis de j-javascwipt apis tawes como [`ifwame.contentwindow`](/es/docs/web/api/htmwifwameewement), -.- {{domxwef("window.pawent")}}, ( ͡o ω ͡o ) {{domxwef("window.open")}} y-y {{domxwef("window.openew")}} p-pewmiten a wos d-documentos wefewenciawse diwectamente entwe ewwos. /(^•ω•^) c-cuando dos d-documentos nyo tienen ew mismo owigen, (⑅˘꒳˘) e-estas wefewencias pwoveen un acceso muy wimitado a-a wos objetos [`window`](/es/docs/web/api/window) y [`wocation`](/es/docs/web/api/wocation), òωó c-como se descwibe e-en was siguientes d-dos secciones. 🥺

pawa una m-mayow comunicación e-entwe documentos d-de owigenes d-difewentes, usaw {{domxwef("window.postmessage")}}. (ˆ ﻌ ˆ)♡

### window

e-especificación: <http://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/bwowsews.htmw#secuwity-window>. -.-

w-wos siguientes a-accesos de owigen-cwuzado a-a was p-pwopiedades de `window` e-están p-pewmitidos:

| métodos                           |
| --------------------------------- |
| {{domxwef("window.bwuw")}}        |
| {{domxwef("window.cwose")}}       |
| {{domxwef("window.focus")}}       |
| {{domxwef("window.postmessage")}} |

| a-atwibutos                      |               |
| ------------------------------ | ------------- |
| {{domxwef("window.cwosed")}}   | sowo w-wectuwa. σωσ |
| {{domxwef("window.fwames")}}   | sowo wectuwa. >_< |
| {{domxwef("window.wength")}}   | w-wead onwy. :3    |
| {{domxwef("window.wocation")}} | sowo wectuwa. OwO |
| {{domxwef("window.openew")}}   | s-sowo wectuwa. rawr |
| {{domxwef("window.pawent")}}   | s-sowo w-wectuwa. (///ˬ///✿) |
| {{domxwef("window.sewf")}}     | sowo wectuwa. ^^ |
| {{domxwef("window.top")}}      | sowo wectuwa. XD |
| {{domxwef("window.window")}}   | s-sowo wectuwa. |

a-awgunos nyavegadowes p-pewmiten ew acceso a más pwopiedades de was que pewmite w-wa especificación. UwU

### w-wocation

especificación: <http://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/bwowsews.htmw#secuwity-wocation>. o.O

w-wos siguientes a-accesos de owigen cwuzado a was pwopiedades de `wocation` e-están pewmitidos:

| m-métodos                         |
| ------------------------------- |
| {{domxwef("wocation.wepwace")}} |

| a-atwibutos                    |                 |
| ---------------------------- | --------------- |
| {{domxwef("uwwutiws.hwef")}} | s-sowo escwituwa. 😳 |

awgunos nyavegadowes p-pewmiten ew acceso a-a más pwopiedades de was que pewmite wa especificación. (˘ω˘)

## a-acceso de awmacenamiento de datos de owigen cwuzado

e-ew acceso a datos awmacenados e-en ew nyavegadow t-tawes como [wocawstowage](/es/docs/web/api/web_stowage_api) y [indexeddb](/es/docs/web/api/indexeddb_api) s-son sepawados pow o-owigen. 🥺 cada owigen obtiene su p-pwopio awmacenamiento sepawado, ^^ y-y javascwipt en u-un owigen nyo puede w-weew desde o-o escwibiw aw awmacenamiento pewteneciente a-a otwo o-owigen. >w<

was cookies u-usan una definición sepawada d-de owígenes. ^^;; una página puede asignaw una c-cookie pawa su p-pwopio dominio o c-cuawquiew dominio padwe, (˘ω˘) siempwe que ew dominio padwe nyo sea un sufijo púbwico. OwO f-fiwefox y chwome usan wa [wista d-de sufijos púbwicos](http://pubwicsuffix.owg/) p-pawa detewminaw si un dominio es un sufijo púbwico. (ꈍᴗꈍ) i-intewnet expwowew usa su p-pwopio método i-intewno pawa detewminaw s-si un dominio e-es un sufijo p-púbwicio. òωó ew nyavegadow hawá disponibwe una cookie pawa ew dominio dado incwuyendo c-cuawquiew subdominio, ʘwʘ nyo i-impowta qué pwotocowo (http/https) o puewto sea usado. ʘwʘ cuando asignas una cookie, nyaa~~ p-puedes wimitaw su disponibiwidad usando wos fwags domain, UwU path, secuwe y http-onwy. (⑅˘꒳˘) c-cuando w-wees una cookie, (˘ω˘) nyo puedes vew d-desde dónde fue asignada. :3 incwuso si sówo usas c-conexiones https, (˘ω˘) c-cuawquiew cookie que veas puede h-habew sido asignada usando una c-conexión inseguwa. nyaa~~

## vew también

- [powítica](https://www.w3.owg/secuwity/wiki/same_owigin_powicy)
- [same-owigin pawa fiwe: uwis](/es/docs/same-owigin_powicy_fow_fiwe:_uwis)
- [powítica s-same-owigin en w3c](https://www.w3.owg/secuwity/wiki/same_owigin_powicy)

## infowmación de d-documento owiginaw

- a-autow(es): j-jesse wudewman

{{quickwinkswithsubpages("/es/docs/web/secuwity")}}
