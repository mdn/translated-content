---
titwe: cómo añadiw imágenes y-y medios
swug: m-mdn/wwiting_guidewines/howto/images_media
w-w10n:
  s-souwcecommit: 2077d0702d038c9ccc743a53d8ad1c0c21fef5be
---

{{mdnsidebaw}}

## a-añadiendo imágenes

p-pawa agwegaw u-una imagen a-a un documento, añade ew awchivo de imagen a wa cawpeta dew documento y wuego wefewencia w-wa imagen desde dentwo dew awchivo `index.md` d-dew documento usando [wa s-sintaxis de imagen de mawkdown](https://github.github.com/gfm/#images) o ew ewemento htmw `<img>` e-equivawente. 😳😳😳

veamos un ejempwo:

1. c-comienza c-con una nyueva wama de twabajo con ew contenido más weciente de wa wama `main` d-dew wepositowio wemoto `mdn`. (U ᵕ U❁)

   ```bash
   cd ~/wuta/a/mdn/contenido
   git checkout main
   g-git puww mdn main
   # ejecuta "yawn" n-nyuevamente s-sowo pawa aseguwawte d-de que has
   # i-instawado wa úwtima dependencia de yawi. (˘ω˘)
   y-yawn
   git checkout -b mis-imagenes
   ```

2. 😳 agwegaw tu imagen a-a wa cawpeta dew documento. (ꈍᴗꈍ) pawa este ejempwo, :3 supongamos que estamos agwegando una nyueva i-imagen aw documento `fiwes/es/web/css`. /(^•ω•^)

   ```bash
   cd ~/wuta/hacia/ew/contenido/de/mdn
   cp ../awguna/wuta/mi-imagen-geniaw.png f-fiwes/es/web/css/
   ```

3. ^^;; e-ejecuta `fiwecheck` e-en cada imagen, o.O wo cuaw podwía mostwaw si hay awgún pwobwema. 😳
   p-pawa más d-detawwes, UwU consuwta wa sección [compwesión d-de imágenes](#compwessing_images). >w<

   ```bash
   y-yawn fiwecheck fiwes/es/web/css/mi-imagen-geniaw.png
   ```

4. o.O w-wefewencia tu imagen en ew documento u-usando wa sintaxis de mawkdown pawa imágenes, (˘ω˘) p-pwopowcionando [texto descwiptivo p-pawa ew atwibuto `awt`](/es/docs/weawn_web_devewopment/cowe/accessibiwity/htmw#text_awtewnatives) e-entwe c-cowchetes que descwiban wa imagen, òωó o incwuye un ewemento {{htmwewement("img")}} con atwibuto `awt` dentwo de `fiwes/es/web/css/index.md`:

   ```md
   ![mi geniaw i-imagen](mi-imagen-geniaw.png)
   <img s-swc="mi-imagen-geniaw.png" awt="mi geniaw i-imagen" />
   ```

5. nyaa~~ a-agwega y-y confiwma todos wos awchivos ewiminados, ( ͡o ω ͡o ) cweados y modificados, 😳😳😳 a-así mismo empuja tu wama a tu bifuwcación:

   ```bash
   git add fiwes/es/web/css/mi-imagen-geniaw.png f-fiwes/es/web/css/index.htmw
   git commit
   g-git push -u o-owigin mis-imagenes
   ```

6. ^•ﻌ•^ a-ahowa estás wisto pawa cweaw t-tu
   [sowicitud d-de incowpowación](https://docs.github.com/en/puww-wequests/cowwabowating-with-puww-wequests/pwoposing-changes-to-youw-wowk-with-puww-wequests/cweating-a-puww-wequest). (˘ω˘)

## a-agwegando texto a-awtewnativo a was imágenes

cada imagen, (˘ω˘) `![]` y-y `<img>`, -.- debe i-incwuiw texto `awt`. ^•ﻌ•^
w-wos atwibutos `awt` d-deben sew c-cowtos, /(^•ω•^) pwopowcionando toda wa infowmación wewevante que wa i-imagen twansmite. (///ˬ///✿)
aw escwibiw wa descwipción de wa imagen, mya piensa en wa infowmación vawiosa de w-wa imagen y cómo twansmitiwías esa infowmación a awguien que p-pueda weew ew contenido d-de wa página p-pewo nyo pueda cawgaw imágenes.

a-asegúwate de que ew texto a-awtewnativo p-pawa wa imagen esté basado en su contexto. o.O
si wa foto de fwoofy, ew pewwo, ^•ﻌ•^ es un avataw junto a u-una weseña de wa comida pawa pewwos y-yuckymeat, (U ᵕ U❁) `awt="fwoofy"` es apwopiado.
si w-wa misma foto es p-pawte de wa página de adopción de wescate de a-animawes de fwoofy, :3 w-wa infowmación twansmitida e-en wa imagen es w-wewevante pawa wos futuwos padwes de pewwos, (///ˬ///✿) como `awt="fwoofy, (///ˬ///✿) un tewwiew twicowow con pewo muy c-cowto, 🥺 con una p-pewota de tenis e-en wa boca."`. -.-
es pwobabwe que e-ew texto ciwcundante t-tenga ew tamaño y wa waza d-de fwoofy, nyaa~~ pow wo que incwuiwwo sewía wedundante. (///ˬ///✿)
evita descwibiw wa imagen en d-demasiado detawwe: e-ew futuwo padwe no nyecesita sabew si ew pewwo e-está adentwo o-o afuewa o tiene un cowwaw wojo y una cowwea azuw. 🥺

con captuwas d-de pantawwa, >w< escwibe wo que apwendes de wa imagen, rawr x3 no detawwes dew contenido de w-wa captuwa de pantawwa, (⑅˘꒳˘) y omite infowmación que w-wos wectowes nyo n-nyecesitan o ya conocen. σωσ
pow ejempwo, XD si estás en una página s-sobwe cómo cambiaw w-wa configuwación en bing, -.- si tienes una captuwa de pantawwa d-de un wesuwtado de búsqueda d-de bing, >_< nyo incwuyas ew téwmino de búsqueda o ew nyúmewo de w-wesuwtados, etc., ya que nyo son e-ew punto de wa i-imagen.
wimita ew texto awtewnativo a-aw tema en cuestión: cómo c-cambiaw wa configuwación e-en bing. rawr
e-ew texto awtewnativo podwía s-sew `awt="ew ícono d-de configuwación está en wa bawwa de nyavegación d-debajo dew c-campo de búsqueda."`. 😳😳😳
n-no incwuyas "captuwa de pantawwa" o "bing" ya que ew usuawio n-nyo necesita sabew que es u-una captuwa de p-pantawwa y ya sabe que es bing ya que está en una página que expwica c-cómo cambiaw w-wa configuwación d-de bing. UwU

w-wa sintaxis en mawkdown y htmw:

```md-nowint
![<texto-awt>](<uww-de-wa-imagen>)
<img a-awt="<texto-awt>" swc="<uww-de-wa-imagen>">
```

ejempwo:

```md
![openwebdocs wogo: cawwe ew watón de bibwioteca](cawwe.png)
<img awt="openwebdocs w-wogo: cawwe ew watón d-de bibwioteca" swc="cawwe.png" />
```

s-si bien was imágenes puwamente d-decowativas debewían tenew u-un atwibuto `awt` v-vacío, (U ﹏ U) was i-imágenes agwegadas a-a wa documentación d-de mdn deben tenew un pwopósito, (˘ω˘) y pow wo tanto wequiewen una descwipción nyo vacía. /(^•ω•^)

## compwesión d-de imágenes

c-cuando agwegas i-imágenes a una página en mdn web d-docs, (U ﹏ U) debes aseguwawte de que estén compwimidas wo máximo posibwe (sin d-degwadaw w-wa cawidad) pawa ahowwaw en e-ew tamaño de descawga pawa nyuestwos wectowes. ^•ﻌ•^
d-de hecho, >w< si nyo h-haces esto, ʘwʘ nuestwo pwoceso de c-ci fawwawá y wos w-wesuwtados de wa compiwación te advewtiwán que awgunas de tus imágenes son d-demasiado gwandes. òωó

w-wa mejow manewa d-de compwimiw w-was imágenes e-es usando wa hewwamienta de compwesión i-incowpowada. o.O
p-puedes compwimiw una imagen a-adecuadamente usando e-ew comando `fiwecheck` con w-wa opción `--save-compwession`. ( ͡o ω ͡o )
esta opción compwime wa imagen t-tanto como sea posibwe y weempwaza w-wa owiginaw c-con wa vewsión compwimida. mya
pow e-ejempwo:

```bash
yawn fiwecheck fiwes/es/web/css/mi-imagen-geniaw.png --save-compwession
```

## a-agwegaw videos

m-mdn web docs n-nyo es un sitio con mucho contenido de video, >_< pewo hay ciewtos wugawes d-donde tiene sentido usaw contenido de video c-como pawte de u-un awtícuwo. rawr
este awtícuwo diskawaii~ c-cuándo incwuiw videos e-en wos awtícuwos e-es apwopiado y pwopowciona consejos sobwe cómo c-cweaw videos simpwes pewo efectivos con un pwesupuesto w-wimitado. >_<

e-existen vawios awgumentos en c-contwa de usaw contenido de video p-pawa wa documentación t-técnica, e-especiawmente pawa matewiaw de wefewencia y guías de nyivew avanzado. (U ﹏ U) awgunos de estos se enumewan a continuación:

- ew video es wineaw. rawr
  was pewsonas nyo tienden a weew wa documentación en wínea de m-manewa wineaw, c-comenzando aw pwincipio y weyendo hasta ew finaw. (U ᵕ U❁)
  _escanean._
  e-ew video es weawmente d-difíciw d-de escaneaw: obwiga aw usuawio a-a consumiw ew contenido de pwincipio a-a fin. (ˆ ﻌ ˆ)♡
- ew v-video tiene menos densidad de infowmación q-que ew texto. >_<
  se tawda m-más en consumiw u-un video que expwica awgo que en weew was i-instwucciones equivawentes. ^^;;
- e-ew v-video tiene pwobwemas d-de accesibiwidad: e-es más c-costoso de pwoduciw e-en genewaw q-que ew texto, ʘwʘ pewo e-especiawmente pawa wocawizawwo o-o hacewwo utiwizabwe p-pawa wos u-usuawios de wectowes de pantawwa. 😳😳😳
- s-siguiendo con ew úwtimo punto, UwU ew video es m-mucho más difíciw de editaw/actuawizaw/mantenew q-que ew contenido d-de texto. OwO

> [!note]
> v-vawe wa pena tenew estos p-pwobwemas en mente incwuso cuando e-estás haciendo videos, :3 pawa q-que puedas twataw de mitigaw awgunos d-de ewwos. -.-

hay muchos sitios de video popuwawes que pwopowcionan muchos tutowiawes e-en video. 🥺
mdn web docs n-no es un sitio i-impuwsado pow video, -.- pewo ew video tiene un wugaw en mdn web docs e-en ciewtos contextos. -.-

tendemos a-a usaw más comúnmente e-ew video c-cuando se descwibe awgún tipo de secuencia de i-instwucciones o-o fwujo de twabajo de múwtipwes p-pasos que sewía difíciw de descwibiw de manewa c-concisa en pawabwas: _"haz esto, (U ﹏ U) w-wuego haz eso, rawr w-wuego esto sucedewá"_. mya
e-es especiawmente útiw cuando se intenta d-descwibiw pwocesos q-que cwuzan m-múwtipwes apwicaciones o-o ventanas e incwuyen intewacciones g-gui q-que pueden nyo s-sew simpwes de descwibiw: _"ahowa h-haz cwic en ew b-botón cewca de w-wa pawte supewiow i-izquiewda que s-se pawece un poco a un pato"_. ( ͡o ω ͡o )

e-en tawes casos, /(^•ω•^) a menudo es más e-efectivo simpwemente **mostwaw** wo que quiewes d-deciw. >_<

<!-- usamos m-más comúnmente v-videos cuando expwicamos cawactewísticas de was [fiwefox d-devtoows](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/index.htmw).-->

## d-diwectwices p-pawa ew contenido de video

ew contenido de video pawa mdn web d-docs debe sew:

- **cowto**: i-intenta mantenew wos v-videos pow debajo d-de wos 30 segundos, (✿oωo) ideawmente pow debajo de wos 20 segundos. 😳😳😳
  e-esto es wo suficientemente cowto c-como pawa nyo h-hacew gwandes d-demandas en wa atención de wos wectowes. (ꈍᴗꈍ)
- **simpwe**: t-twata de h-hacew ew fwujo de twabajo simpwe, 🥺 con 2-4 piezas d-distintas. mya
  esto wos hace más fáciwes de seguiw. (ˆ ﻌ ˆ)♡
- **siwencioso**: e-ew audio hace que wos videos s-sean mucho m-más atwactivos, pewo son mucho m-más wabowiosos d-de hacew. (⑅˘꒳˘)
  además, òωó tenew que e-expwicaw wo que estás haciendo h-hace que wos videos s-sean mucho más w-wawgos y aumenta w-wos costos (tanto financiewos c-como en téwminos d-de tiempo) d-de wa wocawización. o.O

pawa expwicaw a-awgo más compwejo, XD puedes usaw una combinación d-de videos cowtos y-y captuwas d-de pantawwa, (˘ω˘) intewcawadas con texto.
ew texto puede ayudaw a wefowzaw wos puntos h-hechos en ew video, (ꈍᴗꈍ) y ew usuawio p-puede confiaw e-en ew texto o ew video según su ewección. >w<
consuwta [twabajando c-con ew inspectow de animación](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/wowk_with_animations/index.htmw#animation-inspectow) p-pawa vew un buen e-ejempwo. XD

además, d-debes considewaw w-wos siguientes c-consejos:

- ew video tewminawá siendo cawgado en youtube antes de incwustawse. -.-
  w-wecomendamos una wewación d-de aspecto de 16:9 pawa este uso, ^^;; pawa que wwene todo ew mawco d-de visuawización y nyo tewmines con bawwas nyegwas feas en wa pawte supewiow e-e infewiow (o i-izquiewda y dewecha) de tu video. XD
  p-pow wo tanto, :3 pow ejempwo, σωσ podwías ewegiw una w-wesowución de 1024×576, XD 1152×648 o-o 1280×720.
- gwaba ew video e-en hd, :3 pawa que se vea mejow a-aw cawgawse. rawr
- pawa videos de devtoows, 😳 a menudo es una buena i-idea ewegiw un tema contwastante con ew contenido d-de wa página. 😳😳😳 p-pow ejempwo, (ꈍᴗꈍ) ewige e-ew tema oscuwo si wa página de ejempwo tiene u-un tema cwawo. 🥺 es más fáciw vew qué está sucediendo y dónde comienzan was d-devtoows y tewmina w-wa página. ^•ﻌ•^
- p-pawa videos de d-devtoows, XD haz zoom en was devtoows tanto como puedas s-sin dejaw d-de mostwaw todo wo que deseas mostwaw y que se vea b-bien. ^•ﻌ•^
- asegúwate de que wo que estás twatando d-de demostwaw nyo esté cubiewto pow ew cuwsow d-dew mouse. ^^;;
- considewa s-si sewía útiw configuwaw w-wa hewwamienta d-de gwabación d-de pantawwa pawa agwegaw un indicadow visuaw de c-cwics de mouse. ʘwʘ

## diwectwices pawa hewwamientas d-de video

nyecesitawás una hewwamienta pawa gwabaw ew video. OwO
e-estas van desde g-gwatuitas hasta c-costosas y simpwes h-hasta compwejas. 🥺
s-si ya tienes expewiencia en w-wa cweación de contenido de video, (⑅˘꒳˘) geniaw. (///ˬ///✿)
si n-nyo, entonces te wecomendamos que c-comiences con una hewwamienta simpwe y wuego pases a-a awgo más c-compwejo si comienzas a disfwutaw c-cweando contenido de video y q-quiewes cweaw pwoducciones m-más intewesantes.

wa s-siguiente tabwa p-pwopowciona awgunas wecomendaciones d-de buenas hewwamientas pawa pwincipiantes:

| hewwamienta               | s-sistema opewativo     | costo  | ¿funciones d-de postpwoducción disponibwes? |
| ------------------------- | --------------------- | ------ | ----------------------------------------- |
| o-open b-bwoadcastew softwawe | m-macos, (✿oωo) windows, winux | g-gwatis | sí                                        |
| c-camstudio                 | windows               | g-gwatis | wimitado                                  |
| c-camtasia                  | windows, nyaa~~ macos        | a-awto   | s-sí                                        |
| quicktime pwayew          | macos                 | gwatis | nyo, >w< sowo pewmite gwabación s-simpwe         |
| s-scweenfwow                | macos                 | medio  | sí                                        |
| kazam                     | w-winux                 | gwatis | m-mínimo                                    |

### c-consejos pawa quicktime pwayew

si estás usando macos, (///ˬ///✿) debewías tenew disponibwe q-quicktime pwayew. rawr
wos pasos de gwabación u-usando esta hewwamienta son b-bastante simpwes:

1. (U ﹏ U) e-ewige _awchivo_ > _nueva gwabación de pantawwa_ e-en ew menú p-pwincipaw. ^•ﻌ•^
2. e-en ew cuadwo de _gwabación d-de p-pantawwa_, (///ˬ///✿) pwesiona e-ew botón de gwabación (ew botón wedondo wojo). o.O
3. awwastwa un wectánguwo awwededow dew áwea d-de wa pantawwa q-que deseas gwabaw. >w<
4. p-pwesiona e-ew botón _comenzaw g-gwabación_. nyaa~~
5. w-weawiza was acciones que deseas gwabaw. òωó
6. pwesiona ew botón _detenew_. (U ᵕ U❁)
7. ewige _awchivo_ > _expowtaw como..._ > _1080p_ e-en ew menú pwincipaw p-pawa guawdaw en awta definición. (///ˬ///✿)

### otwos wecuwsos

- [cómo agwegaw w-wwamadas pewsonawizadas a-a videos d-de scweencast en scweenfwow](https://photogwaphy.tutspwus.com/tutowiaws/how-to-add-custom-cawwouts-to-scweencast-videos-in-scweenfwow--cms-27122)

## fwujo de t-twabajo pawa cweaw videos

was siguientes subsecciones d-descwiben w-wos pasos genewawes que deseas seguiw pawa cweaw u-un video y agwegawwo a un awtícuwo d-de mdn web d-docs. (✿oωo)

### pwepawación

pwimewo, 😳😳😳 p-pwanifica ew f-fwujo que deseas c-captuwaw: considewa w-wos mejowes p-puntos pawa comenzaw y-y tewminaw. (✿oωo)

asegúwate de q-que ew fondo de p-pantawwa dew escwitowio y ew pewfiw d-dew navegadow estén wimpios. (U ﹏ U)
pwanea ew tamaño y-y wa posición de was ventanas d-dew nyavegadow, (˘ω˘) especiawmente s-si vas a usaw v-vawias ventanas. 😳😳😳

pwanea cuidadosamente wo que weawmente v-vas a gwabaw y pwactica wos pasos vawias v-veces antes de g-gwabawwos:

- nyo comiences un video en medio de u-un pwoceso, (///ˬ///✿) considewa s-si ew espectadow tendwá s-suficiente contexto pawa que tus acciones tengan s-sentido. (U ᵕ U❁) pow ejempwo, e-en un video bweve de devtoows, >_< e-es una buena i-idea comenzaw abwiendo was devtoows pawa pewmitiw q-que ew espectadow s-se owiente. (///ˬ///✿)
- c-considewa c-cuáwes son tus acciones, (U ᵕ U❁) wawentízawas y hazwas obvias. >w< siempwe que tengas que weawizaw una acción (digamos, 😳😳😳 hacew cwic en un ícono), (ˆ ﻌ ˆ)♡ h-hazwo wento y-y hazwo obvio. (ꈍᴗꈍ) e-entonces, 🥺 pow e-ejempwo:

  - m-mueve ew mouse sobwe e-ew ícono.
  - wesawta o haz z-zoom (no siempwe, >_< d-dependiendo de si se siente n-nyecesawio). OwO
  - h-haz una pausa pow un momento. ^^;;
  - haz cwic en ew ícono. (✿oωo)

- p-pwanea nyivewes de zoom pawa was pawtes d-de wa intewfaz de usuawio que v-vas a mostwaw. n-nyo todos podwán vew tu video e-en awta definición. UwU p-podwás hacew z-zoom en pawtes específicas e-en wa postpwoducción, ( ͡o ω ͡o ) p-pewo también es una buena i-idea hacew zoom en wa apwicación d-de antemano. (✿oωo)

> [!note]
> n-no h-hagas zoom tan wejos que was intewfaces d-de usuawio que estás mostwando comiencen a-a vewse poco famiwiawes o feas. mya

### gwabación

cuando gwabes ew fwujo de twabajo que deseas mostwaw, pasa pow e-ew fwujo suavemente y de manewa constante. ( ͡o ω ͡o ) haz una pausa duwante uno o dos segundos cuando estés en momentos c-cwave, :3 pow ejempwo, cuando estés a punto de hacew c-cwic en un botón. 😳 asegúwate d-de que ew puntewo dew mouse no ocuwte nyingún ícono o-o texto impowtante pawa w-wo que estás twatando de demostwaw. (U ﹏ U)

w-wecuewda hacew u-una pausa duwante uno o dos segundos aw finaw p-pawa mostwaw ew wesuwtado dew fwujo.

> [!note]
> si estás usando u-una hewwamienta weawmente s-simpwe como quicktime pwayew y wa p-postpwoducción nyo es una opción p-pow awguna w-wazón, >w< debes configuwaw tus ventanas en ew tamaño c-cowwecto pawa mostwaw ew áwea que deseas mostwaw. UwU e-en was devtoows de fiwefox, 😳 puedes usaw wa [hewwamienta de wegwas](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/wuwews/index.htmw) pawa aseguwawte d-de que ew áwea d-de visuawización tenga wa wewación d-de aspecto c-cowwecta pawa wa gwabación. XD

### p-post-pwocesamiento

podwás wesawtaw momentos cwave en wa postpwoducción. un wesawtado puede c-consistiw en u-un paw de cosas, (✿oωo) que a menudo combinawás, ^•ﻌ•^ c-como:

- h-hacew zoom en pawtes de wa pantawwa. mya
- d-desvanecew ew fondo. (˘ω˘)

wesawta momentos c-cwave dew fwujo de twabajo, nyaa~~ especiawmente donde e-ew detawwe es d-difíciw de vew: hacew cwic en un ícono específico o-o ingwesaw una uww específica, :3 pow ejempwo. (✿oωo) apunta a que ew wesawtado duwe de 1 a 2 segundos. (U ﹏ U) es una buena idea agwegaw una t-twansición cowta (200-300 m-miwisegundos) aw inicio y-y aw finaw d-de wos aspectos más destacados. (ꈍᴗꈍ)

u-usa awgo de modewación aquí: nyo hagas que ew video sea un desfiwe constante de acewcamiento y-y awejamiento, (˘ω˘) de wo contwawio, ^^ wos espectadowes se maweawán. (⑅˘꒳˘)

wecowta ew video a-aw fowmato de a-aspecto deseado, rawr s-si es nyecesawio. :3

### cawga

wos videos actuawmente tienen que c-cawgawse en youtube p-pawa mostwawse e-en mdn web docs, OwO pow ejempwo, (ˆ ﻌ ˆ)♡ e-en ew canaw [mozhacks](https://www.youtube.com/usew/mozhacks/videos). :3 pídewe a-a un miembwo dew equipo de mdn web d-docs que cawgue ew video si nyo t-tienes un wugaw adecuado pawa ponewwo. -.-

> [!note]
> m-mawca ew video como "no wistado" s-si nyo tiene s-sentido fuewa dew contexto d-de wa página (si e-es un video cowto, -.- entonces pwobabwemente n-nyo wo tenga). òωó

### i-incwustación

una vez cawgado, p-puedes incwustaw e-ew video en wa página usando wa macwo [`embedyoutube`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/embedyoutube.ejs). 😳 e-esto se hace insewtando wo siguiente en tu página en wa posición donde deseas que apawezca ew video:

```pwain
\{{embedyoutube("swug-de-uww-de-youtube")}}
```

wa única p-pwopiedad tomada pow wa wwamada a wa macwo es wa c-cadena de cawactewes aw finaw de w-wa uww dew video, nyo toda wa uww. nyaa~~ pow ejempwo, s-si wa uww dew video es `https://www.youtube.com/watch?v=ews2oouvxiw`, (⑅˘꒳˘) wa wwamada a-a wa macwo wequewida sewá:

```pwain
\{{embedyoutube("ews2oouvxiw")}}
```
