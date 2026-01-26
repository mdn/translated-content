---
title: Firefox 62 для разработчиков
slug: Mozilla/Firefox/Releases/62
---

В этой статье перечислены ключевые изменения, которые касаются разработчиков. Firefox 62 был выпущен 5 сентября 2018 года.

## Изменения для веб-разработчиков

### Инструменты разработчика

- Включён по умолчанию редактор Shape Path — подробности в статье [Edit Shape Paths in CSS](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html).
- Появилась возможность вынести просмотр CSS-правил в отдельную от других вкладок панель. См. [Page inspector 3-pane mode](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/3-pane_mode/index.html) для получения подробных сведений.
- Инспектор CSS-сеток обзавёлся новыми возможностями и новой документацией — см. [CSS Grid Inspector: Examine grid layouts](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html).
- Инструменты разработчика теперь можно разместить не только снизу и справа, но и слева (а также вынести в отдельное окно) ([Firefox bug 1192642](https://bugzil.la/1192642)).
- На панель [консоли разделения](https://firefox-source-docs.mozilla.org/devtools-user/web_console/split_console/index.html) добавлена кнопка закрытия.
- При включённой настройке «Выбрать iframe в качестве текущего целевого документа» соответствующий значок будет появляться на панели инструментов при открытии настроек, даже если текущая страница не содержит фреймов ([Firefox bug 1456069](https://bugzil.la/1456069)).
- Вкладка «[Куки](</ru/docs/Tools/Network_Monitor#Куки_(Cookies)>)» в [сетевом мониторе](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) отображает атрибут `samesite` ([Firefox bug 1452715](https://bugzil.la/1452715)).
- [Режим адаптивного дизайна](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) работает и во вкладках, размещённых в контейнерах ([Firefox bug 1306975](https://bugzil.la/1306975)).
- При возникновении и выводе в консоль ошибки {{Glossary("CORS")}} Firefox предоставит ссылку на соответствующую [страницу с описанием ошибок CORS](/ru/docs/Web/HTTP/CORS/Errors) ([Firefox bug 1475391](https://bugzil.la/1475391)).
- Появилась возможность создать снимок текущей страницы (без необходимости указывать имя файла) из консоли браузера ([Firefox bug 1464461](https://bugzil.la/1464461)). Используется команда

  `:screenshot <filename.png> --fullpage`

  где `<filename.png>` — желаемое имя файла. Файл будет сохранён в каталог загрузок. Параметр `--fullpage` не является обязательным и служит для создания снимка всей страницы. В этом случае к имени файла будет добавлено `-fullpage`. Чтобы увидеть список всех доступных параметров, введите `:screenshot --help`.

#### Удалено

- Удалена [панель разработчика/GCLI](/ru/docs/Tools/GCLI) (которая открывалась сочетанием клавиш&#x20;

  <kbd>Shift</kbd>

  &#x20;\+&#x20;

  <kbd>F2</kbd>

  ) ([Firefox bug 1461970](https://bugzil.la/1461970)). У интерфейса панели и библиотеки, отвечающей за работу GCLI, уже продолжительное время отсутствует мейнтейнер, некоторые функции не работают (с того времени, как появился многопроцессный режим), а сама GCLI несовместима с `unsafeSetInnerHTML`. Как следствие, по данным телеметрии панель очень редко используется, к тому же есть альтернативные способы вызова самых популярных команд.

### HTML

_Без изменений._

### CSS

- Убран префикс у псевдоэлемента `:-moz-selection`, отныне он называется {{cssxref("::selection")}} ([Firefox bug 509958](https://bugzil.la/509958)).
- {{cssxref("&lt;resolution&gt;")}} поддерживает `x` в качестве единицы измерения ([Firefox bug 1460655](https://bugzil.la/1460655)).
- Включена по умолчанию поддержка {{cssxref("shape-margin")}}, {{cssxref("shape-outside")}} и {{cssxref("shape-image-threshold")}} ([Firefox bug 1457297](https://bugzil.la/1457297)).

#### Удалено

- Из документов, отличных от XUL, удалены все [XUL-значения `display`](/ru/docs/Web/CSS/Reference/Properties/display#xul_values) за исключением `-moz-box` и `-moz-inline-box` ([Firefox bug 1288572](https://bugzil.la/1288572)).

### SVG

_Без изменений._

### JavaScript

- Реализована поддержка конструктора {{jsxref("WebAssembly.Global()")}} и глобальных переменных в WebAssembly ([Firefox bug 1464656](https://bugzil.la/1464656)).
- Включена по умолчанию поддержка методов {{jsxref("Array.prototype.flat()")}} и {{jsxref("Array.prototype.flatMap()")}} ([Firefox bug 1435813](https://bugzil.la/1435813)).
- Реализовано свойство [`import.meta`](/ru/docs/Web/JavaScript/Reference/Operators/import.meta), отображающее контекстно-специфичных метаданные для модуля JavaScript ([Firefox bug 1427610](https://bugzil.la/1427610)).
- [Строковые литералы](</ru/docs/Web/JavaScript/Reference/Lexical_grammar#Литерал_String_(Строка)>) могут напрямую содержать символы U+2028 LINE SEPARATOR и U+2029 PARAGRAPH SEPARATOR. Как следствие, синтаксис {{jsxref("JSON")}} отныне является подмножеством литерального синтаксиса JavaScript (см. [Firefox bug 1435828](https://bugzil.la/1435828) и предложенный TC39 [json-superset](https://github.com/tc39/proposal-json-superset)).
- Для индексов, выходящих за границы [типизированных массивов](/ru/docs/Web/JavaScript/Guide/Typed_arrays), {{jsxref("Reflect.defineProperty()")}} и {{jsxref("Reflect.set()")}} будут возвращать `false` вместо `true` ([Firefox bug 1308735](https://bugzil.la/1308735)).

#### Удалено

- Конструкторы `DOMPoint` и `DOMPointReadOnly` больше не поддерживают входной параметр типа `DOMPointInit`; значения свойств требуется указывать с помощью параметров `x`, `y`, `z` и `w` ([Firefox bug 1186265](https://bugzil.la/1186265)).
- Метод {{domxref("URL.createObjectURL()")}} больше не поддерживает создание URL-адресов объектов для представления {{domxref("MediaStream")}}. Эта возможность уже не актуальна, поскольку можно напрямую задать {{domxref("HTMLMediaElement.srcObject")}} в `MediaStream` ([Firefox bug 1454889](https://bugzil.la/1454889)).

### API

#### Новые API

- В версии для Android включён по умолчанию {{domxref("Web_Speech_API", "API Speech Synthesis (Text-to-Speech)", "", "1")}} ([Firefox bug 1463496](https://bugzil.la/1463496)).

#### DOM

- Интерфейс {{domxref("DOMPointReadOnly")}} поддерживает статическую функцию {{domxref("DOMPointReadOnly.fromPoint()")}}, создающую новый точечный объект из совместимого с {{domxref("DOMPointInit")}} словаря, который содержит любой объект {{domxref("DOMPoint")}}. Функция также доступна на {{domxref("DOMPoint")}} ([Firefox bug 1186265](https://bugzil.la/1186265)).
- В целях совместимости реализована поддержка свойства {{domxref("Event.srcElement")}}. Оно является ссылкой на {{domxref("Event.target")}} ([Firefox bug 453968](https://bugzil.la/453968)).
- {{domxref("Navigator.registerProtocolHandler()")}} может быть вызван лишь в безопасном контексте ([Firefox bug 1460506](https://bugzil.la/1460506)).
- Отключена по умолчанию поддержка метода {{domxref("Navigator.registerContentHandler()")}}. Он будет удалён в будущем, поскольку уже некоторое время является устаревшим ([Firefox bug 1460481](https://bugzil.la/1460481)).
- Реализован конструктор {{domxref("DataTransfer.DataTransfer", "DataTransfer()")}} ([Firefox bug 1351193](https://bugzil.la/1351193)).
- {{domxref("Document.domain")}} больше не может вернуть `null` ([Firefox bug 819475](https://bugzil.la/819475)). Если не удалось идентифицировать домен, `domain` вернёт пустую строку вместо `null`.
- Реализован метод {{domxref("Console.timeLog()")}}, отображающий текущее значение таймера консоли без остановки самого таймера ([Firefox bug 1458466](https://bugzil.la/1458466)).
- Реализован метод {{domxref("Console.countReset()")}}, сбрасывающий значение счётчика консоли ([Firefox bug 1459279](https://bugzil.la/1459279)).

#### События DOM

_Без изменений._

#### Сервис-воркеры

_Без изменений._

#### Медиа, Web Audio и WebRTC

- Настройка `media.autoplay.enabled` распространяется не только на видео-, но и на аудиосодержимое ([Firefox bug 1413098](https://bugzil.la/1413098)).
- Интерфейс {{domxref("ChannelSplitterNode")}} приведён в соответствие спецификации: по умолчанию у него 6 каналов, `channelInterpretation` имеет значение `"discrete"`, а `channelCountMode` — `"explicit"` ([Firefox bug 1456265](https://bugzil.la/1456265)).

#### Удалено

- Поддержка событий [`userproximity`](/ru/docs/Web/Events/userproximity), [`deviceproximity`](/ru/docs/Web/Events/deviceproximity) (см. {{domxref("UserProximityEvent")}} и {{domxref("DeviceProximityEvent")}}) отключена по умолчанию и управляется настройкой `device.sensors.proximity.enabled` ([Firefox bug 1462308](https://bugzil.la/1462308)).
- Поддержка события [`devicelight`](/ru/docs/Web/Events/devicelight) (см. также {{domxref("DeviceLightEvent")}}) отключена по умолчанию и управляется настройкой `device.sensors.ambientLight.enabled` ([Firefox bug 1462308](https://bugzil.la/1462308)).
- [События мутации](/ru/docs/Web/API/MutationEvent) [`DOMSubtreeModified`](/ru/docs/Web/Events/DOMSubtreeModified) и [`DOMAttrModified`](/ru/docs/Web/Events/DOMAttrModified) больше не выбрасываются, когда атрибут [`style`](/ru/docs/Web/HTML/Reference/Global_attributes#style) изменяется с помощью CSSOM ([Firefox bug 1460295](https://bugzil.la/1460295)).
- Прекращена поддержка {{domxref("CSSStyleDeclaration.getPropertyCSSValue()")}} ([Firefox bug 1408301](https://bugzil.la/1408301)).
- Прекращена поддержка {{domxref("CSSValue")}}, {{domxref("CSSPrimitiveValue")}} и {{domxref("CSSValueList")}} ([Firefox bug 1459871](https://bugzil.la/1459871)).
- {{domxref("window.getComputedStyle()")}} больше не возвращает `null`, если вызван на `Window`, у которого нет представления ([Firefox bug 1467722](https://bugzil.la/1467722)).

### HTTP

#### Удалено

- Удалена поддержка устаревшей CSP-директивы {{CSP("referrer")}}. Вместо неё следует использовать заголовок {{HTTPHeader("Referrer-Policy")}} ([Firefox bug 1302449](https://bugzil.la/1302449)).

### Безопасность

_Без изменений._

### Плагины

_Без изменений._

### WebDriver (Marionette)

#### Новые возможности

- Команда `WebDriver:ElementSendKeys` приносит в WebDriver возможность загружать файлы ([Firefox bug 1448792](https://bugzil.la/1448792)).
- Запросы к пользователю, вызванные событиями `beforeunload`, автоматически отклоняются для команд `WebDriver:Get`, `WebDriver:Back`, `WebDriver:Forward`, `WebDriver:Refresh` и `WebDriver:Close` ([Firefox bug 1434872](https://bugzil.la/1434872)).
- `WebDriver:PerformActions` при нажатии&#x20;

  <kbd>Ctrl</kbd>

  &#x20;\+ `Click` синтезирует событие [`contextmenu`](/ru/docs/Web/API/Element/contextmenu_event) ([Firefox bug 1421323](https://bugzil.la/1421323)).

#### Изменения API

- Удалены устаревшие конечные точки, включая `getWindowPosition`, `setWindowPosition`, `getWindowSize и` `setWindowSize` ([Firefox bug 1348145](https://bugzil.la/1348145)).
- Команды WebDriver, возвращающие успех с данными `null`, отныне возвращают пустой словарь ([Firefox bug 1461463](https://bugzil.la/1461463)).

#### Исправленные ошибки

- `WebDriver:ExecuteScript` вызывал ошибку циклической ссылки для коллекций [WebElement](/ru/docs/Web/WebDriver/WebElement) ([Firefox bug 1447977](https://bugzil.la/1447977)).
- Отправка примитива действия `pointerMove` или `pause` могла привести к зависанию, таким образом, команда никогда не отправляла ответ ([Firefox bug 1467743](https://bugzil.la/1467743), [Firefox bug 1447449](https://bugzil.la/1447449)).

### Прочее

_Без изменений._

## Изменения для разработчиков дополнений

### Изменения API

- Добавлен API {{WebExtAPIRef("webRequest.getSecurityInfo()")}}, позволяющий получить подробные сведения о TLS-соединениях ([Firefox bug 1322748](https://bugzil.la/1322748)).
- Добавлен {{WebExtAPIRef("browserSettings.newTabPosition")}}, позволяющий настроить положение новой вкладки ([Firefox bug 1344749](https://bugzil.la/1344749)).
- `windowTypes` объявлен устаревшим в {{WebExtAPIRef("windows.get()")}}, {{WebExtAPIRef("windows.getCurrent()")}} и {{WebExtAPIRef("windows.getLastFocused()")}} ([Firefox bug 1419132](https://bugzil.la/1419132)).
- Появилась возможность изменять каждое окно браузера в отдельности ([Firefox bug 1419893](https://bugzil.la/1419893)).

### Изменения манифеста

- Новое свойство `open_at_install` ключа [`sidebar_action`](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) манифеста позволяет дополнениям при установке автоматически открывать или не открывать боковые панели ([Firefox bug 1460910](https://bugzil.la/1460910)).
- Изменено свойство `browser_style` различных ключей манифеста:
  - У [`page_action`](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) и [`browser_action`](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) оно по умолчанию стало `false`.
  - У [`sidebar_action`](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) и [`options_ui`](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) оно по умолчанию стало `true`.

### Изменения темы

- Новое свойство `tab_background_separator` ключа [`theme`](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) манифеста позволяет дополнениям изменять цвет разделителя вкладок ([Firefox bug 1459455](https://bugzil.la/1459455)).

### Удалено

- Прекращена поддержка установки распакованных дополнений ([Firefox bug 1385057](https://bugzil.la/1385057)).
- Убран показ предупреждения о `browser_style` при временной загрузке дополнения для тестирования ([Firefox bug 1404724](https://bugzil.la/1404724)).

## Предыдущие версии

{{Firefox_for_developers(61)}}
