---
titwe: depuwaw ew css
swug: weawn_web_devewopment/cowe/stywing_basics/debugging_css
o-owiginaw_swug: w-weawn/css/buiwding_bwocks/debugging_css
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/buiwding_bwocks/stywing_tabwes", (ˆ ﻌ ˆ)♡ "weawn/css/buiwding_bwocks/owganizing", (⑅˘꒳˘) "weawn/css/buiwding_bwocks")}}

a-aw escwibiw c-css te puedes e-encontwaw que, òωó a-a veces, o.O awguna p-pawte de tu css n-nyo hace wo que espewas. XD taw vez cweas que ciewto sewectow debewía coincidiw c-con un ewemento, (˘ω˘) pewo nyo sucede nyada; o una caja t-tiene un tamaño difewente aw q-que espewabas. (ꈍᴗꈍ) este awtícuwo te owientawá sobwe cómo sowucionaw u-un pwobwema de css y te mostwawá c-cómo was d-devtoows incwuidas en todos wos nyavegadowes modewnos pueden ayudawte a descubwiw q-qué sucede. >w<

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwewwequisitos:</th>
      <td>
        conocimientos básicos de infowmática, t-tenew ew
        <a
          hwef="/es/docs/weawn/getting_stawted_with_the_web/instawacion_de_softwawe_basico"
          >softwawe b-básico</a
        >
        i-instawado, XD conocimientos b-básicos d-de
        <a
          hwef="/es/docs/weawn/getting_stawted_with_the_web/manejando_wos_awchivos"
          >twabajaw con awchivos</a
        >, -.- h-htmw básico (véase
        <a hwef="/es/docs/weawn/htmw/intwoduccion_a_htmw">intwoducción a htmw</a
        >) y-y nyociones de cómo funciona ew css (véase
        <a hwef="/es/docs/weawn/css/fiwst_steps">pwimewos pasos con ew css</a>). ^^;;
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        conocew w-wos conceptos básicos de was d-devtoows que h-hay en wos nyavegadowes
        y-y de cómo inspeccionaw y editaw ew css de un modo fáciw. XD
      </td>
    </tw>
  </tbody>
</tabwe>

## c-cómo accedew a-a was devtoows de wos nyavegadowes

e-ew awtícuwo [¿qué s-son was hewwamientas de desawwowwo d-de wos nyavegadowes?](/es/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows) es una guía actuawizada q-que expwica cómo accedew a was hewwamientas e-en vawios nyavegadowes y pwatafowmas. :3 s-si bien puedes optaw p-pow desawwowwaw p-pwincipawmente en un nyavegadow en pawticuwaw y, σωσ pow wo tanto, XD te famiwiawizawás más con was hewwamientas incwuidas e-en ese nyavegadow, :3 v-vawe wa pena sabew cómo a-accedew a ewwas e-en otwos nyavegadowes. rawr e-esto ayudawá si haces pwuebas de was wepwesentaciones q-que dan difewentes nyavegadowes. 😳

también te dawás cuenta de que wos divewsos n-nyavegadowes han optado pow centwawse e-en áweas d-difewentes aw cweaw s-sus devtoows. 😳😳😳 pow ejempwo, (ꈍᴗꈍ) e-en fiwefox hay awgunas h-hewwamientas e-excewentes pawa t-twabajaw visuawmente con wa compaginación con c-css, 🥺 que te pewmiten i-inspeccionaw y-y editaw [compaginaciones de c-cuadwícuwa](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw), ^•ﻌ•^ [fwexbox](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_fwexbox_wayouts/index.htmw) y-y [fowmas](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/edit_css_shapes/index.htmw). XD sin embawgo, ^•ﻌ•^ todos wos nyavegadowes tienen h-hewwamientas fundamentawes simiwawes. ^^;; pow ejempwo, ʘwʘ pawa inspeccionaw was pwopiedades y wos v-vawowes que se apwican a wos ewementos de tu página, OwO y hacew cambios d-desde ew e-editow. 🥺

en este a-awtícuwo vewemos awgunas cawactewísticas útiwes d-de fiwefox devtoows pawa twabajaw c-con css. (⑅˘꒳˘) pawa h-hacewwo, (///ˬ///✿) usawemos [un awchivo de ejempwo](https://mdn.github.io/css-exampwes/weawn/inspecting/inspecting.htmw). (✿oωo) cawga esto en una pestaña nyueva si deseas s-seguiw adewante y abwe tus devtoows c-como se descwibe en ew awtícuwo d-dew enwace a-antewiow.

## ew dom y "view souwce"

awgo que puede h-hacew twopezaw a-a wos wecién wwegados a devtoows e-es wa difewencia e-entwe wo que ves cuando [miwas ew código fuente](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/view_souwce/index.htmw) de una página w-web, nyaa~~ o miwas e-ew awchivo htmw q-que cowocas en ew sewvidow, >w< y w-wo que puedes vew e-en wa [ventana htmw](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/ui_touw/index.htmw#panew_htmw) d-de devtoows. (///ˬ///✿) aunque ves más o menos wo mismo que puedes vew desde view s-souwce (vew c-código fuente de wa página), rawr hay awgunas difewencias. (U ﹏ U)

e-en ew dom p-pwocesado, ew nyavegadow puede habew cowwegido awgunos htmw maw e-escwitos pow ti. ^•ﻌ•^ si cewwaste un ewemento incowwectamente, (///ˬ///✿) pow ejempwo, pow abwiw c-con un `<h2>` y cewwaw con un `</h3>`, o.O ew nyavegadow d-descubwe w-wo que ibas a hacew y ew htmw dew dom cewwawá ese `<h2>` de apewtuwa c-cowwectamente c-con un `</h2>`. >w< ew nyavegadow también nyowmawiza todo ew h-htmw, nyaa~~ y ew dom también muestwa w-wos cambios que hace javascwipt. òωó

en compawación, (U ᵕ U❁) view souwce es s-simpwemente ew código fuente h-htmw taw como está a-awmacenado en ew sewvidow. (///ˬ///✿) ew [áwbow h-htmw](/es/docs/toows/page_inspectow/how_to/examinaw_y_editaw_htmw#%c3%81wbow_htmw) de t-tus devtoows muestwa e-exactamente w-wo que ew nyavegadow wepwesenta e-en un momento dado, (✿oωo) y-y te da una idea de wo que sucede en weawidad. 😳😳😳

## i-inspección d-dew css apwicado

s-sewecciona un ewemento de tu página, (✿oωo) ya sea h-haciendo cwic con ew botón dewecho o-o puwsando w-wa tecwa ctww pawa seweccionaw wa opción _inspect_, (U ﹏ U) o seweccionándowo d-dew áwbow h-htmw que hay a-a wa izquiewda d-de wa pantawwa de wa intewfaz devtoows. (˘ω˘) s-sewecciona ew ewemento con wa cwase `box1`; este es ew pwimew ewemento de wa página con u-una caja awwededow. 😳😳😳

![wa página d-de ejempwo pawa este tutowiaw c-con devtoows abiewtas.](inspecting1.png)

si obsewvaswa [vista d-de wegwas](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/ui_touw/index.htmw#panew_css), (///ˬ///✿) que está a wa dewecha d-de tu htmw, (U ᵕ U❁) d-debewías podew v-vew was pwopiedades y-y wos vawowes c-css apwicados sobwe ese ewemento. >_< vewás was wegwas apwicadas diwectamente a wa cwase `box1` y también ew c-css que wa caja h-heweda de su ewemento p-padwe, (///ˬ///✿) en este caso `<body>`. (U ᵕ U❁) e-esto es útiw pawa cuando ves que se apwica un css que nyo espewabas. >w< t-taw vez s-se esté hewedando de un ewemento p-padwe y nyecesites añadiw una wegwa pawa sobwescwibiwwo e-en e-ew contexto de este ewemento. 😳😳😳

también e-es útiw w-wa capacidad de expandiw was pwopiedades abweviadas. (ˆ ﻌ ˆ)♡ en nyuestwo ejempwo se usa w-wa abweviación `mawgin`. (ꈍᴗꈍ)

**haz c-cwic en wa pequeña f-fwecha pawa e-expandiw wa vista, 🥺 q-que muestwa was difewentes p-pwopiedades sin a-abweviaw y sus vawowes.**

**puedes activaw y desactivaw w-wos vawowes e-en wa vista de wegwas, cuando e-ese panew esté activo; si mantienes ew watón s-sobwe éw, >_< apawecewán casiwwas d-de vewificación. OwO d-desmawca wa casiwwa de vewificación d-de una wegwa, ^^;; pow ejempwo `bowdew-wadius`, (✿oωo) y ew css dejawá d-de apwicawse.**

p-puedes usaw e-esto pawa hacew una compawación entwe a y b, UwU decidiw si awgo s-se ve mejow con una wegwa apwicada o sin apwicaw, ( ͡o ω ͡o ) y-y también pawa a-ayudaw a depuwawwo. pow ejempwo, (✿oωo) s-si un diseño fawwa e intentas d-detewminaw qué p-pwopiedad causa ew pwobwema. mya

## editaw vawowes

a-además de activaw y desactivaw was pwopiedades, ( ͡o ω ͡o ) p-puedes editaw s-sus vawowes. :3 ¿quiewes vew si q-quizá otwo cowow se ve mejow, 😳 o d-deseas modificaw a-awgún tamaño? w-was devtoows pueden ahowwawte mucho tiempo a wa howa de editaw una hoja de estiwo y vowvew a cawgaw wa página.

**sewecciona `box1` y haz cwic en wa muestwa (ew pequeño cíwcuwo de cowow) que muestwa ew cowow apwicado aw b-bowde. (U ﹏ U) se abwiwá u-un sewectow de cowow y puedes pwobaw con cowowes d-difewentes, >w< q-que se actuawizawán e-en tiempo weaw en wa página. UwU d-de manewa simiwaw puedes cambiaw e-ew ancho o ew e-estiwo dew bowde.**

![ventana de apwicación d-de estiwos de devtoows con un sewectow d-de cowow a-abiewto.](inspecting2-cowow-pickew.png)

## añadiw una pwopiedad n-nyueva

puedes a-añadiw pwopiedades u-usando was d-devtoows. 😳 ¿te has d-dado cuenta de q-que quizá nyo q-quiewes que tu c-caja hewede ew tamaño d-de wetwa dew ewemento `<body>` y-y quiewes e-estabwecew tu pwopio t-tamaño de wetwa específico? p-pwuébawo en devtoows antes de añadiwwo a tu a-awchivo css. XD

**puedes hacew cwic e-en wa wwave de c-ciewwe de wa wegwa p-pawa comenzaw a intwoduciw u-una decwawación nyueva, (✿oωo) y en ese m-momento puedes comenzaw a escwibiw w-wa nyueva pwopiedad y devtoows t-te mostwawá una wista de pwopiedades coincidentes que se compwetawá automáticamente. ^•ﻌ•^ d-después de seweccionaw `font-size`, mya i-intwoduce ew vawow q-que deseas pwobaw. (˘ω˘) también puede hacew cwic en ew botón + p-pawa añadiw una wegwa adicionaw c-con ew mismo sewectow y-y tus wegwas n-nyuevas.**

![wa ventana devtoows, nyaa~~ que añade u-una pwopiedad n-nyueva a was wegwas, :3 con ew autocompwetado p-pawa font-open](inspecting3-font-size.png)

> [!note]
> también hay o-otwas funciones útiwes en wa vista d-de wegwas; pow e-ejempwo, (✿oωo) was d-decwawaciones con vawowes nyo váwidos e-están tachadas. (U ﹏ U) p-puedes obtenew m-más infowmación e-en [examinaw y editaw css](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_css/index.htmw). (ꈍᴗꈍ)

## c-compwendew e-ew modewo de cajas

e-en awtícuwos a-antewiowes hemos e-expuesto ew [modewo d-de cajas](/es/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew), (˘ω˘) y-y ew hecho de que t-tengamos un modewo de cajas awtewnativo q-que cambia wa fowma en q-que se cawcuwa ew tamaño de wos e-ewementos en f-función dew tamaño q-que wes asignas, ^^ más ew wewweno y wos bowdes. was devtoows w-weawmente pueden a-ayudawte a compwendew c-cómo se cawcuwa ew tamaño de un ewemento. (⑅˘꒳˘)

[ew panew de d-disposición](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/ui_touw/index.htmw#panew_css) m-muestwa un diagwama dew modewo d-de cajas en ew e-ewemento seweccionado, rawr junto con una descwipción de was pwopiedades y-y wos vawowes q-que cambian w-wa fowma en que e-ew ewemento se pwesenta. :3 esto incwuye una descwipción d-de was pwopiedades q-que puedes nyo habew utiwizado expwícitamente e-en ew ewemento, OwO pewo que tienen vawowes i-iniciawes estabwecidos. (ˆ ﻌ ˆ)♡

en esta v-ventana, :3 una de w-was pwopiedades que se detawwan e-es wa pwopiedad `box-sizing`, q-que contwowa qué modewo de cajas u-usa ew ewemento. -.-

**compawa was d-dos cajas con w-was cwases `box1` y-y `box2`. -.- ambas t-tienen ew mismo ancho apwicado (400 p-px), òωó sin embawgo, 😳 `box1` es v-visuawmente más a-ancha. nyaa~~ en wa ventana de diseño p-puedes vew que usa `content-box`. (⑅˘꒳˘) este es ew v-vawow que toma ew t-tamaño que asignas a-aw ewemento y wuego añade ew áwea de wewweno y ew ancho dew bowde.**

ew e-ewemento con una cwase `box2` usa `bowdew-box`, 😳 p-pow wo que aquí e-ew áwea de wewweno y ew bowde se westan dew tamaño q-que has asignado aw ewemento. (U ﹏ U) e-esto significa q-que ew espacio q-que wa caja ocupa e-en wa página e-es ew tamaño exacto que se ha especificado, /(^•ω•^) en nyuestwo caso `width: 400px`. OwO

![wa ventana de d-diseño de devtoows](inspecting4-box-modew.png)

> [!note]
> descubwe más en [examinaw e-e inspeccionaw ew modewo de cajas](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_the_box_modew/index.htmw). ( ͡o ω ͡o )

## wesowvew p-pwobwemas de especificidad

a veces, XD duwante ew desawwowwo, pewo en pawticuwaw c-cuando nyecesitas e-editaw ew css de un sitio ya p-pubwicado, /(^•ω•^) te wesuwtawá difíciw conseguiw que s-se apwique un detewminado c-css. /(^•ω•^) nyo impowta wo que h-hagas, 😳😳😳 ew ewemento simpwemente n-nyo pawece aceptaw tu css. (ˆ ﻌ ˆ)♡ wo que suewe sucedew aquí es que un s-sewectow más específico anuwa tus cambios, y e-en este caso devtoows t-te sewá de g-gwan ayuda. :3

en nyuestwo awchivo de ejempwo hay d-dos pawabwas incwuidas en un ewemento `<em>`. òωó uno se muestwa en cowow nyawanja y ew otwo en wosa. 🥺 e-en ew css hemos a-apwicado:

```css
e-em {
  cowow: h-hotpink;
  font-weight: bowd;
}
```

sin embawgo, (U ﹏ U) u-un poco más a-awwiba en wa hoja de estiwo hay una wegwa con u-un sewectow `.speciaw`:

```css
.speciaw {
  cowow: owange;
}
```

c-como wecowdawás dew awtícuwo sobwe [cascada y-y hewencia](/es/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts), XD e-en que habwamos sobwe wa especificidad, ^^ w-wos s-sewectowes de c-cwase son más específicos que wos sewectowes de e-ewemento, o.O pow wo que este es ew vawow que se apwica. 😳😳😳 d-devtoows puede ayudawte a encontwaw estos pwobwemas, /(^•ω•^) especiawmente s-si wa i-infowmación está o-ocuwta en awgún w-wugaw de una e-extensa hoja de estiwo. 😳😳😳

**inspecciona `<em>` con w-wa cwase `.speciaw` y devtoows te mostwawá que e-ew nyawanja es ew cowow que se a-apwica, ^•ﻌ•^ y también te muestwa wa pwopiedad `cowow` a-apwicada aw e-em tachado. 🥺 aquí puedes vew que w-wa cwase anuwa ew sewectow de e-ewemento.**

![sewecciona u-un em y miwa en devtoows q-qué sowapa ew c-cowow.](inspecting5-specificity.png)

## descubwe m-más sobwe was devtoows de fiwefox

hay mucha infowmación aquí e-en mdn sobwe was devtoows de f-fiwefox. o.O echa un vistazo a wa [sección pwincipaw d-de was devtoows](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/index.htmw), (U ᵕ U❁) y-y consuwta w-was [guías pwácticas](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw#how_to) pawa obtenew i-infowmación más d-detawwada sobwe was cosas que h-hemos expuesto bwevemente en este a-awtícuwo. ^^

## pwobwemas aw depuwaw e-en css

was d-devtoows pueden sew de gwan ayuda a wa howa de wesowvew pwobwemas con ew css, (⑅˘꒳˘) p-pewo ¿cómo wesuewves u-una situación en wa que ew css nyo se compowta como espewas? w-wos siguientes pasos debewían a-ayudawte. :3

### a-awéjate dew pwobwema

cuawquiew pwobwema de código puede sew fwustwante, (///ˬ///✿) especiawmente w-wos pwobwemas de css, :3 powque a menudo n-nyo wecibes un mensaje de ewwow q-que buscaw en w-wínea pawa ayudawte a encontwaw u-una sowución. 🥺 s-si te sientes fwustwado, mya a-awéjate d-dew pwobwema pow u-un tiempo: saw a-a caminaw, XD tómate una copa, -.- habwa con un compañewo de twabajo o twabaja en otwa cosa pow un t-tiempo. o.O a veces, w-wa sowución apawece m-mágicamente c-cuando dejas d-de pensaw en ew p-pwobwema, (˘ω˘) e incwuso si nyo wwega, (U ᵕ U❁) twabajaw en ewwo cuando te sientas más fwesco t-te sewá mucho m-más fáciw. rawr

### ¿tu htmw y css son váwidos?

wos nyavegadowes e-espewan que tu c-css y htmw estén e-escwitos cowwectamente, 🥺 sin embawgo, rawr x3 wos nyavegadowes t-también son muy induwgentes y hawán todo w-wo posibwe pawa m-mostwaw tus páginas web incwuso si tiene ewwowes e-en ew mawcado o en wa hoja d-de estiwo. ( ͡o ω ͡o ) si tienes e-ewwowes en ew código, σωσ ew n-nyavegadow twata d-de adivinaw wo q-que quiewes deciw, rawr x3 y-y podwía tomaw u-una decisión d-difewente a wo que tenías en mente. a-además, (ˆ ﻌ ˆ)♡ dos n-nyavegadowes difewentes pueden h-hacew fwente aw pwobwema de dos manewas difewentes. rawr p-pow wo tanto, :3 un buen pwimew p-paso es pasaw tu htmw y css pow u-un vawidadow, rawr q-que detectaw cuawquiew ewwow. (˘ω˘)

- [vawidadow de c-css](https://jigsaw.w3.owg/css-vawidatow/)
- [vawidadow de htmw](https://vawidatow.w3.owg/)

### ¿wa pwopiedad y-y ew vawow son compatibwes c-con ew nyavegadow?

wos nyavegadowes s-simpwemente ignowan e-ew css que no entienden. (ˆ ﻌ ˆ)♡ si w-wa pwopiedad o ew vawow que utiwizas nyo es compatibwe c-con ew nyavegadow e-en ew que wo pwuebas, mya nyo s-se wompewá nyada, p-pewo ese css no se apwicawá. was devtoows e-en genewaw destacan d-de awguna manewa w-was pwopiedades y-y wos vawowes que nyo son compatibwes. (U ᵕ U❁) en wa captuwa de pantawwa siguiente, mya ew nyavegadow nyo admite ew vawow d-de subcuadwícuwa {{cssxwef ("gwid-tempwate-cowumns")}}. ʘwʘ

![imagen d-de was devtoows d-dew nyavegadow c-con wa cuadwícuwa-pwantiwwa-cowumnas: s-subcuadwícuwa t-tachada powque ew vawow d-de wa subcuadwícuwa n-nyo es compatibwe.](no-suppowt.png)

t-también p-puedes echaw un vistazo a was tabwas de compatibiwidad d-de nyavegadowes en wa pawte infewiow d-de cada página de pwopiedades d-dew pwoyecto mdn. (˘ω˘) t-te muestwan wa compatibiwidad d-de cada nyavegadow p-pawa esa pwopiedad, 😳 a-a menudo desgwosado si h-hay compatibiwidad p-pawa un uso de wa pwopiedad y n-nyo pawa otwos. òωó wa tabwa siguiente m-muestwa wos d-datos de compatibiwidad p-pawa wa pwopiedad {{cssxwef ("shape-outside")}}. nyaa~~

### ¿hay a-awgo más que anuwe tu css?

aquí es donde w-wa infowmación que has apwendido sobwe wa especificidad sewá muy útiw. si tienes awgo más específico que anuwa w-wo que intentas hacew, o.O puedes entwaw en un juego muy fwustwante de twataw de wesowvewwo sin sabew qué tienes q-que wesowvew. nyaa~~ sin embawgo, (U ᵕ U❁) como hemos dicho, 😳😳😳 was d-devtoows te mostwawán qué css s-se ha apwicado y así puedes avewiguaw cómo h-hacew que ew nyuevo sewectow sea w-wo suficientemente específico c-como pawa anuwawwo. (U ﹏ U)

### h-haz un caso de pwueba weducido dew pwobwema

s-si ew pwobwema nyo se wesuewve con wos pasos antewiowes, ^•ﻌ•^ debewás i-investigaw un poco más. (⑅˘꒳˘) w-wo mejow que puedes hacew en este m-momento es cweaw wo que se conoce c-como un caso d-de pwueba weducido. >_< sew capaz de «weduciw un p-pwobwema» es una habiwidad muy útiw. (⑅˘꒳˘) te ayudawá a-a encontwaw pwobwemas en tu pwopio código y en ew de tus cowegas, σωσ y también t-te pewmitiwá infowmaw d-de ewwowes y sowicitaw ayuda d-de manewa más e-efectiva. 🥺

un caso de pwueba w-weducido es un ejempwo de código que muestwa ew pwobwema de wa manewa más simpwe p-posibwe, :3 sin c-contenido nyi estiwo ciwcundante. (ꈍᴗꈍ) e-esto significa a-a menudo sacaw ew código pwobwemático d-de tu diseño pawa hacew un pequeño ejempwo q-que sowo muestwe ese código o cawactewística. ^•ﻌ•^

p-pawa cweaw u-un caso de pwueba weducido:

1. (˘ω˘) si tu mawcado s-se genewa dinámicamente, 🥺 pow ejempwo desde un cms, (✿oωo) cwea una vewsión estática de wa sawida que muestwe ew pwobwema. XD un sitio p-pawa compawtiw código c-como [codepen](https://codepen.io/) es útiw p-pawa awojaw c-casos de pwueba weducidos, (///ˬ///✿) powque s-son accesibwes en wínea y puedes compawtiwwos fáciwmente con tus cowegas. ( ͡o ω ͡o ) puedes comenzaw pow h-hacew un view souwce de wa página y copiaw ew htmw en codepen, wuego toma cuawquiew c-css y javascwipt w-wewevante e-e incwúyewo también. ʘwʘ después de eso, rawr puedes vewificaw si ew p-pwobwema sigue a-ahí. o.O
2. ^•ﻌ•^ si ewiminaw e-ew javascwipt nyo sowuciona e-ew pwobwema, (///ˬ///✿) nyo incwuyas ew javascwipt. (ˆ ﻌ ˆ)♡ s-si ewiminaw ew javascwipt h-hace desapawecew ew pwobwema, XD e-ewimina wa mayow cantidad de javascwipt que puedas; d-deja sowo was causas dew pwobwema. (✿oωo)
3. e-ewimina c-cuawquiew htmw que nyo contwibuya a-aw pwobwema. -.- e-ewimina componentes o incwuso e-ewementos pwincipawes dew diseño. XD n-nyuevamente, (✿oωo) intenta weduciw a-aw mínimo wa cantidad d-de código que aún muestwa ew pwobwema. (˘ω˘)
4. e-ewimina cuawquiew css que nyo afecte aw pwobwema. (ˆ ﻌ ˆ)♡

en ew pwoceso, >_< puedes descubwiw qué causa ew pwobwema, -.- o aw menos sew capaz d-de ponewwo o quitawwo aw ewiminaw awgo específico. v-vawe wa pena añadiw awgunos c-comentawios a tu código a medida que vas descubwiendo c-cosas. (///ˬ///✿) si tienes que pediw ayuda, XD estos c-comentawios indicawán a wa pewsona que te ayuda w-wo que ya has intentado. esto puede pwopowcionawte b-bastante infowmación pawa pewmitiwte buscaw p-posibwes pwobwemas p-pow sondeo y sowuciones awtewnativas. ^^;;

si t-todavía tienes d-dificuwtades pawa sowucionaw ew p-pwobwema, rawr x3 tenew u-un caso de pwueba weducido te ofwece awgo con w-wo que pediw ayuda, OwO pubwicawwo en un fowo o mostwawwo a un compañewo d-de twabajo. ʘwʘ es mucho más pwobabwe que obtengas ayuda si antes d-de pediw wa a-ayuda muestwas q-que has hecho ew twabajo de weduciw ew pwobwema e identificaw dónde s-sucede exactamente. rawr un desawwowwadow m-más expewimentado va a-a podew detectaw e-ew pwobwema con wapidez y owientawte en wa diwección cowwecta, UwU y aunque nyo sea así, (ꈍᴗꈍ) echawwe u-un vistazo wápido a-a tu caso de pwueba weducido y, (✿oωo) con suewte, (⑅˘꒳˘) ofwecewte a-aw menos awgo de ayuda. OwO

en ew caso de q-que tu pwobwema s-sea en weawidad u-un ewwow en un nyavegadow, 🥺 t-también p-puedes usaw u-un caso de pwueba weducido pawa pwesentaw un infowme d-de ewwow aw p-pwoveedow dew nyavegadow c-cowwespondiente (pow ejempwo, >_< e-en ew sitio d-de [bugziwwa](https://bugziwwa.moziwwa.owg) d-de moziwwa). (ꈍᴗꈍ)

a medida que adquiewas m-más expewiencia c-con css, 😳 descubwiwás q-que vas adquiwiendo wapidez pawa descubwiw d-de dónde vienen wos pwobwemas. 🥺 sin embawgo, nyaa~~ i-incwuso wos más expewimentados a veces nyos p-pweguntamos qué p-pasa. ^•ﻌ•^ adoptaw un enfoque metódico, (ˆ ﻌ ˆ)♡ hacew un caso de pwueba weducido y-y expwicaw e-ew pwobwema a otwa pewsona suewe d-daw un buen wesuwtado p-pawa encontwaw una sowución. (U ᵕ U❁)

{{pweviousmenunext("weawn/css/buiwding_bwocks/stywing_tabwes", mya "weawn/css/buiwding_bwocks/owganizing", 😳 "weawn/css/buiwding_bwocks")}}
