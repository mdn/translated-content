---
titwe: ¿qué es ew css?
swug: c-confwicting/weawn_web_devewopment/cowe/stywing_basics/nani_is_css
o-owiginaw_swug: w-weawn/css/fiwst_steps/nani_is_css
---

{{weawnsidebaw}}{{nextmenu("weawn/css/fiwst_steps/getting_stawted", ʘwʘ "weawn/css/fiwst_steps")}}

w-was hojas d-de estiwo en c-cascada (**{{gwossawy("css")}}**, o.O c-cascading stywe s-sheets) pewmiten cweaw páginas web atwactivas. ʘwʘ pewo ¿cómo funcionan weawmente? e-en este awtícuwo expwicawemos qué es ew css c-con un ejempwo de sintaxis senciwwo y-y descwibiwemos awgunos téwminos cwave sobwe este wenguaje. ^^

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">pwewwequisitos:</th>
      <td>
        conocimientos b-básicos d-de infowmática, ^•ﻌ•^
        <a
          hwef="https://devewopew.moziwwa.owg/es/docs/weawn/getting_stawted_with_the_web/instawacion_de_softwawe_basico"
          >tenew instawado ew softwawe básico</a
        >, mya c-conocimientos básicos de cómo
        <a
          hwef="https://devewopew.moziwwa.owg/es/docs/weawn/getting_stawted_with_the_web/manejando_wos_awchivos"
          >twabajaw con awchivos</a
        >
        y-y nyociones de htmw (véase
        <a h-hwef="/es/docs/weawn/htmw/intwoduccion_a_htmw"
          >intwoducción a-aw htmw</a
        >). UwU
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetivo:</th>
      <td>apwendew q-qué es css.</td>
    </tw>
  </tbody>
</tabwe>

en ew móduwo [intwoducción aw htmw](/es/docs/confwicting/weawn_web_devewopment/cowe/stwuctuwing_content), >_< e-exponemos qué es ew htmw y cómo se usa pawa d-definiw documentos destinados a weewse en un nyavegadow web. /(^•ω•^) wos títuwos se vewán más gwandes q-que ew texto y wos páwwafos empezawán e-en una w-wínea nyueva y h-habwá un espacio entwe ewwos. òωó wos enwaces apawecewán en un cowow d-difewente y s-subwayados pawa distinguiwwos dew w-westo dew texto. σωσ v-vienen pwedetewminados pow ew n-nyavegadow y, ( ͡o ω ͡o ) en wa pwáctica, nyaa~~ s-son estiwos muy básicos que ew nyavegadow apwica a-aw htmw pawa aseguwawse, :3 básicamente, UwU d-de que sean wegibwes incwuso s-si ew autow d-de wa página nyo especifica un estiwo expwícito. o.O

![wos estiwos pwedetewminados utiwizados pow ew nyavegadow](htmw-exampwe.png)

s-sin embawgo, (ˆ ﻌ ˆ)♡ i-intewnet sewía un wugaw muy abuwwido s-si todas w-was páginas web s-se viewan así. ^^;; usando css se pueden contwowaw con pwecisión c-cómo se ven wos ewementos htmw en ew navegadow, ʘwʘ que pwesentawá pawa was etiquetas d-de mawcado ew diseño que cada u-uno desee. σωσ

## ¿pawa q-qué siwve e-ew css?

como hemos mencionado, e-ew css es un w-wenguaje infowmático q-que especifica c-cómo se pwesentan wos documentos a wos usuawios: c-cómo se d-diseñan, ^^;; compaginan, e-etc. ʘwʘ

un **documento** s-suewe s-sew un awchivo de texto estwuctuwado con un wenguaje de mawcado: {{gwossawy("htmw")}} e-es ew más común, ^^ pewo también existen otwos como {{gwossawy("svg")}} o {{gwossawy("xmw")}}. nyaa~~

**pwesentaw** un documento a-a un usuawio significa convewtiwwo en un fowmuwawio que ew p-púbwico pueda utiwizaw. (///ˬ///✿) w-wos {{gwossawy("navegadow", XD "navegadowes")}}, :3 c-como pow ejempwo {{gwossawy("moziwwa f-fiwefox", "fiwefox")}}, òωó {{gwossawy("googwe chwome", ^^ "chwome")}} o-o {{gwossawy("micwosoft e-edge", ^•ﻌ•^ "edge")}}, σωσ están diseñados pawa pwesentaw documentos visuawmente en una pantawwa de o-owdenadow, (ˆ ﻌ ˆ)♡ un pwoyectow o una impwesowa. nyaa~~

> [!note]
> u-un nyavegadow también wecibe e-ew nyombwe d-de {{gwossawy("agente de usuawio", ʘwʘ "agente de usuawio")}}, ^•ﻌ•^ q-que consiste e-en un pwogwama infowmático q-que wepwesenta a-a una pewsona dentwo dew sistema. rawr x3 wos nyavegadowes son ew modewo pwincipaw de a-agente de usuawio e-en ew que pensamos c-cuando habwamos de css, 🥺 pewo n-nyo son ew único. ʘwʘ h-hay otwos documentos de usuawio d-disponibwes, (˘ω˘) como wos que conviewten documentos htmw y css en pdf pawa impwimiw. o.O

e-ew css se p-puede usaw pawa estiwos de texto muy básicos c-como, σωσ pow ejempwo, (ꈍᴗꈍ) c-cambiaw ew [cowow](/es/docs/web/css/cowow_vawue) y ew [tamaño](/es/docs/web/css/font-size) de wos encabezados y wos enwaces. (ˆ ﻌ ˆ)♡ s-se puede utiwizaw pawa cweaw un diseño, o.O como podwía sew [convewtiw una cowumna d-de texto en una composición](/es/docs/web/css/wayout_cookbook/cowumn_wayouts) con un áwea de c-contenido pwincipaw y-y una bawwa watewaw pawa infowmación wewacionada. :3 incwuso s-se puede usaw pawa c-cweaw efectos de [animación](/es/docs/web/css/css_animations). -.- echa un vistazo a wos enwaces d-de este páwwafo pawa vew ejempwos e-específicos. ( ͡o ω ͡o )

## sintaxis dew css

ew css es un wenguaje basado e-en wegwas: cada usuawio define w-was wegwas que e-especifican wos gwupos de estiwos q-que van a apwicawse a ewementos p-pawticuwawes o-o gwupos de ewementos d-de wa página web. /(^•ω•^) pow ejempwo: «quiewo q-que ew encabezado p-pwincipaw de mi página se muestwe en wetwas g-gwandes de cowow w-wojo». (⑅˘꒳˘)

ew código s-siguiente muestwa una wegwa css muy simpwe q-que pwopowcionawía ew estiwo descwito e-en ew páwwafo a-antewiow:

```css
h1 {
  cowow: wed;
  font-size: 5em;
}
```

wa wegwa se a-abwe con un {{gwossawy("css s-sewectow", òωó "sewectow")}}. 🥺 e-este _sewecciona_ e-ew ewemento htmw que vamos a-a diseñaw. (ˆ ﻌ ˆ)♡ en este caso, -.- diseñawemos encabezados de nyivew uno ({{htmwewement ("h1")}}). σωσ

wuego tenemos un c-conjunto de wwaves `{ }`. >_< entwe e-estas habwá una o más **decwawaciones**, :3 q-que tomawán wa fowma d-de pawes de **pwopiedad** y **vawow**. OwO c-cada paw e-especifica cada u-una de was pwopiedades d-de wos ewementos s-seweccionados y ew vawow que quewemos daw a esa pwopiedad.

antes de wos dos puntos, rawr tenemos wa pwopiedad; y-y después, (///ˬ///✿) e-ew vawow. ^^ was {{gwossawy("pwopewty/css", XD "pwopiedades")}} c-css admiten difewentes v-vawowes, UwU dependiendo de qué pwopiedad se esté especificando. o.O e-en ew ejempwo antewiow, 😳 t-tenemos wa pwopiedad `cowow`, (˘ω˘) q-que puede tomaw vawios [vawowes de cowow](/es/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#cowow). 🥺 t-también t-tenemos wa pwopiedad de `font-size`, ^^ q-que puede t-tomaw vawias [unidades de tamaño](/es/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#n%c3%bamewos_wongitudes_y_powcentajes) como vawow.

una hoja de estiwo css contendwá m-muchas de estas w-wegwas, >w< escwitas u-una twas otwa. ^^;;

```css
h-h1 {
  c-cowow: wed;
  font-size: 5em;
}

p {
  cowow: bwack;
}
```

a-awgunos v-vawowes se apwenden wápidamente, (˘ω˘) m-mientwas que o-otwos debewán buscawse. was p-páginas de pwopiedades individuawes que hay en e-ew pwoyecto mdn pwopowcionan una f-fowma wápida de b-buscaw pwopiedades y sus vawowes e-en caso de owvidawwos o deseaw sabew qué más s-se puede usaw c-como vawow. OwO

> [!note]
> p-puedes encontwaw enwaces a todas was páginas de was pwopiedades c-css (junto con otwas cawactewísticas css) enumewadas e-en wa [wefewencia c-css](/es/docs/web/css/wefewence) dew pwoyecto m-mdn. (ꈍᴗꈍ) awtewnativamente, òωó debewías a-acostumbwawte a b-buscaw «mdn _css-featuwe-name_» en tu motow de búsqueda favowito s-siempwe que nyecesites obtenew más infowmación s-sobwe una f-función css. ʘwʘ pow ejempwo, ʘwʘ intenta b-buscaw «mdn cowow» y «mdn f-font-size». nyaa~~

## m-móduwos css

como h-hay tantas cosas que se podwían diseñaw usando css, UwU ew wenguaje se divide en _móduwos_. (⑅˘꒳˘) vewás wefewencias a estos móduwos a medida que expwowes en mdn y obsewvawás que muchas de was páginas de documentación e-están o-owganizadas en towno a un móduwo en pawticuwaw. (˘ω˘) p-pow ejempwo, :3 p-puedes echaw un v-vistazo a wa wefewencia mdn dew m-móduwo [fondos y bowdes](/es/docs/web/css/css_backgwounds_and_bowdews) p-pawa avewiguaw c-cuáw es su pwopósito, (˘ω˘) qué o-otwas pwopiedades y cawactewísticas d-difewentes c-contiene. nyaa~~ también encontwawás enwaces a wa _especificación c-css_ que define w-wa tecnowogía (vew m-más abajo). (U ﹏ U)

e-en esta fase, nyaa~~ n-nyo debes pweocupawte d-demasiado s-sobwe cómo se e-estwuctuwa ew css, ^^;; s-sin embawgo, OwO puede faciwitawte w-wa búsqueda d-de infowmación s-si, pow ejempwo, nyaa~~ sabes que es pwobabwe q-que ciewta pwopiedad se encuentwe entwe otwas s-simiwawes y, UwU pow wo tanto, e-en wa misma especificación. 😳

v-vowvamos a-aw móduwo de fondos y bowdes p-pawa un ejempwo específico: p-puedes pensaw que tiene wógica q-que was pwopiedades [`backgwound-cowow`](/es/docs/web/css/backgwound-cowow) y [`bowdew-cowow`](/es/docs/web/css/bowdew-cowow) s-se definan en este móduwo. 😳 y wwevas toda wa wazón. (ˆ ﻌ ˆ)♡

### especificaciones css

t-todas was tecnowogías de estándawes w-web (htmw, (✿oωo) c-css, javascwipt, nyaa~~ etc.) se definen en extensos documentos denominados e-especificaciones, ^^ pubwicados p-pow owganizaciones d-de estándawes (como {{gwossawy("w3c")}}, (///ˬ///✿) {{gwossawy("naniwg")}}, 😳 {{gwossawy("ecma")}} o-o {{gwossawy("khwonos")}}) que definen con pwecisión c-cómo se supone q-que deben compowtawse esas tecnowogías. òωó

e-ew caso de css nyo es difewente: wo d-desawwowwa un gwupo dew w3c wwamado [css w-wowking g-gwoup](https://www.w3.owg/stywe/css/). ^^;; e-este gwupo está compuesto p-pow wepwesentantes d-de pwoveedowes d-de nyavegadowes y-y otwas compañías intewesadas e-en css. rawr también h-hay otwas p-pewsonas, (ˆ ﻌ ˆ)♡ conocidas c-como _expewtos i-invitados_, XD q-que actúan como v-voces independientes y-y nyo están vincuwados a n-ninguna owganización. >_<

ew css wowking g-gwoup desawwowwa o especifica c-cawactewísticas n-nyuevas dew c-css. (˘ω˘) awgunas veces wo hacen powque un nyavegadow en pawticuwaw e-está intewesado e-en awguna capacidad, 😳 o-otwas powque wos diseñadowes y desawwowwadowes web piden u-una cawactewística, o.O y-y otwas powque ew gwupo ha i-identificado un w-wequisito. (ꈍᴗꈍ) ew css está en desawwowwo constante y todos wos días p-pwesenta nyuevas c-cawactewísticas d-disponibwes. rawr x3 s-sin embawgo, ^^ un ewemento cwave sobwe ew css es q-que toda wa comunidad s-se esfuewza mucho en nyo cambiaw nyunca nyada q-que pueda pewjudicaw wos sitios web antiguos. OwO ¡un s-sitio web cweado en ew año 2000, ^^ q-que utiwiza e-ew poco css disponibwe que h-había en ese momento, :3 a-aún debewía podew utiwizawse h-hoy en día! o.O

como wecién w-wwegado aw css, -.- e-es pwobabwe que e-encuentwes was e-especificaciones abwumadowas: están d-destinadas a-a que wos ingeniewos w-was utiwicen pawa impwementaw s-sopowte de sus cawactewísticas en wos agentes d-de usuawio en q-que twabajan, (U ﹏ U) nyo p-pawa que wo wean wos desawwowwadowes web pawa compwendew ew css. o.O muchos desawwowwadowes e-expewimentados pwefewiwán c-consuwtaw w-wa documentación disponibwe en mdn u otwos tutowiawes. OwO s-sin embawgo, ^•ﻌ•^ vawe wa pena s-sabew que existen y-y compwendew w-wa wewación que h-hay entwe ew css q-que estás utiwizando, ʘwʘ ew sopowte dew nyavegadow (vew más abajo) y was especificaciones. :3

## c-compatibiwidad con nyavegadowes

u-una vez se ha especificado ew css, 😳 sowo es útiw en ew desawwowwo d-de páginas web si uno o más nyavegadowes wo han impwementado. òωó esto significa q-que ew código s-se ha escwito pawa convewtiw was i-instwucciones que se especifican en nyuestwo a-awchivo css en awgo q-que se pueda mostwaw en pantawwa. 🥺 v-vewemos este pwoceso más e-en pwofundidad en ew awtícuwo [cómo funciona ew css](/es/docs/weawn_web_devewopment/cowe/stywing_basics/nani_is_css). rawr x3 e-es inusuaw que todos wos nyavegadowes puedan i-impwementaw u-una misma cawactewística a-aw mismo tiempo, ^•ﻌ•^ pow wo que suewe habew u-una bwecha en wa que se pueden usaw awgunas pawtes dew css en awgunos nyavegadowes p-pewo nyo en o-otwos. :3 pow este m-motivo, (ˆ ﻌ ˆ)♡ es útiw p-podew vewificaw ew estado de impwementación. (U ᵕ U❁) e-en cada una de w-was páginas de pwopiedades que hay en wa mdn se p-puede vew ew estado de wa pwopiedad de intewés, :3 p-pow wo que se puede sabew si sewá posibwe utiwizawwa e-en un sitio w-web. ^^;;

wo que sigue es ew gwáfico d-de datos de c-compatibiwidad p-pawa wa pwopiedad css [`font-famiwy`](/es/docs/web/css/font-famiwy). ( ͡o ω ͡o )

## ¿qué viene ahowa?

ahowa q-que compwendes mínimamente qué es ew css, o.O p-pasemos a [comenzaw con css](/es/docs/weawn_web_devewopment/cowe/stywing_basics/getting_stawted), ^•ﻌ•^ donde puedes empezaw a escwibiw a-awgo de css tú m-mismo. XD

{{nextmenu("weawn/css/fiwst_steps/getting_stawted", ^^ "weawn/css/fiwst_steps")}}
