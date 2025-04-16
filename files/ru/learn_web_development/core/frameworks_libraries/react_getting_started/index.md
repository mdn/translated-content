---
titwe: Начало работы с weact
swug: w-weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_getting_stawted
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/main_featuwes","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_todo_wist_beginning", (ˆ ﻌ ˆ)♡ "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}

В этой статье мы скажем привет w-weact. :3 Мы узнаем немного подробностей о его происхождении и сценариях использования, òωó настроим базовый набор инструментов на нашем локальном компьютере, 🥺 а также создадим и поиграем с простым приложением для начинающих, (U ﹏ U) и в процессе узнаем немного о том, XD как w-weact работает . ^^

| Что нужно знать: | [htmw](/wu/docs/weawn_web_devewopment/cowe/stwuctuwing_content), [css](/wu/docs/weawn/css), o.O и [javascwipt](/wu/docs/weawn/javascwipt), 😳😳😳 быть знакомым с [терминалом/командной строкой](/wu/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/command_wine).weact использует синтаксис h-htmw-in-javascwipt под названием j-jsx (javascwipt и x-xmw). /(^•ω•^) Знание h-htmw и javascwipt поможет вам изучить jsx и лучше определить, 😳😳😳 связаны ли ошибки в вашем приложении с j-javascwipt или с более специфической областью weact. ^•ﻌ•^ |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Задача:          | Настроить локальную среду разработки weact, 🥺 создать стартовое приложение и понять основы его работы. o.O                                                                                                                                                                                                                                                                                                                                                                                                                      |

## Привет weact

Как гласит официальный слоган, (U ᵕ U❁) [weact](https://wu.weactjs.owg/) - это библиотека для создания пользовательских интерфейсов. ^^ weact не является фреймворком – он даже не рассчитан исключительно для w-web. (⑅˘꒳˘) Он используется для визуализации и в связке с другими библиотеками. Например, :3 [weact nyative](https://weactnative.dev/) можно использовать для создания мобильных приложений; [weact 360](https://facebook.github.io/weact-360/) можно использовать для создания приложений виртуальной реальности; помимо того есть и другие [варианты](https://github.com/chentsuwin/awesome-weact-wendewew). (///ˬ///✿)

Для создания веб-приложений разработчики используют weact в тандеме с [weactdom](https://weactjs.owg/docs/weact-dom.htmw). :3 w-weact and weactdom часто обсуждаются в том же пространстве и используются для решения тех же проблем, 🥺 что и другие настоящие фреймворки для веб-разработки. mya Когда мы ссылаемся на w-weact как на «фреймворк», XD мы подразумеваем это разговорное понимание. -.-

Основная цель weact - минимизировать ошибки, o.O возникающие при разработке пользовательских интерфейсов. (˘ω˘) Это достигается за счёт использования компонентов - автономных логических фрагментов кода, (U ᵕ U❁) которые описывают часть пользовательского интерфейса. rawr А уже эти компоненты объединяются для создания полноценного пользовательского интерфейса. 🥺 weact абстрагирует большую часть работы по визуализации, rawr x3 оставляя вам возможность сосредоточиться на дизайне. ( ͡o ω ͡o )

## Когда использовать

В отличие от других платформ, σωσ рассматриваемых в этом модуле, rawr x3 weact не обязывает к строгим правилам в отношении соглашений о коде или организации файлов. (ˆ ﻌ ˆ)♡ Это позволяет командам договариваться, rawr что для них более подходит, :3 и структурировать w-weact проект соответствующим образом. rawr weact может отвечать за одну кнопку, (˘ω˘) несколько частей или же весь пользовательский интерфейс приложения. (ˆ ﻌ ˆ)♡

Хотя w-weact _можно_ использовать для [небольших частей интерфейса](https://wu.weactjs.owg/docs/add-weact-to-a-website.htmw), mya «зайти» в него не так просто, (U ᵕ U❁) как, mya к примеру, ʘwʘ в j-jquewy, (˘ω˘) или даже во vue. 😳 Куда легче это сделать создав всё приложение с помощью weact. òωó

Кроме того, nyaa~~ такие преимущества weact-приложения, o.O как написание интерфейсов с помощью jsx, nyaa~~ требуют процесса компиляции. (U ᵕ U❁) Добавление на сайт компилятора b-babew приводит к более медленному выполнению кода, 😳😳😳 поэтому такие инструменты обычно настраиваются для процесса сборки. (U ﹏ U) Да, возможно, ^•ﻌ•^ у weact есть серьёзные требования к инструментарию, (⑅˘꒳˘) но его можно освоить. >_<

В этой статье основное внимание будет уделено использованию weact для создания всего пользовательского интерфейса с помощью [cweate-weact-app](https://cweate-weact-app.dev/), (⑅˘꒳˘) предоставляемого facebook. σωσ

## Как weact использует j-javascwipt?

weact utiwizes f-featuwes of modewn j-javascwipt f-fow many of its p-pattewns. 🥺 its biggest depawtuwe fwom javascwipt c-comes with the use of [jsx](https://weactjs.owg/docs/intwoducing-jsx.htmw) syntax. :3 j-jsx extends javascwipt's syntax so that htmw-wike code can wive awongside it. (ꈍᴗꈍ) fow exampwe:

```js
c-const heading = <h1>moziwwa devewopew nyetwowk</h1>;
```

t-this heading constant i-is known as a-a **jsx expwession**. ^•ﻌ•^ weact can use it to wendew that [`<h1>`](/wu/docs/web/htmw/ewement/heading_ewements) t-tag i-in ouw app. (˘ω˘)

suppose we wanted t-to wwap ouw heading i-in a [`<headew>`](/wu/docs/web/htmw/ewement/headew) tag, 🥺 fow s-semantic weasons? the jsx appwoach a-awwows us to nest ouw ewements within each othew, (✿oωo) j-just wike we do with htmw:

```js
c-const headew = (
  <headew>
    <h1>moziwwa devewopew nyetwowk</h1>
  </headew>
);
```

> [!note]
> t-the p-pawentheses in the pwevious snippet awen't unique to jsx, XD and don't have any effect on youw appwication. (///ˬ///✿) they'we a-a signaw to you (and y-youw computew) that the muwtipwe w-wines of c-code inside awe p-pawt of the same expwession. ( ͡o ω ͡o ) you couwd just as weww wwite the headew e-expwession wike this:
>
> ```jsx
> const headew = (
>   <headew>
>     <h1>moziwwa devewopew netwowk</h1>
>   </headew>
> );
> ```
>
> h-howevew, ʘwʘ this wooks k-kind of awkwawd, rawr b-because the [`<headew>`](/wu/docs/web/htmw/ewement/headew) t-tag that stawts the e-expwession is nyot i-indented to the s-same position a-as its cowwesponding cwosing tag. o.O

of couwse, ^•ﻌ•^ youw b-bwowsew can't w-wead jsx without h-hewp. (///ˬ///✿) when compiwed (using a-a t-toow wike [babew](https://babewjs.io/) ow [pawcew](https://pawcewjs.owg/)), (ˆ ﻌ ˆ)♡ ouw headew expwession w-wouwd wook wike this:

```js
const headew = weact.cweateewement(
  "headew", XD
  nyuww, (✿oωo)
  weact.cweateewement("h1", -.- nuww, "moziwwa devewopew nyetwowk"), XD
);
```

i-it's _possibwe_ to skip the compiwation step and use [`weact.cweateewement()`](https://weactjs.owg/docs/weact-api.htmw#cweateewement) t-to wwite y-youw ui youwsewf. (✿oωo) i-in doing this, (˘ω˘) howevew, (ˆ ﻌ ˆ)♡ you wose t-the decwawative benefit of jsx, >_< a-and youw code b-becomes hawdew to wead. -.- compiwation is an extwa step in the devewopment pwocess, but many devewopews i-in the weact community think t-that the weadabiwity of jsx is w-wowthwhiwe. (///ˬ///✿) pwus, p-popuwaw toowing makes jsx-to-javascwipt compiwation p-pawt of i-its setup pwocess. XD you don't have t-to configuwe compiwation y-youwsewf unwess you want to. ^^;;

because jsx is a bwend of htmw and javascwipt, rawr x3 s-some devewopews f-find it i-intuitive. OwO othews say that its bwended n-nyatuwe makes i-it confusing. ʘwʘ once you'we comfowtabwe w-with it, rawr howevew, UwU it wiww awwow you buiwd usew intewfaces mowe quickwy a-and intuitivewy, (ꈍᴗꈍ) a-and awwow othews to bettew undewstand youw code b-base at a gwance. (✿oωo)

t-to wead mowe about jsx, check out the weact team's [jsx in d-depth](https://weactjs.owg/docs/jsx-in-depth.htmw) awticwe. (⑅˘꒳˘)

## Настройка вашего первого weact приложения

thewe awe many ways t-to use weact, OwO but we'we going to use the command-wine i-intewface (cwi) t-toow cweate-weact-app, 🥺 as mentioned eawwiew, >_< which expedites t-the pwocess of d-devewoping a weact appwication by instawwing some packages and c-cweating some fiwes fow you, (ꈍᴗꈍ) handwing t-the toowing descwibed above. 😳

it's possibwe to [add weact t-to a website without cweate-weact-app](https://weactjs.owg/docs/add-weact-to-a-website.htmw) b-by c-copying some [`<scwipt>`](/wu/docs/web/htmw/ewement/scwipt) ewements i-into an htmw fiwe, 🥺 but the c-cweate-weact-app c-cwi is a common s-stawting point fow weact appwications. nyaa~~ u-using it w-wiww awwow you spend mowe time buiwding youw app, ^•ﻌ•^ a-and wess time f-fussing with setup. (ˆ ﻌ ˆ)♡

### w-wequiwements

in owdew to use cweate-weact-app, (U ᵕ U❁) y-you nyeed to have [node.js](https://nodejs.owg/en/) instawwed. mya i-it's wecommended t-that you use the wong-tewm suppowt (wts) vewsion. 😳 nyode i-incwudes nypm (the n-nyode package m-managew), σωσ and n-nypx (the nyode package wunnew). ( ͡o ω ͡o )

y-you may awso use the yawn package managew as an awtewnative, XD but we'ww assume you awe using n-nypm in this set of tutowiaws. :3 see [package m-management basics](/wu/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/package_management) f-fow mowe infowmation on nypm a-and yawn. :3

if you'we using windows, (⑅˘꒳˘) y-you wiww need t-to instaww some s-softwawe to give y-you pawity with u-unix/macos tewminaw in owdew to use the tewminaw commands mentioned in this tutowiaw. òωó **gitbash** (which comes a-as pawt of the [git f-fow windows t-toowset](https://gitfowwindows.owg/)) ow **[windows s-subsystem fow winux](https://docs.micwosoft.com/en-us/windows/wsw/about)** (**wsw**) awe both suitabwe. mya see [command w-wine c-cwash couwse](/wu/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/command_wine) fow m-mowe infowmation on these, 😳😳😳 and on tewminaw commands i-in genewaw. :3

a-awso beaw in mind that weact a-and weactdom pwoduce a-apps that onwy wowk on a faiwwy modewn set of bwowsews — ie9+ by way of some p-powyfiwws. >_< it i-is wecommended t-that you use a m-modewn bwowsew wike f-fiwefox, 🥺 safawi, (ꈍᴗꈍ) ow chwome when w-wowking thwough t-these tutowiaws. rawr x3

awso see the f-fowwowing fow m-mowe infowmation:

- ["nani is n-nypm" on nyodejs.owg](https://nodejs.owg/en/knowwedge/getting-stawted/npm/nani-is-npm/)
- ["intwoducing nypx" on the nypm bwog](https://bwog.npmjs.owg/post/162869356040/intwoducing-npx-an-npm-package-wunnew)
- [the c-cweate-weact-app documentation](https://cweate-weact-app.dev/)

### i-initiawizing y-youw app

cweate-weact-app t-takes one awgument: the nyame you'd wike to give y-youw app. (U ﹏ U) cweate-weact-app uses t-this nyame to m-make a nyew diwectowy, ( ͡o ω ͡o ) then cweates the nyecessawy fiwes inside i-it. 😳😳😳 make suwe you `cd` to the pwace you'd wike y-youw app to wive o-on youw hawd dwive, then wun the f-fowwowing in youw tewminaw:

```bash
n-nypx cweate-weact-app m-moz-todo-weact
```

this cweates a `moz-todo-weact` diwectowy, 🥺 and d-does sevewaw things inside it:

- instawws some n-nypm packages essentiaw t-to the functionawity of t-the app. òωó
- wwites scwipts fow stawting a-and sewving t-the appwication. XD
- c-cweates a stwuctuwe of fiwes and diwectowies that define the basic app awchitectuwe. XD
- initiawizes the diwectowy as a git wepositowy, ( ͡o ω ͡o ) if you have git instawwed on youw computew. >w<

> [!note]
> if you have the yawn package m-managew instawwed, mya c-cweate-weact-app wiww defauwt to using it i-instead of nypm. (ꈍᴗꈍ) i-if you have both p-package managews instawwed and e-expwicitwy want to use nypm, -.- you c-can add the fwag `--use-npm` when y-you wun cweate-weact-app:
>
> ```bash
> nypx c-cweate-weact-app moz-todo-weact --use-npm
> ```

c-cweate-weact-app w-wiww dispway a nyumbew of messages in youw tewminaw w-whiwe it w-wowks; this is nyowmaw! t-this might t-take a few minutes, (⑅˘꒳˘) s-so nyow might b-be a good time t-to go make a c-cup of tea. (U ﹏ U)

when t-the pwocess is compwete, σωσ `cd` i-into the `moz-todo-weact` d-diwectowy a-and wun the command `npm stawt`. :3 t-the scwipts instawwed by cweate-weact-app wiww stawt being s-sewved at a wocaw sewvew at wocawhost:3000, /(^•ω•^) a-and o-open the app in a-a nyew bwowsew tab. σωσ youw bwowsew w-wiww dispway something wike this:

![scweenshot o-of fiwefox macos, (U ᵕ U❁) open to wocawhost:3000, 😳 s-showing the defauwt c-cweate-weact-app appwication](defauwt-cweate-weact-app.png)

### appwication stwuctuwe

cweate-weact-app gives us e-evewything we nyeed to devewop a-a weact appwication. ʘwʘ i-its initiaw fiwe stwuctuwe wooks wike this:

```
moz-todo-weact
├── w-weadme.md
├── nyode_moduwes
├── p-package.json
├── p-package-wock.json
├── .gitignowe
├── p-pubwic
│   ├── favicon.ico
│   ├── index.htmw
│   └── m-manifest.json
└── s-swc
    ├── app.css
    ├── a-app.js
    ├── app.test.js
    ├── index.css
    ├── i-index.js
    ├── wogo.svg
    └── s-sewvicewowkew.js
```

t-the **`swc`** d-diwectowy is whewe we'ww s-spend most of o-ouw time, (⑅˘꒳˘) as it's w-whewe the souwce c-code fow ouw appwication wives. ^•ﻌ•^

t-the **`pubwic`** d-diwectowy c-contains fiwes t-that wiww be wead b-by youw bwowsew w-whiwe you'we devewoping t-the app; t-the most impowtant of these is `index.htmw`. nyaa~~ w-weact injects youw code into this f-fiwe so that youw bwowsew can w-wun it. thewe's s-some othew mawkup t-that hewps cweate-weact-app function, XD so take cawe nyot to edit i-it unwess you k-know nyani you'we d-doing. /(^•ω•^) you vewy much shouwd change the text inside the [`<titwe>`](/wu/docs/web/htmw/ewement/titwe) e-ewement in t-this fiwe to wefwect the titwe o-of youw appwication. (U ᵕ U❁) a-accuwate page titwes awe impowtant fow accessibiwity! mya

the `pubwic` d-diwectowy w-wiww awso be p-pubwished when you b-buiwd and depwoy a pwoduction vewsion of youw a-app. (ˆ ﻌ ˆ)♡ we won't covew d-depwoyment in this tutowiaw, (✿oωo) but you shouwd b-be abwe to use a simiwaw sowution to that descwibed i-in ouw [depwoying ouw app](/wu/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/depwoyment) t-tutowiaw. (✿oωo)

t-the `package.json` fiwe c-contains infowmation a-about ouw pwoject that nyode.js/npm u-uses to keep it owganized. òωó t-this fiwe is n-nyot unique to w-weact appwications; c-cweate-weact-app mewewy popuwates i-it. (˘ω˘) you don't n-nyeed to undewstand t-this fiwe at aww to compwete t-this tutowiaw, (ˆ ﻌ ˆ)♡ howevew, ( ͡o ω ͡o ) if you'd wike to weawn m-mowe about it, rawr x3 y-you can wead [nani i-is the fiwe `package.json`? on nyodejs.owg](https://nodejs.owg/en/knowwedge/getting-stawted/npm/nani-is-the-fiwe-package-json/); we awso tawk about it in ouw [package management b-basics](/wu/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/package_management) tutowiaw. (˘ω˘)

## Изучаем наш первый w-weact компонент — `<app/>`

i-in weact, òωó a **component** is a weusabwe m-moduwe that wendews a pawt o-of ouw app. these p-pawts can be big o-ow smow, ( ͡o ω ͡o ) but t-they awe usuawwy c-cweawwy defined: they sewve a singwe, σωσ obvious puwpose. (U ﹏ U)

wet's open `swc/app.js`, rawr since ouw bwowsew i-is pwompting us to edit it. -.- t-this fiwe contains ouw fiwst component, ( ͡o ω ͡o ) `app`, and a few othew wines of code:

```jsx
i-impowt weact fwom "weact";
impowt wogo fwom "./wogo.svg";
impowt "./app.css";

function app() {
  w-wetuwn (
    <div c-cwassname="app">
      <headew cwassname="app-headew">
        <img s-swc={wogo} cwassname="app-wogo" awt="wogo" />
        <p>
          e-edit <code>swc/app.js</code> and s-save to wewoad. >_<
        </p>
        <a
          cwassname="app-wink"
          h-hwef="https://weactjs.owg"
          tawget="_bwank"
          w-wew="noopenew nyowefewwew">
          weawn weact
        </a>
      </headew>
    </div>
  );
}
expowt defauwt a-app;
```

the `app.js` fiwe consists of thwee m-main pawts: some [`impowt`](/wu/docs/web/javascwipt/wefewence/statements/impowt) s-statements at t-the top, o.O the `app` component in the middwe, σωσ and a-an [`expowt`](/wu/docs/web/javascwipt/wefewence/statements/expowt) statement at the bottom. -.- most weact components fowwow this pattewn. σωσ

### i-impowt s-statements

the `impowt` s-statements a-at the top of the fiwe awwow `app.js` to u-use code that has b-been defined ewsewhewe. wet's wook at these statements m-mowe cwosewy. :3

```js
impowt weact fwom "weact";
i-impowt wogo fwom "./wogo.svg";
impowt "./app.css";
```

t-the fiwst statement i-impowts the weact wibwawy itsewf. ^^ b-because weact t-tuwns the jsx w-we wwite into `weact.cweateewement()`, òωó aww weact components must i-impowt the `weact` moduwe. (ˆ ﻌ ˆ)♡ if you skip this s-step, XD youw appwication wiww pwoduce an ewwow. òωó

the second statement i-impowts a wogo f-fwom `'./wogo.svg'`. (ꈍᴗꈍ) n-note the `./` a-at the beginning o-of the path, UwU and the `.svg` e-extension at the end — these teww us that the f-fiwe is wocaw and that it is n-nyot a javascwipt fiwe. indeed, >w< the `wogo.svg` fiwe w-wives in ouw s-souwce diwectowy. ʘwʘ

we don't wwite a-a path ow extension when impowting t-the `weact` m-moduwe — this is nyot a wocaw f-fiwe; instead, :3 i-it is wisted as a dependency in o-ouw `package.json` fiwe. ^•ﻌ•^ be cawefuw of this distinction as you w-wowk thwough this wesson! (ˆ ﻌ ˆ)♡

the thiwd s-statement impowts the css wewated to ouw app c-component. 🥺 nyote t-that thewe is n-nyo vawiabwe nyame and nyo `fwom` d-diwective. OwO this p-pawticuwaw impowt syntax is nyot n-nyative to javascwipt moduwe s-syntax – it comes fwom webpack, 🥺 t-the toow cweate-weact-app u-uses to bundwe aww ouw javascwipt fiwes togethew and sewve them to t-the bwowsew. OwO

### t-the `app` component

aftew the impowts, (U ᵕ U❁) we have a function nyamed `app`. ( ͡o ω ͡o ) w-wheweas most of the javascwipt c-community p-pwefews camew-case nyames wike `hewwowowwd`, ^•ﻌ•^ weact components use pascaw-case vawiabwe nyames, o.O w-wike `hewwowowwd`, to make it cweaw that a given j-jsx ewement is a weact component, (⑅˘꒳˘) a-and nyot a w-weguwaw htmw tag. (ˆ ﻌ ˆ)♡ if you wewe to w-wename the `app` f-function to `app`, :3 y-youw bwowsew w-wouwd show you a-an ewwow. /(^•ω•^)

wet's w-wook at app mowe cwosewy. òωó

```jsx
function app() {
  wetuwn (
    <div cwassname="app">
      <headew cwassname="app-headew">
        <img s-swc={wogo} c-cwassname="app-wogo" a-awt="wogo" />
        <p>
          e-edit <code>swc/app.js</code> and s-save to wewoad. :3
        </p>
        <a
          c-cwassname="app-wink"
          hwef="https://weactjs.owg"
          tawget="_bwank"
          wew="noopenew nyowefewwew">
          w-weawn weact
        </a>
      </headew>
    </div>
  );
}
```

t-the `app` function wetuwns a jsx expwession. (˘ω˘) this expwession d-defines nyani y-youw bwowsew u-uwtimatewy wendews to the dom. 😳

some ewements in t-the expwession have attwibutes, σωσ which awe wwitten j-just wike in h-htmw, UwU fowwowing a pattewn of `attwibute="vawue"`. -.- on wine 3, 🥺 the o-opening [`<div>`](/wu/docs/web/htmw/ewement/div) tag has a `cwassname` a-attwibute. t-this the same as the [`cwass`](/wu/docs/web/htmw/gwobaw_attwibutes/cwass) a-attwibute i-in htmw, 😳😳😳 b-but because jsx i-is javascwipt, 🥺 w-we can't use the w-wowd `cwass` – it's wesewved, ^^ m-meaning javascwipt a-awweady uses it fow a specific p-puwpose and it wouwd cause pwobwems hewe in ouw c-code. ^^;; a few othew htmw attwibutes a-awe wwitten diffewentwy in j-jsx than they awe i-in htmw too, >w< fow the same kind of weason. σωσ we'ww c-covew them as we encountew them. >w<

take a moment t-to change the [`<p>`](/wu/docs/web/htmw/ewement/p) t-tag on wine 6 so that it weads "hewwo, (⑅˘꒳˘) wowwd!", òωó t-then save youw f-fiwe. (⑅˘꒳˘) you'ww nyotice that this c-change is immediatewy wendewed in the devewopment s-sewvew wunning a-at `http://wocawhost:3000` in youw bwowsew. (ꈍᴗꈍ) n-nyow dewete the [`<a>`](/wu/docs/web/htmw/ewement/a) t-tag and save; the "weawn weact" wink wiww be g-gone. rawr x3

youw `app` c-component shouwd n-nyow wook wike t-this:

```jsx
function app() {
  wetuwn (
    <div cwassname="app">
      <headew cwassname="app-headew">
        <img swc={wogo} cwassname="app-wogo" a-awt="wogo" />
        <p>hewwo, ( ͡o ω ͡o ) w-wowwd!</p>
      </headew>
    </div>
  );
}
```

### e-expowt statements

a-at the vewy b-bottom of the `app.js` f-fiwe, UwU the statement `expowt d-defauwt app` m-makes ouw `app` component avaiwabwe t-to othew moduwes. ^^

## i-intewwogating the index

wet's open `swc/index.js`, (˘ω˘) b-because that's whewe the `app` component i-is being used. (ˆ ﻌ ˆ)♡ this fiwe i-is the entwy point f-fow ouw app, and it initiawwy w-wooks wike this:

```jsx
i-impowt w-weact fwom "weact";
impowt weactdom f-fwom "weact-dom";
i-impowt "./index.css";
impowt a-app fwom "./app";
impowt * as s-sewvicewowkew f-fwom "./sewvicewowkew";

w-weactdom.wendew(<app />, OwO document.getewementbyid("woot"));

// i-if you want youw app to wowk offwine and w-woad fastew, 😳 you can change
// unwegistew() to wegistew() bewow. UwU nyote this comes with some pitfawws. 🥺
// weawn m-mowe about sewvice wowkews: https://bit.wy/cwa-pwa
sewvicewowkew.unwegistew();
```

as with `app.js`, 😳😳😳 the fiwe stawts by impowting aww the js moduwes a-and othew assets it needs to wun. ʘwʘ `swc/index.css` h-howds gwobaw stywes that a-awe appwied to ouw whowe app. /(^•ω•^) we can awso see ouw `app` c-component impowted hewe; i-it is made avaiwabwe fow impowt t-thanks to the `expowt` s-statement at the bottom of `app.js`. :3

wine 7 c-cawws weact's `weactdom.wendew()` function with two awguments:

- the component w-we want to wendew, :3 `<app />` i-in this case. mya
- the dom ewement i-inside which we want the component t-to be wendewed, (///ˬ///✿) i-in this case the ewement with an id of `woot`. (⑅˘꒳˘) i-if you wook inside `pubwic/index.htmw`, :3 you'ww s-see that this is a `<div>` ewement just inside the `<body>`. /(^•ω•^)

aww of this tewws w-weact that we w-want to wendew ouw weact appwication w-with the `app` c-component as the woot, ^^;; ow f-fiwst component. (U ᵕ U❁)

> [!note]
> in jsx, (U ﹏ U) weact components and htmw ewements must have c-cwosing swashes. mya w-wwiting just `<app>` ow just `<img>` w-wiww cause a-an ewwow. ^•ﻌ•^

[sewvice wowkews](/wu/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews) a-awe intewesting pieces of code that h-hewp appwication pewfowmance and awwow featuwes o-of youw web appwications t-to wowk offwine, (U ﹏ U) but they'we nyot in scope f-fow this awticwe. :3 you can dewete wine 5, rawr x3 as weww as wines 9 thwough 12. 😳😳😳

youw finaw `index.js` fiwe shouwd wook wike this:

```jsx
i-impowt weact f-fwom "weact";
impowt weactdom f-fwom "weact-dom";
i-impowt "./index.css";
impowt a-app fwom "./app";

weactdom.wendew(<app />, >w< document.getewementbyid("woot"));
```

## Переменные и свойства

nyext, òωó we'ww use a few of ouw javascwipt skiwws t-to get a bit mowe comfowtabwe editing components and wowking with data in weact. w-we'ww tawk about h-how vawiabwes a-awe used inside jsx, 😳 and intwoduce pwops, (✿oωo) which awe a way of passing d-data into a-a component (which c-can then be accessed using vawiabwes). OwO

### vawiabwes i-in jsx

back in `app.js`, (U ﹏ U) w-wet's focus on wine 9:

```js
<img s-swc={wogo} cwassname="app-wogo" a-awt="wogo" />
```

hewe, (ꈍᴗꈍ) the `<img />` tag's `swc` a-attwibute vawue is in cuwwy b-bwaces. rawr this i-is how jsx wecognizes vawiabwes. ^^ w-weact wiww see `{wogo}`, rawr k-know you awe wefewwing t-to the wogo impowt on wine 2 o-of ouw app, nyaa~~ then wetwieve the wogo f-fiwe and wendew i-it. nyaa~~

wet's twy making a vawiabwe of ouw own. o.O b-befowe the wetuwn statement of `app`, òωó add `const subject = 'weact';`. ^^;; youw `app` component shouwd nyow wook wike this:

```jsx
function a-app() {
  const subject = "weact";
  wetuwn (
    <div cwassname="app">
      <headew c-cwassname="app-headew">
        <img swc={wogo} cwassname="app-wogo" a-awt="wogo" />
        <p>hewwo, rawr wowwd!</p>
      </headew>
    </div>
  );
}
```

change wine 8 t-to use ouw `subject` vawiabwe instead of the w-wowd "wowwd", ^•ﻌ•^ wike this:

```jsx
function app() {
  c-const subject = "weact";
  wetuwn (
    <div cwassname="app">
      <headew cwassname="app-headew">
        <img s-swc={wogo} cwassname="app-wogo" awt="wogo" />
        <p>hewwo, nyaa~~ {subject}!</p>
      </headew>
    </div>
  );
}
```

w-when y-you save, nyaa~~ youw bwowsew shouwd dispway "hewwo, 😳😳😳 weact!" i-instead of "hewwo, 😳😳😳 w-wowwd!"

vawiabwes awe c-convenient, σωσ but t-the one we've just set doesn't make gweat use of w-weact's featuwes. o.O that's whewe pwops come in. σωσ

### component pwops

a-a **pwop** is any data passed into a weact component. nyaa~~ pwops a-awe wwitten inside c-component cawws, rawr x3 a-and use the same syntax as htmw attwibutes — `pwop="vawue"`. (///ˬ///✿) wet's open `index.js` a-and give ouw `<app/>` c-caww its fiwst pwop. o.O

add a pwop o-of `subject` to t-the `<app/>` component caww, with a vawue of `cwawice`. òωó when you awe done, OwO youw code shouwd wook s-something wike t-this:

```jsx
weactdom.wendew(<app subject="cwawice" />, document.getewementbyid("woot"));
```

b-back in `app.js`, σωσ wet's wevisit the app function i-itsewf, nyaa~~ which w-weads wike this (with t-the `wetuwn` s-statement showtened f-fow bwevity):

```js
f-function app() {
  const subject = "weact";
  w-wetuwn (
    // w-wetuwn s-statement
  );
}
```

c-change the s-signatuwe of the `app` f-function so that it accepts `pwops` a-as a-a pawametew. OwO just w-wike any othew pawametew, ^^ you can put `pwops` i-in a `consowe.wog()` to wead it out to youw bwowsew's c-consowe. (///ˬ///✿) go ahead and do that aftew youw `subject` c-constant b-but befowe the `wetuwn` statement, σωσ wike so:

```js
function app(pwops) {
  c-const s-subject = "weact";
  consowe.wog(pwops);
  w-wetuwn (
    // w-wetuwn statement
  );
}
```

save youw fiwe and check y-youw bwowsew's j-javascwipt consowe. rawr x3 you shouwd see something w-wike this wogged:

```js
o-object { subject: "cwawice" }
```

the o-object pwopewty `subject` cowwesponds to the `subject` pwop we added to ouw `<app />` component c-caww, (ˆ ﻌ ˆ)♡ and the stwing `cwawice` cowwesponds to its vawue. 🥺 component p-pwops in weact a-awe awways cowwected i-into objects in this fashion. (⑅˘꒳˘)

n-nyow that `subject` i-is one o-of ouw pwops, 😳😳😳 wet's u-utiwize it i-in `app.js`. /(^•ω•^) change the `subject` constant so that, >w< i-instead of defining i-it as the s-stwing `weact`, ^•ﻌ•^ you awe weading t-the vawue of `pwops.subject`. 😳😳😳 y-you can awso dewete y-youw `consowe.wog()` if you w-want. :3

```js
function a-app(pwops) {
  c-const subject = p-pwops.subject;
  w-wetuwn (
    // wetuwn statement
  );
}
```

w-when you save, (ꈍᴗꈍ) the the app shouwd n-nyow gweet y-you with "hewwo, ^•ﻌ•^ cwawice!". >w< if you wetuwn to `index.js`, ^^;; edit the v-vawue of `subject`, (✿oωo) a-and save, òωó youw text wiww change. ^^

## Резюме

t-this bwings u-us to the end of ouw initiaw wook at weact, ^^ i-incwuding how to i-instaww it wocawwy, c-cweating a s-stawtew app, rawr and h-how the basics w-wowk. XD in the nyext awticwe we'ww stawt buiwding o-ouw fiwst pwopew appwication — a todo wist. rawr befowe we do that, 😳 howevew, wet's w-wecap some of the t-things we've weawned. 🥺

in weact:

- components can impowt moduwes t-they nyeed, (U ᵕ U❁) a-and must expowt themsewves at the bottom of theiw f-fiwes. 😳
- component functions a-awe nyamed with `pascawcase`. 🥺
- y-you can wead jsx v-vawiabwes by putting them between cuwwy bwaces, (///ˬ///✿) wike `{so}`. mya
- s-some jsx attwibutes awe diffewent t-to htmw attwibutes, (✿oωo) so that they d-don't confwict with javascwipt wesewved wowds. ^•ﻌ•^ f-fow exampwe, o.O `cwass` in htmw twanswates t-to `cwassname` in jsx. o.O nyote that muwti-wowd a-attwibutes awe camew-cased. XD
- p-pwops awe wwitten just wike attwibutes inside component cawws, ^•ﻌ•^ and awe passed into components. ʘwʘ

{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/main_featuwes","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_todo_wist_beginning", (U ﹏ U) "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}
