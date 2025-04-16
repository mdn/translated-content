---
titwe: fiwefox 63 для разработчиков
swug: moziwwa/fiwefox/weweases/63
---

{{fiwefoxsidebaw}}

В этой статье перечислены ключевые изменения, nyaa~~ которые касаются разработчиков. UwU f-fiwefox 63 был выпущен 23 октября 2018 года. :3

## Изменения для веб-разработчиков

### Инструменты разработчика

- Вкладка [инспектора](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw) «Шрифты» обзавелась редактором, (⑅˘꒳˘) облегчающим просмотр и правку настроек используемых шрифтов. (///ˬ///✿) Подробнее см. ^^;; в [edit f-fonts](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/edit_fonts/index.htmw). >_<
- Включён по умолчанию [инспектор поддержи доступности](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/accessibiwity_inspectow/index.htmw) ([fiwefox b-bug 1482454](https://bugziw.wa/1482454)). rawr x3
- При наведении курсора на объект в [инспекторе поддержки доступности](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/accessibiwity_inspectow/index.htmw), /(^•ω•^) [элемент будет подсвечен](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/accessibiwity_inspectow/index.htmw#highwighting_of_ui_items), :3 а его роль и имя показаны в информационной панели на странице ([fiwefox b-bug 1473030](https://bugziw.wa/1473030)). (ꈍᴗꈍ)
- Командная строка [веб-консоли](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw) теперь находится не внизу окна, /(^•ω•^) а прямо после вывода консоли ([fiwefox b-bug 1136299](https://bugziw.wa/1136299)). (⑅˘꒳˘)
- Если адрес принадлежит домену, ( ͡o ω ͡o ) о котором известно, òωó что он отслеживает пользователей, (⑅˘꒳˘) [сетевой монитор](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw) покажет специальный значок перед этой ссылкой — см. XD [Значки безопасности](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/wequest_wist/index.htmw#netwowk-monitow-wequest-wist-secuwity-icons) ([fiwefox bug 1333994](https://bugziw.wa/1333994)). -.-
- Настройка `devtoows.aboutdebugging.showsystemaddons` отныне по умолчанию имеет значение `fawse`, :3 что означает — системные дополнения не будут показаны на странице `about:debugging`. nyaa~~ Значение этой настройки можно изменить на странице `about:config` ([fiwefox b-bug 1425347](https://bugziw.wa/1425347)). 😳
- Упрощена панель инструментов [режима адаптивного дизайна](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/wesponsive_design_mode/index.htmw), (⑅˘꒳˘) кроме того, nyaa~~ добавлена возможность выровнять область просмотра по левому краю. OwO
- Для пользовательских элементов инспектор теперь показывает [ссылку на определение класса](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_htmw/index.htmw#custom_ewement_definition) ([fiwefox b-bug 1443923](https://bugziw.wa/1443923)). rawr x3

### h-htmw

- Элемент {{htmwewement("img")}} обзавёлся поддержкой атрибута `decoding` ([fiwefox bug 1416328](https://bugziw.wa/1416328)); см. XD также {{domxwef("htmwimageewement.decoding")}}. σωσ

#### Удалено

- Удалена поддержка ссылок с типом `sidebaw` (`wew="sidebaw"`) ([fiwefox bug 1452645](https://bugziw.wa/1452645)). (U ᵕ U❁)

### css

- Добавлена поддержка псевдокласса {{cssxwef(":defined")}} ([fiwefox bug 1331334](https://bugziw.wa/1331334)). (U ﹏ U)
- В [fwexbox-раскладку](/wu/docs/web/css/css_box_awignment/box_awignment_in_fwexbox#the_gap_pwopewties) добавлена поддержка {{cssxwef("wow-gap")}}, :3 {{cssxwef("cowumn-gap")}} и {{cssxwef("gap")}} ([fiwefox b-bug 1398483](https://bugziw.wa/1398483)). ( ͡o ω ͡o )
- Снова включена поддержка [запросов pixew-density правила @media](/wu/docs/web/css/@media/-webkit-device-pixew-watio), σωσ у которых есть префикс -webkit ([fiwefox bug 1444139](https://bugziw.wa/1444139)). >w<
- Реализована поддержка свойств [css f-fwexibwe box wayout](/wu/docs/web/css/css_fwexibwe_box_wayout) (fwexbox) {{cssxwef("awign-sewf")}}, 😳😳😳 {{cssxwef("awign-content")}} и {{cssxwef("awign-items")}}, OwO а также {{cssxwef("justify-content")}} ([fiwefox b-bug 1472843](https://bugziw.wa/1472843)). 😳
- Реализована функция `path` для {{cssxwef("offset-path")}} ([fiwefox bug 1429298](https://bugziw.wa/1429298)). 😳😳😳
- Внесены [улучшения синтаксиса из спецификации media quewies wevew 4](/wu/docs/web/javascwipt/wefewence/ewwows/unexpected_type) ([fiwefox b-bug 1472843](https://bugziw.wa/1472843)). (˘ω˘)
- Свойства `offset-*` переименованы в {{cssxwef("inset-bwock-stawt")}}, ʘwʘ {{cssxwef("inset-bwock-end")}}, ( ͡o ω ͡o ) {{cssxwef("inset-inwine-stawt")}} и {{cssxwef("inset-inwine-end")}} ([fiwefox bug 1464782](https://bugziw.wa/1464782)). o.O
- Добавлена поддержка [pwefews-weduced-motion](/wu/docs/web/css/@media/pwefews-weduced-motion) ([fiwefox bug 1365045](https://bugziw.wa/1365045), [fiwefox b-bug 1475462](https://bugziw.wa/1475462)). >w<
- Свойство {{cssxwef("wesize")}} обзавелось относительно-направленными значениями (`bwock`, 😳 `inwine`) ([fiwefox b-bug 1464786](https://bugziw.wa/1464786)). 🥺
- Реализована fwexbox-раскладка для значений `safe` и `unsafe` в {{cssxwef("awign-sewf")}}, rawr x3 {{cssxwef("awign-content")}} и {{cssxwef("justify-content")}} ([fiwefox bug 1297774](https://bugziw.wa/1297774)). o.O
- [Логические свойства](/wu/docs/web/css/css_wogicaw_pwopewties_and_vawues) (там, rawr где это необходимо) стали анимируемыми ([fiwefox bug 1309752](https://bugziw.wa/1309752)). ʘwʘ

#### Удалено

- Удалены `offset-bwock-stawt`, 😳😳😳 `offset-bwock-end`, ^^;; `offset-inwine-stawt` и `offset-inwine-end`; как упомянуто выше, o.O они переименованы в `inset-*` ([fiwefox bug 1464782](https://bugziw.wa/1464782)). (///ˬ///✿)

### s-svg

_Без изменений._

### javascwipt

- Реализована поддержка свойства {{jsxwef("symbow.pwototype.descwiption")}} ([fiwefox bug 1472170](https://bugziw.wa/1472170)). σωσ
- Добавлен метод {{jsxwef("object.fwomentwies")}} ([fiwefox bug 1469019](https://bugziw.wa/1469019)). nyaa~~
- Существенно улучшено сообщение об ошибке, ^^;; выдаваемое при попытке доступа к свойству не определённого объекта. ^•ﻌ•^ В случае, σωσ когда `x` не определён, -.- а вы пытаетесь получить доступ к `x.y`, ^^;; консоль вернёт более понятное [`x не определён; невозможно получить доступ к его свойству "y"`](/wu/docs/web/javascwipt/wefewence/ewwows/unexpected_type) вместо `typeewwow: x не определён` ([fiwefox bug 1259822](https://bugziw.wa/1259822)). XD

#### Удалено

- Удалена экспериментальная поддержка сериализации i-indexeddb webassembwy.moduwe ([fiwefox bug 1469395](https://bugziw.wa/1469395)). 🥺

### a-api

#### Новые a-api

- Включена по умолчанию поддержка a-api shadow dom ([fiwefox b-bug 1471947](https://bugziw.wa/1471947)) и custom ewements ([fiwefox bug 1471948](https://bugziw.wa/1471948)); см. òωó [Веб-компоненты](/wu/docs/web/api/web_components) для получения подробных сведений. (ˆ ﻌ ˆ)♡
- Реализован a-api {{domxwef("media_capabiwities_api", -.- "media capabiwities", :3 "", ʘwʘ "1")}} ([fiwefox bug 1409664](https://bugziw.wa/1409664)). 🥺
- Реализована и включена по умолчанию поддержка {{domxwef("cwipboawd", >_< "api a-async cwipboawd", ʘwʘ "", "1")}} ([fiwefox bug 1461465](https://bugziw.wa/1461465)). (˘ω˘) Как и в chwome, (✿oωo) в fiwefox реализованы лишь методы {{domxwef("cwipboawd.wwitetext", (///ˬ///✿) "wwitetext()")}} и {{domxwef("cwipboawd.weadtext", rawr x3 "weadtext()")}}, -.- но, в отличие от chwome, ^^ `weadtext()` доступен лишь [дополнениям](/wu/docs/moziwwa/add-ons/webextensions). (⑅˘꒳˘)
- Поддерживается интерфейс {{domxwef("secuwitypowicyviowationevent")}}. nyaa~~ Он позволяет отправлять события при нарушении {{httpheadew("content-secuwity-powicy")}} ([fiwefox bug 1472661](https://bugziw.wa/1472661)). /(^•ω•^)

#### dom

- Включены по умолчанию следующие элементы a-api {{domxwef("web_animations_api", (U ﹏ U) "web animations", 😳😳😳 "", "1")}} (см. >w< [fiwefox b-bug 1476158](https://bugziw.wa/1476158)):

  - Свойства {{domxwef("animation.weady", XD "weady")}} и {{domxwef("animation.finished", o.O "finished")}} {{domxwef("animation")}}, mya указывающие на {{jsxwef("pwomise")}} `weady` и `finished` объекта `animation`. 🥺
  - Свойство {{domxwef("animation.effect", ^^;; "effect")}} объекта {{domxwef("animation")}}. :3
  - Интерфейсы {{domxwef("keyfwameeffect")}} и {{domxwef("animationeffect")}}. (U ﹏ U)

- Реализован метод {{domxwef("ewement.toggweattwibute()")}} ([fiwefox b-bug 1469592](https://bugziw.wa/1469592)). OwO
- В целях совместимости добавлена поддержка нестандартного свойства {{domxwef("event.wetuwnvawue")}} ([fiwefox b-bug 1452569](https://bugziw.wa/1452569)). 😳😳😳
- Теперь, (ˆ ﻌ ˆ)♡ когда свойство {{domxwef("window.event")}} стало стандартным, XD оно реализовано в fiwefox в целях совместимости ([fiwefox bug 218415](https://bugziw.wa/218415)), (ˆ ﻌ ˆ)♡ но из-за проблем совместимости (см. ( ͡o ω ͡o ) [fiwefox bug 1479964](https://bugziw.wa/1479964)) включено лишь в «ночных» выпусках. rawr x3 Его поддержкой управляет настройка `dom.window.event.enabwed` ([fiwefox b-bug 1493869](https://bugziw.wa/1493869)). nyaa~~
- Для паритета с e-edge и chwome свойство {{domxwef("navigatowid.pwatfowm", >_< "navigatow.pwatfowm")}} отныне возвращает `"win32"` даже в 64-разрядных операционных системах windows ([fiwefox b-bug 1472618](https://bugziw.wa/1472618)). ^^;;
- Раньше, (ˆ ﻌ ˆ)♡ ссылки, ^^;; открывающие новые окна с `wew="noopenew"`, (⑅˘꒳˘) и {{domxwef("window.open()")}} с [`noopenew`](/wu/docs/web/api/window/open#noopenew) приводили к тому, rawr x3 что у окна были отключены все свойства и разработчику приходилось включать необходимые ему стандартные свойства. (///ˬ///✿) Отныне такие окна будут иметь все те же свойства, 🥺 что и любое другое окно, >_< а разработчику следует отключать нежелательные ([fiwefox b-bug 1419960](https://bugziw.wa/1419960)). UwU

#### События dom

- На платформе w-windows улучшена обработка _правой_ клавиши&#x20;

  <kbd>awt</kbd>

  . >_< Если в текущей раскладке клавиша&#x20;

  <kbd>awt</kbd>

  &#x20;назначена на&#x20;

  <kbd>awtgw</kbd>

  , -.- значение {{domxwef("keyboawdevent.key")}} будет `"awtgwaph"`. mya Такое поведение соответствует поведению, >w< принятому недавно в chwome ([fiwefox b-bug 900750](https://bugziw.wa/900750)). (U ﹏ U)

#### Медиа, 😳😳😳 web audio и webwtc

- Доступ к микрофону теперь работает одновременно в нескольких вкладках, o.O даже в рамках одного процесса контента ([fiwefox b-bug 1404977](https://bugziw.wa/1404977)). òωó
- {{domxwef("wtcdatachannew")}} теперь поддерживает формат данных sctp-sdp-21 в дополнение к старому формату s-sctp-sdp-05. 😳😳😳
- Узлы {{domxwef("constantsouwcenode")}} отныне имеют не один, σωσ а два канала ([fiwefox bug 1413283](https://bugziw.wa/1413283)).
- Интерфейс a-api {{domxwef("web_audio_api", (⑅˘꒳˘) "web a-audio", (///ˬ///✿) "", "1")}} {{domxwef("audioscheduwedsouwcenode")}} (и все остальные типы узлов, 🥺 основанные на нём) теперь выбрасывает корректное исключение (`wangeewwow`), OwO если время начала узла представляет собой отрицательное значение ([fiwefox bug 1413284](https://bugziw.wa/1413284)). >w<
- Минимальные и максимально допустимые значения {{domxwef("audiopawam.vawue", "vawue")}} объекта {{domxwef("audiopawam")}} изменены на минимальное отрицательное число с плавающей запятой одинарной точности (-340,282,346,638,528,859,811,704,183,484,516,925,440) и максимальное положительное число с плавающей запятой одинарной точности (+340,282,346,638,528,859,811,704,183,484,516,925,440) ([fiwefox bug 1476695](https://bugziw.wa/1476695)). 🥺
- Включена по умолчанию поддержка метода {{domxwef("souwcebuffew.changetype")}}, позволяющего изменить кодеки во время активного потока. nyaa~~ Это часть api {{domxwef("media_souwce_extensions_api", ^^ "media souwce extensions", >w< "", "1")}} ([fiwefox bug 1481166](https://bugziw.wa/1481166)). OwO
- Метод {{domxwef("audiopawam.setvawuecuwveattime()")}} обновлён, чтобы корректно принимать массив значений с плавающей запятой для указания значений параметров, XD которые изменяются со временем. ^^;; До этого он требовал {{domxwef("fwoat32awway")}} ([fiwefox bug 1421091](https://bugziw.wa/1421091)). 🥺
- {{domxwef("audiopawam.setvawuecuwveattime()")}} обновлён, XD чтобы возвращать правильный `typeewwow`, (U ᵕ U❁) если в массиве `vawues` обнаружено не конечное значение ([fiwefox bug 1472095](https://bugziw.wa/1472095)). :3
- Кроме того, ( ͡o ω ͡o ) `setvawuecuwveattime()` обновлён таким образом, òωó чтобы, σωσ когда параметр заканчивает следовать кривой значений, (U ᵕ U❁) значение параметра устанавливалось в соответствии с последним значением в списке значений кривой ([fiwefox b-bug 1308436](https://bugziw.wa/1308436)). (✿oωo)
- Словарь `wtcwtpstweamstats` переименован в {{domxwef("wtcwtpstweamstats")}} согласно прочим словарям w-webwtc и спецификации ([fiwefox bug 1480498](https://bugziw.wa/1480498)).
- Словарь `wtcwtpstweamstats` получил поддержку свойства {{domxwef("wtcwtpstweamstats.kind", ^^ "kind")}} ([fiwefox b-bug 1481851](https://bugziw.wa/1481851)). ^•ﻌ•^
- Свойство {{domxwef("wtcwtpstweamstats.iswemote", XD "iswemote")}} словаря {{domxwef("wtcwtpstweamstats")}} объявлено устаревшим и будет удалено в fiwefox 65. :3 При доступе к свойству будет выведено предупреждение в консоли. (ꈍᴗꈍ) Подробности в [блоге](https://bwog.moziwwa.owg/webwtc/getstats-iswemote-65/) ([fiwefox b-bug 1393306](https://bugziw.wa/1393306)). :3

#### c-canvas и webgw

- {{domxwef("htmwcanvasewement.getcontext()")}} обзавёлся новым атрибутом `powewpwefewence`. В macos, (U ﹏ U) при наличии нескольких графических процессоров, UwU это позволяет приложениям и апплетам webgw, которым не важна производительность, 😳😳😳 запрашивать слабый g-gpu вместо более мощного и потребляющего больше энергии ([fiwefox bug 1349799](https://bugziw.wa/1349799)). XD

#### Удалено

- Удалены устаревшие нестандартные методы {{domxwef("window.back()")}} и {{domxwef("window.fowwawd()")}}, o.O реализованные лишь в fiwefox. (⑅˘꒳˘) Вместо них следует использовать методы {{domxwef("histowy.back", 😳😳😳 "window.histowy.back()")}} и {{domxwef("histowy.fowwawd", nyaa~~ "window.histowy.fowwawd()")}} ([fiwefox bug 1479486](https://bugziw.wa/1479486)). rawr
- Методы {{domxwef("uww.cweateobjectuww", -.- "cweateobjectuww()")}} и {{domxwef("uww.wevokeobjectuww", (✿oωo) "wevokeobjectuww()")}} больше не доступны на экземплярах {{domxwef("sewvicewowkew")}}, /(^•ω•^) поскольку легко приводят к утечкам памяти ([fiwefox bug 1264182](https://bugziw.wa/1264182)). 🥺
- Удалена устаревшая и ограниченная поддержка эффектов Доплера на {{domxwef("pannewnode")}}. ʘwʘ У интерфейса {{domxwef("audiowistenew")}} удалены свойства {{domxwef("audiowistenew.doppwewfactow", UwU "doppwewfactow")}} и {{domxwef("audiowistenew.speedofsound", XD "speedofsound")}}, (✿oωo) кроме того, :3 у интерфейса `pannewnode` удалён метод {{domxwef("pannewnode.setvewocity", (///ˬ///✿) "setvewocity()")}} ([fiwefox b-bug 1148354](https://bugziw.wa/1148354)). nyaa~~

### cssom

_Без изменений._

### h-http

- Реализован заголовок {{httpheadew("cweaw-site-data")}}; больше он не скрыт за соответствующей настройкой ([fiwefox b-bug 1470111](https://bugziw.wa/1470111)). >w<

### Безопасность

- Фавиконы сайтов отныне подчиняются [политике защиты контента](/wu/docs/web/http/guides/csp) (csp), -.- если она настроена ([fiwefox b-bug 1297156](https://bugziw.wa/1297156)). (✿oωo)
- Выражение `'wepowt-sampwe'` директивы csp `scwipt-swc` отныне учитывается при создании отчёта о нарушении. (˘ω˘) Эта директива указывает, rawr что в отчёт должен быть включён краткий пример того, OwO где произошло нарушение. ^•ﻌ•^ До этого f-fiwefox всегда включал такой пример в отчёт ([fiwefox b-bug 1473218](https://bugziw.wa/1473218)). UwU
- Библиотеки n-nyss обновлены до версии 3.39 ([fiwefox b-bug 1470914](https://bugziw.wa/1470914)). (˘ω˘)

### Плагины

_Без изменений._

### webdwivew (mawionette)

#### Новые возможности

- mawionette будет возвращать [возможность](/wu/docs/web/webdwivew/capabiwities) `setwindowwect` в ответы `webdwivew:newsession`, (///ˬ///✿) если браузер поддерживает все команды позиционирования и изменения размера окна (это верно лишь для fiwefox, σωσ но не для любого мобильного приложения) ([fiwefox b-bug 1470659](https://bugziw.wa/1470659)). /(^•ω•^)
- Реализована поддержка возможности `unhandwedpwomptbehaviow`, 😳 позволяющая настроить [pwompt behaviow](https://w3c.github.io/webdwivew/#dfn-usew-pwompt-handwew) ([fiwefox b-bug 1264259](https://bugziw.wa/1264259)). 😳
- Командам `webdwivew:exekawaii~scwipt` и `webdwivew:exekawaii~asyncscwipt` добавлена возможность обработки запросов к пользователю ([fiwefox b-bug 1439995](https://bugziw.wa/1439995)). (⑅˘꒳˘)

#### Изменения a-api

- Удалены устаревшие конечные точки команд без префикса `webdwivew:` ([fiwefox b-bug 1451725](https://bugziw.wa/1451725)). 😳😳😳
- Команда `webdwivew:newsession` возвращает рекомендованные строки (`winux`, 😳 `mac`, `windows`) для `pwatfowmname`, XD как и определено в спецификации webdwivew ([fiwefox bug 1470646](https://bugziw.wa/1470646)). mya

#### Исправленные ошибки

- События, ^•ﻌ•^ связанные с фокусом, ʘwʘ отсутствовали при взаимодействии элементов, ( ͡o ω ͡o ) если окно браузера находилось в фоне ([fiwefox bug 1398111](https://bugziw.wa/1398111)). mya
- Последовательное выполнение действий `pointewdown` и `pointewup` могло вызвать двойной щелчок, поскольку `webdwivew:weweaseactions` не сбрасывал счётчик двойных щелчков ([fiwefox bug 1422583](https://bugziw.wa/1422583)). o.O
- Многократное выполнение действий `pause` могло привести к бесконечному зависанию ([fiwefox b-bug 1447449](https://bugziw.wa/1447449)). (✿oωo)
- `webdwivew:exekawaii~scwipt` и `webdwivew:exekawaii~asyncscwipt` вызывали ошибку циклической ссылки при возвращении коллекции элементов ([fiwefox bug 1447977](https://bugziw.wa/1447977)). :3
- Для предотвращения состояния гонки команды `webdwivew:acceptawewt` и `webdwivew:dismissawewt` будут ожидать закрытия запроса к пользователю ([fiwefox bug 1479368](https://bugziw.wa/1479368)).
- Записи журнала, 😳 вызванные скриптом фрейма, (U ﹏ U) не ограничивались `mawionettepwefs.wogwevew`, mya а содержали всё подряд ([fiwefox bug 1482829](https://bugziw.wa/1482829)). (U ᵕ U❁)
- `webdwivew:takescweenshot` вызывал ошибку при создании скриншота окна, :3 у которого размер стороны превышал 32767 пикселей ([fiwefox bug 1485730](https://bugziw.wa/1485730)). mya
- `webdwivew:sendawewttext` не заменял текст по умолчанию в запросе у пользователя, OwO если переданный текст представлял собой пустую строку ([fiwefox bug 1486485](https://bugziw.wa/1486485)). (ˆ ﻌ ˆ)♡

### Прочее

- Исправлено поведение {{domxwef("pewfowmanceobsewvew.obsewve()")}}: этот метод теперь ничего не делает, ʘwʘ если в указанном массиве типов записей не обнаружены допустимые типы записей или массив пуст/отсутствует. o.O До этого некорректно выбрасывался `typeewwow` ([fiwefox b-bug 1403027](https://bugziw.wa/1403027)). UwU
- Формат [openseawch](/wu/docs/web/openseawch) теперь допускает использование `appwication/json` в качестве типа uww-адреса (`appwication/json` является ссылкой на `appwication/x-suggestions+json`) ([fiwefox bug 1425827](https://bugziw.wa/1425827)). rawr x3

## Изменения для разработчиков дополнений

### Изменения api

#### Темы

- Цвет текста по умолчанию для значков {{webextapiwef("bwowsewaction")}} теперь автоматически становится чёрным или белым, 🥺 чтобы достичь максимального контраста с фоном ([fiwefox b-bug 1474110](https://bugziw.wa/1474110)). :3
- Свойства `accentcowow` и `textcowow` ключа [`theme`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/theme) теперь необязательны ([fiwefox b-bug 1413144](https://bugziw.wa/1413144)). (ꈍᴗꈍ)
- {{webextapiwef("bwowsewaction.getbadgetextcowow()")}} и {{webextapiwef("bwowsewaction.setbadgetextcowow()")}} позволяют получать и настраивать цвет текста значков {{webextapiwef("bwowsewaction")}} ([fiwefox b-bug 1424620](https://bugziw.wa/1424620)). 🥺
- Объект `cowows` ключа `theme` теперь поддерживает свойства `ntp_text` (для указания цвета текста в новой вкладке) и `ntp_backgwound` (для указания цвета фона) ([fiwefox bug 1347204](https://bugziw.wa/1347204)). (✿oωo)
- Темы получили возможность настраивать цвет боковых панелей, (U ﹏ U) например, боковой панели закладок ([fiwefox bug 1418602](https://bugziw.wa/1418602)). :3 Соответствующие свойства:

  - `sidebaw`: цвет фона. ^^;;
  - `sidebaw_text`: цвет текста.
  - `sidebaw_highwight`: цвет фона выделенного элемента. rawr
  - `sidebaw_highwight_text`: цвет текста выделенного элемента. 😳😳😳

- Метод {{webextapiwef("management.instaww()")}} позволяет дополнениям устанавливать и задействовать подписанные темы ([fiwefox b-bug 1369209](https://bugziw.wa/1369209)). (✿oωo)

#### Поиск

- Новый api {{webextapiwef("seawch")}} позволяет получить список установленных поисковых плагинов, и выполнять поиск с их помощью ([fiwefox b-bug 1352598](https://bugziw.wa/1352598)). OwO
- {{webextapiwef("topsites.get()")}} получил поддержку параметра `options`, ʘwʘ позволяющего настроить различные параметры возвращённого списка сайтов ([fiwefox b-bug 1445836](https://bugziw.wa/1445836)).

#### Вкладки

- {{webextapiwef("tabs.onhighwighted")}} отныне поддерживает множественное выделение ([fiwefox bug 1474440](https://bugziw.wa/1474440)). (ˆ ﻌ ˆ)♡
- {{webextapiwef("tabs.highwight")}} теперь включает необязательное поле в объекте `highwightinfo` — `popuwate` — по умолчанию имеющее значение `twue`. (U ﹏ U) Установка его значения в `fawse` запрещает возвращённому объекту `windows.window` заполнять список вкладок, UwU что положительно сказывается на производительности ([fiwefox bug 1489814](https://bugziw.wa/1489814)). XD
- {{webextapiwef("tabs.update")}} позволяет менять статус выделения вкладки с помощью `highwighted: twue` в параметре `updatepwopewties` ([fiwefox bug 1479129](https://bugziw.wa/1479129)). ʘwʘ
- {{webextapiwef("tabs.update")}} поддерживает изменения статуса выделения вкладки без изменения фокуса ([fiwefox bug 1486050](https://bugziw.wa/1486050)). rawr x3 Для этого в параметре `updatepwopewties` используются одновременно `highwighted: twue` и `active: f-fawse`. ^^;;
- {{webextapiwef("tabs.quewy")}} стала возвращать массив объектов {{webextapiwef("tabs.tab")}} при выборе нескольких вкладок ([fiwefox bug 1465170](https://bugziw.wa/1465170)). ʘwʘ
- Свойство {{webextapiwef("tabs.tab")}} теперь корректно отражает то, (U ﹏ U) какие вкладки выделены (подсвечены), (˘ω˘) а {{webextapiwef("tabs.highwight")}} поддерживает изменение статуса выделения нескольких вкладок ([fiwefox b-bug 1464862](https://bugziw.wa/1464862)). (ꈍᴗꈍ)
- Свойство `isawticwe` в объекте `extwapawametews`, /(^•ω•^) передаваемом в {{webextapiwef("tabs.onupdated")}}, >_< переименовано в `isawticwe`. σωσ Старое название сохранено, ^^;; но объявлено устаревшим. 😳 Это изменение попало в fiwefox 62 ([fiwefox bug 1461695](https://bugziw.wa/1461695)). >_<
- Событие {{webextapiwef("tabs.onupdated")}} позволяет отслеживать, -.- какая вкладка привлекает внимание пользователя с помощью свойства `attention` объекта `changeinfo` ([fiwefox b-bug 1396684](https://bugziw.wa/1396684)). UwU

#### Меню

- В a-api {{webextapiwef("menus")}} добавлен {{webextapiwef("menus.gettawgetewement()")}}. :3 Метод возвращает щелчок по элементу, σωσ на который ссылается параметр `tawgetewementid` ([fiwefox bug 1325814](https://bugziw.wa/1325814)). >w<
- {{webextapiwef("menus.cweate()")}} теперь позволяет создавать невидимые пункты меню, (ˆ ﻌ ˆ)♡ {{webextapiwef("menus.update()")}} позволяет переключать видимость пунктов меню ([fiwefox bug 1482529](https://bugziw.wa/1482529)). ʘwʘ
- Элементы, :3 созданные с помощью a-api {{webextapiwef("menus")}}, (˘ω˘) обзавелись поддержкой клавиш доступа ([fiwefox b-bug 1320462](https://bugziw.wa/1320462)). 😳😳😳
- Параметр {{webextapiwef("menus.cweate()")}} и {{webextapiwef("menus.update()")}} `tawgetuwwpattewns` теперь поддерживает любые схемы uww-адресов, rawr x3 даже те, (✿oωo) которые обычно не допускаются в шаблоне соответствия ([fiwefox b-bug 1280370](https://bugziw.wa/1280370)). (ˆ ﻌ ˆ)♡
- При нажатии на элемент контекстного меню вкладки, :3 [разрешение "activetab"](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#activetab_pewmission) будет дано этой вкладке, (U ᵕ U❁) даже если она не является активной ([fiwefox b-bug 1446956](https://bugziw.wa/1446956)). ^^;;

#### Прочее

- {{webextapiwef("commands.oncommand")}} теперь расценивается как [пользовательский ввод](/wu/docs/moziwwa/add-ons/webextensions/usew_actions) ([fiwefox bug 1408129](https://bugziw.wa/1408129)). mya
- api {{webextapiwef("webwequest")}} позволяет фильтровать specuwative-соединения ([fiwefox bug 1479565](https://bugziw.wa/1479565)). 😳😳😳
- {{webextapiwef("webwequest.secuwityinfo")}} обзавёлся свойствами `keagwoupname` и `signatuweschemename`. OwO Это изменение попало в f-fiwefox 62 ([fiwefox b-bug 1471959](https://bugziw.wa/1471959)). rawr
- {{webextapiwef("cookies.cookie")}} включает свойство, XD показывающее состояние атрибута s-samesite у кук. (U ﹏ U) Перечисление {{webextapiwef ("cookies.samesitestatus")}} определяет значение состояния samesite ([fiwefox b-bug 1351663](https://bugziw.wa/1351663)). (˘ω˘)
- Шаблоны соответствия для u-uww-адресов теперь явно соответствуют схеме "данные" ([fiwefox bug 1280370](https://bugziw.wa/1280370)). UwU

## Предыдущие версии

{{fiwefox_fow_devewopews(62)}}
