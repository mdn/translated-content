---
title: Валидация форм на стороне клиента
slug: Learn/Forms/Form_validation
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/UI_pseudo-classes", "Learn/Forms/Sending_and_retrieving_form_data", "Learn/HTML/Forms")}}

Перед отправкой данных на сервер важно убедиться, что все обязательные поля формы заполнены данными в корректном формате. Это называется **валидацией на стороне клиента** и помогает убедиться, что данные, введённые в каждый элемент формы, соответствуют требованиям. Данная статья проведёт вас через основные концепци и примеры валидации на стороне клиента.

| Начальные требования: | Владение компьютером, достаточное понимание [HTML](/ru/docs/Learn/HTML), [CSS](/ru/docs/Learn/CSS), и [JavaScript](/ru/docs/Learn/JavaScript). |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Цель:                 | Понять, что такое валидация на стороне клиента, почему это важно и как применять различные техники для её реализации.                          |

Валидация на стороне клиента — это первичная проверка введённых данных, которая существенно улучшает удобство взаимодействия с интерфейсом; обнаружение некорректных данных на стороне клиента позволяет пользователю немедленно их исправить. Если же проверка происходит только на сервере, процесс заполнения может быть более трудоёмким, так как требует повторения одних и тех же действий отправки данных на сервер для получения обратного ответа с сообщением о том, что нужно исправить.

Однако, _не следует рассматривать_ валидацию на стороне клиента как достаточную меру безопасности! Любые данные, отправляемые через форму, необходимо _дополнительно_ проверять на безопасность и _на стороне сервера_, поскольку валидацию на стороне клиента достаточно просто обойти и она может не остановить злоумышленников. Чтобы лучше понимать потенциальные угрозы, рекомендуем ознакомиться с разделом [Безопасность вебсайтов](/ru/docs/Learn/Server-side/First_steps/Website_security); валидация на стороне сервера выходит за рамки этого модуля, но о ней следует помнить.

## Что такое валидация формы?

Зайдите на любой популярный сайт, имеющий форму регистрации. Вы заметите, что при вводе данных в неправильном формате, пользователя сразу уведомляют о наличии проблемы. Вы получите примерно такое сообщение:

- "Обязательное поле" (Вы не можете оставить поле пустым).
- "Пожалуйста, введите номер телефона в формате xxx-xxxx" (Чтобы данные считались корректными, их необходимо указать в определённом формате).
- "Пожалуйста, введите корректный email-адрес" (вы ввели данные в неправильном формате).
- "Длина пароля должна быть от 8 до 30 символов и включать одну заглавную букву, один символ, и одну цифру." (Требования к формату данных достаточно конкретные).

Это называется **валидацией формы**. По мере ввода, браузер и/или сервер проверяют данные, чтобы определить, соответствуют ли они требуемому формату. Валидация, выполняемая в браузере, называется **валидацией на стороне клиента**, а выполняемая на сервере — **валидацией на стороне сервера**. В этом разделе мы сосредоточимся на валидации, выполняемой на стороне клиента.

Если формат корректен, приложение позволяет отправить данные на сервер и (обычно) сохранить в базу данных; в противном случае выводится сообщение с описанием того, что нужно исправить, позволяя ввести данные снова.

Мы хотим максимально упростить заполнение веб-форм. Тогда почему мы настаиваем валидации данных? На это есть три основные причины:

- **Мы хотим получать правильные данные в правильном формате.** Наши приложения не будут работать должным образом, если данные от пользователей хранятся в неправильном формате, некорректны сами по себе или вовсе пропущены.
- **Мы хотим защитить данные пользователей**. Принуждение пользователей вводить надёжные пароли облегчает защиту их аккаунтов.
- **Мы хотим защитить себя**. Существует множество способов, позволяющих злоумышленникам с помощью незащищённых форм навредить приложению (смотрите [Безопасность вебсайтов](/ru/docs/Learn/Server-side/First_steps/Website_security)).

  > **Предупреждение:** Никогда не доверяйте данным, передаваемым на сервер клиентской программой. Даже если ваша форма правильно валидируется и не допустит введение потенциально вредоносных данных на стороне клиента, злоумышленники по-прежнему могут изменить сетевой запрос.

## Типы валидации на стороне клиента

Существует два типа валидации на стороне клиента, с которыми вы столкнётесь в Интернете:

- **Встроенная валидация форм** использует функционал валидации HTML5, который мы неоднократно обсуждали в этом модуле. HTML5-валидация обычно не требует большого количества JavaScript-кода и демонстрирует лучшую производительность, но не настолько настраиваема, как валидация с помощью JavaScript.
- **JavaScript-валидация** кодируется с помощью JavaScript. Она полностью настраиваема, но требует программирования всей логики (или использования библиотеки).

## Использование встроенной валидации форм

Одной из самых важных функций [элементов форм HTML5](/ru/docs/Learn/Forms/HTML5_input_types) является способность валидировать бóльшую часть пользовательских данных без использования JavaScript. Это выполняется с помощью атрибутов валидации у элементов формы. Многие из них мы уже рассмотрели в этом курсе:

- [`required`](/ru/docs/Web/HTML/Attributes/required): Определяет, что для отправки формы данное поле предварительно должно быть заполнено.
- [`minlength`](/ru/docs/Web/HTML/Attributes/minlength) и [`maxlength`](/ru/docs/Web/HTML/Attributes/maxlength): Задаёт минимальную и максимальную длину текстовых данных (строк)
- [`min`](/ru/docs/Web/HTML/Attributes/min) и [`max`](/ru/docs/Web/HTML/Attributes/max): Задаёт минимальное и максимальное значение для поля, расчитанного на числовой тип данных
- `type`: Определяет тип данных, на который рассчитано поле: число, email-адрес или какой-то другой предустановленный тип
- [`pattern`](/ru/docs/Web/HTML/Attributes/pattern): С помощью [регулярного выражения](/ru/docs/Web/JavaScript/Guide/Regular_Expressions), определяет шаблон, которому должны соответствовать вводимые данные.

Если данные, введённые в поле формы, соответствуют правилам перечисленных выше атрибутов, они считаются валидными, если нет — не валидными

Когда элемент валиден, справедливы следующие утверждения:

- Элемент соответствует CSS-псевдоклассу {{cssxref(":valid")}}, позволяющему стилизовать только валидные элементы.
- Если пользователь пытается отправить данные, браузер отправит форму при условии, что ничто другое (например, JavaScript) не помешает ему это сделать

Когда элемент не валиден, справедливы следующие утверждения:

- Элемент соответствует CSS-псевдоклассу {{cssxref(":invalid")}} или, в зависимости от ошибки, другим псевдоклассам (например, {{cssxref(":out-of-range")}}), которые позволяют применять определённые стили к элементам, не являющимся валидными.
- Если пользователь пытается отправить данные, браузер заблокирует форму и выведет сообщение об ошибке.

> **Примечание:** Существует ошибки, которые не позволяют отправлять форму, в частности {{domxref('validityState.badInput', 'badInput')}}, {{domxref('validityState.patternMismatch','patternMismatch')}}, {{domxref('validityState.rangeOverflow','rangeOverflow')}} или {{domxref('validityState.rangeUnderflow','rangeUnderflow')}}, {{domxref('validityState.stepMismatch','stepMismatch')}}, {{domxref('validityState.tooLong','tooLong')}} или {{domxref('validityState.tooShort','tooShort')}}, {{domxref('validityState.typeMismatch','typeMismatch')}}, {{domxref('validityState.valueMissing','valueMissing')}}, или {{domxref('validityState.customError','customError')}}.

## Примеры встроенной валидации форм

В этом разделе мы протестируем некоторые из атрибутов, которые обсуждали выше.

### Простой начальный файл

Давайте начнём с простого примера: поле, позволяющее указать своё предпочтение — банан или вишня. Этот пример включает обычное текстовое поле {{HTMLElement("input")}}, связанный с ним элемент {{htmlelement("label")}} и кнопку отправки формы {{htmlelement("button")}}. Исходный код можно найти на GitHub по адресу [fruit-start.html](https://github.com/mdn/learning-area/blob/master/html/forms/form-validation/fruit-start.html), а ниже приведён рабочий пример.

```html
<form>
  <label for="choose">Would you prefer a banana or cherry?</label>
  <input id="choose" name="i_like" />
  <button>Submit</button>
</form>
```

```css
input:invalid {
  border: 2px dashed red;
}

input:valid {
  border: 2px solid black;
}
```

{{EmbedLiveSample("Simple_start_file", "100%", 80)}}

Для начала скопируйте файл `fruit-start.html` в новую папку на вашем жёстком диске.

### Атрибут required

Самым простым в HTML5-валидации является атрибут [`required`](/ru/docs/Web/HTML/Attributes/required). Добавьте его к элементу, чтобы сделать заполнение обязательным. Элемент с данным атрибутом соответствует CSS-псевдоклассу {{cssxref(':required')}}, а если поле ввода пустое, вместо отправки формы отобразится сообщение об ошибке. Пока поле пустое, оно также будет соответствовать CSS-псевдоклассу {{cssxref(':invalid')}}.

Добавьте к полю атрибут `required`, как показано ниже.

```html
<form>
  <label for="choose">Would you prefer a banana or cherry? (required)</label>
  <input id="choose" name="i_like" required />
  <button>Submit</button>
</form>
```

Обратите внимание на CSS, который включён в файл примера:

```css
input:invalid {
  border: 2px dashed red;
}

input:invalid:required {
  background-image: linear-gradient(to right, pink, lightgreen);
}

input:valid {
  border: 2px solid black;
}
```

Данный CSS задаёт полю красную пунктирную рамку, когда оно не валидно, а когда валидно — сплошную чёрную. Мы также добавили фоновый градиент для обязательных не валидных полей. Проверьте новое поведение в примере ниже:

{{EmbedLiveSample("The_required_attribute", "100%", 80)}}

> **Примечание:** Рабочий пример можно найти на GitHub по адресу [fruit-validation.html](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-required.html) (отдельно можно найти [исходный код](https://github.com/mdn/learning-area/blob/master/html/forms/form-validation/fruit-required.html).)

Попробуйте отправить форму без введения значения. Обратите внимание, что не валидное поле получает фокус, появляется сообщение об ошибке ("Заполните это поле") и блокируется отправка формы.

Наличие атрибута `required` у любого элемента, который его поддерживает, означает, что элемент соответствует CSS-псевдоклассу {{cssxref(':required')}}, независимо от того, имеет он значение или нет. Если элемент {{HTMLElement("input")}} не содержит значение, он будет соответствовать псевдоклассу {{cssxref(':invalid')}}.

> **Примечание:** Для повышения удобства взаимодействия указывайте пользователям, какие поля являются обязательными. К тому же, этого требует руководство по обеспечению [доступности](/ru/docs/Learn/Accessibility) WCAG. Требуйте обязательного ввода только тех данных, которые вам действительно нужны: например, так ли важно знать пол или должность пользователя?

### Валидация с помощью регулярного выражения

Ещё одной полезной функцией валидации является атрибут [`pattern`](/ru/docs/Web/HTML/Attributes/pattern), который в виде значения принимает [Регулярное выражение](/ru/docs/Web/JavaScript/Guide/Regular_Expressions). Регулярное выражение (regex) — это шаблон, который может быть использован для сопоставления набора символов в текстовой строке, поэтому они идеально подходят для валидации формы и используются для множества других целей в JavaScript.

Регулярные выражения достаточно сложны, и мы не будем подробно рассматривать эту тему в данной статье. Ниже приведены несколько примеров, чтобы дать вам представление о том, как они работают.

- `a` — Соответствует одному символу `a` (не `b`, не `aa`, и так далее).
- `abc` — Соответствует символу `a`, за которой следует `b`, за которой следует `c`.
- `ab?c` — Соответствует символу `a`, за которым опционально может следовать `b`, за которым следует `c`. ( `ac` или `abc`)
- `ab*c` — Соответствует символу `a`, за которым опционально может следовать любое количество символов `b`, за которыми следует `c`. ( `ac` , `abc`, `abbbbbc`, и так далее).
- `a|b` — Соответствует символу `a` или `b`.
- `abc|xyz` — Соответствует в точности `abc` или в точности `xyz` (но не `abcxyz` или `a` или `y`, и так далее).

Есть еще много возможностей, которые мы не упомянули. Полный список со множеством примеров можно найти в документации по [Регулярным выражениям](/ru/docs/Web/JavaScript/Guide/Regular_Expressions)

Давайте рассмотрим пример. Добавьте в атрибут [`pattern`](/ru/docs/Web/HTML/Attributes/pattern) следующий шаблон:

```html
<form>
  <label for="choose">Would you prefer a banana or a cherry?</label>
  <input id="choose" name="i_like" required pattern="[Bb]anana|[Cc]herry" />
  <button>Submit</button>
</form>
```

```css hidden
input:invalid {
  border: 2px dashed red;
}

input:valid {
  border: 2px solid black;
}
```

Это даёт нам следующее обновление — опробуйте его:

{{EmbedLiveSample("Validating_against_a_regular_expression", "100%", 80)}}

> **Примечание:** Рабочий пример можно найти на GitHub по адресу [fruit-pattern.html](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-pattern.html) ([исходный код](https://github.com/mdn/learning-area/blob/master/html/forms/form-validation/fruit-pattern.html).)

В этом примере элемент {{HTMLElement("input")}} принимает одно из четырёх возможных значений: строку "banana", "Banana", "cherry", или "Cherry". Регулярные выражения чувствительны к регистру, но с помощью шаблона "Aa", вложенного в квадратные скобки, мы сделали поддержку написания слова как с большой, так и с маленькой буквы.

Подставьте в атрибут [`pattern`](/ru/docs/Web/HTML/Attributes/pattern) приведённые выше примеры регулярных выражений, и посмотрите, как это повлияет на валидацию введённого в поле значения. Попробуйте написать свои шаблоны проверки и посмотрите, что получится. По возможности, делайте их связанными с фруктами, чтобы примеры имели смысл.

Если не пустое значение элемента {{HTMLElement("input")}} не соответствует шаблону регулярного выражения, `input` будет соответствовать псевдоклассу {{cssxref(':invalid')}}.

> **Примечание:** Некоторым типам элементов {{HTMLElement("input")}} для валидации с помощью регулярного выражения не требуется атрибут [`pattern`](/ru/docs/Web/HTML/Attributes/pattern). Например, поле с типом `email` валидирует значение по шаблону одного email-адреса или, если присутствует атрибут [`multiple`](/ru/docs/Web/HTML/Attributes/multiple), шаблону списка email-адресов, разделённых запятыми.

> **Примечание:** Элемент {{HTMLElement("textarea")}} не поддерживает атрибут [`pattern`](/ru/docs/Web/HTML/Attributes/pattern).

### Ограничение длины вводимых значений

Можно ограничить максимально допустимое количество символов для текстовых полей {{HTMLElement("input")}} или {{HTMLElement("textarea")}} используя атрибуты [`minlength`](/ru/docs/Web/HTML/Attributes/minlength) и [`maxlength`](/ru/docs/Web/HTML/Attributes/maxlength). Поле будет не валидным, если количество символов его содержимого будет меньше [`minlength`](/ru/docs/Web/HTML/Attributes/minlength) или больше [`maxlength`](/ru/docs/Web/HTML/Attributes/maxlength).

Зачастую браузеры не позволяют пользователям вводить в текстовое поле значение, длина которого превышает максимально допустимую. Можно существенно повысить удобство использования, если помимо ограничения в атрибуте `maxlength` добавить доступный индикатор, отображающий текущее и максимально допустимое количество символов, что даст пользователю возможность уместить содержимое в заданные рамки. Хорошим примером является окно написания твита в Twitter. Для реализации такого функционала можно использовать JavaScript, включая [решения, использующие `maxlength`](https://github.com/mimo84/bootstrap-maxlength).

### Ограничение допустимых значений

В полях, предназначенных для ввода чисел (например, [`<input type="number">`](/ru/docs/Web/HTML/Element/input/number)), диапазон допустимых значений можно определить с помощью атрибутов [`min`](/ru/docs/Web/HTML/Attributes/min) и [`max`](/ru/docs/Web/HTML/Attributes/max). Если поле содержит значение за пределами данного диапазона, оно будет не валидным.

Давайте рассмотрим другой пример. Создайте новую копию файла [fruit-start.html](https://github.com/mdn/learning-area/blob/master/html/forms/form-validation/fruit-start.html).

Содержимое элемента `<body>` замените на:

```html
<form>
  <div>
    <label for="choose">Would you prefer a banana or a cherry?</label>
    <input
      type="text"
      id="choose"
      name="i_like"
      required
      minlength="6"
      maxlength="6" />
  </div>
  <div>
    <label for="number">How many would you like?</label>
    <input type="number" id="number" name="amount" value="1" min="1" max="10" />
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

- Здесь мы в поле с типом `text` атрибутам `minlength` и `maxlength`, задали одинаковое значение 6, что соответствует количеству символов в словах banana и cherry.
- В поле с типом `number` атрибуту `min` мы задали значение 1, а атрибуту `max` значение 10. При вводе чисел за пределами данного диапазона, поле будет становиться не валидным; с помощью стрелок увеличения/уменьшения пользователи не смогут выйти за границы диапазона. Текущее поле не является обязательным для заполнения, поэтому даже после очистки будет оставаться валидным.

```css hidden
input:invalid {
  border: 2px dashed red;
}

input:valid {
  border: 2px solid black;
}

div {
  margin-bottom: 10px;
}
```

Демонстрационный пример:

{{EmbedLiveSample("Constraining_the_values_of_your_entries", "100%", 100)}}

> **Примечание:** Рабочий пример можно найти на GitHub по адресу [fruit-length.html](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-length.html) ([исходный код](https://github.com/mdn/learning-area/blob/master/html/forms/form-validation/fruit-length.html).)

> **Примечание:** `<input type="number">` (и другие типы, такие как `range` и `date`) могут также принимать атрибут [`step`](/ru/docs/Web/HTML/Attributes/step), который задаёт шаг увеличения или уменьшения значения при использовании кнопок вверх и вниз. В примере выше мы явно не указывали атрибут `step`, поэтому он получает значение по умолчанию, равное `1`. Это значит, что дробные числа, такие как 3.2, будут не валидными.

### Полный пример

Ниже представлен полный пример, демонстрирующий использование встроенного функционала валидации. Сначала немного HTML:

```html
<form>
  <p>
    <fieldset>
      <legend>Do you have a driver's license?<abbr title="This field is mandatory" aria-label="required">*</abbr></legend>
      <!-- Так как в группе радио-кнопок, имеющих одинаковое имя, выбранной может быть
          только одна, то и атрибут "required" достаточно задать хотя бы одной кнопке,
          чтобы сделать всю группу обязательной для заполнения -->
      <input type="radio" required name="driver" id="r1" value="yes"><label for="r1">Yes</label>
      <input type="radio" required name="driver" id="r2" value="no"><label for="r2">No</label>
    </fieldset>
  </p>
  <p>
    <label for="n1">How old are you?</label>
    <!-- Атрибут "pattern" может выступать фолбэком для браузеров, которые
        не поддерживают поля ввода c числовым типом данных. Те браузеры,
        которые такие поля поддерживают, будут просто игнорировать его.
        Как раз, ниже атрибут "pattern" выполняет роль фолбека.
     -->
    <input type="number" min="12" max="120" step="1" id="n1" name="age"
           pattern="\d+">
  </p>
  <p>
    <label for="t1">What's your favorite fruit?<abbr title="This field is mandatory" aria-label="required">*</abbr></label>
    <input type="text" id="t1" name="fruit" list="l1" required
           pattern="[Bb]anana|[Cc]herry|[Aa]pple|[Ss]trawberry|[Ll]emon|[Oo]range">
    <datalist id="l1">
      <option>Banana</option>
      <option>Cherry</option>
      <option>Apple</option>
      <option>Strawberry</option>
      <option>Lemon</option>
      <option>Orange</option>
    </datalist>
  </p>
  <p>
    <label for="t2">What's your e-mail address?</label>
    <input type="email" id="t2" name="email">
  </p>
  <p>
    <label for="t3">Leave a short message</label>
    <textarea id="t3" name="msg" maxlength="140" rows="5"></textarea>
  </p>
  <p>
    <button>Submit</button>
  </p>
</form>
```

И немного CSS для стилизации HTML:

```css
form {
  font: 1em sans-serif;
  max-width: 320px;
}

p > label {
  display: block;
}

input[type="text"],
input[type="email"],
input[type="number"],
textarea,
fieldset {
  width: 100%;
  border: 1px solid #333;
  box-sizing: border-box;
}

input:invalid {
  box-shadow: 0 0 5px 1px red;
}

input:focus:invalid {
  box-shadow: none;
}
```

Получим следующее:

{{EmbedLiveSample("Full_example", "100%", 420)}}

В статье [Атрибуты валидации](/ru/docs/Web/Guide/HTML/HTML5/Constraint_validation#validation-related_attributes) можно найти полный список атрибутов, которые можно использовать для ограничения допустимых значений ввода и типов полей `input`, которые их поддерживают.

> **Примечание:** Рабочий пример можно найти на GitHub по адресу [full-example.html](https://mdn.github.io/learning-area/html/forms/form-validation/full-example.html) ([исходный код](https://github.com/mdn/learning-area/blob/master/html/forms/form-validation/full-example.html).)

## Валидация форм с помощью JavaScript

Если нужно управлять внешним видом встроенных сообщений об ошибке или работать с устаревшими браузерами, которые не поддерживают встроенную валидацию форм HTML, вам следует использовать JavaScript. В данном разделе мы рассмотрим различные способы делать это.

### Constraint Validation API

Большинство браузеров поддерживают [Constraint Validation API](/ru/docs/Web/API/Constraint_validation), который состоит из набора свойств и методов, доступных на DOM-интерфейсах следующих элементов форм:

- [`HTMLButtonElement`](/ru/docs/Web/API/HTMLButtonElement) (представляет элемент [`<button>`](/ru/docs/Web/HTML/Element/button))
- [`HTMLFieldSetElement`](/ru/docs/Web/API/HTMLFieldSetElement) (представляет элемент [`<fieldset>`](/ru/docs/Web/HTML/Element/fieldset))
- [`HTMLInputElement`](/ru/docs/Web/API/HTMLInputElement) (представляет элемент [`<input>`](/ru/docs/Web/HTML/Element/input))
- [`HTMLOutputElement`](/ru/docs/Web/API/HTMLOutputElement) (представляет элемент [`<output>`](/ru/docs/Web/HTML/Element/output))
- [`HTMLSelectElement`](/ru/docs/Web/API/HTMLSelectElement) (представляет элемент [`<select>`](/ru/docs/Web/HTML/Element/select))
- [`HTMLTextAreaElement`](/ru/docs/Web/API/HTMLTextAreaElement) (представляет элемент [`<textarea>`](/ru/docs/Web/HTML/Element/textarea))

Для перечисленных выше элементов Constraint Validation API делает доступными следующие свойства.

- `validationMessage`: Возвращает локализованное сообщение, описывающее ограничения валидации (если таковые имеются), которым не удовлетворяет определённый элемент. Если элемент не участвует в валидации (`willValidate` установлено в `false`) или значение элемента удовлетворяет установленным ограничениям (является валидным), будет возвращена пустая строка.
- `validity`: Возвращает объект `ValidityState`, который содержит несколько свойств, описывающих состояние валидности элемента. Подробное описание всех свойств доступности можно найти на странице справочника {{domxref("ValidityState")}}; ниже приведён список наиболее используемых:

  - {{domxref("ValidityState.patternMismatch", "patternMismatch")}}: Возвращает `true`, если значение не соответствует шаблону, указанному в атрибуте [`pattern`](/ru/docs/Web/HTML/Element/input#pattern), и `false` если соответствует. Если true, элемент соответствует CSS-псевдоклассу {{cssxref(":invalid")}}.
  - {{domxref("ValidityState.tooLong", "tooLong")}}: Возвращает `true`, если значение длиннее максимальной длины, указанной в атрибуте [`maxlength`](/ru/docs/Web/HTML/Element/input#maxlength), и `false` если оно короче или равно ей. Если true, элемент соответствует CSS-псевдоклассу {{cssxref(":invalid")}}.
  - {{domxref("ValidityState.tooShort", "tooShort")}}: Возвращает `true`, если значение короче минимальной длины, указанной в атрибуте [`minlength`](/ru/docs/Web/HTML/Element/input#minlength), и `false` если оно длинее или равно ей. Если true, элемент соответствует CSS-псевдоклассу {{cssxref(":invalid")}}.
  - {{domxref("ValidityState.rangeOverflow", "rangeOverflow")}}: Возвращает `true`, если значение больше указанного в атрибуте [`max`](/ru/docs/Web/HTML/Element/input#max) максимума, и `false` если меньше или равно ему. Если true, элемент соответствует CSS-псевдоклассам {{cssxref(":invalid")}} и {{cssxref(":out-of-range")}}
  - {{domxref("ValidityState.rangeUnderflow", "rangeUnderflow")}}: Возвращает `true`, если значение меньше указанного в атрибуте [`min`](/ru/docs/Web/HTML/Element/input#min), и `false` если больше или равно ему. Если true, элемент соответствует CSS-псевдоклассу {{cssxref(":invalid")}} и {{cssxref(":out-of-range")}}.
  - {{domxref("ValidityState.typeMismatch", "typeMismatch")}}: Возвращает `true`, если значение не соответствует требуемому синтаксису (когда для [`type`](/ru/docs/Web/HTML/Element/input#type) задано значение `email` или `url`), и `false` если синтаксис корректный. Если `true`, элемент соответствует CSS-псевдоклассу {{cssxref(":invalid")}}.
  - `valid`: Возвращает `true`, если элемент соответствует всем ограничениям валидации — следовательно, считается валидным, и `false` если не соответствует какому-то ограничению. Если true, элемент соответствует CSS-псевдоклассу {{cssxref(":valid")}}; иначе {{cssxref(":invalid")}}.
  - `valueMissing`: Возвращает `true`, если у элемента есть атрибут [`required`](/ru/docs/Web/HTML/Element/input#required), но не введено значенение, иначе возвращает `false`. Если true, элемент соответствует CSS-псевдоклассу {{cssxref(":invalid")}}.

- `willValidate`: Возвращает `true`, если элемент будет участвовать в валидации при отправке формы; иначе возвращает `false`.

Также для перечисленных выше элементов Constraint Validation API делает доступными следующие методы.

- `checkValidity()`: Возвращает `true`, если значение элемента проходит валидацию, иначе возвращает `false`. Если элемент не валиден, данный метод также запускает на нём событие [`invalid`](/ru/docs/Web/API/HTMLInputElement/invalid_event).
- `setCustomValidity(message)`: Позволяет добавить в элемент кастомное сообщение об ошибке; при этом элемент будет считаться не валидным и отобразится указанная ошибка. Это позволяет использовать JavaScript-код, чтобы представить ошибку валидации иначе, чем это предусмотрено стандартными средствами валидации HTML5. При сообщении об ошибке данное кастомное сообщение показывается пользователю.

#### Реализация кастомного сообщения об ошибке

Как вы видели в примерах HTML5-валидации выше, каждый раз, когда пользователь пытается отправить не валидную форму, браузер отображает сообщение об ошибке. Способ отображения сообщения зависит от браузера.

У этих автоматических сообщений есть два недостатка:

- Не существует стандартного способа их стилизации с помощью CSS.
- Они зависят от локали браузера, из-за чего страница может быть на одном языке, а сообщение об ошибке — на другом, как показано на следующем скриншоте браузера Firefox.

![Пример сообщения об ошибке на англоязычной странице в браузере Firefox с настроенным французским языком](error-firefox-win7.png)

Настройка таких сообщений об ошибках является одной из наиболее распространённых причин использования [Constraint Validation API](/ru/docs/Web/API/Constraint_validation). Давайте рассмотрим простой пример, как это делается.

Начнём с простого HTML (Не стесняйтесь поместить это в пустой HTML-файл. Вы можете взять за основу свежую копию [fruit-start.html](https://github.com/mdn/learning-area/blob/master/html/forms/form-validation/fruit-start.html), если хотите):

```html
<form>
  <label for="mail"
    >I would like you to provide me with an e-mail address:</label
  >
  <input type="email" id="mail" name="mail" />
  <button>Submit</button>
</form>
```

Добавьте на страницу следующий JavaScript:

```js
const email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an e-mail address!");
  } else {
    email.setCustomValidity("");
  }
});
```

Здесь мы сохраняем ссылку на поле email, а затем добавляем к нему обработчик события, который запускает код обработчика каждый раз, когда в поле меняется значение.

В коде обработчика мы проверяем, возвращает ли свойство поля email `validity.typeMismatch` значение `true`, что значит, что содержащееся значение не соответствует шаблону корректного email-адреса. Если возвращается `true`, мы вызываем метод {{domxref("HTMLInputElement.setCustomValidity()","setCustomValidity()")}} с кастомным сообщением. Это делает поле не валидным, поэтому попытка отправить форму приводит к ошибке и отображается кастомное сообщение об ошибке.

Если свойство `validity.typeMismatch` возвращает `false`, мы вызываем метод `setCustomValidity()` с пустой строкой. Это делает поле валидным, поэтому форма может быть успешно отправлена.

Попробовать пример можно ниже:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/custom-error-message.html", '100%', 80)}}

> **Примечание:**: Данный пример можно найти на GitHub по адресу [custom-error-message.html](https://mdn.github.io/learning-area/html/forms/form-validation/custom-error-message.html) (отдельно можно найти [исходный код](https://github.com/mdn/learning-area/blob/master/html/forms/form-validation/custom-error-message.html).)

#### Более подробный пример

Теперь, когда мы разобрали простой пример, давайте посмотрим, как можно использовать данный API для создания более сложной валидацию.

Во-первых, HTML. Опять же, не стесняйтесь писать его вместе с нами:

```html
<form novalidate>
  <p>
    <label for="mail">
      <span>Please enter an email address:</span>
      <input type="email" id="mail" name="mail" required minlength="8" />
      <span class="error" aria-live="polite"></span>
    </label>
  </p>
  <button>Submit</button>
</form>
```

Эта простая форма использует атрибут [`novalidate`](/ru/docs/Web/HTML/Attributes/novalidate), который отключает автоматическую валидацию браузером; это позволяет нашему скрипту взять управление валидацией на себя. Однако, это не отменяет поддержку Constraint Validation API или псевдоклассов, таких как {{cssxref(":valid")}} или ему подобных. Это значит, что хотя браузер автоматически и не проверяет валидность формы перед отправкой данных, вы можете сделать это самостоятельно и соответствующим образом стилизовать форму.

Объектом валидации является обязательный для заполнения [`<input type="email">`](/ru/docs/Web/HTML/Element/input/email), длина которого не должна быть меньше 8 символов. Давайте напишем код, проверяющий эти критерии, и покажем кастомное сообщение об ошибке в случае несоблюдения какого-то из них.

Мы хотим показывать сообщение об ошибке внутри элемента `<span>`. Данному элементу задан атрибут [`aria-live`](/ru/docs/Web/Accessibility/ARIA/ARIA_Live_Regions), чтобы гарантировать, что наше кастомное сообщение об ошибке будет доступно всем, включая пользователей скринридеров.

> **Примечание:** Ключевым моментом здесь является то, что добавление к форме атрибута `novalidate` отключает отображение встроенных сообщений об ошибке и позволяет вместо этого добавлять в DOM кастомные сообщения.

Перейдём к базовому CSS, чтобы немного улучшить внешний вид формы и обеспечить визуальную обратную связь при введении не валидных данных:

```css
body {
  font: 1em sans-serif;
  width: 200px;
  padding: 0;
  margin: 0 auto;
}

p * {
  display: block;
}

input[type="email"] {
  -webkit-appearance: none;
  appearance: none;

  width: 100%;
  border: 1px solid #333;
  margin: 0;

  font-family: inherit;
  font-size: 90%;

  box-sizing: border-box;
}

/* Это стили для не валидных полей */
input:invalid {
  border-color: #900;
  background-color: #fdd;
}

input:focus:invalid {
  outline: none;
}

/* Это стили для кастомных сообщений об ошибке */
.error {
  width: 100%;
  padding: 0;

  font-size: 80%;
  color: white;
  background-color: #900;
  border-radius: 0 0 5px 5px;

  box-sizing: border-box;
}

.error.active {
  padding: 0.3em;
}
```

Теперь давайте рассмотрим JavaScript, который реализует кастомную валидацию.

```js
// Существуют разные способы получить DOM-узел; здесь мы определяем саму форму и
// поле ввода email и элемент span, в который поместим сообщение об ошибке
const form = document.getElementsByTagName("form")[0];

const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

email.addEventListener("input", function (event) {
  // Каждый раз, когда пользователь что-то вводит,
  // мы проверяем, являются ли поля формы валидными

  if (email.validity.valid) {
    // Если на момент валидации какое-то сообщение об ошибке уже отображается,
    // если поле валидно, удаляем сообщение
    emailError.textContent = ""; // Сбросить содержимое сообщения
    emailError.className = "error"; // Сбросить визуальное состояние сообщения
  } else {
    // Если поле не валидно, показываем правильную ошибку
    showError();
  }
});

form.addEventListener("submit", function (event) {
  // Если поле email валдно, позволяем форме отправляться

  if (!email.validity.valid) {
    // Если поле email не валидно, отображаем соответствующее сообщение об ошибке
    showError();
    // Затем предотвращаем стандартное событие отправки формы
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    // Если поле пустое,
    // отображаем следующее сообщение об ошибке
    emailError.textContent = "You need to enter an e-mail address.";
  } else if (email.validity.typeMismatch) {
    // Если поле содержит не email-адрес,
    // отображаем следующее сообщение об ошибке
    emailError.textContent = "Entered value needs to be an e-mail address.";
  } else if (email.validity.tooShort) {
    // Если содержимое слишком короткое,
    // отображаем следующее сообщение об ошибке
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }

  // Задаём соответствующую стилизацию
  emailError.className = "error active";
}
```

Комментарии объясняют логику хорошо, но кратко:

- При каждом изменении значения поля, мы производим его валидацию. Если данные валидны, удаляем ранее отображаемые сообщения об ошибках. Если данные не валдны, запускаем `showError()`, чтобы показать соответствующую ошибку.
- При каждой попытке отправить форму, мы снова производим валидацию. Если данные валидны, позволяем отправку формы. Если данные не валидны, запускам `showError()`, чтобы показать соответствующее сообщение об ошибке, а также предотвращаем отправку формы с помощью [`preventDefault()`](/ru/docs/Web/API/Event/preventDefault).
- Функция `showError()` использует различные свойства объекта `validity` поля ввода, чтобы определить тип ошибки и отобразить соответсвущее сообщение.

Рабочий пример:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/detailed-custom-validation.html", '100%', 150)}}

> **Примечание:** Рабочий пример можно найти на GitHub по адресу [detailed-custom-validation.html](https://mdn.github.io/learning-area/html/forms/form-validation/detailed-custom-validation.html) (отдельно можно найти [исходный код](https://github.com/mdn/learning-area/blob/master/html/forms/form-validation/detailed-custom-validation.html).)

Constraint Validation API явяется мощным инструментом валидации форм, позволяющим получить контроль над пользовательским интерфейсом, существенно превосходящий возможности HTML и CSS.

> **Примечание:** Для получения дополнительной информации смотрите руководства [Constraint validation guide](/ru/docs/Web/Guide/HTML/HTML5/Constraint_validation) и [Constraint Validation API](/ru/docs/Web/API/Constraint_validation).

### Проверка форм без встроенного API

В некоторых случаях, например, при необходимости поддержки устаревших браузеров или [кастомных элементов формы](/ru/docs/Learn/Forms/How_to_build_custom_form_controls), вы не сможете или не захотите использовать Constraint Validation API. Вы по-прежнему сможете использовать JavaScript для валидации форм, но для этого всё нужно будет писать самостоятельно.

Для создания своего валидатора формы, задайте себе несколько вопросов:

- Какую тип валидации я должен выполнить?
  - : Вам нужно определить, как данные будут валидироваться: с помощью строковых операций, преобразования типов, регулярных выражений и так далее. Решать вам.
- Что мне нужно делать, если форма не проходит валидацию?
  - : Это явно вопрос пользовательского интерфейса. Вы должны решить, как в этом случае будет себя вести форма. Будет ли она в любом случае отправлять данные? Нужно ли выделять поля, содержащие ошибки? Нужно ли отображать сообщения об ошибках?
- Как я могу помочь пользователю исправить не валидные данные?

  - : Чтобы снизить степень разочарования пользователя, очень важно предоставить как можно больше полезной информации, чтобы помочь исправить данные, которые он ввёл неправильно. Нужно предложить правильные варианты, чтобы дать понять, какие данные вы ожидаете от него получить, а также сообщение, чётко описывающее ошибку. Если вы хотите подробнее ознакомиться с требованиями к пользовательскому интрефейсу при валидации форм, предлагаем прочитать следующие статьи:

    - SmashingMagazine: [Form-Field Validation: The Errors-Only Approach](https://uxdesign.smashingmagazine.com/2012/06/27/form-field-validation-errors-only-approach/)
    - SmashingMagazine: [Web Form Validation: Best Practices and Tutorials](https://www.smashingmagazine.com/2009/07/07/web-form-validation-best-practices-and-tutorials/)
    - WebFX: [10 Tips for Optimizing Web Form Submission Usability](https://www.webfx.com/blog/web-design/10-tips-for-optimizing-web-form-submission-usability/)
    - A List Apart: [Inline Validation in Web Forms](https://www.alistapart.com/articles/inline-validation-in-web-forms/)

#### Пример без использования Constraint Validation API

Чтобы проиллюстрировать это дальше приводится упрощённая версия предыдущего примера, которая работает с устаревшими браузерами.

HTML почти тот такой же; мы только удалили функционал валидации HTML5.

```html
<form>
  <p>
    <label for="mail">
      <span>Please enter an email address:</span>
      <input type="text" id="mail" name="mail" />
      <span class="error" aria-live="polite"></span>
    </label>
  </p>
  <!-- Для некоторых устаревших браузеров элементу `button` нужно добавлять
       атрибут `type` с явно заданным значением `submit` -->
  <button type="submit">Submit</button>
</form>
```

CSS также не требует особых изменений; мы только заменили CSS-псевдокласс {{cssxref(":invalid")}} на реальный класс и не использовали селектор по атрибутам, так как он не работает в Internet Explorer 6.

```css
body {
  font: 1em sans-serif;
  width: 200px;
  padding: 0;
  margin: 0 auto;
}

form {
  max-width: 200px;
}

p * {
  display: block;
}

input.mail {
  -webkit-appearance: none;

  width: 100%;
  border: 1px solid #333;
  margin: 0;

  font-family: inherit;
  font-size: 90%;

  box-sizing: border-box;
}

/* Стилизация не валидных полей */
input.invalid {
  border-color: #900;
  background-color: #fdd;
}

input:focus.invalid {
  outline: none;
}

/* Стилизация сообщений об ошибках */
.error {
  width: 100%;
  padding: 0;

  font-size: 80%;
  color: white;
  background-color: #900;
  border-radius: 0 0 5px 5px;
  box-sizing: border-box;
}

.error.active {
  padding: 0.3em;
}
```

Существенно изменился только JavaScript-код, который теперь должен выполнять гораздо больше работы.

```js
// Устаревшие браузеры поддерживают несколько способов получения DOM-узла
const form = document.getElementsByTagName("form")[0];
const email = document.getElementById("mail");

// Ниже приведён способ получения узла следующего родственного DOM-элемента
// Он опасен, потому что можно создать бесконечный цикл.
// В современных браузерах лучше использовать `element.nextElementSibling`
let error = email;
while ((error = error.nextSibling).nodeType != 1);

// Согласно спецификации HTML5
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Многие устаревшие браузеры не поддерживают метод `addEventListener`
// Есть простой способ заменить его; и далеко не единственный
function addEvent(element, event, callback) {
  let previousEventCallBack = element["on" + event];
  element["on" + event] = function (e) {
    let output = callback(e);

    // Колбэк, который возвращает `false`, останавливает цепочку колбэков
    // и прерывает выполнение колбэка события
    if (output === false) return false;

    if (typeof previousEventCallBack === "function") {
      output = previousEventCallBack(e);
      if (output === false) return false;
    }
  };
}

// Теперь мы можем изменить наши критерии валидации
// Поскольку мы не полагаемся на CSS-псевдокласс, для поля email
// нужно явно задать валидный / не валидный класс
addEvent(window, "load", function () {
  // Проверка, является ли поле пустым (помните, оно не являтеся обязательным)
  // Если поле не пустое, проверяем содержимое на соответствует шаблону email
  const test = email.value.length === 0 || emailRegExp.test(email.value);

  email.className = test ? "valid" : "invalid";
});

// Здесь определяется поведение при вводе пользователем значения поля
addEvent(email, "input", function () {
  const test = email.value.length === 0 || emailRegExp.test(email.value);
  if (test) {
    email.className = "valid";
    error.textContent = "";
    error.className = "error";
  } else {
    email.className = "invalid";
  }
});

// Здесь определяется поведение при попытке отправить данные
addEvent(form, "submit", function () {
  const test = email.value.length === 0 || emailRegExp.test(email.value);

  if (!test) {
    email.className = "invalid";
    error.textContent = "I expect an e-mail, darling!";
    error.className = "error active";

    // Некоторые устаревшие браузеры не поддерживают метод event.preventDefault()
    return false;
  } else {
    email.className = "valid";
    error.textContent = "";
    error.className = "error";
  }
});
```

Результат выглядит следующим образом:

{{EmbedLiveSample("An_example_that_doesnt_use_the_constraint_validation_API", "100%", 130)}}

Как вы можете видеть, сделать собственную валидацию не так уж и сложно. Сложность состоит лишь в том, чтобы сделать его кроссплатформенным и работающим с любой формой, которую можно создать. Для проверки формы доступно множество библиотек, например [Validate.js](https://rickharrison.github.io/validate.js/).

## Проверьте свои навыки!

Вы дошли до конца этой статьи, но можете ли вы вспомнить самую важную информацию? Вы можете найти дополнительные тесты, чтобы убедиться, что вы сохранили эту информацию, прежде чем двигаться дальше — [Test your skills: Form validation](/ru/docs/Learn/Forms/Test_your_skills:_Form_validation).

## Заключение

Для проверки формы на стороне клиента иногда требуется JavaScript, если вы хотите настроить стилизацию и сообщения об ошибках, но это всегда требует от вас внимательного отношения к пользователю. Всегда помните о необходимости помогать пользователям исправлять данные, которые они вводят. Для этого обязательно нужно:

- Отображать явные сообщения об ошибках.
- Снисходительно относиться к формату ввода.
- Указывать, где именно возникла ошибка. Особенно в больших формах.

После того, как вы убедились, что форма заполнена правильно, ее можно отправлять. Дальше мы рассмотрим [отправку данных формы](/ru/docs/Learn/Forms/Sending_and_retrieving_form_data).

{{PreviousMenuNext("Learn/Forms/UI_pseudo-classes", "Learn/Forms/Sending_and_retrieving_form_data", "Learn/HTML/Forms")}}

## In this module

- [Ваша первая форма](/ru/docs/Learn/Forms/Your_first_form)
- [Как структурировать веб-формы](/ru/docs/Learn/Forms/How_to_structure_a_web_form)
- [Основные встроенные элементы формы](/ru/docs/Learn/Forms/Basic_native_form_controls)
- [Типы полей ввода в HTML5](/ru/docs/Learn/Forms/HTML5_input_types)
- [Другие элементы формы](/ru/docs/Learn/Forms/Other_form_controls)
- [Стилизация веб-форм](/ru/docs/Learn/Forms/Styling_web_forms)
- [Продвинутая стилизация форм](/ru/docs/Learn/Forms/Advanced_form_styling)
- [UI псевдоклассы](/ru/docs/Learn/Forms/UI_pseudo-classes)
- [Валидация форм на стороне клиента](/ru/docs/Learn/Forms/Form_validation)
- [Отправка данных формы](/ru/docs/Learn/Forms/Sending_and_retrieving_form_data)

### Продвинутые темы

- [Как создавать кастомные элементы формы](/ru/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Отправка форм с помощью JavaScript](/ru/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Таблица совместимости CSS-свойств для элементов формы](/ru/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
