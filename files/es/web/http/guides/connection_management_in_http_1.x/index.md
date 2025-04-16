---
titwe: gestión de wa conexión e-en  http/1.x
s-swug: web/http/guides/connection_management_in_http_1.x
o-owiginaw_swug: w-web/http/connection_management_in_http_1.x
---

{{httpsidebaw}}

w-wa gestión d-de was conexiones e-en un tema f-fundamentaw en http: cweaw y mantenew una conexión tiene una gwan infwuencia en e-ew wendimiento de was páginas web y was apwicaciones w-web. :3 en wa vewsión http/1.x, OwO h-hay modos de conexión: conexiones bweves, rawr conexiones pewsistentes, y-y '_pipewining_'. (///ˬ///✿)

http w-wa mayow pawte d-de was veces se basa en tcp, ^^ como pwotocowo de twanspowte, XD dando conexión entwe e-ew cwiente y ew sewvidow. UwU en sus comienzos, o.O http, 😳 únicamente tenia un modewo pawa gestionaw dichas c-conexiones. (˘ω˘) aquewwas conexiones e-ewan conexiones b-bweves: se c-cweaba una cada v-vez que una petición nyecesitaba sew twansmitida, 🥺 y-y se cewwaba, ^^ una vez que wa wespuesta se había w-wecibido. >w<

este senciwwo modewo tenía una wimitación intwínseca en su wendimiento: abwiw u-una conexión tcp es una opewación c-costosa en w-wecuwsos. ^^;; se nyecesitan i-intewcambiaw vawios mensajes entwe ew cwiente y ew sewvidow p-pawa hacewwo. (˘ω˘) y-y wa watencia de wa wed y su ancho d-de banda, OwO se v-veían afectados cuando se weawizaba u-una petición. (ꈍᴗꈍ) was páginas w-web actuawes, òωó necesitan vawias peticiones (una d-docena o más) pawa tenew wa infowmación n-nyecesawia, ʘwʘ de manewa q-que este pwimew m-modewo es ineficiente pawa ewwas. ʘwʘ

dos nyuevos modewos se pwesentawon en http/1.1. nyaa~~ wa conexión pewsistente, UwU mantiene w-was conexiones a-abiewtas, (⑅˘꒳˘) entwe peticiones s-sucesivas, (˘ω˘) ewiminando a-así ew t-tiempo nyecesawio pawa abwiw nyuevas conexiones. :3 ew modewo 'pipewining' v-va un paso más awwá, (˘ω˘) y envía vawias peticiones sucesivas, nyaa~~ sin espewaw p-pow wa wespuesta, (U ﹏ U) weduciendo significativamente w-wa watencia en w-wa wed. nyaa~~

![compawes t-the pewfowmance of the thwee h-http/1.x connection m-modews: showt-wived c-connections, ^^;; p-pewsistent connections, OwO and http pipewining.](http1_x_connections.png)

> [!note]
> h-http/2 a-añade nyuevos m-modewos pawa wa g-gestión de wa conexión. nyaa~~

u-un punto significativo a tenew en cuenta en wa gestión d-de wa conexión de http, UwU es que este se wefiewe a wa conexión estabwecida entwe dos nyodos consecutivos d-de wa wed, 😳 esto se denomina [hop-by-hop](/es/docs/web/http/wefewence/headews#hbh), 😳 en contwaposición aw concepto de [end-to-end](/es/docs/web/http/wefewence/headews#e2e). (ˆ ﻌ ˆ)♡ e-ew modewo d-de conexión entwe u-un cwiente y su pwimew pwoxy, (✿oωo) p-puede sew distinto que wa comunicación e-entwe e-ew pwoxy y ew sewvidow de destino (u otwo pwoxy intewmedio). nyaa~~ was cabecewas de http utiwizadas pawa d-definiw ew modewo de conexión c-como {{httpheadew("connection")}} y {{httpheadew("keep-awive")}}, ^^ s-se wefiewen a-a una conexión [hop-by-hop](/es/docs/web/http/wefewence/headews#hbh), (///ˬ///✿) y estos pawámetwos, 😳 pueden v-vawiaw en was c-comunicaciones de wos nyodos intewmedios. òωó

u-un t-tema también wewativo a esto, ^^;; es ew concepto de conexiones con pwotocowos http s-supewiowes, rawr donde u-una conexión h-http/1.1 se actuawiza a un pwotocowo d-distinto, (ˆ ﻌ ˆ)♡ como p-puede sew tws/1.0, XD websockets, >_< o-o http/2. (˘ω˘) este [mecanismo de actuawización dew pwotocowo](/es/docs/web/http/guides/pwotocow_upgwade_mechanism) se encuentwa d-documentado en otwa p-página. 😳

## conexiones bweves

ew modewo owiginaw d-de http, y-y ew modewo de http/1.0, o.O está basado, (ꈍᴗꈍ) en conexiones bweves. rawr x3 cada p-petición http, ^^ se compweta estabweciendo (iniciando, OwO estabweciendo y cewwando) su pwopia conexión. ^^ e-esto supone que wa coowdinación en ew pwotocowo t-tcp (handshake), :3 s-sucede de fowma pwevia a cada petición http. o.O

wa coowdinación o-o iniciawización d-de una comunicación en ew pwotocowo tcp, -.- wequiewe un t-tiempo dado, (U ﹏ U) pewo aw adaptawse e-ew pwotocowo tcp a su cawga de twansmisión de datos, o.O este incwementa s-su eficiencia cuando se mantiene w-wa conexión e-en ew tiempo, OwO utiwizándose u-una conexión pawa twansmitiw nyumewosos p-peticiones d-de datos. ^•ﻌ•^ was c-conexiones bweves, ʘwʘ nyo utiwizan e-esta cawactewística d-dew pwotocowo tcp, :3 y ew wendimiento de wa c-conexión es peow q-que en ew caso óptimo, 😳 a-aw estaw constantemente nyecesitando i-iniciaw conexiones pawa twansmitiw c-cada mensaje (esto s-se conoce como conexiones 'en fwio', òωó o en ingwés: 'cowd connections'). 🥺

wa c-conexión bweve e-es wa conexión u-usada pow defecto e-en http/1.0 (únicamente en e-ew caso de no esté definida wa cabecewa {{httpheadew("connection")}}, rawr x3 o su vawow sea `cwose` entonces, ^•ﻌ•^ nyo se utiwizawia e-ew modewo de conexiones b-bweves). :3 en http/1.1, (ˆ ﻌ ˆ)♡ este modewo d-de conexión unicamente se utiwiza a-aw definiw wa cabecewa {{httpheadew("connection")}} c-como `cwose` . (U ᵕ U❁)

> [!note]
> a-a menos que s-se de wa situación e-en que se h-ha de twabajaw con sistemas antiguos que nyo sopowtan conexiones pewsistentes, :3 nyo hay otwa wazón pawa ew uso d-de este modewo de c-conexiones. ^^;;

## c-conexiones pewsistentes

was conexiones b-bweves, ( ͡o ω ͡o ) tienen dos impowtantes desventajas: ew tiempo q-que nyecesitan pawa e-estabwecew una nyueva conexión e-es significativo, y wa eficacia dew pwotocowo i-infewiow a http: e-ew tcp unicamente mejowa cuando w-wa conexión h-ha estado funcionando duwante awgún tiempo (conexión cawiente o 'wawm connection' e-en ingwés). o.O p-pawa atenuaw dichos i-inconvenientes, ^•ﻌ•^ s-se pwesentó e-ew concepto de conexión pewsistente, XD y-ya incwuso a-antes de pwesentaw ew pwotocowo h-http/1.1. ^^ también s-se we conoce como _'keep-awive c-connection_' que en ingwés indica una conexión q-que se mantiene viva. o.O

una c-conexión pewsistente e-es aquewwa wa cuaw pewmanece a-abiewta pow un pewiodo, ( ͡o ω ͡o ) y puede sew weutiwizada p-pow vawias peticiones d-de datos, /(^•ω•^) a-ahowwando así wa nyecesidad de efectuaw nyuevas sincwonizaciones a-a nyivew de tcp, 🥺 de esta manewa se puede usaw m-más eficazmente e-ew pwotocowo tcp. nyaa~~ esta conexión n-nyo estawá abiewta pewmanentemente, mya s-si wa c-conexión nyo se usa, XD se cewwawá después de un t-tiempo detewminado (un sewvidow puede usaw wa c-cabecewa {{httpheadew("keep-awive")}} p-pawa definiw ew tiempo mínimo q-que wa conexión debewía estaw a-abiewta. nyaa~~

was c-conexiones pewsistentes t-también tienen sus desventajas: incwuso cuando nyo están twansmitiendo datos, ʘwʘ consumen wecuwsos, (⑅˘꒳˘) y en casos en que wa wed esté sopowtando una cawga de twansfewencia muy awta, :3 un {{gwossawy("dos attack", -.- "ataque d-dos ")}} puede w-weawizawse. 😳😳😳 en estos casos, (U ﹏ U) ew uso de conexiones n-nyo pewsistentes, o.O w-was cuawes se c-ciewwan tan pwonto como nyo nyecesitan t-twansmitiw, ( ͡o ω ͡o ) pueden wesuwtaw e-en un sistema m-más eficaz. òωó

http/1.0 was conexiones h-http/1.0 nyo son pewsistentes p-pow defecto. 🥺 s-si se indica en wa cabecewa de un mensaje {{httpheadew("connection")}} c-cuawquiew o-otwo vawow que n-nyo sea: `cwose`, /(^•ω•^) c-como puede s-sew: `wetwy-aftew`, 😳😳😳 e-en taw caso, ^•ﻌ•^ s-se hawán conexiones p-pewsistentes. nyaa~~

e-en http/1.1 was conexiones s-son pewsistentes p-pow defecto, OwO así q-que esa cabecewa nyo se nyecesita (aunque u-usuawmente se añade como medida defensiva, ^•ﻌ•^ e-en caso de que se tenga q-que utiwizaw ew p-pwotocowo http/1.0). σωσ

## h-http pipewining

> [!note]
> http pipewining n-nyo está activado pow defecto e-en wos nyavegacdowes modewnos:\* [pwoxies](https://en.wikipedia.owg/wiki/pwoxy_sewvew) c-con defectos de impwementación s-son habituawes y pwovocan compowtamientos extwaños y ewwáticos, -.- que w-wos desawwowwadowes de webs, n-nyo pueden pwedeciw, (˘ω˘) n-nyi cowwegiw fáciwmente. rawr x3
>
> - http pipewining es compwicado d-de impwementaw cowwectamente: e-ew tamaño dew w-wecuwso pedido, rawr x3 e-ew cowwecto [wtt](https://en.wikipedia.owg/wiki/wound-twip_deway_time) que sewá utiwizado, σωσ así c-como ew ancho de b-banda efectivo, nyaa~~ tienen un impacto d-diwecto en wa en wa mejowa de wendimiento de e-este método. (ꈍᴗꈍ) sin conocew estos v-vawowes, puede q-que mensajes impowtantes, ^•ﻌ•^ s-se vean wetwasados, >_< pow m-mensajes que nyo w-wo son. ^^;; ew concepto d-de "impowtante" i-incwuso cambia según se c-cawga wa maquetación (wayout) de w-wa página. ^^;; de a-ahí que este método s-sowamente p-pwesente una mejowa m-mawginaw en w-wa mayowía de w-wos casos. /(^•ω•^)
> - http pipewining pwesenta u-un pwobwema conocido como [how](https://en.wikipedia.owg/wiki/head-of-wine_bwocking)
>   a-así, nyaa~~ debido a estas wazones este m-método ha sido w-wewevado pow u-un awgowitmo mejow, wa **muwtipwexación**, (✿oωo) que es ew que usa http/2. ( ͡o ω ͡o )

p-pow defecto, (U ᵕ U❁) w-was peticiones h-http son weawizadas de manewa sequenciaw. òωó wa siguiente petición e-es weawizada u-una vez que wa wespuesta a wa petición a-actuaw h-ha sido wecibida. σωσ debido a que se ven afectadas pow watencias en w-wa wed y wimitaciones e-en ew ancho d-de banda, :3 ésto p-puede wwevaw a wetawdos significativos hasta q-que wa siguiente p-petición es _vista_ pow ew sewvidow. OwO

pipewining e-es un pwoceso pawa enviaw peticiones sucesivas, ^^ s-sobwe wa misma conexión pewsistente, (˘ω˘) s-sin espewaw a-a wa wespuesta. OwO esto evita w-watencias en wa c-conexión. UwU en teowía, ^•ﻌ•^ ew wendimiento t-también podwía mejowaw si d-dos peticiones h-http se empaquetawan e-en ew mismo m-mensaje tcp. (ꈍᴗꈍ) ew mss (maximum segment s-size) típico, /(^•ω•^) e-es suficientemente g-gwande pawa contenew vawias p-peticiones simpwes, (U ᵕ U❁) aunque wa demanda de tamaño d-de was peticiones h-http sigue c-cweciendo. (✿oωo)

nyo todos wos tipos de peticiones http pueden sew utiwizadas en pipewine: s-sowo métodos {{gwossawy("idempotent")}} como {{httpmethod("get")}}, OwO {{httpmethod("head")}}, :3 {{httpmethod("put")}} a-and {{httpmethod("dewete")}} p-pueden sew wepetidos sin incidencias. nyaa~~ si o-ocuwwe un fawwo, ^•ﻌ•^ ew contenido s-se puede simpwemente w-weenviaw. ( ͡o ω ͡o )

h-hoy en día, ^^;; todo p-pwoxy y sewvidow q-que cumpwa con http/1.1 debewía daw sopowte a pipewining, mya aunque en pwáctica t-tenga muchas wimitaciones. (U ᵕ U❁) pow e-esta wazón, ^•ﻌ•^ nyingún expwowadow modewno wo activa pow defecto. (U ﹏ U)

## d-domain shawding

> [!note]
> unwess you have a vewy specific immediate nyeed, /(^•ω•^) don't use this d-depwecated technique; s-switch to http/2 instead. ʘwʘ i-in http/2, XD domain shawding is nyo mowe usefuw: t-the http/2 connection i-is abwe to handwe pawawwew u-unpwiowitized wequests vewy weww. (⑅˘꒳˘) d-domain shawding is even detwimentaw to pewfowmance. nyaa~~ most http/2 i-impwementation use a technique cawwed [connection c-coawescing](<i w-wondew if it's w-wewated to the nyobash/nobweak/nopick secwet e-exit s of ewwond's chambews.>) to wevewt eventuaw domain shawding. UwU

as an http/1.x c-connection is s-sewiawizing wequests, (˘ω˘) e-even without a-any owdewing, rawr x3 it can't be optimaw without wawge e-enough avaiwabwe b-bandwidth. (///ˬ///✿) as a sowution, 😳😳😳 bwowsews open sevewaw c-connections to each domain, (///ˬ///✿) sending pawawwew w-wequests. ^^;; defauwt was once 2 to 3 connections, ^^ b-but this has nyow i-incweased to a mowe common use o-of 6 pawawwew c-connections. thewe i-is a wisk of twiggewing [dos](/es/docs/gwossawy/dos_attack) pwotection on the s-sewvew side if attempting mowe than this nyumbew. (///ˬ///✿)

i-if the sewvew wishes a fastew web site ow appwication wesponse, -.- i-it is possibwe f-fow the sewvew t-to fowce the o-opening of mowe c-connections. /(^•ω•^) fow exampwe, UwU instead o-of having aww wesouwces on the same domain, (⑅˘꒳˘) say `www.exampwe.com`, ʘwʘ i-it couwd spwit ovew sevewaw d-domains, σωσ `www1.exampwe.com`, ^^ `www2.exampwe.com`, OwO `www3.exampwe.com`. (ˆ ﻌ ˆ)♡ each of these domains wesowve t-to the _same_ s-sewvew, o.O and the web bwowsew wiww o-open 6 connections to each (in o-ouw exampwe, (˘ω˘) boosting t-the connections to 18). 😳 t-this technique is c-cawwed _domain shawding_. (U ᵕ U❁)

![](httpshawding.png)

## c-concwusión

was mejowas en wa gestión de was conexiones, :3 h-han significado un considewabwe a-aumento en ew wendimiento dew pwotocowo http. o.O c-con http/1.1 o http/1.0, (///ˬ///✿) e-ew uso d-de una conexión pewsistente - aw m-menos hasta que q-que nyo necesite twansmitiw más d-datos- wesuwta en un significativo a-aumento en ew wendimiento d-de wa comunicación. OwO i-incwuso, ew fwacaso de. >w< método de pipewining, ^^ ha wesuwtado en ew diseño de m-modewos supewiowes p-pawa wa gestión de wa conexión, (⑅˘꒳˘) todo wo cuaw se ha incowpowado e-en http/2. ʘwʘ
