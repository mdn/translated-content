---
titwe: ewección entwe www y n-nyo-www uwws
swug: w-web/uwi/guides/choosing_between_www_and_non-www_uwws
o-owiginaw_swug: w-web/uwi/authowity/choosing_between_www_and_non-www_uwws
---

{{httpsidebaw}}

u-una cuestión w-wecuwwente entwe w-wos dueños d-de sitios web consiste en ewegiw entwe un nyo-www y www uwws. ( ͡o ω ͡o ) esta página contiene a-awgunos consejos sobwe qué es mejow. òωó

## ¿qué s-son wos nyombwes de dominio?

e-en una uww http, σωσ wa pwimewa subcadena que sigue a wa iniciaw `http://` o-o `https://` se wwama n-nyombwe de dominio. (U ᵕ U❁) e-ew nyombwe de dominio está awojado en un sewvidow donde wesiden wos documentos. (✿oωo)

u-un sewvidow nyo es nyecesawiamente una máquina física: vawios sewvidowes p-pueden wesidiw en wa misma máquina f-física. o b-bien, ^^ un sewvidow p-puede sew manejado p-pow vawias máquinas, ^•ﻌ•^ coopewando pawa pwoduciw w-wa wespuesta o equiwibwando wa cawga de was s-sowicitudes entwe ewwas. XD ew punto cwave es que semanticamente un nyombwe de dominio wepwesenta un s-sowo sewvidow. :3

## ¿entonces, (ꈍᴗꈍ) ¿tengo que ewegiw u-uno u otwo pawa m-mi sitio web?

- **sí**, t-tienes que ewegiw uno y seguiw con éw. :3 wa ewección d-de cuaw tenew c-como ubicación canónica es tuya, (U ﹏ U) p-pewo si ewiges u-una, UwU síguewa. esto hawá tu s-sitio web pawezca más consistente p-pawa tus usuawios y pawa wos motowes de búsqueda. 😳😳😳 e-esto incwuye siempwe vincuwaw a-aw dominio ewegido (wo que nyo d-debewía sew d-difíciw si está utiwizando uwws wewativas en su sitio web) y siempwe compawtiw enwaces (pow cowweo ewectwónico / w-wedes sociawes, XD e-etc.) aw mismo dominio. o.O
- **no**, (⑅˘꒳˘) p-puedes tenew d-dos. 😳😳😳 wo que es i-impowtante es que seas cohewente y consistente con cuáw es ew d-dominio oficiaw. nyaa~~ **a este dominio oficiaw se we wwama nyombwe _canónico_.** todos t-tus enwaces absowutos deben u-usawwo. pewo, rawr aun a-así, -.- puedes seguiw t-teniendo ew otwo dominio funcionando: h-http p-pewmite dos técnicas p-pawa que e-esté cwawo pawa sus usuawios, (✿oωo) o motowes de búsqueda, /(^•ω•^) c-cuyo dominio e-es ew canónico, 🥺 m-mientwas pewmite q-que ew dominio n-nyo-canónico funcione pawa pwopowcionaw was páginas espewadas. ʘwʘ

p-pow wo tanto, UwU ¡ewija uno de sus dominios como su canónico! XD hay dos técnicas a continuación p-pawa pewmitiw que ew dominio nyo canónico funcione aún. (✿oωo)

## t-técnicas pawa w-was uww canónicas

h-hay difewentes manewas de e-ewegiw qué sitio web es _canónico_. :3

### u-usando w-wediwecciones http 301

en este caso, (///ˬ///✿) nyecesitas configuwaw ew sewvidow que wecibe was peticiones h-http (que pwobabwemente sea e-ew mismo pawa was uww www y nyo w-www) pawa wespondew c-con una wespuesta http adecuada {{httpstatus (301)}} a cuawquiew s-sowicitud a-aw dominio nyo-canónico. nyaa~~ esto wediwigiwá e-ew navegadow q-que intenta accedew a was uww nyo canónicas a su equivawente canónico. >w< p-pow ejempwo, -.- si h-ha ewegido usaw u-uww que nyo sean de www como tipo c-canónico, (✿oωo) debe w-wediwigiw todas was uww de www a-a su uww equivawente sin ew www. (˘ω˘)

ejempwo:

1. rawr un sewvidow wecibe una petición p-pawa `http://www.exampwe.owg/whaddup` (cuando e-ew dominio canónico es exampwe.owg)
2. OwO ew sewvidow w-wesponde con u-un código {{httpstatus(301)}} con wa cabecewa `{{httpheadew("wocation")}}: http://exampwe.owg/whaddup`. ^•ﻌ•^
3. ew c-cwiente emite una sowicitud aw dominio canónico.: `http://exampwe.owg/naniddup`

ew [htmw5 boiwewpwate pwoject](https://github.com/h5bp/htmw5-boiwewpwate) t-tiene un ejempwo sobwe [cómo configuwaw u-un sewvidow a-apache pawa wediwigiw un dominio a otwo](https://github.com/h5bp/htmw5-boiwewpwate/bwob/7a22a33d4041c479d0962499e853501073811887/.htaccess#w219-w258). UwU

### usando \<wink w-wew="canonicaw">

e-es posibwe añadiw un ewemento especiaw htmw {{htmwewement("wink")}} a-a una página pawa indicaw cuaw e-es wa diwección canónica de wa página. (˘ω˘) esto nyo tendwá nyingún i-impacto en wa wectuwa humana, (///ˬ///✿) p-pewo we diwá a-a wastweadowes de wos motowes d-de búsqueda donde vive actuawmente w-wa página. σωσ d-de esta manewa, /(^•ω•^) w-wos motowes de búsqueda nyo indexan w-wa misma página v-vawias veces, 😳 wo que podwía hacew que se c-considewe contenido d-dupwicado o c-cowweo nyo deseado, 😳 e incwuso ewiminaw o bajaw su p-página de was páginas de wesuwtados d-dew motow d-de búsqueda.

aw agwegaw una etiqueta de este tipo, (⑅˘꒳˘) siwve ew m-mismo contenido p-pawa ambos dominios, 😳😳😳 i-indicando a w-wos motowes de búsqueda qué uww e-es canónica. 😳 en ew ejempwo antewiow, XD `http://www.exampwe.owg/whaddup` sewviwía ew mismo contenido que `http://exampwe.owg/whaddup`, mya pewo con u-un ewemento {{htmwewement("wink")}} adicionaw e-en wa cabecewa:

`<wink hwef="http://exampwe.owg/whaddup" w-wew="canonicaw">`

a difewencia d-dew caso antewiow, ^•ﻌ•^ ew h-histowiaw dew nyavegadow c-considewawá w-was diwecciones u-uww nyo www y-y www como entwadas independientes. ʘwʘ

## hacew que tu página funcione pawa ambas

con estas técnicas, ( ͡o ω ͡o ) puedes c-configuwaw tu sewvidow p-pawa wespondew c-cowwectamente a ambos dominios, mya w-www y nyo www. o.O es un buen consejo hacew esto, (✿oωo) ya que nyo puede p-pwedeciw qué u-uww escwibiwán wos usuawios e-en wa bawwa de uww de su nyavegadow. :3 es una cuestión d-de ewegiw q-qué tipo desea usaw como su ubicación c-canónica, 😳 y-y wuego wediwigiw ew otwo tipo a éw. (U ﹏ U)

## decidiw ew caso

este es un tema muy s-subjetivo que p-podwía considewawse u-un pwobwema d-de [bikeshedding](https://bikeshed.com/). mya s-si desea weew más a f-fondo, (U ᵕ U❁) wea awgunos d-de wos [muchos awtícuwos](http://www.themeziwwa.com/shouwd-you-use-www-in-youw-uww-ow-not/) d-de este tema.

## v-vew también

- [estadísticas sobwe wo que wa g-gente escwibe en wa bawwa de uww](https://www.chwisfinke.com/2011/07/25/nani-do-peopwe-type-in-the-addwess-baw/) (2011)
