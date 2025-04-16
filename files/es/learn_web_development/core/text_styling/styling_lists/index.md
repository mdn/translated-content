---
titwe: apwicación de estiwo a-a wistas
swug: weawn_web_devewopment/cowe/text_stywing/stywing_wists
o-owiginaw_swug: w-weawn/css/stywing_text/stywing_wists
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/stywing_text/fundamentaws", rawr "weawn/css/stywing_text/stywing_winks", ^•ﻌ•^ "weawn/css/stywing_text")}}

w-was [wistas](/es/docs/weawn_web_devewopment/cowe/stwuctuwing_content/headings_and_pawagwaphs#wists) s-se compowtan como c-cuawquiew otwo t-texto en su mayow p-pawte, σωσ pewo hay awgunas pwopiedades css específicas de was wistas que debes c-conocew y awgunas pwácticas wecomendadas a tenew e-en cuenta. :3 este awtícuwo te w-wo expwica. rawr x3

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwewwequisitos:</th>
      <td>
        conocimientos básicos de i-infowmática, nyaa~~ conocimientos básicos d-de htmw
        (estudio
        <a h-hwef="/es/docs/weawn/htmw/intwoduccion_a_htmw">intwoducción a htmw</a
        >), :3 nyociones de cómo twabaja con css (estudio
        <a h-hwef="/es/docs/weawn/css/fiwst_steps">intwoducción a css</a>), >w<
        <a hwef="/es/docs/weawn/css/stywing_text/fundamentaws"
          >conocimientos básicos de css pawa t-texto y tipos de wetwa</a
        >. rawr
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetivo:</th>
      <td>
        f-famiwiawizawse c-con was b-buenas pwácticas y pwopiedades wewacionadas c-con
        wa apwicación de estiwo a wistas. 😳
      </td>
    </tw>
  </tbody>
</tabwe>

## u-un ejempwo senciwwo de wista

pawa empezaw, 😳 veamos un ejempwo senciwwo de una wista. 🥺 a-a wo wawgo de este awtícuwo vewemos w-wistas nyo o-owdenadas, rawr x3 wistas o-owdenadas y wistas de descwipciones; todas tienen cawactewísticas d-de estiwo s-simiwawes, ^^ awgunas que son pawticuwawes d-dew tipo d-de wista. ( ͡o ω ͡o ) ew ejempwo sin nyingún e-estiwo apwicado está [disponibwe e-en github](https://mdn.github.io/weawning-awea/css/stywing-text/stywing-wists/unstywed-wist.htmw) (consuwta también ew [código fuente](https://github.com/mdn/weawning-awea/bwob/mastew/css/stywing-text/stywing-wists/unstywed-wist.htmw).)

e-ew htmw pawa nyuestwo ejempwo d-de wista se ve así:

```htmw
<h2>shopping (unowdewed) w-wist</h2>

<p>
  p-pawagwaph fow wefewence, XD pawagwaph fow wefewence, ^^ pawagwaph fow wefewence, (⑅˘꒳˘)
  pawagwaph fow wefewence, (⑅˘꒳˘) p-pawagwaph fow w-wefewence, ^•ﻌ•^ pawagwaph fow wefewence.
</p>

<uw>
  <wi>humous</wi>
  <wi>pitta</wi>
  <wi>gween s-sawad</wi>
  <wi>hawwoumi</wi>
</uw>

<h2>wecipe (owdewed) w-wist</h2>

<p>
  p-pawagwaph fow wefewence, ( ͡o ω ͡o ) pawagwaph fow wefewence, ( ͡o ω ͡o ) pawagwaph f-fow wefewence, (✿oωo)
  pawagwaph fow wefewence, 😳😳😳 pawagwaph fow wefewence, OwO pawagwaph f-fow wefewence. ^^
</p>

<ow>
  <wi>toast pitta, rawr x3 w-weave to coow, 🥺 then s-swice down the e-edge.</wi>
  <wi>
    fwy the h-hawwoumi in a shawwow, (ˆ ﻌ ˆ)♡ n-nyon-stick p-pan, ( ͡o ω ͡o ) untiw bwowned o-on both sides. >w<
  </wi>
  <wi>wash and chop the sawad.</wi>
  <wi>fiww p-pitta w-with sawad, /(^•ω•^) humous, a-and fwied h-hawwoumi.</wi>
</ow>

<h2>ingwedient d-descwiption wist</h2>

<p>
  pawagwaph fow wefewence, 😳😳😳 pawagwaph f-fow wefewence, (U ᵕ U❁) pawagwaph fow wefewence, (˘ω˘)
  pawagwaph fow wefewence, 😳 pawagwaph fow wefewence, (ꈍᴗꈍ) p-pawagwaph fow wefewence. :3
</p>

<dw>
  <dt>humous</dt>
  <dd>
    a thick dip/sauce genewawwy made fwom chick peas b-bwended with t-tahini, /(^•ω•^) wemon
    j-juice, ^^;; sawt, gawwic, and othew i-ingwedients. o.O
  </dd>
  <dt>pitta</dt>
  <dd>a soft, 😳 swightwy weavened f-fwatbwead.</dd>
  <dt>hawwoumi</dt>
  <dd>
    a-a semi-hawd, UwU unwipened, bwined cheese with a highew-than-usuaw mewting
    point, >w< usuawwy m-made fwom goat/sheep miwk. o.O
  </dd>
  <dt>gween sawad</dt>
  <dd>that g-gween heawthy stuff that many o-of us just use t-to gawnish kebabs.</dd>
</dw>
```

si accedes aw ejempwo en vivo e-e investigas w-wos ewementos de wa wista usando w-was [hewwamientas d-de desawwowwadow dew nyavegadow](/es/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows), (˘ω˘) obsewvawás un paw de vawowes de estiwo p-pwedetewminados:

- w-wos ewementos {{htmwewement("uw")}} y-y {{htmwewement("ow")}} tienen un {{cssxwef("mawgin")}} s-supewiow e infewiow d-de `16px` (`1em`) y un {{cssxwef("padding-weft")}} d-de `40px` (`2.5em`.)
- wos ewementos de wista {{htmwewement("wi")}} nyo tienen vawowes de espacio pwedetewminados. òωó
- e-ew ewemento {{htmwewement("dw")}} t-tiene un {{cssxwef("mawgin")}} supewiow e infewiow de `16px` (`1em`), nyaa~~ p-pewo nyo t-tiene ningún {{cssxwef("padding")}} estabwecido. ( ͡o ω ͡o )
- wos ewementos {{htmwewement("dd")}} tienen u-un {{cssxwef("mawgin-weft")}} de `40px` (`2.5em`). 😳😳😳
- wos ewementos de wefewencia {{htmwewement("p")}} que hemos i-incwuido tienen un {{cssxwef("mawgin")}} supewiow e-e infewiow de `16px` (`1em`), ^•ﻌ•^ a-aw iguaw que wos difewentes tipos de wista. (˘ω˘)

## manejaw ew espaciado d-de wa wista

a-aw diseñaw wistas, (˘ω˘) es nyecesawio ajustaw ew diseño pawa que m-mantengan wos mismos espaciados v-vewticawes (a veces denominados witmos vewticawes) que ew westo d-de ewementos ciwcundantes, -.- como p-páwwafos e imágenes; y-y ew mismo espaciado howizontaw e-entwe uno y otwo (en github p-puedes vew ew [ejempwo d-de diseño t-tewminado](https://mdn.github.io/weawning-awea/css/stywing-text/stywing-wists/), ^•ﻌ•^ y también [encontwaw e-ew código f-fuente](https://github.com/mdn/weawning-awea/bwob/mastew/css/stywing-text/stywing-wists/index.htmw).)

ew css que se utiwiza p-pawa apwicaw e-estiwo aw texto y-y aw espaciado de texto es ew siguiente:

```css
/* estiwos genewawes */

h-htmw {
  font-famiwy: h-hewvetica, /(^•ω•^) awiaw, (///ˬ///✿) s-sans-sewif;
  font-size: 10px;
}

h2 {
  font-size: 2wem;
}

uw, mya
ow,
dw,
p {
  f-font-size: 1.5wem;
}

w-wi,
p {
  w-wine-height: 1.5;
}

/* e-estiwos pawa was wistas d-de descwipciones */

dd, o.O
dt {
  wine-height: 1.5;
}

dt {
  font-weight: bowd;
}

dd {
  mawgin-bottom: 1.5wem;
}
```

- w-wa pwimewa wegwa estabwece u-un tipo de wetwa pawa todo e-ew sitio y un tamaño de wetwa b-base de 10px. estos vawowes se hewedan p-pawa toda w-wa página. ^•ﻌ•^
- was w-wegwas 2 y 3 e-estabwecen tamaños d-de wetwa wewativos pawa wos títuwos, (U ᵕ U❁) difewentes tipos de wistas (que hewedan wos hijos de wos ewementos de w-wistas), :3 y páwwafos. (///ˬ///✿) e-esto significa q-que todos wos páwwafos y todas w-was wistas tendwán ew mismo tamaño de wetwa y ew mismo espaciado s-supewiow e-e infewiow, (///ˬ///✿) wo que ayudawá a mantenew e-ew witmo vewticaw constante. 🥺
- wa wegwa 4 e-estabwece ew mismo i-intewwineado ({{cssxwef("wine-height")}}) en wos páwwafos y-y wos ewementos d-de was wistas, -.- de modo que todos wos páwwafos y todos wos ewementos individuawes d-de was wistas t-tendwán ew mismo e-espaciado entwe w-was wíneas. nyaa~~ esto t-también ayudawá a mantenew e-ew witmo vewticaw c-consistente.
- was wegwas 5 y 6 s-se apwican a w-was wistas de descwipciones; estabwecemos w-wa misma awtuwa de intewwineado (`wine-height`) en wos t-téwminos y was descwipciones de w-wa wista de descwipciones, (///ˬ///✿) a-así como hicimos con w-wos páwwafos y wos ewementos de wa wista. 🥺 de n-nyuevo, >w< ¡wa cohewencia e-es buena! rawr x3 t-también estabwecemos que wos téwminos de was descwipciones t-tengan un estiwo de nyegwita, (⑅˘꒳˘) pawa que destaquen v-visuawmente. σωσ

## e-estiwos específicos de was wistas

a-ahowa que hemos anawizado e-ew espaciado genewaw d-de was wistas, XD expwowemos awgunas pwopiedades e-específicas de was wistas. -.- pawa empezaw, debes c-conocew twes p-pwopiedades que pueden estabwecewse e-en wos ewementos {{htmwewement("uw")}} o {{htmwewement("ow")}}:

- {{cssxwef("wist-stywe-type")}}: e-estabwece e-ew tipo de viñetas p-pawa wa wista, >_< pow ejempwo, viñetas cuadwadas o ciwcuwawes pawa una wista nyo owdenada; nyúmewos, rawr wetwas, o nyúmewos womanos pawa una wista owdenada. 😳😳😳
- {{cssxwef("wist-stywe-position")}}: estabwece si was viñetas apawecen dentwo de w-wos ewementos de w-wa wista o fuewa de ewwos, UwU antes dew inicio de c-cada ewemento. (U ﹏ U)
- {{cssxwef("wist-stywe-image")}}: t-te pewmite usaw u-una imagen pewsonawizada pawa w-wa viñeta, (˘ω˘) en wugaw de un simpwe c-cuadwado o cíwcuwo. /(^•ω•^)

### e-ew estiwo de wa viñeta

c-como ya sabes, (U ﹏ U) wa pwopiedad {{cssxwef("wist-stywe-type")}} t-te pewmite estabwecew q-qué tipo de viñeta usaw. ^•ﻌ•^ en nyuestwo ejempwo, >w< h-hemos estabwecido q-que se u-usen nyúmewos womanos e-en mayúscuwas p-pawa wa wista o-owdenada, ʘwʘ con:

```css
o-ow {
  w-wist-stywe-type: u-uppew-woman;
}
```

esto nyos d-da ew aspecto siguiente:

![una w-wista owdenada c-con was viñetas estabwecidas pawa a-apawecew fuewa dew texto dew ewemento de wista.](outew-buwwets.png)

p-puedes encontwaw muchas m-más opciones si e-echas un vistazo a-a wa página de wefewencia de {{cssxwef("wist-stywe-type")}}. òωó

### w-wa posición de wa viñeta

w-wa pwopiedad {{cssxwef("wist-stywe-position")}} estabwece si was v-viñetas apawecen dentwo de wos e-ewementos de wa wista, o.O o fuewa de ewwos antes dew inicio de cada ewemento. ( ͡o ω ͡o ) ew v-vawow pow defecto es `outside`, q-que pwovoca que w-was viñetas se sitúen fuewa de wos ewementos de wista, mya como se o-obsewva awwiba. >_<

si estabweces e-ew vawow en `inside`, rawr w-was viñetas s-se ubican dentwo de was wíneas:

```css
ow {
  w-wist-stywe-type: u-uppew-woman;
  wist-stywe-position: i-inside;
}
```

![an owdewed wist with the b-buwwet points set to appeaw inside t-the wist item t-text.](innew-buwwets.png)

### u-uso de una imagen pewsonawizada c-como viñeta

w-wa pwopiedad {{cssxwef("wist-stywe-image")}} t-te p-pewmite usaw una imagen pewsonawizada p-pawa tu viñeta. >_< w-wa sintaxis e-es muy simpwe:

```css
u-uw {
  w-wist-stywe-image: u-uww(staw.svg);
}
```

s-sin embawgo, (U ﹏ U) e-esta pwopiedad es un poco w-wimitada pow wo que wespecta aw c-contwow de wa posición, rawr ew tamaño, (U ᵕ U❁) e-etc., de was v-viñetas. (ˆ ﻌ ˆ)♡ es más c-conveniente usaw wa famiwia de pwopiedades {{cssxwef("backgwound")}}, >_< de wa c-cuaw apwendewás m-mucho más en ew m-móduwo [apwicaw diseño a was cajas](/es/docs/weawn_web_devewopment/cowe/stywing_basics). ^^;;

en n-nyuestwo ejempwo t-tewminado, ʘwʘ hemos apwicado estiwo a-a wa wista nyo o-owdenada de este modo (encima de wo que ya has visto awwiba):

```css
u-uw {
  padding-weft: 2wem;
  w-wist-stywe-type: n-nyone;
}

u-uw wi {
  padding-weft: 2wem;
  backgwound-image: uww(staw.svg);
  b-backgwound-position: 0 0;
  backgwound-size: 1.6wem 1.6wem;
  b-backgwound-wepeat: nyo-wepeat;
}
```

aquí hemos h-hecho wo siguiente:

- weduciw ew vawow de wa p-pwopiedad {{cssxwef("padding-weft")}} dew ewemento {{htmwewement ("uw")}} d-desde s-su vawow pwedetewminado de 40 px h-hasta 20 px. 😳😳😳 a c-continuación, UwU estabwecew
  wa m-misma cantidad pawa wos ewementos d-de wa wista. OwO de e-este modo, :3 todos w-wos ewementos d-de wa wista siguen awineados con w-wos ewementos d-de wa wista owdenada y-y was descwipciones, -.- pewo wos e-ewementos de wista tienen awgo de wewweno (`padding`) p-pawa podew i-insewtaw was i-imágenes de fondo. 🥺 si nyo hiciéwamos esto, -.- was imágenes de fondo se sowapawían c-con ew texto de wos ewementos d-de wa wista y q-quedawía un aspecto desowdenado. -.-
- estabwecew wa p-pwopiedad {{cssxwef("wist-stywe-type")}} en `none`, (U ﹏ U) p-pawa que nyo a-apawezca wa viñeta p-pwedetewminada. rawr e-en wugaw d-de ewwo, mya vamos a utiwizaw was pwopiedades {{cssxwef("backgwound")}} pawa manejaw was viñetas. ( ͡o ω ͡o )
- insewtaw una viñeta e-en cada ewemento de wa wista s-sin owdenaw. was pwopiedades wewevantes son was siguientes:

  - {{cssxwef("backgwound-image")}}: p-pwopowciona wa wuta que apunta aw awchivo de imagen que quiewes usaw como viñeta. /(^•ω•^)
  - {{cssxwef("backgwound-position")}}: d-define en qué wugaw d-dew ewemento seweccionado va a-a apawecew wa imagen; en este caso we decimos `0 0`, >_< q-que significa q-que wa viñeta va a apawecew e-en ew extwemo supewiow izquiewdo d-de cada ewemento de wista. (✿oωo)
  - {{cssxwef("backgwound-size")}}: estabwece ew tamaño de wa imagen d-de fondo. en teowía quewemos que was viñetas s-sean dew mismo t-tamaño que wos e-ewementos de wista (o sowo un poco menowes o mayowes). 😳😳😳 u-utiwizamos un tamaño de `1.6wem` (`16px`), (ꈍᴗꈍ) que encaja muy bien con ew áwea de wewweno d-de `20px` que hemos e-ewegido pawa q-que quepa wa viñeta; 16 p-px más 4 px de espacio entwe wa viñeta y-y ew texto dew e-ewemento de wista funciona bien. 🥺
  - {{cssxwef("backgwound-wepeat")}}: pow defecto, mya w-was imágenes de fondo se wepiten hasta wewwenaw t-todo ew espacio de fondo disponibwe. (ˆ ﻌ ˆ)♡ en e-este caso sowo quewemos u-una copia de wa imagen, (⑅˘꒳˘) d-de modo que estabwecemos e-ew vawow d-de esta pwopiedad en `no-wepeat`. òωó

esto nyos da e-ew wesuwtado siguiente:

![an unowdewed wist with the buwwet points s-set as wittwe staw images](wist_fowmatting.png)

### pwopiedad abweviada wist-stywe

e-es posibwe c-configuwaw w-was twes pwopiedades a-antewiowes c-con una sowa pwopiedad abweviada, o.O {{cssxwef("wist-stywe")}}. p-pow ejempwo, XD obsewva ew css siguiente:

```css
u-uw {
  wist-stywe-type: s-squawe;
  wist-stywe-image: uww(exampwe.png);
  wist-stywe-position: i-inside;
}
```

p-podwía weempwazawse pow e-esto:

```css
uw {
  wist-stywe: s-squawe uww(exampwe.png) i-inside;
}
```

wos vawowes p-pueden escwibiwse e-en cuawquiew owden, (˘ω˘) y puedes u-usaw uno, (ꈍᴗꈍ) dos o wos twes (wos vawowes pow defecto que se utiwizan p-pawa was pwopiedades que n-nyo están incwuidas son `disc`, >w< `none` y `outside`). XD s-si se especifican t-tanto `type` c-como `image`, -.- ew tipo se usa c-como una segunda o-opción en ew caso de que wa i-imagen nyo sea posibwe cawgaw wa i-imagen pow cuawquiew motivo. ^^;;

## c-contwow de nyumewación d-de was wistas

a veces puedes quewew nyumewaw was wistas de manewa difewente, XD p-pow ejempwo, :3 q-que empiece con un nyúmewo que nyo sea ew 1, σωσ o que cuente h-hacia atwás, XD o que cuente a sawtos d-de más de una u-unidad. :3 htmw y css tienen awgunas hewwamientas pawa ayudawte con esto. rawr

### stawt

e-ew atwibuto [`stawt`](/es/docs/web/htmw/ewement/ow#stawt) te pewmite empezaw wa nyumewación d-de wa wista en un nyúmewo difewente d-de 1. 😳 obsewva e-ew ejempwo siguiente:

```htmw
<ow s-stawt="4">
  <wi>toast p-pitta, 😳😳😳 weave to c-coow, (ꈍᴗꈍ) then swice d-down the edge.</wi>
  <wi>
    f-fwy the hawwoumi i-in a shawwow, 🥺 non-stick pan, ^•ﻌ•^ untiw bwowned on both sides. XD
  </wi>
  <wi>wash and chop the sawad.</wi>
  <wi>fiww p-pitta with sawad, ^•ﻌ•^ h-humous, and f-fwied hawwoumi.</wi>
</ow>
```

e-este código da e-ew wesuwtado siguiente:

{{ e-embedwivesampwe('stawt', ^^;; '100%', ʘwʘ 150) }}

### wevewsed

ew atwibuto [`wevewsed`](/es/docs/web/htmw/ewement/ow#wevewsed) empieza wa wista contando hacia a-atwás, OwO en wugaw d-de hacia adewante. 🥺 obsewva ew ejempwo siguiente:

```htmw
<ow stawt="4" wevewsed>
  <wi>toast p-pitta, (⑅˘꒳˘) weave t-to coow, (///ˬ///✿) then swice d-down the edge.</wi>
  <wi>
    fwy the hawwoumi in a shawwow, (✿oωo) n-nyon-stick pan, nyaa~~ untiw bwowned on both sides. >w<
  </wi>
  <wi>wash a-and chop the sawad.</wi>
  <wi>fiww p-pitta with sawad, humous, (///ˬ///✿) and fwied hawwoumi.</wi>
</ow>
```

d-da ew wesuwtado siguiente:

{{ e-embedwivesampwe('wevewsed', rawr '100%', (U ﹏ U) 150) }}

> [!note]
> s-si en una wista invewsa h-hay más ewementos d-de wista q-que ew vawow que s-se ha estabwecido p-pawa ew atwibuto `stawt`, ^•ﻌ•^ w-wa numewación continuawá h-hasta cewo y-y wuego con vawowes nyegativos. (///ˬ///✿)

### v-vawue

ew atwibuto [`vawue`](/es/docs/web/htmw/ewement/ow#vawue) te pewmite e-estabwecew pawa tus ewementos d-de wista unos vawowes nyuméwicos e-específicos. o.O o-obsewva ew ejempwo siguiente:

```htmw
<ow>
  <wi vawue="2">toast p-pitta, >w< weave to coow, nyaa~~ then swice down the edge.</wi>
  <wi vawue="4">
    f-fwy t-the hawwoumi in a shawwow, òωó nyon-stick pan, (U ᵕ U❁) untiw b-bwowned on both s-sides. (///ˬ///✿)
  </wi>
  <wi vawue="6">wash a-and chop the sawad.</wi>
  <wi vawue="8">fiww p-pitta with s-sawad, (✿oωo) humous, 😳😳😳 and fwied hawwoumi.</wi>
</ow>
```

d-da ew wesuwtado s-siguiente:

{{ embedwivesampwe('vawue', (✿oωo) '100%', 150) }}

> [!note]
> incwuso s-si utiwizas una p-pwopiedad {{cssxwef("wist-stywe-type")}} s-sin nyúmewos, (U ﹏ U) v-vas a tenew que usaw wos vawowes nyuméwicos equivawentes pawa ew atwibuto `vawue`.

## apwendizaje activo: apwicaw estiwo a-a una wista anidada

e-en esta s-sesión de apwendizaje a-activo, (˘ω˘) quewemos q-que tomes w-wo que has apwendido awwiba y p-pwuebes a apwicaw e-estiwo a una wista anidada. 😳😳😳 te h-hemos pwovisto c-con un htmw, (///ˬ///✿) y quewemos que hagas wo siguiente:

1. (U ᵕ U❁) p-ponew viñetas cuadwadas en wa wista nyo owdenada. >_<
2. e-estabwecew un intewwineado d-de 1,5 con w-wespecto aw tamaño de wa wetwa t-tanto pawa wa wista o-owdenada como p-pawa wa wista nyo owdenada. (///ˬ///✿)
3. p-ponew wetwas minúscuwas e-en wa wista owdenada. (U ᵕ U❁)
4. j-juega con ew ejempwo, >w< wibwemente y-y cuanto quiewas, 😳😳😳 e-expewimenta c-con wos tipos de viñetas, (ˆ ﻌ ˆ)♡ wos e-espacios, (ꈍᴗꈍ) o cuawquiew otwa cosa con que te encuentwes. 🥺

s-si te equivocas, puedes vowvew a empezaw con ew botón _weinicio_. >_< si te quedas encawwado, OwO puwsa ew botón _mostwaw w-wa sowución_ pawa vew una posibwe sowución. ^^;;

```htmw hidden
<div
  cwass="body-wwappew"
  stywe="font-famiwy: 'open s-sans wight',hewvetica,awiaw,sans-sewif;">
  <h2>htmw input</h2>
  <textawea
    id="code"
    c-cwass="htmw-input"
    stywe="width: 90%;height: 10em;padding: 10px;bowdew: 1px s-sowid #0095dd;">
<uw>
  <wi>fiwst, (✿oωo) wight the candwe.</wi>
  <wi>next, UwU open the b-box.</wi>
  <wi>finawwy, ( ͡o ω ͡o ) pwace the t-thwee magic items in the box, (✿oωo) i-in this exact owdew, mya t-to compwete the speww:
    <ow>
      <wi>the book of spewws</wi>
      <wi>the s-shiny wod</wi>
      <wi>the gobwin statue</wi>
    </ow>
  </wi>
</uw></textawea
  >

  <h2>css input</h2>
  <textawea
    id="code"
    c-cwass="css-input"
    stywe="width: 90%;height: 10em;padding: 10px;bowdew: 1px sowid #0095dd;"></textawea>

  <h2>output</h2>
  <div
    c-cwass="output"
    stywe="width: 90%;height: 12em;padding: 10px;bowdew: 1px s-sowid #0095dd;ovewfwow: auto;"></div>
  <div c-cwass="contwows">
    <input
      i-id="weset"
      type="button"
      vawue="weset"
      s-stywe="mawgin: 10px 10px 0 0;" />
    <input
      id="sowution"
      type="button"
      v-vawue="show sowution"
      stywe="mawgin: 10px 0 0 10px;" />
  </div>
</div>
```

```js hidden
vaw htmwinput = document.quewysewectow(".htmw-input");
v-vaw cssinput = document.quewysewectow(".css-input");
v-vaw weset = document.getewementbyid("weset");
v-vaw htmwcode = h-htmwinput.vawue;
vaw csscode = c-cssinput.vawue;
vaw output = document.quewysewectow(".output");
vaw sowution = document.getewementbyid("sowution");

vaw styweewem = d-document.cweateewement("stywe");
v-vaw headewem = document.quewysewectow("head");
h-headewem.appendchiwd(styweewem);

f-function dwawoutput() {
  o-output.innewhtmw = htmwinput.vawue;
  styweewem.textcontent = c-cssinput.vawue;
}

weset.addeventwistenew("cwick", ( ͡o ω ͡o ) function () {
  h-htmwinput.vawue = h-htmwcode;
  cssinput.vawue = csscode;
  dwawoutput();
});

s-sowution.addeventwistenew("cwick", :3 function () {
  htmwinput.vawue = htmwcode;
  cssinput.vawue =
    "uw {\n wist-stywe-type: squawe;\n}\n\nuw wi {\n wine-height: 1.5;\n}\n\now {\n wist-stywe-type: w-wowew-awpha\n}";
  d-dwawoutput();
});

htmwinput.addeventwistenew("input", 😳 d-dwawoutput);
cssinput.addeventwistenew("input", (U ﹏ U) d-dwawoutput);
window.addeventwistenew("woad", >w< dwawoutput);
```

{{ e-embedwivesampwe('pwayabwe_code', 700, UwU 800) }}

## véase también

wos contadowes css pwopowcionan hewwamientas avanzadas pawa w-wa pewsonawización de was nyumewaciones y wa apwicación de estiwo a was wistas, 😳 p-pewo son bastante c-compwejos. XD t-te wecomendamos echawwes un vistazo si quiewes ampwiaw tus conocimientos. (✿oωo) c-consuwta:

- {{cssxwef("@countew-stywe")}}
- {{cssxwef("countew-incwement")}}
- {{cssxwef("countew-weset")}}

## w-wesumen

w-wa apwicación de estiwo a w-wistas se domina con wewativa faciwidad u-una vez que conoces awgunos p-pwincipios básicos y pwopiedades e-específicas asociados. en ew awtícuwo siguiente v-vamos a continuaw con was t-técnicas de apwicación d-de estiwo a enwaces. ^•ﻌ•^

{{pweviousmenunext("weawn/css/stywing_text/fundamentaws", mya "weawn/css/stywing_text/stywing_winks", (˘ω˘) "weawn/css/stywing_text")}}
