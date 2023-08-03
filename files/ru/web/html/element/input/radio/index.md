---
title: <input type="radio">
slug: Web/HTML/Element/input/radio
---

{{HTMLSidebar}}

Атрибут **type** тега `<input>` со значением **`radio`** обычно используется для создания группы радиокнопок (переключателей), описывающих набор взаимосвязанных параметров. Одновременно пользователь может выбрать лишь одну радиокнопку из предложенных. Радиокнопки обычно отображаются как небольшие кружки, которые заполняются или подсвечиваются при наведении.

```html
<input type="radio" id="radioButton" />
```

{{ EmbedLiveSample('Basic_example', 600, 30) }}

Исходный код к данному интерактивному примеру находиться на GitHub репозитории. Если вы желаете внести свой вклад в проект интерактивных примеров, то склонируйте удалённый репозиторий [https://github.com/mdn/interactive-examples](https://github.com/mdn/interactive-examples) и отправьте нам запрос на включение сделанных вами изменений «pull request».

Радиокнопки называются так потому, что выглядят и функционируют в схожей манере с кнопками старомодных радиоприёмников, подобных представленному ниже.

![Shows what radio buttons looked like in the olden days.](old-radio.jpg)

> **Примечание:** [Чекбоксы](/ru/docs/Web/HTML/Element/input/checkbox) похожи на радиокнопки, но с одним важным отличием: радиокнопки предназначены для выбора одного значения из предложенных, в то время как чекбоксы позволяют "включать" и "выключать" значения. Если существует несколько элементов управления, то с помощью радиокнопок пользователь сможет выбрать лишь один из них, а чекбоксы позволят выбрать несколько значений одновременно.

| **[Value](#value)**        | {{domxref("Строка DOM")}} отображающая значение радиокнопки |
| -------------------------- | ----------------------------------------------------------- |
| **События**                | {{event("change")}} и {{event("input")}}                    |
| **Универсальные атрибуты** | [`checked`](/ru/docs/Web/HTML/Element/input#checked)        |
| **Атрибуты IDL**           | `checked` и `value`                                         |
| **Методы**                 | {{domxref("HTMLInputElement.select", "select()")}}          |

## Атрибут value

Атрибут `value` - это {{domxref("строка DOM")}}, содержащая значение радиокнопки. Это значение никогда не показывается пользователю его веб-браузером. Атрибут value используется для того, чтобы точно определить какая из радиокнопок была выбрана пользователем.

### Создание группы радиокнопок

Группа радиокнопок определяется путём присвоения каждой радиокнопке в данной группе одного и того же значения атрибута ([`name`](/ru/docs/Web/HTML/Element/input#name)). Выбор любой радиокнопки в этой группе автоматически отменяет выбор другой радиокнопки в той же группе.

Вы можете создать любое количество групп радиокнопок, если каждой из этих групп будет присвоено своё уникальное значение атрибута `name`.

Например, если в вашей форме необходимо запросить предпочитаемый способ контакта с пользователем, то вы можете создать три радиокнопки с **name= `"contact"` ,** но с разными **value =** `"email"`, **value =**`"phone"` и **value =** `"mail"` соответственно. Пользователь не видит атрибуты `name` и `value` (если только вы не добавляете код для их отображения).

HTML будет выглядеть следующим образом:

```html
<form>
  <p>Please select your preferred contact method:</p>
  <div>
    <input type="radio" id="contactChoice1" name="contact" value="email" />
    <label for="contactChoice1">Email</label>

    <input type="radio" id="contactChoice2" name="contact" value="phone" />
    <label for="contactChoice2">Phone</label>

    <input type="radio" id="contactChoice3" name="contact" value="mail" />
    <label for="contactChoice3">Mail</label>
  </div>
  <div>
    <button type="submit">Submit</button>
  </div>
</form>
```

Здесь вы видите три радиокнопки, каждая из которых имеет атрибут `name` со значением `"contact"` и уникальный атрибут `value`, который однозначно идентифицирует эту радиокнопку в данной группе. Каждой радиокнопке присвоен уникальный {{domxref("Element.id", "id")}}, связанный с тегом {{HTMLElement("label")}} через атрибут [`for`](/ru/docs/Web/HTML/Element/label#for) для установления связи между конкретной меткой и конкретной радиокнопкой.

Вы можете опробовать этот код здесь:

{{ EmbedLiveSample('Создание_группы_радиокнопок', 600, 130) }}

### Представление данных группы радиокнопок

Когда представленная выше форма отправляется на сервер с информацией о выбранной радиокнопке, то её данные включают запись в виде **"contact=name".** Например, если пользователь кликает на радиокнопку "Phone", а затем отправляет форму на сервер, данные формы будут включать в себя строку `"contact=phone"`.

Если вы пренебрежёте атрибутом `value` в вашем HTML, то отправленные данные просто присвоят данной группе значение `"on"`. То есть, если пользователь кликнет на радиокнопку "Phone" и отправит форму, итоговые данные отобразятся как `"contact=on"` и будут абсолютно бесполезны. Поэтому никогда не забывайте указывать атрибут `value`!

> **Примечание:** Если в отправленной форме не была выбрана ни одна радиокнопка, то группа радиокнопок вообще не будет включать в себя никакие данные, так как отсутствуют значения для отправки.

Поскольку отправлять пустую форму в большинстве случаев не имеет никакого смысла, то разумно оставлять одну радиокнопку активированной по умолчанию с помощью атрибута `"checked"`. Смотрите здесь [Selecting a radio button by default](#selecting_a_radio_button_by_default).

Давайте добавим немного кода в наш пример для того, чтобы изучить данные, полученные из этой формы. HTML изменяется путём добавления блока {{HTMLElement("pre")}} для вывода данных формы.

```html
<form>
  <p>Please select your preferred contact method:</p>
  <div>
    <input type="radio" id="contactChoice1" name="contact" value="email" />
    <label for="contactChoice1">Email</label>
    <input type="radio" id="contactChoice2" name="contact" value="phone" />
    <label for="contactChoice2">Phone</label>
    <input type="radio" id="contactChoice3" name="contact" value="mail" />
    <label for="contactChoice3">Mail</label>
  </div>
  <div>
    <button type="submit">Submit</button>
  </div>
</form>
<pre id="log"></pre>
```

Затем добавим немного [JavaScript](/ru/docs/Web/JavaScript). Установим обработчик события {{event("submit")}}, которая будет отправляться при клике пользователя на кнопку "Отправить":

```js
var form = document.querySelector("form");
var log = document.querySelector("#log");

form.addEventListener(
  "submit",
  function (event) {
    var data = new FormData(form);
    var output = "";
    for (const entry of data) {
      output = entry[0] + "=" + entry[1] + "\r";
    }
    log.innerText = output;
    event.preventDefault();
  },
  false,
);
```

Опробуйте этот пример и убедитесь, что для группы радиокнопок `"contact"` будет только один результат.

{{EmbedLiveSample("Представление_данных_группы_радиокнопок", 600, 130)}}

## Использование радиокнопок

Мы уже осветили основные моменты работы с радиокнопками выше. Давайте рассмотрим другие распространённые функции и методы, связанные с использованием радиокнопок, о которых вам нужно знать.

### Выбор радиокнопки по умолчанию

Чтобы установить радиокнопку как выбранную по умолчанию, вам необходимо подключить атрибут `checked`, как показано ниже в немного изменённой версии предыдущего примера.

```html
<form>
  <p>Please select your preferred contact method:</p>
  <div>
    <input
      type="radio"
      id="contactChoice1"
      name="contact"
      value="email"
      checked />
    <label for="contactChoice1">Email</label>

    <input type="radio" id="contactChoice2" name="contact" value="phone" />
    <label for="contactChoice2">Phone</label>

    <input type="radio" id="contactChoice3" name="contact" value="mail" />
    <label for="contactChoice3">Mail</label>
  </div>
  <div>
    <button type="submit">Submit</button>
  </div>
</form>
```

{{ EmbedLiveSample('Выбор_радиокнопки_по_умолчанию', 600, 130) }}

В данном случае первая радиокнопка будет выбрана по умолчанию.

> **Примечание:** Если вы устанавливаете атрибут `checked` более чем на одну кнопку, то стоит иметь в виду, что каждый последующий атрибут `checked` отменяет предыдущий, то есть как отмеченная будет выбрана последняя радиокнопка с атрибутом `checked`. Это происходит потому, что в каждой группе радиокнопок одновременно может быть выбрана только одна кнопка, и браузер автоматически отменяет другие выбранные до этого радиокнопки.

### Providing a bigger hit area for your radio buttons

В примерах, представленных выше, вы могли заметить, что можно выбрать радиокнопку, кликнув как на соединённый с ней элемент {{htmlelement("label")}}, так и на саму кнопку. Это действительно полезная функция HTML-форм, которая облегчает пользователям выбор нужной опции, особенно на устройствах с небольшим экраном, таких как смартфоны. Помимо специальных возможностей, это другая веская причина для правильного использования элементов `<label>` в ваших формах.

## Валидация формы

Радиокнопки не участвуют в проверке ограничений, так как у них нет реальных значений для ограничения.

## Установка стилей радиокнопок

Следующий пример отображает немного более проработанную версию примера, который мы использовали на протяжении всей статьи, с некоторыми дополнительными стилями и с лучшей семантикой, установленной с помощью специализированных элементов.

HTML будет выглядеть следующим образом:

```html
<form>
  <fieldset>
    <legend>Please select your preferred contact method:</legend>
    <div>
      <input
        type="radio"
        id="contactChoice1"
        name="contact"
        value="email"
        checked />
      <label for="contactChoice1">Email</label>

      <input type="radio" id="contactChoice2" name="contact" value="phone" />
      <label for="contactChoice2">Phone</label>

      <input type="radio" id="contactChoice3" name="contact" value="mail" />
      <label for="contactChoice3">Mail</label>
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
  </fieldset>
</form>
```

Здесь не так много нового, кроме дополнения в виде элементов {{htmlelement("fieldset")}} и {{htmlelement("legend")}}, которые позволяют сгруппировать элементы форм между собой функционально и семантически.

CSS будет выглядеть так:

```css
html {
  font-family: sans-serif;
}

div:first-of-type {
  display: flex;
  align-items: flex-start;
  margin-bottom: 5px;
}

label {
  margin-right: 15px;
  line-height: 32px;
}

input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  border-radius: 50%;
  width: 16px;
  height: 16px;

  border: 2px solid #999;
  transition: 0.2s all linear;
  outline: none;
  margin-right: 5px;

  position: relative;
  top: 4px;
}

input:checked {
  border: 6px solid black;
}

button,
legend {
  color: white;
  background-color: black;
  padding: 5px 10px;
  border-radius: 0;
  border: 0;
  font-size: 14px;
}

button:hover,
button:focus {
  color: #999;
}

button:active {
  background-color: white;
  color: black;
  outline: 1px solid black;
}
```

Самым примечательным здесь является использование свойства {{cssxref("appearance")}} с использованием префиксов некоторых браузеров. По умолчанию радиокнопки (и чекбоксы) уже имеют собственные стили в каждой операционной системе. Придав свойству `appearance` значение `none`, вы можете отменить все "родные" настройки стилей операционной системы и создать свои собственные. Здесь мы использовали свойства {{cssxref("border")}} и {{cssxref("border-radius")}}, а также свойство {{cssxref("transition")}} для создания хорошо анимированного выбора радиокнопок. Заметьте также, что псевдокласс {{cssxref(":checked")}} используется для указания стилей внешнего вида кнопок при их выборе.

Стоит иметь в виду, что свойство `appearance` неплохо работает для создания простых стилей, но имеет тенденцию вести себя несколько непоследовательно в некоторых браузерах и полностью не работает в Internet Explorer. Тщательно проверяйте как работает ваш сайт в каждом браузере!

{{ EmbedLiveSample('Установка_стилей_радиокнопок', 600, 120) }}

Обратите внимание, что при клике на радиокнопку, на предыдущей выбранной кнопке появляется мягкий эффект угасания. Кроме того, стиль и окраска легенды и кнопки "Submit" имеет сильный контраст с остальным текстом. Возможно, это не совсем тот эффект, который вы хотели бы видеть в своём реальном веб-приложении, но этот пример хорошо отображает возможности CSS.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{HTMLElement("input")}} and the {{domxref("HTMLInputElement")}} interface that implements it.
- `RadioNodeList`: the interface that describes a list of radio buttons
