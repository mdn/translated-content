---
title: 'HTMLFormElement: submit event'
slug: Web/API/HTMLFormElement/submit_event
tags:
  - API
  - Event
  - Forms
  - HTML DOM
  - HTMLFormElement
  - Reference
  - submit
translation_of: Web/API/HTMLFormElement/submit_event
---

{{APIRef}}

O evento **`submit`** é disparado quando é feito o submit de um {{HtmlElement("form")}}.

<table class="properties">
  <tbody>
    <tr>
      <th>Bubbles</th>
      <td>Sim (apesar de especificado como um evento simples que não borbulha)</td>
    </tr>
    <tr>
      <th>Cancelável</th>
      <td>Sim</td>
    </tr>
    <tr>
      <th>Interface</th>
      <td>{{DOMxRef("SubmitEvent")}}</td>
    </tr>
    <tr>
      <th>Propriedade de event handler</th>
      <td>{{domxref("GlobalEventHandlers.onsubmit")}}</td>
    </tr>
  </tbody>
</table>

<!-- Note that the `submit` event fires on the `<form>` element itself, and not on any {{HtmlElement("button")}} or {{HtmlElement('input/submit', '&lt;input type="submit"&gt;')}} inside it. However, the {{domxref("SubmitEvent")}} which is sent to indicate the form's submit action has been triggered includes a {{domxref("SubmitEvent.submitter", "submitter")}} property, which is the button that was invoked to trigger the submit request. -->

É importante notar que o evento `submit` é disparado no próprio elemento `<form>`, e não em um {{HtmlElement("button")}} ou {{HtmlElement('input/submit', '&lt;input type="submit"&gt;')}} dentro dele. No entanto, o evento {{domxref("SubmitEvent")}} que é enviado para indicar que uma ação de submit foi disparada inclui uma propriedade {{domxref("SubmitEvent.submitter", "submitter")}}, que é o botão que realizou o pedido de submit.

<!-- The `submit` event fires when the user clicks a submit button ({{HtmlElement("button")}} or {{HtmlElement('input/submit', '&lt;input type="submit"&gt;')}}) or presses <kbd>Enter</kbd> while editing a field (e.g. {{HtmlElement('input/text', '&lt;input type="text"&gt;')}}) in a form. The event is not sent to the form when calling the {{domxref("HTMLFormElement.submit()", "form.submit()")}} method directly. -->

O evento `submit` é disparado quando a pessoa usuária clica um botão ({{HtmlElement("button")}} ou {{HtmlElement('input/submit', '&lt;input type="submit"&gt;')}}) ou pressiona <kbd>Enter</kbd> enquanto está editando um campo (p. ex. {{HtmlElement('input/text', '&lt;input type="text"&gt;')}}) em um formulário. O evento não é enviado ao formulário quando se chama o método {{domxref("HTMLFormElement.submit()", "form.submit()")}} diretamente.

<!-- > **Note:** Trying to submit a form that does not pass [validation](/en-US/docs/Learn/Forms/Form_validation) triggers an {{domxref("HTMLInputElement/invalid_event", "invalid")}} event. In this case, the validation prevents form submission, and thus there is no `submit` event. -->

> **Nota:** Tentar submeter um formulário que não passa na [validação](/pt-BR/docs/Learn/Forms/Form_validation) dispara um evento {{domxref("HTMLInputElement/invalid_event", "invalid")}}. Nesse caso, a validação previne a submissão do formulário, e por isso não é disparado o evento `submit`.

## Exemplos

<!-- This example uses {{domxref("EventTarget.addEventListener()")}} to listen for form submit, and logs the current {{domxref("Event.timeStamp")}} whenever that occurs, then prevents the default action of submitting the form. -->

Este exemplo usa {{domxref("EventTarget.addEventListener()")}} para escutar por um submit do formulário, e escreve o {{domxref("Event.timeStamp")}} do momento em que ele é disparado. Após isso, previne a ação padrão de submeter o formulário utilizando {{domxref("Event.preventDefault()")}}.

### HTML

```html
<form id="form">
  <label>Campo de teste: <input type="text" /></label>
  <br /><br />
  <button type="submit">Submeter formulário</button>
</form>
<p id="log"></p>
```

### JavaScript

```js
function logSubmit(event) {
  log.textContent = `Formulário Submetido! Time stamp: ${event.timeStamp}`;
  event.preventDefault();
}

const form = document.getElementById('form');
const log = document.getElementById('log');
form.addEventListener('submit', logSubmit);
```

### Resultado

{{EmbedLiveSample("Exemplos")}}

## Especificações

{{Specifications}}

## Compatibilidade com os navegadores

{{Compat}}

## Ver também

- Elemento HTML {{HtmlElement("form")}}
- Evento relacionado : {{domxref("HTMLInputElement/invalid_event", "invalid")}}
