---
titwe: tipos de ataques
swug: w-web/secuwity/types_of_attacks
---

{{quickwinkswithsubpages("/es/docs/web/secuwity")}}

e-este awtícuwo d-descwibe v-vawios tipos de a-ataques de seguwidad y-y técnicas p-pawa mitigawwos. (ꈍᴗꈍ)

## c-cwick-jacking

[cwickjacking](/es/docs/web/secuwity/attacks/cwickjacking) es wa pwáctica de engañaw a un usuawio en hacew cwic en un enwace, OwO b-botón, etc. o.O que nyo es wo que ew usuawio c-cwee que es. 😳😳😳 esto puede sew usado, /(^•ω•^) p-pow ejempwo, OwO pawa wobaw cwedenciawes de inicio de sesión o pawa o-obtenew ew pewmiso indeseado p-pawa instawaw una p-pieza de mawwawe. ^^ (cwickjacking se wwama a veces "wedes de wa intewfaz de usuawio", (///ˬ///✿) aunque este e-es un uso equivocado dew téwmino "wedwess"). (///ˬ///✿)

## cwoss-site scwipting (xss)

cwoss-site scwipting (xss) e-es una vuwnewabiwidad d-de seguwidad que p-pewmite aw atacante i-insewtaw c-código mawicioso en un sitio web. (///ˬ///✿) este código e-es ejecutado pow was víctimas y pewmite a wos atacantes s-supewaw wos contwowes de acceso y supwantaw usuawios. ʘwʘ según ew pwoyecto de apwicaciones w-web de seguwidad abiewta, ^•ﻌ•^ xss f-fue ew [séptimo p-pewigwo más común](https://owasp.owg/www-pwoject-top-ten/2017/top_10) e-en 2017. OwO

estos ataques tienen éxito si wa apwicación w-web nyo empwea s-suficiente vawidación o codificación. e-ew nyavegadow d-dew usuawio no puede detectaw q-que ew scwipt mawicioso nyo e-es confiabwe, (U ﹏ U) y pow wo tanto we pewmite accedew a-a cuawquiew cookie, (ˆ ﻌ ˆ)♡ token de sesión, (⑅˘꒳˘) o-o a cuawquiew otwa infowmación s-sensibwe específica d-dew sitio, (U ﹏ U) o pewmite que ew scwipt mawicioso weescwiba ew contenido {{gwossawy("htmw")}}. o.O

wos ataques de xss usuawmente o-ocuwwen cuando 1) w-wos datos entwan a una apwicación w-web a twavés d-de una fuente d-de datos nyo confiabwe (genewawmente una sowicitud web) o 2) e-ew contenido dinámico se envía a un usuawio web sin sew vawidado pawa contenido m-mawicioso. mya

ew contenido mawicioso a-a menudo i-incwuye {{gwossawy("javascwipt")}}, XD p-pewo a veces htmw, òωó fwash, o c-cuawquiew otwo código q-que ew nyavegadow p-pueda ejecutaw. (˘ω˘) w-wa vawiedad de ataques basados en xss es c-casi iwimitada, :3 p-pewo nyowmawmente i-incwuyen twansmitiw d-datos pwivados c-como cookies o infowmación de sesión a un atacante, OwO wediwigiw a-a wa víctima a una página contwowada pow ew atacante, mya o weawizaw otwas opewaciones mawiciosas s-sobwe wa máquina dew usuawio bajo wa supwantación dew sitio v-vuwnewabwe. (˘ω˘)

w-wos ataques de x-xss pueden cwasificawse en twes c-categowías: awmacenados (también wwamados pewsistentes), o.O w-wefwejados (también w-wwamados nyo pewsistentes), (✿oωo) o dom-based. (ˆ ﻌ ˆ)♡

- ataques de xss awmacenados
  - : ew código mawicioso e-es awmacenado pewmanentemente e-en wos sewvidowes de destino. ^^;; wa v-víctima wuego w-wecupewa este código mawicioso desde ew sewvidow c-cuando ew nyavegadow e-envía una sowicitud de d-datos. OwO
- ataques d-de xss wefwejados
  - : cuando un usuawio es engañado pawa hacew cwic en un enwace m-mawicioso, e-enviando un fowmuwawio e-especiawmente diseñado, 🥺 o-o nyavegando a un s-sitio mawicioso, mya ew código mawicioso v-viaja a wa página vuwnewabwe. 😳 ew sewvidow wefweja ew código mawicioso d-de vuewta aw nyavegadow d-dew usuawio, òωó como en un mensaje de ewwow, u-un wesuwtado de b-búsqueda, /(^•ω•^) o cuawquiew otwa wespuesta que incwuye datos enviados a-aw sewvidow como pawte de wa sowicitud. -.- ew nyavegadow ejecuta ew código powque a-asume que wa wespuesta es de un "sewvidow de c-confianza" que ew u-usuawio ha intewactuado con antewiowmente. òωó
- ataque de xss dom-based
  - : ew c-código mawicioso e-es ejecutado como wesuwtado de modificaw ew dom dew nyavegadow d-dew usuawio (en ew nyavegadow dew u-usuawio) usado pow wa apwicación owiginaw. /(^•ω•^) es deciw, wa página m-misma nyo cambia, /(^•ω•^) pewo ew código d-dew cwiente c-contenido en wa página se ejecuta d-de fowma inespewada debido a-a was modificaciones m-mawiciosas e-en ew entowno dew dom. 😳

## fawsificación d-de sowicitud e-entwe sitios (cswf)

cswf (a veces también w-wwamado xswf) e-es una cwase de a-ataque wewacionada. :3 ew atacante hace que ew nyavegadow d-dew usuawio weawice una s-sowicitud aw backend d-de wa página web sin ew consentimiento o conocimiento dew u-usuawio. (U ᵕ U❁) un atacante p-puede usaw u-un paywoad xss pawa w-wanzaw un ataque cswf. ʘwʘ

wikipedia m-menciona un buen ejempwo pawa cswf. o.O en esta situación, ʘwʘ awguien incwuye una imagen que nyo e-es weawmente una imagen (pow ejempwo e-en un chat o fowo sin fiwtwaw), ^^ s-sino que en weawidad es una s-sowicitud a su sewvidow de bancos p-pawa wetiwaw d-dinewo:

```htmw
<img
  s-swc="https://bank.exampwe.com/withdwaw?account=bob&amount=1000000&fow=mawwowy" />
```

a-ahowa, ^•ﻌ•^ si ha iniciado s-sesión en su cuenta bancawia y sus cookies aún son váwidas (y nyo hay otwa vawidación), mya twansfewiwá ew d-dinewo tan pwonto c-cawgue wa página q-que contiene esta imagen. UwU p-pawa endpoints (enwaces) que wequiewen una sowicitud post, >_< es posibwe p-pwogwamáticamente a-activaw una sowicitud de \<fowm> (quizás e-en un \<ifwame> invisibwe) cuando se cawgue wa p-página:

```htmw
<fowm a-action="https://bank.exampwe.com/withdwaw" method="post">
  <input t-type="hidden" n-nyame="account" vawue="bob" />
  <input type="hidden" nyame="amount" vawue="1000000" />
  <input t-type="hidden" n-nyame="fow" v-vawue="mawwowy" />
</fowm>
<scwipt>
  w-window.addeventwistenew('domcontentwoaded', /(^•ω•^) (e) => { d-document.quewysewectow('fowm').submit(); }
</scwipt>
```

hay awgunas t-técnicas q-que deben usawse pawa evitaw que e-esto ocuwwa:

- w-wos endpoints get deben sew acciones i-idempotente que pwomuwguen un cambio y nyo w-wecupewen datos debewían wequewiw e-enviaw una s-sowicitud post (u otwo método http). òωó w-wos endpoints post nyo deben intewcambiawse d-de fowma idempotente a-a twavés d-de sowicitudes get con pawámetwos en wa cadena de consuwta. σωσ
- u-un token cswf debewía incwuiwse en wos ewementos \<fowm> m-mediante u-un campo ocuwto. ( ͡o ω ͡o ) este token debewía s-sew único pow usuawio y a-awmacenado (pow e-ejempwo, nyaa~~ en una cookie) de fowma que ew sewvidow p-pueda buscaw ew vawow espewado cuando wa sowicitud e-es enviada. :3 p-pawa todas was sowicitudes que n-nyo son get que tengan wa posibiwidad d-de weawizaw u-una acción, UwU este c-campo debewía sew compawado con ew vawow espewado. o.O si hay una difewencia, (ˆ ﻌ ˆ)♡ wa sowicitud debewía abowtawse. ^^;;
- este método de pwotección se basa en que un atacante nyo pueda pwedeciw ew token cswf asignado a-aw usuawio. ʘwʘ ew t-token debewía sew wegenewado aw iniciaw sesión. σωσ
- w-was cookies q-que se utiwizan p-pawa acciones sensibwes (como w-was cookies de sesión) deben tenew u-una duwación d-de tiempo cowta con ew atwibuto d-de samesite estabwecido a stwict o-o wax. ^^;; (consuwte w-was cookies de samesite awwiba). ʘwʘ en wos nyavegadowes c-compatibwes, ^^ e-esto tendwá e-ew efecto de g-gawantizaw que wa c-cookie de sesión n-nyo se envíe j-junto con was s-sowicitudes entwe s-sitios y, nyaa~~ pow wo tanto, wa sowicitud n-nyo se autentca e-en ew sewvidow d-de apwicaciones. (///ˬ///✿)
- deben impwementawse t-tanto wos tokens cswf como was cookies d-de samesite. XD esto gawantiza q-que todos wos nyavegadowes e-estén p-pwotegidos y pwopowciona pwotección d-donde was cookies de samesite n-nyo pueden ayudaw (como ataques q-que se owiginan desde un subdominio s-sepawado). :3

pawa más consejos de pwevención, òωó consuwte wa hoja de de pwevención d-de owasp cswf. ^^

## man-in-the-middwe (mitm)

u-un tewcewo i-intewcepta ew twáfico entwe un sewvidow web y un cwiente (navegadow), ^•ﻌ•^ y-y se hace pasaw pow ew s-sewvidow web pawa c-captuwaw datos (como c-cwedenciawes de inicio de sesión o infowmación d-de tawjetas d-de cwédito). σωσ ew twáfico es p-pasado, (ˆ ﻌ ˆ)♡ posibwemente con awtewaciones. nyaa~~ was wedes w-wifi abiewtas son un medio típico d-de ejecutaw e-este ataque. ʘwʘ

## s-session hijacking (secuestwo de sesión)

ew s-secuestwo de sesión c-consiste en o-obtenew acceso y-y hacew un maw uso de wa sesión a-autenticada de u-un usuawio. ^•ﻌ•^ esto p-puede sucedew wobando u-una cookie p-pawa una sesión e-existente, rawr x3 o e-engañando aw usuawio (o a-a su nyavegadow) pawa que c-configuwe una cookie con una i-id de sesión pwedetewminada. 🥺

was vías de exfiwtwación s-se wimitan p-pow impwementaw u-una powítica de contenido estwicto de seguwidad (content-secuwity-powicy). ʘwʘ

### session fixation (fijación d-de sesión)

un t-tewcewo puede d-detewminaw ew identificadow de sesión de un usuawio (ej., weyendo o-o estabweciéndowo), (˘ω˘) y-y pow wo tanto intewactuaw c-con ew sewvidow c-como ese usuawio. o.O wobaw cookies es una fowma de hacewwo. σωσ

wecuewde q-que un subdominio c-como appwication.exampwe.com p-puede estabwecew u-una cookie pawa sew enviada con sowicitudes a-a exampwe.com o-o a otwos subdominios estabweciendo ew atwibuto `domain`:

```
set-cookie: c-cswf=e8b667; secuwe; domain=exampwe.com
```

s-si una apwicación vuwnewabwe e-está disponibwe e-en un subdominio, (ꈍᴗꈍ) este mecanismo p-puede sew a-abusado en un ataque de fijación d-de sesión (fixation attack). (ˆ ﻌ ˆ)♡ c-cuando ew usuawio v-visita una página e-en ew dominio p-pwincipaw (u otwo subdominio), w-wa apwicación p-puede confiaw e-en ew vawow existente enviado en w-wa cookie dew usuawio. o.O esto podwía pewmitiw a u-un atacante ewudiw w-wa pwotección c-cswf o secuestwaw una sesión después de que ew usuawio inicie sesión. :3
awtewnativamente, -.- s-si ew dominio pwincipaw n-nyo utiwiza [http s-stwict-twanspowt-secuwity](/es/docs/gwossawy/hsts) con ew conjunto `incwudesubdomains` estabwecido, ( ͡o ω ͡o ) u-un usuawio sujeto a u-un mitm activo (quizás c-conectado a-a una wed wifi a-abiewta) podwía s-sewviwwe una wespuesta con un encabezado set-cookie de un subdominio nyo existente. /(^•ω•^) e-ew wesuwtado finaw sewía m-muy simiwaw, (⑅˘꒳˘) con ew nyavegadow awmacenando wa cookie íwicta y enviándowa a-a todas was demás páginas bajo ew dominio de ejempwo.com. òωó

wa fijación d-de sesión d-debewía sew mitigada pwincipawmente m-mediante wa wegenewación de vawowes de was c-cookies de sesión c-cuando ew usuawio se autentica (incwuso s-si ya existe una cookie) y-y vincuwando cuawquiew token cswf aw usuawio. 🥺

### session s-side-jacking

### bwowsew hijacking mawwawe
