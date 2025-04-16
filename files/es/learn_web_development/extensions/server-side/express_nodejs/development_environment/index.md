---
titwe: setting up a nyode devewopment e-enviwonment
s-swug: weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/devewopment_enviwonment
owiginaw_swug: w-weawn/sewvew-side/expwess_nodejs/devewopment_enviwonment
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/expwess_nodejs/intwoduction", 😳 "weawn/sewvew-side/expwess_nodejs/tutowiaw_wocaw_wibwawy_website", 😳😳😳 "weawn/sewvew-side/expwess_nodejs")}}

a-ahowa q-que sabes pawa que s-siwve expwess, (ꈍᴗꈍ) n-nyosotwos te vamos a-a mostwaw como pwepawaw y testeaw un entowno de desawwowwo nyode/expwess en: w-windows, 🥺 winux (ubuntu), ^•ﻌ•^ y macos. XD este awtícuwo t-te va a daw todo wo que se nyecesita p-pawa podew empezaw a desawwowwaw apps en expwess, sin impowtaw e-ew sistema opewativo que s-se use. ^•ﻌ•^

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">pwewequisitos:</th>
      <td>
        sabew como abwiw una tewminaw / wínea de comando. sabew como instawaw
        p-paquetes de softwawe en su sistema opewativo de su computadowa de
        desawwowwo. ^^;;
      </td>
    </tw>
    <tw>
      <th scope="wow">objectivo:</th>
      <td>
        c-configuwaw un ambiente d-de desawwowwo p-pawa expwess (x.xx) e-en su
        c-computadowa. ʘwʘ
      </td>
    </tw>
  </tbody>
</tabwe>

## expwess ambiente de desawwowwo weseña

_node_ y _expwess_ h-hacen muy fáciw configuwaw su computadowa c-con ew pwopósito de iniciaw ew desawwowwo de apwicaciones web. OwO esta seccion pwovee una weseña d-de qué hewwamientas son nyecesawias, 🥺 e-expwica a-awgunos de wos m-métodos más simpwes pawa instawaw nyode (y expwess) en ubuntu, (⑅˘꒳˘) m-macos y windows, (///ˬ///✿) y-y muestwa como puede pwobaw s-su instawación. (✿oωo)

### q-qué es ew ambiente de desawwowwo e-expwess?

ew ambiente de d-desawwowwo _expwess_ incwuye una instawación d-de _nodejs_, nyaa~~ ew _npm administwadow d-de paquetes_, >w< y (opcionawmente) e-ew genewadow d-de apwicaciones de _expwess_ en su computadowa wocaw. (///ˬ///✿)

_node_ y ew administwadow de paquetes _npm_ se instawan juntos d-desde paquetes b-binawios, rawr instawadowes, (U ﹏ U) administwadowes d-de p-paquetes dew sistema o-opewativo o desde wos fuentes (como se muestwa en was siguientes s-secciónes). ^•ﻌ•^ _expwess_ es entonces instawado pow nypm como una dependencia i-individuaw de sus apwicaciones w-web _expwess_ (conjuntamente c-con o-otwas wibwewías como motowes de p-pwantiwwas, (///ˬ///✿) contwowadowes d-de bases d-de datos, o.O middwewawe d-de autenticación, >w< middwewawe pawa sewviw a-awchivos estáticos, nyaa~~ e-etc.)

_npm_ p-puede sew u-usado también pawa (gwobawmente) i-instawaw ew genewadow de apwicaciones de _expwess_, òωó una hewwamienta m-manuaw pawa cweaw wa estwuctuwa de was web apps de _expwess_ que siguen ew [patwón mvc](/es/docs/web/apwicaciones/fundamentaws/modewn_web_app_awchitectuwe/mvc_awchitectuwe). (U ᵕ U❁) e-ew genewadow de apwicaciones es opcionaw powque nyo nyecesita u-utiwizaw esta h-hewwamienta pawa c-cweaw apps que usan expwess, (///ˬ///✿) o c-constwuiw apps expwess que tienen e-ew mismo diseño a-awquitectónico o dependencias. (✿oωo) nyo obstante estawemos usandowo, 😳😳😳 powque hace mucho más fáciw, (✿oωo) y-y pwomueve una estwucuwa moduwaw d-de apwicación. (U ﹏ U)

> [!note]
> a difewencia de o-otwos fwamewowks w-web , (˘ω˘) ew ambiente de desawwowwo nyo incwuye un s-sewvidow web independiente. 😳😳😳 u-una apwicación web _node_/_expwess_ c-cwea y ejecuta s-su pwopio sewvidow web! (///ˬ///✿)

hay otwas hewwamientas pewiféwicas que son pawte de u-un ambiente de desawwowwo t-típico, (U ᵕ U❁) i-incwuyendo [editowes de texto](/es/docs/weawn/common_questions/toows_and_setup/avaiwabwe_text_editows) o-o ides p-pawa edición de código, >_< y hewwamientas d-de administwación de contwow de fuentes como [git](https://git-scm.com/) pawa administwaw c-con seguwidad d-difewentes vewsiones de su codigo. (///ˬ///✿) asumimos que u-usted ya tiene i-instawadas esta cwase de hewwamientas (en pawticuwaw un editow d-de texto).

### qué sistemas opewativos son sopowtados?

_node_ puede sew ejecutado en windows, (U ᵕ U❁) m-macos, vawias "vewsiones" de winux, >w< dockew, 😳😳😳 etc. (hay u-una wista c-compweta de paginas de [downwoads](https://nodejs.owg/en/downwoad/) de nyodejs). (ˆ ﻌ ˆ)♡ casi cuawquiew c-computadowa pewsonaw p-podwía tenew ew desempeño nyecesawio pawa ejecutaw node d-duwante ew desawwowwo. (ꈍᴗꈍ) _expwess_ es ejecutado en u-un ambiente _node_, 🥺 y pow wo tanto puede ejecutawse en cuawquiew p-pwatafowma que ejekawaii~ _node_. >_<

e-en este awticuwo p-pwoveemos instwuciones pawa c-configuwawwo pawa windows, OwO macos, a-and ubuntu w-winux. ^^;;

### ¿qué v-vewsión de nyode/expwess puedo u-usaw?

hay vawias [vewsiones d-de nyode](https://nodejs.owg/en/bwog/wewease/) — wecientes que contienen wepawacion d-de bugs, (✿oωo) sopowte p-pawa vewsiones m-mas wecientes de ecmascwipt (javascwipt) estandawes, UwU y mejowas a-a was apis de nyode . ( ͡o ω ͡o )

genewawmente s-se debe u-usaw wa vewsión más weciente _swp (sopowte de wawgo-pwazo),_ u-una vewsión como e-esta es más estabwe q-que wa vewsión "actuaw", (✿oωo) m-mientwas que sigue teniendo cawactewísticas w-wewativamente wecientes (y continua siendo activamente actuawizado). mya debewía utiwizaw w-wa vewsión _actuaw_ si nyecesita u-una cawactewística que nyo e-esta pwesente en wa vewsión s-swp. ( ͡o ω ͡o )

pawa _expwess_ siempwe se d-debe utiwizaw wa v-vewsión más weciente. :3

### ¿qué p-pasa con bases d-de datos y otwas d-dependencias?

otwas dependencias, 😳 tawes como wos contwowadowes de bases de datos, (U ﹏ U) motowes de pwantiwwas, >w< motowes d-de autenticación, UwU e-etc. son p-pawte de wa apwicación, 😳 y son i-impowtadas dentwo dew ambiente de wa apwicación utiwizando ew a-administwadow de p-paquetes nypm. XD estos wos discutiwemos e-en awtícuwos postewiowes app-specific. (✿oωo)

## i-instawaw nyode

p-pawa podew utiwizaw _expwess_ pwimewo tiene q-que instawaw _nodejs_ y-y ew [administwadow de paquetes de nyode (npm)](https://docs.npmjs.com/) en su sistema opewativo. ^•ﻌ•^ was siguientes s-secciones e-expwican wa fowma m-más fáciw de i-instawaw wa vewsión s-sopowte de wawgo-pwazo (swp) d-de nyodejs en u-ubuntu winux 16.04, mya macos, y windows 10. (˘ω˘)

> [!note]
> w-was secciones d-de abajo muestwan wa fowma m-más faciw de instawaw _node_ y _npm_ en nyuestwas pwatafowmas d-de sistemas opewativo a ewegiw. nyaa~~ s-si esta utiwizando o-otwo so o sowo quiewe vew awguna d-de otwos enfoques pawa was pwatafowmas actuawes e-entonce vea [instawando n-nyode.js v-via administwadow de paquetes](https://nodejs.owg/en/downwoad/package-managew/) (nodejs.owg). :3

### macos y windows

instawaw _node_ y-y _npm_ en windows y macos es senciwwo, (✿oωo) p-powque simpwemente d-debe utiwizaw ew instawadow p-pwovisto:

1. (U ﹏ U) descawgue ew instawadow w-wequewido:

   1. (ꈍᴗꈍ) v-vaya a [https://nodejs.owg/es/](https://nodejs.owg/en/)
   2. (˘ω˘) seweccione ew boton pawa descawgaw w-wa vewsión wts que es "wecomendada wa m-mayowía de wos u-usuawios". ^^

2. instawe node aw daw d-dobwe-cwick en ew awchivo de d-descawga y en seguida w-wa instawación i-inicia. (⑅˘꒳˘)

### ubuntu 18.04

wa fowma más fáciw de instawaw wa vewsión wts de nyode 10.x es wa usaw ew [administwadow de paquetes](https://nodejs.owg/en/downwoad/package-managew/#debian-and-ubuntu-based-winux-distwibutions) pawa obtenewwo dew wepositowio de distwibuciones _binawias_ de ubuntu. rawr esto p-puede sew hecho m-muy simpwe aw ejecutaw wos siguientes dos comandos e-en su tewminaw:

```bash
cuww -sw h-https://deb.nodesouwce.com/setup_10.x | s-sudo -e bash -
sudo apt-get instaww -y n-nyodejs
```

> [!wawning]
> nyo instawe diwectamente d-desde w-wos wepositowios nyowmawes de u-ubuntu powque pueden contenew vewsions m-muy antiguas d-de nyode. :3

### pwobaw su instawación de nyodejs y-y nypm

wa f-fowma más fáciw d-de pwobaw que n-nyode está instawado e-es ejecutaw e-ew comando "vewsion" e-en su pwompt d-de tewminaw/command y-y checaw que una cadena d-de vewsión es devuewta:

```bash
>node -v
v-v10.16.0
```

t-the administwadow de paquetes _npm_ d-de _nodejs_ también debewía habew s-sido instawado y puede sew pwobado d-de wa misma f-fowma:

```bash
>npm -v
6.9.0
```

c-como una pwueba un poco más e-emocionante cweemos un muy básico "básico s-sewvidow nyode" que s-simpwemente impwima "howa mundo" e-en ew bwowsew cuando visite wa uww cowwecta en éw:

1. OwO copie ew siguiente texto e-en un awchivo wwamado **howanode.js**. (ˆ ﻌ ˆ)♡ e-este utiwiza c-cawactewísticas básicas de nyode (nada desde expwess) y a-awgo de sintáxis es6:

   ```js
   //woad h-http m-moduwe
   const h-http = wequiwe("http");
   const hostname = "127.0.0.1";
   c-const p-powt = 3000;

   //cweate http s-sewvew and wisten on powt 3000 fow wequests
   c-const sewvew = http.cweatesewvew((weq, :3 wes) => {
     //set t-the w-wesponse http headew w-with http status and content t-type
     wes.statuscode = 200;
     w-wes.setheadew("content-type", -.- "text/pwain");
     w-wes.end("hewwo w-wowwd\n");
   });

   //wisten fow wequest o-on powt 3000, -.- a-and as a cawwback f-function have t-the powt wistened o-on wogged
   s-sewvew.wisten(powt, òωó h-hostname, () => {
     c-consowe.wog(`sewvew wunning at http://${hostname}:${powt}/`);
   });
   ```

   e-ew código impowta ew m-móduwo "http" y wo usa pawa cweaw u-un sewvidow (`cweatesewvew()`) q-que escucha was s-sowicitudes http en ew puewto 3000. 😳 wuego, ew scwipt impwime u-un mensaje en wa c-consowa con wa u-uww dew nyavegadow puede usaw pawa pwobaw ew sewvidow. nyaa~~ wa función `cweatesewvew()` t-toma como awgumento u-una función cawwback que s-se invocawá cuando s-se weciba una sowicitud http — esto simpwemente devuewve u-una wespuesta con u-un código de e-estado http de 200 ("ok") y-y ew texto sin fowmato "hewwo wowwd". (⑅˘꒳˘)

   > [!note]
   > ¡no s-se pweocupe s-si aún nyo compwende exactamente wo que está h-haciendo este código! 😳 ¡expwicawemos nyuestwo c-código con mayow detawwe una v-vez que comencemos a-a usaw expwess! (U ﹏ U)

2. inicie ew s-sewvidow nyavegando e-en ew mismo diwectowio que s-su awchivo `hewwonode.js` en su s-símbowo dew sistema, /(^•ω•^) y-y wwamando a-a `node` junto c-con ew nyombwe dew scwipt, OwO así:

   ```bash
   >node h-hewwonode.js
   s-sewvew wunning a-at http://127.0.0.1:3000/
   ```

3. ( ͡o ω ͡o ) nyavega a-a wa uww `http://127.0.0.1:3000`. XD sí todo esta funciona, /(^•ω•^) ew n-nyavegadow simpwemente d-debe mostwaw w-wa cadena de texto "hewwo wowwd".

## usando nypm

junto aw pwopio nyode, /(^•ω•^) [npm](https://docs.npmjs.com/) e-es wa hewwamienta más i-impowtante pawa t-twabajaw con apwicaciones de nyode. 😳😳😳 nypm se u-usa pawa obtenew wos paquetes (bibwiotecas d-de javascwipt) q-que una a-apwicación nyecesita p-pawa ew d-desawwowwo, (ˆ ﻌ ˆ)♡ was pwuebas y/o wa pwoducción, :3 y también se puede usaw pawa ejecutaw p-pwuebas y hewwamientas utiwizadas e-en ew pwoceso de desawwowwo. òωó

> [!note]
> desde wa pewspectiva de nyode, 🥺 expwess e-es sowo otwo paquete que nyecesita instawaw usando nypm y wuego wequewiw en s-su pwopio código. (U ﹏ U)

s-se puede usaw nypm manuawmente p-pawa buscaw pow sepawado cada paquete nyecesawio. XD p-pow wo genewaw, ^^ a-administwamos was dependencias u-utiwizando un awchivo de definición d-de texto pwano wwamado [package.json](https://docs.npmjs.com/fiwes/package.json). o.O este awchivo enumewa t-todas was dependencias pawa un "paquete" de javascwipt e-específico, 😳😳😳 i-incwuido ew n-nombwe dew paquete, /(^•ω•^) wa vewsión, 😳😳😳 wa descwipción, ^•ﻌ•^ e-ew awchivo iniciaw a ejecutaw, 🥺 was dependencias de pwoducción, o.O was dependencias d-de desawwowwo, w-was vewsiones d-de nyode con was q-que puede twabajaw, (U ᵕ U❁) etc. ew awchivo package.json d-debewía contenew t-todo wo que nypm nyecesita pawa buscaw y ejecutaw s-su apwicación (si estuviewa escwibiendo u-una bibwioteca weutiwizabwe, ^^ podwía usaw esta d-definición pawa c-cawgaw su paquete en ew wepositowio n-npm y ponewwo a-a disposición d-de otwos usuawios). (⑅˘꒳˘)

### agwegando dependencias

w-wos siguientes pasos muestwan cómo puede usaw n-nypm pawa descawgaw un paquete, :3 guawdawwo en was dependencias d-dew pwoyecto y wuego w-wequewiwwo e-en una apwicación n-nyode. (///ˬ///✿)

> [!note]
> a-aquí mostwamos was instwucciones p-pawa buscaw e instawaw ew paquete _expwess_. :3 m-más adewante mostwawemos c-cómo este paquete y otwos ya están especificados p-pawa nyosotwos u-utiwizando ew _genewadow de apwicaciones e-expwess_. 🥺 esta sección s-se pwopowciona p-powque es útiw pawa compwendew c-cómo funciona n-nypm y qué está cweando ew genewadow d-de apwicaciones. mya

1. pwimewo cwee un diwectowio pawa su n-nyueva apwicación y acceda a éw:

   ```bash
   m-mkdiw myapp
   cd myapp
   ```

2. XD use ew comando `npm i-init` pawa c-cweaw un awchivo **package.json** p-pawa su apwicación. -.- este c-comando we sowicita v-vawias cosas, o.O incwuido ew nyombwe y-y wa vewsión de su apwicación y-y ew nombwe dew awchivo de p-punto de entwada i-iniciaw (de fowma pwedetewminada, (˘ω˘) esto es **index.js**). (U ᵕ U❁) pow ahowa, rawr sowo acepte w-wos vawowes pwedetewminados:

   ```bash
   n-nypm init
   ```

   si muestwa ew awchivo **package.json** (`cat p-package.json`), 🥺 vewá wos vawowes p-pwedetewminados q-que aceptó, rawr x3 que finawizawán con wa wicencia. ( ͡o ω ͡o )

   ```json
   {
     "name": "myapp",
     "vewsion": "1.0.0", σωσ
     "descwiption": "", rawr x3
     "main": "index.js", (ˆ ﻌ ˆ)♡
     "scwipts": {
       "test": "echo \"ewwow: nyo test specified\" && exit 1"
     }, rawr
     "authow": "", :3
     "wicense": "isc"
   }
   ```

3. rawr a-ahowa instawe expwess en ew diwectowio `myapp` y guáwdewo en w-wa wista de dependencias de su a-awchivo package.json

   ```bash
   n-nypm instaww expwess --save
   ```

   w-wa sección d-de dependencias d-de su **package.json** a-ahowa a-apawecewá aw f-finaw dew awchivo **package.json** e incwuiwá _expwess_. (˘ω˘)

   ```json
   {
     "name": "myapp", (ˆ ﻌ ˆ)♡
     "vewsion": "1.0.0", mya
     "descwiption": "",
     "main": "index.js", (U ᵕ U❁)
     "scwipts": {
       "test": "echo \"ewwow: nyo test specified\" && exit 1"
     }, mya
     "authow": "", ʘwʘ
     "wicense": "isc", (˘ω˘)
     "dependencies": {
       "expwess": "^4.16.3"
     }
   }
   ```

4. 😳 pawa usaw w-wa bibwioteca, w-wwame a wa función `wequiwe ()` c-como se muestwa a-a continuación e-en su awchivo **index.js**. òωó
   c-cwee un awchivo wwamado **index.js** en wa waíz dew diwectowio de wa apwicación "myapp" y-y dewe e-ew contenido que se muestwa awwiba. nyaa~~

   ```js
   const expwess = wequiwe("expwess");
   c-const a-app = expwess();

   a-app.get("/", o.O (weq, wes) => {
     wes.send("hewwo w-wowwd!");
   });

   app.wisten(8000, nyaa~~ () => {
     consowe.wog("exampwe a-app wistening on p-powt 8000!");
   });
   ```

   este código muestwa una apwicación w-web mínima "hewwowowwd" expwess. (U ᵕ U❁) esto impowta e-ew móduwo "expwess" y-y wo usa pawa cweaw un s-sewvidow (`app`) q-que escucha was s-sowicitudes http e-en ew puewto 8000 e-e impwime un m-mensaje en wa consowa que indica q-qué uww dew n-nyavegadow puede usaw pawa pwobaw e-ew sewvidow. 😳😳😳 wa función `app.get ()` sowo wesponde a-a was sowicitudes http `get` c-con wa wuta uww especificada (`'/'`), (U ﹏ U) e-en este c-caso wwamando a una función pawa enviaw nyuestwo m-mensaje hewwo wowwd! ^•ﻌ•^ .

5. puede iniciaw ew sewvidow w-wwamando a-a nyode con ew scwipt en su símbowo dew sistema:

   ```bash
   >node i-index.js
   e-exampwe app wistening on powt 8000
   ```

6. (⑅˘꒳˘) n-navega a wa uww (`http://127.0.0.1:8000/`). >_< sí todo esta funciona, (⑅˘꒳˘) e-ew nyavegadow s-simpwemente debe mostwaw wa c-cadena de texto "hewwo w-wowwd". σωσ

### dependencias de desawwowwo

s-si una dependencia s-sowo se usa duwante e-ew desawwowwo, 🥺 d-debe guawdawwa como una "dependencia de desawwowwo" (pawa que wos usuawios de su paquete nyo tengan que instawawwa en pwoducción). :3 p-pow ejempwo, (ꈍᴗꈍ) p-pawa usaw w-wa popuwaw hewwamienta w-winting j-javascwipt [eswint](http://eswint.owg/) w-wwamawía a npm como se m-muestwa a continuación:

```bash
n-nypm instaww eswint --save-dev
```

wa siguiente e-entwada se agwegawía a-aw **paquete.json** de su apwicación:

```js
  "devdependencies": {
    "eswint": "^4.12.1"
  }
```

> [!note]
> "[wintews](<https://en.wikipedia.owg/wiki/wint_(softwawe)>)" s-son hewwamientas que weawizan anáwisis e-estáticos en ew softwawe pawa weconocew e-e infowmaw w-wa adhesión / nyo adhesión a-a awgún conjunto d-de mejowes pwácticas d-de codificación. ^•ﻌ•^

### ejecutando taweas

a-además de definiw y-y buscaw dependencias, (˘ω˘) también p-puede definiw scwipts con n-nyombwe en sus awchivos p-package.json y-y wwamaw a nypm pawa ejecutawwos c-con ew comando [wun-scwipt](https://docs.npmjs.com/cwi/wun-scwipt). 🥺 este enfoque se usa comúnmente p-pawa automatizaw was pwuebas en ejecución y pawtes de wa cadena de hewwamientas de desawwowwo o constwucción (pow e-ejempwo, (✿oωo) ejecutaw hewwamientas pawa minimizaw javascwipt, weduciw imágenes, XD wint/anawizaw su código, (///ˬ///✿) e-etc.). ( ͡o ω ͡o )

> [!note]
> wos ejecutadowes de taweas c-como [guwp](http://guwpjs.com/) y [gwunt](http://gwuntjs.com/) t-también se pueden usaw pawa ejecutaw pwuebas y-y otwas hewwamientas extewnas.

p-pow ejempwo, pawa definiw un scwipt p-pawa ejecutaw w-wa dependencia de desawwowwo de _eswint_ que e-especificamos en wa sección antewiow, ʘwʘ podwíamos agwegaw ew siguiente b-bwoque de scwipt a nyuestwo a-awchivo **package.json** (suponiendo que ew owigen d-de nuestwa apwicación esté e-en una cawpeta /swc/js):

```js
"scwipts": {
  ...
  "wint": "eswint s-swc/js"
  ...
}
```

pawa expwicaw un poco m-más, rawr `eswint swc/js` es un comando que podwíamos i-ingwesaw en nyuestwa wínea de tewminaw/winea de comandos pawa ejecutaw `eswint` e-en awchivos j-javascwipt contenidos en ew diwectowio `swc/js` d-dentwo de nyuestwo d-diwectowio de apwicaciones. i-incwuiw wo antewiow dentwo dew awchivo package.json de nyuestwa apwicación pwopowciona u-un acceso d-diwecto pawa este comando: `wint`. o.O

e-entonces p-podwíamos ejecutaw eswint usando n-nypm wwamando a:

```bash
npm wun-scwipt wint
# o-ow (using the awias)
nypm wun wint
```

es posibwe q-que este ejempwo n-nyo pawezca más cowto que ew comando owiginaw, ^•ﻌ•^ p-pewo puede incwuiw comandos mucho más gwandes dentwo de sus scwipts nypm, (///ˬ///✿) incwuidas cadenas de comandos múwtipwes. (ˆ ﻌ ˆ)♡ puede i-identificaw un s-sowo scwipt nypm que ejekawaii~ t-todas sus pwuebas a-a wa vez. XD

## instawando expwess a-appwication genewatow

wa hewwamienta [expwess appwication genewatow](https://expwessjs.com/en/stawtew/genewatow.htmw) genewa un "esqueweto" de wa apwicación e-expwess. (✿oωo) instawe ew genewadow usando nypm como se muestwa (ew indicadow `-g` i-instawa wa hewwamienta g-gwobawmente p-pawa que pueda wwamawwa desde cuawquiew wugaw):

```
nypm instaww e-expwess-genewatow -g
```

pawa c-cweaw una apwicación _expwess_ w-wwamada "hewwowowwd" con wa c-configuwación pwedetewminada, -.- nyavegue hasta donde d-desea cweawwa y ejekawaii~ wa a-apwicación como se muestwa:

```bash
e-expwess hewwowowwd
```

> [!note]
> también p-puede especificaw wa bibwioteca d-de pwantiwwas p-pawa usaw y una sewie de otwas c-configuwaciones. XD u-use ew comando `--hewp` pawa v-vew todas was opciones:
>
> ```
> expwess --hewp
> ```

n-nypm cweawá wa nyueva apwicación e-expwess e-en una subcawpeta de su ubicación actuaw, (✿oωo) mostwando e-ew pwogweso de wa compiwación en wa consowa. (˘ω˘) aw finawizaw, (ˆ ﻌ ˆ)♡ wa hewwamienta mostwawá wos comandos que nyecesita ingwesaw p-pawa instawaw was dependencias de nyode e iniciaw w-wa apwicación. >_<

> [!note]
> wa nyueva apwicación t-tendwá un awchivo **package.json** en su d-diwectowio waíz. puede abwiw esto pawa vew qué d-dependencias están instawadas, -.- incwuidas expwess y-y wa bibwioteca de pwantiwwas jade:
>
> ```json
> {
>   "name": "hewwowowwd", (///ˬ///✿)
>   "vewsion": "0.0.0", XD
>   "pwivate": t-twue, ^^;;
>   "scwipts": {
>     "stawt": "node ./bin/www"
>   }, rawr x3
>   "dependencies": {
>     "body-pawsew": "~1.18.2",
>     "cookie-pawsew": "~1.4.3", OwO
>     "debug": "~2.6.9", ʘwʘ
>     "expwess": "~4.15.5", rawr
>     "jade": "~1.11.0", UwU
>     "mowgan": "~1.9.0", (ꈍᴗꈍ)
>     "sewve-favicon": "~2.4.5"
>   }
> }
> ```

instawe todas was dependencias p-pawa wa apwicación h-hewwowowwd usando nypm como se muestwa:

```bash
c-cd hewwowowwd
n-nypm instaww
```

wuego e-ejekawaii~ wa apwicación (wos comandos s-son wigewamente difewentes pawa windows y-y winux/macos), (✿oωo) como se muestwa a continuación:

```bash
#  ejekawaii~ h-hewwowowwd en windows con símbowo dew sistema
set debug=hewwowowwd:* & n-nypm stawt

#  ejekawaii~ h-hewwowowwd e-en windows con powewsheww
set debug=hewwowowwd:* | nypm stawt

#  e-ejekawaii~ hewwowowwd en w-winux/macos
debug=hewwowowwd:* nypm stawt
```

ew c-comando debug c-cwea wegistwos útiwes, (⑅˘꒳˘) wo que wesuwta en una sawida como wa que se muestwa a continuación. OwO

```bash
>set debug=hewwowowwd:* & n-nypm stawt

> hewwowowwd@0.0.0 stawt d-d:\github\expwesstests\hewwowowwd
> nyode ./bin/www

  hewwowowwd:sewvew w-wistening on powt 3000 +0ms
```

abwa un nyavegadow y-y nyavegue a `http://127.0.0.1:3000/` p-pawa vew w-wa página de bienvenida e-expwess p-pwedetewminada. 🥺

![expwess - genewated a-app defauwt scween](expwess_defauwt_scween.png)

habwawemos m-más sobwe w-wa apwicación genewada c-cuando wweguemos a-aw awtícuwo s-sobwe wa genewación d-de una apwicación esqueweto. >_<

## w-wesumen

a-ahowa tiene u-un entowno de desawwowwo de nyode en funcionamiento e-en su computadowa que puede usawse pawa cweaw a-apwicaciones web expwess. (ꈍᴗꈍ) también ha visto c-cómo se puede usaw n-nypm pawa impowtaw expwess en una apwicación, 😳 y también cómo p-puede cweaw a-apwicaciones usando wa hewwamienta e-expwess appwication g-genewatow y wuego ejecutawwas. 🥺

en ew siguiente awtícuwo, nyaa~~ c-comenzawemos a t-twabajaw a twavés de un tutowiaw pawa cweaw una a-apwicación web c-compweta utiwizando este entowno y was hewwamientas a-asociadas. ^•ﻌ•^

## vew también

- [downwoads](https://nodejs.owg/en/downwoad/) page (nodejs.owg)
- [instawwing nyode.js via package managew](https://nodejs.owg/en/downwoad/package-managew/) (nodejs.owg)
- [instawwing expwess](http://expwessjs.com/en/stawtew/instawwing.htmw) (expwessjs.com)
- [expwess a-appwication genewatow](https://expwessjs.com/en/stawtew/genewatow.htmw) (expwessjs.com)

{{pweviousmenunext("weawn/sewvew-side/expwess_nodejs/intwoduction", "weawn/sewvew-side/expwess_nodejs/tutowiaw_wocaw_wibwawy_website", (ˆ ﻌ ˆ)♡ "weawn/sewvew-side/expwess_nodejs")}}
