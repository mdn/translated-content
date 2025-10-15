---
title: Firefox 53 для разработчиков
slug: Mozilla/Firefox/Releases/53
---

Firefox 53 был выпущен 19 апреля 2017. В этой статье перечислены основные изменения, которые полезны не только для веб-разработчиков, но и разработчиков Firefox и Gecko, а также разработчикам дополнений.

## Изменения для веб-разработчиков

### Инструменты разработчика

- Избегание задержки в прокрутке на подсветке заданных АПЗ ([Firefox bug 1312103](https://bugzil.la/1312103)).
- Добавлена возможность [копировать полный путь CSS](</ru/docs/Tools/Page_Inspector/How_to/Examine_and_edit_HTML#Copy CSS Path>) элемента ([Firefox bug 1323700](https://bugzil.la/1323700)).
- Devtools добавлена поддержка CSS-цвета-4 ([Firefox bug 1310681](https://bugzil.la/1310681)).
- Разметка вид: добавить визуальную подсказку между открывающим и закрывающим тегами сложенного узла ([Firefox bug 1323193](https://bugzil.la/1323193)).

### CSS

#### Новые возможности

- В `mask-*`свойствах обыкновенного письма (см [CSS маски](/ru/docs/Web/CSS/CSS_masking) ) все поддерживается и доступны по умолчанию (см [Firefox bug 1251161](https://bugzil.la/1251161)).
- Добавлено {{cssxref("caret-color")}} Свойство ([Firefox bug 1063162](https://bugzil.la/1063162)).
- Реализована {{cssxref("place-items")}} / {{cssxref("place-self")}} / {{cssxref("place-content")}} Shorthands ([Firefox bug 1319958](https://bugzil.la/1319958) ).
- Добавлено `flow-root` значение {{cssxref ( "display")}} свойства ([Firefox bug 1322191](https://bugzil.la/1322191)).
- {{cssxref("tab-size", "-moz-tab-size")}} теперь принимает {{cssxref("&lt;length&gt;")}} значения ([Firefox bug 943918](https://bugzil.la/943918)), а теперь анимируемый ([Firefox bug 1308110](https://bugzil.la/1308110)).
- {{cssxref("mask-mode")}}: яркости не работает на градиентных масок ([Firefox bug 1346265](https://bugzil.la/1346265)).
- \[CSS-сетка] FR Единица в {{cssxref("grid-template-rows")}} не заполняя окно просмотра ([Firefox bug 1346699](https://bugzil.la/1346699)).
- гибкие элементы не сортируются в соответствии с «порядком», если они отделены друг от друга abspos собрата ([Firefox bug 1345873](https://bugzil.la/1345873)).

#### Другие изменения

- Включить маски longhands по элементам SVG ([Firefox bug 1319667](https://bugzil.la/1319667)).
- \[CSS-сетка] Исправлено: `align-self`/ `justify-self:stretch`/ `normal` не работает на `<table>` элементах сетки ([Firefox bug 1316051](https://bugzil.la/1316051)).
- Установленный: `clip-path: circle()` с большой ссылкой окно и процент радиус не оказывают правильно ([Firefox bug 1324713](https://bugzil.la/1324713).
- При применении {{cssxref ("text-transform")}} значения из `uppercase` древнегреческого текста, акцент на дизъюнктивной ETA (rj) больше не удаляется (см [Firefox bug 1322989](https://bugzil.la/1322989)).
- Наличие `contents` значения {{cssxref ("display")}} контролировали через `layout.css.display-contents.enabled` настройку. В Firefox 53 эта настройка была удалена полностью, так что значение всегда будет доступен и больше не могут быть отключены ([Firefox bug 1295788](https://bugzil.la/1295788)).

### JavaScript

- ECMAScript 2015 семантика для {{jsxref ( "Function.name")}} свойства были реализованы. Это включает в себя выведенные имена на анонимные функции ( `var foo = function() {}`) ([Firefox bug 883377](https://bugzil.la/883377)).
- ECMAScript 2015 семантика для закрытия итераторы были реализованы. Это влияет на [`for...of`](/ru/docs/Web/JavaScript/Reference/Statements/for...of)цикл, например ([Firefox bug 1147371](https://bugzil.la/1147371)).
- [Шаблон Буквальное предложение Revision](https://tc39.github.io/proposal-template-literal-revision/) , что [снимает ограничения избежать последовательностей на помеченных литералах шаблона](/ru/docs/Web/JavaScript/Reference/Template_literals#tagged_template_literals_and_escape_sequences) было реализовано ([Firefox bug 1317375](https://bugzil.la/1317375)).
- Нестандартные [Струнные дженерики](/ru/docs/Web/JavaScript/Reference/Global_Objects/String#string_generic_methods) теперь представьте предупреждение устаревания в консоли. Не используйте их больше, они будут удалены в будущем! ([Firefox bug 1319926](https://bugzil.la/1319926)).
- Статическое `length` свойство {{jsxref ( "TypedArray")}} объектов было изменено с 3 до 0 в соответствии с ES2016 ([Firefox bug 1317306](https://bugzil.la/1317306)).
- {{jsxref ( "SharedArrayBuffer")}} теперь может быть использован в {{jsxref ( "DataView")}} объекты ([Firefox bug 1246597](https://bugzil.la/1246597)).
- В более ранних версиях спецификации, {{jsxref ( "SharedArrayBuffer")}} объектов необходимо явно переданы в ходе [структурированного клонирования](/ru/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) . В новой спецификации они не являются [переводными объекты](/ru/docs/Web/API/Transferable) больше , и , следовательно , не должны быть в списке передачи. Новое поведение используется для представления консоли предупреждения только, но теперь будет выдавать ошибку ([Firefox bug 1302037](https://bugzil.la/1302037)).
- {{jsxref ( "ArrayBuffer")}} длина теперь ограничена {{jsxref ( "Number.MAX_SAFE_INTEGER")}} (> = 2 \*\* 53) ([Firefox bug 1255128](https://bugzil.la/1255128)).
- {{jsxref ( "Error.prototype")}} и другие нативный объект ошибки прототипы , как {{jsxref ( "RangeError.prototype")}} и т.д. теперь обычные объекты вместо соответствующих объектов Error. (В частности, `Object.prototype.toString.call(Error.prototype)` теперь `"[object Object]"`вместо `"[object Error]"`.) ([Firefox bug 1213341](https://bugzil.la/1213341)).

### Мероприятия

- CSS Transitions: реализованы события [`transitionstart`](/ru/docs/Web/API/Element/transitionstart_event), [`transitionrun`](/ru/docs/Web/API/Element/transitionrun_event) и [`transitioncancel`](/ru/docs/Web/API/Element/transitioncancel_event) ([Firefox bug 1264125](https://bugzil.la/1264125) и [Firefox bug 1287983](https://bugzil.la/1287983)).
- {{Domxref ( "CompositionEvent.CompositionEvent", "CompositionEvent")}} Конструктор был реализован (см [Firefox bug 1002256](https://bugzil.la/1002256)).
- {{Domxref ( "MouseEvent.x")}} и {{domxref ( "MouseEvent.y")}} псевдонимами {{domxref ( "MouseEvent.clientX")}} / {{domxref ( "MouseEvent.clientY" )}} были реализованы (см [Firefox bug 424390](https://bugzil.la/424390)).
- реализованы событие [`auxclick`](/ru/docs/Web/API/Element/auxclick_event) и соответствующий обработчик {{domxref ( "GlobalEventHandlers.onauxclick")}} ([Firefox bug 1304044](https://bugzil.la/1304044)).
- событие [`transitioncancel`](/ru/docs/Web/API/Element/transitioncancel_event) теперь возникает после отмены [перехода](/ru/docs/Web/CSS/CSS_Transitions).

### DOM

- {{Domxref ( "HTMLHyperLinkElementUtils.pathname", "путь")}} и {{domxref ( "HTMLHyperLinkElementUtils.search", "поиск")}} {{domxref ( "HTMLHyperLinkElementUtils")}} свойства ранее возвращено неправильные части в URL. Например, для URL из `http://z.com/x?a=true&b=false`, `pathname` будет возвращаться « `/x?a=true&b=false"` и `search` вернётся„", а не» `/x` «и» `?a=true&b=false"` соответственно. Теперь это было исправлено ([Firefox bug 1310483](https://bugzil.la/1310483)).
- {{Domxref ( "URLSearchParams.URLSearchParams", "URLSearchParams ()")}} Конструктор теперь принимает на {{domxref ( "USVString")}} или последовательность {{domxref ( "USVString")}} ев в качестве инициализации объект ([Firefox bug 1330678](https://bugzil.la/1330678)).
- {{Domxref ( "Selection.setBaseAndExtent ()")}} метод [API выбора](/ru/docs/Web/API/Selection_API) теперь реализован (см [Firefox bug 1321623](https://bugzil.la/1321623)).
- ["Fakepath"](https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly) дополнение `file` типа {{HTMLElement ( "вход")}} `values` была реализована в Gecko, давая его соотношение с другими браузерами (см [Firefox bug 1274596](https://bugzil.la/1274596)).
- {{Domxref ( "Node.getRootNode ()")}} была реализована, заменяя устаревшее {{domxref ( "Node.rootNode")}} Свойство ([Firefox bug 1269155](https://bugzil.la/1269155)).
- Собственные свойства {{domxref ( "Plugin")}} и {{domxref ( "PluginArray")}} объектов больше не перечислимы ([Firefox bug 1270366](https://bugzil.la/1270366)).
- Названные свойства {{domxref ( "MimeTypeArray")}} объекты больше не перечислимы ([Firefox bug 1270364](https://bugzil.la/1270364)).
- [API разрешений](/ru/docs/Web/API/Permissions_API) теперь имеет новое название разрешения доступного - `persistent-storage`- как он используется при создании {{domxref ( "Permissions.query ()")}} (см [Firefox bug 1270038](https://bugzil.la/1270038)). Это позволяет источнику использовать постоянную форму (т.е. [постоянного хранения](https://storage.spec.whatwg.org/#persistence) ) для его хранения, в соответствии с [API хранения](https://storage.spec.whatwg.org/) .

### Рабочие и работники сферы обслуживания

- [Network Information API](/ru/docs/Web/API/Network_Information_API) теперь доступен в рабочих (см [Firefox bug 1323172](https://bugzil.la/1323172)).
- [События сервера посланных](/ru/docs/Web/API/Server-sent_events) теперь могут быть использованы из рабочих (см [Firefox bug 1267903](https://bugzil.la/1267903)).
- {{Domxref ( "ExtendableEvent.waitUntil", "ExtendableEvent.waitUntil ()")}} Теперь можно вызвать асинхронно (см [Firefox bug 1263304](https://bugzil.la/1263304)).

### WebGL

- {{Domxref ( "WEBGL_compressed_texture_astc")}} реализуется расширение WebGL ([Firefox bug 1250077](https://bugzil.la/1250077)).
- {{Domxref ( "WEBGL_debug_renderer_info")}} расширение WebGL теперь включён по умолчанию ([Firefox bug 1336645](https://bugzil.la/1336645)).

### Аудио, видео и медиа

#### Генеральная

- Начиная с **Firefox 53 для Android** , декодирование массовой информации обрабатывается вне процесса для повышения производительности на многоядерных системах ([Firefox bug 1333323](https://bugzil.la/1333323)).

#### элементы медиа

- {{domxref ( "HTMLMediaElement.play ()")}} Метод, используемый для начала воспроизведения медиа в любом медиа-элемента, теперь возвращает {{jsxref ( "Promise")}}, которая выполняется, когда воспроизведение начинается и отклоняется если произошла ошибка ([Firefox bug 1244768](https://bugzil.la/1244768)).

#### Web Audio API

- Был добавлен {{domxref ( "AudioScheduledSourceNode")}} интерфейс и {{domxref ( "AudioBufferSourceNode")}}, {{domxref ( "ConstantSourceNode")}} и {{domxref ( "OscillatorNode")}} интерфейсы теперь основаны на нем ([Firefox bug 1324568](https://bugzil.la/1324568)).

#### WebRTC

- В {{domxref ( "RTCPeerConnection")}} методы {{domxref ( "RTCPeerConnection.createOffer", "createOffer ()")}} и {{domxref ( "RTCPeerConnection.createAnswer", "createAnswer ()")}} Теперь возвращает {{jsxref ( "промис")}} , который возвращает объект , соответствующий словарь {{domxref ( "RTCSessionDescriptionInit")}} вместо возврата {{domxref ( "RTCSessionDescription")}} непосредственно. Существующий код будет продолжать работать, но [новый код можно записать более просто](/ru/docs/Web/API/RTCPeerConnection/setLocalDescription#About_the_session_description_parameter) .
- Аналогичным образом , {{domxref ( "RTCPeerConnection")}} методы {{domxref ( "RTCPeerConnection.setLocalDescription", "setLocalDescription ()")}} и {{domxref ( "RTCPeerConnection.setRemoteDescription", "setRemoteDescription ()")}} теперь принимают в качестве входных данных объекта , соответствующего словарю {{domxref ( "RTCSessionDescriptionInit")}}. Существующий код продолжает работать, но [может быть упрощена](/ru/docs/Web/API/RTCPeerConnection/setLocalDescription#About_the_session_description_parameter) .
- {{Domxref ( "RTCPeerConnection.addIceCandidate ()")}} теперь принимает в качестве входных данных объекта, соответствующую {{domxref ( "RTCIceCandidateInit")}} словарь. Это совместимо с существующим кодом, но позволяет новый код, который будет написано чуть более просто при использовании в сочетании с изменениями перечисленных выше ([Firefox bug 1263312](https://bugzil.la/1263312)).
- {{glossary( "DTMF")}} поддержка теперь включена по умолчанию , используя {{domxref ( "RTCDTMFSender")}}. См [Использование DTMF с WebRTC](/ru/docs/Web/API/WebRTC_API/Using_DTMF) для получения дополнительной информации о том , как это работает.

### HTTP / Networking

- Gecko теперь имеет прив доступный в , `about:config` чтобы позволить пользователям устанавливать их по умолчанию {{HTTPHeader ( "Referrer-политики")}} - ([Firefox bug 1304623](https://bugzil.la/1304623)). Возможные значения: `network.http.referer.userControlPolicy`
  - 0 - `no-referrer`
  - 1 - `same-origin`
  - 2 - `strict-origin-when-cross-origin`
  - 3 - `no-referrer-when-downgrade` (по умолчанию)

- Поддержка следующего протокола переговоров (NPN) была удалена в пользу [протокола прикладного уровня переговоров](https://en.wikipedia.org/wiki/Application-Layer_Protocol_Negotiation) (ALPN) - см [Firefox bug 1248198](https://bugzil.la/1248198).
- {{HTTPHeader ( "Large-Allocation")}} заголовок HTTP теперь доступен по умолчанию, и больше не скрывается за привилегированную ([Firefox bug 1331083](https://bugzil.la/1331083)).

### SVG

- Частично реализована {{domxref ( "SVGGeometryElement")}} интерфейс ([Firefox bug 1239100](https://bugzil.la/1239100)).

## Переезды с веб-платформы

### HTML / XML

- `dom.details_element.enabled` Прив - которая контролируется включение / отключение {{HTMLElement ( "детали")}} и {{HTMLElement ( "Резюме")}} опорный элемент в Firefox - теперь был удалён из `about:config`. Эти элементы (которые впервые были включены по умолчанию в Firefox 49) больше не могут быть отключены. См [Firefox bug 1271549](https://bugzil.la/1271549).

### CSS

- Удалён вариант с префиксом `-moz` для псевдо-класса {{cssxref(":dir", ":dir()")}} ([Firefox bug 1270406](https://bugzil.la/1270406)).
- `-moz` Приставкой версия {{cssxref("текст-ALIGN-последний")}} был удалён ([Firefox bug 1276808](https://bugzil.la/1276808)).
- Удалён вариант с префиксом `-moz` для метода {{cssxref("calc", "calc()")}} ([Firefox bug 1331296](https://bugzil.la/1331296)).

### JavaScript

- Нестандартный {{jsxref("ArrayBuffer.slice ()")}} Метод был удалён (но стандартизированная версия {{jsxref("ArrayBuffer.prototype.slice()")}} сохраняется, см [Firefox bug 1313112](https://bugzil.la/1313112)).

### API-интерфейсы

- [Информация API Wi - Fi](/ru/docs/Archive/B2G_OS/API/WiFi_Information_API) , спикер API - менеджер, и Привязывание API и [настройки API](/ru/docs/Archive/B2G_OS/API/Settings_API) , были удалены из платформы (см [Firefox bug 1313788](https://bugzil.la/1313788), [Firefox bug 1317853](https://bugzil.la/1317853), [Firefox bug 1313789](https://bugzil.la/1313789) и [Firefox bug 1313155](https://bugzil.la/1313155) соответственно).

## Изменения для дополнения и разработчиков Mozilla

### WebExtensions

Новые API:

- [`browsingData`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/browsingData)
- [`identity`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/identity)
- [`contextualIdentities`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities)

Усовершенствованные API:

- [`storage.sync`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync)
- `page_action`, `browser_action`, `password`, `tab` [Типы контекстов](/ru/docs/Mozilla/Add-ons/WebExtensions/API/menus/ContextType) в[`contextMenus`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/menus)
- [`webRequest.onBeforeRequest`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest) теперь поддерживает `requestBody`
- [`tabs.insertCSS`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS)теперь поддерживает `cssOrigin`, что позволяет вставлять таблицы стилей пользователя.

### модули JavaScript-код

- Асинхронные [интерфейсы AddonManager](/ru/docs/Mozilla/Add-ons/Add-on_Manager/AddonManager) теперь поддерживают {{jsxref ( "Promise", "Промис")}}, а также колбэки ([Firefox bug 987512](https://bugzil.la/987512).

## Старые версии

{{Firefox_for_developers (52)}}
