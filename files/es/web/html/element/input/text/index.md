---
title: <input type="text">
slug: Web/HTML/Element/input/text
---

{{HTMLSidebar}}

Los elementos {{HTMLElement("input")}} de tipo `text` crean campos de texto básicos de una sola línea.

{{EmbedInteractiveExample("pages/tabbed/input-text.html", "tabbed-shorter")}}

La fuente de este ejemplo interactivo se almacena en un repositorio de GitHub. Si deseas contribuir al proyecto de ejemplos interactivos, clona <https://github.com/mdn/interactive-examples> y envíanos una solicitud de extracción.

<table class="properties">
  <tbody>
    <tr>
      <td>
        <strong><a href="#value">Value</a></strong>
      </td>
      <td>
        Un {{DOMxRef("DOMString")}} que representa el texto contenido en
        el campo de texto.
      </td>
    </tr>
    <tr>
      <td><strong>Eventos</strong></td>
      <td>[`change`](/es/docs/Web/Reference/Events/change) y [`input`](/es/docs/Web/Reference/Events/input)</td>
    </tr>
    <tr>
      <td><strong>Atributos comunes admitidos</strong></td>
      <td>
        <a href="/es/docs/Web/HTML/Element/input#autocomplete"><code>autocomplete</code></a>,
        <a href="/es/docs/Web/HTML/Element/input#list"><code>list</code></a>,
        <a href="/es/docs/Web/HTML/Element/input#maxlength"><code>maxlength</code></a>,
        <a href="/es/docs/Web/HTML/Element/input#minlength"><code>minlength</code></a>,
        <a href="/es/docs/Web/HTML/Element/input#pattern"><code>pattern</code></a>,
        <a href="/es/docs/Web/HTML/Element/input#placeholder"><code>placeholder</code></a>,
        <a href="/es/docs/Web/HTML/Element/input#readonly"><code>readonly</code></a>,
        <a href="/es/docs/Web/HTML/Element/input#required"><code>required</code></a> y
        <a href="/es/docs/Web/HTML/Element/input#size"><code>size</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL attributes</strong></td>
      <td>
        <a href="/es/docs/Web/HTML/Element/input#list"><code>list</code></a>,
        <code>value</code>
      </td>
    </tr>
    <tr>
      <td><strong>Métodos</strong></td>
      <td>
        {{DOMxRef("HTMLInputElement.select", "select()")}},
        {{DOMxRef("HTMLInputElement.setRangeText", "setRangeText()")}}
        y
        {{DOMxRef("HTMLInputElement.setSelectionRange", "setSelectionRange()")}}.
      </td>
    </tr>
  </tbody>
</table>

## `Value`

El atributo [`value`](/es/docs/Web/HTML/Element/input#value) es un {{DOMxRef("DOMString")}} que contiene el valor actual del texto ingresado en el campo de texto. Puedes recuperar esto usando la propiedad {{DOMxRef("HTMLInputElement.value", "value")}} en JavaScript.

```js
let theText = myTextInput.value;
```

Si no existen restricciones de validación para la entrada (consulta [Validación](#validación) para obtener más detalles), el valor puede ser una cadena vacía ("").

## Atributos adicionales

Además de los atributos que operan en todos los elementos {{HTMLElement("input")}} independientemente de su tipo, las entradas de texto admiten los siguientes atributos:

| Atributo                      | Descripción                                                                                                                                              |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`list`](#list)               | El id del elemento {{HTMLElement("datalist")}} que contiene las opciones de autocompletar predefinidas                                                   |
| [`maxlength`](#maxlength)     | El número máximo de caracteres que debe aceptar la entrada                                                                                               |
| [`minlength`](#minlength)     | El número mínimo de caracteres que la entrada puede tener y aún se considera válida                                                                      |
| [`pattern`](#pattern)         | Una expresión regular que el contenido de la entrada debe coincidir para que sea válida                                                                  |
| [`placeholder`](#placeholder) | Un valor de ejemplo para mostrar en el campo de entrada siempre y cuando esté vacío                                                                      |
| [`readonly`](#readonly)       | Un atributo booleano que indica si el contenido de la entrada debe ser de solo lectura.                                                                  |
| [`size`](#size)               | Un número que indica cuántos caracteres de ancho debe tener el campo de entrada.                                                                         |
| [`spellcheck`](#spellcheck)   | Controla si se habilita o no la revisión ortográfica para el campo de entrada, o si se debe usar la configuración de revisión ortográfica predeterminada |

### `list`

Los valores del atributo `list` son el {{DOMxRef("Element.id", "id")}} de un elemento {{HTMLElement("datalist")}} ubicado en el mismo documento. El {{HTMLElement("datalist")}} proporciona una lista de valores predefinidos para sugerir al usuario para esta entrada. Cualquier valor de la lista que no sea compatible con [`type`](/es/docs/Web/HTML/Element/input#type) no se incluye en las opciones sugeridas. Los valores proporcionados son sugerencias, no requisitos: los usuarios pueden seleccionar de esta lista predefinida o proporcionar un valor diferente.

### `maxlength`

El número máximo de caracteres (como unidades de código UTF-16) que el usuario puede ingresar en la entrada de `text`. Debe ser un valor entero 0 o superior. Si no se especifica `maxlength`, o se especifica un valor no válido, el `text` de la entrada no tiene una longitud máxima. Este valor también debe ser mayor o igual que el valor de [`minlength`](/es/docs/Web/HTML/Element/input#minlength).

La entrada fallará [restricción de validación](/es/docs/Web/Guide/HTML/HTML5/Constraint_validation) si la longitud del valor de texto del campo es mayor que [`maxlength`](/es/docs/Web/HTML/Element/input#maxlength) Unidades de código UTF-16 de longitud. La validación de la restricción solo se aplica cuando el usuario cambia el valor.

### `minlength`

El número mínimo de caracteres (como unidades de código UTF-16) que el usuario puede ingresar en la entrada de `texto`. Debe ser un valor entero no negativo menor o igual al valor especificado por [`maxlength`](/es/docs/Web/HTML/Element/input#maxlength). Si no se especifica `minlength`, o se especifica un valor no válido, la entrada de `text` no tiene una longitud mínima.

La entrada fallará [restricción de validación](/es/docs/Web/Guide/HTML/HTML5/Constraint_validation) si la longitud del texto ingresado en el campo es menor que `minlength` Unidades de código UTF-16 de longitud. La validación de la restricción solo se aplica cuando el usuario cambia el valor.

### `pattern`

El atributo `pattern`, cuando se especifica, es una expresión regular que el [`value`](/es/docs/Web/HTML/Global_attributes#value) de la entrada debe coincidir para que el valor pase [restricciones de validación](/es/docs/Web/Guide/HTML/HTML5/Constraint_validation). Debe ser una expresión regular de JavaScript válida, como la usada por el tipo {{JSxRef("RegExp")}} y como se documenta en la [guía sobre expresiones regulares](/es/docs/Web/JavaScript/Guide/Regular_Expressions); el indicador `'u'` se especifica al compilar la expresión regular, de modo que el patrón se trata como una secuencia de puntos de código Unicode, en lugar de ASCII. No se deben especificar barras diagonales alrededor del texto del patrón.

Si el patrón especificado no se especifica o no es válido, no se aplica ninguna expresión regular y este atributo se ignora por completo.

> **Nota:** Utiliza el atributo [`title`](/es/docs/Web/HTML/Element/input#title) para especificar el texto que la mayoría de los navegadores mostrarán como información sobre herramientas para explicar cuáles son los requisitos para coincidir con el patrón. También debes incluir otro texto explicativo cercano.

Consulta [Especificación de un patrón](#especificación_de_un_patrón) para obtener más detalles y un ejemplo.

### `placeholder`

El atributo `placeholder` es una cadena que proporciona una breve pista al usuario sobre el tipo de información que se espera en el campo. Debe ser una palabra o frase corta que demuestre el tipo de datos esperado, en lugar de un mensaje explicativo. El texto _no debe_ incluir retornos de carro o saltos de línea.

Si el contenido del control tiene una direccionalidad ({{Glossary("LTR")}} o {{Glossary("RTL")}}) pero necesitas presentar el marcador de posición en la direccionalidad opuesta, puedes usar caracteres de formato de algoritmo bidireccional Unicode para anular la direccionalidad dentro del marcador de posición; consulta [Anulación de BiDi mediante caracteres de control Unicode](/es/docs/Web/Localization/Unicode_Bidirectional_Text_Algorithm#anulación_de_bidi_mediante_caracteres_de_control_unicode) para esos caracteres.

> **Nota:** Evita utilizar el atributo `placeholder` si puedes. No es tan útil semánticamente como otras formas de explicar tu formulario y puede causar problemas técnicos inesperados con tu contenido. Consulta [Etiquetas y marcadores de posición](/es/docs/Web/HTML/Element/input#etiquetas_y_marcadores_de_posición) para obtener más información.

### `readonly`

Un atributo booleano que, si está presente, significa que el usuario no puede editar este campo. Su `value`, sin embargo, aún se puede cambiar mediante el código JavaScript configurando directamente la propiedad {{DOMxRef("HTMLInputElement.value")}}.

> **Nota:** Debido a que un campo de solo lectura no puede tener un valor, `required` no tiene ningún efecto en las entradas con el atributo `readonly` también especificado.

### `size`

El atributo `size` es un valor numérico que indica cuántos caracteres de ancho debe tener el campo de entrada. El valor debe ser un número mayor que cero, y el valor predeterminado es 20. Dado que el ancho de los caracteres varía, esto puede ser exacto o no y no se debe confiar en que lo sea; la entrada resultante puede ser más estrecha o más ancha que el número especificado de caracteres, dependiendo de los caracteres y la fuente (configuración de {{CSSxRef("fuente")}} en uso).

Esto _no_ establece un límite en la cantidad de caracteres que el usuario puede ingresar en el campo. Solo especifica aproximadamente cuántos se pueden ver a la vez. Para establecer un límite superior en la longitud de los datos de entrada, utiliza el atributo [maxlength](#maxlength).

### `spellcheck`

`spellcheck` es un atributo global que se utiliza para indicar si se habilita o no la revisión ortográfica de un elemento. Se puede usar en cualquier contenido editable, pero aquí consideramos los detalles relacionados con el uso del corrector ortográfico ([`spellcheck`](/es/docs/Web/HTML/Global_attributes#spellcheck) en elementos {{HTMLElement("input")}}. Los valores permitidos para el corrección ortográfica son:

- `false`
  - : Desactive la corrección ortográfica de este elemento.
- `true`
  - : Habilita la revisión ortográfica de este elemento.
- "" (cadena vacía) o sin valor
  - : Sigue el comportamiento predeterminado del elemento para la revisión ortográfica. Esto se puede basar en la configuración de la corrección ortográfica de los padres u otros factores.

Un campo de entrada puede tener habilitado el corrector ortográfico si no tiene el atributo [readonly](#readonly) configurado y no está deshabilitado.

Es posible que el valor devuelto al leer el corrector ortográfico puede no reflejar el estado real del corrector ortográfico dentro de un control, si las preferencias de {{Glossary("agente de usuario", "agentes de usuario")}} anulan la configuración.

## Atributos no estándar

Los siguientes atributos no estándar también están disponibles en algunos navegadores. Como regla general, debes evitar usarlos a menos que no puedas evitarlo.

| Atributo                          | Descripción                                                                                                                                                                                                                                                                          |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`autocorrect`](#autocorrect)     | Una cadena que indica si la autocorrección está activa (`on`) o (`off`). **Solo Safari.**                                                                                                                                                                                            |
| [`mozactionhint`](#mozactionhint) | Una cadena que indica el tipo de acción que se realizará cuando el usuario presione la tecla <kbd>Intro</kbd> o <kbd>Retorno</kbd> mientras editas el campo; esto se usa para determinar una etiqueta apropiada para esa tecla en un teclado virtual. **Solo Firefox para Android.** |

### `autocorrect` {{non-standard_inline}}

Una extensión de Safari, el atributo `autocorrect` es una cadena que indica si activar o no la corrección automática mientras el usuario está editando este campo. Los valores permitidos son:

- `on`
  - : Habilita la corrección automática de errores tipográficos, así como el procesamiento de sustituciones de texto, si los hay.
- `off`
  - : Desactiva la corrección automática y las sustituciones de texto.

### `mozactionhint` {{non-standard_inline}}

Una extensión de Mozilla, compatible con Firefox para Android, que proporciona una pista sobre qué tipo de acción se realizará si el usuario presiona la tecla <kbd>Intro</kbd> o <kbd>Retorno</kbd> mientras edita el campo. Esta información se usa para decidir qué tipo de etiqueta usar en la tecla <kbd>Intro</kbd> del teclado virtual.

> **Nota:** Este [se ha estandarizado](https://html.spec.whatwg.org/#input-modalities:-the-enterkeyhint-attribute) como el atributo global [`enterkeyhint`](/es/docs/Web/HTML/Global_attributes#enterkeyhint), pero aún no está ampliamente implementado. Para ver el estado del cambio que se está implementando en Firefox, consulta [Error 1490661 en Firefox](https://bugzil.la/1490661).

Los valores permitidos son: `go`, `done`, `next`, `search` y `send`. El navegador decide, utilizando esta sugerencia, qué etiqueta poner en la tecla Intro.

## Usar entradas de texto

Los elementos {{HTMLElement("input")}} de tipo `text` crean entradas básicas de una sola línea. Los debes usar en cualquier lugar donde desees que el usuario ingrese un valor de una sola línea y no hay un tipo de entrada más específico disponible para recopilar ese valor (por ejemplo, si es un [date](/es/docs/Web/HTML/Element/input/datetime-local), [URL](/es/docs/Web/HTML/Element/input/url), [email](/es/docs/Web/HTML/Element/input/email), o [término de búsqueda](/es/docs/Web/HTML/Element/input/search), tiene mejores opciones disponibles).

### Ejemplo básico

```html
<form>
  <div>
    <label for="uname">Elige un nombre de usuario: </label>
    <input type="text" id="uname" name="name" />
  </div>
  <div>
    <button>Enviar</button>
  </div>
</form>
```

Esto se renderiza así:

{{EmbedLiveSample("Ejemplo_básico", 600, 50)}}

Cuando se envía, el par de nombre/valor de datos enviado al servidor será `uname=Chris` (si se ingresó "Chris" como valor de entrada antes del envío). Debes recordar incluir el atributo [`name`](/es/docs/Web/HTML/Element/input#name) en el elemento {{HTMLElement("input")}}; de lo contrario, el valor del campo de texto no se incluirá con los datos enviados.

### Establecer marcadores de posición

Puedes proporcionar un marcador de posición útil dentro de tu entrada de texto que puede proporcionar una pista sobre qué ingresar al incluir el uso del atributo [`placeholder`](/es/docs/Web/HTML/Element/input#placeholder). Mira el siguiente ejemplo:

```html
<form>
  <div>
    <label for="uname">Elige un nombre de usuario: </label>
    <input
      type="text"
      id="uname"
      name="name"
      placeholder="Una sola palabra, en minúsculas" />
  </div>
  <div>
    <button>Enviar</button>
  </div>
</form>
```

Puedes ver cómo se representa el marcador de posición a continuación:

{{EmbedLiveSample("Establecer_marcadores_de_posición", 600, 50)}}

El marcador de posición generalmente se representa en un color más claro que el color de primer plano del elemento y desaparece automáticamente cuando el usuario comienza a ingresar texto en el campo (o siempre que el campo tiene un valor establecido programáticamente al establecer su atributo `value`.

### Tamaño físico del elemento de entrada

El tamaño físico del cuadro de entrada se puede controlar mediante el atributo [`size`](/es/docs/Web/HTML/Element/input#size). Con él, puedes especificar el número de caracteres que la entrada de texto puede mostrar a la vez. Esto afecta el ancho del elemento, lo cual te permite especificar el ancho en términos de caracteres en lugar de píxeles. En este ejemplo, por ejemplo, la entrada tiene 30 caracteres de ancho:

```html
<form>
  <div>
    <label for="uname">Elige un nombre de usuario: </label>
    <input
      type="text"
      id="uname"
      name="name"
      placeholder="Una sola palabra, en minúsculas"
      size="30" />
  </div>
  <div>
    <button>Enviar</button>
  </div>
</form>
```

{{ EmbedLiveSample('Tamaño_físico_del_elemento_de_entrada', 600, 50) }}

## Validación

Los elementos {{HTMLElement("input")}} de tipo `text` no tienen validación automática aplicada (ya que una entrada de texto básica debe ser capaz de aceptar cualquier cadena arbitraria), pero hay algunas opciones de validación de lado del cliente disponibles, que verás a continuación.

> **Nota:** La validación del formulario HTML _no_ sustituye a la de los scripts del servidor que garantizan que los datos introducidos tengan el formato adecuado. Es demasiado fácil para alguien realizar ajustes en el HTML que le permitan omitir la validación o eliminarla por completo. También es posible que alguien simplemente omita tu HTML por completo y envíe los datos directamente a tu servidor. Si tu código del lado del servidor no valida los datos que recibe, podría ocurrir un desastre cuando se ingresen en tu base de datos datos con formato incorrecto (o datos que son demasiado grandes, son del tipo incorrecto, etc.).

### Una nota sobre estilizado

Hay pseudoclases útiles disponibles para diseñar elementos de formulario para ayudar al usuario a ver cuándo sus valores son válidos o no. Estos son {{CSSxRef(": valid")}} e {{CSSxRef(":invalid")}}. En esta sección, usaremos el siguiente CSS, que colocará una marca de verificación (tilde) junto a las entradas que contienen valores válidos y una cruz (X) junto a las entradas que contienen valores no válidos.

```css
div {
  margin-bottom: 10px;
  position: relative;
}

input + span {
  padding-right: 30px;
}

input:invalid + span:after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}

input:valid + span:after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

La técnica también requiere que se coloque un elemento {{HTMLElement("span")}} después del elemento {{HTMLElement("form")}}, que actúa como contenedor de los iconos. Esto era necesario porque algunos tipos de entrada en algunos navegadores no muestran muy bien los iconos colocados directamente después de ellos.

### Hacer entrada requerida

Puedes usar el atributo [`required`](/es/docs/Web/HTML/Element/input#required) como una manera fácil de hacer que se requiera ingresar un valor antes de que se permita el envío del formulario:

```html
<form>
  <div>
    <label for="uname">Elige un nombre de usuario: </label>
    <input type="text" id="uname" name="name" required />
    <span class="validity"></span>
  </div>
  <div>
    <button>Enviar</button>
  </div>
</form>
```

```css hidden
div {
  margin-bottom: 10px;
  position: relative;
}
input + span {
  padding-right: 30px;
}
input:invalid + span:after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}
input:valid + span:after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

Esto se renderiza así:

{{ EmbedLiveSample('Hacer_entrada_requerida', 600, 70) }}

Si intentas enviar el formulario sin ningún término de búsqueda ingresado, el navegador mostrará un mensaje de error.

### Longitud del valor de entrada

Puedes especificar una longitud mínima (en caracteres) para el valor ingresado usando el atributo [`minlength`](/es/docs/Web/HTML/Element/input#minlength); de manera similar, usa [`maxlength`](/es/docs/Web/HTML/Element/input#maxlength) para establecer la longitud máxima del valor ingresado, en caracteres.

El siguiente ejemplo requiere que el valor ingresado tenga entre 4 y 8 caracteres de longitud.

```html
<form>
  <div>
    <label for="uname">Elige un nombre de usuario: </label>
    <input
      type="text"
      id="uname"
      name="name"
      required
      size="10"
      placeholder="nombreusuario"
      minlength="4"
      maxlength="8" />
    <span class="validity"></span>
  </div>
  <div>
    <button>Enviar</button>
  </div>
</form>
```

```css hidden
div {
  margin-bottom: 10px;
  position: relative;
}
input + span {
  padding-right: 30px;
}
input:invalid + span:after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}
input:valid + span:after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

Esto se renderiza así:

{{ EmbedLiveSample('Longitud_del_valor_de_entrada', 600, 70) }}

Si intentas enviar el formulario con menos de 4 caracteres, se te dará un mensaje de error apropiado (que difiere entre los navegadores). Si intentas ingresar más de 8 caracteres, el navegador no te lo permitirá.

> **Nota:** Si especificas un `minlength` pero no especificas `required`, la entrada se considera válida, ya que no se requiere que el usuario especifique un valor.

### Especificación de un patrón

Puedes utilizar el atributo [`pattern`](/es/docs/Web/HTML/Element/input#pattern) para especificar una expresión regular con la que el valor ingresado debe coincidir para que se considere válido (ve un curso intensivo simple en [Validación con una expresión regular](/es/docs/Learn/HTML/Forms/Form_validation#Validación_con_una_expresión_regular) sobre el uso de expresiones regulares para validar entradas).

El siguiente ejemplo restringe el valor a 4-8 caracteres y requiere que contenga solo letras minúsculas.

```html
<form>
  <div>
    <label for="uname">Elige un nombre de usuario: </label>
    <input
      type="text"
      id="uname"
      name="name"
      required
      size="45"
      pattern="[a-z]{4,8}" />
    <span class="validity"></span>
    <p>
      Los nombres de usuario deben estar en minúsculas y tener entre 4 y 8
      caracteres de longitud.
    </p>
  </div>
  <div>
    <button>Enviar</button>
  </div>
</form>
```

```css hidden
div {
  margin-bottom: 10px;
  position: relative;
}

p {
  font-size: 80%;
  color: #999;
}

input + span {
  padding-right: 30px;
}

input:invalid + span:after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}

input:valid + span:after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

Esto se renderiza así:

{{ EmbedLiveSample('Especificación_de_un_patrón', 600, 110) }}

## Ejemplos

Puedes ver buenos ejemplos de entradas de texto utilizadas en contexto en los artículos [Mi primer formulario HTML](/es/docs/Learn/HTML/Forms/Your_first_HTML_form) y [Cómo estructurar un formulario HTML](/es/docs/Learn/HTML/Forms/How_to_structure_an_HTML_form).

## Especificaciones

{{Specifications}}

## Compatibilidad del navegador

{{Compat}}

## Ve también

- [Formularios HTML](/es/docs/Learn/HTML/Forms)
- {{HTMLElement("input")}} y la interfaz {{DOMxRef("HTMLInputElement")}} en que se basa.
- [`<input type="search">`](/es/docs/Web/HTML/Element/input/search)
- {{HTMLElement("textarea")}}: Campo de entrada de texto multilínea
- [Compatibilidad de propiedades CSS](/es/docs/Learn/HTML/Forms/Property_compatibility_table_for_form_widgets)
