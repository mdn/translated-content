---
title: 'Valor del atributo HTML: `<input type="color">`'
short-title: <input type="color">
slug: Web/HTML/Reference/Elements/input/color
l10n:
  sourceCommit: 3944506d4afeeed774687cf3fd950878c6229bbc
---

Los elementos {{HTMLElement("input")}} de tipo **`color`** ofrecen un elemento de interfaz que permite especificar un color, ya sea mediante un selector visual de colores o escribiendo el color en un campo de texto con un formato de [valor de color CSS](/es/docs/Web/CSS/Reference/Values/color_value).

La presentación del elemento puede variar considerablemente entre navegadores o plataformas: puede tratarse de un campo de texto básico que valida automáticamente que la información de color se ingrese en el formato correcto, de un selector de color estándar de la plataforma, o de algún tipo de ventana de selector de color personalizada.

{{InteractiveExample("HTML Demo: &lt;input type=&quot;color&quot;&gt;", "tabbed-standard")}}

```html interactive-example
<p>Elige tus colores:</p>

<div>
  <input type="color" id="foreground" name="foreground" value="#e66465" />
  <label for="foreground">Color de primer plano</label>
</div>

<div>
  <input
    type="color"
    id="background"
    name="background"
    value="oklab(50% 0.1 0.1 / 0.5)"
    colorspace="display-p3"
    alpha />
  <label for="background">Color de fondo</label>
</div>
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

## Valor

Un [valor de color CSS](/es/docs/Web/CSS/Reference/Values/color_value).

> [!NOTE]
> Históricamente, solo se permitían colores hexadecimales básicos (sin canal alfa). Ahora se puede usar cualquier formato de color CSS, incluidos los colores con nombre, las notaciones funcionales y los colores hexadecimales con canal alfa. El valor predeterminado es `#000000` (negro) si se omite `value` o si no es válido.

## Atributos adicionales

Además de los [atributos globales](/es/docs/Web/HTML/Reference/Global_attributes) y de los [atributos de input](/es/docs/Web/HTML/Reference/Elements/input#atributos) comunes a todos los elementos {{HTMLElement("input")}}, la entrada `color` también admite los siguientes atributos:

- `alpha` {{experimental_inline}}
  - : Un atributo [booleano](/es/docs/Glossary/Boolean/HTML) que, si está presente, indica que el componente alfa del color puede ser manipulado por el usuario final y que no tiene que ser completamente opaco.

- `colorspace` {{experimental_inline}}
  - : Define el {{glossary("color space", "espacio de color")}} del color y sugiere la interfaz de usuario deseada para el widget selector de color. Los valores {{Glossary("enumerated", "enumerados")}} posibles son:
    - `"limited-srgb"`: El color está en el espacio de color {{glossary("RGB", "sRGB")}}. Esto incluye los valores {{cssxref("color_value/rgb", "rgb()")}}, {{cssxref("color_value/hsl", "hsl()")}}, {{cssxref("color_value/hwb", "hwb()")}} y {{cssxref("hex-color")}}. El valor de color está limitado a 8 bits por componente `r`, `g` y `b`. Este es el valor predeterminado.
    - `"display-p3"`: El [espacio de color Display P3](/es/docs/Glossary/Color_space#espacio_de_color_display-p3), por ejemplo, `color(display-p3 1.84 -0.19 0.72 / 0.6)`

## Uso de las entradas de color

Las entradas de tipo `color` son sencillas, debido al número limitado de atributos que admiten.

### Proporcionar un color predeterminado

Puedes actualizar el ejemplo anterior para definir un valor predeterminado: así, el campo de color aparecerá precargado con ese color, y el selector de color (si lo hay) también se abrirá con ese color preseleccionado.

```html
<input type="color" value="#ff0000" />
<input
  type="color"
  id="body"
  name="body"
  value="oklab(50% 0.1 0.1 / 0.5)"
  colorspace="display-p3"
  alpha />
```

{{EmbedLiveSample("Proporcionar un color predeterminado", 700, 30)}}

Si no especificas un valor, o si el valor no es válido o no es compatible con el navegador, el valor predeterminado será `#000000`, que es negro opaco.

### Llevar un seguimiento de los cambios de color

Al igual que con otros tipos de {{HTMLElement("input")}}, hay dos eventos que puedes usar para detectar cambios en el valor de color: {{domxref("Element/input_event", "input")}} y {{domxref("HTMLElement/change_event", "change")}}. El evento `input` se dispara en el elemento `<input>` cada vez que cambia el color. El evento `change` se dispara cuando se cierra el selector de color. En ambos casos, puedes determinar el nuevo valor del elemento consultando su [`value`](/es/docs/Web/HTML/Reference/Elements/input#value).

Aquí tienes un ejemplo que vigila los cambios del valor de color a lo largo del tiempo:

```js
colorPicker.addEventListener("input", updateFirst);
colorPicker.addEventListener("change", watchColorPicker);

function watchColorPicker(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}
```

### Seleccionar el valor

Cuando un navegador no admite una interfaz de selector de color, su implementación de las entradas de color será un cuadro de texto que valida automáticamente el contenido para asegurarse de que el valor tenga el formato correcto. En este caso, puedes usar el método {{domxref("HTMLInputElement.select", "select()")}} para seleccionar el texto que se encuentra actualmente en el campo de edición.

Si el navegador utiliza en su lugar un selector de color, `select()` no hace nada. Debes tener en cuenta este comportamiento para que tu código pueda responder adecuadamente en ambos casos.

```js
colorPicker.select();
```

## Validación

El valor de una entrada de color se considera no válido si el {{Glossary("user agent", "agente de usuario")}} no puede convertir la entrada del usuario a la notación hexadecimal de siete caracteres en minúsculas. Cuando esto ocurre, se aplica la pseudoclase {{cssxref(":invalid")}} al elemento.

## Ejemplo

Vamos a crear un ejemplo que hace un poco más con la entrada de color: rastrea los eventos {{domxref("HTMLElement/change_event", "change")}} y {{domxref("Element/input_event", "input")}} para tomar el color nuevo y aplicarlo a todos los elementos {{HTMLElement("p")}} del documento.

### HTML

El HTML es bastante sencillo: un par de párrafos con material descriptivo y un {{HTMLElement("input")}} de tipo `color` con el ID `color-picker`, que usaremos para cambiar el color del texto de los párrafos.

```html
<p>
  Un ejemplo que muestra el uso del control
  <code>&lt;input type="color"&gt;</code>.
</p>

<label for="color-picker">Color:</label>
<input type="color" value="#ff0000" id="color-picker" />

<p>
  Observa cómo cambian los colores de los párrafos cuando ajustas el selector de
  color. A medida que realizas cambios en el selector, el color del primer
  párrafo cambia como previsualización (esto usa el evento <code>input</code>).
  Cuando cierras el selector, se dispara el evento <code>change</code> y lo
  detectamos para cambiar todos los párrafos al color seleccionado.
</p>
```

### JavaScript

#### Inicialización

El siguiente código inicializa la entrada de color:

```js
const defaultColor = "#0000ff";
const colorPicker = document.querySelector("#color-picker");
colorPicker.value = defaultColor;
colorPicker.addEventListener("input", updateFirst);
colorPicker.addEventListener("change", updateAll);
colorPicker.select();
```

Esto obtiene una referencia al elemento `<input>` de color en una variable llamada `colorPicker`, y luego asigna a la entrada de color el valor de `defaultColor`. A continuación, se configura el evento {{domxref("Element/input_event", "input")}} de la entrada de color para llamar a nuestra función `updateFirst()`, y el evento {{domxref("HTMLElement/change_event", "change")}} se configura para llamar a `updateAll()`. Ambos se muestran a continuación.

Por último, llamamos a {{domxref("HTMLInputElement.select", "select()")}} para seleccionar el contenido de texto de la entrada de color en caso de que el control esté implementado como un campo de texto (esto no tiene ningún efecto si en su lugar se ofrece una interfaz de selector de color).

#### Reaccionar a cambios de color

Proporcionamos dos funciones que se encargan de los cambios de color. La función `updateFirst()` se llama en respuesta al evento `input`. Esta cambia el color del primer elemento de párrafo del documento para que coincida con el nuevo valor de la entrada de color. Como los eventos `input` se disparan cada vez que se realiza un ajuste al valor (por ejemplo, si aumenta el brillo del color), esto sucederá repetidamente mientras se usa el selector de color.

```js
function updateFirst(event) {
  const p = document.querySelector("p");
  if (p) {
    p.style.color = event.target.value;
  }
}
```

Cuando se cierra el selector de color, lo que indica que el valor ya no cambiará más (a menos que se vuelva a abrir el selector), se envía un evento `change` al elemento. Manejamos ese evento con la función `updateAll()`, usando [`Event.target.value`](/es/docs/Web/HTML/Reference/Elements/input#value) para obtener el color final seleccionado:

```js
function updateAll(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}
```

Esto define el color de cada bloque {{HTMLElement("p")}} para que su propiedad {{cssxref("color")}} coincida con el valor actual de la entrada de color, al cual se hace referencia mediante {{domxref("Event.target", "event.target")}}.

### Resultado

El resultado final es el siguiente:

{{EmbedLiveSample("Ejemplo", 700, 200)}}

## Resumen técnico

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#valor">Valor</a></strong></td>
      <td>
        Cualquier valor CSS {{cssxref("&lt;color&gt;")}} en cualquier notación.
      </td>
    </tr>
    <tr>
      <td><strong>Eventos</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}} e
        {{domxref("Element/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>Atributos comunes admitidos</strong></td>
      <td>
        <a href="/es/docs/Web/HTML/Reference/Elements/input#autocomplete"><code>autocomplete</code></a> y
        <a href="/es/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>Atributos IDL</strong></td>
      <td>
        <a href="/es/docs/Web/API/HTMLInputElement/alpha"><code>alpha</a></code>,
        <a href="/es/docs/Web/API/HTMLInputElement/colorSpace"><code>colorSpace</code></a>,
        <a href="/es/docs/Web/API/HTMLInputElement/list"><code>list</code></a> y
        <a href="/es/docs/Web/API/HTMLInputElement/value"><code>value</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>Interfaz DOM</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>Rol ARIA implícito</strong></td>
      <td><a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">sin rol correspondiente</a></td>
    </tr>
  </tbody>
</table>

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{domxref('HTMLInputElement.alpha')}}
- {{domxref('HTMLInputElement.colorspace')}}
