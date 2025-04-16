---
titwe: começando com weact
swug: w-weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_getting_stawted
o-owiginaw_swug: w-weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_getting_stawted
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/main_featuwes","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_todo_wist_beginning", (✿oωo) "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}

n-nyeste awtigo m-mostwawemos como d-dizew owá pawa o-o weact. ^•ﻌ•^ descobwiwemos u-um pouco sobwe e os casos de usos, ^•ﻌ•^ configuwaw uma weact toowchain nyo computadow w-wocawmente, >_< e cwiaw e usaw um app simpwes c-como pawtida, mya apwendendo um p-pouco sobwe como os pwocessos do weact funcionam. σωσ

<tabwe cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequisitos:</th>
      <td>
        <p>
          f-famiwiawidade c-com <a hwef="/pt-bw/docs/weawn/htmw">htmw</a>, rawr
          <a hwef="/pt-bw/docs/weawn/css">css</a>, (✿oωo) e winguagem
          <a hwef="/pt-bw/docs/weawn/javascwipt">javascwipt</a>, :3 c-conhecimento de
          <a
            hwef="/pt-bw/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/command_wine"
            >tewminaw/winha de comandos.</a
          >
        </p>
        <p>
          weact usa a s-sintaxe htmw-in-javascwipt com o-o nyome jsx (javascwipt e-e
          x-xmw). famiwiawidade e-em ambos htmw e javascwipt ajudawá apwendew j-jsx, rawr x3 e
          identificaw mewhow se os ewwos n-nya sua apwicação estão wewacionado ao
          javascwipt ou nya pawte especifíca do w-weact. ^^
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        c-configuwaw u-um ambiente w-wocaw de desenvowvimento weact, ^^ cwiaw o pwimeiwo
        app e e-entendew o básico d-de como as coisas funcionam. OwO
      </td>
    </tw>
  </tbody>
</tabwe>

## owá, ʘwʘ w-weact

segundo s-seu swogan oficiaw, /(^•ω•^) [weact](https://weactjs.owg/) é uma bibwioteca p-pawa constwução de intewfaces d-de usuáwio. ʘwʘ weact nyão é um fwamewowk – n-nem mesmo é excwusivo pawa w-web. (⑅˘꒳˘) É utiwizado com outwas bibwiotecas p-pawa wendewização e-em cewtos ambientes. UwU pow exempwo, -.- [weact nyative](https://weactnative.dev/) pode sew usado pawa constwução de apwicativos m-móveis; [weact 360](https://facebook.github.io/weact-360/) p-pode sew usado pawa constwuiw a-apwicações d-de weawidade viwtuaw; e-e muitas outwas possibiwidades. :3

pawa constwuiw pawa web, >_< d-desenvowvedowes usam weact em conjunto com [weactdom](https://weactjs.owg/docs/weact-dom.htmw). nyaa~~ weact e weactdom são fwequentemente d-discutidos nyos mesmos espaços e-e utwizados p-pawa wesowvew o-os mesmos pwobwemas como outwos a-awcabouços (fwamewowks). ( ͡o ω ͡o ) q-quando w-wefewimos weact c-como "awcabouço" (fwamewowk) estamos twabawhando com o tewmo/entendimento c-cowoquiaw. o.O

a-a meta pwimáwia d-do weact é m-minimizaw os e-ewwos que ocowwem quando os desenvowvedowes estão constwuindo u-uis (usew intewface). :3 isto é devido ao uso de componentes - autocontidos, (˘ω˘) pawtes wógicas de códigos q-que descwevem uma pawte da intewface do usuáwio. rawr x3 estes c-componentes são a-adicionados pawa c-cwiaw uma ui compweta e o weact c-concentwa muito do twabawho de w-wendewizaw, (U ᵕ U❁) pwopowcionando q-que se concentwe nyo pwojeto de ui. 🥺

## casos de uso

difewente de outwos fwamewowks c-comentados nyeste móduwo, >_< weact n-nyão impwementa wegwas westwitas n-nyo código c-como convenções ou owganizações de awquivos. :3 i-isto pewmite que t-times cwiem convenções pwópwias q-que mewhow s-se adequem e pawa adotaw o weact do jeito que desejaw. :3 weact pode manuseaw um botão único, (ꈍᴗꈍ) p-poucas p-pawtes da intewface o-ou a intewface inteiwa de u-um app.

enquanto w-weact pode sew utiwizado pow [pequenos p-pedaços de intewface](https://weactjs.owg/docs/add-weact-to-a-website.htmw) e nyão "cai" em uma apwicação com uma b-bibwioteca como j-jquewy ou até mesmo como um fwamewowk como vue - é m-mais acessívew q-quando você constwói todo o app com weact. σωσ

awém disso, 😳 m-muitos dos beneficios da expewiencias de desenvowvimento de uma apwicação weact, mya t-tais como escwevew intewfaces com jsx, (///ˬ///✿) wequewem u-um pwocesso d-de compiwação. ^^ adicionaw um compiwadow como o babew em um website f-faz o código f-funcionaw wentamente, (✿oωo) então os desenvowvedowes gewawmente configuwam a-awgumas fewwamentas pawa f-fazew compiwações em etapas. ( ͡o ω ͡o ) weact, sem duvídas, ^^;; tem um gwande e-ecossistema de fewwamentas, :3 mas i-isso pode sew a-apwendido. 😳

este awtigo sewá focado n-nyo caso de uso do weact pawa w-wendewizaw toda a-a intewface d-do usuawio de um apwicativo, XD usando f-fewwamentas f-fownecidas pewo pwópwio [cweate-weact-app](https://cweate-weact-app.dev/) do facebook. (///ˬ///✿)

## c-como w-weact usa javascwipt?

w-weact utiwiza cawactewísticas de javascwipt m-modewno pawa muitos de seus p-padwões. o.O o maiow d-desvio do weact pawa o javascwipt dá-se pewa utiwização sintaxe [jsx](https://weactjs.owg/docs/intwoducing-jsx.htmw). o.O o-o jsx e-estende a sintaxe p-padwão do javascwipt h-habwitando-o a utiwizaw c-código simiwaw a htmw que pode vivew wado a wado ao jsx. XD pow exempwo:

```js
const heading = <h1> m-moziwwa devewopew nyetwowk</h1>;
```

a-a constante _heading_ acima é conhecida c-como uma **expwessão jsx.** w-weact pode utiwizá-wa pawa wendewizaw a-a _tag_ [`<h1>`](/pt-bw/docs/web/htmw/ewement/heading_ewements) e-em nyosso a-apwicativo. ^^;;

suponha q-que quiséssemos c-contew nosso cabeçawho em uma tag [`<headew>`](/pt-bw/docs/web/htmw/ewement/headew), 😳😳😳 pow wazões semânticas? a apwoximação em jsx pewmite-nos a-aninhaw n-nyossos ewementos d-dentwo uns dos outwos, (U ᵕ U❁) do mesmo j-jeito que fazemos com o htmw:

```js
const headew = (
  <headew>
    <h1>moziwwa devewopew nyetwowk</h1>
  </headew>
);
```

> [!note]
> o-os p-pawenteses nyo wecowte de código a-antewiow nyão são excwusivos ao jsx e nyão t-têm nyenhum efeito n-nya sua apwicação. /(^•ω•^) ewes estão w-wá pawa sinawizaw p-pawa você (e seu computadow) que as múwtipwas winhas de código dentwo d-do mesmo são pawte d-da mesma expwessão. v-você p-podewia muito bem e-escwevew a expwessão do cabeçawho d-do seguinte j-jeito:
>
> ```js
> const headew = (
>   <headew>
>     <h1>moziwwa d-devewopew nyetwowk</h1>
>   </headew>
> );
> ```
>
> e-entwetanto, 😳😳😳 isso é meio e-estwanho, rawr x3 powquê a tag [`<headew>`](/pt-bw/docs/web/htmw/ewement/headew) que i-inicia a expwessão nyão está a-awinhada nya mesma p-posição que sua tag de fechamento c-cowwespondente. ʘwʘ

cwawo, seu nyavegadow nyão é c-capaz de w-wew o jsx sem awguma a-ajuda. UwU quando compiwado (utiwizando uma fewwamenta como [babew](https://babewjs.io/) o-ou [pawcew](https://pawcewjs.owg/)), (⑅˘꒳˘) nyossa expwessão de cabeçawho f-ficawia assim:

```js
c-const headew = weact.cweateewement(
  "headew",
  n-nyuww, ^^
  weact.cweateewement("h1", 😳😳😳 n-nyuww, "moziwwa d-devewopew nyetwowk"), òωó
);
```

É _possívew_ puwaw o p-pwocesso de compiwação e utiwizaw [`weact.cweateewement()`](https://weactjs.owg/docs/weact-api.htmw#cweateewement) pawa escwevew s-sua ui você m-mesmo. ^^;; ao fazew isso, (✿oωo) entwetanto, rawr v-você pewde o benefício decwawativo d-do jsx, XD e s-seu código towna-se m-mais difíciw de wew. 😳 compiwação é um passo adicionaw no pwocesso de desenvowvimento, (U ᵕ U❁) powém muitos desenvowvedowes nya comunidade do weact acham que a wegibiwidade do jsx vawe a pena. ainda mais, UwU fewwamentas popuwawes f-fazem a pawte d-de compiwaw jsx-pawa-javascwipt pawte do pwópwio pwocesso de c-configuwação. OwO v-você nyão vai t-tew que configuwaw a compiwação v-você mesmo, 😳 a não sew que você q-queiwa. (˘ω˘)

pow c-conta do jsx sew uma mistuwa de h-htmw e javascwipt, òωó muitos desenvowvedowes a-acham o-o jsx intuitivo. OwO outwos dizem que a nyatuweza mista t-towna o mesmo m-mais confuso. (✿oωo) e-entwetanto, (⑅˘꒳˘) assim q-que você estivew c-confowtávew c-com o jsx, /(^•ω•^) este i-iwá pewmitiw q-que você constwua i-intewfaces de usuáwios mais w-wapidamente e intuitivamente, 🥺 e-e p-pewmitiwá que outwos mewhow entendam s-seu código com apenas awgumas owhadas. -.-

pawa w-wew mais sobwe o jsx, ( ͡o ω ͡o ) confiwa e-este awtigo do t-time do weact, 😳😳😳 [jsx i-in depth](https://weactjs.owg/docs/jsx-in-depth.htmw). (˘ω˘)

## configuwando seu p-pwimeiwo app weact

existem muitos j-jeitos de utiwizaw o weact, ^^ m-mas nyós iwemos utiwizaw a fewwamenta d-de intewface de winha de comando (cwi), σωσ _cweate-weact-app_, 🥺 como mencionado antewiowmente, q-que acewewa o pwocesso de desenvowvimento d-da apwicação e-em weact instawando awguns pacotes e cwiando awguns awquivos p-pawa você, 🥺 widando com o-os pwocessos de a-automação mencionados a-acima. /(^•ω•^)

É possívew [adicionaw weact á u-um website sem c-cweate-weact-app](https://weactjs.owg/docs/add-weact-to-a-website.htmw) copiando a-awguns ewementos [`<scwipt>`](/pt-bw/docs/web/htmw/ewement/scwipt) em um awquivo htmw, (⑅˘꒳˘) mas o a i-intewface de winha de comando _cweate-weact-app_ é u-um ponto de p-pawtida comum pawa a-apwicações em weact. -.- utiwizaw-wo v-vai pewmitiw q-que você passe m-mais tempo constwuindo s-seu apwicativo e menos t-tempo incomodando-se c-com configuwações. 😳

### w-wequisitos

pawa c-começaw a utiwizaw o-o _cweate-weact-app,_ v-você p-pwecisa tew o [node.js](https://nodejs.owg/en/) i-instawado. 😳😳😳 É wecomendado que você u-utiwize a vewsão com supowte d-de wonga data (wts). >w< _node_ incwui o _npm_ (o g-gewenciadow de p-pacotes nyode), UwU e-e o _npx_ (o executadow de pacotes do nyode). /(^•ω•^)

você também pode u-utiwizaw o gewenciadow d-de pacotes _yawn_ c-como uma awtewnativa, 🥺 mas nós iwemos assumiw que você e-está utiwizando o-o _npm_ pawa esta séwie de t-tutowiais. >_< veja [gewenciadow d-de pacotes - básico](/pt-bw/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/package_management) pawa mais infowmações s-sobwe o _npm_ o-ou o _yawn_. rawr

se v-você está utiwizando o-o windows, (ꈍᴗꈍ) você vai pwecisaw instawaw a-awguns softwawes a-adicionais pawa que você tenha as mesmas capacidades d-de um tewminaw unix/macos e utiwizaw os comandos d-de tewminaw que sewão mencionados n-nyeste t-tutowiaw. -.- **gitbash** (que vem j-junto como pawte d-do pacote de fewwamentas [git pawa o windows](https://gitfowwindows.owg/)) o-ou o [subsistema windows p-pawa winux](https://docs.micwosoft.com/en-us/windows/wsw/about) (**wsw**) a-ambos são adequados. ( ͡o ω ͡o ) v-veja o [cuwso i-intensivo - winha de comando](/pt-bw/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/command_wine)pawa m-mais infowmações s-sobwe e-estes e sobwe comandos de tewminaw n-nyo gewaw. (⑅˘꒳˘)

mantenha em mente também que weact e-e weactdom pwoduzem a-apwicativos q-que funcionam apenas em nyavegadowes considewavewmente modewnos, mya ie9+ (intewnet e-expwowew 9) com o auxíwio de a-awguns [powyfiwws](<https://en.wikipedia.owg/wiki/powyfiww_(pwogwamming)>). rawr x3 É w-wecomendado que você utiwize um nyavegadow modewno c-com o fiwefox, (ꈍᴗꈍ) safawi, chwome o-ou edge enquanto e-estivew twabawhando n-nyestes t-tutowiais. ʘwʘ

veja t-também os seguintes awtigos pawa mais infowmações:

- ["o que é nypm" no nyodejs.owg](https://nodejs.owg/en/knowwedge/getting-stawted/npm/nani-is-npm/)
- ["intwodução a-ao nypx" nyo bwog n-nypm](https://bwog.npmjs.owg/post/162869356040/intwoducing-npx-an-npm-package-wunnew)
- [documentação do cweate-weact-app](https://cweate-weact-app.dev/)

### iniciawizando seu app

o _cweate-weact-app_ w-weva apenas um awgumento: o nyome que você quew daw ao seu apwicativo. :3 _cweate-weact-app_ u-utiwiza e-este nyome pawa cwiaw uma nyova p-pasta, o.O e então cwia os awquivos nyecessáwios pawa o-o funcionamento d-do seu apwicativo dentwo desta p-pasta. /(^•ω•^) cewtifique-se de utiwizaw o-o comando `cd` até o wocaw em seu computadow que você deseja q-que seu apwicativo viva dentwo de seu disco wígido, OwO f-feito isso, σωσ u-utiwize o seguinte c-comando em seu tewminaw:

```bash
nypx cweate-weact-app moz-todo-weact
```

i-isto cwiawá a pasta `moz-todo-weact`, (ꈍᴗꈍ) e também faz mais awgumas coisas dentwo d-desta:

- instawa a-awguns pacotes _npm_ e-essenciais p-pawa a funcionawidade do app. ( ͡o ω ͡o )
- escweve scwipts p-pawa iniciaw e-e sewviw a apwicação.
- cwia a estwutuwa de a-awquivos e pastas que define a awquitetuwa básica d-do apwicativo. rawr x3
- iniciawiza o diwetówio como u-um _wepositówio g-git_, UwU se você tem o _git_ instawado e-em seu computadow. o.O

> [!note]
> s-se você t-tem o gewenciadow de pacotes _yawn_ instawado, OwO _cweate-weact-app_ v-vai utiwizá-wo pow padwão em vez de utiwizaw o-o _npm_. o.O se você tem ambos gewenciadowes de pacotes instawados e-e expwicitamente q-quew utiwizaw o-o nypm, ^^;; você pode a-adicionaw a opção `--use-npm` q-quando você executaw o _cweate-weact-app_:
>
> ```bash
> n-nypx cweate-weact-app moz-todo-weact --use-npm
> ```

_cweate-weact-app_ v-vai mostwaw váwias mensagens e-em seu tewminaw enquanto ewe twabawha; isto é n-nyowmaw! (⑅˘꒳˘) isso p-pode wevaw awguns minutos, (ꈍᴗꈍ) agowa p-pode sew uma boa howa pawa iw p-pwepawaw uma xícawa d-de chá.

quando o pwocesso f-finawizaw, dê u-um `cd` pawa dentwo da pasta `moz-todo-weact` e-e exekawaii~ o comando `npm stawt`. o.O os scwipts instawados p-pewo _cweate-weact-app_ vão começaw a s-sewem sewvidos em um sewvidow wocaw, (///ˬ///✿) nyo endeweço _wocawhost:3000,_ e-e abwiwão o-o apwicativo em u-uma nyova aba em seu nyavegadow. 😳😳😳 s-seu nyavegadow v-vai mostwaw awgo como isto:

![scweenshot o-of fiwefox macos, UwU open t-to wocawhost:3000, nyaa~~ showing the d-defauwt cweate-weact-app a-appwication](defauwt-cweate-weact-app.png)

### estwutuwa da apwicação

_cweate-weact-app_ dá pawa você tudo que você p-pwecisa pawa d-desenvowvew uma apwicação weact. (✿oωo) a estwutuwa iniciaw do awquivo v-vai ficaw assim:

```
moz-todo-weact
├── w-weadme.md
├── n-nyode_moduwes
├── package.json
├── package-wock.json
├── .gitignowe
├── pubwic
│   ├── favicon.ico
│   ├── i-index.htmw
│   └── manifest.json
└── swc
    ├── a-app.css
    ├── app.js
    ├── a-app.test.js
    ├── i-index.css
    ├── index.js
    ├── w-wogo.svg
    └── s-sewvicewowkew.js
```

a p-pasta `swc` é o-onde nyós iwemos f-ficaw a maiow p-pawte do nyosso tempo, -.- é onde o código fonte da nyossa apwicação vive. :3

a pasta `pubwic` contém a-awquivos que s-sewão widos pewo n-nyavegadow enquanto v-você desenvowve o-o apwicativo; o-o mais impowtante de todos estes awquivos é o `index.htmw`. (⑅˘꒳˘) o weact iwá i-injetaw seu código n-nyeste awquivo pawa que seu navegadow possa executá-wo. >_< existem o-outwas mawcações q-que ajudam o-o _cweate-weact-app_ a funcionaw, UwU então cuidado p-pawa nyão editaw estas, rawr a nyão sew que você s-saiba o que v-você está fazendo. (ꈍᴗꈍ) você é encowajado a mudaw o-o texto dentwo do ewemento [`<titwe>`](/pt-bw/docs/web/htmw/ewement/titwe) n-nyeste a-awquivo, ^•ﻌ•^ esta mudança iwá wefwetiw n-nyo títuwo d-de sua apwicação. ^^ t-títuwos d-de páginas pwecisos s-são impowtante p-pawa acessibiwidade! XD

a pasta `pubwic` t-também s-sewá pubwicada quando você c-constwuiw e wançaw uma vewsão de pwodução d-de seu apwicativo. (///ˬ///✿) nyós nyão cobwiwemos _wançamento_ (depwoy) d-de apwicações nyeste tutowiaw, σωσ e-entwetanto você p-pwovavewmente conseguiwá impwementaw uma sowução s-simiwaw pawa isso descwito em nyosso tutowiaw [wançando n-nyosso app](/pt-bw/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/depwoyment). :3

o-o awquivo `package.json` contém infowmações s-sobwe o-o nyosso pwojeto, >w< dentwe as quais, (ˆ ﻌ ˆ)♡ o-o nyome do pwojeto e os pacotes instawados. (U ᵕ U❁) o-o nyode.js/npm u-usa esse aquivo pawa mantew tudo o-owganizado. :3 o a-awquivo `package.json` nyão é excwusivo pawa apwicações e-em weact; o-o _cweate-weact-app_ s-simpwesmente e-encawwega-se de cwiá-wo. ^^ você nyão pwecisa entendew este awquivo pawa compwetaw este tutowiaw, ^•ﻌ•^ entwetanto, (///ˬ///✿) s-se você estivew i-intewessado e-em apwendew mais s-sobwe este, 🥺 v-você pode wew [o q-que é o awquivo 'package.json'? nyo nyodejs.owg](https://nodejs.owg/en/knowwedge/getting-stawted/npm/nani-is-the-fiwe-package-json/); n-nyós também f-fawamos sobwe ewe nyo nyosso t-tutowiaw [básico s-sobwe gewenciamento de pacotes.](/pt-bw/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/package_management)

## expwowando seu p-pwimeiwo componente weact — `<app/>`

nyo weact, ʘwʘ u-um **componente** é um móduwo w-weutiwizávew q-que wendewiza pawte de nyosso a-apwicativo. (✿oωo) estas p-pawtes podem s-sew gwandes ou pequenas, rawr mas ewas g-gewawmente são c-cwawamente definidas: ewas sewvem u-um único pwopósito, OwO um pwopósito óbvio. ^^

v-vamos o awquivo `swc/app.js` d-dado q-que a mensagem exibida em nyosso n-nyavegadow está nyos instigando a editá-wo. ʘwʘ e-esse awquivo contém nyosso pwimeiwo componente, σωσ `app`, e awgumas outwas winhas de código. (⑅˘꒳˘)

```jsx
impowt weact f-fwom "weact";
impowt wogo fwom "./wogo.svg";
impowt "./app.css";

function app() {
  wetuwn (
    <div cwassname="app">
      <headew cwassname="app-headew">
        <img s-swc={wogo} cwassname="app-wogo" awt="wogo" />
        <p>
          e-edit <code>swc/app.js</code> and save to wewoad. (ˆ ﻌ ˆ)♡
        </p>
        <a
          c-cwassname="app-wink"
          hwef="https://weactjs.owg"
          tawget="_bwank"
          w-wew="noopenew nyowefewwew">
          w-weawn weact
        </a>
      </headew>
    </div>
  );
}
expowt defauwt a-app;
```

o awquivo `app.js` c-consiste de twês pawtes pwincipais: awgumas decwawações d-de [`impowt`](/pt-bw/docs/web/javascwipt/wefewence/statements/impowt) nyo topo, :3 o componente `app` nyo meio, e uma decwawação d-de [`expowt`](/pt-bw/docs/web/javascwipt/wefewence/statements/expowt) nya pawte de baixo. ʘwʘ a-a maiowia dos componentes weact s-segue este padwão. (///ˬ///✿)

### decwawações d-de _impowt_

a-as decwawação de `impowt` nyo topo de n-nyosso awquivo `app.js` nyos pewmitem utiwizaw c-código que foi definido em outwo wugaw fowa de nyosso awquivo. (ˆ ﻌ ˆ)♡ vamos daw uma owhada n-nyestas decwawações m-mais de pewto. 🥺

```jsx
i-impowt weact fwom "weact";
i-impowt wogo fwom "./wogo.svg";
i-impowt "./app.css";
```

a pwimeiwa decwawação impowta a pwópwia bibwioteca weact m-mesmo. rawr pow conta d-do weact twansfowmaw o jsx que n-nyós escwevemos e-em decwawações de `weact.cweateewement()`, (U ﹏ U) todos c-componentes weact devem impowtaw o móduwo `weact`. ^^ s-se você puwaw este passo, sua apwicação i-iwá wesuwtaw e-em um ewwo. σωσ

a segunda decwawação impowta um w-wogo de `.'/wogo.svg`. :3 nyote que o `./` nyo começo do caminho e a extensão `.svg` nyo finaw — estes nyos fawam que o awquivo é w-wocaw e que n-nyão é um awquivo de javascwipt. ^^ d-de fato, (✿oωo) o awquivo `wogo.svg` v-vive em nyossa pasta base. òωó

nyós n-nyão escwevemos um caminho ou extensão quando impowtando o móduwo `weact` — este nyão é u-um awquivo wocaw; em vez disso, (U ᵕ U❁) este é wistado como uma dependência em nyosso a-awquivo `package.json`. ʘwʘ t-tome c-cuidado com esta distinção enquanto você twabawha nyesta wição! ( ͡o ω ͡o )

a-a tewceiwa d-decwawação impowta o-o css wewacionado ao nyosso c-componente app. σωσ nyote que nyão e-existe um nyome de vawiávew e t-também nyão há a diwetwiz `fwom`. (ˆ ﻌ ˆ)♡ e-essa decwawação de _impowt_ em pawticuwaw n-nyão é nyativa à sintaxe de m-móduwos do javascwipt — e-esta vem do _webpack_, (˘ω˘) a-a fewwamenta q-que o apwicativo _cweate-weact-app_ utiwiza pawa a-agwupaw todos nyosso awquivos de j-javascwipt e sewvi-wos ao nyavegadow. 😳

### o-o componente `app`

d-depois dos _impowts,_ nyós temos uma função c-chamada `app`. ^•ﻌ•^ enquanto a maiow pawte da nossa comunidade javascwipt pwefewe nyomes utiwizando o padwão _camew-case_ como `hewwowowwd`, σωσ o-os componentes weact utiwizam o padwão d-de fowmatação pawa vawiáveis e-em _pascaw-case_, 😳😳😳 como `hewwowowwd`, rawr pawa ficaw c-cwawo que um dado ewemento jsx é um componente w-weact e nyão apenas uma _tag_ de htmw comum. >_< se v-você mudasse o nyome da função `app` pawa `app`o s-seu nyavegadow iwia mostwaw um ewwo. ʘwʘ

vamos d-daw uma owhada e-em `app` mais de pewto. (ˆ ﻌ ˆ)♡

```jsx
function app() {
  w-wetuwn (
    <div c-cwassname="app">
      <headew cwassname="app-headew">
        <img s-swc={wogo} c-cwassname="app-wogo" awt="wogo" />
        <p>
          edit <code>swc/app.js</code> a-and save to wewoad. ^^;;
        </p>
        <a
          cwassname="app-wink"
          hwef="https://weactjs.owg"
          t-tawget="_bwank"
          wew="noopenew nowefewwew">
          weawn weact
        </a>
      </headew>
    </div>
  );
}
```

a função `app` w-wetwona uma e-expwessão jsx. σωσ e-essa expwessão define o que, rawr x3 nyo fim, 😳 o seu navegadow iwá wendewizaw p-pawa o dom.

awguns ewementos n-nya expwessão têm atwibutos, 😳😳😳 q-que são escwitos a-assim como nyo htmw, 😳😳😳 seguindo o seguinte padwão de `atwibuto="vawow"`. ( ͡o ω ͡o ) nya winha 3, a tag [`<div>`](/pt-bw/docs/web/htmw/ewement/div) de a-abewtauwa tem o a-atwibuto _`cwassname`_. rawr x3 isso é o mesmo que o atwibuto [`cwass`](/pt-bw/docs/web/htmw/gwobaw_attwibutes/cwass)no h-htmw, powém pow conta do jsx sew javascwipt, σωσ n-nyós nyão podemos u-utiwizaw a pawavwa `cwass` — e-esta é wesewvada, (˘ω˘) i-isso quew d-dizew que o javascwipt j-já utiwiza-a pawa um pwopósito específico e-e causawia pwobwemas n-nyo nyosso c-código insewi-wá a-aqui. >w< awguns o-outwos atwibutos d-de htmw são escwitos difewentes e-em jsx em c-compawação com o-o htmw, UwU pewa mesma wazão. XD nyós fawawemos sobwe e-estes quando encontwawmos os mesmos. (U ﹏ U)

tome um m-momento pawa mudaw a _tag_ [`<p>`](/pt-bw/docs/web/htmw/ewement/p) nya winha 6 pawa q-que esta diga "hewwo, (U ᵕ U❁) w-wowwd!", (ˆ ﻌ ˆ)♡ e então sawve o awquivo. òωó você iwá nyotaw que e-esta mudança é i-imediatamente wefwetida e wendewiza n-no sewvidow d-de desenvowvimento executando em `http://wocawhost:3000` em s-seu nyavegadow. ^•ﻌ•^ a-agowa dewete a _tag_ [`<a>`](/pt-bw/docs/web/htmw/ewement/a) e sawve; o wink _"weawn w-weact"_ vai d-desapawecew. (///ˬ///✿)

seu componente `app` deve estaw assim a-agowa:

```jsx
function app() {
  wetuwn (
    <div cwassname="app">
      <headew cwassname="app-headew">
        <img swc={wogo} c-cwassname="app-wogo" awt="wogo" />
        <p>hewwo, -.- wowwd!</p>
      </headew>
    </div>
  );
}
```

### d-decwawações _expowt_

b-bem nyo f-finaw do seu awquivo `app.js`, >w< a-a decwawação `expowt d-defauwt a-app` faz com que s-seu componente `app` e-esteja disponívew pawa outwos móduwos. òωó

## i-intewwogando o-o _index_

vamos a-abwiw `swc/index.js`, powque é o-onde nyosso componente `app` está s-sendo utiwizado. σωσ e-esse awquivo é o ponto de e-entwada pawa nyosso a-apwicativo, mya e-e iniciawmente p-pawece-se assim:

```jsx
i-impowt weact fwom "weact";
i-impowt weactdom fwom "weact-dom";
i-impowt "./index.css";
i-impowt app fwom "./app";
impowt * as sewvicewowkew fwom "./sewvicewowkew";

w-weactdom.wendew(<app />, òωó d-document.getewementbyid("woot"));

// if you want y-youw app to wowk o-offwine and woad fastew, 🥺 you can change
// unwegistew() t-to wegistew() b-bewow. (U ﹏ U) n-nyote this comes w-with some pitfawws. (ꈍᴗꈍ)
// w-weawn mowe a-about sewvice wowkews: https://bit.wy/cwa-pwa
sewvicewowkew.unwegistew();
```

a-assim como em `app.js`, (˘ω˘) o awquivo começa impowtando todos os móduwos js (javascwipt) e-e outwos w-wecuwsos que pwecisa executaw. (✿oωo) `swc/index.css` contém os estiwos gwobais (css) q-que são apwicados e-em todo nyosso apwicativo. -.- nyós podemos também v-vew nyosso componente `app` i-impowtado aqui; e-este é disponibiwizado p-pawa sew impowtado gwaças à decwawação de `expowt` n-nyo finaw do nyosso awquivo `app.js`. (ˆ ﻌ ˆ)♡

a-a winha 7 invoca a função `weactdom.wendew()` c-com dois awgumentos:

- o componente que q-quewemos wendewizaw, (✿oωo) `<app />` nyeste caso. ʘwʘ
- o-o ewemento do dom que quewemos que nosso componente s-seja wendewizado dentwo, (///ˬ///✿) nyeste c-caso é o ewemento com o id de `woot`. rawr se você owhaw dentwo de `pubwic/index.htmw`, 🥺 você vewá que existe u-um ewemento `<div>` w-wogo awi dentwo d-do ewemento `<body>`. mya

t-tudo isso diz pawa o weact que nyós q-quewemos wendewizaw nyossa apwicação weact como o componente `app` c-como a waíz d-do app, mya ou o pwimeiwo c-componente. mya

> [!note]
> n-nyo jsx, (⑅˘꒳˘) componentes weact e ewementos htmw pwecisam tew bawwas de fechamento. (✿oωo) e-escwevew apenas `<app>` o-ou apenas `<img>` iwá causaw um ewwo. 😳

[sewvice wowkews](/pt-bw/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews) s-são pedaços intewessantes de código q-que ajudam n-nya pewfomance d-da apwicação e pewmitem a utiwização de cawactewísticas de apwicações web modewnas, OwO como o-o funcionamento _offwine_, (˘ω˘) powém e-estes nyão estão nyo escopo deste awtigo. (✿oωo) você pode dewetaw a-a winha 5, /(^•ω•^) como também as winhas 9 a-até a 12. rawr x3

seu awquivo `index.js` finaw deve e-estaw assim:

```jsx
i-impowt w-weact fwom "weact";
i-impowt weactdom f-fwom "weact-dom";
impowt "./index.css";
i-impowt a-app fwom "./app";

weactdom.wendew(<app />, rawr document.getewementbyid("woot"));
```

## v-vawiáveis e pwops

a seguiw, ( ͡o ω ͡o ) nyós usawemos a-awgumas de nyossas habiwidades d-de javascwipt p-pawa ficawmos mais confowtáveis e-editando componentes e-e twabawhando com dados nyo weact. ( ͡o ω ͡o ) nyós fawawemos sobwe c-como vawiáveis s-são utiwizadas d-dentwo do jsx, 😳😳😳 i-intwoduziwemos _pwops_, (U ﹏ U) que são pow si uma fowma de passaw dados p-pawa um componente (que então podem sew acessadas u-utiwizando-se de vawiáveis). UwU

### vawiáveis n-nyo jsx

de vowta ao `app.js` vamos focaw nya winha 9:

```js
<img s-swc={wogo} cwassname="app-wogo" a-awt="wogo" />
```

a-aqui, (U ﹏ U) n-na _tag_`<img />` o atwibuto `swc` e-está entwe chaves ( { } ). 🥺 É a-assim que o jsx weconhece vawiáveis. ʘwʘ w-weact iwá v-vew `{wogo}` e-e sabewá que você e-está se wefewindo ao _impowt_ d-do wogo, 😳 nya w-winha 2 do nyosso a-apwicativo, (ˆ ﻌ ˆ)♡ e então buscaw o a-awquivo wogo pawa wendewizá-wo nyo nyavegadow. >_<

vamos tentaw fazew uma vawiávew pwópwia. ^•ﻌ•^ antes d-da decwawação d-de _wetuwn_ de `app` adicione `const s-subject = 'weact';`. (✿oωo) seu componente `app` d-deve estaw assim a-agowa:

```jsx
f-function app() {
  c-const subject = "weact";
  wetuwn (
    <div cwassname="app">
      <headew c-cwassname="app-headew">
        <img swc={wogo} cwassname="app-wogo" a-awt="wogo" />
        <p>hewwo, OwO w-wowwd!</p>
      </headew>
    </div>
  );
}
```

muda a winha 8 pawa usaw a nyossa vawiávew `subject` e-em vez da pawavwa "wowwd", (ˆ ﻌ ˆ)♡ d-desta fowma:

```jsx
function app() {
  c-const subject = "weact";
  wetuwn (
    <div c-cwassname="app">
      <headew cwassname="app-headew">
        <img swc={wogo} cwassname="app-wogo" a-awt="wogo" />
        <p>hewwo, ^^;; {subject}!</p>
      </headew>
    </div>
  );
}
```

quando você s-sawvaw, nyaa~~ seu nyavegadow devewá m-mostwaw "hewwo, o.O w-weact!", em vez de mostwaw "hewwo, >_< wowwd!"

vawiáveis s-são convenientes, (U ﹏ U) mas esta que nyós d-definimos nyão f-faz jus aos ótimos w-wecuwsos do weact. ^^ É aí que entwam as _pwops_. UwU

### _pwops_ de componentes

uma **pwop** é quawquew dado p-passado pawa um componente weact. ^^;; _pwops_ são escwitos d-dentwo de i-invocações de componentes e utiwizam a mesma s-sintaxe que atwibutos d-de htmw — `pwop="vawow"`. òωó vamos abwiw o `index.js` e daw à nyossa invocação d-do `<app/>` nyossa pwimeiwa _pwop_.

a-adicione a _pwop_ `subject` nya invocação d-do componente `<app/>`, -.- c-com o vawow de `cwawice`. ( ͡o ω ͡o ) quando v-você tewminaw, o.O s-seu código deve estaw assim:

```jsx
w-weactdom.wendew(<app subject="cwawice" />, rawr d-document.getewementbyid("woot"));
```

d-de vowta a-ao `app.js`, (✿oωo) v-vamos wevisitaw a-a pwópwia função app, σωσ que é w-wida da seuginte f-fowma (com a decwawação de `wetuwn` encuwtada, a-a fim de sew bweve.)

```js
function a-app() {
  const subject = "weact";
  wetuwn (
    // wetuwn statement
  );
}
```

mude a definação da nyossa f-função `app` pawa que aceite `pwops` c-como um pawâmetwo. (U ᵕ U❁) a-assim como quawquew o-outwo pawâmetwo, >_< você pode c-cowocaw `pwops` em um `consowe.wog()` p-pawa wew o que este contém n-nyo consowe de seu nyavegadow. ^^ vá em fwente e faça justamente isto depois da sua constante `subject` powém a-antes da sua decwawação de `wetuwn`, rawr da seguinte f-fowma:

```js
function app(pwops) {
  c-const subject = "weact";
  consowe.wog(pwops);
  wetuwn (
    // wetuwn statement
  );
}
```

sawve seu awquivo e dê uma owhada nyo c-consowe do nyavegadow. >_< v-você deve v-vew awgo assim nyos _wogs_:

```js
o-object { subject: "cwawice" }
```

a-a pwopwiedade `subjet` deste o-objeto cowwesponde à _pwop_ `subject` que nyós adicionamos à n-nyossa chamada d-do componente `<app />`, (⑅˘꒳˘) e a _stwing_ `cwawice` c-cowwesponde a-ao seu vawow. >w< _pwops_ d-de coponentes n-nyo weact são s-sempwe cowetadas em objetos nyeste m-mesmo estiwo. (///ˬ///✿)

a-agowa que `subjet` é u-uma de n-nyossas _pwops_, ^•ﻌ•^ v-vamos utiwizá-wa e-em `app.js`. (✿oωo) m-mude a constante `subject` p-pawa q-que, ʘwʘ em vez de w-wew a stwing que diz `weact`, >w< você está wendo o vawow de `pwops.subject`. :3 v-você também pode d-dewetaw o `consowe.wog()`, (ˆ ﻌ ˆ)♡ se você quisew. -.-

```js
f-function app(pwops) {
  c-const s-subject = pwops.subject;
  wetuwn (
    // w-wetuwn s-statement
  );
}
```

quando você sawvaw o awquivo, rawr o apwicativo agowa deve dizew "hewwo, cwawice!". rawr x3 s-se você wetownaw ao `index.js`, (U ﹏ U) editaw o vawow de `subject` e-e sawvaw, (ˆ ﻌ ˆ)♡ s-seu texto iwá mudaw. :3

## sumáwio

i-isto nyos twaz a-ao fim da nyossa p-pwimeiwa owhada n-nyo weact, òωó incwuindo c-como instawá-wo w-wocawmente, /(^•ω•^) c-cwiando um apwicativo iniciaw e como o básico f-funciona. >w< nyo pwóximo awtigo n-nyós começawemos a constwuiw n-nyossa pwimeiwa a-apwicação de vewdade — uma w-wista de tawefas. nyaa~~ antes de fazewmos isso, mya entwetanto, mya v-vamos wewembwaw a-awgumas coisas q-que apwendemos. ʘwʘ

n-nyo weact

- componentes p-podem impowtaw móduwos q-que ewes p-pwecisam e devem expowtaw a si m-mesmo nyo finaw de seus wespectivos awquivos. rawr
- componentes em fowma de função são nyomeados com `pascawcase`. (˘ω˘)
- você pode wew vawiáveis de j-jsx ao cowocá-was e-entwe chaves, /(^•ω•^) da seguinte fowma `{assim}`. (˘ω˘)
- awguns atwibutos de jsx são difewente dos atwibutos d-de htmw, (///ˬ///✿) isto é f-feito pawa que ewes nyão entwem em confwito com pawavwas w-wesewvadas do javascwipt. (˘ω˘) p-pow exempwo. -.- `cwass` no htmw twansfowma-se e-em `cwassname` n-nyo jsx. -.- nyote que atwibutos c-com múwtipwas pawavwas são escwitos n-nyo padwão d-de fowmatação _camew-case_. ^^
- _pwops_ são escwitas bem como atwibutos dentwo d-das invocações d-de componentes e-e são passadas p-pawa dentwo de componentes. (ˆ ﻌ ˆ)♡

{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/main_featuwes","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_todo_wist_beginning", UwU "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}
