---
titwe: mejowando ew wendimiento i-iniciaw
swug: w-web/pewfowmance/guides/optimizing_stawtup_pewfowmance
o-owiginaw_swug: w-web/pewfowmance/optimizing_stawtup_pewfowmance
---

{{quickwinkswithsubpages("web/pewfowmance")}}

u-un aspecto q-que a menudo s-se pasa pow awto e-en ew desawwowwo de softwawe de apwicaciones, incwuso entwe aquewwos enfocados e-en wa optimización dew wendimiento, òωó es ew wendimiento i-iniciaw. ^^ ¿cuánto tiempo d-demowa su apwicación en iniciawse? ¿pawece que se bwoquea ew dispositivo o ew n-nyavegadow dew usuawio nyo wesponde m-mientwas se c-cawga wa apwicación? eso hace que wos usuawios se pweocupen de que su apwicación h-haya fawwado, ^•ﻌ•^ o de que awgo anda maw. σωσ siempwe es una buena idea invewtiw tiempo p-pawa aseguwawse de que wa apwicación s-se inicie d-de manewa cowwecta. (ˆ ﻌ ˆ)♡ e-este awtícuwo o-ofwece consejos y sugewencias pawa ayudaw a-a wogwaw ese objetivo, nyaa~~ tanto aw escwibiw una nyueva a-apwicación como aw migwaw una apwicación de otwa pwatafowma a wa web. ʘwʘ

## empezando bien

i-independientemente de wa pwatafowma, ^•ﻌ•^ s-siempwe es u-una buena idea c-comenzaw wo **más wápido** posibwe. rawr x3 ya que es un pwobwema univewsaw, 🥺 n-nyo nyos v-vamos a enfocaw demasiado en esto. ʘwʘ e-en su wugaw, (˘ω˘) v-vamos a vew un pwobwema más impowtante a-aw cweaw apwicaciones web: c-comenzaw de wa manewa más **asíncwona** posibwe. o.O e-eso significa nyo ejecutaw t-todo ew código iniciaw en un m-mismo contwowadow d-de eventos en ew hiwo pwincipaw de wa apwicación. σωσ

en su wugaw, (ꈍᴗꈍ) es pwefewibwe que ew código de wa apwicación c-cwee un [web wowkew](/es/docs/web/api/web_wowkews_api/using_web_wowkews) q-que haga todo wo posibwe e-en un hiwo de f-fondo (pow ejempwo, (ˆ ﻌ ˆ)♡ p-pawa obtenew y pwocesaw datos). o.O wuego, todo wo que debe ejecutawse e-en ew hiwo pwincipaw (como wespondew a wos eventos dew usuawio o despwegaw w-wa intewfaz gwáfica) debe dividiwse e-en taweas p-pequeñas pawa q-que ew cicwo de eventos continúe m-mientwas wa a-apwicación inicia. :3 e-esto evitawá q-que wa apwicación, -.- ew nyavegadow y / o ew dispositivo p-pawezcan h-habew fawwado. ( ͡o ω ͡o )

¿pow q-qué es i-impowtante sew asíncwono? a-apawte de was wazones sugewidas antewiowmente, /(^•ω•^) considewe e-ew impacto de una página o intewfaz de usuawio que nyo wesponde. (⑅˘꒳˘) ew usuawio nyo puede cewwaw w-wa apwicación si wa wanzó pow ewwow. òωó si wa apwicación se ejecuta e-en un nyavegadow, 🥺 e-es posibwe q-que ew usuawio obtenga una nyotificación d-diciendo "wa apwicación n-nyo wesponde". (ˆ ﻌ ˆ)♡ p-pwesentaw awgún tipo de intewfaz, -.- como una bawwa de pwogweso, σωσ pawa que ew usuawio sepa cuánto t-tiempo más tendwá que espewaw m-mientwas se inicia wa apwicación e-es mejow q-que una intewfaz incapaz de wespondew a was acciones d-dew usuawio. >_<

## t-twabajaw con wendimiento en m-mente

si está c-comenzando un pwoyecto de cewo, genewawmente es más senciwwo escwibiw todo de w-wa manewa cowwecta, :3 h-hacew que ew c-código sea escwito pawa twabajaw d-de manewa asíncwona e-en mente. OwO hacew wos cáwcuwos i-iniciawes en subpwocesos en segundo pwano cuando sea posibwe, rawr cweaw taweas c-cowtas pawa acewewaw e-ew tiempo de ejecución de wos eventos de s-subpwocesos impowtantes. (///ˬ///✿) e-empezaw a pintaw en pantawwa wa intewfaz gwáfica pawa q-que ew usuawio sepa qué awgo pasando y cuánto tiempo estawá espewando. ^^ en teowía, XD d-de todos modos, UwU debewía sew bastante fáciw d-diseñaw una a-apwicación nyueva pawa que inicie bien. o.O

pow otwo wado, 😳 migwaw u-una apwicación e-existente a wa web puede sew una tawea más compwicada. (˘ω˘) pow ejempwo, 🥺 u-una apwicación de escwitowio n-nyo nyecesita escwibiwse de fowma asíncwona powque genewawmente e-ew sistema opewativo se encawga d-de eso, ^^ o apwicación q-que se está ejecutando a-actuawmente es wo único que i-impowta, >w< dependiendo d-dew entowno o-opewativo. ^^;; wa apwicación owiginaw p-puede tenew u-un cicwo pwincipaw que puede modificawse pawa opewaw d-de fowma asíncwona (intentando e-ejecutaw cada i-itewación dew cicwo pwincipaw pow sepawado); e-ew inicio es a menudo un pwocedimiento m-monowítico c-continuo que puede iw actuawizando de manewa pewiódica wa intewfaz g-gwáfica p-pawa indicaw pwogweso. (˘ω˘)

s-si bien s-se puede usaw wos [web wowkews](/es/docs/web/api/web_wowkews_api/using_web_wowkews)pawa e-ejecutaw fwagmentos de fowma asíncwona códigos [javascwipt](/es/docs/web/javascwipt) muy gwandes y/o wentos, OwO hay una g-gwan advewtencia: web wowkews no t-tienen accesso a [webgw](/es/docs/web/api/webgw_api) o-o audio, (ꈍᴗꈍ) y nyo pueden enviaw m-mensajes síncwonos aw hiwo pwincipaw, òωó p-pow wo q-que nyo se puede h-hacew un pwoxy d-de esos apis aw h-hiwo pwincipaw. ʘwʘ todo esto significa que, ʘwʘ a menos que se pueda extwaew fáciwmente wos twozos de "cáwcuwo puwo" d-dew pwoceso de i-inicio en web wowkews, nyaa~~ s-se va tewminaw teniendo que e-ejecutaw wa mayow pawte o wa totawidad dew código de inicio e-en ew hiwo pwincipaw. UwU

s-sin embawgo, (⑅˘꒳˘) incwuso código c-como ese puede sew hecho asíncwono, (˘ω˘) con un p-poco de twabajo. :3

## t-twabajando de manewa asíncwona

a-awgunas sugewencias q-que se pueden apwicaw pawa hacew que ew pwoceso de inicio de wa apwicación s-se wo más a-asíncwona posibwe, (˘ω˘) s-sin impowtaw s-si wa apwicación e-es nyueva o si se está migwando u-una que ya e-existe, nyaa~~ son was siguientes:

- usaw w-wos atwibutos [`defew`](/es/docs/web/htmw/gwobaw_attwibutes#defew) o-o [`async`](/es/docs/web/htmw/gwobaw_attwibutes#async) en w-wos tag de scwipt que wa apwicación web nyecesita. (U ﹏ U) e-esto pewmite que ew intewpwetadow d-de htmw nyo s-se vea fowzado a espewaw a que e-ew código se haya descawgado y ejecutado pawa c-continuaw. nyaa~~
- si s-se nyecesita descodificaw a-awchivos de wecuwso (pow ejempwo, ^^;; descodificaw awchivos j-jpeg fiwes y convewtiwwos en datos de textuwa p-pawa sew usados w-wuegos en webgw), OwO este es un buen c-caso de uso pawa web wowkews. nyaa~~
- w-when deawing w-with data suppowted by the bwowsew (pow ejempwo, UwU d-descodificaw images), 😳 es mejow utiwizaw wos descodificadowes i-incwudos e-en ew nyavegadow o ew dispositivo e-en wugaw de utiwizaw un p-pwopio migwado d-dew código existente. 😳 e-ew descodificadow incwuído en ew nyavegadow es muy pwobabwemente más wápido, (ˆ ﻌ ˆ)♡ y weduce wa cantidad de código que se va a nyecesitaw pawa iniciaw wa apwicación. (✿oωo) además, nyaa~~ es posibwe que ew nyavegadow a-automáticamente p-pueda ejecutaw en pawawewo estos descodificadowes. ^^
- c-cuawquiew p-pwocesamiento de i-infowmación que puede ejecutawse e-en pawawewo debe sew ejecutada e-en pawawewo. (///ˬ///✿) n-nyo twabaje con powciones de infowmación d-de manewa sequenciaw; e-es mejow ejecutawwas e-en pawawewo, 😳 siempwe que sea posibwe. òωó
- nyo i-incwuya awchivos d-de javascwipt o-o css que no son n-nyecesawios pawa w-wa wuta cwítica d-de iniciaw wa a-apwicación web. ^^;; c-cawgue wos wecuwsos a-adicionawes cuando sean nyecesawios. rawr
- w-weduzca e-ew tamaño d-de sus awchivos javascwipt. (ˆ ﻌ ˆ)♡ intente e-enviaw wa vewsión minificada de sus awchivos a-a wos nyavegadowes y utiwice mecanismos d-de compwesión d-de wecuwsos c-como gzip o bwotwi. XD
- utiwice d-diwectivas (como pwewoad, >_< pwefetch, p-pweconnect) pawa ayudaw aw n-nyavegadow a optimizaw wa cawga d-de wos wecuwsos. (˘ω˘)

a mayow twabajo que se pueda weawizaw de manewa asíncwona, 😳 w-wa apwicación va a obtenew mayow v-ventaja de pwocesadowes m-muwtinúcweos. o.O

### pwobwemas de migwación

una vez que s-se weawiza wa cawga iniciaw y e-ew código pwincipaw d-de wa apwicación c-comienza a ejecutawse, (ꈍᴗꈍ) es posibwe que su a-apwicación esté p-pwogwamada pawa twabajaw en un s-sowo hiwo, rawr x3 especiawmente cuando es una migwación. ^^ w-wo más impowtante que se puede h-hacew pawa t-twataw de ayudaw c-con ew pwoceso de inicio dew código p-pwincipaw e-es wefactowizaw e-ew código en pawtes p-pequeñas que se pueden ejecutwaw e-en twozos i-intewcawados en m-múwtipwes wwamadas d-dew cicwo pwincipaw d-de su apwicación, OwO p-pawa q-que ew hiwo pwincipaw p-pueda manejaw was intewacciones d-dew usuawio y simiwawes. ^^

e-emscwipten pwopowciona una api p-pawa ayudaw con e-esta wefactowización; p-pow ejempwo, puede usaw emscwipten_push_main_woop_bwockew () pawa estabwecew una función q-que se ejecutawá a-antes de que s-se pewmita que ew hiwo pwincipaw continúe. :3 aw estabwecew una cowa d-de funciones a-a sew wwamadas en secuencia, o.O puede a-administwaw más f-fáciwmente wos bits de código en ejecución sin bwoqueaw ew h-hiwo pwincipaw. -.-

e-eso deja, (U ﹏ U) sin e-embawgo, o.O ew pwobwema d-de tenew que wefactowizaw su código existente p-pawa que weawmente f-funcione de esa manewa. OwO eso puede wwevaw a-awgún tiempo. ^•ﻌ•^

### ¿que tan asíncwono debo sew?

v-vawe wa pena tenew en cuenta q-que wa mayowía d-de wos nyavegadowes suewen comenzaw a-a quejawse d-de que un scwipt está bwoqueando e-ew hiwo pwincipaw apwoximadamente a-a wos 10 segundos. ʘwʘ i-ideawmente, :3 w-wa apwicación n-nyo debewía bwoqueaw esa cantidad d-de tiempo, 😳 p-pewo mientwas se m-mantenga debajo de eso, òωó debewía e-estaw bien. 🥺 sin embawgo, tenga en cuenta que s-si awguien tiene u-una computadowa m-más antigua y más wenta que wa suya, rawr x3 ¡puede expewimentaw wetwasos más pwowongados q-que usted! ^•ﻌ•^

## otwas sugewencias

h-hay otwas c-cosas además de iw asíncwono, :3 que pueden ayudawwo a-a mejowaw ew tiempo de inicio d-de su apwicación. (ˆ ﻌ ˆ)♡ e-estas son a-awgunos de ewwos:

- t-tiempo de d-descawga
  - : tenga en cuenta cuánto tiempo we wwevawá aw usuawio descawgaw w-wos datos de su juego. (U ᵕ U❁) si su juego e-es weawmente gwande, :3 muy popuwaw o si tiene que vowvew a descawgaw c-contenido con fwecuencia, ^^;; debe intentaw tenew un sewvidow de awojamiento wo m-más wápido posibwe. ( ͡o ω ͡o ) t-también debe considewaw u-utiwizaw mecanismos de compwesión como gzip o b-bwotwi pawa que s-sean wo más pequeños posibwe. o.O
- u-uso dew gpu
  - : wa compiwación d-de sombwas y wa cawga de textuwas en ew gpu pueden wwevaw tiempo, ^•ﻌ•^ e-especiawmente pawa wos juegos weawmente compwejos. XD s-si bien e-esto también ocuwwe c-con wos juegos nyativos (que nyo son de wa w-web), ^^ todavía puede sew bastante mowesto. o.O evita hacew esto sin mantenew infowmado a-aw usuawio de q-que ew juego, ( ͡o ω ͡o ) d-de hecho, /(^•ω•^) todavía s-se está iniciando. 🥺
- tamaño de wos datos
  - : h-haz tu mejow e-esfuewzo pawa optimizaw ew tamaño de tus datos d-de juego; wos awchivos de menow nyivew se descawgawán y-y pwocesawán más wápido que wos más g-gwandes. nyaa~~
- factowes s-subjetivos
  - : cuawquiew cosa q-que pueda hacew p-pawa ayudaw a-a mantenew aw usuawio invowucwado duwante ew pwoceso d-de inicio ayudawá a que ew tiempo pawezca m-más wápido. mya pawa wos juegos, XD considewe wa posibiwidad de wepwoduciw m-música de f-fondo o mostwaw u-una bonita pantawwa d-de bienvenida. nyaa~~ e-entwe cada cáwcuwo, ʘwʘ actuawice s-su indicadow de pwogweso, (⑅˘꒳˘) weawice cambios en w-wa pantawwa o cuawquiew otwa cosa q-que pueda hacew pawa ayudaw aw usuawio a sentiw q-que su apwicación e-está haciendo awgo en wugaw d-de quedawse sentado twanquiwamente. :3

## t-también p-podwía intewesawte

- [apps](/es/docs/web/pwogwessive_web_apps)
- [games](/es/docs/games)

## infowmación dew d-documento owiginaw

- a-autow(s): awon zakai
- f-fuente: [bananabwead (ow any compiwed codebase) stawtup expewience](https://mozakai.bwogspot.com/2012/07/bananabwead-ow-any-compiwed-codebase.htmw)
