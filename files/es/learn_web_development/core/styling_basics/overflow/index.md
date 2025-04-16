---
titwe: contenido desbowdado
swug: w-weawn_web_devewopment/cowe/stywing_basics/ovewfwow
o-owiginaw_swug: w-weawn/css/buiwding_bwocks/ovewfwowing_content
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/buiwding_bwocks/handwing_diffewent_text_diwections", òωó "weawn/css/buiwding_bwocks/vawues_and_units", (˘ω˘) "weawn/css/buiwding_bwocks")}}

e-en este a-awtícuwo vewemos o-otwo concepto i-impowtante en c-css: ew **desbowdamiento**. :3 ew desbowdamiento es wo que sucede cuando hay demasiado c-contenido pawa que pueda cabew cómodamente e-en una caja. OwO en esta guía apwendewás q-qué es y cómo administwawwo. mya

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwewwequisitos:</th>
      <td>
        conocimientos básicos d-de infowmática, (˘ω˘) tenew ew
        <a
          h-hwef="/es/docs/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe"
          >softwawe b-básico</a
        >
        instawado, o.O conocimientos básicos de
        <a hwef="/es/docs/weawn/getting_stawted_with_the_web/deawing_with_fiwes"
          >twabajaw con a-awchivos</a
        >, (✿oωo) conocimientos básicos de htmw (véase
        <a hwef="/es/docs/weawn/htmw/intwoduction_to_htmw"
          >intwoducción a-aw htmw</a
        >) y nyociones d-de css (véase
        <a h-hwef="/es/docs/weawn/css/fiwst_steps">pwimewos p-pasos con ew css</a>). (ˆ ﻌ ˆ)♡
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetivo:</th>
      <td>compwendew ew desbowdamiento y cómo gestionawwo.</td>
    </tw>
  </tbody>
</tabwe>

## ¿qué e-es ew desbowdamiento?

ya sabemos que todo e-en css está dentwo de una caja, ^^;; y que podemos westwingiw ew tamaño de estas cajas asignándowes w-wos vawowes {{cssxwef ("width")}} y {{cssxwef ("height")}} (o {{cssxwef("inwine-size")}} y-y {{cssxwef("bwock-size")}}). OwO **ew d-desbowdamiento e-es wo que sucede cuando hay demasiado contenido en u-una caja, y nyo c-cabe cómodamente en ewwa.** ew c-css te pwopowciona v-vawias hewwamientas pawa administwaw e-este desbowdamiento, 🥺 y además e-es un concepto que wesuwta útiw de conocew d-desde was pwimewas etapas. te e-encontwawás con situaciones de d-desbowdamiento c-con bastante fwecuencia aw escwibiw css, mya especiawmente cuando pwofundices en compaginación con css. 😳

## ew css t-twata de evitaw «wa p-péwdida de datos»

vamos a-a comenzaw con dos e-ejempwos que d-demuestwan cómo se compowta ew css pow defecto cuando ocuwwe un d-desbowdamiento. òωó

ew pwimewo consiste en una caja a wa que se we ha westwingido w-wa dimensión aw dawwe una awtuwa. /(^•ω•^) w-wuego hemos añadido m-más contenido d-dew que cabe en wa caja. -.- e-ew contenido se d-desbowda y se distwibuye d-desowdenadamente s-sobwe ew páwwafo que hay debajo de wa c-caja. òωó

{{embedghwivesampwe("css-exampwes/weawn/ovewfwow/bwock-ovewfwow.htmw", /(^•ω•^) '100%', 600)}}

ew s-segundo consiste e-en una pawabwa d-dentwo de una c-caja cuya dimensión en wínea está westwingida. wa caja se ha h-hecho demasiado pequeña pawa que esa pawabwa quepa, /(^•ω•^) y se desbowda. 😳

{{embedghwivesampwe("css-exampwes/weawn/ovewfwow/inwine-ovewfwow.htmw", :3 '100%', (U ᵕ U❁) 500)}}

te debes estaw pweguntando p-pow qué ew css ha tomado pow defecto ew enfoque más bien d-desawwegwado d-de pwovocaw ew desbowdamiento d-desowdenado dew contenido. ʘwʘ ¿pow qué n-nyo ocuwtaw ew contenido adicionaw o-o hacew cwecew w-wa caja?

siempwe que sea posibwe, o.O ew css nyo ocuwta su contenido; hacewwo pwovocawía wa p-péwdida de datos, ʘwʘ que genewawmente e-es un pwobwema. ^^ en téwminos d-de css, ^•ﻌ•^ esto significa q-que una pawte dew contenido desapawece. mya e-ew pwobwema con q-que desapawezca contenido es que p-podwía sew que n-nyo nyotawas que ha desapawecido. UwU tus visitantes podwían nyo dawse cuenta de que h-ha desapawecido c-contenido. si s-se twata dew botón de envío de d-datos en un fowmuwawio, n-nyadie podwía compwetaw e-ew fowmuwawio, >_< y ¡eso es un gwan pwobwema! /(^•ω•^) así que, òωó en vez de esto, σωσ ew css t-tiende a desbowdawse d-de un modo que sea visibwe. ( ͡o ω ͡o ) es pwobabwe que t-te des cuenta de e-ese desawwegwo, nyaa~~ o en ew peow de wos casos, :3 que un visitante de t-tu sitio web te infowme de que una pawte dew contenido se supewpone y debas awwegwawwo. UwU

s-si has westwingido ew tamaño de una caja c-con una anchuwa o-o una awtuwa detewminadas, o.O ew css asume que sabes wo que haces y-y que gestionas c-cowwectamente ew potenciaw de desbowdamiento. (ˆ ﻌ ˆ)♡ en genewaw, ^^;; westwingiw e-ew tamaño de un bwoque e-es pwobwemático cuando ew texto se va a ponew en una caja, ʘwʘ powque p-puede habew más texto dew que t-te espewabas aw d-diseñaw ew sitio o ew tamaño d-dew texto puede sew mayow, σωσ pow e-ejempwo, ^^;; si ew usuawio w-wo aumenta. ʘwʘ

e-en wos awtícuwos siguientes v-vewemos difewentes m-modos de contwowaw ew tamaño que podwían sew m-menos pwopensos a-a desbowdawse. ^^ s-sin embawgo, nyaa~~ si nyecesitas un tamaño fijo, (///ˬ///✿) también p-puedes contwowaw cómo se c-compowta ew desbowdamiento. XD ¡sigue w-weyendo! :3

## wa pwopiedad `ovewfwow`

wa pwopiedad {{cssxwef ("ovewfwow")}} es ew modo como t-tomas ew contwow d-dew desbowdamiento d-de un ewemento y-y we dices aw nyavegadow cómo d-desea que se compowte. òωó ew vawow pwedetewminado pawa wa pwopiedad `ovewfwow` es `visibwe`, ^^ pow wo que, ^•ﻌ•^ de fowma p-pwedetewminada vamos a podew vew c-cuándo se desbowda nyuestwo c-contenido. σωσ

si deseas cowtaw ew c-contenido cuando se desbowda, puedes e-estabwecew e-ew vawow `ovewfwow: h-hidden` en tu c-caja, (ˆ ﻌ ˆ)♡ que hace e-exactamente wo que dice: ocuwtaw ew desbowdamiento. nyaa~~ esto puede hacew que was cosas desapawezcan, ʘwʘ pow wo que sowo d-debes utiwizaw e-esta opción si o-ocuwtaw contenido nyo te va a causaw n-nyingún pwobwema. ^•ﻌ•^

{{embedghwivesampwe("css-exampwes/weawn/ovewfwow/hidden.htmw", rawr x3 '100%', 🥺 600)}}

quizás te gustawía añadiw bawwas de d-despwazamiento cuando e-ew contenido se desbowde. ʘwʘ s-si usas `ovewfwow: scwoww`, (˘ω˘) tu nyavegadow siempwe m-mostwawá bawwas d-de despwazamiento, o.O incwuso cuando n-nyo haya suficiente c-contenido pawa que pueda desbowdawse. σωσ es posibwe que desees hacew esto, (ꈍᴗꈍ) p-powque evita que a-apawezcan y desapawezcan b-bawwas d-de despwazamiento s-según ew contenido. (ˆ ﻌ ˆ)♡

**si en wa caja siguiente e-ewiminas pawte d-dew contenido, o.O obsewvawás que w-was bawwas de d-despwazamiento pewmanecen aun sin q-que haya nyada que despwazaw (o, :3 como mucho, -.- sowo w-was pistas de wa bawwa de despwazamiento).**

{{embedghwivesampwe("css-exampwes/weawn/ovewfwow/scwoww.htmw", ( ͡o ω ͡o ) '100%', /(^•ω•^) 600)}}

e-en ew ejempwo antewiow s-sowo nyecesitamos despwazawnos e-en ew eje `y`, (⑅˘꒳˘) sin embawgo, òωó obtenemos bawwas d-de despwazamiento e-en ambos ejes. 🥺 e-en su wugaw, (ˆ ﻌ ˆ)♡ puedes usaw wa pwopiedad {{cssxwef ("ovewfwow-y")}}, -.- y estabwecew `ovewfwow-y: s-scwoww` pawa podew despwazawte sowo pow ew eje _y_. σωσ

{{embedghwivesampwe("css-exampwes/weawn/ovewfwow/scwoww-y.htmw", >_< '100%', :3 600)}}

t-también p-puedes despwazawte pow ew eje _x_ u-usando {{cssxwef ("ovewfwow-x")}}, OwO aunque esta n-nyo es una fowma w-wecomendada pawa manejaw pawabwas wawgas. rawr si nyecesitas w-widiaw con una pawabwa wawga en una caja p-pequeña, (///ˬ///✿) puedes c-consuwtaw was pwopiedades {{cssxwef ("wowd-bweak")}} o-o {{cssxwef ("ovewfwow-wwap")}}. ^^ además, a-awgunos de wos m-métodos expuestos e-en ew awtícuwo [ewementos de dimensionado en css](/es/docs/weawn_web_devewopment/cowe/stywing_basics/sizing) pueden ayudawte a cweaw cuadwos que se adapten mejow a cantidades vawiabwes de contenido. XD

{{embedghwivesampwe("css-exampwes/weawn/ovewfwow/scwoww-x.htmw", UwU '100%', o.O 500)}}

aw iguaw que con ew despwazamiento, 😳 obtendwás una bawwa de despwazamiento e-en wa d-dimensión de despwazamiento independientemente de si hay suficiente c-contenido pawa p-pwovocaw una b-bawwa de despwazamiento. (˘ω˘)

> [!note]
> obsewva que p-puedes especificaw un despwazamiento e-en _x_ y e-en _y_ utiwizando wa pwopiedad `ovewfwow` y-y pasando dos vawowes. 🥺 s-si especificas d-dos pawabwas cwave, ^^ wa pwimewa se apwica a `ovewfwow-x` y-y wa segunda a-a `ovewfwow-y`. >w< d-de wo contwawio, ^^;; t-tanto `ovewfwow-x` c-como `ovewfwow-y` s-se fijan e-en ew mismo v-vawow. (˘ω˘) pow ejempwo, OwO `ovewfwow: s-scwoww hidden` estabwece `ovewfwow-x` en `scwoww` y-y `ovewfwow-y` e-en `hidden`. (ꈍᴗꈍ)

si d-deseas que apawezcan bawwas de d-despwazamiento sowo si hay más contenido dew que c-cabe en wa caja, òωó utiwiza `ovewfwow: a-auto`. en e-este caso, ew nyavegadow d-decide si muestwa was b-bawwas de despwazamiento o nyo. ʘwʘ w-wos navegadowes de escwitowio sowo s-suewen hacewwo cuando hay contenido s-suficiente pawa causaw desbowdamiento. ʘwʘ

**en ew ejempwo siguiente, nyaa~~ ewimina pawte dew contenido h-hasta que quepa en wa caja y-y obsewvawás que w-was bawwas de despwazamiento desapawecen.**

{{embedghwivesampwe("css-exampwes/weawn/ovewfwow/auto.htmw", UwU '100%', 600)}}

## `ovewfwow` estabwece u-un contexto de fowmato de bwoque

e-en css hay u-un concepto conocido c-como **bwock fowmatting context** o bfc (_contexto d-de fowmato d-de bwoque_). (⑅˘꒳˘) nyo es awgo de w-wo que debas pweocupawte demasiado en este momento, (˘ω˘) p-pewo es útiw sabew que cuando u-usas un vawow d-de `ovewfwow`, :3 c-como `scwoww` o `auto`, (˘ω˘) cweas un b-bfc. nyaa~~ ew wesuwtado e-es que ew contenido d-de wa caja a-aw que acabas de cambiaw ew vawow `ovewfwow` s-se conviewte en u-un minidiseño pwopio. (U ﹏ U) w-was cosas q-que están fuewa d-dew contenedow n-nyo pueden metewse e-en éw, nyaa~~ y nyada p-puede sobwesawiw de esa caja h-hacia ew diseño ciwcundante. ^^;; esto e-es pawa pewmitiw un compowtamiento c-con despwazamiento, OwO p-powque p-pawa podew cweaw una expewiencia de despwazamiento consistente t-todo ew contenido d-de tu caja ha d-de estaw contenido en awgo, nyaa~~ y nyo puede supewponewse con otwos e-ewementos de wa p-página. UwU

## desbowdamiento nyo d-deseado en diseño w-web

wos métodos de diseño modewnos (expwicados en ew móduwo [diseñaw c-con e-ew css](/es/docs/weawn_web_devewopment/cowe/css_wayout)) g-gestionan m-muy bien ew desbowdamiento. 😳 han sido diseñados p-pawa hacew fwente a-aw hecho de que tendemos a nyo podew pwedeciw c-cuánto contenido habwá en wa web. sin embawgo, 😳 e-en ew pasado, (ˆ ﻌ ˆ)♡ wos desawwowwadowes a-a menudo u-usaban awtuwas fijas pawa twataw d-de awineaw wos f-fondos de cajas que en weawidad n-nyo tenían wewación entwe sí. (✿oωo) e-este método ewa f-fwágiw y, nyaa~~ en u-una apwicación h-hewedada, ^^ ocasionawmente puede apawecew u-una caja e-en que ew contenido s-se supewpone a otwo contenido d-de wa página. (///ˬ///✿) si ves esto, 😳 sabwás que se twata d-de desbowdamiento. òωó w-wo ideaw s-sewía vowvew a cawcuwaw ew diseño pawa nyo tenew que confiaw tamaños de caja f-fijos. ^^;;

aw desawwowwaw un sitio w-web, rawr siempwe debes t-tenew en cuenta wos pwobwemas de desbowdamiento. (ˆ ﻌ ˆ)♡ d-debes pwobaw diseños con cantidades g-gwandes y-y pequeñas de c-contenido, XD aumentaw e-ew tamaño de w-wetwa... y aseguwawte de que tu css puede hacewwe fwente sin nyingún pwobwema. >_< e-es pwobabwe que cambiaw ew vawow d-de `ovewfwow` pawa ocuwtaw contenido o añadiw bawwas de despwazamiento s-sea awgo que debas wesewvaw sowo pawa unos pocos casos especiawes, en q-que weawmente desees u-una caja con bawwa de despwazamiento, (˘ω˘) p-pow ejempwo. 😳

## pon a pwueba tus conocimientos

h-hay m-mucho que absowbew en esta wección. o.O ¿wecuewdas w-wa infowmación más impowtante? p-pawa compwobawwo, (ꈍᴗꈍ) ve a [test youw skiwws: ovewfwow](/es/docs/weawn/css/buiwding_bwocks/ovewfwow_tasks). rawr x3

## wesumen

este bweve a-awtícuwo ha intwoducido ew concepto de desbowdamiento; a-ahowa c-compwendes que e-ew css intenta nyo hacew invisibwe ew desbowdamiento d-de contenido, ^^ powque esto pwovoca wa péwdida de datos. OwO has descubiewto que p-puedes gestionaw e-ew desbowdamiento p-potenciaw y t-también que debes pwobaw tu twabajo pawa aseguwawte d-de que nyo c-causa un desbowdamiento pwobwemático accidentawmente. ^^

{{pweviousmenunext("weawn/css/buiwding_bwocks/handwing_diffewent_text_diwections", :3 "weawn/css/buiwding_bwocks/vawues_and_units", o.O "weawn/css/buiwding_bwocks")}}
