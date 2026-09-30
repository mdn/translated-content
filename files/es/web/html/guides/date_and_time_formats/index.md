---
title: Usar formatos de fecha y hora en HTML
short-title: Formatos de fecha y hora
slug: Web/HTML/Guides/Date_and_time_formats
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Algunos elementos HTML usan valores de fecha u hora. En este artículo se describen los formatos de las cadenas que especifican estos valores.

Entre los elementos que usan estos formatos están ciertas formas del elemento {{HTMLElement("input")}} que permiten al usuario elegir o especificar una fecha, una hora o ambas, así como los elementos {{HTMLElement("ins")}} y {{HTMLElement("del")}}, cuyo atributo [`datetime`](/es/docs/Web/HTML/Reference/Elements/ins#atributos) especifica la fecha, o la fecha y la hora, en que se insertó o eliminó el contenido.

En `<input>`, los valores de [`type`](/es/docs/Web/HTML/Reference/Elements/input#type) de los campos cuyo [`value`](/es/docs/Web/HTML/Reference/Elements/input#value) contiene una cadena que representa una fecha u hora son:

- [`date`](/es/docs/Web/HTML/Reference/Elements/input/date)
- [`datetime-local`](/es/docs/Web/HTML/Reference/Elements/input/datetime-local)
- [`month`](/es/docs/Web/HTML/Reference/Elements/input/month)
- [`time`](/es/docs/Web/HTML/Reference/Elements/input/time)
- [`week`](/es/docs/Web/HTML/Reference/Elements/input/week)

## Ejemplos

Antes de entrar en los detalles de cómo se escriben y analizan las cadenas de fecha y hora en HTML, aquí tienes algunos ejemplos que te darán una buena idea de cómo son los formatos de cadena de fecha y hora más usados.

<table class="standard-table">
  <caption>
    Ejemplos de cadenas de fecha y hora en HTML
  </caption>
  <thead>
    <tr>
      <th scope="col">Cadena</th>
      <th colspan="2" scope="col">Fecha u hora</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>2005-06-07</code></td>
      <td>7 de junio de 2005</td>
      <td>
        <a href="#cadenas_de_fecha"
          >[detalles]</a
        >
      </td>
    </tr>
    <tr>
      <td><code>08:45</code></td>
      <td>8:45 a. m.</td>
      <td>
        <a href="#cadenas_de_hora"
          >[detalles]</a
        >
      </td>
    </tr>
    <tr>
      <td><code>08:45:25</code></td>
      <td>8:45 a. m. y 25 segundos</td>
      <td>
        <a href="#cadenas_de_hora"
          >[detalles]</a
        >
      </td>
    </tr>
    <tr>
      <td><code>0033-08-04T03:40</code></td>
      <td>3:40 a. m. del 4 de agosto del año 33</td>
      <td>
        <a
          href="#cadenas_de_fecha_y_hora_locales"
          >[detalles]</a
        >
      </td>
    </tr>
    <tr>
      <td><code>1977-04-01T14:00:30</code></td>
      <td>30 segundos después de las 2:00 p. m. del 1 de abril de 1977</td>
      <td>
        <a
          href="#cadenas_de_fecha_y_hora_locales"
          >[detalles]</a
        >
      </td>
    </tr>
    <tr>
      <td><code>1901-01-01T00:00Z</code></td>
      <td>Medianoche UTC del 1 de enero de 1901</td>
      <td>
        <a
          href="#cadenas_de_fecha_y_hora_globales"
          >[detalles]</a
        >
      </td>
    </tr>
    <tr>
      <td><code>1901-01-01T00:00:01-04:00</code></td>
      <td>
        1 segundo después de la medianoche, hora estándar del este (EST), del 1 de enero de 1901
      </td>
      <td>
        <a
          href="#cadenas_de_fecha_y_hora_globales"
          >[detalles]</a
        >
      </td>
    </tr>
  </tbody>
</table>

## Conceptos básicos

Antes de ver los distintos formatos de las cadenas relacionadas con fechas y horas que usan los elementos HTML, conviene entender algunos aspectos fundamentales de cómo se definen. HTML usa una variante del estándar [ISO 8601](https://es.wikipedia.org/wiki/ISO_8601) para sus cadenas de fecha y hora. Vale la pena revisar las descripciones de los formatos que usas para asegurarte de que tus cadenas son realmente compatibles con HTML, ya que la especificación de HTML incluye algoritmos para analizar estas cadenas que son más precisos que ISO 8601, así que puede haber diferencias sutiles en el formato esperado de las cadenas de fecha y hora.

### Juego de caracteres

En HTML, las fechas y horas son siempre cadenas que usan el juego de caracteres {{Glossary("ASCII")}}.

### Números de año

Para simplificar el formato básico de las cadenas de fecha en HTML, la especificación exige que todos los años se indiquen con el [calendario gregoriano](https://es.wikipedia.org/wiki/Calendario_gregoriano) moderno (o **proléptico**). Aunque las interfaces de usuario pueden permitir introducir fechas con otros calendarios, el valor subyacente siempre usa el calendario gregoriano.

Aunque el calendario gregoriano no se creó hasta el año 1582 (y sustituyó al calendario juliano, que era parecido), a efectos de HTML el calendario gregoriano se extiende hacia atrás hasta el año 1 d. C. Asegúrate de tenerlo en cuenta en las fechas más antiguas.

En las fechas de HTML, los años siempre tienen al menos cuatro dígitos; los años anteriores al 1000 se rellenan con ceros a la izquierda (`0`), así que el año 72 se escribe `0072`. Los años anteriores al 1 d. C. no se admiten, así que HTML no admite el año 1 a. C. ni anteriores.

Un año tiene normalmente 365 días, salvo en los **[años bisiestos](#años_bisiestos)**.

#### Años bisiestos

Un **año bisiesto** es cualquier año divisible por 400 _o_ divisible por 4 pero no por 100. Aunque el año del calendario tiene normalmente 365 días, en realidad la Tierra tarda unos 365,2422 días en completar una órbita alrededor del Sol. Los años bisiestos ayudan a ajustar el calendario para mantenerlo sincronizado con la posición real del planeta en su órbita. Añadir un día al año cada cuatro años hace, en esencia, que el año medio dure 365,25 días, lo que se acerca bastante al valor correcto.

Los ajustes del algoritmo (hacer bisiesto un año divisible por 400 y omitir los bisiestos cuando el año es divisible por 100) ayudan a acercar aún más la media al número correcto de días (365,2425 días). Los científicos añaden de vez en cuando segundos intercalares al calendario (en serio) para compensar las tres diezmilésimas de día que faltan y la desaceleración gradual y natural de la rotación de la Tierra.

Aunque el mes `02`, febrero, tiene normalmente 28 días, en los años bisiestos tiene 29.

### Meses del año

El año tiene 12 meses, numerados del 1 al 12. Siempre se representan con una cadena ASCII de dos dígitos cuyo valor va de `01` a `12`. Consulta la tabla de la sección [Días del mes](#días_del_mes) para ver los números de los meses y sus nombres correspondientes (y su duración en días).

### Días del mes

Los meses 1, 3, 5, 7, 8, 10 y 12 tienen 31 días. Los meses 4, 6, 9 y 11 tienen 30 días. El mes 2, febrero, tiene 28 días la mayoría de los años, pero 29 en los años bisiestos. Se detalla en la tabla siguiente.

<table class="standard-table">
  <caption>
    Los meses del año y su duración en días
  </caption>
  <thead>
    <tr>
      <th scope="row">Número de mes</th>
      <th scope="col">Nombre</th>
      <th scope="col">Duración en días</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">01</th>
      <td>Enero</td>
      <td>31</td>
    </tr>
    <tr>
      <th scope="row">02</th>
      <td>Febrero</td>
      <td>28 (29 en los años bisiestos)</td>
    </tr>
    <tr>
      <th scope="row">03</th>
      <td>Marzo</td>
      <td>31</td>
    </tr>
    <tr>
      <th scope="row">04</th>
      <td>Abril</td>
      <td>30</td>
    </tr>
    <tr>
      <th scope="row">05</th>
      <td>Mayo</td>
      <td>31</td>
    </tr>
    <tr>
      <th scope="row">06</th>
      <td>Junio</td>
      <td>30</td>
    </tr>
    <tr>
      <th scope="row">07</th>
      <td>Julio</td>
      <td>31</td>
    </tr>
    <tr>
      <th scope="row">08</th>
      <td>Agosto</td>
      <td>31</td>
    </tr>
    <tr>
      <th scope="row">09</th>
      <td>Septiembre</td>
      <td>30</td>
    </tr>
    <tr>
      <th scope="row">10</th>
      <td>Octubre</td>
      <td>31</td>
    </tr>
    <tr>
      <th scope="row">11</th>
      <td>Noviembre</td>
      <td>30</td>
    </tr>
    <tr>
      <th scope="row">12</th>
      <td>Diciembre</td>
      <td>31</td>
    </tr>
  </tbody>
</table>

## Cadenas de semana

Una cadena de semana especifica una semana dentro de un año determinado. Una **cadena de semana válida** consta de un [número de año](#números_de_año) válido, seguido de un guion (`-`, o U+002D), luego la letra mayúscula `W` (U+0057) y, por último, un valor de dos dígitos con la semana del año.

La semana del año es una cadena de dos dígitos entre `01` y `53`. Cada semana empieza el lunes y termina el domingo. Esto significa que los primeros días de enero pueden considerarse parte del año-semana anterior, y los últimos días de diciembre, parte del año-semana siguiente. La primera semana del año es la que contiene el _primer jueves del año_. Por ejemplo, el primer jueves de 1953 fue el 1 de enero, así que esa semana, que empezó el lunes 29 de diciembre, se considera la primera semana del año. Por lo tanto, el 30 de diciembre de 1952 pertenece a la semana `1953-W01`.

Un año tiene 53 semanas si:

- El primer día del año del calendario (1 de enero) es jueves **o**
- El primer día del año (1 de enero) es miércoles y el año es [bisiesto](#años_bisiestos)

Todos los demás años tienen 52 semanas.

| Cadena de semana | Semana y año (intervalo de fechas)                                    |
| ---------------- | --------------------------------------------------------------------- |
| `2001-W37`       | Semana 37 de 2001 (del 10 al 16 de septiembre de 2001)                |
| `1953-W01`       | Semana 1 de 1953 (del 29 de diciembre de 1952 al 4 de enero de 1953)  |
| `1948-W53`       | Semana 53 de 1948 (del 27 de diciembre de 1948 al 2 de enero de 1949) |
| `1949-W01`       | Semana 1 de 1949 (del 3 al 9 de enero de 1949)                        |
| `0531-W16`       | Semana 16 del año 531 (del 13 al 19 de abril del 531)                 |
| `0042-W04`       | Semana 4 del año 42 (del 21 al 27 de enero del 42)                    |

Observa que tanto el año como el número de semana se rellenan con ceros a la izquierda: el año hasta cuatro dígitos y la semana hasta dos.

## Cadenas de mes

Una cadena de mes representa un mes concreto en el tiempo, no un mes genérico del año. Es decir, en lugar de representar "enero", una cadena de mes de HTML representa un mes y un año juntos, como "enero de 1972".

Una **cadena de mes válida** consta de un [número de año](#números_de_año) válido (una cadena de al menos cuatro dígitos), seguido de un guion (`-`, o U+002D) y de un [número de mes](#meses_del_año) de dos dígitos, donde `01` representa enero y `12` representa diciembre.

| Cadena de mes | Mes y año             |
| ------------- | --------------------- |
| `17310-09`    | Septiembre de 17310   |
| `2019-01`     | Enero de 2019         |
| `1993-11`     | Noviembre de 1993     |
| `0571-04`     | Abril del 571         |
| `0001-07`     | Julio del año 1 d. C. |

Observa que todos los años tienen al menos cuatro caracteres; los años con menos de cuatro dígitos se rellenan con ceros a la izquierda.

## Cadenas de fecha

Una cadena de fecha válida consta de una [cadena de mes](#cadenas_de_mes), seguida de un guion (`-`, o U+002D) y de un [día del mes](#días_del_mes) de dos dígitos.

| Cadena de fecha | Fecha completa         |
| --------------- | ---------------------- |
| `1993-11-01`    | 1 de noviembre de 1993 |
| `1066-10-14`    | 14 de octubre de 1066  |
| `0571-04-22`    | 22 de abril del 571    |
| `0062-02-05`    | 5 de febrero del 62    |

## Cadenas de hora

Una cadena de hora puede especificar una hora con precisión de minutos, de segundos o de milisegundos. No se permite especificar solo la hora o solo los minutos. Una **cadena de hora válida** consta, como mínimo, de una hora de dos dígitos seguida de dos puntos (`:`, U+003A) y de un minuto de dos dígitos. Opcionalmente, el minuto puede ir seguido de otros dos puntos y de un número de segundos de dos dígitos. También se pueden especificar, de forma opcional, los milisegundos, añadiendo un punto decimal (`.`, U+002E) seguido de uno, dos o tres dígitos.

Hay algunas reglas básicas adicionales:

- La hora se especifica siempre con el reloj de 24 horas: `00` es la medianoche y las 11 p. m. son `23`. No se permiten valores fuera del intervalo `00` – `23`.
- El minuto debe ser un número de dos dígitos entre `00` y `59`. No se permiten valores fuera de ese intervalo.
- Si se omiten los segundos (para especificar una hora con precisión solo de minutos), no debe haber dos puntos después de los minutos.
- Si se especifica, la parte entera de los segundos debe estar entre `00` y `59`. _No_ se pueden especificar segundos intercalares con valores como `60` o `61`.
- Si se especifican los segundos y son un número entero, no deben ir seguidos de un punto decimal.
- Si se incluye una fracción de segundo, puede tener de uno a tres dígitos, que indican el número de milisegundos. Va después del punto decimal que sigue al componente de los segundos de la cadena de hora.

| Cadena de hora | Hora                                                        |
| -------------- | ----------------------------------------------------------- |
| `00:00:30.75`  | 12:00:30.75 a. m. (30,75 segundos después de la medianoche) |
| `12:15`        | 12:15 p. m.                                                 |
| `13:44:25`     | 1:44:25 p. m. (25 segundos después de la 1:44 p. m.)        |

## Cadenas de fecha y hora locales

Una cadena [`datetime-local`](/es/docs/Web/HTML/Reference/Elements/input/datetime-local) válida consta de una cadena `date` y una cadena `time` concatenadas, separadas por la letra `T` o por un espacio. La cadena no incluye información sobre la zona horaria; se supone que la fecha y la hora están en la zona horaria local del usuario.

Cuando estableces el [`value`](/es/docs/Web/HTML/Reference/Elements/input#value) de un campo `datetime-local`, la cadena se **normaliza** a una forma estándar. Las cadenas `datetime` normalizadas siempre usan la letra `T` para separar la fecha y la hora, y la parte de la hora es lo más corta posible. Para ello, se omite el componente de los segundos si su valor es `:00`.

<table class="standard-table">
  <caption>
    Ejemplos de cadenas
    <code>datetime-local</code>
    válidas
  </caption>
  <thead>
    <tr>
      <th scope="col">Cadena de fecha y hora</th>
      <th scope="col">Cadena de fecha y hora normalizada</th>
      <th scope="col">Fecha y hora reales</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>1986-01-28T11:38:00.01</code></td>
      <td><code>1986-01-28T11:38:00.01</code></td>
      <td>28 de enero de 1986 a las 11:38:00.01 a. m.</td>
    </tr>
    <tr>
      <td><code>1986-01-28 11:38:00.010</code></td>
      <td>
        <p><code>1986-01-28T11:38:00.01</code></p>
        <p>
          Observa que, tras la normalización, es la misma cadena que la cadena
          <code>datetime-local</code> anterior. El espacio se ha sustituido por
          el carácter <code>T</code> y se ha eliminado el cero final de la fracción
          de segundo para que la cadena sea lo más corta posible.
        </p>
      </td>
      <td>28 de enero de 1986 a las 11:38:00.01 a. m.</td>
    </tr>
    <tr>
      <td><code>0170-07-31T22:00:00</code></td>
      <td>
        <p><code>0170-07-31T22:00</code></p>
        <p>
          Observa que la forma normalizada de esta fecha omite el
          <code>:00</code> que indica que los segundos son cero,
          porque los segundos son opcionales cuando valen cero, y la cadena normalizada
          reduce al mínimo la longitud de la cadena.
        </p>
      </td>
      <td>31 de julio del 170 a las 10:00 p. m.</td>
    </tr>
  </tbody>
</table>

## Cadenas de fecha y hora globales

Una cadena de fecha y hora global especifica una fecha y una hora, además de la zona horaria en la que ocurren. Una **cadena de fecha y hora global válida** tiene el mismo formato que una [cadena de fecha y hora local](#cadenas_de_fecha_y_hora_locales), salvo que lleva añadida al final, después de la hora, una cadena de zona horaria.

### Cadena de desfase de zona horaria

Una cadena de desfase de zona horaria especifica el desfase, como un número positivo o negativo de horas y minutos, respecto a la base horaria estándar. Hay dos bases horarias estándar, muy parecidas pero no exactamente iguales:

- Para las fechas posteriores a la creación del [tiempo universal coordinado](https://es.wikipedia.org/wiki/Tiempo_universal_coordinado) (UTC), a principios de la década de 1960, la base horaria es `Z`, y el desfase indica la diferencia de una zona horaria concreta respecto a la hora del meridiano de origen, a 0º de longitud (que pasa por el Real Observatorio de Greenwich, en Inglaterra).
- Para las fechas anteriores al UTC, la base horaria se expresa en cambio en [UT1](https://es.wikipedia.org/wiki/UT1), que es el tiempo solar terrestre contemporáneo en el meridiano de origen.

La cadena de zona horaria se añade inmediatamente después de la hora en la cadena de fecha y hora. Puedes indicar `Z` como cadena de desfase de zona horaria para señalar que la hora se especifica en UTC. En caso contrario, la cadena de zona horaria se construye así:

1. Un carácter que indica el signo del desfase: el signo más (`+`, o U+002B) para las zonas horarias al este del meridiano de origen, o el signo menos (`-`, o U+002D) para las zonas horarias al oeste del meridiano de origen.
2. Un número de dos dígitos con las horas de desfase de la zona horaria respecto al meridiano de origen. Este valor debe estar entre `00` y `23`.
3. Un carácter de dos puntos (`:`) opcional.
4. Un número de dos dígitos con los minutos pasados de la hora; este valor debe estar entre `00` y `59`.

Aunque este formato admite zonas horarias entre -23:59 y +23:59, el intervalo actual de desfases de zona horaria va de -12:00 a +14:00, y ninguna zona horaria tiene hoy un desfase en minutos distinto de `00`, `30` o `45`. Esto puede cambiar prácticamente en cualquier momento, ya que los países son libres de modificar sus zonas horarias cuando quieran y como quieran.

<table class="no-markdown">
  <caption>
    Ejemplos de cadenas de fecha y hora globales válidas
  </caption>
  <thead>
    <tr>
      <th scope="col">Cadena de fecha y hora global</th>
      <th scope="col">Fecha y hora global real</th>
      <th scope="col">Fecha y hora en el meridiano de origen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>2005-06-07T00:00Z</code></td>
      <td>7 de junio de 2005 a medianoche UTC</td>
      <td>7 de junio de 2005 a medianoche</td>
    </tr>
    <tr>
      <td><code>1789-08-22T12:30:00.1-04:00</code></td>
      <td>
        22 de agosto de 1789, una décima de segundo después de las 12:30 p. m., hora de verano del
        este (EDT)
      </td>
      <td>22 de agosto de 1789, una décima de segundo después de las 4:30 p. m.</td>
    </tr>
    <tr>
      <td><code>3755-01-01 00:00+10:00</code></td>
      <td>
        1 de enero de 3755 a medianoche, hora estándar del este de Australia (AEST)
      </td>
      <td>31 de diciembre de 3754 a las 2:00 p. m.</td>
    </tr>
  </tbody>
</table>

## Problemas con las fechas

Debido a problemas de almacenamiento y de precisión de los datos, conviene que conozcas algunos problemas del lado del cliente y del servidor.

### El problema del año 2038 (a menudo del lado del servidor)

JavaScript usa números de coma flotante de doble precisión para almacenar las fechas, como con todos los números, lo que significa que el código JavaScript no sufrirá el problema del año 2038 (Y2K38) salvo que se usen conversiones a enteros o trucos a nivel de bits, porque todos los operadores de bits de JavaScript usan enteros de 32 bits con signo en complemento a dos.

El problema está en el lado del servidor: el almacenamiento de fechas mayores que 2^31 - 1. Para solucionarlo, debes almacenar todas las fechas en el servidor como enteros de 32 bits sin signo, enteros de 64 bits con signo o números de coma flotante de doble precisión. Si tu servidor está escrito en PHP, la solución puede requerir actualizar PHP a una versión más reciente y actualizar tu hardware a x86_64 o IA64. Si no puedes cambiar de hardware, puedes intentar emular hardware de 64 bits dentro de una máquina virtual de 32 bits, pero la mayoría de las máquinas virtuales no admiten este tipo de virtualización, ya que la estabilidad puede verse afectada, y el rendimiento sin duda se verá muy afectado.

### El problema del año 10 000 (a menudo del lado del cliente)

En muchos servidores, las fechas se almacenan como números en lugar de como cadenas: números de tamaño fijo e independientes del formato (salvo por el orden de los bytes). Después del año 10 000, esos números serán simplemente un poco más grandes que antes, así que muchos servidores no tendrán problemas con los formularios enviados después del año 10 000.

El problema está en el lado del cliente: el análisis de fechas con más de 4 dígitos en el año.

```html
<!--medianoche del 1 de enero de 10000: el momento exacto del Y10K-->
<input type="datetime-local" value="+010000-01-01T05:00" />
```

Tenemos que preparar nuestro código para cualquier número de dígitos, no solo para 5. La siguiente función de JavaScript establece el valor mediante programación:

```js
function setValue(element, date) {
  const isoString = date.toISOString();
  element.value = isoString.substring(0, isoString.indexOf("T") + 6);
}
```

¿Por qué preocuparse por el problema del año 10 000 si va a ocurrir muchos siglos después de tu muerte? Precisamente porque ya habrás muerto, así que las empresas que usen tu software se quedarán atrapadas con él sin ningún otro programador que conozca el sistema lo bastante bien como para arreglarlo.

## Véase también

- {{HTMLElement("input")}}
- {{HTMLElement("ins")}} y {{HTMLElement("del")}}: consulta el atributo `datetime`, que especifica una fecha, o una fecha y hora locales, en la que se insertó o eliminó el contenido
- [La especificación ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html)
- [Representar fechas y horas](/es/docs/Web/JavaScript/Guide/Representing_dates_times) en la [Guía de JavaScript](/es/docs/Web/JavaScript/Guide)
- El objeto {{jsxref("Date")}} de JavaScript
- El objeto [`Intl.DateTimeFormat`](/es/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat), para dar formato a fechas y horas según una configuración regional
