---
title: <form>
slug: Web/HTML/Element/form
---

## Резюме

_Элемент HTML form_ (`<form>`) представляет (собой) раздел документа, содержащий интерактивные элементы управления, которые позволяют пользователю отправлять информацию на веб-сервер.

Можно использовать [`:valid`](/ru/docs/CSS/%3Avalid) и [`:invalid`](/ru/docs/CSS/%3Ainvalid) CSS псевдоклассы для стилизации `<form>` элемента, в зависимости от того, валиден или нет конкретный элемент {{domxref("HTMLFormElement.elements", "elements")}} внутри формы.

## Контекст Использования

| Категория содержимого  | [Flow content](/ru/docs/HTML/Content_categories#Flow_content)                                                                                                                         |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Разрешённое содержимое | [Flow content](/ru/docs/HTML/Content_categories#Flow_content), но не содержащий `<form>` элементов                                                                                    |
| Пропуск тега           | Нет. И открывающий и закрывающий тег должны быть.                                                                                                                                     |
| Нормативный документ   | [HTML5, section 4.10.3](http://www.w3.org/TR/html5/forms.html#the-form-element) ([HTML4.01, section 17.3](http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#h-17.3)) |

## Атрибуты

Как и все HTML-элементы, этот элемент поддерживает [глобальные атрибуты](/ru/docs/HTML/Global_attributes).

- {{htmlattrdef("accept")}}
  - : Список типов содержимого, разделённых запятой, которые принимает сервер.
    > **Примечание:** Этот атрибут был удалён в HTML5 и его не следует больше использовать. Взамен, используйте [`accept`](/ru/docs/Web/HTML/Element/input#accept) атрибут заданного {{HTMLElement("input")}} элемента.
- {{htmlattrdef("accept-charset")}}
  - : Разделённые пробелами [символьные кодировки](/ru/docs/Web/Guide/Localizations_and_character_encodings), которые принимает сервер. Браузер использует их в том порядке, в котором они перечислены. Значение по умолчанию означает [ту же кодировку что и у страницы](/ru/docs/Web/HTTP/Headers/Content-Encoding).
    (В предыдущей версии HTML, различные кодировки могли быть разделены запятыми.)
- {{htmlattrdef("action")}}
  - : URI-адрес программы, которая обрабатывает информацию переданную через форму. Это значение может быть переписано с помощью атрибута [`formaction`](/ru/docs/Web/HTML/Element/button#formaction) на {{HTMLElement("button")}} или {{HTMLElement("input")}} элементе.
- {{htmlattrdef("autocomplete")}}
  - : Указывает, могут ли элементы управления автоматически быть дописаны в форме браузером. Эта настройка может быть переписана с помощью атрибута `autocomplete` на элементе формы. Возможные значения:
    - `off`: Пользователь должен явно ввести значение в каждое поле или документ предоставит свой собственный метод автодополнения; браузер автоматически не дополняет записи.
    - `on`: Браузер может автоматически дополнить значения, основанные на значениях, которые пользователь уже вводил, в течение предыдущего использования формы.
      > **Примечание:**Если вы установили значение `off` `для` `autocomplete` атрибута формы, из-за того, что документ предоставляет своё собственное автодополнение, то вам следует также установить значение `off` для `autocomplete` каждого {{HTMLElement("input")}} элемента формы, которые документ может автоматически дополнить. Подробнее, смотрите [Google Chrome notes](#google_chrome_notes).
- {{htmlattrdef("enctype")}}
  - : Когда значение атрибута method равно `post`, атрибут - [MIME тип](http://en.wikipedia.org/wiki/Mime_type) содержимого, которое используется, чтобы передать форму на сервер. Возможные значения:
    - `application/x-www-form-urlencoded`: Значение по умолчанию, если атрибут не задан.
    - `multipart/form-data`: Используйте это значение, если пользуетесь элементом {{HTMLElement("input")}} атрибутом `type` установленным в "file".
    - `text/plain (HTML5)` Это значение может быть переписано атрибутом [`formenctype`](/ru/docs/Web/HTML/Element/button#formenctype) на элементе {{HTMLElement("button")}} или {{HTMLElement("input")}}.
- {{htmlattrdef("method")}}
  - : [HTTP](/ru/docs/HTTP) метод, который браузер использует, для отправки формы. Возможные значения:
    - `post`: Соответствует HTTP [POST методу](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5) ; данные из формы включаются в тело формы и посылаются на сервер.
    - `get`: Соответствует [GET методу](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3); данные из формы добавляются к URI атрибута `action`, их разделяет '?', и полученный URI посылается на сервер. Используйте этот метод, когда форма содержит только ASCII символы и не имеет побочного эффекта.Это значение может быть переписано атрибутом [`formmethod`](/ru/docs/Web/HTML/Element/button#formmethod) на {{HTMLElement("button")}} или {{HTMLElement("input")}} элементе.
- {{htmlattrdef("name")}}
  - : Имя формы. В HTML 4 его использование запрещено (`id` следует использовать взамен). Оно должно быть уникальным и не пустым среди всех форм в документе в HTML 5.
- {{htmlattrdef("novalidate")}}
  - : Это Boolean атрибут показывает, что форма не проверяется на валидность, когда отправляется серверу. Если атрибут пропущен (и поэтому форма проверяется), эта настройка по умолчанию, может быть переписана атрибутом [`formnovalidate`](/ru/docs/Web/HTML/Element/button#formnovalidate) на {{HTMLElement("button")}} или {{HTMLElement("input")}} элементе, принадлежащем форме.
- {{htmlattrdef("target")}}
  - : Имя или ключевое слово, показывающее где отображать ответ, который будет получен, после отправки формы. В HTML 4, это имя или ключевое слово для фрейма. В HTML5, это имя или ключевое слово, _контекста_ _просмотра_ (например, вкладка, окно, или линейный фрейм). Следующие ключевые слова имеют специальное значение:
    - `_self`: Загружает ответ в том же самом фрейме HTML 4 (или HTML5 контексте просмотра) как текущий. Это значение по умолчанию, если атрибут не указан.
    - `_blank`: Загружает ответ в новом безымянном окне HTML 4 или HTML5 контексте просмотра.
    - `_parent`: Загружает ответ HTML 4 в родительском наборе фрейма для текущего фрейма или HTML5 родительский контекст просмотра для текущего просмотра. Если нет предка, эта опция действует точно так же как as `_self`.
    - `_top`: HTML 4: Загружает ответ в полное, оригинальное окно, закрывая все другие фреймы. HTML5: Загружает ответ в верхний уровень контекста просмотра (т.е., контекст просмотра это предок текущего и не имеет других предков). Если нет предка, эта опция действует точно так же как as `_self`.HTML5: Это значение может быть перезаписано [`formtarget`](/ru/docs/Web/HTML/Element/button#formtarget) атрибутом на {{HTMLElement("button")}} или {{HTMLElement("input")}} элементе.

## DOM_interface

Этот элемент реализует {{domxref("HTMLFormElement")}} интерфейс.

## Примеры

```html
<!-- Простая форма, которая пошлёт GET запрос -->
<form action="">
  <label for="GET-name">Name:</label>
  <input id="GET-name" type="text" name="name" />
  <input type="submit" value="Save" />
</form>

<!-- Простая форма, которая пошлёт POST запрос -->
<form action="" method="post">
  <label for="POST-name">Name:</label>
  <input id="POST-name" type="text" name="name" />
  <input type="submit" value="Save" />
</form>

<!-- Форма с fieldset, legend, и label -->
<form action="" method="post">
  <fieldset>
    <legend>Title</legend>
    <input type="radio" name="radio" id="radio" />
    <label for="radio">Click me</label>
  </fieldset>
</form>
```

## Совместимость браузера

{{Compat}}

## Смотрите также

- Другие элементы, которые используются для создания форм: {{HTMLElement("button")}}, {{HTMLElement("datalist")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}},{{HTMLElement("keygen")}}, {{HTMLElement("label")}}, {{HTMLElement("legend")}}, {{HTMLElement("meter")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("option")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}.

{{HTMLSidebar}}
