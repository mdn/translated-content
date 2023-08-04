---
title: <input type="date">
slug: Web/HTML/Element/input/date
---

{{HTMLSidebar}}

Los elementos {{HTMLElement("input")}} de **`type="date"`** crean un campo de entrada que le permite al usuario introducir una fecha, que puede ser tanto como una caja de texto para validar el campo como una interfaz especial que le permite escoger una fecha.

El valor resultante incluye el año, el mes y el día, pero _no_ el tiempo. Las entradas de tipo {{HTMLElement("input/time", "time")}} y {{HTMLElement("input/datetime-local", "datetime-local")}} soportan el tiempo y la fecha + el tiempo, respectivamente.

{{EmbedInteractiveExample("pages/tabbed/input-date.html", "tabbed-shorter")}}

La IU de la entrada generalmente varía entre navegadores; véase [Compatibiidad con navegadores](#compatibilidad_con_navegadores) para más detalles. En navegadores que no incluyen soporte, el control degrada hacía [`<input type="text">`](/es/docs/Web/HTML/Element/input/text).

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Valor</a></strong></td>
      <td>
        Un {{domxref("DOMString")}} vacío o representando una fecha en el formato
        AAAA-MM-DD
      </td>
    </tr>
    <tr>
      <td><strong>Eventos</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}} y
        {{domxref("HTMLElement/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>Atributos comunes soportados</strong></td>
      <td>
        <a href="/es/docs/Web/HTML/Element/input#autocomplete"><code>autocomplete</code></a>,
        <a href="/es/docs/Web/HTML/Element/input#list"><code>list</code></a>,
        <a href="/es/docs/Web/HTML/Element/input#readonly"><code>readonly</code></a> y
        <a href="/es/docs/Web/HTML/Element/input#step"><code>step</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>Atributos IDL</strong></td>
      <td>
        <code>list</code>, <code>value</code>, <code>valueAsDate</code>,
        <code>valueAsNumber</code>.
      </td>
    </tr>
    <tr>
      <td><strong>Métodos</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}},
        {{domxref("HTMLInputElement.stepDown", "stepDown()")}} y
        {{domxref("HTMLInputElement.stepUp", "stepUp()")}}
      </td>
    </tr>
  </tbody>
</table>

## Valor

Una {{domxref("DOMString")}} representando la fecha introducida en la entrada. La fecha es formateada siguiendo el ISO8601, descrito en [Formato válido de una fecha en formato de texto](/es/docs/Web/HTML/Date_and_time_formats#formato_válido_de_una_fecha_en_formato_de_texto).

Puedes establecer un valor por defecto para la entrada introduciendo una fecha en el atributo [`value`](/es/docs/Web/HTML/Element/input#value) de la siguiente forma:

```html
<input type="date" value="2017-06-01" />
```

{{EmbedLiveSample('Value', 600, 40)}}

> **Nota:** El formato mostrado puede ser diferente del `value` real, ya que la fecha mostrada es formateada _según el idioma del navegador del usuario_, pero el valor analizado es siempre formateado a `aaaa-mm-dd`.

Tu puedes obtener y establecer el valor fecha en JavaScript con las propiedades `value` y `valueAsNumber` de {{domxref("HTMLInputElement")}}. Por ejemplo:

```js
var dateControl = document.querySelector('input[type="date"]');
dateControl.value = "2017-06-01";
console.log(dateControl.value); // imprime "2017-06-01"
console.log(dateControl.valueAsNumber); // imprime 1496275200000, una marca de fecha (en ms) en JavaScript.
```

Este código encuentra el primer elmento {{HTMLElement("input")}} donde `type` es `date` y establece su valor a `2017-06-01` (1 de junio de 2017). Entonces, lee el valor de vuelta en formato cadena de texto y número.

## Atributos adicionales

Junto con los atributos comunes a todos los elementos {{HTMLElement("input")}}, las entradas de tipo `date` tienen los siguientes atributos.

### max

La última fecha a aceptar. Si el [`value`](/es/docs/Web/HTML/Element/input#value) introducido en el elemento es posterior, el elemento no pasa la [validación de restricción](/es/docs/Web/Guide/HTML/Constraint_validation). Si el valor del atributo `max` es un valor que no es una fecha posible en el formato de cadena de texto `aaaa-mm-dd`, el elemento no tendrá un valor máximo.

Si los atributos `max` y `min` son establecidos, este valor tiene que ser una fecha en formtato cadena de texto posterior o igual a la fecha establecida en el atributo `min`.

### min

La fecha más temprana a aceptar. Si el [`value`](/es/docs/Web/HTML/Element/input#value) introducido en el elemento es anterior, el elemento no pasa la [validación de restricció](/es/docs/Web/Guide/HTML/Constraint_validation). Si el valor del atributo `max` es un valor que no es una fecha posible en el formato de cadena de texto `aaaa-mm-dd`, el elemento no tendrá un valor mínimo.

Si los atributos `max` y `min` son establecidos, este valor tiene que ser una fecha en formtato cadena de texto anterior o igual a la fecha establecida en el atributo `max`.

### step

El atributo `step` es un número que especifica la granularidad que un valor debe seguir o el valor especial `any`, el cuál está descrito más abajo. Solo los valores que son iguales a la base para ir avanzando ([`min`](#min) si está especificado, sino [`value`](/es/docs/Web/HTML/Element/input#value), o un valor por defecto apropiado si ninguno de estos dos es especificado) son válidos.

Si le damos un valor de cadena de texto `any` significa que ningún salto está marcado y, por lo tanto, cualquier valor está permitido (expecto otras constricciones, como [`min`](#min) y [`max`](#max)).

> **Nota:** Cuando los datos introducidos por el usuario no siguen la configuración de avance, puede que el {{Glossary("user agent")}} lo redondeé al valor válido más cercano, prefiriendo valores mayores cuando hay dos opciones iguales cercanas.

Para entradas de tipo `date`, el valor del `step` es dado en días; y es tratado como el número de milisegundo igual a 86.400.000 veces el valor del `step` (el valor numérico subyacente está definido en milisegundos). El valor por defecto del `step` es 1, indicando 1 día.

> **Nota:** Especificar `any` como el valor para `step` tiene el mismo efecto que `1` para las entradas de tipo `date`.

## Usando entradas de tipo fecha

Las entradas de tipo fecha son convenientes, ya que proveen una interfaz simple para elegir fechas y normalizan la fecha que le mandamos al servidor independientemente de la región del usuario. A pesar de esto, existen actualmente algunos problemas con `<input type="date">` producto del soporte limitado que ofrecen los diferentes navegadores.

En esta sección, veremos los usos más básicos y más complejos de `<input type="date">` y, luego, ofreceremos consejos para mitigar los problemas derivados por la falta de soporte de algunos navegadores.

> **Nota**: Esperamos que, a medida que más navegadores soporten esta funcionalidad, estos problemas vayan desapareciendo.

### Usos básicos del tipo fecha

El uso más simple de `<input type="date">` consta de una etiqueta `<input>` combinada con su {{htmlelement("label")}}, como se puede ver a continuación:

```html
<form action="https://example.com">
  <label>
    Enter your birthday:
    <input type="date" name="bday" />
  </label>

  <p><button>Submit</button></p>
</form>
```

{{EmbedLiveSample('Basic_uses_of_date', 600, 40)}}

Este HTML envía la fecha indicada bajo la palabra clave `bday` a `https://example.com`, siendo la URL resultante `https://example.com/?bday=1955-06-08`.

### Estipulando valores de fecha máximos y mínimos

Tu puedes usar los atributos [`min`](/es/docs/Web/HTML/Element/input#min) y [`max`](/es/docs/Web/HTML/Element/input#max) para restringir qué fechas puede introducir el usuario. En el siguiente ejemplo, establecemos la fecha mínima a `2017-04-01` y la fecha máxima a `2017-04-30`:

```html
<form>
  <label
    >Choose your preferred party date:
    <input type="date" name="party" min="2017-04-01" max="2017-04-30" />
  </label>
</form>
```

{{EmbedLiveSample('Setting_maximum_and_minimum_dates', 600, 40)}}

Como resultado, obtenemos que solo los días del mes de abril de 2017 pueden ser seleccionados (los meses y años que forman parte de la caja de texto no serán editables y las fechas fuera del mes de abril de 2017 no pueden ser selecionados en el menú de selección).

> **Nota:** Tu _debes_ ser capaz de usar el atributo [`step`](/es/docs/Web/HTML/Element/input#step) para modificar el número de días que son saltados cada vez que la fecha es incrementada (por ejemplo, que solo los sábados sean seleccionables). Sin embargo, no parece estar en ninguna implementación en el momento de escribir este artículo.

### Controlando el tamaño del input

`<input type="date">` no soporta los atributos de tamaño como lo es [`size`](/es/docs/Web/HTML/Element/input#size). Mejor usa [CSS](/es/docs/Web/CSS) para adaptar su tamaño.

## Validación

Por defecto, `<input type="date">` no valida su valor más allá de su formato. Generalmente, las interfaces no te dejan introducir nada que no sea una fecha (lo que es de ayuda), pero tu puedes dejar el campo vacío o entrar una fecha inválida (como 32 de abril) en los navegadores que no soportan el tipo `date`, cuando el tipo `date` regresa un tipo `text`.

Si tu usas [`min`](/es/docs/Web/HTML/Element/input#min) y [`max`](/es/docs/Web/HTML/Element/input#max) para limitar la disponibilidad de las fechas (véase [Estipulando valores de fecha máximos y mínimos](#estipulando_valores_de_fecha_máximos_y_mínimos)), los navegadores que lo soporten mostrarán un error si tu tratas de enviar una fecha que está por fuera de los límietes. A pesar de esto, tú necesitarás comprobar de nuevo el resultado enviado para asegurarte que el valor está entre esas fechas, si el menú de selección de fechas no está completamente soportado en el dispositivo del usuario.

Tú también puedes usar el atributo [`required`](/es/docs/Web/HTML/Element/input#required) para que completar la fecha sea obligatorio (se mostrará un error si queremos mandar una fecha vacía). Esto debería funcionar en casi todos los navegadores, incluso si la entrada termina regresando un tipo `text`.

Veamos un ejemplo con fecha mínima y máxima y, también, estableciendo el campo como requerido.

```html
<form>
  <label>
    Choose your preferred party date (required, April 1st to 20th):
    <input
      type="date"
      name="party"
      min="2017-04-01"
      max="2017-04-20"
      required />
    <span class="validity"></span>
  </label>

  <p>
    <button>Submit</button>
  </p>
</form>
```

Si intentas enviar el formulario con una fecha incompleta (o una fecha por fuera de los límites), el navegador mostrará un error. Intenta probar con el ejemplo:

{{EmbedLiveSample('Validation', 600, 100)}}

Este es el CSS usado en el ejemplo de arriba. Hacemos uso de los [pseudo-elementos](/es/docs/Web/CSS/Pseudo-elements) {{cssxref(":valid")}} e {{cssxref(":invalid")}} para añadir un icono al lado de la entrada, basándonos en si el valor es válido o no. Tuvimos que poner el icono en un {{htmlelement("span")}} y no dentro de la propia entrada, porque, al menos en Chrome, el contenido generado por las entradas está dentro del control del formulario y no puede ser puede ser mostrado o darle estilos correctamente.

```css
label {
  display: flex;
  align-items: center;
}

span::after {
  padding-left: 5px;
}

input:invalid + span::after {
  content: "✖";
}

input:valid + span::after {
  content: "✓";
}
```

> **Advertencia:** La validación en el lado del cliente _no es un sustituto_ de la validación en el servidor. Es fácil para alguien modificar el HTML o sobrepasar tu HTML completamente y mandar datos directamente a tu servidor. Si tu servidor no valida los datos recibidos, puede ocurrir un desastre: datos con un mal formato, demasiado grandes, del tipo equivocado, etc.

## Manejando el soporte de los navegadores

Como hemos mencionadao, el mayor problema con las entradas de tipo fecha es la [compatibilidad de los navegadores](#compatibilidad_de_los_navegadores).

Los navegadores que no la soportan, degradan al tipo texto, creando un problema de consistencia en la interfaz de usuario (los controles mostrados son diferentes) y en el manejo de los datos.

El segundo problema es uno más serio: con la entrada de tipo fecha, el valor es normalizado al formato `aaaa-mm-dd`. Pero con la entrada de tipo texto, el navegador no sabe reconocer en qué formato debe estar la fecha, y existen diferentes formantos en que las personas escriben fechas, como:

- `ddmmaaaa`
- `dd/mm/aaaa`
- `mm/dd/aaaa`
- `dd-mm-aaaa`
- `mm-dd-aaaa`
- `Mes dd, aaaa`

Una manera de darle solución a este problema es usar el atributo [`pattern`](/es/docs/Web/HTML/Element/input#pattern) en la entrada de tipo fecha. Aunque el menú de selección no lo use, si que lo hará la entrada de tipo texto. Por ejemplo, trata de ver el siguiente ejemplo en un navegador sin soporte:

```html
<form>
  <label
    >Enter your birthday:
    <input type="date" name="bday" required pattern="\d{4}-\d{2}-\d{2}" />
    <span class="validity"></span>
  </label>
  <p>
    <button>Submit</button>
  </p>
</form>
```

{{EmbedLiveSample('Handling_browser_support', 600, 100)}}

Si lo intentas mandar, verás que el navegador muestra un error y destaca la entrada como inválida si tu entrada no sigue el patrón `####-##-##` (donde `#` son digitos del 0 al 9). Por supuesto, esto no impide a los usuarios de introducir fechas inválidas o formatos incorrectos. Así que seguimos teniendo un problema.

```css hidden
span {
  position: relative;
}

span::after {
  right: -18px;
  position: absolute;
}

input:invalid + span::after {
  content: "✖";
}

input:valid + span::after {
  content: "✓";
}
```

Por el momento, la mejor forma de trabajar con fechas en los formularios de manera que sea para todos los navegadores, es haciendo que el usuario introduzca el día, mes y año en controles seperados o usar una librería de JavaScript como [jQuery date picker](https://jqueryui.com/datepicker/).

## Ejemplos

En este ejemplo, creamos dos muestras de elementos de IU para elegir fechas: un `<input type="date">` y una muestra de 3 elementos {{htmlelement("select")}} para navegadores anticuados que no soportan la entrada de tipo fecha nativa.

### HTML

El HTML es así:

```html
<form>
  <div class="nativeDatePicker">
    <label for="bday">Enter your birthday:</label>
    <input type="date" id="bday" name="bday" />
    <span class="validity"></span>
  </div>
  <p class="fallbackLabel">Enter your birthday:</p>
  <div class="fallbackDatePicker">
    <span>
      <label for="day">Day:</label>
      <select id="day" name="day"></select>
    </span>
    <span>
      <label for="month">Month:</label>
      <select id="month" name="month">
        <option selected>January</option>
        <option>February</option>
        <option>March</option>
        <option>April</option>
        <option>May</option>
        <option>June</option>
        <option>July</option>
        <option>August</option>
        <option>September</option>
        <option>October</option>
        <option>November</option>
        <option>December</option>
      </select>
    </span>
    <span>
      <label for="year">Year:</label>
      <select id="year" name="year"></select>
    </span>
  </div>
</form>
```

Los meses están directamente escritos en el código (ya que son siempre los mismos), mientras que el día y el año están dinámicamente generados dependiendo del mes y año seleccionado o del año actual (véanse los comentarios en el código más abajo para una explicación detallada de cómo funciona).

```css hidden
span {
  padding-left: 5px;
}

input:invalid + span::after {
  content: "✖";
}

input:valid + span::after {
  content: "✓";
}
```

### JavaScript

La otra parte del código que puede ser de interés es el código que sirve para detectar características (para detectar si el navegador soporta `<input type="date">`).

Para este ejemplo, creamos un nuevo elemento {{htmlelement("input")}} e intentamos establecer su `type` a `date`, entonces inmediatamente comprobamos cuál es su tipo (los navegadores sin soporte retornarán `text`, ya que el tipo `fecha` regresa el tipo `text`). Si `<input type="date">` no es soportada, ocultamos el menu de selección nativo y mostramos el elemento ({{htmlelement("select")}}).

```js
// definimos variables
var nativePicker = document.querySelector(".nativeDatePicker");
var fallbackPicker = document.querySelector(".fallbackDatePicker");
var fallbackLabel = document.querySelector(".fallbackLabel");

var yearSelect = document.querySelector("#year");
var monthSelect = document.querySelector("#month");
var daySelect = document.querySelector("#day");

// Ocultamos el select inicialmente
fallbackPicker.style.display = "none";
fallbackLabel.style.display = "none";

// testeamos si la nueva entrada es de tipo fecha o texto
var test = document.createElement("input");

try {
  test.type = "date";
} catch (e) {
  console.log(e.description);
}

// si lo es, se ejecuta el código dentro del bloque if() {}
if (test.type === "text") {
  // oculta el nativo y muestra el fallback
  nativePicker.style.display = "none";
  fallbackPicker.style.display = "block";
  fallbackLabel.style.display = "block";

  // introduce los datos de los días y los años dinámicamente
  // (Los meses son siempre los mismos)
  populateDays(monthSelect.value);
  populateYears();
}

function populateDays(month) {
  // borra la actual muestra de elementos <option> que quedan fuera
  // del <select> para el día, listo para que los siguentes días sean inyectados
  while (daySelect.firstChild) {
    daySelect.removeChild(daySelect.firstChild);
  }

  // Crea una variable que guarda el nuevo número de días a ser inyectados.
  var dayNum;

  // ¿Son 31 o 30 días?
  if (
    (month === "January") |
    (month === "March") |
    (month === "May") |
    (month === "July") |
    (month === "August") |
    (month === "October") |
    (month === "December")
  ) {
    dayNum = 31;
  } else if (
    (month === "April") |
    (month === "June") |
    (month === "September") |
    (month === "November")
  ) {
    dayNum = 30;
  } else {
    // Si el mes es febrero, calcula si el año es bisiesto o no.
    var year = yearSelect.value;
    var isLeap = new Date(year, 1, 29).getMonth() == 1;
    isLeap ? (dayNum = 29) : (dayNum = 28);
  }

  // Inyecta el número adecuado de nuevos elementos <option> dentro del <select> para los días
  for (i = 1; i <= dayNum; i++) {
    var option = document.createElement("option");
    option.textContent = i;
    daySelect.appendChild(option);
  }

  // Si el día previo ya ha sido establecido, establece el valor de daySelect
  // a ese día, para evitar saltar a uno cuando
  // el año cambie
  if (previousDay) {
    daySelect.value = previousDay;

    // Si el día anterior fue establecido en un número alto, digamos 31, y luego
    // y elegimos un mes con menos días (por ejemplo febrero),
    // esta parte del código se asegura de que el día con el valor más grande sea seleccionado
    // en vez de  mostrat un daySelect en blanco.
    if (daySelect.value === "") {
      daySelect.value = previousDay - 1;
    }

    if (daySelect.value === "") {
      daySelect.value = previousDay - 2;
    }

    if (daySelect.value === "") {
      daySelect.value = previousDay - 3;
    }
  }
}

function populateYears() {
  // tomar este año como un número
  var date = new Date();
  var year = date.getFullYear();

  // Hacer que este año y los cien años anteriores estén en el <select>
  for (var i = 0; i <= 100; i++) {
    var option = document.createElement("option");
    option.textContent = year - i;
    yearSelect.appendChild(option);
  }
}

// cuando los valores del los elementos <select> del año o el mes son cambiados, vuelve a correr populateDays()
// en el caso de que el cambio afecte al número de días disponible
yearSelect.onchange = function () {
  populateDays(monthSelect.value);
};

monthSelect.onchange = function () {
  populateDays(monthSelect.value);
};

//preserva el día seleccionado
var previousDay;

// actualiza que día ha sido establecido anteriormente
// fíjate en el final de populateDays() para entender el uso
daySelect.onchange = function () {
  previousDay = daySelect.value;
};
```

> **Nota**: Recuerda que algunos años tienen 53 semanas (véase [semanas por año](https://en.wikipedia.org/wiki/ISO_week_date#Weeks_per_year), en inglés). Ten esto en cuenta cuando desarrolles apps para producción

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- Los elementos {{HTMLElement("input")}} generícos y la interfaz usada para manipularlos, {{domxref("HTMLInputElement")}}
- [Tutorial seleccionador de fechas](/es/docs/Learn/Forms/Basic_native_form_controls)
- [Formatos de fecha y tiempo usados en HTML](/es/docs/Web/HTML/Date_and_time_formats)
- [Compatibilidad con las propiedades CSS](/es/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
