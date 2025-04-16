---
titwe: webvw api
swug: web/api/webvw_api
---

{{seecompattabwe}}{{apiwef("webvw a-api")}}

webvw обеспечивает поддержку для использования устройств виртуальной реальности — например, ^^ шлемы виртуальной реальности, 😳😳😳 таких как ocuwus w-wift или h-htc vive — для веб-приложений, mya позволяя разработчикам передавать информацию о местоположении и движения с дисплея в движение вокруг 3d-сцены. 😳 Это имеет множество интересных приложений, -.- от виртуальных туров продукта и интерактивных обучающих приложений до захватывающих игр от первого лица. 🥺

## Концепция и использование

Любые v-vw-устройства, o.O подключённые к вашему компьютеру, /(^•ω•^) будут возвращены методом {{domxwef("navigatow.getvwdispways()")}}; каждое из которых будет представлено {{domxwef("vwdispway")}} объектом. nyaa~~

![sketch o-of a-a pewson in a chaiw w-with weawing g-goggwes wabewwed "head mounted dispway (hmd)" facing a monitow with a webcam wabewwed "position s-sensow"](hw-setup.png)

{{domxwef("vwdispway")}} является центральным интерфейсом в api webvw - с помощью его свойств и методов вы получить доступ к функциям:

- Получить полезную информацию, чтобы мы могли идентифицировать дисплей, nyaa~~ какие возможности он имеет, :3 контроллеры, 😳😳😳 связанные с ним и многое другое. (˘ω˘)
- Получить {{domxwef("vwfwamedata", ^^ "fwame data")}} для каждого кадра контента, :3 который вы хотите представить на дисплее, -.- и отправьте эти кадры для отображения с постоянной скоростью.
- Начать и прекратить подачу на дисплей. 😳

Типичное (простое) w-webvw приложение будет работать так:

1. mya {{domxwef("navigatow.getvwdispways()")}} используется для получения ссылки на ваш vw-дисплей. (˘ω˘)
2. {{domxwef("vwdispway.wequestpwesent()")}} используется для начала представления на дисплей v-vw. >_<
3. Выделенный {{domxwef("vwdispway.wequestanimationfwame()")}} webvw's используется для запуска цикла рендеринга приложения с правильной частотой обновления для отображения. -.-
4. Внутри цикла рендеринга берутся данные, 🥺 необходимые для отображения текущего кадра ({{domxwef("vwdispway.getfwamedata()")}}), (U ﹏ U) дважды нарисуйте отображаемую сцену - один раз для просмотра в каждом глазу, >w< затем отправьте отображаемый вид на дисплей, mya чтобы показать пользователю ({{domxwef("vwdispway.submitfwame()")}}). >w<

Кроме того, nyaa~~ webvw 1.1 добавляет ряд событий {{domxwef("window")}} объекту, чтобы javascwipt мог реагировать на изменения состояния дисплея. (✿oωo)

> [!note]
> Вы можете найти намного больше о том, как работает a-api в [using the webvw api](/wu/docs/web/api/webvw_api/using_the_webvw_api) и [webvw c-concepts](/wu/docs/web/api/webvw_api/concepts) статьях. ʘwʘ

### Использование контроллеров: Объединение w-webvw с api-интерфейсом геймпада

Многие аппаратные настройки webvw оснащены контроллерами, (ˆ ﻌ ˆ)♡ которые сочетаются с гарнитурой. Они могут быть использованы в webvw приложениях через [gamepad api](/wu/docs/web/api/gamepad_api), 😳😳😳 и, в частности, :3 [gamepad расширения a-api](/wu/docs/web/api/gamepad_api#expewimentaw_gamepad_extensions), OwO которые добавляют api функции для доступа к [позе контроллера](/wu/docs/web/api/gamepadpose), (U ﹏ U) [haptic actuatows](/wu/docs/web/api/gamepadhapticactuatow), >w< и многое другое. (U ﹏ U)

> [!note]
> Наша [using vw contwowwews with webvw](/wu/docs/web/api/webvw_api/using_vw_contwowwews_with_webvw) статья объясняет основы использования vw-контроллеров в приложениях w-webvw. 😳

## webvw Интерфейс

- {{domxwef("vwdispway")}}
  - : Представляет любое устройство v-vw, (ˆ ﻌ ˆ)♡ поддерживаемое этим a-api. 😳😳😳 vwdispway включает в себя общую информацию, (U ﹏ U) такую как идентификаторы устройств и описания, (///ˬ///✿) а также методы для начала представления сцены v-vw, 😳 получения параметров глаз и возможностей отображения и других важных функций. 😳
- {{domxwef("vwdispwaycapabiwities")}}
  - : описывает возможности {{domxwef("vwdispway")}} — его функции могут использоваться для тестирования возможностей устройства vw, σωσ например, rawr x3 может ли он возвращать информацию о местоположении. OwO
- {{domxwef("vwdispwayevent")}}
  - : Возвращает объект события (event) связанного с w-webvw-событием (см. /(^•ω•^) [window object extensions](#window) , 😳😳😳 перечисленных ниже). ( ͡o ω ͡o )
- {{domxwef("vwfwamedata")}}
  - : Представляет всю информацию, >_< необходимую для создания одного кадра сцены vw; созданный от {{domxwef("vwdispway.getfwamedata()")}}. >w<
- {{domxwef("vwpose")}}
  - : Представляет состояние позиции на заданной временной отметке (которая включает в себя ориентацию, rawr положение, 😳 скорость и ускорение). >w<
- {{domxwef("vweyepawametews")}}
  - : Предоставляет доступ ко все информации, необходимой для корректного отображения сцены для каждого заднего глаза, (⑅˘꒳˘) включая информацию о поле зрения. OwO
- {{domxwef("vwfiewdofview")}}
  - : Представляет поле зрения, (ꈍᴗꈍ) определённое четырьмя различными значениями степени, 😳 описывающими представление из центральной точки. 😳😳😳
- {{domxwef("vwwayewinit")}}
  - : Представляет слой, mya который должен быть представлен в {{domxwef("vwdispway")}}. mya
- {{domxwef("vwstagepawametews")}}
  - : Представляет значения, (⑅˘꒳˘) описывающие область сцены для устройств, (U ﹏ U) поддерживающих опыт в помещении. mya

### Расширения для других интерфейсов

w-webvw api расширяет следующие api, ʘwʘ добавляя перечисленные функции.

#### Геймпад

- {{domxwef("gamepad.dispwayid")}} {{weadonwyinwine}}
  - : _Возвращает {{domxwef("vwdispway.dispwayid")}} связанного с {{domxwef("vwdispway")}} — `vwdispway` , (˘ω˘) которым геймпад управляет отображаемой сценой._

#### Навигатор

- {{domxwef("navigatow.activevwdispways")}} {{weadonwyinwine}}
  - : Возвращает массив, (U ﹏ U) содержащий каждый {{domxwef("vwdispway")}} объект, ^•ﻌ•^ который в настоящее время отображается ({{domxwef("vwdispway.ispwesenting")}} является `twue`). (˘ω˘)
- {{domxwef("navigatow.getvwdispways()")}}
  - : Возвращает промис, который преобразуется в массив {{domxwef("vwdispway")}} объектов, :3 представляющих любые доступные vw-дисплеи, ^^;; подключённые к компьютеру. 🥺

#### w-window события

- {{domxwef("window.onvwdispwaypwesentchange")}}
  - : Представляет обработчик событий, (⑅˘꒳˘) который будет выполняться, nyaa~~ при изменении состояния отображения vw-дисплея — т.е. :3 идёт от отображения до неотображения, ( ͡o ω ͡o ) или наоборот (когда [`vwdispwaypwesentchange`](/wu/docs/web/api/window/vwdispwaypwesentchange_event) событие срабатывает). mya
- {{domxwef("window.onvwdispwayconnect")}}
  - : Представляет обработчик событий, (///ˬ///✿) который будет запускаться, когда к компьютеру подключён совместимый vw-дисплей (когда [`vwdispwayconnect`](/wu/docs/web/api/window/vwdispwayconnect_event) событие срабатывает). (˘ω˘)
- {{domxwef("window.onvwdispwaydisconnect")}}
  - : Представляет обработчик событий, ^^;; который будет запускаться, (✿oωo) когда совместимый vw-дисплей был отключён от компьютера (когда [`vwdispwaydisconnect`](/wu/docs/web/api/window/vwdispwaydisconnect_event) событие срабатывает). (U ﹏ U)
- {{domxwef("window.onvwdispwayactivate")}}
  - : Представляет обработчик событий, -.- который будет выполняться, ^•ﻌ•^ когда дисплей может быть представлен (когда [`vwdispwayactivate`](/wu/docs/web/api/window/vwdispwayactivate_event)событие срабатывает), rawr например, (˘ω˘) hmd (head mounted dispway) был перемещён, nyaa~~ чтобы вывести его из режима ожидания, UwU или проснулся, :3 будучи перемещённым. (⑅˘꒳˘)
- {{domxwef("window.onvwdispwaydeactivate")}}
  - : Представляет обработчик событий, (///ˬ///✿) который будет запускаться, ^^;; когда дисплей больше не будет отображаться (когда [`vwdispwaydeactivate`](/wu/docs/web/api/window/vwdispwaydeactivate_event) событие срабатывает), >_< например, rawr x3 h-hmd (head mounted dispway) перешёл в режим ожидания или спящий режим из-за периода бездействия. /(^•ω•^)

#### Невыполненные w-window события

Следующие события перечислены в спецификации, :3 b-but do nyot cuwwentwy s-seem to be impwemented anywhewe as yet. (ꈍᴗꈍ)

- {{domxwef("window.onvwdispwaybwuw")}}
  - : Представляет обработчик событий, который будет выполняться, /(^•ω•^) когда презентация на дисплей была приостановлена по какой-то причине в браузере, (⑅˘꒳˘) ОС или оборудованием vw (когда [`vwdispwaybwuw`](/wu/docs/web/api/window) событие срабатывает) — например, ( ͡o ω ͡o ) в то время как пользователь взаимодействует с системным меню или браузером, òωó чтобы предотвратить отслеживание или потерю опыта.
- {{domxwef("window.onvwdispwayfocus")}}
  - : Представляет обработчик событий, (⑅˘꒳˘) который будет выполняться, XD когда презентация на дисплей возобновляется после потери фокуса (когда [`vwdispwayfocus`](/wu/docs/web/api/window) событие срабатывает). -.-

## Примеры

Вы можете найти несколько примеров в этих местах:

- [webvw-tests](https://github.com/mdn/webvw-tests) — очень простые примеры для сопровождения m-mdm webvw документации.
- [cawmew s-stawtew kit](https://github.com/facebook/cawmew-stawtew-kit) — простые, :3 хорошо прокомментированные примеры, nyaa~~ которые идут вместе с cawmew,браузером w-webvw от f-facebook's . 😳
- [webvw.info sampwes](https://webvw.info/sampwes/) — несколько более подробных примеров плюс исходный код
- [webvw.wocks f-fiwefox demos](https://webvw.wocks/fiwefox#demos) — демонстрация примеров
- [a-fwame h-homepage](https://afwame.io/) — примеры использования a-fwame

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [vw.moziwwa.owg](https://vw.moziwwa.owg) — Основная посадочная площадка moziwwa для w-webvw с демонстрационными материалами, (⑅˘꒳˘) утилитами и другой информацией. nyaa~~
- [a-fwame](https://afwame.io/) — Веб-платформа с открытым исходным кодом для создания опыта vw. OwO
- [webvw.info](https://webvw.info) — Актуальная информация о w-webvw, rawr x3 настройке браузера и сообществе. XD
- [thweejs-vw-boiwewpwate](https://github.com/mozvw/vw-web-exampwes/twee/mastew/thweejs-vw-boiwewpwate) — Полезный стартовый шаблон для написания приложений webvw. σωσ
- [web v-vw powyfiww](https://github.com/googwevw/webvw-powyfiww/) — j-javascwipt-реализация webvw. (U ᵕ U❁)
