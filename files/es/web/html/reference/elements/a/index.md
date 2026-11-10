---
title: "`<a>`: elemento de ancla HTML"
short-title: <a>
slug: Web/HTML/Reference/Elements/a
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

El elemento **`<a>`** de [HTML](/es/docs/Web/HTML) (o elemento _ancla_), junto con [su atributo `href`](#href), crea un hipervínculo a páginas web, archivos, direcciones de correo electrónico, ubicaciones dentro de la misma página o cualquier otra cosa que una URL pueda direccionar.

El contenido dentro de cada `<a>` _debe_ indicar el destino del enlace. Si el atributo `href` está presente, presionar la tecla Enter con el elemento `<a>` enfocado lo activará.

{{InteractiveExample("HTML Demo: &lt;a&gt;", "tabbed-shorter")}}

```html interactive-example
<p>You can reach Michael at:</p>

<ul>
  <li><a href="https://example.com">Website</a></li>
  <li><a href="mailto:m.bluth@example.com">Email</a></li>
  <li><a href="tel:+123456789">Phone</a></li>
</ul>
```

```css interactive-example
li {
  margin-bottom: 0.5rem;
}
```

## Atributos

Los atributos de este elemento incluyen los [atributos globales](/es/docs/Web/HTML/Reference/Global_attributes).

- `attributionsrc` {{deprecated_inline}} {{non-standard_inline}}
  - : Especifica que quieres que el navegador envíe una cabecera {{httpheader("Attribution-Reporting-Eligible")}}. En el lado del servidor, esto se usa para activar el envío de una cabecera {{httpheader("Attribution-Reporting-Register-Source")}} en la respuesta, con el fin de registrar una [fuente de atribución basada en navegación](/es/docs/Web/API/Attribution_Reporting_API/Registering_sources).

    El navegador almacena los datos de la fuente asociados a la fuente de atribución basada en la navegación (tal como se proporcionan en la cabecera de respuesta {{httpheader("Attribution-Reporting-Register-Source")}}) cuando el usuario hace clic en el enlace. Consulta la [Attribution Reporting API](/es/docs/Web/API/Attribution_Reporting_API) para más detalles.

    Existen dos versiones de este atributo que puedes establecer:
    - Booleana, es decir, solo el nombre `attributionsrc`. Esto especifica que quieres que la cabecera {{httpheader("Attribution-Reporting-Eligible")}} se envíe al mismo servidor al que apunta el atributo `href`. Esto es adecuado cuando gestionas el registro de la fuente de atribución en el mismo servidor.
    - Un valor que contiene una o más URL, por ejemplo:

      ```html
      attributionsrc="https://a.example/register-source
      https://b.example/register-source"
      ```

      Esto es útil cuando el recurso solicitado no está en un servidor que controlas, o simplemente quieres gestionar el registro de la fuente de atribución en un servidor distinto. En este caso, puedes especificar una o más URL como valor de `attributionsrc`. Cuando ocurre la solicitud del recurso, la cabecera {{httpheader("Attribution-Reporting-Eligible")}} se enviará a las URL especificadas en `attributionsrc`, además de al origen del recurso. Estas URL pueden entonces responder con la cabecera {{httpheader("Attribution-Reporting-Register-Source")}} para completar el registro.

      > [!NOTE]
      > Especificar varias URL permite registrar múltiples fuentes de atribución para una misma funcionalidad. Por ejemplo, podrías tener distintas campañas cuyo éxito quieras medir, lo que implica generar diferentes informes con distintos datos.

    Los elementos `<a>` no se pueden usar como disparadores de atribución, solo como fuentes.

- `download`
  - : Hace que el navegador trate la URL enlazada como una descarga. Se puede usar con o sin un valor `filename`:
    - Sin un valor, el navegador sugerirá un nombre de archivo o extensión, generado a partir de varias fuentes:
      - La cabecera HTTP {{HTTPHeader("Content-Disposition")}}
      - El último segmento en la [ruta](/es/docs/Web/API/URL/pathname) de la URL
      - El {{Glossary("MIME_type", "tipo de medio")}} (a partir de la cabecera {{HTTPHeader("Content-Type")}}, el inicio de una [`data:` URL](/es/docs/Web/URI/Reference/Schemes/data), o {{domxref("Blob.type")}} para una [`blob:` URL](/es/docs/Web/URI/Reference/Schemes/blob))

    - `filename`: definir un valor lo sugiere como nombre de archivo. Los caracteres `/` y `\` se convierten en guiones bajos (`_`). Es posible que los sistemas de archivos no permitan otros caracteres en los nombres de archivo, por lo que los navegadores ajustarán el nombre sugerido si es necesario.

    > [!NOTE]
    >
    > - `download` solo funciona para [URL del mismo origen](/es/docs/Web/Security/Defenses/Same-origin_policy), o con los esquemas `blob:` y `data:`.
    > - La forma en que los navegadores gestionan las descargas varía según el navegador, la configuración del usuario y otros factores. Es posible que se pida confirmación al usuario antes de iniciar una descarga, que el archivo se guarde automáticamente, o que se abra automáticamente, ya sea en una aplicación externa o en el propio navegador.
    > - Si la cabecera `Content-Disposition` tiene información distinta a la del atributo `download`, el comportamiento resultante puede variar:
    >   - Si la cabecera especifica un `filename`, este tiene prioridad sobre el nombre de archivo especificado en el atributo `download`.
    >   - Si la cabecera especifica una disposición `inline`, Chrome y Firefox priorizan el atributo y lo tratan como una descarga. Las versiones antiguas de Firefox (anteriores a la 82) priorizan la cabecera y muestran el contenido en línea.

- `href`
  - : La URL a la que apunta el hipervínculo. Los enlaces no se limitan a las URL basadas en HTTP: pueden usar cualquier esquema de URL compatible con los navegadores:
    - Números de teléfono con URLs `tel:`
    - Direcciones de correo electrónico con URLs `mailto:`
    - Mensajes de texto SMS con URLs `sms:`
    - Código ejecutable con [URLs `javascript:`](/es/docs/Web/URI/Reference/Schemes/javascript)
    - Aunque es posible que los navegadores web no admitan otros esquemas de URL, los sitios web pueden hacerlo mediante [`registerProtocolHandler()`](/es/docs/Web/API/Navigator/registerProtocolHandler)

    Además, otras características de las URL permiten ubicar partes específicas del recurso, incluyendo:
    - Secciones de una página mediante fragmentos de documento
    - Porciones de texto específicas mediante [fragmentos de texto](/es/docs/Web/URI/Reference/Fragment/Text_fragments)
    - Fragmentos de archivos multimedia mediante fragmentos de medios

- `hreflang`
  - : Indica el idioma humano de la URL enlazada. No tiene funcionalidad integrada. Los valores permitidos son los mismos que los del [atributo global `lang`](/es/docs/Web/HTML/Reference/Global_attributes/lang).
- `interestfor` {{experimental_inline}} {{non-standard_inline}}
  - : Define el elemento `<a>` como un **invocador de interés** (interest invoker). Su valor es el `id` del elemento objetivo, que se verá afectado de alguna manera (normalmente mostrándose u ocultándose) cuando se muestre o se pierda el interés en el elemento invocador (por ejemplo, al pasar o quitar el cursor, o al enfocarlo o desenfocarlo). Consulta [Uso de invocadores de interés](/es/docs/Web/API/Popover_API/Using_interest_invokers) para más detalles y ejemplos.
- `ping`
  - : Una lista de URLs separadas por espacios. Cuando se sigue el enlace, el navegador enviará solicitudes {{HTTPMethod("POST")}} con el cuerpo `PING` a las URLs. Normalmente se usa para seguimiento (tracking).
- `referrerpolicy`
  - : Cuánta información del [referrer](/es/docs/Web/HTTP/Reference/Headers/Referer) enviar al seguir el enlace.
    - `no-referrer`: La cabecera {{HTTPHeader("Referer")}} no se enviará.
    - `no-referrer-when-downgrade`: La cabecera {{HTTPHeader("Referer")}} no se enviará a {{Glossary("origin", "orígenes")}} sin {{Glossary("TLS")}} ({{Glossary("HTTPS")}}).
    - `origin`: El referrer enviado se limitará al origen de la página que hace referencia: su [esquema](/es/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host")}} y {{Glossary("port", "puerto")}}.
    - `origin-when-cross-origin`: El referrer enviado a otros orígenes se limitará al esquema, el host y el puerto. La navegación dentro del mismo origen seguirá incluyendo la ruta.
    - `same-origin`: Se enviará un referrer para el {{Glossary("Same-origin policy", "mismo origen")}}, pero las solicitudes de origen cruzado no contendrán información de referrer.
    - `strict-origin`: Solo se envía el origen del documento como referrer cuando el nivel de seguridad del protocolo se mantiene igual (HTTPS→HTTPS), pero no se envía a un destino menos seguro (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (predeterminado): Se envía una URL completa al hacer una solicitud del mismo origen, solo se envía el origen cuando el nivel de seguridad del protocolo se mantiene igual (HTTPS→HTTPS), y no se envía ninguna cabecera a un destino menos seguro (HTTPS→HTTP).
    - `unsafe-url`: El referrer incluirá el origen _y_ la ruta (pero no el [fragmento](/es/docs/Web/API/HTMLAnchorElement/hash), la [contraseña](/es/docs/Web/API/HTMLAnchorElement/password) ni el [nombre de usuario](/es/docs/Web/API/HTMLAnchorElement/username)). **Este valor no es seguro**, ya que filtra orígenes y rutas desde recursos protegidos por TLS hacia orígenes inseguros.

- [`rel`](/es/docs/Web/HTML/Reference/Attributes/rel)
  - : La relación de la URL enlazada, expresada como tipos de enlace separados por espacios.
- `target`
  - : Dónde mostrar la URL enlazada, especificado mediante el nombre de un _contexto de navegación_ (una pestaña, ventana o {{HTMLElement("iframe")}}). Las siguientes palabras clave tienen significados especiales sobre dónde cargar la URL:
    - `_self`: El contexto de navegación actual. (Predeterminado)
    - `_blank`: Normalmente una pestaña nueva, pero los usuarios pueden configurar los navegadores para que abran una ventana nueva en su lugar.
    - `_parent`: El contexto de navegación padre del actual. Si no hay padre, se comporta como `_self`.
    - `_top`: El contexto de navegación de nivel superior. Concretamente, esto significa el contexto "más alto" que es ancestro del actual. Si no hay ancestros, se comporta como `_self`.
    - `_unfencedTop`: Permite que los [fenced frames](/es/docs/Web/API/Fenced_frame_API) incrustados naveguen en el marco de nivel superior (es decir, ir más allá de la raíz del fenced frame, a diferencia de los demás destinos reservados). Ten en cuenta que la navegación seguirá funcionando si esto se usa fuera del contexto de un fenced frame, pero no se comportará como una palabra clave reservada.

    > [!NOTE]
    > Establecer `target="_blank"` en elementos `<a>` proporciona implícitamente el mismo comportamiento que establecer [`rel="noopener"`](/es/docs/Web/HTML/Reference/Attributes/rel/noopener), que no establece `window.opener`.

- `type`
  - : Indica el formato de la URL enlazada mediante un {{Glossary("MIME type", "tipo MIME")}}. No tiene funcionalidad incorporada.

### Atributos obsoletos

- `charset` {{Deprecated_Inline}}
  - : Indicaba la {{Glossary("character encoding", "codificación de caracteres")}} de la URL enlazada.

    > [!NOTE]
    > Este atributo está obsoleto y **no deberían usarlo los autores**. En su lugar, usa la cabecera HTTP {{HTTPHeader("Content-Type")}} en la URL enlazada.

- `coords` {{Deprecated_Inline}}
  - : Se usaba con [el atributo `shape`](#shape). Una lista de coordenadas separadas por comas.
- `name` {{Deprecated_Inline}}
  - : Era necesario para definir una posible ubicación de destino en una página. En HTML 4.01, `id` y `name` podían usarse ambos en `<a>`, siempre que tuvieran valores idénticos.

    > [!NOTE]
    > Usa el atributo global [`id`](/es/docs/Web/HTML/Reference/Global_attributes/id) en su lugar.

- `rev` {{Deprecated_Inline}}
  - : Especificaba un enlace inverso; lo opuesto a [el atributo `rel`](#rel). Quedó obsoleto por resultar muy confuso.
- `shape` {{Deprecated_Inline}}
  - : La forma de la región del enlace en un mapa de imagen.

    > [!NOTE]
    > Usa el elemento {{HTMLElement("area")}} para los mapas de imagen en su lugar.

## Accesibilidad

### Texto de enlace descriptivo

**El contenido de un enlace debería indicar hacia dónde conduce**, incluso fuera de contexto.

#### Texto de enlace débil e inaccesible

Un error lamentablemente común es enlazar únicamente las palabras "haz clic aquí" o "aquí":

```html example-bad
<p>
  Obtén más información sobre nuestros productos <a href="/products">aquí</a>.
</p>
```

##### Resultado

{{EmbedLiveSample('Texto de enlace débil e inaccesible', '100%', '50')}}

#### Texto de enlace descriptivo y accesible

Por suerte, esto tiene una solución fácil, ¡y de hecho es más corta que la versión inaccesible!

```html example-good
<p>Obtén más información <a href="/products">sobre nuestros productos</a>.</p>
```

##### Resultado

{{EmbedLiveSample('Texto de enlace descriptivo y accesible', '100%', '50')}}

El software de asistencia cuenta con atajos para listar todos los enlaces de una página. Sin embargo, un texto de enlace descriptivo beneficia a todos los usuarios: el atajo de "listar todos los enlaces" emula la forma en que las personas videntes recorren rápidamente las páginas.

### Eventos onclick

Los elementos de ancla suelen usarse incorrectamente como botones falsos, estableciendo su `href` a `#` o a [`javascript:void(0)`](/es/docs/Web/URI/Reference/Schemes/javascript) para evitar que la página se recargue, y luego detectando sus eventos `click`.

Estos valores de `href` ficticios provocan un comportamiento inesperado al copiar o arrastrar enlaces, al abrirlos en una pestaña o ventana nueva, al guardarlos como marcadores, o cuando JavaScript se está cargando, falla o está deshabilitado. Además, transmiten semántica incorrecta a las tecnologías de asistencia, como los lectores de pantalla.

Usa un {{HTMLElement("button")}} en su lugar. En general, **solo deberías usar un hipervínculo para navegar a una URL real**.

### Enlaces externos y enlaces a recursos que no son HTML

Los enlaces que se abren en una pestaña o ventana nueva mediante `target="_blank"`, o los enlaces que apuntan a un archivo de descarga, deben indicar qué ocurrirá al seguir el enlace.

Las personas con baja visión, quienes navegan con la ayuda de tecnología de lectura de pantalla, o quienes tienen dificultades cognitivas, pueden confundirse si se abre inesperadamente una nueva pestaña, ventana o aplicación. Algunos lectores de pantalla antiguos incluso podrían no anunciar este comportamiento.

#### Enlace que abre una nueva pestaña o ventana

```html
<a target="_blank" href="https://www.wikipedia.org">
  Wikipedia (se abre en una pestaña nueva)
</a>
```

##### Resultado

{{EmbedLiveSample('Enlace que abre una nueva pestaña o ventana')}}

#### Enlace a un recurso que no es HTML

Si se utiliza un icono para indicar el comportamiento del enlace, asegúrate de que tenga un [atributo `alt`](/es/docs/Web/HTML/Reference/Elements/img#alt) que describa su propósito. En caso de que falte el icono, el contenido del atributo `alt` seguirá comunicando el comportamiento del enlace.

```html
<p>
  <a href="https://www.wikipedia.org/" target="_blank">
    Wikipedia
    <img src="new-tab.svg" width="14" alt="(Se abre en una pestaña nueva)" />
  </a>
  <br />
  <a href="2017-annual-report.ppt">
    Informe anual 2017
    <img src="powerpoint.svg" width="14" alt="(Archivo de PowerPoint)" />
  </a>
</p>
<p>
  <a href="https://www.wikipedia.org/" target="_blank">
    Wikipedia
    <img
      src="missing-icon.svg"
      width="14"
      alt="(Se abre en una pestaña nueva)" />
  </a>
  <br />
  <a href="2017-annual-report.ppt">
    Informe anual 2017
    <img src="missing-icon.svg" width="14" alt="(Archivo de PowerPoint)" />
  </a>
</p>
```

##### Resultado

{{EmbedLiveSample('Enlace a un recurso que no es HTML')}}

- [WebAIM: Links and Hypertext - Hypertext Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN / Comprendiendo las WCAG, Pauta 3.2](/es/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable)
- [G200: Opening new windows and tabs from a link only when necessary](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Giving users advanced warning when opening a new window](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Enlaces de salto

Un **enlace de salto** (skip link) es un enlace situado lo más al principio posible del contenido de {{HTMLElement("body")}}, que apunta al inicio del contenido principal de la página. Por lo general, CSS oculta el enlace de salto fuera de la pantalla hasta que recibe el foco.

```html
<body>
  <a href="#content" class="skip-link">Saltar al contenido principal</a>

  <header>…</header>

  <!-- El enlace de salto dirige a este punto -->
  <main id="content"></main>
</body>
```

```css
.skip-link {
  position: absolute;
  top: -3em;
  background: white;
}
.skip-link:focus {
  top: 0;
}
```

#### Resultado

{{EmbedLiveSample('Enlaces de salto')}}

Los enlaces de salto permiten a los usuarios que navegan mediante teclado omitir contenido que se repite en varias páginas, como la navegación de la cabecera.

Los enlaces de salto son especialmente útiles para las personas que navegan con ayuda de tecnología de asistencia como switch control, comandos de voz o punteros de cabeza o boca, ya que desplazarse por enlaces repetitivos puede resultar una tarea tediosa.

- [WebAIM: "Skip Navigation" Links](https://webaim.org/techniques/skipnav/)
- [How-to: Use Skip Navigation links](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN / Comprendiendo las WCAG, explicaciones de la Pauta 2.4](/es/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable)
- [Understanding Success Criterion 2.4.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Tamaño y proximidad

#### Tamaño

Los elementos interactivos, como los enlaces, deben ofrecer un área lo suficientemente grande para que sea fácil activarlos. Esto ayuda a una gran variedad de personas, incluyendo a quienes tienen problemas de control motor y a quienes usan dispositivos de entrada imprecisos, como una pantalla táctil. Se recomienda un tamaño mínimo de 44×44 [píxeles CSS](https://w3c.github.io/wcag/guidelines/22/#dfn-css-pixels).

Los enlaces de solo texto dentro de un párrafo están exentos de este requisito, pero sigue siendo una buena idea asegurarte de que el texto vinculado tenga la extensión suficiente para facilitar su activación.

- [Understanding Success Criterion 2.5.5: Target Size](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Target Size and 2.5.5](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Quick test: Large touch targets](https://www.a11yproject.com/posts/large-touch-targets/)

#### Proximidad

Los elementos interactivos, como los enlaces, situados muy cerca visualmente entre sí deben contar con espacio de separación. El espaciado ayuda a las personas con problemas de control motor, quienes de otro modo podrían activar accidentalmente el contenido interactivo equivocado.

El espaciado puede definirse mediante propiedades CSS como {{CSSxRef("margin")}}.

- [Hand tremors and the giant-button-problem](https://axesslab.com/hand-tremors/)

## Ejemplos

### Enlazar a una URL absoluta

#### HTML

```html
<a href="https://www.mozilla.com">Mozilla</a>
```

#### Resultado

{{EmbedLiveSample('Enlazar_a_una_URL_absoluta')}}

### Enlazar a URLs relativas

#### HTML

```html
<a href="//example.com">URL relativa al esquema</a>
<a href="/es/docs/Web/HTML">URL relativa al origen</a>
<a href="p">URL relativa al directorio</a>
<a href="./p">URL relativa al directorio</a>
<a href="../p">URL relativa al directorio padre</a>
```

```css hidden
a {
  display: block;
  margin-bottom: 0.5em;
}
```

#### Resultado

{{EmbedLiveSample('Enlazar_a_URLs_relativas')}}

### Enlazar a un elemento en la misma página

```html
<!-- El elemento <a> enlaza a la sección de abajo -->
<p><a href="#Sección_más_abajo">Ir al encabezado de más abajo</a></p>

<!-- Encabezado al que se enlaza -->
<h2 id="Sección_más_abajo">Sección más abajo</h2>
```

#### Resultado

{{EmbedLiveSample('Enlazar a un elemento en la misma página')}}

> [!NOTE]
> Puedes usar `href="#top"` o el fragmento vacío (`href="#"`) para enlazar a la parte superior de la página actual, [tal como se define en la especificación HTML](https://html.spec.whatwg.org/multipage/browsing-the-web.html#scroll-to-the-fragment-identifier).

### Enlazar a una dirección de correo electrónico

Para crear enlaces que se abran en el programa de correo del usuario y le permitan enviar un mensaje nuevo, usa el esquema `mailto:`:

```html
<a href="mailto:nowhere@mozilla.org">Enviar correo a nowhere</a>
```

#### Resultado

{{EmbedLiveSample('Enlazar a una dirección de correo electrónico')}}

Para más detalles sobre las URL `mailto:`, como incluir un asunto o un cuerpo, consulta [Enlaces de correo](/es/docs/Learn_web_development/Core/Structuring_content/Creating_links#enlace_a_correo_electrónico) o {{RFC(6068)}}.

### Enlazar a números de teléfono

```html
<a href="tel:+49.157.0156">+49 157 0156</a>
<a href="tel:+1(800)555-0123">(800) 555-0123</a>
```

#### Resultado

{{EmbedLiveSample('Enlazar a números de teléfono')}}

El comportamiento de los enlaces `tel:` varía según las capacidades del dispositivo:

- Los dispositivos celulares marcan el número automáticamente.
- La mayoría de los sistemas operativos tienen programas que pueden realizar llamadas, como Skype o FaceTime.
- Los sitios web pueden realizar llamadas telefónicas con {{domxref("Navigator/registerProtocolHandler", "registerProtocolHandler")}}, como `web.skype.com`.
- Otros comportamientos incluyen guardar el número en los contactos, o enviarlo a otro dispositivo.

Consulta {{RFC(3966)}} para conocer la sintaxis, características adicionales y otros detalles sobre el esquema de URL `tel:`.

### Usar el atributo download para guardar un \<canvas> como PNG

Para guardar el contenido de un elemento {{HTMLElement("canvas")}} como una imagen, puedes crear un enlace cuyo `href` sean los datos del canvas como una URL `data:` creada con JavaScript, y el atributo `download` especifique el nombre de archivo para el PNG descargado:

#### Ejemplo de aplicación de dibujo con enlace de guardado

##### HTML

```html
<p>
  Pinta manteniendo presionado el botón del mouse y moviéndolo.
  <a href="" download="mi_pintura.png">Descargar mi pintura</a>
</p>

<canvas width="300" height="300"></canvas>
```

##### CSS

```css
html {
  font-family: sans-serif;
}
canvas {
  background: white;
  border: 1px dashed;
}
a {
  display: inline-block;
  background: #6699cc;
  color: white;
  padding: 5px 10px;
}
```

##### JavaScript

```js
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
c.fillStyle = "hotpink";
let isDrawing;

function draw(x, y) {
  if (isDrawing) {
    c.beginPath();
    c.arc(x, y, 10, 0, Math.PI * 2);
    c.closePath();
    c.fill();
  }
}

canvas.addEventListener("mousemove", (event) =>
  draw(event.offsetX, event.offsetY),
);
canvas.addEventListener("mousedown", () => (isDrawing = true));
canvas.addEventListener("mouseup", () => (isDrawing = false));

document
  .querySelector("a")
  .addEventListener(
    "click",
    (event) => (event.target.href = canvas.toDataURL()),
  );
```

##### Resultado

{{EmbedLiveSample('Ejemplo de aplicación de dibujo con enlace de guardado', '100%', '400')}}

## Seguridad y privacidad

Los elementos `<a>` pueden tener consecuencias para la seguridad y la privacidad de los usuarios. Consulta [Cabecera `Referer`: consideraciones de privacidad y seguridad](/es/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns) para más información.

Usar `target="_blank"` sin [`rel="noreferrer"`](/es/docs/Web/HTML/Reference/Attributes/rel/noreferrer) ni [`rel="noopener"`](/es/docs/Web/HTML/Reference/Attributes/rel/noopener) hace que el sitio web sea vulnerable a ataques de explotación de la API {{domxref("window.opener")}}, aunque cabe destacar que, en las versiones más recientes de los navegadores, establecer `target="_blank"` proporciona implícitamente la misma protección que establecer `rel="noopener"`. Consulta [compatibilidad con navegadores](#compatibilidad_con_navegadores) para más detalles.

## Resumen técnico

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/es/docs/Web/HTML/Guides/Content_categories"
          >Categorías de contenido</a
        >
      </th>
      <td>
        <a href="/es/docs/Web/HTML/Guides/Content_categories#contenido_de_flujo"
          >Contenido de flujo</a
        >,
        <a href="/es/docs/Web/HTML/Guides/Content_categories#contenido_de_frase"
          >contenido de frase</a
        >,
        <a
          href="/es/docs/Web/HTML/Guides/Content_categories#contenido_interactivo"
          >contenido interactivo</a
        >, contenido palpable.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenido permitido</th>
      <td>
        <a
          href="/es/docs/Web/HTML/Guides/Content_categories#modelo_de_contenido_transparente"
          >Transparente</a
        >, excepto que ningún descendiente puede ser
        <a
          href="/es/docs/Web/HTML/Guides/Content_categories#contenido_interactivo"
          >contenido interactivo</a
        > ni un elemento
        <code>&lt;a&gt;</code>, y ningún descendiente puede tener un
        atributo
        <a
          href="/es/docs/Web/HTML/Reference/Global_attributes/tabindex"
          >tabindex</a
        > especificado.
      </td>
    </tr>
    <tr>
      <th scope="row">Omisión de etiquetas</th>
      <td>Ninguna, tanto la etiqueta de apertura como la de cierre son obligatorias.</td>
    </tr>
    <tr>
      <th scope="row">Elementos padres permitidos</th>
      <td>
        Cualquier elemento que acepte
        <a href="/es/docs/Web/HTML/Guides/Content_categories#contenido_de_flujo"
          >contenido de flujo</a
        >, pero no otros elementos <code>&lt;a&gt;</code>.
      </td>
    </tr>
    <tr>
      <th scope="row">Rol ARIA implícito</th>
      <td>
        <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a> cuando el atributo <code>href</code> está
        presente; en caso contrario,
        <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"><code>generic</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Roles ARIA permitidos</th>
      <td>
        <p>Cuando el atributo <code>href</code> está presente:</p>
        <ul>
          <li><a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"><code>button</code></a></li>
          <li><a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role"><code>checkbox</code></a></li>
          <li><a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role"><code>menuitem</code></a></li>
          <li><a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a></li>
          <li><a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role"><code>menuitemradio</code></a></li>
          <li><a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/option_role"><code>option</code></a></li>
          <li><a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role"><code>radio</code></a></li>
          <li><a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role"><code>switch</code></a></li>
          <li><a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role"><code>tab</code></a></li>
          <li><a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role"><code>treeitem</code></a></li>
        </ul>
        <p>Cuando el atributo <code>href</code> no está presente:</p>
        <ul>
          <li>cualquiera</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Interfaz DOM</th>
      <td>{{DOMxRef("HTMLAnchorElement")}}</td>
    </tr>
  </tbody>
</table>

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{HTMLElement("link")}} es similar a `<a>`, pero se usa para hipervínculos de metadatos que son invisibles para los usuarios.
- {{CSSxRef(":link")}} es una pseudoclase CSS que coincide con elementos `<a>` cuya URL en el atributo `href` aún no ha sido visitada por el usuario.
- {{CSSxRef(":visited")}} es una pseudoclase CSS que coincide con elementos `<a>` cuya URL en el atributo `href` ya fue visitada por el usuario en el pasado.
- {{CSSxRef(":any-link")}} es una pseudoclase CSS que coincide con elementos `<a>` que tienen el atributo `href`.
- Los [fragmentos de texto](/es/docs/Web/URI/Reference/Fragment/Text_fragments) son instrucciones para el agente de usuario, añadidas a las URL, que permiten a los autores de contenido enlazar a un texto específico de una página sin necesidad de ID.
