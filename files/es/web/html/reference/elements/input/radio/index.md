---
title: <input type="radio">
slug: Web/HTML/Reference/Elements/input/radio
original_slug: Web/HTML/Element/input/radio
---

{{HTMLSidebar}}

Los elementos {{htmlelement("input")}} de tipo **`radio`** se utilizan generalmente en **grupos de radio**: colecciones de botones de radio que describen un conjunto de opciones relacionadas.

Solo un botón de radio en un grupo dado puede estar seleccionado al mismo tiempo. Los botones de radio generalmente se representan como pequeños círculos, que se rellenan o resaltan cuando están seleccionados.

{{InteractiveExample("HTML Demo: &lt;input type=&quot;radio&quot;&gt;", "tabbed-standard")}}

```html interactive-example
<fieldset>
  <legend>Select a maintenance drone:</legend>

  <div>
    <input type="radio" id="huey" name="drone" value="huey" checked />
    <label for="huey">Huey</label>
  </div>

  <div>
    <input type="radio" id="dewey" name="drone" value="dewey" />
    <label for="dewey">Dewey</label>
  </div>

  <div>
    <input type="radio" id="louie" name="drone" value="louie" />
    <label for="louie">Louie</label>
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

Se llaman botones de radio porque se parecen y funcionan de manera similar a los botones de las radios antiguas, como el que se muestra a continuación.

![Muestra cómo eran los botones de radio en los viejos tiempos.](old-radio.jpg)

> [!NOTE]
> Las [casillas de verificación](/es/docs/Web/HTML/Reference/Elements/input/checkbox) son similares a los botones de radio, pero con una distinción importante: los botones de radio están diseñados para seleccionar un valor de un conjunto, mientras que las casillas de verificación permiten activar o desactivar valores individuales. Donde existen múltiples controles, los botones de radio permiten seleccionar solo uno, mientras que las casillas de verificación permiten seleccionar múltiples valores.

## Valor

El atributo `value` es una cadena de texto que contiene el valor del botón de radio. Este valor nunca se muestra al usuario por su {{Glossary("user agent")}}. En su lugar, se utiliza para identificar qué botón de radio en un grupo está seleccionado.

### Definir un grupo de radio

Un grupo de radio se define asignando a cada botón de radio del grupo el mismo [`name`](/es/docs/Web/HTML/Reference/Elements/input#name). Una vez establecido un grupo, al seleccionar cualquier botón de radio en ese grupo, automáticamente se deselecciona cualquier otro botón de radio actualmente seleccionado en el mismo grupo.

Puedes tener tantos grupos de radio en una página como desees, siempre que cada uno tenga un `name` único.

Por ejemplo, si tu formulario necesita preguntar al usuario su método de contacto preferido, podrías crear tres botones de radio, cada uno con la propiedad `name` configurada como `contact`, pero con un valor `email`, otro con `phone` y otro con `mail`. El usuario nunca ve el `value` o el `name` (a menos que incluyas código específicamente para mostrarlo).

El HTML resultante se ve así:

```html
<form>
  <fieldset>
    <legend>Por favor, selecciona tu método de contacto preferido:</legend>
    <div>
      <input type="radio" id="contactChoice1" name="contact" value="email" />
      <label for="contactChoice1">Correo electrónico</label>

      <input type="radio" id="contactChoice2" name="contact" value="phone" />
      <label for="contactChoice2">Teléfono</label>

      <input type="radio" id="contactChoice3" name="contact" value="mail" />
      <label for="contactChoice3">Correo postal</label>
    </div>
    <div>
      <button type="submit">Enviar</button>
    </div>
  </fieldset>
</form>
```

Aquí ves los tres botones de radio, cada uno con el `name` configurado como `contact` y cada uno con un `value` único que identifica ese botón de radio dentro del grupo. También tienen un {{domxref("Element.id", "id")}} único, que es utilizado por el atributo [`for`](/es/docs/Web/HTML/Reference/Elements/label#for) del {{HTMLElement("label")}} para asociar las etiquetas con los botones de radio.

Puedes probar este ejemplo aquí:

{{EmbedLiveSample('Defining_a_radio_group', 600, 130)}}

### Representación de datos de un grupo de radio

Cuando se envía el formulario anterior con un botón de radio seleccionado, los datos del formulario incluyen una entrada en el formato `contact=value`. Por ejemplo, si el usuario selecciona el botón de radio "Teléfono" y envía el formulario, los datos incluirán la línea `contact=phone`.

Si omites el atributo `value` en el HTML, los datos enviados asignan el valor `on` al grupo. En este caso, si el usuario selecciona la opción "Teléfono" y envía el formulario, los datos resultantes del formulario serían `contact=on`, lo cual no es útil. Así que no olvides configurar tus atributos `value`.

> [!NOTE]
> Si no se selecciona ningún botón de radio cuando se envía el formulario, el grupo de radio no se incluye en los datos enviados, ya que no hay ningún valor que reportar.

Es bastante inusual querer permitir que se envíe un formulario sin que ningún botón de radio en un grupo esté seleccionado, por lo que generalmente es aconsejable que uno esté en estado `checked` por defecto. Consulta [Seleccionar un botón de radio por defecto](#seleccionar_un_botón_de_radio_por_defecto) a continuación.

Añadamos un poco de código a nuestro ejemplo para examinar los datos generados por este formulario. El HTML se revisa para agregar un bloque {{HTMLElement("pre")}} donde se mostrará la salida de los datos del formulario:

```html
<form>
  <fieldset>
    <legend>Por favor, selecciona tu método de contacto preferido:</legend>
    <div>
      <input type="radio" id="contactChoice1" name="contact" value="email" />
      <label for="contactChoice1">Correo electrónico</label>
      <input type="radio" id="contactChoice2" name="contact" value="phone" />
      <label for="contactChoice2">Teléfono</label>
      <input type="radio" id="contactChoice3" name="contact" value="mail" />
      <label for="contactChoice3">Correo postal</label>
    </div>
    <div>
      <button type="submit">Enviar</button>
    </div>
  </fieldset>
</form>
<pre id="log"></pre>
```

Luego agregamos un poco de [JavaScript](/es/docs/Web/JavaScript) para configurar un listener de eventos en el evento {{domxref("HTMLFormElement/submit_event", "submit")}}, que se envía cuando el usuario hace clic en el botón "Enviar":

```js
const form = document.querySelector("form");
const log = document.querySelector("#log");

form.addEventListener(
  "submit",
  (event) => {
    const data = new FormData(form);
    let output = "";
    for (const entry of data) {
      output = `${output}${entry[0]}=${entry[1]}\r`;
    }
    log.innerText = output;
    event.preventDefault();
  },
  false,
);
```

Prueba este ejemplo y observa cómo nunca hay más de un resultado para el grupo `contact`.

{{EmbedLiveSample("Data_representation_of_a_radio_group", 600, 130)}}

## Atributos adicionales

Además de los atributos comunes compartidos por todos los elementos {{HTMLElement("input")}}, los inputs `radio` admiten los siguientes atributos:

- `checked`
  - : Un atributo booleano que, si está presente, indica que este botón de radio es el predeterminado seleccionado en el grupo.

    A diferencia de otros navegadores, Firefox por defecto [persiste el estado dinámico seleccionado](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) de un `<input>` entre cargas de página. Usa el atributo [`autocomplete`](/es/docs/Web/HTML/Reference/Elements/input#autocomplete) para controlar esta función.

- `value`
  - : El atributo `value` es compartido por todos los {{HTMLElement("input")}}; sin embargo, tiene un propósito especial para inputs de tipo `radio`: cuando se envía un formulario, solo se envían al servidor los botones de radio que están actualmente seleccionados, y el valor informado es el valor del atributo `value`. Si no se especifica un `value`, su valor predeterminado es la cadena `on`. Esto se demuestra en la sección [Valor](#value) anterior.

- [`required`](/es/docs/Web/HTML/Attributes/required)
  - : El atributo `required` es compartido por la mayoría de los {{HTMLElement("input")}}. Si cualquier botón de radio en un grupo con el mismo nombre tiene el atributo `required`, un botón de ese grupo debe estar seleccionado, aunque no tiene que ser necesariamente el que tiene aplicado el atributo.

## Uso de inputs de tipo radio

Ya hemos cubierto los fundamentos de los botones de radio anteriormente. Ahora veamos otras características y técnicas comunes relacionadas con los botones de radio que pueden ser necesarias conocer.

### Seleccionar un botón de radio por defecto

Para hacer que un botón de radio esté seleccionado por defecto, incluye el atributo `checked`, como se muestra en esta versión revisada del ejemplo anterior:

```html
<form>
  <fieldset>
    <legend>Por favor, selecciona tu método de contacto preferido:</legend>
    <div>
      <input
        type="radio"
        id="contactChoice1"
        name="contact"
        value="email"
        checked />
      <label for="contactChoice1">Correo electrónico</label>

      <input type="radio" id="contactChoice2" name="contact" value="phone" />
      <label for="contactChoice2">Teléfono</label>

      <input type="radio" id="contactChoice3" name="contact" value="mail" />
      <label for="contactChoice3">Correo postal</label>
    </div>
    <div>
      <button type="submit">Enviar</button>
    </div>
  </fieldset>
</form>
```

{{EmbedLiveSample('Selecting_a_radio_button_by_default', 600, 130)}}

En este caso, el primer botón de radio ahora está seleccionado por defecto.

> [!NOTE]
> Si incluyes el atributo `checked` en más de un botón de radio, las instancias posteriores sobrescribirán a las anteriores; es decir, el último botón de radio con `checked` será el que esté seleccionado. Esto se debe a que solo un botón de radio en un grupo puede estar seleccionado al mismo tiempo, y el agente de usuario deselecciona automáticamente los demás cada vez que uno nuevo se marca como seleccionado.

### Proporcionar una área de clic más grande para los botones de radio

En los ejemplos anteriores, habrás notado que puedes seleccionar un botón de radio haciendo clic en su elemento {{htmlelement("label")}} asociado, además de en el propio botón de radio. Esto es una característica realmente útil de las etiquetas de formularios HTML que facilita a los usuarios seleccionar la opción deseada, especialmente en dispositivos de pantalla pequeña como smartphones.

Más allá de la accesibilidad, esta es otra buena razón para configurar adecuadamente los elementos `<label>` en tus formularios.

## Validación

En el caso de un botón de radio con el atributo [`required`](/es/docs/Web/HTML/Attributes/required) configurado, o un grupo de botones de radio con el mismo nombre donde al menos uno tiene `required`, se necesita seleccionar un botón para que el control sea considerado válido. Si no se selecciona ningún botón, la propiedad [`valueMissing`](/es/docs/Web/API/ValidityState/valueMissing) del objeto {{domxref("ValidityState")}} devolverá `true` durante la validación, y el navegador pedirá al usuario que seleccione una opción.

## Estilando botones de radio

El siguiente ejemplo muestra una versión más completa del ejemplo presentado a lo largo del artículo, con un estilo adicional y mejor semántica gracias al uso de elementos especializados. El HTML se ve así:

```html
<form>
  <fieldset>
    <legend>Por favor, selecciona tu método de contacto preferido:</legend>
    <div>
      <input
        type="radio"
        id="contactChoice1"
        name="contact"
        value="email"
        checked />
      <label for="contactChoice1">Correo electrónico</label>

      <input type="radio" id="contactChoice2" name="contact" value="phone" />
      <label for="contactChoice2">Teléfono</label>

      <input type="radio" id="contactChoice3" name="contact" value="mail" />
      <label for="contactChoice3">Correo postal</label>
    </div>
    <div>
      <button type="submit">Enviar</button>
    </div>
  </fieldset>
</form>
```

El CSS usado en este ejemplo es más detallado:

```css
html {
  font-family: sans-serif;
}

div:first-of-type {
  display: flex;
  align-items: flex-start;
  margin-bottom: 5px;
}

label {
  margin-right: 15px;
  line-height: 32px;
}

input {
  appearance: none;

  border-radius: 50%;
  width: 16px;
  height: 16px;

  border: 2px solid #999;
  transition: 0.2s all linear;
  margin-right: 5px;

  position: relative;
  top: 4px;
}

input:checked {
  border: 6px solid black;
}

button,
legend {
  color: white;
  background-color: black;
  padding: 5px 10px;
  border-radius: 0;
  border: 0;
  font-size: 14px;
}

button:hover,
button:focus {
  color: #999;
}

button:active {
  background-color: white;
  color: black;
  outline: 1px solid black;
}
```

Lo más notable aquí es el uso de la propiedad [appearance](/es/docs/Web/CSS/appearance) (con prefijos necesarios para algunos navegadores). Por defecto, los botones de radio (y las [casillas de verificación](/es/docs/Web/HTML/Reference/Elements/input/checkbox)) tienen un estilo proporcionado por el sistema operativo. Al especificar `appearance: none`, se elimina el estilo nativo, permitiendo crear un diseño personalizado. Aquí se utilizó [border](/es/docs/Web/CSS/border), [border-radius](/es/docs/Web/CSS/border-radius) y [transition](/es/docs/Web/CSS/transition) para crear una animación agradable al seleccionar un botón de opción. Observe también cómo se utiliza la pseudo-clase [:checked](/es/docs/Web/CSS/:checked) para aplicar estilos específicos cuando el botón está seleccionado.

> [!NOTE]
> Si deseas usar la propiedad [appearance](/es/docs/Web/CSS/appearance), prueba cuidadosamente en distintos navegadores. Aunque es compatible con la mayoría de los navegadores modernos, su implementación varía. En navegadores antiguos, incluso el valor `none` puede no comportarse de forma consistente, y algunos no la soportan en absoluto. Las diferencias son menores en los navegadores más recientes.

{{EmbedLiveSample('Styling_radio_inputs', 600, 120)}}

Observa que al hacer clic en un botón de radio, hay un agradable y suave efecto de desvanecimiento al cambiar de estado entre los botones. Además, el estilo y los colores de la leyenda y el botón de envío están personalizados para tener un fuerte contraste. Esto puede no ser un diseño ideal para una aplicación web real, pero definitivamente muestra las posibilidades.

### Resumen técnico

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Valor</a></strong></td>
      <td>
        Una cadena que representa el valor del botón de radio.
      </td>
    </tr>
    <tr>
      <td><strong>Eventos</strong></td>
      <td>{{domxref("HTMLElement/change_event", "change")}} y {{domxref("Element/input_event", "input")}}</td>
    </tr>
    <tr>
      <td><strong>Atributos comunes soportados</strong></td>
      <td>
        <code><a href="#checked">checked</a></code
        >, <code><a href="#value">value</a></code> y
        <code
          ><a href="/es/docs/Web/HTML/Attributes/required">required</a></code
        >
      </td>
    </tr>
    <tr>
      <td><strong>Atributos IDL</strong></td>
      <td><code>checked</code> y <code>value</code></td>
    </tr>
    <tr>
      <td><strong>Interfaz DOM</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>Métodos</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}}
      </td>
    </tr>
     <tr>
      <td><strong>Rol ARIA implícito</strong></td>
      <td>
        <code><a href="/es/docs/Web/Accessibility/ARIA/Roles/radio_role">radio</a></code>
      </td>
    </tr>
  </tbody>
</table>

### Especificaciones

{{Specifications}}

### Compatibilidad con los navegadores

{{Compat}}

### Véase también

- Elemento {{HTMLElement("input")}} y la interfaz {{domxref("HTMLInputElement")}} que lo implementa.
- {{domxref("RadioNodeList")}}: la interfaz que describe una lista de botones de opción.
- [Compatibilidad de propiedades CSS](/es/docs/Learn/Forms/Property_compatibility_table_for_form_controls).
