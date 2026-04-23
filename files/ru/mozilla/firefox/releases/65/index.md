---
title: Firefox 65 для разработчиков
slug: Mozilla/Firefox/Releases/65
---

В этой статье перечислены ключевые изменения, которые касаются разработчиков. Firefox 64 был выпущен 29 января 2019 года.

## Изменения для веб-разработчиков

### Инструменты разработчика

- Включён по умолчанию [инспектор Flexbox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_flexbox_layouts/index.html).
- [Отладчик JavaScript](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) получил поддержку точек останова XHR ([Firefox bug 821610](https://bugzil.la/821610)).
- Щелчок правой кнопкой по элементу дерева доступности позволяет [вывести его в JSON-формате](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#вывод_дерева_доступности_в_json-формате).
- Если фон текста является сложным (например, градиент или сложное изображение), инструмент [цветового контраста](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#цветовой_контраст) в инспекторе доступности покажет диапазон значений цветового контраста.
- Во вкладку «Заголовки» [сетевого монитора](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) добавлено отображение политики Referrer для выбранного запроса ([Firefox bug 1496742](https://bugzil.la/1496742)).
- При просмотре трассировки стека (например, в журналах консоли или отладчике JavaScript) вызовы методов фреймворка распознаются и по умолчанию сворачиваются, что облегчает размещение вашего кода.
- Подобно традиционным терминалам теперь можно использовать обратный поиск в истории консоли JavaScript(

  <kbd>F9</kbd>

  &#x20;в Windows/Linux или&#x20;

  <kbd>Ctrl</kbd>

  &#x20;\+&#x20;

  <kbd>R</kbd>

  &#x20;в macOS, затем ввести искомое, а сочетаниями&#x20;

  <kbd>Ctrl</kbd>

  &#x20;\+&#x20;

  <kbd>R</kbd>

  /

  <kbd>Ctrl</kbd>

  &#x20;\+&#x20;

  <kbd>S</kbd>

  &#x20;переключаться между результатами).

- Сокращение `$0` в консоли JavaScript (ссылается на инспектируемый в данный момент элемент страницы) обзавелось возможностью автодополнения. Например, вы можете ввести `$0.te`, чтобы получить предложения автодополнения для свойств наподобие `$0.textContent`.
- Правки, внесённые через просмотр правил в Инспекторе, теперь отображаются на вкладке «Изменения» ([Firefox bug 1503920](https://bugzil.la/1503920)).

### HTML

- События теперь отправляются на отключённые элементы HTML, то есть элементы {{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("select")}} и {{htmlelement("textarea")}} с установленными атрибутами `disabled` ([Firefox bug 329509](https://bugzil.la/329509)).
- Как в Chrome и Safari, удаление атрибута `src` у элемента {{htmlelement("iframe")}} загружает в него `about:blank` ([Firefox bug 1501418](https://bugzil.la/1501418)) . До этого удаление `src` не влияло на содержимое `iframe`.
- Добавлена поддержка атрибута [`referrerpolicy`](/ru/docs/Web/HTML/Reference/Elements/script#referrerpolicy) у элементов {{htmlelement("script")}} ([Firefox bug 1460920](https://bugzil.la/1460920)).

### CSS

- Убран префикс у значения `crisp-edges` свойства {{cssxref("image-rendering")}} ([Firefox bug 1496617](https://bugzil.la/1496617)).
- Значение `auto` {{cssxref("scrollbar-color")}} теперь разрешается в `auto`, а не в два цвета ([Firefox bug 1501418](https://bugzil.la/1501418)).
- Реализована поддержка свойств `break-*` ([Firefox bug 775618](https://bugzil.la/775618)):
  - {{cssxref("break-before")}} → {{cssxref("page-break-before")}}.
  - {{cssxref("break-after")}} → {{cssxref("page-break-after")}}.
  - {{cssxref("break-inside")}} → {{cssxref("page-break-inside")}}.

- Реализована поддержка значения `anywhere` у свойства {{cssxref("overflow-wrap")}} ([Firefox bug 1505786](https://bugzil.la/1505786)).
- Добавлены новые ключевые слова `jump-start`, `jump-end`, `jump-none` и `jump-both`, используемые внутри [временной функции steps()](</ru/docs/Web/CSS/single-transition-timing-function#The_steps()_class_of_timing_functions>) ([Firefox bug 1496619](https://bugzil.la/1496619)). Функция `frames()`, ранее использовавшаяся для этого, объявлена устаревшей.
- Для совместимости с прочими браузерами добавлены несколько новых значений {{cssxref("appearance", "-webkit-appearance")}}. В частности:
  - `meter`, которое отныне используется в качестве значения по умолчанию для элементов {{htmlelement("meter")}}; существующее значение `meterbar` теперь является псевдонимом `meter` ([Firefox bug 1501483](https://bugzil.la/1501483)).
  - `progress-bar`, которое отныне используется в качестве значения по умолчанию для элементов {{htmlelement("progress")}}; существующее значение `progressbar` теперь является псевдонимом `progress-bar` ([Firefox bug 1501506](https://bugzil.la/1501506)).
  - `textarea`, которое отныне используется в качестве значения по умолчанию для элементов {{htmlelement("textarea")}}; существующее значение `textfield-multiline` теперь является псевдонимом `textarea` ([Firefox bug 1507905](https://bugzil.la/1507905))

- Изменено поведение {{cssxref("user-select")}}, чтобы достичь сходства с прочими браузерами ([Firefox bug 1506547](https://bugzil.la/1506547)). Конкретно:
  - `user-select: all`, установленное на элемент, больше не перекрывает значения `user-select` дочерних элементов. Пример:

    ```html
    <div style="-webkit-user-select: all">
      All
      <div style="-webkit-user-select: none">None</div>
    </div>
    ```

    `<div>`, на который установлен `none`, теперь не выбирается. До этого значение `none` перекрывалось значением `all` родительского элемента.

  - Теперь можно выбирать элементы не-`contenteditable`, вложенные в элементы `contenteditable`.
  - `user-select` теперь ведёт себя согласованно внутри и снаружи теневого DOM.
  - Удалено проприетарное значение `-moz-text`.

- Реализована поддержка переменных среды CSS (функция {{cssxref("env")}}) ([Firefox bug 1462233](https://bugzil.la/1462233)).

#### Удалено

- Удалена настройка `layout.css.shape-outside.enabled`; поддержку {{cssxref("shape-outside")}}, {{cssxref("shape-margin")}} и {{cssxref("shape-image-threshold")}} больше нельзя отключить через `about:config` ([Firefox bug 1504387](https://bugzil.la/1504387)).
- Удалены некоторые специфичные для Firefox значения {{cssxref("user-select")}} — `-moz-all`, `-moz-text`, `tri-state`, `element`, `elements` и `toggle`. См. [Firefox bug 1492958](https://bugzil.la/1492958) и [Firefox bug 1506547](https://bugzil.la/1506547).
- Как упоминалось выше, удалена временная функция `frames()` ([Firefox bug 1496619](https://bugzil.la/1496619)).

### SVG

_Без изменений._

### JavaScript

- Реализована поддержка {{jsxref("RelativeTimeFormat", "Intl.RelativeTimeFormat")}} ([Firefox bug 1504334](https://bugzil.la/1504334)).
- Максимально допустимое значение {{jsxref("String/length","length","",1)}} у строк отныне составляет `2^30 - 2` (\~1 ГБ) вместо `2^28 - 1` (\~256 МБ) ([Firefox bug 1509542](https://bugzil.la/1509542)).
- Добавлена поддержка свойства [`globalThis`](https://github.com/tc39/proposal-global) ([Firefox bug 1317422](https://bugzil.la/1317422)).

### API

#### Новые API

- Включена по умолчанию поддержка {{domxref("Streams_API/Using_readable_streams", "Readable Streams", "", "1")}} ([Firefox bug 1505122](https://bugzil.la/1505122)).
- Включена по умолчанию поддержка {{domxref("Storage_Access_API", "Storage Access API", "", "1")}} ([Firefox bug 1513021](https://bugzil.la/1513021)).

#### DOM

- {{domxref("Performance.toJSON()")}} доступен {{domxref("Web_Workers_API", "веб-воркерам", "", "1")}} ([Firefox bug 1504958](https://bugzil.la/1504958)).
- Запросы {{domxref("XMLHttpRequest")}} будут выбрасывать `NetworkError`, если запрошено содержимое типа `Blob`, а метод запроса отличен от `GET` ([Firefox bug 1502599](https://bugzil.la/1502599)).
- Многие функции {{domxref("Fullscreen API", "", "", "1")}} с префиксом `-moz-` объявлены устаревшими и выдают предупреждение в консоль JavaScript ([Firefox bug 1504946](https://bugzil.la/1504946)).
- {{domxref("createImageBitmap()")}} отныне поддерживает изображения SVG ({{domxref("SVGImageElement")}}) в качестве источника ([Firefox bug 1500768](https://bugzil.la/1500768)).

#### События DOM

- За одно событие разрешено не более одного вызова {{domxref("Window.open()")}} ([Firefox bug 675574](https://bugzil.la/675574)).
- События [`keyup`](/ru/docs/Web/API/Element/keyup_event) и [`keydown`](/ru/docs/Web/API/Element/keydown_event) в целях улучшения кроссбраузерной совместимости для пользователей CJKT отныне срабатывают во время композиции IME ([Firefox bug 354358](https://bugzil.la/354358)).

#### Веб-воркеры

- Поскольку событие {{domxref("SharedWorkerGlobalScope.onconnect")}} является экземпляром {{domxref("MessageEvent")}}, его свойство `data` теперь представляет собой пустую строку, а не `null` ([Firefox bug 1508824](https://bugzil.la/1508824)).

#### Fetch и сервис-воркеры

- Метод {{domxref("Response.redirect()")}} теперь корректно выбрасывает `TypeError`, если в качестве первого параметра указан невалидный URL ([Firefox bug 1503276](https://bugzil.la/1503276)).
- Методы {{domxref("ServiceWorkerContainer.register()")}} и {{domxref("WorkerGlobalScope.importScripts()")}} (когда они используется сервис-воркером) отныне принимают любые файлы с валидными [MIME-типом JavaScript](/ru/docs/Web/HTTP/Guides/MIME_types#textjavascript) ([Firefox bug 1354577](https://bugzil.la/1354577)).
- Добавлена поддержка свойств {{domxref("FetchEvent.replacesClientId")}} и {{domxref("FetchEvent.resultingClientId")}} ([Firefox bug 1264177](https://bugzil.la/1264177)).
- Реализована поддержка {{domxref("ServiceWorkerGlobalScope.onmessageerror")}} и {{domxref("ServiceWorkerContainer.onmessageerror")}} ([Firefox bug 1399446](https://bugzil.la/1399446)).
- Заголовок {{httpheader("Origin")}} больше не устанавливается у запросов Fetch с методом {{HTTPMethod("HEAD")}} или {{HTTPMethod("GET")}} ([Firefox bug 1508661](https://bugzil.la/1508661)).

#### Media, Web Audio и WebRTC

- Словарь {{domxref("WebRTC API", "WebRTC", "", "1")}} {{domxref("RTCIceCandidateStats")}} обновлён в соответствии с последними изменениями спецификации ([Firefox bug 1324788](https://bugzil.la/1324788), [Firefox bug 1489040](https://bugzil.la/1489040)).
- События `pause` и `resume` {{domxref("MediaRecorder")}} (и соответствующие свойства обработчика событий — {{domxref("MediaRecorder.onpause")}} и {{domxref("MediaRecorder.onresume")}}) не были реализованы ранее, хотя таблицы совместимости утверждали обратное. Теперь они реализованы ([Firefox bug 1458538](https://bugzil.la/1458538), [Firefox bug 1514016](https://bugzil.la/1514016)).

#### Canvas и WebGL

- В контекстах WebGL1 и WebGL2 доступно использование расширений сжатия текстур {{domxref("WebGL API", "WebGL", "", "1")}} {{domxref("EXT_texture_compression_bptc")}} и {{domxref("EXT_texture_compression_rgtc")}} ([Firefox bug 1507263](https://bugzil.la/1507263)).

#### Удалено

- Отключена [мутация событий](/ru/docs/Web/API/MutationEvent) в теневых деревьях ([Firefox bug 1489858](https://bugzil.la/1489858)).
- Удалено нестандартное свойство `currentTime` {{domxref("MediaStream")}} ([Firefox bug 1502927](https://bugzil.la/1502927)).
- Удалены настройки `dom.webcomponents.shadowdom.enabled` и `dom.webcomponents.customelements.enabled` — больше нельзя отключить поддержку Shadow DOM и Custom Elements через `about:config` ([Firefox bug 1503019](https://bugzil.la/1503019)).
- Удалено нестандартное событие DOM `text`, срабатывавшее, чтобы уведомить пользовательский интерфейс редактора браузера о строках данных композиции IME и диапазоне выбора ([Firefox bug 1288640](https://bugzil.la/1288640)).
- Событие [`keypress`](/ru/docs/Web/API/Element/keypress_event) больше не срабатывает для [непечатаемых клавиш](</ru/docs/Web/API/KeyboardEvent/keyCode#Non-printable_keys_(function_keys)>) ([Firefox bug 968056](https://bugzil.la/968056)) за исключением клавиши&#x20;

  <kbd>Enter</kbd>

  &#x20;и комбинаций&#x20;

  <kbd>Shift</kbd>

  &#x20;\+&#x20;

  <kbd>Enter</kbd>

  &#x20;и&#x20;

  <kbd>Ctrl</kbd>

  &#x20;\+&#x20;

  <kbd>Enter</kbd>

  &#x20;(сохранены для кроссбраузерной совместимости).

### Безопасность

- К допустимым заголовкам запросов отныне применяются дополнительные ограничения CORS ([Firefox bug 1483815](https://bugzil.la/1483815), см. также [whatwg fetch issue 382: CORS-safelisted request headers should be restricted according to RFC 7231](https://github.com/whatwg/fetch/issues/382) для получения дополнительных сведений).

### Сеть

_Без изменений._

### Плагины

_Без изменений._

### WebDriver (Marionette)

#### Изменения API

- `WebDriver:ElementSendKeys` при проверке интерактивности обрабатывает `<input type=file>` менее строго, позволяя скрывать эти элементы без возникновения ошибки `not interactable`. Если требуется строгая проверка, следует использовать `strictFileInteractability` ([Firefox bug 1502864](https://bugzil.la/1502864)).

#### Исправленные ошибки

- Команды для манипуляций окнами `WebDriver:FullscreenWindow`, `WebDriver:MinimizeWindow`, `WebDriver:MaximizeWindow` и `WebDriver:SetWindowRect` стали более стабильными ([Firefox bug 1492499](https://bugzil.la/1492499)). При определённых обстоятельствах они больше не вызывают бесконечное зависание, но ожидают в течение 5 секунд, если запрошенное состояние окна не может быть достигнуто ([Firefox bug 1521527](https://bugzil.la/1521527)).
- `WebDriver:ElementClick` отныне корректно высчитывает центр элемента для щелчка по нему, что позволяет взаимодействовать с элементами, имеющими размер 1x1 пиксель ([Firefox bug 1499360](https://bugzil.la/1499360)).

#### Прочее

- При возникновении ошибки `unexpected alert open` выводятся более понятные сообщения ([Firefox bug 1502268](https://bugzil.la/1502268)).

### Прочее

- Добавлена поддержка изображений в формате [WebP](/ru/docs/Glossary/WebP) ([Firefox bug 1294490](https://bugzil.la/1294490)).
  - Кроме того, для улучшения кросс-браузерной совместимости MIME-тип WebP (`image/webp`) был добавлен в стандартный заголовок HTTP-запроса {{httpheader ("Accept")}} для файлов HTML ([Firefox bug 1507691](https://bugzil.la/1507691)).

## Изменения для разработчиков дополнений

### Изменения API

#### Вкладки

- {{WebExtAPIRef("tabs", "tabs API", "", "1")}} обзавёлся поддержкой наследников вкладок — вкладке можно назначить ID вкладки-наследника, которая станет активной, когда первая вкладка закроется ([Firefox bug 1500479](https://bugzil.la/1500479), см. также [эту запись в блоге](https://qiita.com/piroor/items/ea7e727735631c45a366) для получения подробных сведений). В частности:
  - Тип {{WebExtAPIRef("tabs.Tab")}} получил свойство `successorId`, используемое для хранения/получения ID вкладки-наследника.
  - Колбэк обработчика событий {{WebExtAPIRef("tabs.onActivated")}} получил новый параметр, `previousTabId`, содержащий ID предыдущей активированной вкладки, если она всё ещё открыта.
  - Объект `updateProperties` функции {{WebExtAPIRef("tabs.update()")}} обзавёлся новым свойством `successorTabId`, которое служит для его обновления.
  - `successorTabId` также возвращается функциями наподобие {{WebExtAPIRef("tabs.get()")}} и {{WebExtAPIRef("tabs.query()")}}.
  - Новая функция `tabs.moveInSuccession()` позволяет массово манипулировать наследниками вкладок.

### Изменения манифеста

_Без изменений._

### Прочее

- Версия для Android теперь поддерживает свойства `headerURL`/`theme_frame` для [тем расширений](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) ([Firefox bug 1429488](https://bugzil.la/1429488)).

## Предыдущие версии

{{Firefox_for_developers(65)}}
