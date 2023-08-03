---
title: Метод EventTarget.addEventListener()
slug: Web/API/EventTarget/addEventListener
---

{{apiref("DOM Events")}}

Метод `EventTarget.addEventListener()` регистрирует определённый обработчик события, вызванного на {{domxref("EventTarget")}}.

{{domxref("EventTarget")}} может быть {{domxref("Element")}}, {{domxref("Document")}}, {{domxref("Window")}}, или любым другим объектом, поддерживающим события (таким как [`XMLHttpRequest`](/ru/docs/DOM/XMLHttpRequest)).

## Синтаксис

```
target.addEventListener(type, listener[, options]);
target.addEventListener(type, listener[, useCapture]);
target.addEventListener(type, listener[, useCapture,
wantsUntrusted {{Non-standard_inline}}]); // только Gecko/Mozilla
```

### Параметры

- `type`
  - : Чувствительная к регистру строка, представляющая [тип обрабатываемого события](/ru/docs/DOM/event.type).
- `listener`
  - : Объект, который принимает уведомление, когда событие указанного типа произошло. Это должен быть объект, реализующий интерфейс {{domxref("EventListener")}} или просто [функция JavaScript](/ru/docs/JavaScript/Guide/Functions).

<!---->

- `options` {{optional_inline}}

  - : Объект `options`, который определяет характеристики объекта, прослушивающего событие. Доступны следующие варианты:

    - `capture`: {{jsxref("Boolean")}} указывает, что события этого типа будут отправлены зарегистрированному обработчику `listener` перед отправкой на `EventTarget`, расположенный ниже в дереве DOM.
    - `once`: {{jsxref("Boolean")}} указывает, что обработчик должен быть вызван не более одного раза после добавления. Если `true`, обработчик автоматически удаляется при вызове.
    - `passive`: {{jsxref("Boolean")}} указывает, что обработчик никогда не вызовет `preventDefault()`. Если всё же вызов будет произведён, браузер должен игнорировать его и генерировать консольное предупреждение. Пример [Улучшение производительности прокрутки с помощью passive true](#улучшение_производительности_прокрутки_с_помощью_passive_true)
    - {{non-standard_inline}} `mozSystemGroup`: {{jsxref("Boolean")}} указывает, что обработчик должен быть добавлен в системную группу. Доступно только в коде, запущенном в XBL или в [расширении Chrome](https://chrome.google.com/webstore/detail/open-with-firefox/poeacjbaiakjnaepdjgggojcjoajakmd).

- `useCapture` {{optional_inline}}

  - : Если равно `true`, `useCapture` указывает, что пользователь желает начать захват. После инициализации захвата все события указанного типа будут отправлены в зарегистрированный `listener` перед отправкой в какой-либо `EventTarget` под ним в дереве DOM. События, восходящие вверх по дереву, не будут вызывать обработчиков, которым назначено использовать захват. Смотрите [DOM Level 3 Events](http://www.w3.org/TR/DOM-Level-3-Events/#event-flow) для более детального объяснения. Значение `useCapture` по умолчанию равно `false`.

    > **Примечание:** Для обработчиков событий прикреплённых к цели события, событие находиться в целевой фазе, а не в фазах захвата или всплытия. События в целевой фазе инициируют все обработчики на элементе в том порядке, в котором они были зарегистрированы независимо от параметра `useCapture`.

    > **Примечание:** `useCapture` не всегда был опциональным. Лучше указывать данный параметр для повышения совместимости.

- `wantsUntrusted` {{Non-standard_inline}}
  - : Если равно `true`, обработчик будет получать сгенерированные события, посланные со страницы (по умолчанию равно `false` для chrome и `true` для обычных веб-страниц). Этот параметр доступен только в Gecko и в основном полезен для использования в дополнениях и самом браузере. Смотрите [Взаимодействие между привилегированными и непривилегированными страницами](/ru/docs/Archive/Add-ons/Interaction_between_privileged_and_non-privileged_pages) для примеров использования.

Прежде чем использовать определённое значение в объекте `options`, рекомендуется убедиться, что браузер пользователя поддерживает его, поскольку это дополнение, которое не все браузеры поддерживали исторически.

### Возвращаемое значение

`undefined`

## Примечания по использованию

### Колбэк обработчика событий

Обработчик событий может быть задан либо как колбэк-функция, либо как объект реализующий {{domxref("EventListener")}}, чей {{domxref("EventListener.handleEvent", "handleEvent()")}} метод служит как колбэк-функция.

Сама колбэк-функция имеет те же параметры и возвращаемое значение что и метод `handleEvent()`; То есть колбэк принимает единственный параметр: объект основанный на {{domxref("Event")}} описывая событие, которое произошло и ничего не возвращая.

Например, колбэк обработчика событий, который может использоваться для обработки {{event("fullscreenchange")}} и {{event("fullscreenerror")}} может выглядеть так:

```js
function eventHandler(event) {
  if (event.type == "fullscreenchange") {
    /* Переключатель полноэкранного режима */
  } /* fullscreenerror */ else {
    /* Ошибка переключателя полноэкранного режима */
  }
}
```

### Безопасная проверка поддержки `option`

В более старых версиях спецификации DOM третьим параметром `addEventListener` было логическое значение, указывающее, следует ли захватывать событие на этапе погружения. Со временем стало ясно, что необходимо больше вариантов. Вместо добавления дополнительных параметров в функцию (усложняя ситуацию при использовании необязательных значений) третий параметр был изменён на объект, который может содержать различные свойства, определяющие значения параметров для настройки обработчика событий.

Поскольку старые браузеры (а также некоторые не слишком старые браузеры) по-прежнему предполагают, что третий параметр является логическим, возникает необходимость создания своего кода, чтобы разумно обрабатывать этот сценарий. Вы можете сделать это, используя функцию обнаружения для каждого из интересующих вас параметров.

Например, если вы хотите проверить параметр `passive`:

```js
var passiveSupported = false;

try {
  var options = Object.defineProperty({}, "passive", {
    get: function () {
      passiveSupported = true;
    },
  });

  window.addEventListener("test", null, options);
} catch (err) {}
```

Этот код создаёт объект `options` с геттером для свойства passive, устанавливающим флаг `passiveSupported` в `true`, если он вызван. Это означает, что если браузер проверяет значение свойства `passive` на объекте `options`, значение `passiveSupported` будет установлено в true; в противном случае он останется ложным. Затем мы вызываем `addEventListener`, чтобы настроить фальшивый обработчик событий, указав эти параметры для проверки опций, если браузер распознает объект в качестве третьего параметра.

Для проверки поддержки использования какой-либо опции можно просто добавить геттер для неё, используя код, подобный тому, что показан выше.

Если вы хотите добавить обработчик событий, использующий параметры, о которых идёт речь, вы можете сделать это подобным образом:

```js
someElement.addEventListener(
  "mouseup",
  handleMouseUp,
  passiveSupported ? { passive: true } : false,
);
```

Здесь мы добавляем обработчик события {{event ("mouseup")}} элемента `someElement`. Для третьего параметра, если `passiveSupported` имеет значение `true`, мы указываем объект `options` с `passive: true`; в противном случае мы знаем, что нам нужно передать логическое значение, и мы передаём `false` как значение параметра `useCapture`.

Вы можете использовать стороннюю библиотеку, такую как [Modernizr](https://modernizr.com/docs) или [Detect It](https://github.com/rafrex/detect-it), чтобы проверить поддержку необходимого свойства.

Узнайте больше о [EventListenerOptions](https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection) из [Web Incubator Community Group](https://wicg.github.io/admin/charter.html).

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

Ниже описан другой, [более старый способ регистрации обработчиков](#Older_way_to_register_event_listeners).

### Добавление обработчика во время обработки события

Если `EventListener` добавлен к `EventTarget` во время обработки события, он не будет вызван текущими действиями, но может быть вызван на более поздней стадии обработки события, при восходящей обработке.

### Несколько одинаковых обработчиков события

Если зарегистрировано несколько одинаковых `EventListener` на одном `EventTarget` с одинаковыми параметрами, дублирующиеся обработчики игнорируются. Так как одинаковые обработчики игнорируются, не требуется удалять их вручную с помощью метода [removeEventListener](/ru/docs/DOM/EventTarget.removeEventListener).

### Значение `this` в обработчике

Обычно желательно передавать элемент, на котором сработал обработчик события, например, при использовании обобщённых обработчиков для схожих элементов. При добавлении функции при помощи `addEventListener()` значение переменной `this` меняется — заметьте, что значение `this` передаётся в функцию от вызывающего объекта.

В примере выше значение переменной `this` внутри `modifyText()` при вызове событием клика равно таблице 't'. Это противоположно поведению, которое возникает, если обработчик добавлен в HTML-разметке:

```html
<table id="t" onclick="modifyText();">
  . . .
</table>
```

Значение переменной `this` внутри `modifyText()` при вызове событием клика будет равно ссылке на глобальный (window) объект (или `undefined` при использовании [strict mode](/ru/docs/Web/JavaScript/Reference/Strict_mode))

> **Примечание:** В JavaScript 1.8.5 введён метод [`Function.prototype.bind()`](/ru/docs/JavaScript/Reference/Global_Objects/Function/bind), который позволяет указать значение, которое должно быть использовано для всех вызовов данной функции. Он позволяет вам легко обходить ситуации, в которых не ясно, чему будет равно this, в зависимости от того, в каком контексте будет вызвана ваша функция. заметьте, также, что вам будет необходимо иметь внешнюю ссылку на обработчик, чтобы вы могли удалить его позже.

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

> **Примечание:** useCapture не поддерживается, так как IE 8 не имеет альтернативного метода для этого. Также заметьте, что следующий код только добавляет поддержку IE 8. Также, он работает только при соблюдении стандартов: объявление DOCTYPE страницы обязательно.

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

`addEventListener()` был добавлен в спецификации DOM 2 [Events](http://www.w3.org/TR/DOM-Level-2-Events). До этого обработчики добавлялись следующим образом:

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

### Улучшение производительности прокрутки с помощью `passive: true`

Значение по умолчанию для параметра `passive` - `false`. Начиная с Chrome 56 (desktop, Chrome for Android, Android webview) значение по умолчанию для {{event("touchstart")}} и {{event("touchmove")}} равно `true`, а вызовы `preventDefault()` не разрешены. Чтобы отменить это поведение, необходимо установить параметр `passive` в `false` (см. пример ниже). Это изменение не позволяет обработчику блокировать показ страницы во время прокрутки пользователя. Демонстрация доступна на [сайте разработчиков Google](https://developers.google.com/web/updates/2016/06/passive-event-listeners). Обратите внимание, что Edge вообще не поддерживает `options`, и добавление его без [проверки поддержки](/ru/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support) помешает использовать аргумент `useCapture`.

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

Установка `passive` не имеет значения для основного события {{event ("scroll")}}, поскольку его нельзя отменить, поэтому его обработчик в любом случае не может блокировать показ страницы.

## Совместимость

{{Compat}}

### Примечания по Gecko

- До Firefox 6, браузер выбросит исключение, если параметр `useCapture` не был точно равен `false`. До Gecko 9.0, `addEventListener()` выбросит исключение, если параметр `listener` был равен `null`; сейчас метод завершается без ошибки, но ничего не делает.

### Примечания по WebKit

- Несмотря на то, что в WebKit параметр `useCapture` был объявлен необязательным [только в июне 2011 года](http://trac.webkit.org/changeset/89781), это работало и до этого изменения. Новые изменения были добавлены в Safari 5.1 и Chrome 13.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Дополнительная информация

- {{domxref("EventTarget.removeEventListener()")}}
- [Creating and triggering custom events](/ru/docs/Web/Guide/Events/Creating_and_triggering_events)
- [More details on the use of `this` in event handlers](http://www.quirksmode.org/js/this.html)
