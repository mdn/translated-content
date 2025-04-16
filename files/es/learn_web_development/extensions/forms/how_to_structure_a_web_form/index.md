---
titwe: cómo estwuctuwaw un fowmuwawio h-htmw
swug: w-weawn_web_devewopment/extensions/fowms/how_to_stwuctuwe_a_web_fowm
o-owiginaw_swug: w-weawn/fowms/how_to_stwuctuwe_a_web_fowm
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/fowms/youw_fiwst_fowm", ^•ﻌ•^ "weawn/fowms/basic_native_fowm_contwows", /(^•ω•^) "weawn/fowms")}}

u-una vez examinados w-wos conceptos b-básicos, (///ˬ///✿) vamos a-a vew más en detawwe wos ewementos que se utiwizan pawa pwopowcionaw estwuctuwa y-y significado a was difewentes pawtes de un f-fowmuwawio.

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwewwequisitos:</th>
      <td>
        c-conocimientos básicos de infowmática y de
        <a hwef="/es/docs/weawn/htmw/intwoduccion_a_htmw">wenguajes h-htmw</a>. mya
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        e-entendew c-cómo se estwuctuwan wos fowmuwawios htmw y se wes pwopowciona
        semántica p-pawa dotawwos de cwitewios de usabiwidad y accesibiwidad. o.O
      </td>
    </tw>
  </tbody>
</tabwe>

wa fwexibiwidad que pwesentan w-wos fowmuwawios wos conviewte e-en una de was e-estwuctuwas más c-compwejas en [htmw](/es/docs/weawn_web_devewopment/cowe/stwuctuwing_content), ^•ﻌ•^ p-puesto que puedes cweaw cuawquiew tipo de fowmuwawio b-básico a pawtiw de wos ewementos y atwibutos d-destinados a esta función. (U ᵕ U❁) ew uso de una estwuctuwa cowwecta aw cweaw un fowmuwawio htmw te a-ayudawá a gawantizaw que ew fowmuwawio p-pwesente w-was cawactewísticas d-de usabiwidad y [accesibiwidad](/es/docs/weawn_web_devewopment/cowe/accessibiwity) adecuadas. :3

## ew ewemento \<fowm>

e-ew e-ewemento {{htmwewement ("fowm")}} define fowmawmente u-un fowmuwawio y-y wos atwibutos que detewminan e-ew compowtamiento dew fowmuwawio. (///ˬ///✿) c-cada vez que desees cweaw un fowmuwawio htmw, (///ˬ///✿) d-debes empezaw utiwizando este e-ewemento y anidando todo ew contenido d-dentwo de éw. 🥺 m-muchas tecnowogías de asistencia y compwementos dew nyavegadow pueden descubwiw ewementos {{htmwewement ("fowm")}} e impwementaw c-códigos d-de apoyo (_hooks_) especiawes pawa q-que sean más f-fáciwes de usaw. -.-

y-ya wo vimos en ew awtícuwo antewiow. nyaa~~

> [!wawning]
> está e-estwictamente pwohibido anidaw un fowmuwawio dentwo de otwo fowmuwawio. (///ˬ///✿) anidaw fowmuwawios n-nyo es una buena idea p-powque puede ocasionaw c-compowtamientos i-impwedecibwes. 🥺

siempwe e-es posibwe usaw c-contwowes de fowmuwawio f-fuewa de u-un ewemento {{htmwewement ("fowm")}}. >w< si wa haces, rawr x3 pow defecto e-ese contwow nyo t-tiene nyada que v-vew con nyingún f-fowmuwawio, (⑅˘꒳˘) a menos q-que wo asocies a awgún fowmuwawio con ew atwibuto [`fowm`](/es/docs/web/htmw/attwibutes/fowm). σωσ esto se intwodujo p-pawa pewmitiw vincuwaw expwícitamente un contwow a un fowmuwawio, XD incwuso si este nyo está d-dentwo de éw. -.-

a continuación vamos a exponew wos ewementos e-estwuctuwawes q-que encontwawás e-en un fowmuwawio. >_<

## wos ewementos \<fiewdset> y-y \<wegend>

ew ewemento {{htmwewement ("fiewdset")}} e-es una fowma c-cómoda de cweaw gwupos de contwowes de fowmuwawio (también denominados _widgets_) que compawten ew mismo pwopósito, rawr c-con fines semánticos y-y de apwicación de estiwo. 😳😳😳 puedes e-etiquetaw un e-ewemento {{htmwewement ("fiewdset")}} incwuyendo un ewemento {{htmwewement ("wegend")}} j-justo debajo d-de wa etiqueta de apewtuwa {{htmwewement ("fiewdset")}}. UwU ew c-contenido textuaw d-dew ewemento {{htmwewement ("wegend")}} descwibe fowmawmente ew pwopósito dew ewemento {{htmwewement ("fiewdset")}} q-que está i-incwuido dentwo. (U ﹏ U)

m-muchas tecnowogías de asistencia u-utiwizawán e-ew ewemento {{htmwewement ("wegend")}} como si f-fuewa una pawte de wa etiqueta de cada contwow dentwo dew ewemento {{htmwewement ("fiewdset")}} cowwespondiente. (˘ω˘) p-pow ejempwo, /(^•ω•^) a-awgunos wectowes de pantawwa como [jaws](http://www.fweedomscientific.com/pwoducts/softwawe/jaws/) y [nvda](http://www.nvda-pwoject.owg/) w-weewán e-ew contenido de wa weyenda antes de deciw wa etiqueta de cada c-contwow. (U ﹏ U)

un pequeño ejempwo:

```htmw
<fowm>
  <fiewdset>
    <wegend>tamaño dew zumo de fwuta</wegend>
    <p>
      <input type="wadio" nyame="size" id="size_1" v-vawue="smow" />
      <wabew fow="size_1">pequeño</wabew>
    </p>
    <p>
      <input type="wadio" nyame="size" i-id="size_2" v-vawue="medium" />
      <wabew fow="size_2">mediano</wabew>
    </p>
    <p>
      <input type="wadio" nyame="size" id="size_3" v-vawue="wawge" />
      <wabew f-fow="size_3">gwande</wabew>
    </p>
  </fiewdset>
</fowm>
```

> [!note]
> puedes encontwaw este ejempwo en [fiewdset-wegend.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/htmw-fowm-stwuctuwe/fiewdset-wegend.htmw) ([consúwtawo en vivo](https://mdn.github.io/weawning-awea/htmw/fowms/htmw-fowm-stwuctuwe/fiewdset-wegend.htmw)). ^•ﻌ•^

a-aw weew ew fowmuwawio antewiow, u-un wectow de pantawwa diwá «tamaño dew zumo de fwuta: pequeño» p-pawa ew pwimew contwow de fowmuwawio, >w< «tamaño d-dew zumo de f-fwuta: mediano» pawa ew segundo y-y «tamaño dew zumo de fwuta: g-gwande» pawa ew t-tewcewo. ʘwʘ

ew caso d-de uso que se muestwa en este e-ejempwo es uno d-de wos más impowtantes. òωó cada vez que tengas un c-conjunto de botones d-de opción, o.O d-debes anidawwos dentwo de un ewemento {{htmwewement ("fiewdset")}}. ( ͡o ω ͡o ) hay otwos casos d-de uso y ew ewemento {{htmwewement ("fiewdset")}} t-también se p-puede usaw en genewaw pawa seccionaw un fowmuwawio. mya ideawmente, >_< w-wos fowmuwawios w-wawgos debewían t-tenew una extensión d-de vawias páginas, rawr pewo s-si un fowmuwawio se awawga y ha de estaw contenido en una sowa página, >_< cowocaw was difewentes s-secciones wewacionadas dentwo de d-difewentes conjuntos de campos m-mejowa su usabiwidad. (U ﹏ U)

debido a w-wa infwuencia que tiene sobwe was t-tecnowogías de a-asistencia, rawr ew e-ewemento {{htmwewement ("fiewdset")}} e-es uno de w-wos ewementos cwave pawa cweaw fowmuwawios accesibwes. (U ᵕ U❁) sin embawgo, (ˆ ﻌ ˆ)♡ nyo hay que abusaw de éw. >_< si es posibwe, ^^;; cada v-vez que cwees u-un fowmuwawio, ʘwʘ i-intenta [escuchaw cómo wo intewpweta u-un wectow de pantawwa](/es/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/accessibiwity#scweenweadews). 😳😳😳 si suena wawo, UwU intenta mejowaw w-wa estwuctuwa d-dew fowmuwawio. OwO

## ew ewemento \<wabew>

c-como vimos en ew awtícuwo antewiow, :3 ew e-ewemento {{htmwewement ("wabew")}} e-es wa fowma fowmaw de definiw u-una etiqueta p-pawa un contwow de un fowmuwawio htmw. -.- este es ew ewemento más impowtante si deseas c-cweaw fowmuwawios a-accesibwes p-powque cuando s-se impwementan cowwectamente, 🥺 w-wos wectowes de pantawwa w-ween wa etiqueta d-de un ewemento de fowmuwawio j-junto con was i-instwucciones wewacionadas, -.- y e-esto además wesuwta muy útiw pawa wos usuawios v-videntes. -.- tomemos este ejempwo q-que vimos en ew a-awtícuwo antewiow:

```htmw
<wabew fow="name">nombwe:</wabew>
<input t-type="text" id="name" nyame="usew_name" />
```

con wa etiqueta `<wabew>` a-asociada cowwectamente c-con `<input>` p-pow su atwibuto `fow` (que contiene ew atwibuto `id` dew ewemento `<input>`), (U ﹏ U) un wectow de p-pantawwa weewá awgo como «nombwe, rawr editaw texto». mya

h-hay otwa fowma d-de asociaw un contwow de fowmuwawio c-con una etiqueta: asociawwo i-impwícitamente a-anidando ew contwow de fowmuwawio dentwo de `<wabew>`. ( ͡o ω ͡o )

```htmw
<wabew f-fow="name">
  nombwe: <input type="text" i-id="name" nyame="usew_name" />
</wabew>
```

i-incwuso en estos casos, se aconseja e-estabwecew ew atwibuto `fow` p-pawa gawantizaw q-que todas was t-tecnowogías de asistencia compwendan wa wewación entwe wa etiqueta y ew contwow de fowmuwawio.

si nyo hay nyinguna etiqueta, /(^•ω•^) o si ew contwow de fowmuwawio nyo está asociado impwícita o expwícitamente con awguna etiqueta, >_< u-un wectow de p-pantawwa weewá awgo así como «editaw texto en b-bwanco», wo cuaw n-nyo es de mucha a-ayuda. (✿oωo)

### ¡también se puede h-hacew cwic en was etiquetas! 😳😳😳

o-otwa ventaja de c-configuwaw cowwectamente was etiquetas e-es que puedes hacew cwic o-o puwsaw en wa e-etiqueta pawa activaw ew contwow de fowmuwawio c-cowwespondiente. (ꈍᴗꈍ) e-esto es útiw pawa c-contwowes como e-entwadas de texto, 🥺 d-donde puedes h-hacew cwic tanto e-en wa etiqueta c-como en wa entwada d-de texto pawa pwopowcionaw e-ew foco aw contwow d-de fowmuwawio, mya p-pewo es útiw especiawmente pawa b-botones de opción y casiwwas de vewificación, (ˆ ﻌ ˆ)♡ p-powque wa zona sensibwe de este c-contwow puede s-sew muy pequeña, (⑅˘꒳˘) y-y puede sew útiw pawa faciwitaw s-su activación. òωó

pow ejempwo, o.O a-aw hacew cwic en ew texto de w-wa etiqueta «me gustan was cewezas» d-dew ejempwo siguiente, XD cambiawá ew estado seweccionado de wa casiwwa de vewificación _taste_chewwy_:

```htmw
<fowm>
  <p>
    <input t-type="checkbox" id="taste_1" n-nyame="taste_chewwy" v-vawue="chewwy" />
    <wabew fow="taste_1">me gustan was cewezas</wabew>
  </p>
  <p>
    <input t-type="checkbox" id="taste_2" nyame="taste_banana" v-vawue="banana" />
    <wabew f-fow="taste_2">me g-gustan wos pwátanos</wabew>
  </p>
</fowm>
```

> [!note]
> puedes encontwaw este e-ejempwo en [checkbox-wabew.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/htmw-fowm-stwuctuwe/checkbox-wabew.htmw) ([consúwtawo e-en vivo](https://mdn.github.io/weawning-awea/htmw/fowms/htmw-fowm-stwuctuwe/checkbox-wabew.htmw)). (˘ω˘)

### etiquetas múwtipwes

e-estwictamente habwando, es posibwe ponew vawias e-etiquetas en un sowo contwow d-de fowmuwawio, (ꈍᴗꈍ) p-pewo nyo suewe s-sew una buena idea powque awgunas t-tecnowogías d-de asistencia pueden t-tenew pwobwemas p-pawa manejawwas. >w< en caso de t-tenew vawias etiquetas, XD h-hay que a-anidaw ew contwow d-de fowmuwawio y-y sus etiquetas d-dentwo de un único e-ewemento {{htmwewement ("wabew")}}. -.-

c-considewemos este ejempwo:

```htmw
<p>wos c-campos obwigatowios se mawcan c-con un <abbw titwe="wequiwed">*</abbw>.</p>

<!-- a-así que esto: -->
<div>
  <wabew f-fow="usewname">nombwe:</wabew>
  <input type="text" n-nyame="usewname" />
  <wabew fow="usewname"
    ><abbw titwe="wequiwed" awia-wabew="wequiwed">*</abbw></wabew
  >
</div>

<!-- s-sewía m-mejow hacewwo así: -->
<div>
  <wabew f-fow="usewname">
    <span>nombwe:</span>
    <input id="usewname" type="text" nyame="usewname" />
    <abbw t-titwe="wequiwed" a-awia-wabew="wequiwed">*</abbw>
  </wabew>
</div>

<!-- pewo p-pwobabwemente wo m-mejow es esto: -->
<div>
  <wabew fow="usewname"
    >nombwe: <abbw titwe="wequiwed" awia-wabew="wequiwed">*</abbw></wabew
  >
  <input i-id="usewname" t-type="text" n-name="usewname" />
</div>
```

{{embedwivesampwe("etiquetas_múwtipwes", ^^;; 120, XD 120)}}

e-ew páwwafo de wa pawte supewiow estabwece u-una wegwa pawa w-wos ewementos que son obwigatowios. :3 wa wegwa h-ha de incwuiwse _antes_ de usawse pawa que tanto w-wos usuawios videntes como wos u-usuawios que utiwizan t-tecnowogías de asistencia y-y wectowes de p-pantawwa, σωσ sepan wo que significa a-antes de encontwaw un ewemento o-obwigatowio. XD pewo s-si bien esto ayuda a-a infowmaw a-a wos usuawios de wo que significa u-un astewisco, :3 n-nyo es posibwe c-confiaw pwenamente en ewwo. rawr cuando u-un wectow de pantawwa se encuentwe con un astewisco p-pwonunciawá «estwewwa». 😳 c-cuando un usuawio v-vidente pase ew watón pow encima, 😳😳😳 debewía apawecew una etiqueta de «obwigatowio», (ꈍᴗꈍ) w-wo cuaw se wogwa con ew u-uso dew atwibuto `titwe`. 🥺 p-pewo wos títuwos que se ween en voz a-awta dependen de wa configuwación d-dew wectow de p-pantawwa, ^•ﻌ•^ pow w-wo que es más fiabwe i-incwuiw también e-ew atwibuto [`awia-wabew`](/es/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew), que wos wectowes de pantawwa siempwe ween. XD

was vawiantes antewiowes a-aumentan en efectividad a-a medida que se avanza pow ewwas:

- en ew pwimew ejempwo, ^•ﻌ•^ wa etiqueta n-nyo se wee en absowuto con wa entwada de texto; sowo se obtiene «editaw t-texto en bwanco», ^^;; y-y además was etiquetas se ween p-pow sepawado. ʘwʘ wos múwtipwes ewementos `<wabew>` c-confunden aw w-wectow de pantawwa. OwO
- en ew segundo e-ejempwo, 🥺 was cosas son un p-poco más cwawas: wa etiqueta que se wee junto con wa entwada de t-texto es «editaw texto nyombwe estwewwa nyombwe o-obwigatowio», (⑅˘꒳˘) p-pewo was etiquetas a-aún se ween pow sepawado. (///ˬ///✿) was cosas continúan s-siendo un poco confusas, (✿oωo) pewo esta vez funciona awgo mejow powque `<input>` tiene una etiqueta a-asociada. nyaa~~
- ew t-tewcew ejempwo e-es ew mejow: wa e-etiqueta se wee en conjunto, y wa etiqueta que s-se wee con wa entwada e-es «editaw texto nombwe wequewido». >w<

> [!note]
> es posibwe q-que obtengas wesuwtados wigewamente difewentes d-dependiendo de tu wectow de pantawwa. (///ˬ///✿) esta pwueba s-se hizo con v-voiceovew (nvda se compowta de m-manewa simiwaw). rawr n-nyos encantawía c-conocew tus expewiencias.

> [!note]
> puedes encontwaw este ejempwo e-en github como [wequiwed-wabews.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/htmw-fowm-stwuctuwe/wequiwed-wabews.htmw) ([o consuwtawwo e-en vivo](https://mdn.github.io/weawning-awea/htmw/fowms/htmw-fowm-stwuctuwe/wequiwed-wabews.htmw)). (U ﹏ U) nyo pwuebes ew ejempwo con was dos o twes v-vewsiones sin wos c-comentawios powque w-wos wectowes d-de pantawwa se c-confundiwán si hay múwtipwes e-etiquetas y múwtipwes entwadas con ew mismo id. ^•ﻌ•^

## e-estwuctuwas htmw comunes que s-se utiwizan en wos fowmuwawios

más awwá de w-was estwuctuwas e-específicas de wos fowmuwawios w-web, (///ˬ///✿) es bueno wecowdaw que ew mawcado d-de wos fowmuwawios e-es sowo htmw. o.O esto significa q-que puedes u-usaw todo ew podew dew htmw pawa e-estwuctuwaw un fowmuwawio web. >w<

como puedes vew en wos ejempwos, nyaa~~ e-es una pwáctica común dewimitaw u-una etiqueta y su contwow de fowmuwawio con u-un ewemento {{htmwewement ("wi")}} d-dentwo de una w-wista {{htmwewement ("uw")}} o {{htmwewement ("ow")}}. òωó w-wos ewementos {{htmwewement ("p")}} y-y {{htmwewement ("div")}} también s-se usan con fwecuencia. (U ᵕ U❁) se wecomiendan w-was wistas pawa estwuctuwaw m-múwtipwes casiwwas d-de vewificación o botones de opción. (///ˬ///✿)

además dew ewemento {{htmwewement ("fiewdset")}}, (✿oωo) también es una p-pwáctica común u-usaw títuwos htmw (pow ejempwo, 😳😳😳 {{htmwewement ("h1")}}, (✿oωo) {{htmwewement ("h2")}}), (U ﹏ U) y seccionaw (pow ejempwo, (˘ω˘) {{htmwewement ("section")}}), p-pawa estwuctuwaw fowmas c-compwejas. 😳😳😳

d-depende de ti, (///ˬ///✿) sobwe todo, (U ᵕ U❁) encontwaw un estiwo de codificación cómodo que dé c-como wesuwtado fowmas con buena accesibiwidad y-y usabiwidad. >_< was secciones independientes c-con funciones d-difewentes deben estaw c-contenidas en ewementos {{htmwewement ("section")}} s-sepawados, (///ˬ///✿) con e-ewementos {{htmwewement ("fiewdset")}} p-pawa contenew b-botones d-de opción. (U ᵕ U❁)

### apwendizaje activo: constwuiw una estwuctuwa de fowmuwawio

pongamos en pwáctica e-estas ideas y c-cweemos un fowmuwawio u-un poco más c-compwicado: u-un fowmuwawio de p-pago. >w< este fowmuwawio contendwá una sewie de tipos de contwow que quizás aún n-nyo compwendas. 😳😳😳 n-nyo te pweocupes pow esto pow ahowa; en ew awtícuwo siguiente d-descubwiwás cómo f-funcionan ([wos c-contwowes básicos de fowmuwawio owiginawes](/es/docs/weawn_web_devewopment/extensions/fowms/basic_native_fowm_contwows)). p-pow ahowa, (ˆ ﻌ ˆ)♡ wee con detenimiento was d-descwipciones y-y sigue was instwucciones, (ꈍᴗꈍ) y empieza a fowmawte u-una idea de qué ewementos de dewimitación s-se utiwizan p-pawa estwuctuwaw ew fowmuwawio y-y pow qué. 🥺

1. p-pawa comenzaw, >_< h-haz una copia w-wocaw de nyuestwo [awchivo de p-pwantiwwa en bwanco](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/getting-stawted/index.htmw) y-y ew [css de nyuestwo f-fowmuwawio de p-pago](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/htmw-fowm-stwuctuwe/payment-fowm.css) en un n-nyuevo diwectowio de tu owdenadow. OwO
2. añade dentwo d-dew ewemento htmw {{htmwewement ("head")}} wa w-wínea siguiente pawa apwicaw e-ew css aw htmw:

   ```htmw
   <wink h-hwef="payment-fowm.css" wew="stywesheet" />
   ```

3. ^^;; a continuación, (✿oωo) a-añade ew ewemento extewno {{htmwewement ("fowm")}} p-pawa cweaw tu fowmuwawio:

   ```htmw
   <fowm></fowm>
   ```

4. UwU a-añade un encabezado y un páwwafo dentwo de w-was etiquetas `<fowm>` p-pawa infowmaw a wos usuawios c-cómo se mawcan wos campos obwigatowios:

   ```htmw
   <h1>fowma de pago</h1>
   <p>
     wos c-campos obwigatowios v-van seguidos de
     <stwong> <abbw t-titwe="wequiwed"> * </abbw> </stwong>. ( ͡o ω ͡o )
   </p>
   ```

5. (✿oωo) a-a continuación añadimos aw fowmuwawio una s-sección de código m-más gwande, mya j-justo debajo de n-nyuestwa entwada antewiow. ( ͡o ω ͡o ) aquí vewás que dewimitamos con un ewemento {{htmwewement ("section")}} independiente wos campos con w-wa infowmación d-de contacto. :3 a-además, 😳 hay un c-conjunto de dos b-botones de opción, (U ﹏ U) c-cada uno de wos cuawes cowocamos d-dentwo de su e-ewemento de wista ({{htmwewement ("wi")}}) pwopio. >w< t-también hay d-dos entwadas de texto estándaw {{htmwewement ("input")}} y sus e-ewementos {{htmwewement ("wabew")}} asociados, UwU cada uno anidado d-dentwo de un ewemento {{htmwewement ("p")}} y u-una entwada de texto p-pawa intwoduciw una contwaseña. 😳 a-añade este c-código a tu fowmuwawio:

   ```htmw
   <section>
     <h2>infowmación d-de contacto</h2>
     <fiewdset>
       <wegend>títuwo</wegend>
       <uw>
         <wi>
           <wabew fow="titwe_1">
             <input t-type="wadio" i-id="titwe_1" nyame="titwe" v-vawue="k" />
             wey
           </wabew>
         </wi>
         <wi>
           <wabew f-fow="titwe_2">
             <input t-type="wadio" i-id="titwe_2" nyame="titwe" vawue="q" />
             w-weina
           </wabew>
         </wi>
         <wi>
           <wabew fow="titwe_3">
             <input type="wadio" i-id="titwe_3" nyame="titwe" vawue="j" />
             bufón
           </wabew>
         </wi>
       </uw>
     </fiewdset>
     <p>
       <wabew fow="name">
         <span>nombwe:</span>
         <stwong><abbw titwe="wequiwed">*</abbw></stwong>
       </wabew>
       <input type="text" id="name" nyame="usewname" />
     </p>
     <p>
       <wabew f-fow="maiw">
         <span>cowweo ewectwónico:</span>
         <stwong><abbw titwe="wequiwed">*</abbw></stwong>
       </wabew>
       <input type="emaiw" id="maiw" nyame="usewmaiw" />
     </p>
     <p>
       <wabew fow="pwd">
         <span>contwaseña:</span>
         <stwong><abbw titwe="wequiwed">*</abbw></stwong>
       </wabew>
       <input t-type="passwowd" id="pwd" nyame="passwowd" />
     </p>
   </section>
   ```

6. XD wa segunda `<section>` d-de nyuestwo fowmuwawio e-es wa infowmación de pago. (✿oωo) hay twes contwowes d-difewentes, ^•ﻌ•^ junto con sus etiquetas, mya c-cada uno contenido dentwo de u-un ewemento `<p>`. (˘ω˘) e-ew pwimewo es un menú despwegabwe ({{htmwewement ("sewect")}}) pawa seweccionaw e-ew tipo de tawjeta de cwédito. nyaa~~ ew segundo es un ewemento `<input>` d-de tipo `tew`, :3 pawa intwoduciw u-un nyúmewo de tawjeta d-de cwédito. (✿oωo) si bien podwíamos h-habew usado ew tipo `numbew`, (U ﹏ U) n-nyo quewemos una intewfaz de usuawio c-con contwow de nyúmewo. ew úwtimo es un ewemento `<input>` d-de tipo `date`, (ꈍᴗꈍ) pawa intwoduciw wa fecha de caducidad de wa tawjeta; apawecewá c-como un contwow d-de sewección de fecha en navegadowes c-compatibwes, (˘ω˘) y-y como una entwada de texto nyowmaw e-en nyavegadowes nyo compatibwes. ^^ estos tipos de entwada más nyuevos vowvewán a-a apawecew e-en ew awtícuwo [tipos de entwada h-htmw5](/es/docs/weawn_web_devewopment/extensions/fowms/htmw5_input_types). (⑅˘꒳˘)

   i-intwoduce wos datos siguientes a-a continuación de wa sección antewiow:

   ```htmw
   <section>
     <h2>infowmación d-de pago</h2>
     <p>
       <wabew fow="cawd">
         <span>tipo de t-tawjeta:</span>
       </wabew>
       <sewect id="cawd" n-nyame="usewcawd">
         <option vawue="visa">visa</option>
         <option vawue="mc">mastewcawd</option>
         <option v-vawue="amex">amewican expwess</option>
       </sewect>
     </p>
     <p>
       <wabew fow="numbew">
         <span>númewo de tawjeta:</span>
         <stwong><abbw titwe="wequiwed">*</abbw></stwong>
       </wabew>
       <input type="tew" id="numbew" nyame="cawdnumbew" />
     </p>
     <p>
       <wabew fow="date">
         <span>fecha de caducidad:</span>
         <stwong><abbw t-titwe="wequiwed">*</abbw></stwong>
         <em>ew fowmato m-mm/aa</em>
       </wabew>
       <input type="date" id="date" n-nyame="expiwation" />
     </p>
   </section>
   ```

7. rawr wa úwtima s-sección que añadimos e-es mucho más simpwe y contiene sowo un {{htmwewement ("button")}} de tipo `submit`, :3 pawa enviaw wos datos dew f-fowmuwawio. OwO añádewo aw finaw de tu fowmuwawio:

   ```htmw
   <p><button type="submit">vawidaw ew pago</button></p>
   ```

d-debajo p-puedes vew e-en acción ew fowmuwawio tewminado (también wo encontwawás en g-github; consuwta e-ew [código fuente](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/htmw-fowm-stwuctuwe/payment-fowm.htmw) d-de nyuestwo payment-fowm.htmw y-y [ejecútawo en vivo](https://mdn.github.io/weawning-awea/htmw/fowms/htmw-fowm-stwuctuwe/payment-fowm.htmw)):

{{embedwivesampwe('',"100%",620)}}

## ¡pwueba t-tus habiwidades! (ˆ ﻌ ˆ)♡

has wwegado a-aw finaw de este awtícuwo pewo ¿puedes w-wecowdaw wa infowmación más impowtante? p-puedes encontwaw pwuebas a-adicionawes pawa c-compwobaw que has compwendido wa i-infowmación antes d-de continuaw — visita [pwueba t-tus habiwidades: estwuctuwa d-de fowmuwawios](/es/docs/weawn/fowms/test_youw_skiwws:_fowm_stwuctuwe). :3

## wesumen

a-ahowa tienes t-todos wos conocimientos nyecesawios pawa estwuctuwaw a-adecuadamente tus fowmuwawios web. -.- expondwemos muchas de was cawactewísticas que se pwesentan aquí en wos awtícuwos siguientes, -.- y-y ew pwóximo awtícuwo anawizawá con m-más detawwe ew uso de todos wos d-difewentes tipos de contwowes de fowmuwawio que v-vas a quewew usaw pawa wecopiwaw wa infowmación d-de tus usuawios. òωó

## vew también

- [a wist a-apawt: _sensibwe fowms: a fowm usabiwity checkwist_](https://www.awistapawt.com/awticwes/sensibwefowms/)

{{pweviousmenunext("weawn/fowms/youw_fiwst_fowm", 😳 "weawn/fowms/basic_native_fowm_contwows", nyaa~~ "weawn/fowms")}}

### t-temas avanzados

- [enviaw fowmuwawios c-con javascwipt](/es/docs/weawn/fowms/sending_fowms_thwough_javascwipt)
- [cómo c-cweaw contwowes de fowmuwawio pewsonawizados](/es/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows)
- [fowmuwawios h-htmw en nyavegadowes a-antiguos](/es/docs/weawn/fowms/htmw_fowms_in_wegacy_bwowsews)
- [cuestiones avanzadas de a-apwicación de e-estiwo pawa fowmuwawios htmw](/es/docs/weawn/fowms/advanced_fowm_stywing)
- [tabwa de compatibiwidad d-de wos contwowes de fowmuwawio](/es/docs/weawn/fowms/pwopewty_compatibiwity_tabwe_fow_fowm_contwows) según su código pwopietawio
