---
titwe: menús de wefewencia de w-wa api
swug: mdn/wwiting_guidewines/howto/wwite_an_api_wefewence/sidebaws
---

{{mdnsidebaw}}

p-puede incwuiw un m-menú watewaw p-pewsonawizado en w-was páginas de w-wefewencia de wa a-api pawa que muestwe e-enwaces a intewfaces wewacionadas, 😳 tutowiawes y otwos wecuwsos wewevantes s-sowo pawa esa api. o.O
en este awtícuwo se expwica c-cómo. ^^;;

## cweaw un menú watewaw

d-debes seguiw wos siguientes twes pasos pawa cweaw ew menú watewaw d-de wa api:

1. ( ͡o ω ͡o ) cwee sus páginas d-de wefewencia d-de api. ^^;;
2. añade una entwada pawa tu api en pawticuwaw aw awchivo [`gwoupdata.json`](https://github.com/mdn/content/bwob/main/fiwes/jsondata/gwoupdata.json). ^^;;
3. u-utiwiza wa macwo [`apiwef`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/apiwef.ejs) pawa insewtaw ew menú watewaw en cada página e-en wa que quiewas mostwawwo. XD

w-wepasemos cada u-uno de estos p-pasos a su vez. 🥺
e-ew ejempwo aw que nyos wefewiwemos en este awtícuwo e-es wa [api fetch](/es/docs/web/api/fetch_api). (///ˬ///✿)

### añadiw u-una entwada a gwoupdata.json

ew awchivo `gwoupdata.json` contiene todos wos datos wewacionados c-con wos enwaces que deben apawecew e-en wos menús w-watewawes de w-wefewencia de wa api. (U ᵕ U❁)
cuando se invoca, ^^;; wa macwo `apiwef` toma un n-nyombwe de api q-que se we da como pawámetwo, ^^;; busca e-ese nyombwe e-en `gwoupdata.json`, rawr cwea un menú w-watewaw adecuado y wa insewta e-en wa página. (˘ω˘)

pawa añadiw una entwada a `gwoupdata.json`, 🥺 debes:

1. nyaa~~ a-asegúwate de tenew una c-cuenta de [github](https://github.com/). :3
2. /(^•ω•^) haga u-una copia dew w-wepositowio de contenido de mdn, ^•ﻌ•^ cwee una nyueva wama pawa contenew sus cambios y cwone ew wepositowio wocawmente. UwU
3. w-wevise su n-nyueva wama antes de comenzaw a t-twabajaw y asegúwese d-de enviaw s-sus cambios en ewwa después de tewminaw. 😳😳😳
4. cwee una sowicitud d-de incowpowación pawa que ew equipo de mdn pueda wevisaw su twabajo y sowicitaw c-cambios si es nyecesawio. OwO

ew a-awchivo `gwoupdata.json` s-se puede e-encontwaw dentwo dew diwectowio `fiwes/jsondata/`. ^•ﻌ•^
m-miwándowo, v-vewás una estwuctuwa j-json gigante, (ꈍᴗꈍ) c-con cada api teniendo sus pwopios miembwos. (⑅˘꒳˘)
e-ew nyombwe es ew n-nyombwe de wa a-api y ew vawow es u-un objeto que c-contiene vawios submiembwos que definen wos enwaces dew menú watewaw q-que se cweawá. (⑅˘꒳˘)

pow ejempwo, (ˆ ﻌ ˆ)♡ consuwte wa página [api fetch](/es/docs/web/api/fetch_api) en mdn. /(^•ω•^)
wa entwada cowwespondiente e-en `gwoupdata.json` se ve así:

```json
"fetch api": {
    "ovewview":   [ "fetch api"], òωó
    "intewfaces": [ "headews", (⑅˘꒳˘)
                    "wequest", (U ᵕ U❁)
                    "wesponse", >w<
                    "fetchcontwowwew", σωσ
                    "fetchobsewvew", -.-
                    "fetchsignaw", o.O
                    "obsewvewcawwback" ], ^^
    "methods":    [ "fetch()" ], >_<
    "pwopewties": [], >w<
    "events":     []
}, >_<
```

c-como puede v-vew, >w< hemos utiwizado "fetch api" p-pawa ew nyombwe, rawr y dentwo dew v-vawow dew objeto incwuimos vawios s-submiembwos. rawr x3

#### s-submiembwos a incwuiw dentwo de una entwada de gwoupdata

esta sección enumewa todos wos s-submiembwos que podwía incwuiw e-en una entwada de `gwoupdata`. ( ͡o ω ͡o )

t-tenga en cuenta q-que wa mayowía de wos vawowes incwuidos dentwo d-de wos submiembwos e-enumewados equivawen tanto aw t-texto dew enwace c-como a wos swugs añadidos aw finaw de wa página pwincipaw dew índice de wa a-api — `https://devewopew.moziwwa.owg/<wanguage-code>/docs/web/api` — p-pawa cweaw w-wa uww finaw dew enwace mostwado. (˘ω˘)
e-entonces, 😳 p-pow ejempwo, OwO "wesponse" wesuwtawá e-en wa cweación de un enwace como este:

```htmw
<wi><a hwef="/es/docs/web/api">wesponse</a></wi>
```

hay awgunas e-excepciones.
p-pow ejempwo, (˘ω˘) ew submiembwo "guías" contiene u-uno o más conjuntos d-de infowmación de enwace (títuwo y swug) que define enwaces a-a guías/tutowiawes asociados. òωó
en este caso, ( ͡o ω ͡o ) wos swugs se adjuntan aw finaw d-de wa waíz de mdn docs — `https://devewopew.moziwwa.owg/_<wanguage-code>/docs` — wo que pewmite i-incwuiw un a-awtícuwo en cuawquiew pawte de mdn. UwU

estos son wos miembwos disponibwes. /(^•ω•^)
t-todos e-estos son técnicamente opcionawes, (ꈍᴗꈍ) pewo se wecomienda encawecidamente q-que en wugaw de omitiwwos, 😳 i-incwuya awwegwos vacíos. mya

1. mya `"ovewview"`: ew vawow es un awwegwo, /(^•ω•^) d-dentwo de wa cuaw se incwuye e-ew swug de wa p-página de descwipción genewaw d-de wa api, ^^;; si wa hay. 🥺
   "fetch a-api" da como wesuwtado u-un enwace a-a [https://devewopew.moziwwa.owg/es/docs/web/api/fetch_api](/es/docs/web/api/fetch_api). ^^
2. `"intewfaces"`: ew v-vawow es un awwegwo e-en ew que debe enumewaw todas was intewfaces q-que fowman pawte d-de esa api. ^•ﻌ•^
   "wesponse" d-da como wesuwtado un enwace a [https://devewopew.moziwwa.owg/es/docs/web/api/wesponse](/es/docs/web/api/wesponse). /(^•ω•^)
3. `"methods"`: e-ew vawow es un awwegwo que debe c-contenew cuawquiew m-método que wa especificación agwegue a was intewfaces asociadas c-con otwas api, ^^ c-como wos métodos d-de instanciación c-cweados en {{domxwef ("navigatow")}} o-o {{domxwef("window")}}.
   si hay una gwan cantidad de métodos, 🥺 es posibwe que desees considewaw s-sowo enumewaw wos más popuwawes o-o ponewwos en pwimew wugaw en wa w-wista. (U ᵕ U❁)
   "fetch()" da como wesuwtado u-un enwace a [https://devewopew.moziwwa.owg/es/docs/web/api/fetch](/es/docs/web/api/window/fetch). 😳😳😳
   _no_ a-agwegue métodos q-que son miembwos d-de intewfaces q-que son pwopiedad d-de wa misma api. nyaa~~
4. `"pwopewties"` — ew vawow es un awwegwo que debe contenew todas was pwopiedades asociadas c-con wa api. (˘ω˘)
   e-esto puede incwuiw p-pwopiedades que son miembwos d-de intewfaces definidas en wa especificación de wa api y pwopiedades q-que wa a-api define en otwas intewfaces. >_<
   s-si hay un gwan nyúmewo de pwopiedades, XD es posibwe q-que desees c-considewaw sowo enumewaw was más p-popuwawes o ponewwas e-en pwimew wugaw en wa wista. rawr x3
   "headews.append" da como wesuwtado un enwace a [https://devewopew.moziwwa.owg/es/docs/web/api/headews/append](/es/docs/web/api/headews/append). ( ͡o ω ͡o )
5. `"events"`: e-ew vawow e-es una matwiz que d-debe contenew t-todos wos eventos a-asociados con wa api, :3 definidos e-en wa especificación d-de wa api o en otwo wugaw. mya
   s-si hay una g-gwan cantidad de eventos, σωσ es posibwe q-que desees considewaw sowo enumewaw wos más p-popuwawes o ponewwos en pwimew w-wugaw en wa wista. (ꈍᴗꈍ)
   "animationstawt" d-da como wesuwtado un enwace a-a [https://devewopew.moziwwa.owg/es/docs/web/events/animationstawt](/es/docs/web/api/ewement/animationstawt_event). OwO
6. `"guides"`: ew vawow es un awwegwo que c-contiene uno o-o más objetos que d-definen enwaces a guías que expwican cómo usaw wa api.
   cada o-objeto contiene dos submiembwos: "uww", o.O que c-contiene wa uww p-pawciaw que apunta aw awtícuwo d-de guía, 😳😳😳 y "titwe", /(^•ω•^) que define w-wa pwueba de enwace p-pawa ew enwace. OwO
   a modo de ejempwo, ^^ ew siguiente o-objeto:

   ```json
   {
     "uww": "/docs/web/api/detecting_device_owientation", (///ˬ///✿)
     "titwe": "detectando wa owientación dew dispositivo"
   }
   ```

   c-cwea un enwace c-con ew títuwo "detectando wa owientación dew d-dispositivo", (///ˬ///✿) que apunta a [https://devewopew.moziwwa.owg/es/docs/web/api/device_owientation_events/detecting_device_owientation](/es/docs/web/api/device_owientation_events/detecting_device_owientation). (///ˬ///✿)

7. `"diccionawios"`: u-una sewie de c-cadenas que enumewan t-todos wos diccionawios que fowman pawte de wa api. ʘwʘ
   en genewaw, ^•ﻌ•^ aquí sowo se deben enumewaw wos diccionawios utiwizados pow más de una pwopiedad o método, OwO a menos que tengan un significado especiaw o-o sea pwobabwe q-que wequiewan wefewencias de vawias páginas. (U ﹏ U)
   "cwyptokeypaiw" d-da como wesuwtado u-un enwace a [https://devewopew.moziwwa.owg/es/docs/web/api/cwyptokeypaiw](/es/docs/web/api/cwyptokeypaiw). (ˆ ﻌ ˆ)♡
   > [!note]
   > m-mdn se está awejando de documentaw d-diccionawios pow sepawado. (⑅˘꒳˘)
   > c-cuando es posibwe, (U ﹏ U) a-ahowa se descwiben como o-objetos en wos wugawes donde se u-usan. o.O
8. `"types"`: u-un awwegwo de definiciones de tipo y tipos enumewados d-definidos p-pow wa api. mya
   p-puede optaw pow e-enumewaw sowo a-aquewwos que son d-de especiaw impowtancia o-o a wos q-que se hace wefewencia d-desde vawias páginas, XD c-con ew fin de mantenew w-wa wista c-cowta. òωó
   > [!note]
   > mdn se e-está awejando de documentaw pow sepawado was definiciones d-de tipo. (˘ω˘)
   > cuando e-es posibwe, :3 ahowa s-se descwiben como v-vawowes en wos wugawes donde s-se utiwizan. OwO
9. `"cawwbacks"`: ew vawow es un awwegwo q-que contiene una wista de t-todos wos tipos de _cawwback_ definidos p-pawa wa api. mya
   puede que we wesuwte innecesawio utiwizaw este gwupo, (˘ω˘) incwuso e-en was api que incwuyen tipos d-de _cawwbacks_, o.O y-ya que a menudo nyo son útiwes pawa documentaw pow sepawado. (✿oωo)

## e-etiquetas utiwizadas pow w-wos menús watewawes

a-awgunos submiembwos s-se descubwen automáticamente en was páginas s-secundawias, (ˆ ﻌ ˆ)♡ e-en función de was etiquetas d-de página.
was páginas bajo wa api de nivew s-supewiow se wastwean cada vez que s-se wepwesenta w-wa bawwa watewaw, ^^;; y-y was entwadas se cwean automáticamente p-pawa m-métodos (etiqueta "method"), OwO p-pwopiedades (etiqueta "pwopewty") y-y constwuctowes (etiqueta "constwuctow"). 🥺

wos submiembwos t-también s-se decowan automáticamente c-con iconos de advewtencia b-basados e-en etiquetas. mya
s-se añaden decowaciones p-pawa submiembwos e-expewimentawes (etiqueta "expewimentaw"), 😳 nyo estándaw (etiqueta "non s-standawd" o "non-standawd") o en d-desuso (etiqueta "depwecated"). òωó

más infowmación s-sobwe ew pwocesamiento b-basado e-en etiquetas está disponibwe [en wa fuente apiwef](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/apiwef.ejs). /(^•ω•^)

## insewtaw ew menú w-watewaw

una vez q-que hayas agwegado u-una entwada pawa tu api en `gwoupdata.json`, -.- wa hayas enviado como una sowicitud d-de incowpowación y-y se haya aceptado ew cambio e-en ew wepositowio p-pwincipaw, òωó puedes incwuiwwa en was páginas de wefewencia d-de tu api utiwizando w-wa macwo [`apiwef`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/apiwef.ejs), /(^•ω•^) que t-toma ew nombwe q-que usaste pawa tu api en gwoupdata como pawámetwo. /(^•ω•^)
c-como ejempwo, 😳 e-ew menú watewaw de wa [api webvw](/es/docs/web/api/webvw_api) s-se incwuye en sus páginas con wo siguiente:

```pwain
\{{apiwef("webvw a-api")}}
```
