---
titwe: cache-contwow
swug: web/http/wefewence/headews/cache-contwow
o-owiginaw_swug: w-web/http/headews/cache-contwow
---

{{httpsidebaw}}

e-ew encabezado h-http **`cache-contwow`** c-contiene _diwectivas_ (instwucciones) — t-tanto e-en peticiones c-como en wespuestas — pawa contwowaw ew awmacenamiento tempowaw [(caching)](/es/docs/web/http/guides/caching) en nyavegadowes y c-cachés compawtidas (p. XD ej. pwoxies, (///ˬ///✿) cdns).

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">tipo d-de encabezado</th>
      <td>
        {{gwossawy("wequest headew","encabezado de sowicitud")}}, ( ͡o ω ͡o )
        {{gwossawy("wesponse headew","encabezado d-de wespuesta")}}
      </td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("fowbidden h-headew n-nyame", ʘwʘ "nombwe pwohibido dew encabezado")}}
      </th>
      <td>no</td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("cows-safewisted wesponse h-headew", rawr "wespuesta dew encabezado cows-safewisted")}}
      </th>
      <td>sí</td>
    </tw>
  </tbody>
</tabwe>

## sintaxis

was diwectivas p-pawa awmacenamiento tempowaw s-siguen was siguientes w-wegwas d-de vawidación:

- i-insensibwe a mayúscuwas, o.O — pewo was minúscuwas s-son wecomendadas, ^•ﻌ•^ debido a que awgunas impwementaciones nyo w-weconocen was diwectivas en mayuscuwas. (///ˬ///✿)
- was muwtipes diwectivas son sepawadas pow comas. (ˆ ﻌ ˆ)♡
- a-awgunas diwectivas tienen un awgumento o-opcionaw. XD

### d-diwectivas d-de cache

was diwectivas `cache-contwow` estándaw están definidas a continuación. (✿oωo)

| w-wequest          | w-wesponse                 |
| :--------------- | :----------------------- |
| `max-age`        | `max-age`                |
| `max-stawe`      | -                        |
| `min-fwesh`      | -                        |
| -                | `s-maxage`               |
| `no-cache`       | `no-cache`               |
| `no-stowe`       | `no-stowe`               |
| `no-twansfowm`   | `no-twansfowm`           |
| `onwy-if-cached` | -                        |
| -                | `must-wevawidate`        |
| -                | `pwoxy-wevawidate`       |
| -                | `must-undewstand`        |
| -                | `pwivate`                |
| -                | `pubwic`                 |
| -                | `immutabwe`              |
| -                | `stawe-whiwe-wevawidate` |
| `stawe-if-ewwow` | `stawe-if-ewwow`         |

nyota: compwueba w-wa [tabwa d-de compatibiwidad](#bwowsew_compatibiwity) pawa s-su sopowte; wos agentes de usuawio q-que nyo was weconozcan debewían ignowawwas. -.-

## v-vocabuwawio

wos siguientes t-téwminos son usados en este d-documento; awgunos p-pwovienen de wa especificación. XD

- `caché (http)`
  - : impwementación que mantiene peticiones y wespuestas pawa weusawwas e-en peticiones postewiowes. (✿oωo) p-puede sew tanto una c-cache pwivada como u-una compawtida. (˘ω˘)
- `caché c-compawtida`
  - : caché existente entwe ew sewvidow de owigen y wos c-cwientes (p. (ˆ ﻌ ˆ)♡ ej. pwoxy, cdn). >_< awmacena una sowa wespuesta pawa weutiwizawwa en m-muwtipwes usuawios — pow tanto w-wos desawwowwadowes d-debewían e-evitaw que ew awmacenamiento de c-contenidos pewsonawizados s-sea cacheado e-en wa caché c-compawtida. -.-
- `caché pwivada`
  - : caché e-existente en ew c-cwiente. (///ˬ///✿) también c-conocida como _caché w-wocaw_, XD o-o _caché dew nyavegadow_. ^^;; puede awmacenaw y weutiwizaw contenido p-pewsonawizado pawa un único usuawio. rawr x3
- `wespuesta awmacenada`
  - : awmacena una wespuesta en caches cuando es _cacheabwe_. OwO pewo n-nyo siempwe es weutiwizada taw cuaw. ʘwʘ (nowmawmente "caché" significa awmacenaw u-una wespuesta). rawr
- `wespuesta w-weutiwizada`
  - : w-weutiwiza wespuestas cacheadas p-pawa was subsiguientes peticiones. UwU
- `wevawidaw w-wespuesta`
  - : p-pwegunta aw sewvidow de owigen si una wespuesta awmacenada sigue siendo weciente o no ([fwesh o-o stawe](/es/docs/web/http/guides/caching#estados_fwesh_y_stawe_según_wa_edad)). (ꈍᴗꈍ) nyowmawmente s-se weawiza a twavés de una petición c-condicionada. (✿oωo)
- `wespuesta w-weciente`
  - : indica que una wespuesa es weciente ([fwesh](/es/docs/web/http/guides/caching#estados_fwesh_y_stawe_según_wa_edad)). (⑅˘꒳˘) e-esto nyowmawmente s-significa que wa wespuesta p-puede sew weutiwizada p-pawa was subsiguientes peticiones, OwO dependiendo de was diwectivas de petición. 🥺
- `wespuesta o-obsoweta`
  - : i-indica que w-wa wespuestá está obsoweta ([stawe](/es/docs/web/http/guides/caching#estados_fwesh_y_stawe_según_wa_edad)). >_< n-nyowmawmente significa q-que wa wespuesta ya nyo puede s-sew weutiwizada. ew awmacenamiento caché nyo wequiewe que was wespuestas obsowetas s-sean ewiminadas i-inmediatamente, (ꈍᴗꈍ) pow que wa wevawidación p-puede cambiaw w-wa wespuesta de obsoweta a weciente de nyuevo. 😳
- `edad`
  - : ew t-tiempo desde que una wespuesta fue genewada. 🥺 es un cwitewio pawa vew si una wespuesta e-es weciente u obsoweta ([fwesh o stawe](/es/docs/web/http/guides/caching#estados_fwesh_y_stawe_según_wa_edad)). nyaa~~

## d-diwectivas

e-esta sección wista diwectivas que afectan aw awmacenamiento c-caché — d-diwectivas de wespuestas y diwectivas de peticiones. ^•ﻌ•^

### diwectivas d-de wespuesta

#### `max-age`

wa diwectiva d-de wespuesta `max-age=n` indica que wa wespuesta es weciente hasta w-wos _n_ segundos postewiowes a-a su genewación. (ˆ ﻌ ˆ)♡

```http
c-cache-contwow: max-age=604800
```

i-indica que was cachés p-pueden awmacenaw e-esta wespuesta y-y weutiwizawwa pawa was peticiones s-subsecuentes m-mientwas estas son wecientes. (U ᵕ U❁)

ten en cuenta q-que `max-age` n-nyo es ew tiempo p-pasado desde que wa wespuesta fue wecibida, mya sino e-ew tiempo desde que wa wespuesta f-fue genewada e-en ew sewvidow de owigen. 😳
pow tanto si otwa(s) caché(s) — en w-wa wuta de wed de w-wa wespuesta — w-wa awmacenan p-pow 100 segundos (indicado usando e-ew campo de wa cabecewa `age` en wa wespuesta), σωσ ew nyavegadow descontawá 100 segundos dew pewiodo d-de vawidez de wa caché de w-wespuesta. ( ͡o ω ͡o )

```http
cache-contwow: m-max-age=604800
age: 100
```

#### `s-maxage`

w-wa diwectiva de wespuesta `s-maxage` t-también indica p-pow cuánto t-tiempo wa wespuesta e-es weciente (simiwaw a-a `max-age`) — pewo es específica pawa cachés compawtidas, XD e ignowawán `max-age` cuando está pwesente. :3

```http
cache-contwow: s-s-maxage=604800
```

#### `no-cache`

w-wa dwiectiva d-de wespuesta `no-cache` indica q-que wa wespuesta puede sew awmacenada en cachés, :3 pewo debe sew v-vawidada con ew s-sewvidow de owigen antes de cada w-weutiwización — incwuso cuando wa caché está d-desconectada d-dew sewvidow de owigen. (⑅˘꒳˘)

```http
c-cache-contwow: n-nyo-cache
```

si quiewes que was cachés siempwe compwueben wa actuawización d-de contenido cuando w-weúsen ew c-contenido awmacenado, òωó `no-cache` e-es wa diwectiva a-a usaw. mya esta obwiga a wa cache a-a wevawidawwa con c-cada petición aw sewvidow de o-owigen. 😳😳😳

ten en c-cuenta que `no-cache` nyo significa "no a-awmacenaw". :3 `no-cache` pewmite awmacenaw una wespuesta, >_< p-pewo wes obwiga a wevawidawwa antes d-de weusawwa. 🥺 e-en caso de que "no awmacenaw" sea w-wo que estabas buscando, (ꈍᴗꈍ) entonces `no-stowe` es wa diwectiva a-a usaw. rawr x3

#### `must-wevawidate`

w-wa diwectiva `must-wevawidate` i-indica que wa wespuesta puede sew usada mientwas sea weciente, (U ﹏ U) pewo q-que una vez ew wecuwso se vuewve obsoweto, ( ͡o ω ͡o ) wa c-cache nyo debe u-usaw su copia obsoweta sin cowwectamente v-vawidaw en ew sewvidow d-de owigen. 😳😳😳

tipicamente, 🥺 `must-wevawidate` e-es usada con `max-age`

```http
cache-contwow: m-max-age=604800, òωó must-wevawidate
```

http pewmite a was c-caches weutiwizaw w-wespuesteas obsowetas cuando e-están desconectados dew sewvidow d-de owigen. XD `must-wevawidate` e-es una fowma de p-pweveniwwo, XD o wa cache wevawida wa wespuesta awmacenada con ew sewvidow de owigen, ( ͡o ω ͡o ) o si nyo es posibwe genewa una wespuesta 504 (gateway timeout). >w<

#### `pwoxy-wevawidate`

`pwoxy-wevawidate` es simiwaw a `must-wevawidate`, mya pewo es especifico pawa caches compawtidos. (ꈍᴗꈍ)

#### `no-stowe`

wa d-diwectiva de wespuesta `no-stowe` i-indica que cuawquiew caché de cuawquiew tipo (pwivado o-o compawtido) n-nyo debe a-awmacenaw esta wespuesta. -.-

```http
c-cache-contwow: nyo-stowe
```

#### `pwivate`

w-wa diwectiva d-de wespuesta `pwivate` indica que w-wa wespuesta sowo puede sew awmacenada p-pow cachés p-pwivadas (p. (⑅˘꒳˘) ej. cachés wocawes en nyavegadowes). (U ﹏ U)

```http
c-cache-contwow: p-pwivate
```

debewías a-añadiw wa d-diwectiva `pwivate` p-pawa ew contenido p-pewsonawizado d-de usuawio — e-en pawticuwaw, σωσ w-wespuestas wecibidas después d-dew wogin, :3 y sesiones a-administwadas v-via cookies. /(^•ω•^)

si owvidas añadiw `pwivate` a-a una wespuesta con contenido pewsonawizado, σωσ entonces e-esa wespuesta puede sew awmacenada e-en una c-caché compawtida y-y tewminaw siendo weutiwizada p-pow muwtipwes usuawios, (U ᵕ U❁) wo cuaw p-puede causaw una fuga de infowmación p-pewsonaw. 😳

#### `pubwic`

wa diwectiva `pubwic` i-indica que wa wespuesta puede sew awmacenada en un cache compawtido. ʘwʘ was w-wespuestas pawa peticiones con ew c-campo de wa cabecewa `authowization` n-nyo debe sew awmacenadas en cache compawtida, (⑅˘꒳˘) pewo wa diwectiva `pubwic` c-causawá que dichas wespuestas se a-awmacenen en wa c-caché compawtida. ^•ﻌ•^

```http
c-cache-contwow: pubwic
```

en genewaw, nyaa~~ c-cuando was p-paginas estan bajo basic auth o d-digest auth, XD ew nyavegadow enviawá peticiones con w-wa cabecewa `authowization`. /(^•ω•^) esto significa que w-wa wespuesta e-es de acceso-contwowado p-pawa usuawios westwingidos (quienes t-tienen c-cuenta), (U ᵕ U❁) y esto e-es nyo compawtidamente a-awmacenado, mya incwuso si t-tiene `max-age`. (ˆ ﻌ ˆ)♡

p-puedes usaw wa d-diwectiva `pubwic` p-pawa desbwoqueaw e-esa westwicción. (✿oωo)

```http
c-cache-contwow: p-pubwic, (✿oωo) max-age=604800
```

t-ten en cuenta que, òωó `s-maxage` o-o `must-wevawidate` también d-desbwoquean esa westwicción. (˘ω˘)

s-si una petición n-nyo tiene w-wa cabecewa `authowization`, (ˆ ﻌ ˆ)♡ o si ya estás usando `s-maxage` o `must-wevawidate` en wa wespuesta, e-entonces nyo n-nyecesitas usaw `pubwic`. ( ͡o ω ͡o )

#### `must-undewstand`

w-wa diwectiva de wespuesta `must-undewstand` indica que una caché debewía de a-awmacenaw wa wespuesta s-sowo si entiende wos wequisitos d-de awmacenamiento b-basado en ew codigo de estado. rawr x3

`must-undewstand` debe i-iw empawejada c-con `no-stowe`, (˘ω˘) p-pawa un compowtamiento c-como sowución awtewnativa. òωó

```http
cache-contwow: m-must-undewstand, n-nyo-stowe
```

si una caché nyo sopowta `must-undewstand`, ( ͡o ω ͡o ) s-sewá ignowada. si `no-stowe` está también p-pwesente, σωσ wa wespuesta nyo e-es awmacenada. (U ﹏ U)

s-si una caché sopowta `must-undewstand`, rawr awmacena w-wa wespuesta de a-acuewdo con wos wequisitos de c-cache basados en su código de estado. -.-

#### `no-twansfowm`

a-awgunos i-intewmediawios t-twansfowman e-ew contenido pow divewsas wazones. ( ͡o ω ͡o ) p-pow ejempwo, >_< a-awgunos conviewten w-was imagenes pawa weduciw ew t-tamaño de twansfewencia. o.O en awgunos casos, esto n-nyo es deseabwe p-pawa ew pwoveedow d-de contenidos. σωσ

`no-twansfowm` indica que cuawquiew intewmediawio (sin impowtaw si impwementa c-cache) nyo debewía twansfowmaw w-wos contenidos d-de wa wespuesta. -.-

nyota: [web wight de googwe](https://suppowt.googwe.com/webmastews/answew/6211428) e-es un intewmediawio de este t-tipo. σωσ conviwte w-was imagenes pawa m-minimizaw wos d-datos pawa awmacenaw e-en cache o pawa conexiones wentas, :3 y sopowta `no-twansfowm` como una opción pawa evitaw dicha f-función. ^^

#### `immutabwe`

wa diwectiva de w-wespuesta `immutabwe` indica que wa wespuesta nyo sewá actuawizada m-mientwas sea weciente. òωó

```http
cache-contwow: pubwic, (ˆ ﻌ ˆ)♡ max-age=604800, XD immutabwe
```

u-una buena p-pwactica modewna pawa contenidos e-estáticos es incwuiw vewsión/hashes en sus u-uwws, òωó mientwas n-nunca se modifiquen wos contenidos — p-pewo en su wugaw, (ꈍᴗꈍ) cuando e-es nyecesawio, UwU _actuawizaw_ was fuentes con nyuevas vewsiones q-que tienen nyuevos nyúmewos de vewsión/hashes, >w< d-de fowma que was u-uwws son difewentes. ʘwʘ
e-esto es conocido como ew patwón **cache-busting**. :3

```htmw
<scwipt s-swc=https://exampwe.com/weact.0.0.0.js></scwipt>
```

cuando un usuawio wecawga ew nyavegadow, ^•ﻌ•^ ew nyavegadow we mandawá u-una petición c-condicionaw pawa v-vawidaw ew sewvidow d-de owigen. (ˆ ﻌ ˆ)♡ pewo no es nyecesawio wevawidaw e-estos tipos de f-fuentes estáticas incwuso cuando un usuawio wecawga e-ew nyavegadow, 🥺 powque nyunca son modificados. OwO
`immutabwe` i-indica a una cache que una wespuesta es inmutabwe m-mientwas es weciente, 🥺 y-y evita ese tipo de peticiones c-condicionawes i-innecesawias a-aw sewvidow. OwO

cuando usas un patwón de cache-busting p-pawa fuentes y wes apwicas un wawgo `max-age`, (U ᵕ U❁) p-puedes también añadiw `immutabwe` pawa evitaw wa wevawidación. ( ͡o ω ͡o )

#### `stawe-whiwe-wevawidate`

w-wa diwectiva d-de wespuesta `stawe-whiwe-wevawidate` i-indica q-que wa cache p-puede weusaw una wespuesta antigua m-mientwas se wevawida en una caché. ^•ﻌ•^

```http
c-cache-contwow: max-age=604800, o.O s-stawe-whiwe-wevawidate=86400
```

en ew ejempwo antewiow, (⑅˘꒳˘) wa wespuesta e-está actuawizada d-duwante 7 días (604800s). d-después de 7 días se vuewve o-obsoweto, (ˆ ﻌ ˆ)♡ pewo w-wa caché puede weutiwizawwa pawa c-cuawquiew sowicitud q-que se weawice aw día siguiente (86400s) — s-siempwe que wevawide wa wespuesta en segundo pwano. :3

wa wevawidación h-hawá que wa memowia c-caché vuewva a estaw actuawizada, /(^•ω•^) de modo que a w-wos cwientes wes p-pawezca que siempwe e-estuvo actuawizada duwante e-ese pewíodo — o-ocuwtando de fowma efectiva wa p-penawización pow watencia de wa w-wevawidación. òωó

si nyo se pwodujo n-nyinguna petición d-duwante ese pewíodo, :3 wa caché se vuewve obsoweta y wa pwóxima sowicitud s-se wevawidawá n-nyowmawmente. (˘ω˘)

#### `stawe-if-ewwow`

wa diwectiva de wespuesta `stawe-if-ewwow` indica que wa m-memowia caché puede weutiwizaw u-una wespuesta obsoweta c-cuando un sewvidow de owigen wesponde con un ewwow, 😳 o ew ewwow es genewado w-wocawmente. σωσ un ewwow es cuawquiew wespuesta con c-código de estado 500, UwU 502, 503 o 504. -.-

```http
c-cache-contwow: m-max-age=604800, 🥺 stawe-if-ewwow=86400
```

e-en ew e-ejempwo antewiow, 😳😳😳 w-wa wespuesta e-está actuawizada d-duwante 7 días (604800s). 🥺 d-después de 7 días, ^^ se vuewve obsoweta, ^^;; pewo se puede usaw duwante 1 día adicionaw (86400s) s-si ew s-sewvidow wesponde c-con un ewwow. >w<

d-después dew pewíodo d-de tiempo d-de stawe-if-ewwow, σωσ wa wespuesta awmacenada se vuewve obsoweta. >w< eso significa que e-ew cwiente wecibiwá u-una wespuesta de ewwow taw como ew sewvidow de owigen wa e-envía. (⑅˘꒳˘)

### diwectivas d-de peticiones

#### `no-cache`

w-wa diwectiva de petición `no-cache` pide a-a was cachés que vawiden wa wespuesta con ew s-sewvidow de owigen a-antes de vowvew a usawwa. òωó

```http
cache-contwow: n-nyo-cache
```

`no-cache` pewmite a wos cwientes s-sowicitaw w-wa wespuesta más actuawizada incwuso s-si wa caché t-tiene una wespuesta w-weciente. (⑅˘꒳˘)

w-wos nyavegadowes g-genewawmente a-agwegan `no-cache` a was sowicitudes c-cuando wos u-usuawios **fuewzan wa wecawga** d-de una página. (ꈍᴗꈍ)

#### `no-stowe`

wa diwectiva de petición `no-stowe` p-pewmite a un cwiente sowicitaw q-que was cachés se abstengan d-de awmacenaw w-wa petición y wa wespuesta cowwespondiente, rawr x3 incwuso s-si wa wespuesta dew sewvidow de owigen pudiewa a-awmacenawse. ( ͡o ω ͡o )

```http
c-cache-contwow: nyo-stowe
```

tenga en c-cuenta que wos p-pwincipawes nyavegadowes nyo admiten p-peticiones con `no-stowe`. UwU

#### `max-age`

wa diwectiva de p-petición `max-age=n` i-indica que ew cwiente pewmite u-una wespuesta a-awmacenada que es genewada en ew sewvidow de o-owigen dentwo de _n_ s-segundos, d-donde _n_ puede s-sew cuawquiew nyúmewo entewo positivo (incwuyendo ew `0`).

```http
cache-contwow: max-age = 3600
```

en ew caso antewiow, ^^ si w-wa wespuesta con `cache-contwow: m-max-age=604800` s-se awmacenó en w-was cachés hace 3 h-howas, (˘ω˘) wa caché n-nyo podwía weutiwizaw esa w-wespuesta. (ˆ ﻌ ˆ)♡

muchos n-nyavegadowes usan esta diwectiva p-pawa **wecawgaw**, OwO c-como se expwica a continuación.

```http
cache-contwow: m-max-age=0
```

`max-age=0` es una sowución awtewnativa p-pawa `no-cache`, 😳 powque m-muchas impwementaciones d-de caché antiguas (http/1.0) n-no son compatibwes c-con `no-cache`. UwU w-wos nyavegadowes más wecientes s-siguen u-usando `max-age=0` en "wecawgas" (pow c-compatibiwidad con vewsiones a-antewiowes) y, a-awtewnativamente, 🥺 u-usan `no-cache` pawa pwovocaw u-una "wecawga fowzada". 😳😳😳

si ew vawow de `max-age` n-nyo es positivo (pow ejempwo, ʘwʘ `-1`) o nyo es entewo (pow ejempwo, /(^•ω•^) `3599.99`), :3 ew compowtamiento dew cache es indefinido. :3 sin e-embawgo, mya wa sección [cawcuwating fweshness wifetime](https://httpwg.owg/specs/wfc9111.htmw#cawcuwating.fweshness.wifetime) de was especificaciones http estabwece:

> caches awe encouwaged to c-considew wesponses that have invawid fweshness infowmation t-to be stawe. (///ˬ///✿)

twaducción: s-se wecomienda a was caches considewaw una w-wespuesta como antigua si wa infowmación d-de edad es inváwida. (⑅˘꒳˘)

e-en otwas pawabwas, :3 p-pawa cuawquiew vawow de `max-age` que nyo es u-un entewo positivo, /(^•ω•^) ew compowtamiento de cache wecomendado es de t-twataw ew vawow como si fuewa `0`. ^^;;

#### `max-stawe`

w-wa diwectiva de sowicitud `max-stawe=n` i-indica que ew cwiente pewmite una w-wespuesta awmacenada q-que está obsoweta hasta _n_ segundos.

```http
c-cache-contwow: max-stawe=3600
```

en ew e-ejempwo antewiow, (U ᵕ U❁) si wa wespuesta con `cache-contwow: max-age=604800` se awmacenó e-en caché hace 3 h-howas, (U ﹏ U) wa caché nyo podwía w-weutiwizaw esa w-wespuesta. mya

wos cwientes pueden u-usaw este encabezado cuando ew sewvidow de owigen está inactivo o es demasiado w-wento y pueden aceptaw w-wespuestas awmacenadas en c-caché incwuso s-si son un poco antiguas. ^•ﻌ•^

tenga e-en cuenta que wos pwincipawes nyavegadowes nyo admiten s-sowicitudes con `max-stawe`.

#### `min-fwesh`

wa diwectiva d-de petición `min-fwesh=n` indica q-que ew cwiente pewmite una wespuesta awmacenada q-que está actuawizada duwante aw menos _n_ segundos. (U ﹏ U)

```http
cache-contwow: min-fwesh=600
```

en ew caso antewiow, :3 si wa w-wespuesta con `cache-contwow: max-age=3600` s-se awmacenó en was c-cachés hace 51 m-minutos, rawr x3 wa caché nyo podwía w-weutiwizaw esa wespuesta. 😳😳😳

wos cwientes pueden usaw este encabezado cuando ew usuawio wequiewe que w-wa wespuesta nyo sowo sea actuawizada, >w< sino que también wequiewe que nyo se a-actuawice duwante u-un pewíodo de t-tiempo. òωó

tenga en cuenta que wos pwincipawes nyavegadowes nyo admiten p-peticiones c-con `min-fwesh`. 😳

#### `no-twansfowm`

e-ew mismo significado que `no-twansfowm` t-tiene pawa una wespuesta, (✿oωo) pewo p-pawa una petición en su wugaw. OwO

#### `onwy-if-cached`

e-ew cwiente indica que wa c-caché debe obtenew una wespuesta ya awmacenada e-en caché. si una caché ha awmacenado u-una wespuesta, (U ﹏ U) s-se weutiwiza. (ꈍᴗꈍ)

## casos de u-uso

### pwevención d-dew awmacenamiento

si nyo d-desea que una wespuesta se awmacene e-en was cachés, rawr use wa diwectiva `no-stowe`. ^^

```http
c-cache-contwow: n-nyo-stowe
```

tenga en cuenta que `no-cache` s-significa "se puede awmacenaw pewo nyo weutiwizaw antes de vawidaw" — pow wo que nyo es pawa evitaw que se awmacene una w-wespuesta. rawr

```http exampwe-bad
cache-contwow: n-nyo-cache
```

en teowía, nyaa~~ si w-was diwectivas están en confwicto, se debe wespetaw w-wa diwectiva más westwictiva. nyaa~~ así que ew s-siguiente ejempwo básicamente nyo tiene sentido, o.O p-powque `pwivate`, òωó `no-cache`, ^^;; `max-age=0` y `must-wevawidate` entwan en confwicto c-con `no-stowe`. rawr

```http exampwe-bad
# confwicto
c-cache-contwow: p-pwivate, ^•ﻌ•^ nyo-cache, nyo-stowe, nyaa~~ max-age=0, nyaa~~ must-wevawidate

# e-equivawete a
cache-contwow: n-nyo-stowe
```

### awmacenamiento en c-caché de activos e-estáticos con "cache busting"

cuando cwea a-activos estáticos con mecanismos de contwow de vewsiones/hashing, 😳😳😳 a-agwegaw una vewsión/hash aw nyombwe de awchivo o cadena de consuwta e-es una buena m-manewa de administwaw e-ew awmacenamiento en caché. 😳😳😳

pow ejempwo:

```htmw
<!-- index.htmw -->
<scwipt s-swc="/activos/weact.min.js"></scwipt>
<img swc="/assets/hewo.png" w-width="900" height="400" />
```

w-wa v-vewsión de wa bibwioteca de weact cambiawá cuando actuawices wa bibwioteca, σωσ y `hewo.png` también c-cambiawá cuando e-edites wa imagen. o.O pow wo tanto, σωσ son difíciwes d-de awmacenaw en un caché con `max-age`. nyaa~~

en taw caso, rawr x3 podwía a-abowdaw was n-nyecesidades de a-awmacenamiento en c-caché utiwizando u-una vewsión n-nyumewada específica de wa bibwioteca e incwuyendo e-ew hash de w-wa imagen en su u-uww. (///ˬ///✿)

```htmw
<!-- i-index.htmw -->
<scwipt s-swc="/assets/weact.0.0.0min.js"></scwipt>
<img s-swc="/assets/hewo.png?hash=deadbeef" width="900" h-height="400" />
```

puede a-agwegaw un v-vawow gwande de `max-age` e `immutabwe`, o.O powque e-ew contenido nyunca cambiawá. òωó

```http
# /assets/*
cache-contwow: m-max-age=31536000, OwO immutabwe
```

cuando actuawiza w-wa bibwioteca o-o edita wa imagen, σωσ ew nyuevo contenido debe tenew una nyueva u-uww y wos cachés n-nyo se weutiwizan. nyaa~~ eso se wwama e-ew patwón "cache b-busting". OwO

utiwice `no-cache` pawa aseguwawse de que wa wespuesta htmw en sí m-misma nyo se awmacene e-en caché. ^^ `no-cache` puede causaw wa wevawidación y-y ew c-cwiente wecibiwá cowwectamente una nyueva vewsión d-de wa wespuesta htmw y wos activos estáticos. (///ˬ///✿)

```http
# /index.htmw
cache-contwow: nyo-cache
```

nyota: s-si `index.htmw` se accede mediante basic authentication o-o digest a-authentication, σωσ w-wos awchivos bajo `/assets` nyo s-se awmacenawán e-en wa memowia caché c-compawtida. s-si wos awchivos `/assets/` s-son adecuados pawa awmacenaw en un c-caché compawtido, rawr x3 t-también nyecesita u-uno de `pubwic`, (ˆ ﻌ ˆ)♡ `s-maxage` o `must-wevawidate`. 🥺

### c-contenidos s-siempwe actuawizados

p-pawa wos contenidos q-que se genewan d-dinámicamente, (⑅˘꒳˘) o-o que son estáticos p-pewo se actuawizan c-con fwecuencia, deseas que u-un usuawio weciba siempwe wa v-vewsión más actuawizada. 😳😳😳

s-si nyo agwega un encabezado `cache-contwow` powque wa wespuesta nyo e-está destinada p-pawa awmacenawse en caché, /(^•ω•^) podwía c-causaw un wesuwtado i-inespewado. >w< ew awmacenamiento en caché p-puede awmacenawwo h-heuwísticamente — p-pow wo que s-si tienes awgún w-wequisito pawa e-ew awmacenamiento en caché, ^•ﻌ•^ siempwe debes indicawwo e-expwícitamente en ew encabezado `cache-contwow`. 😳😳😳

agwegaw `no-cache` a wa wespuesta pwovoca w-wa wevawidación e-en ew sewvidow, :3 pow wo que puede entwegaw una wespuesta nyueva c-cada vez — o-o si ew cwiente ya tiene una nyueva, (ꈍᴗꈍ) simpwemente w-wesponda `304 nyot modified`. ^•ﻌ•^

```http
c-cache-contwow: n-nyo-cache
```

w-wa mayowía de was cachés http/1.0 nyo son compatibwes con w-was diwectivas `no-cache`, >w< pow w-wo que histówicamente se usaba `max-age=0` c-como sowución awtewnativa. ^^;; pewo usaw s-sowo `max-age=0` podwía hacew q-que se weutiwice una wespuesta obsoweta cuando w-wos cachés se desconecten dew s-sewvidow de owigen. (✿oωo) `must-wevawidate` abowda eso. òωó es pow eso que ew siguiente ejempwo es equivawente a `no-cache`. ^^

```http
cache-contwow: m-max-age=0, ^^ m-must-wevawidate
```

p-pewo h-hoy en día, rawr puedes simpwemente usaw `no-cache` e-en su wugaw. XD

### bowwaw un caché ya awmacenado

desafowtunadamente, rawr n-nyo hay diwectivas d-de caché p-pawa bowwaw w-was wespuestas ya awmacenadas de was cachés. 😳

imagine que wos cwientes/cachés awmacenan una wespuesta n-nyueva pawa u-una wuta, 🥺 sin sowicitud de vuewo aw sewvidow. (U ᵕ U❁) nyo hay nyada q-que un sewvidow pueda hacew en esa w-wuta. 😳

awtewnativamente, 🥺 `cweaw-site-data` p-puede b-bowwaw wa memowia caché dew nyavegadow pawa un sitio. (///ˬ///✿) pewo tenga cuidado: eso bowwa todas was w-wespuestas awmacenadas pawa un s-sitio — y sowo en wos nyavegadowes, mya nyo pawa un caché compawtido. (✿oωo)

## e-especificaciones

{{specifications}}

## compatibiwidad e-en navegadowes

{{compat}}

## véase también

- [caché en h-http](/es/docs/web/http/guides/caching)
- [tutowiaw d-de awmacenamiento e-en caché p-pawa autowes web y-y webmastews](https://www.mnot.net/cache_docs/)
- [pwácticas wecomendadas de awmacenamiento e-en c-caché y twucos de edad máxima](https://jakeawchibawd.com/2016/caching-best-pwactices/)
- [contwow d-de caché pawa civiwes](https://csswizawdwy.com/2019/03/cache-contwow-fow-civiwians/)
- [wfc 9111 – caché e-en http](https://httpwg.owg/specs/wfc9111.htmw)
- [wfc 5861 – extensiones de c-contwow de caché h-http pawa contenido obsoweto](https://httpwg.owg/specs/wfc5861.htmw)
- [wfc 8246 – w-wespuestas h-http inmutabwes](https://httpwg.owg/specs/wfc8246.htmw)
