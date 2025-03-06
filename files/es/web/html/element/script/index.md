---
title: "<script>: The Script element"
slug: Web/HTML/Element/script
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

El elemento **`<script>`** [HTML](/es/docs/Web/HTML) se utiliza para incrustar código ejecutable o datos; típicamente se usa para incrustar o hacer referencia a código JavaScript. El elemento `<script>` también puede usarse con otros lenguajes, como el lenguaje de programación de shaders GLSL de [WebGL](/es/docs/Web/API/WebGL_API) y [JSON](/es/docs/Glossary/JSON).

## Atributos

Este elemento incluye los [atributos globales](/es/docs/Web/HTML/Global_attributes).

- `async`

  - : Para scripts clásicos, si el atributo `async` está presente, el script clásico se descargará en paralelo al análisis y se evaluará tan pronto como esté disponible.

    Para [scripts de módulo](/es/docs/Web/JavaScript/Guide/Modules), si el atributo `async` está presente, los scripts y todas sus dependencias se descargarán en paralelo al análisis y se evaluarán tan pronto como estén disponibles.

    > [!WARNING]
    > Este atributo no debe usarse si el atributo `src` está ausente (es decir, para scripts en línea), ya que en este caso no tendría efecto.

    Este atributo permite eliminar JavaScript **bloqueante del analizador**, donde el navegador tendría que cargar y evaluar los scripts antes de continuar con el análisis. En este caso, `defer` tiene un efecto similar.

    Si el atributo se especifica junto con el atributo `defer`, el elemento actuará como si solo se hubiera especificado el atributo `async`.

    Este es un atributo booleano: la presencia de un atributo booleano en un elemento representa el valor verdadero, y la ausencia del atributo representa el valor falso.

    Consulte [Compatibilidad con navegadores](#browser_compatibility) para notas sobre el soporte del navegador. Consulte también [Scripts asíncronos para asm.js](/es/docs/Games/Techniques/Async_scripts).

- `attributionsrc` {{experimental_inline}}

  - : Especifica que deseas que el navegador envíe un encabezado {{httpheader("Attribution-Reporting-Eligible")}} junto con la solicitud del recurso del script. En el lado del servidor, esto se utiliza para activar el envío de un encabezado {{httpheader("Attribution-Reporting-Register-Source")}} o {{httpheader("Attribution-Reporting-Register-Trigger")}} en la respuesta, para registrar una [fuente de atribución](/es/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) o un [disparador de atribución](/es/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) basado en JavaScript, respectivamente. Qué encabezado de respuesta se debe enviar depende del valor del encabezado `Attribution-Reporting-Eligible` que activó el registro.

    > [!NOTE]
    > Alternativamente, las fuentes de atribución o disparadores basados en JavaScript se pueden registrar enviando una solicitud {{domxref("Window/fetch", "fetch()")}} que contenga la opción `attributionReporting` (ya sea configurada directamente en la llamada `fetch()` o en un objeto {{domxref("Request")}} pasado a la llamada `fetch()`), o enviando un {{domxref("XMLHttpRequest")}} con {{domxref("XMLHttpRequest.setAttributionReporting", "setAttributionReporting()")}} invocado en el objeto de solicitud.

    Hay dos versiones de este atributo que puedes configurar:

    - Booleano, es decir, solo el nombre `attributionsrc`. Esto especifica que deseas que el encabezado {{httpheader("Attribution-Reporting-Eligible")}} se envíe al mismo servidor al que apunta el atributo `src`. Esto es adecuado cuando manejas el registro de fuentes de atribución o disparadores en el mismo servidor. Al registrar un disparador de atribución, esta propiedad es opcional y se usará un valor de cadena vacía si se omite.
    - Valor que contiene una o más URL, por ejemplo:

      ```html
      <script
        src="myscript.js"
        attributionsrc="https://a.example/register-source https://b.example/register-source"></script>
      ```

      Esto es útil en casos donde el recurso solicitado no está en un servidor que controlas o simplemente deseas manejar el registro de la fuente de atribución en un servidor diferente. En este caso, puedes especificar una o más URL como el valor de `attributionsrc`. Cuando ocurra la solicitud del recurso, el encabezado {{httpheader("Attribution-Reporting-Eligible")}} se enviará a las URL especificadas en `attributionSrc` además del origen del recurso. Estas URL pueden responder con un encabezado {{httpheader("Attribution-Reporting-Register-Source")}} o {{httpheader("Attribution-Reporting-Register-Trigger")}} según sea necesario para completar el registro.

      > [!NOTE]
      > Especificar múltiples URL significa que se pueden registrar múltiples fuentes de atribución en la misma función. Por ejemplo, podrías tener diferentes campañas que estás tratando de medir el éxito, lo que implica generar diferentes informes sobre diferentes datos.

    Consulta la [API de informes de atribución](/es/docs/Web/API/Attribution_Reporting_API) para más detalles.

- `blocking`

  - : Este atributo indica explícitamente que ciertas operaciones deben bloquearse al obtener el script. Las operaciones que se deben bloquear deben ser una lista separada por espacios de tokens de bloqueo enumerados a continuación.
    - `render`: Se bloquea el renderizado del contenido en la pantalla.

- [`crossorigin`](/es/docs/Web/HTML/Attributes/crossorigin)

  - : Los elementos `script` normales pasan información mínima al {{domxref('Window.error_event', 'window.onerror')}} para scripts que no superan las comprobaciones estándar de {{Glossary("CORS")}}. Para permitir el registro de errores en sitios que utilizan un dominio separado para medios estáticos, usa este atributo. Consulta [Atributos de configuración CORS](/es/docs/Web/HTML/Attributes/crossorigin) para una explicación más descriptiva de sus argumentos válidos.

- `defer`

  - : Este atributo booleano se establece para indicar al navegador que el script debe ejecutarse después de que el documento haya sido analizado, pero antes de que se dispare el evento {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}}.

    Los scripts con el atributo `defer` evitarán que el evento `DOMContentLoaded` se dispare hasta que el script se haya cargado y evaluado por completo.

    > [!WARNING]
    > Este atributo no debe usarse si el atributo `src` está ausente (es decir, para scripts en línea), ya que no tendría efecto.
    >
    > El atributo `defer` no tiene efecto en [module scripts](/es/docs/Web/JavaScript/Guide/Modules) — se diferencian por defecto.

    Los scripts con el atributo `defer` se ejecutarán en el orden en el que aparecen en el documento.

    Este atributo permite eliminar JavaScript **bloqueante del analizador**, donde el navegador tendría que cargar y evaluar scripts antes de continuar con el análisis. `async` tiene un efecto similar en este caso.

    Si el atributo se especifica junto con el atributo `async`, el elemento actuará como si solo se especificara el atributo `async`.

- `fetchpriority`

  - : Proporciona una pista sobre la prioridad relativa a usar al obtener un script externo.
    Valores permitidos:

    - `high`
      - : Obtiene el script externo con una prioridad alta en relación con otros scripts externos.
    - `low`
      - : Obtiene el script externo con una prioridad baja en relación con otros scripts externos.
    - `auto`
      - : No establece una preferencia por la prioridad de obtención.
        Este es el valor predeterminado.
        Se usa si no se establece ningún valor o si se establece un valor no válido.

    Consulta {{domxref("HTMLScriptElement.fetchPriority")}} para obtener más información.

- `integrity`

  - : Este atributo contiene metadatos en línea que un agente de usuario puede usar para verificar que un recurso obtenido se haya entregado sin manipulación inesperada. El atributo no debe especificarse si el atributo `src` no está especificado. Consulta [Integridad de subrecursos](/es/docs/Web/Security/Subresource_Integrity).

- `nomodule`

  - : Este atributo booleano se establece para indicar que el script no debe ejecutarse en navegadores que admiten [módulos ES](/es/docs/Web/JavaScript/Guide/Modules), en efecto, esto puede usarse para servir scripts de respaldo a navegadores más antiguos que no admiten código JavaScript modular.

- `nonce`

  - : Un nonce (número usado una vez) criptográfico para permitir scripts en una [política de seguridad de contenido script-src](/es/docs/Web/HTTP/Headers/Content-Security-Policy/script-src). El servidor debe generar un valor único de nonce cada vez que transmite una política. Es fundamental proporcionar un nonce que no pueda adivinarse, ya que de lo contrario, eludir la política de un recurso sería trivial.

- `referrerpolicy`

  - : Indica qué [referer](/es/docs/Web/API/Document/referrer) enviar al obtener el script o recursos obtenidos por el script:

    - `no-referrer`: El encabezado {{HTTPHeader("Referer")}} no será enviado.
    - `no-referrer-when-downgrade`: El encabezado {{HTTPHeader("Referer")}} no se enviará a {{Glossary("origin")}} sin {{Glossary("TLS")}} ({{Glossary("HTTPS")}}).
    - `origin`: El referer enviado se limitará al origen de la página de referencia: su [esquema](/es/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host")}}, y {{Glossary("port")}}.
    - `origin-when-cross-origin`: El referer enviado a otros orígenes se limitará al esquema, el host y el puerto. Las navegaciones en el mismo origen seguirán incluyendo la ruta.
    - `same-origin`: Un referer será enviado para {{Glossary("Same-origin policy", "mismo origen")}}, pero las solicitudes entre orígenes no contendrán información de referer.
    - `strict-origin`: Solo envía el origen del documento como referer cuando el nivel de seguridad del protocolo permanece igual (HTTPS→HTTPS), pero no lo envíes a un destino menos seguro (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (predeterminado): Envía una URL completa al realizar una solicitud del mismo origen, solo envía el origen cuando el nivel de seguridad del protocolo permanece igual (HTTPS→HTTPS) y no envía encabezado a un destino menos seguro (HTTPS→HTTP).
    - `unsafe-url`: El referer incluirá el origen _y_ la ruta (pero no el [fragmento](/es/docs/Web/API/HTMLAnchorElement/hash), [contraseña](/es/docs/Web/API/HTMLAnchorElement/password), o [nombre de usuario](/es/docs/Web/API/HTMLAnchorElement/username)). **Este valor no es seguro**, porque filtra orígenes y rutas de recursos protegidos por TLS a orígenes inseguros.

    > [!NOTE]
    > Un valor de cadena vacía (`""`) es tanto el valor predeterminado como un valor de respaldo si `referrerpolicy` no es compatible. Si no se especifica explícitamente `referrerpolicy` en el elemento `<script>`, adoptará una política de referer de nivel superior, es decir, una establecida en todo el documento o dominio. Si no hay una política de nivel superior disponible, la cadena vacía se trata como equivalente a `strict-origin-when-cross-origin`.

- `src`

  - : Este atributo especifica la URI de un script externo; se puede usar como una alternativa a incrustar un script directamente dentro de un documento.

- [`type`](/es/docs/Web/HTML/Element/script/type)

  - : Este atributo indica el tipo de script representado.
    El valor de este atributo será uno de los siguientes:

    - **El atributo no está establecido (por defecto), una cadena vacía o un tipo MIME de JavaScript**
      - : Indica que el script es un "script clásico", que contiene código JavaScript.
        Se recomienda que los autores omitan el atributo si el script hace referencia a código JavaScript en lugar de especificar un tipo MIME.
        Los tipos MIME de JavaScript están [listados en la especificación de tipos de medios IANA](/es/docs/Web/HTTP/MIME_types#textjavascript).
    - [`importmap`](/es/docs/Web/HTML/Element/script/type/importmap)
      - : Este valor indica que el cuerpo del elemento contiene un mapa de importaciones.
        El mapa de importaciones es un objeto JSON que los desarrolladores pueden usar para controlar cómo el navegador resuelve los especificadores de módulos al importar [módulos de JavaScript](/es/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps).
    - `module`
      - : Este valor hace que el código sea tratado como un módulo de JavaScript.
        El procesamiento del contenido del script se aplaza.
        Los atributos `charset` y `defer` no tienen efecto.
        Para obtener más información sobre el uso de `module`, consulta nuestra guía de [módulos de JavaScript](/es/docs/Web/JavaScript/Guide/Modules).
        A diferencia de los scripts clásicos, los scripts de módulo requieren el uso del protocolo CORS para la obtención de recursos de orígenes cruzados.
    - [`speculationrules`](/es/docs/Web/HTML/Element/script/type/speculationrules) {{experimental_inline}}
      - : Este valor indica que el cuerpo del elemento contiene reglas de especulación.
        Las reglas de especulación toman la forma de un objeto JSON que determina qué recursos deben ser precargados o prerenderizados por el navegador. Esto es parte de la {{domxref("Speculation Rules API", "", "", "nocode")}}.
    - **Cualquier otro valor**
      - : El contenido incrustado se trata como un bloque de datos y no será procesado por el navegador.
        Los desarrolladores deben usar un tipo MIME válido que no sea un tipo MIME de JavaScript para denotar bloques de datos.
        Todos los demás atributos serán ignorados, incluyendo el atributo `src`.

### Atributos obsoletos

- `charset` {{Deprecated_inline}}
  - : Si está presente, su valor debe ser una coincidencia insensible a mayúsculas de {{Glossary("ASCII")}} con `utf-8`. Es innecesario especificar el atributo `charset`, porque los documentos deben usar UTF-8, y el elemento `script` hereda su codificación de caracteres del documento.
- `language` {{Deprecated_inline}} {{Non-standard_Inline}}
  - : Al igual que el atributo `type`, este atributo identifica el lenguaje de secuencias de comandos utilizado. Sin embargo, los valores posibles de este atributo nunca fueron estandarizados. En su lugar, debe usarse el atributo `type`.

## Notas

Los scripts sin los atributos [`async`](#async), [`defer`](#defer) o `type="module"`, así como los scripts en línea sin el atributo `type="module"`, se obtienen y ejecutan inmediatamente antes de que el navegador continúe con el análisis de la página.

El script debe ser servido con el tipo MIME `text/javascript`, pero los navegadores son permisivos y solo los bloquearán si el script es servido con un tipo de imagen (`image/*`), un tipo de video (`video/*`), un tipo de audio (`audio/*`), o `text/csv`.
Si el script es bloqueado, se enviará un evento {{domxref("HTMLElement/error_event", "error")}} al elemento; de lo contrario, se enviará un evento {{domxref("HTMLElement/load_event", "load")}}.

## Ejemplos

### Uso básico

Estos ejemplos muestran cómo importar un script (externo) usando el elemento `<script>`.

```html
<script src="javascript.js"></script>
```

Y los siguientes ejemplos muestran cómo insertar un script (en línea) dentro del elemento `<script>`.

```html
<script>
  alert("¡Hola Mundo!");
</script>
```

### async y defer

Los scripts cargados utilizando el atributo `async` descargan el script sin bloquear la página mientras se obtiene el script.
Sin embargo, una vez que la descarga se completa, el script se ejecutará, lo que bloquea la página de renderizarse. Esto significa que el resto del contenido en la página web no podrá ser procesado y mostrado al usuario hasta que el script termine de ejecutarse.
No se garantiza que los scripts se ejecuten en un orden específico.
Es mejor usar `async` cuando los scripts en la página se ejecutan independientemente entre sí y no dependen de otro script en la página.

Los scripts cargados con el atributo `defer` se cargarán en el orden en que aparecen en la página.
No se ejecutarán hasta que el contenido de la página se haya cargado completamente, lo cual es útil si tus scripts dependen de que el DOM esté en su lugar (por ejemplo, si modifican uno o más elementos en la página).

Aquí tienes una representación visual de los diferentes métodos de carga de scripts y lo que significa para tu página:

![Cómo funcionan los tres métodos de carga de scripts: el método predeterminado bloquea el análisis mientras se obtiene y ejecuta el JavaScript. Con async, el análisis se pausa solo para la ejecución. Con defer, el análisis no se pausa, pero la ejecución solo ocurre después de que todo lo demás se haya analizado.](async-defer.jpg)

_Esta imagen es del [HTML spec](https://html.spec.whatwg.org/images/asyncdefer.svg), copiada y recortada a una versión reducida, bajo los términos de la licencia [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)._

Por ejemplo, si tienes los siguientes elementos de script:

```html
<script async src="js/vendor/jquery.js"></script>
<script async src="js/script2.js"></script>
<script async src="js/script3.js"></script>
```

No puedes confiar en el orden en que se cargarán los scripts.
`jquery.js` puede cargarse antes o después de `script2.js` y `script3.js`, y si este es el caso, cualquier función en esos scripts que dependa de `jquery` producirá un error porque `jquery` no estará definido en el momento en que el script se ejecute.

Se debe usar `async` cuando tengas muchos scripts en segundo plano que cargar, y solo quieras que estén listos lo antes posible.
Por ejemplo, tal vez tengas algunos archivos de datos del juego que cargar, que serán necesarios cuando el juego comience, pero por ahora solo quieres seguir mostrando la introducción del juego, los títulos y el vestíbulo, sin que se vean bloqueados por la carga de scripts.

Los scripts cargados usando el atributo `defer` (ver abajo) se ejecutarán en el orden en que aparecen en la página y se ejecutarán tan pronto como el script y el contenido hayan sido descargados:

```html
<script defer src="js/vendor/jquery.js"></script>
<script defer src="js/script2.js"></script>
<script defer src="js/script3.js"></script>
```

En el segundo ejemplo, podemos estar seguros de que `jquery.js` se cargará antes que `script2.js` y `script3.js`, y que `script2.js` se cargará antes que `script3.js`.
No se ejecutarán hasta que el contenido de la página se haya cargado completamente, lo cual es útil si tus scripts dependen de que el DOM esté en su lugar (por ejemplo, si modifican uno o más elementos en la página).

Para resumir:

- Tanto `async` como `defer` indican al navegador que descargue los scripts en un hilo separado, mientras el resto de la página (el DOM, etc.) se descarga, por lo que la carga de la página no se bloquea durante el proceso de obtención.
- Los scripts con el atributo `async` se ejecutarán tan pronto como se complete la descarga.
  Esto bloquea la página y no garantiza un orden de ejecución específico.
- Los scripts con el atributo `defer` se cargarán en el orden en que están en la página y solo se ejecutarán cuando todo haya terminado de cargarse.
- Si tus scripts deben ejecutarse de inmediato y no tienen dependencias, usa `async`.
- Si tus scripts necesitan esperar a que se analice el contenido y dependen de otros scripts y/o de que el DOM esté en su lugar, cárgalos usando `defer` y pon los elementos `<script>` correspondientes en el orden en que deseas que el navegador los ejecute.

### Fallback de módulos

Los navegadores que admiten el valor `module` para el atributo [`type`](#type) ignoran cualquier script con un atributo `nomodule`. Esto te permite usar scripts de módulo mientras proporcionas scripts de fallback marcados con `nomodule` para los navegadores que no los admiten.

```html
<script type="module" src="main.js"></script>
<script nomodule src="fallback.js"></script>
```

### Importando módulos con importmap

Cuando importas módulos en los scripts, si no usas la característica [`type=importmap`](#importmap), entonces cada módulo debe importarse utilizando un especificador de módulo que sea una URL absoluta o relativa.
En el siguiente ejemplo, el primer especificador de módulo ("./shapes/square.js") se resuelve de manera relativa a la URL base del documento, mientras que el segundo es una URL absoluta.

```js
import { name as squareName, draw } from "./shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
```

Un mapa de importación te permite proporcionar una asignación que, si coincide, puede reemplazar el texto en el especificador de módulo.
El siguiente mapa de importación define las claves `square` y `circle` que se pueden usar como alias para los especificadores de módulos mostrados arriba.

```html
<script type="importmap">
  {
    "imports": {
      "square": "./shapes/square.js",
      "circle": "https://example.com/shapes/circle.js"
    }
  }
</script>
```

Esto nos permite importar módulos utilizando nombres en el especificador de módulos (en lugar de URLs absolutas o relativas).

```js
import { name as squareName, draw } from "square";
import { name as circleName } from "circle";
```

Para obtener más ejemplos de lo que puedes hacer con los mapas de importación, consulta la sección de [Importación de módulos usando mapas de importación](/es/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) en la guía de módulos de JavaScript.

### Incrustando datos en HTML

También puedes usar el elemento `<script>` para incrustar datos en HTML con renderizado del lado del servidor especificando un tipo MIME no JavaScript válido en el atributo `type`.

```html
<!-- Generado por el servidor -->
<script id="data" type="application/json">
  {
    "userId": 1234,
    "userName": "Maria Cruz",
    "memberSince": "2000-01-01T00:00:00.000Z"
  }
</script>

<!-- Estático -->
<script>
  const userInfo = JSON.parse(document.getElementById("data").text);
  console.log("Información del usuario: %o", userInfo);
</script>
```

### Bloqueando el renderizado hasta que un script sea obtenido y ejecutado

Puedes incluir el token `render` dentro de un atributo `blocking`;
el renderizado de la página se bloqueará hasta que el script sea obtenido y ejecutado. En el siguiente ejemplo, bloqueamos el renderizado en un script async,
para que el script no bloquee el análisis pero se garantiza que será evaluado antes de que comience el renderizado.

```html
<script blocking="render" async src="async-script.js"></script>
```

## Resumen técnico

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/es/docs/Web/HTML/Content_categories">Categorías de contenido</a>
      </th>
      <td>
        <a href="/es/docs/Web/HTML/Content_categories#metadata_content">Contenido de metadatos</a>,
        <a href="/es/docs/Web/HTML/Content_categories#flow_content">Contenido de flujo</a>,
        <a href="/es/docs/Web/HTML/Content_categories#phrasing_content">Contenido de fraseo</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenido permitido</th>
      <td>Script dinámico como <code>text/javascript</code>.</td>
    </tr>
    <tr>
      <th scope="row">Omisión de etiqueta</th>
      <td>Ninguna, tanto la etiqueta de inicio como la de cierre son obligatorias.</td>
    </tr>
    <tr>
      <th scope="row">Padres permitidos</th>
      <td>
        Cualquier elemento que acepte <a href="/es/docs/Web/HTML/Content_categories#metadata_content">contenido de metadatos</a>,
        o cualquier elemento que acepte <a href="/es/docs/Web/HTML/Content_categories#phrasing_content">contenido de fraseo</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Rol ARIA implícito</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Sin rol correspondiente</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Roles ARIA permitidos</th>
      <td>No se permite el rol <code>role</code></td>
    </tr>
    <tr>
      <th scope="row">Interfaz DOM</th>
      <td>{{domxref("HTMLScriptElement")}}</td>
    </tr>
  </tbody>
</table>

## Especificaciones

{{Specifications}}

## Compatibilidad con los navegadores

{{Compat}}

## Véase también

- {{domxref("document.currentScript")}}
- [Artículo de Flavio Copes sobre cómo cargar JavaScript eficientemente y explicar las diferencias entre `async` y `defer`
- Guía de [módulos JavaScript](/es/docs/Web/JavaScript/Guide/Modules)
