---
title: Firefox 64 для разработчиков
slug: Mozilla/Firefox/Releases/64
---

{{FirefoxSidebar}}

В этой статье перечислены ключевые изменения, которые касаются разработчиков. Firefox 64 был выпущен 11 декабря 2018 года.

## Изменения для веб-разработчиков

### Инструменты разработчика

- [Информационная панель в инструменте поддержки доступности](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#выделение_элементов_интерфейса) теперь показывает сведения о соотношении контрастности цветов текста или изображений на странице ([Firefox bug 1473037](https://bugzil.la/1473037)).
- Выбор устройства в [режиме адаптивного дизайна](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) запоминается и сохраняется между сеансами ([Firefox bug 1248619](https://bugzil.la/1248619)).
- [Сетевой монитор](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) теперь выделяет ресурсы, на которые потенциально может повлиять [защита от отслеживания](/ru/docs/Web/Privacy/Firefox_tracking_protection) ([Firefox bug 1333994](https://bugzil.la/1333994)).
- [Веб-консоль](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) получила усовершенствования, связанные с вводом и оценкой кода:

  - Регистронезависимое [автодополнение](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#autocomplete) выражений ([Firefox bug 672733](https://bugzil.la/672733)).
  - Возможность просмотреть [историю выражений консоли](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#command_history) с помощью bash-подобного обратного поиска ([Firefox bug 1024913](https://bugzil.la/1024913)).
  - Подсветка [оценённого кода](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html) и при вводе, и при выводе ([Firefox bug 1463669](https://bugzil.la/1463669)).

- Пошаговое выполнение кода в [отладчике JavaScript](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) также было улучшено:

  - Отладчик сохраняет [развёрнутые переменные](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#scopes) при пошаговом выполнении кода ([Firefox bug 1491471](https://bugzil.la/1491471)).
  - [Выход из функции](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/step_through_code/index.html) пропускает возвращаемое значение ([Firefox bug 923975](https://bugzil.la/923975)).

#### Удалено

- Окончательно удалена панель разработчика (GCLI) ([Firefox bug 1429421](https://bugzil.la/1429421)). Её интерфейс был удалён в [Firefox 62](/ru/docs/Mozilla/Firefox/Releases/62), а теперь удалён и оставшийся код.

### HTML

_Без изменений._

### CSS

- Включена по умолчанию поддержка [полос прокрутки CSS](/ru/docs/Web/CSS/CSS_scrollbars_styling) ([Firefox bug 1492012](https://bugzil.la/1492012)).
- Реализована поддержка Interaction Media Features, включающая [`pointer:coarse`](/ru/docs/Web/CSS/@media/pointer) ([Firefox bug 1035774](https://bugzil.la/1035774)). Подробности реализации [`any-pointer`](/ru/docs/Web/CSS/@media/any-pointer) и [`any-hover`](/ru/docs/Web/CSS/@media/any-hover) см в [Firefox bug 1483111](https://bugzil.la/1483111).
- Android-версия обзавелась поддержкой [`prefers-reduced-motion`](/ru/docs/Web/CSS/@media/prefers-reduced-motion) ([Firefox bug 1478505](https://bugzil.la/1478505)).
- Значения {{cssxref("&lt;gradient&gt;")}} теперь поддерживают мультипозиционный синтаксис остановки цвета, например, `yellow 25%, yellow 50%` можно записать в виде `yellow 25% 50%` ([Firefox bug 1352643](https://bugzil.la/1352643)).
- Свойство {{cssxref("text-transform")}} теперь принимает значение `full-size-kana` ([Firefox bug 1498148](https://bugzil.la/1498148)).
- Из-за проблем веб-совместимости добавлена поддержка {{cssxref("appearance", "-webkit-appearance")}} ([Firefox bug 1368555](https://bugzil.la/1368555)).
- Кроме того, удалена большая часть специфичных для Firefox значений `-moz-appearance` ([Firefox bug 1496720](https://bugzil.la/1496720)).
- {{cssxref("display")}}: `list-item` отныне поддерживается на элементах {{htmlelement("legend")}} ([Firefox bug 1486602](https://bugzil.la/1486602)).
- SVG `path()`, при использовании в {{cssxref("offset-path")}}, теперь могут быть анимированными ([Firefox bug 1486094](https://bugzil.la/1486094)).
- Псевдоэлементы с префиксом `-webkit-` больше не делают цепочку или группу селекторов недействительной ([Firefox bug 1424106](https://bugzil.la/1424106)). См. [Firefox bug 1486325](https://bugzil.la/1486325), чтобы узнать, как включить эту возможность.

#### Удалено

- Нестандартные значения [`-moz-box` и `-moz-inline-box`](/ru/docs/Mozilla/Gecko/Chrome/CSS/display-xul) {{CSSxRef("display")}} скрыты от веб-содержимого ([Firefox bug 1496961](https://bugzil.la/1496961)).
- Нестандартные [псевдоэлементы](/ru/docs/Web/CSS/Pseudo-elements) {{CSSxRef("::-moz-tree")}} скрыты от веб-содержимого ([Firefox bug 1496961](https://bugzil.la/1496961)).
- Удалена настройка `layout.css.filters.enabled`; [CSS-фильтры](/ru/docs/Web/CSS/CSS_filter_effects) отныне нельзя отключить ([Firefox bug 1408841](https://bugzil.la/1408841)).
- Отменено ([Firefox bug 1492567](https://bugzil.la/1492567)) изменение, сделанное в прошлом выпуске — перемена мест значений {{cssxref("overflow")}} ([Firefox bug 1481866](https://bugzil.la/1481866)). См. [причину](https://bugzilla.mozilla.org/show_bug.cgi?id=1481866#c14).

### SVG

_Без изменений._

### JavaScript

- Реализовано предложение TC39 [Well-formed JSON.stringify](https://github.com/tc39/proposal-well-formed-stringify), чтобы {{jsxref("JSON.stringify")}} не мог возвращать плохо сформированные строки Unicode ([Firefox bug 1469021](https://bugzil.la/1469021)).
- Проксируемые функции теперь могут быть переданы {{jsxref("Function.prototype.toString")}}`.call()` ([Firefox bug 1440468](https://bugzil.la/1440468)).
- Если значение не указано, конструктор {{jsxref("WebAssembly.Global")}} будет использовать типизированный 0. Это определяется алгоритмом [`DefaultValue`](https://webassembly.github.io/spec/js-api/#defaultvalue) ([Firefox bug 1490286](https://bugzil.la/1490286)).

### API

#### DOM

- Ряд изменений {{domxref("Fullscreen_API", "API Fullscreen", "", "1")}}:

  - API лишился префикса ([Firefox bug 1269276](https://bugzil.la/1269276)).
  - Методы {{domxref("Element.requestFullscreen()")}} и {{domxref("Document.exitFullscreen()")}} отныне возвращают {{jsxref("Promise")}}, который исполняется, когда завершено изменение режима ([Firefox bug 1188256](https://bugzil.la/1188256) и [Firefox bug 1491212](https://bugzil.la/1491212)).
  - События {{domxref("fullscreenchange")}} и {{domxref("fullscreenerror")}} сначала отправлялись в {{domxref("Document")}}, а затем в {{domxref("Element")}}. Теперь всё стало наоборот. Это поведение отражено в спецификации и совпадает с поведением Chrome ([Firefox bug 1375319](https://bugzil.la/1375319)).

- На платформе macOS снова включён {{domxref("WebVR_API", "API WebVR", "", "1")}} 1.1 ([Firefox bug 1476091](https://bugzil.la/1476091)).
- В качестве ссылок на {{domxref("Window.screenX")}} и {{domxref("Window.screenY")}} добавлены {{domxref("Window.screenLeft")}} и {{domxref("Window.screenTop")}} ([Firefox bug 1498860](https://bugzil.la/1498860)).
- Метод {{domxref("XMLHttpRequest.getAllResponseHeaders()")}} отныне возвращает имена заголовков в нижнем регистре, в соответствии со спецификацией ([Firefox bug 1398718](https://bugzil.la/1398718)).
- Устаревший интерфейс `HTMLAllCollection` обновлён в соответствии с последними изменениями [спецификации](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#htmlallcollection) ([Firefox bug 1398354](https://bugzil.la/1398354)).
- В целях конфиденциальности {{domxref("Navigator.buildID")}} будет возвращать фиксированную метку времени ([Firefox bug 583181](https://bugzil.la/583181)).
- По умолчанию отключены следующие возможности {{domxref("Document.execCommand()")}} ([Firefox bug 1490641](https://bugzil.la/1490641)):

  - `enableObjectResizing`
  - `enableInlineTableEditing`
  - `enableAbsolutePositionEditor`

#### Сервис-воркеры

- Реализован метод {{domxref("ServiceWorkerContainer.startMessages()")}} ([Firefox bug 1263734](https://bugzil.la/1263734)).

#### Media, Web Audio и WebRTC

- Свойства {{domxref("PannerNode.refDistance")}}, {{domxref("PannerNode.maxDistance")}}, {{domxref("PannerNode.rolloffFactor")}} и {{domxref("PannerNode.coneOuterGain")}} отныне корректно выбрасывают исключения, когда их значения установлены за пределами допустимого ([Firefox bug 1487963](https://bugzil.la/1487963)).
- Настройки {{domxref("RTCRtpEncodingParameters")}}, изменённые с помощью {{domxref("RTCRtpSender.setParameters()")}}, не обновлялись, если были изменены во время звонка. Теперь они будут обновляться без переподключения ([Firefox bug 1253499](https://bugzil.la/1253499)).
- Реализован {{domxref("RTCIceCandidateStats.relayProtocol")}} — стандартная версия {{domxref("RTCIceCandidateStats.mozLocalTransport")}}, который объявлен устаревшим ([Firefox bug 1435789](https://bugzil.la/1435789)).
- Включена по умолчанию автоматическая регулировка усиления (AGC). Эта возможность управляется настройкой `media.getusermedia.agc_enabled` ([Firefox bug 1496714](https://bugzil.la/1496714)).

#### Удалено

- Свойство {{domxref("Window.event")}}, добавленное в Firefox 63 для разрешения проблем веб-совместимости, скрыто за отключённой в релизных версиях настройкой `dom.window.event.enabled`, поскольку вскрылись иные затруднения ([Firefox bug 1493869](https://bugzil.la/1493869)). На самом деле, это было сделано в одном из минорных обновлений Firefox 63, мы просто обращаем на это ваше внимание.
- Удалён интерфейс {{domxref("LocalMediaStream")}} и его метод `stop()` ([Firefox bug 1258143](https://bugzil.la/1258143)). См. [Stopping a video stream](/ru/docs/Web/API/MediaStreamTrack/stop#stopping_a_video_stream), чтобы узнать, как остановить поток целиком.
- Удалены интерфейсы `AudioStreamTrack` и `VideoStreamTrack`, поскольку они уже некоторое время объявлены устаревшими ([Firefox bug 1377146](https://bugzil.la/1377146)). Их функции перенесены в {{domxref("MediaStreamTrack")}}; дорожки отныне идентифицируются по значению свойств {{domxref("MediaStreamTrack.kind", "kind")}}, таких, как `audio` или `video`.

### Безопасность

- Прекращено доверие сертификатам, выданным удостоверяющими центрами Symantec (см. [Firefox bug 1409257](https://bugzil.la/1409257); также см. подробности в обсуждении [Mozilla's Plan for Symantec Roots](https://groups.google.com/forum/#!topic/mozilla.dev.security.policy/FLHRT79e3XE/discussion)).
- Теперь можно использовать {{httpheader("Referrer-Policy")}} для управления ресурсами, полученными через таблицы стилей ([Firefox bug 1330487](https://bugzil.la/1330487)) — см. [Integration with CSS](/ru/docs/Web/HTTP/Headers/Referrer-Policy#integration_with_css) для получения подробных сведений.

### Плагины

_Без изменений._

### WebDriver (Marionette)

#### Изменения API

- Удалены устаревшие конечные точки без префикса `Marionette:`, `L10n:` или `Addon:` (включая `singeTap`) ([Firefox bug 1504478](https://bugzil.la/1504478), [Firefox bug 1504940](https://bugzil.la/1504940)).

#### Исправленные ошибки

- Синтезированные события `Shift` с использованием `WebDriver:PerformActions` не создавали заглавные буквы ([Firefox bug 1405370](https://bugzil.la/1405370)).
- `WebDriver:Navigate` мог вызвать бесконечное зависание, если низлежащий процесс контента вкладки менялся много раз во время навигации ([Firefox bug 1504807](https://bugzil.la/1504807)).
- Для улучшения производительности и сокращения количества потребляемой памяти страница, в новой вкладке или окне будет загружаться не `about:newtab`, а `about:blank` ([Firefox bug 1506643](https://bugzil.la/1506643)).
- Отключено по умолчанию предложение использовать панель блокировки контента, показ которого препятствует взаимодействию с элементами интерфейса ([Firefox bug 1488826](https://bugzil.la/1488826)).

## Изменения для разработчиков дополнений

### Изменения API

#### Меню

- Добавлен новый API `browser.menus.overrideContext()`, который может быть вызван из события DOM `contextmenu` и позволяет скрыть все пункты меню по умолчанию, чтобы создать собственное контекстное меню на страницах, относящихся к дополнению. Это контекстное меню может состоять из нескольких пунктов меню верхнего уровня дополнения и может включать элементы контекстного меню вкладок или закладок из других дополнений. См. [блог](https://blog.mozilla.org/addons/2018/11/08/extensions-in-firefox-64/#cm) для получения подробных сведений.

  - Реализован `browser.menus.overrideContext()` (([Firefox bug 1280347](https://bugzil.la/1280347)).
  - Реализована опция `showDefaults: false`, позволяющая скрывать из контекстного меню пункты по умолчанию ([Firefox bug 1367160](https://bugzil.la/1367160)).
  - `documentURLPatterns` теперь может соответствовать адресу `moz-extension://`, даже если используется `browser.menus.overrideContext()`. Таким образом, он может надёжно ограничивать пользовательские пункты меню для определённых документов ([Firefox bug 1498896](https://bugzil.la/1498896)).

- С помощью нового свойства `viewTypes` в {{WebExtAPIRef("menus.create()")}} и {{WebExtAPIRef("menus.update()")}} можно ограничить места появления контекстного меню в дополнении ([Firefox bug 1416839](https://bugzil.la/1416839)).
- {{WebExtAPIRef("menus.update()")}} теперь позволяет обновить значок существующего пункта меню ([Firefox bug 1414566](https://bugzil.la/1414566)).
- С помощью нового свойства `button` {{WebExtAPIRef("menus.OnClickData")}} дополнения могут определять, какая кнопка мыши использована для выбора пункта меню ([Firefox bug 1469148](https://bugzil.la/1469148)).

#### Окна

- Метод {{WebExtAPIRef("windows.create()")}} обзавёлся опцией `cookieStoreId`, которая определяет `CookieStoreId` для всех вкладок, созданных при открытии окна ([Firefox bug 1393570](https://bugzil.la/1393570)).

#### Конфиденциальность

- Свойство `cookieConfig` {{WebExtAPIRef("privacy.websites")}} — это объект, который может принимать свойство `behavior`. Это свойство теперь может, в свою очередь, принимать новое значение — `reject_trackers`, которое указывает дополнению отвергать куки, связанными с отслеживанием ([Firefox bug 1493057](https://bugzil.la/1493057)).

#### API devtools.panels

- Реализована поддержка метода `Sidebar.setPage()` [`devtools.panels.elements`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/elements) ([Firefox bug 1398734](https://bugzil.la/1398734)).

### Изменения манифеста

- Новое свойство `pinned` ключа манифеста [`page_action`](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) позволяет дополнениям управлять тем, должны ли при установке их действия на странице быть прикреплены к адресной строке или нет ([Firefox bug 1494135](https://bugzil.la/1494135)).
- В Windows наличие ключей NativeMessagingHosts сначала будет проверяться в 32-разрядном представлении реестра ([Wow6432Node)](https://en.wikipedia.org/wiki/WoW64#Registry_and_file_system)); следует использовать то, что подходит для вашего приложения ([Firefox bug 1494709](https://bugzil.la/1494709)).
- Объект `search_provider` поля [`chrome_settings_overrides`](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides) отныне может включать новые свойства — `suggest_url`, `suggest_url_post_params` ([Firefox bug 1486819](https://bugzil.la/1486819)) и `search_url_post_params`.

## Предыдущие версии

{{Firefox_for_developers(64)}}
