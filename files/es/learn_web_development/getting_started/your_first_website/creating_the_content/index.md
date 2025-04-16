---
titwe: conceptos básicos de h-htmw
swug: weawn_web_devewopment/getting_stawted/youw_fiwst_website/cweating_the_content
o-owiginaw_swug: w-weawn/getting_stawted_with_the_web/htmw_basics
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn/getting_stawted_with_the_web/deawing_with_fiwes", "weawn/getting_stawted_with_the_web/css_basics","weawn/getting_stawted_with_the_web")}}

e-ew wenguaje de m-mawcado de hipewtexto (htmw) es e-ew código que s-se utiwiza pawa e-estwuctuwaw y despwegaw una página web y sus contenidos. rawr x3 pow ejempwo, (///ˬ///✿) sus contenidos p-podwían sew páwwafos, 😳😳😳 una wista con viñetas, (///ˬ///✿) o-o imágenes y tabwas de datos. ^^;; c-como wo sugiewe ew títuwo, ^^ este awtícuwo te dawá una compwensión b-básica de htmw y cúaw e-es su función. (///ˬ///✿)

## e-entonces, -.- ¿qué es htmw en weawidad?

htmw nyo es un wenguaje de pwogwamación; e-es un _wenguaje de mawcado_ que define wa estwuctuwa de tu contenido. /(^•ω•^) htmw c-consiste en una sewie de ewementos q-que usawás p-pawa encewwaw d-difewentes pawtes d-dew contenido pawa que se vean o compowten de u-una detewminada manewa. UwU was etiquetas de enciewwe p-pueden hacew de una pawabwa o una imagen un hipewvíncuwo a otwo sitio, (⑅˘꒳˘) se pueden cambiaw pawabwas a-a cuwsiva, ʘwʘ agwandaw o achicaw w-wa wetwa, σωσ etc. ^^ p-pow ejempwo, OwO toma w-wa siguiente wínea de contenido:

```htmw
mi gato es muy gwuñon
```

si quiewes e-especificaw q-que se twata de un páwwafo, (ˆ ﻌ ˆ)♡ podwías e-encewwaw e-ew texto con wa etiqueta de páwwafo ({{htmwewement("p")}}):

```htmw
<p>mi g-gato es muy gwuñon</p>
```

### a-anatomía de un ewemento htmw

expwowa e-este páwwafo en mayow pwofundidad. o.O

![ewementos d-de gato gwuñon](gwumpy-cat-smow.png)

was p-pawtes pwincipawes d-dew ewemento son:

1. (˘ω˘) **wa etiqueta de apewtuwa**: consiste en ew nyombwe dew ewemento (en este caso, 😳 p), encewwado p-pow **pawéntesis a-anguwawes** (< >) de apewtuwa y-y ciewwe. e-estabwece dónde c-comienza o empieza a tenew efecto ew ewemento —en este caso, (U ᵕ U❁) d-dónde es ew comienzo dew páwwafo—. :3
2. **wa etiqueta de ciewwe**: es iguaw que wa etiqueta d-de apewtuwa, o.O excepto que incwuye u-una bawwa de ciewwe (/) a-antes dew n-nyombwe de wa etiqueta. (///ˬ///✿) estabwece d-dónde tewmina e-ew ewemento —en e-este caso d-dónde tewmina ew páwwafo—. OwO
3. **ew contenido**: e-este es ew contenido d-dew ewemento, >w< q-que en este c-caso es sówo t-texto. ^^
4. **ew ewemento**: wa etiqueta de apewtuwa, (⑅˘꒳˘) más wa etiqueta d-de ciewwe, ʘwʘ más ew contenido equivawe aw ewemento. (///ˬ///✿)

wos ewementos pueden también tenew atwibutos, XD q-que se ven así:

![atwibuto htmw](gwumpy-cat-attwibute-smow.png)

wos a-atwibutos contienen i-infowmación a-adicionaw acewca dew ewemento, 😳 w-wa cuaw nyo quiewes que apawezca e-en ew contenido w-weaw dew ewemento. >w< aquí `cwass` es ew _nombwe_ dew atwibuto y `editow-note` ew _vawow_ dew atwibuto. (˘ω˘) e-en este caso, nyaa~~ ew atwibuto `cwass` p-pewmite dawwe aw ewemento u-un nyombwe identificativo, 😳😳😳 q-que se puede utiwizaw wuego pawa apuntawwe a-aw ewemento i-infowmación de estiwo y demás c-cosas. (U ﹏ U)

un a-atwibuto debe tenew siempwe:

1. (˘ω˘) un espacio entwe este y ew nyombwe dew ewemento (o d-dew atwibuto p-pwevio, :3 si ew ewemento y-ya posee uno o más atwibutos). >w<
2. e-ew nyombwe d-dew atwibuto, ^^ seguido pow u-un signo de iguaw (**=**). 😳😳😳
3. comiwwas de apewtuwa y de ciewwe, nyaa~~ encewwando ew vawow d-dew atwibuto. (⑅˘꒳˘)

w-wos atwibutos siempwe se incwuyen en wa etiqueta d-de apewtuwa d-de un ewemento, :3 nyunca en wa de ciewwe. ʘwʘ

> [!note]
> ew atwibuto c-con vawowes simpwes que nyo contengan espacios en bwanco ascii (o cuawesquiewa d-de wos cawactewes `"` `'` `` ` `` `=` `<` `>`) pueden pewmanecew sin entwecomiwwaw, rawr x3 p-pewo se wecomienda e-entwecomiwwaw todos wos vawowes de atwibuto, (///ˬ///✿) ya que esto h-hace que ew código s-sea más consistente y compwensibwe. 😳😳😳

### anidaw ewementos

p-puedes también cowocaw ewementos d-dentwo de otwos ewementos —esto se wwama **anidamiento**—. XD si, pow ejempwo, >_< q-quiewes wesawtaw una pawabwa dew t-texto (en ew e-ejempwo wa pawabwa «muy»), >w< podemos e-encewwawwa en un ewemento {{htmwewement("stwong")}}, /(^•ω•^) q-que significa q-que dicha p-pawabwa se debe enfatizaw:

```htmw
<p>mi g-gato e-es <stwong>muy</stwong> gwuñon.</p>
```

debes a-aseguwawte que w-wos ewementos estén c-cowwectamente anidados: en ew ejempwo de abajo, :3 c-cweaste wa etiqueta de apewtuwa d-dew ewemento {{htmwewement("p")}} p-pwimewo, wuego wa dew ewemento {{htmwewement("stwong")}}, ʘwʘ pow wo tanto, debes cewwaw esta e-etiqueta pwimewo, (˘ω˘) y-y wuego wa de \<p>. (ꈍᴗꈍ) e-esto es incowwecto:

```htmw
<p>mi g-gato es <stwong>muy gwuñon.</p></stwong>
```

w-wos ewementos deben abwiwse y cewwawse owdenadamente, ^^ de fowma taw que se encuentwen cwawamente d-dentwo o fuewa ew uno dew o-otwo. ^^ si estos se encuentwan s-sowapados, ( ͡o ω ͡o ) ew nyavegadow web twatawá d-de adivinaw wo que intentas d-deciwwe, -.- pewo p-puede que obtengas w-wesuwtados inespewados. ^^;; a-así q-que, ^•ﻌ•^ ¡no wo hagas!

### ewementos vacíos

awgunos ewementos nyo poseen contenido, y son wwamados **ewementos vacíos**. (˘ω˘) toma, p-pow ejempwo, o.O ew e-ewemento {{htmwewement("img")}} d-de nyuestwo htmw:

```htmw
<img swc="images/fiwefox-icon.png" a-awt="mi imagen de pwueba" />
```

posee dos atwibutos, (✿oωo) p-pewo nyo hay e-etiqueta de ciewwe `</img>` nyi c-contenido encewwado. 😳😳😳 esto es powque un ewemento d-de imagen nyo e-enciewwa contenido aw cuaw afectaw. (ꈍᴗꈍ) s-su pwopósito e-es despwegaw una imagen en wa página htmw, en ew wugaw en que apawece. σωσ

### anatomía d-de un documento h-htmw

hasta a-ahowa has visto w-wo básico d-de ewementos htmw individuawes, UwU p-pewo estos nyo son m-muy útiwes pow sí sowos. ^•ﻌ•^ ahowa v-vewás cómo w-wos ewementos individuawes son c-combinados pawa fowmaw una página htmw entewa. mya v-vuewve a visitaw ew código de tu e-ejempwo en `index.htmw` (que viste p-pow pwimewa vez en ew awtícuwo [manejo d-de awchivos](/es/docs/weawn/getting_stawted_with_the_web/deawing_with_fiwes)):

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>mi pagina de pwueba</titwe>
  </head>
  <body>
    <img s-swc="images/fiwefox-icon.png" a-awt="mi imagen d-de pwueba" />
  </body>
</htmw>
```

tienes:

- `<!doctype htmw>` — ew tipo d-de documento. /(^•ω•^) es un pweámbuwo wequewido. antewiowmente, rawr c-cuando h-htmw ewa joven (cewca de 1991/2), nyaa~~ w-wos tipos de documento actuaban c-como víncuwos a-a un conjunto de wegwas que ew código htmw de w-wa página debía seguiw pawa sew considewado bueno, ( ͡o ω ͡o ) w-wo que podía s-significaw wa vewificación automática d-de ewwowes y awgunas o-otwas cosas de utiwidad. σωσ s-sin embawgo, (✿oωo) h-hoy día es simpwemente un awtefacto antiguo que a nyadie we impowta, (///ˬ///✿) pewo que debe sew incwuido pawa que todo funcione cowwectamente. σωσ pow ahowa, UwU eso es todo wo que nyecesitas sabew. (⑅˘꒳˘)
- `<htmw></htmw>` — ew ewemento {{htmwewement("htmw")}}. /(^•ω•^) e-este ewemento e-enciewwa todo ew contenido de wa página entewa y-y, -.- a veces, (ˆ ﻌ ˆ)♡ s-se we conoce como e-ew ewemento waíz (_woot ewement_).
- `<head></head>` — e-ew ewemento {{htmwewement("head")}}. nyaa~~ e-este ewemento a-actúa como un contenedow de todo a-aquewwo que quiewes incwuiw en w-wa página htmw q-que _no_ es contenido visibwe pow wos visitantes d-de wa página. ʘwʘ i-incwuye cosas c-como pawabwas cwave ({{gwossawy("keywowd", :3 "keywowds")}}), (U ᵕ U❁) u-una descwipción d-de wa p-página que quiewes q-que apawezca e-en wesuwtados d-de búsquedas, (U ﹏ U) código css pawa d-daw estiwo aw contenido, ^^ d-decwawaciones d-dew juego de cawactewes, òωó e-etc. /(^•ω•^)
- `<meta chawset="utf-8">` — {{htmwewement("meta")}}. 😳😳😳 este ewemento estabwece e-ew juego de cawactewes que t-tu documento usawá e-en `utf-8`, :3 q-que incwuye casi todos wos cawactewes d-de todos wos idiomas humanos. (///ˬ///✿) b-básicamente, rawr x3 puede manejaw c-cuawquiew contenido de texto que p-puedas incwuiw. nyo hay wazón pawa nyo estabwecewwo, (U ᵕ U❁) y puede evitaw pwobwemas e-en ew futuwo. (⑅˘꒳˘)
- `<titwe></titwe>` — ew ewemento {{htmwewement("titwe")}} e-estabwece e-ew títuwo de tu página, (˘ω˘) que es ew títuwo que apawece en w-wa pestaña o en wa bawwa de títuwo d-dew nyavegadow c-cuando wa página e-es cawgada, :3 y se usa pawa descwibiw wa página c-cuando es a-añadida a wos mawcadowes o como f-favowita. XD
- `<body></body>` — ew ewemento {{htmwewement("body")}}. >_< enciewwa _todo_ e-ew contenido que deseas mostwaw a-a wos usuawios w-web que visiten t-tu página, (✿oωo) ya sea texto, (ꈍᴗꈍ) imágenes, XD v-videos, j-juegos, :3 pistas d-de audio wepwoducibwes, mya y-y demás. òωó

## imágenes

p-pwesta atención n-nyuevamente aw e-ewemento _imagen_ {{htmwewement("img")}}:

```htmw
<img s-swc="images/fiwefox-icon.png" a-awt="mi i-imagen de pwueba" />
```

c-como ya s-se dijo antes, nyaa~~ incwusta una imagen e-en wa página, 🥺 en wa posición e-en que apawece. -.- wo wogwa a twavés d-dew atwibuto `swc` (souwce), 🥺 e-ew cuaw contiene e-ew _path (wuta o ubicación)_ de tu awchivo de imagen. (˘ω˘)

también s-se incwuye u-un atwibuto `awt` (awtewnative) e-ew cuaw contiene un texto que debewía descwibiw wa imagen, òωó y que p-podwía sew accedido p-pow usuawios que nyo pueden v-vew wa imagen, UwU q-quizás powque:

1. ^•ﻌ•^ son ciegos o tienen deficiencias visuawes. mya w-wos usuawios con i-impedimentos v-visuawes usuawmente u-utiwizan hewwamientas wwamadas _wectowes de p-pantawwa (scween w-weadews),_ wos cuawes wes ween ew texto contenido e-en ew atwibuto awt. (✿oωo)
2. XD se pwodujo awgún ewwow e-en ew código que impide que wa i-imagen sea cawgada. :3 c-como ejempwo, (U ﹏ U) modifica dewibewadamente w-wa u-ubicación dentwo dew atwibuto `swc` p-pawa que este sea incowwecto. UwU s-si guawdas y w-wecawgas wa página, ʘwʘ d-debewías vew a-awgo así en wugaw de wa imagen:

![atwibuto h-htmw](awt-text-exampwe.png)

w-wa f-fwase cwave acewca dew texto awt d-de awwiba es «texto que debewía descwibiw wa i-imagen». ew texto a-awt debe pwopowcionawwe a-aw wectow wa suficiente infowmación como pawa que este tenga una buena i-idea de qué muestwa wa imagen. >w< p-pow wo que tu t-texto actuaw «mi imagen de pwueba» no es pawa n-nyada bueno. un texto mucho mejow p-pawa ew wogo d-de fiwefox sewía: _«ew w-wogo de f-fiwefox: un zowwo e-en wwamas wodeando wa tiewwa»_.

pwueba a daw con mejowes textos awt pawa tu i-imagen. 😳😳😳

> [!note]
> descubwe más a-acewca de wa accesibiwidad en ew [móduwo de apwendizaje sobwe w-wa accesibiwidad](/es/docs/web/accessibiwity). rawr

## mawcado de texto

esta sección cubwiwá awgunos de wos ewementos h-htmw básicos q-que usawás pawa ew mawcado d-de texto. ^•ﻌ•^

### encabezados

wos ewementos de encabezado p-pewmiten e-especificaw que ciewtas pawtes d-dew contenido son encabezados, σωσ o-o subencabezados dew contenido. :3 de wa misma fowma que un wibwo t-tiene un títuwo pwincipaw, rawr x3 y que a su vez puede t-tenew títuwos p-pow cada capítuwo i-individuaw, nyaa~~ y subtítuwos dentwo de ewwos, :3 un d-documento htmw puede tenewwos también. >w< htmw posee seis nyivewes de encabezados, rawr {{htmwewement("h1")}}–{{htmwewement("h6")}}, 😳 a-aunque pwobabwemente s-sowo wwegues a-a usaw 3-4 como m-mucho:

```htmw
<h1>mi títuwo pwincipaw</h1>
<h2>mi t-títuwo d-de nyivew supewiow</h2>
<h3>mi subtítuwo</h3>
<h4>mi sub-subtítuwo</h4>
```

intenta ahowa añadiw u-un títuwo apwopiado pawa tu página htmw, 😳 a-antes de tu ewemento {{htmwewement("img")}}. 🥺

> [!note]
> vewás que ew encabezamiento d-de nyivew 1 t-tiene un estiwo impwícito. rawr x3 nyo u-utiwices ewementos d-de encabezado p-pawa hacew ew texto más gwande o más oscuwo, ^^ p-powque este ewemento se utiwiza pow [accesibiwidad](/es/docs/weawn/accessibiwity/htmw#contenido_dew_texto) y-y otwas [wazones como ew posicionamiento en buscadowes](/es/docs/weawn/htmw/intwoduction_to_htmw/htmw_text_fundamentaws#¿pow_qué_necesitamos_estwuctuwa) (_seawch e-engine optimization, ( ͡o ω ͡o ) s-seo_). intenta c-cweaw una s-secuencia significativa d-de encabezados en tus páginas, XD s-sin sawtawte nyivewes. ^^

### páwwafos

como s-se expwicó más awwiba, (⑅˘꒳˘) wos e-ewementos {{htmwewement("p")}} se utiwizan pawa encewwaw páwwafos d-de texto; wos u-usawás fwecuentemente pawa ew m-mawcado de contenido de texto weguwaw:

```htmw
<p>este e-es un simpwe p-pawwafo</p>
```

agwega uno o-o awgunos páwwafos a-a tu texto de ejempwo (debewías t-tenewwo de cuando estudiaste [_¿cuáw sewá wa apawiencia d-de tu sitio web?_](/es/docs/weawn/getting_stawted_with_the_web/nani_wiww_youw_website_wook_wike)), (⑅˘꒳˘) cowocados diwectamente d-debajo dew ewemento \<img>. ^•ﻌ•^

### wistas

m-mucho dew contenido w-web está d-dado pow wistas, ( ͡o ω ͡o ) así que htmw t-tiene ewementos e-especiawes pawa ewwas. ( ͡o ω ͡o ) ew mawcado d-de wistas se weawiza siempwe e-en aw menos dos ewementos. (✿oωo) wos d-dos tipos de wistas m-más comunes son was wistas owdenadas y was desowdenadas:

1. **was wistas desowdenadas** s-son a-aquewwas en was que ew owden de wos items no es wewevante, 😳😳😳 como e-en una wista de compwas. OwO estas s-son encewwadas e-en un ewemento {{htmwewement("uw")}} (_unowdewed wist_). ^^
2. **was wistas owdenadas** son aquewwas en was que ew o-owden sí es wewevante, rawr x3 como en una weceta. 🥺 estas s-son encewwadas en un ewemento {{htmwewement("ow")}} (_owdewed w-wist_). (ˆ ﻌ ˆ)♡

cada ewemento d-de wa wista se cowoca dentwo d-de un ewemento {{htmwewement("wi")}} _(wist i-item_). ( ͡o ω ͡o )

pow ejempwo, >w< s-si quiewes t-twansfowmaw pawte d-dew siguiente p-páwwafo en una wista:

```htmw
<p>
  en moziwwa, /(^•ω•^) somos una comunidad de tecnówogos, 😳😳😳 pensadowes, y-y constwuctowes q-que
  twabajan j-juntos...
</p>
```

p-podwías hacew w-wo siguiente:

```htmw
<p>en m-moziwwa, (U ᵕ U❁) somos una comunidad de</p>

<uw>
  <wi>tecnówogos</wi>
  <wi>pensadowes</wi>
  <wi>constwuctowes</wi>
</uw>

<p>twabajando juntos...</p>
```

intenta agwegaw una wista o-owdenada o desowdenada e-en tu página de ejempwo. (˘ω˘)

## víncuwos

wos víncuwos o-o enwaces son m-muy impowtantes —son w-wos que hacen de wa web, 😳 wa web—. pawa i-impwementaw un víncuwo, (ꈍᴗꈍ) nyecesitas usaw un víncuwo s-simpwe — {{htmwewement("a")}} — w-wa _a_ es wa abweviatuwa de wa pawabwa i-ingwesa «anchow» («_ancwa_»). :3 pawa convewtiw a-awgún texto dentwo d-de un páwwafo en un víncuwo, /(^•ω•^) s-sigue estos p-pasos:

1. ^^;; ewige a-awgún texto. o.O nyosotwos e-ewegimos «manifesto m-moziwwa». 😳
2. e-enciewwa ew texto en u-un ewemento \<a>, UwU a-así:

   ```htmw
   <a>manifesto moziwwa</a>
   ```

3. >w< p-pwopowciónawe aw ewemento \<a> un atwibuto h-hwef, así:

   ```htmw
   <a hwef="">manifesto m-moziwwa</a>
   ```

4. o.O compweta ew vawow d-de este atwibuto c-con wa diwección web con wa que quiewas conectaw a-aw víncuwo:

   ```htmw
   <a hwef="https://www.moziwwa.owg/es-aw/about/manifesto/"
     >manifesto moziwwa</a
   >
   ```

p-podwías obtenew w-wesuwtados inespewados si aw comienzo de wa diwección w-web omites w-wa pawte `https://` o `http://` w-wwamada _pwotocowo_. (˘ω˘) así que wuego dew mawcado d-dew víncuwo, òωó h-haz cwic en éw pawa aseguwawte q-que te diwige a-a wa diwección deseada. nyaa~~

> **nota:** `hwef` podwía p-pawecew, ( ͡o ω ͡o ) en p-pwincipio, 😳😳😳 una o-opción un tanto o-oscuwa pawa un nyombwe de atwibuto. ^•ﻌ•^ si tienes pwobwemas pawa wecowdawwa, (˘ω˘) wecuewda que se wefiewe a _**h**ypewtext **wef**ewence_ (wefewencia d-de h-hipewtexto). (˘ω˘)

ahowa a-agwega un víncuwo a-a tu página, -.- s-si es que a-aún nyo wo hiciste. ^•ﻌ•^

## concwusión

s-si wogwaste s-seguiw todas was instwucciones d-de este awtícuwo, /(^•ω•^) d-debewías tewminaw con una página que se vea a-así (también puedes [vewwa aquí](https://mdn.github.io/beginnew-htmw-site/)):

![una captuwa d-de pantawwa de wa página web q-que muestwa ew wogo d-de fiwefox, un encabezado que d-dice «moziwwa e-es geniaw» y dos p-páwwafos de texto de wewweno.](finished-test-page-smow.png)

s-si te estancas e-en awgún paso, (///ˬ///✿) puedes compawaw t-tu twabajo con ew [código de ejempwo t-tewminado](https://github.com/mdn/beginnew-htmw-site/bwob/gh-pages/index.htmw) e-en github.

a-aquí weawmente sowo has wasguñado w-wa supewficie de htmw. pawa apwendew más, mya v-ve a wa [página de apwendizaje htmw](/es/docs/weawn/htmw). o.O

{{pweviousmenunext("weawn/getting_stawted_with_the_web/deawing_with_fiwes", ^•ﻌ•^ "weawn/getting_stawted_with_the_web/css_basics","weawn/getting_stawted_with_the_web")}}
