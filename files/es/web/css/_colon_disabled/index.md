---
title: ":disabled"
slug: Web/CSS/:disabled
---

{{CSSRef}}

La [pseudo-clase](/es/docs/Web/CSS/Pseudo-classes) `:disabled` de [CSS](/es/docs/Web/CSS) representa a cualquier elemento deshabilitado. Un elemento se encuentra deshabilitado si no puede ser activado (por ejemplo ser selecionado, hacer click en él o aceptar texto de entrada) ni aceptar el foco. El elemento tiene además un estado habilitado en el cual puede ser activado o recibir foco.

```css
/* Selecciona cualquier <input> deshabilitado */
input:disabled {
  background: #ccc;
}
```

## Sintaxis

{{csssyntax}}

## Ejemplo

Este ejemplo muestra un formulario de envío básico. Utiliza el evento [JavaScript](/es/docs/Web/JavaScript) [`change`](/es/docs/Web/Reference/Events/change) para permitir al usuario habilitar / deshabilitar los campos de facturación.

### HTML

```html
<form action="#">
  <fieldset id="shipping">
    <legend>Dirección de Envío</legend>
    <input type="text" placeholder="Nombre" />
    <input type="text" placeholder="Dirección" />
    <input type="text" placeholder="Código postal" />
  </fieldset>
  <br />
  <fieldset id="billing">
    <legend>Dirección de facturación</legend>
    <label for="billing_is_shipping">Igual que la dirección de envío:</label>
    <input type="checkbox" id="billing-checkbox" checked />
    <br />
    <input type="text" placeholder="Nombre" disabled />
    <input type="text" placeholder="Dirección" disabled />
    <input type="text" placeholder="Código postal" disabled />
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
// Esperar a que la página termine de cargarse
document.addEventListener(
  "DOMContentLoaded",
  function () {
    // Adjunte el detector de eventos `change` al checkbox
    document.getElementById("billing-checkbox").onchange = toggleBilling;
  },
  false,
);

function toggleBilling() {
  // Seleccione los campos de texto de facturación
  var billingItems = document.querySelectorAll('#billing input[type="text"]');

  // Alternar los campos de texto de facturación
  for (var i = 0; i < billingItems.length; i++) {
    billingItems[i].disabled = !billingItems[i].disabled;
  }
}
```

### Resultado

{{EmbedLiveSample('Ejemplo', 300, 250)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{Cssxref(":enabled")}}
