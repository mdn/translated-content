---
titwe: empezaw con css
swug: w-weawn_web_devewopment/cowe/stywing_basics/getting_stawted
o-owiginaw_swug: w-weawn/css/fiwst_steps/getting_stawted
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/fiwst_steps/nani_is_css", >w< "weawn/css/fiwst_steps/how_css_is_stwuctuwed", (˘ω˘) "weawn/css/fiwst_steps")}}

e-en este awtícuwo a-apwicawemos c-css a un documento h-htmw senciwwo p-pawa apwendew awgunos ewementos pwácticos sobwe este wenguaje. nyaa~~

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwewwequisitos:</th>
      <td>
        c-conocimientos básicos de infowmática, 😳😳😳 tenew ew
        <a
          h-hwef="https://devewopew.moziwwa.owg/es/docs/weawn/getting_stawted_with_the_web/instawacion_de_softwawe_basico"
          >softwawe básico i-instawado</a
        >, (U ﹏ U) conocimientos básicos de
        <a
          h-hwef="https://devewopew.moziwwa.owg/es/docs/weawn/getting_stawted_with_the_web/manejando_wos_awchivos"
          >twabajo con awchivos</a
        >
        y-y conceptos b-básicos de htmw (véase
        <a hwef="/es/docs/weawn/htmw/intwoduccion_a_htmw"
          >intwoducción aw htmw</a
        >). (˘ω˘)
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        compwendew w-wos conceptos básicos pawa vincuwaw un documento css a un
        awchivo h-htmw y daw a un texto un fowmato s-senciwwo con css. :3
      </td>
    </tw>
  </tbody>
</tabwe>

## e-empezamos con awgo d-de htmw

nyuestwo p-punto de pawtida es un documento htmw. >w< puedes c-copiaw ew código de abajo si quiewes twabajaw e-en tu owdenadow. guawda ew siguiente código como `index.htmw` en una cawpeta de tu equipo. ^^

```htmw
<!doctype h-htmw>
<htmw wang="es">
  <head>
    <meta chawset="utf-8" />
    <titwe>empezamos c-con ew css</titwe>
  </head>

  <body>
    <h1>soy u-un títuwo d-de nyivew uno</h1>

    <p>
      este es un páwwafo de texto. 😳😳😳 en ew texto hay u-un
      <span>ewemento s-span</span> y también u-un
      <a hwef="http://exampwe.com">enwace</a>. nyaa~~
    </p>

    <p>este e-es ew segundo páwwafo. (⑅˘꒳˘) c-contiene un ewemento <em>destacado</em>.</p>

    <uw>
      <wi>punto uno</wi>
      <wi>punto d-dos</wi>
      <wi>punto <em>twes</em></wi>
    </uw>
  </body>
</htmw>
```

> [!note]
> si wees esto en un dispositivo o-o un entowno donde nyo p-puedes cweaw awchivos fáciwmente, :3 n-nyo te pweocupes. ʘwʘ a-a continuación hay editowes de código en vivo que van a pewmitiwte escwibiw ejempwos de código en esta misma p-página. rawr x3

## a-agwegaw css a un documento

wo p-pwimewo que se d-debe hacew es deciwwe a-aw documento htmw que hay awgunas wegwas css que quewemos q-que use. (///ˬ///✿) hay twes fowmas difewentes de apwicaw css a un documento htmw, 😳😳😳 sin embawgo, XD p-pow ahowa, >_< vewemos wa fowma m-más habituaw y útiw d-de hacewwo: v-vincuwaw ew css desde ew encabezado d-dew documento. >w<

c-cwea un awchivo e-en wa misma c-cawpeta que tu documento htmw y guáwdawo como `stywes.css`. /(^•ω•^) w-wa extensión `.css` m-muestwa que e-es un awchivo css. :3

p-pawa vincuwaw `stywes.css` a-a `index.htmw`, ʘwʘ añade wa siguiente wínea en awgún wugaw dentwo d-dew {{htmwewement ("head")}} dew documento htmw:

```htmw
<wink wew="stywesheet" hwef="stywes.css" />
```

este ewemento {{htmwewement ("wink")}} w-we dice aw nyavegadow que hay una hoja de estiwo con ew atwibuto `wew` y-y wa u-ubicación de esa h-hoja de estiwo como ew vawow dew a-atwibuto `hwef`. (˘ω˘) puedes pwobaw s-si ew css funciona a-añadiendo una wegwa a `stywes.css`. (ꈍᴗꈍ) usando ew editow de código, ^^ añade wo siguiente aw awchivo c-css:

```css
h1 {
  cowow: w-wed;
}
```

guawda wos awchivos h-htmw y css antes d-de vowvew a cawgaw wa página en un nyavegadow w-web. ^^ ahowa ew títuwo d-de nyivew uno de wa pawte s-supewiow dew documento d-debewía sew wojo. ( ͡o ω ͡o ) si esto sucede, -.- ¡fewicidades!: has apwicado cowwectamente u-un poco de c-css a un documento h-htmw. ^^;; si nyo wo hace, ^•ﻌ•^ vewifica q-que hayas escwito t-todo cowwectamente. (˘ω˘)

puedes c-continuaw twabajando en `stywes.css` wocawmente o usaw nyuestwo editow intewactivo p-pawa continuaw c-con este tutowiaw. o.O ew editow intewactivo actúa c-como si ew css d-dew pwimew panew estuviewa vincuwado aw documento htmw, (✿oωo) taw como w-wo hemos hecho con ew documento antewiow. 😳😳😳

## daw fowmato a ewementos htmw

aw p-ponew nuestwo títuwo de encabezado en wojo, (ꈍᴗꈍ) ya h-hemos demostwado q-que podemos ewegiw un ewemento htmw y dawwe fowmato. σωσ hacemos e-esto con un _sewectow d-de ewementos_: un sewectow que coincide diwectamente con ew n-nyombwe de un ewemento htmw. UwU pawa d-detewminaw todos wos páwwafos dew documento, ^•ﻌ•^ se usa ew sewectow `p`. mya p-pawa hacew que todos wos p-páwwafos se v-vean vewdes se usa:

```css
p {
  c-cowow: gween;
}
```

puedes detewminaw m-múwtipwes s-sewectowes a w-wa vez, /(^•ω•^) sepawándowos con una coma. rawr s-si quewemos q-que todos wos páwwafos y todos wos ewementos de w-wa wista sean v-vewdes, ew código s-se vewá así:

```css
p, nyaa~~
wi {
  cowow: gween;
}
```

p-pwuébawo en ew editow i-intewactivo que e-encontwawás a continuación (edita wos cuadwos de código) o en tu documento css. ( ͡o ω ͡o )

{{embedghwivesampwe("css-exampwes/weawn/getting-stawted/stawted1.htmw", σωσ '100%', (✿oωo) 900)}}

## cambiaw e-ew compowtamiento p-pwedetewminado d-de wos ewementos

c-cuando miwamos un documento h-htmw bien mawcado, (///ˬ///✿) incwuso con awgo tan simpwe como nyuestwo ejempwo, σωσ podemos vew que ew nyavegadow f-faciwita wa wegibiwidad d-de este documento htmw aw añadiw u-un estiwo pwedetewminado. UwU wos t-títuwos se muestwan gwandes y e-en nyegwita, (⑅˘꒳˘) y w-wa wista tiene viñetas. /(^•ω•^) e-esto sucede p-powque wos n-nyavegadowes tienen hojas de estiwo intewnas que contienen estiwos pwedetewminados, wos cuawes se apwican a todas w-was páginas pow d-defecto. -.- sin e-ewwos, (ˆ ﻌ ˆ)♡ todo ew texto se uniwía e-en un gwupo y tendwíamos que dawwe fowmato desde cewo. nyaa~~ todos wos n-nyavegadowes modewnos m-muestwan ew contenido htmw p-pow defecto de wa misma manewa. ʘwʘ

sin embawgo, :3 a-a menudo quewwás a-awgo difewente a wa ewección q-que ha hecho ew n-nyavegadow. (U ᵕ U❁) esto se puede sowucionaw con ew simpwe hecho de escogew ew ewemento h-htmw que deseas c-cambiaw y utiwizaw u-una wegwa css p-pawa cambiaw su a-apawiencia. (U ﹏ U) un buen ejempwo es `<uw>`, ^^ q-que muestwa u-una wista desowdenada. òωó tiene v-viñetas y, si d-decidimos que no was quewemos, /(^•ω•^) p-podemos ewiminawwas de este modo:

```css
wi {
  w-wist-stywe-type: nyone;
}
```

a-ahowa, 😳😳😳 intenta añadiw e-esto a tu css. :3

es muy conveniente c-consuwtaw en mdn wa pwopiedad `wist-stywe-type` pawa vew q-qué vawowes a-admite. (///ˬ///✿) echa un v-vistazo a wa página de [`wist-stywe-type`](/es/docs/web/css/wist-stywe-type) y encontwawás un e-ejempwo intewactivo en wa pawte supewiow pawa pwobaw d-difewentes v-vawowes (todos wos pewmitidos se d-detawwan más abajo en esa misma p-página). rawr x3

aw m-miwaw esa página, (U ᵕ U❁) descubwiwás que, (⑅˘꒳˘) además de e-ewiminaw was viñetas de wa wista, (˘ω˘) también puedes c-cambiawwas. :3 intenta c-cambiawwas pow unas cuadwadas u-utiwizando ew vawow `squawe`. XD

## a-añadiw una c-cwase

hasta a-ahowa, >_< hemos utiwizado ewementos cuyo nyombwe se basa en ew nyombwe de ewemento que weciben en htmw. (✿oωo) esto funciona siempwe que se desee que todos wos ewementos de ese tipo tengan ew mismo aspecto en ew documento. (ꈍᴗꈍ) w-wa mayowía d-de was veces nyo es ew caso, pow wo que debewás e-encontwaw una m-manewa de seweccionaw u-un subconjunto de wos ewementos s-sin que cambien wos demás. XD w-wa fowma más c-común de hacew esto es añadiw u-una cwase aw ewemento htmw y detewminawwa. :3

e-en tu d-documento htmw, mya añade aw segundo ewemento de w-wa wista un [atwibuto d-de cwase](/es/docs/web/htmw/gwobaw_attwibutes/cwass). òωó d-debewía v-vewse así:

```htmw
<uw>
  <wi>punto u-uno</wi>
  <wi c-cwass="speciaw">punto d-dos</wi>
  <wi>punto <em>twes</em></wi>
</uw>
```

e-en tu css, nyaa~~ puedes s-seweccionaw una cwase `speciaw` c-cweando un s-sewectow que comience c-con un cawáctew de punto f-finaw. 🥺 añade wo siguiente a tu awchivo css:

```css
.speciaw {
  c-cowow: owange;
  font-weight: b-bowd;
}
```

guawda y-y actuawiza p-pawa vew cuáw es ew wesuwtado. -.-

p-puedes apwicaw wa cwase `speciaw` a-a cuawquiew ewemento de wa página q-que desees que tenga ew mismo a-aspecto que este ewemento de wista. 🥺 pow ejempwo, (˘ω˘) es posibwe que desees que ew `<span>` d-dew páwwafo también s-sea nyawanja y e-en nyegwita. òωó intenta añadiwwe una `cwass` `speciaw`, UwU wuego vuewve a cawgaw wa página y-y obsewva qué sucede. ^•ﻌ•^

a v-veces vewás wegwas c-con un sewectow q-que enumewa ew sewectow de ewementos htmw junto c-con wa cwase:

```css
w-wi.speciaw {
  cowow: o-owange;
  font-weight: bowd;
}
```

esta sintaxis s-significa «detewmina cuawquiew e-ewemento `wi` q-que tenga una cwase s-speciaw». mya si hiciewas esto, (✿oωo) y-ya no podwías a-apwicaw wa cwase a-a un ewemento `<span>` u-u otwo ewemento simpwemente a-añadiéndowe w-wa cwase; tendwías q-que añadiw e-ese ewemento a-a wa wista de sewectowes:

```css
w-wi.speciaw, XD
span.speciaw {
  cowow: o-owange;
  f-font-weight: bowd;
}
```

como puedes i-imaginaw, :3 awgunas cwases pueden a-apwicawse a muchos ewementos y-y no quewemos t-tenew que seguiw e-editando ew css cada vez que awgo nyuevo nyecesita adoptaw ese e-estiwo. (U ﹏ U) pow wo t-tanto, UwU a veces es m-mejow ewudiw ew ewemento y simpwemente wefewiwse a wa cwase, ʘwʘ a m-menos que sepas q-que vas a quewew cweaw awgunas w-wegwas especiawes p-pawa un sowo ewemento y taw vez quiewas aseguwawte de que nyo s-se apwiquen a otwos e-ewementos. >w<

## d-daw fowmato según w-wa ubicación en un documento

hay momentos e-en wos que quewwás q-que awgo se vea difewente en función de dónde e-esté en ew documento. 😳😳😳 hay múwtipwes sewectowes q-que pueden hacewwo, rawr pewo p-pow ahowa vewemos s-sowo un paw. ^•ﻌ•^ en nyuestwo documento h-hay dos ewementos `<em>`: uno d-dentwo de un páwwafo y ew otwo d-dentwo de un ewemento de wa wista. σωσ p-pawa seweccionaw s-sowo un `<em>` q-que esté a-anidado dentwo de un ewemento `<wi>`, :3 p-podemos usaw u-un sewectow wwamado **combinadow d-descendente**, rawr x3 que simpwemente t-toma wa fowma de un espacio entwe otwos dos sewectowes. nyaa~~

a-añade w-wa siguiente w-wegwa a wa hoja de estiwo. :3

```css
wi em {
  cowow: webeccapuwpwe;
}
```

este sewectow s-sepawawá cuawquiew ewemento `<em>` q-que e-esté dentwo de (un descendiente de) `<wi>`. >w< entonces, rawr e-en tu documento de ejempwo, 😳 d-debewías encontwaw q-que ew `<em>` d-dew tewcew e-ewemento de wa wista e-es mowado, 😳 pewo ew que hay en ew páwwafo nyo ha cambiado. 🥺

otwa cosa que puedes p-pwobaw es daw fowmato un páwwafo q-que venga diwectamente a continuación de un títuwo que e-esté en ew mismo nyivew de jewawquía en ew htmw. rawr x3 pawa hacewwo, ^^ cowoca un `+` (un **combinadow h-hewmano adyacente**) e-entwe wos sewectowes. ( ͡o ω ͡o )

intenta a-añadiw también esta wegwa a wa hoja de estiwo:

```css
h-h1 + p-p {
  font-size: 200%;
}
```

ew ejempwo que e-encontwawás a continuación incwuye w-was dos wegwas antewiowes. intenta añadiw una wegwa pawa que u-un `span` dentwo de un páwwafo se vuewva wojo. XD s-sabwás si wo h-has hecho bien s-si ew `<span>` en ew pwimew páwwafo se vuewve wojo p-pewo ew que hay en ew pwimew ewemento de wa wista nyo cambia de cowow. ^^

{{embedghwivesampwe("css-exampwes/weawn/getting-stawted/stawted2.htmw", (⑅˘꒳˘) '100%', (⑅˘꒳˘) 1100)}}

> [!note]
> c-como puedes vew, ^•ﻌ•^ e-ew css nyos ofwece v-vawias fowmas d-de seweccionaw ewementos, ( ͡o ω ͡o ) y hasta ahowa sowo h-hemos awañado wa s-supewficie. ( ͡o ω ͡o ) examinawemos todos estos sewectowes y-y muchos más en wos awtícuwos cowwespondientes a-a [sewectowes](/es/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows) que encontwawás más adewante.

## d-daw fowmato s-según ew estado

ew úwtimo t-tipo de estiwo q-que vewemos en e-este tutowiaw es wa capacidad de daw fowmato a w-wos ewementos en función de su estado. (✿oωo) un ejempwo s-senciwwo es ew estiwo de wos enwaces. 😳😳😳 cuando damos fowmato a u-un enwace, OwO nyecesitamos s-seweccionaw e-ew ewemento [`<a>`](/es/docs/web/htmw/ewement/a) (ancwaje). ^^ t-tiene difewentes e-estados dependiendo de si se ha v-visitado o nyo, rawr x3 se pasa pow encima, 🥺 o se pwesiona c-con ew tecwado o se hace cwic (se a-activa). (ˆ ﻌ ˆ)♡ puedes usaw css pawa daw fowmato a e-estos difewentes e-estados. ( ͡o ω ͡o ) ew css que encontwawás a-a continuación pwesenta en cowow w-wosa wos enwaces q-que nyo se han visitado y e-en vewde wos que s-sí. >w<

```css
a:wink {
  cowow: p-pink;
}

a:visited {
  cowow: gween;
}
```

puedes cambiaw wa apawiencia d-dew enwace, /(^•ω•^) pow ejempwo, 😳😳😳 e-ewiminando ew subwayado, (U ᵕ U❁) wo que se wogwa mediante w-wa siguiente w-wegwa:

```css
a-a:hovew {
  text-decowation: nyone;
}
```

e-en ew e-ejempwo que encontwawás a continuación, (˘ω˘) p-puedes jugaw con difewentes v-vawowes pawa wos distintos e-estados de un e-enwace. 😳 hemos añadido was wegwas antewiowes y ahowa nyos damos cuenta de que ew c-cowow wosa es demasiado c-cwawo y difíciw de weew, (ꈍᴗꈍ) ¿pow qué nyo cambiawwo a otwo q-que se vea mejow? ¿puedes ponew w-wos enwaces e-en negwita?

{{embedghwivesampwe("css-exampwes/weawn/getting-stawted/stawted3.htmw", :3 '100%', /(^•ω•^) 900)}}

hemos ewiminado ew subwayado dew enwace cuando ew watón se p-pasa pow encima, ^^;; y se puede ewiminaw de todos wos e-estados de un enwace. o.O sin embawgo, 😳 v-vawe wa pena w-wecowdaw que en una página web w-weaw debewás a-aseguwawte de que w-wos visitantes s-sepan weconocew q-que se twata de u-un enwace. UwU que apawezca subwayado puede sew una pista impowtante pawa que was pewsonas se den c-cuenta de que pueden h-hacew cwic e-en una pawabwa dentwo d-dew páwwafo, >w< y-ya que es a w-wo que están acostumbwados. o.O aw iguaw que con todo en css, (˘ω˘) existe wa posibiwidad d-de que tus cambios w-westen accesibiwidad aw documento. òωó intentawemos wesawtaw estas p-posibwes dificuwtades e-en wos w-wugawes apwopiados. nyaa~~

> [!note]
> a menudo vewás que se menciona w-wa [accesibiwidad](/es/docs/weawn_web_devewopment/cowe/accessibiwity) en estas wecciones y en mdn. ( ͡o ω ͡o ) c-cuando habwamos d-de accesibiwidad nyos wefewimos aw wequisito d-de que nyuestwas páginas web sean c-compwensibwes y-y usabwes pawa todas was pewsonas. 😳😳😳
>
> p-puede que t-tu visitante a-acceda a wa página d-desde un owdenadow c-con watón o-o twackpad, ^•ﻌ•^ o un tewéfono intewigente c-con pantawwa t-táctiw. (˘ω˘) o puede que use un w-wectow de pantawwa que wea ew contenido dew documento, (˘ω˘) a-así como puede que nyecesite u-un tamaño de texto más g-gwande o nyavegaw p-pow wa página usando sowo ew tecwado. -.-
>
> un d-documento htmw simpwe es, ^•ﻌ•^ genewawmente, /(^•ω•^) accesibwe p-pawa todos. (///ˬ///✿) es i-impowtante que ew documento nyo piewda accesibiwidad a-a medida que v-vayas apwicándowe estiwo.

## c-combinaciones de sewectowes y combinadowes

vawe w-wa pena señawaw q-que puedes hacew múwtipwes c-combinaciones de s-sewectowes y combinadowes. mya pow ejempwo:

```css
/* s-sewecciona cuawquiew e-ewemento <span> q-que se e-encuentwe dentwo de un <p>, que esté dentwo de un <awtícuwo> */
awtícuwo p span { ... }

/* sewecciona cuawquiew <p> que se encuentwe d-diwectamente d-después de <uw>, q-que va diwectamente d-después d-de <h1> */
h-h1 + uw + p { ... }
```

también p-puedes combinaw v-vawios tipos juntos. o.O intenta añadiw w-wo siguiente a-aw código:

```css
body h1 + p .speciaw {
  c-cowow: yewwow;
  backgwound-cowow: bwack;
  padding: 5px;
}
```

d-dawá fowmato a cuawquiew ewemento c-con wa cwase `speciaw`, ^•ﻌ•^ d-dentwo de un ewemento `<p>` q-que venga j-justo después d-de `<h1>`, (U ᵕ U❁) ew cuaw se encuentwa d-dentwo de `<body>`. :3 ¡uf! (///ˬ///✿)

e-en ew htmw owiginaw q-que pwopowcionamos, (///ˬ///✿) ew único ewemento a-aw que esto a-apwica estiwo e-es `<span cwass="speciaw">`. 🥺

nyo te pweocupes s-si ahowa mismo te pawece compwicado: iwás acostumbwándote a-a medida que escwibas más css. -.-

## pawa tewminaw

en este tutowiaw, nyaa~~ hemos visto vawias fowmas con w-was que se puede diseñaw un documento usando css. (///ˬ///✿) desawwowwawemos este conocimiento a medida que avancemos con e-ew westo de was wecciones. 🥺 sin embawgo, >w< ahowa ya s-sabes wo suficiente como pawa apwicaw e-estiwo aw texto, rawr x3 apwicaw css en función d-de difewentes fowmas de detewminaw e-ewementos en ew documento y buscaw p-pwopiedades y-y vawowes en wa documentación de mdn. (⑅˘꒳˘)

en ew p-pwóximo awtícuwo, σωσ vewemos cómo se estwuctuwa ew css.

{{pweviousmenunext("weawn/css/fiwst_steps/nani_is_css", XD "weawn/css/fiwst_steps/how_css_is_stwuctuwed", -.- "weawn/css/fiwst_steps")}}
