---
title: Firefox 53 для разработчиков
slug: Mozilla/Firefox/Releases/53
---

{{FirefoxSidebar}}

Firefox 53 был выпущен 19 апреля 2017. В этой статье перечислены основные изменения, которые полезны не только для веб-разработчиков, но и разработчиков Firefox и Gecko, а также разработчикам дополнений.

## Изменения для веб-разработчиков

### Инструменты разработчика

- Избегание задержки в прокрутке на подсветке заданных АПЗ ({{bug (1312103)}}).
- Добавлена возможность [копировать полный путь CSS](</ru/docs/Tools/Page_Inspector/How_to/Examine_and_edit_HTML#Copy CSS Path>) элемента ({{bug(1323700)}}).
- Devtools добавлена поддержка CSS-цвета-4 ({{bug (1310681)}}).
- Разметка вид: добавить визуальную подсказку между открывающим и закрывающим тегами сложенного узла ({{bug(1323193)}}).

### CSS

#### Новые возможности

- В `mask-*`свойствах обыкновенного письма (см [CSS маски](/ru/docs/Web/CSS/CSS_Masks) ) все поддерживается и доступны по умолчанию (см {{bug (1251161)}}).
- Добавлено {{cssxref("caret-color")}} Свойство ({{bug (1063162)}}).
- Реализована {{cssxref("place-items")}} / {{cssxref("place-self")}} / {{cssxref("place-content")}} Shorthands ({{bug (1319958)}} ).
- Добавлено `flow-root` значение {{cssxref ( "display")}} свойства ({{bug(1322191)}}).
- {{cssxref("tab-size", "-moz-tab-size")}} теперь принимает {{cssxref("&lt;length&gt;")}} значения ({{bug (943918)}}), а теперь анимируемый ({{bug (1308110)}}).
- {{cssxref("mask-mode")}}: яркости не работает на градиентных масок ({{bug (1346265)}}).
- \[CSS-сетка] FR Единица в {{cssxref("grid-template-rows")}} не заполняя окно просмотра ({{bug(1346699)}}).
- гибкие элементы не сортируются в соответствии с «порядком», если они отделены друг от друга abspos собрата ({{bug (1345873)}}).

#### Другие изменения

- Включить маски longhands по элементам SVG ({{bug(1319667)}}).
- \[CSS-сетка] Исправлено: `align-self`/ `justify-self:stretch`/ `normal` не работает на `<table>` элементах сетки ({{bug (1316051)}}).
- Установленный: `clip-path: circle()` с большой ссылкой окно и процент радиус не оказывают правильно ({{bug (1324713)}}.
- При применении {{cssxref ("text-transform")}} значения из `uppercase` древнегреческого текста, акцент на дизъюнктивной ETA (rj) больше не удаляется (см {{bug(1322989)}}).
- Наличие `contents` значения {{cssxref ("display")}} контролировали через `layout.css.display-contents.enabled` настройку. В Firefox 53 эта настройка была удалена полностью, так что значение всегда будет доступен и больше не могут быть отключены ({{bug (1295788)}}).

### JavaScript

- ECMAScript 2015 семантика для {{jsxref ( "Function.name")}} свойства были реализованы. Это включает в себя выведенные имена на анонимные функции ( `var foo = function() {}`) ({{bug (883377)}}).
- ECMAScript 2015 семантика для закрытия итераторы были реализованы. Это влияет на [`for...of`](/ru/docs/Web/JavaScript/Reference/Statements/for...of)цикл, например ({{bug(1147371)}}).
- [Шаблон Буквальное предложение Revision](https://tc39.github.io/proposal-template-literal-revision/) , что [снимает ограничения избежать последовательностей на помеченных литералах шаблона](/ru/docs/Web/JavaScript/Reference/Template_literals#Tagged_template_literals_and_escape_sequences) было реализовано ({{bug(1317375)}}).
- Нестандартные [Струнные дженерики](/ru/docs/Web/JavaScript/Reference/Global_Objects/String#String_generic_methods) теперь представьте предупреждение устаревания в консоли. Не используйте их больше, они будут удалены в будущем! ({{bug (1319926)}}).
- Статическое `length` свойство {{jsxref ( "TypedArray")}} объектов было изменено с 3 до 0 в соответствии с ES2016 ({{bug (1317306)}}).
- {{jsxref ( "SharedArrayBuffer")}} теперь может быть использован в {{jsxref ( "DataView")}} объекты ({{bug (1246597)}}).
- В более ранних версиях спецификации, {{jsxref ( "SharedArrayBuffer")}} объектов необходимо явно переданы в ходе [структурированного клонирования](/ru/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) . В новой спецификации они не являются [переводными объекты](/ru/docs/Web/API/Transferable) больше , и , следовательно , не должны быть в списке передачи. Новое поведение используется для представления консоли предупреждения только, но теперь будет выдавать ошибку ({{bug(1302037)}}).
- {{jsxref ( "ArrayBuffer")}} длина теперь ограничена {{jsxref ( "Number.MAX_SAFE_INTEGER")}} (> = 2 \*\* 53) ({{bug (1255128)}}).
- {{jsxref ( "Error.prototype")}} и другие нативный объект ошибки прототипы , как {{jsxref ( "RangeError.prototype")}} и т.д. теперь обычные объекты вместо соответствующих объектов Error. (В частности, `Object.prototype.toString.call(Error.prototype)` теперь `"[object Object]"`вместо `"[object Error]"`.) ({{bug (1213341)}}).

### Мероприятия

- CSS Transitions: The {{event("transitionstart")}}, {{event ( "transitionrun")}} и {{event ( "transitioncancel")}} события были реализованы (см {{bug (1264125)}} и {{bug (1287983)}}).
- {{Domxref ( "CompositionEvent.CompositionEvent", "CompositionEvent")}} Конструктор был реализован (см {{bug(1002256)}}).
- {{Domxref ( "MouseEvent.x")}} и {{domxref ( "MouseEvent.y")}} псевдонимами {{domxref ( "MouseEvent.clientX")}} / {{domxref ( "MouseEvent.clientY" )}} были реализованы (см {{bug(424390)}}).
- {{Event ( "auxclick")}} событие и соответствующий {{domxref ( "GlobalEventHandlers.onauxclick")}} был реализован обработчик (см {{bug (1304044)}}).
- {{Event ( "transitioncancel")}} событие теперь уволен после [перехода](/ru/docs/Web/CSS/CSS_Transitions) отменяется. См {{domxref ( "GlobalEventHandlers.ontransitioncancel")}} для получения более подробной информации и пример ({{bug ( "1264125")}}).

### DOM

- {{Domxref ( "HTMLHyperLinkElementUtils.pathname", "путь")}} и {{domxref ( "HTMLHyperLinkElementUtils.search", "поиск")}} {{domxref ( "HTMLHyperLinkElementUtils")}} свойства ранее возвращено неправильные части в URL. Например, для URL из `http://z.com/x?a=true&b=false`, `pathname` будет возвращаться « `/x?a=true&b=false"` и `search` вернётся„", а не» `/x` «и» `?a=true&b=false"` соответственно. Теперь это было исправлено ({{bug (1310483)}}).
- {{Domxref ( "URLSearchParams.URLSearchParams", "URLSearchParams ()")}} Конструктор теперь принимает на {{domxref ( "USVString")}} или последовательность {{domxref ( "USVString")}} ев в качестве инициализации объект ({{bug( "1330678")}}).
- {{Domxref ( "Selection.setBaseAndExtent ()")}} метод [API выбора](/ru/docs/Web/API/Selection_API) теперь реализован (см {{bug (1321623)}}).
- ["Fakepath"](https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly) дополнение `file` типа {{HTMLElement ( "вход")}} `values` была реализована в Gecko, давая его соотношение с другими браузерами (см {{bug (1274596)}}).
- {{Domxref ( "Node.getRootNode ()")}} была реализована, заменяя устаревшее {{domxref ( "Node.rootNode")}} Свойство ({{bug(1269155)}}).
- Собственные свойства {{domxref ( "Plugin")}} и {{domxref ( "PluginArray")}} объектов больше не перечислимы ({{bug ( "1270366")}}).
- Названные свойства {{domxref ( "MimeTypeArray")}} объекты больше не перечислимы ({{bug ( "1270364")}}).
- [API разрешений](/ru/docs/Web/API/Permissions_API) теперь имеет новое название разрешения доступного - `persistent-storage`- как он используется при создании {{domxref ( "Permissions.query ()")}} (см {{bug (1270038)}}). Это позволяет источнику использовать постоянную форму (т.е. [постоянного хранения](https://storage.spec.whatwg.org/#persistence) ) для его хранения, в соответствии с [API хранения](https://storage.spec.whatwg.org/) .

### Рабочие и работники сферы обслуживания

- [Network Information API](/ru/docs/Web/API/Network_Information_API) теперь доступен в рабочих (см {{bug (1323172)}}).
- [События сервера посланных](/ru/docs/Web/API/Server-sent_events) теперь могут быть использованы из рабочих (см {{bug (1267903)}}).
- {{Domxref ( "ExtendableEvent.waitUntil", "ExtendableEvent.waitUntil ()")}} Теперь можно вызвать асинхронно (см {{bug(1263304)}}).

### WebGL

- {{Domxref ( "WEBGL_compressed_texture_astc")}} реализуется расширение WebGL ({{bug(1250077)}}).
- {{Domxref ( "WEBGL_debug_renderer_info")}} расширение WebGL теперь включён по умолчанию ({{bug(1336645)}}).

### Аудио, видео и медиа

#### Генеральная

- Начиная с **Firefox 53 для Android** , декодирование массовой информации обрабатывается вне процесса для повышения производительности на многоядерных системах ({{bug (1333323)}}).

#### элементы медиа

- {{domxref ( "HTMLMediaElement.play ()")}} Метод, используемый для начала воспроизведения медиа в любом медиа-элемента, теперь возвращает {{jsxref ( "Promise")}}, которая выполняется, когда воспроизведение начинается и отклоняется если произошла ошибка ({{bug(1244768)}}).

#### Web Audio API

- Был добавлен {{domxref ( "AudioScheduledSourceNode")}} интерфейс и {{domxref ( "AudioBufferSourceNode")}}, {{domxref ( "ConstantSourceNode")}} и {{domxref ( "OscillatorNode")}} интерфейсы теперь основаны на нем ({{bug( "1324568")}}).

#### WebRTC

- В {{domxref ( "RTCPeerConnection")}} методы {{domxref ( "RTCPeerConnection.createOffer", "createOffer ()")}} и {{domxref ( "RTCPeerConnection.createAnswer", "createAnswer ()")}} Теперь возвращает {{jsxref ( "промис")}} , который возвращает объект , соответствующий словарь {{domxref ( "RTCSessionDescriptionInit")}} вместо возврата {{domxref ( "RTCSessionDescription")}} непосредственно. Существующий код будет продолжать работать, но [новый код можно записать более просто](/ru/docs/Web/API/RTCPeerConnection/setLocalDescription#About_the_session_description_parameter) .
- Аналогичным образом , {{domxref ( "RTCPeerConnection")}} методы {{domxref ( "RTCPeerConnection.setLocalDescription", "setLocalDescription ()")}} и {{domxref ( "RTCPeerConnection.setRemoteDescription", "setRemoteDescription ()")}} теперь принимают в качестве входных данных объекта , соответствующего словарю {{domxref ( "RTCSessionDescriptionInit")}}. Существующий код продолжает работать, но [может быть упрощена](/ru/docs/Web/API/RTCPeerConnection/setLocalDescription#About_the_session_description_parameter) .
- {{Domxref ( "RTCPeerConnection.addIceCandidate ()")}} теперь принимает в качестве входных данных объекта, соответствующую {{domxref ( "RTCIceCandidateInit")}} словарь. Это совместимо с существующим кодом, но позволяет новый код, который будет написано чуть более просто при использовании в сочетании с изменениями перечисленных выше ({{bug (1263312)}}).
- {{glossary( "DTMF")}} поддержка теперь включена по умолчанию , используя {{domxref ( "RTCDTMFSender")}}. См [Использование DTMF с WebRTC](/ru/docs/Web/API/WebRTC_API/Using_DTMF) для получения дополнительной информации о том , как это работает.

### HTTP / Networking

- Gecko теперь имеет прив доступный в , `about:config` чтобы позволить пользователям устанавливать их по умолчанию {{HTTPHeader ( "Referrer-политики")}} - ({{bug ( "1304623")}}). Возможные значения: `network.http.referer.userControlPolicy`

  - 0 - `no-referrer`
  - 1 - `same-origin`
  - 2 - `strict-origin-when-cross-origin`
  - 3 - `no-referrer-when-downgrade` (по умолчанию)

- Поддержка следующего протокола переговоров (NPN) была удалена в пользу [протокола прикладного уровня переговоров](https://en.wikipedia.org/wiki/Application-Layer_Protocol_Negotiation) (ALPN) - см {{bug ( "1248198")}}.
- {{HTTPHeader ( "Large-Allocation")}} заголовок HTTP теперь доступен по умолчанию, и больше не скрывается за привилегированную ({{bug(1331083)}}).

### SVG

- Частично реализована {{domxref ( "SVGGeometryElement")}} интерфейс ({{bug (1239100)}}).

## Переезды с веб-платформы

### HTML / XML

- `dom.details_element.enabled` Прив - которая контролируется включение / отключение {{HTMLElement ( "детали")}} и {{HTMLElement ( "Резюме")}} опорный элемент в Firefox - теперь был удалён из `about:config`. Эти элементы (которые впервые были включены по умолчанию в Firefox 49) больше не могут быть отключены. См {{bug (1271549)}}.

### CSS

- Удалён вариант с префиксом `-moz` для псевдо-класса {{cssxref(":dir", ":dir()")}} ({{bug(1270406)}}).
- `-moz` Приставкой версия {{cssxref("текст-ALIGN-последний")}} был удалён ({{bug(1276808)}}).
- Удалён вариант с префиксом `-moz` для метода {{cssxref("calc", "calc()")}} ({{bug(1331296)}}).

### JavaScript

- Нестандартный {{jsxref("ArrayBuffer.slice ()")}} Метод был удалён (но стандартизированная версия {{jsxref("ArrayBuffer.prototype.slice()")}} сохраняется, см {{bug(1313112)}}).

### API-интерфейсы

- [Информация API Wi - Fi](/ru/docs/Archive/B2G_OS/API/WiFi_Information_API) , спикер API - менеджер, и Привязывание API и [настройки API](/ru/docs/Archive/B2G_OS/API/Settings_API) , были удалены из платформы (см {{bug (1313788)}}, {{bug (1317853)}}, {{bug (1313789)}} и {{bug (1313155)}} соответственно).

## Изменения для дополнения и разработчиков Mozilla

### WebExtensions

Новые API:

- [`browsingData`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/browsingData)
- [`identity`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/identity)
- [`contextualIdentities`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities)

Усовершенствованные API:

- [`storage.sync`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync)
- `page_action`, `browser_action`, `password`, `tab` [Типы контекстов](/en-US/Add-ons/WebExtensions/API/contextMenus/ContextType) в[`contextMenus`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/contextMenus)
- [`webRequest.onBeforeRequest`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest) теперь поддерживает `requestBody`
- [`tabs.insertCSS`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS)теперь поддерживает `cssOrigin`, что позволяет вставлять таблицы стилей пользователя.

### модули JavaScript-код

- Асинхронные [интерфейсы AddonManager](/ru/docs/Mozilla/Add-ons/Add-on_Manager/AddonManager) теперь поддерживают {{jsxref ( "Promise", "Промис")}}, а также колбэки ({{bug (987512)}}.

## Старые версии

{{Firefox_for_developers (52)}}
