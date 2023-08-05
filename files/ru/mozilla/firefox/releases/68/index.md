---
title: Firefox 68 for developers
slug: Mozilla/Firefox/Releases/68
---

{{FirefoxSidebar}}

Эта статья содержит информацию об изменениях в Firefox 68, которые касаются разработчиков. Firefox 68 был выпущен 9 июля 2019.

## Изменения для веб разработчиков

### Инструменты разработчика

#### Браузер/веб консоль

- Веб консоль теперь предоставляет [больше информации о CSS предупреждениях](/ru/docs/Tools/Web_Console/Console_messages#CSS), включая древо DOM-элементов, которые используют CSS-правило ({{bug(1093953)}}).
- Теперь вы можете фильтровать контент Веб консоли, пользуясь регулярными выражениями ({{bug(1441079)}}).
- The Browser console now allows you to show or hide messages from the content process by setting or clearing the checkbox labeled _Show Content Messages_ ({{bug(1260877)}}).

#### JavaScript дебаггер

- Теперь вы можете осуществлять [Поиск](/ru/docs/Tools/Debugger/How_to/Search#Searching_in_all_files) по всем файлам проекта с помощью дебаггера, нажав&#x20;

  <kbd>Shift</kbd>

  &#x20;\+&#x20;

  <kbd>Ctrl</kbd>

  &#x20;\+&#x20;

  <kbd>F</kbd>

  &#x20;(Windows or Linux) или&#x20;

  <kbd>Shift</kbd>

  &#x20;\+&#x20;

  <kbd>Cmd</kbd>

  &#x20;\+&#x20;

  <kbd>F</kbd>

  &#x20;(macOS) ({{bug(1320325)}}).

#### Сетевой монитор

- В списке [запросов](/ru/docs/Tools/Network_Monitor/request_list#Filtering_requests) Сетевой монитора теперь можно блокировать определённые URL ({{bug(1151368)}}).
- Теперь вы можете повторно отправить запрос без редактирования метода, URL, параметров и заголовков, используя команду [Переотправить](/ru/docs/Tools/Network_Monitor/request_list#Context_menu) в контекстном меню ({{bug(1422014)}}).
- Контекстное меню Сетевого монитора, вкладка [Заголовки](/ru/docs/Tools/Network_Monitor/request_details#Headers), теперь позволяет вам скопировать всю или же некоторую информацию о заголовках в формате JSON ({{bug(1442249)}}).

#### Инспектор страниц

- На панель со [стилями](/ru/docs/Tools/Page_Inspector/How_to/Examine_and_edit_CSS#Examine_CSS_rules) в Инспекторе страниц, была добавлена кнопка, позволяющая переключиться в режим симуляции печати ({{bug(1534984)}}).
- [Панель со шрифтами](/ru/docs/Tools/Page_Inspector/How_to/Edit_fonts) теперь имеет ползунок для изменения `letter-spacing` ({{bug(1536237)}}).
- Значок предупреждения появляется рядом с неподдерживаемыми CSS правилами или правилами, которые имеют некорректные значения, для того, чтобы помочь вам понять, почему некоторые стили не были применены ({{bug(1306054)}}).

#### Инспектор хранилища

- Теперь вы можете [удалять локальные или сессионные](/ru/docs/Tools/Storage_Inspector#Local_storage_Session_storage) записи в хранилище, выбрав строку в инспекторе хранилища и нажав кнопку backspace ({{bug(1522893)}}).

#### Прочее

- [Инспектор поддержки доступности](/ru/docs/Tools/Accessibility_inspector) теперь имеет функцию _Проверить на ошибки_, которая включает в себя число инструментов аудита, чтобы выявить проблемы с доступностью на ваших веб-страницах. Первая доступная проверка — _контраст_, позволяющая выявить проблемы с цветовым контрастом.
- Надстройка контроля видимости внутренних расширений (системных дополнений и скрытых) на странице [about:debugging](/ru/docs/Tools/about:debugging) была изменена с `devtools.aboutdebugging.showSystemAddons` на `devtools.aboutdebugging.showHiddenAddons` ({{bug(1544372)}}).
- [Режим адаптивного дизайна](/ru/docs/Tools/Responsive_Design_Mode) был переработан — окошко _Параметры устройства_ (меню выбора устройства > _Изменить список..._) теперь более интуитивное и стало проще в использовании ({{bug(1487857)}}).

#### Удалённые

- Флажок "Включить дополнение при отладке" был удалён со страницы [about:debugging](/ru/docs/Tools/about:debugging) ({{bug(1544813)}}).

### HTML

- Элемент {{HTMLElement("track")}} — предоставленный {{domxref("HTMLTrackElement")}} — теперь получает {{domxref("HTMLTrackElement.cuechange_event", "cuechange")}} событие в дополнение к {{domxref("TextTrack")}}, если текст трека содержится в медиа элементе ({{bug(1548731)}}).
- {{htmlelement("link")}} элементы снова поддерживают атрибут `disabled`, с другим поведением. Когда `disabled` установлен на элементе `<link>` вместе с `rel="stylesheet"`, то стили не загружаются во время загрузки страницы, будут загружены лишь тогда, когда атрибут `disabled` будет изменён на `false`, либо удалён ({{bug(1281135)}}).

#### Удалённые

- [`<meta http-equiv="set-cookie">`](/ru/docs/Web/HTML/Element/meta) больше не поддерживается ({{bug(1457503)}}).

### CSS

- [CSS Scroll Snapping](/ru/docs/Web/CSS/CSS_Scroll_Snap) был обновлён до последней версии спецификации ({{bug(1312163)}}) и ({{bug(1544136)}}):

  - Свойство `scroll-padding` ({{bug(1373832)}})
  - Свойство `scroll-margin` ({{bug(1373833)}})
  - {{CSSxRef("scroll-snap-align")}} ({{bug(1373835)}})

- Свойство {{CSSxRef("-webkit-line-clamp")}} было добавлено для обратной совместимости с другими браузерами ({{bug(866102)}}).
- Для псевдо-элементов была добавлена поддержка {{CSSxRef("::marker")}} ({{bug(205202)}}) и псевдо `::marker` для анимации ({{bug(1538618)}})
- Мы изменили {{CSSxRef("currentColor")}} на вычисляемое значение (кроме свойства {{cssxref("color")}}) ({{bug(760345)}}).
- Support has been fixed for the `ch` length unit so it now matches the spec (fallback for no '0' glyph, vertical metrics) ({{bug(282126)}})
- Свойство {{CSSxRef("counter-set")}} реализовано. ({{bug(1518201)}}).
- Мы реализовали нумерацию списков, используя встроенный счётчик "list-item"; это исправило баги с нумерацией списков ({{bug(288704)}}).
- Selector matching and parsing support has been implemented for [`::part()`](/ru/docs/Web/CSS/::part) ({{bug(1545430)}}) and ({{bug(1545425)}}).
- [CSS Transforms](/ru/docs/Web/CSS/CSS_Transforms) теперь поддерживаются в косвенно рендерящихся вещах e.g.) {{SVGElement("mask")}}, {{SVGElement("marker")}}, {{SVGElement("pattern")}}, {{SVGElement("clipPath")}} ({{bug(1323962)}}).
- While we're keeping the prefixed versions of the various gradient properties ({{cssxref("linear-gradient")}}, {{cssxref("radial-gradient")}}, and {{cssxref("repeating-radial-gradient")}} available for compatibility reasons, we have revised how they're parsed so that they're handled much more like the non-prefixed versions. This means that certain existing styles won't work correctly.

  In particular, the complicated syntax taking both an angle and a position will no longer work, and the `to` keyword in the `<side-or-corner>` parameter is not required for the prefixed gradient properties. You are encouraged to use the standard, non-prefixed gradient properties instead, as they're now widely supported ({{bug(1547939)}}).

#### Удалённые

- {{CSSxRef("scroll-snap-coordinate")}}, {{CSSxRef("scroll-snap-destination")}}, {{CSSxRef("scroll-snap-type-x")}} и {{CSSxRef("scroll-snap-type-y")}} были удалены.
- Свойство {{CSSxRef("scroll-snap-type")}} стало лонгхэнд, старый шортханд синтаксис `scroll-snap-type:mandatory` больше не работает.

### SVG

_Без изменений._

### JavaScript

- Новый примитив {{jsxref("BigInt")}} теперь включён по умолчанию ({{bug(1527902)}}).

### APIs

#### Объектная модель CSS (CSSOM)

- Наследие свойств {{domxref("CSSStyleSheet.rules", "rules")}}, {{domxref("CSSStyleSheet.addRule", "addRule()")}} и {{domxref("CSSStyleSheet.removeRule", "removeRule()")}} методов было добавлено в интерфейс {{domxref("CSSStyleSheet")}}. Это было введено в Internet Explorer 9 и никогда полностью не искоренялось, они добавили это для улучшения обратной совместимости с небольшим процентом сайтов, которые всё ещё пользовались этим ({{bug(1545823)}}).

#### DOM

- [Visual Viewport API](/ru/docs/Web/API/Visual_Viewport_API) было включено по умолчанию на Android ({{bug(1512813)}}). Добавление API для настольной версии Firefox теперь отслеживается в {{bug(1551302)}}.
- Возможность {{domxref("Window")}} [`noreferrer`](/ru/docs/Web/API/Window/open#noreferrer) теперь поддерживается; если указана, то новый контент окон будет загружен без передачи имени хоста, IP адреса, URL и прочей идентифицирующей устройство информации ({{bug(1527287)}}).
- Метод {{domxref("HTMLImageElement.decode", "decode()")}} на `HTMLImageElement` реализован. Это может быть использовано для запуска загрузки и декодирования изображения до добавления его в DOM ({{bug(1501794)}}).
- {{domxref("XMLHttpRequest")}} был обновлён и больше не принимает нестандартное значение `moz-chunked-arraybuffer` для {{domxref("XMLHttpRequest.responseType", "responseType")}}. Код, использующий это, должен быть обновлён, чтобы [использовать Fetch API как поток](/ru/docs/Web/API/Streams_API/Using_readable_streams#Consuming_a_fetch_as_a_stream) ({{bug(1120171)}}).
- `XMLHttpRequest` теперь выводит предупреждения в консоль, если выполняется синхронный запрос во время обработки {{domxref("Window.unload_event", "unload")}}, {{domxref("Window.beforeunload_event", "beforeunload")}}, {{domxref("Window.pagehide_event", "pagehide")}} ({{bug(980902)}}).
- Свойство {{domxref("Document.cookie", "cookie")}} было перенесено из интерфейса {{domxref("HTMLDocument")}} в {{domxref("Document")}}, позволяя документам отличным от {{Glossary("HTML")}} использовать куки ({{bug(144795)}}).
- Методы {{domxref("HTMLElement.focus()")}} и {{domxref("SVGElement.focus()")}} теперь принимают необязательный объект, который может содержать булеву опцию `preventScroll`, определяющую: должна или не должна происходить блокировка браузером прокрутки элемента с фокусом в поле зрения ({{bug(1374045)}}).

#### События DOM

- [Firefox для Android](/ru/docs/Mozilla/Firefox_for_Android) больше не отправляет неправильное событие {{domxref("Window.resize_event", "resize")}}, пока не будет отрисован первый фрейм; это улучшит совместимость с сайтами, которые не ожидают, что это событие произойдёт ({{bug(1528052)}}).
- Рассылка событий для неосновных кнопок мыши было изменено ближе к спецификации; Событие {{domxref("Element.click_event", "click")}} больше не вызывается, когда неосновные кнопки мыши были нажат, в отличие от события {{domxref("Element.auxclick_event", "auxclick")}}. В дополнение, {{domxref("Element.dblclick_event", "dblclick")}} больше на срабатывает для неосновных кнопок мыши ({{bug(1379466)}}).
- Собственное свойство {{domxref("MouseEvent.mozPressure")}} объявлено устаревшим и теперь при вызове сопровождается предупреждением в консоли ({{bug(1165211)}}).

#### Медиа, Веб-аудио и WebRTC

- WebRTC был обновлён и распознаёт `null`, отправленное в обработчик события {{domxref("RTCPeerConnection.icecandidate", "icecandidate")}}, сообщая о получении, вместо того, чтобы никак не реагировать на это; когда это происходит, ICE состояние ({{domxref("RTCPeerConnection.iceGatheringState", "iceGatheringState")}}) становится `complete` ({{bug(1318167)}}).
- Методы {{domxref("RTCRtpReceiver")}},{{domxref("RTCRtpReceiver.getContributingSources", "getContributingSources()")}} и {{domxref("RTCRtpReceiver.getSynchronizationSources", "getSynchronizationSources()")}} теперь поддерживают видеодорожки; ранее они работали только с audio ({{bug(1534466)}}).
- Web Audio API интерфейс {{domxref("MediaStreamTrackAudioSourceNode")}} теперь поддерживается, как метод {{domxref("AudioContext.createMediaStreamTrackSource()")}} ({{bug(1324548)}}).
- {{domxref("RTCDataChannel.negotiated")}} теперь реализован ({{bug(1529695)}}).
- Конструктор {{domxref("MediaStreamAudioSourceNode.MediaStreamAudioSourceNode", "MediaStreamAudioSourceNode()")}} был обновлён в соответствии со спецификацией, где "first audio track" в потоке дорожка, идентификатора которой приходит первым в лексикографическом порядке ({{bug(1324548)}}).
- {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} больше не может быть использован из небезопасного контекста; попытки сделать это будут сопровождаться исключением `NotAllowedError`. Безопасными контекстами считаются те, которые загруженные через HTTPS, либо которые использую схему `file:///`, либо загружены из `localhost`. Сейчас, если необходимо, вы можете включить возможность совершать небезопасные вызовы `getUserMedia()`, установив надстройку `media.getusermedia.insecure.enabled` в состояние `true` ({{bug(1335740)}}).

  > **Примечание:** В будущем, Firefox также удалит свойство {{domxref("navigator.mediaDevices")}} на незащищённых контекстах, предотвратив доступ к {{domxref("MediaDevices")}} API. **Это уже так в Nightly сборках.**

#### Удалённые

- Удалён нестандартный метод {{DOMxRef("XMLDocument.load()")}} ({{bug(332175)}}).
- Удалён нестандартное свойство {{DOMxRef("XMLDocument.async")}} ({{bug(1328138)}}).
- Значение {{domxref("RTCIceCredentialType")}} `token` было удалено ({{bug(1529595)}}).

### HTTP

- [HTTP](/ru/docs/Web/HTTP) заголовок {{HTTPHeader("Clear-Site-Data")}} больше не поддерживает директиву `executionContexts`. This was removed due to problems with interactions between interconnections among different kinds of data at different points in the navigation process and the way the specification is designed. [Было предложено](https://github.com/w3c/webappsec-clear-site-data/issues/59) этой директивы из спецификации из-за вышеуказанных причин, включая эту ({{bug(1548034)}}).

#### Удалённые

- Директива {{HTTPHeader("Content-Security-Policy")}} `require-sri-for` больше не поддерживается из-за её неоднозначного статуса в спецификации. Ранее она была добавлена лишь в качестве надстройки, отключённой по умолчанию ({{bug(1386214)}}).

### Безопасность

- Из-за изменений вследствие [CVE-2019-11730: Same-origin policy treats all files in a directory as having the same-origin](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730), Firefox теперь обращается к файлам в одной и той же директории так, будто бы они из разных папок. Это спровоцировало некоторые побочные эффекты с файлами вида file:// (смотрите {{bug("file-fallout")}}). Например, workers больше не могут быть загружены.

### Соответствия WebDriver (Marionette)

#### Исправления багов

- If `WebDriver:SwitchToWindow` changes the selection to a different window it now waits for its `focus` and `activate` events before returning ({{bug(1335085)}}).
- Исправлена ошибка `TypeError: this.tabModal is null`, которая иногда появлялась при взаимодействии с модальным окном или пользовательскими подсказками ({{bug(1538782)}})

#### Прочее

- Отключена функция принудительной выгрузки вкладок при нехватки памяти, для предотвращения магических исчезновений top-level контекстов браузера ({{bug(1553748)}}).
- Disabled priviledged content processes that caused HTTP authentication dialogs not to appear when navigating to a website after opening a new tab ({{bug(1558763)}}).

### Плагины

_Без изменений._

## Изменения для разработчиков дополнений

### Изменения API

- Функции [proxy.register()](/ru/docs/Mozilla/Add-ons/WebExtensions/API/proxy/register) и [proxy.unregister()](/ru/docs/Mozilla/Add-ons/WebExtensions/API/proxy/unregister) объявлены устаревшими и будут удалены в Firefox 71 ({{bug(1545811)}}).
- Сообщения об ошибке, когда дополнение пытается добавить папку с закладками в основную папку, теперь более интуитивно понятное ({{bug(1512171)}}).
- Promise, возвращённый [`browser.tabs.duplicate()`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/tabs/duplicate), выполняется сразу, пока вкладки не загружены полностью, для повышения производительности ({{bug(1394376)}}).
- Была добавлена поддержка chrome.storage.managed, позволяющая настройкам быть реализованным через корпоративную политику ({{bug(1230802)}}).
- Появилась опция Групповой Политики, позволяющая добавить все расширения в чёрный список, за исключением тех, что внесены в белый, ({{bug(1522823)}}).

### Изменения манифеста

_Без изменений._

## Предыдущие версии

{{Firefox_for_developers(67)}}
