---
title: <input type="button">
slug: Web/HTML/Reference/Elements/input/button
---

{{HTMLSidebar}}

Элемент {{HTMLElement("input")}} с типом **`button`** отображаются как простые кнопки, которые можно запрограммировать для управления пользовательскими функциями в любом месте веб-страницы, например, назначить функцию обработки события (обычно для события [`click`](/ru/docs/Web/API/Element/click_event)).

{{InteractiveExample("HTML Demo: &lt;input type=&quot;button&quot;&gt;", "tabbed-shorter")}}

```html interactive-example
<input class="styled" type="button" value="Add to favorites" />
```

```css interactive-example
.styled {
  border: 0;
  line-height: 2.5;
  padding: 0 20px;
  font-size: 1rem;
  text-align: center;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  border-radius: 10px;
  background-color: rgb(220 0 0 / 100%);
  background-image: linear-gradient(
    to top left,
    rgb(0 0 0 / 20%),
    rgb(0 0 0 / 20%) 30%,
    rgb(0 0 0 / 0%)
  );
  box-shadow:
    inset 2px 2px 3px rgb(255 255 255 / 60%),
    inset -2px -2px 3px rgb(0 0 0 / 60%);
}

.styled:hover {
  background-color: rgb(255 0 0 / 100%);
}

.styled:active {
  box-shadow:
    inset -2px -2px 3px rgb(255 255 255 / 60%),
    inset 2px 2px 3px rgb(0 0 0 / 60%);
}
```

> [!NOTE]
> Хотя элементы `<input>` с типом `button` по-прежнему являются абсолютно корректными в HTML, новый элемент {{HTMLElement("button")}} теперь является предпочтительным способом создания кнопок. Учитывая, что текст элемента {{HTMLElement("button")}} вставлен между открывающим и закрывающим тегами, вы можете включить в тег HTML, даже изображения.

| **[Значение](#значение)**         | {{domxref("DOMString")}} используется в качестве метки кнопки                                                           |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Событие**                       | [`click`](/ru/docs/Web/API/Element/click_event)                                                                         |
| **Поддерживаемые общие атрибуты** | [`type`](/ru/docs/Web/HTML/Reference/Elements/input#type) и [`value`](/ru/docs/Web/HTML/Reference/Elements/input#value) |
| **Атрибуты IDL**                  | `value`                                                                                                                 |
| **Методы**                        | None                                                                                                                    |

## Значение

Атрибут значения элементов `<input type="button">` elements' [`value`](/ru/docs/Web/HTML/Reference/Elements/input#value) содержит строку {{domxref("DOMString")}} , которая используется в качестве метки кнопки.

```html
<input type="button" value="Нажми на меня" />
```

{{EmbedLiveSample("summary-example3", 650, 30)}}

Если вы не укажете `value`, вы получите пустую кнопку:

```html
<input type="button" />
```

{{EmbedLiveSample("summary-example1", 650, 30)}}

## Использование кнопок

Элементы `<input type="button">` не имеют поведения по умолчанию (их двоюродные братья, [`<input type="submit">`](/ru/docs/Web/HTML/Element/input/submit) и [`<input type="reset">`](/ru/docs/Web/HTML/Element/input/reset) используются для отправки и сброса форм соответственно). Чтобы кнопки делали что-либо, вы должны написать код JavaScript для выполнения работы.

### Простая кнопка

Мы начнём с создания простой кнопки с обработчиком события [`click`](/ru/docs/Web/API/Element/click_event) , который запускает наш компьютер (ну, он переключает `value` кнопки и текстовое содержимое следующего абзаца):

```html
<form>
  <input type="button" value="Запустить ПК" />
</form>
<p>ПК выключен.</p>
```

```js
const button = document.querySelector("input");
const paragraph = document.querySelector("p");

button.addEventListener("click", updateButton);

function updateButton() {
  if (button.value === "Запустить ПК") {
    button.value = "Выключить ПК";
    paragraph.textContent = "ПК запущен!";
  } else {
    button.value = "Запустить ПК";
    paragraph.textContent = "ПК выключен.";
  }
}
```

Сценарий получает ссылку на объект {{domxref("HTMLInputElement")}}, представляющий `<input>` в DOM, сохраняя этот параметр в переменной `button`. Затем {{domxref("EventTarget.addEventListener", "addEventListener()")}} используется для установки функции, которая будет запускаться, когда на кнопке происходят события [`click`](/ru/docs/Web/API/Element/click_event).

{{EmbedLiveSample("Простая_кнопка", 650, 100)}}

### Добавление сочетаний клавиш на кнопки

Сочетания клавиш, также известные как клавиши доступа и их эквиваленты на клавиатуре, позволяют пользователю активировать кнопку с помощью клавиши или комбинации клавиш на клавиатуре. Чтобы добавить сочетание клавиш к кнопке — точно так же, как вы сделали бы с любым {{HTMLElement("input")}}, для которого это имеет смысл, — вы используете глобальный атрибут [`accesskey`](/ru/docs/Web/HTML/Reference/Global_attributes#accesskey).

В этом примере, <kbd>s</kbd> это специфичная клавиша доступа (ты должен нажать <kbd>s</kbd> плюс конкретные клавиши-модификаторы для вашей комбинации браузера и операционной системы; вы можете увидеть полный список на странице [accesskey](/ru/docs/Web/HTML/Reference/Global_attributes/accesskey)).

```html
<form>
  <input type="button" value="Включить ПК" accesskey="s" />
</form>
<p>ПК выключен.</p>
```

```js hidden
const button = document.querySelector("input");
const paragraph = document.querySelector("p");

button.addEventListener("click", updateButton);

function updateButton() {
  if (button.value === "Включить ПК") {
    button.value = "Выключить пк";
    paragraph.textContent = "ПК включён!";
  } else {
    button.value = "Включить ПК";
    paragraph.textContent = "ПК выключен.";
  }
}
```

{{EmbedLiveSample("Добавление_сочетаний_клавиш_на_кнопки", 650, 100)}}

> [!NOTE]
> Проблема с приведенным выше примером, конечно, заключается в том, что пользователь не будет знать, что такое ключ доступа! На реальном сайте вам пришлось бы предоставлять эту информацию таким образом, чтобы это не противоречило дизайну сайта (например, путем предоставления легкодоступной ссылки, которая указывает на информацию о том, что такое ключи доступа к сайту).

### Выключенные / Включённые кнопки

Чтобы выключить кнопку необходимо просто добавить на неё глобальный атрибут [`disabled`](/ru/docs/Web/HTML/Reference/Global_attributes#disabled), вот так:

```html
<input type="button" value="Я выключена" disabled />
```

Вы можете включать и отключать кнопки во время выполнения, просто установив `disabled` вместо `true` или `false`. В этом примере наша кнопка изначально включена, но если вы нажмете ее, она будет отключена с помощью `button.disabled = true`. А {{domxref("WindowTimers.setTimeout","setTimeout()")}} затем функция используется для возврата кнопки обратно в ее включённое состояние через две секунды.

```html hidden
<input type="button" value="Enabled" />
```

```js hidden
const button = document.querySelector("input");

button.addEventListener("click", disableButton);

function disableButton() {
  button.disabled = true;
  button.value = "Выключена";
  window.setTimeout(function () {
    button.disabled = false;
    button.value = "Включена";
  }, 2000);
}
```

{{EmbedLiveSample("Hidden_code_1", 650, 60)}}

Если атрибут `disabled` не указан, то кнопка наследует своё `disabled` состояние из своего родительского элемента. Это позволяет включать и отключать группы элементов одновременно, заключая их в контейнер, такой как {{HTMLElement("fieldset")}} элемет, и затем установить `disabled` на контейнер.

Приведенный ниже пример показывает это в действии. Это очень похоже на предыдущий пример, за исключением того, что атрибут `disabled` устанавливается в `<fieldset>` при нажатии первой кнопки — это приводит к отключению всех трех кнопок до истечения двухсекундного тайм-аута.

```html hidden
<fieldset>
  <legend>Button group</legend>
  <input type="button" value="Button 1" />
  <input type="button" value="Button 2" />
  <input type="button" value="Button 3" />
</fieldset>
```

```js hidden
const button = document.querySelector("input");
const fieldset = document.querySelector("fieldset");

button.addEventListener("click", disableButton);

function disableButton() {
  fieldset.disabled = true;
  window.setTimeout(function () {
    fieldset.disabled = false;
  }, 2000);
}
```

{{EmbedLiveSample("Hidden_code_2", 650, 60)}}

> [!NOTE]
> Firefox, в отличие от других браузеров, по умолчанию [сохраняет динамическое отключенние состояния](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) из одного {{HTMLElement("button")}} при загрузке разных страниц. Используйте атрибут [`autocomplete`](/ru/docs/Web/HTML/Reference/Elements/button#autocomplete) для управления этой функцией.

## Валидация

Кнопки не участвуют в проверке валидации; они не имеют реальной ценности для валидации.

## Примеры

Приведенный ниже пример показывает очень простое приложение для рисования, созданное с использованием элемента {{HTMLElement("canvas")}} и простого CSS и JavaScript (CSS мы скроем для краткости). Два верхних элемента управления позволяют выбрать цвет и размер пера для рисования. Кнопка при нажатии вызывает функцию, которая очищает холст.

```html
<div class="toolbar">
  <input type="color" aria-label="select pen color" />
  <input
    type="range"
    min="2"
    max="50"
    value="30"
    aria-label="select pen size" /><span class="output">30</span>
  <input type="button" value="Clear canvas" />
</div>

<canvas class="myCanvas">
  <p>Добавьте подходящий фолбэк здесь.</p>
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

input[type="color"],
input[type="button"] {
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
let canvas = document.querySelector(".myCanvas");
let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight - 85);
let ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(0,0,0)";
ctx.fillRect(0, 0, width, height);

let colorPicker = document.querySelector('input[type="color"]');
let sizePicker = document.querySelector('input[type="range"]');
let output = document.querySelector(".output");
let clearBtn = document.querySelector('input[type="button"]');

// covert degrees to radians
function degToRad(degrees) {
  return (degrees * Math.PI) / 180;
}

// update sizepicker output value

sizePicker.oninput = function () {
  output.textContent = sizePicker.value;
};

// store mouse pointer coordinates, and whether the button is pressed
let curX;
let curY;
let pressed = false;

// update mouse pointer coordinates
document.onmousemove = function (e) {
  curX = window.Event
    ? e.pageX
    : e.clientX +
      (document.documentElement.scrollLeft
        ? document.documentElement.scrollLeft
        : document.body.scrollLeft);
  curY = window.Event
    ? e.pageY
    : e.clientY +
      (document.documentElement.scrollTop
        ? document.documentElement.scrollTop
        : document.body.scrollTop);
};

canvas.onmousedown = function () {
  pressed = true;
};

canvas.onmouseup = function () {
  pressed = false;
};

clearBtn.onclick = function () {
  ctx.fillStyle = "rgb(0,0,0)";
  ctx.fillRect(0, 0, width, height);
};

function draw() {
  if (pressed) {
    ctx.fillStyle = colorPicker.value;
    ctx.beginPath();
    ctx.arc(
      curX,
      curY - 85,
      sizePicker.value,
      degToRad(0),
      degToRad(360),
      false,
    );
    ctx.fill();
  }

  requestAnimationFrame(draw);
}

draw();
```

{{EmbedLiveSample("Examples", '100%', 600)}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{HTMLElement("input")}} и {{domxref("HTMLInputElement")}} интерфейс, который его реализует.
- Более современный элемент {{HTMLElement("button")}}.
- [Совместимость свойств CSS](/ru/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
