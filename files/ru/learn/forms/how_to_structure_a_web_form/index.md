---
title: Как структурировать HTML-формы
slug: Learn/Forms/How_to_structure_a_web_form
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Forms/Ваша_первая_HTML_форма", "Learn/HTML/Forms/Стандартные_виджеты_форм", "Learn/HTML/Forms")}}

Получив базовые знания, теперь мы более подробно рассмотрим элементы, используемые для придания структуры и значения различным частям форм.

| Уровень подготовки: | Основы компьютерной грамотности, и базовые [знания HTML](/ru/docs/Learn/HTML/Introduction_to_HTML).                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Цель:               | Разобраться как структурировать HTML формы и задавать им семантику для того, чтобы они были удобны и доступны в использовании. |

Гибкость HTML форм делает их одной из самых сложных структур в [HTML](/ru/docs/Learn/HTML); вы можете создать любую форму, используя элементы и атрибуты форм. Использование правильной структуры, при создании HTML форм, поможет гарантировать их удобство и [доступность](/ru/docs/Learn/Accessibility).

## Элемент \<form>

Элемент {{HTMLElement("form")}} формально определяет форму и атрибуты, которые определяют поведение этой формы. Каждый раз, когда вы хотите создать HTML-форму, вам нужно начать с создания элемента {{HTMLElement("form")}}, поместив внутрь него всё содержимое. Многие вспомогательные технологии или браузерные плагины могут обнаруживать элементы {{HTMLElement("form")}} и реализовывать специальные хуки, чтобы их было проще использовать.

Мы уже встречались с этим в предыдущей статье.

> **Предупреждение:** **Внимание:** Строго запрещается размещать форму внутри другой формы. Такое размещение может привести к непредсказуемому поведению форм, в зависимости от браузера.

Стоит учесть, что всегда можно использовать элементы формы вне {{HTMLElement("form")}}. Тогда по умолчанию этот элемент формы не имеет ничего общего со всеми формами. Вы можете связать его с формой с помощью атрибута `form`. В HTML5 был представлен атрибут `form` для элементов HTML форм, который позволяет явно связать элемент с формой, даже если он не заключён внутри {{ HTMLElement("form") }}.

## Элементы \<fieldset> и \<legend>

Элемент {{HTMLElement("fieldset")}} - это удобный способ стилистической и семантической группировки элементов формы. Вы можете установить заголовок {{HTMLElement("fieldset")}}, добавив элемент {{HTMLElement("legend")}} сразу после открывающего тега {{HTMLElement("fieldset")}}. Текст элемента {{HTMLElement("legend")}} формально описывает назначение содержимого {{HTMLElement("fieldset")}}.

Различные вспомогательные технологии будут использовать {{HTMLElement("legend")}} как часть метки `label` всех элементов внутри {{HTMLElement("fieldset")}}. Например, такие экранные дикторы как [Jaws](http://www.freedomscientific.com/products/fs/jaws-product-page.asp) или [NVDA](http://www.nvda-project.org/) произносят заголовок формы {{HTMLElement("legend")}} перед произношением названия меток элементов.

Небольшой пример:

```html
<form>
  <fieldset>
    <legend>Fruit juice size</legend>
    <p>
      <input type="radio" name="size" id="size_1" value="small" />
      <label for="size_1">Small</label>
    </p>
    <p>
      <input type="radio" name="size" id="size_2" value="medium" />
      <label for="size_2">Medium</label>
    </p>
    <p>
      <input type="radio" name="size" id="size_3" value="large" />
      <label for="size_3">Large</label>
    </p>
  </fieldset>
</form>
```

> **Примечание:** вы можете найти этот пример в [fieldset-legend.html](https://github.com/mdn/learning-area/blob/master/html/forms/html-form-structure/fieldset-legend.html) ([также посмотрите на результат](https://mdn.github.io/learning-area/html/forms/html-form-structure/fieldset-legend.html)).

Читая эту форму, экранный диктор произнесёт "Fruit juice size small" для первого элемента, "Fruit juice size medium" - для второго, "Fruit juice size large" - для третьего.

Вариант использования в этом примере является одним из наиболее важных. Каждый раз, когда у вас есть набор переключателей, вам нужно поместить их внутри {{HTMLElement("fieldset")}}. Также {{HTMLElement("fieldset")}} можно использовать для разделения формы. В идеале, длинную форму разделяют на несколько страниц, однако, если она должна находиться на одной странице, распределение связанных элементов в разные {{HTMLElement("fieldset")}} может повысить удобство использования.

Из-за своего влияния на вспомогательные технологии элемент {{HTMLElement("fieldset")}} является одним из ключевых элементов для построения доступных форм; однако вы не должны им злоупотреблять. Если возможно, старайтесь проверять, как [экранный диктор](https://www.nvaccess.org/download/) интерпретирует вашу форму.

## Элемент \<label>

В предыдущей статье мы увидели, что элемент {{HTMLElement("label")}} принято использовать для указания текстов-подсказок (лейблов) в HTML-формах. Это самый важный элемент для построения доступных форм — при правильной реализации скринридеры будут озвучивать текст-подсказку вместе со связанными элементами. Посмотрите на этот пример из предыдущей статьи:

```html
<label for="name">Name:</label> <input type="text" id="name" name="user_name" />
```

При правильно связанном элементе `<label>` с элементом `<input>` через атрибуты `for` и `id` соответственно (атрибут `for` ссылается на атрибут `id` соответствующего виджета формы), скринридер прочтёт вслух что-то наподобие "Name, edit text".

Если `<label>` не правильно установлен, скринридер прочитает это как "Edit text blank", что не несёт в себе никакой уточняющей информации, позволяющей понять предназначение данного текстового поля.

Обратите внимание на то, что виджет формы может быть вложен в элемент {{HTMLElement("label")}}, как на примере:

```html
<label for="name">
  Name: <input type="text" id="name" name="user_name" />
</label>
```

Однако даже в таких случаях лучше всё равно указывать атрибут `for`, так как некоторые вспомогательные технологии не распознают неявную связь между текстами-подсказками и виджетами.

### Лейблы тоже кликабельны!

Ещё одно преимущество при правильно установленных текстах-подсказках заключается в том, что по ним можно кликнуть для активации связанных с ними виджетов. Это поддерживается во всех браузерах. Это удобно как для текстовых полей ввода, в которых устанавливается фокус при клике на текст-подсказку, так и для радио-кнопок и чекбоксов — область попадания такого элемента управления может быть очень маленькой, поэтому полезно сделать её как можно больше.

Например:

```html
<form>
  <p>
    <label for="taste_1">I like cherry</label>
    <input type="checkbox" id="taste_1" name="taste_cherry" value="1" />
  </p>
  <p>
    <label for="taste_2">I like banana</label>
    <input type="checkbox" id="taste_2" name="taste_banana" value="2" />
  </p>
</form>
```

> **Примечание:** вы можете посмотреть этот пример тут [checkbox-label.html](https://github.com/mdn/learning-area/blob/master/html/forms/html-form-structure/checkbox-label.html) ([также можно посмотреть код вживую](https://mdn.github.io/learning-area/html/forms/html-form-structure/checkbox-label.html)).

### Несколько лейблов

На самом деле вы можете добавить несколько текстов-подсказок на один виджет формы, но это не очень хорошая идея, так как у некоторых вспомогательных технологий могут возникнуть проблемы с обработкой такой структуры. Вместо использования нескольких лейблов, лучше вложить виджет формы внутрь одного элемента {{htmlelement("label")}}.

Рассмотрим этот пример:

```html
<p>Required fields are followed by <abbr title="required">*</abbr>.</p>

<!-- Тогда это: -->
<div>
  <label for="username">Name:</label>
  <input type="text" name="username" />
  <label for="username"><abbr title="required">*</abbr></label>
</div>

<!-- лучше сделать таким образом: -->
<div>
  <label for="username">
    <span>Name:</span>
    <input id="username" type="text" name="username" />
    <abbr title="required">*</abbr>
  </label>
</div>

<!-- Но этот вариант лучше всего: -->
<div>
  <label for="username">Name: <abbr title="required">*</abbr></label>
  <input id="username" type="text" name="username" />
</div>
```

{{EmbedLiveSample("Несколько_лейблов", 120, 120)}}

Параграф на первой строке примера описывает правило для обязательных элементов. Вначале необходимо убедиться, что вспомогательные технологии, такие как программы чтения с экрана, отображают или озвучивают их пользователю, прежде чем он найдёт требуемый элемент. Таким образом они будут знать, что означает звёздочка. Программа чтения с экрана будет произносить звёздочку как «звёздочку» или «обязательно», в зависимости от настроек программы чтения с экрана — в любом случае, первый абзац даёт понимание того, что будет означать звёздочка далее в форме.

- В первом примере лейбл не будет прочитан вместе с текстовым полем — получится лишь "edit text blank" и отдельно читаемые тексты-подсказки. Множественные элементы `<label>` могут быть неправильно интерпретированы программой чтения с экрана.
- Второй пример немного лучше — лейбл будет прочитан вместе с текстовым полем и будет звучать как "name star name edit text", однако тексты-подсказки всё ещё разделены. Это всё ещё немного сбивает с толку, но на этот раз ситуация немного лучше, потому что с текстовое поле связано с текстом-подсказкой.
- Третий пример — лучший, так как весь лейбл будет связан с текстовым полем и озвучен целиком, а при чтении текст будет звучать как "name star edit text".

> **Примечание:** В зависимости от программы для чтения с экрана результаты могут немного отличаться. В данной статье для тестирования использовался VoiceOver (NVDA ведёт себя аналогично). Также мы были бы рады, если бы вы поделились своим опытом.

> **Примечание:** вы можете найти этот пример на GitHub [required-labels.html](https://github.com/mdn/learning-area/blob/master/html/forms/html-form-structure/required-labels.html) ([также можно посмотреть вживую](https://mdn.github.io/learning-area/html/forms/html-form-structure/required-labels.html)). Запускайте пример, закомментировав остальные, иначе скриридеры не смогут правильно распознать контент, если у вас будет несколько лейблов и несколько текстовых полей с одинаковым ID!

## Часто используемые с формами HTML-структуры

Помимо структур, характерных только для HTML-форм, хорошо помнить, что формы — это просто HTML. Это означает, что вы можете использовать всю мощь HTML для структурирования HTML-формы.

Как вы можете заметить в примерах, оборачивать лейбл и виджет формы в элемент {{HTMLElement("div")}} — это общепринятая практика. Элемент {{HTMLElement("p")}} также часто используется, как и HTML-списки (последние часто используются для структурирования множественных чекбоксом или радио-кнопок).

В добавок к элементу {{HTMLElement("fieldset")}} часто используют HTML-заголовки (например, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}) и секционирование (например, {{HTMLElement("section")}}) для структурирования сложных форм.

Прежде всего, вам нужно найти стиль, который будет удобен именно вам для программирования и который также позволит создавать доступные и удобные формы.

Каждый отдельный раздел функциональности содержится в элементах {{HTMLElement ("section")}} и {{HTMLElement ("fieldset")}}, содержащий переключатели. Каждый отдельный раздел функциональности должен находиться в отдельном элементе {{HTMLElement ("section")}} с элементами {{HTMLElement ("fieldset")}}, содержащими переключатели.

### Активное обучение: построение структуры формы

Давайте применим эти идеи на практике и построим более сложноструктурируемую форму — формы оплаты. Форма будет содержать некоторые типы виджетов формы, которые вы можете пока не понять — не переживайте об этом, вы найдёте информацию в следующей статье ([Основные нативные элементы управления формами](/ru/docs/Learn/HTML/Forms/The_native_form_widgets)). А пока внимательно прочитайте описание, следуя приведённым ниже инструкциям, и начинайте формировать представление о том, какие элементы обёртки мы используем для структурирования формы и почему.

1. Для начала сделайте локальную копию [пустого шаблона](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html) и [CSS для нашей платёжной формы](https://github.com/mdn/learning-area/blob/master/html/forms/html-form-structure/payment-form.css) в новой директории на вашем компьютере.
2. Сначала подключите CSS к HTML, добавив следующую строку кода внутрь HTML-элемента {{htmlelement("head")}}:

   ```html
   <link href="payment-form.css" rel="stylesheet" />
   ```

3. Далее начните создавать свою форму с добавления внешнего элемента {{htmlelement("form")}}:

   ```html
   <form></form>
   ```

4. Внутри тега `<form>`, добавьте заголовок и параграф, информирующий пользователей о том, как помечены поля, обязательные для заполнения:

   ```html
   <h1>Payment form</h1>
   <p>
     Required fields are followed by
     <strong><abbr title="required">*</abbr></strong
     >.
   </p>
   ```

5. Далее нам надо добавить более крупный кусок кода под нашей предыдущей записью. Здесь вы можете увидеть, что мы оборачиваем поля с контактной информацией в отдельный элемент {{htmlelement("section")}}. Более того, у нас есть набор из двух радио-кнопок, каждую из которых мы помещаем в отдельный элемент списка ({{htmlelement("li")}}). Наконец, у нас есть два текстовых поля {{htmlelement("input")}} и связанные с ними элементы {{htmlelement("label")}}, которые находятся внутри элементов {{htmlelement("p")}}, а также поле для ввода пароля. Добавьте этот код в вашу форму:

   ```html
   <section>
     <h2>Contact information</h2>
     <fieldset>
       <legend>Title</legend>
       <ul>
         <li>
           <label for="title_1">
             <input type="radio" id="title_1" name="title" value="M." />
             Mister
           </label>
         </li>
         <li>
           <label for="title_2">
             <input type="radio" id="title_2" name="title" value="Ms." />
             Miss
           </label>
         </li>
       </ul>
     </fieldset>
     <p>
       <label for="name">
         <span>Name: </span>
         <strong><abbr title="required">*</abbr></strong>
       </label>
       <input type="text" id="name" name="username" />
     </p>
     <p>
       <label for="mail">
         <span>E-mail: </span>
         <strong><abbr title="required">*</abbr></strong>
       </label>
       <input type="email" id="mail" name="usermail" />
     </p>
     <p>
       <label for="pwd">
         <span>Password: </span>
         <strong><abbr title="required">*</abbr></strong>
       </label>
       <input type="password" id="pwd" name="password" />
     </p>
   </section>
   ```

6. Сейчас мы перейдём к второму разделу `<section>` нашей формы — платёжной информации. В этом разделе у нас есть три отдельных виджета формы со связанными с ними лейблами, находящимися внутри тега `<p>`. Первый — это выпадающее меню ({{htmlelement("select")}}) для выбора типа кредитной карты. Второй — это элемент `<input>` с типом `number` для ввода номера карты. Последний виджет — это элемент `<input>` с типом date для указания даты окончания действия карты (должен будет появиться виджет с выбором даты или обычное текстовое поле в браузерах, не поддерживающих данные тип). Более новые типы полей описаны в статье [The HTML5 input types](/ru/docs/Learn/Forms/HTML5_input_types).

   Вставьте следующий код под предыдущим разделом:

   ```html
   <section>
     <h2>Payment information</h2>
     <p>
       <label for="card">
         <span>Card type:</span>
       </label>
       <select id="card" name="usercard">
         <option value="visa">Visa</option>
         <option value="mc">Mastercard</option>
         <option value="amex">American Express</option>
       </select>
     </p>
     <p>
       <label for="number">
         <span>Card number:</span>
         <strong><abbr title="required">*</abbr></strong>
       </label>
       <input type="number" id="number" name="cardnumber" />
     </p>
     <p>
       <label for="date">
         <span>Expiration date:</span>
         <strong><abbr title="required">*</abbr></strong>
         <em>formatted as mm/yy</em>
       </label>
       <input type="date" id="date" name="expiration" />
     </p>
   </section>
   ```

7. Последняя секция, которую мы добавим выглядит намного проще и содержит в себе только элемент {{htmlelement("button")}} с типом `submit`, для отправки данных. Добавьте этот код в конец вашей формы:

   ```html
   <p><button type="submit">Validate the payment</button></p>
   ```

Вы можете увидеть законченную форму в действии ниже (также её можно найти на GitHub — посмотрите [payment-form.html](https://github.com/mdn/learning-area/blob/master/html/forms/html-form-structure/payment-form.html) и [живой пример](https://mdn.github.io/learning-area/html/forms/html-form-structure/payment-form.html)):

{{ EmbedLiveSample("A_payment_form","100%",660, "", "Learn/Forms/How_to_structure_a_web_form/Example") }}

## Протестируйте себя!

Вы дошли до конца статьи, но можете ли вспомнить самую важную информацию? Далее вы можете найти тест, который поможет убедиться, что вы усвоили знания прежде чем двигаться дальше — посмотрите [Test your skills: Form structure](/ru/docs/Learn/Forms/Test_your_skills:_Form_structure).

## Заключение

Теперь у вас есть все необходимые знания для того, чтобы правильно структурировать вашу HTML-форму. Мы подробнее раскроем затронутые здесь темы в нескольких последующих статьях. В следующей же статье мы изучим все возможные типы виджетов форм, которые могут понадобиться для сбора информации от ваших пользователей.

## Смотрите также

- [A List Apart: _Sensible Forms: A Form Usability Checklist_](http://www.alistapart.com/articles/sensibleforms/)

{{PreviousMenuNext("Learn/HTML/Forms/Ваша_первая_HTML_форма", "Learn/HTML/Forms/Стандартные_виджеты_форм", "Learn/HTML/Forms")}}

## В этом разделе

- [Ваша первая HTML форма](/ru/docs/Learn/HTML/Forms/Ваша_первая_HTML_форма)
- [Как структурировать HTML-формы](/ru/docs/Learn/HTML/Forms/How_to_structure_an_HTML_form)
- [Стандартные виджеты форм](/ru/docs/Learn/HTML/Forms/Стандартные_виджеты_форм)
- [The HTML5 input types](/ru/docs/Learn/Forms/HTML5_input_types)
- [Other form controls](/ru/docs/Learn/Forms/Other_form_controls)
- [Стили HTML-форм](/ru/docs/Learn/HTML/Forms/Styling_HTML_forms)
- [Advanced form styling](/ru/docs/Learn/Forms/Advanced_form_styling)
- [UI pseudo-classes](/ru/docs/Learn/Forms/UI_pseudo-classes)
- [Проверка данных формы](/ru/docs/Learn/HTML/Forms/Валидация_формы)
- [Отправка данных формы](/ru/docs/Learn/HTML/Forms/Отправка_и_Получение_данных_формы)

### Дополнительные темы

- [Как создавать пользовательские виджеты форм](/ru/docs/Learn/HTML/Forms/How_to_build_custom_form_widgets)
- [Sending forms through JavaScript](/ru/docs/Learn/HTML/Forms/Sending_forms_through_JavaScript)
- [Property compatibility table for form widgets](/ru/docs/Learn/HTML/Forms/Property_compatibility_table_for_form_widgets)
