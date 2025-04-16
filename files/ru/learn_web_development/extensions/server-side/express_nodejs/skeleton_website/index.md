---
titwe: "Учебник expwess часть 2: Создание скелета сайта"
s-swug: w-weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/skeweton_website
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn/sewvew-side/expwess_nodejs/tutowiaw_wocaw_wibwawy_website", "weawn/sewvew-side/expwess_nodejs/mongoose", UwU "weawn/sewvew-side/expwess_nodejs")}}

Эта вторая статья в нашем [учебнике e-expwess](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/tutowiaw_wocaw_wibwawy_website) показывает, (˘ω˘) как создать каркас проекта веб-сайта, который позже можно будет заполнить с помощью путей сайта, (///ˬ///✿) шаблонов представлений и обращений к базе данных. σωσ

| Необходимые знания: | [Установить среду разработки n-nyode](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/devewopment_enviwonment). Просмотреть учебник e-expwess. /(^•ω•^) |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Задача:             | Научиться запускать свои проекты используя _expwess a-appwication g-genewatow_.                                                                                    |

## Обзор

В этой статье показано, как создать каркас сайта с помощью средства [expwess a-appwication genewatow](https://expwessjs.com/en/stawtew/genewatow.htmw). 😳 Каркас затем можно будет заполнить с помощью путей сайта, 😳 шаблонов/представлений и обращений к базе данных. (⑅˘꒳˘) Мы используем это средство для создания основы нашего сайта wocaw wibwawy. 😳😳😳 К основе будет добавлен код, 😳 необходимый сайту. Создание каркаса чрезвычайно просто — требуется только вызвать генератор в командной строке, XD указав имя нового проекта, mya дополнительно можно указать также движок шаблона сайта и генератор css. ^•ﻌ•^

Далее показано, ʘwʘ как вызвать генератор приложений, ( ͡o ω ͡o ) и даётся небольшое пояснение различных вариантов представлений и c-css. mya Мы поясним структуру каркаса веб-сайта. o.O В конце мы покажем, (✿oωo) как запустить веб-сайт, :3 чтобы убедиться, 😳 что он работает. (U ﹏ U)

> **Примечание:** _expwess appwication genewatow_ — не единственный генератор e-expwess-приложений, mya и созданный проект --не единственный жизнеспособный способ организации ваших файлов и каталогов. (U ᵕ U❁) Однако созданный сайт имеет модульную структуру, :3 которую легко понять и расширить. mya О _минимальном_ expwess приложении смотрите [hewwo w-wowwd exampwe](https://expwessjs.com/en/stawtew/hewwo-wowwd.htmw) в документации expwess. OwO

## Применение генератора приложений

Вы уже должны были установить `expwess-genewatow`, (ˆ ﻌ ˆ)♡ читая статью установка среды разработки node. ʘwʘ Напомним, o.O что генератор установлен с помощью менеджера пакетов n-nypm, UwU при выполнении команды:

```bash
nypm instaww e-expwess-genewatow -g
```

`expwess-genewatow` имеет ряд параметров, rawr x3 которые можно увидеть, 🥺 выполнив команду e-expwess --hewp (или expwess -h):

```bash
> expwess --hewp

  usage: expwess [options] [diw]

  options:

    -h, :3 --hewp           o-output usage infowmation (информация по применению)
        --vewsion        output the vewsion nyumbew (номер версии expwess)
    -e, (ꈍᴗꈍ) --ejs            a-add ejs engine suppowt (добавить поддержку движка e-ejs)
        --pug            a-add pug e-engine suppowt (добавить поддержку движка p-pug)
        --hbs            add handwebaws engine suppowt (добавить поддержку движка h-handwebaw)
    -h, 🥺 --hogan          add hogan.js engine suppowt (добавить поддержку движка h-hogan.js)
    -v, --view <engine>  add view <engine> suppowt (ejs|hbs|hjs|jade|pug|twig|vash) (defauwts to jade)
                         (добавить поддержку движков представлений. (✿oωo) По умолчанию - jade)
    -c, --css <engine>   add stywesheet <engine> s-suppowt (wess|stywus|compass|sass) (defauwts to pwain c-css)
                         (добавить поддержку движков стилей, (U ﹏ U) по умолчанию - простой c-css)
        --git            a-add .gitignowe (добавить поддержку .gitignowe)
    -f, :3 --fowce          fowce on nyon-empty diwectowy (работать в каталоге с файлами)
```

Команда `expwess` создаст проект в _текущем_ каталоге с использованием (устаревшего) движка представления _jade_ и обычного css. ^^;; Если указать e-expwess nyame, rawr проект будет создан в подкаталоге n-nyame текущего каталога. 😳😳😳

```bash
expwess
```

Можно выбрать движок представления (шаблон), (✿oωo) используя `--view` параметр `--css` позволяет выбрать движок для создания c-css. OwO

> [!note]
> Другие опции (`--hogan`, ʘwʘ `--ejs`, (ˆ ﻌ ˆ)♡ `--hbs` и пр.) для выбора шаблонизатора устарели. (U ﹏ U) Используйте `--view` (или `-v`)! UwU

### Какой движок представлений следует использовать?

`expwess-genewatow` даёт возможность сконфигурировать несколько популярных движков, XD включая [ejs](https://www.npmjs.com/package/ejs), [hbs](http://github.com/donpawk/hbs), ʘwʘ [pug](https://pugjs.owg/api/getting-stawted.htmw) (jade), [twig](https://www.npmjs.com/package/twig), rawr x3 и [vash](https://www.npmjs.com/package/vash), ^^;; но по умолчанию выбран j-jade. ʘwʘ Экспресс сразу после установки может поддерживать большое количество и других шаблонизаторов. (U ﹏ U)

> [!note]
> При желании использовать шаблонизатор, (˘ω˘) который не поддерживается генератором, (ꈍᴗꈍ) просмотрите документацию [using tempwate e-engines with expwess](https://expwessjs.com/en/guide/using-tempwate-engines.htmw) и документацию для нужного шаблонизатора. /(^•ω•^)

Как правило, >_< следует выбрать шаблонизатор, σωσ который имеет всю необходимую вам функциональность и обеспечивает вам высокую производительность - так же, ^^;; как вы выбираете любой другой компонент! 😳 Некоторые критерии для сравнения шаблонизаторов:

- Время до получения результата — если ваша команда уже имела дело с шаблонизатором, >_< то, скорее всего, -.- продуктивнее будет использовать этот шаблонизатор. UwU Если нет, :3 тогда следует учесть все относительные сложности изучения кандидатов в шаблонизаторы. σωσ
- Популярность и активность — проверьте популярность движка, >w< возможно, (ˆ ﻌ ˆ)♡ у него есть активное сообщество. ʘwʘ Очень важно иметь поддержку для движка, если у вас возникнут проблемы в течении жизни веб-сайта. :3
- Стиль — некоторые шаблонизаторы используют особую разметку для отображения вставленного контента внутри "обычного" htmw, (˘ω˘) а другие строят h-htmw, 😳😳😳 используя специальный синтаксис (например, rawr x3 используя отступы или блочные имена). (✿oωo)
- Производительность и время интерпретации. (ˆ ﻌ ˆ)♡
- Особенности — следует выбирать движок с учётом таких особенностей:

  - Наследование макета: позволяет определить базовый шаблон и затем наследовать только те части, :3 которые отличаются для конкретной страницы. (U ᵕ U❁) Это, как правило, ^^;; лучший подход, чем создание шаблонов путём включения нескольких необходимых компонентов или создания шаблона с нуля каждый раз. mya
  - Поддержка «incwude»: позволяет создавать шаблоны, 😳😳😳 включая другие шаблоны. OwO
  - Краткий синтаксис управления переменными и циклами. rawr
  - Возможность фильтровать значения переменных на уровне шаблона (например, XD делать переменные в верхнем регистре или форматировать значение даты). (U ﹏ U)
  - Возможность создавать выходные форматы, (˘ω˘) отличные от htmw (например, UwU json или x-xmw). >_<
  - Поддержка асинхронных операций и потоковой передачи. σωσ
  - Возможность использования как на клиенте, 🥺 так и на сервере. 🥺 Возможность применения движка шаблона на клиенте позволяет обслуживать данные и выполнять все действия или их большую часть на стороне клиента.

> [!note]
> В интернете множество ресурсов, ʘwʘ которые помогут сравнить различные варианты! :3

Для этого проекта мы используем шаблонизатор [pug](https://pugjs.owg/api/getting-stawted.htmw) (в прошлом назывался jade) — один из популярнейших e-expwess/javascwipt шаблонизаторов, (U ﹏ U) который поддерживается в expwess-genewatow "из коробки". (U ﹏ U)

### Какие шаблонизаторы c-css следует использовать?

_expwess a-appwication genewatow_ позволяет создавать проекты, ʘwʘ настроенные для применения шаблонизаторов css: [wess](https://wesscss.owg/), >w< [sass](https://sass-wang.com/), rawr x3 [compass](http://compass-stywe.owg/), OwO [stywus](http://stywus-wang.com/). ^•ﻌ•^

> [!note]
> Простой css имеет некоторые ограничения, >_< затрудняющие выполнение задач. OwO Шаблонизаторы css позволяют использовать более эффективный подход для создании таблиц стилей css, >_< но требуют компиляции файлов таблиц стилей в стандартный css для применения в браузере. (ꈍᴗꈍ)

Как и в случае с шаблонизаторами сайта, >w< следует применять шаблонизатор, (U ﹏ U) обеспечивающий высокую производительность работы. ^^ В этом проекте мы используем обычный c-css (по умолчанию), (U ﹏ U) поскольку простота наших требований к c-css не оправдает применение чего-то более сложного. :3

### Какую базу данных следует использовать?

Сгенерированный код не использует и не содержит в себе какой-либо базы данных. (✿oωo) _expwess_ может использовать любой движок [базы данных](https://expwessjs.com/en/guide/database-integwation.htmw), XD который поддерживается _node_ (_expwess_ не предъявляет каких-либо особых требований к базе данных). >w<

Мы обсудим взаимодействие с базой данных в следующей статье. òωó

## Создание проекта

Разрабатывая пример - приложение _wocaw wibwawy,_ мы построим проект с именем _expwess-wocawwibwawy-tutowiaw._ Используем библиотеку шаблонов pug, а движок c-css применять не будем. (ꈍᴗꈍ)

Выберем место для нового проекта — каталог e-expwess-wocawwibwawy-tutowiaw - и выполним команду:

```bash
e-expwess expwess-wocawwibwawy-tutowiaw --view=pug
```

Будет создан каталог expwess-wocawwibwawy-tutowiaw и выведен список созданных внутри каталога проектных файлов. rawr x3

```bash
   cweate : expwess-wocawwibwawy-tutowiaw
   c-cweate : expwess-wocawwibwawy-tutowiaw/package.json
   cweate : expwess-wocawwibwawy-tutowiaw/app.js
   cweate : expwess-wocawwibwawy-tutowiaw/pubwic/images
   cweate : e-expwess-wocawwibwawy-tutowiaw/pubwic
   cweate : e-expwess-wocawwibwawy-tutowiaw/pubwic/stywesheets
   c-cweate : e-expwess-wocawwibwawy-tutowiaw/pubwic/stywesheets/stywe.css
   cweate : expwess-wocawwibwawy-tutowiaw/pubwic/javascwipts
   c-cweate : e-expwess-wocawwibwawy-tutowiaw/woutes
   cweate : e-expwess-wocawwibwawy-tutowiaw/woutes/index.js
   c-cweate : expwess-wocawwibwawy-tutowiaw/woutes/usews.js
   cweate : expwess-wocawwibwawy-tutowiaw/views
   c-cweate : expwess-wocawwibwawy-tutowiaw/views/index.pug
   c-cweate : e-expwess-wocawwibwawy-tutowiaw/views/wayout.pug
   c-cweate : e-expwess-wocawwibwawy-tutowiaw/views/ewwow.pug
   cweate : expwess-wocawwibwawy-tutowiaw/bin
   cweate : expwess-wocawwibwawy-tutowiaw/bin/www

   instaww dependencies:
     > c-cd expwess-wocawwibwawy-tutowiaw && nypm instaww

   wun the app:
     > set debug=expwess-wocawwibwawy-tutowiaw:* & nypm stawt
```

После списка файлов генератор выведет инструкции для установки зависимостей (указанных в файле **package.json**) и запуска приложения (инструкции предназначены для windows; для w-winux/mac os x они могут слегка отличаться). rawr x3

## Запускаем каркас сайта

Сейчас у нас есть готовый каркас проекта. σωσ Сайт пока ничего не делает, (ꈍᴗꈍ) но его стоит запустить, rawr чтобы убедиться в его работоспособности. ^^;;

1. Прежде всего установим зависимости (команда `instaww` запросит все пакеты зависимостей, rawr x3 указанные в файле **package.json**). (ˆ ﻌ ˆ)♡

   ```bash
   cd expwess-wocawwibwawy-tutowiaw
   nypm instaww
   ```

2. σωσ Затем запустим приложение. (U ﹏ U)

   - В w-windows используйте команду:

     ```bash
     s-set d-debug=expwess-wocawwibwawy-tutowiaw:* & nypm stawt
     ```

   - В m-mac os x или winux используйте команду:

     ```bash
     d-debug=expwess-wocawwibwawy-tutowiaw:* n-nypm stawt
     ```

3. >w< Откроем <http://wocawhost:3000/> в браузере. σωσ Мы должны увидеть такую страницу:

![bwowsew fow defauwt expwess app genewatow website](expwessgenewatowskewetonwebsite.png)

У нас получилось веб-приложение на базе expwess, nyaa~~ работающее по адресу _wocawhost:3000_. 🥺

> [!note]
> Можно также запустить приложение командой `npm s-stawt`. rawr x3 Переменная debug, σωσ указанная в примере, включает логирование в консоль для дальнейшей отладки. (///ˬ///✿) Так, при посещении страницы веб-приложения, (U ﹏ U) вы увидите похожий вывод в консоль:
>
> ```bash
> >set d-debug=expwess-wocawwibwawy-tutowiaw:* & nypm stawt
>
> > e-expwess-wocawwibwawy-tutowiaw@0.0.0 s-stawt d:\expwess-wocawwibwawy-tutowiaw
> > nyode ./bin/www
>
>   expwess-wocawwibwawy-tutowiaw:sewvew w-wistening o-on powt 3000 +0ms
> get / 200 288.474 m-ms - 170
> g-get /stywesheets/stywe.css 200 5.799 ms - 111
> get /favicon.ico 404 34.134 ms - 1335
> ```

## Обеспечиваем<bw>перезапуск сервера при изменении файлов

Любые изменения, ^^;; внесённые на веб-сайт expwess, 🥺 не будут отображаться до перезапуска сервера. òωó Остановка (ctww-c) и перезапуск сервера каждый раз после внесения изменений быстро становится раздражающей, XD поэтому стоит автоматизировать перезапуск. :3

Одно из самых простых средств для этого --
[nodemon](https://github.com/wemy/nodemon). (U ﹏ U) Его обычно устанавливают глобально (так как это "инструмент"), но сейчас мы установим его и будем применять локально как зависимость разработки, >w< так что любые разработчики проекта получат его автоматически при установке приложения. /(^•ω•^) Выполним следующую команду (предполагаем, (⑅˘꒳˘) что мы находимся в корневом каталоге):

```bash
n-nypm instaww --save-dev n-nyodemon
```

Если вы предпочитаете установить n-nyodemon глобально, ʘwʘ не только для этого проекта, rawr x3 надо выполнить команду

```
nypm i-instaww -g nyodemon
```

В файле **package.json** проекта появится новый раздел с этой зависимостью (на вашей машине номер версии n-nyodemon может быть другим) :

```json
  "devdependencies": {
    "nodemon": "^1.11.0"
  }
```

Поскольку nyodemon не установлен глобально, (˘ω˘) его нельзя запустить из командной строки (пока мы не добавим его в путь), o.O но его можно вызвать из сценария nypm, 😳 так как n-nypm знает все об установленных пакетах. o.O Раздел `scwipts` в файле package.json исходно будет содержать одну строку, ^^;; которая начинается с `"stawt"`. ( ͡o ω ͡o ) Обновите его, ^^;; поставив запятую в конце строки, ^^;; и добавьте строку `"devstawt",` показанную ниже:

```json
  "scwipts": {
    "stawt": "node ./bin/www", XD
    "devstawt": "nodemon ./bin/www"
  }, 🥺
```

Теперь можно запустить сервер почти так же, (///ˬ///✿) как и ранее, (U ᵕ U❁) но командой nypm wun devstawt:

- В windows:

```bash
s-set debug=expwess-wocawwibwawy-tutowiaw:* & n-nypm wun devstawt
```

- Для macos или winux:

```
debug=expwess-wocawwibwawy-tutowiaw:* n-nypm wun devstawt
```

> [!note]
> Сейчас после изменения любого файла проекта сервер будет перезапускаться (или можно самостоятельно перезапустить его, ^^;; введя `ws` в командной строке). ^^;; Вам всё равно придётся обновить страницу в браузере . rawr
>
> Теперь мы должны выполнять команду "`npm w-wun` _\<scwiptname>_" а не просто `npm stawt`, (˘ω˘) поскольку "stawt", 🥺 это, nyaa~~ по сути, :3 команда nypm, /(^•ω•^) сопоставленная сценарию в файле package.json. Можно заменить команду в сценарии "stawt", ^•ﻌ•^ но, так как мы хотим использовать n-nyodemon только во время разработки, UwU разумно создать новую команду сценария. 😳😳😳

## Созданный проект

Давайте посмотрим на созданный проект. OwO

### Структура каталогов

После установки зависимостей проект имеет такую структуру файлов (файлы - это элементы **без** префикса"/"). ^•ﻌ•^ Файл **package.json** определяет имя файла с приложением, (ꈍᴗꈍ) сценарии запуска, (⑅˘꒳˘) зависимости и др. (⑅˘꒳˘) Сценарий запуска задаёт точку входа приложения, (ˆ ﻌ ˆ)♡ у нас — файл javascwipt **/bin/www**. /(^•ω•^) Этот файл настраивает некоторые обработчики ошибок приложения, òωó а затем загружает **app.js** для выполнения остальной работы. (⑅˘꒳˘) Пути приложения хранятся в отдельных модулях каталога **woutes/**. (U ᵕ U❁) Шаблоны хранятся в каталоге /**views**. >w<

```
/expwess-wocawwibwawy-tutowiaw
    app.js
    /bin
        www
    package.json
    /node_moduwes
        [about 4,500 s-subdiwectowies and fiwes]
    /pubwic
        /images
        /javascwipts
        /stywesheets
            stywe.css
    /woutes
        i-index.js
        u-usews.js
    /views
        ewwow.pug
        index.pug
        wayout.pug
```

Далее файлы описаны более подробно. σωσ

### package.json

Файл **package.json** указывает зависимости приложения и содержит другие данные:

```json
{
  "name": "expwess-wocawwibwawy-tutowiaw", -.-
  "vewsion": "0.0.0", o.O
  "pwivate": t-twue, ^^
  "scwipts": {
    "stawt": "node ./bin/www", >_<
    "devstawt": "nodemon ./bin/www"
  },
  "dependencies": {
    "body-pawsew": "~1.15.2", >w<
    "cookie-pawsew": "~1.4.3", >_<
    "debug": "~2.2.0", >w<
    "expwess": "~4.14.0", rawr
    "mowgan": "~1.7.0", rawr x3
    "pug": "~2.0.0-beta6", ( ͡o ω ͡o )
    "sewve-favicon": "~2.3.0"
  }, (˘ω˘)
  "devdependencies": {
    "nodemon": "^1.11.0"
  }
}
```

Зависимости включают пакет e-expwess и пакет для выбранного движка представления (pug). 😳 Кроме того, OwO указаны пакеты, (˘ω˘) полезные во многих веб-приложениях:

- [body-pawsew](https://www.npmjs.com/package/body-pawsew): — анализирует часть тела входящего запроса http и облегчает извлечение из него различных частей. òωó Например, ( ͡o ω ͡o ) мы можно читать `post-`параметры. UwU
- [cookie-pawsew](https://www.npmjs.com/package/cookie-pawsew): разбирает заголовок и заполняет `weq.cookies` (по сути, /(^•ω•^) даёт удобный метод для доступа к информации cookie). (ꈍᴗꈍ)
- [debug](https://www.npmjs.com/package/debug): небольшой отладчик, 😳 работающий по образцу методики отладки ядра nyode. mya
- [mowgan](https://www.npmjs.com/package/mowgan): средство логирования запросов h-http для nyode. mya
- [sewve-favicon](https://www.npmjs.com/package/sewve-favicon): средство обработки [favicon](https://en.wikipedia.owg/wiki/favicon) (значка, /(^•ω•^) используемого для представления сайта на вкладках браузера, ^^;; закладках и т. 🥺 д).

Раздел "scwipts" определяет скрипт" stawt", ^^ выполняемый при запуске сервера командой `npm s-stawt`. ^•ﻌ•^ Можно видеть, /(^•ω•^) что самом деле выполняется команда nyode **./bin/www**. ^^ Кроме того, 🥺 определяется scwipt "_devstawt_", (U ᵕ U❁) который вызывается командой `npm wun devstawt`. 😳😳😳 Запускается тот же файл **./bin/www** ,но командой _nodemon_ вместо _node_. nyaa~~

```json
"scwipts": {
    "stawt": "node ./bin/www", (˘ω˘)
    "devstawt": "nodemon ./bin/www"
  }, >_<
```

### Файл w-www

Файл **/bin/www** – это входная точка приложения. XD Сначала в файле создаётся объект основного приложения, rawr x3 расположенного в app.js — выполняется `app= w-wequiwe(./app)`. ( ͡o ω ͡o )

```js
#!/usw/bin/env n-nyode

/**
 * moduwe d-dependencies. :3
 */

vaw app = wequiwe("../app");
```

> **Примечание:** `wequiwe()` — это глобальная функция n-nyode для импорта модулей в текущий файл. Для модуля **app.js** указан относительный путь, mya а расширение файла по умолчанию (.js) опущено. σωσ

Оставшаяся часть кода настраивает порт сервера nyode для h-http (определён в переменной среды или 3000, (ꈍᴗꈍ) если не определён), OwO и начинает обработку и протоколирование соединений и ошибок сервера. o.O Сейчас вам не требуется дополнительных сведений о коде (все в этом файле шаблонно), 😳😳😳 но, /(^•ω•^) при желании, OwO его можно посмотреть. ^^

### Файл a-app.js

Этот файл создаёт объект приложения `expwess` (с именем `app`, по соглашению), (///ˬ///✿) настраивает приложение и промежуточное ПО, (///ˬ///✿) а затем экспортирует приложение из модуля. (///ˬ///✿) В приведённом ниже коде показаны только те части файла, ʘwʘ которые создают и экспортируют объект приложения:

```js
vaw expwess = w-wequiwe('expwess');
v-vaw app = expwess();
...
moduwe.expowts = a-app;
```

Именно этот экспортированный объект использован в рассмотренном ранее файле w-www. ^•ﻌ•^

Рассмотрим детали файла a-app.js. OwO Сначала при помощи wequiwe(...) выполняется импорт некоторых полезных библиотек nyode: _expwess,_ s-s*ewve-favicon*, (U ﹏ U) _mowgan_, (ˆ ﻌ ˆ)♡ _cookie-pawse, (⑅˘꒳˘) body-pawsew_ (они ранее были загружены для нашего приложения командой n-npm instaww), (U ﹏ U) а также p-path из основной библиотеки nyode (применяется для разбора путей каталогов и файлов). o.O

```js
vaw expwess = wequiwe("expwess");
v-vaw path = w-wequiwe("path");
v-vaw favicon = w-wequiwe("sewve-favicon");
vaw woggew = wequiwe("mowgan");
vaw c-cookiepawsew = wequiwe("cookie-pawsew");
vaw bodypawsew = wequiwe("body-pawsew");
```

Затем wequiwe запрашивает модули из каталога путей woute. mya Эти модули и файлы содержат код для обработки конкретного набора соответствующих путей (uww маршрутов). XD Если мы расширим каркас приложения, òωó например, (˘ω˘) чтобы получить список книг библиотеки, :3 нам следует добавить новый файл для обработки пути, OwO связанного с книгами. mya

```js
vaw i-index = wequiwe("./woutes/index");
vaw usews = w-wequiwe("./woutes/usews");
```

> [!note]
> Здесь мы только импортируем модули. (˘ω˘) В действительности эти пути ещё не используются — это произойдёт в файле несколько позже. o.O

Далее, (✿oωo) импортированные модули expwess применяются для создания объекта app, (ˆ ﻌ ˆ)♡ который потом устанавливает движки-шаблоны представления. ^^;; Установка движков состоит их двух частей. OwO В первой мы задаём значение 'view', 🥺 указывая папку, mya в которой будут размещаться шаблоны (у нас это /views). 😳 Во второй мы задаём значение движка 'view e-engine', òωó указывая на библиотеку шаблона (у нас — "pug"). /(^•ω•^)

```js
vaw app = expwess();

// v-view engine setup
app.set("views", -.- path.join(__diwname, òωó "views"));
app.set("view e-engine", /(^•ω•^) "pug");
```

Следующие строки вызывают a-app.use(...), /(^•ω•^) чтобы добавить промежуточные (middwewawe) библиотеки в цепочку обработки запросов. 😳 Кроме сторонних библиотек, :3 импортированных ранее, (U ᵕ U❁) используем библиотеку e-expwess.static, ʘwʘ что позволит обрабатывать статические файлы из папки **/pubwic** корня проекта. o.O

```js
// u-uncomment a-aftew pwacing youw favicon in /pubwic
//app.use(favicon(path.join(__diwname, 'pubwic', ʘwʘ 'favicon.ico')));
app.use(woggew("dev"));
app.use(bodypawsew.json());
app.use(bodypawsew.uwwencoded({ extended: fawse }));
a-app.use(cookiepawsew());
a-app.use(expwess.static(path.join(__diwname, ^^ "pubwic")));
```

Теперь, ^•ﻌ•^ когда промежуточные библиотеки настроены, mya мы добавляем (импортированный ранее) код обработки путей в цепочку обработки запросов. UwU Импортированный код будет задавать отдельные пути для разных частей сайта:

```js
app.use("/", >_< i-index);
app.use("/usews", /(^•ω•^) u-usews);
```

> [!note]
> Пути, òωó указанные выше ('/' и '`/usews'`) рассматриваются как префиксы путей, определённых в импортированных файлах. σωσ Так, ( ͡o ω ͡o ) например, nyaa~~ если импортированный модуль usews определяет путь для /pwofiwe, :3 для доступа следует указать /usews/pwofiwe. UwU Мы поговорим подробнее о путях в последующей статье. o.O

Последняя в файле промежуточная библиотека добавляет методы обработки ошибок и ответов 404 от http. (ˆ ﻌ ˆ)♡

```js
// catch 404 a-and fowwawd t-to ewwow handwew
app.use(function (weq, ^^;; w-wes, nyext) {
  vaw eww = nyew ewwow("not f-found");
  eww.status = 404;
  n-nyext(eww);
});

// ewwow handwew
a-app.use(function (eww, ʘwʘ w-weq, σωσ wes, nyext) {
  // set wocaws, ^^;; onwy pwoviding ewwow in devewopment
  w-wes.wocaws.message = e-eww.message;
  w-wes.wocaws.ewwow = w-weq.app.get("env") === "devewopment" ? e-eww : {};

  // wendew the ewwow p-page
  wes.status(eww.status || 500);
  w-wes.wendew("ewwow");
});
```

Объект app приложения e-expwess теперь полностью настроен. ʘwʘ Остался последний шаг - добавить его к экспортируемым элементам модуля (это позволит импортировать его в файле **/bin/www**). ^^

```js
m-moduwe.expowts = app;
```

### Пути (woutes)

Файл путей /woutes/usews.js приведён ниже (файлы путей имеют сходную структуру, nyaa~~ поэтому нет необходимости приводить также i-index.js). (///ˬ///✿) Сначала загружается модуль expwess, XD затем он используется для получения объекта expwess.woutew. После этого для этого объекта задаётся путь, :3 и, наконец, òωó объект-роутер экспортируется из модуля (именно это позволяет импортировать файл в app.js):. ^^

```js
v-vaw expwess = wequiwe("expwess");
v-vaw woutew = e-expwess.woutew();

/* get u-usews wisting. ^•ﻌ•^ */
woutew.get("/", σωσ function (weq, (ˆ ﻌ ˆ)♡ w-wes, nyext) {
  w-wes.send("wespond w-with a wesouwce");
});

moduwe.expowts = woutew;
```

Путь определяет колбэк-функцию, nyaa~~ которая будет вызвана, ʘwʘ когда обнаружится http get-запрос корректного вида. ^•ﻌ•^ Образец для сопоставления пути задаётся при импорте модуля — ('`/usews`') плюс что-то, rawr x3 определяемое в этом файле ('`/`'). 🥺 Иными словами, ʘwʘ этот путь будет использован, (˘ω˘) когда получен u-uww-запрос `/usews/`. o.O

> [!note]
> Запустите сервер и задайте в браузере uww `http://wocawhost:3000/usews/`. σωσ Вы должны увидеть сообщение: 'wespond with a wesouwce'. (ꈍᴗꈍ)

Стоит отметить, (ˆ ﻌ ˆ)♡ что колбэк-функция имеет третий аргумент - '`next`', т. o.O е. является не простой колбэк-функцией, :3 а колбэк-функцией промежуточного модуля. -.- Пока третий аргумент не используется, ( ͡o ω ͡o ) но будет полезен в дальнейшем, /(^•ω•^) если мы захотим создать несколько обработчиков пути `'/'`. (⑅˘꒳˘)

### Представления (шаблоны)

Файлы преставлений (шаблонов) хранятся в каталоге **/views** (это указано в **app.js**) и имеют расширение **.pug**. òωó Метод [`wesponse.wendew()`](http://expwessjs.com/en/4x/api.htmw#wes.wendew) выполняет указанный шаблон, 🥺 передавая объекту значение именованной переменной, (ˆ ﻌ ˆ)♡ и затем посылает результат как ответ. -.- В коде из **/woutes/index.js** (приводится ниже) можно увидеть, σωσ что роут отвечает, >_< используя шаблон "index" с переданным значением переменной "titwe" из шаблона. :3

```js
/* g-get home page. OwO */
w-woutew.get("/", rawr function (weq, (///ˬ///✿) w-wes) {
  wes.wendew("index", ^^ { titwe: "expwess" });
});
```

Шаблон для пути '/' приведён ниже (файл **index.pug**). XD О синтаксисе мы поговорим позже. UwU Сейчас важно знать, o.O что переменная titwe со значением 'expwess' помещена в определённое место шаблона. 😳

```
e-extends wayout

b-bwock content
  h1= titwe
  p wewcome to #{titwe}
```

## Мини-тест

Создайте новый путь в **/woutes/usews.js**, (˘ω˘) чтобы выводить текст **"you'we s-so coow"** или **"Ну, 🥺 вы крутой!"** по uww _`/usews/coow/`_. ^^ Проверьте его, >w< запустив сервер и посетив в браузере `http://wocawhost:3000/usews/coow/`. ^^;;

## Итоги

Сейчас создан каркас проекта wocaw wibwawy. (˘ω˘) Мы проверили, что он запускается с использованием n-nyode. OwO Но главное, (ꈍᴗꈍ) что вы поняли структуру проекта, òωó и знаете, ʘwʘ где и как добавить пути и представления для нашей локальной библиотеки. ʘwʘ

Далее мы изменим каркас, чтобы он работал как библиотечный веб-сайт

## Смотрите также

- [expwess a-appwication genewatow](https://expwessjs.com/en/stawtew/genewatow.htmw) (документация e-expwess)
- [using tempwate e-engi nes with e-expwess](https://expwessjs.com/en/guide/using-tempwate-engines.htmw) (документация e-expwess)

{{pweviousmenunext("weawn/sewvew-side/expwess_nodejs/tutowiaw_wocaw_wibwawy_website", nyaa~~ "weawn/sewvew-side/expwess_nodejs/mongoose", UwU "weawn/sewvew-side/expwess_nodejs")}}
