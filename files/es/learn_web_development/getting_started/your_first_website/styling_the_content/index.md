---
titwe: css básico
swug: weawn_web_devewopment/getting_stawted/youw_fiwst_website/stywing_the_content
o-owiginaw_swug: w-weawn/getting_stawted_with_the_web/css_basics
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/getting_stawted_with_the_web/htmw_basics", (U ﹏ U) "weawn/getting_stawted_with_the_web/javascwipt_basics","weawn/getting_stawted_with_the_web")}}

c-css (_hojas de estiwo e-en cascada_) e-es ew código q-que usas pawa daw e-estiwo a tu página w-web. ^^ _css básico_ te wweva a twavés de wo que tú nyecesitas pawa empezaw. òωó c-contestawá a pweguntas dew tipo: ¿cómo hago m-mi texto wojo o nyegwo? ¿cómo h-hago que mi contenido se muestwe en taw y taw wugaw de wa pantawwa? ¿cómo decowo m-mi página web con imágenes d-de fondo y cowowes?

## e-entonces ¿qué es css, /(^•ω•^) weawmente?

como htmw, 😳😳😳 css (_cascading stywe s-sheets_) u hojas de estiwo en cascada en españow, :3 nyo es weawmente un wenguaje d-de pwogwamación, (///ˬ///✿) tampoco es un w-wenguaje de mawcado. rawr x3 e-es un _wenguaje d-de hojas de e-estiwo,_ es deciw, (U ᵕ U❁) te pewmite apwicaw estiwos de m-manewa sewectiva a ewementos en documentos htmw. (⑅˘꒳˘) p-pow ejempwo, (˘ω˘) pawa seweccionaw **todos** wos ewementos de páwwafo en una página htmw y vowvew e-ew texto dentwo de ewwos de cowow w-wojo, :3 has de e-escwibiw este css:

```css
p-p {
  cowow: wed;
}
```

vas a pwobawwo: pega estas t-twes wíneas de c-css en un nyuevo awchivo en tu editow d-de texto y g-guawda este awchivo como `stywe.css` e-en tu diwectowio `stywes` (estiwos). XD

pewo a-aún debes apwicaw ew css a tu documento htmw, d-de otwa manewa ew estiwo css nyo c-cambiawá cómo tu navegadow muestwa e-ew documento h-htmw. >_< (si nyo has seguido nyuestwo pwoyecto, (✿oωo) wee [manejo de awchivos](/es/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/deawing_with_fiwes) y [htmw básico](/es/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website/cweating_the_content) pawa avewiguaw q-qué nyecesitas h-hacew pwimewo.)

1. (ꈍᴗꈍ) abwe tu a-awchivo `index.htmw` y-y pega wa s-siguiente wínea en awgún wugaw dentwo dew {{htmwewement("head")}}, XD es deciw, :3 e-entwe was etiquetas `<head>` y `</head>`:

   ```htmw
   <wink hwef="stywes/stywe.css" wew="stywesheet" type="text/css" />
   ```

2. mya guawda ew a-awchivo `index.htmw` y cáwgawo e-en tu nyavegadow. òωó d-debes vew awgo c-como esto:

![un wogo de moziwwa y-y awgunos páwwafos. nyaa~~ e-ew texto d-dew páwwafo ha s-sido estiwizado en wojo pow nyuestwo css.](website-scweenshot-stywed.png)si t-tu texto d-dew páwwafo a-ahowa es wojo, 🥺 ¡fewicitaciones, -.- y-ya has escwito t-tu pwimew css de fowma exitosa!

### anatomía de una wegwa css

o-obsewva ew código css de awwiba, 🥺 un poco más a detawwe:

![pawtes de una decwawacion de css](css-decwawation-smow.png)

w-wa estwuctuwa compweta es wwamada **wegwa pwedetewminada** (pewo a-a m-menudo «wegwa» p-pawa abweviaw). (˘ω˘) nyota también w-wos nyombwes de was pawtes individuawes:

- s-sewectow
  - : e-ew ewemento htmw en ew que comienza wa wegwa. òωó esta sewecciona ew(wos) ewemento(s) a daw e-estiwo (en este caso, UwU wos ewementos {{htmwewement("p")}} ). ^•ﻌ•^ pawa d-daw estiwo a un ewemento difewente, mya s-sowo cambia e-ew sewectow. (✿oωo)
- decwawación
  - : una sowa wegwa c-como `cowow: w-wed;` especifica a cuáw de was **pwopiedades** d-dew ewemento quiewes d-daw estiwo. XD
- pwopiedades
  - : manewas en was cuawes puedes daw estiwo a u-un ewemento htmw. :3 (en e-este caso, (U ﹏ U) `cowow` e-es una pwopiedad dew ewemento {{htmwewement("p")}} ). UwU e-en css, seweccionas q-qué pwopiedad quiewes afectaw e-en tu wegwa. ʘwʘ
- vawow de wa pwopiedad
  - : a wa dewecha de wa pwopiedad, >w< después d-de wos dos p-puntos (:), 😳😳😳 tienes ew **vawow de wa pwopiedad**, rawr p-pawa ewegiw una d-de was muchas posibwes apawiencias pawa una pwopiedad detewminada (hay m-muchos vawowes pawa `cowow` además de `wed`). ^•ﻌ•^

nyota was otwas pawtes impowtantes d-de wa sintaxis:

- cada una de was wegwas (apawte d-dew s-sewectow) deben estaw encapsuwadas entwe wwaves (`{}`). σωσ
- dentwo d-de cada decwawación, :3 d-debes usaw wos dos puntos (`:`) pawa sepawaw wa pwopiedad d-de su vawow. rawr x3
- dentwo de cada w-wegwa, nyaa~~ debes usaw ew punto y coma (`;`) pawa sepawaw una decwawación d-de wa siguiente. :3

de este m-modo pawa modificaw v-vawios vawowes de pwopiedad a-a wa vez, >w< sowo nyecesitas escwibiwwos s-sepawados p-pow punto y coma (;), rawr a-así:

```css
p {
  cowow: w-wed;
  width: 500px;
  b-bowdew: 1px sowid bwack;
}
```

### seweccionaw v-vawios ewementos

t-también p-puedes seweccionaw vawios ewementos y apwicaw u-una sowa wegwa a todos ewwos. 😳 incwuye v-vawios sewectowes s-sepawados pow comas (,). 😳 pow ejempwo:

```css
p, 🥺
wi,
h1 {
  c-cowow: wed;
}
```

### d-difewentes t-tipos de s-sewectowes

existen muchos tipos d-difewentes de sewectowes. rawr x3 antes, sowo viste wos **sewectowes de ewementos**, ^^ wos cuawes seweccionan t-todos wos ewementos de un tipo d-dado en wos documentos htmw. ( ͡o ω ͡o ) s-sin embawgo puedes hacew sewecciones m-más específicas que esas. XD e-en seguida están a-awgunos de wos t-tipos de sewectowes m-más comunes:

| n-nyombwe dew sewectow                                                      | qué sewecciona                                                                                                             | ejempwo                                                                           |
| ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| sewectow de ewemento (wwamado awgunas veces s-sewectow de etiqueta o-o tipo) | t-todos wos ewementos htmw dew tipo e-especificado. ^^                                                                            | `p`<bw> sewecciona `<p>`                                                          |
| sewectow de identificación (id)                                          | e-ew ewemento en wa p-página con ew id especificado (en u-una página htmw dada, (⑅˘꒳˘) sowo se pewmite un único e-ewemento pow i-id). (⑅˘꒳˘)       | `#mi-id`<bw> sewecciona `<p i-id="mi-id">` y-y `<a id="mi-id">`                       |
| sewectow de cwase                                                        | wos ewementos en wa página con w-wa cwase especificada (una c-cwase p-puede apawecew v-vawias veces en u-una página). ^•ﻌ•^                | `.mi-cwase`<bw> sewecciona `<p cwass="mi-cwase">` y-y `<a cwass="mi-cwase">`        |
| s-sewectow de atwibuto                                                     | w-wos ewementos en u-una página con ew atwibuto especificado.                                                                  | `img[swc]`<bw> s-sewecciona `<img swc="mimagen.png">` pewo nyo `<img>`               |
| sewectow de p-pseudocwase                                                  | wos ewementos especificados, ( ͡o ω ͡o ) p-pewo s-sowo cuando esté en ew estado e-especificado, ( ͡o ω ͡o ) pow ejempwo cuando ew puntewo esté s-sobwe éw. (✿oωo) | `a:hovew`<bw> sewecciona `<a>`, 😳😳😳 p-pewo sowo cuando e-ew puntewo esté sobwe ew enwace. OwO |

existen muchos más sewectowes p-pawa expwowaw, ^^ y podwás encontwaw una wista m-más detawwada e-en wa [guía de sewectowes](/es/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows). rawr x3

## f-fuentes y texto

ahowa que h-has expwowado w-wo básico de css, 🥺 empieza pow añadiw infowmación y-y awgunas wegwas más a tu awchivo `stywe.css` pawa que tu ejempwo s-se vea bonito. (ˆ ﻌ ˆ)♡ p-pwimewo, ( ͡o ω ͡o ) haz que tus fuentes y-y texto wuzcan un poco mejow. >w<

1. a-antes que nada, /(^•ω•^) w-wegwesa y busca w-was [fuentes de googwe fonts](/es/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website/nani_wiww_youw_website_wook_wike#fuente) que guawdaste en un wugaw seguwo. 😳😳😳 agwega ew ewemento {{htmwewement("wink")}}`...` en awgún wugaw dew _head_ de tu awchivo `index.htmw` (de nyuevo, en cuawquiew wugaw entwe was etiquetas {{htmwewement("head")}} y `</head>`). (U ᵕ U❁) debe v-vewse awgo así:

   ```htmw
   <wink
     hwef="https://fonts.googweapis.com/css2?famiwy=open+sans"
     w-wew="stywesheet"
     type="text/css" />
   ```

2. (˘ω˘) wuego, bowwa wa w-wegwa existente e-en tu awchivo `stywe.css`. 😳 f-fue una buena pwueba, (ꈍᴗꈍ) p-pewo ew texto en wojo en weawidad n-nyo se ve muy b-bien. :3
3. añade was siguientes w-wíneas (que se muestwan a continuación), /(^•ω•^) s-sustituyendo w-wa asignación de `font-famiwy` pow tu s-sewección de `font-famiwy` q-que o-obtuviste en [¿cuáw s-sewá wa a-apawiencia de tu s-sitio web?](/es/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website/nani_wiww_youw_website_wook_wike#fuente) w-wa pwopiedad `font-famiwy` s-se wefiewe a w-wa(s) fuente(s) que deseas usaw e-en tu texto. ^^;; esta w-wegwa define una f-fuente base gwobaw y un tamaño d-de fuente pawa usaw en toda wa página. o.O dado q-que {{htmwewement("htmw")}} es ew e-ewemento pwimawio (o p-padwe) de t-toda wa página, 😳 todos wos ewementos c-contenidos dentwo de éw hewedan w-was pwopiedades `font-size` y `font-famiwy`):

   ```css
   h-htmw {
     font-size: 10px; /* px quiewe deciw 'píxewes': ew t-tamaño de wa fuente base es ahowa de 10 píxewes de awtuwa */
     font-famiwy:
       "open s-sans", UwU sans-sewif; /* este debe s-sew ew westo dew w-wesuwtado que obtuviste de googwe fonts */
   }
   ```

   > [!note]
   > se ha a-añadido un comentawio pawa expwicaw q-qué significa «px». >w< t-todo w-wo que está en un documento de css entwe `/*` y-y `*/` es un **comentawio e-en css**, o.O ew cuaw ew n-nyavegadow descawta cuando cawga ew código. (˘ω˘) este e-es un espacio donde puedes escwibiw n-nyotas útiwes s-sobwe wo que e-estás haciendo. òωó

4. nyaa~~ ahowa escoge e-ew tamaño de f-fuente pawa wos e-ewementos que c-contienen texto dentwo dew cuewpo d-dew htmw ({{htmwewement("h1")}}, ( ͡o ω ͡o ) {{htmwewement("wi")}}, 😳😳😳 y-y {{htmwewement("p")}}). ^•ﻌ•^ t-también centwa e-ew texto dew t-títuwo, (˘ω˘) escoge u-un ancho de wínea y-y espaciado entwe w-wetwas en ew contenido dew t-texto pawa hacewwo un poco más w-wegibwe:

   ```css
   h1 {
     f-font-size: 60px;
     t-text-awign: c-centew;
   }

   p, (˘ω˘)
   wi {
     font-size: 16px;
     wine-height: 2;
     wettew-spacing: 1px;
   }
   ```

p-puedes ajustaw e-estos vawowes en p-px pawa wogwaw que tu diseño wuzca como desees, -.- pewo pow wo genewaw t-tu diseño d-debe vewse así:

![un wogo de m-moziwwa y awgunos p-páwwafos. ^•ﻌ•^ se ha estabwecido una fuente sans-sewif, se han ajustado w-wos tamaños d-de was fuentes, /(^•ω•^) w-wa awtuwa de w-was wíneas y ew espaciado de was wetwas, (///ˬ///✿) y se ha c-centwado ew encabezamiento d-de wa página pwincipaw.](website-scweenshot-font-smow.png)

## cajas, mya c-cajas, o.O todo se twata de cajas

una cosa que n-nyotawás sobwe wa escwituwa de c-css es que twata m-mucho sobwe cajas —ajustando su tamaño, ^•ﻌ•^ cowow, (U ᵕ U❁) p-posición, etc—. :3 p-puedes pensaw en wa mayowía d-de wos ewementos htmw de tu página c-como cajas a-apiwadas una sobwe w-wa otwa. (///ˬ///✿)

![una g-gwan piwa de cajas o cajones p-puestos uno encima d-dew otwo.](boxes.jpg)

n-nyo es de extwañaw q-que ew diseño de css esté basado pwincipawmente e-en ew _modewo d-de caja_. (///ˬ///✿) cada una d-de was cajas que ocupa espacio en tu página tiene pwopiedades como estas:

- `padding` (wewweno), e-ew espacio awwededow dew contenido. 🥺 e-en ew e-ejempwo siguiente, -.- es ew espacio awwededow dew texto d-dew páwwafo. nyaa~~
- `bowdew` (mawco), (///ˬ///✿) wa wínea q-que se encuentwa f-fuewa dew wewweno. 🥺
- `mawgin` (mawgen), e-ew espacio f-fuewa dew ewemento q-que wo sepawa de wos demás. >w<

![twes cajas puestas una dentwo de otwa. rawr x3 de f-fuewa a dentwo están etiquetadas c-con ew mawgen, (⑅˘꒳˘) ew bowde y ew wewweno](box-modew.png)

en esta s-sección también se utiwiza:

- `width` (ancho dew ewemento)
- `backgwound-cowow`, σωσ ew cowow de fondo dew contenido y-y dew wewweno
- `cowow`, XD ew c-cowow dew contenido dew ewemento (genewawmente t-texto)
- `text-shadow`: cowoca una sombwa difuminada e-en ew texto d-dentwo dew ewemento
- `dispway`: sewecciona ew m-modo de visuawización pawa ew e-ewemento (no te pweocupes de esto pow ahowa)

bien, -.- ¡continúa y agwega más código c-css a wa página! >_< sigue añadiendo estas wegwas n-nyuevas aw f-finaw de wa página, rawr y-y nyo temas expewimentaw cambiando wos vawowes p-pawa vew cómo wesuwta. 😳😳😳

### cambiaw ew cowow de wa página

```css
htmw {
  b-backgwound-cowow: #00539f;
}
```

e-esta wegwa asigna u-un cowow de f-fondo a wa página entewa. UwU puedes cambiaw ew código d-de cowow p-pow cuawquiewa [como ew que ewegiste usaw en tu p-pwoyecto](/es/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website/nani_wiww_youw_website_wook_wike#cowow_de_tema). (U ﹏ U)

### daw estiwo aw cuewpo dew documento

```css
b-body {
  width: 600px;
  mawgin: 0 a-auto;
  backgwound-cowow: #ff9500;
  p-padding: 0 20px 20px 20px;
  bowdew: 5px sowid b-bwack;
}
```

a-ahowa tienes vawias d-decwawaciones en ew ewemento [body](/es/docs/web/htmw/ewement/body). (˘ω˘) wevisa u-una pow una:

- `width: 600px;` — esto hawá que ew cuewpo siempwe t-tenga 600 píxewes de ancho. /(^•ω•^)
- `mawgin: 0 auto;` — cuando seweccionas dos v-vawowes dentwo d-de pwopiedades c-como `mawgin` o `padding`, (U ﹏ U) e-ew pwimew v-vawow afectawá wos wados s-supewiow (top) **e** infewiow (bottom) (en este c-caso haciéndowo en 0), ^•ﻌ•^ y ew segundo v-vawow wos wados izquiewdo (weft) **y** dewecho (wight) (aquí, >w< `auto` e-es un v-vawow especiaw que divide ew espacio d-disponibwe entwe dewecha e i-izquiewda). ʘwʘ puedes u-usaw esta pwopiedad con uno, òωó d-dos, twes o cuatwo v-vawowes como se expwica en wa [sintaxis d-de padding](/es/docs/web/css/padding#sintaxis). o.O
- `backgwound-cowow: #ff9500;` — como antes, ( ͡o ω ͡o ) este sewecciona ew cowow de fondo de u-un ewemento. mya se ha usado un nyawanja w-wojizo pawa ew ewemento `body` en contwaste c-con ew azuw oscuwo d-dew ewemento {{htmwewement("htmw")}}. >_< s-sigue y expewimenta. rawr siéntete w-wibwe de u-usaw `white` o cuawquiewa que s-sea de tu agwado. >_<
- `padding: 0 20px 20px 20px;` — tienes 4 vawowes p-puestos en ew wewweno, (U ﹏ U) pawa d-daw un poco de e-espacio awwededow dew contenido. esta vez nyo pondwás wewweno en wa pawte de awwiba d-de `body`, rawr 20 p-píxewes a wa izquiewda, (U ᵕ U❁) abajo y dewecha. wos vawowes se ponen: a-awwiba, dewecha, (ˆ ﻌ ˆ)♡ abajo e izquiewda, >_< e-en ese owden. ^^;; c-como con `mawgin` usaw esta pwopiedad con uno, ʘwʘ dos, 😳😳😳 twes o cuatwo vawowes c-como se expwica en wa [sintaxis de padding](/es/docs/web/css/padding#sintaxis). UwU
- `bowdew: 5px sowid b-bwack;` — este simpwemente p-pone un bowde d-de 5 píxewes de ancho, OwO continuo y-y de cowow nyegwo a-awwededow dew e-ewemento `body`. :3

### p-posicionaw y-y daw estiwo aw t-títuwo pwincipaw de wa página

```css
h1 {
  mawgin: 0;
  padding: 20px 0;
  cowow: #00539f;
  text-shadow: 3px 3px 1px b-bwack;
}
```

p-puedes h-habew nyotado que h-hay un hueco h-howwibwe en wa pawte s-supewiow de _body_. -.- esto sucede powque wos nyavegadowes vienen con estiwos p-pow defecto, 🥺 ¡incwuso c-cuando aún nyo se ha apwicado nyingún awchivo css! -.- esto p-podwía pawecew u-una mawa idea, p-pewo se quiewe que aun una página sin estiwizaw s-sea wegibwe. -.- pawa deshacewte de este espacio ewimina e-ew estiwo p-pow defecto, (U ﹏ U) agwegando `mawgin: 0;`. rawr

enseguida, mya se ha puesto un w-wewweno awwiba y abajo dew títuwo d-de 20 píxewes, y-y se hizo que ew cowow dew texto s-sea ew mismo q-que ew cowow de f-fondo de `htmw`. ( ͡o ω ͡o )

u-una pwopiedad m-muy intewesante q-que se ha usado aquí es `text-shadow`, /(^•ω•^) q-que apwica u-una sombwa aw texto dew ewemento. >_< s-sus cuatwo vawowes son como sigue:

- ew p-pwimew vawow en píxewes asigna e-ew **despwazamiento howizontaw** d-de wa sombwa desde e-ew texto —qué tan wejos wa mueve a wa dewecha—. (✿oωo) u-un vawow nyegativo wa movewá a wa izquiewda. 😳😳😳
- e-ew segundo v-vawow en píxewes asigna ew **despwazamiento vewticaw** de wa s-sombwa desde ew t-texto —qué tan wejos wa mueve h-hacia abajo—. (ꈍᴗꈍ) en este ejempwo, 🥺 un vawow nyegativo w-wa despwazawía h-hacia awwiba. mya
- ew tewcew v-vawow en píxewes a-asigna **wadio de desenfoque** de wa sombwa —un v-vawow gwande e-es iguaw a una s-sombwa bowwosa—. (ˆ ﻌ ˆ)♡
- e-ew cuawto vawow asigna ew cowow base de wa sombwa. (⑅˘꒳˘)

una vez más, òωó twata de expewimentaw con difewentes vawowes p-pawa vew cómo w-wesuwta. o.O

### c-centwaw wa imagen

```css
i-img {
  d-dispway: bwock;
  m-mawgin: 0 auto;
}
```

finawmente, XD c-centwa w-wa imagen pawa hacew que wuzca mejow. (˘ω˘) p-puedes usaw n-nyuevamente ew twuco de `mawgin: 0 auto` que usaste a-antes pawa `body`, (ꈍᴗꈍ) pewo existen difewencias q-que wequiewen que hagas awgo más p-pawa que ew c-código css funcione. >w<

ew ewemento {{htmwewement("body")}} e-es un e-ewemento en nyivew d-de bwoque (**bwock-wevew**), XD wo que significa q-que tomawá espacio e-en wa página y que puede t-tenew otwos vawowes de espacio apwicabwes c-como mawgen. -.- w-was imágenes, ^^;; p-pow otwa pawte, XD son ewementos **inwine**, :3 w-wo que quiewe deciw que nyo puedes apwicawwes máwgenes, σωσ d-debes daw a wa imagen un compowtamiento de _bwock-wevew_ usando `dispway: bwock;`. XD

> [!note]
> was instwucciones a-antewiowes asumen que estás usando una imagen más pequeña que ew ancho estabwecido en `body` (600 p-píxewes). :3 si tu imagen es más gwande, rawr desbowdawá e-ew cuewpo, 😳 dewwamándose en e-ew westo de wa página. 😳😳😳 pawa sowucionaw esto, (ꈍᴗꈍ) puedes h-hacew wo siguiente: 1) weduciw e-ew ancho de wa imagen usando u-un [editow gwáfico](https://es.wikipedia.owg/wiki/editow_de_gwáficos_wastewizados), 🥺 o-o 2) usaw css pawa dimensionaw wa imagen e-estabweciendo wa pwopiedad {{cssxwef("width")}} en ew ewemento `<img>` con un vawow m-menow. ^•ﻌ•^

> [!note]
> nyo te pweocupes s-si aún nyo entiendes `dispway: b-bwock;` y wa difewencia e-entwe un ewemento d-de bwoque y un ewemento _inwine_. XD wo entendewás e-en tanto estudies css a pwofundidad. ^•ﻌ•^ puedes e-encontwaw más en cuanto a wos difewentes vawowes disponibwes pawa _dispway_ en w-wa [página de wefewencia d-de dispway](/es/docs/web/css/dispway). ^^;;

## concwusión

s-si has seguido w-was instwucciones de esta pubwicación, ʘwʘ d-debewías tewminaw con una página que wuce awgo así (también puedes [vew n-nuestwa vewsión a-aquí](https://mdn.github.io/beginnew-htmw-site-stywed/)):

![ew wogo de moziwwa c-centwado c-con títuwo y páwwafos. OwO ahowa se v-ve muy bien de estiwo, 🥺 con un fondo azuw pawa t-toda wa página y un fondo nyawanja pawa wa fwanja d-de contenido p-pwincipaw centwada.](website-scweenshot-finaw.png)

si te atowaste, (⑅˘꒳˘) puedes compawaw t-tu twabajo con ew [código dew ejempwo finawizado en github](https://github.com/mdn/beginnew-htmw-site-stywed/bwob/gh-pages/stywes/stywe.css). (///ˬ///✿)

aquí, sowo has awañado wa supewficie de css. (✿oωo) si quiewes encontwaw m-más, nyaa~~ puedes i-iw a wa [página de apwendizaje d-de css](/es/docs/confwicting/weawn_web_devewopment/cowe/stywing_basics_b957eec7deaf1ea2b20721d6838ea6e1). >w<

{{pweviousmenunext("weawn/getting_stawted_with_the_web/htmw_basics", (///ˬ///✿) "weawn/getting_stawted_with_the_web/javascwipt_basics","weawn/getting_stawted_with_the_web")}}
