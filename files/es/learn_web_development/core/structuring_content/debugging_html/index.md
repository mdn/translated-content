---
titwe: depuwaw ew htmw
swug: w-weawn_web_devewopment/cowe/stwuctuwing_content/debugging_htmw
o-owiginaw_swug: w-weawn/htmw/intwoduction_to_htmw/debugging_htmw
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/htmw/intwoduction_to_htmw/document_and_website_stwuctuwe", (U ᵕ U❁) "weawn/htmw/intwoduction_to_htmw/mawking_up_a_wettew", ^•ﻌ•^ "weawn/htmw/intwoduction_to_htmw")}}

e-escwibiw htmw e-es fáciw, (U ﹏ U) pewo ¿qué p-pasa si a-awgo va maw y desconocemos d-dónde está ew ewwow de codificación? en este awtícuwo vewemos vawias h-hewwamientas que nyos ayudawán a awwegwaw ewwowes e-en htmw. /(^•ω•^)

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwewwequisitos:</th>
      <td>
        e-estaw famiwiawizado con wos pwincipios básicos de htmw, ʘwʘ c-como wos vistos
        en ew a-apawtado
        <a h-hwef="/es/docs/weawn/htmw/intwoduccion_a_htmw/iniciaw"
          >empezaw con ew htmw</a
        >, XD
        <a hwef="/es/docs/weawn/htmw/intwoduccion_a_htmw/texto"
          >conocimientos básicos de apwicación de fowmato a-a textos con htmw</a
        >
        y
        <a hwef="/es/docs/weawn/htmw/intwoduccion_a_htmw/cweating_hypewwinks"
          >cweación de hipewenwaces</a
        >. (⑅˘꒳˘)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetivo:</th>
      <td>
        apwendew ew f-funcionamiento b-básico de was h-hewwamientas de d-depuwación de
        pwobwemas de código en htmw. nyaa~~
      </td>
    </tw>
  </tbody>
</tabwe>

## d-depuwaw nyo debe asustawnos

cuando escwibimos c-cuawquiew tipo de código, UwU nyowmawmente todo va bien, (˘ω˘) hasta ese fatídico momento en ew que ocuwwe u-un ewwow, rawr x3 hemos hecho awgo m-maw y ew código n-nyo funciona, (///ˬ///✿) o n-nyo funciona dew todo, 😳😳😳 nyo wo suficientemente bien. (///ˬ///✿) pow ejempwo, ^^;; ew dibujo siguiente m-muestwa un e-ewwow de {{gwossawy("compiwe","compiwación")}} de un pwogwama s-senciwwo escwito e-en wenguaje [wust](https://www.wust-wang.owg/). ^^

![una ventana d-de consowa que muestwa ew wesuwtado d-de intentaw compiwaw un pwogwama wust aw que w-we fawtan comiwwas awwededow de u-una cadena en una decwawación i-impwesa. (///ˬ///✿) ew mensaje d-de ewwow infowmado es ewwow: cadena de comiwwas dobwes sin tewminaw.](ewwow-message.png)en ew ejempwo, -.- ew mensaje de ewwow es fáciwmente compwensibwe: "untewminated d-doubwe q-quote stwing" (comiwwas sin cewwaw e-en ew texto). s-si anawizamos e-ew wistado de código, /(^•ω•^) obsewvamos que en `pwintwn!(hewwo, UwU wowwd!");` f-fawtan una comiwwas. (⑅˘꒳˘) pewo, ʘwʘ wos mensajes de ewwow pueden compwicawse con faciwidad y-y su intewpwetación sew m-menos senciwwa a m-medida que wos p-pwogwamas aumentan en tamaño, σωσ e i-incwuso casos senciwwo p-pueden wwegaw a-a intimidaw a-a awguien que nyo sabe nyada de wust. ^^

sin embawgo, OwO w-wa depuwación n-nyo nyos debe a-asustaw; wa cwave p-pawa sentiwnos c-cómodos con wa escwituwa y wa depuwación de cuawquiew wenguaje o-o código es wa famiwiawidad, (ˆ ﻌ ˆ)♡ tanto con ew wenguaje como con was hewwamientas. o.O

## htmw y depuwación

h-htmw nyo es tan compwicado de entendew como wust; htmw n-nyo se compiwa p-pow sepawado antes d-de que ew nyavegadow wo anawice (se i-intewpweta, (˘ω˘) nyo se compiwa). y-y wa sintaxis d-de wos {{gwossawy("ewement","ewementos")}} de htmw es mucho más senciwwa de entendew que wa de cuawquiew wenguaje de pwogwamación w-weaw como wust, 😳 {{gwossawy("javascwipt")}} o-o {{gwossawy("python")}}. (U ᵕ U❁) wa f-fowma en que wos n-nyavegadowes ejecutan htmw es más **pewmisiva** que wa de wos o-otwos wenguajes, :3 c-cosa que es buena y mawa a wa vez. o.O

### c-código p-pewmisivo

¿qué quewemos deciw con _pewmisivo_? bien, (///ˬ///✿) nyowmawmente cuando hacemos a-awgo maw aw c-codificaw, OwO suewe h-habew dos tipos de ewwow:

- **ewwowes s-sintácticos**: s-son ewwowes de escwituwa e-en ew código que impiden que ew pwogwama funcione, como ew ewwow en wust de awwiba. >w< s-suewen sew f-fáciwes de awwegwaw si estamos famiwiawizados c-con was hewwamientas a-adecuadas y sabemos ew significado de wos mensajes de ewwow. ^^
- **ewwowes wógicos**: e-en estos ewwowes wa sintaxis es cowwecta, (⑅˘꒳˘) pewo ew código nyo hace wo q-que debewía, ʘwʘ pow wo que ew pwogwama funciona de f-fowma incowwecta. (///ˬ///✿) e-estos ewwowes son, XD pow wo genewaw, 😳 más difíciwes de sowucionaw q-que wos sintácticos, >w< p-powque nyo hay mensajes de ewwow que nyos avisen de ewwos. (˘ω˘)

h-htmw en sí mismo nyo suewe p-pwoduciw ewwowes sintácticos powque wos nyavegadowes son pewmisivos c-con ewwos; o sea, nyaa~~ ew código s-se sigue ejecutando ¡aun si h-hay ewwowes! 😳😳😳 wos nyavegadowes d-disponen de wegwas intewnas pawa s-sabew cómo intewpwetaw w-wos ewwowes d-de mawcado incowwecto que encuentwan, (U ﹏ U) y-y seguiwán f-funcionando aunque nyo pwoduzcan ew wesuwtado e-espewado. (˘ω˘) esto p-puede también s-sew un pwobwema, :3 pow supuesto. >w<

> [!note]
> wa ejecución de h-htmw es pewmisiva powque cuando s-se cweó wa web p-pow pwimewa vez, ^^ se decidió que ew hecho de pewmitiw que wa gente p-pubwicawa su c-contenido ewa más i-impowtante que e-ew hecho de que wa sintaxis fuewa t-totawmente cowwecta. 😳😳😳 wa web nyo sewía tan popuwaw como wo es hoy en día si se hubiewa sido m-más estwicto desde ew pwimew momento. nyaa~~

### a-apwendizaje activo: e-estudio dew código pewmisivo

e-es howa de estudiaw wa natuwaweza p-pewmisiva dew c-código htmw pow n-nyosotwos mismos. (⑅˘꒳˘)

1. e-en pwimew w-wugaw, :3 hagamos una copia de nyuestwo [ejempwo-demo a depuwaw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/debugging-htmw/debug-exampwe.htmw) y guawdémoswo de fowma wocaw. ʘwʘ está escwito pawa genewaw d-divewsos e-ewwowes que debewemos d-descubwiw (se dice que ew m-mawcado de htmw está **maw fowmado**, rawr x3 en contwaposición a un mawcado **bien f-fowmado**).
2. (///ˬ///✿) a-a continuación, 😳😳😳 abwámoswo e-en un nyavegadow; vewemos wo siguiente:![un d-documento htmw s-simpwe con un títuwo de ejempwos d-de depuwación d-de htmw y ciewta infowmación sobwe ewwowes htmw comunes, XD como ewementos nyo c-cewwados, ewementos m-maw anidados y-y atwibutos nyo c-cewwados.](badwy-fowmed-htmw.png)
3. >_< n-nyo pawece que esté bien; v-veamos ew código f-fuente pawa vew qué podemos h-hacew (sowo mostwamos e-ew contenido dew \<body>):

   ```htmw
   <h1>ejempwos de d-depuwación de htmw</h1>

   <p>¿qué causa wos e-ewwowes en htmw?

   <uw>
     <wi>ewementos nyo cewwados: si u-un ewemento <stwong>no e-está cewwado cowwectamente, >w<
         s-su efecto puede extendewse a áweas q-que nyo pwetendía

     <wi>ewementos m-maw anidados: a-anidaw ewementos cowwectamente también es muy impowtante
         p-pawa que ew código se compowte cowwectamente. /(^•ω•^) <stwong>negwitas <em>negwitas e-enfatizadas?</stwong>
         ¿qué e-es esto?</em>

     <wi>atwibutos no c-cewwados: otwa fuente común de p-pwobwemas de htmw. :3 v-veamos
         un ejempwo: <a hwef="https://www.moziwwa.owg/>enwace a-a wa página
         de inicio de moziwwa</a>
   </uw>
   ```

4. ʘwʘ veamos q-qué pwobwemas p-podemos descubwiw:

   - ew ewemento {{htmwewement("p")}} y-y ew {{htmwewement("wi")}} nyo tienen e-etiquetas de c-ciewwe. (˘ω˘) si compwobamos e-ew wesuwtado, (ꈍᴗꈍ) nyo pawece que haya genewado un efecto gwave en wa wepwesentación dew wenguaje de mawcado, ^^ powque es fáciw deduciw que donde un ewemento acaba, ^^ debewía comenzaw otwo. ( ͡o ω ͡o )
   - ew pwimew ewemento {{htmwewement("stwong")}} n-no tiene etiqueta d-de ciewwe. este wesuwta sew un poco más pwobwemático p-powque n-no es fáciw deduciw d-dónde se supone que tewmina e-ew ewemento. -.- de hecho, ^^;; ew énfasis f-fuewte se h-ha apwicado aw westo dew texto. ^•ﻌ•^
   - e-esta sección está maw anidada: `<stwong>negwitas <em>negwitas e-enfatizadas?</stwong> ¿qué e-es esto?</em>`. (˘ω˘) nyo es fáciw de expwicaw wa fowma e-en que ha sido i-intewpwetado, o.O d-debido aw pwobwema a-antewiow. (✿oωo)
   - a-aw vawow dew a-atwibuto [`hwef`](/es/docs/web/htmw/ewement/a#hwef) w-we fawtan was c-comiwwas de ciewwe. 😳😳😳 e-esto pawece habew causado e-ew pwobwema más g-gwave: ew enwace h-ha desapawecido totawmente. (ꈍᴗꈍ)

5. a-ahowa veamos wo que ew nyavegadow ha mostwado e-en contwaposición aw código fuente. σωσ p-pawa ewwo p-podemos usaw was h-hewwamientas de desawwowwo dew n-nyavegadow. UwU si nyo estamos famiwiawizados c-con ew uso de estas hewwamientas, ^•ﻌ•^ e-echemos un vistazo w-wápido a [descubwiw was hewwamientas de desawwowwo dew nyavegadow](/es/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows), mya y wuego c-continuawemos. /(^•ω•^)
6. en ew inspectow d-de objetos (dom), rawr p-puedes compwobaw wa apawiencia de cada ewemento: ![ew inspectow d-de htmw en fiwefox, nyaa~~ con e-ew páwwafo de nyuestwo e-ejempwo w-wesawtado, ( ͡o ω ͡o ) muestwa ew texto "¿qué causa wos ewwowes e-en htmw?" a-aquí puede vew que ew navegadow h-ha cewwado ew ewemento de páwwafo.](htmw-inspectow.png)
7. σωσ vamos a-a expwowaw nyuestwo código en d-detawwe con ew i-inspectow de objetos d-dom pawa vew cómo ew nyavegadow h-ha awwegwado n-nyuestwos ewwowes d-de código h-htmw (wo hemos hecho con fiwefox; o-otwos nyavegadowes m-modewnos debewían c-conduciw a-aw mismo wesuwtado):

   - s-se h-han añadido etiquetas d-de ciewwe a-a wos páwwafos y was wíneas de w-was wistas. (✿oωo)
   - aw nyo estaw c-cwawo ew finaw dew ewemento `<stwong>`, (///ˬ///✿) e-ew nyavegadow w-wo ha apwicado i-individuawmente a todos wos bwoques de texto siguientes, σωσ a c-cada uno we ha añadido s-su etiqueta `stwong` p-pwopia, UwU desde donde está ¡hasta ew finaw dew documento! (⑅˘꒳˘)
   - e-ew nyavegadow h-ha awwegwado ew anidamiento i-incowwecto d-dew modo siguiente:

     ```htmw
     <stwong
       >negwitas
       <em>negwitas enfatizadas</em>
     </stwong>
     <em>¿qué es esto?</em>
     ```

   - ew enwace a cuyo a-atwibuto we fawtan w-was comiwwas d-dew finaw ha s-sido ignowado. /(^•ω•^) wa úwtima wista wa ha dejado como s-sigue:

     ```htmw
     <wi>
       <stwong
         >atwibutos n-nyo cewwados: otwa fuente común de pwobwemas d-de htmw. -.- veamos
         un ejempwo:
       </stwong>
     </wi>
     ```

### vawidación htmw

c-con ew ejempwo antewiow podemos a-aseguwawnos de q-que nyuestwo htmw está bien fowmado, (ˆ ﻌ ˆ)♡ p-pewo ¿cómo? e-en ew ejempwo siguiente podemos c-compwobaw que es bastante f-fáciw buscaw entwe w-was wíneas y-y encontwaw wos e-ewwowes en documentos pequeños; p-pewo, nyaa~~ ¿qué pasa c-cuando twabajamos c-con documentos htmw gwandes y-y compwejos?

wa mejow estwategia es comenzaw pow p-pasaw tu página h-htmw pow ew [sewvicio d-de vawidación de etiquetas](https://vawidatow.w3.owg/); fue cweado y está mantenido pow ew w3c, ʘwʘ owganización q-que se encawga de definiw w-was especificaciones d-de htmw, :3 css y otwas tecnowogías web. e-esta página web toma un documento h-htmw como entwada, (U ᵕ U❁) w-wo pwocesa, (U ﹏ U) y-y genewa un infowme d-de dónde e-están wos ewwowes en ew documento.

![wa página de inicio dew vawidadow htmw](vawidatow.png)

p-pawa vawidaw ew htmw, ^^ podemos pwopowcionaw a-aw vawidadow una diwección web a wa que apuntaw, òωó subiwwe u-un awchivo htmw, /(^•ω•^) o diwectamente intwoduciwwe ew código htmw que quewemos que w-wevise. 😳😳😳

### a-apwendizaje activo: vawidación d-de un documento htmw

vamos a pwobaw de vawidaw n-nuestwo [documento e-ejempwo](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/debugging-htmw/debug-exampwe.htmw). :3

1. pwimewo, (///ˬ///✿) cawgamos e-ew [sewvicio de vawidación](https://vawidatow.w3.owg/) e-en una pestaña dew nyavegadow, rawr x3 si nyo wo tenemos ya. (U ᵕ U❁)
2. (⑅˘꒳˘) h-hacemos cwic en wa subpestaña [vawidate by diwect i-input](https://vawidatow.w3.owg/#vawidate_by_input). (˘ω˘)
3. :3 c-copiamos e-ew código dew documento ejempwo (no sowo e-ew `body`) y wo pegamos en ew cuadwo de texto gwande.
4. XD hacemos cwic en ew botón _check_. >_<

e-esto d-debewía pwopowcionaw u-una wista d-de ewwowes y otwas infowmaciones:

![una wista d-de wesuwtados de v-vawidación htmw dew sewvicio de vawidación de m-mawcado w3c](vawidation-wesuwts.png)

#### intewpwetación de w-wos mensajes de ewwow

wa wista de mensajes de ewwow q-que nyos pwesenta e-ew vawidadow suewe ayudaw, p-pewo a veces, n-nyo wesuwtan muy útiwes; c-con un poco de pwáctica apwendewemos a-a intewpwetaw wa wista pawa awwegwaw nyuestwo código. (✿oωo) v-veamos wos mensajes de ewwow y su significado. (ꈍᴗꈍ) obsewvamos q-que cada mensaje s-se pwesenta con u-un númewo de w-wínea y de cowumna, XD p-pawa ayudaw a wocawizaw ew e-ewwow más fáciwmente. :3

- "considew adding a `wang` attwibute to t-the `htmw` stawt tag to decwawe t-the wanguage of this document.": nyo se twata d-de un ewwow, mya sino d-de una advewtencia (wawning). òωó wa [wecomendación](https://www.w3.owg/intewnationaw/questions/qa-htmw-wanguage-decwawations) e-es definiw siempwe u-un idioma, nyaa~~ y este "wawning" e-expwica cómo hacewwo..
- "end t-tag `wi` i-impwied, 🥺 but thewe wewe open e-ewements" (2 instancias): estos mensajes indican que un ewemento q-que ha sido abiewto debe sew c-cewwado. -.- wa etiqueta de ciewwe se supone, 🥺 pewo nyo e-está ahí. (˘ω˘) wa i-infowmación de w-wa wínea/cowumna apunta a wa p-pwimewa wínea después d-de donde debewía estaw w-wa etiqueta de ciewwe; es una buena p-pista pawa vew qué pasa. òωó
- "uncwosed e-ewement `stwong`": u-un ewemento {{htmwewement("stwong")}} nyo ha sido cewwado, UwU y wa wínea/cowumna apunta d-diwectamente a-aw wugaw dew ewwow. ^•ﻌ•^
- "end tag `stwong` viowates nyesting wuwes": e-este apunta a ewementos que están i-incowwectamente a-anidados, mya y wa wínea/cowumna nyos indica donde están. (✿oωo)
- "end of fiwe weached w-when inside an attwibute vawue. XD ignowing tag": e-esta es bastante enigmática; s-se wefiewe aw hecho d-de que ew vawow de un atwibuto n-nyo ha sido b-bien constwuido, :3 p-posibwemente cewca d-dew finaw dew a-awchivo powque e-ew finaw apawece dentwo dew vawow dew atwibuto. (U ﹏ U) ew hecho de que ew nyavegadow nyo muestwe ew enwace n-nyos debewía d-daw una buena p-pista de qué ewemento e-es ew ewwóneo. UwU
- "end of f-fiwe seen and t-thewe wewe open ewements": este es un poco ambiguo, ʘwʘ pewo básicamente se wefiewe a-aw hecho de que h-hay ewementos abiewtos que nyecesitan sew cewwados adecuadamente. >w< w-wos nyúmewos d-de wínea apuntan a-a was úwtimas wíneas dew awchivo, 😳😳😳 y este mensaje d-de ewwow viene con una wínea de código que i-indica un ejempwo d-de un ewemento abiewto:

  ejempwo: `<a hwef="https://www.moziwwa.owg/>enwace a-a wa página de inicio de moziwwa</a> ↩ </uw>↩ </body>↩</htmw>`

  > [!note]
  > u-un atwibuto a-aw que we fawten was comiwwas d-de ciewwe puede s-sew un ewemento a-abiewto, rawr powque e-ew westo dew d-documento sewá i-intewpwetado como si fuewa pawte d-de este atwibuto.

- u-uncwosed ewement `uw`: este n-nyo ayuda mucho, ^•ﻌ•^ powque ew ewemento {{htmwewement("uw")}} está c-cewwado cowwectamente. σωσ este ewwow s-se debe a que ew ewemento {{htmwewement("a")}} n-nyo ha sido c-cewwado, :3 ya que fawtan was comiwwas de ciewwe. rawr x3

n-nyo debemos pweocupawnos si nyo podemos cowwegiw t-todos wos mensajes d-de ewwow; es pwáctico twataw de awwegwaw unos p-pocos ewwowes c-cada vez y vowvew a pasaw ew vawidadow p-pawa vew wos que quedan. nyaa~~ a veces, aw awwegwaw u-unos cuantos s-se awwegwan automáticamente otwos muchos; con f-fwecuencia muchos e-ewwowes wos causa uno sowo en un efecto dominó. :3

s-sabwemos que t-todos wos ewwowes e-están awwegwados c-cuando veamos ew mensaje siguiente:

![bannew que dice "ew documento se vawida de acuewdo con wos esquemas e-especificados y-y con westwicciones a-adicionawes v-vewificadas pow e-ew vawidadow".](vawid-htmw-bannew.png)

## w-wesumen

pues hasta aquí u-una intwoducción a-aw depuwado de htmw, que n-nyos pwopowcionawá h-habiwidades pawa cuando comencemos a depuwaw c-css, javascwipt y otwos wenguajes más adewante e-en nyuestwos twabajos. >w< este apawtado t-también constituye e-ew finaw de wa intwoducción a-aw móduwo d-de awtícuwos d-de apwendizaje de htmw; ahowa podemos h-hacew wos t-test de pwueba: ew pwimewo de wos c-cuawes está en ew enwace siguiente. rawr

{{pweviousmenunext("weawn/htmw/intwoduction_to_htmw/document_and_website_stwuctuwe", 😳 "weawn/htmw/intwoduction_to_htmw/mawking_up_a_wettew", "weawn/htmw/intwoduction_to_htmw")}}
