---
title: Firefox 62 для разработчиков
slug: Mozilla/Firefox/Releases/62
---

{{FirefoxSidebar}}

В этой статье перечислены ключевые изменения, которые касаются разработчиков. Firefox 62 был выпущен 5 сентября 2018 года.

## Изменения для веб-разработчиков

### Инструменты разработчика

- Включён по умолчанию редактор Shape Path — подробности в статье [Edit Shape Paths in CSS](/ru/docs/Tools/Page_Inspector/How_to/Edit_CSS_shapes).
- Появилась возможность вынести просмотр CSS-правил в отдельную от других вкладок панель. См. [Page inspector 3-pane mode](/ru/docs/Tools/Page_Inspector/3-pane_mode) для получения подробных сведений.
- Инспектор CSS-сеток обзавёлся новыми возможностями и новой документацией — см. [CSS Grid Inspector: Examine grid layouts](/ru/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts).
- Инструменты разработчика теперь можно разместить не только снизу и справа, но и слева (а также вынести в отдельное окно) ({{bug(1192642)}}).
- На панель [консоли разделения](/ru/docs/Tools/Web_Console/Split_console) добавлена кнопка закрытия.
- При включённой настройке «Выбрать iframe в качестве текущего целевого документа» соответствующий значок будет появляться на панели инструментов при открытии настроек, даже если текущая страница не содержит фреймов ({{bug(1456069)}}).
- Вкладка «[Куки](</ru/docs/Tools/Network_Monitor#Куки_(Cookies)>)» в [сетевом мониторе](/ru/docs/Tools/Network_Monitor) отображает атрибут `samesite` ({{bug(1452715)}}).
- [Режим адаптивного дизайна](/ru/docs/Tools/Responsive_Design_View) работает и во вкладках, размещённых в контейнерах ({{bug(1306975)}}).
- При возникновении и выводе в консоль ошибки {{Glossary("CORS")}} Firefox предоставит ссылку на соответствующую [страницу с описанием ошибок CORS](/ru/docs/Web/HTTP/CORS/Errors) ({{bug(1475391)}}).
- Появилась возможность создать снимок текущей страницы (без необходимости указывать имя файла) из консоли браузера ({{bug(1464461)}}). Используется команда

  `:screenshot <filename.png> --fullpage`

  где `<filename.png>` — желаемое имя файла. Файл будет сохранён в каталог загрузок. Параметр `--fullpage` не является обязательным и служит для создания снимка всей страницы. В этом случае к имени файла будет добавлено `-fullpage`. Чтобы увидеть список всех доступных параметров, введите `:screenshot --help`.

#### Удалено

- Удалена [панель разработчика/GCLI](/ru/docs/Tools/GCLI) (которая открывалась сочетанием клавиш&#x20;

  <kbd>Shift</kbd>

  &#x20;\+&#x20;

  <kbd>F2</kbd>

  ) ({{bug(1461970)}}). У интерфейса панели и библиотеки, отвечающей за работу GCLI, уже продолжительное время отсутствует мейнтейнер, некоторые функции не работают (с того времени, как появился многопроцессный режим), а сама GCLI несовместима с `unsafeSetInnerHTML`. Как следствие, по данным телеметрии панель очень редко используется, к тому же есть альтернативные способы вызова самых популярных команд.

### HTML

_Без изменений._

### CSS

- Убран префикс у псевдоэлемента `:-moz-selection`, отныне он называется {{cssxref("::selection")}} ({{bug(509958)}}).
- {{cssxref("&lt;resolution&gt;")}} поддерживает `x` в качестве единицы измерения ({{bug(1460655)}}).
- Включена по умолчанию поддержка {{cssxref("shape-margin")}}, {{cssxref("shape-outside")}} и {{cssxref("shape-image-threshold")}} ({{bug(1457297)}}).

#### Удалено

- Из документов, отличных от XUL, удалены все [XUL-значения `display`](/ru/docs/Web/CSS/display#XUL_values) за исключением `-moz-box` и `-moz-inline-box` ({{bug(1288572)}}).

### SVG

_Без изменений._

### JavaScript

- Реализована поддержка конструктора {{jsxref("WebAssembly.Global()")}} и глобальных переменных в WebAssembly ({{bug(1464656)}}).
- Включена по умолчанию поддержка методов {{jsxref("Array.prototype.flat()")}} и {{jsxref("Array.prototype.flatMap()")}} ({{bug(1435813)}}).
- Реализовано свойство [`import.meta`](/ru/docs/Web/JavaScript/Reference/Statements/import.meta), отображающее контекстно-специфичных метаданные для модуля JavaScript ({{bug(1427610)}}).
- [Строковые литералы](</ru/docs/Web/JavaScript/Reference/Lexical_grammar#Литерал_String_(Строка)>) могут напрямую содержать символы U+2028 LINE SEPARATOR и U+2029 PARAGRAPH SEPARATOR. Как следствие, синтаксис {{jsxref("JSON")}} отныне является подмножеством литерального синтаксиса JavaScript (см. {{bug(1435828)}} и предложенный TC39 [json-superset](https://github.com/tc39/proposal-json-superset)).
- Для индексов, выходящих за границы [типизированных массивов](/ru/docs/Web/JavaScript/Typed_arrays), {{jsxref("Reflect.defineProperty()")}} и {{jsxref("Reflect.set()")}} будут возвращать `false` вместо `true` ({{bug(1308735)}}).

#### Удалено

- Конструкторы `DOMPoint` и `DOMPointReadOnly` больше не поддерживают входной параметр типа `DOMPointInit`; значения свойств требуется указывать с помощью параметров `x`, `y`, `z` и `w` ({{bug(1186265)}}).
- Метод {{domxref("URL.createObjectURL()")}} больше не поддерживает создание URL-адресов объектов для представления {{domxref("MediaStream")}}. Эта возможность уже не актуальна, поскольку можно напрямую задать {{domxref("HTMLMediaElement.srcObject")}} в `MediaStream` ({{bug(1454889)}}).

### API

#### Новые API

- В версии для Android включён по умолчанию {{domxref("Web_Speech_API", "API Speech Synthesis (Text-to-Speech)", "", "1")}} ({{bug(1463496)}}).

#### DOM

- Интерфейс {{domxref("DOMPointReadOnly")}} поддерживает статическую функцию {{domxref("DOMPointReadOnly.fromPoint()")}}, создающую новый точечный объект из совместимого с {{domxref("DOMPointInit")}} словаря, который содержит любой объект {{domxref("DOMPoint")}}. Функция также доступна на {{domxref("DOMPoint")}} ({{bug(1186265)}}).
- В целях совместимости реализована поддержка свойства {{domxref("Event.srcElement")}}. Оно является ссылкой на {{domxref("Event.target")}} ({{bug(453968)}}).
- {{domxref("Navigator.registerProtocolHandler()")}} может быть вызван лишь в безопасном контексте ({{bug(1460506)}}).
- Отключена по умолчанию поддержка метода {{domxref("Navigator.registerContentHandler()")}}. Он будет удалён в будущем, поскольку уже некоторое время является устаревшим ({{bug(1460481)}}).
- Реализован конструктор {{domxref("DataTransfer.DataTransfer", "DataTransfer()")}} ({{bug(1351193)}}).
- {{domxref("Document.domain")}} больше не может вернуть `null` ({{bug(819475)}}). Если не удалось идентифицировать домен, `domain` вернёт пустую строку вместо `null`.
- Реализован метод {{domxref("Console.timeLog()")}}, отображающий текущее значение таймера консоли без остановки самого таймера ({{bug(1458466)}}).
- Реализован метод {{domxref("Console.countReset()")}}, сбрасывающий значение счётчика консоли ({{bug(1459279)}}).

#### События DOM

_Без изменений._

#### Сервис-воркеры

_Без изменений._

#### Медиа, Web Audio и WebRTC

- Настройка `media.autoplay.enabled` распространяется не только на видео-, но и на аудиосодержимое ({{bug(1413098)}}).
- Интерфейс {{domxref("ChannelSplitterNode")}} приведён в соответствие спецификации: по умолчанию у него 6 каналов, `channelInterpretation` имеет значение `"discrete"`, а `channelCountMode` — `"explicit"` ({{bug(1456265)}}).

#### Удалено

- Поддержка событий {{event("userproximity")}}, {{event("deviceproximity")}} (см. {{domxref("UserProximityEvent")}} и {{domxref("DeviceProximityEvent")}}) отключена по умолчанию и управляется настройкой `device.sensors.proximity.enabled` ({{bug(1462308)}}).
- Поддержка события {{event("devicelight")}} (см. также {{domxref("DeviceLightEvent")}}) отключена по умолчанию и управляется настройкой `device.sensors.ambientLight.enabled` ({{bug(1462308)}}).
- [События мутации](/ru/docs/Web/Guide/Events/Mutation_events) {{event("DOMSubtreeModified")}} и {{event("DOMAttrModified")}} больше не выбрасываются, когда атрибут [`style`](/ru/docs/Web/HTML/Global_attributes#style) изменяется с помощью CSSOM ({{bug(1460295)}}).
- Прекращена поддержка {{domxref("CSSStyleDeclaration.getPropertyCSSValue()")}} ({{bug(1408301)}}).
- Прекращена поддержка {{domxref("CSSValue")}}, {{domxref("CSSPrimitiveValue")}} и {{domxref("CSSValueList")}} ({{bug(1459871)}}).
- {{domxref("window.getComputedStyle()")}} больше не возвращает `null`, если вызван на `Window`, у которого нет представления ({{bug(1467722)}}).

### HTTP

#### Удалено

- Удалена поддержка устаревшей CSP-директивы {{CSP("referrer")}}. Вместо неё следует использовать заголовок {{HTTPHeader("Referrer-Policy")}} ({{bug(1302449)}}).

### Безопасность

_Без изменений._

### Плагины

_Без изменений._

### WebDriver (Marionette)

#### Новые возможности

- Команда `WebDriver:ElementSendKeys` приносит в WebDriver возможность загружать файлы ({{bug(1448792)}}).
- Запросы к пользователю, вызванные событиями `beforeunload`, автоматически отклоняются для команд `WebDriver:Get`, `WebDriver:Back`, `WebDriver:Forward`, `WebDriver:Refresh` и `WebDriver:Close` ({{bug(1434872)}}).
- `WebDriver:PerformActions` при нажатии&#x20;

  <kbd>Ctrl</kbd>

  &#x20;\+ `Click` синтезирует событие {{event("contextmenu")}} ({{bug(1421323)}}).

#### Изменения API

- Удалены устаревшие конечные точки, включая `getWindowPosition`, `setWindowPosition`, `getWindowSize и` `setWindowSize` ({{bug(1348145)}}).
- Команды WebDriver, возвращающие успех с данными `null`, отныне возвращают пустой словарь ({{bug(1461463)}}).

#### Исправленные ошибки

- `WebDriver:ExecuteScript` вызывал ошибку циклической ссылки для коллекций [WebElement](/ru/docs/Web/WebDriver/WebElement) ({{bug(1447977)}}).
- Отправка примитива действия `pointerMove` или `pause` могла привести к зависанию, таким образом, команда никогда не отправляла ответ ({{bug(1467743)}}, {{bug(1447449)}}).

### Прочее

_Без изменений._

## Изменения для разработчиков дополнений

### Изменения API

- Добавлен API {{WebExtAPIRef("webRequest.getSecurityInfo()")}}, позволяющий получить подробные сведения о TLS-соединениях ({{bug(1322748)}}).
- Добавлен {{WebExtAPIRef("browserSettings.newTabPosition")}}, позволяющий настроить положение новой вкладки ({{bug(1344749)}}).
- `windowTypes` объявлен устаревшим в {{WebExtAPIRef("windows.get()")}}, {{WebExtAPIRef("windows.getCurrent()")}} и {{WebExtAPIRef("windows.getLastFocused()")}} ({{bug(1419132)}}).
- Появилась возможность изменять каждое окно браузера в отдельности ({{bug(1419893)}}).

### Изменения манифеста

- Новое свойство `open_at_install` ключа [`sidebar_action`](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) манифеста позволяет дополнениям при установке автоматически открывать или не открывать боковые панели ({{bug(1460910)}}).
- Изменено свойство `browser_style` различных ключей манифеста:

  - У [`page_action`](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) и [`browser_action`](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) оно по умолчанию стало `false`.
  - У [`sidebar_action`](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) и [`options_ui`](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) оно по умолчанию стало `true`.

### Изменения темы

- Новое свойство `tab_background_separator` ключа [`theme`](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) манифеста позволяет дополнениям изменять цвет разделителя вкладок ({{bug(1459455)}}).

### Удалено

- Прекращена поддержка установки распакованных дополнений ({{bug(1385057)}}).
- Убран показ предупреждения о `browser_style` при временной загрузке дополнения для тестирования ({{bug(1404724)}}).

## Предыдущие версии

{{Firefox_for_developers(61)}}
