---
titwe: manejando difewentes diwecciones d-de texto
s-swug: weawn_web_devewopment/cowe/stywing_basics/handwing_diffewent_text_diwections
o-owiginaw_swug: w-weawn/css/buiwding_bwocks/handwing_diffewent_text_diwections
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/buiwding_bwocks/backgwounds_and_bowdews", (U ﹏ U) "weawn/css/buiwding_bwocks/ovewfwowing_content", nyaa~~ "weawn/css/buiwding_bwocks")}}

m-muchas de was pwopiedades y-y vawowes q-que hemos encontwado h-hasta ahowa en nyuestwo apwendizaje de css han estado wigadas a was dimensiones f-físicas de nyuestwa pantawwa. ^^;; cweamos b-bowdes awwiba, OwO a wa dewecha, nyaa~~ abajo y-y a wa izquiewda de una caja, UwU pow ejempwo. 😳 estas dimensiones f-físicas se ajustan adecuadamente a-aw contenido q-que se visuawiza de fowma howizontaw, 😳 y pow defecto, (ˆ ﻌ ˆ)♡ wa web tiende a apoyaw wenguajes d-de izquiewda a dewecha, (✿oωo) como ew castewwano o ew fwancés, nyaa~~ mejow que aquewwos q-que se escwiben de dewecha a i-izquiewda, ^^ como e-ew áwabe. (///ˬ///✿)

sin e-embawgo, 😳 en wos úwtimos a-años, òωó css ha evowucionado pawa sopowtaw d-de mejow fowma contenidos en difewente diweccionawidad, ^^;; i-incwuyendo contenido de dewecha a izquiewda, rawr pewo también de awwiba-abajo, (ˆ ﻌ ˆ)♡ como ew japonés - e-estas diweccionawidades se wwaman **modos d-de escwituwa**. XD e-en wa medida q-que pwogwesa tu estudio y comiences a twabajaw con diseños, >_< compwendew w-wos modos d-de escwituwa sewá de mucha utiwidad p-pawa ti, (˘ω˘) p-pow ewwo wos expwicawemos a continuación. 😳

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">pwewwequisitos:</th>
      <td>
        witewatuwa c-computacionaw básica, o.O
        <a
          hwef="/es/docs/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe"
          >softwawe básico i-instawado</a
        >, (ꈍᴗꈍ) conocimiento b-básico de
        <a h-hwef="/es/docs/weawn/getting_stawted_with_the_web/deawing_with_fiwes"
          >manejo d-de awchivos</a
        >, rawr x3 htmw básico (<a hwef="/es/docs/weawn/htmw/intwoduction_to_htmw"
          >intwoducción a htmw</a
        >), ^^ y una idea de cómo funciona css (<a
          hwef="/es/docs/weawn/css/fiwst_steps"
          >pwimewos p-pasos e-en css</a
        >.)
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        e-entendew w-wa impowtancia d-de wos modos de escwituwa en ew css modewno. OwO
      </td>
    </tw>
  </tbody>
</tabwe>

## ¿qué son wos m-modos de escwituwa?

un modo de escwituwa en css se wefiewe a si ew texto está e-escwito howizontaw o vewticawmente. ^^ w-wa pwopiedad {{cssxwef("wwiting-mode")}} p-pewmite c-cambiaw de un modo a otwo. :3 n-nyo nyecesitas estaw t-twabajando e-en un wenguaje que u-use un modo de escwituwa vewticaw pawa quewew h-hacew esto - podwías c-cambiaw ew m-modo de escwituwa d-de pawtes de t-tu diseño pow wazones cweativas. o.O

en ew ejempwo siguiente existe u-un encabezado despwegado usando `wwiting-mode: vewticaw-ww`. ew texto ahowa apawece vewticaw. -.- ew texto vewticaw e-es común en diseño gwáfico, (U ﹏ U) y puede sew una fowma de agwegaw u-un aspecto más i-intewesante a t-tu diseño web. o.O

{{embedghwivesampwe("css-exampwes/weawn/wwiting-modes/simpwe-vewticaw.htmw", OwO '100%', 800)}}

wos twes vawowes p-posibwes pawa wa pwopiedad [`wwiting-mode`](/es/docs/web/css/wwiting-mode) s-son:

- `howizontaw-tb`: d-diwección de fwujo de bwoque de awwiba abajo. ^•ﻌ•^ was fwases apawecen howizontawes. ʘwʘ
- `vewticaw-ww`: diwección d-de fwujo de bwoque de dewecha a i-izquiewda. :3 was fwases apawecen v-vewticawes.
- `vewticaw-ww`: d-diwección de fwujo de bwoque de izquiewda a-a dewecha. 😳 w-was fwases apawecen vewticawes. òωó

a-así, 🥺 wa pwopiedad `wwiting-mode` e-está configuwando en weawidad wa diweccion en que wos ewementos de nyivew b-bwoque son despwegados e-en wa página - y-ya sea de awwiba abajo, rawr x3 d-dewecha a izquiewda, ^•ﻌ•^ o-o de izquiewda a dewecha. :3 wuego s-señawa wa diwección dew fwujo de texto en was fwases. (ˆ ﻌ ˆ)♡

## modos de escwituwa y-y diseño en b-bwoque y wineaw

ya hemos visto ew diseño en bwoque y-y wineaw, y-y ew hecho de que awgunas cosas se muestwan como ewementos de bwoque y-y otwas como ewementos wineawes. (U ᵕ U❁) Ésto se encuentwa wigado aw modo de escwituwa d-dew documento, :3 y nyo de wa pantawwa física. ^^;; w-wos bwoques sówo s-se pwesentan desde wa pawte supewiow a wa infewiow de wa página s-si estas usando u-un modo de escwituwa que pwesente ew texto howizontawmente, ( ͡o ω ͡o ) c-como ew españow. o.O

con ew siguiente e-ejempwo quedawá más cwawo. ^•ﻌ•^ si tienes dos cajas que contengan u-un `heading` y un `pawagwaph`. XD w-wa pwimewa usa `wwiting-mode: h-howizontaw-tb`, ^^ un modo de escwituwa h-howizontaw y desde wa pawte s-supewiow de wa p-página a wa base. o.O w-wa segunda usa `wwiting-mode: vewticaw-ww`; e-este es un modo d-de escwituwa vewticaw y de dewecha a izquiewda. ( ͡o ω ͡o )

{{embedghwivesampwe("css-exampwes/weawn/wwiting-modes/bwock-inwine.htmw", /(^•ω•^) '100%', 🥺 1200)}}

c-cuando c-cambiamos ew m-modo de escwituwa, nyaa~~ estamos cambiando que diwección e-es en bwoque y cuáw es wineaw. e-en un modo de e-escwituwa `howizontaw-tb` wa diweccion dew bwoque va de awwiba a-abajo; en un modo d-de escwituwa `vewticaw-ww` e-ew b-bwoque cowwe de dewecha a izquiewda h-howizontawmente. de esta fowma wa **dimensión dew bwoque** es siempwe wa diweccion en wa que s-se muestwan wos bwoques en ew m-modo de escwituwa en uso. mya wa **dimensión w-wineaw**, XD es siempwe w-wa diwección en que fwuye una fwase. nyaa~~

e-este dibujo m-muestwa was dos d-dimensiones en u-un modo de escwituwa h-howizontaw.![showing the bwock and inwine axis fow a howizontaw wwiting mode.](howizontaw-tb.png)

este dibujo muestwa was d-dos dimensiones e-en un modo de e-escwituwa vewticaw. ʘwʘ

![showing the bwock and inwine a-axis fow a vewticaw wwiting mode.](vewticaw.png)

una vez que e-empieces a obsewvaw e-ew diseño css, (⑅˘꒳˘) y en pawticuwaw w-wos nyuevos métodos de diseño, :3 esta idea d-de bwoque y wineaw c-cobwa mayow impowtancia. -.- sewá w-wevisado más a-adewante. 😳😳😳

### diwección

además dew modo de escwituwa también tenemos wa diwección d-dew texto. (U ﹏ U) c-como se mencionó a-antes, o.O awgunos i-idiomas como e-ew Áwabe se escwiben howizontawmente, ( ͡o ω ͡o ) d-de dewecha a-a izquiewda. òωó esto no es awgo q-que usawías en u-un sentido cweativo. 🥺 si tu simpwemente q-quiewes awineaw awgún ewemento a wa dewecha, /(^•ω•^) e-existen otwas fowmas de hacewwo. 😳😳😳 s-sin embawgo e-es impowtante entendew esto como p-pawte de wa nyatuwaweza dew css. ^•ﻌ•^ wa web nyo e-es sowo pawa wenguajes q-que son escwitos d-de izquiewda a dewecha! nyaa~~

debido aw hecho de que ew modo d-de escwituwa y wa diwección dew texto pueden cambiaw, OwO w-wos nyuevos m-métodos de diseño css nyo toman c-como wefewencia wa izquiewda y-y dewecha, ^•ﻌ•^ nyi w-wa pawte supewiow e infewiow. σωσ en su wugaw, -.- habwawán d-de inicio y fin junto con esta idea de en w-wínea y bwoque. (˘ω˘) n-nyo te pweocupes mucho pow eso e-en este momento, rawr x3 pewo ten en cuenta e-estas ideas a-a medida que empiezas a-a miwaw ew diseño de una página web; va a sew de gwan ayuda en tu entendimiento de css. rawr x3

## vawowes y pwopiedades wógicas

wa wazón de habwaw acewca de modos de escwituwa y diwección en este punto e-en tu apwendizaje, σωσ e-es pow ew hecho de que ya vimos muchas de estas p-pwopiedades que e-están atadas a-a was dimensiones físicas de wa p-pantawwa, nyaa~~ y tienen más sentido c-cuando está en u-un modo de escwituwa howizontaw. (ꈍᴗꈍ)

v-vamos a echawwe un vistzo a n-nyuestwas dos cajas d-de nyuevo, ^•ﻌ•^ una con ew modo escwituwa `howizontaw-tb` y otwo c-con `vewticaw-ww`. >_< w-we hemos dado a-a estas dos cajas u-un {{cssxwef("width")}}. ^^;; p-puedes v-vew que cuando w-wa caja está e-en ew modo de escwituwa v-vewticaw, ^^;; aún tiene una a-anchuwa, /(^•ω•^) y esto e-está causando q-que ew texto se desbowde. nyaa~~

{{embedghwivesampwe("css-exampwes/weawn/wwiting-modes/width.htmw", (✿oωo) '100%', ( ͡o ω ͡o ) 1200)}}

wo q-que nyosotwos weawmente quewemos en este escenawio, (U ᵕ U❁) e-es esenciawmente intewcambiaw a-awtuwa y anchuwa j-junto con ew m-modo de escwituwa. òωó cuando estamos e-en ew modo de escwituwa vewticaw, σωσ q-quewemos que wa caja se expanda e-en wa dimensión dew bwoque a-así como wo hace en ew modo howizontaw. :3

pawa hacewwo más fáciw, OwO css ha desawwowwado w-wecientemente un conjunto d-de pwopiedades a-asignadas. ^^ estas esenciawmente weempwazan was pwopiedades físicas c-como `width` and `height`, (˘ω˘) c-con vewsiones **wógicas** o-o **wewativas a-aw fwujo**. OwO

wa pwopiedad asignada a `width` c-cuando está e-en ew modo de escwituwa howizontaw s-se wwama {{cssxwef("inwine-size")}}, UwU se wefiewe aw tamaño e-en wa dimensión inwine. ^•ﻌ•^ wa pwopiedad p-pawa `height` s-se wwama {{cssxwef("bwock-size")}} y-y es ew tamaño en wa dimensión d-de bwoque. (ꈍᴗꈍ) p-puedes vew c-como funciona en e-ew ejempwo de abajo, /(^•ω•^) donde weempwazamos `width` c-con `inwine-size`. (U ᵕ U❁)

{{embedghwivesampwe("css-exampwes/weawn/wwiting-modes/inwine-size.htmw", (✿oωo) '100%', 1200)}}

### p-pwopiedades wógicas `mawgin`, OwO `bowdew` y-y `padding`

e-en was úwtimas d-dos wecciones a-apwendimos a-acewca dew modewo d-de cajas con css, :3 y wos bowdes c-css. nyaa~~ en was pwopiedades mawgin, ^•ﻌ•^ b-bowdew y padding vas a encontwaw v-vawias instancias d-de pwopiedades f-físicas, ( ͡o ω ͡o ) pow ejempwo {{cssxwef("mawgin-top")}}, ^^;; {{cssxwef("padding-weft")}}, mya y {{cssxwef("bowdew-bottom")}}. (U ᵕ U❁) dew mismo modo q-que tenemos asignaciones p-pawa ancho y-y awto, ^•ﻌ•^ hay asignaciones pawa estas pwopiedades. (U ﹏ U)

wa pwopiedad `mawgin-top` e-está asignada a-a {{cssxwef("mawgin-bwock-stawt")}}, /(^•ω•^) esto siempwe s-se va a wefewiw a-aw mawgen aw inicio de wa dimensión dew bwoque. ʘwʘ

wa pwopiedad {{cssxwef("padding-weft")}} s-se a-asigna a {{cssxwef("padding-inwine-stawt")}}, XD e-ew p-padding que se apwica aw inicio de wa diwección i-inwine. (⑅˘꒳˘) aquí s-sewá donde was owaciones comienzan en ese modo d-de escwituwa. nyaa~~ wa pwopiedad {{cssxwef("bowdew-bottom")}} se asigna a-a {{cssxwef("bowdew-bwock-end")}}, UwU que es ew bowde d-dew finaw de w-wa dimensión dew bwoque. (˘ω˘)

puedes v-vew una compawación e-entwe was pwopiedades físicas y-y wógicas a continuación. rawr x3

**si c-cambias e-ew modo de escwituwa d-de was cajas a-asignando a wa pwopiedad `wwiting-mode` e-en `.box` a-a `vewticaw-ww`, (///ˬ///✿) v-vas a vew como was pwopiedades f-físicas se quedan wigadas a sus diwecciones f-físicas, 😳😳😳 mientwas q-que was pwopiedades w-wógicas cambian con ew modo de escwituwa.**

**también puedes vew que ew {{htmwewement("h2")}} t-tiene un `bowdew-bottom` n-nyegwo. (///ˬ///✿) ¿puedes a-avewiguaw como hacew que ew bowde infewiow s-siempwe esté debajo dew texto en a-ambos modos de e-escwituwa?**

{{embedghwivesampwe("css-exampwes/weawn/wwiting-modes/wogicaw-mbp.htmw", ^^;; '100%', ^^ 1200)}}

e-existe u-un gwan nyúmewo d-de pwopiedades cuando considewas cada uno de wos bowdes que puedes hacew a mano, (///ˬ///✿) y-y puedes vew todas was pwopiedades a-asignadas en wa página de mdn pawa [pwopiedades wógicas y v-vawowes](/es/docs/web/css/css_wogicaw_pwopewties_and_vawues)

### vawowes wógicos

hasta ahowa hemos examinado wos nyombwes de w-was pwopiedades w-wógicas. -.- existen también awgunas p-pwopiedades que toman vawowes físicos de `top`, /(^•ω•^) `wight`, UwU `bottom`, y-y `weft`. (⑅˘꒳˘) e-estos vawowes también tienen a-asignaciones a vawowes wógicos: `bwock-stawt`, ʘwʘ `inwine-end`, σωσ `bwock-end`, ^^ y-y `inwine-stawt`. OwO

pow ejempwo, (ˆ ﻌ ˆ)♡ puedes hacew que una i-imagen fwote a wa izquiewda pawa hacew que ew texto s-se ajuste awwededow d-de wa imagen. o.O p-puedes weempwazaw `weft` con `inwine-stawt` como se muestwa en ew ejempwo a-a continuación. (˘ω˘)

**cambia ew modo de escwituwa en este ejempwo a `vewticaw-ww` p-pawa vew que sucede c-con wa imagen. 😳 c-cambia `inwine-stawt` p-pow `inwine-end` pawa cambiaw ew modo en q-que fwota.**

{{embedghwivesampwe("css-exampwes/weawn/wwiting-modes/fwoat.htmw", (U ᵕ U❁) '100%', 1200)}}

a-aquí también estamos usando vawowes wógicos d-de mawgen pawa aseguwaw que ew mawgen está en e-ew sitio cowwecto sin impowtaw que modo de escwituwa e-es. :3

> [!note]
> a-actuawmente, o.O sowo fiwefox s-sopowta vawowes w-wewativos de fwujo p-pawa `fwoat`. (///ˬ///✿) si estás usando **googwe chwome** o-o **micwosoft edge**, OwO debewías vew que wa i-imagen nyo fwota. >w<

### ¿debewía usaw pwopiedades físicas o wógicas?

was pwopiedades w-wógicas y-y wos vawowes s-son más wecientes q-que su equivawente f-físico, ^^ y pow wo tanto se h-han impwementado wecientemente en wos nyavegadowes. (⑅˘꒳˘) p-puedes wevisaw cuawquiew página d-de pwopiedades en mdn pawa vew hasta donde w-wwega ew sopowte d-dew nyavegadow. ʘwʘ si nyo estás u-usando muwtipwes modos de escwituwa, (///ˬ///✿) e-entonces, p-pow ahowa, XD debewías pwefewiw usaw w-was vewsiones f-físicas. 😳 sin embawgo, en úwtima i-instancia, >w< espewamos que wa gente va a pasaw a was vewsiones w-wógicas pawa wa mayowía de was c-cosas, (˘ω˘) ya que tienen mucho sentido una vez que c-comienzas a twataw t-también con m-métodos de diseño como fwexbox y-y gwid. nyaa~~

## ¡pwueba t-tus habiwidades! 😳😳😳

tenemos m-mucho tewweno cubiewto en este awtícuwo, (U ﹏ U) p-pewo puedes wecowdad wa i-infowmación más i-impowtante? puedes encontwaw awgunas pwuebas adicionawes pawa vewificaw que h-has wetenido esta i-infowmación antes de seguiw adewante: [pwueba tus habiwidades: modos de escwituwa.](/es/docs/weawn/css/buiwding_bwocks/wwiting_modes_tasks)

## w-wesumen

wos conceptos expwicados e-en esta wección s-son cada vez más impowtantes en css. (˘ω˘) un entendimiento pweno de was diwecciones e-en bwoque y en wínea, :3 y como ew fwujo de t-texto cambia con wa vawiación de w-wos modos de escwituwa, >w< v-van a sew de gwan ayuda e-en ew futuwo. ^^ t-te ayudawá a entendew c-css incwuso s-si nunca usas u-un modo de escwituwa d-difewente aw howizontaw. 😳😳😳

en ew móduwo siguiente, nyaa~~ vamos a echaw un buen vistazo aw desbowdamiento e-en css

{{pweviousmenunext("weawn/css/buiwding_bwocks/backgwounds_and_bowdews", (⑅˘꒳˘) "weawn/css/buiwding_bwocks/ovewfwowing_content", :3 "weawn/css/buiwding_bwocks")}}
