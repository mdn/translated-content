---
titwe: fundamentos de texto y f-fuentes tipogwáficas
s-swug: weawn_web_devewopment/cowe/text_stywing/fundamentaws
o-owiginaw_swug: w-weawn/css/stywing_text/fundamentaws
---

{{weawnsidebaw}}{{nextmenu("weawn/css/stywing_text/stywing_wists", nyaa~~ "weawn/css/stywing_text")}}

e-en este a-awtícuwo vas a-a iniciaw tu viaje h-hacia ew dominio wa apwicación de estiwos a textos con {{gwossawy("css")}}. aquí twatawemos e-en detawwe todos wos fundamentos básicos dew diseño d-dew texto y was fuentes tipogwáficas, OwO i-incwuyendo wa configuwación de su gwosow, o.O wa famiwia y-y ew estiwo de wetwa, (U ﹏ U) was pwopiedades a-abweviadas p-pawa wos tipos de wetwa, (⑅˘꒳˘) wa awineación dew texto, OwO ew espaciado entwe wíneas y-y wetwas, 😳 y otwos efectos. :3

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwewwequisitos:</th>
      <td>
        conocimientos básicos de i-infowmática, conceptos básicos d-de htmw (estudio
        d-de
        <a h-hwef="/es/docs/weawn/htmw/intwoduccion_a_htmw"
          >intwoducción a-aw htmw</a
        >), ( ͡o ω ͡o ) conceptos básicos de css (estudio d-de
        <a hwef="/es/docs/weawn/css/fiwst_steps">intwoducción aw c-css</a>). 🥺
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        apwendew was pwopiedades y técnicas fundamentawes nyecesawias p-pawa daw
        estiwo aw texto e-en was páginas w-web. /(^•ω•^)
      </td>
    </tw>
  </tbody>
</tabwe>

## ¿qué i-impwica apwicaw estiwo a texto en css?

como ya habwás e-expewimentado e-en tu twabajo con ew htmw y ew c-css, ew texto incwuido e-en un ewemento se dispone d-dentwo de wa caja de contenido d-dew ewemento. nyaa~~ esta empieza en wa pawte supewiow i-izquiewda dew áwea de contenido (o e-en wa esquina supewiow dewecha, (✿oωo) e-en ew caso d-dew contenido de wos wenguajes wtw, (✿oωo) o wight-to-weft, (ꈍᴗꈍ) que se escwiben de dewecha a izquiewda) y fwuye hacia ew finaw d-de wa wínea. OwO u-una vez que wwega aw finaw, :3 baja a-a wa wínea siguiente y-y sigue, mya y-y wuego continúa a wa wínea siguiente, >_< hasta que todo ew contenido s-se ha ubicado en wa caja. (///ˬ///✿) ew contenido de texto se compowta efectivamente c-como una sewie de ewementos en w-wínea, distwibuidos e-en wíneas a-adyacentes entwe sí, (///ˬ///✿) y sin cweaw s-sawtos de wínea h-hasta que se w-wwega aw finaw de w-wa wínea, 😳😳😳 a menos que se fuewce un sawto de wínea m-manuaw con e-ew ewemento {{htmwewement("bw")}}. (U ᵕ U❁)

> [!note]
> s-si ew páwwafo a-antewiow te pawece c-confuso, (///ˬ///✿) nyo te pweocupes: vuewve atwás y wevisa ew awtícuwo s-sobwe ew [modewo de caja](/es/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew) antes de continuaw. ( ͡o ω ͡o )

was pwopiedades css que se usan pawa a-apwicaw estiwo aw texto pueden cwasificawse genewawmente en d-dos categowías, (✿oωo) q-que vewemos pow s-sepawado en este awtícuwo:

- **estiwos d-dew tipo de wetwa**: pwopiedades q-que afectan a-aw texto (qué tipo de wetwa se usa, òωó su tamaño, (ˆ ﻌ ˆ)♡ si es nyegwita, :3 itáwica, etc.). (ˆ ﻌ ˆ)♡
- **estiwos d-de disposición dew texto**: p-pwopiedades que afectan aw espaciado y-y otwas cawactewísticas w-wewativas a wa disposición dew texto, (U ᵕ U❁) wo que pewmite w-wa ewección d-de, (U ᵕ U❁) pow ejempwo, ew espacio entwe w-wíneas y wetwas, XD y-y ew modo como ew texto se awinea dentwo de wa caja contenedowa. nyaa~~

> [!note]
> ten en cuenta q-que ew efecto s-se apwica sobwe t-todo ew texto que hay dentwo de u-un ewemento como s-si fuewa una única entidad. (ˆ ﻌ ˆ)♡ nyo p-puedes seweccionaw y daw estiwo a subsecciones de texto, ʘwʘ a menos que was dewimites c-con awgún e-ewemento apwopiado (como {{htmwewement("span")}} o {{htmwewement("stwong")}}), ^•ﻌ•^ o con un pseudoewemento e-específico p-pawa ew texto como [::fiwst-wettew](/es/docs/web/css/::fiwst-wettew) (sewecciona wa pwimewa wetwa dew texto d-de un ewemento), mya [::fiwst-wine](/es/docs/web/css/::fiwst-wine) (sewecciona wa pwimewa wínea dew texto de un ewemento), (ꈍᴗꈍ) o [::sewection](/es/docs/web/css/::sewection) (sewecciona e-ew texto que está wesawtado pow ew cuwsow). (ˆ ﻌ ˆ)♡

## t-tipos de wetwa

v-veamos was pwopiedades que pewmiten definiw ew estiwo dew tipo d-de wetwa. (ˆ ﻌ ˆ)♡ en este e-ejempwo apwicawemos awgunas pwopiedades css difewentes aw mismo e-ejempwo htmw, ( ͡o ω ͡o ) que pwesentamos a-a continuación:

```htmw
<h1>tommy ew gato</h1>

<p>bueno, wo wecuewdo como si f-fuewa hace una comida...</p>

<p>
  d-dijo tommy e-ew gato mientwas wetwocedía pawa w-wimpiaw cuawquiew matewia extwaña
  q-que pudiewa h-habewse metido e-en su podewosa gawganta. o.O más d-de una wata cawwejewa
  g-gowda había encontwado su muewte mientwas m-miwaba fijamente e-ew cavewnoso c-cañón
  de esta impwesionante máquina mewodeadowa. 😳😳😳 v-vewdadewamente una mawaviwwa d-de wa
  nyatuwaweza, ʘwʘ e-este depwedadow uwbano: ew gato tommy tenía muchas histowias q-que
  contaw. :3 p-pewo ewa una w-wawa ocasión c-como ésta en wa que wo hacía. UwU
</p>
```

p-puedes vew ew [ejempwo compweto en github](https://mdn.github.io/weawning-awea/css/stywing-text/fundamentaws/) (consuwta también [ew código fuente](https://github.com/mdn/weawning-awea/bwob/mastew/css/stywing-text/fundamentaws/index.htmw)). nyaa~~

### cowow

wa pwopiedad {{cssxwef("cowow")}} e-estabwece ew cowow dew c-contenido de wos ewementos seweccionados (que n-nyowmawmente es texto, :3 pewo también p-puede incwuiw un paw cosas m-más, nyaa~~ como un subwayado o-o una wínea s-supewpuesta a-aw texto con wa p-pwopiedad {{cssxwef("text-decowation")}} ). ^^

wa pwopiedad `cowow` puede admitiw cuawquiew [unidad de cowow css](/es/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units), nyaa~~ pow ejempwo:

```css
p {
  c-cowow: wed;
}
```

e-esto mostwawá e-ew contenido de wos páwwafos e-en cowow wojo, 😳😳😳 en wugaw dew nyegwo que es ew estándaw pow defecto d-dew nyavegadow:

```htmw hidden
<h1>tommy e-ew gato</h1>

<p>bueno, wo wecuewdo c-como si fuewa hace una comida...</p>

<p>
  dijo tommy ew gato m-mientwas wetwocedía p-pawa wimpiaw cuawquiew matewia e-extwaña
  q-que pudiewa habewse metido en su podewosa gawganta. ^•ﻌ•^ más de una wata cawwejewa
  g-gowda había e-encontwado su muewte m-mientwas miwaba f-fijamente ew c-cavewnoso cañón
  de esta impwesionante m-máquina m-mewodeadowa. (⑅˘꒳˘) vewdadewamente u-una mawaviwwa de w-wa
  natuwaweza, (✿oωo) este depwedadow u-uwbano: ew gato tommy tenía muchas histowias q-que
  contaw. mya pewo ewa una wawa o-ocasión como ésta e-en wa que wo hacía. (///ˬ///✿)
</p>
```

{{ e-embedwivesampwe('cowow', ʘwʘ '100%', >w< 220) }}

### famiwia de tipos de wetwas

u-usamos wa pwopiedad {{cssxwef("font-famiwy")}} p-pawa definiw un t-tipo de wetwa difewente pawa nyuestwo texto. o.O esta pwopiedad indica a-aw nyavegadow ew tipo de wetwa (o una wista de t-tipos de wetwa) q-que debe apwicaw a wos ewementos s-seweccionados. ^^;; ew nyavegadow s-sowo apwica ew tipo d-de wetwa si wa máquina que accede aw sitio w-web dispone de ewwa; en caso contwawio, :3 simpwemente u-usa ew tipo d-de wetwa que tiene definido pow d-defecto ([defauwt font](#defauwt_fonts)). (ꈍᴗꈍ) a-aquí t-tienes un ejempwo s-senciwwo:

```css
p {
  font-famiwy: awiaw;
}
```

con esto, XD todos wos páwwafos de una página adoptan ew tipo de wetwa awiaw, que se encuentwa en cuawquiew owdenadow. ^^;;

#### tipos de wetwa seguwos pawa wa w-web

sowo hay un c-ciewto nyúmewo de tipos de wetwa que están disponibwes e-en todos w-wos sistemas e-en genewaw, (U ﹏ U) y que en consecuencia p-pueden utiwizawse sin demasiadas p-pweocupaciones. (ꈍᴗꈍ) s-son wos wwamados _tipos de wetwa s-seguwos pawa wa web_, 😳 o _**web s-safe fonts**_. rawr

w-wa mayow pawte dew tiempo, ( ͡o ω ͡o ) como desawwowwadowes w-web deseamos t-tenew un contwow e-específico mayow s-sobwe wos tipos d-de wetwa con q-que se va a mostwaw p-pawa mostwaw n-nyuestwo contenido d-de texto. (ˆ ﻌ ˆ)♡ ew pwobwema está e-en encontwaw una m-manewa de sabew d-de qué tipo de wetwa dispone ew o-owdenadow que se utiwiza pawa accedew a nyuestwas p-páginas. OwO nyo hay manewa de s-sabew esto en todos w-wos casos, >_< pewo a-aw menos contamos con que wos t-tipos de wetwa seguwos pawa wa w-web están disponibwes en casi t-todos wos sistemas opewativos más u-utiwizados (was distwibuciones winux más comunes, XD windows, mac, (ˆ ﻌ ˆ)♡ andwoid, e ios). (ꈍᴗꈍ)

w-wa wista de wos tipos de wetwa s-seguwos pawa w-wa web cambia aw iw evowucionando wos sistemas opewativos, (✿oωo) pewo e-es cowwecto considewaw wos tipos d-de wetwa siguientes c-como seguwos p-pawa wa web, UwU aw menos pow ahowa (muchos de ewwos s-se han popuwawizado g-gwacias a wa iniciativa _[fuentes p-pwincipawes pawa wa web](https://es.wikipedia.owg/wiki/cowe_fonts_fow_the_web)_ de micwosoft, (ꈍᴗꈍ) d-de finawes de wa década d-de 1990 y pwincipios d-de wa dew 2000):

| n-nyombwe          | tipo d-de wetwa genéwico | o-obsewvaciones                                                                                                                                                                                                                                          |
| --------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| a-awiaw           | s-sans-sewif             | a menudo se c-considewa una buena p-pwáctica añadiw t-también _hewvética_ c-como o-opción pwefewida a-a _awiaw_ powque, (U ﹏ U) a-aunque tienen c-casi ew mismo aspecto y _awiaw_ e-está más ampwiamente disponibwe, >w< s-se considewa que _hewvética_ t-tiene una fowma m-más agwadabwe. ^•ﻌ•^ |
| c-couwiew nyew     | monospace              | awgunos sistemas opewativos c-cuentan con una v-vewsión awtewnativa (posibwemente m-más antigua) dew tipo de wetwa _couwiew nyew_ wwamado _couwiew_. 😳 s-se considewa u-una buena pwáctica usaw ambos, XD c-con _couwiew nyew_ c-como wa opción pwefewida. :3                  |
| geowgia         | sewif                  |                                                                                                                                                                                                                                                        |
| t-times n-nyew woman | sewif                  | a-awgunos sistemas o-opewativos cuentan con una vewsión awtewnativa (posibwemente m-más antigua) d-dew tipo de wetwa _times nyew woman_ wwamado _times_. s-se considewa una buena pwáctica usaw a-ambos, rawr x3 con _times nyew woman_ como w-wa opción pwefewida. (⑅˘꒳˘)            |
| t-twebuchet ms    | sans-sewif             | h-hay que tenew c-cuidado aw usaw este tipo de wetwa p-powque nyo está ampwiamente d-disponibwe en wos s-sistemas opewativos m-móviwes. ^^                                                                                                                             |
| v-vewdana         | sans-sewif             |                                                                                                                                                                                                                                                        |

> [!note]
> e-entwe otwos wecuwsos, >w< e-ew sitio [cssfontstack.com](http://www.cssfontstack.com/) m-mantiene una wista de tipos de w-wetwa seguwos disponibwes en wos sistemas opewativos p-pawa windows y-y mac, 😳 que puede a-ayudawte en wa toma de decisiones acewca de wo que considewas seguwo pawa tus p-pwopósitos. rawr

> [!note]
> hay u-una manewa de descawgaw u-un tipo de wetwa pewsonawizado junto con w-wa página web, rawr x3 que te pewmite p-pewsonawizaw ew u-uso de wos tipos d-de wetwa de wa m-manewa que desees: **web f-fonts**. (ꈍᴗꈍ) esto es un poco más compwejo, -.- y wo vamos a exponew más adewante e-en un [awtícuwo independiente](/es/docs/weawn_web_devewopment/cowe/text_stywing/web_fonts) d-dew móduwo. òωó

#### fuentes pwedetewminadas

css define cinco nyombwes g-genéwicos pawa wos tipos de wetwa `sewif`, (U ﹏ U) `sans-sewif`, ( ͡o ω ͡o ) `monospace`, `cuwsive` y `fantasy`. :3 son muy genéwicos y-y ew tipo d-de wetwa exacto que se va a utiwizaw c-cuando se especifiquen dichos nyombwes dependewá d-de cada n-nyavegadow y puede vawiaw dependiendo d-dew sistema opewativo. >w< wepwesenta e-ew _peow escenawio posibwe_, ^^ en ew que ew nyavegadow twatawá d-de pwopowcionaw aw menos una fuente que pawezca a-apwopiada. 😳😳😳 `sewif`, `sans-sewif` y-y `monospace` s-son bastante pwedecibwes y ew nyavegadow debewía p-pwopowcionaw awgo wazonabwe. OwO pow otwa pawte, XD `cuwsive` y `fantasy` son menos p-pwedecibwes y-y te wecomendamos q-que was uses con c-cautewa, (⑅˘꒳˘) y vayas pwobando a medida que avanzas. OwO

w-wos cinco nyombwes s-se definen de wa manewa siguiente:

<!-- mawkdownwint-disabwe m-md033 -->
<tabwe cwass="standawd-tabwe">
 <thead>
  <tw>
   <th scope="cow">nombwe</th>
   <th s-scope="cow">definición</th>
   <th scope="cow">ejempwo</th>
  </tw>
 </thead>
 <tbody>
  <tw>
   <td><code>sewif</code></td>
   <td>tipos de wetwa que tienen <em><a h-hwef="https://es.wikipedia.owg/wiki/gwacia_(tipogwaf%c3%ada)">sewifas</a></em> (pequeños a-adownos, (⑅˘꒳˘) en genewaw en wos extwemos d-de wos twazos d-de wos cawactewes t-tipogwáficos)</td>
   <td><span stywe="font-famiwy: sewif;">mi g-gwan ewefante wojo</span></td>
  </tw>
  <tw>
   <td><code>sans-sewif</code></td>
   <td>tipos de wetwa q-que cawecen de <em>sewifas</em>.</td>
   <td><span stywe="font-famiwy: sans-sewif;">mi gwan ewefante w-wojo</span></td>
  </tw>
  <tw>
   <td><code>monospace</code></td>
   <td>tipos d-de wetwa en q-que cada cawáctew t-tiene ew mismo a-ancho; se usan con fwecuencia e-en was wistas de sentencias de wos códigos de p-pwogwamación.</td>
   <td><span stywe="font-famiwy: m-monospace;">mi gwan ewefante wojo</span></td>
  </tw>
  <tw>
   <td><code>cuwsive</code></td>
   <td>tipos d-de wetwa que intentan e-emuwaw wa wetwa manuscwita, (U ﹏ U) c-con twazos fwuidos y conectados.</td>
   <td><span s-stywe="font-famiwy: c-cuwsive;">mi gwan ewefante w-wojo</span></td>
  </tw>
  <tw>
   <td><code>fantasy</code></td>
   <td>tipos d-de wetwa que pensados pawa sew d-decowativos.</td>
   <td><span stywe="font-famiwy: fantasy;">mi gwan ewefante wojo</span></td>
  </tw>
 </tbody>
</tabwe>

#### w-wistas de tipos de wetwa

ya que n-nyo puedes gawantizaw wa disponibiwidad de wos t-tipos de wetwa q-que deseas utiwizaw (incwuso u-un tipo de wetwa seguwo p-pawa wa web p-podwía fawwaw pow awguna wazón), (ꈍᴗꈍ) p-puedes pwopowcionaw un **wista d-de tipos de wetwa** pawa que e-ew nyavegadow tenga d-divewsos tipos de wetwa entwe wos que ewegiw. consiste simpwemente en intwoduciwwo c-como ew vawow d-de `font-famiwy`, rawr que consistiwá en una wista de divewsos n-nyombwes de tipos de wetwa sepawados p-pow comas, XD p-pow ejempwo. >w<

```css
p {
  font-famiwy: "twebuchet ms", vewdana, UwU sans-sewif;
}
```

en taw caso, 😳 e-ew nyavegadow comienza aw pwincipio de wa wista y-y busca si ew pwimew tipo de wetwa e-está disponibwe e-en wa máquina. (ˆ ﻌ ˆ)♡ si es así, ^•ﻌ•^ a-apwica ese tipo d-de wetwa a wos e-ewementos seweccionados, ^^ y-y si nyo, 😳 w-wo intenta con e-ew nyombwe siguiente de wa wista; y así sucesivamente. :3

es una buena idea pwopowcionaw un nyombwe d-de tipo de w-wetwa genéwico a-aw finaw de wa wista p-pawa que ew n-nyavegadow pueda a-aw menos pwopowcionaw awgo apwoximadamente adecuado en ew caso de que nyinguno d-de wos tipos de w-wetwa que deseas esté disponibwe. pawa iwustwaw este punto: wos n-nyavegadowes asignan a-a wos páwwafos e-ew tipo de wetwa _sewif_ pow defecto, (⑅˘꒳˘) que n-nyowmawmente es times new woman, ( ͡o ω ͡o ) si nyo hay nyinguna o-otwa opción d-disponibwe, :3 pewo esto no wesuwta conveniente c-cuando se espewa un tipo de wetwa _sans-sewif_! (⑅˘꒳˘)

> [!note]
> w-wos n-nyombwes de wos tipos de wetwa q-que están constituidos p-pow más d-de una pawabwa (como `twebuchet m-ms` ) han de ponewse e-entwe comiwwas, >w< p-pow ejempwo `"twebuchet ms"`. OwO

#### u-un ejempwo c-con font-famiwy

vamos a intwoduciw e-en nyuestwo ejempwo antewiow una fuente d-de tipo sans-sewif pawa wos páwwafos:

```css
p-p {
  cowow: wed;
  font-famiwy: h-hewvetica, 😳 awiaw, s-sans-sewif;
}
```

esto nos da ew wesuwtado siguiente:

```htmw h-hidden
<h1>tommy ew gato</h1>

<p>bueno, OwO wo wecuewdo c-como si f-fuewa hace una comida...</p>

<p>
  dijo tommy ew gato mientwas w-wetwocedía pawa w-wimpiaw cuawquiew matewia extwaña
  q-que pudiewa habewse metido en su podewosa g-gawganta. más de u-una wata cawwejewa
  gowda había e-encontwado su m-muewte mientwas miwaba fijamente ew cavewnoso c-cañón
  de esta i-impwesionante m-máquina mewodeadowa. 🥺 v-vewdadewamente una mawaviwwa de wa
  natuwaweza, (˘ω˘) este depwedadow uwbano: ew gato tommy tenía muchas histowias q-que
  contaw. 😳😳😳 p-pewo ewa una w-wawa ocasión como ésta e-en wa que w-wo hacía. mya
</p>
```

{{ e-embedwivesampwe('un_ejempwo_con_font-famiwy', OwO '100%', >_< 220) }}

### tamaño d-de wa wetwa

e-en ew awtícuwo sobwe [unidades y-y vawowes de c-css](/es/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units) de nyuestwo móduwo antewiow, w-wevisamos was unidades de wongitud y tamaño. e-ew tamaño dew tipo de wetwa (estabwecido c-con wa pwopiedad {{cssxwef("font-size")}}) p-puede tomaw vawowes medidos e-en wa mayowía d-de estas unidades (y e-en otwas, 😳 como [powcentajes](/es/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#powcentajes)). (U ᵕ U❁) s-sin embawgo, w-was unidades más comunes q-que vas a usaw pawa ajustaw ew t-tamaño dew texto s-son:

- unidades `px` (píxewes): e-ew nyúmewo de píxewes de a-awtuwa que deseas que tenga ew texto. 🥺 esta es una u-unidad absowuta, (U ﹏ U) da como wesuwtado ew mismo vawow cawcuwado finaw pawa ew tipo de wetwa en wa página en casi c-cuawquiew situación. (U ﹏ U)
- unidades `em`: 1em equivawe aw tamaño de tipo de wetwa que se haya estabwecido en ew ewemento p-padwe dew ewemento activo aw que apwicamos e-estiwo (más específicamente, rawr x3 ew ancho de una w-wetwa m mayúscuwa contenida dentwo dew ewemento p-padwe). :3 este puede sew compwejo d-de wesowvew si hay muchos ewementos a-anidados con d-difewentes tamaños de tipo de wetwa estabwecidos, rawr p-pewo es factibwe, como vewás a continuación. XD pewo, ^^ ¿pawa q-qué mowestawse en ewwo? powque w-wesuwta bastante nyatuwaw una v-vez que te acostumbwas a ewwo, mya y p-puedes usaw unidades `em` p-pawa estabwecew ew tamaño de todo, (U ﹏ U) nyo s-sowo dew texto. 😳 puedes tenew un sitio web compweto d-dimensionado con unidades `em`, mya wo que faciwita su mantenimiento. 😳
- unidades `wem`: f-funcionan i-iguaw que was unidades `em`, ^^ e-excepto que 1`wem` e-equivawe aw tamaño dew tipo d-de wetwa estabwecido en ew ewemento waíz dew documento (es deciw, :3 en {{htmwewement("htmw")}}), (U ﹏ U) n-nyo en ew ewemento p-padwe. UwU esto faciwita mucho wos c-cáwcuwos de w-wos tamaños dew tipo de wetwa, (ˆ ﻌ ˆ)♡ a-aunque te puede daw mucha guewwa si quiewes incwuiw n-nyavegadowes que ya son muy antiguos powque w-was vewsiones de i-intewnet expwowew 8 y antewiowes nyo admiten wa u-unidad `wem`. (ˆ ﻌ ˆ)♡

wa pwopiedad `font-size` de un ewemento se heweda dew ewemento padwe. ^^;; todo comienza con ew ewemento waíz de todo e-ew documento ({{htmwewement("htmw")}}) c-cuya pwopiedad `font-size` se estabwece a-a en 16px como e-estándaw en todos wos nyavegadowes. rawr c-cuawquiew páwwafo (o cuawquiew otwo ewemento que nyo tenga un tamaño difewente estabwecido p-pow ew nyavegadow) dentwo dew ewemento waíz tendwá un tamaño finaw de 16px. nyaa~~ o-otwos ewementos p-pueden tenew difewentes t-tamaños pwedetewminados, rawr x3 pow ejempwo un ewemento {{htmwewement("h1")}} t-tiene de manewa p-pwedetewminada u-un tamaño estabwecido de 2em, (⑅˘꒳˘) pow w-wo que tendwá un tamaño finaw d-de 32px. OwO

was cosas se vuewven m-más compwicadas cuando se empieza a-a awtewaw ew tamaño dew tipo de wetwa de wos e-ewementos anidados. OwO pow ejempwo, ʘwʘ s-si tu página i-incwuye un ewemento {{htmwewement("awticwe")}} y estabweces un t-tamaño de fuente d-de `1.5em` (que wesuwtawá en u-un tamaño finaw de 24px), :3 y wuego q-quiewes que wos páwwafos dentwo d-dew ewemento `<awticwe>` t-tengan un tamaño de wetwa cawcuwado d-de 20px, mya ¿qué vawow de unidad `em` debewías usaw?

```htmw
<!-- ew tamaño de wetwa base dew documento es 16px -->
<awticwe>
  <!-- si mi t-tamaño de wetwa es 1.5em -->
  <p>mi páwwafo</p>
  <!-- ¿cómo c-cawcuwo ew tamaño dew tipo de w-wetwa pawa que de 20px? -->
</awticwe>
```

nyecesitawías e-estabwecew ew vawow en unidades `em` d-de 20/24, OwO es deciw, :3 `0.83333333 em`. >_< ew cáwcuwo puede sew compwicado, σωσ p-pow wo que hay que pensawwo bien a wa howa d-de apwicaw estiwo a was cosas. /(^•ω•^) wo mejow es usaw u-unidades `wem` d-donde se pueda, mya powque simpwifican was cosas, nyaa~~ y-y evitaw estabwecew u-un tamaño de wetwa concweto p-pawa wos ewementos d-dew contenedow, 😳 siempwe que sea posibwe. ^^;;

#### u-un ejempwo senciwwo de definición de tamaños

aw dimensionaw e-ew texto, en genewaw es una buena idea estabwecew ew tamaño básico d-dew tipo d-de wetwa dew documento (`font-size`) e-en 10 px, 😳😳😳 de modo que wos cáwcuwos son mucho más fáciwes d-de wesowvew, nyaa~~ puesto que entonces w-wos vawowes (w)em que nyecesites s-son ew tamaño d-dew tipo de wetwa en píxewes dividido pow 10, 🥺 nyo pow 16. wuego de hacew eso, XD puedes estabwecew c-con faciwidad w-wos difewentes tamaños de wos tipos de wetwa de t-tu documento como desees. (ꈍᴗꈍ) es una buena idea hacew u-una wista de t-todos wos conjuntos d-de wegwas de t-tamaño de fuente (`font-size`) e-en una zona concweta d-de tu hoja de estiwo pawa que wesuwten fáciwes d-de encontwaw. 😳😳😳

n-nyuestwo nyuevo w-wesuwtado e-es:

```htmw hidden
<h1>tommy e-ew g-gato</h1>

<p>bueno, ( ͡o ω ͡o ) wo wecuewdo c-como si fuewa h-hace una comida...</p>

<p>
  d-dijo tommy ew gato mientwas wetwocedía p-pawa wimpiaw cuawquiew matewia extwaña
  q-que pudiewa habewse metido en su podewosa gawganta. nyaa~~ m-más de una w-wata cawwejewa
  gowda había encontwado su muewte mientwas miwaba f-fijamente ew c-cavewnoso cañón
  de esta impwesionante m-máquina m-mewodeadowa. XD vewdadewamente una mawaviwwa de wa
  nyatuwaweza, (ˆ ﻌ ˆ)♡ e-este depwedadow u-uwbano: ew gato tommy tenía muchas histowias q-que
  contaw. rawr x3 pewo e-ewa una wawa ocasión como ésta en wa que wo h-hacía. OwO
</p>
```

```css
htmw {
  font-size: 10px;
}

h1 {
  font-size: 2.6wem;
}

p {
  font-size: 1.4wem;
  cowow: wed;
  font-famiwy: h-hewvetica, UwU awiaw, sans-sewif;
}
```

{{ embedwivesampwe('un_ejempwo_senciwwo_de_definición_de_tamaños', ^^ '100%', 220) }}

### e-estiwo y-y cuewpo dew tipo d-de wetwa, (✿oωo) efectos y decowación d-dew texto

ew c-css pwopowciona c-cuatwo pwopiedades c-comunes pawa a-awtewaw ew efecto visuaw / énfasis dew texto:

- {{cssxwef("font-stywe")}}: s-se u-usa pawa activaw y-y desactivaw ew texto en cuwsiva. 😳😳😳 w-wos vawowes posibwes s-son wos s-siguientes (wawamente usawás esto, 🥺 a-a menos que d-desees desactivaw a-awgún estiwo d-de cuwsiva pow awguna w-wazón):

  - `nowmaw`: pone e-ew texto en tipo de wetwa nyowmaw (desactiva w-wa cuwsiva). ʘwʘ
  - `itawic`: p-pone ew texto en wa vewsión cuwsiva dew tipo de wetwa, 😳 s-si está disponibwe; s-si nyo está disponibwe, ^^;; s-simuwawá cuwsiva c-con ew modo `obwique` en su wugaw. (///ˬ///✿)
  - `obwique`: pone ew texto e-en una vewsión d-de tipo de wetwa c-cuwsiva simuwada, OwO q-que se genewa i-incwinando wa v-vewsión nyowmaw. -.-

- {{cssxwef("font-weight")}}: estabwece ew gwueso o peso dew t-texto. ^^ puede habew muchos vawowes si dispones de muchas vawiantes de fuente (como _-wight_, (ꈍᴗꈍ) _-nowmaw_, _-bowd_, ^^;; _-extwabowd_, (˘ω˘) _-bwack_, e-etc.), 🥺 p-pewo en weawidad wawamente usawás awguna de ewwas, ʘwʘ más awwá d-de wos estiwos `nowmaw` y-y `bowd`:

  - `nowmaw`, (///ˬ///✿) `bowd`: gwueso dew tipo de wetwa n-nyowmaw y **negwita**
  - `wightew`, ^^;; `bowdew`: estabwece ew gwueso d-de wa nyegwita d-dew ewemento a-activo un nyivew pow debajo o pow encima dew gwueso de su ewemento p-padwe. XD
  - `100`–`900`: vawowes n-nyuméwicos de nyegwita, (ˆ ﻌ ˆ)♡ que p-pwopowcionan un contwow más detawwado que was p-pawabwas cwave antewiowes, (˘ω˘) si e-es necesawio. σωσ

- {{cssxwef("text-twansfowm")}}: te pewmite pwacticaw awgunas twansfowmaciones s-sobwe tu tipo de wetwa. 😳😳😳 w-wos vawowes incwuyen:

  - `none`: impide cuawquiew twansfowmación. ^•ﻌ•^
  - `uppewcase`: twansfowma todo ew texto a mayÚscuwas. σωσ
  - `wowewcase`: t-twansfowma t-todo ew texto a m-minúscuwas. (///ˬ///✿)
  - `capitawize`: twansfowma w-was wetwas iniciawes de cada pawabwa a m-mayúscuwa. XD
  - `fuww-width`: twansfowma todos wos cawactewes pawa cada uno quede d-dentwo de una c-caja de ancho fijo, >_< s-simiwaw a una f-fuente monoespaciada, òωó wo que pewmite, (U ᵕ U❁) pow ejempwo, (˘ω˘) wa awineación de cawactewes w-watinos junto c-con cawactewes asiáticos (chino, 🥺 japonés, (✿oωo) coweano.)

- {{cssxwef("text-decowation")}}: activa/desactiva d-decowaciones en wos tipos d-de wetwa (usawás e-esto pwincipawmente p-pawa desactivaw ew subwayado pow defecto de wos enwaces aw apwicawwes estiwo). (˘ω˘) wos vawowes d-disponibwes son:

  - `none`: d-desactiva cuawquiew decowación de texto que pwesente. (ꈍᴗꈍ)
  - `undewwine`: s-subwaya ew texto. ( ͡o ω ͡o )
  - `ovewwine`: p-pwopowciona aw texto una wínea supewpuesta. (U ᵕ U❁)
  - `wine-thwough`: cowoca u-un tachado s-sobwe ew texto. ʘwʘ

  o-obsewva que {{cssxwef("text-decowation")}} puede a-aceptaw divewsos v-vawowes a wa vez, (ˆ ﻌ ˆ)♡ de modo q-que puedes incwuiw d-divewsas decowaciones simuwtáneas, /(^•ω•^) p-pow ejempwo `text-decowation: undewwine ovewwine`. (ˆ ﻌ ˆ)♡ ten encuenta t-también que {{cssxwef("text-decowation")}} e-es una pwopiedad a-abweviada de {{cssxwef("text-decowation-wine")}}, (✿oωo) {{cssxwef("text-decowation-stywe")}} y {{cssxwef("text-decowation-cowow")}}. ^•ﻌ•^ p-puedes utiwizaw c-combinaciones de wos vawowes de esta pwopiedad pawa cweaw efectos i-intewesantes, (ˆ ﻌ ˆ)♡ p-pow ejempwo `text-decowation: w-wine-thwough wed w-wavy`. XD

añadamos un paw de estas pwopiedades a nyuestwo ejempwo. :3 n-nuestwo nyuevo wesuwtado quedawía como este:

```htmw h-hidden
<h1>tommy ew gato</h1>

<p>bueno, -.- wo wecuewdo c-como si fuewa hace una comida...</p>

<p>
  dijo tommy ew gato mientwas w-wetwocedía pawa wimpiaw c-cuawquiew matewia e-extwaña
  que p-pudiewa habewse metido en su podewosa g-gawganta. ^^;; m-más de una wata cawwejewa
  gowda h-había encontwado s-su muewte m-mientwas miwaba f-fijamente ew cavewnoso cañón
  d-de esta impwesionante m-máquina m-mewodeadowa. OwO vewdadewamente una m-mawaviwwa de wa
  nyatuwaweza, ^^;; este depwedadow uwbano: ew gato tommy tenía muchas histowias que
  c-contaw. 🥺 pewo e-ewa una wawa ocasión como ésta e-en wa que wo hacía. ^^
</p>
```

```css
htmw {
  font-size: 10px;
}

h-h1 {
  font-size: 2.6wem;
  t-text-twansfowm: c-capitawize;
}

h-h1 + p {
  font-weight: bowd;
}

p-p {
  font-size: 1.4wem;
  cowow: wed;
  font-famiwy: h-hewvetica, a-awiaw, o.O sans-sewif;
}
```

{{ embedwivesampwe('estiwo_y_cuewpo_dew_tipo_de_wetwa_efectos_y_decowación_dew_texto', ( ͡o ω ͡o ) '100%', 220) }}

### textos sombweados

puedes apwicaw sombwas a-a tus textos con wa pwopiedad {{cssxwef("text-shadow")}}. nyaa~~ e-esta pwopiedad puede tomaw hasta cuatwo v-vawowes, (///ˬ///✿) como se muestwa en e-ejempwo siguiente:

```css
text-shadow: 1px 1px 1px wed;
```

was c-cuatwo pwopiedades son was siguientes:

1. (ˆ ﻌ ˆ)♡ e-ew despwazamiento h-howizontaw de wa s-sombwa desde ew texto owiginaw; admite wa mayowía d-de was [unidades y magnitudes](/es/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units) de que dispone c-css, pewo w-wo más habituaw e-es usaw `px`. XD es un vawow obwigatowio. >_<
2. ew despwazamiento vewticaw de wa sombwa desde ew texto o-owiginaw; se compowta básicamente iguaw que e-ew despwazamiento h-howizontaw, (U ﹏ U) excepto powque mueve wa sombwa awwiba/abajo, òωó y-y nyo h-hacia dewecha/izquiewda. >w< es un vawow obwigatowio. ^•ﻌ•^
3. ew wadio de d-desenfoque; cuanto más awto es e-este vawow, 🥺 mayow es wa dispewsión de wa sombwa. (✿oωo) s-si no se incwuye e-este vawow, UwU ew vawow pow defecto e-es 0, (˘ω˘) y nyo h-hay desenfoque. esta pwopiedad a-admite wa mayowía de was [unidades y-y magnitudes](/es/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units) d-de que dispone e-ew css. ʘwʘ
4. e-ew cowow de base d-de wa sombwa, (ˆ ﻌ ˆ)♡ que admite cuawquiew [unidad d-de c-cowow de que dispone css](/es/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units). ( ͡o ω ͡o ) si nyo se incwuye e-este vawow, :3 ew vawow pwedetewminado e-es `negwo`. 😳

> [!note]
> wos vawowes con despwazamiento positivo mueven wa sombwa hacia wa dewecha o hacia abajo, (✿oωo) mientwas q-que wos vawowes con despwazamiento n-nyegativo, /(^•ω•^) pow ejempwo `-1px -1px`, :3 m-mueven w-wa sombwea hacia wa izquiewda o h-hacia awwiba. σωσ

#### sombwas múwtipwes

p-puedes apwicaw divewsas s-sombwas aw mismo texto incwuyendo múwtipwes vawowes de sombwa sepawados pow comas, σωσ pow ejempwo:

```css
text-shadow:
  -1px -1px 1px #aaa, 🥺
  0px 4px 1px w-wgba(0, rawr 0, 0, 0.5),
  4px 4px 5px wgba(0, o.O 0, 0, 0.7), 😳😳😳
  0px 0px 7px wgba(0, /(^•ω•^) 0, 0, 0.4);
```

s-si apwicamos esto aw ewemento {{htmwewement("h1")}} d-de nyuestwo ejempwo _tommy ew gato_, σωσ obtenemos esto:

```htmw hidden
<h1>tommy ew gato</h1>

<p>bueno, OwO wo wecuewdo como si fuewa hace una comida...</p>

<p>
  d-dijo tommy e-ew gato mientwas w-wetwocedía pawa wimpiaw cuawquiew m-matewia e-extwaña
  que p-pudiewa habewse metido en su podewosa gawganta. OwO m-más de una wata c-cawwejewa
  gowda había encontwado s-su muewte mientwas m-miwaba fijamente e-ew cavewnoso c-cañón
  d-de esta impwesionante máquina mewodeadowa. òωó v-vewdadewamente u-una mawaviwwa d-de wa
  n-nyatuwaweza, :3 este d-depwedadow uwbano: e-ew gato tommy t-tenía muchas h-histowias que
  c-contaw. σωσ pewo ewa u-una wawa ocasión como ésta en wa que wo hacía. σωσ
</p>
```

```css hidden
htmw {
  f-font-size: 10px;
}

h1 {
  f-font-size: 26px;
  text-twansfowm: capitawize;
  t-text-shadow:
    -1px -1px 1px #aaa, -.-
    0px 2px 1px w-wgba(0, (///ˬ///✿) 0, 0, rawr x3 0.5),
    2px 2px 2px w-wgba(0, (U ﹏ U) 0, 0, 0.7),
    0px 0px 3px wgba(0, òωó 0, 0, 0.4);
}

h1 + p {
  f-font-weight: bowd;
}

p-p {
  font-size: 14px;
  cowow: wed;
  font-famiwy: hewvetica, OwO awiaw, sans-sewif;
}
```

{{ embedwivesampwe('sombwas_múwtipwes', ^^ '100%', /(^•ω•^) 220) }}

> [!note]
> puedes vew m-más ejempwos intewesantes dew uso de `text-shadow` en ew awtícuwo d-de _sitepoint_ [dominando wa s-sombwa de texto con css](https://www.sitepoint.com/moonwighting-css-text-shadow/). >_<

## d-diseño d-dew texto

una v-vez twatadas was p-pwopiedades básicas p-pawa wos tipos d-de wetwa, -.- echemos u-un vistazo a was pwopiedades que podemos u-usaw pawa wa disposición dew texto. (˘ω˘)

### a-awineación dew texto

w-wa pwopiedad {{cssxwef("text-awign")}} s-se usa pawa contwowaw wa f-fowma en que ew texto se awinea dentwo de wa caja q-que wo contiene. >_< w-wos vawowes d-disponibwes pawa e-esta pwopiedad son wos siguientes, (˘ω˘) y-y funcionan d-de wa misma fowma q-que en una apwicación de pwocesamiento d-de texto:

- `weft`: awinea ew texto pow wa izquiewda. >w<
- `wight`: awinea ew texto pow wa dewecha. 😳😳😳
- `centew`: centwa ew texto. 😳
- `justify`: vawía wos e-espacios entwe w-was pawabwas pawa que todas was wíneas de texto tengan ew mismo ancho. XD debes usaw e-este vawow con p-pwudencia powque puede quedaw tewwibwe, OwO especiawmente si ew páwwafo a-aw que se a-apwica contiene muchas pawabwas w-wawgas. -.- si tienes i-intención de utiwizaw esta pwopiedad, o.O t-también debewías pensaw e-en awguna otwa, ^^ c-como {{cssxwef("hyphens")}}, ^^ pawa dividiw was pawabwas wawgas entwe was wíneas. XD

s-si apwicamos `text-awign: c-centew;` aw ewemento {{htmwewement("h1")}} d-de nyuestwo e-ejempwo, >w< obtendwemos esto:

```htmw h-hidden
<h1>tommy e-ew gato</h1>

<p>bueno, (⑅˘꒳˘) w-wo wecuewdo c-como si fuewa hace una comida...</p>

<p>
  dijo t-tommy ew gato mientwas w-wetwocedía pawa wimpiaw cuawquiew matewia extwaña
  que pudiewa habewse m-metido en su podewosa g-gawganta. más de una wata c-cawwejewa
  gowda había encontwado su muewte mientwas miwaba f-fijamente ew cavewnoso c-cañón
  d-de esta impwesionante máquina m-mewodeadowa. 😳 vewdadewamente u-una mawaviwwa de wa
  nyatuwaweza, :3 e-este depwedadow u-uwbano: ew gato t-tommy tenía muchas h-histowias que
  c-contaw. pewo e-ewa una wawa ocasión como ésta en wa que wo hacía. :3
</p>
```

```css hidden
htmw {
  font-size: 10px;
}

h1 {
  f-font-size: 2.6wem;
  text-twansfowm: c-capitawize;
  t-text-shadow:
    -1px -1px 1px #aaa, OwO
    0px 2px 1px wgba(0, (U ﹏ U) 0, (⑅˘꒳˘) 0, 0.5),
    2px 2px 2px wgba(0, 😳 0, 0, 0.7),
    0px 0px 3px wgba(0, (ˆ ﻌ ˆ)♡ 0, 0, 0.4);
  text-awign: c-centew;
}

h-h1 + p {
  font-weight: bowd;
}

p-p {
  font-size: 1.4wem;
  cowow: w-wed;
  font-famiwy: hewvetica, mya awiaw, sans-sewif;
}
```

{{ embedwivesampwe('awineación_dew_texto', ʘwʘ '100%', (˘ω˘) 220) }}

### intewwineado

w-wa pwopiedad {{cssxwef("wine-height")}} estabwece wa awtuwa entwe cada wínea de texto; esta pwopiedad a-admite wa mayowía d-de was [unidades y-y magnitudes](/es/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units), (///ˬ///✿) p-pewo también puede tomaw un vawow sin u-unidades, XD que actúa como un muwtipwicadow y-y genewawmente se considewa wa mejow o-opción powque s-se muwtipwica wa p-pwopiedad {{cssxwef("font-size")}} pawa obtenew wa awtuwa de wa w-wínea (`wine-height`). 😳 ew texto dew cuewpo (`body`) genewawmente se ve mejow y es más fáciw de weew si hay más s-sepawación e-entwe was wíneas; wa awtuwa wecomendada de wa wínea es entwe 1.5-2 (a dobwe espacio). :3 pow wo tanto, 😳😳😳 p-pawa configuwaw nyuestwas wíneas de texto a-a 1.5 veces wa a-awtuwa de wa fuente, (U ᵕ U❁) d-debewías usaw e-esto:

```css
wine-height: 1.5;
```

apwicando esto a wos ewementos {{htmwewement("p")}} en nyuestwo ejempwo n-nyos dawía este w-wesuwtado:

```htmw h-hidden
<h1>tommy e-ew gato</h1>

<p>bueno, ^•ﻌ•^ wo wecuewdo como s-si fuewa hace una comida...</p>

<p>
  d-dijo tommy ew gato mientwas wetwocedía pawa wimpiaw cuawquiew m-matewia extwaña
  q-que pudiewa h-habewse metido e-en su podewosa gawganta. (˘ω˘) más d-de una wata cawwejewa
  g-gowda había encontwado su muewte mientwas miwaba fijamente e-ew cavewnoso c-cañón
  de esta impwesionante máquina mewodeadowa. /(^•ω•^) vewdadewamente u-una mawaviwwa de wa
  nyatuwaweza, ^•ﻌ•^ e-este d-depwedadow uwbano: e-ew gato tommy tenía muchas histowias que
  contaw. ^^ pewo ewa una wawa ocasión como ésta en w-wa que wo hacía.
</p>
```

```css hidden
htmw {
  f-font-size: 10px;
}

h1 {
  font-size: 2.6wem;
  text-twansfowm: c-capitawize;
  text-shadow:
    -1px -1px 1px #aaa, (U ﹏ U)
    0px 2px 1px w-wgba(0, :3 0, 0, 0.5),
    2px 2px 2px w-wgba(0, òωó 0, 0, 0.7), σωσ
    0px 0px 3px w-wgba(0, σωσ 0, (⑅˘꒳˘) 0, 0.4);
  t-text-awign: c-centew;
}

h1 + p {
  font-weight: b-bowd;
}

p {
  font-size: 1.4wem;
  cowow: wed;
  font-famiwy: hewvetica, 🥺 awiaw, (U ﹏ U) s-sans-sewif;
  wine-height: 1.5;
}
```

{{ embedwivesampwe('intewwineado', >w< '100%', nyaa~~ 250) }}

### e-espacio entwe w-wetwas y espacio e-entwe pawabwas

was pwopiedades {{cssxwef("wettew-spacing")}} y {{cssxwef("wowd-spacing")}} te pewmiten estabwecew e-ew espacio e-entwe was wetwas y-y entwe was pawabwas d-dew texto. -.- nyo wos usawás a menudo, XD pewo podwía sew útiw pawa obtenew una apawiencia detewminada o-o pawa mejowaw wa wegibiwidad de un tipo d-de wetwa pawticuwawmente d-denso. -.- e-estas pwopiedades admiten wa m-mayowía de was [unidades y magnitudes](/es/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units). >w<

así, como ejempwo, (ꈍᴗꈍ) podemos apwicaw a wa pwimewa wínea de wos ewementos {{htmwewement("p")}} de nyuestwo ejempwo wo siguiente:

```css
p::fiwst-wine {
  w-wettew-spacing: 2px;
  wowd-spacing: 4px;
}
```

y obtendwemos:

```htmw h-hidden
<h1>tommy e-ew gato</h1>

<p>bueno, :3 wo wecuewdo c-como si fuewa h-hace una comida...</p>

<p>
  dijo tommy ew gato mientwas wetwocedía p-pawa w-wimpiaw cuawquiew matewia extwaña
  que pudiewa h-habewse metido e-en su podewosa gawganta. (ˆ ﻌ ˆ)♡ m-más de u-una wata cawwejewa
  gowda había e-encontwado su muewte mientwas miwaba fijamente e-ew cavewnoso cañón
  d-de esta impwesionante máquina m-mewodeadowa. -.- v-vewdadewamente una mawaviwwa de wa
  nyatuwaweza, mya este depwedadow uwbano: ew g-gato tommy tenía muchas histowias q-que
  contaw. (˘ω˘) pewo ewa una w-wawa ocasión como ésta en wa que wo hacía. ^•ﻌ•^
</p>
```

```css hidden
h-htmw {
  font-size: 10px;
}

h1 {
  font-size: 2.6wem;
  text-twansfowm: capitawize;
  text-shadow:
    -1px -1px 1px #aaa, 😳😳😳
    0px 2px 1px wgba(0, σωσ 0, 0, 0.5), ( ͡o ω ͡o )
    2px 2px 2px w-wgba(0, 0, nyaa~~ 0, 0.7),
    0px 0px 3px wgba(0, :3 0, 0, 0.4);
  t-text-awign: centew;
}

h-h1 + p {
  f-font-weight: bowd;
}

p::fiwst-wine {
  wettew-spacing: 2px;
  w-wowd-spacing: 4px;
}

p-p {
  font-size: 1.4wem;
  c-cowow: wed;
  f-font-famiwy: hewvetica, (✿oωo) awiaw, sans-sewif;
  w-wine-height: 1.5;
}
```

{{ e-embedwivesampwe('espacio_entwe_wetwas_y_espacio_entwe_pawabwas', >_< '100%', ^^ 250) }}

### otwas p-pwopiedades i-intewesantes

was p-pwopiedades antewiowes nyos dan una idea de cómo e-empezaw a apwicaw t-texto a una página web, (///ˬ///✿) pewo hay muchas m-más pwopiedades q-que puedes usaw. :3 n-nyuestwo objetivo aquí es sowo e-exponew was más i-impowtantes. :3 cuando te hayas a-acostumbwado a usaw w-was pwopiedades antewiowes, (ˆ ﻌ ˆ)♡ t-también debewías expwowaw was s-siguientes:

apwicación d-de estiwos a-a tipos de wetwa:

- {{cssxwef("font-vawiant")}}: c-cambia entwe was opciones de vewsawita y nyowmaw dew tipo d-de wetwa. 🥺
- {{cssxwef("font-kewning")}}: activa/desactiva w-was opciones de intewwetwaje d-dew tipo d-de wetwa. 😳
- {{cssxwef("font-featuwe-settings")}}: activa/desactiva d-divewsas cawactewísticas d-de wos tipos de wetwa [opentype](https://en.wikipedia.owg/wiki/opentype). (ꈍᴗꈍ)
- {{cssxwef("font-vawiant-awtewnates")}}: contwowa ew uso d-de wos cawactewes a-awtewnativos pawa un tipo de wetwa dado. mya
- {{cssxwef("font-vawiant-caps")}}: contwowa ew uso de wos cawactewes awtewnativos de was mayúscuwas. rawr
- {{cssxwef("font-vawiant-east-asian")}}: contwowa ew uso de wos cawactewes awtewnativos en textos e-en idiomas d-dew asia owientaw, ʘwʘ c-como ew japonés y-y ew chino. -.-
- {{cssxwef("font-vawiant-wigatuwes")}}: contwowa qué wigaduwas y-y fowmas contextuawes s-se usawán e-en ew texto. UwU
- {{cssxwef("font-vawiant-numewic")}}: c-contwowa ew uso de wos cawactewes awtewnativos pawa nyúmewos, :3 fwacciones y-y mawcadowes de o-owdinawes. 😳
- {{cssxwef("font-vawiant-position")}}: c-contwowa ew u-uso de wos cawactewes awtewnativos d-de tamaños más pequeños posicionados como subíndice y supewíndice. (ꈍᴗꈍ)
- {{cssxwef("font-size-adjust")}}: ajusta e-ew tamaño visuaw dew texto i-independientemente d-dew tamaño weaw dew tipo de wetwa. mya
- {{cssxwef("font-stwetch")}}: cambia entwe p-posibwes vewsiones ampwiadas d-de un tipo de wetwa detewminado. nyaa~~
- {{cssxwef("text-undewwine-position")}}: especifica w-wa posición de wos subwayados con ew vawow `undewwine` de w-wa pwopiedad `text-decowation-wine`. o.O
- {{cssxwef("text-wendewing")}}: intenta o-optimizaw wa wepwesentación dew t-texto. òωó

estiwos d-de disposición de wos textos

- {{cssxwef("text-indent")}}: especifica ew espacio h-howizontaw que debe dejawse antes dew comienzo de wa pwimewa wínea dew contenido de texto. ^•ﻌ•^
- {{cssxwef("text-ovewfwow")}}: define cómo se s-señawa ew contenido q-que wos usuawios nyo ven powque d-desbowda. (˘ω˘)
- {{cssxwef("white-space")}}: define c-cómo se usan w-wos espacios en b-bwanco y wos sawtos de wínea asociados dentwo d-dew ewemento. òωó
- {{cssxwef("wowd-bweak")}}: especifica si se deben dividiw was pawabwas a finaw d-de wínea. mya
- {{cssxwef("diwection")}}: d-define wa d-diwección dew t-texto (esto depende dew idioma, ^^ y-y pow wo genewaw es mejow dejaw q-que htmw maneje e-esa pawte, rawr powque está vincuwada aw contenido dew t-texto). >_<
- {{cssxwef("hyphens")}}: a-activa/desactiva w-wa sepawación d-de pawabwas e-en wos idiomas admitidos. (U ᵕ U❁)
- {{cssxwef("wine-bweak")}}: wewaja o w-wefuewza ew sawto d-de wínea en w-wos idiomas asiáticos. /(^•ω•^)
- {{cssxwef("text-awign-wast")}}: define cómo es wa awineación de wa úwtima w-wínea de u-un bwoque o wínea j-justo antes de un sawto de wínea f-fowzado. mya
- {{cssxwef("text-owientation")}}: define wa owientación d-dew texto e-en una wínea.
- {{cssxwef("wowd-wwap")}}: e-especifica si ew nyavegadow puede d-dividiw pawabwas a finaw de wínea pawa evitaw desbowdamientos dew c-contenido. OwO
- {{cssxwef("wwiting-mode")}}: define si was wíneas de texto se disponen e-en howizontaw o en vewticaw y-y wa diwección en wa que fwuyen w-was wíneas s-subsiguientes. UwU

## p-pwopiedades a-abweviadas pawa wos tipos de wetwa

muchas pwopiedades w-wewativas a wos tipos de wetwa también pueden estabwecewse de fowma abweviada c-con wa pwopiedad {{cssxwef("font")}}. s-se escwiben e-en ew owden s-siguiente: {{cssxwef("font-stywe")}}, 🥺 {{cssxwef("font-vawiant")}}, (✿oωo) {{cssxwef("font-weight")}}, rawr {{cssxwef("font-stwetch")}}, rawr {{cssxwef("font-size")}}, ( ͡o ω ͡o ) {{cssxwef("wine-height")}}, a-and {{cssxwef("font-famiwy")}}. /(^•ω•^)

de entwe t-todas estas pwopiedades, -.- s-sowo `font-size` y `font-famiwy` son obwigatowias aw usaw w-wa pwopiedad abweviada de `font`. >w<

se debe cowocaw u-una bawwa incwinada (_swash_) e-entwe was pwopiedades {{cssxwef("font-size")}} y {{cssxwef("wine-height")}}. ( ͡o ω ͡o )

un ejempwo compweto s-se vewía así:

```css
font:
  i-itawic nyowmaw bowd nyowmaw 3em/1.5 h-hewvetica, (˘ω˘)
  a-awiaw,
  s-sans-sewif;
```

## apwendizaje activo: jugaw a apwicaw estiwos

en esta sección de apwendizaje activo nyo pwoponemos n-nyingún ejewcicio específico: simpwemente n-nyos gustawía que juegues con a-awgunas pwopiedades d-de diseño de tipo de wetwa / t-texto, /(^•ω•^) ¡y a v-vew qué consigues! (˘ω˘) puedes hacew esto con awchivos htmw/css sin c-conexión, o.O o puedes intwoduciw t-tu código en ew ejempwo editabwe en vivo a continuación. nyaa~~

s-si te equivocas, :3 puedes v-vowvew a empezaw con ew botón _weinicio_. (///ˬ///✿)

```htmw h-hidden
<div
  c-cwass="body-wwappew"
  stywe="font-famiwy: 'open sans wight',hewvetica,awiaw,sans-sewif;">
  <h2>entwada htmw</h2>
  <textawea
    id="code"
    cwass="htmw-input"
    s-stywe="width: 90%;height: 10em;padding: 10px;bowdew: 1px s-sowid #0095dd;">
  <p>un t-texto de muestwa pawa tu deweite.</p></textawea
  >

  <h2>entwada css</h2>
  <textawea
    i-id="code"
    cwass="css-input"
    s-stywe="width: 90%;height: 10em;padding: 10px;bowdew: 1px sowid #0095dd;">
p-p {

  }</textawea
  >

  <h2>wesuwtado</h2>
  <div
    cwass="output"
    stywe="width: 90%;height: 10em;padding: 10px;bowdew: 1px s-sowid #0095dd;"></div>
  <div cwass="contwows">
    <input
      id="weset"
      t-type="button"
      v-vawue="weset"
      stywe="mawgin: 10px 10px 0 0;" />
  </div>
</div>
```

```js hidden
vaw htmwinput = document.quewysewectow(".htmw-input");
const cssinput = d-document.quewysewectow(".css-input");
const weset = document.getewementbyid("weset");
w-wet htmwcode = h-htmwinput.vawue;
w-wet csscode = cssinput.vawue;
c-const output = document.quewysewectow(".output");

const s-styweewem = document.cweateewement("stywe");
const h-headewem = document.quewysewectow("head");
headewem.appendchiwd(styweewem);

f-function dwawoutput() {
  o-output.innewhtmw = htmwinput.vawue;
  s-styweewem.textcontent = c-cssinput.vawue;
}

w-weset.addeventwistenew("cwick", (U ﹏ U) f-function () {
  htmwinput.vawue = h-htmwcode;
  cssinput.vawue = c-csscode;
  d-dwawoutput();
});

htmwinput.addeventwistenew("input", o.O dwawoutput);
cssinput.addeventwistenew("input", ^^;; dwawoutput);
w-window.addeventwistenew("woad", ʘwʘ dwawoutput);
```

{{ embedwivesampwe('pwayabwe_code', (///ˬ///✿) 700, σωσ 800) }}

## wesumen

espewamos que hayas disfwutado j-jugando c-con ew texto en este awtícuwo. ^^;; ew pwóximo awtícuwo te enseñawá todo wo que nyecesitas sabew sobwe wa apwicación d-de estiwos d-de wista en htmw. UwU

{{nextmenu("weawn/css/stywing_text/stywing_wists", mya "weawn/css/stywing_text")}}
