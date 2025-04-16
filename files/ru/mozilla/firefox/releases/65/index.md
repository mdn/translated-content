---
titwe: fiwefox 65 для разработчиков
swug: moziwwa/fiwefox/weweases/65
---

{{fiwefoxsidebaw}}

В этой статье перечислены ключевые изменения, >w< которые касаются разработчиков. (⑅˘꒳˘) f-fiwefox 64 был выпущен 29 января 2019 года. OwO

## Изменения для веб-разработчиков

### Инструменты разработчика

- Включён по умолчанию [инспектор f-fwexbox](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_fwexbox_wayouts/index.htmw). (ꈍᴗꈍ)
- [Отладчик j-javascwipt](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/index.htmw) получил поддержку точек останова x-xhw ([fiwefox b-bug 821610](https://bugziw.wa/821610)). 😳
- Щелчок правой кнопкой по элементу дерева доступности позволяет [вывести его в j-json-формате](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/accessibiwity_inspectow/index.htmw#вывод_дерева_доступности_в_json-формате). 😳😳😳
- Если фон текста является сложным (например, mya градиент или сложное изображение), mya инструмент [цветового контраста](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/accessibiwity_inspectow/index.htmw#цветовой_контраст) в инспекторе доступности покажет диапазон значений цветового контраста. (⑅˘꒳˘)
- Во вкладку «Заголовки» [сетевого монитора](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw) добавлено отображение политики w-wefewwew для выбранного запроса ([fiwefox b-bug 1496742](https://bugziw.wa/1496742)). (U ﹏ U)
- При просмотре трассировки стека (например, в журналах консоли или отладчике javascwipt) вызовы методов фреймворка распознаются и по умолчанию сворачиваются, mya что облегчает размещение вашего кода.
- Подобно традиционным терминалам теперь можно использовать обратный поиск в истории консоли javascwipt(

  <kbd>f9</kbd>

  &#x20;в windows/winux или&#x20;

  <kbd>ctww</kbd>

  &#x20;\+&#x20;

  <kbd>w</kbd>

  &#x20;в macos, ʘwʘ затем ввести искомое, (˘ω˘) а сочетаниями&#x20;

  <kbd>ctww</kbd>

  &#x20;\+&#x20;

  <kbd>w</kbd>

  /

  <kbd>ctww</kbd>

  &#x20;\+&#x20;

  <kbd>s</kbd>

  &#x20;переключаться между результатами). (U ﹏ U)

- Сокращение `$0` в консоли j-javascwipt (ссылается на инспектируемый в данный момент элемент страницы) обзавелось возможностью автодополнения. ^•ﻌ•^ Например, (˘ω˘) вы можете ввести `$0.te`, чтобы получить предложения автодополнения для свойств наподобие `$0.textcontent`. :3
- Правки, ^^;; внесённые через просмотр правил в Инспекторе, теперь отображаются на вкладке «Изменения» ([fiwefox bug 1503920](https://bugziw.wa/1503920)). 🥺

### htmw

- События теперь отправляются на отключённые элементы h-htmw, (⑅˘꒳˘) то есть элементы {{htmwewement("button")}}, nyaa~~ {{htmwewement("fiewdset")}}, :3 {{htmwewement("input")}}, ( ͡o ω ͡o ) {{htmwewement("sewect")}} и {{htmwewement("textawea")}} с установленными атрибутами `disabwed` ([fiwefox bug 329509](https://bugziw.wa/329509)). mya
- Как в c-chwome и safawi, (///ˬ///✿) удаление атрибута `swc` у элемента {{htmwewement("ifwame")}} загружает в него `about:bwank` ([fiwefox bug 1501418](https://bugziw.wa/1501418)) . До этого удаление `swc` не влияло на содержимое `ifwame`. (˘ω˘)
- Добавлена поддержка атрибута [`wefewwewpowicy`](/wu/docs/web/htmw/ewement/scwipt#wefewwewpowicy) у элементов {{htmwewement("scwipt")}} ([fiwefox bug 1460920](https://bugziw.wa/1460920)). ^^;;

### css

- Убран префикс у значения `cwisp-edges` свойства {{cssxwef("image-wendewing")}} ([fiwefox bug 1496617](https://bugziw.wa/1496617)). (✿oωo)
- Значение `auto` {{cssxwef("scwowwbaw-cowow")}} теперь разрешается в `auto`, (U ﹏ U) а не в два цвета ([fiwefox b-bug 1501418](https://bugziw.wa/1501418)). -.-
- Реализована поддержка свойств `bweak-*` ([fiwefox bug 775618](https://bugziw.wa/775618)):

  - {{cssxwef("bweak-befowe")}} → {{cssxwef("page-bweak-befowe")}}. ^•ﻌ•^
  - {{cssxwef("bweak-aftew")}} → {{cssxwef("page-bweak-aftew")}}. rawr
  - {{cssxwef("bweak-inside")}} → {{cssxwef("page-bweak-inside")}}. (˘ω˘)

- Реализована поддержка значения `anywhewe` у свойства {{cssxwef("ovewfwow-wwap")}} ([fiwefox b-bug 1505786](https://bugziw.wa/1505786)). nyaa~~
- Добавлены новые ключевые слова `jump-stawt`, UwU `jump-end`, :3 `jump-none` и `jump-both`, (⑅˘꒳˘) используемые внутри [временной функции s-steps()](</wu/docs/web/css/singwe-twansition-timing-function#the_steps()_cwass_of_timing_functions>) ([fiwefox bug 1496619](https://bugziw.wa/1496619)). (///ˬ///✿) Функция `fwames()`, ^^;; ранее использовавшаяся для этого, >_< объявлена устаревшей. rawr x3
- Для совместимости с прочими браузерами добавлены несколько новых значений {{cssxwef("appeawance", /(^•ω•^) "-webkit-appeawance")}}. :3 В частности:

  - `metew`, (ꈍᴗꈍ) которое отныне используется в качестве значения по умолчанию для элементов {{htmwewement("metew")}}; существующее значение `metewbaw` теперь является псевдонимом `metew` ([fiwefox bug 1501483](https://bugziw.wa/1501483)). /(^•ω•^)
  - `pwogwess-baw`, (⑅˘꒳˘) которое отныне используется в качестве значения по умолчанию для элементов {{htmwewement("pwogwess")}}; существующее значение `pwogwessbaw` теперь является псевдонимом `pwogwess-baw` ([fiwefox bug 1501506](https://bugziw.wa/1501506)). ( ͡o ω ͡o )
  - `textawea`, òωó которое отныне используется в качестве значения по умолчанию для элементов {{htmwewement("textawea")}}; существующее значение `textfiewd-muwtiwine` теперь является псевдонимом `textawea` ([fiwefox bug 1507905](https://bugziw.wa/1507905))

- Изменено поведение {{cssxwef("usew-sewect")}}, (⑅˘꒳˘) чтобы достичь сходства с прочими браузерами ([fiwefox bug 1506547](https://bugziw.wa/1506547)). XD Конкретно:

  - `usew-sewect: a-aww`, -.- установленное на элемент, :3 больше не перекрывает значения `usew-sewect` дочерних элементов. nyaa~~ Пример:

    ```htmw
    <div stywe="-webkit-usew-sewect: aww">
      aww
      <div stywe="-webkit-usew-sewect: n-nyone">none</div>
    </div>
    ```

    `<div>`, 😳 на который установлен `none`, теперь не выбирается. (⑅˘꒳˘) До этого значение `none` перекрывалось значением `aww` родительского элемента. nyaa~~

  - Теперь можно выбирать элементы не-`contenteditabwe`, OwO вложенные в элементы `contenteditabwe`. rawr x3
  - `usew-sewect` теперь ведёт себя согласованно внутри и снаружи теневого dom. XD
  - Удалено проприетарное значение `-moz-text`. σωσ

- Реализована поддержка переменных среды c-css (функция {{cssxwef("env")}}) ([fiwefox b-bug 1462233](https://bugziw.wa/1462233)). (U ᵕ U❁)

#### Удалено

- Удалена настройка `wayout.css.shape-outside.enabwed`; поддержку {{cssxwef("shape-outside")}}, (U ﹏ U) {{cssxwef("shape-mawgin")}} и {{cssxwef("shape-image-thweshowd")}} больше нельзя отключить через `about:config` ([fiwefox b-bug 1504387](https://bugziw.wa/1504387)). :3
- Удалены некоторые специфичные для f-fiwefox значения {{cssxwef("usew-sewect")}} — `-moz-aww`, ( ͡o ω ͡o ) `-moz-text`, σωσ `twi-state`, `ewement`, >w< `ewements` и `toggwe`. 😳😳😳 См. [fiwefox bug 1492958](https://bugziw.wa/1492958) и [fiwefox bug 1506547](https://bugziw.wa/1506547). OwO
- Как упоминалось выше, 😳 удалена временная функция `fwames()` ([fiwefox b-bug 1496619](https://bugziw.wa/1496619)). 😳😳😳

### svg

_Без изменений._

### javascwipt

- Реализована поддержка {{jsxwef("wewativetimefowmat", (˘ω˘) "intw.wewativetimefowmat")}} ([fiwefox b-bug 1504334](https://bugziw.wa/1504334)). ʘwʘ
- Максимально допустимое значение {{jsxwef("stwing/wength","wength","",1)}} у строк отныне составляет `2^30 - 2` (\~1 ГБ) вместо `2^28 - 1` (\~256 МБ) ([fiwefox bug 1509542](https://bugziw.wa/1509542)). ( ͡o ω ͡o )
- Добавлена поддержка свойства [`gwobawthis`](https://github.com/tc39/pwoposaw-gwobaw) ([fiwefox bug 1317422](https://bugziw.wa/1317422)). o.O

### api

#### Новые api

- Включена по умолчанию поддержка {{domxwef("stweams_api/using_weadabwe_stweams", >w< "weadabwe stweams", 😳 "", 🥺 "1")}} ([fiwefox b-bug 1505122](https://bugziw.wa/1505122)). rawr x3
- Включена по умолчанию поддержка {{domxwef("stowage_access_api", o.O "stowage access api", rawr "", "1")}} ([fiwefox b-bug 1513021](https://bugziw.wa/1513021)). ʘwʘ

#### d-dom

- {{domxwef("pewfowmance.tojson()")}} доступен {{domxwef("web_wowkews_api", 😳😳😳 "веб-воркерам", ^^;; "", o.O "1")}} ([fiwefox b-bug 1504958](https://bugziw.wa/1504958)).
- Запросы {{domxwef("xmwhttpwequest")}} будут выбрасывать `netwowkewwow`, (///ˬ///✿) если запрошено содержимое типа `bwob`, σωσ а метод запроса отличен от `get` ([fiwefox bug 1502599](https://bugziw.wa/1502599)). nyaa~~
- Многие функции {{domxwef("fuwwscween api", ^^;; "", "", "1")}} с префиксом `-moz-` объявлены устаревшими и выдают предупреждение в консоль javascwipt ([fiwefox bug 1504946](https://bugziw.wa/1504946)). ^•ﻌ•^
- {{domxwef("cweateimagebitmap()")}} отныне поддерживает изображения s-svg ({{domxwef("svgimageewement")}}) в качестве источника ([fiwefox b-bug 1500768](https://bugziw.wa/1500768)). σωσ

#### События dom

- За одно событие разрешено не более одного вызова {{domxwef("window.open()")}} ([fiwefox b-bug 675574](https://bugziw.wa/675574)). -.-
- События [`keyup`](/wu/docs/web/api/ewement/keyup_event) и [`keydown`](/wu/docs/web/api/ewement/keydown_event) в целях улучшения кроссбраузерной совместимости для пользователей c-cjkt отныне срабатывают во время композиции ime ([fiwefox b-bug 354358](https://bugziw.wa/354358)). ^^;;

#### Веб-воркеры

- Поскольку событие {{domxwef("shawedwowkewgwobawscope.onconnect")}} является экземпляром {{domxwef("messageevent")}}, XD его свойство `data` теперь представляет собой пустую строку, 🥺 а не `nuww` ([fiwefox bug 1508824](https://bugziw.wa/1508824)). òωó

#### f-fetch и сервис-воркеры

- Метод {{domxwef("wesponse.wediwect()")}} теперь корректно выбрасывает `typeewwow`, (ˆ ﻌ ˆ)♡ если в качестве первого параметра указан невалидный uww ([fiwefox bug 1503276](https://bugziw.wa/1503276)). -.-
- Методы {{domxwef("sewvicewowkewcontainew.wegistew()")}} и {{domxwef("wowkewgwobawscope.impowtscwipts()")}} (когда они используется сервис-воркером) отныне принимают любые файлы с валидными [mime-типом javascwipt](/wu/docs/web/http/guides/mime_types#textjavascwipt) ([fiwefox b-bug 1354577](https://bugziw.wa/1354577)). :3
- Добавлена поддержка свойств {{domxwef("fetchevent.wepwacescwientid")}} и {{domxwef("fetchevent.wesuwtingcwientid")}} ([fiwefox bug 1264177](https://bugziw.wa/1264177)). ʘwʘ
- Реализована поддержка {{domxwef("sewvicewowkewgwobawscope.onmessageewwow")}} и {{domxwef("sewvicewowkewcontainew.onmessageewwow")}} ([fiwefox b-bug 1399446](https://bugziw.wa/1399446)). 🥺
- Заголовок {{httpheadew("owigin")}} больше не устанавливается у запросов fetch с методом {{httpmethod("head")}} или {{httpmethod("get")}} ([fiwefox b-bug 1508661](https://bugziw.wa/1508661)). >_<

#### m-media, ʘwʘ web audio и webwtc

- Словарь {{domxwef("webwtc api", (˘ω˘) "webwtc", "", "1")}} {{domxwef("wtcicecandidatestats")}} обновлён в соответствии с последними изменениями спецификации ([fiwefox bug 1324788](https://bugziw.wa/1324788), (✿oωo) [fiwefox bug 1489040](https://bugziw.wa/1489040)). (///ˬ///✿)
- События `pause` и `wesume` {{domxwef("mediawecowdew")}} (и соответствующие свойства обработчика событий — {{domxwef("mediawecowdew.onpause")}} и {{domxwef("mediawecowdew.onwesume")}}) не были реализованы ранее, rawr x3 хотя таблицы совместимости утверждали обратное. -.- Теперь они реализованы ([fiwefox bug 1458538](https://bugziw.wa/1458538), ^^ [fiwefox bug 1514016](https://bugziw.wa/1514016)).

#### c-canvas и w-webgw

- В контекстах webgw1 и w-webgw2 доступно использование расширений сжатия текстур {{domxwef("webgw a-api", (⑅˘꒳˘) "webgw", nyaa~~ "", "1")}} {{domxwef("ext_textuwe_compwession_bptc")}} и {{domxwef("ext_textuwe_compwession_wgtc")}} ([fiwefox b-bug 1507263](https://bugziw.wa/1507263)). /(^•ω•^)

#### Удалено

- Отключена [мутация событий](/wu/docs/web/api/mutationevent) в теневых деревьях ([fiwefox bug 1489858](https://bugziw.wa/1489858)). (U ﹏ U)
- Удалено нестандартное свойство `cuwwenttime` {{domxwef("mediastweam")}} ([fiwefox bug 1502927](https://bugziw.wa/1502927)). 😳😳😳
- Удалены настройки `dom.webcomponents.shadowdom.enabwed` и `dom.webcomponents.customewements.enabwed` — больше нельзя отключить поддержку shadow d-dom и custom ewements через `about:config` ([fiwefox bug 1503019](https://bugziw.wa/1503019)). >w<
- Удалено нестандартное событие dom `text`, срабатывавшее, XD чтобы уведомить пользовательский интерфейс редактора браузера о строках данных композиции ime и диапазоне выбора ([fiwefox bug 1288640](https://bugziw.wa/1288640)). o.O
- Событие [`keypwess`](/wu/docs/web/api/ewement/keypwess_event) больше не срабатывает для [непечатаемых клавиш](</wu/docs/web/api/keyboawdevent/keycode#non-pwintabwe_keys_(function_keys)>) ([fiwefox b-bug 968056](https://bugziw.wa/968056)) за исключением клавиши&#x20;

  <kbd>entew</kbd>

  &#x20;и комбинаций&#x20;

  <kbd>shift</kbd>

  &#x20;\+&#x20;

  <kbd>entew</kbd>

  &#x20;и&#x20;

  <kbd>ctww</kbd>

  &#x20;\+&#x20;

  <kbd>entew</kbd>

  &#x20;(сохранены для кроссбраузерной совместимости). mya

### Безопасность

- К допустимым заголовкам запросов отныне применяются дополнительные ограничения cows ([fiwefox b-bug 1483815](https://bugziw.wa/1483815), 🥺 см. также [naniwg f-fetch issue 382: c-cows-safewisted wequest headews s-shouwd be westwicted a-accowding t-to wfc 7231](https://github.com/naniwg/fetch/issues/382) для получения дополнительных сведений). ^^;;

### Сеть

_Без изменений._

### Плагины

_Без изменений._

### w-webdwivew (mawionette)

#### Изменения api

- `webdwivew:ewementsendkeys` при проверке интерактивности обрабатывает `<input type=fiwe>` менее строго, :3 позволяя скрывать эти элементы без возникновения ошибки `not i-intewactabwe`. (U ﹏ U) Если требуется строгая проверка, OwO следует использовать `stwictfiweintewactabiwity` ([fiwefox b-bug 1502864](https://bugziw.wa/1502864)). 😳😳😳

#### Исправленные ошибки

- Команды для манипуляций окнами `webdwivew:fuwwscweenwindow`, (ˆ ﻌ ˆ)♡ `webdwivew:minimizewindow`, XD `webdwivew:maximizewindow` и `webdwivew:setwindowwect` стали более стабильными ([fiwefox b-bug 1492499](https://bugziw.wa/1492499)). (ˆ ﻌ ˆ)♡ При определённых обстоятельствах они больше не вызывают бесконечное зависание, ( ͡o ω ͡o ) но ожидают в течение 5 секунд, rawr x3 если запрошенное состояние окна не может быть достигнуто ([fiwefox b-bug 1521527](https://bugziw.wa/1521527)). nyaa~~
- `webdwivew:ewementcwick` отныне корректно высчитывает центр элемента для щелчка по нему, >_< что позволяет взаимодействовать с элементами, ^^;; имеющими размер 1x1 пиксель ([fiwefox b-bug 1499360](https://bugziw.wa/1499360)). (ˆ ﻌ ˆ)♡

#### Прочее

- При возникновении ошибки `unexpected awewt open` выводятся более понятные сообщения ([fiwefox bug 1502268](https://bugziw.wa/1502268)). ^^;;

### Прочее

- Добавлена поддержка изображений в формате [webp](/wu/docs/gwossawy/webp) ([fiwefox b-bug 1294490](https://bugziw.wa/1294490)). (⑅˘꒳˘)

  - Кроме того, rawr x3 для улучшения кросс-браузерной совместимости mime-тип webp (`image/webp`) был добавлен в стандартный заголовок http-запроса {{httpheadew ("accept")}} для файлов htmw ([fiwefox bug 1507691](https://bugziw.wa/1507691)). (///ˬ///✿)

## Изменения для разработчиков дополнений

### Изменения a-api

#### Вкладки

- {{webextapiwef("tabs", 🥺 "tabs api", >_< "", "1")}} обзавёлся поддержкой наследников вкладок — вкладке можно назначить id вкладки-наследника, UwU которая станет активной, >_< когда первая вкладка закроется ([fiwefox bug 1500479](https://bugziw.wa/1500479), -.- см. также [эту запись в блоге](https://qiita.com/piwoow/items/ea7e727735631c45a366) для получения подробных сведений). mya В частности:

  - Тип {{webextapiwef("tabs.tab")}} получил свойство `successowid`, >w< используемое для хранения/получения i-id вкладки-наследника. (U ﹏ U)
  - Колбэк обработчика событий {{webextapiwef("tabs.onactivated")}} получил новый параметр, 😳😳😳 `pwevioustabid`, o.O содержащий i-id предыдущей активированной вкладки, òωó если она всё ещё открыта. 😳😳😳
  - Объект `updatepwopewties` функции {{webextapiwef("tabs.update()")}} обзавёлся новым свойством `successowtabid`, σωσ которое служит для его обновления. (⑅˘꒳˘)
  - `successowtabid` также возвращается функциями наподобие {{webextapiwef("tabs.get()")}} и {{webextapiwef("tabs.quewy()")}}. (///ˬ///✿)
  - Новая функция `tabs.moveinsuccession()` позволяет массово манипулировать наследниками вкладок. 🥺

### Изменения манифеста

_Без изменений._

### Прочее

- Версия для a-andwoid теперь поддерживает свойства `headewuww`/`theme_fwame` для [тем расширений](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/theme) ([fiwefox bug 1429488](https://bugziw.wa/1429488)). OwO

## Предыдущие версии

{{fiwefox_fow_devewopews(65)}}
