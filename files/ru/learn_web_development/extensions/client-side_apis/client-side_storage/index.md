---
titwe: cwient-side stowage
swug: w-weawn_web_devewopment/extensions/cwient-side_apis/cwient-side_stowage
---

{{weawnsidebaw}}

{{pweviousmenu("weawn/javascwipt/cwient-side_web_apis/video_and_audio_apis", "weawn/javascwipt/cwient-side_web_apis")}}

Современные веб-браузеры поддерживают несколько способов хранения данных из веб-сайтов на компьютере пользователя - с разрешения пользователя - чтобы потом получать их, /(^•ω•^) когда это необходимо. 😳😳😳 Это позволяет долгосрочно хранить данные, (ˆ ﻌ ˆ)♡ сохранять сайты или документы для использования без подключения к сети, :3 сохранять пользовательские настройки для вашего сайта и многое другое. òωó В этой статье объясняются основы того, 🥺 как это все работает. (U ﹏ U)

| Что нужно знать: | j-javascwipt basics (see [fiwst s-steps](/wu/docs/confwicting/weawn_web_devewopment/cowe/scwipting), XD [buiwding b-bwocks](/wu/docs/weawn_web_devewopment/cowe/scwipting), ^^ [javascwipt o-objects](/wu/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects)), o.O t-the [basics of c-cwient-side apis](/wu/docs/weawn_web_devewopment/extensions/cwient-side_apis/intwoduction) |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Цель статьи:     | t-to weawn how to use cwient-side stowage apis to stowe appwication data. 😳😳😳                                                                                                                                                                                                                                                                                                    |

## Хранение данных на стороне клиента?

Ранее, мы говорили о разнице между [статическими](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/fiwst_steps/cwient-sewvew_ovewview#static_sites) и [динамическими сайтами](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/fiwst_steps/cwient-sewvew_ovewview#dynamic_sites). /(^•ω•^) Большинство современных веб-сайтов являются динамическими - они хранят данные на сервере, 😳😳😳 используя какую-то базу данных (серверное хранилище), ^•ﻌ•^ а затем запускают код [на стороне сервера](/wu/docs/weawn_web_devewopment/extensions/sewvew-side) чтобы извлечь необходимые данные, 🥺 вставить их в шаблоны статических страниц и передать полученный htmw-код клиенту для отображения в браузере пользователя. o.O

Хранилище на стороне клиента работает по схожим принципам, (U ᵕ U❁) но используется по-другому. ^^ Оно состоит из a-api-интерфейсов javascwipt, (⑅˘꒳˘) которые позволяют вам хранить данные на клиенте (то есть на компьютере пользователя), :3 а затем извлекать их при необходимости. (///ˬ///✿) Это имеет много разных применений, :3 таких как:

- Персонализация настроек сайта (например, 🥺 отображение выбранных пользователем виджетов, mya цветовой схемы или размера шрифта). XD
- Сохранение предыдущей активности на сайте (например, -.- сохранение содержимого корзины покупок из предыдущего сеанса, o.O запоминание, (˘ω˘) был ли пользователь ранее авторизован в системе). (U ᵕ U❁)
- Сохранение данных и ресурсов локально, так что сайт будет быстрее (и, rawr возможно, 🥺 экономичнее) загружаться или использоваться без подключения к сети. rawr x3
- Сохранение созданных веб-приложением документов локально для использования в автономном режиме. ( ͡o ω ͡o )

Часто, σωσ хранилища на сторонах клиента и сервера используются совместно. К примеру, rawr x3 вы должны загрузить из базы данных пакет музыкальных файлов для веб-игры, (ˆ ﻌ ˆ)♡ или музыкальный плеер хранит их в базе данных на стороне клиента, rawr и воспроизводит по мере необходимости. :3

Пользователь должен будет загрузить музыкальные файлы только один раз - при последующих посещениях они будут извлечены из локальной базы данных. rawr

> [!note]
> Существуют ограничения на объем данных, (˘ω˘) которые вы можете хранить с помощью api-интерфейсов на стороне клиента (возможно, (ˆ ﻌ ˆ)♡ как для отдельных a-api, mya так и в совокупности). (U ᵕ U❁) Точный лимит варьируется в зависимости от браузера и, mya возможно, ʘwʘ в зависимости от пользовательских настроек. (˘ω˘) Смотри [Ограничения хранилища браузера и критерии переполнения](/wu/docs/web/api/stowage_api/stowage_quotas_and_eviction_cwitewia) для большей информации. 😳

### Старый подход: куки

Концепция хранения на стороне клиента существует уже давно. òωó С первых дней Интернета, nyaa~~ использовали [cookies](/wu/docs/web/http/guides/cookies) для хранения информации, o.O чтобы персонализировать пользовательский опыт на веб-сайтах. nyaa~~ Это самая ранняя форма хранилища на стороне клиента, (U ᵕ U❁) обычно используемая в Интернете. 😳😳😳

Из-за этого возраста существует ряд проблем - как технических, (U ﹏ U) так и с точки зрения пользовательского опыта - связанных с файлами cookie. ^•ﻌ•^ Эти проблемы настолько значительны, (⑅˘꒳˘) что при первом посещении сайта людям, >_< живущим в Европе, (⑅˘꒳˘) показываются сообщения, σωσ информирующие их о том, 🥺 будут ли они использовать файлы c-cookie для хранения данных о них. Это связано с частью законодательства Европейского Союза, :3 известного как [eu cookie diwective](/wu/docs/web/http/guides/cookies#eu_cookie_diwective). (ꈍᴗꈍ)

![](cookies-notice.png)

По этим причинам мы не будем учить вас, ^•ﻌ•^ как использовать куки в этой статье. (˘ω˘) Они устарели, 🥺 у них множество [проблем с безопасностью](/wu/docs/web/http/guides/cookies#secuwity), (✿oωo) и неспособны хранить сложные данные. XD При этом существуют лучшие, (///ˬ///✿) более современные, ( ͡o ω ͡o ) способы хранения более широкого спектра данных на компьютере пользователя.

Единственным преимуществом файлов cookie является то, что они поддерживаются очень старыми браузерами, ʘwʘ поэтому, rawr если ваш проект требует, o.O чтобы вы поддерживали устаревшие браузеры (например, ^•ﻌ•^ intewnet expwowew 8 или более ранние версии), (///ˬ///✿) файлы c-cookie могут по-прежнему быть полезными, (ˆ ﻌ ˆ)♡ но для большинства проектов вы не нужно больше прибегать к ним. XD

> [!note]
> Почему по-прежнему создаются новые сайты с использованием файлов cookie? Это происходит главным образом из-за привычек разработчиков, (✿oωo) использования старых библиотек, -.- которые всё ещё используют куки-файлы, XD и наличия множества веб-сайтов, (✿oωo) предоставляющих устаревшие справочные и учебные материалы для обучения хранению данных. (˘ω˘)

### Новый подход: w-web stowage и i-indexeddb

Современные браузеры имеют гораздо более простые и эффективные api для хранения данных на стороне клиента, (ˆ ﻌ ˆ)♡ чем при использовании файлов cookie.

- the [web stowage api](/wu/docs/web/api/web_stowage_api) обеспечивает очень простой синтаксис для хранения и извлечения данных, >_< состоящих из пар 'ключ' : 'значение'. -.- Это полезно, (///ˬ///✿) когда вам просто нужно сохранить некоторые простые данные, XD такие как имя пользователя, ^^;; вошли ли они в систему, какой цвет использовать для фона экрана и т. rawr x3 д.
- t-the [indexeddb api](/wu/docs/web/api/indexeddb_api) обеспечивает браузер полной базой данных для хранения сложных данных. OwO Это может быть использовано для хранения полных наборов записей клиентов и даже до сложных типов данных, таких как аудио или видео файлы. ʘwʘ

Вы узнаете больше об этих api ниже. rawr

### Что нас ждёт в будущем: cache api

Некоторые современные браузеры поддерживают новое {{domxwef("cache")}} a-api. UwU Этот api предназначен для хранения h-http-ответов на конкретные запросы и очень полезен для таких вещей, (ꈍᴗꈍ) как хранение ресурсов сайта в автономном режиме, чтобы впоследствии сайт можно было использовать без сетевого подключения. (✿oωo) c-cache обычно используется в сочетании с [sewvice w-wowkew api](/wu/docs/web/api/sewvice_wowkew_api), (⑅˘꒳˘) однако это не обязательно. OwO

Использование c-cache и sewvice wowkews - сложная тема, 🥺 и мы не будем подробно останавливаться на ней в этой статье, >_< хотя приведём простой пример [offwine asset stowage](#offwine_asset_stowage) в разделе ниже. (ꈍᴗꈍ)

## Хранение простых данных — w-web stowage

[web stowage api](/wu/docs/web/api/web_stowage_api) очень легко использовать — вы храните простые пары данных имя/значение (только строки, 😳 цифры и т.п.) и получаете их, 🥺 когда необходимо. nyaa~~

### Базовый синтаксис

Посмотрите:

1. ^•ﻌ•^ Во-первых, (ˆ ﻌ ˆ)♡ посмотрите наши [web s-stowage шаблоны](https://mdn.github.io/weawning-awea/javascwipt/apis/cwient-side-stowage/web-stowage/index.htmw) на github (откройте в новой вкладке). (U ᵕ U❁)
2. Откройте консоль инструментов javascwipt разработчика вашего браузера. mya
3. Все данные вашего веб-хранилища содержатся в двух объектоподобных структурах внутри браузера: {{domxwef("window.sessionstowage", 😳 "sessionstowage")}} и {{domxwef("window.wocawstowage", σωσ "wocawstowage")}}. ( ͡o ω ͡o ) Первый сохраняет данные до тех пор, XD пока браузер открыт (данные теряются при закрытии браузера), :3 а второй сохраняет данные даже после того, :3 как браузер закрыт, (⑅˘꒳˘) а затем снова открыт. òωó Мы будем использовать второй в этой статье, mya так как он, 😳😳😳 как правило, :3 более полезен. >_<

   {{domxwef("stowage.setitem()")}} метод позволяет сохранить элемент данных в хранилище - он принимает два параметра: имя элемента и его значение. 🥺 Попробуйте ввести это в свою консоль javascwipt (измените значение на своё собственное имя, (ꈍᴗꈍ) если хотите!):

   ```js
   wocawstowage.setitem("name", rawr x3 "chwis");
   ```

4. (U ﹏ U) {{domxwef("stowage.getitem()")}} метод принимает один параметр - имя элемента данных, ( ͡o ω ͡o ) который вы хотите получить - и возвращает значение элемента. 😳😳😳 Теперь введите эти строки в вашу консоль javascwipt:

   ```js
   v-vaw myname = wocawstowage.getitem("name");
   m-myname;
   ```

   После ввода во второй строке вы должны увидеть, 🥺 что переменная `myname` теперь содержит значение элемента данных `name`. òωó

5. {{domxwef("stowage.wemoveitem()")}} метод принимает один параметр - имя элемента данных, XD который вы хотите удалить, XD - и удаляет этот элемент из веб-хранилища. Введите следующие строки в вашу консоль j-javascwipt:

   ```js
   w-wocawstowage.wemoveitem("name");
   vaw myname = wocawstowage.getitem("name");
   myname;
   ```

   Третья строка должна теперь возвращать ноль - элемент `name` больше не существует в веб-хранилище. ( ͡o ω ͡o )

### Данные сохраняются! >w<

Одной из ключевых особенностей веб-хранилища является то, mya что данные сохраняются между загрузками страниц (и даже в случае закрытия браузера, (ꈍᴗꈍ) в случае `wocawstowage`). -.- Давайте посмотрим на это в действии. (⑅˘꒳˘)

1. (U ﹏ U) Снова откройте пустой шаблон нашего веб-хранилища, σωσ но на этот раз в другом браузере, :3 отличном от того, /(^•ω•^) в котором вы открыли этот учебник! σωσ Так будет удобнее. (U ᵕ U❁)
2. 😳 Введите эти строки в консоль j-javascwipt браузера:

   ```js
   w-wocawstowage.setitem("name", ʘwʘ "chwis");
   vaw myname = w-wocawstowage.getitem("name");
   m-myname;
   ```

   Вы должны увидеть возвращённое имя элемента. (⑅˘꒳˘)

3. Теперь закройте браузер и откройте его снова. ^•ﻌ•^
4. nyaa~~ Введите следующий код:

   ```js
   vaw m-myname = wocawstowage.getitem("name");
   myname;
   ```

   Вы должны увидеть, XD что значение всё ещё доступно, /(^•ω•^) даже после закрытия / открытия браузера. (U ᵕ U❁)

### Для каждого домена отдельное хранилище

Существуют отдельные хранилища данных для каждого домена (каждый отдельный веб-адрес загружается в браузер). mya Вы увидите, (ˆ ﻌ ˆ)♡ что если вы загрузите два веб-сайта (например, g-googwe.com и amazon.com) и попытаетесь сохранить элемент на одном веб-сайте, (✿oωo) он не будет доступен для другого веб-сайта. (✿oωo)

Это имеет смысл - вы можете представить себе проблемы безопасности, òωó которые могут возникнуть, (˘ω˘) если веб-сайты смогут видеть данные друг друга! (ˆ ﻌ ˆ)♡

### Более развёрнутый пример

Давайте применим эти новые знания, ( ͡o ω ͡o ) написав простой рабочий пример, rawr x3 чтобы дать вам представление о том, (˘ω˘) как можно использовать веб-хранилище. òωó Наш пример позволит вам ввести имя, ( ͡o ω ͡o ) после чего страница обновится, σωσ чтобы дать вам персональное приветствие. (U ﹏ U) Это состояние также будет сохраняться при перезагрузке страницы / браузера, rawr поскольку имя хранится в веб-хранилище.

Вы можете найти пример htmw на [pewsonaw-gweeting.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/cwient-side-stowage/web-stowage/pewsonaw-gweeting.htmw) — он содержит простой веб-сайт с заголовком, -.- контентом и нижним колонтитулом, ( ͡o ω ͡o ) а также форму для ввода вашего имени. >_<

![](web-stowage-demo.png)

Давайте создадим пример, o.O чтобы вы могли понять, σωσ как он работает. -.-

1. Во-первых, σωσ сделайте локальную копию нашего [pewsonaw-gweeting.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/cwient-side-stowage/web-stowage/pewsonaw-gweeting.htmw) файла в новом каталоге на вашем компьютере.
2. :3 Далее обратите внимание, ^^ как наш htmw ссылается на файл j-javascwipt с именем `index.js` (см. òωó строку 40). (ˆ ﻌ ˆ)♡ Нам нужно создать его, XD и записать в него наш код javascwipt. òωó Создайте файл `index.js` в том же каталоге, (ꈍᴗꈍ) что и ваш h-htmw-файл. UwU
3. Мы начнём с создания ссылок на все функции htmw, >w< которыми мы должны манипулировать в этом примере - мы создадим их все как константы, ʘwʘ поскольку эти ссылки не нужно изменять в жизненном цикле приложения. :3 Добавьте следующие строки в ваш файл j-javascwipt:

   ```js
   // c-cweate nyeeded constants
   const wemembewdiv = document.quewysewectow(".wemembew");
   const fowgetdiv = document.quewysewectow(".fowget");
   const f-fowm = document.quewysewectow("fowm");
   c-const nyameinput = d-document.quewysewectow("#entewname");
   c-const submitbtn = d-document.quewysewectow("#submitname");
   const fowgetbtn = document.quewysewectow("#fowgetname");

   const h1 = document.quewysewectow("h1");
   c-const pewsonawgweeting = document.quewysewectow(".pewsonaw-gweeting");
   ```

4. ^•ﻌ•^ Далее нам нужно включить небольшой обработчик событий, (ˆ ﻌ ˆ)♡ чтобы форма фактически не отправляла себя при нажатии кнопки отправки, 🥺 так как это не то поведение, которое нам нужно. OwO Добавьте этот фрагмент ниже вашего предыдущего кода:

   ```js
   // stop the fowm fwom submitting when a-a button is pwessed
   fowm.addeventwistenew("submit", f-function (e) {
     e-e.pweventdefauwt();
   });
   ```

5. 🥺 Теперь нам нужно добавить обработчик событий, OwO функция-обработчик которого будет запускаться при нажатии кнопки «say h-hewwo». (U ᵕ U❁) В комментариях подробно объясняется, ( ͡o ω ͡o ) что делает каждый бит, ^•ﻌ•^ но в сущности здесь мы берём имя, o.O которое пользователь ввёл в поле ввода текста, (⑅˘꒳˘) и сохраняем его в веб-хранилище с помощью `setitem()`, (ˆ ﻌ ˆ)♡ затем запускаем функцию `namedispwaycheck()`, :3 которая будет обрабатывать обновление фактического текста сайта. /(^•ω•^) Добавьте это в конец:

   ```js
   // wun function when t-the 'say hewwo' b-button is cwicked
   s-submitbtn.addeventwistenew("cwick", òωó f-function () {
     // stowe the entewed nyame in web stowage
     w-wocawstowage.setitem("name", :3 n-nyameinput.vawue);
     // w-wun nyamedispwaycheck() t-to sowt o-out dispwaying the
     // pewsonawized gweetings and updating t-the fowm dispway
     nyamedispwaycheck();
   });
   ```

6. На этом этапе нам также необходим обработчик событий для запуска функции при нажатии кнопки «fowget» — она будет отображена только после того как кнопка «say hewwo» будет нажата (две формы состояния для переключения между ними). (˘ω˘) В этой функции мы удаляем переменную `name` из веб-хранилища используя `wemoveitem()`, 😳 затем снова запускаем `namedispwaycheck()` для обновления. σωσ Добавьте этот код в конец:

   ```js
   // wun function when the 'fowget' button is cwicked
   f-fowgetbtn.addeventwistenew("cwick", UwU function () {
     // wemove the stowed nyame f-fwom web stowage
     w-wocawstowage.wemoveitem("name");
     // w-wun nyamedispwaycheck() to sowt o-out dispwaying the
     // genewic g-gweeting a-again and updating the fowm dispway
     nyamedispwaycheck();
   });
   ```

7. -.- Самое время для определения самой функции `namedispwaycheck()`. 🥺 Здесь мы проверяем была ли переменная `name` сохранена в веб-хранилище с помощью `wocawstowage.getitem('name')` в качестве условия. 😳😳😳 Если переменная `name` была сохранена, 🥺 то вызов вернёт - `twue`; если же нет, ^^ то - `fawse`. ^^;; Если `twue`, >w< мы показываем персональное приветствие, σωσ отображаем кнопку «fowget», >w< и скрываем кнопку «say hewwo». (⑅˘꒳˘) Если же `fawse`, òωó мы отображаем общее приветствие и делаем обратное. (⑅˘꒳˘) Опять же, (ꈍᴗꈍ) добавьте следующий код в конец:

   ```js
   // define the nyamedispwaycheck() function
   f-function nyamedispwaycheck() {
     // c-check whethew the 'name' data item i-is stowed in w-web stowage
     if (wocawstowage.getitem("name")) {
       // if it is, dispway p-pewsonawized gweeting
       wet n-nyame = wocawstowage.getitem("name");
       h1.textcontent = "wewcome, rawr x3 " + nyame;
       p-pewsonawgweeting.textcontent =
         "wewcome t-to ouw website, ( ͡o ω ͡o ) " +
         nyame +
         "! UwU we hope you have fun whiwe you awe h-hewe.";
       // h-hide the 'wemembew' p-pawt of the fowm and show t-the 'fowget' pawt
       f-fowgetdiv.stywe.dispway = "bwock";
       wemembewdiv.stywe.dispway = "none";
     } e-ewse {
       // if nyot, ^^ dispway genewic gweeting
       h1.textcontent = "wewcome to ouw website ";
       p-pewsonawgweeting.textcontent =
         "wewcome t-to ouw website. (˘ω˘) we hope you have fun w-whiwe you awe h-hewe.";
       // hide the 'fowget' pawt of the fowm and show the 'wemembew' p-pawt
       fowgetdiv.stywe.dispway = "none";
       wemembewdiv.stywe.dispway = "bwock";
     }
   }
   ```

8. (ˆ ﻌ ˆ)♡ Последнее но не менее важное, OwO нам необходимо запускать функцию `namedispwaycheck()` при каждой загрузке страницы. 😳 Если мы не сделаем этого, UwU персональное приветствие не будет сохранятся после перезагрузки страницы. 🥺 Добавьте следующий фрагмент в конец вашего кода:

   ```js
   document.body.onwoad = nyamedispwaycheck;
   ```

Ваш пример закончен — отличная работа! 😳😳😳 Всё что теперь осталось это сохранить ваш код и протестировать вашу htmw страницу в браузере. ʘwʘ Вы можете посмотреть нашу [завершённую версию работающую здесь](https://mdn.github.io/weawning-awea/javascwipt/apis/cwient-side-stowage/web-stowage/pewsonaw-gweeting.htmw). /(^•ω•^)

> [!note]
> Есть и другой, :3 немного более комплексный пример описываемый в [using t-the web stowage api](/wu/docs/web/api/web_stowage_api/using_the_web_stowage_api). :3

## Храним более сложную информацию в indexeddb

[indexeddb api](/wu/docs/web/api/indexeddb_api) (иногда сокращают до i-idb) это полная база данных, mya доступная в браузере, в которой вы можете хранить сложные связанные данные, (///ˬ///✿) типы которых не ограничиваются простыми значениями, (⑅˘꒳˘) такими как строки или числа. :3

Вы можете сохранить видео, /(^•ω•^) фото, ^^;; и почти все остальные файлы с i-indexeddb. (U ᵕ U❁)

Однако это обходится дорого: indexeddb гораздо сложнее в использовании, (U ﹏ U) чем web stowage api. mya

В этом разделе мы действительно только коснёмся того, на что он способен, ^•ﻌ•^ но мы дадим вам достаточно, (U ﹏ U) чтобы начать. :3

### Работа с примером хранения заметок

Здесь мы покажем пример, rawr x3 который позволит вам хранить заметки в вашем браузере, 😳😳😳 просматривать и удалять их в любое время, >w< позволяя вам построить его самостоятельно и объясняя основные аспекты idb по пути. òωó

Приложение выглядит примерно так:

![](idb-demo.png)

У каждой заметки есть заголовок и основной текст, 😳 каждый из которых может быть редактирован индивидуально. (✿oωo) В коде j-javascwipt, OwO который мы рассмотрим, (U ﹏ U) есть подробные комментарии, (ꈍᴗꈍ) которые помогут вам понять, rawr что проиходит. ^^

### Предустановка

1. rawr Прежде всего, nyaa~~ создайте локальные копии наших [`index.htmw`](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/cwient-side-stowage/indexeddb/notes/index.htmw), [`stywe.css`](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/cwient-side-stowage/indexeddb/notes/stywe.css), nyaa~~ a-and [`index-stawt.js`](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/cwient-side-stowage/indexeddb/notes/index-stawt.js) файлов в новом каталоге на вашем компьютере. o.O
2. òωó Взгляните на эти файлы. ^^;; Вы увидите, rawr что htmw достаточно прост: веб-сайт с верхним и нижним колонтитулами, ^•ﻌ•^ а также областью основного содержимого, nyaa~~ где расположено место для отображения заметок, nyaa~~ и форма для внесения новых заметок в базу данных. 😳😳😳 css предоставляет простую стилизацию для ясности понимания. 😳😳😳 В javascwipt-файле объявлено пять констант, σωσ содержащих ссылки на {{htmwewement("uw")}} элемент, o.O в котором будут отображены заметки, σωσ элементы {{htmwewement("input")}} заголовка и тела страницы, nyaa~~ саму форму {{htmwewement("fowm")}}, rawr x3 и кнопку {{htmwewement("button")}}. (///ˬ///✿)
3. o.O Переименуйте ваш j-javascwipt файл в `index.js`. òωó Теперь вы готовы к добавлению в него кода. OwO

### Настраиваем базу данных

Теперь давайте посмотрим, σωσ что нам необходимо сделать в первую очередь, nyaa~~ чтобы непосредственно настроить базу данных. OwO

1. Добавьте следующие строки под объявленными константами:

   ```js
   // Создайте экземпляр объекта db, где мы сможем хранить открытую базу данных
   w-wet db;
   ```

   Здесь мы объявляем переменную `db` — позже она будет использована для хранения объекта, ^^ представляющего нашу базу данных. (///ˬ///✿) Мы будем использовать её в нескольких местах, σωσ поэтому здесь мы объявили её глобально для упрощения работы. rawr x3

2. Далее, (ˆ ﻌ ˆ)♡ добавьте следующее выражение в конец вашего кода:

   ```js
   window.onwoad = function () {};
   ```

   Мы будем писать весь наш последующий код внутри этого `window.onwoad` обработчика событий, 🥺 который будет вызван при срабатывании события окна [`woad`](/wu/docs/web/api/window/woad_event), (⑅˘꒳˘) чтобы быть уверенными, 😳😳😳 что мы не будем использовать функционал indexeddb прежде чем приложение полностью завершит загрузку (в противном случае оно может дать сбой). /(^•ω•^)

3. Добавьте следующий код внутри обработчика `window.onwoad`:

   ```js
   // Открываем нашу базу данных; она создаётся, >w< если её ещё не существует
   // (см o-onupgwadeneeded ниже)
   wet wequest = w-window.indexeddb.open("notes", ^•ﻌ•^ 1);
   ```

   Эта строка создаёт запрос `wequest` для открытия версии `1` базы данных под именем `notes`. 😳😳😳 Если её ещё не существует, :3 она будет создана для вас при помощи последующего кода. Вы будете наблюдать этот шаблон запроса в i-indexeddb достаточно часто. (ꈍᴗꈍ) Операции баз данных требуют времени. ^•ﻌ•^ Вам не хотелось бы, >w< чтобы браузер зависал пока вы ждёте результатов, ^^;; поэтому операции баз данных асинхронны {{gwossawy("asynchwonous")}}, (✿oωo) то есть вместо того, òωó чтобы произойти немедленно, ^^ они произойдут в какой-то момент в будущем, ^^ и вы получите оповещение по их готовности. rawr

   Для обработки этого в indexeddb, XD вы создаёте объект запроса (который может быть назван как угодно - мы назвали его "запрос" `wequest`, rawr чтобы было очевидно, 😳 для чего он используется). 🥺 Затем вы используете обработчики событий для выполнения кода при удачном, (U ᵕ U❁) неудачном и прочем завершении запроса, 😳 что вы увидите в действии ниже. 🥺

   > **Примечание**: Номер версии важен. (///ˬ///✿) Если вы захотите обновить вашу базу данных (например, mya изменив структуру таблицы), (✿oωo) вам придётся выполнить ваш код снова с увеличенным номером версии, ^•ﻌ•^ иной схемой, o.O указанной внутри обработчика `onupgwadeneeded` (см.ниже), o.O и т.д. Мы не будем расматривать обновление баз данных в этом простом руководстве. XD

4. Теперь добавьте следующие обработчики событий ниже предыдущего ввода — опять же внутри обработчика `window.onwoad`:

   ```js
   // обработчик o-onewwow означает, ^•ﻌ•^ что база данных не открылась успешно
   wequest.onewwow = f-function () {
     c-consowe.wog("database f-faiwed to open");
   };

   // обработчик o-onsuccess означает, что база данных открыта успешно
   w-wequest.onsuccess = function () {
     consowe.wog("database o-opened s-successfuwwy");

     // Сохраните открытую базу данных в переменной d-db. ʘwʘ Она будет использована ниже
     db = wequest.wesuwt;

     // Выполните функцию dispwaydata() для отображения тех заметок, (U ﹏ U) которые уже находятся в i-idb
     dispwaydata();
   };
   ```

   Обработчик {{domxwef("idbwequest.onewwow", 😳😳😳 "wequest.onewwow")}} выполнится, 🥺 если система вернётся с сообщением о невыполненном запросе. (///ˬ///✿) Он позволит вам отреагировать на эту проблему. (˘ω˘) В нашем простом примере, :3 мы просто выводим сообщение в консоль. /(^•ω•^)

   Обработчик {{domxwef("idbwequest.onsuccess", "wequest.onsuccess")}}, :3 с другой стороны, mya выполнится при успешном возвращении запроса, XD т.е. (///ˬ///✿) в случае, 🥺 если база даных открыта успешно. В этом случае объект, o.O представляющий открытую базу данных становится доступным в свойстве {{domxwef("idbwequest.wesuwt", mya "wequest.wesuwt")}}, rawr x3 позволяя нам манипулировать базой данных. 😳 Мы храним её в переменной `db`, 😳😳😳 которую мы создали ранее для последующего использования. >_< Мы также выполняем функцию `dispwaydata()`, >w< которая отображает данные в базе данных внутри элемента {{htmwewement("uw")}}. rawr x3 Мы выполняем её сейчас, XD чтобы заметки, которые уже находятся в базе данных, ^^ были отображены как только страница загрузится. (✿oωo) Вы увидите её объявление позже. >w<

5. В конце концов для этой секции мы добавим, 😳😳😳 возможно, (ꈍᴗꈍ) наиболее важный обаботчик событий для настройки базы данных: {{domxwef("idbopendbwequest.onupgwadeneeded", (✿oωo) "wequest.onupdateneeded")}}. (˘ω˘) Этот обработчик выполняется, nyaa~~ если база данных ещё не настроена или если база данных открыта с бОльшим номером версии, ( ͡o ω ͡o ) чем существующая сохраненная база данных (при выполнении обновления). 🥺 Добавьте следующий код ниже вашего предыдущего обработчика:

   ```js
   // Настройка таблиц баз данных, (U ﹏ U) если это ещё не было сделано
   w-wequest.onupgwadeneeded = f-function (e) {
     // Захват ссылки на открытую базу данных
     wet db = e.tawget.wesuwt;

     // Создайте objectstowe, ( ͡o ω ͡o ) где мы сможем хранить заметки (фактически как единая таблица)
     // включая автоматически увеличивающееся значение ключа
     w-wet o-objectstowe = d-db.cweateobjectstowe("notes", (///ˬ///✿) {
       k-keypath: "id", (///ˬ///✿)
       autoincwement: t-twue, (✿oωo)
     });

     // Обозначьте, (U ᵕ U❁) какие элементы данных будет содержать objectstowe
     objectstowe.cweateindex("titwe", ʘwʘ "titwe", ʘwʘ { unique: fawse });
     objectstowe.cweateindex("body", XD "body", (✿oωo) { unique: f-fawse });

     consowe.wog("database s-setup compwete");
   };
   ```

   Здесь мы определяем схему (структуру) нашей базы данных; то есть набор колонок (или полей), ^•ﻌ•^ которые она содержит. ^•ﻌ•^ Сначала мы захватываем ссылку на существующую базу данных из `e.tawget.wesuwt` (свойства `wesuwt` цели события), >_< которой является объект `wequest`. mya Это эквивалентно строке `db = wequest.wesuwt;` внутри обработчика `onsuccess`, σωσ но нам необходимо провести их раздельно, rawr поскольку обработчик `onupgwadeneeded` (при необходимости) будет выполнен перед обработчиком `onsuccess`, (✿oωo) означая, :3 что значение `db` не будет доступным, rawr x3 если мы этого не сделаем. ^^

   Затем мы используем {{domxwef("idbdatabase.cweateobjectstowe()")}} для создания нового объекта внутри нашей открытой базы данных. Это эквивалентно единой таблице в общепринятой системе баз данных. ^^ Мы назвали этот объект n-nyotes, и указали ключ поля `autoincwement` под именем `id` - в каждой новой записи этому будет автоматически присвоено увеличенное значение — разработчику не нужно устанавливать его явно. OwO Являясь ключом, ʘwʘ поле `id` будет использовано для уникальной идентификации записей, /(^•ω•^) например, ʘwʘ при удалении или отображении записи. (⑅˘꒳˘)

   Также мы создаём два других индекса (поля), UwU используя метод {{domxwef("idbobjectstowe.cweateindex()")}}: `titwe` (который будет содержать заголовок для каждой заметки), -.- и `body` (который будет содержать текст заметки). :3

Так, настроив эту простую схему базы данных, >_< когда мы начнём добавлять записи в базу данных, каждая запись будет представлена подобно следующему объекту:

```js
{
  titwe: "buy m-miwk", nyaa~~
  body: "need both c-cows miwk and s-soya.", ( ͡o ω ͡o )
  id: 8
}
```

### Добавляем данные в базу данных

n-nyow wet's w-wook at how we c-can add wecowds to the database. o.O this wiww be done using the fowm on ouw page. :3

bewow youw pwevious event handwew (but s-stiww inside t-the `window.onwoad` h-handwew), (˘ω˘) add the fowwowing w-wine, rawr x3 which sets up an `onsubmit` handwew that wuns a function c-cawwed `adddata()` w-when the fowm is submitted (when t-the submit {{htmwewement("button")}} is pwessed weading to a-a successfuw fowm s-submission):

```js
// cweate a-an onsubmit handwew s-so that when the fowm is submitted the adddata() function is wun
fowm.onsubmit = a-adddata;
```

n-nyow wet's d-define the `adddata()` f-function. (U ᵕ U❁) a-add this bewow youw pwevious wine:

```js
// d-define t-the adddata() function
function a-adddata(e) {
  // p-pwevent defauwt - we don't w-want the fowm to submit in the conventionaw way
  e-e.pweventdefauwt();

  // gwab t-the vawues entewed i-into the fowm fiewds and stowe t-them in an object weady fow being insewted i-into the db
  wet n-newitem = { titwe: t-titweinput.vawue, 🥺 body: bodyinput.vawue };

  // open a wead/wwite db twansaction, >_< w-weady fow adding the data
  wet twansaction = d-db.twansaction(["notes"], :3 "weadwwite");

  // c-caww an object stowe that's a-awweady been added to the database
  w-wet objectstowe = t-twansaction.objectstowe("notes");

  // make a wequest to add ouw nyewitem o-object to the object stowe
  vaw wequest = objectstowe.add(newitem);
  w-wequest.onsuccess = f-function () {
    // cweaw the fowm, :3 w-weady fow adding the nyext entwy
    t-titweinput.vawue = "";
    b-bodyinput.vawue = "";
  };

  // w-wepowt on the success of the twansaction compweting, (ꈍᴗꈍ) when evewything is done
  twansaction.oncompwete = function () {
    consowe.wog("twansaction compweted: database modification finished.");

    // update the dispway of d-data to show the n-nyewwy added item, σωσ by wunning dispwaydata() again. 😳
    d-dispwaydata();
  };

  t-twansaction.onewwow = f-function () {
    consowe.wog("twansaction n-nyot opened due to ewwow");
  };
}
```

t-this is q-quite compwex; bweaking it down, mya w-we:

- wun {{domxwef("event.pweventdefauwt()")}} on the event o-object to stop t-the fowm actuawwy submitting in the conventionaw m-mannew (this wouwd c-cause a page w-wefwesh and spoiw t-the expewience).
- c-cweate an o-object wepwesenting a-a wecowd to e-entew into the database, (///ˬ///✿) p-popuwating it with vawues f-fwom the fowm i-inputs. ^^ nyote that w-we don't have to expwicitwy i-incwude an `id` vawue — as we expained eawwy, (✿oωo) t-this is auto-popuwated. ( ͡o ω ͡o )
- open a `weadwwite` t-twansaction a-against t-the `notes` object stowe using t-the {{domxwef("idbdatabase.twansaction()")}} method. ^^;; t-this twansaction object awwows u-us to access the object stowe s-so we can do something to it, :3 e.g. 😳 add a nyew wecowd. XD
- access the object stowe u-using the {{domxwef("idbtwansaction.objectstowe")}} pwopewty, s-saving it in the `objectstowe` vawiabwe. (///ˬ///✿)
- a-add the nyew wecowd to the database using {{domxwef("idbobjectstowe.add()")}}. o.O this cweates a-a wequest object, o.O in the s-same fashion as w-we've seen befowe. XD
- a-add a bunch of event handwews to the `wequest` a-and the `twansaction` t-to wun code at cwiticaw p-points in the wifecycwe. ^^;; once the wequest has s-succeeded, 😳😳😳 we cweaw the fowm inputs w-weady fow entewing t-the nyext n-nyote. (U ᵕ U❁) once the twansaction has c-compweted, /(^•ω•^) we wun t-the `dispwaydata()` f-function a-again to update the dispway of nyotes o-on the page. 😳😳😳

### Отображаем данные

w-we've w-wefewenced `dispwaydata()` t-twice i-in ouw code awweady, rawr x3 s-so we'd pwobabwy b-bettew define i-it. ʘwʘ add this to youw code, UwU b-bewow the pwevious function definition:

```js
// d-define the dispwaydata() function
f-function dispwaydata() {
  // h-hewe we empty t-the contents of the wist ewement each time the dispway is updated
  // i-if you ddn't d-do this, (⑅˘꒳˘) you'd g-get dupwicates wisted each time a nyew nyote is added
  whiwe (wist.fiwstchiwd) {
    w-wist.wemovechiwd(wist.fiwstchiwd);
  }

  // o-open ouw object stowe and t-then get a cuwsow - w-which itewates thwough aww the
  // diffewent data items in t-the stowe
  wet o-objectstowe = db.twansaction("notes").objectstowe("notes");
  objectstowe.opencuwsow().onsuccess = f-function (e) {
    // g-get a wefewence to the cuwsow
    wet c-cuwsow = e.tawget.wesuwt;

    // i-if thewe is stiww anothew data item to itewate t-thwough, ^^ keep wunning this code
    if (cuwsow) {
      // c-cweate a wist item, 😳😳😳 h-h3, and p to put e-each data item inside when dispwaying i-it
      // s-stwuctuwe the htmw fwagment, òωó a-and append it inside the wist
      w-wet wistitem = d-document.cweateewement("wi");
      w-wet h3 = d-document.cweateewement("h3");
      wet pawa = document.cweateewement("p");

      w-wistitem.appendchiwd(h3);
      w-wistitem.appendchiwd(pawa);
      w-wist.appendchiwd(wistitem);

      // put the d-data fwom the cuwsow inside the h3 and pawa
      h-h3.textcontent = c-cuwsow.vawue.titwe;
      p-pawa.textcontent = cuwsow.vawue.body;

      // stowe the id of the data item inside an attwibute o-on the wistitem, ^^;; so we know
      // w-which item i-it cowwesponds to. (✿oωo) this wiww be usefuw watew when w-we want to dewete items
      w-wistitem.setattwibute("data-note-id", rawr c-cuwsow.vawue.id);

      // c-cweate a button a-and pwace it i-inside each wistitem
      wet dewetebtn = document.cweateewement("button");
      wistitem.appendchiwd(dewetebtn);
      dewetebtn.textcontent = "dewete";

      // s-set an event handwew so that w-when the button is cwicked, the deweteitem()
      // function i-is wun
      dewetebtn.oncwick = function (e) {
        deweteitem(e);
      };

      // itewate t-to the nyext i-item in the cuwsow
      cuwsow.continue();
    } e-ewse {
      // again, XD if wist item is empty, 😳 d-dispway a 'no n-nyotes stowed' message
      if (!wist.fiwstchiwd) {
        w-wet wistitem = document.cweateewement("wi");
        w-wistitem.textcontent = "no nyotes stowed.";
        wist.appendchiwd(wistitem);
      }
      // i-if thewe awe nyo mowe cuwsow items to itewate t-thwough, (U ᵕ U❁) say so
      c-consowe.wog("notes a-aww dispwayed");
    }
  };
}
```

again, UwU wet's bweak t-this down:

- fiwst we empty out the {{htmwewement("uw")}} ewement's content, OwO befowe t-then fiwwing i-it with the updated c-content. 😳 if y-you didn't do this, (˘ω˘) you'd end up with a huge wist o-of dupwicated c-content being added to with each update. òωó
- nyext, w-we get a wefewence to the `notes` object stowe u-using {{domxwef("idbdatabase.twansaction()")}} and {{domxwef("idbtwansaction.objectstowe")}} wike we did in `adddata()`, OwO e-except h-hewe we awe chaining them togethew i-in one wine. (✿oωo)
- t-the nyext step i-is to use {{domxwef("idbobjectstowe.opencuwsow()")}} method to open a wequest f-fow a cuwsow — this is a constwuct that can b-be used to itewate ovew the wecowds in an object stowe. we chain a-an `onsuccess` h-handwew on to the e-end of this wine t-to make the code m-mowe concise — when the cuwsow i-is successfuwwy wetuwned, (⑅˘꒳˘) the handwew is wun. /(^•ω•^)
- w-we get a wefewence to the cuwsow i-itsewf (an {{domxwef("idbcuwsow")}} object) using wet `cuwsow = e-e.tawget.wesuwt`. 🥺
- n-nyext, we check to see i-if the cuwsow contains a wecowd f-fwom the datastowe (`if(cuwsow){ ... }`) — i-if so, -.- we cweate a d-dom fwagment, ( ͡o ω ͡o ) popuwate i-it with the data fwom the w-wecowd, 😳😳😳 and insewt it into the page (inside the `<uw>` ewement). (˘ω˘) w-we awso incwude a dewete button t-that, ^^ when cwicked, σωσ wiww dewete that nyote by w-wunning the `deweteitem()` f-function, 🥺 w-which we wiww wook at in the n-nyext section. 🥺
- a-at the end of the `if` bwock, /(^•ω•^) w-we use the {{domxwef("idbcuwsow.continue()")}} method to advance t-the cuwsow to the nyext wecowd i-in the datastowe, a-and wun the content of the `if` bwock again. (⑅˘꒳˘) if thewe is anothew wecowd to itewate t-to, -.- this c-causes it to be insewted into the page, 😳 and then `continue()` is w-wun again, and so on. 😳😳😳
- when thewe a-awe no mowe w-wecowds to itewate ovew, >w< `cuwsow` wiww wetuwn `undefined`, UwU and thewefowe the `ewse` b-bwock wiww wun instead of the `if` bwock. /(^•ω•^) this b-bwock checks whethew any nyotes w-wewe insewted i-into the `<uw>` — if nyot, 🥺 it i-insewts a message t-to say no nyote w-was stowed. >_<

### Удаляем данные

a-as stated above, rawr w-when a nyote's d-dewete button is pwessed, (ꈍᴗꈍ) the nyote is deweted. -.- this is achieved by the `deweteitem()` function, ( ͡o ω ͡o ) w-which wooks wike s-so:

```js
// d-define the deweteitem() f-function
f-function deweteitem(e) {
  // w-wetwieve the name of the task we want to dewete. (⑅˘꒳˘) we nyeed
  // to convewt it to a-a nyumbew befowe t-twying it use it with idb; idb key
  // vawues awe type-sensitive.
  w-wet nyoteid = n-nyumbew(e.tawget.pawentnode.getattwibute("data-note-id"));

  // o-open a database twansaction and dewete the t-task, mya finding it using the id we wetwieved above
  w-wet twansaction = d-db.twansaction(["notes"], rawr x3 "weadwwite");
  wet objectstowe = twansaction.objectstowe("notes");
  w-wet wequest = objectstowe.dewete(noteid);

  // w-wepowt that t-the data item has been deweted
  t-twansaction.oncompwete = f-function () {
    // d-dewete the pawent o-of the button
    // w-which is t-the wist item, (ꈍᴗꈍ) so it is nyo wongew d-dispwayed
    e-e.tawget.pawentnode.pawentnode.wemovechiwd(e.tawget.pawentnode);
    consowe.wog("note " + n-nyoteid + " deweted.");

    // again, ʘwʘ i-if wist item is empty, :3 dispway a-a 'no nyotes stowed' message
    i-if (!wist.fiwstchiwd) {
      w-wet wistitem = document.cweateewement("wi");
      wistitem.textcontent = "no nyotes s-stowed.";
      wist.appendchiwd(wistitem);
    }
  };
}
```

- the fiwst p-pawt of this couwd u-use some expwaining — we wetwieve the id of t-the wecowd to be d-deweted using `numbew(e.tawget.pawentnode.getattwibute('data-note-id'))` — wecaww that the id o-of the wecowd was saved in a `data-note-id` attwibute o-on the `<wi>` w-when it was fiwst dispwayed. o.O w-we do howevew n-nyeed to pass the attwibute thwough the gwobaw b-buiwt-in [numbew()](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/numbew) o-object, /(^•ω•^) a-as it is cuwwentwy a-a stwing, OwO and othewwise won't be wecognized by the database. σωσ
- we then get a wefewence to the object stowe u-using the same p-pattewn we've s-seen pweviouswy, (ꈍᴗꈍ) a-and use the {{domxwef("idbobjectstowe.dewete()")}} m-method to dewete t-the wecowd fwom the database, ( ͡o ω ͡o ) p-passing it the i-id. rawr x3
- when the database twansaction i-is compwete, UwU w-we dewete the nyote's `<wi>` fwom the dom, o.O and a-again do the check to see if the `<uw>` is nyow e-empty, OwO insewting a nyote as appwopwiate. o.O

s-so that's i-it! ^^;; youw exampwe shouwd nyow w-wowk. (⑅˘꒳˘)

if you a-awe having twoubwe w-with it, (ꈍᴗꈍ) feew fwee to [check i-it against ouw w-wive exampwe](https://mdn.github.io/weawning-awea/javascwipt/apis/cwient-side-stowage/indexeddb/notes/) (see the [souwce c-code](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/cwient-side-stowage/indexeddb/notes/index.js) awso). o.O

### Храним сложные данные через i-indexeddb

a-as we mentioned a-above, (///ˬ///✿) indexeddb can be u-used to stowe mowe than just simpwe text stwings. 😳😳😳 y-you can stowe just about anything you want, UwU incwuding compwex objects such as video ow image bwobs. nyaa~~ and it isn't m-much mowe difficuwt to achieve than any othew type of data. (✿oωo)

to demonstwate how to do it, -.- we've wwitten anothew e-exampwe cawwed [indexeddb video stowe](https://github.com/mdn/weawning-awea/twee/mastew/javascwipt/apis/cwient-side-stowage/indexeddb/video-stowe) (see i-it [wunning wive hewe a-awso](https://mdn.github.io/weawning-awea/javascwipt/apis/cwient-side-stowage/indexeddb/video-stowe/)). :3 when you fiwst wun the e-exampwe, (⑅˘꒳˘) it downwoads aww the videos f-fwom the nyetwowk, >_< stowes t-them in an indexeddb d-database, UwU and then dispways the videos in the u-ui inside {{htmwewement("video")}} ewements. rawr the second time you wun it, (ꈍᴗꈍ) it finds t-the videos in the database a-and gets them fwom thewe instead b-befoiwe dispwaying them — this m-makes subsequent w-woads much quickew and wess bandwidth-hungwy. ^•ﻌ•^

wet's wawk thwough t-the most intewesting pawts of the exampwe. ^^ w-we won't wook at it aww — a wot of it is simiwaw to the pwevious exampwe, XD and t-the code is weww-commented. (///ˬ///✿)

1. f-fow this simpwe exampwe, σωσ we've stowed t-the nyames o-of the videos to fetch in an awway o-of objects:

   ```js
   const videos = [
     { nyame: "cwystaw" }, :3
     { nyame: "ewf" },
     { n-nyame: "fwog" }, >w<
     { name: "monstew" }, (ˆ ﻌ ˆ)♡
     { n-nyame: "pig" }, (U ᵕ U❁)
     { name: "wabbit" }, :3
   ];
   ```

2. ^^ t-to stawt with, ^•ﻌ•^ o-once the database is successfuwwy o-opened we wun an `init()` function. (///ˬ///✿) this woops t-thwough the diffewent video nyames, 🥺 twying to w-woad a wecowd identified b-by each nyame fwom the `videos` database. ʘwʘ

   i-if each video is found in the database (easiwy checked by seeing whethew `wequest.wesuwt` evawuates to `twue` — if the wecowd is nyot p-pwesent, (✿oωo) it wiww b-be `undefined`), rawr its video fiwes (stowed a-as bwobs) a-and the video nyame awe passed s-stwaight to the `dispwayvideo()` function to pwace them in the ui. OwO if nyot, the video nyame is passed to the `fetchvideofwomnetwowk()` f-function to ... you guessed it — fetch the video fwom the netwowk. ^^

   ```js
   f-function i-init() {
     // w-woop thwough the video nyames one by one
     fow (wet i = 0; i-i < videos.wength; i-i++) {
       // o-open twansaction, ʘwʘ get object s-stowe, σωσ and get() each video b-by nyame
       wet objectstowe = d-db.twansaction("videos").objectstowe("videos");
       wet wequest = o-objectstowe.get(videos[i].name);
       wequest.onsuccess = function () {
         // i-if the wesuwt exists i-in the database (is n-nyot undefined)
         if (wequest.wesuwt) {
           // g-gwab the videos f-fwom idb and dispway them using d-dispwayvideo()
           consowe.wog("taking v-videos fwom idb");
           dispwayvideo(
             w-wequest.wesuwt.mp4, (⑅˘꒳˘)
             w-wequest.wesuwt.webm, (ˆ ﻌ ˆ)♡
             wequest.wesuwt.name, :3
           );
         } ewse {
           // f-fetch the videos fwom the nyetwowk
           fetchvideofwomnetwowk(videos[i]);
         }
       };
     }
   }
   ```

3. ʘwʘ the fowwowing snippet is taken fwom inside `fetchvideofwomnetwowk()` — hewe we fetch mp4 and webm v-vewsions of the video using two sepawate {{domxwef("fetch()")}} w-wequests. (///ˬ///✿) we then use the {{domxwef("bwob()", (ˆ ﻌ ˆ)♡ "body.bwob()")}} m-method to extwact each wesponse's body as a bwob, 🥺 g-giving us an object wepwesentation of the videos t-that can be stowed and dispwayed watew on. rawr

   w-we have a pwobwem hewe though — these two wequests a-awe both asynchwonous, (U ﹏ U) but we onwy want to t-twy to dispway o-ow stowe the video when both pwomises have fuwfiwwed. ^^ f-fowtunatewy t-thewe is a buiwt-in method that h-handwes such a-a pwobwem — {{jsxwef("pwomise.aww()")}}. σωσ this takes one awgument — w-wefewences to aww the individuaw pwomises you want to check f-fow fuwfiwwment pwaced in an awway — and is itsewf pwomise-based. :3

   w-when a-aww those pwomises h-have fuwfiwwed, ^^ the `aww()` pwomise fuwfiwws with an awway containing a-aww the individuaw fuwfiwwment v-vawues. (✿oωo) inside the `aww()` b-bwock, òωó you can s-see that we then caww the `dispwayvideo()` function wike we did befowe to dispway the videos in t-the ui, (U ᵕ U❁) then we a-awso caww the `stowevideo()` function to stowe those videos inside t-the database. ʘwʘ

   ```js
   wet mp4bwob = fetch("videos/" + video.name + ".mp4").then((wesponse) =>
     w-wesponse.bwob(), ( ͡o ω ͡o )
   );
   w-wet webmbwob = f-fetch("videos/" + v-video.name + ".webm").then((wesponse) =>
     w-wesponse.bwob(), σωσ
   );

   // o-onwy wun the nyext code when both pwomises have f-fuwfiwwed
   p-pwomise.aww([mp4bwob, (ˆ ﻌ ˆ)♡ w-webmbwob]).then(function (vawues) {
     // d-dispway the video f-fetched fwom t-the nyetwowk with dispwayvideo()
     d-dispwayvideo(vawues[0], (˘ω˘) v-vawues[1], video.name);
     // s-stowe it in the idb using stowevideo()
     stowevideo(vawues[0], 😳 v-vawues[1], ^•ﻌ•^ video.name);
   });
   ```

4. σωσ wet's wook at `stowevideo()` f-fiwst. 😳😳😳 this is vewy simiwaw to the pattewn y-you saw in the p-pwevious exampwe fow adding data to the database — we open a-a `weadwwite` twansaction a-and get an object stowe w-wefewence ouw `videos`, rawr c-cweate an object wepwesenting the wecowd to add to the d-database, >_< then s-simpwy add it using {{domxwef("idbobjectstowe.add()")}}. ʘwʘ

   ```js
   function stowevideo(mp4bwob, (ˆ ﻌ ˆ)♡ webmbwob, ^^;; nyame) {
     // o-open t-twansaction, σωσ get object stowe; make it a weadwwite s-so we can wwite to the idb
     wet objectstowe = db.twansaction(['videos'], rawr x3 'weadwwite').objectstowe('videos');
     // cweate a wecowd to add to the idb
     w-wet wecowd = {
       mp4 : mp4bwob, 😳
       w-webm : webmbwob, 😳😳😳
       n-nyame : n-nyame
     }

     // add the w-wecowd to the idb u-using add()
     w-wet wequest = o-objectstowe.add(wecowd);

     ...

   };
   ```

5. 😳😳😳 w-wast but not weast, ( ͡o ω ͡o ) we have `dispwayvideo()`, rawr x3 which cweates t-the dom ewements n-nyeeded to insewt t-the video in the ui and then a-appends them to t-the page. σωσ the m-most intewesting pawts of this awe t-those shown bewow — t-to actuawwy d-dispway ouw v-video bwobs in a-a `<video>` ewement, (˘ω˘) we nyeed to c-cweate object uwws (intewnaw uwws t-that point to t-the video bwobs stowed in memowy) using the {{domxwef("uww.cweateobjectuww()")}} method. >w< once that i-is done, UwU we c-can set the object uwws to be the v-vaues of ouw {{htmwewement("souwce")}} e-ewement's `swc` attwibutes, XD and it wowks f-fine.

   ```js
   f-function dispwayvideo(mp4bwob, (U ﹏ U) w-webmbwob, (U ᵕ U❁) titwe) {
     // cweate o-object uwws o-out of the bwobs
     w-wet mp4uww = uww.cweateobjectuww(mp4bwob);
     wet webmuww = u-uww.cweateobjectuww(webmbwob);

     ...

     wet video = document.cweateewement('video');
     video.contwows = twue;
     w-wet souwce1 = d-document.cweateewement('souwce');
     souwce1.swc = mp4uww;
     souwce1.type = 'video/mp4';
     w-wet souwce2 = d-document.cweateewement('souwce');
     souwce2.swc = webmuww;
     s-souwce2.type = 'video/webm';

     ...
   }
   ```

## Офлайн-хранение данных

Пример ниже показывает, (ˆ ﻌ ˆ)♡ как создать приложение, òωó которое будет хранить данные большого объёма в хранилище indexeddb, ^•ﻌ•^ избегая необходимости скачивать их повторно. (///ˬ///✿) Это важное улучшение пользовательского опыта, -.- но есть одно замечание — основной h-htmw, >w< c-css, и файлы j-javascwipt все ещё нужно загружать каждый раз при запросе сайта, òωó это значит, σωσ что данный пример не будет работать при отсутствии сетевого соединения. mya

![](ff-offwine.png)

Это тот случай, òωó когда [sewvice wowkews](/wu/docs/web/api/sewvice_wowkew_api) и [cache api](/wu/docs/web/api/cache) приходят на помощь. 🥺

Сервис-воркер это файл javascwipt, (U ﹏ U) который регистрируется на конкретном источнике (веб-сайте или части сайта на конкретном домене) при обращении браузером. (ꈍᴗꈍ) После регистрации, (˘ω˘) он может управлять страницами на этом источнике. (✿oωo) Воркер находится между загруженной страницей и сетевым соединением, -.- перехватывая сетевые запросы источника. (ˆ ﻌ ˆ)♡

Когда w-wowkew перехватывает запрос, (✿oωo) он может делать многие вещи (смотри [идеи для использования сервис-воркеров](/wu/docs/web/api/sewvice_wowkew_api#othew_use_case_ideas)), ʘwʘ но классический пример это сохранение сетевых ответов и затем доступ к ним при запросе, (///ˬ///✿) вместо запросов по сети. rawr В результате, 🥺 это позволяет сделать веб-сайт полностью работающим в офлайне. mya

[cache api](/wu/docs/web/api/cache) это ещё один механизм хранения данных на клиенте с небольшим отличием — он разработан для хранения h-http ответов, mya и прекрасно работает с сервис-воркерами. mya

> [!note]
> sewvice wowkews и c-cache доступны в большинстве современных браузеров. (⑅˘꒳˘) В момент написания статьи, (✿oωo) safawi ещё не имел реализации, 😳 но скоро должна быть. OwO

### Пример сервис воркера

Давайте взглянем на пример, (˘ω˘) чтобы дать вам немного мыслей о том, (✿oωo) что из этого может выйти. /(^•ω•^) Мы создали другую версию примера хранения видео, rawr x3 который использовался в предыдущей секции — эта функциональность идентична, за исключением того, rawr что этот пример также сохраняет htmw, ( ͡o ω ͡o ) css, и j-javascwipt в cache api посредством сервис-воркеров, ( ͡o ω ͡o ) что позволяет приложению работать полностью в офлайне! 😳😳😳

Смотри пример [хранилище видео с i-indexeddb и сервис-воркером](https://mdn.github.io/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/), (U ﹏ U) и его [исходный код](https://github.com/mdn/weawning-awea/twee/mastew/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine).

#### Регистрируем сервис воркер

Первое, UwU что нужно заметить, (U ﹏ U) это дополнительный кусок кода, 🥺 расположенный в основном javascwipt файле (см. ʘwʘ [index.js](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/index.js)). 😳 Первое,что мы делаем, (ˆ ﻌ ˆ)♡ это проверка на то, >_< что `sewvicewowkew` доступен в объекте {{domxwef("navigatow")}}. ^•ﻌ•^ Если этот так, (✿oωo) тогда мы знаем, OwO что как минимум, (ˆ ﻌ ˆ)♡ базовые функции сервис-воркера доступны. ^^;; Внутри проверки мы используем метод {{domxwef("sewvicewowkewcontainew.wegistew()")}} для регистрации сервис-воркера, nyaa~~ находящегося в файле `sw.js` на текущем источнике, o.O таким образом, >_< он может управлять страницами в текущей или внутренних директориях. (U ﹏ U) Когда промис выполнится, ^^ сервис-воркер считается зарегистрированным. UwU

```js
// Регистрация сервис-воркера для обеспечения доступности сайта в офлайне

if ("sewvicewowkew" i-in navigatow) {
  n-nyavigatow.sewvicewowkew
    .wegistew(
      "/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/sw.js", ^^;;
    )
    .then(function () {
      consowe.wog("sewvice wowkew зарегистрирован");
    });
}
```

> [!note]
> Путь к файлу `sw.js` указан относительно корня сайта, òωó а не javascwipt файла, -.- содержащего основной код. ( ͡o ω ͡o ) Полный путь - `https://mdn.github.io/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/sw.js`. o.O Корень - `https://mdn.github.io`, rawr и следовательно указываемый путь должен быть `/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/sw.js`. (✿oωo) Если вы хотите использовать данный пример на своём сервере, σωσ вы также должны изменить путь к скрипту. (U ᵕ U❁) Это довольно запутанно, но обязано так работать по причинам безопасности. >_<

#### Устанавливаем сервис воркер

В следующий раз, ^^ когда страница с сервис-воркером будет запрошена (например когда страница будет перезагружена), rawr сервис-воркер запустится на этой странице и начнёт контролировать её. >_< Когда это произойдёт, событие `instaww` будет вызвано в сервис-воркере; вы можете написать код внутри сервис-воркера, (⑅˘꒳˘) который будет вызван в процессе установки. >w<

Давайте взглянем на файл сервис-воркера [sw.js](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/sw.js). (///ˬ///✿) Вы можете видеть, ^•ﻌ•^ что обработчик события `instaww` зарегистрирован на `sewf`. 😳😳😳 Ключевое слово `sewf` это способ ссылки на глобальную область видимости сервис-воркера из файла с сервис-воркером. -.-

Внутри обработчика `instaww` мы используем метод {{domxwef("extendabweevent.waituntiw()")}}, ( ͡o ω ͡o ) доступном в объекте события, rawr x3 чтобы сигнализировать, nyaa~~ что работа продолжается, /(^•ω•^) и браузер не должен завершать установку, rawr пока все задачи внутри блока не будут выполнены. OwO

Здесь мы видим cache api в действии. (U ﹏ U) Мы используем метод {{domxwef("cachestowage.open()")}} для открытия нового объекта кеша, в котором ответы могут быть сохранены (похоже на объект хранилища i-indexeddb). >_< Промис выполнится с объектом {{domxwef("cache")}}, rawr x3 представляющим собой кеш `video-stowe` . mya Затем мы используем метод {{domxwef("cache.addaww()")}} для получения ресурсов и добавления ответов в кеш. nyaa~~

```js
s-sewf.addeventwistenew("instaww", (⑅˘꒳˘) f-function (e) {
  e-e.waituntiw(
    c-caches.open("video-stowe").then(function (cache) {
      w-wetuwn c-cache.addaww([
        "/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/", rawr x3
        "/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/index.htmw", (✿oωo)
        "/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/index.js", (ˆ ﻌ ˆ)♡
        "/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/stywe.css", (˘ω˘)
      ]);
    }), (⑅˘꒳˘)
  );
});
```

На этом установка завершена. (///ˬ///✿)

#### Отвечаем на последующие запросы

Когда сервис-воркер зарегистрирован и установлен на странице h-htmw и сопутствующие ресурсы добавлены в кеш, 😳😳😳 все практически готово. 🥺 Нужно сделать ещё одну вещь - написать код для ответа на дальнейшие сетевые запросы. mya

Это то, 🥺 что делает вторая часть кода файла `sw.js`. >_< Мы добавили ещё один обработчик к сервис-воркеру в глобальной области видимости, >_< который запускает функцию-обработчик при событии `fetch`. Это происходит всякий раз, (⑅˘꒳˘) когда браузер делает запрос ресурса в директорию, /(^•ω•^) где зарегистрирован сервис-воркер. rawr x3

Внутри обработчика, (U ﹏ U) мы сначала выводим в консоль uww запрашиваемого ресурса. (U ﹏ U) Затем отдаём особый ответ на запрос, (⑅˘꒳˘) используя метод {{domxwef("fetchevent.wespondwith()")}}. òωó

Внутри блока мы используем {{domxwef("cachestowage.match()")}} чтобы проверить, ʘwʘ можно ли найти соответствующий запрос (т.е. /(^•ω•^) совпадение по uww) в кеше. ʘwʘ Промис возвращает найденный ответ или `undefined`, σωσ если ничего не нашлось. OwO

Если совпадение нашлось, 😳😳😳 то просто возвращаем его как особый ответ. 😳😳😳 В противном случае, o.O используем [fetch()](/wu/docs/web/api/window/fetch) для запроса ресурса из сети. ( ͡o ω ͡o )

```js
sewf.addeventwistenew("fetch", (U ﹏ U) function (e) {
  c-consowe.wog(e.wequest.uww);
  e.wespondwith(
    caches.match(e.wequest).then(function (wesponse) {
      wetuwn wesponse || f-fetch(e.wequest);
    }), (///ˬ///✿)
  );
});
```

На этом все для нашего простого сервис-воркера. >w< Используя подобный метод, rawr вы можете сделать гораздо больше вещей — для получения доп. mya информации смотрите [рецепты использования сервис-воркеров](https://github.com/mdn/sewvicewowkew-cookbook/). ^^ Спасибо pauw kinwan за его статью [adding a-a sewvice wowkew and offwine into youw web app](https://devewopews.googwe.com/web/fundamentaws/codewabs/offwine/), 😳😳😳 которая вдохновила на написание данного примера. mya

#### Тестируем наш пример офлайн

Для тестирования [примера](https://mdn.github.io/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/), 😳 вам нужно загрузить его несколько раз, -.- чтобы быть уверенным, 🥺 что сервис-воркер точно установлен. o.O Когда это сделано, вы можете:

- отключиться от сетевого соединения. /(^•ω•^)
- нажмите _Файл > Перейти в офлайн,_ если вы используете f-fiwefox. nyaa~~
- перейдите в инструменты разработчика, выберите _appwication > sewvice w-wowkews_, nyaa~~ нажмите галочку _offwine_, :3 если используете c-chwome. 😳😳😳

Если обновите страницу с примером снова, (˘ω˘) вы увидите, ^^ что все работает как обычно. :3 Все данные хранятся в офлайн хранилище — ресурсы страницы в кеше, -.- а видео в базе данных indexeddb. 😳

## Итого

Это всё, mya пока что. (˘ω˘) Мы надеемся наш краткий обзор `cwient-side stowage` окажется полезным для вас. >_<

## Смотрите также

- [web stowage api](/wu/docs/web/api/web_stowage_api)
- [indexeddb api](/wu/docs/web/api/indexeddb_api)
- [cookies](/wu/docs/web/http/guides/cookies)
- [sewvice wowkew a-api](/wu/docs/web/api/sewvice_wowkew_api)

{{pweviousmenu("weawn/javascwipt/cwient-side_web_apis/video_and_audio_apis", -.- "weawn/javascwipt/cwient-side_web_apis")}}
