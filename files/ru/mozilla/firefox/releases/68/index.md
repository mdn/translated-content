---
title: Firefox 68 for developers
slug: Mozilla/Firefox/Releases/68
---

Эта статья содержит информацию об изменениях в Firefox 68, которые касаются разработчиков. Firefox 68 был выпущен 9 июля 2019.

## Изменения для веб разработчиков

### Инструменты разработчика

#### Браузер/веб консоль

- Веб консоль теперь предоставляет [больше информации о CSS предупреждениях](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#css), включая древо DOM-элементов, которые используют CSS-правило ([Firefox bug 1093953](https://bugzil.la/1093953)).
- Теперь вы можете фильтровать контент Веб консоли, пользуясь регулярными выражениями ([Firefox bug 1441079](https://bugzil.la/1441079)).
- The Browser console now allows you to show or hide messages from the content process by setting or clearing the checkbox labeled _Show Content Messages_ ([Firefox bug 1260877](https://bugzil.la/1260877)).

#### JavaScript дебаггер

- Теперь вы можете осуществлять [Поиск](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/search/index.html#searching_in_all_files) по всем файлам проекта с помощью дебаггера, нажав&#x20;

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

  &#x20;(macOS) ([Firefox bug 1320325](https://bugzil.la/1320325)).

#### Сетевой монитор

- В списке [запросов](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#filtering_requests) Сетевой монитора теперь можно блокировать определённые URL ([Firefox bug 1151368](https://bugzil.la/1151368)).
- Теперь вы можете повторно отправить запрос без редактирования метода, URL, параметров и заголовков, используя команду [Переотправить](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#context_menu) в контекстном меню ([Firefox bug 1422014](https://bugzil.la/1422014)).
- Контекстное меню Сетевого монитора, вкладка [Заголовки](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#headers), теперь позволяет вам скопировать всю или же некоторую информацию о заголовках в формате JSON ([Firefox bug 1442249](https://bugzil.la/1442249)).

#### Инспектор страниц

- На панель со [стилями](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#examine_css_rules) в Инспекторе страниц, была добавлена кнопка, позволяющая переключиться в режим симуляции печати ([Firefox bug 1534984](https://bugzil.la/1534984)).
- [Панель со шрифтами](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) теперь имеет ползунок для изменения `letter-spacing` ([Firefox bug 1536237](https://bugzil.la/1536237)).
- Значок предупреждения появляется рядом с неподдерживаемыми CSS правилами или правилами, которые имеют некорректные значения, для того, чтобы помочь вам понять, почему некоторые стили не были применены ([Firefox bug 1306054](https://bugzil.la/1306054)).

#### Инспектор хранилища

- Теперь вы можете [удалять локальные или сессионные](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#local_storage_session_storage) записи в хранилище, выбрав строку в инспекторе хранилища и нажав кнопку backspace ([Firefox bug 1522893](https://bugzil.la/1522893)).

#### Прочее

- [Инспектор поддержки доступности](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) теперь имеет функцию _Проверить на ошибки_, которая включает в себя число инструментов аудита, чтобы выявить проблемы с доступностью на ваших веб-страницах. Первая доступная проверка — _контраст_, позволяющая выявить проблемы с цветовым контрастом.
- Надстройка контроля видимости внутренних расширений (системных дополнений и скрытых) на странице [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) была изменена с `devtools.aboutdebugging.showSystemAddons` на `devtools.aboutdebugging.showHiddenAddons` ([Firefox bug 1544372](https://bugzil.la/1544372)).
- [Режим адаптивного дизайна](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) был переработан — окошко _Параметры устройства_ (меню выбора устройства > _Изменить список..._) теперь более интуитивное и стало проще в использовании ([Firefox bug 1487857](https://bugzil.la/1487857)).

#### Удалённые

- Флажок "Включить дополнение при отладке" был удалён со страницы [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) ([Firefox bug 1544813](https://bugzil.la/1544813)).

### HTML

- Элемент {{HTMLElement("track")}} — предоставленный {{domxref("HTMLTrackElement")}} — теперь получает {{domxref("HTMLTrackElement.cuechange_event", "cuechange")}} событие в дополнение к {{domxref("TextTrack")}}, если текст трека содержится в медиа элементе ([Firefox bug 1548731](https://bugzil.la/1548731)).
- {{htmlelement("link")}} элементы снова поддерживают атрибут `disabled`, с другим поведением. Когда `disabled` установлен на элементе `<link>` вместе с `rel="stylesheet"`, то стили не загружаются во время загрузки страницы, будут загружены лишь тогда, когда атрибут `disabled` будет изменён на `false`, либо удалён ([Firefox bug 1281135](https://bugzil.la/1281135)).

#### Удалённые

- [`<meta http-equiv="set-cookie">`](/ru/docs/Web/HTML/Reference/Elements/meta) больше не поддерживается ([Firefox bug 1457503](https://bugzil.la/1457503)).

### CSS

- [CSS Scroll Snapping](/ru/docs/Web/CSS/CSS_Scroll_Snap) был обновлён до последней версии спецификации ([Firefox bug 1312163](https://bugzil.la/1312163)) и ([Firefox bug 1544136](https://bugzil.la/1544136)):
  - Свойство `scroll-padding` ([Firefox bug 1373832](https://bugzil.la/1373832))
  - Свойство `scroll-margin` ([Firefox bug 1373833](https://bugzil.la/1373833))
  - {{CSSxRef("scroll-snap-align")}} ([Firefox bug 1373835](https://bugzil.la/1373835))

- Свойство {{CSSxRef("-webkit-line-clamp")}} было добавлено для обратной совместимости с другими браузерами ([Firefox bug 866102](https://bugzil.la/866102)).
- Для псевдо-элементов была добавлена поддержка {{CSSxRef("::marker")}} ([Firefox bug 205202](https://bugzil.la/205202)) и псевдо `::marker` для анимации ([Firefox bug 1538618](https://bugzil.la/1538618))
- Мы изменили {{CSSxRef("currentColor")}} на вычисляемое значение (кроме свойства {{cssxref("color")}}) ([Firefox bug 760345](https://bugzil.la/760345)).
- Support has been fixed for the `ch` length unit so it now matches the spec (fallback for no '0' glyph, vertical metrics) ([Firefox bug 282126](https://bugzil.la/282126))
- Свойство {{CSSxRef("counter-set")}} реализовано. ([Firefox bug 1518201](https://bugzil.la/1518201)).
- Мы реализовали нумерацию списков, используя встроенный счётчик "list-item"; это исправило баги с нумерацией списков ([Firefox bug 288704](https://bugzil.la/288704)).
- Selector matching and parsing support has been implemented for [`::part()`](/ru/docs/Web/CSS/::part) ([Firefox bug 1545430](https://bugzil.la/1545430)) and ([Firefox bug 1545425](https://bugzil.la/1545425)).
- [CSS Transforms](/ru/docs/Web/CSS/CSS_transforms) теперь поддерживаются в косвенно рендерящихся вещах e.g.) {{SVGElement("mask")}}, {{SVGElement("marker")}}, {{SVGElement("pattern")}}, {{SVGElement("clipPath")}} ([Firefox bug 1323962](https://bugzil.la/1323962)).
- While we're keeping the prefixed versions of the various gradient properties ({{cssxref("linear-gradient")}}, {{cssxref("radial-gradient")}}, and {{cssxref("repeating-radial-gradient")}} available for compatibility reasons, we have revised how they're parsed so that they're handled much more like the non-prefixed versions. This means that certain existing styles won't work correctly.

  In particular, the complicated syntax taking both an angle and a position will no longer work, and the `to` keyword in the `<side-or-corner>` parameter is not required for the prefixed gradient properties. You are encouraged to use the standard, non-prefixed gradient properties instead, as they're now widely supported ([Firefox bug 1547939](https://bugzil.la/1547939)).

#### Удалённые

- {{CSSxRef("scroll-snap-coordinate")}}, {{CSSxRef("scroll-snap-destination")}}, {{CSSxRef("scroll-snap-type-x")}} и {{CSSxRef("scroll-snap-type-y")}} были удалены.
- Свойство {{CSSxRef("scroll-snap-type")}} стало лонгхэнд, старый шортханд синтаксис `scroll-snap-type:mandatory` больше не работает.

### SVG

_Без изменений._

### JavaScript

- Новый примитив {{jsxref("BigInt")}} теперь включён по умолчанию ([Firefox bug 1527902](https://bugzil.la/1527902)).

### APIs

#### Объектная модель CSS (CSSOM)

- Наследие свойств {{domxref("CSSStyleSheet.rules", "rules")}}, {{domxref("CSSStyleSheet.addRule", "addRule()")}} и {{domxref("CSSStyleSheet.removeRule", "removeRule()")}} методов было добавлено в интерфейс {{domxref("CSSStyleSheet")}}. Это было введено в Internet Explorer 9 и никогда полностью не искоренялось, они добавили это для улучшения обратной совместимости с небольшим процентом сайтов, которые всё ещё пользовались этим ([Firefox bug 1545823](https://bugzil.la/1545823)).

#### DOM

- [Visual Viewport API](/ru/docs/Web/API/Visual_Viewport_API) было включено по умолчанию на Android ([Firefox bug 1512813](https://bugzil.la/1512813)). Добавление API для настольной версии Firefox теперь отслеживается в [Firefox bug 1551302](https://bugzil.la/1551302).
- Возможность {{domxref("Window")}} [`noreferrer`](/ru/docs/Web/API/Window/open#noreferrer) теперь поддерживается; если указана, то новый контент окон будет загружен без передачи имени хоста, IP адреса, URL и прочей идентифицирующей устройство информации ([Firefox bug 1527287](https://bugzil.la/1527287)).
- Метод {{domxref("HTMLImageElement.decode", "decode()")}} на `HTMLImageElement` реализован. Это может быть использовано для запуска загрузки и декодирования изображения до добавления его в DOM ([Firefox bug 1501794](https://bugzil.la/1501794)).
- {{domxref("XMLHttpRequest")}} был обновлён и больше не принимает нестандартное значение `moz-chunked-arraybuffer` для {{domxref("XMLHttpRequest.responseType", "responseType")}}. Код, использующий это, должен быть обновлён, чтобы [использовать Fetch API как поток](/ru/docs/Web/API/Streams_API/Using_readable_streams#Consuming_a_fetch_as_a_stream) ([Firefox bug 1120171](https://bugzil.la/1120171)).
- `XMLHttpRequest` теперь выводит предупреждения в консоль, если выполняется синхронный запрос во время обработки {{domxref("Window.unload_event", "unload")}}, {{domxref("Window.beforeunload_event", "beforeunload")}}, {{domxref("Window.pagehide_event", "pagehide")}} ([Firefox bug 980902](https://bugzil.la/980902)).
- Свойство {{domxref("Document.cookie", "cookie")}} было перенесено из интерфейса {{domxref("HTMLDocument")}} в {{domxref("Document")}}, позволяя документам отличным от {{Glossary("HTML")}} использовать куки ([Firefox bug 144795](https://bugzil.la/144795)).
- Методы {{domxref("HTMLElement.focus()")}} и {{domxref("SVGElement.focus()")}} теперь принимают необязательный объект, который может содержать булеву опцию `preventScroll`, определяющую: должна или не должна происходить блокировка браузером прокрутки элемента с фокусом в поле зрения ([Firefox bug 1374045](https://bugzil.la/1374045)).

#### События DOM

- [Firefox для Android](/ru/docs/Mozilla/Firefox_for_Android) больше не отправляет неправильное событие {{domxref("Window.resize_event", "resize")}}, пока не будет отрисован первый фрейм; это улучшит совместимость с сайтами, которые не ожидают, что это событие произойдёт ([Firefox bug 1528052](https://bugzil.la/1528052)).
- Рассылка событий для неосновных кнопок мыши было изменено ближе к спецификации; Событие {{domxref("Element.click_event", "click")}} больше не вызывается, когда неосновные кнопки мыши были нажат, в отличие от события {{domxref("Element.auxclick_event", "auxclick")}}. В дополнение, {{domxref("Element.dblclick_event", "dblclick")}} больше на срабатывает для неосновных кнопок мыши ([Firefox bug 1379466](https://bugzil.la/1379466)).
- Собственное свойство {{domxref("MouseEvent.mozPressure")}} объявлено устаревшим и теперь при вызове сопровождается предупреждением в консоли ([Firefox bug 1165211](https://bugzil.la/1165211)).

#### Медиа, Веб-аудио и WebRTC

- WebRTC был обновлён и распознаёт `null`, отправленное в обработчик события {{domxref("RTCPeerConnection.icecandidate", "icecandidate")}}, сообщая о получении, вместо того, чтобы никак не реагировать на это; когда это происходит, ICE состояние ({{domxref("RTCPeerConnection.iceGatheringState", "iceGatheringState")}}) становится `complete` ([Firefox bug 1318167](https://bugzil.la/1318167)).
- Методы {{domxref("RTCRtpReceiver")}},{{domxref("RTCRtpReceiver.getContributingSources", "getContributingSources()")}} и {{domxref("RTCRtpReceiver.getSynchronizationSources", "getSynchronizationSources()")}} теперь поддерживают видеодорожки; ранее они работали только с audio ([Firefox bug 1534466](https://bugzil.la/1534466)).
- Web Audio API интерфейс {{domxref("MediaStreamTrackAudioSourceNode")}} теперь поддерживается, как метод {{domxref("AudioContext.createMediaStreamTrackSource()")}} ([Firefox bug 1324548](https://bugzil.la/1324548)).
- {{domxref("RTCDataChannel.negotiated")}} теперь реализован ([Firefox bug 1529695](https://bugzil.la/1529695)).
- Конструктор {{domxref("MediaStreamAudioSourceNode.MediaStreamAudioSourceNode", "MediaStreamAudioSourceNode()")}} был обновлён в соответствии со спецификацией, где "first audio track" в потоке дорожка, идентификатора которой приходит первым в лексикографическом порядке ([Firefox bug 1324548](https://bugzil.la/1324548)).
- {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} больше не может быть использован из небезопасного контекста; попытки сделать это будут сопровождаться исключением `NotAllowedError`. Безопасными контекстами считаются те, которые загруженные через HTTPS, либо которые использую схему `file:///`, либо загружены из `localhost`. Сейчас, если необходимо, вы можете включить возможность совершать небезопасные вызовы `getUserMedia()`, установив надстройку `media.getusermedia.insecure.enabled` в состояние `true` ([Firefox bug 1335740](https://bugzil.la/1335740)).

  > [!NOTE]
  > В будущем, Firefox также удалит свойство {{domxref("navigator.mediaDevices")}} на незащищённых контекстах, предотвратив доступ к {{domxref("MediaDevices")}} API. **Это уже так в Nightly сборках.**

#### Удалённые

- Удалён нестандартный метод {{DOMxRef("XMLDocument.load()")}} ([Firefox bug 332175](https://bugzil.la/332175)).
- Удалён нестандартное свойство {{DOMxRef("XMLDocument.async")}} ([Firefox bug 1328138](https://bugzil.la/1328138)).
- Значение {{domxref("RTCIceCredentialType")}} `token` было удалено ([Firefox bug 1529595](https://bugzil.la/1529595)).

### HTTP

- [HTTP](/ru/docs/Web/HTTP) заголовок {{HTTPHeader("Clear-Site-Data")}} больше не поддерживает директиву `executionContexts`. This was removed due to problems with interactions between interconnections among different kinds of data at different points in the navigation process and the way the specification is designed. [Было предложено](https://github.com/w3c/webappsec-clear-site-data/issues/59) этой директивы из спецификации из-за вышеуказанных причин, включая эту ([Firefox bug 1548034](https://bugzil.la/1548034)).

#### Удалённые

- Директива {{HTTPHeader("Content-Security-Policy")}} `require-sri-for` больше не поддерживается из-за её неоднозначного статуса в спецификации. Ранее она была добавлена лишь в качестве надстройки, отключённой по умолчанию ([Firefox bug 1386214](https://bugzil.la/1386214)).

### Безопасность

- Из-за изменений вследствие [CVE-2019-11730: Same-origin policy treats all files in a directory as having the same-origin](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730), Firefox теперь обращается к файлам в одной и той же директории так, будто бы они из разных папок. Это спровоцировало некоторые побочные эффекты с файлами вида file:// (смотрите [Firefox bug file-fallout](https://bugzil.la/file-fallout)). Например, workers больше не могут быть загружены.

### Соответствия WebDriver (Marionette)

#### Исправления багов

- If `WebDriver:SwitchToWindow` changes the selection to a different window it now waits for its `focus` and `activate` events before returning ([Firefox bug 1335085](https://bugzil.la/1335085)).
- Исправлена ошибка `TypeError: this.tabModal is null`, которая иногда появлялась при взаимодействии с модальным окном или пользовательскими подсказками ([Firefox bug 1538782](https://bugzil.la/1538782))

#### Прочее

- Отключена функция принудительной выгрузки вкладок при нехватки памяти, для предотвращения магических исчезновений top-level контекстов браузера ([Firefox bug 1553748](https://bugzil.la/1553748)).
- Disabled priviledged content processes that caused HTTP authentication dialogs not to appear when navigating to a website after opening a new tab ([Firefox bug 1558763](https://bugzil.la/1558763)).

### Плагины

_Без изменений._

## Изменения для разработчиков дополнений

### Изменения API

- Функции [proxy.register()](/ru/docs/Mozilla/Add-ons/WebExtensions/API/proxy) и [proxy.unregister()](/ru/docs/Mozilla/Add-ons/WebExtensions/API/proxy) объявлены устаревшими и будут удалены в Firefox 71 ([Firefox bug 1545811](https://bugzil.la/1545811)).
- Сообщения об ошибке, когда дополнение пытается добавить папку с закладками в основную папку, теперь более интуитивно понятное ([Firefox bug 1512171](https://bugzil.la/1512171)).
- Promise, возвращённый [`browser.tabs.duplicate()`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/tabs/duplicate), выполняется сразу, пока вкладки не загружены полностью, для повышения производительности ([Firefox bug 1394376](https://bugzil.la/1394376)).
- Была добавлена поддержка chrome.storage.managed, позволяющая настройкам быть реализованным через корпоративную политику ([Firefox bug 1230802](https://bugzil.la/1230802)).
- Появилась опция Групповой Политики, позволяющая добавить все расширения в чёрный список, за исключением тех, что внесены в белый, ([Firefox bug 1522823](https://bugzil.la/1522823)).

### Изменения манифеста

_Без изменений._

## Предыдущие версии

{{Firefox_for_developers(67)}}
