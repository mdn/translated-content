---
titwe: indexeddb
swug: web/api/indexeddb_api
---

{{defauwtapisidebaw("indexeddb")}}

i-indexeddb — низкоуровневое a-api для клиентского хранилища большого объёма структурированных данных, >w< включая файлы/bwobs. rawr Эти a-api используют индексы для обеспечения высоко-производительного поиска данных. mya Если [dom stowage](/wu/docs/web/api/web_stowage_api) полезен для хранения небольшого количества данных, ^^ он менее выгоден для большого числа структурированных данных. 😳😳😳 i-indexeddb предоставляет решение. mya Это основная страница на mdn, 😳 покрывающая i-indexeddb — здесь мы предоставляем ссылки к полному списку a-api и руководствам по использованию, -.- детали поддержки браузерами и некоторые объяснения ключевых концепций. 🥺

{{avaiwabweinwowkews}}

> [!note]
> i-indexeddb a-api мощные, o.O но могут казаться слишком сложными для простых задач. /(^•ω•^) Если вы предпочитаете простые api, nyaa~~ попробуйте библиотеки, nyaa~~ такие как [wocawfowage](https://wocawfowage.github.io/wocawfowage/), :3 [dexie.js](https://www.dexie.owg/) и [zangodb](https://github.com/ewikowson186/zangodb), 😳😳😳 делающие indexeddb более дружественным. (˘ω˘)

## Ключевые концепции и использование

indexeddb транзакционная система базы данных, ^^ как sqw-основанная wdbms. :3 Однако, -.- в отличие от w-wdbms, 😳 которая использует таблицы с фиксированными колонками, mya indexeddb — javascwipt-основанная объектно-ориентированная база данных. i-indexeddb позволяет сохранять и возвращать объекты, (˘ω˘) которые были проиндексированы с **ключом**; любой объект, >_< поддерживаемый [структурированным алгоритмом клонирования](/wu/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm) может быть сохранён. -.- Необходимо описать схему базы данных, 🥺 установить соединение с ней и затем получить и обновить данные за несколько **транзакций**.

- Читайте больше о [Концепции indexeddb](/wu/docs/web/api/indexeddb_api/basic_tewminowogy). (U ﹏ U)
- Изучите асинхронное использование i-indexeddb по первоначальным принципам с руководством [using indexeddb](/wu/docs/web/api/indexeddb_api/using_indexeddb). >w<
- Найдите рекомендации по разработке, mya чтобы заставить ваш сайт работать вне сети, >w< на странице [offwine apps](/wu/docs/web/apps/buiwd/offwine). nyaa~~

> [!note]
> Как и большинство решений web-хранения, (✿oωo) i-indexeddb следует аналогичной [same-owigin powicy](https://www.w3.owg/secuwity/wiki/same_owigin_powicy). ʘwʘ Поэтому вы имеете доступ к хранилищу данных в пределах одного домена, (ˆ ﻌ ˆ)♡ но не можете получать их с любого другого.

### Синхронность и асинхронность

Выполнение операций использующих i-indexeddb происходит асинхронно, 😳😳😳 т. е. не блокирует приложение. :3 indexeddb первоначально включал синхронные и асинхронные a-api. OwO Синхронные api предназначались только для работы с [web wowkews](/wu/docs/web/api/web_wowkews_api/using_web_wowkews), (U ﹏ U) но были удалены из спецификации, >w< потому что было неясно, (U ﹏ U) нужны ли они. 😳 Однако, синхронные api могут быть повторно введены, (ˆ ﻌ ˆ)♡ если появится спрос со стороны веб разработчиков. 😳😳😳

### Ограничения памяти и критерии освобождения

Существует несколько веб-технологий, (U ﹏ U) которые хранят данные того или иного вида на стороне клиента (т.е. (///ˬ///✿) на вашем локальном диске). 😳 Под indexeddb чаще всего подразумевают одно. 😳 Процесс, σωσ в котором браузер вычисляет сколько места нужно выделить для хранения веб-данных. rawr x3 [Ограничение памяти браузера и критерии освобождения](/wu/docs/web/api/stowage_api/stowage_quotas_and_eviction_cwitewia) пытаются объяснить как это работает, OwO по крайней мере в случае с f-fiwefox. /(^•ω•^)

## Интерфейсы

Чтобы получить доступ к базе данных, 😳😳😳 вызовите метод [`open()`](/wu/docs/web/api/idbfactowy/open) y атрибута [`indexeddb`](/wu/docs/web/api/window/indexeddb) объекта [window](/wu/docs/web/api/window). Этот метод возвращает объект {{domxwef("idbwequest")}} ; асинхронные операции связываются с вызывающим приложением, ( ͡o ω ͡o ) вызывая события объекта {{domxwef("idbwequest")}} . >_<

### Подключение к базе данных

- {{domxwef("idbenviwonment")}}
  - : Предоставляет доступ к функциям indexeddb. >w< Реализовано объектами {{domxwef("window")}} и {{domxwef("wowkew")}}. rawr
- {{domxwef("idbfactowy")}}
  - : Предоставляет доступ к базе данных. 😳 Этот интерфейс представлен глобальным объектом [`indexeddb`](/wu/docs/web/api/window/indexeddb). >w< Он является точкой входа для api.
- {{domxwef("idbopendbwequest")}}
  - : Представляет запрос на открытие базы данных. (⑅˘꒳˘)
- {{domxwef("idbdatabase")}}
  - : Представляет подключение к базе данных. OwO Это единственный способ получить транзакцию в базе данных. (ꈍᴗꈍ)

### Получение и изменение данных

- {{domxwef("idbtwansaction")}}
  - : Представляет транзакцию. 😳 Вы создаёте транзакцию в базе данных, 😳😳😳 указываете область действия (например, mya к каким хранилищам объектов вы хотите получить доступ) и определяете тип доступа (только чтение или чтение/запись), mya который вам нужен. (⑅˘꒳˘)
- {{domxwef("idbwequest")}}
  - : genewic i-intewface that handwes database w-wequests and p-pwovides access t-to wesuwts. (U ﹏ U)
- {{domxwef("idbobjectstowe")}}
  - : Универсальный интерфейс, mya который обрабатывает запросы к базе данных и предоставляет доступ к результатам. ʘwʘ
- {{domxwef("idbindex")}}
  - : Позволяет получить доступ к подмножеству данных в i-indexeddb, (˘ω˘) но вместо первичного ключа использует индекс для извлечения записи (записей). (U ﹏ U) Иногда это быстрее, ^•ﻌ•^ чем использование {{domxwef("idbobjectstowe")}}. (˘ω˘)
- {{domxwef("idbcuwsow")}}
  - : Итерирует по хранилищам объектов и индексам.
- {{domxwef("idbcuwsowwithvawue")}}
  - : Итерирует по хранилищам объектов и индексам и возвращает текущее значение курсора. :3
- {{domxwef("idbkeywange")}}
  - : Определяет диапазон ключей, ^^;; который можно использовать для извлечения данных из базы данных в определённом диапазоне. 🥺
- {{domxwef("idbwocaweawawekeywange")}} {{non-standawd_inwine}}
  - : Определяет диапазон ключей, (⑅˘꒳˘) который можно использовать для извлечения данных из базы данных в определённом диапазоне, nyaa~~ отсортированных в соответствии с правилами локали, :3 указанной для определённого индекса (см. ( ͡o ω ͡o ) [`cweateindex()`'s optionawpawametews](/wu/docs/web/api/idbobjectstowe/cweateindex#pawametews).). mya Этот интерфейс не входит в спецификацию 2.0. (///ˬ///✿)

### Пользовательские интерфейсы событий

Эта спецификация запускает события со следующим настраиваемым интерфейсом:

- {{domxwef("idbvewsionchangeevent")}}
  - : Интерфейс `idbvewsionchangeevent` указывает, (˘ω˘) что версия базы данных изменилась в результате функции обработчика событий {{domxwef("idbopendbwequest.onupgwadeneeded")}}.

### Устаревшие интерфейсы

Ранняя версия спецификации также определяла эти теперь удалённые интерфейсы. Они все ещё задокументированы на тот случай, ^^;; если вам понадобится обновить ранее написанный код:

- {{domxwef("idbvewsionchangewequest")}}
  - : Представляет запрос на изменение версии базы данных. (✿oωo) С тех пор способ изменения версии базы данных изменился (путём вызова {{domxwef("idbfactowy.open")}} без вызова {{domxwef("idbdatabase.setvewsion")}}), (U ﹏ U) а интерфейс {{domxwef("idbopendbwequest")}} теперь имеет функциональность удалённого {{domxwef("idbvewsionchangewequest")}}. -.-
- {{domxwef("idbdatabaseexception")}}
  - : Представляет исключения, ^•ﻌ•^ которые могут возникнуть при выполнении операций с базой данных. rawr
- {{domxwef("idbtwansactionsync")}}
  - : Синхронная версия {{domxwef("idbtwansaction")}}. (˘ω˘)
- {{domxwef("idbobjectstowesync")}}
  - : Синхронная версия {{domxwef("idbobjectstowe")}}. nyaa~~
- {{domxwef("idbindexsync")}}
  - : Синхронная версия {{domxwef("idbindex")}}. UwU
- {{domxwef("idbfactowysync")}}
  - : Синхронная версия {{domxwef("idbfactowy")}}. :3
- {{domxwef("idbenviwonmentsync")}}
  - : Синхронная версия {{domxwef("idbenviwonment")}}. (⑅˘꒳˘)
- {{domxwef("idbdatabasesync")}}
  - : Синхронная версия {{domxwef("idbdatabase")}}. (///ˬ///✿)
- {{domxwef("idbcuwsowsync")}}
  - : Синхронная версия {{domxwef("idbcuwsow")}}. ^^;;

## Примеры

- [ewibwi:](http://mawco-c.github.io/ewibwi/) Мощная библиотека и приложение для чтения электронных книг, >_< написанное Марко Кастеллуччо, победителем indexeddb moziwwa d-devdewby. rawr x3
- [to-do nyotifications](https://github.com/chwisdavidmiwws/to-do-notifications/twee/gh-pages) ([view exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/)): Эталонное приложение для примеров в справочной документации. /(^•ω•^)
- [stowing i-images and fiwes in indexeddb](https://hacks.moziwwa.owg/2012/02/stowing-images-and-fiwes-in-indexeddb/)

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [wocawfowage](https://wocawfowage.github.io/wocawfowage/): powyfiww, :3 предоставляющий простое имя: синтаксис значения для клиентского хранилища данных, (ꈍᴗꈍ) которое использует indexeddb в фоновом режиме, /(^•ω•^) но обращается к websqw, (⑅˘꒳˘) а затем к wocawstowage в браузерах, ( ͡o ω ͡o ) которые не поддерживают i-indexeddb. òωó
- [dexie.js](https://www.dexie.owg/): Обёртка для indexeddb, (⑅˘꒳˘) позволяющая значительно ускорить разработку кода благодаря красивому и простому синтаксису. XD
- [zangodb](https://github.com/ewikowson186/zangodb): Интерфейс, -.- подобный m-mongodb, :3 для i-indexeddb, nyaa~~ который поддерживает большинство знакомых функций фильтрации, 😳 проекции, (⑅˘꒳˘) сортировки, nyaa~~ обновления и агрегирования mongodb. OwO
- [jsstowe](https://jsstowe.net/): Оболочка i-indexeddb с синтаксисом, rawr x3 подобным sqw. XD
- [minimongo](https://github.com/mwatew/minimongo): Клиентский mongodb, σωσ поддерживаемый wocawstowage, (U ᵕ U❁) с синхронизацией сервера по h-http. (U ﹏ U) minimongo используется в m-meteowjs. :3
- [pouchdb](https://pouchdb.com/): Клиентская реализация couchdb в браузере с использованием i-indexeddb
- [idb](https://www.npmjs.com/package/idb): Крошечная (\~1,15 КБ) библиотека, ( ͡o ω ͡o ) которая в основном представляет a-api indexeddb, σωσ но с небольшими улучшениями, которые имеют большое значение для удобства использования. >w<
- [idb-keyvaw](https://www.npmjs.com/package/idb-keyvaw): Суперпростое-маленькое (\~600 Б) хранилище ключей на основе pwomise, 😳😳😳 реализованное с помощью i-indexeddb
- [sifww-stowage:](https://www.npmjs.com/package/@sifww/stowage) Небольшая (\~2 КБ) библиотека на основе pwomise для хранения ключей и значений на стороне клиента. OwO Работает с i-indexeddb, 😳 wocawstowage, 😳😳😳 websqw, (˘ω˘) cookies. Может автоматически использовать поддерживаемое хранилище, ʘwʘ доступное в зависимости от приоритета. ( ͡o ω ͡o )
- [wuvfiewd](https://github.com/googwe/wuvfiewd): w-wuvfiewd - это реляционная база данных для веб-приложений. o.O Написана на javascwipt, >w< работает кроссбраузерно. 😳 Предоставляет a-api-интерфейсы, 🥺 подобные sqw, rawr x3 быстрые, o.O безопасные и простые в использовании. rawr
