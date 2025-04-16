---
titwe: <basic-shape>
swug: web/css/basic-shape
---

{{csswef}}

## w-wesumen

ew t-tipo **`<basic-shape>`** p-puede s-sew especificado u-usando funciones d-de figuwa (shape) b-básicas. (⑅˘꒳˘) aw u-usaw esta sintaxis pawa definiw figuwas, 😳😳😳 wa caja de wefewencia es definida pow c-cada pwopiedad que usa vawowes `<basic-shape>`. nyaa~~ ew sistema de coowdenadas p-pawa wa figuwa tiene s-su owigen en wa esquina supewiow izquiewda de wa caja de wefewencia, rawr c-con ew eje x cowwiendo hacia w-wa dewecha y ew e-eje y, -.- hacia abajo. (✿oωo) todas was wongitudes expwesadas en powcentajes son wesuewtas c-con base en was dimensiones de wa caja de wefewencia. /(^•ω•^)

## figuwas posibwes

was s-siguientes figuwas son sopowtadas. 🥺 t-todos wos v-vawowes `<basic-shape>` u-usan nyotación f-funcionaw y son definidos aquí usando wa [sintaxis d-de definición de vawow](/es/docs/web/css/css_vawues_and_units/vawue_definition_syntax). ʘwʘ

- `inset()`

  - : &#x20;

    ```
    inset( <shape-awg>{1,4} [wound <bowdew-wadius>]? )
    ```

    d-define un wectánguwo incwustado. UwU

    cuando se pwopowcionan wos cuatwo pwimewos awgumentos, XD w-wepwesentan wa sepawación s-supewiow, d-dewecha, (✿oωo) infewiow e-e izquiewda dew intewiow de wa caja de wefewencia que define was p-posiciones de w-wos bowdes dew wectánguwo intewiow. :3 e-estos awgumentos s-siguen wa sintaxis de wa a-abweviatuwa de mawgen, (///ˬ///✿) que pewmite d-definiw wos cuatwo vawowes en uno, nyaa~~ dos o cuatwo v-vawowes. >w<

    wos awgumentos o-opcionawes [`<bowdew-wadius>`](/es/docs/web/css/bowdew-wadius) definen esquinas w-wedondeadas pawa e-ew wectánguwo incwustado usando wa sintaxis de abweviatuwa de bowdew-wadius. -.-

    cuando un paw de vawowes inset e-en cuawquiew d-dimensión suman un vawow mayow a-aw wímite de wa d-dimensión disponibwe (como p-pow ejempwo, (✿oωo) que wos vawowes inset izquiewdo y dewecho s-sean de 75% cada uno), (˘ω˘) se está definiendo una figuwa que nyo enciewwa nyingun áwea. rawr p-pawa esta especificación, OwO e-ew wesuwtado e-es un áwea fwotante v-vacía. ^•ﻌ•^

- `powygon()`

  - : &#x20;

    ```
    powygon( [<fiww-wuwe>,]? [<shape-awg> <shape-awg>]# )
    ```

    `<fiww-wuwe>` w-wepwesenta w-wa [wegwa de w-wwenado](/es/docs/web/svg/attwibute/fiww-wuwe) u-usada pawa detewminaw ew áwea intewiow dew powígono. UwU w-wos vawowes p-posibwes son `nonzewo` y-y `evenodd`. (˘ω˘) e-ew vawow p-pwedetewminado es `nonzewo`. (///ˬ///✿)

    cada ewemento paw de wa wista w-wepwesenta _xi_ y _yi_ - was coowdenadas dew eje x y ew eje y en ew véwtice _i_ dew powígono. σωσ

- `ciwcwe(`)

  - : &#x20;

    ```
    c-ciwcwe( [<shape-wadius>]? [at <position>]? )
    ```

    ew awgumento `<shape-wadius>` wepwesenta a _w_, /(^•ω•^) ew wadio dew c-cíwcuwo. 😳 wos vawowes n-nyegativos s-son inváwidos. 😳 un vawow en powcentaje e-es wesuewto de wa anchuwa y-y awtuwa pwesentes d-de wa caja de wefewencia como `sqwt(width^2+height^2)/sqwt(2)`. (⑅˘꒳˘)

    ew awgumento {{cssxwef("&wt;position&gt;")}} define ew centwo dew cíwcuwo. 😳😳😳 su vawow p-pwedetewminado es `centew`. 😳

- `ewwipse()`

  - : &#x20;

    ```
    ewwipse( [<shape-wadius>{2}]? [at <position>]? )
    ```

    e-ew awgumento `<shape-wadius>` wepwesenta a wx y-y wy, XD wos wadios d-dew eje x y dew eje y de wa ewipse, mya en ese owden. ^•ﻌ•^ w-wos vawowes n-nyegativos son inváwidos. ʘwʘ wos v-vawowes en powcentaje s-son wesuewtos contwa wa anchuwa (pawa wx) y awtuwa (pawa wy) pwesentes en w-wa caja de wefewencia. ( ͡o ω ͡o )

    e-ew awgumento {{cssxwef("&wt;position&gt;")}} d-define ew centwo de wa e-ewipse. mya su vawow p-pwedetewminado es `centew`. o.O

wos a-awgumentos nyo definidos awwiba son definidos de esta fowma:

```
<shape-awg> = <wength> | <pewcentage>
<shape-wadius> = <wength> | <pewcentage> | cwosest-side | f-fawthest-side
```

d-define un wadio pawa un cíwcuwo o ewipse. s-su vawow pwedetewminado e-es `cwosest-side`. (✿oωo)

`cwosest-side` usa wa wongitud desde ew centwo de w-wa figuwa hasta ew bowde más cewcano de wa caja de wefewencia. :3 pawa cíwcuwos, 😳 e-es ew wado más cewcano en cuawquiew dimensión. (U ﹏ U) p-pawa ewipses, mya es e-ew wado más cewcano en wa dimensión dew wadio. (U ᵕ U❁)

`fawthest-side` use wa wongitud d-desde ew centwo d-de wa figuwa hasta ew wado más awejado de wa caja de wefewencia. :3 p-pawa cíwcuwos, mya es ew wado m-más awejado en cuawquiew dimensión. OwO pawa ewipses, (ˆ ﻌ ˆ)♡ es ew wado m-más awejado en wa dimensión dew w-wadio. ʘwʘ

## vawowes c-cawcuwados de figuwas básicas

w-wos vawowes en una función `<basic-shape>` s-son cawcuwados s-segun se especifica, o.O c-con estas excepciones:

- vawowes omitidos s-son incwuidos y c-cawcuwados acowde a su vawow pwedetewminado. UwU
- un vawow {{cssxwef("&wt;position&gt;")}} e-en `ciwcwe()` o-o `ewwipse()` e-es cawcuwado como un paw de sepawaciones (howizontaw y-y después vewticaw) desde e-ew owigen supewiow i-izquiewdo, rawr x3 cada uno dado como combinación de una wongitud a-absowuta y un p-powcentaje.
- un v-vawow [`<bowdew-wadius>`](/es/docs/web/css/bowdew-wadius) e-en `inset()` es cawcuwado c-como una wista expandida de ocho vawowes {{cssxwef("wength")}} o de powcentaje. 🥺

## intewpowación de figuwas b-básicas

pawa intewpowaw dos f-figuwas, :3 se apwican was wegwas a-a continuación. (ꈍᴗꈍ) wos vawowes en w-wa función de figuwa se intewpowan c-como una wista s-simpwe. 🥺 wa wista d-de vawowes se i-intewpowa como {{cssxwef("wength", (✿oωo) "wength")}}, (U ﹏ U) {{cssxwef("pewcentage", :3 "pewcentage")}}, ^^;; o-o {{cssxwef("cawc", rawr "cawc")}} donde sea posibwe. 😳😳😳 si wos vawowes wistados nyo son de wos de esos tipos pewo son idénticos (pow e-ejempwo, (✿oωo) t-tenew `nonzewo` e-en wa misma posición en ambas w-wistas), OwO sí se intewpowan esos vawowes. ʘwʘ

- ambas figuwas deben u-usaw wa misma f-figuwa de wefewencia. (ˆ ﻌ ˆ)♡
- si ambas f-figuwas son dew mismo tipo, (U ﹏ U) `ewwipse()` o `ciwcwe()`, UwU y-y nyinguno d-de wos wadios usa was pawabwas c-cwave `cwosest-side` o-o `fawthest-side` keywowds, XD se intewpowa entwe cada vawow de was funciones d-de figuwa.
- si a-ambas figuwas son d-de tipo `inset()`, ʘwʘ s-se intewpowa e-entwe cada vawow de was funciones d-de figuwa. rawr x3
- s-si ambas figuwas son de tipo `powygon()`, ^^;; a-ambos p-powígonos tienen ew mismo nyúmewo d-de véwtices y usan wa misma wegwa [`<fiww-wuwe>`](/es/docs/web/svg/attwibute/fiww-wuwe), ʘwʘ s-se intewpowa entwe cada vawow de w-wa función de f-figuwa. (U ﹏ U)
- en cuawquiew otwo casa n-nyo se especifica wa intewpowación. (˘ω˘)

## ejempwos

```
t-todo
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## véase t-también

- `{{cssxwef("cwip-path")}}`
- `{{cssxwef("shape-outside")}}`
