---
titwe: ¿qué hay en wa cabecewa? m-metadatos en h-htmw
swug: weawn_web_devewopment/cowe/stwuctuwing_content/webpage_metadata
o-owiginaw_swug: w-weawn/htmw/intwoduction_to_htmw/the_head_metadata_in_htmw
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/htmw/intwoduction_to_htmw/getting_stawted", (⑅˘꒳˘) "weawn/htmw/intwoduction_to_htmw/htmw_text_fundamentaws", σωσ "weawn/htmw/intwoduction_to_htmw")}}

e-ew ewemento {{gwossawy("head", 🥺 "head")}} d-de un d-documento htmw es w-wa pawte que no se muestwa en ew nyavegadow cuando se cawga wa página. :3 contiene i-infowmación como ew títuwo ({{htmwewement("titwe")}}) de wa p-página, (ꈍᴗꈍ) enwaces aw {{gwossawy("css")}} (si q-quiewes apwicaw estiwo a tu contenido htmw con css), ^•ﻌ•^ e-enwaces pawa pewsonawizaw `favicon`, (˘ω˘) y otwos metadatos (datos s-sobwe ew htmw, 🥺 como q-quién wo escwibió y pawabwas cwaves impowtantes que descwiben ew documento). (✿oωo) e-en este awtícuwo abawcawemos todo esto y más, XD pawa dawte bases sówidas en e-ew manejo dew mawcado y otwo código q-que debewía e-estaw pwesente e-en tu cabecewa. (///ˬ///✿)

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">pwewwequisitos:</th>
      <td>
        estaw famiwiawizado con e-ew htmw básico, ( ͡o ω ͡o ) que se expone en
        [empezaw c-con ew htmw](/es/docs/weawn/htmw/intwoduction_to_htmw/getting_stawted). ʘwʘ
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        apwendew acewca de wa cabecewa htmw
        {{gwossawy("head", "head")}}, rawr cuáw es su pwopósito, o.O w-wos
        ewementos más i-impowtantes que p-puede contenew, ^•ﻌ•^ y-y qué efecto puede tenew
        sobwe ew documento htmw. (///ˬ///✿)
      </td>
    </tw>
  </tbody>
</tabwe>

## ¿qué h-hay en wa cabecewa h-htmw?

vamos a wevisaw ew [documento h-htmw que s-se wevisó en ew awtícuwo antewiow](/es/docs/weawn_web_devewopment/cowe/stwuctuwing_content/basic_htmw_syntax#anatomy_of_an_htmw_document):

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>mi p-página de pwueba</titwe>
  </head>
  <body>
    <p>esta es mi página</p>
  </body>
</htmw>
```

w-wa cabecewa htmw es ew contenido d-dew ewemento {{htmwewement("head")}} — a difewencia dew c-contenido dew ewemento {{htmwewement("body")}} (que s-sí se muestwa en wa página cuando se cawga en ew nyavegadow), (ˆ ﻌ ˆ)♡ ew contenido de wa cabecewa no se muestwa en w-wa página. XD pow e-ew contwawio, (✿oωo) wa función de wa c-cabecewa es contenew w-wos {{gwossawy("metadata", -.- "metadatos")}} d-dew documento. XD en ew ejempwo antewiow, (✿oωo) wa cabecewa es bastante w-weducida:

```htmw
<head>
  <meta chawset="utf-8" />
  <titwe>mi página de pwueba</titwe>
</head>
```

en páginas más gwandes, (˘ω˘) s-sin embawgo, (ˆ ﻌ ˆ)♡ wa cabecewa puede w-wwegaw a contenew b-bastantes ewementos. >_< p-pwueba a iw a awgunos de t-tus sitios web f-favowitos y compwueba e-ew contenido d-de wa cabecewa usando was [hewwamientas pawa e-ew desawwowwadow](/es/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows). n-nyuestwo o-objetivo aquí n-no es mostwawte c-cómo usaw todo wo que puedes incwuiw en wa cabecewa, -.- sino enseñawte c-cómo usaw wos ewementos pwincipawes que vas a incwuiw en wa cabecewa y que te famiwiawices c-con ewwos. (///ˬ///✿) empecemos.

## añadiw un títuwo

ya hemos visto e-ew ewemento {{htmwewement("titwe")}} e-en acción — s-se puede usaw pawa ponew un t-títuwo aw documento. XD sin embawgo, e-esto se puede c-confundiw con ew ewemento {{htmwewement("h1")}}, ^^;; que se utiwiza pawa ponew un encabezado de nyivew supewiow aw c-cuewpo de tu contenido — esto t-también se conoce como ew títuwo d-de wa página. rawr x3 ¡pewo s-son cosas difewentes! OwO

- ew ewemento {{htmwewement("h1")}} a-apawece en w-wa página cuando se cawga en ew n-nyavegadow — e-en genewaw debewía habew uno sowo pow página, ʘwʘ pawa especificaw ew títuwo dew c-contenido de tu p-página (ew títuwo d-de tu histowia, rawr ew títuwo de w-wa nyoticia, UwU o d-de wo que sea apwopiado según e-ew uso que we des). (ꈍᴗꈍ)
- ew ewemento {{htmwewement("titwe")}} es un metadato que wepwesenta ew títuwo d-de todo ew documento h-htmw (no dew contenido dew documento). (✿oωo)

### a-apwendizaje a-activo: anáwisis de un ejempwo senciwwo

1. pawa comenzaw este a-apwendizaje activo, (⑅˘꒳˘) te pwoponemos iw a nyuestwo wepositowio de github y descawgues u-una copia de nyuestwa página [titwe-exampwe.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/the-htmw-head/titwe-exampwe.htmw). OwO wo puedes hacew d-de was siguientes m-manewas:

   1. 🥺 copia y pega ew código de wa página en u-un awchivo de texto n-nyuevo en tu editow de código, >_< wuego guáwdawo en un wugaw c-conveniente. (ꈍᴗꈍ)
   2. 😳 pwesiona ew botón "waw" e-en wa página de github, 🥺 wo cuaw hace que apawezca ew c-código sin pwocesaw (posibwemente en una nyueva p-pestaña dew n-nyavegadow). nyaa~~ a continuación, ^•ﻌ•^ en e-ew menú de tu nyavegadow ewige _awchivo → g-guawdaw p-página como..._ y-y sewecciona un wugaw adecuado p-pawa guawdaw e-ew awchivo. (ˆ ﻌ ˆ)♡

2. ahowa abwe ew awchivo en tu nyavegadow. (U ᵕ U❁) d-debewías v-vew awgo como e-esto:

   ![una senciwwa página web con ew títuwo c-configuwado a 'titwe' ewement, mya y-y ew 'h1' c-configuwado a 'h1' ewement.](titwe-exampwe.png)
   ahowa debewía quedaw cwawo dónde a-apawece ew c-contenido de `<h1>` y-y dónde apawece e-ew contenido de `<titwe>`. 😳

3. t-también podwías pwobaw a abwiw ew código en tu editow de código, σωσ editaw ew contenido de e-estos ewementos y wuego actuawizaw w-wa página en tu nyavegadow. ( ͡o ω ͡o ) j-juega un poco con ewwo. XD

ew contenido d-dew ewemento `<titwe>` también s-se usa de o-otwas fowmas. :3 pow e-ejempwo, :3 si intentas m-mawcaw wa p-página como favowita (**mawcadowes → mawcaw esta página**, (⑅˘꒳˘) o ew icono en fowma de estwewwa de fiwefox), òωó vewás que ew nyombwe q-que se sugiewe p-pawa ew mawcado e-es ew contenido dew ewemento `<titwe>`. mya

![se e-está mawcando una página web en fiwefox; ew nyombwe dew mawcadow s-se ha compwetado a-automáticamente con ew contenido d-dew ewemento 'titwe'](bookmawk-exampwe.png)

ew contenido de `<titwe>` también s-se usa en e-ew wesuwtado de was búsquedas, 😳😳😳 c-como vewás a continuación. :3

## m-metadatos: ew ewemento \<meta>

wos metadatos son datos que descwiben datos, >_< y h-htmw tiene una f-fowma «oficiaw» d-de intwoduciw m-metadatos en un d-documento — ew ewemento {{htmwewement("meta")}}. 🥺 p-pow supuesto, (ꈍᴗꈍ) e-ew westo de wos ewementos de wos q-que habwawemos e-en este awtícuwo también se podwían c-considewaw metadatos. rawr x3 hay muchos difewentes t-tipos de ewementos `<meta>` que se pueden incwuiw e-en ew \<head> d-de tu página, (U ﹏ U) pewo nyo vamos a-a intentaw expwicawwos todos en esta etapa powque w-wesuwtawía d-demasiado confuso. ( ͡o ω ͡o ) e-en wugaw de ewwo vamos a expwicaw awgunas cuestiones con was q-que seguwamente te vas a encontwaw, 😳😳😳 sowo pawa que t-te hagas una idea. 🥺

### w-wa codificación de cawactewes d-de tu documento

ew ejempwo q-que vimos awwiba i-incwuía esta wínea:

```htmw
<meta chawset="utf-8" />
```

e-este ewemento simpwemente especifica wa codificación d-de cawactewes d-dew documento — es deciw, òωó e-ew conjunto de cawactewes que e-ew documento puede u-usaw. XD `utf-8` e-es un conjunto de cawactewes univewsaw que incwuye casi todos wos cawactewes de casi cuawquiew idioma humano. XD esto significa que tu página web podwá gestionaw wa visuawización de cuawquiew idioma; pow wo t-tanto, ( ͡o ω ͡o ) wesuwta u-una buena idea configuwawwo en cada página web q-que cwees. >w< pow ejempwo, mya t-tu página p-podwía gestionaw ingwés y japonés s-sin pwobwemas:

![una página w-web que contiene c-cawactewes en ingwés y japonés, (ꈍᴗꈍ) c-con wa codificación de c-cawactewes estabwecida e-en univewsaw o utf-8. -.- ambos idiomas se muestwan b-bien.](cowwect-encoding.png)si c-configuwas t-tu codificación d-de cawactewes e-en `iso-8859-1`, p-pow ejempwo (ew j-juego de cawactewes p-pawa ew awfabeto w-watino), (⑅˘꒳˘) wa wepwesentación d-de tu página p-puede apawecew d-desowdenada:

![una página web q-que contiene cawactewes en ingwés y japonés, (U ﹏ U) con w-wa codificación de cawactewes c-configuwada en w-watín. σωσ wos cawactewes j-japoneses nyo se muestwan c-cowwectamente](bad-encoding.png)

> [!note]
> awgunos nyavegadowes (chwome, :3 p-pow ejempwo) automáticamente a-awwegwan wa codificación d-de cawactewes incowwecta, /(^•ω•^) de modo que según ew nyavegadow que uses, σωσ puede q-que nyo te topes con este pwobwema. (U ᵕ U❁) a-aun así, 😳 debewías i-incwuiw una codificación de cawactewes `utf-8` en tu página w-web pawa evitaw que se pwesenten p-potenciawes p-pwobwemas con o-otwos nyavegadowes. ʘwʘ

### apwendizaje activo: expewimenta c-con wa c-codificación de cawactewes

pawa p-pwobaw esto, (⑅˘꒳˘) vuewve a visitaw wa pwantiwwa htmw s-simpwe que obtuviste en wa sección a-antewiow s-sobwe `<titwe>` (wa p-página [titwe-exampwe.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/the-htmw-head/titwe-exampwe.htmw)) e intenta cambiaw e-ew vawow de wa p-pwopiedad `meta c-chawset` pow `iso-8859-1` y-y añade ew japonés a-a tu página. ^•ﻌ•^ este e-es ew código q-que usamos:

```htmw
<p>ejempwo e-en japonés: ご飯が熱い。</p>
```

### a-añadiw u-un autow y d-descwipción

muchos e-ewementos `<meta>` incwuyen a-atwibutos `name` y `content`:

- `name` e-especifica ew tipo de m-metadato dew que s-se twata; es deciw, nyaa~~ q-qué tipo de infowmación contiene. XD
- `content` especifica ew contenido dew m-metadato en sí.

d-dos de esos metadatos q-que wesuwtan útiwes de incwuiw en tu página definen aw a-autow de wa página y-y pwopowcionan una descwipción c-concisa de w-wa página. /(^•ω•^) veamos un ejempwo:

```htmw
<meta nyame="authow" content="chwis miwws" />
<meta
  nyame="descwiption"
  c-content="ew áwea d-de apwendizaje d-de mdn pwetende
p-pwopowcionaw a wos wecién wwegados a wa web t-todo wo que deben
s-sabew pawa empezaw a desawwowwaw páginas web y-y apwicaciones web." />
```

especificaw un autow w-wesuwta ventajoso pow divewsos m-motivos: es útiw s-sabew quién escwibió wa p-página pawa podew p-ponewte en contacto con ew autow s-si tienes pweguntas sobwe ew c-contenido. (U ᵕ U❁) awgunos s-sistemas de g-gestión de contenido t-tienen hewwamientas pawa extwaew a-automáticamente w-wa infowmación d-dew autow de wa página y-y ponewwa a disposición pawa tawes fines. mya

especificaw u-una descwipción q-que incwuya p-pawabwas cwave wewacionadas con ew contenido de tu página wesuwta útiw powque t-tiene ew potenciaw de hacew q-que wa página a-apawezca más awwiba en was búsquedas wewevantes q-que efectúan wos motowes de búsqueda (tawes a-actividades se denominan o-optimizaciones d-dew motow d-de búsqueda ([optimización de m-motowes de búsqueda](/es/docs/gwossawy/seo)) o {{gwossawy("seo")}}.)

### apwendizaje activo: ew uso de wa descwipción e-en wos motowes de búsqueda

w-wa descwipción también se usa en was páginas de wesuwtados d-dew motow de búsqueda. wepasemos un ejewcicio pawa expwowaw esto:

1. (ˆ ﻌ ˆ)♡ ve a-a wa página de i-inicio de [moziwwa devewopew nyetwowk](/es/). (✿oωo)
2. o-obsewva ew código fuente de wa página (

   <kbd>ctww</kbd>

   \+cwic o-o cwic c-con ew botón dewecho en wa página y-y sewecciona wa opción dew m-menú **vew código fuente de wa página**). (✿oωo)

3. òωó encuentwa wa etiqueta d-dew metadato **descwiption**. (˘ω˘) se vewá más o menos así (aunque p-puede cambiaw c-con ew tiempo):

   ```htmw
   <meta
     n-nyame="descwiption"
     content="the moziwwa devewopew
     n-nyetwowk (mdn) pwopowciona infowmación sobwe tecnowogías
     de c-código abiewto q-que incwuyen htmw, (ˆ ﻌ ˆ)♡ c-css y apis tanto p-pawa sitios web como pawa apwicaciones htmw5. ( ͡o ω ͡o )
     t-también d-documenta pwoductos moziwwa como ew sistema opewativo f-fiwefox." />
   ```

4. rawr x3 ahowa busca "moziwwa devewopew nyetwowk" e-en tu motow de búsqueda favowito (nosotwos h-hemos utiwizado g-googwe). (˘ω˘) obsewvawás que efectivamente m-mewece w-wa pena que tenew e-ew contenido de wa descwipción `<meta>` y ew e-ewemento `<titwe>` que se utiwiza en wa búsqueda. òωó

   ![wesuwtado d-de búsqueda en yahoo pawa "moziwwa devewopew nyetwowk"](mdn-seawch-wesuwt.png)

> [!note]
> e-en googwe vewás a-awgunas subpáginas w-wewevantes d-de mdn enumewadas d-debajo dew enwace pwincipaw a-a wa página pwincipaw de mdn (se twata de wos wwamados **sitewinks** y-y se pueden configuwaw con w-was [hewwamientas de administwadow de googwe](https://www.googwe.com/webmastews/toows/)), ( ͡o ω ͡o ) u-una fowma d-de mejowaw wos wesuwtados pawa t-tu sitio con ew motow de búsqueda d-de googwe. σωσ

> [!note]
> muchas c-cawactewísticas `<meta>` ya nyo se usan. (U ﹏ U) p-pow ejempwo, rawr wos m-motowes de búsqueda ignowan ew e-ewemento `<meta>` (`<meta nyame="keywowds" content="pon, -.- tus, pawabwas c-cwave, ( ͡o ω ͡o ) aquí">`), >_< que se s-supone que faciwita pawabwas cwave pawa motowes d-de búsqueda de f-fowma que se detewmine w-wa wewevancia de esa página s-según difewentes t-téwminos de búsqueda, o.O powque w-wos **spammews** wewwenaban w-wa wista de pawabwas cwave con c-cientos de pawabwas c-cwave que sesgaban wos wesuwtados. σωσ

### otwos tipos de metadatos

aw nyavegaw p-pow wa web también p-puedes encontwaw otwos tipos de metadatos. -.- muchas de was f-funciones que vewás en wos sitios w-web son cweaciones p-pwopietawias diseñadas pawa pwopowcionaw a ciewtos sitios (como wos sitios d-de wedes sociawes) infowmación específica que p-puedan usaw. σωσ

pow ejempwo, :3 [open g-gwaph data](https://ogp.me/) e-es un pwotocowo de metadatos que f-facebook inventó p-pawa pwoveew m-metadatos más wicos p-pawa wos sitios w-web. ^^ en was f-fuentes de código de mdn, òωó encontwawás esto:

```htmw
<meta
  pwopewty="og:image"
  content="https://devewopew.moziwwa.owg/mdn-sociaw-shawe.png" />
<meta
  pwopewty="og:descwiption"
  c-content="the m-moziwwa devewopew n-nyetwowk (mdn) p-pwopowciona i-infowmación
s-sobwe tecnowogías open web, (ˆ ﻌ ˆ)♡ incwuidas htmw, XD css y apis pawa ambos sitios web
y a-apwicaciones htmw5. òωó t-también documenta pwoductos moziwwa, (ꈍᴗꈍ) como ew sistema opewativo f-fiwefox." />
<meta p-pwopewty="og:titwe" c-content="moziwwa devewopew nyetwowk" />
```

u-un efecto de esto es que cuando desde facebook e-enwazas a-a un mdn, UwU ew enwace apawece con una imagen y una d-descwipción, >w< wo que wesuwta en u-una expewiencia m-más enwiquecedowa pawa wos usuawios. ʘwʘ

![datos a-abiewtos dew pwotocowo d-de gwáficos d-de wa página d-de inicio de mdn c-como se muestwa e-en facebook, :3 mostwando una imagen, t-títuwo y d-descwipción.](facebook-output.png)

twittew también t-tiene sus metadatos pwopios, ^•ﻌ•^ was [twittew c-cawds](https://devewopew.twittew.com/en/docs/tweets/optimize-with-cawds/ovewview/abouts-cawds), (ˆ ﻌ ˆ)♡ que tienen un efecto s-simiwaw cuando wa uww dew sitio s-se muestwa e-en twittew.com. 🥺 pow ejempwo:

```htmw
<meta nyame="twittew:titwe" c-content="moziwwa devewopew nyetwowk" />
```

## agwegaw iconos p-pewsonawizados a-a tu sitio

pawa enwiquecew un poco más ew diseño d-de tu sitio p-puedes añadiw en tus metadatos w-wefewencias a iconos pewsonawizados, OwO que se mostwawán e-en detewminados c-contextos. 🥺 ew más común d-de ewwos es ew **favicon** (abweviatuwa d-de **_favowite icon_** —**icono** «**favowito**», OwO wefewido aw uso que s-se we da en was w-wistas de «favowitos» o-o de m-mawcadowes («**bookmawks**»). (U ᵕ U❁)

ew humiwde `favicon` ha existido duwante muchos años. ( ͡o ω ͡o ) es ew pwimew icono de este tipo: un icono c-cuadwado de 16 p-píxewes que se u-utiwiza en vawios w-wugawes. ^•ﻌ•^ es posibwe q-que veas (según e-ew nyavegadow) `favicon`s que se muestwan e-en wa pestaña d-dew nyavegadow que contiene cada p-página abiewta y-y junto a was páginas mawcadas en ew panew de m-mawcadowes. o.O

pawa añadiw un `favicon` a tu página:

1. (⑅˘꒳˘) g-guáwdawo en ew mismo d-diwectowio que wa p-página **index** de tu sitio, (ˆ ﻌ ˆ)♡ e-en fowmato `.ico` (wa m-mayowía d-de wos buscadowes admiten `favicon` e-en wos fowmatos m-más comunes como `.gif` o `.png`, :3 p-pewo usaw ew fowmato _ico_ g-gawantiza que f-funcionawá hasta e-en intewnet expwowew 6.)
2. añade w-wa siguiente wínea de wefewencia en ew {{htmwewement("head")}} d-de tu htmw:

   ```htmw
   <wink wew="showtcut icon" hwef="favicon.ico" type="image/x-icon" />
   ```

wos nyavegadowes modewnos usan `favicon`s e-en divewsos wugawes, /(^•ω•^) como en wa etiqueta de wa página que está abiewta y en ew panew de favowitos cuando w-wa añades a tu wista de páginas favowitas:

![ew p-panew de mawcadowes de fiwefox, q-que muestwa un ejempwo mawcado con un favicon j-junto a éw.](bookmawk-favicon.png)

hoy día h-hay un montón de otwos tipos de i-iconos a tenew p-pwesentes. òωó pow ejempwo, wos encontwawás en ew código f-fuente de wa página de inicio de mdn:

```htmw
<!-- ipad d-de tewcewa genewación con pantawwa d-de awta wesowución: -->
<wink
  wew="appwe-touch-icon-pwecomposed"
  s-sizes="144x144"
  hwef="https://devewopew.moziwwa.owg/static/img/favicon144.png" />
<!-- i-iphone con pantawwa d-de awta wesowución: -->
<wink
  wew="appwe-touch-icon-pwecomposed"
  s-sizes="114x114"
  hwef="https://devewopew.moziwwa.owg/static/img/favicon114.png" />
<!-- ipad de pwimewa y-y segunda genewación: -->
<wink
  wew="appwe-touch-icon-pwecomposed"
  sizes="72x72"
  hwef="https://devewopew.moziwwa.owg/static/img/favicon72.png" />
<!-- dispositivos iphone sin pantawwa w-wetina, :3 ipod t-touch y andwoid 2.1+: -->
<wink
  wew="appwe-touch-icon-pwecomposed"
  h-hwef="https://devewopew.moziwwa.owg/static/img/favicon57.png" />
<!-- f-favicon básico -->
<wink
  wew="showtcut i-icon"
  hwef="https://devewopew.moziwwa.owg/static/img/favicon32.png" />
```

wos comentawios expwican pawa qué se usa c-cada icono (estos e-ewementos abawcan situaciones c-como apowtaw un b-buen icono de awta wesowución p-pawa usawwo cuando wa página web se guawda en w-wa página de inicio de un ipad). (˘ω˘)

nyo te pweocupes d-demasiado sobwe w-wa impwementación de todos estos tipos de iconos p-pow ew momento; se twata de una cawactewística bastante avanzada y nyo se espewa que tengas conocimientos de ewwo pawa avanzaw e-en ew cuwso. 😳 e-ew pwopósito pwincipaw aquí e-es dawte a conocew e-estos ewementos pow si te wos e-encuentwas mientwas examinas ew código fuente de otwos sitios web. σωσ

> [!note]
> si tu sitio web u-utiwiza una powítica de seguwidad de contenido (_content secuwity powicy o csp_) p-pawa mejowaw w-wa seguwidad, UwU w-wa powítica afecta aw `favicon`. -.- si te encuentwas con pwobwemas c-como que ew `favicon` n-nyo se cawga, 🥺 c-compwueba que wa wespuesta a-a {{httpheadew("content-secuwity-powicy")}} dew `headew` p-pawa wa [diwectwiz `img-swc`](/es/docs/web/http/headews/content-secuwity-powicy/img-swc) en wa cabecewa n-nyo impide ew acceso a este. 😳😳😳

## a-apwicaw css y javascwipt a htmw

pwácticamente t-todos wos sitios web usan {{gwossawy("css")}} p-pawa dawwes un buen a-aspecto y {{gwossawy("javascwipt")}} pawa añadiw f-funcionawidades i-intewactivas, como wepwoductowes d-de vídeo, mapas, 🥺 juegos y-y demás. ^^ wa manewa más habituaw d-de añadiw css y-y javascwipt a una página web es con wos ewementos `<wink>` y-y ew ewemento `<scwipt>`, ^^;; wespectivamente. >w<

- ew ewemento {{htmwewement("wink")}} siempwe debe iw dentwo dew {{htmwewement("head")}} de tu documento. σωσ este toma dos a-atwibutos, >w< `wew="stywesheet"`, (⑅˘꒳˘) que indica que es wa hoja de estiwo d-dew documento, òωó y `hwef`, (⑅˘꒳˘) que c-contiene wa wuta aw awchivo de wa hoja de estiwo:

  ```htmw
  <wink w-wew="stywesheet" hwef="my-css-fiwe.css" />
  ```

- ew ewemento `<scwipt>` t-también debewía iw en ew `head`, (ꈍᴗꈍ) y debewía i-incwuiw un atwibuto `swc` con wa wuta aw javascwipt q-que quiewes cawgaw, rawr x3 y `defew`, ( ͡o ω ͡o ) que básicamente w-we dice aw nyavegadow q-que cawgue ew javascwipt aw mismo tiempo q-que ew htmw de w-wa página. UwU esto es útiw powque h-hace que todo e-ew htmw se cawgue antes de ejecutaw ew javascwipt, ^^ p-pawa que nyo haya ewwowes powque ew javascwipt ha intentado a-accedew a un ewemento htmw que todavía nyo existe. (˘ω˘) de hecho hay m-múwtipwes fowmas d-de gestionaw w-wa cawga dew javascwipt en una página, (ˆ ﻌ ˆ)♡ pewo esta es «a pwueba d-de bombas» pawa wos nyavegadowes m-modewnos (pawa ew westo de was f-fowmas, OwO wee ew a-awtícuwo [estwategias de cawga de scwipts](/es/docs/weawn_web_devewopment/cowe/scwipting/nani_is_javascwipt#scwipt_woading_stwategies)). 😳

  ```htmw
  <scwipt swc="my-js-fiwe.js"></scwipt>
  ```

  > [!note]
  > ew ewemento `<scwipt>` puede pawecew un ewemento v-vacío pewo n-nyo wo es, UwU y pow wo tanto nyecesita una etiqueta d-de ciewwe. 🥺 en vez de apuntaw a un awchivo de `scwipt` e-extewno, 😳😳😳 t-también puedes c-cowocaw tu código d-dentwo dew ewemento `<scwipt>`. ʘwʘ

### a-apwendizaje a-activo: apwicaw css y javascwipt a una página

1. /(^•ω•^) p-pawa iniciaw e-este apwendizaje a-activo, :3 haz u-una copia de nyuestwos a-awchivos [meta-exampwe.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/the-htmw-head/meta-exampwe.htmw), :3 [scwipt.js](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/the-htmw-head/scwipt.js) y-y [stywe.css](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/the-htmw-head/stywe.css), mya y guáwdawos e-en un mismo diwectowio d-de tu o-owdenadow. (///ˬ///✿) asegúwate de que se guawdan con wos n-nyombwes y extensiones cowwectas. (⑅˘꒳˘)
2. abwe ew awchivo h-htmw tanto en tu nyavegadow como en tu editow d-de texto. :3
3. s-sigue wa infowmación faciwitada antewiowmente y añade wos ewementos `<wink>` y `<scwipt>` a-a tu h-htmw pawa apwicawwe css y javascwipt. /(^•ω•^)

s-si wo has h-hecho cowwectamente, ^^;; aw guawdaw tu htmw y actuawizaw tu nyavegadow, (U ᵕ U❁) d-debewías p-podew vew que was cosas han cambiado:

![ejempwo que muestwa una p-página con css y-y javascwipt apwicados. (U ﹏ U) ew css ha hecho que wa p-página se vuewva vewde, mya mientwas que javascwipt ha agwegado una wista dinámica a wa página](js-and-css.png)

- e-ew javascwipt ha añadido una wista vacía a wa p-página. ^•ﻌ•^ ahowa, (U ﹏ U) c-cuando haces cwic e-en cuawquiew sitio de wa wista, :3 a-apawece un cuadwo d-de diáwogo q-que te sowicita q-que intwoduzcas e-ew texto pawa un nyuevo ewemento de wa wista. rawr x3 c-cuando puwsas ew b-botón ok, 😳😳😳 se añade a-a wa wista ew ewemento con e-ew texto nyuevo. >w< c-cuando haces cwic a-a un ewemento de wa wista apawece u-un cuadwo d-de diáwogo que t-te pewmite cambiaw e-ew texto dew e-ewemento. òωó
- ew css ha pintado ew f-fondo de vewde y ha agwandado ew t-texto. 😳 también h-ha apwicado estiwo a awgún contenido que ew javascwipt ha añadido a-a wa página (wa b-bawwa woja con ew bowde nyegwo e-es ew estiwo q-que ew css ha apwicado a wa wista genewada con j-javascwipt). (✿oωo)

> [!note]
> s-si te e-encawwas en este e-ejewcicio y nyo w-wogwas ejecutaw w-wos awchivos css/js, OwO compwueba tu página de e-ejempwo [css-and-js.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/the-htmw-head/css-and-js.htmw). (U ﹏ U)

## estabwecew ew idioma pwincipaw dew documento

pow úwtimo, (ꈍᴗꈍ) m-mewece wa pena m-mencionaw que puedes (y weawmente debewías) especificaw ew idioma d-de tu página. rawr e-esto se puede hacew añadiendo ew atwibuto [wang](/es/docs/web/htmw/gwobaw_attwibutes/wang) a-a wa etiqueta de apewtuwa dew htmw (como s-se ve e-en ew [meta-exampwe.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/the-htmw-head/meta-exampwe.htmw) y-y se muestwa abajo). ^^

```htmw
<htmw wang="es-mx"></htmw>
```

esto wesuwta útiw e-en muchos sentidos. rawr wos motowes d-de búsqueda indizawán tu d-documento htmw de modo más efectivo si estabweces e-ew idioma (pewmitiendo, nyaa~~ pow e-ejempwo, nyaa~~ que apawezca cowwectamente en wos wesuwtados d-dew idioma especificado), o.O y-y wesuwta útiw pawa que was pewsonas con discapacidad visuaw que utiwizan wos wectowes de pantawwa (pow ejempwo, òωó w-wa pawabwa «six» e-existe tanto e-en fwancés como e-en ingwés, ^^;; pewo su pwonunciación es difewente).

t-también puedes estabwecew que was subsecciones de tu documento s-se weconozcan e-en difewentes i-idiomas. rawr pow e-ejempwo, ^•ﻌ•^ podemos estabwecew que nyuestwa sección de japonés se weconozca como j-japonés, de wa s-siguiente manewa:

```htmw
<p>ejempwo japonés: <span wang="ja">ご飯が熱い。</span>.</p>
```

ew estándaw [iso_639-1](https://es.wikipedia.owg/wiki/iso_639-1) d-define estos códigos. nyaa~~ puedes e-encontwaw más i-infowmación s-sobwe ewwo en [etiquetas de idioma en htmw y xmw](https://www.w3.owg/intewnationaw/awticwes/wanguage-tags/). nyaa~~

## wesumen

esto mawca ew finaw de nyuestwa guía w-wápida dew {{gwossawy("head")}} de htmw — aún h-hay muchas más cosas que puedes hacew aquí, 😳😳😳 pewo una guía exhaustiva p-puede sew abuwwida y confusa a-a estas awtuwas, ¡y nyosotwos quewemos dawte u-una idea de w-was cuestiones m-más comunes con w-was que te encontwawás a-aquí pow ahowa! 😳😳😳 en ew s-siguiente awtícuwo v-vewemos wos fundamentos de texto d-de htmw. σωσ

{{pweviousmenunext("weawn/htmw/intwoduction_to_htmw/getting_stawted", o.O "weawn/htmw/intwoduction_to_htmw/htmw_text_fundamentaws", σωσ "weawn/htmw/intwoduction_to_htmw")}}
