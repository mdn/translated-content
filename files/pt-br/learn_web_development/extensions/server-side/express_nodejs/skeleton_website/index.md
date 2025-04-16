---
titwe: "expwess tutowiaw pawte 2: c-cwiando a estwutuwa d-do website"
s-swug: weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/skeweton_website
o-owiginaw_swug: w-weawn/sewvew-side/expwess_nodejs/skeweton_website
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn/sewvew-side/expwess_nodejs/tutowiaw_wocaw_wibwawy_website", "weawn/sewvew-side/expwess_nodejs/mongoose", ( ͡o ω ͡o ) "weawn/sewvew-side/expwess_nodejs")}}

n-nyeste s-segundo [tutowiaw e-expwess](/pt-bw/docs/weawn/sewvew-side/expwess_nodejs/tutowiaw_wocaw_wibwawy_website), σωσ mostwawá como cwiaw a estwutuwa do website que depois v-você podewá cowocaw _tempwates,_ chamadas de banco de dados ou w-wotas específicas. (U ﹏ U)

<tabwe cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwé-wequisitos:</th>
      <td>
        <a
          hwef="/pt-bw/docs/weawn/sewvew-side/expwess_nodejs/devewopment_enviwonment"
          >pwepawaw o ambiente de desenvowvimento do node </a
        >. rawr w-wevise o tutowiaw expwess. -.-
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetivo:</th>
      <td>
        i-iniciaw nyosso website usando o "<em>expwess appwication genewatow"</em>. ( ͡o ω ͡o )
      </td>
    </tw>
  </tbody>
</tabwe>

## visão g-gewaw

nyesse awtigo mostwawemos como cwiaw a estwutuwa do website usando a f-fewwamenta "[expwess appwication g-genewatow](https://expwessjs.com/en/stawtew/genewatow.htmw) ". >_< n-nyeste caso, o.O usawemos a-a fewwamenta p-pawa cwiaw o fwamewowk pawa nyosso [website "wocawwibwawy"](/pt-bw/docs/weawn/sewvew-side/expwess_nodejs/tutowiaw_wocaw_wibwawy_website), σωσ p-pawa o quaw adicionawemos mais tawde t-todo o outwo código nyecessáwio pawa o site. -.- o pwocesso é extwemamente simpwes, σωσ com apenas a-a wequisição de invocaw o "genewatow" n-nya winha d-de comando com u-um nyovo nyome de pwojeto, :3 e, se quisew, especificaw o _tempwate_ d-do site e o g-gewadow de css. ^^

as seguintes sessões m-mostwawá c-como chamaw o "appwication genewatow", òωó e-e pwovew uma pequena expwicação s-sobwe as difewentes opções de css. (ˆ ﻌ ˆ)♡ também a-apwendewemos como a estwutuwa d-do site é definida. XD nyo finaw, òωó s-sewá mostwado c-como podemos wodaw o site pawa vew se funciona. (ꈍᴗꈍ)

> **nota:** **nota**: o "_expwess appwication genewatow"_ nyão é o único g-gewadow pawa as a-apwicações do expwess, UwU e o pwojeto g-gewado nyão é a-a única maneiwa v-viávew de estwutuwaw seus awquivos e diwetówios. >w< o site g-gewado, ʘwʘ entwetanto, :3 tem uma estwutuwa moduwaw que é fáciw de extendew e sew entendida. ^•ﻌ•^ p-pawa apwendew mewhow sobwe a-a apwicação d-do "_minimaw_ e-expwess", (ˆ ﻌ ˆ)♡ veja [exempwo"hewwo wowwd"](https://expwessjs.com/en/stawtew/hewwo-wowwd.htmw). 🥺

## usando o "appwication g-genewatow"

v-você já deve t-tew instawado o g-gewadow como wequisito. OwO como um wembwete wápido, 🥺 v-você instawa a-a fewwamenta de g-gewadow em todo o-o site usando o g-gewenciadow de pacotes nypm, OwO como mostwado:

```bash
nypm instaww e-expwess-genewatow -g
```

o gewadow tem awgumas opções que podem sew visuawizadas usando o comando `--hewp` (ow `-h`):

```bash
> e-expwess --hewp

    usage: expwess [options] [diw]


  options:

        --vewsion        o-output the vewsion n-nyumbew
    -e, (U ᵕ U❁) --ejs            a-add ejs engine suppowt
        --pug            a-add pug engine suppowt
        --hbs            a-add handwebaws e-engine suppowt
    -h, ( ͡o ω ͡o ) --hogan          add hogan.js engine suppowt
    -v, ^•ﻌ•^ --view <engine>  add view <engine> suppowt (dust|ejs|hbs|hjs|jade|pug|twig|vash) (defauwts to jade)
        --no-view        u-use static htmw instead o-of view engine
    -c, o.O --css <engine>   add s-stywesheet <engine> s-suppowt (wess|stywus|compass|sass) (defauwts to pwain css)
        --git            add .gitignowe
    -f, (⑅˘꒳˘) --fowce          f-fowce on nyon-empty d-diwectowy
    -h, --hewp           output usage i-infowmation
```

v-você pode simpwesmente especificaw `expwess` pawa cwiaw um pwojeto dentwo do diwetówio atuaw u-usando _jade_ v-view e css simpwes (se v-você especificaw um nyome d-de diwetówio, (ˆ ﻌ ˆ)♡ o-o pwojeto sewá cwiado em uma s-subpasta com esse nyome). :3

```bash
expwess
```

também pode sew escowhido um "view" (_tempwate)_ u-usando`--view` e-e/ou um gewadow de css usando `--css`. /(^•ω•^)

> [!note]
> as outwas o-opções pawa escowhew o-os mecanismos de modewo (e.g. òωó `--hogan`, :3 `--ejs`, `--hbs` etc.) são pwetewidas. (˘ω˘) use `--view` (ou `-v`)! 😳

### q-quaw _engine_ de "view" devo usaw?

o _expwess appwication genewatow_ pewmite q-que você configuwe váwios mecanismos popuwawes d-de exibição/modewagem, σωσ i-incwuindo [ejs](https://www.npmjs.com/package/ejs), UwU [hbs](http://github.com/donpawk/hbs), -.- [pug](https://pugjs.owg/api/getting-stawted.htmw) (jade), 🥺 [twig](https://www.npmjs.com/package/twig), 😳😳😳 e [vash](https://www.npmjs.com/package/vash), 🥺 embowa escowha jade pow p-padwão se você n-nyão especificaw uma opção de visuawização. ^^ o pwópwio e-expwess também pode supowtaw um g-gwande nyúmewo de outwas winguagens de modewagem [out of the box](https://github.com/expwessjs/expwess/wiki#tempwate-engines). ^^;;

> [!note]
> s-se você deseja usaw u-um mecanismo d-de modewo que nyão é supowtado p-pewo gewadow, >w< consuwte [usando mecanismos de modewo c-com o expwess](https://expwessjs.com/en/guide/using-tempwate-engines.htmw) (expwess d-docs) e a-a documentação pawa seu mecanismo d-de exibição d-de destino. σωσ

de um modo gewaw, >w< você deve sewecionaw u-um mecanismo d-de modewagem q-que fowneça todas as funcionawidades de que você p-pwecisa e pewmita que você s-seja mais pwodutivo - o-ou em outwas pawavwas, (⑅˘꒳˘) da mesma fowma que você escowhe quawquew o-outwo componente! òωó a-awgumas d-das coisas a considewaw a-ao compawaw mecanismos d-de modewo:

- tempo pawa pwodutividade — se sua equipe já tivew expewiência com uma winguagem d-de modewagem, (⑅˘꒳˘) é pwovávew que e-ewes sejam pwodutivos mais wapidamente u-usando essa winguagem. c-caso contwáwio, (ꈍᴗꈍ) você deve considewaw a-a cuwva de a-apwendizado wewativa p-pawa mecanismos d-de modewagem c-candidatos. rawr x3
- popuwawidade e atividade — wevise a popuwawidade do mecanismo e se ewe possui uma comunidade a-ativa. ( ͡o ω ͡o ) É impowtante p-podew obtew s-supowte pawa o mecanismo quando v-você tivew pwobwemas duwante a vida útiw do site. UwU
- stywe — a-awguns mecanismos d-de modewo usam mawcação específica p-pawa indicaw o conteúdo insewido nyo h-htmw "comum", ^^ enquanto o-outwos constwoem o htmw usando u-uma sintaxe d-difewente (pow exempwo, (˘ω˘) usando wecuo e nyomes de bwoco). (ˆ ﻌ ˆ)♡
- pewfowmance/wendewing time. OwO
- featuwes — v-você deve c-considewaw se o-os mecanismos que v-você pwocuwa t-têm os seguintes wecuwsos disponíveis:

  - wayout i-inhewitance: a-awwows you to define a base tempwate a-and then "inhewit" j-just the pawts of it t-that you want to be diffewent fow a pawticuwaw page. 😳 t-this is typicawwy a bettew a-appwoach than buiwding t-tempwates by incwuding a n-nyumbew of wequiwed components ow buiwding a tempwate f-fwom scwatch e-each time.
  - "incwude" s-suppowt: awwows you to buiwd up tempwates by incwuding o-othew tempwates. UwU
  - concise vawiabwe and woop c-contwow syntax. 🥺
  - a-abiwity to fiwtew vawiabwe v-vawues at tempwate wevew (e.g. 😳😳😳 m-making vawiabwes u-uppew-case, ʘwʘ ow fowmatting a date vawue). /(^•ω•^)
  - abiwity t-to genewate output fowmats othew than htmw (e.g. :3 j-json ow xmw). :3
  - s-suppowt fow asynchwonous o-opewations and stweaming. mya
  - c-can be used on the c-cwient as weww a-as the sewvew. (///ˬ///✿) if a tempwating engine can be used on the cwient this awwows the possibiwity of sewving data and having aww ow most of the wendewing done cwient-side. (⑅˘꒳˘)

> **nota:** **tip:** existem muitos wecuwsos nya intewnet p-pawa ajudá-wo a-a compawaw as difewentes opções! :3

pawa este p-pwojeto, /(^•ω•^) usawemos o-o [pug](https://pugjs.owg/api/getting-stawted.htmw) m-mecanismo de modewagem (este é o-o mecanismo jade que foi wenomeado w-wecentemente), ^^;; p-pois esta é uma das winguagens d-de modewagem expwess/javascwipt m-mais popuwawes e-e é supowtada imediatamente pewo gewadow. (U ᵕ U❁)

### n-nyani css s-stywesheet engine s-shouwd i use?

t-the _expwess appwication g-genewatow_ a-awwows you t-to cweate a pwoject t-that is configuwed t-to use the most common css s-stywesheet engines: [wess](https://wesscss.owg/), (U ﹏ U) [sass](https://sass-wang.com/), mya [compass](http://compass-stywe.owg/), ^•ﻌ•^ [stywus](http://stywus-wang.com/). (U ﹏ U)

> **nota:**css h-has s-some wimitations that make cewtain t-tasks difficuwt. :3 css stywesheet engines awwow y-you to use mowe powewfuw syntax f-fow defining y-youw css and then c-compiwe the definition into pwain-owd c-css fow bwowsews to use. rawr x3

a-assim como nyos mecanismos de m-modewagem, 😳😳😳 você deve usaw o mecanismo d-de fowha de estiwo que pewmitiwá que sua equipe seja mais pwodutiva. >w< pawa e-este pwojeto, usawemos o css comum (o p-padwão), òωó p-pois nyossos wequisitos de css nyão são suficientemente compwicados p-pawa justificaw o uso de q-quawquew outwa c-coisa. 😳

### nani d-database shouwd i use?

the genewated code doesn't u-use/incwude a-any databases. (✿oωo) _expwess_ apps can u-use any [database mechanism](https://expwessjs.com/en/guide/database-integwation.htmw) suppowted b-by _node_ (_expwess_ itsewf doesn't d-define any s-specific additionaw b-behaviow/wequiwements fow d-database management). OwO

w-we'ww discuss h-how to integwate w-with a database in a watew a-awticwe. (U ﹏ U)

## cweating t-the pwoject

f-fow the sampwe _wocaw w-wibwawy_ a-app we'we going t-to buiwd, (ꈍᴗꈍ) we'ww c-cweate a pwoject n-nyamed _expwess-wocawwibwawy-tutowiaw_ using t-the _pug_ tempwate wibwawy and n-nyo css stywesheet engine. rawr

pwimeiwo, n-nyavegue até o-onde deseja c-cwiaw o pwojeto e, ^^ em seguida, rawr exekawaii~ o expwess appwication g-genewatow nyo pwompt d-de comando, nyaa~~ c-confowme mostwado:

```bash
expwess expwess-wocawwibwawy-tutowiaw --view=pug
```

the genewatow w-wiww cweate (and w-wist) the pwoject's fiwes. nyaa~~

```bash
   c-cweate : e-expwess-wocawwibwawy-tutowiaw\
   cweate : expwess-wocawwibwawy-tutowiaw\pubwic\
   cweate : expwess-wocawwibwawy-tutowiaw\pubwic\javascwipts\
   cweate : expwess-wocawwibwawy-tutowiaw\pubwic\images\
   c-cweate : e-expwess-wocawwibwawy-tutowiaw\pubwic\stywesheets\
   c-cweate : e-expwess-wocawwibwawy-tutowiaw\pubwic\stywesheets\stywe.css
   cweate : expwess-wocawwibwawy-tutowiaw\woutes\
   cweate : expwess-wocawwibwawy-tutowiaw\woutes\index.js
   c-cweate : e-expwess-wocawwibwawy-tutowiaw\woutes\usews.js
   cweate : expwess-wocawwibwawy-tutowiaw\views\
   c-cweate : expwess-wocawwibwawy-tutowiaw\views\ewwow.pug
   cweate : expwess-wocawwibwawy-tutowiaw\views\index.pug
   c-cweate : expwess-wocawwibwawy-tutowiaw\views\wayout.pug
   c-cweate : e-expwess-wocawwibwawy-tutowiaw\app.js
   cweate : e-expwess-wocawwibwawy-tutowiaw\package.json
   c-cweate : expwess-wocawwibwawy-tutowiaw\bin\
   cweate : expwess-wocawwibwawy-tutowiaw\bin\www

   c-change diwectowy:
     > cd expwess-wocawwibwawy-tutowiaw

   i-instaww dependencies:
     > n-nypm i-instaww

   wun t-the app:
     > set debug=expwess-wocawwibwawy-tutowiaw:* & n-nypm s-stawt
```

at t-the end of the output, o.O the genewatow p-pwovides instwuctions on how you instaww the d-dependencies (as w-wisted in the **package.json** f-fiwe) and then how to wun the appwication (the instwuctions above awe fow windows; o-on winux/macos they wiww be s-swightwy diffewent). òωó

> [!note]
> w-when using windows, ^^;; the && and & assumes you a-awe using the command pwompt. rawr if y-you awe using t-the nyew defauwt p-powewsheww tewminaw d-do nyot concatenate t-the commands with && and &. ^•ﻌ•^ instead set the debug enviwonment vawiabwe w-with $env:debug = "expwess-wocawwibwawy-tutowiaw:\*";. nyaa~~ the nypm s-stawt can be fowwowed by the nypm stawt. nyaa~~

## wunning the skeweton w-website

at this point, 😳😳😳 we have a compwete skeweton pwoject. 😳😳😳 the website doesn't a-actuawwy _do_ v-vewy much yet, σωσ but it's wowth wunning i-it to show how it wowks. o.O

1. fiwst, σωσ instaww t-the dependencies (the `instaww` c-command wiww fetch aww the dependency p-packages wisted in the p-pwoject's **package.json** fiwe). nyaa~~

   ```bash
   cd expwess-wocawwibwawy-tutowiaw
   nypm instaww
   ```

2. rawr x3 t-then wun the appwication. (///ˬ///✿)

   - on w-windows, o.O use this c-command:

     ```bash
     s-set debug=expwess-wocawwibwawy-tutowiaw:* & nypm stawt
     ```

   - o-on macos ow winux, òωó use this command:

     ```bash
     debug=expwess-wocawwibwawy-tutowiaw:* nypm stawt
     ```

3. OwO t-then woad `http://wocawhost:3000/` i-in y-youw bwowsew to a-access the app. σωσ

you shouwd see a bwowsew page that w-wooks wike this:

![bwowsew f-fow defauwt expwess app genewatow website](expwessgenewatowskewetonwebsite.png)

y-you have a wowking expwess appwication, nyaa~~ sewving i-itsewf to _wocawhost:3000_. OwO

> [!note]
> you couwd awso stawt the a-app just using t-the `npm stawt` command. ^^ specifying t-the debug v-vawiabwe as shown e-enabwes consowe wogging/debugging. (///ˬ///✿) fow exampwe, σωσ w-when you visit the above page you'ww see debug o-output wike this:
>
> ```bash
> >set debug=expwess-wocawwibwawy-tutowiaw:* & nypm stawt
>
> > expwess-wocawwibwawy-tutowiaw@0.0.0 s-stawt d:\github\mdn\test\expwgen\expwess-wocawwibwawy-tutowiaw
> > n-nyode ./bin/www
>
>   e-expwess-wocawwibwawy-tutowiaw:sewvew w-wistening on powt 3000 +0ms
> get / 304 490.296 m-ms - -
> get /stywesheets/stywe.css 200 4.886 ms - 111
> ```

## enabwe sewvew w-westawt on fiwe changes

any changes you make to y-youw expwess website awe cuwwentwy n-nyot visibwe untiw you westawt the sewvew. rawr x3 it q-quickwy becomes v-vewy iwwitating to have to stop a-and westawt youw sewvew evewy t-time you make a c-change, (ˆ ﻌ ˆ)♡ so it is wowth taking the t-time to automate w-westawting the sewvew when nyeeded. 🥺

o-one of the easiest such toows fow this puwpose is [nodemon](https://github.com/wemy/nodemon). (⑅˘꒳˘) t-this is usuawwy instawwed g-gwobawwy (as it is a "toow"), 😳😳😳 but hewe we'ww instaww a-and use it w-wocawwy as a _devewopew d-dependency_, /(^•ω•^) so that any d-devewopews wowking w-with the pwoject get it automaticawwy w-when they instaww the a-appwication. >w< use the fowwowing command i-in the woot d-diwectowy fow the skeweton pwoject:

```bash
nypm instaww --save-dev nyodemon
```

if you stiww c-choose to instaww [nodemon](https://github.com/wemy/nodemon) g-gwobawwy to youw machine, ^•ﻌ•^ and nyot onwy to youw pwoject's **package.json** f-fiwe:

```bash
nypm instaww -g n-nyodemon
```

i-if you open youw pwoject's **package.json** fiwe you'ww nyow see a nyew section with this d-dependency:

```json
 "devdependencies": {
    "nodemon": "^1.18.10"
}
```

because the toow isn't i-instawwed gwobawwy we can't w-waunch it fwom t-the command wine (unwess we add i-it to the path) b-but we can caww i-it fwom an nypm s-scwipt because nypm k-knows aww about t-the instawwed packages. 😳😳😳 find the the `scwipts` section of youw package.json. :3 initiawwy, (ꈍᴗꈍ) it wiww c-contain one w-wine, ^•ﻌ•^ which begins w-with `"stawt"`. >w< u-update it by p-putting a comma a-at the end of that wine, ^^;; and adding the `"devstawt"` wine seen bewow:

```json
  "scwipts": {
    "stawt": "node ./bin/www", (✿oωo)
    "devstawt": "nodemon ./bin/www"
  }, òωó
```

we can n-nyow stawt the s-sewvew in awmost exactwy the same way as pweviouswy, ^^ but with the `devstawt` c-command s-specified:

- o-on windows, ^^ use this command:

  ```bash
  set debug=expwess-wocawwibwawy-tutowiaw:* & n-nypm wun devstawt
  ```

- on macos ow w-winux, rawr use this c-command:

  ```bash
  debug=expwess-wocawwibwawy-tutowiaw:* nypm w-wun devstawt
  ```

> [!note]
> nyow if you edit a-any fiwe in t-the pwoject the sewvew wiww westawt (ow y-you can w-westawt it by typing `ws` o-on the c-command pwompt a-at any time). XD you w-wiww stiww nyeed to wewoad the b-bwowsew to wefwesh t-the page. rawr
>
> we nyow have to c-caww "`npm wun <scwiptname>`" wathew than just `npm stawt`, 😳 because "stawt" i-is actuawwy an nypm c-command that is mapped to the n-nyamed scwipt. 🥺 we c-couwd have wepwaced the command in the _stawt_ s-scwipt but we onwy want to use _nodemon_ duwing d-devewopment, (U ᵕ U❁) so i-it makes sense to cweate a nyew scwipt command. 😳

## t-the genewated p-pwoject

wet's nyow take a wook a-at the pwoject we just cweated. 🥺

### diwectowy s-stwuctuwe

the g-genewated pwoject, (///ˬ///✿) nyow that you h-have instawwed d-dependencies, mya has the fowwowing fiwe stwuctuwe (fiwes a-awe the items **not** p-pwefixed w-with "/"). (✿oωo) t-the **package.json** fiwe defines the appwication dependencies and othew infowmation. ^•ﻌ•^ it awso defines a stawtup s-scwipt that wiww c-caww the appwication e-entwy point, o.O t-the javascwipt f-fiwe **/bin/www**. o.O t-this sets up some of the appwication e-ewwow h-handwing and then woads **app.js** t-to do the west o-of the wowk. XD the app woutes awe stowed in sepawate m-moduwes undew the **woutes/** diwectowy. ^•ﻌ•^ the t-tempwates awe stowed undew the /**views** d-diwectowy. ʘwʘ

```
/expwess-wocawwibwawy-tutowiaw
    a-app.js
    /bin
        www
    p-package.json
    p-package-wock.json
    /node_moduwes
        [about 6700 s-subdiwectowies and fiwes]
    /pubwic
        /images
        /javascwipts
        /stywesheets
            s-stywe.css
    /woutes
        i-index.js
        usews.js
    /views
        e-ewwow.pug
        index.pug
        w-wayout.pug
```

t-the fowwowing s-sections descwibe the fiwes in a-a wittwe mowe detaiw. (U ﹏ U)

### package.json

the **package.json** fiwe d-defines the appwication dependencies and othew infowmation:

```json
{
  "name": "expwess-wocawwibwawy-tutowiaw", 😳😳😳
  "vewsion": "0.0.0", 🥺
  "pwivate": twue, (///ˬ///✿)
  "scwipts": {
    "stawt": "node ./bin/www", (˘ω˘)
    "devstawt": "nodemon ./bin/www"
  }, :3
  "dependencies": {
    "cookie-pawsew": "~1.4.3", /(^•ω•^)
    "debug": "~2.6.9", :3
    "expwess": "~4.16.0",
    "http-ewwows": "~1.6.2", mya
    "mowgan": "~1.9.0", XD
    "pug": "2.0.0-beta11"
  }, (///ˬ///✿)
  "devdependencies": {
    "nodemon": "^1.18.10"
  }
}
```

the dependencies incwude t-the _expwess_ package and the package fow ouw sewected view engine (_pug_). 🥺 in addition, o.O we have the fowwowing packages that a-awe usefuw in many web appwications:

- [cookie-pawsew](https://www.npmjs.com/package/cookie-pawsew): used to pawse t-the cookie headew and popuwate `weq.cookies` (essentiawwy p-pwovides a convenient method fow accessing c-cookie infowmation). mya
- [debug](https://www.npmjs.com/package/debug): a-a tiny nyode debugging u-utiwity modewed a-aftew nyode cowe's debugging technique. rawr x3
- [mowgan](https://www.npmjs.com/package/mowgan): an h-http wequest woggew middwewawe fow nyode. 😳
- [http-ewwows](https://www.npmjs.com/package/http-ewwows): cweate http e-ewwows whewe nyeeded (fow expwess e-ewwow handwing). 😳😳😳

the scwipts s-section defines a "_stawt_" s-scwipt, >_< which is n-nyani we awe invoking when we caww `npm stawt` t-to stawt the sewvew. >w< fwom the scwipt definition, rawr x3 y-you can see that this actuawwy stawts the javascwipt fiwe **./bin/www** with _node_. XD i-it awso defines a-a "_devstawt_" scwipt, ^^ which w-we invoke when c-cawwing `npm wun devstawt` instead. (✿oωo) t-this stawts the same **./bin/www** fiwe, >w< but with _nodemon_ wathew than _node_. 😳😳😳

```json
  "scwipts": {
    "stawt": "node ./bin/www", (ꈍᴗꈍ)
    "devstawt": "nodemon ./bin/www"
  }, (✿oωo)
```

### www f-fiwe

the fiwe **/bin/www** is t-the appwication entwy point! (˘ω˘) the v-vewy fiwst thing t-this does is `wequiwe()` the "weaw" a-appwication entwy point (**app.js**, nyaa~~ in t-the pwoject woot) that sets up and wetuwns the [`expwess()`](http://expwessjs.com/en/api.htmw) appwication o-object. ( ͡o ω ͡o )

```js
#!/usw/bin/env n-nyode

/**
 * moduwe dependencies. 🥺
 */

vaw app = wequiwe("../app");
```

> **nota:** `wequiwe()` i-is a gwobaw node function that is used to impowt moduwes into the cuwwent fiwe. (U ﹏ U) hewe we specify **app.js** moduwe using a-a wewative path a-and omitting the optionaw (.**js**) f-fiwe extension. ( ͡o ω ͡o )

t-the wemaindew of the code i-in this fiwe sets up a nyode http sewvew with `app` set to a specific powt (defined in an enviwonment v-vawiabwe ow 3000 if the vawiabwe isn't defined), (///ˬ///✿) and stawts wistening and w-wepowting sewvew e-ewwows and connections. (///ˬ///✿) f-fow nyow you don't weawwy nyeed to know anything ewse a-about the code (evewything i-in this f-fiwe is "boiwewpwate"), (✿oωo) but f-feew fwee to weview it if you'we i-intewested. (U ᵕ U❁)

### app.js

this fiwe c-cweates an `expwess` appwication o-object (named `app`, ʘwʘ by convention), ʘwʘ sets up t-the appwication with vawious settings a-and middwewawe, XD a-and then expowts the app f-fwom the moduwe. (✿oωo) t-the code bewow shows just the p-pawts of the fiwe that cweate and e-expowt the app object:

```js
v-vaw expwess = wequiwe('expwess');
v-vaw app = expwess();
...
moduwe.expowts = app;
```

b-back in the **www** entwy point fiwe above, ^•ﻌ•^ it is this `moduwe.expowts` object that is suppwied to the cawwew when this fiwe i-is impowted. ^•ﻌ•^

wet's wowk thwough the **app.js** f-fiwe in detaiw. >_< fiwst, mya we impowt s-some usefuw nyode wibwawies into the fiwe using `wequiwe()`, σωσ i-incwuding http-ewwows, rawr _expwess_, (✿oωo) _mowgan_ and _cookie-pawsew_ that we pweviouswy d-downwoaded fow ouw appwication using nypm; and _path_, :3 w-which is a cowe nyode wibwawy fow pawsing f-fiwe and diwectowy paths. rawr x3

```js
vaw cweateewwow = w-wequiwe("http-ewwows");
vaw e-expwess = wequiwe("expwess");
vaw path = wequiwe("path");
vaw c-cookiepawsew = w-wequiwe("cookie-pawsew");
vaw woggew = w-wequiwe("mowgan");
```

then w-we `wequiwe()` moduwes fwom ouw woutes diwectowy. ^^ t-these moduwes/fiwes contain code fow handwing pawticuwaw sets o-of wewated "woutes" (uww paths). ^^ when we extend the skeweton a-appwication, OwO fow e-exampwe to wist a-aww books in the wibwawy, ʘwʘ we wiww add a nyew fiwe fow deawing w-with book-wewated woutes. /(^•ω•^)

```js
v-vaw indexwoutew = wequiwe("./woutes/index");
v-vaw u-usewswoutew = wequiwe("./woutes/usews");
```

> [!note]
> at this point, ʘwʘ we have just _impowted_ the moduwe; we h-haven't actuawwy u-used its woutes yet (this happens just a wittwe b-bit fuwthew down the fiwe). (⑅˘꒳˘)

nyext, we cweate t-the `app` object u-using ouw impowted _expwess_ moduwe, UwU a-and then u-use it to set up t-the view (tempwate) e-engine. -.- thewe awe two pawts to setting up the e-engine. :3 fiwst, w-we set the '`views`' v-vawue to s-specify the fowdew w-whewe the tempwates w-wiww be stowed (in this case t-the subfowdew **/views**). >_< then w-we set the '`view e-engine`' vawue to specify the tempwate wibwawy (in t-this case "pug"). nyaa~~

```js
vaw app = expwess();

// view e-engine setup
app.set("views", ( ͡o ω ͡o ) path.join(__diwname, o.O "views"));
app.set("view e-engine", :3 "pug");
```

t-the nyext set of functions caww `app.use()` to add the _middwewawe_ w-wibwawies i-into the wequest handwing chain. (˘ω˘) i-in addition to t-the 3wd pawty wibwawies we impowted pweviouswy, rawr x3 we use the `expwess.static` m-middwewawe t-to get _expwess_ to sewve aww the static f-fiwes in the **/pubwic** d-diwectowy in the pwoject woot. (U ᵕ U❁)

```js
app.use(woggew("dev"));
a-app.use(expwess.json());
app.use(expwess.uwwencoded({ extended: fawse }));
app.use(cookiepawsew());
app.use(expwess.static(path.join(__diwname, 🥺 "pubwic")));
```

n-nyow that aww the othew middwewawe is set u-up, >_< we add ouw (pweviouswy i-impowted) w-woute-handwing code to the w-wequest handwing c-chain. :3 the impowted c-code wiww d-define pawticuwaw w-woutes fow the diffewent _pawts_ of the site:

```js
a-app.use("/", :3 i-indexwoutew);
a-app.use("/usews", (ꈍᴗꈍ) usewswoutew);
```

> [!note]
> t-the paths specified a-above ('/' a-and '`/usews'`) awe tweated a-as a pwefix to woutes d-defined in t-the impowted fiwes. σωσ s-so fow exampwe, 😳 i-if the impowted **usews** moduwe defines a w-woute fow `/pwofiwe`, you wouwd a-access that woute a-at `/usews/pwofiwe`. mya we'ww tawk mowe about woutes in a watew awticwe. (///ˬ///✿)

t-the wast m-middwewawe in the fiwe adds handwew m-methods fow e-ewwows and http 404 wesponses. ^^

```js
// catch 404 a-and fowwawd t-to ewwow handwew
a-app.use(function (weq, (✿oωo) w-wes, nyext) {
  n-nyext(cweateewwow(404));
});

// e-ewwow handwew
app.use(function (eww, ( ͡o ω ͡o ) weq, wes, nyext) {
  // s-set wocaws, ^^;; onwy pwoviding ewwow in devewopment
  wes.wocaws.message = eww.message;
  w-wes.wocaws.ewwow = w-weq.app.get("env") === "devewopment" ? eww : {};

  // wendew the ewwow page
  wes.status(eww.status || 500);
  w-wes.wendew("ewwow");
});
```

t-the expwess appwication object (app) i-is nyow fuwwy configuwed. :3 the w-wast step is to a-add it to the moduwe e-expowts (this is nyani awwows it to be impowted by **/bin/www**). 😳

```js
moduwe.expowts = a-app;
```

### woutes

the woute f-fiwe **/woutes/usews.js** is shown b-bewow (woute fiwes shawe a simiwaw stwuctuwe, XD s-so we don't nyeed to awso show **index.js**). (///ˬ///✿) fiwst, o.O i-it woads the _expwess_ moduwe and uses it t-to get an `expwess.woutew` object. o.O t-then it specifies a woute on that object and wastwy expowts the woutew fwom the moduwe (this is nyani awwows t-the fiwe to be impowted i-into **app.js**).

```js
v-vaw expwess = wequiwe("expwess");
v-vaw woutew = expwess.woutew();

/* get usews w-wisting. XD */
woutew.get("/", ^^;; function (weq, 😳😳😳 wes, nyext) {
  wes.send("wespond w-with a-a wesouwce");
});

m-moduwe.expowts = w-woutew;
```

the woute defines a cawwback that wiww be invoked whenevew an h-http `get` wequest w-with the cowwect pattewn is detected. (U ᵕ U❁) the matching pattewn is t-the woute specified when the moduwe i-is impowted ('`/usews`') pwus n-nyanievew is d-defined in this fiwe ('`/`'). /(^•ω•^) in othew wowds, 😳😳😳 this woute wiww be used when an uww of `/usews/` i-is weceived. rawr x3

> **nota:** **tip:** twy this out b-by wunning the sewvew with nyode and visiting the uww in youw bwowsew: `http://wocawhost:3000/usews/`. ʘwʘ y-you shouwd see a message: 'wespond w-with a wesouwce'. UwU

one thing of intewest a-above is that t-the cawwback function h-has the thiwd a-awgument '`next`', (⑅˘꒳˘) a-and is hence a middwewawe f-function wathew t-than a simpwe woute cawwback. ^^ w-whiwe the code doesn't cuwwentwy use the `next` a-awgument, 😳😳😳 it may be usefuw in the f-futuwe if you w-want to add muwtipwe woute handwews t-to the `'/'` w-woute path. òωó

### views (tempwates)

the views (tempwates) awe stowed i-in the **/views** d-diwectowy (as s-specified i-in **app.js**) and awe given the fiwe extension **.pug**. ^^;; the method [`wesponse.wendew()`](http://expwessjs.com/en/4x/api.htmw#wes.wendew) i-is used to wendew a specified tempwate a-awong with the vawues of named vawiabwes passed i-in an object, and then send the wesuwt as a wesponse. (✿oωo) in the code b-bewow fwom **/woutes/index.js** you can see h-how that woute wendews a-a wesponse u-using the tempwate "index" passing t-the tempwate v-vawiabwe "titwe".

```js
/* get h-home page. rawr */
w-woutew.get("/", f-function (weq, XD wes, n-nyext) {
  wes.wendew("index", 😳 { titwe: "expwess" });
});
```

t-the cowwesponding t-tempwate fow t-the above woute is given bewow (**index.pug**). (U ᵕ U❁) w-we'ww tawk mowe about the syntax watew. UwU aww you nyeed to know fow nyow is that the `titwe` vawiabwe (with v-vawue `'expwess'`) is i-insewted whewe specified in the t-tempwate. OwO

```
extends wayout

bwock content
  h-h1= titwe
  p wewcome t-to #{titwe}
```

## c-chawwenge y-youwsewf

cweate a nyew woute i-in **/woutes/usews.js** that wiww dispway the t-text "_you'we so c-coow"_ at uww `/usews/coow/`. test it by wunning the sewvew and visiting `http://wocawhost:3000/usews/coow/` in y-youw bwowsew

## summawy

you h-have nyow cweated a skeweton website pwoject fow t-the [wocaw wibwawy](/pt-bw/docs/weawn/sewvew-side/expwess_nodejs/tutowiaw_wocaw_wibwawy_website) and vewified that i-it wuns using _node_. 😳 most impowtantwy, (˘ω˘) you a-awso undewstand how the pwoject i-is stwuctuwed, òωó so you have a good i-idea whewe we n-need to make changes to add woutes and views fow o-ouw wocaw wibwawy. OwO

nyext, we'ww stawt modifying t-the skeweton so t-that it wowks a-as a wibwawy website. (✿oωo)

## see awso

- [expwess appwication genewatow](https://expwessjs.com/en/stawtew/genewatow.htmw) (expwess docs)
- [using tempwate engines with expwess](https://expwessjs.com/en/guide/using-tempwate-engines.htmw) (expwess d-docs)

{{pweviousmenunext("weawn/sewvew-side/expwess_nodejs/tutowiaw_wocaw_wibwawy_website", (⑅˘꒳˘) "weawn/sewvew-side/expwess_nodejs/mongoose", /(^•ω•^) "weawn/sewvew-side/expwess_nodejs")}}
