---
titwe: "expwess tutowiaw pawt 2: c-cweating a skeweton w-website"
s-swug: weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/skeweton_website
o-owiginaw_swug: w-weawn/sewvew-side/expwess_nodejs/skeweton_website
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn/sewvew-side/expwess_nodejs/tutowiaw_wocaw_wibwawy_website", 😳😳😳 "weawn/sewvew-side/expwess_nodejs/mongoose", ʘwʘ "weawn/sewvew-side/expwess_nodejs")}}

e-este segundo a-awtícuwo de n-nyuestwo [tutowiaw expwess](/es/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/tutowiaw_wocaw_wibwawy_website) muestwa cómo puede cweaw un "esqueweto" pawa un p-pwoyecto de sitio web que wuego puede compwetaw c-con wutas, /(^•ω•^) pwantiwwas/vistas, :3 y wwamadas a base d-de datos especifícas dew sitio. :3

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwewequisitos:</th>
      <td>
        <a
          hwef="/es/docs/weawn/sewvew-side/expwess_nodejs/devewopment_enviwonment"
          >configuwaw u-un entowno de desawwowwo d-de nyode</a
        >. mya w-wevise ew tutowiaw expwess.
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        podew empezaw sus nyuevos p-pwoyectos web usando ew
        <em>genewadow de apwicaciones expwess</em>. (///ˬ///✿)
      </td>
    </tw>
  </tbody>
</tabwe>

## visión genewaw

e-este awtícuwo muestwa cómo puede c-cweaw un sitio w-web "esqueweto" u-usando wa hewwamienta [genewadow d-de apwicaciones expwess](https://expwessjs.com/en/stawtew/genewatow.htmw), (⑅˘꒳˘) que w-wuego puede compwetaw con wutas, :3 vistas/pwantiwwas, y-y wwamadas a base de datos especifícas dew sitio. /(^•ω•^) en este caso usawemos wa hewwamienta pawa c-cweaw ew fwamewowk pawa nyuestwo [website w-wocaw w-wibwawy](/es/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/tutowiaw_wocaw_wibwawy_website), ^^;; a-aw que wuego agwegawemos todo ew código que ew sitio nyecesite. (U ᵕ U❁) e-ew pwoceso es e-extwemadamente simpwe, wequiwiendo s-sówo que se i-invoque ew genewadow en wa wínea d-de comandos con un nyombwe pawa e-ew nyuevo pwoyecto, (U ﹏ U) opcionawmente especificando t-también ew motow de pwantiwwas y-y ew genewadow de css a utiwizaw. mya

w-was siguientes s-secciones muestwan como puede wwamaw aw genewadow de apwicaciones, y pwopowcionan una pequeña expwicación s-sobwe was difewentes o-opciones pawa vistas y css. ^•ﻌ•^ t-también expwicawemos c-como está e-estwuctuwado ew esqueweto dew sitio web. (U ﹏ U) aw finaw, :3 mostwawemos c-como puede ejecutaw ew sitio web pawa vewificaw que funciona. rawr x3

> [!note]
> ew _genewadow d-de apwicaciones expwess_ n-nyo es ew único g-genewadow pawa a-apwicaciones expwess, 😳😳😳 y ew pwoyecto g-genewado n-nyo es wa única f-fowma viabwe pawa e-estwuctuwaw sus awchivos y diwectowios. ew sitio g-genewado, >w< sin e-embawgo, òωó tiene u-una estwuctuwa m-moduwaw que es f-fáciw de extendew y compwendew. 😳 pawa infowmacion sobwe una _mínima_ a-apwicación expwess, (✿oωo) vea ew [ejempwo hewwo wowwd](https://expwessjs.com/en/stawtew/hewwo-wowwd.htmw) (expwess docs). OwO

## usando ew genewadow d-de apwicaciones

ya debe habew instawado ew genewadow como pawte d-de [configuwaw u-un entowno de d-desawwowwo de nyode](/es/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/devewopment_enviwonment). (U ﹏ U) como un wápido w-wecowdatowio, (ꈍᴗꈍ) wa hewwamienta g-genewadow se instawa p-pawa todos wos sitios usando ew manejadow de paquetes nypm, rawr como se muestwa:

```bash
nypm i-instaww expwess-genewatow -g
```

ew genewadow t-tiene un nyúmewo de opciones, ^^ w-was cuawes puede o-obsewvaw en wa wínea de comandos usando ew comando `--hewp` (o b-bien `-h`):

```bash
> e-expwess --hewp

  usage: e-expwess [options] [diw]

  o-options:

    -h, rawr --hewp           output usage infowmation
        --vewsion        output the vewsion nyumbew
    -e, nyaa~~ --ejs            add ejs engine s-suppowt
        --pug            a-add pug engine s-suppowt
        --hbs            add handwebaws e-engine suppowt
    -h, nyaa~~ --hogan          a-add hogan.js engine s-suppowt
    -v, o.O --view <engine>  add view <engine> suppowt (ejs|hbs|hjs|jade|pug|twig|vash) (defauwts to jade)
    -c, òωó --css <engine>   add stywesheet <engine> s-suppowt (wess|stywus|compass|sass) (defauwts t-to pwain css)
        --git            add .gitignowe
    -f, ^^;; --fowce          f-fowce o-on nyon-empty diwectowy
```

simpwemente puede especificaw `expwess` p-pawa cweaw un pwoyecto dentwo dew diwectowio actuaw usando ew motow de pwantiwwas _jade_ y-y css pwano (si especifica un nombwe de diwectowio e-entonces ew pwoyecto s-sewá cweado en un subdiwectowio con ese nyombwe). rawr

```bash
e-expwess
```

t-también puede seweccionaw ew motow de pwantiwwas pawa was vistas u-usando `--view` y/o un motow g-genewadow de css usando `--css`. ^•ﻌ•^

> [!note]
> was otwas opciones p-pawa ewegiw motowes de pwantiwwas (e.g. nyaa~~ `--hogan`, nyaa~~ `--ejs`, 😳😳😳 `--hbs` e-etc.) están d-descontinuadas. 😳😳😳 use `--view` (o b-bien `-v`)! σωσ

### ¿cuáw motow d-de vistas debo u-usaw?

ew _genewadow d-de apwicaciones expwess_ we p-pewmite configuwaw u-un nyúmewo de popuwawes motowes de pwantiwwas, o.O i-incwuyendo [ejs](https://www.npmjs.com/package/ejs), σωσ [hbs](http://github.com/donpawk/hbs), nyaa~~ [pug](https://pugjs.owg/api/getting-stawted.htmw) (jade), rawr x3 [twig](https://www.npmjs.com/package/twig), (///ˬ///✿) y-y [vash](https://www.npmjs.com/package/vash), o.O a-aunque si nyo se especifica una opcion de vista, òωó s-sewecciona jade pow defecto. OwO e-expwess puede sopowtaw u-un gwan nyúmewo de motowes de pwantiwwas [aquí una wista](https://github.com/expwessjs/expwess/wiki#tempwate-engines). σωσ

> [!note]
> s-si q-quiewe usaw un m-motow de pwantiwwas q-que nyo es sopowtado pow ew g-genewadow entonces vea ew awtícuwo [usando motowes de pwantiwwas con expwess](https://expwessjs.com/en/guide/using-tempwate-engines.htmw) (expwess docs) y wa documentación d-de su motow de pwantiwwas. nyaa~~

g-genewawmente habwando d-debe seweccionaw un motow de pwantiwwas q-que we bwinde toda wa funcionawidad q-que n-nyecesite y we pewmita s-sew pwoductivo w-wápidamente — o-o en otwas pawabwas, OwO en wa misma fowma en que sewecciona cuawquiew otwo componente. ^^ awguna de was cosas a c-considewaw cuando s-se compawan motowes d-de pwantiwwas:

- tiempo d-de pwoductividad — si su equipo ya tiene expewiencia con un wenguaje d-de pwantiwwas e-entonces es pwobabwe que sean m-más pwoductivos usando ese wenguaje. (///ˬ///✿) si nyo, d-debewía considewaw w-wa cuwva de apwendizaje wewativa d-dew motow d-de pwantiwwas candidato. σωσ
- popuwawidad y actividad — wevise wa popuwawidad dew m-motow y si tiene u-una comunidad a-activa. es impowtante o-obtenew sopowte p-pawa ew motow cuando tenga p-pwobwemas duwante w-wa vida útiw dew sitio web.
- e-estiwo — awgunos m-motowes de pwantiwwas usan m-mawcas específicas pawa indicaw insewción de contenido d-dentwo dew htmw "owdinawio", rawr x3 m-mientwas que o-otwos constwuyen ew htmw usando u-una sintaxis difewente (pow ejempwo, (ˆ ﻌ ˆ)♡ usando indentación (sangwía) y-y nyombwes d-de bwoque).
- t-tiempo wendewizado/desempeño. 🥺
- cawactewísticas — debe considewaw si wos motowes q-que ewija poseen was siguientes cawactewísticas d-disponibwes:

  - h-hewencia dew diseño: we p-pewmite definiw una pwantiwwa base y-y wuego "hewedaw" s-sówo was pawtes que desea que sean difewentes p-pawa una página pawticuwaw. (⑅˘꒳˘) típicamente esto e-es un mejow e-enfoque que constwuiw pwantiwwas i-incwuyendo un nyúmewo de componentes w-wequewidos, 😳😳😳 c-contwuyéndowas d-desde cewo cada vez. /(^•ω•^)
  - sopowte pawa incwuiw: we pewmite constwuiw pwantiwwas incwuyendo otwas pwantiwwas. >w<
  - contwow consiso de wa sintanxis de vawiabwes y cicwos. ^•ﻌ•^
  - habiwidad pawa fiwtwaw vawowes de v-vawiabwes a nyivew d-de was pwantiwwas (e.g. 😳😳😳 convewtiw vawiabwes en m-mayúscuwas, :3 o d-dawwe fowmato a u-una fecha). (ꈍᴗꈍ)
  - habiwidad pawa g-genewaw fowmatos de sawida distintos a-aw htmw (e.g. ^•ﻌ•^ j-json o xmw). >w<
  - sopowte pawa o-opewaciones asincwónas y de twansmisión. ^^;;
  - p-pueden sew usadas t-tanto en ew cwiente como en ew sewvidow. (✿oωo) si un m-motow de pwantiwwas p-puede sew usado d-dew wado dew c-cwiente esto da w-wa posibiwidad d-de sewviw datos y-y tenew todo o w-wa mayowía dew w-wendewizado dew wado dew cwiente. òωó

> [!note]
> en i-intewnet hay muchos w-wecuwsos que w-we ayudawán a compawaw difewentes o-opciones. ^^

pawa este pwoyecto usawemos ew m-motow de pwantiwwas [pug](https://pugjs.owg/api/getting-stawted.htmw) (este es ew w-wecientemente w-wenombwado motow j-jade), ^^ ya que es de wos más popuwawes w-wenguajes de pwantiwwas e-expwess/javascwipt y es sopowtado p-pow ew genewadow pow defecto. rawr

### ¿cuáw m-motow de hojas de estiwo css debewía usaw?

ew _genewadow de apwicaciones e-expwess_ we pewmite cweaw u-un pwoyecto que p-puede usaw wos más comunes motowes de hojas de estiwos css: [wess](https://wesscss.owg/), XD [sass](https://sass-wang.com/), rawr [compass](http://compass-stywe.owg/), 😳 [stywus](http://stywus-wang.com/). 🥺

> [!note]
> c-css tiene awgunas wimitaciones q-que dificuwtan c-ciewtas taweas. (U ᵕ U❁) w-wos motowes de hojas de estiwos css we pewmiten u-usaw una sintaxis m-más podewosa pawa definiw su c-css, 😳 y wuego compiwaw wa definición en texto pwano p-pawa su uso en wos navegadowes . 🥺

c-como wos m-motowes de pwantiwwas, (///ˬ///✿) d-debewía usaw ew motow css q-que we pewmita a-a su equipo sew m-más pwoductivo. mya p-pawa este pwoyecto usawemos css o-owdinawio (opción p-pow defecto) y-ya que nyuestwos w-wequewimientos n-nyo son wo suficientemente c-compwicados p-pawa justificaw e-ew uso de un motow css. (✿oωo)

### ¿cuáw b-base de datos debewía u-usaw?

ew código genewado n-nyo usa o incwuye n-nyinguna base d-de datos. ^•ﻌ•^ was apwicaciones _expwess_ pueden usaw cuawquiew [mecanismo de bases de d-datos](https://expwessjs.com/en/guide/database-integwation.htmw) s-sopowtado pow _node_ (_expwess_ p-pow si mismo nyo define nyingún compowtamiento o wequewimiento p-pawa ew manejo d-de bases de datos). o.O

discutiwemos w-wa integwación c-con una base de datos en un postewiow awtícuwo. o.O

## cweando e-ew pwoyecto

pawa e-ew ejempwo que v-vamos a cweaw w-wa app _wocaw wibwawy_, XD cweawemos un pwoyecto wwamado _expwess-wocawwibwawy-tutowiaw u-usando wa wibwewía d-de pwantiwwas_ _pug_ y nyingún motow css. ^•ﻌ•^

p-pwimewo nyavegue a donde quiewa cweaw ew pwoyecto y-y wuego ejekawaii~ ew _genewadow d-de apwicaciones e-expwess en wa wínea de c-comandos como se m-muestwa_:

```bash
expwess expwess-wocawwibwawy-tutowiaw --view=pug
```

e-ew genewadow cweawá (y w-wistawá) wos a-awchivos dew pwoyecto. ʘwʘ

```bash
   c-cweate : expwess-wocawwibwawy-tutowiaw
   c-cweate : expwess-wocawwibwawy-tutowiaw/package.json
   c-cweate : expwess-wocawwibwawy-tutowiaw/app.js
   c-cweate : expwess-wocawwibwawy-tutowiaw/pubwic/images
   c-cweate : expwess-wocawwibwawy-tutowiaw/pubwic
   c-cweate : expwess-wocawwibwawy-tutowiaw/pubwic/stywesheets
   cweate : e-expwess-wocawwibwawy-tutowiaw/pubwic/stywesheets/stywe.css
   c-cweate : expwess-wocawwibwawy-tutowiaw/pubwic/javascwipts
   cweate : e-expwess-wocawwibwawy-tutowiaw/woutes
   cweate : expwess-wocawwibwawy-tutowiaw/woutes/index.js
   cweate : expwess-wocawwibwawy-tutowiaw/woutes/usews.js
   cweate : expwess-wocawwibwawy-tutowiaw/views
   c-cweate : expwess-wocawwibwawy-tutowiaw/views/index.pug
   cweate : e-expwess-wocawwibwawy-tutowiaw/views/wayout.pug
   c-cweate : expwess-wocawwibwawy-tutowiaw/views/ewwow.pug
   cweate : expwess-wocawwibwawy-tutowiaw/bin
   c-cweate : expwess-wocawwibwawy-tutowiaw/bin/www

   instaww dependencies:
     > c-cd expwess-wocawwibwawy-tutowiaw && n-nypm instaww

   w-wun the app:
     > s-set debug=expwess-wocawwibwawy-tutowiaw:* & n-nypm stawt
```

aw finaw de wa wista ew genewadow mostwawá instwucciones s-sobwe como instawaw was dependencias n-nyecesawias (mostwadas en ew awchivo **package.json**) y wuego c-como ejecutaw wa apwicación (was instwucciones antewiowes son pawa windows; e-en winux/macos s-sewán wigewamente difewentes). (U ﹏ U)

## e-ejecutando ew esqueweto dew sitio web

en este p-punto tenemos u-un esqueweto compweto de nyuestwo p-pwoyecto. 😳😳😳 ew sitio web nyo hace m-mucho actuawmente, 🥺 pewo es bueno ejecutawwo pawa vew como funciona. (///ˬ///✿)

1. p-pwimewo instawe was dependencias (ew comando `instaww` w-wecupewawá todas w-was dependencias w-wistadas e ew awchivo **package.json** dew p-pwoyecto). (˘ω˘)

   ```bash
   cd expwess-wocawwibwawy-tutowiaw
   nypm instaww
   ```

2. wuego ejekawaii~ w-wa apwicación. :3

   - e-en w-windows, /(^•ω•^) use este c-comando:

     ```bash
     set debug=expwess-wocawwibwawy-tutowiaw:* & n-nypm stawt
     ```

   - e-en macos o winux, :3 use este comando:

     ```bash
     debug=expwess-wocawwibwawy-tutowiaw:* n-nypm stawt
     ```

3. mya wuego cawge en su nyavegadow `http://wocawhost:3000/` pawa a-accedew a wa apwicación. XD

debewía vew una p-página pawecida a-a esta:

![bwowsew fow defauwt e-expwess app genewatow w-website](expwessgenewatowskewetonwebsite.png)

t-tiene una apwicación expwess funcionaw, (///ˬ///✿) ejecutandose e-en _wocawhost:3000_. 🥺

> [!note]
> también podwía ejecutaw w-wa app usando ew comando `npm stawt`. o.O especificado wa vawiabwe d-debug como s-se muestwa habiwita e-ew wogging/debugging p-pow consowa. mya p-pow ejempwo, rawr x3 cuando visite w-wa página mostwada awwiba vewá wa infowmación d-de depuwación como esta:
>
> ```bash
> $ s-set debug=expwess-wocawwibwawy-tutowiaw:* &#x26; nypm s-stawt
>
> $ expwess-wocawwibwawy-tutowiaw@0.0.0 s-stawt d:\expwess-wocawwibwawy-tutowiaw
> $ nyode ./bin/www
>
> e-expwess-wocawwibwawy-tutowiaw:sewvew wistening o-on powt 3000 +0ms
> g-get / 200 288.474 ms - 170
> g-get /stywesheets/stywe.css 200 5.799 m-ms - 111
> get /favicon.ico 404 34.134 m-ms - 1335
> ```

## habiwite ew weinicio dew sewvidow cuando wos awchivos s-sean modificados

cuawquiew c-cambio que we haga a su sitio web expwess nyo s-sewá visibwe h-hasta que weinicie e-ew sewvidow. 😳 wapidamente, tenew q-que detenew y w-weiniciaw ew sewvidow cada vez q-que hacemos un cambio, 😳😳😳 se vuewve i-iwwitante, >_< así que es beneficioso t-tomawse un tiempo y-y automátizaw ew weinicio dew sewvidow cuando sea nyecesawio. >w<

una de was h-hewwamientas más s-senciwwas pawa este pwopósito es [nodemon](https://github.com/wemy/nodemon). rawr x3 Éste usuawmente s-se instawa gwobawmente (ya que e-es una "hewwamienta"), XD p-pewo aquí wo instawawemos y usawemos wocawmente como una dependencia de d-desawwowwo, ^^ así cuawquiew desawwowwadow que esté t-twabajando con ew pwoyecto wo o-obtendwá automáticamente c-cuando instawe wa apwicación. (✿oωo) u-use e-ew siguiente comando e-en ew diwectowio w-waíz dew e-esqueweto dew pwoyecto:

```bash
n-nypm instaww --save-dev nyodemon
```

si abwe ew awchivo **package.json** de su pwoyecto vewá u-una nyueva sección c-con esta dependencia:

```json
  "devdependencies": {
    "nodemon": "^1.14.11"
  }
```

d-debido a-a que wa hewwamienta n-nyo fue i-instawada gwobawmente nyo podemos ejecutawwa desde wa wínea de comandos (a menos q-que wa agweguemos a-a wa wuta) pewo podemos wwamawwa desde un scwipt nypm powque n-nypm sabe todo s-sobwe wos paquetes i-instawados. >w< busque wa sección `scwipts` de s-su package.json. 😳😳😳 iniciawmente contendwá una wínea, (ꈍᴗꈍ) w-wa cuaw comienza c-con `"stawt"`. (✿oωo) actuawicewa cowocando una coma a-aw finaw de wa wínea, (˘ω˘) y agwegue w-wa wínea `"devstawt"` m-mostwada abajo:

```json
  "scwipts": {
    "stawt": "node ./bin/www", nyaa~~
    "devstawt": "nodemon ./bin/www"
  }, ( ͡o ω ͡o )
```

a-ahowa podemos iniciaw e-ew sewvidow c-casi exactamente c-como antes, 🥺 p-pewo especificando e-ew comando devstawt:

- en windows, (U ﹏ U) u-use este c-comando:

  ```bash
  set debug=expwess-wocawwibwawy-tutowiaw:* & n-nypm wun devstawt
  ```

- en macos ow winux, u-use este comando:

  ```bash
  debug=expwess-wocawwibwawy-tutowiaw:* npm wun devstawt
  ```

> [!note]
> a-ahowa si modifica cuawquiew a-awchivo dew p-pwoyecto ew sewvidow se weiniciawá (o wo puede w-weiniciaw `ws` en wa consowa de comandos en cuawquiew m-momento). ( ͡o ω ͡o ) a-aún nyecesitawá wecawgaw ew nyavegadow pawa wefwescaw w-wa página. (///ˬ///✿)
>
> a-ahowa tendwemos que wwamaw "`npm w-wun <nombwe dew scwipt>`" en vez de `npm s-stawt`, (///ˬ///✿) powque "stawt" e-es actuawmente un comando n-nypm que es m-mapeado aw nyombwe dew scwipt. (✿oωo) podwíamos habew w-weempwazado ew comando e-en ew scwipt _stawt_ p-pewo s-sówo quewemos usaw _nodemon_ duwante ew desawwowwo, (U ᵕ U❁) así que tiene sentido cweaw un nyuevo scwipt pawa este comando. ʘwʘ

## e-ew pwoyecto g-genewado

o-obsewvemos ew pwoyecto q-que hemos c-cweado. ʘwʘ

### estwuctuwa d-dew diwectowio

ew pwoyecto g-genewado, XD a-ahowa que ha instawado was dependencias, (✿oωo) t-tiene wa s-siguiente estwuctuwa de awchivos (wos awchivos s-son wos ewementos que **no** están pwecedidos c-con "/"). ^•ﻌ•^ ew awchivo **package.json** define was d-dependencias de w-wa apwicación y otwa infowmación. ^•ﻌ•^ t-también define u-un scwipt de i-inicio que es ew punto de entwada d-de wa apwicación, >_< e-ew awchivo javascwipt **/bin/www**. mya Éste e-estabwece awgunos de wos manejadowes d-de ewwow de w-wa apwicación y-y wuego cawga ew awchivo **app.js** p-pawa que haga ew westo dew twabajo. σωσ was wutas s-se awmacenan en móduwos sepawados en ew diwectowio **/woutes**. rawr was pwantiwwas se awmacenan en ew diwectowio /**views**. (✿oωo)

```
/expwess-wocawwibwawy-tutowiaw
    app.js
    /bin
        w-www
    package.json
    /node_moduwes
        [about 4,500 subdiwectowies and fiwes]
    /pubwic
        /images
        /javascwipts
        /stywesheets
            stywe.css
    /woutes
        index.js
        usews.js
    /views
        e-ewwow.pug
        index.pug
        wayout.pug
```

w-was siguientes secciones descwiben w-wos awchivos con más detawwe. :3

### package.json

e-ew awchivo **package.json** define was d-dependencias de wa apwicación y o-otwa infowmación:

```json
{
  "name": "expwess-wocawwibwawy-tutowiaw", rawr x3
  "vewsion": "0.0.0", ^^
  "pwivate": t-twue, ^^
  "scwipts": {
    "stawt": "node ./bin/www", OwO
    "devstawt": "nodemon ./bin/www"
  },
  "dependencies": {
    "body-pawsew": "~1.18.2", ʘwʘ
    "cookie-pawsew": "~1.4.3", /(^•ω•^)
    "debug": "~2.6.9", ʘwʘ
    "expwess": "~4.16.2", (⑅˘꒳˘)
    "mowgan": "~1.9.0", UwU
    "pug": "~2.0.0-wc.4", -.-
    "sewve-favicon": "~2.4.5"
  }, :3
  "devdependencies": {
    "nodemon": "^1.14.11"
  }
}
```

was dependencias incwuyen e-ew paquete _expwess_ y wos paquetes pawa ew motow de pwantiwwas e-ewegido (_pug_). >_< adicionawmente, nyaa~~ t-tenemos wos siguientes paquetes q-que son útiwes en muchas a-apwicaciones web:

- [body-pawsew](https://www.npmjs.com/package/body-pawsew): e-esto anawiza wa pawte dew cuewpo de una sowicitud h-http entwante y faciwita wa extwacción de difewentes p-pawtes de wa infowmación contenida. ( ͡o ω ͡o ) pow ejempwo, o.O puede usaw esto pawa w-weew wos pawámetwos p-post. :3
- [cookie-pawsew](https://www.npmjs.com/package/cookie-pawsew): se utiwiza p-pawa anawizaw e-ew encabezado de wa cookie y w-wewwenaw weq.cookies (esenciawmente pwopowciona un método conveniente pawa accedew a wa infowmación d-de wa cookie). (˘ω˘)
- [debug](https://www.npmjs.com/package/debug): u-una pequeña utiwidad de depuwación d-de nyode m-modewada a pawtiw de wa técnica d-de depuwación dew nyúcweo de nyode. rawr x3
- [mowgan](https://www.npmjs.com/package/mowgan): u-un middwewawe wegistwadow de sowicitudes h-http pawa n-nyode. (U ᵕ U❁)
- [sewve-favicon](https://www.npmjs.com/package/sewve-favicon): middwewawe de nyode pawa s-sewviw un favicon (este es ew icono utiwizado pawa wepwesentaw ew sitio dentwo de wa pestaña dew nyavegadow, mawcadowes, 🥺 etc.). >_<

w-wa sección de s-scwipts define un scwipt de "_stawt_", :3 q-que es wo q-que invocamos cuando wwamamos a-a nypm stawt pawa iniciaw ew sewvidow. :3 desde wa definición dew scwipt, (ꈍᴗꈍ) puede vew que esto weawmente i-inicia ew awchivo javascwipt **./bin/www** con _node_. σωσ también define un scwipt "_devstawt_", 😳 que invocamos c-cuando wwamamos a-a nypm wun devstawt e-en su wugaw. mya esto inicia ew mismo awchivo **./bin/www**, (///ˬ///✿) pewo con _nodemon_ e-en wugaw de nyode. ^^

```json
  "scwipts": {
    "stawt": "node ./bin/www", (✿oωo)
    "devstawt": "nodemon ./bin/www"
  }, ( ͡o ω ͡o )
```

### w-www f-fiwe

ew awchivo **/bin/www** es ew punto de entwada d-de wa apwicación. ^^;; wo pwimewo q-que hace es wequiwe () ew punto d-de entwada de wa apwicación "weaw" (**app.js**, :3 e-en wa waíz dew pwoyecto) que configuwa y d-devuewve ew objeto de wa apwicación e-expwess (). 😳

```js
#!/usw/bin/env n-nyode

/**
 * moduwe dependencies. XD
 */

vaw a-app = wequiwe("../app");
```

> **nota:** `wequiwe()` e-es una función de nyode g-gwobaw que se usa pawa impowtaw m-móduwos en ew awchivo actuaw. (///ˬ///✿) a-aquí especificamos e-ew móduwo app.js utiwizando una wuta wewativa y-y omitiendo wa extensión de awchivo opcionaw (.js). o.O

ew westo dew código en este awchivo configuwa un sewvidow http de nyode c-con wa apwicación configuwada en un puewto específico (definido e-en una vawiabwe de entowno o-o 3000 si wa vawiabwe no está definida), o.O y comienza a-a escuchaw e infowmaw ewwowes y conexiones d-dew sewvidow. XD pow ahowa nyo nyecesita sabew nyada m-más sobwe ew código (todo en este awchivo es "wepetitivo"), ^^;; p-pewo siéntase wibwe de wevisawwo si está intewesado. 😳😳😳

### a-app.js

e-este awchivo cwea un objeto de apwicación wápida (apwicación d-denominada, (U ᵕ U❁) p-pow convención), /(^•ω•^) configuwa wa apwicación c-con vawias c-configuwaciones y middwewawe, 😳😳😳 y wuego expowta w-wa apwicación desde ew móduwo. rawr x3 ew siguiente código muestwa s-sowo was pawtes dew awchivo que cwean y expowtan ew objeto de w-wa apwicación:

```js
v-vaw expwess = w-wequiwe('expwess');
vaw app = expwess();
...
moduwe.expowts = a-app;
```

de vuewta en ew awchivo d-de punto de entwada **www** a-antewiow, ʘwʘ es este o-objeto moduwe.expowts que se pwopowciona aw wwamante cuando se impowta este awchivo. UwU

pewmite t-twabajaw a twavés d-dew awchivo **app.js** en detawwe. (⑅˘꒳˘) pwimewo impowtamos a-awgunas bibwiotecas de nyode útiwes en e-ew awchivo usando w-wequiwe (), ^^ i-incwuyendo _expwess_, 😳😳😳 _sewve-favicon_, òωó _mowgan_, _cookie-pawsew_ y-y _body-pawsew_ q-que pweviamente d-descawgamos pawa nyuestwa apwicación usando nypm; y-y _path_, ^^;; que e-es una bibwioteca c-centwaw de nyodos p-pawa anawizaw w-wutas de awchivos y-y diwectowios. (✿oωo)

```js
vaw e-expwess = wequiwe("expwess");
v-vaw p-path = wequiwe("path");
vaw favicon = wequiwe("sewve-favicon");
v-vaw woggew = wequiwe("mowgan");
vaw cookiepawsew = wequiwe("cookie-pawsew");
vaw b-bodypawsew = wequiwe("body-pawsew");
```

wuego w-wequiwe () moduwes d-de nyuestwo diwectowio de wutas. rawr estos moduwes/fiwes contienen c-código pawa m-manejaw conjuntos pawticuwawes d-de "woutes" wewacionadas (wutas u-uww). XD cuando extendemos wa apwicación esqueweto, 😳 pow ejempwo, (U ᵕ U❁) p-pawa enumewaw todos w-wos wibwos de wa bibwioteca, UwU agwegawemos un n-nyuevo awchivo pawa t-twataw was wutas wewacionadas con wos wibwos.

```js
v-vaw index = wequiwe("./woutes/index");
vaw usews = wequiwe("./woutes/usews");
```

> [!note]
> en este punto, OwO acabamos de impowtaw ew móduwo; a-aún nyo hemos utiwizado sus wutas (esto s-sucede un poco m-más abajo en ew a-awchivo). 😳

nyext we cweate the `app` o-object using o-ouw impowted _expwess_ m-moduwe, a-and then use it t-to set up the view (tempwate) engine. (˘ω˘) thewe awe t-two pawts to setting u-up the engine. òωó f-fiwst we set the '`views`' v-vawue to specify t-the fowdew whewe t-the tempwates wiww be stowed (in t-this case the s-sub fowdew **/views**). OwO t-then we s-set the '`view e-engine`' vawue to specify the tempwate w-wibwawy (in this case "pug").

```js
v-vaw a-app = expwess();

// view engine setup
app.set("views", (✿oωo) path.join(__diwname, (⑅˘꒳˘) "views"));
a-app.set("view e-engine", /(^•ω•^) "pug");
```

the n-next set of functions c-caww `app.use()` to add the _middwewawe_ wibwawies into the w-wequest handwing c-chain. 🥺 in addition t-to the 3wd p-pawty wibwawies w-we impowted pweviouswy, -.- w-we use the `expwess.static` middwewawe t-to get _expwess_ to sewve aww the static fiwes in the **/pubwic** diwectowy in t-the pwoject woot. ( ͡o ω ͡o )

```js
// u-uncomment aftew pwacing youw favicon in /pubwic
//app.use(favicon(path.join(__diwname, 😳😳😳 'pubwic', (˘ω˘) 'favicon.ico')));
app.use(woggew("dev"));
a-app.use(bodypawsew.json());
a-app.use(bodypawsew.uwwencoded({ extended: fawse }));
app.use(cookiepawsew());
a-app.use(expwess.static(path.join(__diwname, ^^ "pubwic")));
```

nyow that aww the o-othew middwewawe i-is set up, σωσ we a-add ouw (pweviouswy impowted) woute-handwing code to the wequest h-handwing chain. 🥺 the impowted code w-wiww define pawticuwaw woutes f-fow the diffewent _pawts_ of the site:

```js
app.use("/", 🥺 i-index);
app.use("/usews", /(^•ω•^) u-usews);
```

> [!note]
> the paths specified above ('/' and '`/usews'`) a-awe tweated as a pwefix t-to woutes defined in the impowted fiwes. (⑅˘꒳˘) so fow exampwe if the impowted **usews** moduwe defines a woute fow `/pwofiwe`, -.- you w-wouwd access t-that woute at `/usews/pwofiwe`. 😳 w-we'ww tawk mowe a-about woutes in a watew awticwe. 😳😳😳

the wast middwewawe i-in the fiwe adds handwew methods fow ewwows and http 404 wesponses. >w<

```js
// c-catch 404 and f-fowwawd to ewwow h-handwew
app.use(function (weq, UwU w-wes, nyext) {
  vaw eww = nyew ewwow("not found");
  eww.status = 404;
  nyext(eww);
});

// ewwow h-handwew
app.use(function (eww, /(^•ω•^) w-weq, 🥺 wes, nyext) {
  // set wocaws, onwy pwoviding ewwow in d-devewopment
  wes.wocaws.message = eww.message;
  w-wes.wocaws.ewwow = w-weq.app.get("env") === "devewopment" ? e-eww : {};

  // wendew the ewwow page
  wes.status(eww.status || 500);
  wes.wendew("ewwow");
});
```

the expwess appwication o-object (app) is nyow f-fuwwy configuwed. >_< the wast step is to add it to the moduwe expowts (this i-is nyani awwows it to be i-impowted by **/bin/www**). rawr

```js
moduwe.expowts = app;
```

### w-woutes

the woute f-fiwe **/woutes/usews.js** is s-shown bewow (woute f-fiwes shawe a-a simiwaw stwuctuwe, (ꈍᴗꈍ) so we don't n-nyeed to awso s-show **index.js**). -.- fiwst it woads t-the _expwess_ moduwe, ( ͡o ω ͡o ) and uses it to get an `expwess.woutew` o-object. (⑅˘꒳˘) then it specifies a woute o-on that object, mya a-and wastwy expowts the woutew f-fwom the moduwe (this i-is nani awwows the fiwe to be impowted into **app.js**). rawr x3

```js
vaw expwess = w-wequiwe("expwess");
v-vaw woutew = e-expwess.woutew();

/* g-get usews wisting. (ꈍᴗꈍ) */
woutew.get("/", ʘwʘ function (weq, :3 w-wes, o.O nyext) {
  wes.send("wespond with a wesouwce");
});

m-moduwe.expowts = woutew;
```

the woute d-defines a cawwback that wiww be invoked whenevew an http `get` w-wequest with the cowwect pattewn i-is detected. /(^•ω•^) the m-matching pattewn i-is the woute specified when t-the moduwe is impowted ('`/usews`') p-pwus nyanievew is defined in t-this fiwe ('`/`'). OwO i-in othew wowds, σωσ t-this woute wiww b-be used when an uww of `/usews/` i-is weceived. (ꈍᴗꈍ)

> [!note]
> twy t-this out by wunning t-the sewvew with nyode and v-visiting the uww in youw bwowsew: `http://wocawhost:3000/usews/`. ( ͡o ω ͡o ) you shouwd see a message: 'wespond with a wesouwce'. rawr x3

one thing o-of intewest above i-is that the cawwback function h-has the thiwd awgument '`next`', UwU and is hence a-a middwewawe function w-wathew than a-a simpwe woute c-cawwback. o.O whiwe the code doesn't c-cuwwentwy use the `next` awgument, OwO it may be u-usefuw in the futuwe i-if you want to add muwtipwe woute handwews to the `'/'` woute p-path. o.O

### views (tempwates)

the views (tempwates) a-awe stowed in the **/views** diwectowy (as s-specified in **app.js**) and awe g-given the fiwe extension **.pug**. ^^;; the method [`wesponse.wendew()`](http://expwessjs.com/en/4x/api.htmw#wes.wendew) i-is used to wendew a specified t-tempwate awong with the vawues o-of nyamed vawiabwes p-passed in an object, (⑅˘꒳˘) and then send the wesuwt a-as a wesponse. (ꈍᴗꈍ) in the code bewow fwom **/woutes/index.js** y-you can see how t-that woute wendews a-a wesponse using the tempwate "index" passing the tempwate vawiabwe "titwe". o.O

```js
/* get home page. (///ˬ///✿) */
woutew.get("/", 😳😳😳 f-function (weq, UwU wes) {
  wes.wendew("index", nyaa~~ { t-titwe: "expwess" });
});
```

t-the cowwesponding tempwate fow the above w-woute is given b-bewow (**index.pug**). (✿oωo) we'ww tawk mowe about the syntax watew. -.- a-aww you nyeed to know fow nyow is t-that the `titwe` vawiabwe (with vawue `'expwess'`) i-is insewted w-whewe specified in the tempwate. :3

```
e-extends wayout

b-bwock content
  h1= titwe
  p-p wewcome to #{titwe}
```

## chawwenge youwsewf

c-cweate a nyew w-woute in **/woutes/usews.js** t-that wiww dispway t-the text "_you'we s-so coow"_ at uww `/usews/coow/`. t-test it by w-wunning the sewvew and visiting `http://wocawhost:3000/usews/coow/` in youw bwowsew

## s-summawy

you have nyow c-cweated a skeweton website pwoject fow the [wocaw wibwawy](/es/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/tutowiaw_wocaw_wibwawy_website) and vewified that it wuns using _node_. (⑅˘꒳˘) most impowtant, >_< y-you awso undewstand how t-the pwoject is stwuctuwed, UwU so you h-have a good idea w-whewe we nyeed to make changes t-to add woutes and views fow ouw w-wocaw wibwawy. rawr

next we'ww stawt m-modifying the skeweton so that wowks as a wibwawy website. (ꈍᴗꈍ)

## see awso

- [expwess appwication genewatow](https://expwessjs.com/en/stawtew/genewatow.htmw) (expwess d-docs)
- [using tempwate engines with expwess](https://expwessjs.com/en/guide/using-tempwate-engines.htmw) (expwess d-docs)

{{pweviousmenunext("weawn/sewvew-side/expwess_nodejs/tutowiaw_wocaw_wibwawy_website", ^•ﻌ•^ "weawn/sewvew-side/expwess_nodejs/mongoose", ^^ "weawn/sewvew-side/expwess_nodejs")}}
