---
title: Consejos básicos para formularios
slug: conflicting/Web/Accessibility/ARIA_64707ba1917a56654679cbe273e2f4ea
original_slug: Web/Accessibility/ARIA/forms/Basic_form_hints
---

Cuando se implementan formularios utilizando elementos relacionados con los formularios HTML tradicionales, es importante proveer etiquetas para los controles y explicitamente asociar una etiqueta con su control. Cuando un usuario de lector de pantalla navega una página, el lector de pantalla describirá los controles del formulario. Sin una asociación directa entre el control y su etiqueta, el lector de pantalla no tiene forma de saber que etiqueta es la correcta para el control.

El ejemplo siguiente muestra un formulario sencillo con etiquetas. Note que cada elemento {{ HTMLElement("input") }} tiene un `id`, y cada elemento {{ HTMLElement("label") }} tiene un atributo `for`, indicando el `id` asociado al {{ HTMLElement("input") }}.

```html
<form>
  <ul>
    <li>
      <input id="vino-1" type="checkbox" value="riesling"/>
      <label for="vino-1">Berg Rottland Riesling</label>
    </li>
    <li>
      <input id="vino-2" type="checkbox" value="pinot-blanc"/>
      <label for="vino-2">Pinot Blanc</label>
    </li>
    <li>
      <input id="vino-3" type="checkbox" value="pinot-grigio"/>
      <label for="vino-3">Pinot Grigio</label>
    </li>
    <li>
      <input id="vino-4" type="checkbox" value="gewurztraminer"/>
      <label for="vino-4">Gewürztraminer</label>
    </li>
  </ul>
</form>
```

## Etiquetando con ARIA

El elemento HTML {{ HTMLElement("label") }} es apropiado para elementos relacionados a formularios, pero muchos controles de formulario son implementados como un widget dinámico de JavaScript, utilizando {{ HTMLElement("div") }}s o {{ HTMLElement("span") }}s. [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/), la especificación **Accessible Rich Internet Applications** de W3C's [Web Accessibility Initiative](https://www.w3.org/WAI/), provee el atributo [`aria-labelledby`](https://www.w3.org/TR/2010/WD-wai-aria-20100916/states_and_properties#aria-labelledby) para estos casos.

El siguiente ejemplo muestra un grupo de radio buttons implementado usando una lista no ordenada. Note que en la línea 3, el elemento {{ HTMLElement("ul") }} define el atributo `aria-labelledby` a `etiqueta_rg1`, el `id` de elemento {{ HTMLElement("h3") }} en la línea 1, que es la etiqueta para el grupo de controles radio.

```html
<h3 id="etiqueta_rg1">Opciones para el almuerzo</h3>

<ul class="radiogroup" id="rg1"  role="radiogroup" aria-labelledby="etiqueta_rg1">
  <li id="r1"  tabindex="-1" role="radio" aria-checked="false">
    <img role="presentation" src="radio-unchecked.gif" /> Thai
  </li>
  <li id="r2"  tabindex="-1" role="radio"  aria-checked="false">
    <img role="presentation" src="radio-unchecked.gif" /> Subway
  </li>
  <li id="r3"   tabindex="0" role="radio" aria-checked="true">
    <img role="presentation" src="radio-checked.gif" /> Radio Maria
  </li>
</ul>
```

## Describiendo con ARIA

Los controles de formulario en ocasiones tienen una descripción asociada con ellos, además de la descripción de la etiqueta. ARIA provee el atributo [`aria-describedby`](https://www.w3.org/TR/2010/WD-wai-aria-20100916/states_and_properties#aria-describedby) para directamente asociar la descripción con el control.

El ejemplo siguiente muestra un elemento {{ HTMLElement("button") }} que es descrito por una oración de un diferento elemento {{ HTMLElement("div") }}. El atributo `aria-describedby` en el {{ HTMLElement("button") }} referencia al `id` del {{ HTMLElement("div") }}.

```html
<button aria-describedby="descriptionRevert">Revertir</button>
<div id="descriptionRevert">Revertir deshará cualquier cambio que se haya hecho desde la última que se guardo.</div>
```

> [!NOTE]
> El atributo `aria-describedby` es utilizado para otros própositos además de los controles de formularios.

## Campos requeridos e inválidos

> [!NOTE]
> Ahora que `required` esta disponible para más del 97% de usuarios globalmente, no se recomienda que se use al mismo tiempo `required` y `aria-required`.

Los desarrolladores Web típicamente usan estrategias de presentación para inidicar campos requeridos o inválidos. Tecnologías asistivas (Assistive technologies - ATs) no necesariamente pueden inferir de la presentación. ARIA provee atributos para indicar que controles de formulario son requeridos o inválidos:

- La propiedad [**aria-required**](https://www.w3.org/TR/2010/WD-wai-aria-20100916/states_and_properties#aria-required) puede ser aplicada a un elemento de un formulario para indicar a a una AT que es requerida para completar el formulario.
- El estado [**aria-invalid**](https://www.w3.org/TR/2010/WD-wai-aria-20100916/states_and_properties#aria-invalid) puede ser aplicado programáticamente, para indicar al AT que campos de información tienen información incorrecta para que el usuario sepa que ingresaron información inválida.

El siguiente ejemplo muestra un formulario sencillo con tres campos. En las líneas 4 y 12, los atributos `aria-required` son establecidos a true (en adición a los asteriscos junto a las etiquetas), indicando que los campos de nombre y email son requeridos. La segunda parte del ejemplo, es un fragmento de código de JavaScript que valida el formato del email, y establece el atributo `aria-invalid` del campo email (línea 12 del HTML) de acuerdo al resultado (adicionalmente de cambiar la presentación del elemento).

```html
<form>
  <div>
    <label for="nombre">* Nombre:</label>
    <input type="text" value="nombre" id="nombre" aria-required="true"/>
  </div>
  <div>
    <label for="telefono">Phone:</label>
    <input type="text" value="telefono" id="telefono" aria-required="false"/>
  </div>
  <div>
    <label for="email">* E-mail:</label>
    <input type="text" value="email" id="email" aria-required="true"/>
  </div>
</form>
```

The script that validates the form entry would look something like this:

```js
var validar = function () {
  var elementoEmail = document.getElementById(emailFieldId);
  var esValido = emailValid(formData.email); // regresa verdadero si es válido, de otro modo devuelve falso.

  elementoEmail.setAttribute("aria-invalid", !esValido);
  setElementBorderColour(elementoEmail, esValido); // establece el borde de color rojo si el segundo argumento es falso
};
```

## Ofreciendo Mensajes de Error Útiles

Lea como usar [alertas ARIA para mejorar formularios](/es/docs/Web/Accessibility/ARIA).

Para mayor orientación en el uso de ARIA para la accesibilidad de los formularios, vea el documento [Prácticas de Autoria WAI-ARIA (WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/)).
