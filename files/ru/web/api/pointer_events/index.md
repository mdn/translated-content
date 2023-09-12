---
title: События указателя
slug: Web/API/Pointer_events
---

{{DefaultAPISidebar("Pointer Events")}}

Бо́льшая часть современного веб-контента предполагает, что указывающим устройством пользователя является мышь. Но поскольку многие устройства поддерживают другие типы указателей, таких как перо/стилус или сенсорная поверхность, возникает необходимость в расширении существующих событий указывающих устройств. Эту потребность удовлетворяют _[События указателя](#term_pointer_event)_.

События указателя – это события DOM, которые вызываются для указывающего устройства. Они предназначены для создания единой модели обработки действий мыши, пера/стилуса или касания (одним или несколькими пальцами).

_[Указывающее устройство](#term_pointer) –_ это устройство, способное нацеливаться на определённый набор координат экрана. Наличие единой модели событий для указывающих устройств позволяет разработчикам проще создавать веб-сайты и приложения, а пользователям обеспечивает удобство использования вне зависимости от устройства.

События, необходимые для обработки общего ввода указывающих устройств, аналогичны {{domxref("MouseEvent","событиям мыши")}} (`mousedown`/`pointerdown`, `mousemove`/`pointermove`, и так далее.). Следовательно, типы событий указывающих устройств намеренно похожи на события мыши.

В дополнение к обычным свойствам, представленным и в событиях мыши (координаты, целевой элемент, состояния кнопок и так далее) события ввода у разных указывающих устройств содержат и уникальные свойства: степень давления, форма области контакта, наклон и так далее. На самом деле, интерфейс {{domxref("PointerEvent")}} наследует все свойства {{domxref("MouseEvent")}}, облегчая так образом перенос содержимого из событий мыши в события указывающего устройства.

## Терминология

- Состояние активных кнопок
  - : Ситуация, когда *[указывающее устройство](#term_pointer) *имеет ненулевое значение свойства `buttons`. Например, в случае с пером, это ситуация, когда перо физически контактирует с сенсорной поверхностью. или хотя бы одна кнопка нажата при наведении курсора.
- Активное указывающее устройство
  - : Любое _[указывающее](#term_pointer)_ устройство ввода, которое может производить события. Указывающее устройство считается активным, пока может производить события. Например, перо, которым коснулись экрана, считается активным, поскольку может производить дополнительные события при поднятии или перемещении.
- Графический планшет (диджитайзер)
  - : Устройство с чувствительным покрытием, которое может фиксировать контакт. Чаще всего, это устройство с сенсорным экраном, который может распознавать касания указывающего устройства, такого как перо, стилус или палец. Некоторые сенсорные устройства могут определять приближение указателя и представлять это состояние как наведение мыши.
- Тест попадания (hit test)
  - : Процесс, который браузер использует при определении целевого элемента для события указывающего устройства. Обычно заключается в сопоставлении позиции указателя и визуальной области элементов на экране.
- Указатель (указывающее устройство)
  - : Представление устройства ввода, которое может нацеливаться на определённую координату (или набор координат) на экране. Примером указателя может быть мышь, перо/стилус и прикосновение.
- Захват указателя
  - : Захват указателя позволяет событиям этого указателя быть перенаправленными на элемент, отличный обычного результата проверки попадания (hit test)
- Событие указателя
  - : {{domxref("PointerEvent","Событие")}} DOM , вызванное для _[указателя](#term_pointer)_.

## Интерфейсы

Основным интерфейсом является {{domxref("PointerEvent")}}, который имеет {{domxref("PointerEvent.PointerEvent","constructor")}} плюс несколько типов событий и связанные с ними глобальные обработчики событий.

Стандарт также включает некоторые расширения для интерфейсов {{domxref("Element")}} и {{domxref("Navigator")}}.

Следующие подразделы содержат краткое описание каждого интерфейса и свойства.

### Интерфейс PointerEvent

Интерфейс {{domxref("PointerEvent")}} расширяет интерфейс {{domxref("MouseEvent")}} и имеет следующие свойства. Все следующие свойства доступны {{readonlyInline}}.

- {{ domxref('PointerEvent.pointerId','pointerId')}}
  - : Уникальный идентификатор указателя, вызвавшего событие
- {{ domxref('PointerEvent.width','width')}}
  - : Ширина (величина по оси X) в пикселях CSS области контакта указателя с сенсорной поверхностью.
- {{ domxref('PointerEvent.height','height')}}
  - : Высота (величина по оси Y) в пикселях CSS области контакта указателя с сенсорной поверхностью.
- {{ domxref('PointerEvent.pressure','pressure')}}
  - : Степень давления указателя в диапазоне от `0` до `1`, где `0` – минимальное, а `1` – максимальное значение давления, которое способно обработать устройство.
- {{ domxref('PointerEvent.tangentialPressure','tangentialPressure')}}
  - : Степень тангенциального давления в диапазоне от `0` до `1`, где `0` – минимальное, а `1` – максимальное значение давления, которое способно обработать устройство..
- {{ domxref('PointerEvent.tiltX','tiltX')}}
  - : Угол (в градуса, в диапазоне от `-90` до `90`) между плоскостью Y-Z и плоскостью, содержащей как ось указателя (например, пера\стилуса), так и ось Y
- {{ domxref('PointerEvent.tiltY','tiltY')}}
  - : Угол (в градуса, в диапазоне от `-90` до `90`) между плоскостью X-Z и плоскостью, содержащей как ось указателя (например, пера\стилуса), так и ось X
- {{ domxref('PointerEvent.twist','twist')}}
  - : Поворот указывающего устройства (например, пера или стилуса) по часовой стрелке вокруг основной оси в градусах в диапазоне от `0` до `359`
- {{ domxref('PointerEvent.pointerType','pointerType')}}
  - : Указывает на тип устройства, которое вызвало событие (мышь, перо, касание и т.д)
- {{ domxref('PointerEvent.isPrimary','isPrimary')}}
  - : Указывает, является ли указывающее устройство основным для данного типа

### Типы событий и Глобальные Обработчики Событий

События указателя имеют 10 типов, 7 из которых похожи на аналогичные события мыши (`down`, `up`, `move`, `over`, `out`, `enter` и `leave`).

Ниже представлено короткое описание для каждого типа события и связанный {{domxref("GlobalEventHandlers","Глобальный обработчик события")}}.

| Событие                         | Обработчик события                                                             | Описание                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{event('pointerover')}}        | {{domxref('GlobalEventHandlers.onpointerover','onpointerover')}}               | Вызывается, когда указатель появляется в пределах элемента (его [теста попадания](#term_hit_test)).                                                                                                                                                                                                                                                      |
| {{event('pointerenter')}}       | {{domxref('GlobalEventHandlers.onpointerenter','onpointerenter')}}             | Вызывается, когда указатель перемещается в пределы элемента (его [теста попадания](#term_hit_test)) или одного из его потомков, в том числе в результате события `pointerdown` с устройства, которе не поддерживает наведение "hover" (смотрите `pointerdown`).                                                                                          |
| {{event('pointerdown')}}        | {{domxref('GlobalEventHandlers.onpointerdown','onpointerdown')}}               | Вызывается, когда указатель принимает состояние активных кнопок.                                                                                                                                                                                                                                                                                         |
| {{event('pointermove')}}        | {{domxref('GlobalEventHandlers.onpointermove','onpointermove')}}               | Вызывается, когда изменяются координаты указателя. Это событие также используется, если изменение состояния указателя нельзя сообщить с помощью других событий.                                                                                                                                                                                          |
| {{event('pointerup')}}          | {{domxref('GlobalEventHandlers.onpointerup','onpointerup')}}                   | Вызывается, когда указатель теряет состояние _активных кнопок_.                                                                                                                                                                                                                                                                                          |
| {{event('pointercancel')}}      | {{domxref('GlobalEventHandlers.onpointercancel','onpointercancel')}}           | Браузер вызывает это событие, если приходит к выводу, что указывающее устройство больше не сможет генерировать события (например, если устройство деактивировано).                                                                                                                                                                                       |
| {{event('pointerout')}}         | {{domxref('GlobalEventHandlers.onpointerout','onpointerout')}}                 | Вызывается по нескольким причинам, в том числе: когда указывающее устройство перемещается за пределы элемента (его [теста попадания](#term_hit_test)); запуск события pointerup для устройства, которое не поддерживает наведение "hover"; после запуска события `pointercancel`; когда перо покидает область обнаружения планшетом наведения указателя. |
| {{event('pointerleave')}}       | {{domxref('GlobalEventHandlers.onpointerleave','onpointerleave')}}             | Вызывается, когда указывающее устройство перемещается за пределы элемента (его [теста попадания](#term_hit_test)). Для устройств, подобных перу, это событие вызывается, когда перо покидает область обнаружения планшетом наведения указателя.                                                                                                          |
| {{event('gotpointercapture')}}  | {{domxref('GlobalEventHandlers.ongotpointercapture','ongotpointercapture')}}   | Вызывается, когда элемент получает захват указывающего устройства.                                                                                                                                                                                                                                                                                       |
| {{event('lostpointercapture')}} | {{domxref('GlobalEventHandlers.onlostpointercapture','onlostpointercapture')}} | Запускается после того, как указывающее устройство потеряло захват.                                                                                                                                                                                                                                                                                      |

### Расширения элемента

Существует три расширения интерфейса {{domxref("Element")}}:

- {{domxref("Element.setPointerCapture()","setPointerCapture()")}}
  - : Определяет определённый элемент в качестве цели захвата для будущих событий указателя.
- {{domxref("Element.releasePointerCapture()","releasePointerCapture()")}}
  - : Этот метод освобождает (прекращает) захватывание указывающим устройством, которое ранее было установлено для определённого события указателя.

### Расширение навигатора

Свойство {{domxref("Navigator.maxTouchPoints")}} используется для определения максимального количества одновременных точек касания, которые поддерживаются в каждый момент времени.

## Примеры

Этот раздел содержит примеры базового использования интерфейсов событий указывающего устройства.

### Назначение обработчиков событий

В этом примере определённому элементу назначаются обработчики каждого типа события.

```html
<html>
  <script>
    function over_handler(event) {}
    function enter_handler(event) {}
    function down_handler(event) {}
    function move_handler(event) {}
    function up_handler(event) {}
    function cancel_handler(event) {}
    function out_handler(event) {}
    function leave_handler(event) {}
    function gotcapture_handler(event) {}
    function lostcapture_handler(event) {}

    function init() {
      var el = document.getElementById("target");
      // Register pointer event handlers
      el.onpointerover = over_handler;
      el.onpointerenter = enter_handler;
      el.onpointerdown = down_handler;
      el.onpointermove = move_handler;
      el.onpointerup = up_handler;
      el.onpointercancel = cancel_handler;
      el.onpointerout = out_handler;
      el.onpointerleave = leave_handler;
      el.gotpointercapture = gotcapture_handler;
      el.lostpointercapture = lostcapture_handler;
    }
  </script>
  <body onload="init();">
    <div id="target">Touch me ...</div>
  </body>
</html>
```

### Свойства события

Этот пример демонстрирует доступ ко всем свойствам события касания.

```html
<html>
  <script>
    var id = -1;

    function process_id(event) {
      // Обработка этого события на основе идентификатора события
    }
    function process_mouse(event) {
      // Обработка события мыши
    }
    function process_pen(event) {
      // Обработка события пера
    }
    function process_touch(event) {
      // Обработка события касания
    }
    function process_tilt(tiltX, tiltY) {
      // Обработчик данных наклона
    }
    function process_pressure(pressure) {
      // Обработчик давления
    }
    function process_non_primary(event) {
      // Не основной обработчик
    }

    function down_handler(ev) {
      // Вычислить область контакта точки касания
      var area = ev.width * ev.height;

      // Сравнить сохранённый ID с ID данного события и соответствующим образом обработать
      if (id == ev.identifier) process_id(ev);

      // Вызвать обработчик нужного типа указателя
      switch (ev.pointerType) {
        case "mouse":
          process_mouse(ev);
          break;
        case "pen":
          process_pen(ev);
          break;
        case "touch":
          process_touch(ev);
          break;
        default:
          console.log("pointerType " + ev.pointerType + " is Not suported");
      }

      // Вызвать обработчик наклона
      if (ev.tiltX != 0 && ev.tiltY != 0) process_tilt(ev.tiltX, ev.tiltY);

      // Вызвать обработчик давления
      process_pressure(ev.pressure);

      // Если это события не является основным, то вызвать не основной обработчик
      if (!ev.isPrimary) process_non_primary(ev);
    }

    function init() {
      var el = document.getElementById("target");
      // Назначение обработчика события "pointerdown"
      el.onpointerdown = down_handler;
    }
  </script>
  <body onload="init();">
    <div id="target">Touch me ...</div>
  </body>
</html>
```

## Определение Основного Указателя

В некоторых сценариях может быть несколько указывающих устройств (например, устройство с сенсорным экраном и мышкой) или указывающее устройство, поддерживающее несколько контактных точек (например, сенсорный экран, который поддерживает касания несколькими пальцами). Приложение может использовать свойство {{domxref("PointerEvent.isPrimary","isPrimary")}} для определения главного указателя среди набора активных точек каждого указателя. Если будет решено поддерживать только основной указатель, в приложении можно игнорировать все события указателя, не являющегося главным.

У мышки может только один указатель, поэтому он всегда будет главным. Для сенсорного ввода указатель считается главным, если при этом нет других активных касаний. Для ввода пером или стилусом, указатель считается главным, если при этом нет касаний другими перьями.

## Определение состояний кнопок

Некоторые указывающие устройства, такие как мышь или перо, поддерживают несколько кнопок, и эти кнопки могут нажиматься одновременно. Например, нажатие кнопки, когда другая кнопка на устройстве уже нажата.

Для определения состояния нажатия кнопки, события указателя используют свойства {{domxref("MouseEvent.button","button")}} и {{domxref("MouseEvent.buttons","buttons")}} интерфейса {{domxref("MouseEvent")}}, от которого наследуется от{{domxref("PointerEvent")}}.

В следующей таблице приведены значения `button` и `buttons` для различных состояний кнопок устройства.

| Состояние кнопок устройства                                                                               | button | buttons |
| --------------------------------------------------------------------------------------------------------- | ------ | ------- |
| С последнего события не было ни нажатия кнопок, ни касания пера                                           | `-1`   | —       |
| Мышь перемещается без нажатых кнопок. Перо перемещается над планшетом в режиме "hover" без нажатых кнопок | —      | `0`     |
| Левая кнопка мыши, Касание пальцем, Касание пером                                                         | `0`    | `1`     |
| Средняя кнопка мыши                                                                                       | `1`    | `4`     |
| Правая кнопка мыши, Кнопка пера                                                                           | `2`    | `2`     |
| Кнопка мыши X1 (назад)                                                                                    | `3`    | `8`     |
| Кнопка мыши X2 (вперёд)                                                                                   | `4`    | `16`    |
| Кнопка пера "ластик"                                                                                      | `5`    | `32`    |

> **Примечание:** Свойство `button` указывает на изменение состояния кнопки. Однако, как и в случае с касанием, когда одно событие влечёт за собой ещё несколько событий, все они имеют одинаковое значение.

## Pointer capture

Pointer capture allows events for a particular {{domxref("PointerEvent","pointer event")}} to be re-targeted to a particular element instead of the normal [hit test](#term_hit_test) at a pointer's location. This can be used to ensure that an element continues to receive pointer events even if the pointer device's contact moves off the element (for example by scrolling).

The following example shows pointer capture being set on an element.

```html
<html>
  <script>
    function downHandler(ev) {
      let el = document.getElementById("target");
      // Element 'target' will receive/capture further events
      el.setPointerCapture(ev.pointerId);
    }

    function init() {
      let el = document.getElementById("target");
      el.onpointerdown = downHandler;
    }
  </script>
  <body onload="init();">
    <div id="target">Touch me ...</div>
  </body>
</html>
```

The following example shows a pointer capture being released (when a {{event("pointercancel")}} event occurs. The browser does this automatically when a {{event("pointerup")}} or {{event("pointercancel")}} event occurs.

```html
<html>
  <script>
    function downHandler(ev) {
      let el = document.getElementById("target");
      // Element "target" will receive/capture further events
      el.setPointerCapture(ev.pointerId);
    }

    function cancelHandler(ev) {
      let el = document.getElementById("target");
      // Release the pointer capture
      el.releasePointerCapture(ev.pointerId);
    }

    function init() {
      let el = document.getElementById("target");
      // Register pointerdown and pointercancel handlers
      el.onpointerdown = downHandler;
      el.onpointercancel = cancelHandler;
    }
  </script>
  <body onload="init();">
    <div id="target">Touch me ...</div>
  </body>
</html>
```

## touch-action CSS property

The {{cssxref("touch-action")}} CSS property is used to specify whether or not the browser should apply its default (_native_) touch behavior (such as zooming or panning) to a region. This property may be applied to all elements except: non-replaced inline elements, table rows, row groups, table columns, and column groups.

A value of `auto` means the browser is free to apply its default touch behavior (to the specified region) and the value of `none` disables the browser's default touch behavior for the region. The values `pan-x` and `pan-y`, mean that touches that begin on the specified region are only for horizontal and vertical scrolling, respectively. The value `manipulation` means the browser may consider touches that begin on the element are only for scrolling and zooming.

In the following example, the browser's default touch behavior is disabled for the `div` element.

```html
<html>
  <body>
    <div style="touch-action:none;">Can't touch this ...</div>
  </body>
</html>
```

In the following example, default touch behavior is disabled for some `button` elements.

```css
button#tiny {
  touch-action: none;
}
```

In the following example, when the `target` element is touched, it will only pan in the horizontal direction.

```css
#target {
  touch-action: pan-x;
}
```

## Compatibility with mouse events

Although the pointer event interfaces enable applications to create enhanced user experiences on pointer enabled devices, the reality is the vast majority of today's web content is designed to only work with mouse input. Consequently, even if a browser supports pointer events, the browser must still process mouse events so content that assumes mouse-only input will work as is without direct modification. Ideally, a pointer enabled application does not need to explicitly handle mouse input. However, because the browser must process mouse events, there may be some compatibility issues that need to be handled. This section contains information about pointer event and mouse event interaction and the ramifications for application developers.

The browser _may map generic pointer input to mouse events for compatibility with mouse-based content_. This mapping of events is called _compatibility mouse events_. Authors can prevent the production of certain compatibility mouse events by canceling the pointerdown event but note that:

- Mouse events can only be prevented when the pointer is down.
- Hovering pointers (e.g. a mouse with no buttons pressed) cannot have their mouse events prevented.
- The `mouseover`, `mouseout`, `mouseenter`, and `mouseleave` events are never prevented (even if the pointer is down).

## Best practices

Here are some _best practices_ to consider when using pointer events:

- Minimize the amount of work performed in event handlers.
- Add the event handlers to a specific target element (rather than the entire document or nodes higher up in the document tree).
- The target element (node) should be large enough to accommodate the largest contact surface area (typically a finger touch). If the target area is too small, touching it could result in firing other events for adjacent elements.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## Demos and examples

- [Touch/pointer tests and demos (by Patrick H. Lauke)](http://patrickhlauke.github.io/touch/)

## Community

- [Pointer Events Working Group](https://github.com/w3c/pointerevents)
- [Mail list](http://lists.w3.org/Archives/Public/public-pointer-events/)
- [W3C #pointerevents IRC channel](irc://irc.w3.org:6667/)

## Related topics and resources

- [Touch Events Standard](http://www.w3.org/TR/touch-events/)
