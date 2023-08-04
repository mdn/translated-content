---
title: HTMLButtonElement
slug: Web/API/HTMLButtonElement
---

{{APIRef("HTML DOM")}}

Интерфейс HTMLButtonElement предоставляет свойства и методы для управления элементами {{HTMLElement("button")}} (помимо обычного интерфейса {{domxref("HTMLElement")}}, он также доступен - по наследованию) .

{{InheritanceDiagram(600, 120)}}

## Свойства

_Наследует свойства от его родителя, {{domxref("HTMLElement")}}._

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Имя</th>
      <th scope="col">Тип</th>
      <th scope="col">Описание</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>accessKey</code></td>
      <td>{{domxref("DOMString")}}</td>
      <td>Определённая кнопка клавиатуры, дающая доступ к кнопке.</td>
    </tr>
    <tr>
      <td><code>autofocus</code></td>
      <td>{{domxref("Boolean")}}</td>
      <td>
        Управление должно получить фокус ввода при загрузки страницы, пока
        пользователь не отменяет его, например, набирая на клавиатуре в другом
        контроле. Только один форма-ассоциированный элемент в документе может
        иметь указанный атрибут.
      </td>
    </tr>
    <tr>
      <td><code>disabled</code></td>
      <td>{{domxref("Boolean")}}</td>
      <td>Контроль выключен, что означает, он не принимает любых кликов.</td>
    </tr>
    <tr>
      <td><code>form</code> {{readonlyInline}}</td>
      <td>{{domxref("HTMLFormElement")}}</td>
      <td>
        Форма этой кнопки связана с ней. Если кнопка потомок элемента формы, то
        этот атрибут ID этого элемента формы.<br />Если форма не связана с
        формой элемента, то атрибут может быть ID любой формы элемента в том же
        документе<code>, или значение null</code> если нет совпадений.
      </td>
    </tr>
    <tr>
      <td><code>formAction</code></td>
      <td>{{domxref("DOMString")}}</td>
      <td>
        <p>
          URI ресурса, обрабатывающего информацию, отправленную кнопкой. Если
          задан, то переопределяет <a href="/ru/docs/Web/HTML/Element/form#action"><code>action</code></a>
          атрибут {{HTMLElement("form")}} элемента, который является
          его владельцем.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>formEncType</code></td>
      <td>{{domxref("DOMString")}}</td>
      <td>
        Тип содержимого, используемый для отправки формы на сервер. Если указан
        этот атрибут, то он переопределяет
        <a href="/ru/docs/Web/HTML/Element/form#enctype"><code>enctype</code></a> атрибут элемента
        {{HTMLElement("form")}}, который является владельцем этого
        элемента.
      </td>
    </tr>
    <tr>
      <td><code>formMethod</code></td>
      <td>{{domxref("DOMString")}}</td>
      <td>
        <p>
          HTTP метод, который браузер использует для отправки формы. Если задан,
          тогда он переопределяет <a href="/ru/docs/Web/HTML/Element/form#method"><code>method</code></a>
          атрибут {{HTMLElement("form")}} своего владельца.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>formNoValidate</code></td>
      <td>{{domxref("Boolean")}}</td>
      <td>
        <p>
          Показывает что форма не будет проверена при отправке. Если задано,
          тогда переопределяет
          <a href="/ru/docs/Web/HTML/Element/form#novalidate"><code>novalidate</code></a> атрибут
          {{HTMLElement("form")}} своего владельца.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>formTarget</code></td>
      <td>{{domxref("DOMString")}}</td>
      <td>
        <p>
          Имя или ключевое слово, указывающее, где должен отображаться ответ,
          полученный после отправки формы. Если задано, тогда переопределяет
          <a href="/ru/docs/Web/HTML/Element/form#target"><code>target</code></a> атрибут
          {{HTMLElement("form")}} своего владельца.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>labels</code> {{readonlyInline}}</td>
      <td>{{domxref("NodeList")}}</td>
      <td>
        Список элементов {{HTMLElement("label")}}, которые являются
        метками для этой кнопки.
      </td>
    </tr>
    <tr>
      <td><code>menu</code> {{experimental_inline}}</td>
      <td>{{domxref("HTMLMenuElement")}}</td>
      <td>
        Элемент меню, который будет отображаться, если кнопка нажата и имеет тип
        <code>type="menu"</code>.
      </td>
    </tr>
    <tr>
      <td><code>name</code></td>
      <td>{{domxref("DOMString")}}</td>
      <td>
        <p>
          Имя объекта отправляемое с формой.
          Если задано, не должно быть пустой строкой.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>tabIndex</code></td>
      <td>long</td>
      <td>
        <p>
          Номер, представляющий последовательность перехода между полями при
          нажатии на Tab
        </p>
      </td>
    </tr>
    <tr>
      <td><code>type</code></td>
      <td>{{domxref("DOMString")}}</td>
      <td>
        <p>
          Указывает поведение кнопки. Это перечисляемый атрибут со следующими
          возможными значениями:
        </p>
        <ul>
          <li>
            <code>"submit"</code>: Кнопка отправки формы. Это значение по
            умолчанию, если атрибут не определён,
            или если он динамически изменяется
            на пустое или недопустимое значение.
          </li>
          <li><code>"reset"</code>: Кнопка сброса формы.</li>
          <li><code>"button"</code>: Кнопка с неопределённым действием.</li>
          <li>
            <code>"menu"</code>: Кнопка показывающая меню (экспериментальная).
            {{experimental_inline}}
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>validationMessage</code> {{readonlyInline}}</td>
      <td>{{domxref("DOMString")}}</td>
      <td>
        <p>
          A localized message that describes the validation constraints that the
          control does not satisfy (if any). This attribute is the empty string
          if the control is not a candidate for constraint validation (<code
            >willValidate</code
          >
          is <code>false</code>), or it satisfies its constraints.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>validity</code> {{readonlyInline}}</td>
      <td>{{domxref("ValidityState")}}</td>
      <td>The validity states that this button is in.</td>
    </tr>
    <tr>
      <td><code>value</code></td>
      <td>{{domxref("DOMString")}}</td>
      <td>The current form control value of the button.</td>
    </tr>
    <tr>
      <td><code>willValidate</code></td>
      <td>{{domxref("Boolean")}}</td>
      <td>
        Indicates whether the button is a candidate for constraint validation.
        It is <code>false</code> if any conditions bar it from constraint
        validation.
      </td>
    </tr>
  </tbody>
</table>

## Methods

_Наследует свойства от его родителя, {{domxref("HTMLElement")}}._

| Name                                    | Return Type            | Description                        |
| --------------------------------------- | ---------------------- | ---------------------------------- |
| `checkValidity()`                       | {{domxref("Boolean")}} | Not supported for button elements. |
| `setCustomValidity(in DOMString error)` | `void`                 | Not supported for button elements. |

WIth Gecko-based browser, use the {{cssxref(":-moz-submit-invalid")}} pseudo-class to style submit buttons based on the validation of a form.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## See also

- HTML element implementing this interface: {{ HTMLElement("button") }}
