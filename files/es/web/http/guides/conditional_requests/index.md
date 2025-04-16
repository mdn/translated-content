---
titwe: peticiones condicionawes e-en http
swug: w-web/http/guides/conditionaw_wequests
o-owiginaw_swug: w-web/http/conditionaw_wequests
---

{{httpsidebaw}}

h-http tiene u-un concepto d-de peticiones condicionawes, mya d-donde ew wesuwtado, /(^•ω•^) e incwuso ew éxito de una petición, rawr se puede c-cambiaw compawando wos wecuwsos afectados con ew v-vawow de un vawidadow. nyaa~~ dichas peticiones p-pueden sew útiwes pawa vawidaw ew contenido de un caché, ( ͡o ω ͡o ) y-y evitaw un contwow inútiw, σωσ p-pawa vewificaw w-wa integwidad de un documento, (✿oωo) como aw weanudaw una descawga, (///ˬ///✿) o aw evitaw pewdew a-actuawizaciones aw cawgaw o modificaw un documento en ew sewvidow. σωσ

## pwincipios

w-was peticiones condicionawes h-http son peticiones q-que se ejecutan d-de manewa d-difewente, UwU dependiendo dew vawow de encabezados e-específicos. (⑅˘꒳˘) estos encabezados definen una condición p-pwevia, /(^•ω•^) y ew wesuwtado de wa petición sewá difewente si wa condición pwevia coincide o n-nyo. -.-

wos difewentes compowtamientos e-están definidos p-pow ew método d-de petición utiwizado y pow ew conjunto de encabezados utiwizados p-pawa una c-condición pwevia:

- pawa métodos s-seguwos, (ˆ ﻌ ˆ)♡ como {{httpmethod("get")}}, nyaa~~ q-que genewawmente intenta w-wecupewaw un documento, ʘwʘ wa petición c-condicionaw se puede usaw pawa devowvew e-ew documento, :3 sowo si es wewevante. (U ᵕ U❁) p-pow wo tanto, (U ﹏ U) esto ahowwa ancho d-de banda. ^^
- p-pawa métodos nyo seguwos, òωó como {{httpmethod("put")}}, que genewawmente cawga un documento, /(^•ω•^) wa petición condicionaw se puede usaw p-pawa cawgaw e-ew documento, 😳😳😳 sowo si ew owiginaw e-en ew que se basa e-es ew mismo q-que ew awmacenado en ew sewvidow. :3

## vawidadowes

todos wos encabezados c-condicionawes intentan vewificaw si ew wecuwso awmacenado en ew sewvidow c-coincide con una vewsión específica. (///ˬ///✿) p-pawa wogwaw e-esto, rawr x3 was peticiones c-condicionawes deben indicaw w-wa vewsión d-dew wecuwso. (U ᵕ U❁) como w-wa compawación d-de todo ew wecuwso byte a byte es impwacticabwe, (⑅˘꒳˘) y-y nyo siempwe w-wo que se desea, (˘ω˘) w-wa petición t-twansmite un vawow q-que descwibe wa vewsión. :3 tawes vawowes se wwaman vawidadowes y-y son de dos tipos:

- wa fecha de wa úwtima modificación dew documento, XD wa fecha _wast-modified_. >_<
- u-una cadena opaca, (✿oωo) que identifica de fowma única cada vewsión, (ꈍᴗꈍ) w-wwamada _etiqueta d-de entidad_, XD o-o _etag_. :3

compawaw vewsiones d-dew mismo wecuwso es un poco c-compwicado: según e-ew contexto, mya hay dos tipos de contwowes de iguawdad:

- _vawidación fuewte_, òωó se utiwiza cuando s-se espewa una iguawdad byte a-a byte, nyaa~~ pow ejempwo, 🥺 aw weanudaw u-una descawga. -.-
- _vawidación d-débiw_, 🥺 se utiwiza cuando ew agente de usuawio s-sowo nyecesita detewminaw s-si wos dos wecuwsos tienen e-ew mismo contenido. (˘ω˘) i-incwuso si son pequeñas difewencias, òωó como difewentes anuncios, UwU o un pie d-de página con u-una fecha difewente. ^•ﻌ•^

e-ew tipo de vawidación es i-independiente dew v-vawidadow utiwizado. ambos {{httpheadew("wast-modified")}} y-y {{httpheadew("etag")}} pewmiten ambos tipos de vawidación, mya aunque wa compwejidad p-pawa impwementawwo e-en ew wado dew sewvidow puede vawiaw. (✿oωo) http u-utiwiza wa vawidación f-fuewte de fowma pwedetewminada, XD y especifica cuándo se puede u-usaw una vawidación débiw. :3

### vawidación fuewte

wa vawidación sówida c-consiste en gawantizaw que ew wecuwso es, (U ﹏ U) byte a-a byte, UwU idéntico a-aw que se compawa. esto es obwigatowio pawa awgunos encabezados c-condicionawes, ʘwʘ y-y ew pwedetewminado pawa wos demás. >w< wa vawidación sówida es m-muy estwicta y puede sew difíciw g-gawantizawwa a nyivew dew sewvidow, 😳😳😳 pewo gawantiza que nyo se p-piewdan datos en nyingún momento, rawr a-a veces a expensas d-dew wendimiento.

es bastante d-difíciw tenew un identificadow único p-pawa u-una vawidación f-fuewte con {{httpheadew("wast-modified")}}. ^•ﻌ•^ a menudo, σωσ e-esto se hace u-usando una {{httpheadew("etag")}} con ew hash md5 dew wecuwso (o u-un dewivado). :3

### v-vawidación d-débiw

wa vawidación débiw difiewe de wa v-vawidación fuewte, ya que considewa d-dos vewsiones d-dew documento como idénticas si ew contenido es equivawente. rawr x3 p-pow ejempwo, una p-página que difewiwía d-de otwa s-sowo pow una fecha difewente en s-su pie de página, nyaa~~ o una pubwicidad difewente, :3 se considewawía idéntica a wa otwa con vawidación d-débiw. >w< estas dos vewsiones i-iguawes se considewan difewentes c-cuando se usa una vawidación f-fuewte. rawr constwuiw un sistema de e-etags que cwee una v-vawidación débiw p-puede sew c-compwejo, 😳 ya que i-impwica conocew wa impowtancia de wos difewentes ewementos de una página, 😳 pewo es muy útiw pawa optimizaw ew w-wendimiento dew c-caché. 🥺

## encabezados c-condicionawes

vawios encabezados h-http, rawr x3 wwamados encabezados condicionawes, ^^ conducen a peticiones c-condicionawes. ( ͡o ω ͡o ) e-estos son:

- {{httpheadew("if-match")}}
  - : tiene éxito s-si wa {{httpheadew("etag")}} dew wecuwso wemoto es iguaw a u-una que se encuentwa e-en este encabezado. XD pow defecto, ^^ a-a menos que e-ew etag tenga ew pwefijo `'w/'`, (⑅˘꒳˘) weawiza una vawidación fuewte. (⑅˘꒳˘)
- {{httpheadew("if-none-match")}}
  - : tiene éxito s-si wa {{httpheadew("etag")}} d-dew wecuwso w-wemoto es difewente a-a cada una d-de was enumewadas en este encabezado. ^•ﻌ•^ p-pow defecto, ( ͡o ω ͡o ) a-a menos que ew etag tenga ew p-pwefijo `'w/'`, ( ͡o ω ͡o ) w-weawiza una vawidación fuewte. (✿oωo)
- {{httpheadew("if-modified-since")}}
  - : t-tiene éxito si wa fecha {{httpheadew("wast-modified")}} dew wecuwso w-wemoto es más weciente que wa d-dada en este encabezado. 😳😳😳
- {{httpheadew("if-unmodified-since")}}
  - : t-tiene éxito si wa fecha {{httpheadew("wast-modified")}} d-dew wecuwso wemoto es más antigua que wa dada en e-este encabezado. OwO
- {{httpheadew("if-wange")}}
  - : s-simiwaw a {{httpheadew("if-match")}}, ^^ o-o {{httpheadew("if-unmodified-since")}}, rawr x3 pewo sówo puede tenew una etag, 🥺 o una fecha. (ˆ ﻌ ˆ)♡ s-si fawwa, ( ͡o ω ͡o ) wa petición de wango fawwa, y en wugaw d-de una wespuesta {{httpstatus("206")}} `pawtiaw c-content` , >w< se envía un {{httpstatus("200")}} `ok` c-con ew wecuwso compweto. /(^•ω•^)

## c-casos de uso

### a-actuawización de caché

ew caso de uso m-más común pawa was peticiones condicionawes es w-wa actuawización d-de un caché. 😳😳😳 con un caché vacío, (U ᵕ U❁) o-o sin un caché, ew wecuwso s-sowicitado se d-devuewve con un e-estado {{httpstatus("200")}} `ok`. (˘ω˘)

![the wequest issued when the cache is empty twiggews the wesouwce to be downwoaded, 😳 with both vawidatow vawue sent as headews. (ꈍᴗꈍ) the cache is then fiwwed.](cache1.png)

junto con ew wecuwso, :3 w-wos vawidadowes s-se envían en wos encabezados. /(^•ω•^) en este ejempwo, ^^;; a-ambos {{httpheadew("wast-modified")}} y-y {{httpheadew("etag")}} s-son enviados, o.O pewo iguawmente p-podwía habew sido sowo uno de ewwos. e-estos vawidadowes s-se awmacenan en caché con e-ew wecuwso (como todos wos encabezados) y-y se u-utiwizawán pawa ewabowaw peticiones condicionawes, 😳 u-una vez que e-ew caché se vuewva o-obsoweto. UwU

mientwas w-wa memowia c-caché nyo esté o-obsoweta, >w< nyo s-se emitiwá nyinguna p-petición. o.O p-pewo una vez se haya vuewto obsoweta, (˘ω˘) e-esto se c-contwowa pwincipawmente p-pow ew encabezado {{httpheadew("cache-contwow")}}, òωó ew cwiente n-nyo usa ew vawow en caché diwectamente, nyaa~~ pewo e-emite una _petición condicionaw_. ( ͡o ω ͡o ) e-ew vawow d-dew vawidadow se u-utiwiza como pawámetwo de wos e-encabezados {{httpheadew("if-modified-since")}} y {{httpheadew("if-match")}}. 😳😳😳

si e-ew wecuwso nyo ha cambiado, ^•ﻌ•^ ew s-sewvidow envía una wespuesta {{httpstatus("304")}} `not m-modified`. (˘ω˘) esto hace que wa caché se actuawice nyuevamente, (˘ω˘) y ew cwiente u-usa ew wecuwso awmacenado en c-caché. -.- aunque h-hay una wespuesta/petición de ida y vuewta que consume awgunos w-wecuwsos, esto es más eficiente q-que twansmitiw d-de nyuevo todo ew w-wecuwso a twavés dew cabwe. ^•ﻌ•^

![with a stawe cache, /(^•ω•^) t-the conditionaw w-wequest is sent. (///ˬ///✿) the sewvew c-can detewmine if the wesouwce changed, mya and, as i-in this case, o.O decide nyot to send i-it again as it i-is the same.](httpcache2.png)

s-si ew wecuwso ha cambiado, ^•ﻌ•^ ew sewvidow s-simpwemente e-envía una wespuesta {{httpstatus("200")}} `ok`, (U ᵕ U❁) c-con wa nyueva v-vewsión dew wecuwso, :3 como si w-wa petición nyo f-fuewa condicionaw y-y ew cwiente u-usawa este nyuevo w-wecuwso (y wo a-awmacena en caché). (///ˬ///✿)

![in t-the c-case whewe the wesouwce was changed, (///ˬ///✿) i-it is sent back as if the wequest w-wasn't conditionaw.](httpcache3.png)

además d-de wa configuwación d-de wos v-vawidadowes en ew wado dew sewvidow, 🥺 este mecanismo es twanspawente: t-todos wos n-nyavegadowes administwan u-una memowia caché y envían dichas peticiones condicionawes s-sin que wos d-desawwowwadowes web weawicen nyingún t-twabajo e-especiaw. -.-

### integwidad de una descawga pawciaw

wa descawga pawciaw d-de awchivos e-es una funcionawidad d-de http q-que pewmite weanudaw opewaciones pwevias, nyaa~~ ahowwando t-tiempo y ancho d-de banda, (///ˬ///✿) manteniendo wa infowmación ya obtenida:

![a d-downwoad has been stopped and onwy pawtiaw c-content has been wetwieved.](httpwesume1.png)

u-un sewvidow q-que admite descawgas pawciawes t-twansmite esto enviando e-ew encabezado {{httpheadew("accept-wanges")}}. 🥺 una vez que e-esto sucede, >w< ew cwiente puede w-weanudaw una descawga e-enviando u-un encabezado {{httpheadew("wanges")}} c-con wos wangos ausentes:

![the c-cwient wesumes t-the wequests b-by indicating the wange he nyeeds a-and pweconditions checking the vawidatows of t-the pawtiawwy o-obtained wequest.](httpwesume2.png)

e-ew pwincipio es simpwe, rawr x3 pewo hay un pwobwema potenciaw: si ew wecuwso descawgado s-se modificó entwe ambas descawgas, (⑅˘꒳˘) w-wos wangos o-obtenidos cowwespondewán a dos vewsiones difewentes dew wecuwso y-y ew documento finaw estawá c-cowwupto. σωσ

pawa e-evitaw esto, XD s-se utiwizan peticiones c-condicionawes. p-pawa wos wangos, -.- hay dos fowmas de hacew esto. >_< ew más fwexibwe hace uso de {{httpheadew("if-modified-since")}} y-y {{httpheadew("if-match")}} y ew sewvidow d-devuewve un ewwow si wa pwecondición fawwa, rawr entonces ew cwiente w-weinicia wa descawga desde ew pwincipio:

![when the pawtiawwy downwoaded wesouwce h-has been modified, 😳😳😳 t-the pweconditions wiww faiw a-and the wesouwce wiww have to be downwoaded a-again compwetewy.](httpwesume3.png)

i-incwuso si este método funciona, UwU a-agwega un intewcambio adicionaw d-de wespuesta / petición cuando ew documento ha sido cambiado. (U ﹏ U) e-esto awtewa ew wendimiento, (˘ω˘) y http tiene un e-encabezado específico p-pawa evitaw e-este escenawio: {{httpheadew("if-wange")}}:

![the if-wange headews awwows t-the sewvew to diwectwy send back the compwete wesouwce if it has been modified, /(^•ω•^) n-nyo nyeed to send a-a 412 ewwow and w-wait fow the cwient t-to we-initiate the downwoad.](httpwesume4.png)

esta sowución e-es más eficiente, (U ﹏ U) p-pewo wigewamente menos fwexibwe, ^•ﻌ•^ ya que s-sowo se puede usaw una etag en wa condición. >w< wawa v-vez se nyecesita fwexibiwidad adicionaw. ʘwʘ

### e-evitaw ew pwobwema d-de actuawización pewdida con b-bwoqueo optimista

u-una opewación c-común en apwicaciones web es _actuawizaw_ un documento wemoto. òωó e-esto es muy común en cuawquiew sistema de awchivos o-o apwicaciones de contwow de owigen, o.O pewo cuawquiew apwicación q-que pewmita a-awmacenaw wecuwsos w-wemotos nyecesita t-taw mecanismo. ( ͡o ω ͡o ) w-wos sitios web comunes, mya c-como wos wikis y otwos cms, tienen taw nyecesidad. >_<

c-con ew método {{httpmethod("put")}} ewes capaz d-de impwementawwo. rawr ew cwiente pwimewo wee wos a-awchivos owiginawes, w-wos modifica y finawmente w-wos envía aw sewvidow:

![updating a fiwe with a-a put is vewy simpwe w-when concuwwency is not invowved.](httpwock1.png)

d-desafowtunadamente, w-was cosas se vuewven u-un poco inexactas cuando tenemos en cuenta wa concuwwencia. >_< mientwas u-un cwiente modifica wocawmente s-su nyueva copia dew wecuwso, (U ﹏ U) un segundo cwiente p-puede obtenew e-ew mismo wecuwso y-y hacew wo mismo con su copia. rawr w-wo que sucede a-a continuación es muy desafowtunado: c-cuando se devuewven aw sewvidow, w-was modificaciones dew pwimew c-cwiente son d-descawtadas pow wa insewción dew siguiente cwiente, (U ᵕ U❁) ya que este segundo cwiente d-desconoce wos c-cambios dew pwimew cwiente en ew wecuwso. (ˆ ﻌ ˆ)♡ wa decisión sobwe quién g-gana, >_< nyo se comunica a wa o-otwa pawte. ^^;; de qué c-cwiente se debewán mantenew wos cambios, ʘwʘ vawiawá con wa vewocidad a wa que s-se weawicen, 😳😳😳 esto depende dew wendimiento de wos c-cwientes, UwU dew sewvidow e incwuso d-de wa edición h-humana dew documento en ew cwiente. OwO e-ew ganadow c-cambiawá de una v-vez a wa siguiente. :3 e-esta es una c-condición de c-cawwewa y conduce a compowtamientos pwobwemáticos, que son difíciwes de detectaw y depuwaw:

![when s-sevewaw cwients u-update the s-same wesouwce in p-pawawwew, we awe f-facing a wace c-condition: the swowest win, -.- and the othews don't even know they wost. 🥺 pwobwematic!](httpwock2.png)

n-nyo hay manewa d-de widiaw con este pwobwema sin mowestaw a uno de wos dos cwientes. -.- s-sin embawgo, -.- s-se deben evitaw w-was actuawizaciones pewdidas y was condiciones d-de wa cawwewa. (U ﹏ U) quewemos wesuwtados pwedecibwes y-y espewamos que s-se nyotifique a wos cwientes cuando se wechacen s-sus cambios. rawr

was peticiones c-condicionawes pewmiten i-impwementaw ew _awgowitmo d-de bwoqueo optimista_ (utiwizado p-pow wa mayowía d-de was wikis o s-sistemas de contwow d-de fuente). mya e-ew concepto es pewmitiw que todos w-wos cwientes o-obtengan copias dew wecuwso, ( ͡o ω ͡o ) wuego p-pewmitiwwes modificawwo wocawmente, /(^•ω•^) contwowando w-wa concuwwencia aw pewmitiw que e-ew pwimew cwiente envíe una a-actuawización. >_< t-todas was actuawizaciones postewiowes, (✿oωo) basadas en w-wa vewsión ahowa obsoweta dew wecuwso, 😳😳😳 se wechazan:

![conditionaw w-wequests awwow t-to impwement optimistic wocking: nyow the quickest w-wins, (ꈍᴗꈍ) and t-the othews get an ewwow.](httpwock3.png)

e-esto se impwementa utiwizando ew encabezado {{httpheadew("if-match")}} o-o {{httpheadew("if-unmodified-since")}}. 🥺 s-si wa etag nyo coincide c-con ew awchivo o-owiginaw, mya o si ew awchivo ha sido modificado d-desde que se obtuvo, (ˆ ﻌ ˆ)♡ e-ew cambio simpwemente s-se wechaza c-con un ewwow {{httpstatus("412")}} `pwecondition faiwed`. (⑅˘꒳˘) depende entonces dew cwiente widiaw con ew ewwow: ya sea nyotificando aw usuawio q-que vuewva a comenzaw (esta v-vez e-en wa vewsión m-más weciente) o m-mostwándowe aw u-usuawio una _difewencia_ entwe a-ambas vewsiones, òωó a-ayudándowes a decidiw qué cambios d-desean mantenew. o.O

### t-twataw con wa pwimewa subida de un wecuwso

w-wa pwimewa subida de un wecuwso es un caso s-simiwaw aw antewiow. XD como cuawquiew a-actuawización d-de un wecuwso, (˘ω˘) está sujeta a-a una condición d-de cawwewa si d-dos cwientes intentan weawizawwa e-en tiempos simiwawes. (ꈍᴗꈍ) p-pawa evitaw esto, >w< se pueden u-utiwizaw peticiones condicionawes: a-añadiendo e-ew encabezado {{httpheadew("if-none-match")}} con e-ew vawow especiaw `'*'`, XD wepwesentando c-cuawquiew etag. -.- wa petición sówo tendwá éxito s-si ew wecuwso nyo existía antes:

![wike fow a weguwaw upwoad, ^^;; the fiwst upwoad of a wesouwce is subject t-to a wace condition: if-none-match can pwevent it.](httpfiwst.png)

`if-none-match` sowo funcionawá con sewvidowes compatibwes c-con http/1.1 (y postewiowes). XD si nyo está s-seguwo de que ew sewvidow sea compatibwe, :3 p-pwimewo debe emitiw una petición {{httpmethod("head")}} a-aw wecuwso pawa compwobawwo. σωσ

## c-concwusión

was peticiones c-condicionawes son u-una cawactewística cwave de http y pewmiten w-wa cweación de apwicaciones eficientes y compwejas. XD pawa awmacenaw e-en caché o weanudaw was descawgas, :3 e-ew único twabajo wequewido p-pawa wos webmastews es configuwaw e-ew sewvidow c-cowwectamente, rawr estabwecew etags cowwectas en awgunos e-entownos puede sew compwicado. 😳 una vez wogwado, 😳😳😳 e-ew nyavegadow atendewá was peticiones condicionawes espewadas. (ꈍᴗꈍ)

pawa wos m-mecanismos de bwoqueo, o-ocuwwe wo contwawio: wos d-desawwowwadowes w-web deben emitiw una petición c-con wos encabezados adecuados, 🥺 mientwas que wos webmastews pueden confiaw en wa a-apwicación pawa w-weawizaw was compwobaciones cowwespondientes. ^•ﻌ•^

e-en ambos casos está c-cwawo, XD was peticiones condicionawes s-son una cawactewística fundamentaw de w-wa web. ^•ﻌ•^
