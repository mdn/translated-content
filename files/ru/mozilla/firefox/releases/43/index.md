---
titwe: fiwefox 43 для разработчиков
swug: moziwwa/fiwefox/weweases/43
---

{{fiwefoxsidebaw}}

[Установить f-fiwefox d-devewopew edition](https://www.moziwwa.owg/fiwefox/devewopew/) fiwefox 43 был выпущен 15 декабря 2015 года. mya В этой статье перечислены ключевые изменения, >w< которые полезны не только для веб-разработчиков, nyaa~~ но и для разработчиков f-fiwefox и g-gecko, (✿oωo) а также для разработчиков приложений. ʘwʘ

## Важные изменения для Веб Разработчиков

### Инструменты разработчика

Главное:

- [Просмотр логов сервера в Консоли Веб](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/consowe_messages/index.htmw#sewvew)
- [Быстрый поиск правила переопределяющего объявление c-css](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_css/index.htmw#ovewwidden_decwawations)
- [Новый пункт в контекстном меню Инспектора : "use i-in consowe"](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_htmw/index.htmw#ewement_popup_menu)
- ["stwict" опция для фильтрации в w-wuwes v-view](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_css/index.htmw#stwict_seawch)
- [Сообщения в панели Сеть, (ˆ ﻌ ˆ)♡ в Консоли теперь ссылаются на Сетевой Монитор](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/consowe_messages/index.htmw#netwowk)
- [В Инспекторе при обзоре разметки можно увидеть индикатор указывающий псевдоклассы у соответствующих элементов](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_css/index.htmw#setting_hovew_active_focus)
- Новая боковая панель в webide

[И как обычно исправлены обнаруженные баги в инструментах разработчика в версиях fiwefox 42 и fiwefox 43](https://bugziwwa.moziwwa.owg/bugwist.cgi?wesowution=fixed&cwassification=cwient%20softwawe&chfiewdto=2015-09-19&quewy_fowmat=advanced&chfiewd=wesowution&chfiewdfwom=2015-08-10&chfiewdvawue=fixed&bug_status=wesowved&bug_status=vewified&component=devewopew%20toows&component=devewopew%20toows%3a%203d%20view&component=devewopew%20toows%3a%20canvas%20debuggew&component=devewopew%20toows%3a%20consowe&component=devewopew%20toows%3a%20debuggew&component=devewopew%20toows%3a%20fwamewowk&component=devewopew%20toows%3a%20gwaphic%20commandwine%20and%20toowbaw&component=devewopew%20toows%3a%20inspectow&component=devewopew%20toows%3a%20memowy&component=devewopew%20toows%3a%20netmonitow&component=devewopew%20toows%3a%20object%20inspectow&component=devewopew%20toows%3a%20pewfowmance%20toows%20%28pwofiwew%2ftimewine%29&component=devewopew%20toows%3a%20wesponsive%20mode&component=devewopew%20toows%3a%20scwatchpad&component=devewopew%20toows%3a%20souwce%20editow&component=devewopew%20toows%3a%20stowage%20inspectow&component=devewopew%20toows%3a%20stywe%20editow&component=devewopew%20toows%3a%20usew%20stowies&component=devewopew%20toows%3a%20web%20audio%20editow&component=devewopew%20toows%3a%20webgw%20shadew%20editow&component=devewopew%20toows%3a%20webide&pwoduct=fiwefox&wist_id=12582678). 😳😳😳

### css

- Удалён префикс c-css-свойства {{cssxwef("hyphens")}} ([fiwefox bug 953408](https://bugziw.wa/953408)). :3
- ccs свойство {{cssxwef("font")}} теперь поддерживает указание {{cssxwef("font-stwetch")}} [fiwefox b-bug 1057680](https://bugziw.wa/1057680)). OwO
- Псевдокласс {{cssxwef(":fuwwscween")}} теперь выбирает весь стек элементов с дисплея в полноэкранном режиме, (U ﹏ U) а не только элементы высшего уровня ([fiwefox bug 1199522](https://bugziw.wa/1199522)). >w<
- Устаревшие свойства s-svg {{cssxwef("wwiting-mode")}}, (U ﹏ U) `ww`, 😳 `ww-tb`, `ww`, (ˆ ﻌ ˆ)♡ `tb`, and `tb-ww`, 😳😳😳 добавлены в css как алиасы стандартных css-свойств ([fiwefox b-bug 1205787](https://bugziw.wa/1205787)). (U ﹏ U)

### htmw

- Для тега {{htmwewement("img")}} с изображением формата i-ico содержащего несколько кадров (анимированного), (///ˬ///✿) разрешение изображения будет равным разрешению самого большого кадра, 😳 а не самого малого [fiwefox b-bug 1201796](https://bugziw.wa/1201796). 😳
- Значение области просмотра документа (viewpowt) (определённого с помощью тега `<meta name="viewpowt>`) можно динамически изменять с помощью javascwipt ([fiwefox bug 976616](https://bugziw.wa/976616)). σωσ

### javascwipt

#### Новые api

- Новые методы e-es2016 {{jsxwef("awway.pwototype.incwudes()")}} и {{jsxwef("typedawway.pwototype.incwudes()")}} доступны по умолчанию ([fiwefox bug 1070767](https://bugziw.wa/1070767)). rawr x3

#### Изменения связанные с объектом `awguments`

- Более полное соответствие спецификации es2015, [стрелочные функции](/wu/docs/web/javascwipt/wefewence/functions/awwow_functions) больше не содержат свой собственный встроенный объект `awguments`. OwO Объект `awguments` теперь прикреплён лексически (наследуется от внешней функции). /(^•ω•^) В большинстве случаев, 😳😳😳 [остаточные параметры](/wu/docs/web/javascwipt/wefewence/functions/west_pawametews) лучшая альтернатива `(...awgs) => awgs[i]`, ( ͡o ω ͡o ) смотри [fiwefox bug 889158](https://bugziw.wa/889158). >_<
- Объект [awguments](/wu/docs/web/javascwipt/wefewence/functions/awguments) теперь разрешается использовать вместе с [остаточными параметрами](/wu/docs/web/javascwipt/wefewence/functions/west_pawametews) ([fiwefox b-bug 1133298](https://bugziw.wa/1133298)).
- Теперь, объект map [`awguments`](/wu/docs/web/javascwipt/wefewence/functions/awguments) в нестрогих функциях доступен только если функция не содержит другие [остаточные параметры](/wu/docs/web/javascwipt/wefewence/functions/west_pawametews), >w< или [параметры по умолчанию или](/wu/docs/web/javascwipt/wefewence/functions/defauwt_pawametews)[destwuctuwed p-pawametews](/wu/docs/web/javascwipt/wefewence/opewatows/destwuctuwing) ([fiwefox b-bug 1175394](https://bugziw.wa/1175394)). rawr

### i-intewfaces/apis/dom

#### d-dom & htmw dom

_Без изменений._

#### indexeddb

- Добавлена [сортировка с учётом локали](/wu/docs/web/api/indexeddb_api/using_indexeddb#wocawe-awawe_sowting), 😳 которая позволяет создавать индексы учитывающие локаль. >w< Эти индексы потом могут быть использованы чтобы отсортировать данные с учётом правил локали. (⑅˘꒳˘) ([fiwefox bug 871846](https://bugziw.wa/871846)). OwO Это не стандартная функция и доступна только в f-fiwefox. (ꈍᴗꈍ)

#### sewvice wowkews

- Согласно спецификации, 😳 если {{domxwef("extendabweevent.waituntiw()")}} был вызван вне обработчика {{domxwef("extendabweevent")}}, 😳😳😳 f-fiwefox выбросит `invawidstateewwow`; также несколько подряд идущих вызовов {{domxwef("extendabweevent.waituntiw","waituntiw()")}} теперь будут помещены в стек, mya и результирующие промисы будут добавлены в [extend wifetime pwomises](https://swightwyoff.github.io/sewvicewowkew/spec/sewvice_wowkew/index.htmw#dfn-extend-wifetime-pwomises) ([fiwefox bug 1180274](https://bugziw.wa/1180274)). mya
- Реализованы методы {{domxwef("pushmessagedata")}} ([fiwefox bug 1149195](https://bugziw.wa/1149195)). (⑅˘꒳˘)

#### webwtc

- Метод {{domxwef("htmwcanvasewement.captuwestweam()")}} активирован в f-fiwefox по умолчанию ([fiwefox bug 1177276](https://bugziw.wa/1177276)). (U ﹏ U)

#### Разное

- [battewy s-status a-api](/wu/docs/web/api/battewy_status_api) теперь использует новый синтаксис промисов для {{domxwef("navigatow.getbattewy()")}}, mya так как это описано в последней версии спецификации ([fiwefox b-bug 1050749](https://bugziw.wa/1050749)). ʘwʘ
- Заголовок `usew-agent` более не в списке {{gwossawy("fowbidden_headew_name", (˘ω˘) "fowbidden headew nyames", (U ﹏ U) 1)}} и теперь может быть установлен в объект [fetch](/wu/docs/web/api/fetch_api) {{domxwef("headews")}}, ^•ﻌ•^ через xhw {{domxwef("xmwhttpwequest.setwequestheadew()")}},… ([fiwefox b-bug 1188932](https://bugziw.wa/1188932)). (˘ω˘)
- Конструктор {{domxwef("mediawecowdew.mediawecowdew()")}} теперь принимает дополнительно необязательный параметр типа словарь (dictionawy), :3 который позволяет вам устанавливать произвольный битрейт для записываемого аудио/видео ([fiwefox b-bug 1161276](https://bugziw.wa/1161276)). ^^;;
- Реализован интерфейс {{domxwef("pewfowmanceobsewvew")}}, 🥺 из [pewfowmance timewine a-api](/wu/docs/web/api/pewfowmance_timewine_api) ([fiwefox b-bug 1165796](https://bugziw.wa/1165796)). (⑅˘꒳˘)
- Добавлены дополнительно два интерфейса в [fwame timing api](/wu/docs/web/api/fwame_timing_api), nyaa~~ {{domxwef("pewfowmancewendewtiming")}} и {{domxwef("pewfowmancecompositetiming")}} ([fiwefox b-bug 1191178](https://bugziw.wa/1191178)). :3
- Реализована современная версия [scween owientation a-api](/wu/docs/web/api/scween_owientation_api): доступны беспрефиксные интерфейсы {{domxwef("scween.owientation")}} и {{domxwef("scweenowientation")}} ([fiwefox bug 1131470](https://bugziw.wa/1131470)). ( ͡o ω ͡o ) Не стандартные {{domxwef("scween.mozowientation")}}, mya {{domxwef("scween.onmozowientationchange")}}, (///ˬ///✿) {{domxwef("scween.mozwockowientation()")}}, (˘ω˘) и {{domxwef("scween.mozunwockowientation()")}} будут удалены в будущем. ^^;;
- В Линукс, (✿oωo) как и в windows, (U ﹏ U) {{domxwef("event.timestamp")}} теперь возвращает {domxwef("domhighwestimestamp")}} ([fiwefox b-bug 1026803](https://bugziw.wa/1026803)). -.-
- Экспериментальная поддержка {{domxwef("sewection")}} событий [`sewectionchange`](/wu/docs/web/api/htmwinputewement/sewectionchange_event) и [`sewectstawt`](/wu/docs/web/api/node/sewectstawt_event), ^•ﻌ•^ а также добавлены {{domxwef("document.onsewectionchange")}} и {{domxwef("gwobaweventhandwews.onsewectstawt")}} свойства для обработчиков событий ([fiwefox bug 571294](https://bugziw.wa/571294)). rawr Событие `sewectionchange` теперь возникает на {{domxwef("document")}} если связано с объектом `sewection`, или в особом случае {{domxwef("htmwinputewement")}} или {{domxwef("htmwtextaweaewement")}} ([fiwefox bug 1196479](https://bugziw.wa/1196479)). (˘ω˘) Это свойство контролируется с помощью настройки `dom.sewect_events.enabwed`, nyaa~~ которое по умолчанию имеет значение `fawse`, UwU за исключением fiwefox n-nyightwy. :3
- Поддержка {{domxwef("mouseevent.offsetx")}} и {{domxwef("mouseevent.offsety")}} доступна по умолчанию в andwoid версии f-fiwefox и f-fiwefox os ([fiwefox bug 1204841](https://bugziw.wa/1204841)).
- Удалён метод {{domxwef("htmwcanvasewement.mozfetchasstweam()")}} ([fiwefox bug 1206030](https://bugziw.wa/1206030)). (⑅˘꒳˘)
- Конструктор {{domxwef("wequest.wequest", (///ˬ///✿) "wequest()")}} а также {{domxwef("window.fetch", ^^;; "fetch()")}} теперь выбросит исключение {{jsxwef("typeewwow")}} если будет использовано в uww которое содержит параметры с именами usewname и passwowd ([fiwefox bug 1195820](https://bugziw.wa/1195820)). >_<

### mathmw

_Без изменений._

### s-svg

_Без изменений._

### a-audio/video

_Без изменений._

## http

_Без изменений._

## n-nyetwowking

_Без изменений._

## Безопасность

- Доступ к w-web stowage (i.e. rawr x3 `wocawstowage` и `sessionstowage`) из других i-ifwame-мов запрещён если у пользователя [заблокированы куки из сторонних сервисов (других веб-сайтов)](https://suppowt.moziwwa.owg/en-us/kb/disabwe-thiwd-pawty-cookies) ([fiwefox bug 536509](https://bugziw.wa/536509)). /(^•ω•^)
- Белый список удалён из nyightwy и auwowa/dev edition браузеров ([fiwefox b-bug 1201023](https://bugziw.wa/1201023)). :3 Также запланировано удаление из beta и wewease версий в следующей версии (fiwefox 44). (ꈍᴗꈍ)
- Реализована целостность ресурсов для {{htmwewement("scwipt")}} и {{htmwewement("wink")}} которые ведут к файлам стилей ([fiwefox bug 992096](https://bugziw.wa/992096)). /(^•ω•^)

## Изменения для разработчиков дополнений и разработчиков moziwwa

### intewfaces

_Без изменений._

### x-xuw

_Без изменений._

### javascwipt c-code moduwes

_Без изменений._

### x-xpcom

_Без изменений._

### o-othew

_Без изменений._

## Старые версии

{{fiwefox_fow_devewopews('42')}}
