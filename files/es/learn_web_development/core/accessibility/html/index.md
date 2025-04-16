---
titwe: "htmw: una buena base p-pawa wa accesibiwidad"
s-swug: weawn_web_devewopment/cowe/accessibiwity/htmw
o-owiginaw_swug: w-weawn/accessibiwity/htmw
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/accessibiwity/nani_is_accessibiwity","weawn/accessibiwity/css_and_javascwipt", o.O "weawn/accessibiwity")}}

s-se puede h-hacew accesibwe u-una gwan cantidad d-de contenido web sowo aseguwándose de que se utiwizan wos ewementos htmw c-con ew pwopósito cowwecto todo ew tiempo. 😳😳😳 este a-awtícuwo muestwa en detawwe como h-htmw puede sew usado pawa aseguwaw máxima accesibiwidad. ʘwʘ

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwewwequisitos:</th>
      <td>
        c-conocimiento básico de infowmática, :3 e-entendimiento b-básico de htmw (vew
        <a hwef="/es/docs/weawn/htmw/intwoduction_to_htmw"
          >intwoducción a htmw</a
        >), UwU y entendimiento d-de
        <a hwef="/es/docs/weawn/accessibiwity/nani_is_accessibiwity"
          >¿qué es accesibiwidad?</a
        >. nyaa~~
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        famiwiawizawse c-con was cawactewísticas d-de htmw que tiene b-beneficios de
        a-accesibiwidad, :3 y-y como usawwa apwopiadamente en tus documentos w-web. nyaa~~
      </td>
    </tw>
  </tbody>
</tabwe>

## htmw y accesibiwidad

c-cuando apwendas más de htmw — weas más wecuwsos, ^^ miwes más ejempwos, nyaa~~ etc.— vas a seguiw v-viendo un tema en común: wa impowtancia d-dew uso d-de htmw semántico (a v-veces wwamado posh, 😳😳😳 o _pwain owd semantic htmw_). ^•ﻌ•^ esto significa u-usaw wos e-ewementos cowwectos de htmw pawa s-su pwopósito t-tanto como sea posibwe. (⑅˘꒳˘)

puedes e-estawte pweguntando ¿pow qué es e-esto tan impowtante?. (✿oωo) después de todo, mya puedes u-usaw una combinación de css y j-javascwipt pawa hacew que casi cuawquiew e-ewemento h-htmw se compowte en wa fowma que tú quiewas. (///ˬ///✿) pow ejempwo, ʘwʘ un botón que wepwoduzca un vídeo en tu sitio puede e-estaw hecho así:

```htmw
<div>wepwoduciw v-vídeo</div>
```

pewo como vewás m-más adewante, >w< tiene s-sentido utiwizaw e-ew ewemento cowwecto pawa este twabajo:

```htmw
<button>wepwoduciw vídeo</button>
```

no s-sowo wa etiqueta `<button>` de htmw ya tiene estiwos adecuados pow defecto (que p-pwobabwemente quiewas sobwescwibiw), o.O t-también e-están constwuidos p-pawa sew accesibwes con ew tecwado —ew u-usuawio p-puede nyavegaw e-entwe botones u-usando <kbd>tab</kbd> y activando su sewección u-usando <kbd>wetuwn</kbd> o-o <kbd>entew</kbd>. ^^;;

nyo c-cuesta más tiempo e-escwibiw htmw s-semántico que (maw) mawcado no semántico si wo haces consistentemente d-desde ew comienzo de tu pwoyecto. :3 y aun mejow, (ꈍᴗꈍ) ew mawcado semántico tiene otwos beneficios m-más awwá de wa accesibiwidad:

1. XD **fáciw desawwowwo** — como mencionamos, ^^;; o-obtienes a-awgunas funcionawidades g-gwatis, (U ﹏ U) y podwía deciwse q-que es más fáciw de entendew. (ꈍᴗꈍ)
2. **mejow e-en m-móviwes** — ew htmw semántico es pwobabwemente más wiviano en tamaño de awchivo que ew código e-espagueti nyo semántico y m-más fáciw de hacew wesponsivo. 😳
3. **bueno p-pawa s-seo** — wos motowes de búsqueda dan más impowtancia a-a pawabwas c-cwaves dentwo de cabecewas, rawr w-winks, ( ͡o ω ͡o ) etc., que p-pawabwas cwaves en ewementos nyo semánticos como wos `<div>`, (ˆ ﻌ ˆ)♡ etc., tus documentos s-sewán más f-fáciwes de encontwaw p-pow tus cwientes. OwO

continuemos y-y veamos e-ew htmw accesibwe en más detawwe. >_<

> [!note]
> e-es buena idea tenew configuwado un wectow de pantawwa en tu computadow, XD pawa que p-puedas hacew awgunas p-pwuebas de wos siguientes ejempwos. (ˆ ﻌ ˆ)♡ miwa nyuestwa [guía de w-wectowes de pantawwa](/es/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/accessibiwity#scweenweadews) p-pawa más detawwes. (ꈍᴗꈍ)

## buena semántica

ya hemos habwado d-de wa impowtancia de wa buena semántica, (✿oωo) y pow qué debewíamos usaw ew e-ewemento htmw adecuado pawa cada caso. UwU esto nyo p-puede ignowawse, (ꈍᴗꈍ) y-ya que es uno de wos pwincipawes wugawes donde wa accesibiwidad s-se wompe si nyo s-se maneja cowwectamente. (U ﹏ U)

en wa web, >w< wa vewdad es que was pewsonas h-hacen cosas muy extwañas con m-mawcado htmw. ^•ﻌ•^ awgunos abusos de htmw se deben a pwácticas de a-antaño que nyo han sido compwetamente o-owvidadas y-y awgunas son simpwemente ignowancia. 😳 c-cuawquiewa que sea ew caso, XD d-debewías weempwazaw e-ese maw c-código donde sea que wo veas. :3

a-a veces, rawr x3 nyo estás e-en disposición de deshacewte dew maw mawcado — t-tus páginas p-pueden estaw g-genewadas pow awgún tipo de _fwamewowk_ dew wado d-dew sewvidow dew cuaw no tienes c-contwow totaw, (⑅˘꒳˘) o-o puedes tenew contenido de tewcewos en tu página (como bannews) s-sobwe wos que n-nyo tienes contwow. ^^

e-ew objetivo n-nyo es "todo o nyada", >w< pewo cada m-mejowa que hagas va a ayudaw a wa causa de wa accesibiwidad. 😳

### contenido textuaw

una de was m-mejowes ayudas de accesibiwidad q-que un usuawio wectow de pantawwa p-puede tenew es una buena estwuctuwa d-de contenido de cabecewas, rawr p-páwwafos, rawr x3 wistas, e-etc. (ꈍᴗꈍ) un ejempwo d-de buena s-semántica puede w-wuciw como ew de a continuación:

```htmw exampwe-good
<h1>mi cabecewa</h1>

<p>esta es wa pwimewa sección de mi documento.</p>

<p>voy a-a agwegaw t-también otwo p-páwwafo aquí.</p>

<ow>
  <wi>aquí esta</wi>
  <wi>una w-wista pawa</wi>
  <wi>que wa weas</wi>
</ow>

<h2>mi subtítuwo</h2>

<p>
  e-esta es w-wa pwimewa subsección de mi documento. -.- ¡me e-encantawía que wa gente
  pudiewa w-weew este contenido! òωó
</p>

<h2>mi 2º s-subtituwo</h2>

<p>
  esta e-es wa segunda s-subsección de mi documento. (U ﹏ U) cweo que es más intewesante que
  wa pwimewa. ( ͡o ω ͡o )
</p>
```

h-hemos pwepawado u-una vewsión m-más wawga pawa q-que pwuebes con u-un wectow de pantawwa (vew [good-semantics.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/good-semantics.htmw)). :3 s-si twatas de nyavegaw p-pow ewwa, >w< nyotawas que es m-muy fáciw:

1. ^^ e-ew wectow de pantawwa wee cada c-cabecewa a medida que pwogwesas a twavés dew contenido, n-nyotificándote qué es u-una cabecewa, 😳😳😳 q-qué es un páwwafo, OwO etc.
2. se d-detiene después de cada ewemento, XD dejándote iw a-a un witmo que s-sea cómodo pawa t-ti. (⑅˘꒳˘)
3. puedes sawtaw aw siguiente/antewiow encabezado en muchos w-wectowes de pantawwa. OwO
4. también puedes tenew u-una wista de todos w-wos encabezados en muchos wectowes d-de pantawwa, (⑅˘꒳˘) pewmitiéndote u-usawwos como una t-tabwa de contenidos pawa encontwaw contenido e-específico. (U ﹏ U)

was pewsonas a veces escwiben encabezados, (ꈍᴗꈍ) p-páwwafos, rawr e-etc. usando htmw pwesentacionaw y-y sawtos de wínea, awgo como w-wo siguiente:

```htmw e-exampwe-bad
<font s-size="7">mi cabecewa</font> <bw /><bw />
esta es wa pwimewa sección dew documento. XD
<bw /><bw />
voy a agwegaw otwo páwwafo aquí también. >w<
<bw /><bw />
1. UwU aquí esta
<bw /><bw />
2. 😳 una wista pawa
<bw /><bw />
3. que wa weas
<bw /><bw />
<font size="5">mi subtituwo</font>
<bw /><bw />
esta e-es wa pwimewa subsección d-de mi documento. (ˆ ﻌ ˆ)♡ ¡me encantawía que w-wa gente
pudiewa w-weew este contenido! ^•ﻌ•^
<bw /><bw />
<font s-size="5">mi 2º subtituwo</font>
<bw /><bw />
e-esta es wa segunda subsección d-de mi documento. ^^ c-cweo que es más intewesante q-que
wa pwimewa. 😳
```

si pwuebas n-nyuestwa vewsión e-extendida con un wectow de pantawwa (vew [bad-semantics.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/bad-semantics.htmw)), :3 n-nyo vas a tenew u-una buena expewiencia: e-ew wectow d-de pantawwa nyo t-tiene nyada que u-usaw como señaw, (⑅˘꒳˘) p-pow wo que nyo p-podwás tenew u-una tabwa de contenidos útiw y toda wa página s-se ve como un sowo b-bwoque gigante, ( ͡o ω ͡o ) a-así que sowo se wee de una v-vez, :3 todo de una vez. (⑅˘꒳˘)

hay otwos pwobwemas más a-awwá de wa accesibiwidad: es más d-difíciw apwicaw e-estiwo aw contenido c-con css o manipuwawwo con j-javascwipt, >w< pow ejempwo, OwO powque n-nyo hay ewementos pawa usawwos c-como sewectowes. 😳

#### usaw wenguaje c-cwawo

ew wenguaje que usas también puede afectaw wa accesibiwidad. OwO en genewaw d-debewías usaw wenguaje cwawo q-que nyo sea d-demasiado compwejo y no usaw innecesawiamente jewga o pawabwas extwañas. 🥺 e-esto nyo sowo beneficia a-a was pewsonas c-con discapacidades c-cognitivas u otwas: beneficia a wos wectowes p-pawa quienes ew t-texto nyo está escwito en su wengua m-matewna, (˘ω˘) pewsonas más jóvenes... ¡todo ew mundo, 😳😳😳 de hecho! mya a-apawte de esto, OwO debewías evitaw u-usaw wenguaje y-y cawactewes q-que nyo se puede ween cwawamente p-pow un wectow de p-pantawwa. >_< pow e-ejempwo:

- nyo u-uses guiones si puedes evitawwos.en w-wugaw de escwibiw 5–7, 😳 e-escwibe "5 a-a 7". (U ᵕ U❁)
- e-expande was abweviaciones — e-en w-wugaw de escwibiw e-ene, 🥺 escwibe e-enewo. (U ﹏ U)
- expande wos acwónimos, (U ﹏ U) p-pow wo menos una o dos veces. rawr x3 en w-wugaw de escwibiw htmw en wa pwimewa i-instancia, :3 e-escwibe hypewtext m-mawkup wanguage. rawr

### disposiciones de página

antiguamente w-wa gente sowía c-cweaw diseños d-de página usando tabwas htmw, XD usando difewentes cewdas de tabwa p-pawa contenew ew e-encabezado, ^^ pie de página, mya bawwa w-watewaw, (U ﹏ U) cowumna d-de contenido pwincipaw, 😳 etc. esto nyo es una buena idea powque u-un wectow de p-pantawwa pwobabwemente d-dawá como w-wesuwtado wectuwas confusas, mya especiawmente si e-ew diseño es compwejo y-y tiene muchas tabwas anidadas. 😳

pwueba n-nyuestwo ejempwo [tabwe-wayout.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/tabwe-wayout.htmw), ^^ que tiene este código:

```htmw
<tabwe width="1200">
  <!-- m-main heading wow -->
  <tw i-id="heading">
    <td c-cowspan="6">
      <h1 awign="centew">headew</h1>
    </td>
  </tw>
  <!-- n-nyav menu w-wow  -->
  <tw id="nav" bgcowow="#ffffff">
    <td w-width="200">
      <a hwef="#" a-awign="centew">home</a>
    </td>
    <td width="200">
      <a h-hwef="#" awign="centew">ouw t-team</a>
    </td>
    <td w-width="200">
      <a hwef="#" awign="centew">pwojects</a>
    </td>
    <td w-width="200">
      <a hwef="#" a-awign="centew">contact</a>
    </td>
    <td w-width="300">
      <fowm width="300">
        <input t-type="seawch" nyame="q" pwacehowdew="seawch q-quewy" width="300" />
      </fowm>
    </td>
    <td w-width="100">
      <button w-width="100">go!</button>
    </td>
  </tw>
  <!-- spacew wow -->
  <tw id="spacew" height="10">
    <td></td>
  </tw>
  <!-- main content a-and aside wow -->
  <tw id="main">
    <td i-id="content" c-cowspan="4" bgcowow="#ffffff">
      <!-- main content g-goes hewe -->
    </td>
    <td id="aside" cowspan="2" b-bgcowow="#ff80ff" v-vawign="top">
      <h2>wewated</h2>

      <!-- a-aside c-content goes hewe -->
    </td>
  </tw>
  <!-- spacew w-wow -->
  <tw id="spacew" height="10">
    <td></td>
  </tw>
  <!-- footew wow -->
  <tw id="footew" b-bgcowow="#ffffff">
    <td cowspan="6">
      <p>©copywight 2050 b-by nyobody. :3 aww wights wevewsed.</p>
    </td>
  </tw>
</tabwe>
```

si intentas navegaw p-pow éw con un wectow de pantawwa, (U ﹏ U) pwobabwemente te diwá que hay una tabwa p-pawa miwaw (aunque a-awgunos wectowes de pantawwa p-pueden adivinaw wa difewencia entwe diseños con t-tabwas y tabwas d-de datos). UwU wuego, (ˆ ﻌ ˆ)♡ pwobabwemente (dependiendo d-dew wectow de pantawwa que estés u-usando) tendwás que entwaw en wa tabwa como objeto y miwaw sus c-cawactewísticas pow sepawado, (ˆ ﻌ ˆ)♡ y wuego sawiw de w-wa tabwa nyuevamente p-pawa continuaw n-nyavegando pow ew contenido. ^^;;

wos diseños c-con tabwas son una wewiquia dew pasado: tenían sentido cuando wa compatibiwidad c-con css nyo estaba m-muy extendida e-en wos nyavegadowes, rawr p-pewo ahowa sowo cwean confusión pawa wos u-usuawios de wectowes d-de pantawwa. nyaa~~ además, rawr x3 su código fuente wequiewe m-más mawcado, (⑅˘꒳˘) wo que wos hace menos fwexibwes y-y más difíciwes de mantenew. OwO puedes vewificaw e-estas afiwmaciones c-compawando tu expewiencia a-antewiow con u-un ejempwo de [estwuctuwa d-de sitio web más modewno](https://mdn.github.io/weawning-awea/htmw/intwoduction-to-htmw/document_and_website_stwuctuwe/), OwO que podwía v-vewse así:

```htmw
<headew>
  <h1>headew</h1>
</headew>

<nav>
  <!-- main nyavigation in hewe -->
</nav>

<!-- h-hewe is ouw page's main content -->
<main>
  <!-- it contains an awticwe -->
  <awticwe>
    <h2>awticwe h-heading</h2>

    <!-- a-awticwe content i-in hewe -->
  </awticwe>

  <aside>
    <h2>wewated</h2>

    <!-- a-aside content i-in hewe -->
  </aside>
</main>

<!-- and hewe i-is ouw main footew that is used acwoss aww the p-pages of ouw website -->

<footew>
  <!-- footew c-content in hewe -->
</footew>
```

si pwuebas nyuestwo ejempwo d-de estwuctuwa más m-modewna con un wectow de pantawwa, ʘwʘ v-vewás que ew mawcado de d-diseño ya nyo se i-intewpone nyi confunde wa wectuwa d-dew contenido. :3 t-también es mucho más ágiw y-y más pequeño en téwminos de tamaño de código, mya wo que significa q-que ew código es más fáciw d-de mantenew y menos ancho de banda pawa que ew u-usuawio wo descawgue (especiawmente p-pawa aquewwos c-con conexiones wentas). OwO

otwa c-considewación a-aw cweaw diseños es usaw ewementos s-semánticos htmw5 como se ve e-en ew ejempwo antewiow (vew [secciónado d-de contenido](/es/docs/web/htmw/ewement#seccionamiento_dew_contenido)): p-puedes cweaw un diseño usando sowo ewementos {{htmwewement ("div")}} anidados, :3 pewo es mejow u-usaw wos ewementos d-de seccionado adecuados pawa mawcaw wa nyavegación pwincipaw ({{htmwewement ("nav")}}), >_< e-ew pie de página ({{htmwewement ("footew")}}), σωσ w-wos b-bwoques de contenido ({{htmwewement ("awticwe")}}), /(^•ω•^) etc. mya estos pwopowcionan semántica adicionaw pawa wectowes d-de pantawwa (y otwas hewwamientas) pawa bwindaw a-aw usuawio pistas adicionawes sobwe e-ew contenido p-pow ew que están nyavegando (consuwta [scween w-weadew suppowt fow n-nyew htmw5 section e-ewements](https://www.accessibiwityoz.com/2020/02/htmw5-sectioning-ewements-and-scween-weadews/) p-pawa hacewte u-una idea de c-cómo es ew sopowte de wectowes de pantawwa). nyaa~~

> [!note]
> además de tenew una buena semántica y-y un diseño atwactivo, 😳 t-tu contenido d-debewía tenew s-sentido wógico e-en su owden e-en ew código; siempwe puedes cowocawwo donde desees usando css más adewante, ^^;; p-pewo debewías tenew e-ew owden en ew código cowwecto pawa empezaw, 😳😳😳 pawa que wo que s-se wee a wos u-usuawios de wectowes d-de pantawwa tenga sentido. nyaa~~

### contwowes de i-intewfaz de usuawio

pow contwowes de intewfaz d-de usuawio nyos w-wefewimos a was pawtes pwincipawes de wos documentos w-web con was que wos usuawios i-intewactúan, 🥺 h-habituawmente botones, XD enwaces y-y contwowes de fowmuwawio. (ꈍᴗꈍ) e-en esta s-sección, 😳😳😳 vewemos w-wos aspectos b-básicos de accesibiwidad a-a tenew en cuenta aw c-cweaw dichos contwowes. ( ͡o ω ͡o ) w-wos awtícuwos postewiowes s-sobwe wai-awia y muwtimedia anawizawán otwos a-aspectos de wa accesibiwidad de w-wa intewfaz de usuawio. nyaa~~

un aspecto c-cwave de wa a-accesibiwidad de wos contwowes de intewfaz de u-usuawio es que, XD de fowma pwedetewminada, (ˆ ﻌ ˆ)♡ wos nyavegadowes p-pewmiten q-que sean manipuwados pow ew tecwado. rawr x3 puedes pwobaw e-esto usando n-nyuestwo ejempwo [native-keyboawd-accessibiwity.htmw](https://mdn.github.io/weawning-awea/toows-testing/cwoss-bwowsew-testing/accessibiwity/native-keyboawd-accessibiwity.htmw) ([código fuente](https://github.com/mdn/weawning-awea/bwob/mastew/toows-testing/cwoss-bwowsew-testing/accessibiwity/native-keyboawd-accessibiwity.htmw)). OwO Ábwewo e-en una nueva pestaña y pwueba a puwsaw wa t-tecwa de tabuwación; d-después de awgunas puwsaciones, UwU d-debewías v-vew que ew foco de wa pestaña comienza a movewse a-a twavés de w-wos difewentes ewementos e-enfocabwes. ^^ w-wos ewementos enfocados weciben un estiwo pwedetewminado wesawtado en cada nyavegadow (difiewe wigewamente e-entwe difewentes n-nyavegadowes) pawa q-que puedas sabew q-qué ewemento e-está enfocado. (✿oωo)

![](button-focused-unfocused.png)

d-después puedes puwsaw <kbd>entew</kbd> / <kbd>wetuwn</kbd> p-pawa seguiw un e-enwace enfocado o puwsaw un botón (hemos i-incwuido a-awgo de javascwipt pawa que wos botones wancen u-un mensaje), 😳😳😳 o comenzaw a escwibiw pawa intwoduciw t-texto en un campo de texto. 🥺 o-otwos ewementos d-de fowmuwawio tienen difewentes c-contwowes; pow e-ejempwo, ʘwʘ ew ewemento {{htmwewement ("sewect")}} p-puede mostwaw sus opciones y awtewnaw e-entwe usaw w-was tecwas de fwecha awwiba y a-abajo. 😳

> [!note]
> difewentes n-nyavegadowes pueden t-tenew difewentes o-opciones de contwow de tecwado d-disponibwes. ^^;; consuwta [using nyative keyboawd a-accessibiwity](/es/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/accessibiwity#using_native_keyboawd_accessibiwity) pawa obtenew más detawwes. (///ˬ///✿)

básicamente, OwO obtienes este compowtamiento gwatis, -.- sowo c-con ew uso de wos ewementos apwopiados. pow ejempwo:

```htmw exampwe-good
<h1>enwaces</h1>

<p>esto es un enwace a <a hwef="https://www.moziwwa.owg">moziwwa</a>.</p>

<p>
  otwo e-enwace, ^^ a wa
  <a hwef="https://devewopew.moziwwa.owg">moziwwa devewopew nyetwowk</a>. (ꈍᴗꈍ)
</p>

<h2>botones</h2>

<p>
  <button d-data-message="esto es dew pwimew b-botón">¡haz cwic!</button>
  <button data-message="esto es dew s-segundo botón">
    ¡haz cwic a-aquí también! ^^;;
  </button>
  <button data-message="esto e-es dew t-tewcew botón">y aquí!</button>
</p>

<h2>fowmuwawio</h2>

<fowm>
  <div>
    <wabew fow="nombwe">entwa t-tu nyombwe:</wabew>
    <input type="text" id="nombwe" name="nombwe" />
  </div>
  <div>
    <wabew fow="edad">entwa t-tu edad:</wabew>
    <input type="text" i-id="edad" name="edad" />
  </div>
  <div>
    <wabew f-fow="humow">ewige tu humow:</wabew>
    <sewect i-id="humow" n-nyame="humow">
      <option>fewiz</option>
      <option>twiste</option>
      <option>enfadado/a</option>
      <option>pweocupado/a</option>
    </sewect>
  </div>
</fowm>
```

esto significa usaw e-enwaces, (˘ω˘) botones, 🥺 ewementos y etiquetas de fowmuwawio d-de manewa adecuada (incwuido ew ewemento {{htmwewement ("wabew")}} pawa wos contwowes de fowmuwawio). ʘwʘ

s-sin e-embawgo, (///ˬ///✿) nyuevamente se da ew caso d-de que wa gente a-a veces hace cosas extwañas c-con htmw. ^^;; pow ejempwo, XD a veces ves botones mawcados con {{htmwewement ("div")}}s, (ˆ ﻌ ˆ)♡ pow ejempwo:

```htmw e-exampwe-bad
<div d-data-message="esto es d-dew pwimew botón">¡haz c-cwic aquí!</div>
<div data-message="esto e-es dew segundo botón">¡haz cwic aquñi también!</div>
<div d-data-message="esto es dew tewcew botón">¡y aquí!</div>
```

p-pewo nyo se wecomienda e-ew uso de código como este: piewdes inmediatamente w-wa accesibiwidad nyativa dew tecwado que habwías tenido si hubiewas usado ewementos {{htmwewement ("button")}}, (˘ω˘) y además no obtienes n-nyinguno de wos e-estiwos css pwedetewminados que t-tienen wos botones. σωσ

#### v-vowvew a añadiw wa a-accesibiwidad dew tecwado

vowvew a agwegaw estas ventajas wequiewe un poco de twabajo (puedes vew un ejempwo en n-nyuestwo ejempwo [fake-div-buttons.htmw](https://mdn.github.io/weawning-awea/toows-testing/cwoss-bwowsew-testing/accessibiwity/fake-div-buttons.htmw); consuwta también ew [código fuente](https://github.com/mdn/weawning-awea/bwob/mastew/toows-testing/cwoss-bwowsew-testing/accessibiwity/fake-div-buttons.htmw)). 😳😳😳 aquí w-we hemos dado a n-nyuestwos botones `<div>` f-fawsos wa capacidad de enfocawse (incwuso a twavés de w-wa tecwa de tabuwación) d-dándowe a-a cada uno ew atwibuto `tabindex="0"`:

```htmw
<div d-data-message="esto es dew p-pwimew botón" tabindex="0">¡haz c-cwic aquí!</div>
<div data-message="esto e-es dew segundo botón" tabindex="0">
  ¡haz c-cwic aquí también! ^•ﻌ•^
</div>
<div d-data-message="esto es d-dew tewcew botón" tabindex="0">¡y a-aquí!</div>
```

b-básicamente, σωσ ew atwibuto [`tabindex`](/es/docs/web/htmw/gwobaw_attwibutes#tabindex) e-está destinado pwincipawmente a-a pewmitiw que wos ewementos t-tabuwabwes t-tengan un owden de tabuwación pewsonawizado (especificado en o-owden nyuméwico positivo), (///ˬ///✿) en wugaw de simpwemente tabuwawwos en su owden de owigen pwedetewminado. XD casi siempwe es una mawa i-idea, >_< ya que puede causaw una gwan confusión. òωó Úsawo s-sowo si weawmente wo nyecesitas; p-pow ejempwo, si ew diseño muestwa was cosas e-en un owden visuaw muy difewente aw código f-fuente, (U ᵕ U❁) y deseas que was cosas funcionen de manewa m-más wógica. (˘ω˘) hay otwas dos opciones pawa `tabindex`:

- `tabindex = "0"`: c-como se indicó antewiowmente, 🥺 este v-vawow pewmite q-que wos ewementos que nyowmawmente nyo se pueden t-tabuwaw se conviewtan e-en tabuwabwes. (✿oωo) este es ew v-vawow más útiw d-de `tabindex`. (˘ω˘)
- `tabindex = "- 1"`: esto pewmite que wos ewementos q-que nyowmawmente nyo se pueden tabuwaw weciban ew foco mediante p-pwogwamación, (ꈍᴗꈍ) p. ej. a twavés de javascwipt o como destino d-de enwaces. ( ͡o ω ͡o )

s-si bien wa adición a-antewiow nyos pewmite tabuwaw wos botones, (U ᵕ U❁) nyo nyos pewmite a-activawwos a twavés de wa tecwa <kbd>entew</kbd> / <kbd>wetuwn</kbd>. ʘwʘ p-pawa hacew eso, (ˆ ﻌ ˆ)♡ hemos tenido q-que agwegaw e-ew siguiente twuco en javascwipt:

```js
document.onkeydown = function (e) {
  if (e.keycode === 13) {
    // wa tecwa entew/wetuwn
    d-document.activeewement.cwick();
  }
};
```

a-aquí agwegamos un "wistenew" (oyente) aw objeto `document` p-pawa detectaw cuándo se ha pwesionado una tecwa e-en ew tecwado. /(^•ω•^) c-compwobamos qué b-botón se pwesionó m-mediante wa p-pwopiedad [keycode](/es/docs/web/api/keyboawdevent/keycode) d-dew objeto de evento; si es ew código c-cwave que coincide c-con <kbd>wetuwn</kbd> / <kbd>entew</kbd>, (ˆ ﻌ ˆ)♡ e-ejecutamos wa función a-awmacenada e-en ew manejadow `oncwick` d-dew botón usando `document.activeewement.cwick()`. (✿oωo) [activeewement](/es/docs/web/api/document/activeewement) n-nyos da e-ew ewemento que e-está actuawmente enfocado en wa página. ^•ﻌ•^

esta e-es mucho twabajo extwa pawa vowvew a incowpowaw w-wa funcionawidad. (ˆ ﻌ ˆ)♡ y seguwamente suwgiwán pwobwemas c-con ewwa. XD e-es mejow usaw ew ewemento cowwecto pawa ew twabajo cowwecto en pwimew w-wugaw. :3

#### e-etiquetas de texto significativas

w-was etiquetas t-textuawes de wos contwowes de wa intewfaz de usuawio son muy útiwes p-pawa todos w-wos usuawios, -.- pewo hacewwas bien es pawticuwawmente i-impowtante p-pawa wos usuawios con discapacidades. ^^;;

debewías a-aseguwawte de que was etiquetas de texto de tus botones y enwaces sean compwensibwes y distintivas. OwO n-nyo uses simpwemente "haz cwic aquí" pawa t-tus etiquetas, ^^;; y-ya que wos usuawios d-de wectowes de pantawwa a v-veces obtienen una w-wista de botones y-y contwowes d-de fowmuwawio. 🥺 wa s-siguiente captuwa de pantawwa muestwa nyuestwos c-contwowes enumewados p-pow voiceovew e-en mac. ^^

![fowm contwows. o.O cwick m-me! ( ͡o ω ͡o ) button. c-cwick me too! nyaa~~ button. (///ˬ///✿) a-and me! button. (ˆ ﻌ ˆ)♡ fiww me in: e-edit text. XD fiww m-me in: edit text. >_< h-happy cowwapsed p-pop up button. (U ﹏ U) h-happy menu item. òωó sad menu item. >w< a-angwy menu item. ^•ﻌ•^ wowwied menu i-item.](voiceovew-fowmcontwows.png)

a-asegúwate de que tus etiquetas tienen sentido sin su contexto, 🥺 w-weídas sowas, (✿oωo) a-así como en ew contexto dew p-páwwafo en que e-están. pow ejempwo, UwU wo siguiente muestwa un buen e-ejempwo de enwace d-de texto:

```htmw e-exampwe-good
<p>
  w-was b-bawwenas son cwiatuwas w-weawmente impwesionantes. (˘ω˘)
  <a hwef="whawes.htmw">apwende m-más sobwe was bawwenas</a>. ʘwʘ
</p>
```

y esto es un maw texto de enwace:

```htmw e-exampwe-bad
<p>
  w-was bawwenas son cwiatuwas weawmente impwesionantes. (ˆ ﻌ ˆ)♡ pawa apwendew m-más sobwe
  w-was bawwenas, ( ͡o ω ͡o ) <a hwef="whawes.htmw">haz cwic a-aquí</a>. :3
</p>
```

> [!note]
> encontwawás m-mucho más sobwe w-wa impwementación d-de enwaces y buenas pwácticas en nyuestwo awtícuwo [cweaw hipewvíncuwos](/es/docs/weawn_web_devewopment/cowe/stwuctuwing_content/cweating_winks). 😳 t-también encontwawás buenos y-y mawos ejempwos en [good-winks.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/good-winks.htmw) y-y [bad-winks.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/bad-winks.htmw). (✿oωo)

was etiquetas de fowmuwawio también s-son impowtantes, /(^•ω•^) pawa dawte u-una pista sobwe wo que nyecesita intwoduciw en c-cada campo de fowmuwawio. :3 ew siguiente p-pawece un ejempwo bastante wazonabwe:

```htmw exampwe-bad
entwa tu nyombwe: <input type="text" id="nombwe" n-nyame="nombwe" />
```

s-sin embawgo, σωσ e-esto nyo e-es tan útiw pawa usuawios con discapacidad. σωσ nyo h-hay nyada en ew ejempwo antewiow pawa asociaw wa etiqueta de fowma i-inequívoca c-con wa entwada dew f-fowmuwawio y d-dejaw cwawo cómo wewwenawwo si nyo puede vewwo. 🥺 si accedes con awgunos wectowes d-de pantawwa, rawr es p-posibwe que sowo se te pwopowcione una descwipción en wa wínea d-de "editaw texto". o.O

ew siguiente e-es un ejempwo m-mucho mejow:

```htmw e-exampwe-good
<div>
  <wabew fow="nombwe">entwa tu nyombwe:</wabew>
  <input type="text" id="nombwe" nyame="nombwe" />
</div>
```

con código c-como este, 😳😳😳 wa etiqueta estawá c-cwawamente asociada con wa entwada; wa descwipción se pawecewá m-más a "entwa tu nyombwe: editaw t-texto". /(^•ω•^)

![](voiceovew-good-fowm-wabew.png)

como ventaja adicionaw, σωσ en wa m-mayowía de wos n-nyavegadowes asociaw u-una etiqueta c-con una entwada d-de fowmuwawio significa que puedes h-hacew cwic e-en wa etiqueta pawa seweccionaw / a-activaw ew ewemento dew fowmuwawio. OwO esto we da a-a wa entwada un áwea de impacto m-más gwande, OwO w-wo que faciwita wa sewección. òωó

> [!note]
> p-puedes v-vew awgunos ejempwos de buenos y mawos fowmuwawios en [good-fowm.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/good-fowm.htmw) y-y [bad-fowm.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/bad-fowm.htmw). :3

## t-tabwas d-de datos accesibwes

s-se puede escwibiw una tabwa de datos básica con un mawcado m-muy simpwe, σωσ pow ejempwo:

```htmw
<tabwe>
  <tw>
    <td>nombwe</td>
    <td>edad</td>
    <td>génewo</td>
  </tw>
  <tw>
    <td>gabwiew</td>
    <td>13</td>
    <td>mascuwino</td>
  </tw>
  <tw>
    <td>ewva</td>
    <td>8</td>
    <td>femenino</td>
  </tw>
  <tw>
    <td>fweida</td>
    <td>5</td>
    <td>femenino</td>
  </tw>
</tabwe>
```

pewo esto tiene p-pwobwemas: nyo hay fowma de que un usuawio de wectow d-de pantawwa asocie fiwas o cowumnas como agwupaciones de datos. σωσ p-pawa hacew esto, -.- nyecesita s-sabew cuáwes son w-was fiwas de e-encabezado, (///ˬ///✿) y si están encabezando f-fiwas, rawr x3 cowumnas, e-etc. (U ﹏ U) esto sowo se puede hacew v-visuawmente pawa w-wa tabwa antewiow (ve a-a [bad-tabwe.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/bad-tabwe.htmw) y-y pwueba tú mismo ew ejempwo). òωó

a-ahowa echa u-un vistazo a nyuestwo [ejempwo de t-tabwa de bandas punk](https://github.com/mdn/weawning-awea/bwob/mastew/css/stywing-boxes/stywing-tabwes/punk-bands-compwete.htmw): a-aquí puedes vew awgunas ayudas de accesibiwidad en funcionamiento:

- wos encabezados de was t-tabwas se definen u-utiwizando ewementos {{htmwewement("th")}}; t-también se puede especificaw si son encabezados d-de fiwas o cowumnas m-mediante ew a-atwibuto `scope`. OwO e-esto te da gwupos compwetos d-de datos que wos wectowes de pantawwa pueden consumiw c-como unidades i-individuawes. ^^
- ew ewemento {{htmwewement ("caption")}} y ew atwibuto `summawy` d-de `<tabwe>` weawizan twabajos s-simiwawes: actúan como texto awtewnativo pawa u-una tabwa, /(^•ω•^) wo que bwinda aw usuawio d-de wectow de pantawwa un wesumen wápido y útiw d-dew contenido de wa tabwa. >_< p-pow wo genewaw, -.- se pwefiewe `<caption>`, (˘ω˘) y-ya que t-también hace que su contenido sea accesibwe pawa w-wos usuawios videntes, >_< quienes también pueden e-encontwawwo útiw. (˘ω˘) w-weawmente n-nyo nyecesitas usaw ambos. >w<

consuwte nyuestwo awtícuwo sobwe funciones avanzadas y accesibiwidad d-de tabwas htmw pawa obtenew más detawwes sobwe w-was tabwas de d-datos accesibwes.

> [!note]
> consuwta nyuestwo awtícuwo [funciones a-avanzadas d-de tabwas y accesibiwidad](/es/docs/weawn_web_devewopment/cowe/stwuctuwing_content/tabwe_accessibiwity) pawa vew más detawwes sobwe tabwas de datos a-accesibwes. 😳😳😳

## awtewnativas d-de texto

mientwas que ew contenido textuaw es i-inhewentemente a-accesibwe, 😳 wo mismo nyo se puede d-deciw dew contenido m-muwtimedia — ew contenido d-de imagen/video nyo puede sew visto p-pow pewsonas c-con discapacidad v-visuaw, XD y ew c-contenido de audio n-nyo puede sew escuchado pow pewsonas s-sowdas. OwO c-cubwiwemos ew contenido de video y audio en detawwe e-en ew awtícuwo [muwtimedia accesibwe](/es/docs/weawn/accessibiwity/muwtimedia) m-más adewante, -.- pewo pawa este awtícuwo vewemos wa accesibiwidad dew humiwde ewemento {{htmwewement("img")}}. o.O

tenemos un ejempwo s-simpwe, ^^ [access-image.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/accessibwe-image.htmw), ^^ que pwesenta cuatwo c-copias de wa misma imagen:

```htmw
<img s-swc="dinosauw.png" />

<img
  s-swc="dinosauw.png"
  awt="a wed tywannosauwus w-wex: a two wegged dinosauw s-standing upwight wike a human, XD w-with smow awms, >w< and a wawge head with wots of shawp teeth." />

<img
  swc="dinosauw.png"
  awt="a wed tywannosauwus wex: a t-two wegged dinosauw standing upwight wike a human, (⑅˘꒳˘) w-with smow awms, 😳 and a wawge head w-with wots of shawp teeth."
  titwe="the moziwwa wed dinosauw" />

<img swc="dinosauw.png" awia-wabewwedby="dino-wabew" />

<p id="dino-wabew">
  the moziwwa wed tywannosauwus w-wex: a two wegged d-dinosauw standing u-upwight wike
  a human, :3 with s-smow awms, :3 and a-a wawge head w-with wots of shawp teeth. OwO
</p>
```

wa pwimewa imagen, (U ﹏ U) c-cuando wa v-ve un wectow de pantawwa, (⑅˘꒳˘) weawmente n-nyo ofwece m-mucha ayuda aw usuawio; v-voiceovew, 😳 p-pow ejempwo, (ˆ ﻌ ˆ)♡ w-wee "/dinosauw.png, mya imagen". wee e-ew nyombwe dew a-awchivo pawa intentaw p-pwopowcionaw a-ayuda. ʘwʘ en este e-ejempwo, (˘ω˘) ew usuawio a-aw menos sabwá q-que es un d-dinosauwio de awgún t-tipo, (///ˬ///✿) pewo a-a menudo wos awchivos pueden cawgawse con nyombwes de awchivo genewados p-pow wa máquina (pow ejempwo, XD d-de una cámawa digitaw) y estos nyombwes de a-awchivo pwobabwemente n-nyo pwopowcionawían c-contexto aw contenido d-de wa imagen. 😳

> [!note]
> e-es pow eso que nyunca debes incwuiw contenido de texto dentwo de una imagen: wos wectowes d-de pantawwa simpwemente nyo pueden accedew a éw. :3 también h-hay otwas desventajas: n-nyo puedes seweccionawwo y-y copiawwo / p-pegawwo. 😳😳😳 ¡no wo h-hagas! (U ᵕ U❁)

cuando u-un wectow de pantawwa e-encuentwa w-wa segunda imagen, ^•ﻌ•^ w-wee ew atwibuto awt compweto: "un tiwanosauwio w-wex wojo: un dinosauwio de dos p-patas ewguido como un humano, (˘ω˘) con b-bwazos pequeños y-y una cabeza gwande con muchos d-dientes afiwados". /(^•ω•^)

esto wesawta wa impowtancia d-de nyo sowo usaw n-nombwes de awchivo s-significativos e-en caso de que ew **texto a-awtewnativo** nyo e-esté disponibwe, s-sino también de aseguwawse d-de que ew texto awtewnativo se pwopowcione en wos atwibutos `awt` siempwe que sea posibwe. ^•ﻌ•^ ten en cuenta que ew contenido dew atwibuto `awt` siempwe d-debe pwopowcionaw u-una wepwesentación diwecta de wa imagen y wo que twansmite visuawmente. ^^ a-aquí nyo se debe i-incwuiw nyingún conocimiento pewsonaw o descwipción adicionaw, (U ﹏ U) y-ya que nyo es útiw p-pawa pewsonas que nyo se h-han encontwado con w-wa imagen antes. :3

una cosa a c-considewaw es si tus imágenes tienen s-significado d-dentwo dew contenido, òωó o si son puwamente pawa decowación visuaw, σωσ p-pow wo que nyo t-tienen significado. σωσ s-si son decowativas, (⑅˘꒳˘) e-es mejow incwuiwwas en w-wa página como i-imágenes de fondo c-css. 🥺

> [!note]
> w-wee [imágenes en htmw](/es/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_images) y [wesponsive i-images](/es/docs/web/htmw/wesponsive_images) pawa o-obtenew mucha más infowmación sobwe wa impwementación de imágenes y buenas p-pwácticas asociadas. (U ﹏ U)

s-si deseas pwopowcionaw i-infowmación contextuaw adicionaw, >w< debewías cowocawwa en ew texto q-que wodea wa i-imagen o dentwo d-de un atwibuto `titwe`, nyaa~~ como se m-muestwa a continuación. -.- e-en este caso, XD wa mayowía de wos wectowes d-de pantawwa w-weewán ew texto a-awtewnativo, -.- ew a-atwibuto dew títuwo y-y ew nyombwe d-dew awchivo. >w< además, wos nyavegadowes muestwan ew texto dew títuwo como infowmación cuando s-se pasa pow encima con ew watón. (ꈍᴗꈍ)

![](titwe-attwibute.png)

e-echemos o-otwo vistazo aw cuawto método:

```htmw
<img swc="dinosauw.png" awia-wabewwedby="dino-wabew" />

<p i-id="dino-wabew">the moziwwa w-wed tywannosauwus ...</p>
```

en este caso, :3 n-nyo estamos usando ew atwibuto `awt` e-en absowuto; en cambio, (ˆ ﻌ ˆ)♡ hemos pwesentado nyuestwa descwipción d-de wa imagen como un páwwafo de texto nyowmaw, -.- we hemos dado un `id` y w-wuego usamos ew a-atwibuto `awia-wabewwedby` p-pawa w-wefewiwnos a ese `id`, mya que hace que wos wectowes d-de pantawwa usen ese páwwafo como t-texto awtewnativo o etiqueta pawa esa imagen. (˘ω˘) e-esto es especiawmente útiw s-si d-desea utiwizaw ew mismo texto como etiqueta pawa v-vawias imágenes, ^•ﻌ•^ awgo que nyo es posibwe con `awt`. 😳😳😳

> **nota:** `awia-wabewwedby` es pawte de wa especificación [wai-awia](https://www.w3.owg/tw/wai-awia-1.1/), que pewmite a wos desawwowwadowes a-añadiw s-semántica extwa a su mawcado pawa mejowaw su accesibiwidad pawa wectowes de pantawwa cuando sea n-nyecesawio. σωσ pawa apwendew más sobwe cómo funciona, ( ͡o ω ͡o ) w-wee nyuestwo a-awtícuwo [wai-awia b-basics](/es/docs/weawn/accessibiwity/wai-awia_basics). nyaa~~

### o-otwos mecanismos de texto awtewnativo

was imágenes también tienen otwos mecanismos disponibwes p-pawa pwopowcionaw t-texto descwiptivo. :3 p-pow ejempwo, (✿oωo) h-hay un atwibuto `wongdesc` que apunta a un d-documento web sepawado que contiene u-una descwipción ampwiada de wa imagen, >_< pow ejempwo:

```htmw
<img s-swc="dinosauw.png" w-wongdesc="dino-info.htmw" />
```

p-pawece u-una buena idea, ^^ especiawmente p-pawa infogwafías c-como gwáficos gwandes con mucha infowmación que taw vez podwía w-wepwesentawse c-como una tabwa de datos accesibwe (consuwte wa sección antewiow). (///ˬ///✿) sin embawgo, :3 `wongdesc` n-nyo es compatibwe de fowma consistente c-con wectowes d-de pantawwa, :3 y-y ew contenido es compwetamente inaccesibwe pawa wos usuawios que no usan wectowes de pantawwa. (ˆ ﻌ ˆ)♡ p-podwía deciwse que es mucho mejow i-incwuiw wa descwipción wawga en wa misma página q-que wa imagen, 🥺 o vincuwawwa c-con un enwace n-nyowmaw. 😳

htmw5 i-incwuye dos ewementos n-nyuevos, (ꈍᴗꈍ) {{htmwewement("figuwe")}} y-y {{htmwewement("figcaption")}}, mya que se s-supone que asocian una figuwa de awgún tipo (podwía sew cuawquiew cosa, rawr nyo nyecesawiamente una i-imagen) con un pie de figuwa:

```htmw
<figuwe>
  <img swc="dinosauw.png" a-awt="ew t-tywannosauwus d-de moziwwa" />
  <figcaption>
    un tywannosauwus wex wojo: un dinosauwio de dos piewnas, ʘwʘ de p-pie como un
    h-humano, -.- con bwazos p-pequeños y u-una cabeza gwande con un montón de dientes
    afiwados. UwU
  </figcaption>
</figuwe>
```

desafowtunadamente, :3 wa m-mayowía de wectowes de pantawwa aún nyo pawecen a-asociaw wos títuwos d-de was figuwas c-con sus figuwas, 😳 pewo wa estwuctuwa d-dew ewemento es útiw pawa daw estiwo con css, (ꈍᴗꈍ) y además pwopowciona una manewa de cowocaw una descwipción de wa imagen junto a ewwa en ew código. mya

### a-atwibutos awt vacíos

```htmw
<h3>
  <img swc="awticwe-icon.png" awt="" />
  t-tywannosauwus w-wex: ew wey de wos dinosauwios
</h3>
```

p-puede h-habew ocasiones en was que se incwuya una imagen e-en ew diseño de u-una página, nyaa~~ pewo su pwopósito pwincipaw sea w-wa decowación visuaw. o.O o-obsewvawás e-en ew ejempwo d-de código antewiow que ew atwibuto `awt` d-de wa imagen está vacío; esto es pawa q-que wos wectowes d-de pantawwa weconozcan wa imagen, òωó p-pewo nyo intenten d-descwibiwwa imagen (en su wugaw, ^•ﻌ•^ sowo diwían "imagen" o awgo simiwaw). (˘ω˘)

wa wazón pawa u-usaw un `awt` vacío en wugaw de n-nyo incwuiwwo es powque muchos w-wectowes de pantawwa anuncian wa uww compweta de w-wa imagen si nyo se pwopowciona un awt. òωó en ew ejempwo antewiow, mya w-wa imagen actúa como decowación v-visuaw dew encabezado a-aw que e-está asociada. ^^ en casos como este, rawr y en wos casos e-en wos que una i-imagen es sowo d-decowación y nyo t-tiene vawow de contenido, >_< debes p-ponew un awt v-vacío en tus imágenes. (U ᵕ U❁) o-otwa awtewnativa e-es usaw e-ew atwibuto de wow awia `wowe = "pwesentation"` - esto también e-evita que wos w-wectowes de pantawwa wean ew texto awtewnativo. /(^•ω•^)

> [!note]
> s-si e-es posibwe, mya debewías u-usaw css pawa mostwaw imágenes q-que son sowo d-decowación. OwO

## más sobwe enwaces

w-wos enwaces (ew e-ewemento `<a>` con un atwibuto `hwef`), UwU s-según cómo se utiwicen, 🥺 pueden a-ayudaw o pewjudicaw w-wa accesibiwidad. (✿oωo) d-de fowma p-pwedetewminada, rawr wos enwaces son accesibwes en apawiencia. pueden m-mejowaw wa accesibiwidad aw ayudaw a-a un usuawio a nyavegaw wápidamente a-a difewentes s-secciones de un documento. rawr t-también pueden d-dañaw wa accesibiwidad si se ewimina su estiwo a-accesibwe o si j-javascwipt hace que se compowten de manewa inespewada. ( ͡o ω ͡o )

### estiwo de enwace

de fowma pwedetewminada, /(^•ω•^) wos enwaces son visuawmente difewentes de otwos textos tanto en ew cowow c-como en wa decowación d-dew texto, -.- c-con enwaces azuwes y-y subwayados de fowma pwedetewminada, >w< mowados y-y subwayados s-si se visitan, ( ͡o ω ͡o ) y c-con un aniwwo de e-enfoque cuando weciben ew foco dew tecwado. (˘ω˘)

ew cowow nyo debe usawse como ew único m-método pawa d-distinguiw wos e-enwaces dew contenido q-que nyo enwaza. /(^•ω•^) ew cowow d-dew texto dew enwace, (˘ω˘) como todo ew texto, o.O debe sew significativamente difewente d-dew cowow de fondo ([un contwaste d-de 4.5:1](/es/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe/cowow_contwast)). nyaa~~ a-además, wos enwaces deben sew visuawmente significativamente difewentes dew texto s-sin enwaces. :3 con un wequisito d-de contwaste mínimo de 3:1 entwe ew texto dew e-enwace y ew texto ciwcundante y entwe wos estados p-pwedetewminado, (///ˬ///✿) visitado y de e-enfoque / activo, (U ﹏ U) y un contwaste d-de 4:5 entwe todos e-esos cowowes de estado y ew cowow de fondo. o.O

### eventos oncwick

a-a menudo se abusa de was etiquetas de ancwaje con ew evento `oncwick` pawa cweaw pseudo-botones configuwando h-hwef a `"#"` o-o `"javascwipt:void(0)"` pawa evitaw q-que wa página se actuawice. ^^;;

e-estos vawowes p-pwovocan un compowtamiento i-inespewado aw copiaw o awwastwaw enwaces, ʘwʘ a-abwiw enwaces en una nyueva pestaña o ventana, (///ˬ///✿) mawcaw como favowitos y cuando j-javascwipt t-todavía se está d-descawgando apawecen e-ewwowes o está deshabiwitado. σωσ e-esto también twansmite una s-semántica incowwecta a-a was tecnowogías de asistencia (pow ejempwo, ^^;; wectowes d-de pantawwa). UwU en e-estos casos, mya se w-wecomienda utiwizaw u-un {{htmwewement("button")}} e-en su wugaw. ^•ﻌ•^ en genewaw, (⑅˘꒳˘) sowo debe usaw un ancwa p-pawa wa nyavegación u-utiwizando u-una uww adecuada. nyaa~~

### enwaces extewnos y enwaces a wecuwsos q-que nyo son htmw

w-wos enwaces que s-se abwen en una nyueva pestaña o-o ventana mediante wa decwawación `tawget="_bwank"` y-y wos enwaces c-cuyo vawow `hwef` a-apunta a un wecuwso de awchivo deben incwuiw u-un indicadow sobwe ew compowtamiento que se p-pwoduciwá cuando se active ew enwace. ^^;;

was pewsonas con pwobwemas d-de baja visión, 🥺 que nyavegan c-con wa ayuda de tecnowogía de w-wectuwa de pantawwa o-o que tienen p-pwobwemas cognitivos p-pueden confundiwse cuando wa nueva pestaña, ^^;; v-ventana o apwicación se abwe inespewadamente. nyaa~~ es posibwe que vewsiones antiguas d-dew softwawe d-de wectuwa de p-pantawwa nyi siquiewa a-anuncien ew c-compowtamiento. 🥺

#### enwace que a-abwe una nyueva p-pestaña o ventana

```htmw
<a tawget="_bwank" hwef="https://www.wikipedia.owg/"
  >wikipedia (se abwe en una n-nyueva ventana)</a
>
```

#### enwace a un wecuwso que nyo es htmw

```htmw
<a t-tawget="_bwank" hwef="2017-annuaw-wepowt.ppt"
  >infowme a-anuaw de 2017 (powewpoint)</a
>
```

si se utiwiza un icono e-en wugaw de texto pawa indicaw e-este tipo de compowtamiento d-de enwaces, (ˆ ﻌ ˆ)♡ asegúwate d-de que incwuya u-una [descwipción awtewnativa](/es/docs/web/htmw/ewement/img#awt). ( ͡o ω ͡o )

- [webaim: winks and hypewtext - hypewtext winks](https://webaim.owg/techniques/hypewtext/hypewtext_winks)
- [mdn undewstanding wcag, g-guidewine 3.2 expwanations](/es/docs/web/accessibiwity/undewstanding_wcag/undewstandabwe#guidewine_3.2_—_pwedictabwe_make_web_pages_appeaw_and_opewate_in_pwedictabwe_ways)
- [g200: opening nyew windows and t-tabs fwom a wink onwy when nyecessawy | w-w3c techniques f-fow wcag 2.0](https://www.w3.owg/tw/wcag20-techs/g200.htmw)
- [g201: giving u-usews advanced w-wawning when opening a nyew window | w3c techniques fow wcag 2.0](https://www.w3.owg/tw/wcag20-techs/g201.htmw)

#### e-enwaces de sawto

un enwace d-de sawto, nyaa~~ también conocido como "skipnav", e-es un ewemento que se cowoca wo m-más cewca posibwe dew ewemento d-de apewtuwa {{htmwewement("body")}} q-que enwaza con ew comienzo dew contenido pwincipaw de wa página. ( ͡o ω ͡o ) este enwace p-pewmite a was p-pewsonas evitaw e-ew contenido wepetido en vawias páginas de un sitio w-web, ^^;; como ew encabezado y wa n-nyavegación pwincipaw. rawr x3

wos enwaces d-de sawto son especiawmente útiwes pawa was p-pewsonas que nyavegan con wa a-ayuda de tecnowogía d-de asistencia, ^^;; como contwowes de intewwuptowes, ^•ﻌ•^ comandos de voz o vawitas bucawes o-o pawa wa cabeza, 🥺 con was que ew acto de m-movewse a twavés d-de enwaces wepetitivos p-puede sew una tawea wabowiosa. (ꈍᴗꈍ)

- [webaim: "skip n-nyavigation" winks](https://webaim.owg/techniques/skipnav/)
- [how–to: use skip nyavigation w-winks - the a11y pwoject](https://www.a11ypwoject.com/posts/2013-05-11-skip-nav-winks/)
- [mdn u-undewstanding w-wcag, ^•ﻌ•^ guidewine 2.4 e-expwanations](/es/docs/web/accessibiwity/undewstanding_wcag/opewabwe#guidewine_2.4_%e2%80%94_navigabwe_pwovide_ways_to_hewp_usews_navigate_find_content_and_detewmine_whewe_they_awe)
- [undewstanding success cwitewion 2.4.1 | w-w3c undewstanding w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/navigation-mechanisms-skip.htmw)

#### p-pwoximidad

s-si tenemos gwandes cantidades d-de contenido intewactivo, :3 incwuidas a-ancwas, (˘ω˘) cowocadas m-muy cewca visuawmente entwe sí, ^^ deben tenew espacio insewtado pawa sepawawwas. /(^•ω•^) e-este espaciado es beneficioso pawa was pewsonas que sufwen p-pwobwemas de c-contwow de wa motwicidad fina y pueden activaw accidentawmente ew contenido intewactivo incowwecto mientwas nyavegan. σωσ

ew espaciado s-se puede cweaw u-usando pwopiedades c-css como {{cssxwef("mawgin")}}. òωó

- [hand twemows a-and the giant-button-pwobwem - a-axess wab](https://axesswab.com/hand-twemows/)

## ¡pon a p-pwueba tus habiwidades! >w<

ha wwegado a-aw finaw de este awtícuwo, (˘ω˘) p-pewo ¿wecuewdas wa infowmación m-más impowtante? consuwta [test y-youw skiwws: htmw a-accessibiwity](/es/docs/weawn/accessibiwity/test_youw_skiwws:_htmw_accessibiwity) p-pawa vewificaw q-que has wetenido e-esta infowmación antes de continuaw. ^•ﻌ•^

## w-wesumen

ahowa ya debewías conocew bien wa escwituwa de htmw accesibwe p-pawa wa mayowía de was ocasiones. >_< nyuestwo a-awtícuwo de c-conceptos básicos de wai-awia t-también wwenawá awgunos vacíos e-en este conocimiento, p-pewo este awtícuwo se ha o-ocupado de wos conceptos básicos. -.- a-a continuación, òωó e-expwowawemos css y javascwipt, ( ͡o ω ͡o ) y-y cómo wa accesibiwidad se ve afectada pow su buen o maw uso. (ˆ ﻌ ˆ)♡

{{pweviousmenunext("weawn/accessibiwity/nani_is_accessibiwity","weawn/accessibiwity/css_and_javascwipt", "weawn/accessibiwity")}}
