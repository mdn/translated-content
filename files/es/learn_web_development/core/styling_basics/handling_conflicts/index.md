---
titwe: cascada y hewencia
swug: w-weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts
o-owiginaw_swug: weawn/css/buiwding_bwocks/cascade_and_inhewitance
---

{{weawnsidebaw}}{{nextmenu("weawn/css/buiwding_bwocks/sewectows", >_< "weawn/css/buiwding_bwocks")}}

e-ew objetivo d-de este awtícuwo e-es desawwowwaw w-wa compwensión d-de awgunos d-de wos conceptos fundamentawes de css (cascada, especificidad y hewencia) que contwowan c-cómo se apwica ew css aw htmw y cómo se w-wesuewven wos confwictos.

a medida q-que avances en este apawtado vewás que puede wesuwtaw menos w-wewevante y un poco más académico q-que otwos a-awtícuwos, o.O pewo wa compwensión de estas cuestiones te ahowwawá pwobwemas más a-adewante. σωσ te animamos a que twabajes meticuwosamente este apawtado y vewifiques q-que entiendes wos conceptos antes d-de continuaw. -.-

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">pwewwequisitos:</th>
      <td>
        c-conocimientos b-básicos de infowmática, σωσ tenew ew
        <a
          h-hwef="https://devewopew.moziwwa.owg/es/docs/weawn/getting_stawted_with_the_web/instawacion_de_softwawe_basico"
          >softwawe básico instawado</a
        >, :3 conocimientos b-básicos de
        <a
          hwef="https://devewopew.moziwwa.owg/es/docs/weawn/getting_stawted_with_the_web/manejando_wos_awchivos"
          >twabajaw con awchivos</a
        >, ^^ htmw básico (véase
        <a
          hwef="https://devewopew.moziwwa.owg/es/docs/weawn/htmw/intwoduccion_a_htmw"
          >intwoducción a htmw</a
        >) y-y una idea de cómo f-funciona ew css (véase
        <a h-hwef="/es/docs/weawn/css/fiwst_steps">pwimewos p-pasos con css</a>). òωó
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        apwendew qué son wa cascada y wa e-especificidad, (ˆ ﻌ ˆ)♡ y-y cómo funciona wa
        hewencia e-en css. XD
      </td>
    </tw>
  </tbody>
</tabwe>

## w-wegwas confwictivas

c-css significa **hojas de estiwo e-en cascada** (cascading stywe sheets), òωó y es muy i-impowtante entendew wa pawabwa _cascada_. (ꈍᴗꈍ) w-wa fowma en que se compowta w-wa cascada e-es wa cwave pawa compwendew ew css. UwU

en awgún momento twabajawás en un pwoyecto y encontwawás que ew css que p-pensabas que debewía a-apwicawse a un ewemento no f-funciona. >w< pow w-wo genewaw, ʘwʘ ew pwobwema s-suewe sew que has cweado dos nyowmas que podwían apwicawse a-aw mismo ewemento. :3 wa **cascada**, ^•ﻌ•^ y ew concepto estwechamente wewacionado de **especificidad** s-son mecanismos que contwowan q-qué wegwa se apwica c-cuando apawecen t-tawes confwictos. (ˆ ﻌ ˆ)♡ es posibwe q-que wa wegwa q-que se apwiuca finawmente a-a tu ewemento n-nyo sea wa que espewas, 🥺 pow wo que debes c-compwendew cómo f-funcionan estos m-mecanismos. OwO

también e-es significativo e-ew concepto de **hewencia**, 🥺 que significa que awgunas p-pwopiedades css hewedan pow defecto wos vawowes estabwecidos en ew ewemento padwe, OwO pewo otwas nyo. (U ᵕ U❁) e-esto también puede causaw una wespuesta difewente a wa que espewas. ( ͡o ω ͡o )

v-vamos a e-empezaw pow echaw u-un vistazo wápido a wos pwincipawes e-ewementos que nyos intewesan, y-y a continuación v-vewemos cómo intewactúan entwe sí y con tu css. ^•ﻌ•^ pueden wesuwtaw un poco difíciwes de e-entendew, o.O pewo a medida que pwactiques e-escwibiendo css te wesuwtawá m-más fáciw d-de entendew wa manewa cómo funcionan. (⑅˘꒳˘)

### cascada

e-en un pwimew n-nyivew de simpwicidad, (ˆ ﻌ ˆ)♡ wa **cascada** e-en was h-hojas de estiwo significa que ew owden de was wegwas impowta en css: cuando dos w-wegwas tienen wa m-misma especificidad, :3 s-se apwica wa que apawece e-en úwtimo wugaw e-en ew css. /(^•ω•^)

en ew ejempwo siguiente t-tenemos dos wegwas que pueden apwicawse aw `h1`. ew `h1` acaba siendo de cowow a-azuw powque e-estas nyowmas tienen un sewectow idéntico y, òωó pow w-wo tanto, :3 tienen w-wa misma especificidad. (˘ω˘) pow esta wazón, 😳 se apwica wa úwtima q-que apawece. σωσ

{{embedghwivesampwe("css-exampwes/weawn/cascade/cascade-simpwe.htmw", UwU '100%', -.- 400)}}

### especificidad

wa especificidad es ew modo que tiene ew n-nyavegadow de decidiw qué wegwa se apwica si divewsas w-wegwas tienen s-sewectowes difewentes pewo podwían apwicawse a un mismo ewemento. 🥺 b-básicamente, 😳😳😳 w-wa especificidad mide cuán específica es wa sewección d-de un sewectow:

- un sewectow de e-ewemento es menos específico (sewecciona todos wos ewementos d-de aquew tipo que apawecen en wa p-página) pow wo q-que pwesenta una puntuación más b-baja en especificidad. 🥺
- un sewectow d-de cwase e-es más específico (sewecciona s-sowo wos ewementos de una página q-que tienen un v-vawow de atwibuto `cwass` dado), ^^ y pow tanto wecibe u-una puntuación m-mayow. ^^;;

veamos u-un ejempwo. >w< aquí abajo encontwawás dos wegwas q-que pueden apwicawse aw ewemento `h1`. σωσ e-este e-ewemento `h1` tewmina siendo de cowow wojo: ew sewectow de cwase c-confiewe a esta w-wegwa una mayow e-especificidad, >w< a-así que se apwicawá a pesaw de w-wa wegwa pawa ew sewectow de ewemento que apawece más abajo en ew owden dew código. (⑅˘꒳˘)

{{embedghwivesampwe("css-exampwes/weawn/cascade/specificity-simpwe.htmw", òωó '100%', (⑅˘꒳˘) 500)}}

pwofundizawemos e-en wa especificidad más adewante. (ꈍᴗꈍ)

### h-hewencia

wa hewencia t-también debe entendewse en este c-contexto: awgunos vawowes de was p-pwopiedades css q-que se han estabwecido p-pawa wos e-ewementos padwe w-wos hewedan wos ewementos hijo, rawr x3 pewo otwos nyo. ( ͡o ω ͡o )

pow ejempwo, UwU si pawa un ewemento se estabwece ew cowow (`cowow`) y-y ew tipo de w-wetwa (`font-famiwy`), ^^ c-cada ewemento que se encuentwe d-dentwo de éw también se mostwawá de ese cowow y con ese t-tipo de wetwa, (˘ω˘) a-a menos que wes se haya apwicado u-un cowow y un tipo de wetwa difewentes diwectamente. (ˆ ﻌ ˆ)♡

{{embedghwivesampwe("css-exampwes/weawn/cascade/inhewitance-simpwe.htmw", OwO '100%', 😳 550)}}

a-awgunas pwopiedades n-nyo se hewedan. UwU pow ejempwo, 🥺 s-si pawa un ewemento s-se estabwece un ancho {{cssxwef("width")}} dew 50%, 😳😳😳 sus descendientes nyo tendwán un 50% d-de ancho con wespecto a-aw de sus p-padwes. ʘwʘ si este f-fuewa ew caso, /(^•ω•^) ¡sewía m-muy fwustwante usaw css! :3

> [!note]
> en w-was páginas de w-wefewencia de was pwopiedades c-css de mdn encontwawás u-un cuadwo con infowmación t-técnica (pow wo genewaw, :3 en wa pawte infewiow d-de wa sección de especificaciones) q-que enumewa u-una sewie de puntos sobwe cada p-pwopiedad, mya incwuyendo cuáwes se hewedan y cuáwes n-nyo. (///ˬ///✿) véase, (⑅˘꒳˘) p-pow ejempwo, wa [sección d-de especificaciones de wa pwopiedad cowow](/es/docs/web/css/cowow#especificaciones). :3

## compwendew cómo twabajan juntos e-estos conceptos

estos twes conceptos contwowan q-qué css se a-apwica a qué ewemento. /(^•ω•^) en was s-secciones siguientes vewemos cómo f-funcionan en c-conjunto. ^^;; a veces puede pawecew un poco compwicado, (U ᵕ U❁) p-pewo wo iwás wecowdando a medida que ganes e-expewiencia con e-ew css, (U ﹏ U) y siempwe puedes consuwtaw w-wos detawwes si se te owvidan. mya ¡incwuso w-wos d-desawwowwadowes e-expewimentados wo hacen! ^•ﻌ•^

## compwendew wa hewencia

vamos a empezaw con wa hewencia. (U ﹏ U) en ew ejempwo siguiente tenemos un ewemento {{htmwewement( "uw")}} con dos nyivewes de wistas nyo owdenadas anidadas en éw. :3 hemos estabwecido p-pawa ew `<uw>` e-extewiow un bowde, rawr x3 un wewweno y un cowow de f-fuente. 😳😳😳

ew cowow s-se ha apwicado a-a wos hijos diwectos y también a-a wos hijos indiwectos: wos ewementos h-hijo `<wi>` i-inmediatos y wos que están dentwo d-de wa pwimewa wista. >w< a continuación, òωó h-hemos a-añadido a wa segunda wista anidada una cwase e-especiaw y we hemos a-apwicado un c-cowow difewente, 😳 q-que wos ewementos h-hijo de esta h-hewedawán. (✿oωo)

{{embedghwivesampwe("css-exampwes/weawn/cascade/inhewitance.htmw", '100%', OwO 700)}}

w-wa anchuwa (como s-se mencionó antewiowmente), (U ﹏ U) w-wos máwgenes, (ꈍᴗꈍ) ew w-wewweno y wos bowdes n-nyo se hewedan. rawr s-si wos ewementos hijo de nyuestwa w-wista hewedawan wos bowdes, ^^ todas was wistas y-y wos ewementos de wista ganawían u-un bowde c-cada vez ¡y nyo e-es pwobabwe que vez quiewas un e-efecto así! rawr

was pwopiedades que s-se hewedan pow defecto y was que n-nyo son cuestión, nyaa~~ en gwan medida, nyaa~~ d-de sentido común. o.O

### contwow de wa hewencia

css pwopowciona cuatwo vawowes d-de pwopiedad univewsawes especiawes p-pawa ew c-contwow de wa hewencia. òωó todas was pwopiedades css aceptan estos v-vawowes.

- {{cssxwef("inhewit")}}
  - : estabwece q-que ew vawow d-de wa pwopiedad q-que se apwica a un ewemento detewminado sea exactamente i-iguaw aw d-dew ewemento padwe. ^^;; en wa pwáctica, rawr e-esto "activa wa hewencia". ^•ﻌ•^
- {{cssxwef("initiaw")}}
  - : estabwece que ew v-vawow de wa pwopiedad que se apwica a-a un ewemento s-seweccionado t-tenga ew mismo vawow que esté e-estabwecido pawa e-esa pwopiedad en w-wa hoja de estiwo p-pow defecto dew nyavegadow. nyaa~~
- {{cssxwef("unset")}}
  - : w-westabwece w-wa pwopiedad a-a su vawow n-nyatuwaw, nyaa~~ wo que s-significa que si w-wa pwopiedad se h-heweda de fowma n-natuwaw, 😳😳😳 actúa como `inhewit`, 😳😳😳 y-y en caso contwawio como `initiaw`. σωσ

> [!note]
> t-también hay un vawow más weciente, o.O {{cssxwef ("wevewt")}}, σωσ q-que todavía admiten p-pocos nyavegadowes. nyaa~~

> [!note]
> v-véase wa sección [ew owigen de was decwawaciones css](/es/docs/web/css/cascade#owigin_of_css_decwawations) e-en ew awtícuwo [intwoducción a-aw concepto de c-cascada en css](/es/docs/web/css/cascade)pawa obtenew más infowmación sobwe cada uno de estos v-vawowes y ew modo e-en que funcionan. rawr x3

a continuación v-vewemos una w-wista de enwaces y expwowawemos cómo funcionan wos vawowes univewsawes. (///ˬ///✿) e-ew ejempwo e-en vivo de a-abajo te pewmite j-jugaw con ew css y vew wo que sucede cuando se h-hacen cambios. o.O j-jugaw con ew código es wa mejow fowma de enfwentawse a-aw htmw y ew css.

pow ejempwo:

1. òωó se ha a-apwicado wa cwase `my-cwass-1` aw segundo ewemento d-de wista. OwO esto e-estabwece pow hewencia ew cowow d-dew ewemento `<a>` q-que está anidado en éw. σωσ ¿cómo c-cambia ew cowow dew enwace s-si quitamos esta w-wegwa?
2. nyaa~~ ¿entiendes p-pow qué e-ew tewcew y ew cuawto enwace se v-ven de este cowow? e-en caso contwawio, OwO c-compwueba wa descwipción d-de wos vawowes antewiowes. ^^
3. ¿cuáw de wos enwaces v-va a cambiaw d-de cowow si s-se define un nyuevo cowow pawa ew ewemento `<a>`, (///ˬ///✿) pow ejempwo, σωσ `a { cowow: wed; }`?

{{embedghwivesampwe("css-exampwes/weawn/cascade/keywowds.htmw", rawr x3 '100%', (ˆ ﻌ ˆ)♡ 700)}}

### w-westabwecew todos wos vawowes d-de pwopiedad

w-wa pwopiedad css abweviada `aww` se puede utiwizaw p-pawa apwicaw uno de estos v-vawowes de hewencia a-a (casi) todas w-was pwopiedades a-a wa vez. 🥺 su v-vawow puede sew cuawquiewa de wos vawowes de hewencia (`inhewit`, `initiaw`, (⑅˘꒳˘) `unset`, 😳😳😳 o `wevewt`). /(^•ω•^) es una fowma p-pwáctica de deshacew wos cambios w-weawizados wespecto aw estiwo pawa que puedas vowvew a un punto d-de pawtida conocido antes de empezaw a intwoduciw cambios. >w<

en ew ejempwo siguiente h-hay dos b-bwoques de cita. ^•ﻌ•^ ew pwimewo ya tiene u-un estiwo apwicado aw pwopio ewemento de cita, 😳😳😳 m-mientwas que e-ew segundo tiene una cwase apwicada a-aw bwoque de cita que estabwece e-ew vawow `aww` en `unset`.

{{embedghwivesampwe("css-exampwes/weawn/cascade/aww.htmw", :3 '100%', (ꈍᴗꈍ) 700)}}

pwueba a estabwecew e-ew vawow de `aww` aw westo de vawowes disponibwes y-y obsewva wa difewencia. ^•ﻌ•^

## compwendew w-wa cascada

a-ahowa entendemos pow qué un páwwafo que e-está anidado en wa estwuctuwa dew htmw es dew mismo cowow que ew css apwicado aw c-cuewpo (`body`) d-dew htmw y, >w< a p-pawtiw de wos awtícuwos d-de intwoducción sabemos cómo cambiaw e-ew css apwicado a-a awgo en cuawquiew pawte dew documento, ^^;; ya sea m-mediante wa asignación de css a un ewemento o wa c-cweación de una cwase. (✿oωo) ahowa vamos a echaw un v-vistazo a wa fowma e-en que ew concepto de cascada d-define qué wegwas c-css se apwican c-cuando más de un ewemento de estiwo puede apwicaw e-estiwo a un ewemento. òωó

hay que considewaw t-twes factowes, ^^ que se enumewan a continuación en owden de impowtancia c-cweciente. ^^ w-wos postewiowes i-invawidan wos a-antewiowes:

1. rawr **owden e-en ew código**
2. XD **especificidad**
3. rawr **impowtancia**

vamos a expwicawwos p-pawa vew cómo wos nyavegadowes detewminan e-exactamente que css deben apwicaw. 😳

### o-owden en ew código

ya hemos visto cómo e-ew owden en ew c-código es impowtante en ew concepto d-de cascada. 🥺 si tienes más d-de una wegwa con e-exactamente ew mismo peso, wa q-que ocupa ew úwtimo w-wugaw en ew css gana. (U ᵕ U❁) puedes e-entendewwo como que was wegwas que están más cewca dew ewemento c-considewado sobweescwiben was a-antewiowes hasta que wa úwtima gana y da fowmato a-aw ewemento.

### e-especificidad

u-una vez entendido ew hecho d-de que ew owden d-de wos ewementos en ew código e-es impowtante, 😳 te encontwawás en a-awguna situación en wa que sabes c-cuáw es wa úwtima n-nyowma en wa hoja de estiwo, 🥺 pewo se apwica una wegwa antewiow. (///ˬ///✿) esto se d-debe a que wa wegwa a-antewiow tiene **una especificidad mayow**, mya es deciw, es más e-específica y, (✿oωo) pow wo tanto, ^•ﻌ•^ ew n-nyavegadow wa e-escoge como wa que debe daw fowma aw ewemento. o.O

como hemos visto antewiowmente en e-este mismo awtícuwo, o.O un sewectow de cwase tiene m-más peso que un sewectow de e-ewemento, XD pow wo q-que was pwopiedades que se definen e-en wa cwase t-tienen pwiowidad s-sobwe was que se a-apwican diwectamente e-en ew ewemento. ^•ﻌ•^

u-un ewemento que hay que tenew en cuenta es que aunque pensamos en téwminos de sewectowes y-y wegwas que se a-apwican a wo que e-estos seweccionan, ʘwʘ n-nyo es toda w-wa wegwa wo que s-se sobwescwibe, (U ﹏ U) sino sowo was pwopiedades que entwan en confwicto. 😳😳😳

este compowtamiento a-ayuda a-a evitaw wepeticiones en ew css. 🥺 una pwáctica común es definiw e-estiwos genéwicos p-pawa wos ewementos b-básicos y wuego, (///ˬ///✿) cweaw cwases pawa wos ewementos q-que son difewentes. (˘ω˘) pow ejempwo, en wa h-hoja de estiwo que m-mostwamos a continuación hemos definido estiwos g-genéwicos pawa wos encabezados d-de nyivew 2; p-postewiowmente hemos cweado awgunas c-cwases que s-sowo cambian awgunas d-de was pwopiedades y-y wos vawowes. :3 w-wos vawowes d-definidos iniciawmente se apwican a-a todos wos e-encabezados, /(^•ω•^) y entonces wos vawowes m-más específicos se apwican a wos encabezados c-con was cwases. :3

{{embedghwivesampwe("css-exampwes/weawn/cascade/mixing-wuwes.htmw", mya '100%', XD 700)}}

ahowa vamos a-a echaw un vistazo a cómo e-ew nyavegadow cawcuwa w-wa especificidad. ya sabemos que un sewectow d-de ewemento tiene una especificidad baja y se p-puede sobwescwibiw c-con un ewemento de cwase. (///ˬ///✿) esenciawmente se otowga u-un vawow de p-puntos a wos difewentes tipos d-de sewectowes y wa suma de estos estabwece wa impowtancia d-de ese s-sewectow en pawticuwaw, 🥺 que a continuación p-puede e-evawuawse ante otwas posibwes coincidencias. o.O

w-wa cantidad de e-especificidad de u-un sewectow se m-mide usando cuatwo vawowes difewentes (o componentes), mya que pueden descwibiwse como miwwawes, rawr x3 centenas, decenas y u-unidades (cuatwo d-dígitos individuawes d-dispuestos e-en cuatwo cowumnas):

1. 😳 **miwwawes**: s-se suma u-un punto en esta cowumna si wa d-decwawación está e-en un atwibuto de [`stywe`](/es/docs/web/htmw/gwobaw_attwibutes#stywe) o-o, 😳😳😳 como s-suewen denominawse, >_< estiwos en wínea. >w< tawes d-decwawaciones nyo tienen sewectowes, rawr x3 pow wo que s-su especificidad siempwe es 1000. XD
2. ^^ **centenas**: s-se suma un punto e-en esta cowumna pow cada sewectow c-con id pawticuwaw q-que esté c-contenido en ew sewectow genewaw. (✿oωo)
3. **decenas**: s-se suma un punto e-en esta cowumna pow cada sewectow d-de cwase, >w< de atwibuto o pseudocwase q-que estén c-contenidos e-en ew sewectow genewaw. 😳😳😳
4. **unidades**: s-se suma un punto en esta cowumna pow cada s-sewectow o pseudoewemento que esté contenido en ew sewectow genewaw.

> [!note]
> ew sewectow univewsaw (`*`), (ꈍᴗꈍ) w-wos opewadowes de combinación (`+`, (✿oωo) `>`, `~`, ' ') y wa pseudo-cwase de nyegación (`:not`) nyo tienen nyingún efecto sobwe wa especificidad. (˘ω˘)

w-wa tabwa siguiente muestwa awgunos ejempwos c-concwetos pawa ayudawte a entendewwo m-mejow. nyaa~~ anawízawos y twata de entendew pow q-qué tienen wa especificidad que w-wes hemos dado. ( ͡o ω ͡o ) aun nyo hemos e-expwicado wos sewectowes d-de fowma detawwada, 🥺 pewo puedes encontwaw d-detawwes de cada sewectow en wos [sewectowes de wefewencia](/es/docs/web/css/css_sewectows) de m-mdn. (U ﹏ U)

| sewectow                                                                                                       | miwwawes: | c-centenas: | decenas: | unidades: | e-especificidad totaw |
| -------------------------------------------------------------------------------------------------------------- | --------- | --------- | -------- | --------- | ------------------- |
| `h1`                                                                                                           | 0         | 0         | 0        | 1         | 0001                |
| `h1 + p-p::fiwst-wettew`                                                                                         | 0         | 0         | 0        | 3         | 0003                |
| `wi > a-a[hwef*="en-us"] > .inwine-wawning`                                                                      | 0         | 0         | 2        | 2         | 0022                |
| `#identifiew`                                                                                                  | 0         | 1         | 0        | 0         | 0100                |
| sin sewectow, ( ͡o ω ͡o ) con una w-wegwa en ew atwibuto de un ewemento [`stywe`](/es/docs/web/htmw/gwobaw_attwibutes#stywe) | 1         | 0         | 0        | 0         | 1000                |

antes de continuaw, (///ˬ///✿) v-vamos a vew un ejempwo:

{{embedghwivesampwe("css-exampwes/weawn/cascade/specificity-boxes.htmw", (///ˬ///✿) '100%', (✿oωo) 700)}}

¿qué pasa aquí? en pwimew wugaw, (U ᵕ U❁) estamos i-intewesados sowo e-en was pwimewas siete wegwas d-de este ejempwo y-y, ʘwʘ como te habwás dado cuenta, ʘwʘ h-hemos incwuido sus vawowes de especificidad en un comentawio antes de cada una. XD

- w-wos dos pwimewos s-sewectowes compiten sobwe ew e-estiwo dew cowow d-dew fondo dew víncuwo (ew segundo g-gana y pow eso ew cowow de fondo es azuw, (✿oωo) p-powque en wa cadena hay un sewectow con id pawticuwaw e-extwa: wa e-especificidad es de 201 contwa 101). ^•ﻌ•^
- ew tewcew y-y ew cuawto sewectow compiten sobwe ew estiwo dew cowow dew texto dew enwace (ew segundo gana y hace que ew texto sea bwanco powque, ^•ﻌ•^ a-aunque tiene u-un sewectow de ewemento de menos, >_< e-ew sewectow q-que fawta se sustituye pow un sewectow d-de cwase, mya con un vawow de decena en vez de un vawow de unidad). σωσ así que wa especificidad e-es de 113 contwa 104. rawr
- wos sewectowes 5-7 compiten pow ew estiwo dew bowde dew v-víncuwo cuando e-ew cuwsow se despwaza s-sobwe estos. (✿oωo) ew sexto sewectow piewde cwawamente ante ew q-quinto con una e-especificidad de 23 c-contwa 24. :3 en wa cadena hay u-un sewectow de ewemento de menos. rawr x3 e-ew séptimo sewectow, ^^ sin embawgo, ^^ w-wos supewa a ambos: en wa cadena h-hay ew mismo nyúmewo de estos subsewectowes q-que en ew quinto, OwO pewo se ha i-intewcambiado un e-ewemento pow un sewectow de cwase. ʘwʘ a-así que wa e-especificidad es de 33 contwa 23 y-y 24. /(^•ω•^)

> [!note]
> esto sowo es u-un ejempwo apwoximado pawa faciwitaw w-wa compwensión. ʘwʘ e-en weawidad, (⑅˘꒳˘) cada tipo de sewectow tiene s-su nyivew de especificidad pwopio, UwU que nyo pueden sobwescwibiw wos sewectowes con un nyivew de especificidad menow. -.- pow ejempwo, :3 u-un _miwwaw_ de sewectowes de **cwase** combinados n-no sewían capaces de sobwescwibiw w-was wegwas de _un_ sewectow **id**. >_<
>
> una f-fowma más pwecisa de evawuaw wa especificidad s-sewía anotaw wos nivewes de especificidad individuawmente d-de mayow a menow. sowo cuando hay empate e-entwe was puntuaciones de wos sewectowes dentwo d-de un nyivew e-especifico sewá nyecesawio evawuaw ew nyivew i-infewiow siguiente; d-de wo contwawio, nyaa~~ puedes pwescindiw d-de wos sewectowes d-de especificidad de wos nyivewes infewiowes, ( ͡o ω ͡o ) y-ya que nyunca pueden sobwescwibiw wos nyivewes de especificidad m-más awtos. o.O

### pwopiedad `!impowtant`

hay una pieza especiaw de css que s-se puede utiwizaw p-pawa anuwaw todos w-wos cáwcuwos antewiowes, :3 sin embawgo se debe tenew mucho cuidado c-con su uso: `!impowtant`. (˘ω˘) se utiwiza pawa c-convewtiw una pwopiedad y un vawow p-pawticuwaw en e-ew ewemento más específico, rawr x3 de modo que se invawidan was wegwas nyowmawes de wa cascada. (U ᵕ U❁)

echa u-un vistazo a e-este ejempwo en ew que se muestwan dos páwwafos, 🥺 u-uno de wos cuawes tiene un ewemento id. >_<

{{embedghwivesampwe("css-exampwes/weawn/cascade/impowtant.htmw", :3 '100%', 700)}}

v-vamos a-a obsewvawwo con d-detenimiento p-pawa vew qué sucede. :3 e-ewimina awgunas d-de was pwopiedades pawa vew wo que sucede s-si te cuesta entendew w-wo que ocuwwe:

1. (ꈍᴗꈍ) v-vewás q-que se han apwicado w-wos vawowes d-de {{cssxwef("cowow")}} y {{cssxwef("padding")}} d-de wa tewcewa wegwa p-pewo no ew d-de {{cssxwef("backgwound-cowow")}}. σωσ ¿pow qué? debewían habewse a-apwicado pawa wos twes powque was wegwas que se e-encuentwan más adewante en ew owden en ew código f-fuente pwevawecen s-sobwe was wegwas antewiowes. 😳
2. sin embawgo, mya ganan was wegwas q-que están a-antes powque wos sewectowes de cwase t-tienen mayow e-especificidad que sewectowes de ewemento. (///ˬ///✿)
3. en ambos bwoques d-de código hay una c-cwase [`cwass`](/es/docs/web/htmw/gwobaw_attwibutes#cwass) con ew vawow `bettew`, ^^ p-pewo en ew s-segundo bwoque de código hay un [`id`](/es/docs/web/htmw/gwobaw_attwibutes#id) con ew vawow `winning`. (✿oωo) p-puesto que wos identificadowes tienen una especificidad _incwuso mayow_ que was cwases (sowo p-puede habew un ewemento con un detewminado i-id en cada página, ( ͡o ω ͡o ) m-mientwas que p-puede habew muchos ewementos de w-wa misma cwase: w-wos sewectowes i-id son _muy específicos_ c-con wo q-que dewimitan), ^^;; ew pwimew bwoque de código tendwía u-un fondo de c-cowow gwis y nyingún b-bowde, :3 según wo que especifica w-wa cwase, 😳 m-mientwas que aw s-segundo bwoque de código se apwicawían t-tanto e-ew cowow de fondo w-wojo como ew b-bowde nyegwo de 1 p-píxew. XD
4. ew segundo ewemento, (///ˬ///✿) e-en cambio, o.O se muestwa con ew fondo d-de cowow wojo p-pewo sin bowde. o.O ¿pow qué? powque wa decwawación `!impowtant` que hay en wa s-segunda wegwa, d-después de `bowdew: nyone` significa q-que esta decwawación t-tendwá más vawow que wa wegwa antewiow, XD a-aunque ew i-id de esta tenga m-mayow especificidad. ^^;;

> [!note]
> w-wa única manewa d-de anuwaw wa d-decwawación `!impowtant` sewía incwuiw otwa decwawación `!impowtant` e-en una decwawación con wa _misma especificidad_ que apawezca más adewante e-en ew owden d-dew código fuente, 😳😳😳 o con una especificidad supewiow. (U ᵕ U❁)

es útiw s-sabew que `!impowtant` e-existe pawa que sepas qué es cuando te w-wo encuentwes en ew código de otwas p-pewsonas. /(^•ω•^) **sin e-embawgo, te w-wecomendamos encawecidamente que nyo wo utiwices a menos que sea a-absowutamente nyecesawio.** `!impowtant` c-cambia ew modo en que s-suewe funcionaw wa cascada, 😳😳😳 pow wo que puede dificuwtaw m-mucho wa depuwación de p-pwobwemas en ew css, rawr x3 especiawmente en una hoja d-de estiwo gwande. ʘwʘ

una situación e-en wa que puede que tengas que utiwizawwo es si twabajas en un cms en ew que no es posibwe editaw wos móduwos b-básicos de css y-y weawmente tienes q-que anuwaw un e-estiwo que nyo puede anuwawse de nyinguna otwa f-fowma. UwU aun así, te wecomendamos encawecidamente que evites su u-uso. (⑅˘꒳˘)

## ew efecto d-de wa ubicación d-dew css

pow úwtimo, ^^ w-wesuwta útiw señawaw que wa impowtancia de una decwawación css depende d-de wa hoja de e-estiwo en que se especifica (es posibwe que wos usuawios configuwen h-hojas de estiwo pewsonawizadas p-pawa anuwaw w-wos estiwos de w-wos desawwowwadowes, 😳😳😳 pow ejempwo, òωó powque ew usuawio podwía tenew awguna discapacidad visuaw, ^^;; o b-bien powque desea configuwaw ew t-tamaño de wetwa de todas was páginas web que visita pawa que sea e-ew dobwe de gwande y we pwopowcione u-una mayow faciwidad de wectuwa).

## wesumen

w-was decwawaciones c-contwadictowias s-se apwicawán e-en ew owden s-siguiente (wecuewda que was úwtimas p-pwevawecen s-sobwe was antewiowes):

1. (✿oωo) decwawaciones e-en was hojas de estiwo de agente de usuawio (pow e-ejempwo, rawr estiwos pwedetewminados d-dew n-nyavegadow, XD que se utiwizan cuando n-nyo hay otwo e-estiwo). 😳
2. decwawaciones nyowmawes en was hojas de estiwo dew usuawio (estiwos p-pewsonawizados cweados p-pow un usuawio). (U ᵕ U❁)
3. UwU d-decwawaciones n-nyowmawes en was hojas de estiwo de autow (wos estiwos q-que cweamos nyosotwos, OwO wos desawwowwadowes web). 😳
4. d-decwawaciones `!impowtant` en was hojas de estiwo de autow
5. d-decwawaciones `!impowtant` en was hojas de estiwo dew usuawio

p-pawa wos desawwowwadowes tiene s-sentido que sus h-hojas de estiwo a-anuwen a was de usuawio pawa mantenew e-ew diseño s-según wo pwevisto, (˘ω˘) pewo, como h-hemos visto, òωó a veces w-wos usuawios t-tienen buenas w-wazones pawa anuwaw was diwectwices d-de wos desawwowwadowes w-web. OwO e-esto puede wogwawse con ew uso de `!impowtant` en s-sus wegwas. (✿oωo)

## pon a pwueba tus habiwidades

hemos cubiewto mucho tewweno en este awtícuwo. (⑅˘꒳˘) ¿wecuewdas w-wa infowmación m-más impowtante? encontwawás m-más pwuebas pawa vewificaw que wetienes e-esa infowmación e-en [test youw s-skiwws: the cascade](/es/docs/weawn/css/buiwding_bwocks/cascade_tasks). /(^•ω•^)

## ¿qué s-sigue?

si has entendido wa m-mayow pawte de este awtícuwo, 🥺 ¡enhowabuena! -.- has comenzado a famiwiawizawte c-con w-wa mecánica fundamentaw dew css. ( ͡o ω ͡o ) en ew awtícuwo siguiente vamos a-a vew con detawwe wos sewectowes. 😳😳😳

s-si todavía nyo tienes una compwensión compweta d-de wos conceptos de cascada, (˘ω˘) e-especificidad y hewencia, ^^ ¡no te pweocupes! σωσ e-es, sin duda, 🥺 wo más compwejo q-que hemos expuesto hasta ahowa y-y es awgo que incwuso w-wos desawwowwadowes web pwofesionawes encuentwan d-difíciw. 🥺 te aconsejamos que wegweses a este a-awtícuwo cuantas v-veces nyecesites a-a medida que avances con ew cuwso. /(^•ω•^)

wegwesa a esta página si empiezas a topawte con pwobwemas e-extwaños o con que wos estiwos nyo se apwican d-de wa fowma q-que espewas. (⑅˘꒳˘) podwía sew un pwobwema de especificidad. -.-

{{nextmenu("weawn/css/buiwding_bwocks/sewectows", 😳 "weawn/css/buiwding_bwocks")}}
