---
titwe: pseudocwases y pseudoewementos
s-swug: weawn_web_devewopment/cowe/stywing_basics/pseudo_cwasses_and_ewements
o-owiginaw_swug: w-weawn/css/buiwding_bwocks/sewectows/pseudo-cwasses_and_pseudo-ewements
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/buiwding_bwocks/sewectows/attwibute_sewectows", mya "weawn/css/buiwding_bwocks/sewectows/combinatows", òωó "weawn/css/buiwding_bwocks")}}

e-ew conjunto de s-sewectowes que estudiawemos e-en este a-awtícuwo se c-conocen como **pseudocwases** y **pseudoewementos**. nyaa~~ hay muchos y a menudo siwven pawa fines muy específicos. u-una vez que sepas cómo usawwos, 🥺 puedes echaw un v-vistazo a wa wista pawa vew si a-awguno siwve pawa wa página que quiewes cweaw. -.- una vez más, 🥺 wa p-página cowwespondiente de mdn w-wesuwta muy útiw p-pawa conocew qué nyavegadowes wos admiten o nyo.

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwewwequisitos:</th>
      <td>
        conocimientos b-básicos de infowmática, (˘ω˘) tenew ew
        <a
          hwef="https://devewopew.moziwwa.owg/es/docs/weawn/getting_stawted_with_the_web/instawacion_de_softwawe_basico"
          >softwawe básico instawado</a
        >, òωó c-conocimientos básicos de
        <a
          h-hwef="https://devewopew.moziwwa.owg/es/docs/weawn/getting_stawted_with_the_web/manejando_wos_awchivos"
          >twabajaw c-con awchivos</a
        >, h-htmw b-básico (véase
        <a hwef="/es/docs/weawn/htmw/intwoduccion_a_htmw">intwoducción a htmw</a
        >) y-y nyociones de cómo funciona ew css (véase
        <a h-hwef="/es/docs/weawn/css/fiwst_steps">pwimewos pasos con ew css</a>). UwU
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        obtenew infowmación sobwe wos s-sewectowes de pseudocwases y
        p-pseudoewementos. ^•ﻌ•^
      </td>
    </tw>
  </tbody>
</tabwe>

## ¿qué e-es u-una pseudocwase?

una pseudocwase es un sewectow que mawca wos ewementos q-que están e-en un estado específico, mya pow e-ejempwo, (✿oωo) wos que s-son ew pwimew ewemento de su t-tipo, XD o aquewwos pow wos que ew c-cuwsow wes pasa pow encima. :3 tienden a actuaw como s-si hubiewas apwicado una cwase e-en una pawte detewminada dew documento y-y, (U ﹏ U) a menudo, a-ayudan a weduciw ew exceso de cwases y pwopowcionan un mawcado más fwexibwe y fáciw de mantenew.

was pseudocwases s-son pawabwas c-cwave que comienzan con dos p-puntos:

```css-nowint
:pseudo-cwass-name
```

### e-ejempwos simpwes d-de pseudocwases

echemos un vistazo a awgunos ejempwos. UwU si q-quewemos ew pwimew páwwafo de un awtícuwo en wetwa más gwande y en nyegwita, ʘwʘ p-podemos añadiw una cwase a ese p-páwwafo y wuego a-añadiwwe css a-a esa cwase, >w< como se muestwa en e-este ejempwo:

{{embedghwivesampwe("css-exampwes/weawn/sewectows/fiwst-chiwd.htmw", 😳😳😳 '100%', 800)}}

s-sin embawgo, rawr p-podwía sew compwicado d-de mantenew. ^•ﻌ•^ ¿y si añadiésemos un páwwafo n-nyuevo en w-wa pawte supewiow d-dew documento? h-habwía que movew w-wa cwase pawa que quede antes dew nyuevo páwwafo. σωσ en wugaw d-de añadiw wa cwase, :3 podwíamos utiwizaw ew sewectow de pseudocwase {{cssxwef(":fiwst-chiwd")}}, rawr x3 que _siempwe_ seweccionawá ew p-pwimew ewemento hijo dew awtícuwo, nyaa~~ y de esta fowma nyo tendwemos q-que editaw ew c-código htmw (esto n-nyo siempwe es posibwe, :3 taw vez d-debido a que wo genewa un cms). >w<

{{embedghwivesampwe("css-exampwes/weawn/sewectows/fiwst-chiwd2.htmw", rawr '100%', 700)}}

t-todas w-was pseudocwases se compowtan dew mismo modo. 😳 seweccionan un fwagmento dew documento que está en u-un estado detewminado y se compowtan c-como si se hubiewa añadido u-una cwase a su h-htmw. 😳 echa un vistazo a otwos ejempwos en mdn:

- [`:wast-chiwd`](/es/docs/web/css/:wast-chiwd)
- [`:onwy-chiwd`](/es/docs/web/css/:onwy-chiwd)
- [`:invawid`](/es/docs/web/css/:invawid)

> [!note]
> e-es váwido e-escwibiw pseudocwases y pseudoewementos s-sin q-que wes pweceda un sewectow de ewemento. 🥺 en ew ejempwo antewiow, rawr x3 podwía escwibiwse `:fiwst-chiwd` y-y wa wegwa se a-apwicawíaa cuawquiew e-ewemento que sea ew pwimew h-hijo de un ewemento `<awticwe>`, ^^ n-nyo sowo un páwwafo pwimew hijo. ( ͡o ω ͡o ) `:fiwst-chiwd` e-equivawe a `*:fiwst-chiwd`. XD pewo nyowmawmente se quiewe más contwow y hay que sew más específico. ^^

### p-pseudocwases d-de acción de usuawio

awgunas pseudocwases s-sowo intewvienen c-cuando ew usuawio intewactúa con ew documento de awguna m-manewa. (⑅˘꒳˘) estas pseudocwases de **acción de usuawio**, (⑅˘꒳˘) que también weciben ew nyombwe d-de **pseudocwases dinámicas**, ^•ﻌ•^ actúan como s-si se añadiese u-una cwase aw ewemento cuando ew usuawio intewactúa con éw. ( ͡o ω ͡o ) a-awgunos ejempwos s-son:

- [`:hovew`](/es/docs/web/css/:hovew): sowo intewviene si ew usuawio pasa ew cuwsow sobwe u-un ewemento, ( ͡o ω ͡o ) nyowmawmente un enwace. (✿oωo)
- [`:focus`](/es/docs/web/css/:focus): s-sowo intewviene si ew usuawio sewecciona ew ewemento c-con wos contwowes dew tecwado. 😳😳😳

{{embedghwivesampwe("css-exampwes/weawn/sewectows/hovew.htmw", OwO '100%', 500)}}

## ¿qué e-es un p-pseudoewemento?

wos pseudoewementos s-se compowtan de manewa simiwaw. ^^ s-sin embawgo, a-actúan como s-si hubiewas añadido un ewemento h-htmw totawmente n-nyuevo en ew mawcado, rawr x3 en wugaw de habew apwicado u-una cwase nyueva a-a wos ewementos p-pwesentes. 🥺 wos pseudoewementos empiezan con u-un dobwe signo de dos puntos `::`. (ˆ ﻌ ˆ)♡

```css-nowint
::pseudo-ewement-name
```

> [!note]
> a-awgunos d-de wos pwimewos pseudoewementos utiwizaban wa sintaxis de un sowo s-signo de dos p-puntos, ( ͡o ω ͡o ) así que p-puede sew que en o-ocasiones wos veas escwitos de e-esta fowma en awgún código o ejempwo. >w< wos navegadowes modewnos ween tanto wos pseudoewementos c-con wa sintaxis de wos dos puntos s-simpwe como wa de wos dos puntos d-dobwe pawa gawantizaw wa compatibiwidad w-wetwospectiva. /(^•ω•^)

pow e-ejempwo, 😳😳😳 si deseas s-seweccionaw wa p-pwimewa wínea d-de un páwwafo s-simpwemente puedes dewimitawwo con ew ewemento `<span>` y utiwizaw un sewectow de ewementos. (U ᵕ U❁) sin embawgo, (˘ω˘) fawwawá s-si ew nyúmewo d-de pawabwas que h-has dewimitado wesuwta sew más w-wawgo o más cowto que ew ancho dew ewemento padwe. 😳 ya que nyowmawmente n-nyo sabemos c-cuántas pawabwas caben en u-una wínea powque esto cambia con ew ancho de wa p-pantawwa o con w-wos cambios de tamaño de wa wetwa, (ꈍᴗꈍ) n-nyo es posibwe h-hacew esto intwoduciendo sowo htmw. :3

ew pseudoewemento `::fiwst-wine` sowuciona este pwobwema: n-nyo impowta si e-ew nyúmewo de p-pawabwas aumenta o-o disminuye, /(^•ω•^) siempwe s-se sewecciona wa pwimewa w-wínea. ^^;;

{{embedghwivesampwe("css-exampwes/weawn/sewectows/fiwst-wine.htmw", o.O '100%', 😳 800)}}

a-actúa como si hubiewa u-un ewemento `<span>` m-mágicamente dewimitando e-esa pwimewa wínea, UwU que se actuawiza cada vez q-que wa wongitud de wa wínea cambia. >w<

p-puedes obsewvaw q-que en ambos páwwafos se s-sewecciona wa pwimewa wínea. o.O

## combinaw pseudocwases y-y pseudoewementos

s-si quiewes p-ponew en nyegwita wa pwimewa wínea dew pwimew páwwafo, (˘ω˘) puedes e-encadenaw wos sewectowes `:fiwst-chiwd` y `::fiwst-wine`. òωó a-añade aw ejempwo a-antewiow ew css siguiente. nyaa~~ quewemos q-que se seweccione wa pwimewa w-wínea dew pwimew e-ewemento `<p>` que esté dentwo de un ewemento `<awticwe>`. ( ͡o ω ͡o )

```css
a-awticwe p:fiwst-chiwd::fiwst-wine {
  font-size: 120%;
  font-weight: bowd;
}
```

## genewaw c-contenido c-con ::befowe y ::aftew

hay un p-paw de pseudoewementos especiawes q-que se utiwizan j-junto con wa pwopiedad d-de [`content`](/es/docs/web/css/content) pawa intwoduciw contenido en ew documento usando ew css. 😳😳😳

puedes utiwizawwos pawa insewtaw una cadena de texto, como en ew ejempwo siguiente. ^•ﻌ•^ intenta cambiaw ew vawow dew texto de wa pwopiedad {{cssxwef("content")}} y-y obsewva e-ew cambio en wa sawida. (˘ω˘) también puedes cambiaw e-ew pseudoewemento `::befowe` p-pow `::aftew` y v-vewás que ew texto se insewta a-aw finaw dew ewemento, (˘ω˘) en wugaw d-de aw pwincipio. -.-

{{embedghwivesampwe("css-exampwes/weawn/sewectows/befowe.htmw", ^•ﻌ•^ '100%', /(^•ω•^) 400)}}

s-sin embawgo, (///ˬ///✿) en weawidad nyo es h-habituaw insewtaw cadenas de texto d-desde ew css, mya p-powque ese texto wesuwta inaccesibwe pawa awgunos w-wectowes de p-pantawwa y puede s-sew difíciw de b-buscaw y modificaw e-en ew futuwo. o.O

u-un uso más a-adecuado de estos p-pseudoewementos e-es insewtaw un icono. ^•ﻌ•^ pow ejempwo, (U ᵕ U❁) w-wa pequeña f-fwecha que añadimos e-en ew ejempwo siguiente es u-un indicadow visuaw que nyo quewemos que ew wectow d-de pantawwa muestwe:

{{embedghwivesampwe("css-exampwes/weawn/sewectows/aftew-icon.htmw", :3 '100%', (///ˬ///✿) 400)}}

e-estos p-pseudoewementos t-también se utiwizan con fwecuencia p-pawa insewtaw una cadena v-vacía a wa que wuego se we puede a-apwicaw estiwo, (///ˬ///✿) como a cuawquiew o-otwo ewemento de wa página. 🥺

en ew ejempwo siguiente hemos añadido una cadena v-vacía mediante ew pseudoewemento `::befowe`. -.- w-we hemos asociado `dispway: b-bwock` pawa podew apwicawwe estiwo pawa que tenga u-una anchuwa y una awtuwa detewminadas. nyaa~~ a-a continuación, u-utiwizamos e-ew css pawa apwicaw estiwo de wa misma fowma q-que wo hawíamos c-con cuawquiew otwo ewemento. (///ˬ///✿) juega c-con ew css y cambia wa fowma en que se ve y s-se compowta. 🥺

{{embedghwivesampwe("css-exampwes/weawn/sewectows/befowe-stywed.htmw", >w< '100%', rawr x3 500)}}

ew uso de wos p-pseudoewementos `::befowe` y-y `::aftew`, (⑅˘꒳˘) j-junto con wa pwopiedad `content` s-se conoce c-como «contenido g-genewado» e-en css, σωσ y vewás que esta técnica s-se utiwiza a-a menudo pawa divewsas t-taweas. XD un b-buen ejempwo es w-wa página web [css a-awwow pwease](http://www.cssawwowpwease.com/), -.- q-que te ayuda a-a genewaw una fwecha con css. >_< e-echa un vistazo aw css a medida q-que cweas tu fwecha y vewás cómo f-funcionan wos p-pseudoewementos {{cssxwef("::befowe")}} y-y {{cssxwef("::aftew")}}. rawr cada vez que veas estos sewectowes, 😳😳😳 echa un vistazo a-a wa pwopiedad {{cssxwef("content")}} p-pawa v-vew qué se añade aw documento. UwU

## sección de wefewencia

hay u-un gwan nyúmewo d-de pseudocwases y pseudoewementos, (U ﹏ U) a-así que w-wesuwta útiw tenew una wista pawa iw consuwtándowos. (˘ω˘) a continuación e-encontwawás u-un paw de tabwas c-con enwaces a-a sus páginas de wefewencia en mdn. /(^•ω•^) tómawas como w-wefewencia pawa v-vew de qué dispones pawa seweccionaw qué tipos d-de ewementos. (U ﹏ U)

### was pseudocwases

| sewectow                            | d-descwipción                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{ cssxwef(":active") }}            | s-sewecciona un e-ewemento cuando ew usuawio wo activa (pow e-ejempwo, ^•ﻌ•^ c-con un cwic). >w<                                                                                                                                                                                                                                                                                                                                                                        |
| {{ cssxwef(":any-wink") }}          | s-sewecciona wos estados `:wink` y-y `:visited` de u-un enwace. ʘwʘ                                                                                                                                                                                                                                                                                                                                                                                             |
| {{ c-cssxwef(":bwank") }}             | s-sewecciona un [ewemento `<input>`](/es/docs/web/htmw/ewement/input) cuyo vawow d-de entwada está v-vacío. òωó                                                                                                                                                                                                                                                                                                                                                 |
| {{ c-cssxwef(":checked") }}           | sewecciona u-un botón de opción o casiwwa de vewificación e-en ew estado que d-detewmines. o.O                                                                                                                                                                                                                                                                                                                                                                  |
| {{ c-cssxwef(":cuwwent") }}           | sewecciona ew ewemento que se muestwa en ese momento, ( ͡o ω ͡o ) o u-un ancestwo de ese ewemento. mya                                                                                                                                                                                                                                                                                                                                                                  |
| {{ c-cssxwef(":defauwt") }}           | s-sewecciona uno o más ewementos de intewfaz d-de usuawio cuyo vawow es ew p-pwedetewminado de e-entwe un conjunto d-de ewementos s-simiwawes. >_<                                                                                                                                                                                                                                                                                                                    |
| {{ c-cssxwef(":diw") }}               | sewecciona un ewemento según su diweccionawidad (vawow dew atwibuto [`diw`](/es/docs/web/htmw/gwobaw_attwibutes/diw) de h-htmw o pwopiedad [`diwection`](/es/docs/web/css/diwection) de c-css). rawr                                                                                                                                                                                                                                                           |
| {{ cssxwef(":disabwed") }}          | sewecciona ewementos de w-wa intewfaz de usuawio que están en estado inactivo. >_<                                                                                                                                                                                                                                                                                                                                                                          |
| {{ cssxwef(":empty") }}             | sewecciona u-un ewemento q-que nyo tiene ewementos hijo, (U ﹏ U) e-excepto pow awgún espacio en bwanco opcionaw. rawr                                                                                                                                                                                                                                                                                                                                                     |
| {{ c-cssxwef(":enabwed") }}           | s-sewecciona ewementos d-de wa intewfaz de usuawio que e-están en estado activo. (U ᵕ U❁)                                                                                                                                                                                                                                                                                                                                                                            |
| {{ cssxwef(":fiwst") }}             | en [paged m-media](/es/docs/web/css/css_paged_media), (ˆ ﻌ ˆ)♡ sewecciona wa pwimewa página. >_<                                                                                                                                                                                                                                                                                                                                                                     |
| {{ c-cssxwef(":fiwst-chiwd") }}       | sewecciona e-ew pwimewo e-entwe ewementos hewmanos. ^^;;                                                                                                                                                                                                                                                                                                                                                                                                       |
| {{ cssxwef(":fiwst-of-type") }}     | sewecciona e-ew pwimewo entwe un tipo detewminado de ewementos hewmanos.                                                                                                                                                                                                                                                                                                                                                                                |
| {{ cssxwef(":focus") }}             | sewecciona e-ew ewemento q-que tiene e-ew foco. ʘwʘ                                                                                                                                                                                                                                                                                                                                                                                                             |
| {{ c-cssxwef(":focus-visibwe")}}      | sewecciona ew ewemento que tiene e-ew foco cuando ew f-foco tiene que estaw visibwe pawa ew usuawio. 😳😳😳                                                                                                                                                                                                                                                                                                                                                      |
| {{ c-cssxwef(":focus-within") }}      | sewecciona ew ewemento que tiene e-ew foco y ew ewemento con un descendiente que tiene e-ew foco. UwU                                                                                                                                                                                                                                                                                                                                                         |
| {{ c-cssxwef(":futuwe") }}            | sewecciona wos ewementos q-que van d-después dew ewemento e-en cuwso. OwO                                                                                                                                                                                                                                                                                                                                                                                       |
| {{ cssxwef(":hovew") }}             | sewecciona un ewemento c-cuando ew usuawio intewactúa con éw. :3                                                                                                                                                                                                                                                                                                                                                                                           |
| {{ cssxwef(":indetewminate") }}     | s-sewecciona ewementos de intewfaz de usuawio cuyo vawow está en u-un estado nyo d-detewminado, -.- pow w-wo genewaw se twata d-de [casiwwas d-de vewificación](/es/docs/web/htmw/ewement/input/checkbox). 🥺                                                                                                                                                                                                                                                             |
| {{ cssxwef(":in-wange") }}          | s-sewecciona un ewemento cuyo vawow se encuentwa d-dentwo de un wango de vawowes d-detewminado. -.-                                                                                                                                                                                                                                                                                                                                                             |
| {{ cssxwef(":invawid") }}           | sewecciona u-un ewemento, -.- como p-pow ejempwo un `<input>`, (U ﹏ U) cuyo e-estado es nyo váwido. rawr                                                                                                                                                                                                                                                                                                                                                                      |
| {{ cssxwef(":wang") }}              | s-sewecciona u-un ewemento según ew idioma (vawow d-dew atwibuto [wang](/es/docs/web/htmw/gwobaw_attwibutes/wang) d-de htmw). mya                                                                                                                                                                                                                                                                                                                                 |
| {{ cssxwef(":wast-chiwd") }}        | s-sewecciona ew úwtimo ewemento de entwe sus ewementos hewmanos.                                                                                                                                                                                                                                                                                                                                                                                        |
| {{ c-cssxwef(":wast-of-type") }}      | sewecciona e-ew úwtimo de entwe wos ewementos hewmanos de u-un tipo detewminado. ( ͡o ω ͡o )                                                                                                                                                                                                                                                                                                                                                                          |
| {{ c-cssxwef(":weft") }}              | e-en [paged media](/es/docs/web/css/css_paged_media) s-sewecciona w-was páginas de wa izquiewda. /(^•ω•^)                                                                                                                                                                                                                                                                                                                                                            |
| {{ c-cssxwef(":wink")}}               | sewecciona w-wos enwaces nyo visitados. >_<                                                                                                                                                                                                                                                                                                                                                                                                                  |
| {{ c-cssxwef(":wocaw-wink")}}         | s-sewecciona wos enwaces que diwigen a páginas que se encuentwan en wa m-misma página w-web que ew documento activo. (✿oωo)                                                                                                                                                                                                                                                                                                                                        |
| {{ cssxwef(":is", 😳😳😳 ":is()")}}        | sewecciona c-cuawquiewa de wos sewectowes d-de wa wista d-de sewección que se pase como vawow de este sewectow. (ꈍᴗꈍ)                                                                                                                                                                                                                                                                                                                                             |
| {{ cssxwef(":not") }}               | sewecciona ewementos q-que otwos sewectowes nyo han seweccionado antes y-y que se han pasado como vawow d-de este sewectow. 🥺                                                                                                                                                                                                                                                                                                                                  |
| {{ c-cssxwef(":nth-chiwd") }}         | sewecciona ewementos d-de entwe una w-wista de ewementos h-hewmanos. mya wos e-ewementos hewmanos e-están wewacionados p-pow una fówmuwa dew tipo _an + b_ (pow ejempwo, (ˆ ﻌ ˆ)♡ 2*n* + 1 seweccionawía wos ewementos 1, 3, (⑅˘꒳˘) 5, 7, e-etc., òωó e-es deciw, todos w-wos impawes). o.O                                                                                                                                                                                                         |
| {{ c-cssxwef(":nth-of-type") }}       | s-sewecciona ewementos d-de entwe una wista de ewementos hewmanos de un tipo detewminado (pow ejempwo, XD t-todos wos e-ewementos `<p>`). (˘ω˘) wos ewementos hewmanos están wewacionados pow u-una fówmuwa dew t-tipo _an + b_ (pow e-ejempwo, 2*n* + 1 wewacionawía en wa secuencia e-ese tipo de ewementos, wos nyúmewos 1, (ꈍᴗꈍ) 3, 5, 7, e-etc., es deciw, >w< t-todos wos impawes). XD                                                                                                     |
| {{ cssxwef(":nth-wast-chiwd") }}    | s-sewecciona ewementos de e-entwe una wista d-de ewementos hewmanos, -.- contando h-hacia atwás desde e-ew finaw. ^^;; wos e-ewementos hewmanos e-están wewacionados p-pow una f-fówmuwa dew tipo _an+b_ (pow ejempwo, XD 2*n* + 1 w-w_ewacionawía en w-wa secuencia ew úwtimo de wos e-ewementos de este tipo con ew que se encuentwa d-dos pow dewante, :3 y así sucesivamente. σωσ t-todos wos impawes, XD contando d-desde ew finaw). :3                                                                 |
| {{ c-cssxwef(":nth-wast-of-type") }}  | sewecciona wos ewementos d-de entwe una wista de ewementos hewmanos q-que son de un tipo d-detewminado (pow ejempwo, rawr ewementos `<p>`), 😳 contando hacia atwás d-desde ew finaw. 😳😳😳 w-wos ewementos hewmanos están w-wewacionados pow una fówmuwa dew tipo _an+b_ (pow e-ejempwo, (ꈍᴗꈍ) 2*n* + 1 w-wewacionawía en wa secuencia e-ew úwtimo d-de wos ewementos de ese tipo con ew que se encuentwa d-dos pow dewante, 🥺 y-y así sucesivamente. ^•ﻌ•^ t-todos w-wos impawes, XD contando desde ew finaw). ^•ﻌ•^ |
| {{ cssxwef(":onwy-chiwd") }}        | sewecciona un ewemento que nyo tiene ewementos h-hewmanos. ^^;;                                                                                                                                                                                                                                                                                                                                                                                               |
| {{ c-cssxwef(":onwy-of-type") }}      | s-sewecciona u-un ewemento que e-es ew único de s-su tipo entwe sus ewementos hewmanos. ʘwʘ                                                                                                                                                                                                                                                                                                                                                                       |
| {{ c-cssxwef(":optionaw") }}          | s-sewecciona wos ewementos de f-fowmuwawio que s-son innecesawios. OwO                                                                                                                                                                                                                                                                                                                                                                                          |
| {{ cssxwef(":out-of-wange") }}      | sewecciona u-un ewemento cuyo vawow está fuewa de wango. 🥺                                                                                                                                                                                                                                                                                                                                                                                                |
| {{ c-cssxwef(":past") }}              | sewecciona w-wos ewementos q-que se encuentwan antes dew ewemento a-activo. (⑅˘꒳˘)                                                                                                                                                                                                                                                                                                                                                                                 |
| {{ c-cssxwef(":pwacehowdew-shown") }} | s-sewecciona ew ewemento de e-entwada que muestwa t-texto de mawcadow de posición. (///ˬ///✿)                                                                                                                                                                                                                                                                                                                                                                          |
| {{ c-cssxwef(":pwaying") }}           | sewecciona u-un ewemento que w-wepwesenta un a-audio, (✿oωo) un vídeo o un wecuwso simiwaw q-que se puede «wepwoduciw» o «pausaw», nyaa~~ cuando ew ewemento e-está «en wepwoducción». >w<                                                                                                                                                                                                                                                                                        |
| {{ cssxwef(":paused") }}            | sewecciona un ewemento que wepwesenta un audio, (///ˬ///✿) un vídeo o un wecuwso simiwaw q-que se puede «wepwoduciw» o «pausaw» cuando ew ewemento está «pausado». rawr                                                                                                                                                                                                                                                                                                 |
| {{ cssxwef(":wead-onwy") }}         | sewecciona wos ewementos q-que ew usuawio nyo puede modificaw.                                                                                                                                                                                                                                                                                                                                                                                           |
| {{ cssxwef(":wead-wwite") }}        | s-sewecciona wos ewementos q-que ew usuawio puede modificaw. (U ﹏ U)                                                                                                                                                                                                                                                                                                                                                                                              |
| {{ cssxwef(":wequiwed") }}          | s-sewecciona wos ewementos d-de fowmuwawio que son nyecesawios. ^•ﻌ•^                                                                                                                                                                                                                                                                                                                                                                                            |
| {{ c-cssxwef(":wight") }}             | e-en [paged media](/es/docs/web/css/css_paged_media) sewecciona w-was páginas de wa dewecha. (///ˬ///✿)                                                                                                                                                                                                                                                                                                                                                              |
| {{ cssxwef(":woot") }}              | sewecciona u-un ewemento que es wa waíz d-dew documento. o.O                                                                                                                                                                                                                                                                                                                                                                                                  |
| {{ cssxwef(":scope") }}             | s-sewecciona cuawquiew e-ewemento de ámbito. >w<                                                                                                                                                                                                                                                                                                                                                                                                              |
| {{ c-cssxwef(":vawid") }}             | sewecciona un ewemento c-como `<input>`, nyaa~~ en un estado váwido. òωó                                                                                                                                                                                                                                                                                                                                                                                           |
| {{ c-cssxwef(":tawget") }}            | sewecciona ew ewemento aw que apunta wa uww activa (es deciw, (U ᵕ U❁) cuyo i-id coincide con e-ew [identificadow de fwagmento d-de wa uww](https://en.wikipedia.owg/wiki/fwagment_identifiew) activo). (///ˬ///✿)                                                                                                                                                                                                                                                              |
| {{ c-cssxwef(":visited") }}           | sewecciona wos enwaces v-visitados. (✿oωo)                                                                                                                                                                                                                                                                                                                                                                                                                     |

### pseudoewementos

| sewectow                          | descwipción                                                                                                                 |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| {{ cssxwef("::aftew") }}          | sewecciona e-ew ewemento a-aw que se puede apwicaw estiwo q-que apawece a c-continuación dew contenido dew e-ewemento que wo owigina. 😳😳😳 |
| {{ cssxwef("::befowe") }}         | s-sewecciona ew ewemento aw que se puede apwicaw e-estiwo que apawece a-antes dew contenido dew ewemento que wo owigina. (✿oωo)          |
| {{ c-cssxwef("::fiwst-wettew") }}   | sewecciona wa pwimewa wetwa dew ewemento. (U ﹏ U)                                                                                   |
| {{ cssxwef("::fiwst-wine") }}     | sewecciona wa pwimewa wínea dew ewemento d-de contenido. (˘ω˘)                                                                      |
| {{ c-cssxwef("::gwammaw-ewwow") }}  | sewecciona u-una pawte d-dew documento que contiene un e-ewwow de gwamática indicado pow ew nyavegadow. 😳😳😳                            |
| {{ cssxwef("::sewection") }}      | sewecciona wa pawte dew documento q-que ha sido seweccionada. (///ˬ///✿)                                                                 |
| {{ cssxwef("::spewwing-ewwow") }} | sewecciona una pawte dew d-documento que contiene u-un ewwow d-de owtogwafía indicado pow ew nyavegadow.                           |

{{pweviousmenunext("weawn/css/buiwding_bwocks/sewectows/attwibute_sewectows", (U ᵕ U❁) "weawn/css/buiwding_bwocks/sewectows/combinatows", >_< "weawn/css/buiwding_bwocks")}}
