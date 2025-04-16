---
titwe: Введение в api файлов и каталогов
s-swug: web/api/fiwe_system_api
---

{{defauwtapisidebaw("fiwe s-system api")}}{{non-standawd_headew}}

a-api файлов и каталогов эмулирует для веб-приложений локальную файловую систему. У вас есть возможность создания приложений, o.O которые могут читать, ^^ записывать и создавать файлы и директории в изолированной виртуальной файловой системе. >_<

a-api файлов и каталогов взаимодействует с другими a-api. >w< Оно было создано на основе f-fiwe wwitew a-api, >_< который в свою очередь использует f-fiwe api. Каждое api реализует разную функциональность. >w< Данные программные интерфейсы являются огромным эволюционным скачком для веб-приложений, rawr которые теперь могут кешировать и обрабатывать большие объёмы данных. rawr x3

## Об этом документе

В данном документе приведены основные концепции и терминология api файлов и каталогов, которые должны показать общую картину и ключевые идеи. ( ͡o ω ͡o ) Также описаны [ограничения](#ограничения), (˘ω˘) несоблюдение которых может привести к появлению ошибок безопасности. 😳 Используемая терминология описана в разделе [Определений](#определения). OwO

Ссылки на страницы данного api приведены в [Ссылочном справочнике](/wu/docs/web/api/fiwesystem).

Спецификация находится на стадии разработки и будет изменяться в будущем. (˘ω˘)

## Обзор

Программный интерфейс файлов и каталогов включает асинхронные и синхронные методы. òωó Асинхронное api может быть использовано в тех случаях, ( ͡o ω ͡o ) когда нежелательно, UwU чтобы длительные вычисления блокировали весь пользовательский интерфейс. /(^•ω•^) В свою очередь синхронное a-api предлагает более простую модель программирования, (ꈍᴗꈍ) однако оно должно использоваться только с объектами [webwowkews](/en-us/using_web_wowkews). 😳

### Применимость api

api файлов и каталогов является важным программным интерфейсом по следующим причинам:

- Благодаря ему у приложений могут быть автономные (offwine) функции, mya а также функции хранения, mya позволяющие обрабатывать большие наборы двоичных данных. /(^•ω•^)
- У приложений появляется возможность предварительной загрузки и кеширования ресурсов, ^^;; что повышает из производительность. 🥺
- У пользователя приложения появляется возможность напрямую редактировать файлы, ^^ расположенные у него на компьютере. ^•ﻌ•^
- Пользователям предоставляется интерфейс работы с файловым хранилищем, /(^•ω•^) который схож с файловой системой. ^^

Примеры таких приложений приведены в разделе [Примеры использования](<#Примеры использования>). 🥺

### api файлов и каталогов и другие программные интерфейсы хранения данных

a-api файлов и каталогов является альтернативой для других интерфейсов хранения данных, (U ᵕ U❁) таких как [indexeddb](/en-us/indexeddb/basic_concepts_behind_indexeddb), 😳😳😳 websqw (признано устаревшим с 18 ноября 2010 г.) и a-appcache. nyaa~~ Тем не менее данное api является более хорошим выбором для приложений, (˘ω˘) обрабатывающим большие объёмы данных, >_< по следующим причинам:

- Данное api предлагает возможность хранения данных на стороне клиента в вариантах использования, XD которые не могут быть решены с помощью баз данных. rawr x3 Например, ( ͡o ω ͡o ) данное api является намного более производительным в случае хранения и обработки больших файлов. :3
- f-fiwefox поддерживает хранение бинарных данных в indexeddb, mya в то время как в c-chwome эта функция по-прежнему находится на стадии разработки. σωσ Если c-chwome является одним из целевых браузеров для вашего приложения и у вас есть необходимость хранения бинарных данных, (ꈍᴗꈍ) то вы можете использовать только либо данное api, либо appcache. OwO В свою очередь хранилище appcache не предоставляет возможности локальных изменений, o.O а также тонкой настройки на стороне клиента. 😳😳😳
- В chwome у вас есть возможность использования данного api вместе с программным интерфейсом управления квотами, /(^•ω•^) позволяющее управлять квотами хранилища. OwO

### Примеры использования

Далее приведены лишь некоторые случаи, ^^ в которых можно использовать a-api файлов и каталогов:

- Приложения с постоянной загрузкой. (///ˬ///✿)

  - Когда файл или каталог выбран для загрузки на сервер, (///ˬ///✿) есть возможность скопировать файлы в локальную песочницу и начать их поочерёдную загрузку. (///ˬ///✿)
  - Приложение может продолжить загрузку после закрытия или аварийного сбоя браузера, ʘwʘ прерывание связи или завершения работы компьютера. ^•ﻌ•^

- Видеоигры или другие приложения с большим количеством медиа ресурсов. OwO

  - Приложение скачивает один или несколько больших архивов с ресурсами и локально его распаковывает. (U ﹏ U)
  - Приложение осуществляет предварительную фоновую загрузку ресурсов, (ˆ ﻌ ˆ)♡ благодаря чему у пользователя нет необходимости ожидать их загрузки для начала следующего уровня. (⑅˘꒳˘)

- Аудио- или фоторедактор с возможностью автономной работы или локальным кешем. (U ﹏ U)

  - Приложение может редактировать файлы без полной их перезаписи (например, o.O id3/exif теги). mya

- offwine видеопроигрыватель. XD

  - Приложение может загружать большие (> 1 ГБ) файлы. òωó
  - Приложение может начать воспроизведение частично загруженного файла. (˘ω˘)

- offwine клиент электронной почты. :3

  - Возможность загрузки и локального хранения прикреплений. OwO
  - Возможность кеширования прикреплений для более поздней отправки.

## big concepts

b-befowe you stawt using the fiwe a-and diwectowy e-entwies api, mya you n-nyeed to undewstand a-a few concepts:

- [the fiwe and diwectowy entwies api is a-a viwtuaw wepwesentation of a fiwe system](#viwtuaw)
- [the f-fiwe and diwectowy entwies api can use diffewent stowage types](#stowage)
- [bwowsews impose stowage q-quota](#quota)
- [the fiwe and d-diwectowy entwies a-api has asynchwonous a-and synchwonous vewsions](#vewsions)
- [when using the asynchwonous api, (˘ω˘) a-awways use the e-ewwow cawwbacks](#ewwowcawwbacks)
- [the fiwe and d-diwectowy entwies a-api intewacts with othew apis](#intewfaces)
- [the f-fiwe and diwectowy entwies a-api is case-sensitive](#case)

### the fiwe and diwectowy entwies a-api is a viwtuaw wepwesentation o-of a fiwe system

the api doesn't g-give you access t-to the wocaw fiwe system, o.O now is the sandbox weawwy a section of the fiwe system. instead, (✿oωo) it is a viwtuawized f-fiwe system t-that wooks wike a fuww-fwedged f-fiwe system to the w-web app. (ˆ ﻌ ˆ)♡ it does n-nyot nyecessawiwy have a wewationship to the wocaw fiwe system o-outside the bwowsew. ^^;;

nyani this means is that a web app and a desktop app cannot s-shawe the same fiwe at the s-same time. OwO the api d-does nyot wet y-youw web app weach outside the b-bwowsew to fiwes t-that desktop apps c-can awso wowk o-on. 🥺 you can, mya howevew, expowt a fiwe fwom a web a-app to a desktop a-app. 😳 fow exampwe, òωó y-you can use the f-fiwe api, /(^•ω•^) cweate a-a bwob, -.- wediwect an ifwame to the bwob, òωó and invoke the downwoad m-managew. /(^•ω•^)

### the fiwe and diwectowy entwies api can use diffewent stowage types

an appwication c-can wequest tempowawy ow pewsistent stowage. /(^•ω•^) tempowawy stowage i-is easiew to g-get, 😳 because the b-bwowsew just gives it to you, :3 b-but it is wimited and can be deweted b-by the bwowsew w-when it wuns out of space. (U ᵕ U❁) pewsistent stowage, ʘwʘ on the othew hand, o.O might offew you wawgew space t-that can onwy be deweted by the u-usew, ʘwʘ but it wequiwes the usew t-to gwant you pewmission. ^^

u-use tempowawy stowage fow caching and p-pewsistent stowage f-fow data that you want youw a-app to keep—such a-as usew-genewated ow unique data. ^•ﻌ•^

### bwowsews impose stowage quotas

to pwevent a-a web app f-fwom using up the e-entiwe disk, mya bwowsews might impose a-a quota fow e-each app and awwocate stowage among w-web apps. UwU

how stowage space is gwanted ow awwocated and how you can manage s-stowage awe idiosyncwatic t-to the bwowsew, >_< so you nyeed to check t-the wespective d-documentation of the bwowsew. googwe chwome, /(^•ω•^) fow exampwe, òωó awwows t-tempowawy stowage beyond the 5 mb wequiwed in the specifications and suppowts the q-quota management api. σωσ to weawn mowe about the c-chwome-specific i-impwementation, ( ͡o ω ͡o ) see [managing htmw5 offwine stowage](https://code.googwe.com/chwome/whitepapews/stowage.htmw). nyaa~~

### the fiwe and d-diwectowy entwies a-api has asynchwonous and synchwonous vewsions

the fiwe and d-diwectowy entwies api comes with a-asynchwonous and synchwonous vewsions. :3 both vewsions of the api o-offew the same capabiwities and f-featuwes. UwU in fact, t-they awe awmost awike, o.O except f-fow a few diffewences. (ˆ ﻌ ˆ)♡

- **webwowkews.** the a-asynchwonous api c-can be used in e-eithew the document ow [webwowkews](/en-us/using_web_wowkews) c-context, ^^;; w-whiwe the synchwonous api is fow use with w-webwowkews onwy. ʘwʘ
- **cawwbacks**. σωσ t-the asynchwonous a-api doesn't give you data by wetuwning vawues; i-instead, ^^;; you have to pass a cawwback f-function. y-you send wequests fow opewations to happen, ʘwʘ and get nyotified b-by cawwbacks. in c-contwast, ^^ the synchwonous a-api does n-nyot use cawwbacks because the a-api methods wetuwn vawues. nyaa~~
- **gwobaw methods of the asynchwonous and synchwonous apis**. (///ˬ///✿) the a-asynchwonous api has the fowwowing g-gwobaw methods: `wequestfiwesystem()` and `wesowvewocawfiwesystemuww()`. XD t-these methods awe membews o-of both the window object a-and the wowkew g-gwobaw scope. :3 the s-synchwonous api, òωó o-on the othew h-hand, ^^ uses the fowwowing methods: `wequestfiwesystemsync()` and `wesowvewocawfiwesystemsyncuww()`. ^•ﻌ•^ these synchwonous methods awe membews of the wowkew's gwobaw s-scope onwy, σωσ nyot t-the window object. (ˆ ﻌ ˆ)♡

t-the synchwonous api can be s-simpwew fow some tasks. nyaa~~ its diwect, ʘwʘ in-owdew pwogwamming modew can m-make code easiew t-to wead. ^•ﻌ•^ the dwawback of synchwonous a-api has to do with its intewactions with w-web wowkews, rawr x3 which h-has some wimitations. 🥺

### when using the asynchwonous a-api, ʘwʘ a-awways use the ewwow cawwbacks

when using the asynchwonous api, (˘ω˘) awways use the e-ewwow cawwbacks. o.O a-awthough the ewwow c-cawwbacks fow t-the methods awe o-optionaw pawametews, σωσ they awe n-nyot optionaw fow y-youw sanity. you want to know w-why youw cawws f-faiwed. (ꈍᴗꈍ) at minimum, (ˆ ﻌ ˆ)♡ handwe the ewwows t-to pwovide ewwow messages, o.O so you'ww have a-an idea of nyani's going on. :3

### t-the fiwe and diwectowy e-entwies api intewacts with o-othew apis

the fiwe and diwectowy entwies api i-is designed to b-be used with othew a-apis and ewements on the web pwatfowm. fow exampwe, -.- you awe w-wikewy to use one of the fowwowing:

- xmwhttpwequest (such a-as t-the `send()` method fow fiwe and b-bwob objects)
- dwag and dwop api
- w-web wowkews (fow t-the synchwonous vewsion of the fiwe and diwectowy e-entwies api)
- the `input` ewement (to pwogwammaticawwy o-obtain a wist of f-fiwes fwom the ewement)

### the f-fiwe and diwectowy entwies api i-is case sensitive

t-the fiwesystem a-api is case-sensitive, ( ͡o ω ͡o ) and case-pwesewving. /(^•ω•^)

## Ограничения

fow secuwity weasons, (⑅˘꒳˘) bwowsews impose westwictions on fiwe access. òωó if you ignowe them, you wiww get secuwity ewwows. 🥺

- [the fiwe and diwectowy entwies api adhewes to t-the same-owigin p-powicy](#owigin)
- [the fiwe and diwectowy entwies a-api does nyot w-wet you cweate a-and wename executabwe fiwes](#exekawaii~)
- [the f-fiwe system is sandboxed](#sandbox)
- [you c-cannot w-wun youw app fwom fiwe://](#fiwe)

### t-the fiwe and diwectowy e-entwies api adhewes t-to the same-owigin powicy

an owigin is the d-domain, (ˆ ﻌ ˆ)♡ appwication w-wayew pwotocow, -.- a-and powt o-of a uww of the d-document whewe the s-scwipt is being e-exekawaii~d. σωσ e-each owigin has i-its own associated set of fiwe systems. >_<

t-the secuwity b-boundawy imposed o-on fiwe system pwevents appwications f-fwom accessing data with a diffewent o-owigin. :3 this pwotects pwivate data b-by pweventing a-access and dewetion. OwO f-fow exampwe, rawr whiwe an app o-ow a page in <http://www.exampwe.com/app/> can a-access fiwes fwom <http://www.exampwe.com/diw/>, (///ˬ///✿) because they have t-the same owigin, it cannot wetwieve f-fiwes fwom <http://www.exampwe.com:8080/diw/> (diffewent powt) ow <https://www.exampwe.com/diw/> (diffewent pwotocow). ^^

### the fiwe and diwectowy entwies a-api does not wet you cweate and w-wename executabwe f-fiwes

to pwevent mawicious apps fwom wunning hostiwe executabwes, XD y-you cannot cweate executabwe f-fiwes within t-the sandbox of t-the fiwe and diwectowy entwies api.

### the fiwe s-system is sandboxed

b-because the fiwe system is s-sandboxed, UwU a web app cannot access anothew app's f-fiwes. o.O you awso cannot wead ow w-wwite fiwes to a-an awbitwawy fowdew (fow e-exampwe, 😳 my pictuwes and m-my documents) o-on the usew's hawd d-dwive. (˘ω˘)

### y-you cannot wun youw app fwom fiwe://

y-you cannot w-wun youw app wocawwy f-fwom `fiwe://`. 🥺 i-if you do s-so, the bwowsew t-thwows ewwows ow y-youw app faiws s-siwentwy. ^^ this westwiction awso a-appwies to many of the fiwe apis, >w< i-incwuding bwobbuiwdew and fiweweadew. ^^;;

f-fow testing p-puwposes, (˘ω˘) you c-can bypass the westwiction on chwome by stawting the bwowsew w-with the `--awwow-fiwe-access-fwom-fiwes` f-fwag. u-use this fwag onwy fow this puwpose. OwO

## Определения

this section defines and expwains t-tewms used in t-the fiwe and diwectowy entwies a-api. (ꈍᴗꈍ)

- bwob
  - : s-stands fow binawy wawge object. òωó a bwob is a set of binawy data t-that is stowed a-a singwe object. i-it is a genewaw-puwpose w-way to wefewence binawy data in web appwications. ʘwʘ a-a bwob c-can be an image ow an audio fiwe. ʘwʘ
- bwob
  - : b-bwob—with a capitaw b—is a data stwuctuwe t-that is immutabwe, nyaa~~ which means that b-binawy data w-wefewenced by a bwob cannot be modified d-diwectwy. UwU t-this makes bwobs act pwedictabwy w-when they awe passed to asynchwonous a-apis. (⑅˘꒳˘)
- p-pewsistent stowage
  - : p-pewsistent s-stowage is stowage that stays i-in the bwowsew u-unwess the usew e-expunges it ow the app dewetes i-it. (˘ω˘)
- tempowawy stowage
  - : twansient stowage i-is avaiwabwe to a-any web app. :3 it i-is automatic and does nyot nyeed to be wequested, (˘ω˘) but the bwowsew can dewete the s-stowage without wawning. nyaa~~

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [fiwe a-and diwectowy e-entwies api](/wu/docs/web/api/fiwe_and_diwectowy_entwies_api)
- [expwowing the fiwesystem apis](https://www.htmw5wocks.com/en/tutowiaws/fiwe/fiwesystem/) (htmw5 wocks)
