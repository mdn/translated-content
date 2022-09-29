---
title: Валидация ограничений
slug: Web/Guide/HTML/Constraint_validation
tags:
  - CSS
  - Руководство
  - HTML5
  - NeedsContent
  - Селекторы
---
<p>Создание веб-форм всегда было сложной задачей. Хотя сверстать саму форму достаточно просто, проверить, имеет ли каждое поле валидное значение — сложнее, а информирование пользователя о проблеме может стать настоящей головной болью.<a href="/ru/docs/Web/Guide/HTML/HTML5"> HTML5</a> представил для форм новый механизм: он добавляет элементу {{ HTMLElement("input") }} новые семантические типы и <em>constraint validation</em>, чтобы облегчить проверку содержимого на стороне клиента. С помощью новых атрибутов основные ограничения могут быть проверены без использования JavaScript; более сложные ограничения могут быть проверены с помощью <a href="/en-US/docs/Web/API/Constraint_validation">Constraint validation API</a>.</p>

<p>Базовое введение в эти концепции с примерами можно найти в разделе <a href="/ru/docs/Learn/Forms/Form_validation">Валидация форм на стороне клиента</a>.</p>

<div class="note"><strong>Примечание:</strong> HTML5-валидация ограничений не отменяет необходимости дополнительной валидации на <em>стороне сервера</em>. Несмотря на то, что ожидается гораздо меньшее не валидных запросов формы, они всё же могут быть отправлены несовместимыми браузерами (например, не поддерживающими HTML5 или JavaScript) или злоумышленниками, которые пытаются взломать ваше веб-приложение. Следовательно, как и в случае с HTML4, вам по-прежнему нужно производить дополнительную валидацию ограничений ввода и на стороне сервера.</div>

<h2 id="Intrinsic_and_basic_constraints">Внутренние и базовые ограничения</h2>

<p>В HTML5 базовые ограничения объявляются двумя способами:</p>

<ul>
 <li>Задавать семантически наиболее подходящие значения для атрибута {{ htmlattrxref("type", "input") }} элемента {{ HTMLElement("input") }}. Например, типа <code>email</code> автоматически создаёт ограничение, которое проверяет, является ли значение валидным email-адресом.</li>
 <li>Использовать атрибуты валидации, позволяющие достаточно просто задать ограничения без помощи JavaScript.</li>
</ul>

<h3 id="Semantic_input_types">Семантические типы input</h3>

<p>Внутренние ограничения атрибута {{ htmlattrxref("type", "input") }}:</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Тип input</th>
   <th scope="col">Описание ограничения</th>
   <th scope="col">Связанное нарушение</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code><a href="/en-US/docs/Web/HTML/Element/input/url">&lt;input type="URL"&gt;</a></code></td>
   <td>Значение должно быть <a href="/en-US/docs/Learn/Common_questions/What_is_a_URL">URL-адресом</a>, как указано в <a href="https://url.spec.whatwg.org/">URL Living Standard</a>.</td>
   <td>Нарушение ограничения <strong><a href="/en-US/docs/Web/API/ValidityState/typeMismatch">TypeMismatch</a></strong></td>
  </tr>
  <tr>
   <td><code><a href="/en-US/docs/Web/HTML/Element/input/email">&lt;input type="email"&gt;</a></code></td>
   <td>Значение должно быть синтаксически правильным email-адресом, который обычно имеет формат <code><em>username</em>@<em>hostname</em>.<em>tld</em></code>.</td>
   <td>Нарушение ограничения <strong><a href="/en-US/docs/Web/API/ValidityState/typeMismatch">TypeMismatch</a></strong></td>
  </tr>
 </tbody>
</table>

<p>Для обоих этих типов input, если установлен атрибут {{ htmlattrxref("multiple", "input") }} допускается ввод нескольких разделённых запятыми значений. Если какое-то из значений не удовлетворяет условию, описанному выше, срабатывает нарушение ограничения <strong>Type mismatch</strong>.</p>

<p>Обратите внимание, что большинство типов input не имеют внутренних ограничений, так как некоторые из них недоступны для валидации ограничений или имеют алгоритм, по умолчанию преобразующий неправильные значения в правильные.</p>

<h3 id="Validation-related_attributes">Атрибуты валидации</h3>

<p>В дополнение к атрибуту <code>type</code>, описанному выше, для описания основных ограничений используются следующие атрибуты:</p>

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
   <td><code><a href="/ru/docs/Web/HTML/Attributes/pattern">pattern</a></code></td>
   <td><code>text</code>, <code>search</code>, <code>url</code>, <code>tel</code>, <code>email</code>, <code>password</code></td>
   <td><a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions">Регулярное выражение JavaScript</a> (без <a href="http://www.ecma-international.org/publications/standards/Ecma-262.htm">ECMAScript 5</a> флагов <code>global</code>, <code>ignoreCase</code>, and <code>multiline</code></td>
   <td>Значение должно соответствовать шаблону.</td>
   <td><code>Нарушение ограничения <strong><a href="/en-US/docs/Web/API/ValidityState/patternMismatch">patternMismatch</a></strong></code></td>
  </tr>
  <tr>
   <td rowspan="3"><code><a href="/en-US/docs/Web/HTML/Attributes/min">min</a></code></td>
   <td><code>range</code>, <code>number</code></td>
   <td>Валидное число</td>
   <td rowspan="3">Значение в поле должно быть больше или равно значению атрибута</td>
   <td rowspan="3">Нарушение ограничения <strong><code><a href="/en-US/docs/Web/API/ValidityState/rangeUnderflow">rangeUnderflow</a></code></strong></td>
  </tr>
  <tr>
   <td><code>date</code>, <code>month</code>, <code>week</code></td>
   <td>Валидная дата</td>
  </tr>
  <tr>
   <td><code>datetime</code>, <code>datetime-local</code>, <code>time</code></td>
   <td>Валидная дата и время</td>
  </tr>
  <tr>
   <td rowspan="3"><code><a href="/en-US/docs/Web/HTML/Attributes/max">max</a></code></td>
   <td><code>range</code>, <code>number</code></td>
   <td>Валидное число</td>
   <td rowspan="3">Значение в поле должно быть меньше или равно значению атрибута</td>
   <td rowspan="3">Нарушение ограничения <strong><code><a href="/en-US/docs/Web/API/ValidityState/rangeOverflow">rangeOverflow</a></code></strong></td>
  </tr>
  <tr>
   <td><code>date</code>, <code>month</code>, <code>week</code></td>
   <td>Валидная дата</td>
  </tr>
  <tr>
   <td><code>datetime</code>, <code>datetime-local</code>, <code>time</code></td>
   <td>Валидная дата и время</td>
  </tr>
  <tr>
   <td><code><a href="/en-US/docs/Web/HTML/Attributes/required">required</a></code></td>
   <td><code>text</code>, <code>search</code>, <code>url</code>, <code>tel</code>, <code>email</code>, <code>password</code>, <code>date</code>, <code>datetime</code>, <code>datetime-local</code>, <code>month</code>, <code>week</code>, <code>time</code>, <code>number</code>, <code>checkbox</code>, <code>radio</code>, <code>file</code>; а также элементы {{ HTMLElement("select") }} и {{ HTMLElement("textarea") }}</td>
   <td><em>Нет</em>, так как это булев атрибут: его наличие означает <em>true</em>, а отсутствие — <em>false</em></td>
   <td>В поле обязательно должно быть значение (если установлен атрибут)</td>
   <td><strong><code><a href="/en-US/docs/Web/API/ValidityState/valueMissing">valueMissing</a></code></strong> constraint violation</td>
  </tr>
  <tr>
   <td rowspan="5"><code><a href="/en-US/docs/Web/HTML/Attributes/step">step</a></code></td>
   <td><code>date</code></td>
   <td>Целое число дней</td>
   <td rowspan="5">Если для шага не задан литерал <code>any</code>, значением должно быть <strong>min</strong> + целое число, кратное шагу</td>
   <td rowspan="5">Нарушение ограничения <strong><code><a href="/en-US/docs/Web/API/ValidityState/stepMismatch">stepMismatch</a></code></strong></td>
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
   <td><code>datetime</code>, <code>datetime-local</code>, <code>time</code></td>
   <td>Целое число секунд</td>
  </tr>
  <tr>
   <td><code>range</code>, <code>number</code></td>
   <td>Целое число</td>
  </tr>
  <tr>
   <td><code><a href="/en-US/docs/Web/HTML/Attributes/minlength">minlength</a></code></td>
   <td><code>text</code>, <code>search</code>, <code>url</code>, <code>tel</code>, <code>email</code>, <code>password</code>; а также элемент {{ HTMLElement("textarea") }}/td>
   <td>Целое число</td>
   <td>Если атрибут не пустой, количество символов (точек кода) содержимого поля не должно быть меньше значения, указанного в атрибуте. Все символы новой строки нормализованы до одного символа (в отличие от CRLF-пар) для {{ HTMLElement("textarea") }}.</td>
   <td>Нарушение ограничения <strong><code><a href="/en-US/docs/Web/API/ValidityState/tooShort">tooShort</a></code></strong></td>
  </tr>
  <tr>
   <td><code><a href="/en-US/docs/Web/HTML/Attributes/maxlength">maxlength</a></code></td>
   <td><code>text</code>, <code>search</code>, <code>url</code>, <code>tel</code>, <code>email</code>, <code>password</code>; а также элемент {{ HTMLElement("textarea") }}</td>
   <td>Целое число</td>
   <td>Количество символов (точек кода) содержимого поля не должно превышать значение, указанное в атрибуте</td>
   <td>Нарушение ограничения <strong><code><a href="/en-US/docs/Web/API/ValidityState/tooLong">tooLong</a></code></strong></td>
  </tr>
 </tbody>
</table>

<h2 id="Constraint_validation_process">Процесс валидации ограничений</h2>

<p>Валидация ограничений выполняется с помощью Constraint Validation API либо на отдельном элементе формы, либо на уровне формы, на самом элементе {{ HTMLElement("form") }}. Способы валидации:</p>

<ul>
 <li>Вызов метода <code>checkValidity()</code> или <code>reportValidity()</code> связанного с формой DOM-интерфейса, (<code><a href="/ru/docs/Web/API/HTMLInputElement">HTMLInputElement</a></code>, <code><a href="/ru/docs/Web/API/HTMLSelectElement">HTMLSelectElement</a></code>, <code><a href="/ru/docs/Web/API/HTMLButtonElement">HTMLButtonElement</a></code>, <code><a href="/en-US/docs/Web/API/HTMLOutputElement">HTMLOutputElement</a></code> или <code><a href="/en-US/docs/Web/API/HTMLTextAreaElement">HTMLTextAreaElement</a></code>), который оценивает ограничения только на данном элементе, позволяя скрипту получить эту информацию. Метод <code>checkValidity()</code> возвращает логическое значение, указывающее, соотвествует ли значение элемента его ограничениям. (Обычно это делает браузер при определении того, какой CSS-псевдоклассов применяется: {{ Cssxref(":valid") }} или {{ Cssxref(":invalid") }}.) Напротив, метод <code>reportValidity()</code> сообщает пользователю о любых нарушениях ограничений.</li>
 <li>Вызов метода <code>checkValidity()</code> или <code>reportValidity()</code> интерфейса <code><a href="/ru/docs/Web/API/HTMLFormElement">HTMLFormElement</a></code>.</li>
 <li>Отправка самой формы.</li>
</ul>

<p>Вызов метода <code>checkValidity()</code> называется <em>статической</em> валидацией ограничений, а вызов метода <code>reportValidity()</code> или отправка формы называется <em>интерактивной</em> валидацией ограничений.</p>

<div class="note"><strong>Примечание: </strong>

<ul>
 <li>Если элементу {{ HTMLElement("form") }} задан атрибут {{ htmlattrxref("novalidate", "form") }}, интерактивная валидация ограничений не произойдёт.</li>
 <li>Вызов метода <code>submit()</code> интерфейса <code><a href="/ru/docs/Web/API/HTMLFormElement">HTMLFormElement</a></code> не запускает валидацию ограничений. Другими словами, этот метод отправляет данные формы на сервер, даже если ограничения нарушены. Вместо него вызовите метод <code>click()</code> кнопки отправки формы.</li>
</ul>
</div>

<h2 id="Complex_constraints_using_the_Constraint_Validation_API">Сложные ограничения с помощью Constraint Validation API</h2>

<p>С помощью JavaScript и Constraint Validation API можно реализовать более сложные ограничения, например, ограничения, касающиеся сразу нескольких полей или ограничения, включающие сложные вычисления.</p>

<p>По сути, идея заключается в том, чтобы при наступлении определённого события поля формы (например, <strong>onchange</strong>) запускать JavaScript, чтобы определить, нарушено ограничение, и затем с помощью метода <code><em>field</em>.setCustomValidity()</code>, задать результат валидации: пустая строка означает, что ограничение соблюдается, а любая другая строка означает, что есть ошибка и эта строка является сообщением об ошибке, которое нужно показать пользователю.</p>

<h3 id="Constraint_combining_several_fields_Postal_code_validation">Ограничение, объединяющее несколько полей: Валидация почтового индекса</h3>

<p>Формат почтового индекса в разных странах отличается. Мало того, что в большинстве стран может быть дополнительный префикс с кодом страны (например, <code>D — </code> в Германии, <code>F — </code> во Франции или Швейцарии), в некоторых странах, почтовые индексы содержат фиксированное количеством цифр; другие, например, Великобритания, имеют ещё более сложную структуру, допускающую в определённых местах ещё и наличие букв.</p>

<div class="note">
<p><strong>Примечание:</strong> Далее представлена не полная библиотека валидации почтового индекса, а скорее демонстрация ключевых концепций.</p>
</div>

<p>В качестве примера мы добавим скрипт, выполняющий валидацию органичений простой формы:</p>

<pre class="brush: html">&lt;form&gt;
    &lt;label for="ZIP"&gt;ZIP : &lt;/label&gt;
    &lt;input type="text" id="ZIP"&gt;
    &lt;label for="Country"&gt;Country : &lt;/label&gt;
    &lt;select id="Country"&gt;
      &lt;option value="ch"&gt;Switzerland&lt;/option&gt;
      &lt;option value="fr"&gt;France&lt;/option&gt;
      &lt;option value="de"&gt;Germany&lt;/option&gt;
      &lt;option value="nl"&gt;The Netherlands&lt;/option&gt;
    &lt;/select&gt;
    &lt;input type="submit" value="Validate"&gt;
&lt;/form&gt;</pre>

<p>Получим следующую форму:</p>

<p>{{EmbedLiveSample("Constraint_combining_several_fields_Postal_code_validation")}}</p>

<p>Сначала запишем функцию, проверяющую само ограничение:</p>

<pre class="brush: js">function checkZIP() {
  // Для каждой страны определяем шаблон, которому должен следовать почтовый индекс
  var constraints = {
    ch : [ '^(CH-)?\\d{4}$', "Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950" ],
    fr : [ '^(F-)?\\d{5}$' , "France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012" ],
    de : [ '^(D-)?\\d{5}$' , "Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345" ],
    nl : [ '^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$',
                    "Nederland ZIPs must have exactly 4 digits, followed by 2 letters except SA, SD and SS" ]
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
  }
  else {
    // Индекс не соответствует ограничению , мы используем ConstraintAPI, чтобы
    // показать сообщение, описывающее формат, требуемый для данной страны
    ZIPField.setCustomValidity(constraints[country][1]);
  }
}
</pre>

<p>Затем мы связываем его с событием <strong>onchange</strong> для {{ HTMLElement("select") }} и с событием <strong>oninput</strong> для {{ HTMLElement("input") }}:</p>

<pre class="brush: js">window.onload = function () {
    document.getElementById("Country").onchange = checkZIP;
    document.getElementById("ZIP").oninput = checkZIP;
}</pre>

<p>Вы можете посмотреть <a href="/@api/deki/files/4744/=constraint.html">живой пример</a> валидации индекса.</p>

<h3 id="Limiting_the_size_of_a_file_before_its_upload">Ограничение размера загружаемого файла</h3>

<p>Ещё одним распространённым ограничением является лимит размера загружаемых файлов. Данная проверка на стороне клиента перед отправкой на сервер требует сочетания Constraint Validation API и особенно метода <code>field.setCustomValidity()</code> с другим JavaScript API, в данном случае — File API.</p>

<p>Вот часть HTML:</p>

<pre class="brush: html">&lt;label for="FS"&gt;Select a file smaller than 75 kB : &lt;/label&gt;
&lt;input type="file" id="FS"&gt;</pre>

<p>Она отображает:</p>

<p>{{EmbedLiveSample("Limiting_the_size_of_a_file_before_its_upload")}}</p>

<p>JavaScript считывает выбранный файл, с помощью метода <code>File.size()</code> получает его размер, сравнивает его с лимитом и вызывает Constraint Validation API, чтобы сообщить браузеру о нарушении:</p>

<pre class="brush: js">function checkFileSize() {
  var FS = document.getElementById("FS");
  var files = FS.files;

  // Если выбран хотя бы один файл
  if (files.length &gt; 0) {
     if (files[0].size &gt; 75 * 1024) { // Проверить ограничение
       FS.setCustomValidity("Размер файла не должен превышать 75 kB");
       return;
     }
  }
  // Если нарушения ограничений нет
  FS.setCustomValidity("");
}</pre>

<p>Наконец мы связываем метод с нужным событием:</p>

<pre class="brush: js">window.onload = function () {
  document.getElementById("FS").onchange = checkFileSize;
}</pre>

<p><a href="/@api/deki/files/4745/=fileconstraint.html">Живой пример</a> валидации ограничения размера файла.</p>

<h2 id="Visual_styling_of_constraint_validation">Визуальное оформление нарушения ограничений</h2>

<p>Помимо установки ограничений, веб-разработчики хотят управлять тем, какие сообщения показываются пользователям и как они оформлены.</p>

<h3 id="Controlling_the_look_of_elements">Управление внешним видом элементов</h3>

<p>Изменять внешний вид элементов можно с помощью CSS-псевдоклассов.</p>

<h4 id="required_and_optional_CSS_pseudo-classes">CSS-псевдоклассы :required и :optional</h4>

<p><a href="/ru/docs/Web/CSS/Pseudo-classes">Псевдоклассы</a> {{cssxref(':required')}} и {{cssxref(':optional')}} позволяют писать селекторы, соответствующие элементам формы, которые имеют или не имеют атрибут {{ htmlattrxref("required") }}</p>

<h4 id="placeholder-shown_CSS_pseudo-class">CSS-псевдокласс :placeholder-shown</h4>

<p>Смотрите {{cssxref(':placeholder-shown')}}</p>

<h4 id="valid_invalid_CSS_pseudo-classes">CSS-псевдоклассы :valid и :invalid</h4>

<p><a href="/ru/docs/Web/CSS/Pseudo-classes">Псевдоклассы</a> {{cssxref(':valid')}} и {{cssxref(':invalid')}} используются для представления элементов &lt;input&gt;, содержимое которых является валидным или не валидным соответственно. Эти классы позволяют пользователю оформлять валидные или не валидные элементы формы, чтобы облегчить определение элементов, которые имеют корректный или некорректный формат.</p>

<h3 id="Controlling_the_text_of_constraint_violation">Управление текстом нарушения ограничений</h3>

<p>Следующее может помочь с управлением текстом нарушения ограничений:</p>

<ul>
 <li>Метод <a href="/en-US/docs/Web/API/Constraint_validation#element.setcustomvalidity(message)">element.setCustomValidity(message)</a> для элементов:

  <ul>
   <li>{{HTMLElement("fieldset")}}. Примечание: Добавление кастомного сообщения валидации на элемент fieldset не предотвращает отправку формы в большинстве браузеров.</li>
   <li>{{HTMLElement("input")}}</li>
   <li>{{HTMLElement("output")}}</li>
   <li>{{HTMLElement("select")}}</li>
   <li>Кнопка отправки формы в виде элемента {{HTMLElement("button")}} или <code>input</code> <code>submit</code> с указанным типом {{HTMLElement("input/submit", "submit")}}. Другие типы кнопок не участвуют в валидации ограничений.</li>
   <li>{{HTMLElement("textarea")}}</li>
  </ul>
 </li>
 <li>Интерфейс <a href="/en-US/docs/Web/API/ValidityState"><code>ValidityState</code></a> описывает объект, возвращаемый свойством <a href="/en-US/docs/Web/API/Constraint_validation#validity">validity</a> перечисленных выше типов элементов. Он представляет разные способы определения не валидности значения. Вместе они помогают объяснить, почему значение элемента не проходит валидацию, если оно не валидно.</li>
</ul>
