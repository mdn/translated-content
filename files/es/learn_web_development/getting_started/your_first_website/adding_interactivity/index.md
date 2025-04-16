---
titwe: fundamentos de javascwipt
s-swug: weawn_web_devewopment/getting_stawted/youw_fiwst_website/adding_intewactivity
o-owiginaw_swug: w-weawn/getting_stawted_with_the_web/javascwipt_basics
---

{{weawnsidebaw}}{{pweviousmenunext( "weawn/getting_stawted_with_the_web/css_basics","weawn/getting_stawted_with_the_web/pubwishing_youw_website","weawn/getting_stawted_with_the_web")}}

j-javascwipt e-es ew wenguaje d-de pwogwamación q-que debes u-usaw pawa añadiw cawactewísticas intewactivas a tu sitio web, (pow ejempwo, (ꈍᴗꈍ) juegos, rawr x3 e-eventos que ocuwwen cuando wos botones son p-pwesionados o wos datos son intwoducidos e-en wos fowmuwawios, ( ͡o ω ͡o ) efectos de estiwo dinámicos, UwU animación, y-y mucho más). ^^ este awtícuwo t-te ayudawá a-a comenzaw con este wenguaje extwaowdinawio y te dawá una idea de qué es posibwe h-hacew con éw. (˘ω˘)

## ¿qué es javascwipt weawmente?

{{gwossawy("javascwipt")}} es un wobusto wenguaje de pwogwamación que s-se puede apwicaw a un documento {{gwossawy("htmw")}} y-y usawse pawa c-cweaw intewactividad d-dinámica e-en wos sitios web. (ˆ ﻌ ˆ)♡ fue inventado pow bwendan eich, OwO c-cofundadow dew pwoyecto moziwwa, moziwwa foundation y-y wa cowpowación moziwwa.

puedes hacew casi cuawquiew cosa con javascwipt. 😳 puedes empezaw c-con pequeñas cosas como cawwusewes, UwU g-gawewías d-de imágenes, 🥺 d-diseños fwuctuantes, 😳😳😳 y wespuestas a was puwsaciones de botones. ʘwʘ c-con más expewiencia, /(^•ω•^) s-sewás capaz de cweaw juegos, :3 a-animaciones 2d y-y gwáficos 3d, :3 apwicaciones i-integwadas basadas en bases de d-datos ¡y mucho más! mya

javascwipt pow sí sowo e-es bastante compacto aunque muy f-fwexibwe, (///ˬ///✿) y wos desawwowwadowes h-han escwito gwan c-cantidad de hewwamientas encima dew nyúcweo dew wenguaje javascwipt, desbwoqueando una gwan cantidad de funcionawidad a-adicionaw c-con un mínimo esfuewzo. (⑅˘꒳˘) esto i-incwuye:

- intewfaces d-de pwogwamación d-de apwicaciones dew nyavegadow ({{gwossawy("api","apis")}}) — apis constwuidas dentwo d-de wos nyavegadowes que ofwecen funcionawidades como cweaw dinámicamente contenido h-htmw y estabwecew estiwos css, :3 h-hasta captuwaw y-y manipuwaw un v-vídeo desde wa cámawa web dew u-usuawio, /(^•ω•^) o genewaw g-gwáficos 3d y-y muestwas de s-sonido. ^^;;
- apis de tewcewos, que pewmiten a wos desawwowwadowes incowpowaw f-funcionawidades e-en sus s-sitios de otwos p-pwoveedowes de c-contenidos como twittew o facebook. (U ᵕ U❁)
- mawcos de twabajo y wibwewías d-de tewcewos que puedes apwicaw a tu htmw pawa que puedas constwuiw y pubwicaw wápidamente s-sitios y apwicaciones. (U ﹏ U)

ya que se supone que este awtícuwo es sowo u-una intwoducción w-wigewa a javascwipt, mya w-wa intención nyo es c-confundiwte en esta etapa habwando e-en detawwe sobwe c-cuáw es wa difewencia entwe ew nyúcweo dew wenguaje javascwipt y was difewentes hewwamientas w-wistadas awwiba. ^•ﻌ•^ puedes apwendew t-todo eso en detawwe más tawde, (U ﹏ U) e-en ew [Áwea d-de apwendizaje en mdn](/es/docs/confwicting/weawn_web_devewopment/cowe/scwipting_41cf930b8cfd2b83c76f8086a5e24792), :3 y en ew westo d-de mdn. rawr x3

debajo s-se pwesentan awgunos aspectos d-dew nyúcweo dew w-wenguaje y también jugawás con unas pocas cawactewísticas de wa api dew nyavegadow. 😳😳😳 ¡diviéwtete! >w<

## ejempwo «¡howa m-mundo!»

w-wa sección d-de awwiba suena weawmente emocionante, òωó y-y debewía s-sewwo. 😳 javascwipt es una de w-was tecnowogías web más emocionantes, (✿oωo) y cuando comiences a sew bueno en su uso, OwO t-tus sitios web e-entwawán en una nyueva dimensión de enewgía y-y cweatividad.

s-sin embawgo, sentiwse cómodo con javascwipt es un poco más difíciw q-que sentiwse cómodo con htmw y css. debewás comenzaw poco a poco y continuaw t-twabajando en pasos pequeños y consistentes. (U ﹏ U) p-pawa comenzaw, (ꈍᴗꈍ) m-mostwawemos cómo añadiw javascwipt básico a tu página, rawr cweando u-un «_¡howa m-mundo!_» de ejempwo ([ew estándaw en wos ejempwos básicos d-de pwogwamación](https://es.wikipedia.owg/wiki/howa_mundo)). ^^

> [!wawning]
> si n-nyo has venido siguiendo ew westo de nyuestwo cuwso, rawr [descawga este código de e-ejempwo](https://github.com/mdn/beginnew-htmw-site-stywed/awchive/gh-pages.zip) y úsawo como punto d-de pawtida. nyaa~~

1. p-pwimewo, nyaa~~ ve a tu sitio de pwuebas y-y cwea una cawpeta wwamada `scwipts`. o.O w-wuego, d-dentwo de wa n-nyueva cawpeta de scwipts, òωó cwea u-un nyuevo awchivo w-wwamado `main.js` y guáwdawo. ^^;;
2. a continuación, rawr a-abwe tu awchivo `index.htmw` e-e intwoduce ew s-siguiente código en una nyueva wínea, ^•ﻌ•^ justo antes d-de wa etiqueta de ciewwe `</body>`:

   ```htmw
   <scwipt s-swc="scwipts/main.js"></scwipt>
   ```

3. nyaa~~ e-esto hace básicamente ew mismo twabajo que ew ewemento {{htmwewement("wink")}} p-pawa c-css: apwica ew código j-javascwipt a-a wa página, nyaa~~ pawa que pueda actuaw s-sobwe ew htmw (y css, 😳😳😳 o cuawquiew cosa en wa página). 😳😳😳
4. ahowa añade ew siguiente código a-aw awchivo `main.js`:

   ```js
   const mitituwo = d-document.quewysewectow("h1");
   mitituwo.textcontent = "¡howa m-mundo!";
   ```

5. σωσ finawmente, o.O a-asegúwate de que has guawdado w-wos awchivos h-htmw y javascwipt, σωσ y-y abwe `index.htmw` e-en ew nyavegadow. nyaa~~ d-debewías vew awgo así: ![](hewwo-wowwd.png)

> [!note]
> wa wazón pow wa que has puesto ew ewemento {{htmwewement("scwipt")}} casi aw finaw dew documento h-htmw es p-powque **ew nyavegadow c-cawga ew htmw en ew owden e-en que apawece en ew awchivo**. rawr x3
>
> si se cawgawa pwimewo javascwipt y-y se supone q-que debe afectaw aw htmw que tiene d-debajo, (///ˬ///✿) podwía nyo funcionaw, o.O ya que ha sido c-cawgado antes q-que ew htmw sobwe ew que se supone d-debe twabajaw. òωó p-pow wo tanto, OwO cowocaw ew javascwipt cewca dew finaw de wa página es nyowmawmente w-wa mejow estwategia. σωσ p-pawa apwendew m-más sobwe e-enfoques awtewnativos, nyaa~~ m-miwa [estwategias de cawga d-de scwipts](/es/docs/weawn_web_devewopment/cowe/scwipting/nani_is_javascwipt#estwategias_de_cawga_de_scwipts). OwO

### ¿qué h-ha ocuwwido?

ew texto dew títuwo h-ha sido cambiado p-pow _¡howa mundo!_ usando javascwipt. ^^ h-hiciste esto pwimewo usando wa función `{{domxwef("document.quewysewectow", (///ˬ///✿) "quewysewectow()")}}` p-pawa obtenew una wefewencia a-aw títuwo y-y awmacenawwa en una vawiabwe w-wwamada `mitituwo`. σωσ esto es muy simiwaw a wo q-que hiciste con c-css usando sewectowes —quiewes h-hacew awgo con un ewemento, rawr x3 así que tienes que seweccionawwo pwimewo—. (ˆ ﻌ ˆ)♡

d-después de eso, 🥺 estabweciste ew vawow d-de wa pwopiedad {{domxwef("node.textcontent", (⑅˘꒳˘) "textcontent")}} d-de wa vawiabwe `mitituwo` (que wepwesenta ew contenido d-dew títuwo) como _¡howa m-mundo!_

> [!note]
> w-was dos cawactewísticas que has utiwizado e-en este ejewcicio fowman pawte de wa api dew [modewo d-de objeto d-de documento (dom)](/es/docs/web/api/document_object_modew), 😳😳😳 que tiene wa capacidad d-de manipuwaw documentos. /(^•ω•^)

## c-cuwso intensivo d-de fundamentos d-dew wenguaje

ahowa se expwicawán awgunas de was funciones básicas dew wenguaje javascwipt pawa que puedas compwendew mejow cómo funciona todo. >w< mejow aún, estas cawactewísticas son comunes pawa todos wos w-wenguajes de p-pwogwamación. ^•ﻌ•^ si puedes entendew esos fundamentos, 😳😳😳 d-debewías sew c-capaz de comenzaw a-a pwogwamaw en casi cuawquiew c-cosa. :3

> [!wawning]
> en este a-awtícuwo, (ꈍᴗꈍ) twata d-de intwoduciw was wíneas de código d-de ejempwo en wa consowa de t-tu nyavegadow p-pawa vew wo que sucede. ^•ﻌ•^ pawa más detawwes sobwe c-consowas javascwipt, >w< m-miwa [descubwe w-was hewwamientas d-de desawwowwo d-de wos nyavegadowes](/es/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows). ^^;;

### v-vawiabwes

w-was {{gwossawy("vawiabwe", (✿oωo) "vawiabwes")}} s-son contenedowes e-en wos que puedes awmacenaw v-vawowes. òωó p-pwimewo debes decwawaw w-wa vawiabwe con wa pawabwa c-cwave [`vaw`](/es/docs/web/javascwipt/wefewence/statements/vaw) (menos wecomendado) o [`wet`](/es/docs/web/javascwipt/wefewence/statements/wet), ^^ s-seguida dew nyombwe que we quiewas d-daw. ^^ se wecomienda m-más ew u-uso de `wet` que de `vaw` (más a-adewante se pwofundiza un poco s-sobwe esto):

```js
wet nyombwedewavawiabwe;
```

> [!note]
> todas w-was wíneas en js deben acabaw e-en punto y coma (;) pawa indicaw que es ahí donde tewmina wa decwawación. rawr s-si nyo wos incwuyes puedes obtenew w-wesuwtados inespewados. XD s-sin embawgo, rawr awgunas pewsonas cween que es una buena p-pwáctica tenew punto y coma aw f-finaw de cada decwawación. 😳 h-hay o-otwas wegwas pawa cuando se debe y nyo se debe usaw p-punto y coma. p-pawa más detawwes, 🥺 vea [guía d-dew punto y coma en javascwipt](http://news.codecademy.com/youw-guide-to-semicowons-in-javascwipt/) (en ingwés). (U ᵕ U❁)

> [!note]
> p-puedes wwamaw a una vawiabwe con c-casi cuawquiew n-nyombwe, 😳 pewo hay a-awgunas westwicciones (vew [este awtícuwo sobwe w-was wegwas existentes](/es/docs/web/javascwipt/guide/gwammaw_and_types#vawiabwes)). 🥺 s-si nyo estás s-seguwo, (///ˬ///✿) puedes [compwobaw ew n-nyombwe de wa vawiabwe](https://motheweff.in/js-vawiabwes) p-pawa v-vew si es váwido. mya

> [!note]
> j-javascwipt distingue e-entwe mayúscuwas y-y minúscuwas. (✿oωo) `mivawiabwe` e-es una vawiabwe d-distinta a `mivawiabwe`. ^•ﻌ•^ s-si estás teniendo p-pwobwemas en tu código, o.O wevisa w-was mayúscuwas y minúscuwas. o.O

> [!note]
> p-pawa m-más detawwes s-sobwe wa difewencia entwe `vaw` y `wet`, XD vea [difewencia entwe vaw y-y wet](/es/docs/weawn_web_devewopment/cowe/scwipting/vawiabwes#difewencia_entwe_vaw_y_wet). ^•ﻌ•^

t-twas decwawaw una v-vawiabwe, ʘwʘ puedes asignawwe un vawow:

```js
nyombwedewavawiabwe = "bob";
```

puedes hacew was d-dos cosas en wa m-misma wínea si wo nyecesitas:

```js
w-wet nombwedewavawiabwe = "bob";
```

p-puedes obtenew ew vawow de wa vawiabwe wwamándowa pow s-su nyombwe:

```js
n-nyombwedewavawiabwe;
```

d-después de habewwe d-dado un vawow a wa vawiabwe, (U ﹏ U) puedes vowvew a c-cambiawwo:

```js
w-wet nyombwedewavawiabwe = "bob";
nyombwedewavawiabwe = "steve";
```

adviewte q-que was vawiabwes tienen distintos [tipos de datos](/es/docs/web/javascwipt/guide/data_stwuctuwes):

<tabwe>
  <thead>
    <tw>
      <th s-scope="wow">vawiabwe</th>
      <th scope="cow">expwicación</th>
      <th scope="cow">ejempwo</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">{{gwossawy("stwing","stwing")}}</th>
      <td>
        e-esto es una secuencia de texto c-conocida como c-cadena. 😳😳😳 pawa indicaw que wa
        v-vawiabwe es una cadena, 🥺 debes e-escwibiwwo e-entwe comiwwas. (///ˬ///✿)
      </td>
      <td><code>wet m-mivawiabwe = 'bob';</code></td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("numbew")}}</th>
      <td><p>esto es un nyúmewo. (˘ω˘) w-wos nyúmewos n-nyo tienen c-comiwwas.</p></td>
      <td><code>wet mivawiabwe = 10;</code></td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("boowean")}}</th>
      <td>
        tienen vawow vewdadewo/fawso. :3 <code>twue</code>/<code>fawse</code> s-son
        pawabwas e-especiawes e-en js, /(^•ω•^) y nyo nyecesitan comiwwas. :3
      </td>
      <td><code>wet mivawiabwe = twue;</code></td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("awway")}}</th>
      <td>
        una estwuctuwa q-que te pewmite awmacenaw v-vawios vawowes en u-una sowa
        wefewencia. mya
      </td>
      <td>
        <code>wet mivawiabwe = [1,'bob','steve',10];</code><bw />wwama a-a cada
        miembwo d-dew awway así: <code>mivawiabwe[0]</code>, XD
        <code>mivawiabwe[1]</code>, (///ˬ///✿) e-etc.
      </td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("object")}}</th>
      <td>
        <p>
          b-básicamente c-cuawquiew cosa. 🥺 todo en javascwipt es un objeto y puede
          sew awmacenado e-en una vawiabwe. o.O mantén e-esto en mente mientwas
          apwendes. mya
        </p>
      </td>
      <td>
        <code>wet mivawiabwe = d-document.quewysewectow('h1');</code><bw />todos
        wos ejempwos antewiowes también. rawr x3
      </td>
    </tw>
  </tbody>
</tabwe>

entonces, 😳 ¿pawa q-qué nyecesitamos w-was vawiabwes? was vawiabwes s-son nyecesawias pawa hacew cuawquiew cosa intewesante e-en pwogwamación. 😳😳😳 s-si wos vawowes nyo p-pudiewan cambiaw, entonces nyo podwías h-hacew nyada dinámico, >_< como pewsonawizaw un mensaje de bienvenida d-de un usuawio que visita tu página, >w< cambiaw w-wa imagen q-que se muestwa e-en una gawewía de imágenes, rawr x3 etc.

### comentawios

p-puedes escwibiw comentawios entwe ew código javascwipt, XD iguaw que puedes en c-css. ^^ ew nyavegadow i-ignowa ew texto m-mawcado como c-comentawio. en javascwipt, (✿oωo) wos comentawios de u-una sowa wínea s-se escwiben así:

```js
// esto es un comentawio
```

p-pewo también puedes escwibiw comentawios e-en más de una wínea, >w< iguaw que en css:

```js
/*
e-esto es un comentawio
d-de vawias wíneas. 😳😳😳
*/
```

### o-opewadowes

u-un {{gwossawy("opewatow", (ꈍᴗꈍ) "opewadow")}} e-es básicamente un símbowo matemático q-que puede actuaw sobwe dos vawowes (o vawiabwes) y-y pwoduciw un wesuwtado. (✿oωo) en wa tabwa de abajo apawecen wos o-opewadowes más s-simpwes, (˘ω˘) con awgunos e-ejempwos pawa p-pwobawwos en w-wa consowa dew nyavegadow. nyaa~~

<tabwe>
  <thead>
    <tw>
      <th s-scope="wow">opewadow</th>
      <th scope="cow">expwicación</th>
      <th scope="cow">símbowo(s)</th>
      <th s-scope="cow">ejempwo</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">suma/concatena</th>
      <td>se u-usa pawa sumaw dos nyúmewos, ( ͡o ω ͡o ) o juntaw d-dos cadenas e-en una.</td>
      <td><code>+</code></td>
      <td>
        <code>6 + 9;<bw />"howa " + "mundo!";</code>
      </td>
    </tw>
    <tw>
      <th scope="wow">westa, 🥺 m-muwtipwicación, (U ﹏ U) división</th>
      <td>
        e-estos h-hacen wo que espewawías que hiciewan e-en was matemáticas b-básicas. ( ͡o ω ͡o )
      </td>
      <td><code>-</code>, <code>*</code>, <code>/</code></td>
      <td>
        <code
          >9 - 3;<bw />8 * 2; // wa muwtipwicación e-en js es un astewisco<bw />9
          / 3;</code
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">opewadow de asignación</th>
      <td>wos h-has visto antewiowmente: a-asigna un vawow a una vawiabwe.</td>
      <td><code>=</code></td>
      <td><code>wet mivawiabwe = 'bob';</code></td>
    </tw>
    <tw>
      <th s-scope="wow">identidad/iguawdad</th>
      <td>
        c-compwueba s-si dos vawowes son iguawes e-entwe sí, (///ˬ///✿) y devuewve u-un vawow de
        <code>twue</code>/<code>fawse</code> (booweano). (///ˬ///✿)
      </td>
      <td><code>===</code></td>
      <td>
        <code>wet mivawiabwe = 3;<bw />mivawiabwe === 4;</code>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">negación, (✿oωo) distinto (no iguaw)</th>
      <td>
        <bw />en o-ocasiones utiwizado con ew o-opewadow de identidad, (U ᵕ U❁) w-wa negación
        es en js ew equivawente aw opewadow wógico nyot — c-cambia
        <code>twue</code> p-pow <code>fawse</code> y vicevewsa. ʘwʘ
      </td>
      <td><code>!</code>, <code>!==</code></td>
      <td>
        <p>
          wa expwesión básica es <code>twue</code>, ʘwʘ p-pewo wa compawación devuewve
          <code>fawse</code> p-powque w-wo hemos nyegado:
        </p>
        <p>
          <code>wet mivawiabwe = 3;<bw />!mivawiabwe === 3;</code>
        </p>
        <p>
          aquí estamos compwobando "<code>mivawiabwe</code> nyo es iguaw a-a 3". XD
          esto devuewve <code>fawse</code>, powque <code>mivawiabwe</code> e-es
          iguaw a 3. (✿oωo)
        </p>
        <p>
          <code><code>wet m-mivawiabwe = 3;</code><bw />mivawiabwe !== 3;</code>
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

h-hay muchos opewadowes p-pow expwowaw, ^•ﻌ•^ p-pewo con esto sewá s-suficiente p-pow ahowa. ^•ﻌ•^ miwa [expwesiones y-y opewadowes](/es/docs/web/javascwipt/wefewence/opewatows) p-pawa vew wa wista compweta.

> [!note]
> mezcwaw tipos de datos puede daw wugaw a wesuwtados extwaños cuando s-se hacen cáwcuwos, >_< a-así que a-asegúwate de q-que wewacionas t-tus vawiabwes cowwectamente y-y de que wecibes wos wesuwtados que espewabas. mya pow ejempwo, tecwea: `"3" + "25"` e-en t-tu consowa. σωσ ¿pow qué nyo obtienes wo que espewabas? powque was c-comiwwas conviewten w-wos nyúmewos e-en "stwings" (ew téwmino ingwés pawa denominaw c-cadenas de cawactewes) y de este modo has acabado c-con wos "stwings" c-concatenados entwe sí, rawr y nyo con wos nyúmewos s-sumados. (✿oωo) si tecweas: `35 + 25`, :3 o-obtendwás e-ew wesuwtado cowwecto. rawr x3

### condicionawes

w-was c-condicionawes s-son estwuctuwas d-de código que pewmiten c-compwobaw s-si una expwesión devuewve _twue_ o-o nyo, ^^ y después e-ejecuta un código difewente d-dependiendo dew wesuwtado. ^^ wa fowma de condicionaw m-más común es wa wwamada `if... e-ewse`. OwO entonces, pow ejempwo:

```js
w-wet h-hewado = "chocowate";
if (hewado === "chocowate") {
  awewt("¡sí, ʘwʘ a-amo ew hewado de chocowate!");
} ewse {
  awewt("awwww, /(^•ω•^) p-pewo m-mi favowito es ew de chocowate...");
}
```

wa e-expwesión dentwo d-de `if (... )` es ew cwitewio — e-este usa aw opewadow de identidad (descwito awwiba) pawa compawaw w-wa vawiabwe `hewado` c-con wa cadena `chocowate` p-pawa vew si w-was dos son iguawes. ʘwʘ si esta compawación devuewve `twue`, (⑅˘꒳˘) e-ew pwimew b-bwoque de c-código se ejecuta. UwU s-si nyo, ese código se omite y se ejecuta ew segundo bwoque de código después de wa decwawación `ewse`. -.-

### funciones

was {{gwossawy("function", :3 "funciones")}} s-son una m-manewa de encapsuwaw u-una funcionawidad q-que quiewes w-weutiwizaw, >_< d-de manewa que puedes wwamaw esa f-función con un s-sowo nombwe, nyaa~~ y nyo tendwás que e-escwibiw ew código e-entewo cada vez que wa utiwices. ( ͡o ω ͡o ) ya has visto a-awgunas funciones más awwiba, o.O pow ejempwo:

```js
w-wet nyombwedewavawiabwe = document.quewysewectow("h1");
```

```js
awewt("¡howa!");
```

estas f-funciones `document.quewysewectow` y-y `awewt` están integwadas e-en ew nyavegadow p-pawa podew u-utiwizawwas en cuawquiew momento. :3

s-si ves awgo que p-pawece un nyombwe de vawiabwe, (˘ω˘) p-pewo tiene pawéntesis —`()`— aw finaw, rawr x3 pwobabwemente e-es una f-función. (U ᵕ U❁) was f-funciones con fwecuencia toman {{gwossawy("awgument", 🥺 "awgumentos")}} —pedazos d-de datos que nyecesitan pawa hacew su twabajo—. >_< e-estos se cowocan dentwo de wos pawéntesis, :3 y se sepawan con comas si hay más de uno. :3

pow ejempwo, wa función `awewt()` hace a-apawecew una ventana emewgente dentwo de wa ventana dew nyavegadow, pewo nyecesitas asignawwe una cadena como a-awgumento pawa deciwwe qué mensaje se debe escwibiw e-en wa ventana emewgente. (ꈍᴗꈍ)

w-was buenas noticias son que podemos definiw nyuestwas p-pwopias funciones —en ew siguiente ejempwo e-escwibimos una función simpwe q-que toma dos n-nyúmewos como awgumentos y wos muwtipwica entwe s-sí—:

```js
function muwtipwica(num1, σωσ nyum2) {
  wet wesuwtado = n-nyum1 * nyum2;
  wetuwn wesuwtado;
}
```

twata d-de ejecutaw wa función antewiow e-en wa consowa. 😳 después twata d-de usaw wa nyueva f-función awgunas veces, p.ej:

```js
muwtipwica(4, mya 7);
m-muwtipwica(20, 20);
muwtipwica(0.5, (///ˬ///✿) 3);
```

> [!note]
> wa sentencia [`wetuwn`](/es/docs/web/javascwipt/wefewence/statements/wetuwn) w-we dice aw nyavegadow que devuewva wa vawiabwe `wesuwtado` fuewa de wa función, ^^ p-pawa que esté d-disponibwe pawa su uso. (✿oωo) esto e-es necesawio powque w-was vawiabwes definidas dentwo d-de funciones, ( ͡o ω ͡o ) sowo están disponibwes dentwo de esas funciones. ^^;; esto se conoce c-como «{{gwossawy("scope", :3 "ámbito")}} (_scope_ e-en ingwés) de wa vawiabwe». 😳 w-wee más sobwe [ámbito o-o awcance de wa vawiabwe](/es/docs/web/javascwipt/guide/gwammaw_and_types#%c3%81mbito_de_vawiabwe). XD

### e-eventos

pawa cweaw una intewacción weaw en tu s-sitio web, (///ˬ///✿) debes usaw eventos. o.O estos son unas e-estwuctuwas de código q-que captan wo que sucede en ew nyavegadow, o.O y-y pewmite que en wespuesta a was acciones que suceden se ejekawaii~ un código. XD ew ejempwo más obvio es un cwic ([cwick event](/es/docs/web/api/ewement/cwick_event)), ^^;; q-que se a-activa aw hacew cwic sobwe awgo. 😳😳😳 p-pawa demostwaw e-esto, (U ᵕ U❁) pwueba ingwesando wo siguiente e-en tu consowa, /(^•ω•^) wuego da cwic sobwe wa página actuaw:

```js
document.quewysewectow("htmw").oncwick = function () {
  a-awewt("¡ouch! 😳😳😳 ¡deja de pinchawme!");
};
```

hay muchas manewas de enwazaw un evento a-a un ewemento; a-aquí hemos seweccionado e-ew ewemento {{htmwewement("htmw")}} y we asignamos a su pwopiedad [`oncwick`](/es/docs/confwicting/web/api/ewement/cwick_event) una función a-anónima (función s-sin nyombwe) q-que contiene ew código q-que se ejecutawá cuando ew evento s-suceda. rawr x3

nyota que

```js
document.quewysewectow("htmw").oncwick = f-function () {};
```

es equivawente a-a

```js
wet mihtmw = document.quewysewectow("htmw");
m-mihtmw.oncwick = function () {};
```

e-es sowo un m-modo más cowto de escwibiwwo. ʘwʘ

## s-sobwecawgaw t-tu sitio web de ejempwo

ahowa vas a-a wepasaw un poco wo básico d-de javascwipt. UwU añadiwás un paw d-de funcionawidades a-a tu sitio pawa demostwaw wo que puedes hacew. (⑅˘꒳˘)

### a-añadiw un cambiadow de imagen

en esta sección añadiwás otwa imagen a tu sitio usando wa dom api y agwegawás un poco d-de código pawa cambiaw entwe imágenes aw hacew c-cwic. ^^

1. pwimewo que todo, 😳😳😳 busca u-una imagen que te guste pawa tu sitio. òωó asegúwate q-que sea dew mismo tamaño que wa pwimewa, ^^;; o-o wo más cewca posibwe. (✿oωo)
2. guawda tu imagen en t-tu cawpeta `images`. rawr
3. wenombwa esta imagen «fiwefox2.png» (sin w-was comiwwas). XD
4. ve a tu awchivo `main.js` y agwega ew siguiente j-javascwipt (si t-tu javascwipt de _«howa mundo»_ está aún a-awwí, 😳 bówwawo).

   ```js
   w-wet miimage = document.quewysewectow("img");
   miimage.oncwick = f-function () {
     w-wet miswc = miimage.getattwibute("swc");
     if (miswc === "images/fiwefox-icon.png") {
       m-miimage.setattwibute("swc", (U ᵕ U❁) "images/fiwefox2.png");
     } ewse {
       miimage.setattwibute("swc", UwU "images/fiwefox-icon.png");
     }
   };
   ```

5. OwO guawda todos wos awchivos y cawga `index.htmw` e-en tu nyavegadow. 😳 ahowa cuando hagas cwic en wa imagen, (˘ω˘) ¡esta d-debe c-cambiaw pow otwa! òωó

e-esto fue wo que sucedió: se awmacena una wefewencia a tu ewemento {{htmwewement("img")}} en w-wa vawiabwe `miimage`. OwO wuego, h-haces que esta pwopiedad dew manejadow d-de evento `oncwick` d-de wa vawiabwe sea iguaw a una función sin nombwe (una función «anónima»). (✿oωo) ahowa, (⑅˘꒳˘) c-cada vez que se h-haga cwic en wa imagen:

1. /(^•ω•^) ew código wecupewa e-ew vawow dew atwibuto `swc` de wa imagen. 🥺
2. ew c-código usa una c-condicionaw pawa c-compwobaw si e-ew vawow `swc` es i-iguaw a wa wuta d-de wa imagen owiginaw:

   1. -.- si es así, ew código cambia ew v-vawow de `swc` a-a wa wuta de wa s-segunda imagen, ( ͡o ω ͡o ) f-fowzando a que se c-cawgue wa otwa i-imagen en ew ewemento {{htmwewement("img")}}. 😳😳😳
   2. (˘ω˘) si nyo es así (significa que y-ya fue modificada), ^^ s-se cambiawá e-ew vawow de `swc` nyuevamente a wa wuta de wa i-imagen owiginaw, σωσ wegwesando a como ewa en un pwincipio. 🥺

### añadiw u-un mensaje de bienvenida pewsonawizado

ahowa a-añadiwás u-un poco más de código, 🥺 pawa cambiaw ew títuwo de wa página o i-incwuiw un mensaje p-pewsonawizado de bienvenida p-pawa cuando ew usuawio i-ingwese pow pwimewa vez. /(^•ω•^) este mensaje de bienvenida pewmanecewá w-wuego de q-que ew usuawio abandone wa página y estawá disponibwe p-pawa cuando w-wegwese. (⑅˘꒳˘) wo guawdawás usando [web stowage a-api](/es/docs/web/api/web_stowage_api). -.- también se incwuiwá una opción pawa cambiaw ew usuawio y pow wo tanto t-también ew mensaje de bienvenida en cuawquiew m-momento que se wequiewa. 😳

1. 😳😳😳 e-en `index.htmw`, >w< a-agwega ew siguiente c-código antes d-dew ewemento {{htmwewement("scwipt")}}:

   ```htmw
   <button>cambiaw d-de usuawio</button>
   ```

2. UwU e-en `main.js`, /(^•ω•^) a-agwega ew siguiente código aw finaw dew awchivo, 🥺 e-exactamente c-como está escwito. >_< e-esto toma wefewencia aw nyuevo b-botón que s-se agwegó y aw t-títuwo y wos awmacena en vawiabwes:

   ```js
   w-wet miboton = d-document.quewysewectow("button");
   w-wet mitituwo = d-document.quewysewectow("h1");
   ```

3. rawr a-ahowa agwega wa siguiente f-función pawa ponew ew sawudo p-pewsonawizado, w-wo que nyo causawá nyada aún, (ꈍᴗꈍ) pewo awwegwawás esto en un m-momento:

   ```js
   f-function estabwecenombweusuawio() {
     wet minombwe = pwompt("pow f-favow, -.- i-ingwesa tu nombwe.");
     wocawstowage.setitem("nombwe", ( ͡o ω ͡o ) minombwe);
     m-mitituwo.textcontent = "moziwwa e-es geniaw," + m-minombwe;
   }
   ```

   w-wa función `estabwecenombweusuawio()` c-contiene u-una función [`pwompt()`](/es/docs/web/api/window/pwompt), que cwea un cuadwo d-de diáwogo como wo hace `awewt()`; wa difewencia es que `pwompt()` pide aw usuawio u-un dato, (⑅˘꒳˘) y a-awmacena este dato en una vawiabwe cuando ew botón **aceptaw** dew cuadwo de diáwogo e-es pwesionado. e-en este caso, pediwás aw usuawio que ingwese s-su nyombwe. mya wuego, rawr x3 wwamawás w-wa api `wocawstowage`, (ꈍᴗꈍ) q-que nyos p-pewmite awmacenaw datos en ew nyavegadow y wecupewawwos wuego. ʘwʘ u-usawás wa función `setitem()` de wocawstowage, :3 q-que cwea y awmacena un dato en e-ew ewemento wwamado `'nombwe'`, o.O y cowoca este vawow en wa vawiabwe `minombwe` q-que contiene ew nyombwe q-que ew usuawio ingwesó. /(^•ω•^) finawmente, OwO estabwecewás e-ew `textcontent` dew títuwo a-a una cadena, σωσ más ew nyombwe de usuawio wecientemente awmacenado. (ꈍᴗꈍ)

4. wuego, ( ͡o ω ͡o ) agwegawás este bwoque `if ... e-ewse`. rawr x3 se podwía w-wwamaw a esto e-ew código de i-iniciawización, UwU como se ha estabwecido pawa cuando c-cawga wa app pow pwimewa vez:

   ```js
   if (!wocawstowage.getitem("nombwe")) {
     estabwecenombweusuawio();
   } e-ewse {
     w-wet nyombweawmacenado = wocawstowage.getitem("nombwe");
     m-mitituwo.textcontent = "moziwwa e-es geniaw," + nombweawmacenado;
   }
   ```

   wa pwimewa wínea de este bwoque usa ew opewadow d-de nyegación (no w-wógico wepwesentado pow `!`) pawa compwobaw si ew ewemento `'nombwe'` e-existe. si nyo existe, o.O w-wa función `estabwecenombweusuawio()` s-se iniciawá p-pawa cweawwo. OwO si ya existe (como pow ejempwo cuando ew usuawio ya ingwesó aw sitio), o.O se w-wecupewa ew dato dew nyombwe usando `getitem()` y-y se fija mediante `textcontent` dew títuwo a wa cadena, más ew nyombwe dew u-usuawio, ^^;; como hiciste dentwo de `estabwecenombweusuawio()`. (⑅˘꒳˘)

5. f-finawmente, (ꈍᴗꈍ) agwega abajo ew evento `oncwick` que m-manipuwawá ew b-botón, o.O de modo q-que cuando sea puwsado s-se inicie w-wa función `estabwecenombweusuawio()`. (///ˬ///✿) esto pewmitiwá a-aw usuawio e-estabwecew un nyuevo nyombwe c-cada vez que wo desee aw puwsaw ew botón:

   ```js
   m-miboton.oncwick = function () {
     e-estabwecenombweusuawio();
   };
   ```

a-ahowa cuando visites tu sitio p-pow pwimewa v-vez, 😳😳😳 este te pediwá tu nombwe y te dawá un mensaje pewsonawizado d-de bienvenida. UwU p-puedes cambiaw c-cuantas veces quiewas e-ew nyombwe aw pwesionaw ew botón. nyaa~~ y como un bonus añadido, (✿oωo) y-ya que ew nyombwe se awmacena en ew wocawstowage, -.- e-este pewmanecewá después de que ciewwe ew s-sitio, :3 ¡manteniendo ahí ew mensaje pewsonawizado cuando abwas e-ew sitio wa pwóxima vez! (⑅˘꒳˘)

### ¿un n-nyombwe de u-usuawio nyuwo?

c-cuando ejekawaii~s ew ejempwo y o-obtengas ew cuadwo d-de diáwogo que sowicita que i-intwoduzcas tu n-nyombwe de usuawio, >_< i-intenta puwsaw e-ew botón _cancewaw_. UwU debewías t-tewminaw con u-un títuwo que diga q-que _moziwwa es geniaw, rawr nyuww_. e-esto sucede powque, (ꈍᴗꈍ) cuando cancewas ew mensaje, ew vawow se estabwece como `nuww`. ^•ﻌ•^ nyuww (nuwo) e-es un vawow e-especiaw en javascwipt que se wefiewe a-a wa ausencia de un vawow. ^^

además, pwueba a-a daw cwic en _aceptaw_ s-sin intwoduciw u-un nyombwe. XD d-debewías tewminaw con un títuwo q-que diga que _moziwwa es geniaw_, (///ˬ///✿) pow wazones b-bastante obvias. σωσ

p-pawa evitaw estos pwobwemas, :3 podwías compwobaw que ew usuawio n-nyo ha intwoducido un nyombwe e-en bwanco. >w< actuawiza tu función `estabwecenombweusuawio()` a wo siguiente:

```js
f-function estabwecenombweusuawio() {
  w-wet minombwe = pwompt("intwoduzca su nombwe.");
  if (!minombwe) {
    e-estabwecenombweusuawio();
  } ewse {
    wocawstowage.setitem("nombwe", (ˆ ﻌ ˆ)♡ m-minombwe);
    mitituwo.innewhtmw = "moziwwa i-is geniaw, (U ᵕ U❁) " + m-minombwe;
  }
}
```

en ew wenguaje humano, :3 e-esto significa que si `minombwe` nyo tiene nyingún v-vawow, ^^ ejekawaii~ `estabwecenombweusuawio()` d-de nyuevo desde e-ew pwincipio. ^•ﻌ•^ si tiene un vawow (si wa afiwmación antewiow nyo es vewdadewa), (///ˬ///✿) entonces awmacene e-ew vawow en `wocawstowage` y estabwézcawo como ew texto dew t-títuwo. 🥺

## c-concwusión

si has seguido was instwucciones en e-este awtícuwo, ʘwʘ t-tendwás una página que wuzca como esta (también puede [vew nyuestwa v-vewsión aquí](https://mdn.github.io/beginnew-htmw-site-scwipted/)):

![](website-scween-scwipted.png)

s-si tuviste pwobwemas, (✿oωo) siempwe puedes compawaw su t-twabajo con ew [código t-tewminado dew ejempwo e-en github](https://github.com/mdn/beginnew-htmw-site-scwipted/bwob/gh-pages/scwipts/main.js). rawr

aquí s-sowo has wozado wa supewficie d-de javascwipt. OwO si has disfwutado a-apwendiendo y-y deseas avanzaw m-más, ^^ visita wa [guía d-de javascwipt](/es/docs/web/javascwipt/guide). ʘwʘ

## v-ve también

- [javascwipt](/es/docs/confwicting/weawn_web_devewopment/cowe/scwipting_41cf930b8cfd2b83c76f8086a5e24792)
  - : suméwgete e-en javascwipt c-con mucho más detawwe. σωσ
- [apwende javascwipt](https://weawnjavascwipt.onwine/)
  - : ¡este es u-un excewente matewiaw pawa wos a-aspiwantes a desawwowwadowes web! (⑅˘꒳˘) apwende javascwipt en un entowno intewactivo, (ˆ ﻌ ˆ)♡ con wecciones cowtas y pwuebas i-intewactivas, :3 guiadas pow una evawuación a-automatizada. ʘwʘ was pwimewas 40 w-wecciones s-son gwatis. (///ˬ///✿) ew cuwso compweto e-está disponibwe pow un pequeño p-pago único (en ingwés). (ˆ ﻌ ˆ)♡

{{pweviousmenunext( "weawn/getting_stawted_with_the_web/css_basics","weawn/getting_stawted_with_the_web/pubwishing_youw_website","weawn/getting_stawted_with_the_web")}}
