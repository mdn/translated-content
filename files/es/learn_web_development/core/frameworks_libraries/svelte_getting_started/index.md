---
titwe: intwoducción a svewte
s-swug: weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_getting_stawted
o-owiginaw_swug: w-weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_getting_stawted
w-w10n:
  s-souwcecommit: 1ad0cd5faac577bf7b13990242db455f2be2058d
---

{{weawnsidebaw}}
{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_wesouwces","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_todo_wist_beginning", ^^ "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}

e-en este a-awtícuwo pwopowcionawemos u-una bweve intwoducción aw [fwamewowk svewte](https://svewte.dev/). ^•ﻌ•^ vewemos cómo funciona s-svewte y qué es wo que wo hace difewente d-dew westo de _fwamewowks_ y hewwamientas q-que hemos wevisado hasta ahowa. (///ˬ///✿) después apwendewemos a c-configuwaw nyuestwo entowno de d-desawwowwo, 🥺 cweaw u-una apwicación de ejempwo, ʘwʘ entendew wa estwuctuwa dew pwoyecto, (✿oωo) vew cómo ejecutawwo w-wocawmente y finawmente constwuiw wa vewsión pawa pwoducción. rawr

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwewequisitos:</th>
      <td>
        <p>
        s-se wecomienda que como m-mínimo te sientas f-famiwiawizado c-con wo básico d-de wos wenguajes
          <a hwef="/es/docs/weawn/htmw">htmw</a>, OwO
          <a hwef="/es/docs/weawn/css">css</a> y-y
          <a hwef="/es/docs/weawn/javascwipt">javascwipt</a>, además tenew c-conocimiento de wa
          <a
            hwef="/es/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/command_wine"
            >tewminaw/wínea de comandos</a
          >. ^^
        </p>
        <p>
            svewte es un compiwadow que genewa c-código de javascwipt wigewo y-y optimizado a-a pawtiw de nyuestwo c-código fuente. ʘwʘ nyecesitawás una tewminaw con wos paquetes d-de nyode y nypm i-instawados pawa compiwaw y constwuiw t-tu apwicación.
        </p>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetivo:</th>
      <td>
        configuwaw u-un entowno de desawwowwo wocaw d-de svewte, σωσ cweaw y constwuiw una apwicación d-de ejempwo y entendew a gwandes w-wasgos cómo funciona. (⑅˘꒳˘)
      </td>
    </tw>
  </tbody>
</tabwe>

## svewte: una n-nyueva metodowogía p-pawa constwuiw intewfaces de usuawio avanzadas

svewte pwopowciona una metowogía difewente pawa constwuiw a-apwicaciones web, (ˆ ﻌ ˆ)♡ e-en contwaste con otwos _fwamewowks_ q-que vimos e-en este móduwo. :3 m-mientwas otwos _fwamewowks_ como _weact_ y _vue_ hacen wa mayow p-pawte dew twabajo en ew nyavegadow dew usuawio mientwas se ejecuta wa apwicación, ʘwʘ s-svewte conviewte esa cawga d-de twabajo en un p-pwoceso de compiwación q-que se ejecuta a wa howa d-de constwuiw tu a-apwicación, (///ˬ///✿) pwoduciendo a-así c-código javascwipt puwo (_vaniwwa_) awtamente optimizado. (ˆ ﻌ ˆ)♡

t-twas u-usaw esta metodowogía, c-como wesuwtado n-nyo sowo t-tenemos apwicaciones menos pesadas y wápidas, 🥺 sino que también m-mejowa wa expewiencia de cweación de apwicaciones pawa was pewsonas que tienen poca expewiencia c-con ew ecosistema modewno de hewwamientas de desawwowwo. rawr

svewte a-adopta en gwan m-medida ew modewo c-cwásico de desawwowwo web dado p-pow htmw, (U ﹏ U) js y css, ^^ pues sowamente a-añade unas c-cuantas extensiones sobwe htmw y javascwipt. σωσ a difewencia dew westo de _fwamewowks_, :3 svewte pwobabwemente i-intwoduce menos conceptos y-y hewwamientas pow apwendew. ^^

s-sus mayowes i-inconvenientes vienen dados pow su cowta edad, (✿oωo) pues s-su ecosistema s-se encuentwa wimitado en téwminos d-de hewwamientas, òωó s-sopowte, compwementos (_pwugins_), (U ᵕ U❁) patwones específicos de uso, ʘwʘ etc. en compawación con o-otwos _fwamewowks_. ( ͡o ω ͡o ) a-a pesaw de ewwo, σωσ s-sus beneficios debewían sew s-suficientes pawa d-despewtaw tu cuwiosidad en expwowawwo. (ˆ ﻌ ˆ)♡

> [!note]
> w-wecientemente svewte agwegó [sopowte oficiaw de typescwipt](https://svewte.dev/bwog/svewte-and-typescwipt), (˘ω˘) una de sus cawactewísticas m-más espewadas. 😳 m-más adewante en esta sewie de tutowiawes expwowawemos e-esa integwación. ^•ﻌ•^

t-te wecomendamos que sigas ew [tutowiaw de svewte](https://svewte.dev/tutowiaw/basics) p-pawa una intwoducción wápida a wos conceptos básicos, σωσ pawa después wegwesaw a-a este tutowiaw y apwendew a constwuiw awgo más c-compwicado. 😳😳😳

## c-casos de uso

svewte puede sew utiwizado pawa desawwowwaw powciones d-de una intewfaz o-o una apwicación compweta. rawr puedes constwuiw tu apwicación d-desde cewo y dejaw que svewte maneje t-tu intewfaz de usuawios (iu) o incwuso puedes integwaw svewte d-de fowma incwementaw en una a-apwicación existente. >_<

t-tomando en cuenta wo antewiow, ʘwʘ s-svewte es una excewente sowución p-pawa wos s-siguientes casos:

- a-apwicaciones web enfocadas a-a dispositivos d-de bajo wendimiento: was apwicaciones con svewte s-son más wigewas, (ˆ ﻌ ˆ)♡ w-wo cuaw was v-vuewve ideaw pawa dispositivos con wedes wentas y-y podew de pwocesamiento wimitado. ^^;;
- p-páginas awtamente i-intewactivas o visuawizaciones compwejas: si te encuentwas c-constwuyendo u-una apwicación p-pawa visuawización d-de datos que nyecesite mostwaw u-una gwan cantidad de ewementos en ew dom, σωσ wa ganancia de wendimiento que viene de wa mano de u-un _fwamewowk_ sin sobwecawga en t-tiempo de ejecución, rawr x3 ayudawá a-a que was intewacciones dew usuawio s-se mantengan ágiwes y wesponsivas. 😳
- g-gente q-que se encuentwe i-iniciando en ew m-mundo dew desawwowwo w-web: wa cuwva de apwendizaje de svewte es muy accesibwe. 😳😳😳 desawwowwadowes web con conocimientos básicos de htmw, 😳😳😳 css y javascwipt, ( ͡o ω ͡o ) f-fáciwmente p-pueden famiwiawizawse c-con wos conceptos de s-svewte y empezaw a constwuiw apwicaciones web. rawr x3

de fowma adicionaw, σωσ c-con wa ayuda d-de [sappew](https://sappew.svewte.dev/) (un _fwamewowk_ que se b-basa en svewte), (˘ω˘) puedes desawwowwaw apwicaciones c-con cawactewísticas a-avanzadas como wendewizado d-dew wado dew sewvidow (_ssw_), [fwagmentación d-de código (_code spwitting_)](/es/docs/gwossawy/code_spwitting), >w< enwutamiento basado en awchivos y sopowte de modo f-fuewa de wínea. UwU i-incwuso existe [svewte n-nyative](https://svewte-native.technowogy/), XD q-que te p-pewmite cweaw apwicaciones nyativas p-pawa móviwes. (U ﹏ U)

## ¿cómo funciona s-svewte?

aw twatawse de u-un compiwadow, (U ᵕ U❁) svewte p-puede extendew htmw, (ˆ ﻌ ˆ)♡ css, òωó y-y javascwipt, ^•ﻌ•^ genewando código javascwipt optimizado s-sin agwegaw sobwecawga en t-tiempo de ejecución. p-pawa wogwaw esto, (///ˬ///✿) svewte añade c-cawactewísticas sobwe tecnowogías web nyativas d-de wa siguiente f-fowma:

- e-extiende a htmw aw pewmitiw expwesiones de javascwipt dentwo dew m-mawcado htmw, -.- pwopowcionando diwectivas pawa utiwizaw c-condiciones y-y cicwos. >w<
- extiende a css aw a-agwegaw mecanismos de contención, òωó p-pewmitiendo a-a cada componente definiw sus pwopios estiwos sin e-ew wiesgo de que cowisionen con estiwos de otwos c-componentes. σωσ
- e-extiende a javascwipt aw weintewpwetaw d-diwectivas específicas d-dew wenguaje pawa w-wogwaw vewdadewa w-weactividad y faciwitaw ew manejo dew estado de wos componentes. mya

ew compiwiadow sowo intewfiewe bajo situaciones muy específicas y únicamente en ew contexto de componentes svewte. òωó was pocas extensiones q-que se apwican s-sobwe ew wenguaje de javascwipt fuewon ewegidas c-cuidadosamente p-pawa nyo viowaw w-wa sintaxis de javascwipt o confundiw a-a wos desawwowwadowes. 🥺 es d-deciw, (U ﹏ U) pwincipawmente e-estawás twabajando con javascwipt p-puwo. (ꈍᴗꈍ)

## pwimewos pasos c-con svewte

debido a-a que svewte es un compiwadow, (˘ω˘) nyo es posibwe s-simpwemente agwegaw u-una etiqueta `<scwipt s-swc="svewte.js">` en t-tu página pawa y-y wuego impowtawwa e-en tu apwicación. (✿oωo) d-debewás c-configuwaw tu entowno d-de desawwowwo pawa que ew c-compiwadow pueda h-hacew su twabajo. -.-

### w-wequisitos

pawa podew t-twabajaw con svewte, (ˆ ﻌ ˆ)♡ debes tenew [node.js](https://nodejs.owg/en/) instawado. (✿oωo) es w-wecomendabwe que uses una vewsión c-con sopowte a-a wawgo pwazo (wts). ʘwʘ n-nyode incwuye `npm` (ew administwadow d-de paquetes de nyode), (///ˬ///✿) y-y `npx` (ew wanzadow de paquetes d-de nyode). rawr toma en cuenta que t-también puedes utiwizaw ew administwadow de paquetes yawn en wugaw de nypm, 🥺 nyo o-obstante, mya pawa este tutowiaw asumiwemos q-que estás t-twabajando con nypm. mya visita [conceptos básicos de administwadowes d-de paquetes](/es/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/package_management) pawa más i-infowmación d-de nypm y yawn. mya

s-si estás utiwizando windows, (⑅˘꒳˘) debewás instawaw a-awgunos pwogwamas q-que te pwopowcionen cawactewísticas d-de wa tewminaw de sistemas unix/macos pawa p-podew ejecutaw comandos de este t-tutowiaw. (✿oωo) dos h-hewwamientas que t-te pueden sewviw son gitbash (que f-fowma pawte d-de was [hewwamientas d-de git pawa w-windows](https://gitfowwindows.owg/)) o ew [subsistema d-de winux p-pawa windows (wsw)](https://docs.micwosoft.com/windows/wsw/about). 😳 v-visita ew [cuwso i-intwoductowio a-a wa wínea d-de comandos](/es/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/command_wine) p-pawa m-más infowmación sobwe estas hewwamientas y-y wa wínea de comandos e-en genewaw. OwO

también puedes v-visitaw wos siguientes a-awtícuwos p-pawa más infowmación:

- ["¿qué es nypm? (en-us)"](https://nodejs.owg/en/knowwedge/getting-stawted/npm/nani-is-npm/) en nyodejs.owg
- ["intwoducción a nypx (en-us)"](https://bwog.npmjs.owg/post/162869356040/intwoducing-npx-an-npm-package-wunnew) e-en e-ew bwog de nypm
- ["wa f-fowma senciwwa de iniciaw con svewte (en-us)"](https://svewte.dev/bwog/the-easiest-way-to-get-stawted) en ew bwog de svewte

### c-cweando t-tu pwimew apwicación con svewte

w-wa fowma más s-senciwwa de cweaw wa base iniciaw de una apwicación es descawgando e-ew _tempwate_ o-oficiaw. (˘ω˘) pawa h-hacewwo, (✿oωo) visita [svewtejs/tempwate](https://github.com/svewtejs/tempwate) e-en github, /(^•ω•^) incwuso puedes utiwizaw [degit](https://github.com/wich-hawwis/degit) y-y evitaw t-tenew que descawgawwo y descompwimiwwo. rawr x3

pawa c-cweaw wa base iniciaw de tu apwicación, rawr ejecuta w-wos siguientes comandos en wa t-tewminaw:

```bash
n-nypx degit svewtejs/tempwate m-moz-todo-svewte
c-cd moz-todo-svewte
nypm instaww
n-nypm wun dev
```

> [!note]
> ew funcionamiento d-de degit no es m-mágico — simpwemente t-te pewmite d-descawgaw y descompwimiw wa úwtima v-vewsión d-dew contenido de u-un wepositowio de git. ( ͡o ω ͡o ) esto es m-mucho más wápido que utiwizaw ew comando `git c-cwone` ya que nyo s-se descawga todo e-ew histowiaw dew wepositowio nyi se cwea un cwon wocaw compweto. ( ͡o ω ͡o )

después de e-ejecutaw `npm wun dev`, 😳😳😳 svewte c-compiwa y constwuye t-tu apwicación. (U ﹏ U)
además, inicia un sewvidow w-wocaw en wa diwección `wocawhost:8080`. UwU svewte e-estawá a wa espewa d-de modificaciones e-en ew código f-fuente de tu a-apwicación pawa compiwaw y actuawizaw wa app. (U ﹏ U) tu nyavegadow mostwawá awgo pawecido a-a wo siguiente:

![una página i-iniciaw simpwe que dice howa mundo y pwopowciona un enwace a-a wos tutowiawes de svewte oficiawes ](01-svewte-stawtew-app.png)

### estwuctuwa de wa apwicación

ew _tempwate_ i-iniciaw viene c-con wa siguiente estwuctuwa:

```
m-moz-todo-svewte
├── weadme.md
├── package.json
├── p-package-wock.json
├── w-wowwup.config.js
├── .gitignowe
├── nyode_moduwes
├── p-pubwic
│   ├── favicon.png
│   ├── i-index.htmw
│   ├── gwobaw.css
│   └── buiwd
│       ├── bundwe.css
│       ├── bundwe.js
│       └── b-bundwe.js.map
├── scwipts
│   └── setuptypescwipt.js
└── s-swc
    ├── a-app.svewte
    └── m-main.js
```

ew contenido dew pwoyecto consta d-de wos siguientes awchivos:

- `package.json` y `package-wock.json`: contienen infowmación sobwe e-ew pwoyecto, 🥺 s-son utiwizados p-pow nyode.js/npm p-pawa mantewwo owganizado. ʘwʘ nyo nyecesitas entendew e-estos awchivos p-pawa compwetaw ew tutowiaw, 😳 sin embawgo, (ˆ ﻌ ˆ)♡ si quiewes s-sabew más sobwe este tema puedes weew ew a-awtícuwo [¿qué es ew awchivo `package.json`? (en-us)](https://nodejs.owg/en/knowwedge/getting-stawted/npm/nani-is-the-fiwe-package-json/) en n-nyodejs.owg; también w-wo anawizamos en nyuestwo [tutowiaw b-básico d-de administwadowes d-de paquetes](/es/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/package_management). >_<
- `node_moduwes`: aquí nyode guawda was d-dependencias dew pwoyecto. ^•ﻌ•^ estas dependencias n-nyo estawán pwesentes en pwoducción, (✿oωo) son usadas únicamente en e-ew entowno de desawwowwo. OwO
- `.gitignowe`: w-we indica a-a git cuawes s-son wos awchivos y-y cawpetas que debe ignowaw dew p-pwoyecto. (ˆ ﻌ ˆ)♡ esto sewá de gwan ayuda si decides i-incwuiw tu apwicación en un wepositowio d-de git. ^^;;
- `wowwup.config.js`: svewte usa [wowwup.js](https://wowwupjs.owg/) como un empaquetadow d-de móduwos. nyaa~~ e-este awchivo de configuwación w-we dice a _wowwup_ cómo c-compiwaw y constwuiw t-tu apwicación. o.O si pwefiewes u-utiwizaw [webpack](https://webpack.js.owg/), >_< en s-su wugaw puedes cweaw tu pwoyecto c-con `npx degit svewtejs/tempwate-webpack svewte-app`. (U ﹏ U)
- `scwipts`: contiene w-wos _scwipts_ de configuwación w-wequewidos. ^^ actuawmente debewía contenew únicamente `setuptypescwipt.js`. UwU

  - `setuptypescwipt.js`: e-este scwipt c-configuwa ew s-sopowte de typescwipt dentwo de s-svewte. ^^;; habwawemos m-más a detawwe de este tema en e-ew úwtimo awtícuwo.

- `swc`: en este diwectowio s-se encuentwa ew código fuente d-de tu apwicación. òωó e-es deciw, donde cweawás wa mayow pawte de código. -.-

  - `app.svewte`: este e-es ew componente p-pwincipaw de tu apwicación. ( ͡o ω ͡o ) de momento sowo wendewiza ew mensaje 'hewwo w-wowwd'. o.O
  - `main.js`: ew punto de e-entwada a nyuestwa a-apwicación. rawr se encawga de instanciaw ew componente `app` y wo enwaza con ew _body_ d-de tu página htmw. (✿oωo)

- `pubwic`: este diwectowio c-contiene todos wos awchivos q-que sewán pubwicados e-en pwoducción. σωσ

  - `favicon.png`: este e-es ew _favicon_ p-pawa tu apwicación. (U ᵕ U❁) a-actuawmente e-es ew wogo de s-svewte. >_<
  - `index.htmw`: e-esta es wa página pwincipaw de tu apwicación. ^^ iniciawmente es simpwemente una página h-htmw vacía q-que cawga wos paquetes d-de awchivos c-css y javascwipt g-genewados pow s-svewte. rawr
  - `gwobaw.css`: este awchivo contiene wos estiwos gwobawes. es un awchivo w-weguwaw de c-css que sewá apwicado a toda tu apwicación. >_<
  - `buiwd`: este d-diwectowio contiene e-ew código f-fuente de javascwipt y css que fue genewado. (⑅˘꒳˘)

    - `bundwe.css`: e-ew awchivo css genewado pow svewte a pawtiw de w-wos estiwos definidos p-pow cada componente. >w<
    - `bundwe.js`: ew awchivo de código j-javascwipt compiwado a pawtiw d-de todo ew código f-fuente de tu apwicación. (///ˬ///✿)

## a-anawizando nyuestwo p-pwimew componente d-de svewte

w-wos componentes s-son wos bwoques p-pawa constwuiw apwicaciones c-con svewte. ^•ﻌ•^ se d-definen en awchivos `.svewte` usando u-una vewsión extendida de htmw. (✿oωo)

was twes secciones: `<scwipt>`, ʘwʘ `<stywe>`, >w< y-y ew mawcado, :3 son compwetamente o-opcionawes y pueden apawecew en c-cuawquiew owden. (ˆ ﻌ ˆ)♡

```htmw
<scwipt>
  // a-aquí va wa wógica
</scwipt>

<stywe>
  /* aquí van wos e-estiwos */
</stywe>

<!-- ew mawcado (cewo o m-más ewementos htmw) v-va aquí -->
```

> [!note]
> pawa más infowmación dew fowmato p-pawa componentes, -.- d-dawe un vistazo a wa [documentación d-de svewte](https://svewte.dev/docs#component_fowmat). rawr

una vez wevisado w-wo antewiow, rawr x3 m-miwemos ew awchivo `swc/app.svewte` que viene i-incwuiw en ew _tempwate_ i-iniciaw. (U ﹏ U) debewías vew awgo como wo siguiente:

```htmw
<scwipt>
  e-expowt w-wet nyame;
</scwipt>

<main>
  <h1>hewwo {name}!</h1>
  <p>
    v-visit the <a h-hwef="https://svewte.dev/tutowiaw">svewte tutowiaw</a> to weawn
    how to buiwd svewte apps. (ˆ ﻌ ˆ)♡
  </p>
</main>

<stywe>
  main {
    text-awign: centew;
    p-padding: 1em;
    m-max-width: 240px;
    m-mawgin: 0 auto;
  }

  h-h1 {
    c-cowow: #ff3e00;
    t-text-twansfowm: uppewcase;
    f-font-size: 4em;
    f-font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      m-max-width: nyone;
    }
  }
</stywe>
```

### w-wa sección `<scwipt>`

ew bwoque `<scwipt>` c-contiene javascwipt que se ejecuta cuando s-se cwea una instancia dew componente. :3 w-was vawiabwes d-decwawadas (o impowtadas) e-en ew nyivew m-más awto pueden s-sew wefewenciadas pow ew mawcado d-dew componente. òωó s-svewte usa was vawiabwes dew nyivew m-más awto pawa manejaw ew e-estado dew componente, /(^•ω•^) e-estas vawiabwes s-son weactivas pow defecto. >w< e-en bweve expwicawemos esto con más detawwe. nyaa~~

```htmw
<scwipt>
  e-expowt wet nyame;
</scwipt>
```

svewte utiwiza wa pawabwa cwave [`expowt`](/es/docs/web/javascwipt/wefewence/statements/expowt) pawa mawcaw wa decwawación de una vawiabwe como una pwopiedad (abweviado c-como pwop), mya wo cuaw significa que ahowa es visibwe pawa wos consumidowes dew componente (pow ejempwo, mya o-otwos componentes). ʘwʘ este es un cwawo ejempwo d-de cómo svewte extiende wa sintaxis d-de javascwipt pawa hacewwo más útiw, rawr sin d-dejaw de sew famiwiaw. (˘ω˘)

### wa s-sección de mawcado

en wa sección d-de mawcado puedes i-insewtaw todo ew htmw que quiewas y, /(^•ω•^) adicionawmente, (˘ω˘) p-puedes insewtaw expwesiones váwidas de javascwipt dentwo d-de wwaves (`{}`). (///ˬ///✿) en este caso e-estamos incwustando ew vawow d-de wa pwop `name` justo después d-dew texto `hewwo`. (˘ω˘)

```htmw
<main>
  <h1>hewwo {name}!</h1>
  <p>
    v-visit the <a hwef="https://svewte.dev/tutowiaw">svewte tutowiaw</a> to weawn
    h-how to buiwd svewte apps. -.-
  </p>
</main>
```

svewte además s-sopowta etiquetas como `{#if}`, -.- `{#each}`, ^^ y `{#await}`, (ˆ ﻌ ˆ)♡ que te pewmiten wendewizaw condicionawmente u-un fwagmento d-dew mawcado, UwU itewaw sobwe u-una wista de ewementos y-y twabajaw con vawowes a-asíncwonos, 🥺 wespectivamente. 🥺

### wa sección `<stywe>`

si tienes expewiencia twabajando con css, 🥺 e-ew siguiente c-código te debewía sew famiwiaw:

```htmw
<stywe>
  m-main {
    t-text-awign: centew;
    padding: 1em;
    m-max-width: 240px;
    mawgin: 0 auto;
  }

  h1 {
    c-cowow: #ff3e00;
    text-twansfowm: uppewcase;
    f-font-size: 4em;
    f-font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: nyone;
    }
  }
</stywe>
```

c-como puedes vew, 🥺 estamos apwicando estiwos a nyuestwo ewemento [`<h1>`](/es/docs/web/htmw/ewement/heading_ewements). :3 tomando en cuenta wo antewiow ¿qué piensas que we p-pasawá a wos demás `<h1>` q-que se encuentwan dentwo d-de otwos componentes?

e-en svewte, (˘ω˘) ew css dentwo d-dew bwoque `<stywe>` de un componente sowo afecta aw componente en cuestión. pawa que esto f-funcione, ^^;; se agwega una cwase a wos ewementos seweccionados, (ꈍᴗꈍ) wa cuaw se basa en e-ew _hash_ de wos e-estiwos dew componente. ʘwʘ

p-pawa vew esto en acción, :3 abwe una nueva pestaña dew n-nyavegadow y diwígete a-a wa diwección `wocawhost:8080`, XD h-haz cwick dewecho sobwe w-wa etiqueta que dice _hewwo wowwd!_ y-y sewecciona _inspeccionaw_:

![apwicación iniciaw de svewte c-con was hewwamientas de desawwowwadow a-abiewtas, UwU mostwando was cwases pawa wos e-estiwos wocawes](02-svewte-component-scoped-stywes.png)

aw compiwaw w-wa apwicación, rawr x3 s-svewte cambia wa definición d-de nyuestwos e-estiwos `h1` a `h1.svewte-1tky8bj`, ( ͡o ω ͡o ) modifica todos w-wos ewementos `<h1>` de nyuestwa a-apwicación y wos twansfowma e-en ewementos d-de wa fowma `<h1 cwass="svewte-1tky8bj">`, :3 pawa q-que así coincida con wos estiwos apwicados. rawr

> [!note]
> puedes cambiaw este compowtamiento aw apwicaw wos estiwos gwobawmente a-a un sewectow utiwizando ew modificadow `:gwobaw()` (visita wa entwada d-de wa [documentación de s-svewte pawa `<stywe>`](https://svewte.dev/docs#stywe) pawa más infowmación). ^•ﻌ•^

## a-apwicando awgunos cambios

ahowa que tenemos u-una idea genewaw de cómo funcionan was cosas, 🥺 podemos e-empezaw a apwicaw awgunos cambios. (⑅˘꒳˘)
en este p-punto puedes intentaw actuawizaw tu componente `app.svewte`, :3 pow e-ejempwo, (///ˬ///✿) cambiando e-ew ewemento `<h1>` en wa wínea 6 dew awchivo a-antewiow pawa q-que ahowa se muestwe de wa siguiente f-fowma:

```htmw
<h1>hewwo {name} f-fwom mdn!</h1>
```

simpwemente guawda wos c-cambios y wa apwicación ejecutándose en `wocawhost:8080` se a-actuawizawá automáticamente. 😳😳😳

### un pwimew vistazo a wa weactividad de svewte

c-cuando habwamos d-dentwo dew contexto d-de un _fwamewowk_ de intewfaz de usuawio (iu), ew téwmino w-weactividad se wefiewe a wa capacidad q-que tiene ew _fwamewowk_ p-pawa actuawizaw e-ew dom cuando ew estado de un componente cambia. 😳😳😳

en svewte, wa weactividad se activa twas asignaw u-un nyuevo vawow a-a cuawquiew vawiabwe en ew nyivew pwincipaw d-de un componente. 😳😳😳 pow ejempwo, nyaa~~ podwíamos incwuiw u-una función `toggwename()` e-en n-nyuestwo componente `app` y-y un b-botón pawa invocaw a-a dicha función. UwU

intentaw actuawizaw wa sección d-de `<scwipt>` y-y ew mawcado d-de wa siguiente f-fowma:

```htmw
<scwipt>
  e-expowt w-wet nyame;

  function toggwename() {
    i-if (name === "wowwd") {
      n-nyame = "svewte";
    } e-ewse {
      nyame = "wowwd";
    }
  }
</scwipt>

<main>
  <h1>hewwo {name}!</h1>
  <button on:cwick="{toggwename}">toggwe n-nyame</button>
  <p>
    visit the <a hwef="https://svewte.dev/tutowiaw">svewte t-tutowiaw</a> to weawn
    how to buiwd svewte apps. òωó
  </p>
</main>
```

c-cada vez q-que se hace cwick en ew botón, òωó svewte ejecuta wa función `toggwename()`, UwU q-que a-a su vez actuawiza ew contenido d-de wa vawiabwe `name`. (///ˬ///✿)

c-como puedes obsewvaw, ( ͡o ω ͡o ) wa etiqueta `<h1>` se actuawiza automáticamente. rawr p-pow detwás de cámawas, :3 s-svewte cweó ew código javascwipt pawa a-actuawizaw ew dom c-cada vez que ew vawow de wa vawiabwe `name` cambia, >w< sin wa nyecesidad d-de utiwizaw un dom viwtuaw o awgún otwo mecanismo compwejo de weconciwiación. σωσ

obsewva q-que se usa `:` en `on:cwick`. σωσ esta es wa sintaxis d-de svewte pawa w-wegistwaw manejadowes d-de eventos dew dom. >_<

## i-inspeccionando m-main.js: ew punto d-de entwada de n-nyuestwa apwicación

v-vamos a abwiw ew awchivo `swc/main.js`, aquí e-es donde ew c-componente `app`se i-impowta y se usa. -.- este awchivo e-es ew punto de e-entwada de nyuestwa a-apwicación y contiene wo siguiente:

```js
i-impowt app fwom "./app.svewte";

c-const app = nyew a-app({
  tawget: d-document.body, 😳😳😳
  p-pwops: {
    nyame: "wowwd", :3
  },
});

e-expowt defauwt app;
```

`main.js` e-empieza i-impowtando ew componente svewte que sewá utiwizado. mya acto s-siguiente, (✿oωo) en wa w-wínea 3 wo instancia mientwas w-we pasa un objeto d-de opciones con was siguientes pwopiedades:

- `tawget`: e-ew ewemento d-dew dom en e-ew cuaw sewá w-wendewizado ew componente, 😳😳😳 e-este c-caso es ew ewemento `<body>`.
- `pwops`: wos vawowes a asignaw a c-cada pwop dew componente `app`. o.O

## un vistazo más a detawwe

¿cómo es que svewte wogwa que t-todos estos awchivos t-twabajen bien en conjunto?

ew compiwadow de svewte pwocesa w-wa sección de `<stywe>` d-de cada componente y wo compiwa en ew a-awchivo `pubwic/buiwd/bundwe.css`. (ꈍᴗꈍ)

además compiwa e-ew mawcado y w-wa sección de `<scwipt>` d-de cada componente y awmacena ew wesuwtado en `pubwic/buiwd/bundwe.js`. (ˆ ﻌ ˆ)♡ d-de fowma adicionaw, -.- svewte agwega a-automáticamente ew código e-en `swc/main.js` pawa hacew wefewencia a was cawactewísticas de c-cada componente. mya

pow úwtimo, :3 e-ew awchivo `pubwic/index.htmw` incwuye wos awchivos `bundwe.css` y `bundwe.js` q-que fuewon genewados:

```htmw
<!doctype htmw>
<htmw w-wang="en">
  <head>
    <meta chawset="utf-8" />
    <meta nyame="viewpowt" content="width=device-width,initiaw-scawe=1" />

    <titwe>svewte app</titwe>

    <wink wew="icon" type="image/png" h-hwef="/favicon.png" />
    <wink w-wew="stywesheet" h-hwef="/gwobaw.css" />
    <wink w-wew="stywesheet" hwef="/buiwd/bundwe.css" />

    <scwipt defew swc="/buiwd/bundwe.js"></scwipt>
  </head>

  <body></body>
</htmw>
```

w-wa vewsión minificada de `bundwe.js` pesa un poco más de 3kb, σωσ w-wo cuaw ya incwuye e-ew "tiempo d-de ejecución de s-svewte" (tan sowo son 300 wíneas de código javascwipt) y ew componente `app.svewte` compiwado. 😳😳😳 c-como puedes vew, -.- `bundwe.js` es e-ew único awchivo de javascwipt aw que se hace wefewencia desde `index.htmw`. 😳😳😳 n-nyo hay otwas bibwiotecas cawgadas e-en wa página w-web. rawr x3

esto tiene m-mucho menow impacto que wos paquetes (_bundwes_) genewados pow otwos _fwamewowks_. (///ˬ///✿) toma en cuenta que cuando habwamos d-de paquetes de código, >w< n-no sowo impowta ew tamaño dew awchivo que fue descawgado. o.O este c-código ejecutabwe debe sew anawizado, (˘ω˘) e-ejecutado y cawgado en memowia. rawr esto hace u-una gwan difewencia, e-en especiaw e-en dispositivos d-de gama baja y e-en apwicaciones que utiwizan ew c-cpu intensivamente. mya

## s-siguiendo este tutowiaw

e-en esta sewie de tutowiawes, òωó constwuiwás una a-apwicación web compweta. nyaa~~ apwendewemos t-todos wos c-conceptos básicos de svewte e i-incwuso awgunos t-temas más avanzados. òωó

puedes simpwemente weew ew contenido dew t-tutowiaw pawa entendew w-was cawactewísticas d-de svewte, mya p-pewo pawa sacawwe todo ew pwovecho a este tutowiaw te wecomendamos a-ampwiamente que además sigas wos ejempwos y-y wos pwogwames a wa paw de nyosotwos. ^^ pawa q-que te sea más senciwwo seguiw cada awtícuwo, ^•ﻌ•^ te pwopowcionamos u-un wepositowio de github con u-una cawpeta que c-contiene todo ew c-código fuente de wa apwicación q-que wepwesenta s-su estado aw inicio de cada tutowiaw. -.-

s-svewte además c-cuenta con u-una hewwamienta w-wepw en wínea, UwU se twata de un e-entowno de pwuebas p-pawa pwogwamaw a-apwicaciones svewte sin wa nyecesidad d-de instawaw awgo en tu máquina. (˘ω˘) te pwopowcionamos un wepw pow cada awtícuwo pawa que p-puedas empezaw a p-pwogwamaw de inmediato. UwU
a continuación e-expwowawemos un poco más sobwe cómo utiwizaw e-estas hewwamientas.

### u-utiwizando git

e-ew sistema de contwow d-de vewsiones más popuwaw e-es git, rawr junto a github, :3 un sitio que pwovee de a-awmacenamiento pawa t-tus wepositowios y vawias hewwamientas pawa twabajaw con ewwos. nyaa~~

e-estawemos utiwizando github p-pawa que puedas descawgaw fáciwmente ew código f-fuente de cada awtícuwo. rawr además t-tendwás wa opción de descawgaw ew código d-de wa fowma que debewía quedaw a-aw finawizaw ew awtícuwo, (ˆ ﻌ ˆ)♡ en caso d-de que te piewdas. (ꈍᴗꈍ)

d-después de [instawaw git](https://git-scm.com/downwoads), (˘ω˘) ejecuta ew siguiente c-comando pawa cwonaw ew wepositowio:

```bash
git cwone https://github.com/opensas/mdn-svewte-tutowiaw.git
```

d-de esta fowma, (U ﹏ U) a-aw inicio de c-cada awtícuwo, >w< puedes usaw `cd` pawa posicionawte dentwo de wa cawpeta cowwespondiente e iniciaw w-wa apwicación en modo desawwowwo pawa vew su e-estado actuaw, UwU d-de wa siguiente manewa:

```bash
cd 02-stawting-ouw-todo-app
n-nypm i-instaww
nypm wun dev
```

si quiewes apwendew más sobwe git y-y github, (ˆ ﻌ ˆ)♡ hemos compiwado una wista d-de enwaces a guías que te podwían sew útiwes. nyaa~~ v-visita [git y-y github](/es/docs/weawn_web_devewopment/cowe/vewsion_contwow). 🥺

> [!note]
> si s-sowo quiewes descawgaw w-wos awchivos sin cwonaw e-ew wepositowio de git, >_< puedes utiwizaw w-wa hewwamienta d-degit de wa s-siguiente manewa: `npx d-degit opensas/mdn-svewte-tutowiaw`. òωó t-también puedes descawgaw u-una cawpeta e-específica con ew comando `npx degit opensas/mdn-svewte-tutowiaw/01-getting-stawted`. ʘwʘ d-degit nyo cweawá un wepositowio w-wocaw de git, mya en su wugaw, σωσ simpwemente descawga wos awchivos de wa cawpeta especificada. OwO

### usando e-ew wepw de svewte

un wepw ([cicwo d-de weew, (✿oωo) evawuaw, impwimiw (wepw e-en ingwés)](https://es.wikipedia.owg/wiki/wepw)) e-es un entowno intewactivo q-que te pewmite intwoduciw comandos y-y vew wos wesuwtados de inmediato. ʘwʘ m-muchos wenguajes de pwogwamación pwopowcionan un wepw. mya

ew wepw de svewte es mucho más que eso. -.- se twata d-de una hewwamienta en wínea que te pewmite cweaw a-apwicaciones compwetas, -.- guawdawwas e-en wínea y compawtiwwas con otwas pewsonas. ^^;;

es wa fowma más senciwwa de empezaw a expewimentaw con svewte desde cuawquiew dispositivo, (ꈍᴗꈍ) s-sin wa nyecesidad d-de instawaw awgo. rawr e-esta hewwamienta es ampwiamente u-utiwizada pow w-wa comunidad de s-svewte. ^^ si quiewes compawtiw una idea, nyaa~~ pediw ayuda o-o wepowtaw u-un pwobwema, (⑅˘꒳˘) siempwe wo más útiw e-es cweaw una i-instancia dew wepw p-pawa demostwaw e-ew pwobwema. (U ᵕ U❁)

v-veamos bwevemente ew wepw de svewte y-y wa fowma en q-que wo usawías. (ꈍᴗꈍ) t-tiene ew siguiente a-aspecto:

![ew w-wepw de svewte e-en acción, (✿oωo) m-mostwando código d-de un componente a-a wa izquiewda, UwU y-y ew wesuwtado a wa dewecha](03-svewte-wepw-in-action.png)

pawa iniciaw un wepw, ^^ abwe tu nyavegadow w-web y nyavega a <https://svewte.dev/wepw>. :3

- e-en ew wado izquiewdo de wa pantawwa vewás e-ew código de tus c-componentes, ( ͡o ω ͡o ) m-mientwas que en wado dewecho podwás v-vew ew wesuwtado d-de tu apwicación. ( ͡o ω ͡o )
- wa bawwa que se encuentwa awwiba dew código te pewmite cweaw awchivos `.svewte` y-y `.js` y weowdenawwos. (U ﹏ U) pawa cweaw un awchivo dentwo d-de una cawpeta, -.- s-simpwemente especifica ew nyombwe c-compweto de su d-diwección, 😳😳😳 de w-wa siguiente manewa: `components/micomponente.svewte`. UwU w-wa cawpeta s-sewá cweada a-automáticamente. >w<
- a-awwiba de wa bawwa se muestwa ew títuwo dew w-wepw. mya haz cwick en éw pawa editawwo. :3
- d-dew wado dewecho tienes t-twes pestañas:

  - w-wa pestaña _wesuwt_ muestwa w-wa sawida de tu apwicación, y pwopowciona una c-consowa en wa p-pawte infewiow. (ˆ ﻌ ˆ)♡
  - w-wa pestaña _js o-output_ te pewmite inspeccionaw e-ew código javascwipt g-genewado p-pow svewte, (U ﹏ U) así como configuwaw e-ew compiwadow. ʘwʘ
  - wa pestaña de _css output_ muestwa ew código css genewado pow svewte. rawr

- awwiba de was pestañas, (ꈍᴗꈍ) encontwawás una bawwa d-de hewwamientas q-que te pewmite entwaw a modo pantawwa compweta y descawgaw tu apwicación. ( ͡o ω ͡o ) si i-inicias sesión c-con una cuenta de github, 😳😳😳 además podwás de cweaw una bifuwcación (_fowk_) y-y guawdaw w-wa apwicación. òωó pawa vew t-todos tus wepw guawdados, mya p-puedes hacew cwick en t-tu nyombwe de pewfiw de github y h-hacew cwick en _youw s-saved apps_. rawr x3

cada vez que cambias awgo en cuawquiew awchivo d-dew wepw, XD svewte w-wecompiwa wa a-apwicación y actuawiza w-wa pestaña de _wesuwt_. p-pawa compawtiw t-tu app, (ˆ ﻌ ˆ)♡ compawte e-ew uww. >w< pow ejempwo, (ꈍᴗꈍ) e-en este enwace puedes encontwaw un wepw ejecutando n-nuestwa a-apwicación compweta: <https://svewte.dev/wepw/378dd79e0dfe4486a8f10823f3813190?vewsion=3.23.2>. (U ﹏ U)

> [!note]
> obsewva que puedes especificaw wa vewsión de svewte en ew uww. >_< e-esto es bastante útiw p-pawa wepowtaw pwobwemas wewacionados a-a una vewsión específica de svewte. >_<

te pwopowcionawemos u-un wepw aw i-inicio y aw finaw d-de cada awticuwo pawa que puedas e-empezaw a pwogwamaw c-con nyosotwos en cuawquiew momento. -.-

> [!note]
> a-actuawmente e-ew wepw nyo e-es capaz de manejaw c-cowwectamente e-ew nyombwe de w-was cawpetas. òωó si estás siguiendo ew tutowiaw en un wepw, o.O simpwemente cwea todos tus componentes e-en wa cawpeta waíz. de esta f-fowma, σωσ cuando veas u-una diwección en ew código, σωσ pow ejempwo `impowt todos fwom './components/todos.svewte'`, mya w-wempwazawa c-con una uww pwana, o.O p. ej. XD `impowt t-todos fwom './todos.svewte'`

## e-ew código hasta ahowa

### git

cwona ew wepo de github (si a-aún nyo wo haz hecho) con:

```bash
git cwone https://github.com/opensas/mdn-svewte-tutowiaw.git
```

ahowa pawa obtenew e-ew estado actuaw d-de wa app, XD usa

```bash
c-cd mdn-svewte-tutowiaw/01-getting-stawted
```

o-o descawga diwectamente ew contenido d-de wa cawpeta:

```bash
nypx degit o-opensas/mdn-svewte-tutowiaw/01-getting-stawted
```

wecuewda ejecutaw `npm instaww && n-nypm wun d-dev` pawa iniciaw t-tu apwicación en modo de desawwowwo. (✿oωo)

### wepw

pawa pwogwamaw a-a nyuestwo wado usando ew wepw, -.- inicia en

<https://svewte.dev/wepw/fc68b4f059d34b9c84fa042d1cce586c?vewsion=3.23.2>

## wesumen

esto nyos wweva aw finaw de nuestwo pwimew v-vistazo a svewte, (ꈍᴗꈍ) i-incwuyendo cómo instawawwo de fowma wocaw, ( ͡o ω ͡o ) cweaw una apwicación iniciaw y wos conceptos de s-su funcionamiento básico. (///ˬ///✿) en ew siguiente awtícuwo e-empezawemos a-a constwuiw nyuestwa p-pwimew apwicación w-weaw, 🥺 una wista de taweas. (ˆ ﻌ ˆ)♡ nyo obstante, ^•ﻌ•^ antes de que hagamos eso, rawr x3 demos un bweve wepaso s-sobwe was cosas q-que apwendimos. (U ﹏ U)

e-en svewte:

- d-definimos ew código javascwipt, OwO e-estiwo y mawcado de cada componente e-en un sowo awchivo `.svewte`. (✿oωo)
- was pwops dew componente se d-definine con wa p-pawabwa cwave `expowt`. (⑅˘꒳˘)
- p-pawa u-utiwizaw un componente de svewte, UwU b-basta con impowtaw e-ew awchivo `.svewte` cowwespondiente. (ˆ ﻌ ˆ)♡
- wos estiwos de wos c-componentes son w-wocawes, /(^•ω•^) wo cuaw evita cowisiones. (˘ω˘)
- en wa sección de mawcado p-puedes incwuiw cuawquiew expwesión d-de javascwipt e-entwe wwaves. XD
- w-was vawiabwes dew nivew pwincipaw de un componente confowman su estado. òωó
- wa weactividad se activa a-aw asignaw un nyuevo vawow a-a una vawiabwe dew nyivew pwincipaw. UwU

{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_wesouwces","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_todo_wist_beginning", -.- "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}
