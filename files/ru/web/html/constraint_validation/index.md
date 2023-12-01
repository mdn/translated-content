---
title: Валидация ограничений
slug: Web/HTML/Constraint_validation
---

Создание веб-форм всегда было сложной задачей. Хотя сверстать саму форму достаточно просто, проверить, имеет ли каждое поле валидное значение — сложнее, а информирование пользователя о проблеме может стать настоящей головной болью. [HTML5](/ru/docs/Web/Guide/HTML/HTML5) представил для форм новый механизм: он добавляет элементу {{ HTMLElement("input") }} новые семантические типы и _constraint validation_, чтобы облегчить проверку содержимого на стороне клиента. С помощью новых атрибутов основные ограничения могут быть проверены без использования JavaScript; более сложные ограничения могут быть проверены с помощью [Constraint validation API](/ru/docs/Web/API/Constraint_validation).

Базовое введение в эти концепции с примерами можно найти в разделе [Валидация форм на стороне клиента](/ru/docs/Learn/Forms/Form_validation).

> **Примечание:** HTML5-валидация ограничений не отменяет необходимости дополнительной валидации на _стороне сервера_. Несмотря на то, что ожидается гораздо меньшее не валидных запросов формы, они всё же могут быть отправлены несовместимыми браузерами (например, не поддерживающими HTML5 или JavaScript) или злоумышленниками, которые пытаются взломать ваше веб-приложение. Следовательно, как и в случае с HTML4, вам по-прежнему нужно производить дополнительную валидацию ограничений ввода и на стороне сервера.

## Внутренние и базовые ограничения

В HTML5 базовые ограничения объявляются двумя способами:

- Задавать семантически наиболее подходящие значения для атрибута [`type`](/ru/docs/Web/HTML/Element/input#type) элемента {{ HTMLElement("input") }}. Например, типа `email` автоматически создаёт ограничение, которое проверяет, является ли значение валидным email-адресом.
- Использовать атрибуты валидации, позволяющие достаточно просто задать ограничения без помощи JavaScript.

### Семантические типы input

Внутренние ограничения атрибута [`type`](/ru/docs/Web/HTML/Element/input#type):

| Тип input                                                       | Описание ограничения                                                                                                                                  | Связанное нарушение                                                                   |
| --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [`<input type="URL">`](/ru/docs/Web/HTML/Element/input/url)     | Значение должно быть [URL-адресом](/ru/docs/Learn/Common_questions/What_is_a_URL), как указано в [URL Living Standard](https://url.spec.whatwg.org/). | Нарушение ограничения **[TypeMismatch](/ru/docs/Web/API/ValidityState/typeMismatch)** |
| [`<input type="email">`](/ru/docs/Web/HTML/Element/input/email) | Значение должно быть синтаксически правильным email-адресом, который обычно имеет формат `username@hostname.tld`.                                     | Нарушение ограничения **[TypeMismatch](/ru/docs/Web/API/ValidityState/typeMismatch)** |

Для обоих этих типов input, если установлен атрибут [`multiple`](/ru/docs/Web/HTML/Element/input#multiple) допускается ввод нескольких разделённых запятыми значений. Если какое-то из значений не удовлетворяет условию, описанному выше, срабатывает нарушение ограничения **Type mismatch**.

Обратите внимание, что большинство типов input не имеют внутренних ограничений, так как некоторые из них недоступны для валидации ограничений или имеют алгоритм, по умолчанию преобразующий неправильные значения в правильные.

### Атрибуты валидации

В дополнение к атрибуту `type`, описанному выше, для описания основных ограничений используются следующие атрибуты:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Атрибут</th>
      <th scope="col">Типы input, поддерживающие атрибут</th>
      <th scope="col">Возможные значения</th>
      <th scope="col">Описание ограничения</th>
      <th scope="col">Связанное нарушение</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code><a href="/ru/docs/Web/HTML/Attributes/pattern">pattern</a></code>
      </td>
      <td>
        <code>text</code>, <code>search</code>, <code>url</code>,
        <code>tel</code>, <code>email</code>, <code>password</code>
      </td>
      <td>
        <a href="/ru/docs/Web/JavaScript/Guide/Regular_Expressions"
          >Регулярное выражение JavaScript</a
        >
        (без
        <a
          href="http://www.ecma-international.org/publications/standards/Ecma-262.htm"
          >ECMAScript 5</a
        >
        флагов <code>global</code>, <code>ignoreCase</code>, and
        <code>multiline</code>
      </td>
      <td>Значение должно соответствовать шаблону.</td>
      <td>
        <code
          >Нарушение ограничения
          <strong
            ><a href="/ru/docs/Web/API/ValidityState/patternMismatch"
              >patternMismatch</a
            ></strong
          ></code
        >
      </td>
    </tr>
    <tr>
      <td rowspan="3">
        <code><a href="/ru/docs/Web/HTML/Attributes/min">min</a></code>
      </td>
      <td><code>range</code>, <code>number</code></td>
      <td>Валидное число</td>
      <td rowspan="3">
        Значение в поле должно быть больше или равно значению атрибута
      </td>
      <td rowspan="3">
        Нарушение ограничения
        <strong
          ><code
            ><a href="/ru/docs/Web/API/ValidityState/rangeUnderflow"
              >rangeUnderflow</a
            ></code
          ></strong
        >
      </td>
    </tr>
    <tr>
      <td><code>date</code>, <code>month</code>, <code>week</code></td>
      <td>Валидная дата</td>
    </tr>
    <tr>
      <td>
        <code>datetime</code>, <code>datetime-local</code>, <code>time</code>
      </td>
      <td>Валидная дата и время</td>
    </tr>
    <tr>
      <td rowspan="3">
        <code><a href="/ru/docs/Web/HTML/Attributes/max">max</a></code>
      </td>
      <td><code>range</code>, <code>number</code></td>
      <td>Валидное число</td>
      <td rowspan="3">
        Значение в поле должно быть меньше или равно значению атрибута
      </td>
      <td rowspan="3">
        Нарушение ограничения
        <strong
          ><code
            ><a href="/ru/docs/Web/API/ValidityState/rangeOverflow"
              >rangeOverflow</a
            ></code
          ></strong
        >
      </td>
    </tr>
    <tr>
      <td><code>date</code>, <code>month</code>, <code>week</code></td>
      <td>Валидная дата</td>
    </tr>
    <tr>
      <td>
        <code>datetime</code>, <code>datetime-local</code>, <code>time</code>
      </td>
      <td>Валидная дата и время</td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/ru/docs/Web/HTML/Attributes/required">required</a></code
        >
      </td>
      <td>
        <code>text</code>, <code>search</code>, <code>url</code>,
        <code>tel</code>, <code>email</code>, <code>password</code>,
        <code>date</code>, <code>datetime</code>, <code>datetime-local</code>,
        <code>month</code>, <code>week</code>, <code>time</code>,
        <code>number</code>, <code>checkbox</code>, <code>radio</code>,
        <code>file</code>; а также элементы {{ HTMLElement("select") }}
        и {{ HTMLElement("textarea") }}
      </td>
      <td>
        <em>Нет</em>, так как это булев атрибут: его наличие означает
        <em>true</em>, а отсутствие — <em>false</em>
      </td>
      <td>В поле обязательно должно быть значение (если установлен атрибут)</td>
      <td>
        <strong
          ><code
            ><a href="/ru/docs/Web/API/ValidityState/valueMissing"
              >valueMissing</a
            ></code
          ></strong
        >
        constraint violation
      </td>
    </tr>
    <tr>
      <td rowspan="5">
        <code><a href="/ru/docs/Web/HTML/Attributes/step">step</a></code>
      </td>
      <td><code>date</code></td>
      <td>Целое число дней</td>
      <td rowspan="5">
        Если для шага не задан литерал <code>any</code>, значением должно быть
        <strong>min</strong> + целое число, кратное шагу
      </td>
      <td rowspan="5">
        Нарушение ограничения
        <strong
          ><code
            ><a href="/ru/docs/Web/API/ValidityState/stepMismatch"
              >stepMismatch</a
            ></code
          ></strong
        >
      </td>
    </tr>
    <tr>
      <td><code>month</code></td>
      <td>Целое число месяцев</td>
    </tr>
    <tr>
      <td><code>week</code></td>
      <td>Целое число недель</td>
    </tr>
    <tr>
      <td>
        <code>datetime</code>, <code>datetime-local</code>, <code>time</code>
      </td>
      <td>Целое число секунд</td>
    </tr>
    <tr>
      <td><code>range</code>, <code>number</code></td>
      <td>Целое число</td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/ru/docs/Web/HTML/Attributes/minlength"
            >minlength</a
          ></code
        >
      </td>
      <td>
        <code>text</code>, <code>search</code>, <code>url</code>,
        <code>tel</code>, <code>email</code>, <code>password</code>; а также
        элемент {{ HTMLElement("textarea") }}/td>
      </td>
      <td>Целое число</td>
      <td>
        Если атрибут не пустой, количество символов (точек кода) содержимого
        поля не должно быть меньше значения, указанного в атрибуте. Все символы
        новой строки нормализованы до одного символа (в отличие от CRLF-пар) для
        {{ HTMLElement("textarea") }}.
      </td>
      <td>
        Нарушение ограничения
        <strong
          ><code
            ><a href="/ru/docs/Web/API/ValidityState/tooShort"
              >tooShort</a
            ></code
          ></strong
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/ru/docs/Web/HTML/Attributes/maxlength"
            >maxlength</a
          ></code
        >
      </td>
      <td>
        <code>text</code>, <code>search</code>, <code>url</code>,
        <code>tel</code>, <code>email</code>, <code>password</code>; а также
        элемент {{ HTMLElement("textarea") }}
      </td>
      <td>Целое число</td>
      <td>
        Количество символов (точек кода) содержимого поля не должно превышать
        значение, указанное в атрибуте
      </td>
      <td>
        Нарушение ограничения
        <strong
          ><code
            ><a href="/ru/docs/Web/API/ValidityState/tooLong"
              >tooLong</a
            ></code
          ></strong
        >
      </td>
    </tr>
  </tbody>
</table>

## Процесс валидации ограничений

Валидация ограничений выполняется с помощью Constraint Validation API либо на отдельном элементе формы, либо на уровне формы, на самом элементе {{ HTMLElement("form") }}. Способы валидации:

- Вызов метода `checkValidity()` или `reportValidity()` связанного с формой DOM-интерфейса, ([`HTMLInputElement`](/ru/docs/Web/API/HTMLInputElement), [`HTMLSelectElement`](/ru/docs/Web/API/HTMLSelectElement), [`HTMLButtonElement`](/ru/docs/Web/API/HTMLButtonElement), [`HTMLOutputElement`](/ru/docs/Web/API/HTMLOutputElement) или [`HTMLTextAreaElement`](/ru/docs/Web/API/HTMLTextAreaElement)), который оценивает ограничения только на данном элементе, позволяя скрипту получить эту информацию. Метод `checkValidity()` возвращает логическое значение, указывающее, соотвествует ли значение элемента его ограничениям. (Обычно это делает браузер при определении того, какой CSS-псевдоклассов применяется: {{ Cssxref(":valid") }} или {{ Cssxref(":invalid") }}.) Напротив, метод `reportValidity()` сообщает пользователю о любых нарушениях ограничений.
- Вызов метода `checkValidity()` или `reportValidity()` интерфейса [`HTMLFormElement`](/ru/docs/Web/API/HTMLFormElement).
- Отправка самой формы.

Вызов метода `checkValidity()` называется _статической_ валидацией ограничений, а вызов метода `reportValidity()` или отправка формы называется _интерактивной_ валидацией ограничений.

> **Примечание:**- Если элементу {{ HTMLElement("form") }} задан атрибут [`novalidate`](/ru/docs/Web/HTML/Element/form#novalidate), интерактивная валидация ограничений не произойдёт.
>
> - Вызов метода `submit()` интерфейса [`HTMLFormElement`](/ru/docs/Web/API/HTMLFormElement) не запускает валидацию ограничений. Другими словами, этот метод отправляет данные формы на сервер, даже если ограничения нарушены. Вместо него вызовите метод `click()` кнопки отправки формы.

## Сложные ограничения с помощью Constraint Validation API

С помощью JavaScript и Constraint Validation API можно реализовать более сложные ограничения, например, ограничения, касающиеся сразу нескольких полей или ограничения, включающие сложные вычисления.

По сути, идея заключается в том, чтобы при наступлении определённого события поля формы (например, **onchange**) запускать JavaScript, чтобы определить, нарушено ограничение, и затем с помощью метода `field.setCustomValidity()`, задать результат валидации: пустая строка означает, что ограничение соблюдается, а любая другая строка означает, что есть ошибка и эта строка является сообщением об ошибке, которое нужно показать пользователю.

### Ограничение, объединяющее несколько полей: Валидация почтового индекса

Формат почтового индекса в разных странах отличается. Мало того, что в большинстве стран может быть дополнительный префикс с кодом страны (например, `D —` в Германии, `F —` во Франции или Швейцарии), в некоторых странах, почтовые индексы содержат фиксированное количеством цифр; другие, например, Великобритания, имеют ещё более сложную структуру, допускающую в определённых местах ещё и наличие букв.

> **Примечание:** Далее представлена не полная библиотека валидации почтового индекса, а скорее демонстрация ключевых концепций.

В качестве примера мы добавим скрипт, выполняющий валидацию органичений простой формы:

```html
<form>
  <label for="ZIP">ZIP : </label>
  <input type="text" id="ZIP" />
  <label for="Country">Country : </label>
  <select id="Country">
    <option value="ch">Switzerland</option>
    <option value="fr">France</option>
    <option value="de">Germany</option>
    <option value="nl">The Netherlands</option>
  </select>
  <input type="submit" value="Validate" />
</form>
```

Получим следующую форму:

{{EmbedLiveSample("Constraint_combining_several_fields_Postal_code_validation")}}

Сначала запишем функцию, проверяющую само ограничение:

```js
function checkZIP() {
  // Для каждой страны определяем шаблон, которому должен следовать почтовый индекс
  var constraints = {
    ch: [
      "^(CH-)?\\d{4}$",
      "Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950",
    ],
    fr: [
      "^(F-)?\\d{5}$",
      "France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012",
    ],
    de: [
      "^(D-)?\\d{5}$",
      "Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345",
    ],
    nl: [
      "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
      "Nederland ZIPs must have exactly 4 digits, followed by 2 letters except SA, SD and SS",
    ],
  };

  // Прочитать id страны
  var country = document.getElementById("Country").value;

  // Получить поле NPA
  var ZIPField = document.getElementById("ZIP");

  // Создать валидатор ограничения
  var constraint = new RegExp(constraints[country][0], "");
  console.log(constraint);

  // Валидировать индекс
  if (constraint.test(ZIPField.value)) {
    // Индекс соответствует ограничению, мы используем ConstraintAPI, чтобы сообщить об этом
    ZIPField.setCustomValidity("");
  } else {
    // Индекс не соответствует ограничению , мы используем ConstraintAPI, чтобы
    // показать сообщение, описывающее формат, требуемый для данной страны
    ZIPField.setCustomValidity(constraints[country][1]);
  }
}
```

Затем мы связываем его с событием **onchange** для {{ HTMLElement("select") }} и с событием **oninput** для {{ HTMLElement("input") }}:

```js
window.onload = function () {
  document.getElementById("Country").onchange = checkZIP;
  document.getElementById("ZIP").oninput = checkZIP;
};
```

Вы можете посмотреть [живой пример](/@api/deki/files/4744/=constraint.html) валидации индекса.

### Ограничение размера загружаемого файла

Ещё одним распространённым ограничением является лимит размера загружаемых файлов. Данная проверка на стороне клиента перед отправкой на сервер требует сочетания Constraint Validation API и особенно метода `field.setCustomValidity()` с другим JavaScript API, в данном случае — File API.

Вот часть HTML:

```html
<label for="FS">Select a file smaller than 75 kB : </label>
<input type="file" id="FS" />
```

Она отображает:

{{EmbedLiveSample("Limiting_the_size_of_a_file_before_its_upload")}}

JavaScript считывает выбранный файл, с помощью метода `File.size()` получает его размер, сравнивает его с лимитом и вызывает Constraint Validation API, чтобы сообщить браузеру о нарушении:

```js
function checkFileSize() {
  var FS = document.getElementById("FS");
  var files = FS.files;

  // Если выбран хотя бы один файл
  if (files.length > 0) {
    if (files[0].size > 75 * 1024) {
      // Проверить ограничение
      FS.setCustomValidity("Размер файла не должен превышать 75 kB");
      return;
    }
  }
  // Если нарушения ограничений нет
  FS.setCustomValidity("");
}
```

Наконец мы связываем метод с нужным событием:

```js
window.onload = function () {
  document.getElementById("FS").onchange = checkFileSize;
};
```

[Живой пример](/@api/deki/files/4745/=fileconstraint.html) валидации ограничения размера файла.

## Визуальное оформление нарушения ограничений

Помимо установки ограничений, веб-разработчики хотят управлять тем, какие сообщения показываются пользователям и как они оформлены.

### Управление внешним видом элементов

Изменять внешний вид элементов можно с помощью CSS-псевдоклассов.

#### CSS-псевдоклассы :required и :optional

[Псевдоклассы](/ru/docs/Web/CSS/Pseudo-classes) {{cssxref(':required')}} и {{cssxref(':optional')}} позволяют писать селекторы, соответствующие элементам формы, которые имеют или не имеют атрибут [`required`](/ru/docs/Web/HTML/Global_attributes#required)

#### CSS-псевдокласс :placeholder-shown

Смотрите {{cssxref(':placeholder-shown')}}

#### CSS-псевдоклассы :valid и :invalid

[Псевдоклассы](/ru/docs/Web/CSS/Pseudo-classes) {{cssxref(':valid')}} и {{cssxref(':invalid')}} используются для представления элементов \<input>, содержимое которых является валидным или не валидным соответственно. Эти классы позволяют пользователю оформлять валидные или не валидные элементы формы, чтобы облегчить определение элементов, которые имеют корректный или некорректный формат.

### Управление текстом нарушения ограничений

Следующее может помочь с управлением текстом нарушения ограничений:

- Метод [element.setCustomValidity(message)](</ru/docs/Web/API/Constraint_validation#element.setcustomvalidity(message)>) для элементов:

  - {{HTMLElement("fieldset")}}. Примечание: Добавление кастомного сообщения валидации на элемент fieldset не предотвращает отправку формы в большинстве браузеров.
  - {{HTMLElement("input")}}
  - {{HTMLElement("output")}}
  - {{HTMLElement("select")}}
  - Кнопка отправки формы в виде элемента {{HTMLElement("button")}} или `input` `submit` с указанным типом {{HTMLElement("input/submit", "submit")}}. Другие типы кнопок не участвуют в валидации ограничений.
  - {{HTMLElement("textarea")}}

- Интерфейс [`ValidityState`](/ru/docs/Web/API/ValidityState) описывает объект, возвращаемый свойством [validity](/ru/docs/Web/API/Constraint_validation#validity) перечисленных выше типов элементов. Он представляет разные способы определения не валидности значения. Вместе они помогают объяснить, почему значение элемента не проходит валидацию, если оно не валидно.
