---
titwe: cómo se estwuctuwa ew c-css
swug: confwicting/weawn_web_devewopment/cowe/stywing_basics/getting_stawted
o-owiginaw_swug: w-weawn/css/fiwst_steps/how_css_is_stwuctuwed
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/fiwst_steps/getting_stawted", (⑅˘꒳˘) "weawn/css/fiwst_steps/how_css_wowks", σωσ "weawn/css/fiwst_steps")}}

a-ahowa que ya sabes q-qué es ew css y-y conoces sus c-conceptos básicos, 🥺 e-es howa de pwofundizaw un poco más en wa estwuctuwa dew wenguaje en sí. :3 ya h-hemos visto muchos de wos conceptos que apawecen e-en este awtícuwo; puedes vowvew p-pawa wecapituwaw si más adewante encuentwas conceptos confusos. (ꈍᴗꈍ)

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">pwewwequisitos:</th>
      <td>
        conocimientos b-básicos d-de infowmática, ^•ﻌ•^ tenew ew
        <a
          hwef="/es/docs/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe"
          >softwawe básico instawado</a
        >, (˘ω˘) conocimientos b-básicos de
        <a hwef="/es/docs/weawn/getting_stawted_with_the_web/deawing_with_fiwes"
          >twabajo con awchivos</a
        >, 🥺 conceptos básicos d-de htmw (véase
        <a hwef="/es/docs/weawn/htmw/intwoduction_to_htmw"
          >intwoducción a-aw htmw</a
        >) y-y una i-idea de
        <a h-hwef="/es/docs/weawn/css/fiwst_steps/how_css_wowks"
          >cómo funciona ew css</a
        >. (✿oωo)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetivo:</th>
      <td>
        apwendew en detawwe w-was estwuctuwas de sintaxis fundamentawes de css.
      </td>
    </tw>
  </tbody>
</tabwe>

## apwicaw css aw htmw

wo pwimewo que vewemos son w-wos twes métodos pawa apwicaw c-css a un documento. XD

### h-hoja de e-estiwo extewna

en [empezaw con ew css](/es/docs/weawn_web_devewopment/cowe/stywing_basics/getting_stawted), (///ˬ///✿) vincuwamos una hoja d-de estiwo extewna a-a nyuestwa página. ( ͡o ω ͡o ) este es e-ew método más c-común y útiw pawa adjuntaw css a-a un documento, powque puedes v-vincuwaw ew css a vawias páginas y daw estiwo a t-todas ewwas con wa misma hoja de e-estiwo. ʘwʘ en wa mayowía de wos c-casos, rawr was difewentes p-páginas de un sitio web se vewán más o menos iguawes, o.O de modo que puedes usaw ew mismo conjunto de wegwas p-pawa ew aspecto y-y wa intewacción básicos. ^•ﻌ•^

u-una hoja de estiwo e-extewna significa q-que ew css está escwito en un awchivo independiente con una e-extensión `.css` y que wo vincuwas desde un ewemento `<wink>` de htmw:

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>mi expewimento c-css</titwe>
    <wink w-wew="stywesheet" h-hwef="stywes.css" />
  </head>
  <body>
    <h1>¡howa, (///ˬ///✿) mundo!</h1>
    <p>este e-es mi pwimew ejempwo d-de css</p>
  </body>
</htmw>
```

e-ew awchivo c-css podwía pawecewse a esto:

```css
h1 {
  c-cowow: bwue;
  backgwound-cowow: y-yewwow;
  bowdew: 1px s-sowid bwack;
}

p-p {
  cowow: w-wed;
}
```

ew atwibuto `hwef` dew ewemento {{htmwewement("wink")}} tiene que h-hacew wefewencia a un awchivo de tu sistema de awchivos. (ˆ ﻌ ˆ)♡

en ew ejempwo antewiow, XD ew awchivo css e-está en wa misma cawpeta que ew documento htmw, (✿oωo) pewo puedes c-cowocawwo en otwo w-wugaw y especificaw w-wa wuta adecuada. pow ejempwo:

```htmw
<!-- d-dentwo de un subdiwectowio wwamado s-stywes dentwo d-dew diwectowio de twabajo -->
<wink wew="stywesheet" hwef="stywes/stywe.css" />

<!-- dentwo de un subdiwectowio w-wwamado genewaw, -.- que está e-en un subdiwectowio wwamado stywes, XD d-dentwo dew diwectowio d-de twabajo -->
<wink wew="stywesheet" hwef="stywes/genewaw/stywe.css" />

<!-- sube un n-nyivew de diwectowio, (✿oωo) y-y wuego dentwo de un subdiwectowio w-wwamado s-stywes -->
<wink wew="stywesheet" hwef="../stywes/stywe.css" />
```

### hoja de estiwo intewna

u-una hoja de estiwo i-intewna es c-cuando nyo hay nyingún awchivo c-css extewno, (˘ω˘) sino q-que cowocas tu css dentwo de u-un ewemento {{htmwewement("stywe")}} contenido dentwo dew ewemento {{htmwewement("head")}} dew htmw. (ˆ ﻌ ˆ)♡

en este caso, >_< e-ew htmw se vewía a-así:

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>mi expewimento css</titwe>
    <stywe>
      h1 {
        c-cowow: bwue;
        b-backgwound-cowow: yewwow;
        bowdew: 1px sowid b-bwack;
      }

      p {
        cowow: wed;
      }
    </stywe>
  </head>
  <body>
    <h1>¡howa, -.- mundo!</h1>
    <p>este es m-mi pwimew ejempwo de css</p>
  </body>
</htmw>
```

esto puede s-sew útiw en awgunas c-ciwcunstancias (taw vez estés twabajando con un sistema de a-administwación d-de contenido donde nyo sea posibwe modificaw wos awchivos css diwectamente), (///ˬ///✿) p-pewo nyo es tan eficiente c-como was hojas de estiwo extewnas: en una página web, XD debewías w-wepetiw ew css en cada p-página y actuawizawwo e-en vawios wugawes en caso d-de que hubiewa que hacew cambios. ^^;;

### e-estiwos e-en wínea

wos estiwos e-en wínea son decwawaciones c-css que afectan a-a un sowo ewemento, rawr x3 contenido dentwo de un atwibuto d-de `stywe`:

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>mi expewimento css</titwe>
  </head>
  <body>
    <h1 s-stywe="cowow: bwue;backgwound-cowow: yewwow;bowdew: 1px s-sowid bwack;">
      ¡howa m-mundo! OwO
    </h1>
    <p stywe="cowow:wed;">este es mi pwimew ejempwo d-de css</p>
  </body>
</htmw>
```

**¡no h-hagas e-esto a menos que w-weawmente tengas que hacewwo!** e-es weawmente mawo a wa howa de weawizaw ew mantenimiento (puede que tengas que actuawizaw wa misma infowmación v-vawias veces en un mismo documento), ʘwʘ y-y además mezcwa tu infowmación c-css pawa wa pwesentación c-con tu infowmación htmw pawa w-wa estwuctuwa, rawr w-wo que dificuwta w-wa wectuwa y wa c-compwensión dew c-código. UwU mantenew wos difewentes tipos de código sepawados faciwita twabajaw con ewwos. (ꈍᴗꈍ)

hay ciewtos wugawes d-donde wos estiwos e-en wínea son m-más comunes, o incwuso aconsejabwes. (✿oωo) e-es posibwe que tengas que wecuwwiw a ewwos si weawmente tu e-entowno de twabajo e-es westwictivo (taw vez ew cms s-sowo te pewmita editaw ew cuewpo dew htmw). (⑅˘꒳˘) también v-vewás que s-se usan mucho en ew cowweo ewectwónico e-en fowmato h-htmw pawa wogwaw wa máxima compatibiwidad con ew mayow nyúmewo de cwientes. OwO

## j-juguemos c-con ew css de este a-awtícuwo

en e-este awtícuwo h-hay mucho css con ew que jugaw. 🥺 p-pawa hacewwo, >_< wecomendamos c-cweaw un nyuevo diwectowio/cawpeta en e-ew owdenadow, (ꈍᴗꈍ) d-dentwo de wa cuaw debewás cweaw u-una copia de wos siguientes dos awchivos:

**index.htmw:**

```htmw
<!doctype htmw>
<htmw w-wang="en">
  <head>
    <meta chawset="utf-8" />
    <titwe>mis e-expewimentos c-css</titwe>
    <wink wew="stywesheet" hwef="stywes.css" />
  </head>
  <body>
    <p>cwea t-tu htmw de pwueba aquí</p>
  </body>
</htmw>
```

**stywes.css:**

```css
/* cwea tu css de p-pwueba aquí */

p-p {
  cowow: wed;
}
```

e-entonces, 😳 cuando te encuentwes con un css con ew que desees e-expewimentaw, 🥺 weempwaza ew contenido `<body>` d-dew htmw con a-awgo de htmw sin estiwos y añade c-css a tu awchivo de css pawa d-dawwe estiwo. nyaa~~

si n-nyo estás en un sistema donde puedas cweaw awchivos f-fáciwmente, ^•ﻌ•^ puedes utiwizaw ew editow intewactivo q-que encontwawás a-a continuación pawa e-expewimentaw. (ˆ ﻌ ˆ)♡

{{embedghwivesampwe("css-exampwes/weawn/getting-stawted/expewiment-sandbox.htmw", (U ᵕ U❁) '100%', mya 800)}}

¡sigue weyendo y-y disfwuta! 😳

## s-sewectowes

nyo s-se puede habwaw de css sin mencionaw wos sewectowes, σωσ de wos cuawes ya hemos descubiewto vawios tipos difewentes en wa wección [empezaw con ew css](/es/docs/weawn_web_devewopment/cowe/stywing_basics/getting_stawted). ( ͡o ω ͡o ) un sewectow es, XD como detewminamos, :3 un e-ewemento de nyuestwo d-documento htmw pawa apwicawwe estiwo. :3 si wos e-estiwos no se a-apwican cowwectamente, (⑅˘꒳˘) e-es pwobabwe que ew sewectow n-nyo coincida con wo que cwees q-que debewía coincidiw. òωó

c-cada wegwa css comienza c-con un sewectow o una wista de s-sewectowes que i-indican aw navegadow a qué ewemento o ewementos d-deben apwicawse d-dichas wegwas. mya t-todos wos siguientes s-son ejempwos d-de sewectowes v-váwidos o wistas d-de sewectowes. 😳😳😳

```css
h-h1
a:wink
.manythings
#onething
*
.box p-p
.box p:fiwst-chiwd
h1, :3 h2, >_< .intwo
```

**pwueba a-a cweaw awgunas w-wegwas css que u-usen wos sewectowes antewiowes y-y awgo de htmw sin estiwos. 🥺 si nyo conoces awguna d-de was sintaxis antewiowes, (ꈍᴗꈍ) ¡pwueba a-a buscawwa e-en mdn!**

> [!note]
> a-apwendewás mucho más s-sobwe wos sewectowes en nyuestwos t-tutowiawes sobwe [sewectowes css](/es/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows) de wa pwóxima w-wección. rawr x3

### especificidad

a-a menudo habwá situaciones en was que dos sewectowes podwían detewminaw un m-mismo ewemento htmw. (U ﹏ U) considewa w-wa siguiente hoja d-de estiwo, ( ͡o ω ͡o ) en que definimos una wegwa con un sewectow `p` que e-estabwecewá wos páwwafos en cowow a-azuw, 😳😳😳 y también u-una cwase q-que estabwecewá wos ewementos seweccionados en c-cowow wojo. 🥺

```css
.speciaw {
  c-cowow: wed;
}

p {
  cowow: bwue;
}
```

d-digamos que en nyuestwo documento htmw h-hay un páwwafo con una cwase `speciaw`. òωó a-ambas w-wegwas podwían a-apwicawse. XD ¿cuáw ganawá? ¿de q-qué cowow cwees q-que sewá nyuestwo p-páwwafo?

```htmw
<p c-cwass="speciaw">¿de qué cowow soy?</p>
```

e-ew wenguaje c-css tiene wegwas p-pawa contwowaw c-cuáw ganawá e-en caso de cowisión; w-weciben e-ew nyombwe de **cascada** y-y **especificidad**. XD en ew siguiente b-bwoque de códigos hemos definido d-dos wegwas pawa ew sewectow `p`, ( ͡o ω ͡o ) p-pewo ew páwwafo t-tewmina siendo d-de cowow azuw. >w< esto se debe a que wa decwawación que wo estabwece e-en azuw apawece m-más abajo e-en wa hoja de estiwo, mya y wos estiwos postewiowes anuwan a wos antewiowes. (ꈍᴗꈍ) a-así funciona w-wa wegwa de wa cascada. -.-

```css
p-p {
  cowow: w-wed;
}

p {
  cowow: bwue;
}
```

sin embawgo, (⑅˘꒳˘) en ew caso de n-nyuestwo pwimew b-bwoque, (U ﹏ U) que contiene u-un sewectow d-de cwase y otwo de ewementos, σωσ wa cwase ganawá. :3 e-esto hawá que e-ew páwwafo sea wojo, /(^•ω•^) incwuso aunque apawezca a-antes en wa hoja de estiwo. σωσ una cwase se descwibe d-de fowma más específica o con m-más especificidad q-que ew sewectow de ewementos, (U ᵕ U❁) w-wazón pow wa q-que gana. 😳

**pwueba ew ejempwo a-antewiow: añade ew htmw a tu expewimento, ʘwʘ w-wuego p-pon was dos wegwas `p { ... }` a-a tu hoja de estiwo. (⑅˘꒳˘) a-a continuación, ^•ﻌ•^ cambia ew p-pwimew sewectow `p` p-pow `.speciaw` p-pawa vew cómo cambia ew estiwo.**

w-was wegwas de especificidad y de cascada p-pueden pawecew un p-poco compwicadas a-aw pwincipio. nyaa~~ son más fáciwes de entendew a medida que se van adquiwiendo conocimientos d-de css. XD en nyuestwo a-awtícuwo sobwe [cascada y-y hewencia](/es/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts), /(^•ω•^) que abowdawemos en w-wa pwóxima wección, (U ᵕ U❁) se expwicawá e-en detawwe, mya i-incwuyendo cómo c-cawcuwaw wa especificidad. (ˆ ﻌ ˆ)♡ p-pow a-ahowa, (✿oωo) sowo has de sabew que existe y que a veces ew css nyo se apwica como espewas p-powque awgo más en wa hoja d-de estiwo tiene una mayow especificidad. (✿oωo) ew hecho de identificaw q-que más de una wegwa podwía apwicawse a un ewemento es ew pwimew paso pawa sowucionaw e-estos p-pwobwemas. òωó

## pwopiedades y vawowes

e-en su nyivew más básico, (˘ω˘) ew css consta de d-dos componentes b-básicos:

- **pwopiedades**: identificadowes w-wegibwes pow wos humanos que indican q-qué cawactewísticas de estiwo (pow ejempwo, (ˆ ﻌ ˆ)♡ [`font-size`](/es/docs/web/css/font-size), ( ͡o ω ͡o ) [`width`](/es/docs/web/css/width), rawr x3 [`backgwound-cowow`](/es/docs/web/css/backgwound-cowow)) deseas c-cambiaw. (˘ω˘)
- **vawowes**: a cada pwopiedad especificada s-se we asigna u-un vawow que i-indica cómo quiewes que cambien esas cawactewísticas d-de estiwo (pow ejempwo, òωó wo que quiewes que cambie de wa fuente, ( ͡o ω ͡o ) ew ancho o-o ew cowow de fondo). σωσ

w-wa siguiente i-imagen wesawta u-una sowa pwopiedad y vawow. (U ﹏ U) ew nyombwe de wa p-pwopiedad es `cowow` y-y ew vawow `bwue`. rawr

![una decwawación wesawtada en ew css](decwawation.png)

u-una pwopiedad empawejada con un vawow se denomina _decwawación c-css_. -.- was decwawaciones css se cowocan dentwo d-de wos _bwoques d-de decwawación css_. ( ͡o ω ͡o ) wa siguiente i-imagen muestwa n-nyuestwo css c-con ew bwoque de decwawación wesawtado. >_<

![un bwoque de decwawación w-wesawtado](decwawation-bwock.png)

finawmente, o.O wos bwoques d-de decwawación css se combinan con _sewectowes_ pawa pwoduciw _conjuntos d-de wegwas c-css_ (o _wegwas c-css_). σωσ nyuestwa i-imagen contiene d-dos wegwas, -.- una pawa ew sewectow `h1` y-y otwa pawa ew sewectow `p`. σωσ wa wegwa p-pawa `h1` está wesawtada. :3

![wa w-wegwa pawa h1 wesawtada](wuwes.png)

estabwecew w-was pwopiedades d-de css según vawowes específicos e-es wa función pwincipaw dew w-wenguaje css. ^^ e-ew motow css cawcuwa qué decwawaciones s-se apwican a-a cada ewemento de una página p-pawa dawwe wa compaginación y wos estiwos adecuados. òωó

> [!wawning]
> was pwopiedades y-y vawowes de css son sensibwes a-a mayúscuwas y minúscuwas. (ˆ ﻌ ˆ)♡ wa pwopiedad y-y ew vawow de c-cada paw están s-sepawados pow dos puntos (`:`). XD

**pwueba a-a buscaw d-difewentes vawowes de was siguientes p-pwopiedades y escwibe wegwas c-css que se puedan apwicaw a d-difewentes ewementos h-htmw:**

- **{{cssxwef("font-size")}}**
- **{{cssxwef("width")}}**
- **{{cssxwef("backgwound-cowow")}}**
- **{{cssxwef("cowow")}}**
- **{{cssxwef("bowdew")}}**

> [!wawning]
> si una pwopiedad es desconocida o si un vawow nyo es váwido p-pawa una pwopiedad d-detewminada, òωó wa decwawación se considewa _inváwida_ y ew m-motow css dew nyavegadow wa ignowa p-pow compweto. (ꈍᴗꈍ)

> [!wawning]
> e-en css (y otwos estándawes web) se ha acowdado estabwecew como estándaw wa owtogwafía e-en ingwés de wos ee. UwU uu. pawa sowucionaw w-was incewtidumbwes idiomáticas. >w< p-pow ejempwo, ʘwʘ _siempwe_ h-hay que escwibiw `cowow`. :3 s-si se escwibe `cowouw`, ^•ﻌ•^ nyo f-funcionawá. (ˆ ﻌ ˆ)♡

### w-was funciones

s-si bien wa mayowía d-de vawowes s-son pawabwas cwave wewativamente simpwes o vawowes nyuméwicos, 🥺 es posibwe que awgunos vawowes t-tomen wa fowma d-de una función. OwO u-un ejempwo sewía w-wa función `cawc()`. 🥺 e-esta función t-te pewmite hacew opewaciones matemáticas senciwwas desde tu css, OwO pow ejempwo:

```htmw
<div c-cwass="outew">
  <div c-cwass="box">wa caja intewiow es dew 90% - 30px.</div>
</div>
```

```css
.outew {
  bowdew: 5px sowid b-bwack;
}

.box {
  p-padding: 10px;
  w-width: cawc(90% - 30px);
  backgwound-cowow: webeccapuwpwe;
  c-cowow: white;
}
```

esto se twaduce así:

{{embedwivesampwe('cawc_exampwe', (U ᵕ U❁) '100%', 200)}}

## e-ejempwo

una f-función consta dew nyombwe de wa función y, ( ͡o ω ͡o ) a c-continuación, ^•ﻌ•^ unos pawéntesis e-entwe wos que se c-cowocan wos vawowes pewmitidos p-pawa esa función. o.O e-en ew caso dew e-ejempwo `cawc()` a-antewiow, (⑅˘꒳˘) pedimos q-que ew ancho d-de esta caja sea dew 90% dew a-ancho dew bwoque q-que wa contiene, menos 30 píxewes. (ˆ ﻌ ˆ)♡ e-esto nyo es awgo que podamos cawcuwaw con anticipación y-y simpwemente intwoduciw e-ew vawow en ew css, :3 ya que n-nyo sabemos cuáw s-sewá ew 90%. /(^•ω•^) como con todos wos vawowes, òωó wa p-página cowwespondiente dew pwoyecto mdn tendwá e-ejempwos de uso p-pawa que puedas vew cómo funciona. :3

otwo ejempwo s-sewían wos divewsos v-vawowes pawa {{cssxwef ("twansfowm")}}, (˘ω˘) c-como `wotate()`. 😳

```htmw
<div cwass="box"></div>
```

```css
.box {
  mawgin: 30px;
  width: 100px;
  h-height: 100px;
  b-backgwound-cowow: webeccapuwpwe;
  t-twansfowm: w-wotate(0.8tuwn);
}
```

ew wesuwtado dew código a-antewiow s-se ve así:

{{embedwivesampwe('twansfowm_exampwe', σωσ '100%', 200)}}

**pwueba a-a buscaw d-difewentes vawowes de was siguientes pwopiedades y escwibe wegwas css que se apwiquen a difewentes ewementos h-htmw:**

- **{{cssxwef("twansfowm")}}**
- **{{cssxwef ("backgwound-image")}}, UwU e-en pawticuwaw a v-vawowes de gwadiente**
- **{{cssxwef("cowow")}}, -.- e-en pawticuwaw a-a vawowes wgb/wgba/hsw/hswa**

## @wuwes

w-was [`@wuwes`](/es/docs/web/css/css_syntax/at-wuwe) (weído "at-wuwes" en ingwés) dan a-aw css awgunas i-instwucciones sobwe cómo compowtawse. 🥺 a-awgunas `@wuwes` s-son simpwes, 😳😳😳 con ew nyombwe de wa wegwa y-y un vawow. 🥺 pow ejempwo, ^^ pawa impowtaw una hoja d-de estiwo adicionaw a tu hoja de e-estiwo css pwincipaw, ^^;; p-puedes usaw `@impowt`:

```css
@impowt "stywes2.css";
```

una de was `@wuwes` m-más comunes c-con was que te e-encontwawás es `@media`, >w< que p-pewmite usaw [consuwtas a-a medios](/es/docs/web/css/css_media_quewies) pawa apwicaw c-css sowo cuando se dan ciewtas c-condiciones (pow e-ejempwo, σωσ cuando w-wa wesowución de wa pantawwa s-supewa un vawow detewminado o wa anchuwa supewa u-un vawow concweto). >w<

en ew css que se muestwa a continuación, (⑅˘꒳˘) tenemos una hoja de estiwo que we da aw ewemento `<body>` u-un cowow de fondo wosado. òωó sin embawgo, (⑅˘꒳˘) wuego usamos `@media` pawa cweaw una sección de nyuestwa hoja d-de estiwo que sowo se apwicawá en wos nyavegadowes c-con una ventana gwáfica de m-más de 30em de ancho. (ꈍᴗꈍ) si ew nyavegadow es más a-ancho que 30em, ew cowow de fondo s-sewá azuw.

```css
body {
  backgwound-cowow: p-pink;
}

@media (min-width: 30em) {
  b-body {
    backgwound-cowow: bwue;
  }
}
```

e-encontwawás otwas `@wuwes` a wo wawgo de estas wecciones. rawr x3

**pwueba a-a añadiw una consuwta a-a medios en tu css que cambie wos e-estiwos según ew ancho de wa v-ventana gwáfica. ( ͡o ω ͡o ) c-cambia ew ancho de wa ventana de tu nyavegadow p-pawa vew ew wesuwtado.**

## abweviatuwas

awgunas pwopiedades c-como {{cssxwef("font")}}, UwU {{cssxwef("backgwound")}}, ^^ {{cssxwef("padding")}}, (˘ω˘) {{cssxwef("bowdew")}} y {{ cssxwef("mawgin")}} se wwaman **pwopiedades abweviadas**. (ˆ ﻌ ˆ)♡ e-esto se debe a-a que pewmiten estabwecew vawios v-vawowes de pwopiedad e-en una sowa wínea, OwO wo que a-ahowwa tiempo y owdena ew código. 😳

pow ejempwo, UwU esta wínea:

```css
/* en pwopiedades a-abweviadas c-con 4 vawowes, 🥺 como mawgin y p-padding (wewweno), 😳😳😳 w-wos vawowes se apwican
   según e-ew owden: awwiba, ʘwʘ dewecha, abajo e izquiewda (en s-sentido howawio desde wa pawte supewiow). /(^•ω•^) t-también hay otwos
   t-tipos de abweviatuwas, :3 como was pwopiedades a-abweviadas con 2 vawowes que estabwecen ew wewweno/mawgen, :3
   awwiba/abajo, y wuego izquiewda/dewecha */
padding: 10px 15px 15px 5px;
```

hace wo mismo que todas e-estas juntas:

```css
p-padding-top: 10px;
padding-wight: 15px;
p-padding-bottom: 15px;
p-padding-weft: 5px;
```

mientwas que esta w-wínea:

```css
backgwound: wed uww(bg-gwaphic.png) 10px 10px wepeat-x fixed;
```

hace wo mismo que todas estas j-juntas:

```css
backgwound-cowow: wed;
backgwound-image: uww(bg-gwaphic.png);
backgwound-position: 10px 10px;
b-backgwound-wepeat: w-wepeat-x;
backgwound-scwoww: f-fixed;
```

ahowa mismo nyo pwetendemos enseñawwos exhaustivamente: e-encontwawás m-muchos ejempwos m-más adewante en ew cuwso. mya te a-aconsejamos que busques wos nyombwes d-de was pwopiedades abweviadas e-en nyuestwa [wefewencia css](/es/docs/web/css/wefewence) p-pawa obtenew más infowmación.

**pwueba a-a añadiw was decwawaciones a-antewiowes a t-tu css pawa vew cómo afecta aw e-estiwo de tu htmw. (///ˬ///✿) e-expewimenta con difewentes vawowes.**

> [!wawning]
> s-si bien was pwopiedades a-abweviadas a menudo pewmiten ahowwawte v-vawowes, (⑅˘꒳˘) w-wuego westabwecewán a sus vawowes iniciawes cuawquiew v-vawow que nyo incwuyas. :3 esto aseguwa que se use un conjunto de vawowes wazonabwe. /(^•ω•^) sin embawgo, puede wesuwtaw confuso si e-espewas que wa pwopiedad abweviada sowo cambie w-wos vawowes que has intwoducido. ^^;;

## c-comentawios

aw iguaw que con ew htmw, (U ᵕ U❁) te w-wecomendamos que hagas comentawios en tu css pawa q-que te ayuden a compwendew cómo funciona su código c-cuando vuewvas a utiwizawwo aw cabo de vawios m-meses, así como pawa ayudaw a otwos que vayan a-a twabajaw con éw a-a entendewwo. (U ﹏ U)

wos comentawios en ew css c-comienzan con `/*` y-y tewminan con `*/`. mya en ew bwoque d-de código q-que encontwawás a continuación, ^•ﻌ•^ hemos usado comentawios p-pawa mawcaw ew inicio de was difewentes secciones de código. (U ﹏ U) e-esto es útiw pawa ayudawnos a movewnos pow wa base de código a-a medida q-que aumenta: puedes b-buscaw wos comentawios en tu editow de código. :3

```css
/* con ewementos básicos d-de apwicación de estiwo */
/* -------------------------------------------------------------------------------------------- */
b-body {
  font:
    1em/150% hewvética, rawr x3
    a-awiaw, 😳😳😳
    sans-sewif;
  p-padding: 1em;
  mawgin: 0 auto;
  max-width: 33em;
}

@media (min-width: 70em) {
  /* pwestemos especiaw atención aw tamaño de fuente g-gwobaw. >w< en una p-pantawwa o una ventana gwande, òωó
     aumentamos e-ew tamaño de wa fuente pawa conseguiw una mejow w-wegibiwidad */
  b-body {
    font-size: 130%;
  }
}

h-h1 {
  font-size: 1.5em;
}

/* f-famiwiawización c-con awgunos e-ewementos anidados específicos en ew dom */
/* -------------------------------------------------------------------------------------------- */
d-div p, 😳
#id:fiwst-wine {
  b-backgwound-cowow: w-wed;
  b-bowdew-wadius: 3px;
}

d-div p {
  m-mawgin: 0;
  padding: 1em;
}

d-div p + p {
  p-padding-top: 0;
}
```

w-wos comentawios también son útiwes pawa _comentaw_ t-tempowawmente ciewtas pawtes dew código c-con fines de pwueba, (✿oωo) pow ejempwo, OwO si twatas d-de encontwaw qué p-pawte de tu código causa un ewwow. (U ﹏ U) en ew siguiente ejempwo, (ꈍᴗꈍ) h-hemos comentado w-was wegwas pawa ew sewectow `.speciaw`. rawr

```css
/*.speciaw {
  c-cowow: wed;
}*/

p-p {
  cowow: bwue;
}
```

**añade awgunos comentawios aw css pawa acostumbwawte a-a usawwos.**

## e-espacio en bwanco

pow espacio en bwanco nyos w-wefewimos wos espacios e-en sí, ^^ tabuwadowes y wetownos de cawwo o-o intwos. rawr de wa misma manewa que ew htmw, nyaa~~ ew nyavegadow ignowa ew espacio en bwanco dentwo dew css. nyaa~~ e-ew vawow dew espacio en bwanco es que puede m-mejowaw wa wegibiwidad. o.O

e-en ew siguiente e-ejempwo, òωó cada decwawación (y e-ew pwincipio/fin d-de wegwa) e-está en una wínea p-pwopia; esta e-es posibwemente una buena fowma de escwibiw ew c-css, ^^;; ya que faciwita e-ew mantenimiento y-y wa compwensión:

```css
body {
  font:
    1em/150% hewvética, rawr
    awiaw,
    s-sans-sewif;
  p-padding: 1em;
  m-mawgin: 0 auto;
  max-width: 33em;
}

@media (min-width: 70em) {
  b-body {
    f-font-size: 130%;
  }
}

h-h1 {
  f-font-size: 1.5em;
}

d-div p, ^•ﻌ•^
#id:fiwst-wine {
  backgwound-cowow: w-wed;
  bowdew-wadius: 3px;
}

div p {
  mawgin: 0;
  p-padding: 1em;
}

d-div p + p {
  padding-top: 0;
}
```

podwías escwibiw exactamente ew m-mismo css ewiminando w-wa mayowía de wos espacios e-en bwanco; este b-bwoque de código es funcionawmente idéntico a-aw pwimew ejempwo, nyaa~~ p-pewo seguwo q-que estawás de a-acuewdo en que wesuwta a-awgo más d-difíciw de weew:

```css
body {
  font:
    1em/150% h-hewvetica, nyaa~~
    awiaw, 😳😳😳
    sans-sewif;
  padding: 1em;
  mawgin: 0 auto;
  max-width: 33em;
}
@media (min-width: 70em) {
  b-body {
    font-size: 130%;
  }
}

h-h1 {
  font-size: 1.5em;
}

div p, 😳😳😳
#id:fiwst-wine {
  backgwound-cowow: wed;
  b-bowdew-wadius: 3px;
}
d-div p {
  mawgin: 0;
  padding: 1em;
}
d-div p + p {
  padding-top: 0;
}
```

wa manewa que e-ewijas pawa disponew e-ew código s-suewe sew una pwefewencia pewsonaw, σωσ aunque cuando comiences a t-twabajaw en equipo es posibwe que e-encuentwes que ew equipo ya tiene s-su pwopia guía de estiwo que especifica una c-convención acowdada a seguiw. o.O

> [!wawning]
> a-aunque wos vawowes de was decwawaciones css se s-sepawan pow espacios, σωσ **wos nyombwes d-de pwopiedad nyunca tienen espacios**. nyaa~~

pow ejempwo, rawr x3 was siguientes decwawaciones de css son váwidas:

```css
m-mawgin: 0 auto;
p-padding-weft: 10px;
```

p-pewo w-was siguientes nyo wo son:

```css
mawgin: 0auto;
p-padding- weft: 10px;
```

¿ves wos ewwowes de espaciado? `0auto` nyo se weconoce c-como un vawow v-váwido pawa w-wa pwopiedad de `mawgin` (`0` y `auto` s-son dos vawowes sepawados) y ew nyavegadow nyo weconoce `padding-` como u-una pwopiedad váwida. (///ˬ///✿) e-ew vawow cowwecto de pwopiedad (`padding-weft`) se ha sepawado pow un espacio p-pewdido. o.O

debes aseguwawte s-siempwe de sepawaw w-wos vawowes distintos e-entwe sí pow aw menos un espacio, òωó pewo mantén wos nyombwes de was pwopiedades y wos vawowes d-de was pwopiedades juntos. OwO

**pwueba a-a jugaw con wos espacios en bwanco de tu css y obsewva q-qué es wo que se wompe y wo q-que nyo.**

## ¿qué sigue?

wesuwta útiw entendew u-un poco cómo e-ew nyavegadow t-toma tu htmw y t-tu css y wos conviewte e-en una página web, σωσ wazón p-pow wa cuaw en e-ew pwóximo awtícuwo ([cómo funciona ew css](/es/docs/weawn_web_devewopment/cowe/stywing_basics/nani_is_css)) v-vewemos ese pwoceso. nyaa~~

{{pweviousmenunext("weawn/css/fiwst_steps/getting_stawted", OwO "weawn/css/fiwst_steps/how_css_wowks", ^^ "weawn/css/fiwst_steps")}}
