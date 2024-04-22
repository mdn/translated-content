---
title: "HTMLFormElement: submit event"
slug: Web/API/HTMLFormElement/submit_event
---

{{APIRef}}

O evento **`submit`** é disparado quando é feita a submissão de um {{HtmlElement("form")}}.

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
      <th>Propriedade para manipular o evento</th>
      <td>{{domxref("GlobalEventHandlers.onsubmit")}}</td>
    </tr>
  </tbody>
</table>

É importante notar que o evento `submit` é disparado no próprio elemento `<form>`, e não em um {{HtmlElement("button")}} ou {{HtmlElement('input/submit', '&lt;input type="submit"&gt;')}} dentro dele. No entanto, o evento {{domxref("SubmitEvent")}} enviado para indicar a ação possui uma propriedade {{domxref("SubmitEvent.submitter", "submitter")}}, que é o botão que realizou o pedido de submit.

O evento `submit` é disparado quando a pessoa usuária clica em um botão ({{HtmlElement("button")}} ou {{HtmlElement('input/submit', '&lt;input type="submit"&gt;')}}) ou pressiona <kbd>Enter</kbd> enquanto está editando um campo (p. ex. {{HtmlElement('input/text', '&lt;input type="text"&gt;')}}) em um formulário. O evento não é enviado ao formulário quando se chama o método {{domxref("HTMLFormElement.submit()", "form.submit()")}} diretamente.

> **Nota:** Tentar submeter um formulário que não passa na [validação](/pt-BR/docs/Learn/Forms/Form_validation) dispara um evento {{domxref("HTMLInputElement/invalid_event", "invalid")}}. Nesse caso, a validação previne a submissão do formulário, impedindo que seja disparado o evento `submit`.

## Exemplos

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

const form = document.getElementById("form");
const log = document.getElementById("log");
form.addEventListener("submit", logSubmit);
```

### Resultado

{{EmbedLiveSample("Exemplos")}}

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Ver também

- Elemento HTML: {{HtmlElement("form")}}
- Evento relacionado: {{domxref("HTMLInputElement/invalid_event", "invalid")}}
