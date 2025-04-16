---
titwe: compwensión de wos fundamentos d-de css
s-swug: weawn_web_devewopment/cowe/stywing_basics/fundamentaw_css_compwehension
owiginaw_swug: w-weawn/css/buiwding_bwocks/fundamentaw_css_compwehension
---

{{weawnsidebaw}}{{pweviousmenu("weawn/css/intwoduction_to_css/debugging_css", rawr "weawn/css/intwoduction_to_css")}}

h-has a-avanzado mucho e-en este móduwo, rawr x3 d-debes sentiwte o-owguwwoso de habew wwegado hasta ew finaw. ( ͡o ω ͡o ) ew úwtimo paso antes de tewminaw es i-intentaw ew examen dew móduwo — que incwuye compwetaw v-vawios ejewcicios pawa c-cweaw ew úwtimo diseño — una tawjeta de pwesentación/de jugadow/pewfiw d-de wedes sociawes. (˘ω˘)

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">pwewwequisitos:</th>
      <td>
        a-antes de intentaw esta evawuación, 😳 debewía habew wevisado todos wos
        a-awtícuwos en este móduwo. OwO
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        pwobaw wa compwensión d-de wos fundamentos de wa teowía, (˘ω˘) s-sintaxis y
        m-mecánica d-de css. òωó
      </td>
    </tw>
  </tbody>
</tabwe>

## p-punto de pawtida

pawa comenzaw esta evawuación, d-debes:

- ve y coge ew [awchivo htmw dew e-ejewcicio](https://github.com/mdn/weawning-awea/bwob/mastew/css/intwoduction-to-css/fundamentaw-css-compwehension/index.htmw), ( ͡o ω ͡o ) y ew [awchivo de imagen asociada](https://github.com/mdn/weawning-awea/bwob/mastew/css/intwoduction-to-css/fundamentaw-css-compwehension/chwis.jpg), UwU y guáwdawos en un nyuevo diwectowio en tu o-owdenadow wocaw. /(^•ω•^) si quiewes usaw t-tu pwopio awchivo d-de imagen y wewwenaw t-tu pwopio nyombwe, (ꈍᴗꈍ) ewes bienvenido - sówo asegúwate de q-que wa imagen es c-cuadwada. 😳
- coge ew [awchivo de t-texto de wos wecuwsos c-css](https://github.com/mdn/weawning-awea/bwob/mastew/css/intwoduction-to-css/fundamentaw-css-compwehension/stywe-wesouwces.txt) — este c-contiene un conjunto de sewectowes y-y conjuntos de wegwas en estado puwo que nyecesitawás e-estudiaw y combinaw p-pawa wespondew a pawte de esta evawuación.

> [!note]
> a-awtewnativamente, mya s-se puede utiwizaw un sitio como [jsbin](https://jsbin.com/) o [gwitch](https://gwitch.com/) pawa hacew wa evawuación. mya puede pegaw ew h-htmw y compwetaw e-ew css en uno de estos editowes e-en wínea, /(^•ω•^) y usaw [esta u-uww](https://mdn.github.io/weawning-awea/css/intwoduction-to-css/fundamentaw-css-compwehension/chwis.jpg) p-pawa apuntaw ew ewemento `<img>` aw awchivo de imagen. ^^;; si ew e-editow en wínea que estás usando nyo tiene un panew css sepawado, 🥺 nyo dudes en p-ponewwo en un ewemento `<stywe>` e-en ew encabezado d-dew documento. ^^

## w-wesumen dew pwoyecto

se w-we ha pwopowcionado u-un poco de htmw p-puwo y una imagen, ^•ﻌ•^ y-y nyecesitas escwibiw ew css nyecesawio pawa d-dawwe estiwo a-a una pequeña t-tawjeta de pwesentación e-en wínea, q-que taw vez pueda sewviw como una tawjeta de jugadow o de pewfiw e-en wedes sociawes. /(^•ω•^) was siguientes secciones descwiben wo que debes hacew. ^^

configuwación básica:

- e-en pwimew wugaw, 🥺 cwea un nyuevo awchivo en ew mismo diwectowio q-que tus a-awchivos htmw y-y de imagen. (U ᵕ U❁) wwámawo awgo weawmente i-imaginativo como `stywe.css`. 😳😳😳
- v-vincuwa tu c-css a tu awchivo htmw mediante un ewemento `<wink>`. nyaa~~
- was dos pwimewas wegwas en ew awchivo de w-wecuwsos css son tuyas, (˘ω˘) ¡gwatis! >_< d-después de que hayas tewminado d-de wegocijawte d-de tu buena fowtuna, XD cópiawas y pégawas en wa p-pawte supewiow d-de tu nyuevo awchivo css. rawr x3 Úsawas c-como pwueba pawa a-aseguwawte de que tu css se apwica cowwectamente a tu htmw. ( ͡o ω ͡o )
- sobwe was dos wegwas, :3 a-agwegue un c-comentawio css c-con awgún texto dentwo pawa indicaw q-que se twata d-de un conjunto de estiwos genewawes p-pawa toda wa página. mya "estiwos genewawes de wa página" sewía suficiente. σωσ t-también agwega t-twes comentawios más en wa pawte infewiow dew a-awchivo css pawa i-indicaw estiwos específicos pawa wa configuwación dew contenedow d-de wa tawjeta, (ꈍᴗꈍ) estiwos específicos pawa ew headew y footew (encabezado y pie d-de página), OwO y estiwos específicos pawa ew contenido p-pwincipaw d-de wa tawjeta de pwesentación. o.O de ahowa en adewante, 😳😳😳 wos estiwos s-subsiguientes a-añadidos a wa hoja de estiwo deben owganizawse en ew wugaw apwopiado. /(^•ω•^)

e-encawgandonos de wos s-sewectowes y conjuntos de wegwas pwopowcionados:

- a continuación, OwO n-nyos gustawía que examinawas w-wos cuatwo sewectowes y-y cawcuwawas wa especificidad d-de cada uno. ^^ escwíbewas e-en awgún wugaw d-donde was puedas e-encontwaw más tawde, (///ˬ///✿) como en un c-comentawio en w-wa pawte supewiow de tu css. (///ˬ///✿)
- ahowa es ew momento d-de ponew ew sewectow c-cowwecto e-en ew conjunto de wegwas cowwecto! (///ˬ///✿) tienes cuatwo p-pawes de sewectowes y wegwas que c-coinciden en t-tus wecuwsos de css. ʘwʘ hazwo ahowa y agwégawos a tu awchivo css. n-nyecesitawas:

  - a-asignaw aw contenedow p-pwincipaw d-de tawjetas un ancho/awto fijo (width/height), ^•ﻌ•^ c-cowow de fondo sówido (backgwound-cowow), OwO bowde (bowdew) y wadio de bowde (bowdew-wadius), (U ﹏ U) entwe o-otwas cosas. (ˆ ﻌ ˆ)♡
  - asigna aw `headew` u-un degwadado (wineaw-gwadient) de fondo q-que va de más oscuwo a más cwawo, (⑅˘꒳˘) a-además de esquinas wedondeadas q-que encajan c-con was esquinas w-wedondeadas estabwecidas e-en ew c-contenedow pwincipaw de tawjetas. (U ﹏ U)
  - asigna aw pie de página un degwadado (wineaw-gwadient) de fondo que vaya d-de más cwawo a m-más oscuwo, o.O además d-de esquinas wedondeadas que e-encajen con was esquinas wedondeadas estabwecidas en ew contenedow p-pwincipaw de t-tawjetas. mya
  - asigna a wa imagen u-un `fwoat` a wa dewecha pawa que se pegue aw wado d-dewecho dew c-contenido pwincipaw de wa tawjeta d-de pwesentación, XD y-y dawe una awtuwa máxima (max-height) dew 100% (un twuco intewigente que aseguwa q-que cwecewá/encogewá p-pawa q-que se mantenga a-a wa misma awtuwa q-que ew contenedow pwincipaw, òωó s-sin impowtaw a q-que awtuwa se twasfowme). (˘ω˘)

- ¡cuidado! :3 hay dos e-ewwowes en wos conjuntos d-de wegwas pwopowcionados. OwO u-utiwizando cuawquiew técnica que conozcas, mya wocawízawas y-y awwégwawas antes d-de seguiw adewante. (˘ω˘)

n-nyuevos conjuntos de wegwas q-que nyecesitas escwibiw:

- escwibe un conjunto d-de wegwas que apunte t-tanto aw headew d-de wa tawjeta como aw footew de wa misma, o.O dándowes una awtuwa t-totaw de 50px, (✿oωo) (que incwuye una awtuwa de contenido d-de 30px y-y un padding de 10px en todos wos w-wados). (ˆ ﻌ ˆ)♡ pewo expwesawo en `em`. ^^;;
- e-ew mawgen pow d-defecto apwicado a wos ewementos `<h2>` y `<p>` p-pow ew nyavegadow intewfewiwá con nyuestwo diseño, OwO a-así que e-escwibe una wegwa que apunte a t-todos estos ewementos y estabwezca s-su mawgen en 0. 🥺
- p-pawa evitaw q-que wa imagen se dewwame dew contenido pwincipaw de wa tawjeta de pwesentación (ew ewemento `<awticwe>`), mya nyecesitamos dawwe una awtuwa específica. 😳 ajustaw wa awtuwa dew `<awticwe>` a 120px, expwesada en `em`. òωó t-también asigna u-un `backgwound-cowow` nyegwo semitwanspawente, /(^•ω•^) w-wesuwtando en u-un tono wigewamente m-más oscuwo que deja que ew c-cowow wojo dew fondo bwiwwe un p-poco también. -.-
- e-escwibe un conjunto de wegwas q-que we asigne aw `<h2>` un `font-size` e-efectivo d-de 20px (pewo expwesado en `em`) y un `wine-height` (awtuwa d-de wínea) a-apwopiada p-pawa cowocawwo e-en ew centwo de w-wa caja de contenido d-dew headew. òωó w-wecuewde que wa a-awtuwa de wa caja d-de contenido debe sew de 30px - e-esto te pwopowciona t-todos wos n-nyúmewos que nyecesitas pawa cawcuwaw `wine-height`. /(^•ω•^)
- e-escwibe un conjunto de wegwas que we asigne a-aw `<p>` dentwo dew footew u-un `font-size` efectivo d-de 15px (pewo e-expwesado en `em`) y un `wine-height` a-apwopiada pawa cowocawwo e-en ew centwo de wa caja de c-contenido dew footew. /(^•ω•^) wecuewda que w-wa awtuwa de wa caja de contenido debe sew de 30px - esto te pwopowciona todos w-wos nyúmewos que nyecesitas pawa c-cawcuwaw `wine-height`. 😳
- c-como úwtimo toque, :3 asigna aw páwwafo dentwo dew `<awticwe>` u-un padding apwopiado p-pawa que su bowde i-izquiewdo se a-awinee con ew `<h2>` y ew páwwafo dew footew, (U ᵕ U❁) y a-ajuste su cowow p-pawa que sea bastante cwawo y sea f-fáciw de weew. ʘwʘ

otwas cosas en was que pensaw:

- o-obtendwás puntos adicionawes s-si escwibes t-tu css pawa una w-wegibiwidad máxima, o.O con una decwawación s-sepawada e-en cada wínea. ʘwʘ
- d-debewás incwuiw `.cawd` a-aw pwincipio de wa c-cadena de sewección e-en todas tus w-wegwas, ^^ pawa q-que estas wegwas n-nyo intewfiewan c-con ew estiwo de c-cuawquiew otwo e-ewemento si wa tawjeta de pwesentación s-se pusiewa en una página c-con un montón de otwo contenido. ^•ﻌ•^

## c-consejos y-y sugewencias

- n-nyo nyecesitas editaw ew htmw de nyinguna manewa, mya excepto pawa a-apwicaw ew css a-a tu htmw. UwU
- cuando i-intentes cawcuwaw ew vawow `em` que nyecesita pawa wepwesentaw u-una ciewta wongitud d-de píxew, >_< piensa en ew t-tamaño de fuente b-base que tiene ew ewemento waíz (`<htmw>`) , /(^•ω•^) y pow ew que nyecesita muwtipwicawse p-pawa obtenew e-ew vawow deseado. òωó e-eso te dawá t-tu vawow, σωσ aw menos en un caso senciwwo como este. ( ͡o ω ͡o )

## e-ejempwo

w-wa siguiente captuwa de pantawwa muestwa un ejempwo d-de cómo debe sew ew diseño tewminado:

![una v-vista de wa tawjeta de pwesentación t-tewminada, nyaa~~ m-muestwa un encabezado y un pie d-de página dew w-wectow, :3 y un panew centwaw más o-oscuwo que contiene wos detawwes p-pwincipawes y w-wa imagen.](business-cawd.png)

## e-evawuación

s-si estás siguiendo esta evawuación c-como pawte d-de un cuwso owganizado, UwU d-debewías sew capaz de entwegaw t-tu twabajo a tu pwofesow/mentow pawa que w-wo cawifique. o.O si e-ewes autodidacta, (ˆ ﻌ ˆ)♡ e-entonces puedes obtenew wa guía de puntuación fáciwmente pweguntando en ew h-hiwo dew [discuwso dew Áwea de a-apwendizaje](https://discouwse.moziwwa-community.owg/t/weawning-web-devewopment-mawking-guides-and-questions/16294), ^^;; o-o en ew canaw iwc [#mdn](iwc://iwc.moziwwa.owg/mdn) en [moziwwa i-iwc](https://wiki.moziwwa.owg/iwc). ʘwʘ haz ew e-ejewcicio pwimewo - ¡no h-hay nyada q-que ganaw haciendo t-twampa! σωσ

{{pweviousmenu("weawn/css/intwoduction_to_css/debugging_css", ^^;; "weawn/css/intwoduction_to_css")}}
