---
title: События касаний (тач-события)
slug: Web/API/Touch_events
---

{{DefaultAPISidebar("Touch Events")}}

Чтобы предоставить качественную поддержку пользовательского интерфейса, связанного с касаниями, тач-события предлагают возможность интерпретировать действия пальца (или стилуса) на сенсорных экранах или трекпадах.

Интерфейсы событий касания - это относительно низкоуровневые API, которые можно использовать для поддержки приложений со специфическими мультитач-взаимодействиями, например жестом двумя пальцами. Мультитач взаимодействие запускается, когда палец (или стилус) впервые касается контактной поверхности. Другие пальцы могут следом коснуться поверхности и, если нужно, перемещаться по ней. Взаимодействие считается завершённым, когда пальцы с поверхности убираются. Во время взаимодействия, события касания срабатывают на начальном этапе (первое прикосновение), этапе перемещения по поверхности, и завершающем этапе (когда пальцы убираются с поверхности)..

События касаний подобны событиям мыши за исключением того, что они поддерживают несколько одновременных касаний в разных местах сенсорной поверхности. Интерфейс {{domxref("TouchEvent")}} содержит все активные в данный момент точки прикосновения. Интерфейс {{domxref("Touch")}}, который представляет одну точку касания, включает такую информацию, как позиция точки касания относительно области видимости браузера.

## Определения

- Поверхность (Surface)
  - : Чувствительная к касаниям поверхность. Это может быть экран или трекпад.

<!---->

- Точка касания (Touch point)
  - : Точка контакта с поверхностью. Это может быть палец (или локоть, ухо, нос, что угодно, но обычно это палец) или стилус.

## Интерфейсы

- {{domxref("TouchEvent")}}
  - : Представляет событие, происходящее при изменении состояния касания поверхности.
- {{domxref("Touch")}}
  - : Представляет одну точку контакта пользователя с сенсорной поверхностью.
- {{domxref("TouchList")}}
  - : Представляет группу касаний; это используется, если пользователь, например, касается поверхности несколькими пальцами одновременно.

## Пример

В этом примере отслеживаются несколько касаний одновременно, позволяя пользователю рисовать в {{HTMLElement("canvas")}} несколькими пальцами одновременно. Это будет работать лишь в браузере, который поддерживает touch-события.

> **Примечание:** В тексте ниже для описания контакта с поверхностью используется понятие "палец", но это также может быть стилус или другой способ контакта.

### Создание canvas

```html
<canvas id="canvas" width="600" height="600" style="border:solid black 1px;">
  Ваш браузер не поддерживает элемент canvas.
</canvas>
<br />
Log:
<pre id="log" style="border: 1px solid #ccc;"></pre>
```

### Добавление обработчиков событий

После загрузки страницы будет вызвана функция `startup()`, показанная ниже

```js
function startup() {
  var el = document.getElementById("canvas");
  el.addEventListener("touchstart", handleStart, false);
  el.addEventListener("touchend", handleEnd, false);
  el.addEventListener("touchcancel", handleCancel, false);
  el.addEventListener("touchmove", handleMove, false);
}
```

document.addEventListener("DOMContentLoaded", startup);

Данная функция просто добавляет обработчики событий для элемента {{HTMLElement("canvas")}}, чтобы мы могли обрабатывать события касания по мере их возникновения

#### Отслеживание новых касаний

Рассмотрим касания в действии.

```js
var ongoingTouches = [];
```

Когда возникает событие {{event("touchstart")}}, свидетельствующее о новом касании к поверхности, вызывается приведённая ниже функция `handleStart()`.

```js
function handleStart(evt) {
  evt.preventDefault();
  console.log("touchstart.");
  var el = document.getElementById("canvas");
  var ctx = el.getContext("2d");
  var touches = evt.changedTouches;

  for (var i = 0; i < touches.length; i++) {
    console.log("touchstart:" + i + "...");
    ongoingTouches.push(copyTouch(touches[i]));
    var color = colorForTouch(touches[i]);
    ctx.beginPath();
    ctx.arc(touches[i].pageX, touches[i].pageY, 4, 0, 2 * Math.PI, false); // a circle at the start
    ctx.fillStyle = color;
    ctx.fill();
    console.log("touchstart:" + i + ".");
  }
}
```

Она вызывает {{domxref("event.preventDefault()")}} для того, чтобы предотвратить обработку браузером события касания (это также предотвращает обработку события мыши). Затем мы получаем контекст и извлекаем список изменённых точек касаний из свойства {{domxref("TouchEvent.changedTouches")}} данного события.

После этого мы перебираем все объекты {{domxref("Touch")}} в списке, помещая их в массив активных точек касания и рисуя начальную точку в виде маленького кружка; мы используем линию толщиной 4 пикселя, поэтому получим аккуратный круг радиусом 4 пикселя.

#### Рисование движением

Каждый раз, когда двигается один или несколько пальцев, срабатывает событие {{event("touchmove")}}, в результате чего вызывается наша функция `handleMove()`.В этом примере данная функция ответственна за обновление данных о касании и рисование линии от предыдущей до текущей точки касания.

```js
function handleMove(evt) {
  evt.preventDefault();
  var el = document.getElementById("canvas");
  var ctx = el.getContext("2d");
  var touches = evt.changedTouches;

  for (var i = 0; i < touches.length; i++) {
    var color = colorForTouch(touches[i]);
    var idx = ongoingTouchIndexById(touches[i].identifier);

    if (idx >= 0) {
      console.log("continuing touch " + idx);
      ctx.beginPath();
      console.log(
        "ctx.moveTo(" +
          ongoingTouches[idx].pageX +
          ", " +
          ongoingTouches[idx].pageY +
          ");",
      );
      ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
      console.log(
        "ctx.lineTo(" + touches[i].pageX + ", " + touches[i].pageY + ");",
      );
      ctx.lineTo(touches[i].pageX, touches[i].pageY);
      ctx.lineWidth = 4;
      ctx.strokeStyle = color;
      ctx.stroke();

      ongoingTouches.splice(idx, 1, copyTouch(touches[i])); // swap in the new touch record
      console.log(".");
    } else {
      console.log("can't figure out which touch to continue");
    }
  }
}
```

Функция также перебирает изменённые касания, ищет в нашем массиве данных о касаниях предыдущие данные о каждом касании для определения начальной точки каждого отрезка линии, который должен быть нарисован с помощью касания. Это реализовано путём отслеживания свойства {{domxref("Touch.identifier")}} каждого касания. Это свойство является уникальным числом для каждого касания, и остаётся неизменным на протяжении всего времени контакта пальца с экраном.

Это позволяет нам получать координаты предыдущей позиции каждого касания и использовать подходящий метод "canvas-контекста" для рисования отрезка линии, соединяющего начало и конец.

После рисования линии, мы вызываем [`Array.splice()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice), чтобы в массиве `ongoingTouches` заменить предыдущие данные о точке касания на текущие.

#### Обработка завершения касания

Когда пользователь убирает палец с сенсорной поверхности, срабатывает событие {{domxref("Element/touchend_event", "touchend")}}. Мы обрабатываем его, вызывая функцию `handleEnd()`, которая представлена ниже. Её задача - рисовать последний отрезок линии для каждого касания, которое завершилось, и удалять точку касания из текущего списка касаний.

```js
function handleEnd(evt) {
  evt.preventDefault();
  log("touchend");
  var el = document.getElementById("canvas");
  var ctx = el.getContext("2d");
  var touches = evt.changedTouches;

  for (var i = 0; i < touches.length; i++) {
    var color = colorForTouch(touches[i]);
    var idx = ongoingTouchIndexById(touches[i].identifier);

    if (idx >= 0) {
      ctx.lineWidth = 4;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
      ctx.lineTo(touches[i].pageX, touches[i].pageY);
      ctx.fillRect(touches[i].pageX - 4, touches[i].pageY - 4, 8, 8); // and a square at the end
      ongoingTouches.splice(idx, 1); // remove it; we're done
    } else {
      console.log("can't figure out which touch to end");
    }
  }
}
```

Она очень похожа на предыдущую функцию; единственное отличие заключается в том, что,что теперь мы рисуем маленький квадрат, чтобы обозначить конец, и в том, что когда мы мы вызываем [`Array.splice()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice), мы просто удаляем старую запись из текущего списка касаний без добавления обновлённой информации. В результате мы прекращаем отслеживать эту точку касания.

#### Обработка отменённых касаний

Если палец пользователя перемещается в интерфейс браузера или прикосновение должно быть отменено, отправляется событие {{domxref("Element/touchcancel_event", "touchcancel")}}, и мы вызываем функцию `handleCancel()`, приведённую ниже.

```js
function handleCancel(evt) {
  evt.preventDefault();
  console.log("touchcancel.");
  var touches = evt.changedTouches;

  for (var i = 0; i < touches.length; i++) {
    var idx = ongoingTouchIndexById(touches[i].identifier);
    ongoingTouches.splice(idx, 1); // remove it; we're done
  }
}
```

Поскольку идея состоит в том, чтобы немедленно прервать касание, мы просто удаляем его из текущего списка касаний без рисования завершающего отрезка линии.

### Удобные функции

Этот пример использует две удобные функции, которые следует кратко рассмотреть, чтобы сделать остальную часть кода более понятной.

#### Выбор цвета для каждого касания

Чтобы рисунок каждого касания выглядел по-разному, используется функция `colorForTouch()`, в которой цвета выбираются на основе уникального идентификатора касаний. Этот идентификатор является скрытым числом, но мы, по крайней мере, можем полагаться на то, что у каждого активного на данный момент касания он уникальный.

```js
function colorForTouch(touch) {
  var r = touch.identifier % 16;
  var g = Math.floor(touch.identifier / 3) % 16;
  var b = Math.floor(touch.identifier / 7) % 16;
  r = r.toString(16); // make it a hex digit
  g = g.toString(16); // make it a hex digit
  b = b.toString(16); // make it a hex digit
  var color = "#" + r + g + b;
  console.log(
    "color for touch with identifier " + touch.identifier + " = " + color,
  );
  return color;
}
```

Результатом этой функции является строка, которую можно использовать при вызове {{HTMLElement("canvas")}}-функций для задания цвета рисования. Например, для значения {{domxref("Touch.identifier")}}, равного 10, результатом будет "#a31".

#### Копирование объекта касания

Некоторые браузеры (например, мобильный Safari) повторно используют объекты касания в разных событиях, поэтому лучше копировать только важные свойства, а не ссылаться на весь объект.

```js
function copyTouch({ identifier, pageX, pageY }) {
  return { identifier, pageX, pageY };
}
```

#### Поиск текущего касания

Приведённая ниже функция `ongoingTouchIndexById()` сканирует весь массив `ongoingTouches`, чтобы найти касание, соответствующее данному идентификатору, после чего возвращает в массив индекс этого касания.

```js
function ongoingTouchIndexById(idToFind) {
  for (var i = 0; i < ongoingTouches.length; i++) {
    var id = ongoingTouches[i].identifier;

    if (id == idToFind) {
      return i;
    }
  }
  return -1; // not found
}
```

#### Отображение происходящего

```js
function log(msg) {
  var p = document.getElementById("log");
  p.innerHTML = msg + "\n" + p.innerHTML;
}
```

Если ваш браузер поддерживает это, вы можете {{LiveSampleLink('Example', 'посмотреть живой пример')}}.

[Пример sFiddle](http://jsfiddle.net/Darbicus/z3Xdx/10/)

## Дополнительные советы

Этот раздел даёт дополнительные советы о том, как обрабатывать события касаний в ваших веб-приложениях.

### Обработка кликов

Поскольку вызов `preventDefault()` для события {{event("touchstart")}} или первого события из серии событий {{domxref("Element/touchmove_event", "touchmove")}} предотвращает запуск соответствующих событий мыши, более распространена практика вызова `preventDefault()` именно для события `touchmove`, а не `touchstart`. Таким образом, события мыши всё ещё будут вызываться, а такие элементы, как ссылки, будут продолжать работать. В качестве альтернативы, в некоторых фреймворках для этой же цели события касаний дублируются событиями мыши.

Данный пример очень упрощён и может привести к странному поведению. Он уместен исключительно как учебный пример.

```js
function onTouch(evt) {
  evt.preventDefault();
  if (
    evt.touches.length > 1 ||
    (evt.type == "touchend" && evt.touches.length > 0)
  )
    return;

  var newEvt = document.createEvent("MouseEvents");
  var type = null;
  var touch = null;

  switch (evt.type) {
    case "touchstart":
      type = "mousedown";
      touch = evt.changedTouches[0];
      break;
    case "touchmove":
      type = "mousemove";
      touch = evt.changedTouches[0];
      break;
    case "touchend":
      type = "mouseup";
      touch = evt.changedTouches[0];
      break;
  }

  newEvt.initMouseEvent(
    type,
    true,
    true,
    evt.originalTarget.ownerDocument.defaultView,
    0,
    touch.screenX,
    touch.screenY,
    touch.clientX,
    touch.clientY,
    evt.ctrlKey,
    evt.altKey,
    evt.shiftKey,
    evt.metaKey,
    0,
    null,
  );
  evt.originalTarget.dispatchEvent(newEvt);
}
```

### Вызов preventDefault() только при втором касании

Один из способов запретить использовать на странице `pinchZoom` (зум с помощью щипка), – вызвать `preventDefault()` для второго касания, когда одно касание уже активно. Такое поведение плохо прописано в спецификации событий касаний и приводит к разному поведению в разных браузерах. Например, iOS предотвратит зум, но всё ещё будет позволять перетаскивание (panning) двумя пальцами; в Android, наоборот, можно будет осуществлять перетаскивание (panning), но не зум; Opera и Firefox на данный момент предотвращают и перетаскивание (panning) и зум. На данный момент для запрета использования зума рекомендуется полагаться не на какое-то конкретное поведение, а на meta-данные для "viewport".

## Спецификация

| Specification                                       |
| --------------------------------------------------- |
| [Touch Events](https://w3c.github.io/touch-events/) |

## Совместимость с браузером

### Touch

События касаний обычно доступны на устройствах с сенсорными экранами, но многие браузеры делают API событий касаний недоступными на всех компьютерах, даже имеющих сенсорный экран.

Причина этого заключается в том, что некоторые веб-сайты используют поддержку данного API в качестве показателя того, что браузер запущен на мобильном устройстве. Если API событий касания доступен, значит эти сайты будут предполагать работу с мобильного устройства и предоставлять соответствующее содержимое, оптимизированное для мобильных устройств. Это может существенно усложнить работу для пользователей десктопов с сенсорными экранами.

Для поддержки и касаний и мыши на всех типах устройств, используйте вместо этого [события указателя](/ru/docs/Web/API/Pointer_events)

{{Compat("api.Touch")}}

### Firefox, события касаний и многопроцессность (e10s)

В Firefox события касания отключены, когда отключён e10s (электролиз; [многопроцессорный Firefox](/ru/docs/Mozilla/Firefox/Multiprocess_Firefox)). e10s включён по умолчанию в Firefox, но может в конечном итоге отключаться в определённых ситуациях, например, когда установлены определённые инструменты специальных возможностей или надстройки Firefox, для работы которых требуется отключение e10s. Это означает, что даже на настольном компьютере / ноутбуке с сенсорным экраном сенсорные события не будут включены.

Вы можете проверить, отключён ли e10s, перейдя в `about:support` и посмотрев на запись «Многопроцессорная Windows» в разделе «Основы приложения». 1/1 означает, что он включён, 0/1 означает отключён.

Если вы хотите принудительно включить e10s - чтобы явно повторно включить поддержку сенсорных событий - вам нужно перейти к `about:config` и создать новое логическое предпочтение `browser.tabs.remote.force-enable`. Установите значение `true`, перезапустите браузер, и e10s будет включён независимо от любых других настроек.
