---
title: 'Valor del atributo HTML: `<input type="checkbox">`'
short-title: <input type="checkbox">
slug: Web/HTML/Reference/Elements/input/checkbox
l10n:
  sourceCommit: 3944506d4afeeed774687cf3fd950878c6229bbc
---

Los elementos {{htmlelement("input")}} de tipo **`checkbox`** se muestran por defecto como casillas que se marcan al activarse, como las que podrías ver en un formulario oficial del gobierno.. La apariencia exacta depende de la configuración del sistema operativo en el que se ejecuta el navegador. Generalmente, es un cuadrado, pero puede tener las esquinas redondeadas. Una casilla de verificación te permite seleccionar valores individuales para enviar (o no) en un formulario.

{{InteractiveExample("HTML Demo: &lt;input type=&quot;checkbox&quot;&gt;", "tabbed-standard")}}

```html interactive-example
<fieldset>
  <legend>Elige las características de tu monstruo:</legend>

  <div>
    <input type="checkbox" id="scales" name="scales" checked />
    <label for="scales">Escamas</label>
  </div>

  <div>
    <input type="checkbox" id="horns" name="horns" />
    <label for="horns">Cuernos</label>
  </div>
</fieldset>
```

```css interactive-example
p,
label {
  font:
    1rem "Fira Sans",
    sans-serif;
}

input {
  margin: 0.4rem;
}
```

> [!NOTE]
> Los [botones de radio](/es/docs/Web/HTML/Reference/Elements/input/radio) son similares a las casillas de verificación, pero con una distinción importante: los [botones de radio del mismo nombre](/es/docs/Web/HTML/Reference/Elements/input/radio#definir_un_grupo_de_radio) se agrupan en un conjunto en el que solo se puede seleccionar un botón de radio a la vez, mientras que las casillas de verificación te permiten activar o desactivar valores individuales. Cuando existen varios controles con el mismo nombre, los botones de radio permiten seleccionar solo uno de todos ellos, mientras que las casillas de verificación permiten seleccionar varios valores.

## Valor

Una cadena que representa el valor de la casilla de verificación. Esto no se muestra en el lado del cliente, pero en el servidor es el `value` que se envía junto con el `name` de la casilla de verificación. Ve el siguiente ejemplo:

```html
<form>
  <div>
    <input
      type="checkbox"
      id="subscribeNews"
      name="subscribe"
      value="newsletter" />
    <label for="subscribeNews">¿Suscribirse al boletín?</label>
  </div>
  <div>
    <button type="submit">Suscribirse</button>
  </div>
</form>
```

En este ejemplo, tenemos un `name` de `subscribe` y un `value` de `newsletter`. Cuando se envía el formulario, el par nombre/valor de los datos será `subscribe=newsletter`.

Si se omite el atributo `value`, el valor predeterminado para la casilla de verificación es `on`, por lo que los datos enviados en ese caso serían `subscribe=on`.

> [!NOTE]
> Si una casilla de verificación no está marcada al enviar su formulario, ni el nombre ni el valor se envían al servidor. No existe ningún método exclusivo de HTML para representar el estado sin marcar de una casilla de verificación (por ejemplo, `value=unchecked`). Si quisieras enviar un valor predeterminado para la casilla de verificación cuando no está marcada, podrías incluir JavaScript para crear un {{HTMLElement("input/hidden", '&lt;input type="hidden"&gt;')}} dentro del formulario, con un valor que indique el estado sin marcar.

## Atributos adicionales

Además de los [atributos comunes](/es/docs/Web/HTML/Reference/Elements/input#atributos) que comparten todos los elementos {{HTMLElement("input")}}, los campos de tipo `checkbox` admiten los siguientes atributos.

- `checked`
  - : Un atributo [booleano](/es/docs/Glossary/Boolean/HTML) que indica si esta casilla de verificación está marcada de forma predeterminada (cuando se carga la página). _No_ indica si esta casilla de verificación está marcada actualmente: si se cambia el estado de la casilla de verificación, este atributo de contenido no refleja el cambio. (Solo se actualiza el atributo IDL `checked` de {{domxref("HTMLInputElement")}}).
    > [!NOTE]
    > A diferencia de otros controles de entrada, el valor de una casilla de verificación solo se incluye en los datos enviados si la casilla de verificación está marcada (`checked`) en ese momento. Si es así, entonces el valor del atributo `value` de la casilla de verificación se informa como el valor de la entrada, o `on` si no se establece ningún `value`.
    > A diferencia de otros navegadores, Firefox conserva de forma predeterminada [el estado dinámico de marcado](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) de un `<input>` entre distintas cargas de página. Usa el atributo [`autocomplete`](/es/docs/Web/HTML/Reference/Elements/input#autocomplete) para controlar esta característica.

- `value`
  - : El atributo `value` es común a todos los elementos {{HTMLElement("input")}}; sin embargo, tiene un propósito especial para entradas de tipo `checkbox`: cuando se envía un formulario, solo se envían al servidor las casillas de verificación que están marcadas actualmente, y el valor informado es el valor del atributo `value`. Si el `value` no se especifica de otra manera, su valor predeterminado es la cadena `on`. Esto se demuestra en la sección [Valor](#valor) que vimos anteriormente.

- `switch`
  - : Un atributo [booleano](/es/docs/Glossary/Boolean/HTML) que se aplica únicamente a las entradas de tipo `checkbox`. Cuando está presente, indica que la casilla representa un `switch` de encendido/apagado en lugar de una casilla normal. Esto altera la apariencia del control `checkbox`, pero el comportamiento subyacente sigue siendo el mismo que el de una casilla normal.

    > [!NOTE]
    > Este atributo permite a los agentes de usuario exponer la semántica ARIA de `switch` a las tecnologías de asistencia, sin requerir que los documentos especifiquen explícitamente `role="switch"`. El marcado y la API son similares a los de las casillas de verificación, salvo que la pseudoclase `:indeterminate` nunca coincide.

    > [!WARNING]
    > Este atributo aún es experimental y tiene soporte limitado en el navegador. El atributo se ignora en navegadores no compatibles.

## Uso de las casillas de verificación

Ya cubrimos el uso más básico de las casillas de verificación anteriormente. Veamos ahora otras características y técnicas comunes relacionadas con las casillas de verificación que necesitarás.

### Manejo de múltiples casillas de verificación

El ejemplo que vimos anteriormente solo contenía una casilla de verificación; en situaciones del mundo real, es probable que encuentres varias casillas de verificación. Si no están relacionadas entre sí, puedes tratarlas por separado, como se muestra arriba. Sin embargo, si todas están relacionadas, las cosas no son tan sencillas.

Por ejemplo, en la siguiente demostración se incluyen varias casillas de verificación para permitir al usuario seleccionar sus intereses (consulta la versión completa en la sección [Ejemplos](#ejemplos)).

```html
<fieldset>
  <legend>Elige tus intereses</legend>
  <div>
    <input type="checkbox" id="coding" name="interest" value="coding" />
    <label for="coding">Programación</label>
  </div>
  <div>
    <input type="checkbox" id="music" name="interest" value="music" />
    <label for="music">Música</label>
  </div>
</fieldset>
```

{{EmbedLiveSample('Manejo_de_múltiples_casillas_de_verificación', 600, 100)}}

En este ejemplo verás que le dimos a cada casilla de verificación el mismo `name`. Si ambas casillas están marcadas y luego se envía el formulario, obtendrás una cadena de pares nombre/valor enviada así: `interest=coding&interest=music`. Cuando esta cadena llega al servidor, debes analizarla de una forma distinta a un array asociativo, para capturar todos los valores de `interest`, no solo el último. Para conocer una técnica utilizada con Python, consulta [Handle Multiple Checkboxes with a Single Serverside Variable](https://stackoverflow.com/questions/18745456/handle-multiple-checkboxes-with-a-single-serverside-variable).

### Marcar casillas de forma predeterminada

Para hacer que una casilla esté marcada de forma predeterminada, agrégale el atributo `checked`. Ve el siguiente ejemplo:

```html
<fieldset>
  <legend>Elige tus intereses</legend>
  <div>
    <input type="checkbox" id="coding" name="interest" value="coding" checked />
    <label for="coding">Programación</label>
  </div>
  <div>
    <input type="checkbox" id="music" name="interest" value="music" />
    <label for="music">Música</label>
  </div>
</fieldset>
```

{{EmbedLiveSample('Marcar_casillas_de_forma_predeterminada', 600, 100)}}

### El switch como casilla de verificación

El siguiente ejemplo muestra cómo hacer que una casilla de verificación se vea y se comporte como un interruptor de encendido/apagado.

```html
<form>
  <fieldset>
    <legend>Ajusta tu configuración</legend>
    <div>
      <label for="theme">Modo oscuro</label>
      <input type="checkbox" name="theme" id="theme" switch checked />
    </div>
    <div>
      <label for="notifications">Notificaciones</label>
      <input type="checkbox" name="notifications" id="notifications" switch />
    </div>
    <button type="submit">Enviar</button>
  </fieldset>
</form>
```

> [!NOTE]
> Aunque solo algunos navegadores representan la casilla como un interruptor, el comportamiento es el mismo en todos los navegadores.

{{EmbedLiveSample('El_switch_como_casilla_de_verificación', 600, 100)}}

### Proporcionar un área de clic más grande para tus casillas

En los ejemplos anteriores, es posible que hayas notado que puedes alternar una casilla de verificación haciendo clic en su elemento asociado {{htmlelement("label")}}, así como en la casilla de verificación misma. Esta es una característica muy útil de las etiquetas de formulario en HTML, ya que facilita hacer clic en la opción que quieres, especialmente en dispositivos de pantalla pequeña como teléfonos inteligentes.

Más allá de la accesibilidad, esta es otra buena razón para configurar correctamente los elementos `<label>` en tus formularios.

### Casillas en estado indeterminado

Una casilla de verificación puede estar en un estado **indeterminado**. Esto se establece utilizando la propiedad [`indeterminate`](/es/docs/Web/API/HTMLInputElement/indeterminate) del objeto {{domxref("HTMLInputElement")}}, a través de JavaScript (no se puede establecer utilizando un atributo HTML):

```js
inputInstance.indeterminate = true;
```

Cuando `indeterminate` es `true`, la casilla de verificación tiene una línea horizontal en el cuadro (parece un guion o un signo menos) en lugar de una marca de verificación en la mayoría de los navegadores.

> [!NOTE]
> Este es un cambio puramente visual. No influye en si el `value` de la casilla se usa al enviar el formulario. Eso lo determina el estado `checked`, sin importar el estado `indeterminate`.

No existen muchos casos de uso para esta propiedad. El más común es cuando hay una casilla de verificación disponible que "posee" varias subopciones (que también son casillas de verificación). Si todas las subopciones están marcadas, la casilla propietaria también se marca, y si todas están sin marcar, la casilla propietaria queda sin marcar. Si una o más subopciones tienen un estado distinto de las demás, la casilla propietaria queda en estado indeterminado.

Esto se puede ver en el siguiente ejemplo (gracias a [CSS Tricks](https://css-tricks.com/indeterminate-checkboxes/) por la inspiración). En este ejemplo realizamos un seguimiento de los ingredientes que recopilamos para una receta. Cuando marcas o desmarcas la casilla de un ingrediente, una función de JavaScript verifica la cantidad total de ingredientes marcados:

- Si no hay ninguno marcada, la casilla del nombre de la receta se establece como desmarcada.
- Si se marcan uno o dos, la casilla del nombre de la receta se establece como `indeterminate`.
- Si los tres están marcados, la casilla del nombre de la receta se establece como `checked`.

Entonces, en este caso, el estado `indeterminate` se usa para indicar que ya se comenzó a reunir los ingredientes, pero la receta aún no está completa.

```js live-sample___indeterminate_state
const overall = document.querySelector("#enchantment");
const ingredients = document.querySelectorAll("ul input");

overall.addEventListener("click", (e) => {
  e.preventDefault();
});

for (const ingredient of ingredients) {
  ingredient.addEventListener("click", updateDisplay);
}

function updateDisplay() {
  let checkedCount = 0;
  for (const ingredient of ingredients) {
    if (ingredient.checked) {
      checkedCount++;
    }
  }

  if (checkedCount === 0) {
    overall.checked = false;
    overall.indeterminate = false;
  } else if (checkedCount === ingredients.length) {
    overall.checked = true;
    overall.indeterminate = false;
  } else {
    overall.checked = false;
    overall.indeterminate = true;
  }
}
```

```html live-sample___indeterminate_state
<form>
  <fieldset>
    <legend>Completa la receta</legend>
    <div>
      <input type="checkbox" id="enchantment" name="enchantment" />
      <label for="enchantment">Mesa de encantamientos</label>
      <ul>
        <li>
          <input type="checkbox" id="book" name="ingredient" value="book" />
          <label for="book">Libro</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="diamonds"
            name="ingredient"
            value="diamonds" />
          <label for="diamonds">Diamantes (x2)</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="obsidian"
            name="ingredient"
            value="obsidian" />
          <label for="obsidian">Obsidiana (x4)</label>
        </li>
      </ul>
    </div>
  </fieldset>
</form>
```

{{EmbedLiveSample("indeterminate_state", "", 200)}}

## Validación

Las casillas de verificación admiten [validación](/es/docs/Web/HTML/Guides/Constraint_validation) (disponible para todos los elementos {{HTMLElement("input")}}). Sin embargo, la mayoría de los {{domxref("ValidityState")}} siempre serán `false`. Si la casilla tiene el atributo [`required`](/es/docs/Web/HTML/Reference/Elements/input#required) pero no está marcada, entonces {{domxref("ValidityState.valueMissing")}} será `true`.

## Ejemplos

El siguiente ejemplo es una versión extendida del ejemplo de "múltiples casillas de verificación" que vimos antes: incluye más opciones estándar, además de una casilla "otro" que, al marcarla, hace aparecer un campo de texto para ingresar un valor para la opción "otro". Esto se logra con un pequeño bloque de JavaScript. El ejemplo incluye etiquetas implícitas, con el `<input>` ubicado directamente dentro del `<label>`. El campo de texto, que no tiene una etiqueta visible, incluye el atributo [`aria-label`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), que le da su nombre accesible. Este ejemplo también incluye algo de CSS para mejorar el estilo.

### HTML

```html
<form>
  <fieldset>
    <legend>Elige tus intereses</legend>
    <div>
      <label>
        <input type="checkbox" id="coding" name="interest" value="coding" />
        Programación
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" id="music" name="interest" value="music" />
        Música
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" id="art" name="interest" value="art" />
        Arte
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" id="sports" name="interest" value="sports" />
        Deportes
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" id="cooking" name="interest" value="cooking" />
        Cocina
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" id="other" name="interest" value="other" />
        Otro
      </label>
      <input
        type="text"
        id="otherValue"
        name="other"
        aria-label="Otro interés" />
    </div>
    <div>
      <button type="submit">Enviar formulario</button>
    </div>
  </fieldset>
</form>
```

### CSS

```css
html {
  font-family: sans-serif;
}

form {
  width: 600px;
  margin: 0 auto;
}

div {
  margin-bottom: 10px;
}

fieldset {
  background: cyan;
  border: 5px solid blue;
}

legend {
  padding: 10px;
  background: blue;
  color: cyan;
}
```

### JavaScript

```js
const otherCheckbox = document.querySelector("#other");
const otherText = document.querySelector("#otherValue");
otherText.style.visibility = "hidden";

otherCheckbox.addEventListener("change", () => {
  if (otherCheckbox.checked) {
    otherText.style.visibility = "visible";
    otherText.value = "";
  } else {
    otherText.style.visibility = "hidden";
  }
});
```

{{EmbedLiveSample('Ejemplos', '100%', 300)}}

## Resumen técnico

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#valor">Valor</a></strong></td>
      <td>
        Una cadena que representa el valor de la
        casilla de verificación.
      </td>
    </tr>
    <tr>
      <td><strong>Eventos</strong></td>
      <td>{{domxref("HTMLElement/change_event", "change")}} y {{domxref("Element/input_event", "input")}}</td>
    </tr>
    <tr>
      <td><strong>Atributos comunes admitidos</strong></td>
      <td>
        <code><a href="#checked">checked</a></code> y
        <code><a href="#switch">switch</a></code>
      </td>
    </tr>
    <tr>
      <td><strong>Atributos IDL</strong></td>
      <td>
        <code><a href="/es/docs/Web/API/HTMLInputElement/checked">checked</a></code>,
        <code><a href="/es/docs/Web/API/HTMLInputElement/indeterminate">indeterminate</a></code> y
        <code><a href="/es/docs/Web/API/HTMLInputElement/value">value</a></code>
      </td>
    </tr>
    <tr>
      <td><strong>Interfaz DOM</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>Rol ARIA implícito</strong></td>
      <td><a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role"><code>checkbox</code></a></td>
    </tr>
  </tbody>
</table>

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: Selectores CSS que te permiten aplicar estilos a las casillas de verificación según su estado actual
- {{domxref("HTMLInputElement")}}: API DOM HTML que implementa el elemento `<input>`
