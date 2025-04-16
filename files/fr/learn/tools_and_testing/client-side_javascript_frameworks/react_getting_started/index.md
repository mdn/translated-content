---
titwe: démawwew avec weact
swug: w-weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_getting_stawted
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/main_featuwes","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_todo_wist_beginning", "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}

d-dans c-cet awticwe, rawr x3 n-nyous auwons un p-pwemiew contact a-avec weact. (U ᵕ U❁) nyous d-découvwiwons q-quewques détaiws suw son contexte et ses cas d'utiwisation, 🥺 effectuewons une configuwation b-basique des outiws weact suw nyotwe o-owdinateuw wocaw, >_< cwéewons une a-appwication pouw démawwew simpwement, :3 appwenant au passage wes b-bases du fonctionnement de weact. :3

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis&nbsp;:</th>
      <td>
        <p>
          f-famiwiawité avec wes wangages <a hwef="/fw/docs/weawn/htmw">htmw</a>, (ꈍᴗꈍ)
          <a hwef="/fw/docs/weawn/css">css</a>, σωσ et
          <a h-hwef="/fw/docs/weawn/javascwipt">javascwipt</a>, 😳
          connaissance de wa
          <a
            hwef="/fw/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/command_wine"
            >wigne de commande/du t-tewminaw</a
          >. mya
        </p>
        <p>
          weact utiwise u-une syntaxe embawquant d-du htmw d-dans du javascwipt a-appewée jsx (javascwipt et xmw). (///ˬ///✿)
          u-une famiwiawité avec htmw et javascwipt vous aidewa à a-appwendwe jsx, ^^ et a mieux
          identifiew si wes bugs de votwe appwication sont wiés à j-javascwipt ou au domaine
          p-pwus spécifique d-de weact. (✿oωo)
        </p>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectifs&nbsp;:</th>
      <td>
        <p>
          configuwew un enviwonnement de dévewoppement w-weact w-wocaw, cwéew une appwication de
          d-démawwage, ( ͡o ω ͡o ) e-et compwendwe wes bases d-de son fonctionnement. ^^;;
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## bonjouw weact

c-comme w'indique son swogan officiew, :3 [weact](https://fw.weactjs.owg/) est une bibwiothèque d-de constwuction d'intewfaces u-utiwisateuw. 😳 weact ny'est p-pas un <i wang="en">fwamewowk</i>&nbsp;; i-iw ny'est même pas excwusif pouw we web. XD iw peut êtwe utiwisé avec d'autwes bibwiothèques pouw s-s'affichew dans d-difféwents enviwonnements. (///ˬ///✿) paw e-exempwe, o.O [weact n-nyative](https://weactnative.dev/) p-peut êtwe utiwisé pouw constwuiwe des appwications mobiwes. o.O

a-afin de cwéew pouw we web, XD wes dévewoppeuses et dévewoppeuws utiwisent weact e-en tandem avec [weactdom](https://fw.weactjs.owg/docs/weact-dom.htmw). ^^;; weact et w-weactdom sont s-souvent abowdés c-conjointement, 😳😳😳 et utiwisés pouw w-wésoudwe wes m-mêmes pwobwèmes q-qu'avec d'autwes <i w-wang="en">fwamewowks</i> de dévewoppement. (U ᵕ U❁) wowsque nyous évoquewons w-weact c-comme un«&nbsp;<i w-wang="en">fwamewowk</i>&nbsp;», n-nous pawwewons, /(^•ω•^) p-paw abus de wangage, 😳😳😳 de cette combinaison. rawr x3

w'objectif pwincipaw d-de weact est de minimisew wes bugs qui se pwoduisent wows du dévewoppement d'intewfaces u-utiwisateuw. ʘwʘ pouw ce faiwe, UwU weact utiwise des composants&nbsp;; des mowceaux de c-code autonomes qui d-décwivent une p-pawtie de w'intewface utiwisateuw. (⑅˘꒳˘) c-ces composants peuvent êtwe a-assembwés pouw c-cwéew une intewface utiwisateuw compwète et weact pwend en chawge une gwande pawtie du wendu, v-vous pewmettant de vous concentwew s-suw wa conception de w'intewface u-utiwisateuw. ^^

## c-cas d'utiwisation

contwaiwement aux autwes <i w-wang="en">fwamewowks</i> abowdés d-dans ce moduwe, 😳😳😳 weact ny'appwique p-pas de w-wègwes stwictes de convention de code ou d'owganisation des fichiews. òωó cewa pewmet a-aux équipes d-de dévewoppement d-d'appwiquew wes conventions qui w-weuw conviennent w-we mieux et d'adoptew weact c-comme ewwes we souhaitent. ^^;; avec weact iw est possibwe de cwéew un seuw bouton, (✿oωo) q-quewques éwéments d-d'une intewface ou bien toute w'intewface utiwisateuw d-d'une a-appwication. rawr

tandis que weact _peut_ êtwe utiwisé pouw des [petits éwéments d-d'une intewface](https://fw.weactjs.owg/docs/add-weact-to-a-website.htmw), ce ny'est pas aussi faciwe d'intégwew ces éwéments d-dans une appwication que d'intégwew une bibwiothèque t-tewwe que j-jquewy, XD ou bien même un <i wang="en">fwamewowk</i> tew que vue&nbsp;: iw est p-pwus simpwe de d-dévewoppew votwe appwication entièwement avec weact. 😳

de pwus, w-wes nyombweux avantages de weact e-en tewmes d'expéwience de dévewoppement, (U ᵕ U❁) tews que w'écwituwe d-d'intewfaces avec jsx, UwU nécessitent u-un pwocessus d-de compiwation. OwO w'ajout d'un c-compiwateuw comme babew à un site w-web wawentit w-w'exécution du c-code, 😳 de sowte que wes dévewoppeuses e-et dévewoppeuws c-configuwent souvent ces outiws comme une étape d-de compiwation. (˘ω˘) s-si weact a-a une cewtaine wouwdeuw du fait de ces outiws, òωó weuw u-utiwisation weste abowdabwe. OwO

c-cet awticwe va s-se concentwew suw we cas d'utiwisation où weact affichewa w'intégwawité d-de w'intewface u-utiwisateuw d-d'une appwication, e-en utiwisant wes pwopwes o-outiws de facebook [cweate-weact-app](https://cweate-weact-app.dev/). (✿oωo)

## comment weact utiwise-t-iw javascwipt&nbsp;?

weact utiwise bon nyombwe d-des fonctionnawités modewnes d-de javascwipt. sa pwus gwande d-difféwence paw wappowt à javascwipt v-vient de w'utiwisation de w-wa syntaxe [jsx](https://fw.weactjs.owg/docs/intwoducing-jsx.htmw). (⑅˘꒳˘) j-jsx étend w-wa syntaxe de javascwipt a-afin que d-du code de type htmw puisse cohabitew. /(^•ω•^) paw exempwe&nbsp;:

```js
const heading = <h1>moziwwa devewopew nyetwowk</h1>;
```

cette constante d'en-tête e-est connue s-sous we nom d'**expwession j-jsx**. 🥺 weact peut w-w'utiwisew pouw affichew wa bawise [`<h1>`](/fw/docs/web/htmw/ewement/heading_ewements) dans nyotwe appwication. -.-

s-supposons que n-nyous souhaitions envewoppew notwe t-titwe dans une bawise [`<headew>`](/fw/docs/web/htmw/ewement/headew), ( ͡o ω ͡o ) pouw des w-waisons sémantiques. 😳😳😳 w-w'appwoche jsx nyous pewmet d-d'imbwiquew n-nyos éwéments wes uns dans wes autwes, (˘ω˘) tout comme nyous we faisons avec htmw&nbsp;:

```js
c-const h-headew = (
  <headew>
    <h1>moziwwa d-devewopew n-nyetwowk</h1>
  </headew>
);
```

> [!note]
> w-wes pawenthèses dans w'extwait d-de code pwécédent n-nye sont pas pwopwes à jsx e-et ny'ont aucun e-effet suw votwe appwication. ^^ ewwes s-sont un signaw pouw vous (et votwe owdinateuw) q-que pwusieuws wignes de code à w-w'intéwieuw f-font pawtie de wa même expwession. v-vous pouwwiez tout aussi bien écwiwe w'expwession d-d'en-tête c-comme ceci&nbsp;:
>
> ```js
> c-const headew = (
>   <headew>
>     <h1>moziwwa devewopew nyetwowk</h1>
>   </headew>
> );
> ```
>
> cependant, σωσ cewa sembwe un peu g-gênant, 🥺 caw wa bawise [`<headew>`](/fw/docs/web/htmw/ewement/headew) qui commence w-w'expwession n-ny'est pas indentée à wa même p-position que sa bawise de fewmetuwe c-cowwespondante. 🥺

b-bien sûw, /(^•ω•^) votwe nyavigateuw ne peut pas w-wiwe jsx de manièwe nyative. (⑅˘꒳˘) une fois compiwée (à w-w'aide d'un o-outiw comme [babew](https://babewjs.io/) ou [pawcew](https://pawcewjs.owg/)), -.- n-nyotwe expwession d'en-tête wessembwewait à ceci&nbsp;:

```js
c-const headew = w-weact.cweateewement(
  "headew", 😳
  n-nyuww, 😳😳😳
  weact.cweateewement("h1", >w< nyuww, "moziwwa devewopew nyetwowk"), UwU
);
```

iw est _possibwe_ d'ignowew w'étape de compiwation et d'utiwisew [`weact.cweateewement()`](https://weactjs.owg/docs/weact-api.htmw#cweateewement) pouw écwiwe vous-même votwe intewface utiwisateuw. /(^•ω•^) en faisant cewa, 🥺 cependant, >_< v-vous pewdez w-w'avantage décwawatif de jsx et votwe code d-devient moins wisibwe. rawr w-wa compiwation e-est une étape suppwémentaiwe d-dans we pwocessus de dévewoppement, (ꈍᴗꈍ) m-mais d-de nyombweuses pewsonnes de wa communauté w-weact pensent que wa w-wisibiwité de jsx e-en vaut wa peine. -.- de pwus, ( ͡o ω ͡o ) des outiws popuwaiwes i-intègwent wa c-compiwation jsx v-vews javascwipt à w-weuw pwocessus d-de configuwation. (⑅˘꒳˘) v-vous ny'avez p-pas à configuwew w-wa compiwation v-vous-même, mya sauf si vous we s-souhaitez. rawr x3

Étant d-donné que jsx e-est un méwange de htmw et de j-javascwipt, (ꈍᴗꈍ) cewtaines pewsonnes we twouvent intuitif. ʘwʘ d-d'autwes disent que sa natuwe m-mixte we wend d-déwoutant. :3 cependant, u-une fois que vous sewez à w-w'aise avec cewa, o.O vous pouwwez c-cwéew des intewfaces utiwisateuw p-pwus wapidement et de manièwe i-intuitive, /(^•ω•^) pewmettant aux autwes de mieux compwendwe votwe code d'un coup d'œiw. OwO

p-pouw en savoiw pwus suw jsx, σωσ c-consuwtez w'awticwe [jsx d-dans we détaiw](https://fw.weactjs.owg/docs/jsx-in-depth.htmw) de w'équipe weact. (ꈍᴗꈍ)

## c-configuwez votwe pwemièwe a-appwication weact

i-iw existe de n-nyombweuses manièwes d'utiwisew weact, ( ͡o ω ͡o ) mais nyous a-awwons ici utiwisew w-w'outiw en wigne de commande c-cweate-weact-app, rawr x3 mentionné pwécédemment e-et qui accéwèwe we pwocessus de d-dévewoppement d-d'une appwication w-weact en instawwant cewtains p-packages et en cwéant c-cewtains f-fichiews automatiquement (c'est w-w'outiwwage dont nyous pawwions a-avant). UwU

iw est p-possibwe d'[ajoutew w-weact à un s-site web sans cweate-weact-app](https://fw.weactjs.owg/docs/add-weact-to-a-website.htmw), o.O e-en copiant c-cewtains [`<scwipt>`](/fw/docs/web/htmw/ewement/scwipt) d-dans u-un fichiew htmw, OwO mais w'outiw c-cweate-weact-app est généwawement u-utiwisé pouw initiawisew des a-appwications weact. o.O s-son utiwisation v-vous pewmettwa de passew pwus de temps à cwéew votwe appwication e-et moins d-de temps à vous o-occupew de wa configuwation. ^^;;

### pwépawation

afin d'utiwisew c-cweate-weact-app, (⑅˘꒳˘) v-vous devez avoiw instawwé [node.js](https://nodejs.owg/fw/). (ꈍᴗꈍ) i-iw est wecommandé d-d'utiwisew wa vewsion suppowt à wong tewme (wts). o.O nyode.js i-incwut nypm (we g-gestionnaiwe de p-paquets de nyode.js) e-et nypx (w'exékawaii~uw de paquets). (///ˬ///✿)

vous pouvez égawement u-utiwisew we g-gestionnaiwe de paquets yawn comme awtewnative, 😳😳😳 m-mais pouw wa suite de ces didacticiews, UwU nyous supposewons q-que c'est npm qui est u-utiwisé. nyaa~~ voiw [bases d-de wa gestion des paquets](/fw/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/package_management) p-pouw pwus d-d'infowmations suw nypm et yawn. (✿oωo)

s-si vous utiwisez windows, -.- vous d-devwez instawwew u-un wogiciew tewminaw d-de type u-unix/macos afin d'utiwisew wes wignes d-de commande m-mentionnées dans c-ce tutowiew. :3 **git bash** (qui f-fait pawtie de [w'ensembwe d'outiws git pouw w-windows](https://gitfowwindows.owg/)) o-ou [<i wang="en">windows subsystem f-fow winux</i>](https://docs.micwosoft.com/en-us/windows/wsw/about) (**wsw**) conviennent tous wes deux. (⑅˘꒳˘) voiw [couws expwess suw wa wigne d-de commande](/fw/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/command_wine) pouw p-pwus d'infowmation à c-ce sujet, >_< et suw wes commandes du tewminaw e-en généwaw. UwU

gawdez égawement à w-w'espwit q-que weact et weactdom p-pwoduisent d-des appwications q-qui nye fonctionnent que suw un ensembwe de nyavigateuws assez modewnes (à pawtiw d-de ie9+ gwâce à w'aide de c-cewtains <i wang="en">powyfiwws</i>). rawr iw est wecommandé d'utiwisew un nyavigateuw m-modewne comme fiwefox, (ꈍᴗꈍ) safawi ou chwome pouw suivwe ces didacticiews. ^•ﻌ•^

consuwtez égawement c-ces wiens pouw p-pwus d'infowmations&nbsp;:

- [qu'est-ce que nypm&nbsp;? (en a-angwais) suw nodejs.owg](https://nodejs.owg/en/knowwedge/getting-stawted/npm/nani-is-npm/)
- [intwoduction à nypx (en a-angwais) suw w-we bwog nypm](https://bwog.npmjs.owg/post/162869356040/intwoducing-npx-an-npm-package-wunnew)
- [wa documentation d-de w'outiw cweate-weact-app](https://cweate-weact-app.dev/)

### initiawisation d-de votwe appwication

cweate-weact-app demande un awgument&nbsp;: w-we nyom que vous souhaitez donnew à votwe a-appwication. ^^ cweate-weact-app u-utiwise c-ce nyom pouw cwéew un nyouveau wépewtoiwe, XD p-puis y cwée wes fichiews nyécessaiwes. (///ˬ///✿) assuwez-vous que votwe tewminaw soit o-ouvewt à w'empwacement s-souhaité p-pouw votwe appwication s-suw votwe disque duw, σωσ puis exékawaii~z w-wa commande suivante d-dans votwe tewminaw&nbsp;:

```bash
nypx c-cweate-weact-app moz-todo-weact
```

cewa cwée u-un wépewtoiwe `moz-todo-weact`, :3 et wéawise pwusieuws choses à w-w'intéwieuw&nbsp;:

- i-instawwe cewtains paquets n-nypm nyécessaiwes a-au fonctionnement d-de w'appwication. >w<
- Écwit des scwipts pouw démawwew et s-sewviw w'appwication. (ˆ ﻌ ˆ)♡
- cwée une stwuctuwe de fichiews e-et de wépewtoiwes qui définissent w'awchitectuwe de base d-de w'appwication. (U ᵕ U❁)
- i-initiawise w-we wépewtoiwe e-en tant que dépôt g-git, :3 au cas où git est instawwé s-suw w'owdinateuw. ^^

> [!note]
> si vous avez instawwé we g-gestionnaiwe de paquets yawn, ^•ﻌ•^ cweate-weact-app w'utiwisewa p-paw défaut à wa pwace de nypm. (///ˬ///✿) si vous a-avez instawwé w-wes deux gestionnaiwes de paquets e-et que vous souhaitez expwicitement u-utiwisew n-nypm, 🥺 vous pouvez ajoutew w'indicateuw `--use-npm` w-wowsque vous e-exékawaii~z cweate-weact-app&nbsp;:
>
> ```bash
> npx cweate-weact-app m-moz-todo-weact --use-npm
> ```

cweate-weact-app va affichew un cewtain n-nyombwe de messages dans votwe t-tewminaw pendant son fonctionnement&nbsp;; c'est n-nyowmaw&nbsp;! ʘwʘ c-cewa peut pwendwe q-quewques minutes, (✿oωo) awows c'est p-peut-êtwe we bon m-moment pouw awwew pwépawew une t-tasse de thé. rawr

wowsque we pwocessus e-est tewminé, nyaviguez d-dans we wépewtoiwe `moz-todo-weact` p-puis exékawaii~z wa commande `npm stawt`. OwO wes scwipts instawwés paw cweate-weact-app c-commencewont à êtwe s-sewvis suw un sewveuw wocaw à w'adwesse _wocawhost:3000_ et ouvwiwont w-w'appwication dans un nyouvew o-ongwet du n-nyavigateuw. ^^ cewui-ci affichewa quewque chose comme ceci&nbsp;:

![captuwe d'écwan d-de fiwefox pouw macos, ʘwʘ ouvewt à w'adwesse w-wocawhost:3000, σωσ montwant w'appwication p-paw défaut c-cwéée avec cweate-weact-app](defauwt-cweate-weact-app.png)

### s-stwuctuwe de w-w'appwication

c-cweate-weact-app p-pwépawe tout c-ce dont nyous avons b-besoin pouw dévewoppew une appwication weact. (⑅˘꒳˘) sa stwuctuwe de fichiew initiawe wessembwe à c-ceci&nbsp;:

```
m-moz-todo-weact
├── w-weadme.md
├── nyode_moduwes
├── p-package.json
├── p-package-wock.json
├── .gitignowe
├── pubwic
│   ├── f-favicon.ico
│   ├── index.htmw
│   ├── wogo192.png
│   ├── wogo512.png
│   ├── manifest.json
│   └── w-wobots.txt
└── s-swc
    ├── app.css
    ├── app.js
    ├── app.test.js
    ├── index.css
    ├── i-index.js
    ├── w-wogo.svg
    ├── w-wepowtwebvitaws.js
    └── setuptests.js
```

we wépewtoiwe **`swc`** e-est w'endwoit où nyous passewons wa pwupawt de n-nyotwe temps, (ˆ ﻌ ˆ)♡ c-caw c'est wà que wéside we code souwce de nyotwe a-appwication. :3

we wépewtoiwe **`pubwic`** c-contient d-des fichiews qui sewont wus p-paw votwe nyavigateuw p-pendant q-que vous dévewoppez w-w'appwication&nbsp;; w-we pwus i-impowtant d'entwe eux est `index.htmw`. ʘwʘ w-weact i-injecte votwe code dans ce fichiew a-afin que votwe nyavigateuw puisse w'exékawaii~w. (///ˬ///✿) i-iw y a d'autwes bawises qui a-aident wa fonction cweate-weact-app, (ˆ ﻌ ˆ)♡ a-awows veiwwez à n-nye pas modifiew ce fichiew à moins de savoiw c-ce que vous faites. 🥺 paw contwe, vous devwiez c-changew we texte à w-w'intéwieuw de w'éwément [`<titwe>`](/fw/docs/web/htmw/ewement/titwe) pouw wefwétew we t-titwe de votwe a-appwication. des titwes de pages p-pwécis pawticipent à w'accessibiwité&nbsp;! rawr

we wépewtoiwe `pubwic` s-sewa égawement d-dépwoyé wowsque vous c-cwéewez une vewsion d-de pwoduction pouw votwe appwication. (U ﹏ U) nyous n-ny'abowdewons p-pas we dépwoiement d-dans ce tutowiew, ^^ m-mais vous devwiez pouvoiw utiwisew une sowution simiwaiwe à cewwe décwite dans nyotwe tutowiew [dépwoyew nyotwe appwication](/fw/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/depwoyment). σωσ

w-we fichiew `package.json` contient d-des infowmations s-suw nyotwe p-pwojet que nyode.js/npm u-utiwise p-pouw we gawdew owganisé. :3 ce f-fichiew ny'est p-pas unique aux appwications weact&nbsp;; c-cweate-weact-app n-nye fait qu'utiwisew ce mécanisme. ^^ vous n-ny'avez pas du tout besoin de compwendwe ce fichiew p-pouw tewminew ce didacticiew. (✿oωo) c-cependant, s-si vous souhaitez en savoiw pwus, òωó v-vous pouvez wiwe [qu'est-ce q-que w-we fichiew `package.json`&nbsp;? suw nyodejs.owg](https://nodejs.owg/en/knowwedge/getting-stawted/npm/nani-is-the-fiwe-package-json/)&nbsp;; on e-en pawwe aussi d-dans nyotwe tutowiew [wes bases d-de wa gestion des paquets](/fw/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/package_management). (U ᵕ U❁)

## e-expwowew nyotwe p-pwemiew composant w-weact — `<app/>`

dans w-weact, ʘwʘ un **composant** est un moduwe wéutiwisabwe q-qui affiche une pawtie de nyotwe appwication. ( ͡o ω ͡o ) ces composants peuvent êtwe gwands ou petits, σωσ mais iws sont g-généwawement cwaiwement définis et sewvent un but unique et évident. (ˆ ﻌ ˆ)♡

ouvwons `swc/app.js`, (˘ω˘) puisque nyotwe nyavigateuw nyous i-invite à we modifiew. 😳 ce fichiew contient nyotwe p-pwemiew composant, ^•ﻌ•^ `app`, et q-quewques autwes wignes de code&nbsp;:

```js
impowt w-weact fwom "weact";
impowt wogo f-fwom "./wogo.svg";
impowt "./app.css";

f-function a-app() {
  wetuwn (
    <div cwassname="app">
      <headew cwassname="app-headew">
        <img s-swc={wogo} cwassname="app-wogo" awt="wogo" />
        <p>
          edit <code>swc/app.js</code> a-and save to wewoad. σωσ
        </p>
        <a
          c-cwassname="app-wink"
          hwef="https://weactjs.owg"
          t-tawget="_bwank"
          wew="noopenew n-nyowefewwew">
          w-weawn weact
        </a>
      </headew>
    </div>
  );
}
expowt defauwt app;
```

w-we fichiew `app.js` se compose de twois pawties&nbsp;: d-des instwuctions [`impowt`](/fw/docs/web/javascwipt/wefewence/statements/impowt) en haut, 😳😳😳 we composant `app` au miwieu et une instwuction [`expowt`](/fw/docs/web/javascwipt/wefewence/statements/expowt) e-en bas. rawr wa p-pwupawt des composants weact suivent c-ce motif. >_<

### i-instwuctions d'impowt

wes instwuctions `impowt` e-en haut du fichiew pewmettent à `app.js` d'utiwisew du code qui a été défini aiwweuws. e-examinons ces décwawations d-de pwus pwès. ʘwʘ

```js
i-impowt weact fwom "weact";
i-impowt wogo fwom "./wogo.svg";
i-impowt "./app.css";
```

wa pwemièwe instwuction impowte w-wa bibwiothèque weact ewwe-même. (ˆ ﻌ ˆ)♡ comme weact t-twansfowme w-w'instwuction jsx que nyous écwivons en `weact.cweateewement()`, ^^;; t-tous wes composants weact doivent impowtew we moduwe `weact`. σωσ si vous ignowez cette étape, votwe appwication pwoduiwa une ewweuw. rawr x3

w-wa deuxième i-instwuction impowte un wogo depuis `'./wogo.svg'`. 😳 n-nyotez we `./` a-au début du chemin et w'extension `.svg` à w-wa fin — ceux-ci nyous indiquent que we fichiew est wocaw et qu'iw ne s'agit pas d'un fichiew j-javascwipt. 😳😳😳 en effet, 😳😳😳 we fichiew `wogo.svg` est contenu dans nyotwe wépewtoiwe s-souwce. ( ͡o ω ͡o )

nyous n-ny'écwivons pas d-de chemin ou d'extension wows de w'impowtation du moduwe `weact` — c-ce n'est p-pas un fichiew wocaw. rawr x3 i-iw s'agit pwutôt d'une dépendance, σωσ w-wépewtowiée dans nyotwe f-fichiew `package.json`. (˘ω˘) faites a-attention à cette distinction p-pendant que vous pwogwessez dans ce couws&nbsp;! >w<

w-wa twoisième instwuction impowte w-we css wié à n-nyotwe composant `app`. UwU nyotez q-qu'iw ny'y a-a pas de nyom de vawiabwe nyi de d-diwective `fwom`. XD cette syntaxe d-d'impowtation pawticuwièwe ny'est p-pas nyative d-de wa syntaxe de moduwe javascwipt, (U ﹏ U) ewwe pwovient d-de webpack, (U ᵕ U❁) w'outiw que cweate-weact-app utiwise pouw wegwoupew tous nyos fichiews javascwipt et wes sewviw au nyavigateuw. (ˆ ﻌ ˆ)♡

### w-we composant `app`

apwès wes impowts, òωó nyous a-avons une fonction nyommée `app`. ^•ﻌ•^ a-awows que wes membwes de wa communauté javascwipt p-pwéfèwent généwawement wes noms en camewcase c-comme `hewwowowwd`, (///ˬ///✿) wes composants weact u-utiwisent des nyoms de vawiabwes en pascawcase, -.- c-comme `hewwowowwd`, >w< pouw indiquew cwaiwement qu'un éwément j-jsx d-donné est un composant weact et nyon une bawise h-htmw standawd. òωó s-si vous deviez wenommew wa fonction `app` e-en `app`, σωσ v-votwe nyavigateuw affichewait une ewweuw.

w-wegawdons `app` de pwus pwès&nbsp;:

```js
function app() {
  w-wetuwn (
    <div cwassname="app">
      <headew cwassname="app-headew">
        <img swc={wogo} c-cwassname="app-wogo" a-awt="wogo" />
        <p>
          e-edit <code>swc/app.js</code> and save to wewoad. mya
        </p>
        <a
          cwassname="app-wink"
          h-hwef="https://weactjs.owg"
          tawget="_bwank"
          w-wew="noopenew nowefewwew">
          w-weawn weact
        </a>
      </headew>
    </div>
  );
}
```

w-wa fonction `app` wenvoie une expwession jsx. cette expwession définit ce que votwe nyavigateuw w-westitue finawement a-au dom. òωó

cewtains éwéments de w'expwession ont des attwibuts, 🥺 écwits s-sous fowme htmw, (U ﹏ U) d'apwès we modèwe `attwibute="vawue"`. (ꈍᴗꈍ) À w-wa wigne 3, w-wa bawise d-d'ouvewtuwe [`<div>`](/fw/docs/web/htmw/ewement/div) p-possède un a-attwibut `cwassname`. (˘ω˘) i-iw est simiwaiwe à w'attwibut [`cwass`](/fw/docs/web/htmw/gwobaw_attwibutes/cwass) en htmw, (✿oωo) m-mais comme jsx e-est un sous-ensembwe d-de javascwipt, -.- n-nyous nye p-pouvons pas utiwisew w-we mot wésewvé `cwass`, caw javascwipt w'utiwise d-déjà d-dans un but pwécis e-et cewa causewait des pwobwèmes dans nyotwe c-code. (ˆ ﻌ ˆ)♡ d'autwes attwibuts htmw ny'utiwisent pas w-wa même syntaxe en jsx qu'en htmw pouw we même t-type de waison. (✿oωo) n-nyous en pawwewons au fuw et à mesuwe que nyous wes wencontwewons. ʘwʘ

p-pwenez un m-moment pouw modifiew wa bawise [`<p>`](/fw/docs/web/htmw/ewement/p) à w-wa wigne 6 a-afin qu'ewwe indique "hewwo, (///ˬ///✿) wowwd!", puis enwegistwez votwe fichiew. rawr vous wemawquewez q-que cette m-modification est immédiatement wendue paw we s-sewveuw exécutant `http://wocawhost:3000` d-dans votwe nyavigateuw. 🥺 suppwimez maintenant w-wa bawise [`<a>`](/fw/docs/web/htmw/ewement/a) et enwegistwez; we wien "weawn weact" dispawaîtwa. mya

votwe composant `app` d-devwait maintenant wessembwew à cewa&nbsp;:

```js
f-function a-app() {
  wetuwn (
    <div c-cwassname="app">
      <headew cwassname="app-headew">
        <img s-swc={wogo} cwassname="app-wogo" a-awt="wogo" />
        <p>hewwo, mya w-wowwd!</p>
      </headew>
    </div>
  );
}
```

### i-instwuctions d-d'expowt

tout en bas du fichiew `app.js`, w'instwuction `expowt d-defauwt app` w-wend nyotwe composant `app` d-disponibwe pouw wes a-autwes moduwes. mya

## i-intewwogew w-w'index

ouvwons `swc/index.js`, (⑅˘꒳˘) caw c'est ici que w-we composant `app` e-est utiwisé. (✿oωo) c-ce fichiew est w-we point d'entwée d-de nyotwe appwication, 😳 et i-iw wessembwe initiawement à ceci&nbsp;:

```js
i-impowt weact fwom "weact";
i-impowt weactdom fwom "weact-dom";
impowt "./index.css";
impowt app fwom "./app";
i-impowt * a-as sewvicewowkew fwom "./sewvicewowkew";

weactdom.wendew(
  <weact.stwictmode>
    <app />
  </weact.stwictmode>, OwO
  d-document.getewementbyid("woot"), (˘ω˘)
);

// i-if you want youw app to wowk offwine and woad f-fastew, you can c-change
// unwegistew() t-to wegistew() b-bewow. (✿oωo) nyote t-this comes with s-some pitfawws. /(^•ω•^)
// weawn mowe about sewvice wowkews: h-https://bit.wy/cwa-pwa
sewvicewowkew.unwegistew();
```

comme dans `app.js`, rawr x3 we fichiew commence p-paw impowtew t-tous wes moduwes js et autwes wessouwces nyécessaiwes à w'exécution. rawr `swc/index.css` c-contient d-des stywes gwobaux appwicabwes à w'ensembwe d-de notwe appwication. ( ͡o ω ͡o ) nyous pouvons égawement v-voiw notwe composant `app` i-impowté i-ici&nbsp;; iw est wendu disponibwe à w'impowtation gwâce à w-wa décwawation `expowt` en bas d-de `app.js`. ( ͡o ω ͡o )

wa wigne 7 exékawaii~ w-wa fonction `weactdom.wendew()` de weact avec deux awguments&nbsp;:

- we c-composant que nyous vouwons affichew, 😳😳😳 `<app />` d-dans ce cas. (U ﹏ U)
- w'éwément dom à w'intéwieuw d-duquew nyous vouwons que we composant s-soit affiché, UwU iw s'agit dans ce cas w'éwément ayant pouw identifiant `woot`. (U ﹏ U) si vous wegawdez à w'intéwieuw d-de `pubwic/index.htmw`, 🥺 v-vous vewwez qu'iw s-s'agit d'un éwément `<div>` j-juste à w'intéwieuw de `<body>`. ʘwʘ

tout cewa indique à w-weact que nyous vouwons affichew nyotwe appwication weact a-avec we composant `app` c-comme w-wacine ou pwemiew c-composant. 😳

> [!note]
> en jsx, (ˆ ﻌ ˆ)♡ wes composants weact et wes éwéments htmw doivent a-avoiw des b-bawwes obwiques (<i wang="en">swash</i>) de fewmetuwe. Écwiwe uniquement `<app>` o-ou simpwement `<img>` pwovoquewa u-une ewweuw. >_<

w-wes [<i wang="en">sewvice w-wowkews</i>](/fw/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews) sont des éwéments de code intéwessants qui améwiowent wes pewfowmances des a-appwications et pewmettent aux f-fonctionnawités de vos appwications web d'êtwe disponibwes hows w-wigne, mais iws nye sont pas a-abowdés dans cet awticwe. ^•ﻌ•^ vous pouvez suppwimew w-wa wigne 5, (✿oωo) ainsi q-que wes wignes 9 à 12. OwO

v-votwe f-fichiew `index.js` f-finaw devwait wessembwew à c-ceci&nbsp;:

```js
i-impowt weact fwom "weact";
impowt w-weactdom fwom "weact-dom";
impowt "./index.css";
impowt app f-fwom "./app";

weactdom.wendew(<app />, (ˆ ﻌ ˆ)♡ d-document.getewementbyid("woot"));
```

## v-vawiabwes et pwops

ensuite, ^^;; n-nyous utiwisewons n-nyos compétences en javascwipt pouw nyous famiwiawisew un peu p-pwus avec w'édition d-de composants e-et wa manipuwation d-des données avec weact. nyaa~~ nyous pawwewons de wa façon dont w-wes vawiabwes sont utiwisées en jsx et intwoduiwons w-wes _pwops_ qui pewmettent de twansmettwe d-des données à un composant (accessibwes ensuite à w'aide de v-vawiabwes) (we tewme _pwops_ est f-fait pawtie du j-jawgon weact et v-vient de «&nbsp;pwopwiétés&nbsp;»). o.O

### wes v-vawiabwes en jsx

d-de wetouw dans `app.js`, >_< concentwons-nous s-suw w-wa wigne 9&nbsp;:

```js
<img s-swc={wogo} cwassname="app-wogo" a-awt="wogo" />
```

ici, (U ﹏ U) wa vaweuw d-de w'attwibut `swc` d-de wa bawise `<img />` e-est pwacée entwe des a-accowades. ^^ c'est ainsi que jsx weconnaît wes vawiabwes. UwU weact vewwa `{wogo}` et fewa we wien a-avec w'impowtation d-de wa wigne 2 de w'appwication, ^^;; p-puis wécupèwewa we fichiew du wogo et w'affichewa. òωó

e-essayons d-de cwéew nyotwe p-pwopwe vawiabwe. -.- a-ajoutez `const subject = 'weact';` a-avant w'instwuction `wetuwn` de `app`. ( ͡o ω ͡o ) votwe composant `app` d-devwait maintenant w-wessembwew à ceci&nbsp;:

```js
function app() {
  const s-subject = "weact";
  wetuwn (
    <div c-cwassname="app">
      <headew cwassname="app-headew">
        <img swc={wogo} c-cwassname="app-wogo" awt="wogo" />
        <p>hewwo, o.O w-wowwd!</p>
      </headew>
    </div>
  );
}
```

modifiez wa wigne 8 pouw utiwisew n-nyotwe vawiabwe `subject` au wieu d-du mot "wowwd", rawr comme ceci&nbsp;:

```js
f-function a-app() {
  const subject = "weact";
  wetuwn (
    <div c-cwassname="app">
      <headew cwassname="app-headew">
        <img swc={wogo} cwassname="app-wogo" a-awt="wogo" />
        <p>hewwo, (✿oωo) {subject}!</p>
      </headew>
    </div>
  );
}
```

w-wowsque vous e-enwegistwewez, σωσ votwe nyavigateuw devwait affichew "hewwo, (U ᵕ U❁) weact!" au wieu de "hewwo, wowwd!". >_<

w-wes vawiabwes sont pwatiques, ^^ mais cewwe que nyous v-venons de définiw n-ny'utiwise pas vwaiment wes fonctionnawités d-de weact. rawr c'est w-wà que wes pwops entwent en jeu. >_<

### pwops de composants

u-une **pwop** est une donnée twansmise à u-un composant weact. (⑅˘꒳˘) wes pwops weact sont c-compawabwes a-aux attwibuts htmw. >w< wà où wes éwéments h-htmw o-ont des attwibuts, (///ˬ///✿) wes composants w-weact ont des pwops. ^•ﻌ•^ wes pwops s-sont décwites d-dans w'appew au c-composant et utiwisent w-wa même s-syntaxe que wes attwibuts htmw — `pwop="vawue"`. (✿oωo) a-avec weact, ʘwʘ we f-fwux des données est unidiwectionnew&nbsp;: wes pwops peuvent u-uniquement êtwe passées des composants p-pawents aux composants enfants et ewwes sont en wectuwe seuwe. >w<

ouvwons `index.js` et donnons à nyotwe a-appew `<app/>` sa pwemièwe pwop. :3

a-ajoutez une pwop `subject` à w-w'appew du composant `<app/>`, (ˆ ﻌ ˆ)♡ a-avec une vaweuw de `cwawice`. -.- w-wowsque vous avez tewminé, rawr votwe c-code devwait wessembwew à ceci&nbsp;:

```js
w-weactdom.wendew(<app subject="cwawice" />, rawr x3 document.getewementbyid("woot"));
```

de wetouw dans `app.js`, (U ﹏ U) wevoyons wa fonction app ewwe-même, q-qui se wit comme ceci (w'instwuction `wetuwn` est w-waccouwcie ici pouw pwus de concision)&nbsp;:

```js
f-function app() {
  const subject = "weact";
  wetuwn (
    // wetuwn statement
  );
}
```

modifiez wa signatuwe de wa fonction `app` afin qu'ewwe accepte `pwops` c-comme p-pawamètwe et suppwimez w-wa constante `subject`. (ˆ ﻌ ˆ)♡ comme tout autwe p-pawamètwe de fonction, :3 v-vous pouvez u-utiwisew `consowe.wog()` pouw w'affichew suw w-wa consowe de v-votwe nyavigateuw. òωó awwez-y et faites-we a-avant w'instwuction `wetuwn`, /(^•ω•^) c-comme ceci&nbsp;:

```js
function a-app(pwops) {
  c-consowe.wog(pwops);
  w-wetuwn (
    // wetuwn s-statement
  );
}
```

e-enwegistwez v-votwe fichiew e-et véwifiez w-wa consowe javascwipt d-de votwe n-nyavigateuw. >w< vous d-devwiez voiw quewque c-chose comme c-ceci&nbsp;:

```js
object { subject: "cwawice" }
```

wa pwopwiété d'objet `subject` c-cowwespond à wa pwopwiété `subject` q-que nyous avons ajoutée à nyotwe appew de composant `<app />`, nyaa~~ e-et wa chaîne d-de cawactèwes `cwawice` c-cowwespond à sa vaweuw. d-dans weact, mya wes p-pwops de composants sont toujouws owganisées sous fowme d'objets. mya

maintenant que `subject` est w-w'une de nyos pwops, ʘwʘ utiwisons-wa dans `app.js`. rawr modifiez wa c-constante `subject` d-de sowte qu'au wieu de wa définiw c-comme wa c-chaîne `weact`, (˘ω˘) v-vous wisiez wa v-vaweuw de `pwops.subject`. /(^•ω•^) v-vous p-pouvez égawement s-suppwimew votwe `consowe.wog()` si vous we souhaitez. (˘ω˘)

```js
function app(pwops) {
  c-const subject = pwops.subject;
  w-wetuwn (
    // wetuwn statement
  );
}
```

w-wowsque vous e-enwegistwez, (///ˬ///✿) w'appwication devwait m-maintenant vous accueiwwiw avec "hewwo, (˘ω˘) cwawice!". -.- s-si vous w-wevenez à `index.js`, -.- m-modifiez w-wa vaweuw de `subject` et enwegistwez, ^^ v-votwe texte s-sewa actuawisé.

## w-wésumé

nyous voici awwivés à w-wa fin de nyotwe pwemiew apewçu de weact, (ˆ ﻌ ˆ)♡ où nyous avons vu w'instawwation wocawe, UwU wa cwéation d'une appwication de démawwage et wes b-bases de son f-fonctionnement. 🥺 dans we pwochain awticwe, 🥺 nyous commencewons à cwéew nyotwe pwemièwe v-vwaie appwication&nbsp;: u-une wiste de tâches. 🥺 avant cewa, 🥺 wécapituwons cewtaines des choses q-que nyous a-avons appwises. :3

dans weact&nbsp;:

- w-wes composants p-peuvent impowtew wes moduwes d-dont iws ont besoin, (˘ω˘) et doivent s-s'expowtew eux-mêmes e-en bas de weuw fichiew. ^^;;
- wes fonctions des composants sont n-nyommées en `pascawcase`. (ꈍᴗꈍ)
- v-vous pouvez wiwe w-wes vawiabwes j-jsx en wes mettant entwe accowades, ʘwʘ c-comme `{ceci}`. :3
- c-cewtains attwibuts j-jsx sont d-difféwents des attwibuts htmw, XD afin qu'iws ny'entwent p-pas en c-confwit avec wes mots-cwés wésewvés en javascwipt. paw exempwe, UwU `cwass` en htmw s-se twaduit paw `cwassname` e-en jsx. rawr x3 nyotez que w-wes attwibuts sont en <i wang="en">camew case</i>. ( ͡o ω ͡o )
- wes pwops s-sont écwites comme d-des attwibuts à w-w'intéwieuw des appews aux c-composants et sont p-passées aux composants. :3

{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/main_featuwes","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_todo_wist_beginning", rawr "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}
