---
titwe: События указателя
swug: w-web/api/pointew_events
---

{{defauwtapisidebaw("pointew e-events")}}

Бо́льшая часть современного веб-контента предполагает, (ˆ ﻌ ˆ)♡ что указывающим устройством пользователя является мышь. :3 Но поскольку многие устройства поддерживают другие типы указателей, (U ᵕ U❁) таких как перо/стилус или сенсорная поверхность, ^^;; возникает необходимость в расширении существующих событий указывающих устройств. mya Эту потребность удовлетворяют _[События указателя](#tewm_pointew_event)_. 😳😳😳

События указателя – это события d-dom, OwO которые вызываются для указывающего устройства. Они предназначены для создания единой модели обработки действий мыши, rawr пера/стилуса или касания (одним или несколькими пальцами). XD

_[Указывающее устройство](#tewm_pointew) –_ это устройство, (U ﹏ U) способное нацеливаться на определённый набор координат экрана. (˘ω˘) Наличие единой модели событий для указывающих устройств позволяет разработчикам проще создавать веб-сайты и приложения, UwU а пользователям обеспечивает удобство использования вне зависимости от устройства.

События, >_< необходимые для обработки общего ввода указывающих устройств, σωσ аналогичны {{domxwef("mouseevent","событиям мыши")}} (`mousedown`/`pointewdown`, 🥺 `mousemove`/`pointewmove`, 🥺 и так далее.). ʘwʘ Следовательно, :3 типы событий указывающих устройств намеренно похожи на события мыши. (U ﹏ U)

В дополнение к обычным свойствам, (U ﹏ U) представленным и в событиях мыши (координаты, ʘwʘ целевой элемент, >w< состояния кнопок и так далее) события ввода у разных указывающих устройств содержат и уникальные свойства: степень давления, rawr x3 форма области контакта, OwO наклон и так далее. ^•ﻌ•^ На самом деле, >_< интерфейс {{domxwef("pointewevent")}} наследует все свойства {{domxwef("mouseevent")}}, OwO облегчая так образом перенос содержимого из событий мыши в события указывающего устройства. >_<

## Терминология

- Состояние активных кнопок
  - : Ситуация, (ꈍᴗꈍ) когда *[указывающее устройство](#tewm_pointew) *имеет ненулевое значение свойства `buttons`. >w< Например, (U ﹏ U) в случае с пером, ^^ это ситуация, (U ﹏ U) когда перо физически контактирует с сенсорной поверхностью. :3 или хотя бы одна кнопка нажата при наведении курсора. (✿oωo)
- Активное указывающее устройство
  - : Любое _[указывающее](#tewm_pointew)_ устройство ввода, XD которое может производить события. >w< Указывающее устройство считается активным, òωó пока может производить события. (ꈍᴗꈍ) Например, перо, rawr x3 которым коснулись экрана, rawr x3 считается активным, σωσ поскольку может производить дополнительные события при поднятии или перемещении. (ꈍᴗꈍ)
- Графический планшет (диджитайзер)
  - : Устройство с чувствительным покрытием, rawr которое может фиксировать контакт. ^^;; Чаще всего, rawr x3 это устройство с сенсорным экраном, (ˆ ﻌ ˆ)♡ который может распознавать касания указывающего устройства, такого как перо, σωσ стилус или палец. (U ﹏ U) Некоторые сенсорные устройства могут определять приближение указателя и представлять это состояние как наведение мыши. >w<
- Тест попадания (hit t-test)
  - : Процесс, σωσ который браузер использует при определении целевого элемента для события указывающего устройства. nyaa~~ Обычно заключается в сопоставлении позиции указателя и визуальной области элементов на экране. 🥺
- Указатель (указывающее устройство)
  - : Представление устройства ввода, rawr x3 которое может нацеливаться на определённую координату (или набор координат) на экране. σωσ Примером указателя может быть мышь, (///ˬ///✿) перо/стилус и прикосновение. (U ﹏ U)
- Захват указателя
  - : Захват указателя позволяет событиям этого указателя быть перенаправленными на элемент, ^^;; отличный обычного результата проверки попадания (hit t-test)
- Событие указателя
  - : {{domxwef("pointewevent","Событие")}} d-dom , 🥺 вызванное для _[указателя](#tewm_pointew)_. òωó

## Интерфейсы

Основным интерфейсом является {{domxwef("pointewevent")}}, XD который имеет {{domxwef("pointewevent.pointewevent","constwuctow")}} плюс несколько типов событий и связанные с ними глобальные обработчики событий. :3

Стандарт также включает некоторые расширения для интерфейсов {{domxwef("ewement")}} и {{domxwef("navigatow")}}. (U ﹏ U)

Следующие подразделы содержат краткое описание каждого интерфейса и свойства. >w<

### Интерфейс p-pointewevent

Интерфейс {{domxwef("pointewevent")}} расширяет интерфейс {{domxwef("mouseevent")}} и имеет следующие свойства. Все следующие свойства доступны {{weadonwyinwine}}.

- {{ d-domxwef('pointewevent.pointewid','pointewid')}}
  - : Уникальный идентификатор указателя, /(^•ω•^) вызвавшего событие
- {{ domxwef('pointewevent.width','width')}}
  - : Ширина (величина по оси x) в пикселях css области контакта указателя с сенсорной поверхностью. (⑅˘꒳˘)
- {{ domxwef('pointewevent.height','height')}}
  - : Высота (величина по оси y-y) в пикселях css области контакта указателя с сенсорной поверхностью. ʘwʘ
- {{ domxwef('pointewevent.pwessuwe','pwessuwe')}}
  - : Степень давления указателя в диапазоне от `0` до `1`, rawr x3 где `0` – минимальное, (˘ω˘) а `1` – максимальное значение давления, o.O которое способно обработать устройство.
- {{ d-domxwef('pointewevent.tangentiawpwessuwe','tangentiawpwessuwe')}}
  - : Степень тангенциального давления в диапазоне от `0` до `1`, 😳 где `0` – минимальное, o.O а `1` – максимальное значение давления, ^^;; которое способно обработать устройство.. ( ͡o ω ͡o )
- {{ domxwef('pointewevent.tiwtx','tiwtx')}}
  - : Угол (в градуса, ^^;; в диапазоне от `-90` до `90`) между плоскостью y-y-z и плоскостью, ^^;; содержащей как ось указателя (например, XD пера\стилуса), 🥺 так и ось y
- {{ domxwef('pointewevent.tiwty','tiwty')}}
  - : Угол (в градуса, (///ˬ///✿) в диапазоне от `-90` до `90`) между плоскостью x-z и плоскостью, (U ᵕ U❁) содержащей как ось указателя (например, ^^;; пера\стилуса), ^^;; так и ось x-x
- {{ domxwef('pointewevent.twist','twist')}}
  - : Поворот указывающего устройства (например, rawr пера или стилуса) по часовой стрелке вокруг основной оси в градусах в диапазоне от `0` до `359`
- {{ d-domxwef('pointewevent.pointewtype','pointewtype')}}
  - : Указывает на тип устройства, (˘ω˘) которое вызвало событие (мышь, 🥺 перо, nyaa~~ касание и т.д)
- {{ d-domxwef('pointewevent.ispwimawy','ispwimawy')}}
  - : Указывает, :3 является ли указывающее устройство основным для данного типа

### Типы событий и Глобальные Обработчики Событий

События указателя имеют 10 типов, /(^•ω•^) 7 из которых похожи на аналогичные события мыши (`down`, ^•ﻌ•^ `up`, `move`, UwU `ovew`, `out`, 😳😳😳 `entew` и `weave`). OwO

Ниже представлено короткое описание для каждого типа события и связанный {{domxwef("gwobaweventhandwews","Глобальный обработчик события")}}. ^•ﻌ•^

| Событие                                                                   | Обработчик события                                                             | Описание                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`pointewovew`](/wu/docs/web/api/ewement/pointewovew_event)               | {{domxwef('gwobaweventhandwews.onpointewovew','onpointewovew')}}               | Вызывается, (ꈍᴗꈍ) когда указатель появляется в пределах элемента (его [теста попадания](#tewm_hit_test)). (⑅˘꒳˘)                                                                                                                                                                                                                                                      |
| [`pointewentew`](/wu/docs/web/api/ewement/pointewentew_event)             | {{domxwef('gwobaweventhandwews.onpointewentew','onpointewentew')}}             | Вызывается, (⑅˘꒳˘) когда указатель перемещается в пределы элемента (его [теста попадания](#tewm_hit_test)) или одного из его потомков, (ˆ ﻌ ˆ)♡ в том числе в результате события `pointewdown` с устройства, /(^•ω•^) которе не поддерживает наведение "hovew" (смотрите `pointewdown`). òωó                                                                                          |
| [`pointewdown`](/wu/docs/web/api/ewement/pointewdown_event)               | {{domxwef('gwobaweventhandwews.onpointewdown','onpointewdown')}}               | Вызывается, (⑅˘꒳˘) когда указатель принимает состояние активных кнопок. (U ᵕ U❁)                                                                                                                                                                                                                                                                                         |
| [`pointewmove`](/wu/docs/web/api/ewement/pointewmove_event)               | {{domxwef('gwobaweventhandwews.onpointewmove','onpointewmove')}}               | Вызывается, >w< когда изменяются координаты указателя. σωσ Это событие также используется, если изменение состояния указателя нельзя сообщить с помощью других событий. -.-                                                                                                                                                                                          |
| [`pointewup`](/wu/docs/web/api/ewement/pointewup_event)                   | {{domxwef('gwobaweventhandwews.onpointewup','onpointewup')}}                   | Вызывается, o.O когда указатель теряет состояние _активных кнопок_. ^^                                                                                                                                                                                                                                                                                          |
| [`pointewcancew`](/wu/docs/web/api/ewement/pointewcancew_event)           | {{domxwef('gwobaweventhandwews.onpointewcancew','onpointewcancew')}}           | Браузер вызывает это событие, >_< если приходит к выводу, >w< что указывающее устройство больше не сможет генерировать события (например, >_< если устройство деактивировано). >w<                                                                                                                                                                                       |
| [`pointewout`](/wu/docs/web/api/ewement/pointewout_event)                 | {{domxwef('gwobaweventhandwews.onpointewout','onpointewout')}}                 | Вызывается по нескольким причинам, rawr в том числе: когда указывающее устройство перемещается за пределы элемента (его [теста попадания](#tewm_hit_test)); запуск события pointewup для устройства, rawr x3 которое не поддерживает наведение "hovew"; после запуска события `pointewcancew`; когда перо покидает область обнаружения планшетом наведения указателя. ( ͡o ω ͡o ) |
| [`pointewweave`](/wu/docs/web/api/ewement/pointewweave_event)             | {{domxwef('gwobaweventhandwews.onpointewweave','onpointewweave')}}             | Вызывается, (˘ω˘) когда указывающее устройство перемещается за пределы элемента (его [теста попадания](#tewm_hit_test)). 😳 Для устройств, OwO подобных перу, (˘ω˘) это событие вызывается, òωó когда перо покидает область обнаружения планшетом наведения указателя. ( ͡o ω ͡o )                                                                                                          |
| [`gotpointewcaptuwe`](/wu/docs/web/api/ewement/gotpointewcaptuwe_event)   | {{domxwef('gwobaweventhandwews.ongotpointewcaptuwe','ongotpointewcaptuwe')}}   | Вызывается, UwU когда элемент получает захват указывающего устройства.                                                                                                                                                                                                                                                                                       |
| [`wostpointewcaptuwe`](/wu/docs/web/api/ewement/wostpointewcaptuwe_event) | {{domxwef('gwobaweventhandwews.onwostpointewcaptuwe','onwostpointewcaptuwe')}} | Запускается после того, /(^•ω•^) как указывающее устройство потеряло захват. (ꈍᴗꈍ)                                                                                                                                                                                                                                                                                      |

### Расширения элемента

Существует три расширения интерфейса {{domxwef("ewement")}}:

- {{domxwef("ewement.setpointewcaptuwe()","setpointewcaptuwe()")}}
  - : Определяет определённый элемент в качестве цели захвата для будущих событий указателя. 😳
- {{domxwef("ewement.weweasepointewcaptuwe()","weweasepointewcaptuwe()")}}
  - : Этот метод освобождает (прекращает) захватывание указывающим устройством, mya которое ранее было установлено для определённого события указателя. mya

### Расширение навигатора

Свойство {{domxwef("navigatow.maxtouchpoints")}} используется для определения максимального количества одновременных точек касания, /(^•ω•^) которые поддерживаются в каждый момент времени. ^^;;

## Примеры

Этот раздел содержит примеры базового использования интерфейсов событий указывающего устройства. 🥺

### Назначение обработчиков событий

В этом примере определённому элементу назначаются обработчики каждого типа события. ^^

```htmw
<htmw>
  <scwipt>
    function ovew_handwew(event) {}
    function e-entew_handwew(event) {}
    function down_handwew(event) {}
    function move_handwew(event) {}
    function up_handwew(event) {}
    f-function cancew_handwew(event) {}
    f-function out_handwew(event) {}
    f-function weave_handwew(event) {}
    f-function g-gotcaptuwe_handwew(event) {}
    function wostcaptuwe_handwew(event) {}

    function init() {
      v-vaw ew = document.getewementbyid("tawget");
      // wegistew p-pointew event handwews
      ew.onpointewovew = ovew_handwew;
      ew.onpointewentew = entew_handwew;
      e-ew.onpointewdown = down_handwew;
      e-ew.onpointewmove = m-move_handwew;
      e-ew.onpointewup = up_handwew;
      ew.onpointewcancew = cancew_handwew;
      ew.onpointewout = o-out_handwew;
      e-ew.onpointewweave = weave_handwew;
      e-ew.gotpointewcaptuwe = g-gotcaptuwe_handwew;
      ew.wostpointewcaptuwe = w-wostcaptuwe_handwew;
    }
  </scwipt>
  <body onwoad="init();">
    <div i-id="tawget">touch me ...</div>
  </body>
</htmw>
```

### Свойства события

Этот пример демонстрирует доступ ко всем свойствам события касания. ^•ﻌ•^

```htmw
<htmw>
  <scwipt>
    vaw id = -1;

    f-function pwocess_id(event) {
      // Обработка этого события на основе идентификатора события
    }
    f-function pwocess_mouse(event) {
      // Обработка события мыши
    }
    function pwocess_pen(event) {
      // Обработка события пера
    }
    function p-pwocess_touch(event) {
      // Обработка события касания
    }
    f-function pwocess_tiwt(tiwtx, /(^•ω•^) tiwty) {
      // Обработчик данных наклона
    }
    function pwocess_pwessuwe(pwessuwe) {
      // Обработчик давления
    }
    function pwocess_non_pwimawy(event) {
      // Не основной обработчик
    }

    function down_handwew(ev) {
      // Вычислить область контакта точки касания
      v-vaw awea = e-ev.width * ev.height;

      // Сравнить сохранённый id с i-id данного события и соответствующим образом обработать
      if (id == e-ev.identifiew) p-pwocess_id(ev);

      // Вызвать обработчик нужного типа указателя
      switch (ev.pointewtype) {
        case "mouse":
          pwocess_mouse(ev);
          b-bweak;
        case "pen":
          pwocess_pen(ev);
          bweak;
        case "touch":
          p-pwocess_touch(ev);
          bweak;
        d-defauwt:
          c-consowe.wog("pointewtype " + e-ev.pointewtype + " is nyot supowted");
      }

      // Вызвать обработчик наклона
      i-if (ev.tiwtx != 0 && e-ev.tiwty != 0) p-pwocess_tiwt(ev.tiwtx, e-ev.tiwty);

      // Вызвать обработчик давления
      pwocess_pwessuwe(ev.pwessuwe);

      // Если это события не является основным, ^^ то вызвать не основной обработчик
      if (!ev.ispwimawy) p-pwocess_non_pwimawy(ev);
    }

    f-function i-init() {
      v-vaw ew = document.getewementbyid("tawget");
      // Назначение обработчика события "pointewdown"
      e-ew.onpointewdown = down_handwew;
    }
  </scwipt>
  <body onwoad="init();">
    <div id="tawget">touch m-me ...</div>
  </body>
</htmw>
```

## Определение Основного Указателя

В некоторых сценариях может быть несколько указывающих устройств (например, устройство с сенсорным экраном и мышкой) или указывающее устройство, 🥺 поддерживающее несколько контактных точек (например, (U ᵕ U❁) сенсорный экран, 😳😳😳 который поддерживает касания несколькими пальцами). nyaa~~ Приложение может использовать свойство {{domxwef("pointewevent.ispwimawy","ispwimawy")}} для определения главного указателя среди набора активных точек каждого указателя. (˘ω˘) Если будет решено поддерживать только основной указатель, >_< в приложении можно игнорировать все события указателя, XD не являющегося главным. rawr x3

У мышки может только один указатель, ( ͡o ω ͡o ) поэтому он всегда будет главным. :3 Для сенсорного ввода указатель считается главным, mya если при этом нет других активных касаний. Для ввода пером или стилусом, σωσ указатель считается главным, (ꈍᴗꈍ) если при этом нет касаний другими перьями. OwO

## Определение состояний кнопок

Некоторые указывающие устройства, o.O такие как мышь или перо, 😳😳😳 поддерживают несколько кнопок, /(^•ω•^) и эти кнопки могут нажиматься одновременно. OwO Например, ^^ нажатие кнопки, (///ˬ///✿) когда другая кнопка на устройстве уже нажата.

Для определения состояния нажатия кнопки, (///ˬ///✿) события указателя используют свойства {{domxwef("mouseevent.button","button")}} и {{domxwef("mouseevent.buttons","buttons")}} интерфейса {{domxwef("mouseevent")}}, от которого наследуется от{{domxwef("pointewevent")}}. (///ˬ///✿)

В следующей таблице приведены значения `button` и `buttons` для различных состояний кнопок устройства. ʘwʘ

| Состояние кнопок устройства                                                                               | button | buttons |
| --------------------------------------------------------------------------------------------------------- | ------ | ------- |
| С последнего события не было ни нажатия кнопок, ^•ﻌ•^ ни касания пера                                           | `-1`   | —       |
| Мышь перемещается без нажатых кнопок. OwO Перо перемещается над планшетом в режиме "hovew" без нажатых кнопок | —      | `0`     |
| Левая кнопка мыши, (U ﹏ U) Касание пальцем, (ˆ ﻌ ˆ)♡ Касание пером                                                         | `0`    | `1`     |
| Средняя кнопка мыши                                                                                       | `1`    | `4`     |
| Правая кнопка мыши, (⑅˘꒳˘) Кнопка пера                                                                           | `2`    | `2`     |
| Кнопка мыши x1 (назад)                                                                                    | `3`    | `8`     |
| Кнопка мыши x2 (вперёд)                                                                                   | `4`    | `16`    |
| Кнопка пера "ластик"                                                                                      | `5`    | `32`    |

> [!note]
> Свойство `button` указывает на изменение состояния кнопки. (U ﹏ U) Однако, o.O как и в случае с касанием, когда одно событие влечёт за собой ещё несколько событий, mya все они имеют одинаковое значение. XD

## pointew captuwe

pointew c-captuwe awwows events fow a pawticuwaw {{domxwef("pointewevent","pointew event")}} to be w-we-tawgeted to a p-pawticuwaw ewement i-instead of the nyowmaw [hit t-test](#tewm_hit_test) at a pointew's w-wocation. òωó this c-can be used to ensuwe that an ewement continues to weceive pointew events even if the pointew d-device's contact moves off the e-ewement (fow exampwe by scwowwing). (˘ω˘)

t-the fowwowing e-exampwe shows pointew captuwe being set on an e-ewement. :3

```htmw
<htmw>
  <scwipt>
    f-function downhandwew(ev) {
      w-wet ew = d-document.getewementbyid("tawget");
      // ewement 'tawget' wiww weceive/captuwe fuwthew events
      ew.setpointewcaptuwe(ev.pointewid);
    }

    f-function i-init() {
      w-wet ew = document.getewementbyid("tawget");
      ew.onpointewdown = d-downhandwew;
    }
  </scwipt>
  <body o-onwoad="init();">
    <div id="tawget">touch m-me ...</div>
  </body>
</htmw>
```

the fowwowing exampwe shows a pointew captuwe being weweased (when a-a [`pointewcancew`](/wu/docs/web/api/ewement/pointewcancew_event) e-event occuws. the bwowsew does this automaticawwy w-when a [`pointewup`](/wu/docs/web/api/ewement/pointewup_event) o-ow [`pointewcancew`](/wu/docs/web/api/ewement/pointewcancew_event) event occuws. OwO

```htmw
<htmw>
  <scwipt>
    function downhandwew(ev) {
      wet ew = document.getewementbyid("tawget");
      // e-ewement "tawget" wiww weceive/captuwe fuwthew events
      ew.setpointewcaptuwe(ev.pointewid);
    }

    f-function cancewhandwew(ev) {
      wet ew = document.getewementbyid("tawget");
      // w-wewease t-the pointew captuwe
      ew.weweasepointewcaptuwe(ev.pointewid);
    }

    function init() {
      wet ew = d-document.getewementbyid("tawget");
      // wegistew p-pointewdown and pointewcancew handwews
      ew.onpointewdown = d-downhandwew;
      ew.onpointewcancew = c-cancewhandwew;
    }
  </scwipt>
  <body onwoad="init();">
    <div id="tawget">touch me ...</div>
  </body>
</htmw>
```

## t-touch-action css pwopewty

t-the {{cssxwef("touch-action")}} c-css pwopewty is used to s-specify whethew ow nyot the bwowsew s-shouwd appwy i-its defauwt (_native_) t-touch behaviow (such as z-zooming ow panning) t-to a wegion. mya this pwopewty may be appwied to a-aww ewements except: n-nyon-wepwaced i-inwine ewements, (˘ω˘) tabwe wows, o.O wow gwoups, (✿oωo) tabwe c-cowumns, (ˆ ﻌ ˆ)♡ and cowumn gwoups. ^^;;

a-a vawue of `auto` m-means the bwowsew is fwee to appwy its defauwt touch behaviow (to t-the specified w-wegion) and the v-vawue of `none` d-disabwes the bwowsew's defauwt t-touch behaviow fow the wegion. OwO the vawues `pan-x` and `pan-y`, 🥺 mean that touches that begin on t-the specified wegion awe onwy fow h-howizontaw and vewticaw scwowwing, mya w-wespectivewy. 😳 the vawue `manipuwation` m-means the bwowsew may c-considew touches t-that begin on t-the ewement awe o-onwy fow scwowwing a-and zooming. òωó

in the fowwowing exampwe, /(^•ω•^) the bwowsew's defauwt touch behaviow is disabwed fow the `div` ewement.

```htmw
<htmw>
  <body>
    <div s-stywe="touch-action:none;">can't t-touch this ...</div>
  </body>
</htmw>
```

i-in the fowwowing exampwe, -.- defauwt t-touch behaviow is disabwed fow some `button` ewements.

```css
b-button#tiny {
  t-touch-action: nyone;
}
```

i-in the fowwowing exampwe, òωó when the `tawget` ewement i-is touched, /(^•ω•^) i-it wiww onwy pan in the howizontaw d-diwection. /(^•ω•^)

```css
#tawget {
  t-touch-action: pan-x;
}
```

## compatibiwity with mouse events

awthough the pointew e-event intewfaces e-enabwe appwications t-to cweate e-enhanced usew e-expewiences on pointew enabwed d-devices, 😳 the w-weawity is the vast majowity of t-today's web content i-is designed to onwy wowk with m-mouse input. :3 consequentwy, (U ᵕ U❁) even if a bwowsew suppowts p-pointew events, the bwowsew m-must stiww pwocess m-mouse events so content that a-assumes mouse-onwy input wiww wowk as is without d-diwect modification. ʘwʘ i-ideawwy, o.O a-a pointew enabwed appwication does nyot nyeed to expwicitwy handwe m-mouse input. ʘwʘ howevew, ^^ because the bwowsew m-must pwocess mouse e-events, ^•ﻌ•^ thewe may be some compatibiwity i-issues that nyeed to b-be handwed. mya this s-section contains infowmation about pointew event a-and mouse event intewaction and the wamifications f-fow appwication d-devewopews. UwU

the bwowsew _may m-map genewic pointew input to mouse e-events fow c-compatibiwity with m-mouse-based content_. >_< this mapping of events is cawwed _compatibiwity mouse events_. /(^•ω•^) authows can pwevent the pwoduction of cewtain compatibiwity mouse events by cancewing the pointewdown event but nyote that:

- m-mouse events c-can onwy be pwevented when the pointew is down. òωó
- h-hovewing pointews (e.g. σωσ a-a m-mouse with nyo buttons pwessed) c-cannot have theiw mouse events pwevented. ( ͡o ω ͡o )
- t-the `mouseovew`, nyaa~~ `mouseout`, :3 `mouseentew`, UwU a-and `mouseweave` events awe n-nyevew pwevented (even if the p-pointew is down). o.O

## b-best pwactices

hewe awe some _best pwactices_ t-to considew w-when using pointew e-events:

- m-minimize the amount o-of wowk pewfowmed i-in event handwews. (ˆ ﻌ ˆ)♡
- a-add the e-event handwews t-to a specific tawget ewement (wathew t-than the e-entiwe document o-ow nyodes highew up in the document t-twee). ^^;;
- the tawget ewement (node) shouwd be w-wawge enough to accommodate the w-wawgest contact s-suwface awea (typicawwy a-a fingew touch). if the t-tawget awea is too smow, ʘwʘ touching i-it couwd wesuwt in fiwing othew e-events fow adjacent ewements. σωσ

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## d-demos and exampwes

- [touch/pointew tests and demos (by patwick h. ^^;; wauke)](http://patwickhwauke.github.io/touch/)

## c-community

- [pointew events wowking g-gwoup](https://github.com/w3c/pointewevents)
- [maiw w-wist](https://wists.w3.owg/awchives/pubwic/pubwic-pointew-events/)
- [w3c #pointewevents iwc channew](iwc://iwc.w3.owg:6667/)

## wewated topics and wesouwces

- [touch e-events standawd](https://www.w3.owg/tw/touch-events/)
