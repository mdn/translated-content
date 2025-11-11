---
title: "EventTarget: метод addEventListener()"
slug: Web/API/EventTarget/addEventListener
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Метод **`addEventListener()`** интерфейса {{domxref("EventTarget")}} устанавливает функцию, которая будет вызываться каждый раз, когда указанное событие будет достигать цели.

Наиболее распространёнными целями являются {{domxref("Element")}} и его дочерние элементы, {{domxref("Document")}} и {{domxref("Window")}}, но целью может быть любой объект, поддерживающий события (например, {{domxref("IDBRequest")}}).

> [!NOTE]
> Метод `addEventListener()` является _рекомендованным_ способ регистрации обработчиков событий. Его преимущества состоят в следующем::
>
> - Позволяет добавлять более одного обработчика для события. Это очень полезно для использования в библиотеках, модулях JavaScript и тех случаях, когда требуется работать с другими библиотеками или расширениями.
> - В отличие от использования свойств вида `onXYZ`, позволяет он даёт более точный контроль над фазой активации слушателя (захват или всплытие).
> - Работает на всех целях событий, а не только на элементах HTML и SVG.

Метод `addEventListener()` работает, добавляя функцию или объект, который реализует функцию `handleEvent()`, в список слушателей события для указанного типа цели {{domxref("EventTarget")}}, на которой он был вызван.
Если функция или объект уже присутствует в списке слушателей для этой цели, то повторного добавления не будет.

> [!NOTE]
> Если конкретная анонимная функция находится в списке слушателей событий, зарегистрированных для определённой цели, а далее в коде идентичная анонимная функция указана в вызове `addEventListener`, вторая функция _будет_ добавлена ​​в список слушателей событий для этой цели.
>
> Действительно, анонимные функции не идентичны, даже если определены с помощью _одного и того же_ неизменного исходного кода, вызываемого многократно, **даже в цикле**.
>
> Повторное определение одной и той же безымянной функции в таких случаях может быть проблематичным. Смотрите раздел [Вопросы памяти](#вопросы_памяти) ниже.

Если слушатель событий добавляется в {{domxref("EventTarget")}} внутри другого слушателя, то есть во время обработки события, то это событие не вызовет срабатывания нового слушателя.
Однако новый слушатель может быть запущен на более поздней стадии потока событий, например, во время фазы всплытия.

## Синтаксис

```js-nolint
addEventListener(type, listener)
addEventListener(type, listener, options)
addEventListener(type, listener, useCapture)
```

### Параметры

- `type`
  - : Чувствительная к регистру строка, представляющая [тип обрабатываемого события](/ru/docs/Web/API/Event).
- `listener`
  - : Объект, реализующий интерфейс {{domxref("Event")}}, который принимает уведомление, когда событие указанного типа произошло. Это должен быть `null`, объект с методом `handleEvent()` или [функция](/ru/docs/Web/JavaScript/Guide/Functions). Посмотрите также раздел [Функция обратного вызова для обработчика событий](#функция_обратного_вызова_для_обработчика_событий).
- `options` {{optional_inline}}
  - : Объект, который определяет характеристики слушателя событие:
    - `capture` {{optional_inline}}
      - : Логическое значение, указывающее, что события указанного типа будут отправлены зарегистрированному слушателю `listener` перед отправкой любой `EventTarget` ниже в DOM-дереве. Если не указано, то по умолчанию `false`.
    - `once` {{optional_inline}}
      - : Логическое значение, указывающее, что `listener` должен быть вызван только один раз после добавления. Если `true`, то `listener` будет автоматически удалён после вызова. Если не указано, то по умолчанию `false`.
    - `passive` {{optional_inline}}
      - : Логическое значение, указывающее, что `listener` никогда не вызовет {{domxref("Event.preventDefault", "preventDefault()")}}. Если пассивный слушатель вызывает `preventDefault()`, ничего не произойдет, и может быть сгенерировано предупреждение в консоли.

        Если не указано, то по умолчанию `false` за исключением того, что в браузерах, отличных от Safari, для событий {{domxref("Element/wheel_event", "wheel")}}, {{domxref("Element/mousewheel_event", "mousewheel")}}, {{domxref("Element/touchstart_event", "touchstart")}} and {{domxref("Element/touchmove_event", "touchmove")}} по умолчанию принимается значение `true`. Смотрите также раздел [Использование пассивных слушателей](#использование_пассивных_слушателей).

    - `signal` {{optional_inline}}
      - : {{domxref("AbortSignal")}}. Слушатель будет удалён при вызове метода {{domxref("AbortController/abort()", "abort()")}} данного объекта `AbortSignal`. Если не указано, то со слушателем не будет связан никакой `AbortSignal`.

- `useCapture` {{optional_inline}}
  - : Логическое значение, указывающее, будут ли события этого типа отправлены зарегистрированному слушателю `listener` _перед_ отправкой в любой `EventTarget` ниже в DOM-дереве. События, которые всплывают вверх по дереву, не вызовут слушателя, настроенного для использования захвата. Всплытие событий и захват — это два способа распространения событий, которые происходят в элементе, который вложен в другой элемент, и обоих элементов зарегистрирован обработчик этого события. Режим распространения событий определяет порядок, в котором элементы получают событие. Подробное объяснение смотрите в [DOM Level 3 Events](https://www.w3.org/TR/DOM-Level-3-Events/#event-flow) и [Порядок событий в JavaScript](https://www.quirksmode.org/js/events_order.html#link4).
    Если не указано, `useCapture` по умолчанию имеет значение `false`.

    > [!NOTE]
    > Для слушателей событий, зарегистрированных на цели события, событие находится в целевой фазе, а не в фазах захвата и всплытия.
    > Слушатели событий на этапе _захвата_ вызываются раньше слушателей событий на этапах цели и всплытия.

- `wantsUntrusted` {{optional_inline}} {{non-standard_inline}}
  - : Параметр, специфичный для Firefox (Gecko). Если `true`, слушатель получает синтетические события, отправленные веб-контентом. По умолчанию `false` для браузера {{glossary("chrome")}} и `true` для обычных веб-страниц. Этот параметр полезен для кода, обнаруженного в надстройках, а также для самого браузера.

### Возвращаемое значение

Нет ({{jsxref("undefined")}}).

## Примечания по использованию

### Функция обратного вызова для обработчика событий

Слушатель события может быть указан как функция обратного вызова или как объект, метод `handleEvent()` которого служит функцией обратного вызова.

Сама функция обратного вызова имеет те же параметры и возвращаемое значение, что и метод `handleEvent()`, то есть функция обратного вызова принимает один параметр — объект на основе {{domxref("Event")}}, описывающий произошедшее событие, и она ничего не возвращает.

Например, обратный вызов обработчика события, который можно использовать для обработки {{domxref("Element/fullscreenchange_event", "fullscreenchange")}} и {{domxref("Element/fullscreenerror_event", "fullscreenerror")}} может выглядеть следующим образом:

```js
function handleEvent(event) {
  if (event.type === "fullscreenchange") {
    /* обработка изменения полноэкранного режима */
  } else {
    /* обработка ошибки при изменении полноэкранного режима */
  }
}
```

### Использование пассивных слушателей

Если событие имеет действие по умолчанию (например, событие {{domxref("Element/wheel_event", "wheel")}}, которое по умолчанию прокручивает контейнер), то браузер, как правило, не может запустить его до завершения работы слушателя события, поскольку он не знает заранее, может ли слушатель события отменить действие по умолчанию, вызвав {{domxref("Event.preventDefault()")}}. Если слушатель события выполняется слишком долго, это может привести к заметной задержке, известной также как «{{glossary("jank")}}», прежде чем действие по умолчанию будет выполнено.

Устанавливая опцию `passive` в `true`, слушатель событий объявляет, что он не отменит действие по умолчанию, поэтому браузер может немедленно запустить действие по умолчанию, не дожидаясь завершения слушателя. Если слушатель это сделает, а затем вызовет {{domxref("Event.preventDefault()")}}, это не даст никакого эффекта.

Спецификация `addEventListener()` определяет значение по умолчанию для параметра `passive` как `false`. Однако, чтобы реализовать преимущества производительности прокрутки в устаревшем коде, современные браузеры изменили значение по умолчанию параметра `passive` на `true` для событий {{domxref("Element/wheel_event", "wheel")}}, {{domxref("Element/mousewheel_event", "mousewheel")}}, {{domxref("Element/touchstart_event", "touchstart")}} и {{domxref("Element/touchmove_event", "touchmove")}} на узлах уровня документа {{domxref("Window")}}, {{domxref("Document")}} и {{domxref("Document.body")}}. Это не позволяет слушателю событий [отменять событие](/ru/docs/Web/API/Event/preventDefault), поэтому он не может блокировать отрисовку, пока пользователь прокручивает страницу.

По этой причине для переопределения этого поведение и чтобы убедиться, что параметр `passive` имеет значение `false`, необходимо явно задать параметру значение `false` вместо того, чтобы полагаться на значение по умолчанию.

Можно не беспокоиться о значении `passive` для базового события {{domxref("Element/scroll_event", "scroll")}}.
Поскольку его нельзя отменить, слушатели событий в любом случае не могут блокировать рендеринг страницы.

Смотрите раздел [Улучшение производительности прокрутки с помощью пассивных слушателей](#улучшение_производительности_прокрутки_с_помощью_пассивных_слушателей) с примером использования пассивных слушателей.

## Примеры

### Добавление простого обработчика

Эти примеры демонстрируют как использовать `addEventListener()` для наблюдения за щелчками мышкой по элементу.

#### HTML Содержимое

```html
<table id="outside">
  <tr>
    <td id="t1">один</td>
  </tr>
  <tr>
    <td id="t2">два</td>
  </tr>
</table>
```

#### JavaScript Содержимое

```js
// Функция изменяет содержимое t2
function modifyText() {
  var t2 = document.getElementById("t2");
  if (t2.firstChild.nodeValue == "три") {
    t2.firstChild.nodeValue = "два";
  } else {
    t2.firstChild.nodeValue = "три";
  }
}

// Добавляет обработчика событий для таблицы
var el = document.getElementById("outside");
el.addEventListener("click", modifyText, false);
```

В примере выше, `modifyText()` регистрирует обработчика для события click, используя `addEventListener()`. Клик в любом месте таблицы будет поднимать обработчик и запускать `modifyText()`.

#### Результат

{{EmbedLiveSample('addEventListenerBasic')}}

Если вам нужно передать параметры в обработчик, вы можете использовать анонимные функции.

### Обработчик события с анонимной функцией

#### HTML Содержимое

```html
<table id="outside">
  <tr>
    <td id="t1">один</td>
  </tr>
  <tr>
    <td id="t2">два</td>
  </tr>
</table>
```

#### JavaScript Содержимое

```js
// Функция, изменяющая содержание t2
function modifyText(new_text) {
  var t2 = document.getElementById("t2");
  t2.firstChild.nodeValue = new_text;
}

// Функция, добавляющая обработчик к таблице
el = document.getElementById("outside");
el.addEventListener(
  "click",
  function () {
    modifyText("четыре");
  },
  false,
);
```

Обратите внимание, что addEvenListener - это анонимная функция, которая инкапсулирует код, который, в свою очередь, может отправлять параметры функции modifyText(), которая отвечает за фактический ответ на событие.

#### Результат

{{EmbedLiveSample('Event_Listener_with_anonymous_function')}}

### Обработчик события со стрелочной функцией

#### HTML

```html
<table id="outside">
  <tr>
    <td id="t1">one</td>
  </tr>
  <tr>
    <td id="t2">two</td>
  </tr>
</table>
```

#### JavaScript

```js
// Function to change the content of t2
function modifyText(new_text) {
  var t2 = document.getElementById("t2");
  t2.firstChild.nodeValue = new_text;
}

// Add event listener to table with an arrow function
var el = document.getElementById("outside");
el.addEventListener(
  "click",
  () => {
    modifyText("four");
  },
  false,
);
```

#### Результат

{{EmbedLiveSample('Обработчик_события_со_стрелочной_функцией')}}

Обратите внимание: несмотря на то, что анонимные и стрелочные функции схожи, они имеют разные значения `this`.

## Примечания

### Зачем использовать `addEventListener`?

`addEventListener` — это способ зарегистрировать обработчик события, описанный в документации W3C DOM. Вот список преимуществ его использования:

- Позволяет добавлять множество обработчиков для одного события. Это особенно полезно для [DHTML](/ru/docs/DHTML) библиотек или [Mozilla extensions](/ru/docs/Extensions), которые должны работать в условиях использования сторонних библиотек/расширений.
- Предоставляет точный контроль фазы срабатывания(вызова) обработчика (захват или всплытие).
- Срабатывает на любом DOM-элементе, а не только на HTML-элементах.

Ниже описан другой, [более старый способ регистрации обработчиков](#older_way_to_register_event_listeners).

### Добавление обработчика во время обработки события

Если `EventListener` добавлен к `EventTarget` во время обработки события, он не будет вызван текущими действиями, но может быть вызван на более поздней стадии обработки события, при восходящей обработке.

### Несколько одинаковых обработчиков события

Если зарегистрировано несколько одинаковых `EventListener` на одном `EventTarget` с одинаковыми параметрами, дублирующиеся обработчики игнорируются. Так как одинаковые обработчики игнорируются, не требуется удалять их вручную с помощью метода [removeEventListener](/ru/docs/Web/API/EventTarget/removeEventListener).

### Значение `this` в обработчике

Обычно желательно передавать элемент, на котором сработал обработчик события, например, при использовании обобщённых обработчиков для схожих элементов. При добавлении функции при помощи `addEventListener()` значение переменной `this` меняется — заметьте, что значение `this` передаётся в функцию от вызывающего объекта.

В примере выше значение переменной `this` внутри `modifyText()` при вызове событием клика равно таблице 't'. Это противоположно поведению, которое возникает, если обработчик добавлен в HTML-разметке:

```html
<table id="t" onclick="modifyText();">
  . . .
</table>
```

Значение переменной `this` внутри `modifyText()` при вызове событием клика будет равно ссылке на глобальный (window) объект (или `undefined` при использовании [strict mode](/ru/docs/Web/JavaScript/Reference/Strict_mode))

> [!NOTE]
> В JavaScript 1.8.5 введён метод [`Function.prototype.bind()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/bind), который позволяет указать значение, которое должно быть использовано для всех вызовов данной функции. Он позволяет вам легко обходить ситуации, в которых не ясно, чему будет равно this, в зависимости от того, в каком контексте будет вызвана ваша функция. заметьте, также, что вам будет необходимо иметь внешнюю ссылку на обработчик, чтобы вы могли удалить его позже.

Пример с использованием `bind` и без него:

```js
var Something = function (element) {
  this.name = "Something Good";
  this.onclick1 = function (event) {
    console.log(this.name); // undefined, так как this является элементом
  };
  this.onclick2 = function (event) {
    console.log(this.name); // 'Something Good', так как в this передано значение объекта Something
  };
  element.addEventListener("click", this.onclick1, false);
  element.addEventListener("click", this.onclick2.bind(this), false); // Trick
};
```

Проблема в примере выше заключается в том, что вы не можете удалить обработчик, вызванный с `bind`. Другое решение использует специальную функцию `handleEvent`, чтобы перехватывать любые события:

```js
var Something = function (element) {
  this.name = "Something Good";
  this.handleEvent = function (event) {
    console.log(this.name); // 'Something Good', так как this является объектом Something
    switch (event.type) {
      case "click":
        // код обработчика...
        break;
      case "dblclick":
        // код обработчика...
        break;
    }
  };

  // В этом случае обработчики хранятся в this, а не в this.handleEvent
  element.addEventListener("click", this, false);
  element.addEventListener("dblclick", this, false);

  // Вы можете напрямую удалять обработчики
  element.removeEventListener("click", this, false);
  element.removeEventListener("dblclick", this, false);
};
```

### Наследство Internet Explorer и attachEvent

В Internet Explorer младше 9 версии, вы можете использовать [`attachEvent`](<http://msdn.microsoft.com/en-us/library/ms536343(VS.85).aspx>) вместо стандартного `addEventListener`. Для поддержки IE, пример выше может быть модифицирован следующим образом:

```js
if (el.addEventListener) {
  el.addEventListener("click", modifyText, false);
} else if (el.attachEvent) {
  el.attachEvent("onclick", modifyText);
}
```

У `attachEvent` есть недостаток: `this` будет ссылаться на объект `window`, а не на элемент, на котором он был вызван.

### Совместимость

Вы можете обойти методы `addEventListener`, `removeEventListener`, `Event.preventDefault` и `Event.stopPropagation` не поддерживаемы в IE 8 используя следующий код в начале вашего скрипта. Этот код поддерживает использование `handleEvent` и события `DOMContentLoaded`.

> [!NOTE]
> Параметр `useCapture` не поддерживается, так как IE 8 не имеет альтернативного метода для этого. Также заметьте, что следующий код только добавляет поддержку IE 8. Также, он работает только при соблюдении стандартов: объявление DOCTYPE страницы обязательно.

```js
(function () {
  if (!Event.prototype.preventDefault) {
    Event.prototype.preventDefault = function () {
      this.returnValue = false;
    };
  }
  if (!Event.prototype.stopPropagation) {
    Event.prototype.stopPropagation = function () {
      this.cancelBubble = true;
    };
  }
  if (!Element.prototype.addEventListener) {
    var eventListeners = [];

    var addEventListener = function (
      type,
      listener /*, useCapture (will be ignored) */,
    ) {
      var self = this;
      var wrapper = function (e) {
        e.target = e.srcElement;
        e.currentTarget = self;
        if (listener.handleEvent) {
          listener.handleEvent(e);
        } else {
          listener.call(self, e);
        }
      };
      if (type == "DOMContentLoaded") {
        var wrapper2 = function (e) {
          if (document.readyState == "complete") {
            wrapper(e);
          }
        };
        document.attachEvent("onreadystatechange", wrapper2);
        eventListeners.push({
          object: this,
          type: type,
          listener: listener,
          wrapper: wrapper2,
        });

        if (document.readyState == "complete") {
          var e = new Event();
          e.srcElement = window;
          wrapper2(e);
        }
      } else {
        this.attachEvent("on" + type, wrapper);
        eventListeners.push({
          object: this,
          type: type,
          listener: listener,
          wrapper: wrapper,
        });
      }
    };
    var removeEventListener = function (
      type,
      listener /*, useCapture (will be ignored) */,
    ) {
      var counter = 0;
      while (counter < eventListeners.length) {
        var eventListener = eventListeners[counter];
        if (
          eventListener.object == this &&
          eventListener.type == type &&
          eventListener.listener == listener
        ) {
          if (type == "DOMContentLoaded") {
            this.detachEvent("onreadystatechange", eventListener.wrapper);
          } else {
            this.detachEvent("on" + type, eventListener.wrapper);
          }
          eventListeners.splice(counter, 1);
          break;
        }
        ++counter;
      }
    };
    Element.prototype.addEventListener = addEventListener;
    Element.prototype.removeEventListener = removeEventListener;
    if (HTMLDocument) {
      HTMLDocument.prototype.addEventListener = addEventListener;
      HTMLDocument.prototype.removeEventListener = removeEventListener;
    }
    if (Window) {
      Window.prototype.addEventListener = addEventListener;
      Window.prototype.removeEventListener = removeEventListener;
    }
  }
})();
```

### Старый способ регистрации обработчиков событий

`addEventListener()` был добавлен в спецификации DOM 2 [Events](https://www.w3.org/TR/DOM-Level-2-Events). До этого обработчики добавлялись следующим образом:

```js
// Передача ссылки на функцию — не добавляйте '()' после него, это вызовет функцию!
el.onclick = modifyText;

// Использование функционального выражения
element.onclick = function () {
  // ... логика функции ...
};
```

Этот метод заменяет текущие обработчики события `click`, если они есть. Тоже самое для других событий и ассоциируемых с ними обработчиков, таких как `blur` (`onblur`), `keypress` (`onkeypress`), и так далее.

Так как это по существу было частью DOM 0, этот метод имеет широкую поддержку и не требует специального кросс-браузерного кода; следовательно, это обычно используется, чтобы добавлять обработчики динамически, если не требуются расширенные возможности `addEventListener()`.

### Вопросы памяти

```js
var i;
var els = document.getElementsByTagName("*");

// Случай 1
for (i = 0; i < els.length; i++) {
  els[i].addEventListener(
    "click",
    function (e) {
      /*некоторые действия*/
    },
    false,
  );
}

// Случай 2
function processEvent(e) {
  /*некоторые действия*/
}

for (i = 0; i < els.length; i++) {
  els[i].addEventListener("click", processEvent, false);
}
```

В первом случае новая (анонимная) функция создаётся при каждом шаге цикла. Во втором случае одна заранее объявленная функция используется как обработчик события. Из этого следует меньшее потребление памяти. Более того, в первом случае, вследствие отсутствия ссылок на анонимные функции, невозможно вызвать `element.removeEventListener,` потому что нет ссылки на обработчик, в то время, как во втором случае возможно вызвать `myElement.removeEventListener("click", processEvent, false)`.

### Улучшение производительности прокрутки с помощью пассивных слушателей

Значение по умолчанию для параметра `passive` - `false`. Начиная с Chrome 56 (desktop, Chrome for Android, Android webview) значение по умолчанию для [`touchstart`](/ru/docs/Web/API/Element/touchstart_event) и [`touchmove`](/ru/docs/Web/API/Element/touchmove_event) равно `true`, а вызовы `preventDefault()` не разрешены. Чтобы отменить это поведение, необходимо установить параметр `passive` в `false` (см. пример ниже). Это изменение не позволяет обработчику блокировать показ страницы во время прокрутки пользователя. Демонстрация доступна на [сайте разработчиков Google](https://developers.google.com/web/updates/2016/06/passive-event-listeners). Обратите внимание, что Edge вообще не поддерживает `options`, и добавление его без [проверки поддержки](#safely_detecting_option_support) помешает использовать аргумент `useCapture`.

```js
/* Не позволяем обработчику блокировать показ страницы */
var passiveSupported = false;
try {
  window.addEventListener(
    "test",
    null,
    Object.defineProperty({}, "passive", {
      get: function () {
        passiveSupported = true;
      },
    }),
  );
} catch (err) {}

/* Добавляем обработчик событий */
var elem = document.getElementById("elem");
elem.addEventListener(
  "touchmove",
  function listener() {
    /* do something */
  },
  passiveSupported ? { passive: true } : false,
);
```

Установка `passive` не имеет значения для основного события [`scroll`](/ru/docs/Web/API/Document/scroll_event), поскольку его нельзя отменить, поэтому его обработчик в любом случае не может блокировать показ страницы.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Дополнительная информация

- {{domxref("EventTarget.removeEventListener()")}}
- [Creating and triggering custom events](/ru/docs/Web/Events/Creating_and_triggering_events)
- [More details on the use of `this` in event handlers](https://www.quirksmode.org/js/this.html)
