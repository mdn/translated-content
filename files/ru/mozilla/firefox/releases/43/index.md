---
title: Firefox 43 для разработчиков
slug: Mozilla/Firefox/Releases/43
---

{{FirefoxSidebar}}

[Установить Firefox Developer Edition](https://www.mozilla.org/firefox/developer/) Firefox 43 был выпущен 15 декабря 2015 года. В этой статье перечислены ключевые изменения, которые полезны не только для веб-разработчиков, но и для разработчиков Firefox и Gecko, а также для разработчиков приложений.

## Важные изменения для Веб Разработчиков

### Инструменты разработчика

Главное:

- [Просмотр логов сервера в Консоли Веб](/ru/docs/Tools/Web_Console/Console_messages#Server)
- [Быстрый поиск правила переопределяющего объявление CSS](/ru/docs/Tools/Page_Inspector/How_to/Examine_and_edit_CSS#Overridden_declarations)
- [Новый пункт в контекстном меню Инспектора : "Use in Console"](/ru/docs/Tools/Page_Inspector/How_to/Examine_and_edit_HTML#Element_popup_menu)
- ["Strict" опция для фильтрации в Rules view](/ru/docs/Tools/Page_Inspector/How_to/Examine_and_edit_CSS#Strict_search)
- [Сообщения в панели Сеть, в Консоли теперь ссылаются на Сетевой Монитор](/ru/docs/Tools/Web_Console/Console_messages#Network)
- [В Инспекторе при обзоре разметки можно увидеть индикатор указывающий псевдоклассы у соответствующих элементов](/ru/docs/Tools/Page_Inspector/How_to/Examine_and_edit_CSS#Setting_hover_active_focus)
- Новая боковая панель в WebIDE

[И как обычно исправлены обнаруженные баги в инструментах разработчика в версиях Firefox 42 и Firefox 43](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-09-19&query_format=advanced&chfield=resolution&chfieldfrom=2015-08-10&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12582678).

### CSS

- Удалён префикс CSS-свойства {{Cssxref("hyphens")}} ({{bug(953408)}}).
- CCS свойство {{cssxref("font")}} теперь поддерживает указание {{cssxref("font-stretch")}} {{bug(1057680)}}).
- Псевдокласс {{cssxref(":fullscreen")}} теперь выбирает весь стек элементов с дисплея в полноэкранном режиме, а не только элементы высшего уровня ({{bug(1199522)}}).
- Устаревшие свойства SVG {{cssxref("writing-mode")}}, `lr`, `lr-tb`, `rl`, `tb`, and `tb-rl`, добавлены в CSS как алиасы стандартных CSS-свойств ({{bug(1205787)}}).

### HTML

- Для тега {{htmlelement("img")}} с изображением формата ICO содержащего несколько кадров (анимированного), разрешение изображения будет равным разрешению самого большого кадра, а не самого малого {{bug(1201796)}}.
- Значение области просмотра документа (viewport) (определённого с помощью тега `<meta name="viewport>`) можно динамически изменять с помощью JavaScript ({{bug(976616)}}).

### JavaScript

#### Новые API

- Новые методы ES2016 {{jsxref("Array.prototype.includes()")}} и {{jsxref("TypedArray.prototype.includes()")}} доступны по умолчанию ({{bug(1070767)}}).

#### Изменения связанные с объектом `arguments`

- Более полное соответствие спецификации ES2015, [стрелочные функции](/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions) больше не содержат свой собственный встроенный объект `arguments`. Объект `arguments` теперь прикреплён лексически (наследуется от внешней функции). В большинстве случаев, [остаточные параметры](/ru/docs/Web/JavaScript/Reference/Functions/Rest_parameters) лучшая альтернатива `(...args) => args[i]`, смотри {{bug(889158)}}.
- Объект [arguments](/ru/docs/Web/JavaScript/Reference/Functions/arguments) теперь разрешается использовать вместе с [остаточными параметрами](/ru/docs/Web/JavaScript/Reference/Functions/Rest_parameters) ({{bug(1133298)}}).
- Теперь, объект map [`arguments`](/ru/docs/Web/JavaScript/Reference/Functions/arguments) в нестрогих функциях доступен только если функция не содержит другие [остаточные параметры](/ru/docs/Web/JavaScript/Reference/Functions/rest_parameters), или [параметры по умолчанию или](/ru/docs/Web/JavaScript/Reference/Functions/Default_parameters)[destructured parameters](/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) ({{bug(1175394)}}).

### Interfaces/APIs/DOM

#### DOM & HTML DOM

_Без изменений._

#### IndexedDB

- Добавлена [сортировка с учётом локали](/ru/docs/Web/API/IndexedDB_API/Using_IndexedDB#Locale-aware_sorting), которая позволяет создавать индексы учитывающие локаль. Эти индексы потом могут быть использованы чтобы отсортировать данные с учётом правил локали. ({{bug(871846)}}). Это не стандартная функция и доступна только в Firefox.

#### Service Workers

- Согласно спецификации, если {{domxref("ExtendableEvent.waitUntil()")}} был вызван вне обработчика {{domxref("ExtendableEvent")}}, Firefox выбросит `InvalidStateError`; также несколько подряд идущих вызовов {{domxref("ExtendableEvent.waitUntil","waitUntil()")}} теперь будут помещены в стек, и результирующие промисы будут добавлены в [extend lifetime promises](https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#dfn-extend-lifetime-promises) ({{bug(1180274)}}).
- Реализованы методы {{domxref("PushMessageData")}} ({{bug(1149195)}}).

#### WebRTC

- Метод {{domxref("HTMLCanvasElement.captureStream()")}} активирован в Firefox по умолчанию ({{bug(1177276)}}).

#### Разное

- [Battery Status API](/ru/docs/Web/API/Battery_Status_API) теперь использует новый синтаксис промисов для {{domxref("Navigator.getBattery()")}}, так как это описано в последней версии спецификации ({{bug(1050749)}}).
- Заголовок `User-Agent` более не в списке {{Glossary("Forbidden_header_name", "forbidden header names", 1)}} и теперь может быть установлен в объект [Fetch](/ru/docs/Web/API/Fetch_API) {{domxref("Headers")}}, через XHR {{domxref("XMLHttpRequest.setRequestHeader()")}},… ({{bug(1188932)}}).
- Конструктор {{domxref("MediaRecorder.MediaRecorder()")}} теперь принимает дополнительно необязательный параметр типа словарь (dictionary), который позволяет вам устанавливать произвольный битрейт для записываемого аудио/видео ({{bug("1161276")}}).
- Реализован интерфейс {{domxref("PerformanceObserver")}}, из [Performance Timeline API](/ru/docs/Web/API/Performance_Timeline_API) ({{bug(1165796)}}).
- Добавлены дополнительно два интерфейса в [Frame Timing API](/ru/docs/Web/API/Frame_Timing_API), {{domxref("PerformanceRenderTiming")}} и {{domxref("PerformanceCompositeTiming")}} ({{bug(1191178)}}).
- Реализована современная версия [Screen Orientation API](/ru/docs/Web/API/Screen_Orientation_API): доступны беспрефиксные интерфейсы {{domxref("Screen.orientation")}} и {{domxref("ScreenOrientation")}} ({{bug("1131470")}}). Не стандартные {{domxref("Screen.mozOrientation")}}, {{domxref("Screen.onmozorientationchange")}}, {{domxref("Screen.mozLockOrientation()")}}, и {{domxref("Screen.mozUnlockOrientation()")}} будут удалены в будущем.
- В Линукс, как и в Windows, {{domxref("Event.timeStamp")}} теперь возвращает {domxref("DOMHighResTimeStamp")}} ({{bug(1026803)}}).
- Экспериментальная поддержка {{domxref("Selection")}} событий {{event("selectionchange")}} и {{event("selectstart")}}, а также добавлены {{domxref("Document.onselectionchange")}} и {{domxref("GlobalEventHandlers.onselectstart")}} свойства для обработчиков событий ({{bug(571294)}}). Событие `selectionchange` теперь возникает на {{domxref("Document")}} если связано с объектом `Selection`, или в особом случае {{domxref("HTMLInputElement")}} или {{domxref("HTMLTextAreaElement")}} ({{bug(1196479)}}). Это свойство контролируется с помощью настройки `dom.select_events.enabled`, которое по умолчанию имеет значение `false`, за исключением Firefox Nightly.
- Поддержка {{domxref("MouseEvent.offsetX")}} и {{domxref("MouseEvent.offsetY")}} доступна по умолчанию в Android версии Firefox и Firefox OS ({{bug(1204841)}}).
- Удалён метод {{domxref("HTMLCanvasElement.mozFetchAsStream()")}} ({{bug(1206030)}}).
- Конструктор {{domxref("Request.Request", "Request()")}} а также {{domxref("Window.fetch", "fetch()")}} теперь выбросит исключение {{jsxref("TypeError")}} если будет использовано в URL которое содержит параметры с именами username и password ({{bug(1195820)}}).

### MathML

_Без изменений._

### SVG

_Без изменений._

### Audio/Video

_Без изменений._

## HTTP

_Без изменений._

## Networking

_Без изменений._

## Безопасность

- Доступ к Web Storage (i.e. `localStorage` и `sessionStorage`) из других IFrame-мов запрещён если у пользователя [заблокированы куки из сторонних сервисов (других веб-сайтов)](https://support.mozilla.org/en-US/kb/disable-third-party-cookies) ({{bug("536509")}}).
- Белый список удалён из Nightly и Aurora/Dev Edition браузеров ({{bug(1201023)}}). Также запланировано удаление из Beta и Release версий в следующей версии (Firefox 44).
- Реализована целостность ресурсов для {{htmlelement("script")}} и {{htmlelement("link")}} которые ведут к файлам стилей ({{bug("992096")}}).

## Изменения для разработчиков дополнений и разработчиков Mozilla

### Interfaces

_Без изменений._

### XUL

_Без изменений._

### JavaScript code modules

_Без изменений._

### XPCOM

_Без изменений._

### Other

_Без изменений._

## Старые версии

{{Firefox_for_developers('42')}}
