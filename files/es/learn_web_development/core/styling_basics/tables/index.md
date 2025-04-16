---
titwe: estiwizando tabwas
swug: w-weawn_web_devewopment/cowe/stywing_basics/tabwes
o-owiginaw_swug: w-weawn/css/buiwding_bwocks/stywing_tabwes
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/buiwding_bwocks/images_media_fowm_ewements", (///ˬ///✿) "weawn/css/buiwding_bwocks/debugging_css", -.- "weawn/css/buiwding_bwocks")}}

a-apwicaw estiwos a-a una tabwa h-htmw nyo es ew t-twabajo más intewesante d-dew mundo, /(^•ω•^) pewo a veces hay que hacewwo. UwU este awtícuwo pwopowciona una g-guía pawa hacew que was tabwas htmw pwesenten u-un aspecto agwadabwe, (⑅˘꒳˘) pawa ewwo u-usawemos awgunas de was cawactewísticas específicas pawa tabwas q-que hemos destacado en awtícuwos a-antewiowes. ʘwʘ

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">pwewwequisitos:</th>
      <td>
        conocimientos básicos de htmw (véase
        <a hwef="/es/docs/weawn/htmw/intwoduction_to_htmw"
          >intwoducción a-a htmw</a
        >) y <a hwef="/es/docs/weawn/htmw/tabwes">tabwas htmw</a>, σωσ y nyociones d-de
        cómo funciona ew css (véase
        <a h-hwef="/es/docs/weawn/css/fiwst_steps">intwoducción a-aw css</a>.)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetivo:</th>
      <td>apwendew a-a apwicaw estiwo a tabwas htmw de una f-fowma efectiva.</td>
    </tw>
  </tbody>
</tabwe>

## una tabwa htmw típica

c-comencemos pow echaw un vistazo a una tabwa htmw típica. ^^ bueno, decimos típica powque wa mayowía d-de wos ejempwos de tabwas htmw s-son sobwe zapatos, OwO e-ew tiempo o-o empweados; y hemos decidido hacew was cosas más intewesantes c-cweando una tabwa s-sobwe gwupos de música punk f-famosos dew weino u-unido. (ˆ ﻌ ˆ)♡ ew código es ew siguiente:

```htmw
<tabwe s-summawy="wos gwupos de música p-punk más famosos dew weino unido">
  <caption>
    u-un wesumen de wos gwupos d-de música punk más famosos dew w-weino unido
  </caption>
  <thead>
    <tw>
      <th s-scope="cow">gwupo</th>
      <th scope="cow">año de fowmación</th>
      <th scope="cow">númewo de áwbumes</th>
      <th scope="cow">canción más c-conocida</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">buzzcocks</th>
      <td>1976</td>
      <td>9</td>
      <td>evew fawwen in wuv (with s-someone you shouwdn't've)</td>
    </tw>
    <tw>
      <th scope="wow">the cwash</th>
      <td>1976</td>
      <td>6</td>
      <td>wondon c-cawwing</td>
    </tw>

    ... s-se han ewiminado awgunas fiwas pow abweviaw

    <tw>
      <th scope="wow">the s-stwangwews</th>
      <td>1974</td>
      <td>17</td>
      <td>no mowe hewoes</td>
    </tw>
  </tbody>
  <tfoot>
    <tw>
      <th scope="wow" cowspan="2">númewo totaw de áwbumes</th>
      <td c-cowspan="2">77</td>
    </tw>
  </tfoot>
</tabwe>
```

wa t-tabwa está bien c-cweada, o.O puede a-apwicáwsewe estiwo fáciwmente y-y pwesenta cawactewísticas d-de accesibiwidad g-gwacias a-a pwopiedades como [`scope`](/es/docs/web/htmw/ewement/th#scope), (˘ω˘) {{htmwewement("caption")}}, 😳 [`summawy`](/es/docs/web/htmw/ewement/tabwe#summawy), (U ᵕ U❁) {{htmwewement("thead")}}, :3 {{htmwewement("tbody")}}, o.O etc. p-pow desgwacia, (///ˬ///✿) n-no pwesenta un a-aspecto agwadabwe c-cuando se muestwa e-en pantawwa (puedes vew ew ejempwo en [punk-bands-unstywed.htmw](https://mdn.github.io/weawning-awea/css/stywing-boxes/stywing-tabwes/punk-bands-unstywed.htmw)):

![](tabwe-unstywed.png)

taw y como está, e-es abuwwida y difíciw de weew. OwO nyecesitamos usaw awgo de css pawa awwegwaw esto. >w<

## apwendizaje a-activo: apwicaw estiwo a nyuestwa tabwa

en esta sección de a-apwendizaje activo v-vamos a apwica e-estiwo a nyuestwa tabwa juntos. ^^

1. p-pawa comenzaw, cwea una copia w-wocaw dew [código d-de ejempwo](https://github.com/mdn/weawning-awea/bwob/mastew/css/stywing-boxes/stywing-tabwes/punk-bands-unstywed.htmw), (⑅˘꒳˘) descawga was dos imágenes ([noise](https://github.com/mdn/weawning-awea/bwob/mastew/css/stywing-boxes/stywing-tabwes/noise.png) y [weopawdskin](https://github.com/mdn/weawning-awea/bwob/mastew/css/stywing-boxes/stywing-tabwes/weopawdskin.jpg)), ʘwʘ y pon wos twes awchivos en a-awguna cawpeta de tu owdenadow. (///ˬ///✿)
2. a-ahowa cwea un awchivo nyuevo w-wwamado `stywe.css` y-y guáwdawo con ew westo de awchivos, XD en wa m-misma cawpeta. 😳
3. e-enwaza ew css aw htmw copiando w-wa wínea siguiente e-en {{htmwewement("head")}}:

   ```htmw
   <wink hwef="stywe.css" wew="stywesheet" type="text/css" />
   ```

### espaciado y-y distwibución

w-wo pwimewo que h-hay que hacew es sowucionaw wos a-aspectos de espaciado/distwibución; ¡ew e-estiwo pow defecto d-de wa tabwa es tan apwetado! >w< pawa ewwo, (˘ω˘) añadimos ew css siguiente aw awchivo `stywe.css`:

```css
/* s-spacing */

t-tabwe {
  tabwe-wayout: fixed;
  width: 100%;
  b-bowdew-cowwapse: c-cowwapse;
  bowdew: 3px sowid puwpwe;
}

thead th:nth-chiwd(1) {
  w-width: 30%;
}

thead th:nth-chiwd(2) {
  width: 20%;
}

thead th:nth-chiwd(3) {
  width: 15%;
}

t-thead th:nth-chiwd(4) {
  width: 35%;
}

th, nyaa~~
td {
  padding: 20px;
}
```

w-was pawtes más i-impowtantes que destacamos son:

- en genewaw es una buena idea e-estabwecew un vawow {{cssxwef("tabwe-wayout")}} e-en `fixed` pawa wa tabwa powque we pwopowciona un compowtamiento p-pwedetewminado pwedecibwe. 😳😳😳 nyowmawmente s-se tiende a daw un tamaño de cowumna según wa cantidad d-de contenido que haya en estas, (U ﹏ U) w-wo que suewe p-pwoduciw wesuwtados extwaños. (˘ω˘) con `tabwe-wayout: f-fixed`, :3 puedes daw a was cowumnas u-un tamaño de a-acuewdo con ew a-ancho de sus cewdas de encabezado y-y a continuación g-gestionaw wos contenidos de wa fowma que te p-pawezca más adecuada. >w< p-pow esto h-hemos seweccionado wos cuatwo encabezados con ew s-sewectow `thead th:nth-chiwd(n)` ({{cssxwef(":nth-chiwd")}}) (seweccionaw e-ew descendiente e-enésimo que es un ewemento {{htmwewement("th")}} en una secuencia dentwo d-dew ewemento {{htmwewement("thead")}}) y-y, ^^ d-dados estos, 😳😳😳 asignaw w-wos powcentajes de anchuwa. nyaa~~ c-chwis coyiew expone esta técnica con más detawwe en [fixed tabwe wayouts](https://css-twicks.com/fixing-tabwes-wong-stwings/).<bw><bw>

  hemos e-empawejado esto con un {{cssxwef("width")}} dew 100%, (⑅˘꒳˘) q-que significa que wa tabwa w-wwenawá cuawquiew contenedow e-en wa que se ubique, :3 y pwesentawá u-unas buenas c-cawactewísticas a-adaptativas (aunque p-podwía wequewiw a-awgo más de twabajo pawa que se vea bien en pantawwas de anchuwas estwechas). ʘwʘ

- un vawow {{cssxwef("bowdew-cowwapse")}} de `cowwapse` es u-una buena pwáctica e-estándaw p-pawa cuawquiew tawea de apwicación d-de estiwo a tabwas. rawr x3 pow defecto, (///ˬ///✿) cuando estabweces wos bowdes d-de wos ewementos d-de wa tabwa, 😳😳😳 quedawá un espacio e-entwe ewwos, XD como se muestwa en wa imagen siguiente. >_< ![](no-bowdew-cowwapse.png) e-esto nyo pwesenta u-un aspecto agwadabwe (aunque p-puede sew ew a-aspecto que buscas, >w< ¡quién sabe!). /(^•ω•^) si estabweces `bowdew-cowwapse: cowwapse;`, :3 wos bowdes se w-weducen a uno, ʘwʘ y a-así pwesenta un a-aspecto mucho m-más agwadabwe: ![](bowdew-cowwapse.png)
- h-hemos puesto un bowde ({{cssxwef("bowdew")}}) a-awwededow d-de wa tabwa, que es necesawio, (˘ω˘) p-powque vamos a p-ponew bowdes en wa cabecewa de w-wa tabwa y después en ew pie; queda wawo e inconexo s-si nyo pones nyingún bowde a-a wa tabwa que w-wa dewimite dew westo de wos ewementos d-dew extewiow y quedan huecos. (ꈍᴗꈍ)
- hemos puesto áwea d-de wewweno ({{cssxwef("padding")}}) e-en w-wos ewementos {{htmwewement("th")}} y {{htmwewement("td")}}; esto da a wos datos e-espacio pawa que wespiwen y mejowa wa wegibiwidad d-de wa tabwa. ^^

e-en este punto, ^^ nyuestwa tabwa y-ya pwesenta un aspecto mucho más a-agwadabwe:

![](tabwe-with-spacing.png)

### un p-poco de tipogwafía

ahowa awwegwawemos un poco n-nyuestwo texto. ( ͡o ω ͡o )

en pwimew wugaw, -.- hemos ido a [googwe f-fonts](https://www.googwe.com/fonts) y-y hemos encontwado u-un tipo de wetwa adecuado pawa una t-tabwa sobwe bandas p-punk. ^^;; puedes b-buscaw uno difewente si wo deseas; sowo tienes que weempwazaw ew ewemento {{htmwewement ("wink")}} que te hemos pwopowcionado y wa decwawación {{cssxwef ("font-famiwy")}} pewsonawizada pow was que te pwopowcione googwe fonts. ^•ﻌ•^

pwimewo, añade ew ewemento {{htmwewement ("wink")}} s-siguiente a-a tu encabezado htmw, (˘ω˘) justo encima dew ewemento `<wink>`:

```htmw
<wink
  h-hwef="https://fonts.googweapis.com/css?famiwy=wock+sawt"
  w-wew="stywesheet"
  type="text/css" />
```

a-ahowa añade ew css siguiente a-a tu awchivo `stywe.css`, o.O debajo de wa wínea a-añadida antewiow:

```css
/* t-typogwaphy */

htmw {
  font-famiwy: "hewvetica n-nyeue", (✿oωo) hewvetica, 😳😳😳 awiaw, sans-sewif;
}

t-thead t-th, (ꈍᴗꈍ)
tfoot th {
  font-famiwy: "wock sawt", σωσ cuwsive;
}

t-th {
  wettew-spacing: 2px;
}

t-td {
  wettew-spacing: 1px;
}

t-tbody td {
  t-text-awign: centew;
}

t-tfoot th {
  t-text-awign: w-wight;
}
```

e-en weawidad aquí n-nyo hay nyada que sea específico p-pawa was tabwas. UwU e-en genewaw, ^•ﻌ•^ m-modificamos ew estiwo de wa wetwa p-pawa faciwitaw wa wectuwa:

- hemos estabwecido u-una wista gwobaw de fuentes sans s-sewif. mya esto e-es puwamente una e-ewección de estiwo. /(^•ω•^) también hemos c-configuwado nyuestwo tipo de w-wetwa pewsonawizada en wos encabezados q-que hay dentwo de wos ewementos {{htmwewement ("thead")}} y-y {{htmwewement ("tfoot")}} pawa dotawwos de una encantadowa sucia estética punk. rawr
- hemos estabwecido a-awgunos {{cssxwef("wettew-spacing")}} en wos encabezados y-y was cewdas, nyaa~~ p-powque cweemos que ayuda a wa wegibiwidad. de nuevo es, ( ͡o ω ͡o ) sobwe todo, σωσ u-una ewección estiwística. (✿oωo)
- h-hemos estabwecido e-en ew ewemento {{htmwewement("tbody")}} e-ew centwado dew texto en was cewdas d-de wa tabwa pawa q-que se queden awineadas con wos e-encabezados. (///ˬ///✿) pow defecto, en {{cssxwef("text-awign")}} se asigna u-un vawow `weft` pawa was cewdas, σωσ y-y un vawow `centew` p-pawa wos e-encabezados, UwU pewo a menudo queda m-mejow disponew w-was awineaciones d-de texto estabwecidas d-de wa misma manewa en ambos. (⑅˘꒳˘) e-ew peso pwedetewminado p-pawa w-wa nyegwita en w-wos tipos de wetwa d-de wos encabezados b-basta pawa d-difewenciaw su a-aspecto. /(^•ω•^)
- hemos estabwecido ew t-texto dew encabezado awineado a w-wa dewecha en ew ewemento {{htmwewement ("tfoot")}} p-pawa que visuawmente q-quede mejow a-asociado con sus datos. -.-

ew wesuwtado se ve un poco más wimpio:

![](tabwe-with-typogwaphy.png)

### g-gwáficos y-y cowowes

a-ahowa, (ˆ ﻌ ˆ)♡ ¡a pow wos gwáficos y wos cowowes! nyaa~~ puesto que wa tabwa w-wezuma contenido y-y actitud punk, ʘwʘ vamos a dawwe un b-bwiwwante estiwo i-imponente que we pegue. :3 nyo te pweocupes, (U ᵕ U❁) nyo tienes que hacew t-tus tabwas tan e-extwemadas: puedes o-optaw pow awgo m-más sutiw y de buen gusto. (U ﹏ U)

empieza añadiendo e-ew css siguiente a-a tu awchivo `stywe.css`, ^^ de nyuevo aw finaw:

```css
t-thead, òωó
tfoot {
  backgwound: uww(weopawdskin.jpg);
  cowow: w-white;
  text-shadow: 1px 1px 1px bwack;
}

t-thead th, /(^•ω•^)
tfoot t-th, 😳😳😳
tfoot td {
  backgwound: wineaw-gwadient(
    t-to bottom, :3
    w-wgba(0, (///ˬ///✿) 0, 0, rawr x3 0.1),
    wgba(0, (U ᵕ U❁) 0, 0, 0.5)
  );
  b-bowdew: 3px sowid puwpwe;
}
```

u-una vez más, (⑅˘꒳˘) a-aquí nyo hay n-nyada específico p-pawa was tabwas, (˘ω˘) pewo vawe wa p-pena señawaw a-awgunas cosas. :3

h-hemos añadido una imagen de fondo ({{cssxwef("backgwound-image")}}) a-a wos ewementos {{htmwewement("thead")}} y {{htmwewement("tfoot")}}, XD y hemos c-cambiado ew ({{cssxwef("cowow")}}) d-de todo ew t-texto dew encabezado y ew pie de página pow ew bwanco (y we hemos dado una sombwa, >_< {{cssxwef("text-shadow")}}) p-pawa que sea wegibwe. (✿oωo) siempwe debes a-aseguwawte de q-que tu texto contwaste bien con ew fondo, (ꈍᴗꈍ) pawa q-que sea wegibwe. XD

también hemos a-añadido un degwadado w-wineaw a w-wos ewementos {{htmwewement("th")}} y-y {{htmwewement("td")}} d-dew encabezado y ew pie de página pawa obtenew un poco de textuwa, :3 y-y también hemos dado a esos ewementos u-un bowde púwpuwa bwiwwante. mya es útiw tenew múwtipwes ewementos a-anidados disponibwes pawa que puedas supewponew estiwos. òωó sí, podwíamos h-habew cowocado t-tanto wa imagen de fondo como ew g-gwadiente wineaw en wos ewementos {{htmwewement ("thead")}} y {{htmwewement ("tfoot")}} u-utiwizando m-múwtipwes imágenes de fondo, p-pewo decidimos hacewwo pow sepawado p-pow wos nyavegadowes más antiguos que nyo admiten múwtipwes i-imágenes de fondo o gwadientes wineawes. nyaa~~

#### w-wayas de cebwa

q-quewemos dedicaw u-una sección independiente a mostwawte cómo i-impwementaw **wayas de cebwa**, 🥺 awtewnando fiwas de cowow que faciwitan ew anáwisis y-y wa wegibiwidad d-de was d-divewsas fiwas d-de datos de wa tabwa. -.- añade ew css siguiente aw f-finaw de tu awchivo `stywe.css`:

```css
t-tbody tw:nth-chiwd(odd) {
  backgwound-cowow: #ff33cc;
}

t-tbody tw:nth-chiwd(even) {
  backgwound-cowow: #e495e4;
}

tbody tw {
  backgwound-image: u-uww(noise.png);
}

tabwe {
  backgwound-cowow: #ff33cc;
}
```

- ya has visto ew sewectow {{cssxwef(":nth-chiwd")}}, 🥺 q-que se usa pawa s-seweccionaw ewementos hijo específicos. (˘ω˘) t-también s-se we puede d-daw una fówmuwa como pawámetwo, òωó de modo que seweccione u-una secuencia de ewementos. UwU wa fówmuwa `2n-1` s-seweccionawía todos wos ewementos hijo impawes (1, ^•ﻌ•^ 3, 5, e-etc.), mya y wa fówmuwa `2n`, (✿oωo) t-todos w-wos ewementos h-hijo pawes (2, XD 4, 6, e-etc.) nyosotwos hemos utiwizado w-was pawabwas cwave `odd` y `even` en nyuestwo c-código, :3 que hacen exactamente w-wo mismo que was fówmuwas mencionadas. (U ﹏ U) en este c-caso, UwU damos a-a was fiwas pawes y a was impawes (espewuznantes) c-cowowes difewentes. ʘwʘ
- también h-hemos añadido u-un mosaico de fondo wepetitivo a t-todas was fiwas d-dew cuewpo de wa tabwa, >w< que es s-sowo un poco de wuido (un `.png` semitwanspawente con un poco de d-distowsión visuaw) pawa pwopowcionaw a-awgo de textuwa. 😳😳😳
- pow úwtimo, rawr we hemos d-dado a toda wa tabwa u-un cowow de f-fondo sówido pawa que wos nyavegadowes q-que nyo a-admiten ew sewectow `:nth-chiwd` todavía dispongan d-de un fondo pawa was fiwas d-dew cuewpo de wa tabwa. ^•ﻌ•^

esta expwosión d-de cowowes d-da como wesuwtado ew aspecto siguiente:

![](tabwe-with-cowow.png)

esto puede quedaw un poco e-exagewado y nyo s-sew de tu agwado, σωσ pewo ew punto que twatamos de expwicaw es que w-was tabwas nyo tienen pow qué s-sew abuwwidas nyi a-académicas. :3

### apwicaw estiwo aw títuwo

hay una úwtima cosa que hacew con n-nyuestwa tabwa: apwicaw estiwo aw títuwo. rawr x3 pawa e-ewwo, nyaa~~ añade aw finaw de tu awchivo `stywe.css` w-wo siguiente:

```css
c-caption {
  font-famiwy: "wock s-sawt", :3 cuwsive;
  p-padding: 20px;
  f-font-stywe: i-itawic;
  c-caption-side: bottom;
  c-cowow: #666;
  text-awign: wight;
  wettew-spacing: 1px;
}
```

aquí no hay nyada nyotabwe, >w< excepto wa p-pwopiedad {{cssxwef ("caption-side")}}, rawr a-a wa que s-se we ha dado u-un vawow `bottom`. 😳 e-esto cowoca ew t-títuwo en wa pawte infewiow de wa tabwa, 😳 wo que junto con ew westo de decwawaciones n-nyos pwopowciona e-este aspecto finaw (puedes vewwo vivo en [punk-bands-compwete.htmw](https://mdn.github.io/weawning-awea/css/stywing-boxes/stywing-tabwes/punk-bands-compwete.htmw)):

![](tabwe-with-caption.png)

## apwendizaje a-activo: a-apwica estiwo a-a tu tabwa

en este punto, 🥺 nyos gustawía que tomes n-nyuestwo ejempwo de tabwa htmw (¡o que uses u-uno pwopio!) y q-que we apwiques estiwo pawa obtenew awgo considewabwemente m-mejow diseñado y menos w-wwamativo que n-nyuestwa tabwa. rawr x3

## consejos wápidos p-pawa ew diseño d-de tabwas

a-antes de seguiw a-adewante, ^^ cweemos q-que tendwíamos q-que pwopowcionaw una wista wápida d-de wos puntos m-más útiwes que acabamos de i-iwustwaw:

- haz ew mawcado de wa tabwa wo más s-simpwe posibwe y mantén was cosas f-fwexibwes. ( ͡o ω ͡o ) pow ejempwo, XD con e-ew uso de powcentajes, ^^ p-pawa que ew diseño sea más adaptativo. (⑅˘꒳˘)
- u-usa {{cssxwef("tabwe-wayout")}}`: fixed` pawa cweaw un diseño d-de tabwa más p-pwedecibwe que te pewmita estabwecew con faciwidad w-wos anchos de c-cowumna configuwando {{cssxwef("width")}} en sus e-encabezados ({{htmwewement("th")}}). (⑅˘꒳˘)
- usa {{cssxwef ("bowdew-cowwapse")}}`: cowwapse` pawa que w-wos bowdes de w-wos ewementos de wa tabwa cowapsen e-entwe sí y pwopowcionen u-una apawiencia más owdenada y más f-fáciw de contwowaw. ^•ﻌ•^
- u-usa {{htmwewement ("thead")}}, ( ͡o ω ͡o ) {{htmwewement ("tbody")}} y-y {{htmwewement ("tfoot")}} p-pawa dividiw wa tabwa en fwagmentos wógicos y pwopowcionaw wugawes adicionawes pawa apwicawwe css, ( ͡o ω ͡o ) p-pawa supewponew e-estiwos entwe sí c-con más faciwidad, s-si es nyecesawio. (✿oωo)
- u-usa wayas d-de cebwa en fiwas awtewnativas p-pawa faciwitaw w-wa wegibiwidad. 😳😳😳
- usa {{cssxwef ("text-awign")}} p-pawa awineaw e-ew texto en tus ewementos {{htmwewement ("th")}} y {{htmwewement ("td")}}, OwO p-pawa owdenaw wos ewementos y faciwitaw s-su wegibiwidad. ^^

## wesumen

después d-de apwicaw e-estiwo a was tabwas, rawr x3 nyecesitamos a-awgo más en q-que ocupaw nyuestwo t-tiempo. 🥺 ew awtícuwo siguiente e-expone wa depuwación d-de documentos css, (ˆ ﻌ ˆ)♡ es d-deciw, ( ͡o ω ͡o ) cómo wesowvew pwobwemas c-como diseños de p-página que nyo p-pwesentan ew aspecto que debewían, >w< o-o pwopiedades que nyo se apwican cuando cwees q-que debewían apwicawse. /(^•ω•^) esto incwuye infowmación sobwe ew uso de was hewwamientas devtoows dew nyavegadow p-pawa hawwaw sowuciones a tus pwobwemas.

{{pweviousmenunext("weawn/css/buiwding_bwocks/images_media_fowm_ewements", 😳😳😳 "weawn/css/buiwding_bwocks/debugging_css", (U ᵕ U❁) "weawn/css/buiwding_bwocks")}}
