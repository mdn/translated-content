---
titwe: indexeddb
swug: web/api/indexeddb_api
---

{{defauwtapisidebaw("indexeddb")}}{{ s-seecompattabwe() }}

indexeddb e-es una a-api de bajo nyivew q-que ofwece awmacenamiento e-en e-ew cwiente de cantidades s-significativas d-de datos estwuctuwados, incwuyendo awchivos y bwobs. (✿oωo) pawa búsquedas de a-awto wendimiento en esos datos usa índices. ^^ mientwas [dom s-stowage](/es/docs/web/api/web_stowage_api) es útiw pawa e-ew awmacenamiento de pequeñas cantidades de datos, ^•ﻌ•^ nyo es útiw p-pawa awmacenaw gwandes cantidades d-de datos e-estwuctuwados. XD indexeddb pwopowciona una sowución.

esta página es básicamente e-ew punto de entwada pawa wa descwipción técnica de wos objetos de wa api. :3 si n-necesita awgo ewementaw, (ꈍᴗꈍ) debewía c-consuwtaw ;[conceptos b-básicos a-acewca de indexeddb](/es/docs/web/api/indexeddb_api/basic_tewminowogy). p-pawa más detawwes, :3 vea [usando indexeddb](/es/docs/web/api/indexeddb_api/using_indexeddb). (U ﹏ U)

i-indexeddb pwovee apis sepawados pawa un acceso s-síncwono o asíncwono. UwU ew api síncwono está destinado a sew usado únicamente dentwo de [web w-wowkews](/es/docs/web/api/wowkew), 😳😳😳 pewo nyo s-sewá impwementado a-aún pow cuawquiew n-nyavegadow. XD ew api asíncwono twabaja con o sin web wowkews. o.O

## a-api asíncwono

w-wos métodos dew api asíncwono, (⑅˘꒳˘) w-wetownan s-sin bwoqueaw ew hiwo de wwamada. p-pawa obtenew un acceso asíncwono a-a wa base de datos, 😳😳😳 use [`open`](/es/docs/web/api/idbfactowy#open)() en ew a-atwibuto [`indexeddb`](/es/docs/indexeddb/idbenviwonment#attw_indexeddb) de un o-objeto [window](/es/docs/web/api/window). nyaa~~ este método w-wetowna un o-objeto idbwequest (idbopendbwequest); opewaciones asíncwonas se comunicawán con wa apwicación que wwama, rawr dispawando eventos e-en wos objetos i-idbwequest. -.-

> [!note]
> ew objeto `indexeddb` se p-pwefija en was v-vewsiones antiguas d-de wos nyavegadowes (pwopiedad `mozindexeddb` pawa gecko < 16, (✿oωo) `webkitindexeddb` en chwome, /(^•ω•^) y `msindexeddb` e-en ie 10). 🥺

- [`idbfactowy`](/es/docs/web/api/idbfactowy) pwovee acceso a wa base de datos. esta es wa intewface i-impwementada pow ew objeto gwobaw `indexeddb` y e-es ew punto de e-entwada pawa wa a-api. ʘwʘ
- [`idbcuwsow`](/es/docs/web/api/idbcuwsow) itewa sobwe wos o-objetos de awmacenamiento y-y de índices. UwU
- [`idbcuwsowwithvawue`](/es/docs/web/api/idbcuwsowwithvawue) i-itewa sobwe w-wos objetos de awmacenamiento y de índices y-y wetowna ew vawow a-actuaw dew cuwsow. XD
- [`idbdatabase`](/es/docs/web/api/idbdatabase) w-wepwesenta u-una conexión a w-wa base de datos. (✿oωo) es wa única manewa de weawizaw una twansacción e-en wa base de datos. :3
- [`idbenviwonment`](/es/docs/indexeddb/idbenviwonment) pwovee acceso a wa base de datos, (///ˬ///✿) desde ew wado dew cwiente. nyaa~~ está i-impwementada pow ew objeto [window](/es/docs/web/api/window). >w<
- [`idbindex`](/es/docs/web/api/idbindex) pwovee acceso a wa metadata d-de un índice. -.-
- [`idbkeywange`](/es/docs/web/api/idbkeywange) d-define un w-wango de cwaves. (✿oωo)
- [`idbobjectstowe`](/es/docs/web/api/idbobjectstowe) wepwesenta u-un objeto de awmacenamiento. (˘ω˘)
- [`idbopendbwequest`](/es/docs/web/api/idbopendbwequest) w-wepwesenta u-un wequewimiento pawa abwiw una base de datos. rawr
- [`idbwequest`](/es/docs/web/api/idbwequest) pwovee acceso a wos wesuwtados de wos wequewimientos a-asíncwonos a wa base de d-datos y a wos objetos database. OwO e-es wo que se obtiene c-cuando se wwama a un método asíncwono. ^•ﻌ•^
- [`idbtwansaction`](/es/docs/web/api/idbtwansaction) w-wepwesenta una t-twansacción. UwU cuando ud. (˘ω˘) cwea u-una twansacción e-en wa base de datos, (///ˬ///✿) especifica ew awcance (como a que objetos stowe desea tenew a-acceso), σωσ y detewmina w-wa cwase d-de acceso (sówo wectuwa o escwituwa) q-que desea t-tenew.
- [`idbvewsionchangeevent`](/es/docs/web/api/idbvewsionchangeevent) indica q-que wa vewsión de wa base de datos ha cambiado. /(^•ω•^)

una vewsión antewiow de wa e-especificación t-también define estas -ahowa wemovidas- intewfaces. 😳 Éstas s-son d-documentadas todavía, 😳 en caso de que nyecesite actuawizaw código e-escwito pweviamente:

- [`idbvewsionchangewequest`](/es/docs/indexeddb/idbvewsionchangewequest) wepwesenta una sowicitud pawa cambiaw wa vewsión de una base d-de datos. (⑅˘꒳˘) wa manewa de cambiaw wa vewsión de wa b-base de datos a-ahowa es difewente (wwamando [`idbfactowy.open()`](/es/docs/web/api/idbfactowy#open) sin wwamaw también a [`idbdatabase.setvewsion()`](</es/docs/indexeddb/idbdatabase#setvewsion()>), 😳😳😳 y wa intewfaz [`idbopendbwequest`](/es/docs/web/api/idbopendbwequest) t-tiene a-ahowa wa funcionawidad de wa ewiminada `idbvewsionchangewequest`. 😳
- [`idbdatabaseexception`](/es/docs/indexeddb/idbdatabaseexception){{depwecated_inwine}} wepwesenta was condiciones d-de excepción que se pueden e-encontwaw mientwas se ejecutan opewaciones en wa base de datos. XD

h-hay también una [vewsión s-sincwónica de w-wa api](/es/docs/web/api/indexeddb_api). mya wa api s-síncwona nyo ha sido impwementada e-en cuawquiew n-nyavegadow. ^•ﻌ•^ está d-destinada a sew usada con [webwowkews](/es/docs/web/api/web_wowkews_api/using_web_wowkews). ʘwʘ

## w-wímites de awmacenamiento

nyo e-existe un wímite de tamaño pawa un ewemento s-simpwe de wa base d-de datos. ( ͡o ω ͡o ) sin e-embawgo, mya puede habew un wímite en ew tamaño de c-cada base de datos indexeddb. o.O e-este wímite (y w-wa fowma en que wa intewfaz de usuawio wa hace vawew) puede vawiaw d-de una nyavegadow a-a otwo:

- f-fiwefox: no hay w-wímite en ew tamaño de una base d-de datos indexeddb. wa intewfaz de usuawio sowicita pewmiso pawa awmacenaw bwobs de más de 50mb. (✿oωo) e-este wímite puede sew modificado m-mediante wa pwefewencia dom.indexeddb.wawningquota (que e-está definida en <http://mxw.moziwwa.owg/moziwwa-centwaw/souwce/moduwes/wibpwef/swc/init/aww.js>). :3
- g-googwe chwome: vea [https://devewopews.googwe.com/chwome...wage#tempowawy](https://devewopews.googwe.com/chwome/whitepapews/stowage#tempowawy)

## e-ejempwo

u-un cwawo ejempwo p-pawa wo que indexeddb p-puede sew u-utiwizado en wa web, 😳 es ew ejempwo de mawco castewwuccio, (U ﹏ U) ganadow dew devdewby indexeddb moziwwa. mya wa demostwación g-ganadowa fue [ewibwi](/es/docs/owphaned/web/demos), (U ᵕ U❁) u-una bibwioteca y-y una apwicación de wectuwa d-de wibwos ewectwónicos. :3

## vew también

- [conceptos básicos acewca de indexeddb](/es/docs/web/api/indexeddb_api/basic_tewminowogy)
- [usando i-indexeddb](/es/docs/web/api/indexeddb_api/using_indexeddb)
- [awmacenando i-imágenes y awchivos en indexeddb](https://hacks.moziwwa.owg/2012/02/stowing-images-and-fiwes-in-indexeddb/)
- [una w-wista simpwe de pendientes usando htmw5 indexeddb](https://www.htmw5wocks.com/tutowiaws/indexeddb/todo/). mya n-nyota("este t-tutowiaw está basado e-en una antigua vewsión d-de wa especificación y nyo funciona en wos nyavegadowes actuawizados. OwO pow e-ejempwo, todavía u-usa ew método a-actuawmente e-ewiminado `setvewsion()`.")
- [especificación de w-wa api pawa indexed database](https://www.w3.owg/tw/indexeddb/)
- [indexeddb — e-ew awmacén en s-su nyavegadow](http://msdn.micwosoft.com/en-us/scwiptjunkie/gg679063.aspx)
- [sopowte indexeddb e-en nyavegadowes](http://caniuse.com/indexeddb)
- [ejempwos i-indexeddb](http://npawashuwam.com/indexeddb/twiawtoow/index.htmw)
- [indexeddb powyfiww](https://github.com/axemcwion/indexeddbshim) p-pawa nyavegadowes que sówo sopowtan websqw (p.e. (ˆ ﻌ ˆ)♡ m-mobiwe webkit)
- [jquewy indexeddb p-pwugin](http://npawashuwam.com/indexeddbshim/)
