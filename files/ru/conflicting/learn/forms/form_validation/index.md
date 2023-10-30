---
title: Constraint validation API
slug: conflicting/Learn/Forms/Form_validation
original_slug: Web/API/Constraint_validation
---

{{apiref()}}

Constraint Validation API позволяет проверять значения, которые пользователи вводят в элементы формы, перед отправкой на сервер.

## Концепция и использование

Для определённых элементов формы, таких как {{HTMLElement("input")}}, {{HTMLElement("select")}} и {{HTMLElement("textarea")}}, можно указать допустимый формат значений, используя атрибуты вроде `required` и `pattern`.

Для более сложных ограничений или для замены штатных сообщений об ошибках валидации на более понятные можно использовать Constraint Validation API.

> **Примечание:** Валидация ограничений на стороне клиента не отменяет необходимости производить валидацию на стороне сервера. Даже при том, что валидация на стороне клиента может предотвратить многие распространённые типы невалидных значений, они всё ещё могут быть отправлены устаревшими браузерами или злоумышленниками, которые пытаются навредить вашему веб-приложению. Следовательно, вам по-прежнему нужно валидировать значения как на стороне клиента, так и на стороне сервера. Валидация на стороне клиента даёт пользователю быструю обратную связь, повышая удобство работы с интерфейсом. Но вы не должны полностью полагаться на неё в вопросе проверки данных, которые отправляются на сервер.

Валидация ограничений с помощью Constraint Validation API выполняется либо для одного элемента формы, либо на уровне всей формы для элемента {{ HTMLElement("form") }}.

## Интерфейс валидации ограничений

- [ValidityState](/ru/docs/Web/API/ValidityState)
  - : Интерфейс ValidityState содержит _состояния валидации_, которые применяются к элементу формы, с учётом указанных для элемента ограничений. По состоянию можно понять, была ли ошибка валидации и почему.
- Событие [invalid](/ru/docs/Web/API/HTMLInputElement/invalid_event)
  - : Этот тип события запускается на элементе формы, если значение элемента не удовлетворяет ограничениям.

### Расширения к другим интерфейсам

Constraint Validation API расширяет перечисленные ниже интерфейсы элементов формы рядом новых свойств и методов (элементы, которые могут иметь атрибут `form`, указывающий на содержащую их форму):

- **[`HTMLButtonElement`](/ru/docs/Web/API/HTMLButtonElement)**
- **[`HTMLFieldsetElement`](/ru/docs/Web/API/HTMLFieldSetElement)**
- **[`HTMLInputElement`](/ru/docs/Web/API/HTMLInputElement)**
- **[`HTMLObjectElement`](/ru/docs/Web/API/HTMLObjectElement)**
- **[`HTMLOutputElement`](/ru/docs/Web/API/HTMLOutputElement)**
- **[`HTMLSelectElement`](/ru/docs/Web/API/HTMLSelectElement)**
- **[`HTMLTextAreaElement`](/ru/docs/Web/API/HTMLTextAreaElement)**

#### Свойства

- {{domxref('HTMLObjectElement.validity', 'validity')}}
  - : Свойство, доступное только для чтения, которое возвращает объект [`ValidityState`](/ru/docs/Web/API/ValidityState), содержащий ошибки валидации значения данного элемента.
- {{domxref('HTMLObjectElement.validationMessage','validationMessage')}}
  - : Доступное только для чтения свойство, которое возвращает пустую строку, если элемент не является кандидатом на участие в валидации ограничений или если значение элемента валидно. Если значение элемента не валидно, оно возвращает локализованное сообщение валидации. Оно отобразится в интерфейсе, если элемент является единственным элементом формы, с проблемой валидности; если кастомное сообщение об ошибке установлено с помощью {{domxref('HTMLObjectElement.setCustomValidity','setCustomValidity()')}}, это будет показано.
- {{domxref('HTMLObjectElement.willValidate', 'willValidate')}}
  - : Доступное только для чтения логическое свойство, которое возвращает `true`, если элемент является кандидатом на участие в валидации; и `false` в противном случае. Элементы с интерфейсом `HTMLObjectElement` _никогда_ не являются кандидатами на участие в валидации. Другим может быть запрещено участвовать в валидации ограничений в зависимости от конкретных условий.

#### Методы

- {{domxref('HTMLObjectElement.checkValidity', 'checkValidity()')}}
  - : Проверяет значение элемента на соответствие его ограничениям. Если значение не валидно, на элементе запускается событие [invalid](/ru/docs/Web/API/HTMLInputElement/invalid_event) и возвращает `false`; если значение валидно, возвращает `true`.
- {{domxref('HTMLFormElement.reportValidity','reportValidity()')}} метод HTMLFormElement
  - : Проверяет значение элемента на соответствие его ограничениям и сообщает о статусе валидности; если значение не валидно, оно запускает на элементе событие [invalid](/ru/docs/Web/API/HTMLInputElement/invalid_event), возвращает `false`, а затем сообщает пользователю о статусе валидности любым способом, доступным пользовательскому агенту. Если значение валидно, возвращает `true`.
- {{domxref('HTMLObjectElement.setCustomValidity','setCustomValidity(<em>message</em>)')}}
  - : Устанавливает кастомную строку сообщения об ошибке, которое будет показано пользователю при отправке формы, объясняя, почему значение не валидно — когда сообщение установлено, статус меняется на не валидный. Чтобы очистить этот статус, вызовите функцию, передав ей в виде аргумента пустую строку. При этом кастомное сообщение очищается, элемент становится валидным, а сообщение не отображается.

## Примеры

Рассмотрим следующую форму:

```html
<form>
  <label for="name">Enter username (upper and lowercase letters): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+">
  <button>Submit</button>
</form>
```

Если вы попытаетесь отправить форму с пустым полем, или полем, значение которого не соответствует шаблону в атрибуте [`pattern`](/ru/docs/Web/HTML/Attributes/pattern) (только строчные и заглавные латинские буквы), базовый механизм валидации HTML-формы приведёт к появлению сообщения об ошибке, дизайн которого определяется браузером и операционной системой.

Если вы хотите вместо этого отобразить своё сообщение об ошибке, вам потребуется написать JavaScript-код вроде того, что показан ниже:

```js
const nameInput = document.querySelector('input');

nameInput.addEventListener('input', () => {
  nameInput.setCustomValidity('');
  nameInput.checkValidity();
});

nameInput.addEventListener('invalid', () => {
  if(nameInput.value === '') {
    nameInput.setCustomValidity('Enter your username!');
  } else {
    nameInput.setCustomValidity('Usernames can only contain upper and lowercase letters. Try again!');
  }
});
```

Живой пример формы со своим сообщением об ошибке:

{{EmbedLiveSample('Examples')}}

Как это работает:

- Мы проверяем состояние валидности элемента input при каждом изменении его значения, запуская метод `checkValidity()` через обработчик события `input`.
- Если значение не валидно, происходит событие `invalid` и срабатывает обработчик события `invalid`. Внутри обработчика с помощью условия `if...else` мы выясняем, почему значение является невалидным: из-за того, что строка пустая или потому что она не соответствует шаблону, и в зависимости от условия задаём своё сообщение об ошибке валидации.
- В результате при попытке отправить форму, если значение input не валидно, отобразится одно из наших сообщений об ошибке.
- Если поле валидно, как и ожидалось, форма будет отправлена. Но чтобы это произошло, нужно сбросить наше сообщение об ошибке, вызвав метод `setCustomValidity()` с пустой строкой в качестве аргумента. В примере это происходит каждый раз, когда случается событие `input`. Если этого не сделать, браузер будет показывать ошибку валидации, указанную ранее, даже если поле в данный момент содержит валидные данные.

> **Примечание:** На протяжении многих версий браузер Firefox поддерживал собственный атрибут ошибки `x-moz-errormessage`, который позволял аналогичным образом устанавливать свои сообщения об ошибке. Данный атрибут был удалён в версии 66 (смотрите [bug 1513890](https://bugzilla.mozilla.org/show_bug.cgi?id=1513890)).

## Спецификации

{{Specifications("api.ValidityState")}}

## Смотрите также

- [`<input>`](/ru/docs/Web/HTML/Element/input)
- [`<select>`](/ru/docs/Web/HTML/Element/select)
- [`<textarea>`](/ru/docs/Web/HTML/Element/textarea)
- `Свойства {{domxref('ValidityState')}}`: {{domxref('validityState.badInput', 'badInput')}}, {{domxref('validityState.customError','customError')}}, {{domxref('validityState.patternMismatch','patternMismatch')}}, {{domxref('validityState.rangeOverflow','rangeOverflow')}}, {{domxref('validityState.rangeUnderflow','rangeUnderflow')}}, {{domxref('validityState.stepMismatch','stepMismatch')}}, {{domxref('validityState.tooLong','tooLong')}}, {{domxref('validityState.tooShort','tooShort')}}, {{domxref('validityState.typeMismatch','typeMismatch')}}, {{domxref('validityState.valid','valid')}} и {{domxref('validityState.valueMissing','valueMissing')}}.
