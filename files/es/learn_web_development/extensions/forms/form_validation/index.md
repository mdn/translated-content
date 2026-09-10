---
title: Validación de formularios en el lado del cliente
slug: Learn_web_development/Extensions/Forms/Form_validation
l10n:
  sourceCommit: ce12c10364f35c64184dec44be85537b7e10d91f
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}

Antes de enviar al servidor los datos introducidos por el usuario en un formulario, es importante asegurarse de que todos los controles de formulario obligatorios estén completos y tengan el formato correcto. Esta **validación de formularios en el lado del cliente** ayuda a garantizar que los datos introducidos cumplan los requisitos establecidos en los distintos controles de formulario.

Este artículo te guía a través de los conceptos básicos y ejemplos de validación de formularios en el lado del cliente.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Conocimientos básicos de informática y una comprensión razonable de
        <a href="/es/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/es/docs/Learn_web_development/Core/Styling_basics">CSS</a> y
        <a href="/es/docs/Learn_web_development/Core/Scripting">JavaScript</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Entender qué es la validación de formularios en el lado del cliente, por
        qué es importante y cómo aplicar distintas técnicas para implementarla.
      </td>
    </tr>
  </tbody>
</table>

La validación en el lado del cliente es una comprobación inicial y una característica importante para ofrecer una buena experiencia de usuario; al detectar datos no válidos en el lado del cliente, el usuario puede corregirlos inmediatamente.
Si los datos llegan al servidor y allí se rechazan, se produce un retraso perceptible debido al recorrido de ida y vuelta entre el cliente y el servidor antes de indicar al usuario que debe corregirlos.

Sin embargo, la validación en el lado del cliente _no debe considerarse_ una medida de seguridad exhaustiva. Tus aplicaciones siempre deben validar los datos enviados mediante formularios, incluidas las comprobaciones de seguridad, _en el lado del servidor_, **además de** hacerlo en el lado del cliente, ya que la validación en el lado del cliente es demasiado fácil de eludir y los usuarios malintencionados pueden enviar datos incorrectos al servidor.

> [!NOTE]
> Lee [Seguridad de sitios web](/es/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security) para hacerte una idea de lo que _podría_ ocurrir; implementar la validación en el lado del servidor queda en cierta medida fuera del alcance de este módulo, pero debes tenerla en cuenta.

## ¿Qué es la validación de formularios?

Ve a cualquier sitio web popular que tenga un formulario de registro y observarás que proporciona información cuando no introduces los datos en el formato esperado.
Recibirás mensajes como los siguientes:

- «Este campo es obligatorio» (no puedes dejar este campo en blanco).
- «Introduce tu número de teléfono con el formato xxx-xxxx» (se requiere un formato de datos específico para que se considere válido).
- «Introduce una dirección de correo electrónico válida» (los datos introducidos no tienen el formato correcto).
- «Tu contraseña debe tener entre 8 y 30 caracteres y contener una letra mayúscula, un símbolo y un número» (se requiere un formato de datos muy específico).

Esto se denomina **validación de formularios**.
Cuando introduces datos, el navegador (y el servidor web) comprueba que tengan el formato correcto y que cumplan las restricciones establecidas por la aplicación. La validación realizada en el navegador se denomina validación **en el lado del cliente**, mientras que la realizada en el servidor se denomina validación **en el lado del servidor**.
En este capítulo nos centraremos en la validación en el lado del cliente.

Si la información tiene el formato correcto, la aplicación permite enviar los datos al servidor y, por lo general, guardarlos en una base de datos; si la información no tiene el formato correcto, muestra al usuario un mensaje de error que explica qué debe corregir y le permite intentarlo de nuevo.

Queremos que completar formularios web sea lo más sencillo posible. Entonces, ¿por qué insistimos en validar nuestros formularios?
Hay tres razones principales:

- **Queremos obtener los datos correctos y en el formato correcto.** Nuestras aplicaciones no funcionarán correctamente si los datos de nuestros usuarios se almacenan en un formato incorrecto, son incorrectos o se omiten por completo.
- **Queremos proteger los datos de nuestros usuarios.** Obligar a nuestros usuarios a introducir contraseñas seguras facilita la protección de la información de sus cuentas.
- **Queremos protegernos.** Hay muchas formas en las que usuarios malintencionados pueden utilizar formularios desprotegidos para dañar la aplicación. Consulta [Seguridad de sitios web](/es/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security).

  > [!WARNING]
  > Nunca confíes en los datos enviados al servidor desde el cliente. Incluso si tu formulario valida correctamente y evita entradas con un formato incorrecto en el lado del cliente, un usuario malintencionado puede modificar la solicitud de red.

## Diferentes tipos de validación en el lado del cliente

Hay dos tipos diferentes de validación en el lado del cliente que encontrarás en la web:

- **Validación de formularios HTML**: Los atributos de los formularios HTML pueden definir qué controles de formulario son obligatorios y qué formato deben tener los datos introducidos por el usuario para ser válidos.
- **Validación de formularios con JavaScript**: Por lo general, se incluye JavaScript para mejorar o personalizar la validación de formularios HTML.

La validación en el lado del cliente se puede realizar con poco o ningún JavaScript. La validación HTML es más rápida que JavaScript, pero es menos personalizable que la validación con JavaScript. Por lo general, se recomienda empezar los formularios con características HTML sólidas y, después, mejorar la experiencia de usuario con JavaScript según sea necesario.

## Usar la validación de formulario incorporada

Una de las características más importantes de los [controles de formulario](/es/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) es la capacidad de validar la mayoría de los datos de usuario sin depender de JavaScript. Esto se logra mediante el uso de atributos de validación en los elementos de formulario. Hemos visto muchos de ellos antes en el curso, pero para recapitular:

- [`required`](/es/docs/Web/HTML/Reference/Attributes/required): Especifica si un campo de formulario debe rellenarse antes de que se pueda enviar el formulario.
- [`minlength`](/es/docs/Web/HTML/Reference/Attributes/minlength) y [`maxlength`](/es/docs/Web/HTML/Reference/Attributes/maxlength): Especifican la longitud mínima y máxima de los datos de texto (cadenas).
- [`min`](/es/docs/Web/HTML/Reference/Attributes/min), [`max`](/es/docs/Web/HTML/Reference/Attributes/max) y [`step`](/es/docs/Web/HTML/Reference/Attributes/step): Especifican los valores mínimo y máximo de los tipos de entrada numéricos y el incremento o paso de los valores, a partir del mínimo.
- [`type`](/es/docs/Web/HTML/Reference/Elements/input#tipos_de_input): Especifica si los datos deben ser un número, una dirección de correo electrónico u otro tipo predefinido específico.
- [`pattern`](/es/docs/Web/HTML/Reference/Attributes/pattern): Especifica una [expresión regular](/es/docs/Web/JavaScript/Guide/Regular_expressions) que define un patrón que deben seguir los datos introducidos.

Si los datos introducidos en un campo de formulario siguen todas las reglas especificadas por los atributos aplicados al campo, se consideran válidos. De lo contrario, se consideran no válidos.

Cuando un elemento es válido, se cumple lo siguiente:

- El elemento coincide con la pseudoclase CSS {{cssxref(":valid")}}, que permite aplicar un estilo específico a los elementos válidos. El control también coincide con {{cssxref(":user-valid")}} si el usuario ha interactuado con él, y puede coincidir con otras pseudoclases de interfaz de usuario, como {{cssxref(":in-range")}}, según el tipo de entrada y sus atributos.
- Si el usuario intenta enviar los datos, el navegador envía el formulario, siempre que nada más lo impida (por ejemplo, JavaScript).

Cuando un elemento no es válido, se cumple lo siguiente:

- El elemento coincide con la pseudoclase CSS {{cssxref(":invalid")}}. Si el usuario ha interactuado con el control, también coincide con la pseudoclase CSS {{cssxref(":user-invalid")}}. También puede coincidir con otras pseudoclases de interfaz de usuario, como {{cssxref(":out-of-range")}}, según el error. Estas permiten aplicar un estilo específico a los elementos no válidos.
- Si el usuario intenta enviar los datos, el navegador bloquea el envío del formulario y muestra un mensaje de error. El mensaje varía según el tipo de error. La [API de validación de restricciones](#la_api_de_validación_de_restricciones) se describe más adelante.

## Ejemplos de validación de formularios incorporados

En esta sección probaremos algunos de los atributos que hemos comentado antes.

### Archivo de inicio básico

Comencemos con un ejemplo básico: una entrada que te permite elegir si prefieres un plátano o una cereza.
Este ejemplo incluye una {{HTMLElement("input")}} de texto con una {{htmlelement("label")}} asociada y un {{htmlelement("button")}} de envío.

```html live-sample___simple-start-file
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Fruta favorita inicial</title>
    <style>
      input:invalid {
        border: 2px dashed red;
      }

      input:valid {
        border: 2px solid black;
      }
    </style>
  </head>

  <body>
    <form>
      <label for="choose">¿Prefieres un plátano o una cereza?</label>
      <input id="choose" name="i_like" />
      <button>Enviar</button>
    </form>
  </body>
</html>
```

{{EmbedLiveSample("simple-start-file", "100%", 80)}}

Para comenzar, crea una copia del código HTML anterior en un archivo `index.html` nuevo. Guárdalo en un directorio nuevo de tu disco duro.

### El atributo `required`

Una característica común de validación de HTML es el atributo [`required`](/es/docs/Web/HTML/Reference/Attributes/required).
Añade este atributo a una entrada para hacer obligatorio un elemento.
Cuando se establece este atributo, el elemento coincide con la pseudoclase de interfaz de usuario {{cssxref(':required')}} y el formulario no se enviará si la entrada está vacía; al intentar enviarlo se mostrará un mensaje de error.
Mientras está vacía, la entrada también se considerará no válida y coincidirá con la pseudoclase de interfaz de usuario {{cssxref(':invalid')}}.

Si cualquier botón de opción de un grupo con el mismo nombre tiene el atributo `required`, debe seleccionarse uno de los botones de opción de ese grupo para que sea válido; el botón seleccionado no tiene que ser el que tiene el atributo establecido.

> [!NOTE]
> Solicita a los usuarios únicamente los datos que necesitas: por ejemplo, ¿es realmente necesario conocer el género o el tratamiento de alguien?

Añade un atributo `required` a tu entrada, como se muestra a continuación.

```html live-sample___the-required-attribute
<form>
  <label for="choose">¿Prefieres un plátano o una cereza? *</label>
  <input id="choose" name="i-like" required />
  <button>Enviar</button>
</form>
```

> [!NOTE]
> Es habitual colocar un asterisco (u otra marca) después de las etiquetas de los controles de formulario obligatorios para que destaquen para los usuarios videntes. Indicar cuándo son obligatorios los campos de un formulario no solo es una buena experiencia de usuario: también lo exigen las pautas de [accesibilidad](/es/docs/Learn_web_development/Core/Accessibility) de las WCAG.

Incluimos estilos CSS que se aplican según si el elemento es obligatorio, válido o no válido:

```css live-sample___the-required-attribute
input:invalid {
  border: 2px dashed red;
}

input:invalid:required {
  background-image: linear-gradient(to right, pink, lightgreen);
}

input:valid {
  border: 2px solid black;
}
```

```js hidden live-sample___the-required-attribute live-sample___validate-regular-expression live-sample___constraining-values
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
```

Este CSS hace que la entrada tenga un borde discontinuo rojo cuando no es válida y un borde negro sólido más sutil cuando es válida.
También añadimos un degradado de fondo cuando la entrada es obligatoria _y_ no válida. Prueba el comportamiento nuevo en el ejemplo siguiente:

{{EmbedLiveSample("the-required-attribute", "100%", 80, , , , , "allow-forms")}}

Intenta enviar el formulario sin introducir un valor. Observa cómo la entrada no válida recibe el foco y aparece un mensaje de error predeterminado («Completa este campo»). También se impide el envío del formulario (aunque, incluso cuando se introduce un valor, evitamos el envío para evitar un error debido a cómo MDN gestiona los formularios incrustados).

### Validación de una expresión regular

Otra característica útil de validación es el atributo [`pattern`](/es/docs/Web/HTML/Reference/Attributes/pattern), que espera una [expresión regular](/es/docs/Web/JavaScript/Guide/Regular_expressions) como valor. Una expresión regular (_regex_) es un patrón que se puede usar para establecer combinaciones de caracteres en cadenas de texto, por lo que las expresiones regulares son ideales para la validación de formularios y sirven para una gran variedad de otros usos en JavaScript.

Las expresiones regulares son bastante complejas y no vamos a exponerlas exhaustivamente en este artículo. A continuación hay algunos ejemplos para que te hagas una idea de cómo funcionan.

- `a`: coincide con un carácter que es `a` (ni `b`, ni `aa`, etc.).
- `abc`: coincide con `a`, seguido de `b`, seguido de `c`.
- `ab?c`: coincide con `a`, seguido opcionalmente de una sola `b`, seguido de `c` (`ac` o `abc`).
- `ab*c`: coincide con `a`, seguido opcionalmente de cualquier número de `b`, seguido de `c`. (`ac`, `abc`, `abbbbbc`, etc.)
- `a|b`: coincide con un carácter que es `a` o `b`.
- `abc|xyz`: coincide exactamente con `abc` o `xyz` (pero no con `abcxyz`, `a` o `y`, y así sucesivamente).

Hay muchas más posibilidades que no exponemos aquí. Para obtener una lista completa y muchos ejemplos, consulta nuestro documento de [expresiones regulares](/es/docs/Web/JavaScript/Guide/Regular_expressions).

Implementemos un ejemplo. Actualiza tu HTML para añadir un atributo [`pattern`](/es/docs/Web/HTML/Reference/Attributes/pattern) como este:

```html live-sample___validate-regular-expression
<form>
  <label for="choose">¿Prefieres un plátano o una cereza? *</label>
  <input id="choose" name="i-like" required pattern="[Pp]látano|[Cc]ereza" />
  <button>Enviar</button>
</form>
```

```css hidden live-sample___validate-regular-expression
input:invalid {
  border: 2px dashed red;
}

input:valid {
  border: 2px solid black;
}
```

Esto nos da la siguiente actualización; pruébalo:

{{EmbedLiveSample("validate-regular-expression", "100%", 80, , , , , "allow-forms")}}

También puedes pulsar el botón **Play** para abrir el ejemplo en MDN Playground y editar allí el código fuente.

En este ejemplo, el elemento {{HTMLElement("input")}} acepta uno de los cuatro valores posibles: las cadenas «plátano», «Plátano», «cereza» o «Cereza». Las expresiones regulares distinguen entre mayúsculas y minúsculas, pero hemos hecho que admita versiones en mayúsculas y minúsculas utilizando un patrón «Aa» adicional anidado dentro de corchetes.

En este punto, intenta cambiar el valor dentro del atributo [`pattern`](/es/docs/Web/HTML/Reference/Attributes/pattern) para que se vean iguales que algunos de los ejemplos vistos anteriormente, y observa que esto afecta a los valores que puedes añadir para que el valor de entrada sea válido. Intenta escribir algo por tu cuenta y mira cómo va. ¡Haz que estén relacionadas con la fruta siempre que sea posible para que tus ejemplos tengan sentido!

Si un valor no vacío de {{HTMLElement("input")}} no coincide con el patrón de la expresión regular, `input` coincidirá con la pseudoclase {{cssxref(':invalid')}}. Si está vacío y el elemento no es obligatorio, no se considera no válido.

Algunos tipos de elementos {{HTMLElement("input")}} no necesitan un atributo [`pattern`](/es/docs/Web/HTML/Reference/Attributes/pattern) para validarse con una expresión regular. Por ejemplo, especificar el tipo `email` valida el valor de entrada con un patrón de dirección de correo electrónico bien formada o, si tiene el atributo [`multiple`](/es/docs/Web/HTML/Reference/Attributes/multiple), con un patrón que coincide con una lista de direcciones de correo electrónico separadas por comas.

> [!NOTE]
> El elemento {{HTMLElement("textarea")}} no admite el atributo [`pattern`](/es/docs/Web/HTML/Reference/Attributes/pattern).

### Restringir la longitud de las entradas

Puedes restringir la longitud de los caracteres de todos los campos de texto creados por {{HTMLElement("input")}} o {{HTMLElement("textarea")}} utilizando los atributos [`minlength`](/es/docs/Web/HTML/Reference/Attributes/minlength) y [`maxlength`](/es/docs/Web/HTML/Reference/Attributes/maxlength). Un campo no es válido si tiene un valor y ese valor tiene menos caracteres que el valor de longitud mínima ([`minlength`](/es/docs/Web/HTML/Reference/Attributes/minlength)), o más que el valor de longitud máxima ([`maxlength`](/es/docs/Web/HTML/Reference/Attributes/maxlength)).

Los navegadores a menudo no permiten que el usuario escriba un valor más largo de lo esperado en los campos de texto. Una mejor experiencia de usuario que usar únicamente `maxlength` consiste en proporcionar información sobre el recuento de caracteres de forma accesible y permitir que los usuarios reduzcan el contenido hasta el tamaño permitido. Los límites de caracteres de las publicaciones en redes sociales son un ejemplo. Para ofrecerlo, puedes usar JavaScript, incluidas [soluciones que usan `maxlength`](https://github.com/mimo84/bootstrap-maxlength).

> [!NOTE]
> Las restricciones de longitud nunca se notifican si el valor se establece mediante programación. Solo se notifican para entradas proporcionadas por el usuario.

### Restringir los valores de las entradas

Los atributos [`min`](/es/docs/Web/HTML/Reference/Attributes/min) y [`max`](/es/docs/Web/HTML/Reference/Attributes/max) se pueden usar para proporcionar a los campos numéricos (es decir, [`<input type="number">`](/es/docs/Web/HTML/Reference/Elements/input/number)) y a los distintos tipos de entrada de fecha un rango de valores válidos. El campo no será válido si contiene un valor fuera de este rango.

Veamos otro ejemplo. Crea una nueva copia del [archivo de inicio básico](#archivo_de_inicio_básico) y guárdala en el mismo directorio como `index2.html`.

Ahora elimina el contenido del elemento `<body>` y sustitúyelo por lo siguiente:

```html live-sample___constraining-values
<form>
  <div>
    <label for="choose">¿Prefieres un plátano o una cereza? *</label>
    <input
      type="text"
      id="choose"
      name="i-like"
      required
      minlength="6"
      maxlength="7" />
  </div>
  <div>
    <label for="number">¿Cuántos te gustaría comer?</label>
    <input type="number" id="number" name="amount" value="1" min="1" max="10" />
  </div>
  <div>
    <button>Enviar</button>
  </div>
</form>
```

- Aquí verás que le hemos dado al campo de `text` un valor `minlength` de seis y un valor `maxlength` de siete, que corresponden a las longitudes de «cereza» y «plátano», respectivamente.
- También le hemos dado al campo `number` un `min` de uno y un `max` de diez. Los números introducidos que queden fuera de este rango se mostrarán como no válidos; los usuarios no podrán usar las flechas de incremento/decremento para mover el valor fuera de este rango. Si el usuario introduce un número desde el teclado fuera de este rango, los datos no serán válidos. El número no es obligatorio, por lo que eliminar el valor aún dará como resultado un valor válido.

```css hidden live-sample___constraining-values
input:invalid {
  border: 2px dashed red;
}

input:valid {
  border: 2px solid black;
}

div {
  margin-bottom: 10px;
}
```

Aquí está el ejemplo que se ejecuta en vivo:

{{EmbedLiveSample("constraining-values", "100%", 100)}}

También puedes pulsar el botón **Play** para abrir el ejemplo en MDN Playground y editar allí el código fuente.

Los tipos de entrada numéricos, como `number`, `range` y `date`, también pueden usar el atributo [`step`](/es/docs/Web/HTML/Reference/Attributes/step). Este atributo especifica en qué incremento aumenta o disminuye el valor cuando se utilizan los controles de entrada (como los botones numéricos arriba y abajo o el control deslizante de los rangos). El atributo `step` se omite en nuestro ejemplo, por lo que el valor predeterminado es `1`. Esto significa que los números de coma flotante, como 3.2, también se mostrarán como no válidos.

### Ejemplo completo

Aquí hay un ejemplo completo que muestra el uso de las funciones de validación integradas en HTML. En primer lugar, un poco de HTML:

```html
<form>
  <p>Completa todos los campos obligatorios (*).</p>
  <fieldset>
    <legend>¿Tienes permiso de conducir? *</legend>
    <input type="radio" required name="driver" id="r1" value="yes" />
    <label for="r1">Sí</label>
    <input type="radio" required name="driver" id="r2" value="no" />
    <label for="r2">No</label>
  </fieldset>
  <p>
    <label for="n1">¿Qué edad tienes?</label>
    <input type="number" min="12" max="120" step="1" id="n1" name="age" />
  </p>
  <p>
    <label for="t1">¿Cuál es tu fruta favorita? *</label>
    <input
      type="text"
      id="t1"
      name="fruit"
      list="l1"
      required
      pattern="[Pp]látano|[Cc]ereza|[Mm]anzana|[Ff]resa|[Ll]imón|[Nn]aranja" />
    <datalist id="l1">
      <option>Plátano</option>
      <option>Cereza</option>
      <option>Manzana</option>
      <option>Fresa</option>
      <option>Limón</option>
      <option>Naranja</option>
    </datalist>
  </p>
  <p>
    <label for="t2">¿Cuál es tu dirección de correo electrónico?</label>
    <input type="email" id="t2" name="email" />
  </p>
  <p>
    <label for="t3">Deja un mensaje breve</label>
    <textarea id="t3" name="msg" maxlength="140" rows="5"></textarea>
  </p>
  <p>
    <button>Enviar</button>
  </p>
</form>
```

Y ahora, algo de CSS para añadir estilo al HTML:

```css
form {
  font: 1em sans-serif;
  max-width: 320px;
}

p > label {
  display: block;
}

input[type="text"],
input[type="email"],
input[type="number"],
textarea,
fieldset {
  width: 100%;
  border: 1px solid #333333;
  box-sizing: border-box;
}

input:invalid {
  box-shadow: 0 0 5px 1px red;
}

input:focus:invalid {
  box-shadow: none;
}
```

El resultado se muestra a continuación:

{{EmbedLiveSample("Full_example", "100%", 420)}}

También puedes pulsar el botón **Play** para abrir el ejemplo en MDN Playground y editar allí el código fuente.

Consulta [atributos relacionados con la validación](/es/docs/Web/HTML/Guides/Constraint_validation) para ver una lista completa de los atributos que pueden utilizarse para restringir valores de entrada y los tipos de entrada que los admiten.

## Validar formularios con JavaScript

Si quieres cambiar el texto de los mensajes de error nativos, necesitas JavaScript. En esta sección veremos las distintas formas de hacerlo.

### La API de validación de restricciones

La API de validación de restricciones consta de un conjunto de métodos y propiedades disponibles en las siguientes interfaces DOM de elementos de formulario:

- [`HTMLButtonElement`](/es/docs/Web/API/HTMLButtonElement) (representa un elemento [`<button>`](/es/docs/Web/HTML/Reference/Elements/button))
- [`HTMLFieldSetElement`](/es/docs/Web/API/HTMLFieldSetElement) (representa un elemento [`<fieldset>`](/es/docs/Web/HTML/Reference/Elements/fieldset))
- [`HTMLInputElement`](/es/docs/Web/API/HTMLInputElement) (representa un elemento [`<input>`](/es/docs/Web/HTML/Reference/Elements/input))
- [`HTMLOutputElement`](/es/docs/Web/API/HTMLOutputElement) (representa un elemento [`<output>`](/es/docs/Web/HTML/Reference/Elements/output))
- [`HTMLSelectElement`](/es/docs/Web/API/HTMLSelectElement) (representa un elemento [`<select>`](/es/docs/Web/HTML/Reference/Elements/select))
- [`HTMLTextAreaElement`](/es/docs/Web/API/HTMLTextAreaElement) (representa un elemento [`<textarea>`](/es/docs/Web/HTML/Reference/Elements/textarea))

La API de validación de restricciones pone las siguientes propiedades a disposición de estos elementos:

- `validationMessage`: Devuelve un mensaje localizado que describe las restricciones de validación que el control no satisface (si las hay). Si el control no es candidato para la validación de restricciones (`willValidate` es `false`) o el valor del elemento satisface sus restricciones (es válido), devuelve una cadena vacía.
- `validity`: Devuelve un objeto `ValidityState` que contiene varias propiedades que describen el estado de validez del elemento. Puedes consultar todos los detalles de las propiedades disponibles en la página de referencia de {{domxref("ValidityState")}}; a continuación se enumeran algunas de las más comunes:
  - {{domxref("ValidityState.patternMismatch", "patternMismatch")}}: Devuelve `true` si el valor no coincide con el [`pattern`](/es/docs/Web/HTML/Reference/Elements/input#pattern) especificado, y `false` si coincide. Si es `true`, el elemento coincide con la pseudoclase CSS {{cssxref(":invalid")}}.
  - {{domxref("ValidityState.tooLong", "tooLong")}}: Devuelve `true` si el valor supera la longitud máxima especificada por el atributo [`maxlength`](/es/docs/Web/HTML/Reference/Elements/input#maxlength), o `false` si es menor o igual que el máximo. Si es `true`, el elemento coincide con la pseudoclase CSS {{cssxref(":invalid")}}.
  - {{domxref("ValidityState.tooShort", "tooShort")}}: Devuelve `true` si el valor es menor que la longitud mínima especificada por el atributo [`minlength`](/es/docs/Web/HTML/Reference/Elements/input#minlength), o `false` si es mayor o igual que el mínimo. Si es `true`, el elemento coincide con la pseudoclase CSS {{cssxref(":invalid")}}.
  - {{domxref("ValidityState.rangeOverflow", "rangeOverflow")}}: Devuelve `true` si el valor es mayor que el máximo especificado por el atributo [`max`](/es/docs/Web/HTML/Reference/Elements/input#max), o `false` si es menor o igual que el máximo. Si es `true`, el elemento coincide con las pseudoclases CSS {{cssxref(":invalid")}} y {{cssxref(":out-of-range")}}.
  - {{domxref("ValidityState.rangeUnderflow", "rangeUnderflow")}}: Devuelve `true` si el valor es menor que el mínimo especificado por el atributo [`min`](/es/docs/Web/HTML/Reference/Elements/input#min), o `false` si es mayor o igual que el mínimo. Si es `true`, el elemento coincide con las pseudoclases CSS {{cssxref(":invalid")}} y {{cssxref(":out-of-range")}}.
  - {{domxref("ValidityState.typeMismatch", "typeMismatch")}}: Devuelve `true` si el valor no tiene la sintaxis requerida (cuando [`type`](/es/docs/Web/HTML/Reference/Elements/input#type) es `email` o `url`), o `false` si la sintaxis es correcta. Si es `true`, el elemento coincide con la pseudoclase CSS {{cssxref(":invalid")}}.
  - `valid`: Devuelve `true` si el elemento cumple todas sus restricciones de validación y, por tanto, se considera válido, o `false` si incumple alguna. Si es `true`, el elemento coincide con la pseudoclase CSS {{cssxref(":valid")}}; de lo contrario, coincide con {{cssxref(":invalid")}}.
  - `valueMissing`: Devuelve `true` si el elemento tiene un atributo [`required`](/es/docs/Web/HTML/Reference/Elements/input#required), pero no tiene valor, o `false` de lo contrario. Si es `true`, el elemento coincide con la pseudoclase CSS {{cssxref(":invalid")}}.

- `willValidate`: Devuelve `true` si el elemento se validará cuando se envíe el formulario; `false` de lo contrario.

La API de validación de restricciones también pone los siguientes métodos a disposición de los elementos anteriores y del elemento [`form`](/es/docs/Web/HTML/Reference/Elements/form):

- `checkValidity()`: Devuelve `true` si el valor del elemento no tiene problemas de validez; `false` de lo contrario. Si el elemento no es válido, este método también dispara un [evento `invalid`](/es/docs/Web/API/HTMLInputElement/invalid_event) en el elemento.
- `reportValidity()`: Informa de los campos no válidos mediante eventos. Este método es útil junto con `preventDefault()` en un controlador de eventos `onSubmit`.
- `setCustomValidity(message)`: Añade un mensaje de error personalizado al elemento; si estableces uno, el elemento se considera no válido y se muestra el error indicado. Esto te permite usar código JavaScript para establecer un fallo de validación distinto de los que ofrecen las restricciones estándar de validación HTML. El mensaje se muestra al usuario cuando se informa del problema.

#### Implementar un mensaje de error personalizado

Como viste en los ejemplos anteriores de restricciones de validación HTML, cada vez que un usuario intenta enviar un formulario no válido, el navegador muestra un mensaje de error. La forma en que se muestra depende del navegador.

Estos mensajes automáticos tienen dos inconvenientes:

- No hay una forma estándar de cambiar su apariencia con CSS.
- Dependen de la configuración regional del navegador, lo que significa que puedes tener una página en un idioma, pero un mensaje de error en otro, como se ve en la siguiente captura de pantalla de Firefox.

![Ejemplo de un mensaje de error con Firefox en francés en una página en inglés](error-firefox-win7.png)

Personalizar estos mensajes de error es uno de los casos de uso más habituales de la API de validación de restricciones. Veamos un ejemplo de cómo hacerlo.

Comenzaremos con algo de HTML. Si quieres, puedes ponerlo en otra copia del [archivo de inicio básico](#archivo_de_inicio_básico):

```html
<form>
  <label for="mail">
    Me gustaría que me proporcionaras una dirección de correo electrónico:
  </label>
  <input type="email" id="mail" name="mail" />
  <button>Enviar</button>
</form>
```

Añade el siguiente JavaScript a la página:

```js
const email = document.getElementById("mail");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Espero una dirección de correo electrónico.");
  } else {
    email.setCustomValidity("");
  }
});
```

Aquí guardamos una referencia a la entrada de correo electrónico y, después, le añadimos un detector de eventos que ejecuta el código incluido cada vez que cambia el valor de la entrada.

Dentro de ese código, comprobamos si la propiedad `validity.typeMismatch` de la entrada de correo electrónico devuelve `true`, lo que significa que el valor no coincide con el patrón de una dirección de correo electrónico bien formada. Si es así, llamamos al método {{domxref("HTMLInputElement.setCustomValidity()", "setCustomValidity()")}} con un mensaje personalizado. Esto hace que la entrada no sea válida, por lo que al intentar enviar el formulario el envío falla y se muestra el mensaje de error personalizado.

Si la propiedad `validity.typeMismatch` devuelve `false`, llamamos al método `setCustomValidity()` con una cadena vacía. Esto hace que la entrada sea válida, de modo que el formulario se enviará. Durante la validación, si algún control del formulario tiene un `customError` que no sea una cadena vacía, se bloquea el envío del formulario.

Puedes probarlo a continuación (pulsa el botón **Play** para ejecutar el ejemplo en MDN Playground y editar el código fuente):

```html hidden live-sample___custom-error-message
<form>
  <label for="mail"
    >Me gustaría que me proporcionaras una dirección de correo
    electrónico:</label
  >
  <input type="email" id="mail" name="mail" />
  <button>Enviar</button>
</form>
```

```css hidden live-sample___custom-error-message
input:invalid {
  border: 2px dashed red;
}

input:valid {
  border: 2px solid black;
}
form {
  margin: 3rem 0;
}
```

```js hidden live-sample___custom-error-message
const email = document.getElementById("mail");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Espero una dirección de correo electrónico.");
  } else {
    email.setCustomValidity("");
  }
});

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
```

{{EmbedLiveSample("custom-error-message", "100%", 120, , , , , "allow-forms")}}

#### Ampliar la validación de formularios incorporada

El ejemplo anterior mostró cómo puedes añadir un mensaje personalizado para un tipo de error concreto (`validity.typeMismatch`). También es posible usar toda la validación de formularios incorporada y, después, ampliarla con `setCustomValidity()`.

Aquí mostramos cómo puedes ampliar la validación incorporada de [`<input type="email">`](/es/docs/Web/HTML/Reference/Elements/input/email) para aceptar únicamente direcciones con el dominio `@example.com`. Comenzamos con el {{htmlelement("form")}} HTML siguiente:

```html
<form>
  <label for="mail">Dirección de correo electrónico (solo @example.com):</label>
  <input type="email" id="mail" />
  <button>Enviar</button>
</form>
```

El código de validación se muestra a continuación. Ante cada entrada nueva, primero restablece el mensaje de validez personalizado mediante `setCustomValidity("")`. Después usa `email.validity.valid` para comprobar si la dirección introducida no es válida y, si lo es, sale del controlador de eventos. Esto garantiza que se ejecuten todas las comprobaciones normales de validación incorporada mientras el texto introducido no sea una dirección de correo electrónico válida.

Una vez que la dirección de correo electrónico es válida, el código añade una restricción personalizada y llama a `setCustomValidity()` con un mensaje de error si la dirección no termina en `@example.com`.

```js
const email = document.getElementById("mail");

email.addEventListener("input", (event) => {
  // Validar con las restricciones incorporadas
  email.setCustomValidity("");
  if (!email.validity.valid) {
    return;
  }

  // Ampliar con una restricción personalizada
  if (!email.value.endsWith("@example.com")) {
    email.setCustomValidity(
      "Introduce una dirección de correo electrónico de @example.com",
    );
  }
});
```

Intenta enviar una dirección de correo electrónico no válida, una dirección válida que no termine en `@example.com` y una que sí termine en `@example.com`.

{{EmbedLiveSample("extending built-in form validation", "", 200, , , , , "allow-forms")}}

#### Un ejemplo más detallado

Ahora que hemos visto un ejemplo realmente sencillo, veamos cómo podemos usar esta API para construir una validación personalizada un poco más compleja.

En primer lugar, el código HTML. Una vez más, siéntete libre de construir esto junto con nosotros:

```html
<form novalidate>
  <p>
    <label for="mail">
      <span>Introduce una dirección de correo electrónico *:</span>
      <input type="email" id="mail" name="mail" required minlength="8" />
      <span class="error" aria-live="polite"></span>
    </label>
  </p>
  <button>Enviar</button>
</form>
```

Este formulario usa el atributo [`novalidate`](/es/docs/Web/HTML/Reference/Elements/form#novalidate) para desactivar la validación automática del navegador. Establecer el atributo `novalidate` en el formulario impide que este muestre sus propios cuadros de mensaje de error y nos permite mostrar mensajes de error personalizados en el DOM de la manera que elijamos.
Sin embargo, esto no deshabilita la API de validación de restricciones ni la aplicación de pseudoclases CSS como {{cssxref(":valid")}}, etc.
Esto significa que, aunque el navegador no comprueba automáticamente la validez del formulario antes de enviar sus datos, puedes hacerlo tú mismo y aplicar estilos al formulario en consecuencia.

Nuestra entrada para validar es [`<input type="email">`](/es/docs/Web/HTML/Reference/Elements/input/email), que es obligatoria y tiene un `minlength` de 8 caracteres. Vamos a comprobar estas condiciones con nuestro propio código y a mostrar un mensaje de error personalizado para cada una.

Nuestro objetivo es mostrar los mensajes de error dentro de un elemento `<span>`.
El atributo [`aria-live`](/es/docs/Web/Accessibility/ARIA/Guides/Live_regions) se establece en ese `<span>` para asegurar que nuestro mensaje de error personalizado se presente a todo el mundo, incluso que se lea a los usuarios de lectores de pantalla.

Ahora aplicaremos algo de CSS básico para mejorar ligeramente el aspecto del formulario y proporcionar información visual cuando los datos de entrada no sean válidos:

```css
body {
  font: 1em sans-serif;
  width: 200px;
  padding: 0;
  margin: 0 auto;
}

p * {
  display: block;
}

input[type="email"] {
  appearance: none;

  width: 100%;
  border: 1px solid #333333;
  margin: 0;

  font-family: inherit;
  font-size: 90%;

  box-sizing: border-box;
}

/* Campos no válidos */
input:invalid {
  border-color: #990000;
  background-color: #ffdddd;
}

input:focus:invalid {
  outline: none;
}

/* Estilos de los mensajes de error */
.error {
  width: 100%;
  padding: 0;

  font-size: 80%;
  color: white;
  background-color: #990000;
  border-radius: 0 0 5px 5px;

  box-sizing: border-box;
}

.error.active {
  padding: 0.3em;
}
```

Ahora veamos el JavaScript que implementa la validación de errores personalizada.
Hay muchas formas de seleccionar un nodo DOM; aquí obtenemos el formulario, el campo de entrada de correo electrónico y el elemento `span` en el que colocaremos el mensaje de error.

Mediante controladores de eventos, comprobamos si los campos del formulario son válidos cada vez que el usuario escribe algo. Si hay un error, lo mostramos. Si no lo hay, eliminamos cualquier mensaje de error.

```js
const form = document.querySelector("form");
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailError.textContent = ""; // Elimina el contenido del mensaje
    emailError.className = "error"; // Elimina la clase `active`
  } else {
    // Si aún hay un error, muestra el error correspondiente
    showError();
  }
});

form.addEventListener("submit", (event) => {
  // Si el campo de correo electrónico no es válido
  if (!email.validity.valid) {
    // Muestra un mensaje de error apropiado
    showError();
    // Impide el envío del formulario
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    // Si está vacío
    emailError.textContent =
      "Debes introducir una dirección de correo electrónico.";
  } else if (email.validity.typeMismatch) {
    // Si no es una dirección de correo electrónico
    emailError.textContent =
      "El valor introducido debe ser una dirección de correo electrónico.";
  } else if (email.validity.tooShort) {
    // Si el valor es demasiado corto
    emailError.textContent = `El correo electrónico debe tener al menos ${email.minLength} caracteres; has introducido ${email.value.length}.`;
  }
  // Añade la clase `active`
  emailError.className = "error active";
}
```

Cada vez que cambiamos el valor de la entrada, comprobamos si contiene datos válidos. Si es así, eliminamos cualquier mensaje de error que se muestre. Si los datos no son válidos, ejecutamos `showError()` para mostrar el error correspondiente.

Cada vez que intentamos enviar el formulario, volvemos a comprobar si los datos son válidos. Si es así, permitimos que se envíe el formulario. Si no, ejecutamos `showError()` para mostrar el error correspondiente y detenemos el envío del formulario con [`preventDefault()`](/es/docs/Web/API/Event/preventDefault).

La función `showError()` usa varias propiedades del objeto `validity` de la entrada para determinar cuál es el error y, a continuación, muestra el mensaje correspondiente.

Este es el resultado en vivo (pulsa el botón **Play** para ejecutar el ejemplo en MDN Playground y editar el código fuente):

```html hidden live-sample___detailed-custom-validation
<form novalidate>
  <p>
    <label for="mail">
      <span>Introduce una dirección de correo electrónico *:</span>
      <input type="email" id="mail" name="mail" required minlength="8" />
      <span class="error" aria-live="polite"></span>
    </label>
  </p>
  <button>Enviar</button>
</form>
```

```css hidden live-sample___detailed-custom-validation
body {
  font: 1em sans-serif;
  width: 200px;
  padding: 0;
  margin: 0 auto;
}
p * {
  display: block;
}
input[type="email"] {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  border: 1px solid #333333;
  margin: 0;
  font-family: inherit;
  font-size: 90%;
  box-sizing: border-box;
}
input:invalid {
  border-color: #990000;
  background-color: #ffdddd;
}
input:focus:invalid {
  outline: none;
}
.error {
  width: 100%;
  padding: 0;
  font-size: 80%;
  color: white;
  background-color: #990000;
  border-radius: 0 0 5px 5px;
  box-sizing: border-box;
}
.error.active {
  padding: 0.3em;
}
```

```js hidden live-sample___detailed-custom-validation
const form = document.getElementsByTagName("form")[0];
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");
email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailError.innerHTML = "";
    emailError.className = "error";
  } else {
    showError();
  }
});
form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    showError();
    event.preventDefault();
  }
});
function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent =
      "Debes introducir una dirección de correo electrónico.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent =
      "El valor introducido debe ser una dirección de correo electrónico.";
  } else if (email.validity.tooShort) {
    emailError.textContent = `El correo electrónico debe tener al menos ${email.minLength} caracteres; has introducido ${email.value.length}.`;
  }
  emailError.className = "error active";
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
```

{{EmbedLiveSample("detailed-custom-validation", "100%", 150, , , , , "allow-forms")}}

La API de validación de restricciones te proporciona una herramienta poderosa para manejar la validación de formularios, y te permite tener un control enorme sobre la interfaz de usuario más allá de lo que puedas hacer solo con HTML y CSS.

### Validar formularios sin una API incorporada

En algunos casos, como los [controles personalizados](/es/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls), no podrás o no querrás usar la API de validación de restricciones. Aun así puedes usar JavaScript para validar el formulario, pero tendrás que escribir la validación tú mismo.

Antes de validar el formulario, hazte estas preguntas:

- ¿Qué tipo de validación debería realizar?
  - : Debes determinar cómo validar los datos: operaciones de cadena, conversión de tipos, expresiones regulares, etc. Tú decides.
- ¿Qué debo hacer si el formulario no se valida?
  - : Esto es claramente un problema de la interfaz de usuario. Tienes que decidir cómo se comportará el formulario. ¿El formulario va a enviar los datos de todos modos? ¿Deberías resaltar los campos que dan error? ¿Deberías mostrar mensajes de error?
- ¿Cómo puedo ayudar al usuario a corregir datos no válidos?
  - : Para reducir la frustración del usuario, es muy importante proporcionar tanta información útil como sea posible para guiarlo a fin de que corrija sus entradas de datos. Debes ofrecer sugerencias por adelantado para que sepan lo que se espera de ellos, así como mensajes de error claros. Si deseas profundizar en los requisitos de interfaz de usuario para la validación de formularios, aquí hay algunos artículos útiles que debes leer:
    - [Ayuda a los usuarios a introducir los datos correctos en los formularios](https://web.dev/learn/forms/form-fields)
    - [Validar entradas](https://www.w3.org/WAI/tutorials/forms/validation/)
    - [Cómo informar de errores en formularios: 10 pautas de diseño](https://www.nngroup.com/articles/errors-forms-design-guidelines/)

#### Un ejemplo que no usa la API de validación de restricciones

Para ilustrarlo, a continuación se muestra una versión simplificada del ejemplo anterior sin la API de validación de restricciones.

El HTML es casi el mismo; solo hemos eliminado las funciones de validación de HTML.

```html
<form>
  <p>
    <label for="mail">
      <span>Introduce una dirección de correo electrónico:</span>
    </label>
    <input type="text" id="mail" name="mail" />
    <span id="error" aria-live="polite"></span>
  </p>
  <button>Enviar</button>
</form>
```

Del mismo modo, el CSS no necesita cambiar mucho; simplemente convertimos la pseudoclase CSS {{cssxref(":invalid")}} en una clase real y evitamos usar el selector de atributos.

```css
body {
  font: 1em sans-serif;
  width: 200px;
  padding: 0;
  margin: 0 auto;
}

form {
  max-width: 200px;
}

p * {
  display: block;
}

input {
  appearance: none;
  width: 100%;
  border: 1px solid #333333;
  margin: 0;

  font-family: inherit;
  font-size: 90%;

  box-sizing: border-box;
}

/* Campos no válidos */
input.invalid {
  border: 2px solid #990000;
  background-color: #ffdddd;
}

input:focus.invalid {
  outline: none;
  /* Asegura que quienes usan solo teclado vean un cambio al enfocar */
  border-style: dashed;
}

/* Mensajes de error */
#error {
  width: 100%;
  font-size: 80%;
  color: white;
  background-color: #990000;
  border-radius: 0 0 5px 5px;
  box-sizing: border-box;
}

.active {
  padding: 0.3rem;
}
```

Los grandes cambios están en el código JavaScript, que necesita hacer mucho más trabajo pesado.

```js
const form = document.querySelector("form");
const email = document.getElementById("mail");
const error = document.getElementById("error");

// Expresión regular para validar correo electrónico según la especificación HTML
const emailRegExp = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;

// Comprueba si el correo electrónico es válido
const isValidEmail = () => {
  const validity = email.value.length !== 0 && emailRegExp.test(email.value);
  return validity;
};

// Actualiza la clase de la entrada de correo según su validez
const setEmailClass = (isValid) => {
  email.className = isValid ? "valid" : "invalid";
};

// Actualiza el mensaje de error y su visibilidad
const updateError = (isValid) => {
  if (isValid) {
    error.textContent = "";
    error.removeAttribute("class");
  } else {
    error.textContent = "Espero una dirección de correo electrónico.";
    error.setAttribute("class", "active");
  }
};

// Gestiona el evento de entrada para actualizar la validez del correo
const handleInput = () => {
  const validity = isValidEmail();
  setEmailClass(validity);
  updateError(validity);
};

// Gestiona el envío del formulario y muestra un error si el correo no es válido
const handleSubmit = (event) => {
  event.preventDefault();

  const validity = isValidEmail();
  setEmailClass(validity);
  updateError(validity);
};

// Ahora podemos reconstruir nuestra restricción de validación.
// Como no usamos una pseudoclase CSS, tenemos que establecer explícitamente
// la clase valid/invalid del campo de correo electrónico.
const validity = isValidEmail();
setEmailClass(validity);
email.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit);
```

El resultado es el siguiente:

{{EmbedLiveSample("An_example_that_doesnt_use_the_constraint_validation_API", "100%", 150)}}

Como puedes ver, no es tan difícil crear por tu cuenta un sistema de validación. La parte difícil es hacerlo lo suficientemente genérico para usarlo en distintas plataformas y en cualquier formulario que puedas crear. Hay muchas bibliotecas disponibles para realizar la validación de formularios, como [Validate.js](https://rickharrison.github.io/validate.js/).

## Resumen

La validación de formularios en el lado del cliente a veces requiere JavaScript si quieres personalizar los estilos y los mensajes de error, pero _siempre_ exige que pienses cuidadosamente en el usuario. Recuerda siempre ayudar a los usuarios a corregir los datos que proporcionan. Para ello, asegúrate de:

- Mostrar mensajes de error explícitos.
- Ser flexible con el formato de entrada.
- Señalar exactamente dónde se produce el error, especialmente en formularios grandes.

Una vez que hayas comprobado que el formulario se ha rellenado correctamente, puedes enviarlo. A continuación veremos el [envío de datos de formularios](/es/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}
