---
title: ":disabled"
slug: Web/CSS/:disabled
---

{{CSSRef}}

A [pseudo-classe](/pt-BR/docs/Web/CSS/Pseudo-classes) [CSS](/pt-BR/docs/Web/CSS) **`:disabled`** representa qualquer elemento desativado. Um elemento é desativado se não puder ser ativado (selecionado, clicado, digitado etc.) ou aceitar o foco. O elemento também possui um estado habilitado, no qual ele pode ser ativado ou aceitar o foco.

```css
/* Selects any disabled <input> */
input:disabled {
  background: #ccc;
}
```

## Sintaxe

{{csssyntax}}

## Exemplo

Este exemplo mostra um formulário básico de envio. Ele usa o evento [JavaScript](/pt-BR/docs/Web/JavaScript) [`change`](/pt-BR/docs/Web/Events/change) para permitir que o usuário ative / desative os campos de faturamento.

### HTML

```html
<form action="#">
  <fieldset id="shipping">
    <legend>Shipping address</legend>
    <input type="text" placeholder="Name" />
    <input type="text" placeholder="Address" />
    <input type="text" placeholder="Zip Code" />
  </fieldset>
  <br />
  <fieldset id="billing">
    <legend>Billing address</legend>
    <label for="billing-checkbox">Same as shipping address:</label>
    <input type="checkbox" id="billing-checkbox" checked />
    <br />
    <input type="text" placeholder="Name" disabled />
    <input type="text" placeholder="Address" disabled />
    <input type="text" placeholder="Zip Code" disabled />
  </fieldset>
</form>
```

### CSS

```css
input[type="text"]:disabled {
  background: #ccc;
}
```

### JavaScript

```js
// Wait for the page to finish loading
document.addEventListener(
  "DOMContentLoaded",
  function () {
    // Attach `change` event listener to checkbox
    document.getElementById("billing-checkbox").onchange = toggleBilling;
  },
  false,
);

function toggleBilling() {
  // Select the billing text fields
  var billingItems = document.querySelectorAll('#billing input[type="text"]');

  // Toggle the billing text fields
  for (var i = 0; i < billingItems.length; i++) {
    billingItems[i].disabled = !billingItems[i].disabled;
  }
}
```

### Resultado

{{EmbedLiveSample('Example', 300, 250)}}

## Expecificações

| Specification                                                   | Status                      | Comment                                                     |
| --------------------------------------------------------------- | --------------------------- | ----------------------------------------------------------- |
| {{SpecName('HTML WHATWG', '#selector-disabled', ':disabled')}}  | {{Spec2('HTML WHATWG')}}    | No change.                                                  |
| {{SpecName('HTML5 W3C', '#selector-disabled', ':disabled')}}    | {{Spec2('HTML5 W3C')}}      | Defines the semantics of HTML and forms.                    |
| {{SpecName('CSS4 Selectors', '#enableddisabled', ':disabled')}} | {{Spec2('CSS4 Selectors')}} | No change.                                                  |
| {{SpecName('CSS3 Basic UI', '#pseudo-classes', ':disabled')}}   | {{Spec2('CSS3 Basic UI')}}  | Links to Selectors Level 3.                                 |
| {{SpecName('CSS3 Selectors', '#enableddisabled', ':disabled')}} | {{Spec2('CSS3 Selectors')}} | Defines the pseudo-class, but not the associated semantics. |

## Compatibilidade com navegadores

{{Compat("css.selectors.disabled")}}

## Veja também

- {{Cssxref(":enabled")}}
