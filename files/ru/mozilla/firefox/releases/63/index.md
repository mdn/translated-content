---
title: Firefox 63 для разработчиков
slug: Mozilla/Firefox/Releases/63
---

{{FirefoxSidebar}}

В этой статье перечислены ключевые изменения, которые касаются разработчиков. Firefox 63 был выпущен 23 октября 2018 года.

## Изменения для веб-разработчиков

### Инструменты разработчика

- Вкладка [инспектора](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) «Шрифты» обзавелась редактором, облегчающим просмотр и правку настроек используемых шрифтов. Подробнее см. в [Edit fonts](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html).
- Включён по умолчанию [инспектор поддержи доступности](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) ([Firefox bug 1482454](https://bugzil.la/1482454)).
- При наведении курсора на объект в [инспекторе поддержки доступности](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html), [элемент будет подсвечен](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#highlighting_of_ui_items), а его роль и имя показаны в информационной панели на странице ([Firefox bug 1473030](https://bugzil.la/1473030)).
- Командная строка [веб-консоли](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) теперь находится не внизу окна, а прямо после вывода консоли ([Firefox bug 1136299](https://bugzil.la/1136299)).
- Если адрес принадлежит домену, о котором известно, что он отслеживает пользователей, [сетевой монитор](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) покажет специальный значок перед этой ссылкой — см. [Значки безопасности](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-monitor-request-list-security-icons) ([Firefox bug 1333994](https://bugzil.la/1333994)).
- Настройка `devtools.aboutdebugging.showSystemAddons` отныне по умолчанию имеет значение `false`, что означает — системные дополнения не будут показаны на странице `about:debugging`. Значение этой настройки можно изменить на странице `about:config` ([Firefox bug 1425347](https://bugzil.la/1425347)).
- Упрощена панель инструментов [режима адаптивного дизайна](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html), кроме того, добавлена возможность выровнять область просмотра по левому краю.
- Для пользовательских элементов инспектор теперь показывает [ссылку на определение класса](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#custom_element_definition) ([Firefox bug 1443923](https://bugzil.la/1443923)).

### HTML

- Элемент {{HTMLElement("img")}} обзавёлся поддержкой атрибута `decoding` ([Firefox bug 1416328](https://bugzil.la/1416328)); см. также {{DOMxRef("HTMLImageElement.decoding")}}.

#### Удалено

- Удалена поддержка ссылок с типом `sidebar` (`rel="sidebar"`) ([Firefox bug 1452645](https://bugzil.la/1452645)).

### CSS

- Добавлена поддержка псевдокласса {{CSSxRef(":defined")}} ([Firefox bug 1331334](https://bugzil.la/1331334)).
- В [Flexbox-раскладку](/ru/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox#the_gap_properties) добавлена поддержка {{CSSxRef("row-gap")}}, {{CSSxRef("column-gap")}} и {{CSSxRef("gap")}} ([Firefox bug 1398483](https://bugzil.la/1398483)).
- Снова включена поддержка [запросов pixel-density правила @media](/ru/docs/Web/CSS/@media/-webkit-device-pixel-ratio), у которых есть префикс -webkit ([Firefox bug 1444139](https://bugzil.la/1444139)).
- Реализована поддержка свойств [CSS Flexible Box Layout](/ru/docs/Web/CSS/CSS_flexible_box_layout) (Flexbox) {{CSSxRef("align-self")}}, {{CSSxRef("align-content")}} и {{CSSxRef("align-items")}}, а также {{CSSxRef("justify-content")}} ([Firefox bug 1472843](https://bugzil.la/1472843)).
- Реализована функция `path` для {{CSSxRef("offset-path")}} ([Firefox bug 1429298](https://bugzil.la/1429298)).
- Внесены [улучшения синтаксиса из спецификации Media Queries Level 4](/ru/docs/Web/JavaScript/Reference/Errors/Unexpected_type) ([Firefox bug 1472843](https://bugzil.la/1472843)).
- Свойства `offset-*` переименованы в {{CSSxRef("inset-block-start")}}, {{CSSxRef("inset-block-end")}}, {{CSSxRef("inset-inline-start")}} и {{CSSxRef("inset-inline-end")}} ([Firefox bug 1464782](https://bugzil.la/1464782)).
- Добавлена поддержка [prefers-reduced-motion](/ru/docs/Web/CSS/@media/prefers-reduced-motion) ([Firefox bug 1365045](https://bugzil.la/1365045), [Firefox bug 1475462](https://bugzil.la/1475462)).
- Свойство {{CSSxRef("resize")}} обзавелось относительно-направленными значениями (`block`, `inline`) ([Firefox bug 1464786](https://bugzil.la/1464786)).
- Реализована flexbox-раскладка для значений `safe` и `unsafe` в {{CSSxRef("align-self")}}, {{CSSxRef("align-content")}} и {{CSSxRef("justify-content")}} ([Firefox bug 1297774](https://bugzil.la/1297774)).
- [Логические свойства](/ru/docs/Web/CSS/CSS_logical_properties_and_values) (там, где это необходимо) стали анимируемыми ([Firefox bug 1309752](https://bugzil.la/1309752)).

#### Удалено

- Удалены `offset-block-start`, `offset-block-end`, `offset-inline-start` и `offset-inline-end`; как упомянуто выше, они переименованы в `inset-*` ([Firefox bug 1464782](https://bugzil.la/1464782)).

### SVG

_Без изменений._

### JavaScript

- Реализована поддержка свойства {{JSxRef("Symbol.prototype.description")}} ([Firefox bug 1472170](https://bugzil.la/1472170)).
- Добавлен метод {{JSxRef("Object.fromEntries")}} ([Firefox bug 1469019](https://bugzil.la/1469019)).
- Существенно улучшено сообщение об ошибке, выдаваемое при попытке доступа к свойству не определённого объекта. В случае, когда `x` не определён, а вы пытаетесь получить доступ к `x.y`, консоль вернёт более понятное [`x не определён; невозможно получить доступ к его свойству "y"`](/ru/docs/Web/JavaScript/Reference/Errors/Unexpected_type) вместо `TypeError: x не определён` ([Firefox bug 1259822](https://bugzil.la/1259822)).

#### Удалено

- Удалена экспериментальная поддержка сериализации IndexedDB WebAssembly.Module ([Firefox bug 1469395](https://bugzil.la/1469395)).

### API

#### Новые API

- Включена по умолчанию поддержка API Shadow DOM ([Firefox bug 1471947](https://bugzil.la/1471947)) и Custom Elements ([Firefox bug 1471948](https://bugzil.la/1471948)); см. [Веб-компоненты](/ru/docs/Web/API/Web_components) для получения подробных сведений.
- Реализован API {{domxref("Media_Capabilities_API", "Media Capabilities", "", "1")}} ([Firefox bug 1409664](https://bugzil.la/1409664)).
- Реализована и включена по умолчанию поддержка {{domxref("Clipboard", "API Async Clipboard", "", "1")}} ([Firefox bug 1461465](https://bugzil.la/1461465)). Как и в Chrome, в Firefox реализованы лишь методы {{domxref("Clipboard.writeText", "writeText()")}} и {{domxref("Clipboard.readText", "readText()")}}, но, в отличие от Chrome, `readText()` доступен лишь [дополнениям](/ru/docs/Mozilla/Add-ons/WebExtensions).
- Поддерживается интерфейс {{DOMxRef("SecurityPolicyViolationEvent")}}. Он позволяет отправлять события при нарушении {{HTTPHeader("Content-Security-Policy")}} ([Firefox bug 1472661](https://bugzil.la/1472661)).

#### DOM

- Включены по умолчанию следующие элементы API {{domxref("Web_Animations_API", "Web Animations", "", "1")}} (см. [Firefox bug 1476158](https://bugzil.la/1476158)):

  - Свойства {{DOMxRef("Animation.ready", "ready")}} и {{DOMxRef("Animation.finished", "finished")}} {{DOMxRef("Animation")}}, указывающие на {{JSxRef("Promise")}} `ready` и `finished` объекта `Animation`.
  - Свойство {{DOMxRef("Animation.effect", "effect")}} объекта {{DOMxRef("Animation")}}.
  - Интерфейсы {{DOMxRef("KeyframeEffect")}} и {{DOMxRef("AnimationEffect")}}.

- Реализован метод {{DOMxRef("Element.toggleAttribute()")}} ([Firefox bug 1469592](https://bugzil.la/1469592)).
- В целях совместимости добавлена поддержка нестандартного свойства {{DOMxRef("Event.returnValue")}} ([Firefox bug 1452569](https://bugzil.la/1452569)).
- Теперь, когда свойство {{DOMxRef("Window.event")}} стало стандартным, оно реализовано в Firefox в целях совместимости ([Firefox bug 218415](https://bugzil.la/218415)), но из-за проблем совместимости (см. [Firefox bug 1479964](https://bugzil.la/1479964)) включено лишь в «ночных» выпусках. Его поддержкой управляет настройка `dom.window.event.enabled` ([Firefox bug 1493869](https://bugzil.la/1493869)).
- Для паритета с Edge и Chrome свойство {{DOMxRef("NavigatorID.platform", "navigator.platform")}} отныне возвращает `"Win32"` даже в 64-разрядных операционных системах Windows ([Firefox bug 1472618](https://bugzil.la/1472618)).
- Раньше, ссылки, открывающие новые окна с `rel="noopener"`, и {{DOMxRef("Window.open()")}} с [`noopener`](/ru/docs/Web/API/Window/open#noopener) приводили к тому, что у окна были отключены все свойства и разработчику приходилось включать необходимые ему стандартные свойства. Отныне такие окна будут иметь все те же свойства, что и любое другое окно, а разработчику следует отключать нежелательные ([Firefox bug 1419960](https://bugzil.la/1419960)).

#### События DOM

- На платформе Windows улучшена обработка _правой_ клавиши&#x20;

  <kbd>Alt</kbd>

  . Если в текущей раскладке клавиша&#x20;

  <kbd>Alt</kbd>

  &#x20;назначена на&#x20;

  <kbd>AltGr</kbd>

  , значение {{DOMxRef("KeyboardEvent.key")}} будет `"AltGraph"`. Такое поведение соответствует поведению, принятому недавно в Chrome ([Firefox bug 900750](https://bugzil.la/900750)).

#### Медиа, Web Audio и WebRTC

- Доступ к микрофону теперь работает одновременно в нескольких вкладках, даже в рамках одного процесса контента ([Firefox bug 1404977](https://bugzil.la/1404977)).
- {{DOMxRef("RTCDataChannel")}} теперь поддерживает формат данных sctp-sdp-21 в дополнение к старому формату sctp-sdp-05.
- Узлы {{DOMxRef("ConstantSourceNode")}} отныне имеют не один, а два канала ([Firefox bug 1413283](https://bugzil.la/1413283)).
- Интерфейс API {{domxref("Web_Audio_API", "Web Audio", "", "1")}} {{DOMxRef("AudioScheduledSourceNode")}} (и все остальные типы узлов, основанные на нём) теперь выбрасывает корректное исключение (`RangeError`), если время начала узла представляет собой отрицательное значение ([Firefox bug 1413284](https://bugzil.la/1413284)).
- Минимальные и максимально допустимые значения {{DOMxRef("AudioParam.value", "value")}} объекта {{DOMxRef("AudioParam")}} изменены на минимальное отрицательное число с плавающей запятой одинарной точности (-340,282,346,638,528,859,811,704,183,484,516,925,440) и максимальное положительное число с плавающей запятой одинарной точности (+340,282,346,638,528,859,811,704,183,484,516,925,440) ([Firefox bug 1476695](https://bugzil.la/1476695)).
- Включена по умолчанию поддержка метода {{DOMxRef("SourceBuffer.changeType")}}, позволяющего изменить кодеки во время активного потока. Это часть API {{domxref("Media_Source_Extensions_API", "Media Source Extensions", "", "1")}} ([Firefox bug 1481166](https://bugzil.la/1481166)).
- Метод {{DOMxRef("AudioParam.setValueCurveAtTime()")}} обновлён, чтобы корректно принимать массив значений с плавающей запятой для указания значений параметров, которые изменяются со временем. До этого он требовал {{DOMxRef("Float32Array")}} ([Firefox bug 1421091](https://bugzil.la/1421091)).
- {{DOMxRef("AudioParam.setValueCurveAtTime()")}} обновлён, чтобы возвращать правильный `TypeError`, если в массиве `values` обнаружено не конечное значение ([Firefox bug 1472095](https://bugzil.la/1472095)).
- Кроме того, `setValueCurveAtTime()` обновлён таким образом, чтобы, когда параметр заканчивает следовать кривой значений, значение параметра устанавливалось в соответствии с последним значением в списке значений кривой ([Firefox bug 1308436](https://bugzil.la/1308436)).
- Словарь `RTCRTPStreamStats` переименован в {{DOMxRef("RTCRtpStreamStats")}} согласно прочим словарям WebRTC и спецификации ([Firefox bug 1480498](https://bugzil.la/1480498)).
- Словарь `RTCRtpStreamStats` получил поддержку свойства {{DOMxRef("RTCRtpStreamStats.kind", "kind")}} ([Firefox bug 1481851](https://bugzil.la/1481851)).
- Свойство {{DOMxRef("RTCRtpStreamStats.isRemote", "isRemote")}} словаря {{DOMxRef("RTCRtpStreamStats")}} объявлено устаревшим и будет удалено в Firefox 65. При доступе к свойству будет выведено предупреждение в консоли. Подробности в [блоге](https://blog.mozilla.org/webrtc/getstats-isremote-65/) ([Firefox bug 1393306](https://bugzil.la/1393306)).

#### Canvas и WebGL

- {{DOMxRef("HTMLCanvasElement.getContext()")}} обзавёлся новым атрибутом `powerPreference`. В macOS, при наличии нескольких графических процессоров, это позволяет приложениям и апплетам WebGL, которым не важна производительность, запрашивать слабый GPU вместо более мощного и потребляющего больше энергии ([Firefox bug 1349799](https://bugzil.la/1349799)).

#### Удалено

- Удалены устаревшие нестандартные методы {{DOMxRef("Window.back()")}} и {{DOMxRef("Window.forward()")}}, реализованные лишь в Firefox. Вместо них следует использовать методы {{DOMxRef("History.back", "window.history.back()")}} и {{DOMxRef("History.forward", "window.history.forward()")}} ([Firefox bug 1479486](https://bugzil.la/1479486)).
- Методы {{DOMxRef("URL.createObjectURL", "createObjectURL()")}} и {{DOMxRef("URL.revokeObjectURL", "revokeObjectURL()")}} больше не доступны на экземплярах {{DOMxRef("ServiceWorker")}}, поскольку легко приводят к утечкам памяти ([Firefox bug 1264182](https://bugzil.la/1264182)).
- Удалена устаревшая и ограниченная поддержка эффектов Доплера на {{DOMxRef("PannerNode")}}. У интерфейса {{DOMxRef("AudioListener")}} удалены свойства {{DOMxRef("AudioListener.dopplerFactor", "dopplerFactor")}} и {{DOMxRef("AudioListener.speedOfSound", "speedOfSound")}}, кроме того, у интерфейса `PannerNode` удалён метод {{DOMxRef("PannerNode.setVelocity", "setVelocity()")}} ([Firefox bug 1148354](https://bugzil.la/1148354)).

### CSSOM

_Без изменений._

### HTTP

- Реализован заголовок {{HTTPHeader("Clear-Site-Data")}}; больше он не скрыт за соответствующей настройкой ([Firefox bug 1470111](https://bugzil.la/1470111)).

### Безопасность

- Фавиконы сайтов отныне подчиняются [политике защиты контента](/ru/docs/Web/HTTP/CSP) (CSP), если она настроена ([Firefox bug 1297156](https://bugzil.la/1297156)).
- Выражение `'report-sample'` директивы CSP `script-src` отныне учитывается при создании отчёта о нарушении. Эта директива указывает, что в отчёт должен быть включён краткий пример того, где произошло нарушение. До этого Firefox всегда включал такой пример в отчёт ([Firefox bug 1473218](https://bugzil.la/1473218)).
- Библиотеки NSS обновлены до версии 3.39 ([Firefox bug 1470914](https://bugzil.la/1470914)).

### Плагины

_Без изменений._

### WebDriver (Marionette)

#### Новые возможности

- Marionette будет возвращать [возможность](/ru/docs/Web/WebDriver/Capabilities) `setWindowRect` в ответы `WebDriver:NewSession`, если браузер поддерживает все команды позиционирования и изменения размера окна (это верно лишь для Firefox, но не для любого мобильного приложения) ([Firefox bug 1470659](https://bugzil.la/1470659)).
- Реализована поддержка возможности `unhandledPromptBehavior`, позволяющая настроить [prompt behavior](https://w3c.github.io/webdriver/#dfn-user-prompt-handler) ([Firefox bug 1264259](https://bugzil.la/1264259)).
- Командам `WebDriver:ExecuteScript` и `WebDriver:ExecuteAsyncScript` добавлена возможность обработки запросов к пользователю ([Firefox bug 1439995](https://bugzil.la/1439995)).

#### Изменения API

- Удалены устаревшие конечные точки команд без префикса `WebDriver:` ([Firefox bug 1451725](https://bugzil.la/1451725)).
- Команда `WebDriver:NewSession` возвращает рекомендованные строки (`linux`, `mac`, `windows`) для `platformName`, как и определено в спецификации WebDriver ([Firefox bug 1470646](https://bugzil.la/1470646)).

#### Исправленные ошибки

- События, связанные с фокусом, отсутствовали при взаимодействии элементов, если окно браузера находилось в фоне ([Firefox bug 1398111](https://bugzil.la/1398111)).
- Последовательное выполнение действий `pointerDown` и `pointerUp` могло вызвать двойной щелчок, поскольку `WebDriver:ReleaseActions` не сбрасывал счётчик двойных щелчков ([Firefox bug 1422583](https://bugzil.la/1422583)).
- Многократное выполнение действий `pause` могло привести к бесконечному зависанию ([Firefox bug 1447449](https://bugzil.la/1447449)).
- `WebDriver:ExecuteScript` и `WebDriver:ExecuteAsyncScript` вызывали ошибку циклической ссылки при возвращении коллекции элементов ([Firefox bug 1447977](https://bugzil.la/1447977)).
- Для предотвращения состояния гонки команды `WebDriver:AcceptAlert` и `WebDriver:DismissAlert` будут ожидать закрытия запроса к пользователю ([Firefox bug 1479368](https://bugzil.la/1479368)).
- Записи журнала, вызванные скриптом фрейма, не ограничивались `MarionettePrefs.logLevel`, а содержали всё подряд ([Firefox bug 1482829](https://bugzil.la/1482829)).
- `WebDriver:TakeScreenshot` вызывал ошибку при создании скриншота окна, у которого размер стороны превышал 32767 пикселей ([Firefox bug 1485730](https://bugzil.la/1485730)).
- `WebDriver:SendAlertText` не заменял текст по умолчанию в запросе у пользователя, если переданный текст представлял собой пустую строку ([Firefox bug 1486485](https://bugzil.la/1486485)).

### Прочее

- Исправлено поведение {{DOMxRef("PerformanceObserver.observe()")}}: этот метод теперь ничего не делает, если в указанном массиве типов записей не обнаружены допустимые типы записей или массив пуст/отсутствует. До этого некорректно выбрасывался `TypeError` ([Firefox bug 1403027](https://bugzil.la/1403027)).
- Формат [OpenSearch](/ru/docs/Web/OpenSearch) теперь допускает использование `application/json` в качестве типа URL-адреса (`application/json` является ссылкой на `application/x-suggestions+json`) ([Firefox bug 1425827](https://bugzil.la/1425827)).

## Изменения для разработчиков дополнений

### Изменения API

#### Темы

- Цвет текста по умолчанию для значков {{WebExtAPIRef("browserAction")}} теперь автоматически становится чёрным или белым, чтобы достичь максимального контраста с фоном ([Firefox bug 1474110](https://bugzil.la/1474110)).
- Свойства `accentcolor` и `textcolor` ключа [`theme`](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) теперь необязательны ([Firefox bug 1413144](https://bugzil.la/1413144)).
- {{WebExtAPIRef("browserAction.getBadgeTextColor()")}} и {{WebExtAPIRef("browserAction.setBadgeTextColor()")}} позволяют получать и настраивать цвет текста значков {{WebExtAPIRef("browserAction")}} ([Firefox bug 1424620](https://bugzil.la/1424620)).
- Объект `colors` ключа `theme` теперь поддерживает свойства `ntp_text` (для указания цвета текста в новой вкладке) и `ntp_background` (для указания цвета фона) ([Firefox bug 1347204](https://bugzil.la/1347204)).
- Темы получили возможность настраивать цвет боковых панелей, например, боковой панели закладок ([Firefox bug 1418602](https://bugzil.la/1418602)). Соответствующие свойства:

  - `sidebar`: цвет фона.
  - `sidebar_text`: цвет текста.
  - `sidebar_highlight`: цвет фона выделенного элемента.
  - `sidebar_highlight_text`: цвет текста выделенного элемента.

- Метод {{WebExtAPIRef("management.install()")}} позволяет дополнениям устанавливать и задействовать подписанные темы ([Firefox bug 1369209](https://bugzil.la/1369209)).

#### Поиск

- Новый API {{WebExtAPIRef("search")}} позволяет получить список установленных поисковых плагинов, и выполнять поиск с их помощью ([Firefox bug 1352598](https://bugzil.la/1352598)).
- {{WebExtAPIRef("topSites.get()")}} получил поддержку параметра `options`, позволяющего настроить различные параметры возвращённого списка сайтов ([Firefox bug 1445836](https://bugzil.la/1445836)).

#### Вкладки

- {{WebExtAPIRef("tabs.onHighlighted")}} отныне поддерживает множественное выделение ([Firefox bug 1474440](https://bugzil.la/1474440)).
- {{WebExtAPIRef("tabs.highlight")}} теперь включает необязательное поле в объекте `highlightInfo` — `populate` — по умолчанию имеющее значение `true`. Установка его значения в `false` запрещает возвращённому объекту `windows.Window` заполнять список вкладок, что положительно сказывается на производительности ([Firefox bug 1489814](https://bugzil.la/1489814)).
- {{WebExtAPIRef("tabs.update")}} позволяет менять статус выделения вкладки с помощью `highlighted: true` в параметре `updateProperties` ([Firefox bug 1479129](https://bugzil.la/1479129)).
- {{WebExtAPIRef("tabs.update")}} поддерживает изменения статуса выделения вкладки без изменения фокуса ([Firefox bug 1486050](https://bugzil.la/1486050)). Для этого в параметре `updateProperties` используются одновременно `highlighted: true` и `active: false`.
- {{WebExtAPIRef("tabs.query")}} стала возвращать массив объектов {{WebExtAPIRef("tabs.Tab")}} при выборе нескольких вкладок ([Firefox bug 1465170](https://bugzil.la/1465170)).
- Свойство {{WebExtAPIRef("tabs.Tab")}} теперь корректно отражает то, какие вкладки выделены (подсвечены), а {{WebExtAPIRef("tabs.highlight")}} поддерживает изменение статуса выделения нескольких вкладок ([Firefox bug 1464862](https://bugzil.la/1464862)).
- Свойство `isarticle` в объекте `extraParameters`, передаваемом в {{WebExtAPIRef("tabs.onUpdated")}}, переименовано в `isArticle`. Старое название сохранено, но объявлено устаревшим. Это изменение попало в Firefox 62 ([Firefox bug 1461695](https://bugzil.la/1461695)).
- Событие {{WebExtAPIRef("tabs.onUpdated")}} позволяет отслеживать, какая вкладка привлекает внимание пользователя с помощью свойства `attention` объекта `changeInfo` ([Firefox bug 1396684](https://bugzil.la/1396684)).

#### Меню

- В API {{WebExtApiRef("menus")}} добавлен {{WebExtApiRef("menus.getTargetElement()")}}. Метод возвращает щелчок по элементу, на который ссылается параметр `targetElementId` ([Firefox bug 1325814](https://bugzil.la/1325814)).
- {{WebExtAPIRef("menus.create()")}} теперь позволяет создавать невидимые пункты меню, {{WebExtAPIRef("menus.update()")}} позволяет переключать видимость пунктов меню ([Firefox bug 1482529](https://bugzil.la/1482529)).
- Элементы, созданные с помощью API {{WebExtAPIRef("menus")}}, обзавелись поддержкой клавиш доступа ([Firefox bug 1320462](https://bugzil.la/1320462)).
- Параметр {{WebExtApiRef("menus.create()")}} и {{WebExtApiRef("menus.update()")}} `targetUrlPatterns` теперь поддерживает любые схемы URL-адресов, даже те, которые обычно не допускаются в шаблоне соответствия ([Firefox bug 1280370](https://bugzil.la/1280370)).
- При нажатии на элемент контекстного меню вкладки, [разрешение "activeTab"](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) будет дано этой вкладке, даже если она не является активной ([Firefox bug 1446956](https://bugzil.la/1446956)).

#### Прочее

- {{WebExtAPIRef("commands.onCommand")}} теперь расценивается как [пользовательский ввод](/ru/docs/Mozilla/Add-ons/WebExtensions/User_actions) ([Firefox bug 1408129](https://bugzil.la/1408129)).
- API {{WebExtAPIRef("webRequest")}} позволяет фильтровать speculative-соединения ([Firefox bug 1479565](https://bugzil.la/1479565)).
- {{WebExtAPIRef("webRequest.SecurityInfo")}} обзавёлся свойствами `keaGroupName` и `signatureSchemeName`. Это изменение попало в Firefox 62 ([Firefox bug 1471959](https://bugzil.la/1471959)).
- {{WebExtAPIRef("cookies.Cookie")}} включает свойство, показывающее состояние атрибута SameSite у кук. Перечисление {{WebExtAPIRef ("cookies.SameSiteStatus")}} определяет значение состояния SameSite ([Firefox bug 1351663](https://bugzil.la/1351663)).
- Шаблоны соответствия для URL-адресов теперь явно соответствуют схеме "данные" ([Firefox bug 1280370](https://bugzil.la/1280370)).

## Предыдущие версии

{{Firefox_for_developers(62)}}
