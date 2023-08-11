---
title: Firefox 63 для разработчиков
slug: Mozilla/Firefox/Releases/63
---

{{FirefoxSidebar}}

В этой статье перечислены ключевые изменения, которые касаются разработчиков. Firefox 63 был выпущен 23 октября 2018 года.

## Изменения для веб-разработчиков

### Инструменты разработчика

- Вкладка [инспектора](/ru/docs/Tools/Page_Inspector) «Шрифты» обзавелась редактором, облегчающим просмотр и правку настроек используемых шрифтов. Подробнее см. в [Edit fonts](/ru/docs/Tools/Page_Inspector/How_to/Edit_fonts).
- Включён по умолчанию [инспектор поддержи доступности](/ru/docs/Tools/Accessibility_inspector) ({{bug(1482454)}}).
- При наведении курсора на объект в [инспекторе поддержки доступности](/ru/docs/Tools/Accessibility_inspector), [элемент будет подсвечен](/ru/docs/Tools/Accessibility_inspector#Highlighting_of_UI_items), а его роль и имя показаны в информационной панели на странице ({{bug(1473030)}}).
- Командная строка [веб-консоли](/ru/docs/Tools/Web_Console) теперь находится не внизу окна, а прямо после вывода консоли ({{bug(1136299)}}).
- Если адрес принадлежит домену, о котором известно, что он отслеживает пользователей, [сетевой монитор](/ru/docs/Tools/Network_Monitor) покажет специальный значок перед этой ссылкой — см. [Значки безопасности](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-monitor-request-list-security-icons) ({{bug(1333994)}}).
- Настройка `devtools.aboutdebugging.showSystemAddons` отныне по умолчанию имеет значение `false`, что означает — системные дополнения не будут показаны на странице `about:debugging`. Значение этой настройки можно изменить на странице `about:config` ({{bug(1425347)}}).
- Упрощена панель инструментов [режима адаптивного дизайна](/ru/docs/Tools/Responsive_Design_Mode), кроме того, добавлена возможность выровнять область просмотра по левому краю.
- Для пользовательских элементов инспектор теперь показывает [ссылку на определение класса](/ru/docs/Tools/Page_Inspector/How_to/Examine_and_edit_HTML#Custom_element_definition) ({{bug(1443923)}}).

### HTML

- Элемент {{HTMLElement("img")}} обзавёлся поддержкой атрибута `decoding` ({{bug(1416328)}}); см. также {{DOMxRef("HTMLImageElement.decoding")}}.

#### Удалено

- Удалена поддержка ссылок с типом `sidebar` (`rel="sidebar"`) ({{bug(1452645)}}).

### CSS

- Добавлена поддержка псевдокласса {{CSSxRef(":defined")}} ({{bug(1331334)}}).
- В [Flexbox-раскладку](/ru/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox#The_gap_properties) добавлена поддержка {{CSSxRef("row-gap")}}, {{CSSxRef("column-gap")}} и {{CSSxRef("gap")}} ({{bug(1398483)}}).
- Снова включена поддержка [запросов pixel-density правила @media](/ru/docs/Web/CSS/@media/-webkit-device-pixel-ratio), у которых есть префикс -webkit ({{bug(1444139)}}).
- Реализована поддержка свойств [CSS Flexible Box Layout](/ru/docs/Web/CSS/CSS_Flexible_Box_Layout) (Flexbox) {{CSSxRef("align-self")}}, {{CSSxRef("align-content")}} и {{CSSxRef("align-items")}}, а также {{CSSxRef("justify-content")}} ({{bug(1472843)}}).
- Реализована функция `path` для {{CSSxRef("offset-path")}} ({{bug(1429298)}}).
- Внесены [улучшения синтаксиса из спецификации Media Queries Level 4](/ru/docs/Web/JavaScript/Reference/Errors/cant_access_property) ({{bug(1472843)}}).
- Свойства `offset-*` переименованы в {{CSSxRef("inset-block-start")}}, {{CSSxRef("inset-block-end")}}, {{CSSxRef("inset-inline-start")}} и {{CSSxRef("inset-inline-end")}} ({{bug(1464782)}}).
- Добавлена поддержка [prefers-reduced-motion](/ru/docs/Web/CSS/@media/prefers-reduced-motion) ({{bug(1365045)}}, {{bug(1475462)}}).
- Свойство {{CSSxRef("resize")}} обзавелось относительно-направленными значениями (`block`, `inline`) ({{bug(1464786)}}).
- Реализована flexbox-раскладка для значений `safe` и `unsafe` в {{CSSxRef("align-self")}}, {{CSSxRef("align-content")}} и {{CSSxRef("justify-content")}} ({{bug(1297774)}}).
- [Логические свойства](/ru/docs/Web/CSS/CSS_Logical_Properties) (там, где это необходимо) стали анимируемыми ({{bug(1309752)}}).

#### Удалено

- Удалены `offset-block-start`, `offset-block-end`, `offset-inline-start` и `offset-inline-end`; как упомянуто выше, они переименованы в `inset-*` ({{bug(1464782)}}).

### SVG

_Без изменений._

### JavaScript

- Реализована поддержка свойства {{JSxRef("Symbol.prototype.description")}} ({{bug(1472170)}}).
- Добавлен метод {{JSxRef("Object.fromEntries")}} ({{bug(1469019)}}).
- Существенно улучшено сообщение об ошибке, выдаваемое при попытке доступа к свойству не определённого объекта. В случае, когда `x` не определён, а вы пытаетесь получить доступ к `x.y`, консоль вернёт более понятное [`x не определён; невозможно получить доступ к его свойству "y"`](/ru/docs/Web/JavaScript/Reference/Errors/cant_access_property) вместо `TypeError: x не определён` ({{bug(1259822)}}).

#### Удалено

- Удалена экспериментальная поддержка сериализации IndexedDB WebAssembly.Module ({{bug(1469395)}}).

### API

#### Новые API

- Включена по умолчанию поддержка API Shadow DOM ({{bug(1471947)}}) и Custom Elements ({{bug(1471948)}}); см. [Веб-компоненты](/ru/docs/Web/Web_Components) для получения подробных сведений.
- Реализован API {{domxref("Media_Capabilities_API", "Media Capabilities", "", "1")}} ({{bug(1409664)}}).
- Реализована и включена по умолчанию поддержка {{domxref("Clipboard", "API Async Clipboard", "", "1")}} ({{bug(1461465)}}). Как и в Chrome, в Firefox реализованы лишь методы {{domxref("Clipboard.writeText", "writeText()")}} и {{domxref("Clipboard.readText", "readText()")}}, но, в отличие от Chrome, `readText()` доступен лишь [дополнениям](/ru/docs/Mozilla/Add-ons/WebExtensions).
- Поддерживается интерфейс {{DOMxRef("SecurityPolicyViolationEvent")}}. Он позволяет отправлять события при нарушении {{HTTPHeader("Content-Security-Policy")}} ({{bug(1472661)}}).

#### DOM

- Включены по умолчанию следующие элементы API {{domxref("Web_Animations_API", "Web Animations", "", "1")}} (см. {{bug(1476158)}}):

  - Свойства {{DOMxRef("Animation.ready", "ready")}} и {{DOMxRef("Animation.finished", "finished")}} {{DOMxRef("Animation")}}, указывающие на {{JSxRef("Promise")}} `ready` и `finished` объекта `Animation`.
  - Свойство {{DOMxRef("Animation.effect", "effect")}} объекта {{DOMxRef("Animation")}}.
  - Интерфейсы {{DOMxRef("KeyframeEffect")}} и {{DOMxRef("AnimationEffect")}}.

- Реализован метод {{DOMxRef("Element.toggleAttribute()")}} ({{bug(1469592)}}).
- В целях совместимости добавлена поддержка нестандартного свойства {{DOMxRef("Event.returnValue")}} ({{bug(1452569)}}).
- Теперь, когда свойство {{DOMxRef("Window.event")}} стало стандартным, оно реализовано в Firefox в целях совместимости ({{bug(218415)}}), но из-за проблем совместимости (см. {{bug(1479964)}}) включено лишь в «ночных» выпусках. Его поддержкой управляет настройка `dom.window.event.enabled` ({{bug(1493869)}}).
- Для паритета с Edge и Chrome свойство {{DOMxRef("NavigatorID.platform", "navigator.platform")}} отныне возвращает `"Win32"` даже в 64-разрядных операционных системах Windows ({{bug(1472618)}}).
- Раньше, ссылки, открывающие новые окна с `rel="noopener"`, и {{DOMxRef("Window.open()")}} с [`noopener`](/ru/docs/Web/API/Window/open#noopener) приводили к тому, что у окна были отключены все свойства и разработчику приходилось включать необходимые ему стандартные свойства. Отныне такие окна будут иметь все те же свойства, что и любое другое окно, а разработчику следует отключать нежелательные ({{bug(1419960)}}).

#### События DOM

- На платформе Windows улучшена обработка _правой_ клавиши&#x20;

  <kbd>Alt</kbd>

  . Если в текущей раскладке клавиша&#x20;

  <kbd>Alt</kbd>

  &#x20;назначена на&#x20;

  <kbd>AltGr</kbd>

  , значение {{DOMxRef("KeyboardEvent.key")}} будет `"AltGraph"`. Такое поведение соответствует поведению, принятому недавно в Chrome ({{bug(900750)}}).

#### Медиа, Web Audio и WebRTC

- Доступ к микрофону теперь работает одновременно в нескольких вкладках, даже в рамках одного процесса контента ({{bug(1404977)}}).
- {{DOMxRef("RTCDataChannel")}} теперь поддерживает формат данных sctp-sdp-21 в дополнение к старому формату sctp-sdp-05.
- Узлы {{DOMxRef("ConstantSourceNode")}} отныне имеют не один, а два канала ({{bug(1413283)}}).
- Интерфейс API {{domxref("Web_Audio_API", "Web Audio", "", "1")}} {{DOMxRef("AudioScheduledSourceNode")}} (и все остальные типы узлов, основанные на нём) теперь выбрасывает корректное исключение (`RangeError`), если время начала узла представляет собой отрицательное значение ({{bug(1413284)}}).
- Минимальные и максимально допустимые значения {{DOMxRef("AudioParam.value", "value")}} объекта {{DOMxRef("AudioParam")}} изменены на минимальное отрицательное число с плавающей запятой одинарной точности (-340,282,346,638,528,859,811,704,183,484,516,925,440) и максимальное положительное число с плавающей запятой одинарной точности (+340,282,346,638,528,859,811,704,183,484,516,925,440) ({{bug(1476695)}}).
- Включена по умолчанию поддержка метода {{DOMxRef("SourceBuffer.changeType")}}, позволяющего изменить кодеки во время активного потока. Это часть API {{domxref("Media_Source_Extensions_API", "Media Source Extensions", "", "1")}} ({{bug(1481166)}}).
- Метод {{DOMxRef("AudioParam.setValueCurveAtTime()")}} обновлён, чтобы корректно принимать массив значений с плавающей запятой для указания значений параметров, которые изменяются со временем. До этого он требовал {{DOMxRef("Float32Array")}} ({{bug(1421091)}}).
- {{DOMxRef("AudioParam.setValueCurveAtTime()")}} обновлён, чтобы возвращать правильный `TypeError`, если в массиве `values` обнаружено не конечное значение ({{bug(1472095)}}).
- Кроме того, `setValueCurveAtTime()` обновлён таким образом, чтобы, когда параметр заканчивает следовать кривой значений, значение параметра устанавливалось в соответствии с последним значением в списке значений кривой ({{bug(1308436)}}).
- Словарь `RTCRTPStreamStats` переименован в {{DOMxRef("RTCRtpStreamStats")}} согласно прочим словарям WebRTC и спецификации ({{bug(1480498)}}).
- Словарь `RTCRtpStreamStats` получил поддержку свойства {{DOMxRef("RTCRtpStreamStats.kind", "kind")}} ({{bug(1481851)}}).
- Свойство {{DOMxRef("RTCRtpStreamStats.isRemote", "isRemote")}} словаря {{DOMxRef("RTCRtpStreamStats")}} объявлено устаревшим и будет удалено в Firefox 65. При доступе к свойству будет выведено предупреждение в консоли. Подробности в [блоге](https://blog.mozilla.org/webrtc/getstats-isremote-65/) ({{bug(1393306)}}).

#### Canvas и WebGL

- {{DOMxRef("HTMLCanvasElement.getContext()")}} обзавёлся новым атрибутом `powerPreference`. В macOS, при наличии нескольких графических процессоров, это позволяет приложениям и апплетам WebGL, которым не важна производительность, запрашивать слабый GPU вместо более мощного и потребляющего больше энергии ({{bug(1349799)}}).

#### Удалено

- Удалены устаревшие нестандартные методы {{DOMxRef("Window.back()")}} и {{DOMxRef("Window.forward()")}}, реализованные лишь в Firefox. Вместо них следует использовать методы {{DOMxRef("History.back", "window.history.back()")}} и {{DOMxRef("History.forward", "window.history.forward()")}} ({{bug(1479486)}}).
- Методы {{DOMxRef("URL.createObjectURL", "createObjectURL()")}} и {{DOMxRef("URL.revokeObjectURL", "revokeObjectURL()")}} больше не доступны на экземплярах {{DOMxRef("ServiceWorker")}}, поскольку легко приводят к утечкам памяти ({{bug(1264182)}}).
- Удалена устаревшая и ограниченная поддержка эффектов Доплера на {{DOMxRef("PannerNode")}}. У интерфейса {{DOMxRef("AudioListener")}} удалены свойства {{DOMxRef("AudioListener.dopplerFactor", "dopplerFactor")}} и {{DOMxRef("AudioListener.speedOfSound", "speedOfSound")}}, кроме того, у интерфейса `PannerNode` удалён метод {{DOMxRef("PannerNode.setVelocity", "setVelocity()")}} ({{bug(1148354)}}).

### CSSOM

_Без изменений._

### HTTP

- Реализован заголовок {{HTTPHeader("Clear-Site-Data")}}; больше он не скрыт за соответствующей настройкой ({{bug(1470111)}}).

### Безопасность

- Фавиконы сайтов отныне подчиняются [политике защиты контента](/ru/docs/Web/HTTP/CSP) (CSP), если она настроена ({{bug(1297156)}}).
- Выражение `'report-sample'` директивы CSP `script-src` отныне учитывается при создании отчёта о нарушении. Эта директива указывает, что в отчёт должен быть включён краткий пример того, где произошло нарушение. До этого Firefox всегда включал такой пример в отчёт ({{bug(1473218)}}).
- Библиотеки NSS обновлены до версии 3.39 ({{bug(1470914)}}).

### Плагины

_Без изменений._

### WebDriver (Marionette)

#### Новые возможности

- Marionette будет возвращать [возможность](/ru/docs/Web/WebDriver/Capabilities) `setWindowRect` в ответы `WebDriver:NewSession`, если браузер поддерживает все команды позиционирования и изменения размера окна (это верно лишь для Firefox, но не для любого мобильного приложения) ({{bug(1470659)}}).
- Реализована поддержка возможности `unhandledPromptBehavior`, позволяющая настроить [prompt behavior](https://w3c.github.io/webdriver/#dfn-user-prompt-handler) ({{bug(1264259)}}).
- Командам `WebDriver:ExecuteScript` и `WebDriver:ExecuteAsyncScript` добавлена возможность обработки запросов к пользователю ({{bug(1439995)}}).

#### Изменения API

- Удалены устаревшие конечные точки команд без префикса `WebDriver:` ({{bug(1451725)}}).
- Команда `WebDriver:NewSession` возвращает рекомендованные строки (`linux`, `mac`, `windows`) для `platformName`, как и определено в спецификации WebDriver ({{bug(1470646)}}).

#### Исправленные ошибки

- События, связанные с фокусом, отсутствовали при взаимодействии элементов, если окно браузера находилось в фоне ({{bug(1398111)}}).
- Последовательное выполнение действий `pointerDown` и `pointerUp` могло вызвать двойной щелчок, поскольку `WebDriver:ReleaseActions` не сбрасывал счётчик двойных щелчков ({{bug(1422583)}}).
- Многократное выполнение действий `pause` могло привести к бесконечному зависанию ({{bug(1447449)}}).
- `WebDriver:ExecuteScript` и `WebDriver:ExecuteAsyncScript` вызывали ошибку циклической ссылки при возвращении коллекции элементов ({{bug(1447977)}}).
- Для предотвращения состояния гонки команды `WebDriver:AcceptAlert` и `WebDriver:DismissAlert` будут ожидать закрытия запроса к пользователю ({{bug(1479368)}}).
- Записи журнала, вызванные скриптом фрейма, не ограничивались `MarionettePrefs.logLevel`, а содержали всё подряд ({{bug(1482829)}}).
- `WebDriver:TakeScreenshot` вызывал ошибку при создании скриншота окна, у которого размер стороны превышал 32767 пикселей ({{bug(1485730)}}).
- `WebDriver:SendAlertText` не заменял текст по умолчанию в запросе у пользователя, если переданный текст представлял собой пустую строку ({{bug(1486485)}}).

### Прочее

- Исправлено поведение {{DOMxRef("PerformanceObserver.observe()")}}: этот метод теперь ничего не делает, если в указанном массиве типов записей не обнаружены допустимые типы записей или массив пуст/отсутствует. До этого некорректно выбрасывался `TypeError` ({{bug(1403027)}}).
- Формат [OpenSearch](/ru/docs/Web/OpenSearch) теперь допускает использование `application/json` в качестве типа URL-адреса (`application/json` является ссылкой на `application/x-suggestions+json`) ({{bug(1425827)}}).

## Изменения для разработчиков дополнений

### Изменения API

#### Темы

- Цвет текста по умолчанию для значков {{WebExtAPIRef("browserAction")}} теперь автоматически становится чёрным или белым, чтобы достичь максимального контраста с фоном ({{bug(1474110)}}).
- Свойства `accentcolor` и `textcolor` ключа [`theme`](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) теперь необязательны ({{bug(1413144)}}).
- {{WebExtAPIRef("browserAction.getBadgeTextColor()")}} и {{WebExtAPIRef("browserAction.setBadgeTextColor()")}} позволяют получать и настраивать цвет текста значков {{WebExtAPIRef("browserAction")}} ({{bug(1424620)}}).
- Объект `colors` ключа `theme` теперь поддерживает свойства `ntp_text` (для указания цвета текста в новой вкладке) и `ntp_background` (для указания цвета фона) ({{bug(1347204)}}).
- Темы получили возможность настраивать цвет боковых панелей, например, боковой панели закладок ({{bug(1418602)}}). Соответствующие свойства:

  - `sidebar`: цвет фона.
  - `sidebar_text`: цвет текста.
  - `sidebar_highlight`: цвет фона выделенного элемента.
  - `sidebar_highlight_text`: цвет текста выделенного элемента.

- Метод {{WebExtAPIRef("management.install()")}} позволяет дополнениям устанавливать и задействовать подписанные темы ({{bug(1369209)}}).

#### Поиск

- Новый API {{WebExtAPIRef("search")}} позволяет получить список установленных поисковых плагинов, и выполнять поиск с их помощью ({{bug(1352598)}}).
- {{WebExtAPIRef("topSites.get()")}} получил поддержку параметра `options`, позволяющего настроить различные параметры возвращённого списка сайтов ({{bug(1445836)}}).

#### Вкладки

- {{WebExtAPIRef("tabs.onHighlighted")}} отныне поддерживает множественное выделение ({{bug(1474440)}}).
- {{WebExtAPIRef("tabs.highlight")}} теперь включает необязательное поле в объекте `highlightInfo` — `populate` — по умолчанию имеющее значение `true`. Установка его значения в `false` запрещает возвращённому объекту `windows.Window` заполнять список вкладок, что положительно сказывается на производительности ({{bug(1489814)}}).
- {{WebExtAPIRef("tabs.update")}} позволяет менять статус выделения вкладки с помощью `highlighted: true` в параметре `updateProperties` ({{bug(1479129)}}).
- {{WebExtAPIRef("tabs.update")}} поддерживает изменения статуса выделения вкладки без изменения фокуса ({{bug(1486050)}}). Для этого в параметре `updateProperties` используются одновременно `highlighted: true` и `active: false`.
- {{WebExtAPIRef("tabs.query")}} стала возвращать массив объектов {{WebExtAPIRef("tabs.Tab")}} при выборе нескольких вкладок ({{bug(1465170)}}).
- Свойство {{WebExtAPIRef("tabs.Tab")}} теперь корректно отражает то, какие вкладки выделены (подсвечены), а {{WebExtAPIRef("tabs.highlight")}} поддерживает изменение статуса выделения нескольких вкладок ({{bug(1464862)}}).
- Свойство `isarticle` в объекте `extraParameters`, передаваемом в {{WebExtAPIRef("tabs.onUpdated")}}, переименовано в `isArticle`. Старое название сохранено, но объявлено устаревшим. Это изменение попало в Firefox 62 ({{bug(1461695)}}).
- Событие {{WebExtAPIRef("tabs.onUpdated")}} позволяет отслеживать, какая вкладка привлекает внимание пользователя с помощью свойства `attention` объекта `changeInfo` ({{bug(1396684)}}).

#### Меню

- В API {{WebExtApiRef("menus")}} добавлен {{WebExtApiRef("menus.getTargetElement()")}}. Метод возвращает щелчок по элементу, на который ссылается параметр `targetElementId` ({{bug(1325814)}}).
- {{WebExtAPIRef("menus.create()")}} теперь позволяет создавать невидимые пункты меню, {{WebExtAPIRef("menus.update()")}} позволяет переключать видимость пунктов меню ({{bug(1482529)}}).
- Элементы, созданные с помощью API {{WebExtAPIRef("menus")}}, обзавелись поддержкой клавиш доступа ({{bug(1320462)}}).
- Параметр {{WebExtApiRef("menus.create()")}} и {{WebExtApiRef("menus.update()")}} `targetUrlPatterns` теперь поддерживает любые схемы URL-адресов, даже те, которые обычно не допускаются в шаблоне соответствия ({{bug(1280370)}}).
- При нажатии на элемент контекстного меню вкладки, [разрешение "activeTab"](/en-US/Add-ons/WebExtensions/manifest.json/permissions#activeTab_permission) будет дано этой вкладке, даже если она не является активной ({{bug(1446956)}}).

#### Прочее

- {{WebExtAPIRef("commands.onCommand")}} теперь расценивается как [пользовательский ввод](/ru/docs/Mozilla/Add-ons/WebExtensions/User_actions) ({{bug(1408129)}}).
- API {{WebExtAPIRef("webRequest")}} позволяет фильтровать speculative-соединения ({{bug(1479565)}}).
- {{WebExtAPIRef("webRequest.SecurityInfo")}} обзавёлся свойствами `keaGroupName` и `signatureSchemeName`. Это изменение попало в Firefox 62 ({{bug(1471959)}}).
- {{WebExtAPIRef("cookies.Cookie")}} включает свойство, показывающее состояние атрибута SameSite у кук. Перечисление {{WebExtAPIRef ("cookies.SameSiteStatus")}} определяет значение состояния SameSite ({{bug(1351663)}}).
- Шаблоны соответствия для URL-адресов теперь явно соответствуют схеме "данные" ({{bug(1280370)}}).

## Предыдущие версии

{{Firefox_for_developers(62)}}
