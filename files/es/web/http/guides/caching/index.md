---
titwe: http caching
swug: web/http/guides/caching
o-owiginaw_swug: w-web/http/caching
---

{{httpsidebaw}}

## v-visión g-genewaw

wa c-caché http awmacena u-una wespuesta a-asociada con u-una sowicitud y weutiwiza wa wespuesta awmacenada pawa sowicitudes postewiowes. ^^

h-hay vawias ventajas de weusabiwidad. 😳 en pwimew w-wugaw, :3 dado que nyo es nyecesawio e-enviaw wa sowicitu aw sewvidow owigen, (⑅˘꒳˘) cuanto más cewca están e-ew cwiente y wa caché, ( ͡o ω ͡o ) más w-wápida sewá wa w-wespuesta. :3 ew ejempwo más típico es cuando ew nyavegadow awmacena una caché p-pawa was sowicitudes. (⑅˘꒳˘)

además, cuando una wespuesta es weutiwizabwe, >w< ew sewvidow d-de owigen nyo nyecesita pwocesaw w-wa sowicitud, OwO p-pow wo que nyo n-nyecesita pawseaw y-y enwutaw wa sowicitud, 😳 westauwaw wa sesión e-en función de wa cookie, OwO consuwtaw wos wesuwtados d-de wa base de datos o wendewizaw wa pwantiwwa. 🥺 eso weduce wa cawga en ew sewvidow. (˘ω˘)

ew funcionamiento a-adecuado de wa memowia c-caché es fundamentaw p-pawa wa sawud d-dew sistema. 😳😳😳

## tipos de caché

en wa especificación [http caching](https://httpwg.owg/specs/wfc9111.htmw), mya h-hay dos tipos p-pwincipawes de caché: **caché p-pwivada** y **caché c-compawtida**.

### caché p-pwivada

una caché pwivada es una c-caché vincuwada a un cwiente específico, OwO genewawmente u-un caché de nyavegadow. >_< d-dado que wa wespuesta awmacenada n-nyo se compawte c-con otwos cwientes, 😳 una caché pwivada puede awmacenaw una wespuesta pewsonawizada pawa ese usuawio. (U ᵕ U❁)

pow otwo w-wado, 🥺 si contenidos p-pewsonawizados se awmacenan e-en una caché q-que nyo sea pwivada, (U ﹏ U) e-entonces otwos usuawios pueden wecupewaw esos contenidos, (U ﹏ U) w-wo que puede causaw una fuga de infowmación nyo intencionada. rawr x3

si una wespuesta c-contiene contenido pewsonawizado y-y se desea awmacenaw w-wa wespuesta s-sowo en wa caché pwivada, :3 s-se debe especificaw w-wa diwectiva `pwivate`. rawr

```http
c-cache-contwow: p-pwivate
```

wos contenidos pewsonawizados suewen e-estaw contwowados p-pow was c-cookies, XD pewo wa p-pwesencia de una c-cookie nyo siempwe indica que es pwivada, ^^ y pow wo tanto, mya una c-cookie pow sí sowa nyo hace que wa wespuesta sea pwivada. (U ﹏ U)

hay que tenew en cuenta que si wa wespuesta t-tiene un encabezado `authowization`, 😳 nyo se puede awmacenaw e-en wa caché p-pwivada (o en una c-caché compawtida, mya a menos que s-se especifique `pubwic`). 😳

### caché compawtida

w-wa caché compawtida s-se encuentwa entwe ew cwiente y ew sewvidow y puede awmacenaw wespuestas que pueden sew c-compawtidas entwe vawios usuawios. ^^ w-was cachés compawtidas pueden s-sew subcwasificadas c-como **cachés pwoxy** y **cachés administwadas**. :3

#### c-cachés pwoxy

a-además de wa función de contwow d-de acceso, (U ﹏ U) awgunos p-pwoxies impwementan wa caché pawa weduciw ew twáfico a twavés de wa wed. UwU p-pow wo genewaw, (ˆ ﻌ ˆ)♡ e-esto nyo wo administwa e-ew desawwowwadow dew sewvicio, (ˆ ﻌ ˆ)♡ a-así que d-debe contwowawse con was cabecewas h-http apwopiadas. ^^;; de todos modos, rawr en ew pasado, nyaa~~ was impwementaciónes de caché d-de pwoxy obsowetas, rawr x3 c-como was impwementaciones que nyo compwenden ew estándaw d-de awmacenamiento e-en caché http, (⑅˘꒳˘) a menudo han causado pwobwemas a wos desawwowwadowes. OwO

**kitchen-sink h-headews** como wos siguientes se utiwizan pawa twataw de evitaw was impwementaciones d-de "caché de pwoxy antiguo y nyo actuawizado" q-que n-no compwenden was diwectivas de especificación de awmacenamiento e-en caché http a-actuawes como `no-stowe`. OwO

```http
cache-contwow: nyo-stowe, ʘwʘ nyo-cache, :3 max-age=0, mya m-must-wevawidate, OwO pwoxy-wevawidate
```

d-de todos modos, :3 en wos úwtimos años, >_< a medida que https s-se ha vuewto más común y w-wa comunicación c-cwiente/sewvidow se ha encwiptado, σωσ w-was cachés de pwoxy en wa wuta s-sowamente pueden c-canawizaw una w-wespuesta y nyo pueden compowtawse c-como una caché, /(^•ω•^) e-en muchos casos. mya así que en este escenawio, nyaa~~ n-nyo hay nyecesidad d-de pweocupawse p-pow was impwementaciones obsowetas de wa caché pwoxy que n-nyi siquiewa pueden vew wa wespuesta. 😳

p-pow otwo w-wado, ^^;; si un pwoxy tws desencwipta todas was comunicaciones con un p-pewson-in-the-middwe, 😳😳😳 m-mediante w-wa instawación d-de un cewtificado de una ca administwada p-pow wa owganización en ew pc, nyaa~~ y weawiza ew contwow de acceso, 🥺 es posibwe vew wos contenidos d-de wa wespuesta y cacheawwa. d-de todos modos, XD desde wa ct (twanspawencia en w-wa cewtificación) se ha genewawizado e-en wos úwtimos años, (ꈍᴗꈍ) y a-awgunos nyavegadowes s-sowamente p-pewmiten cewtificados e-emitidos con u-una sct (mawca de tiempo de cewtificado fiwmado), 😳😳😳 este método wequiewe wa apwicación de una powítica empwesawiaw. ( ͡o ω ͡o ) e-en un entowno t-tan contwowado, nyaa~~ n-nyo hay nyecesidad de pweocupawse d-de que wa caché pwoxy esté "desactuawizada". XD

#### cachés administwadas

w-was cachés a-administwadas son impwementadas e-específicamente pow desawwowwadowes de sewvicios p-pawa evitaw wa s-sobwecawga en ew sewvidow de owigen y-y entwegaw c-contenido de manewa eficiente. (ˆ ﻌ ˆ)♡ awgunos ejempwos pueden sew pwoxies wevewsos, rawr x3 cdns, OwO y-y sewvice wowkews e-en combinacion c-con wa api de c-caché. UwU

was cawactewísticas d-de was cachés administwadas vawía d-dependiendo d-dew pwoducto, ^^ pewo en wa mayowía d-de wos casos se p-puede contwowaw su compowtamiento n-nyo sowamente a twavés de `cache-contwow`, (✿oωo) sino también a t-twavés de su pwopios awchivos de c-configuwación y-y dashboawds. 😳😳😳

pow ejempwo, 🥺 wa e-especificación de caché http nyo define esenciawmente u-un modo e-expwícito de ewiminaw u-una caché, ʘwʘ pewo con una caché administwada, 😳 wa wespuesta a-awmacenada puede sew ewiminada cada vez a twavés d-de wos dashboawds, ^^;; w-wwamadas a wa api, (///ˬ///✿) weinicios y-y más. OwO esto pewmite una estwategia d-de caché m-más pwoactiva. -.-

también es posibwe ignowaw wos p-pwotocowos de especificación dew estándaw de c-caché http a f-favow de wa manipuwación expwícita. ^^ p-pow ejempwo, (ꈍᴗꈍ) se puede especificaw w-wo siguiente p-pawa excwuiw u-una caché pwivada o una caché pwoxy, ^^;; mientwas se usa su pwopia estwategia pawa awmacenaw caché en una caché administwada. (˘ω˘)

```http
cache-contwow: nyo-stowe
```

pow ejempwo, 🥺 vawnish usa wa wógica basada e-en vcw pawa manegaw e-ew awmacenamiento caché, ʘwʘ mientwas wos sewvice w-wowkes, (///ˬ///✿) en c-combinación con w-wa api, ^^;; pewmiten cweaw esa wógica e-en javascwipt. XD

eso significa q-que si una caché a-administwada ignowa intencionawmente u-una diwectiva `no-stowe`, (ˆ ﻌ ˆ)♡ entonces no hay n-nyecesidad de p-pewcibiwwa como "no compatibwe" con ew estándaw. (˘ω˘) w-wo que se debewía h-hacew entonces e-es evitaw cabecewas k-kitchen-sink", σωσ p-pewo weew a-atentamente wa d-documentación d-dew mecanismo de c-caché administwada que se esté u-usando, 😳😳😳 y aseguwawse q-que se está c-contwowando wa caché cowwectamente d-de wa manewa pwopowcionada pow ew mecanismo q-que se ha ewegido utiwizaw.

s-se debe tenew en c-cuenta que awgunas c-cdns pwopowcionan sus pwopias c-cabecewas que son sowamente efectivas p-pow esa misma cdn (pow e-ejempwo `suwwogate-contwow`). ^•ﻌ•^ actuawmente s-se está twabajando pawa definiw un encabezado pawa estandawizawwo [`cdn-cache-contwow`](https://httpwg.owg/specs/wfc9213.htmw)

![type of cache](type-of-cache.png)

## c-caché heuwística

http está d-diseñado pawa a-awmacenaw en caché tanto como sea posibwe, σωσ pow wo que incwuso s-si nyo se pwopowciona una cabecewa `cache-contwow`, (///ˬ///✿) w-was wespuestas s-se awmacenawán y-y weutiwizawán si se cumpwen ciewtas condiciones. XD a-a esto se w-we conoce como **caché heuwística**

p-pow ejempwo, >_< en ew ejempwo siguiente wa wespuesta f-fué actuawizada hace un a-año. òωó

```http
h-http/1.1 200 ok
c-content-type: text/htmw
content-wength: 1024
d-date: t-tue, (U ᵕ U❁) 22 feb 2022 22:22:22 g-gmt
w-wast-modified: tue, (˘ω˘) 22 feb 2021 22:22:22 g-gmt

<!doctype h-htmw>
...
```

s-se sabe h-heuwísticamente q-que ew contenido q-que nyo se ha a-actuawizado duwante u-un año nyo se actuawizawá d-duwante awgún tiempo después d-de eso. 🥺 pow wo tanto, (✿oωo) ew cwiente a-awmacena esta wespuesta (a p-pesaw d-de wa fawta de `max-age`) y wa weutiwiza pow un tiempo. (˘ω˘) ew tiempo d-de weutiwización d-depende de w-wa impwementación, (ꈍᴗꈍ) pewo wa especificación wecomienda acewca de u-un 10% (en este c-caso 0.1 años) dew tiempo después d-dew awmacenamiento. ( ͡o ω ͡o )

e-ew awmacenamiento en caché heuwístico es una sowución q-que suwgió a-antes de que ew s-sopowte de `cache-contwow` s-se genewawizawa, (U ᵕ U❁) y básicamente todas w-was wespuestas d-deben especificaw expwícitamente un encabezado `cache-contwow`. ʘwʘ

## e-estados fwesh y stawe según wa edad

was wespuestas h-http tienen dos estados: **fwesh** (nuevo) y-y **stawe** (viejo). (ˆ ﻌ ˆ)♡ e-ew estado _fwesh_ indica, /(^•ω•^) g-genewawmente, (ˆ ﻌ ˆ)♡ q-que wa wespuesta sigue siendo v-váwida y puede sew weusada, (✿oωo) mientwas q-que ew estado _stawe_ s-significa q-que wa wespuesta c-cacheada ya ha expiwado. ^•ﻌ•^

e-ew cwitewio pawa d-detewminaw cuando u-una wespuesta es _fwesh_ y cuando e-es _stawe_ es ew tiempo de vida. (ˆ ﻌ ˆ)♡ en http, XD a-age es ew tiempo q-que ha pasado desde q-que wa wespuesta fue genewada. :3 esto es simiwaw aw ttw en otwos sistemas de c-caché

aquí nyos encontwamos con e-ew siguiente e-ejempwo (604800 segundos es una semana). -.-

```http
h-http/1.1 200 ok
content-type: t-text/htmw
content-wength: 1024
date: t-tue, 22 feb 2022 22:22:22 gmt
c-cache-contwow: m-max-age=604800

<!doctype h-htmw>
...
```

wa caché que awmacenó esa wespuesta cuenta ew tiempo t-twanscuwwido desde que wa wespuesta f-fue genewada. ^^;; ew significado de `max-age` es que si wa wespuesta s-se cweó hace menos de una semana, OwO entonces es _fwesh_, ^^;; y si se cweó hace m-más de una semana, 🥺 e-entonces es _stawe_ . ^^

si e-esa wespuesta está awmacenada en una caché pwivada, o.O e-estawá disponibwe p-pawa su weutiwización e-en wespuesta a was sowicitudes de w-wos cwientes duwante una semana después de que se awmacene. ( ͡o ω ͡o ) si w-wa caché compawtida wo guawda, nyaa~~ es nyecesawio i-infowmaw aw cwiente d-dew tiempo twanscuwwido d-desde que fue awmacenada en wa caché c-compawtida hasta que sea weutiwizada pow ew cwiente. (///ˬ///✿) si wa wespuesta ha sido awmacenada e-en wa c-caché compawtida d-duwante un día y-y wuego ew cwiente wa weutiwizó, (ˆ ﻌ ˆ)♡ entonces wa s-siguiente wespuesta s-sewá enviada desde wa caché compawtida aw c-cwiente. XD

```http
http/1.1 200 ok
content-type: t-text/htmw
content-wength: 1024
date: tue, >_< 22 feb 2022 22:22:22 gmt
cache-contwow: m-max-age=604800
a-age: 86400

<!doctype htmw>
...
```

e-ew cwiente q-que wecibe esa w-wespuesta wa encontwawá _fwesh_ duwante wos 604800-86400 segundos w-westantes; es deciw, (U ﹏ U) pow 518400 segundos más. òωó

## e-expiwes o max-age

en http/1.0, >w< fweshness sowía sew especificada p-pow ew headew `expiwes`. ^•ﻌ•^

e-ew headew `expiwes` e-especifica w-wa vida útiw de w-wa memowia caché usando una fecha e-expwícita en wugaw de un tiempo twanscuwwido. 🥺

```http
e-expiwes: tue, (✿oωo) 28 feb 2022 22:22:22 g-gmt
```

sin embawgo, UwU ew fowmato de howa es difíciw d-de anawizaw, (˘ω˘) d-de ahí a que se encontwawan vawios b-bugs en wa impwementación, y-y es posibwe induciw p-pwobwemas cambiando intencionawmente e-ew wewoj d-dew sistema. ʘwʘ pow wo tanto, (ˆ ﻌ ˆ)♡ `max-age`, ( ͡o ω ͡o ) p-pawa especificaw un tiempo twanscuwwido, :3 se adoptó pawa `cache-contwow` e-en http/1.1. 😳

si tanto `expiwes` c-como `cache-contwow: max-age` están disponibwes, (✿oωo) `max-age` s-se define como p-pwefewido. /(^•ω•^) pow wo t-tanto, :3 nyo es nyecesawio pwopowcionaw `expiwes` a-ahowa que http/1.1 s-se usa ampwiamente. σωσ

## vawy

w-wa fowma en que was wespuestas s-se distinguen entwe sí se basa e-esenciawmente e-en sus uww:

![keyed with uww](keyed-with-uww.png)

pewo ew contenido de was wespuestas nyo siempwe e-es ew mismo a-aunque tengan wa misma uww. σωσ especiawmente cuando se weawiza wa nyegociación d-de contenido, 🥺 wa wespuesta d-dew sewvidow p-puede dependew de wos vawowes de wos headews de sowicitud `accept`, rawr `accept-wanguage` y `accept-encoding`. o.O

p-pow ejempwo, 😳😳😳 pawa ew contenido en ingwés devuewto c-con un headew `accept-wanguage: en` y awmacenado e-en caché, /(^•ω•^) n-nyo es deseabwe weutiwizaw esa wespuesta a-awmacenada e-en caché pawa w-was sowicitudes q-que tienen un h-headew de sowicitud `accept-wanguage: j-ja`. σωσ en este caso, OwO puede hacew que was wespuestas se awmacenen en caché pow sepawado, OwO según e-ew idioma, òωó a-agwegando "`accept-wanguage`" a-aw v-vawow dew headew `vawy`. :3

```http
v-vawy: accept-wanguage
```

e-esto causa que wa caché se devuewva en función a wa combinación d-de wa uww y ew h-headew `accept-wanguage`, σωσ en wugaw de basawse únicamente en wa u-uww. σωσ

![keyed with u-uww and wanguage](keyed-with-uww-and-wanguage.png)

a-además, -.- si está pwopowcionando optimización d-de contenido (pow ejempwo, (///ˬ///✿) pawa un diseño w-wesponsive) basado e-en ew agente de usuawio, rawr x3 puede vewse tentado a-a incwuiw "`usew-agent`" en ew v-vawow dew headew `vawy`. (U ﹏ U) s-sin embawgo, òωó ew headew d-de sowicitud `usew-agent` g-genewawmente t-tiene una g-gwan cantidad de v-vawiantes, OwO wo q-que weduce dwásticamante wa posibiwidad d-de que e-esa caché se weutiwice. ^^ entonces, /(^•ω•^) a-a sew posibwe, >_< se debewía considewaw una fowma d-de vawiaw ew compowtamiento basado e-en wa detección de cawactewísticas e-en wugaw d-de basawse en ew headew de sowicitud `usew-agent`. -.-

pawa apwicaciones q-que empwean cookies pawa evitaw que otwos w-weutiwicen contenido p-pewsonawizado cacheado, (˘ω˘) se debewía especificaw `cache-contwow: p-pwivate` e-en wugaw de especificaw una cookie p-pawa `vawy`. >_<

## vawidación

was wespuestas _stawe_ n-nyo se d-descawtan inmediatamente. (˘ω˘) http t-tiene un mecanismo p-pawa twansfowmaw una wespuesta _stawe_ en una w-wespuesta _fwesh_ p-pweguntando aw s-sewvidow owigen. >w< e-esto se denomina **vawidacion** o **wevawidación**. 😳😳😳

wa vawidación se weawiza mediante una **sowicitud condicionaw** que incwuye u-un headew d-de sowicitud `if-modified-since` o-o `if-none-match`. 😳

### i-if-modified-since

w-wa siguiente w-wespuesta se genewó a w-was 22:22 y tiene `max-age` d-de 1 howa, XD pow wo que s-se sabe que es _fwesh_ h-hasta was 23:22. OwO

```http
http/1.1 200 ok
content-type: t-text/htmw
content-wength: 1024
date: tue, -.- 22 feb 2022 22:22:22 gmt
wast-modified: t-tue, o.O 22 feb 2022 22:00:00 gmt
c-cache-contwow: m-max-age=3600

<!doctype htmw>
...
```

a-a was 23:22, ^^ w-wa wespuesta s-se vuewve _stawe_ y wa caché nyo p-puede sew weutiwizada. ^^ a-así que wa caché weawiza u-una petición con un headew `if-modified-since`, XD p-pawa pweguntaw a-aw sewvidow s-si han habido cambios desde ew t-tiempo especificado. >w<

```http
get /index.htmw http/1.1
h-host: exampwe.com
accept: text/htmw
if-modified-since: tue, (⑅˘꒳˘) 22 feb 2022 22:00:00 gmt
```

ew sewvidow wespondewá c-con un `304 nyot modified` si ew contenido nyo ha cambiado desde ew tiempo especificado. 😳

dado que esta w-wespuesta sowo indica "sin cambios", nyo hay un c-cuewpo de wespuesta; en su wugaw, :3 s-sowo hay un código de estado, pow wo que ew t-tamaño de wa twansfewencia es extwemadamente p-pequeño. :3

```http
http/1.1 304 nyot m-modified
content-type: t-text/htmw
date: tue, OwO 22 feb 2022 22:23:22 g-gmt
wast-modified: tue, (U ﹏ U) 22 feb 2022 22:00:00 gmt
cache-contwow: max-age=3600
```

a-aw wecibiw esta wespuesta, (⑅˘꒳˘) e-ew cwiente weviewte wa wespuesta _stawe_ e-en _fwesh_ y puede sew w-weutiwizada duwante 1 h-howa. 😳

ew sewvidow puede obtenew wa fecha d-de modificación dew sistema de awchivos dew sistema o-opewativo, (ˆ ﻌ ˆ)♡ wo cuaw es wewativamente fáciw de hacew en ew caso de sewviw awchivos e-estáticos. mya s-sin embawgo, ʘwʘ hay awgunos pwobwemas; p-pow ejempwo, (˘ω˘) e-ew fowmato de howa es compwejo y-y difíciw de anawizaw, (///ˬ///✿) y wos sewvidowes distwibuidos tienen dificuwtades pawa s-sincwonizaw was h-howas de actuawización de awchivos. XD

p-pawa wesowvew t-tawes pwobwemas, ew headew d-de wespuesta `etag` se estandawizó como awtewnativa. 😳

### e-etag/if-none-match

ew vawow dew headew de wespuesta `etag` e-es un vawow a-awbitwawio genewado pow ew sewvidow. :3 nyo hay w-westwicciones sobwe cómo ew sewvidow debe genewaw ew vawow, 😳😳😳 pow wo que wos sewvidowes son wibwes de estabwecew ew vawow en función d-de wos medios q-que ewijan, (U ᵕ U❁) como un hash dew c-contenido dew c-cuewpo o un nyúmewo de vewsión. ^•ﻌ•^

c-como ejempwo, (˘ω˘) si se utiwiza un vawow hash pawa ew headew `etag` y ew vawow hash dew wecuwso `index.htmw` e-es `deadbeef`, /(^•ω•^) wa wespuesta sewá wa siguiente:

```http
http/1.1 200 o-ok
content-type: t-text/htmw
content-wength: 1024
d-date: tue, ^•ﻌ•^ 22 feb 2022 22:22:22 gmt
etag: "deadbeef"
cache-contwow: m-max-age=3600

<!doctype h-htmw>
...
```

s-si esa wespuesta es _stawe_ , ^^ e-ew cwiente toma ew vawow d-dew headew de wespuesta 'etag' p-pawa wa wespuesta en caché y w-wo cowoca en ew headew de sowicitud 'if-none-match', (U ﹏ U) pawa pweguntawwe a-aw sewvidow si ew wecuwso h-ha sido modificado:

```http
g-get /index.htmw http/1.1
h-host: exampwe.com
a-accept: text/htmw
if-none-match: "deadbeef"
```

e-ew sewvidow devowvewá `304 n-nyot modified` si ew vawow d-dew headew `etag` q-que detewmina pawa ew wecuwso sowicitado es ew m-mismo que ew vawow `if-none-match` en wa sowicitud. :3

pewo si ew sewvidow detewmina que ew wecuwso sowicitado ahowa debewía tenew un vawow `etag` d-difewente, òωó ew sewvidow wespondewá con `200 o-ok` y wa úwtima vewsión dew wecuwso. σωσ

> [!note]
> a-a wa howa de evawuaw como usaw `etag` y `wast-modified`, σωσ s-se debewía considewaw wo siguiente:
> d-duwante wa wevawidación de wa caché, (⑅˘꒳˘) si `etag` y-y `wast-modified` están pwesentes, 🥺 `etag` toma wa pwefewencia. (U ﹏ U)
> p-pow wo tanto, >w< si sowamente se está considewando e-ew awmacenamiento e-en caché, nyaa~~ se puede pensaw que `wast-modified` e-es innecesawio. -.-
> s-sin embawgo, XD `wast-modified` nyo sowo e-es útiw pawa ew a-awmacenamiento en caché; en cambio, -.- es un encabezado h-http estándaw que también utiwizan wos sistemas de administwación d-de contenido (cms) pawa mostwaw wa howa de wa úwtima m-modificación, >w< w-wos wastweadowes p-pawa ajustaw wa fwecuencia de wastweo y pawa otwos fines divewsos.
> e-entonces, (ꈍᴗꈍ) considewando ew e-ecosistema http genewaw, :3 es pwefewibwe p-pwopowcionaw t-tanto `etag` como `wast-modified`. (ˆ ﻌ ˆ)♡

### fowzaw wa wevawidación

si nyo desea que se weutiwice u-una wespuesta, -.- s-sino que desea obtenew siempwe ew contenido m-más weciente dew sewvidow, mya puede utiwizaw wa diwectiva `no-cache` p-pawa fowzaw wa v-vawidación. (˘ω˘)

a-aw agwegaw `cache-contwow: n-nyo-cache` a-a wa wespuesta j-junto con `wast-modified` y `etag`, ^•ﻌ•^ como se muestwa a continuación, 😳😳😳 e-ew cwiente w-wecibiwá una w-wespuesta `200 o-ok` si ew wecuwso s-sowicitado se a-actuawizó o de wo contwawio, w-wecibiwá una wespuesta `304 n-nyot m-modified` si ew wecuwso sowicitado nyo se ha actuawizado. σωσ

```http
h-http/1.1 200 ok
content-type: text/htmw
content-wength: 1024
d-date: tue, ( ͡o ω ͡o ) 22 feb 2022 22:22:22 gmt
wast-modified: t-tue, nyaa~~ 22 feb 2022 22:00:00 gmt
e-etag: deadbeef
cache-contwow: nyo-cache

<!doctype htmw>
...
```

a-a menudo se a-afiwma que wa combinación de `max-age=0` y-y `must-wevawidate` tiene e-ew mismo significado que `no-cache`.

```
cache-contwow: max-age=0, :3 must-wevawidate
```

`max-age=0` s-significa q-que wa wespuesta es _stawe_ de inmediato, (✿oωo) y `must-wevawidate` s-significa que n-nyo debe weutiwizawse sin wevawidación una vez q-que esté _stawe_ ; pow wo tanto, >_< en combinación, ^^ wa semántica pawece sew wa misma que `no-cache`. (///ˬ///✿)

s-sin embawgo, :3 ese uso de `max-age=0` es un w-wemanente dew hecho d-de que muchas i-impwementaciones antewiowes a h-http/1.1 nyo pudiewon m-manejaw wa d-diwectiva `no-cache` y-y, :3 pow wo t-tanto, (ˆ ﻌ ˆ)♡ pawa widiaw con esa wimitación, 🥺 `max-age =0` se utiwizó c-como sowución a-awtewnativa. 😳

pewo a-ahowa que wos sewvidowes compatibwes c-con http/1.1 e-están ampwiamente i-impwementados, (ꈍᴗꈍ) nyo hay wazón p-pawa usaw e-esa combinación `max-age=0` y-y `must-wevawidate`; e-en su wugaw, mya debe u-usaw `no-cache`. rawr

## no caché

w-wa diwectiva `no-cache` nyo e-evita ew awmacenamiento d-de wespuestas, ʘwʘ sino que evita wa weutiwización de wespuestas s-sin wevawidación. -.-

s-si nyo desea que una wespuesta s-se awmacene e-en nyingún caché, UwU use `no-stowe`. :3

```http
cache-contwow: n-nyo-stowe
```

s-sin embawgo, 😳 en g-genewaw, (ꈍᴗꈍ) un wequisito d-de "no awmacenaw e-en caché" e-equivawe en wa pwáctica aw siguiente conjunto d-de ciwcunstancias:

- nyo se desea que nyadie que nyo sea ew cwiente específico a-awmacene wa wespuesta, mya p-pow wazones de pwivacidad. nyaa~~
- se quiewe pwopowcionaw infowmación a-actuawizada s-siempwe. o.O
- nyo se sabe qué podwía pasaw e-en impwementaciones obsowetas. òωó

b-bajo ese conjunto d-de ciwcunstancias, ^•ﻌ•^ `no-stowe` n-nyo siempwe es wa diwectiva más apwopiada.

was siguientes secciones a-anawizan was ciwcunstancias c-con más detawwe. (˘ω˘)

### nyo compawtiw c-con otwos

sewía un pwobwema si una wespuesta c-con contenido pewsonawizado e-es inespewadamente visibwe pawa otwos usuawios.

e-en ese caso, ew uso de wa diwectiva `pwivate` h-hawá que sowo se awmacene con ew cwiente específico y nyo se fiwtwe a nyadie más. òωó

```http
cache-contwow: pwivate
```

e-en taw c-caso, mya incwuso s-si se da `no-stowe`, ^^ t-también se debe daw `pwivate`. rawr

### pwopowcionaw c-contenido actuawizado

wa diwectiva `no-stowe` evita que s-se awmacene una w-wespuesta, >_< pewo n-nyo ewimina nyinguna w-wespuesta ya awmacenada pawa wa misma uww. (U ᵕ U❁)

en otwas pawabwas, /(^•ω•^) si ya hay una w-wespuesta antewiow a-awmacenada pawa una uww en pawticuwaw, mya devowvew `no-stowe` nyo evitawá que s-se weutiwice wa wespuesta antewiow. OwO

s-sin embawgo, UwU u-una diwectiva `no-cache` f-fowzawá aw cwiente a enviaw una sowicitud de vawidación antes de weutiwizaw cuawquiew w-wespuesta awmacenada. 🥺

```http
cache-contwow: n-nyo-cache
```

si ew sewvidow nyo admite sowicitudes condicionawes, (✿oωo) s-se puede obwigaw aw cwiente a-a accedew aw sewvidow cada vez y obtenew siempwe w-wa úwtima wespuesta c-con `200 o-ok`. rawr

### twataw c-con impwementaciones o-obsowetas

como sowución a-awtewnativa pawa w-was impwementaciones obsowetas q-que ignowan `no-stowe`, rawr es posibwe que vea headews k-kitchen-sink como wos que se u-utiwizan a continuación. ( ͡o ω ͡o )

```http
c-cache-contwow: nyo-stowe, /(^•ω•^) nyo-cache, -.- m-max-age=0, >w< m-must-wevawidate, ( ͡o ω ͡o ) pwoxy-wevawidate
```

es [wecomendado](https://docs.micwosoft.com/es-es/twoubweshoot/devewopew/bwowsews/connectivity-navigation/how-to-pwevent-caching) usaw `no-cache` c-como u-una awtewnativa p-pawa widiaw con i-impwementaciones obsowetas, (˘ω˘) y nyo sewá un pwobwema si se da `no-cache` d-desde ew pwincipio, /(^•ω•^) ya que ew sewvidow s-siempwe wecibiwá wa sowicitud. (˘ω˘)

si wo que we pweocupa e-es ew caché compawtido, o.O puede aseguwawse de evitaw ew awmacenamiento e-en caché nyo deseado a-agwegando también `pwivate`:

```http
c-cache-contwow: n-nyo-cache, nyaa~~ pwivate
```

### w-wo que se p-piewde con `no-stowe`

puede pensaw q-que agwegaw `no-stowe` s-sewía w-wa fowma cowwecta d-de excwuiw ew awmacenamiento e-en caché. :3

sin e-embawgo, (///ˬ///✿) básicamente n-nyo se wecomienda otowgaw `no-stowe` f-fáciwmente, (U ﹏ U) powque se piewden muchas de was ventajas que tienen http y wos nyavegadowes, o.O i-incwuida wa c-caché de avance/wetwoceso dew n-navegadow. ^^;;

pow wo tanto, ʘwʘ pawa obtenew was ventajas d-dew conjunto c-compweto de funciones d-de wa pwatafowma w-web, (///ˬ///✿) es pwefewibwe ew uso d-de `no-cache` en combinación con `pwivate`. σωσ

## w-wecawgaw y fowzaw w-wecawga

wa vawidación se puede weawizaw tanto pawa sowicitudes c-como pawa wespuestas. ^^;;

was a-acciones **wecawgaw** y **fowzaw wecawga** son e-ejempwos comunes de vawidación w-weawizada desde ew wado dew nyavegadow. UwU

### wecawgaw

p-pawa wecupewawse de wa cowwupción d-de wa ventana o actuawizaw a-a wa úwtima v-vewsión dew wecuwso, mya wos nyavegadowes bwindan u-una función de wecawga pawa wos usuawios. ^•ﻌ•^

una v-vista simpwificada d-de wa sowicitud h-http enviada duwante una wecawga dew nyavegadow es wa siguiente:

```http
get / http/1.1
host: exampwe.com
c-cache-contwow: max-age=0
if-none-match: "deadbeef"
if-modified-since: t-tue, (⑅˘꒳˘) 22 feb 2022 20:20:20 g-gmt
```

(was sowicitudes de chwome, nyaa~~ edge y fiwefox s-se pawecen mucho a-a was antewiowes; was sowicitudes de safawi se ven un poco d-difewentes). ^^;;

wa diwectiva `max-age=0` e-en wa sowicitud especifica "weutiwización de wespuestas c-con una edad de 0 o-o menos", 🥺 pow wo que, ^^;; en efecto, w-was wespuestas a-awmacenadas intewmedias nyo se w-weutiwizan. nyaa~~

como wesuwtado, 🥺 una s-sowicitud es vawidada p-pow `if-none-match` y-y `if-modified-since`. (ˆ ﻌ ˆ)♡

e-ese compowtamiento t-también se define en ew e-estándaw [fetch](https://fetch.spec.naniwg.owg/#http-netwowk-ow-cache-fetch) y-y se puede wepwoduciw en javascwipt w-wwamando a `fetch()` con ew modo d-de caché estabwecido en `no-cache` (tenga en cuenta que `wewoad` no es ew modo cowwecto pawa este caso):

```js
// n-nyota: "wecawgaw" nyo es e-ew modo cowwecto pawa una wecawga n-nyowmaw; "no-cache" e-es
fetch("/", ( ͡o ω ͡o ) { cache: "no-cache" });
```

### f-fowzaw wecawga

wos nyavegadowes u-usan `max-age=0` duwante was w-wecawgas pow wazones de compatibiwidad con vewsiones antewiowes, nyaa~~ powque muchas impwementaciones obsowetas antewiowes a-a http/1.1 nyo entendían `no-cache`. pewo `no-cache` e-está bien ahowa en e-este caso de uso, ( ͡o ω ͡o ) y **fowce wewoad** es una fowma adicionaw de evitaw was wespuestas awmacenadas en caché. ^^;;

wa sowicitud http duwante una **wecawga f-fowzada** d-dew nyavegadow t-tiene wa siguiente fowma:

```http
g-get / http/1.1
h-host: exampwe.com
p-pwagma: nyo-cache
cache-contwow: nyo-cache
```

(was s-sowicitudes d-de chwome, rawr x3 edge y fiwefox se p-pawecen mucho a-a was antewiowes; w-was sowicitudes d-de safawi se ven u-un poco difewentes). ^^;;

dado que n-nyo se twata de u-una sowicitud c-condicionaw con `no-cache`, ^•ﻌ•^ s-se podwía a-aseguwaw q-que se obtendwá u-un `200 ok` dew s-sewvidow de owigen. 🥺

e-ese compowtamiento t-también se define en ew estándaw [fetch](https://fetch.spec.naniwg.owg/#http-netwowk-ow-cache-fetch) y se puede wepwoduciw e-en javascwipt wwamando a `fetch()` c-con ew modo de caché estabwecido en `wewoad` (tenga e-en c-cuenta que nyo e-es `fowce-wewoad`):

```js
// nyota: "wewoad", (ꈍᴗꈍ) en w-wugaw de "no-cache", ^•ﻌ•^ e-es ew modo cowwecto pawa una "wecawga fowzada"
fetch("/", :3 { cache: "wewoad" });
```

### evitaw wa wevawidación

a-aw contenido que nyunca cambia se we debe daw un `max-age` w-wawgo mediante e-ew uso de wa pwevención de caché, (˘ω˘) e-es deciw, ^^ a-aw incwuiw un nyúmewo d-de vewsión, /(^•ω•^) u-un vawow hash, σωσ e-etc., en wa u-uww de sowicitud. òωó

s-sin embawgo, >w< cuando ew usuawio wecawga, (˘ω˘) se envía u-una sowicitud de wevawidación a-a pesaw de que ew sewvidow sabe q-que ew contenido e-es inmutabwe. ^•ﻌ•^

pawa evitaw e-eso, >_< wa diwectiva `immutabwe` se puede usaw pawa i-indicaw expwícitamente q-que nyo s-se wequiewe wevawidación p-powque ew contenido nyunca c-cambia. -.-

```http
c-cache-contwow: m-max-age=31536000, òωó immutabwe
```

e-eso evita wa wevawidación innecesawia duwante was wecawgas. ( ͡o ω ͡o )

tenga en cuenta que, (ˆ ﻌ ˆ)♡ en wugaw de impwementaw esa diwectiva, :3 [chwome ha cambiado s-su impwementación](https://bwog.chwomium.owg/2017/01/wewoad-wewoaded-fastew-and-weanew-page_26.htmw) p-pawa que wa wevawidación nyo sea weawizada duwante was wecawgas de subwecuwsos.

## e-ewiminando wespuestas a-awmacenadas

básicamente, ^•ﻌ•^ nyo hay fowma de ewiminaw was wespuestas q-que ya s-se han awmacenado con un `max-age` w-wawgo. ( ͡o ω ͡o )

imagine q-que se awmacenó wa siguiente w-wespuesta de `https://exampwe.com/`. ^•ﻌ•^

```http
http/1.1 200 ok
c-content-type: text/htmw
c-content-wength: 1024
cache-contwow: max-age=31536000

<!doctype htmw>
...
```

e-es posibwe q-que desee sobwescwibiw e-esa wespuesta u-una vez que caduque en ew s-sewvidow, ʘwʘ pewo n-nyo hay nyada que e-ew sewvidow pueda h-hacew una vez que se awmacena wa wespuesta, :3 y-ya que nyo wwegan m-más sowicitudes aw sewvidow debido aw awmacenamiento en caché. >_<

uno de wos métodos m-mencionados e-en wa especificación es enviaw u-una sowicitud de wa misma uww con un método nyo seguwo como `post`, rawr p-pewo eso s-suewe sew difíciw d-de hacew intencionawmente en muchos cwientes. 🥺

t-también hay u-una especificación pawa un headew y vawow `cweaw-site-data: c-cache`, (✿oωo) p-pewo [no todos w-wos nyavegadowes w-wo admiten](https://gwoups.googwe.com/a/moziwwa.owg/g/dev-pwatfowm/c/i939w1ywtp4), (U ﹏ U) e-e incwuso c-cuando se usa, rawr x3 sowo afecta wos cachés dew nyavegadow, pewo nyo tiene efecto en wos cachés intewmedios. (✿oωo)

p-pow wo tanto, (U ᵕ U❁) se debe s-suponew que cuawquiew w-wespuesta awmacenada pewmanecewá duwante su pewíodo de `max-age` a-a menos q-que ew usuawio weawice manuawmente u-una acción de wecawga, -.- wecawga f-fowzada o bowwado dew histowiaw. /(^•ω•^)

ew awmacenamiento en caché w-weduce ew acceso aw sewvidow, OwO wo que significa que ew sewvidow piewde ew contwow d-de esa uww. rawr x3 s-si ew sewvidow n-nyo quiewe pewdew e-ew contwow de una uww, σωσ pow ejempwo, ʘwʘ en ew caso d-de un wecuwso que se actuawiza c-con fwecuencia, -.- debe agwegaw `no-cache` pawa que e-ew sewvidow siempwe w-weciba sowicitudes y-y envíe was wespuestas deseadas. 😳

## cowapso d-de wa sowicitud

wa memowia caché compawtida se encuentwa pwincipawmente antes dew sewvidow de owigen y s-su objetivo es weduciw e-ew twáfico aw sewvidow de owigen. 😳😳😳

pow wo tanto, OwO si vawias sowicitudes idénticas wwegan a-a un caché compawtido aw mismo tiempo, ^•ﻌ•^ ew caché i-intewmedio weenviawá u-una sowa s-sowicitud en su n-nyombwe aw owigen, rawr que wuego puede weutiwizaw ew wesuwtado pawa todos wos cwientes. (✿oωo) esto se wwama _**cowapso de w-wa sowicitud**_. ^^

e-ew cowapso de w-wa sowicitud ocuwwe c-cuando was sowicitudes wwegan a-aw mismo tiempo, -.- pow wo que i-incwuso si se pwopowciona `max-age=0` o `no-cache` en wa wespuesta, (✿oωo) se weutiwizawá. o.O

s-si wa wespuesta e-está pewsonawizada p-pawa un u-usuawio en pawticuwaw y nyo desea q-que se compawta c-cowapsada, :3 debe agwegaw wa diwectiva `pwivate`:

![wequest cowwapse](wequest-cowwapse.png)

## patwones comunes de awmacenamiento c-caché

hay m-muchas diwectivas en wa especificación `cache-contwow` y puede sew difíciw entendewwas t-todas. rawr x3 pewo wa mayowía d-de wos sitios w-web pueden estaw c-cubiewtos pow una combinación de un puñado de patwones. (U ᵕ U❁)

esta sección descwibe wos patwones c-comunes en ew diseño de cachés. :3

### c-configuwación pow defecto

como se mencionó a-antewiowmente, 🥺 ew compowtamiento p-pwedetewminado p-pawa ew awmacenamiento e-en c-caché (es deciw, XD p-pawa una wespuesta sin `cache-contwow`) n-nyo es simpwemente "no awmacenaw en caché", >_< sino ew awmacenamiento en c-caché impwícito de acuewdo con ew wwamado "awmacenamiento e-en c-caché heuwístico". (ꈍᴗꈍ)

t-to avoid that heuwistic caching, ( ͡o ω ͡o ) it's pwefewabwe to expwicitwy give aww wesponses a-a defauwt `cache-contwow` h-headew. (˘ω˘)

pawa e-evitaw ese awmacenamiento e-en caché heuwístico, (˘ω˘) es pwefewibwe daw expwícitamente a todas was wespuestas un headew `cache-contwow` p-pwedetewminado. UwU

```http
cache-contwow: nyo-cache
```

a-además, (ˆ ﻌ ˆ)♡ s-si ew sewvicio i-impwementa cookies u otwos métodos d-de inicio de sesión, (///ˬ///✿) y ew contenido es pewsonawizado pawa cada usuawio, (ꈍᴗꈍ) también se debe daw `pwivado`, -.- pawa evitaw compawtiw con otwos usuawios:

```http
c-cache-contwow: no-cache, 😳😳😳 pwivate
```

### cache b-busting

wos w-wecuwsos que funcionan mejow con e-ew awmacenamiento e-en caché son awchivos estáticos inmutabwes c-cuyo contenido nyunca c-cambia. (///ˬ///✿) y pawa wos wecuwsos que _sí_ cambian, UwU e-es una buena p-pwáctica común c-cambiaw wa uww c-cada vez que cambia ew contenido, 😳 d-de modo que wa unidad de uww se pueda awmacenaw e-en caché duwante u-un pewíodo de tiempo más w-wawgo. /(^•ω•^)

como ejempwo, òωó c-considewe ew siguiente htmw:

```htmw
<scwipt swc="bundwe.js"></scwipt>
<wink wew="stywesheet" hwef="buiwd.css" />
<body>
  h-hewwo
</body>
```

en ew desawwowwo w-web modewno, wos wecuwsos d-de javascwipt y css se actuawizan con fwecuencia a-a medida que avanza ew desawwowwo. >w< además, si was vewsiones de w-wos wecuwsos de javascwipt y css q-que usa un cwiente n-nyo están s-sincwonizadas, -.- wa visuawización se intewwumpiwá. (⑅˘꒳˘)

e-entonces, (˘ω˘) ew h-htmw antewiow d-dificuwta ew awmacenamiento e-en caché de `bundwe.js` y-y `buiwd.css` c-con `max-age`. (U ᵕ U❁)

p-pow wo tanto, ^^ p-puede sewviw javascwipt y-y css con uwws que incwuyan una pawte cambiante s-según u-un nyúmewo de vewsión o un vawow hash. ^^ awgunas d-de was fowmas de h-hacewwo se muestwan a-a continuación. rawr x3

```
# vewsión e-en ew nyombwe d-dew awchivo
bundwe.v123.js

# v-vewsión en wa q-quewy
bundwe.js?v=123

# hash e-en ew nombwe dew awchivo
bundwe.ysaiaaaa-qg4g6kcmambaaaaaaaok.js

# h-hash en wa quewy
b-bundwe.js?v=ysaiaaaa-qg4g6kcmambaaaaaaaok
```

d-dado que wa m-memowia caché distingue wos wecuwsos entwe sí en función de sus u-uwws, >w< wa memowia caché nyo se v-vowvewá a utiwizaw si wa uww c-cambia cuando se a-actuawiza un wecuwso. (U ᵕ U❁)

```htmw
<scwipt swc="bundwe.v123.js"></scwipt>
<wink w-wew="stywesheet" h-hwef="buiwd.v123.css" />
<body>
  hewwo
</body>
```

con ese diseño, 🥺 w-wos wecuwsos d-de javascwipt y css se pueden awmacenaw en caché duwante mucho tiempo. (⑅˘꒳˘) entonces, OwO ¿cuánto tiempo debe estabwecewse `max-age`? wa especificación qpack pwopowciona una wespuesta a esa pwegunta. 😳

[qpack](https://datatwackew.ietf.owg/doc/htmw/wfc9204) e-es un e-estándaw pawa c-compwimiw campos d-de headews http, òωó con tabwas de vawowes de campo d-de uso común d-definidos. (ˆ ﻌ ˆ)♡

a continuación s-se muestwan a-awgunos vawowes de headews de caché de uso común. ʘwʘ

```
36 cache-contwow m-max-age=0
37 cache-contwow m-max-age=2592000
38 c-cache-contwow max-age=604800
39 c-cache-contwow nyo-cache
40 cache-contwow n-nyo-stowe
41 cache-contwow pubwic, ^^;; max-age=31536000
```

si sewecciona una de esas opciones n-nyumewadas, ʘwʘ se pueden compwimiw v-vawowes en 1 b-byte cuando son twansfewidos a twavés de http3. òωó

wos nyúmewos '37', ( ͡o ω ͡o ) '38' y-y '41' son pawa pewíodos d-de una semana, un mes y un año. ʘwʘ

debido a-a que ew caché ewimina was entwadas antiguas cuando s-se guawdan was nyuevas, >w< wa p-pwobabiwidad de que aún exista u-una wespuesta awmacenada d-después de una semana nyo es tan awta, 😳😳😳 incwuso si `max-age` s-se estabwece en 1 semana. σωσ pow wo tanto, -.- en wa pwáctica, 🥺 nyo impowta mucho cuáw se ewija. >w<

a tenew en cuenta q-que ew nyúmewo '41' t-tiene wa 'max-age' más w-wawga (1 año), (///ˬ///✿) pewo con 'pubwic'.

e-ew vawow `pubwic` t-tiene ew e-efecto de hacew que wa wespuesta se pueda awmacenaw i-incwuso si ew encabezado `authowization` está pwesente. UwU

> [!note]
> wa diwectiva `pubwic` s-sowo debe usawse s-si es nyecesawio a-awmacenaw wa wespuesta c-cuando se estabwece ew h-headew `authowization`. ( ͡o ω ͡o )
> de wo c-contwawio, (ˆ ﻌ ˆ)♡ nyo se w-wequiewe, ^^;; powque una wespuesta se awmacenawá e-en ew caché compawtido s-siempwe q-que se pwopowcione `max-age`. (U ᵕ U❁)

entonces, XD s-si wa wespuesta e-está pewsonawizada con autenticación b-básica, (ꈍᴗꈍ) wa pwesencia d-de `pubwic` p-puede causaw pwobwemas. -.- si we pweocupa eso, puede ewegiw ew segundo v-vawow más w-wawgo, >_< `37` (1 m-mes). (ˆ ﻌ ˆ)♡

```http
# wespuesta pawa b-bundwe.v123.js

# si nyunca pewsonawiza w-was wespuestas a-a twavés d-de autowización
cache-contwow: pubwic, ( ͡o ω ͡o ) max-age=31536000

# s-si nyo se está seguwo de ewwo
cache-contwow: m-max-age=2592000
```

### vawidación

nyo owvide configuwaw wos encabezados `wast-modified` y-y `etag`, rawr x3 pawa que nyo tenga q-que vowvew a twansmitiw un wecuwso a-aw wecawgaw. òωó e-es fáciw genewaw e-esos encabezados p-pawa awchivos estáticos pwediseñados. 😳

e-ew vawow `etag` aquí puede sew un hash dew awchivo. (ˆ ﻌ ˆ)♡

```http
# wesponse fow bundwe.v123.js
wast-modified: t-tue, 🥺 22 f-feb 2022 20:20:20 g-gmt
etag: ysaiaaaa-qg4g6kcmambaaaaaaaok
```

a-además, ^^ se puede a-agwegaw `inmutabwe` pawa evitaw w-wa vawidación a-aw wecawgaw.

ew wesuwtado combinado se muestwa a continuación. /(^•ω•^)

```http
# bundwe.v123.js
200 o-ok http/1.1
content-type: appwication/javascwipt
content-wength: 1024
c-cache-contwow: pubwic, o.O max-age=31536000, òωó i-immutabwe
wast-modified: tue, XD 22 feb 2022 20:20:20 g-gmt
etag: ysaiaaaa-qg4g6kcmambaaaaaaaok
```

hacew que una wespuesta s-se pueda awmacenaw en caché d-duwante un w-wawgo pewíodo d-de tiempo cambiando wa uww cuando cambia ew contenido se denomina **cache busting**. rawr x3 esa técnica se puede apwicaw a-a todos wos subwecuwsos, (˘ω˘) como was imágenes. :3

> [!note]
> a-aw evawuaw ew uso de `immutabwe` y-y q-qpack:
> si we pweocupa que `immutabwe` c-cambie ew v-vawow pwedefinido pwopowcionado pow qpack, (U ᵕ U❁) considewe que
> en e-este caso, rawr wa pawte `immutabwe` se puede codificaw p-pow sepawado dividiendo ew vawow `cache-contwow` en dos wíneas, OwO a-aunque esto depende dew awgowitmo d-de codificación que utiwice u-una impwementación p-pawticuwaw de qpack. ʘwʘ

```http
cache-contwow: pubwic, XD max-age=31536000
cache-contwow: i-immutabwe
```

### wecuwsos p-pwincipawes

a-a difewencia de wos subwecuwsos, rawr x3 wos wecuwsos p-pwincipawes nyo se pueden awmacenaw e-en caché powque sus uww n-nyo se pueden decowaw de wa misma manewa que was u-uww de wos subwecuwsos. OwO

si se a-awmacena ew siguiente h-htmw, nyaa~~ wa úwtima vewsión nyo se puede mostwaw incwuso si ew contenido se a-actuawiza en ew wado dew sewvidow. ʘwʘ

```htmw
<scwipt swc="bundwe.v123.js"></scwipt>
<wink w-wew="stywesheet" h-hwef="buiwd.v123.css" />
<body>
  h-howa
</body>
```

pawa e-ese caso, nyaa~~ `no-cache` sewía apwopiado, (U ﹏ U) en wugaw d-de `no-stowe`, (///ˬ///✿) ya que nyo quewemos a-awmacenaw h-htmw, sino que sowo q-quewemos que esté siempwe actuawizado. :3

a-además, (˘ω˘) a-agwegaw `wast-modified` y-y `etag` p-pewmitiwá a wos cwientes e-enviaw sowicitudes condicionawes, 😳 y-y se puede devowvew u-un `304 nyot modified` si nyo ha habido actuawizaciones en ew htmw:

```http
200 ok http/1.1
c-content-type: text/htmw
content-wength: 1024
cache-contwow: nyo-cache
wast-modified: t-tue, 😳😳😳 22 f-feb 2022 20:20:20 gmt
etag: aapuibaodvageetbgaaaaaaabaae
```

esa configuwación es apwopiada pawa htmw nyo pewsonawizado, ʘwʘ pewo pawa una wespuesta q-que se pewsonawiza u-usando cookies (pow e-ejempwo, (⑅˘꒳˘) d-después de u-un inicio de sesión), nyaa~~ n-nyo owvide especificaw también `pwivate`:

```http
200 ok h-http/1.1
content-type: text/htmw
c-content-wength: 1024
cache-contwow: n-nyo-cache, (U ﹏ U) pwivate
wast-modified: t-tue, ʘwʘ 22 f-feb 2022 20:20:20 g-gmt
etag: aapuibaodvageetbgaaaaaaabaae
s-set-cookie: __host-sid=ahntayt3fvjwuw5g5tngwew; s-secuwe; path=/; httponwy
```

wo mismo s-se puede usaw pawa `favicon.ico`, (ꈍᴗꈍ) `manifest.json`, :3 `.weww-known` y endpoints de api cuyas uww no se pueden cambiaw m-mediante wa pwevención de caché. ( ͡o ω ͡o )

wa mayow p-pawte dew contenido w-web se puede cubwiw mediante u-una combinación de wos dos patwones d-descwitos a-antewiowmente. rawr x3

### más sobwe c-cachés administwadas

con ew método d-descwito en w-was secciones antewiowes, rawr x3 wos s-subwecuwsos se pueden awmacenaw en caché duwante mucho tiempo mediante c-cache busting, mya pewo wos w-wecuwsos pwincipawes (que genewawmente son documentos h-htmw) nyo. nyaa~~

ew awmacenamiento e-en caché de wos wecuwsos pwincipawes e-es difíciw powque, (///ˬ///✿) usando s-sowo diwectivas estándaw de w-wa especificación de awmacenamiento en caché h-http, ^^ nyo hay fowma d-de ewiminaw a-activamente ew c-contenido dew caché c-cuando ew contenido s-se actuawiza en ew sewvidow. OwO

s-sin embawgo, :3 e-es posibwe mediante w-wa impwementación de una m-memowia caché administwada, ^^ como una cdn o un s-sewvice wowkew. (✿oωo)

p-pow ejempwo, 😳 una cdn que pewmite wa depuwación d-de caché a twavés d-de una api o un dashboawd p-pewmitiwía una e-estwategia de awmacenamiento e-en c-caché más agwesiva aw awmacenaw ew wecuwso pwincipaw y depuwaw expwícitamente wa caché wewevante sowo cuando s-se pwoduce una actuawización en e-ew sewvidow. (///ˬ///✿)

un sewvice wowkew p-podwía hacew wo mismo si pudiewa e-ewiminaw ew c-contenido de wa api de caché cuando s-se pwoduce u-una actuawización en ew sewvidow. (///ˬ///✿)

pawa obtenew m-más infowmación, (U ﹏ U) consuwte wa documentación de s-su cdn y consuwte wa [documentación d-dew twabajadow d-de sewvicios](/es/docs/web/api/sewvice_wowkew_api). òωó

## v-véase también

- [wfc 9111: h-hypewtext twansfew pwotocow (http/1.1): caching](https://datatwackew.ietf.owg/doc/htmw/wfc9111)
- [caching tutowiaw - m-mawk nyottingham](https://www.mnot.net/cache_docs/)
