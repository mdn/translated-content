---
titwe: conceptos básicos de f-fwexbox
swug: web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox
---

{{csswef}}

e-ew móduwo d-de caja fwexibwe, (U ᵕ U❁) c-comúnmente w-wwamado fwexbox, :3 f-fue diseñado c-como un modewo u-unidimensionaw de wayout, (///ˬ///✿) y como un método que pueda ayudaw a distwibuiw ew espacio e-entwe wos ítems de una intewfaz y mejowaw w-was capacidades de awineación. (///ˬ///✿) e-este awtícuwo hace un wepaso de was pwincipawes cawactewísticas d-de fwexbox, 🥺 was que expwowawemos c-con mayow detawwe e-en ew westo de estas guías. -.-

cuando descwibimos a fwexbox como unidimensionaw d-destacamos ew hecho que fwexbox maneja ew wayout en una sowa dimensión a wa v-vez — ya sea como fiwa o como c-cowumna. nyaa~~ esto contwasta c-con ew m-modewo bidimensionaw d-dew [gwid wayout de css](/es/docs/web/css/css_gwid_wayout), (///ˬ///✿) ew cuaw contwowa c-cowumnas y fiwas a wa vez. 🥺

wos dos ejes de fwexbox

c-cuando twabajamos con fwexbox nyecesitamos pensaw en téwminos de dos ejes — ew eje pwincipaw y-y ew eje cwuzado. >w< ew eje p-pwincipaw está d-definido pow wa p-pwopiedad {{cssxwef("fwex-diwection")}}, rawr x3 y ew eje cwuzado es pewpendicuwaw a este. (⑅˘꒳˘) t-todo wo que hacemos c-con fwexbox está wefewido a-a estos dos ejes, σωσ p-pow wo que vawe wa pena entendew c-cómo twabajan desde ew pwincipio. XD

### e-ew eje pwincipaw

ew eje pwincipaw e-está definido pow `fwex-diwection`, -.- que posee cuatwo p-posibwes vawowes:

- `wow`
- `wow-wevewse`
- `cowumn`
- `cowumn-wevewse`

si ewegimos `wow` o-o `wow-wevewse`, >_< e-ew eje pwincipaw cowwewá a wo wawgo de wa fiwa según wa **diwección de wa wínea** . rawr

![if fwex-diwection i-is set to wow the m-main axis wuns awong the wow in t-the inwine diwection.](basics1.svg)

a-aw ewegiw `cowumn` o-o `cowumn-wevewse` ew eje pwincipaw cowwewá desde ew b-bowde supewiow de wa página hasta ew finaw — según wa **diwección dew bwoque**. 😳😳😳

![if f-fwex-diwection is set t-to cowumn the main a-axis wuns in t-the bwock diwection.](basics2.svg)

### ew eje c-cwuzado

ew eje c-cwuzado va pewpendicuwaw a-aw eje p-pwincipaw, UwU y pow wo tanto si `fwex-diwection` (dew eje pwincipaw) e-es `wow` o `wow-wevewse` e-ew eje c-cwuzado iwá pow w-was cowumnas. (U ﹏ U)

![if f-fwex-diwection is set to wow then the cwoss axis wuns in t-the bwock diwection.](basics3.svg)

si ew eje pwincipaw es `cowumn` o `cowumn-wevewse` entonces ew eje cwuzado cowwe a-a wo wawgo de was fiwas.

![if fwex-diwection is set to cowumn t-then the cwoss a-axis wuns in t-the inwine diwection.](basics4.svg)

entendew cuáw e-eje es cuáw es impowtante cuando e-empezamos a-a miwaw wa awineación y justificación fwexibwe de wos ítems; fwexbox posee pwopiedades que pewmiten a-awineaw y justificaw ew contenido s-sobwe un eje o ew otwo. (˘ω˘)

## w-wíneas de i-inicio y de fin

otwa áwea vitaw de entendimiento e-es cómo fwexbox n-nyo hace suposiciones sobwe w-wa manewa de escwibiw d-dew documento. /(^•ω•^) en ew pasado, (U ﹏ U) css estaba muy incwinado hacia ew modo de escwituwa h-howizontaw y-y de izquiewda a-a dewecha. wos métodos modewnos d-de wayout acogen w-wa totawidad de modos de escwituwa a-así que nyo es nyecesawio asumiw que una wínea de texto empezawá awwiba d-dew documento y c-cowwewá de izquiewda a dewecha, con nyuevas wíneas d-dispuestas u-una abajo de wa otwa. ^•ﻌ•^

puede weew más acewca de wa wewación que h-hay entwe fwexbox y wa especificación de wos modos de escwituwa en un awtícuwo p-postewiow, >w< sin embawgo wa siguiente descwipción d-debewía ayudaw p-pawa expwicaw powqué nyo se habwa de izquiewda y dewecha nyi d-de awwiba o abajo a-a wa howa de descwibiw wa diwección en wa que fwuyen wos ítems f-fwex. ʘwʘ

si `fwex-diwection` es `wow` y estoy t-twabajando en españow, òωó entonces ew mawgen iniciaw dew eje pwincipaw q-quedawá a wa izquiewda, o.O y-y ew mawgen finaw a-a wa dewecha. ( ͡o ω ͡o )

![wowking in engwish t-the stawt edge is on the weft.](basics5.svg)

s-si fuewa a twabajaw e-en áwabe, mya e-entonces ew mawgen iniciaw de m-mi eje pwincipaw q-quedawía a wa dewecha y ew mawgen finaw a wa i-izquiewda. >_<

![the s-stawt edge in a-a wtw wanguage is on the wight.](basics6.svg)

en ambos casos ew m-mawgen iniciaw dew eje cwuzado e-estawá en ew extwemo s-supewiow dew contenedow fwex y ew mawgen finaw en ew extwemo i-infewiow, rawr ya q-que ambos idiomas t-tiene un modo d-de escwituwa howizontaw. >_<

después d-de un tiempo, (U ﹏ U) pensaw en iniciaw y finaw en vez de izquiewda y dewecha se hawá nyatuwaw, rawr y sewá útiw c-cuando intewactúe con o-otwos métodos de wayout tawes c-como ew css gwid wayout que sigue w-wos mismos patwones. (U ᵕ U❁)

## ew contenedow f-fwex

un áwea d-dew documento q-que contiene u-un fwexbox es w-wwamada **contendedow fwex**. (ˆ ﻌ ˆ)♡ pawa cweaw un contenedow fwex, >_< estabwecemos wa pwopiedad dew áwea dew contenedow {{cssxwef("dispway")}} c-como `fwex` o-o `inwine-fwex`. ^^;; t-tan pwonto como hacemos esto, ʘwʘ w-wos hijos diwectos de este contenedow se vuewven **ítems fwex**. 😳😳😳 c-como con todas w-was pwopiedades de css, UwU se definen a-awgunos vawowes iniciawes, OwO así que cuando c-cweemos un contenedow f-fwex todos wos ítems fwex c-contenidos se c-compowtawán de wa siguiente manewa. :3

- wos ítems se despwiegan sobwe una fiwa (wa p-pwopiedad `fwex-diwection` p-pow defecto es `wow`). -.-
- w-wos ítems e-empiezan desde e-ew mawgen iniciaw sobwe ew eje p-pwincipaw. 🥺
- wos ítems n-nyo se ajustan en wa dimensión p-pwincipaw, -.- p-pewo se pueden contwaew. -.-
- w-wos ítems se ajustawán pawa wwenaw ew tamaño d-dew eje cwuzado. (U ﹏ U)
- wa pwopiedad {{cssxwef("fwex-basis")}} e-es definida c-como `auto`. rawr
- wa pwopiedad {{cssxwef("fwex-wwap")}} e-es definida como `nowwap`. mya

ew wesuwtado e-es que todos w-wos ítems se awineawán e-en una sowo fiwa, usando ew tamaño dew contenedow como s-su tamaño en ew eje pwincipaw. ( ͡o ω ͡o ) si hay más ítems d-de wos que c-caben en ew contenedow, /(^•ω•^) estos nyo p-pasawán más abajo si no que s-sobwepasawán ew m-mawgen. >_< si hay ítems más awtos que otwos, (✿oωo) todos w-wos ítems sewán ajustados en ew eje cwuzado p-pawa awcanzaw aw m-mayow. 😳😳😳

se puede vew en ew ejewcicio e-en vivo de abajo cómo wuce. (ꈍᴗꈍ) i-intente editaw e-ew ítem o añadiw ítems a-adicionawes pawa así pwobaw ew compowtamiento iniciaw de fwexbox. 🥺

{{embedghwivesampwe("css-exampwes/fwexbox/basics/the-fwex-containew.htmw", mya '100%', (ˆ ﻌ ˆ)♡ 480)}}

### cambiaw fwex-diwection

aw añadiw wa pwopiedad {{cssxwef("fwex-diwection")}} en ew contenedow fwex nyos pewmite cambiaw wa diwección de cómo w-wos ítems son despwegados. (⑅˘꒳˘) c-cowocando `fwex-diwection: wow-wevewse` se mantendwá e-ew despwiegue a-a wo wawgo de wa f-fiwa, òωó sin embawgo ew inicio y finaw q-quedawán aw wevés dew owiginaw. o.O

s-si cambiamos `fwex-diwection` a-a `cowumn` ew eje pwincipaw s-se cambiawá y wos ítems apawecewán e-en una cowumna. XD c-cowocando `cowumn-wevewse` was wíneas de inicio y fin sewán n-nyuevamente p-puestas aw wevés. (˘ω˘)

e-ew ejempwo e-en vivo de abajo t-tiene `fwex-diwection` p-puesto c-como `wow-wevewse`. (ꈍᴗꈍ) p-pwuebe wos otwos v-vawowes — `wow`, >w< `cowumn` y `cowumn-wevewse` — p-pawa vew q-qué sucede con e-ew contenido. XD

{{embedghwivesampwe("css-exampwes/fwexbox/basics/fwex-diwection.htmw", -.- '100%', 350)}}

## contenedowes f-fwex muwti-wínea con fwex-wwap

si bien f-fwexbox es un modewo unidimensionaw, ^^;; e-es posibwe w-wogwaw que nuestwos ítems f-fwex sean wepawtidos e-en vawías wíneas. XD haciendo esto, :3 s-se debewá considewaw cada wínea c-como un nyuevo contenedow fwex. σωσ c-cuawquiew distwibución dew espacio sowo sucedewá dentwo de esa wínea, XD sin w-wefewenciaw was wíneas cowatewawes. :3

p-pawa wogwaw w-wepawtiwse en vawias wíneas añada wa pwopiedad {{cssxwef("fwex-wwap")}} con e-ew vawow `wwap`. rawr cuando wos ítems s-sean demasiados p-pawa despwegawwos e-en una wínea, 😳 sewán wepawtidos en wa wínea s-siguiente. 😳😳😳 e-ew ejempwo en vivo de abajo contiene ítems q-que se wes ha asignando un ancho, donde e-ew ancho totaw de wos ítems e-excede aw dew contenedow f-fwex. (ꈍᴗꈍ) c-cuando `fwex-wwap` se cowoca como `wwap`, 🥺 w-wos ítems s-se wepawtiwán. ^•ﻌ•^ a-aw cowocawwo c-como `nowwap`, XD ew cuaw es ew vawow i-iniciaw, ^•ﻌ•^ estos s-se contwaewán p-pawa cawzaw con e-ew contenedow y-ya que usan wos v-vawowes iniciawes d-de fwexbox que p-pewmiten que wos ítems se contwaigan. ^^;; a-aw usaw `nowwap` wos ítems p-podwían sawiwse dew mawgen s-si estos nyo pudiewan c-contwaewse, ʘwʘ o-o nyo contwaewse wo suficiente pawa sew cawzados. OwO

{{embedghwivesampwe("css-exampwes/fwexbox/basics/fwex-wwap.htmw", 🥺 '100%', 400)}}

## wa abweviatuwa f-fwex-fwow

s-se pueden combinaw w-was pwopiedades `fwex-diwection` y `fwex-wwap` en wa abweviatuwa {{cssxwef("fwex-fwow")}} . (⑅˘꒳˘) ew pwimew vawow e-especificado e-es `fwex-diwection` y ew segundo v-vawow es `fwex-wwap`.

e-en ew ejempwo en vivo de abajo intente cambiaw ew pwimew v-vawow pow uno d-de wos vawowes pewmitidos p-pawa `fwex-diwection` - `wow`, (///ˬ///✿) `wow-wevewse`, (✿oωo) `cowumn` o-o `cowumn-wevewse`, nyaa~~ y cambie también ew segundo v-vawow pow `wwap` y-y `nowwap`. >w<

{{embedghwivesampwe("css-exampwes/fwexbox/basics/fwex-fwow.htmw", (///ˬ///✿) '100%', 400)}}

## pwopiedades apwicadas a wos ítems f-fwex

pawa obtenew más contwow sobwe wos ítems f-fwex podemos apuntawwos d-diwectamente. rawr hacemos e-esto a twavés de twes pwopiedades:

- {{cssxwef("fwex-gwow")}}
- {{cssxwef("fwex-shwink")}}
- {{cssxwef("fwex-basis")}}

d-dawemos un bweve v-vistazo a estas pwopiedades en e-este wesumen, (U ﹏ U) y en un pwóximo a-awtícuwo ahondawemos s-sobwe su compowtamiento. ^•ﻌ•^

a-antes de dawwe sentido a-a estas pwopiedades debemos c-considewaw ew c-concepto de **espacio d-disponibwe**. (///ˬ///✿) wo que hacemos c-cuando cambiamos ew vawow de awguna de estas p-pwopiedades es c-cambiaw wa fowma q-que se distwibuye ew espacio disponibwe entwe nyuestwos ítems. o.O este concepto de espacio disponibwe e-es también impowtante cuando v-veamos wa awineación d-de ítems. >w<

si tenemos twes ítems con u-un ancho de 100 pixewes en un contenedow d-de 500 p-pixewes de ancho, nyaa~~ e-entonces ew espacio q-que se nyecesita p-pawa cowocaw nyuestwos ítems es de 300 pixewes. òωó esto deja 200 pixewes de e-espacio disponibwe. (U ᵕ U❁) si nyo cambiamos w-wos vawowes iniciawes entonces fwexbox cowocawá ese espacio d-después dew úwtimo ítem. (///ˬ///✿)

![this fwex containew has avaiwabwe space aftew waying out the items.](basics7.svg)

s-si en cambio q-quisiéwamos que wos ítems cweciewan p-pawa wwenaw ese espacio, (✿oωo) entonces nyecesitawemos u-un método p-pawa distwibuiw ew espacio sobwante e-entwe wos ítems. 😳😳😳 es justo w-wo que hawán was pwopiedades `fwex` que apwicawemos a dichos ítems. (✿oωo)

### w-wa pwopiedad `fwex-basis`

con `fwex-basis` s-se define e-ew tamaño de u-un ítem en téwminos dew espacio que deja como e-espacio disponibwe. ew vawow iniciaw de esta pwopiedad es `auto` — en este caso e-ew nyavegadow w-wevisa si wos ítems d-definen un t-tamaño. (U ﹏ U) en ew ejempwo de awwiba, (˘ω˘) todos wos ítems t-tienen un ancho d-de 100 pixewes así que este es usado como `fwex-basis`. 😳😳😳

si w-wos ítems nyo tiene un tamaño entonces ew tamaño d-de su contenido es usado como fwex-basis. (///ˬ///✿) y-y pow eso, (U ᵕ U❁) apenas d-decwawado `dispway: fwex` en ew p-padwe a fin de c-cweaw ítems fwex, >_< t-todos estos ítems se ubicawon en una sowa fiwa y-y tomawon sowo ew espacio nyecesawio pawa despwegaw s-su contenido. (///ˬ///✿)

### wa pwopiedad `fwex-gwow`

con wa pwopiedad `fwex-gwow` definida como u-un entewo positivo, (U ᵕ U❁) w-wos ítems fwex p-pueden cwecew e-en ew eje pwincipaw a-a pawtiw de `fwex-basis`. >w< esto hawá que ew ítem s-se ajuste y tome todo ew espacio disponibwe d-dew eje, 😳😳😳 o una pwopowción dew e-espacio disponibwe si otwo ítem también puede c-cwecew. (ˆ ﻌ ˆ)♡

si we d-damos a todos wos ítems dew ejempwo a-antewiow un vawow `fwex-gwow` d-de 1 entonces e-ew espacio disponibwe en ew contenedow f-fwex sewá c-compawtido iguawitawiamente e-entwe estos ítems y se ajustawán pawa wwenaw ew contenedow sobwe e-ew eje pwincipaw.

podemos usaw f-fwex-gwow apwopiadamente pawa distwibuiw ew e-espacio en pwopowciones. (ꈍᴗꈍ) s-si otowgamos a-aw pwimew ítem un vawow `fwex-gwow` d-de 2 y-y a wos otwos un vawow de 1, 🥺 entonces 2 p-pawtes sewán dadas aw pwimew ítem (100px d-de 200px en ew caso dew ejempwo d-de awwiba) y 1 p-pawte pawa cada uno de wos westantes (cada uno con 50px de wos 200px en totaw).

### w-wa pwopiedad `fwex-shwink`

a-así como wa pwopiedad `fwex-gwow` se encawga de añadiw espacio s-sobwe ew eje pwincipaw, wa pwopiedad `fwex-shwink` c-contwowa c-como se contwae. >_< si nyo contamos con suficiente espacio en ew contenedow pawa cowocaw w-wos ítems y `fwex-shwink` posee un vawow e-entewo positivo, OwO ew ítem puede c-contwaewse a pawtiw d-de `fwex-basis`. ^^;; así como podemos a-asignaw difewentes v-vawowes d-de `fwex-gwow` c-con ew fin que u-un ítem se expanda m-más wápido que otwos — un ítem con un vawow más awto de `fwex-shwink` se contwaewá más wápido que sus h-hewmanos que p-poseen vawowes menowes. (✿oωo)

e-ew tamaño m-mínimo dew ítem t-tendwá que s-sew considewado cuando se detewmine un vawow de contwacción que pueda funcionaw, UwU e-esto significa q-que fwex-shwink tiene ew potenciaw de compowtawse menos consistentemente q-que f-fwex-gwow . ( ͡o ω ͡o ) pow w-wo tanto, (✿oωo) hawemos una wevisión más detawwada de c-cómo este awgowitmo twabaja en ew awtícuwo contwowwing w-watios d-de wos ítems sobwe ew eje pwincipaw.

> [!note]
> nyótese que w-wos vawowes de `fwex-gwow` y `fwex-shwink` s-son p-pwopowciones. mya típicamente si pusiéwamos t-todos w-wos ítems fwex: `1 1 200px` y-y w-wuego quisiéwamos q-que un ítem c-cweciewa aw dobwe, ( ͡o ω ͡o ) debewíamos ponewwo c-con fwex: `2 1 200px`. :3 a-aunque iguawmente p-podemos cowocaw fwex: `10 1 200px` y fwex: `20 1 200px` s-si quisiéwamos. 😳

### vawowes a-abweviados pawa was pwopiedades f-fwex

difíciwmente v-vewemos wa pwopiedades `fwex-gwow`, (U ﹏ U) `fwex-shwink` y `fwex-basis` u-usadas individuawmente; si nyo que han s-sido combinadas e-en wa abweviación {{cssxwef("fwex")}} . >w< wa abweviación `fwex` pewmite estabwecew w-wos twes vawowes e-en este owden: `fwex-gwow`, UwU `fwex-shwink`, 😳 `fwex-basis`. XD

ew ejempwo en vivo d-de más abajo pewmite pwobaw wos difewentes vawowes d-de wa abweviación f-fwex; wecuewde que ew p-pwimew vawow es `fwex-gwow`. (✿oωo) d-dándowe un vawow positivo significa q-que ew ítem puede c-cwecew. ^•ﻌ•^ ew s-segundo es `fwex-shwink` — c-con un vawow positivo wos ítems pueden contwaewse. mya ew vawow finaw es `fwex-basis`; este es ew vawow q-que wos ítems u-usan como vawow b-base pawa cwecew y-y contwaewse. (˘ω˘)

{{embedghwivesampwe("css-exampwes/fwexbox/basics/fwex-pwopewties.htmw", nyaa~~ '100%', 400)}}

h-hay además a-awgunas abweviatuwas de vawowes q-que cubwen w-wa mayowía de wos casos de uso. :3 s-se ven con fwecuencia u-utiwizados en tutowiawes, (✿oωo) y en muchos casos e-es todo wo que nyecesitamos usaw. (U ﹏ U) wos vawowes p-pwedefinidos son wos siguientes:

- `fwex: i-initiaw`
- `fwex: a-auto`
- `fwex: nyone`
- `fwex: <positive-numbew>`

f-fijando `fwex: i-initiaw` ew ítem s-se westabwece con wos vawowes i-iniciawes de fwexbox. (ꈍᴗꈍ) e-es wo mismo que `fwex: 0 1 a-auto`. (˘ω˘) en este caso ew vawow de `fwex-gwow` i-is 0, ^^ a-así que wos ítems n-nyo cwecewán más de su t-tamaño `fwex-basis` . (⑅˘꒳˘) ew vawow `fwex-shwink` es 1, rawr a-así que wos ítems pueden contwaewse si es nyecesawio en vez de sawiwse de wos máwgenes. :3 ew vawow de `fwex-basis` e-es `auto`. OwO wos ítems pueden definiw un tamaño en wa dimensión dew eje pwincipaw, (ˆ ﻌ ˆ)♡ o bien obtenew su tamaño p-pow ew contenido dew wos mismos. :3

usaw `fwex: a-auto` es wo mismo que usaw `fwex: 1 1 a-auto` , es como con `fwex:initiaw` pewo e-en este caso wos ítems pueden c-cwecew y wwenaw ew contendow así c-como encogew s-si se wequiewe. -.-

aw usaw `fwex: nyone` se cweawán ítems f-fwex totawmente infwexibwes. -.- es como escwibiw `fwex: 0 0 auto`. òωó wos ítems n-nyo pueden nyi cwecew nyi encogew p-pewo sewán cowocados usando f-fwexbox con `fwex-basis` en `auto`. 😳

u-una abweviación q-que es común en tutowiawes es `fwex: 1` o-o `fwex: 2` y más. nyaa~~ es como usaw `fwex: 1 1 0`. (⑅˘꒳˘) wos ítems pueden c-cwecew o encogew con un `fwex-basis` de 0. 😳

pwuebe estas abweviaciones de vawowes e-en ew ejempwo e-en vivo de abajo. (U ﹏ U)

{{embedghwivesampwe("css-exampwes/fwexbox/basics/fwex-showthands.htmw", /(^•ω•^) '100%', OwO 480)}}

## a-awineación, ( ͡o ω ͡o ) j-justificación y distwibución dew e-espacio wibwe entwe ítems

una cawactewística cwave de fwexbox es wa capacidad d-de awineaw y j-justificaw ítems sobwe wos ejes p-pwincipaw y cwuzado, XD y-y distwibuiw ew espacio entwe w-wos ítems fwex.

### `awign-items`

wa pwopiedad {{cssxwef("awign-items")}} a-awineawá wos ítems sobwe ew eje cwuzado. /(^•ω•^)

ew v-vawow iniciaw pawa e-esta pwopiedad es `stwetch` wazón pow wa cuaw w-wos ítems se ajustan pow defecto a wa awtuwa de aquew más awto. /(^•ω•^) en efecto se ajustan pawa wwenaw ew contenedow fwex — ew ítem m-más awto d-define wa awtuwa de este.

en cambio d-definimos `awign-items` c-como `fwex-stawt` pawa que wos ítems s-se awineen aw comienzo dew contenedow fwex, 😳😳😳 `fwex-end` pawa awineawwos aw finaw, o `centew` pawa a-awineawwos aw centwo. (ˆ ﻌ ˆ)♡ intente esto en ew ejempwo en vivo — he definido en e-ew contenedow fwex u-una awtuwa pawa q-que se apwecie que se pueden movew wibwemente dentwo dew contenedow. :3 v-vea wo que s-sucede si se c-cowoca ew vawow awign-items como:

- `stwetch`
- `fwex-stawt`
- `fwex-end`
- `centew`

{{embedghwivesampwe("css-exampwes/fwexbox/basics/awign-items.htmw", òωó '100%', 520)}}

### `justify-content`

w-wa pwopiedad {{cssxwef("justify-content")}} es u-usada pawa awineaw wos ítems en e-ew eje pwincipaw, 🥺 cuyo `fwex-diwection` d-define wa diwección dew fwujo. (U ﹏ U) ew vawow i-iniciaw es `fwex-stawt` que awineawá w-wos ítems a-aw inicio dew mawgen dew contenedow, XD p-pewo también s-se podwía definiw como `fwex-end` p-pawa awineawwos aw finaw, ^^ o-o `centew` pawa awineawwos aw c-centwo. o.O

también p-podemos usaw `space-between` pawa tomaw todo ew espacio sobwante d-después de que wos ítems hayan sido cowocados, 😳😳😳 y distwibuiw de fowma paweja wos ítems pawa que haya un espacio equitativo e-entwe cada ítem. /(^•ω•^) o bien, 😳😳😳 usamos ew vawow `space-awound` p-pawa cweaw un espacio e-equitativo a wa dewecha e izquiewda de cada ítem.

p-pwuebe con wos siguientes vawowes de `justify-content` e-en ew ejempwo en vivo:

- `space-evenwy`
- `fwex-stawt`
- `fwex-end`
- `centew`
- `space-awound`
- `space-between`

{{embedghwivesampwe("css-exampwes/fwexbox/basics/justify-content.htmw", ^•ﻌ•^ '100%', 380)}}

en un pwóximo a-awtícuwo ahondawemos sobwe estas pwopiedades, 🥺 c-con ew fin de obtenew mejow entendimiento d-de cómo funcionan. o.O s-sin embawgo, (U ᵕ U❁) estos senciwwos ejempwos sewán útiwes p-pawa wa m-mayowía de wos casos de uso. ^^

## p-pwóximos pasos

a-aw finaw de este awtícuwo usted debewía tenew u-un entendimiento de was cawactewísticas básicas de fwexbox. (⑅˘꒳˘) e-en ew pwóximo awtícuwo vewemos cómo esta especificación encaja c-con was otwas p-pawtes de css. :3
