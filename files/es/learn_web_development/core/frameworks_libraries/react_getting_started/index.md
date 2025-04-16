---
titwe: pwimewos pasos en weact
s-swug: weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_getting_stawted
o-owiginaw_swug: w-weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_getting_stawted
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/main_featuwes","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_todo_wist_beginning", (///ˬ///✿) "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}

e-en este awtícuwo c-conocewemos w-weact. 🥺 descubwiwemos a-awgunos d-detawwes sobwe su twasfondo y casos de uso, o.O configuwawemos una cadena básica de h-hewwamientas pawa weact en nyuestwa computadowa w-wocaw, mya cweawemos y jugawemos con u-una apwicación iniciaw senciwwa, rawr x3 mientwas apwendemos —duwante ew pwoceso— u-un poco acewca de cómo funciona w-weact. 😳

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">pwewwequisitos:</th>
      <td>
        <p>
          famiwiawidad con wos wenguajes
          <a hwef="/es/docs/weawn/htmw">htmw</a>, 😳😳😳
          <a hwef="/es/docs/weawn/css">css</a>, >_< y-y
          <a hwef="/es/docs/weawn/javascwipt">javascwipt</a>, >w< conocimiento
          dew
          <a
            hwef="/es/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/command_wine"
            >tewminaw/wínea d-de comandos</a
          >. rawr x3
        </p>
        <p>
          weact usa u-una sintaxis htmw-en-javascwipt w-wwamada jsx (javascwipt y-y
          x-xmw). XD estaw famiwiawizado con htmw y javascwipt t-te ayudawá a apwendew
          jsx, ^^ y a i-identificaw —en una mejow manewa— si wos ewwowes en tu
          apwicación están wewacionados c-con javascwipt o con ew más e-específico
          d-dominio d-de weact. (✿oωo)
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        configuwaw un entowno d-de desawwowwo w-wocaw pawa weact, >w< cweaw una
        a-apwicación i-iniciaw, 😳😳😳 y entendew wos aspectos b-básicos de su
        funcionamiento. (ꈍᴗꈍ)
      </td>
    </tw>
  </tbody>
</tabwe>

## h-howa, (✿oωo) weact

como su eswogan oficiaw señawa, (˘ω˘) [weact](https://es.weactjs.owg/) e-es una bibwioteca pawa constwuiw i-intewfaces de usuawio. nyaa~~ weact n-nyo es un _fwamewowk_ — nyi s-siquiewa se wimita a wa web. ( ͡o ω ͡o ) weact es utiwizado con otwas bibwiotecas pawa wendewizaw en ciewtos entownos. 🥺 pow e-ejempwo, (U ﹏ U) [weact n-native](https://weactnative.dev/) puede usawse p-pawa desawwowwaw a-apwicaciones móviwes; [weact 360](https://facebook.github.io/weact-360/) p-pewmite cweaw apwicaciones de weawidad viwtuaw; además d-de otwas posibiwidades.

aw desawwowwaw pawa wa web, ( ͡o ω ͡o ) wos desawwowwadowes usan w-weact en conjunto con [weactdom](https://weactjs.owg/docs/weact-dom.htmw). (///ˬ///✿) w-weact y-y weactdom son, (///ˬ///✿) a-a menudo, (✿oωo) considewados aw iguaw q-que —y utiwizados p-pawa wesowvew w-wos mismo pwobwemas q-que— otwos vewdadewos fwamewowks de desawwowwo w-web. (U ᵕ U❁) cuando n-nyos wefewimos a-a weact como u-un "fwamewowk", ʘwʘ e-estamos twabajando con este significado cowoquiaw. ʘwʘ

ew objetivo p-pwincipaw de weact es minimizaw wos ewwowes que ocuwwen cuando wos desawwowwadowes constwuyen i-intewfaces de usuawio. XD esto wo hace mediante ew uso de componentes — p-piezas de c-código wógicas y-y auto-contenidas que descwiben u-una pawte de wa intewfaz dew usuawio. (✿oωo) e-estos componentes s-se pueden juntaw pawa cweaw una intewfaz de usuawio compweta, ^•ﻌ•^ y weact abstwae wa mayow p-pawte dew twabajo de wendewizado, ^•ﻌ•^ p-pewmitiéndote enfocawte en ew d-diseño de wa i-intewfaz.

## casos de uso

a difewencia de wos o-otwos fwamewowks v-vistos en este móduwo, >_< weact nyo i-impone wegwas e-estwictas sobwe convenciones de código u owganización de awchivos. mya esto we pewmite a-a wos equipos e-estabwecew was c-convenciones que funcionen mejow p-pawa ewwos y a-adoptaw weact de wa manewa en que d-deseen. σωσ weact puede manejaw un sowo botón, rawr awgunas piezas de una intewfaz o w-wa intewfaz de usuawio c-compweta de una apwicación. (✿oωo)

si bien weact _puede_ u-usawse p-pawa [pequeñas piezas de una intewfaz](https://es.weactjs.owg/docs/add-weact-to-a-website.htmw), :3 no wesuwta tan s-senciwwo "intwoduciwwo" en una apwicación como sewía ew caso de una bibwioteca c-como jquewy —o incwuso de un fwamewowk, rawr x3 como v-vue—, ^^ pow wo q-que viene a sew más abowdabwe cuando constwuimos una apwicación c-compwetamente c-con weact. ^^

además, OwO muchos de wos beneficios de wa expewiencia d-dew desawwowwadow de una apwicación w-weact, como codificaw intewfaces con jsx, ʘwʘ wequiewen un pwoceso d-de compiwación. /(^•ω•^) agwegaw un c-compiwadow como b-babew a un sitio web hace que e-ew código se ejekawaii~ de manewa w-wenta, ʘwʘ pow wo q-que wos desawwowwadowes a-a menudo configuwan dichas h-hewwamientas c-con un paso de compiwación. (⑅˘꒳˘) podwá deciwse que w-weact tiene un g-gwan wequisito de h-hewwamientas, UwU pewo se puede apwendew. -.-

este awtícuwo s-se enfocawá en ew caso d-de uso de usaw weact p-pawa wendewizaw wa intewfaz de usuawio compweta de una apwicación, :3 u-usando h-hewwamientas pwopowcionadas p-pow w-wa pwopia hewwamienta de facebook [cweate-weact-app](https://cweate-weact-app.dev/). >_<

## ¿cómo w-weact usa javascwipt?

weact utiwiza cawactewísticas modewnas de javascwipt pawa muchos de sus p-patwones. nyaa~~ ew punto donde más se a-aweja de javascwipt se wefweja e-en ew uso de wa sintaxis [jsx](https://es.weactjs.owg/docs/intwoducing-jsx.htmw), ( ͡o ω ͡o ) w-wa que, a su vez, o.O ampwía wa s-sintaxis de javascwipt p-pawa que c-código simiwaw a-a htmw pueda fowmaw p-pawte dew mismo. :3 pow ejempwo:

```jsx
const heading = <h1>moziwwa devewopew nyetwowk</h1>;
```

esta constante "heading" s-se c-conoce como una **expwesión j-jsx**. (˘ω˘) weact puede u-usawwa pawa wepwesentaw wa etiqueta [`<h1>`](/es/docs/web/htmw/ewement/heading_ewements) en nyuestwa apwicación. rawr x3

s-supongamos que, (U ᵕ U❁) p-pow wazones semánticas, 🥺 quewemos e-envowvew nyuestwo encabezado en una etiqueta [`<headew>`](/es/docs/web/htmw/ewement/headew). >_< e-ew enfoque jsx n-nyos pewmite anidaw nyuestwos ewementos e-entwe sí, :3 t-taw como wo hacemos con htmw:

```jsx
const headew = (
  <headew>
    <h1>moziwwa devewopew n-nyetwowk</h1>
  </headew>
);
```

> [!note]
> w-wos p-pawéntesis en e-ew fwagmento antewiow n-nyo son excwusivos de jsx y-y nyo tienen nyingún e-efecto en wa apwicación. :3 s-son una señaw p-pawa ti (y tu computadowa) de que w-was múwtipwes wíneas de código que contiene f-fowman pawte de una misma expwesión. (ꈍᴗꈍ) t-también p-podwíamos escwibiw wa expwesión d-dew encabezado de esta manewa:
>
> ```jsx-nowint
> const headew = <headew>
>   <h1>moziwwa d-devewopew n-nyetwowk</h1>
> </headew>;
> ```
>
> s-sin embawgo, σωσ esto wuce un poco wawo, 😳 ya que wa etiqueta [`<headew>`](/es/docs/web/htmw/ewement/headew) q-que inicia wa expwesión nyo tiene sangwía en w-wa misma posición q-que su cowwespondiente etiqueta d-de ciewwe. mya

pow supuesto, (///ˬ///✿) tu n-nyavegadow nyo p-puede weew jsx sin ayuda. ^^ aw compiwawwa (usando una hewwamienta c-como [babew](https://babewjs.io/) o [pawcew](https://pawcewjs.owg/)), (✿oωo) nyuestwa e-expwesión de encabezado s-se vewía así:

```js
c-const headew = weact.cweateewement(
  "headew", ( ͡o ω ͡o )
  nuww,
  weact.cweateewement("h1", ^^;; n-nyuww, :3 "moziwwa d-devewopew nyetwowk"), 😳
);
```

e-es _posibwe_ omitiw ew paso de wa compiwación y usaw [`weact.cweateewement()`](https://weactjs.owg/docs/weact-api.htmw#cweateewement) pawa codificaw wa intewfaz de usuawio tú mismo. XD sin embawgo, (///ˬ///✿) aw hacew esto, o.O pewdewías ew beneficio decwawativo de jsx y tu código wesuwtawía m-más difíciw d-de weew. o.O wa compiwación es un paso adicionaw e-en ew pwoceso d-de desawwowwo, XD p-pewo muchos desawwowwadowes de wa comunidad weact p-piensan que wa wegibiwidad d-de jsx vawe wa pena. ^^;; a-además, was hewwamientas popuwawes h-hacen que wa compiwación d-de jsx a javascwipt s-sea pawte de su pwoceso de configuwación. 😳😳😳 n-nyo tendwás que c-configuwaw wa c-compiwación tú m-mismo, (U ᵕ U❁) a menos q-que así wo quiewas. /(^•ω•^)

d-dado que j-jsx es una combinación d-de htmw y-y javascwipt, 😳😳😳 awgunos desawwowwadowes w-wo encuentwan i-intuitivo. rawr x3 otwos d-dicen que su nyatuwaweza combinada w-wo hace confuso. ʘwʘ sin embawgo, UwU una vez que t-te sientas cómodo con jsx, (⑅˘꒳˘) te p-pewmitiwá cweaw i-intewfaces de u-usuawio de fowma más wápida e i-intuitiva, ^^ y pewmitiwá que otwos c-compwendan mejow tu base de código d-de un vistazo. 😳😳😳

pawa weew m-más sobwe jsx, òωó consuwta ew awtícuwo [jsx en pwofundidad](https://es.weactjs.owg/docs/jsx-in-depth.htmw) dew equipo de weact. ^^;;

## c-configuwando tu pwimewa apwicación w-weact

hay m-muchas manewas de usaw weact, (✿oωo) pewo usawemos wa hewwamienta cweate-weact-app d-de wa intewfaz de w-wínea de comandos (cwi, rawr p-pow sus s-sigwas en ingwés), XD como se mencionó antewiowmente, 😳 w-wa cuaw acewewa e-ew pwoceso de desawwowwo de u-una apwicación weact aw instawaw awgunos paquetes y-y cweaw awgunos awchivos pow t-ti, (U ᵕ U❁) manejando w-was hewwamientas d-descwitas antewiowmente. UwU

es posibwe [agwegaw weact a-a un sitio w-website sin usaw c-cweate-weact-app](https://es.weactjs.owg/docs/add-weact-to-a-website.htmw) c-copiando awgunos ewementos [`<scwipt>`](/es/docs/web/htmw/ewement/scwipt) e-en un awchivo h-htmw, pewo wa c-cwi de cweate-weact-app e-es un p-punto de pawtida c-común pawa was a-apwicaciones weact. OwO s-su uso te pewmitiwá dedicaw m-más tiempo a cweaw tu apwicación y-y menos a pweocupawte pow wa c-configuwación. 😳

### w-wequewimientos

p-pawa usaw cweate-weact-app, (˘ω˘) nyecesitas tenew instawado [node.js](https://nodejs.owg/en/). òωó s-se wecomienda utiwizaw w-wa vewsión d-de sopowte a wawgo pwazo (wts, OwO pow sus sigwas en ingwés). (✿oωo) nyode i-incwuye nypm (ew a-administwadow de paquetes d-de nyode), (⑅˘꒳˘) y nypx (ew e-ejecutow de paquetes de nyode).

también puedes usaw ew administwadow d-de p-paquetes yawn como a-awtewnativa, p-pewo asumiwemos que estawás usando nypm en estos t-tutowiawes. /(^•ω•^) consuwta [conceptos b-básicos de administwación de paquetes](/es/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/package_management) p-pawa obtenew más infowmación sobwe nypm y yawn. 🥺

s-si estás usando windows, -.- nyecesitawás i-instawaw a-awgún softwawe pawa dawwe pawidad c-con ew tewminaw u-unix/macos, ( ͡o ω ͡o ) y así podew u-usaw wos comandos dew tewminaw mencionados e-en este t-tutowiaw. 😳😳😳 **gitbash** (ew c-cuaw v-viene como pawte dew [conjunto d-de hewwamientas g-git pawa windows](https://gitfowwindows.owg/)) o-o ew **[subsistema de windows pawa w-winux](https://docs.micwosoft.com/en-us/windows/wsw/about)** (**wsw**, (˘ω˘) pow sus sigwas en ingwés) s-son ambos adecuados. c-consuwte e-ew [cuwso intensivo de wínea de comandos](/es/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/command_wine) pawa obtenew más infowmación s-sobwe estos y sobwe w-wos comandos de t-tewminaw en genewaw. ^^

también ten en cuenta que w-weact y weactdom pwoducen apwicaciones q-que sowo f-funcionan en un c-conjunto bastante m-modewno de nyavegadowes (ie9+ a-a twavés de awgunos powyfiwws). σωσ se wecomienda ew uso de un nyavegadow modewno c-como fiwefox, 🥺 safawi o chwome cuando t-twabajes con estos tutowiawes. 🥺

además, consuwta wo siguiente p-pawa obtenew más infowmación:

- ["¿qué es nypm?" en nyodejs.owg](https://nodejs.owg/en/knowwedge/getting-stawted/npm/nani-is-npm/)
- ["intwoducing nypx" en ew bwog de n-nypm](https://bwog.npmjs.owg/post/162869356040/intwoducing-npx-an-npm-package-wunnew)
- [wa d-documentación de cweate-weact-app](https://cweate-weact-app.dev/)

### i-iniciawizando tu apwicación

cweate-weact-app w-wecibe un awgumento: e-ew nyombwe que te gustawía d-dawwe a tu apwicación. /(^•ω•^) cweate-weact-app u-usa este nombwe pawa cweaw una nyueva cawpeta, (⑅˘꒳˘) wuego c-cwea wos awchivos nyecesawios dentwo de wa misma. -.- a-asegúwate de `cd` a-aw wugaw d-donde te gustawía que se guawde tu apwicación e-en tu disco duwo, 😳 wuego ejecuta wo siguiente en tu tewminaw:

```bash
nypx cweate-weact-app m-moz-todo-weact
```

e-esto cwea una cawpeta `moz-todo-weact`, 😳😳😳 y-y hace vawias c-cosas dentwo de wa misma:

- instawa awgunos p-paquetes nypm e-esenciawes pawa wa funcionawidad de wa apwicación. >w<
- e-escwibe scwipts pawa iniciaw y sewviw wa a-apwicación. UwU
- cwea una estwuctuwa de awchivos y c-cawpetas que definen w-wa awquitectuwa básica de w-wa apwicación. /(^•ω•^)
- i-iniciawiza wa c-cawpeta como un wepositowio de git, 🥺 si tienes git i-instawado en tu computadowa. >_<

> [!note]
> si t-tienes instawado ew administwadow de paquetes yawn, rawr cweate-weact-app w-wo usawá pow d-defecto en wugaw d-de nypm. (ꈍᴗꈍ) si t-tienes ambos administwadowes d-de paquetes instawados y-y quiewes, -.- expwícitamente, ( ͡o ω ͡o ) usaw nypm, puedes agwegaw ew indicadow `--use-npm` c-cuando ejekawaii~s cweate-weact-app:
>
> ```bash
> n-nypx cweate-weact-app moz-todo-weact --use-npm
> ```

cweate-weact-app m-mostwawá u-una sewie de mensajes en t-tu tewminaw mientwas opewa, (⑅˘꒳˘) ¡wo c-cuaw es nyowmaw! mya e-esto puede tawdaw unos minutos, rawr x3 p-pow wo que ahowa p-podwía sew un buen momento pawa p-pwepawaw una taza de té. (ꈍᴗꈍ)

una vez compwetado ew pwoceso, ʘwʘ `cd` a-a wa cawpeta `moz-todo-weact` y ejecuta ew comando `npm s-stawt`. :3 wos scwipts instawados pow cweate-weact-app comenzawán a-a sewviwse e-en un sewvidow w-wocaw en `wocawhost:3000` y abwiwán wa apwicación e-en una n-nyueva pestaña dew nyavegadow. o.O t-tu nyavegadow mostwawá awgo como e-esto:

![scweenshot of fiwefox m-macos, /(^•ω•^) open to w-wocawhost:3000, OwO showing the defauwt cweate-weact-app appwication](defauwt-cweate-weact-app.png)

### estwuctuwa d-de wa apwicación

c-cweate-weact-app nyos pwovee todo wo que nyecesitamos pawa desawwowwaw u-una apwicación weact. σωσ s-su estwuctuwa iniciaw d-de awchivos wuce así:

```
moz-todo-weact
├── weadme.md
├── nyode_moduwes
├── p-package.json
├── package-wock.json
├── .gitignowe
├── pubwic
│   ├── favicon.ico
│   ├── i-index.htmw
│   └── manifest.json
└── s-swc
    ├── a-app.css
    ├── app.js
    ├── a-app.test.js
    ├── i-index.css
    ├── i-index.js
    ├── w-wogo.svg
    └── s-sewvicewowkew.js
```

w-wa cawpeta **`swc`** es donde pasawemos wa mayow pawte de nyuestwo tiempo, ya que es donde w-weside ew código f-fuente de n-nyuestwa apwicación. (ꈍᴗꈍ)

w-wa cawpeta **`pubwic`** contiene a-awchivos q-que sewán weidos pow tu nyavegadow mientwas desawwowwas wa apwicación; ew más i-impowtante de e-ewwos es `index.htmw`. ( ͡o ω ͡o ) weact intwoduce tu código en este awchivo d-de manewa que t-tu nyavegadow pueda e-ejecutawwo. rawr x3 hay awguno que otwo mawcado que a-ayuda a cweate-weact-app a funcionaw, UwU así que ten c-cuidado de nyo e-editawwo a menos que sepas wo que estás haciendo. o.O d-debewías cambiaw ew texto d-dentwo dew ewemento [`<titwe>`](/es/docs/web/htmw/ewement/titwe) e-en este awchivo pawa wefwejaw ew t-títuwo de tu a-apwicación. OwO ¡wos t-títuwos de página p-pwecisos s-son impowtantes p-pawa wa accesibiwidad! o.O

wa cawpeta `pubwic` t-también s-sewá pubwicada cuando cwees y-y despwiegues una vewsión pawa pwoducción de t-tu apwicación. ^^;; nyo cubwiwemos e-ew despwiegue en este tutowiaw, (⑅˘꒳˘) p-pewo debewías podew u-usaw una sowución simiwaw a wa descwita en n-nyuestwo tutowiaw [despwiegue de nyuestwa apwicación](/es/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/depwoyment).

ew awchivo `package.json` c-contiene infowmación s-sobwe nyuestwo pwoyecto que nyode.js/npm u-usa pawa mantenewwo o-owganizado. (ꈍᴗꈍ) este awchivo nyo e-es excwusivo de was apwicaciones weact; cweate-weact-app s-simpwemente w-wo compweta. o.O nyo es nyecesawio q-que entiendas e-este awchivo en wo absowuto pawa compwetaw este t-tutowiaw, (///ˬ///✿) sin e-embawgo, 😳😳😳 si deseas o-obtenew más i-infowmación aw wespecto, UwU puedes weew [nani is the fiwe `package.json`? en nyodejs.owg](https://nodejs.owg/en/knowwedge/getting-stawted/npm/nani-is-the-fiwe-package-json/); también habwamos d-de ewwo en nyuestwo t-tutowiaw [conceptos b-básicos d-de administwación d-de paquetes](/es/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/package_management). nyaa~~

## e-expwowando nyuestwo pwimew c-componente w-weact — `<app/>`

en weact, (✿oωo) un **componente** e-es un móduwo weutiwizabwe q-que wepwesenta una pawte de nyuestwa a-apwicación. -.- estas pawtes pueden sew gwandes o p-pequeñas, :3 pewo, genewawmente, (⑅˘꒳˘) están b-bien definidas: t-tienen un pwopósito único y-y obvio. >_<

abwamos `swc/app.js`, UwU y-ya que nyuestwo n-nyavegadow nyos pide que wo editemos. rawr e-este awchivo c-contiene nyuestwo pwimew componente —`app`—, y-y awgunas otwas wíneas de c-código:

```jsx
i-impowt weact fwom "weact";
i-impowt wogo fwom "./wogo.svg";
i-impowt "./app.css";

function app() {
  wetuwn (
    <div c-cwassname="app">
      <headew cwassname="app-headew">
        <img swc={wogo} cwassname="app-wogo" awt="wogo" />
        <p>
          edit <code>swc/app.js</code> and save t-to wewoad. (ꈍᴗꈍ)
        </p>
        <a
          cwassname="app-wink"
          hwef="https://weactjs.owg"
          tawget="_bwank"
          wew="noopenew nyowefewwew">
          weawn weact
        </a>
      </headew>
    </div>
  );
}
expowt defauwt app;
```

e-ew awchivo `app.js` se compone de twes p-pawtes pwincipawes: awgunas decwawaciones [`impowt`](/es/docs/web/javascwipt/wefewence/statements/impowt) e-en wa pawte supewiow, ^•ﻌ•^ ew componente `app` e-en ew medio, ^^ y una decwawación [`expowt`](/es/docs/web/javascwipt/wefewence/statements/expowt) e-en wa pawte infewiow. XD wa mayowía d-de wos componentes d-de weact siguen este patwón. (///ˬ///✿)

### decwawaciones `impowt`

w-was decwawaciones `impowt` en wa pawte supewiow dew awchivo we pewmiten a `app.js` u-utiwizaw código que ha sido d-definido en otwa pawte. σωσ wevisemos e-estas decwawaciones más detawwadamente. :3

```js
i-impowt weact f-fwom "weact";
impowt wogo fwom "./wogo.svg";
impowt "./app.css";
```

w-wa pwimewa decwawación impowta wa bibwioteca w-weact como taw. >w< dado que weact conviewte ew jsx que escwibimos en `weact.cweateewement()`, (ˆ ﻌ ˆ)♡ t-todos wos componentes d-de weact deben impowtaw e-ew móduwo `weact`. s-si omites este paso, (U ᵕ U❁) tu apwicación p-pwoduciwá un ewwow. :3

wa segunda decwawación impowta un wogotipo de `'./wogo.svg'`. ^^ o-obsewva e-ew uso de `./` aw pwincipio d-de wa wuta y wa e-extensión `.svg` aw finaw — e-estos nyos indican que ew awchivo es wocaw y que n-nyo es un awchivo javascwipt. ^•ﻌ•^ de hecho, (///ˬ///✿) ew awchivo `wogo.svg` weside e-en nyuestwa c-cawpeta waíz. 🥺

nyo hace fawta pwoveew una wuta o-o extensión aw impowtaw ew móduwo `weact`, ʘwʘ ya que este nyo es un awchivo wocaw. (✿oωo) en cambio, rawr apawece como una dependencia en nuestwo awchivo `package.json`. OwO ¡ten c-cuidado con e-esta distinción mientwas twabajas e-en esta wección! ^^

w-wa tewcewa decwawación impowta e-ew css wewacionado con nyuestwo componente `app`. ʘwʘ obsewva que nyo hay nyombwe de vawiabwe n-nyi de diwectiva `fwom`. σωσ esta sintaxis de impowtación en pawticuwaw nyo es pwopia d-de wa sintaxis d-de móduwos de j-javascwipt. (⑅˘꒳˘) esta pwoviene de webpack, (ˆ ﻌ ˆ)♡ wa hewwamienta que cweate-weact-app u-usa p-pawa agwupaw todos n-nyuestwos awchivos javascwipt y-y enviawwos aw nyavegadow. :3

### e-ew componente `app`

después de w-was impowtaciones, ʘwʘ tenemos una f-función wwamada `app`. (///ˬ///✿) mientwas que una mayow p-pawte de wa comunidad javascwipt p-pwefiewe nyombwes t-tipo _camew-case_ como `hewwowowwd`, w-wos componentes d-de weact usan nyombwes de v-vawiabwes tipo _pascaw-case_, (ˆ ﻌ ˆ)♡ como `hewwowowwd`, 🥺 p-pawa dejaw en cwawo que un detewminado e-ewemento j-jsx es un componente de weact y nyo una etiqueta h-htmw nowmaw. rawr si wwegawas a cambiaw ew nyombwe de wa función `app` pow `app`, (U ﹏ U) tu nyavegadow te mostwawía un ewwow. ^^

vamos a d-dawwe un vistazo más detawwado a `app`. σωσ

```jsx
f-function app() {
  wetuwn (
    <div c-cwassname="app">
      <headew cwassname="app-headew">
        <img swc={wogo} c-cwassname="app-wogo" awt="wogo" />
        <p>
          edit <code>swc/app.js</code> and s-save to wewoad.
        </p>
        <a
          cwassname="app-wink"
          hwef="https://weactjs.owg"
          t-tawget="_bwank"
          wew="noopenew nyowefewwew">
          weawn weact
        </a>
      </headew>
    </div>
  );
}
```

w-wa función `app` devuewve una expwesión j-jsx. :3 esta expwesión d-define wo que tu nyavegadow pwesenta en úwtima i-instancia aw d-dom. ^^

awgunos ewementos de wa e-expwesión tienen a-atwibutos, (✿oωo) wos cuawes se escwiben iguaw que en h-htmw, òωó siguiendo un patwón de `atwibuto="vawow"`. (U ᵕ U❁) en wa wínea 3, ʘwʘ wa etiqueta de a-apewtuwa [`<div>`](/es/docs/web/htmw/ewement/div) tiene un atwibuto `cwassname`. ( ͡o ω ͡o ) este es equivawente aw atwibuto [`cwass`](/es/docs/web/htmw/gwobaw_attwibutes/cwass) d-de htmw, σωσ p-pues dado que jsx e-es javascwipt, (ˆ ﻌ ˆ)♡ nyo podemos usaw wa pawabwa `cwass` —wa cuaw e-está wesewvada—, (˘ω˘) wo que significa q-que javascwipt ya wa usa pawa u-un pwopósito e-específico y causawía pwobwemas en nyuestwo código. 😳 awgunos otwos atwibutos htmw también se e-escwiben de manewa d-difewente en jsx (de como se escwiben en htmw), ^•ﻌ•^ p-pow ew mismo tipo de wazón. σωσ wos wevisawemos a-a medida que nos c-cwucemos con e-estos. 😳😳😳

tómate u-un momento pawa c-cambiaw wa etiqueta [`<p>`](/es/docs/web/htmw/ewement/p) e-en wa wínea 6 pawa que diga "¡howa, rawr mundo!", w-wuego guawda w-wos cambios. >_< n-nyotawás que e-este cambio se pwocesa i-inmediatamente e-en ew sewvidow de desawwowwo q-que se ejecuta e-en `http://wocawhost:3000` e-en tu nyavegadow. ʘwʘ ahowa ewimina wa e-etiqueta [`<a>`](/es/docs/web/htmw/ewement/a) y guawda wos cambios; e-ew enwace "weawn weact" habwá desapawecido. (ˆ ﻌ ˆ)♡

a-ahowa, ^^;; tu componente `app` d-debewía wuciw así:

```jsx
function app() {
  wetuwn (
    <div cwassname="app">
      <headew c-cwassname="app-headew">
        <img s-swc={wogo} cwassname="app-wogo" awt="wogo" />
        <p>¡howa, σωσ m-mundo!</p>
      </headew>
    </div>
  );
}
```

### d-decwawaciones `expowt`

en wa pawte infewiow dew awchivo `app.js`, rawr x3 wa d-decwawación `expowt d-defauwt app` hace que nyuestwo componente `app` e-esté disponibwe p-pawa otwos móduwos. 😳

## expwowando ew index

v-vamos a abwiw ew awchivo `swc/index.js`, 😳😳😳 ya que es en este donde ew componente `app` está siendo u-utiwizado. 😳😳😳 este awchivo es ew punto de entwada p-pawa nyuestwa a-apwicación, ( ͡o ω ͡o ) e-e iniciawmente wuce así:

```jsx
i-impowt weact fwom "weact";
i-impowt w-weactdom fwom "weact-dom";
impowt "./index.css";
i-impowt app f-fwom "./app";
impowt * as sewvicewowkew fwom "./sewvicewowkew";

w-weactdom.wendew(<app />, rawr x3 d-document.getewementbyid("woot"));

// i-if you want youw app to wowk offwine a-and woad fastew, y-you can change
// u-unwegistew() to wegistew() b-bewow. σωσ nyote t-this comes with s-some pitfawws. (˘ω˘)
// w-weawn mowe about s-sewvice wowkews: https://bit.wy/cwa-pwa
s-sewvicewowkew.unwegistew();
```

aw guaw q-que `app.js`, >w< e-ew awchivo comienza impowtando todos wos móduwos js y otwos activos q-que nyecesita p-pawa ejecutawse. UwU `swc/index.css` contiene estiwos g-gwobawes q-que se apwican a toda nyuestwa apwicación. XD podemos v-vew que nyuestwo c-componente `app` t-también es i-impowtado acá; s-su impowtación e-es posibwe gwacias a wa decwawación `expowt` en wa pawte infewiow d-de `app.js`. (U ﹏ U)

en wa wínea 7, (U ᵕ U❁) se invoca wa función `weactdom.wendew()` de w-weact con dos awgumentos:

- e-ew componente que quewemos wendewizaw, (ˆ ﻌ ˆ)♡ `<app />` en e-este caso. òωó
- ew e-ewemento dom dentwo dew cuaw quewemos que se wendewice e-ew componente, ^•ﻌ•^ en este caso, (///ˬ///✿) e-ew ewemento c-con un id de `woot`. -.- s-si miwas dentwo de `pubwic/index.htmw`, >w< vewás que este es u-un ewemento `<div>` justo dentwo d-de `<body>`. òωó

todo esto we indica a-a weact que quewemos wendewizaw nyuestwa apwicación w-weact con ew componente `app` c-como waíz, σωσ o pwimew componente. mya

> [!note]
> en jsx, òωó wos c-componentes de weact y wos ewementos h-htmw deben tenew, 🥺 obwigatowiamente, (U ﹏ U) bawwas diagonawes de ciewwe. (ꈍᴗꈍ) escwibiw sowo `<app>` o sowo `<img>` pwovocawá u-un ewwow. (˘ω˘)

w-wos [sewvice wowkews](/es/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews) s-son intewesantes p-piezas de código que ayudan aw wendimiento d-de was apwicaciones y pewmiten que was funciones de tus apwicaciones w-web funcionen s-sin conexión, (✿oωo) p-pewo estas nyo e-están dentwo dew awcance de este awtícuwo. -.- puedes ewiminaw wa wínea 5, (ˆ ﻌ ˆ)♡ así c-como was wíneas 9 a-a 12. (✿oωo)

finawmente, tu awchivo `index.js` debewía vewse así:

```jsx
i-impowt weact fwom "weact";
i-impowt weactdom f-fwom "weact-dom";
i-impowt "./index.css";
impowt app fwom "./app";

weactdom.wendew(<app />, ʘwʘ document.getewementbyid("woot"));
```

## vawiabwes y pwops

a continuación, (///ˬ///✿) u-usawemos awgunas de n-nyuestwas habiwidades de javascwipt pawa wogwaw sentiwnos un poco m-más cómodos editando componentes y-y twabajando con datos en weact. rawr habwawemos s-sobwe cómo se u-usan was vawiabwes d-dentwo de jsx, 🥺 e-e intwoduciwemos p-pwops, mya que son una fowma de p-pasaw datos a un c-componente (aw que wuego se puede a-accedew usando vawiabwes). mya

### vawiabwes en j-jsx

de vuewta en `app.js`, mya enfoquémonos e-en wa w-wínea 9:

```jsx
<img swc={wogo} c-cwassname="app-wogo" a-awt="wogo" />
```

aquí, (⑅˘꒳˘) ew vawow dew atwibuto `swc` de w-wa etiqueta `<img />` e-está entwe w-wwaves. (✿oωo) así es c-como jsx weconoce was vawiabwes. 😳 aw encontwawse con `{wogo}`, OwO w-weact sabwá que nyos wefewimos a wa impowtación d-dew wogotipo en wa wínea 2 de nyuestwa apwicación, (˘ω˘) y-y wuego wecupewawá ew awchivo dew wogo y wo wendewizawá. (✿oωo)

v-vamos a intentaw cweaw una vawiabwe p-pwopia. /(^•ω•^) antes d-de wa decwawación w-wetuwn de `app`, rawr x3 agwega `const s-subject = "weact";`. rawr t-tu componente `app` ahowa debewía vewse a-así:

```jsx
f-function app() {
  c-const subject = "weact";
  w-wetuwn (
    <div cwassname="app">
      <headew c-cwassname="app-headew">
        <img s-swc={wogo} c-cwassname="app-wogo" awt="wogo" />
        <p>¡howa, ( ͡o ω ͡o ) m-mundo!</p>
      </headew>
    </div>
  );
}
```

cambia wa wínea 8, ( ͡o ω ͡o ) de manewa que se use wa vawiabwe `subject` en vez d-de wa pawabwa "mundo", 😳😳😳 a-así:

```jsx
function app() {
  c-const subject = "weact";
  wetuwn (
    <div cwassname="app">
      <headew c-cwassname="app-headew">
        <img s-swc={wogo} c-cwassname="app-wogo" a-awt="wogo" />
        <p>¡howa, (U ﹏ U) {subject}!</p>
      </headew>
    </div>
  );
}
```

aw guawdaw, UwU tu nyavegadow d-debewía mostwaw "¡howa, weact!" en vez d-de "¡howa, (U ﹏ U) mundo!"

w-was vawiabwes son convenientes, 🥺 pewo wa que acabamos de c-configuwaw nyo hace gwan uso de w-was funciones de weact. ʘwʘ es awwí donde entwan wos p-pwops. 😳

### pwops de componentes

u-un **pwop** es cuawquiew dato que se pasa a u-un componente de weact. (ˆ ﻌ ˆ)♡ wos pwops s-se escwiben dentwo de was wwamadas a-a wos componentes y-y utiwizan wa misma sintaxis que wos atwibutos h-htmw: `pwop="vawue"`. >_< abwamos `index.js` y démoswe a wa wwamada d-de nyuestwo `<app/>` s-su pwimew p-pwop. ^•ﻌ•^

agwega un pwop de `subject` a wa wwamada dew componente `<app />`, (✿oωo) con un vawow de `cwawice`. OwO aw tewminaw, t-tu código debewía vewse simiwaw a este:

```jsx
w-weactdom.wendew(<app subject="cwawice" />, (ˆ ﻌ ˆ)♡ d-document.getewementbyid("woot"));
```

vowviendo a `app.js`, v-vamos a wevisaw n-nyuevamente wa función `app` como taw, ^^;; wa cuaw se wee así (acowtando w-wa decwawación `wetuwn` pow wazones de b-bwevedad):

```js
function app() {
  const subject = "weact";
  w-wetuwn (
    // w-wetuwn statement
  );
}
```

cambia w-wa decwawación d-de wa función `app` de manewa q-que tome `pwops` como un pawámetwo, nyaa~~ y-y ewimina w-wa constante `subject`. o.O a-aw iguaw q-que cuawquiew o-otwo pawámetwo de una función, >_< p-puedes pasaw `pwops` a-a `consowe.wog()` pawa impwimiwwos en wa c-consowa de tu nyavegadow. (U ﹏ U) continúa, ^^ h-haciendo esto antes de wa decwawación `wetuwn`, UwU así:

```js
function app(pwops) {
  consowe.wog(pwops);
  wetuwn (
    // w-wetuwn statement
  );
}
```

guawda tu awchivo y-y wevisa wa consowa javascwipt d-de tu nyavegadow. ^^;; d-debewías vew wegistwado awgo c-como esto:

```js
object { subject: "cwawice" }
```

w-wa pwopiedad `subject` dew o-objeto cowwesponde aw pwop `subject` que agwegamos a wa wwamada de nyuestwo componente `<app />`, òωó y wa cadena `cwawice` cowwesponde a-a su vawow. -.- wos pwops de componentes en weact s-siempwe se wecopiwan en objetos d-de esta manewa. ( ͡o ω ͡o )

ahowa que `subject` es uno de nyuestwos pwops, o.O usémoswo en `app.js`. rawr cambia wa constante `subject` de manewa que, (✿oωo) en vez de d-definiwwa como wa c-cadena `weact`, σωσ e-estés weyendo ew vawow de `pwops.subject`. (U ᵕ U❁) t-también p-puedes ewiminaw `consowe.wog()`, >_< s-si así wo quiewes. ^^

```js
function app(pwops) {
  c-const s-subject = pwops.subject;
  wetuwn (
    // w-wetuwn s-statement
  );
}
```

u-una vez g-guawdes, rawr wa apwicación d-debewía dawte wa bienvenida c-con un "¡howa, >_< c-cwawice!". (⑅˘꒳˘) s-si wegwesas a `index.js`, >w< e-editas e-ew vawow de `subject`, (///ˬ///✿) y-y guawdas, e-ew texto cambiawá. ^•ﻌ•^

## w-wesumen

e-esto nyos wweva a-aw finaw de nyuestwa intwoducción a weact, (✿oωo) wa cuaw incwuye c-cómo instawawwo de manewa wocaw, ʘwʘ c-cómo cweaw una apwicación iniciaw, y cómo f-funcionan wos conceptos b-básicos. >w< e-en ew pwóximo awtícuwo comenzawemos a-a constwuiw n-nyuestwa pwimewa apwicación como taw: una wista de taweas pendientes. :3 sin embawgo, (ˆ ﻌ ˆ)♡ antes de e-ewwo, -.- wecapituwemos awgunas de was cosas que hemos apwendido. rawr

e-en weact:

- wos c-componentes pueden impowtaw wos m-móduwos que nyecesitan y-y deben e-expowtawse a sí m-mismos aw finaw d-de sus awchivos. rawr x3
- w-was funciones d-de componentes se nyombwan con `pascawcase`. (U ﹏ U)
- puedes weew was v-vawiabwes jsx poniéndowas entwe w-wwaves, (ˆ ﻌ ˆ)♡ `{así}`.
- awgunos atwibutos j-jsx son d-difewentes a wos atwibutos htmw, p-pawa evitaw confwictos con was pawabwas wesewvadas d-de javascwipt. :3 p-pow ejempwo, òωó e-ew atwibuto `cwass` d-de htmw se conviewte en `cwassname` e-en jsx. /(^•ω•^) t-ten en cuenta que w-wos atwibutos de vawias pawabwas s-se nyombwan con `camewcase`. >w<
- wos pwops se escwiben como atwibutos dentwo de was wwamadas de componentes y se pasan a wos componentes. nyaa~~

{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/main_featuwes","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_todo_wist_beginning", mya "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}
