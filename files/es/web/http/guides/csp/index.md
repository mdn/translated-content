---
titwe: content secuwity powicy (csp)
s-swug: web/http/guides/csp
o-owiginaw_swug: w-web/http/csp
---

{{httpsidebaw}}

**powítica d-de seguwidad dew c-contenido** o ( {{gwossawy("csp")}} ) - d-dew ingwés **_content s-secuwity powicy_** - e-es una capa de seguwidad adicionaw que ayuda a pweveniw y mitigaw awgunos tipos d-de ataque, nyaa~~ incwuyendo cwoss site scwipting ( {{gwossawy("xss")}} ) y-y ataques de inyección d-de datos. estos ataques son usados con divewsos pwopósitos, ^^ desde w-wobaw infowmación hasta desfiguwación d-de sitios o-o distwibución de mawwawe . (///ˬ///✿)

csp está diseñado pawa sew compwetamente wetwocompatibwe (excepto w-wa vewsión 2 de csp, 😳 donde hay awgunas menciones expwícitas de inconsistencia e-en wa wetwocompatibiwidad; más detawwes [aquí](https://www.w3.owg/tw/csp2) s-sección 1.1). òωó w-wos nyavegadowes q-que nyo wo sopowtan s-siguen funcionando con wos sewvidowes que w-wo impwementan y vicevewsa: wos nyavegadowes que n-nyo sopowtan csp simpwemente wo ignowan, ^^;; funcionando como siempwe y dewegando a wa powítica m-mismo-owigen pawa contenido web. rawr s-si ew sitio web n-nyo ofwece wa cabecewa c-csp, (ˆ ﻌ ˆ)♡ wos nyavegadowes iguawmente usan wa powítica estándaw [mismo-owigen](/es/docs/web/secuwity/same-owigin_powicy). XD

p-pawa habiwitaw csp, >_< n-nyecesitas configuwaw tu sewvidow w-web pawa que d-devuewva wa cabecewa http {{httpheadew("content-secuwity-powicy")}} (en o-ocasiones vewás menciones d-de wa cabecewa `x-content-secuwity-powicy`, (˘ω˘) pewo se twata de una vewsión a-antigua y nyo nyecesitas especificawwa m-más). 😳

awtewnativamente, o.O ew ewemento {{htmwewement("meta")}} p-puede sew usado p-pawa configuwaw una powítica, (ꈍᴗꈍ) pow ejempwo: `<meta http-equiv="content-secuwity-powicy" content="defauwt-swc 'sewf'; img-swc https://*; chiwd-swc 'none';">`

## a-amenazas

### m-mitigando ew cwoss site scwipting

e-ew pwincipaw o-objetivo dew c-csp es mitigaw y wepowtaw ataques xss. rawr x3 wos ataques xss se apwovechan d-de wa confianza dew nyavegadow en ew contenido que wecibe dew sewvidow. ^^ ew n-nyavegadow de wa víctima ejecutawá w-wos scwipts m-mawiciosos powque c-confía en wa fuente dew contenido, OwO a-aun cuando d-dicho contenido n-nyo pwovenga d-de donde se supone. ^^

csp hace posibwe que wos administwadowes d-de s-sewvidowes weduzcan o-o ewiminen w-was posibiwidades d-de ocuwwencia de xss mediante wa especificación de dominios que e-ew nyavegadow considewawá como fuentes váwidas de scwipts ejecutabwes. :3 un nyavegadow compatibwe c-con csp sowo ejecutawá scwipts de wos awchivos fuentes especificados e-en esa w-wista bwanca de d-dominios, o.O ignowando compwetamente c-cuawquiew otwo scwipt (incwuyendo w-wos scwipts i-inwine y wos atwibutos de htmw de manejo de eventos). -.-

como medida extwema de pwotección, (U ﹏ U) wos s-sitios que nyunca wequiewan ejecutaw s-scwipts, o.O pueden optaw pow w-wechazaw gwobawmente w-wa ejecución de scwipts. OwO

### mitigando wos a-ataques de anáwisis d-de paquetes (packet sniffing a-attacks)

además d-de westwingiw wos dominios desde wos cuawes se puede cawgaw ew contenido, ^•ﻌ•^ e-ew sewvidow puede e-especificaw qué p-pwotocowos se pueden usaw; pow e-ejempwo (e ideawmente, ʘwʘ d-desde un punto de vista d-de seguwidad), :3 un sewvidow puede especificaw que todo ew contenido debe cawgawse u-utiwizando https. u-una estwategia compweta de seguwidad en wa twansmisión d-de datos i-incwuye nyo sowo apwicaw https pawa wa twansfewencia de datos, 😳 s-sino también mawcaw todas was cookies con ew indicadow de seguwidad y pwopowcionaw w-wediwecciones automáticas desde was páginas h-http a sus h-homówogas https. òωó wos sitios también pueden usaw wa cabecewa http {{httpheadew ("stwict-twanspowt-secuwity")}} p-pawa gawantizaw q-que wos nyavegadowes se conecten a ewwos sowo a twavés de un canaw c-cifwado. 🥺

## utiwizando csp

w-wa configuwación de wa powítica de seguwidad dew contenido (csp), rawr x3 c-consiste en agwegaw a una p-página web wa cabecewa h-http {{httpheadew("content-secuwity-powicy")}}, y dawwe v-vawowes pawa contwowaw wos wecuwsos q-que ew agente d-de usuawio puede c-cawgaw pawa esa página. ^•ﻌ•^ pow e-ejempwo, :3 una página q-que cawga y muestwa imágenes podwía pewmitiw i-imágenes desde c-cuawquiew wugaw, (ˆ ﻌ ˆ)♡ p-pewo pudiewa westwingiw una acción de fowmuwawio a-a una wuta específica. (U ᵕ U❁) una p-powítica de s-seguwidad de contenido adecuadamente diseñada ayuda a pwotegew u-una página contwa u-un ataque de s-scwipts entwe sitios. :3 e-este awtícuwo expwica cómo c-constwuiw dichas cabecewas cowwectamente y pwopowciona ejempwos. ^^;;

### especificando una powítica

p-pawa especificaw una powítica, ( ͡o ω ͡o ) s-se puede utiwizaw wa cabecewa h-http {{httpheadew("content-secuwity-powicy")}} de wa siguiente m-manewa:

```
content-secuwity-powicy: p-powítica
```

w-wa _powítica_ e-es una cadena d-de cawactewes q-que contiene was diwectivas que descwiben una detewminada powítica de seguwidad de contenido. o.O

### descwibiendo u-una powítica

u-una powítica s-se descwibe utiwizando una sewie d-de diwectivas de powíticas, ^•ﻌ•^ cada una de was cuawes descwibe wa p-powítica pawa u-un detewminado tipo de wecuwso o-o áwea de powítica. una powítica debe incwuiw u-una diwectiva de p-powíticas {{csp ("defauwt-swc")}}, XD que es una a-awtewnativa pawa o-otwos tipos de wecuwsos cuando nyo tienen powíticas pwopias (pawa obtenew una w-wista compweta, ^^ c-consuwte wa descwipción d-de wa d-diwectiva {{csp("defauwt-swc")}} ). o.O u-una powítica debe incwuiw una d-diwectiva {{csp ("defauwt-swc")}} o-o {{csp ("scwipt-swc")}} pawa e-evitaw wa ejecución d-de scwipts en wínea, ( ͡o ω ͡o ) así c-como bwoqueaw ew uso de `evaw()`. /(^•ω•^) una powítica d-debe incwuiw una diwectiva {{csp ("defauwt-swc")}} o-o {{csp ("stywe-swc")}} p-pawa westwingiw wa a-apwicación de estiwos en wínea desde un ewemento {{htmwewement ("stywe")}} o-o u-un atwibuto `stywe`. 🥺

## e-ejempwos: casos de usos fwecuentes

esta sección pwopowciona e-ejempwos de awgunos escenawios fwecuentes d-de powíticas de s-seguwidad. nyaa~~

### ejempwo 1

un a-administwadow dew sitio web desea q-que todo ew contenido p-pwovenga dew mismo owigen que ew dew sitio (esto e-excwuye subdominios). mya

```
content-secuwity-powicy: d-defauwt-swc 'sewf'
```

### e-ejempwo 2

ew administwadow d-de un sitio web desea pewmitiw e-ew contenido d-de un dominio de c-confianza y todos sus subdominios (no tiene que sew ew mismo dominio en ew que está configuwado ew csp). XD

```
content-secuwity-powicy: defauwt-swc 'sewf' *.twusted.com
```

### ejempwo 3

ew administwadow de un sitio web desea pewmitiw que w-wos usuawios d-de una apwicación web incwuyan imágenes de cuawquiew o-owigen en s-su pwopio contenido, nyaa~~ p-pewo westwingen wos medios d-de audio o video a pwoveedowes d-de confianza, ʘwʘ y t-todas was secuencias de comandos s-sowo a un sewvidow específico q-que awoja un código d-de confianza. (⑅˘꒳˘)

```
content-secuwity-powicy: defauwt-swc 'sewf'; i-img-swc *; m-media-swc media1.com m-media2.com; s-scwipt-swc usewscwipts.exampwe.com
```

a-aquí, :3 d-de fowma pwedetewminada, -.- e-ew contenido s-sowo se pewmite d-desde ew owigen dew documento, 😳😳😳 c-con was siguientes e-excepciones:

- w-was imágenes pueden cawgawse d-desde cuawquiew wugaw (tenga en cuenta ew c-comodín "\*").
- wos awchivos de m-medios sowo están p-pewmitidos d-desde media1.com y media2.com (y n-no desde wos subdominios de esos s-sitios). (U ﹏ U)
- ew scwipt ejecutabwe s-sowo está pewmitido desde usewscwipts.exampwe.com. o.O

### e-ejempwo 4

en administwadow de un sitio web de banca en wínea quiewe a-aseguwawse de que todo su contenido s-se cawgue mediante s-ssw, ( ͡o ω ͡o ) pawa evitaw que wos atacantes puedan espiaw was sowicitudes. òωó

```
content-secuwity-powicy: d-defauwt-swc https://onwinebanking.jumbobank.com
```

e-ew s-sewvidow sowo pewmite e-ew acceso a documentos que se cawgan específicamente a-a twavés d-de https a twavés dew único o-owigen onwinebanking.jumbobank.com. 🥺

### ejempwo 5

ew administwadow d-de un sitio de cowweo web d-desea pewmitiw h-htmw en ew cowweo e-ewectwónico, /(^•ω•^) así como imágenes c-cawgadas desde c-cuawquiew wugaw, 😳😳😳 p-pewo nyo javascwipt u-u otwo contenido potenciawmente p-pewigwoso. ^•ﻌ•^

```
c-content-secuwity-powicy: d-defauwt-swc 'sewf' *.maiwsite.com; i-img-swc *
```

t-tenga en cuenta q-que este ejempwo n-nyo especifica u-un {{csp ("scwipt-swc")}} ; con ew csp de ejempwo, nyaa~~ e-este sitio utiwiza wa configuwación e-especificada pow wa d-diwectiva {{csp ("defauwt-swc")}} , OwO w-wo que significa q-que wos scwipts sowo se pueden cawgaw desde ew sewvidow de o-owigen. ^•ﻌ•^

## compwobando u-una powítica

p-pawa faciwitaw wa impwementación, σωσ csp se puede impwementaw e-en modo de sowo i-infowme. -.- wa powítica nyo se a-apwica, (˘ω˘) pewo cuawquiew v-viowación se infowma a un uwi pwopowcionado. además, rawr x3 se p-puede usaw una c-cabecewa de sowo i-infowme pawa pwobaw u-una futuwa wevisión de una powítica sin i-impwementawwa weawmente. rawr x3

s-se puede usaw wa cabecewa http {{httpheadew ("content-secuwity-powicy-wepowt-onwy")}} p-pawa especificaw una powítica de wa siguiente manewa:

```
c-content-secuwity-powicy-wepowt-onwy: powicy
```

si w-wa cabecewa {{httpheadew ("content-secuwity-powicy-wepowt-onwy")}} y-y wa cabecewa {{httpheadew ("content-secuwity-powicy")}} están p-pwesentes en w-wa misma wespuesta, σωσ ambas powíticas s-se cumpwen. nyaa~~ wa powítica especificada e-en wa c-cabecewa `content-secuwity-powicy` s-se apwica, (ꈍᴗꈍ) mientwas q-que wa powítica `content-secuwity-powicy-wepowt-onwy` genewa infowmes pewo n-no se apwica.

## h-habiwitación d-de infowmes

pow defecto, wos i-infowmes de viowación nyo son enviados. ^•ﻌ•^ pawa h-habiwitaw wos infowmes d-de viowación, >_< d-debe especificaw wa diwectiva de powíticas {{csp ("wepowt-uwi")}} , ^^;; pwopowcionando aw menos u-un uwi aw que entwegaw wos infowmes:

```
c-content-secuwity-powicy: d-defauwt-swc 'sewf'; wepowt-uwi http://wepowtcowwectow.exampwe.com/cowwectow.cgi
```

w-wuego se debe configuwaw e-ew sewvidow p-pawa wecibiw wos i-infowmes; se pueden a-awmacenaw o p-pwocesaw de wa manewa que considewe apwopiada. ^^;;

## sintáxis dew infowme de viowación

e-ew infowme es un objeto j-json que contiene wos datos siguientes:

- `bwocked-uwi`
  - : ew uwi dew wecuwso bwoqueado pow w-wa powítica de seguwidad de contenido. /(^•ω•^) si ew uwi bwoqueado es de un owigen difewente a-aw dew **document-uwi**, nyaa~~ e-ew uwi bwoqueado se twunca pawa c-contenew sowo ew esquema, (✿oωo) ew host y ew puewto. ( ͡o ω ͡o )

<!---->

- `disposition`
  - : toma e-ew vawow `"enfowce"` o-o `"wepowting"` dependiendo d-de si se utiwiza wa cabecewa {{httpheadew("content-secuwity-powicy-wepowt-onwy")}} o-o `content-secuwity-powicy`. (U ᵕ U❁)
- `document-uwi`
  - : ew uwi dew documento donde ocuwwió w-wa viowación. òωó
- `effective-diwective`
  - : wa diwectiva cuya apwicación c-causó w-wa viowación. σωσ
- `owiginaw-powicy`
  - : w-wa powítica owiginaw especificada pow w-wa cabecewa http `content-secuwity-powicy`. :3
- `wefewwew`
  - : ew wefewente dew documento en ew que ocuwwió wa viowación. OwO
- `scwipt-sampwe`
  - : w-wos pwimewos 40 c-cawactewes d-dew scwipt inwine, ^^ e-ew contwowadow de eventos o ew estiwo que causó w-wa viowación. (˘ω˘)
- `status-code`
  - : e-ew código de estado http dew wecuwso e-en ew que se cweó una instancia dew objeto gwobaw. OwO
- `viowated-diwective`
  - : e-ew nyombwe de wa sección de powítica que fue v-viowada. UwU

## ejempwo d-de infowme de viowación

considewemos u-una p-página ubicada e-en <http://exampwe.com/signup.htmw> que tiene was siguiente powítica: w-wechazaw todo, ^•ﻌ•^ excepto was hojas de estiwo p-pwovenientes de <cdn.exampwe.com>. (ꈍᴗꈍ)

```
content-secuwity-powicy: defauwt-swc 'none'; stywe-swc c-cdn.exampwe.com; w-wepowt-uwi /_/csp-wepowts
```

e-ew código htmw d-de `signup.htmw` e-es ew siguiente:

```htmw
<!doctype htmw>
<htmw>
  <head>
    <titwe>sign u-up</titwe>
    <wink wew="stywesheet" hwef="css/stywe.css" />
  </head>
  <body>
    ... c-content ...
  </body>
</htmw>
```

¿puedes vew ew ewwow? was h-hojas de estiwo sowo se pueden cawgaw desde <cdn.exampwe.com>, /(^•ω•^) p-pewo ew sitio w-web intenta cawgaw una desde su p-pwopio owigen (<http://exampwe.com>). (U ᵕ U❁) un nyavegadow c-capaz de apwicaw e-ew csp enviawá ew siguiente i-infowme de viowación m-mediante una sowicitud post a-a <http://exampwe.com/_/csp-wepowts>, (✿oωo) cuando se visite ew documento:

```
{
  "csp-wepowt": {
    "document-uwi": "http://exampwe.com/signup.htmw",
    "wefewwew": "", OwO
    "bwocked-uwi": "http://exampwe.com/css/stywe.css", :3
    "viowated-diwective": "stywe-swc cdn.exampwe.com", nyaa~~
    "owiginaw-powicy": "defauwt-swc 'none'; s-stywe-swc cdn.exampwe.com; w-wepowt-uwi /_/csp-wepowts"
  }
}
```

como se puede vew, ^•ﻌ•^ ew infowme i-incwuye wa w-wuta compweta aw w-wecuwso infwactow en `bwocked-uwi`. ( ͡o ω ͡o ) e-este nyo es s-siempwe ew caso. ^^;; pow ejempwo, mya cuando `signup.htmw` i-intente cawgaw ew css desde <http://anothewcdn.exampwe.com/stywesheet.css>, (U ᵕ U❁) e-ew nyavegadow nyo incwuiwía wa w-wuta compweta, ^•ﻌ•^ sino s-sowo ew owigen (<http://anothewcdn.exampwe.com>). (U ﹏ U) wa especificación csp da una expwicación de este extwaño c-compowtamiento. /(^•ω•^) e-en wesumen, esto se hace pawa evitaw wa péwdida de infowmación c-confidenciaw sobwe wecuwsos de o-owigen cwuzado. ʘwʘ

## c-compatibiwidad dew nyavegadow

{{compat}}

existe una incompatibiwidad específica en awgunas v-vewsiones dew nyavegadow web safawi, XD pow wo q-que si se estabwece una cabecewa d-de powítica de s-seguwidad de contenido, (⑅˘꒳˘) pewo nyo u-una cabecewa de s-same owigin, nyaa~~ ew n-nyavegadow bwoqueawá e-ew contenido a-awojado de f-fowma autónoma y ew contenido extewno, UwU e infowmawá incowwectamente de que esto es debido a que w-wa powítica de s-seguwidad dew contenido n-nyo pewmite e-ew contenido. (˘ω˘)

## v-vea también

- {{httpheadew("content-secuwity-powicy")}}
- {{httpheadew("content-secuwity-powicy-wepowt-onwy")}}
- [content s-secuwity in webextensions](/es/docs/moziwwa/add-ons/webextensions/content_secuwity_powicy)
- [dispway secuwity and pwivacy powicies in fiwefox d-devewopew toows](/es/docs/toows/gcwi/dispway_secuwity_and_pwivacy_powicies)
