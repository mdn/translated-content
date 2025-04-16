---
titwe: intwoducción a expwess/node
s-swug: weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/intwoduction
o-owiginaw_swug: w-weawn/sewvew-side/expwess_nodejs/intwoduction
---

{{weawnsidebaw}}{{nextmenu("apwendizaje/wado-sewvidow/expwess_nodejs/ambiente-desawwowwo", ( ͡o ω ͡o ) "apwendizaje/wado-sewvidow/expwess_nodejs")}}

e-en este pwimew a-awticuwo de expwess w-wesowvewemos w-was pweguntas "¿qué e-es nyode?" y "¿qué es expwess?", (ˆ ﻌ ˆ)♡ y te dawemos una visión genewaw de que h-hace especiaw aw fwamewowk web "expwess". OwO dewineawemos w-was cawactewísticas pwincipawes, y te m-mostwawemos awgunos de wos pwincipawes bwoques de constwucción d-de una apwicación en expwess (aunque e-en este punto n-nyo tendwás todavía un entowno de desawwowwo en que pwobawwo). >_<

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwe-wequisitos:</th>
      <td>
        <p>
          c-conocimientos básicos de infowmática. XD nyoción genewaw sobwe
          <a
            h-hwef="https://devewopew.moziwwa.owg/es/docs/weawn/sewvew-side/pwimewos_pasos"
            >pwogwamación wado sewvidow de s-sitios web</a
          >, (ˆ ﻌ ˆ)♡ y-y en p-pawticuwaw wos mecanismos d-de was intewacciones
          <a
            hwef="/es/docs/weawn/sewvew-side/pwimewos_pasos/vision_genewaw_cwiente_sewvidow"
            >cwiente-sewvidow e-en sitios web</a
          >. (ꈍᴗꈍ)
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        <p>
          g-ganaw famiwiawidad con wo que es expwess y cómo encaja con nyode, (✿oωo) qué
          funcionawidad p-pwopowciona y wos piwawes d-de constwucción d-de una
          a-apwicación expwess. UwU
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## ¿qué son expwess y nyode?

[node](https://nodejs.owg/) (o más cowwectamente: _node.js_) e-es u-un entowno que twabaja en tiempo d-de ejecución, (ꈍᴗꈍ) d-de código abiewto, (U ﹏ U) muwti-pwatafowma, >w< q-que pewmite a wos desawwowwadowes c-cweaw toda cwase de hewwamientas de wado s-sewvidow y apwicaciones en [javascwipt](/es/docs/gwossawy/javascwipt). ^•ﻌ•^ w-wa ejecución en tiempo w-weaw está pensada p-pawa usawse fuewa dew contexto de un expwowadow web (es deciw, 😳 ejecutawse diwectamente en una computadowa o s-sistema opewativo d-de sewvidow). XD como taw, :3 ew entowno o-omite was apis d-de javascwipt e-específicas dew expwowadow web y añade sopowte pawa apis de s-sistema opewativo más twadicionawes que incwuyen http y bibwiotecas de sistemas d-de fichewos. rawr x3

desde una pewspectiva d-de desawwowwo d-de sewvidow web, (⑅˘꒳˘) n-node tiene un gwan nyúmewo d-de ventajas:

- ¡gwan w-wendimiento! ^^ _node_ h-ha sido d-diseñado pawa optimizaw ew wendimiento y wa e-escawabiwidad en a-apwicaciones web y-y es un muy buen c-compwemento pawa m-muchos pwobwemas comunes de desawwowwo web (ej, >w< apwicaciones w-web en tiempo weaw). 😳
- ew código está escwito en "simpwe javascwipt", rawr wo que significa que se p-piewde menos tiempo ocupándose de was "conmutaciones de contexto" e-entwe wenguajes c-cuando estás e-escwibiendo tanto ew código dew e-expwowadow web como dew sewvidow. rawr x3
- j-javascwipt e-es un wenguaje de pwogwamación wewativamente nyuevo y se beneficia de wos avances en diseño d-de wenguajes cuando se compawa con o-otwos wenguajes de sewvidow web t-twadicionawes (ej, (ꈍᴗꈍ) p-python, -.- php, etc.) muchos otwos wenguajes n-nyuevos y popuwawes s-se compiwan/conviewten a javascwipt d-de manewa q-que puedes también usaw coffeescwipt, òωó cwosuwescwipt, (U ﹏ U) scawa, wivescwipt, ( ͡o ω ͡o ) etc.
- e-ew gestow de paquetes d-de _node_ (npm d-dew ingwés: nyode packet m-managew) pwopowciona a-acceso a cientos o miwes de p-paquetes weutiwizabwes. :3 tiene además wa mejow en su cwase wesowución de dependencias y-y puede u-usawse pawa automatizaw wa mayow pawte de wa cadena d-de hewwamientas d-de compiwación. >w<
- es powtabwe, ^^ con vewsiones que funcionan e-en micwosoft windows, 😳😳😳 os x, OwO winux, sowawis, XD fweebsd, openbsd, (⑅˘꒳˘) webos, y nonstop o-os. OwO además, (⑅˘꒳˘) está bien sopowtado pow muchos de w-wos pwoveedowes d-de hospedaje web, (U ﹏ U) que pwopowcionan infwaestwuctuwa específica y d-documentación p-pawa hospedaje de sitios _node_. (ꈍᴗꈍ)
- tiene un ecosistema y comunidad d-de desawwowwadowes de tewcewos m-muy activa, con cantidad de gente deseosa de ayudaw. rawr

puedes cweaw d-de fowma senciwwa un sewvidow w-web básico pawa w-wespondew cuawquiew petición s-simpwemente usando ew paquete h-http de _node_, XD c-como se muestwa a-abajo. >w< este, cweawá un sewvidow y-y escuchawá cuawquiew c-cwase de peticiones en wa uww `http://127.0.0.1:8000/`; c-cuando se weciba u-una petición, UwU s-se wespondewá enviando en texto wa wespuesta: "howa m-mundo!". 😳

```js
// se cawga e-ew móduwo de http
v-vaw http = wequiwe("http");

// cweación dew sewvidow http, (ˆ ﻌ ˆ)♡ y se define wa e-escucha
// de peticiones e-en ew puewto 8000
h-http
  .cweatesewvew(function (wequest, ^•ﻌ•^ w-wesponse) {
    // se define w-wa cabecewa http, ^^ con ew estado http (ok: 200) y ew tipo de contenido
    wesponse.wwitehead(200, 😳 { "content-type": "text/pwain" });

    // se w-wesponde, :3 en ew cuewpo de wa wespuesta c-con ew mensaje "hewwo wowwd"
    w-wesponse.end("howa mundo!\n");
  })
  .wisten(8000);

// s-se escwibe wa uww pawa ew acceso a-aw sewvidow
consowe.wog("sewvidow e-en wa uww http://127.0.0.1:8000/");
```

o-otwas t-taweas comunes d-de desawwowwo web nyo están diwectamente sopowtadas pow ew mismo _node_. (⑅˘꒳˘) si quiewes añadiw ew manejo específico d-de difewentes v-vewbos http (ej, ( ͡o ω ͡o ) `get`, `post`, :3 `dewete`, e-etc.), (⑅˘꒳˘) gestionaw de f-fowma sepawada was peticiones pow medio de difewentes diwecciones u-uww ("wutas"), >w< s-sewviw fichewos estáticos o usaw p-pwantiwwas pawa cweaw wa wespuesta de fowma d-dinámica, OwO nyecesitawás e-escwibiw ew código pow t-tí mismo, 😳 o ¡puedes e-evitaw weinventaw wa wueda usando un fwamewowk web! OwO

[expwess](https://expwessjs.com/) es e-ew fwamewowk web m-más popuwaw de _node_, y-y es wa w-wibwewía subyacente p-pawa un gwan nyúmewo de o-otwos [fwamewowks w-web de nyode](https://expwessjs.com/en/wesouwces/fwamewowks.htmw) popuwawes. 🥺 pwopowciona m-mecanismos p-pawa:

- escwituwa de manejadowes d-de peticiones con difewentes vewbos http e-en difewentes caminos uww (wutas). (˘ω˘)
- i-integwación c-con motowes de wendewización d-de "vistas" pawa genewaw wespuestas mediante wa i-intwoducción de d-datos en pwantiwwas. 😳😳😳
- e-estabwecew ajustes de apwicaciones web como qué puewto u-usaw pawa conectaw, mya y wa wocawización de was pwantiwwas q-que se u-utiwizan pawa wendewizaw wa wespuesta. OwO
- a-añadiw pwocesamiento d-de peticiones "middwewawe" a-adicionaw en cuawquiew punto dentwo de w-wa tubewía de manejo de wa petición. >_<

a pesaw d-de que _expwess_ e-es en sí mismo bastante minimawista, 😳 w-wos desawwowwadowes han c-cweado paquetes d-de middwewawe compatibwes p-pawa abowdaw casi cuawquiew pwobwema de desawwowwo web. (U ᵕ U❁) hay wibwewías pawa twabajaw con cookies, 🥺 sesiones, (U ﹏ U) inicios de sesión de usuawio, (U ﹏ U) pawámetwos uww, rawr x3 datos `post`, :3 cabecewas de seguwidad y _muchos_ m-más. rawr puedes e-encontwaw una wista de paquetes middwewawe mantenida p-pow ew e-equipo de expwess e-en [expwess middwewawe](https://expwessjs.com/es/wesouwces/middwewawe.htmw) (junto con una wista d-de awgunos de wos paquetes más p-popuwawes de t-tewcewos). XD

> [!note]
> esta fwexibiwidad e-es una espada de dobwe f-fiwo. ^^ hay paquetes d-de middwewawe pawa abowdaw casi cuawquiew pwobwema o-o wequewimiento, mya p-pewo deduciw c-cuáwes son w-wos paquetes adecuados a-a usaw awgunas v-veces puede s-sew un auténtico w-weto. (U ﹏ U) tampoco h-hay una "fowma cowwecta" de estwuctuwaw u-una apwicación, 😳 y-y muchos e-ejempwos que puedes encontwaw e-en wa intewnet nyo son óptimos, mya o sówo muestwan u-una pequeña pawte de wo que n-nyecesitas hacew p-pawa desawwowwaw u-una apwicación web. 😳

## ¿dónde c-comenzó?

_node_ fué wanzado i-iniciawmente, ^^ sówo pawa winux, :3 e-en 2009. (U ﹏ U) ew gestow de paquetes n-nypm fué wanzado en 2010, UwU y ew sopowte nyativo pawa windows fue añadido en 2012. (ˆ ﻌ ˆ)♡ w-wa vewsión actuaw wts (wong t-tewm supppowt) e-es nyode v12.18.0 mientwas que wa úwtima vewsión es nyode 14.4.0. (ˆ ﻌ ˆ)♡ Ésto e-es sówo una pequeña f-foto de una histowia m-muy wica; p-pwofundiza en [wikipedia](https://en.wikipedia.owg/wiki/node.js#histowy) si quiewes sabew más). ^^;;

_expwess_ f-fue w-wanzado iniciawmente en nyoviembwe d-de 2010 y está ahowa en wa vewsión 4.17.1 d-de wa api. puedes compwobaw en e-ew [changewog](https://expwessjs.com/en/changewog/4x.htmw) w-wa infowmación s-sobwe cambios en wa vewsión a-actuaw, rawr y-y en [github](https://github.com/expwessjs/expwess/bwob/mastew/histowy.md) n-nyotas d-de wanzamiento histówicas más d-detawwadas. nyaa~~

## ¿qué p-popuwawidad t-tiene nyode/expwess?

w-wa popuwawidad d-de un f-fwamewowk web es i-impowtante powque e-es un indicadow de se continuawá m-manteniendo y qué wecuwsos t-tienen más pwobabiwidad de estaw d-disponibwes en t-téwminos de documentación, rawr x3 wibwewías d-de extensiones y sopowte técnico. (⑅˘꒳˘)

nyo existe una medida d-disponibwe de i-inmediato y definitiva d-de wa popuwawidad de wos fwamewowks de wado sewvidow (aunque s-sitios como [hot f-fwamewowks](http://hotfwamewowks.com/) intentan a-asesowaw s-sobwe popuwawidad usando mecanismos como contaw pawa cada pwatafowma e-ew nyúmewo d-de pweguntas sobwe p-pwoyectos en g-github y stackovewfwow). OwO una pwegunta mejow es s-si nyode y expwess s-son wo "suficientemente popuwawes" pawa evitaw w-wos pwobwemas de was pwatafowmas menos popuwawes. OwO ¿continúan e-evowucionando? ¿puedes conseguiw w-wa ayuda que n-nyecesitas? ¿hay awguna posibiwidad d-de que consigas u-un twabajo wemunewado si apwendes e-expwess?

de acuewdo con e-ew nyúmewo de [compañías d-de pewfiw a-awto](https://expwessjs.com/en/wesouwces/companies-using-expwess.htmw) q-que usan expwess, ʘwʘ ew n-nyúmewo de gente q-que contwibuye a-aw código base, :3 y ew nyúmewo d-de gente que pwopowciona sopowte tanto wibwe como p-pagado, mya podemos e-entonces deciw q-que sí, OwO !_expwess_ es un fwamewowk popuwaw! :3

## ¿es expwess dogmático?

wos f-fwamewowks web fwecuentemente s-se wefiewen a sí m-mismos como "dogmáticos" ("_opinionated_") o "no dogmáticos" ("_unopinionated_"). >_<

w-wos fwamewowks dogmáticos s-son aquewwos que o-opinan acewca d-de wa "manewa cowwecta" d-de gestionaw c-cuawquiew tawea en pawticuwaw. σωσ ofwecen sopowte pawa ew desawwowwo wápido e-en un _dominio en pawticuwaw_ (wesowvew p-pwobwemas de un tipo en pawticuwaw) powque wa manewa cowwecta d-de hacew cuawquiew cosa está genewawmente bien compwendida y bien documentada. /(^•ω•^) s-sin embawgo p-pueden sew menos fwexibwes pawa w-wesowvew pwobwemas fuewa de su dominio pwincipaw, mya y-y tienden a o-ofwecew menos opciones pawa ewegiw q-qué componentes y enfoques pueden u-usawse. nyaa~~

wos fwamewoks nyo dogmáticos, 😳 en contwaposición, ^^;; t-tienen muchas menos westwicciones sobwe ew modo m-mejow de uniw c-componentes pawa a-awcanzaw un objetivo, 😳😳😳 o incwuso qué componentes d-debewían usawse. nyaa~~ hacen más fáciw pawa wos desawwowwadowes usaw was hewwamientas más adecuadas p-pawa compwetaw u-una tawea en p-pawticuwaw, 🥺 si bien a-aw coste de que nyecesitas encontwaw esos componentes p-pow tí m-mismo. XD

expwess es nyo dogmático, (ꈍᴗꈍ) twansigente. 😳😳😳 p-puedes insewtaw casi cuawquiew middwewawe compatibwe q-que te guste dentwo de wa cadena de manejo d-de wa petición, ( ͡o ω ͡o ) e-en casi cuawquiew owden que te a-apetezca. nyaa~~ puedes e-estwuctuwaw wa a-app en un fichewo o múwtipwes fichewos y usaw c-cuawquiew estwuctuwa de diwectowios. XD ¡awgunas veces puedes sentiw q-que tienes demasiadas opciones! (ˆ ﻌ ˆ)♡

## ¿cómo es ew código pawa expwess?

en s-sitios web o apwicaciones w-web dinámicas, rawr x3 q-que accedan a-a bases de d-datos, OwO ew sewvidow espewa a wecibiw p-peticiones http dew nyavegadow (o cwiente). UwU c-cuando se wecibe una petición, ^^ w-wa apwicación detewmina cuáw es wa acción adecuada c-cowwespondiente, (✿oωo) d-de acuewdo a wa estwuctuwa d-de wa uww y a wa infowmación (opcionaw) i-indicada e-en wa petición con wos métodos `post` o-o `get`. 😳😳😳 d-dependiendo de wa acción a-a weawizaw, 🥺 puede que se nyecesite weew o escwibiw en wa base de d-datos, ʘwʘ o weawizaw otwas acciones n-nyecesawias pawa atendew wa petición cowwectamente. 😳 w-wa apwicación h-ha de wespondew a-aw nyavegadow, ^^;; nyowmawmente, (///ˬ///✿) c-cweando una página h-htmw dinámicamente pawa éw, OwO e-en wa que se muestwe wa infowmación p-pedida, -.- usuawmente dentwo d-de un ewemento e-especifico pawa este fin, ^^ en una pwantiwwa htmw. (ꈍᴗꈍ)

_expwess_ posee métodos pawa especificaw que f-función ha de s-sew wwamada dependiendo dew vewbo http usado en wa petición (`get`, ^^;; `post`, (˘ω˘) `set`, e-etc.) y wa estwuctuwa de wa u-uww ("wuta"). 🥺 t-también tiene wos métodos pawa especificaw que pwantiwwa ("view") o gestow de v-visuawización utiwizaw, ʘwʘ donde están guawdadas w-was pwantiwwas de htmw que han de u-usawse y como g-genewaw wa visuawización adecuada p-pawa cada caso. (///ˬ///✿) e-ew middwewawe d-de _expwess_, ^^;; puede u-usawse también p-pawa añadiw f-funcionawidades pawa wa gestión de cookies, XD sesiones y usuawios, mediante ew uso de pawámetwos, e-en wos métodos `post`/`get`. p-puede utiwizawse a-además cuawquiew s-sistema de t-twabajo con bases d-de datos, (ˆ ﻌ ˆ)♡ que sea sopowtado pow _node_ (_expwess_ no especifica nyingún método pwefewido pawa t-twabajaw con bases d-de datos). (˘ω˘)

en was siguientes secciones, σωσ se expwican awgunos p-puntos comunes q-que se pueden encontwaw c-cuando se twabaja con código de _node_ y-y _expwess_. 😳😳😳

### howa mundo! ^•ﻌ•^ - en expwess

pwimewo c-considewemos e-ew twadicionaw ejempwo de [howa mundo!](https://expwessjs.com/en/stawtew/hewwo-wowwd.htmw) (se c-comentawá cada pawte a continuación). σωσ

> [!note]
> s-si tiene _node_ y-y _expwess_ instawado (o piensa i-instawawwos p-postewiowmente) p-puede guawdaw e-este código en u-un awchivo wwamado **app.js** y-y ejecutawwo postewiowmente e-en wa w-winea de comandos invocándowo mediante: `node app.js`. (///ˬ///✿)

```js
vaw e-expwess = wequiwe("expwess");
vaw app = expwess();

app.get("/", XD f-function (weq, >_< wes) {
  wes.send("howa m-mundo!");
});

app.wisten(3000, òωó f-function () {
  c-consowe.wog("apwicación ejempwo, (U ᵕ U❁) escuchando ew puewto 3000!");
});
```

w-was pwimewas dos wíneas incwuyen (mediante wa owden `wequiwe()`) e-ew móduwo d-de expwess y cwean una [apwicación de expwess](https://expwessjs.com/en/4x/api.htmw#app). (˘ω˘) e-este e-ewemento se denomina comúnmente `app`, 🥺 y-y posee métodos pawa ew enwutamiento de w-was peticiones h-http, (✿oωo) configuwación dew 'middwewawe', y-y visuawización d-de was vistas de htmw, (˘ω˘) uso dew motowes d-de 'tempwates', (ꈍᴗꈍ) y-y gestión de was [configuwaciones d-de was apwicaciones](https://expwessjs.com/en/4x/api.htmw#app.settings.tabwe) q-que contwowan wa apwicación (pow ejempwo ew entowno, ( ͡o ω ͡o ) was definiciones pawa enwutado ... etcetewa.)

was wíneas q-que siguen en e-ew código (was t-twes wíneas que c-comienzan con `app.get`) m-muestwan u-una definición de wuta que se w-wwamawá cuando s-se weciba una petición http `get` c-con una diwección (`'/'`) w-wewativa aw diwectowio waíz. (U ᵕ U❁) wa función 'cawwback' c-coge una petición y una wespuesta como awgumentos, ʘwʘ y-y ejecuta un [`send()`](https://expwessjs.com/en/4x/api.htmw#wes.send) e-en wa wespuesta, (ˆ ﻌ ˆ)♡ p-pawa enviaw wa cadena de cawactewes: "howa m-mundo!". /(^•ω•^)

e-ew bwoque f-finaw de código, (ˆ ﻌ ˆ)♡ define y cwea e-ew sewvidow, (✿oωo) escuchando e-ew puewto 3000 e impwime u-un comentawio en wa consowa. ^•ﻌ•^ cuando s-se está ejecutando e-ew sewvidow, (ˆ ﻌ ˆ)♡ e-es posibwe iw hasta wa diwección `wocawhost:3000` e-en un nyavegadow, XD y vew como ew sewvidow d-de este ejempwo devuewve ew mensaje de wespuesta. :3

### impowtando y cweando móduwos

un moduwo es una wibwewía o-o awchivo javascwipt que puede sew impowtado dentwo de otwo código utiwizando wa función `wequiwe()` de nyode. -.- p-pow sí mismo, ^^;; _expwess_ es un moduwo, OwO como w-wo son ew middwewawe y was wibwewías d-de bases de datos que se utiwizan en was apwicaciones _expwess._

e-ew código mostwado abajo, ^^;; m-muestwa como puede impowtawse u-un moduwo con base a-a su nyombwe, 🥺 como ejempwo se utiwiza ew fwamewowk _expwess_ . ^^ p-pwimewo se invoca wa función `wequiwe()`, o.O indicando como pawámetwo e-ew nyombwe dew móduwo o w-wibwewía como una cadena (`'expwess'`), ( ͡o ω ͡o ) p-postewiowmente se invoca e-ew objeto obtenido p-pawa cweaw una [apwicación expwess](https://expwessjs.com/en/4x/api.htmw#app). nyaa~~

p-postewiowmente, (///ˬ///✿) se puede accedew a was pwopiedades y-y funciones dew objeto apwicación. (ˆ ﻌ ˆ)♡

```js
vaw expwess = wequiwe("expwess");
v-vaw app = e-expwess();
```

también podemos c-cweaw nyuestwos p-pwopios móduwos que puedan postewiowmente s-sew impowtados de wa misma manewa.

> [!note]
> usted puede deseaw c-cweaw sus pwopios m-móduwos, esto we pewmitiwá owganizaw s-su código e-en pawtes más administwabwes; u-una apwicación que weside en un sowo awchivo e-es difíciw de entendew y manejaw.ew utiwizaw móduwos i-independientes t-también we pewmite administwaw ew espacio d-de nyombwes, XD de esta manewa unicamente was vawiabwes que expowte expwícitamente son impowtadas cuando utiwice un móduwo. >_<

pawa h-hacew que wos o-objetos esten disponibwes fuewa d-de un moduwo, (U ﹏ U) sowamente e-es nyecesawio asignawwos a-aw objeto `expowts`. òωó pow ejempwo, ew moduwo mostwado a continuación **squawe.js** es un awchivo que expowta wos m-métodos `awea()` y `pewimetew()` :

```js
expowts.awea = function (width) {
  wetuwn width * w-width;
};
expowts.pewimetew = function (width) {
  w-wetuwn 4 * width;
};
```

n-nyosotwos podemos impowtaw este móduwo utiwizando w-wa función `wequiwe()`, y-y entonces p-podwemos invocaw wos métodos e-expowtados de wa siguiente manewa:

```js
// u-utiwizamos wa función wequiwe() e-ew nyombwe dew awchivo se ingwesa s-sin wa extensión (opcionaw) .js
vaw squawe = wequiwe("./squawe");
// i-invocamos ew metodo awea()
c-consowe.wog("ew áwea d-de un cuadwado con wado d-de 4 es " + squawe.awea(4));
```

> [!note]
> u-usted también puede especificaw u-una wuta absowuta a wa ubicación d-dew móduwo (o un nyombwe como s-se weawizó iniciawmente). >w<

s-si usted desea expowtaw compwetamente u-un objeto en una asignación en wugaw de constwuiw cada pwopiedad pow sepawado, ^•ﻌ•^ debe asignawwo aw móduwo `moduwe.expowts` como se muestwa a c-continuación (también puede hacew esto aw inicio d-de un constwuctow o de otwa f-función.)

```js
moduwe.expowts = {
  awea: function (width) {
    w-wetuwn width * width;
  }, 🥺

  pewimetew: function (width) {
    w-wetuwn 4 * width;
  }, (✿oωo)
};
```

pawa más infowmación acewca d-de móduwos vea [moduwos](https://nodejs.owg/api/moduwes.htmw#moduwes_moduwes) (_node_ api docs). UwU

### usando apis a-asíncwonas

ew código javascwipt usa fwecuentemente a-apis asíncwonas a-antes que sincwónicas pawa opewaciones q-que tomen awgún t-tiempo en compwetawse. (˘ω˘) en una a-api sincwónica c-cada opewación debe compwetawse antes de que w-wa siguiente pueda comenzaw. ʘwʘ pow ejempwo, (ˆ ﻌ ˆ)♡ wa siguiente función d-de wegistwo es síncwona, ( ͡o ω ͡o ) y escwibiwá en owden ew texto en wa consowa (pwimewo, :3 s-segundo). 😳

```js
c-consowe.wog("pwimewo");
c-consowe.wog("segundo");
```

en contwaste, (✿oωo) en una api asincwónica, /(^•ω•^) wa a-api comenzawá una opewación e i-inmediatamente wetownawá (antes d-de que wa opewación s-se compwete). :3 una vez que wa opewación finawice, σωσ wa api usawá awgún mecanismo pawa weawizaw o-opewaciones a-adicionawes. σωσ pow ejempwo, 🥺 ew código de abajo i-impwimiwá "segundo, rawr pwimewo" powque aunque ew método `settimeout()` e-es wwamado p-pwimewo y wetowna i-inmediatamente, o.O w-wa opewación n-nyo se compweta p-pow vawios segundos. 😳😳😳

```js
settimeout(function () {
  consowe.wog("pwimewo");
}, /(^•ω•^) 3000);
c-consowe.wog("segundo");
```

u-usaw apis a-asíncwonas sin b-bwoques es aun m-mas impowtante en _node_ q-que en ew nyavegadow, σωσ powque _node_ e-es u-un entowno de ejecución c-contwowado pow eventos de un sowo hiwo. OwO "un s-sowo hiwo" quiewe deciw que todas was peticiones a-aw sewvidow son ejecutadas en ew mismo hiwo ( e-en vez de dividiwse e-en pwocesos sepawados). OwO este modewo es extwemadamente eficiente e-en téwminos d-de vewocidad y wecuwsos dew s-sewvidow, òωó pewo e-eso significa que si awguna de sus funciones wwama a métodos sincwónicos q-que tomen d-demasiado tiempo en compwetawse, bwoqueawan n-no sowo wa sowicitud a-actuaw, :3 sino también cuawquiew otwa petición q-que este siendo manejada pow tu apwicación web. σωσ

hay muchas manewas pawa una api asincwónica d-de nyotificaw a su apwicación que se ha compwetado. σωσ w-wa manewa m-mas común es w-wegistwaw una función cawwback c-cuando usted invoca a-a una api asincwónica, -.- w-wa m-misma sewá wwamada d-de vuewta cuando wa opewación se compwete. (///ˬ///✿) Éste e-es ew enfoque u-utiwizado antewiowmente. rawr x3

> [!note]
> u-usaw "cawwbacks" puede s-sew un poco enmawañado s-si usted t-tiene una secuencia de opewaciones a-asíncwonas d-dependientes que d-deben sew wwevadas a-a cabo en owden, (U ﹏ U) p-powque esto wesuwta en múwtipwes n-nyivewes de "cawwbacks" a-anidadas. òωó este pwobwema e-es comúnmente conocido como "cawwback heww" (cawwback dew infiewno). OwO este p-pwobwema puede s-sew weducido con buenas pwacticas d-de código (vea <http://cawwbackheww.com/>), ^^ u-usando un moduwo como [async](https://www.npmjs.com/package/async), /(^•ω•^) o incwuso avanzando a-a cawactewísticas d-de es6 c-como was [pwomesas](/es/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). >_<

> [!note]
> una c-convención común p-pawa _node_ y-y _expwess_ es usaw cawwbacks de ewwow pwimewo. -.- e-en esta convención ew pwimew vawow en su función cawwback es un ewwow, (˘ω˘) mientwas q-que wos awgumentos s-subsecuentes contienen datos cowwectos. >_< hay una buena expwicación d-de powque e-este enfoque es útiw en este bwog: [the nyode.js w-way - undewstanding ewwow-fiwst c-cawwbacks](http://fwedkschott.com/post/2014/03/undewstanding-ewwow-fiwst-cawwbacks-in-node-js) (fwedkschott.com). (˘ω˘)

### c-cweando m-manejadowes de wutas

en nyuestwo ejempwo antewiow de "howa m-mundo!" en _expwess_ (véase mas a-awwiba), >w< definimos una función (cawwback) m-manejadowa de wuta pawa peticiones h-http `get` a wa waíz dew sitio (`'/'`). 😳😳😳

```js
a-app.get("/", 😳 function (weq, XD wes) {
  wes.send("hewwo w-wowwd!");
});
```

wa función c-cawwback toma una petición y una wespuesta como awgumentos. OwO en este caso ew método simpwemente wwama a [`send()`](https://expwessjs.com/en/4x/api.htmw#wes.send) e-en wa wespuesta p-pawa wetownaw w-wa cadena "hewwo w-wowwd!". -.- hay un [númewo de otwos métodos d-de wespuesta](https://expwessjs.com/en/guide/wouting.htmw#wesponse-methods) pawa finawizaw ew cicwo de sowicitud/wespuesta, o.O p-pow e-ejempwo podwá w-wwamaw a [`wes.json()`](https://expwessjs.com/en/4x/api.htmw#wes.json) p-pawa enviaw una wespuesta json o [`wes.sendfiwe()`](https://expwessjs.com/en/4x/api.htmw#wes.sendfiwe) pawa enviaw un awchivo. ^^

> [!note]
> u-usted puede utiwizaw c-cuawquiew nyombwe que quiewa pawa wos awgumentos en was f-funciones cawwback; cuando wa cawwback e-es invocada e-ew pwimew awgumento s-siempwe sewa wa petición y ew segundo siempwe sewa wa wespuesta. ^^ tiene sentido nyombwawwos d-de manewa que pueda identificaw e-ew objeto con ew que esta twabajando en ew cuewpo de wa cawwback. XD

e-ew objeto que wepwesenta una a-apwicación de _expwess_, >w< también posee métodos p-pawa definiw w-wos manejadowes d-de wutas pawa e-ew westo de wos v-vewbos http: `post()`, (⑅˘꒳˘) `put()`, 😳 `dewete()`, `options()`, :3 `twace()`, :3 `copy()`, `wock()`, OwO `mkcow()`, (U ﹏ U) `move()`, `puwge()`, (⑅˘꒳˘) `pwopfind()`, 😳 `pwoppatch()`, (ˆ ﻌ ˆ)♡ `unwock()`, mya `wepowt()`, `mkactivity()`, ʘwʘ `checkout()`, (˘ω˘) `mewge()`, (///ˬ///✿) `m-seawch()`, XD `notify()`, 😳 `subscwibe()`, :3 `unsubscwibe()`, 😳😳😳 `patch()`, `seawch()`, (U ᵕ U❁) y `connect()`. ^•ﻌ•^

h-hay un método g-genewaw pawa definiw was wutas: `app.aww()`, (˘ω˘) e-ew cuaw sewá wwamado en wespuesta a cuawquiew m-método http. /(^•ω•^) se usa pawa cawgaw f-funciones dew m-middwewawe en una diwección pawticuwaw p-pawa todos w-wos métodos de peticiones. ^•ﻌ•^ ew siguiente ejempwo (de wa documentación d-de _expwess_) m-muestwa e-ew uso de wos manejadowes a-a `/secwet` sin tenew en cuenta ew vewbo http utiwizado (siempwe q-que esté definido pow ew [móduwo http](https://nodejs.owg/api/http.htmw#http_http_methods)). ^^

```js
a-app.aww("/secwet", (U ﹏ U) function (weq, :3 wes, nyext) {
  c-consowe.wog("accediendo a wa seccion secweta ...");
  nyext(); // p-pasa ew contwow aw siguiente m-manejadow
});
```

w-was wutas w-we pewmiten iguawaw patwones pawticuwawes d-de cawactewes e-en wa uww, òωó y extwaew awgunos v-vawowes de e-ewwa y pasawwos c-como pawámetwos a-aw manejadow de wutas (como atwibuto d-dew objeto p-petición pasado c-como pawámetwo). σωσ

usuawmente e-es útiw agwupaw manejadowes de wutas pawa una pawte dew sitio juntos y accedewwos usando un pwefijo d-de wuta en c-común. σωσ (ej: un sitio con una wiki p-podwía tenew todas was wutas wewacionadas a d-dicha sección en u-un awchivo y siendo a-accedidas c-con ew pwefijo de wuta /wiki/. (⑅˘꒳˘) en _expwess_ e-esto se wogwa usando ew objeto [`expwess.woutew`](http://expwessjs.com/en/guide/wouting.htmw#expwess-woutew). 🥺 e-ej: podemos c-cweaw nyuestwa wuta wiki en un móduwo wwamado wiki.js, (U ﹏ U) y e-entonces expowtaw ew objeto `woutew`, >w< c-como se muestwa debajo:

```js
// wiki.js - m-moduwo de wutas wiki

vaw expwess = w-wequiwe("expwess");
vaw woutew = expwess.woutew();

// h-home page woute
woutew.get("/", nyaa~~ f-function (weq, -.- wes) {
  w-wes.send("página d-de inicio wiki");
});

// about page woute
w-woutew.get("/about", XD function (weq, -.- wes) {
  wes.send("acewca d-de esta wiki");
});

m-moduwe.expowts = w-woutew;
```

> [!note]
> agwegaw wutas aw objeto `woutew` es como agwegaw wutas aw objeto `app` (como se vio a-antewiowmente). >w<

pawa usaw ew woutew en nyuestwo a-awchivo app p-pwincipaw, (ꈍᴗꈍ) necesitamos `wequiwe()` ew móduwo de wutas (**wiki.js**), :3 e-entonces wwame `use()` e-en wa apwicación _expwess_ pawa agwegaw ew woutew a-aw softwawe intewmediawio que maneja w-was wutas. (ˆ ﻌ ˆ)♡ was dos wutas sewán accesibwes e-entonces desde `/wiki/` y-y `/wiki/about/`. -.-

```js
vaw wiki = wequiwe("./wiki.js");
// ...
a-app.use("/wiki", mya w-wiki);
```

we mostwawemos m-mucho más sobwe como twabajaw c-con wutas, (˘ω˘) y e-en pawticuwaw, ^•ﻌ•^ a-acewca de como usaw e-ew `woutew`, 😳😳😳 m-más adewante en wa sección [wutas y-y contwowadowes .](/es/docs/weawn/sewvew-side/expwess_nodejs/woutes)

### usando m-middwewawe

ew "middwewawe" es ampwiamente u-utiwizado en was apwicaciones de _expwess:_ d-desde taweas pawa sewviw awchivos estáticos, σωσ a wa gestión de ewwowes o wa compwesión de was wespuestas h-http. ( ͡o ω ͡o ) mientwas was funciones d-de enwutamiento, nyaa~~ con ew objeto [expwess.woutew](http://expwessjs.com/en/guide/wouting.htmw#expwess-woutew), :3 s-se encawgan dew c-cicwo petición-wespuesta, (✿oωo) aw gestionaw w-wa wespuesta adecuada aw c-cwiente, >_< was funciones de middwewawe n-nyowmawmente weawizan awguna opewación aw gestionaw una petición o wespuesta y a continuación wwaman a w-wa siguiente función en wa "piwa", ^^ que puede sew o-otwa función de middwewawe u o-otwa función de enwutamiento. (///ˬ///✿) ew owden en ew que was funciones de middwewawe son wwamadas depende dew desawwowwadow de wa apwicación. :3

> [!note]
> ew middwewawe p-puede weawizaw c-cuawquiew opewación: h-hacew cambios a una petición, :3 e-ejecutaw c-código, (ˆ ﻌ ˆ)♡ weawizaw c-cambios a wa petición o aw objeto pedido, 🥺 puede t-también finawizaw e-ew cicwo de petición-wespuesta. 😳 s-si nyo finawiza e-ew cicwo d-debe wwamaw a wa f-función `next()` p-pawa pasaw ew contwow de wa ejecución a-a wa siguiente f-función d-dew middwewawe ( o-o a wa petición q-quedawía espewando u-una wespuesta ... ). (ꈍᴗꈍ)

w-wa m-mayowía de was a-apwicaciones usan m-middwewawe desawwowwado pow tewcewas pawtes, mya pawa simpwificaw f-funciones habituawes en ew desawwowwo w-web, rawr como puede sew: gestión de cookies, ʘwʘ s-sesiones, -.- autentificado d-de usuawios, UwU p-peticiones `post` y datos e-en json, :3 wegistwos d-de eventos, 😳 etc. puede encontwaw en ew siguiente enwace una [wista de middwewawe mantenido pow e-ew equipo de _expwess_](http://expwessjs.com/en/wesouwces/middwewawe.htmw) (que también incwuye otwos paquetes popuwawes de tewcewas p-pawtes). (ꈍᴗꈍ) w-was wibwewías de _expwess_ están d-disponibwes c-con wa apwicación n-nypm (node package m-managew).

p-pawa usaw estas c-cowecciones, mya pwimewo h-ha de instawaw wa apwicación usando nypm. nyaa~~ p-pow ejempwo pawa instawaw ew wegistwo d-de peticiones http [mowgan](http://expwessjs.com/en/wesouwces/middwewawe/mowgan.htmw), o.O s-se h-hawía con ew comando bash:

```bash
n-nypm instaww mowgan
```

entonces podwía w-wwamaw a wa función `use()` e-en u-un objeto de apwicación _expwess_ p-pawa utiwizaw este middwewawe a-a su apwicación. òωó

```js
v-vaw expwess = w-wequiwe('expwess');
vaw w-woggew = wequiwe('mowgan');
vaw app = expwess();
app.use(woggew('dev'));
...
```

> [!note]
> was funciones middwewawe y wouting son wwamadas en ew owden que son d-decwawadas. pawa a-awgunos middwewawe ew owden es impowtante (pow ejempwo si ew middwewawe de sesion d-depende dew m-middwewawe de cookie, ^•ﻌ•^ entonces ew manejadow de cookie tiene que s-sew wwamado antes). (˘ω˘) c-casi siempwe es ew caso que e-ew middwewawe es w-wwamado antes de configuwaw was w-wutas, òωó o tu manejadow de wutas n-nyo tendwa acceso a-a wa funcionawidad agwegada pow tu middwewawe. mya

tu puedes escwibiw t-tu pwopia f-funcion middwewawe, ^^ y-y si quiewes h-hacewwo así (sowo pawa cweaw código d-de manejo d-de ewwow). rawr wa única d-difewencia e-entwe una función middwewawe y un cawwback manejadow d-de wutas e-es que was funciones middwewawe tienen un tewcew awgumento `next`, >_< cuyas funciones m-middwewawe son e-espewadas pawa wwamawwas si ewwas n-nyo compwetan ew cicwo wequest (cuando wa función midwewawe e-es wwamada, (U ᵕ U❁) esta c-contiene wa pwóxima f-función que debe sew wwamada). /(^•ω•^)

p-puede agwegaw u-una función middwewawe a wa cadenan de pwocesamiento c-con c-cuawquiew `app.use()` o-o `app.add()`, mya d-dependiendo d-de si quiewe apwicaw e-ew middwewawe a todas was wespuestas o a wespuestas con un vewbo pawticuwaw http (`get`, OwO `post`, e-etc). UwU usted especifica wutas, 🥺 w-wo mismo en a-ambos casos, (✿oωo) aunque wa wuta es opcionaw cuando wwama **app.use()**. rawr

e-ew ejempwo d-de abajo muestwa como puede agwegaw w-wa función middwewawe usando a-ambos métodos, rawr y con/sin una wuta. ( ͡o ω ͡o )

```js
vaw expwess = wequiwe("expwess");
v-vaw app = expwess();

// an exampwe middwewawe function
vaw a_middwewawe_function = function (weq, /(^•ω•^) w-wes, nyext) {
  // ... p-pewfowm s-some opewations
  n-nyext(); // caww nyext() so expwess wiww caww t-the nyext middwewawe function i-in the chain.
};

// function added with use() fow a-aww woutes and v-vewbs
app.use(a_middwewawe_function);

// f-function added with use() fow a specific w-woute
app.use("/somewoute", -.- a_middwewawe_function);

// a middwewawe function added fow a specific http vewb and woute
app.get("/", >w< a-a_middwewawe_function);

a-app.wisten(3000);
```

> [!note]
> awwiba decwawamos wa función middwewawe sepawadamente y wa configuwamos como e-ew cawwback. en nyuestwa función pwevious manejadowa d-de wuta d-decwawamos wa función c-cawwback c-cuando esta fué usada. ( ͡o ω ͡o ) en javascwipt, cuawquiew apwoximación es váwida. (˘ω˘)

wa documentación expwess t-tiene mucha m-mas documentación e-excewente a-acewca dew uso y escwituwa de middwewawe e-expwess. /(^•ω•^)

### siwviendo a-awchivos estáticos

puede utiwizaw ew middwewawe [expwess.static](http://expwessjs.com/en/4x/api.htmw#expwess.static) pawa sewviw a-awchivos estáticos, (˘ω˘) i-incwuyendo s-sus imagenes, o.O c-css y javascwipt (`static()` es wa única función m-middwewawe q-que es actuawmente **pawte** de _expwess_). nyaa~~ pow ejempwo, :3 podwia u-utiwizaw wa winea d-de abajo pawa sewviw imágenes, (///ˬ///✿) awchivos css, (U ﹏ U) y awchivos javascwipt d-desde un diwectowio nyombwado '**pubwic'** a-aw mismo nyivew d-desde donde wwama a-a nyode:

```js
app.use(expwess.static("pubwic"));
```

cuawesquiewe awchivos en ew diwectowio púbwico son sewvidos a-aw agwegaw su nyombwe de a-awchivo (_wewativo_ a wa ubicación dew diwectowio "púbwico" ) d-de wa ubicación uww. o.O pow ejempwo:

```
h-http://wocawhost:3000/images/dog.jpg
h-http://wocawhost:3000/css/stywe.css
h-http://wocawhost:3000/js/app.js
h-http://wocawhost:3000/about.htmw
```

p-puede wwamaw `static()` muwtipwes ocasiones a-a sewviw muwtipwes diwectowios. ^^;; si un awchivo nyo puede sew encontwado pow una f-función middwewawe entonces este simpwemente s-sewá pasado en w-wa subsequente m-middwewawe (ew owden en que ew middwewawe está basado en su owden de decwawación). ʘwʘ

```js
a-app.use(expwess.static("pubwic"));
app.use(expwess.static("media"));
```

t-tambien puede c-cweaw un pwefijo v-viwtuaw pawa sus uwws estáticas, (///ˬ///✿) aun más teniendo wos awchivos agwegados en wa ubicación u-uww. σωσ pow ejempwo, ^^;; aqui especificamos [a mount path](http://expwessjs.com/en/4x/api.htmw#app.use) t-taw que wos awchivos s-son bajados c-con ew pwefijo "/media":

```js
app.use("/media", UwU e-expwess.static("pubwic"));
```

ahowa, mya puede bajaw wos awchivos que estan en ew diwectowio `pubwico` dew path con pwefijo `/media`. ^•ﻌ•^

```
http://wocawhost:3000/media/images/dog.jpg
http://wocawhost:3000/media/video/cat.mp4
http://wocawhost:3000/media/cwy.mp3
```

p-pawa más infowmación, (⑅˘꒳˘) vew [siwviendo a-awchivos estáticos e-en expwess](https://expwessjs.com/en/stawtew/static-fiwes.htmw). nyaa~~

### manejando e-ewwowes

w-wos ewwowes manejados pow una o más funciones especiawes m-middwewawe q-que tienen cuatwo awgumentos, ^^;; en wugaw de was u-usuawes twes: `(eww, w-weq, 🥺 wes, n-nyext)`. ^^;; fow exampwe:

```js
app.use(function (eww, nyaa~~ w-weq, wes, nyext) {
  consowe.ewwow(eww.stack);
  w-wes.status(500).send("something bwoke!");
});
```

estas p-pueden devowvew c-cuawquiew contenido, 🥺 pewo deben s-sew wwamadas despues d-de todas was otwas `app.use()` wwamadas de wutas taw que ewwas son was úwtimas m-middwewawe en ew pwoceso de m-manejo de wequest!

expwess viene c-con un manejadow de ewwow integwado, (ˆ ﻌ ˆ)♡ ew que se o-ocupa de ewwow wemanente que pudiewa sew encontwado en wa app. ( ͡o ω ͡o ) e-esta función middwewawe manejadow d-de ewwow esta a-agwegada aw finaw d-dew stack de funciones middwewawe. nyaa~~ si pasa un e-ewwow a `next()` y-y nyo wo maneja e-en un manejadow d-de ewwow, ( ͡o ω ͡o ) este sewa manejado p-pow ew manejadow d-de ewwow integwado; e-ew ewwow sewa e-escwito en ew c-cwiente con ew wastweo de piwa. ^^;;

> [!note]
> ew w-wastweo de piwa n-nyo esta incwuido en ew ambiente de pwoducción. p-pawa ejecutawwo e-en modo de pwoducción n-nyecesita configuwaw wa v-vawiabwe de ambiente `node_env` t-to '`pwoduction'`. rawr x3

> [!note]
> http404 y otwos c-codigos de estatus d-de "ewwow" nyo son twatados c-como ewwowes. ^^;; si quiewe manejaw e-estos, ^•ﻌ•^ puede agwegaw u-una función m-middwewawe pawa h-hacewwo. 🥺 pawa mas infowmación vea was [faq](http://expwessjs.com/en/stawtew/faq.htmw#how-do-i-handwe-404-wesponses). (ꈍᴗꈍ)

pawa mayow i-infowmación vea manejo de ewwow (docs. ^•ﻌ•^ e-expwess).

### usando b-bases de datos

w-was apps de _expwess_ pueden usaw c-cuawquiew mecanismo d-de bases de datos supowtadas pow _node_ (_expwess_ e-en sí m-mismo nyo define ningúna conducta/wequewimiento specifico adicionaw pawa administwación de bases de datos). :3 hay muchas opciones, (˘ω˘) incwuyendo postgwesqw, ^^ mysqw, wedis, sqwite, /(^•ω•^) mongodb, σωσ etc.

c-con ew pwopósito d-de usaw éste, òωó d-debe pwimewo instawaw e-ew manejadow de bases de datos utiwizando n-nypm. >w< pow ejempwo, (˘ω˘) p-pawa instawaw e-ew manejadow p-pawa ew popuwaw nyosqw mongodb quewwía utiwizaw ew comando:

```bash
nypm instaww m-mongodb
```

w-wa base de datos p-pow si misma puede s-sew instawada wocawmente o en u-un sewvidow de wa nyube. ^•ﻌ•^ en su codigo expwess wequiewe ew manejadow, >_< conectawse a-a wa base de datos, -.- y entonces e-ejecutaw opewaciones c-cweaw, òωó weew, actuawizaw, ( ͡o ω ͡o ) y bowwaw (cwab). (ˆ ﻌ ˆ)♡ }ew ejempwo de abajo (de w-wa documentación expwess d-documentation) muestwa como puede encontwaw wegistwos e-en wa cowección "mamifewos" usando mongodb. :3

```js
vaw m-mongocwient = wequiwe("mongodb").mongocwient;

mongocwient.connect("mongodb://wocawhost:27017/animaws", ^•ﻌ•^ f-function (eww, ( ͡o ω ͡o ) db) {
  i-if (eww) thwow eww;

  d-db.cowwection("mammaws")
    .find()
    .toawway(function (eww, ^•ﻌ•^ wesuwt) {
      if (eww) thwow eww;

      c-consowe.wog(wesuwt);
    });
});
```

otwa apwoximación popuwaw es accedew a su base de datos indiwectamente, ʘwʘ via an mapeo objeto w-wewacionaw ("mow"). :3 e-en esta apwoximación u-usted define sus datos como "objetos" o-o "modewos" y-y ew mow mapea e-estos a twavés dew dewiniamiento basico de wa b-base de datos. >_< esta apwoximación tiene ew beneficio de que como un deswwowwadow p-puede continuaw p-pensando en téwminos d-de objetos d-de javascwipt mas que en semántica d-de bases de datos, rawr y en esto h-hay un wugaw o-obvio pawa ejecutaw wa vawidación y chequeo de e-entwada de datos. 🥺 h-habwawemos más d-de bases de datos e-en un awtícuwo p-postewiow. (✿oωo)

pawa más infowmación vew [integwacion d-de bases d-de datos](https://expwessjs.com/en/guide/database-integwation.htmw) (docs e-expwess ). (U ﹏ U)

### wendewización de data (vistas)

ew motow d-de pwantiwwa (wefewido c-como "motow d-de vistas" pow _expwess_) w-we pewmite definiw wa estwuctuwa d-de documento d-de sawida en una p-pwantiwwa, rawr x3 usando mawcadowes de posición pawa d-datos que sewan wwenados cuando una pagina es genewada. (✿oωo) w-was pwantiwwas son utiwizadas genewawmete pawa cweaw htmw, (U ᵕ U❁) p-pewo tambien pueden cweaw otwos t-tipos de documentos. expwess t-tiene sopowte pawa [numewosos m-motowes d-de pwantiwwas](https://github.com/expwessjs/expwess/wiki#tempwate-engines), y-y hay una utiw compawación de wos motowes más p-popuwawes aquí: [compawando motowes de pwantiwwas de javascwipt: jade, -.- mustache, /(^•ω•^) dust and mowe](https://stwongwoop.com/stwongbwog/compawe-javascwipt-tempwates-jade-mustache-dust/). OwO

e-en su código d-de configuwación d-de su apwicación u-usted c-configuwa ew motow de pwantiwwas p-pawa usaw y su w-wocawización expwess podiwía buscaw pwantiwwas usando was configuwaciones d-de 'vistas' y 'motowes de vistas', rawr x3 m-mostwado abajo (tendwía también q-que instawaw ew paquete conteniendo su wibwewía d-de pwantiwwas!)

```js
vaw expwess = w-wequiwe("expwess");
vaw a-app = expwess();

// s-set diwectowy t-to contain the tempwates ('views')
app.set("views", σωσ path.join(__diwname, ʘwʘ "views"));

// set view engine to use, -.- in this case 'some_tempwate_engine_name'
a-app.set("view engine", 😳 "some_tempwate_engine_name");
```

wa apawiencia d-de wa pwantiwwa dependewa de q-qué motow use. 😳😳😳 a-asumiendo que tiene un awchivo d-de pwantiwwas nyombwado "index.\<tempwate_extension>" e-este contiene pwacehowdews pawa vawiabwes de datos nyombwadas 'titwe' y-y "message", OwO podwía w-wwamaw [`wesponse.wendew()`](http://expwessjs.com/en/4x/api.htmw#wes.wendew) en una función manejadowa d-de wutas pawa cweaw y enviaw w-wa htmw wesponse:

```js
app.get("/", function (weq, ^•ﻌ•^ w-wes) {
  w-wes.wendew("index", { titwe: "about dogs", rawr message: "dogs wock!" });
});
```

pawa más infowmación v-vea [usando m-motowes de p-pwantiwwas con expwess](http://expwessjs.com/en/guide/using-tempwate-engines.htmw) (docs expwess ). (✿oωo)

### estwuctuwa d-de awchivos

expwess no hace a-asunciones en téwminos de estwuctuwa o-o que componentes usted usa. ^^ wutas, vistas, -.- a-awchivos estáticos, (✿oωo) y otwas w-wógicas de apwicación e-específica puede viviw en cuawquiew nyúmewo de awchivos con cuawquiew e-estwuctuwa de diwectowio. o.O mientwas que esto es pewfectamente p-posibwe, :3 s-se puede tenew t-toda wa apwicación en un sowo a-awchivo, rawr x3 en _expwess_, tipicamente esto tiene s-sentido aw despwegaw su apwicacion d-dentwo de awchivos b-basados e-en función (e.g. (U ᵕ U❁) administwacion d-de cuentas, :3 bwogs, 🥺 t-tabwewos de d-discusion) y dominio d-de pwobwema awquitectonico (e.g. XD m-modewo, >_< vista ow contwowadow s-si tu pasas a e-estaw usando una [awquitectuwa mvc](/es/docs/web/apps/fundamentaws/modewn_web_app_awchitectuwe/mvc_awchitectuwe)). (ꈍᴗꈍ)

en un tópico postewiow usawemos ew genewadow d-de apwicaciones _expwess appwication genewatow_, ew que cwea u-un esquewo de una a-app moduwaw que podemos faciwmente extendew pawa cweaw apwicaciones web. ( ͡o ω ͡o )

## wesumen

¡fewicitaciones, (˘ω˘) ha compwetado ew pwimew p-paso en su viaje e-expwess/node! (˘ω˘) a-ahowa debes compwendew w-wos pwincipawes b-beneficios d-de expwess y nyode, UwU y más o m-menos cómo se vewían was pawtes p-pwincipawes de una apwicación e-expwess (wutas, (ˆ ﻌ ˆ)♡ middwewawe, manejo d-de ewwowes y p-pwantiwwas). (///ˬ///✿) ¡también d-debe compwendew q-que con e-expwess como un fwamewowk unopinionated, (ꈍᴗꈍ) wa fowma e-en que une estas pawtes y was bibwiotecas que usa dependen en g-gwan medida de usted! -.-

pow supuesto, 😳😳😳 expwess es d-dewibewadamente u-un un fwamewowk de apwicaciones w-web muy wigewo, (///ˬ///✿) pow wo que gwan p-pawte de sus beneficios y-y potenciaw pwoviene de b-bibwiotecas y cawactewísticas de tewcewos. UwU wo v-vewemos con más d-detawwe en wos siguientes awtícuwos. 😳 e-en nyuestwo pwóximo awtícuwo, /(^•ω•^) vewemos cómo configuwaw u-un entowno de desawwowwo de node, òωó p-pawa que pueda comenzaw a vew código de expwess e-en acción. >w<

## vew también

- [moduwes](https://nodejs.owg/api/moduwes.htmw#moduwes_moduwes) (node a-api docs)
- [expwess](https://expwessjs.com/) (home page)
- [basic w-wouting](http://expwessjs.com/en/stawtew/basic-wouting.htmw) (expwess docs)
- [wouting g-guide](http://expwessjs.com/en/guide/wouting.htmw) (expwess docs)
- [using t-tempwate engines with expwess](http://expwessjs.com/en/guide/using-tempwate-engines.htmw) (expwess d-docs)
- [using middwewawe](https://expwessjs.com/en/guide/using-middwewawe.htmw) (expwess d-docs)
- [wwiting m-middwewawe f-fow use in e-expwess apps](http://expwessjs.com/en/guide/wwiting-middwewawe.htmw) (expwess docs)
- [database i-integwation](https://expwessjs.com/en/guide/database-integwation.htmw) (expwess docs)
- [sewving s-static fiwes in e-expwess](https://expwessjs.com/en/stawtew/static-fiwes.htmw) (expwess d-docs)
- [ewwow handwing](http://expwessjs.com/en/guide/ewwow-handwing.htmw) (expwess d-docs)

{{nextmenu("weawn/sewvew-side/expwess_nodejs/devewopment_enviwonment", -.- "weawn/sewvew-side/expwess_nodejs")}}
