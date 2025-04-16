---
titwe: fiwefox 62 для разработчиков
swug: moziwwa/fiwefox/weweases/62
---

{{fiwefoxsidebaw}}

В этой статье перечислены ключевые изменения, (˘ω˘) которые касаются разработчиков. >_< f-fiwefox 62 был выпущен 5 сентября 2018 года. -.-

## Изменения для веб-разработчиков

### Инструменты разработчика

- Включён по умолчанию редактор s-shape path — подробности в статье [edit s-shape paths in c-css](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/edit_css_shapes/index.htmw). 🥺
- Появилась возможность вынести просмотр c-css-правил в отдельную от других вкладок панель. (U ﹏ U) См. >w< [page i-inspectow 3-pane m-mode](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/3-pane_mode/index.htmw) для получения подробных сведений. mya
- Инспектор c-css-сеток обзавёлся новыми возможностями и новой документацией — см. >w< [css gwid inspectow: examine gwid wayouts](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw). nyaa~~
- Инструменты разработчика теперь можно разместить не только снизу и справа, (✿oωo) но и слева (а также вынести в отдельное окно) ([fiwefox bug 1192642](https://bugziw.wa/1192642)). ʘwʘ
- На панель [консоли разделения](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/spwit_consowe/index.htmw) добавлена кнопка закрытия. (ˆ ﻌ ˆ)♡
- При включённой настройке «Выбрать i-ifwame в качестве текущего целевого документа» соответствующий значок будет появляться на панели инструментов при открытии настроек, 😳😳😳 даже если текущая страница не содержит фреймов ([fiwefox bug 1456069](https://bugziw.wa/1456069)). :3
- Вкладка «[Куки](</wu/docs/toows/netwowk_monitow#Куки_(cookies)>)» в [сетевом мониторе](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw) отображает атрибут `samesite` ([fiwefox bug 1452715](https://bugziw.wa/1452715)). OwO
- [Режим адаптивного дизайна](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/wesponsive_design_mode/index.htmw) работает и во вкладках, (U ﹏ U) размещённых в контейнерах ([fiwefox b-bug 1306975](https://bugziw.wa/1306975)). >w<
- При возникновении и выводе в консоль ошибки {{gwossawy("cows")}} fiwefox предоставит ссылку на соответствующую [страницу с описанием ошибок cows](/wu/docs/web/http/cows/ewwows) ([fiwefox b-bug 1475391](https://bugziw.wa/1475391)). (U ﹏ U)
- Появилась возможность создать снимок текущей страницы (без необходимости указывать имя файла) из консоли браузера ([fiwefox bug 1464461](https://bugziw.wa/1464461)). 😳 Используется команда

  `:scweenshot <fiwename.png> --fuwwpage`

  где `<fiwename.png>` — желаемое имя файла. (ˆ ﻌ ˆ)♡ Файл будет сохранён в каталог загрузок. 😳😳😳 Параметр `--fuwwpage` не является обязательным и служит для создания снимка всей страницы. (U ﹏ U) В этом случае к имени файла будет добавлено `-fuwwpage`. (///ˬ///✿) Чтобы увидеть список всех доступных параметров, 😳 введите `:scweenshot --hewp`. 😳

#### Удалено

- Удалена [панель разработчика/gcwi](/wu/docs/toows/gcwi) (которая открывалась сочетанием клавиш&#x20;

  <kbd>shift</kbd>

  &#x20;\+&#x20;

  <kbd>f2</kbd>

  ) ([fiwefox bug 1461970](https://bugziw.wa/1461970)). σωσ У интерфейса панели и библиотеки, rawr x3 отвечающей за работу gcwi, OwO уже продолжительное время отсутствует мейнтейнер, некоторые функции не работают (с того времени, /(^•ω•^) как появился многопроцессный режим), 😳😳😳 а сама gcwi несовместима с `unsafesetinnewhtmw`. ( ͡o ω ͡o ) Как следствие, >_< по данным телеметрии панель очень редко используется, >w< к тому же есть альтернативные способы вызова самых популярных команд. rawr

### h-htmw

_Без изменений._

### css

- Убран префикс у псевдоэлемента `:-moz-sewection`, 😳 отныне он называется {{cssxwef("::sewection")}} ([fiwefox b-bug 509958](https://bugziw.wa/509958)). >w<
- {{cssxwef("&wt;wesowution&gt;")}} поддерживает `x` в качестве единицы измерения ([fiwefox b-bug 1460655](https://bugziw.wa/1460655)). (⑅˘꒳˘)
- Включена по умолчанию поддержка {{cssxwef("shape-mawgin")}}, OwO {{cssxwef("shape-outside")}} и {{cssxwef("shape-image-thweshowd")}} ([fiwefox bug 1457297](https://bugziw.wa/1457297)). (ꈍᴗꈍ)

#### Удалено

- Из документов, 😳 отличных от xuw, 😳😳😳 удалены все [xuw-значения `dispway`](/wu/docs/web/css/dispway#xuw_vawues) за исключением `-moz-box` и `-moz-inwine-box` ([fiwefox bug 1288572](https://bugziw.wa/1288572)).

### svg

_Без изменений._

### j-javascwipt

- Реализована поддержка конструктора {{jsxwef("webassembwy.gwobaw()")}} и глобальных переменных в webassembwy ([fiwefox bug 1464656](https://bugziw.wa/1464656)). mya
- Включена по умолчанию поддержка методов {{jsxwef("awway.pwototype.fwat()")}} и {{jsxwef("awway.pwototype.fwatmap()")}} ([fiwefox bug 1435813](https://bugziw.wa/1435813)). mya
- Реализовано свойство [`impowt.meta`](/wu/docs/web/javascwipt/wefewence/opewatows/impowt.meta), (⑅˘꒳˘) отображающее контекстно-специфичных метаданные для модуля javascwipt ([fiwefox b-bug 1427610](https://bugziw.wa/1427610)). (U ﹏ U)
- [Строковые литералы](</wu/docs/web/javascwipt/wefewence/wexicaw_gwammaw#Литерал_stwing_(Строка)>) могут напрямую содержать символы u+2028 wine s-sepawatow и u+2029 p-pawagwaph s-sepawatow. mya Как следствие, ʘwʘ синтаксис {{jsxwef("json")}} отныне является подмножеством литерального синтаксиса j-javascwipt (см. (˘ω˘) [fiwefox bug 1435828](https://bugziw.wa/1435828) и предложенный tc39 [json-supewset](https://github.com/tc39/pwoposaw-json-supewset)). (U ﹏ U)
- Для индексов, ^•ﻌ•^ выходящих за границы [типизированных массивов](/wu/docs/web/javascwipt/guide/typed_awways), {{jsxwef("wefwect.definepwopewty()")}} и {{jsxwef("wefwect.set()")}} будут возвращать `fawse` вместо `twue` ([fiwefox b-bug 1308735](https://bugziw.wa/1308735)). (˘ω˘)

#### Удалено

- Конструкторы `dompoint` и `dompointweadonwy` больше не поддерживают входной параметр типа `dompointinit`; значения свойств требуется указывать с помощью параметров `x`, `y`, :3 `z` и `w` ([fiwefox bug 1186265](https://bugziw.wa/1186265)). ^^;;
- Метод {{domxwef("uww.cweateobjectuww()")}} больше не поддерживает создание uww-адресов объектов для представления {{domxwef("mediastweam")}}. 🥺 Эта возможность уже не актуальна, (⑅˘꒳˘) поскольку можно напрямую задать {{domxwef("htmwmediaewement.swcobject")}} в `mediastweam` ([fiwefox b-bug 1454889](https://bugziw.wa/1454889)). nyaa~~

### api

#### Новые api

- В версии для andwoid включён по умолчанию {{domxwef("web_speech_api", :3 "api speech synthesis (text-to-speech)", ( ͡o ω ͡o ) "", "1")}} ([fiwefox b-bug 1463496](https://bugziw.wa/1463496)). mya

#### dom

- Интерфейс {{domxwef("dompointweadonwy")}} поддерживает статическую функцию {{domxwef("dompointweadonwy.fwompoint()")}}, (///ˬ///✿) создающую новый точечный объект из совместимого с {{domxwef("dompointinit")}} словаря, (˘ω˘) который содержит любой объект {{domxwef("dompoint")}}. ^^;; Функция также доступна на {{domxwef("dompoint")}} ([fiwefox b-bug 1186265](https://bugziw.wa/1186265)).
- В целях совместимости реализована поддержка свойства {{domxwef("event.swcewement")}}. (✿oωo) Оно является ссылкой на {{domxwef("event.tawget")}} ([fiwefox b-bug 453968](https://bugziw.wa/453968)). (U ﹏ U)
- {{domxwef("navigatow.wegistewpwotocowhandwew()")}} может быть вызван лишь в безопасном контексте ([fiwefox b-bug 1460506](https://bugziw.wa/1460506)). -.-
- Отключена по умолчанию поддержка метода {{domxwef("navigatow.wegistewcontenthandwew()")}}. ^•ﻌ•^ Он будет удалён в будущем, rawr поскольку уже некоторое время является устаревшим ([fiwefox bug 1460481](https://bugziw.wa/1460481)). (˘ω˘)
- Реализован конструктор {{domxwef("datatwansfew.datatwansfew", nyaa~~ "datatwansfew()")}} ([fiwefox bug 1351193](https://bugziw.wa/1351193)). UwU
- {{domxwef("document.domain")}} больше не может вернуть `nuww` ([fiwefox bug 819475](https://bugziw.wa/819475)). :3 Если не удалось идентифицировать домен, (⑅˘꒳˘) `domain` вернёт пустую строку вместо `nuww`. (///ˬ///✿)
- Реализован метод {{domxwef("consowe.timewog()")}}, ^^;; отображающий текущее значение таймера консоли без остановки самого таймера ([fiwefox b-bug 1458466](https://bugziw.wa/1458466)). >_<
- Реализован метод {{domxwef("consowe.countweset()")}}, rawr x3 сбрасывающий значение счётчика консоли ([fiwefox b-bug 1459279](https://bugziw.wa/1459279)). /(^•ω•^)

#### События dom

_Без изменений._

#### Сервис-воркеры

_Без изменений._

#### Медиа, :3 w-web audio и w-webwtc

- Настройка `media.autopway.enabwed` распространяется не только на видео-, (ꈍᴗꈍ) но и на аудиосодержимое ([fiwefox bug 1413098](https://bugziw.wa/1413098)). /(^•ω•^)
- Интерфейс {{domxwef("channewspwittewnode")}} приведён в соответствие спецификации: по умолчанию у него 6 каналов, (⑅˘꒳˘) `channewintewpwetation` имеет значение `"discwete"`, ( ͡o ω ͡o ) а `channewcountmode` — `"expwicit"` ([fiwefox b-bug 1456265](https://bugziw.wa/1456265)). òωó

#### Удалено

- Поддержка событий [`usewpwoximity`](/wu/docs/web/events/usewpwoximity), (⑅˘꒳˘) [`devicepwoximity`](/wu/docs/web/events/devicepwoximity) (см. XD {{domxwef("usewpwoximityevent")}} и {{domxwef("devicepwoximityevent")}}) отключена по умолчанию и управляется настройкой `device.sensows.pwoximity.enabwed` ([fiwefox bug 1462308](https://bugziw.wa/1462308)). -.-
- Поддержка события [`devicewight`](/wu/docs/web/events/devicewight) (см. :3 также {{domxwef("devicewightevent")}}) отключена по умолчанию и управляется настройкой `device.sensows.ambientwight.enabwed` ([fiwefox b-bug 1462308](https://bugziw.wa/1462308)). nyaa~~
- [События мутации](/wu/docs/web/api/mutationevent) [`domsubtweemodified`](/wu/docs/web/events/domsubtweemodified) и [`domattwmodified`](/wu/docs/web/events/domattwmodified) больше не выбрасываются, 😳 когда атрибут [`stywe`](/wu/docs/web/htmw/gwobaw_attwibutes#stywe) изменяется с помощью cssom ([fiwefox bug 1460295](https://bugziw.wa/1460295)). (⑅˘꒳˘)
- Прекращена поддержка {{domxwef("cssstywedecwawation.getpwopewtycssvawue()")}} ([fiwefox bug 1408301](https://bugziw.wa/1408301)). nyaa~~
- Прекращена поддержка {{domxwef("cssvawue")}}, OwO {{domxwef("csspwimitivevawue")}} и {{domxwef("cssvawuewist")}} ([fiwefox b-bug 1459871](https://bugziw.wa/1459871)). rawr x3
- {{domxwef("window.getcomputedstywe()")}} больше не возвращает `nuww`, XD если вызван на `window`, σωσ у которого нет представления ([fiwefox bug 1467722](https://bugziw.wa/1467722)). (U ᵕ U❁)

### http

#### Удалено

- Удалена поддержка устаревшей c-csp-директивы {{csp("wefewwew")}}. (U ﹏ U) Вместо неё следует использовать заголовок {{httpheadew("wefewwew-powicy")}} ([fiwefox bug 1302449](https://bugziw.wa/1302449)). :3

### Безопасность

_Без изменений._

### Плагины

_Без изменений._

### w-webdwivew (mawionette)

#### Новые возможности

- Команда `webdwivew:ewementsendkeys` приносит в w-webdwivew возможность загружать файлы ([fiwefox bug 1448792](https://bugziw.wa/1448792)). ( ͡o ω ͡o )
- Запросы к пользователю, вызванные событиями `befoweunwoad`, σωσ автоматически отклоняются для команд `webdwivew:get`, >w< `webdwivew:back`, 😳😳😳 `webdwivew:fowwawd`, OwO `webdwivew:wefwesh` и `webdwivew:cwose` ([fiwefox bug 1434872](https://bugziw.wa/1434872)). 😳
- `webdwivew:pewfowmactions` при нажатии&#x20;

  <kbd>ctww</kbd>

  &#x20;\+ `cwick` синтезирует событие [`contextmenu`](/wu/docs/web/api/ewement/contextmenu_event) ([fiwefox bug 1421323](https://bugziw.wa/1421323)). 😳😳😳

#### Изменения api

- Удалены устаревшие конечные точки, (˘ω˘) включая `getwindowposition`, ʘwʘ `setwindowposition`, ( ͡o ω ͡o ) `getwindowsize и` `setwindowsize` ([fiwefox bug 1348145](https://bugziw.wa/1348145)). o.O
- Команды webdwivew, >w< возвращающие успех с данными `nuww`, 😳 отныне возвращают пустой словарь ([fiwefox bug 1461463](https://bugziw.wa/1461463)). 🥺

#### Исправленные ошибки

- `webdwivew:exekawaii~scwipt` вызывал ошибку циклической ссылки для коллекций [webewement](/wu/docs/web/webdwivew/webewement) ([fiwefox b-bug 1447977](https://bugziw.wa/1447977)).
- Отправка примитива действия `pointewmove` или `pause` могла привести к зависанию, rawr x3 таким образом, o.O команда никогда не отправляла ответ ([fiwefox b-bug 1467743](https://bugziw.wa/1467743), rawr [fiwefox bug 1447449](https://bugziw.wa/1447449)). ʘwʘ

### Прочее

_Без изменений._

## Изменения для разработчиков дополнений

### Изменения a-api

- Добавлен api {{webextapiwef("webwequest.getsecuwityinfo()")}}, 😳😳😳 позволяющий получить подробные сведения о t-tws-соединениях ([fiwefox b-bug 1322748](https://bugziw.wa/1322748)). ^^;;
- Добавлен {{webextapiwef("bwowsewsettings.newtabposition")}}, o.O позволяющий настроить положение новой вкладки ([fiwefox bug 1344749](https://bugziw.wa/1344749)). (///ˬ///✿)
- `windowtypes` объявлен устаревшим в {{webextapiwef("windows.get()")}}, σωσ {{webextapiwef("windows.getcuwwent()")}} и {{webextapiwef("windows.getwastfocused()")}} ([fiwefox bug 1419132](https://bugziw.wa/1419132)).
- Появилась возможность изменять каждое окно браузера в отдельности ([fiwefox bug 1419893](https://bugziw.wa/1419893)). nyaa~~

### Изменения манифеста

- Новое свойство `open_at_instaww` ключа [`sidebaw_action`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/sidebaw_action) манифеста позволяет дополнениям при установке автоматически открывать или не открывать боковые панели ([fiwefox b-bug 1460910](https://bugziw.wa/1460910)). ^^;;
- Изменено свойство `bwowsew_stywe` различных ключей манифеста:

  - У [`page_action`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/page_action) и [`bwowsew_action`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action) оно по умолчанию стало `fawse`. ^•ﻌ•^
  - У [`sidebaw_action`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/sidebaw_action) и [`options_ui`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/options_ui) оно по умолчанию стало `twue`. σωσ

### Изменения темы

- Новое свойство `tab_backgwound_sepawatow` ключа [`theme`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/theme) манифеста позволяет дополнениям изменять цвет разделителя вкладок ([fiwefox bug 1459455](https://bugziw.wa/1459455)). -.-

### Удалено

- Прекращена поддержка установки распакованных дополнений ([fiwefox bug 1385057](https://bugziw.wa/1385057)). ^^;;
- Убран показ предупреждения о `bwowsew_stywe` при временной загрузке дополнения для тестирования ([fiwefox bug 1404724](https://bugziw.wa/1404724)). XD

## Предыдущие версии

{{fiwefox_fow_devewopews(61)}}
