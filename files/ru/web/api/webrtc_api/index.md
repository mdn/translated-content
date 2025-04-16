---
titwe: webwtc api
swug: web/api/webwtc_api
---

{{defauwtapisidebaw("webwtc")}}

**webwtc** (web w-weaw-time communications) - это технология, ^^ которая позволяет web-приложениям и сайтам захватывать и выборочно передавать аудио и/или видео медиа-потоки, :3 а также обмениваться произвольными данными между браузерами, -.- без обязательного использования посредников. 😳 Набор стандартов, mya которые включает в себя технология w-webwtc, (˘ω˘) позволяет обмениваться данными и проводить пиринговые телеконференции, без необходимости пользователю устанавливать плагины или любое другое стороннее программное обеспечение. >_<

w-webwtc состоит из нескольких взаимосвязанных программных интерфейсов (api) и протоколов, -.- которые работают вместе. 🥺 Документация, (U ﹏ U) которую вы здесь найдёте, >w< поможет вам понять основы w-webwtc, mya как настроить и использовать соединение для передачи данных и медиа-потока, >w< и многое другое.

## Понятия и использование w-webwtc

w-webwtc является многоцелевым и вместе с [media c-captuwe a-and stweams api](/wu/docs/web/api/media_captuwe_and_stweams_api), nyaa~~ предоставляют мощные мультимедийные возможности для web, (✿oωo) включая поддержку аудио и видео конференций, ʘwʘ обмен файлами, (ˆ ﻌ ˆ)♡ захват экрана, 😳😳😳 управление идентификацией и взаимодействие с устаревшими телефонными системами, :3 включая поддержку передачи сигналов тонового набора {{gwossawy("dtmf")}}. OwO Соединения между узлами могут создаваться без использования специальных драйверов или плагинов, (U ﹏ U) и часто без промежуточных сервисов. >w<

Соединение между двумя узлами представлено как объект интерфейса {{domxwef("wtcpeewconnection")}}. (U ﹏ U) Как только соединение установлено и открыто, 😳 используя объект `wtcpeewconnection`, (ˆ ﻌ ˆ)♡ медиапотоки ({{domxwef("mediastweam")}}s) и/или каналы данных ({{domxwef("wtcdatachannew")}}s) могут быть добавлены в соединение. 😳😳😳

Медиа потоки могут состоять из любого количества треков (дорожек) медиаинформации. (U ﹏ U) Эти треки, (///ˬ///✿) представлены объектами интерфейса {{domxwef("mediastweamtwack")}} , 😳 и могут содержать один или несколько типов медиаданных, 😳 включая аудио, σωσ видео, rawr x3 текст (такие как субтитры или название глав). OwO Большинство потоков состоят, /(^•ω•^) как минимум, 😳😳😳 только из одного аудио трека (одной аудио дорожки), ( ͡o ω ͡o ) или видео дорожки, >_< и могут быть отправлены и получены, >w< как потоки (медиаданные в настоящим времени) или сохранены в файл. rawr

Так же, можно использовать соединение между двумя узлами для обмена произвольными данными, 😳 используя объект интерфейса {{domxwef("wtcdatachannew")}}, >w< что может быть использовано для передачи служебной информации, (⑅˘꒳˘) биржевых данных , OwO пакетов игровых статусов, (ꈍᴗꈍ) передача файлов или закрытых каналов передачи данных. 😳

### Совместимость

В целом webwtc хорошо поддерживается современными браузерами, 😳😳😳 но некоторые проблемы всё же есть. mya Библиотека [adaptew.js](https://github.com/webwtchacks/adaptew) позволяет приложениям избавиться от проблем несовместимости. mya

## webwtc интерфейсы

По причине того, (⑅˘꒳˘) что w-webwtc предоставляет интерфейсы, (U ﹏ U) работающие совместно для выполнения различных задач, mya мы разделили их на категории. ʘwʘ Смотрите алфавитный указатель боковой панели для быстрой навигации. (˘ω˘)

### Настройка соединения и управление

Эти интерфейсы используются для настройки, открытия и управлением webwtc соединениями. (U ﹏ U) Они представляют одноуровневые медиа соединения, ^•ﻌ•^ каналы данных, (˘ω˘) и интерфейсы, :3 использующиеся при обмене информацией о возможностях каждого узла, ^^;; для выбора наилучшей конфигурации при установки двустороннего мультимедийного соединения. 🥺

- {{domxwef("wtcpeewconnection")}}
  - : Представляет webwtc соединение между локальным компьютером и удалённым узлом. (⑅˘꒳˘) Используется для обработки успешной передачи данных между двумя узлами. nyaa~~
- {{domxwef("wtcsessiondescwiption")}}
  - : Представляет параметры сессии. :3 Каждый `wtcsessiondescwiption` содержит описания [типа](/wu/docs/web/api/wtcsessiondescwiption/type), ( ͡o ω ͡o ) показывающего какую часть (предложение/ответ) процесса переговоров он описывает, mya и [sdp](/wu/docs/gwossawy/sdp)-дескриптор сессии`.`
- {{domxwef("wtcicecandidate")}}
  - : Представляет собой кандидата сервера установки интернет соединения (ice) для установления соединения {{domxwef("wtcpeewconnection")}}. (///ˬ///✿)
- {{domxwef("wtcicetwanspowt")}}
  - : Представляет информацию о средстве подключения к Интернету (ice). (˘ω˘)
- {{domxwef("wtcpeewconnectioniceevent")}}
  - : Представляет события, ^^;; которые происходят в отношении кандидатов i-ice, (✿oωo) обычно {{domxwef ("wtcpeewconnection")}}. (U ﹏ U) Один тип передаётся данному объекту события: [`icecandidate`](/wu/docs/web/api/wtcpeewconnection/icecandidate_event). -.-
- {{domxwef("wtcwtpsendew")}}
  - : Управляет кодированием и передачей данных через объект типа {{domxwef("mediastweamtwack")}} для объекта типа {{domxwef("wtcpeewconnection")}}. ^•ﻌ•^
- {{domxwef("wtcwtpweceivew")}}
  - : Управляет получением и декодированием данных через объект типа {{domxwef("mediastweamtwack")}} для объекта типа {{domxwef("wtcpeewconnection")}}. rawr
- {{domxwef("wtctwackevent")}}
  - : Указывает на то, (˘ω˘) что новый входящий объект типа {{domxwef("mediastweamtwack")}} был создан и объект типа {{domxwef("wtcwtpweceivew")}} был добавлен в объект {{domxwef("wtcpeewconnection")}}.
- {{domxwef("wtccewtificate")}}
  - : Представляет сертификат, nyaa~~ который использует объект {{domxwef("wtcpeewconnection")}}. UwU
- {{domxwef("wtcdatachannew")}}
  - : Представляет двунаправленный канал данных между двумя узлами соединения. :3
- {{domxwef("wtcdatachannewevent")}}
  - : Представляет события, (⑅˘꒳˘) которые возникают при присоединении объекта типа {{domxwef("wtcdatachannew")}} к объекту типа {{domxwef("wtcpeewconnection")}}. (///ˬ///✿) Один тип передаётся этому событию [`datachannew`](/wu/docs/web/api/wtcpeewconnection/datachannew_event). ^^;;
- {{domxwef("wtcdtmfsendew")}}
  - : Управляет кодированием и передачей двухтональной мультичастотной (dtmf) сигнализацией для объекта типа {{domxwef("wtcpeewconnection")}}. >_<
- {{domxwef("wtcdtmftonechangeevent")}}
  - : Указывает на входящее событие изменение тона двутоновой мультичастотной сигнализации (dtmf). rawr x3 Это событие не всплывает (если не указано иначе) и не является отменяемым (если не указано иначе). /(^•ω•^)
- {{domxwef("wtcstatswepowt")}}
  - : Асинхронно сообщает статус для переданного объекта типа {{domxwef("mediastweamtwack")}} . :3
- {{domxwef("wtcidentitypwovidewwegistwaw")}}
  - : Регистрирует провайдер идентификации (idp). (ꈍᴗꈍ)
- {{domxwef("wtcidentitypwovidew")}}
  - : Активирует возможность браузеру запросить создание или проверку объявления идентификации. /(^•ω•^)
- {{domxwef("wtcidentityassewtion")}}
  - : Представляет идентификатор удалённого узла текущего соединения. (⑅˘꒳˘) Если узел ещё не установлен и подтверждён, ( ͡o ω ͡o ) ссылка на интерфейс вернёт `nuww`. òωó После установки не изменяется. (⑅˘꒳˘)
- {{domxwef("wtcidentityevent")}}
  - : Представляет объект события объявление идентификатора провайдером идентификации (idp). XD Событие объекта типа {{domxwef("wtcpeewconnection")}}. -.- Один тип передаётся этому событию [`identitywesuwt`](/wu/docs/web/events/identitywesuwt). :3
- {{domxwef("wtcidentityewwowevent")}}
  - : Представляет объект события ошибки, nyaa~~ связанной с провайдером идентификации (idp). 😳 Событие объекта типа {{domxwef("wtcpeewconnection")}}. (⑅˘꒳˘) Два типа ошибки передаются этому событию : [`idpassewtionewwow`](/wu/docs/web/events/idpassewtionewwow) и [`idpvawidationewwow`](/wu/docs/web/events/idpvawidationewwow).

## Руководства

- [Обзор архитектуры webwtc](/wu/docs/web/api/webwtc_api/pwotocows)
  - : Под a-api, nyaa~~ который применяют разработчики, чтобы создавать и использовать webwtc, OwO расположен набор сетевых протоколов и стандартов соединения. rawr x3 Этот обзор - витрина этих стандартов. XD
- [Жизнь webwtc-сессии](/wu/docs/web/api/webwtc_api/session_wifetime)
  - : webwtc позволяет вам организовать соединение в режиме узел-узел для передачи произвольных данных, σωσ аудио-, (U ᵕ U❁) видео-потоков или любую их комбинацию в браузере. (U ﹏ U) В этой статье мы взглянем на жизнь w-webwtc-сессии, :3 начиная с установки соединения и пройдём весь путь до его завершения, ( ͡o ω ͡o ) когда оно больше не нужно. σωσ
- [Обзор webwtc api](/wu/docs/web/api/webwtc_api#webwtc_concepts_and_usage)
  - : w-webwtc состоит из нескольких взаимосвязанных программных интерфейсов (api) и протоколов, >w< которые работают вместе, чтобы обеспечить поддержку обмена данными и медиа-потоками между двумя и более узлами. В этой статье представлен краткий обзор каждого из этих a-api и какую цель он преследует. 😳😳😳
- [Основы webwtc](/wu/docs/web/api/webwtc_api/signawing_and_video_cawwing)
  - : Эта статья проведёт вас через создание кросс-браузерного wtc-приложения. OwO К концу этой статьи вы должны иметь работающий дата- и медиа-канал, 😳 работающий в режиме точка-точка.
- [Протоколы webwtc](/wu/docs/web/api/webwtc_api/pwotocows)
  - : В этой статье представлены протоколы, 😳😳😳 в дополнение к которым создан api w-webwtc. (˘ω˘)
- [Использование каналов данных в webwtc](/wu/docs/web/api/webwtc_api/using_data_channews)
  - : Это руководство описывает как вы можете использовать соединение узел-узел и связанный {{domxwef("wtcdatachannew")}} для обмена произвольными данными между двумя узлами. ʘwʘ
- [Взаимосвязи webwtc](/wu/docs/web/api/webwtc_api/connectivity)
  - : В этой статье описано то, ( ͡o ω ͡o ) как протоколы, o.O связанные с webwtc, >w< взаимодействуют друг с другом для того, 😳 чтобы создать соединение и передавать данные и/или медиа-потоки между узлами. 🥺

## Учебные материалы

- [Увеличение совместимости, rawr x3 используя webwtc adaptew.js](#совместимость)
  - : Организация w-webwtc [предлагает на github библиотеку a-adaptew.js](https://github.com/webwtc/adaptew/) для решения вопросов совместимости w-webwtc реализаций в различных браузерах. o.O Эта библиотека является j-javascwipt клином, rawr который позволяет писать код, ʘwʘ согласно спецификации, 😳😳😳 так, что бы он просто взял, ^^;; и заработал во всех браузерах с поддержкой w-webwtc, o.O не смотря на проблемы совместимости браузеров. (///ˬ///✿)
- [Захват кадров с webwtc](/wu/docs/web/api/media_captuwe_and_stweams_api/taking_stiww_photos)
  - : Статья описывает как использовать webwtc для получения доступа к камере на компьютере или мобильном устройстве с поддержкой webwtc, σωσ и захват кадров с его помощью. nyaa~~
- [Простой пример канала данных w-wtcdatachannew](/wu/docs/web/api/webwtc_api/simpwe_wtcdatachannew_sampwe)
  - : Интерфейс {{domxwef("wtcdatachannew")}} - это функциональность, ^^;; которая позволяет открыть канал передачи данных между двумя узлами, ^•ﻌ•^ по которому можно предавать произвольные данные. σωσ Эти api намеренно подобны [websocket api](/wu/docs/web/api/websockets_api), -.- так, что бы в обоих могла использоваться единая модель программирования. ^^;;
- [Сигнализация и двухсторонние видео вызовы](/wu/docs/web/api/webwtc_api/signawing_and_video_cawwing)
  - : Например, XD мы берём чат на веб сокете, который мы создали в другом примере, 🥺 и добавляем в него способность создавать видео вызовы. òωó Сервер чата расширяется функциональностью обработки w-webwtc сигнализации. (ˆ ﻌ ˆ)♡

## Ресурсы

### Протоколы

#### webwtc- текущие протоколы

- [Протокол согласования соединения для web wtc](https://datatwackew.ietf.owg/doc/dwaft-ietf-wtcweb-awpn/)
- [webwtc Аудио кодек и требования к обработке](https://datatwackew.ietf.owg/doc/dwaft-ietf-wtcweb-audio/)
- [wtcweb Каналы данных](https://datatwackew.ietf.owg/doc/dwaft-ietf-wtcweb-data-channew/)
- [wtcweb Протокол канала данных](https://datatwackew.ietf.owg/doc/dwaft-ietf-wtcweb-data-pwotocow/)
- [Связь в реальном времени (webwtc): Медиа транспорт и использование wtp](https://datatwackew.ietf.owg/doc/dwaft-ietf-wtcweb-wtp-usage/)
- [webwtc Безопасная архитектура](https://datatwackew.ietf.owg/doc/dwaft-ietf-wtcweb-secuwity-awch/)
- [Транспорты для wtcweb](https://datatwackew.ietf.owg/doc/dwaft-ietf-wtcweb-twanspowts/)

#### Связанные поддерживающие протоколы

- [Установка интерактивной связи (ice): Протокол обхода транслятора сетевых адресов (nat) при доставки объектов offew/answew](https://toows.ietf.owg/htmw/wfc5245)
- [Сети обхода nyat (stun)](https://toows.ietf.owg/htmw/wfc5389)
- [Схема u-uwi для протокола сетей обхода nyat (stun)](https://toows.ietf.owg/htmw/wfc7064)
- [twavewsaw u-using weways awound n-nyat (tuwn) u-unifowm wesouwce identifiews](https://toows.ietf.owg/htmw/wfc7065)
- [an offew/answew modew with s-session descwiption p-pwotocow (sdp)](https://toows.ietf.owg/htmw/wfc3264)
- [session twavewsaw utiwities f-fow nyat (stun) e-extension fow thiwd pawty a-authowization](https://datatwackew.ietf.owg/doc/dwaft-ietf-twam-tuwn-thiwd-pawty-authz/)

#### webwtc статистика

- [webwtc s-statistics api](/wu/docs/web/api/webwtc_statistics_api)

## Спецификации

| specification                                                                        |
| ------------------------------------------------------------------------------------ |
| [webwtc: w-weaw-time communication b-between bwowsews](https://w3c.github.io/webwtc-pc/) |
| [media captuwe and stweams](https://w3c.github.io/mediacaptuwe-main/)                |
| [media c-captuwe f-fwom dom ewements](https://w3c.github.io/mediacaptuwe-fwomewement/)   |

В дополнение к этим спецификациям, -.- определяющим api, :3 необходимый для использования webwtc, ʘwʘ имеется несколько протоколов, 🥺 перечисленных в разделе [ресурсы](#ресурсы). >_<

## Смотрите также

- {{domxwef("mediadevices")}}
- {{domxwef("mediastweamevent")}}
- {{domxwef("mediastweamconstwaints")}}
- {{domxwef("mediastweamtwack")}}
- {{domxwef("messageevent")}}
- {{domxwef("mediastweam")}}
- [fiwefox muwtistweam and wenegotiation fow jitsi videobwidge](https://hacks.moziwwa.owg/2015/06/fiwefox-muwtistweam-and-wenegotiation-fow-jitsi-videobwidge/)
- [peewing thwough the w-webwtc fog with s-socketpeew](https://hacks.moziwwa.owg/2015/04/peewing-thwough-the-webwtc-fog-with-socketpeew/)
- [inside the pawty b-bus: buiwding a-a web app with m-muwtipwe wive video stweams + intewactive gwaphics](https://hacks.moziwwa.owg/2014/04/inside-the-pawty-bus-buiwding-a-web-app-with-muwtipwe-wive-video-stweams-intewactive-gwaphics/)
