---
title: 'Valor del atributo HTML: `<input type="datetime-local">`'
short-title: <input type="datetime-local">
slug: Web/HTML/Reference/Elements/input/datetime-local
l10n:
  sourceCommit: 3944506d4afeeed774687cf3fd950878c6229bbc
---

Los elementos {{htmlelement("input")}} de tipo **`datetime-local`** crean controles de entrada que permiten al usuario introducir fácilmente tanto una fecha como una hora, lo que incluye el año, el mes y el día, así como la hora en horas y minutos.

{{InteractiveExample("HTML Demo: &lt;input type=&quot;datetime-local&quot;&gt;", "tabbed-shorter")}}

```html interactive-example
<label for="meeting-time">Elige una hora para tu cita:</label>

<input
  type="datetime-local"
  id="meeting-time"
  name="meeting-time"
  value="2018-06-12T19:30"
  min="2018-06-07T00:00"
  max="2018-06-14T00:00" />
```

```css interactive-example
label {
  display: block;
  font:
    1rem "Fira Sans",
    sans-serif;
}

input,
label {
  margin: 0.4rem 0;
}
```

La interfaz de usuario del control varía según el navegador. El control está pensado para representar _una fecha y hora local_, no necesariamente _la fecha y hora locales del usuario_. En otras palabras, el campo permite cualquier combinación válida de año, mes, día, hora y minuto, incluso si esa combinación no es válida en la zona horaria local del usuario (como la hora inexistente durante el adelanto de reloj de primavera al horario de verano).

## Valor

Una cadena que representa el valor de la fecha introducida en el campo. El formato del valor de fecha y hora que usa este tipo de campo se describe en [cadenas de fecha y hora locales](/es/docs/Web/HTML/Guides/Date_and_time_formats#local_date_and_time_strings).

Puedes establecer un valor predeterminado para el campo incluyendo una fecha y una hora dentro del atributo [`value`](/es/docs/Web/HTML/Reference/Elements/input#value), así:

```html
<label for="party"
  >Introduce la fecha y la hora para tu reserva de fiesta:</label
>
<input
  id="party"
  type="datetime-local"
  name="party-date"
  value="2017-06-01T08:30" />
```

{{ EmbedLiveSample('Value', 600, 60) }}

Cabe destacar que los formatos de fecha y hora mostrados difieren del `value` real: la fecha y la hora mostradas se formatean según la configuración regional del usuario, tal como lo indica su sistema operativo, mientras que el `value` de fecha y hora siempre tiene el formato `YYYY-MM-DDTHH:mm`. Por ejemplo, cuando se envía el valor anterior al servidor, se verá algo así: `party-date=2024-06-01T08:30`.

> [!NOTE]
> Ten en cuenta también que si estos datos se envían mediante HTTP [`GET`](/es/docs/Web/HTTP/Reference/Methods/GET), será necesario escapar el carácter de dos puntos para incluirlo en los parámetros de la URL, por ejemplo, `party-date=2024-06-01T08%3A30`. Consulta {{jsxref("Global_Objects/encodeURI", "encodeURI()")}} para ver una forma de hacerlo.

También puedes obtener y establecer el valor de la fecha en JavaScript usando la propiedad `value` {{domxref("HTMLInputElement")}}, por ejemplo:

```js
const dateControl = document.querySelector('input[type="datetime-local"]');
dateControl.value = "2017-06-01T08:30";
```

## Atributos adicionales

Además de los atributos comunes a todos los elementos {{HTMLElement("input")}}, los campos `datetime-local` ofrecen los siguientes atributos.

### max

La última fecha y hora que se aceptan. Si el [`value`](/es/docs/Web/HTML/Reference/Elements/input#value) introducido en el elemento es posterior a esta marca de tiempo, el elemento no supera la [validación de restricciones](/es/docs/Web/HTML/Guides/Constraint_validation). Si el valor del atributo `max` no es una cadena válida que siga el formato `YYYY-MM-DDTHH:mm`, entonces el elemento no tiene un valor máximo.

Este valor debe especificar una cadena de fecha posterior o igual a la especificada por el atributo `min`.

### min

La primera fecha y hora que se aceptan; las marcas de tiempo anteriores a esta harán que el elemento no supere la [validación de restricciones](/es/docs/Web/HTML/Guides/Constraint_validation). Si el valor del atributo `min` no es una cadena válida que siga el formato `YYYY-MM-DDTHH:mm`, entonces el elemento no tiene un valor mínimo.

Este valor debe especificar una cadena de fecha anterior o igual a la especificada por el atributo `max`.

### step

El atributo `step` es un número que especifica la granularidad que debe tener el valor, o el valor especial `any`, descrito más abajo. Solo son válidos los valores que representan un número entero de pasos a partir de la base de pasos. La base del paso es [`min`](#min) si se especifica, [`value`](/es/docs/Web/HTML/Reference/Elements/input#value) en caso contrario, o `0` (la época Unix, `1970-01-01T00:00`) si no se proporciona ninguno de los dos.

Para los campos `datetime-local`, el valor de `step` se expresa en segundos y se trata como un número de milisegundos igual a 1000 veces el valor de `step` (el valor numérico subyacente está en milisegundos). El valor predeterminado es 60, lo que indica 1 minuto.

Un valor de cadena `any` significa que no se aplica ningún paso, y se permite cualquier valor (salvo otras restricciones, como [`min`](#min) y [`max`](#max)). En la práctica, tiene el mismo efecto que `60` para los campos `datetime-local`, porque en este caso la interfaz del selector solo permite seleccionar minutos enteros.

> [!NOTE]
> Cuando los datos introducidos por el usuario no se ajustan a la configuración de pasos, el {{Glossary("user agent", "agente de usuario")}} puede redondear al valor válido más cercano, dando preferencia a los números en la dirección positiva cuando hay dos opciones igualmente cercanas.

## Uso de los campos datetime-local

Los campos de fecha y hora son prácticos para el desarrollador, ya que ofrecen una interfaz sencilla para elegir fechas y horas, y estandarizan el formato de los datos que se envían al servidor, independientemente de la configuración regional del usuario. Sin embargo, es importante tener en cuenta a tus usuarios. No les exijas introducir datos que tu aplicación no necesite para funcionar.

### Controlar el tamaño del campo

`<input type="datetime-local">` no admite atributos que controlen el tamaño del campo, como [`size`](/es/docs/Web/HTML/Reference/Elements/input#size). Deberás recurrir a [CSS](/es/docs/Web/CSS) para personalizar el tamaño de estos elementos.

### Configuración de zonas horarias

Una cosa que el tipo de campo `datetime-local` no ofrece es una forma de establecer la zona horaria o la configuración regional del control de fecha y hora. Esto estaba disponible en el tipo de campo `datetime`, pero ese tipo ahora es obsoleto, ya que se eliminó de la especificación. Los principales motivos de esta eliminación son la falta de implementación en los navegadores y las dudas sobre la interfaz y experiencia de usuario. Es más sencillo tener un control (o controles) para configurar la fecha y la hora, y luego gestionar la configuración regional en un control aparte.

Por ejemplo, si estás creando un sistema donde es probable que el usuario ya haya iniciado sesión y tenga su configuración regional establecida, podrías proporcionar la zona horaria mediante un tipo de campo [`hidden`](/es/docs/Web/HTML/Reference/Elements/input/hidden). Por ejemplo:

```html
<input type="hidden" id="timezone" name="timezone" value="-08:00" />
```

Por otro lado, si se te exige permitir que el usuario introduzca una zona horaria junto con un campo de fecha y hora, podrías tener un elemento {{htmlelement("select")}} para permitir al usuario establecer la zona horaria correcta eligiendo una ubicación particular entre un conjunto de ubicaciones:

```html
<select name="timezone" id="timezone">
  <option value="Pacific/Kwajalein">Eniwetok, Kwajalein</option>
  <option value="Pacific/Midway">Isla Midway, Samoa</option>
  <option value="Pacific/Honolulu">Hawái</option>
  <option value="Pacific/Marquesas">Taiohae</option>
  <!-- y así sucesivamente -->
</select>
```

En cualquier caso, los valores de fecha/hora y de zona horaria se enviarían al servidor como datos independientes, y luego tendrías que almacenarlos adecuadamente en la base de datos del servidor.

## Validación

Por defecto, `<input type="datetime-local">` no aplica ninguna validación a los valores introducidos. Las implementaciones de la interfaz generalmente no permiten introducir algo que no sea una fecha y hora —lo cual es útil—, pero un usuario aún podría no introducir ningún valor y enviar el formulario, o introducir una fecha u hora no válida (por ejemplo, el 32 de abril).

Puedes usar [`min`](/es/docs/Web/HTML/Reference/Elements/input#min) y [`max`](/es/docs/Web/HTML/Reference/Elements/input#max) para restringir las fechas disponibles (consulta [Configuración de fechas y horas máximas y mínimas](#configuración_de_fechas_y_horas_máximas_y_mínimas)), y puedes usar el atributo [`required`](/es/docs/Web/HTML/Reference/Elements/input#required) para que sea obligatorio completar la fecha y hora. Como resultado, los navegadores mostrarán un error si intentas enviar una fecha que esté fuera del rango establecido o un campo de fecha vacío.

Veamos un ejemplo; aquí hemos establecido valores mínimos y máximos de fecha/hora, y también hemos hecho que el campo sea obligatorio:

```html
<form>
  <div>
    <label for="party">
      Elige la fecha y hora que prefieras para tu fiesta (obligatorio, del 1 de
      junio a las 8:30 a. m. al 30 de junio a las 4:30 p. m.):
    </label>
    <input
      id="party"
      type="datetime-local"
      name="party-date"
      min="2017-06-01T08:30"
      max="2017-06-30T16:30"
      required />
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit" value="¡Reservar fiesta!" />
  </div>
</form>
```

Si intentas enviar el formulario con una fecha incompleta (o con una fecha fuera del rango establecido), el navegador mostrará un error. Prueba ahora con el ejemplo:

{{ EmbedLiveSample('Validation', 600, 120) }}

Este es el CSS utilizado en el ejemplo anterior. Aquí usamos las propiedades CSS {{cssxref(":valid")}} y {{cssxref(":invalid")}} para aplicar estilos al campo según si el valor actual es válido. Colocamos los iconos en un elemento {{htmlelement("span")}} junto al campo.

```css
div {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

label {
  display: inline-block;
  width: 300px;
}

input:invalid + span::after {
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  content: "✓";
  padding-left: 5px;
}
```

> [!WARNING]
> La validación de formularios HTML _no_ sustituye a los scripts que garantizan que los datos introducidos tengan el formato adecuado. Es demasiado fácil para alguien realizar ajustes en el HTML para eludir la validación o eliminarla por completo. También es posible que alguien omita por completo tu código HTML y envíe los datos directamente a tu servidor. Si tu código del servidor no valida los datos que recibe, pueden surgir problemas cuando se envían datos con un formato incorrecto (o datos demasiado grandes, de un tipo incorrecto, etc.).

> [!NOTE]
> Con un campo `datetime-local`, el valor de la fecha siempre se normaliza al formato `YYYY-MM-DDTHH:mm`.

## Ejemplos

### Usos básicos de datetime-local

El uso más básico de `<input type="datetime-local">` consiste en una combinación sencilla de un elemento `<input>` y un elemento {{htmlelement("label")}}, como se muestra a continuación:

```html
<form>
  <label for="party"
    >Introduce la fecha y la hora para tu reserva de fiesta:</label
  >
  <input id="party" type="datetime-local" name="party-date" />
</form>
```

{{ EmbedLiveSample('Basic_uses_of_datetime-local', 600, 40) }}

### Configuración de fechas y horas máximas y mínimas

Puedes usar los atributos [`min`](/es/docs/Web/HTML/Reference/Elements/input#min) y [`max`](/es/docs/Web/HTML/Reference/Elements/input#max) para restringir las fechas y horas que el usuario puede elegir. En el siguiente ejemplo, establecemos una fecha y hora mínima de `2025-06-01T08:30` y una máxima de `2025-06-30T16:30`:

```html
<form>
  <label for="party"
    >Introduce la fecha y la hora para tu reserva de fiesta:</label
  >
  <input
    id="party"
    type="datetime-local"
    name="party-date"
    min="2025-06-01T08:30"
    max="2025-06-30T16:30" />
</form>
```

{{ EmbedLiveSample('Setting_maximum_and_minimum_dates_and_times', 600, 40) }}

Solo se pueden seleccionar días de junio de 2025. Según el navegador que utilices, es posible que no se puedan seleccionar horas fuera de los valores especificados. En otros navegadores, se pueden seleccionar fechas y horas no válidas, pero coincidirán con {{CSSXref(":invalid")}} y {{CSSXref(":out-of-range")}}, y no superarán la [validación](#validación).

En algunos navegadores (Safari), el selector de fecha parecerá permitir cualquier fecha, pero el valor se ajustará al rango válido cuando se seleccione una fecha.

El rango válido incluye todas las horas comprendidas entre los valores `min` y `max`; la hora del día solo está restringida en la primera y la última fecha del rango.

> [!NOTE]
> Deberías poder usar el atributo [`step`](/es/docs/Web/HTML/Reference/Elements/input#step) para variar el número de días que se avanzan cada vez que se incrementa la fecha (por ejemplo, tal vez solo quieres que se puedan seleccionar los sábados). Sin embargo, esto no parece funcionar de forma efectiva en ninguna implementación en el momento de escribir esto.

## Resumen técnico

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#valor">Valor</a></strong></td>
      <td>
        Una cadena que representa una fecha y hora (en la
        zona horaria local), o vacío.
      </td>
    </tr>
    <tr>
      <td><strong>Eventos</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}} y
        {{domxref("Element/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>Atributos comunes admitidos</strong></td>
      <td>
        <a href="/es/docs/Web/HTML/Reference/Elements/input#autocomplete"><code>autocomplete</code></a>,
        <a href="/es/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>,
        <a href="/es/docs/Web/HTML/Reference/Elements/input#readonly"><code>readonly</code></a>,
        <a href="/es/docs/Web/HTML/Reference/Elements/input#step"><code>step</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>Atributos IDL</strong></td>
      <td>
        <a href="/es/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>,
        <a href="/es/docs/Web/HTML/Reference/Elements/input#value"><code>value</code></a>,
        <code>valueAsDate</code>,
        <code>valueAsNumber</code>
      </td>
    </tr>
    <tr>
      <td><strong>Interfaz DOM</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>Rol ARIA implícito</strong></td>
      <td><a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">ningún rol correspondiente</a></td>
    </tr>
  </tbody>
</table>

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- El elemento genérico {{HTMLElement("input")}} y la interfaz utilizada para manipularlo, {{domxref("HTMLInputElement")}}
- [`<input type="date">`](/es/docs/Web/HTML/Reference/Elements/input/date) y [`<input type="time">`](/es/docs/Web/HTML/Reference/Elements/input/time)
- [Formatos de fecha y hora utilizados en HTML](/es/docs/Web/HTML/Guides/Date_and_time_formats)
- [Tutorial del selector de fecha y hora](/es/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
