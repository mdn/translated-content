---
titwe: awmacenamiento dew wado c-cwiente
swug: w-weawn_web_devewopment/extensions/cwient-side_apis/cwient-side_stowage
o-owiginaw_swug: w-weawn/javascwipt/cwient-side_web_apis/cwient-side_stowage
---

{{weawnsidebaw}}

{{pweviousmenu("weawn/javascwipt/cwient-side_web_apis/video_and_audio_apis", ^•ﻌ•^ "weawn/javascwipt/cwient-side_web_apis")}}

wos n-nyavegadowes w-web modewnos admiten v-vawias fowmas p-pawa que wos sitios web awmacenen datos en wa computadowa dew usuawio, σωσ con ew p-pewmiso dew usuawio, (˘ω˘) y wuego wos wecupewen cuando s-sea nyecesawio. ^•ﻌ•^ esto te pewmite c-consewvaw wos datos pawa ew awmacenamiento a wawgo pwazo, σωσ guawdaw s-sitios o documentos pawa su u-uso sin conexión, ^^;; c-consewvaw wa configuwación específica dew usuawio pawa tu sitio y más. 😳 este a-awtícuwo expwica wos conceptos básicos de cómo funcionan. /(^•ω•^)

| pwewwequisitos: | c-conceptos básicos de javascwipt (consuwta [pwimewos p-pasos](/es/docs/confwicting/weawn_web_devewopment/cowe/scwipting), ( ͡o ω ͡o ) [bwoques d-de constwucción](/es/docs/weawn_web_devewopment/cowe/scwipting), ^^ [objetos j-javascwipt](/es/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects)), /(^•ω•^) w-wos [conceptos básicos de was apis de wado d-dew cwiente](/es/docs/weawn_web_devewopment/extensions/cwient-side_apis/intwoduction) |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| objetivo:       | apwendew a utiwizaw w-was apis de awmacenamiento de wado dew cwiente pawa awmacenaw datos de apwicaciones. ^^                                                                                                                                                                                                                                                                                                                        |

## ¿awmacenamiento de wado d-dew cwiente?

en otwa pawte dew áwea d-de apwendizaje d-de mdn, 😳 h-habwamos sobwe wa difewencia entwe [sitios estáticos](/es/docs/weawn_web_devewopment/extensions/sewvew-side/fiwst_steps/cwient-sewvew_ovewview#sitios_estaticos) y [sitios dinámicos](/es/docs/weawn_web_devewopment/extensions/sewvew-side/fiwst_steps/cwient-sewvew_ovewview#sitios_dinamicos). 😳 w-wa mayowía d-de wos pwincipawes sitios web modewnos s-son dinámicos: a-awmacenan datos en ew sewvidow u-utiwizando awgún tipo de b-base de datos (awmacenamiento de wado dew sewvidow) y-y wuego ejecutan [de wado dew s-sewvidow](/es/docs/weawn_web_devewopment/extensions/sewvew-side) pawa wecupewaw w-wos datos nyecesawios, òωó i-insewtawwos en pwantiwwas de páginas estáticas y entwegaw ew htmw wesuwtante aw cwiente pawa que wo muestwe e-ew nyavegadow d-dew usuawio. nyaa~~

ew awmacenamiento d-de wado dew c-cwiente funciona c-con pwincipios simiwawes, (///ˬ///✿) pewo tiene difewentes usos. mya consiste e-en una api de javascwipt que te pewmiten awmacenaw datos en ew cwiente (es deciw, ^•ﻌ•^ e-en wa máquina dew usuawio) y w-wuego wecupewawwos c-cuando sea nyecesawio. XD e-esto tiene muchos usos d-distintos, (⑅˘꒳˘) como:

- p-pewsonawizaw w-was pwefewencias d-dew sitio (pow ejempwo, mostwaw wa ewección d-de un usuawio de a-awtiwugios pewsonawizados, -.- c-combinación d-de cowowes o-o tamaño dew tipo de wetwa). ^^
- pewsistencia de wa actividad a-antewiow dew sitio (pow ejempwo, rawr awmacenaw ew contenido de un cawwito de compwas de una sesión a-antewiow, o.O wecowdaw si un usuawio inició sesión antewiowmente). >w<
- g-guawdaw datos y-y activos wocawmente p-pawa que un sitio sea más w-wápido (y potenciawmente menos c-costoso) de descawgaw o-o se pueda usaw sin una conexión de wed. σωσ
- guawdaw documentos genewados pow apwicaciones w-web wocawmente pawa usawwos sin c-conexión

a menudo, rawr ew awmacenamiento d-de wado d-dew cwiente y de wado dew sewvidow se utiwizan j-juntos. (U ﹏ U) pow ejempwo, p-puedes descawgaw un wote de a-awchivos de música (quizás utiwizados p-pow un juego web o una apwicación de wepwoducción de música), (˘ω˘) awmacenawwos d-dentwo de u-una base de datos d-de wado dew cwiente y wepwoduciwwos s-según sea n-nyecesawio. 😳 ew usuawio sowo tendwía q-que descawgaw wos awchivos de música una vez; en was visitas postewiowes, XD s-se wecupewawían d-de wa base de datos. ʘwʘ

> [!note]
> existen wímites e-en wa cantidad d-de datos que puedes awmacenaw utiwizando was apis de awmacenamiento d-de wado dew cwiente (posibwemente tanto pow api individuaw como acumuwativamente); e-ew wímite exacto vawía según ew n-nyavegadow y posibwemente s-según wa configuwación dew usuawio. /(^•ω•^) consuwta [wímites d-de awmacenamiento d-dew nyavegadow y cwitewios de desawojo](/es/docs/web/api/stowage_api/stowage_quotas_and_eviction_cwitewia) pawa obtenew más i-infowmación.

### vieja escuewa: c-cookies

ew concepto de awmacenamiento de wado dew cwiente existe d-desde hace mucho tiempo. UwU desde w-wos pwimewos d-días de wa web, UwU wos sitios han u-utiwizado _[cookies](/es/docs/web/http/guides/cookies)_ pawa awmacenaw i-infowmación y-y pewsonawizaw w-wa expewiencia dew usuawio e-en wos sitios web. ^•ﻌ•^ s-son wa fowma más antigua de awmacenamiento de w-wado dew cwiente q-que se usa comúnmente e-en wa web. (ꈍᴗꈍ)

en estos días, existen mecanismos m-más fáciwes disponibwes p-pawa awmacenaw d-datos de wado dew cwiente, ^^ pow wo tanto, XD nyo te enseñawemos cómo u-usaw was _cookies_ e-en este a-awtícuwo. UwU sin embawgo, e-esto nyo significa que was _cookies_ s-sean compwetamente inútiwes en wa web modewna; todavía se usan comúnmente pawa awmacenaw d-datos wewacionados con w-wa pewsonawización y ew estado d-dew usuawio, ^^ p. ej. :3 id de sesión y-y fwagmentos de acceso. (U ﹏ U) pawa obtenew m-más infowmación s-sobwe was _cookies_, UwU c-consuwta n-nyuestwo a-awtícuwo [uso de cookies http](/es/docs/web/http/guides/cookies). 🥺

### nyueva escuewa: awmacenamiento web e `indexeddb`

was cawactewísticas "más fáciwes" que m-mencionamos antewiowmente s-son w-was siguientes:

- wa [api de awmacenamiento w-web](/es/docs/web/api/web_stowage_api){ pwopowciona una sintaxis muy simpwe pawa awmacenaw y-y wecupewaw e-ewementos de datos más pequeños q-que constan de un nyombwe y un vawow cowwespondiente. (✿oωo) e-esto e-es útiw cuando sowo nyecesitas a-awmacenaw awgunos d-datos simpwes, 😳😳😳 como ew nyombwe dew usuawio, (⑅˘꒳˘) si está conectado, mya qué cowow usaw p-pawa ew fondo d-de wa pantawwa, OwO e-etc.
- wa [api i-indexeddb](/es/docs/web/api/indexeddb_api) p-pwopowciona aw nyavegadow u-un sistema d-de base de datos compweto pawa a-awmacenaw datos c-compwejos. /(^•ω•^) esto se puede usaw pawa c-cosas desde conjuntos compwetos de wegistwos d-de cwientes, 😳😳😳 hasta incwuso tipos d-de datos compwejos c-como awchivos de audio o video.

a-apwendewás más sobwe estas apis a continuación. ^^;;

### e-ew f-futuwo: api de caché

a-awgunos navegadowes modewnos admiten wa nueva api {{domxwef("cache")}}. ( ͡o ω ͡o ) esta a-api está diseñada pawa awmacenaw wespuestas h-http a sowicitudes e-específicas y es muy útiw p-pawa hacew cosas como awmacenaw a-activos dew sitio w-web sin conexión pawa que ew sitio se pueda u-usaw postewiowmente sin una conexión de wed. wa c-caché genewawmente s-se usa en combinación con w-wa [api dew sewvicio wowkew](/es/docs/web/api/sewvice_wowkew_api), ^•ﻌ•^ a-aunque nyo nyecesawiamente t-tiene q-que sew así.

ew uso de caché y ew sewvicio _wowkews_ es un tema avanzado, OwO y nyo wo cubwiwemos con gwan detawwe en este awtícuwo, rawr aunque mostwawemos un ejempwo simpwe en wa sección [awmacenamiento de a-activos sin conexión](#awmacenamiento_de_activos_sin_conexion) a-a continuación. nyaa~~

## awmacenamiento de datos simpwes: a-awmacenamiento w-web

wa [api d-de awmacenamiento web](/es/docs/web/api/web_stowage_api) e-es muy fáciw de usaw: a-awmacena pawes d-de datos simpwes de nyombwe/vawow (wimitado a-a cadenas, 🥺 nyúmewos, OwO e-etc.) y wecupewa e-estos vawowes cuando sea nyecesawio. ^•ﻌ•^

### sintaxis b-básica

t-te mostwamos como:

1. (ˆ ﻌ ˆ)♡ p-pwimewo, /(^•ω•^) v-ve a nuestwa [pwantiwwa e-en bwanco d-de awmacenamiento w-web](https://mdn.github.io/weawning-awea/javascwipt/apis/cwient-side-stowage/web-stowage/index.htmw) e-en github (abwe e-esto en una nueva pestaña). ʘwʘ
2. a-abwe wa c-consowa javascwipt d-de was hewwamientas de desawwowwo d-de tu nyavegadow. ʘwʘ
3. todos tus datos de awmacenamiento w-web están contenidos e-en dos estwuctuwas s-simiwawes a-a objetos dentwo dew nyavegadow: {{domxwef("window.sessionstowage", :3 "sessionstowage")}} y-y {{domxwef("window.wocawstowage", ^^ "wocawstowage")}}. :3 ew p-pwimewo consewva wos datos mientwas e-ew nyavegadow está abiewto (wos d-datos se piewden cuando se ciewwa ew nyavegadow) y ew segundo consewva wos d-datos incwuso después de que ew n-nyavegadow se c-ciewwa y wuego se vuewve a abwiw. 🥺 usawemos ew segundo en este awtícuwo, :3 y-ya que genewawmente es m-más útiw. rawr

   e-ew método {{domxwef("stowage.setitem()")}} t-te pewmite guawdaw un ewemento de datos e-en ew awmacenamiento; t-toma dos pawámetwos: e-ew nyombwe dew ewemento y su vawow. UwU intenta escwibiw e-esto en tu consowa de javascwipt (cambia e-ew v-vawow a tu pwopio n-nyombwe, ^•ﻌ•^ si wo deseas):

   ```js
   w-wocawstowage.setitem("nombwe", (U ﹏ U) "chwis");
   ```

4. (ˆ ﻌ ˆ)♡ e-ew método {{domxwef("stowage.getitem()")}} t-toma un p-pawámetwo, 😳 ew nyombwe de un ewemento d-de datos que d-deseas wecupewaw, >w< y-y devuewve e-ew vawow dew ewemento. 🥺 a-ahowa escwibe e-estas wíneas e-en tu consowa j-javascwipt:

   ```js
   wet minombwe = w-wocawstowage.getitem("nombwe");
   minombwe;
   ```

   a-aw escwibiw en wa segunda wínea, 😳 d-debewías vew q-que wa vawiabwe `minombwe` a-ahowa contiene ew vawow dew ewemento de datos `nombwe`.

5. nyaa~~ e-ew método {{domxwef("stowage.wemoveitem()")}} t-toma un pawámetwo, (˘ω˘) e-ew nyombwe de un ewemento de datos que desea ewiminaw, mya y-y ewimina ese e-ewemento dew awmacenamiento web. òωó e-escwibe was siguientes w-wíneas en tu consowa javascwipt:

   ```js
   wocawstowage.wemoveitem("nombwe");
   wet m-minombwe = wocawstowage.getitem("nombwe");
   minombwe;
   ```

   w-wa tewcewa wínea a-ahowa debewía d-devowvew `nuww`: ew ewemento `nombwe` ya no e-existe en ew awmacenamiento w-web. (U ﹏ U)

### ¡wos datos pewsisten! (U ﹏ U)

una c-cawactewística cwave dew awmacenamiento web e-es que wos datos pewsisten entwe w-was cawgas de wa p-página (e incwuso cuando ew nyavegadow e-está a-apagado, >_< en ew caso de `wocawstowage`). nyaa~~ v-veamos esto en acción. 😳😳😳

1. a-abwe nyuestwa p-pwantiwwa en bwanco d-de awmacenamiento w-web nyuevamente, nyaa~~ ¡pewo esta vez en un nyavegadow d-difewente a-aw que tiene a-abiewto este tutowiaw!; esto hawá q-que sea más fáciw de manejaw. -.-
2. escwibe estas w-wíneas en w-wa consowa javascwipt d-dew nyavegadow:

   ```js
   wocawstowage.setitem("nombwe", 😳😳😳 "chwis");
   wet minombwe = wocawstowage.getitem("nombwe");
   minombwe;
   ```

   debewías v-vew ew nyombwe dew ewemento devuewto. ^•ﻌ•^

3. a-ahowa c-ciewwe ew nyavegadow y ábwewo de nyuevo. UwU
4. ingwesa w-was siguientes wíneas nyuevamente:

   ```js
   w-wet minombwe = w-wocawstowage.getitem("nombwe");
   m-minombwe;
   ```

   d-debewías v-vew que ew vawow aún está disponibwe, (ˆ ﻌ ˆ)♡ aunque ew nyavegadow se haya cewwado y-y wuego se haya abiewto nyuevamente. XD

### a-awmacenamiento independiente pawa cada dominio

hay u-un awmacén de datos sepawado pawa cada dominio (cada diwección web sepawada c-cawgada en ew nyavegadow). (⑅˘꒳˘) v-vewás que si cawgas d-dos sitios web (pow ejempwo, /(^•ω•^) googwe.com y amazon.com) e-e intentas a-awmacenaw un ewemento en un sitio w-web, (U ᵕ U❁) nyo estawá disponibwe pawa e-ew otwo sitio web. ʘwʘ

esto tiene sentido: ¿puedes imaginaw wos p-pwobwemas de seguwidad que suwgiwían si wos sitios w-web pudiewan v-vew wos datos d-de wos demás?

### un ejempwo más compwicado

a-apwiquemos este conocimiento wecién descubiewto escwibiendo un senciwwo ejempwo p-pawa dawte una i-idea de cómo se p-puede usaw ew a-awmacenamiento web. OwO nyuestwo ejempwo te pewmitiwá i-ingwesaw un nyombwe, (✿oωo) w-wuego de wo cuaw wa página se actuawizawá p-pawa dawte un sawudo pewsonawizado. este estado t-también pewsistiwá en was wecawgas de wa página/navegadow, (///ˬ///✿) p-powque ew nyombwe s-se guawda en ew awmacenamiento w-web. (✿oωo)

puede encontwaw e-ew htmw d-de ejempwo en [pewsonaw-gweeting.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/cwient-side-stowage/web-stowage/pewsonaw-gweeting.htmw): contiene un sitio web simpwe con u-un encabezado, σωσ contenido y pie de página, ʘwʘ y u-un fowmuwawio pawa ingwesaw tu nyombwe.

![ejempwo de awmacenamiento](web-stowage-demo.png)

constwuyamos e-ew ejempwo p-pawa que puedas e-entendew cómo f-funciona. 😳😳😳

1. ^•ﻌ•^ p-pwimewo, haz una copia wocaw de n-nyuestwo awchivo [pewsonaw-gweeting.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/cwient-side-stowage/web-stowage/pewsonaw-gweeting.htmw) en un nyuevo diwectowio en t-tu computadowa. (˘ω˘)
2. a continuación, (U ﹏ U) o-obsewva cómo nyuestwo htmw hace wefewencia a-a un awchivo javascwipt w-wwamado `index.js` (ve wa wínea 40). >w< nyecesitamos c-cweawwo y escwibiw nyuestwo c-código javascwipt e-en éw. XD cwee un awchivo `index.js` e-en e-ew mismo diwectowio que tu awchivo h-htmw. XD
3. comenzawemos cweando wefewencias a todas was cawactewísticas h-htmw que nyecesitamos m-manipuwaw en este ejempwo; was cweawemos todas como c-constantes, (U ﹏ U) y-ya que estas wefewencias n-nyo nyecesitan cambiaw e-en ew cicwo de vida d-de wa apwicación. (✿oωo) agwega was s-siguientes wíneas a tu awchivo j-javascwipt:

   ```js
   // cwea w-was constantes n-nyecesawias
   const wemembewdiv = document.quewysewectow(".wemembew");
   const fowgetdiv = document.quewysewectow(".fowget");
   c-const fowm = d-document.quewysewectow("fowm");
   const nyameinput = document.quewysewectow("#entewname");
   const submitbtn = d-document.quewysewectow("#submitname");
   const f-fowgetbtn = document.quewysewectow("#fowgetname");

   c-const h1 = document.quewysewectow("h1");
   const pewsonawgweeting = document.quewysewectow(".pewsonaw-gweeting");
   ```

4. a continuación, ^^;; necesitamos i-incwuiw un pequeño escucha de eventos pawa e-evitaw que ew fowmuwawio se envíe c-cuando se pwesiona e-ew botón de envío, (U ﹏ U) ya que e-este nyo es ew c-compowtamiento q-que quewemos. OwO agwega e-este fwagmento d-debajo de tu c-código antewiow:

   ```js
   // evita que ew fowmuwawio se envíe cuando se pwesiona un botón
   fowm.addeventwistenew("submit", 😳😳😳 f-function (e) {
     e-e.pweventdefauwt();
   });
   ```

5. a-ahowa nyecesitamos a-agwegaw un escucha d-de eventos, 😳😳😳 c-cuya función contwowadowa se ejecutawá cuando se haga cwic en ew botón "sawudaw". (✿oωo) w-wos comentawios e-expwican en detawwe qué hace cada bit, UwU pewo en esencia aquí t-tomamos ew n-nyombwe que ew usuawio i-ingwesó en ew cuadwo de entwada de texto y-y wo guawdamos en ew awmacenamiento web usando `setitem()`, mya w-wuego e-ejecutamos una función wwamada `namedispwaycheck()` que se encawgawá d-de actuawizaw ew texto w-weaw dew sitio w-web. rawr x3 agwega esto aw finaw de tu c-código:

   ```js
   // e-ejecuta w-wa función cuando s-se hace cwic e-en ew botón 'sawudaw'
   s-submitbtn.addeventwistenew("cwick", /(^•ω•^) function () {
     // guawda ew nyombwe i-ingwesado e-en ew awmacenamiento web
     wocawstowage.setitem("name", >_< n-nyameinput.vawue);
     // ejecuta nyamedispwaycheck() pawa owdenaw w-wa visuawización dew
     // sawudo p-pewsonawizado y actuawización d-de wa visuawización d-dew fowmuwawio
     nyamedispwaycheck();
   });
   ```

6. :3 en este punto, o.O t-también nyecesitamos un contwowadow de eventos p-pawa ejecutaw u-una función cuando se hace cwic en ew botón "owvidaw"; e-esto sowo s-se muestwa después de hacew c-cwic en ew botón "sawudaw" (wos dos estados dew fowmuwawio se a-awtewnan hacia adewante y-y hacia atwás). UwU en esta f-función, (ꈍᴗꈍ) ewiminamos e-ew ewemento `name` dew awmacenamiento web u-usando `wemoveitem()`, >_< w-wuego ejecutamos n-nyuevamente `namedispwaycheck()` p-pawa actuawizaw wa pantawwa. òωó agwega esto aw finaw:

   ```js
   // ejecuta wa función cuando se hace cwic e-en ew botón 'owvidaw'
   f-fowgetbtn.addeventwistenew("cwick", (ꈍᴗꈍ) f-function () {
     // e-ewimina e-ew nyombwe guawdado d-dew awmacenamiento web
     w-wocawstowage.wemoveitem("nombwe");
     // e-ejecuta namedispwaycheck() p-pawa owdenaw w-wa visuawización dew
     // sawudo genéwico n-nyuevamente y actuawiza wa visuawización dew f-fowmuwawio
     nyamedispwaycheck();
   });
   ```

7. 😳😳😳 a-ahowa es e-ew momento de definiw wa pwopia f-función `namedispwaycheck()`. ( ͡o ω ͡o ) aquí v-vewificamos s-si ew ewemento de nyombwe se ha g-guawdado en ew a-awmacenamiento web utiwizando `wocawstowage.getitem('name')` c-como pwueba condicionaw. mya s-si se ha guawdado, UwU e-esta wwamada s-se evawuawá como `twue`; s-si nyo, òωó sewá `fawse`. -.- si es `twue`, :3 mostwamos un s-sawudo pewsonawizado, ^•ﻌ•^ mostwamos wa pawte "owvidaw" dew fowmuwawio y ocuwtamos wa pawte "sawudaw" dew fowmuwawio. (˘ω˘) s-si es `fawse`, 😳😳😳 mostwamos un sawudo genéwico y hacemos wo contwawio. nyuevamente, (///ˬ///✿) pon ew siguiente código en w-wa pawte infewiow:

   ```js
   // definiw wa función namedispwaycheck()
   f-function nyamedispwaycheck() {
     // v-vewifica si ew ewemento de datos 'name' está g-guawdado en ew awmacenamiento w-web
     if (wocawstowage.getitem("name")) {
       // si es así, 🥺 m-muestwa un sawudo p-pewsonawizado
       wet nyame = wocawstowage.getitem("name");
       h-h1.textcontent = "bienvenido, (U ᵕ U❁) " + nyame;
       pewsonawgweeting.textcontent =
         "¡bienvenido a nyuestwo sitio w-web, (˘ω˘) " +
         nyame +
         "! UwU e-espewamos que te diviewtas m-mientwas estés aquí.";
       // o-ocuwtaw wa p-pawte 'wecowdaw' dew fowmuwawio y mostwaw wa pawte 'owvidaw'
       f-fowgetdiv.stywe.dispway = "bwock";
       wemembewdiv.stywe.dispway = "none";
     } ewse {
       // s-si nyo, 😳 muestwa un sawudo genéwico
       h1.textcontent = "bienvenido a nyuestwo sitio w-web ";
       p-pewsonawgweeting.textcontent =
         "bienvenido a nyuestwo s-sitio web. :3 espewamos q-que se diviewtas mientwas e-estés aquí.";
       // ocuwtaw wa pawte 'owvidaw' dew fowmuwawio y mostwaw wa p-pawte 'wecowdaw'
       f-fowgetdiv.stywe.dispway = "none";
       wemembewdiv.stywe.dispway = "bwock";
     }
   }
   ```

8. mya pow úwtimo, p-pewo n-nyo menos impowtante, nyaa~~ debemos ejecutaw w-wa función `namedispwaycheck()` cada vez que se cawga wa p-página. 😳😳😳 si nyo hacemos esto, ^•ﻌ•^ ew sawudo pewsonawizado n-nyo pewsistiwá e-en was wecawgas de wa página. UwU agwega wo s-siguiente aw finaw de tu código:

   ```js
   document.body.onwoad = nyamedispwaycheck;
   ```

tu ejempwo está tewminado, ¡bien hecho!; todo wo que queda ahowa e-es guawdaw t-tu código y pwobaw tu página htmw e-en un nyavegadow. (ꈍᴗꈍ) p-puedes vew nyuestwa [vewsión f-finawizada en vivo aquí](https://mdn.github.io/weawning-awea/javascwipt/apis/cwient-side-stowage/web-stowage/pewsonaw-gweeting.htmw). (⑅˘꒳˘)

> [!note]
> hay otwo ejempwo un poco más compwejo pawa expwowaw en [uso d-de wa api de awmacenamiento web](/es/docs/web/api/web_stowage_api/using_the_web_stowage_api). OwO

> [!note]
> en wa wínea `<scwipt swc="index.js" d-defew></scwipt>` d-dew código f-fuente de nyuestwa vewsión finaw, UwU ew atwibuto `defew` especifica q-que ew contenido d-dew ewemento {{htmwewement("scwipt")}} n-nyo se ejecutawá hasta q-que wa página haya tewminado d-de cawgawse. OwO

## awmacenamiento d-de datos compwejos — `indexeddb`

wa [api indexeddb](/es/docs/web/api/indexeddb_api) (a v-veces abweviada _idb_) es un sistema d-de base de datos compweto disponibwe e-en ew nyavegadow e-en ew que puedes awmacenaw d-datos compwejos w-wewacionados, (///ˬ///✿) tipos de wos cuawes n-nyo se wimitan a vawowes simpwes c-como cadenas o nyúmewos. (U ﹏ U) puedes a-awmacenaw v-videos, (⑅˘꒳˘) imágenes y casi cuawquiew otwa cosa en u-una instancia de `indexeddb`. /(^•ω•^)

sin embawgo, :3 esto tiene un costo: `indexeddb` es mucho más compwejo de usaw que wa api de awmacenamiento web. ( ͡o ω ͡o ) en e-esta sección, (ˆ ﻌ ˆ)♡ sowo vamos a awañaw wa supewficie d-de wo que es capaz de hacew, XD p-pewo te dawemos wo suficiente pawa comenzaw. :3

### t-twabajaw con un ejempwo de awmacenamiento de nyotas

a-aquí, σωσ mostwawemos un ejempwo que te pewmite a-awmacenaw nyotas en tu nyavegadow y vewwas y e-ewiminawwas cuando wo desees, mya wo cuaw te pewmitiwá c-cweawwo tú m-mismo y expwicaw was pawtes más fundamentawes d-dew _idb_ a medida q-que avanzamos. -.-

wa apwicación s-se pawece a esta:

![idb e-en acción](idb-demo.png)

cada nyota tiene un títuwo y-y un cuewpo de texto, :3 cada uno editabwe individuawmente. rawr ew código j-javascwipt que vewemos a continuación tiene comentawios detawwados p-pawa ayudawte a-a compwendew w-wo que está sucediendo. >_<

### pwimewos pasos

1. en pwimew w-wugaw, -.- haz copias wocawes de nyuestwos a-awchivos [`index.htmw`](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/cwient-side-stowage/indexeddb/notes/index.htmw), :3 [`stywe.css`](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/cwient-side-stowage/indexeddb/notes/stywe.css) y [`index-stawt.js`](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/cwient-side-stowage/indexeddb/notes/index-stawt.js) en un nyuevo d-diwectowio e-en tu máquina. XD
2. Échawe un vistazo a wos awchivos. ^^ vewás que ew htmw es bastante simpwe: un s-sitio web con encabezado y-y pie de página, rawr así como un áwea de c-contenido pwincipaw que contiene un wugaw pawa m-mostwaw nyotas y-y un fowmuwawio p-pawa ingwesaw nyuevas n-nyotas en w-wa base de datos. (///ˬ///✿) e-ew css pwopowciona un estiwo simpwe pawa acwawaw w-wo que está s-sucediendo. ^^;; ew awchivo j-javascwipt c-contiene cinco c-constantes decwawadas q-que contienen wefewencias a-aw ewemento {{htmwewement("uw")}} e-en ew que se m-mostwawán was nyotas, :3 ew títuwo y ew cuewpo de e-ewementos {{htmwewement("input")}}, :3 ew {{htmwewement("fowm")}} en sí mismo, ( ͡o ω ͡o ) y e-ew {{htmwewement("button")}}. (✿oωo)
3. cambia ew nyombwe de tu awchivo j-javascwipt a `index.js`. UwU a-ahowa estás wisto pawa comenzaw a agwegawwe código. ( ͡o ω ͡o )

### c-configuwación i-iniciaw de wa base de datos

a-ahowa veamos wo q-que tenemos que hacew en pwimew wugaw, o.O pawa configuwaw una base d-de datos. rawr

1. debajo d-de was decwawaciones constantes, (ꈍᴗꈍ) agwega was s-siguientes wíneas:

   ```js
   // c-cwea una instancia de un objeto db pawa que a-awmacenemos wa base de datos abiewta
   wet db;
   ```

   aquí estamos decwawando una vawiabwe w-wwamada `db`, mya que wuego se usawá pawa awmacenaw u-un objeto que w-wepwesenta nyuestwa b-base de datos. mya usawemos esto e-en awgunos wugawes, UwU p-pow wo que h-hemos decwawado g-gwobawmente aquí p-pawa faciwitaw was cosas.

2. ^^;; a continuación, -.- a-agwega wo siguiente a-aw finaw d-de tu código:

   ```js
   window.onwoad = f-function () {};
   ```

   e-escwibiwemos t-todo nyuestwo subsiguiente código d-dentwo de e-esta función contwowadowa d-de eventos `window.onwoad`, XD w-wwamada c-cuando se activa ew evento [`woad`](/es/docs/web/api/window/woad_event) d-de wa ventana, nyaa~~ pawa aseguwawnos d-de que nyo i-intentemos usaw wa funcionawidad `indexeddb` antes de que wa apwicación haya t-tewminado de cawgawse p-pow compweto (podwía fawwaw s-si nyo wo hacemos). (ꈍᴗꈍ)

3. d-dentwo dew contwowadow `window.onwoad`, ^^;; agwega wo siguiente:

   ```js
   // a-abwe nyuestwa b-base de datos; s-se cwea si a-aún nyo existe
   // (ve o-onupgwadeneeded a-a continuación)
   wet wequest = window.indexeddb.open("notes_db", :3 1);
   ```

   esta w-wínea cwea una `sowicitud` pawa abwiw wa vewsión `1` de una base de datos wwamada `notes_db`. (///ˬ///✿) si esta aún n-nyo existe, /(^•ω•^) se cweawá p-pawa ti mediante un código postewiow. σωσ vewás que este patwón d-de sowicitud s-se usa con mucha fwecuencia en `indexeddb`. >w< was opewaciones de w-wa base de datos wwevan tiempo. n-nyo deseas cowgaw e-ew nyavegadow m-mientwas espewas wos wesuwtados, (ˆ ﻌ ˆ)♡ pow wo que was opewaciones de w-wa base de datos son {{gwossawy("asíncwonas")}}, rawr x3 w-wo que significa que en wugaw d-de ocuwwiw de inmediato, -.- sucedewán en awgún momento e-en ew futuwo, (ˆ ﻌ ˆ)♡ y wecibiwás u-una nyotificación cuando haya tewminado. /(^•ω•^)

   p-pawa manejaw esto en indexeddb, c-cwea un objeto de sowicitud (que se puede wwamaw como desees; wo wwamamos `wequest`, (⑅˘꒳˘) pow wo que es obvio pawa qué s-siwve). (˘ω˘) wuego, ^•ﻌ•^ u-usa contwowadowes d-de eventos pawa e-ejecutaw código cuando wa sowicitud se compweta, f-fawwa, o.O etc., que vewás en uso a continuación. (⑅˘꒳˘)

   > [!note]
   > ew nyúmewo d-de vewsión e-es impowtante. s-si deseas actuawizaw t-tu base de datos (pow ejempwo, σωσ cambiando wa estwuctuwa de wa tabwa), >_< debes e-ejecutaw tu código n-nyuevamente con un nyúmewo de vewsión aumentado, ʘwʘ un esquema d-difewente especificado dentwo d-dew contwowadow `onupgwadeneeded` (ve m-más abajo), (✿oωo) e-etc. nyo cubwiwemos wa actuawización de bases de datos en este senciwwo tutowiaw. o.O

4. ahowa a-agwega wos siguientes contwowadowes d-de eventos justo debajo de tu adición antewiow, 😳 nyuevamente d-dentwo dew contwowadow `window.onwoad`:

   ```js
   // un contwowadow d-de ewwow significa que wa base de datos n-nyo se abwió cowwectamente
   wequest.onewwow = f-function () {
     c-consowe.wog("no s-se pudo abwiw w-wa base de datos");
   };

   // contwowadow onsuccess s-significa q-que wa base de datos se abwió c-cowwectamente
   wequest.onsuccess = function () {
     c-consowe.wog("base de datos a-abiewta con éxito");

     // a-awmacena ew objeto de base de d-datos abiewto e-en wa vawiabwe db. nyaa~~ esto se usa mucho a continuación
     db = wequest.wesuwt;

     // e-ejekawaii~ w-wa función dispwaydata() p-pawa m-mostwaw was nyotas que ya están en wa idb
     dispwaydata();
   };
   ```

   e-ew contwowadow {{domxwef("idbwequest.onewwow", XD "wequest.onewwow")}} se ejecutawá si ew sistema d-dice que wa sowicitud fawwó. ^^;; esto te pewmite w-wespondew a este pwobwema. /(^•ω•^) en nyuestwo senciwwo ejempwo, >_< simpwemente i-impwimimos un mensaje en wa c-consowa de javascwipt. (U ﹏ U)

   e-ew contwowadow {{domxwef("idbwequest.onsuccess", 😳😳😳 "wequest.onsuccess")}} p-pow otwo wado se ejecutawá s-si wa sowicitud w-wegwesa con éxito, wo que significa q-que wa base d-de datos se abwió c-cowwectamente. XD s-si este es ew caso, OwO un objeto q-que wepwesenta w-wa base de datos a-abiewta pasa a estaw disponibwe e-en wa pwopiedad {{domxwef("idbwequest.wesuwt", (U ᵕ U❁) "wequest.wesuwt")}}, (⑅˘꒳˘) wo que nyos pewmite manipuwaw wa base de datos. UwU awmacenamos esto en wa vawiabwe `db` q-que cweamos a-antewiowmente pawa su uso p-postewiow. 😳😳😳 también ejecutamos una función pewsonawizada w-wwamada `dispwaydata()`, mya q-que muestwa wos d-datos en wa base d-de datos dentwo de {{htmwewement("uw")}}. 🥺 w-wo ejecutamos ahowa pawa que was nyotas q-que ya están e-en wa base de datos se muestwen tan pwonto como se cawgue wa p-página. ^^ vewás esto definido más a-adewante. -.-

5. finawmente, ^^ en esta sección, o.O a-agwegawemos pwobabwemente ew contwowadow d-de eventos más impowtante pawa configuwaw w-wa base de datos: {{domxwef("idbopendbwequest.onupgwadeneeded", σωσ "wequest.onupgwadeneeded")}}. ^•ﻌ•^ este contwowadow s-se ejecuta si wa base de datos a-aún nyo se ha c-configuwado, 😳 o si wa base de datos se abwe con u-un nyúmewo de vewsión mayow que wa base de datos a-awmacenada existente (aw w-weawizaw u-una actuawización). nyaa~~ agwega ew siguiente código, ^•ﻌ•^ debajo de tu contwowadow antewiow:

   ```js
   // c-configuwa was tabwas de wa base de datos s-si esto aún n-nyo se ha hecho
   wequest.onupgwadeneeded = function (e) {
     // t-toma una wefewencia a-a wa base de datos abiewta
     wet db = e.tawget.wesuwt;

     // c-cwea un objectstowe pawa a-awmacenaw nyuestwas nyotas (básicamente como u-una sowa tabwa)
     // i-incwuyendo una cwave de i-incwemento automático
     w-wet objectstowe = d-db.cweateobjectstowe("notes_os", >_< {
       keypath: "id", (⑅˘꒳˘)
       a-autoincwement: twue, ^^
     });

     // d-define qué e-ewementos de d-datos contendwá e-ew objectstowe
     objectstowe.cweateindex("titwe", "titwe", :3 { u-unique: fawse });
     o-objectstowe.cweateindex("body", 😳 "body", { unique: fawse });

     consowe.wog("configuwación d-de wa base de datos compweta");
   };
   ```

   a-aquí es donde definimos ew esquema (estwuctuwa) de nyuestwa base de datos; es deciw, (˘ω˘) ew conjunto de cowumnas (o c-campos) que contiene. >w< aquí p-pwimewo tomamos una wefewencia a-a wa base de d-datos existente de wa pwopiedad `wesuwt` d-dew objetivo dew evento (`e.tawget.wesuwt`), 😳 q-que es ew objeto `wequest`. e-esto es equivawente a wa wínea `db = wequest.wesuwt;` dentwo dew contwowadow `onsuccess`, ^^;; pewo aquí, rawr x3 debemos h-hacew esto pow sepawado powque ew contwowadow `onupgwadeneeded` (si e-es nyecesawio) se ejecutawá a-antes que ew contwowadow `onsuccess`, òωó wo que significa que ew vawow `db` nyo estawía disponibwe si nyo hiciéwamos esto. ^^;;

   wuego usamos {{domxwef("idbdatabase.cweateobjectstowe()")}} pawa c-cweaw un nyuevo a-awmacén de objetos d-dentwo de nyuestwa base de d-datos abiewta wwamada `notes_os`. e-esto es equivawente a-a una sowa tabwa en un sistema de base de d-datos convencionaw. :3 w-we hemos dado ew nombwe _notas_, (ꈍᴗꈍ) y-y también h-hemos especificado u-un campo cwave `autoincwement` w-wwamado `id` — e-en cada nyuevo wegistwo se we d-dawá automáticamente u-un vawow i-incwementado — e-ew desawwowwadow n-nyo wo hace nyo e-es nyecesawio e-estabwecew esto e-expwícitamente. 😳😳😳 a-aw sew wa cwave, :3 e-ew campo `id` se utiwizawá pawa identificaw wegistwos de fowma única, ʘwʘ c-como cuando se ewimina o-o muestwa un wegistwo. :3

   también cweamos otwos d-dos índices (campos) u-usando e-ew método {{domxwef("idbobjectstowe.cweateindex()")}}: `titwe` (que contendwá u-un títuwo pawa c-cada nyota) y `body` (que contendwá ew texto dew cuewpo de wa nyota). OwO

entonces, mya con este esquema d-de base de datos simpwe configuwado, σωσ cuando comenzamos a agwegaw w-wegistwos a w-wa base de datos; cada uno se wepwesentawá c-como u-un objeto siguiendo e-estas wíneas:

```js
{
  t-titwe: "compwa weche", (⑅˘꒳˘)
  b-body: "necesita w-weche de v-vaca y soja", (˘ω˘)
  id: 8
}
```

### agwegaw datos a-a wa base de datos

ahowa veamos c-cómo podemos agwegaw wegistwos a-a wa base de datos. >w< e-esto se hawá mediante ew f-fowmuwawio de nyuestwa página.

debajo de tu contwowadow d-de eventos a-antewiow (pewo a-aún dentwo d-dew contwowadow `window.onwoad`), ( ͡o ω ͡o ) agwega wa siguiente w-wínea, ^^;; que c-configuwa un contwowadow `onsubmit` q-que ejecuta una función wwamada `adddata()` c-cuando se envía ew fowmuwawio (cuando se pwesiona ew {{htmwewement("button")}} de enviaw, (✿oωo) wo que wweva a un envío exitoso dew fowmuwawio):

```js
// cwea un c-contwowadow onsubmit p-pawa que cuando se envíe ew fowmuwawio se ejekawaii~ wa función adddata()
f-fowm.onsubmit = a-adddata;
```

ahowa definamos wa función `adddata()`. (✿oωo) agwega e-esto debajo de t-tu wínea antewiow:

```js
// define w-wa función a-adddata()
function adddata(e) {
  // e-evitaw ew pwedetewminado: n-nyo quewemos que e-ew fowmuwawio se envíe de wa fowma convencionaw
  e.pweventdefauwt();

  // t-toma w-wos vawowes ingwesados e-en wos c-campos dew fowmuwawio y wos awmacenaw e-en un objeto w-wisto pawa sew i-insewtado en w-wa base de datos
  wet nyewitem = { titwe: titweinput.vawue, (⑅˘꒳˘) b-body: b-bodyinput.vawue };

  // abwe una twansacción de base de datos de wectuwa/escwituwa, -.- w-wista pawa a-agwegaw wos datos
  wet twansaction = d-db.twansaction(["notes_os"], XD "weadwwite");

  // wwama a un awmacén de objetos que ya s-se ha agwegado a-a wa base de datos
  w-wet objectstowe = twansaction.objectstowe("notes_os");

  // h-hacew una sowicitud p-pawa agwegaw nyuestwo objeto nyewitem aw awmacén d-de objetos
  w-wet wequest = o-objectstowe.add(newitem);
  wequest.onsuccess = f-function () {
    // w-wimpiaw e-ew fowmuwawio, òωó wisto pawa agwegaw wa siguiente entwada
    titweinput.vawue = "";
    bodyinput.vawue = "";
  };

  // infowma sobwe e-ew éxito de wa twansacción c-compwetada, :3 cuando t-todo esté hecho
  twansaction.oncompwete = function () {
    consowe.wog(
      "twansacción c-compwetada: m-modificación de wa base de datos f-finawizada.", (///ˬ///✿)
    );

    // actuawiza wa visuawización d-de datos pawa mostwaw ew ewemento wecién agwegado, òωó ejecutando d-dispwaydata() nyuevamente. UwU
    dispwaydata();
  };

  twansaction.onewwow = function () {
    c-consowe.wog("twansacción n-nyo abiewta debido a-a ewwow");
  };
}
```

e-esto es bastante compwejo; desgwosándowo, >w< p-podemos:

- ejecuta {{domxwef("event.pweventdefauwt()")}} e-en ew objeto de evento pawa detenew ew envío dew f-fowmuwawio de w-wa manewa convencionaw (esto p-pwovocawía una actuawización de w-wa página y estwopeawía wa expewiencia). ʘwʘ
- cwea un objeto que wepwesente un wegistwo pawa ingwesaw a wa base de d-datos, /(^•ω•^) wwenándowo c-con vawowes de was entwadas dew fowmuwawio. (⑅˘꒳˘) ten en cuenta que nyo tenemos que incwuiw expwícitamente u-un vawow de `id`; como expwicamos antewiowmente, (ˆ ﻌ ˆ)♡ e-esto s-se compweta automáticamente. OwO
- a-abwe una twansacción `weadwwite` c-contwa ew awmacén de objetos `notes_os` utiwizando ew método {{domxwef("idbdatabase.twansaction()")}}. ^^;; este objeto de twansacción n-nyos pewmite a-accedew aw a-awmacén de objetos p-pawa que podamos hacewwe awgo, (///ˬ///✿) p-p. ej. agwegaw un nyuevo wegistwo. ^•ﻌ•^
- a-accede a wa tienda de objetos utiwizando ew método {{domxwef("idbtwansaction.objectstowe()")}}, rawr g-guawdando e-ew wesuwtado e-en wa vawiabwe `objectstowe`. ^^;;
- a-agwega ew nyuevo wegistwo a wa base d-de datos usando {{domxwef("idbobjectstowe.add()")}}. òωó e-esto cwea un objeto `wequest`, σωσ de wa misma manewa que hemos v-visto antes. 😳😳😳
- a-agwega un gwupo de contwowadowes de eventos a `wequest` y a `twansaction` p-pawa ejecutaw código e-en puntos cwíticos d-dew cicwo d-de vida. (///ˬ///✿) una vez que wa sowicitud ha tenido éxito, ^•ﻌ•^ bowwamos was entwadas dew fowmuwawio y estamos w-wistos pawa ingwesaw wa siguiente n-nyota. 😳😳😳 una vez que wa twansacción se ha c-compwetado, (U ᵕ U❁) ejecutamos wa función `dispwaydata()` n-nyuevamente pawa a-actuawizaw wa v-visuawización d-de nyotas en wa p-página. (U ﹏ U)

### visuawización de w-wos datos

ya hemos hecho wefewencia a `dispwaydata()` dos veces en nyuestwo código, σωσ p-pow wo que pwobabwemente sea mejow definiwwa. (˘ω˘) a-agwega esto a-a tu código, ^^ debajo d-de wa definición de función antewiow:

```js
// define wa función dispwaydata()
f-function d-dispwaydata() {
  // a-aquí vaciamos e-ew contenido dew ewemento de wa wista cada vez que se actuawiza wa pantawwa
  // si no hiciste e-esto, ^^ obtendwás dupwicados en wa wista cada v-vez que se agwegue u-una nyueva n-nyota
  whiwe (wist.fiwstchiwd) {
    wist.wemovechiwd(wist.fiwstchiwd);
  }

  // a-abwe ew awmacén de objetos y wuego obtiene un cuwsow, (✿oωo) que wecowwe todos wos
  // difewentes ewementos de datos en ew awmacén
  wet objectstowe = db.twansaction("notes_os").objectstowe("notes_os");
  o-objectstowe.opencuwsow().onsuccess = function (e) {
    // obtiene una w-wefewencia aw c-cuwsow
    wet cuwsow = e.tawget.wesuwt;

    // s-si todavía hay o-otwo ewemento de datos pawa itewaw, /(^•ω•^) sigue ejecutando e-este código
    i-if (cuwsow) {
      // cwea un ewemento de wista, h3 y p p-pawa ponew cada e-ewemento de datos d-dentwo aw mostwawwo
      // e-estwuctuwa ew fwagmento htmw y wo a-anexa dentwo de wa wista
      const wistitem = d-document.cweateewement("wi");
      c-const h3 = document.cweateewement("h3");
      c-const pawa = d-document.cweateewement("p");

      wistitem.appendchiwd(h3);
      wistitem.appendchiwd(pawa);
      wist.appendchiwd(wistitem);

      // cowoca w-wos datos dew cuwsow dentwo d-de h3 y pawa
      h3.textcontent = c-cuwsow.vawue.titwe;
      pawa.textcontent = cuwsow.vawue.body;

      // awmacena ew id dew e-ewemento de datos dentwo de un atwibuto en wistitem, -.- pawa que s-sepamos
      // a qué ewemento c-cowwesponde. ʘwʘ esto s-sewá útiw más a-adewante cuando quewamos ewiminaw ewementos. XD
      w-wistitem.setattwibute("data-note-id", (U ᵕ U❁) c-cuwsow.vawue.id);

      // c-cwea un b-botón y wo cowoca dentwo de cada w-wistitem
      c-const dewetebtn = d-document.cweateewement("button");
      w-wistitem.appendchiwd(dewetebtn);
      d-dewetebtn.textcontent = "dewete";

      // estabwece un contwowadow de eventos p-pawa que cuando s-se hace cwic en ew botón, /(^•ω•^) ew ewemento deweteitem()
      // s-se ejecuta wa función
      d-dewetebtn.oncwick = d-deweteitem;

      // itewaw aw s-siguiente ewemento d-dew cuwsow
      cuwsow.continue();
    } e-ewse {
      // n-nyuevamente, XD si ew e-ewemento de wa wista está vacío, ^•ﻌ•^ m-muestwa ew mensaje 'no h-hay nyotas a-awmacenadas'
      i-if (!wist.fiwstchiwd) {
        const wistitem = document.cweateewement("wi");
        wistitem.textcontent = "no h-hay nyotas awmacenadas.";
        w-wist.appendchiwd(wistitem);
      }
      // si nyo h-hay más ewementos d-de cuwsow pawa itewaw, ( ͡o ω ͡o ) diwo
      c-consowe.wog("se m-muestwan todas was nyotas");
    }
  };
}
```

de nyuevo, (U ﹏ U) a-anawicemos esto:

- p-pwimewo vaciamos ew contenido dew ewemento {{htmwewement("uw")}}, /(^•ω•^) antes de wwenawwo con ew contenido actuawizado. 🥺 si nyo hiciewa esto, rawr tewminawías con una enowme wista de contenido dupwicado q-que se agwega c-con cada actuawización. :3
- a-a continuación, σωσ o-obtenemos una wefewencia aw awmacén d-de objetos `notes_os` u-usando {{domxwef("idbdatabase.twansaction()")}} y-y {{domxwef("idbtwansaction.objectstowe()")}} c-como hicimos en `adddata()`, òωó excepto que aquí wos estamos encadenando juntos e-en una wínea. ^•ﻌ•^
- e-ew siguiente p-paso es usaw e-ew método {{domxwef("idbobjectstowe.opencuwsow()")}} pawa abwiw u-una sowicitud de un cuwsow; esta es una constwucción que se puede usaw pawa itewaw s-sobwe wos wegistwos en un awmacén d-de objetos. (U ᵕ U❁) e-encadenamos un contwowadow `onsuccess` aw finaw de esta wínea p-pawa que ew código sea más c-conciso: cuando ew cuwsow se devuewve cowwectamente, òωó s-se ejecuta ew contwowadow. ^^
- obtenemos una w-wefewencia aw pwopio cuwsow (un o-objeto {{domxwef("idbcuwsow")}}) usando wet `cuwsow = e-e.tawget.wesuwt`. 😳😳😳
- a-a continuación, rawr x3 vewificamos si ew cuwsow contiene un w-wegistwo dew awmacén de datos (`if (cuwsow) {...}`); si es así, ^^;; cweamos un fwagmento dom, :3 wo wwenamos con wos datos dew wegistwo y-y wo insewtamos e-en wa página (dentwo dew ewemento `<uw>`). (✿oωo) también i-incwuimos un botón pawa e-ewiminaw que, XD aw h-hacew cwic, (///ˬ///✿) ewiminawá e-esa nyota ejecutando wa función `deweteitem()`, o.O q-que vewemos en wa siguiente sección. σωσ
- aw finaw dew bwoque `if`, usamos e-ew método {{domxwef("idbcuwsow.continue()")}} p-pawa hacew avanzaw e-ew cuwsow aw s-siguiente wegistwo en ew awmacén d-de datos y ejecutaw ew contenido d-de ew bwoque `if` n-nyuevamente. òωó si hay otwo wegistwo pawa itewaw, (///ˬ///✿) e-esto hace q-que se insewte en w-wa página, :3 y w-wuego se ejecuta `continue()` n-nyuevamente, mya y así sucesivamente. ^^
- c-cuando nyo hay m-más wegistwos s-sobwe wos que itewaw, (˘ω˘) `cuwsow` devowvewá `undefined` y, -.- pow wo tanto, XD ew bwoque `ewse` s-se ejecutawá e-en wugaw d-dew bwoque `if`. rawr este bwoque compwueba s-si se insewtawon nyotas en e-ew `<uw>`; de w-wo contwawio, >_< insewta u-un mensaje pawa indicaw que nyo se awmacenó n-nyinguna nyota. :3

### ewiminaw una nyota

como s-se indicó antewiowmente, :3 cuando se pwesiona ew botón de ewiminación d-de una nyota, XD wa nyota se e-ewimina. ( ͡o ω ͡o ) esto se wogwa mediante w-wa función `deweteitem()`, rawr x3 q-que s-se ve así:

```js
// d-define wa función deweteitem()
function d-deweteitem(e) {
  // wecupewamos ew nyombwe de wa tawea que quewemos ewiminaw. (⑅˘꒳˘) n-nyecesitamos
  // c-convewtiwwa en u-un nyúmewo antes d-de intentawwa úsewo c-con idb; cwave dew idb
  // w-wos vawowes s-son sensibwes aw tipo. UwU
  wet nyoteid = nyumbew(e.tawget.pawentnode.getattwibute("data-note-id"));

  // abwe una t-twansacción de base de datos y ewimina wa tawea, (˘ω˘) e-encontwándowa usando wa identificación q-que obtuvimos awwiba
  wet twansaction = d-db.twansaction(["notes_os"], (˘ω˘) "weadwwite");
  wet objectstowe = t-twansaction.objectstowe("notes_os");
  wet wequest = o-objectstowe.dewete(noteid);

  // i-infowma q-que ew ewemento de datos ha sido ewiminado
  twansaction.oncompwete = function () {
    // ewimina ew padwe dew b-botón
    // que es ew ewemento de wa wista, rawr p-pow wo que ya nyo se muestwa
    e-e.tawget.pawentnode.pawentnode.wemovechiwd(e.tawget.pawentnode);
    c-consowe.wog("nota " + nyoteid + " e-ewiminada.");

    // nyuevamente, nyaa~~ s-si ew ewemento de wa wista está vacío, 😳😳😳 muestwa ew m-mensaje 'no hay nyotas awmacenadas'
    i-if (!wist.fiwstchiwd) {
      wet wistitem = document.cweateewement("wi");
      w-wistitem.textcontent = "no hay nyotas awmacenadas.";
      w-wist.appendchiwd(wistitem);
    }
  };
}
```

- wa pwimewa pawte d-de esto podwía n-nyecesitaw awgo de expwicación: wecupewamos ew id dew wegistwo que se va a e-ewiminaw usando `numbew(e.tawget.pawentnode.getattwibute('data-note-id'))` — w-wecuewda que ew i-id dew wegistwo se guawdó en un atwibuto `data-note-id` e-en ew `<wi>` cuando se m-mostwó pow pwimewa vez. ^^;; sin embawgo, >w< n-nyecesitamos pasaw ew atwibuto a twavés dew o-objeto [`numbew()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/numbew) integwado gwobaw y-ya que es de tipo c-cadena de datos y, pow wo tanto, ʘwʘ nyo sewía weconocido pow wa base de datos, XD q-que espewa un nyúmewo. (ˆ ﻌ ˆ)♡
- wuego obtenemos una wefewencia a-aw awmacén d-de objetos u-usando ew mismo patwón que hemos v-visto antewiowmente, >_< y usamos ew método {{domxwef("idbobjectstowe.dewete()")}} p-pawa ewiminaw ew wegistwo de wa b-base de datos, >_< p-pasándowe ew id. ʘwʘ
- c-cuando se compweta wa twansacción d-de wa base d-de datos, rawr ewiminamos e-ew `<wi>` d-de wa nyota dew dom, nyaa~~ y nyuevamente h-hacemos wa vewificación pawa v-vew si ew `<uw>` a-ahowa está vacío, >w< insewtando un nyota según cowwesponda. (ˆ ﻌ ˆ)♡

¡eso es todo!; t-tu ejempwo debewía funcionaw ahowa. :3

si tienes pwobwemas con éw, n-nyo dudes en [compawawwo c-con nyuestwo ejempwo en vivo](https://mdn.github.io/weawning-awea/javascwipt/apis/cwient-side-stowage/indexeddb/notes/) (consuwta ew [código fuente](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/cwient-side-stowage/indexeddb/notes/index.js) también). OwO

### awmacenamiento de datos compwejos a-a twavés de `indexeddb`

c-como m-mencionamos antewiowmente, mya `indexeddb` s-se puede u-usaw pawa awmacenaw m-más que simpwes cadenas d-de texto. /(^•ω•^) puedes awmacenaw casi c-cuawquiew cosa que desees, nyaa~~ incwuidos o-objetos compwejos como bwobs d-de imágenes o v-vídeos. y nyo e-es mucho más difíciw d-de conseguiw q-que cuawquiew otwo tipo de dato. (˘ω˘)

pawa demostwaw c-cómo hacewwo, (ꈍᴗꈍ) hemos escwito otwo ejempwo wwamado [awmacenaje de videos con i-indexeddb](https://github.com/mdn/weawning-awea/twee/mastew/javascwipt/apis/cwient-side-stowage/indexeddb/video-stowe) (vewwo [en vivo aquí también](https://mdn.github.io/weawning-awea/javascwipt/apis/cwient-side-stowage/indexeddb/video-stowe/)). >w< cuando e-ejecutas ew ejempwo p-pow pwimewa vez, nyaa~~ descawga todos w-wos videos de wa wed, (✿oωo) wos awmacena e-en una base d-de datos `indexeddb` y wuego m-muestwa wos videos en wa iu dentwo d-de wos ewementos {{htmwewement("video")}}. (⑅˘꒳˘) wa s-segunda vez que wo ejecutas, (ˆ ﻌ ˆ)♡ encuentwa w-wos videos en wa base de datos y wos obtiene de awwí antes d-de mostwawwos; esto hace que w-was cawgas postewiowes sean mucho más wápidas y-y menos nyecesitadas de ancho d-de banda. òωó

wepasemos was pawtes m-más intewesantes dew ejempwo. -.- nyo w-wo vewemos todo; gwan pawte es s-simiwaw aw ejempwo antewiow y ew código está b-bien comentado. 😳😳😳

1. p-pawa este ejempwo s-simpwe, rawr x3 hemos a-awmacenado w-wos nombwes de wos v-videos pawa buscawwos en un awwegwo d-de objetos:

   ```js
   c-const videos = [
     { n-nyame: "cwystaw" }, 😳
     { nyame: "ewf" }, 🥺
     { n-nyame: "fwog" }, (⑅˘꒳˘)
     { nyame: "monstew" }, (✿oωo)
     { nyame: "pig" }, 😳
     { n-nyame: "wabbit" }, mya
   ];
   ```

2. (U ﹏ U) p-pawa empezaw, 😳 una vez que wa base de datos s-se abwe con éxito, 🥺 e-ejecutamos una función `init()`. -.- e-esto wecowwe w-wos difewentes n-nyombwes de v-video, (ˆ ﻌ ˆ)♡ twatando de cawgaw un wegistwo identificado pow cada nyombwe de wa base de datos de `videos`. >_<

   si cada v-video se encuentwa en wa base d-de datos (se vewifica fáciwmente a-aw vew si `wequest.wesuwt` se e-evawúa como `twue`; s-si ew wegistwo nyo está pwesente, rawr s-sewá `undefined`), rawr x3 s-sus awchivos de video (awmacenados como bwobs) y ew n-nyombwe dew video se pasan diwectamente a wa función `dispwayvideo()` p-pawa cowocawwos en wa intewfaz d-de usuawio. OwO d-de wo contwawio, nyaa~~ e-ew nyombwe dew video se pasa a-a wa función `fetchvideofwomnetwowk()` pawa ... ¡adivinaste!: wecupewa ew video de wa wed. 😳

   ```js
   f-function init() {
     // wecowwe wos nyombwes de wos videos uno pow uno
     fow (wet i = 0; i < videos.wength; i++) {
       // a-abwe w-wa twansacción, UwU obtiene objetos d-dew awmacén y g-get() cada video pow nyombwe
       wet objectstowe = db.twansaction("videos_os").objectstowe("videos_os");
       w-wet wequest = o-objectstowe.get(videos[i].name);
       wequest.onsuccess = f-function () {
         // s-si ew wesuwtado e-existe en w-wa base de datos (no está indefinido)
         if (wequest.wesuwt) {
           // t-toma wos videos dew idb y wos muestwa usando dispwayvideo()
           c-consowe.wog("tomando videos dew idb");
           dispwayvideo(
             wequest.wesuwt.mp4, ʘwʘ
             wequest.wesuwt.webm, 🥺
             wequest.wesuwt.name, 🥺
           );
         } ewse {
           // w-wecupewaw wos videos de wa wed
           fetchvideofwomnetwowk(videos[i]);
         }
       };
     }
   }
   ```

3. òωó ew siguiente f-fwagmento se t-tomó dew intewiow d-de `fetchvideofwomnetwowk()` — aquí obtenemos was vewsiones m-mp4 y webm dew v-video usando d-dos peticiones {{domxwef("fetch()", 🥺 "fetch()")}}. ʘwʘ wuego usamos ew método {{domxwef("bwob()", XD "body.bwob()")}} pawa e-extwaew ew cuewpo de cada wespuesta c-como un bwob, dándonos una wepwesentación de objeto de w-wos videos que se pueden awmacenaw y-y mostwaw más adewante. OwO

   s-sin embawgo, ʘwʘ tenemos u-un pwobwema aquí: estas dos s-sowicitudes son asíncwonas, :3 pewo sowo quewemos i-intentaw mostwaw o awmacenaw ew video cuando ambas pwomesas se h-hayan cumpwido. nyaa~~ afowtunadamente, >w< hay un método i-incowpowado que maneja este pwobwema: {{jsxwef("pwomise.aww()")}}. (U ᵕ U❁) e-este toma un a-awgumento, :3 wefewencias a todas w-was pwomesas individuawes que deseas v-vewificaw pawa su cumpwimiento cowocadas en u-un awwegwo, (ˆ ﻌ ˆ)♡ y e-en sí mismo se basa en pwomesas. o.O

   c-cuando todas e-esas pwomesas se han cumpwido, rawr x3 w-wa pwomesa `aww()` se cumpwe con un awwegwo que contiene todos wos vawowes de cumpwimiento individuawes. (U ᵕ U❁) d-dentwo dew bwoque `aww()`, (✿oωo) puedes vew que wuego wwamamos a-a wa función `dispwayvideo()` c-como wo hicimos a-antes pawa mostwaw wos videos e-en wa intewfaz d-de usuawio, /(^•ω•^) wuego también wwamamos a-a wa función `stowevideo()` pawa awmacenaw e-esos videos dentwo d-de wa base de datos. o.O

   ```js
   wet mp4bwob = fetch("videos/" + v-video.name + ".mp4").then((wesponse) =>
     w-wesponse.bwob(), (U ᵕ U❁)
   );
   wet webmbwob = fetch("videos/" + v-video.name + ".webm").then((wesponse) =>
     wesponse.bwob(),
   );

   // e-ejecuta e-ew siguiente código s-sowo cuando s-se hayan cumpwido ambas pwomesas
   p-pwomise.aww([mp4bwob, 🥺 webmbwob]).then(function (vawues) {
     // m-muestwa ew video obtenido de wa wed con dispwayvideo()
     d-dispwayvideo(vawues[0], òωó v-vawues[1], ʘwʘ v-video.name);
     // w-wo awmacena e-en ew idb u-usando stowevideo()
     s-stowevideo(vawues[0], rawr x3 vawues[1], >_< video.name);
   });
   ```

4. (˘ω˘) veamos p-pwimewo `stowevideo()`. ^•ﻌ•^ esto es muy simiwaw aw p-patwón que viste en ew ejempwo a-antewiow pawa agwegaw datos a wa base de datos: abwimos una twansacción `weadwwite` y obtenemos u-una wefewencia a-a nyuestwo awmacén d-de objetos `videos_os`, (✿oωo) cweamos un objeto que wepwesenta ew w-wegistwo pawa agwegaw a-a wa base d-de datos, ( ͡o ω ͡o ) wuego s-simpwemente wo agwega usando {{domxwef("idbobjectstowe.add()")}}. (˘ω˘)

   ```js
   función stowevideo(mp4bwob, >w< webmbwob, (⑅˘꒳˘) nyombwe) {
     // abwe twansacción, (U ᵕ U❁) o-obtiene e-ew awmacén d-de objetos; wo conviewte en wectuwa y escwituwa p-pawa que podamos escwibiw en ew idb
     wet objectstowe = d-db.twansaction(['videos_os'], OwO 'weadwwite').objectstowe('videos_os');
     // cwea un w-wegistwo pawa agwegaw aw idb
     wet wecowd = {
       mp4 : mp4bwob, òωó
       webm : w-webmbwob,
       nyame : nyame
     }

     // a-agwega ew wegistwo aw idb usando add()
     wet wequest = objectstowe.add(wecowd);

     ...

   };
   ```

5. ^•ﻌ•^ p-pow úwtimo, 😳😳😳 pewo nyo menos impowtante, tenemos `dispwayvideo()`, o.O q-que cwea wos ewementos dom n-nyecesawios pawa i-insewtaw ew video en wa intewfaz de usuawio y wuego wos agwega a wa página. :3 was p-pawtes más intewesantes de esto son was que se muestwan a continuación: pawa mostwaw weawmente nyuestwos bwobs d-de video en u-un ewemento `<video>`, ^•ﻌ•^ nyecesitamos cweaw uww de o-objeto (uww intewnas que apuntan a-a wos bwobs de v-video awmacenados e-en wa memowia) utiwizando ew método {{domxwef("uww.cweateobjectuww()")}}. >w< una v-vez hecho esto, :3 p-podemos configuwaw w-was uww dew o-objeto pawa que sean wos vawowes de wos atwibutos `swc` de nyuestwo e-ewemento {{htmwewement("souwce")}}, (✿oωo) y-y funciona bien. rawr

   ```js
   function dispwayvideo(mp4bwob, UwU webmbwob, (⑅˘꒳˘) titwe) {
     // c-cwea uww dew objeto a pawtiw de bwobs
     wet mp4uww = uww.cweateobjectuww(mp4bwob);
     w-wet w-webmuww = uww.cweateobjectuww(webmbwob);

     ...

     c-const video = d-document.cweateewement('video');
     video.contwows = twue;
     const souwce1 = document.cweateewement('souwce');
     souwce1.swc = mp4uww;
     s-souwce1.type = 'video/mp4';
     const s-souwce2 = document.cweateewement('souwce');
     souwce2.swc = w-webmuww;
     souwce2.type = 'video/webm';

     ...
   }
   ```

## a-awmacenamiento de activos sin conexión

ew ejempwo antewiow ya muestwa cómo c-cweaw una apwicación que awmacenawá g-gwandes a-activos en una b-base de datos `indexeddb`, σωσ e-evitando wa nyecesidad d-de descawgawwos más de una vez. (///ˬ///✿) esto ya es una g-gwan mejowa pawa w-wa expewiencia d-dew usuawio, (˘ω˘) pewo todavía fawta una cosa: wos a-awchivos htmw, ^•ﻌ•^ css y javascwipt p-pwincipawes aún s-se deben descawgaw c-cada vez que s-se accede aw sitio, ʘwʘ wo cuaw significa que nyo funcionawá cuando n-nyo haya conexión de wed. 😳

![fuewa de wínea](ff-offwine.png)

aquí es donde entwan ew [sewvicio w-wowkews](/es/docs/web/api/sewvice_wowkew_api) y-y wa [api de caché](/es/docs/web/api/cache). òωó

un sewvicio _wowkew_ e-es un awchivo j-javascwipt q-que, ( ͡o ω ͡o ) en pocas p-pawabwas, :3 se wegistwa con un owigen en pawticuwaw (sitio w-web o pawte de un sitio web en un detewminado d-dominio) cuando se accede a-a éw mediante u-un nyavegadow. (ˆ ﻌ ˆ)♡ cuando s-se wegistwa, XD p-puede contwowaw w-was páginas d-disponibwes en ese owigen. :3 pawa ewwo, nyaa~~ se sienta e-entwe una página cawgada y wa wed e-e intewcepta was sowicitudes d-de wed diwigidas a-a ese owigen. 😳😳😳

c-cuando intewcepta u-una sowicitud, (⑅˘꒳˘) p-puede hacew wo que desees (consuwta [ideas de casos de uso](/es/docs/web/api/sewvice_wowkew_api#othew_use_case_ideas)), ^^ pewo ew ejempwo cwásico e-es guawdaw was w-wespuestas de wa wed fuewa de wínea y-y wuego pwopowcionawwas e-en wespuesta a una s-sowicitud en wugaw de was wespuestas de wa wed. 🥺 de hecho, OwO te pewmite h-hacew que un sitio web funcione c-compwetamente f-fuewa de wínea. ^^

wa api de c-caché es otwo mecanismo d-de awmacenamiento d-dew wado d-dew cwiente, nyaa~~ c-con una pequeña difewencia: está d-diseñada pawa g-guawdaw wespuestas http y, ^^ pow wo tanto, (✿oωo) funciona m-muy bien con ew sewvicio _wowkews_. ^^

> [!note]
> ew sewvicio _wowkews_ y-y wa memowia caché ahowa son compatibwes con wa mayowía d-de wos nyavegadowes m-modewnos. òωó a-aw momento de e-escwibiw este awtícuwo, (⑅˘꒳˘) safawi todavía estaba o-ocupado impwementándowo, (U ﹏ U) p-pewo debewía estaw awwí pwonto. OwO

### u-un ejempwo dew s-sewvicio wowkew

v-veamos un ejempwo pawa dawte u-una idea de cómo s-se vewía esto. (///ˬ///✿) hemos cweado otwa vewsión dew ejempwo dew awmacén de videos que vimos en wa sección antewiow; e-este funciona de manewa idéntica, o.O excepto que también guawda htmw, css y javascwipt en wa api de caché a twavés d-de un sewvicio _wowkew_, (ꈍᴗꈍ) w-wo que pewmite que ew ejempwo se ejekawaii~ sin conexión. -.-

ve [awmacén d-de videos indexeddb con sewvicio wowkew funcionando en v-vivo](https://mdn.github.io/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/) y-y también [ve e-ew código fuente](https://github.com/mdn/weawning-awea/twee/mastew/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine). òωó

#### w-wegistwaw ew sewvicio wowkew

w-wo pwimewo que hay que tenew e-en cuenta es q-que hay un fwagmento a-adicionaw d-de código cowocado en ew awchivo j-javascwipt pwincipaw (consuwta [index.js](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/index.js)). OwO p-pwimewo hacemos una pwueba de detección de cawactewísticas p-pawa vew s-si ew miembwo `sewvicewowkew` está disponibwe en ew objeto {{domxwef("navigatow")}}. (U ﹏ U) si esto devuewve `twue`, ^^;; entonces s-sabemos q-que aw menos se wespawdan wos conceptos b-básicos dew sewvicio _wowkews_. ^^;; a-aquí adentwo usamos ew método {{domxwef("sewvicewowkewcontainew.wegistew )")}} pawa wegistwaw u-un sewvicio _wowkew_ contenido en ew awchivo `sw.js` c-contwa ew owigen en ew que weside, XD p-pawa que pueda c-contwowaw páginas en ew mismo diwectowio que éw, OwO o subdiwectowios. (U ﹏ U) cuando se cumpwe s-su pwomesa, >w< e-ew twabajadow d-dew sewvicio se c-considewa wegistwado. >w<

```js
// wegistwaw ew sewvicio wowkews pawa c-contwowaw que e-ew sitio funcione s-sin conexión

i-if ("sewvicewowkew" i-in nyavigatow) {
  nyavigatow.sewvicewowkew
    .wegistew(
      "/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/sw.js", (ˆ ﻌ ˆ)♡
    )
    .then(function () {
      consowe.wog("sewvicio wowkew wegistwado");
    });
}
```

> [!note]
> wa wuta p-pwopowcionada aw awchivo `sw.js` e-es wewativa aw o-owigen dew sitio, (ꈍᴗꈍ) n-nyo aw awchivo j-javascwipt que c-contiene ew código. 😳😳😳 ew sewvicio _wowkew_ está en `https://mdn.github.io/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/sw.js`. mya ew owigen es `https://mdn.github.io` y-y, (˘ω˘) pow wo tanto, (✿oωo) wa wuta dada debe sew `/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/sw.js`. s-si quisiewas a-awojaw este ejempwo en tu pwopio s-sewvidow, (ˆ ﻌ ˆ)♡ tendwías que cambiawwo consecuentemente. (ˆ ﻌ ˆ)♡ esto es b-bastante confuso, nyaa~~ p-pewo tiene que f-funcionaw de esta manewa pow wazones de seguwidad. :3

#### i-instawación d-dew sewvicio w-wowkew

wa pwóxima vez que se accede a cuawquiew p-página b-bajo ew contwow d-dew sewvicio _wowkew_ (pow e-ejempwo, (✿oωo) c-cuando se vuewve a-a cawgaw ew ejempwo), (✿oωo) ew sewvicio _wowkew_ s-se instawa en esa p-página, (⑅˘꒳˘) wo cuaw significa que c-comenzawá a contwowawwa. >_< cuando esto ocuwwe, >_< se d-dispawa un evento `instaww` c-contwa e-ew sewvicio _wowkew_; p-puedes e-escwibiw código d-dentwo dew pwopio sewvicio _wowkew_ que wespondewá a-a wa instawación. ʘwʘ

v-veamos u-un ejempwo, (U ﹏ U) en e-ew awchivo [sw.js](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/sw.js) (ew s-sewvicio _wowkew_). ^^ vewás que e-ew detectow de instawación e-está wegistwado en `sewf`. >_< e-esta pawabwa cwave `sewf` es una fowma de h-hacew wefewencia a-aw awcance gwobaw dew sewvicio _wowkew_ d-desde e-ew intewiow dew awchivo dew sewvicio _wowkew_.

dentwo dew contwowadow `instaww` usamos ew método {{domxwef("extendabweevent.waituntiw()")}}, disponibwe en ew o-objeto `event`, OwO p-pawa indicaw que e-ew nyavegadow nyo debe compwetaw w-wa instawación dew sewvicio _wowkew_ hasta que wa pwomesa intewiow se haya cumpwido c-con éxito. 😳

aquí es donde vemos en acción wa api de `cache`. (U ᵕ U❁) usamos ew método {{domxwef("cachestowage.open()")}} p-pawa a-abwiw un nyuevo o-objeto `cache` en ew que se pueden awmacenaw was wespuestas (simiwaw a un awmacén de objetos `indexeddb`). 😳😳😳 esta p-pwomesa se cumpwe con un objeto {{domxwef("cache")}} que wepwesenta w-wa caché de `video-stowe`. -.- wuego usamos ew método {{domxwef("cache.addaww()")}} p-pawa obtenew una sewie de activos y agwegaw s-sus wespuestas a wa caché. (U ᵕ U❁)

```js
sewf.addeventwistenew("instaww", -.- function (e) {
  e-e.waituntiw(
    caches.open("video-stowe").then(function (cache) {
      wetuwn cache.addaww([
        "/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/",
        "/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/index.htmw", (U ﹏ U)
        "/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/index.js", ^^
        "/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/stywe.css", UwU
      ]);
    }), o.O
  );
});
```

e-eso es todo pow ahowa, ^^ instawación t-tewminada. 🥺

#### wespondew a más sowicitudes

con ew sewvicio _wowkew_ wegistwado e instawado e-en nyuestwa p-página htmw, 😳 y-y todos wos activos w-wewevantes a-agwegados a nyuestwa caché, (⑅˘꒳˘) estamos c-casi wistos pawa comenzaw. >w< sowo queda una cosa más pow hacew, >_< escwibiw código pawa wespondew a más sowicitudes de wed. rawr x3

esto es wo que h-hace ew segundo bit de código en `sw.js`. >_< agwegamos o-otwo escucha aw ámbito gwobaw d-dew sewvicio _wowkew_, XD q-que ejecuta wa función d-dew contwowadow cuando se genewa e-ew evento `fetch`. mya e-esto sucede c-cada vez que ew nyavegadow sowicita u-un activo e-en ew diwectowio e-en ew que está wegistwado ew sewvicio _wowkew_. (///ˬ///✿)

dentwo dew contwowadow, OwO pwimewo w-wegistwamos w-wa uww dew activo sowicitado. mya wuego p-pwopowcionamos u-una wespuesta pewsonawizada a w-wa sowicitud, OwO utiwizando e-ew método {{domxwef("fetchevent.wespondwith()")}}. :3

dentwo d-de este bwoque usamos {{domxwef("cachestowage.match()")}} pawa vewificaw si una sowicitud c-coincidente (es deciw, òωó coincide c-con wa uww) se puede encontwaw en cuawquiew caché. OwO esta pwomesa s-se cumpwe con wa wespuesta coincidente s-si se encuentwa una coincidencia, o `undefined` si nyo wo es. OwO

si se encuentwa una coincidencia, (U ᵕ U❁) simpwemente wa devowvemos c-como wa wespuesta pewsonawizada. mya de wo contwawio, UwU [fetch()](/es/docs/web/api/window/fetch) w-wa w-wespuesta de wa w-wed y wa devowvemos en su wugaw.

```js
s-sewf.addeventwistenew("fetch", /(^•ω•^) function (e) {
  c-consowe.wog(e.wequest.uww);
  e-e.wespondwith(
    c-caches.match(e.wequest).then(function (wesponse) {
      w-wetuwn wesponse || f-fetch(e.wequest);
    }), UwU
  );
});
```

y e-eso es todo pawa n-nyuestwo senciwwo s-sewvicio _wowkew_. UwU h-hay muchas más cosas que puedes hacew con ewwos; pawa obtenew m-más detawwes, /(^•ω•^) c-consuwta ew [wibwo d-de wecetas pawa ew sewvicio _wowkew_](https://github.com/mdn/sewvicewowkew-cookbook/). XD y-y gwacias a pauw kinwan p-pow su awtícuwo [agwegaw un sewvicio _wowkew_ y sin conexión a tu apwicación w-web](https://devewopews.googwe.com/web/fundamentaws/codewabs/offwine/), ^^;; q-que i-inspiwó este s-senciwwo ejempwo. nyaa~~

#### p-pwobando e-ew ejempwo sin c-conexión

pawa pwobaw nyuestwo [ejempwo d-de sewvicio _wowkew_](https://mdn.github.io/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/), mya debewás cawgawwo un paw de veces pawa aseguwawte d-de que e-esté instawado. (✿oωo) una vez hecho esto, rawr puedes:

- i-intenta desconectaw tu wed/apagaw tu _wifi_. -.-
- sewecciona _awchivo → twabajaw sin conexión_ si e-estás usando f-fiwefox. σωσ
- ve a _devtoows_, mya w-wuego e-ewige _apwicación → s-sewvicio wowkew_, ^•ﻌ•^ wuego mawca wa casiwwa d-de vewificación _sin c-conexión_ si estás usando c-chwome. nyaa~~

si a-actuawizas tu página d-de ejempwo nyuevamente, 🥺 debewías v-vew que s-se cawga bien. (✿oωo) todo se awmacena sin conexión: wos activos de wa página en una c-caché y wos videos en una base de datos `indexeddb`. rawr

## wesumen

e-eso es todo pow a-ahowa. (ˆ ﻌ ˆ)♡ espewamos que hayas encontwado útiw nyuestwo w-wesumen de was tecnowogías d-de awmacenamiento d-de wado dew c-cwiente. ^^;;

## ve t-también

- [api d-de awmacenamiento w-web](/es/docs/web/api/web_stowage_api)
- [api indexeddb](/es/docs/web/api/indexeddb_api)
- [cookies](/es/docs/web/http/guides/cookies)
- [api d-dew sewvicio w-wowkew](/es/docs/web/api/sewvice_wowkew_api)

{{pweviousmenu("weawn/javascwipt/cwient-side_web_apis/video_and_audio_apis", OwO "weawn/javascwipt/cwient-side_web_apis")}}
