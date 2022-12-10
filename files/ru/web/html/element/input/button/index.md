---
title: <input type="button">
slug: Web/HTML/Element/Input/button
tags:
  - HTML формы
  - Формы
  - Элемент Input
translation_of: Web/HTML/Element/input/button
---

{{HTMLSidebar}}

Элемент {{HTMLElement("input")}} с типом **`button`** отображаются как простые кнопки, которые можно запрограммировать для управления пользовательскими функциями в любом месте веб-страницы, например, назначить функцию обработки события (обычно для события {{event("click")}}).

{{EmbedInteractiveExample("pages/tabbed/input-button.html", "tabbed-shorter")}}

> **Примечание:** Хотя элементы `<input>` с типом `button` по-прежнему являются абсолютно корректными в HTML, новый элемент {{HTMLElement("button")}} теперь является предпочтительным способом создания кнопок. Учитывая, что текст элемента {{HTMLElement("button")}} вставлен между открывающим и закрывающим тегами, вы можете включить в тег HTML, даже изображения.

| **[Значение](#значение)**         | {{domxref("DOMString")}} используется в качестве метки кнопки                       |
| --------------------------------- | ------------------------------------------------------------------------------------------- |
| **Событие**                       | {{event("click")}}                                                                    |
| **Поддерживаемые общие атрибуты** | {{htmlattrxref("type", "input")}} и {{htmlattrxref("value", "input")}} |
| **Атрибуты IDL**                  | `value`                                                                                     |
| **Методы**                        | None                                                                                        |

## Значение

Атрибут значения элементов `<input type="button">` elements' {{htmlattrxref("value", "input")}} содержит строку {{domxref("DOMString")}} , которая используется в качестве метки кнопки.

```html
<input type="button" value="Нажми на меня">
```

{{EmbedLiveSample("summary-example3", 650, 30)}}

Если вы не укажете `value`, вы получите пустую кнопку:

```html
<input type="button">
```

{{EmbedLiveSample("summary-example1", 650, 30)}}

## Использование кнопок

Элементы `<input type="button">` не имеют поведения по умолчанию (их двоюродные братья, [`<input type="submit">`](/en-US/docs/Web/HTML/Element/input/submit) и [`<input type="reset">`](/en-US/docs/Web/HTML/Element/input/reset) используются для отправки и сброса форм соответственно). Чтобы кнопки делали что-либо, вы должны написать код JavaScript для выполнения работы.

### Простая кнопка

Мы начнём с создания простой кнопки с обработчиком события {{event("click")}} , который запускает наш компьютер (ну, он переключает `value` кнопки и текстовое содержимое следующего абзаца):

```html
<form>
  <input type="button" value="Запустить ПК">
</form>
<p>ПК выключен.</p>
```

```js
const button = document.querySelector('input');
const paragraph = document.querySelector('p');

button.addEventListener('click', updateButton);

function updateButton() {
  if (button.value === 'Запустить ПК') {
    button.value = 'Выключить ПК';
    paragraph.textContent = 'ПК запущен!';
  } else {
    button.value = 'Запустить ПК';
    paragraph.textContent = 'ПК выключен.';
  }
}
```

Сценарий получает ссылку на объект {{domxref("HTMLInputElement")}}, представляющий `<input>` в DOM, сохраняя этот параметр в переменной `button`. Затем {{domxref("EventTarget.addEventListener", "addEventListener()")}} используется для установки функции, которая будет запускаться, когда на кнопке происходят события {{event("click")}}.

{{EmbedLiveSample("Простая_кнопка", 650, 100)}}

### Добавление сочетаний клавиш на кнопки

Сочетания клавиш, также известные как клавиши доступа и их эквиваленты на клавиатуре, позволяют пользователю активировать кнопку с помощью клавиши или комбинации клавиш на клавиатуре. Чтобы добавить сочетание клавиш к кнопке — точно так же, как вы сделали бы с любым {{HTMLElement("input")}}, для которого это имеет смысл, — вы используете глобальный атрибут {{htmlattrxref("accesskey")}}.

В этом примере, <kbd>s</kbd> указывается в качестве ключа доступа (вам нужно нажать <kbd>s</kbd> плюс конкретные клавиши-модификаторы для вашей комбинации браузера / операционной системы; см. [accesskey](/ru/docs/Web/HTML/Global_attributes/accesskey) для получения полезного списка из них).

```html
<form>
  <input type="button" value="Выключить ПК" accesskey="s">
</form>
<p>ПК выключен.</p>
```

```js hidden
const button = document.querySelector('input');
const paragraph = document.querySelector('p');

button.addEventListener('click', updateButton);

function updateButton() {
  if (button.value === 'Start machine') {
    button.value = 'Stop machine';
    paragraph.textContent = 'The machine has started!';
  } else {
    button.value = 'Start machine';
    paragraph.textContent = 'The machine is stopped.';
  }
}
```

{{EmbedLiveSample("Добавление_сочетаний_клавиш_на_кнопки", 650, 100)}}

> **Примечание:** Проблема с приведенным выше примером, конечно, заключается в том, что пользователь не будет знать, что такое ключ доступа! На реальном сайте вам пришлось бы предоставлять эту информацию таким образом, чтобы это не противоречило дизайну сайта (например, путем предоставления легкодоступной ссылки, которая указывает на информацию о том, что такое ключи доступа к сайту).

### Отключение и включение кнопки

Чтобы отключить кнопку, просто укажите на ней глобальный атрибут {{htmlattrxref("disabled")}}, например:

```html
<input type="button" value="Disable me" disabled>
```

Вы можете включать и отключать кнопки во время выполнения, просто установив для параметра `disabled` на `true` или `false`. В этом примере наша кнопка запускается включенной, но если вы нажмете на нее, она будет отключена с помощью `button.disabled = true`. Затем используется функция {{domxref("WindowTimers.setTimeout","setTimeout()")}} для возврата кнопки в включенное состояние через две секунды.

```html hidden
<input type="button" value="Enabled">
```

```js hidden
const button = document.querySelector('input');

button.addEventListener('click', disableButton);

function disableButton() {
  button.disabled = true;
  button.value = 'Disabled';
  window.setTimeout(function() {
    button.disabled = false;
    button.value = 'Enabled';
  }, 2000);
}
```

{{EmbedLiveSample("Hidden_code_1", 650, 60)}}

Если атрибут `disabled` не указан, кнопка наследует свое `disabled` состояние от своего родительского элемента. Это позволяет включать и отключать группы элементов одновременно, заключая их в контейнер, такой как элемент {{HTMLElement("fieldset")}}, а затем устанавливая значение `disabled` в контейнере.

Приведенный ниже пример показывает это в действии. Это очень похоже на предыдущий пример, за исключением того, что атрибут `disabled` устанавливается в `<fieldset>` при нажатии первой кнопки — это приводит к отключению всех трех кнопок до истечения двухсекундного тайм-аута.

```html hidden
<fieldset>
  <legend>Button group</legend>
  <input type="button" value="Button 1">
  <input type="button" value="Button 2">
  <input type="button" value="Button 3">
</fieldset>
```

```js hidden
const button = document.querySelector('input');
const fieldset = document.querySelector('fieldset');

button.addEventListener('click', disableButton);

function disableButton() {
  fieldset.disabled = true;
  window.setTimeout(function() {
    fieldset.disabled = false;
  }, 2000);
}
```

{{EmbedLiveSample("Hidden_code_2", 650, 60)}}

> **Примечание:** Firefox, в отличие от других браузеров, [по умолчанию сохраняет динамическое отключенное состояние](http://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) {{HTMLElement("button")}} при загрузке страницы. Используйте атрибут {{htmlattrxref("autocomplete","button")}} для управления этой функцией.

## Валидация

Кнопки не участвуют в проверке ограничений; у них нет значения, которое можно было ограничить.

## Примеры

Приведенный ниже пример показывает очень простое приложение для рисования, созданное с использованием элемента {{HTMLElement("canvas")}} и некоторых простых CSS и JavaScript (мы скроем CSS для краткости). Два верхних элемента управления позволяют выбрать цвет и размер пера для рисования. Кнопка при нажатии вызывает функцию, которая очищает холст.

```html
<div class="toolbar">
  <input type="color" aria-label="select pen color">
  <input type="range" min="2" max="50" value="30" aria-label="select pen size"><span class="output">30</span>
  <input type="button" value="Clear canvas">
</div>

<canvas class="myCanvas">
  <p>Add suitable fallback here.</p>
</canvas>
```

```css hidden
body {
  background: #ccc;
  margin: 0;
  overflow: hidden;
}

.toolbar {
  background: #ccc;
  width: 150px;
  height: 75px;
  padding: 5px;
}

input[type="color"], input[type="button"] {
  width: 90%;
  margin: 0 auto;
  display: block;
}

input[type="range"] {
  width: 70%;
}

span {
  position: relative;
  bottom: 5px;
}
```

```js
var canvas = document.querySelector('.myCanvas');
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight-85;
var ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(0,0,0)';
ctx.fillRect(0,0,width,height);

var colorPicker = document.querySelector('input[type="color"]');
var sizePicker = document.querySelector('input[type="range"]');
var output = document.querySelector('.output');
var clearBtn = document.querySelector('input[type="button"]');

// переводим градусы в радианы
function degToRad(degrees) {
  return degrees * Math.PI / 180;
};

// обновляем выходное значение sizepicker

sizePicker.oninput = function() {
  output.textContent = sizePicker.value;
}

// сохраняйте координаты указателя мыши и то, нажата ли кнопка
var curX;
var curY;
var pressed = false;

// обновить координаты указателя мыши
document.onmousemove = function(e) {
  curX = (window.Event) ? e.pageX : e.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
  curY = (window.Event) ? e.pageY : e.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
}

canvas.onmousedown = function() {
  pressed = true;
};

canvas.onmouseup = function() {
  pressed = false;
}

clearBtn.onclick = function() {
  ctx.fillStyle = 'rgb(0,0,0)';
  ctx.fillRect(0,0,width,height);
}

function draw() {
  if(pressed) {
    ctx.fillStyle = colorPicker.value;
    ctx.beginPath();
    ctx.arc(curX, curY-85, sizePicker.value, degToRad(0), degToRad(360), false);
    ctx.fill();
  }

  requestAnimationFrame(draw);
}

draw();
```

{{EmbedLiveSample("Examples", '100%', 600)}}

## Спецификации

| Specification                                                                                                                        | Status                           | Comments |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', 'forms.html#button-state-(type=button)', '&lt;input type="button"&gt;')}} | {{Spec2('HTML WHATWG')}} |          |
| {{SpecName('HTML5 W3C', 'forms.html#button-state-(type=button)', '&lt;input type="button"&gt;')}}     | {{Spec2('HTML5 W3C')}}     |          |

## Browser compatibility

{{Compat}}

## Смотри также

- {{HTMLElement("input")}} и {{domxref("HTMLInputElement")}} интерфейс, который его реализует.
- Более современный элемент {{HTMLElement("button")}}.
- [Совместимость свойств CSS](/ru/docs/Learn/HTML/Forms/Property_compatibility_table_for_form_widgets)
