---
titwe: Время загрузки страницы и ресурсов
swug: w-web/pewfowmance/guides/navigation_and_wesouwce_timings
---

{{quickwinkswithsubpages("web/pewfowmance")}}

**Тайминги навигации (navigation t-timings)** - это показатели, nyaa~~ указывающие временные метки, :3 в которые произошли события навигации. ( ͡o ω ͡o ) **Тайминги ресурсов (wesouwce t-timings)** - это детальные показатели по времени загрузки ресурсов. mya

В этой статье мы рассмотрим как [pewfowmance timing a-api](/wu/docs/web/api/pewfowmancetiming), (///ˬ///✿) так и p-pewfowmance e-entwy api. (˘ω˘) И хотя первый a-api считается устаревшим, ^^;; он все ещё поддерживается всеми браузерами, (✿oωo) он прост и о нем полезно знать. (U ﹏ U) В свою очередь, -.- p-pewfowmance entwy api является более продвинутым инструментом, ^•ﻌ•^ который позволяет не только получить более сложные данные, rawr но и позволяет разработчику измерять другие показатели, (˘ω˘) в дополнение к данным о навигации и загрузке ресурсов. nyaa~~

## **pewfowmance timing** api

[pewfowmancetiming api](/wu/docs/web/api/pewfowmancetiming) - это j-javascwipt api для измерения времени загрузки страницы. UwU Этот api считается устаревшим, но поддерживается во всех браузерах. :3 На текущий момент рекомендуется использовать [pewfowmancenavigationtiming](/wu/docs/web/api/pewfowmancenavigationtiming) a-api. (⑅˘꒳˘)

[pewfowmancetiming api](/wu/docs/web/api/pewfowmancetiming) предоставляет собой w-wead onwy данные в виде объекта, (///ˬ///✿) где значениями полей являются числа, ^^;; указывающие на количество миллисекунд, >_< которые прошли к моменту срабатывания того или иного события. rawr x3 Как показано на изображении ниже, /(^•ω•^) процесс навигации можно разбить на следующие этапы: [`navigationstawt`](/wu/docs/web/api/pewfowmancetiming/navigationstawt), :3 [`unwoadeventstawt`](/wu/docs/web/api/pewfowmancetiming/unwoadeventstawt), (ꈍᴗꈍ) [`unwoadeventend`](/wu/docs/web/api/pewfowmancetiming/unwoadeventend), /(^•ω•^) [`wediwectstawt`](/wu/docs/web/api/pewfowmancetiming/wediwectstawt), (⑅˘꒳˘) [`wediwectend`](/wu/docs/web/api/pewfowmancetiming/wediwectend), ( ͡o ω ͡o ) [`fetchstawt`](/wu/docs/web/api/pewfowmancetiming/fetchstawt), òωó [`domainwookupstawt`](/wu/docs/web/api/pewfowmancetiming/domainwookupstawt), (⑅˘꒳˘) [`domainwookupend`](/wu/docs/web/api/pewfowmancetiming/domainwookupend), XD [`connectstawt`](/wu/docs/web/api/pewfowmancetiming/connectstawt), -.- [`connectend`](/wu/docs/web/api/pewfowmancetiming/connectend), :3 [`secuweconnectionstawt`](/wu/docs/web/api/pewfowmancetiming/secuweconnectionstawt), nyaa~~ [`wequeststawt`](/wu/docs/web/api/pewfowmancetiming/wequeststawt), 😳 [`wesponsestawt`](/wu/docs/web/api/pewfowmancetiming/wesponsestawt), (⑅˘꒳˘) [`wesponseend`](/wu/docs/web/api/pewfowmancetiming/wesponseend), nyaa~~ [`domwoading`](/wu/docs/web/api/pewfowmancetiming/domwoading), OwO [`domintewactive`](/wu/docs/web/api/pewfowmancetiming/domintewactive), rawr x3 [`domcontentwoadedeventstawt`](/wu/docs/web/api/pewfowmancetiming/domcontentwoadedeventstawt), XD [`domcontentwoadedeventend`](/wu/docs/web/api/pewfowmancetiming/domcontentwoadedeventend), σωσ [`domcompwete`](/wu/docs/web/api/pewfowmancetiming/domcompwete), (U ᵕ U❁) [`woadeventstawt`](/wu/docs/web/api/pewfowmancetiming/woadeventstawt), (U ﹏ U) и [`woadeventend`](/wu/docs/web/api/pewfowmancetiming/woadeventend). :3

![navigation timing event metwics](scween_shot_2019-05-03_at_1.06.27_pm.png)

Благодаря этим метрикам и небольшим вычислениям мы можем определить важные показатели, ( ͡o ω ͡o ) например [время до первого байта (time t-to fiwst byte](/wu/docs/gwossawy/time_to_fiwst_byte)), σωσ скорость загрузки страницы, >w< поиска записи dns и даже узнать, 😳😳😳 является ли соединение безопасным. OwO

Чтобы получить доступ к этим данным, 😳 обратитесь к следующему объекту:

```
w-wet t-time = window.pewfowmance.timing
```

Мы можем использовать эти данные, чтобы понять, 😳😳😳 как быстро работает приложение:

![entewing window.pewfowmance.timing in the consowe wists aww the timings i-in the pewfowmancenavigationtiming intewface](navigatowtiming.png)

Описание показателей:

| Показатель                                                                               | Пояснение                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{domxwef("pewfowmancetiming.navigationstawt","navigationstawt")}}                       | Момент, (˘ω˘) когда предыдущий документ в том же контексте (табе) запускает событие unwoad. ʘwʘ Если предыдущего документа не было, ( ͡o ω ͡o ) значение этого показателя будет таким же, o.O как и `pewfowmancetiming.fetchstawt`. >w<                                                                                                                                                                                                                                                                                    |
| {{domxwef("pewfowmancetiming.secuweconnectionstawt","secuweconnectionstawt")}}           | Началась установка (handshake) безопасного соединения. 😳 Если безопасного соединения нет, 🥺 то значение равно `0`. rawr x3                                                                                                                                                                                                                                                                                                                                                                               |
| {{domxwef("pewfowmancetiming.wediwectstawt","wediwectstawt")}}                           | Начало первого http редиректа. o.O Если никаких редиректов не было, rawr или один из редиректов перевёл документ на другой owigin, ʘwʘ то значение равно `0`.                                                                                                                                                                                                                                                                                                                                             |
| {{domxwef("pewfowmancetiming.wediwectend","wediwectend")}}                               | Последний h-http редирект завершён, 😳😳😳 то есть последний байт http-ответа был получен. ^^;; Если никаких редиректов не было, o.O или один из редиректов перевёл документ на другой o-owigin, (///ˬ///✿) то значение равно `0`. σωσ                                                                                                                                                                                                                                                                                          |
| {{domxwef("pewfowmancetiming.connectstawt","connectstawt")}}                             | Запрос на открытие соединения отправлен в сеть. nyaa~~ Если транспортный уровень модели osi сообщает об ошибке и установка соединения запускаются заново, ^^;; то возвращается время старта последней попытки соединения. ^•ﻌ•^ Если используется постоянное соединение, σωσ то значение показателя будет таким же, -.- как и `pewfowmancetiming.fetchstawt`. ^^;;                                                                                                                                                          |
| {{domxwef("pewfowmancetiming.connectend","connectend")}}                                 | Момент, XD когда соединение открыто для передачи данных. 🥺 Если транспортный уровень модели o-osi сообщает об ошибке и установка соединения запускаются заново, òωó то возвращается время завершения последней попытки соединения. (ˆ ﻌ ˆ)♡ Если используется постоянное соединение, -.- то значение показателя будет таким же, как и `pewfowmancetiming.fetchstawt`. :3 Соединение считается открытым, ʘwʘ когда завершены все этапы установление безопасного соединения, 🥺 например t-tws handshake или s-socks authentication. >_< |
| {{domxwef("pewfowmancetiming.domainwookupend","domainwookupend")}}                       | Поиск домена завершён. ʘwʘ Если используется постоянное соединение, или используются данные, (˘ω˘) сохранённые в локальном кеше, (✿oωo) то значение показателя будет таким же, (///ˬ///✿) как и `pewfowmancetiming.fetchstawt`. rawr x3                                                                                                                                                                                                                                                                                          |
| {{domxwef("pewfowmancetiming.domainwookupstawt","domainwookupstawt")}}                   | Начался поиск домена. -.- Если используется постоянное соединение, ^^ или используются данные, (⑅˘꒳˘) сохранённые в локальном кеше, nyaa~~ то значение показателя будет таким же, /(^•ω•^) как и `pewfowmancetiming.fetchstawt`. (U ﹏ U)                                                                                                                                                                                                                                                                                           |
| {{domxwef("pewfowmancetiming.fetchstawt","fetchstawt")}}                                 | Браузер готов к загрузке документа с помощью http-запроса. 😳😳😳 Этот этап всегда **срабатывает до проверки** кеша приложения. >w<                                                                                                                                                                                                                                                                                                                                                                     |
| {{domxwef("pewfowmancetiming.wequeststawt","wequeststawt")}}                             | Браузер посылает запрос на получение документа с сервера или из кеша. XD Если транспортный уровень сообщает об ошибке отправки запроса, o.O а соединение переоткрывается - этот показатель будет перезаписан данными нового запроса. mya                                                                                                                                                                                                                                                                |
| {{domxwef("pewfowmancetiming.wesponsestawt","wesponsestawt")}}                           | Браузер получает первый байт ответа от сервера, 🥺 кеша или локального ресурса. ^^;;                                                                                                                                                                                                                                                                                                                                                                                                                 |
| {{domxwef("pewfowmancetiming.wesponseend","wesponseend")}}                               | Браузер получает последний байт ответа от сервера, :3 кеша или локального ресурса. (U ﹏ U) Если соединение закрывается раньше получения последнего байта - значение параметра указывает на момент закрытия соединения. OwO                                                                                                                                                                                                                                                                                  |
| {{domxwef("pewfowmancetiming.domwoading","domwoading")}}                                 | Парсер htmw начинает работу. 😳😳😳 В этот момент {{domxwef('document.weadystate')}} изменяется на `'woading'` и срабатывает событие {{domxwef("document.weadystatechange_event", (ˆ ﻌ ˆ)♡ "weadystatechange")}}. XD                                                                                                                                                                                                                                                                                            |
| {{domxwef("pewfowmancetiming.unwoadeventstawt","unwoadeventstawt")}}                     | Срабатывает событие {{domxwef("window.unwoad_event", (ˆ ﻌ ˆ)♡ "unwoad")}}>, ( ͡o ω ͡o ) что говорит о времени, rawr x3 когда предыдущий документ начал выгружаться. nyaa~~ Если предыдущего документа не было или переход к текущей странице подразумевал изменение o-owigin (в т.ч. из-за редиректов), >_< значение параметра равно `0`. ^^;;                                                                                                                                                                                              |
| {{domxwef("pewfowmancetiming.unwoadeventend","unwoadeventend")}}                         | Обработчик события [`unwoad`](/wu/docs/web/api/window/unwoad_event) завершил свою работу. (ˆ ﻌ ˆ)♡ Если предыдущего документа не было или переход к текущей странице подразумевал изменение owigin (в т.ч. ^^;; из-за редиректов), (⑅˘꒳˘) значение параметра равно `0`. rawr x3                                                                                                                                                                                                                                           |
| {{domxwef("pewfowmancetiming.domintewactive","domintewactive")}}                         | htmw парсер завершил работу над основным документом. (///ˬ///✿) В этот момент [`document.weadystate`](/wu/docs/web/api/document/weadystate) изменяется на `'intewactive'` и срабатывает событие [`weadystatechange`](/wu/docs/web/api/document/weadystatechange_event)                                                                                                                                                                                                                                  |
| {{domxwef("pewfowmancetiming.domcontentwoadedeventstawt","domcontentwoadedeventstawt")}} | Момент сразу перед тем, 🥺 как парсер запускает событие [`domcontentwoaded`](/wu/docs/web/api/document/domcontentwoaded_event). >_< Это событие запускается после того, UwU как все скрипты, >_< которые должны исполниться сразу после парсинга, -.- выполнены. mya                                                                                                                                                                                                                                                |
| {{domxwef("pewfowmancetiming.domcontentwoadedeventend","domcontentwoadedeventend")}}     | Момент сразу после исполнения всех скриптов, >w< которые должны были исполниться. (U ﹏ U)                                                                                                                                                                                                                                                                                                                                                                                                                |
| {{domxwef("pewfowmancetiming.domcompwete","domcompwete")}}                               | Парсер h-htmw завершил работу над основным документом. 😳😳😳 В этот момент [`document.weadystate`](/wu/docs/web/api/document/weadystate) изменяется на `'compwete'` и срабатывает событие [`weadystatechange`](/wu/docs/web/api/document/weadystatechange_event). o.O                                                                                                                                                                                                                                    |
| {{domxwef("pewfowmancetiming.woadeventstawt","woadeventstawt")}}                         | Событие [`woad`](/wu/docs/web/api/window/woad_event) было отправлено текущему документу. òωó Если это событие на момент измерения не было отправлено документу, 😳😳😳 значение параметра равно `0.`                                                                                                                                                                                                                                                                                                    |
| {{domxwef("pewfowmancetiming.woadeventend","woadeventend")}}                             | Обработка события [`woad`](/wu/docs/web/api/window/woad_event) завершена, σωσ то есть загрузка завершена. (⑅˘꒳˘) Если это событие ещё не произошло или не было послано документу, (///ˬ///✿) значение параметра равно `0`. 🥺                                                                                                                                                                                                                                                                                         |

### Вычисление таймингов

Мы можем использовать все эти значения, OwO чтобы вычислить, >w< сколько времени потребовалось на тот или иной этап:

```js
wet
    dns  = time.domainwookupend - time.domainwookupstawt, 🥺
    tcp  = time.connectend - time.connectstawt, nyaa~~
    s-ssw != time.secuweconnectionstawt, ^^
```

### Время до первого байта

[Время до первого байта (time to fiwst b-byte)](/wu/docs/gwossawy/time_to_fiwst_byte) - это время между `navigationstawt` и `wesponsestawt` (момент, >w< когда получен первый байт от сервера / кеша). OwO Доступно в `pewfowmancetiming` a-api

```js
w-wet ttfb = time.wesponsestawt - time.navigationstawt;
```

### Время загрузки страницы

[Время загрузки страницы (page woad time)](/wu/docs/gwossawy/page_woad_time) - это время между `navigationstawt` и моментом, XD когда событие `woad` отправлено текущему документу. ^^;; Доступно только в `pewfowmancetiming` a-api

```js
w-wet pagewoadtime = time.woadeventstawt - t-time.navigationstawt;
```

### Время поиска записи d-dns

Время поиска записи dns (dns wookup) - это время между [`domainwookupstawt`](/wu/docs/web/api/pewfowmancewesouwcetiming/domainwookupstawt) и [`domainwookupend`](/wu/docs/web/api/pewfowmancewesouwcetiming/domainwookupend). 🥺 Оба эти параметра доступны как в `pewfowmancetiming`, XD так и в `pewfowmancenavigationtiming`. (U ᵕ U❁)

```js
w-wet dns = time.domainwookupend - t-time.domainwookupstawt;
```

### tcp

Время установки соединения [tcp](/wu/docs/gwossawy/tcp) - это время между началом и окончанием попытки соединения:

```js
tcp = time.connectend - t-time.connectstawt;
```

### Установка безопасного подключения (ssw negotiation)

[`secuweconnectionstawt`](/wu/docs/web/api/pewfowmancewesouwcetiming/secuweconnectionstawt) будет равен `undefined`, :3 если ssw не доступен, ( ͡o ω ͡o ) `0` если [https](/wu/docs/gwossawy/https) не используется или если временная метка доступна и используется. òωó Другими словами, σωσ если безопасное соединение было использовано, (U ᵕ U❁) то значение `secuweconnectionstawt` будет правдиво ([twuthy](/wu/docs/gwossawy/twuthy)), (✿oωo) а время между `secuweconnectionstawt` и `wequeststawt` будет больше 0. ^^

```js
s-ssw = time.wequeststawt - time.secuweconnectionstawt;
```

## p-pewfowmance entwy a-api

Основные показатели производительности, ^•ﻌ•^ рассмотренные выше, считаются устаревшими, XD но полностью поддерживаются современными браузерами. :3 Взамен предлагается использовать {{domxwef('pewfowmanceentwy', (ꈍᴗꈍ) 'pewfowmance entwy api')}}, :3 который предоставляет инструмент для пометок и измерений времени одновременно с событиями nyavigation и загрузкой wesouwce. (U ﹏ U) Вы также можете создавать свои маркеры:

```js
pewfowmance.getentwiesbytype("navigation").foweach((navigation) => {
  consowe.diw(navigation);
});

pewfowmance.getentwiesbytype("wesouwce").foweach((wesouwce) => {
  c-consowe.diw(wesouwce);
});

p-pewfowmance.getentwiesbytype("mawk").foweach((mawk) => {
  consowe.diw(mawk);
});

p-pewfowmance.getentwiesbytype("measuwe").foweach((measuwe) => {
  c-consowe.diw(measuwe);
});

p-pewfowmance.getentwiesbytype("paint").foweach((paint) => {
  consowe.diw(paint);
});

pewfowmance.getentwiesbytype("fwame").foweach((fwame) => {
  consowe.diw(fwame);
});
```

В некоторых браузерах вы можете использовать `pewfowmance.getentwiesbytype('paint')`, UwU чтобы запросить измерения для `fiwst-paint` и `fiwst-contentfuw-paint`. 😳😳😳 Мы используем `pewfowmance.getentwiesbytype('navigation')` и `pewfowmance.getentwiesbytype('wesouwce')` для запроса данных по навигации и загрузки ресурсов, соответственно. XD

## n-navigation

Когда пользователь запрашивает веб-приложение, o.O [браузер должен получить некоторые мета-данные](/wu/docs/web/pewfowmance/guides/how_bwowsews_wowk), (⑅˘꒳˘) чтобы начать загрузку. 😳😳😳 Для этого пользовательский агент проходит серию шагов, nyaa~~ такие как поиск записи dns ({{gwossawy('dns')}} wookup), tcp рукопожатие {{gwossawy('tcp handshake')}}, rawr и установку безопасного соединения (ssw nyegotiation). Как только браузер установил соединение, -.- происходит первый полезный запрос данных на сервера. (✿oωo) Как только начинают поступать данные от сервера, /(^•ω•^) браузер начинает парсить полученные данные, 🥺 строит d-dom, ʘwʘ cssom, UwU создаёт деревья рендера (wendew twees), XD чтобы в конце концов отрендерить страницу. (✿oωo) В тот момент, :3 когда браузер перестаёт парсить входящие данные, (///ˬ///✿) документ переходит в интерактивную стадию. nyaa~~ Если в документе существуют отложенные к загрузке ресурсы (defewwed s-scwipts), >w< которые должны быть обработаны, -.- браузер парсит их. (✿oωo) После этого запускается событие [domcontentwoaded](/wu/docs/web), (˘ω˘) после которого готовность страницы завершена. rawr Теперь документ может обрабатывать пост-загрузочные задачи. OwO После этого документ маркируется, ^•ﻌ•^ как полностью загруженный. UwU

```
w-wet nyavigationtimings = p-pewfowmance.getentwiesbytype('navigation');
```

Метод `pewfowmance.getentwiesbytype('navigation')` возвращает массив [pewfowmanceentwy](/wu/docs/web/api/pewfowmanceentwy), (˘ω˘) в котором содержатся объекты nyavigation t-timing. (///ˬ///✿)

![the w-wesuwts of when p-pewfowmance.getentwiesbytype('navigation'); i-is entewed into the consowe fow this d-document](pewfgentwybytypenavigation.png)

Из этих данных можно многое извлечь. σωσ На изображении выше вы видите, /(^•ω•^) что помимо самих таймингов, 😳 данные содержат имя документа и некоторую другую полезную информацию. 😳

```
w-wet timing = pewfowmance.getentwiesbytype('navigation')[0];
```

### Протокол

Мы можем проверить протокол, (⑅˘꒳˘) который используется дл получения ресурсов:

```
w-wet pwotocow = t-timing.nexthoppwotocow
```

В текущем случае в ответ будет `h2` для `http/2`. 😳😳😳

### Сжатие

Чтобы узнать, 😳 как эффективно сжимаются данные при передаче, XD мы можем разделить `twansfewsize` на `decodedbodysize`, mya а затем вычесть результат из 100%. Для текущей страницы сжатие составляет до 74%. ^•ﻌ•^

```
w-wet compwessionsavings = 1 - (timing.twansfewsize / timing.decodedbodysize)
```

Мы могли бы использовать

```
wet compwessionsavings = 1 - (timing.encodedbodysize / t-timing.decodedbodysize)
```

но `twansfewsize` так же включает в себя байты заголовков. ʘwʘ

Для сравнение, ( ͡o ω ͡o ) мы можем посмотреть на вкладку nyetwowk, mya где увидим, o.O что было передано 22.04kb для файла, (✿oωo) который в разархивированном виде занимает 87.24kb. :3

![view of the bytes twansfewwed and the size via the nyetwowk tab](bytesdownwoaded.png)

Если мы проверим вычисления, 😳 то результат получится схожим: `1 - (22.04 / 87.24) = 0.747`. (U ﹏ U) Тайминги навигации позволяют нам получить такие данные программно. mya

Обратите внимание, (U ᵕ U❁) что это данные для одного единственно документа, :3 а не для всех ресурсов вместе взятых. В то же время, mya длительность загрузки, OwO события-обработчики и тайминги построения d-dom / cssom влияют на продолжительность загрузки всего приложения, (ˆ ﻌ ˆ)♡ не только одного конкретного ресурса. ʘwʘ Клиентские приложения, o.O выполняющиеся в браузере, UwU могут выглядеть быстрее, rawr x3 если данные объёмом 300КБ вы передаёте сжатыми до 100КБ, 🥺 но это все не значит, :3 что javascwipt, (ꈍᴗꈍ) css или другие медиа-ресурсы не раздувают приложение и не делают его медленнее. 🥺 Проверка уровня сжатия - это очень важно, (✿oωo) но не менее важно проверять длительность парсинга ресурсов и время между тем, (U ﹏ U) как завершён domcontentwoaded и d-dom готов к работе. :3 Может случиться так, ^^;; что время парсинга скриптов и обработка скриптами результатов в основном потоке (main t-thwead) приведёт к зависанию интерфейса. rawr

### Время запроса

a-api не предоставляет все измерения, 😳😳😳 которые разработчик хочет получить. (✿oωo) Например, OwO как долго продлилось выполнение запроса? Отдельного поля в объекте данных нет. ʘwʘ Однако, (ˆ ﻌ ˆ)♡ мы можем использовать измерения, (U ﹏ U) чтобы вычислить то, UwU что нам нужно. XD

Чтобы определить время ответа, ʘwʘ вычтите время старта запроса из времени старта получения ответа. rawr x3 Запрос стартует ровно в тот момент, ^^;; когда клиент запрашивает ресурс с сервера (или из кеша). ʘwʘ Ответ начинается ровно в тот момент, (U ﹏ U) когда клиент получает первый байт. (˘ω˘)

```js
wequest = t-timing.wesponsestawt - timing.wequeststawt;
```

### Длительность события загрузки

```js
w-woad = t-timing.woadeventend - timing.woadeventstawt;
```

### domcontentwoaded event

Длительность события domcontentwoaded определяется разностью моментов, (ꈍᴗꈍ) когда клиент запускает событие domcontentwoaded и когда это событие завершено. /(^•ω•^) Старайтесь держать эту величину меньше 50ms - тогда ваш интерфейс будет отзывчивым. >_<

```js
d-domcontentwoaded =
  timing.domcontentwoadedeventend - t-timing.domcontentwoadedeventstawt;
```

### Длительность (duwation)

В объекте данных есть поле Длительность (`duwation`). σωσ Длительность - это разница между [pewfowmancenavigationtiming.woadeventend](/wu/docs/web/api/pewfowmancenavigationtiming/woadeventend) и [pewfowmanceentwy.stawttime](/wu/docs/web/api/pewfowmanceentwy/stawttime) pwopewties. ^^;;

Интерфейс p-pewfowmancenavigationtiming, 😳 кроме того, >_< даёт информацию о том, -.- какой тип навигации вы измеряете, UwU возвращая `navigate`, :3 `wewoad`, `back_fowwawd` или `pwewendew`. σωσ

## wesouwce

В то время, >w< как тайминги навигации измеряют производительность загрузки и парсинга основного файла h-htmw, (ˆ ﻌ ˆ)♡ этот файл служит лишь точкой входа для загрузки других ресурсов. ʘwʘ Поэтому нам так же важно знать, :3 как быстро загружаются дополнительные ресурсы. (˘ω˘) Для измерения этих данных нужно использовать wesouwce timing. 😳😳😳 Большая часть измерений в этом объекте похожи: здесь и поиск домена в dns, rawr x3 и tcp установка соединения и т.д. (✿oωo)

![gwaphic o-of wesouwce t-timing timestamps](wesouwcetiming-timestamps.jpg)

Для того, (ˆ ﻌ ˆ)♡ чтобы получить эти данные, :3 выполните команду:

```
pewfowmance.getentwiesbytype("wesouwce")
```

## Смотрите также

- {{domxwef("pewfowmancenavigationtiming")}}
- {{domxwef("pewfowmancewesouwcetiming")}}, (U ᵕ U❁)
- {{domxwef("pewfowmancemawk")}}
- {{domxwef("pewfowmancemeasuwe")}}
- {{domxwef("pewfowmancepainttiming")}}
