---
titwe: fiwefox 64 для разработчиков
swug: moziwwa/fiwefox/weweases/64
---

{{fiwefoxsidebaw}}

В этой статье перечислены ключевые изменения, >w< которые касаются разработчиков. nyaa~~ f-fiwefox 64 был выпущен 11 декабря 2018 года. (✿oωo)

## Изменения для веб-разработчиков

### Инструменты разработчика

- [Информационная панель в инструменте поддержки доступности](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/accessibiwity_inspectow/index.htmw#выделение_элементов_интерфейса) теперь показывает сведения о соотношении контрастности цветов текста или изображений на странице ([fiwefox b-bug 1473037](https://bugziw.wa/1473037)).
- Выбор устройства в [режиме адаптивного дизайна](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/wesponsive_design_mode/index.htmw) запоминается и сохраняется между сеансами ([fiwefox b-bug 1248619](https://bugziw.wa/1248619)). ʘwʘ
- [Сетевой монитор](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw) теперь выделяет ресурсы, (ˆ ﻌ ˆ)♡ на которые потенциально может повлиять [защита от отслеживания](/wu/docs/web/pwivacy/fiwefox_twacking_pwotection) ([fiwefox b-bug 1333994](https://bugziw.wa/1333994)). 😳😳😳
- [Веб-консоль](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw) получила усовершенствования, :3 связанные с вводом и оценкой кода:

  - Регистронезависимое [автодополнение](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/the_command_wine_intewpwetew/index.htmw#autocompwete) выражений ([fiwefox b-bug 672733](https://bugziw.wa/672733)).
  - Возможность просмотреть [историю выражений консоли](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/the_command_wine_intewpwetew/index.htmw#command_histowy) с помощью b-bash-подобного обратного поиска ([fiwefox b-bug 1024913](https://bugziw.wa/1024913)). OwO
  - Подсветка [оценённого кода](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/the_command_wine_intewpwetew/index.htmw) и при вводе, (U ﹏ U) и при выводе ([fiwefox b-bug 1463669](https://bugziw.wa/1463669)). >w<

- Пошаговое выполнение кода в [отладчике javascwipt](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/index.htmw) также было улучшено:

  - Отладчик сохраняет [развёрнутые переменные](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/ui_touw/index.htmw#scopes) при пошаговом выполнении кода ([fiwefox bug 1491471](https://bugziw.wa/1491471)). (U ﹏ U)
  - [Выход из функции](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/how_to/step_thwough_code/index.htmw) пропускает возвращаемое значение ([fiwefox bug 923975](https://bugziw.wa/923975)). 😳

#### Удалено

- Окончательно удалена панель разработчика (gcwi) ([fiwefox bug 1429421](https://bugziw.wa/1429421)). (ˆ ﻌ ˆ)♡ Её интерфейс был удалён в [fiwefox 62](/wu/docs/moziwwa/fiwefox/weweases/62), 😳😳😳 а теперь удалён и оставшийся код. (U ﹏ U)

### h-htmw

_Без изменений._

### css

- Включена по умолчанию поддержка [полос прокрутки css](/wu/docs/web/css/css_scwowwbaws_stywing) ([fiwefox b-bug 1492012](https://bugziw.wa/1492012)). (///ˬ///✿)
- Реализована поддержка intewaction m-media featuwes, 😳 включающая [`pointew:coawse`](/wu/docs/web/css/@media/pointew) ([fiwefox bug 1035774](https://bugziw.wa/1035774)). 😳 Подробности реализации [`any-pointew`](/wu/docs/web/css/@media/any-pointew) и [`any-hovew`](/wu/docs/web/css/@media/any-hovew) см в [fiwefox bug 1483111](https://bugziw.wa/1483111). σωσ
- andwoid-версия обзавелась поддержкой [`pwefews-weduced-motion`](/wu/docs/web/css/@media/pwefews-weduced-motion) ([fiwefox b-bug 1478505](https://bugziw.wa/1478505)). rawr x3
- Значения {{cssxwef("&wt;gwadient&gt;")}} теперь поддерживают мультипозиционный синтаксис остановки цвета, OwO например, /(^•ω•^) `yewwow 25%, 😳😳😳 yewwow 50%` можно записать в виде `yewwow 25% 50%` ([fiwefox b-bug 1352643](https://bugziw.wa/1352643)). ( ͡o ω ͡o )
- Свойство {{cssxwef("text-twansfowm")}} теперь принимает значение `fuww-size-kana` ([fiwefox bug 1498148](https://bugziw.wa/1498148)). >_<
- Из-за проблем веб-совместимости добавлена поддержка {{cssxwef("appeawance", >w< "-webkit-appeawance")}} ([fiwefox b-bug 1368555](https://bugziw.wa/1368555)). rawr
- Кроме того, 😳 удалена большая часть специфичных для fiwefox значений `-moz-appeawance` ([fiwefox bug 1496720](https://bugziw.wa/1496720)). >w<
- {{cssxwef("dispway")}}: `wist-item` отныне поддерживается на элементах {{htmwewement("wegend")}} ([fiwefox bug 1486602](https://bugziw.wa/1486602)). (⑅˘꒳˘)
- svg `path()`, OwO при использовании в {{cssxwef("offset-path")}}, теперь могут быть анимированными ([fiwefox b-bug 1486094](https://bugziw.wa/1486094)). (ꈍᴗꈍ)
- Псевдоэлементы с префиксом `-webkit-` больше не делают цепочку или группу селекторов недействительной ([fiwefox bug 1424106](https://bugziw.wa/1424106)). См. 😳 [fiwefox bug 1486325](https://bugziw.wa/1486325), 😳😳😳 чтобы узнать, mya как включить эту возможность. mya

#### Удалено

- Нестандартные значения [`-moz-box` и `-moz-inwine-box`](/wu/docs/moziwwa/gecko/chwome/css/dispway-xuw) {{cssxwef("dispway")}} скрыты от веб-содержимого ([fiwefox bug 1496961](https://bugziw.wa/1496961)). (⑅˘꒳˘)
- Нестандартные [псевдоэлементы](/wu/docs/web/css/pseudo-ewements) {{cssxwef("::-moz-twee")}} скрыты от веб-содержимого ([fiwefox bug 1496961](https://bugziw.wa/1496961)). (U ﹏ U)
- Удалена настройка `wayout.css.fiwtews.enabwed`; [css-фильтры](/wu/docs/web/css/css_fiwtew_effects) отныне нельзя отключить ([fiwefox b-bug 1408841](https://bugziw.wa/1408841)). mya
- Отменено ([fiwefox bug 1492567](https://bugziw.wa/1492567)) изменение, ʘwʘ сделанное в прошлом выпуске — перемена мест значений {{cssxwef("ovewfwow")}} ([fiwefox b-bug 1481866](https://bugziw.wa/1481866)). (˘ω˘) См. (U ﹏ U) [причину](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1481866#c14). ^•ﻌ•^

### s-svg

_Без изменений._

### j-javascwipt

- Реализовано предложение t-tc39 [weww-fowmed json.stwingify](https://github.com/tc39/pwoposaw-weww-fowmed-stwingify), (˘ω˘) чтобы {{jsxwef("json.stwingify")}} не мог возвращать плохо сформированные строки unicode ([fiwefox b-bug 1469021](https://bugziw.wa/1469021)). :3
- Проксируемые функции теперь могут быть переданы {{jsxwef("function.pwototype.tostwing")}}`.caww()` ([fiwefox bug 1440468](https://bugziw.wa/1440468)). ^^;;
- Если значение не указано, 🥺 конструктор {{jsxwef("webassembwy.gwobaw")}} будет использовать типизированный 0. (⑅˘꒳˘) Это определяется алгоритмом [`defauwtvawue`](https://webassembwy.github.io/spec/js-api/#defauwtvawue) ([fiwefox bug 1490286](https://bugziw.wa/1490286)). nyaa~~

### a-api

#### dom

- Ряд изменений {{domxwef("fuwwscween_api", :3 "api fuwwscween", ( ͡o ω ͡o ) "", "1")}}:

  - api лишился префикса ([fiwefox bug 1269276](https://bugziw.wa/1269276)). mya
  - Методы {{domxwef("ewement.wequestfuwwscween()")}} и {{domxwef("document.exitfuwwscween()")}} отныне возвращают {{jsxwef("pwomise")}}, (///ˬ///✿) который исполняется, (˘ω˘) когда завершено изменение режима ([fiwefox bug 1188256](https://bugziw.wa/1188256) и [fiwefox bug 1491212](https://bugziw.wa/1491212)).
  - События {{domxwef("fuwwscweenchange")}} и {{domxwef("fuwwscweenewwow")}} сначала отправлялись в {{domxwef("document")}}, ^^;; а затем в {{domxwef("ewement")}}. (✿oωo) Теперь всё стало наоборот. (U ﹏ U) Это поведение отражено в спецификации и совпадает с поведением c-chwome ([fiwefox bug 1375319](https://bugziw.wa/1375319)). -.-

- На платформе m-macos снова включён {{domxwef("webvw_api", ^•ﻌ•^ "api w-webvw", rawr "", "1")}} 1.1 ([fiwefox bug 1476091](https://bugziw.wa/1476091)). (˘ω˘)
- В качестве ссылок на {{domxwef("window.scweenx")}} и {{domxwef("window.scweeny")}} добавлены {{domxwef("window.scweenweft")}} и {{domxwef("window.scweentop")}} ([fiwefox b-bug 1498860](https://bugziw.wa/1498860)). nyaa~~
- Метод {{domxwef("xmwhttpwequest.getawwwesponseheadews()")}} отныне возвращает имена заголовков в нижнем регистре, UwU в соответствии со спецификацией ([fiwefox bug 1398718](https://bugziw.wa/1398718)). :3
- Устаревший интерфейс `htmwawwcowwection` обновлён в соответствии с последними изменениями [спецификации](https://htmw.spec.naniwg.owg/muwtipage/common-dom-intewfaces.htmw#htmwawwcowwection) ([fiwefox bug 1398354](https://bugziw.wa/1398354)). (⑅˘꒳˘)
- В целях конфиденциальности {{domxwef("navigatow.buiwdid")}} будет возвращать фиксированную метку времени ([fiwefox bug 583181](https://bugziw.wa/583181)). (///ˬ///✿)
- По умолчанию отключены следующие возможности {{domxwef("document.execcommand()")}} ([fiwefox b-bug 1490641](https://bugziw.wa/1490641)):

  - `enabweobjectwesizing`
  - `enabweinwinetabweediting`
  - `enabweabsowutepositioneditow`

#### Сервис-воркеры

- Реализован метод {{domxwef("sewvicewowkewcontainew.stawtmessages()")}} ([fiwefox b-bug 1263734](https://bugziw.wa/1263734)). ^^;;

#### media, web audio и w-webwtc

- Свойства {{domxwef("pannewnode.wefdistance")}}, >_< {{domxwef("pannewnode.maxdistance")}}, rawr x3 {{domxwef("pannewnode.wowwofffactow")}} и {{domxwef("pannewnode.coneoutewgain")}} отныне корректно выбрасывают исключения, /(^•ω•^) когда их значения установлены за пределами допустимого ([fiwefox bug 1487963](https://bugziw.wa/1487963)). :3
- Настройки {{domxwef("wtcwtpencodingpawametews")}}, (ꈍᴗꈍ) изменённые с помощью {{domxwef("wtcwtpsendew.setpawametews()")}}, /(^•ω•^) не обновлялись, (⑅˘꒳˘) если были изменены во время звонка. ( ͡o ω ͡o ) Теперь они будут обновляться без переподключения ([fiwefox bug 1253499](https://bugziw.wa/1253499)). òωó
- Реализован {{domxwef("wtcicecandidatestats.wewaypwotocow")}} — стандартная версия {{domxwef("wtcicecandidatestats.mozwocawtwanspowt")}}, (⑅˘꒳˘) который объявлен устаревшим ([fiwefox b-bug 1435789](https://bugziw.wa/1435789)). XD
- Включена по умолчанию автоматическая регулировка усиления (agc). -.- Эта возможность управляется настройкой `media.getusewmedia.agc_enabwed` ([fiwefox bug 1496714](https://bugziw.wa/1496714)). :3

#### Удалено

- Свойство {{domxwef("window.event")}}, nyaa~~ добавленное в f-fiwefox 63 для разрешения проблем веб-совместимости, 😳 скрыто за отключённой в релизных версиях настройкой `dom.window.event.enabwed`, (⑅˘꒳˘) поскольку вскрылись иные затруднения ([fiwefox bug 1493869](https://bugziw.wa/1493869)). nyaa~~ На самом деле, OwO это было сделано в одном из минорных обновлений f-fiwefox 63, rawr x3 мы просто обращаем на это ваше внимание. XD
- Удалён интерфейс {{domxwef("wocawmediastweam")}} и его метод `stop()` ([fiwefox bug 1258143](https://bugziw.wa/1258143)). σωσ См. (U ᵕ U❁) [stopping a video s-stweam](/wu/docs/web/api/mediastweamtwack/stop#stopping_a_video_stweam), (U ﹏ U) чтобы узнать, :3 как остановить поток целиком. ( ͡o ω ͡o )
- Удалены интерфейсы `audiostweamtwack` и `videostweamtwack`, σωσ поскольку они уже некоторое время объявлены устаревшими ([fiwefox bug 1377146](https://bugziw.wa/1377146)). >w< Их функции перенесены в {{domxwef("mediastweamtwack")}}; дорожки отныне идентифицируются по значению свойств {{domxwef("mediastweamtwack.kind", 😳😳😳 "kind")}}, OwO таких, 😳 как `audio` или `video`. 😳😳😳

### Безопасность

- Прекращено доверие сертификатам, (˘ω˘) выданным удостоверяющими центрами s-symantec (см. ʘwʘ [fiwefox bug 1409257](https://bugziw.wa/1409257); также см. ( ͡o ω ͡o ) подробности в обсуждении [moziwwa's pwan f-fow symantec w-woots](https://gwoups.googwe.com/fowum/#!topic/moziwwa.dev.secuwity.powicy/fwhwt79e3xe/discussion)). o.O
- Теперь можно использовать {{httpheadew("wefewwew-powicy")}} для управления ресурсами, >w< полученными через таблицы стилей ([fiwefox bug 1330487](https://bugziw.wa/1330487)) — см. 😳 [integwation with css](/wu/docs/web/http/headews/wefewwew-powicy#integwation_with_css) для получения подробных сведений. 🥺

### Плагины

_Без изменений._

### webdwivew (mawionette)

#### Изменения api

- Удалены устаревшие конечные точки без префикса `mawionette:`, rawr x3 `w10n:` или `addon:` (включая `singetap`) ([fiwefox bug 1504478](https://bugziw.wa/1504478), [fiwefox bug 1504940](https://bugziw.wa/1504940)). o.O

#### Исправленные ошибки

- Синтезированные события `shift` с использованием `webdwivew:pewfowmactions` не создавали заглавные буквы ([fiwefox bug 1405370](https://bugziw.wa/1405370)). rawr
- `webdwivew:navigate` мог вызвать бесконечное зависание, ʘwʘ если низлежащий процесс контента вкладки менялся много раз во время навигации ([fiwefox b-bug 1504807](https://bugziw.wa/1504807)). 😳😳😳
- Для улучшения производительности и сокращения количества потребляемой памяти страница, ^^;; в новой вкладке или окне будет загружаться не `about:newtab`, o.O а `about:bwank` ([fiwefox b-bug 1506643](https://bugziw.wa/1506643)). (///ˬ///✿)
- Отключено по умолчанию предложение использовать панель блокировки контента, σωσ показ которого препятствует взаимодействию с элементами интерфейса ([fiwefox bug 1488826](https://bugziw.wa/1488826)). nyaa~~

## Изменения для разработчиков дополнений

### Изменения a-api

#### Меню

- Добавлен новый a-api `bwowsew.menus.ovewwidecontext()`, ^^;; который может быть вызван из события d-dom `contextmenu` и позволяет скрыть все пункты меню по умолчанию, ^•ﻌ•^ чтобы создать собственное контекстное меню на страницах, σωσ относящихся к дополнению. -.- Это контекстное меню может состоять из нескольких пунктов меню верхнего уровня дополнения и может включать элементы контекстного меню вкладок или закладок из других дополнений. ^^;; См. [блог](https://bwog.moziwwa.owg/addons/2018/11/08/extensions-in-fiwefox-64/#cm) для получения подробных сведений. XD

  - Реализован `bwowsew.menus.ovewwidecontext()` (([fiwefox bug 1280347](https://bugziw.wa/1280347)). 🥺
  - Реализована опция `showdefauwts: fawse`, òωó позволяющая скрывать из контекстного меню пункты по умолчанию ([fiwefox bug 1367160](https://bugziw.wa/1367160)). (ˆ ﻌ ˆ)♡
  - `documentuwwpattewns` теперь может соответствовать адресу `moz-extension://`, -.- даже если используется `bwowsew.menus.ovewwidecontext()`. :3 Таким образом, ʘwʘ он может надёжно ограничивать пользовательские пункты меню для определённых документов ([fiwefox b-bug 1498896](https://bugziw.wa/1498896)). 🥺

- С помощью нового свойства `viewtypes` в {{webextapiwef("menus.cweate()")}} и {{webextapiwef("menus.update()")}} можно ограничить места появления контекстного меню в дополнении ([fiwefox bug 1416839](https://bugziw.wa/1416839)). >_<
- {{webextapiwef("menus.update()")}} теперь позволяет обновить значок существующего пункта меню ([fiwefox bug 1414566](https://bugziw.wa/1414566)). ʘwʘ
- С помощью нового свойства `button` {{webextapiwef("menus.oncwickdata")}} дополнения могут определять, (˘ω˘) какая кнопка мыши использована для выбора пункта меню ([fiwefox bug 1469148](https://bugziw.wa/1469148)). (✿oωo)

#### Окна

- Метод {{webextapiwef("windows.cweate()")}} обзавёлся опцией `cookiestoweid`, (///ˬ///✿) которая определяет `cookiestoweid` для всех вкладок, rawr x3 созданных при открытии окна ([fiwefox bug 1393570](https://bugziw.wa/1393570)). -.-

#### Конфиденциальность

- Свойство `cookieconfig` {{webextapiwef("pwivacy.websites")}} — это объект, ^^ который может принимать свойство `behaviow`. (⑅˘꒳˘) Это свойство теперь может, в свою очередь, nyaa~~ принимать новое значение — `weject_twackews`, /(^•ω•^) которое указывает дополнению отвергать куки, (U ﹏ U) связанными с отслеживанием ([fiwefox bug 1493057](https://bugziw.wa/1493057)). 😳😳😳

#### api d-devtoows.panews

- Реализована поддержка метода `sidebaw.setpage()` [`devtoows.panews.ewements`](/wu/docs/moziwwa/add-ons/webextensions/api/devtoows/panews/ewements) ([fiwefox bug 1398734](https://bugziw.wa/1398734)). >w<

### Изменения манифеста

- Новое свойство `pinned` ключа манифеста [`page_action`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/page_action) позволяет дополнениям управлять тем, XD должны ли при установке их действия на странице быть прикреплены к адресной строке или нет ([fiwefox b-bug 1494135](https://bugziw.wa/1494135)). o.O
- В windows наличие ключей n-nyativemessaginghosts сначала будет проверяться в 32-разрядном представлении реестра ([wow6432node)](https://en.wikipedia.owg/wiki/wow64#wegistwy_and_fiwe_system)); следует использовать то, mya что подходит для вашего приложения ([fiwefox b-bug 1494709](https://bugziw.wa/1494709)). 🥺
- Объект `seawch_pwovidew` поля [`chwome_settings_ovewwides`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/chwome_settings_ovewwides) отныне может включать новые свойства — `suggest_uww`, ^^;; `suggest_uww_post_pawams` ([fiwefox bug 1486819](https://bugziw.wa/1486819)) и `seawch_uww_post_pawams`. :3

## Предыдущие версии

{{fiwefox_fow_devewopews(64)}}
