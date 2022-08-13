---
title: <input type="button">
slug: Web/HTML/Element/Input/button
tags:
  - HTML формы
  - Формы
  - Элемент Input
translation_of: Web/HTML/Element/input/button
---
{{HTMLRef}}

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

Keyboard shortcuts, also known as access keys and keyboard equivalents, let the user trigger a button using a key or combination of keys on the keyboard. To add a keyboard shortcut to a button — just as you would with any {{HTMLElement("input")}} for which it makes sense — you use the {{htmlattrxref("accesskey")}} global attribute.

In this example, <kbd>s</kbd> is specified as the access key (you'll need to press <kbd>s</kbd> plus the particular modifier keys for your browser/OS combination; see [accesskey](/ru/docs/Web/HTML/Global_attributes/accesskey) for a useful list of those).

```html
<form>
  <input type="button" value="Start machine" accesskey="s">
</form>
<p>The machine is stopped.</p>
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

> **Примечание:** The problem with the above example of course is that the user will not know what the access key is! In a real site, you'd have to provide this information in a way that doesn't intefere with the site design (for example by providing an easily accessible link that points to information on what the site accesskeys are).

### Disabling and enabling a button

To disable a button, simply specify the {{htmlattrxref("disabled")}} global attribute on it, like so:

```html
<input type="button" value="Disable me" disabled>
```

You can enable and disable buttons at run time by simply setting `disabled` to `true` or `false`. In this example our button starts off enabled, but if you press it, it is disabled using `button.disabled = true`. A {{domxref("WindowTimers.setTimeout","setTimeout()")}} function is then used to reset the button back to its enabled state after two seconds.

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

If the `disabled` attribute isn't specified, the button inherits its `disabled` state from its parent element. This makes it possible to enable and disable groups of elements all at once by enclosing them in a container such as a {{HTMLElement("fieldset")}} element, and then setting `disabled` on the container.

The example below shows this in action. This is very similar to the previous example, except that the `disabled` attribute is set on the `<fieldset>` when the first button is pressed — this causes all three buttons to be disabled until the two second timeout has passed.

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

> **Примечание:** Firefox will, unlike other browsers, by default, [persist the dynamic disabled state](http://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) of a {{HTMLElement("button")}} across page loads. Use the {{htmlattrxref("autocomplete","button")}} attribute to control this feature.

## Validation

Buttons don't participate in constraint validation; they have no real value to be constrained.

## Examples

The below example shows a very simple drawing app created using a {{htmlelement("canvas")}} element and some simple CSS and JavaScript (we'll hide the CSS for brevity). The top two controls allow you to choose the color and size of the drawing pen. The button, when clicked, invokes a function that clears the canvas.

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

// covert degrees to radians
function degToRad(degrees) {
  return degrees * Math.PI / 180;
};

// update sizepicker output value

sizePicker.oninput = function() {
  output.textContent = sizePicker.value;
}

// store mouse pointer coordinates, and whether the button is pressed
var curX;
var curY;
var pressed = false;

// update mouse pointer coordinates
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

## Specifications

| Specification                                                                                                                        | Status                           | Comments |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', 'forms.html#button-state-(type=button)', '&lt;input type="button"&gt;')}} | {{Spec2('HTML WHATWG')}} |          |
| {{SpecName('HTML5 W3C', 'forms.html#button-state-(type=button)', '&lt;input type="button"&gt;')}}     | {{Spec2('HTML5 W3C')}}     |          |

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("input")}} and the {{domxref("HTMLInputElement")}} interface which implements it.
- The more modern {{HTMLElement("button")}} element.
- [Compatibility of CSS properties](/ru/docs/Learn/HTML/Forms/Property_compatibility_table_for_form_widgets)
