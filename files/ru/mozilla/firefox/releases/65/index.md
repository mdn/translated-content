---
title: Firefox 65 для разработчиков
slug: Mozilla/Firefox/Releases/65
---

{{FirefoxSidebar}}

В этой статье перечислены ключевые изменения, которые касаются разработчиков. Firefox 64 был выпущен 29 января 2019 года.

## Изменения для веб-разработчиков

### Инструменты разработчика

- Включён по умолчанию [инспектор Flexbox](/ru/docs/Tools/Page_Inspector/How_to/Examine_Flexbox_layouts).
- [Отладчик JavaScript](/ru/docs/Tools/Debugger) получил поддержку точек останова XHR ({{bug(821610)}}).
- Щелчок правой кнопкой по элементу дерева доступности позволяет [вывести его в JSON-формате](/ru/docs/Tools/Accessibility_inspector#Вывод_дерева_доступности_в_JSON-формате).
- Если фон текста является сложным (например, градиент или сложное изображение), инструмент [цветового контраста](/ru/docs/Tools/Инспектор_доступности#Цветовой_контраст) в инспекторе доступности покажет диапазон значений цветового контраста.
- Во вкладку «Заголовки» [сетевого монитора](/ru/docs/Tools/Network_Monitor) добавлено отображение политики Referrer для выбранного запроса ({{bug(1496742)}}).
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
- Правки, внесённые через просмотр правил в Инспекторе, теперь отображаются на вкладке «Изменения» ({{bug(1503920)}}).

### HTML

- События теперь отправляются на отключённые элементы HTML, то есть элементы {{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("select")}} и {{htmlelement("textarea")}} с установленными атрибутами `disabled` ({{bug(329509)}}).
- Как в Chrome и Safari, удаление атрибута `src` у элемента {{htmlelement("iframe")}} загружает в него `about:blank` ({{bug(1501418)}}) . До этого удаление `src` не влияло на содержимое `iframe`.
- Добавлена поддержка атрибута [`referrerpolicy`](/ru/docs/Web/HTML/Element/script#referrerpolicy) у элементов {{htmlelement("script")}} ({{bug(1460920)}}).

### CSS

- Убран префикс у значения `crisp-edges` свойства {{cssxref("image-rendering")}} ({{bug(1496617)}}).
- Значение `auto` {{cssxref("scrollbar-color")}} теперь разрешается в `auto`, а не в два цвета ({{bug(1501418)}}).
- Реализована поддержка свойств `break-*` ({{bug(775618)}}):

  - {{cssxref("break-before")}} → {{cssxref("page-break-before")}}.
  - {{cssxref("break-after")}} → {{cssxref("page-break-after")}}.
  - {{cssxref("break-inside")}} → {{cssxref("page-break-inside")}}.

- Реализована поддержка значения `anywhere` у свойства {{cssxref("overflow-wrap")}} ({{bug(1505786)}}).
- Добавлены новые ключевые слова `jump-start`, `jump-end`, `jump-none` и `jump-both`, используемые внутри [временной функции steps()](</ru/docs/Web/CSS/single-transition-timing-function#The_steps()_class_of_timing_functions>) ({{bug(1496619)}}). Функция `frames()`, ранее использовавшаяся для этого, объявлена устаревшей.
- Для совместимости с прочими браузерами добавлены несколько новых значений {{cssxref("appearance", "-webkit-appearance")}}. В частности:

  - `meter`, которое отныне используется в качестве значения по умолчанию для элементов {{htmlelement("meter")}}; существующее значение `meterbar` теперь является псевдонимом `meter` ({{bug(1501483)}}).
  - `progress-bar`, которое отныне используется в качестве значения по умолчанию для элементов {{htmlelement("progress")}}; существующее значение `progressbar` теперь является псевдонимом `progress-bar` ({{bug(1501506)}}).
  - `textarea`, которое отныне используется в качестве значения по умолчанию для элементов {{htmlelement("textarea")}}; существующее значение `textfield-multiline` теперь является псевдонимом `textarea` ({{bug(1507905)}})

- Изменено поведение {{cssxref("user-select")}}, чтобы достичь сходства с прочими браузерами ({{bug(1506547)}}). Конкретно:

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

- Реализована поддержка переменных среды CSS (функция {{cssxref("env")}}) ({{bug(1462233)}}).

#### Удалено

- Удалена настройка `layout.css.shape-outside.enabled`; поддержку {{cssxref("shape-outside")}}, {{cssxref("shape-margin")}} и {{cssxref("shape-image-threshold")}} больше нельзя отключить через `about:config` ({{bug(1504387)}}).
- Удалены некоторые специфичные для Firefox значения {{cssxref("user-select")}} — `-moz-all`, `-moz-text`, `tri-state`, `element`, `elements` и `toggle`. См. {{bug(1492958)}} и {{bug(1506547)}}.
- Как упоминалось выше, удалена временная функция `frames()` ({{bug(1496619)}}).

### SVG

_Без изменений._

### JavaScript

- Реализована поддержка {{jsxref("RelativeTimeFormat", "Intl.RelativeTimeFormat")}} ({{bug(1504334)}}).
- Максимально допустимое значение {{jsxref("String/length","length","","1")}} у строк отныне составляет `2^30 - 2` (\~1 ГБ) вместо `2^28 - 1` (\~256 МБ) ({{bug(1509542)}}).
- Добавлена поддержка свойства [`globalThis`](https://github.com/tc39/proposal-global) ({{bug(1317422)}}).

### API

#### Новые API

- Включена по умолчанию поддержка {{domxref("Streams_API/Using_readable_streams", "Readable Streams", "", "1")}} ({{bug(1505122)}}).
- Включена по умолчанию поддержка {{domxref("Storage_Access_API", "Storage Access API", "", "1")}} ({{bug(1513021)}}).

#### DOM

- {{domxref("Performance.toJSON()")}} доступен {{domxref("Web_Workers_API", "веб-воркерам", "", "1")}} ({{bug(1504958)}}).
- Запросы {{domxref("XMLHttpRequest")}} будут выбрасывать `NetworkError`, если запрошено содержимое типа `Blob`, а метод запроса отличен от `GET` ({{bug(1502599)}}).
- Многие функции {{domxref("Fullscreen API", "", "", "1")}} с префиксом `-moz-` объявлены устаревшими и выдают предупреждение в консоль JavaScript ({{bug(1504946)}}).
- {{domxref("WindowOrWorkerGlobalScope.createImageBitmap", "createImageBitmap()")}} отныне поддерживает изображения SVG ({{domxref("SVGImageElement")}}) в качестве источника ({{bug(1500768)}}).

#### События DOM

- За одно событие разрешено не более одного вызова {{domxref("Window.open()")}} ({{bug(675574)}}).
- События [`keyup`](/ru/docs/Web/Events/keyup) и [`keydown`](/ru/docs/Web/Events/keydown) в целях улучшения кроссбраузерной совместимости для пользователей CJKT отныне срабатывают во время композиции IME ({{bug(354358)}}).

#### Веб-воркеры

- Поскольку событие {{domxref("SharedWorkerGlobalScope.onconnect")}} является экземпляром {{domxref("MessageEvent")}}, его свойство `data` теперь представляет собой пустую строку, а не `null` ({{bug(1508824)}}).

#### Fetch и сервис-воркеры

- Метод {{domxref("Response.redirect()")}} теперь корректно выбрасывает `TypeError`, если в качестве первого параметра указан невалидный URL ({{bug(1503276)}}).
- Методы {{domxref("ServiceWorkerContainer.register()")}} и {{domxref("WorkerGlobalScope.importScripts()")}} (когда они используется сервис-воркером) отныне принимают любые файлы с валидными [MIME-типом JavaScript](/ru/docs/Web/HTTP/Basics_of_HTTP/MIME_types#textjavascript) ({{bug(1354577)}}).
- Добавлена поддержка свойств {{domxref("FetchEvent.replacesClientId")}} и {{domxref("FetchEvent.resultingClientId")}} ({{bug(1264177)}}).
- Реализована поддержка {{domxref("ServiceWorkerGlobalScope.onmessageerror")}} и {{domxref("ServiceWorkerContainer.onmessageerror")}} ({{bug(1399446)}}).
- Заголовок {{httpheader("Origin")}} больше не устанавливается у запросов Fetch с методом {{HTTPMethod("HEAD")}} или {{HTTPMethod("GET")}} ({{bug(1508661)}}).

#### Media, Web Audio и WebRTC

- Словарь {{domxref("WebRTC API", "WebRTC", "", "1")}} {{domxref("RTCIceCandidateStats")}} обновлён в соответствии с последними изменениями спецификации ({{bug(1324788)}}, {{bug(1489040)}}).
- События `pause` и `resume` {{domxref("MediaRecorder")}} (и соответствующие свойства обработчика событий — {{domxref("MediaRecorder.onpause")}} и {{domxref("MediaRecorder.onresume")}}) не были реализованы ранее, хотя таблицы совместимости утверждали обратное. Теперь они реализованы ({{bug(1458538)}}, {{bug(1514016)}}).

#### Canvas и WebGL

- В контекстах WebGL1 и WebGL2 доступно использование расширений сжатия текстур {{domxref("WebGL API", "WebGL", "", "1")}} {{domxref("EXT_texture_compression_bptc")}} и {{domxref("EXT_texture_compression_rgtc")}} ({{bug(1507263)}}).

#### Удалено

- Отключена [мутация событий](/ru/docs/Web/Guide/Events/Mutation_events) в теневых деревьях ({{bug(1489858)}}).
- Удалено нестандартное свойство `currentTime` {{domxref("MediaStream")}} ({{bug(1502927)}}).
- Удалены настройки `dom.webcomponents.shadowdom.enabled` и `dom.webcomponents.customelements.enabled` — больше нельзя отключить поддержку Shadow DOM и Custom Elements через `about:config` ({{bug(1503019)}}).
- Удалено нестандартное событие DOM `text`, срабатывавшее, чтобы уведомить пользовательский интерфейс редактора браузера о строках данных композиции IME и диапазоне выбора ({{bug(1288640)}}).
- Событие {{event("keypress")}} больше не срабатывает для [непечатаемых клавиш](</ru/docs/Web/API/KeyboardEvent/keyCode#Non-printable_keys_(function_keys)>) ({{bug(968056)}}) за исключением клавиши&#x20;

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

- К допустимым заголовкам запросов отныне применяются дополнительные ограничения CORS ({{bug(1483815)}}, см. также [whatwg fetch issue 382: CORS-safelisted request headers should be restricted according to RFC 7231](https://github.com/whatwg/fetch/issues/382) для получения дополнительных сведений).

### Сеть

_Без изменений._

### Плагины

_Без изменений._

### WebDriver (Marionette)

#### Изменения API

- `WebDriver:ElementSendKeys` при проверке интерактивности обрабатывает `<input type=file>` менее строго, позволяя скрывать эти элементы без возникновения ошибки `not interactable`. Если требуется строгая проверка, следует использовать `strictFileInteractability` ({{bug(1502864)}}).

#### Исправленные ошибки

- Команды для манипуляций окнами `WebDriver:FullscreenWindow`, `WebDriver:MinimizeWindow`, `WebDriver:MaximizeWindow` и `WebDriver:SetWindowRect` стали более стабильными ({{bug(1492499)}}). При определённых обстоятельствах они больше не вызывают бесконечное зависание, но ожидают в течение 5 секунд, если запрошенное состояние окна не может быть достигнуто ({{bug(1521527)}}).
- `WebDriver:ElementClick` отныне корректно высчитывает центр элемента для щелчка по нему, что позволяет взаимодействовать с элементами, имеющими размер 1x1 пиксель ({{bug(1499360)}}).

#### Прочее

- При возникновении ошибки `unexpected alert open` выводятся более понятные сообщения ({{bug(1502268)}}).

### Прочее

- Добавлена поддержка изображений в формате [WebP](/ru/docs/Glossary/webp) ({{bug(1294490)}}).

  - Кроме того, для улучшения кросс-браузерной совместимости MIME-тип WebP (`image/webp`) был добавлен в стандартный заголовок HTTP-запроса {{httpheader ("Accept")}} для файлов HTML ({{bug(1507691)}}).

## Изменения для разработчиков дополнений

### Изменения API

#### Вкладки

- {{WebExtAPIRef("tabs", "tabs API", "", "1")}} обзавёлся поддержкой наследников вкладок — вкладке можно назначить ID вкладки-наследника, которая станет активной, когда первая вкладка закроется ({{bug(1500479)}}, см. также [эту запись в блоге](https://qiita.com/piroor/items/ea7e727735631c45a366) для получения подробных сведений). В частности:

  - Тип {{WebExtAPIRef("tabs.Tab")}} получил свойство `successorId`, используемое для хранения/получения ID вкладки-наследника.
  - Колбэк обработчика событий {{WebExtAPIRef("tabs.onActivated")}} получил новый параметр, `previousTabId`, содержащий ID предыдущей активированной вкладки, если она всё ещё открыта.
  - Объект `updateProperties` функции {{WebExtAPIRef("tabs.update()")}} обзавёлся новым свойством `successorTabId`, которое служит для его обновления.
  - `successorTabId` также возвращается функциями наподобие {{WebExtAPIRef("tabs.get()")}} и {{WebExtAPIRef("tabs.query()")}}.
  - Новая функция `tabs.moveInSuccession()` позволяет массово манипулировать наследниками вкладок.

### Изменения манифеста

_Без изменений._

### Прочее

- Версия для Android теперь поддерживает свойства `headerURL`/`theme_frame` для [тем Webextension](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) ({{bug(1429488)}}).

## Предыдущие версии

{{Firefox_for_developers(65)}}
